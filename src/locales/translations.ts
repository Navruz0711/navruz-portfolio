export type Language = "uz" | "ru" | "en";

export interface ProjectTranslation {
  category: string;
  headline: string;
  description: string;
  highlights: string[];
}

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    blogs: string;
    contact: string;
    resume: string;
    menu: string;
    close: string;
  };
  hero: {
    role: string;
    tagline: string;
    talkToMe: string;
    viewResume: string;
    availableForWork: string;
    letsBuild: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
    kworkBadge: string;
    kworkTitle: string;
    stats: {
      status: { label: string; value: string; sub: string };
      orders: { label: string; value: string; sub: string };
      reviews: { label: string; value: string; sub: string };
      success: { label: string; value: string; sub: string };
      onTime: { label: string; value: string; sub: string };
      repeat: { label: string; value: string; sub: string };
    };
    items: {
      id: number;
      startDate: string;
      endDate: string;
      title: string;
      company: string;
      description: string[];
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    visit: string;
    source: string;
    frontendStack: string;
    backendStack: string;
    highlights: string;
    items: Record<string, ProjectTranslation>;
  };
  contact: {
    title: string;
    heading: string;
    subtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sendingButton: string;
    successMessage: string;
    errorMessage: string;
    validation: {
      fullName: string;
      email: string;
      message: string;
    };
  };
  resume: {
    back: string;
    download: string;
  };
  radial: {
    hint: string;
  };
  footer: {
    rights: string;
    blog: string;
    newsletter: string;
    privacy: string;
    terms: string;
  };
  blog: {
    backToPortfolio: string;
    newsletterBadge: string;
    tagline: string;
    title: string;
    highlight: string;
    subtitle: string;
    featured: string;
    minRead: string;
    readArticle: string;
    noPosts: string;
    allPosts: string;
    backToAll: string;
    publishedOn: string;
    author: string;
    newsletterBanner: {
      badge: string;
      title: string;
      description: string;
      button: string;
    };
  };
  newsletter: {
    backToPortfolio: string;
    readBlog: string;
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    cardTitle: string;
    cardSubtitle: string;
    emailPlaceholder: string;
    subscribeButton: string;
    submittingButton: string;
    successTitle: string;
    successDesc: string;
    subscribeAnother: string;
    errorInvalid: string;
    trustBadges: {
      noSpam: string;
      frequency: string;
      freeSnippets: string;
    };
    perks: {
      badge: string;
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    archive: {
      badge: string;
      title: string;
      countLabel: string;
      keyTopics: string;
      items: {
        id: string;
        number: string;
        title: string;
        date: string;
        readTime: string;
        category: string;
        summary: string;
        highlights: string[];
      }[];
    };
  };
}

export const translations: Record<Language, TranslationSchema> = {
  uz: {
    nav: {
      home: "Asosiy",
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      experience: "Tajriba",
      projects: "Loyihalar",
      blogs: "Blog",
      contact: "Aloqa",
      resume: "Rezyume",
      menu: "Menyu",
      close: "Yopish",
    },
    hero: {
      role: "Frontend Dasturchi",
      tagline: "Yuqori unumdorlikka ega, zamonaviy, tezkor va interaktiv foydalanuvchi interfeyslarini (UI/UX) yarataman.",
      talkToMe: "Bog'lanish",
      viewResume: "Rezyume",
      availableForWork: "Yangi loyihalar uchun ochiqman",
      letsBuild: "Birgalikda ajoyib loyiha yaratamiz! 🚀",
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Zamonaviy frontend texnologiyalari & vositalar",
    },
    experience: {
      title: "Tajriba",
      subtitle: "Kasbiy tajriba & Freelance natijalari",
      kworkBadge: "★ Top Rated Freelancer",
      kworkTitle: "Kwork Platformasi — Rasmiy Reyting & Ko'rsatkichlar",
      stats: {
        status: { label: "Status", value: "Oliy Reyting", sub: "Top sotuvchi (Kwork)" },
        orders: { label: "Buyurtmalar", value: "44", sub: "Muvaffaqiyatli bajarilgan" },
        reviews: { label: "Taqrizlar", value: "32", sub: "100% ijobiy fikrlar" },
        success: { label: "Muvaffaqiyat", value: "98%", sub: "Topshirilgan buyurtmalar" },
        onTime: { label: "Vaqtida", value: "89%", sub: "O'z vaqtida topshirilgan" },
        repeat: { label: "Doimiy", value: "32%", sub: "Qayta buyurtmalar" },
      },
      items: [
        {
          id: 1,
          startDate: "2022",
          endDate: "Hozirgacha",
          title: "Freelance Frontend Developer (Высший рейтинг)",
          company: "Kwork Platformasi",
          description: [
            "Kwork frilans platformasida «Продавец с высшим рейтингом» darajasi — 44 ta buyurtma muvaffaqiyatli topshirilgan va 32 ta ijobiy taqriz olingan.",
            "98% buyurtmalar a'lo darajada topshirilgan, 89% o'z vaqtida topshirilgan, 32% mijozlar qayta buyurtma bergan.",
            "HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS va TypeScript yordamida murakkab va moslashuvchan interfeyslar yaratilgan.",
            "Figma va dizayn maketlarini pikselma-piksel aniqlikda sifatli va toza frontend kodiga aylantirish.",
          ],
        },
        {
          id: 2,
          startDate: "2023",
          endDate: "Hozirgacha",
          title: "Frontend & Web Application Developer",
          company: "Tijoriy loyihalar & Mijoz yechimlari",
          description: [
            "17 dan ortiq tijoriy veb-saytlar, e-commerce platformalari, xizmat ko'rsatish portallari va Telegram Web App (TWA) larni noldan ishlab chiqdim.",
            "Tezkor yuklanuvchi, toza komponentli arxitektura va zamonaviy UI/UX standartlariga javob beruvchi dizayn.",
            "Core Web Vitals, SEO va barcha mobil/planshet qurilmalarda 100% adaptivlik.",
          ],
        },
      ],
    },
    projects: {
      title: "Loyihalar",
      subtitle: "Men yaratgan tanlangan veb-ilovalar va saytlar",
      visit: "Saytni ko'rish",
      source: "Kod",
      frontendStack: "Frontend",
      backendStack: "Backend / Integratsiya",
      highlights: "Asosiy xususiyatlar",
      items: {
        riveria: {
          category: "Dam olish maskani & Ko'chmas mulk",
          headline: "Hashamatli rezidensiyalar va sohil bo'yidagi dam olish maskani.",
          description: "Riveria — zamonaviy ko'chmas mulk va hashamatli dam olish maskanini namoyish qiluvchi veb-ilova. Next.js, React va Tailwind CSS yordamida yaratilgan bo'lib, interaktiv villa ko'rgazmalari, silliq adaptiv galereya va qulay bron qilish imkoniyatini taqdim etadi.",
          highlights: [
            "Optimallashtirilgan Next.js Image orqali yuqori sifatli tasvirlar taqdimoti.",
            "Mobil, planshet va keng ekranli monitorlar uchun moslashuvchan dizayn.",
            "Silliq mikro-animatsiyalar va sahifa o'tish effektlari.",
          ],
        },
        "puti-nn": {
          category: "Logistika & Yuk tashish",
          headline: "Tijoriy logistika va yuk tashish xizmatlari.",
          description: "Yuk tashish va transport logistikasi kompaniyasi uchun korporativ veb-platforma. Interaktiv xizmatlar kalkulyatori, marshrutlar xaritasi, avtopark ma'lumotlari va tezkor ariza qoldirish shaklini o'z ichiga oladi.",
          highlights: [
            "Strukturalangan xizmatlar katalogiga ega tezkor yuklanuvchi korporativ lending.",
            "Mijoz arizalarini darhol tekshirish va qabul qilish tizimi.",
            "Yuqori Core Web Vitals ko'rsatkichlari va SEO uchun to'liq optimallashgan tuzilma.",
          ],
        },
        techx: {
          category: "Gadjetlar & E-Commerce",
          headline: "Yangi avlod gadjetlari va elektronika do'koni.",
          description: "Zamonaviy gadjetlar, interaktiv mahsulot filtrlari, dinamik savat holati va zamonaviy qorong'i (dark mode) uslubiga ega elektron tijorat ilovasi.",
          highlights: [
            "Kategoriyalar bo'yicha dinamik filtrlar va tezkor mahsulot qidiruvi.",
            "Hover effektli va texnik ko'rsatkichlari aks etgan moslashuvchan kartalar.",
            "Xarid qilish jarayoni va qulay holat boshqaruvi (state management).",
          ],
        },
        "paint-beige": {
          category: "San'at & Ijodiy agentlik",
          headline: "Estetik interyer bo'yoqlari va dizayn studiyasi.",
          description: "Dizaynerlik bo'yoqlari kolleksiyasi, devor teksturalari va san'at loyihalarini taqdim etuvchi ijodiy agentlik veb-sayti. Nafis tipografiya va iliq ranglar uyg'unligida yaratilgan.",
          highlights: [
            "Ranglar palitrasi katalogi va tekstura ko'rgazmasi.",
            "Nafis tipografik dizayn va tartibli to'r tuzilishi.",
            "Mobil moslashuvchanlik va silliq sahifa animatsiyalari.",
          ],
        },
        costa: {
          category: "Restoran & Qahvaxona",
          headline: "Mualliflik qahvasi va nafis taomlar veb-tajribasi.",
          description: "Zamonaviy qahvaxona va restoran uchun veb-ilova. Interaktiv menyu bo'limlari, taomlar taqdimoti, onlayn stol band qilish va jozibali vizual kontentni o'z ichiga oladi.",
          highlights: [
            "Toifalar bo'yicha saralangan taomlar va ichimliklar menyusi.",
            "Sana va mehmonlar sonini tanlash imkonini beruvchi stol band qilish oynasi.",
            "Tezkor lazy-loading bilan yuqori sifatli fotosuratlar taqdimoti.",
          ],
        },
        antonkids: {
          category: "Bolalar mahsulotlari & Moda",
          headline: "Bolalar kiyimlari, o'yinchoqlar va aksessuarlar katalogi.",
          description: "Bolalar mahsulotlari, kiyim-kechak to'plamlari va ota-onalar uchun mo'ljallangan yorqin veb-portal. Mahsulotlar toifalari, yosh bo'yicha filtrlar va qulay aloqa shakllariga ega.",
          highlights: [
            "Qulay, yorqin va zamonaviy interfeys.",
            "Yosh va kolleksiyalar bo'yicha tezkor saralash.",
            "Smartfon va planshetlarda tezkor ishlash uchun optimallashtirilgan.",
          ],
        },
        startpervyh: {
          category: "Yoshlar ta'lim platformasi",
          headline: "Yangi avlod yetakchilari va innovatorlarini qo'llab-quvvatlash.",
          description: "Yoshlarni rivojlantirish dasturlari, mentorlik loyihalari, tanlovlar va hamjamiyat tadbirlarini birlashtiruvchi interaktiv ta'lim portali.",
          highlights: [
            "Dinamik tadbirlar taqvimi va ro'yxatdan o'tish tizimi.",
            "Yangiliklar tasmasi va ishtirokchilar yutuqlari kartalari.",
            "Semantik HTML va to'liq moslashuvchan maket.",
          ],
        },
        "balanov-pro": {
          category: "Shaxsiy brend & Media",
          headline: "Media ishlab chiqarish, raqamli konsalting va portfolio.",
          description: "Premium shaxsiy brend va media agentligi veb-sayti. Qorong'i mavzu, maxsus tipografiya, video roliklar va xizmatlarga yozilish modullarini birlashtiradi.",
          highlights: [
            "Yorqin gradientlar bilan zamonaviy dark-mode dizayn.",
            "Media lightbox bilan interaktiv portfolio taqdimoti.",
            "Mijozlarni jalb qilish uchun yuqori konversiyali konsultatsiya shakllari.",
          ],
        },
        tehnoprom: {
          category: "Sanoat & Muhandislik",
          headline: "Sanoat uskunalari va ishlab chiqarish yechimlari.",
          description: "Sanoat mashinasozligi va uskunalari uchun korporativ korxona portali. Texnik ma'lumotlar jadvallari, uskunalar katalogi va B2B buyurtma tizimiga ega.",
          highlights: [
            "Yuklab olinadigan texnik xususiyatlarga ega mahsulotlar katalogi.",
            "Buyurtma parametrlarini tanlash imkonini beruvchi B2B hisob-kitob moduli.",
            "Sanoat darajasidagi ishonchlilik va qulay boshqaruv.",
          ],
        },
        "konda-dom": {
          category: "Qurilish & Ko'chmas mulk",
          headline: "Kalit topshirish asosida uylar qurish va zamonaviy arxitektura.",
          description: "Shahar tashqarisidagi uylar, kottejlar va arxitektura loyihalari uchun qurilish kompaniyasi portali. Loyihalar filtri, reja sxemalari va narx hisoblash vositalariga ega.",
          highlights: [
            "Maydon, qavatlar soni va materiallar bo'yicha interaktiv loyiha filtri.",
            "Qurilish bosqichlari galereyasi va mijozlar loyihalari.",
            "Tezkor konsultatsiya uchun to'g'ridan-to'g'ri aloqa integratsiyasi.",
          ],
        },
        baiagent: {
          category: "Sun'iy intellekt & Avtomatlashtirish",
          headline: "Biznesni AI orqali avtomatlashtirish va intellektual agentlar.",
          description: "Korxona jarayonlarini sun'iy intellekt yordamida avtomatlashtirish, neyrotarmoq integratsiyalari va aqlli chatbotlarni taqdim etuvchi futuristik agentlik portali.",
          highlights: [
            "Kiberpank va neon gradientlar uslubidagi vizual til.",
            "AI xizmatlari interaktiv ko'rgazmasi va taqqoslash jadvallari.",
            "Maksimal tezlikda yuklanuvchi optimallashgan frontend tuzilma.",
          ],
        },
        "balanov-twa": {
          category: "Telegram Web App (TWA)",
          headline: "Sensorli boshqaruvga ega yuqori unumdor Telegram Mini App.",
          description: "Telegram messenjeri ichida qulay foydalanish uchun maxsus ishlab chiqilgan Telegram Web App (TWA). Telegram WebApp SDK, haptik fikr-mulohaza va mobil moslashuvchanlikni qo'llab-quvvatlaydi.",
          highlights: [
            "Telegram WebApp SDK to'liq integratsiyasi va mavzu ranglari sinxronizatsiyasi.",
            "60fps mobil teginish animatsiyalari va tabiiy mobil interfeys.",
            "Telegram ichida zumda ochiluvchi ultra-yengil dastur o'lchami.",
          ],
        },
        quadplay: {
          category: "Geyming & Ko'ngilochar",
          headline: "Kiberarena, kibersport va ko'ngilochar platforma.",
          description: "Geyming klubi va kibersport turnirlari portali. Kompyuterlarni band qilish, turnirlar jadvali, qurilmalar tavsifi va a'zolik mukofotlarini o'z ichiga oladi.",
          highlights: [
            "O'yin zonalari va kompyuter parametrlari vizualizatsiyasi.",
            "Jonli turnir peshqadamlar jadvali va ro'yxatdan o'tish.",
            "Geymerlik RGB uslubidagi animatsiyalar va qorong'i kiber-dizayn.",
          ],
        },
        youti: {
          category: "Raqamli xizmatlar & Platforma",
          headline: "Zamonaviy raqamli xizmatlar va hayot tarzi platformasi.",
          description: "Foydalanuvchilarni oson jalb qilish, qulay xizmatlar navigatsiyasi, interaktiv tariflar va to'g'ridan-to'g'ri mijozlar qo'llab-quvvatlashini ta'minlovchi raqamli xizmatlar markazi.",
          highlights: [
            "Interaktiv xizmatlar taqdimotiga ega toza SaaS dizayn.",
            "Barcha qurilmalarda moslashuvchan tipografiya va toza tuzilma.",
            "Foydalanuvchini tezkor ro'yxatga olish va qo'llab-quvvatlash integratsiyasi.",
          ],
        },
        ramadivineleela: {
          category: "Madaniy & Media portal",
          headline: "Xalqaro madaniy ishlab chiqarish, san'at va media fondi.",
          description: "Media seriallar, teatr tomoshalari, adabiyot va xayriya tashabbuslarini taqdim etuvchi xalqaro madaniy va ma'rifiy veb-sayt.",
          highlights: [
            "Ko'p tilli qo'llab-quvvatlash va xalqaro media striming havolalari.",
            "Oltin rangli aksentlar bilan boy tipografik ierarxiya.",
            "Tadbir sanalari va chiptalarni bron qilish tizimi.",
          ],
        },
        "celitel-mc": {
          category: "Tibbiyot & Sog'liqni saqlash",
          headline: "Klinika diagnostikasi va kompleks tibbiy xizmatlar.",
          description: "Ko'p tarmoqli tibbiyot klinikasi portali. Mutaxassis shifokorlar profillari, onlayn qabulga yozilish, diagnostika narxlari va bemorlar fikrlarini o'z ichiga oladi.",
          highlights: [
            "Mutaxassislik va filiallar bo'yicha shifokorlarni tezkor qidirish.",
            "Onlayn qabulga yozilish va tezkor so'rov yuborish shakli.",
            "Foydalanish qulayligi (accessibility) standartlariga mos toza tibbiy dizayn.",
          ],
        },
        mestoshefa: {
          category: "Pazandalik & Buyurtma rasmiylashtirish",
          headline: "Restoran taomlarini qulay buyurtma qilish va to'lov jarayoni.",
          description: "Konversiyani oshirish uchun maxsus ishlab chiqilgan taom yetkazib berish va to'lov sahifasi. Savatni real vaqtda hisoblash, yetkazish manzilini to'ldirish, promokodlar va to'lov usullarini o'z ichiga oladi.",
          highlights: [
            "Mijoz ma'lumotlarini tezkor tekshiruvchi ko'p bosqichli buyurtma tizimi.",
            "Yetkazib berish vaqtini tanlash va buyurtma hisob-kitobi.",
            "Buyurtmani bekor qilishni minimallashtirish uchun optimallashtirilgan UX.",
          ],
        },
      },
    },
    contact: {
      title: "Aloqa",
      heading: "BIRGALIKDA ISHLAYMIZ",
      subtitle: "Savollaringiz yoki yangi loyihangiz bo'lsa, xabar qoldiring.",
      fullNameLabel: "To'liq ismingiz",
      fullNamePlaceholder: "Ismingizni kiriting",
      emailLabel: "Email manzilingiz",
      emailPlaceholder: "example@gmail.com",
      messageLabel: "Xabaringiz",
      messagePlaceholder: "Loyiha haqida qisqacha yozing...",
      sendButton: "Xabarni yuborish",
      sendingButton: "Yuborilmoqda...",
      successMessage: "Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beraman.",
      errorMessage: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
      validation: {
        fullName: "Ismingiz kamida 2 ta belgidan iborat bo'lishi kerak",
        email: "Iltimos, to'g'ri email manzilini kiriting",
        message: "Xabar kamida 10 ta belgidan iborat bo'lishi kerak",
      },
    },
    resume: {
      back: "Portfolioga qaytish",
      download: "PDF yuklab olish",
    },
    radial: {
      hint: "Reaksiya qoldirish uchun sichqonchaning o'ng tugmasini bosing",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      blog: "Blog",
      newsletter: "Yangiliklar",
      privacy: "Maxfiylik",
      terms: "Qoidalar",
    },
    blog: {
      backToPortfolio: "Portfolioga qaytish",
      newsletterBadge: "Newsletter Yangiliklari",
      tagline: "Muhandislik & Dizayn Blogi",
      title: "Fikrlar, Eksperimentlar &",
      highlight: "Frontend Yangiliklari",
      subtitle: "React, Next.js, Three.js 3D veb grafikasi, UI mikro-animatsiyalari va real frilans tajribalari haqida maqolalar.",
      featured: "Asosiy Maqola",
      minRead: "daqiqalik mutolaa",
      readArticle: "Maqolani o'qish",
      noPosts: "Hozircha maqolalar mavjud emas. Tez orada yangilanadi.",
      allPosts: "Barcha maqolalar",
      backToAll: "Barcha maqolalarga qaytish",
      publishedOn: "Chop etilgan sana",
      author: "Muallif",
      newsletterBanner: {
        badge: "✉ Aloqada qoling",
        title: "Frontend Yangiliklariga Obuna Bo'ling",
        description: "3D veb grafikasi, UI/UX arxitekturasi va frilans bo'yicha eng sara maqolalarni to'g'ridan-to'g'ri pochtangizda qabul qiling.",
        button: "Yangiliklarni Ko'rish",
      },
    },
    newsletter: {
      backToPortfolio: "Portfolioga qaytish",
      readBlog: "Blogni O'qish",
      badge: "Dasturchi Dayjesti & Yangiliklar",
      title: "Bilimlar, Eksperimentlar &",
      highlight: "Frontend Muhandisligi",
      subtitle: "Zamonaviy veb arxitektura, interaktiv 3D grafika, silliq UI mikro-animatsiyalar va samarali frilans strategiyalari jamlangan oylik dayjest.",
      cardTitle: "Dayjestga Qo'shiling",
      cardSubtitle: "Spamsiz. Faqat yuqori sifatli texnik maqolalar. Istalgan vaqtda obunani bekor qilish mumkin.",
      emailPlaceholder: "Email manzilingizni kiriting...",
      subscribeButton: "Bepul Obuna Bo'lish",
      submittingButton: "Qo'shilmoqda...",
      successTitle: "Muvaffaqiyatli! Obuna bo'ldingiz 🎉",
      successDesc: "email manzili bilan ro'yxatdan o'tganingiz uchun rahmat. Keyingi nashr to'g'ridan-to'g'ri pochtangizga yetib boradi!",
      subscribeAnother: "Boshqa email bilan obuna bo'lish",
      errorInvalid: "Iltimos, to'g'ri email manzilini kiriting.",
      trustBadges: {
        noSpam: "Hech qanday spam yo'q",
        frequency: "Oyiga 1-2 ta sara nashr",
        freeSnippets: "Bepul kod namunalari",
      },
      perks: {
        badge: "Nimani kutish mumkin",
        title: "Har bir sonda nimalarni tahlil qilamiz",
        items: [
          {
            title: "Ilg'or Frontend",
            description: "Zamonaviy React, Next.js App Router, TypeScript ilg'or qoidalari va tezkor ishlash unumdorligi.",
          },
          {
            title: "3D & Kreativ Veb",
            description: "Amaliy Three.js shader qo'llanmalari, interaktiv Canvas darslari va silliq harakatli animatsiyalar.",
          },
          {
            title: "Frilans & Ishlab Chiqish",
            description: "44 dan ortiq tijoriy loyihalar asosidagi real keyslar, mijozlar bilan ishlash va natijaga erishish sirlari.",
          },
        ],
      },
      archive: {
        badge: "Arxiv & Mavzular",
        title: "So'nggi Newsletter Nashrlari",
        countLabel: "Sara Nashrlar",
        keyTopics: "Ko'rib chiqilgan asosiy mavzular:",
        items: [
          {
            id: "issue-04",
            number: "04-Nashr",
            title: "Vebda 3D grafika sirlari: React Three Fiber real loyihalarda",
            date: "Noyabr 2024",
            readTime: "5 daqiqa",
            category: "3D & WebGL",
            summary: "3D canvas unumdorligini optimallashtirish, Retina ekranlarda DPR ni boshqarish va WebGL resurslarini yuklash sirlari.",
            highlights: [
              "GLTF modellari uchun Draco siqish usullari",
              "Qurilma FPS ko'rsatkichiga qarab dinamik DPR moslashtirish",
              "Canvas shaderlarini Tailwind CSS qatlamlari bilan uyg'unlashtirish",
            ],
          },
          {
            id: "issue-03",
            number: "03-Nashr",
            title: "Next.js 15 & React 19: Katta loyihalarga mos arxitektura",
            date: "Oktyabr 2024",
            readTime: "4 daqiqa",
            category: "Arxitektura",
            summary: "Murakkab loyihalarni Server Components, Server Actions va Turbopack ga o'tkazishda olingan tajribalar.",
            highlights: [
              "Mobil qurilmalarda Core Web Vitals ni 99+ ballga yetkazish",
              "Suspense orqali striming va SSR tiqilinchlarini oldini olish",
              "Ortiqcha kodlarsiz xavfsiz Server Actions arxitekturasi",
            ],
          },
          {
            id: "issue-02",
            number: "02-Nashr",
            title: "Foydalanuvchini hayratda qoldiruvchi mikro-animatsiyalar yaratish",
            date: "Sentyabr 2024",
            readTime: "6 daqiqa",
            category: "UI / UX Dizayn",
            summary: "Magnitli tugmalar, elastik prujinali fizika va kursor sezuvchi interaktiv elementlarni silliq yaratish.",
            highlights: [
              "JS layout hisob-kitoblariga qarshi apparat tezlatgichli CSS o'zgarishlar",
              "Framer Motion layoutId orqali tablarni mukammal animatsiya qilish",
              "Harakatni cheklovchi tizimlar uchun moslashuvchanlik",
            ],
          },
          {
            id: "issue-01",
            number: "01-Nashr",
            title: "Oliy Reytingli Frilanser Qo'llanmasi: 44+ Buyurtma va 98% Natija",
            date: "Avgust 2024",
            readTime: "7 daqiqa",
            category: "Karyera & Frilans",
            summary: "Mijozlar bilan sifatli ishlash, talablarni to'g'ri baholash va doimiy mijozlar bazasini shakllantirish bo'yicha amaliy qoidalar.",
            highlights: [
              "Figma dizaynlarini pikselma-piksel aniqlikda kodga aylantirish",
              "Mijoz bilan ishonchli va tezkor muloqot tizimi",
              "89% muddatida topshirish ko'rsatkichini saqlab qolish sirlari",
            ],
          },
        ],
      },
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      skills: "Навыки",
      experience: "Опыт",
      projects: "Проекты",
      blogs: "Блог",
      contact: "Контакты",
      resume: "Резюме",
      menu: "Меню",
      close: "Закрыть",
    },
    hero: {
      role: "Frontend Разработчик",
      tagline: "Создаю высокопроизводительные, современные, адаптивные и интерактивные веб-интерфейсы (UI/UX).",
      talkToMe: "Связаться",
      viewResume: "Резюме",
      availableForWork: "Открыт для новых проектов",
      letsBuild: "Давайте создадим отличный проект вместе! 🚀",
    },
    skills: {
      title: "Стек технологий",
      subtitle: "Современные frontend технологии и инструменты",
    },
    experience: {
      title: "Опыт работы",
      subtitle: "Профессиональный опыт и результаты на фрилансе",
      kworkBadge: "★ Top Rated Freelancer",
      kworkTitle: "Платформа Kwork — Официальный рейтинг и показатели",
      stats: {
        status: { label: "Статус", value: "Высший рейтинг", sub: "Топ продавец Kwork" },
        orders: { label: "Заказы", value: "44", sub: "Выполнено успешно" },
        reviews: { label: "Отзывы", value: "32", sub: "100% положительные" },
        success: { label: "Успешность", value: "98%", sub: "Заказов успешно сдано" },
        onTime: { label: "Пунктуальность", value: "89%", sub: "Сдано вовремя" },
        repeat: { label: "Повторные", value: "32%", sub: "Постоянные клиенты" },
      },
      items: [
        {
          id: 1,
          startDate: "2022",
          endDate: "По наст. время",
          title: "Freelance Frontend Developer (Высший рейтинг)",
          company: "Платформа Kwork",
          description: [
            "Продавец с высшим рейтингом на платформе Kwork — 44 успешно выполненных заказов и 32 положительных отзыва.",
            "98% заказов успешно сдано, 89% сдано точно в срок, 32% клиентов обращаются повторно.",
            "Разработка сложных и отзывчивых интерфейсов с использованием HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS и TypeScript.",
            "Пиксель-в-пиксель верстка макетов Figma в чистый, масштабируемый frontend код.",
          ],
        },
        {
          id: 2,
          startDate: "2023",
          endDate: "По наст. время",
          title: "Frontend & Web Application Developer",
          company: "Коммерческие проекты и клиентские решения",
          description: [
            "Разработка более 17 коммерческих сайтов, платформ электронной коммерции, порталов и Telegram Web Apps (TWA) с нуля.",
            "Высокая скорость загрузки, чистая компонентная архитектура и современный UI/UX дизайн.",
            "Полная оптимизация Core Web Vitals, SEO и 100% адаптивность под любые устройства.",
          ],
        },
      ],
    },
    projects: {
      title: "Проекты",
      subtitle: "Избранные веб-приложения и сайты, созданные мной",
      visit: "Открыть сайт",
      source: "Исходный код",
      frontendStack: "Frontend",
      backendStack: "Backend / Интеграция",
      highlights: "Ключевые особенности",
      items: {
        riveria: {
          category: "Курорт и Недвижимость",
          headline: "Элитные резиденции и прибрежный курортный отдых.",
          description: "Riveria — современное веб-приложение для презентации элитной недвижимости и курортного комплекса. Разработано на Next.js, React и Tailwind CSS с интерактивным каталогом вилл, плавной галереей и удобной формой бронирования.",
          highlights: [
            "Высококачественная презентация фото с оптимизацией Next.js Image.",
            "Адаптивный интерфейс для смартфонов, планшетов и широкоформатных экранов.",
            "Плавные микроанимации и эффекты переходов.",
          ],
        },
        "puti-nn": {
          category: "Логистика и Транспорт",
          headline: "Коммерческая логистика и грузоперевозки.",
          description: "Корпоративная веб-платформа для компании по грузоперевозкам и логистике. Включает интерактивный калькулятор стоимости, обзор маршрутов, каталог автопарка и форму быстрой заявки.",
          highlights: [
            "Быстро загружающийся корпоративный лендинг со структурированным каталогом услуг.",
            "Система лидогенерации с мгновенной валидацией клиентских заявок.",
            "Высокие показатели Core Web Vitals и SEO-оптимизированная верстка.",
          ],
        },
        techx: {
          category: "Гаджеты и Электронная коммерция",
          headline: "Гаджеты нового поколения и магазин электроники.",
          description: "Веб-приложение для интернет-магазина высокотехнологичной электроники с фильтрацией каталога, динамической корзиной и стильным темным дизайном.",
          highlights: [
            "Динамические фильтры по категориям и мгновенный поиск товаров.",
            "Адаптивные карточки товаров с зумом при наведении и предпросмотром характеристик.",
            "Продуманный процесс оформления заказа и надежное управление состоянием.",
          ],
        },
        "paint-beige": {
          category: "Арт и Креативное агентство",
          headline: "Эстетичные интерьерные краски и студия дизайна.",
          description: "Сайт креативного агентства для презентации дизайнерских коллекций красок, текстур стен и арт-проектов с журнальной версткой и теплой палитрой.",
          highlights: [
            "Интерактивный каталог палитр и карточки предпросмотра текстур.",
            "Элегантная типографика и журнальная сетка.",
            "Mobile-first адаптивность и плавные переходы при скролле.",
          ],
        },
        costa: {
          category: "Ресторан и Кофейня",
          headline: "Авторский кофе и изысканная гастрономия.",
          description: "Веб-приложение для современной кофейни и ресторана. Включает интерактивное меню по категориям, предпросмотр блюд, онлайн-бронирование столиков и атмосферный дизайн.",
          highlights: [
            "Удобное меню блюд и напитков с фильтрацией по категориям.",
            "Модальное окно бронирования столиков с выбором даты и количества гостей.",
            "Богатая фотогалерея с быстрой отложенной загрузкой.",
          ],
        },
        antonkids: {
          category: "Детские товары и Мода",
          headline: "Каталог детской одежды, игрушек и товаров первой необходимости.",
          description: "Удобный и яркий веб-портал детских товаров, линий одежды и полезных ресурсов для родителей. Содержит структурированные категории, фильтры по возрасту и быстрые способы связи.",
          highlights: [
            "Игровой, но чистый и современный дизайн с привлекательной графикой.",
            "Быстрая фильтрация по возрасту и коллекциям товаров.",
            "Оптимизировано для комфортного просмотра на смартфонах и планшетах.",
          ],
        },
        startpervyh: {
          category: "Молодежная образовательная платформа",
          headline: "Поддержка лидеров и новаторов нового поколения.",
          description: "Интерактивный образовательный портал для молодежных программ развития, менторских проектов, конкурсов и совместных мероприятий сообщества.",
          highlights: [
            "Динамический календарь событий и система онлайн-регистрации.",
            "Лента новостей и карточки достижений участников.",
            "Полностью доступная семантическая верстка и адаптивные экраны.",
          ],
        },
        "balanov-pro": {
          category: "Личный бренд и Медиа",
          headline: "Медиа-производство, цифровой консалтинг и портфолио.",
          description: "Премиальный сайт личного бренда и медиа-агентства. Сочетает стильный темный дизайн, кастомную типографику, видеошоурилы и модули записи на услуги.",
          highlights: [
            "Стильная темная тема с акцентными световыми градиентами.",
            "Интерактивная галерея портфолио с медиа-лайтбоксом.",
            "Конверсионные формы заявок на консультации.",
          ],
        },
        tehnoprom: {
          category: "Промышленность и Инженерия",
          headline: "Промышленное оборудование и производственные решения.",
          description: "Корпоративный портал для производителей промышленного оборудования и станков. Включает подробные каталоги оборудования, технические паспорта и прием B2B-заявок.",
          highlights: [
            "Технический каталог с возможностью скачивания спецификаций.",
            "Модуль запроса коммерческих предложений с параметрами заказа.",
            "Высокая надежность и адаптивная структура корпоративного уровня.",
          ],
        },
        "konda-dom": {
          category: "Строительство и Недвижимость",
          headline: "Строительство домов под ключ и современная архитектура.",
          description: "Платформа строительной компании загородных домов, коттеджей и архитектурных решений. Включает фильтрацию проектов, поэтажные планы и калькулятор стоимости.",
          highlights: [
            "Интерактивный фильтр проектов по площади, этажности и материалам.",
            "Галерея этапов строительства и кейсы реализованных объектов.",
            "Прямая интеграция мессенджеров для моментальной консультации.",
          ],
        },
        baiagent: {
          category: "ИИ и Агентство автоматизации",
          headline: "Автоматизация бизнеса с помощью ИИ и интеллектуальные агенты.",
          description: "Футуристический портал агентства автоматизации бизнеса с помощью ИИ, интеграции нейросетей и разговорных чат-ботов с интерактивным дизайном.",
          highlights: [
            "Стильная визуальная концепция с киберпанк-элементами и неоновыми градиентами.",
            "Интерактивные демонстрации ИИ-сервисов и сравнительные таблицы.",
            "Оптимизированный бандл с мгновенной отрисовкой страниц.",
          ],
        },
        "balanov-twa": {
          category: "Telegram Web App (TWA)",
          headline: "Высокопроизводительное Telegram Mini App с поддержкой жестов.",
          description: "Специализированное приложение Telegram Web App (TWA) для бесшовного взаимодействия внутри мессенджера. Поддерживает Telegram WebApp SDK, тактильную отдачу и мобильные экраны.",
          highlights: [
            "Полная интеграция с Telegram WebApp SDK и синхронизация тем оформления.",
            "Плавные 60fps сенсорные анимации и нативный мобильный UI.",
            "Ультралегкий вес для моментального запуска внутри Telegram.",
          ],
        },
        quadplay: {
          category: "Гейминг и Развлечения",
          headline: "Киберарена, киберспорт и игровая платформа.",
          description: "Энергичный портал игрового клуба и киберспортивных турниров с онлайн-бронированием ПК, расписанием соревнований и характеристиками оборудования.",
          highlights: [
            "Интерактивный выбор игровых зон и визуализация характеристик ПК.",
            "Таблица лидеров турниров в реальном времени и система регистрации.",
            "Геймерская RGB-стилистика и стильный темный дизайн.",
          ],
        },
        youti: {
          category: "Цифровые сервисы и Платформа",
          headline: "Современная платформа цифровых услуг и образа жизни.",
          description: "Универсальный портал цифровых услуг с простым онбордингом, удобной навигацией по сервисам, интерактивными тарифными планами и прямой поддержкой.",
          highlights: [
            "Чистый SaaS-дизайн с интерактивной демонстрацией услуг.",
            "Адаптивная верстка с плавной типографикой на всех экранах.",
            "Оптимизированный онбординг клиентов и интеграция поддержки.",
          ],
        },
        ramadivineleela: {
          category: "Культурный и Медиа-портал",
          headline: "Международное культурное производство, искусство и медиа-фонд.",
          description: "Сайт международного культурно-просветительского проекта, представляющий медиа-сериалы, театральные постановки, литературу и благотворительные инициативы.",
          highlights: [
            "Многоязычная поддержка и ссылки на международный медиа-стриминг.",
            "Богатая типографическая иерархия с золотыми акцентами.",
            "Расписание гастролей и шлюзы бронирования билетов.",
          ],
        },
        "celitel-mc": {
          category: "Здравоохранение и Медицинский центр",
          headline: "Комплексная диагностика и медицинские услуги клиники.",
          description: "Медицинский портал для многопрофильной клиники. Содержит профили врачей, онлайн-запись на прием, прейскурант диагностических услуг и отзывы пациентов.",
          highlights: [
            "Быстрый поиск врачей по специальностям и филиалам клиники.",
            "Онлайн-запись на прием и формы консультаций.",
            "Чистый, вызывающий доверие медицинский дизайн по стандартам доступности.",
          ],
        },
        mestoshefa: {
          category: "Кулинария и Оформление заказа",
          headline: "Удобное оформление заказа и доставка блюд из ресторана.",
          description: "Интерфейс оформления заказа доставки еды, спроектированный для максимальной конверсии. Включает расчет корзины, автозаполнение адреса, промокоды и выбор способов оплаты.",
          highlights: [
            "Пошаговое оформление заказа с мгновенной валидацией данных.",
            "Выбор интервала доставки и детальная сводка заказа.",
            "Оптимизированный UX для минимизации отказов при оформлении.",
          ],
        },
      },
    },
    contact: {
      title: "Контакты",
      heading: "ДАВАЙТЕ РАБОТАТЬ ВМЕСТЕ",
      subtitle: "Если у вас есть проект или вопрос, напишите мне прямо сейчас.",
      fullNameLabel: "Ваше имя",
      fullNamePlaceholder: "Введите ваше имя",
      emailLabel: "Электронная почта",
      emailPlaceholder: "example@gmail.com",
      messageLabel: "Сообщение",
      messagePlaceholder: "Кратко расскажите о вашем проекте...",
      sendButton: "Отправить сообщение",
      sendingButton: "Отправка...",
      successMessage: "Ваше сообщение успешно отправлено! Я скоро свяжусь с вами.",
      errorMessage: "Произошла ошибка при отправке. Пожалуйста, попробуйте снова.",
      validation: {
        fullName: "Имя должно содержать не менее 2 символов",
        email: "Пожалуйста, введите корректный адрес электронной почты",
        message: "Сообщение должно содержать не менее 10 символов",
      },
    },
    resume: {
      back: "Назад в портфолио",
      download: "Скачать PDF",
    },
    radial: {
      hint: "Кликните правой кнопкой мыши для реакции",
    },
    footer: {
      rights: "Все права защищены.",
      blog: "Блог",
      newsletter: "Новости",
      privacy: "Конфиденциальность",
      terms: "Условия",
    },
    blog: {
      backToPortfolio: "Назад в Портфолио",
      newsletterBadge: "Выпуски Newsletter",
      tagline: "Блог о разработке и дизайне",
      title: "Мысли, Эксперименты и",
      highlight: "Frontend Заметки",
      subtitle: "Глубокие разборы React, Next.js, 3D графики Three.js, микро-анимаций UI и реального опыта фриланса.",
      featured: "Главная Статья",
      minRead: "мин чтения",
      readArticle: "Читать статью",
      noPosts: "Пока нет статей. Скоро здесь появятся новые публикации.",
      allPosts: "Все публикации",
      backToAll: "Назад ко всем статьям",
      publishedOn: "Дата публикации",
      author: "Автор",
      newsletterBanner: {
        badge: "✉ Будьте в курсе",
        title: "Подпишитесь на Frontend рассылку",
        description: "Получайте ежемесячные разборы 3D веба, архитектуры UI/UX и фриланса прямо на вашу почту.",
        button: "Смотреть рассылку",
      },
    },
    newsletter: {
      backToPortfolio: "Назад в Портфолио",
      readBlog: "Читать Блог",
      badge: "Дайджест разработчика и новости",
      title: "Инсайты, Эксперименты и",
      highlight: "Frontend Разработка",
      subtitle: "Курируемый ежемесячный дайджест о современной веб-архитектуре, 3D графике, плавных микро-анимациях и проверенных стратегиях фриланса.",
      cardTitle: "Присоединяйтесь к рассылке",
      cardSubtitle: "Никакого спама. Только качественные технические разборы. Отписаться можно в любой момент.",
      emailPlaceholder: "Введите ваш email адрес...",
      subscribeButton: "Подписаться бесплатно",
      submittingButton: "Подключение...",
      successTitle: "Вы успешно подписались! 🎉",
      successDesc: "Спасибо за подписку с адресом. Следующий выпуск будет доставлен прямо на вашу почту!",
      subscribeAnother: "Подписать другой email",
      errorInvalid: "Пожалуйста, введите корректный email адрес.",
      trustBadges: {
        noSpam: "Без спама",
        frequency: "1-2 выпуска в месяц",
        freeSnippets: "Бесплатные примеры кода",
      },
      perks: {
        badge: "Что вас ждет",
        title: "О чем мы рассказываем в каждом выпуске",
        items: [
          {
            title: "Современный Frontend",
            description: "Глубокие разборы React, Next.js App Router, продвинутые паттерны TypeScript и оптимизация производительности.",
          },
          {
            title: "3D и Креативный Веб",
            description: "Практические шейдеры Three.js, интерактивные уроки Canvas и дизайн плавных анимаций.",
          },
          {
            title: "Фриланс и Производство",
            description: "Реальные кейсы из более чем 44 коммерческих проектов, работа с клиентами и секреты высокого рейтинга.",
          },
        ],
      },
      archive: {
        badge: "Архив и Темы",
        title: "Последние Выпуски Рассылки",
        countLabel: "Выпусков",
        keyTopics: "Ключевые темы выпуска:",
        items: [
          {
            id: "issue-04",
            number: "Выпуск #04",
            title: "Секреты 3D в вебе: Паттерны React Three Fiber в реальных проектах",
            date: "Ноябрь 2024",
            readTime: "5 мин",
            category: "3D & WebGL",
            summary: "Оптимизация производительности 3D canvas, контроль DPR на Retina экранах и эффективная загрузка моделей.",
            highlights: [
              "Пайплайн сжатия моделей GLTF с помощью Draco",
              "Динамическая адаптация DPR под текущий FPS устройства",
              "Совмещение шейдеров Canvas с оверлеями Tailwind CSS",
            ],
          },
          {
            id: "issue-03",
            number: "Выпуск #03",
            title: "Next.js 15 и React 19: Масштабируемая архитектура",
            date: "Октябрь 2024",
            readTime: "4 мин",
            category: "Архитектура",
            summary: "Опыт миграции сложных клиентских приложений на Server Components, Actions и Turbopack.",
            highlights: [
              "Оптимизация Core Web Vitals до 99+ баллов на мобильных",
              "Стриминг через Suspense без задержек первичного рендера",
              "Типобезопасные Server Actions без лишнего бойлерплейта",
            ],
          },
          {
            id: "issue-02",
            number: "Выпуск #02",
            title: "Создание впечатляющих микро-анимаций без падения FPS",
            date: "Сентябрь 2024",
            readTime: "6 мин",
            category: "UI / UX Дизайн",
            summary: "Магнитные кнопки, упругая физика пружин и плавные курсорные интерактивные элементы.",
            highlights: [
              "Аппаратные CSS трансформации вместо тяжелых JS перерасчетов",
              "Анимация вкладок с помощью Framer Motion layoutId",
              "Поддержка режимов prefers-reduced-motion",
            ],
          },
          {
            id: "issue-01",
            number: "Выпуск #01",
            title: "Гайд продавца с высшим рейтингом: 44+ проекта и 98% успеха",
            date: "Август 2024",
            readTime: "7 мин",
            category: "Карьера и Фриланс",
            summary: "Стратегии работы с заказчиками, четкая оценка ТЗ и секреты поддержания постоянной клиентской базы.",
            highlights: [
              "Пиксель-в-пиксель верстка макетов Figma в чистый код",
              "Проактивные паттерны общения с заказчиками",
              "Соблюдение сроков для достижения 89% своевременной сдачи",
            ],
          },
        ],
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      blogs: "Blog",
      contact: "Contact",
      resume: "Resume",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      role: "Frontend Developer",
      tagline: "Engineering high-performance, modern, responsive, and interactive user experiences (UI/UX).",
      talkToMe: "Get in touch",
      viewResume: "Resume",
      availableForWork: "Available for new projects",
      letsBuild: "Let's build something great together! 🚀",
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Modern frontend technologies & toolsets",
    },
    experience: {
      title: "Experience",
      subtitle: "Professional career & freelance track record",
      kworkBadge: "★ Top Rated Freelancer",
      kworkTitle: "Kwork Platform — Official Rating & Metrics",
      stats: {
        status: { label: "Status", value: "Top Rated", sub: "Top Seller on Kwork" },
        orders: { label: "Orders", value: "44", sub: "Successfully completed" },
        reviews: { label: "Reviews", value: "32", sub: "100% positive feedback" },
        success: { label: "Success Rate", value: "98%", sub: "Orders delivered successfully" },
        onTime: { label: "On-Time", value: "89%", sub: "Delivered on schedule" },
        repeat: { label: "Repeat", value: "32%", sub: "Returning clients" },
      },
      items: [
        {
          id: 1,
          startDate: "2022",
          endDate: "Present",
          title: "Freelance Frontend Developer (Top Rated)",
          company: "Kwork Freelance Platform",
          description: [
            "Top-rated seller on Kwork platform with 44 completed orders and 32 five-star reviews.",
            "98% successful order completion rate, 89% on-time delivery, and 32% repeat client rate.",
            "Developed complex, responsive web interfaces using HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, and TypeScript.",
            "Pixel-perfect Figma-to-code conversions with clean, maintainable frontend architecture.",
          ],
        },
        {
          id: 2,
          startDate: "2023",
          endDate: "Present",
          title: "Frontend & Web Application Developer",
          company: "Commercial Projects & Client Solutions",
          description: [
            "Engineered 17+ commercial websites, e-commerce stores, portals, and Telegram Web Apps (TWA) from scratch.",
            "Optimized performance, clean modular component architecture, and cutting-edge UI/UX aesthetics.",
            "Core Web Vitals tuning, SEO best practices, and 100% cross-browser responsiveness.",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Featured production web applications and client projects",
      visit: "Visit Live",
      source: "Source Code",
      frontendStack: "Frontend",
      backendStack: "Backend / Integration",
      highlights: "Highlights",
      items: {
        riveria: {
          category: "Resort & Real Estate",
          headline: "Luxury residences & coastal resort experience.",
          description: "Riveria is a modern real estate and luxury resort showcase application. Built with Next.js, React, and Tailwind CSS, it delivers a sleek aesthetic with interactive villa showcases, smooth responsive gallery navigation, and seamless booking inquiries.",
          highlights: [
            "High-resolution image showcases with optimized Next.js Image handling.",
            "Modern, responsive layout designed for mobile, tablet, and ultra-wide screens.",
            "Smooth micro-interactions and transition animations.",
          ],
        },
        "puti-nn": {
          category: "Logistics & Transport",
          headline: "Commercial logistics and freight transportation solutions.",
          description: "A corporate web platform for cargo shipping and freight logistics. Features interactive service calculators, route overviews, detailed fleet specifications, and quick lead capture forms.",
          highlights: [
            "Fast-loading corporate landing with structured service catalog.",
            "Lead generation workflow with instant client inquiry validation.",
            "High Core Web Vitals score and SEO-optimized markup.",
          ],
        },
        techx: {
          category: "Gadgets & E-Commerce",
          headline: "Next-gen tech gadgets & electronics showcase.",
          description: "An e-commerce web application featuring high-tech electronics, interactive product catalog filtering, dynamic cart state management, and modern dark-mode aesthetics.",
          highlights: [
            "Dynamic category filters and instant product search.",
            "Responsive product card layouts with hover zooms and spec previews.",
            "Seamless checkout flow and state management.",
          ],
        },
        "paint-beige": {
          category: "Art & Creative Agency",
          headline: "Aesthetic interior paint & creative design studio.",
          description: "A creative agency landing page built to present designer paint collections, wall textures, and art projects with an editorial typographic layout and warm palette aesthetics.",
          highlights: [
            "Curated color palette explorer and texture preview cards.",
            "Elegant typography and editorial grid design.",
            "Mobile-first responsiveness and smooth scroll transitions.",
          ],
        },
        costa: {
          category: "Restaurant & Cafe",
          headline: "Artisan coffee & gourmet dining web experience.",
          description: "A hospitality web application for a modern coffeehouse and restaurant. Includes interactive menu categories, dish previews, online table reservation, and atmospheric storytelling.",
          highlights: [
            "Category-filtered food and beverage menu.",
            "Table reservation modal with date and party picker.",
            "Rich photography presentation with fast lazy loading.",
          ],
        },
        antonkids: {
          category: "Kids Goods & Fashion",
          headline: "Children's apparel, toys & essentials catalog.",
          description: "A friendly and cheerful web portal dedicated to children's products, clothing lines, and parent resources. Features categorized product grids, age filters, and fast contact options.",
          highlights: [
            "Playful yet clean modern design with engaging visuals.",
            "Quick catalog filtering by age and product collection.",
            "Optimized for fast browsing on smartphones and tablets.",
          ],
        },
        startpervyh: {
          category: "Youth Education Platform",
          headline: "Empowering next-generation leaders and innovators.",
          description: "An interactive educational portal supporting youth development programs, mentorship projects, competitions, and collaborative community events.",
          highlights: [
            "Dynamic event calendar and registration workflows.",
            "Media news feed and participant spotlight cards.",
            "Fully accessible semantic HTML structure and responsive layouts.",
          ],
        },
        "balanov-pro": {
          category: "Personal Brand & Media",
          headline: "Media production, digital consulting & portfolio.",
          description: "A premium personal branding and media agency website. Combines dark-mode aesthetics, custom typography, video showreels, and service booking modules.",
          highlights: [
            "Slick dark-mode aesthetic with ambient glow gradients.",
            "Interactive portfolio showcase with media lightbox.",
            "High-conversion consultation inquiry forms.",
          ],
        },
        tehnoprom: {
          category: "Industrial & Engineering",
          headline: "Industrial equipment & manufacturing solutions.",
          description: "Enterprise corporate portal for manufacturing and industrial machinery. Features comprehensive equipment catalogs, technical data sheets, and B2B request handling.",
          highlights: [
            "Technical catalog with downloadable spec sheets.",
            "B2B quote request module with custom order parameters.",
            "Industrial grade reliability and responsive layout.",
          ],
        },
        "konda-dom": {
          category: "Construction & Real Estate",
          headline: "Turnkey home building & modern architectural design.",
          description: "A construction company platform for country homes, cottages, and turnkey architecture. Features architectural project filters, floorplan galleries, and cost estimator tools.",
          highlights: [
            "Interactive project filter by square meters, floors, and materials.",
            "Construction stage gallery and customer case studies.",
            "Direct messaging integration for rapid consultation.",
          ],
        },
        baiagent: {
          category: "AI & Automation Agency",
          headline: "AI business automation & autonomous intelligent agents.",
          description: "A futuristic agency portal offering enterprise AI automation, custom neural integrations, and conversational AI chatbots. Designed with cybernetic dark themes and interactive feature breakdowns.",
          highlights: [
            "Cyberpunk and neon gradient visual language.",
            "Live AI service demonstration triggers and comparison tables.",
            "Optimized frontend bundle with lightning-fast initial paint.",
          ],
        },
        "balanov-twa": {
          category: "Telegram Web App (TWA)",
          headline: "High-performance Telegram Mini App with touch gestures.",
          description: "A dedicated Telegram Web App (TWA) engineered for seamless in-messenger user experience. Implements Telegram WebApp SDK bindings, haptic feedback, and responsive mobile-optimized screens.",
          highlights: [
            "Full Telegram WebApp SDK integration with viewport theme color sync.",
            "60fps mobile touch animations and native feeling UI.",
            "Ultra-lightweight footprint for instant launch inside Telegram.",
          ],
        },
        quadplay: {
          category: "Gaming & Entertainment",
          headline: "Gaming arena, esports & entertainment platform.",
          description: "A high-energy gaming club and tournament portal featuring live computer booking, tournament schedules, gaming gear overviews, and membership rewards.",
          highlights: [
            "Dynamic gaming zone selector and hardware specs visualizer.",
            "Live tournament leaderboard and registration system.",
            "Gaming RGB style animations and dark cyber aesthetics.",
          ],
        },
        youti: {
          category: "Digital Services & Platform",
          headline: "Modern digital service & lifestyle platform.",
          description: "A comprehensive digital service hub designed to provide smooth user onboarding, intuitive service browsing, interactive pricing tiers, and direct client support.",
          highlights: [
            "Clean SaaS layout with interactive service breakdowns.",
            "Responsive design with fluid typography across devices.",
            "Streamlined customer onboarding and support integration.",
          ],
        },
        ramadivineleela: {
          category: "Cultural & Media Portal",
          headline: "Global cultural production, arts & media foundation.",
          description: "An international cultural and spiritual production website showcasing media series, global theatrical performances, literature, and philanthropic initiatives.",
          highlights: [
            "Multi-language support and international media streaming links.",
            "Rich typographic hierarchy with golden aesthetic accents.",
            "Event tour dates and ticket reservation gateways.",
          ],
        },
        "celitel-mc": {
          category: "Healthcare & Medical Center",
          headline: "Comprehensive clinic diagnostics & health services.",
          description: "A healthcare portal for a multidisciplinary medical clinic. Features specialist doctor profiles, online appointment booking, diagnostic service price lists, and patient reviews.",
          highlights: [
            "Fast doctor directory search by specialty and branch.",
            "Online appointment scheduling and inquiry forms.",
            "Trustworthy, clean medical design adhering to accessibility standards.",
          ],
        },
        mestoshefa: {
          category: "Culinary & Checkout Flow",
          headline: "Frictionless restaurant order & checkout experience.",
          description: "An e-commerce food delivery checkout flow engineered for conversion. Features real-time cart calculations, delivery address autocompletion, promo code validation, and payment option selection.",
          highlights: [
            "Multi-step checkout with instant client-side validation.",
            "Delivery time slot selector and order summary breakdowns.",
            "Optimized UX designed to minimize checkout abandonment.",
          ],
        },
      },
    },
    contact: {
      title: "Contact",
      heading: "LET'S WORK TOGETHER",
      subtitle: "Got a project in mind or want to collaborate? Drop me a line.",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "example@gmail.com",
      messageLabel: "Your Message",
      messagePlaceholder: "Tell me about your project...",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      successMessage: "Message sent successfully! I will get back to you shortly.",
      errorMessage: "Failed to send message. Please try again.",
      validation: {
        fullName: "Full name must be at least 2 characters",
        email: "Please enter a valid email address",
        message: "Message must be at least 10 characters",
      },
    },
    resume: {
      back: "Back to portfolio",
      download: "Download PDF",
    },
    radial: {
      hint: "Right-click anywhere to react",
    },
    footer: {
      rights: "All rights reserved.",
      blog: "Blog",
      newsletter: "Newsletter",
      privacy: "Privacy",
      terms: "Terms",
    },
    blog: {
      backToPortfolio: "Back to Portfolio",
      newsletterBadge: "Newsletter Dispatch",
      tagline: "Engineering & Design Blog",
      title: "Thoughts, Experiments &",
      highlight: "Frontend Dispatches",
      subtitle: "Deep dives into React, Next.js, Three.js 3D web craft, UI micro-interactions, and real-world freelance insights.",
      featured: "Featured Post",
      minRead: "min read",
      readArticle: "Read article",
      noPosts: "No posts yet. Check back soon.",
      allPosts: "All posts",
      backToAll: "Back to all posts",
      publishedOn: "Published on",
      author: "Author",
      newsletterBanner: {
        badge: "✉ Stay in the loop",
        title: "Subscribe to the Frontend Dispatch",
        description: "Get monthly deep-dives on 3D web graphics, UI/UX architecture, and freelancing straight to your inbox.",
        button: "Explore Newsletter",
      },
    },
    newsletter: {
      backToPortfolio: "Back to Portfolio",
      readBlog: "Read Blog",
      badge: "Developer Dispatch & Digest",
      title: "Insights, Experiments &",
      highlight: "Frontend Engineering",
      subtitle: "A curated monthly dispatch covering modern web architecture, interactive 3D graphics, smooth UI micro-animations, and actionable freelance strategies.",
      cardTitle: "Join the Dispatch",
      cardSubtitle: "Zero spam. High-signal technical breakdowns only. Unsubscribe anytime.",
      emailPlaceholder: "Enter your email address...",
      subscribeButton: "Subscribe Free",
      submittingButton: "Joining...",
      successTitle: "You're in! Welcome aboard 🎉",
      successDesc: "Thank you for subscribing with. You'll receive the next edition straight in your inbox!",
      subscribeAnother: "Subscribe another email",
      errorInvalid: "Please enter a valid email address.",
      trustBadges: {
        noSpam: "No spam ever",
        frequency: "1-2 editions/month",
        freeSnippets: "Free source code snippets",
      },
      perks: {
        badge: "What to Expect",
        title: "What We Explore Each Issue",
        items: [
          {
            title: "Cutting-Edge Frontend",
            description: "Deep dives into modern React, Next.js App Router, TypeScript best practices, and performance engineering.",
          },
          {
            title: "3D & Creative Web",
            description: "Practical Three.js shader guides, interactive canvas tutorials, and motion design recipes.",
          },
          {
            title: "Freelance & Production",
            description: "Real-world case studies, client delivery insights, and workflows from over 44+ commercial projects.",
          },
        ],
      },
      archive: {
        badge: "Archive & Topics",
        title: "Recent Newsletter Editions",
        countLabel: "Curated Editions",
        keyTopics: "Key Topics Covered:",
        items: [
          {
            id: "issue-04",
            number: "Issue #04",
            title: "Demystifying 3D on the Web: Real-World React Three Fiber Patterns",
            date: "Nov 2024",
            readTime: "5 min read",
            category: "3D & WebGL",
            summary: "A complete breakdown of optimizing 3D canvases, limiting DPR on Retina screens, and lazy-loading heavy WebGL assets.",
            highlights: [
              "Draco compression pipelines for GLTF models",
              "Dynamic DPR adjustments based on device FPS",
              "Blending Canvas shaders with Tailwind CSS overlays",
            ],
          },
          {
            id: "issue-03",
            number: "Issue #03",
            title: "Next.js 15 & React 19: Architecture Patterns That Scale",
            date: "Oct 2024",
            readTime: "4 min read",
            category: "Architecture",
            summary: "Lessons learned migrating complex production applications to Server Components, Actions, and Turbopack.",
            highlights: [
              "Optimizing Core Web Vitals to 99+ on mobile",
              "Streaming with Suspense vs SSR bottlenecks",
              "Type-safe Server Actions without boilerplate",
            ],
          },
          {
            id: "issue-02",
            number: "Issue #02",
            title: "Crafting Micro-Interactions That Wow Users (Without Hurting FPS)",
            date: "Sep 2024",
            readTime: "6 min read",
            category: "UI / UX Craft",
            summary: "How to implement magnetic buttons, elastic spring physics, and cursor-aware elements smoothly.",
            highlights: [
              "Hardware-accelerated CSS transforms vs JS layout thrashing",
              "Framer Motion layoutId magic for animated tabs",
              "Accessible motion with prefers-reduced-motion",
            ],
          },
          {
            id: "issue-01",
            number: "Issue #01",
            title: "The Top-Rated Freelance Playbook: 44+ Projects & 98% Success",
            date: "Aug 2024",
            readTime: "7 min read",
            category: "Career & Freelance",
            summary: "Actionable strategies for delivering high-impact frontend client projects, scoping requirements, and maintaining repeat clients.",
            highlights: [
              "Pixel-perfect Figma-to-code conversion workflows",
              "Proactive client communication patterns",
              "Managing deadlines to achieve 89% on-time delivery",
            ],
          },
        ],
      },
    },
  },
};
