import fs from "fs";
import path from "path";

// Exact replacements map
const preciseReplacements = [
  // 1. Core Profile & Identity
  [new RegExp("adhiana\\.alika@gmail\\.com", "g"), "apriantinadhiana@gmail.com"],
  [new RegExp("hello@varen\\.design", "g"), "apriantinadhiana@gmail.com"],
  [new RegExp("https://github\\.com/adhianaalika", "g"), "https://github.com/dhianaaa"],
  [new RegExp("https://instagram\\.com/adhianaalika", "g"), "https://www.instagram.com/_dhriaen"],
  [new RegExp("https://www\\.instagram\\.com/adhianaalika", "g"), "https://www.instagram.com/_dhriaen"],
  [new RegExp("https://www\\.linkedin\\.com/in/adhiana-alika-apriantina-9baaa72aa/?", "g"), "https://www.linkedin.com/in/adhiana-alika-9baaa72aa"],
  [new RegExp("Malang based", "g"), "Malang, Jawa Timur"],
  [new RegExp("Based in Malang, ID", "g"), "Malang, Jawa Timur"],
  [new RegExp("USA based", "g"), "Malang, Jawa Timur"],
  [new RegExp("Based in USA", "g"), "Malang, Jawa Timur"],
  [new RegExp("USA — Worldwide", "g"), "Malang, Jawa Timur — Worldwide"],
  [new RegExp("USA — Working worldwide", "g"), "Malang, Jawa Timur — Worldwide"],

  // 2. Titles & Bio
  [new RegExp("Independent designer and creative director crafting distinctive identities, websites, and digital experiences for ambitious brands\\.", "g"), "Software Engineering student at SMK Telkom Malang, Mobile Developer, Quality Engineer, and UI/UX Designer crafting simple, useful digital products."],
  [new RegExp("Independent designer and creative director crafting distinctive identities, websites, and digital experiences for ambitious brands", "g"), "Software Engineering student at SMK Telkom Malang, Mobile Developer, Quality Engineer, and UI/UX Designer crafting simple, useful digital products"],
  [new RegExp("Independent designer and creative director creating distinctive brands and digital experiences\\.", "g"), "Software Engineering student, Mobile Developer, and UI/UX Designer creating useful digital products."],
  [new RegExp("Independent designer and creative director creating distinctive brands and digital experiences", "g"), "Software Engineering student, Mobile Developer, and UI/UX Designer creating useful digital products"],
  [new RegExp("I’m an independent designer and creative director focused on brand identity, digital experiences, and modern web design\\.", "g"), "I’m a Mobile Developer, Quality Engineer, and UI/UX Designer focused on Flutter mobile apps, responsive web, and user-centered design."],
  [new RegExp("I'm an independent designer and creative director focused on brand identity, digital experiences, and modern web design\\.", "g"), "I'm a Mobile Developer, Quality Engineer, and UI/UX Designer focused on Flutter mobile apps, responsive web, and user-centered design."],
  [new RegExp("I turn ideas into identities people remember\\.", "g"), "I build simple, useful, and visually appealing digital products."],
  [new RegExp("I turn ideas into identities people remember", "g"), "I build simple, useful, and visually appealing digital products"],
  [new RegExp("A designer focused on the space between strategy and aesthetics\\.", "g"), "Focused on the intersection of mobile development, UI/UX design, and quality engineering."],
  [new RegExp("A designer focused on the space between strategy and aesthetics", "g"), "Focused on the intersection of mobile development, UI/UX design, and quality engineering"],
  [new RegExp("My approach combines strategic thinking, visual craft, and technology to create experiences that feel intentional from the first impression to the smallest interaction\\.", "g"), "My approach combines clean code, user-centered Figma design, and quality verification to create mobile and web apps that are reliable, accessible, and delight users."],

  // 3. Experience Timeline Dummy Items
  [new RegExp("Senior Digital Designer", "g"), "UI Designer - WEB METIC"],
  [new RegExp("Leading digital design projects across branding, websites, and product experiences\\.", "g"), "Participated in website development for METIC organization publications, designed responsive user interfaces, and improved user experience."],
  [new RegExp("Product & Brand Designer", "g"), "Mobile Developer (Flutter)"],
  [new RegExp("Product &amp; Brand Designer", "g"), "Mobile Developer (Flutter)"],
  [new RegExp("Creating visual identities and digital products for growing companies and startups\\.", "g"), "Developing cross-platform mobile applications using Flutter and modern frameworks, focusing on performance, usability, and seamless user experiences."],
  [new RegExp("Visual Designer", "g"), "Web Developer & QA"],
  [new RegExp("Building strong foundations in visual design, typography, and digital experiences\\.", "g"), "Designing responsive websites with HTML, CSS, JavaScript, and verifying software quality through manual testing and UI reviews."],
  [new RegExp("Working independently with ambitious brands, founders, and creative teams across identity and digital experiences\\.", "g"), "Designed and developed the user interface for school library website at SMK Telkom Malang with responsive layouts and database integration."],
  
  // 4. Projects: Clean All Dummy Text (KOVA, NORTH, AUREL, MONTRA, ARDEN, LUMEN)
  // KOVA -> WAYLO
  [new RegExp("KOVA is an architecture practice focused on civic and cultural buildings\\..*?projects\\.", "g"), "WAYLO is an interactive career learning and roadmap web platform designed for the JHIC competition, featuring structured skill trees and milestone roadmaps."],
  [new RegExp("Architecture sites often speak only to other architects\\..*?building\\.", "g"), "Career roadmaps often feel confusing and disorganized. WAYLO needed a clean visual flow that empowers students to navigate career paths effortlessly."],
  [new RegExp("An identity built on a strict modular grid, paired with plain-language project stories, large drawings, and generous photography\\.", "g"), "Designed intuitive user flows in Figma, interactive milestone components, and a clean card-based roadmap structure for the competition."],
  [new RegExp("Visual Identity / Grid System / Website Design / Project Storytelling / Print Templates / Brand Guidelines", "g"), "Competition Entry / User Journey Mapping / Career Roadmap UI / Interactive Figma Prototype"],
  [new RegExp("Architecture & Design", "g"), "Career Learning & Roadmap · JHIC"],
  [new RegExp("Architecture &amp; Design", "g"), "Career Learning & Roadmap · JHIC"],
  [new RegExp("Structure you can feel\\.", "g"), "Career roadmaps, clearly structured."],
  [new RegExp("Identity · Digital Experience", "g"), "JHIC Competition · UI/UX Figma"],
  [new RegExp("KOVA", "g"), "WAYLO"],

  // NORTH -> LAPORKITA
  [new RegExp("NØRTH is a small creative studio\\..*?finished\\.", "g"), "LaporKita is a civic mobile application designed for citizens to report public facility damages and monitor repair progress seamlessly."],
  [new RegExp("NØRTH", "g"), "LAPORKITA"],
  [new RegExp("Nørth", "g"), "LaporKita"],
  [new RegExp("A studio site that behaves like a sketchbook\\.", "g"), "Civic reporting mobile app prototype."],
  [new RegExp("Art Direction · Website", "g"), "Mobile App · UI/UX Figma"],
  [new RegExp("Creative Studio", "g"), "Public Facility Reporting"],
  [new RegExp("Art Direction / Website Design / Interaction Design / Sticker Set / Motion Experiments / Framer Build", "g"), "Mobile UI Design / Civic Reporting Flow / Status Tracking UI / Interactive Prototype"],

  // VORQEN -> JOYCHARM
  [new RegExp("VORQEN is a financial intelligence platform.*?decisions\\.", "g"), "JoyCharm is a mobile application project created to provide a modern, engaging, and joyful digital experience built in Flutter and Figma."],
  [new RegExp("Financial platforms often feel complicated.*?approachable\\.", "g"), "Users needed a cheerful and frictionless mobile experience with clear browsing, tactile interactions, and responsive navigation."],
  [new RegExp("We built a visual system around clarity.*?understand\\.", "g"), "Crafted high-fidelity components and interactive prototypes in Figma, then implemented modular Flutter widgets with clean state management."],
  [new RegExp("Brand Strategy / Visual Identity / Art Direction / UI Design / Website Design / Design System", "g"), "Mobile App Architecture / Flutter Development / UI/UX Design / Interactive Prototype / Responsive Design"],
  [new RegExp("Financial intelligence, reimagined\\.", "g"), "Modern mobile experience, built with Flutter."],
  [new RegExp("Brand Identity · Product Design · Web Design", "g"), "Mobile App · UI/UX Design · Flutter"],
  [new RegExp("VORQEN", "g"), "JOYCHARM"],

  // NOCTRA -> OUR STORE
  [new RegExp("NOCTRA is an independent artist making late-night electronic music\\..*?release site\\.", "g"), "Our Store is an e-commerce website project featuring a comprehensive product catalog, intuitive shopping flows, and responsive user interfaces."],
  [new RegExp("Independent releases compete with major-label budgets.*?screen\\.", "g"), "E-commerce stores often suffer from cluttered product displays. Our Store focuses on clean visual hierarchy and seamless cart checkout."],
  [new RegExp("I built everything from a single idea.*?track\\.", "g"), "Built accessible product cards, categorized catalog filters, and a clear shopping flow using modern web development practices."],
  [new RegExp("Creative Direction / Cover Art / Release Website / Motion Kit / Tour Visuals / Social Toolkit", "g"), "E-Commerce Interface / Product Catalog / Shopping Cart Flow / Responsive UI"],
  [new RegExp("A world built for the hours after midnight\\.", "g"), "E-commerce store with seamless shopping flow."],
  [new RegExp("Creative Direction · Digital Experience", "g"), "Web Development · UI/UX Flutter"],
  [new RegExp("Independent Music Artist", "g"), "E-Commerce Web Application"],
  [new RegExp("NOCTRA", "g"), "OUR STORE"],

  // AUREL -> AMERTAPAY
  [new RegExp("AUREL is a collection of small coastal hotels\\..*?stay there\\.", "g"), "AmertaPay is a web-based water utility billing and customer management platform developed to manage records and invoices efficiently."],
  [new RegExp("Luxury hospitality often looks the same.*?calm\\.", "g"), "Water utility staff faced manual bookkeeping delays. AmertaPay delivers automated billing calculations and real-time customer data lookups."],
  [new RegExp("A warm palette taken from late-afternoon light.*?talking\\.", "g"), "Engineered a structured administrative dashboard with tabular reports, billing receipts, and database integration using Flutter Web."],
  [new RegExp("Brand Strategy / Wordmark / Visual Identity / Photography Direction / Website Design / Brand Guidelines", "g"), "Water Utility Dashboard / Database Architecture / Billing Workflow / Flutter Web UI"],
  [new RegExp("Quiet luxury, told warmly\\.", "g"), "Water utility management, made efficient."],
  [new RegExp("Brand Identity · Website Design", "g"), "Utility Management · Database Flutter"],
  [new RegExp("Luxury Hospitality Brand", "g"), "Water Utility Management"],
  [new RegExp("AUREL", "g"), "AMERTAPAY"],

  // MONTRA -> CAKE SHOP
  [new RegExp("MONTRA is a contemporary fashion label.*?them\\.", "g"), "Cake Shop is a mobile ordering application crafted for bakery products, featuring rich product browsing and an effortless ordering flow."],
  [new RegExp("Each drop looked great on its own.*?season\\.", "g"), "Bakery customers wanted an appetizing, simple mobile ordering experience without complicated multi-step menus."],
  [new RegExp("A bold colour-blocking system.*?lookbook\\.", "g"), "Designed an appetizing mobile layout with quick product category tabs, quantity selectors, and a fast order summary flow in Flutter."],
  [new RegExp("Art Direction / Campaign Concept / Lookbook Design / E-commerce Design / Product Page System / Launch Assets", "g"), "Mobile Ordering UI / Menu Showcase / Order Customization / Flutter Implementation"],
  [new RegExp("Fashion that refuses to sit still\\.", "g"), "Bakery ordering with simple, delightful flows."],
  [new RegExp("Art Direction · E-commerce", "g"), "Mobile Ordering · Flutter App"],
  [new RegExp("Contemporary Fashion Brand", "g"), "Mobile Bakery Ordering"],
  [new RegExp("MONTRA", "g"), "CAKE SHOP"],

  // ARDEN -> SCHOOL LIBRARY
  [new RegExp("ARDEN is an interior design studio.*?website\\.", "g"), "School Library Website (Web Perpustakaan) is a digital portal designed for Perpustakaan SMK Telkom Malang from wireframes to interactive prototype."],
  [new RegExp("The studio’s work is quiet and detailed.*?breathe\\.", "g"), "Students needed an accessible way to browse school library catalog books, check seat availability, and understand borrowing procedures."],
  [new RegExp("A calm grid, a single accent colour.*?room\\.", "g"), "Structured a clear information hierarchy in Figma, designed digital library cards, and verified user flows through student usability testing."],
  [new RegExp("Identity Refresh / Typography System / Website Design / Project Templates / CMS Setup / Launch Support", "g"), "Information Architecture / Wireframing / Figma Interactive Prototype / Responsive Design"],
  [new RegExp("Spaces, drawn with restraint\\.", "g"), "School library catalog, structured for students."],
  [new RegExp("Brand Identity · Digital Experience", "g"), "School Entity · UI/UX Figma"],
  [new RegExp("Interior Design Studio", "g"), "School Library Web Portal"],
  [new RegExp("ARDEN", "g"), "SCHOOL LIBRARY"],

  // LUMEN -> WEB METIC
  [new RegExp("LUMEN builds creative tools for motion designers\\..*?release\\.", "g"), "METIC Website is an organizational publication and showcase portal designed in Figma for METIC Organization at SMK Telkom Malang."],
  [new RegExp("Powerful tools usually come with intimidating interfaces.*?down\\.", "g"), "The organization needed a modern digital identity that highlights student creative publications, design kits, and extracurricular activities."],
  [new RegExp("A playful component library.*?product\\.", "g"), "Created responsive layouts in Figma, established accessible typography and spacing guidelines, and designed modular event showcase blocks."],
  [new RegExp("Product Design / Component Library / Marketing Website / Interactive Demos / Design System / Onboarding", "g"), "UI/UX Design / Component Library / Responsive Grid System / Organizational Branding"],
  [new RegExp("Tools that feel like play\\.", "g"), "Organizational showcase, built with intent."],
  [new RegExp("Digital Product · Web Design", "g"), "Organizational Web · UI/UX Figma"],
  [new RegExp("Creative Technology Studio", "g"), "METIC Organization Website"],
  [new RegExp("LUMEN", "g"), "WEB METIC"],

  // 5. Services Page Offerings
  [new RegExp("Brand Identity", "g"), "Mobile App Development"],
  [new RegExp("Digital Experience", "g"), "UI/UX Design & Prototyping"],
  [new RegExp("Creative Direction", "g"), "Frontend Development"],
  [new RegExp("Web Design", "g"), "Quality Assurance & QA"],
  [new RegExp("Positioning", "g"), "Flutter Architecture"],
  [new RegExp("Logo Design", "g"), "Dart Programming"],
  [new RegExp("Color Systems", "g"), "Cross-Platform UI"],
  [new RegExp("Visual Language", "g"), "Firebase Integration"],
  [new RegExp("Brand Guidelines", "g"), "State Management"],
  [new RegExp("Website Strategy", "g"), "Figma Wireframing"],
  [new RegExp("UX/UI Design", "g"), "Interactive Prototypes"],
  [new RegExp("Responsive Design", "g"), "User Flow Mapping"],
  [new RegExp("Interaction Design", "g"), "Usability Testing"],
  [new RegExp("Design Systems", "g"), "Component Libraries"],
  [new RegExp("Campaign Concepts", "g"), "Responsive Web Layouts"],
  [new RegExp("Visual Systems", "g"), "HTML / CSS / JavaScript"],
  [new RegExp("Photography Direction", "g"), "Performance Optimization"],
  [new RegExp("Motion Direction", "g"), "Accessible Markup"],
  [new RegExp("Marketing Websites", "g"), "Manual Test Cases"],
  [new RegExp("Portfolio Websites", "g"), "Bug & Defect Reporting"],
  [new RegExp("SaaS Websites", "g"), "API Endpoint Testing"],
  [new RegExp("Creative Development", "g"), "UI/UX Verification"],

  // 6. Stats on About page
  [new RegExp("120\\+ projects", "g"), "15+ projects"],
  [new RegExp("120\\+", "g"), "15+"],
  [new RegExp("35\\+", "g"), "04"],
  [new RegExp("Brands Collaborated With", "g"), "Core Competencies"],
  [new RegExp("Countries Reached", "g"), "Active Organizations"]
];

function processAllFiles(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += processAllFiles(full);
    } else if (/\.(html|js|mjs|framercms|json)$/.test(entry.name)) {
      let content = fs.readFileSync(full, "utf8");
      let changed = false;
      for (const [regex, replacement] of preciseReplacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(full, content, "utf8");
        count++;
      }
    }
  }
  return count;
}

const varenCount = processAllFiles(path.resolve("varen-export"));
const publicCount = processAllFiles(path.resolve("public"));

console.log(`Successfully synchronized ${varenCount} files in varen-export and ${publicCount} files in public!`);
