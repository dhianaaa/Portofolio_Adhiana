"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Copy, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { profile, skills } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-brand-light text-brand-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Arch-Shaped Portrait Card matching Reference */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Arched Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-t-[160px] rounded-b-4xl overflow-hidden bg-brand-blue shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                  alt={profile.fullName}
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
              </div>

              {/* Yellow Sticker on Top Right: "Hi, I'm Dhiana" */}
              <div className="absolute -top-3 -right-3 sm:-right-6 z-20">
                <div className="relative px-4 py-2 bg-card-yellow text-brand-dark rounded-full font-anton text-xs sm:text-sm uppercase tracking-wide shadow-md flex items-center gap-1.5 rotate-3 hover:rotate-0 transition-transform">
                  <span>Hi, I’m {profile.preferredName}</span>
                  <span className="text-base">👋</span>
                </div>
              </div>

              {/* Black Pill Sticker on Bottom Left: "Strategy + Code" */}
              <div className="absolute bottom-6 -left-3 sm:-left-6 z-20">
                <div className="px-4 py-2 bg-brand-dark text-white rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider shadow-lg -rotate-3 hover:rotate-0 transition-transform border border-white/20">
                  <span>Strategy + aesthetics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Heading & Story */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
              • ABOUT
            </span>

            <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-brand-dark leading-none">
              A DEVELOPER FOCUSED ON THE SPACE BETWEEN STRATEGY AND AESTHETICS.
            </h2>

            <p className="font-bricolage text-base sm:text-lg md:text-xl text-brand-dark/80 leading-relaxed font-normal">
              My approach combines strategic thinking, visual craft, and
              technology to create experiences that feel intentional from the
              first impression to the smallest interaction.
            </p>

            <p className="font-sans text-sm sm:text-base text-brand-dark/70 leading-relaxed">
              As a Software Engineering student at SMK Telkom Malang and Secretary
              at Media Moklet, I’ve led student publications and engineered
              resilient cross-platform mobile apps that bridge human design with
              production code.
            </p>

            {/* Quick Skills Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Flutter", "Figma", "Next.js", "TypeScript", "Dart", "Tailwind CSS"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-white border border-brand-dark/10 text-xs font-mono font-medium text-brand-dark shadow-2xs"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTA Button matching Reference */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white hover:bg-brand-blue transition-colors text-xs font-sans font-bold uppercase tracking-wider shadow-sm"
              >
                <span>More About Me</span>
                <span className="w-5 h-5 rounded-full bg-card-lime text-brand-dark flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 stroke-[3]" />
                </span>
              </Link>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-brand-dark/15 text-brand-dark hover:bg-brand-light transition-colors text-xs font-mono uppercase"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{profile.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
