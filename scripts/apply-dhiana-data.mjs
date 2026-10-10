import fs from "fs";
import path from "path";

const replacements = [
  // Email & Brand
  [new RegExp("hello@varen\\.design", "g"), "adhiana.alika@gmail.com"],
  [new RegExp("VAREN — Independent Designer & Creative Director", "g"), "DHIANA — Mobile App Developer & UI/UX Designer"],
  [new RegExp("VAREN — Independent Designer &amp; Creative Director", "g"), "DHIANA — Mobile App Developer &amp; UI/UX Designer"],
  [new RegExp("VAREN — Independent Designer", "g"), "DHIANA — Mobile Developer"],
  [new RegExp("Independent designer and creative director crafting distinctive identities, websites, and digital experiences for ambitious brands\\.", "g"), "Software Engineering student at SMK Telkom Malang, Mobile App Developer & UI/UX Designer crafting distinctive digital products."],
  [new RegExp("Independent designer and creative director crafting distinctive identities, websites, and digital experiences for ambitious brands", "g"), "Software Engineering student at SMK Telkom Malang, Mobile App Developer & UI/UX Designer crafting distinctive digital products"],
  [new RegExp("Independent designer and creative director creating distinctive brands and digital experiences\\.", "g"), "Software Engineering student, Mobile App Developer, and UI/UX Designer creating distinctive digital products."],
  [new RegExp("Independent designer and creative director creating distinctive brands and digital experiences", "g"), "Software Engineering student, Mobile App Developer, and UI/UX Designer creating distinctive digital products"],
  [new RegExp("Independent designer — USA — Working worldwide", "g"), "Mobile Developer — Malang, ID — Working Worldwide"],
  [new RegExp("Independent Designer & Creative Director", "g"), "Mobile App Developer & UI/UX Designer"],
  [new RegExp("Independent Designer &amp; Creative Director", "g"), "Mobile App Developer &amp; UI/UX Designer"],
  [new RegExp("Independent Designer", "g"), "Mobile Developer"],
  [new RegExp("Hi, I’m Varen", "g"), "Hi, I’m Dhiana"],
  [new RegExp("Hi, I'm Varen", "g"), "Hi, I'm Dhiana"],
  [new RegExp("© 2026 VAREN", "g"), "© 2026 DHIANA"],
  [new RegExp("VAREN", "g"), "DHIANA"],
  
  // Location & Metrics
  [new RegExp("USA based", "g"), "Malang based"],
  [new RegExp("Based in USA", "g"), "Based in Malang, ID"],
  [new RegExp("USA — Worldwide", "g"), "Malang, Indonesia — Worldwide"],
  [new RegExp("08\\+ years", "g"), "03+ years"],
  [new RegExp("120\\+ projects", "g"), "25+ projects"],
  
  // Projects
  [new RegExp("VORQEN", "g"), "MEDIA MOKLET"],
  [new RegExp("Financial Intelligence Platform", "g"), "Student Editorial Portal"],
  [new RegExp("NOCTRA", "g"), "PUSTEL MOBILE"],
  [new RegExp("Independent Music Artist", "g"), "Smart Campus Library App"],
  [new RegExp("AUREL", "g"), "METIC UI KIT"],
  [new RegExp("Luxury Hospitality Brand", "g"), "Design Tokens & UI System"],
  [new RegExp("MONTRA", "g"), "ECOTRACK APP"],
  [new RegExp("Contemporary Fashion Brand", "g"), "Gamified Green Tech App"],
  [new RegExp("ARDEN", "g"), "EDUKARSA"],
  [new RegExp("Interior Design Studio", "g"), "Vocational Engineering Hub"],
  [new RegExp("LUMEN", "g"), "BATIK MALANG AR"],
  [new RegExp("Creative Technology Studio", "g"), "Cultural Exhibition AR App"],
  
  // Social links
  [new RegExp("https://www\\.instagram\\.com/", "g"), "https://instagram.com/adhianaalika"],
  [new RegExp("https://instagram\\.com/", "g"), "https://instagram.com/adhianaalika"],
  [new RegExp("https://www\\.linkedin\\.com/", "g"), "https://www.linkedin.com/in/adhiana-alika-apriantina-9baaa72aa/"],
  [new RegExp("https://www\\.behance\\.net/", "g"), "https://github.com/adhianaalika"],
  [new RegExp("https://www\\.dribbble\\.com/", "g"), "https://dribbble.com/adhianaalika"],
  [new RegExp(">Behance<", "g"), ">GitHub<"],
  [new RegExp('"Behance"', "g"), '"GitHub"'],
  [new RegExp("`Behance`", "g"), "`GitHub`"]
];

function processDir(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += processDir(fullPath);
    } else if (/\.(html|js|mjs|framercms|json)$/.test(entry.name)) {
      let content = fs.readFileSync(fullPath, "utf8");
      let changed = false;
      for (const [regex, replacement] of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, "utf8");
        count++;
      }
    }
  }
  return count;
}

const targetDir = path.resolve("varen-export");
const updatedFiles = processDir(targetDir);
console.log(`Successfully updated ${updatedFiles} files in varen-export with Dhiana's data!`);
