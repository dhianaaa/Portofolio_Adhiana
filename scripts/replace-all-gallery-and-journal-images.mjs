import fs from "fs";
import path from "path";

const mapping = [
  // 1. Image #1 Gallery Images (work_n_C3_B8rth / LaporKita)
  { prefix: "qpyS0DxRrfSYLuZepQnRFWhAkfw", asset: "public/dhiana-assets/laporkita.jpg" }, // Straw hat -> LaporKita
  { prefix: "og82KHcjPd2UEUmq6mxhpTJ9BUQ", asset: "public/dhiana-assets/waylo.jpg" },      // Markers -> WAYLO

  // 2. All Other Case Study Gallery Images
  // JoyCharm (work_vorqen)
  { prefix: "kzcCT9Hrgd94vmo72rI858S6SJA", asset: "public/dhiana-assets/joycharm.png" },
  { prefix: "2G3NinXjGxOtbYbH8W5cprhoDI", asset: "public/dhiana-assets/ourstore.png" },

  // Our Store (work_noctra)
  { prefix: "Di1575BVmzUDgVjUGhe6kVk1pR8", asset: "public/dhiana-assets/ourstore.png" },
  { prefix: "AILU2RncLuA4u5UGvj7IRKjg1ok", asset: "public/dhiana-assets/cakeshop.png" },

  // AmertaPay (work_aurel)
  { prefix: "F1PVUX4Wjew1EExDYHDURuRThk", asset: "public/dhiana-assets/amertapay.png" },
  { prefix: "L6CFazu1KCLen5Ezp49zBg8thVM", asset: "public/dhiana-assets/move.png" },

  // Cake Shop (work_montra)
  { prefix: "7yQsVsWBUeM1oR1nx4WMnjvO1s", asset: "public/dhiana-assets/cakeshop.png" },
  { prefix: "JL3MBkpx56i5J35yMBTjiQUZzE", asset: "public/dhiana-assets/hazelbakery.png" },

  // Web Perpustakaan (work_arden)
  { prefix: "Bx9uDCk7USEVKVpcw1dmLg5wzec", asset: "public/dhiana-assets/webperpus.jpg" },
  { prefix: "UCOoNM7wcP7iolqMZTWzzJXMUTU", asset: "public/dhiana-assets/webmetic.jpg" },

  // Web METIC (work_lumen)
  { prefix: "yDhbmGYV7TbXgIqqCzAiMvHYMRs", asset: "public/dhiana-assets/webmetic.jpg" },
  { prefix: "F57ub163yo8zx6ZCuX2dBEU17Y", asset: "public/dhiana-assets/mserve.png" },

  // WAYLO (work_kova)
  { prefix: "KmawksM4TLxR37MVrHiRwZ53sk", asset: "public/dhiana-assets/waylo.jpg" },
  { prefix: "av2wnrNBJ6FqRYdMHQY1aKRf9yQ", asset: "public/dhiana-assets/laporkita.jpg" },

  // 3. Journal Article Thumbnail Images
  { prefix: "RaZ9e6cYfFO2vGIEfOy33qZeKfI", asset: "public/dhiana-assets/joycharm.png" },
  { prefix: "n2CM1P6imv0W4C8CbQnfMoiDSWo", asset: "public/dhiana-assets/webperpus.jpg" },
  { prefix: "6iE9I79i1aRbY8fv83fB2iOwY", asset: "public/dhiana-assets/amertapay.png" },
  { prefix: "7PWnorPc5F16o156uhzRUj4NhI", asset: "public/dhiana-assets/webmetic.jpg" },
  { prefix: "o1sS2DWy9HWprMuVpau6U5Ni5g", asset: "public/dhiana-assets/mlcarnival.png" }
];

const targetDirs = [
  path.resolve("public/assets/images"),
  path.resolve("varen-export/assets/images")
];

let replacedCount = 0;

for (const item of mapping) {
  if (!fs.existsSync(item.asset)) {
    console.warn("Asset not found:", item.asset);
    continue;
  }
  const buf = fs.readFileSync(item.asset);

  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;
    const matchingFiles = fs.readdirSync(dir).filter(f => f.startsWith(item.prefix));
    for (const f of matchingFiles) {
      fs.writeFileSync(path.join(dir, f), buf);
      replacedCount++;
    }
  }
}

console.log(`Successfully replaced ${replacedCount} image files across all galleries and journal entries with real project assets!`);
