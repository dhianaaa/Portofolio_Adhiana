"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Github,
  Linkedin,
  Dribbble,
  Instagram,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WaveToLight, WaveToBlue } from "@/components/WaveDividers";
import { StatusPill, OrangeCircleBadge } from "@/components/StickerBadges";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactPage() {
  const { profile } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Mobile App Development",
    timeline: "1-2 Months",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-brand-blue text-white selection:bg-card-lime selection:text-brand-dark">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-card-lime animate-ping" />
          <span className="text-xs uppercase font-mono tracking-widest text-card-lime font-bold">
            Project Inquiry & Contact
          </span>
        </div>

        <h1 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-[104px] uppercase tracking-tight leading-[0.9] text-white">
          LET’S CREATE SOMETHING <span className="text-card-lime">WORTH REMEMBERING.</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-white/80 font-sans max-w-3xl leading-relaxed">
          Have an app idea, a design system challenge, or a collaborative initiative? Send a note and let’s talk.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <StatusPill text={profile.statusText} />
          <OrangeCircleBadge text="Q4 — 2026 Availability" />
        </div>
      </section>

      {/* Content Form & Info Grid on Light Surface */}
      <section className="relative bg-brand-light text-brand-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-dark/10 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold block mb-1">
                  Say Hello
                </span>
                <h3 className="font-anton text-3xl uppercase text-brand-dark">
                  Direct Inquiries
                </h3>
                <p className="text-sm font-sans text-brand-dark/70 mt-2">
                  Available for selective freelance projects, student incubations, and engineering internships worldwide.
                </p>
              </div>

              <div className="pt-4 space-y-4 border-t border-brand-dark/10">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-light hover:bg-brand-blue/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-brand-dark/50">
                      Email Address
                    </span>
                    <span className="font-sans font-bold text-sm sm:text-base text-brand-dark group-hover:text-brand-blue transition-colors">
                      {profile.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-light">
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-card-lime flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-brand-dark/50">
                      Based In
                    </span>
                    <span className="font-sans font-bold text-sm sm:text-base text-brand-dark">
                      {profile.location} · Remote Worldwide
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-brand-dark/10">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-dark/50 block mb-3 font-bold">
                  Connect on Socials
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-brand-light hover:bg-brand-dark hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-brand-light hover:bg-brand-blue hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.links.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-brand-light hover:bg-card-pink hover:text-brand-dark transition-colors"
                    aria-label="Dribbble"
                  >
                    <Dribbble className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-brand-light hover:bg-card-coral hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-brand-dark/10 shadow-lg">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-card-lime text-brand-dark flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-anton text-3xl uppercase text-brand-dark">
                    Message Dispatched!
                  </h3>
                  <p className="font-sans text-brand-dark/70 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. I will review your message and reply back to {formData.email} within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "Mobile App Development",
                        timeline: "1-2 Months",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-brand-blue text-white font-sans text-sm font-bold hover:bg-brand-dark transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold block mb-1">
                      Project Form
                    </span>
                    <h3 className="font-anton text-3xl uppercase text-brand-dark">
                      Tell Me About Your Vision
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-brand-dark/70 mb-1.5 font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-2xl bg-brand-light border border-brand-dark/10 text-brand-dark text-sm font-sans focus:outline-hidden focus:border-brand-blue transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-brand-dark/70 mb-1.5 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-brand-light border border-brand-dark/10 text-brand-dark text-sm font-sans focus:outline-hidden focus:border-brand-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-brand-dark/70 mb-1.5 font-bold">
                        Project Scope / Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-brand-light border border-brand-dark/10 text-brand-dark text-sm font-sans focus:outline-hidden focus:border-brand-blue transition-colors"
                      >
                        <option>Mobile App Development (Flutter)</option>
                        <option>UI/UX & Product Design (Figma)</option>
                        <option>Design System & Tokens</option>
                        <option>Frontend Engineering (Next.js)</option>
                        <option>Internship / Organization Collab</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-brand-dark/70 mb-1.5 font-bold">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-brand-light border border-brand-dark/10 text-brand-dark text-sm font-sans focus:outline-hidden focus:border-brand-blue transition-colors"
                      >
                        <option>Immediate / Urgent</option>
                        <option>1-2 Months</option>
                        <option>2-4 Months</option>
                        <option>Flexible / Exploratory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-dark/70 mb-1.5 font-bold">
                      Project Details & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe what you are looking to build, any key features, and what success looks like..."
                      className="w-full px-4 py-3 rounded-2xl bg-brand-light border border-brand-dark/10 text-brand-dark text-sm font-sans focus:outline-hidden focus:border-brand-blue transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-brand-blue text-white font-sans font-bold text-sm tracking-wide hover:bg-brand-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl cursor-pointer"
                  >
                    Send Project Inquiry
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="relative bg-brand-light">
        <WaveToBlue />
      </div>

      <Footer />
    </main>
  );
}
