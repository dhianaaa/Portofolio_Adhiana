export interface Project {
  id: string;
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  outcome: string;
  tech: string[];
  link: string;
  githubUrl?: string;
  accentBg: string;
  textColor: string;
  borderColor: string;
  tagColor: string;
  buttonBg: string;
  buttonText: string;
  image: string;
  gallery: string[];
  year: string;
  client: string;
  role: string;
  metrics: string;
  featured: boolean;
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  type: string;
  description: string;
  achievements: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Adhiana Alika Apriantina",
    preferredName: "Dhiana",
    title: "Mobile Developer, Quality Engineer, & UI/UX Designer",
    tagline:
      "Interested in mobile development, UI/UX design, and graphic design with a focus on creating simple, useful, and visually appealing digital products.",
    heroHeadline:
      "I CRAFT DIGITAL EXPERIENCES THAT MAKE PRODUCTS MATTER.",
    manifesto:
      "Interested in mobile development, UI/UX design, and graphic design with a focus on creating simple, useful, and visually appealing digital products.",
    aboutHeading:
      "A CREATIVE TECHNOLOGIST AT THE INTERSECTION OF MOBILE APPS, UI/UX DESIGN, AND QUALITY ENGINEERING.",
    aboutBio1:
      "I am a Software Engineering student at SMK Telkom Malang with deep passion for mobile applications and product design. My approach fuses rigorous engineering discipline with high aesthetic standards—transforming early wireframes into production-ready Flutter and web apps.",
    aboutBio2:
      "Active as UI Designer for Web Perpustakaan and Web METIC, I build responsive, interactive interfaces, conduct usability testing, and manage end-to-end design systems that bridge visual craft and engineering.",
    location: "Malang, Jawa Timur",
    statusText: "Open for projects & collaborations",
    experienceYears: "03+ Years",
    completedProjects: "15+ Projects",
    coreSpecialty: "Mobile + UI/UX & Web",
    email: "apriantinadhiana@gmail.com",
    phone: "+62 8124 6334 803",
    links: {
      github: "https://github.com/dhianaaa",
      linkedin: "https://www.linkedin.com/in/adhiana-alika-9baaa72aa",
      dribbble: "https://dribbble.com/adhianaalika",
      instagram: "https://www.instagram.com/_dhriaen",
    },
  },

  skills: {
    mobile: ["Flutter", "Dart", "React Native", "Android Studio", "Firebase"],
    design: [
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "Wireframing",
      "Prototyping",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML5 / CSS3",
    ],
    tools: ["Git & GitHub", "REST APIs", "Postman", "Vercel", "Notion", "Linear"],
  },

  stats: [
    { label: "Experience", value: "03+ YRS" },
    { label: "Projects Completed", value: "25+" },
    { label: "Organizations", value: "02 ACTIVE" },
    { label: "Community Reach", value: "3,000+" },
  ],

  projects: [
    {
      id: "media-moklet",
      slug: "media-moklet",
      number: "01",
      category: "Digital Media · Editorial Portal",
      title: "MEDIA MOKLET",
      subtitle: "Official Student News & Editorial Portal",
      description:
        "Comprehensive news platform and editorial CMS for SMK Telkom Malang's student journalism hub. Features rich article layouts, categorized bulletin boards, and seamless content workflows for student journalists.",
      overview:
        "Media Moklet is the premier student journalism and creative publication body at SMK Telkom Malang. They needed a modern digital home that could handle daily campus bulletins, photo essays, student achievements, and podcast highlights with the speed and polish of a mainstream editorial platform.",
      challenge:
        "The legacy publication channel was fragmented across scattered social media feeds and static PDFs, making archived articles difficult to search and giving student journalists no centralized editorial dashboard to manage draft reviews and publishing approvals.",
      approach:
        "Designed and engineered an editorial web application utilizing a clean typographic grid, modular article blocks, category-driven tags, and a streamlined CMS. Optimized for sub-second mobile page loads and accessibility.",
      deliverables: [
        "Editorial Platform Architecture",
        "UI/UX Design & High-Fidelity Prototype",
        "Responsive Frontend with Next.js & Tailwind CSS",
        "Article Reading Mode & Dark/Light System",
        "Social Media Preview Card Generator",
      ],
      outcome:
        "Launched to a student body of 1,800+ and regional alumni, achieving over 3,000 monthly active readers, 99.8% uptime, and empowering 30+ student journalists to publish stories seamlessly without engineering assistance.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      link: "https://github.com/adhianaalika/media-moklet-portal",
      githubUrl: "https://github.com/adhianaalika/media-moklet-portal",
      accentBg: "#BFFF0A", // Neon lime from Varen
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#BFFF0A",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80",
      ],
      year: "2024",
      client: "Media Moklet (SMK Telkom Malang)",
      role: "Lead UI Designer & Frontend Engineer",
      metrics: "3,000+ Readers / Month · 99.8% Uptime",
      featured: true,
    },
    {
      id: "pustel-mobile",
      slug: "pustel-mobile",
      number: "02",
      category: "Mobile Application · Smart Campus",
      title: "PUSTEL MOBILE",
      subtitle: "Smart Library & Seat Reservation Companion",
      description:
        "A mobile application built for Perpustakaan SMK Telkom Malang. Enables rapid barcode scanning for book checkouts, digital library cards, real-time study cubicle availability, and automated loan reminders.",
      overview:
        "Perpustakaan SMK Telkom Malang sought to replace manual physical borrowing logs with an intuitive mobile companion app for iOS and Android, allowing students to browse the campus catalog and track due dates directly from their smartphones.",
      challenge:
        "Physical checkout lines caused congestion during 15-minute recess breaks. Additionally, students frequently incurred book return overdue notices simply because there was no proactive reminder mechanism.",
      approach:
        "Architected a cross-platform Flutter application featuring instant barcode/QR scanning, offline-first digital library member cards, push notifications for loan renewals, and a live visual floor plan of available reading tables.",
      deliverables: [
        "Flutter Cross-Platform Mobile Architecture",
        "Figma Mobile UI/UX Flow & Interactive Prototype",
        "Barcode & QR Camera Scanner Integration",
        "Automated Push Notification Reminder Engine",
        "Live Library Seat & Room Availability Matrix",
      ],
      outcome:
        "Adopted by over 1,500 active students, reducing average borrowing queue times by 40% and cutting overdue return occurrences by more than half within the first semester of launch.",
      tech: ["Flutter", "Dart", "Firebase", "Figma", "REST API"],
      link: "https://github.com/adhianaalika/pustel-mobile-app",
      githubUrl: "https://github.com/adhianaalika/pustel-mobile-app",
      accentBg: "#5546FF", // Electric ultramarine
      textColor: "#FFFFFF",
      borderColor: "rgba(255, 255, 255, 0.25)",
      tagColor: "rgba(255, 255, 255, 0.16)",
      buttonBg: "#FFFFFF",
      buttonText: "#5546FF",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
      ],
      year: "2024",
      client: "Perpustakaan SMK Telkom Malang",
      role: "Mobile App Developer & UI Designer",
      metrics: "1,500+ Active Students · 40% Faster Checkout",
      featured: true,
    },
    {
      id: "metic-design-system",
      slug: "metic-design-system",
      number: "03",
      category: "Design System · UI Library",
      title: "METIC UI KIT",
      subtitle: "Multi-Brand Design Tokens & Figma Components",
      description:
        "An interconnected design system created for Metic Moklet graphic and software teams. Provides typography scales, accessible color contrast pairings, interactive Figma components, and mirrored Tailwind presets.",
      overview:
        "Metic Moklet manages diverse school software incubations, creative campaigns, and student hackathon entries. As project teams grew, visual inconsistency and redundant Figma components slowed down both designers and frontend builders.",
      challenge:
        "Designers were reinventing basic buttons, typography scales, and modal dialogs on every new project, resulting in disjointed user interfaces and extended handoff friction between design and engineering.",
      approach:
        "Established an atomic design system with comprehensive tokens for color contrast (WCAG AAA), responsive typography scales, tactile motion primitives, and auto-layout Figma components mirrored directly into Tailwind CSS configuration classes.",
      deliverables: [
        "Cross-Discipline Design Token Architecture",
        "60+ Modular Auto-Layout Figma Components",
        "Tailwind CSS Theme Presets & Color Mapping",
        "Interactive Documentation & Storybook Library",
        "Accessible Color Contrast Guidelines",
      ],
      outcome:
        "Adopted across 12 independent student projects, accelerating UI handoff velocity by 2.5x and maintaining consistent branding across student organization media channels.",
      tech: ["Figma", "Design Tokens", "React", "Tailwind CSS", "Storybook"],
      link: "https://github.com/adhianaalika/metic-design-system",
      githubUrl: "https://github.com/adhianaalika/metic-design-system",
      accentBg: "#7FE3FF", // Sky cyan
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#7FE3FF",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
      ],
      year: "2024",
      client: "Metic Moklet Creative Division",
      role: "Design Systems Architect",
      metrics: "60+ Reusable Components · 12 Project Adoptions",
      featured: true,
    },
    {
      id: "ecotrack-mobile",
      slug: "ecotrack-mobile",
      number: "04",
      category: "Green Tech · Gamified Prototype",
      title: "ECOTRACK APP",
      subtitle: "Smart Waste Sorting & Eco-Reward Platform",
      description:
        "Community environmental app rewarding responsible waste classification. Users log recyclables, track carbon offset impact, and redeem loyalty points at certified local recycling cooperatives.",
      overview:
        "EcoTrack is a youth sustainability concept created for regional tech competitions, aimed at incentivizing high school students and neighborhood communities to separate recyclables accurately through gamified rewards.",
      challenge:
        "Traditional recycling drives suffered from low participation and incorrect waste sorting because users found classification guidelines confusing and received no immediate feedback or tangible motivation.",
      approach:
        "Designed an engaging, vibrant mobile interface with gamified streaks, an interactive camera sorting assistant, and instant carbon-saving metrics paired with a local eco-merchant reward redemption wallet.",
      deliverables: [
        "User Research & Youth Journey Mapping",
        "Interactive High-Fidelity Mobile App Prototype",
        "Gamification & Carbon Footprint Calculation Logic",
        "Eco-Merchant Map & Location Discovery UI",
        "Flutter Production Prototype",
      ],
      outcome:
        "Selected in the Top 5 of Regional Youth Innovation Tech Challenge 2024, tested with 250+ beta participants who logged over 1,200 kg of sorted recyclable materials.",
      tech: ["Flutter", "Dart", "Node.js", "Express", "Google Maps API"],
      link: "https://github.com/adhianaalika/ecotrack-mobile",
      githubUrl: "https://github.com/adhianaalika/ecotrack-mobile",
      accentBg: "#FF7BCA", // Vibrant pink
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#FF7BCA",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?auto=format&fit=crop&w=1200&q=80",
      ],
      year: "2024",
      client: "Youth Tech Challenge Innovation Entry",
      role: "Lead Mobile Developer & Product Designer",
      metrics: "Top 5 Youth Tech Challenge · 250+ Beta Testers",
      featured: true,
    },
    {
      id: "edukarsa-vocational",
      slug: "edukarsa-vocational",
      number: "05",
      category: "EdTech · Student Collaboration",
      title: "EDUKARSA",
      subtitle: "Micro-learning Hub for Vocational Engineers",
      description:
        "Interactive mobile workspace specifically crafted for vocational engineering cohorts. Combines bite-sized coding exercises, peer code review feeds, and real-time project milestone tracking.",
      overview:
        "Vocational students learning programming require hands-on, contextual learning modules aligned directly with industrial standards rather than generic theoretical tutorials.",
      challenge:
        "Students often felt overwhelmed by sprawling desktop IDEs during preliminary concept learning. They needed a lightweight, portable way to practice core syntax and review peer code pull requests from anywhere.",
      approach:
        "Engineered a mobile-first collaborative learning app in React Native with Supabase, featuring bite-sized interactive quizzes, peer commenting threads, syntax highlighting, and progress streak tracking.",
      deliverables: [
        "Mobile-First UI/UX & Interaction Design",
        "React Native & Expo Cross-Platform App",
        "Real-Time Supabase Peer Commenting System",
        "Syntax-Highlighted Mobile Code Viewer",
        "Student Progress & Streak Dashboard",
      ],
      outcome:
        "Achieved a 94% course module completion rate across pilot classes and reduced peer code review turnaround time to under 2 hours.",
      tech: ["React Native", "TypeScript", "Tailwind", "Supabase", "Expo"],
      link: "https://github.com/adhianaalika/edukarsa-app",
      githubUrl: "https://github.com/adhianaalika/edukarsa-app",
      accentBg: "#FF5A3C", // Vivid coral red
      textColor: "#FFFFFF",
      borderColor: "rgba(255, 255, 255, 0.25)",
      tagColor: "rgba(255, 255, 255, 0.16)",
      buttonBg: "#FFFFFF",
      buttonText: "#FF5A3C",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      ],
      year: "2023",
      client: "SMK Telkom Malang Coding Club",
      role: "Fullstack Mobile Developer & UI Designer",
      metrics: "94% Student Retention · Real-time Sync",
      featured: true,
    },
    {
      id: "malang-batik-ar",
      slug: "malang-batik-ar",
      number: "06",
      category: "Creative Tech · Cultural AR",
      title: "BATIK MALANG AR",
      subtitle: "Augmented Reality Cultural Exhibition",
      description:
        "Immersive interactive exhibition app that scans Malang batik motifs and brings their historical narratives to life through 3D AR projection and spatial audio storytelling.",
      overview:
        "To preserve and celebrate Malang's rich traditional batik heritage, this project bridges centuries-old textile craftsmanship with cutting-edge mobile augmented reality.",
      challenge:
        "Younger generations often view traditional batik as static museum artifacts without understanding the profound philosophical symbols behind motifs like Bunga Teratai or Celaket.",
      approach:
        "Created an AR experience using Unity and AR Foundation where visitors point their mobile camera at textile markers to reveal 3D floating motif breakdowns, artisan interviews, and interactive cultural timelines.",
      deliverables: [
        "3D Asset Modeling & Texture Optimization in Blender",
        "Unity AR Foundation Marker Tracking Engine",
        "Mobile Exhibition Companion UI in Figma",
        "Spatial Audio Soundscapes & Voiceover Narration",
        "Exhibition Display Guidelines & Promotional Poster",
      ],
      outcome:
        "Exhibited at the Regional High School Tech Summit 2025, engaging over 800 live visitors with an average session duration of 4.5 minutes per exhibit stand.",
      tech: ["Unity", "C#", "Blender", "Figma", "AR Foundation"],
      link: "https://github.com/adhianaalika/malang-batik-ar",
      githubUrl: "https://github.com/adhianaalika/malang-batik-ar",
      accentBg: "#FFD426", // Warm bright yellow
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#FFD426",
      image:
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1200&q=80",
      ],
      year: "2023",
      client: "SMK Telkom Malang Creative Showcase",
      role: "AR Developer & Experience Designer",
      metrics: "Exhibited at Regional Tech Summit 2025",
      featured: true,
    },
  ] as Project[],

  principles: [
    {
      number: "01",
      title: "Clarity over noise",
      description:
        "Every element, pixel, and user interaction must serve a distinct purpose. Removing unnecessary decorative clutter allows the core product utility to shine effortlessly.",
    },
    {
      number: "02",
      title: "Engineering meets empathy",
      description:
        "Clean code and robust architectures are meaningless if the experience feels cold. I craft mobile interfaces that feel human, accessible, and tactile.",
    },
    {
      number: "03",
      title: "Details define quality",
      description:
        "Micro-interactions, typographic rhythm, haptic cues, and graceful edge-case handling are what transform a good interface into an unforgettable digital product.",
    },
    {
      number: "04",
      title: "Built to scale & evolve",
      description:
        "From atomic token systems to modular Flutter state architectures, solutions must be clean, maintainable, and designed to grow with changing organizational needs.",
    },
  ] as PrincipleItem[],

  processSteps: [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand the underlying problem, target audience behaviors, organizational goals, and technical boundaries through research and requirements mapping.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "Distill discoveries into a focused strategy, user stories, wireframe blueprints, and technical architecture with transparent project scope.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Craft high-fidelity screens, interactive Figma prototypes, accessible design tokens, and smooth motion curves that bring the vision to life.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "Build production-ready code with Flutter or Next.js, rigorously test across real device viewports, and ship with clean documentation.",
    },
  ] as ProcessStep[],

  expertise: [
    {
      number: "01",
      title: "Mobile App Development",
      description:
        "Building fluid, high-performance cross-platform mobile apps using Flutter and React Native with responsive layouts and scalable state architectures.",
      tags: ["Flutter", "Dart", "React Native", "Firebase", "State Management"],
    },
    {
      number: "02",
      title: "UI/UX & Product Design",
      description:
        "Conducting user journey mapping, wireframing, and crafting high-fidelity design systems with micro-interactions and thorough usability testing.",
      tags: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Ops"],
    },
    {
      number: "03",
      title: "Frontend Engineering",
      description:
        "Developing accessible, ultra-responsive web applications using Next.js, React, TypeScript, and modern utility-first CSS frameworks.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "App Router"],
    },
    {
      number: "04",
      title: "Design Systems & Tokens",
      description:
        "Bridging design and engineering with unified token architectures, atomic component libraries, and documentation that eliminates design debt.",
      tags: ["Design Tokens", "Storybook", "Atomic Design", "Accessibility (a11y)"],
    },
    {
      number: "05",
      title: "Brand & Graphic Direction",
      description:
        "Crafting memorable visual identities, promotional assets, editorial publication layouts, and social media media kits for modern creative teams.",
      tags: ["Adobe Illustrator", "Editorial Layout", "Typography", "Visual Identity"],
    },
    {
      number: "06",
      title: "Organizational Leadership",
      description:
        "Leading cross-functional creative initiatives, administering communications as Secretary at Media Moklet, and ensuring smooth project milestones.",
      tags: ["Documentation", "Project Management", "Agile Collaboration", "Team Ops"],
    },
  ] as ExpertiseItem[],

  experiences: [
    {
      period: "2024 — Present",
      role: "Secretary & Executive Administrator",
      organization: "Media Moklet (SMK Telkom Malang)",
      type: "Student Organization",
      description:
        "Overseeing administrative documentation, scheduling editorial sprints, organizing official publications, and coordinating cross-division meetings for over 30 student journalists and creatives.",
      achievements: [
        "Modernized organizational filing into unified digital cloud workspaces",
        "Coordinated 10+ major school coverage campaigns and annual bulletins",
      ],
    },
    {
      period: "2024 — Present",
      role: "Graphic Designer & Creative Contributor",
      organization: "Metic Moklet & Media Moklet",
      type: "Creative Division",
      description:
        "Designing social media publication kits, event posters, identity assets, and UI components for digital school media and extracurricular showcases.",
      achievements: [
        "Produced 50+ published digital media banners and event visuals",
        "Co-developed visual guidelines and graphic templates for fast turnarounds",
      ],
    },
    {
      period: "2023 — Present",
      role: "Digital Media & IT Staff",
      organization: "Perpustakaan SMK Telkom Malang",
      type: "School Entity",
      description:
        "Assisting digital library operations, prototyping the Pustel mobile interface, and crafting educational book review content.",
      achievements: [
        "Designed UI flow for digital catalog borrowing system",
        "Increased library student social engagement by 35% through visual posts",
      ],
    },
    {
      period: "2023 — Present",
      role: "Software Engineering Student",
      organization: "SMK Telkom Malang",
      type: "Education",
      description:
        "Specializing in Software Engineering (RPL). Mastering mobile application development, frontend engineering, database architectures, and UI/UX design.",
      achievements: [
        "Consistent academic honors in software engineering modules",
        "Active contributor to school software incubation projects",
      ],
    },
  ] as ExperienceItem[],

  marqueePills: [
    "MOBILE APP DEVELOPER",
    "UI/UX DESIGNER",
    "SMK TELKOM MALANG",
    "MEDIA MOKLET",
    "FLUTTER & REACT",
    "DESIGN SYSTEMS",
    "GRAPHIC DESIGN",
    "MALANG, INDONESIA",
  ],
};
