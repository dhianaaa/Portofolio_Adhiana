import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { o as t, p as n, s as r, w as i } from "./react.iNMCLRE-.mjs";
import { M as a } from "./motion.BnyVzGcg.mjs";
import { J as o, N as s, k as c, o as l, wt as u, xt as d } from "./framer.DCAwtIDZ.mjs";
var f,
  p,
  m,
  h,
  g,
  _,
  v,
  y = e(() => {
    (r(),
      o(),
      i(),
      (f = `var(--framer-icon-mask)`),
      (p = n(function (e, n) {
        return t(`svg`, { ...e, ref: n, children: e.children });
      })),
      (m = a.create(p)),
      (h = n((e, n) => {
        let { animated: r, layoutId: i, children: a, ...o } = e;
        return r
          ? t(m, { ...o, layoutId: i, ref: n, children: a })
          : t(`svg`, { ...o, ref: n, children: a });
      })),
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 6.75 6.75 L 0 13.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="OlkiCjwZW" transform="translate(13.5 5.25)" width="6.75px"/><path d="M 0 0 L 9.75 0" fill="transparent" height="1px" id="nWAnBTbCm" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="9.75px"/><path d="M 0 0 L 6.75 6.75 L 0 13.5 Z" fill="transparent" height="13.5px" id="cdRxwCHPX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(13.5 5.25)" width="6.75px"/></svg>`),
      (_ = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (v = u(
        n(function (e, n) {
          let {
              style: r,
              className: i,
              layoutId: a,
              variant: o,
              ezTt3ayMo: c,
              lschgej4H: l,
              qxTvv_EBh: u,
              ...f
            } = _(e),
            p = d(`388653749`, g);
          return t(h, {
            ...f,
            className: s(`framer-XkIxc`, i),
            layoutId: a,
            ref: n,
            role: `presentation`,
            style: { "--1m6trwb": u, "--21h8s6": c, "--pgex8v": l, ...r },
            viewBox: `0 0 24 24`,
            children: t(`use`, { href: p }),
          });
        }),
        [
          `.framer-XkIxc { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-XkIxc`
      )),
      (v.displayName = `Arrow Right`),
      c(v, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: l.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: l.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: l.Number,
        },
      }));
  });
export { y as n, v as t };
//# sourceMappingURL=ae1wERNQB.CmujuvOU.mjs.map
