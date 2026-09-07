const config = {
  title: "Ergashev Navruz — Senior Frontend Developer & Veb-Sayt Yaratish | Tashkent",
  siteName: "Ergashev Navruz Portfolio",
  description: {
    long: "Ergashev Navruz - Kwork platformasida 100% ijobiy natijali Top-Rated Senior Frontend dasturchi. Zamonaviy 3D veb-saytlar, yuqori konversiyali landing page va murakkab veb-ilovalarni yaratish. Toshkent, O'zbekiston. Buyurtma berish: @Ergashev_Nz",
    short:
      "Ergashev Navruz — Senior Frontend Developer, 3D Web & UI/UX mutaxassisi. Toshkentda buyurtma asosida zamonaviy va tezkor veb-saytlar yaratish.",
    uz: "Ergashev Navruz - Kwork Oliy Reytingli Frontend dasturchi. Sayt yaratish, 3D veb tajribalar, landing page va biznes ilovalari. Toshkent, O'zbekiston. Aloqa: @Ergashev_Nz",
    ru: "Эргашев Навруз - Senior Frontend разработчик и специалист по созданию сайтов в Ташкенте. Топ-1 фрилансер Kwork (100% 5★). 3D сайты, лендинги, Next.js, React под ключ.",
  },
  keywords: [
    // Brand & Personal Names (Barcha qidiruv variantlari)
    "Navruz",
    "navruz",
    "Navro'z",
    "Ergashev Navruz",
    "Navruz Ergashev",
    "Ergashev Navruzbek",
    "Navruzbek Ergashev",
    "Navruz0711",
    "Navruz dasturchi",
    "Navruz developer",
    "Navruz frontend",
    "Navruz veb sayt",
    "Navruz portfolio",
    "Эргашев Навруз",
    "Навруз Эргашев",
    "Навруз",
    "Навруз разработчик",
    "Навруз программист",
    "Навруз фрилансер",
    "expertweb",
    
    // Core Roles & Titles
    "Frontend Developer",
    "Senior Frontend Developer",
    "Creative Developer",
    "Web Developer",
    "Software Engineer",
    "UI/UX Engineer",
    "Full Stack Developer",
    "Фронтенд разработчик",
    "Frontend dasturchi",
    "Veb dasturchi",
    "Dasturchi Toshkent",

    // Tech Stack & Frameworks
    "React",
    "React.js",
    "Next.js",
    "Next.js 15",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Three.js",
    "Spline 3D",
    "WebGL",
    "Framer Motion",
    "Node.js",
    "REST API",
    "GraphQL",
    "PWA",

    // Client Purchase Intent (Uzbek)
    "Sayt yaratish",
    "Sayt yaratish Toshkent",
    "Sayt ochish O'zbekiston",
    "Sayt buyurtma qilish",
    "Veb sayt yaratish narxi",
    "Landing page yaratish",
    "Internet do'kon yaratish",
    "3D veb sayt yaratish",
    "Toshkentda sayt yasash",
    "Professional dasturchi xizmati",
    "Frontend dasturchi O'zbekiston",
    "Arzon va sifatli veb sayt",
    "Vizitka sayt yaratish",
    "Telegram webapp yaratish",
    "Sayt zakaz qilish",

    // Client Purchase Intent (Russian)
    "Создание сайтов Ташкент",
    "Разработка сайтов Ташкент",
    "Заказать сайт в Ташкенте",
    "Создание сайтов Узбекистан",
    "Фронтенд разработчик Узбекистан",
    "Создание лендингов под ключ",
    "Разработчик сайтов Ташкент",
    "Заказать 3D сайт",
    "Разработка интернет-магазина Ташкент",
    "Создание корпоративного сайта",
    "Купить сайт Ташкент",

    // Intent & Portfolio keywords (English)
    "Portfolio",
    "Frontend Portfolio",
    "3D Portfolio",
    "Interactive Portfolio",
    "Web Development Services",
    "Hire Frontend Developer",
    "Freelance Frontend Developer",
    "Creative Web Design",
    "Modern Web Applications",
    "Hire React Developer Tashkent",
    "Hire Next.js Developer Uzbekistan",
  ],
  author: "Ergashev Navruz",
  email: "uznav715@gmail.com",
  site: "https://portfolio-navruz.vercel.app",
  location: {
    city: "Tashkent",
    country: "Uzbekistan",
    countryCode: "UZ",
  },

  // Verification codes for Search Engines (can also be populated via process.env)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
  },

  // for github stars button
  githubUsername: "Navruz0711",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  get avatarImg() {
    return this.site + "/assets/me.jpg";
  },
  social: {
    twitter: "",
    twitterHandle: "@Navruz0711",
    linkedin: "https://www.linkedin.com/in/ergashev-navruz",
    instagram: "",
    facebook: "",
    github: "https://github.com/Navruz0711",
    telegram: "https://t.me/Ergashev_Nz",
    telegramDirect: "https://t.me/Ergashev_Nz?text=Assalomu%20alaykum%20Navruz!%20Loyiha%20bo'yicha%20maslahat%20olmoqchi%20edim.",
    kwork: "https://kwork.ru/user/expertweb",
  },
};
export { config };

