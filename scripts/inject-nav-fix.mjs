import fs from "fs";
import path from "path";

const navFixScript = `<script data-nav-fix>
(function() {
  window.addEventListener('click', function(e) {
    var a = e.target.closest('a');
    if (!a) return;
    var rawHref = a.getAttribute('href');
    if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || a.target === '_blank') return;
    try {
      var target = new URL(a.href, window.location.href);
      if (target.origin === window.location.origin) {
        e.stopImmediatePropagation();
        e.preventDefault();
        window.location.assign(target.href);
      }
    } catch (_) {}
  }, true);
})();
</script>`;

function injectInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  if (content.includes("data-nav-fix")) return false;

  if (content.includes("</head>")) {
    content = content.replace("</head>", `${navFixScript}\n</head>`);
  } else if (content.includes("<body")) {
    content = content.replace(/<body[^>]*>/, `$&${navFixScript}`);
  } else {
    content = navFixScript + content;
  }

  fs.writeFileSync(filePath, content, "utf8");
  return true;
}

function processDirectory(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += processDirectory(full);
    } else if (entry.name.endsWith(".html")) {
      if (injectInFile(full)) {
        count++;
      }
    }
  }
  return count;
}

let total = 0;
total += processDirectory(path.resolve("varen-export"));
total += processDirectory(path.resolve("public"));

console.log(`Successfully injected navigation fix into ${total} HTML files!`);
