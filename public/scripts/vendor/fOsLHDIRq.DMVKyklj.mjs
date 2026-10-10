import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  P as r,
  b as i,
  j as a,
  o,
  p as s,
  s as c,
  w as l,
} from "./react.iNMCLRE-.mjs";
import { M as u, i as d, o as f, t as p } from "./motion.BnyVzGcg.mjs";
import {
  Ct as m,
  H as h,
  J as g,
  N as _,
  O as v,
  T as y,
  _t as b,
  k as x,
  lt as S,
  o as C,
  wt as w,
} from "./framer.DCAwtIDZ.mjs";
import { i as T, n as E, r as D, t as O } from "./lZS6BJmxQ.DTmj87Yj.mjs";
function k(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (c(),
      g(),
      p(),
      l(),
      T(),
      (A = [`rD1HbNBIS`, `RFpu0pzbz`, `xar9WWR65`]),
      (j = `framer-HfGxx`),
      (M = {
        rD1HbNBIS: `framer-v-bate9a`,
        RFpu0pzbz: `framer-v-1jbok4u`,
        xar9WWR65: `framer-v-1hq3mvl`,
      }),
      (N = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (P = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      (F = { "On Dark": `RFpu0pzbz`, "On Light": `rD1HbNBIS`, Solid: `xar9WWR65` }),
      (I = u.create(r)),
      (L = ({ height: e, id: t, label: n, width: r, ...i }) => ({
        ...i,
        Q_LUJok5N: n ?? i.Q_LUJok5N ?? `Mobile App Development`,
        variant: F[i.variant] ?? i.variant ?? `rD1HbNBIS`,
      })),
      (R = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (z = w(
        s(function (e, t) {
          let a = i(null),
            s = t ?? a,
            c = n(),
            { activeLocale: l, setLocale: f } = b();
          S();
          let { style: p, className: h, layoutId: g, variant: v, Q_LUJok5N: x, ...C } = L(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: F,
              isLoading: z,
              setGestureState: B,
              setVariant: V,
              variants: H,
            } = m({
              cycleOrder: A,
              defaultVariant: `rD1HbNBIS`,
              ref: s,
              variant: v,
              variantClassNames: M,
            }),
            U = R(e, H),
            W = _(j, O);
          return o(d, {
            id: g ?? c,
            children: o(I, {
              animate: H,
              initial: !1,
              children: o(P, {
                value: N,
                children: o(u.div, {
                  ...C,
                  ...D,
                  className: _(W, `framer-bate9a`, h, T),
                  "data-border": !0,
                  "data-framer-name": `On Light`,
                  layoutDependency: U,
                  layoutId: `rD1HbNBIS`,
                  ref: s,
                  style: {
                    "--border-bottom-width": `1.5px`,
                    "--border-color": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                    "--border-left-width": `1.5px`,
                    "--border-right-width": `1.5px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1.5px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...p,
                  },
                  variants: {
                    RFpu0pzbz: {
                      "--border-color": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                    },
                    xar9WWR65: {
                      backgroundColor: `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                    },
                  },
                  ...k(
                    {
                      RFpu0pzbz: { "data-framer-name": `On Dark` },
                      xar9WWR65: { "data-framer-name": `Solid` },
                    },
                    w,
                    F
                  ),
                  children: o(y, {
                    __fromCanvasComponent: !0,
                    children: o(r, {
                      children: o(u.p, {
                        className: `framer-styles-preset-x0jte0`,
                        "data-styles-preset": `lZS6BJmxQ`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8))`,
                        },
                        children: `Label`,
                      }),
                    }),
                    className: `framer-1584h2g`,
                    fonts: [`Inter`],
                    layoutDependency: U,
                    layoutId: `gHW4fitoA`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                    },
                    text: x,
                    variants: {
                      RFpu0pzbz: {
                        "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                      },
                      xar9WWR65: {
                        "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...k(
                      {
                        RFpu0pzbz: {
                          children: o(r, {
                            children: o(u.p, {
                              className: `framer-styles-preset-x0jte0`,
                              "data-styles-preset": `lZS6BJmxQ`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                              },
                              children: `Mobile App Development`,
                            }),
                          }),
                        },
                        xar9WWR65: {
                          children: o(r, {
                            children: o(u.p, {
                              className: `framer-styles-preset-x0jte0`,
                              "data-styles-preset": `lZS6BJmxQ`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                              },
                              children: `Mobile App Development`,
                            }),
                          }),
                        },
                      },
                      w,
                      F
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-HfGxx.framer-1sxk425, .framer-HfGxx .framer-1sxk425 { display: block; }`,
          `.framer-HfGxx.framer-bate9a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 8px 16px 8px 16px; position: relative; width: min-content; }`,
          `.framer-HfGxx .framer-1584h2g { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...E,
          `.framer-HfGxx[data-border="true"]::after, .framer-HfGxx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-HfGxx`
      )),
      (z.displayName = `Tag`),
      (z.defaultProps = { height: 36, width: 127 }),
      x(z, {
        variant: {
          options: [`rD1HbNBIS`, `RFpu0pzbz`, `xar9WWR65`],
          optionTitles: [`On Light`, `On Dark`, `Solid`],
          title: `Variant`,
          type: C.Enum,
        },
        Q_LUJok5N: { defaultValue: `Mobile App Development`, title: `Label`, type: C.String },
        onQ_LUJok5NChange: { changes: `Q_LUJok5N`, type: C.ChangeHandler },
      }),
      v(
        z,
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
          ...h(D),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { B as n, z as t };
//# sourceMappingURL=fOsLHDIRq.DMVKyklj.mjs.map
