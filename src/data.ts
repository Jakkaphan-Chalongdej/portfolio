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
  location: "Bangkok, Thailand",
  tagline:
    "Back-end development expert with 5+ years of experience. I quickly design and ship reliable APIs for web applications using NestJS, PostgreSQL, MySQL, and SQL Server.",
  email: "jakkahan.c@outlook.com",
  resumeUrl: "",
  socials: {
    github: "https://github.com/Jakkaphan-Chalongdej",
    linkedin: "https://www.linkedin.com/in/jakkaphan-chalongdej-93462b210/",
    facebook: "https://www.facebook.com/jakkaphan.chalongdej",
  },
};

export const about = {
  paragraphs: [
    "I'm a back-end developer based in Bangkok with more than five years of hands-on experience building the engines behind web applications. My focus is designing clean, well-structured APIs and data models that scale.",
    "Day to day I work mostly with NestJS and TypeScript on the server, backed by PostgreSQL, MySQL, and SQL Server. I'm comfortable across the stack — from React and Next.js on the front end to Docker and Linux in deployment.",
    "Right now I'm deepening my knowledge of Domain-Driven Design and API Security, sharpening both the architecture and the safety of the systems I build.",
  ],
  highlights: [
    { value: "5+", label: "Years of experience" },
    { value: "API", label: "Design & development" },
    { value: "DDD", label: "Currently learning" },
  ],
  learning: ["Domain-Driven Design (DDD)", "API Security"],
};

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
