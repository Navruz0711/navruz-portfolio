const config = {
  title: "Ergashev Navruz | Frontend Developer & UI/UX Engineer",
  siteName: "Ergashev Navruz Portfolio",
  description: {
    long: "Ergashev Navruz - Creative Frontend Developer and Software Engineer specializing in modern web development, React, Next.js, TypeScript, Tailwind CSS, 3D Web animations (Three.js/Spline), and performant UI/UX design. Based in Tashkent, Uzbekistan.",
    short:
      "Ergashev Navruz - Frontend Developer specializing in React, Next.js, TypeScript, 3D web experiences, and modern UI/UX design.",
    uz: "Ergashev Navruz - Tajribali Frontend dasturchi. React, Next.js, TypeScript, Tailwind CSS va 3D veb-saytlar yaratish bo'yicha mutaxassis. Toshkent, O'zbekiston.",
    ru: "Эргашев Навруз - Frontend разработчик и UI/UX специалист. Разработка современных интерактивных сайтов на React, Next.js, TypeScript и 3D веб-технологиях.",
  },
  keywords: [
    // Brand & Personal Names
    "Ergashev Navruz",
    "Navruz Ergashev",
    "Ergashev Navruzbek",
    "Navruzbek Ergashev",
    "Navruz0711",
    "Navruz dasturchi",
    "Эргашев Навруз",
    "Навруз Эргашев",
    
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

    // Location & Market
    "Frontend Developer Uzbekistan",
    "Frontend Developer Tashkent",
    "Web Developer Tashkent",
    "Dasturchi Toshkent",
    "Sayt yaratish Toshkent",
    "Sayt ochish O'zbekiston",
    "Разработчик сайтов Ташкент",
    "Фронтенд разработчик Узбекистан",

    // Intent & Portfolio keywords
    "Portfolio",
    "Frontend Portfolio",
    "3D Portfolio",
    "Interactive Portfolio",
    "Web Development Services",
    "Hire Frontend Developer",
    "Freelance Frontend Developer",
    "Creative Web Design",
    "Modern Web Applications",
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
  },
};
export { config };

