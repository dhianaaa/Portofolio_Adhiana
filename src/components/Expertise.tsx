"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Expertise() {
  const cards = [
    {
      number: "01",
      title: "Mobile App Development",
      description:
        "Building fluid, high-performance cross-platform mobile apps using Flutter and React Native with responsive layouts and scalable state architectures.",
      bg: "bg-card-lime",
      textColor: "text-brand-dark",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-brand-dark">
          <path d="M50 20 C55 35 65 45 80 50 C65 55 55 65 50 80 C45 65 35 55 20 50 C35 45 45 35 50 20 Z" />
          <circle cx="50" cy="50" r="10" fill="transparent" stroke="currentColor" strokeWidth="4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "UI/UX & Product Design",
      description:
        "Conducting user journey mapping, wireframing, and crafting high-fidelity design systems with micro-interactions and thorough usability testing.",
      bg: "bg-card-pink",
      textColor: "text-brand-dark",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-white">
          <path d="M50 0 L58 20 L78 10 L75 32 L96 35 L82 50 L96 65 L75 68 L78 90 L58 80 L50 100 L42 80 L22 90 L25 68 L4 65 L18 50 L4 35 L25 32 L22 10 L42 20 Z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Design Systems & Tokens",
      description:
        "Bridging design and engineering with unified token architectures, atomic component libraries, and documentation that eliminates design debt.",
      bg: "bg-brand-dark",
      textColor: "text-white",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-white">
          <path d="M50,15 C58,15 65,22 65,30 C65,38 58,45 50,45 C58,45 65,52 65,60 C65,68 58,75 50,75 C42,75 35,68 35,60 C35,52 42,45 50,45 C42,45 35,38 35,30 C35,22 42,15 50,15 Z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Frontend Engineering",
      description:
        "Developing accessible, ultra-responsive web applications using Next.js, React, TypeScript, and modern utility-first CSS frameworks.",
      bg: "bg-white",
      textColor: "text-brand-dark",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-brand-blue">
          <circle cx="50" cy="50" r="14" />
          <path d="M50 10 A12 12 0 0 1 50 34 A12 12 0 0 1 50 10 M50 66 A12 12 0 0 1 50 90 A12 12 0 0 1 50 66 M10 50 A12 12 0 0 1 34 50 A12 12 0 0 1 10 50 M66 50 A12 12 0 0 1 90 50 A12 12 0 0 1 66 50" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Graphic & Brand Direction",
      description:
        "Crafting memorable visual identities, promotional assets, editorial publication layouts, and social media media kits for modern creative teams.",
      bg: "bg-card-coral",
      textColor: "text-white",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-card-lime">
          <path d="M50 0 L58 20 L78 10 L75 32 L96 35 L82 50 L96 65 L75 68 L78 90 L58 80 L50 100 L42 80 L22 90 L25 68 L4 65 L18 50 L4 35 L25 32 L22 10 L42 20 Z" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Leadership & Team Ops",
      description:
        "Leading cross-functional creative initiatives, administering communications as Secretary at Media Moklet, and ensuring smooth project milestones.",
      bg: "bg-card-yellow",
      textColor: "text-brand-dark",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-card-pink">
          <path d="M50 15 C55 35 65 45 85 50 C65 55 55 65 50 85 C45 65 35 55 15 50 C35 45 45 35 50 15 Z" />
        </svg>
      ),
    },
  ];

  const marqueeSkills = [
    "MOBILE APP DEV",
    "UI/UX DESIGN",
    "DESIGN SYSTEMS",
    "FRONTEND ENGINEERING",
    "GRAPHIC DIRECTION",
    "LEADERSHIP & OPS",
  ];

  const repeatedSkills = [
    ...marqueeSkills,
    ...marqueeSkills,
    ...marqueeSkills,
    ...marqueeSkills,
  ];

  return (
    <section id="expertise" className="relative pt-20 sm:pt-28 bg-brand-blue text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-card-lime font-bold">
            • EXPERTISE
          </span>
          <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-white leading-none">
            WHAT I DO
          </h2>
        </div>

        {/* 6 Bento Cards (3 columns) matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.number}
              className={`rounded-4xl p-8 sm:p-9 ${card.bg} ${card.textColor} flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl select-none`}
            >
              <div>
                <span className="font-mono text-xs opacity-60 block mb-4">
                  {card.number}
                </span>
                <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight leading-tight mb-3">
                  {card.title}
                </h3>
                <p className="font-bricolage text-xs sm:text-sm leading-relaxed opacity-85">
                  {card.description}
                </p>
              </div>

              {/* Bottom Decorative Icon */}
              <div className="flex justify-end pt-6">
                {card.iconSvg}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Width Lime Marquee Ribbon matching Reference */}
      <div className="w-full py-5 bg-card-lime text-brand-dark overflow-hidden border-y border-brand-dark select-none">
        <div className="flex w-fit whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          {repeatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 px-6 font-anton text-2xl sm:text-3xl md:text-4xl tracking-wider uppercase"
            >
              <span>{skill}</span>
              <span className="text-xl sm:text-2xl">✱</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
