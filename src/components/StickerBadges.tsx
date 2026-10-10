"use client";

import React from "react";
import { Sparkles, ArrowUpRight, Heart, BarChart3, Crown, Zap, MousePointer } from "lucide-react";

export function PinkStarburstBadge({
  text = "03+ years",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 text-brand-dark select-none hover:scale-105 transition-transform ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-card-pink drop-shadow-sm animate-spinSlow"
      >
        <path d="M50 0 L58 20 L78 10 L75 32 L96 35 L82 50 L96 65 L75 68 L78 90 L58 80 L50 100 L42 80 L22 90 L25 68 L4 65 L18 50 L4 35 L25 32 L22 10 L42 20 Z" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-center leading-tight pointer-events-none">
        <span className="text-xs sm:text-sm font-anton uppercase tracking-wide text-brand-dark px-1">
          {text}
        </span>
      </div>
    </div>
  );
}

export function FlowerScallopBadge({
  text = "25+ projects",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 text-brand-dark select-none hover:scale-105 transition-transform ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-white drop-shadow-md"
      >
        <path d="M50,10 C56,10 60,14 63,18 C67,14 73,15 77,19 C81,23 82,29 78,33 C82,36 86,40 86,46 C86,52 82,56 78,59 C82,63 81,69 77,73 C73,77 67,78 63,74 C60,78 56,82 50,82 C44,82 40,78 37,74 C33,78 27,77 23,73 C19,69 18,63 22,59 C18,56 14,52 14,46 C14,40 18,36 22,33 C18,29 19,23 23,19 C27,15 33,14 37,18 C40,14 44,10 50,10 Z" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-center leading-tight pointer-events-none">
        <span className="text-[11px] sm:text-xs font-anton uppercase tracking-wider text-brand-dark px-2">
          {text}
        </span>
      </div>
    </div>
  );
}

export function FigmaLabelTag({
  text = "Hero 1092 × 540",
  user = "Dhiana",
  className = "",
}: {
  text?: string;
  user?: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-flex flex-col items-start select-none ${className}`}>
      {/* Pink Figma Cursor with User Tag */}
      <div className="flex items-center gap-1 mb-0.5 -ml-1">
        <svg className="w-3.5 h-3.5 fill-[#FF7BCA] text-[#FF7BCA] drop-shadow-sm" viewBox="0 0 24 24">
          <path d="M3 3l7 18 3-7 7-3L3 3z" />
        </svg>
        <span className="px-1.5 py-0.5 bg-[#FF7BCA] text-brand-dark rounded text-[9px] font-mono font-bold leading-none">
          {user}
        </span>
      </div>
      {/* Lime Dimension Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-card-lime text-brand-dark rounded-md text-[11px] font-mono font-bold shadow-md">
        <span>{text}</span>
      </div>
    </div>
  );
}

export function StatusPill({
  text = "Open for projects",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 bg-card-lime text-brand-dark rounded-full text-xs font-sans font-bold shadow-sm select-none hover:scale-105 transition-transform ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-brand-dark animate-pulse" />
      <span>{text}</span>
    </div>
  );
}

export function OrangeCircleBadge({
  text = "Malang based",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-card-coral text-white text-[11px] sm:text-xs font-anton uppercase text-center leading-tight shadow-md select-none hover:rotate-6 transition-transform ${className}`}
    >
      <span>{text}</span>
    </div>
  );
}

export function PenToolSquiggle() {
  return (
    <div className="relative w-48 sm:w-64 h-16 pointer-events-none select-none">
      <svg
        viewBox="0 0 240 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="8" cy="48" r="4" fill="white" />
        <path
          d="M8 48 C 60 48, 80 12, 140 32 C 180 44, 190 20, 220 24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        {/* Pen tool nib */}
        <g transform="translate(216, 12)">
          <path
            d="M0 12 L12 0 L16 4 L4 16 Z"
            fill="#BFFF0A"
            stroke="#17143A"
            strokeWidth="1.5"
          />
          <circle cx="14" cy="2" r="2" fill="#17143A" />
        </g>
      </svg>
    </div>
  );
}

export function ColorSwatchesPill() {
  return (
    <div className="inline-flex items-center gap-2 p-1.5 px-2.5 rounded-full bg-brand-dark/90 border border-white/20 backdrop-blur-md shadow-lg select-none">
      <div className="flex items-center gap-1.5">
        <span className="w-3.5 h-3.5 rounded-full bg-card-pink" />
        <span className="w-3.5 h-3.5 rounded-full bg-card-lime" />
        <span className="w-3.5 h-3.5 rounded-full bg-card-cyan" />
        <span className="w-3.5 h-3.5 rounded-full bg-white" />
      </div>
      <div className="w-4 h-4 rounded bg-brand-dark text-white flex items-center justify-center text-[10px] font-mono border border-white/20">
        T
      </div>
    </div>
  );
}

export function PlayfulStickerIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-8 pb-4">
      {/* 1. Pink squircle with cursor */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-card-pink text-brand-dark flex items-center justify-center shadow-lg hover:rotate-6 hover:scale-110 transition-all cursor-pointer">
        <MousePointer className="w-8 h-8 fill-brand-dark" />
      </div>

      {/* 2. Lime squircle with heart */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-card-lime text-brand-dark flex items-center justify-center shadow-lg hover:-rotate-6 hover:scale-110 transition-all cursor-pointer">
        <Heart className="w-8 h-8 fill-brand-dark" />
      </div>

      {/* 3. Coral squircle with bar chart */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-card-coral text-brand-dark flex items-center justify-center shadow-lg hover:rotate-6 hover:scale-110 transition-all cursor-pointer">
        <BarChart3 className="w-8 h-8 stroke-[2.5]" />
      </div>

      {/* 4. Cyan scallop flower with crown */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center hover:-rotate-6 hover:scale-110 transition-all cursor-pointer">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-card-cyan drop-shadow-md">
          <path d="M50,10 C56,10 60,14 63,18 C67,14 73,15 77,19 C81,23 82,29 78,33 C82,36 86,40 86,46 C86,52 82,56 78,59 C82,63 81,69 77,73 C73,77 67,78 63,74 C60,78 56,82 50,82 C44,82 40,78 37,74 C33,78 27,77 23,73 C19,69 18,63 22,59 C18,56 14,52 14,46 C14,40 18,36 22,33 C18,29 19,23 23,19 C27,15 33,14 37,18 C40,14 44,10 50,10 Z" />
        </svg>
        <Crown className="w-7 h-7 text-brand-dark fill-brand-dark absolute" />
      </div>

      {/* 5. Yellow starburst with lightning bolt */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center hover:rotate-12 hover:scale-110 transition-all cursor-pointer">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-card-yellow drop-shadow-md">
          <path d="M50 0 L58 20 L78 10 L75 32 L96 35 L82 50 L96 65 L75 68 L78 90 L58 80 L50 100 L42 80 L22 90 L25 68 L4 65 L18 50 L4 35 L25 32 L22 10 L42 20 Z" />
        </svg>
        <Zap className="w-7 h-7 text-brand-dark fill-brand-dark absolute" />
      </div>
    </div>
  );
}

export function SmilingMascotSticker() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-card-coral text-brand-dark flex flex-col items-center justify-center shadow-xl rotate-12 hover:rotate-0 hover:scale-110 transition-all select-none">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2 h-2 rounded-full bg-brand-dark" />
        <span className="w-2 h-2 rounded-full bg-brand-dark" />
      </div>
      <div className="w-5 h-2 rounded-b-full bg-brand-dark" />
    </div>
  );
}
