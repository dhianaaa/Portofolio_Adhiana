"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { SmilingMascotSticker } from "./StickerBadges";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactCTA() {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-32 sm:py-44 px-4 sm:px-6 lg:px-8 bg-brand-blue text-white overflow-hidden text-center select-none"
    >
      {/* Concentric Thin White Orbital Rings matching Reference */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        <div className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full border border-white" />
        <div className="absolute w-[700px] h-[700px] sm:w-[950px] sm:h-[950px] rounded-full border border-white" />
        <div className="absolute w-[1000px] h-[1000px] sm:w-[1300px] sm:h-[1300px] rounded-full border border-white" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10 flex flex-col items-center">
        {/* Giant Anton Title */}
        <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-[100px] uppercase tracking-tight leading-[0.95] mb-6">
          <span className="block text-white">HAVE A GOOD IDEA?</span>
          <span className="block text-card-lime">LET’S MAKE IT GREAT.</span>
        </h2>

        {/* Subtitle */}
        <p className="font-bricolage text-base sm:text-xl md:text-2xl text-white/90 max-w-xl mb-10 font-normal">
          Let’s turn your next idea into something people remember.
        </p>

        {/* Center Pill Button matching Reference */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-card-lime text-brand-dark font-sans font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl hover:bg-white hover:scale-105 active:scale-95 transition-all"
          >
            <span>Start a Project</span>
            <span className="w-6 h-6 rounded-full bg-brand-dark text-card-lime flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
            </span>
          </Link>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-brand-dark/50 border border-white/20 text-white font-mono text-xs uppercase tracking-wider backdrop-blur-md hover:bg-brand-dark transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-card-lime" />
                <span className="text-card-lime font-bold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Bottom Right Mascot Sticker matching Reference */}
        <div className="absolute -bottom-16 right-4 sm:right-16 z-20">
          <SmilingMascotSticker />
        </div>
      </div>
    </section>
  );
}
