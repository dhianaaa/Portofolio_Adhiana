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
  E as g,
  H as _,
  J as v,
  N as y,
  O as b,
  T as x,
  V as S,
  _t as C,
  i as w,
  k as T,
  lt as E,
  o as D,
  wt as O,
} from "./framer.DCAwtIDZ.mjs";
import { c as k, g as A, h as j, l as M, s as N, u as P } from "./shared-lib.D3cLfu14.mjs";
function F(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var I,
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
      v(),
      m(),
      u(),
      A(),
      P(),
      (I = S(j)),
      (L = [`UQkuADZmy`, `ZwoVdf57B`]),
      (R = `framer-zxz4R`),
      (z = { UQkuADZmy: `framer-v-m35qek`, ZwoVdf57B: `framer-v-clg6x5` }),
      (B = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (V = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(p.Provider, { value: o, children: n });
      }),
      (H = { "On Dark": `ZwoVdf57B`, "On Light": `UQkuADZmy` }),
      (U = d.create(r)),
      (W = ({ height: e, id: t, label: n, width: r, ...i }) => ({
        ...i,
        variant: H[i.variant] ?? i.variant ?? `UQkuADZmy`,
        X3YPjSny2: n ?? i.X3YPjSny2 ?? `Selected work`,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = O(
        c(function (e, t) {
          let a = i(null),
            c = t ?? a,
            l = n(),
            { activeLocale: u, setLocale: p } = C();
          E();
          let { style: m, className: _, layoutId: v, variant: b, X3YPjSny2: S, ...T } = W(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: M,
              isLoading: P,
              setGestureState: I,
              setVariant: H,
              variants: K,
            } = h({
              cycleOrder: L,
              defaultVariant: `UQkuADZmy`,
              ref: c,
              variant: b,
              variantClassNames: z,
            }),
            q = G(e, K),
            J = y(R, N);
          return s(f, {
            id: v ?? l,
            children: s(U, {
              animate: K,
              initial: !1,
              children: s(V, {
                value: B,
                children: o(d.div, {
                  ...T,
                  ...A,
                  className: y(J, `framer-m35qek`, _, O),
                  "data-framer-name": `On Light`,
                  layoutDependency: q,
                  layoutId: `UQkuADZmy`,
                  ref: c,
                  style: { ...m },
                  ...F({ ZwoVdf57B: { "data-framer-name": `On Dark` } }, D, M),
                  children: [
                    s(w, {
                      children: s(g, {
                        className: `framer-16ss21h-container`,
                        "data-code-component-plugin-id": `api`,
                        isAuthoredByUser: !0,
                        layoutDependency: q,
                        layoutId: `bx_edj1u7-container`,
                        nodeId: `bx_edj1u7`,
                        rendersWithMotion: !0,
                        scopeId: `lze1M1_mv`,
                        children: s(j, {
                          color: `var(--token-734d6cd4-ddb5-47a8-905f-b05d3e21e5a1)`,
                          duration: 8,
                          face: !1,
                          faceColor: `rgb(20, 10, 51)`,
                          height: `100%`,
                          id: `bx_edj1u7`,
                          layoutId: `bx_edj1u7`,
                          outline: `rgb(20, 10, 51)`,
                          outlineWidth: 0,
                          reverse: !1,
                          shape: `sparkle`,
                          spin: !0,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                          ...F(
                            {
                              ZwoVdf57B: {
                                color: `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                              },
                            },
                            D,
                            M
                          ),
                        }),
                      }),
                    }),
                    s(x, {
                      __fromCanvasComponent: !0,
                      children: s(r, {
                        children: s(d.p, {
                          className: `framer-styles-preset-f38zr3`,
                          "data-styles-preset": `KYasCCnOZ`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8))`,
                          },
                          children: `Label`,
                        }),
                      }),
                      className: `framer-1qet55w`,
                      fonts: [`Inter`],
                      layoutDependency: q,
                      layoutId: `qlEBhbLIy`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                      },
                      text: S,
                      variants: {
                        ZwoVdf57B: {
                          "--extracted-r6o4lv": `var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b)`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...F(
                        {
                          ZwoVdf57B: {
                            children: s(r, {
                              children: s(d.p, {
                                className: `framer-styles-preset-f38zr3`,
                                "data-styles-preset": `KYasCCnOZ`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3a016fa1-6bbb-48b2-b1d3-8e84a494174b))`,
                                },
                                children: `Selected work`,
                              }),
                            }),
                          },
                        },
                        D,
                        M
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-zxz4R.framer-151acbr, .framer-zxz4R .framer-151acbr { display: block; }`,
          `.framer-zxz4R.framer-m35qek { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
          `.framer-zxz4R .framer-16ss21h-container { flex: none; height: 18px; position: relative; width: 18px; }`,
          `.framer-zxz4R .framer-1qet55w { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...k,
        ],
        `framer-zxz4R`
      )),
      (K.displayName = `Eyebrow`),
      (K.defaultProps = { height: 18, width: 149 }),
      T(K, {
        variant: {
          options: [`UQkuADZmy`, `ZwoVdf57B`],
          optionTitles: [`On Light`, `On Dark`],
          title: `Variant`,
          type: D.Enum,
        },
        X3YPjSny2: { defaultValue: `Selected work`, title: `Label`, type: D.String },
        onX3YPjSny2Change: { changes: `X3YPjSny2`, type: D.ChangeHandler },
      }),
      b(
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
          ...I,
          ..._(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { q as n, K as t };
//# sourceMappingURL=lze1M1_mv.CtjwDfQF.mjs.map
