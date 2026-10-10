"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { WaveToLight, WaveToBlue } from "@/components/WaveDividers";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function WorkPage() {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Mobile App",
    "UI/UX Design",
    "Frontend & Web",
    "Creative Tech",
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Mobile App")
      return (
        project.category.toLowerCase().includes("mobile") ||
        project.tech.includes("Flutter") ||
        project.tech.includes("React Native")
      );
    if (activeCategory === "UI/UX Design")
      return (
        project.category.toLowerCase().includes("design system") ||
        project.tech.includes("Figma") ||
        project.category.toLowerCase().includes("prototype")
      );
    if (activeCategory === "Frontend & Web")
      return (
        project.tech.includes("Next.js") ||
        project.category.toLowerCase().includes("editorial")
      );
    if (activeCategory === "Creative Tech")
      return (
        project.tech.includes("Unity") ||
        project.category.toLowerCase().includes("ar")
      );
    return true;
  });

  return (
    <main className="min-h-screen flex flex-col bg-brand-blue text-white selection:bg-card-lime selection:text-brand-dark">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-card-lime animate-ping" />
          <span className="text-xs uppercase font-mono tracking-widest text-card-lime font-bold">
            Catalog & Archives
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.9] text-white">
              SELECTED <span className="text-card-lime">WORK</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl font-sans leading-relaxed">
              A curated collection of mobile applications, design systems, editorial portals, and interactive experiences crafted with precision.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-5xl font-anton text-white/30">
              0{projects.length}
            </span>
            <span className="block text-xs uppercase tracking-widest text-white/60 font-mono">
              Total Showcases
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-y border-white/15 py-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/60 mr-2">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-bold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-card-lime text-brand-dark shadow-sm scale-105"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid Section on Crisp Light Surface */}
      <section className="relative bg-brand-light text-brand-dark pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group relative flex flex-col rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundColor: project.accentBg,
                  borderColor: project.borderColor,
                  color: project.textColor,
                }}
              >
                {/* Image Container with Badge */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-dark/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md"
                      style={{
                        backgroundColor: project.buttonBg,
                        color: project.buttonText,
                      }}
                    >
                      {project.number} · {project.year}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45"
                    style={{
                      backgroundColor: project.buttonBg,
                      color: project.buttonText,
                    }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest opacity-75 font-semibold">
                      {project.category}
                    </span>
                    <h2 className="font-anton text-3xl sm:text-4xl uppercase mt-1 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm font-sans line-clamp-2 opacity-90 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-6 pt-4 border-t flex flex-wrap gap-1.5" style={{ borderColor: project.borderColor }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium"
                        style={{ backgroundColor: project.tagColor }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-xl font-sans text-brand-dark/60">
                No projects found under this category.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 px-6 py-2 rounded-full bg-brand-blue text-white font-sans text-sm font-bold"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Transition Wave to Blue */}
      <div className="relative bg-brand-light">
        <WaveToBlue />
      </div>

      {/* Contact CTA & Footer */}
      <ContactCTA />
      <Footer />
    </main>
  );
}
