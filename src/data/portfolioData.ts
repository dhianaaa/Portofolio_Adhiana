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
    { label: "Experience", value: "2 Years" },
    { label: "Projects Completed", value: "10+" },
    { label: "Organisasi & Kepanitiaan", value: "5" },
    { label: "Core Focus", value: "Mobile · UI/UX · QA" },
  ],

  projects: [
    {
      id: "joycharm",
      slug: "joycharm",
      number: "01",
      category: "Mobile App · UI/UX Flutter",
      title: "JOYCHARM",
      subtitle: "Modern & Engaging Mobile Application",
      description:
        "Mobile application project designed to provide a modern, joyful, and engaging user experience. Designed from wireframes to high-fidelity prototype in Figma, then implemented with Flutter and Dart.",
      overview:
        "JoyCharm is a comprehensive mobile application project created to deliver a joyful, intuitive, and modern user experience. Built end-to-end: from initial user flows and interactive prototypes in Figma to a responsive, cross-platform Flutter application.",
      challenge:
        "Creating an engaging and tactile mobile experience with seamless navigation, responsive animations, and clean state handling across both Android and iOS devices.",
      approach:
        "Designed end-to-end user journeys in Figma with clear visual hierarchy, then engineered modular Flutter widgets with clean state management and tactile touch targets.",
      deliverables: [
        "End-to-End Mobile App Architecture",
        "UI/UX Design & Interactive Figma Prototype",
        "Cross-Platform Flutter Development",
        "Custom Widget Library & Motion Cues",
        "Mobile Usability & Responsiveness Testing",
      ],
      outcome:
        "Successfully delivered a fluid, responsive mobile application with clean visual hierarchy, tactile interactions, and robust performance.",
      tech: ["Flutter", "Dart", "Figma", "UI/UX Design", "Interactive Prototype"],
      link: "https://github.com/dhianaaa",
      githubUrl: "https://github.com/dhianaaa",
      accentBg: "#BFFF0A",
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#BFFF0A",
      image: "/dhiana-assets/joycharm.png",
      gallery: [
        "/dhiana-assets/joycharm.png",
        "/dhiana-assets/ourstore.png",
      ],
      year: "2025",
      client: "Mobile & UI/UX Showcase",
      role: "Lead Mobile Developer & UI/UX Designer",
      metrics: "End-to-End Figma to Flutter Implementation",
      featured: true,
    },
    {
      id: "our-store",
      slug: "our-store",
      number: "02",
      category: "E-Commerce · UI/UX Flutter",
      title: "OUR STORE",
      subtitle: "E-Commerce Product Catalog & Shopping Flow",
      description:
        "E-commerce website project featuring structured product catalog, intuitive shopping flow, interactive cart, and responsive user interface.",
      overview:
        "Our Store is an e-commerce platform designed to make online shopping effortless and transparent. Features dynamic product filtering, responsive card grids, and seamless cart checkout flows.",
      challenge:
        "Structuring multi-category product catalogs with fast checkout flows that perform reliably across mobile and desktop browsers.",
      approach:
        "Engineered responsive shopping components with clean user feedback, optimized image assets, and intuitive cart management using Flutter Web.",
      deliverables: [
        "E-Commerce Web Architecture",
        "Shopping Cart & Checkout Flow",
        "Product Catalog & Filtering UI",
        "Responsive Multi-Device Layout",
      ],
      outcome:
        "A fast, intuitive shopping experience with zero friction in cart additions and product discoveries.",
      tech: ["Flutter Web", "UI/UX Design", "Responsive Layout", "State Management"],
      link: "https://github.com/dhianaaa",
      githubUrl: "https://github.com/dhianaaa",
      accentBg: "#5546FF",
      textColor: "#FFFFFF",
      borderColor: "rgba(255, 255, 255, 0.25)",
      tagColor: "rgba(255, 255, 255, 0.16)",
      buttonBg: "#FFFFFF",
      buttonText: "#5546FF",
      image: "/dhiana-assets/ourstore.png",
      gallery: [
        "/dhiana-assets/ourstore.png",
        "/dhiana-assets/cakeshop.png",
      ],
      year: "2025",
      client: "Web Development Project",
      role: "Developer & UI Designer",
      metrics: "100% Responsive Multi-Device Shopping Flow",
      featured: true,
    },
    {
      id: "amertapay",
      slug: "amertapay",
      number: "03",
      category: "Utility Management · Database Flutter",
      title: "AMERTAPAY",
      subtitle: "Web-Based Water Utility Billing & Customer System",
      description:
        "Developed a web-based water utility management system for managing customer and billing data efficiently, accurately, and securely.",
      overview:
        "AmertaPay is a utility administration platform designed to manage customer records, water meter readings, and billing histories with precision and clarity.",
      challenge:
        "Replacing disjointed manual ledger entries with a structured digital dashboard that reduces calculation errors and streamlines invoice verification.",
      approach:
        "Created structured tabular dashboards, automated billing calculators, and clear status indicators with Flutter Web and database integration.",
      deliverables: [
        "Utility Management Dashboard",
        "Database Schema & Record Management",
        "Automated Billing Workflow",
        "Flutter Web Administrative UI",
      ],
      outcome:
        "Streamlined customer payment tracking and reduced billing dispute lookups to seconds.",
      tech: ["Flutter Web", "Database Management", "REST API", "UI Dashboard"],
      link: "https://github.com/dhianaaa",
      githubUrl: "https://github.com/dhianaaa",
      accentBg: "#7FE3FF",
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#7FE3FF",
      image: "/dhiana-assets/amertapay.png",
      gallery: [
        "/dhiana-assets/amertapay.png",
        "/dhiana-assets/joycharm.png",
      ],
      year: "2025",
      client: "Water Utility Administration",
      role: "Fullstack Flutter Developer & QA Tester",
      metrics: "Structured Customer & Billing Record Automation",
      featured: true,
    },
    {
      id: "cake-shop",
      slug: "cake-shop",
      number: "04",
      category: "Mobile App · Bakery Ordering",
      title: "CAKE SHOP",
      subtitle: "Mobile Ordering Companion for Artisanal Bakery",
      description:
        "Mobile ordering application for bakery products with a simple, mouth-watering, and user-friendly interface built in Flutter.",
      overview:
        "Cake Shop is a mobile ordering application crafted for bakery products, featuring rich product browsing, customizable cake orders, and effortless checkout.",
      challenge:
        "Bakery customers wanted an appetizing, simple mobile ordering experience without complicated multi-step menus.",
      approach:
        "Designed an appetizing mobile layout with quick product category tabs, quantity selectors, and a fast order summary flow in Flutter.",
      deliverables: [
        "Mobile Ordering UI & Cart Flow",
        "Menu Catalog & Category Tabs",
        "Order Customization & Summary",
        "Flutter Cross-Platform Codebase",
      ],
      outcome:
        "A delightful mobile ordering app with clear visual feedback and smooth navigation.",
      tech: ["Flutter", "Dart", "Figma", "Mobile UI", "Usability Testing"],
      link: "https://github.com/dhianaaa",
      githubUrl: "https://github.com/dhianaaa",
      accentBg: "#FF7BCA",
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#FF7BCA",
      image: "/dhiana-assets/cakeshop.png",
      gallery: [
        "/dhiana-assets/cakeshop.png",
        "/dhiana-assets/hazelbakery.png",
      ],
      year: "2025",
      client: "Bakery Ordering Project",
      role: "Mobile App Developer & UI Designer",
      metrics: "Seamless Mobile Cake Ordering Workflow",
      featured: true,
    },
    {
      id: "web-perpus",
      slug: "web-perpus",
      number: "05",
      category: "UI/UX Design · SMK Telkom Malang",
      title: "WEB PERPUSTAKAAN",
      subtitle: "School Library Website UI/UX Design & Prototype",
      description:
        "Designed the school library website from wireframe to interactive prototype in Figma, focusing on clear information structure and intuitive navigation.",
      overview:
        "Designed the school library website for Perpustakaan SMK Telkom Malang from initial wireframing to high-fidelity prototypes, focusing on clear book catalog organization and student borrowing flows.",
      challenge:
        "Students needed an accessible way to browse school library catalog books, check seat availability, and understand borrowing procedures easily.",
      approach:
        "Structured a clear information hierarchy in Figma, designed digital library cards, and verified user flows through student usability testing.",
      deliverables: [
        "Information Architecture & Wireframes",
        "High-Fidelity UI Design in Figma",
        "Interactive Component Prototyping",
        "Usability Verification & Testing",
      ],
      outcome:
        "An intuitive school library user interface and interactive Figma prototype that improved student catalog navigation and borrowing flow.",
      tech: ["Figma", "UI/UX Design", "Wireframing", "Interactive Prototype", "User Research"],
      link: "https://github.com/dhianaaa",
      githubUrl: "https://github.com/dhianaaa",
      accentBg: "#FF5A3C",
      textColor: "#FFFFFF",
      borderColor: "rgba(255, 255, 255, 0.25)",
      tagColor: "rgba(255, 255, 255, 0.16)",
      buttonBg: "#FFFFFF",
      buttonText: "#FF5A3C",
      image: "/dhiana-assets/webperpus.jpg",
      gallery: [
        "/dhiana-assets/webperpus.jpg",
        "/dhiana-assets/webmetic.jpg",
      ],
      year: "2026",
      client: "Perpustakaan SMK Telkom Malang",
      role: "Lead UI/UX Designer",
      metrics: "End-to-End Wireframe to Interactive Prototype",
      featured: true,
    },
    {
      id: "web-metic",
      slug: "web-metic",
      number: "06",
      category: "UI/UX Design · Student Organization",
      title: "WEB METIC",
      subtitle: "METIC Organization Website UI/UX Design",
      description:
        "Designed the METIC website UI/UX in Figma, focusing on responsive layouts, clear navigation, and accessible content.",
      overview:
        "Designed the official web interface for METIC organization publications, focusing on responsive layouts, event showcases, and accessible typographic hierarchy.",
      challenge:
        "The student creative organization needed a cohesive digital platform to publish articles, event announcements, and design resources consistently.",
      approach:
        "Created responsive layouts in Figma, established accessible typography and spacing guidelines, and designed modular event showcase blocks.",
      deliverables: [
        "Organizational Website Architecture",
        "Component Library & Auto-Layout in Figma",
        "Responsive Grid System & Typography",
        "Design System Documentation",
      ],
      outcome:
        "A modern, responsive organizational website design system that enables consistent publications and engages the student community.",
      tech: ["Figma", "UI/UX Design", "Design System", "Auto-Layout", "Web UI"],
      link: "https://github.com/dhianaaa",
      githubUrl: "https://github.com/dhianaaa",
      accentBg: "#FFD426",
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#FFD426",
      image: "/dhiana-assets/webmetic.jpg",
      gallery: [
        "/dhiana-assets/webmetic.jpg",
        "/dhiana-assets/waylo.jpg",
      ],
      year: "2025",
      client: "METIC Organization",
      role: "UI/UX Designer",
      metrics: "Design System & Responsive Figma Layouts",
      featured: true,
    },
    {
      id: "waylo",
      slug: "waylo",
      number: "07",
      category: "Web Design · JHIC Competition",
      title: "WAYLO",
      subtitle: "Career Learning & Roadmap Website UI/UX",
      description:
        "Designed the UI/UX for a career learning and roadmap website, including user flow, interface design, and interactive prototype for the JHIC competition.",
      overview:
        "WAYLO is an interactive career learning and roadmap web platform designed for the JHIC competition, featuring structured skill trees and milestone roadmaps.",
      challenge:
        "Career roadmaps often feel confusing and disorganized. WAYLO needed a clean visual flow that empowers students to navigate career paths effortlessly.",
      approach:
        "Designed intuitive user flows in Figma, interactive milestone components, and a clean card-based roadmap structure for the competition.",
      deliverables: [
        "Competition Entry Blueprint",
        "User Journey Mapping & Milestone Tree",
        "Career Roadmap Interactive Prototype",
        "Figma High-Fidelity UI Design",
      ],
      outcome:
        "Delivered a competitive, well-structured career learning UI/UX prototype praised for clear information architecture.",
      tech: ["Figma", "UI/UX Design", "Roadmap Tree", "Interactive Prototype"],
      link: "https://github.com/dhianaaa",
      githubUrl: "https://github.com/dhianaaa",
      accentBg: "#BFFF0A",
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#BFFF0A",
      image: "/dhiana-assets/waylo.jpg",
      gallery: ["/dhiana-assets/waylo.jpg"],
      year: "2024",
      client: "JHIC Competition Entry",
      role: "UI/UX Designer",
      metrics: "JHIC Competition Finalist Prototype",
      featured: false,
    },
    {
      id: "laporkita",
      slug: "laporkita",
      number: "08",
      category: "Mobile App · Civic Reporting",
      title: "LAPORKITA",
      subtitle: "Public Facility Reporting Mobile App Prototype",
      description:
        "Designed the mobile UI/UX for a public facility reporting app, including user flow, interface design, and interactive prototype for competition project.",
      overview:
        "LaporKita is a civic mobile application designed for citizens to report public facility damages and monitor repair progress seamlessly.",
      challenge:
        "Citizens needed a quick, intuitive way to document public facility issues with photos and track government resolution status in real time.",
      approach:
        "Designed a streamlined 3-step reporting workflow in Figma with camera integration mockups, location tagging, and status notification screens.",
      deliverables: [
        "Mobile UI Design & Prototype",
        "Civic Reporting 3-Step Flow",
        "Repair Status Tracking UI",
        "Interactive Figma Showcase",
      ],
      outcome:
        "A civic reporting mobile prototype that simplifies community issue reporting into a 30-second workflow.",
      tech: ["Figma", "Mobile App UI", "Civic Tech", "Interactive Prototype"],
      link: "https://github.com/dhianaaa",
      githubUrl: "https://github.com/dhianaaa",
      accentBg: "#7FE3FF",
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#7FE3FF",
      image: "/dhiana-assets/laporkita.jpg",
      gallery: ["/dhiana-assets/laporkita.jpg"],
      year: "2024",
      client: "Civic Tech Innovation Project",
      role: "Lead Mobile UI/UX Designer",
      metrics: "Streamlined 3-Step Civic Reporting UX",
      featured: false,
    },
    {
      id: "jwb-games",
      slug: "jwb-games",
      number: "09",
      category: "Graphic Design · Brand Identity",
      title: "JEMBER BEACH GAMES",
      subtitle: "Jember World Beach Games 2024 Visual Identity",
      description:
        "Developed a comprehensive visual identity for an international beach sports event, combining logo design, typography, color palette, and promotional materials.",
      overview:
        "Developed a comprehensive visual identity for Jember World Beach Games 2024, combining logo development, bold maritime color palettes, custom typography, merchandise, and banners into a cohesive branding system.",
      challenge:
        "Creating an energetic, international-standard visual identity that celebrates coastal sports while remaining authentic to Jember's regional character.",
      approach:
        "Engineered a dynamic brand system in Adobe Illustrator with wave-inspired typography, high-contrast promotional posters, and merchandise guidelines.",
      deliverables: [
        "Logo Design & Brand Guidelines",
        "Typography & Maritime Color Palette",
        "Event Promotional Posters & Banners",
        "Merchandise & Identity Assets",
      ],
      outcome:
        "A dynamic, memorable brand identity system applied across digital media and physical event merchandise.",
      tech: ["Adobe Illustrator", "Brand Identity", "Visual Guidelines", "Graphic Design"],
      link: "https://github.com/dhianaaa",
      githubUrl: "https://github.com/dhianaaa",
      accentBg: "#FF7BCA",
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#FF7BCA",
      image: "/dhiana-assets/jwbgames.png",
      gallery: ["/dhiana-assets/jwbgames.png"],
      year: "2024",
      client: "International Beach Sports Event",
      role: "Graphic Designer & Brand Identity Creator",
      metrics: "Comprehensive Multi-Media Brand System",
      featured: false,
    },
    {
      id: "ml-carnival",
      slug: "ml-carnival",
      number: "10",
      category: "Graphic Design · Event Branding",
      title: "MALANG FLOWER CARNIVAL",
      subtitle: "Malang Flower Carnival 2025 Brand Identity",
      description:
        "Designed a vibrant visual identity inspired by the elegance of floral culture, featuring a complete branding system including logo, typography, color palette, and promotional assets.",
      overview:
        "Designed a vibrant visual identity inspired by the elegance of floral culture, featuring a complete branding system including logo design, typography, stationery, and promotional assets.",
      challenge:
        "Representing rich floral cultural heritage in a contemporary, energetic visual language that attracts broad youth and tourist audiences.",
      approach:
        "Combined vibrant botanical color palettes, elegant display typography, and modular floral motifs that scale across print, banners, and digital feeds.",
      deliverables: [
        "Event Logo & Motif System",
        "Stationery & Merchandise Layouts",
        "Social Media Promotional Banners",
        "Brand Identity Guidelines",
      ],
      outcome:
        "A consistent and recognizable brand presence that elevates the carnival's regional cultural prominence.",
      tech: ["Adobe Illustrator", "Visual Identity", "Typography", "Event Branding"],
      link: "https://github.com/dhianaaa",
      githubUrl: "https://github.com/dhianaaa",
      accentBg: "#FFD426",
      textColor: "#17143A",
      borderColor: "rgba(23, 20, 58, 0.2)",
      tagColor: "rgba(23, 20, 58, 0.12)",
      buttonBg: "#17143A",
      buttonText: "#FFD426",
      image: "/dhiana-assets/mlcarnival.png",
      gallery: ["/dhiana-assets/mlcarnival.png"],
      year: "2025",
      client: "Cultural Event Branding",
      role: "Visual Identity Designer",
      metrics: "Vibrant Multi-Asset Cultural Brand System",
      featured: false,
    },
  ] as Project[],

  principles: [
    {
      number: "01",
      title: "User First",
      description:
        "Desain dan alur aplikasi selalu berpusat pada kenyamanan pengguna nyata, mengutamakan kemudahan navigasi daripada sekadar dekorasi.",
    },
    {
      number: "02",
      title: "Clean & Resilient Code",
      description:
        "Mengembangkan aplikasi Flutter dengan arsitektur modular yang rapi, terstruktur, dan mudah dirawat seiring pertumbuhan fitur.",
    },
    {
      number: "03",
      title: "Quality & Detail Driven",
      description:
        "Membawa pola pikir Quality Assurance (QA) di setiap tahap—menguji skenario penggunaan, validasi input, dan meminimalkan bug.",
    },
    {
      number: "04",
      title: "Continuous Growth",
      description:
        "Selalu antusias mengeksplorasi teknologi baru, tren desain UI/UX modern, dan praktik rekayasa perangkat lunak terbaik.",
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
      period: "2026 — Present",
      role: "Quality Assurance (QA) & Testing",
      organization: "Personal & Academic Projects",
      type: "Quality Engineering",
      description:
        "Menyusun skenario uji terstruktur, pengujian fungsional manual, validasi endpoint API, dan audit konsistensi UI antarmuka.",
      achievements: [
        "Menyusun test cases komprehensif untuk sistem utilitas AmertaPay",
        "Memastikan verifikasi UI/UX dan kompatibilitas responsif sebelum rilis",
      ],
    },
    {
      period: "2025 — Present",
      role: "Mobile App Developer (Flutter)",
      organization: "Personal & Academic Projects",
      type: "Mobile Engineering",
      description:
        "Mengembangkan aplikasi mobile cross-platform berbasis Flutter dan Dart, merancang hierarki widget modular, dan integrasi database.",
      achievements: [
        "Membangun aplikasi JoyCharm dan Cake Shop dengan animasi lancar",
        "Menerapkan responsive layout untuk perangkat Android dan iOS",
      ],
    },
    {
      period: "2025 — Present",
      role: "UI/UX Designer",
      organization: "Web Perpustakaan & Web METIC",
      type: "Product Design",
      description:
        "Merancang antarmuka pengguna dari riset dan wireframe hingga prototipe interaktif di Figma serta sistem komponen terpadu.",
      achievements: [
        "Mendesain UI/UX Web Perpustakaan SMK Telkom Malang",
        "Menyusun sistem desain dan prototipe Web METIC Organization",
      ],
    },
    {
      period: "2024 — Present",
      role: "Software Engineering Student",
      organization: "SMK Telkom Malang",
      type: "Pendidikan Vokasi",
      description:
        "Mendalami Rekayasa Perangkat Lunak (RPL) dengan fokus pada mobile development, desain produk digital, dan rekayasa kualitas.",
      achievements: [
        "Aktif dalam 5 kegiatan organisasi dan kepanitiaan sekolah",
        "Menyelesaikan 10+ proyek aplikasi dan desain antarmuka",
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
