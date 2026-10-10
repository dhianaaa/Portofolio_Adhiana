"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8 flex justify-center"
      >
        <nav
          className={`w-full max-w-3xl flex items-center justify-between rounded-full px-6 py-2.5 transition-all duration-300 shadow-xl ${
            isScrolled
              ? "bg-brand-dark/95 backdrop-blur-xl border border-white/20 shadow-2xl"
              : "bg-brand-dark/80 backdrop-blur-xl border border-white/10"
          }`}
        >
          {/* Clean Anton Brand Logo */}
          <Link
            href="/"
            className="font-anton text-2xl tracking-wider uppercase text-white hover:text-card-lime transition-colors select-none"
          >
            {PORTFOLIO_DATA.profile.preferredName.toUpperCase()}
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/work" && pathname.startsWith("/work/"));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-bricolage text-sm transition-colors tracking-wide font-medium relative ${
                    isActive
                      ? "text-card-lime font-bold"
                      : "text-white/80 hover:text-card-lime"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-card-lime rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action: Clean White Pill */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white text-brand-dark font-sans font-bold text-xs hover:bg-card-lime hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              Let’s talk
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-card-lime" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden transition-all duration-300 animate-in fade-in"
        >
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-card-lime font-bold">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-anton text-4xl uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive ? "text-card-lime" : "text-white hover:text-card-lime"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-6 h-6 opacity-60" />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-card-lime text-brand-dark font-anton text-center text-xl uppercase tracking-wider shadow-lg"
            >
              Start a Project
            </Link>
            <span className="text-center font-mono text-xs text-white/50">
              Malang, ID · {PORTFOLIO_DATA.profile.email}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
