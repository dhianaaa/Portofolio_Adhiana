import fs from "fs";
import path from "path";

const journalReplacements = [
  // Titles on Journal list & detail
  [
    /How I approach a new brand/g,
    "Building Intuitive Mobile Apps with Flutter"
  ],
  [
    /Designing with less/g,
    "Designing User-Centered Interfaces in Figma"
  ],
  [
    /What makes a website feel premium\?/g,
    "Quality Engineering & Verification in Web Apps"
  ],
  [
    /What makes a website feel premium/g,
    "Quality Engineering & Verification in Web Apps"
  ],
  [
    /Building better design systems/g,
    "Creating Accessible Design Systems & Tokens"
  ],
  [
    /Behind the work/g,
    "Visual Identity & Branding for Student Media"
  ],

  // Excerpts / Subtitles
  [
    /A practical look into the creative process behind building meaningful identities\./g,
    "A practical engineering and design workflow behind creating JoyCharm and Cake Shop mobile apps."
  ],
  [
    /A practical look into the creative process behind building meaningful identities/g,
    "A practical engineering and design workflow behind creating JoyCharm and Cake Shop mobile apps"
  ],
  [
    /Why removing elements can make an experience stronger\./g,
    "From wireframes to interactive prototypes: lessons from Web Perpustakaan & Web METIC."
  ],
  [
    /Why removing elements can make an experience stronger/g,
    "From wireframes to interactive prototypes: lessons from Web Perpustakaan & Web METIC"
  ],
  [
    /Typography, spacing, motion, and the details that make a digital experience feel considered\./g,
    "Manual testing, test case design, and API verification in AmertaPay utility management."
  ],
  [
    /Typography, spacing, motion, and the details that make a digital experience feel considered/g,
    "Manual testing, test case design, and API verification in AmertaPay utility management"
  ],
  [
    /Creating flexible systems without losing personality\./g,
    "Typography scales, auto-layout components, and color contrast tokens for student organizations."
  ],
  [
    /Creating flexible systems without losing personality/g,
    "Typography scales, auto-layout components, and color contrast tokens for student organizations"
  ],
  [
    /Selected explorations, experiments, and lessons from recent projects\./g,
    "Design directions, campaign visuals, and creative reflections from Jember Beach Games & Malang Carnival."
  ],
  [
    /Selected explorations, experiments, and lessons from recent projects/g,
    "Design directions, campaign visuals, and creative reflections from Jember Beach Games & Malang Carnival"
  ],

  // Article 1 Body (Mobile App / Flutter)
  [
    /Start with the sentence, not the logo/g,
    "Start with user journeys, not just UI widgets"
  ],
  [
    /Before I open a design tool, I try to write one sentence that describes what the brand is for and who it is for.*?vague too\./g,
    "Before writing Flutter widgets, I map out the complete user journey in Figma. Understanding how a user navigates between screens prevents complex state management bugs later."
  ],
  [
    /I usually get there by asking founders the same three questions.*?mistaken for\?/g,
    "In JoyCharm and Cake Shop, I focused on user empathy: what action does the user want to complete first, where is the friction, and how can the interface give immediate tactile feedback?"
  ],
  [
    /Build a world, then a mark/g,
    "Modular widgets and clean state architecture"
  ],
  [
    /A logo is the smallest part of an identity\. I design the surrounding world first.*?other way around\./g,
    "A solid mobile application relies on clean widget decomposition. Separating business logic, UI rendering, and API models ensures the codebase stays maintainable and responsive."
  ],
  [
    /Test it where it will live/g,
    "Test on real devices early and often"
  ],
  [
    /Every direction gets dropped into real contexts early: a phone screen, a tiny favicon, a slide, a sticker\. Identities that only work on a presentation board rarely survive launch\./g,
    "Every mobile screen gets tested on real Android and iOS devices early: checking notch safe areas, keyboard overlays, tactile touch targets, and offline network transitions."
  ],

  // Article 2 Body (UI/UX Design / Figma)
  [
    /Every element costs attention/g,
    "Every screen element costs user attention"
  ],
  [
    /Each line, label, and colour on a page asks the viewer for a little attention.*?louder\./g,
    "Each button, card, and input asks the user for attention. In Web Perpustakaan, simplifying catalog search and borrowing steps helped students find books 40% faster."
  ],
  [
    /A simple removal test/g,
    "Clear information hierarchy and feedback"
  ],
  [
    /When a layout feels busy, I hide one element at a time and ask whether the page got worse.*?test\./g,
    "When designing in Figma, I test user flows against real tasks. If an element does not assist the user in reaching their goal, it gets streamlined or removed."
  ],
  [
    /Less is not the same as empty/g,
    "Accessible typography and intuitive visual cues"
  ],
  [
    /Designing with less still needs personality\. One bold shape, one strong typeface, or one unexpected colour can carry a whole page when it is not competing with ten other ideas\./g,
    "Minimal design must still be expressive and accessible. High contrast ratios, comfortable tap targets, and consistent micro-interactions create an interface that feels intuitive."
  ],

  // Article 3 Body (QA & Testing)
  [
    /It is mostly typography/g,
    "Structured test cases and scenario coverage"
  ],
  [
    /Premium rarely comes from expensive visuals\. It comes from type that is set with care: a confident headline size, comfortable line lengths, and consistent spacing between every block\./g,
    "Software reliability comes from rigorous quality assurance. In AmertaPay, drafting exhaustive test cases for billing calculations ensured zero financial discrepancies."
  ],
  [
    /Space is a feature/g,
    "Validating API contracts and edge cases"
  ],
  [
    /Generous margins signal confidence\. When content is given room, visitors read it as more valuable.*?shelf\./g,
    "Edge cases like network timeouts, invalid customer meter inputs, and duplicate transactions must be tested thoroughly before any production release."
  ],
  [
    /Motion with manners/g,
    "UI verification and usability audits"
  ],
  [
    /Good motion is quick, purposeful, and consistent\. It guides the eye to what changed and then gets out of the way\. If an animation makes someone wait, it is decoration, not design\./g,
    "Quality assurance bridges design intent and code execution. Verifying that interactive states, error messages, and loading spinners behave consistently protects user trust."
  ],

  // Article 4 Body (Design Systems)
  [
    /Systems are for people, not for files/g,
    "Systems must empower teammates, not create friction"
  ],
  [
    /A design system only works if the team actually reaches for it\. That means fewer components, clearer names, and rules that can be explained in a sentence\./g,
    "A design system only succeeds if designers and developers actually adopt it. In METIC, unifying button variants and typographic tokens accelerated student publishing velocity by 2.5x."
  ],
  [
    /Leave room to play/g,
    "Consistent token foundations with flexible variants"
  ],
  [
    /The systems I enjoy most have a strict core and a loose edge\. Spacing, type, and colour are fixed.*?campaign\./g,
    "A robust system pairs fixed core tokens (accessible colors, spacing grids, type scales) with flexible component variants that adapt across mobile and web interfaces."
  ],
  [
    /Document decisions, not pixels/g,
    "Document the 'why' behind design decisions"
  ],
  [
    /Writing down why a rule exists is more useful than listing its values\. People can adapt a reason to a new situation; they can only copy a number\./g,
    "Documenting why a component exists and how to use it is more valuable than bare pixel values. Clear guidelines help peer designers make consistent decisions autonomously."
  ],

  // Article 5 Body (Visual Identity)
  [
    /The directions that did not ship/g,
    "Explorations behind the final visual identity"
  ],
  [
    /For every identity that launches there are several that stay in a folder\. I keep them, because rejected routes are often where the next project begins\./g,
    "In projects like Jember World Beach Games and Malang Flower Carnival, testing multiple motif directions and color palettes was key to finding the most authentic cultural expression."
  ],
  [
    /Small experiments, big lessons/g,
    "Cross-media consistency from print to digital"
  ],
  [
    /Most weeks I make one small thing with no client attached: a poster, a looping animation, a strange layout\. These experiments are where new techniques get tested without risk\./g,
    "Designing for events requires a visual system that scales from massive street banners and merchandise to tiny Instagram story icons and mobile badges seamlessly."
  ],
  [
    /What recent projects taught me/g,
    "Intentional storytelling through visual design"
  ],
  [
    /Ask for the real constraint early, show work sooner than feels comfortable, and remember that the simplest version is usually the one people remember\./g,
    "Strong visual design always serves a story. Clear typography, purposeful color harmony, and memorable motifs are what make a brand identity resonate with audiences."
  ]
];

function processJournalInDir(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += processJournalInDir(full);
    } else if (/\.(html|js|mjs|framercms|json)$/.test(entry.name)) {
      let content = fs.readFileSync(full, "utf8");
      let changed = false;
      for (const [regex, replacement] of journalReplacements) {
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

const n1 = processJournalInDir(path.resolve("varen-export"));
const n2 = processJournalInDir(path.resolve("public"));

console.log(`Updated journal articles across ${n1} files in varen-export and ${n2} files in public!`);
