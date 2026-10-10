"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Smartphone, Sparkles } from "lucide-react";
import {
  PinkStarburstBadge,
  FlowerScallopBadge,
  FigmaLabelTag,
  StatusPill,
  OrangeCircleBadge,
  PenToolSquiggle,
  ColorSwatchesPill,
} from "./StickerBadges";
import { WaveToLight } from "./WaveDividers";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-28 sm:pt-36 bg-brand-blue text-white overflow-hidden flex flex-col justify-between">
      {/* Subtle Figma dotted canvas background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.7) 1.5px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
        {/* Figma Ruler Line at the top */}
        <div className="w-full flex items-center justify-between border-b border-white/20 pb-3 mb-8 text-[10px] font-mono text-white/50 select-none">
          <span>0</span>
          <span>250</span>
          <span>500</span>
          <span>750</span>
          <span>1000</span>
          <span>1250</span>
        </div>

        {/* Figma Canvas Dashed Bounding Box */}
        <div className="relative border-2 border-dashed border-white/40 rounded-3xl p-6 sm:p-10 md:p-12 mb-8 bg-brand-blue/30 backdrop-blur-xs">
          {/* Figma Canvas Corner Handles */}
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-card-lime border border-brand-dark" />
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-card-lime border border-brand-dark" />
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-card-lime border border-brand-dark" />
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-card-lime border border-brand-dark" />

          {/* Floating Sticker Badges Array matching Reference */}
          <div className="relative w-full flex flex-wrap items-center justify-between gap-3 mb-6">
            {/* Left: Pink Starburst */}
            <div className="absolute -top-12 -left-3 sm:-top-16 sm:-left-6 z-20">
              <PinkStarburstBadge text="03+ years" />
            </div>

            {/* Center-Left: Figma Tag Label */}
            <div className="ml-16 sm:ml-24">
              <FigmaLabelTag text="Hero 1092 × 540" />
            </div>

            {/* Right: Status Pill & Orange Circle */}
            <div className="flex items-center gap-2 sm:gap-4 ml-auto">
              <StatusPill text="Open for projects" />
              <OrangeCircleBadge text="Malang based" />
            </div>
          </div>

          {/* Giant Anton 3-Line Headline */}
          {/* Giant Anton 3-Line Headline matching Reference Image */}
          <div className="relative my-4 sm:my-6 select-none text-left sm:text-center">
            <h1 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-[108px] xl:text-[120px] uppercase tracking-tight leading-[0.92] text-white">
              <span className="block">I DESIGN DIGITAL</span>
              <span className="block">EXPERIENCES THAT</span>
              <span className="block mt-1 sm:mt-2">
                MAKE <span className="text-card-lime">PRODUCTS</span> MATTER.
              </span>
            </h1>

            {/* Left Scalloped Badge overlay */}
            <div className="absolute -bottom-10 -left-4 sm:-bottom-14 sm:-left-8 z-20">
              <FlowerScallopBadge text={profile.completedProjects} />
            </div>
          </div>

          {/* Subtitle paragraph centered */}
          <div className="max-w-xl mx-auto text-left sm:text-center mt-8 mb-6">
            <p className="font-bricolage text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-normal">
              Software Engineering student at SMK Telkom Malang, Mobile App
              Developer, and UI/UX Designer crafting distinctive identities,
              intuitive applications, and digital experiences.
            </p>
          </div>

          {/* CTA Action Buttons centered */}
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-3 sm:gap-4 mt-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-card-lime text-brand-dark font-sans font-bold text-sm tracking-wide shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <span>View My Work</span>
              <span className="w-5 h-5 rounded-full bg-brand-dark text-card-lime flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-brand-dark text-white border border-white/20 font-sans font-bold text-sm tracking-wide hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <span>Let’s Work Together</span>
              <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            </Link>
          </div>

          {/* Centered pill inside box */}
          <div className="text-center mt-8 pt-2">
            <span className="inline-block px-5 py-2 rounded-full bg-brand-dark/40 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/80">
              • INDEPENDENT DEVELOPER — MALANG, ID — WORKING WORLDWIDE •
            </span>
          </div>
        </div>

        {/* Lower row outside the bounding box matching Image #1 */}
        <div className="flex items-center justify-between pb-6 -mt-2">
          <PenToolSquiggle />
          <div className="hidden sm:block">
            <ColorSwatchesPill />
          </div>
        </div>
      </div>

      {/* Convex wave curve transition into light section */}
      <WaveToLight />
    </section>
  );
}
