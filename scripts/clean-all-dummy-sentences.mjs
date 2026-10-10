import fs from "fs";
import path from "path";

const sentenceFixes = [
  // JoyCharm
  [
    /JOYCHARM is a financial intelligence platform designed to help modern teams understand complex financial data and make smarter decisions\./g,
    "JoyCharm is a mobile application project designed to provide a modern, engaging, and joyful user experience built with Flutter and Figma."
  ],
  [
    /Financial platforms often feel complicated, technical, and difficult to navigate.*?approachable\./g,
    "Users needed an intuitive and cheerful mobile experience with clean navigation, tactile interactions, and smooth performance."
  ],
  [
    /A confident digital ecosystem that transforms complex financial information into a more intuitive, engaging, and memorable experience\./g,
    "A fluid and responsive mobile application built with Flutter that delivers an intuitive and delightful user journey."
  ],

  // AmertaPay
  [
    /AMERTAPAY is a collection of small coastal hotels.*?stay there\./g,
    "AmertaPay is a web-based water utility management system developed for managing customer and billing data efficiently."
  ],
  [
    /Luxury hospitality often looks the same.*?calm\./g,
    "Water utility administration required a fast, centralized digital platform to eliminate manual ledger delays and calculation errors."
  ],
  [
    /A brand guests describe as “the feeling of arriving”.*?phone\./g,
    "A streamlined utility management system with automated billing calculations and rapid customer record lookups."
  ],

  // Cake Shop
  [
    /CAKE SHOP is a contemporary fashion label with seasonal drops.*?them\./g,
    "Cake Shop is a mobile ordering application for bakery products featuring a simple and user-friendly interface."
  ],
  [
    /Each drop looked great on its own.*?season\./g,
    "Bakery customers needed a straightforward, mouth-watering mobile ordering experience without complicated multi-step menus."
  ],
  [
    /A store and campaign system that changes colour with every drop while staying recognisably MONTRA\./g,
    "A clean, responsive mobile bakery ordering application with intuitive product browsing and smooth order completion."
  ],

  // School Library (Web Perpustakaan)
  [
    /SCHOOL LIBRARY is an interior design studio working on homes and small hospitality spaces.*?website\./g,
    "School Library Website (Web Perpustakaan) is a digital portal designed for SMK Telkom Malang from wireframe to interactive prototype, focusing on clear information structure and navigation."
  ],
  [
    /The studio’s work is quiet and detailed.*?breathe\./g,
    "Students needed an accessible, modern platform to explore library book catalogs, reserve reading spaces, and track book loans."
  ],
  [
    /A portfolio that brings in better-matched enquiries.*?themselves\./g,
    "An intuitive school library user interface and interactive Figma prototype that improved student catalog navigation and borrowing flow."
  ],

  // Web METIC
  [
    /WEB METIC builds creative tools for motion designers.*?release\./g,
    "Web METIC is an organizational website designed in Figma for METIC Organization at SMK Telkom Malang, focusing on responsive layouts, clear navigation, and accessible content."
  ],
  [
    /Powerful tools usually come with intimidating interfaces.*?down\./g,
    "The student creative organization needed a cohesive digital platform to publish articles, event announcements, and design resources."
  ],
  [
    /A launch that turned curious visitors into active users.*?week\./g,
    "A modern, responsive organizational website design system that enables consistent publications and engages the student community."
  ]
];

function cleanInDir(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += cleanInDir(full);
    } else if (/\.(html|js|mjs|framercms|json)$/.test(entry.name)) {
      let content = fs.readFileSync(full, "utf8");
      let changed = false;
      for (const [regex, replacement] of sentenceFixes) {
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

const n1 = cleanInDir(path.resolve("varen-export"));
const n2 = cleanInDir(path.resolve("public"));
console.log(`Cleaned dummy sentences in ${n1} files in varen-export and ${n2} files in public!`);
