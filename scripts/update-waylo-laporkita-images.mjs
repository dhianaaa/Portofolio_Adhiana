import fs from "fs";
import path from "path";

const wayloSrc = path.resolve("public/dhiana-assets/waylo.jpg");
const laporKitaSrc = path.resolve("public/dhiana-assets/laporkita.jpg");

if (!fs.existsSync(wayloSrc)) {
  console.error("Missing waylo.jpg at", wayloSrc);
  process.exit(1);
}
if (!fs.existsSync(laporKitaSrc)) {
  console.error("Missing laporkita.jpg at", laporKitaSrc);
  process.exit(1);
}

const wayloBuf = fs.readFileSync(wayloSrc);
const laporKitaBuf = fs.readFileSync(laporKitaSrc);

const targetDirs = [
  path.resolve("public/assets/images"),
  path.resolve("varen-export/assets/images")
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) continue;

  // Replace WAYLO (b0wEv9ItjHyb8TR0dDcF4FuKe0Q*)
  const wayloFiles = fs.readdirSync(dir).filter(f => f.startsWith("b0wEv9ItjHyb8TR0dDcF4FuKe0Q"));
  for (const f of wayloFiles) {
    fs.writeFileSync(path.join(dir, f), wayloBuf);
    console.log(`Replaced ${f} with real WAYLO image in ${dir}`);
  }

  // Replace LAPORKITA (xwUFvMcUZCYlMe4zUoOwunvonQ*)
  const laporKitaFiles = fs.readdirSync(dir).filter(f => f.startsWith("xwUFvMcUZCYlMe4zUoOwunvonQ"));
  for (const f of laporKitaFiles) {
    fs.writeFileSync(path.join(dir, f), laporKitaBuf);
    console.log(`Replaced ${f} with real LAPORKITA image in ${dir}`);
  }
}

console.log("Successfully replaced Card 07 (WAYLO) and Card 08 (LAPORKITA) images with real repository assets!");
