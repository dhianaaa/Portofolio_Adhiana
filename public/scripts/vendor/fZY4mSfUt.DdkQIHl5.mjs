import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  P as r,
  b as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as l,
  w as u,
} from "./react.iNMCLRE-.mjs";
import { M as d, i as f, o as p, t as m } from "./motion.BnyVzGcg.mjs";
import {
  Ct as h,
  H as g,
  J as _,
  N as v,
  O as y,
  T as b,
  V as x,
  _t as S,
  g as C,
  k as w,
  lt as T,
  o as E,
  wt as D,
} from "./framer.DCAwtIDZ.mjs";
import { _ as O, d as k, f as A, m as j, p as M, v as N } from "./shared-lib.D3cLfu14.mjs";
function P(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (l(),
      _(),
      m(),
      u(),
      N(),
      j(),
      (F = x(O)),
      (I = {
        oV3laSm3c: { hover: !0 },
        T_wG7nMWa: { hover: !0 },
        vzxs6d0DA: { hover: !0 },
        zO6nBaCYG: { hover: !0 },
      }),
      (L = [`zO6nBaCYG`, `oV3laSm3c`, `T_wG7nMWa`, `vzxs6d0DA`]),
      (R = `framer-rpvYH`),
      (z = {
        oV3laSm3c: `framer-v-1oscsfo`,
        T_wG7nMWa: `framer-v-h7dgq9`,
        vzxs6d0DA: `framer-v-mjq257`,
        zO6nBaCYG: `framer-v-13ea2v3`,
      }),
      (B = { bounce: 0.25, delay: 0, duration: 0.4, type: `spring` }),
      (V = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(p.Provider, { value: o, children: n });
      }),
      (H = { Cream: `oV3laSm3c`, Dark: `T_wG7nMWa`, Lime: `zO6nBaCYG`, White: `vzxs6d0DA` }),
      (U = d.create(r)),
      (W = ({ height: e, id: t, label: n, link: r, width: i, ...a }) => ({
        ...a,
        b1k6UcoVo: r ?? a.b1k6UcoVo,
        variant: H[a.variant] ?? a.variant ?? `zO6nBaCYG`,
        XOnkKLrMv: n ?? a.XOnkKLrMv ?? `View My Work`,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = D(
        c(function (e, t) {
          let a = i(null),
            c = t ?? a,
            l = n(),
            { activeLocale: u, setLocale: p } = S();
          T();
          let {
              style: m,
              className: g,
              layoutId: _,
              variant: y,
              XOnkKLrMv: x,
              b1k6UcoVo: w,
              ...E
            } = W(e),
            {
              baseVariant: D,
              classNames: A,
              clearLoadingGesture: j,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: F,
              setGestureState: H,
              setVariant: K,
              variants: q,
            } = h({
              cycleOrder: L,
              defaultVariant: `zO6nBaCYG`,
              enabledGestures: I,
              ref: c,
              variant: y,
              variantClassNames: z,
            }),
            J = G(e, q),
            Y = v(R, k);
          return s(f, {
            id: _ ?? l,
            children: s(U, {
              animate: q,
              initial: !1,
              children: s(V, {
                value: B,
                children: s(C, {
                  href: w,
                  motionChild: !0,
                  nodeId: `zO6nBaCYG`,
                  scopeId: `fZY4mSfUt`,
                  children: s(d.a, {
                    ...E,
                    ...M,
                    className: `${v(Y, `framer-13ea2v3`, g, A)} framer-47d529`,
                    "data-framer-name": `Lime`,
                    layoutDependency: J,
                    layoutId: `zO6nBaCYG`,
                    ref: c,
                    style: { ...m },
                    ...P(
                      {
                        "oV3laSm3c-hover": { "data-framer-name": void 0 },
                        "T_wG7nMWa-hover": { "data-framer-name": void 0 },
                        "vzxs6d0DA-hover": { "data-framer-name": void 0 },
                        "zO6nBaCYG-hover": { "data-framer-name": void 0 },
                        oV3laSm3c: { "data-framer-name": `Cream` },
                        T_wG7nMWa: { "data-framer-name": `Dark` },
                        vzxs6d0DA: { "data-framer-name": `White` },
                      },
                      D,
                      N
                    ),
                    children: o(d.div, {
                      className: `framer-2mkbtl`,
                      "data-framer-name": `Pill`,
                      layoutDependency: J,
                      layoutId: `Llxu215IE`,
                      style: {
                        backgroundColor: `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      variants: {
                        "oV3laSm3c-hover": {
                          backgroundColor: `var(--token-b817f866-8039-49f6-ab21-6a0222e4faac)`,
                        },
                        "T_wG7nMWa-hover": {
                          backgroundColor: `var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1)`,
                        },
                        "vzxs6d0DA-hover": {
                          backgroundColor: `var(--token-3a32ed1b-5d2f-4fae-8bc0-5cd56d36c3c3)`,
                        },
                        "zO6nBaCYG-hover": {
                          backgroundColor: `var(--token-b817f866-8039-49f6-ab21-6a0222e4faac)`,
                        },
                        oV3laSm3c: {
                          backgroundColor: `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                        },
                        T_wG7nMWa: {
                          backgroundColor: `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                        },
                        vzxs6d0DA: {
                          backgroundColor: `var(--token-b817f866-8039-49f6-ab21-6a0222e4faac)`,
                        },
                      },
                      children: [
                        s(b, {
                          __fromCanvasComponent: !0,
                          children: s(r, {
                            children: s(d.p, {
                              className: `framer-styles-preset-19s0zy7`,
                              "data-styles-preset": `qdRSnXZTB`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8))`,
                              },
                              children: `View My Work`,
                            }),
                          }),
                          className: `framer-z42i8p`,
                          "data-framer-name": `Label`,
                          fonts: [`Inter`],
                          layoutDependency: J,
                          layoutId: `VVvGYbDLx`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                          },
                          text: x,
                          variants: {
                            "T_wG7nMWa-hover": {
                              "--extracted-r6o4lv": `var(--token-b817f866-8039-49f6-ab21-6a0222e4faac)`,
                            },
                            T_wG7nMWa: {
                              "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...P(
                            {
                              "T_wG7nMWa-hover": {
                                children: s(r, {
                                  children: s(d.p, {
                                    className: `framer-styles-preset-19s0zy7`,
                                    "data-styles-preset": `qdRSnXZTB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b817f866-8039-49f6-ab21-6a0222e4faac))`,
                                    },
                                    children: `View My Work`,
                                  }),
                                }),
                              },
                              T_wG7nMWa: {
                                children: s(r, {
                                  children: s(d.p, {
                                    className: `framer-styles-preset-19s0zy7`,
                                    "data-styles-preset": `qdRSnXZTB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                    },
                                    children: `View My Work`,
                                  }),
                                }),
                              },
                            },
                            D,
                            N
                          ),
                        }),
                        s(d.div, {
                          className: `framer-14cru2m`,
                          "data-framer-name": `Chip`,
                          layoutDependency: J,
                          layoutId: `rJxk4BYdN`,
                          style: {
                            backgroundColor: `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                          variants: {
                            "oV3laSm3c-hover": {
                              backgroundColor: `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                            },
                            "T_wG7nMWa-hover": {
                              backgroundColor: `var(--token-b817f866-8039-49f6-ab21-6a0222e4faac)`,
                            },
                            "vzxs6d0DA-hover": {
                              backgroundColor: `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                            },
                            "zO6nBaCYG-hover": {
                              backgroundColor: `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                            },
                            T_wG7nMWa: {
                              backgroundColor: `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                            },
                            vzxs6d0DA: {
                              backgroundColor: `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                            },
                          },
                          children: s(O, {
                            animated: !0,
                            className: `framer-q7m3z9`,
                            layoutDependency: J,
                            layoutId: `DbxBGwoN1`,
                            style: {
                              "--1m6trwb": 0,
                              "--21h8s6": `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                              "--pgex8v": 2,
                              rotate: 0,
                            },
                            variants: {
                              "oV3laSm3c-hover": {
                                "--21h8s6": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                rotate: 45,
                              },
                              "T_wG7nMWa-hover": { rotate: 45 },
                              "vzxs6d0DA-hover": {
                                "--21h8s6": `var(--token-b817f866-8039-49f6-ab21-6a0222e4faac)`,
                                rotate: 45,
                              },
                              "zO6nBaCYG-hover": {
                                "--21h8s6": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                rotate: 45,
                              },
                              oV3laSm3c: {
                                "--21h8s6": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                              },
                              T_wG7nMWa: {
                                "--21h8s6": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                              },
                              vzxs6d0DA: {
                                "--21h8s6": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                              },
                            },
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
          `.framer-rpvYH.framer-47d529, .framer-rpvYH .framer-47d529 { display: block; }`,
          `.framer-rpvYH.framer-13ea2v3 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-rpvYH .framer-2mkbtl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 56px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 6px 6px 6px 26px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-rpvYH .framer-z42i8p { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-rpvYH .framer-14cru2m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 44px; justify-content: center; padding: 0px; position: relative; width: 44px; }`,
          `.framer-rpvYH .framer-q7m3z9 { flex: none; height: auto; position: relative; width: 20px; }`,
          `.framer-rpvYH.framer-v-13ea2v3.hover .framer-14cru2m, .framer-rpvYH.framer-v-1oscsfo.hover .framer-14cru2m, .framer-rpvYH.framer-v-h7dgq9.hover .framer-14cru2m, .framer-rpvYH.framer-v-mjq257.hover .framer-14cru2m { width: 64px; }`,
          ...A,
        ],
        `framer-rpvYH`
      )),
      (K.displayName = `Button`),
      (K.defaultProps = { height: 54, width: 217 }),
      w(K, {
        variant: {
          options: [`zO6nBaCYG`, `oV3laSm3c`, `T_wG7nMWa`, `vzxs6d0DA`],
          optionTitles: [`Lime`, `Cream`, `Dark`, `White`],
          title: `Variant`,
          type: E.Enum,
        },
        XOnkKLrMv: { defaultValue: `View My Work`, title: `Label`, type: E.String },
        onXOnkKLrMvChange: { changes: `XOnkKLrMv`, type: E.ChangeHandler },
        b1k6UcoVo: { title: `Link`, type: E.Link },
      }),
      y(
        K,
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
          ...F,
          ...g(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { q as n, K as t };
//# sourceMappingURL=fZY4mSfUt.DdkQIHl5.mjs.map
