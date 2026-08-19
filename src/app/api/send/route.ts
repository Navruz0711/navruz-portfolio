import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";


const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sendTelegramNotification(fullName: string, email: string, message: string) {
  const botToken = Buffer.from('ODcyMTczNDE1ODpBQUVvNzI1ME1Xa2tLTEpVbXZhRnlRLWk4RGU1Z0RZU1ctdw==', 'base64').toString();
  const chatId = "734398874";
  if (!botToken || !chatId) return;

  const text =
    `🚀 <b>Portfolio saytingizdan yangi xabar!</b>\n\n` +
    `👤 <b>Ism:</b> ${escapeHtml(fullName)}\n` +
    `📧 <b>Email:</b> ${escapeHtml(email)}\n` +
    `💬 <b>Xabar:</b>\n${escapeHtml(message)}\n\n` +
    `📅 <i>${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}</i>`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("Telegram API error:", err);
    }
  } catch (error) {
    console.error("Telegram notification error:", error);
  }
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    // Send Telegram Notification in background
    await sendTelegramNotification(zodData.fullName, zodData.email, zodData.message);

    const apiKey = Buffer.from('cmVfRmZiV0NyRDhfTmI1anhWNHlZTHZXS0ZMVGlFY3JXZ0F1', 'base64').toString();
    if (!apiKey) {
      return Response.json({ message: "Message sent via Telegram!" });
    }

    const resend = new Resend(apiKey);
    const targetEmail = config.email || "uznav715@gmail.com";
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [targetEmail],
      subject: `New contact from ${zodData.fullName}`,
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }) as React.ReactElement,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
    }

    return Response.json(resendData || { success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
