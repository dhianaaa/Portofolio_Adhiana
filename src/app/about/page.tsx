import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, CheckCircle2, HeartHandshake, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { WaveToLight, WaveToBlue } from "@/components/WaveDividers";
import {
  PinkStarburstBadge,
  FlowerScallopBadge,
  OrangeCircleBadge,
  StatusPill,
} from "@/components/StickerBadges";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "About — Adhiana Alika Apriantina",
  description:
    "Learn more about Dhiana, a Software Engineering student at SMK Telkom Malang specializing in Mobile App Development and UI/UX Design.",
};

export default function AboutPage() {
  const { profile, stats, experiences, principles, skills } = PORTFOLIO_DATA;

  return (
    <main className="min-h-screen flex flex-col bg-brand-blue text-white selection:bg-card-lime selection:text-brand-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-card-lime animate-ping" />
          <span className="text-xs uppercase font-mono tracking-widest text-card-lime font-bold">
            Profile & Philosophy
          </span>
        </div>

        <h1 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-[104px] uppercase tracking-tight leading-[0.9] text-white">
          GREAT DESIGN SHOULD <span className="text-card-lime">FEEL OBVIOUS.</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-white/80 font-sans max-w-3xl leading-relaxed">
          Not because it is simple, but because every engineering and design decision has an intentional reason.
        </p>

        {/* Status Pill & Location */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <StatusPill text={profile.statusText} />
          <OrangeCircleBadge text={profile.location} />
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="relative bg-brand-light text-brand-dark py-12 px-4 sm:px-6 lg:px-8 border-b border-brand-dark/10">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-brand-dark/10 shadow-2xs">
              <span className="font-anton text-4xl sm:text-5xl text-brand-blue block">
                {s.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-brand-dark/60 mt-1 block">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* In-depth Narrative & Portrait Grid */}
      <section className="relative bg-brand-light text-brand-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Photo & Badges Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-brand-dark shadow-2xl bg-brand-slate">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Dhiana Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Accent Badges */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-10">
                <FlowerScallopBadge text={profile.completedProjects} />
              </div>
              <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 z-10">
                <PinkStarburstBadge text={profile.experienceYears} />
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-brand-blue font-bold">
                About Dhiana
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl uppercase text-brand-dark leading-tight">
                Crafting interfaces where aesthetic precision meets resilient engineering.
              </h2>
              <p className="text-base sm:text-lg text-brand-dark/80 font-sans leading-relaxed">
                {profile.aboutBio1}
              </p>
              <p className="text-base sm:text-lg text-brand-dark/80 font-sans leading-relaxed">
                {profile.aboutBio2}
              </p>
              <p className="text-base sm:text-lg text-brand-dark/80 font-sans leading-relaxed">
                Beyond writing Flutter widgets and organizing Figma tokens, I believe in empowering peers. My leadership as Secretary at Media Moklet ensures our creative pipelines run smoothly, bridging design, editorial storytelling, and tech.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-brand-blue text-white font-sans font-bold text-sm hover:bg-brand-dark transition-colors inline-flex items-center gap-2"
                >
                  Start a Collaboration
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="px-6 py-3 rounded-full bg-white border border-brand-dark/20 text-brand-dark font-sans font-bold text-sm hover:bg-brand-dark/5 transition-colors"
                >
                  View My Work
                </Link>
              </div>
            </div>
          </div>

          {/* Principles Section matching Varen */}
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-brand-blue font-bold block mb-2">
              How I Work & Think
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl uppercase text-brand-dark mb-8">
              Guiding Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {principles.map((pr) => (
                <div
                  key={pr.number}
                  className="p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-brand-light text-brand-blue inline-block mb-4">
                      {pr.number}
                    </span>
                    <h3 className="font-anton text-2xl uppercase text-brand-dark">
                      {pr.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-brand-dark/80 font-sans leading-relaxed">
                      {pr.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-brand-blue font-bold block mb-2">
              Track Record
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl uppercase text-brand-dark mb-8">
              The Journey So Far
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  <div className="md:w-1/3">
                    <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-mono text-xs font-bold">
                      {exp.period}
                    </span>
                    <span className="block text-xs font-mono text-brand-dark/50 uppercase mt-2">
                      {exp.type}
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-brand-dark mt-1">
                      {exp.organization}
                    </h3>
                  </div>

                  <div className="md:w-2/3">
                    <h4 className="font-anton text-xl uppercase text-brand-blue mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-sans text-brand-dark/80 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm font-sans text-brand-dark/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-dark text-white">
            <span className="text-xs uppercase font-mono tracking-widest text-card-lime font-bold block mb-2">
              Toolkit & Core Stack
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl uppercase text-white mb-6">
              Technologies & Competencies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-card-cyan font-bold mb-3">
                  Mobile Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.mobile.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-card-lime font-bold mb-3">
                  UI/UX & Product Design
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-card-pink font-bold mb-3">
                  Frontend & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.concat(skills.tools).map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="relative bg-brand-light">
        <WaveToBlue />
      </div>

      <ContactCTA />
      <Footer />
    </main>
  );
}
