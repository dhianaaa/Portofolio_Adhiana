"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function MarqueeBanner({
  items,
  reverse = false,
  bgColor = "bg-brand-dark",
  textColor = "text-white",
  speed = "normal",
}: {
  items?: string[];
  reverse?: boolean;
  bgColor?: string;
  textColor?: string;
  speed?: "slow" | "normal" | "fast";
}) {
  const displayItems = items || PORTFOLIO_DATA.marqueePills;
  // Repeat items to fill marquee width seamlessly
  const repeated = [...displayItems, ...displayItems, ...displayItems, ...displayItems];

  return (
    <div
      className={`relative w-full py-4 overflow-hidden ${bgColor} ${textColor} border-y border-white/10 select-none`}
    >
      <div
        className={`flex w-fit whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
      >
        {repeated.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 px-6 font-anton text-xl sm:text-2xl md:text-3xl tracking-wider uppercase"
          >
            <span className="hover:text-card-lime transition-colors">
              {item}
            </span>
            <Sparkles className="w-4 h-4 text-card-lime fill-card-lime opacity-75 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
