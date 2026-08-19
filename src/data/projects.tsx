import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant={"outline"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  vercel: brand("Vercel", "vercel-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const GITHUB_PROFILE = "https://github.com/Navruz0711";

const projects: Project[] = [
  {
    id: "riveria",
    category: "Resort & Real Estate",
    title: "Riveria",
    src: `${BASE_PATH}/riveria/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.motion,
      ],
      backend: [],
    },
    live: "https://riveria-eta.vercel.app/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Luxury residences &amp; coastal resort experience.
          </TypographyP>
          <TypographyP className="font-mono">
            Riveria is a modern real estate and luxury resort showcase application. Built with Next.js, React, and Tailwind CSS, it delivers a sleek aesthetic with interactive villa showcases, smooth responsive gallery navigation, and seamless booking inquiries.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • High-resolution image showcases with optimized Next.js Image handling.<br />
            • Modern, responsive layout designed for mobile, tablet, and ultra-wide screens.<br />
            • Smooth micro-interactions and transition animations.
          </p>
        </div>
      );
    },
  },
  {
    id: "puti-nn",
    category: "Logistics & Transport",
    title: "Puti NN",
    src: `${BASE_PATH}/puti-nn/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://puti-nn.ru/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Commercial logistics and freight transportation solutions.
          </TypographyP>
          <TypographyP className="font-mono">
            A corporate web platform for cargo shipping and freight logistics. Features interactive service calculators, route overviews, detailed fleet specifications, and quick lead capture forms.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Fast-loading corporate landing with structured service catalog.<br />
            • Lead generation workflow with instant client inquiry validation.<br />
            • High Core Web Vitals score and SEO-optimized markup.
          </p>
        </div>
      );
    },
  },
  {
    id: "techx",
    category: "Gadgets & E-Commerce",
    title: "TechX Store",
    src: `${BASE_PATH}/techx/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://techx-woad.vercel.app/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Next-gen tech gadgets &amp; electronics showcase.
          </TypographyP>
          <TypographyP className="font-mono">
            An e-commerce web application featuring high-tech electronics, interactive product catalog filtering, dynamic cart state management, and modern dark-mode aesthetics.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Dynamic category filters and instant product search.<br />
            • Responsive product card layouts with hover zooms and spec previews.<br />
            • Seamless checkout flow and state management.
          </p>
        </div>
      );
    },
  },
  {
    id: "paint-beige",
    category: "Art & Creative Agency",
    title: "Paint Studio",
    src: `${BASE_PATH}/paint-beige/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [],
    },
    live: "https://paint-beige.vercel.app/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Aesthetic interior paint &amp; creative design studio.
          </TypographyP>
          <TypographyP className="font-mono">
            A creative agency landing page built to present designer paint collections, wall textures, and art projects with an editorial typographic layout and warm palette aesthetics.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Curated color palette explorer and texture preview cards.<br />
            • Elegant typography and editorial grid design.<br />
            • Mobile-first responsiveness and smooth scroll transitions.
          </p>
        </div>
      );
    },
  },
  {
    id: "costa",
    category: "Restaurant & Cafe",
    title: "Costa",
    src: `${BASE_PATH}/costa/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://costa-two.vercel.app/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Artisan coffee &amp; gourmet dining web experience.
          </TypographyP>
          <TypographyP className="font-mono">
            A hospitality web application for a modern coffeehouse and restaurant. Includes interactive menu categories, dish previews, online table reservation, and atmospheric storytelling.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Category-filtered food and beverage menu.<br />
            • Table reservation modal with date and party picker.<br />
            • Rich photography presentation with fast lazy loading.
          </p>
        </div>
      );
    },
  },
  {
    id: "antonkids",
    category: "Kids Goods & Fashion",
    title: "Anton Kids",
    src: `${BASE_PATH}/antonkids/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://antonkids.ru/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Children&apos;s apparel, toys &amp; essentials catalog.
          </TypographyP>
          <TypographyP className="font-mono">
            A friendly and cheerful web portal dedicated to children&apos;s products, clothing lines, and parent resources. Features categorized product grids, age filters, and fast contact options.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Playful yet clean modern design with engaging visuals.<br />
            • Quick catalog filtering by age and product collection.<br />
            • Optimized for fast browsing on smartphones and tablets.
          </p>
        </div>
      );
    },
  },
  {
    id: "startpervyh",
    category: "Youth Education Platform",
    title: "Start Pervyh",
    src: `${BASE_PATH}/startpervyh/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://startpervyh.ru/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Empowering next-generation leaders and innovators.
          </TypographyP>
          <TypographyP className="font-mono">
            An interactive educational portal supporting youth development programs, mentorship projects, competitions, and collaborative community events.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Dynamic event calendar and registration workflows.<br />
            • Media news feed and participant spotlight cards.<br />
            • Fully accessible semantic HTML structure and responsive layouts.
          </p>
        </div>
      );
    },
  },
  {
    id: "balanov-pro",
    category: "Personal Brand & Media",
    title: "Balanov Pro",
    src: `${BASE_PATH}/balanov-pro/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [],
    },
    live: "https://balanov.pro/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Media production, digital consulting &amp; portfolio.
          </TypographyP>
          <TypographyP className="font-mono">
            A premium personal branding and media agency website. Combines dark-mode aesthetics, custom typography, video showreels, and service booking modules.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Slick dark-mode aesthetic with ambient glow gradients.<br />
            • Interactive portfolio showcase with media lightbox.<br />
            • High-conversion consultation inquiry forms.
          </p>
        </div>
      );
    },
  },
  {
    id: "tehnoprom",
    category: "Industrial & Engineering",
    title: "Технопром (Tehnoprom)",
    src: `${BASE_PATH}/tehnoprom/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    live: "http://xn--e1aoceafhl2a.net",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Industrial equipment &amp; manufacturing solutions.
          </TypographyP>
          <TypographyP className="font-mono">
            Enterprise corporate portal for manufacturing and industrial machinery. Features comprehensive equipment catalogs, technical data sheets, and B2B request handling.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Technical catalog with downloadable spec sheets.<br />
            • B2B quote request module with custom order parameters.<br />
            • Industrial grade reliability and responsive layout.
          </p>
        </div>
      );
    },
  },
  {
    id: "konda-dom",
    category: "Construction & Real Estate",
    title: "Konda Dom",
    src: `${BASE_PATH}/konda-dom/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://konda-dom.ru/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Turnkey home building &amp; modern architectural design.
          </TypographyP>
          <TypographyP className="font-mono">
            A construction company platform for country homes, cottages, and turnkey architecture. Features architectural project filters, floorplan galleries, and cost estimator tools.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Interactive project filter by square meters, floors, and materials.<br />
            • Construction stage gallery and customer case studies.<br />
            • Direct WhatsApp/Telegram integration for rapid consultation.
          </p>
        </div>
      );
    },
  },
  {
    id: "baiagent",
    category: "AI & Automation Agency",
    title: "BAI Agent",
    src: `${BASE_PATH}/baiagent/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://baiagent.ru/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI business automation &amp; autonomous intelligent agents.
          </TypographyP>
          <TypographyP className="font-mono">
            A futuristic agency portal offering enterprise AI automation, custom neural integrations, and conversational AI chatbots. Designed with cybernetic dark themes and interactive feature breakdowns.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Cyberpunk and neon gradient visual language.<br />
            • Live AI service demonstration triggers and comparison tables.<br />
            • Optimized frontend bundle with lightning-fast initial paint.
          </p>
        </div>
      );
    },
  },
  {
    id: "balanov-twa",
    category: "Telegram Web App (TWA)",
    title: "Balanov Mini App",
    src: `${BASE_PATH}/balanov-twa/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://balanov.pro/twa/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            High-performance Telegram Mini App with touch gestures.
          </TypographyP>
          <TypographyP className="font-mono">
            A dedicated Telegram Web App (TWA) engineered for seamless in-messenger user experience. Implements Telegram WebApp SDK bindings, haptic feedback, and responsive mobile-optimized screens.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Full Telegram WebApp SDK integration with viewport theme color sync.<br />
            • 60fps mobile touch animations and native feeling UI.<br />
            • Ultra-lightweight footprint for instant launch inside Telegram.
          </p>
        </div>
      );
    },
  },
  {
    id: "quadplay",
    category: "Gaming & Entertainment",
    title: "Quadplay",
    src: `${BASE_PATH}/quadplay/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://quadplay.ru/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Gaming arena, esports &amp; entertainment platform.
          </TypographyP>
          <TypographyP className="font-mono">
            A high-energy gaming club and tournament portal featuring live computer booking, tournament schedules, gaming gear overviews, and membership rewards.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Dynamic gaming zone selector and hardware specs visualizer.<br />
            • Live tournament leaderboard and registration system.<br />
            • Gaming RGB style animations and dark cyber aesthetics.
          </p>
        </div>
      );
    },
  },
  {
    id: "youti",
    category: "Digital Services & Platform",
    title: "Youti",
    src: `${BASE_PATH}/youti/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://youti.ru/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Modern digital service &amp; lifestyle platform.
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive digital service hub designed to provide smooth user onboarding, intuitive service browsing, interactive pricing tiers, and direct client support.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Clean SaaS layout with interactive service breakdowns.<br />
            • Responsive design with fluid typography across devices.<br />
            • Streamlined customer onboarding and support integration.
          </p>
        </div>
      );
    },
  },
  {
    id: "ramadivineleela",
    category: "Cultural & Media Portal",
    title: "Rama Divine Leela",
    src: `${BASE_PATH}/ramadivineleela/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [],
    },
    live: "https://ramadivineleela.com/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Global cultural production, arts &amp; media foundation.
          </TypographyP>
          <TypographyP className="font-mono">
            An international cultural and spiritual production website showcasing media series, global theatrical performances, literature, and philanthropic initiatives.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Multi-language support and international media streaming links.<br />
            • Rich typographic hierarchy with golden aesthetic accents.<br />
            • Event tour dates and ticket reservation gateways.
          </p>
        </div>
      );
    },
  },
  {
    id: "celitel-mc",
    category: "Healthcare & Medical Center",
    title: "Celitel Medical Center",
    src: `${BASE_PATH}/celitel-mc/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://celitel-mc.ru/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Comprehensive clinic diagnostics &amp; health services.
          </TypographyP>
          <TypographyP className="font-mono">
            A healthcare portal for a multidisciplinary medical clinic. Features specialist doctor profiles, online appointment booking, diagnostic service price lists, and patient reviews.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Fast doctor directory search by specialty and branch.<br />
            • Online appointment scheduling and inquiry forms.<br />
            • Trustworthy, clean medical design adhering to accessibility standards.
          </p>
        </div>
      );
    },
  },
  {
    id: "mestoshefa",
    category: "Culinary & Checkout Flow",
    title: "Mesto Shefa (Checkout)",
    src: `${BASE_PATH}/mestoshefa/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    live: "https://mestoshefa.ru/checkout/",
    github: GITHUB_PROFILE,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Frictionless restaurant order &amp; checkout experience.
          </TypographyP>
          <TypographyP className="font-mono">
            An e-commerce food delivery checkout flow engineered for conversion. Features real-time cart calculations, delivery address autocompletion, promo code validation, and payment option selection.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Multi-step checkout with instant client-side validation.<br />
            • Delivery time slot selector and order summary breakdowns.<br />
            • Optimized UX designed to minimize checkout abandonment.
          </p>
        </div>
      );
    },
  },
];

export default projects;
