"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Zap,
  Award,
  TrendingUp,
  Globe,
  Layers,
  Sparkles,
  Code2,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { config } from "@/data/config";
import { useLanguage } from "@/context/language-context";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Button } from "../ui/button";

export default function ServicesAndFaqSection() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const telegramUrl =
    language === "ru"
      ? "https://t.me/Ergashev_Nz?text=Здравствуйте%20Навруз!%20Хочу%20заказать%20разработку%20сайта."
      : language === "en"
      ? "https://t.me/Ergashev_Nz?text=Hello%20Navruz!%20I%20would%20like%20to%20order%20a%20website."
      : "https://t.me/Ergashev_Nz?text=Assalomu%20alaykum%20Navruz!%20Sayt%20buyurtma%20qilmoqchi%20edim.";

  const content = {
    uz: {
      sectionTitle: "XIZMATLAR & KAFOLATLAR",
      sectionDesc:
        "Mijozlar uchun yuqori sifatli veb-ishlanmalar, rasmiy kafolat va Google qidiruvida yetakchilik.",
      guaranteesTitle: "Nega mijozlar aynan meni tanlashadi?",
      guaranteesSubtitle: "Har bir loyihada 100% natija va xotirjamlik",
      guarantees: [
        {
          icon: ShieldCheck,
          title: "30 Kunlik Bepul Kafolat",
          desc: "Sayt topshirilgandan keyin 30 kun davomida bepul texnik yordam va xatoliklarni bartaraf etish.",
        },
        {
          icon: Zap,
          title: "Tezkor Topshirish (3-7 kun)",
          desc: "Loyiha belgilangan vaqtda, ortiqcha kechikishlarsiz, 98% muvaffaqiyat bilan topshiriladi.",
        },
        {
          icon: Award,
          title: "Kwork Oliy Reyting (Top-Rated)",
          desc: "47+ muvaffaqiyatli topshirilgan loyiha va 100% besh yulduzli (5★) mijozlar taqrizi.",
        },
        {
          icon: TrendingUp,
          title: "Mukammal SEO & Tezlik",
          desc: "Sayt Google va Yandexda yuqori o'rinlarni egallashi uchun 95+ PageSpeed bali bilan optimallashadi.",
        },
      ],
      servicesTitle: "Qanday xizmatlar ko'rsataman?",
      services: [
        {
          icon: Globe,
          title: "Landing Page & Sotuvchi Saytlar",
          desc: "Biznesingiz uchun mijoz oqimini oshiruvchi, reklama (Target/Context) uchun to'liq moslashtirilgan veb-sahifalar.",
          features: ["Yuqori konversiya", "Tez yuklanish", "Telegram botga buyurtma tushishi"],
        },
        {
          icon: Sparkles,
          title: "3D & Interaktiv Veb-saytlar",
          desc: "Three.js va Spline yordamida mijozlarni lol qoldiradigan, brendingizni raqobatchilardan ajratib turuvchi 3D saytlar.",
          features: ["Zamonaviy WebGL", "Silliq animatsiyalar", "Mobil qurilmalarga mos"],
        },
        {
          icon: Layers,
          title: "Korporativ Sayt & Web Ilovalar",
          desc: "Next.js 15, React va TypeScript asosida to'liq xavfsiz, boshqarish oson bo'lgan korporativ tizimlar va CRM.",
          features: ["Qulay admin panel", "Xavfsiz arxitektura", "Ko'p tilli qo'llab-quvvatlash"],
        },
        {
          icon: Code2,
          title: "Figma dizaynni kodga aylantirish",
          desc: "Figma yoki boshqa maketlarni pikselma-piksel aniqlikda, toza va to'liq moslashuvchan (responsive) frontendga aylantirish.",
          features: ["Pixel-perfect natija", "Barcha ekranlarga mos", "Toza va tushunarli kod"],
        },
      ],
      faqTitle: "Ko'p beriladigan savollar (FAQ)",
      faqs: [
        {
          q: "Sayt yaratish narxi qancha?",
          a: "Sayt narxi loyihaning murakkabligi, sahifalar soni va kerakli funksiyalarga qarab individual hisoblanadi. Landing page saytlar qulay boshlang'ich byudjetdan boshlanadi. Telegram orqali yozsangiz, 15 daqiqada bepul aniq narxni hisoblab beraman.",
        },
        {
          q: "Sayt qancha vaqtda tayyor bo'ladi?",
          a: "Oddiy landing page saytlar 3-5 kunda, korporativ yoki murakkab 3D veb-saytlar 1-2 haftada to'liq tayyor holatda topshiriladi.",
        },
        {
          q: "Loyiha topshirilgandan keyin yordam berasizmi?",
          a: "Albatta! Har bir mijozga 30 kunlik bepul texnik kafolat taqdim etiladi. Xatoliklar yoki mayda o'zgartirishlar bepul hal qilib beriladi.",
        },
        {
          q: "Saytim Google va Yandex qidiruvida chiqadimi?",
          a: "Ha! Men yaratgan barcha saytlarga to'liq texnik SEO, Schema.org mikro-formatlar, sitemap va tezlik optimallashtirish qilinadi va Google Search Console hamda Yandex Webmasterga ulanadi.",
        },
        {
          q: "Buyurtma berish uchun nima qilish kerak?",
          a: "Telegramda @Ergashev_Nz ga yozing yoki qo'ng'iroq qiling. Saytingiz maqsadini muhokama qilamiz va darhol ishni boshlaymiz!",
        },
      ],
      ctaTitle: "O'z biznesingiz uchun zamonaviy sayt buyurtma qiling",
      ctaDesc: "15 daqiqa ichida bepul maslahat oling va loyihangiz narxini bilib oling.",
      ctaButton: "Telegramda loyihani boshlash 🚀",
    },
    ru: {
      sectionTitle: "УСЛУГИ И ГАРАНТИИ",
      sectionDesc:
        "Разработка современных веб-сайтов под ключ с официальной гарантией и выводом в топ поиска.",
      guaranteesTitle: "Почему клиенты выбирают именно меня?",
      guaranteesSubtitle: "100% результат, прозрачность и спокойствие за ваш проект",
      guarantees: [
        {
          icon: ShieldCheck,
          title: "30 Дней Бесплатной Гарантии",
          desc: "Бесплатная техническая поддержка и исправление любых нюансов в течение месяца после сдачи.",
        },
        {
          icon: Zap,
          title: "Сдача в срок (3-7 дней)",
          desc: "Строгое соблюдение дедлайнов без задержек. Успешность сдачи заказов — 98%.",
        },
        {
          icon: Award,
          title: "Высший рейтинг на Kwork",
          desc: "47+ успешно сданных заказов со 100% 5-звездочными положительными отзывами клиентов.",
        },
        {
          icon: TrendingUp,
          title: "SEO и Скорость 95+ PageSpeed",
          desc: "Полная оптимизация для быстрого выхода в топ Google и Яндекс с максимальной скоростью загрузки.",
        },
      ],
      servicesTitle: "Что я разрабатываю для клиентов?",
      services: [
        {
          icon: Globe,
          title: "Landing Page и Продающие Сайты",
          desc: "Одностраничные сайты с высокой конверсией, адаптированные под таргетированную и контекстную рекламу.",
          features: ["Высокая конверсия", "Мгновенная загрузка", "Заявки прямо в Telegram"],
        },
        {
          icon: Sparkles,
          title: "3D и Интерактивные Сайты",
          desc: "Инновационные веб-сайты с Three.js и Spline 3D, которые производят вау-эффект и выделяют ваш бренд.",
          features: ["Современный WebGL", "Плавные анимации", "Идеально на смартфонах"],
        },
        {
          icon: Layers,
          title: "Корпоративные Сайты и Web App",
          desc: "Безопасные и масштабируемые веб-системы на Next.js 15, React и TypeScript с удобной админ-панелью.",
          features: ["Удобное управление", "Надежный стек", "Мультиязычность"],
        },
        {
          icon: Code2,
          title: "Верстка из Figma Pixel-Perfect",
          desc: "Перенос дизайна из Figma в чистый, валидный и быстрый код с идеальной адаптивностью.",
          features: ["100% совпадение с макетом", "Все устройства", "Чистая архитектура"],
        },
      ],
      faqTitle: "Часто задаваемые вопросы (FAQ)",
      faqs: [
        {
          q: "Сколько стоит разработка сайта?",
          a: "Стоимость рассчитывается индивидуально в зависимости от объема и функционала. Лендинги стартуют от доступного бюджета. Напишите в Telegram, и за 15 минут я рассчитаю точную смету.",
        },
        {
          q: "В какие сроки будет готов сайт?",
          a: "Лендинг обычно разрабатывается за 3-5 дней. Корпоративные сайты и 3D веб-проекты — от 1 до 2 недель.",
        },
        {
          q: "Предоставляется ли гарантия после сдачи?",
          a: "Да! Я даю 30 дней бесплатной гарантии на все выполненные работы, включая помощь с хостингом и мелкие правки.",
        },
        {
          q: "Будет ли сайт виден в Google и Яндекс?",
          a: "Обязательно. Каждый сайт настраивается с учетом базового и технического SEO, микроразметки Schema.org и подключается к Google Search Console и Яндекс Вебмастеру.",
        },
        {
          q: "Как начать работу над проектом?",
          a: "Напишите мне в Telegram @Ergashev_Nz. Мы обсудим ваши задачи, составим план и запустим разработку.",
        },
      ],
      ctaTitle: "Готовы запустить современный сайт для вашего бизнеса?",
      ctaDesc: "Получите бесплатную консультацию и расчет стоимости за 15 минут.",
      ctaButton: "Начать проект в Telegram 🚀",
    },
    en: {
      sectionTitle: "SERVICES & GUARANTEES",
      sectionDesc:
        "High-performance websites, official guarantees, and first-page search engine ranking.",
      guaranteesTitle: "Why Clients Choose To Work With Me",
      guaranteesSubtitle: "Guaranteed results, clean code, and zero stress for your business",
      guarantees: [
        {
          icon: ShieldCheck,
          title: "30-Day Free Warranty",
          desc: "Complimentary technical support and bug fixes for a full month after project delivery.",
        },
        {
          icon: Zap,
          title: "Fast Turnaround (3-7 Days)",
          desc: "Strict deadline adherence with 98% on-time delivery rate.",
        },
        {
          icon: Award,
          title: "Top-Rated Kwork Seller",
          desc: "47+ commercial projects delivered with 100% 5-star client ratings.",
        },
        {
          icon: TrendingUp,
          title: "Superior SEO & 95+ Speed",
          desc: "Optimized for Google first-page results with blazing fast Core Web Vitals performance.",
        },
      ],
      servicesTitle: "Core Services Offered",
      services: [
        {
          icon: Globe,
          title: "Landing Pages & Conversion Funnels",
          desc: "High-converting web pages built specifically to turn ad traffic into paying customers.",
          features: ["Conversion-focused", "Blazing fast", "Telegram & CRM leads"],
        },
        {
          icon: Sparkles,
          title: "3D & Interactive Web Experiences",
          desc: "Engaging 3D animations with Three.js and Spline that elevate your brand identity.",
          features: ["Modern WebGL", "Smooth animations", "Mobile-optimized"],
        },
        {
          icon: Layers,
          title: "Corporate Websites & Web Apps",
          desc: "Enterprise-grade Next.js 15, React, and TypeScript applications with custom admin control.",
          features: ["Intuitive CMS", "Robust architecture", "Multi-language ready"],
        },
        {
          icon: Code2,
          title: "Pixel-Perfect Figma to Code",
          desc: "Converting Figma designs into clean, semantic, responsive frontend components.",
          features: ["Pixel-perfect accuracy", "Fully responsive", "Clean codebase"],
        },
      ],
      faqTitle: "Frequently Asked Questions (FAQ)",
      faqs: [
        {
          q: "How much does a website cost?",
          a: "Pricing is transparent and based on requirements and timeline. Message me on Telegram, and I will prepare a free breakdown within 15 minutes.",
        },
        {
          q: "How fast will my project be ready?",
          a: "Standard landing pages take 3-5 days. Larger corporate portals or 3D web applications take 1-2 weeks.",
        },
        {
          q: "Do you offer post-launch support?",
          a: "Yes! Every project includes a 30-day free warranty covering bug fixes and maintenance.",
        },
        {
          q: "Will the site rank on Google?",
          a: "Yes. All projects are built with technical SEO, semantic HTML, Schema.org microdata, and submitted to search consoles.",
        },
        {
          q: "How do we get started?",
          a: "Simply ping me on Telegram @Ergashev_Nz or drop an email. We'll discuss goals and kick off immediately.",
        },
      ],
      ctaTitle: "Ready to launch an exceptional web project?",
      ctaDesc: "Get a free 15-minute consultation and custom cost estimate.",
      ctaButton: "Start on Telegram 🚀",
    },
  }[language] || {
    sectionTitle: "XIZMATLAR & KAFOLATLAR",
    sectionDesc: "Mijozlar uchun yuqori sifatli veb-ishlanmalar va kafolat.",
    guaranteesTitle: "Nega mijozlar meni tanlashadi?",
    guaranteesSubtitle: "100% natija",
    guarantees: [],
    servicesTitle: "Xizmatlar",
    services: [],
    faqTitle: "FAQ",
    faqs: [],
    ctaTitle: "Loyiha bormi?",
    ctaDesc: "Maslahat oling",
    ctaButton: "Telegram",
  };

  return (
    <SectionWrapper id="services" className="max-w-7xl mx-auto py-16 px-4">
      <SectionHeader
        id="services"
        className="mb-12 md:mb-16"
        title={content.sectionTitle}
        desc={content.sectionDesc}
      />

      {/* Guarantees 4-Grid */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {content.guaranteesTitle}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            {content.guaranteesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-border/80 backdrop-blur-md shadow-sm hover:shadow-lg hover:border-emerald-500/40 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {content.servicesTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-border/80 backdrop-blur-md shadow-sm hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {srv.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-border/40">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="mb-16 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {content.faqTitle}
          </h3>
        </div>

        <div className="space-y-3">
          {content.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-muted-foreground transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Telegram Action Callout Banner */}
      <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-emerald-600/15 via-sky-600/15 to-blue-600/15 border border-emerald-500/30 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Top-Rated Freelancer (Kwork 100% 5★)
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold text-foreground">
            {content.ctaTitle}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            {content.ctaDesc}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#229ED9] hover:bg-[#1e8cc0] text-white font-semibold shadow-lg shadow-sky-500/25 cursor-pointer">
                <SiTelegram size={20} />
                <span>{content.ctaButton}</span>
              </Button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 cursor-pointer">
                <span>Forma orqali yozish</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
