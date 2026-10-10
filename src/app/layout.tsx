import type { Metadata } from "next";
import { Anton, Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adhiana Alika Apriantina — Mobile App Developer & UI/UX Designer",
  description:
    "Portfolio of Adhiana Alika Apriantina (Dhiana) — Software Engineering student at SMK Telkom Malang, Mobile App Developer, and UI/UX Designer crafting distinctive digital products.",
  keywords: [
    "Adhiana Alika Apriantina",
    "Dhiana",
    "SMK Telkom Malang",
    "Media Moklet",
    "Mobile Developer",
    "Flutter",
    "UI/UX Designer",
    "Frontend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Adhiana Alika Apriantina" }],
  openGraph: {
    title: "Adhiana Alika Apriantina — Mobile App Developer & UI/UX Designer",
    description:
      "Crafting distinctive mobile apps and intuitive digital interfaces where aesthetic precision meets resilient engineering.",
    type: "website",
    locale: "id_ID",
    siteName: "Dhiana Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${anton.variable} ${bricolage.variable} ${jakarta.variable} font-sans antialiased bg-brand-blue selection:bg-card-lime selection:text-brand-dark min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
