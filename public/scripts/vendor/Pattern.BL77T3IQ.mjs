import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  N as t,
  _ as n,
  b as r,
  l as i,
  o as a,
  s as o,
  w as s,
  y as c,
} from "./react.iNMCLRE-.mjs";
import { M as l, t as u } from "./motion.BnyVzGcg.mjs";
import { J as d, ht as f, k as p, o as m } from "./framer.DCAwtIDZ.mjs";
function h(e, t, n, r, i) {
  let a = (r) => `${(e + n * Math.cos(r)).toFixed(1)} ${(t + n * Math.sin(r)).toFixed(1)}`;
  return `M${e} ${t} L${a(r)} A${n} ${n} 0 0 1 ${a(i)} Z`;
}
function g(e) {
  let {
      pattern: o = `rays`,
      color: s = `#1A4435`,
      accent: u = `#FF6B1A`,
      accentTwo: d = `#FF7EB6`,
      animate: p = !0,
      speed: m = 1,
      style: g,
    } = e,
    _ = f(),
    v = p && !_,
    y = r(null),
    [b, x] = n({ w: 1200, h: 900 });
  c(() => {
    let e = y.current;
    if (!e || typeof ResizeObserver > `u`) return;
    let n = () => {
      let n = Math.round(e.clientWidth),
        r = Math.round(e.clientHeight);
      n > 0 && r > 0 && t(() => x((e) => (e.w === n && e.h === r ? e : { w: n, h: r })));
    };
    n();
    let r = new ResizeObserver(n);
    return (r.observe(e), () => r.disconnect());
  }, []);
  let S = (e, t = !1) =>
      v
        ? {
            animate: { rotate: t ? -360 : 360 },
            transition: { duration: e / Math.max(m, 0.1), ease: `linear`, repeat: 1 / 0 },
          }
        : {},
    C = null;
  if (o === `rays`) {
    let e = (Math.PI * 2) / 18;
    C = a(l.g, {
      style: { transformOrigin: `600px 720px` },
      ...S(120),
      children: Array.from({ length: 18 }).map((t, n) =>
        a(`path`, { d: h(600, 720, 1500, n * e, n * e + e / 2), fill: s }, n)
      ),
    });
  } else if (o === `orbits`)
    C = a(`g`, {
      children: [
        [250, 110, -14, u, 34, !1],
        [410, 180, 10, d, 48, !0],
        [570, 250, -6, u, 64, !1],
      ].map(([e, t, n, r, o, c], u) =>
        i(
          `g`,
          {
            transform: `rotate(${n} 600 350)`,
            children: [
              a(`ellipse`, {
                cx: 600,
                cy: 350,
                rx: e,
                ry: t,
                fill: `none`,
                stroke: s,
                strokeWidth: 3,
                strokeDasharray: u === 1 ? `2 14` : `none`,
                strokeLinecap: `round`,
              }),
              i(l.g, {
                style: { transformOrigin: `600px 350px` },
                ...S(o, c),
                children: [
                  a(`ellipse`, { cx: 600, cy: 350, rx: e, ry: t, fill: `none`, stroke: `none` }),
                  a(`circle`, {
                    cx: 600 + e * 0.82,
                    cy: 350 - t * 0.56,
                    r: u === 1 ? 16 : 11,
                    fill: r,
                  }),
                ],
              }),
            ],
          },
          u
        )
      ),
    });
  else if (o === `tools`) {
    let e = b.w,
      t = b.h,
      n = e >= 700,
      r = e >= 1e3,
      o = [];
    for (let n = 0; n <= e; n += 50) o.push(a(`line`, { x1: n, y1: 0, x2: n, y2: t }, `v` + n));
    for (let n = 0; n <= t; n += 50) o.push(a(`line`, { x1: 0, y1: n, x2: e, y2: n }, `h` + n));
    let c = [];
    for (let t = 0; t <= e; t += 10)
      c.push(
        a(`line`, { x1: t, y1: 0, x2: t, y2: t % 100 == 0 ? 16 : t % 50 == 0 ? 11 : 6 }, `t` + t)
      );
    let f = (e, t, n) =>
        a(
          `rect`,
          {
            x: e - 6,
            y: t - 6,
            width: 12,
            height: 12,
            fill: `#FFFFFF`,
            stroke: u,
            strokeWidth: 2.5,
          },
          n
        ),
      p = (e, t, n) =>
        v
          ? {
              animate: { x: [0, e, 0], y: [0, t, 0] },
              transition: { duration: n / Math.max(m, 0.1), ease: `easeInOut`, repeat: 1 / 0 },
            }
          : {},
      h = n ? Math.max(24, Math.min(56, e * 0.045)) : 12,
      g = Math.min(e - h * 2, 1480),
      _ = (e - g) / 2,
      y = n ? 92 : 74,
      x = Math.max(200, t - y - (n ? 210 : 150)),
      S = e / 2,
      w = t - 50;
    C = i(`g`, {
      children: [
        a(`g`, { stroke: s, strokeWidth: 1, children: o }),
        a(`g`, { stroke: u, strokeWidth: 1.5, opacity: 0.7, children: c }),
        a(l.rect, {
          x: _,
          y,
          width: g,
          height: x,
          fill: `none`,
          stroke: u,
          strokeWidth: 2.5,
          strokeDasharray: `10 8`,
          animate: v ? { strokeDashoffset: [0, -36] } : { strokeDashoffset: 0 },
          transition: v
            ? { duration: 1.6 / Math.max(m, 0.1), ease: `linear`, repeat: 1 / 0 }
            : { duration: 0 },
        }),
        [
          [_, y],
          [S, y],
          [_ + g, y],
          [_, y + x / 2],
          [_ + g, y + x / 2],
          [_, y + x],
          [S, y + x],
          [_ + g, y + x],
        ].map(([e, t], n) => f(e, t, `s` + n)),
        r &&
          i(`g`, {
            transform: `translate(${S - 330} ${y - 34})`,
            children: [
              a(`rect`, { x: 0, y: 0, width: 140, height: 26, rx: 6, fill: u }),
              a(`text`, {
                x: 12,
                y: 18,
                fontFamily: `ui-monospace, Menlo, monospace`,
                fontSize: 13,
                fontWeight: 700,
                fill: `#17143A`,
                children: `Hero ${Math.round(g)} \xd7 ${Math.round(x)}`,
              }),
            ],
          }),
        r &&
          i(`g`, {
            transform: `translate(${_ - 20} ${w - 800})`,
            children: [
              i(`g`, {
                fill: `none`,
                strokeLinecap: `round`,
                children: [
                  a(`path`, {
                    d: `M36 850 C110 730 210 900 300 800`,
                    stroke: `#FFFFFF`,
                    strokeWidth: 4,
                  }),
                  a(`line`, { x1: 36, y1: 850, x2: 84, y2: 762, stroke: d, strokeWidth: 2 }),
                  a(`line`, { x1: 300, y1: 800, x2: 244, y2: 872, stroke: d, strokeWidth: 2 }),
                ],
              }),
              a(`circle`, { cx: 84, cy: 762, r: 7, fill: d }),
              a(`circle`, { cx: 244, cy: 872, r: 7, fill: d }),
              f(36, 850, `b0`),
              f(300, 800, `b1`),
              a(l.g, {
                ...p(6, -8, 4),
                children: i(`g`, {
                  transform: `translate(310 726) rotate(28)`,
                  children: [
                    a(`path`, {
                      d: `M0 0 L26 12 L34 46 L17 70 L0 46 L8 12 Z`,
                      fill: `#FFFFFF`,
                      stroke: `#17143A`,
                      strokeWidth: 3,
                      strokeLinejoin: `round`,
                    }),
                    a(`line`, {
                      x1: 17,
                      y1: 70,
                      x2: 17,
                      y2: 40,
                      stroke: `#17143A`,
                      strokeWidth: 3,
                    }),
                    a(`circle`, { cx: 17, cy: 36, r: 5, fill: `#17143A` }),
                  ],
                }),
              }),
            ],
          }),
        r &&
          i(`g`, {
            transform: `translate(${_ + g - 248} ${w - 50})`,
            children: [
              a(`rect`, { x: 0, y: 0, width: 176, height: 52, rx: 26, fill: `#17143A` }),
              [u, d, `#FFFFFF`, `#FFD426`].map((e, t) =>
                a(
                  `circle`,
                  {
                    cx: 28 + t * 40,
                    cy: 26,
                    r: 14,
                    fill: e,
                    stroke: `#FFFFFF`,
                    strokeWidth: t === 0 ? 3 : 0,
                  },
                  t
                )
              ),
              a(`rect`, { x: 190, y: 0, width: 52, height: 52, rx: 14, fill: `#17143A` }),
              a(`text`, {
                x: 216,
                y: 38,
                textAnchor: `middle`,
                fontFamily: `Georgia, serif`,
                fontSize: 32,
                fontWeight: 700,
                fill: u,
                children: `T`,
              }),
            ],
          }),
        a(`g`, {
          transform: `translate(${S - 600} ${y - 96})`,
          children: i(l.g, {
            ...p(-40, 14, 5),
            children: [
              a(`path`, {
                d: `M560 30 L560 72 L572 61 L581 80 L589 76 L580 58 L596 56 Z`,
                fill: d,
                stroke: `#17143A`,
                strokeWidth: 2.5,
                strokeLinejoin: `round`,
              }),
              a(`rect`, {
                x: 590,
                y: 66,
                width: 82,
                height: 28,
                rx: 14,
                fill: d,
                stroke: `#17143A`,
                strokeWidth: 2.5,
              }),
              a(`text`, {
                x: 631,
                y: 85,
                textAnchor: `middle`,
                fontFamily: `ui-sans-serif, system-ui, sans-serif`,
                fontSize: 14,
                fontWeight: 800,
                fill: `#17143A`,
                children: `Dhiana`,
              }),
            ],
          }),
        }),
      ],
    });
  } else {
    let e = [];
    for (let t = 0; t < 26; t++)
      for (let n = 0; n < 44; n++) {
        let r = n * 28 + 6 - 600,
          i = t * 28 + 6 - 350,
          o = Math.sqrt(r * r + i * i) / 700,
          c = Math.max(0, 7 * (1 - o));
        c > 0.6 &&
          e.push(a(`circle`, { cx: n * 28 + 6, cy: t * 28 + 6, r: c, fill: s }, `${n}-${t}`));
      }
    C = a(l.g, {
      style: { transformOrigin: `600px 350px` },
      animate: v ? { scale: [1, 1.06, 1] } : { scale: 1 },
      transition: v
        ? { duration: 6 / Math.max(m, 0.1), ease: `easeInOut`, repeat: 1 / 0 }
        : { duration: 0 },
      children: e,
    });
  }
  return a(`div`, {
    ref: y,
    style: {
      ...g,
      position: `relative`,
      width: `100%`,
      height: `100%`,
      overflow: `hidden`,
      pointerEvents: `none`,
    },
    "aria-hidden": `true`,
    children: a(`svg`, {
      viewBox: o === `tools` ? `0 0 ${b.w} ${b.h}` : `0 0 1200 700`,
      preserveAspectRatio: o === `tools` ? `none` : `xMidYMid slice`,
      style: { position: `absolute`, inset: 0, width: `100%`, height: `100%` },
      children: C,
    }),
  });
}
var _ = e(() => {
  (o(),
    d(),
    u(),
    s(),
    p(g, {
      pattern: {
        type: m.Enum,
        title: `Pattern`,
        options: [`rays`, `orbits`, `dots`, `tools`],
        optionTitles: [`Rays`, `Orbits`, `Dots`, `Tools`],
        defaultValue: `rays`,
      },
      color: { type: m.Color, title: `Color`, defaultValue: `#1A4435` },
      accent: {
        type: m.Color,
        title: `Accent`,
        defaultValue: `#FF6B1A`,
        hidden: (e) => e.pattern !== `orbits` && e.pattern !== `tools`,
      },
      accentTwo: {
        type: m.Color,
        title: `Accent Two`,
        defaultValue: `#FF7EB6`,
        hidden: (e) => e.pattern !== `orbits` && e.pattern !== `tools`,
      },
      animate: { type: m.Boolean, title: `Animate`, defaultValue: !0 },
      speed: {
        type: m.Number,
        title: `Speed`,
        defaultValue: 1,
        min: 0.2,
        max: 4,
        step: 0.1,
        hidden: (e) => !e.animate,
      },
    }));
});
export { _ as n, g as t };
//# sourceMappingURL=Pattern.BL77T3IQ.mjs.map
