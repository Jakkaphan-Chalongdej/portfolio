import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiPython,
  SiJavascript,
  SiGo,
  SiGit,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiHtml5,
  SiRedux,
  SiBootstrap,
  SiSass,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiNodedotjs,
  SiFlask,
  SiApple,
  SiLinux,
  SiDocker,
  SiArduino,
} from "react-icons/si";
import { FiImage } from "react-icons/fi";

export const profile = {
  name: "Jakkaphan Chalongdej",
  role: "Back-end Developer",
  location: "Lat Phrao, Bangkok",
  phone: "062 196 1651",
  tagline:
    "Back-end development expert with 5+ years of experience. I quickly design and ship reliable APIs for web applications using NestJS, PostgreSQL, MySQL, and SQL Server.",
  email: "jakkaphan.contact@gmail.com",
  resumeUrl: "",
  socials: {
    github: "https://github.com/Jakkaphan-Chalongdej",
    linkedin: "https://www.linkedin.com/in/jakkaphan-chalongdej-93462b210/",
    facebook: "https://www.facebook.com/jakkaphan.chalongdej",
  },
};

// Rotating titles for the hero typewriter effect.
export const roles = [
  "Back-end Developer",
  "API Specialist",
  "NestJS Engineer",
  "PostgreSQL Enthusiast",
];

export const about = {
  paragraphs: [
    "I'm a back-end developer based in Bangkok with more than five years of hands-on experience building the engines behind web applications. My focus is designing clean, well-structured RESTful APIs and data models that scale.",
    "Currently a back-end developer at Accelerate Technology Group — and previously at GLONIX Technologies and Y.I.M. Corporation — I've shipped APIs for funding platforms, dashboards, e-learning and evaluation systems, healthcare, warehouse, and sales — mostly with NestJS and TypeScript, backed by PostgreSQL, MySQL, SQL Server, and Redis.",
    "Right now I'm deepening my knowledge of Domain-Driven Design and API Security, sharpening both the architecture and the safety of the systems I build.",
  ],
  stats: [
    { value: 5, suffix: "+", label: "Years of experience" },
    { value: 25, suffix: "+", label: "Technologies used" },
    { value: 12, suffix: "+", label: "Projects delivered" },
  ],
  learning: ["Domain-Driven Design (DDD)", "API Security"],
};

export const education = {
  school: "Rajamangala University of Technology Isan",
  period: "2017 - 2021",
  degree: "Bachelor of Science in Computer Science",
};

export type Job = {
  company: string;
  role: string;
  period: string;
  items: { date: string; project: string; description: string }[];
};

export const experience: Job[] = [
  {
    company: "Accelerate Technology Group Co., Ltd.",
    role: "Software Developer",
    period: "Jun 2025 - Present",
    items: [
      {
        date: "Jun 2025",
        project: "NSDF Requester",
        description:
          "Engineered the backend engine for a funding-subsidy platform — application submissions, automated status tracking, and request revisions — with secure, high-performance APIs driving MOU reviews and final contract sign-offs.",
      },
      {
        date: "Jun 2025",
        project: "NSDF Risk Management",
        description:
          "Built the backend for an institutional Risk Register: flexible data workflows for risk creation, multi-level severity classification, and end-to-end tracking of mitigation and corrective actions through to resolution.",
      },
      {
        date: "May 2024",
        project: "E-Portfolio — Advisor",
        description:
          "Built a secure backend for academic advisors to track, evaluate, and grade submissions — flexible scoring workflows, precise data validation, and high-performance APIs for real-time reporting and dashboard analytics.",
      },
      {
        date: "May 2024",
        project: "E-Portfolio — Student",
        description:
          "Designed a robust RESTful backend for a student evaluation platform — optimized for high-concurrency writes with strong data security, validation, and student anonymity across all assessment workflows.",
      },
    ],
  },
  {
    company: "GLONIX Technologies Co., Ltd",
    role: "Software Developer",
    period: "May 2024 - Jun 2025",
    items: [
      {
        date: "Oct 2024",
        project: "East Water — Dashboard",
        description:
          "Designed and developed RESTful APIs serving real-time statistics and analytics for an operational dashboard.",
      },
      {
        date: "May 2024",
        project: "E-Portfolio — Admin",
        description:
          "Engineered the backend administration for a campus evaluation system: a dynamic form builder for flexible assessment layouts, plus user management for authentication, profile provisioning, and access control for students and advisors.",
      },
    ],
  },
  {
    company: "Y.I.M. Corporation Co., Ltd",
    role: "Software Developer",
    period: "May 2021 - Apr 2024",
    items: [
      {
        date: "Oct 2023",
        project: "Sri Trang — Vendor",
        description:
          "RESTful API for a farmers' rubber sales system: production-volume tracking, sales records, and market pricing.",
      },
      {
        date: "Sep 2023",
        project: "AI-CEDA",
        description:
          "RESTful API for cancer data — patient records and disease staging to support medical analysis and treatment tracking.",
      },
      {
        date: "May 2023",
        project: "Sri Trang — Friend",
        description:
          "RESTful API for a rubber sales system: real-time volume & price calculation and trade-data tracking.",
      },
      {
        date: "Sep 2022",
        project: "Absolute Health — Warehouse",
        description:
          "RESTful API for warehouse management: receiving, storing, disbursing, and stock tracking.",
      },
      {
        date: "Feb 2022",
        project: "Absolute Health",
        description:
          "RESTful API for a beauty-clinic management system: appointments, treatment history, and follow-ups.",
      },
      {
        date: "Sep 2021",
        project: "ABUS",
        description:
          "RESTful API for cancer data — managing patient data and disease stages for research and treatment teams.",
      },
      {
        date: "May 2021",
        project: "Alumet",
        description:
          "RESTful API for an aluminum sales system: product sales data and aluminum-usage calculation per product.",
      },
    ],
  },
];

export type SkillCategory = { title: string; items: string[] };

// Full, CV-accurate skill list rendered as text chips.
export const skillCategories: SkillCategory[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "SQL"] },
  {
    title: "Frameworks & Libraries",
    items: ["NestJS", "Express", "Next.js", "React", "Tailwind CSS", "Ant Design", "Socket.io", "Swagger"],
  },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "SQL Server", "Redis"] },
  { title: "Authentication", items: ["JWT", "Passport.js"] },
  { title: "Testing", items: ["Jest", "Cypress", "k6"] },
  { title: "Monitoring & Logging", items: ["Sentry", "Grafana"] },
  { title: "DevOps & CI/CD", items: ["Docker", "Git", "GitLab"] },
  { title: "Tools", items: ["VS Code", "Visual Studio", "TablePlus", "SSMS", "AnyDesk"] },
  { title: "Communication", items: ["Slack", "Trello", "Teams", "Lark", "Monday"] },
];

export type Skill = { name: string; icon: IconType; color: string };
export type SkillGroup = { title: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Back-end & Databases",
    items: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Front-end",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Sass", icon: SiSass, color: "#CC6699" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "macOS", icon: SiApple, color: "#ffffff" },
      { name: "Arduino", icon: SiArduino, color: "#00878F" },
      { name: "Photoshop", icon: FiImage, color: "#31A8FF" },
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Hotel Booking System",
    description:
      "A hotel booking back-end written in Go — room availability, reservations, and booking management exposed through a clean REST API.",
    tags: ["Go", "REST API", "Backend"],
    url: "https://github.com/Jakkaphan-Chalongdej/hotel-booking-system",
    featured: true,
  },
  {
    name: "NestJS DDD Demo",
    description:
      "A reference implementation applying Domain-Driven Design principles in NestJS — layered architecture, aggregates, and clean separation of concerns.",
    tags: ["NestJS", "TypeScript", "DDD"],
    url: "https://github.com/Jakkaphan-Chalongdej/nest-ddd-demo",
    featured: true,
  },
  {
    name: "NestJS Monorepo Demo",
    description:
      "A monorepo setup showcasing how to structure multiple NestJS services and shared libraries within a single, maintainable workspace.",
    tags: ["NestJS", "Monorepo", "TypeScript"],
    url: "https://github.com/Jakkaphan-Chalongdej/nest-monorepo-demo",
    featured: true,
  },
  {
    name: "Next.js Starter",
    description:
      "An opinionated Next.js starter template with TypeScript wired up, ready to bootstrap new front-end projects quickly.",
    tags: ["Next.js", "TypeScript", "Template"],
    url: "https://github.com/Jakkaphan-Chalongdej/next-starter",
  },
  {
    name: "Project Schedule",
    description:
      "A scheduling application built with TypeScript for planning and tracking project timelines and tasks.",
    tags: ["TypeScript", "Scheduling"],
    url: "https://github.com/Jakkaphan-Chalongdej/project-schedule",
  },
  {
    name: "LINE Bot (Node.js)",
    description:
      "A chatbot built on the LINE Messaging API with Node.js — handling webhooks, messages, and automated replies.",
    tags: ["Node.js", "LINE API", "Chatbot"],
    url: "https://github.com/Jakkaphan-Chalongdej/line-bot-nodejs",
  },
];
