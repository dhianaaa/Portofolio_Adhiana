import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Check, Smartphone, Palette, Code, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { WaveToLight, WaveToBlue } from "@/components/WaveDividers";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Services & Capabilities — Adhiana Alika Apriantina",
  description:
    "Mobile app development, UI/UX design, frontend engineering, and design systems services by Dhiana.",
};

export default function ServicesPage() {
  const { expertise, processSteps } = PORTFOLIO_DATA;

  const serviceIcons = [Smartphone, Palette, Code, Layers, Sparkles, Layers];

  return (
    <main className="min-h-screen flex flex-col bg-brand-blue text-white selection:bg-card-lime selection:text-brand-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-card-lime animate-ping" />
          <span className="text-xs uppercase font-mono tracking-widest text-card-lime font-bold">
            Services & Expertise
          </span>
        </div>

        <h1 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-[104px] uppercase tracking-tight leading-[0.9] text-white">
          FROM FIRST CONCEPT <span className="text-card-lime">TO FINAL APP.</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-white/80 font-sans max-w-3xl leading-relaxed">
          I help ambitious teams and student organizations engineer mobile apps and digital interfaces that are fast, intuitive, and impossible to ignore.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-full bg-card-lime text-brand-dark font-sans font-bold text-sm hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2"
          >
            Start a Project Inquiry
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work"
            className="px-6 py-3.5 rounded-full bg-white/10 text-white font-sans font-bold text-sm hover:bg-white/20 transition-all border border-white/20"
          >
            Explore Case Studies
          </Link>
        </div>
      </section>

      {/* Services Grid on Light Surface */}
      <section className="relative bg-brand-light text-brand-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full space-y-20">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-brand-blue font-bold block mb-2">
              Capabilities
            </span>
            <h2 className="font-anton text-4xl sm:text-6xl uppercase text-brand-dark mb-4">
              What I Offer
            </h2>
            <p className="text-lg text-brand-dark/70 font-sans max-w-2xl">
              End-to-end capabilities spanning initial user research, high-fidelity UI design, production-ready mobile apps, and robust design systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {expertise.map((item, i) => {
                const IconComponent = serviceIcons[i % serviceIcons.length];
                return (
                  <div
                    key={item.number}
                    className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-dark/10 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-sm font-bold px-3.5 py-1 rounded-full bg-brand-light text-brand-blue">
                          {item.number}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="font-anton text-3xl uppercase text-brand-dark mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-brand-dark/80 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-brand-dark/10">
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-dark/50 block mb-2 font-bold">
                        Technologies & Focus:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-brand-light text-brand-dark text-xs font-mono font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Section ("Discover → Define → Design → Deliver") */}
          <div className="p-8 sm:p-14 rounded-3xl bg-brand-dark text-white">
            <span className="text-xs uppercase font-mono tracking-widest text-card-lime font-bold block mb-2">
              Methodology
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl uppercase text-white mb-4">
              Discover → Define → Design → Deliver
            </h2>
            <p className="text-white/70 font-sans max-w-2xl mb-12">
              A structured, repeatable workflow that eliminates ambiguity, aligns engineering with design, and ships with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-anton text-3xl text-card-lime block mb-2">
                      {step.number}
                    </span>
                    <h3 className="font-anton text-2xl uppercase text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
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
