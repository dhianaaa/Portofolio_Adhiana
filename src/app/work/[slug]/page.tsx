import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  User,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { WaveToBlue, WaveToLight } from "@/components/WaveDividers";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Dhiana Portfolio",
    };
  }

  return {
    title: `${project.title} — Case Study by Dhiana`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PORTFOLIO_DATA.projects[projectIndex];
  const nextProject =
    PORTFOLIO_DATA.projects[(projectIndex + 1) % PORTFOLIO_DATA.projects.length];

  return (
    <main className="min-h-screen flex flex-col bg-brand-blue text-white selection:bg-card-lime selection:text-brand-dark">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-card-lime transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to all projects
        </Link>

        {/* Project Meta Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
            style={{
              backgroundColor: project.accentBg,
              color: project.textColor,
            }}
          >
            {project.category}
          </span>
          <span className="text-white/60 font-mono text-xs">
            {project.year} · Case Study {project.number}
          </span>
        </div>

        {/* Title & Tagline */}
        <h1 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-[100px] uppercase tracking-tight leading-[0.9] text-white">
          {project.title}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-card-lime font-sans font-medium max-w-3xl leading-snug">
          {project.subtitle}
        </p>

        {/* Hero Showcase Image */}
        <div className="relative mt-12 w-full aspect-[16/9] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </section>

      {/* Quick Specs Bento Strip */}
      <section className="relative bg-brand-light text-brand-dark py-12 px-4 sm:px-6 lg:px-8 border-b border-brand-dark/10">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-brand-dark/50 mb-1">
              Client / Scope
            </span>
            <p className="font-sans font-bold text-sm sm:text-base text-brand-dark">
              {project.client}
            </p>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-brand-dark/50 mb-1">
              Role
            </span>
            <p className="font-sans font-bold text-sm sm:text-base text-brand-dark">
              {project.role}
            </p>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-brand-dark/50 mb-1">
              Timeline
            </span>
            <p className="font-sans font-bold text-sm sm:text-base text-brand-dark">
              {project.year}
            </p>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-brand-dark/50 mb-1">
              Repository & Code
            </span>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-sm text-brand-blue hover:underline"
              >
                View on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="font-sans font-bold text-sm text-brand-dark/60">
                Private Archive
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Case Study Narrative */}
      <section className="relative bg-brand-light text-brand-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full space-y-20">
          {/* Overview */}
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-brand-blue font-bold">
              01 · The Overview
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl uppercase mt-2 text-brand-dark">
              Project Context & Goals
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-dark/80 font-sans leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Approach Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-card-coral font-bold">
                  The Challenge
                </span>
                <h3 className="font-anton text-2xl uppercase mt-2 text-brand-dark">
                  What Needed Solving
                </h3>
                <p className="mt-4 text-sm sm:text-base text-brand-dark/80 font-sans leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-brand-dark text-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-card-lime font-bold">
                  The Approach
                </span>
                <h3 className="font-anton text-2xl uppercase mt-2 text-white">
                  Strategic Execution
                </h3>
                <p className="mt-4 text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-brand-blue font-bold">
              02 · Core Deliverables
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl uppercase mt-2 text-brand-dark mb-6">
              What Was Engineered & Shipped
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.deliverables.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-brand-dark/10 flex items-start gap-3.5 shadow-2xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="font-sans font-medium text-sm sm:text-base text-brand-dark">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Gallery Images */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-brand-blue font-bold">
                03 · Visual Showcase
              </span>
              <h2 className="font-anton text-3xl sm:text-4xl uppercase mt-2 text-brand-dark mb-6">
                Interface Previews
              </h2>
              <div className="space-y-6">
                {project.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-brand-dark/15 shadow-md"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${project.title} Preview ${i + 1}`}
                      fill
                      sizes="(max-width: 900px) 100vw, 900px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* The Outcome Box */}
          <div
            className="p-8 sm:p-12 rounded-3xl border-2"
            style={{
              backgroundColor: project.accentBg,
              borderColor: project.borderColor,
              color: project.textColor,
            }}
          >
            <span className="text-xs font-mono uppercase tracking-widest font-bold opacity-75">
              04 · The Outcome & Impact
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase mt-2 tracking-tight">
              Measurable Results
            </h2>
            <p className="mt-4 text-base sm:text-lg font-sans leading-relaxed opacity-90">
              {project.outcome}
            </p>
            <div className="mt-6 pt-6 border-t inline-block" style={{ borderColor: project.borderColor }}>
              <span className="text-xs uppercase font-mono tracking-wider opacity-75 block mb-1">
                Headline Metric:
              </span>
              <span className="font-anton text-2xl sm:text-3xl">
                {project.metrics}
              </span>
            </div>
          </div>

          {/* Next Project Teaser Navigation */}
          <div className="pt-12 border-t border-brand-dark/15">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-dark/50 block mb-3">
              Up Next
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 rounded-3xl bg-brand-dark text-white hover:bg-brand-slate transition-all duration-300"
            >
              <div>
                <span className="text-xs font-mono text-card-lime uppercase tracking-wider font-bold">
                  Next Case Study ({nextProject.number})
                </span>
                <h3 className="font-anton text-3xl sm:text-4xl uppercase mt-1 group-hover:text-card-lime transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-sm text-white/70 font-sans mt-1">
                  {nextProject.subtitle}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 w-12 h-12 rounded-full bg-card-lime text-brand-dark flex items-center justify-center transition-transform group-hover:translate-x-2">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Wave transition back to blue */}
      <div className="relative bg-brand-light">
        <WaveToBlue />
      </div>

      <ContactCTA />
      <Footer />
    </main>
  );
}
