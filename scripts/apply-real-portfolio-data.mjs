import fs from "fs";
import path from "path";

// 1. Image Replacement Mapping
const imageReplacements = [
  {
    source: "public/dhiana-assets/fotoo.png",
    prefix: "qoDBfPfd5VU6JOJoeQF5IQCMyw"
  },
  {
    source: "public/dhiana-assets/joycharm.png",
    prefix: "nBEGBSeDavIFhut1a255bkAiosA"
  },
  {
    source: "public/dhiana-assets/ourstore.png",
    prefix: "RwSkilvYliY2rkT4zcPfLAGSzw"
  },
  {
    source: "public/dhiana-assets/amertapay.png",
    prefix: "mWLtVcBv7rvf4XCxtS7o0Nw63ZY"
  },
  {
    source: "public/dhiana-assets/cakeshop.png",
    prefix: "021UZwS0TC10DlrZk354NnEYKto"
  },
  {
    source: "public/dhiana-assets/webperpus.jpg",
    prefix: "i8DP0ruxQOJpJgf08LR6fQ9Q4QY"
  },
  {
    source: "public/dhiana-assets/webmetic.jpg",
    prefix: "1xKzC7aKJtixzRVAQY03E5bOfo"
  }
];

function replaceImagesInDir(imagesDir) {
  if (!fs.existsSync(imagesDir)) return;
  for (const item of imageReplacements) {
    if (!fs.existsSync(item.source)) continue;
    const srcBuf = fs.readFileSync(item.source);
    const files = fs.readdirSync(imagesDir).filter(f => f.startsWith(item.prefix));
    for (const f of files) {
      fs.writeFileSync(path.join(imagesDir, f), srcBuf);
    }
  }
}

replaceImagesInDir(path.resolve("varen-export/assets/images"));
replaceImagesInDir(path.resolve("public/assets/images"));
console.log("Replaced all project mockup and profile images with Dhiana's real assets!");

// 2. Text & Contact Replacements
const textReplacements = [
  // Email & Phone
  [new RegExp("adhiana\\.alika@gmail\\.com", "g"), "apriantinadhiana@gmail.com"],
  [new RegExp("hello@varen\\.design", "g"), "apriantinadhiana@gmail.com"],
  
  // Real Socials from Vercel Portfolio
  [new RegExp("https://github\\.com/adhianaalika", "g"), "https://github.com/dhianaaa"],
  [new RegExp("https://github\\.com/dhianaaa", "g"), "https://github.com/dhianaaa"],
  [new RegExp("https://instagram\\.com/adhianaalika", "g"), "https://www.instagram.com/_dhriaen"],
  [new RegExp("https://www\\.instagram\\.com/adhianaalika", "g"), "https://www.instagram.com/_dhriaen"],
  [new RegExp("https://www\\.linkedin\\.com/in/adhiana-alika-apriantina-9baaa72aa/", "g"), "https://www.linkedin.com/in/adhiana-alika-9baaa72aa"],
  
  // Real Titles & Bio from Vercel Portfolio
  [new RegExp("Mobile App Developer & UI/UX Designer", "g"), "Mobile Developer, Quality Engineer, & UI/UX Designer"],
  [new RegExp("Mobile App Developer &amp; UI/UX Designer", "g"), "Mobile Developer, Quality Engineer, &amp; UI/UX Designer"],
  [new RegExp("Mobile Developer & UI/UX Designer", "g"), "Mobile Developer, Quality Engineer, & UI/UX Designer"],
  
  // Real Project Titles & Descriptions from Vercel Portfolio
  [new RegExp("MEDIA MOKLET", "g"), "JOYCHARM"],
  [new RegExp("Student Editorial Portal", "g"), "Mobile App · UI/UX Flutter"],
  
  [new RegExp("PUSTEL MOBILE", "g"), "OUR STORE"],
  [new RegExp("Smart Campus Library App", "g"), "E-Commerce Website · UI/UX Flutter"],
  
  [new RegExp("METIC UI KIT", "g"), "AMERTAPAY"],
  [new RegExp("Design Tokens & UI System", "g"), "Water Utility Management · Database Flutter"],
  
  [new RegExp("ECOTRACK APP", "g"), "CAKE SHOP"],
  [new RegExp("Gamified Green Tech App", "g"), "Mobile Bakery Ordering · Flutter App"],
  
  [new RegExp("EDUKARSA", "g"), "SCHOOL LIBRARY"],
  [new RegExp("Vocational Engineering Hub", "g"), "Web Perpustakaan · UI/UX Figma"],
  
  [new RegExp("BATIK MALANG AR", "g"), "WEB METIC"],
  [new RegExp("Cultural Exhibition AR App", "g"), "Metic Organization · UI/UX Figma"],

  // Location
  [new RegExp("Malang based", "g"), "Malang, Jawa Timur"],
  [new RegExp("Based in Malang, ID", "g"), "Malang, Jawa Timur"]
];

function processTextInDir(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += processTextInDir(full);
    } else if (/\.(html|js|mjs|framercms|json)$/.test(entry.name)) {
      let content = fs.readFileSync(full, "utf8");
      let changed = false;
      for (const [regex, replacement] of textReplacements) {
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

const count1 = processTextInDir(path.resolve("varen-export"));
const count2 = processTextInDir(path.resolve("public"));
console.log(`Updated text in ${count1} files in varen-export, ${count2} files in public!`);
