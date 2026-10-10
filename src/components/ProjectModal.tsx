"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from "lucide-react";
import { Project } from "@/data/portfolioData";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-dark/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-4xl bg-brand-dark text-white border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: `0 25px 60px -15px ${project.accentBg}33`,
        }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-anton tracking-wider uppercase"
              style={{
                backgroundColor: project.accentBg,
                color: project.textColor,
              }}
            >
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/60">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title and subtitle */}
        <div className="flex flex-col gap-2">
          <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            {project.title}
          </h2>
          <p className="font-bricolage text-lg sm:text-xl text-card-lime font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden border border-white/10 bg-brand-slate">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-dark/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-white/80">
              Key Metric Highlight
            </span>
            <span
              className="text-xs sm:text-sm font-anton tracking-wide uppercase px-3 py-1 rounded-full"
              style={{
                backgroundColor: project.accentBg,
                color: project.textColor,
              }}
            >
              {project.metrics}
            </span>
          </div>
        </div>

        {/* Deep dive info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="font-anton text-2xl uppercase tracking-wide text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-card-lime" />
              Project Overview &amp; Architecture
            </h3>
            <p className="font-sans text-white/80 text-base leading-relaxed">
              {project.description}
            </p>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-card-lime">
                // Engineering &amp; Design Contributions
              </span>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-card-lime shrink-0 mt-0.5" />
                  <span>
                    Engineered modular UI components with strict accessibility standards and reusable token mapping.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-card-lime shrink-0 mt-0.5" />
                  <span>
                    Conducted user interviews with student stakeholders at SMK Telkom Malang to refine core UX flows.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-card-lime shrink-0 mt-0.5" />
                  <span>
                    Optimized asset delivery, bundle footprint, and real-time synchronization pipelines.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/60 block mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-card-lime" />
                Technology Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/90 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans font-bold text-sm flex items-center justify-center gap-2 transition-colors border border-white/15"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full font-sans font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg hover:scale-105"
                  style={{
                    backgroundColor: project.accentBg,
                    color: project.textColor,
                  }}
                >
                  <span>Open Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
