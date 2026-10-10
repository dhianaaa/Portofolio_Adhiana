import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { o as t, s as n } from "./react.iNMCLRE-.mjs";
import { M as r, t as i } from "./motion.BnyVzGcg.mjs";
import { J as a, ht as o, k as s, o as c } from "./framer.DCAwtIDZ.mjs";
function l(e) {
  let {
      color: n = `#F6EDD8`,
      background: i = `#0F2D24`,
      flip: a = !1,
      animate: s = !0,
      duration: c = 7,
      style: l,
    } = e,
    f = o(),
    p = s && !f;
  return t(`div`, {
    style: {
      ...l,
      position: `relative`,
      width: `100%`,
      height: `100%`,
      background: i,
      overflow: `hidden`,
    },
    "aria-hidden": `true`,
    children: t(`svg`, {
      viewBox: `0 0 1440 160`,
      preserveAspectRatio: `none`,
      style: {
        position: `absolute`,
        left: 0,
        top: 0,
        width: `100%`,
        height: `calc(100% + 2px)`,
        transform: a ? `scaleX(-1)` : void 0,
        display: `block`,
      },
      children: t(r.path, {
        d: u,
        fill: n,
        animate: p ? { d: [u, d, u] } : { d: u },
        transition: p ? { duration: c, ease: `easeInOut`, repeat: 1 / 0 } : { duration: 0 },
      }),
    }),
  });
}
var u,
  d,
  f = e(() => {
    (n(),
      a(),
      i(),
      (u = `M0 60 C240 10 420 130 720 110 C1020 90 1180 20 1440 50 L1440 160 L0 160 Z`),
      (d = `M0 90 C260 130 460 30 720 50 C1000 72 1200 130 1440 80 L1440 160 L0 160 Z`),
      s(l, {
        color: { type: c.Color, title: `Wave`, defaultValue: `#F6EDD8` },
        background: { type: c.Color, title: `Background`, defaultValue: `#0F2D24` },
        flip: { type: c.Boolean, title: `Flip`, defaultValue: !1 },
        animate: { type: c.Boolean, title: `Animate`, defaultValue: !0 },
        duration: {
          type: c.Number,
          title: `Time`,
          defaultValue: 7,
          min: 2,
          max: 30,
          step: 1,
          unit: `s`,
          hidden: (e) => !e.animate,
        },
      }));
  });
export { f as n, l as t };
//# sourceMappingURL=Wave.tmDtjSng.mjs.map
