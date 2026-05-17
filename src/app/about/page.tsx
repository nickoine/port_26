"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  SiPython,
  SiOpenai,
  SiDjango,
  SiDocker,
  SiLinux,
  SiGit,
  SiGrafana,
  SiOllama,
  SiPytest,
  SiPrometheus,
  SiPostman,
  SiRedis,
  SiPostgresql,
  SiSwagger,
  SiMongodb,
  SiAnsible,
  SiAnthropic,
  SiKotlin,
  SiAppium,

} from "react-icons/si";
import {
  FaEnvelope, FaLinkedin, FaGithub
} from "react-icons/fa"
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from "react-icons/si";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";
import Script from "next/script";
import { config } from "@/data/config";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "nickkyyr@gmail.com",
    href: "mailto:nickkyyr@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nikk-the-brick/",
    content: "/nikk-the-brick",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/nickoine",
    content: "/nickoine",
    icon: <FaGithub />,
  },
];

const TOOLS = [
  { name: "Python", content: "Backend development.", icon: <SiPython size={50} color="#3776ab" /> },
  { name: "OpenAI", content: "LLM integration.", icon: <SiOpenai size={50} color="#ffffff" /> },
  { name: "Django", content: "Structured backend.", icon: <SiDjango size={50} color="#092e20" /> },
  { name: "Docker", content: "Containerized development.", icon: <SiDocker size={50} color="#2496ed" /> },
  { name: "Linux", content: "Stable development base.", icon: <SiLinux size={50} color="#ffffff" /> },
  { name: "Git", content: "Version control.", icon: <SiGit size={50} color="#f05032" /> },
  { name: "Grafana", content: "Monitoring and metrics.", icon: <SiGrafana size={50} color="#f46800" /> },
  { name: "Ollama", content: "Local LLM model serving.", icon: <SiOllama size={50} color="#ffffff" /> },
  { name: "Pytest", content: "Python test fixtures.", icon: <SiPytest size={50} color="#0a9edc" /> },
  { name: "Prometheus", content: "Metrics collection.", icon: <SiPrometheus size={50} color="#e6522c" /> },
  { name: "Postman", content: "API testing.", icon: <SiPostman size={50} color="#ff6c37" /> },
  { name: "Redis", content: "Caching, queues.", icon: <SiRedis size={50} color="#dc382d" /> },
  { name: "PostgreSQL", content: "Relational data modeling.", icon: <SiPostgresql size={50} color="#336791" /> },
  { name: "Swagger", content: "API documentation, OpenAPI.", icon: <SiSwagger size={50} color="#85ea2d" /> },
  { name: "MongoDB", content: "Document storage, flexible design.", icon: <SiMongodb size={50} color="#47a248" /> },
  { name: "AsyncIO", content: "Python workflows logic.", icon: <SiPython size={50} color="#3776ab" /> },
  { name: "Ansible", content: "Infrastructure automation.", icon: <SiAnsible size={50} color="#ee0000" /> },
  { name: "Kotlin", content: "Android mobile plugins.", icon: <SiKotlin size={50} color="#7f52ff" /> },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);

  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-zinc-200 pt-20 lg:pt-24 pb-16">
      <Script
        id="ld-json-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "About " + config.author,
            url: `${config.site}/about`,
            description: config.description.short,
            inLanguage: "en",
            author: {
              "@type": "Person",
              name: config.author,
              email: config.email,
              url: config.site,
            },
            publisher: {
              "@type": "Person",
              name: config.author,
            },
          }),
        }}
      />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-9">
        <aside className="w-full xl:max-w-1/3 xl:col-span-1 xl:justify-self-start">
          <div className="p-5 sm:p-7 lg:p-8 rounded-2xl border border-zinc-700/70 bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md shadow-lg">
            <div className="flex flex-col sm:flex-row xl:flex-col items-center gap-4 sm:gap-6">
              <div className="flex justify-center items-center w-full max-w-[180px] bg-zinc-800 rounded-xl p-4 sm:p-5">
                <img
                  className="rounded-full w-[110px] sm:w-[130px] md:w-[150px] xl:w-[170px] aspect-square bg-zinc-800 shadow-inner"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-left xl:items-center xl:text-center">
                <p className="text-lg sm:text-xl md:text-2xl">Nick M.K.</p>
                <div className="text-[11px] sm:text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Python Developer ➡️ Delivery Manager
                </div>
              </div>
            </div>
            <div className="mt-8">
              <hr className="my-6 border-zinc-700" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-14 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border rounded-md transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                      href={link.href}
                    >
                      <div className="w-8 flex items-center justify-center text-lg">
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-sm sm:text-base">{link.name}</div>
                        <div className="text-xs text-zinc-500 truncate">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="w-full xl:max-w-2/3 xl:col-span-2 xl:justify-self-end">
          <div className="p-4 sm:p-6 lg:p-8 border border-zinc-700/70 rounded-2xl bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md shadow-lg space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl">About me</h1>
              <p className="leading-relaxed text-sm sm:text-base text-zinc-200">
                Hey there! I&apos;m Nick, a Software Engineer and creative technologist focused on digital products. I care about building practical systems that move from testing to development to deployment, automation, and real delivery.
              </p>

              <p className="leading-relaxed text-sm sm:text-base text-zinc-200">
                My recent focus is backend and infrastructure work around AI/LLM systems. I focus on deployment, AI/LLM integrations, DevOps-oriented workflows, and CI/CD, where engineering is connected not only to writing code, but also to shipping products faster and more reliably today. 
              </p>

              <p className="leading-relaxed text-sm sm:text-base text-zinc-200">
                When I&apos;m not coding, you can find me playing music, football, exploring new technologies, or sipping coffee while brainstorming my next project.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl">Stuff I use</h2>
              <div>
                {!toolsLoaded ? (
                  <div className="h-[120px] bg-zinc-800/40 rounded-lg animate-pulse" />
                ) : (
                  <Splide
                  options={{
                    type: "loop",
                    interval: 2200,
                    autoplay: true,
                    pagination: false,
                    speed: 1200,
                    perPage: 4,
                    perMove: 1,
                    gap: "1.25rem",
                    breakpoints: {
                      1280: { perPage: 3 },
                      1024: { perPage: 2 },
                      768: { perPage: 2 },
                      640: { perPage: 1 },
                    },
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                    aria-label="Tools"
                  >
                    {TOOLS.map((tool) => (
                      <SplideSlide key={tool.name}>
                        <div className="flex flex-col rounded-lg border border-zinc-700 bg-zinc-800 p-4 sm:p-5 justify-center items-center h-[170px] sm:h-[190px] md:h-[200px] text-center gap-2 shadow-md">
                          <div className="mb-2">{tool.icon}</div>
                          <div className="text-base sm:text-lg">{tool.name}</div>
                          <div className="text-xs sm:text-sm text-zinc-500 leading-snug">
                            {tool.content}
                          </div>
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
