"use client";

import React from "react";
import { Sparkles, Calendar, Briefcase, GraduationCap, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-brand-light text-brand-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            BACKGROUND &amp; LEADERSHIP
          </span>
          <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-brand-dark leading-none">
            EXPERIENCE
          </h2>
          <p className="font-bricolage text-base sm:text-lg text-brand-dark/70 max-w-xl">
            Proven track record leading student media initiatives, designing
            visual brands, and engineering software at SMK Telkom Malang.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 md:p-10 rounded-4xl bg-white border border-brand-dark/10 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="md:w-1/3 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-blue px-3 py-1 rounded-full bg-brand-light w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
                <span className="text-xs font-mono uppercase text-brand-dark/50 tracking-wider">
                  {exp.type}
                </span>
                <h4 className="font-anton text-2xl text-brand-dark uppercase tracking-tight">
                  {exp.organization}
                </h4>
              </div>

              <div className="md:w-2/3 flex flex-col gap-4">
                <div>
                  <h3 className="font-bricolage text-xl sm:text-2xl font-bold text-brand-blue flex items-center gap-2">
                    {exp.role}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-brand-dark/80 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-brand-dark/70 font-medium"
                    >
                      <Award className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
