"use client";

import React from "react";
import { PlayfulStickerIcons } from "./StickerBadges";
import { WaveToBlue } from "./WaveDividers";

export default function Introduction() {
  return (
    <section className="relative pt-20 sm:pt-28 bg-brand-light text-brand-dark text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Category Label */}
        <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold mb-6">
          • INTRODUCTION
        </span>

        {/* Big Editorial Heading with Highlighter Block */}
        <h2 className="font-bricolage text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-dark leading-tight max-w-3xl mb-6">
          I turn ideas into{" "}
          <span className="inline-block px-3 py-0.5 rounded-xl bg-card-lime text-brand-dark transform -rotate-1 shadow-sm">
            products
          </span>{" "}
          people remember.
        </h2>

        {/* Subtitle description */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-brand-dark/75 leading-relaxed max-w-2xl mb-10">
          I work with founders, creative organizations, and engineering teams to
          transform ambitious ideas into clear, compelling, and beautifully
          crafted digital experiences.
        </p>

        {/* 5 Playful Squircle / Scallop Sticker Icons */}
        <PlayfulStickerIcons />
      </div>

      {/* Convex wave curve leading into Electric Blue section */}
      <div className="mt-16 sm:mt-24">
        <WaveToBlue />
      </div>
    </section>
  );
}
