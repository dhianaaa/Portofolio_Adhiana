"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  const tickerItems = [
    profile.preferredName.toUpperCase(),
    profile.preferredName.toUpperCase(),
    profile.preferredName.toUpperCase(),
    profile.preferredName.toUpperCase(),
    profile.preferredName.toUpperCase(),
    profile.preferredName.toUpperCase(),
  ];

  return (
    <footer className="relative bg-brand-light text-brand-dark pt-0 pb-12 select-none border-t border-brand-dark/10 overflow-hidden">
      {/* Massive Running Marquee Ticker Band matching Reference */}
      <div className="w-full py-8 sm:py-12 bg-brand-light overflow-hidden border-b border-brand-dark/10 select-none">
        <div className="flex w-fit whitespace-nowrap animate-marquee">
          {tickerItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 sm:gap-12 px-6 sm:px-8 font-anton text-7xl sm:text-9xl md:text-[140px] lg:text-[180px] tracking-tight text-brand-blue uppercase leading-none"
            >
              <span>{item}</span>
              <span className="text-4xl sm:text-6xl md:text-8xl opacity-80">
                {index % 2 === 0 ? "✱" : "✤"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Container matching Reference */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Left Column: Brand Name & Intro */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <Link
              href="/"
              className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-brand-dark leading-none hover:text-brand-blue transition-colors"
            >
              {profile.preferredName.toUpperCase()}
            </Link>
            <p className="font-bricolage text-base sm:text-lg text-brand-dark/75 max-w-md leading-relaxed font-normal">
              Software Engineering student at SMK Telkom Malang, Mobile App
              Developer &amp; UI/UX Designer creating distinctive identities and
              digital experiences.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="font-anton text-2xl sm:text-3xl text-brand-dark hover:text-brand-blue underline underline-offset-8 decoration-2 decoration-brand-dark/30 hover:decoration-brand-blue transition-colors tracking-wide"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Right Columns: 3 Navigation Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Explore Column */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-dark/50 font-bold mb-1">
                EXPLORE
              </span>
              <Link
                href="/work"
                className="font-bricolage text-sm text-brand-dark/80 hover:text-brand-blue transition-colors font-medium"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="font-bricolage text-sm text-brand-dark/80 hover:text-brand-blue transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="font-bricolage text-sm text-brand-dark/80 hover:text-brand-blue transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="font-bricolage text-sm text-brand-dark/80 hover:text-brand-blue transition-colors font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Social Column */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-dark/50 font-bold mb-1">
                SOCIAL
              </span>
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bricolage text-sm text-brand-dark/80 hover:text-brand-blue transition-colors font-medium inline-flex items-center gap-1"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.links.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bricolage text-sm text-brand-dark/80 hover:text-brand-blue transition-colors font-medium inline-flex items-center gap-1"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bricolage text-sm text-brand-dark/80 hover:text-brand-blue transition-colors font-medium inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bricolage text-sm text-brand-dark/80 hover:text-brand-blue transition-colors font-medium inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-dark/50 font-bold mb-1">
                CONTACT
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="font-bricolage text-sm text-brand-dark/80 hover:text-brand-blue transition-colors font-medium break-all"
              >
                {profile.email}
              </a>
              <span className="font-bricolage text-sm text-brand-dark/60 font-medium">
                Malang — Worldwide
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar matching Reference */}
        <div className="pt-16 sm:pt-20 mt-12 border-t border-brand-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-dark/60">
          <div>© 2026 {profile.fullName}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Designed &amp; crafted with intention.</span>
            <span>•</span>
            <span className="text-brand-blue font-bold">SMK Telkom Malang</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
