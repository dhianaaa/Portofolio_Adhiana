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
  J as _,
  N as v,
  O as y,
  T as b,
  V as x,
  _t as S,
  i as C,
  k as w,
  lt as T,
  o as E,
  wt as D,
} from "./framer.DCAwtIDZ.mjs";
import { g as O, h as k } from "./shared-lib.D3cLfu14.mjs";
function A(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H = e(() => {
    (l(),
      _(),
      m(),
      u(),
      O(),
      (j = x(k)),
      (M = [`YSzNnzG6r`, `A5eyYbAHw`, `cnH9CNbM2`, `LkpHrvV_1`, `fTaTEn_hH`, `iIOkhoXO1`]),
      (N = `framer-9Wdhr`),
      (P = {
        A5eyYbAHw: `framer-v-lrnfw4`,
        cnH9CNbM2: `framer-v-yy1y0o`,
        fTaTEn_hH: `framer-v-123rnxe`,
        iIOkhoXO1: `framer-v-13iebwh`,
        LkpHrvV_1: `framer-v-1n3rxtw`,
        YSzNnzG6r: `framer-v-1uwl1yl`,
      }),
      (F = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (I = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(p.Provider, { value: o, children: n });
      }),
      (L = {
        Blob: `LkpHrvV_1`,
        Burst: `YSzNnzG6r`,
        Circle: `fTaTEn_hH`,
        Clover: `cnH9CNbM2`,
        Pill: `iIOkhoXO1`,
        Scallop: `A5eyYbAHw`,
      }),
      (R = d.create(r)),
      (z = ({ fill: e, height: t, id: n, ink: r, label: i, width: a, ...o }) => ({
        ...o,
        KqN4lAVnf: e ?? o.KqN4lAVnf ?? `var(--token-ff4012e0-4cb5-4140-876f-6444e9a1c1a8)`,
        KWbywHy9l: r ?? o.KWbywHy9l ?? `var(--token-b817f866-8039-49f6-ab21-6a0222e4faac)`,
        variant: L[o.variant] ?? o.variant ?? `YSzNnzG6r`,
        xGQJp2RKf: i ?? o.xGQJp2RKf ?? `03+ years`,
      })),
      (B = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = D(
        c(function (e, t) {
          let a = i(null),
            c = t ?? a,
            l = n(),
            { activeLocale: u, setLocale: p } = S();
          T();
          let {
              style: m,
              className: _,
              layoutId: y,
              variant: x,
              xGQJp2RKf: w,
              KqN4lAVnf: E,
              KWbywHy9l: D,
              ...O
            } = z(e),
            {
              baseVariant: j,
              classNames: L,
              clearLoadingGesture: V,
              gestureHandlers: H,
              gestureVariant: U,
              isLoading: W,
              setGestureState: G,
              setVariant: K,
              variants: q,
            } = h({
              cycleOrder: M,
              defaultVariant: `YSzNnzG6r`,
              ref: c,
              variant: x,
              variantClassNames: P,
            }),
            J = B(e, q),
            Y = v(N),
            X = () => j !== `iIOkhoXO1`;
          return s(f, {
            id: y ?? l,
            children: s(R, {
              animate: q,
              initial: !1,
              children: s(I, {
                value: F,
                children: o(d.div, {
                  ...O,
                  ...H,
                  className: v(Y, `framer-1uwl1yl`, _, L),
                  "data-framer-name": `Burst`,
                  layoutDependency: J,
                  layoutId: `YSzNnzG6r`,
                  ref: c,
                  style: {
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    ...m,
                  },
                  variants: {
                    iIOkhoXO1: {
                      backgroundColor: E,
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                    },
                  },
                  ...A(
                    {
                      A5eyYbAHw: { "data-framer-name": `Scallop` },
                      cnH9CNbM2: { "data-framer-name": `Clover` },
                      fTaTEn_hH: { "data-framer-name": `Circle` },
                      iIOkhoXO1: { "data-framer-name": `Pill` },
                      LkpHrvV_1: { "data-framer-name": `Blob` },
                    },
                    j,
                    U
                  ),
                  children: [
                    X() &&
                      s(C, {
                        children: s(g, {
                          className: `framer-o4t607-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Shape`,
                          isAuthoredByUser: !0,
                          layoutDependency: J,
                          layoutId: `LNFLDvSHp-container`,
                          name: `Shape`,
                          nodeId: `LNFLDvSHp`,
                          rendersWithMotion: !0,
                          scopeId: `zTmnUBIAh`,
                          children: s(k, {
                            color: E,
                            duration: 14,
                            face: !1,
                            faceColor: `rgb(20, 10, 51)`,
                            height: `100%`,
                            id: `LNFLDvSHp`,
                            layoutId: `LNFLDvSHp`,
                            name: `Shape`,
                            outline: `rgb(20, 10, 51)`,
                            outlineWidth: 0,
                            reverse: !1,
                            shape: `burst`,
                            spin: !1,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                            ...A(
                              {
                                A5eyYbAHw: { shape: `scallop` },
                                cnH9CNbM2: { shape: `clover` },
                                fTaTEn_hH: { shape: `circle` },
                                LkpHrvV_1: { shape: `blob` },
                              },
                              j,
                              U
                            ),
                          }),
                        }),
                      }),
                    s(b, {
                      __fromCanvasComponent: !0,
                      children: s(r, {
                        children: s(d.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS04MDA=`,
                            "--framer-font-family": `"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif`,
                            "--framer-font-weight": `800`,
                            "--framer-letter-spacing": `-0.01em`,
                            "--framer-line-height": `1.05em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-KWbywHy9l-zTmnUBIAh))`,
                          },
                          children: `Label`,
                        }),
                      }),
                      className: `framer-9cntyt`,
                      fonts: [`GF;Bricolage Grotesque-800`],
                      layoutDependency: J,
                      layoutId: `Nbg5k350d`,
                      style: {
                        "--extracted-r6o4lv": `var(--variable-reference-KWbywHy9l-zTmnUBIAh)`,
                        "--variable-reference-KWbywHy9l-zTmnUBIAh": D,
                      },
                      text: w,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-9Wdhr.framer-1522437, .framer-9Wdhr .framer-1522437 { display: block; }`,
          `.framer-9Wdhr.framer-1uwl1yl { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 150px; justify-content: center; padding: 0px 26px 0px 26px; position: relative; width: 150px; }`,
          `.framer-9Wdhr .framer-o4t607-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,
          `.framer-9Wdhr .framer-9cntyt { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-9Wdhr.framer-v-13iebwh.framer-1uwl1yl { height: min-content; padding: 12px 22px 12px 22px; width: min-content; }`,
          `.framer-9Wdhr.framer-v-13iebwh .framer-9cntyt { white-space: pre; width: auto; }`,
        ],
        `framer-9Wdhr`
      )),
      (V.displayName = `Sticker`),
      (V.defaultProps = { height: 150, width: 150 }),
      w(V, {
        variant: {
          options: [`YSzNnzG6r`, `A5eyYbAHw`, `cnH9CNbM2`, `LkpHrvV_1`, `fTaTEn_hH`, `iIOkhoXO1`],
          optionTitles: [`Burst`, `Scallop`, `Clover`, `Blob`, `Circle`, `Pill`],
          title: `Variant`,
          type: E.Enum,
        },
        xGQJp2RKf: { defaultValue: `03+ years`, title: `Label`, type: E.String },
        onxGQJp2RKfChange: { changes: `xGQJp2RKf`, type: E.ChangeHandler },
        KqN4lAVnf: {
          defaultValue: `var(--token-ff4012e0-4cb5-4140-876f-6444e9a1c1a8)`,
          title: `Fill`,
          type: E.Color,
        },
        KWbywHy9l: {
          defaultValue: `var(--token-b817f866-8039-49f6-ab21-6a0222e4faac)`,
          title: `Ink`,
          type: E.Color,
        },
      }),
      y(
        V,
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
          ...j,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { H as n, V as t };
//# sourceMappingURL=zTmnUBIAh.DhimjF9h.mjs.map
