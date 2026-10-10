import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  P as r,
  b as i,
  c as a,
  j as o,
  l as s,
  o as c,
  p as l,
  s as u,
  w as d,
} from "./react.iNMCLRE-.mjs";
import { M as f, i as p, o as m, t as h } from "./motion.BnyVzGcg.mjs";
import {
  Ct as g,
  Et as _,
  F as v,
  H as y,
  J as b,
  N as x,
  O as S,
  T as C,
  U as w,
  V as T,
  _t as ee,
  a as E,
  b as D,
  bt as te,
  d as ne,
  et as O,
  ft as k,
  g as re,
  i as A,
  k as ie,
  lt as ae,
  mt as j,
  n as M,
  nt as N,
  o as P,
  p as oe,
  pt as se,
  rt as F,
  vt as I,
  w as L,
  wt as ce,
  x as R,
  yt as le,
} from "./framer.DCAwtIDZ.mjs";
import {
  _ as ue,
  a as de,
  c as fe,
  d as pe,
  f as me,
  g as he,
  h as z,
  i as ge,
  l as _e,
  m as ve,
  o as ye,
  p as be,
  r as xe,
  s as Se,
  u as Ce,
  v as we,
} from "./shared-lib.D3cLfu14.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./lZS6BJmxQ.DTmj87Yj.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./xTRXUmiRw.6JUGig27.mjs";
import { i as Ne, n as Pe, r as Fe, t as Ie } from "./LJodCLJG3.BWb2UJeG.mjs";
import { n as Le, t as B } from "./lze1M1_mv.CtjwDfQF.mjs";
import { n as Re, t as ze } from "./Wave.tmDtjSng.mjs";
import { n as Be, t as Ve } from "./T_v4JxARI.B9EAeVvw.mjs";
import { i as He, n as Ue } from "./I0iRqM4q6.CdjdxC9s.mjs";
import We, { t as Ge } from "./9DtBtrvU9BL_1YSC7Ee-V1pr-Y1COUzUrwSHXjgJO0g.DEsDGxQq.mjs";
function Ke(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qe,
  Je,
  Ye,
  Xe,
  Ze,
  V,
  H,
  U,
  Qe,
  $e,
  et,
  tt,
  W,
  nt = e(() => {
    (u(),
      b(),
      h(),
      d(),
      we(),
      Ce(),
      Ne(),
      Te(),
      ye(),
      ve(),
      (qe = T(ue)),
      (Je = { nZT3w92Tq: { hover: !0 }, qOnSPYIhV: { hover: !0 }, sh_5Wc9FC: { hover: !0 } }),
      (Ye = [`nZT3w92Tq`, `qOnSPYIhV`, `sh_5Wc9FC`]),
      (Xe = `framer-nuY2x`),
      (Ze = {
        nZT3w92Tq: `framer-v-1ig7ys0`,
        qOnSPYIhV: `framer-v-xqcfr9`,
        sh_5Wc9FC: `framer-v-1eemnwn`,
      }),
      (V = { bounce: 0.25, delay: 0, duration: 0.5, type: `spring` }),
      (H = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (U = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(m.Provider, { value: a, children: n });
      }),
      (Qe = { Desktop: `nZT3w92Tq`, Phone: `sh_5Wc9FC`, Tablet: `qOnSPYIhV` }),
      ($e = f.create(r)),
      (et = ({
        category: e,
        color: t,
        cover: n,
        excerpt: r,
        height: i,
        id: a,
        link: o,
        readTime: s,
        title: c,
        width: l,
        ...u
      }) => ({
        ...u,
        a1yLD0SzW: o ?? u.a1yLD0SzW,
        cJeJnnXWB: c ?? u.cJeJnnXWB ?? `Building Intuitive Mobile Apps with Flutter`,
        dfuCXmzyH: n ??
          u.dfuCXmzyH ?? {
            pixelHeight: 1067,
            pixelWidth: 1600,
            src: `../../assets/images/RaZ9e6cYfFO2vGIEfOy33qZeKfI-319241.jpg`,
            srcSet: `../../assets/images/RaZ9e6cYfFO2vGIEfOy33qZeKfI-36a0c9.jpg 512w,../../assets/images/RaZ9e6cYfFO2vGIEfOy33qZeKfI.jpg 1024w,../../assets/images/RaZ9e6cYfFO2vGIEfOy33qZeKfI-319241.jpg 1600w`,
          },
        myE8rUfXf: t ?? u.myE8rUfXf ?? `rgb(255, 107, 26)`,
        n3UCl22Ct: s ?? u.n3UCl22Ct ?? `6 min read`,
        ogafDqx_I:
          r ??
          u.ogafDqx_I ??
          `A practical engineering and design workflow behind creating JoyCharm and Cake Shop mobile apps.`,
        variant: Qe[u.variant] ?? u.variant ?? `nZT3w92Tq`,
        x22Ngmvwg: e ?? u.x22Ngmvwg ?? `Process`,
      })),
      (tt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = ce(
        l(function (e, t) {
          let a = i(null),
            o = t ?? a,
            l = n(),
            { activeLocale: u, setLocale: d } = ee(),
            m = ae(),
            {
              style: h,
              className: _,
              layoutId: v,
              variant: y,
              cJeJnnXWB: b,
              ogafDqx_I: S,
              x22Ngmvwg: T,
              n3UCl22Ct: E,
              dfuCXmzyH: D,
              myE8rUfXf: te,
              a1yLD0SzW: ne,
              ...O
            } = et(e),
            {
              baseVariant: k,
              classNames: A,
              clearLoadingGesture: ie,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: P,
              setVariant: se,
              variants: F,
            } = g({
              cycleOrder: Ye,
              defaultVariant: `nZT3w92Tq`,
              enabledGestures: Je,
              ref: o,
              variant: y,
              variantClassNames: Ze,
            }),
            I = tt(e, F),
            L = x(Xe, Se, Ie, xe, pe, Oe);
          return c(p, {
            id: v ?? l,
            children: c($e, {
              animate: F,
              initial: !1,
              children: c(U, {
                value: V,
                children: c(re, {
                  href: ne,
                  motionChild: !0,
                  nodeId: `nZT3w92Tq`,
                  scopeId: `OU9iNGrcu`,
                  children: s(f.a, {
                    ...O,
                    ...j,
                    className: `${x(L, `framer-1ig7ys0`, _, A)} framer-1rvmyha`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: I,
                    layoutId: `nZT3w92Tq`,
                    ref: o,
                    style: {
                      backgroundColor: `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                      borderBottomLeftRadius: 40,
                      borderBottomRightRadius: 40,
                      borderTopLeftRadius: 40,
                      borderTopRightRadius: 40,
                      ...h,
                    },
                    variants: {
                      sh_5Wc9FC: {
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                      },
                    },
                    ...Ke(
                      {
                        "nZT3w92Tq-hover": { "data-framer-name": void 0 },
                        "qOnSPYIhV-hover": { "data-framer-name": void 0 },
                        "sh_5Wc9FC-hover": { "data-framer-name": void 0 },
                        qOnSPYIhV: { "data-framer-name": `Tablet` },
                        sh_5Wc9FC: { "data-framer-name": `Phone` },
                      },
                      k,
                      M
                    ),
                    children: [
                      c(f.div, {
                        className: `framer-wdx1m8`,
                        "data-framer-name": `Cover`,
                        layoutDependency: I,
                        layoutId: `Iffj0ECju`,
                        style: {
                          backgroundColor: te,
                          borderBottomLeftRadius: 24,
                          borderBottomRightRadius: 24,
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                        },
                        variants: {
                          sh_5Wc9FC: {
                            borderBottomLeftRadius: 18,
                            borderBottomRightRadius: 18,
                            borderTopLeftRadius: 18,
                            borderTopRightRadius: 18,
                          },
                        },
                        children: c(U, {
                          value: V,
                          children: c(oe, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: w(
                                (m?.y || 0) + (20 + ((m?.height || 460) - 40 - 420) / 2) + 0
                              ),
                              pixelHeight: 1067,
                              pixelWidth: 1600,
                              sizes: `max((${m?.width || `100vw`} - 80px) / 2, 1px)`,
                              ...H(D),
                            },
                            className: `framer-9076c1`,
                            "data-framer-name": `Image`,
                            layoutDependency: I,
                            layoutId: `OsilTdvDT`,
                            style: { scale: 1 },
                            variants: {
                              "nZT3w92Tq-hover": { scale: 1.06 },
                              "qOnSPYIhV-hover": { scale: 1.06 },
                              "sh_5Wc9FC-hover": { scale: 1.06 },
                            },
                            ...Ke(
                              {
                                qOnSPYIhV: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: w((m?.y || 0) + 20 + 0 + 0),
                                    pixelHeight: 1067,
                                    pixelWidth: 1600,
                                    sizes: `calc(${m?.width || `100vw`} - 40px)`,
                                    ...H(D),
                                  },
                                },
                                sh_5Wc9FC: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: w((m?.y || 0) + 14 + 0 + 0),
                                    pixelHeight: 1067,
                                    pixelWidth: 1600,
                                    sizes: `calc(${m?.width || `100vw`} - 28px)`,
                                    ...H(D),
                                  },
                                },
                              },
                              k,
                              M
                            ),
                          }),
                        }),
                      }),
                      s(f.div, {
                        className: `framer-15chxnh`,
                        "data-framer-name": `Body`,
                        layoutDependency: I,
                        layoutId: `jDDGypP2s`,
                        children: [
                          c(f.div, {
                            className: `framer-1os6ejx`,
                            "data-framer-name": `Badge`,
                            layoutDependency: I,
                            layoutId: `B7rzTSOws`,
                            style: {
                              backgroundColor: te,
                              borderBottomLeftRadius: 100,
                              borderBottomRightRadius: 100,
                              borderTopLeftRadius: 100,
                              borderTopRightRadius: 100,
                            },
                            children: c(C, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(f.p, {
                                  className: `framer-styles-preset-f38zr3`,
                                  "data-styles-preset": `KYasCCnOZ`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8))`,
                                  },
                                  children: `Category`,
                                }),
                              }),
                              className: `framer-1nm2wcw`,
                              fonts: [`Inter`],
                              layoutDependency: I,
                              layoutId: `qMQfJFYmr`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                              },
                              text: T,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          c(C, {
                            __fromCanvasComponent: !0,
                            children: c(r, {
                              children: c(f.h2, {
                                className: `framer-styles-preset-er5li9`,
                                "data-styles-preset": `LJodCLJG3`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1of0zx5, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                },
                                children: `Title`,
                              }),
                            }),
                            className: `framer-x9q05z`,
                            fonts: [`Inter`],
                            layoutDependency: I,
                            layoutId: `YuYu4Edsk`,
                            style: {
                              "--extracted-1of0zx5": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                            },
                            text: b,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          c(C, {
                            __fromCanvasComponent: !0,
                            children: c(r, {
                              children: c(f.p, {
                                className: `framer-styles-preset-u4yd6w`,
                                "data-styles-preset": `nLXWtZRpy`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                },
                                children: `Excerpt`,
                              }),
                            }),
                            className: `framer-17q0mms`,
                            fonts: [`Inter`],
                            layoutDependency: I,
                            layoutId: `xHPHcvFAk`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                              opacity: 0.85,
                            },
                            text: S,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          s(f.div, {
                            className: `framer-1txjg45`,
                            "data-framer-name": `Meta`,
                            layoutDependency: I,
                            layoutId: `wirD_JAxd`,
                            children: [
                              c(U, {
                                value: V,
                                children: c(f.div, {
                                  className: `framer-gd866n`,
                                  "data-framer-name": `Chip`,
                                  layoutDependency: I,
                                  layoutId: `DfJazcGvl`,
                                  style: {
                                    backgroundColor: `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                                    borderBottomLeftRadius: 100,
                                    borderBottomRightRadius: 100,
                                    borderTopLeftRadius: 100,
                                    borderTopRightRadius: 100,
                                  },
                                  children: c(ue, {
                                    animated: !0,
                                    className: `framer-1vmfda3`,
                                    layoutDependency: I,
                                    layoutId: `klp9G01Md`,
                                    style: {
                                      "--1m6trwb": 0,
                                      "--21h8s6": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                      "--pgex8v": 2,
                                      rotate: 0,
                                    },
                                    variants: {
                                      "nZT3w92Tq-hover": { rotate: 45 },
                                      "qOnSPYIhV-hover": { rotate: 45 },
                                      "sh_5Wc9FC-hover": { rotate: 45 },
                                    },
                                  }),
                                }),
                              }),
                              c(C, {
                                __fromCanvasComponent: !0,
                                children: c(r, {
                                  children: c(f.p, {
                                    className: `framer-styles-preset-19s0zy7`,
                                    "data-styles-preset": `qdRSnXZTB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                    },
                                    children: `Read Article`,
                                  }),
                                }),
                                className: `framer-1bj4v7q`,
                                fonts: [`Inter`],
                                layoutDependency: I,
                                layoutId: `N1u4Ywd5x`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              c(f.div, {
                                className: `framer-1fuld1r`,
                                "data-framer-name": `Dot`,
                                layoutDependency: I,
                                layoutId: `eOxpmNdQh`,
                                style: {
                                  backgroundColor: `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                              }),
                              c(C, {
                                __fromCanvasComponent: !0,
                                children: c(r, {
                                  children: c(f.p, {
                                    className: `framer-styles-preset-x0jte0`,
                                    "data-styles-preset": `lZS6BJmxQ`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                    },
                                    children: `Read Time`,
                                  }),
                                }),
                                className: `framer-13si4y0`,
                                fonts: [`Inter`],
                                layoutDependency: I,
                                layoutId: `dEA4Z6t_3`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                  opacity: 0.7,
                                },
                                text: E,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-nuY2x.framer-1rvmyha, .framer-nuY2x .framer-1rvmyha { display: block; }`,
          `.framer-nuY2x.framer-1ig7ys0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; text-decoration: none; width: 1120px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-nuY2x .framer-wdx1m8 { flex: 1 0 0px; height: 420px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-nuY2x .framer-9076c1 { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,
          `.framer-nuY2x .framer-15chxnh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 20px 24px 20px 0px; position: relative; width: 1px; }`,
          `.framer-nuY2x .framer-1os6ejx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 7px 14px 7px 14px; position: relative; width: min-content; }`,
          `.framer-nuY2x .framer-1nm2wcw, .framer-nuY2x .framer-1bj4v7q, .framer-nuY2x .framer-13si4y0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-nuY2x .framer-x9q05z, .framer-nuY2x .framer-17q0mms { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-nuY2x .framer-1txjg45 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
          `.framer-nuY2x .framer-gd866n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 44px; justify-content: center; padding: 0px; position: relative; width: 44px; }`,
          `.framer-nuY2x .framer-1vmfda3 { flex: none; height: auto; position: relative; width: 20px; }`,
          `.framer-nuY2x .framer-1fuld1r { flex: none; height: 6px; position: relative; width: 6px; }`,
          `.framer-nuY2x.framer-v-xqcfr9.framer-1ig7ys0 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 28px; width: 746px; }`,
          `.framer-nuY2x.framer-v-xqcfr9 .framer-wdx1m8 { flex: none; height: 360px; width: 100%; }`,
          `.framer-nuY2x.framer-v-xqcfr9 .framer-15chxnh { flex: none; padding: 0px 16px 20px 16px; width: 100%; }`,
          `.framer-nuY2x.framer-v-1eemnwn.framer-1ig7ys0 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 22px; padding: 14px; width: 350px; }`,
          `.framer-nuY2x.framer-v-1eemnwn .framer-wdx1m8 { flex: none; height: 220px; width: 100%; }`,
          `.framer-nuY2x.framer-v-1eemnwn .framer-15chxnh { flex: none; padding: 0px 10px 16px 10px; width: 100%; }`,
          `.framer-nuY2x.framer-v-1ig7ys0.hover .framer-gd866n, .framer-nuY2x.framer-v-xqcfr9.hover .framer-gd866n, .framer-nuY2x.framer-v-1eemnwn.hover .framer-gd866n { width: 64px; }`,
          ...fe,
          ...Pe,
          ...ge,
          ...me,
          ...Ee,
        ],
        `framer-nuY2x`
      )),
      (W.displayName = `Feature Article Card`),
      (W.defaultProps = { height: 460, width: 1120 }),
      ie(W, {
        variant: {
          options: [`nZT3w92Tq`, `qOnSPYIhV`, `sh_5Wc9FC`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: P.Enum,
        },
        cJeJnnXWB: { defaultValue: `Building Intuitive Mobile Apps with Flutter`, title: `Title`, type: P.String },
        oncJeJnnXWBChange: { changes: `cJeJnnXWB`, type: P.ChangeHandler },
        ogafDqx_I: {
          defaultValue: `A practical engineering and design workflow behind creating JoyCharm and Cake Shop mobile apps.`,
          title: `Excerpt`,
          type: P.String,
        },
        onogafDqx_IChange: { changes: `ogafDqx_I`, type: P.ChangeHandler },
        x22Ngmvwg: { defaultValue: `Process`, title: `Category`, type: P.String },
        onx22NgmvwgChange: { changes: `x22Ngmvwg`, type: P.ChangeHandler },
        n3UCl22Ct: { defaultValue: `6 min read`, title: `Read Time`, type: P.String },
        onn3UCl22CtChange: { changes: `n3UCl22Ct`, type: P.ChangeHandler },
        dfuCXmzyH: {
          __defaultAssetReference: `data:framer/asset-reference,RaZ9e6cYfFO2vGIEfOy33qZeKfI.jpg?originalFilename=photo-1778567148288-233997494476%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixlib%3Drb-4.1.jpg&width=1600&height=1067`,
          title: `Cover`,
          type: P.ResponsiveImage,
        },
        myE8rUfXf: { defaultValue: `rgb(255, 107, 26)`, title: `Color`, type: P.Color },
        a1yLD0SzW: { title: `Link`, type: P.Link },
      }),
      S(
        W,
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
          ...qe,
          ...y(_e),
          ...y(Fe),
          ...y(de),
          ...y(be),
          ...y(De),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  rt,
  G,
  it,
  at,
  ot,
  st,
  K,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  q,
  ht,
  J,
  gt,
  _t,
  Y,
  vt,
  X,
  Z,
  yt,
  bt,
  xt,
  St,
  Ct,
  Q,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  $,
  Mt;
e(() => {
  (u(),
    b(),
    h(),
    d(),
    Le(),
    nt(),
    Be(),
    he(),
    Re(),
    He(),
    ye(),
    ke(),
    Ge(),
    (rt = T(B)),
    (G = _(E)),
    (it = _(C)),
    (at = T(z)),
    (ot = T(ze)),
    (st = T(W)),
    (K = _(f.div)),
    (ct = T(Ve)),
    (lt = {
      dGMa5WzM8: `(min-width: 1200px)`,
      J4BijP_KG: `(min-width: 810px) and (max-width: 1199.98px)`,
      RcINiIg4G: `(max-width: 809.98px)`,
    }),
    (ut = []),
    (dt = `framer-mQdPU`),
    (ft = {
      dGMa5WzM8: `framer-v-1hp5vde`,
      J4BijP_KG: `framer-v-ibbm6`,
      RcINiIg4G: `framer-v-2qo9im`,
    }),
    (pt = (e, t, n) => (e && t ? `position` : n)),
    (mt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (q = { bounce: 0.15, delay: 0, duration: 0.8, type: `spring` }),
    (ht = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: q,
      x: 0,
      y: 20,
    }),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (gt = {
      effect: {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 6,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 50,
      },
      startDelay: 0.06,
      tokenization: `word`,
      transition: { bounce: 0.25, delay: 0.05, duration: 0.8, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (_t = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (Y = { bounce: 0.15, delay: 0.4, duration: 0.8, type: `spring` }),
    (vt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: 0,
      y: 40,
    }),
    (X = {
      opacity: 0,
      rotate: -20,
      rotateX: 0,
      rotateY: 0,
      scale: 0.4,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 30,
    }),
    (Z = { bounce: 0.45, delay: 0.5, duration: 0.7, type: `spring` }),
    (yt = {
      opacity: 0,
      rotate: -20,
      rotateX: 0,
      rotateY: 0,
      scale: 0.4,
      skewX: 0,
      skewY: 0,
      transition: Z,
      x: 0,
      y: 30,
    }),
    (bt = { bounce: 0.45, delay: 0.65, duration: 0.7, type: `spring` }),
    (xt = {
      opacity: 0,
      rotate: -20,
      rotateX: 0,
      rotateY: 0,
      scale: 0.4,
      skewX: 0,
      skewY: 0,
      transition: bt,
      x: 0,
      y: 30,
    }),
    (St = { delay: 0, duration: 2.8, ease: [0.45, 0, 0.55, 1], type: `tween` }),
    (Ct = {
      opacity: 1,
      rotate: -10,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -8,
    }),
    (Q = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    (wt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: q,
      x: 0,
      y: 50,
    }),
    (Tt = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Et = () => ({
      from: { alias: `TWDRbMtkv`, data: Ue, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      orderBy: [
        { collection: `TWDRbMtkv`, direction: `desc`, name: `ZaQaTJf71`, type: `Identifier` },
      ],
      select: [
        { collection: `TWDRbMtkv`, name: `ghnvfyb31`, type: `Identifier` },
        { collection: `TWDRbMtkv`, name: `NHZo24ULS`, type: `Identifier` },
        { collection: `TWDRbMtkv`, name: `TZqUlfRI2`, type: `Identifier` },
        { collection: `TWDRbMtkv`, name: `Tmq0iTf8M`, type: `Identifier` },
        { collection: `TWDRbMtkv`, name: `Edrh1V9wF`, type: `Identifier` },
        { collection: `TWDRbMtkv`, name: `snj0P89FW`, type: `Identifier` },
        { collection: `TWDRbMtkv`, name: `Xlo3lvK23`, type: `Identifier` },
        { collection: `TWDRbMtkv`, name: `id`, type: `Identifier` },
      ],
    })),
    (Dt = ({ query: e, pageSize: t, children: n }) => n(le(e))),
    (Ot = () => ({
      from: { alias: `p56y7muYj`, data: Ue, type: `Collection` },
      offset: { type: `LiteralValue`, value: 1 },
      orderBy: [
        { collection: `p56y7muYj`, direction: `desc`, name: `ZaQaTJf71`, type: `Identifier` },
      ],
      select: [
        { collection: `p56y7muYj`, name: `ghnvfyb31`, type: `Identifier` },
        { collection: `p56y7muYj`, name: `NHZo24ULS`, type: `Identifier` },
        { collection: `p56y7muYj`, name: `TZqUlfRI2`, type: `Identifier` },
        { collection: `p56y7muYj`, name: `Tmq0iTf8M`, type: `Identifier` },
        { collection: `p56y7muYj`, name: `Edrh1V9wF`, type: `Identifier` },
        { collection: `p56y7muYj`, name: `snj0P89FW`, type: `Identifier` },
        { collection: `p56y7muYj`, name: `Xlo3lvK23`, type: `Identifier` },
        { collection: `p56y7muYj`, name: `id`, type: `Identifier` },
      ],
    })),
    (kt = { Desktop: `dGMa5WzM8`, Phone: `RcINiIg4G`, Tablet: `J4BijP_KG` }),
    (At = ({ value: e }) =>
      j()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (jt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: kt[r.variant] ?? r.variant ?? `dGMa5WzM8`,
    })),
    ($ = ce(
      l(function (e, l) {
        let u = i(null),
          d = l ?? u,
          h = n(),
          { activeLocale: g, setLocale: _ } = ee(),
          v = ae(),
          { style: y, className: b, layoutId: S, variant: w, ...T } = jt(e);
        I(o(() => We({}, g), [g]));
        let [O, re] = se(w, lt, !1),
          ie = x(dt, Me, xe),
          j = t(ne)?.isLayoutTemplate,
          N = !!t(m)?.transition?.layout,
          P = pt(j, N);
        return (
          te(),
          k({}),
          c(ne.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: kt,
              primaryVariantId: `dGMa5WzM8`,
              variantClassNames: ft,
            },
            children: s(p, {
              id: S ?? h,
              children: [
                c(At, { value: `html body { background: none; }` }),
                s(f.div, {
                  ...T,
                  className: x(ie, `framer-1hp5vde`, b),
                  ref: d,
                  style: { ...y },
                  children: [
                    s(f.div, {
                      className: `framer-irgxj7`,
                      "data-framer-name": `Page Hero`,
                      layout: P,
                      children: [
                        s(`div`, {
                          className: `framer-k702w3`,
                          "data-framer-name": `Hero Content`,
                          children: [
                            c(R, {
                              breakpoint: O,
                              overrides: {
                                J4BijP_KG: { y: (v?.y || 0) + 0 + 0 + 72 + 0 + 0 + 0 },
                                RcINiIg4G: { y: (v?.y || 0) + 0 + 0 + 64 + 0 + 0 + 0 },
                              },
                              children: c(A, {
                                height: 18,
                                y: (v?.y || 0) + 0 + 0 + 80 + 0 + 0 + 0,
                                children: c(G, {
                                  __framer__animate: { transition: q },
                                  __framer__animateOnce: !1,
                                  __framer__enter: mt,
                                  __framer__exit: ht,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.2,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1rdyqcq-container`,
                                  nodeId: `mIj9fsd9o`,
                                  rendersWithMotion: !0,
                                  scopeId: `UlcsYB4QS`,
                                  children: c(B, {
                                    height: `100%`,
                                    id: `mIj9fsd9o`,
                                    layoutId: `mIj9fsd9o`,
                                    variant: J(`ZwoVdf57B`),
                                    width: `100%`,
                                    X3YPjSny2: `Journal`,
                                  }),
                                }),
                              }),
                            }),
                            c(C, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: s(`h2`, {
                                  className: `framer-styles-preset-184ln75`,
                                  "data-styles-preset": `xTRXUmiRw`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                  },
                                  children: [
                                    `Thoughts, process `,
                                    c(`span`, {
                                      style: {
                                        "--framer-text-color": `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                                      },
                                      children: `& experiments.`,
                                    }),
                                  ],
                                }),
                              }),
                              className: `framer-ptic33`,
                              "data-framer-name": `Headline`,
                              effect: gt,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            c(it, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !1,
                              __framer__enter: _t,
                              __framer__exit: vt,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.2,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: c(r, {
                                children: c(`p`, {
                                  className: `framer-styles-preset-u4yd6w`,
                                  "data-styles-preset": `nLXWtZRpy`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                                  },
                                  children: `Notes on design, creativity, branding, technology, and everything in between.`,
                                }),
                              }),
                              className: `framer-1qlo936`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        c(A, {
                          children: c(G, {
                            __framer__animate: { transition: Z },
                            __framer__animateOnce: !1,
                            __framer__enter: X,
                            __framer__exit: yt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.2,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-m95hdu-container`,
                            "data-code-component-plugin-id": `api`,
                            isAuthoredByUser: !0,
                            nodeId: `AqC0XJ95W`,
                            rendersWithMotion: !0,
                            scopeId: `UlcsYB4QS`,
                            children: c(z, {
                              color: `var(--token-ff4012e0-4cb5-4140-876f-6444e9a1c1a8)`,
                              duration: 10,
                              face: !1,
                              faceColor: `rgb(15, 45, 36)`,
                              height: `100%`,
                              id: `AqC0XJ95W`,
                              layoutId: `AqC0XJ95W`,
                              outline: `rgb(15, 45, 36)`,
                              outlineWidth: 0,
                              reverse: !1,
                              shape: `sparkle`,
                              spin: !0,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                        c(A, {
                          children: c(G, {
                            __framer__animate: { transition: bt },
                            __framer__animateOnce: !1,
                            __framer__enter: X,
                            __framer__exit: xt,
                            __framer__loop: Ct,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopPauseOffscreen: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `mirror`,
                            __framer__loopTransition: St,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.2,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1mbnsnt-container`,
                            "data-code-component-plugin-id": `api`,
                            isAuthoredByUser: !0,
                            nodeId: `iMWic8nNZ`,
                            rendersWithMotion: !0,
                            scopeId: `UlcsYB4QS`,
                            children: c(z, {
                              color: `var(--token-3a32ed1b-5d2f-4fae-8bc0-5cd56d36c3c3)`,
                              duration: 14,
                              face: !0,
                              faceColor: `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                              height: `100%`,
                              id: `iMWic8nNZ`,
                              layoutId: `iMWic8nNZ`,
                              outline: `rgb(15, 45, 36)`,
                              outlineWidth: 0,
                              reverse: !1,
                              shape: `scallop`,
                              spin: !1,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    c(A, {
                      children: c(E, {
                        className: `framer-162qjkc-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `Wave`,
                        isAuthoredByUser: !0,
                        layout: P,
                        name: `Wave`,
                        nodeId: `PvBvxV6oI`,
                        scopeId: `UlcsYB4QS`,
                        children: c(ze, {
                          animate: !0,
                          background: `var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1)`,
                          color: `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                          duration: 7,
                          flip: !1,
                          height: `100%`,
                          id: `PvBvxV6oI`,
                          layoutId: `PvBvxV6oI`,
                          name: `Wave`,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    c(f.div, {
                      className: `framer-6i3mea`,
                      "data-framer-name": `Articles`,
                      layout: P,
                      children: s(`div`, {
                        className: `framer-16jjc55`,
                        "data-framer-name": `Container`,
                        children: [
                          c(`div`, {
                            className: `framer-1s4isf`,
                            "data-framer-name": `Featured`,
                            children: c(M, {
                              children: c(Dt, {
                                query: Et(),
                                children: (e, t, n) =>
                                  c(a, {
                                    children: e?.map(
                                      (
                                        {
                                          Edrh1V9wF: e,
                                          ghnvfyb31: t,
                                          id: n,
                                          NHZo24ULS: r,
                                          snj0P89FW: i,
                                          Tmq0iTf8M: a,
                                          TZqUlfRI2: o,
                                          Xlo3lvK23: s,
                                        },
                                        l
                                      ) => (
                                        (t ??= ``),
                                        (r ??= ``),
                                        (o ??= ``),
                                        (a ??= ``),
                                        (i ??= `#09F`),
                                        (s ??= ``),
                                        c(
                                          p,
                                          {
                                            id: `TWDRbMtkv-${n}`,
                                            children: c(D.Provider, {
                                              value: { Xlo3lvK23: s },
                                              children: c(K, {
                                                __framer__animate: { transition: q },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Q,
                                                __framer__exit: wt,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0.2,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-grm823`,
                                                "data-framer-name": `Featured Article`,
                                                children: c(L, {
                                                  links: [
                                                    {
                                                      href: {
                                                        pathVariables: { Xlo3lvK23: s },
                                                        webPageId: `m_bMs4OBp`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { Xlo3lvK23: s },
                                                        webPageId: `m_bMs4OBp`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { Xlo3lvK23: s },
                                                        webPageId: `m_bMs4OBp`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (n) =>
                                                    c(R, {
                                                      breakpoint: O,
                                                      overrides: {
                                                        J4BijP_KG: {
                                                          width: `min(${v?.width || `100vw`} - 64px, 1360px)`,
                                                          y:
                                                            (v?.y || 0) +
                                                            0 +
                                                            547.08 +
                                                            40 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                        RcINiIg4G: {
                                                          width: `min(${v?.width || `100vw`} - 40px, 1360px)`,
                                                          y:
                                                            (v?.y || 0) +
                                                            0 +
                                                            521.08 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                      },
                                                      children: c(A, {
                                                        height: 460,
                                                        width: `min(${v?.width || `100vw`} - 80px, 1360px)`,
                                                        y:
                                                          (v?.y || 0) +
                                                          0 +
                                                          603.08 +
                                                          56 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: c(E, {
                                                          className: `framer-q9sl9w-container`,
                                                          nodeId: `b1XmVRzPJ`,
                                                          scopeId: `UlcsYB4QS`,
                                                          children: c(R, {
                                                            breakpoint: O,
                                                            overrides: {
                                                              J4BijP_KG: {
                                                                a1yLD0SzW: n[1],
                                                                variant: J(`qOnSPYIhV`),
                                                              },
                                                              RcINiIg4G: {
                                                                a1yLD0SzW: n[2],
                                                                variant: J(`sh_5Wc9FC`),
                                                              },
                                                            },
                                                            children: c(W, {
                                                              a1yLD0SzW: n[0],
                                                              cJeJnnXWB: t,
                                                              dfuCXmzyH: Tt(e),
                                                              height: `100%`,
                                                              id: `b1XmVRzPJ`,
                                                              layoutId: `b1XmVRzPJ`,
                                                              myE8rUfXf: i,
                                                              n3UCl22Ct: a,
                                                              ogafDqx_I: r,
                                                              style: { width: `100%` },
                                                              variant: J(`nZT3w92Tq`),
                                                              width: `100%`,
                                                              x22Ngmvwg: o,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              }),
                                            }),
                                          },
                                          n
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                          c(`div`, {
                            className: `framer-iozg6n`,
                            "data-framer-name": `Article List`,
                            children: c(M, {
                              children: c(Dt, {
                                query: Ot(),
                                children: (e, t, n) =>
                                  c(a, {
                                    children: e?.map(
                                      (
                                        {
                                          Edrh1V9wF: e,
                                          ghnvfyb31: t,
                                          id: n,
                                          NHZo24ULS: r,
                                          snj0P89FW: i,
                                          Tmq0iTf8M: a,
                                          TZqUlfRI2: o,
                                          Xlo3lvK23: s,
                                        },
                                        l
                                      ) => (
                                        (t ??= ``),
                                        (r ??= ``),
                                        (o ??= ``),
                                        (a ??= ``),
                                        (i ??= `#09F`),
                                        (s ??= ``),
                                        c(
                                          p,
                                          {
                                            id: `p56y7muYj-${n}`,
                                            children: c(D.Provider, {
                                              value: { Xlo3lvK23: s },
                                              children: c(K, {
                                                __framer__animate: { transition: q },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Q,
                                                __framer__exit: wt,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0.2,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-1tktxnw`,
                                                "data-framer-name": `Article Item`,
                                                children: c(L, {
                                                  links: [
                                                    {
                                                      href: {
                                                        pathVariables: { Xlo3lvK23: s },
                                                        webPageId: `m_bMs4OBp`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { Xlo3lvK23: s },
                                                        webPageId: `m_bMs4OBp`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { Xlo3lvK23: s },
                                                        webPageId: `m_bMs4OBp`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (n) =>
                                                    c(R, {
                                                      breakpoint: O,
                                                      overrides: {
                                                        J4BijP_KG: {
                                                          width: `max((min(${v?.width || `100vw`} - 64px, 1360px) - 20px) / 2, 50px)`,
                                                          y:
                                                            (v?.y || 0) +
                                                            0 +
                                                            547.08 +
                                                            40 +
                                                            0 +
                                                            0 +
                                                            484 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                        RcINiIg4G: {
                                                          width: `min(${v?.width || `100vw`} - 40px, 1360px)`,
                                                          y:
                                                            (v?.y || 0) +
                                                            0 +
                                                            521.08 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            484 +
                                                            0 +
                                                            1536 +
                                                            0 +
                                                            0,
                                                        },
                                                      },
                                                      children: c(A, {
                                                        height: 496,
                                                        width: `max((min(${v?.width || `100vw`} - 80px, 1360px) - 24px) / 2, 50px)`,
                                                        y:
                                                          (v?.y || 0) +
                                                          0 +
                                                          603.08 +
                                                          56 +
                                                          0 +
                                                          0 +
                                                          484 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: c(E, {
                                                          className: `framer-f1jynr-container`,
                                                          nodeId: `GhMZdmH9x`,
                                                          scopeId: `UlcsYB4QS`,
                                                          children: c(R, {
                                                            breakpoint: O,
                                                            overrides: {
                                                              J4BijP_KG: { acYhcLEKF: n[1] },
                                                              RcINiIg4G: { acYhcLEKF: n[2] },
                                                            },
                                                            children: c(Ve, {
                                                              acYhcLEKF: n[0],
                                                              AZxzVUvdY: t,
                                                              bzVImRQz1: r,
                                                              gQS9nSx1q: o,
                                                              height: `100%`,
                                                              id: `GhMZdmH9x`,
                                                              layoutId: `GhMZdmH9x`,
                                                              njO32OsJa: Tt(e),
                                                              QHR1n0WjB: a,
                                                              style: { width: `100%` },
                                                              UeO8BMgWD: i,
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              }),
                                            }),
                                          },
                                          n
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-mQdPU.framer-dbos29, .framer-mQdPU .framer-dbos29 { display: block; }`,
        `.framer-mQdPU.framer-1hp5vde { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-mQdPU .framer-irgxj7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 80px 40px 90px 40px; position: relative; width: 100%; }`,
        `.framer-mQdPU .framer-k702w3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; max-width: 1160px; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-mQdPU .framer-1rdyqcq-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-mQdPU .framer-ptic33 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-mQdPU .framer-1qlo936 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 620px; position: relative; width: 100%; }`,
        `.framer-mQdPU .framer-m95hdu-container { flex: none; height: 90px; left: 90px; position: absolute; top: 80px; width: 90px; z-index: 1; }`,
        `.framer-mQdPU .framer-1mbnsnt-container { bottom: 60px; flex: none; height: 120px; position: absolute; right: 80px; width: 120px; z-index: 1; }`,
        `.framer-mQdPU .framer-162qjkc-container { flex: none; height: 120px; position: relative; width: 100%; }`,
        `.framer-mQdPU .framer-6i3mea { align-content: center; align-items: center; background-color: var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 56px 40px 120px 40px; position: relative; width: 100%; }`,
        `.framer-mQdPU .framer-16jjc55 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 1360px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mQdPU .framer-1s4isf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mQdPU .framer-grm823 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mQdPU .framer-q9sl9w-container, .framer-mQdPU .framer-f1jynr-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-mQdPU .framer-iozg6n { display: grid; flex: none; gap: 24px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mQdPU .framer-1tktxnw { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        ...Ae,
        ...ge,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-mQdPU.framer-1hp5vde { width: 810px; } .framer-mQdPU .framer-irgxj7 { padding: 72px 32px 72px 32px; } .framer-mQdPU .framer-1qlo936 { max-width: 470px; } .framer-mQdPU .framer-m95hdu-container { height: 54px; left: 45px; top: 40px; width: 54px; } .framer-mQdPU .framer-1mbnsnt-container { bottom: 30px; height: 72px; right: 40px; width: 72px; } .framer-mQdPU .framer-162qjkc-container { height: 90px; } .framer-mQdPU .framer-6i3mea { padding: 40px 32px 96px 32px; } .framer-mQdPU .framer-grm823 { align-content: flex-start; align-items: flex-start; } .framer-mQdPU .framer-iozg6n { gap: 20px; }}`,
        `@media (max-width: 809.98px) { .framer-mQdPU.framer-1hp5vde { width: 390px; } .framer-mQdPU .framer-irgxj7 { gap: 24px; padding: 64px 20px 88px 20px; } .framer-mQdPU .framer-m95hdu-container { height: 38px; left: 18px; top: 16px; width: 38px; } .framer-mQdPU .framer-1mbnsnt-container { bottom: 12px; height: 50px; right: 16px; width: 50px; } .framer-mQdPU .framer-162qjkc-container { height: 56px; } .framer-mQdPU .framer-6i3mea { padding: 32px 20px 72px 20px; } .framer-mQdPU .framer-grm823 { align-content: flex-start; align-items: flex-start; } .framer-mQdPU .framer-iozg6n { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; justify-content: flex-start; } .framer-mQdPU .framer-1tktxnw { align-self: unset; }}`,
      ],
      `framer-mQdPU`
    )),
    ($.displayName = `Journal`),
    ($.defaultProps = { height: 3057, width: 1200 }),
    S(
      $,
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
        ...rt,
        ...at,
        ...ot,
        ...st,
        ...ct,
        ...y(je),
        ...y(de),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = O.get(Et(), n, r),
          a = O.get(Ot(), n, r);
        return N(
          [
            () => i.preload(),
            () => a.preload(),
            () => v(B, {}, t),
            async () =>
              N(
                ((await F(() => i.readMaybeAsync(), t)) ?? []).flatMap((e) => () => v(W, {}, t)),
                t
              ),
            async () =>
              N(
                ((await F(() => a.readMaybeAsync(), t)) ?? []).flatMap((e) => () => v(Ve, {}, t)),
                t
              ),
          ],
          t
        );
      },
    }),
    (Mt = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerUlcsYB4QS`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"J4BijP_KG":{"layout":["fixed","auto"]},"RcINiIg4G":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `3057`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Mt as __FramerMetadata__, $ as default, ut as queryParamNames };
//# sourceMappingURL=0YSrGId9Yb6ttyxWZeFEQ_cXm40Jt1VZi0z6CtuBvXs.CNsSfh7V.mjs.map
