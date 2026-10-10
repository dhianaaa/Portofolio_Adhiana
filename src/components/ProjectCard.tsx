"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolioData";

export default function ProjectCard({
  project,
}: {
  project: Project;
  onSelect?: (p: Project) => void;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative rounded-4xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer select-none"
      style={{
        backgroundColor: project.accentBg,
        color: project.textColor,
      }}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2">
          <span className="font-anton text-xl sm:text-2xl tracking-tight leading-none">
            {project.number}
          </span>
          <span className="text-current/60 font-mono text-xs">—</span>
          <span className="text-xs sm:text-sm font-bricolage font-semibold tracking-wide uppercase opacity-85">
            {project.category}
          </span>
        </div>

        {/* Circular Arrow Button */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-45 shadow-sm"
          style={{
            backgroundColor: project.buttonBg,
            color: project.buttonText,
          }}
        >
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </div>
      </div>

      {/* Middle Mockup Image Container */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden mb-6 bg-black/10 border border-current/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Bottom Giant Anton Project Title + Subtitle */}
      <div className="flex flex-col gap-1.5 pt-1">
        <h3 className="font-anton text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-none">
          {project.title}
        </h3>
        <p className="font-bricolage text-xs sm:text-sm font-medium opacity-80 tracking-wide uppercase">
          {project.subtitle}
        </p>
      </div>
    </Link>
  );
}
