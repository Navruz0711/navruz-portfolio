const config = {
  title: "Ergashev Navruz | Frontend Developer",
  description: {
    long: "Explore the portfolio of Ergashev Navruz, a Frontend Developer specializing in building modern, responsive, and performant web applications using HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and TypeScript. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ergashev Navruz, a Frontend Developer creating interactive and responsive web applications.",
  },
  keywords: [
    "Ergashev Navruz",
    "Navruz Ergashev",
    "Frontend Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Web Developer",
    "UI/UX",
  ],
  author: "Ergashev Navruz",
  email: "uznav715@gmail.com",
  site: "https://portfolio-navruz.vercel.app",

  // for github stars button
  githubUsername: "Navruz0711",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    github: "https://github.com/Navruz0711",
  },
};
export { config };
