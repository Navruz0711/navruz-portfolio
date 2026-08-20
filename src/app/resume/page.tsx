import { redirect } from "next/navigation";

export const metadata = {
  title: "Résumé | Ergashev Navruz",
  description: "Download the résumé of Ergashev Navruz — Frontend Developer.",
};

export default function ResumePage() {
  redirect("/Ergashev_Navruz_Resume.pdf");
}
