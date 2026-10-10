"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";

export default function SelectedProjects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-light text-brand-dark"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header matching Reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
              • SELECTED WORK
            </span>
            <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-brand-dark leading-none">
              SELECTED PROJECTS
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center gap-4 max-w-md">
            <p className="font-bricolage text-sm sm:text-base text-brand-dark/70 leading-snug">
              A selection of identities, mobile apps, and digital experiences
              created for ambitious initiatives.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-dark text-white hover:bg-brand-blue transition-colors text-xs font-sans font-bold uppercase tracking-wider shrink-0 shadow-sm"
            >
              <span>View All Work</span>
              <span className="w-5 h-5 rounded-full bg-card-lime text-brand-dark flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 stroke-[3]" />
              </span>
            </Link>
          </div>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case study modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
