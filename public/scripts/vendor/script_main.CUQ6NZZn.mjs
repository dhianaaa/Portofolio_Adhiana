import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  E as r,
  I as i,
  L as a,
  N as o,
  O as s,
  P as c,
  R as l,
  S as u,
  _ as d,
  a as f,
  b as p,
  d as m,
  g as h,
  h as g,
  i as ee,
  j as _,
  l as v,
  n as y,
  o as b,
  p as x,
  r as te,
  s as S,
  t as C,
  w,
  y as ne,
} from "./react.iNMCLRE-.mjs";
import { M as T, i as re, o as E, t as D } from "./motion.BnyVzGcg.mjs";
import {
  $ as ie,
  At as ae,
  C as O,
  Ct as oe,
  D as k,
  E as se,
  F as ce,
  H as A,
  J as j,
  K as le,
  N as M,
  O as ue,
  Ot as de,
  P as fe,
  T as N,
  V as P,
  Y as F,
  Z as pe,
  _t as I,
  a as L,
  at as me,
  bt as he,
  ct as ge,
  d as _e,
  dt as ve,
  f as ye,
  ft as be,
  g as R,
  h as xe,
  i as z,
  it as Se,
  k as Ce,
  kt as we,
  lt as Te,
  m as Ee,
  mt as De,
  nt as Oe,
  o as B,
  pt as ke,
  q as Ae,
  s as je,
  st as Me,
  tt as Ne,
  v as Pe,
  wt as V,
  x as H,
  xt as Fe,
  y as Ie,
} from "./framer.DCAwtIDZ.mjs";
import {
  _ as U,
  a as Le,
  c as Re,
  d as ze,
  f as Be,
  g as Ve,
  h as W,
  i as He,
  l as Ue,
  m as We,
  o as Ge,
  p as Ke,
  r as qe,
  s as Je,
  u as Ye,
  v as Xe,
} from "./shared-lib.D3cLfu14.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./J9ImekJ0u.BznW4BSb.mjs";
import { i as tt, n as nt, r as rt, t as it } from "./FojkW_dWA.DoI9fZIg.mjs";
import { i as at, n as ot, r as st, t as ct } from "./lZS6BJmxQ.DTmj87Yj.mjs";
import { i as lt, n as ut, r as dt, t as ft } from "./tTNyGyLUh.ugCiWzCl.mjs";
import { i as pt, n as mt, r as ht, t as gt } from "./vvB5RB1ER.BW1A9ndh.mjs";
import { i as _t, n as vt, r as yt, t as bt } from "./xTRXUmiRw.6JUGig27.mjs";
var xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  G,
  Dt = e(() => {
    (S(),
      j(),
      w(),
      (xt = `var(--framer-icon-mask)`),
      (St = x(function (e, t) {
        return b(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ct = T.create(St)),
      (wt = x((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? b(Ct, { ...a, layoutId: r, ref: t, children: i })
          : b(`svg`, { ...a, ref: t, children: i });
      })),
      (Tt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 12 L 0 0 L 16.5 0 L 16.5 12 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12px" id="gwB_ZdJt6" transform="translate(3.75 6)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="xGkn4qbwc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="uQ9bOFKFt" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 6)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="hrURkUe9P" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 18)" width="16.5px"/></svg>`),
      (Et = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (G = V(
        x(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Et(e),
            u = Fe(`3559153988`, Tt);
          return b(wt, {
            ...l,
            className: M(`framer-iZmZi`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: b(`use`, { href: u }),
          });
        }),
        [
          `.framer-iZmZi { -webkit-mask: ${xt}; aspect-ratio: 1; display: block; mask: ${xt}; width: 24px; }`,
        ],
        `framer-iZmZi`
      )),
      (G.displayName = `List`),
      Ce(G, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: B.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: B.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: B.Number,
        },
      }));
  }),
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  K,
  Pt = e(() => {
    (S(),
      j(),
      w(),
      (Ot = `var(--framer-icon-mask)`),
      (kt = x(function (e, t) {
        return b(`svg`, { ...e, ref: t, children: e.children });
      })),
      (At = T.create(kt)),
      (jt = x((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? b(At, { ...a, layoutId: r, ref: t, children: i })
          : b(`svg`, { ...a, ref: t, children: i });
      })),
      (Mt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="LjE0Ycn76" transform="translate(3.75 3.75)" width="16.5px"/><path d="M 13.5 0 L 0 13.5" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="oSDwjLCvX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" width="13.5px"/><path d="M 13.5 13.5 L 0 0" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="H9XwXWiXU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" width="13.5px"/></svg>`),
      (Nt = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (K = V(
        x(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Nt(e),
            u = Fe(`2202960551`, Mt);
          return b(jt, {
            ...l,
            className: M(`framer-AhL2C`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: b(`use`, { href: u }),
          });
        }),
        [
          `.framer-AhL2C { -webkit-mask: ${Ot}; aspect-ratio: 1; display: block; mask: ${Ot}; width: 24px; }`,
        ],
        `framer-AhL2C`
      )),
      (K.displayName = `X`),
      Ce(K, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: B.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: B.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: B.Number,
        },
      }));
  }),
  Ft,
  It,
  Lt,
  Rt = e(() => {
    (j(),
      fe.loadFonts([]),
      (Ft = [{ explicitInter: !0, fonts: [] }]),
      (It = [
        `.framer-mQFWG .framer-styles-preset-12trbhi:not(.rich-text-wrapper), .framer-mQFWG .framer-styles-preset-12trbhi.rich-text-wrapper a { --framer-link-current-text-color: #bfff0a; --framer-link-hover-text-color: #bfff0a; --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; transition-delay: 0s; transition-duration: 0.2s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (Lt = `framer-mQFWG`));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  J,
  Xt = e(() => {
    (S(),
      j(),
      D(),
      w(),
      Dt(),
      Pt(),
      Ve(),
      Rt(),
      Ze(),
      We(),
      (zt = P(W)),
      (Bt = [`ZzFPxSP3u`, `MZXtSvVyy`, `ibsmXBPia`]),
      (Vt = `framer-W9eMI`),
      (Ht = {
        ibsmXBPia: `framer-v-1qwvkc`,
        MZXtSvVyy: `framer-v-1nclda5`,
        ZzFPxSP3u: `framer-v-2m9op3`,
      }),
      (Ut = { bounce: 0.2, delay: 0, duration: 0.45, type: `spring` }),
      (Wt = {
        backgroundColor: `rgb(191, 255, 10)`,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` },
      }),
      (Gt = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = _(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return b(E.Provider, { value: a, children: n });
      }),
      (Kt = { "Phone Open": `ibsmXBPia`, Desktop: `ZzFPxSP3u`, Phone: `MZXtSvVyy` }),
      (qt = T.create(c)),
      (Jt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Kt[r.variant] ?? r.variant ?? `ZzFPxSP3u`,
      })),
      (Yt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = V(
        x(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = I();
          Te();
          let { style: l, className: u, layoutId: d, variant: f, ...m } = Jt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: ee,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: x,
              setGestureState: te,
              setVariant: S,
              variants: C,
            } = oe({
              cycleOrder: Bt,
              defaultVariant: `ZzFPxSP3u`,
              ref: i,
              variant: f,
              variantClassNames: Ht,
            }),
            w = Yt(e, C),
            ne = M(Vt, ze, Lt, et),
            E = () => !![`MZXtSvVyy`, `ibsmXBPia`].includes(h),
            { activeVariantCallback: D, delay: ie } = ge(h),
            ae = D(async (...e) => {
              S(`ibsmXBPia`);
            }),
            O = D(async (...e) => {
              S(`MZXtSvVyy`);
            }),
            k = () => h !== `ibsmXBPia`;
          return b(re, {
            id: d ?? a,
            children: b(qt, {
              animate: C,
              initial: !1,
              children: b(Gt, {
                value: Ut,
                children: b(T.nav, {
                  ...m,
                  ..._,
                  className: M(ne, `framer-2m9op3`, u, g),
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
                  layoutId: `ZzFPxSP3u`,
                  ref: i,
                  style: { ...l },
                  ...q(
                    {
                      ibsmXBPia: { "data-framer-name": `Phone Open` },
                      MZXtSvVyy: { "data-framer-name": `Phone` },
                    },
                    h,
                    y
                  ),
                  children: b(Gt, {
                    value: Ut,
                    children: v(T.div, {
                      className: `framer-y2hvsd`,
                      "data-border": !0,
                      "data-framer-name": `Shell`,
                      layoutDependency: w,
                      layoutId: `WUczdYM1U`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgba(255, 255, 255, 0.25)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-aba52494-d91c-4b4d-aa3e-44ea02fe436e)`,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                      },
                      variants: {
                        ibsmXBPia: {
                          borderBottomLeftRadius: 28,
                          borderBottomRightRadius: 28,
                          borderTopLeftRadius: 28,
                          borderTopRightRadius: 28,
                        },
                        MZXtSvVyy: {
                          borderBottomLeftRadius: 28,
                          borderBottomRightRadius: 28,
                          borderTopLeftRadius: 28,
                          borderTopRightRadius: 28,
                        },
                      },
                      children: [
                        v(T.div, {
                          className: `framer-1bgnuel`,
                          "data-framer-name": `Top Row`,
                          layoutDependency: w,
                          layoutId: `aYaE4Y5r9`,
                          children: [
                            b(R, {
                              href: { webPageId: `augiA20Il` },
                              motionChild: !0,
                              nodeId: `KcDw8YTVy`,
                              scopeId: `fXjSyj5nJ`,
                              children: v(T.a, {
                                className: `framer-1mbu8ht framer-rz5k4n`,
                                "data-framer-name": `Logo`,
                                layoutDependency: w,
                                layoutId: `KcDw8YTVy`,
                                children: [
                                  b(z, {
                                    children: b(se, {
                                      className: `framer-1x14ldu-container`,
                                      "data-code-component-plugin-id": `api`,
                                      isAuthoredByUser: !0,
                                      layoutDependency: w,
                                      layoutId: `yCDDzGzzZ-container`,
                                      nodeId: `yCDDzGzzZ`,
                                      rendersWithMotion: !0,
                                      scopeId: `fXjSyj5nJ`,
                                      children: b(W, {
                                        color: `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                                        duration: 10,
                                        face: !1,
                                        faceColor: `rgb(15, 45, 36)`,
                                        height: `100%`,
                                        id: `yCDDzGzzZ`,
                                        layoutId: `yCDDzGzzZ`,
                                        outline: `rgb(15, 45, 36)`,
                                        outlineWidth: 0,
                                        reverse: !1,
                                        shape: `asterisk`,
                                        spin: !0,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  b(N, {
                                    __fromCanvasComponent: !0,
                                    children: b(c, {
                                      children: b(T.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7QW50b24tcmVndWxhcg==`,
                                          "--framer-font-family": `"Anton", "Anton Placeholder", sans-serif`,
                                          "--framer-font-size": `26px`,
                                          "--framer-letter-spacing": `0.01em`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                        },
                                        children: `DHIANA`,
                                      }),
                                    }),
                                    className: `framer-1n9t70y`,
                                    fonts: [`FS;Anton-regular`],
                                    layoutDependency: w,
                                    layoutId: `Ksvkyva5q`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                            E() &&
                              b(T.button, {
                                "aria-label": `Toggle menu`,
                                className: `framer-6bkqro`,
                                "data-framer-name": `Menu Button`,
                                "data-reset": `button`,
                                layoutDependency: w,
                                layoutId: `vbEcWt1lZ`,
                                style: {
                                  backgroundColor: `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                  borderBottomLeftRadius: 100,
                                  borderBottomRightRadius: 100,
                                  borderTopLeftRadius: 100,
                                  borderTopRightRadius: 100,
                                },
                                ...q(
                                  {
                                    ibsmXBPia: { "data-highlight": !0, onTap: O },
                                    MZXtSvVyy: { "data-highlight": !0, onTap: ae },
                                  },
                                  h,
                                  y
                                ),
                                children: b(Ee, {
                                  animated: !0,
                                  className: `framer-17nn298`,
                                  Component: G,
                                  layoutDependency: w,
                                  layoutId: `NuRmsEddS`,
                                  style: {
                                    "--1m6trwb": 0,
                                    "--21h8s6": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                    "--pgex8v": 2,
                                  },
                                  ...q({ ibsmXBPia: { Component: K } }, h, y),
                                }),
                              }),
                          ],
                        }),
                        v(T.div, {
                          className: `framer-fszfbm`,
                          "data-framer-name": `Links`,
                          layoutDependency: w,
                          layoutId: `RNvUyK7SO`,
                          children: [
                            b(N, {
                              __fromCanvasComponent: !0,
                              children: b(c, {
                                children: b(T.p, {
                                  className: `framer-styles-preset-19s0zy7`,
                                  "data-styles-preset": `qdRSnXZTB`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                  },
                                  children: b(R, {
                                    href: { webPageId: `XojRWmbxf` },
                                    motionChild: !0,
                                    nodeId: `jtznlpubt`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `fXjSyj5nJ`,
                                    smoothScroll: !1,
                                    children: b(T.a, {
                                      className: `framer-styles-preset-12trbhi`,
                                      "data-styles-preset": `ieVkatw_m`,
                                      children: `Work`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-erhcsl`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `jtznlpubt`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                              },
                              variants: {
                                ibsmXBPia: {
                                  "--extracted-1eung3n": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                },
                                MZXtSvVyy: {
                                  "--extracted-1eung3n": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  ibsmXBPia: {
                                    "data-highlight": !0,
                                    children: b(c, {
                                      children: b(T.h4, {
                                        className: `framer-styles-preset-17iimqy`,
                                        "data-styles-preset": `J9ImekJ0u`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                        },
                                        children: b(R, {
                                          href: { webPageId: `XojRWmbxf` },
                                          motionChild: !0,
                                          nodeId: `jtznlpubt`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `fXjSyj5nJ`,
                                          smoothScroll: !1,
                                          children: b(T.a, {
                                            className: `framer-styles-preset-12trbhi`,
                                            "data-styles-preset": `ieVkatw_m`,
                                            children: `Work`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    onTap: O,
                                  },
                                  MZXtSvVyy: {
                                    children: b(c, {
                                      children: b(T.h4, {
                                        className: `framer-styles-preset-17iimqy`,
                                        "data-styles-preset": `J9ImekJ0u`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                        },
                                        children: b(R, {
                                          href: { webPageId: `XojRWmbxf` },
                                          motionChild: !0,
                                          nodeId: `jtznlpubt`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `fXjSyj5nJ`,
                                          smoothScroll: !1,
                                          children: b(T.a, {
                                            className: `framer-styles-preset-12trbhi`,
                                            "data-styles-preset": `ieVkatw_m`,
                                            children: `Work`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                h,
                                y
                              ),
                            }),
                            b(N, {
                              __fromCanvasComponent: !0,
                              children: b(c, {
                                children: b(T.p, {
                                  className: `framer-styles-preset-19s0zy7`,
                                  "data-styles-preset": `qdRSnXZTB`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                  },
                                  children: b(R, {
                                    href: { webPageId: `dMKNHnk2Y` },
                                    motionChild: !0,
                                    nodeId: `Pptf27Qip`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `fXjSyj5nJ`,
                                    smoothScroll: !1,
                                    children: b(T.a, {
                                      className: `framer-styles-preset-12trbhi`,
                                      "data-styles-preset": `ieVkatw_m`,
                                      children: `About`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-hu3e58`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `Pptf27Qip`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                              },
                              variants: {
                                ibsmXBPia: {
                                  "--extracted-1eung3n": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                },
                                MZXtSvVyy: {
                                  "--extracted-1eung3n": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  ibsmXBPia: {
                                    "data-highlight": !0,
                                    children: b(c, {
                                      children: b(T.h4, {
                                        className: `framer-styles-preset-17iimqy`,
                                        "data-styles-preset": `J9ImekJ0u`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                        },
                                        children: b(R, {
                                          href: { webPageId: `dMKNHnk2Y` },
                                          motionChild: !0,
                                          nodeId: `Pptf27Qip`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `fXjSyj5nJ`,
                                          smoothScroll: !1,
                                          children: b(T.a, {
                                            className: `framer-styles-preset-12trbhi`,
                                            "data-styles-preset": `ieVkatw_m`,
                                            children: `About`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    onTap: O,
                                  },
                                  MZXtSvVyy: {
                                    children: b(c, {
                                      children: b(T.h4, {
                                        className: `framer-styles-preset-17iimqy`,
                                        "data-styles-preset": `J9ImekJ0u`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                        },
                                        children: b(R, {
                                          href: { webPageId: `dMKNHnk2Y` },
                                          motionChild: !0,
                                          nodeId: `Pptf27Qip`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `fXjSyj5nJ`,
                                          smoothScroll: !1,
                                          children: b(T.a, {
                                            className: `framer-styles-preset-12trbhi`,
                                            "data-styles-preset": `ieVkatw_m`,
                                            children: `About`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                h,
                                y
                              ),
                            }),
                            b(N, {
                              __fromCanvasComponent: !0,
                              children: b(c, {
                                children: b(T.p, {
                                  className: `framer-styles-preset-19s0zy7`,
                                  "data-styles-preset": `qdRSnXZTB`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                  },
                                  children: b(R, {
                                    href: { webPageId: `QicDCMSoI` },
                                    motionChild: !0,
                                    nodeId: `JyxhHWQnm`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `fXjSyj5nJ`,
                                    smoothScroll: !1,
                                    children: b(T.a, {
                                      className: `framer-styles-preset-12trbhi`,
                                      "data-styles-preset": `ieVkatw_m`,
                                      children: `Services`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1fscg70`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `JyxhHWQnm`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                              },
                              variants: {
                                ibsmXBPia: {
                                  "--extracted-1eung3n": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                },
                                MZXtSvVyy: {
                                  "--extracted-1eung3n": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  ibsmXBPia: {
                                    "data-highlight": !0,
                                    children: b(c, {
                                      children: b(T.h4, {
                                        className: `framer-styles-preset-17iimqy`,
                                        "data-styles-preset": `J9ImekJ0u`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                        },
                                        children: b(R, {
                                          href: { webPageId: `QicDCMSoI` },
                                          motionChild: !0,
                                          nodeId: `JyxhHWQnm`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `fXjSyj5nJ`,
                                          smoothScroll: !1,
                                          children: b(T.a, {
                                            className: `framer-styles-preset-12trbhi`,
                                            "data-styles-preset": `ieVkatw_m`,
                                            children: `Services`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    onTap: O,
                                  },
                                  MZXtSvVyy: {
                                    children: b(c, {
                                      children: b(T.h4, {
                                        className: `framer-styles-preset-17iimqy`,
                                        "data-styles-preset": `J9ImekJ0u`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                        },
                                        children: b(R, {
                                          href: { webPageId: `QicDCMSoI` },
                                          motionChild: !0,
                                          nodeId: `JyxhHWQnm`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `fXjSyj5nJ`,
                                          smoothScroll: !1,
                                          children: b(T.a, {
                                            className: `framer-styles-preset-12trbhi`,
                                            "data-styles-preset": `ieVkatw_m`,
                                            children: `Services`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                h,
                                y
                              ),
                            }),
                            b(N, {
                              __fromCanvasComponent: !0,
                              children: b(c, {
                                children: b(T.p, {
                                  className: `framer-styles-preset-19s0zy7`,
                                  "data-styles-preset": `qdRSnXZTB`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                  },
                                  children: b(R, {
                                    href: { webPageId: `UlcsYB4QS` },
                                    motionChild: !0,
                                    nodeId: `G4KqE6zby`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `fXjSyj5nJ`,
                                    smoothScroll: !1,
                                    children: b(T.a, {
                                      className: `framer-styles-preset-12trbhi`,
                                      "data-styles-preset": `ieVkatw_m`,
                                      children: `Journal`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-6i2u5x`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `G4KqE6zby`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                              },
                              variants: {
                                ibsmXBPia: {
                                  "--extracted-1eung3n": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                },
                                MZXtSvVyy: {
                                  "--extracted-1eung3n": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  ibsmXBPia: {
                                    "data-highlight": !0,
                                    children: b(c, {
                                      children: b(T.h4, {
                                        className: `framer-styles-preset-17iimqy`,
                                        "data-styles-preset": `J9ImekJ0u`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                        },
                                        children: b(R, {
                                          href: { webPageId: `UlcsYB4QS` },
                                          motionChild: !0,
                                          nodeId: `G4KqE6zby`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `fXjSyj5nJ`,
                                          smoothScroll: !1,
                                          children: b(T.a, {
                                            className: `framer-styles-preset-12trbhi`,
                                            "data-styles-preset": `ieVkatw_m`,
                                            children: `Journal`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    onTap: O,
                                  },
                                  MZXtSvVyy: {
                                    children: b(c, {
                                      children: b(T.h4, {
                                        className: `framer-styles-preset-17iimqy`,
                                        "data-styles-preset": `J9ImekJ0u`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                        },
                                        children: b(R, {
                                          href: { webPageId: `UlcsYB4QS` },
                                          motionChild: !0,
                                          nodeId: `G4KqE6zby`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `fXjSyj5nJ`,
                                          smoothScroll: !1,
                                          children: b(T.a, {
                                            className: `framer-styles-preset-12trbhi`,
                                            "data-styles-preset": `ieVkatw_m`,
                                            children: `Journal`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                h,
                                y
                              ),
                            }),
                          ],
                        }),
                        b(T.div, {
                          className: `framer-mm21aa`,
                          "data-framer-name": `CTA Row`,
                          layoutDependency: w,
                          layoutId: `yyZJNv2oN`,
                          children:
                            k() &&
                            b(R, {
                              href: { webPageId: `EJQ48awkB` },
                              motionChild: !0,
                              nodeId: `FzU0bMdkh`,
                              scopeId: `fXjSyj5nJ`,
                              children: b(T.a, {
                                className: `framer-1cg7oz0 framer-rz5k4n`,
                                "data-framer-name": `CTA`,
                                layoutDependency: w,
                                layoutId: `FzU0bMdkh`,
                                style: {
                                  backgroundColor: `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                  borderBottomLeftRadius: 100,
                                  borderBottomRightRadius: 100,
                                  borderTopLeftRadius: 100,
                                  borderTopRightRadius: 100,
                                },
                                whileHover: Wt,
                                children: b(N, {
                                  __fromCanvasComponent: !0,
                                  children: b(c, {
                                    children: b(T.p, {
                                      className: `framer-styles-preset-19s0zy7`,
                                      "data-styles-preset": `qdRSnXZTB`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8))`,
                                      },
                                      children: `Let’s talk`,
                                    }),
                                  }),
                                  className: `framer-1ss1ta9`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `L6w0XRd0L`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-W9eMI.framer-rz5k4n, .framer-W9eMI .framer-rz5k4n { display: block; }`,
          `.framer-W9eMI.framer-2m9op3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 20px; position: relative; width: 1200px; }`,
          `.framer-W9eMI .framer-y2hvsd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 8px 8px 8px 22px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-W9eMI .framer-1bgnuel { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 44px; justify-content: space-between; padding: 0px; position: relative; width: min-content; }`,
          `.framer-W9eMI .framer-1mbu8ht { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-W9eMI .framer-1x14ldu-container { flex: none; height: 22px; position: relative; width: 22px; }`,
          `.framer-W9eMI .framer-1n9t70y, .framer-W9eMI .framer-erhcsl, .framer-W9eMI .framer-hu3e58, .framer-W9eMI .framer-1fscg70, .framer-W9eMI .framer-6i2u5x, .framer-W9eMI .framer-1ss1ta9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-W9eMI .framer-6bkqro { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 44px; justify-content: center; padding: 0px; position: relative; width: 44px; }`,
          `.framer-W9eMI .framer-17nn298 { flex: none; height: auto; position: relative; width: 22px; }`,
          `.framer-W9eMI .framer-fszfbm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
          `.framer-W9eMI .framer-mm21aa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
          `.framer-W9eMI .framer-1cg7oz0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 44px; justify-content: center; padding: 0px 22px 0px 22px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-W9eMI.framer-v-1nclda5.framer-2m9op3, .framer-W9eMI.framer-v-1qwvkc.framer-2m9op3 { padding: 12px 16px 12px 16px; width: 390px; }`,
          `.framer-W9eMI.framer-v-1nclda5 .framer-y2hvsd { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; flex-direction: column; gap: 0px; height: 60px; padding: 0px; width: 1px; }`,
          `.framer-W9eMI.framer-v-1nclda5 .framer-1bgnuel, .framer-W9eMI.framer-v-1qwvkc .framer-1bgnuel { height: 60px; padding: 0px 8px 0px 20px; width: 100%; }`,
          `.framer-W9eMI.framer-v-1nclda5 .framer-fszfbm, .framer-W9eMI.framer-v-1qwvkc .framer-fszfbm { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 14px; padding: 14px 20px 8px 20px; width: 100%; }`,
          `.framer-W9eMI.framer-v-1nclda5 .framer-mm21aa { padding: 12px 20px 20px 20px; width: 100%; }`,
          `.framer-W9eMI.framer-v-1qwvkc .framer-y2hvsd { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; flex-direction: column; gap: 0px; padding: 0px; width: 1px; }`,
          `.framer-W9eMI.framer-v-1qwvkc .framer-erhcsl, .framer-W9eMI.framer-v-1qwvkc .framer-hu3e58, .framer-W9eMI.framer-v-1qwvkc .framer-1fscg70, .framer-W9eMI.framer-v-1qwvkc .framer-6i2u5x { cursor: pointer; }`,
          `.framer-W9eMI.framer-v-1qwvkc .framer-mm21aa { min-height: 76px; padding: 12px 20px 20px 20px; width: 100%; }`,
          ...Be,
          ...It,
          ...Qe,
          `.framer-W9eMI[data-border="true"]::after, .framer-W9eMI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-W9eMI`
      )),
      (J.displayName = `Navigation`),
      (J.defaultProps = { height: 100, width: 1200 }),
      Ce(J, {
        variant: {
          options: [`ZzFPxSP3u`, `MZXtSvVyy`, `ibsmXBPia`],
          optionTitles: [`Desktop`, `Phone`, `Phone Open`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      ue(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Anton`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Anton`,
                url: `../../assets/misc/PCXT6E5YCQO6SSVLT6UZPPGT7QKGXOUS.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...zt,
          ...A(Ke),
          ...A(Ft),
          ...A($e),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  Y,
  sn = e(() => {
    (S(),
      j(),
      D(),
      w(),
      (Qt = { ej1plYMP_: { pressed: !0 } }),
      ($t = `framer-qyHiu`),
      (en = { ej1plYMP_: `framer-v-9tbdi6` }),
      (tn = { bounce: 0.2, delay: 0, duration: 0.3, type: `spring` }),
      (nn = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = _(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return b(E.Provider, { value: a, children: n });
      }),
      (rn = T.create(c)),
      (an = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (on = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = V(
        x(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = I();
          Te();
          let { style: l, className: u, layoutId: d, variant: f, ...m } = an(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: ee,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: y,
              setGestureState: x,
              setVariant: te,
              variants: S,
            } = oe({
              defaultVariant: `ej1plYMP_`,
              enabledGestures: Qt,
              ref: i,
              variant: f,
              variantClassNames: en,
            }),
            C = on(e, S),
            w = M($t);
          return b(re, {
            id: d ?? a,
            children: b(rn, {
              animate: S,
              initial: !1,
              children: b(nn, {
                value: tn,
                children: b(T.div, {
                  ...m,
                  ..._,
                  className: M(w, `framer-9tbdi6`, u, g),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  layoutDependency: C,
                  layoutId: `ej1plYMP_`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1.5px`,
                    "--border-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                    "--border-left-width": `1.5px`,
                    "--border-right-width": `1.5px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1.5px`,
                    backgroundColor: `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...l,
                  },
                  variants: {
                    "ej1plYMP_-pressed": {
                      backgroundColor: `var(--token-ff4012e0-4cb5-4140-876f-6444e9a1c1a8)`,
                    },
                  },
                  ...Zt({ "ej1plYMP_-pressed": { "data-framer-name": void 0 } }, h, v),
                  children: b(N, {
                    __fromCanvasComponent: !0,
                    children: b(c, {
                      children: b(T.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS04MDA=`,
                          "--framer-font-family": `"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif`,
                          "--framer-font-size": `15px`,
                          "--framer-font-weight": `800`,
                          "--framer-line-height": `1em`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8))`,
                        },
                        children: `You`,
                      }),
                    }),
                    className: `framer-phc51r`,
                    fonts: [`GF;Bricolage Grotesque-800`],
                    layoutDependency: C,
                    layoutId: `AEwWK6XVT`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-qyHiu.framer-1s5inf5, .framer-qyHiu .framer-1s5inf5 { display: block; }`,
          `.framer-qyHiu.framer-9tbdi6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 7px 14px 7px 14px; position: relative; width: min-content; }`,
          `.framer-qyHiu .framer-phc51r { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-qyHiu[data-border="true"]::after, .framer-qyHiu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-qyHiu`
      )),
      (Y.displayName = `Cursor`),
      (Y.defaultProps = { height: 200, width: 200 }),
      ue(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Bricolage Grotesque`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Bricolage Grotesque`,
                url: `../../assets/fonts/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvZvlyMg-792489.woff2`,
                weight: `800`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  cn,
  ln,
  un,
  dn = e(() => {
    (j(),
      fe.loadFonts([]),
      (cn = [{ explicitInter: !0, fonts: [] }]),
      (ln = [
        `.framer-lne1A .framer-styles-preset-t230tc:not(.rich-text-wrapper), .framer-lne1A .framer-styles-preset-t230tc.rich-text-wrapper a { --framer-link-current-text-color: #5546ff; --framer-link-hover-text-color: #5546ff; --framer-link-text-color: #17143a; --framer-link-text-decoration: none; transition-delay: 0s; transition-duration: 0.2s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (un = `framer-lne1A`));
  }),
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  X,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  Z,
  jn = e(() => {
    (S(),
      j(),
      D(),
      w(),
      Xe(),
      Xt(),
      sn(),
      Ve(),
      tt(),
      Ye(),
      at(),
      Ge(),
      lt(),
      pt(),
      _t(),
      dn(),
      (fn = P(J)),
      (pn = P(W)),
      (mn = we(T.div)),
      (hn = P(U)),
      (gn = P(Y)),
      (_n = {
        f4PD0cHXE: `(min-width: 1200px)`,
        Mpemekh28: `(min-width: 810px) and (max-width: 1199.98px)`,
        TjhipJhav: `(max-width: 809.98px)`,
      }),
      (vn = `framer-gHn9Q`),
      (yn = {
        f4PD0cHXE: `framer-v-tqfl3z`,
        Mpemekh28: `framer-v-15tmqsi`,
        TjhipJhav: `framer-v-1baeha3`,
      }),
      (bn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (X = {
        Mpemekh28: [
          `.framer-gHn9Q .framer-axxc74-container, .framer-gHn9Q .framer-1g9j122-container, .framer-gHn9Q .framer-d8jyrj-container { height: 90px; width: 90px; }`,
          `.framer-gHn9Q .framer-b5uevk { gap: 48px; padding: 64px 32px 28px 32px; }`,
          `.framer-gHn9Q .framer-jyhp67 { flex-direction: column; gap: 40px; }`,
          `.framer-gHn9Q .framer-prjgh6 { flex: none; width: 100%; }`,
        ],
        TjhipJhav: [
          `.framer-gHn9Q .framer-14hfm27 { padding: 14px 0px 14px 0px; }`,
          `.framer-gHn9Q .framer-e1wake { gap: 28px; }`,
          `.framer-gHn9Q .framer-axxc74-container, .framer-gHn9Q .framer-1g9j122-container, .framer-gHn9Q .framer-d8jyrj-container { height: 64px; width: 64px; }`,
          `.framer-gHn9Q .framer-b5uevk { gap: 40px; padding: 56px 20px 24px 20px; }`,
          `.framer-gHn9Q .framer-jyhp67 { flex-direction: column; gap: 36px; }`,
          `.framer-gHn9Q .framer-prjgh6 { flex: none; width: 100%; }`,
          `.framer-gHn9Q .framer-9abx8t { flex-wrap: wrap; gap: 32px 40px; width: 100%; }`,
          `.framer-gHn9Q .framer-1pztl9j { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 8px; justify-content: flex-start; }`,
          `.framer-gHn9Q .framer-jof68u, .framer-gHn9Q .framer-amr8cd { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ],
      }),
      (xn = Object.keys(X)),
      (Sn = { Mpemekh28: `.framer-15tmqsi-override`, TjhipJhav: `.framer-1baeha3-override` }),
      (Cn = [
        `.framer-gHn9Q.framer-1nwi3up, .framer-gHn9Q .framer-1nwi3up { display: block; }`,
        `.framer-gHn9Q.framer-tqfl3z { align-content: center; align-items: center; background-color: var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-gHn9Q .framer-1a6fjww-container { flex: none; height: auto; order: -1000; position: sticky; top: 0px; width: 100%; z-index: 9; }`,
        `.framer-gHn9Q .framer-1ct7zx3 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-gHn9Q .framer-11x7bn { align-content: center; align-items: center; background-color: var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; order: 1002; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-gHn9Q .framer-14hfm27 { align-content: center; align-items: center; background-color: var(--token-ce59bd3f-54d8-47fe-8956-3b95dcc87cd5); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 22px 0px 22px 0px; position: relative; width: 100%; }`,
        `.framer-gHn9Q .framer-e1wake { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-gHn9Q .framer-1kj8esh, .framer-gHn9Q .framer-mt1zbg, .framer-gHn9Q .framer-171l29y, .framer-gHn9Q .framer-1telynx, .framer-gHn9Q .framer-1r9xr5k, .framer-gHn9Q .framer-18reaz5, .framer-gHn9Q .framer-svgyem, .framer-gHn9Q .framer-jof68u, .framer-gHn9Q .framer-amr8cd { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-gHn9Q .framer-axxc74-container, .framer-gHn9Q .framer-1g9j122-container, .framer-gHn9Q .framer-d8jyrj-container { flex: none; height: 120px; position: relative; width: 120px; }`,
        `.framer-gHn9Q .framer-b5uevk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; max-width: 1440px; padding: 80px 40px 32px 40px; position: relative; width: 100%; }`,
        `.framer-gHn9Q .framer-jyhp67 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-gHn9Q .framer-prjgh6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-gHn9Q .framer-1u1qy17, .framer-gHn9Q .framer-1avbfci, .framer-gHn9Q .framer-1ku2baf, .framer-gHn9Q .framer-17pfiiv, .framer-gHn9Q .framer-h6jmoe, .framer-gHn9Q .framer-f8kw0c, .framer-gHn9Q .framer-1mzo6nt, .framer-gHn9Q .framer-dv945i, .framer-gHn9Q .framer-1ttu6lh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-gHn9Q .framer-eac4nw { flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-gHn9Q .framer-9abx8t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-gHn9Q .framer-14f9h6z, .framer-gHn9Q .framer-10kfx1p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 150px; }`,
        `.framer-gHn9Q .framer-pr6t89, .framer-gHn9Q .framer-1hvjdks, .framer-gHn9Q .framer-q7xhg4 { flex: none; height: auto; opacity: 0.6; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-gHn9Q .framer-1b3fa1t, .framer-gHn9Q .framer-qtoftn, .framer-gHn9Q .framer-ydueoz, .framer-gHn9Q .framer-185gesv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-gHn9Q .framer-dheaib, .framer-gHn9Q .framer-1cup09q, .framer-gHn9Q .framer-14hhchj, .framer-gHn9Q .framer-8y89nm { --1m6trwb: 0; --21h8s6: var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8); --pgex8v: 2; flex: none; height: auto; position: relative; width: 16px; }`,
        `.framer-gHn9Q .framer-195rhrt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 200px; }`,
        `.framer-gHn9Q .framer-1pztl9j { --border-bottom-width: 0px; --border-color: var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1.5px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; padding: 24px 0px 0px 0px; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...nt,
        ...vt,
        ...He,
        ...mt,
        ...ut,
        ...Re,
        ...ln,
        ...ot,
        `.framer-gHn9Q[data-border="true"]::after, .framer-gHn9Q [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (wn = {
        f4PD0cHXE: `(min-width: 1200px)`,
        Mpemekh28: `(min-width: 810px) and (max-width: 1199.98px)`,
        TjhipJhav: `(max-width: 809.98px)`,
      }),
      (Tn = { Desktop: `f4PD0cHXE`, Phone: `TjhipJhav`, Tablet: `Mpemekh28` }),
      (En = ({ value: e }) =>
        De()
          ? null
          : b(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Dn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Tn[r.variant] ?? r.variant ?? `f4PD0cHXE`,
      })),
      (On = {
        alignment: `start`,
        component: Y,
        offset: { x: 14, y: 14 },
        placement: `bottom`,
        variant: `ej1plYMP_`,
      }),
      (kn = x(function (e, t) {
        let r = p(null),
          i = t ?? r,
          a = n(),
          { activeLocale: o, setLocale: s } = I(),
          { style: l, className: u, layoutId: d, variant: f, children: m, ...h } = Dn(e),
          [g, ee] = ke(f, _n, !1),
          _ = M(vn, it, bt, qe, gt, ft, Je, un, ct);
        return (
          be({ "1tmpbqy": On }),
          b(_e.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: Tn,
              isLayoutTemplate: !0,
              primaryVariantId: `f4PD0cHXE`,
              variantClassNames: yn,
            },
            children: v(re, {
              id: d ?? a,
              children: [
                b(En, {
                  value: `:root body { background: var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1); }`,
                }),
                v(T.div, {
                  ...h,
                  className: M(_, `framer-tqfl3z`, u),
                  "data-framer-cursor": `1tmpbqy`,
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...l },
                  children: [
                    b(z, {
                      height: 100,
                      width: `100vw`,
                      children: b(L, {
                        className: `framer-1a6fjww-container`,
                        "data-framer-name": `Navigation`,
                        name: `Navigation`,
                        nodeId: `KtGzkQBO3`,
                        scopeId: `hUwicY1C1`,
                        children: b(H, {
                          breakpoint: g,
                          overrides: { TjhipJhav: { variant: bn(`MZXtSvVyy`) } },
                          children: b(J, {
                            height: `100%`,
                            id: `KtGzkQBO3`,
                            layoutId: `KtGzkQBO3`,
                            name: `Navigation`,
                            style: { width: `100%` },
                            variant: bn(`ZzFPxSP3u`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    m,
                    b(`div`, { className: `framer-1ct7zx3` }),
                    v(T.footer, {
                      className: `framer-11x7bn`,
                      "data-framer-name": `Footer`,
                      children: [
                        b(`div`, {
                          className: `framer-14hfm27`,
                          "data-framer-name": `Ticker Band`,
                          children: b(H, {
                            breakpoint: g,
                            overrides: { TjhipJhav: { tickerEffectGap: `28px` } },
                            children: v(mn, {
                              className: `framer-e1wake`,
                              "data-framer-name": `Ticker`,
                              tickerEffectAlign: `center`,
                              tickerEffectDirectionModifier: `default`,
                              tickerEffectDraggable: !1,
                              tickerEffectEnabled: !0,
                              tickerEffectGap: `48px`,
                              tickerEffectHoverModifier: 50,
                              tickerEffectOverflow: `clip`,
                              tickerEffectPosition: `relative`,
                              tickerEffectStackDirection: `row`,
                              tickerEffectVelocity: 70,
                              children: [
                                b(k, {
                                  children: b(N, {
                                    __fromCanvasComponent: !0,
                                    children: b(c, {
                                      children: b(`p`, {
                                        className: `framer-styles-preset-13dhphb`,
                                        "data-styles-preset": `FojkW_dWA`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1)`,
                                        },
                                        children: `DHIANA`,
                                      }),
                                    }),
                                    className: `framer-1kj8esh`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                b(k, {
                                  children: b(z, {
                                    children: b(L, {
                                      className: `framer-axxc74-container`,
                                      "data-code-component-plugin-id": `api`,
                                      isAuthoredByUser: !0,
                                      nodeId: `yZ6IIpIR0`,
                                      scopeId: `hUwicY1C1`,
                                      children: b(W, {
                                        color: `var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1)`,
                                        duration: 12,
                                        face: !1,
                                        faceColor: `rgb(15, 45, 36)`,
                                        height: `100%`,
                                        id: `yZ6IIpIR0`,
                                        layoutId: `yZ6IIpIR0`,
                                        outline: `rgb(15, 45, 36)`,
                                        outlineWidth: 0,
                                        reverse: !1,
                                        shape: `flower`,
                                        spin: !0,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                b(k, {
                                  children: b(N, {
                                    __fromCanvasComponent: !0,
                                    children: b(c, {
                                      children: b(`p`, {
                                        className: `framer-styles-preset-13dhphb`,
                                        "data-styles-preset": `FojkW_dWA`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1)`,
                                        },
                                        children: `DHIANA`,
                                      }),
                                    }),
                                    className: `framer-mt1zbg`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                b(k, {
                                  children: b(z, {
                                    children: b(L, {
                                      className: `framer-1g9j122-container`,
                                      "data-code-component-plugin-id": `api`,
                                      isAuthoredByUser: !0,
                                      nodeId: `w1DPoSgLQ`,
                                      scopeId: `hUwicY1C1`,
                                      children: b(W, {
                                        color: `var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1)`,
                                        duration: 12,
                                        face: !1,
                                        faceColor: `rgb(15, 45, 36)`,
                                        height: `100%`,
                                        id: `w1DPoSgLQ`,
                                        layoutId: `w1DPoSgLQ`,
                                        outline: `rgb(15, 45, 36)`,
                                        outlineWidth: 0,
                                        reverse: !1,
                                        shape: `burst`,
                                        spin: !0,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                b(k, {
                                  children: b(N, {
                                    __fromCanvasComponent: !0,
                                    children: b(c, {
                                      children: b(`p`, {
                                        className: `framer-styles-preset-13dhphb`,
                                        "data-styles-preset": `FojkW_dWA`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1)`,
                                        },
                                        children: `DHIANA`,
                                      }),
                                    }),
                                    className: `framer-171l29y`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                b(k, {
                                  children: b(z, {
                                    children: b(L, {
                                      className: `framer-d8jyrj-container`,
                                      "data-code-component-plugin-id": `api`,
                                      isAuthoredByUser: !0,
                                      nodeId: `rBbGDhC1R`,
                                      scopeId: `hUwicY1C1`,
                                      children: b(W, {
                                        color: `var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1)`,
                                        duration: 12,
                                        face: !1,
                                        faceColor: `rgb(15, 45, 36)`,
                                        height: `100%`,
                                        id: `rBbGDhC1R`,
                                        layoutId: `rBbGDhC1R`,
                                        outline: `rgb(15, 45, 36)`,
                                        outlineWidth: 0,
                                        reverse: !1,
                                        shape: `clover`,
                                        spin: !0,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        v(`div`, {
                          className: `framer-b5uevk`,
                          "data-framer-name": `Footer Main`,
                          children: [
                            v(`div`, {
                              className: `framer-jyhp67`,
                              "data-framer-name": `Columns`,
                              children: [
                                v(`div`, {
                                  className: `framer-prjgh6`,
                                  "data-framer-name": `Brand`,
                                  children: [
                                    b(N, {
                                      __fromCanvasComponent: !0,
                                      children: b(c, {
                                        children: b(`h2`, {
                                          className: `framer-styles-preset-184ln75`,
                                          "data-styles-preset": `xTRXUmiRw`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                          },
                                          children: `DHIANA`,
                                        }),
                                      }),
                                      className: `framer-1u1qy17`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    b(N, {
                                      __fromCanvasComponent: !0,
                                      children: b(c, {
                                        children: b(`p`, {
                                          className: `framer-styles-preset-u4yd6w`,
                                          "data-styles-preset": `nLXWtZRpy`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                          },
                                          children: `Software Engineering student, Mobile App Developer, and UI/UX Designer creating distinctive digital products.`,
                                        }),
                                      }),
                                      className: `framer-eac4nw`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    b(N, {
                                      __fromCanvasComponent: !0,
                                      children: b(c, {
                                        children: b(`h3`, {
                                          className: `framer-styles-preset-mbakc`,
                                          "data-styles-preset": `vvB5RB1ER`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                          },
                                          children: b(R, {
                                            href: `mailto:apriantinadhiana@gmail.com`,
                                            motionChild: !0,
                                            nodeId: `SX2elRIb2`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `hUwicY1C1`,
                                            smoothScroll: !1,
                                            children: b(T.a, {
                                              className: `framer-styles-preset-31rxaj`,
                                              "data-styles-preset": `tTNyGyLUh`,
                                              children: `apriantinadhiana@gmail.com`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1avbfci`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                v(`div`, {
                                  className: `framer-9abx8t`,
                                  "data-framer-name": `Link Columns`,
                                  children: [
                                    v(`div`, {
                                      className: `framer-14f9h6z`,
                                      "data-framer-name": `Explore`,
                                      children: [
                                        b(N, {
                                          __fromCanvasComponent: !0,
                                          children: b(c, {
                                            children: b(`p`, {
                                              className: `framer-styles-preset-f38zr3`,
                                              "data-styles-preset": `KYasCCnOZ`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                              },
                                              children: `Explore`,
                                            }),
                                          }),
                                          className: `framer-pr6t89`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        b(N, {
                                          __fromCanvasComponent: !0,
                                          children: b(c, {
                                            children: b(`p`, {
                                              className: `framer-styles-preset-u4yd6w`,
                                              "data-styles-preset": `nLXWtZRpy`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                              },
                                              children: b(R, {
                                                href: { webPageId: `XojRWmbxf` },
                                                motionChild: !0,
                                                nodeId: `BzVKElQ2Z`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `hUwicY1C1`,
                                                smoothScroll: !1,
                                                children: b(T.a, {
                                                  className: `framer-styles-preset-t230tc`,
                                                  "data-styles-preset": `YILWIN5ot`,
                                                  children: `Work`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1ku2baf`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        b(N, {
                                          __fromCanvasComponent: !0,
                                          children: b(c, {
                                            children: b(`p`, {
                                              className: `framer-styles-preset-u4yd6w`,
                                              "data-styles-preset": `nLXWtZRpy`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                              },
                                              children: b(R, {
                                                href: { webPageId: `dMKNHnk2Y` },
                                                motionChild: !0,
                                                nodeId: `h0Mdb4GwH`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `hUwicY1C1`,
                                                smoothScroll: !1,
                                                children: b(T.a, {
                                                  className: `framer-styles-preset-t230tc`,
                                                  "data-styles-preset": `YILWIN5ot`,
                                                  children: `About`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-17pfiiv`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        b(N, {
                                          __fromCanvasComponent: !0,
                                          children: b(c, {
                                            children: b(`p`, {
                                              className: `framer-styles-preset-u4yd6w`,
                                              "data-styles-preset": `nLXWtZRpy`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                              },
                                              children: b(R, {
                                                href: { webPageId: `QicDCMSoI` },
                                                motionChild: !0,
                                                nodeId: `BY7f3AEMs`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `hUwicY1C1`,
                                                smoothScroll: !1,
                                                children: b(T.a, {
                                                  className: `framer-styles-preset-t230tc`,
                                                  "data-styles-preset": `YILWIN5ot`,
                                                  children: `Services`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-h6jmoe`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        b(N, {
                                          __fromCanvasComponent: !0,
                                          children: b(c, {
                                            children: b(`p`, {
                                              className: `framer-styles-preset-u4yd6w`,
                                              "data-styles-preset": `nLXWtZRpy`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                              },
                                              children: b(R, {
                                                href: { webPageId: `UlcsYB4QS` },
                                                motionChild: !0,
                                                nodeId: `iDakJucsC`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `hUwicY1C1`,
                                                smoothScroll: !1,
                                                children: b(T.a, {
                                                  className: `framer-styles-preset-t230tc`,
                                                  "data-styles-preset": `YILWIN5ot`,
                                                  children: `Journal`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-f8kw0c`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        b(N, {
                                          __fromCanvasComponent: !0,
                                          children: b(c, {
                                            children: b(`p`, {
                                              className: `framer-styles-preset-u4yd6w`,
                                              "data-styles-preset": `nLXWtZRpy`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                              },
                                              children: b(R, {
                                                href: { webPageId: `EJQ48awkB` },
                                                motionChild: !0,
                                                nodeId: `FChfMP1XQ`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `hUwicY1C1`,
                                                smoothScroll: !1,
                                                children: b(T.a, {
                                                  className: `framer-styles-preset-t230tc`,
                                                  "data-styles-preset": `YILWIN5ot`,
                                                  children: `Contact`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1mzo6nt`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    v(`div`, {
                                      className: `framer-10kfx1p`,
                                      "data-framer-name": `Social`,
                                      children: [
                                        b(N, {
                                          __fromCanvasComponent: !0,
                                          children: b(c, {
                                            children: b(`p`, {
                                              className: `framer-styles-preset-f38zr3`,
                                              "data-styles-preset": `KYasCCnOZ`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                              },
                                              children: `Social`,
                                            }),
                                          }),
                                          className: `framer-1hvjdks`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        v(`div`, {
                                          className: `framer-1b3fa1t`,
                                          "data-framer-name": `Instagram`,
                                          children: [
                                            b(N, {
                                              __fromCanvasComponent: !0,
                                              children: b(c, {
                                                children: b(`p`, {
                                                  className: `framer-styles-preset-u4yd6w`,
                                                  "data-styles-preset": `nLXWtZRpy`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                                  },
                                                  children: b(R, {
                                                    href: `https://www.instagram.com/_dhriaen`,
                                                    motionChild: !0,
                                                    nodeId: `u3u8uwFgZ`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `hUwicY1C1`,
                                                    smoothScroll: !1,
                                                    children: b(T.a, {
                                                      className: `framer-styles-preset-t230tc`,
                                                      "data-styles-preset": `YILWIN5ot`,
                                                      children: `Instagram`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1telynx`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            b(U, {
                                              animated: !1,
                                              className: `framer-dheaib`,
                                              ezTt3ayMo: !0,
                                              layoutId: `PZmEXkqgx`,
                                              lschgej4H: !0,
                                              qxTvv_EBh: !0,
                                            }),
                                          ],
                                        }),
                                        v(`div`, {
                                          className: `framer-qtoftn`,
                                          "data-framer-name": `GitHub`,
                                          children: [
                                            b(N, {
                                              __fromCanvasComponent: !0,
                                              children: b(c, {
                                                children: b(`p`, {
                                                  className: `framer-styles-preset-u4yd6w`,
                                                  "data-styles-preset": `nLXWtZRpy`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                                  },
                                                  children: b(R, {
                                                    href: `https://github.com/dhianaaa`,
                                                    motionChild: !0,
                                                    nodeId: `ydMPkbMzW`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `hUwicY1C1`,
                                                    smoothScroll: !1,
                                                    children: b(T.a, {
                                                      className: `framer-styles-preset-t230tc`,
                                                      "data-styles-preset": `YILWIN5ot`,
                                                      children: `GitHub`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1r9xr5k`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            b(U, {
                                              animated: !1,
                                              className: `framer-1cup09q`,
                                              ezTt3ayMo: !0,
                                              layoutId: `wxBjSpepY`,
                                              lschgej4H: !0,
                                              qxTvv_EBh: !0,
                                            }),
                                          ],
                                        }),
                                        v(`div`, {
                                          className: `framer-ydueoz`,
                                          "data-framer-name": `Dribbble`,
                                          children: [
                                            b(N, {
                                              __fromCanvasComponent: !0,
                                              children: b(c, {
                                                children: b(`p`, {
                                                  className: `framer-styles-preset-u4yd6w`,
                                                  "data-styles-preset": `nLXWtZRpy`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                                  },
                                                  children: b(R, {
                                                    href: `https://dribbble.com/`,
                                                    motionChild: !0,
                                                    nodeId: `RyL7v7z6z`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `hUwicY1C1`,
                                                    smoothScroll: !1,
                                                    children: b(T.a, {
                                                      className: `framer-styles-preset-t230tc`,
                                                      "data-styles-preset": `YILWIN5ot`,
                                                      children: `Dribbble`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-18reaz5`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            b(U, {
                                              animated: !1,
                                              className: `framer-14hhchj`,
                                              ezTt3ayMo: !0,
                                              layoutId: `wTBoYS5g5`,
                                              lschgej4H: !0,
                                              qxTvv_EBh: !0,
                                            }),
                                          ],
                                        }),
                                        v(`div`, {
                                          className: `framer-185gesv`,
                                          "data-framer-name": `LinkedIn`,
                                          children: [
                                            b(N, {
                                              __fromCanvasComponent: !0,
                                              children: b(c, {
                                                children: b(`p`, {
                                                  className: `framer-styles-preset-u4yd6w`,
                                                  "data-styles-preset": `nLXWtZRpy`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                                  },
                                                  children: b(R, {
                                                    href: `https://www.linkedin.com/in/adhiana-alika-9baaa72aa`,
                                                    motionChild: !0,
                                                    nodeId: `PisPGEOsj`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `hUwicY1C1`,
                                                    smoothScroll: !1,
                                                    children: b(T.a, {
                                                      className: `framer-styles-preset-t230tc`,
                                                      "data-styles-preset": `YILWIN5ot`,
                                                      children: `LinkedIn`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-svgyem`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            b(U, {
                                              animated: !1,
                                              className: `framer-8y89nm`,
                                              ezTt3ayMo: !0,
                                              layoutId: `kuJwQerXS`,
                                              lschgej4H: !0,
                                              qxTvv_EBh: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    v(`div`, {
                                      className: `framer-195rhrt`,
                                      "data-framer-name": `Contact`,
                                      children: [
                                        b(N, {
                                          __fromCanvasComponent: !0,
                                          children: b(c, {
                                            children: b(`p`, {
                                              className: `framer-styles-preset-f38zr3`,
                                              "data-styles-preset": `KYasCCnOZ`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                              },
                                              children: `Contact`,
                                            }),
                                          }),
                                          className: `framer-q7xhg4`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        b(N, {
                                          __fromCanvasComponent: !0,
                                          children: b(c, {
                                            children: b(`p`, {
                                              className: `framer-styles-preset-u4yd6w`,
                                              "data-styles-preset": `nLXWtZRpy`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                              },
                                              children: b(R, {
                                                href: `mailto:apriantinadhiana@gmail.com`,
                                                motionChild: !0,
                                                nodeId: `g8vOwPAuE`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `hUwicY1C1`,
                                                smoothScroll: !1,
                                                children: b(T.a, {
                                                  className: `framer-styles-preset-t230tc`,
                                                  "data-styles-preset": `YILWIN5ot`,
                                                  children: `apriantinadhiana@gmail.com`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-dv945i`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        b(N, {
                                          __fromCanvasComponent: !0,
                                          children: b(c, {
                                            children: b(`p`, {
                                              className: `framer-styles-preset-u4yd6w`,
                                              "data-styles-preset": `nLXWtZRpy`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                              },
                                              children: b(R, {
                                                href: { webPageId: `EJQ48awkB` },
                                                motionChild: !0,
                                                nodeId: `QFC84OD4r`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `hUwicY1C1`,
                                                smoothScroll: !1,
                                                children: b(T.a, {
                                                  className: `framer-styles-preset-t230tc`,
                                                  "data-styles-preset": `YILWIN5ot`,
                                                  children: `Malang, Indonesia — Worldwide`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1ttu6lh`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            v(`div`, {
                              className: `framer-1pztl9j`,
                              "data-border": !0,
                              "data-framer-name": `Legal`,
                              children: [
                                b(H, {
                                  breakpoint: g,
                                  overrides: {
                                    TjhipJhav: {
                                      children: b(c, {
                                        children: b(`p`, {
                                          className: `framer-styles-preset-x0jte0`,
                                          "data-styles-preset": `lZS6BJmxQ`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                          },
                                          children: `© 2026 DHIANA All rights reserved.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: b(N, {
                                    __fromCanvasComponent: !0,
                                    children: b(c, {
                                      children: b(`p`, {
                                        className: `framer-styles-preset-x0jte0`,
                                        "data-styles-preset": `lZS6BJmxQ`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                        },
                                        children: `© 2026 DHIANA All rights reserved.`,
                                      }),
                                    }),
                                    className: `framer-jof68u`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                b(H, {
                                  breakpoint: g,
                                  overrides: {
                                    TjhipJhav: {
                                      children: b(c, {
                                        children: b(`p`, {
                                          className: `framer-styles-preset-x0jte0`,
                                          "data-styles-preset": `lZS6BJmxQ`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                          },
                                          children: `Designed & crafted with intention.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: b(N, {
                                    __fromCanvasComponent: !0,
                                    children: b(c, {
                                      children: b(`p`, {
                                        className: `framer-styles-preset-x0jte0`,
                                        "data-styles-preset": `lZS6BJmxQ`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                        },
                                        children: `Designed & crafted with intention.`,
                                      }),
                                    }),
                                    className: `framer-amr8cd`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                b(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (An = (e) =>
        e === O.canvas || e === O.export
          ? [
              ...Cn,
              ...xn.flatMap((e) => {
                let t = Sn[e];
                return X[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Cn, ...xn.map((e) => `@media ${wn[e]} { ${X[e].join(` `)} }`)]),
      (Z = V(kn, An, `framer-gHn9Q`)),
      (Z.displayName = `Main Layout`),
      (Z.defaultProps = { height: 1e3, width: 1200 }),
      ue(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...fn,
          ...pn,
          ...hn,
          ...gn,
          ...A(rt),
          ...A(yt),
          ...A(Le),
          ...A(ht),
          ...A(dt),
          ...A(Ue),
          ...A(cn),
          ...A(st),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Z.loader = { load: (e, t) => Oe([() => ce(J, {}, t)], t) }));
  });
function Mn({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `XojRWmbxf`:
    case `dMKNHnk2Y`:
    case `QicDCMSoI`:
    case `UlcsYB4QS`:
    case `EJQ48awkB`:
    case `kqpXhl63R`:
    case `vB7lLUdqR`:
    case `m_bMs4OBp`:
      return m(Z, { ...i, key: `MainLayout`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function Nn(e) {
  switch (e) {
    case `augiA20Il`:
    case `XojRWmbxf`:
    case `dMKNHnk2Y`:
    case `QicDCMSoI`:
    case `UlcsYB4QS`:
    case `EJQ48awkB`:
    case `kqpXhl63R`:
    case `vB7lLUdqR`:
    case `m_bMs4OBp`:
      return [
        { hash: `tqfl3z`, mediaQuery: `(min-width: 1200px)` },
        { hash: `15tmqsi`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1baeha3`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function Pn({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: n,
  localeId: i,
  collectionItemId: a,
  contentLocaleId: o,
  shouldResolveInitialRouteContentState: f = !1,
}) {
  let h = Q[e].page.preload();
  (me({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    Se(Bn));
  let g = m(Pe, {
    children: m(ye, {
      children: m(Ie, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: n,
        routes: Q,
        collectionUtils: Rn,
        serverDatabaseClient: zn,
        framerSiteId: Bn,
        notFoundPage: F(() => import("./I9AOT8rQDtgAYiF2wZdvKd5obzp9vo3Jd9x_jiZdCW4.DO76nP_B.mjs")),
        isReducedMotion: void 0,
        localeId: i,
        locales: Ln,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://varen.framer.website`,
        EditorBar:
          l === void 0
            ? void 0
            : (() => {
                if (Vn) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return F(async () => {
                  l.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: ve, useLocaleInfo: I, useRouter: he },
                    react: {
                      createElement: m,
                      Fragment: c,
                      memo: u,
                      useCallback: s,
                      useEffect: ne,
                      useRef: p,
                      useState: d,
                      useLayoutEffect: r,
                    },
                    "react-dom": { createPortal: ee },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: Mn,
        loadSnippetsModule: new xe(
          () => import("./cTloYfwTUMQbx1g1jYdC74zkKtvprDnaW87qop6mPhc.wFUEeHC7.mjs")
        ),
        initialCollectionItemId: a,
        initialContentLocaleIdOverride: o,
      }),
    }),
    value: { routes: {} },
  });
  return (await h, g);
}
function Fn() {
  $ && l.__framer_events.push(arguments);
}
async function In(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || l.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    Fn(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, s, c, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (i = d.localeId),
        (a = d.contentLocaleId),
        (s = d.pathVariables),
        (c = d.canonicalPathVariables),
        (u = d.breakpoints),
        (r = ie(Q, r)));
    else {
      ie(Q, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = le(Q, decodeURIComponent(location.pathname), !0, Ln);
        ((r = e.routeId), (i = e.localeId), (s = e.pathVariables));
      }
    }
    let f = Pn({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: s,
      canonicalPathVariables: c,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    l !== void 0 &&
      (async () => {
        let e = Q[r],
          t = Ln.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Rn) {
          let r = await Rn[e.collectionId]?.(),
            [i] = Object.values(s);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          o = a.timeZone,
          c = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          l.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Bn,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: l.location.href,
              hostname: l.location.hostname || null,
              pathname: l.location.pathname || null,
              hash: l.location.hash || null,
              search: l.location.search || null,
              timezone: o,
              locale: c,
            },
            `eager`,
          ]),
          await ae({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (de(`framer-rewrite-breakpoints`, () => {
          (Ne(u), l.__framer_onRewriteBreakpoints?.(u));
        }),
        (Vn ? (e) => e() : o)(() => {
          (pe(), Me(), C(t, p, { onRecoverableError: n }));
        }))
      : te(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Q, Ln, Rn, zn, Bn, $, Vn;
e(() => {
  if (
    (i(),
    j(),
    w(),
    f(),
    y(),
    jn(),
    (Q = {
      augiA20Il: {
        elements: {},
        page: F(() => import("./ELMUbl1Ac011JxLFOdOd4ij1jATZsPysQl9wRYwM7oc.BJZ9tZsQ.mjs")),
        path: `/`,
      },
      XojRWmbxf: {
        elements: {},
        page: F(() => import("./Eo7UHq7K83hJwo_xxl2QL2Gp_YYP4EKcfQnuVITx5Yo.mjzfwnI0.mjs")),
        path: `/work`,
      },
      dMKNHnk2Y: {
        elements: {},
        page: F(() => import("./aB_GIemRaukCPwwBJuEsz8yD5lZvwNr13I4q6UOTYHo.l1V9Zem0.mjs")),
        path: `/about`,
      },
      QicDCMSoI: {
        elements: {},
        page: F(() => import("./QA3M9GnIVBOHH56IWmTbzaL77VhyOi-JRdgrgHUiWJk.BFOAy9ly.mjs")),
        path: `/services`,
      },
      UlcsYB4QS: {
        elements: {},
        page: F(() => import("./0YSrGId9Yb6ttyxWZeFEQ_cXm40Jt1VZi0z6CtuBvXs.CNsSfh7V.mjs")),
        path: `/journal`,
      },
      EJQ48awkB: {
        elements: {},
        page: F(() => import("./26_4GveZwbW9na9ZHH9dUj3FGb_ZGUD7Hdr5XNsNEvg.BcDVv1BR.mjs")),
        path: `/contact`,
      },
      kqpXhl63R: {
        elements: {},
        page: F(() => import("./I9AOT8rQDtgAYiF2wZdvKd5obzp9vo3Jd9x_jiZdCW4.DO76nP_B.mjs")),
        path: `/404`,
      },
      vB7lLUdqR: {
        collectionId: `MI1poXOec`,
        elements: {},
        page: F(() => import("./F1-n4Dyrvyreum8oZTqOBysn6kkXmukVVV072SMPIvQ.5-YBcAyO.mjs")),
        path: `/work/:YnqitUca5`,
      },
      m_bMs4OBp: {
        collectionId: `I0iRqM4q6`,
        elements: {},
        page: F(() => import("./AnHuQjf0NZBM5xma6o0oEzNxbC5Bf3LvzW3A7_69BY4.BYQ8N4K4.mjs")),
        path: `/journal/:Xlo3lvK23`,
      },
    }),
    (Ln = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (Rn = {
      I0iRqM4q6: async () =>
        (await import("./dfR6zy_4FgDH7odX8sAzxfB-Zhrm6080FuIK7B-ujlc.DqP3ILW5.mjs"))?.utils,
      MI1poXOec: async () =>
        (await import("./O92EvfUT2Oa5u3TyzRRlD3ms4-jO7KJuVMkXkHOcamM.n7UP4Td2.mjs"))?.utils,
    }),
    (zn = void 0),
    (Bn = `a44e7902dcf2c05241aaa8faf35182980df1cf1904974d15063f5d758c066fd8`),
    ($ = typeof document < `u`),
    (Vn = $ && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(a.userAgent)),
    $)
  ) {
    ((l.__framer_importFromPackage = (e, t) => () =>
      m(je, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (l.__framer_events = l.__framer_events || []),
      Ae());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? In(!0, e) : In(!1, e);
  }
})();
export { Nn as getLayoutTemplateBreakpoints, Pn as getPageRoot };
//# sourceMappingURL=script_main.CUQ6NZZn.mjs.map
