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
import { M as d, i as ee, o as f, t as p } from "./motion.BnyVzGcg.mjs";
import {
  Ct as m,
  H as h,
  J as g,
  N as _,
  O as v,
  T as y,
  U as b,
  V as x,
  _t as S,
  g as te,
  k as C,
  lt as w,
  o as T,
  p as ne,
  wt as E,
} from "./framer.DCAwtIDZ.mjs";
import { _ as D, v as O } from "./shared-lib.D3cLfu14.mjs";
import { i as k, n as A, r as j, t as re } from "./J9ImekJ0u.BznW4BSb.mjs";
import { i as M, n as N, r as P, t as ie } from "./lZS6BJmxQ.DTmj87Yj.mjs";
import { i as F, n as ae, r as I, t as L } from "./LJodCLJG3.BWb2UJeG.mjs";
function R(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  oe = e(() => {
    (l(),
      g(),
      p(),
      u(),
      O(),
      k(),
      F(),
      M(),
      (z = x(D)),
      (B = { Bd_3TepsU: { hover: !0 }, qmoCa8K8U: { hover: !0 } }),
      (V = [`qmoCa8K8U`, `Bd_3TepsU`]),
      (H = `framer-1KuAG`),
      (U = { Bd_3TepsU: `framer-v-1j4mmen`, qmoCa8K8U: `framer-v-hi0u08` }),
      (W = { bounce: 0.25, delay: 0, duration: 0.5, type: `spring` }),
      (G = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: n });
      }),
      (K = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (q = { Desktop: `qmoCa8K8U`, Phone: `Bd_3TepsU` }),
      (J = d.create(r)),
      (Y = ({
        category: e,
        color: t,
        cover: n,
        height: r,
        id: i,
        ink: a,
        link: o,
        number: s,
        services: c,
        title: l,
        width: u,
        ...d
      }) => ({
        ...d,
        AEso4sPWv: s ?? d.AEso4sPWv ?? `01`,
        M8b95yMmg: c ?? d.M8b95yMmg ?? `Mobile App · UI/UX Design · Flutter`,
        rTjoOE7pW: l ?? d.rTjoOE7pW ?? `JOYCHARM`,
        tztAFg8ZY: t ?? d.tztAFg8ZY ?? `rgb(200, 245, 66)`,
        uXsem3ZXb: a ?? d.uXsem3ZXb ?? `rgb(20, 10, 51)`,
        variant: q[d.variant] ?? d.variant ?? `qmoCa8K8U`,
        wEDyxP4zf: n ??
          d.wEDyxP4zf ?? {
            pixelHeight: 1067,
            pixelWidth: 1600,
            src: `../../assets/images/nBEGBSeDavIFhut1a255bkAiosA-56567d.jpg`,
            srcSet: `../../assets/images/nBEGBSeDavIFhut1a255bkAiosA-44939f.jpg 512w,../../assets/images/nBEGBSeDavIFhut1a255bkAiosA.jpg 1024w,../../assets/images/nBEGBSeDavIFhut1a255bkAiosA-56567d.jpg 1600w`,
          },
        xCLoOfGJ7: e ?? d.xCLoOfGJ7 ?? `Mobile App · UI/UX Flutter`,
        xiJZbPXgK: o ?? d.xiJZbPXgK,
      })),
      (X = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = E(
        c(function (e, t) {
          let a = i(null),
            c = t ?? a,
            l = n(),
            { activeLocale: u, setLocale: f } = S(),
            p = w(),
            {
              style: h,
              className: g,
              layoutId: v,
              variant: x,
              rTjoOE7pW: C,
              AEso4sPWv: T,
              xCLoOfGJ7: E,
              M8b95yMmg: O,
              wEDyxP4zf: k,
              tztAFg8ZY: A,
              uXsem3ZXb: j,
              xiJZbPXgK: M,
              ...N
            } = Y(e),
            {
              baseVariant: P,
              classNames: F,
              clearLoadingGesture: ae,
              gestureHandlers: I,
              gestureVariant: z,
              isLoading: q,
              setGestureState: Z,
              setVariant: oe,
              variants: Q,
            } = m({
              cycleOrder: V,
              defaultVariant: `qmoCa8K8U`,
              enabledGestures: B,
              ref: c,
              variant: x,
              variantClassNames: U,
            }),
            $ = X(e, Q),
            se = _(H, re, ie, L),
            ce = () => !(z === `Bd_3TepsU-hover` || P === `Bd_3TepsU`);
          return s(ee, {
            id: v ?? l,
            children: s(J, {
              animate: Q,
              initial: !1,
              children: s(G, {
                value: W,
                children: s(te, {
                  href: M,
                  motionChild: !0,
                  nodeId: `qmoCa8K8U`,
                  scopeId: `JCAY23NY7`,
                  children: o(d.a, {
                    ...N,
                    ...I,
                    className: `${_(se, `framer-hi0u08`, g, F)} framer-rsq4ja`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: $,
                    layoutId: `qmoCa8K8U`,
                    ref: c,
                    style: {
                      backgroundColor: A,
                      borderBottomLeftRadius: 36,
                      borderBottomRightRadius: 36,
                      borderTopLeftRadius: 36,
                      borderTopRightRadius: 36,
                      ...h,
                    },
                    variants: {
                      Bd_3TepsU: {
                        borderBottomLeftRadius: 28,
                        borderBottomRightRadius: 28,
                        borderTopLeftRadius: 28,
                        borderTopRightRadius: 28,
                      },
                    },
                    ...R(
                      {
                        "Bd_3TepsU-hover": { "data-framer-name": void 0 },
                        "qmoCa8K8U-hover": { "data-framer-name": void 0 },
                        Bd_3TepsU: { "data-framer-name": `Phone` },
                      },
                      P,
                      z
                    ),
                    children: [
                      o(d.div, {
                        className: `framer-lqa0bu`,
                        "data-framer-name": `Top`,
                        layoutDependency: $,
                        layoutId: `Sg7ZD_ZIh`,
                        children: [
                          o(d.div, {
                            className: `framer-4wfxw1`,
                            "data-framer-name": `Meta`,
                            layoutDependency: $,
                            layoutId: `JPlqfVZK1`,
                            children: [
                              s(y, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(d.h4, {
                                    className: `framer-styles-preset-17iimqy`,
                                    "data-styles-preset": `J9ImekJ0u`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-1eung3n, var(--variable-reference-uXsem3ZXb-JCAY23NY7))`,
                                    },
                                    children: `Number`,
                                  }),
                                }),
                                className: `framer-ab0s4k`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `M0Zy8GV2I`,
                                style: {
                                  "--extracted-1eung3n": `var(--variable-reference-uXsem3ZXb-JCAY23NY7)`,
                                  "--variable-reference-uXsem3ZXb-JCAY23NY7": j,
                                },
                                text: T,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              ce() &&
                                s(d.div, {
                                  className: `framer-iipbtp`,
                                  "data-framer-name": `Dash`,
                                  layoutDependency: $,
                                  layoutId: `XXJhq0iBj`,
                                  style: {
                                    backgroundColor: j,
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    borderTopLeftRadius: 4,
                                    borderTopRightRadius: 4,
                                  },
                                }),
                              s(y, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(d.p, {
                                    className: `framer-styles-preset-x0jte0`,
                                    "data-styles-preset": `lZS6BJmxQ`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-uXsem3ZXb-JCAY23NY7))`,
                                    },
                                    children: `Category`,
                                  }),
                                }),
                                className: `framer-1ruixga`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `mHWvUcx6R`,
                                style: {
                                  "--extracted-r6o4lv": `var(--variable-reference-uXsem3ZXb-JCAY23NY7)`,
                                  "--variable-reference-uXsem3ZXb-JCAY23NY7": j,
                                },
                                text: E,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...R(
                                  {
                                    Bd_3TepsU: {
                                      children: s(r, {
                                        children: s(d.p, {
                                          className: `framer-styles-preset-x0jte0`,
                                          "data-styles-preset": `lZS6BJmxQ`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-uXsem3ZXb-JCAY23NY7))`,
                                          },
                                          children: `Mobile App · UI/UX Flutter`,
                                        }),
                                      }),
                                    },
                                  },
                                  P,
                                  z
                                ),
                              }),
                            ],
                          }),
                          s(G, {
                            value: W,
                            children: s(d.div, {
                              className: `framer-qbrekf`,
                              "data-framer-name": `Chip`,
                              layoutDependency: $,
                              layoutId: `qxYOFnRnC`,
                              style: {
                                backgroundColor: `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                borderBottomLeftRadius: 100,
                                borderBottomRightRadius: 100,
                                borderTopLeftRadius: 100,
                                borderTopRightRadius: 100,
                                rotate: 0,
                              },
                              variants: {
                                "Bd_3TepsU-hover": {
                                  backgroundColor: `var(--token-b817f866-8039-49f6-ab21-6a0222e4faac)`,
                                  rotate: 45,
                                },
                                "qmoCa8K8U-hover": {
                                  backgroundColor: `var(--token-b817f866-8039-49f6-ab21-6a0222e4faac)`,
                                  rotate: 45,
                                },
                              },
                              children: s(D, {
                                animated: !0,
                                className: `framer-qf1jp7`,
                                layoutDependency: $,
                                layoutId: `eoGB18lUW`,
                                style: {
                                  "--1m6trwb": 0,
                                  "--21h8s6": `var(--token-e30e6a58-c262-4ae0-99ce-71a907221d67)`,
                                  "--pgex8v": 2,
                                },
                                variants: {
                                  "Bd_3TepsU-hover": {
                                    "--21h8s6": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                  },
                                  "qmoCa8K8U-hover": {
                                    "--21h8s6": `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                                  },
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                      s(d.div, {
                        className: `framer-1549ebb`,
                        "data-framer-name": `Image Wrap`,
                        layoutDependency: $,
                        layoutId: `YCl8vO2Qg`,
                        style: {
                          backgroundColor: `var(--token-137ff504-6231-4b76-a8e7-5c2d379ea0f8)`,
                          borderBottomLeftRadius: 24,
                          borderBottomRightRadius: 24,
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                        },
                        variants: {
                          Bd_3TepsU: {
                            borderBottomLeftRadius: 18,
                            borderBottomRightRadius: 18,
                            borderTopLeftRadius: 18,
                            borderTopRightRadius: 18,
                          },
                        },
                        children: s(G, {
                          value: W,
                          children: s(ne, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: b((p?.y || 0) + 20 + 72 + 0),
                              pixelHeight: 1067,
                              pixelWidth: 1600,
                              sizes: `calc(${p?.width || `100vw`} - 40px)`,
                              ...K(k),
                            },
                            className: `framer-e6364w`,
                            "data-framer-name": `Image`,
                            layoutDependency: $,
                            layoutId: `Ig5gDiRLV`,
                            style: { scale: 1 },
                            variants: {
                              "Bd_3TepsU-hover": { scale: 1.07 },
                              "qmoCa8K8U-hover": { scale: 1.07 },
                            },
                            ...R(
                              {
                                Bd_3TepsU: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: b((p?.y || 0) + 14 + 118 + 0),
                                    pixelHeight: 1067,
                                    pixelWidth: 1600,
                                    sizes: `calc(${p?.width || `100vw`} - 28px)`,
                                    ...K(k),
                                  },
                                },
                              },
                              P,
                              z
                            ),
                          }),
                        }),
                      }),
                      o(d.div, {
                        className: `framer-1gmlxkc`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: $,
                        layoutId: `v_Vqdw41f`,
                        children: [
                          s(y, {
                            __fromCanvasComponent: !0,
                            children: s(r, {
                              children: s(d.h3, {
                                className: `framer-styles-preset-er5li9`,
                                "data-styles-preset": `LJodCLJG3`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--variable-reference-uXsem3ZXb-JCAY23NY7))`,
                                },
                                children: `Title`,
                              }),
                            }),
                            className: `framer-1dhs3bc`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `ddIJEhWKq`,
                            style: {
                              "--extracted-a0htzi": `var(--variable-reference-uXsem3ZXb-JCAY23NY7)`,
                              "--variable-reference-uXsem3ZXb-JCAY23NY7": j,
                            },
                            text: C,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          s(y, {
                            __fromCanvasComponent: !0,
                            children: s(r, {
                              children: s(d.p, {
                                className: `framer-styles-preset-x0jte0`,
                                "data-styles-preset": `lZS6BJmxQ`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-uXsem3ZXb-JCAY23NY7))`,
                                },
                                children: `Services`,
                              }),
                            }),
                            className: `framer-hr9zsw`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `WTnWeYqeT`,
                            style: {
                              "--extracted-r6o4lv": `var(--variable-reference-uXsem3ZXb-JCAY23NY7)`,
                              "--variable-reference-uXsem3ZXb-JCAY23NY7": j,
                              opacity: 0.75,
                            },
                            text: O,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
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
          `.framer-1KuAG.framer-rsq4ja, .framer-1KuAG .framer-rsq4ja { display: block; }`,
          `.framer-1KuAG.framer-hi0u08 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; text-decoration: none; width: 560px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1KuAG .framer-lqa0bu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 4px 4px 0px 8px; position: relative; width: 100%; }`,
          `.framer-1KuAG .framer-4wfxw1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
          `.framer-1KuAG .framer-ab0s4k, .framer-1KuAG .framer-1ruixga { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-1KuAG .framer-iipbtp { flex: none; height: 3px; position: relative; width: 28px; }`,
          `.framer-1KuAG .framer-qbrekf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; padding: 0px; position: relative; width: 48px; }`,
          `.framer-1KuAG .framer-qf1jp7 { flex: none; height: auto; position: relative; width: 20px; }`,
          `.framer-1KuAG .framer-1549ebb { flex: none; height: 340px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1KuAG .framer-e6364w { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,
          `.framer-1KuAG .framer-1gmlxkc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px 8px 8px 8px; position: relative; width: 100%; }`,
          `.framer-1KuAG .framer-1dhs3bc, .framer-1KuAG .framer-hr9zsw { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-1KuAG.framer-v-1j4mmen.framer-hi0u08 { gap: 16px; padding: 14px; width: 358px; }`,
          `.framer-1KuAG.framer-v-1j4mmen .framer-lqa0bu { gap: 10px; justify-content: flex-start; }`,
          `.framer-1KuAG.framer-v-1j4mmen .framer-4wfxw1 { flex: 1 0 0px; width: 1px; }`,
          `.framer-1KuAG.framer-v-1j4mmen .framer-1ruixga { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: 1 0 0px; overflow: var(--overflow-clip-fallback, clip); white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-1KuAG.framer-v-1j4mmen .framer-1549ebb { height: 230px; }`,
          ...A,
          ...N,
          ...ae,
        ],
        `framer-1KuAG`
      )),
      (Z.displayName = `Work Card`),
      (Z.defaultProps = { height: 568, width: 560 }),
      C(Z, {
        variant: {
          options: [`qmoCa8K8U`, `Bd_3TepsU`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: T.Enum,
        },
        rTjoOE7pW: { defaultValue: `JOYCHARM`, title: `Title`, type: T.String },
        onrTjoOE7pWChange: { changes: `rTjoOE7pW`, type: T.ChangeHandler },
        AEso4sPWv: { defaultValue: `01`, title: `Number`, type: T.String },
        onAEso4sPWvChange: { changes: `AEso4sPWv`, type: T.ChangeHandler },
        xCLoOfGJ7: {
          defaultValue: `Mobile App · UI/UX Flutter`,
          title: `Category`,
          type: T.String,
        },
        onxCLoOfGJ7Change: { changes: `xCLoOfGJ7`, type: T.ChangeHandler },
        M8b95yMmg: {
          defaultValue: `Mobile App · UI/UX Design · Flutter`,
          title: `Services`,
          type: T.String,
        },
        onM8b95yMmgChange: { changes: `M8b95yMmg`, type: T.ChangeHandler },
        wEDyxP4zf: {
          __defaultAssetReference: `data:framer/asset-reference,nBEGBSeDavIFhut1a255bkAiosA.jpg?originalFilename=photo-1625838144804-300f3907c110%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixlib%3Drb-4.1.jpg&width=1600&height=1067`,
          title: `Cover`,
          type: T.ResponsiveImage,
        },
        tztAFg8ZY: { defaultValue: `rgb(200, 245, 66)`, title: `Color`, type: T.Color },
        uXsem3ZXb: { defaultValue: `rgb(20, 10, 51)`, title: `Ink`, type: T.Color },
        xiJZbPXgK: { title: `Link`, type: T.Link },
      }),
      v(
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
          ...z,
          ...h(j),
          ...h(P),
          ...h(I),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { oe as n, Z as t };
//# sourceMappingURL=JCAY23NY7.mwnTnWRf.mjs.map
