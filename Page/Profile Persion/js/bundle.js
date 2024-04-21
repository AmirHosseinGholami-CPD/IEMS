! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {}) }(this, (function(e) { "use strict";

    function t(e) { if (null == e) return window; if ("[object Window]" !== e.toString()) { var t = e.ownerDocument; return t && t.defaultView || window } return e }

    function n(e) { return e instanceof t(e).Element || e instanceof Element }

    function r(e) { return e instanceof t(e).HTMLElement || e instanceof HTMLElement }

    function o(e) { return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot) } var i = Math.max,
        a = Math.min,
        s = Math.round;

    function f() { var e = navigator.userAgentData; return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) { return e.brand + "/" + e.version })).join(" ") : navigator.userAgent }

    function c() { return !/^((?!chrome|android).)*safari/i.test(f()) }

    function p(e, o, i) { void 0 === o && (o = !1), void 0 === i && (i = !1); var a = e.getBoundingClientRect(),
            f = 1,
            p = 1;
        o && r(e) && (f = e.offsetWidth > 0 && s(a.width) / e.offsetWidth || 1, p = e.offsetHeight > 0 && s(a.height) / e.offsetHeight || 1); var u = (n(e) ? t(e) : window).visualViewport,
            l = !c() && i,
            d = (a.left + (l && u ? u.offsetLeft : 0)) / f,
            h = (a.top + (l && u ? u.offsetTop : 0)) / p,
            m = a.width / f,
            v = a.height / p; return { width: m, height: v, top: h, right: d + m, bottom: h + v, left: d, x: d, y: h } }

    function u(e) { var n = t(e); return { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset } }

    function l(e) { return e ? (e.nodeName || "").toLowerCase() : null }

    function d(e) { return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement }

    function h(e) { return p(d(e)).left + u(e).scrollLeft }

    function m(e) { return t(e).getComputedStyle(e) }

    function v(e) { var t = m(e),
            n = t.overflow,
            r = t.overflowX,
            o = t.overflowY; return /auto|scroll|overlay|hidden/.test(n + o + r) }

    function y(e, n, o) { void 0 === o && (o = !1); var i, a, f = r(n),
            c = r(n) && function(e) { var t = e.getBoundingClientRect(),
                    n = s(t.width) / e.offsetWidth || 1,
                    r = s(t.height) / e.offsetHeight || 1; return 1 !== n || 1 !== r }(n),
            m = d(n),
            y = p(e, c, o),
            g = { scrollLeft: 0, scrollTop: 0 },
            b = { x: 0, y: 0 }; return (f || !f && !o) && (("body" !== l(n) || v(m)) && (g = (i = n) !== t(i) && r(i) ? { scrollLeft: (a = i).scrollLeft, scrollTop: a.scrollTop } : u(i)), r(n) ? ((b = p(n, !0)).x += n.clientLeft, b.y += n.clientTop) : m && (b.x = h(m))), { x: y.left + g.scrollLeft - b.x, y: y.top + g.scrollTop - b.y, width: y.width, height: y.height } }

    function g(e) { var t = p(e),
            n = e.offsetWidth,
            r = e.offsetHeight; return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r } }

    function b(e) { return "html" === l(e) ? e : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || d(e) }

    function x(e) { return ["html", "body", "#document"].indexOf(l(e)) >= 0 ? e.ownerDocument.body : r(e) && v(e) ? e : x(b(e)) }

    function w(e, n) { var r;
        void 0 === n && (n = []); var o = x(e),
            i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
            a = t(o),
            s = i ? [a].concat(a.visualViewport || [], v(o) ? o : []) : o,
            f = n.concat(s); return i ? f : f.concat(w(b(s))) }

    function O(e) { return ["table", "td", "th"].indexOf(l(e)) >= 0 }

    function j(e) { return r(e) && "fixed" !== m(e).position ? e.offsetParent : null }

    function E(e) { for (var n = t(e), i = j(e); i && O(i) && "static" === m(i).position;) i = j(i); return i && ("html" === l(i) || "body" === l(i) && "static" === m(i).position) ? n : i || function(e) { var t = /firefox/i.test(f()); if (/Trident/i.test(f()) && r(e) && "fixed" === m(e).position) return null; var n = b(e); for (o(n) && (n = n.host); r(n) && ["html", "body"].indexOf(l(n)) < 0;) { var i = m(n); if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return n;
                n = n.parentNode } return null }(e) || n } var D = "top",
        A = "bottom",
        L = "right",
        P = "left",
        M = "auto",
        k = [D, A, L, P],
        W = "start",
        B = "end",
        H = "viewport",
        T = "popper",
        R = k.reduce((function(e, t) { return e.concat([t + "-" + W, t + "-" + B]) }), []),
        S = [].concat(k, [M]).reduce((function(e, t) { return e.concat([t, t + "-" + W, t + "-" + B]) }), []),
        V = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function q(e) { var t = new Map,
            n = new Set,
            r = [];

        function o(e) { n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) { if (!n.has(e)) { var r = t.get(e);
                    r && o(r) } })), r.push(e) } return e.forEach((function(e) { t.set(e.name, e) })), e.forEach((function(e) { n.has(e.name) || o(e) })), r }

    function C(e, t) { var n = t.getRootNode && t.getRootNode(); if (e.contains(t)) return !0; if (n && o(n)) { var r = t;
            do { if (r && e.isSameNode(r)) return !0;
                r = r.parentNode || r.host } while (r) } return !1 }

    function N(e) { return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }) }

    function I(e, r, o) { return r === H ? N(function(e, n) { var r = t(e),
                o = d(e),
                i = r.visualViewport,
                a = o.clientWidth,
                s = o.clientHeight,
                f = 0,
                p = 0; if (i) { a = i.width, s = i.height; var u = c();
                (u || !u && "fixed" === n) && (f = i.offsetLeft, p = i.offsetTop) } return { width: a, height: s, x: f + h(e), y: p } }(e, o)) : n(r) ? function(e, t) { var n = p(e, !1, "fixed" === t); return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n }(r, o) : N(function(e) { var t, n = d(e),
                r = u(e),
                o = null == (t = e.ownerDocument) ? void 0 : t.body,
                a = i(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                s = i(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                f = -r.scrollLeft + h(e),
                c = -r.scrollTop; return "rtl" === m(o || n).direction && (f += i(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: f, y: c } }(d(e))) }

    function _(e, t, o, s) { var f = "clippingParents" === t ? function(e) { var t = w(b(e)),
                    o = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && r(e) ? E(e) : e; return n(o) ? t.filter((function(e) { return n(e) && C(e, o) && "body" !== l(e) })) : [] }(e) : [].concat(t),
            c = [].concat(f, [o]),
            p = c[0],
            u = c.reduce((function(t, n) { var r = I(e, n, s); return t.top = i(r.top, t.top), t.right = a(r.right, t.right), t.bottom = a(r.bottom, t.bottom), t.left = i(r.left, t.left), t }), I(e, p, s)); return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u }

    function F(e) { return e.split("-")[0] }

    function U(e) { return e.split("-")[1] }

    function z(e) { return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y" }

    function X(e) { var t, n = e.reference,
            r = e.element,
            o = e.placement,
            i = o ? F(o) : null,
            a = o ? U(o) : null,
            s = n.x + n.width / 2 - r.width / 2,
            f = n.y + n.height / 2 - r.height / 2; switch (i) {
            case D:
                t = { x: s, y: n.y - r.height }; break;
            case A:
                t = { x: s, y: n.y + n.height }; break;
            case L:
                t = { x: n.x + n.width, y: f }; break;
            case P:
                t = { x: n.x - r.width, y: f }; break;
            default:
                t = { x: n.x, y: n.y } } var c = i ? z(i) : null; if (null != c) { var p = "y" === c ? "height" : "width"; switch (a) {
                case W:
                    t[c] = t[c] - (n[p] / 2 - r[p] / 2); break;
                case B:
                    t[c] = t[c] + (n[p] / 2 - r[p] / 2) } } return t }

    function Y(e) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e) }

    function G(e, t) { return t.reduce((function(t, n) { return t[n] = e, t }), {}) }

    function J(e, t) { void 0 === t && (t = {}); var r = t,
            o = r.placement,
            i = void 0 === o ? e.placement : o,
            a = r.strategy,
            s = void 0 === a ? e.strategy : a,
            f = r.boundary,
            c = void 0 === f ? "clippingParents" : f,
            u = r.rootBoundary,
            l = void 0 === u ? H : u,
            h = r.elementContext,
            m = void 0 === h ? T : h,
            v = r.altBoundary,
            y = void 0 !== v && v,
            g = r.padding,
            b = void 0 === g ? 0 : g,
            x = Y("number" != typeof b ? b : G(b, k)),
            w = m === T ? "reference" : T,
            O = e.rects.popper,
            j = e.elements[y ? w : m],
            E = _(n(j) ? j : j.contextElement || d(e.elements.popper), c, l, s),
            P = p(e.elements.reference),
            M = X({ reference: P, element: O, strategy: "absolute", placement: i }),
            W = N(Object.assign({}, O, M)),
            B = m === T ? W : P,
            R = { top: E.top - B.top + x.top, bottom: B.bottom - E.bottom + x.bottom, left: E.left - B.left + x.left, right: B.right - E.right + x.right },
            S = e.modifiersData.offset; if (m === T && S) { var V = S[i];
            Object.keys(R).forEach((function(e) { var t = [L, A].indexOf(e) >= 0 ? 1 : -1,
                    n = [D, A].indexOf(e) >= 0 ? "y" : "x";
                R[e] += V[n] * t })) } return R } var K = { placement: "bottom", modifiers: [], strategy: "absolute" };

    function Q() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return !t.some((function(e) { return !(e && "function" == typeof e.getBoundingClientRect) })) }

    function Z(e) { void 0 === e && (e = {}); var t = e,
            r = t.defaultModifiers,
            o = void 0 === r ? [] : r,
            i = t.defaultOptions,
            a = void 0 === i ? K : i; return function(e, t, r) { void 0 === r && (r = a); var i, s, f = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, K, a), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
                c = [],
                p = !1,
                u = { state: f, setOptions: function(r) { var i = "function" == typeof r ? r(f.options) : r;
                        l(), f.options = Object.assign({}, a, f.options, i), f.scrollParents = { reference: n(e) ? w(e) : e.contextElement ? w(e.contextElement) : [], popper: w(t) }; var s, p, d = function(e) { var t = q(e); return V.reduce((function(e, n) { return e.concat(t.filter((function(e) { return e.phase === n }))) }), []) }((s = [].concat(o, f.options.modifiers), p = s.reduce((function(e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t, e }), {}), Object.keys(p).map((function(e) { return p[e] })))); return f.orderedModifiers = d.filter((function(e) { return e.enabled })), f.orderedModifiers.forEach((function(e) { var t = e.name,
                                n = e.options,
                                r = void 0 === n ? {} : n,
                                o = e.effect; if ("function" == typeof o) { var i = o({ state: f, name: t, instance: u, options: r });
                                c.push(i || function() {}) } })), u.update() }, forceUpdate: function() { if (!p) { var e = f.elements,
                                t = e.reference,
                                n = e.popper; if (Q(t, n)) { f.rects = { reference: y(t, E(n), "fixed" === f.options.strategy), popper: g(n) }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach((function(e) { return f.modifiersData[e.name] = Object.assign({}, e.data) })); for (var r = 0; r < f.orderedModifiers.length; r++)
                                    if (!0 !== f.reset) { var o = f.orderedModifiers[r],
                                            i = o.fn,
                                            a = o.options,
                                            s = void 0 === a ? {} : a,
                                            c = o.name; "function" == typeof i && (f = i({ state: f, options: s, name: c, instance: u }) || f) } else f.reset = !1, r = -1 } } }, update: (i = function() { return new Promise((function(e) { u.forceUpdate(), e(f) })) }, function() { return s || (s = new Promise((function(e) { Promise.resolve().then((function() { s = void 0, e(i()) })) }))), s }), destroy: function() { l(), p = !0 } }; if (!Q(e, t)) return u;

            function l() { c.forEach((function(e) { return e() })), c = [] } return u.setOptions(r).then((function(e) {!p && r.onFirstUpdate && r.onFirstUpdate(e) })), u } } var $ = { passive: !0 },
        ee = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {}, effect: function(e) { var n = e.state,
                    r = e.instance,
                    o = e.options,
                    i = o.scroll,
                    a = void 0 === i || i,
                    s = o.resize,
                    f = void 0 === s || s,
                    c = t(n.elements.popper),
                    p = [].concat(n.scrollParents.reference, n.scrollParents.popper); return a && p.forEach((function(e) { e.addEventListener("scroll", r.update, $) })), f && c.addEventListener("resize", r.update, $),
                    function() { a && p.forEach((function(e) { e.removeEventListener("scroll", r.update, $) })), f && c.removeEventListener("resize", r.update, $) } }, data: {} },
        te = { name: "popperOffsets", enabled: !0, phase: "read", fn: function(e) { var t = e.state,
                    n = e.name;
                t.modifiersData[n] = X({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }) }, data: {} },
        ne = { top: "auto", right: "auto", bottom: "auto", left: "auto" };

    function re(e) { var n, r = e.popper,
            o = e.popperRect,
            i = e.placement,
            a = e.variation,
            f = e.offsets,
            c = e.position,
            p = e.gpuAcceleration,
            u = e.adaptive,
            l = e.roundOffsets,
            h = e.isFixed,
            v = f.x,
            y = void 0 === v ? 0 : v,
            g = f.y,
            b = void 0 === g ? 0 : g,
            x = "function" == typeof l ? l({ x: y, y: b }) : { x: y, y: b };
        y = x.x, b = x.y; var w = f.hasOwnProperty("x"),
            O = f.hasOwnProperty("y"),
            j = P,
            M = D,
            k = window; if (u) { var W = E(r),
                H = "clientHeight",
                T = "clientWidth";
            W === t(r) && "static" !== m(W = d(r)).position && "absolute" === c && (H = "scrollHeight", T = "scrollWidth"), (i === D || (i === P || i === L) && a === B) && (M = A, b -= (h && W === k && k.visualViewport ? k.visualViewport.height : W[H]) - o.height, b *= p ? 1 : -1), i !== P && (i !== D && i !== A || a !== B) || (j = L, y -= (h && W === k && k.visualViewport ? k.visualViewport.width : W[T]) - o.width, y *= p ? 1 : -1) } var R, S = Object.assign({ position: c }, u && ne),
            V = !0 === l ? function(e, t) { var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1; return { x: s(n * o) / o || 0, y: s(r * o) / o || 0 } }({ x: y, y: b }, t(r)) : { x: y, y: b }; return y = V.x, b = V.y, p ? Object.assign({}, S, ((R = {})[M] = O ? "0" : "", R[j] = w ? "0" : "", R.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", R)) : Object.assign({}, S, ((n = {})[M] = O ? b + "px" : "", n[j] = w ? y + "px" : "", n.transform = "", n)) } var oe = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function(e) { var t = e.state,
                    n = e.options,
                    r = n.gpuAcceleration,
                    o = void 0 === r || r,
                    i = n.adaptive,
                    a = void 0 === i || i,
                    s = n.roundOffsets,
                    f = void 0 === s || s,
                    c = { placement: F(t.placement), variation: U(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: "fixed" === t.options.strategy };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, re(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: f })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, re(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: f })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }) }, data: {} },
        ie = { name: "applyStyles", enabled: !0, phase: "write", fn: function(e) { var t = e.state;
                Object.keys(t.elements).forEach((function(e) { var n = t.styles[e] || {},
                        o = t.attributes[e] || {},
                        i = t.elements[e];
                    r(i) && l(i) && (Object.assign(i.style, n), Object.keys(o).forEach((function(e) { var t = o[e];!1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t) }))) })) }, effect: function(e) { var t = e.state,
                    n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function() { Object.keys(t.elements).forEach((function(e) { var o = t.elements[e],
                                i = t.attributes[e] || {},
                                a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) { return e[t] = "", e }), {});
                            r(o) && l(o) && (Object.assign(o.style, a), Object.keys(i).forEach((function(e) { o.removeAttribute(e) }))) })) } }, requires: ["computeStyles"] },
        ae = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function(e) { var t = e.state,
                    n = e.options,
                    r = e.name,
                    o = n.offset,
                    i = void 0 === o ? [0, 0] : o,
                    a = S.reduce((function(e, n) { return e[n] = function(e, t, n) { var r = F(e),
                                o = [P, D].indexOf(r) >= 0 ? -1 : 1,
                                i = "function" == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
                                a = i[0],
                                s = i[1]; return a = a || 0, s = (s || 0) * o, [P, L].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s } }(n, t.rects, i), e }), {}),
                    s = a[t.placement],
                    f = s.x,
                    c = s.y;
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a } },
        se = { left: "right", right: "left", bottom: "top", top: "bottom" };

    function fe(e) { return e.replace(/left|right|bottom|top/g, (function(e) { return se[e] })) } var ce = { start: "end", end: "start" };

    function pe(e) { return e.replace(/start|end/g, (function(e) { return ce[e] })) }

    function ue(e, t) { void 0 === t && (t = {}); var n = t,
            r = n.placement,
            o = n.boundary,
            i = n.rootBoundary,
            a = n.padding,
            s = n.flipVariations,
            f = n.allowedAutoPlacements,
            c = void 0 === f ? S : f,
            p = U(r),
            u = p ? s ? R : R.filter((function(e) { return U(e) === p })) : k,
            l = u.filter((function(e) { return c.indexOf(e) >= 0 }));
        0 === l.length && (l = u); var d = l.reduce((function(t, n) { return t[n] = J(e, { placement: n, boundary: o, rootBoundary: i, padding: a })[F(n)], t }), {}); return Object.keys(d).sort((function(e, t) { return d[e] - d[t] })) } var le = { name: "flip", enabled: !0, phase: "main", fn: function(e) { var t = e.state,
                n = e.options,
                r = e.name; if (!t.modifiersData[r]._skip) { for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, p = n.boundary, u = n.rootBoundary, l = n.altBoundary, d = n.flipVariations, h = void 0 === d || d, m = n.allowedAutoPlacements, v = t.options.placement, y = F(v), g = f || (y !== v && h ? function(e) { if (F(e) === M) return []; var t = fe(e); return [pe(e), t, pe(t)] }(v) : [fe(v)]), b = [v].concat(g).reduce((function(e, n) { return e.concat(F(n) === M ? ue(t, { placement: n, boundary: p, rootBoundary: u, padding: c, flipVariations: h, allowedAutoPlacements: m }) : n) }), []), x = t.rects.reference, w = t.rects.popper, O = new Map, j = !0, E = b[0], k = 0; k < b.length; k++) { var B = b[k],
                        H = F(B),
                        T = U(B) === W,
                        R = [D, A].indexOf(H) >= 0,
                        S = R ? "width" : "height",
                        V = J(t, { placement: B, boundary: p, rootBoundary: u, altBoundary: l, padding: c }),
                        q = R ? T ? L : P : T ? A : D;
                    x[S] > w[S] && (q = fe(q)); var C = fe(q),
                        N = []; if (i && N.push(V[H] <= 0), s && N.push(V[q] <= 0, V[C] <= 0), N.every((function(e) { return e }))) { E = B, j = !1; break }
                    O.set(B, N) } if (j)
                    for (var I = function(e) { var t = b.find((function(t) { var n = O.get(t); if (n) return n.slice(0, e).every((function(e) { return e })) })); if (t) return E = t, "break" }, _ = h ? 3 : 1; _ > 0 && "break" !== I(_); _--);
                t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0) } }, requiresIfExists: ["offset"], data: { _skip: !1 } };

    function de(e, t, n) { return i(e, a(t, n)) } var he = { name: "preventOverflow", enabled: !0, phase: "main", fn: function(e) { var t = e.state,
                    n = e.options,
                    r = e.name,
                    o = n.mainAxis,
                    s = void 0 === o || o,
                    f = n.altAxis,
                    c = void 0 !== f && f,
                    p = n.boundary,
                    u = n.rootBoundary,
                    l = n.altBoundary,
                    d = n.padding,
                    h = n.tether,
                    m = void 0 === h || h,
                    v = n.tetherOffset,
                    y = void 0 === v ? 0 : v,
                    b = J(t, { boundary: p, rootBoundary: u, padding: d, altBoundary: l }),
                    x = F(t.placement),
                    w = U(t.placement),
                    O = !w,
                    j = z(x),
                    M = "x" === j ? "y" : "x",
                    k = t.modifiersData.popperOffsets,
                    B = t.rects.reference,
                    H = t.rects.popper,
                    T = "function" == typeof y ? y(Object.assign({}, t.rects, { placement: t.placement })) : y,
                    R = "number" == typeof T ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
                    S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                    V = { x: 0, y: 0 }; if (k) { if (s) { var q, C = "y" === j ? D : P,
                            N = "y" === j ? A : L,
                            I = "y" === j ? "height" : "width",
                            _ = k[j],
                            X = _ + b[C],
                            Y = _ - b[N],
                            G = m ? -H[I] / 2 : 0,
                            K = w === W ? B[I] : H[I],
                            Q = w === W ? -H[I] : -B[I],
                            Z = t.elements.arrow,
                            $ = m && Z ? g(Z) : { width: 0, height: 0 },
                            ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                            te = ee[C],
                            ne = ee[N],
                            re = de(0, B[I], $[I]),
                            oe = O ? B[I] / 2 - G - re - te - R.mainAxis : K - re - te - R.mainAxis,
                            ie = O ? -B[I] / 2 + G + re + ne + R.mainAxis : Q + re + ne + R.mainAxis,
                            ae = t.elements.arrow && E(t.elements.arrow),
                            se = ae ? "y" === j ? ae.clientTop || 0 : ae.clientLeft || 0 : 0,
                            fe = null != (q = null == S ? void 0 : S[j]) ? q : 0,
                            ce = _ + ie - fe,
                            pe = de(m ? a(X, _ + oe - fe - se) : X, _, m ? i(Y, ce) : Y);
                        k[j] = pe, V[j] = pe - _ } if (c) { var ue, le = "x" === j ? D : P,
                            he = "x" === j ? A : L,
                            me = k[M],
                            ve = "y" === M ? "height" : "width",
                            ye = me + b[le],
                            ge = me - b[he],
                            be = -1 !== [D, P].indexOf(x),
                            xe = null != (ue = null == S ? void 0 : S[M]) ? ue : 0,
                            we = be ? ye : me - B[ve] - H[ve] - xe + R.altAxis,
                            Oe = be ? me + B[ve] + H[ve] - xe - R.altAxis : ge,
                            je = m && be ? function(e, t, n) { var r = de(e, t, n); return r > n ? n : r }(we, me, Oe) : de(m ? we : ye, me, m ? Oe : ge);
                        k[M] = je, V[M] = je - me }
                    t.modifiersData[r] = V } }, requiresIfExists: ["offset"] },
        me = { name: "arrow", enabled: !0, phase: "main", fn: function(e) { var t, n = e.state,
                    r = e.name,
                    o = e.options,
                    i = n.elements.arrow,
                    a = n.modifiersData.popperOffsets,
                    s = F(n.placement),
                    f = z(s),
                    c = [P, L].indexOf(s) >= 0 ? "height" : "width"; if (i && a) { var p = function(e, t) { return Y("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e) ? e : G(e, k)) }(o.padding, n),
                        u = g(i),
                        l = "y" === f ? D : P,
                        d = "y" === f ? A : L,
                        h = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c],
                        m = a[f] - n.rects.reference[f],
                        v = E(i),
                        y = v ? "y" === f ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                        b = h / 2 - m / 2,
                        x = p[l],
                        w = y - u[c] - p[d],
                        O = y / 2 - u[c] / 2 + b,
                        j = de(x, O, w),
                        M = f;
                    n.modifiersData[r] = ((t = {})[M] = j, t.centerOffset = j - O, t) } }, effect: function(e) { var t = e.state,
                    n = e.options.element,
                    r = void 0 === n ? "[data-popper-arrow]" : n;
                null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && C(t.elements.popper, r) && (t.elements.arrow = r) }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };

    function ve(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x } }

    function ye(e) { return [D, L, A, P].some((function(t) { return e[t] >= 0 })) } var ge = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(e) { var t = e.state,
                    n = e.name,
                    r = t.rects.reference,
                    o = t.rects.popper,
                    i = t.modifiersData.preventOverflow,
                    a = J(t, { elementContext: "reference" }),
                    s = J(t, { altBoundary: !0 }),
                    f = ve(a, r),
                    c = ve(s, o, i),
                    p = ye(f),
                    u = ye(c);
                t.modifiersData[n] = { referenceClippingOffsets: f, popperEscapeOffsets: c, isReferenceHidden: p, hasPopperEscaped: u }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": u }) } },
        be = Z({ defaultModifiers: [ee, te, oe, ie] }),
        xe = [ee, te, oe, ie, ae, le, he, me, ge],
        we = Z({ defaultModifiers: xe });
    e.applyStyles = ie, e.arrow = me, e.computeStyles = oe, e.createPopper = we, e.createPopperLite = be, e.defaultModifiers = xe, e.detectOverflow = J, e.eventListeners = ee, e.flip = le, e.hide = ge, e.offset = ae, e.popperGenerator = Z, e.popperOffsets = te, e.preventOverflow = he, Object.defineProperty(e, "__esModule", { value: !0 }) }));
var SimpleBar = function() { "use strict"; var e = function(t, i) { return e = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) }, e(t, i) },
        t = !("undefined" == typeof window || !window.document || !window.document.createElement),
        i = "object" == typeof global && global && global.Object === Object && global,
        s = "object" == typeof self && self && self.Object === Object && self,
        r = i || s || Function("return this")(),
        l = r.Symbol,
        o = Object.prototype,
        n = o.hasOwnProperty,
        a = o.toString,
        c = l ? l.toStringTag : void 0,
        h = Object.prototype.toString,
        u = l ? l.toStringTag : void 0; var p = /\s/,
        v = /^\s+/;

    function m(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) } var b = /^[-+]0x[0-9a-f]+$/i,
        g = /^0b[01]+$/i,
        x = /^0o[0-7]+$/i,
        y = parseInt;

    function E(e) { if ("number" == typeof e) return e; if (function(e) { return "symbol" == typeof e || function(e) { return null != e && "object" == typeof e }(e) && "[object Symbol]" == function d(e) { return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : u && u in Object(e) ? function(e) { var t = n.call(e, c),
                            i = e[c]; try { e[c] = void 0; var s = !0 } catch (e) {} var r = a.call(e); return s && (t ? e[c] = i : delete e[c]), r }(e) : function(e) { return h.call(e) }(e) }(e) }(e)) return NaN; if (m(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = m(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e;
        e = function f(e) { return e ? e.slice(0, function(e) { for (var t = e.length; t-- && p.test(e.charAt(t));); return t }(e) + 1).replace(v, "") : e }(e); var i = g.test(e); return i || x.test(e) ? y(e.slice(2), i ? 2 : 8) : b.test(e) ? NaN : +e } var O = function() { return r.Date.now() },
        w = Math.max,
        S = Math.min;

    function A(e, t, i) { var s, r, l, o, n, a, c = 0,
            h = !1,
            u = !1,
            d = !0; if ("function" != typeof e) throw new TypeError("Expected a function");

        function p(t) { var i = s,
                l = r; return s = r = void 0, c = t, o = e.apply(l, i) }

        function f(e) { var i = e - a; return void 0 === a || i >= t || i < 0 || u && e - c >= l }

        function b() { var e = O(); if (f(e)) return g(e);
            n = setTimeout(b, function(e) { var i = t - (e - a); return u ? S(i, l - (e - c)) : i }(e)) }

        function g(e) { return n = void 0, d && s ? p(e) : (s = r = void 0, o) }

        function x() { var e = O(),
                i = f(e); if (s = arguments, r = this, a = e, i) { if (void 0 === n) return function v(e) { return c = e, n = setTimeout(b, t), h ? p(e) : o }(a); if (u) return clearTimeout(n), n = setTimeout(b, t), p(a) } return void 0 === n && (n = setTimeout(b, t)), o } return t = E(t) || 0, m(i) && (h = !!i.leading, l = (u = "maxWait" in i) ? w(E(i.maxWait) || 0, t) : l, d = "trailing" in i ? !!i.trailing : d), x.cancel = function() { void 0 !== n && clearTimeout(n), c = 0, s = a = r = n = void 0 }, x.flush = function() { return void 0 === n ? o : g(O()) }, x } var k = function() { return k = Object.assign || function(e) { for (var t, i = 1, s = arguments.length; i < s; i++)
                    for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e }, k.apply(this, arguments) },
        W = null,
        M = null;

    function N() { if (null === W) { if ("undefined" == typeof document) return W = 0; var e = document.body,
                t = document.createElement("div");
            t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t); var i = t.getBoundingClientRect().right;
            e.removeChild(t), W = i } return W }

    function L(e) { return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window }

    function z(e) { return e && e.ownerDocument ? e.ownerDocument : document }
    t && window.addEventListener("resize", (function() { M !== window.devicePixelRatio && (M = window.devicePixelRatio, W = null) })); var C = function(e) { return Array.prototype.reduce.call(e, (function(e, t) { var i = t.name.match(/data-simplebar-(.+)/); if (i) { var s = i[1].replace(/\W+(.)/g, (function(e, t) { return t.toUpperCase() })); switch (t.value) {
                    case "true":
                        e[s] = !0; break;
                    case "false":
                        e[s] = !1; break;
                    case void 0:
                        e[s] = !0; break;
                    default:
                        e[s] = t.value } } return e }), {}) };

    function T(e, t) { var i;
        e && (i = e.classList).add.apply(i, t.split(" ")) }

    function R(e, t) { e && t.split(" ").forEach((function(t) { e.classList.remove(t) })) }

    function D(e) { return ".".concat(e.split(" ").join(".")) } var V = Object.freeze({ __proto__: null, getElementWindow: L, getElementDocument: z, getOptions: C, addClasses: T, removeClasses: R, classNamesToQuery: D }),
        H = L,
        j = z,
        B = C,
        _ = T,
        q = R,
        P = D,
        X = function() {
            function e(t, i) { void 0 === i && (i = {}); var s = this; if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = !1, this.isMouseEntering = !1, this.scrollXTicking = !1, this.scrollYTicking = !1, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function() {}, this.onWindowResize = function() {}, this.onStopScrolling = function() {}, this.onMouseEntered = function() {}, this.onScroll = function() { var e = H(s.el);
                        s.scrollXTicking || (e.requestAnimationFrame(s.scrollX), s.scrollXTicking = !0), s.scrollYTicking || (e.requestAnimationFrame(s.scrollY), s.scrollYTicking = !0), s.isScrolling || (s.isScrolling = !0, _(s.el, s.classNames.scrolling)), s.showScrollbar("x"), s.showScrollbar("y"), s.onStopScrolling() }, this.scrollX = function() { s.axis.x.isOverflowing && s.positionScrollbar("x"), s.scrollXTicking = !1 }, this.scrollY = function() { s.axis.y.isOverflowing && s.positionScrollbar("y"), s.scrollYTicking = !1 }, this._onStopScrolling = function() { q(s.el, s.classNames.scrolling), s.options.autoHide && (s.hideScrollbar("x"), s.hideScrollbar("y")), s.isScrolling = !1 }, this.onMouseEnter = function() { s.isMouseEntering || (_(s.el, s.classNames.mouseEntered), s.showScrollbar("x"), s.showScrollbar("y"), s.isMouseEntering = !0), s.onMouseEntered() }, this._onMouseEntered = function() { q(s.el, s.classNames.mouseEntered), s.options.autoHide && (s.hideScrollbar("x"), s.hideScrollbar("y")), s.isMouseEntering = !1 }, this._onMouseMove = function(e) { s.mouseX = e.clientX, s.mouseY = e.clientY, (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseMoveForAxis("x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseMoveForAxis("y") }, this.onMouseLeave = function() { s.onMouseMove.cancel(), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseLeaveForAxis("x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseLeaveForAxis("y"), s.mouseX = -1, s.mouseY = -1 }, this._onWindowResize = function() { s.scrollbarWidth = s.getScrollbarWidth(), s.hideNativeScrollbar() }, this.onPointerEvent = function(e) { var t, i;
                        s.axis.x.track.el && s.axis.y.track.el && s.axis.x.scrollbar.el && s.axis.y.scrollbar.el && (s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect(), s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect(), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && (t = s.isWithinBounds(s.axis.x.track.rect)), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && (i = s.isWithinBounds(s.axis.y.track.rect)), (t || i) && (e.stopPropagation(), "pointerdown" === e.type && "touch" !== e.pointerType && (t && (s.axis.x.scrollbar.rect = s.axis.x.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(s.axis.x.scrollbar.rect) ? s.onDragStart(e, "x") : s.onTrackClick(e, "x")), i && (s.axis.y.scrollbar.rect = s.axis.y.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(s.axis.y.scrollbar.rect) ? s.onDragStart(e, "y") : s.onTrackClick(e, "y"))))) }, this.drag = function(t) { var i, r, l, o, n, a, c, h, u, d, p; if (s.draggedAxis && s.contentWrapperEl) { var v = s.axis[s.draggedAxis].track,
                                f = null !== (r = null === (i = v.rect) || void 0 === i ? void 0 : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r ? r : 0,
                                m = s.axis[s.draggedAxis].scrollbar,
                                b = null !== (o = null === (l = s.contentWrapperEl) || void 0 === l ? void 0 : l[s.axis[s.draggedAxis].scrollSizeAttr]) && void 0 !== o ? o : 0,
                                g = parseInt(null !== (a = null === (n = s.elStyles) || void 0 === n ? void 0 : n[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a ? a : "0px", 10);
                            t.preventDefault(), t.stopPropagation(); var x = ("y" === s.draggedAxis ? t.pageY : t.pageX) - (null !== (h = null === (c = v.rect) || void 0 === c ? void 0 : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== h ? h : 0) - s.axis[s.draggedAxis].dragOffset,
                                y = (x = "x" === s.draggedAxis && s.isRtl ? (null !== (d = null === (u = v.rect) || void 0 === u ? void 0 : u[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== d ? d : 0) - m.size - x : x) / (f - m.size) * (b - g); "x" === s.draggedAxis && s.isRtl && (y = (null === (p = e.getRtlHelpers()) || void 0 === p ? void 0 : p.isScrollingToNegative) ? -y : y), s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] = y } }, this.onEndDrag = function(e) { var t = j(s.el),
                            i = H(s.el);
                        e.preventDefault(), e.stopPropagation(), q(s.el, s.classNames.dragging), t.removeEventListener("mousemove", s.drag, !0), t.removeEventListener("mouseup", s.onEndDrag, !0), s.removePreventClickId = i.setTimeout((function() { t.removeEventListener("click", s.preventClick, !0), t.removeEventListener("dblclick", s.preventClick, !0), s.removePreventClickId = null })) }, this.preventClick = function(e) { e.preventDefault(), e.stopPropagation() }, this.el = t, this.options = k(k({}, e.defaultOptions), i), this.classNames = k(k({}, e.defaultOptions.classNames), i.classNames), this.axis = { x: { scrollOffsetAttr: "scrollLeft", sizeAttr: "width", scrollSizeAttr: "scrollWidth", offsetSizeAttr: "offsetWidth", offsetAttr: "left", overflowAttr: "overflowX", dragOffset: 0, isOverflowing: !0, forceVisible: !1, track: { size: null, el: null, rect: null, isVisible: !1 }, scrollbar: { size: null, el: null, rect: null, isVisible: !1 } }, y: { scrollOffsetAttr: "scrollTop", sizeAttr: "height", scrollSizeAttr: "scrollHeight", offsetSizeAttr: "offsetHeight", offsetAttr: "top", overflowAttr: "overflowY", dragOffset: 0, isOverflowing: !0, forceVisible: !1, track: { size: null, el: null, rect: null, isVisible: !1 }, scrollbar: { size: null, el: null, rect: null, isVisible: !1 } } }, "object" != typeof this.el || !this.el.nodeName) throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
                this.onMouseMove = function(e, t, i) { var s = !0,
                        r = !0; if ("function" != typeof e) throw new TypeError("Expected a function"); return m(i) && (s = "leading" in i ? !!i.leading : s, r = "trailing" in i ? !!i.trailing : r), A(e, 64, { leading: s, maxWait: 64, trailing: r }) }(this._onMouseMove), this.onWindowResize = A(this._onWindowResize, 64, { leading: !0 }), this.onStopScrolling = A(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = A(this._onMouseEntered, this.stopScrollDelay), this.init() } return e.getRtlHelpers = function() { if (e.rtlHelpers) return e.rtlHelpers; var t = document.createElement("div");
                t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>'; var i = t.firstElementChild,
                    s = null == i ? void 0 : i.firstElementChild; if (!s) return null;
                document.body.appendChild(i), i.scrollLeft = 0; var r = e.getOffset(i),
                    l = e.getOffset(s);
                i.scrollLeft = -999; var o = e.getOffset(s); return document.body.removeChild(i), e.rtlHelpers = { isScrollOriginAtZero: r.left !== l.left, isScrollingToNegative: l.left !== o.left }, e.rtlHelpers }, e.prototype.getScrollbarWidth = function() { try { return this.contentWrapperEl && "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : N() } catch (e) { return N() } }, e.getOffset = function(e) { var t = e.getBoundingClientRect(),
                    i = j(e),
                    s = H(e); return { top: t.top + (s.pageYOffset || i.documentElement.scrollTop), left: t.left + (s.pageXOffset || i.documentElement.scrollLeft) } }, e.prototype.init = function() { t && (this.initDOM(), this.rtlHelpers = e.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners()) }, e.prototype.initDOM = function() { var e, t;
                this.wrapperEl = this.el.querySelector(P(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(P(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(P(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(P(this.classNames.offset)), this.maskEl = this.el.querySelector(P(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, P(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(P(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(P(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(P(this.classNames.track)).concat(P(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(P(this.classNames.track)).concat(P(this.classNames.vertical))), this.axis.x.scrollbar.el = (null === (e = this.axis.x.track.el) || void 0 === e ? void 0 : e.querySelector(P(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = (null === (t = this.axis.y.track.el) || void 0 === t ? void 0 : t.querySelector(P(this.classNames.scrollbar))) || null, this.options.autoHide || (_(this.axis.x.scrollbar.el, this.classNames.visible), _(this.axis.y.scrollbar.el, this.classNames.visible)) }, e.prototype.initListeners = function() { var e, t = this,
                    i = H(this.el); if (this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("pointerdown", this.onPointerEvent, !0), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), null === (e = this.contentWrapperEl) || void 0 === e || e.addEventListener("scroll", this.onScroll), i.addEventListener("resize", this.onWindowResize), this.contentEl) { if (window.ResizeObserver) { var s = !1,
                            r = i.ResizeObserver || ResizeObserver;
                        this.resizeObserver = new r((function() { s && i.requestAnimationFrame((function() { t.recalculate() })) })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), i.requestAnimationFrame((function() { s = !0 })) }
                    this.mutationObserver = new i.MutationObserver((function() { i.requestAnimationFrame((function() { t.recalculate() })) })), this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 }) } }, e.prototype.recalculate = function() { if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl && this.wrapperEl && this.placeholderEl) { var e = H(this.el);
                    this.elStyles = e.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction; var t = this.contentEl.offsetWidth,
                        i = this.heightAutoObserverEl.offsetHeight <= 1,
                        s = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                        r = this.contentWrapperEl.offsetWidth,
                        l = this.elStyles.overflowX,
                        o = this.elStyles.overflowY;
                    this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft); var n = this.contentEl.scrollHeight,
                        a = this.contentEl.scrollWidth;
                    this.contentWrapperEl.style.height = i ? "auto" : "100%", this.placeholderEl.style.width = s ? "".concat(t || a, "px") : "auto", this.placeholderEl.style.height = "".concat(n, "px"); var c = this.contentWrapperEl.offsetHeight;
                    this.axis.x.isOverflowing = 0 !== t && a > t, this.axis.y.isOverflowing = n > c, this.axis.x.isOverflowing = "hidden" !== l && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== o && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar(); var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                        u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                    this.axis.x.isOverflowing = this.axis.x.isOverflowing && a > r - u, this.axis.y.isOverflowing = this.axis.y.isOverflowing && n > c - h, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y") } }, e.prototype.getScrollbarSize = function(e) { var t, i; if (void 0 === e && (e = "y"), !this.axis[e].isOverflowing || !this.contentEl) return 0; var s, r = this.contentEl[this.axis[e].scrollSizeAttr],
                    l = null !== (i = null === (t = this.axis[e].track.el) || void 0 === t ? void 0 : t[this.axis[e].offsetSizeAttr]) && void 0 !== i ? i : 0,
                    o = l / r; return s = Math.max(~~(o * l), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (s = Math.min(s, this.options.scrollbarMaxSize)), s }, e.prototype.positionScrollbar = function(t) { var i, s, r;
                void 0 === t && (t = "y"); var l = this.axis[t].scrollbar; if (this.axis[t].isOverflowing && this.contentWrapperEl && l.el && this.elStyles) { var o = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                        n = (null === (i = this.axis[t].track.el) || void 0 === i ? void 0 : i[this.axis[t].offsetSizeAttr]) || 0,
                        a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                        c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
                    c = "x" === t && this.isRtl && (null === (s = e.getRtlHelpers()) || void 0 === s ? void 0 : s.isScrollOriginAtZero) ? -c : c, "x" === t && this.isRtl && (c = (null === (r = e.getRtlHelpers()) || void 0 === r ? void 0 : r.isScrollingToNegative) ? c : -c); var h = c / (o - a),
                        u = ~~((n - l.size) * h);
                    u = "x" === t && this.isRtl ? -u + (n - l.size) : u, l.el.style.transform = "x" === t ? "translate3d(".concat(u, "px, 0, 0)") : "translate3d(0, ".concat(u, "px, 0)") } }, e.prototype.toggleTrackVisibility = function(e) { void 0 === e && (e = "y"); var t = this.axis[e].track.el,
                    i = this.axis[e].scrollbar.el;
                t && i && this.contentWrapperEl && (this.axis[e].isOverflowing || this.axis[e].forceVisible ? (t.style.visibility = "visible", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll", this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(e))) : (t.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden", this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(e))), this.axis[e].isOverflowing ? i.style.display = "block" : i.style.display = "none") }, e.prototype.showScrollbar = function(e) { void 0 === e && (e = "y"), this.axis[e].isOverflowing && !this.axis[e].scrollbar.isVisible && (_(this.axis[e].scrollbar.el, this.classNames.visible), this.axis[e].scrollbar.isVisible = !0) }, e.prototype.hideScrollbar = function(e) { void 0 === e && (e = "y"), this.axis[e].isOverflowing && this.axis[e].scrollbar.isVisible && (q(this.axis[e].scrollbar.el, this.classNames.visible), this.axis[e].scrollbar.isVisible = !1) }, e.prototype.hideNativeScrollbar = function() { this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px") }, e.prototype.onMouseMoveForAxis = function(e) { void 0 === e && (e = "y"); var t = this.axis[e];
                t.track.el && t.scrollbar.el && (t.track.rect = t.track.el.getBoundingClientRect(), t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(t.track.rect) ? (this.showScrollbar(e), _(t.track.el, this.classNames.hover), this.isWithinBounds(t.scrollbar.rect) ? _(t.scrollbar.el, this.classNames.hover) : q(t.scrollbar.el, this.classNames.hover)) : (q(t.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e))) }, e.prototype.onMouseLeaveForAxis = function(e) { void 0 === e && (e = "y"), q(this.axis[e].track.el, this.classNames.hover), q(this.axis[e].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e) }, e.prototype.onDragStart = function(e, t) { var i;
                void 0 === t && (t = "y"); var s = j(this.el),
                    r = H(this.el),
                    l = this.axis[t].scrollbar,
                    o = "y" === t ? e.pageY : e.pageX;
                this.axis[t].dragOffset = o - ((null === (i = l.rect) || void 0 === i ? void 0 : i[this.axis[t].offsetAttr]) || 0), this.draggedAxis = t, _(this.el, this.classNames.dragging), s.addEventListener("mousemove", this.drag, !0), s.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (s.addEventListener("click", this.preventClick, !0), s.addEventListener("dblclick", this.preventClick, !0)) : (r.clearTimeout(this.removePreventClickId), this.removePreventClickId = null) }, e.prototype.onTrackClick = function(e, t) { var i, s, r, l, o = this;
                void 0 === t && (t = "y"); var n = this.axis[t]; if (this.options.clickOnTrack && n.scrollbar.el && this.contentWrapperEl) { e.preventDefault(); var a = H(this.el);
                    this.axis[t].scrollbar.rect = n.scrollbar.el.getBoundingClientRect(); var c = null !== (s = null === (i = this.axis[t].scrollbar.rect) || void 0 === i ? void 0 : i[this.axis[t].offsetAttr]) && void 0 !== s ? s : 0,
                        h = parseInt(null !== (l = null === (r = this.elStyles) || void 0 === r ? void 0 : r[this.axis[t].sizeAttr]) && void 0 !== l ? l : "0px", 10),
                        u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                        d = ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                        p = -1 === d ? u - h : u + h,
                        v = function() { o.contentWrapperEl && (-1 === d ? u > p && (u -= 40, o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u, a.requestAnimationFrame(v)) : u < p && (u += 40, o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u, a.requestAnimationFrame(v))) };
                    v() } }, e.prototype.getContentElement = function() { return this.contentEl }, e.prototype.getScrollElement = function() { return this.contentWrapperEl }, e.prototype.removeListeners = function() { var e = H(this.el);
                this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("pointerdown", this.onPointerEvent, !0), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel() }, e.prototype.unMount = function() { this.removeListeners() }, e.prototype.isWithinBounds = function(e) { return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height }, e.prototype.findChild = function(e, t) { var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector; return Array.prototype.filter.call(e.children, (function(e) { return i.call(e, t) }))[0] }, e.rtlHelpers = null, e.defaultOptions = { forceVisible: !1, clickOnTrack: !0, scrollbarMinSize: 25, scrollbarMaxSize: 0, ariaLabel: "scrollable content", classNames: { contentEl: "simplebar-content", contentWrapper: "simplebar-content-wrapper", offset: "simplebar-offset", mask: "simplebar-mask", wrapper: "simplebar-wrapper", placeholder: "simplebar-placeholder", scrollbar: "simplebar-scrollbar", track: "simplebar-track", heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper", heightAutoObserverEl: "simplebar-height-auto-observer", visible: "simplebar-visible", horizontal: "simplebar-horizontal", vertical: "simplebar-vertical", hover: "simplebar-hover", dragging: "simplebar-dragging", scrolling: "simplebar-scrolling", scrollable: "simplebar-scrollable", mouseEntered: "simplebar-mouse-entered" }, scrollableNode: null, contentNode: null, autoHide: !0 }, e.getOptions = B, e.helpers = V, e }(),
        Y = X.helpers,
        F = Y.getOptions,
        I = Y.addClasses,
        $ = function(t) {
            function i() { for (var e = [], s = 0; s < arguments.length; s++) e[s] = arguments[s]; var r = t.apply(this, e) || this; return i.instances.set(e[0], r), r } return function(t, i) { if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

                function s() { this.constructor = t }
                e(t, i), t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s) }(i, t), i.initDOMLoadedElements = function() { document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function(e) { "init" === e.getAttribute("data-simplebar") || i.instances.has(e) || new i(e, F(e.attributes)) })) }, i.removeObserver = function() { var e;
                null === (e = i.globalObserver) || void 0 === e || e.disconnect() }, i.prototype.initDOM = function() { var e, t, i, s = this; if (!Array.prototype.filter.call(this.el.children, (function(e) { return e.classList.contains(s.classNames.wrapper) })).length) { for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), I(this.wrapperEl, this.classNames.wrapper), I(this.contentWrapperEl, this.classNames.contentWrapper), I(this.offsetEl, this.classNames.offset), I(this.maskEl, this.classNames.mask), I(this.contentEl, this.classNames.contentEl), I(this.placeholderEl, this.classNames.placeholder), I(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl), I(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                    this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl), null === (e = this.contentWrapperEl) || void 0 === e || e.setAttribute("tabindex", "0"), null === (t = this.contentWrapperEl) || void 0 === t || t.setAttribute("role", "region"), null === (i = this.contentWrapperEl) || void 0 === i || i.setAttribute("aria-label", this.options.ariaLabel) } if (!this.axis.x.track.el || !this.axis.y.track.el) { var r = document.createElement("div"),
                        l = document.createElement("div");
                    I(r, this.classNames.track), I(l, this.classNames.scrollbar), r.appendChild(l), this.axis.x.track.el = r.cloneNode(!0), I(this.axis.x.track.el, this.classNames.horizontal), this.axis.y.track.el = r.cloneNode(!0), I(this.axis.y.track.el, this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el) }
                X.prototype.initDOM.call(this), this.el.setAttribute("data-simplebar", "init") }, i.prototype.unMount = function() { X.prototype.unMount.call(this), i.instances.delete(this.el) }, i.initHtmlApi = function() { this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(i.handleMutations), this.globalObserver.observe(document, { childList: !0, subtree: !0 })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements)) }, i.handleMutations = function(e) { e.forEach((function(e) { e.addedNodes.forEach((function(e) { 1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !i.instances.has(e) && document.documentElement.contains(e) && new i(e, F(e.attributes)) : e.querySelectorAll("[data-simplebar]").forEach((function(e) { "init" !== e.getAttribute("data-simplebar") && !i.instances.has(e) && document.documentElement.contains(e) && new i(e, F(e.attributes)) }))) })), e.removedNodes.forEach((function(e) { 1 === e.nodeType && ("init" === e.getAttribute("data-simplebar") ? i.instances.has(e) && !document.documentElement.contains(e) && i.instances.get(e).unMount() : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), (function(e) { i.instances.has(e) && !document.documentElement.contains(e) && i.instances.get(e).unMount() }))) })) })) }, i.instances = new WeakMap, i }(X); return t && $.initHtmlApi(), $ }();
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e() }(this, (function() { "use strict"; var t = Object.freeze({ __proto__: null, get Colors() { return Go }, get Decimation() { return Qo }, get Filler() { return ma }, get Legend() { return ya }, get SubTitle() { return ka }, get Title() { return Ma }, get Tooltip() { return Ba } });

    function e() {} const i = (() => { let t = 0; return () => t++ })();

    function s(t) { return null == t }

    function n(t) { if (Array.isArray && Array.isArray(t)) return !0; const e = Object.prototype.toString.call(t); return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6) }

    function o(t) { return null !== t && "[object Object]" === Object.prototype.toString.call(t) }

    function a(t) { return ("number" == typeof t || t instanceof Number) && isFinite(+t) }

    function r(t, e) { return a(t) ? t : e }

    function l(t, e) { return void 0 === t ? e : t } const h = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e,
        c = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

    function d(t, e, i) { if (t && "function" == typeof t.call) return t.apply(i, e) }

    function u(t, e, i, s) { let a, r, l; if (n(t))
            if (r = t.length, s)
                for (a = r - 1; a >= 0; a--) e.call(i, t[a], a);
            else
                for (a = 0; a < r; a++) e.call(i, t[a], a);
        else if (o(t))
            for (l = Object.keys(t), r = l.length, a = 0; a < r; a++) e.call(i, t[l[a]], l[a]) }

    function f(t, e) { let i, s, n, o; if (!t || !e || t.length !== e.length) return !1; for (i = 0, s = t.length; i < s; ++i)
            if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
        return !0 }

    function g(t) { if (n(t)) return t.map(g); if (o(t)) { const e = Object.create(null),
                i = Object.keys(t),
                s = i.length; let n = 0; for (; n < s; ++n) e[i[n]] = g(t[i[n]]); return e } return t }

    function p(t) { return -1 === ["__proto__", "prototype", "constructor"].indexOf(t) }

    function m(t, e, i, s) { if (!p(t)) return; const n = e[t],
            a = i[t];
        o(n) && o(a) ? b(n, a, s) : e[t] = g(a) }

    function b(t, e, i) { const s = n(e) ? e : [e],
            a = s.length; if (!o(t)) return t; const r = (i = i || {}).merger || m; let l; for (let e = 0; e < a; ++e) { if (l = s[e], !o(l)) continue; const n = Object.keys(l); for (let e = 0, s = n.length; e < s; ++e) r(n[e], t, l, i) } return t }

    function x(t, e) { return b(t, e, { merger: _ }) }

    function _(t, e, i) { if (!p(t)) return; const s = e[t],
            n = i[t];
        o(s) && o(n) ? x(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = g(n)) } const y = { "": t => t, x: t => t.x, y: t => t.y };

    function v(t) { const e = t.split("."),
            i = []; let s = ""; for (const t of e) s += t, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s), s = ""); return i }

    function M(t, e) { const i = y[e] || (y[e] = function(t) { const e = v(t); return t => { for (const i of e) { if ("" === i) break;
                    t = t && t[i] } return t } }(e)); return i(t) }

    function w(t) { return t.charAt(0).toUpperCase() + t.slice(1) } const k = t => void 0 !== t,
        S = t => "function" == typeof t,
        P = (t, e) => { if (t.size !== e.size) return !1; for (const i of t)
                if (!e.has(i)) return !1;
            return !0 };

    function D(t) { return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type } const C = Math.PI,
        O = 2 * C,
        A = O + C,
        T = Number.POSITIVE_INFINITY,
        L = C / 180,
        E = C / 2,
        R = C / 4,
        I = 2 * C / 3,
        z = Math.log10,
        F = Math.sign;

    function V(t, e, i) { return Math.abs(t - e) < i }

    function B(t) { const e = Math.round(t);
        t = V(t, e, t / 1e3) ? e : t; const i = Math.pow(10, Math.floor(z(t))),
            s = t / i; return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i }

    function W(t) { const e = [],
            i = Math.sqrt(t); let s; for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s)); return i === (0 | i) && e.push(i), e.sort(((t, e) => t - e)).pop(), e }

    function N(t) { return !isNaN(parseFloat(t)) && isFinite(t) }

    function H(t, e) { const i = Math.round(t); return i - e <= t && i + e >= t }

    function j(t, e, i) { let s, n, o; for (s = 0, n = t.length; s < n; s++) o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o)) }

    function $(t) { return t * (C / 180) }

    function Y(t) { return t * (180 / C) }

    function U(t) { if (!a(t)) return; let e = 1,
            i = 0; for (; Math.round(t * e) / e !== t;) e *= 10, i++; return i }

    function X(t, e) { const i = e.x - t.x,
            s = e.y - t.y,
            n = Math.sqrt(i * i + s * s); let o = Math.atan2(s, i); return o < -.5 * C && (o += O), { angle: o, distance: n } }

    function q(t, e) { return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) }

    function K(t, e) { return (t - e + A) % O - C }

    function G(t) { return (t % O + O) % O }

    function Z(t, e, i, s) { const n = G(t),
            o = G(e),
            a = G(i),
            r = G(o - n),
            l = G(a - n),
            h = G(n - o),
            c = G(n - a); return n === o || n === a || s && o === a || r > l && h < c }

    function J(t, e, i) { return Math.max(e, Math.min(i, t)) }

    function Q(t) { return J(t, -32768, 32767) }

    function tt(t, e, i, s = 1e-6) { return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s }

    function et(t, e, i) { i = i || (i => t[i] < e); let s, n = t.length - 1,
            o = 0; for (; n - o > 1;) s = o + n >> 1, i(s) ? o = s : n = s; return { lo: o, hi: n } } const it = (t, e, i, s) => et(t, i, s ? s => { const n = t[s][e]; return n < i || n === i && t[s + 1][e] === i } : s => t[s][e] < i),
        st = (t, e, i) => et(t, i, (s => t[s][e] >= i));

    function nt(t, e, i) { let s = 0,
            n = t.length; for (; s < n && t[s] < e;) s++; for (; n > s && t[n - 1] > i;) n--; return s > 0 || n < t.length ? t.slice(s, n) : t } const ot = ["push", "pop", "shift", "splice", "unshift"];

    function at(t, e) { t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), ot.forEach((e => { const i = "_onData" + w(e),
                s = t[e];
            Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value(...e) { const n = s.apply(this, e); return t._chartjs.listeners.forEach((t => { "function" == typeof t[i] && t[i](...e) })), n } }) }))) }

    function rt(t, e) { const i = t._chartjs; if (!i) return; const s = i.listeners,
            n = s.indexOf(e); - 1 !== n && s.splice(n, 1), s.length > 0 || (ot.forEach((e => { delete t[e] })), delete t._chartjs) }

    function lt(t) { const e = new Set(t); return e.size === t.length ? t : Array.from(e) } const ht = "undefined" == typeof window ? function(t) { return t() } : window.requestAnimationFrame;

    function ct(t, e) { let i = [],
            s = !1; return function(...n) { i = n, s || (s = !0, ht.call(window, (() => { s = !1, t.apply(e, i) }))) } }

    function dt(t, e) { let i; return function(...s) { return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e } } const ut = t => "start" === t ? "left" : "end" === t ? "right" : "center",
        ft = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2,
        gt = (t, e, i, s) => t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;

    function pt(t, e, i) { const s = e.length; let n = 0,
            o = s; if (t._sorted) { const { iScale: a, _parsed: r } = t, l = a.axis, { min: h, max: c, minDefined: d, maxDefined: u } = a.getUserBounds();
            d && (n = J(Math.min(it(r, l, h).lo, i ? s : it(e, l, a.getPixelForValue(h)).lo), 0, s - 1)), o = u ? J(Math.max(it(r, a.axis, c, !0).hi + 1, i ? 0 : it(e, l, a.getPixelForValue(c), !0).hi + 1), n, s) - n : s - n } return { start: n, count: o } }

    function mt(t) { const { xScale: e, yScale: i, _scaleRanges: s } = t, n = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max }; if (!s) return t._scaleRanges = n, !0; const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max; return Object.assign(s, n), o } var xt = new class bt { constructor() { this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0 }
        _notify(t, e, i, s) { const n = e.listeners[s],
                o = e.duration;
            n.forEach((s => s({ chart: t, initial: e.initial, numSteps: o, currentStep: Math.min(i - e.start, o) }))) }
        _refresh() { this._request || (this._running = !0, this._request = ht.call(window, (() => { this._update(), this._request = null, this._running && this._refresh() }))) }
        _update(t = Date.now()) { let e = 0;
            this._charts.forEach(((i, s) => { if (!i.running || !i.items.length) return; const n = i.items; let o, a = n.length - 1,
                    r = !1; for (; a >= 0; --a) o = n[a], o._active ? (o._total > i.duration && (i.duration = o._total), o.tick(t), r = !0) : (n[a] = n[n.length - 1], n.pop());
                r && (s.draw(), this._notify(s, i, t, "progress")), n.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += n.length })), this._lastDate = t, 0 === e && (this._running = !1) }
        _getAnims(t) { const e = this._charts; let i = e.get(t); return i || (i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }, e.set(t, i)), i }
        listen(t, e, i) { this._getAnims(t).listeners[e].push(i) }
        add(t, e) { e && e.length && this._getAnims(t).items.push(...e) }
        has(t) { return this._getAnims(t).items.length > 0 }
        start(t) { const e = this._charts.get(t);
            e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(((t, e) => Math.max(t, e._duration)), 0), this._refresh()) }
        running(t) { if (!this._running) return !1; const e = this._charts.get(t); return !!(e && e.running && e.items.length) }
        stop(t) { const e = this._charts.get(t); if (!e || !e.items.length) return; const i = e.items; let s = i.length - 1; for (; s >= 0; --s) i[s].cancel();
            e.items = [], this._notify(t, e, Date.now(), "complete") }
        remove(t) { return this._charts.delete(t) } };

    function _t(t) { return t + .5 | 0 } const yt = (t, e, i) => Math.max(Math.min(t, i), e);

    function vt(t) { return yt(_t(2.55 * t), 0, 255) }

    function Mt(t) { return yt(_t(255 * t), 0, 255) }

    function wt(t) { return yt(_t(t / 2.55) / 100, 0, 1) }

    function kt(t) { return yt(_t(100 * t), 0, 100) } const St = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 },
        Pt = [...
            "0123456789ABCDEF"
        ],
        Dt = t => Pt[15 & t],
        Ct = t => Pt[(240 & t) >> 4] + Pt[15 & t],
        Ot = t => (240 & t) >> 4 == (15 & t); const Tt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function Lt(t, e, i) { const s = e * Math.min(i, 1 - i),
            n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1); return [n(0), n(8), n(4)] }

    function Et(t, e, i) { const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0); return [s(5), s(3), s(1)] }

    function Rt(t, e, i) { const s = Lt(t, 1, .5); let n; for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; n < 3; n++) s[n] *= 1 - e - i, s[n] += e; return s }

    function It(t) { const e = t.r / 255,
            i = t.g / 255,
            s = t.b / 255,
            n = Math.max(e, i, s),
            o = Math.min(e, i, s),
            a = (n + o) / 2; let r, l, h; return n !== o && (h = n - o, l = a > .5 ? h / (2 - n - o) : h / (n + o), r = function(t, e, i, s, n) { return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4 }(e, i, s, h, n), r = 60 * r + .5), [0 | r, l || 0, a] }

    function zt(t, e, i, s) { return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(Mt) }

    function Ft(t, e, i) { return zt(Lt, t, e, i) }

    function Vt(t) { return (t % 360 + 360) % 360 } const Wt = { x: "dark", Z: "light", Y: "re", X: "blu", W: "gr", V: "medium", U: "slate", A: "ee", T: "ol", S: "or", B: "ra", C: "lateg", D: "ights", R: "in", Q: "turquois", E: "hi", P: "ro", O: "al", N: "le", M: "de", L: "yello", F: "en", K: "ch", G: "arks", H: "ea", I: "ightg", J: "wh" },
        Nt = { OiceXe: "f0f8ff", antiquewEte: "faebd7", aqua: "ffff", aquamarRe: "7fffd4", azuY: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "0", blanKedOmond: "ffebcd", Xe: "ff", XeviTet: "8a2be2", bPwn: "a52a2a", burlywood: "deb887", caMtXe: "5f9ea0", KartYuse: "7fff00", KocTate: "d2691e", cSO: "ff7f50", cSnflowerXe: "6495ed", cSnsilk: "fff8dc", crimson: "dc143c", cyan: "ffff", xXe: "8b", xcyan: "8b8b", xgTMnPd: "b8860b", xWay: "a9a9a9", xgYF: "6400", xgYy: "a9a9a9", xkhaki: "bdb76b", xmagFta: "8b008b", xTivegYF: "556b2f", xSange: "ff8c00", xScEd: "9932cc", xYd: "8b0000", xsOmon: "e9967a", xsHgYF: "8fbc8f", xUXe: "483d8b", xUWay: "2f4f4f", xUgYy: "2f4f4f", xQe: "ced1", xviTet: "9400d3", dAppRk: "ff1493", dApskyXe: "bfff", dimWay: "696969", dimgYy: "696969", dodgerXe: "1e90ff", fiYbrick: "b22222", flSOwEte: "fffaf0", foYstWAn: "228b22", fuKsia: "ff00ff", gaRsbSo: "dcdcdc", ghostwEte: "f8f8ff", gTd: "ffd700", gTMnPd: "daa520", Way: "808080", gYF: "8000", gYFLw: "adff2f", gYy: "808080", honeyMw: "f0fff0", hotpRk: "ff69b4", RdianYd: "cd5c5c", Rdigo: "4b0082", ivSy: "fffff0", khaki: "f0e68c", lavFMr: "e6e6fa", lavFMrXsh: "fff0f5", lawngYF: "7cfc00", NmoncEffon: "fffacd", ZXe: "add8e6", ZcSO: "f08080", Zcyan: "e0ffff", ZgTMnPdLw: "fafad2", ZWay: "d3d3d3", ZgYF: "90ee90", ZgYy: "d3d3d3", ZpRk: "ffb6c1", ZsOmon: "ffa07a", ZsHgYF: "20b2aa", ZskyXe: "87cefa", ZUWay: "778899", ZUgYy: "778899", ZstAlXe: "b0c4de", ZLw: "ffffe0", lime: "ff00", limegYF: "32cd32", lRF: "faf0e6", magFta: "ff00ff", maPon: "800000", VaquamarRe: "66cdaa", VXe: "cd", VScEd: "ba55d3", VpurpN: "9370db", VsHgYF: "3cb371", VUXe: "7b68ee", VsprRggYF: "fa9a", VQe: "48d1cc", VviTetYd: "c71585", midnightXe: "191970", mRtcYam: "f5fffa", mistyPse: "ffe4e1", moccasR: "ffe4b5", navajowEte: "ffdead", navy: "80", Tdlace: "fdf5e6", Tive: "808000", TivedBb: "6b8e23", Sange: "ffa500", SangeYd: "ff4500", ScEd: "da70d6", pOegTMnPd: "eee8aa", pOegYF: "98fb98", pOeQe: "afeeee", pOeviTetYd: "db7093", papayawEp: "ffefd5", pHKpuff: "ffdab9", peru: "cd853f", pRk: "ffc0cb", plum: "dda0dd", powMrXe: "b0e0e6", purpN: "800080", YbeccapurpN: "663399", Yd: "ff0000", Psybrown: "bc8f8f", PyOXe: "4169e1", saddNbPwn: "8b4513", sOmon: "fa8072", sandybPwn: "f4a460", sHgYF: "2e8b57", sHshell: "fff5ee", siFna: "a0522d", silver: "c0c0c0", skyXe: "87ceeb", UXe: "6a5acd", UWay: "708090", UgYy: "708090", snow: "fffafa", sprRggYF: "ff7f", stAlXe: "4682b4", tan: "d2b48c", teO: "8080", tEstN: "d8bfd8", tomato: "ff6347", Qe: "40e0d0", viTet: "ee82ee", JHt: "f5deb3", wEte: "ffffff", wEtesmoke: "f5f5f5", Lw: "ffff00", LwgYF: "9acd32" }; let Ht; const $t = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        Yt = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
        Ut = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);

    function Xt(t, e, i) { if (t) { let s = It(t);
            s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1)), s = Ft(s), t.r = s[0], t.g = s[1], t.b = s[2] } }

    function qt(t, e) { return t ? Object.assign(e || {}, t) : t }

    function Kt(t) { var e = { r: 0, g: 0, b: 0, a: 255 }; return Array.isArray(t) ? t.length >= 3 && (e = { r: t[0], g: t[1], b: t[2], a: 255 }, t.length > 3 && (e.a = Mt(t[3]))) : (e = qt(t, { r: 0, g: 0, b: 0, a: 1 })).a = Mt(e.a), e }

    function Gt(t) { return "r" === t.charAt(0) ? function(t) { const e = $t.exec(t); let i, s, n, o = 255; if (e) { if (e[7] !== i) { const t = +e[7];
                    o = e[8] ? vt(t) : yt(255 * t, 0, 255) } return i = +e[1], s = +e[3], n = +e[5], i = 255 & (e[2] ? vt(i) : yt(i, 0, 255)), s = 255 & (e[4] ? vt(s) : yt(s, 0, 255)), n = 255 & (e[6] ? vt(n) : yt(n, 0, 255)), { r: i, g: s, b: n, a: o } } }(t) : function Bt(t) { const e = Tt.exec(t); let i, s = 255; if (!e) return;
            e[5] !== i && (s = e[6] ? vt(+e[5]) : Mt(+e[5])); const n = Vt(+e[2]),
                o = +e[3] / 100,
                a = +e[4] / 100; return i = "hwb" === e[1] ? function(t, e, i) { return zt(Rt, t, e, i) }(n, o, a) : "hsv" === e[1] ? function(t, e, i) { return zt(Et, t, e, i) }(n, o, a) : Ft(n, o, a), { r: i[0], g: i[1], b: i[2], a: s } }(t) }
    class Zt { constructor(t) { if (t instanceof Zt) return t; const e = typeof t; let i; var s, n, o; "object" === e ? i = Kt(t) : "string" === e && (o = (s = t).length, "#" === s[0] && (4 === o || 5 === o ? n = { r: 255 & 17 * St[s[1]], g: 255 & 17 * St[s[2]], b: 255 & 17 * St[s[3]], a: 5 === o ? 17 * St[s[4]] : 255 } : 7 !== o && 9 !== o || (n = { r: St[s[1]] << 4 | St[s[2]], g: St[s[3]] << 4 | St[s[4]], b: St[s[5]] << 4 | St[s[6]], a: 9 === o ? St[s[7]] << 4 | St[s[8]] : 255 })), i = n || function jt(t) { Ht || (Ht = function() { const t = {},
                        e = Object.keys(Nt),
                        i = Object.keys(Wt); let s, n, o, a, r; for (s = 0; s < e.length; s++) { for (a = r = e[s], n = 0; n < i.length; n++) o = i[n], r = r.replace(o, Wt[o]);
                        o = parseInt(Nt[a], 16), t[r] = [o >> 16 & 255, o >> 8 & 255, 255 & o] } return t }(), Ht.transparent = [0, 0, 0, 0]); const e = Ht[t.toLowerCase()]; return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 } }(t) || Gt(t)), this._rgb = i, this._valid = !!i }
        get valid() { return this._valid }
        get rgb() { var t = qt(this._rgb); return t && (t.a = wt(t.a)), t }
        set rgb(t) { this._rgb = Kt(t) }
        rgbString() { return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${wt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0; var t }
        hexString() { return this._valid ? function At(t) { var e = (t => Ot(t.r) && Ot(t.g) && Ot(t.b) && Ot(t.a))(t) ? Dt : Ct; return t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0 }(this._rgb) : void 0 }
        hslString() { return this._valid ? function(t) { if (!t) return; const e = It(t),
                    i = e[0],
                    s = kt(e[1]),
                    n = kt(e[2]); return t.a < 255 ? `hsla(${i}, ${s}%, ${n}%, ${wt(t.a)})` : `hsl(${i}, ${s}%, ${n}%)` }(this._rgb) : void 0 }
        mix(t, e) { if (t) { const i = this.rgb,
                    s = t.rgb; let n; const o = e === n ? .5 : e,
                    a = 2 * o - 1,
                    r = i.a - s.a,
                    l = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
                n = 1 - l, i.r = 255 & l * i.r + n * s.r + .5, i.g = 255 & l * i.g + n * s.g + .5, i.b = 255 & l * i.b + n * s.b + .5, i.a = o * i.a + (1 - o) * s.a, this.rgb = i } return this }
        interpolate(t, e) { return t && (this._rgb = function(t, e, i) { const s = Ut(wt(t.r)),
                    n = Ut(wt(t.g)),
                    o = Ut(wt(t.b)); return { r: Mt(Yt(s + i * (Ut(wt(e.r)) - s))), g: Mt(Yt(n + i * (Ut(wt(e.g)) - n))), b: Mt(Yt(o + i * (Ut(wt(e.b)) - o))), a: t.a + i * (e.a - t.a) } }(this._rgb, t._rgb, e)), this }
        clone() { return new Zt(this.rgb) }
        alpha(t) { return this._rgb.a = Mt(t), this }
        clearer(t) { return this._rgb.a *= 1 - t, this }
        greyscale() { const t = this._rgb,
                e = _t(.3 * t.r + .59 * t.g + .11 * t.b); return t.r = t.g = t.b = e, this }
        opaquer(t) { return this._rgb.a *= 1 + t, this }
        negate() { const t = this._rgb; return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this }
        lighten(t) { return Xt(this._rgb, 2, t), this }
        darken(t) { return Xt(this._rgb, 2, -t), this }
        saturate(t) { return Xt(this._rgb, 1, t), this }
        desaturate(t) { return Xt(this._rgb, 1, -t), this }
        rotate(t) { return function(t, e) { var i = It(t);
                i[0] = Vt(i[0] + e), i = Ft(i), t.r = i[0], t.g = i[1], t.b = i[2] }(this._rgb, t), this } }

    function Jt(t) { if (t && "object" == typeof t) { const e = t.toString(); return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e } return !1 }

    function Qt(t) { return Jt(t) ? t : new Zt(t) }

    function te(t) { return Jt(t) ? t : new Zt(t).saturate(.5).darken(.1).hexString() } const ee = ["x", "y", "borderWidth", "radius", "tension"],
        ie = ["color", "borderColor", "backgroundColor"],
        se = new Map;

    function ne(t, e, i) { return function(t, e) { e = e || {}; const i = t + JSON.stringify(e); let s = se.get(i); return s || (s = new Intl.NumberFormat(t, e), se.set(i, s)), s }(e, i).format(t) } const oe = { values: t => n(t) ? t : "" + t, numeric(t, e, i) { if (0 === t) return "0"; const s = this.chart.options.locale; let n, o = t; if (i.length > 1) { const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                (e < 1e-4 || e > 1e15) && (n = "scientific"), o = function(t, e) { let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value; return Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)), i }(t, i) } const a = z(Math.abs(o)),
                r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
                l = { notation: n, minimumFractionDigits: r, maximumFractionDigits: r }; return Object.assign(l, this.options.ticks.format), ne(t, s, l) }, logarithmic(t, e, i) { if (0 === t) return "0"; const s = i[e].significand || t / Math.pow(10, Math.floor(z(t))); return [1, 2, 3, 5, 10, 15].includes(s) || e > .8 * i.length ? oe.numeric.call(this, t, e, i) : "" } }; var ae = { formatters: oe }; const re = Object.create(null),
        le = Object.create(null);

    function he(t, e) { if (!e) return t; const i = e.split("."); for (let e = 0, s = i.length; e < s; ++e) { const s = i[e];
            t = t[s] || (t[s] = Object.create(null)) } return t }

    function ce(t, e, i) { return "string" == typeof e ? b(he(t, e), i) : b(he(t, ""), e) } var ue = new class de { constructor(t, e) { this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = { family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", size: 12, style: "normal", lineHeight: 1.2, weight: null }, this.hover = {}, this.hoverBackgroundColor = (t, e) => te(e.backgroundColor), this.hoverBorderColor = (t, e) => te(e.borderColor), this.hoverColor = (t, e) => te(e.color), this.indexAxis = "x", this.interaction = { mode: "nearest", intersect: !0, includeInvisible: !1 }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e) }
        set(t, e) { return ce(this, t, e) }
        get(t) { return he(this, t) }
        describe(t, e) { return ce(le, t, e) }
        override(t, e) { return ce(re, t, e) }
        route(t, e, i, s) { const n = he(this, t),
                a = he(this, i),
                r = "_" + e;
            Object.defineProperties(n, {
                [r]: { value: n[e], writable: !0 }, [e]: { enumerable: !0, get() { const t = this[r],
                            e = a[s]; return o(t) ? Object.assign({}, e, t) : l(t, e) }, set(t) { this[r] = t } } }) }
        apply(t) { t.forEach((t => t(this))) } }({ _scriptable: t => !t.startsWith("on"), _indexable: t => "events" !== t, hover: { _fallback: "interaction" }, interaction: { _scriptable: !1, _indexable: !1 } }, [function(t) { t.set("animation", { delay: void 0, duration: 1e3, easing: "easeOutQuart", fn: void 0, from: void 0, loop: void 0, to: void 0, type: void 0 }), t.describe("animation", { _fallback: !1, _indexable: !1, _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t }), t.set("animations", { colors: { type: "color", properties: ie }, numbers: { type: "number", properties: ee } }), t.describe("animations", { _fallback: "animation" }), t.set("transitions", { active: { animation: { duration: 400 } }, resize: { animation: { duration: 0 } }, show: { animations: { colors: { from: "transparent" }, visible: { type: "boolean", duration: 0 } } }, hide: { animations: { colors: { to: "transparent" }, visible: { type: "boolean", easing: "linear", fn: t => 0 | t } } } }) }, function(t) { t.set("layout", { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } }) }, function(t) { t.set("scale", { display: !0, offset: !1, reverse: !1, beginAtZero: !1, bounds: "ticks", clip: !0, grace: 0, grid: { display: !0, lineWidth: 1, drawOnChartArea: !0, drawTicks: !0, tickLength: 8, tickWidth: (t, e) => e.lineWidth, tickColor: (t, e) => e.color, offset: !1 }, border: { display: !0, dash: [], dashOffset: 0, width: 1 }, title: { display: !1, text: "", padding: { top: 4, bottom: 4 } }, ticks: { minRotation: 0, maxRotation: 50, mirror: !1, textStrokeWidth: 0, textStrokeColor: "", padding: 3, display: !0, autoSkip: !0, autoSkipPadding: 3, labelOffset: 0, callback: ae.formatters.values, minor: {}, major: {}, align: "center", crossAlign: "near", showLabelBackdrop: !1, backdropColor: "rgba(255, 255, 255, 0.75)", backdropPadding: 2 } }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", { _fallback: !1, _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t, _indexable: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t }), t.describe("scales", { _fallback: "scale" }), t.describe("scale.ticks", { _scriptable: t => "backdropPadding" !== t && "callback" !== t, _indexable: t => "backdropPadding" !== t }) }]);

    function fe() { return "undefined" != typeof window && "undefined" != typeof document }

    function ge(t) { let e = t.parentNode; return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e }

    function pe(t, e, i) { let s; return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s } const me = t => t.ownerDocument.defaultView.getComputedStyle(t, null);

    function be(t, e) { return me(t).getPropertyValue(e) } const xe = ["top", "right", "bottom", "left"];

    function _e(t, e, i) { const s = {};
        i = i ? "-" + i : ""; for (let n = 0; n < 4; n++) { const o = xe[n];
            s[o] = parseFloat(t[e + "-" + o + i]) || 0 } return s.width = s.left + s.right, s.height = s.top + s.bottom, s } const ye = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);

    function ve(t, e) { if ("native" in t) return t; const { canvas: i, currentDevicePixelRatio: s } = e, n = me(i), o = "border-box" === n.boxSizing, a = _e(n, "padding"), r = _e(n, "border", "width"), { x: l, y: h, box: c } = function(t, e) { const i = t.touches,
                s = i && i.length ? i[0] : t,
                { offsetX: n, offsetY: o } = s; let a, r, l = !1; if (ye(n, o, t.target)) a = n, r = o;
            else { const t = e.getBoundingClientRect();
                a = s.clientX - t.left, r = s.clientY - t.top, l = !0 } return { x: a, y: r, box: l } }(t, i), d = a.left + (c && r.left), u = a.top + (c && r.top); let { width: f, height: g } = e; return o && (f -= a.width + r.width, g -= a.height + r.height), { x: Math.round((l - d) / f * i.width / s), y: Math.round((h - u) / g * i.height / s) } } const Me = t => Math.round(10 * t) / 10;

    function we(t, e, i, s) { const n = me(t),
            o = _e(n, "margin"),
            a = pe(n.maxWidth, t, "clientWidth") || T,
            r = pe(n.maxHeight, t, "clientHeight") || T,
            l = function(t, e, i) { let s, n; if (void 0 === e || void 0 === i) { const o = ge(t); if (o) { const t = o.getBoundingClientRect(),
                            a = me(o),
                            r = _e(a, "border", "width"),
                            l = _e(a, "padding");
                        e = t.width - l.width - r.width, i = t.height - l.height - r.height, s = pe(a.maxWidth, o, "clientWidth"), n = pe(a.maxHeight, o, "clientHeight") } else e = t.clientWidth, i = t.clientHeight } return { width: e, height: i, maxWidth: s || T, maxHeight: n || T } }(t, e, i); let { width: h, height: c } = l; if ("content-box" === n.boxSizing) { const t = _e(n, "border", "width"),
                e = _e(n, "padding");
            h -= e.width + t.width, c -= e.height + t.height } return h = Math.max(0, h - o.width), c = Math.max(0, s ? h / s : c - o.height), h = Me(Math.min(h, a, l.maxWidth)), c = Me(Math.min(c, r, l.maxHeight)), h && !c && (c = Me(h / 2)), (void 0 !== e || void 0 !== i) && s && l.height && c > l.height && (c = l.height, h = Me(Math.floor(c * s))), { width: h, height: c } }

    function ke(t, e, i) { const s = e || 1,
            n = Math.floor(t.height * s),
            o = Math.floor(t.width * s);
        t.height = Math.floor(t.height), t.width = Math.floor(t.width); const a = t.canvas; return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`, a.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) && (t.currentDevicePixelRatio = s, a.height = n, a.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0) } const Se = function() { let t = !1; try { const e = {get passive() { return t = !0, !1 } };
            fe() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e)) } catch (t) {} return t }();

    function Pe(t, e) { const i = be(t, e),
            s = i && i.match(/^(\d+)(\.\d+)?px$/); return s ? +s[1] : void 0 }

    function De(t) { return !t || s(t.size) || s(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family }

    function Ce(t, e, i, s, n) { let o = e[n]; return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s }

    function Oe(t, e, i, s) { let o = (s = s || {}).data = s.data || {},
            a = s.garbageCollect = s.garbageCollect || [];
        s.font !== e && (o = s.data = {}, a = s.garbageCollect = [], s.font = e), t.save(), t.font = e; let r = 0; const l = i.length; let h, c, d, u, f; for (h = 0; h < l; h++)
            if (u = i[h], null == u || n(u)) { if (n(u))
                    for (c = 0, d = u.length; c < d; c++) f = u[c], null == f || n(f) || (r = Ce(t, o, a, r, f)) } else r = Ce(t, o, a, r, u);
        t.restore(); const g = a.length / 2; if (g > i.length) { for (h = 0; h < g; h++) delete o[a[h]];
            a.splice(0, g) } return r }

    function Ae(t, e, i) { const s = t.currentDevicePixelRatio,
            n = 0 !== i ? Math.max(i / 2, .5) : 0; return Math.round((e - n) * s) / s + n }

    function Te(t, e) {
        (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore() }

    function Le(t, e, i, s) { Ee(t, e, i, s, null) }

    function Ee(t, e, i, s, n) { let o, a, r, l, h, c, d, u; const f = e.pointStyle,
            g = e.rotation,
            p = e.radius; let m = (g || 0) * L; if (f && "object" == typeof f && (o = f.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, s), t.rotate(m), t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), void t.restore(); if (!(isNaN(p) || p <= 0)) { switch (t.beginPath(), f) { default: n ? t.ellipse(i, s, n / 2, p, 0, 0, O) : t.arc(i, s, p, 0, O), t.closePath(); break;
                case "triangle":
                        c = n ? n / 2 : p, t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += I, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += I, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), t.closePath(); break;
                case "rectRounded":
                        h = .516 * p, l = p - h, a = Math.cos(m + R) * l, d = Math.cos(m + R) * (n ? n / 2 - h : l), r = Math.sin(m + R) * l, u = Math.sin(m + R) * (n ? n / 2 - h : l), t.arc(i - d, s - r, h, m - C, m - E), t.arc(i + u, s - a, h, m - E, m), t.arc(i + d, s + r, h, m, m + E), t.arc(i - u, s + a, h, m + E, m + C), t.closePath(); break;
                case "rect":
                        if (!g) { l = Math.SQRT1_2 * p, c = n ? n / 2 : l, t.rect(i - c, s - l, 2 * c, 2 * l); break }m += R;
                case "rectRot":
                        d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + u, s - a), t.lineTo(i + d, s + r), t.lineTo(i - u, s + a), t.closePath(); break;
                case "crossRot":
                        m += R;
                case "cross":
                        d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a); break;
                case "star":
                        d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a), m += R, d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a); break;
                case "line":
                        a = n ? n / 2 : Math.cos(m) * p, r = Math.sin(m) * p, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r); break;
                case "dash":
                        t.moveTo(i, s), t.lineTo(i + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p); break;
                case !1:
                        t.closePath() }
            t.fill(), e.borderWidth > 0 && t.stroke() } }

    function Re(t, e, i) { return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i }

    function Ie(t, e) { t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip() }

    function ze(t) { t.restore() }

    function Fe(t, e, i, s, n) { if (!e) return t.lineTo(i.x, i.y); if ("middle" === n) { const s = (e.x + i.x) / 2;
            t.lineTo(s, e.y), t.lineTo(s, i.y) } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
        t.lineTo(i.x, i.y) }

    function Ve(t, e, i, s) { if (!e) return t.lineTo(i.x, i.y);
        t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y) }

    function Be(t, e, i, s, n) { if (n.strikethrough || n.underline) { const o = t.measureText(s),
                a = e - o.actualBoundingBoxLeft,
                r = e + o.actualBoundingBoxRight,
                l = i - o.actualBoundingBoxAscent,
                h = i + o.actualBoundingBoxDescent,
                c = n.strikethrough ? (l + h) / 2 : h;
            t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(a, c), t.lineTo(r, c), t.stroke() } }

    function We(t, e) { const i = t.fillStyle;
        t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = i }

    function Ne(t, e, i, o, a, r = {}) { const l = n(e) ? e : [e],
            h = r.strokeWidth > 0 && "" !== r.strokeColor; let c, d; for (t.save(), t.font = a.string, function(t, e) { e.translation && t.translate(e.translation[0], e.translation[1]), s(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline) }(t, r), c = 0; c < l.length; ++c) d = l[c], r.backdrop && We(t, r.backdrop), h && (r.strokeColor && (t.strokeStyle = r.strokeColor), s(r.strokeWidth) || (t.lineWidth = r.strokeWidth), t.strokeText(d, i, o, r.maxWidth)), t.fillText(d, i, o, r.maxWidth), Be(t, i, o, d, r), o += Number(a.lineHeight);
        t.restore() }

    function He(t, e) { const { x: i, y: s, w: n, h: o, radius: a } = e;
        t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * C, C, !0), t.lineTo(i, s + o - a.bottomLeft), t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, C, E, !0), t.lineTo(i + n - a.bottomRight, s + o), t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, E, 0, !0), t.lineTo(i + n, s + a.topRight), t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -E, !0), t.lineTo(i + a.topLeft, s) }

    function je(t, e = [""], i, s, n = (() => t[0])) { const o = i || t;
        void 0 === s && (s = ti("_fallback", t)); const a = {
            [Symbol.toStringTag]: "Object", _cacheable: !0, _scopes: t, _rootScopes: o, _fallback: s, _getTarget: n, override: i => je([i, ...t], e, o, s) }; return new Proxy(a, { deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0), get: (i, s) => qe(i, s, (() => function(t, e, i, s) { let n; for (const o of e)
                    if (n = ti(Ue(o, t), i), void 0 !== n) return Xe(t, n) ? Je(i, s, t, n) : n }(s, e, t, i))), getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e), getPrototypeOf: () => Reflect.getPrototypeOf(t[0]), has: (t, e) => ei(t).includes(e), ownKeys: t => ei(t), set(t, e, i) { const s = t._storage || (t._storage = n()); return t[e] = s[e] = i, delete t._keys, !0 } }) }

    function $e(t, e, i, s) { const a = { _cacheable: !1, _proxy: t, _context: e, _subProxy: i, _stack: new Set, _descriptors: Ye(t, s), setContext: e => $e(t, e, i, s), override: n => $e(t.override(n), e, i, s) }; return new Proxy(a, { deleteProperty: (e, i) => (delete e[i], delete t[i], !0), get: (t, e, i) => qe(t, e, (() => function(t, e, i) { const { _proxy: s, _context: a, _subProxy: r, _descriptors: l } = t; let h = s[e]; return S(h) && l.isScriptable(e) && (h = function(t, e, i, s) { const { _proxy: n, _context: o, _subProxy: a, _stack: r } = i; if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
                    r.add(t); let l = e(o, a || s); return r.delete(t), Xe(t, l) && (l = Je(n._scopes, n, t, l)), l }(e, h, t, i)), n(h) && h.length && (h = function(t, e, i, s) { const { _proxy: n, _context: a, _subProxy: r, _descriptors: l } = i; if (void 0 !== a.index && s(t)) return e[a.index % e.length]; if (o(e[0])) { const i = e,
                            s = n._scopes.filter((t => t !== i));
                        e = []; for (const o of i) { const i = Je(s, n, t, o);
                            e.push($e(i, a, r && r[t], l)) } } return e }(e, h, t, l.isIndexable)), Xe(e, h) && (h = $e(h, a, r && r[e], l)), h }(t, e, i))), getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? { enumerable: !0, configurable: !0 } : void 0 : Reflect.getOwnPropertyDescriptor(t, i), getPrototypeOf: () => Reflect.getPrototypeOf(t), has: (e, i) => Reflect.has(t, i), ownKeys: () => Reflect.ownKeys(t), set: (e, i, s) => (t[i] = s, delete e[i], !0) }) }

    function Ye(t, e = { scriptable: !0, indexable: !0 }) { const { _scriptable: i = e.scriptable, _indexable: s = e.indexable, _allKeys: n = e.allKeys } = t; return { allKeys: n, scriptable: i, indexable: s, isScriptable: S(i) ? i : () => i, isIndexable: S(s) ? s : () => s } } const Ue = (t, e) => t ? t + w(e) : e,
        Xe = (t, e) => o(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);

    function qe(t, e, i) { if (Object.prototype.hasOwnProperty.call(t, e)) return t[e]; const s = i(); return t[e] = s, s }

    function Ke(t, e, i) { return S(t) ? t(e, i) : t } const Ge = (t, e) => !0 === t ? e : "string" == typeof t ? M(e, t) : void 0;

    function Ze(t, e, i, s, n) { for (const o of e) { const e = Ge(i, o); if (e) { t.add(e); const o = Ke(e._fallback, i, n); if (void 0 !== o && o !== i && o !== s) return o } else if (!1 === e && void 0 !== s && i !== s) return null } return !1 }

    function Je(t, e, i, s) { const a = e._rootScopes,
            r = Ke(e._fallback, i, s),
            l = [...t, ...a],
            h = new Set;
        h.add(s); let c = Qe(h, l, i, r || i, s); return null !== c && (void 0 === r || r === i || (c = Qe(h, l, r, c, s), null !== c)) && je(Array.from(h), [""], a, r, (() => function(t, e, i) { const s = t._getTarget();
            e in s || (s[e] = {}); const a = s[e]; return n(a) && o(i) ? i : a || {} }(e, i, s))) }

    function Qe(t, e, i, s, n) { for (; i;) i = Ze(t, e, i, s, n); return i }

    function ti(t, e) { for (const i of e) { if (!i) continue; const e = i[t]; if (void 0 !== e) return e } }

    function ei(t) { let e = t._keys; return e || (e = t._keys = function(t) { const e = new Set; for (const i of t)
                for (const t of Object.keys(i).filter((t => !t.startsWith("_")))) e.add(t); return Array.from(e) }(t._scopes)), e }

    function ii(t, e, i, s) { const { iScale: n } = t, { key: o = "r" } = this._parsing, a = new Array(s); let r, l, h, c; for (r = 0, l = s; r < l; ++r) h = r + i, c = e[h], a[r] = { r: n.parse(M(c, o), h) }; return a } const si = Number.EPSILON || 1e-14,
        ni = (t, e) => e < t.length && !t[e].skip && t[e],
        oi = t => "x" === t ? "y" : "x";

    function ai(t, e, i, s) { const n = t.skip ? e : t,
            o = e,
            a = i.skip ? e : i,
            r = q(o, n),
            l = q(a, o); let h = r / (r + l),
            c = l / (r + l);
        h = isNaN(h) ? 0 : h, c = isNaN(c) ? 0 : c; const d = s * h,
            u = s * c; return { previous: { x: o.x - d * (a.x - n.x), y: o.y - d * (a.y - n.y) }, next: { x: o.x + u * (a.x - n.x), y: o.y + u * (a.y - n.y) } } }

    function ri(t, e = "x") { const i = oi(e),
            s = t.length,
            n = Array(s).fill(0),
            o = Array(s); let a, r, l, h = ni(t, 0); for (a = 0; a < s; ++a)
            if (r = l, l = h, h = ni(t, a + 1), l) { if (h) { const t = h[e] - l[e];
                    n[a] = 0 !== t ? (h[i] - l[i]) / t : 0 }
                o[a] = r ? h ? F(n[a - 1]) !== F(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a] }! function(t, e, i) { const s = t.length; let n, o, a, r, l, h = ni(t, 0); for (let c = 0; c < s - 1; ++c) l = h, h = ni(t, c + 1), l && h && (V(e[c], 0, si) ? i[c] = i[c + 1] = 0 : (n = i[c] / e[c], o = i[c + 1] / e[c], r = Math.pow(n, 2) + Math.pow(o, 2), r <= 9 || (a = 3 / Math.sqrt(r), i[c] = n * a * e[c], i[c + 1] = o * a * e[c]))) }(t, n, o),
        function(t, e, i = "x") { const s = oi(i),
                n = t.length; let o, a, r, l = ni(t, 0); for (let h = 0; h < n; ++h) { if (a = r, r = l, l = ni(t, h + 1), !r) continue; const n = r[i],
                    c = r[s];
                a && (o = (n - a[i]) / 3, r[`cp1${i}`] = n - o, r[`cp1${s}`] = c - o * e[h]), l && (o = (l[i] - n) / 3, r[`cp2${i}`] = n + o, r[`cp2${s}`] = c + o * e[h]) } }(t, o, e) }

    function li(t, e, i) { return Math.max(Math.min(t, i), e) }

    function hi(t, e, i, s, n) { let o, a, r, l; if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) ri(t, n);
        else { let i = s ? t[t.length - 1] : t[0]; for (o = 0, a = t.length; o < a; ++o) r = t[o], l = ai(i, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, i = r }
        e.capBezierPoints && function(t, e) { let i, s, n, o, a, r = Re(t[0], e); for (i = 0, s = t.length; i < s; ++i) a = o, o = r, r = i < s - 1 && Re(t[i + 1], e), o && (n = t[i], a && (n.cp1x = li(n.cp1x, e.left, e.right), n.cp1y = li(n.cp1y, e.top, e.bottom)), r && (n.cp2x = li(n.cp2x, e.left, e.right), n.cp2y = li(n.cp2y, e.top, e.bottom))) }(t, i) } const ci = t => 0 === t || 1 === t,
        di = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * O / i),
        ui = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * O / i) + 1,
        fi = { linear: t => t, easeInQuad: t => t * t, easeOutQuad: t => -t * (t - 2), easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1), easeInCubic: t => t * t * t, easeOutCubic: t => (t -= 1) * t * t + 1, easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2), easeInQuart: t => t * t * t * t, easeOutQuart: t => -((t -= 1) * t * t * t - 1), easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2), easeInQuint: t => t * t * t * t * t, easeOutQuint: t => (t -= 1) * t * t * t * t + 1, easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2), easeInSine: t => 1 - Math.cos(t * E), easeOutSine: t => Math.sin(t * E), easeInOutSine: t => -.5 * (Math.cos(C * t) - 1), easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)), easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t), easeInOutExpo: t => ci(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))), easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1), easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t), easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1), easeInElastic: t => ci(t) ? t : di(t, .075, .3), easeOutElastic: t => ci(t) ? t : ui(t, .075, .3), easeInOutElastic(t) { const e = .1125; return ci(t) ? t : t < .5 ? .5 * di(2 * t, e, .45) : .5 + .5 * ui(2 * t - 1, e, .45) }, easeInBack(t) { const e = 1.70158; return t * t * ((e + 1) * t - e) }, easeOutBack(t) { const e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1 }, easeInOutBack(t) { let e = 1.70158; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, easeInBounce: t => 1 - fi.easeOutBounce(1 - t), easeOutBounce(t) { const e = 7.5625,
                    i = 2.75; return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375 }, easeInOutBounce: t => t < .5 ? .5 * fi.easeInBounce(2 * t) : .5 * fi.easeOutBounce(2 * t - 1) + .5 };

    function gi(t, e, i, s) { return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) } }

    function pi(t, e, i, s) { return { x: t.x + i * (e.x - t.x), y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y } }

    function mi(t, e, i, s) { const n = { x: t.cp2x, y: t.cp2y },
            o = { x: e.cp1x, y: e.cp1y },
            a = gi(t, n, i),
            r = gi(n, o, i),
            l = gi(o, e, i),
            h = gi(a, r, i),
            c = gi(r, l, i); return gi(h, c, i) } const bi = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        xi = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

    function _i(t, e) { const i = ("" + t).match(bi); if (!i || "normal" === i[1]) return 1.2 * e; switch (t = +i[2], i[3]) {
            case "px":
                return t;
            case "%":
                t /= 100 } return e * t } const yi = t => +t || 0;

    function vi(t, e) { const i = {},
            s = o(e),
            n = s ? Object.keys(e) : e,
            a = o(t) ? s ? i => l(t[i], t[e[i]]) : e => t[e] : () => t; for (const t of n) i[t] = yi(a(t)); return i }

    function Mi(t) { return vi(t, { top: "y", right: "x", bottom: "y", left: "x" }) }

    function wi(t) { return vi(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]) }

    function ki(t) { const e = Mi(t); return e.width = e.left + e.right, e.height = e.top + e.bottom, e }

    function Si(t, e) { t = t || {}, e = e || ue.font; let i = l(t.size, e.size); "string" == typeof i && (i = parseInt(i, 10)); let s = l(t.style, e.style);
        s && !("" + s).match(xi) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0); const n = { family: l(t.family, e.family), lineHeight: _i(l(t.lineHeight, e.lineHeight), i), size: i, style: s, weight: l(t.weight, e.weight), string: "" }; return n.string = De(n), n }

    function Pi(t, e, i, s) { let o, a, r, l = !0; for (o = 0, a = t.length; o < a; ++o)
            if (r = t[o], void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e), l = !1), void 0 !== i && n(r) && (r = r[i % r.length], l = !1), void 0 !== r)) return s && !l && (s.cacheable = !1), r }

    function Di(t, e, i) { const { min: s, max: n } = t, o = c(e, (n - s) / 2), a = (t, e) => i && 0 === t ? 0 : t + e; return { min: a(s, -Math.abs(o)), max: a(n, o) } }

    function Ci(t, e) { return Object.assign(Object.create(t), e) }

    function Oi(t, e, i) { return t ? function(t, e) { return { x: i => t + t + e - i, setWidth(t) { e = t }, textAlign: t => "center" === t ? t : "right" === t ? "left" : "right", xPlus: (t, e) => t - e, leftForLtr: (t, e) => t - e } }(e, i) : { x: t => t, setWidth(t) {}, textAlign: t => t, xPlus: (t, e) => t + e, leftForLtr: (t, e) => t } }

    function Ai(t, e) { let i, s; "ltr" !== e && "rtl" !== e || (i = t.canvas.style, s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s) }

    function Ti(t, e) { void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1])) }

    function Li(t) { return "angle" === t ? { between: Z, compare: K, normalize: G } : { between: tt, compare: (t, e) => t - e, normalize: t => t } }

    function Ei({ start: t, end: e, count: i, loop: s, style: n }) { return { start: t % i, end: e % i, loop: s && (e - t + 1) % i == 0, style: n } }

    function Ri(t, e, i) { if (!i) return [t]; const { property: s, start: n, end: o } = i, a = e.length, { compare: r, between: l, normalize: h } = Li(s), { start: c, end: d, loop: u, style: f } = function(t, e, i) { const { property: s, start: n, end: o } = i, { between: a, normalize: r } = Li(s), l = e.length; let h, c, { start: d, end: u, loop: f } = t; if (f) { for (d += l, u += l, h = 0, c = l; h < c && a(r(e[d % l][s]), n, o); ++h) d--, u--;
                d %= l, u %= l } return u < d && (u += l), { start: d, end: u, loop: f, style: t.style } }(t, e, i), g = []; let p, m, b, x = !1,
            _ = null; for (let t = c, i = c; t <= d; ++t) m = e[t % a], m.skip || (p = h(m[s]), p !== b && (x = l(p, n, o), null === _ && (x || l(n, b, p) && 0 !== r(n, b)) && (_ = 0 === r(p, n) ? t : i), null !== _ && (!x || 0 === r(o, p) || l(o, b, p)) && (g.push(Ei({ start: _, end: t, loop: u, count: a, style: f })), _ = null), i = t, b = p)); return null !== _ && g.push(Ei({ start: _, end: d, loop: u, count: a, style: f })), g }

    function Ii(t, e) { const i = [],
            s = t.segments; for (let n = 0; n < s.length; n++) { const o = Ri(s[n], t.points, e);
            o.length && i.push(...o) } return i }

    function zi(t, e) { const i = t.points,
            s = t.options.spanGaps,
            n = i.length; if (!n) return []; const o = !!t._loop,
            { start: a, end: r } = function(t, e, i, s) { let n = 0,
                    o = e - 1; if (i && !s)
                    for (; n < e && !t[n].skip;) n++; for (; n < e && t[n].skip;) n++; for (n %= e, i && (o += n); o > n && t[o % e].skip;) o--; return o %= e, { start: n, end: o } }(i, n, o, s); return Fi(t, !0 === s ? [{ start: a, end: r, loop: o }] : function(t, e, i, s) { const n = t.length,
                o = []; let a, r = e,
                l = t[e]; for (a = e + 1; a <= i; ++a) { const i = t[a % n];
                i.skip || i.stop ? l.skip || (s = !1, o.push({ start: e % n, end: (a - 1) % n, loop: s }), e = r = i.stop ? a : null) : (r = a, l.skip && (e = a)), l = i } return null !== r && o.push({ start: e % n, end: r % n, loop: s }), o }(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1), i, e) }

    function Fi(t, e, i, s) { return s && s.setContext && i ? function(t, e, i, s) { const n = t._chart.getContext(),
                o = Vi(t.options),
                { _datasetIndex: a, options: { spanGaps: r } } = t,
                l = i.length,
                h = []; let c = o,
                d = e[0].start,
                u = d;

            function f(t, e, s, n) { const o = r ? -1 : 1; if (t !== e) { for (t += l; i[t % l].skip;) t -= o; for (; i[e % l].skip;) e += o;
                    t % l != e % l && (h.push({ start: t % l, end: e % l, loop: s, style: n }), c = n, d = e % l) } } for (const t of e) { d = r ? d : t.start; let e, o = i[d % l]; for (u = d + 1; u <= t.end; u++) { const r = i[u % l];
                    e = Vi(s.setContext(Ci(n, { type: "segment", p0: o, p1: r, p0DataIndex: (u - 1) % l, p1DataIndex: u % l, datasetIndex: a }))), Bi(e, c) && f(d, u - 1, t.loop, c), o = r, c = e }
                d < u - 1 && f(d, u - 1, t.loop, c) } return h }(t, e, i, s) : e }

    function Vi(t) { return { backgroundColor: t.backgroundColor, borderCapStyle: t.borderCapStyle, borderDash: t.borderDash, borderDashOffset: t.borderDashOffset, borderJoinStyle: t.borderJoinStyle, borderWidth: t.borderWidth, borderColor: t.borderColor } }

    function Bi(t, e) { if (!e) return !1; const i = [],
            s = function(t, e) { return Jt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e }; return JSON.stringify(t, s) !== JSON.stringify(e, s) } var Wi = Object.freeze({ __proto__: null, HALF_PI: E, INFINITY: T, PI: C, PITAU: A, QUARTER_PI: R, RAD_PER_DEG: L, TAU: O, TWO_THIRDS_PI: I, _addGrace: Di, _alignPixel: Ae, _alignStartEnd: ft, _angleBetween: Z, _angleDiff: K, _arrayUnique: lt, _attachContext: $e, _bezierCurveTo: Ve, _bezierInterpolation: mi, _boundSegment: Ri, _boundSegments: Ii, _capitalize: w, _computeSegments: zi, _createResolver: je, _decimalPlaces: U, _deprecated: function(t, e, i, s) { void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + s + '" instead') }, _descriptors: Ye, _elementsEqual: f, _factorize: W, _filterBetween: nt, _getParentNode: ge, _getStartAndCountOfVisiblePoints: pt, _int16Range: Q, _isBetween: tt, _isClickEvent: D, _isDomSupported: fe, _isPointInArea: Re, _limitValue: J, _longestText: Oe, _lookup: et, _lookupByKey: it, _measureText: Ce, _merger: m, _mergerIf: _, _normalizeAngle: G, _parseObjectDataRadialScale: ii, _pointInLine: gi, _readValueToProps: vi, _rlookupByKey: st, _scaleRangesChanged: mt, _setMinAndMaxByKey: j, _splitKey: v, _steppedInterpolation: pi, _steppedLineTo: Fe, _textX: gt, _toLeftRightCenter: ut, _updateBezierControlPoints: hi, addRoundedRectPath: He, almostEquals: V, almostWhole: H, callback: d, clearCanvas: Te, clipArea: Ie, clone: g, color: Qt, createContext: Ci, debounce: dt, defined: k, distanceBetweenPoints: q, drawPoint: Le, drawPointLegend: Ee, each: u, easingEffects: fi, finiteOrDefault: r, fontString: function(t, e, i) { return e + " " + t + "px " + i }, formatNumber: ne, getAngleFromPoint: X, getHoverColor: te, getMaximumSize: we, getRelativePosition: ve, getRtlAdapter: Oi, getStyle: be, isArray: n, isFinite: a, isFunction: S, isNullOrUndef: s, isNumber: N, isObject: o, isPatternOrGradient: Jt, listenArrayEvents: at, log10: z, merge: b, mergeIf: x, niceNum: B, noop: e, overrideTextDirection: Ai, readUsedSize: Pe, renderText: Ne, requestAnimFrame: ht, resolve: Pi, resolveObjectKey: M, restoreTextDirection: Ti, retinaScale: ke, setsEqual: P, sign: F, splineCurve: ai, splineCurveMonotone: ri, supportsEventListenerOptions: Se, throttled: ct, toDegrees: Y, toDimension: c, toFont: Si, toFontString: De, toLineHeight: _i, toPadding: ki, toPercentage: h, toRadians: $, toTRBL: Mi, toTRBLCorners: wi, uid: i, unclipArea: ze, unlistenArrayEvents: rt, valueOrDefault: l });

    function Ni(t, e, i, s) { const { controller: n, data: o, _sorted: a } = t, r = n._cachedMeta.iScale; if (r && e === r.axis && "r" !== e && a && o.length) { const t = r._reversePixels ? st : it; if (!s) return t(o, e, i); if (n._sharedOptions) { const s = o[0],
                    n = "function" == typeof s.getRange && s.getRange(e); if (n) { const s = t(o, e, i - n),
                        a = t(o, e, i + n); return { lo: s.lo, hi: a.hi } } } } return { lo: 0, hi: o.length - 1 } }

    function Hi(t, e, i, s, n) { const o = t.getSortedVisibleDatasetMetas(),
            a = i[e]; for (let t = 0, i = o.length; t < i; ++t) { const { index: i, data: r } = o[t], { lo: l, hi: h } = Ni(o[t], e, a, n); for (let t = l; t <= h; ++t) { const e = r[t];
                e.skip || s(e, i, t) } } }

    function ji(t, e, i, s, n) { const o = []; return n || t.isPointInArea(e) ? (Hi(t, i, e, (function(i, a, r) {
            (n || Re(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && o.push({ element: i, datasetIndex: a, index: r }) }), !0), o) : o }

    function Yi(t, e, i, s, n, o) { return o || t.isPointInArea(e) ? "r" !== i || s ? function $i(t, e, i, s, n, o) { let a = []; const r = function(t) { const e = -1 !== t.indexOf("x"),
                    i = -1 !== t.indexOf("y"); return function(t, s) { const n = e ? Math.abs(t.x - s.x) : 0,
                        o = i ? Math.abs(t.y - s.y) : 0; return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)) } }(i); let l = Number.POSITIVE_INFINITY; return Hi(t, i, e, (function(i, h, c) { const d = i.inRange(e.x, e.y, n); if (s && !d) return; const u = i.getCenterPoint(n); if (!o && !t.isPointInArea(u) && !d) return; const f = r(e, u);
                f < l ? (a = [{ element: i, datasetIndex: h, index: c }], l = f) : f === l && a.push({ element: i, datasetIndex: h, index: c }) })), a }(t, e, i, s, n, o) : function(t, e, i, s) { let n = []; return Hi(t, i, e, (function(t, i, o) { const { startAngle: a, endAngle: r } = t.getProps(["startAngle", "endAngle"], s), { angle: l } = X(t, { x: e.x, y: e.y });
                Z(l, a, r) && n.push({ element: t, datasetIndex: i, index: o }) })), n }(t, e, i, n) : [] }

    function Ui(t, e, i, s, n) { const o = [],
            a = "x" === i ? "inXRange" : "inYRange"; let r = !1; return Hi(t, i, e, ((t, s, l) => { t[a](e[i], n) && (o.push({ element: t, datasetIndex: s, index: l }), r = r || t.inRange(e.x, e.y, n)) })), s && !r ? [] : o } var Xi = { evaluateInteractionItems: Hi, modes: { index(t, e, i, s) { const n = ve(e, t),
                    o = i.axis || "x",
                    a = i.includeInvisible || !1,
                    r = i.intersect ? ji(t, n, o, s, a) : Yi(t, n, o, !1, s, a),
                    l = []; return r.length ? (t.getSortedVisibleDatasetMetas().forEach((t => { const e = r[0].index,
                        i = t.data[e];
                    i && !i.skip && l.push({ element: i, datasetIndex: t.index, index: e }) })), l) : [] }, dataset(t, e, i, s) { const n = ve(e, t),
                    o = i.axis || "xy",
                    a = i.includeInvisible || !1; let r = i.intersect ? ji(t, n, o, s, a) : Yi(t, n, o, !1, s, a); if (r.length > 0) { const e = r[0].datasetIndex,
                        i = t.getDatasetMeta(e).data;
                    r = []; for (let t = 0; t < i.length; ++t) r.push({ element: i[t], datasetIndex: e, index: t }) } return r }, point: (t, e, i, s) => ji(t, ve(e, t), i.axis || "xy", s, i.includeInvisible || !1), nearest(t, e, i, s) { const n = ve(e, t),
                    o = i.axis || "xy",
                    a = i.includeInvisible || !1; return Yi(t, n, o, i.intersect, s, a) }, x: (t, e, i, s) => Ui(t, ve(e, t), "x", i.intersect, s), y: (t, e, i, s) => Ui(t, ve(e, t), "y", i.intersect, s) } }; const qi = ["left", "top", "right", "bottom"];

    function Ki(t, e) { return t.filter((t => t.pos === e)) }

    function Gi(t, e) { return t.filter((t => -1 === qi.indexOf(t.pos) && t.box.axis === e)) }

    function Zi(t, e) { return t.sort(((t, i) => { const s = e ? i : t,
                n = e ? t : i; return s.weight === n.weight ? s.index - n.index : s.weight - n.weight })) }

    function Qi(t, e, i, s) { return Math.max(t[i], e[i]) + Math.max(t[s], e[s]) }

    function ts(t, e) { t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right) }

    function es(t, e, i, s) { const { pos: n, box: a } = i, r = t.maxPadding; if (!o(n)) { i.size && (t[n] -= i.size); const e = s[i.stack] || { size: 0, count: 1 };
            e.size = Math.max(e.size, i.horizontal ? a.height : a.width), i.size = e.size / e.count, t[n] += i.size }
        a.getPadding && ts(r, a.getPadding()); const l = Math.max(0, e.outerWidth - Qi(r, t, "left", "right")),
            h = Math.max(0, e.outerHeight - Qi(r, t, "top", "bottom")),
            c = l !== t.w,
            d = h !== t.h; return t.w = l, t.h = h, i.horizontal ? { same: c, other: d } : { same: d, other: c } }

    function is(t, e) { const i = e.maxPadding; return function s(t) { const s = { left: 0, top: 0, right: 0, bottom: 0 }; return t.forEach((t => { s[t] = Math.max(e[t], i[t]) })), s }(t ? ["left", "right"] : ["top", "bottom"]) }

    function ss(t, e, i, s) { const n = []; let o, a, r, l, h, c; for (o = 0, a = t.length, h = 0; o < a; ++o) { r = t[o], l = r.box, l.update(r.width || e.w, r.height || e.h, is(r.horizontal, e)); const { same: a, other: d } = es(e, i, r, s);
            h |= a && n.length, c = c || d, l.fullSize || n.push(r) } return h && ss(n, e, i, s) || c }

    function ns(t, e, i, s, n) { t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n }

    function os(t, e, i, s) { const n = i.padding; let { x: o, y: a } = e; for (const r of t) { const t = r.box,
                l = s[r.stack] || { count: 1, placed: 0, weight: 1 },
                h = r.stackWeight / l.weight || 1; if (r.horizontal) { const s = e.w * h,
                    o = l.size || t.height;
                k(l.start) && (a = l.start), t.fullSize ? ns(t, n.left, a, i.outerWidth - n.right - n.left, o) : ns(t, e.left + l.placed, a, s, o), l.start = a, l.placed += s, a = t.bottom } else { const s = e.h * h,
                    a = l.size || t.width;
                k(l.start) && (o = l.start), t.fullSize ? ns(t, o, n.top, a, i.outerHeight - n.bottom - n.top) : ns(t, o, e.top + l.placed, a, s), l.start = o, l.placed += s, o = t.right } }
        e.x = o, e.y = a } var as = { addBox(t, e) { t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() { return [{ z: 0, draw(t) { e.draw(t) } }] }, t.boxes.push(e) }, removeBox(t, e) { const i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1) }, configure(t, e, i) { e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight }, update(t, e, i, s) { if (!t) return; const n = ki(t.options.layout.padding),
                o = Math.max(e - n.width, 0),
                a = Math.max(i - n.height, 0),
                r = function(t) { const e = function(t) { const e = []; let i, s, n, o, a, r; for (i = 0, s = (t || []).length; i < s; ++i) n = t[i], ({ position: o, options: { stack: a, stackWeight: r = 1 } } = n), e.push({ index: i, box: n, pos: o, horizontal: n.isHorizontal(), weight: n.weight, stack: a && o + a, stackWeight: r }); return e }(t),
                        i = Zi(e.filter((t => t.box.fullSize)), !0),
                        s = Zi(Ki(e, "left"), !0),
                        n = Zi(Ki(e, "right")),
                        o = Zi(Ki(e, "top"), !0),
                        a = Zi(Ki(e, "bottom")),
                        r = Gi(e, "x"),
                        l = Gi(e, "y"); return { fullSize: i, leftAndTop: s.concat(o), rightAndBottom: n.concat(l).concat(a).concat(r), chartArea: Ki(e, "chartArea"), vertical: s.concat(n).concat(l), horizontal: o.concat(a).concat(r) } }(t.boxes),
                l = r.vertical,
                h = r.horizontal;
            u(t.boxes, (t => { "function" == typeof t.beforeLayout && t.beforeLayout() })); const c = l.reduce(((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
                d = Object.freeze({ outerWidth: e, outerHeight: i, padding: n, availableWidth: o, availableHeight: a, vBoxMaxWidth: o / 2 / c, hBoxMaxHeight: a / 2 }),
                f = Object.assign({}, n);
            ts(f, ki(s)); const g = Object.assign({ maxPadding: f, w: o, h: a, x: n.left, y: n.top }, n),
                p = function Ji(t, e) { const i = function(t) { const e = {}; for (const i of t) { const { stack: t, pos: s, stackWeight: n } = i; if (!t || !qi.includes(s)) continue; const o = e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                                o.count++, o.weight += n } return e }(t),
                        { vBoxMaxWidth: s, hBoxMaxHeight: n } = e; let o, a, r; for (o = 0, a = t.length; o < a; ++o) { r = t[o]; const { fullSize: a } = r.box, l = i[r.stack], h = l && r.stackWeight / l.weight;
                        r.horizontal ? (r.width = h ? h * s : a && e.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : a && e.availableHeight) } return i }(l.concat(h), d);
            ss(r.fullSize, g, d, p), ss(l, g, d, p), ss(h, g, d, p) && ss(l, g, d, p),
                function(t) { const e = t.maxPadding;

                    function i(i) { const s = Math.max(e[i] - t[i], 0); return t[i] += s, s }
                    t.y += i("top"), t.x += i("left"), i("right"), i("bottom") }(g), os(r.leftAndTop, g, d, p), g.x += g.w, g.y += g.h, os(r.rightAndBottom, g, d, p), t.chartArea = { left: g.left, top: g.top, right: g.left + g.w, bottom: g.top + g.h, height: g.h, width: g.w }, u(r.chartArea, (e => { const i = e.box;
                    Object.assign(i, t.chartArea), i.update(g.w, g.h, { left: 0, top: 0, right: 0, bottom: 0 }) })) } };
    class rs { acquireContext(t, e) {}
        releaseContext(t) { return !1 }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() { return 1 }
        getMaximumSize(t, e, i, s) { return e = Math.max(0, e || t.width), i = i || t.height, { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) } }
        isAttached(t) { return !0 }
        updateConfig(t) {} }
    class ls extends rs { acquireContext(t) { return t && t.getContext && t.getContext("2d") || null }
        updateConfig(t) { t.options.animation = !1 } } const hs = "$chartjs",
        cs = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" },
        ds = t => null === t || "" === t,
        us = !!Se && { passive: !0 };

    function fs(t, e, i) { t.canvas.removeEventListener(e, i, us) }

    function gs(t, e) { for (const i of t)
            if (i === e || i.contains(e)) return !0 }

    function ps(t, e, i) { const s = t.canvas,
            n = new MutationObserver((t => { let e = !1; for (const i of t) e = e || gs(i.addedNodes, s), e = e && !gs(i.removedNodes, s);
                e && i() })); return n.observe(document, { childList: !0, subtree: !0 }), n }

    function ms(t, e, i) { const s = t.canvas,
            n = new MutationObserver((t => { let e = !1; for (const i of t) e = e || gs(i.removedNodes, s), e = e && !gs(i.addedNodes, s);
                e && i() })); return n.observe(document, { childList: !0, subtree: !0 }), n } const bs = new Map; let xs = 0;

    function _s() { const t = window.devicePixelRatio;
        t !== xs && (xs = t, bs.forEach(((e, i) => { i.currentDevicePixelRatio !== t && e() }))) }

    function ys(t, e, i) { const s = t.canvas,
            n = s && ge(s); if (!n) return; const o = ct(((t, e) => { const s = n.clientWidth;
                i(t, e), s < n.clientWidth && i() }), window),
            a = new ResizeObserver((t => { const e = t[0],
                    i = e.contentRect.width,
                    s = e.contentRect.height;
                0 === i && 0 === s || o(i, s) })); return a.observe(n),
            function(t, e) { bs.size || window.addEventListener("resize", _s), bs.set(t, e) }(t, o), a }

    function vs(t, e, i) { i && i.disconnect(), "resize" === e && function(t) { bs.delete(t), bs.size || window.removeEventListener("resize", _s) }(t) }

    function Ms(t, e, i) { const s = t.canvas,
            n = ct((e => { null !== t.ctx && i(function(t, e) { const i = cs[t.type] || t.type,
                        { x: s, y: n } = ve(t, e); return { type: i, chart: e, native: t, x: void 0 !== s ? s : null, y: void 0 !== n ? n : null } }(e, t)) }), t); return function(t, e, i) { t.addEventListener(e, i, us) }(s, e, n), n }
    class ws extends rs { acquireContext(t, e) { const i = t && t.getContext && t.getContext("2d"); return i && i.canvas === t ? (function(t, e) { const i = t.style,
                    s = t.getAttribute("height"),
                    n = t.getAttribute("width"); if (t[hs] = { initial: { height: s, width: n, style: { display: i.display, height: i.height, width: i.width } } }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", ds(n)) { const e = Pe(t, "width");
                    void 0 !== e && (t.width = e) } if (ds(s))
                    if ("" === t.style.height) t.height = t.width / (e || 2);
                    else { const e = Pe(t, "height");
                        void 0 !== e && (t.height = e) } }(t, e), i) : null }
        releaseContext(t) { const e = t.canvas; if (!e[hs]) return !1; const i = e[hs].initial;
            ["height", "width"].forEach((t => { const n = i[t];
                s(n) ? e.removeAttribute(t) : e.setAttribute(t, n) })); const n = i.style || {}; return Object.keys(n).forEach((t => { e.style[t] = n[t] })), e.width = e.width, delete e[hs], !0 }
        addEventListener(t, e, i) { this.removeEventListener(t, e); const s = t.$proxies || (t.$proxies = {}),
                n = { attach: ps, detach: ms, resize: ys }[e] || Ms;
            s[e] = n(t, e, i) }
        removeEventListener(t, e) { const i = t.$proxies || (t.$proxies = {}),
                s = i[e];
            s && (({ attach: vs, detach: vs, resize: vs }[e] || fs)(t, e, s), i[e] = void 0) }
        getDevicePixelRatio() { return window.devicePixelRatio }
        getMaximumSize(t, e, i, s) { return we(t, e, i, s) }
        isAttached(t) { const e = ge(t); return !(!e || !e.isConnected) } }

    function ks(t) { return !fe() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? ls : ws } var Ss = Object.freeze({ __proto__: null, BasePlatform: rs, BasicPlatform: ls, DomPlatform: ws, _detectPlatform: ks }); const Ps = "transparent",
        Ds = { boolean: (t, e, i) => i > .5 ? e : t, color(t, e, i) { const s = Qt(t || Ps),
                    n = s.valid && Qt(e || Ps); return n && n.valid ? n.mix(s, i).hexString() : e }, number: (t, e, i) => t + (e - t) * i };
    class Cs { constructor(t, e, i, s) { const n = e[i];
            s = Pi([t.to, s, n, t.from]); const o = Pi([t.from, n, s]);
            this._active = !0, this._fn = t.fn || Ds[t.type || typeof o], this._easing = fi[t.easing] || fi.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = o, this._to = s, this._promises = void 0 }
        active() { return this._active }
        update(t, e, i) { if (this._active) { this._notify(!1); const s = this._target[this._prop],
                    n = i - this._start,
                    o = this._duration - n;
                this._start = i, this._duration = Math.floor(Math.max(o, t.duration)), this._total += n, this._loop = !!t.loop, this._to = Pi([t.to, e, s, t.from]), this._from = Pi([t.from, s, e]) } }
        cancel() { this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1)) }
        tick(t) { const e = t - this._start,
                i = this._duration,
                s = this._prop,
                n = this._from,
                o = this._loop,
                a = this._to; let r; if (this._active = n !== a && (o || e < i), !this._active) return this._target[s] = a, void this._notify(!0);
            e < 0 ? this._target[s] = n : (r = e / i % 2, r = o && r > 1 ? 2 - r : r, r = this._easing(Math.min(1, Math.max(0, r))), this._target[s] = this._fn(n, a, r)) }
        wait() { const t = this._promises || (this._promises = []); return new Promise(((e, i) => { t.push({ res: e, rej: i }) })) }
        _notify(t) { const e = t ? "res" : "rej",
                i = this._promises || []; for (let t = 0; t < i.length; t++) i[t][e]() } }
    class Os { constructor(t, e) { this._chart = t, this._properties = new Map, this.configure(e) }
        configure(t) { if (!o(t)) return; const e = Object.keys(ue.animation),
                i = this._properties;
            Object.getOwnPropertyNames(t).forEach((s => { const a = t[s]; if (!o(a)) return; const r = {}; for (const t of e) r[t] = a[t];
                (n(a.properties) && a.properties || [s]).forEach((t => { t !== s && i.has(t) || i.set(t, r) })) })) }
        _animateOptions(t, e) { const i = e.options,
                s = function(t, e) { if (!e) return; let i = t.options; if (i) return i.$shared && (t.options = i = Object.assign({}, i, { $shared: !1, $animations: {} })), i;
                    t.options = e }(t, i); if (!s) return []; const n = this._createAnimations(s, i); return i.$shared && function(t, e) { const i = [],
                    s = Object.keys(e); for (let e = 0; e < s.length; e++) { const n = t[s[e]];
                    n && n.active() && i.push(n.wait()) } return Promise.all(i) }(t.options.$animations, i).then((() => { t.options = i }), (() => {})), n }
        _createAnimations(t, e) { const i = this._properties,
                s = [],
                n = t.$animations || (t.$animations = {}),
                o = Object.keys(e),
                a = Date.now(); let r; for (r = o.length - 1; r >= 0; --r) { const l = o[r]; if ("$" === l.charAt(0)) continue; if ("options" === l) { s.push(...this._animateOptions(t, e)); continue } const h = e[l]; let c = n[l]; const d = i.get(l); if (c) { if (d && c.active()) { c.update(d, h, a); continue }
                    c.cancel() }
                d && d.duration ? (n[l] = c = new Cs(d, t, l, h), s.push(c)) : t[l] = h } return s }
        update(t, e) { if (0 === this._properties.size) return void Object.assign(t, e); const i = this._createAnimations(t, e); return i.length ? (xt.add(this._chart, i), !0) : void 0 } }

    function As(t, e) { const i = t && t.options || {},
            s = i.reverse,
            n = void 0 === i.min ? e : 0,
            o = void 0 === i.max ? e : 0; return { start: s ? o : n, end: s ? n : o } }

    function Ts(t, e) { const i = [],
            s = t._getSortedDatasetMetas(e); let n, o; for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index); return i }

    function Ls(t, e, i, s = {}) { const n = t.keys,
            o = "single" === s.mode; let r, l, h, c; if (null !== e) { for (r = 0, l = n.length; r < l; ++r) { if (h = +n[r], h === i) { if (s.all) continue; break }
                c = t.values[h], a(c) && (o || 0 === e || F(e) === F(c)) && (e += c) } return e } }

    function Es(t, e) { const i = t && t.options.stacked; return i || void 0 === i && void 0 !== e.stack }

    function Rs(t, e, i) { const s = t[e] || (t[e] = {}); return s[i] || (s[i] = {}) }

    function Is(t, e, i, s) { for (const n of e.getMatchingVisibleMetas(s).reverse()) { const e = t[n.index]; if (i && e > 0 || !i && e < 0) return n.index } return null }

    function zs(t, e) { const { chart: i, _cachedMeta: s } = t, n = i._stacks || (i._stacks = {}), { iScale: o, vScale: a, index: r } = s, l = o.axis, h = a.axis, c = function(t, e, i) { return `${t.id}.${e.id}.${i.stack||i.type}` }(o, a, s), d = e.length; let u; for (let t = 0; t < d; ++t) { const i = e[t],
                {
                    [l]: o, [h]: d } = i;
            u = (i._stacks || (i._stacks = {}))[h] = Rs(n, c, o), u[r] = d, u._top = Is(u, a, !0, s.type), u._bottom = Is(u, a, !1, s.type), (u._visualValues || (u._visualValues = {}))[r] = d } }

    function Fs(t, e) { const i = t.scales; return Object.keys(i).filter((t => i[t].axis === e)).shift() }

    function Vs(t, e) { const i = t.controller.index,
            s = t.vScale && t.vScale.axis; if (s) { e = e || t._parsed; for (const t of e) { const e = t._stacks; if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
                delete e[s][i], void 0 !== e[s]._visualValues && void 0 !== e[s]._visualValues[i] && delete e[s]._visualValues[i] } } } const Bs = t => "reset" === t || "none" === t,
        Ws = (t, e) => e ? t : Object.assign({}, t);
    class Ns { static defaults = {};
        static datasetElementType = null;
        static dataElementType = null;
        constructor(t, e) { this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize() }
        initialize() { const t = this._cachedMeta;
            this.configure(), this.linkScales(), t._stacked = Es(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options") }
        updateIndex(t) { this.index !== t && Vs(this._cachedMeta), this.index = t }
        linkScales() { const t = this.chart,
                e = this._cachedMeta,
                i = this.getDataset(),
                s = (t, e, i, s) => "x" === t ? e : "r" === t ? s : i,
                n = e.xAxisID = l(i.xAxisID, Fs(t, "x")),
                o = e.yAxisID = l(i.yAxisID, Fs(t, "y")),
                a = e.rAxisID = l(i.rAxisID, Fs(t, "r")),
                r = e.indexAxis,
                h = e.iAxisID = s(r, n, o, a),
                c = e.vAxisID = s(r, o, n, a);
            e.xScale = this.getScaleForId(n), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(h), e.vScale = this.getScaleForId(c) }
        getDataset() { return this.chart.data.datasets[this.index] }
        getMeta() { return this.chart.getDatasetMeta(this.index) }
        getScaleForId(t) { return this.chart.scales[t] }
        _getOtherScale(t) { const e = this._cachedMeta; return t === e.iScale ? e.vScale : e.iScale }
        reset() { this._update("reset") }
        _destroy() { const t = this._cachedMeta;
            this._data && rt(this._data, this), t._stacked && Vs(t) }
        _dataCheck() { const t = this.getDataset(),
                e = t.data || (t.data = []),
                i = this._data; if (o(e)) this._data = function(t) { const e = Object.keys(t),
                    i = new Array(e.length); let s, n, o; for (s = 0, n = e.length; s < n; ++s) o = e[s], i[s] = { x: o, y: t[o] }; return i }(e);
            else if (i !== e) { if (i) { rt(i, this); const t = this._cachedMeta;
                    Vs(t), t._parsed = [] }
                e && Object.isExtensible(e) && at(e, this), this._syncList = [], this._data = e } }
        addElements() { const t = this._cachedMeta;
            this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType) }
        buildOrUpdateElements(t) { const e = this._cachedMeta,
                i = this.getDataset(); let s = !1;
            this._dataCheck(); const n = e._stacked;
            e._stacked = Es(e.vScale, e), e.stack !== i.stack && (s = !0, Vs(e), e.stack = i.stack), this._resyncElements(t), (s || n !== e._stacked) && zs(this, e._parsed) }
        configure() { const t = this.chart.config,
                e = t.datasetScopeKeys(this._type),
                i = t.getOptionScopes(this.getDataset(), e, !0);
            this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {} }
        parse(t, e) { const { _cachedMeta: i, _data: s } = this, { iScale: a, _stacked: r } = i, l = a.axis; let h, c, d, u = 0 === t && e === s.length || i._sorted,
                f = t > 0 && i._parsed[t - 1]; if (!1 === this._parsing) i._parsed = s, i._sorted = !0, d = s;
            else { d = n(s[t]) ? this.parseArrayData(i, s, t, e) : o(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e); const a = () => null === c[l] || f && c[l] < f[l]; for (h = 0; h < e; ++h) i._parsed[h + t] = c = d[h], u && (a() && (u = !1), f = c);
                i._sorted = u }
            r && zs(this, d) }
        parsePrimitiveData(t, e, i, s) { const { iScale: n, vScale: o } = t, a = n.axis, r = o.axis, l = n.getLabels(), h = n === o, c = new Array(s); let d, u, f; for (d = 0, u = s; d < u; ++d) f = d + i, c[d] = {
                [a]: h || n.parse(l[f], f), [r]: o.parse(e[f], f) }; return c }
        parseArrayData(t, e, i, s) { const { xScale: n, yScale: o } = t, a = new Array(s); let r, l, h, c; for (r = 0, l = s; r < l; ++r) h = r + i, c = e[h], a[r] = { x: n.parse(c[0], h), y: o.parse(c[1], h) }; return a }
        parseObjectData(t, e, i, s) { const { xScale: n, yScale: o } = t, { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing, l = new Array(s); let h, c, d, u; for (h = 0, c = s; h < c; ++h) d = h + i, u = e[d], l[h] = { x: n.parse(M(u, a), d), y: o.parse(M(u, r), d) }; return l }
        getParsed(t) { return this._cachedMeta._parsed[t] }
        getDataElement(t) { return this._cachedMeta.data[t] }
        applyStack(t, e, i) { const s = this.chart,
                n = this._cachedMeta,
                o = e[t.axis]; return Ls({ keys: Ts(s, !0), values: e._stacks[t.axis]._visualValues }, o, n.index, { mode: i }) }
        updateRangeFromParsed(t, e, i, s) { const n = i[e.axis]; let o = null === n ? NaN : n; const a = s && i._stacks[e.axis];
            s && a && (s.values = a, o = Ls(s, n, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o) }
        getMinMax(t, e) { const i = this._cachedMeta,
                s = i._parsed,
                n = i._sorted && t === i.iScale,
                o = s.length,
                r = this._getOtherScale(t),
                l = ((t, e, i) => t && !e.hidden && e._stacked && { keys: Ts(i, !0), values: null })(e, i, this.chart),
                h = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
                { min: c, max: d } = function(t) { const { min: e, max: i, minDefined: s, maxDefined: n } = t.getUserBounds(); return { min: s ? e : Number.NEGATIVE_INFINITY, max: n ? i : Number.POSITIVE_INFINITY } }(r); let u, f;

            function g() { f = s[u]; const e = f[r.axis]; return !a(f[t.axis]) || c > e || d < e } for (u = 0; u < o && (g() || (this.updateRangeFromParsed(h, t, f, l), !n)); ++u); if (n)
                for (u = o - 1; u >= 0; --u)
                    if (!g()) { this.updateRangeFromParsed(h, t, f, l); break }
            return h }
        getAllParsedValues(t) { const e = this._cachedMeta._parsed,
                i = []; let s, n, o; for (s = 0, n = e.length; s < n; ++s) o = e[s][t.axis], a(o) && i.push(o); return i }
        getMaxOverflow() { return !1 }
        getLabelAndValue(t) { const e = this._cachedMeta,
                i = e.iScale,
                s = e.vScale,
                n = this.getParsed(t); return { label: i ? "" + i.getLabelForValue(n[i.axis]) : "", value: s ? "" + s.getLabelForValue(n[s.axis]) : "" } }
        _update(t) { const e = this._cachedMeta;
            this.update(t || "default"), e._clip = function(t) { let e, i, s, n; return o(t) ? (e = t.top, i = t.right, s = t.bottom, n = t.left) : e = i = s = n = t, { top: e, right: i, bottom: s, left: n, disabled: !1 === t } }(l(this.options.clip, function(t, e, i) { if (!1 === i) return !1; const s = As(t, i),
                    n = As(e, i); return { top: n.end, right: s.end, bottom: n.start, left: s.start } }(e.xScale, e.yScale, this.getMaxOverflow()))) }
        update(t) {}
        draw() { const t = this._ctx,
                e = this.chart,
                i = this._cachedMeta,
                s = i.data || [],
                n = e.chartArea,
                o = [],
                a = this._drawStart || 0,
                r = this._drawCount || s.length - a,
                l = this.options.drawActiveElementsOnTop; let h; for (i.dataset && i.dataset.draw(t, n, a, r), h = a; h < a + r; ++h) { const e = s[h];
                e.hidden || (e.active && l ? o.push(e) : e.draw(t, n)) } for (h = 0; h < o.length; ++h) o[h].draw(t, n) }
        getStyle(t, e) { const i = e ? "active" : "default"; return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i) }
        getContext(t, e, i) { const s = this.getDataset(); let n; if (t >= 0 && t < this._cachedMeta.data.length) { const e = this._cachedMeta.data[t];
                n = e.$context || (e.$context = function(t, e, i) { return Ci(t, { active: !1, dataIndex: e, parsed: void 0, raw: void 0, element: i, index: e, mode: "default", type: "data" }) }(this.getContext(), t, e)), n.parsed = this.getParsed(t), n.raw = s.data[t], n.index = n.dataIndex = t } else n = this.$context || (this.$context = function(t, e) { return Ci(t, { active: !1, dataset: void 0, datasetIndex: e, index: e, mode: "default", type: "dataset" }) }(this.chart.getContext(), this.index)), n.dataset = s, n.index = n.datasetIndex = this.index; return n.active = !!e, n.mode = i, n }
        resolveDatasetElementOptions(t) { return this._resolveElementOptions(this.datasetElementType.id, t) }
        resolveDataElementOptions(t, e) { return this._resolveElementOptions(this.dataElementType.id, e, t) }
        _resolveElementOptions(t, e = "default", i) { const s = "active" === e,
                n = this._cachedDataOpts,
                o = t + "-" + e,
                a = n[o],
                r = this.enableOptionSharing && k(i); if (a) return Ws(a, r); const l = this.chart.config,
                h = l.datasetElementScopeKeys(this._type, t),
                c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                d = l.getOptionScopes(this.getDataset(), h),
                u = Object.keys(ue.elements[t]),
                f = l.resolveNamedOptions(d, u, (() => this.getContext(i, s, e)), c); return f.$shared && (f.$shared = r, n[o] = Object.freeze(Ws(f, r))), f }
        _resolveAnimations(t, e, i) { const s = this.chart,
                n = this._cachedDataOpts,
                o = `animation-${e}`,
                a = n[o]; if (a) return a; let r; if (!1 !== s.options.animation) { const s = this.chart.config,
                    n = s.datasetAnimationScopeKeys(this._type, e),
                    o = s.getOptionScopes(this.getDataset(), n);
                r = s.createResolver(o, this.getContext(t, i, e)) } const l = new Os(s, r && r.animations); return r && r._cacheable && (n[o] = Object.freeze(l)), l }
        getSharedOptions(t) { if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t)) }
        includeOptions(t, e) { return !e || Bs(t) || this.chart._animationsDisabled }
        _getSharedOptions(t, e) { const i = this.resolveDataElementOptions(t, e),
                s = this._sharedOptions,
                n = this.getSharedOptions(i),
                o = this.includeOptions(e, n) || n !== s; return this.updateSharedOptions(n, e, i), { sharedOptions: n, includeOptions: o } }
        updateElement(t, e, i, s) { Bs(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i) }
        updateSharedOptions(t, e, i) { t && !Bs(e) && this._resolveAnimations(void 0, e).update(t, i) }
        _setStyle(t, e, i, s) { t.active = s; const n = this.getStyle(e, s);
            this._resolveAnimations(e, i, s).update(t, { options: !s && this.getSharedOptions(n) || n }) }
        removeHoverStyle(t, e, i) { this._setStyle(t, i, "active", !1) }
        setHoverStyle(t, e, i) { this._setStyle(t, i, "active", !0) }
        _removeDatasetHoverStyle() { const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1) }
        _setDatasetHoverStyle() { const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0) }
        _resyncElements(t) { const e = this._data,
                i = this._cachedMeta.data; for (const [t, e, i] of this._syncList) this[t](e, i);
            this._syncList = []; const s = i.length,
                n = e.length,
                o = Math.min(n, s);
            o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n) }
        _insertElements(t, e, i = !0) { const s = this._cachedMeta,
                n = s.data,
                o = t + e; let a; const r = t => { for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e] }; for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType;
            this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset") }
        updateElements(t, e, i, s) {}
        _removeElements(t, e) { const i = this._cachedMeta; if (this._parsing) { const s = i._parsed.splice(t, e);
                i._stacked && Vs(i, s) }
            i.data.splice(t, e) }
        _sync(t) { if (this._parsing) this._syncList.push(t);
            else { const [e, i, s] = t;
                this[e](i, s) }
            this.chart._dataChanges.push([this.index, ...t]) }
        _onDataPush() { const t = arguments.length;
            this._sync(["_insertElements", this.getDataset().data.length - t, t]) }
        _onDataPop() { this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]) }
        _onDataShift() { this._sync(["_removeElements", 0, 1]) }
        _onDataSplice(t, e) { e && this._sync(["_removeElements", t, e]); const i = arguments.length - 2;
            i && this._sync(["_insertElements", t, i]) }
        _onDataUnshift() { this._sync(["_insertElements", 0, arguments.length]) } }
    class Hs { static defaults = {};
        static defaultRoutes = void 0;
        x;
        y;
        active = !1;
        options;
        $animations;
        tooltipPosition(t) { const { x: e, y: i } = this.getProps(["x", "y"], t); return { x: e, y: i } }
        hasValue() { return N(this.x) && N(this.y) }
        getProps(t, e) { const i = this.$animations; if (!e || !i) return this; const s = {}; return t.forEach((t => { s[t] = i[t] && i[t].active() ? i[t]._to : this[t] })), s } }

    function js(t, e) { const i = t.options.ticks,
            n = function(t) { const e = t.options.offset,
                    i = t._tickSize(),
                    s = t._length / i + (e ? 0 : 1),
                    n = t._maxLength / i; return Math.floor(Math.min(s, n)) }(t),
            o = Math.min(i.maxTicksLimit || n, n),
            a = i.major.enabled ? function(t) { const e = []; let i, s; for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i); return e }(e) : [],
            r = a.length,
            l = a[0],
            h = a[r - 1],
            c = []; if (r > o) return function(t, e, i, s) { let n, o = 0,
                a = i[0]; for (s = Math.ceil(s), n = 0; n < t.length; n++) n === a && (e.push(t[n]), o++, a = i[o * s]) }(e, c, a, r / o), c; const d = function(t, e, i) { const s = function(t) { const e = t.length; let i, s; if (e < 2) return !1; for (s = t[0], i = 1; i < e; ++i)
                        if (t[i] - t[i - 1] !== s) return !1;
                    return s }(t),
                n = e.length / i; if (!s) return Math.max(n, 1); const o = W(s); for (let t = 0, e = o.length - 1; t < e; t++) { const e = o[t]; if (e > n) return e } return Math.max(n, 1) }(a, e, o); if (r > 0) { let t, i; const n = r > 1 ? Math.round((h - l) / (r - 1)) : null; for ($s(e, c, d, s(n) ? 0 : l - n, l), t = 0, i = r - 1; t < i; t++) $s(e, c, d, a[t], a[t + 1]); return $s(e, c, d, h, s(n) ? e.length : h + n), c } return $s(e, c, d), c }

    function $s(t, e, i, s, n) { const o = l(s, 0),
            a = Math.min(l(n, t.length), t.length); let r, h, c, d = 0; for (i = Math.ceil(i), n && (r = n - s, i = r / Math.floor(r / i)), c = o; c < 0;) d++, c = Math.round(o + d * i); for (h = Math.max(o, 0); h < a; h++) h === c && (e.push(t[h]), d++, c = Math.round(o + d * i)) } const Ys = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i,
        Us = (t, e) => Math.min(e || t, t);

    function Xs(t, e) { const i = [],
            s = t.length / e,
            n = t.length; let o = 0; for (; o < n; o += s) i.push(t[Math.floor(o)]); return i }

    function qs(t, e, i) { const s = t.ticks.length,
            n = Math.min(e, s - 1),
            o = t._startPixel,
            a = t._endPixel,
            r = 1e-6; let l, h = t.getPixelForTick(n); if (!(i && (l = 1 === s ? Math.max(h - o, a - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(n - 1)) / 2, h += n < e ? l : -l, h < o - r || h > a + r))) return h }

    function Ks(t) { return t.drawTicks ? t.tickLength : 0 }

    function Gs(t, e) { if (!t.display) return 0; const i = Si(t.font, e),
            s = ki(t.padding); return (n(t.text) ? t.text.length : 1) * i.lineHeight + s.height }

    function Zs(t, e, i) { let s = ut(t); return (i && "right" !== e || !i && "right" === e) && (s = (t => "left" === t ? "right" : "right" === t ? "left" : t)(s)), s }
    class Js extends Hs { constructor(t) { super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = { left: 0, right: 0, top: 0, bottom: 0 }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0 }
        init(t) { this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax) }
        parse(t, e) { return t }
        getUserBounds() { let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this; return t = r(t, Number.POSITIVE_INFINITY), e = r(e, Number.NEGATIVE_INFINITY), i = r(i, Number.POSITIVE_INFINITY), s = r(s, Number.NEGATIVE_INFINITY), { min: r(t, i), max: r(e, s), minDefined: a(t), maxDefined: a(e) } }
        getMinMax(t) { let e, { min: i, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(); if (n && o) return { min: i, max: s }; const a = this.getMatchingVisibleMetas(); for (let r = 0, l = a.length; r < l; ++r) e = a[r].controller.getMinMax(this, t), n || (i = Math.min(i, e.min)), o || (s = Math.max(s, e.max)); return i = o && i > s ? s : i, s = n && i > s ? i : s, { min: r(i, r(s, i)), max: r(s, r(i, s)) } }
        getPadding() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } }
        getTicks() { return this.ticks }
        getLabels() { const t = this.chart.data; return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [] }
        getLabelItems(t = this.chart.chartArea) { return this._labelItems || (this._labelItems = this._computeLabelItems(t)) }
        beforeLayout() { this._cache = {}, this._dataLimitsCached = !1 }
        beforeUpdate() { d(this.options.beforeUpdate, [this]) }
        update(t, e, i) { const { beginAtZero: s, grace: n, ticks: o } = this.options, a = o.sampleSize;
            this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Di(this, n, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks(); const r = a < this.ticks.length;
            this._convertTicksToLabels(r ? Xs(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (this.ticks = js(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), r && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate() }
        configure() { let t, e, i = this.options.reverse;
            this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels }
        afterUpdate() { d(this.options.afterUpdate, [this]) }
        beforeSetDimensions() { d(this.options.beforeSetDimensions, [this]) }
        setDimensions() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0 }
        afterSetDimensions() { d(this.options.afterSetDimensions, [this]) }
        _callHooks(t) { this.chart.notifyPlugins(t, this.getContext()), d(this.options[t], [this]) }
        beforeDataLimits() { this._callHooks("beforeDataLimits") }
        determineDataLimits() {}
        afterDataLimits() { this._callHooks("afterDataLimits") }
        beforeBuildTicks() { this._callHooks("beforeBuildTicks") }
        buildTicks() { return [] }
        afterBuildTicks() { this._callHooks("afterBuildTicks") }
        beforeTickToLabelConversion() { d(this.options.beforeTickToLabelConversion, [this]) }
        generateTickLabels(t) { const e = this.options.ticks; let i, s, n; for (i = 0, s = t.length; i < s; i++) n = t[i], n.label = d(e.callback, [n.value, i, t], this) }
        afterTickToLabelConversion() { d(this.options.afterTickToLabelConversion, [this]) }
        beforeCalculateLabelRotation() { d(this.options.beforeCalculateLabelRotation, [this]) }
        calculateLabelRotation() { const t = this.options,
                e = t.ticks,
                i = Us(this.ticks.length, t.ticks.maxTicksLimit),
                s = e.minRotation || 0,
                n = e.maxRotation; let o, a, r, l = s; if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void(this.labelRotation = s); const h = this._getLabelSizes(),
                c = h.widest.width,
                d = h.highest.height,
                u = J(this.chart.width - c, 0, this.maxWidth);
            o = t.offset ? this.maxWidth / i : u / (i - 1), c + 6 > o && (o = u / (i - (t.offset ? .5 : 1)), a = this.maxHeight - Ks(t.grid) - e.padding - Gs(t.title, this.chart.options.font), r = Math.sqrt(c * c + d * d), l = Y(Math.min(Math.asin(J((h.highest.height + 6) / o, -1, 1)), Math.asin(J(a / r, -1, 1)) - Math.asin(J(d / r, -1, 1)))), l = Math.max(s, Math.min(n, l))), this.labelRotation = l }
        afterCalculateLabelRotation() { d(this.options.afterCalculateLabelRotation, [this]) }
        afterAutoSkip() {}
        beforeFit() { d(this.options.beforeFit, [this]) }
        fit() { const t = { width: 0, height: 0 },
                { chart: e, options: { ticks: i, title: s, grid: n } } = this,
                o = this._isVisible(),
                a = this.isHorizontal(); if (o) { const o = Gs(s, e.options.font); if (a ? (t.width = this.maxWidth, t.height = Ks(n) + o) : (t.height = this.maxHeight, t.width = Ks(n) + o), i.display && this.ticks.length) { const { first: e, last: s, widest: n, highest: o } = this._getLabelSizes(), r = 2 * i.padding, l = $(this.labelRotation), h = Math.cos(l), c = Math.sin(l); if (a) { const e = i.mirror ? 0 : c * n.width + h * o.height;
                        t.height = Math.min(this.maxHeight, t.height + e + r) } else { const e = i.mirror ? 0 : h * n.width + c * o.height;
                        t.width = Math.min(this.maxWidth, t.width + e + r) }
                    this._calculatePadding(e, s, c, h) } }
            this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom) }
        _calculatePadding(t, e, i, s) { const { ticks: { align: n, padding: o }, position: a } = this.options, r = 0 !== this.labelRotation, l = "top" !== a && "x" === this.axis; if (this.isHorizontal()) { const a = this.getPixelForTick(0) - this.left,
                    h = this.right - this.getPixelForTick(this.ticks.length - 1); let c = 0,
                    d = 0;
                r ? l ? (c = s * t.width, d = i * e.height) : (c = i * t.height, d = s * e.width) : "start" === n ? d = e.width : "end" === n ? c = t.width : "inner" !== n && (c = t.width / 2, d = e.width / 2), this.paddingLeft = Math.max((c - a + o) * this.width / (this.width - a), 0), this.paddingRight = Math.max((d - h + o) * this.width / (this.width - h), 0) } else { let i = e.height / 2,
                    s = t.height / 2; "start" === n ? (i = 0, s = t.height) : "end" === n && (i = e.height, s = 0), this.paddingTop = i + o, this.paddingBottom = s + o } }
        _handleMargins() { this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)) }
        afterFit() { d(this.options.afterFit, [this]) }
        isHorizontal() { const { axis: t, position: e } = this.options; return "top" === e || "bottom" === e || "x" === t }
        isFullSize() { return this.options.fullSize }
        _convertTicksToLabels(t) { let e, i; for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) s(t[e].label) && (t.splice(e, 1), i--, e--);
            this.afterTickToLabelConversion() }
        _getLabelSizes() { let t = this._labelSizes; if (!t) { const e = this.options.ticks.sampleSize; let i = this.ticks;
                e < i.length && (i = Xs(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit) } return t }
        _computeLabelSizes(t, e, i) { const { ctx: o, _longestTextCache: a } = this, r = [], l = [], h = Math.floor(e / Us(e, i)); let c, d, f, g, p, m, b, x, _, y, v, M = 0,
                w = 0; for (c = 0; c < e; c += h) { if (g = t[c].label, p = this._resolveTickFontOptions(c), o.font = m = p.string, b = a[m] = a[m] || { data: {}, gc: [] }, x = p.lineHeight, _ = y = 0, s(g) || n(g)) { if (n(g))
                        for (d = 0, f = g.length; d < f; ++d) v = g[d], s(v) || n(v) || (_ = Ce(o, b.data, b.gc, _, v), y += x) } else _ = Ce(o, b.data, b.gc, _, g), y = x;
                r.push(_), l.push(y), M = Math.max(_, M), w = Math.max(y, w) }! function(t, e) { u(t, (t => { const i = t.gc,
                        s = i.length / 2; let n; if (s > e) { for (n = 0; n < s; ++n) delete t.data[i[n]];
                        i.splice(0, s) } })) }(a, e); const k = r.indexOf(M),
                S = l.indexOf(w),
                P = t => ({ width: r[t] || 0, height: l[t] || 0 }); return { first: P(0), last: P(e - 1), widest: P(k), highest: P(S), widths: r, heights: l } }
        getLabelForValue(t) { return t }
        getPixelForValue(t, e) { return NaN }
        getValueForPixel(t) {}
        getPixelForTick(t) { const e = this.ticks; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value) }
        getPixelForDecimal(t) { this._reversePixels && (t = 1 - t); const e = this._startPixel + t * this._length; return Q(this._alignToPixels ? Ae(this.chart, e, 0) : e) }
        getDecimalForPixel(t) { const e = (t - this._startPixel) / this._length; return this._reversePixels ? 1 - e : e }
        getBasePixel() { return this.getPixelForValue(this.getBaseValue()) }
        getBaseValue() { const { min: t, max: e } = this; return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0 }
        getContext(t) { const e = this.ticks || []; if (t >= 0 && t < e.length) { const i = e[t]; return i.$context || (i.$context = function(t, e, i) { return Ci(t, { tick: i, index: e, type: "tick" }) }(this.getContext(), t, i)) } return this.$context || (this.$context = Ci(this.chart.getContext(), { scale: this, type: "scale" })) }
        _tickSize() { const t = this.options.ticks,
                e = $(this.labelRotation),
                i = Math.abs(Math.cos(e)),
                s = Math.abs(Math.sin(e)),
                n = this._getLabelSizes(),
                o = t.autoSkipPadding || 0,
                a = n ? n.widest.width + o : 0,
                r = n ? n.highest.height + o : 0; return this.isHorizontal() ? r * i > a * s ? a / i : r / s : r * s < a * i ? r / i : a / s }
        _isVisible() { const t = this.options.display; return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0 }
        _computeGridLineItems(t) { const e = this.axis,
                i = this.chart,
                s = this.options,
                { grid: n, position: a, border: r } = s,
                h = n.offset,
                c = this.isHorizontal(),
                d = this.ticks.length + (h ? 1 : 0),
                u = Ks(n),
                f = [],
                g = r.setContext(this.getContext()),
                p = g.display ? g.width : 0,
                m = p / 2,
                b = function(t) { return Ae(i, t, p) }; let x, _, y, v, M, w, k, S, P, D, C, O; if ("top" === a) x = b(this.bottom), w = this.bottom - u, S = x - m, D = b(t.top) + m, O = t.bottom;
            else if ("bottom" === a) x = b(this.top), D = t.top, O = b(t.bottom) - m, w = x + m, S = this.top + u;
            else if ("left" === a) x = b(this.right), M = this.right - u, k = x - m, P = b(t.left) + m, C = t.right;
            else if ("right" === a) x = b(this.left), P = t.left, C = b(t.right) - m, M = x + m, k = this.left + u;
            else if ("x" === e) { if ("center" === a) x = b((t.top + t.bottom) / 2 + .5);
                else if (o(a)) { const t = Object.keys(a)[0],
                        e = a[t];
                    x = b(this.chart.scales[t].getPixelForValue(e)) }
                D = t.top, O = t.bottom, w = x + m, S = w + u } else if ("y" === e) { if ("center" === a) x = b((t.left + t.right) / 2);
                else if (o(a)) { const t = Object.keys(a)[0],
                        e = a[t];
                    x = b(this.chart.scales[t].getPixelForValue(e)) }
                M = x - m, k = M - u, P = t.left, C = t.right } const A = l(s.ticks.maxTicksLimit, d),
                T = Math.max(1, Math.ceil(d / A)); for (_ = 0; _ < d; _ += T) { const t = this.getContext(_),
                    e = n.setContext(t),
                    s = r.setContext(t),
                    o = e.lineWidth,
                    a = e.color,
                    l = s.dash || [],
                    d = s.dashOffset,
                    u = e.tickWidth,
                    g = e.tickColor,
                    p = e.tickBorderDash || [],
                    m = e.tickBorderDashOffset;
                y = qs(this, _, h), void 0 !== y && (v = Ae(i, y, o), c ? M = k = P = C = v : w = S = D = O = v, f.push({ tx1: M, ty1: w, tx2: k, ty2: S, x1: P, y1: D, x2: C, y2: O, width: o, color: a, borderDash: l, borderDashOffset: d, tickWidth: u, tickColor: g, tickBorderDash: p, tickBorderDashOffset: m })) } return this._ticksLength = d, this._borderValue = x, f }
        _computeLabelItems(t) { const e = this.axis,
                i = this.options,
                { position: s, ticks: a } = i,
                r = this.isHorizontal(),
                l = this.ticks,
                { align: h, crossAlign: c, padding: d, mirror: u } = a,
                f = Ks(i.grid),
                g = f + d,
                p = u ? -d : g,
                m = -$(this.labelRotation),
                b = []; let x, _, y, v, M, w, k, S, P, D, C, O, A = "middle"; if ("top" === s) w = this.bottom - p, k = this._getXAxisLabelAlignment();
            else if ("bottom" === s) w = this.top + p, k = this._getXAxisLabelAlignment();
            else if ("left" === s) { const t = this._getYAxisLabelAlignment(f);
                k = t.textAlign, M = t.x } else if ("right" === s) { const t = this._getYAxisLabelAlignment(f);
                k = t.textAlign, M = t.x } else if ("x" === e) { if ("center" === s) w = (t.top + t.bottom) / 2 + g;
                else if (o(s)) { const t = Object.keys(s)[0],
                        e = s[t];
                    w = this.chart.scales[t].getPixelForValue(e) + g }
                k = this._getXAxisLabelAlignment() } else if ("y" === e) { if ("center" === s) M = (t.left + t.right) / 2 - g;
                else if (o(s)) { const t = Object.keys(s)[0],
                        e = s[t];
                    M = this.chart.scales[t].getPixelForValue(e) }
                k = this._getYAxisLabelAlignment(f).textAlign } "y" === e && ("start" === h ? A = "top" : "end" === h && (A = "bottom")); const T = this._getLabelSizes(); for (x = 0, _ = l.length; x < _; ++x) { y = l[x], v = y.label; const t = a.setContext(this.getContext(x));
                S = this.getPixelForTick(x) + a.labelOffset, P = this._resolveTickFontOptions(x), D = P.lineHeight, C = n(v) ? v.length : 1; const e = C / 2,
                    i = t.color,
                    o = t.textStrokeColor,
                    h = t.textStrokeWidth; let d, f = k; if (r ? (M = S, "inner" === k && (f = x === _ - 1 ? this.options.reverse ? "left" : "right" : 0 === x ? this.options.reverse ? "right" : "left" : "center"), O = "top" === s ? "near" === c || 0 !== m ? -C * D + D / 2 : "center" === c ? -T.highest.height / 2 - e * D + D : -T.highest.height + D / 2 : "near" === c || 0 !== m ? D / 2 : "center" === c ? T.highest.height / 2 - e * D : T.highest.height - C * D, u && (O *= -1), 0 === m || t.showLabelBackdrop || (M += D / 2 * Math.sin(m))) : (w = S, O = (1 - C) * D / 2), t.showLabelBackdrop) { const e = ki(t.backdropPadding),
                        i = T.heights[x],
                        s = T.widths[x]; let n = O - e.top,
                        o = 0 - e.left; switch (A) {
                        case "middle":
                            n -= i / 2; break;
                        case "bottom":
                            n -= i } switch (k) {
                        case "center":
                            o -= s / 2; break;
                        case "right":
                            o -= s; break;
                        case "inner":
                            x === _ - 1 ? o -= s : x > 0 && (o -= s / 2) }
                    d = { left: o, top: n, width: s + e.width, height: i + e.height, color: t.backdropColor } }
                b.push({ label: v, font: P, textOffset: O, options: { rotation: m, color: i, strokeColor: o, strokeWidth: h, textAlign: f, textBaseline: A, translation: [M, w], backdrop: d } }) } return b }
        _getXAxisLabelAlignment() { const { position: t, ticks: e } = this.options; if (-$(this.labelRotation)) return "top" === t ? "left" : "right"; let i = "center"; return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i }
        _getYAxisLabelAlignment(t) { const { position: e, ticks: { crossAlign: i, mirror: s, padding: n } } = this.options, o = t + n, a = this._getLabelSizes().widest.width; let r, l; return "left" === e ? s ? (l = this.right + n, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l += a)) : (l = this.right - o, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l = this.left)) : "right" === e ? s ? (l = this.left + n, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l -= a)) : (l = this.left + o, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l = this.right)) : r = "right", { textAlign: r, x: l } }
        _computeLabelArea() { if (this.options.ticks.mirror) return; const t = this.chart,
                e = this.options.position; return "left" === e || "right" === e ? { top: 0, left: this.left, bottom: t.height, right: this.right } : "top" === e || "bottom" === e ? { top: this.top, left: 0, bottom: this.bottom, right: t.width } : void 0 }
        drawBackground() { const { ctx: t, options: { backgroundColor: e }, left: i, top: s, width: n, height: o } = this;
            e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore()) }
        getLineWidthForValue(t) { const e = this.options.grid; if (!this._isVisible() || !e.display) return 0; const i = this.ticks.findIndex((e => e.value === t)); return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0 }
        drawGrid(t) { const e = this.options.grid,
                i = this.ctx,
                s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)); let n, o; const a = (t, e, s) => { s.width && s.color && (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore()) }; if (e.display)
                for (n = 0, o = s.length; n < o; ++n) { const t = s[n];
                    e.drawOnChartArea && a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t), e.drawTicks && a({ x: t.tx1, y: t.ty1 }, { x: t.tx2, y: t.ty2 }, { color: t.tickColor, width: t.tickWidth, borderDash: t.tickBorderDash, borderDashOffset: t.tickBorderDashOffset }) } }
        drawBorder() { const { chart: t, ctx: e, options: { border: i, grid: s } } = this, n = i.setContext(this.getContext()), o = i.display ? n.width : 0; if (!o) return; const a = s.setContext(this.getContext(0)).lineWidth,
                r = this._borderValue; let l, h, c, d;
            this.isHorizontal() ? (l = Ae(t, this.left, o) - o / 2, h = Ae(t, this.right, a) + a / 2, c = d = r) : (c = Ae(t, this.top, o) - o / 2, d = Ae(t, this.bottom, a) + a / 2, l = h = r), e.save(), e.lineWidth = n.width, e.strokeStyle = n.color, e.beginPath(), e.moveTo(l, c), e.lineTo(h, d), e.stroke(), e.restore() }
        drawLabels(t) { if (!this.options.ticks.display) return; const e = this.ctx,
                i = this._computeLabelArea();
            i && Ie(e, i); const s = this.getLabelItems(t); for (const t of s) { const i = t.options,
                    s = t.font;
                Ne(e, t.label, 0, t.textOffset, s, i) }
            i && ze(e) }
        drawTitle() { const { ctx: t, options: { position: e, title: i, reverse: s } } = this; if (!i.display) return; const a = Si(i.font),
                r = ki(i.padding),
                l = i.align; let h = a.lineHeight / 2; "bottom" === e || "center" === e || o(e) ? (h += r.bottom, n(i.text) && (h += a.lineHeight * (i.text.length - 1))) : h += r.top; const { titleX: c, titleY: d, maxWidth: u, rotation: f } = function(t, e, i, s) { const { top: n, left: a, bottom: r, right: l, chart: h } = t, { chartArea: c, scales: d } = h; let u, f, g, p = 0; const m = r - n,
                    b = l - a; if (t.isHorizontal()) { if (f = ft(s, a, l), o(i)) { const t = Object.keys(i)[0],
                            s = i[t];
                        g = d[t].getPixelForValue(s) + m - e } else g = "center" === i ? (c.bottom + c.top) / 2 + m - e : Ys(t, i, e);
                    u = l - a } else { if (o(i)) { const t = Object.keys(i)[0],
                            s = i[t];
                        f = d[t].getPixelForValue(s) - b + e } else f = "center" === i ? (c.left + c.right) / 2 - b + e : Ys(t, i, e);
                    g = ft(s, r, n), p = "left" === i ? -E : E } return { titleX: f, titleY: g, maxWidth: u, rotation: p } }(this, h, e, l);
            Ne(t, i.text, 0, 0, a, { color: i.color, maxWidth: u, rotation: f, textAlign: Zs(l, e, s), textBaseline: "middle", translation: [c, d] }) }
        draw(t) { this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t)) }
        _layers() { const t = this.options,
                e = t.ticks && t.ticks.z || 0,
                i = l(t.grid && t.grid.z, -1),
                s = l(t.border && t.border.z, 0); return this._isVisible() && this.draw === Js.prototype.draw ? [{ z: i, draw: t => { this.drawBackground(), this.drawGrid(t), this.drawTitle() } }, { z: s, draw: () => { this.drawBorder() } }, { z: e, draw: t => { this.drawLabels(t) } }] : [{ z: e, draw: t => { this.draw(t) } }] }
        getMatchingVisibleMetas(t) { const e = this.chart.getSortedVisibleDatasetMetas(),
                i = this.axis + "AxisID",
                s = []; let n, o; for (n = 0, o = e.length; n < o; ++n) { const o = e[n];
                o[i] !== this.id || t && o.type !== t || s.push(o) } return s }
        _resolveTickFontOptions(t) { return Si(this.options.ticks.setContext(this.getContext(t)).font) }
        _maxDigits() { const t = this._resolveTickFontOptions(0).lineHeight; return (this.isHorizontal() ? this.width : this.height) / t } }
    class Qs { constructor(t, e, i) { this.type = t, this.scope = e, this.override = i, this.items = Object.create(null) }
        isForType(t) { return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype) }
        register(t) { const e = Object.getPrototypeOf(t); let i;
            (function(t) { return "id" in t && "defaults" in t })(e) && (i = this.register(e)); const s = this.items,
                n = t.id,
                o = this.scope + "." + n; if (!n) throw new Error("class does not have id: " + t); return n in s || (s[n] = t, function(t, e, i) { const s = b(Object.create(null), [i ? ue.get(i) : {}, ue.get(e), t.defaults]);
                ue.set(e, s), t.defaultRoutes && function(t, e) { Object.keys(e).forEach((i => { const s = i.split("."),
                            n = s.pop(),
                            o = [t].concat(s).join("."),
                            a = e[i].split("."),
                            r = a.pop(),
                            l = a.join(".");
                        ue.route(o, n, l, r) })) }(e, t.defaultRoutes), t.descriptors && ue.describe(e, t.descriptors) }(t, o, i), this.override && ue.override(t.id, t.overrides)), o }
        get(t) { return this.items[t] }
        unregister(t) { const e = this.items,
                i = t.id,
                s = this.scope;
            i in e && delete e[i], s && i in ue[s] && (delete ue[s][i], this.override && delete re[i]) } } var en = new class tn { constructor() { this.controllers = new Qs(Ns, "datasets", !0), this.elements = new Qs(Hs, "elements"), this.plugins = new Qs(Object, "plugins"), this.scales = new Qs(Js, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements] }
        add(...t) { this._each("register", t) }
        remove(...t) { this._each("unregister", t) }
        addControllers(...t) { this._each("register", t, this.controllers) }
        addElements(...t) { this._each("register", t, this.elements) }
        addPlugins(...t) { this._each("register", t, this.plugins) }
        addScales(...t) { this._each("register", t, this.scales) }
        getController(t) { return this._get(t, this.controllers, "controller") }
        getElement(t) { return this._get(t, this.elements, "element") }
        getPlugin(t) { return this._get(t, this.plugins, "plugin") }
        getScale(t) { return this._get(t, this.scales, "scale") }
        removeControllers(...t) { this._each("unregister", t, this.controllers) }
        removeElements(...t) { this._each("unregister", t, this.elements) }
        removePlugins(...t) { this._each("unregister", t, this.plugins) }
        removeScales(...t) { this._each("unregister", t, this.scales) }
        _each(t, e, i) {
            [...e].forEach((e => { const s = i || this._getRegistryForType(e);
                i || s.isForType(e) || s === this.plugins && e.id ? this._exec(t, s, e) : u(e, (e => { const s = i || this._getRegistryForType(e);
                    this._exec(t, s, e) })) })) }
        _exec(t, e, i) { const s = w(t);
            d(i["before" + s], [], i), e[t](i), d(i["after" + s], [], i) }
        _getRegistryForType(t) { for (let e = 0; e < this._typedRegistries.length; e++) { const i = this._typedRegistries[e]; if (i.isForType(t)) return i } return this.plugins }
        _get(t, e, i) { const s = e.get(t); if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + "."); return s } };
    class sn { constructor() { this._init = [] }
        notify(t, e, i, s) { "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")); const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
                o = this._notify(n, t, e, i); return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), o }
        _notify(t, e, i, s) { s = s || {}; for (const n of t) { const t = n.plugin; if (!1 === d(t[i], [e, s, n.options], t) && s.cancelable) return !1 } return !0 }
        invalidate() { s(this._cache) || (this._oldCache = this._cache, this._cache = void 0) }
        _descriptors(t) { if (this._cache) return this._cache; const e = this._cache = this._createDescriptors(t); return this._notifyStateChanges(t), e }
        _createDescriptors(t, e) { const i = t && t.config,
                s = l(i.options && i.options.plugins, {}),
                n = function(t) { const e = {},
                        i = [],
                        s = Object.keys(en.plugins.items); for (let t = 0; t < s.length; t++) i.push(en.getPlugin(s[t])); const n = t.plugins || []; for (let t = 0; t < n.length; t++) { const s = n[t]; - 1 === i.indexOf(s) && (i.push(s), e[s.id] = !0) } return { plugins: i, localIds: e } }(i); return !1 !== s || e ? function(t, { plugins: e, localIds: i }, s, n) { const o = [],
                    a = t.getContext(); for (const r of e) { const e = r.id,
                        l = nn(s[e], n);
                    null !== l && o.push({ plugin: r, options: on(t.config, { plugin: r, local: i[e] }, l, a) }) } return o }(t, n, s, e) : [] }
        _notifyStateChanges(t) { const e = this._oldCache || [],
                i = this._cache,
                s = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id))));
            this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start") } }

    function nn(t, e) { return e || !1 !== t ? !0 === t ? {} : t : null }

    function on(t, { plugin: e, local: i }, s, n) { const o = t.pluginScopeKeys(e),
            a = t.getOptionScopes(s, o); return i && e.defaults && a.push(e.defaults), t.createResolver(a, n, [""], { scriptable: !1, indexable: !1, allKeys: !0 }) }

    function an(t, e) { const i = ue.datasets[t] || {}; return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x" }

    function rn(t) { if ("x" === t || "y" === t || "r" === t) return t }

    function ln(t, ...e) { if (rn(t)) return t; for (const s of e) { const e = s.axis || ("top" === (i = s.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.length > 1 && rn(t[0].toLowerCase()); if (e) return e } var i; throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`) }

    function hn(t, e, i) { if (i[e + "AxisID"] === t) return { axis: e } }

    function dn(t) { const e = t.options || (t.options = {});
        e.plugins = l(e.plugins, {}), e.scales = function cn(t, e) { const i = re[t.type] || { scales: {} },
                s = e.scales || {},
                n = an(t.type, e),
                a = Object.create(null); return Object.keys(s).forEach((e => { const r = s[e]; if (!o(r)) return console.error(`Invalid scale configuration for scale: ${e}`); if (r._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${e}`); const l = ln(e, r, function(t, e) { if (e.data && e.data.datasets) { const i = e.data.datasets.filter((e => e.xAxisID === t || e.yAxisID === t)); if (i.length) return hn(t, "x", i[0]) || hn(t, "y", i[0]) } return {} }(e, t), ue.scales[r.type]),
                    h = function(t, e) { return t === e ? "_index_" : "_value_" }(l, n),
                    c = i.scales || {};
                a[e] = x(Object.create(null), [{ axis: l }, r, c[l], c[h]]) })), t.data.datasets.forEach((i => { const n = i.type || t.type,
                    o = i.indexAxis || an(n, e),
                    r = (re[n] || {}).scales || {};
                Object.keys(r).forEach((t => { const e = function(t, e) { let i = t; return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i }(t, o),
                        n = i[e + "AxisID"] || e;
                    a[n] = a[n] || Object.create(null), x(a[n], [{ axis: e }, s[n], r[t]]) })) })), Object.keys(a).forEach((t => { const e = a[t];
                x(e, [ue.scales[e.type], ue.scale]) })), a }(t, e) }

    function un(t) { return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t } const fn = new Map,
        gn = new Set;

    function pn(t, e) { let i = fn.get(t); return i || (i = e(), fn.set(t, i), gn.add(i)), i } const mn = (t, e, i) => { const s = M(e, i);
        void 0 !== s && t.add(s) };
    class bn { constructor(t) { this._config = function(t) { return (t = t || {}).data = un(t.data), dn(t), t }(t), this._scopeCache = new Map, this._resolverCache = new Map }
        get platform() { return this._config.platform }
        get type() { return this._config.type }
        set type(t) { this._config.type = t }
        get data() { return this._config.data }
        set data(t) { this._config.data = un(t) }
        get options() { return this._config.options }
        set options(t) { this._config.options = t }
        get plugins() { return this._config.plugins }
        update() { const t = this._config;
            this.clearCache(), dn(t) }
        clearCache() { this._scopeCache.clear(), this._resolverCache.clear() }
        datasetScopeKeys(t) { return pn(t, (() => [
                [`datasets.${t}`, ""]
            ])) }
        datasetAnimationScopeKeys(t, e) { return pn(`${t}.transition.${e}`, (() => [
                [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                [`datasets.${t}`, ""]
            ])) }
        datasetElementScopeKeys(t, e) { return pn(`${t}-${e}`, (() => [
                [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
            ])) }
        pluginScopeKeys(t) { const e = t.id; return pn(`${this.type}-plugin-${e}`, (() => [
                [`plugins.${e}`, ...t.additionalOptionScopes || []]
            ])) }
        _cachedScopes(t, e) { const i = this._scopeCache; let s = i.get(t); return s && !e || (s = new Map, i.set(t, s)), s }
        getOptionScopes(t, e, i) { const { options: s, type: n } = this, o = this._cachedScopes(t, i), a = o.get(e); if (a) return a; const r = new Set;
            e.forEach((e => { t && (r.add(t), e.forEach((e => mn(r, t, e)))), e.forEach((t => mn(r, s, t))), e.forEach((t => mn(r, re[n] || {}, t))), e.forEach((t => mn(r, ue, t))), e.forEach((t => mn(r, le, t))) })); const l = Array.from(r); return 0 === l.length && l.push(Object.create(null)), gn.has(e) && o.set(e, l), l }
        chartOptionScopes() { const { options: t, type: e } = this; return [t, re[e] || {}, ue.datasets[e] || {}, { type: e }, ue, le] }
        resolveNamedOptions(t, e, i, s = [""]) { const o = { $shared: !0 },
                { resolver: a, subPrefixes: r } = xn(this._resolverCache, t, s); let l = a;
            (function(t, e) { const { isScriptable: i, isIndexable: s } = Ye(t); for (const o of e) { const e = i(o),
                        a = s(o),
                        r = (a || e) && t[o]; if (e && (S(r) || _n(r)) || a && n(r)) return !0 } return !1 })(a, e) && (o.$shared = !1, l = $e(a, i = S(i) ? i() : i, this.createResolver(t, i, r))); for (const t of e) o[t] = l[t]; return o }
        createResolver(t, e, i = [""], s) { const { resolver: n } = xn(this._resolverCache, t, i); return o(e) ? $e(n, e, void 0, s) : n } }

    function xn(t, e, i) { let s = t.get(e);
        s || (s = new Map, t.set(e, s)); const n = i.join(); let o = s.get(n); return o || (o = { resolver: je(e, i), subPrefixes: i.filter((t => !t.toLowerCase().includes("hover"))) }, s.set(n, o)), o } const _n = t => o(t) && Object.getOwnPropertyNames(t).some((e => S(t[e]))),
        yn = ["top", "bottom", "left", "right", "chartArea"];

    function vn(t, e) { return "top" === t || "bottom" === t || -1 === yn.indexOf(t) && "x" === e }

    function Mn(t, e) { return function(i, s) { return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t] } }

    function wn(t) { const e = t.chart,
            i = e.options.animation;
        e.notifyPlugins("afterRender"), d(i && i.onComplete, [t], e) }

    function kn(t) { const e = t.chart,
            i = e.options.animation;
        d(i && i.onProgress, [t], e) }

    function Sn(t) { return fe() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t } const Pn = {},
        Dn = t => { const e = Sn(t); return Object.values(Pn).filter((t => t.canvas === e)).pop() };

    function Cn(t, e, i) { const s = Object.keys(t); for (const n of s) { const s = +n; if (s >= e) { const o = t[n];
                delete t[n], (i > 0 || s > e) && (t[s + i] = o) } } }

    function On(t, e, i) { return t.options.clip ? t[i] : e[i] }
    class An { static defaults = ue;
        static instances = Pn;
        static overrides = re;
        static registry = en;
        static version = "4.4.1";
        static getChart = Dn;
        static register(...t) { en.add(...t), Tn() }
        static unregister(...t) { en.remove(...t), Tn() }
        constructor(t, e) { const s = this.config = new bn(e),
                n = Sn(t),
                o = Dn(n); if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused."); const a = s.createResolver(s.chartOptionScopes(), this.getContext());
            this.platform = new(s.platform || ks(n)), this.platform.updateConfig(s); const r = this.platform.acquireContext(n, a.aspectRatio),
                l = r && r.canvas,
                h = l && l.height,
                c = l && l.width;
            this.id = i(), this.ctx = r, this.canvas = l, this.width = c, this.height = h, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new sn, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = dt((t => this.update(t)), a.resizeDelay || 0), this._dataChanges = [], Pn[this.id] = this, r && l ? (xt.listen(this, "complete", wn), xt.listen(this, "progress", kn), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item") }
        get aspectRatio() { const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: n, _aspectRatio: o } = this; return s(t) ? e && o ? o : n ? i / n : null : t }
        get data() { return this.config.data }
        set data(t) { this.config.data = t }
        get options() { return this._options }
        set options(t) { this.config.options = t }
        get registry() { return en }
        _initialize() { return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ke(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this }
        clear() { return Te(this.canvas, this.ctx), this }
        stop() { return xt.stop(this), this }
        resize(t, e) { xt.running(this) ? this._resizeBeforeDraw = { width: t, height: e } : this._resize(t, e) }
        _resize(t, e) { const i = this.options,
                s = this.canvas,
                n = i.maintainAspectRatio && this.aspectRatio,
                o = this.platform.getMaximumSize(s, t, e, n),
                a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                r = this.width ? "resize" : "attach";
            this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, ke(this, a, !0) && (this.notifyPlugins("resize", { size: o }), d(i.onResize, [this, o], this), this.attached && this._doResize(r) && this.render()) }
        ensureScalesHaveIDs() { u(this.options.scales || {}, ((t, e) => { t.id = e })) }
        buildOrUpdateScales() { const t = this.options,
                e = t.scales,
                i = this.scales,
                s = Object.keys(i).reduce(((t, e) => (t[e] = !1, t)), {}); let n = [];
            e && (n = n.concat(Object.keys(e).map((t => { const i = e[t],
                    s = ln(t, i),
                    n = "r" === s,
                    o = "x" === s; return { options: i, dposition: n ? "chartArea" : o ? "bottom" : "left", dtype: n ? "radialLinear" : o ? "category" : "linear" } })))), u(n, (e => { const n = e.options,
                    o = n.id,
                    a = ln(o, n),
                    r = l(n.type, e.dtype);
                void 0 !== n.position && vn(n.position, a) === vn(e.dposition) || (n.position = e.dposition), s[o] = !0; let h = null;
                o in i && i[o].type === r ? h = i[o] : (h = new(en.getScale(r))({ id: o, type: r, ctx: this.ctx, chart: this }), i[h.id] = h), h.init(n, t) })), u(s, ((t, e) => { t || delete i[e] })), u(i, (t => { as.configure(this, t, t.options), as.addBox(this, t) })) }
        _updateMetasets() { const t = this._metasets,
                e = this.data.datasets.length,
                i = t.length; if (t.sort(((t, e) => t.index - e.index)), i > e) { for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
                t.splice(e, i - e) }
            this._sortedMetasets = t.slice(0).sort(Mn("order", "index")) }
        _removeUnreferencedMetasets() { const { _metasets: t, data: { datasets: e } } = this;
            t.length > e.length && delete this._stacks, t.forEach(((t, i) => { 0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(i) })) }
        buildOrUpdateControllers() { const t = [],
                e = this.data.datasets; let i, s; for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) { const s = e[i]; let n = this.getDatasetMeta(i); const o = s.type || this.config.type; if (n.type && n.type !== o && (this._destroyDatasetMeta(i), n = this.getDatasetMeta(i)), n.type = o, n.indexAxis = s.indexAxis || an(o, this.options), n.order = s.order || 0, n.index = i, n.label = "" + s.label, n.visible = this.isDatasetVisible(i), n.controller) n.controller.updateIndex(i), n.controller.linkScales();
                else { const e = en.getController(o),
                        { datasetElementType: s, dataElementType: a } = ue.datasets[o];
                    Object.assign(e, { dataElementType: en.getElement(a), datasetElementType: s && en.getElement(s) }), n.controller = new e(this, i), t.push(n.controller) } } return this._updateMetasets(), t }
        _resetElements() { u(this.data.datasets, ((t, e) => { this.getDatasetMeta(e).controller.reset() }), this) }
        reset() { this._resetElements(), this.notifyPlugins("reset") }
        update(t) { const e = this.config;
            e.update(); const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
                s = this._animationsDisabled = !i.animation; if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 })) return; const n = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate"); let o = 0; for (let t = 0, e = this.data.datasets.length; t < e; t++) { const { controller: e } = this.getDatasetMeta(t), i = !s && -1 === n.indexOf(e);
                e.buildOrUpdateElements(i), o = Math.max(+e.getMaxOverflow(), o) }
            o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), s || u(n, (t => { t.reset() })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", { mode: t }), this._layers.sort(Mn("z", "_idx")); const { _active: a, _lastEvent: r } = this;
            r ? this._eventHandler(r, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render() }
        _updateScales() { u(this.scales, (t => { as.removeBox(this, t) })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales() }
        _checkEventBindings() { const t = this.options,
                e = new Set(Object.keys(this._listeners)),
                i = new Set(t.events);
            P(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents()) }
        _updateHiddenIndices() { const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || []; for (const { method: i, start: s, count: n }
                of e) Cn(t, s, "_removeElements" === i ? -n : n) }
        _getUniformDataChanges() { const t = this._dataChanges; if (!t || !t.length) return;
            this._dataChanges = []; const e = this.data.datasets.length,
                i = e => new Set(t.filter((t => t[0] === e)).map(((t, e) => e + "," + t.splice(1).join(",")))),
                s = i(0); for (let t = 1; t < e; t++)
                if (!P(s, i(t))) return;
            return Array.from(s).map((t => t.split(","))).map((t => ({ method: t[1], start: +t[2], count: +t[3] }))) }
        _updateLayout(t) { if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 })) return;
            as.update(this, this.width, this.height, t); const e = this.chartArea,
                i = e.width <= 0 || e.height <= 0;
            this._layers = [], u(this.boxes, (t => { i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers())) }), this), this._layers.forEach(((t, e) => { t._idx = e })), this.notifyPlugins("afterLayout") }
        _updateDatasets(t) { if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 })) { for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure(); for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, S(t) ? t({ datasetIndex: e }) : t);
                this.notifyPlugins("afterDatasetsUpdate", { mode: t }) } }
        _updateDataset(t, e) { const i = this.getDatasetMeta(t),
                s = { meta: i, index: t, mode: e, cancelable: !0 };!1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s)) }
        render() {!1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) && (xt.has(this) ? this.attached && !xt.running(this) && xt.start(this) : (this.draw(), wn({ chart: this }))) }
        draw() { let t; if (this._resizeBeforeDraw) { const { width: t, height: e } = this._resizeBeforeDraw;
                this._resize(t, e), this._resizeBeforeDraw = null } if (this.clear(), this.width <= 0 || this.height <= 0) return; if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 })) return; const e = this._layers; for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea); for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw") }
        _getSortedDatasetMetas(t) { const e = this._sortedMetasets,
                i = []; let s, n; for (s = 0, n = e.length; s < n; ++s) { const n = e[s];
                t && !n.visible || i.push(n) } return i }
        getSortedVisibleDatasetMetas() { return this._getSortedDatasetMetas(!0) }
        _drawDatasets() { if (!1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })) return; const t = this.getSortedVisibleDatasetMetas(); for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins("afterDatasetsDraw") }
        _drawDataset(t) { const e = this.ctx,
                i = t._clip,
                s = !i.disabled,
                n = function(t, e) { const { xScale: i, yScale: s } = t; return i && s ? { left: On(i, e, "left"), right: On(i, e, "right"), top: On(s, e, "top"), bottom: On(s, e, "bottom") } : e }(t, this.chartArea),
                o = { meta: t, index: t.index, cancelable: !0 };!1 !== this.notifyPlugins("beforeDatasetDraw", o) && (s && Ie(e, { left: !1 === i.left ? 0 : n.left - i.left, right: !1 === i.right ? this.width : n.right + i.right, top: !1 === i.top ? 0 : n.top - i.top, bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom }), t.controller.draw(), s && ze(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o)) }
        isPointInArea(t) { return Re(t, this.chartArea, this._minPadding) }
        getElementsAtEventForMode(t, e, i, s) { const n = Xi.modes[e]; return "function" == typeof n ? n(this, t, i, s) : [] }
        getDatasetMeta(t) { const e = this.data.datasets[t],
                i = this._metasets; let s = i.filter((t => t && t._dataset === e)).pop(); return s || (s = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: e && e.order || 0, index: t, _dataset: e, _parsed: [], _sorted: !1 }, i.push(s)), s }
        getContext() { return this.$context || (this.$context = Ci(null, { chart: this, type: "chart" })) }
        getVisibleDatasetCount() { return this.getSortedVisibleDatasetMetas().length }
        isDatasetVisible(t) { const e = this.data.datasets[t]; if (!e) return !1; const i = this.getDatasetMeta(t); return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden }
        setDatasetVisibility(t, e) { this.getDatasetMeta(t).hidden = !e }
        toggleDataVisibility(t) { this._hiddenIndices[t] = !this._hiddenIndices[t] }
        getDataVisibility(t) { return !this._hiddenIndices[t] }
        _updateVisibility(t, e, i) { const s = i ? "show" : "hide",
                n = this.getDatasetMeta(t),
                o = n.controller._resolveAnimations(void 0, s);
            k(e) ? (n.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), o.update(n, { visible: i }), this.update((e => e.datasetIndex === t ? s : void 0))) }
        hide(t, e) { this._updateVisibility(t, e, !1) }
        show(t, e) { this._updateVisibility(t, e, !0) }
        _destroyDatasetMeta(t) { const e = this._metasets[t];
            e && e.controller && e.controller._destroy(), delete this._metasets[t] }
        _stop() { let t, e; for (this.stop(), xt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t) }
        destroy() { this.notifyPlugins("beforeDestroy"); const { canvas: t, ctx: e } = this;
            this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Te(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Pn[this.id], this.notifyPlugins("afterDestroy") }
        toBase64Image(...t) { return this.canvas.toDataURL(...t) }
        bindEvents() { this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0 }
        bindUserEvents() { const t = this._listeners,
                e = this.platform,
                i = (i, s) => { e.addEventListener(this, i, s), t[i] = s },
                s = (t, e, i) => { t.offsetX = e, t.offsetY = i, this._eventHandler(t) };
            u(this.options.events, (t => i(t, s))) }
        bindResponsiveEvents() { this._responsiveListeners || (this._responsiveListeners = {}); const t = this._responsiveListeners,
                e = this.platform,
                i = (i, s) => { e.addEventListener(this, i, s), t[i] = s },
                s = (i, s) => { t[i] && (e.removeEventListener(this, i, s), delete t[i]) },
                n = (t, e) => { this.canvas && this.resize(t, e) }; let o; const a = () => { s("attach", a), this.attached = !0, this.resize(), i("resize", n), i("detach", o) };
            o = () => { this.attached = !1, s("resize", n), this._stop(), this._resize(0, 0), i("attach", a) }, e.isAttached(this.canvas) ? a() : o() }
        unbindEvents() { u(this._listeners, ((t, e) => { this.platform.removeEventListener(this, e, t) })), this._listeners = {}, u(this._responsiveListeners, ((t, e) => { this.platform.removeEventListener(this, e, t) })), this._responsiveListeners = void 0 }
        updateHoverStyle(t, e, i) { const s = i ? "set" : "remove"; let n, o, a, r; for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), a = 0, r = t.length; a < r; ++a) { o = t[a]; const e = o && this.getDatasetMeta(o.datasetIndex).controller;
                e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index) } }
        getActiveElements() { return this._active || [] }
        setActiveElements(t) { const e = this._active || [],
                i = t.map((({ datasetIndex: t, index: e }) => { const i = this.getDatasetMeta(t); if (!i) throw new Error("No dataset found at index " + t); return { datasetIndex: t, element: i.data[e], index: e } }));!f(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e)) }
        notifyPlugins(t, e, i) { return this._plugins.notify(this, t, e, i) }
        isPluginEnabled(t) { return 1 === this._plugins._cache.filter((e => e.plugin.id === t)).length }
        _updateHoverStyles(t, e, i) { const s = this.options.hover,
                n = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index)))),
                o = n(e, t),
                a = i ? t : n(t, e);
            o.length && this.updateHoverStyle(o, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0) }
        _eventHandler(t, e) { const i = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
                s = e => (e.options.events || this.options.events).includes(t.native.type); if (!1 === this.notifyPlugins("beforeEvent", i, s)) return; const n = this._handleEvent(t, e, i.inChartArea); return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this }
        _handleEvent(t, e, i) { const { _active: s = [], options: n } = this, o = e, a = this._getActiveElements(t, s, i, o), r = D(t), l = function(t, e, i, s) { return i && "mouseout" !== t.type ? s ? e : t : null }(t, this._lastEvent, i, r);
            i && (this._lastEvent = null, d(n.onHover, [t, a, this], this), r && d(n.onClick, [t, a, this], this)); const h = !f(a, s); return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = l, h }
        _getActiveElements(t, e, i, s) { if ("mouseout" === t.type) return []; if (!i) return e; const n = this.options.hover; return this.getElementsAtEventForMode(t, n.mode, n, s) } }

    function Tn() { return u(An.instances, (t => t._plugins.invalidate())) }

    function Ln() { throw new Error("This method is not implemented: Check that a complete date adapter is provided.") }
    class En { static override(t) { Object.assign(En.prototype, t) }
        options;
        constructor(t) { this.options = t || {} }
        init() {}
        formats() { return Ln() }
        parse() { return Ln() }
        format() { return Ln() }
        add() { return Ln() }
        diff() { return Ln() }
        startOf() { return Ln() }
        endOf() { return Ln() } } var Rn = { _date: En };

    function In(t) { const e = t.iScale,
            i = function(t, e) { if (!t._cache.$bar) { const i = t.getMatchingVisibleMetas(e); let s = []; for (let e = 0, n = i.length; e < n; e++) s = s.concat(i[e].controller.getAllParsedValues(t));
                    t._cache.$bar = lt(s.sort(((t, e) => t - e))) } return t._cache.$bar }(e, t.type); let s, n, o, a, r = e._length; const l = () => { 32767 !== o && -32768 !== o && (k(a) && (r = Math.min(r, Math.abs(o - a) || r)), a = o) }; for (s = 0, n = i.length; s < n; ++s) o = e.getPixelForValue(i[s]), l(); for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s) o = e.getPixelForTick(s), l(); return r }

    function zn(t, e, i, s) { return n(t) ? function(t, e, i, s) { const n = i.parse(t[0], s),
                o = i.parse(t[1], s),
                a = Math.min(n, o),
                r = Math.max(n, o); let l = a,
                h = r;
            Math.abs(a) > Math.abs(r) && (l = r, h = a), e[i.axis] = h, e._custom = { barStart: l, barEnd: h, start: n, end: o, min: a, max: r } }(t, e, i, s) : e[i.axis] = i.parse(t, s), e }

    function Fn(t, e, i, s) { const n = t.iScale,
            o = t.vScale,
            a = n.getLabels(),
            r = n === o,
            l = []; let h, c, d, u; for (h = i, c = i + s; h < c; ++h) u = e[h], d = {}, d[n.axis] = r || n.parse(a[h], h), l.push(zn(u, d, o, h)); return l }

    function Vn(t) { return t && void 0 !== t.barStart && void 0 !== t.barEnd }

    function Bn(t, e, i, s) { let n = e.borderSkipped; const o = {}; if (!n) return void(t.borderSkipped = o); if (!0 === n) return void(t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 }); const { start: a, end: r, reverse: l, top: h, bottom: c } = function(t) { let e, i, s, n, o; return t.horizontal ? (e = t.base > t.x, i = "left", s = "right") : (e = t.base < t.y, i = "bottom", s = "top"), e ? (n = "end", o = "start") : (n = "start", o = "end"), { start: i, end: s, reverse: e, top: n, bottom: o } }(t); "middle" === n && i && (t.enableBorderRadius = !0, (i._top || 0) === s ? n = h : (i._bottom || 0) === s ? n = c : (o[Wn(c, a, r, l)] = !0, n = h)), o[Wn(n, a, r, l)] = !0, t.borderSkipped = o }

    function Wn(t, e, i, s) { var n, o, a; return s ? (a = i, t = Nn(t = (n = t) === (o = e) ? a : n === a ? o : n, i, e)) : t = Nn(t, e, i), t }

    function Nn(t, e, i) { return "start" === t ? e : "end" === t ? i : t }

    function Hn(t, { inflateAmount: e }, i) { t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e }
    class jn extends Ns { static id = "doughnut";
        static defaults = { datasetElementType: !1, dataElementType: "arc", animation: { animateRotate: !0, animateScale: !1 }, animations: { numbers: { type: "number", properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"] } }, cutout: "50%", rotation: 0, circumference: 360, radius: "100%", spacing: 0, indexAxis: "r" };
        static descriptors = { _scriptable: t => "spacing" !== t, _indexable: t => "spacing" !== t && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash") };
        static overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t) { const e = t.data; if (e.labels.length && e.datasets.length) { const { labels: { pointStyle: i, color: s } } = t.legend.options; return e.labels.map(((e, n) => { const o = t.getDatasetMeta(0).controller.getStyle(n); return { text: e, fillStyle: o.backgroundColor, strokeStyle: o.borderColor, fontColor: s, lineWidth: o.borderWidth, pointStyle: i, hidden: !t.getDataVisibility(n), index: n } })) } return [] } }, onClick(t, e, i) { i.chart.toggleDataVisibility(e.index), i.chart.update() } } } };
        constructor(t, e) { super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0 }
        linkScales() {}
        parse(t, e) { const i = this.getDataset().data,
                s = this._cachedMeta; if (!1 === this._parsing) s._parsed = i;
            else { let n, a, r = t => +i[t]; if (o(i[t])) { const { key: t = "value" } = this._parsing;
                    r = e => +M(i[e], t) } for (n = t, a = t + e; n < a; ++n) s._parsed[n] = r(n) } }
        _getRotation() { return $(this.options.rotation - 90) }
        _getCircumference() { return $(this.options.circumference) }
        _getRotationExtents() { let t = O,
                e = -O; for (let i = 0; i < this.chart.data.datasets.length; ++i)
                if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) { const s = this.chart.getDatasetMeta(i).controller,
                        n = s._getRotation(),
                        o = s._getCircumference();
                    t = Math.min(t, n), e = Math.max(e, n + o) }
            return { rotation: t, circumference: e - t } }
        update(t) { const e = this.chart,
                { chartArea: i } = e,
                s = this._cachedMeta,
                n = s.data,
                o = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing,
                a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
                r = Math.min(h(this.options.cutout, a), 1),
                l = this._getRingWeight(this.index),
                { circumference: d, rotation: u } = this._getRotationExtents(),
                { ratioX: f, ratioY: g, offsetX: p, offsetY: m } = function(t, e, i) { let s = 1,
                        n = 1,
                        o = 0,
                        a = 0; if (e < O) { const r = t,
                            l = r + e,
                            h = Math.cos(r),
                            c = Math.sin(r),
                            d = Math.cos(l),
                            u = Math.sin(l),
                            f = (t, e, s) => Z(t, r, l, !0) ? 1 : Math.max(e, e * i, s, s * i),
                            g = (t, e, s) => Z(t, r, l, !0) ? -1 : Math.min(e, e * i, s, s * i),
                            p = f(0, h, d),
                            m = f(E, c, u),
                            b = g(C, h, d),
                            x = g(C + E, c, u);
                        s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, a = -(m + x) / 2 } return { ratioX: s, ratioY: n, offsetX: o, offsetY: a } }(u, d, r),
                b = (i.width - o) / f,
                x = (i.height - o) / g,
                _ = Math.max(Math.min(b, x) / 2, 0),
                y = c(this.options.radius, _),
                v = (y - Math.max(y * r, 0)) / this._getVisibleDatasetWeightTotal();
            this.offsetX = p * y, this.offsetY = m * y, s.total = this.calculateTotal(), this.outerRadius = y - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * l, 0), this.updateElements(n, 0, n.length, t) }
        _circumference(t, e) { const i = this.options,
                s = this._cachedMeta,
                n = this._getCircumference(); return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === s._parsed[t] || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * n / O) }
        updateElements(t, e, i, s) { const n = "reset" === s,
                o = this.chart,
                a = o.chartArea,
                r = o.options.animation,
                l = (a.left + a.right) / 2,
                h = (a.top + a.bottom) / 2,
                c = n && r.animateScale,
                d = c ? 0 : this.innerRadius,
                u = c ? 0 : this.outerRadius,
                { sharedOptions: f, includeOptions: g } = this._getSharedOptions(e, s); let p, m = this._getRotation(); for (p = 0; p < e; ++p) m += this._circumference(p, n); for (p = e; p < e + i; ++p) { const e = this._circumference(p, n),
                    i = t[p],
                    o = { x: l + this.offsetX, y: h + this.offsetY, startAngle: m, endAngle: m + e, circumference: e, outerRadius: u, innerRadius: d };
                g && (o.options = f || this.resolveDataElementOptions(p, i.active ? "active" : s)), m += e, this.updateElement(i, p, o, s) } }
        calculateTotal() { const t = this._cachedMeta,
                e = t.data; let i, s = 0; for (i = 0; i < e.length; i++) { const n = t._parsed[i];
                null === n || isNaN(n) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(n)) } return s }
        calculateCircumference(t) { const e = this._cachedMeta.total; return e > 0 && !isNaN(t) ? O * (Math.abs(t) / e) : 0 }
        getLabelAndValue(t) { const e = this._cachedMeta,
                i = this.chart,
                s = i.data.labels || [],
                n = ne(e._parsed[t], i.options.locale); return { label: s[t] || "", value: n } }
        getMaxBorderWidth(t) { let e = 0; const i = this.chart; let s, n, o, a, r; if (!t)
                for (s = 0, n = i.data.datasets.length; s < n; ++s)
                    if (i.isDatasetVisible(s)) { o = i.getDatasetMeta(s), t = o.data, a = o.controller; break }
            if (!t) return 0; for (s = 0, n = t.length; s < n; ++s) r = a.resolveDataElementOptions(s), "inner" !== r.borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0)); return e }
        getMaxOffset(t) { let e = 0; for (let i = 0, s = t.length; i < s; ++i) { const t = this.resolveDataElementOptions(i);
                e = Math.max(e, t.offset || 0, t.hoverOffset || 0) } return e }
        _getRingWeightOffset(t) { let e = 0; for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i)); return e }
        _getRingWeight(t) { return Math.max(l(this.chart.data.datasets[t].weight, 1), 0) }
        _getVisibleDatasetWeightTotal() { return this._getRingWeightOffset(this.chart.data.datasets.length) || 1 } }
    class $n extends Ns { static id = "polarArea";
        static defaults = { dataElementType: "arc", animation: { animateRotate: !0, animateScale: !0 }, animations: { numbers: { type: "number", properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"] } }, indexAxis: "r", startAngle: 0 };
        static overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t) { const e = t.data; if (e.labels.length && e.datasets.length) { const { labels: { pointStyle: i, color: s } } = t.legend.options; return e.labels.map(((e, n) => { const o = t.getDatasetMeta(0).controller.getStyle(n); return { text: e, fillStyle: o.backgroundColor, strokeStyle: o.borderColor, fontColor: s, lineWidth: o.borderWidth, pointStyle: i, hidden: !t.getDataVisibility(n), index: n } })) } return [] } }, onClick(t, e, i) { i.chart.toggleDataVisibility(e.index), i.chart.update() } } }, scales: { r: { type: "radialLinear", angleLines: { display: !1 }, beginAtZero: !0, grid: { circular: !0 }, pointLabels: { display: !1 }, startAngle: 0 } } };
        constructor(t, e) { super(t, e), this.innerRadius = void 0, this.outerRadius = void 0 }
        getLabelAndValue(t) { const e = this._cachedMeta,
                i = this.chart,
                s = i.data.labels || [],
                n = ne(e._parsed[t].r, i.options.locale); return { label: s[t] || "", value: n } }
        parseObjectData(t, e, i, s) { return ii.bind(this)(t, e, i, s) }
        update(t) { const e = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(e, 0, e.length, t) }
        getMinMax() { const t = this._cachedMeta,
                e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }; return t.data.forEach(((t, i) => { const s = this.getParsed(i).r;!isNaN(s) && this.chart.getDataVisibility(i) && (s < e.min && (e.min = s), s > e.max && (e.max = s)) })), e }
        _updateRadius() { const t = this.chart,
                e = t.chartArea,
                i = t.options,
                s = Math.min(e.right - e.left, e.bottom - e.top),
                n = Math.max(s / 2, 0),
                o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
            this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o }
        updateElements(t, e, i, s) { const n = "reset" === s,
                o = this.chart,
                a = o.options.animation,
                r = this._cachedMeta.rScale,
                l = r.xCenter,
                h = r.yCenter,
                c = r.getIndexAngle(0) - .5 * C; let d, u = c; const f = 360 / this.countVisibleElements(); for (d = 0; d < e; ++d) u += this._computeAngle(d, s, f); for (d = e; d < e + i; d++) { const e = t[d]; let i = u,
                    g = u + this._computeAngle(d, s, f),
                    p = o.getDataVisibility(d) ? r.getDistanceFromCenterForValue(this.getParsed(d).r) : 0;
                u = g, n && (a.animateScale && (p = 0), a.animateRotate && (i = g = c)); const m = { x: l, y: h, innerRadius: 0, outerRadius: p, startAngle: i, endAngle: g, options: this.resolveDataElementOptions(d, e.active ? "active" : s) };
                this.updateElement(e, d, m, s) } }
        countVisibleElements() { const t = this._cachedMeta; let e = 0; return t.data.forEach(((t, i) => {!isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++ })), e }
        _computeAngle(t, e, i) { return this.chart.getDataVisibility(t) ? $(this.resolveDataElementOptions(t, e).angle || i) : 0 } } var Yn = Object.freeze({ __proto__: null, BarController: class extends Ns { static id = "bar";
            static defaults = { datasetElementType: !1, dataElementType: "bar", categoryPercentage: .8, barPercentage: .9, grouped: !0, animations: { numbers: { type: "number", properties: ["x", "y", "base", "width", "height"] } } };
            static overrides = { scales: { _index_: { type: "category", offset: !0, grid: { offset: !0 } }, _value_: { type: "linear", beginAtZero: !0 } } };
            parsePrimitiveData(t, e, i, s) { return Fn(t, e, i, s) }
            parseArrayData(t, e, i, s) { return Fn(t, e, i, s) }
            parseObjectData(t, e, i, s) { const { iScale: n, vScale: o } = t, { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing, l = "x" === n.axis ? a : r, h = "x" === o.axis ? a : r, c = []; let d, u, f, g; for (d = i, u = i + s; d < u; ++d) g = e[d], f = {}, f[n.axis] = n.parse(M(g, l), d), c.push(zn(M(g, h), f, o, d)); return c }
            updateRangeFromParsed(t, e, i, s) { super.updateRangeFromParsed(t, e, i, s); const n = i._custom;
                n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max)) }
            getMaxOverflow() { return 0 }
            getLabelAndValue(t) { const e = this._cachedMeta,
                    { iScale: i, vScale: s } = e,
                    n = this.getParsed(t),
                    o = n._custom,
                    a = Vn(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]); return { label: "" + i.getLabelForValue(n[i.axis]), value: a } }
            initialize() { this.enableOptionSharing = !0, super.initialize(), this._cachedMeta.stack = this.getDataset().stack }
            update(t) { const e = this._cachedMeta;
                this.updateElements(e.data, 0, e.data.length, t) }
            updateElements(t, e, i, n) { const o = "reset" === n,
                    { index: a, _cachedMeta: { vScale: r } } = this,
                    l = r.getBasePixel(),
                    h = r.isHorizontal(),
                    c = this._getRuler(),
                    { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n); for (let f = e; f < e + i; f++) { const e = this.getParsed(f),
                        i = o || s(e[r.axis]) ? { base: l, head: l } : this._calculateBarValuePixels(f),
                        g = this._calculateBarIndexPixels(f, c),
                        p = (e._stacks || {})[r.axis],
                        m = { horizontal: h, base: i.base, enableBorderRadius: !p || Vn(e._custom) || a === p._top || a === p._bottom, x: h ? i.head : g.center, y: h ? g.center : i.head, height: h ? g.size : Math.abs(i.size), width: h ? Math.abs(i.size) : g.size };
                    u && (m.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n)); const b = m.options || t[f].options;
                    Bn(m, b, p, a), Hn(m, b, c.ratio), this.updateElement(t[f], f, m, n) } }
            _getStacks(t, e) { const { iScale: i } = this._cachedMeta, n = i.getMatchingVisibleMetas(this._type).filter((t => t.controller.options.grouped)), o = i.options.stacked, a = [], r = t => { const i = t.controller.getParsed(e),
                        n = i && i[t.vScale.axis]; if (s(n) || isNaN(n)) return !0 }; for (const i of n)
                    if ((void 0 === e || !r(i)) && ((!1 === o || -1 === a.indexOf(i.stack) || void 0 === o && void 0 === i.stack) && a.push(i.stack), i.index === t)) break;
                return a.length || a.push(void 0), a }
            _getStackCount(t) { return this._getStacks(void 0, t).length }
            _getStackIndex(t, e, i) { const s = this._getStacks(t, i),
                    n = void 0 !== e ? s.indexOf(e) : -1; return -1 === n ? s.length - 1 : n }
            _getRuler() { const t = this.options,
                    e = this._cachedMeta,
                    i = e.iScale,
                    s = []; let n, o; for (n = 0, o = e.data.length; n < o; ++n) s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n)); const a = t.barThickness; return { min: a || In(e), pixels: s, start: i._startPixel, end: i._endPixel, stackCount: this._getStackCount(), scale: i, grouped: t.grouped, ratio: a ? 1 : t.categoryPercentage * t.barPercentage } }
            _calculateBarValuePixels(t) { const { _cachedMeta: { vScale: e, _stacked: i, index: n }, options: { base: o, minBarLength: a } } = this, r = o || 0, l = this.getParsed(t), h = l._custom, c = Vn(h); let d, u, f = l[e.axis],
                    g = 0,
                    p = i ? this.applyStack(e, l, i) : f;
                p !== f && (g = p - f, p = f), c && (f = h.barStart, p = h.barEnd - h.barStart, 0 !== f && F(f) !== F(h.barEnd) && (g = 0), g += f); const m = s(o) || c ? g : o; let b = e.getPixelForValue(m); if (d = this.chart.getDataVisibility(t) ? e.getPixelForValue(g + p) : b, u = d - b, Math.abs(u) < a) { u = function(t, e, i) { return 0 !== t ? F(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1) }(u, e, r) * a, f === r && (b -= u / 2); const t = e.getPixelForDecimal(0),
                        s = e.getPixelForDecimal(1),
                        o = Math.min(t, s),
                        h = Math.max(t, s);
                    b = Math.max(Math.min(b, h), o), d = b + u, i && !c && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(d) - e.getValueForPixel(b)) } if (b === e.getPixelForValue(r)) { const t = F(u) * e.getLineWidthForValue(r) / 2;
                    b += t, u -= t } return { size: u, base: b, head: d, center: d + u / 2 } }
            _calculateBarIndexPixels(t, e) { const i = e.scale,
                    n = this.options,
                    o = n.skipNull,
                    a = l(n.maxBarThickness, 1 / 0); let r, h; if (e.grouped) { const i = o ? this._getStackCount(t) : e.stackCount,
                        l = "flex" === n.barThickness ? function(t, e, i, s) { const n = e.pixels,
                                o = n[t]; let a = t > 0 ? n[t - 1] : null,
                                r = t < n.length - 1 ? n[t + 1] : null; const l = i.categoryPercentage;
                            null === a && (a = o - (null === r ? e.end - e.start : r - o)), null === r && (r = o + o - a); const h = o - (o - Math.min(a, r)) / 2 * l; return { chunk: Math.abs(r - a) / 2 * l / s, ratio: i.barPercentage, start: h } }(t, e, n, i) : function(t, e, i, n) { const o = i.barThickness; let a, r; return s(o) ? (a = e.min * i.categoryPercentage, r = i.barPercentage) : (a = o * n, r = 1), { chunk: a / n, ratio: r, start: e.pixels[t] - a / 2 } }(t, e, n, i),
                        c = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
                    r = l.start + l.chunk * c + l.chunk / 2, h = Math.min(a, l.chunk * l.ratio) } else r = i.getPixelForValue(this.getParsed(t)[i.axis], t), h = Math.min(a, e.min * e.ratio); return { base: r - h / 2, head: r + h / 2, center: r, size: h } }
            draw() { const t = this._cachedMeta,
                    e = t.vScale,
                    i = t.data,
                    s = i.length; let n = 0; for (; n < s; ++n) null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx) } }, BubbleController: class extends Ns { static id = "bubble";
            static defaults = { datasetElementType: !1, dataElementType: "point", animations: { numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius"] } } };
            static overrides = { scales: { x: { type: "linear" }, y: { type: "linear" } } };
            initialize() { this.enableOptionSharing = !0, super.initialize() }
            parsePrimitiveData(t, e, i, s) { const n = super.parsePrimitiveData(t, e, i, s); for (let t = 0; t < n.length; t++) n[t]._custom = this.resolveDataElementOptions(t + i).radius; return n }
            parseArrayData(t, e, i, s) { const n = super.parseArrayData(t, e, i, s); for (let t = 0; t < n.length; t++) { const s = e[i + t];
                    n[t]._custom = l(s[2], this.resolveDataElementOptions(t + i).radius) } return n }
            parseObjectData(t, e, i, s) { const n = super.parseObjectData(t, e, i, s); for (let t = 0; t < n.length; t++) { const s = e[i + t];
                    n[t]._custom = l(s && s.r && +s.r, this.resolveDataElementOptions(t + i).radius) } return n }
            getMaxOverflow() { const t = this._cachedMeta.data; let e = 0; for (let i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2); return e > 0 && e }
            getLabelAndValue(t) { const e = this._cachedMeta,
                    i = this.chart.data.labels || [],
                    { xScale: s, yScale: n } = e,
                    o = this.getParsed(t),
                    a = s.getLabelForValue(o.x),
                    r = n.getLabelForValue(o.y),
                    l = o._custom; return { label: i[t] || "", value: "(" + a + ", " + r + (l ? ", " + l : "") + ")" } }
            update(t) { const e = this._cachedMeta.data;
                this.updateElements(e, 0, e.length, t) }
            updateElements(t, e, i, s) { const n = "reset" === s,
                    { iScale: o, vScale: a } = this._cachedMeta,
                    { sharedOptions: r, includeOptions: l } = this._getSharedOptions(e, s),
                    h = o.axis,
                    c = a.axis; for (let d = e; d < e + i; d++) { const e = t[d],
                        i = !n && this.getParsed(d),
                        u = {},
                        f = u[h] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(i[h]),
                        g = u[c] = n ? a.getBasePixel() : a.getPixelForValue(i[c]);
                    u.skip = isNaN(f) || isNaN(g), l && (u.options = r || this.resolveDataElementOptions(d, e.active ? "active" : s), n && (u.options.radius = 0)), this.updateElement(e, d, u, s) } }
            resolveDataElementOptions(t, e) { const i = this.getParsed(t); let s = super.resolveDataElementOptions(t, e);
                s.$shared && (s = Object.assign({}, s, { $shared: !1 })); const n = s.radius; return "active" !== e && (s.radius = 0), s.radius += l(i && i._custom, n), s } }, DoughnutController: jn, LineController: class extends Ns { static id = "line";
            static defaults = { datasetElementType: "line", dataElementType: "point", showLine: !0, spanGaps: !1 };
            static overrides = { scales: { _index_: { type: "category" }, _value_: { type: "linear" } } };
            initialize() { this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize() }
            update(t) { const e = this._cachedMeta,
                    { dataset: i, data: s = [], _dataset: n } = e,
                    o = this.chart._animationsDisabled; let { start: a, count: r } = pt(e, s, o);
                this._drawStart = a, this._drawCount = r, mt(e) && (a = 0, r = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!n._decimated, i.points = s; const l = this.resolveDatasetElementOptions(t);
                this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, { animated: !o, options: l }, t), this.updateElements(s, a, r, t) }
            updateElements(t, e, i, n) { const o = "reset" === n,
                    { iScale: a, vScale: r, _stacked: l, _dataset: h } = this._cachedMeta,
                    { sharedOptions: c, includeOptions: d } = this._getSharedOptions(e, n),
                    u = a.axis,
                    f = r.axis,
                    { spanGaps: g, segment: p } = this.options,
                    m = N(g) ? g : Number.POSITIVE_INFINITY,
                    b = this.chart._animationsDisabled || o || "none" === n,
                    x = e + i,
                    _ = t.length; let y = e > 0 && this.getParsed(e - 1); for (let i = 0; i < _; ++i) { const g = t[i],
                        _ = b ? g : {}; if (i < e || i >= x) { _.skip = !0; continue } const v = this.getParsed(i),
                        M = s(v[f]),
                        w = _[u] = a.getPixelForValue(v[u], i),
                        k = _[f] = o || M ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, v, l) : v[f], i);
                    _.skip = isNaN(w) || isNaN(k) || M, _.stop = i > 0 && Math.abs(v[u] - y[u]) > m, p && (_.parsed = v, _.raw = h.data[i]), d && (_.options = c || this.resolveDataElementOptions(i, g.active ? "active" : n)), b || this.updateElement(g, i, _, n), y = v } }
            getMaxOverflow() { const t = this._cachedMeta,
                    e = t.dataset,
                    i = e.options && e.options.borderWidth || 0,
                    s = t.data || []; if (!s.length) return i; const n = s[0].size(this.resolveDataElementOptions(0)),
                    o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1)); return Math.max(i, n, o) / 2 }
            draw() { const t = this._cachedMeta;
                t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw() } }, PieController: class extends jn { static id = "pie";
            static defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" } }, PolarAreaController: $n, RadarController: class extends Ns { static id = "radar";
            static defaults = { datasetElementType: "line", dataElementType: "point", indexAxis: "r", showLine: !0, elements: { line: { fill: "start" } } };
            static overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } };
            getLabelAndValue(t) { const e = this._cachedMeta.vScale,
                    i = this.getParsed(t); return { label: e.getLabels()[t], value: "" + e.getLabelForValue(i[e.axis]) } }
            parseObjectData(t, e, i, s) { return ii.bind(this)(t, e, i, s) }
            update(t) { const e = this._cachedMeta,
                    i = e.dataset,
                    s = e.data || [],
                    n = e.iScale.getLabels(); if (i.points = s, "resize" !== t) { const e = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (e.borderWidth = 0); const o = { _loop: !0, _fullLoop: n.length === s.length, options: e };
                    this.updateElement(i, void 0, o, t) }
                this.updateElements(s, 0, s.length, t) }
            updateElements(t, e, i, s) { const n = this._cachedMeta.rScale,
                    o = "reset" === s; for (let a = e; a < e + i; a++) { const e = t[a],
                        i = this.resolveDataElementOptions(a, e.active ? "active" : s),
                        r = n.getPointPositionForValue(a, this.getParsed(a).r),
                        l = o ? n.xCenter : r.x,
                        h = o ? n.yCenter : r.y,
                        c = { x: l, y: h, angle: r.angle, skip: isNaN(l) || isNaN(h), options: i };
                    this.updateElement(e, a, c, s) } } }, ScatterController: class extends Ns { static id = "scatter";
            static defaults = { datasetElementType: !1, dataElementType: "point", showLine: !1, fill: !1 };
            static overrides = { interaction: { mode: "point" }, scales: { x: { type: "linear" }, y: { type: "linear" } } };
            getLabelAndValue(t) { const e = this._cachedMeta,
                    i = this.chart.data.labels || [],
                    { xScale: s, yScale: n } = e,
                    o = this.getParsed(t),
                    a = s.getLabelForValue(o.x),
                    r = n.getLabelForValue(o.y); return { label: i[t] || "", value: "(" + a + ", " + r + ")" } }
            update(t) { const e = this._cachedMeta,
                    { data: i = [] } = e,
                    s = this.chart._animationsDisabled; let { start: n, count: o } = pt(e, i, s); if (this._drawStart = n, this._drawCount = o, mt(e) && (n = 0, o = i.length), this.options.showLine) { this.datasetElementType || this.addElements(); const { dataset: n, _dataset: o } = e;
                    n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!o._decimated, n.points = i; const a = this.resolveDatasetElementOptions(t);
                    a.segment = this.options.segment, this.updateElement(n, void 0, { animated: !s, options: a }, t) } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
                this.updateElements(i, n, o, t) }
            addElements() { const { showLine: t } = this.options;!this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements() }
            updateElements(t, e, i, n) { const o = "reset" === n,
                    { iScale: a, vScale: r, _stacked: l, _dataset: h } = this._cachedMeta,
                    c = this.resolveDataElementOptions(e, n),
                    d = this.getSharedOptions(c),
                    u = this.includeOptions(n, d),
                    f = a.axis,
                    g = r.axis,
                    { spanGaps: p, segment: m } = this.options,
                    b = N(p) ? p : Number.POSITIVE_INFINITY,
                    x = this.chart._animationsDisabled || o || "none" === n; let _ = e > 0 && this.getParsed(e - 1); for (let c = e; c < e + i; ++c) { const e = t[c],
                        i = this.getParsed(c),
                        p = x ? e : {},
                        y = s(i[g]),
                        v = p[f] = a.getPixelForValue(i[f], c),
                        M = p[g] = o || y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, i, l) : i[g], c);
                    p.skip = isNaN(v) || isNaN(M) || y, p.stop = c > 0 && Math.abs(i[f] - _[f]) > b, m && (p.parsed = i, p.raw = h.data[c]), u && (p.options = d || this.resolveDataElementOptions(c, e.active ? "active" : n)), x || this.updateElement(e, c, p, n), _ = i }
                this.updateSharedOptions(d, n, c) }
            getMaxOverflow() { const t = this._cachedMeta,
                    e = t.data || []; if (!this.options.showLine) { let t = 0; for (let i = e.length - 1; i >= 0; --i) t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2); return t > 0 && t } const i = t.dataset,
                    s = i.options && i.options.borderWidth || 0; if (!e.length) return s; const n = e[0].size(this.resolveDataElementOptions(0)),
                    o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1)); return Math.max(s, n, o) / 2 } } });

    function Xn(t, e, i, s) { return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) } }

    function qn(t, e, i, s, n, o) { const { x: a, y: r, startAngle: l, pixelMargin: h, innerRadius: c } = e, d = Math.max(e.outerRadius + s + i - h, 0), u = c > 0 ? c + s + i + h : 0; let f = 0; const g = n - l; if (s) { const t = ((c > 0 ? c - s : 0) + (d > 0 ? d - s : 0)) / 2;
            f = (g - (0 !== t ? g * t / (t + s) : g)) / 2 } const p = (g - Math.max(.001, g * d - i / C) / d) / 2,
            m = l + p + f,
            b = n - p - f,
            { outerStart: x, outerEnd: _, innerStart: y, innerEnd: v } = function Un(t, e, i, s) { const n = vi(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]),
                    o = (i - e) / 2,
                    a = Math.min(o, s * e / 2),
                    r = t => { const e = (i - Math.min(o, t)) * s / 2; return J(t, 0, Math.min(o, e)) }; return { outerStart: r(n.outerStart), outerEnd: r(n.outerEnd), innerStart: J(n.innerStart, 0, a), innerEnd: J(n.innerEnd, 0, a) } }(e, u, d, b - m),
            M = d - x,
            w = d - _,
            k = m + x / M,
            S = b - _ / w,
            P = u + y,
            D = u + v,
            O = m + y / P,
            A = b - v / D; if (t.beginPath(), o) { const e = (k + S) / 2; if (t.arc(a, r, d, k, e), t.arc(a, r, d, e, S), _ > 0) { const e = Xn(w, S, a, r);
                t.arc(e.x, e.y, _, S, b + E) } const i = Xn(D, b, a, r); if (t.lineTo(i.x, i.y), v > 0) { const e = Xn(D, A, a, r);
                t.arc(e.x, e.y, v, b + E, A + Math.PI) } const s = (b - v / u + (m + y / u)) / 2; if (t.arc(a, r, u, b - v / u, s, !0), t.arc(a, r, u, s, m + y / u, !0), y > 0) { const e = Xn(P, O, a, r);
                t.arc(e.x, e.y, y, O + Math.PI, m - E) } const n = Xn(M, m, a, r); if (t.lineTo(n.x, n.y), x > 0) { const e = Xn(M, k, a, r);
                t.arc(e.x, e.y, x, m - E, k) } } else { t.moveTo(a, r); const e = Math.cos(k) * d + a,
                i = Math.sin(k) * d + r;
            t.lineTo(e, i); const s = Math.cos(S) * d + a,
                n = Math.sin(S) * d + r;
            t.lineTo(s, n) }
        t.closePath() }

    function Gn(t, e, i = e) { t.lineCap = l(i.borderCapStyle, e.borderCapStyle), t.setLineDash(l(i.borderDash, e.borderDash)), t.lineDashOffset = l(i.borderDashOffset, e.borderDashOffset), t.lineJoin = l(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = l(i.borderWidth, e.borderWidth), t.strokeStyle = l(i.borderColor, e.borderColor) }

    function Zn(t, e, i) { t.lineTo(i.x, i.y) }

    function Jn(t, e, i = {}) { const s = t.length,
            { start: n = 0, end: o = s - 1 } = i,
            { start: a, end: r } = e,
            l = Math.max(n, a),
            h = Math.min(o, r),
            c = n < a && o < a || n > r && o > r; return { count: s, start: l, loop: e.loop, ilen: h < l && !c ? s + h - l : h - l } }

    function Qn(t, e, i, s) { const { points: n, options: o } = e, { count: a, start: r, loop: l, ilen: h } = Jn(n, i, s), c = function(t) { return t.stepped ? Fe : t.tension || "monotone" === t.cubicInterpolationMode ? Ve : Zn }(o); let d, u, f, { move: g = !0, reverse: p } = s || {}; for (d = 0; d <= h; ++d) u = n[(r + (p ? h - d : d)) % a], u.skip || (g ? (t.moveTo(u.x, u.y), g = !1) : c(t, f, u, p, o.stepped), f = u); return l && (u = n[(r + (p ? h : 0)) % a], c(t, f, u, p, o.stepped)), !!l }

    function to(t, e, i, s) { const n = e.points,
            { count: o, start: a, ilen: r } = Jn(n, i, s),
            { move: l = !0, reverse: h } = s || {}; let c, d, u, f, g, p, m = 0,
            b = 0; const x = t => (a + (h ? r - t : t)) % o,
            _ = () => { f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p)) }; for (l && (d = n[x(0)], t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) { if (d = n[x(c)], d.skip) continue; const e = d.x,
                i = d.y,
                s = 0 | e;
            s === u ? (i < f ? f = i : i > g && (g = i), m = (b * m + e) / ++b) : (_(), t.lineTo(e, i), u = s, b = 0, f = g = i), p = i }
        _() }

    function eo(t) { const e = t.options,
            i = e.borderDash && e.borderDash.length; return t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i ? Qn : to } const io = "function" == typeof Path2D;
    class no extends Hs { static id = "line";
        static defaults = { borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", borderWidth: 3, capBezierPoints: !0, cubicInterpolationMode: "default", fill: !1, spanGaps: !1, stepped: !1, tension: 0 };
        static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };
        static descriptors = { _scriptable: !0, _indexable: t => "borderDash" !== t && "fill" !== t };
        constructor(t) { super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t) }
        updateControlPoints(t, e) { const i = this.options; if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) { const s = i.spanGaps ? this._loop : this._fullLoop;
                hi(this._points, i, t, s, e), this._pointsUpdated = !0 } }
        set points(t) { this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1 }
        get points() { return this._points }
        get segments() { return this._segments || (this._segments = zi(this, this.options.segment)) }
        first() { const t = this.segments,
                e = this.points; return t.length && e[t[0].start] }
        last() { const t = this.segments,
                e = this.points,
                i = t.length; return i && e[t[i - 1].end] }
        interpolate(t, e) { const i = this.options,
                s = t[e],
                n = this.points,
                o = Ii(this, { property: e, start: s, end: s }); if (!o.length) return; const a = [],
                r = function(t) { return t.stepped ? pi : t.tension || "monotone" === t.cubicInterpolationMode ? mi : gi }(i); let l, h; for (l = 0, h = o.length; l < h; ++l) { const { start: h, end: c } = o[l], d = n[h], u = n[c]; if (d === u) { a.push(d); continue } const f = r(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped);
                f[e] = t[e], a.push(f) } return 1 === a.length ? a[0] : a }
        pathSegment(t, e, i) { return eo(this)(t, this, e, i) }
        path(t, e, i) { const s = this.segments,
                n = eo(this); let o = this._loop;
            e = e || 0, i = i || this.points.length - e; for (const a of s) o &= n(t, this, a, { start: e, end: e + i - 1 }); return !!o }
        draw(t, e, i, s) { const n = this.options || {};
            (this.points || []).length && n.borderWidth && (t.save(), function so(t, e, i, s) { io && !e.options.segment ? function(t, e, i, s) { let n = e._path;
                    n || (n = e._path = new Path2D, e.path(n, i, s) && n.closePath()), Gn(t, e.options), t.stroke(n) }(t, e, i, s) : function(t, e, i, s) { const { segments: n, options: o } = e, a = eo(e); for (const r of n) Gn(t, o, r.style), t.beginPath(), a(t, e, r, { start: i, end: i + s - 1 }) && t.closePath(), t.stroke() }(t, e, i, s) }(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0) } }

    function oo(t, e, i, s) { const n = t.options,
            {
                [i]: o } = t.getProps([i], s); return Math.abs(e - o) < n.radius + n.hitRadius }

    function ao(t, e) { const { x: i, y: s, base: n, width: o, height: a } = t.getProps(["x", "y", "base", "width", "height"], e); let r, l, h, c, d; return t.horizontal ? (d = a / 2, r = Math.min(i, n), l = Math.max(i, n), h = s - d, c = s + d) : (d = o / 2, r = i - d, l = i + d, h = Math.min(s, n), c = Math.max(s, n)), { left: r, top: h, right: l, bottom: c } }

    function ro(t, e, i, s) { return t ? 0 : J(e, i, s) }

    function lo(t) { const e = ao(t),
            i = e.right - e.left,
            s = e.bottom - e.top,
            n = function(t, e, i) { const s = t.options.borderWidth,
                    n = t.borderSkipped,
                    o = Mi(s); return { t: ro(n.top, o.top, 0, i), r: ro(n.right, o.right, 0, e), b: ro(n.bottom, o.bottom, 0, i), l: ro(n.left, o.left, 0, e) } }(t, i / 2, s / 2),
            a = function(t, e, i) { const { enableBorderRadius: s } = t.getProps(["enableBorderRadius"]), n = t.options.borderRadius, a = wi(n), r = Math.min(e, i), l = t.borderSkipped, h = s || o(n); return { topLeft: ro(!h || l.top || l.left, a.topLeft, 0, r), topRight: ro(!h || l.top || l.right, a.topRight, 0, r), bottomLeft: ro(!h || l.bottom || l.left, a.bottomLeft, 0, r), bottomRight: ro(!h || l.bottom || l.right, a.bottomRight, 0, r) } }(t, i / 2, s / 2); return { outer: { x: e.left, y: e.top, w: i, h: s, radius: a }, inner: { x: e.left + n.l, y: e.top + n.t, w: i - n.l - n.r, h: s - n.t - n.b, radius: { topLeft: Math.max(0, a.topLeft - Math.max(n.t, n.l)), topRight: Math.max(0, a.topRight - Math.max(n.t, n.r)), bottomLeft: Math.max(0, a.bottomLeft - Math.max(n.b, n.l)), bottomRight: Math.max(0, a.bottomRight - Math.max(n.b, n.r)) } } } }

    function ho(t, e, i, s) { const n = null === e,
            o = null === i,
            a = t && !(n && o) && ao(t, s); return a && (n || tt(e, a.left, a.right)) && (o || tt(i, a.top, a.bottom)) }

    function co(t, e) { t.rect(e.x, e.y, e.w, e.h) }

    function uo(t, e, i = {}) { const s = t.x !== i.x ? -e : 0,
            n = t.y !== i.y ? -e : 0,
            o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
            a = (t.y + t.h !== i.y + i.h ? e : 0) - n; return { x: t.x + s, y: t.y + n, w: t.w + o, h: t.h + a, radius: t.radius } } var fo = Object.freeze({ __proto__: null, ArcElement: class extends Hs { static id = "arc";
            static defaults = { borderAlign: "center", borderColor: "#fff", borderDash: [], borderDashOffset: 0, borderJoinStyle: void 0, borderRadius: 0, borderWidth: 2, offset: 0, spacing: 0, angle: void 0, circular: !0 };
            static defaultRoutes = { backgroundColor: "backgroundColor" };
            static descriptors = { _scriptable: !0, _indexable: t => "borderDash" !== t };
            circumference;
            endAngle;
            fullCircles;
            innerRadius;
            outerRadius;
            pixelMargin;
            startAngle;
            constructor(t) { super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t) }
            inRange(t, e, i) { const s = this.getProps(["x", "y"], i),
                    { angle: n, distance: o } = X(s, { x: t, y: e }),
                    { startAngle: a, endAngle: r, innerRadius: h, outerRadius: c, circumference: d } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
                    u = (this.options.spacing + this.options.borderWidth) / 2,
                    f = l(d, r - a) >= O || Z(n, a, r),
                    g = tt(o, h + u, c + u); return f && g }
            getCenterPoint(t) { const { x: e, y: i, startAngle: s, endAngle: n, innerRadius: o, outerRadius: a } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), { offset: r, spacing: l } = this.options, h = (s + n) / 2, c = (o + a + l + r) / 2; return { x: e + Math.cos(h) * c, y: i + Math.sin(h) * c } }
            tooltipPosition(t) { return this.getCenterPoint(t) }
            draw(t) { const { options: e, circumference: i } = this, s = (e.offset || 0) / 4, n = (e.spacing || 0) / 2, o = e.circular; if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > O ? Math.floor(i / O) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return;
                t.save(); const a = (this.startAngle + this.endAngle) / 2;
                t.translate(Math.cos(a) * s, Math.sin(a) * s); const r = s * (1 - Math.sin(Math.min(C, i || 0)));
                t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor,
                    function(t, e, i, s, n) { const { fullCircles: o, startAngle: a, circumference: r } = e; let l = e.endAngle; if (o) { qn(t, e, i, s, l, n); for (let e = 0; e < o; ++e) t.fill();
                            isNaN(r) || (l = a + (r % O || O)) }
                        qn(t, e, i, s, l, n), t.fill() }(t, this, r, n, o),
                    function Kn(t, e, i, s, n) { const { fullCircles: o, startAngle: a, circumference: r, options: l } = e, { borderWidth: h, borderJoinStyle: c, borderDash: d, borderDashOffset: u } = l, f = "inner" === l.borderAlign; if (!h) return;
                        t.setLineDash(d || []), t.lineDashOffset = u, f ? (t.lineWidth = 2 * h, t.lineJoin = c || "round") : (t.lineWidth = h, t.lineJoin = c || "bevel"); let g = e.endAngle; if (o) { qn(t, e, i, s, g, n); for (let e = 0; e < o; ++e) t.stroke();
                            isNaN(r) || (g = a + (r % O || O)) }
                        f && function(t, e, i) { const { startAngle: s, pixelMargin: n, x: o, y: a, outerRadius: r, innerRadius: l } = e; let h = n / r;
                            t.beginPath(), t.arc(o, a, r, s - h, i + h), l > n ? (h = n / l, t.arc(o, a, l, i + h, s - h, !0)) : t.arc(o, a, n, i + E, s - E), t.closePath(), t.clip() }(t, e, g), o || (qn(t, e, i, s, g, n), t.stroke()) }(t, this, r, n, o), t.restore() } }, BarElement: class extends Hs { static id = "bar";
            static defaults = { borderSkipped: "start", borderWidth: 0, borderRadius: 0, inflateAmount: "auto", pointStyle: void 0 };
            static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };
            constructor(t) { super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t) }
            draw(t) { const { inflateAmount: e, options: { borderColor: i, backgroundColor: s } } = this, { inner: n, outer: o } = lo(this), a = (r = o.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight ? He : co; var r;
                t.save(), o.w === n.w && o.h === n.h || (t.beginPath(), a(t, uo(o, e, n)), t.clip(), a(t, uo(n, -e, o)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, uo(n, e)), t.fillStyle = s, t.fill(), t.restore() }
            inRange(t, e, i) { return ho(this, t, e, i) }
            inXRange(t, e) { return ho(this, t, null, e) }
            inYRange(t, e) { return ho(this, null, t, e) }
            getCenterPoint(t) { const { x: e, y: i, base: s, horizontal: n } = this.getProps(["x", "y", "base", "horizontal"], t); return { x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2 } }
            getRange(t) { return "x" === t ? this.width / 2 : this.height / 2 } }, LineElement: no, PointElement: class extends Hs { static id = "point";
            parsed;
            skip;
            stop;
            static defaults = { borderWidth: 1, hitRadius: 1, hoverBorderWidth: 1, hoverRadius: 4, pointStyle: "circle", radius: 3, rotation: 0 };
            static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };
            constructor(t) { super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t) }
            inRange(t, e, i) { const s = this.options,
                    { x: n, y: o } = this.getProps(["x", "y"], i); return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2) }
            inXRange(t, e) { return oo(this, t, "x", e) }
            inYRange(t, e) { return oo(this, t, "y", e) }
            getCenterPoint(t) { const { x: e, y: i } = this.getProps(["x", "y"], t); return { x: e, y: i } }
            size(t) { let e = (t = t || this.options || {}).radius || 0; return e = Math.max(e, e && t.hoverRadius || 0), 2 * (e + (e && t.borderWidth || 0)) }
            draw(t, e) { const i = this.options;
                this.skip || i.radius < .1 || !Re(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Le(t, i, this.x, this.y)) }
            getRange() { const t = this.options || {}; return t.radius + t.hitRadius } } });

    function po(t) { const e = this.getLabels(); return t >= 0 && t < e.length ? e[t] : t }

    function mo(t, e, { horizontal: i, minRotation: s }) { const n = $(s),
            o = (i ? Math.sin(n) : Math.cos(n)) || .001,
            a = .75 * e * ("" + t).length; return Math.min(e / o, a) }
    class bo extends Js { constructor(t) { super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0 }
        parse(t, e) { return s(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t }
        handleTickRangeOptions() { const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: i } = this.getUserBounds(); let { min: s, max: n } = this; const o = t => s = e ? s : t,
                a = t => n = i ? n : t; if (t) { const t = F(s),
                    e = F(n);
                t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0) } if (s === n) { let e = 0 === n ? 1 : Math.abs(.05 * n);
                a(n + e), t || o(s - e) }
            this.min = s, this.max = n }
        getTickLimit() { const t = this.options.ticks; let e, { maxTicksLimit: i, stepSize: s } = t; return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e }
        computeTickLimit() { return Number.POSITIVE_INFINITY }
        buildTicks() { const t = this.options,
                e = t.ticks; let i = this.getTickLimit();
            i = Math.max(2, i); const n = function(t, e) { const i = [],
                    { bounds: n, step: o, min: a, max: r, precision: l, count: h, maxTicks: c, maxDigits: d, includeBounds: u } = t,
                    f = o || 1,
                    g = c - 1,
                    { min: p, max: m } = e,
                    b = !s(a),
                    x = !s(r),
                    _ = !s(h),
                    y = (m - p) / (d + 1); let v, M, w, k, S = B((m - p) / g / f) * f; if (S < 1e-14 && !b && !x) return [{ value: p }, { value: m }];
                k = Math.ceil(m / S) - Math.floor(p / S), k > g && (S = B(k * S / g / f) * f), s(l) || (v = Math.pow(10, l), S = Math.ceil(S * v) / v), "ticks" === n ? (M = Math.floor(p / S) * S, w = Math.ceil(m / S) * S) : (M = p, w = m), b && x && o && H((r - a) / o, S / 1e3) ? (k = Math.round(Math.min((r - a) / S, c)), S = (r - a) / k, M = a, w = r) : _ ? (M = b ? a : M, w = x ? r : w, k = h - 1, S = (w - M) / k) : (k = (w - M) / S, k = V(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k)); const P = Math.max(U(S), U(M));
                v = Math.pow(10, s(l) ? P : l), M = Math.round(M * v) / v, w = Math.round(w * v) / v; let D = 0; for (b && (u && M !== a ? (i.push({ value: a }), M < a && D++, V(Math.round((M + D * S) * v) / v, a, mo(a, y, t)) && D++) : M < a && D++); D < k; ++D) { const t = Math.round((M + D * S) * v) / v; if (x && t > r) break;
                    i.push({ value: t }) } return x && u && w !== r ? i.length && V(i[i.length - 1].value, r, mo(r, y, t)) ? i[i.length - 1].value = r : i.push({ value: r }) : x && w !== r || i.push({ value: w }), i }({ maxTicks: i, bounds: t.bounds, min: t.min, max: t.max, precision: e.precision, step: e.stepSize, count: e.count, maxDigits: this._maxDigits(), horizontal: this.isHorizontal(), minRotation: e.minRotation || 0, includeBounds: !1 !== e.includeBounds }, this._range || this); return "ticks" === t.bounds && j(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n }
        configure() { const t = this.ticks; let e = this.min,
                i = this.max; if (super.configure(), this.options.offset && t.length) { const s = (i - e) / Math.max(t.length - 1, 1) / 2;
                e -= s, i += s }
            this._startValue = e, this._endValue = i, this._valueRange = i - e }
        getLabelForValue(t) { return ne(t, this.chart.options.locale, this.options.ticks.format) } }
    class xo extends bo { static id = "linear";
        static defaults = { ticks: { callback: ae.formatters.numeric } };
        determineDataLimits() { const { min: t, max: e } = this.getMinMax(!0);
            this.min = a(t) ? t : 0, this.max = a(e) ? e : 1, this.handleTickRangeOptions() }
        computeTickLimit() { const t = this.isHorizontal(),
                e = t ? this.width : this.height,
                i = $(this.options.ticks.minRotation),
                s = (t ? Math.sin(i) : Math.cos(i)) || .001,
                n = this._resolveTickFontOptions(0); return Math.ceil(e / Math.min(40, n.lineHeight / s)) }
        getPixelForValue(t) { return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange) }
        getValueForPixel(t) { return this._startValue + this.getDecimalForPixel(t) * this._valueRange } } const _o = t => Math.floor(z(t)),
        yo = (t, e) => Math.pow(10, _o(t) + e);

    function vo(t) { return 1 == t / Math.pow(10, _o(t)) }

    function Mo(t, e, i) { const s = Math.pow(10, i),
            n = Math.floor(t / s); return Math.ceil(e / s) - n }
    class ko extends Js { static id = "logarithmic";
        static defaults = { ticks: { callback: ae.formatters.logarithmic, major: { enabled: !0 } } };
        constructor(t) { super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0 }
        parse(t, e) { const i = bo.prototype.parse.apply(this, [t, e]); if (0 !== i) return a(i) && i > 0 ? i : null;
            this._zero = !0 }
        determineDataLimits() { const { min: t, max: e } = this.getMinMax(!0);
            this.min = a(t) ? Math.max(0, t) : null, this.max = a(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !a(this._userMin) && (this.min = t === yo(this.min, 0) ? yo(this.min, -1) : yo(this.min, 0)), this.handleTickRangeOptions() }
        handleTickRangeOptions() { const { minDefined: t, maxDefined: e } = this.getUserBounds(); let i = this.min,
                s = this.max; const n = e => i = t ? i : e,
                o = t => s = e ? s : t;
            i === s && (i <= 0 ? (n(1), o(10)) : (n(yo(i, -1)), o(yo(s, 1)))), i <= 0 && n(yo(s, -1)), s <= 0 && o(yo(i, 1)), this.min = i, this.max = s }
        buildTicks() { const t = this.options,
                e = function wo(t, { min: e, max: i }) { e = r(t.min, e); const s = [],
                        n = _o(e); let o = function(t, e) { let i = _o(e - t); for (; Mo(t, e, i) > 10;) i++; for (; Mo(t, e, i) < 10;) i--; return Math.min(i, _o(t)) }(e, i),
                        a = o < 0 ? Math.pow(10, Math.abs(o)) : 1; const l = Math.pow(10, o),
                        h = n > o ? Math.pow(10, n) : 0,
                        c = Math.round((e - h) * a) / a,
                        d = Math.floor((e - h) / l / 10) * l * 10; let u = Math.floor((c - d) / Math.pow(10, o)),
                        f = r(t.min, Math.round((h + d + u * Math.pow(10, o)) * a) / a); for (; f < i;) s.push({ value: f, major: vo(f), significand: u }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (o++, u = 2, a = o >= 0 ? 1 : a), f = Math.round((h + d + u * Math.pow(10, o)) * a) / a; const g = r(t.max, f); return s.push({ value: g, major: vo(g), significand: u }), s }({ min: this._userMin, max: this._userMax }, this); return "ticks" === t.bounds && j(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e }
        getLabelForValue(t) { return void 0 === t ? "0" : ne(t, this.chart.options.locale, this.options.ticks.format) }
        configure() { const t = this.min;
            super.configure(), this._startValue = z(t), this._valueRange = z(this.max) - z(t) }
        getPixelForValue(t) { return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (z(t) - this._startValue) / this._valueRange) }
        getValueForPixel(t) { const e = this.getDecimalForPixel(t); return Math.pow(10, this._startValue + e * this._valueRange) } }

    function So(t) { const e = t.ticks; if (e.display && t.display) { const t = ki(e.backdropPadding); return l(e.font && e.font.size, ue.font.size) + t.height } return 0 }

    function Po(t, e, i, s, n) { return t === s || t === n ? { start: e - i / 2, end: e + i / 2 } : t < s || t > n ? { start: e - i, end: e } : { start: e, end: e + i } }

    function Co(t, e, i, s, n) { const o = Math.abs(Math.sin(i)),
            a = Math.abs(Math.cos(i)); let r = 0,
            l = 0;
        s.start < e.l ? (r = (e.l - s.start) / o, t.l = Math.min(t.l, e.l - r)) : s.end > e.r && (r = (s.end - e.r) / o, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / a, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / a, t.b = Math.max(t.b, e.b + l)) }

    function Oo(t, e, i) { const s = t.drawingArea,
            { extra: n, additionalAngle: o, padding: a, size: r } = i,
            l = t.getPointPosition(e, s + n + a, o),
            h = Math.round(Y(G(l.angle + E))),
            c = function(t, e, i) { return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e), t }(l.y, r.h, h),
            d = function(t) { return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right" }(h),
            u = function(t, e, i) { return "right" === i ? t -= e : "center" === i && (t -= e / 2), t }(l.x, r.w, d); return { visible: !0, x: l.x, y: c, textAlign: d, left: u, top: c, right: u + r.w, bottom: c + r.h } }

    function Ao(t, e) { if (!e) return !0; const { left: i, top: s, right: n, bottom: o } = t; return !(Re({ x: i, y: s }, e) || Re({ x: i, y: o }, e) || Re({ x: n, y: s }, e) || Re({ x: n, y: o }, e)) }

    function To(t, e, i) { const { left: n, top: o, right: a, bottom: r } = i, { backdropColor: l } = e; if (!s(l)) { const i = wi(e.borderRadius),
                s = ki(e.backdropPadding);
            t.fillStyle = l; const h = n - s.left,
                c = o - s.top,
                d = a - n + s.width,
                u = r - o + s.height;
            Object.values(i).some((t => 0 !== t)) ? (t.beginPath(), He(t, { x: h, y: c, w: d, h: u, radius: i }), t.fill()) : t.fillRect(h, c, d, u) } }

    function Lo(t, e, i, s) { const { ctx: n } = t; if (i) n.arc(t.xCenter, t.yCenter, e, 0, O);
        else { let i = t.getPointPosition(0, e);
            n.moveTo(i.x, i.y); for (let o = 1; o < s; o++) i = t.getPointPosition(o, e), n.lineTo(i.x, i.y) } }
    class Eo extends bo { static id = "radialLinear";
        static defaults = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 }, grid: { circular: !1 }, startAngle: 0, ticks: { showLabelBackdrop: !0, callback: ae.formatters.numeric }, pointLabels: { backdropColor: void 0, backdropPadding: 2, display: !0, font: { size: 10 }, callback: t => t, padding: 5, centerPointLabels: !1 } };
        static defaultRoutes = { "angleLines.color": "borderColor", "pointLabels.color": "color", "ticks.color": "color" };
        static descriptors = { angleLines: { _fallback: "grid" } };
        constructor(t) { super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [] }
        setDimensions() { const t = this._padding = ki(So(this.options) / 2),
                e = this.width = this.maxWidth - t.width,
                i = this.height = this.maxHeight - t.height;
            this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2) }
        determineDataLimits() { const { min: t, max: e } = this.getMinMax(!1);
            this.min = a(t) && !isNaN(t) ? t : 0, this.max = a(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions() }
        computeTickLimit() { return Math.ceil(this.drawingArea / So(this.options)) }
        generateTickLabels(t) { bo.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(((t, e) => { const i = d(this.options.pointLabels.callback, [t, e], this); return i || 0 === i ? i : "" })).filter(((t, e) => this.chart.getDataVisibility(e))) }
        fit() { const t = this.options;
            t.display && t.pointLabels.display ? function Do(t) { const e = { l: t.left + t._padding.left, r: t.right - t._padding.right, t: t.top + t._padding.top, b: t.bottom - t._padding.bottom },
                    i = Object.assign({}, e),
                    s = [],
                    o = [],
                    a = t._pointLabels.length,
                    r = t.options.pointLabels,
                    l = r.centerPointLabels ? C / a : 0; for (let u = 0; u < a; u++) { const a = r.setContext(t.getPointLabelContext(u));
                    o[u] = a.padding; const f = t.getPointPosition(u, t.drawingArea + o[u], l),
                        g = Si(a.font),
                        p = (h = t.ctx, c = g, d = n(d = t._pointLabels[u]) ? d : [d], { w: Oe(h, c.string, d), h: d.length * c.lineHeight });
                    s[u] = p; const m = G(t.getIndexAngle(u) + l),
                        b = Math.round(Y(m));
                    Co(i, e, m, Po(b, f.x, p.w, 0, 180), Po(b, f.y, p.h, 90, 270)) } var h, c, d;
                t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function(t, e, i) { const s = [],
                        n = t._pointLabels.length,
                        o = t.options,
                        { centerPointLabels: a, display: r } = o.pointLabels,
                        l = { extra: So(o) / 2, additionalAngle: a ? C / n : 0 }; let h; for (let o = 0; o < n; o++) { l.padding = i[o], l.size = e[o]; const n = Oo(t, o, l);
                        s.push(n), "auto" === r && (n.visible = Ao(n, h), n.visible && (h = n)) } return s }(t, s, o) }(this) : this.setCenterPoint(0, 0, 0, 0) }
        setCenterPoint(t, e, i, s) { this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s)) }
        getIndexAngle(t) { return G(t * (O / (this._pointLabels.length || 1)) + $(this.options.startAngle || 0)) }
        getDistanceFromCenterForValue(t) { if (s(t)) return NaN; const e = this.drawingArea / (this.max - this.min); return this.options.reverse ? (this.max - t) * e : (t - this.min) * e }
        getValueForDistanceFromCenter(t) { if (s(t)) return NaN; const e = t / (this.drawingArea / (this.max - this.min)); return this.options.reverse ? this.max - e : this.min + e }
        getPointLabelContext(t) { const e = this._pointLabels || []; if (t >= 0 && t < e.length) { const i = e[t]; return function(t, e, i) { return Ci(t, { label: i, index: e, type: "pointLabel" }) }(this.getContext(), t, i) } }
        getPointPosition(t, e, i = 0) { const s = this.getIndexAngle(t) - E + i; return { x: Math.cos(s) * e + this.xCenter, y: Math.sin(s) * e + this.yCenter, angle: s } }
        getPointPositionForValue(t, e) { return this.getPointPosition(t, this.getDistanceFromCenterForValue(e)) }
        getBasePosition(t) { return this.getPointPositionForValue(t || 0, this.getBaseValue()) }
        getPointLabelPosition(t) { const { left: e, top: i, right: s, bottom: n } = this._pointLabelItems[t]; return { left: e, top: i, right: s, bottom: n } }
        drawBackground() { const { backgroundColor: t, grid: { circular: e } } = this.options; if (t) { const i = this.ctx;
                i.save(), i.beginPath(), Lo(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore() } }
        drawGrid() { const t = this.ctx,
                e = this.options,
                { angleLines: i, grid: s, border: n } = e,
                o = this._pointLabels.length; let a, r, l; if (e.pointLabels.display && function(t, e) { const { ctx: i, options: { pointLabels: s } } = t; for (let n = e - 1; n >= 0; n--) { const e = t._pointLabelItems[n]; if (!e.visible) continue; const o = s.setContext(t.getPointLabelContext(n));
                        To(i, o, e); const a = Si(o.font),
                            { x: r, y: l, textAlign: h } = e;
                        Ne(i, t._pointLabels[n], r, l + a.lineHeight / 2, a, { color: o.color, textAlign: h, textBaseline: "middle" }) } }(this, o), s.display && this.ticks.forEach(((t, e) => { if (0 !== e) { r = this.getDistanceFromCenterForValue(t.value); const i = this.getContext(e),
                            a = s.setContext(i),
                            l = n.setContext(i);! function(t, e, i, s, n) { const o = t.ctx,
                                a = e.circular,
                                { color: r, lineWidth: l } = e;!a && !s || !r || !l || i < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), Lo(t, i, a, s), o.closePath(), o.stroke(), o.restore()) }(this, a, r, o, l) } })), i.display) { for (t.save(), a = o - 1; a >= 0; a--) { const s = i.setContext(this.getPointLabelContext(a)),
                        { color: n, lineWidth: o } = s;
                    o && n && (t.lineWidth = o, t.strokeStyle = n, t.setLineDash(s.borderDash), t.lineDashOffset = s.borderDashOffset, r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(a, r), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke()) }
                t.restore() } }
        drawBorder() {}
        drawLabels() { const t = this.ctx,
                e = this.options,
                i = e.ticks; if (!i.display) return; const s = this.getIndexAngle(0); let n, o;
            t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach(((s, a) => { if (0 === a && !e.reverse) return; const r = i.setContext(this.getContext(a)),
                    l = Si(r.font); if (n = this.getDistanceFromCenterForValue(this.ticks[a].value), r.showLabelBackdrop) { t.font = l.string, o = t.measureText(s.label).width, t.fillStyle = r.backdropColor; const e = ki(r.backdropPadding);
                    t.fillRect(-o / 2 - e.left, -n - l.size / 2 - e.top, o + e.width, l.size + e.height) }
                Ne(t, s.label, 0, -n, l, { color: r.color, strokeColor: r.textStrokeColor, strokeWidth: r.textStrokeWidth }) })), t.restore() }
        drawTitle() {} } const Ro = { millisecond: { common: !0, size: 1, steps: 1e3 }, second: { common: !0, size: 1e3, steps: 60 }, minute: { common: !0, size: 6e4, steps: 60 }, hour: { common: !0, size: 36e5, steps: 24 }, day: { common: !0, size: 864e5, steps: 30 }, week: { common: !1, size: 6048e5, steps: 4 }, month: { common: !0, size: 2628e6, steps: 12 }, quarter: { common: !1, size: 7884e6, steps: 4 }, year: { common: !0, size: 3154e7 } },
        Io = Object.keys(Ro);

    function zo(t, e) { return t - e }

    function Fo(t, e) { if (s(e)) return null; const i = t._adapter,
            { parser: n, round: o, isoWeekday: r } = t._parseOpts; let l = e; return "function" == typeof n && (l = n(l)), a(l) || (l = "string" == typeof n ? i.parse(l, n) : i.parse(l)), null === l ? null : (o && (l = "week" !== o || !N(r) && !0 !== r ? i.startOf(l, o) : i.startOf(l, "isoWeek", r)), +l) }

    function Vo(t, e, i, s) { const n = Io.length; for (let o = Io.indexOf(t); o < n - 1; ++o) { const t = Ro[Io[o]],
                n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER; if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return Io[o] } return Io[n - 1] }

    function Bo(t, e, i) { if (i) { if (i.length) { const { lo: s, hi: n } = et(i, e);
                t[i[s] >= e ? i[s] : i[n]] = !0 } } else t[e] = !0 }

    function Wo(t, e, i) { const s = [],
            n = {},
            o = e.length; let a, r; for (a = 0; a < o; ++a) r = e[a], n[r] = a, s.push({ value: r, major: !1 }); return 0 !== o && i ? function(t, e, i, s) { const n = t._adapter,
                o = +n.startOf(e[0].value, s),
                a = e[e.length - 1].value; let r, l; for (r = o; r <= a; r = +n.add(r, 1, s)) l = i[r], l >= 0 && (e[l].major = !0); return e }(t, s, n, i) : s }
    class No extends Js { static id = "time";
        static defaults = { bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { source: "auto", callback: !1, major: { enabled: !1 } } };
        constructor(t) { super(t), this._cache = { data: [], labels: [], all: [] }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0 }
        init(t, e = {}) { const i = t.time || (t.time = {}),
                s = this._adapter = new Rn._date(t.adapters.date);
            s.init(e), x(i.displayFormats, s.formats()), this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }, super.init(t), this._normalized = e.normalized }
        parse(t, e) { return void 0 === t ? null : Fo(this, t) }
        beforeLayout() { super.beforeLayout(), this._cache = { data: [], labels: [], all: [] } }
        determineDataLimits() { const t = this.options,
                e = this._adapter,
                i = t.time.unit || "day"; let { min: s, max: n, minDefined: o, maxDefined: r } = this.getUserBounds();

            function l(t) { o || isNaN(t.min) || (s = Math.min(s, t.min)), r || isNaN(t.max) || (n = Math.max(n, t.max)) }
            o && r || (l(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || l(this.getMinMax(!1))), s = a(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), n = a(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, n - 1), this.max = Math.max(s + 1, n) }
        _getLabelBounds() { const t = this.getLabelTimestamps(); let e = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY; return t.length && (e = t[0], i = t[t.length - 1]), { min: e, max: i } }
        buildTicks() { const t = this.options,
                e = t.time,
                i = t.ticks,
                s = "labels" === i.source ? this.getLabelTimestamps() : this._generate(); "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]); const n = this.min,
                o = nt(s, n, this.max); return this._unit = e.unit || (i.autoSkip ? Vo(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function(t, e, i, s, n) { for (let o = Io.length - 1; o >= Io.indexOf(i); o--) { const i = Io[o]; if (Ro[i].common && t._adapter.diff(n, s, i) >= e - 1) return i } return Io[i ? Io.indexOf(i) : 0] }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) { for (let e = Io.indexOf(t) + 1, i = Io.length; e < i; ++e)
                    if (Ro[Io[e]].common) return Io[e] }(this._unit) : void 0, this.initOffsets(s), t.reverse && o.reverse(), Wo(this, o, this._majorUnit) }
        afterAutoSkip() { this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t => +t.value))) }
        initOffsets(t = []) { let e, i, s = 0,
                n = 0;
            this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2); const o = t.length < 3 ? .5 : .25;
            s = J(s, 0, o), n = J(n, 0, o), this._offsets = { start: s, end: n, factor: 1 / (s + 1 + n) } }
        _generate() { const t = this._adapter,
                e = this.min,
                i = this.max,
                s = this.options,
                n = s.time,
                o = n.unit || Vo(n.minUnit, e, i, this._getLabelCapacity(e)),
                a = l(s.ticks.stepSize, 1),
                r = "week" === o && n.isoWeekday,
                h = N(r) || !0 === r,
                c = {}; let d, u, f = e; if (h && (f = +t.startOf(f, "isoWeek", r)), f = +t.startOf(f, h ? "day" : o), t.diff(i, e, o) > 1e5 * a) throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + o); const g = "data" === s.ticks.source && this.getDataTimestamps(); for (d = f, u = 0; d < i; d = +t.add(d, a, o), u++) Bo(c, d, g); return d !== i && "ticks" !== s.bounds && 1 !== u || Bo(c, d, g), Object.keys(c).sort(zo).map((t => +t)) }
        getLabelForValue(t) { const e = this._adapter,
                i = this.options.time; return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime) }
        format(t, e) { const i = this.options.time.displayFormats,
                s = this._unit,
                n = e || i[s]; return this._adapter.format(t, n) }
        _tickFormatFunction(t, e, i, s) { const n = this.options,
                o = n.ticks.callback; if (o) return d(o, [t, e, i], this); const a = n.time.displayFormats,
                r = this._unit,
                l = this._majorUnit,
                h = r && a[r],
                c = l && a[l],
                u = i[e],
                f = l && c && u && u.major; return this._adapter.format(t, s || (f ? c : h)) }
        generateTickLabels(t) { let e, i, s; for (e = 0, i = t.length; e < i; ++e) s = t[e], s.label = this._tickFormatFunction(s.value, e, t) }
        getDecimalForValue(t) { return null === t ? NaN : (t - this.min) / (this.max - this.min) }
        getPixelForValue(t) { const e = this._offsets,
                i = this.getDecimalForValue(t); return this.getPixelForDecimal((e.start + i) * e.factor) }
        getValueForPixel(t) { const e = this._offsets,
                i = this.getDecimalForPixel(t) / e.factor - e.end; return this.min + i * (this.max - this.min) }
        _getLabelSize(t) { const e = this.options.ticks,
                i = this.ctx.measureText(t).width,
                s = $(this.isHorizontal() ? e.maxRotation : e.minRotation),
                n = Math.cos(s),
                o = Math.sin(s),
                a = this._resolveTickFontOptions(0).size; return { w: i * n + a * o, h: i * o + a * n } }
        _getLabelCapacity(t) { const e = this.options.time,
                i = e.displayFormats,
                s = i[e.unit] || i.millisecond,
                n = this._tickFormatFunction(t, 0, Wo(this, [t], this._majorUnit), s),
                o = this._getLabelSize(n),
                a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1; return a > 0 ? a : 1 }
        getDataTimestamps() { let t, e, i = this._cache.data || []; if (i.length) return i; const s = this.getMatchingVisibleMetas(); if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this); for (t = 0, e = s.length; t < e; ++t) i = i.concat(s[t].controller.getAllParsedValues(this)); return this._cache.data = this.normalize(i) }
        getLabelTimestamps() { const t = this._cache.labels || []; let e, i; if (t.length) return t; const s = this.getLabels(); for (e = 0, i = s.length; e < i; ++e) t.push(Fo(this, s[e])); return this._cache.labels = this._normalized ? t : this.normalize(t) }
        normalize(t) { return lt(t.sort(zo)) } }

    function Ho(t, e, i) { let s, n, o, a, r = 0,
            l = t.length - 1;
        i ? (e >= t[r].pos && e <= t[l].pos && ({ lo: r, hi: l } = it(t, "pos", e)), ({ pos: s, time: o } = t[r]), ({ pos: n, time: a } = t[l])) : (e >= t[r].time && e <= t[l].time && ({ lo: r, hi: l } = it(t, "time", e)), ({ time: s, pos: o } = t[r]), ({ time: n, pos: a } = t[l])); const h = n - s; return h ? o + (a - o) * (e - s) / h : o } var jo = Object.freeze({ __proto__: null, CategoryScale: class extends Js { static id = "category";
            static defaults = { ticks: { callback: po } };
            constructor(t) { super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [] }
            init(t) { const e = this._addedLabels; if (e.length) { const t = this.getLabels(); for (const { index: i, label: s }
                        of e) t[i] === s && t.splice(i, 1);
                    this._addedLabels = [] }
                super.init(t) }
            parse(t, e) { if (s(t)) return null; const i = this.getLabels(); return ((t, e) => null === t ? null : J(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : function go(t, e, i, s) { const n = t.indexOf(e); return -1 === n ? ((t, e, i, s) => ("string" == typeof e ? (i = t.push(e) - 1, s.unshift({ index: i, label: e })) : isNaN(e) && (i = null), i))(t, e, i, s) : n !== t.lastIndexOf(e) ? i : n }(i, t, l(e, t), this._addedLabels), i.length - 1) }
            determineDataLimits() { const { minDefined: t, maxDefined: e } = this.getUserBounds(); let { min: i, max: s } = this.getMinMax(!0); "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s }
            buildTicks() { const t = this.min,
                    e = this.max,
                    i = this.options.offset,
                    s = []; let n = this.getLabels();
                n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this._valueRange = Math.max(n.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0); for (let i = t; i <= e; i++) s.push({ value: i }); return s }
            getLabelForValue(t) { return po.call(this, t) }
            configure() { super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels) }
            getPixelForValue(t) { return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange) }
            getPixelForTick(t) { const e = this.ticks; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value) }
            getValueForPixel(t) { return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange) }
            getBasePixel() { return this.bottom } }, LinearScale: xo, LogarithmicScale: ko, RadialLinearScale: Eo, TimeScale: No, TimeSeriesScale: class extends No { static id = "timeseries";
            static defaults = No.defaults;
            constructor(t) { super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0 }
            initOffsets() { const t = this._getTimestampsForTable(),
                    e = this._table = this.buildLookupTable(t);
                this._minPos = Ho(e, this.min), this._tableRange = Ho(e, this.max) - this._minPos, super.initOffsets(t) }
            buildLookupTable(t) { const { min: e, max: i } = this, s = [], n = []; let o, a, r, l, h; for (o = 0, a = t.length; o < a; ++o) l = t[o], l >= e && l <= i && s.push(l); if (s.length < 2) return [{ time: e, pos: 0 }, { time: i, pos: 1 }]; for (o = 0, a = s.length; o < a; ++o) h = s[o + 1], r = s[o - 1], l = s[o], Math.round((h + r) / 2) !== l && n.push({ time: l, pos: o / (a - 1) }); return n }
            _generate() { const t = this.min,
                    e = this.max; let i = super.getDataTimestamps(); return i.includes(t) && i.length || i.splice(0, 0, t), i.includes(e) && 1 !== i.length || i.push(e), i.sort(((t, e) => t - e)) }
            _getTimestampsForTable() { let t = this._cache.all || []; if (t.length) return t; const e = this.getDataTimestamps(),
                    i = this.getLabelTimestamps(); return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t, t }
            getDecimalForValue(t) { return (Ho(this._table, t) - this._minPos) / this._tableRange }
            getValueForPixel(t) { const e = this._offsets,
                    i = this.getDecimalForPixel(t) / e.factor - e.end; return Ho(this._table, i * this._tableRange + this._minPos, !0) } } }); const $o = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        Yo = $o.map((t => t.replace("rgb(", "rgba(").replace(")", ", 0.5)")));

    function Uo(t) { return $o[t % $o.length] }

    function Xo(t) { return Yo[t % Yo.length] }

    function Ko(t) { let e; for (e in t)
            if (t[e].borderColor || t[e].backgroundColor) return !0;
        return !1 } var Go = { id: "colors", defaults: { enabled: !0, forceOverride: !1 }, beforeLayout(t, e, i) { if (!i.enabled) return; const { data: { datasets: s }, options: n } = t.config, { elements: o } = n; if (!i.forceOverride && (Ko(s) || (a = n) && (a.borderColor || a.backgroundColor) || o && Ko(o))) return; var a; const r = function qo(t) { let e = 0; return (i, s) => { const n = t.getDatasetMeta(s).controller;
                    n instanceof jn ? e = function(t, e) { return t.backgroundColor = t.data.map((() => Uo(e++))), e }(i, e) : n instanceof $n ? e = function(t, e) { return t.backgroundColor = t.data.map((() => Xo(e++))), e }(i, e) : n && (e = function(t, e) { return t.borderColor = Uo(e), t.backgroundColor = Xo(e), ++e }(i, e)) } }(t);
            s.forEach(r) } };

    function Zo(t) { if (t._decimated) { const e = t._data;
            delete t._decimated, delete t._data, Object.defineProperty(t, "data", { configurable: !0, enumerable: !0, writable: !0, value: e }) } }

    function Jo(t) { t.data.datasets.forEach((t => { Zo(t) })) } var Qo = { id: "decimation", defaults: { algorithm: "min-max", enabled: !1 }, beforeElementsUpdate: (t, e, i) => { if (!i.enabled) return void Jo(t); const n = t.width;
            t.data.datasets.forEach(((e, o) => { const { _data: a, indexAxis: r } = e, l = t.getDatasetMeta(o), h = a || e.data; if ("y" === Pi([r, t.options.indexAxis])) return; if (!l.controller.supportsDecimation) return; const c = t.scales[l.xAxisID]; if ("linear" !== c.type && "time" !== c.type) return; if (t.options.parsing) return; let f, { start: d, count: u } = function(t, e) { const i = e.length; let s, n = 0; const { iScale: o } = t, { min: a, max: r, minDefined: l, maxDefined: h } = o.getUserBounds(); return l && (n = J(it(e, o.axis, a).lo, 0, i - 1)), s = h ? J(it(e, o.axis, r).hi + 1, n, i) - n : i - n, { start: n, count: s } }(l, h); if (u <= (i.threshold || 4 * n)) Zo(e);
                else { switch (s(a) && (e._data = h, delete e.data, Object.defineProperty(e, "data", { configurable: !0, enumerable: !0, get: function() { return this._decimated }, set: function(t) { this._data = t } })), i.algorithm) {
                        case "lttb":
                            f = function(t, e, i, s, n) { const o = n.samples || s; if (o >= i) return t.slice(e, e + i); const a = [],
                                    r = (i - 2) / (o - 2); let l = 0; const h = e + i - 1; let c, d, u, f, g, p = e; for (a[l++] = t[p], c = 0; c < o - 2; c++) { let s, n = 0,
                                        o = 0; const h = Math.floor((c + 1) * r) + 1 + e,
                                        m = Math.min(Math.floor((c + 2) * r) + 1, i) + e,
                                        b = m - h; for (s = h; s < m; s++) n += t[s].x, o += t[s].y;
                                    n /= b, o /= b; const x = Math.floor(c * r) + 1 + e,
                                        _ = Math.min(Math.floor((c + 1) * r) + 1, i) + e,
                                        { x: y, y: v } = t[p]; for (u = f = -1, s = x; s < _; s++) f = .5 * Math.abs((y - n) * (t[s].y - v) - (y - t[s].x) * (o - v)), f > u && (u = f, d = t[s], g = s);
                                    a[l++] = d, p = g } return a[l++] = t[h], a }(h, d, u, n, i); break;
                        case "min-max":
                            f = function(t, e, i, n) { let o, a, r, l, h, c, d, u, f, g, p = 0,
                                    m = 0; const b = [],
                                    x = e + i - 1,
                                    _ = t[e].x,
                                    y = t[x].x - _; for (o = e; o < e + i; ++o) { a = t[o], r = (a.x - _) / y * n, l = a.y; const e = 0 | r; if (e === h) l < f ? (f = l, c = o) : l > g && (g = l, d = o), p = (m * p + a.x) / ++m;
                                    else { const i = o - 1; if (!s(c) && !s(d)) { const e = Math.min(c, d),
                                                s = Math.max(c, d);
                                            e !== u && e !== i && b.push({...t[e], x: p }), s !== u && s !== i && b.push({...t[s], x: p }) }
                                        o > 0 && i !== u && b.push(t[i]), b.push(a), h = e, m = 0, f = g = l, c = d = u = o } } return b }(h, d, u, n); break;
                        default:
                            throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`) }
                    e._decimated = f } })) }, destroy(t) { Jo(t) } };

    function ta(t, e, i, s) { if (s) return; let n = e[t],
            o = i[t]; return "angle" === t && (n = G(n), o = G(o)), { property: t, start: n, end: o } }

    function ea(t, e, i) { for (; e > t; e--) { const t = i[e]; if (!isNaN(t.x) && !isNaN(t.y)) break } return e }

    function ia(t, e, i, s) { return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0 }

    function sa(t, e) { let i = [],
            s = !1; return n(t) ? (s = !0, i = t) : i = function(t, e) { const { x: i = null, y: s = null } = t || {}, n = e.points, o = []; return e.segments.forEach((({ start: t, end: e }) => { e = ea(t, e, n); const a = n[t],
                    r = n[e];
                null !== s ? (o.push({ x: a.x, y: s }), o.push({ x: r.x, y: s })) : null !== i && (o.push({ x: i, y: a.y }), o.push({ x: i, y: r.y })) })), o }(t, e), i.length ? new no({ points: i, options: { tension: 0 }, _loop: s, _fullLoop: s }) : null }

    function na(t) { return t && !1 !== t.fill }

    function oa(t, e, i) { let s = t[e].fill; const n = [e]; let o; if (!i) return s; for (; !1 !== s && -1 === n.indexOf(s);) { if (!a(s)) return s; if (o = t[s], !o) return !1; if (o.visible) return s;
            n.push(s), s = o.fill } return !1 }

    function aa(t, e, i) { const s = function(t) { const e = t.options,
                i = e.fill; let s = l(i && i.target, i); return void 0 === s && (s = !!e.backgroundColor), !1 !== s && null !== s && (!0 === s ? "origin" : s) }(t); if (o(s)) return !isNaN(s.value) && s; let n = parseFloat(s); return a(n) && Math.floor(n) === n ? function(t, e, i, s) { return "-" !== t && "+" !== t || (i = e + i), !(i === e || i < 0 || i >= s) && i }(s[0], e, n, i) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s }

    function ra(t, e, i) { const s = []; for (let n = 0; n < i.length; n++) { const o = i[n],
                { first: a, last: r, point: l } = la(o, e, "x"); if (!(!l || a && r))
                if (a) s.unshift(l);
                else if (t.push(l), !r) break }
        t.push(...s) }

    function la(t, e, i) { const s = t.interpolate(e, i); if (!s) return {}; const n = s[i],
            o = t.segments,
            a = t.points; let r = !1,
            l = !1; for (let t = 0; t < o.length; t++) { const e = o[t],
                s = a[e.start][i],
                h = a[e.end][i]; if (tt(n, s, h)) { r = n === s, l = n === h; break } } return { first: r, last: l, point: s } }
    class ha { constructor(t) { this.x = t.x, this.y = t.y, this.radius = t.radius }
        pathSegment(t, e, i) { const { x: s, y: n, radius: o } = this; return e = e || { start: 0, end: O }, t.arc(s, n, o, e.end, e.start, !0), !i.bounds }
        interpolate(t) { const { x: e, y: i, radius: s } = this, n = t.angle; return { x: e + Math.cos(n) * s, y: i + Math.sin(n) * s, angle: n } } }

    function ca(t) { const { chart: e, fill: i, line: s } = t; if (a(i)) return function(t, e) { const i = t.getDatasetMeta(e); return i && t.isDatasetVisible(e) ? i.dataset : null }(e, i); if ("stack" === i) return function(t) { const { scale: e, index: i, line: s } = t, n = [], o = s.segments, a = s.points, r = function(t, e) { const i = [],
                    s = t.getMatchingVisibleMetas("line"); for (let t = 0; t < s.length; t++) { const n = s[t]; if (n.index === e) break;
                    n.hidden || i.unshift(n.dataset) } return i }(e, i);
            r.push(sa({ x: null, y: e.bottom }, s)); for (let t = 0; t < o.length; t++) { const e = o[t]; for (let t = e.start; t <= e.end; t++) ra(n, a[t], r) } return new no({ points: n, options: {} }) }(t); if ("shape" === i) return !0; const n = function(t) { return (t.scale || {}).getPointPositionForValue ? function(t) { const { scale: e, fill: i } = t, s = e.options, n = e.getLabels().length, a = s.reverse ? e.max : e.min, r = function(t, e, i) { let s; return s = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : o(t) ? t.value : e.getBaseValue(), s }(i, e, a), l = []; if (s.grid.circular) { const t = e.getPointPositionForValue(0, a); return new ha({ x: t.x, y: t.y, radius: e.getDistanceFromCenterForValue(r) }) } for (let t = 0; t < n; ++t) l.push(e.getPointPositionForValue(t, r)); return l }(t) : function(t) { const { scale: e = {}, fill: i } = t, s = function(t, e) { let i = null; return "start" === t ? i = e.bottom : "end" === t ? i = e.top : o(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i }(i, e); if (a(s)) { const t = e.isHorizontal(); return { x: t ? s : null, y: t ? null : s } } return null }(t) }(t); return n instanceof ha ? n : sa(n, s) }

    function da(t, e, i) { const s = ca(e),
            { line: n, scale: o, axis: a } = e,
            r = n.options,
            l = r.fill,
            h = r.backgroundColor,
            { above: c = h, below: d = h } = l || {};
        s && n.points.length && (Ie(t, i), function(t, e) { const { line: i, target: s, above: n, below: o, area: a, scale: r } = e, l = i._loop ? "angle" : e.axis;
            t.save(), "x" === l && o !== n && (ua(t, s, a.top), fa(t, { line: i, target: s, color: n, scale: r, property: l }), t.restore(), t.save(), ua(t, s, a.bottom)), fa(t, { line: i, target: s, color: o, scale: r, property: l }), t.restore() }(t, { line: n, target: s, above: c, below: d, area: i, scale: o, axis: a }), ze(t)) }

    function ua(t, e, i) { const { segments: s, points: n } = e; let o = !0,
            a = !1;
        t.beginPath(); for (const r of s) { const { start: s, end: l } = r, h = n[s], c = n[ea(s, l, n)];
            o ? (t.moveTo(h.x, h.y), o = !1) : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)), a = !!e.pathSegment(t, r, { move: a }), a ? t.closePath() : t.lineTo(c.x, i) }
        t.lineTo(e.first().x, i), t.closePath(), t.clip() }

    function fa(t, e) { const { line: i, target: s, property: n, color: o, scale: a } = e, r = function(t, e, i) { const s = t.segments,
                n = t.points,
                o = e.points,
                a = []; for (const t of s) { let { start: s, end: r } = t;
                r = ea(s, r, n); const l = ta(i, n[s], n[r], t.loop); if (!e.segments) { a.push({ source: t, target: l, start: n[s], end: n[r] }); continue } const h = Ii(e, l); for (const e of h) { const s = ta(i, o[e.start], o[e.end], e.loop),
                        r = Ri(t, n, s); for (const t of r) a.push({ source: t, target: e, start: {
                            [i]: ia(l, s, "start", Math.max) }, end: {
                            [i]: ia(l, s, "end", Math.min) } }) } } return a }(i, s, n); for (const { source: e, target: l, start: h, end: c }
            of r) { const { style: { backgroundColor: r = o } = {} } = e, d = !0 !== s;
            t.save(), t.fillStyle = r, ga(t, a, d && ta(n, h, c)), t.beginPath(); const u = !!i.pathSegment(t, e); let f; if (d) { u ? t.closePath() : pa(t, s, c, n); const e = !!s.pathSegment(t, l, { move: u, reverse: !0 });
                f = u && e, f || pa(t, s, h, n) }
            t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore() } }

    function ga(t, e, i) { const { top: s, bottom: n } = e.chart.chartArea, { property: o, start: a, end: r } = i || {}; "x" === o && (t.beginPath(), t.rect(a, s, r - a, n - s), t.clip()) }

    function pa(t, e, i, s) { const n = e.interpolate(i, s);
        n && t.lineTo(n.x, n.y) } var ma = { id: "filler", afterDatasetsUpdate(t, e, i) { const s = (t.data.datasets || []).length,
                n = []; let o, a, r, l; for (a = 0; a < s; ++a) o = t.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof no && (l = { visible: t.isDatasetVisible(a), index: a, fill: aa(r, a, s), chart: t, axis: o.controller.options.indexAxis, scale: o.vScale, line: r }), o.$filler = l, n.push(l); for (a = 0; a < s; ++a) l = n[a], l && !1 !== l.fill && (l.fill = oa(n, a, i.propagate)) }, beforeDraw(t, e, i) { const s = "beforeDraw" === i.drawTime,
                n = t.getSortedVisibleDatasetMetas(),
                o = t.chartArea; for (let e = n.length - 1; e >= 0; --e) { const i = n[e].$filler;
                i && (i.line.updateControlPoints(o, i.axis), s && i.fill && da(t.ctx, i, o)) } }, beforeDatasetsDraw(t, e, i) { if ("beforeDatasetsDraw" !== i.drawTime) return; const s = t.getSortedVisibleDatasetMetas(); for (let e = s.length - 1; e >= 0; --e) { const i = s[e].$filler;
                na(i) && da(t.ctx, i, t.chartArea) } }, beforeDatasetDraw(t, e, i) { const s = e.meta.$filler;
            na(s) && "beforeDatasetDraw" === i.drawTime && da(t.ctx, s, t.chartArea) }, defaults: { propagate: !0, drawTime: "beforeDatasetDraw" } }; const ba = (t, e) => { let { boxHeight: i = e, boxWidth: s = e } = t; return t.usePointStyle && (i = Math.min(i, e), s = t.pointStyleWidth || Math.min(s, e)), { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) } };
    class xa extends Hs { constructor(t) { super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0 }
        update(t, e, i) { this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit() }
        setDimensions() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height) }
        buildLabels() { const t = this.options.labels || {}; let e = d(t.generateLabels, [this.chart], this) || [];
            t.filter && (e = e.filter((e => t.filter(e, this.chart.data)))), t.sort && (e = e.sort(((e, i) => t.sort(e, i, this.chart.data)))), this.options.reverse && e.reverse(), this.legendItems = e }
        fit() { const { options: t, ctx: e } = this; if (!t.display) return void(this.width = this.height = 0); const i = t.labels,
                s = Si(i.font),
                n = s.size,
                o = this._computeTitleHeight(),
                { boxWidth: a, itemHeight: r } = ba(i, n); let l, h;
            e.font = s.string, this.isHorizontal() ? (l = this.maxWidth, h = this._fitRows(o, n, a, r) + 10) : (h = this.maxHeight, l = this._fitCols(o, s, a, r) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight) }
        _fitRows(t, e, i, s) { const { ctx: n, maxWidth: o, options: { labels: { padding: a } } } = this, r = this.legendHitBoxes = [], l = this.lineWidths = [0], h = s + a; let c = t;
            n.textAlign = "left", n.textBaseline = "middle"; let d = -1,
                u = -h; return this.legendItems.forEach(((t, f) => { const g = i + e / 2 + n.measureText(t.text).width;
                (0 === f || l[l.length - 1] + g + 2 * a > o) && (c += h, l[l.length - (f > 0 ? 0 : 1)] = 0, u += h, d++), r[f] = { left: 0, top: u, row: d, width: g, height: s }, l[l.length - 1] += g + a })), c }
        _fitCols(t, e, i, s) { const { ctx: n, maxHeight: o, options: { labels: { padding: a } } } = this, r = this.legendHitBoxes = [], l = this.columnSizes = [], h = o - t; let c = a,
                d = 0,
                u = 0,
                f = 0,
                g = 0; return this.legendItems.forEach(((t, o) => { const { itemWidth: p, itemHeight: m } = function(t, e, i, s, n) { const o = function(t, e, i, s) { let n = t.text; return n && "string" != typeof n && (n = n.reduce(((t, e) => t.length > e.length ? t : e))), e + i.size / 2 + s.measureText(n).width }(s, t, e, i),
                        a = function(t, e, i) { let s = t; return "string" != typeof e.text && (s = _a(e, i)), s }(n, s, e.lineHeight); return { itemWidth: o, itemHeight: a } }(i, e, n, t, s);
                o > 0 && u + m + 2 * a > h && (c += d + a, l.push({ width: d, height: u }), f += d + a, g++, d = u = 0), r[o] = { left: f, top: u, col: g, width: p, height: m }, d = Math.max(d, p), u += m + a })), c += d, l.push({ width: d, height: u }), c }
        adjustHitBoxes() { if (!this.options.display) return; const t = this._computeTitleHeight(),
                { legendHitBoxes: e, options: { align: i, labels: { padding: s }, rtl: n } } = this,
                o = Oi(n, this.left, this.width); if (this.isHorizontal()) { let n = 0,
                    a = ft(i, this.left + s, this.right - this.lineWidths[n]); for (const r of e) n !== r.row && (n = r.row, a = ft(i, this.left + s, this.right - this.lineWidths[n])), r.top += this.top + t + s, r.left = o.leftForLtr(o.x(a), r.width), a += r.width + s } else { let n = 0,
                    a = ft(i, this.top + t + s, this.bottom - this.columnSizes[n].height); for (const r of e) r.col !== n && (n = r.col, a = ft(i, this.top + t + s, this.bottom - this.columnSizes[n].height)), r.top = a, r.left += this.left + s, r.left = o.leftForLtr(o.x(r.left), r.width), a += r.height + s } }
        isHorizontal() { return "top" === this.options.position || "bottom" === this.options.position }
        draw() { if (this.options.display) { const t = this.ctx;
                Ie(t, this), this._draw(), ze(t) } }
        _draw() { const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this, { align: n, labels: o } = t, a = ue.color, r = Oi(t.rtl, this.left, this.width), h = Si(o.font), { padding: c } = o, d = h.size, u = d / 2; let f;
            this.drawTitle(), s.textAlign = r.textAlign("left"), s.textBaseline = "middle", s.lineWidth = .5, s.font = h.string; const { boxWidth: g, boxHeight: p, itemHeight: m } = ba(o, d), b = this.isHorizontal(), x = this._computeTitleHeight();
            f = b ? { x: ft(n, this.left + c, this.right - i[0]), y: this.top + c + x, line: 0 } : { x: this.left + c, y: ft(n, this.top + x + c, this.bottom - e[0].height), line: 0 }, Ai(this.ctx, t.textDirection); const _ = m + c;
            this.legendItems.forEach(((y, v) => { s.strokeStyle = y.fontColor, s.fillStyle = y.fontColor; const M = s.measureText(y.text).width,
                    w = r.textAlign(y.textAlign || (y.textAlign = o.textAlign)),
                    k = g + u + M; let S = f.x,
                    P = f.y; if (r.setWidth(this.width), b ? v > 0 && S + k + c > this.right && (P = f.y += _, f.line++, S = f.x = ft(n, this.left + c, this.right - i[f.line])) : v > 0 && P + _ > this.bottom && (S = f.x = S + e[f.line].width + c, f.line++, P = f.y = ft(n, this.top + x + c, this.bottom - e[f.line].height)), function(t, e, i) { if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
                        s.save(); const n = l(i.lineWidth, 1); if (s.fillStyle = l(i.fillStyle, a), s.lineCap = l(i.lineCap, "butt"), s.lineDashOffset = l(i.lineDashOffset, 0), s.lineJoin = l(i.lineJoin, "miter"), s.lineWidth = n, s.strokeStyle = l(i.strokeStyle, a), s.setLineDash(l(i.lineDash, [])), o.usePointStyle) { const a = { radius: p * Math.SQRT2 / 2, pointStyle: i.pointStyle, rotation: i.rotation, borderWidth: n },
                                l = r.xPlus(t, g / 2);
                            Ee(s, a, l, e + u, o.pointStyleWidth && g) } else { const o = e + Math.max((d - p) / 2, 0),
                                a = r.leftForLtr(t, g),
                                l = wi(i.borderRadius);
                            s.beginPath(), Object.values(l).some((t => 0 !== t)) ? He(s, { x: a, y: o, w: g, h: p, radius: l }) : s.rect(a, o, g, p), s.fill(), 0 !== n && s.stroke() }
                        s.restore() }(r.x(S), P, y), S = gt(w, S + g + u, b ? S + k : this.right, t.rtl), function(t, e, i) { Ne(s, i.text, t, e + m / 2, h, { strikethrough: i.hidden, textAlign: r.textAlign(i.textAlign) }) }(r.x(S), P, y), b) f.x += k + c;
                else if ("string" != typeof y.text) { const t = h.lineHeight;
                    f.y += _a(y, t) + c } else f.y += _ })), Ti(this.ctx, t.textDirection) }
        drawTitle() { const t = this.options,
                e = t.title,
                i = Si(e.font),
                s = ki(e.padding); if (!e.display) return; const n = Oi(t.rtl, this.left, this.width),
                o = this.ctx,
                a = e.position,
                r = i.size / 2,
                l = s.top + r; let h, c = this.left,
                d = this.width; if (this.isHorizontal()) d = Math.max(...this.lineWidths), h = this.top + l, c = ft(t.align, c, this.right - d);
            else { const e = this.columnSizes.reduce(((t, e) => Math.max(t, e.height)), 0);
                h = l + ft(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight()) } const u = ft(a, c, c + d);
            o.textAlign = n.textAlign(ut(a)), o.textBaseline = "middle", o.strokeStyle = e.color, o.fillStyle = e.color, o.font = i.string, Ne(o, e.text, u, h, i) }
        _computeTitleHeight() { const t = this.options.title,
                e = Si(t.font),
                i = ki(t.padding); return t.display ? e.lineHeight + i.height : 0 }
        _getLegendItemAt(t, e) { let i, s, n; if (tt(t, this.left, this.right) && tt(e, this.top, this.bottom))
                for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)
                    if (s = n[i], tt(t, s.left, s.left + s.width) && tt(e, s.top, s.top + s.height)) return this.legendItems[i];
            return null }
        handleEvent(t) { const e = this.options; if (! function(t, e) { return !("mousemove" !== t && "mouseout" !== t || !e.onHover && !e.onLeave) || !(!e.onClick || "click" !== t && "mouseup" !== t) }(t.type, e)) return; const i = this._getLegendItemAt(t.x, t.y); if ("mousemove" === t.type || "mouseout" === t.type) { const o = this._hoveredItem,
                    a = (n = i, null !== (s = o) && null !== n && s.datasetIndex === n.datasetIndex && s.index === n.index);
                o && !a && d(e.onLeave, [t, o, this], this), this._hoveredItem = i, i && !a && d(e.onHover, [t, i, this], this) } else i && d(e.onClick, [t, i, this], this); var s, n } }

    function _a(t, e) { return e * (t.text ? t.text.length : 0) } var ya = { id: "legend", _element: xa, start(t, e, i) { const s = t.legend = new xa({ ctx: t.ctx, options: i, chart: t });
            as.configure(t, s, i), as.addBox(t, s) }, stop(t) { as.removeBox(t, t.legend), delete t.legend }, beforeUpdate(t, e, i) { const s = t.legend;
            as.configure(t, s, i), s.options = i }, afterUpdate(t) { const e = t.legend;
            e.buildLabels(), e.adjustHitBoxes() }, afterEvent(t, e) { e.replay || t.legend.handleEvent(e.event) }, defaults: { display: !0, position: "top", align: "center", fullSize: !0, reverse: !1, weight: 1e3, onClick(t, e, i) { const s = e.datasetIndex,
                    n = i.chart;
                n.isDatasetVisible(s) ? (n.hide(s), e.hidden = !0) : (n.show(s), e.hidden = !1) }, onHover: null, onLeave: null, labels: { color: t => t.chart.options.color, boxWidth: 40, padding: 10, generateLabels(t) { const e = t.data.datasets,
                        { labels: { usePointStyle: i, pointStyle: s, textAlign: n, color: o, useBorderRadius: a, borderRadius: r } } = t.legend.options; return t._getSortedDatasetMetas().map((t => { const l = t.controller.getStyle(i ? 0 : void 0),
                            h = ki(l.borderWidth); return { text: e[t.index].label, fillStyle: l.backgroundColor, fontColor: o, hidden: !t.visible, lineCap: l.borderCapStyle, lineDash: l.borderDash, lineDashOffset: l.borderDashOffset, lineJoin: l.borderJoinStyle, lineWidth: (h.width + h.height) / 4, strokeStyle: l.borderColor, pointStyle: s || l.pointStyle, rotation: l.rotation, textAlign: n || l.textAlign, borderRadius: a && (r || l.borderRadius), datasetIndex: t.index } }), this) } }, title: { color: t => t.chart.options.color, display: !1, position: "center", text: "" } }, descriptors: { _scriptable: t => !t.startsWith("on"), labels: { _scriptable: t => !["generateLabels", "filter", "sort"].includes(t) } } };
    class va extends Hs { constructor(t) { super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0 }
        update(t, e) { const i = this.options; if (this.left = 0, this.top = 0, !i.display) return void(this.width = this.height = this.right = this.bottom = 0);
            this.width = this.right = t, this.height = this.bottom = e; const s = n(i.text) ? i.text.length : 1;
            this._padding = ki(i.padding); const o = s * Si(i.font).lineHeight + this._padding.height;
            this.isHorizontal() ? this.height = o : this.width = o }
        isHorizontal() { const t = this.options.position; return "top" === t || "bottom" === t }
        _drawArgs(t) { const { top: e, left: i, bottom: s, right: n, options: o } = this, a = o.align; let r, l, h, c = 0; return this.isHorizontal() ? (l = ft(a, i, n), h = e + t, r = n - i) : ("left" === o.position ? (l = i + t, h = ft(a, s, e), c = -.5 * C) : (l = n - t, h = ft(a, e, s), c = .5 * C), r = s - e), { titleX: l, titleY: h, maxWidth: r, rotation: c } }
        draw() { const t = this.ctx,
                e = this.options; if (!e.display) return; const i = Si(e.font),
                s = i.lineHeight / 2 + this._padding.top,
                { titleX: n, titleY: o, maxWidth: a, rotation: r } = this._drawArgs(s);
            Ne(t, e.text, 0, 0, i, { color: e.color, maxWidth: a, rotation: r, textAlign: ut(e.align), textBaseline: "middle", translation: [n, o] }) } } var Ma = { id: "title", _element: va, start(t, e, i) {! function(t, e) { const i = new va({ ctx: t.ctx, options: e, chart: t });
                as.configure(t, i, e), as.addBox(t, i), t.titleBlock = i }(t, i) }, stop(t) { const e = t.titleBlock;
            as.removeBox(t, e), delete t.titleBlock }, beforeUpdate(t, e, i) { const s = t.titleBlock;
            as.configure(t, s, i), s.options = i }, defaults: { align: "center", display: !1, font: { weight: "bold" }, fullSize: !0, padding: 10, position: "top", text: "", weight: 2e3 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: !0, _indexable: !1 } }; const wa = new WeakMap; var ka = { id: "subtitle", start(t, e, i) { const s = new va({ ctx: t.ctx, options: i, chart: t });
            as.configure(t, s, i), as.addBox(t, s), wa.set(t, s) }, stop(t) { as.removeBox(t, wa.get(t)), wa.delete(t) }, beforeUpdate(t, e, i) { const s = wa.get(t);
            as.configure(t, s, i), s.options = i }, defaults: { align: "center", display: !1, font: { weight: "normal" }, fullSize: !0, padding: 0, position: "top", text: "", weight: 1500 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: !0, _indexable: !1 } }; const Sa = { average(t) { if (!t.length) return !1; let e, i, s = 0,
                n = 0,
                o = 0; for (e = 0, i = t.length; e < i; ++e) { const i = t[e].element; if (i && i.hasValue()) { const t = i.tooltipPosition();
                    s += t.x, n += t.y, ++o } } return { x: s / o, y: n / o } }, nearest(t, e) { if (!t.length) return !1; let i, s, n, o = e.x,
                a = e.y,
                r = Number.POSITIVE_INFINITY; for (i = 0, s = t.length; i < s; ++i) { const s = t[i].element; if (s && s.hasValue()) { const t = q(e, s.getCenterPoint());
                    t < r && (r = t, n = s) } } if (n) { const t = n.tooltipPosition();
                o = t.x, a = t.y } return { x: o, y: a } } };

    function Pa(t, e) { return e && (n(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t }

    function Da(t) { return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t }

    function Ca(t, e) { const { element: i, datasetIndex: s, index: n } = e, o = t.getDatasetMeta(s).controller, { label: a, value: r } = o.getLabelAndValue(n); return { chart: t, label: a, parsed: o.getParsed(n), raw: t.data.datasets[s].data[n], formattedValue: r, dataset: o.getDataset(), dataIndex: n, datasetIndex: s, element: i } }

    function Oa(t, e) { const i = t.chart.ctx,
            { body: s, footer: n, title: o } = t,
            { boxWidth: a, boxHeight: r } = e,
            l = Si(e.bodyFont),
            h = Si(e.titleFont),
            c = Si(e.footerFont),
            d = o.length,
            f = n.length,
            g = s.length,
            p = ki(e.padding); let m = p.height,
            b = 0,
            x = s.reduce(((t, e) => t + e.before.length + e.lines.length + e.after.length), 0);
        x += t.beforeBody.length + t.afterBody.length, d && (m += d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), x && (m += g * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (x - g) * l.lineHeight + (x - 1) * e.bodySpacing), f && (m += e.footerMarginTop + f * c.lineHeight + (f - 1) * e.footerSpacing); let _ = 0; const y = function(t) { b = Math.max(b, i.measureText(t).width + _) }; return i.save(), i.font = h.string, u(t.title, y), i.font = l.string, u(t.beforeBody.concat(t.afterBody), y), _ = e.displayColors ? a + 2 + e.boxPadding : 0, u(s, (t => { u(t.before, y), u(t.lines, y), u(t.after, y) })), _ = 0, i.font = c.string, u(t.footer, y), i.restore(), b += p.width, { width: b, height: m } }

    function Aa(t, e, i, s) { const { x: n, width: o } = i, { width: a, chartArea: { left: r, right: l } } = t; let h = "center"; return "center" === s ? h = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? h = "left" : n >= a - o / 2 && (h = "right"),
            function(t, e, i, s) { const { x: n, width: o } = s, a = i.caretSize + i.caretPadding; return "left" === t && n + o + a > e.width || "right" === t && n - o - a < 0 || void 0 }(h, t, e, i) && (h = "center"), h }

    function Ta(t, e, i) { const s = i.yAlign || e.yAlign || function(t, e) { const { y: i, height: s } = e; return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center" }(t, i); return { xAlign: i.xAlign || e.xAlign || Aa(t, e, i, s), yAlign: s } }

    function La(t, e, i, s) { const { caretSize: n, caretPadding: o, cornerRadius: a } = t, { xAlign: r, yAlign: l } = i, h = n + o, { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = wi(a); let g = function(t, e) { let { x: i, width: s } = t; return "right" === e ? i -= s : "center" === e && (i -= s / 2), i }(e, r); const p = function(t, e, i) { let { y: s, height: n } = t; return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s }(e, l, h); return "center" === l ? "left" === r ? g += h : "right" === r && (g -= h) : "left" === r ? g -= Math.max(c, u) + n : "right" === r && (g += Math.max(d, f) + n), { x: J(g, 0, s.width - e.width), y: J(p, 0, s.height - e.height) } }

    function Ea(t, e, i) { const s = ki(i.padding); return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left }

    function Ra(t) { return Pa([], Da(t)) }

    function Ia(t, e) { const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks; return i ? t.override(i) : t } const za = { beforeTitle: e, title(t) { if (t.length > 0) { const e = t[0],
                    i = e.chart.data.labels,
                    s = i ? i.length : 0; if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || ""; if (e.label) return e.label; if (s > 0 && e.dataIndex < s) return i[e.dataIndex] } return "" }, afterTitle: e, beforeBody: e, beforeLabel: e, label(t) { if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue; let e = t.dataset.label || "";
            e && (e += ": "); const i = t.formattedValue; return s(i) || (e += i), e }, labelColor(t) { const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex); return { borderColor: e.borderColor, backgroundColor: e.backgroundColor, borderWidth: e.borderWidth, borderDash: e.borderDash, borderDashOffset: e.borderDashOffset, borderRadius: 0 } }, labelTextColor() { return this.options.bodyColor }, labelPointStyle(t) { const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex); return { pointStyle: e.pointStyle, rotation: e.rotation } }, afterLabel: e, afterBody: e, beforeFooter: e, footer: e, afterFooter: e };

    function Fa(t, e, i, s) { const n = t[e].call(i, s); return void 0 === n ? za[e].call(i, s) : n }
    class Va extends Hs { static positioners = Sa;
        constructor(t) { super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0 }
        initialize(t) { this.options = t, this._cachedAnimations = void 0, this.$context = void 0 }
        _resolveAnimations() { const t = this._cachedAnimations; if (t) return t; const e = this.chart,
                i = this.options.setContext(this.getContext()),
                s = i.enabled && e.options.animation && i.animations,
                n = new Os(this.chart, s); return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n }
        getContext() { return this.$context || (this.$context = (this, Ci(this.chart.getContext(), { tooltip: this, tooltipItems: this._tooltipItems, type: "tooltip" }))) }
        getTitle(t, e) { const { callbacks: i } = e, s = Fa(i, "beforeTitle", this, t), n = Fa(i, "title", this, t), o = Fa(i, "afterTitle", this, t); let a = []; return a = Pa(a, Da(s)), a = Pa(a, Da(n)), a = Pa(a, Da(o)), a }
        getBeforeBody(t, e) { return Ra(Fa(e.callbacks, "beforeBody", this, t)) }
        getBody(t, e) { const { callbacks: i } = e, s = []; return u(t, (t => { const e = { before: [], lines: [], after: [] },
                    n = Ia(i, t);
                Pa(e.before, Da(Fa(n, "beforeLabel", this, t))), Pa(e.lines, Fa(n, "label", this, t)), Pa(e.after, Da(Fa(n, "afterLabel", this, t))), s.push(e) })), s }
        getAfterBody(t, e) { return Ra(Fa(e.callbacks, "afterBody", this, t)) }
        getFooter(t, e) { const { callbacks: i } = e, s = Fa(i, "beforeFooter", this, t), n = Fa(i, "footer", this, t), o = Fa(i, "afterFooter", this, t); let a = []; return a = Pa(a, Da(s)), a = Pa(a, Da(n)), a = Pa(a, Da(o)), a }
        _createItems(t) { const e = this._active,
                i = this.chart.data,
                s = [],
                n = [],
                o = []; let a, r, l = []; for (a = 0, r = e.length; a < r; ++a) l.push(Ca(this.chart, e[a])); return t.filter && (l = l.filter(((e, s, n) => t.filter(e, s, n, i)))), t.itemSort && (l = l.sort(((e, s) => t.itemSort(e, s, i)))), u(l, (e => { const i = Ia(t.callbacks, e);
                s.push(Fa(i, "labelColor", this, e)), n.push(Fa(i, "labelPointStyle", this, e)), o.push(Fa(i, "labelTextColor", this, e)) })), this.labelColors = s, this.labelPointStyles = n, this.labelTextColors = o, this.dataPoints = l, l }
        update(t, e) { const i = this.options.setContext(this.getContext()),
                s = this._active; let n, o = []; if (s.length) { const t = Sa[i.position].call(this, s, this._eventPosition);
                o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i); const e = this._size = Oa(this, i),
                    a = Object.assign({}, t, e),
                    r = Ta(this.chart, i, a),
                    l = La(i, a, r, this.chart);
                this.xAlign = r.xAlign, this.yAlign = r.yAlign, n = { opacity: 1, x: l.x, y: l.y, width: e.width, height: e.height, caretX: t.x, caretY: t.y } } else 0 !== this.opacity && (n = { opacity: 0 });
            this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: e }) }
        drawCaret(t, e, i, s) { const n = this.getCaretPosition(t, i, s);
            e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3) }
        getCaretPosition(t, e, i) { const { xAlign: s, yAlign: n } = this, { caretSize: o, cornerRadius: a } = i, { topLeft: r, topRight: l, bottomLeft: h, bottomRight: c } = wi(a), { x: d, y: u } = t, { width: f, height: g } = e; let p, m, b, x, _, y; return "center" === n ? (_ = u + g / 2, "left" === s ? (p = d, m = p - o, x = _ + o, y = _ - o) : (p = d + f, m = p + o, x = _ - o, y = _ + o), b = p) : (m = "left" === s ? d + Math.max(r, h) + o : "right" === s ? d + f - Math.max(l, c) - o : this.caretX, "top" === n ? (x = u, _ = x - o, p = m - o, b = m + o) : (x = u + g, _ = x + o, p = m + o, b = m - o), y = x), { x1: p, x2: m, x3: b, y1: x, y2: _, y3: y } }
        drawTitle(t, e, i) { const s = this.title,
                n = s.length; let o, a, r; if (n) { const l = Oi(i.rtl, this.x, this.width); for (t.x = Ea(this, i.titleAlign, i), e.textAlign = l.textAlign(i.titleAlign), e.textBaseline = "middle", o = Si(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = o.string, r = 0; r < n; ++r) e.fillText(s[r], l.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + a, r + 1 === n && (t.y += i.titleMarginBottom - a) } }
        _drawColorBox(t, e, i, s, n) { const a = this.labelColors[i],
                r = this.labelPointStyles[i],
                { boxHeight: l, boxWidth: h } = n,
                c = Si(n.bodyFont),
                d = Ea(this, "left", n),
                u = s.x(d),
                f = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0,
                g = e.y + f; if (n.usePointStyle) { const e = { radius: Math.min(h, l) / 2, pointStyle: r.pointStyle, rotation: r.rotation, borderWidth: 1 },
                    i = s.leftForLtr(u, h) + h / 2,
                    o = g + l / 2;
                t.strokeStyle = n.multiKeyBackground, t.fillStyle = n.multiKeyBackground, Le(t, e, i, o), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Le(t, e, i, o) } else { t.lineWidth = o(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0; const e = s.leftForLtr(u, h),
                    i = s.leftForLtr(s.xPlus(u, 1), h - 2),
                    r = wi(a.borderRadius);
                Object.values(r).some((t => 0 !== t)) ? (t.beginPath(), t.fillStyle = n.multiKeyBackground, He(t, { x: e, y: g, w: h, h: l, radius: r }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), He(t, { x: i, y: g + 1, w: h - 2, h: l - 2, radius: r }), t.fill()) : (t.fillStyle = n.multiKeyBackground, t.fillRect(e, g, h, l), t.strokeRect(e, g, h, l), t.fillStyle = a.backgroundColor, t.fillRect(i, g + 1, h - 2, l - 2)) }
            t.fillStyle = this.labelTextColors[i] }
        drawBody(t, e, i) { const { body: s } = this, { bodySpacing: n, bodyAlign: o, displayColors: a, boxHeight: r, boxWidth: l, boxPadding: h } = i, c = Si(i.bodyFont); let d = c.lineHeight,
                f = 0; const g = Oi(i.rtl, this.x, this.width),
                p = function(i) { e.fillText(i, g.x(t.x + f), t.y + d / 2), t.y += d + n },
                m = g.textAlign(o); let b, x, _, y, v, M, w; for (e.textAlign = o, e.textBaseline = "middle", e.font = c.string, t.x = Ea(this, m, i), e.fillStyle = i.bodyColor, u(this.beforeBody, p), f = a && "right" !== m ? "center" === o ? l / 2 + h : l + 2 + h : 0, y = 0, M = s.length; y < M; ++y) { for (b = s[y], x = this.labelTextColors[y], e.fillStyle = x, u(b.before, p), _ = b.lines, a && _.length && (this._drawColorBox(e, t, y, g, i), d = Math.max(c.lineHeight, r)), v = 0, w = _.length; v < w; ++v) p(_[v]), d = c.lineHeight;
                u(b.after, p) }
            f = 0, d = c.lineHeight, u(this.afterBody, p), t.y -= n }
        drawFooter(t, e, i) { const s = this.footer,
                n = s.length; let o, a; if (n) { const r = Oi(i.rtl, this.x, this.width); for (t.x = Ea(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = r.textAlign(i.footerAlign), e.textBaseline = "middle", o = Si(i.footerFont), e.fillStyle = i.footerColor, e.font = o.string, a = 0; a < n; ++a) e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + i.footerSpacing } }
        drawBackground(t, e, i, s) { const { xAlign: n, yAlign: o } = this, { x: a, y: r } = t, { width: l, height: h } = i, { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = wi(s.cornerRadius);
            e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + c, r), "top" === o && this.drawCaret(t, e, i, s), e.lineTo(a + l - d, r), e.quadraticCurveTo(a + l, r, a + l, r + d), "center" === o && "right" === n && this.drawCaret(t, e, i, s), e.lineTo(a + l, r + h - f), e.quadraticCurveTo(a + l, r + h, a + l - f, r + h), "bottom" === o && this.drawCaret(t, e, i, s), e.lineTo(a + u, r + h), e.quadraticCurveTo(a, r + h, a, r + h - u), "center" === o && "left" === n && this.drawCaret(t, e, i, s), e.lineTo(a, r + c), e.quadraticCurveTo(a, r, a + c, r), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke() }
        _updateAnimationTarget(t) { const e = this.chart,
                i = this.$animations,
                s = i && i.x,
                n = i && i.y; if (s || n) { const i = Sa[t.position].call(this, this._active, this._eventPosition); if (!i) return; const o = this._size = Oa(this, t),
                    a = Object.assign({}, i, this._size),
                    r = Ta(e, t, a),
                    l = La(t, a, r, e);
                s._to === l.x && n._to === l.y || (this.xAlign = r.xAlign, this.yAlign = r.yAlign, this.width = o.width, this.height = o.height, this.caretX = i.x, this.caretY = i.y, this._resolveAnimations().update(this, l)) } }
        _willRender() { return !!this.opacity }
        draw(t) { const e = this.options.setContext(this.getContext()); let i = this.opacity; if (!i) return;
            this._updateAnimationTarget(e); const s = { width: this.width, height: this.height },
                n = { x: this.x, y: this.y };
            i = Math.abs(i) < .001 ? 0 : i; const o = ki(e.padding),
                a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(n, t, s, e), Ai(t, e.textDirection), n.y += o.top, this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), Ti(t, e.textDirection), t.restore()) }
        getActiveElements() { return this._active || [] }
        setActiveElements(t, e) { const i = this._active,
                s = t.map((({ datasetIndex: t, index: e }) => { const i = this.chart.getDatasetMeta(t); if (!i) throw new Error("Cannot find a dataset at index " + t); return { datasetIndex: t, element: i.data[e], index: e } })),
                n = !f(i, s),
                o = this._positionChanged(s, e);
            (n || o) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0)) }
        handleEvent(t, e, i = !0) { if (e && this._ignoreReplayEvents) return !1;
            this._ignoreReplayEvents = !1; const s = this.options,
                n = this._active || [],
                o = this._getActiveElements(t, n, e, i),
                a = this._positionChanged(o, t),
                r = e || !f(o, n) || a; return r && (this._active = o, (s.enabled || s.external) && (this._eventPosition = { x: t.x, y: t.y }, this.update(!0, e))), r }
        _getActiveElements(t, e, i, s) { const n = this.options; if ("mouseout" === t.type) return []; if (!s) return e.filter((t => this.chart.data.datasets[t.datasetIndex] && void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index))); const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i); return n.reverse && o.reverse(), o }
        _positionChanged(t, e) { const { caretX: i, caretY: s, options: n } = this, o = Sa[n.position].call(this, t, e); return !1 !== o && (i !== o.x || s !== o.y) } } var Ba = { id: "tooltip", _element: Va, positioners: Sa, afterInit(t, e, i) { i && (t.tooltip = new Va({ chart: t, options: i })) }, beforeUpdate(t, e, i) { t.tooltip && t.tooltip.initialize(i) }, reset(t, e, i) { t.tooltip && t.tooltip.initialize(i) }, afterDraw(t) { const e = t.tooltip; if (e && e._willRender()) { const i = { tooltip: e }; if (!1 === t.notifyPlugins("beforeTooltipDraw", {...i, cancelable: !0 })) return;
                e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i) } }, afterEvent(t, e) { if (t.tooltip) { const i = e.replay;
                t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0) } }, defaults: { enabled: !0, external: null, position: "average", backgroundColor: "rgba(0,0,0,0.8)", titleColor: "#fff", titleFont: { weight: "bold" }, titleSpacing: 2, titleMarginBottom: 6, titleAlign: "left", bodyColor: "#fff", bodySpacing: 2, bodyFont: {}, bodyAlign: "left", footerColor: "#fff", footerSpacing: 2, footerMarginTop: 6, footerFont: { weight: "bold" }, footerAlign: "left", padding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, boxHeight: (t, e) => e.bodyFont.size, boxWidth: (t, e) => e.bodyFont.size, multiKeyBackground: "#fff", displayColors: !0, boxPadding: 0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, animation: { duration: 400, easing: "easeOutQuart" }, animations: { numbers: { type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"] }, opacity: { easing: "linear", duration: 200 } }, callbacks: za }, defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" }, descriptors: { _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t, _indexable: !1, callbacks: { _scriptable: !1, _indexable: !1 }, animation: { _fallback: !1 }, animations: { _fallback: "animation" } }, additionalOptionScopes: ["interaction"] }; return An.register(Yn, jo, fo, t), An.helpers = {...Wi }, An._adapters = Rn, An.Animation = Cs, An.Animations = Os, An.animator = xt, An.controllers = en.controllers.items, An.DatasetController = Ns, An.Element = Hs, An.elements = fo, An.Interaction = Xi, An.layouts = as, An.platforms = Ss, An.Scale = Js, An.Ticks = ae, Object.assign(An, Yn, jo, fo, t, Ss), An.Chart = An, "undefined" != typeof window && (window.Chart = An), An })),
function() { "use strict"; var e = { 282: function(e, t, i) { Object.defineProperty(t, "__esModule", { value: !0 }), t.clearChoices = t.activateChoices = t.filterChoices = t.addChoice = void 0; var n = i(883);
                t.addChoice = function(e) { var t = e.value,
                        i = e.label,
                        r = e.id,
                        s = e.groupId,
                        o = e.disabled,
                        a = e.elementId,
                        c = e.customProperties,
                        l = e.placeholder,
                        h = e.keyCode; return { type: n.ACTION_TYPES.ADD_CHOICE, value: t, label: i, id: r, groupId: s, disabled: o, elementId: a, customProperties: c, placeholder: l, keyCode: h } }, t.filterChoices = function(e) { return { type: n.ACTION_TYPES.FILTER_CHOICES, results: e } }, t.activateChoices = function(e) { return void 0 === e && (e = !0), { type: n.ACTION_TYPES.ACTIVATE_CHOICES, active: e } }, t.clearChoices = function() { return { type: n.ACTION_TYPES.CLEAR_CHOICES } } }, 783: function(e, t, i) { Object.defineProperty(t, "__esModule", { value: !0 }), t.addGroup = void 0; var n = i(883);
                t.addGroup = function(e) { var t = e.value,
                        i = e.id,
                        r = e.active,
                        s = e.disabled; return { type: n.ACTION_TYPES.ADD_GROUP, value: t, id: i, active: r, disabled: s } } }, 464: function(e, t, i) { Object.defineProperty(t, "__esModule", { value: !0 }), t.highlightItem = t.removeItem = t.addItem = void 0; var n = i(883);
                t.addItem = function(e) { var t = e.value,
                        i = e.label,
                        r = e.id,
                        s = e.choiceId,
                        o = e.groupId,
                        a = e.customProperties,
                        c = e.placeholder,
                        l = e.keyCode; return { type: n.ACTION_TYPES.ADD_ITEM, value: t, label: i, id: r, choiceId: s, groupId: o, customProperties: a, placeholder: c, keyCode: l } }, t.removeItem = function(e, t) { return { type: n.ACTION_TYPES.REMOVE_ITEM, id: e, choiceId: t } }, t.highlightItem = function(e, t) { return { type: n.ACTION_TYPES.HIGHLIGHT_ITEM, id: e, highlighted: t } } }, 137: function(e, t, i) { Object.defineProperty(t, "__esModule", { value: !0 }), t.setIsLoading = t.resetTo = t.clearAll = void 0; var n = i(883);
                t.clearAll = function() { return { type: n.ACTION_TYPES.CLEAR_ALL } }, t.resetTo = function(e) { return { type: n.ACTION_TYPES.RESET_TO, state: e } }, t.setIsLoading = function(e) { return { type: n.ACTION_TYPES.SET_IS_LOADING, isLoading: e } } }, 373: function(e, t, i) { var n = this && this.__spreadArray || function(e, t, i) { if (i || 2 === arguments.length)
                            for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]); return e.concat(n || Array.prototype.slice.call(t)) },
                    r = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
                Object.defineProperty(t, "__esModule", { value: !0 }); var s = r(i(996)),
                    o = r(i(221)),
                    a = i(282),
                    c = i(783),
                    l = i(464),
                    h = i(137),
                    u = i(520),
                    d = i(883),
                    p = i(789),
                    f = i(799),
                    m = i(655),
                    v = r(i(744)),
                    g = r(i(686)),
                    _ = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
                    y = {},
                    E = function() {
                        function e(t, i) { void 0 === t && (t = "[data-choice]"), void 0 === i && (i = {}); var r = this;
                            void 0 === i.allowHTML && console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."), this.config = s.default.all([p.DEFAULT_CONFIG, e.defaults.options, i], { arrayMerge: function(e, t) { return n([], t, !0) } }); var o = (0, f.diff)(this.config, p.DEFAULT_CONFIG);
                            o.length && console.warn("Unknown config option(s) passed", o.join(", ")); var a = "string" == typeof t ? document.querySelector(t) : t; if (!(a instanceof HTMLInputElement || a instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple"); if (this._isTextElement = a.type === d.TEXT_TYPE, this._isSelectOneElement = a.type === d.SELECT_ONE_TYPE, this._isSelectMultipleElement = a.type === d.SELECT_MULTIPLE_TYPE, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes("".concat(this.config.renderSelectedChoices)) || (this.config.renderSelectedChoices = "auto"), i.addItemFilter && "function" != typeof i.addItemFilter) { var c = i.addItemFilter instanceof RegExp ? i.addItemFilter : new RegExp(i.addItemFilter);
                                this.config.addItemFilter = c.test.bind(c) } if (this._isTextElement ? this.passedElement = new u.WrappedInput({ element: a, classNames: this.config.classNames, delimiter: this.config.delimiter }) : this.passedElement = new u.WrappedSelect({ element: a, classNames: this.config.classNames, template: function(e) { return r._templates.option(e) } }), this.initialised = !1, this._store = new v.default, this._initialState = m.defaultState, this._currentState = m.defaultState, this._prevState = m.defaultState, this._currentValue = "", this._canSearch = !!this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = (0, f.generateId)(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) { var l = window.getComputedStyle(this.passedElement.element).direction;
                                l !== window.getComputedStyle(document.documentElement).direction && (this._direction = l) } if (this._idNames = { itemChoice: "item-choice" }, this._isSelectElement && (this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options), this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && this._isTextElement) { var h = this.passedElement.value.split(this.config.delimiter);
                                this._presetItems = this._presetItems.concat(h) } if (this.passedElement.options && this.passedElement.options.forEach((function(e) { r._presetChoices.push({ value: e.value, label: e.innerHTML, selected: !!e.selected, disabled: e.disabled || e.parentNode.disabled, placeholder: "" === e.value || e.hasAttribute("placeholder"), customProperties: (0, f.parseCustomProperties)(e.dataset.customProperties) }) })), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onSelectKey = this._onSelectKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised", { element: t }), void(this.initialised = !0);
                            this.init() } return Object.defineProperty(e, "defaults", { get: function() { return Object.preventExtensions({get options() { return y }, get templates() { return g.default } }) }, enumerable: !1, configurable: !0 }), e.prototype.init = function() { if (!this.initialised) { this._createTemplates(), this._createElements(), this._createStructure(), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0; var e = this.config.callbackOnInit;
                                e && "function" == typeof e && e.call(this) } }, e.prototype.destroy = function() { this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = g.default, this.initialised = !1) }, e.prototype.enable = function() { return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this }, e.prototype.disable = function() { return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this }, e.prototype.highlightItem = function(e, t) { if (void 0 === t && (t = !0), !e || !e.id) return this; var i = e.id,
                                n = e.groupId,
                                r = void 0 === n ? -1 : n,
                                s = e.value,
                                o = void 0 === s ? "" : s,
                                a = e.label,
                                c = void 0 === a ? "" : a,
                                h = r >= 0 ? this._store.getGroupById(r) : null; return this._store.dispatch((0, l.highlightItem)(i, !0)), t && this.passedElement.triggerEvent(d.EVENTS.highlightItem, { id: i, value: o, label: c, groupValue: h && h.value ? h.value : null }), this }, e.prototype.unhighlightItem = function(e) { if (!e || !e.id) return this; var t = e.id,
                                i = e.groupId,
                                n = void 0 === i ? -1 : i,
                                r = e.value,
                                s = void 0 === r ? "" : r,
                                o = e.label,
                                a = void 0 === o ? "" : o,
                                c = n >= 0 ? this._store.getGroupById(n) : null; return this._store.dispatch((0, l.highlightItem)(t, !1)), this.passedElement.triggerEvent(d.EVENTS.highlightItem, { id: t, value: s, label: a, groupValue: c && c.value ? c.value : null }), this }, e.prototype.highlightAll = function() { var e = this; return this._store.items.forEach((function(t) { return e.highlightItem(t) })), this }, e.prototype.unhighlightAll = function() { var e = this; return this._store.items.forEach((function(t) { return e.unhighlightItem(t) })), this }, e.prototype.removeActiveItemsByValue = function(e) { var t = this; return this._store.activeItems.filter((function(t) { return t.value === e })).forEach((function(e) { return t._removeItem(e) })), this }, e.prototype.removeActiveItems = function(e) { var t = this; return this._store.activeItems.filter((function(t) { return t.id !== e })).forEach((function(e) { return t._removeItem(e) })), this }, e.prototype.removeHighlightedItems = function(e) { var t = this; return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach((function(i) { t._removeItem(i), e && t._triggerChange(i.value) })), this }, e.prototype.showDropdown = function(e) { var t = this; return this.dropdown.isActive || requestAnimationFrame((function() { t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(d.EVENTS.showDropdown, {}) })), this }, e.prototype.hideDropdown = function(e) { var t = this; return this.dropdown.isActive ? (requestAnimationFrame((function() { t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(d.EVENTS.hideDropdown, {}) })), this) : this }, e.prototype.getValue = function(e) { void 0 === e && (e = !1); var t = this._store.activeItems.reduce((function(t, i) { var n = e ? i.value : i; return t.push(n), t }), []); return this._isSelectOneElement ? t[0] : t }, e.prototype.setValue = function(e) { var t = this; return this.initialised ? (e.forEach((function(e) { return t._setChoiceOrItem(e) })), this) : this }, e.prototype.setChoiceByValue = function(e) { var t = this; return !this.initialised || this._isTextElement || (Array.isArray(e) ? e : [e]).forEach((function(e) { return t._findAndSelectChoiceByValue(e) })), this }, e.prototype.setChoices = function(e, t, i, n) { var r = this; if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === i && (i = "label"), void 0 === n && (n = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices"); if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices"); if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects"); if (n && this.clearChoices(), "function" == typeof e) { var s = e(this); if ("function" == typeof Promise && s instanceof Promise) return new Promise((function(e) { return requestAnimationFrame(e) })).then((function() { return r._handleLoadingState(!0) })).then((function() { return s })).then((function(e) { return r.setChoices(e, t, i, n) })).catch((function(e) { r.config.silent || console.error(e) })).then((function() { return r._handleLoadingState(!1) })).then((function() { return r })); if (!Array.isArray(s)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof s)); return this.setChoices(s, t, i, !1) } if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices"); return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach((function(e) { if (e.choices) r._addGroup({ id: e.id ? parseInt("".concat(e.id), 10) : null, group: e, valueKey: t, labelKey: i });
                                else { var n = e;
                                    r._addChoice({ value: n[t], label: n[i], isSelected: !!n.selected, isDisabled: !!n.disabled, placeholder: !!n.placeholder, customProperties: n.customProperties }) } })), this._stopLoading(), this }, e.prototype.clearChoices = function() { return this._store.dispatch((0, a.clearChoices)()), this }, e.prototype.clearStore = function() { return this._store.dispatch((0, h.clearAll)()), this }, e.prototype.clearInput = function() { var e = !this._isSelectOneElement; return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))), this }, e.prototype._render = function() { if (!this._store.isLoading()) { this._currentState = this._store.state; var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                                    t = this._isSelectElement,
                                    i = this._currentState.items !== this._prevState.items;
                                e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState) } }, e.prototype._renderChoices = function() { var e = this,
                                t = this._store,
                                i = t.activeGroups,
                                n = t.activeChoices,
                                r = document.createDocumentFragment(); if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame((function() { return e.choiceList.scrollToTop() })), i.length >= 1 && !this._isSearching) { var s = n.filter((function(e) { return !0 === e.placeholder && -1 === e.groupId }));
                                s.length >= 1 && (r = this._createChoicesFragment(s, r)), r = this._createGroupsFragment(i, n, r) } else n.length >= 1 && (r = this._createChoicesFragment(n, r)); if (r.childNodes && r.childNodes.length > 0) { var o = this._store.activeItems,
                                    a = this._canAddItem(o, this.input.value); if (a.response) this.choiceList.append(r), this._highlightChoice();
                                else { var c = this._getTemplate("notice", a.notice);
                                    this.choiceList.append(c) } } else { var l = void 0;
                                c = void 0, this._isSearching ? (c = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l) } }, e.prototype._renderItems = function() { var e = this._store.activeItems || [];
                            this.itemList.clear(); var t = this._createItemsFragment(e);
                            t.childNodes && this.itemList.append(t) }, e.prototype._createGroupsFragment = function(e, t, i) { var n = this; return void 0 === i && (i = document.createDocumentFragment()), this.config.shouldSort && e.sort(this.config.sorter), e.forEach((function(e) { var r = function(e) { return t.filter((function(t) { return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected) })) }(e); if (r.length >= 1) { var s = n._getTemplate("choiceGroup", e);
                                    i.appendChild(s), n._createChoicesFragment(r, i, !0) } })), i }, e.prototype._createChoicesFragment = function(e, t, i) { var r = this;
                            void 0 === t && (t = document.createDocumentFragment()), void 0 === i && (i = !1); var s = this.config,
                                o = s.renderSelectedChoices,
                                a = s.searchResultLimit,
                                c = s.renderChoiceLimit,
                                l = this._isSearching ? f.sortByScore : this.config.sorter,
                                h = function(e) { if ("auto" !== o || r._isSelectOneElement || !e.selected) { var i = r._getTemplate("choice", e, r.config.itemSelectText);
                                        t.appendChild(i) } },
                                u = e; "auto" !== o || this._isSelectOneElement || (u = e.filter((function(e) { return !e.selected }))); var d = u.reduce((function(e, t) { return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e }), { placeholderChoices: [], normalChoices: [] }),
                                p = d.placeholderChoices,
                                m = d.normalChoices;
                            (this.config.shouldSort || this._isSearching) && m.sort(l); var v = u.length,
                                g = this._isSelectOneElement ? n(n([], p, !0), m, !0) : m;
                            this._isSearching ? v = a : c && c > 0 && !i && (v = c); for (var _ = 0; _ < v; _ += 1) g[_] && h(g[_]); return t }, e.prototype._createItemsFragment = function(e, t) { var i = this;
                            void 0 === t && (t = document.createDocumentFragment()); var n = this.config,
                                r = n.shouldSortItems,
                                s = n.sorter,
                                o = n.removeItemButton; return r && !this._isSelectOneElement && e.sort(s), this._isTextElement ? this.passedElement.value = e.map((function(e) { return e.value })).join(this.config.delimiter) : this.passedElement.options = e, e.forEach((function(e) { var n = i._getTemplate("item", e, o);
                                t.appendChild(n) })), t }, e.prototype._triggerChange = function(e) { null != e && this.passedElement.triggerEvent(d.EVENTS.change, { value: e }) }, e.prototype._selectPlaceholderChoice = function(e) { this._addItem({ value: e.value, label: e.label, choiceId: e.id, groupId: e.groupId, placeholder: e.placeholder }), this._triggerChange(e.value) }, e.prototype._handleButtonAction = function(e, t) { if (e && t && this.config.removeItems && this.config.removeItemButton) { var i = t.parentNode && t.parentNode.dataset.id,
                                    n = i && e.find((function(e) { return e.id === parseInt(i, 10) }));
                                n && (this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._store.placeholderChoice && this._selectPlaceholderChoice(this._store.placeholderChoice)) } }, e.prototype._handleItemAction = function(e, t, i) { var n = this; if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) { var r = t.dataset.id;
                                e.forEach((function(e) { e.id !== parseInt("".concat(r), 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e) })), this.input.focus() } }, e.prototype._handleChoiceAction = function(e, t) { if (e && t) { var i = t.dataset.id,
                                    n = i && this._store.getChoiceById(i); if (n) { var r = e[0] && e[0].keyCode ? e[0].keyCode : void 0,
                                        s = this.dropdown.isActive;
                                    n.keyCode = r, this.passedElement.triggerEvent(d.EVENTS.choice, { choice: n }), n.selected || n.disabled || this._canAddItem(e, n.value).response && (this._addItem({ value: n.value, label: n.label, choiceId: n.id, groupId: n.groupId, customProperties: n.customProperties, placeholder: n.placeholder, keyCode: n.keyCode }), this._triggerChange(n.value)), this.clearInput(), s && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus()) } } }, e.prototype._handleBackspace = function(e) { if (this.config.removeItems && e) { var t = e[e.length - 1],
                                    i = e.some((function(e) { return e.highlighted }));
                                this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0)) } }, e.prototype._startLoading = function() { this._store.dispatch((0, h.setIsLoading)(!0)) }, e.prototype._stopLoading = function() { this._store.dispatch((0, h.setIsLoading)(!1)) }, e.prototype._handleLoadingState = function(e) { void 0 === e && (e = !0); var t = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                            e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText)) && this.itemList.append(t) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t && (t.innerHTML = this._placeholderValue || "") : this.input.placeholder = this._placeholderValue || "") }, e.prototype._handleSearch = function(e) { if (this.input.isFocussed) { var t = this._store.choices,
                                    i = this.config,
                                    n = i.searchFloor,
                                    r = i.searchChoices,
                                    s = t.some((function(e) { return !e.active })); if (null != e && e.length >= n) { var o = r ? this._searchChoices(e) : 0;
                                    this.passedElement.triggerEvent(d.EVENTS.search, { value: e, resultCount: o }) } else s && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))) } }, e.prototype._canAddItem = function(e, t) { var i = !0,
                                n = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText; if (!this._isSelectOneElement) { var r = (0, f.existsInArray)(e, t);
                                this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && r && i && (i = !1, n = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (i = !1, n = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText) } return { response: i, notice: n } }, e.prototype._searchChoices = function(e) { var t = "string" == typeof e ? e.trim() : e,
                                i = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue; if (t.length < 1 && t === "".concat(i, " ")) return 0; var r = this._store.searchableChoices,
                                s = t,
                                c = Object.assign(this.config.fuseOptions, { keys: n([], this.config.searchFields, !0), includeMatches: !0 }),
                                l = new o.default(r, c).search(s); return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch((0, a.filterChoices)(l)), l.length }, e.prototype._addEventListeners = function() { var e = document.documentElement;
                            e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("click", this._onClick, { passive: !0 }), e.addEventListener("touchmove", this._onTouchMove, { passive: !0 }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, { passive: !0 }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, { passive: !0 }), this.containerOuter.element.addEventListener("blur", this._onBlur, { passive: !0 })), this.input.element.addEventListener("keyup", this._onKeyUp, { passive: !0 }), this.input.element.addEventListener("focus", this._onFocus, { passive: !0 }), this.input.element.addEventListener("blur", this._onBlur, { passive: !0 }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, { passive: !0 }), this.input.addEventListeners() }, e.prototype._removeEventListeners = function() { var e = document.documentElement;
                            e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners() }, e.prototype._onKeyDown = function(e) { var t = e.keyCode,
                                i = this._store.activeItems,
                                n = this.input.isFocussed,
                                r = this.dropdown.isActive,
                                s = this.itemList.hasChildren(),
                                o = String.fromCharCode(t),
                                a = /[^\x00-\x1F]/.test(o),
                                c = d.KEY_CODES.BACK_KEY,
                                l = d.KEY_CODES.DELETE_KEY,
                                h = d.KEY_CODES.ENTER_KEY,
                                u = d.KEY_CODES.A_KEY,
                                p = d.KEY_CODES.ESC_KEY,
                                f = d.KEY_CODES.UP_KEY,
                                m = d.KEY_CODES.DOWN_KEY,
                                v = d.KEY_CODES.PAGE_UP_KEY,
                                g = d.KEY_CODES.PAGE_DOWN_KEY; switch (this._isTextElement || r || !a || (this.showDropdown(), this.input.isFocussed || (this.input.value += e.key.toLowerCase())), t) {
                                case u:
                                    return this._onSelectKey(e, s);
                                case h:
                                    return this._onEnterKey(e, i, r);
                                case p:
                                    return this._onEscapeKey(r);
                                case f:
                                case v:
                                case m:
                                case g:
                                    return this._onDirectionKey(e, r);
                                case l:
                                case c:
                                    return this._onDeleteKey(e, i, n) } }, e.prototype._onKeyUp = function(e) { var t = e.target,
                                i = e.keyCode,
                                n = this.input.value,
                                r = this._store.activeItems,
                                s = this._canAddItem(r, n),
                                o = d.KEY_CODES.BACK_KEY,
                                c = d.KEY_CODES.DELETE_KEY; if (this._isTextElement)
                                if (s.notice && n) { var l = this._getTemplate("notice", s.notice);
                                    this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0) } else this.hideDropdown(!0);
                            else { var h = (i === o || i === c) && t && !t.value,
                                    u = !this._isTextElement && this._isSearching,
                                    p = this._canSearch && s.response;
                                h && u ? (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))) : p && this._handleSearch(this.input.rawValue) }
                            this._canSearch = this.config.searchEnabled }, e.prototype._onSelectKey = function(e, t) { var i = e.ctrlKey,
                                n = e.metaKey;
                            (i || n) && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll()) }, e.prototype._onEnterKey = function(e, t, i) { var n = e.target,
                                r = d.KEY_CODES.ENTER_KEY,
                                s = n && n.hasAttribute("data-button"); if (this._isTextElement && n && n.value) { var o = this.input.value;
                                this._canAddItem(t, o).response && (this.hideDropdown(!0), this._addItem({ value: o }), this._triggerChange(o), this.clearInput()) } if (s && (this._handleButtonAction(t, n), e.preventDefault()), i) { var a = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                                a && (t[0] && (t[0].keyCode = r), this._handleChoiceAction(t, a)), e.preventDefault() } else this._isSelectOneElement && (this.showDropdown(), e.preventDefault()) }, e.prototype._onEscapeKey = function(e) { e && (this.hideDropdown(!0), this.containerOuter.focus()) }, e.prototype._onDirectionKey = function(e, t) { var i = e.keyCode,
                                n = e.metaKey,
                                r = d.KEY_CODES.DOWN_KEY,
                                s = d.KEY_CODES.PAGE_UP_KEY,
                                o = d.KEY_CODES.PAGE_DOWN_KEY; if (t || this._isSelectOneElement) { this.showDropdown(), this._canSearch = !1; var a = i === r || i === o ? 1 : -1,
                                    c = "[data-choice-selectable]",
                                    l = void 0; if (n || i === o || i === s) l = a > 0 ? this.dropdown.element.querySelector("".concat(c, ":last-of-type")) : this.dropdown.element.querySelector(c);
                                else { var h = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                                    l = h ? (0, f.getAdjacentEl)(h, c, a) : this.dropdown.element.querySelector(c) }
                                l && ((0, f.isScrolledIntoView)(l, this.choiceList.element, a) || this.choiceList.scrollToChildElement(l, a), this._highlightChoice(l)), e.preventDefault() } }, e.prototype._onDeleteKey = function(e, t, i) { var n = e.target;
                            this._isSelectOneElement || n.value || !i || (this._handleBackspace(t), e.preventDefault()) }, e.prototype._onTouchMove = function() { this._wasTap && (this._wasTap = !1) }, e.prototype._onTouchEnd = function(e) { var t = (e || e.touches[0]).target;
                            this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation()), this._wasTap = !0 }, e.prototype._onMouseDown = function(e) { var t = e.target; if (t instanceof HTMLElement) { if (_ && this.choiceList.element.contains(t)) { var i = this.choiceList.element.firstElementChild,
                                        n = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft;
                                    this._isScrollingOnIe = n } if (t !== this.input.element) { var r = t.closest("[data-button],[data-item],[data-choice]"); if (r instanceof HTMLElement) { var s = e.shiftKey,
                                            o = this._store.activeItems,
                                            a = r.dataset; "button" in a ? this._handleButtonAction(o, r) : "item" in a ? this._handleItemAction(o, r, s) : "choice" in a && this._handleChoiceAction(o, r) }
                                    e.preventDefault() } } }, e.prototype._onMouseOver = function(e) { var t = e.target;
                            t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t) }, e.prototype._onClick = function(e) { var t = e.target;
                            this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0)) }, e.prototype._onFocus = function(e) { var t, i = this,
                                n = e.target;
                            n && this.containerOuter.element.contains(n) && ((t = {})[d.TEXT_TYPE] = function() { n === i.input.element && i.containerOuter.addFocusState() }, t[d.SELECT_ONE_TYPE] = function() { i.containerOuter.addFocusState(), n === i.input.element && i.showDropdown(!0) }, t[d.SELECT_MULTIPLE_TYPE] = function() { n === i.input.element && (i.showDropdown(!0), i.containerOuter.addFocusState()) }, t)[this.passedElement.element.type]() }, e.prototype._onBlur = function(e) { var t, i = this,
                                n = e.target; if (n && this.containerOuter.element.contains(n) && !this._isScrollingOnIe) { var r = this._store.activeItems.some((function(e) { return e.highlighted }));
                                ((t = {})[d.TEXT_TYPE] = function() { n === i.input.element && (i.containerOuter.removeFocusState(), r && i.unhighlightAll(), i.hideDropdown(!0)) }, t[d.SELECT_ONE_TYPE] = function() { i.containerOuter.removeFocusState(), (n === i.input.element || n === i.containerOuter.element && !i._canSearch) && i.hideDropdown(!0) }, t[d.SELECT_MULTIPLE_TYPE] = function() { n === i.input.element && (i.containerOuter.removeFocusState(), i.hideDropdown(!0), r && i.unhighlightAll()) }, t)[this.passedElement.element.type]() } else this._isScrollingOnIe = !1, this.input.element.focus() }, e.prototype._onFormReset = function() { this._store.dispatch((0, h.resetTo)(this._initialState)) }, e.prototype._highlightChoice = function(e) { var t = this;
                            void 0 === e && (e = null); var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]")); if (i.length) { var n = e;
                                Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach((function(e) { e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false") })), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(d.EVENTS.highlightChoice, { el: n }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id)) } }, e.prototype._addItem = function(e) { var t = e.value,
                                i = e.label,
                                n = void 0 === i ? null : i,
                                r = e.choiceId,
                                s = void 0 === r ? -1 : r,
                                o = e.groupId,
                                a = void 0 === o ? -1 : o,
                                c = e.customProperties,
                                h = void 0 === c ? {} : c,
                                u = e.placeholder,
                                p = void 0 !== u && u,
                                f = e.keyCode,
                                m = void 0 === f ? -1 : f,
                                v = "string" == typeof t ? t.trim() : t,
                                g = this._store.items,
                                _ = n || v,
                                y = s || -1,
                                E = a >= 0 ? this._store.getGroupById(a) : null,
                                b = g ? g.length + 1 : 1;
                            this.config.prependValue && (v = this.config.prependValue + v.toString()), this.config.appendValue && (v += this.config.appendValue.toString()), this._store.dispatch((0, l.addItem)({ value: v, label: _, id: b, choiceId: y, groupId: a, customProperties: h, placeholder: p, keyCode: m })), this._isSelectOneElement && this.removeActiveItems(b), this.passedElement.triggerEvent(d.EVENTS.addItem, { id: b, value: v, label: _, customProperties: h, groupValue: E && E.value ? E.value : null, keyCode: m }) }, e.prototype._removeItem = function(e) { var t = e.id,
                                i = e.value,
                                n = e.label,
                                r = e.customProperties,
                                s = e.choiceId,
                                o = e.groupId,
                                a = o && o >= 0 ? this._store.getGroupById(o) : null;
                            t && s && (this._store.dispatch((0, l.removeItem)(t, s)), this.passedElement.triggerEvent(d.EVENTS.removeItem, { id: t, value: i, label: n, customProperties: r, groupValue: a && a.value ? a.value : null })) }, e.prototype._addChoice = function(e) { var t = e.value,
                                i = e.label,
                                n = void 0 === i ? null : i,
                                r = e.isSelected,
                                s = void 0 !== r && r,
                                o = e.isDisabled,
                                c = void 0 !== o && o,
                                l = e.groupId,
                                h = void 0 === l ? -1 : l,
                                u = e.customProperties,
                                d = void 0 === u ? {} : u,
                                p = e.placeholder,
                                f = void 0 !== p && p,
                                m = e.keyCode,
                                v = void 0 === m ? -1 : m; if (null != t) { var g = this._store.choices,
                                    _ = n || t,
                                    y = g ? g.length + 1 : 1,
                                    E = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(y);
                                this._store.dispatch((0, a.addChoice)({ id: y, groupId: h, elementId: E, value: t, label: _, disabled: c, customProperties: d, placeholder: f, keyCode: v })), s && this._addItem({ value: t, label: _, choiceId: y, customProperties: d, placeholder: f, keyCode: v }) } }, e.prototype._addGroup = function(e) { var t = this,
                                i = e.group,
                                n = e.id,
                                r = e.valueKey,
                                s = void 0 === r ? "value" : r,
                                o = e.labelKey,
                                a = void 0 === o ? "label" : o,
                                l = (0, f.isType)("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
                                h = n || Math.floor((new Date).valueOf() * Math.random()),
                                u = !!i.disabled && i.disabled;
                            l ? (this._store.dispatch((0, c.addGroup)({ value: i.label, id: h, active: !0, disabled: u })), l.forEach((function(e) { var i = e.disabled || e.parentNode && e.parentNode.disabled;
                                t._addChoice({ value: e[s], label: (0, f.isType)("Object", e) ? e[a] : e.innerHTML, isSelected: e.selected, isDisabled: i, groupId: h, customProperties: e.customProperties, placeholder: e.placeholder }) }))) : this._store.dispatch((0, c.addGroup)({ value: i.label, id: i.id, active: !1, disabled: i.disabled })) }, e.prototype._getTemplate = function(e) { for (var t, i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r]; return (t = this._templates[e]).call.apply(t, n([this, this.config], i, !1)) }, e.prototype._createTemplates = function() { var e = this.config.callbackOnCreateTemplates,
                                t = {};
                            e && "function" == typeof e && (t = e.call(this, f.strToEl)), this._templates = (0, s.default)(g.default, t) }, e.prototype._createElements = function() { this.containerOuter = new u.Container({ element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId), classNames: this.config.classNames, type: this.passedElement.element.type, position: this.config.position }), this.containerInner = new u.Container({ element: this._getTemplate("containerInner"), classNames: this.config.classNames, type: this.passedElement.element.type, position: this.config.position }), this.input = new u.Input({ element: this._getTemplate("input", this._placeholderValue), classNames: this.config.classNames, type: this.passedElement.element.type, preventPaste: !this.config.paste }), this.choiceList = new u.List({ element: this._getTemplate("choiceList", this._isSelectOneElement) }), this.itemList = new u.List({ element: this._getTemplate("itemList", this._isSelectOneElement) }), this.dropdown = new u.Dropdown({ element: this._getTemplate("dropdown"), classNames: this.config.classNames, type: this.passedElement.element.type }) }, e.prototype._createStructure = function() { this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems) }, e.prototype._addPredefinedGroups = function(e) { var t = this,
                                i = this.passedElement.placeholderOption;
                            i && i.parentNode && "SELECT" === i.parentNode.tagName && this._addChoice({ value: i.value, label: i.innerHTML, isSelected: i.selected, isDisabled: i.disabled, placeholder: !0 }), e.forEach((function(e) { return t._addGroup({ group: e, id: e.id || null }) })) }, e.prototype._addPredefinedChoices = function(e) { var t = this;
                            this.config.shouldSort && e.sort(this.config.sorter); var i = e.some((function(e) { return e.selected })),
                                n = e.findIndex((function(e) { return void 0 === e.disabled || !e.disabled }));
                            e.forEach((function(e, r) { var s = e.value,
                                    o = void 0 === s ? "" : s,
                                    a = e.label,
                                    c = e.customProperties,
                                    l = e.placeholder; if (t._isSelectElement)
                                    if (e.choices) t._addGroup({ group: e, id: e.id || null });
                                    else { var h = !(!t._isSelectOneElement || i || r !== n) || e.selected,
                                            u = e.disabled;
                                        t._addChoice({ value: o, label: a, isSelected: !!h, isDisabled: !!u, placeholder: !!l, customProperties: c }) }
                                else t._addChoice({ value: o, label: a, isSelected: !!e.selected, isDisabled: !!e.disabled, placeholder: !!e.placeholder, customProperties: c }) })) }, e.prototype._addPredefinedItems = function(e) { var t = this;
                            e.forEach((function(e) { "object" == typeof e && e.value && t._addItem({ value: e.value, label: e.label, choiceId: e.id, customProperties: e.customProperties, placeholder: e.placeholder }), "string" == typeof e && t._addItem({ value: e }) })) }, e.prototype._setChoiceOrItem = function(e) { var t = this;
                            ({ object: function() { e.value && (t._isTextElement ? t._addItem({ value: e.value, label: e.label, choiceId: e.id, customProperties: e.customProperties, placeholder: e.placeholder }) : t._addChoice({ value: e.value, label: e.label, isSelected: !0, isDisabled: !1, customProperties: e.customProperties, placeholder: e.placeholder })) }, string: function() { t._isTextElement ? t._addItem({ value: e }) : t._addChoice({ value: e, label: e, isSelected: !0, isDisabled: !1 }) } })[(0, f.getType)(e).toLowerCase()]() }, e.prototype._findAndSelectChoiceByValue = function(e) { var t = this,
                                i = this._store.choices.find((function(i) { return t.config.valueComparer(i.value, e) }));
                            i && !i.selected && this._addItem({ value: i.value, label: i.label, choiceId: i.id, groupId: i.groupId, customProperties: i.customProperties, placeholder: i.placeholder, keyCode: i.keyCode }) }, e.prototype._generatePlaceholderValue = function() { if (this._isSelectElement && this.passedElement.placeholderOption) { var e = this.passedElement.placeholderOption; return e ? e.text : null } var t = this.config,
                                i = t.placeholder,
                                n = t.placeholderValue,
                                r = this.passedElement.element.dataset; if (i) { if (n) return n; if (r.placeholder) return r.placeholder } return null }, e }();
                t.default = E }, 613: function(e, t, i) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = i(799),
                    r = i(883),
                    s = function() {
                        function e(e) { var t = e.element,
                                i = e.type,
                                n = e.classNames,
                                r = e.position;
                            this.element = t, this.classNames = n, this.type = i, this.position = r, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this) } return e.prototype.addEventListeners = function() { this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur) }, e.prototype.removeEventListeners = function() { this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur) }, e.prototype.shouldFlip = function(e) { if ("number" != typeof e) return !1; var t = !1; return "auto" === this.position ? t = !window.matchMedia("(min-height: ".concat(e + 1, "px)")).matches : "top" === this.position && (t = !0), t }, e.prototype.setActiveDescendant = function(e) { this.element.setAttribute("aria-activedescendant", e) }, e.prototype.removeActiveDescendant = function() { this.element.removeAttribute("aria-activedescendant") }, e.prototype.open = function(e) { this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0) }, e.prototype.close = function() { this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1) }, e.prototype.focus = function() { this.isFocussed || this.element.focus() }, e.prototype.addFocusState = function() { this.element.classList.add(this.classNames.focusState) }, e.prototype.removeFocusState = function() { this.element.classList.remove(this.classNames.focusState) }, e.prototype.enable = function() { this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === r.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1 }, e.prototype.disable = function() { this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === r.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0 }, e.prototype.wrap = function(e) {
                            (0, n.wrap)(e, this.element) }, e.prototype.unwrap = function(e) { this.element.parentNode && (this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element)) }, e.prototype.addLoadingState = function() { this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0 }, e.prototype.removeLoadingState = function() { this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1 }, e.prototype._onFocus = function() { this.isFocussed = !0 }, e.prototype._onBlur = function() { this.isFocussed = !1 }, e }();
                t.default = s }, 217: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var i = function() {
                    function e(e) { var t = e.element,
                            i = e.type,
                            n = e.classNames;
                        this.element = t, this.classNames = n, this.type = i, this.isActive = !1 } return Object.defineProperty(e.prototype, "distanceFromTopWindow", { get: function() { return this.element.getBoundingClientRect().bottom }, enumerable: !1, configurable: !0 }), e.prototype.getChild = function(e) { return this.element.querySelector(e) }, e.prototype.show = function() { return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this }, e.prototype.hide = function() { return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this }, e }();
                t.default = i }, 520: function(e, t, i) { var n = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.WrappedSelect = t.WrappedInput = t.List = t.Input = t.Container = t.Dropdown = void 0; var r = n(i(217));
                t.Dropdown = r.default; var s = n(i(613));
                t.Container = s.default; var o = n(i(11));
                t.Input = o.default; var a = n(i(624));
                t.List = a.default; var c = n(i(541));
                t.WrappedInput = c.default; var l = n(i(982));
                t.WrappedSelect = l.default }, 11: function(e, t, i) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = i(799),
                    r = i(883),
                    s = function() {
                        function e(e) { var t = e.element,
                                i = e.type,
                                n = e.classNames,
                                r = e.preventPaste;
                            this.element = t, this.type = i, this.classNames = n, this.preventPaste = r, this.isFocussed = this.element.isEqualNode(document.activeElement), this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this) } return Object.defineProperty(e.prototype, "placeholder", { set: function(e) { this.element.placeholder = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "value", { get: function() { return (0, n.sanitise)(this.element.value) }, set: function(e) { this.element.value = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "rawValue", { get: function() { return this.element.value }, enumerable: !1, configurable: !0 }), e.prototype.addEventListeners = function() { this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, { passive: !0 }), this.element.addEventListener("focus", this._onFocus, { passive: !0 }), this.element.addEventListener("blur", this._onBlur, { passive: !0 }) }, e.prototype.removeEventListeners = function() { this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur) }, e.prototype.enable = function() { this.element.removeAttribute("disabled"), this.isDisabled = !1 }, e.prototype.disable = function() { this.element.setAttribute("disabled", ""), this.isDisabled = !0 }, e.prototype.focus = function() { this.isFocussed || this.element.focus() }, e.prototype.blur = function() { this.isFocussed && this.element.blur() }, e.prototype.clear = function(e) { return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this }, e.prototype.setWidth = function() { var e = this.element,
                                t = e.style,
                                i = e.value,
                                n = e.placeholder;
                            t.minWidth = "".concat(n.length + 1, "ch"), t.width = "".concat(i.length + 1, "ch") }, e.prototype.setActiveDescendant = function(e) { this.element.setAttribute("aria-activedescendant", e) }, e.prototype.removeActiveDescendant = function() { this.element.removeAttribute("aria-activedescendant") }, e.prototype._onInput = function() { this.type !== r.SELECT_ONE_TYPE && this.setWidth() }, e.prototype._onPaste = function(e) { this.preventPaste && e.preventDefault() }, e.prototype._onFocus = function() { this.isFocussed = !0 }, e.prototype._onBlur = function() { this.isFocussed = !1 }, e }();
                t.default = s }, 624: function(e, t, i) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = i(883),
                    r = function() {
                        function e(e) { var t = e.element;
                            this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight } return e.prototype.clear = function() { this.element.innerHTML = "" }, e.prototype.append = function(e) { this.element.appendChild(e) }, e.prototype.getChild = function(e) { return this.element.querySelector(e) }, e.prototype.hasChildren = function() { return this.element.hasChildNodes() }, e.prototype.scrollToTop = function() { this.element.scrollTop = 0 }, e.prototype.scrollToChildElement = function(e, t) { var i = this; if (e) { var n = this.element.offsetHeight,
                                    r = this.element.scrollTop + n,
                                    s = e.offsetHeight,
                                    o = e.offsetTop + s,
                                    a = t > 0 ? this.element.scrollTop + o - r : e.offsetTop;
                                requestAnimationFrame((function() { i._animateScroll(a, t) })) } }, e.prototype._scrollDown = function(e, t, i) { var n = (i - e) / t,
                                r = n > 1 ? n : 1;
                            this.element.scrollTop = e + r }, e.prototype._scrollUp = function(e, t, i) { var n = (e - i) / t,
                                r = n > 1 ? n : 1;
                            this.element.scrollTop = e - r }, e.prototype._animateScroll = function(e, t) { var i = this,
                                r = n.SCROLLING_SPEED,
                                s = this.element.scrollTop,
                                o = !1;
                            t > 0 ? (this._scrollDown(s, r, e), s < e && (o = !0)) : (this._scrollUp(s, r, e), s > e && (o = !0)), o && requestAnimationFrame((function() { i._animateScroll(e, t) })) }, e }();
                t.default = r }, 730: function(e, t, i) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = i(799),
                    r = function() {
                        function e(e) { var t = e.element,
                                i = e.classNames; if (this.element = t, this.classNames = i, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                            this.isDisabled = !1 } return Object.defineProperty(e.prototype, "isActive", { get: function() { return "active" === this.element.dataset.choice }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "dir", { get: function() { return this.element.dir }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "value", { get: function() { return this.element.value }, set: function(e) { this.element.value = e }, enumerable: !1, configurable: !0 }), e.prototype.conceal = function() { this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1; var e = this.element.getAttribute("style");
                            e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active") }, e.prototype.reveal = function() { this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex"); var e = this.element.getAttribute("data-choice-orig-style");
                            e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value }, e.prototype.enable = function() { this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1 }, e.prototype.disable = function() { this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0 }, e.prototype.triggerEvent = function(e, t) {
                            (0, n.dispatchEvent)(this.element, e, t) }, e }();
                t.default = r }, 541: function(e, t, i) { var n, r = this && this.__extends || (n = function(e, t) { return n = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) }, n(e, t) }, function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function i() { this.constructor = e }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i) }),
                    s = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
                Object.defineProperty(t, "__esModule", { value: !0 }); var o = function(e) {
                    function t(t) { var i = t.element,
                            n = t.classNames,
                            r = t.delimiter,
                            s = e.call(this, { element: i, classNames: n }) || this; return s.delimiter = r, s } return r(t, e), Object.defineProperty(t.prototype, "value", { get: function() { return this.element.value }, set: function(e) { this.element.setAttribute("value", e), this.element.value = e }, enumerable: !1, configurable: !0 }), t }(s(i(730)).default);
                t.default = o }, 982: function(e, t, i) { var n, r = this && this.__extends || (n = function(e, t) { return n = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) }, n(e, t) }, function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function i() { this.constructor = e }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i) }),
                    s = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
                Object.defineProperty(t, "__esModule", { value: !0 }); var o = function(e) {
                    function t(t) { var i = t.element,
                            n = t.classNames,
                            r = t.template,
                            s = e.call(this, { element: i, classNames: n }) || this; return s.template = r, s } return r(t, e), Object.defineProperty(t.prototype, "placeholderOption", { get: function() { return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]") }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "optionGroups", { get: function() { return Array.from(this.element.getElementsByTagName("OPTGROUP")) }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "options", { get: function() { return Array.from(this.element.options) }, set: function(e) { var t = this,
                                i = document.createDocumentFragment();
                            e.forEach((function(e) { return n = e, r = t.template(n), void i.appendChild(r); var n, r })), this.appendDocFragment(i) }, enumerable: !1, configurable: !0 }), t.prototype.appendDocFragment = function(e) { this.element.innerHTML = "", this.element.appendChild(e) }, t }(s(i(730)).default);
                t.default = o }, 883: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.SCROLLING_SPEED = t.SELECT_MULTIPLE_TYPE = t.SELECT_ONE_TYPE = t.TEXT_TYPE = t.KEY_CODES = t.ACTION_TYPES = t.EVENTS = void 0, t.EVENTS = { showDropdown: "showDropdown", hideDropdown: "hideDropdown", change: "change", choice: "choice", search: "search", addItem: "addItem", removeItem: "removeItem", highlightItem: "highlightItem", highlightChoice: "highlightChoice", unhighlightItem: "unhighlightItem" }, t.ACTION_TYPES = { ADD_CHOICE: "ADD_CHOICE", FILTER_CHOICES: "FILTER_CHOICES", ACTIVATE_CHOICES: "ACTIVATE_CHOICES", CLEAR_CHOICES: "CLEAR_CHOICES", ADD_GROUP: "ADD_GROUP", ADD_ITEM: "ADD_ITEM", REMOVE_ITEM: "REMOVE_ITEM", HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM", CLEAR_ALL: "CLEAR_ALL", RESET_TO: "RESET_TO", SET_IS_LOADING: "SET_IS_LOADING" }, t.KEY_CODES = { BACK_KEY: 46, DELETE_KEY: 8, ENTER_KEY: 13, A_KEY: 65, ESC_KEY: 27, UP_KEY: 38, DOWN_KEY: 40, PAGE_UP_KEY: 33, PAGE_DOWN_KEY: 34 }, t.TEXT_TYPE = "text", t.SELECT_ONE_TYPE = "select-one", t.SELECT_MULTIPLE_TYPE = "select-multiple", t.SCROLLING_SPEED = 4 }, 789: function(e, t, i) { Object.defineProperty(t, "__esModule", { value: !0 }), t.DEFAULT_CONFIG = t.DEFAULT_CLASSNAMES = void 0; var n = i(799);
                t.DEFAULT_CLASSNAMES = { containerOuter: "choices", containerInner: "choices__inner", input: "choices__input", inputCloned: "choices__input--cloned", list: "choices__list", listItems: "choices__list--multiple", listSingle: "choices__list--single", listDropdown: "choices__list--dropdown", item: "choices__item", itemSelectable: "choices__item--selectable", itemDisabled: "choices__item--disabled", itemChoice: "choices__item--choice", placeholder: "choices__placeholder", group: "choices__group", groupHeading: "choices__heading", button: "choices__button", activeState: "is-active", focusState: "is-focused", openState: "is-open", disabledState: "is-disabled", highlightedState: "is-highlighted", selectedState: "is-selected", flippedState: "is-flipped", loadingState: "is-loading", noResults: "has-no-results", noChoices: "has-no-choices" }, t.DEFAULT_CONFIG = { items: [], choices: [], silent: !1, renderChoiceLimit: -1, maxItemCount: -1, addItems: !0, addItemFilter: null, removeItems: !0, removeItemButton: !1, editItems: !1, allowHTML: !0, duplicateItemsAllowed: !0, delimiter: ",", paste: !0, searchEnabled: !0, searchChoices: !0, searchFloor: 1, searchResultLimit: 4, searchFields: ["label", "value"], position: "auto", resetScrollPosition: !0, shouldSort: !0, shouldSortItems: !1, sorter: n.sortByAlpha, placeholder: !0, placeholderValue: null, searchPlaceholderValue: null, prependValue: null, appendValue: null, renderSelectedChoices: "auto", loadingText: "Loading...", noResultsText: "No results found", noChoicesText: "No choices to choose from", itemSelectText: "Press to select", uniqueItemText: "Only unique values can be added", customAddItemText: "Only values matching specific conditions can be added", addItemText: function(e) { return 'Press Enter to add <b>"'.concat((0, n.sanitise)(e), '"</b>') }, maxItemText: function(e) { return "Only ".concat(e, " values can be added") }, valueComparer: function(e, t) { return e === t }, fuseOptions: { includeScore: !0 }, labelId: "", callbackOnInit: null, callbackOnCreateTemplates: null, classNames: t.DEFAULT_CLASSNAMES } }, 18: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 978: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 948: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 359: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 285: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 533: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 187: function(e, t, i) { var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) { void 0 === n && (n = i); var r = Object.getOwnPropertyDescriptor(t, i);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = { enumerable: !0, get: function() { return t[i] } }), Object.defineProperty(e, n, r) } : function(e, t, i, n) { void 0 === n && (n = i), e[n] = t[i] }),
                    r = this && this.__exportStar || function(e, t) { for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i) };
                Object.defineProperty(t, "__esModule", { value: !0 }), r(i(18), t), r(i(978), t), r(i(948), t), r(i(359), t), r(i(285), t), r(i(533), t), r(i(287), t), r(i(132), t), r(i(837), t), r(i(598), t), r(i(369), t), r(i(37), t), r(i(47), t), r(i(923), t), r(i(876), t) }, 287: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 132: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 837: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 598: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 37: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 369: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 47: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 923: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 876: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, 799: function(e, t) { var i;
                Object.defineProperty(t, "__esModule", { value: !0 }), t.parseCustomProperties = t.diff = t.cloneObject = t.existsInArray = t.dispatchEvent = t.sortByScore = t.sortByAlpha = t.strToEl = t.sanitise = t.isScrolledIntoView = t.getAdjacentEl = t.wrap = t.isType = t.getType = t.generateId = t.generateChars = t.getRandomNumber = void 0, t.getRandomNumber = function(e, t) { return Math.floor(Math.random() * (t - e) + e) }, t.generateChars = function(e) { return Array.from({ length: e }, (function() { return (0, t.getRandomNumber)(0, 36).toString(36) })).join("") }, t.generateId = function(e, i) { var n = e.id || e.name && "".concat(e.name, "-").concat((0, t.generateChars)(2)) || (0, t.generateChars)(4); return n = n.replace(/(:|\.|\[|\]|,)/g, ""), "".concat(i, "-").concat(n) }, t.getType = function(e) { return Object.prototype.toString.call(e).slice(8, -1) }, t.isType = function(e, i) { return null != i && (0, t.getType)(i) === e }, t.wrap = function(e, t) { return void 0 === t && (t = document.createElement("div")), e.parentNode && (e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)), t.appendChild(e) }, t.getAdjacentEl = function(e, t, i) { void 0 === i && (i = 1); for (var n = "".concat(i > 0 ? "next" : "previous", "ElementSibling"), r = e[n]; r;) { if (r.matches(t)) return r;
                        r = r[n] } return r }, t.isScrolledIntoView = function(e, t, i) { return void 0 === i && (i = 1), !!e && (i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop) }, t.sanitise = function(e) { return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") }, t.strToEl = (i = document.createElement("div"), function(e) { var t = e.trim();
                    i.innerHTML = t; for (var n = i.children[0]; i.firstChild;) i.removeChild(i.firstChild); return n }), t.sortByAlpha = function(e, t) { var i = e.value,
                        n = e.label,
                        r = void 0 === n ? i : n,
                        s = t.value,
                        o = t.label,
                        a = void 0 === o ? s : o; return r.localeCompare(a, [], { sensitivity: "base", ignorePunctuation: !0, numeric: !0 }) }, t.sortByScore = function(e, t) { var i = e.score,
                        n = void 0 === i ? 0 : i,
                        r = t.score; return n - (void 0 === r ? 0 : r) }, t.dispatchEvent = function(e, t, i) { void 0 === i && (i = null); var n = new CustomEvent(t, { detail: i, bubbles: !0, cancelable: !0 }); return e.dispatchEvent(n) }, t.existsInArray = function(e, t, i) { return void 0 === i && (i = "value"), e.some((function(e) { return "string" == typeof t ? e[i] === t.trim() : e[i] === t })) }, t.cloneObject = function(e) { return JSON.parse(JSON.stringify(e)) }, t.diff = function(e, t) { var i = Object.keys(e).sort(),
                        n = Object.keys(t).sort(); return i.filter((function(e) { return n.indexOf(e) < 0 })) }, t.parseCustomProperties = function(e) { if (void 0 !== e) try { return JSON.parse(e) } catch (t) { return e }
                    return {} } }, 273: function(e, t) { var i = this && this.__spreadArray || function(e, t, i) { if (i || 2 === arguments.length)
                        for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]); return e.concat(n || Array.prototype.slice.call(t)) };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultState = void 0, t.defaultState = [], t.default = function(e, n) { switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
                        case "ADD_CHOICE":
                            var r = n,
                                s = { id: r.id, elementId: r.elementId, groupId: r.groupId, value: r.value, label: r.label || r.value, disabled: r.disabled || !1, selected: !1, active: !0, score: 9999, customProperties: r.customProperties, placeholder: r.placeholder || !1 }; return i(i([], e, !0), [s], !1);
                        case "ADD_ITEM":
                            var o = n; return o.choiceId > -1 ? e.map((function(e) { var t = e; return t.id === parseInt("".concat(o.choiceId), 10) && (t.selected = !0), t })) : e;
                        case "REMOVE_ITEM":
                            var a = n; return a.choiceId && a.choiceId > -1 ? e.map((function(e) { var t = e; return t.id === parseInt("".concat(a.choiceId), 10) && (t.selected = !1), t })) : e;
                        case "FILTER_CHOICES":
                            var c = n; return e.map((function(e) { var t = e; return t.active = c.results.some((function(e) { var i = e.item,
                                        n = e.score; return i.id === t.id && (t.score = n, !0) })), t }));
                        case "ACTIVATE_CHOICES":
                            var l = n; return e.map((function(e) { var t = e; return t.active = l.active, t }));
                        case "CLEAR_CHOICES":
                            return t.defaultState;
                        default:
                            return e } } }, 871: function(e, t) { var i = this && this.__spreadArray || function(e, t, i) { if (i || 2 === arguments.length)
                        for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]); return e.concat(n || Array.prototype.slice.call(t)) };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultState = void 0, t.defaultState = [], t.default = function(e, n) { switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
                        case "ADD_GROUP":
                            var r = n; return i(i([], e, !0), [{ id: r.id, value: r.value, active: r.active, disabled: r.disabled }], !1);
                        case "CLEAR_CHOICES":
                            return [];
                        default:
                            return e } } }, 655: function(e, t, i) { var n = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultState = void 0; var r = i(791),
                    s = n(i(52)),
                    o = n(i(871)),
                    a = n(i(273)),
                    c = n(i(502)),
                    l = i(799);
                t.defaultState = { groups: [], items: [], choices: [], loading: !1 }; var h = (0, r.combineReducers)({ items: s.default, groups: o.default, choices: a.default, loading: c.default });
                t.default = function(e, i) { var n = e; if ("CLEAR_ALL" === i.type) n = t.defaultState;
                    else if ("RESET_TO" === i.type) return (0, l.cloneObject)(i.state); return h(n, i) } }, 52: function(e, t) { var i = this && this.__spreadArray || function(e, t, i) { if (i || 2 === arguments.length)
                        for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]); return e.concat(n || Array.prototype.slice.call(t)) };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultState = void 0, t.defaultState = [], t.default = function(e, n) { switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
                        case "ADD_ITEM":
                            var r = n; return i(i([], e, !0), [{ id: r.id, choiceId: r.choiceId, groupId: r.groupId, value: r.value, label: r.label, active: !0, highlighted: !1, customProperties: r.customProperties, placeholder: r.placeholder || !1, keyCode: null }], !1).map((function(e) { var t = e; return t.highlighted = !1, t }));
                        case "REMOVE_ITEM":
                            return e.map((function(e) { var t = e; return t.id === n.id && (t.active = !1), t }));
                        case "HIGHLIGHT_ITEM":
                            var s = n; return e.map((function(e) { var t = e; return t.id === s.id && (t.highlighted = s.highlighted), t }));
                        default:
                            return e } } }, 502: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultState = void 0, t.defaultState = !1, t.default = function(e, i) { return void 0 === e && (e = t.defaultState), void 0 === i && (i = {}), "SET_IS_LOADING" === i.type ? i.isLoading : e } }, 744: function(e, t, i) { var n = this && this.__spreadArray || function(e, t, i) { if (i || 2 === arguments.length)
                            for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]); return e.concat(n || Array.prototype.slice.call(t)) },
                    r = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
                Object.defineProperty(t, "__esModule", { value: !0 }); var s = i(791),
                    o = r(i(655)),
                    a = function() {
                        function e() { this._store = (0, s.createStore)(o.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) } return e.prototype.subscribe = function(e) { this._store.subscribe(e) }, e.prototype.dispatch = function(e) { this._store.dispatch(e) }, Object.defineProperty(e.prototype, "state", { get: function() { return this._store.getState() }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "items", { get: function() { return this.state.items }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "activeItems", { get: function() { return this.items.filter((function(e) { return !0 === e.active })) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "highlightedActiveItems", { get: function() { return this.items.filter((function(e) { return e.active && e.highlighted })) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "choices", { get: function() { return this.state.choices }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "activeChoices", { get: function() { return this.choices.filter((function(e) { return !0 === e.active })) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "selectableChoices", { get: function() { return this.choices.filter((function(e) { return !0 !== e.disabled })) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "searchableChoices", { get: function() { return this.selectableChoices.filter((function(e) { return !0 !== e.placeholder })) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "placeholderChoice", { get: function() { return n([], this.choices, !0).reverse().find((function(e) { return !0 === e.placeholder })) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "groups", { get: function() { return this.state.groups }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "activeGroups", { get: function() { var e = this.groups,
                                    t = this.choices; return e.filter((function(e) { var i = !0 === e.active && !1 === e.disabled,
                                        n = t.some((function(e) { return !0 === e.active && !1 === e.disabled })); return i && n }), []) }, enumerable: !1, configurable: !0 }), e.prototype.isLoading = function() { return this.state.loading }, e.prototype.getChoiceById = function(e) { return this.activeChoices.find((function(t) { return t.id === parseInt(e, 10) })) }, e.prototype.getGroupById = function(e) { return this.groups.find((function(t) { return t.id === e })) }, e }();
                t.default = a }, 686: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var i = { containerOuter: function(e, t, i, n, r, s, o) { var a = e.classNames.containerOuter,
                            c = Object.assign(document.createElement("div"), { className: a }); return c.dataset.type = s, t && (c.dir = t), n && (c.tabIndex = 0), i && (c.setAttribute("role", r ? "combobox" : "listbox"), r && c.setAttribute("aria-autocomplete", "list")), c.setAttribute("aria-haspopup", "true"), c.setAttribute("aria-expanded", "false"), o && c.setAttribute("aria-labelledby", o), c }, containerInner: function(e) { var t = e.classNames.containerInner; return Object.assign(document.createElement("div"), { className: t }) }, itemList: function(e, t) { var i = e.classNames,
                            n = i.list,
                            r = i.listSingle,
                            s = i.listItems; return Object.assign(document.createElement("div"), { className: "".concat(n, " ").concat(t ? r : s) }) }, placeholder: function(e, t) { var i, n = e.allowHTML,
                            r = e.classNames.placeholder; return Object.assign(document.createElement("div"), ((i = { className: r })[n ? "innerHTML" : "innerText"] = t, i)) }, item: function(e, t, i) { var n, r, s = e.allowHTML,
                            o = e.classNames,
                            a = o.item,
                            c = o.button,
                            l = o.highlightedState,
                            h = o.itemSelectable,
                            u = o.placeholder,
                            d = t.id,
                            p = t.value,
                            f = t.label,
                            m = t.customProperties,
                            v = t.active,
                            g = t.disabled,
                            _ = t.highlighted,
                            y = t.placeholder,
                            E = Object.assign(document.createElement("div"), ((n = { className: a })[s ? "innerHTML" : "innerText"] = f, n)); if (Object.assign(E.dataset, { item: "", id: d, value: p, customProperties: m }), v && E.setAttribute("aria-selected", "true"), g && E.setAttribute("aria-disabled", "true"), y && E.classList.add(u), E.classList.add(_ ? l : h), i) { g && E.classList.remove(h), E.dataset.deletable = ""; var b = "Remove item",
                                S = Object.assign(document.createElement("button"), ((r = { type: "button", className: c })[s ? "innerHTML" : "innerText"] = b, r));
                            S.setAttribute("aria-label", "".concat(b, ": '").concat(p, "'")), S.dataset.button = "", E.appendChild(S) } return E }, choiceList: function(e, t) { var i = e.classNames.list,
                            n = Object.assign(document.createElement("div"), { className: i }); return t || n.setAttribute("aria-multiselectable", "true"), n.setAttribute("role", "listbox"), n }, choiceGroup: function(e, t) { var i, n = e.allowHTML,
                            r = e.classNames,
                            s = r.group,
                            o = r.groupHeading,
                            a = r.itemDisabled,
                            c = t.id,
                            l = t.value,
                            h = t.disabled,
                            u = Object.assign(document.createElement("div"), { className: "".concat(s, " ").concat(h ? a : "") }); return u.setAttribute("role", "group"), Object.assign(u.dataset, { group: "", id: c, value: l }), h && u.setAttribute("aria-disabled", "true"), u.appendChild(Object.assign(document.createElement("div"), ((i = { className: o })[n ? "innerHTML" : "innerText"] = l, i))), u }, choice: function(e, t, i) { var n, r = e.allowHTML,
                            s = e.classNames,
                            o = s.item,
                            a = s.itemChoice,
                            c = s.itemSelectable,
                            l = s.selectedState,
                            h = s.itemDisabled,
                            u = s.placeholder,
                            d = t.id,
                            p = t.value,
                            f = t.label,
                            m = t.groupId,
                            v = t.elementId,
                            g = t.disabled,
                            _ = t.selected,
                            y = t.placeholder,
                            E = Object.assign(document.createElement("div"), ((n = { id: v })[r ? "innerHTML" : "innerText"] = f, n.className = "".concat(o, " ").concat(a), n)); return _ && E.classList.add(l), y && E.classList.add(u), E.setAttribute("role", m && m > 0 ? "treeitem" : "option"), Object.assign(E.dataset, { choice: "", id: d, value: p, selectText: i }), g ? (E.classList.add(h), E.dataset.choiceDisabled = "", E.setAttribute("aria-disabled", "true")) : (E.classList.add(c), E.dataset.choiceSelectable = ""), E }, input: function(e, t) { var i = e.classNames,
                            n = i.input,
                            r = i.inputCloned,
                            s = Object.assign(document.createElement("input"), { type: "search", name: "search_terms", className: "".concat(n, " ").concat(r), autocomplete: "off", autocapitalize: "off", spellcheck: !1 }); return s.setAttribute("role", "textbox"), s.setAttribute("aria-autocomplete", "list"), s.setAttribute("aria-label", t), s }, dropdown: function(e) { var t = e.classNames,
                            i = t.list,
                            n = t.listDropdown,
                            r = document.createElement("div"); return r.classList.add(i, n), r.setAttribute("aria-expanded", "false"), r }, notice: function(e, t, i) { var n, r = e.allowHTML,
                            s = e.classNames,
                            o = s.item,
                            a = s.itemChoice,
                            c = s.noResults,
                            l = s.noChoices;
                        void 0 === i && (i = ""); var h = [o, a]; return "no-choices" === i ? h.push(l) : "no-results" === i && h.push(c), Object.assign(document.createElement("div"), ((n = {})[r ? "innerHTML" : "innerText"] = t, n.className = h.join(" "), n)) }, option: function(e) { var t = e.label,
                            i = e.value,
                            n = e.customProperties,
                            r = e.active,
                            s = e.disabled,
                            o = new Option(t, i, !1, r); return n && (o.dataset.customProperties = "".concat(n)), o.disabled = !!s, o } };
                t.default = i }, 996: function(e) { var t = function(e) { return function(e) { return !!e && "object" == typeof e }(e) && ! function(e) { var t = Object.prototype.toString.call(e); return "[object RegExp]" === t || "[object Date]" === t || function(e) { return e.$$typeof === i }(e) }(e) },
                    i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

                function n(e, t) { return !1 !== t.clone && t.isMergeableObject(e) ? a((i = e, Array.isArray(i) ? [] : {}), e, t) : e; var i }

                function r(e, t, i) { return e.concat(t).map((function(e) { return n(e, i) })) }

                function s(e) { return Object.keys(e).concat(function(e) { return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) { return e.propertyIsEnumerable(t) })) : [] }(e)) }

                function o(e, t) { try { return t in e } catch (e) { return !1 } }

                function a(e, i, c) {
                    (c = c || {}).arrayMerge = c.arrayMerge || r, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = n; var l = Array.isArray(i); return l === Array.isArray(e) ? l ? c.arrayMerge(e, i, c) : function(e, t, i) { var r = {}; return i.isMergeableObject(e) && s(e).forEach((function(t) { r[t] = n(e[t], i) })), s(t).forEach((function(s) {
                            (function(e, t) { return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)) })(e, s) || (o(e, s) && i.isMergeableObject(t[s]) ? r[s] = function(e, t) { if (!t.customMerge) return a; var i = t.customMerge(e); return "function" == typeof i ? i : a }(s, i)(e[s], t[s], i) : r[s] = n(t[s], i)) })), r }(e, i, c) : n(i, c) }
                a.all = function(e, t) { if (!Array.isArray(e)) throw new Error("first argument should be an array"); return e.reduce((function(e, i) { return a(e, i, t) }), {}) }; var c = a;
                e.exports = c }, 221: function(e, t, i) {
                function n(e) { return Array.isArray ? Array.isArray(e) : "[object Array]" === l(e) }

                function r(e) { return "string" == typeof e }

                function s(e) { return "number" == typeof e }

                function o(e) { return "object" == typeof e }

                function a(e) { return null != e }

                function c(e) { return !e.trim().length }

                function l(e) { return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e) }
                i.r(t), i.d(t, { default: function() { return R } }); const h = Object.prototype.hasOwnProperty;
                class u { constructor(e) { this._keys = [], this._keyMap = {}; let t = 0;
                        e.forEach((e => { let i = d(e);
                            t += i.weight, this._keys.push(i), this._keyMap[i.id] = i, t += i.weight })), this._keys.forEach((e => { e.weight /= t })) }
                    get(e) { return this._keyMap[e] }
                    keys() { return this._keys }
                    toJSON() { return JSON.stringify(this._keys) } }

                function d(e) { let t = null,
                        i = null,
                        s = null,
                        o = 1,
                        a = null; if (r(e) || n(e)) s = e, t = p(e), i = f(e);
                    else { if (!h.call(e, "name")) throw new Error("Missing name property in key"); const n = e.name; if (s = n, h.call(e, "weight") && (o = e.weight, o <= 0)) throw new Error((e => `Property 'weight' in key '${e}' must be a positive integer`)(n));
                        t = p(n), i = f(n), a = e.getFn } return { path: t, id: i, weight: o, src: s, getFn: a } }

                function p(e) { return n(e) ? e : e.split(".") }

                function f(e) { return n(e) ? e.join(".") : e } var m = { isCaseSensitive: !1, includeScore: !1, keys: [], shouldSort: !0, sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1, includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1, location: 0, threshold: .6, distance: 100, useExtendedSearch: !1, getFn: function(e, t) { let i = [],
                            c = !1; const h = (e, t, u) => { if (a(e))
                                if (t[u]) { const d = e[t[u]]; if (!a(d)) return; if (u === t.length - 1 && (r(d) || s(d) || function(e) { return !0 === e || !1 === e || function(e) { return o(e) && null !== e }(e) && "[object Boolean]" == l(e) }(d))) i.push(function(e) { return null == e ? "" : function(e) { if ("string" == typeof e) return e; let t = e + ""; return "0" == t && 1 / e == -1 / 0 ? "-0" : t }(e) }(d));
                                    else if (n(d)) { c = !0; for (let e = 0, i = d.length; e < i; e += 1) h(d[e], t, u + 1) } else t.length && h(d, t, u + 1) } else i.push(e) }; return h(e, r(t) ? t.split(".") : t, 0), c ? i : i[0] }, ignoreLocation: !1, ignoreFieldNorm: !1, fieldNormWeight: 1 }; const v = /[^ ]+/g;
                class g { constructor({ getFn: e = m.getFn, fieldNormWeight: t = m.fieldNormWeight } = {}) { this.norm = function(e = 1, t = 3) { const i = new Map,
                                n = Math.pow(10, t); return {get(t) { const r = t.match(v).length; if (i.has(r)) return i.get(r); const s = 1 / Math.pow(r, .5 * e),
                                        o = parseFloat(Math.round(s * n) / n); return i.set(r, o), o }, clear() { i.clear() } } }(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords() }
                    setSources(e = []) { this.docs = e }
                    setIndexRecords(e = []) { this.records = e }
                    setKeys(e = []) { this.keys = e, this._keysMap = {}, e.forEach(((e, t) => { this._keysMap[e.id] = t })) }
                    create() {!this.isCreated && this.docs.length && (this.isCreated = !0, r(this.docs[0]) ? this.docs.forEach(((e, t) => { this._addString(e, t) })) : this.docs.forEach(((e, t) => { this._addObject(e, t) })), this.norm.clear()) }
                    add(e) { const t = this.size();
                        r(e) ? this._addString(e, t) : this._addObject(e, t) }
                    removeAt(e) { this.records.splice(e, 1); for (let t = e, i = this.size(); t < i; t += 1) this.records[t].i -= 1 }
                    getValueForItemAtKeyId(e, t) { return e[this._keysMap[t]] }
                    size() { return this.records.length }
                    _addString(e, t) { if (!a(e) || c(e)) return; let i = { v: e, i: t, n: this.norm.get(e) };
                        this.records.push(i) }
                    _addObject(e, t) { let i = { i: t, $: {} };
                        this.keys.forEach(((t, s) => { let o = t.getFn ? t.getFn(e) : this.getFn(e, t.path); if (a(o))
                                if (n(o)) { let e = []; const t = [{ nestedArrIndex: -1, value: o }]; for (; t.length;) { const { nestedArrIndex: i, value: s } = t.pop(); if (a(s))
                                            if (r(s) && !c(s)) { let t = { v: s, i: i, n: this.norm.get(s) };
                                                e.push(t) } else n(s) && s.forEach(((e, i) => { t.push({ nestedArrIndex: i, value: e }) })) }
                                    i.$[s] = e } else if (r(o) && !c(o)) { let e = { v: o, n: this.norm.get(o) };
                                i.$[s] = e } })), this.records.push(i) }
                    toJSON() { return { keys: this.keys, records: this.records } } }

                function _(e, t, { getFn: i = m.getFn, fieldNormWeight: n = m.fieldNormWeight } = {}) { const r = new g({ getFn: i, fieldNormWeight: n }); return r.setKeys(e.map(d)), r.setSources(t), r.create(), r }

                function y(e, { errors: t = 0, currentLocation: i = 0, expectedLocation: n = 0, distance: r = m.distance, ignoreLocation: s = m.ignoreLocation } = {}) { const o = t / e.length; if (s) return o; const a = Math.abs(n - i); return r ? o + a / r : a ? 1 : o } const E = 32;

                function b(e) { let t = {}; for (let i = 0, n = e.length; i < n; i += 1) { const r = e.charAt(i);
                        t[r] = (t[r] || 0) | 1 << n - i - 1 } return t }
                class S { constructor(e, { location: t = m.location, threshold: i = m.threshold, distance: n = m.distance, includeMatches: r = m.includeMatches, findAllMatches: s = m.findAllMatches, minMatchCharLength: o = m.minMatchCharLength, isCaseSensitive: a = m.isCaseSensitive, ignoreLocation: c = m.ignoreLocation } = {}) { if (this.options = { location: t, threshold: i, distance: n, includeMatches: r, findAllMatches: s, minMatchCharLength: o, isCaseSensitive: a, ignoreLocation: c }, this.pattern = a ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length) return; const l = (e, t) => { this.chunks.push({ pattern: e, alphabet: b(e), startIndex: t }) },
                            h = this.pattern.length; if (h > E) { let e = 0; const t = h % E,
                                i = h - t; for (; e < i;) l(this.pattern.substr(e, E), e), e += E; if (t) { const e = h - E;
                                l(this.pattern.substr(e), e) } } else l(this.pattern, 0) }
                    searchIn(e) { const { isCaseSensitive: t, includeMatches: i } = this.options; if (t || (e = e.toLowerCase()), this.pattern === e) { let t = { isMatch: !0, score: 0 }; return i && (t.indices = [
                                [0, e.length - 1]
                            ]), t } const { location: n, distance: r, threshold: s, findAllMatches: o, minMatchCharLength: a, ignoreLocation: c } = this.options; let l = [],
                            h = 0,
                            u = !1;
                        this.chunks.forEach((({ pattern: t, alphabet: d, startIndex: p }) => { const { isMatch: f, score: v, indices: g } = function(e, t, i, { location: n = m.location, distance: r = m.distance, threshold: s = m.threshold, findAllMatches: o = m.findAllMatches, minMatchCharLength: a = m.minMatchCharLength, includeMatches: c = m.includeMatches, ignoreLocation: l = m.ignoreLocation } = {}) { if (t.length > E) throw new Error("Pattern length exceeds max of 32."); const h = t.length,
                                    u = e.length,
                                    d = Math.max(0, Math.min(n, u)); let p = s,
                                    f = d; const v = a > 1 || c,
                                    g = v ? Array(u) : []; let _; for (;
                                    (_ = e.indexOf(t, f)) > -1;) { let e = y(t, { currentLocation: _, expectedLocation: d, distance: r, ignoreLocation: l }); if (p = Math.min(e, p), f = _ + h, v) { let e = 0; for (; e < h;) g[_ + e] = 1, e += 1 } }
                                f = -1; let b = [],
                                    S = 1,
                                    O = h + u; const I = 1 << h - 1; for (let n = 0; n < h; n += 1) { let s = 0,
                                        a = O; for (; s < a;) y(t, { errors: n, currentLocation: d + a, expectedLocation: d, distance: r, ignoreLocation: l }) <= p ? s = a : O = a, a = Math.floor((O - s) / 2 + s);
                                    O = a; let c = Math.max(1, d - a + 1),
                                        m = o ? u : Math.min(d + a, u) + h,
                                        _ = Array(m + 2);
                                    _[m + 1] = (1 << n) - 1; for (let s = m; s >= c; s -= 1) { let o = s - 1,
                                            a = i[e.charAt(o)]; if (v && (g[o] = +!!a), _[s] = (_[s + 1] << 1 | 1) & a, n && (_[s] |= (b[s + 1] | b[s]) << 1 | 1 | b[s + 1]), _[s] & I && (S = y(t, { errors: n, currentLocation: o, expectedLocation: d, distance: r, ignoreLocation: l }), S <= p)) { if (p = S, f = o, f <= d) break;
                                            c = Math.max(1, 2 * d - f) } } if (y(t, { errors: n + 1, currentLocation: d, expectedLocation: d, distance: r, ignoreLocation: l }) > p) break;
                                    b = _ } const C = { isMatch: f >= 0, score: Math.max(.001, S) }; if (v) { const e = function(e = [], t = m.minMatchCharLength) { let i = [],
                                            n = -1,
                                            r = -1,
                                            s = 0; for (let o = e.length; s < o; s += 1) { let o = e[s];
                                            o && -1 === n ? n = s : o || -1 === n || (r = s - 1, r - n + 1 >= t && i.push([n, r]), n = -1) } return e[s - 1] && s - n >= t && i.push([n, s - 1]), i }(g, a);
                                    e.length ? c && (C.indices = e) : C.isMatch = !1 } return C }(e, t, d, { location: n + p, distance: r, threshold: s, findAllMatches: o, minMatchCharLength: a, includeMatches: i, ignoreLocation: c });
                            f && (u = !0), h += v, f && g && (l = [...l, ...g]) })); let d = { isMatch: u, score: u ? h / this.chunks.length : 1 }; return u && i && (d.indices = l), d } }
                class O { constructor(e) { this.pattern = e }
                    static isMultiMatch(e) { return I(e, this.multiRegex) }
                    static isSingleMatch(e) { return I(e, this.singleRegex) }
                    search() {} }

                function I(e, t) { const i = e.match(t); return i ? i[1] : null }
                class C extends O { constructor(e, { location: t = m.location, threshold: i = m.threshold, distance: n = m.distance, includeMatches: r = m.includeMatches, findAllMatches: s = m.findAllMatches, minMatchCharLength: o = m.minMatchCharLength, isCaseSensitive: a = m.isCaseSensitive, ignoreLocation: c = m.ignoreLocation } = {}) { super(e), this._bitapSearch = new S(e, { location: t, threshold: i, distance: n, includeMatches: r, findAllMatches: s, minMatchCharLength: o, isCaseSensitive: a, ignoreLocation: c }) }
                    static get type() { return "fuzzy" }
                    static get multiRegex() { return /^"(.*)"$/ }
                    static get singleRegex() { return /^(.*)$/ }
                    search(e) { return this._bitapSearch.searchIn(e) } }
                class T extends O { constructor(e) { super(e) }
                    static get type() { return "include" }
                    static get multiRegex() { return /^'"(.*)"$/ }
                    static get singleRegex() { return /^'(.*)$/ }
                    search(e) { let t, i = 0; const n = [],
                            r = this.pattern.length; for (;
                            (t = e.indexOf(this.pattern, i)) > -1;) i = t + r, n.push([t, i - 1]); const s = !!n.length; return { isMatch: s, score: s ? 0 : 1, indices: n } } } const L = [class extends O { constructor(e) { super(e) }
                        static get type() { return "exact" }
                        static get multiRegex() { return /^="(.*)"$/ }
                        static get singleRegex() { return /^=(.*)$/ }
                        search(e) { const t = e === this.pattern; return { isMatch: t, score: t ? 0 : 1, indices: [0, this.pattern.length - 1] } } }, T, class extends O { constructor(e) { super(e) }
                        static get type() { return "prefix-exact" }
                        static get multiRegex() { return /^\^"(.*)"$/ }
                        static get singleRegex() { return /^\^(.*)$/ }
                        search(e) { const t = e.startsWith(this.pattern); return { isMatch: t, score: t ? 0 : 1, indices: [0, this.pattern.length - 1] } } }, class extends O { constructor(e) { super(e) }
                        static get type() { return "inverse-prefix-exact" }
                        static get multiRegex() { return /^!\^"(.*)"$/ }
                        static get singleRegex() { return /^!\^(.*)$/ }
                        search(e) { const t = !e.startsWith(this.pattern); return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] } } }, class extends O { constructor(e) { super(e) }
                        static get type() { return "inverse-suffix-exact" }
                        static get multiRegex() { return /^!"(.*)"\$$/ }
                        static get singleRegex() { return /^!(.*)\$$/ }
                        search(e) { const t = !e.endsWith(this.pattern); return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] } } }, class extends O { constructor(e) { super(e) }
                        static get type() { return "suffix-exact" }
                        static get multiRegex() { return /^"(.*)"\$$/ }
                        static get singleRegex() { return /^(.*)\$$/ }
                        search(e) { const t = e.endsWith(this.pattern); return { isMatch: t, score: t ? 0 : 1, indices: [e.length - this.pattern.length, e.length - 1] } } }, class extends O { constructor(e) { super(e) }
                        static get type() { return "inverse-exact" }
                        static get multiRegex() { return /^!"(.*)"$/ }
                        static get singleRegex() { return /^!(.*)$/ }
                        search(e) { const t = -1 === e.indexOf(this.pattern); return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] } } }, C],
                    w = L.length,
                    A = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
                    M = new Set([C.type, T.type]),
                    P = [];

                function x(e, t) { for (let i = 0, n = P.length; i < n; i += 1) { let n = P[i]; if (n.condition(e, t)) return new n(e, t) } return new S(e, t) } const N = "$and",
                    D = e => !(!e.$and && !e.$or),
                    j = e => ({
                        [N]: Object.keys(e).map((t => ({
                            [t]: e[t] }))) });

                function F(e, t, { auto: i = !0 } = {}) { const s = e => { let a = Object.keys(e); const c = (e => !!e.$path)(e); if (!c && a.length > 1 && !D(e)) return s(j(e)); if ((e => !n(e) && o(e) && !D(e))(e)) { const n = c ? e.$path : a[0],
                                s = c ? e.$val : e[n]; if (!r(s)) throw new Error((e => `Invalid value for key ${e}`)(n)); const o = { keyId: f(n), pattern: s }; return i && (o.searcher = x(s, t)), o } let l = { children: [], operator: a[0] }; return a.forEach((t => { const i = e[t];
                            n(i) && i.forEach((e => { l.children.push(s(e)) })) })), l }; return D(e) || (e = j(e)), s(e) }

                function k(e, t) { const i = e.matches;
                    t.matches = [], a(i) && i.forEach((e => { if (!a(e.indices) || !e.indices.length) return; const { indices: i, value: n } = e; let r = { indices: i, value: n };
                        e.key && (r.key = e.key.src), e.idx > -1 && (r.refIndex = e.idx), t.matches.push(r) })) }

                function K(e, t) { t.score = e.score }
                class R { constructor(e, t = {}, i) { this.options = {...m, ...t }, this.options.useExtendedSearch, this._keyStore = new u(this.options.keys), this.setCollection(e, i) }
                    setCollection(e, t) { if (this._docs = e, t && !(t instanceof g)) throw new Error("Incorrect 'index' type");
                        this._myIndex = t || _(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight }) }
                    add(e) { a(e) && (this._docs.push(e), this._myIndex.add(e)) }
                    remove(e = (() => !1)) { const t = []; for (let i = 0, n = this._docs.length; i < n; i += 1) { const r = this._docs[i];
                            e(r, i) && (this.removeAt(i), i -= 1, n -= 1, t.push(r)) } return t }
                    removeAt(e) { this._docs.splice(e, 1), this._myIndex.removeAt(e) }
                    getIndex() { return this._myIndex }
                    search(e, { limit: t = -1 } = {}) { const { includeMatches: i, includeScore: n, shouldSort: o, sortFn: a, ignoreFieldNorm: c } = this.options; let l = r(e) ? r(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e); return function(e, { ignoreFieldNorm: t = m.ignoreFieldNorm }) { e.forEach((e => { let i = 1;
                                    e.matches.forEach((({ key: e, norm: n, score: r }) => { const s = e ? e.weight : null;
                                        i *= Math.pow(0 === r && s ? Number.EPSILON : r, (s || 1) * (t ? 1 : n)) })), e.score = i })) }(l, { ignoreFieldNorm: c }), o && l.sort(a), s(t) && t > -1 && (l = l.slice(0, t)),
                            function(e, t, { includeMatches: i = m.includeMatches, includeScore: n = m.includeScore } = {}) { const r = []; return i && r.push(k), n && r.push(K), e.map((e => { const { idx: i } = e, n = { item: t[i], refIndex: i }; return r.length && r.forEach((t => { t(e, n) })), n })) }(l, this._docs, { includeMatches: i, includeScore: n }) }
                    _searchStringList(e) { const t = x(e, this.options),
                            { records: i } = this._myIndex,
                            n = []; return i.forEach((({ v: e, i: i, n: r }) => { if (!a(e)) return; const { isMatch: s, score: o, indices: c } = t.searchIn(e);
                            s && n.push({ item: e, idx: i, matches: [{ score: o, value: e, norm: r, indices: c }] }) })), n }
                    _searchLogical(e) { const t = F(e, this.options),
                            i = (e, t, n) => { if (!e.children) { const { keyId: i, searcher: r } = e, s = this._findMatches({ key: this._keyStore.get(i), value: this._myIndex.getValueForItemAtKeyId(t, i), searcher: r }); return s && s.length ? [{ idx: n, item: t, matches: s }] : [] } const r = []; for (let s = 0, o = e.children.length; s < o; s += 1) { const o = e.children[s],
                                        a = i(o, t, n); if (a.length) r.push(...a);
                                    else if (e.operator === N) return [] } return r },
                            n = this._myIndex.records,
                            r = {},
                            s = []; return n.forEach((({ $: e, i: n }) => { if (a(e)) { let o = i(t, e, n);
                                o.length && (r[n] || (r[n] = { idx: n, item: e, matches: [] }, s.push(r[n])), o.forEach((({ matches: e }) => { r[n].matches.push(...e) }))) } })), s }
                    _searchObjectList(e) { const t = x(e, this.options),
                            { keys: i, records: n } = this._myIndex,
                            r = []; return n.forEach((({ $: e, i: n }) => { if (!a(e)) return; let s = [];
                            i.forEach(((i, n) => { s.push(...this._findMatches({ key: i, value: e[n], searcher: t })) })), s.length && r.push({ idx: n, item: e, matches: s }) })), r }
                    _findMatches({ key: e, value: t, searcher: i }) { if (!a(t)) return []; let r = []; if (n(t)) t.forEach((({ v: t, i: n, n: s }) => { if (!a(t)) return; const { isMatch: o, score: c, indices: l } = i.searchIn(t);
                            o && r.push({ score: c, key: e, value: t, idx: n, norm: s, indices: l }) }));
                        else { const { v: n, n: s } = t, { isMatch: o, score: a, indices: c } = i.searchIn(n);
                            o && r.push({ score: a, key: e, value: n, norm: s, indices: c }) } return r } }
                R.version = "6.6.2", R.createIndex = _, R.parseIndex = function(e, { getFn: t = m.getFn, fieldNormWeight: i = m.fieldNormWeight } = {}) { const { keys: n, records: r } = e, s = new g({ getFn: t, fieldNormWeight: i }); return s.setKeys(n), s.setIndexRecords(r), s }, R.config = m, R.parseQuery = F,
                    function(...e) { P.push(...e) }(class { constructor(e, { isCaseSensitive: t = m.isCaseSensitive, includeMatches: i = m.includeMatches, minMatchCharLength: n = m.minMatchCharLength, ignoreLocation: r = m.ignoreLocation, findAllMatches: s = m.findAllMatches, location: o = m.location, threshold: a = m.threshold, distance: c = m.distance } = {}) { this.query = null, this.options = { isCaseSensitive: t, includeMatches: i, minMatchCharLength: n, findAllMatches: s, ignoreLocation: r, location: o, threshold: a, distance: c }, this.pattern = t ? e : e.toLowerCase(), this.query = function(e, t = {}) { return e.split("|").map((e => { let i = e.trim().split(A).filter((e => e && !!e.trim())),
                                        n = []; for (let e = 0, r = i.length; e < r; e += 1) { const r = i[e]; let s = !1,
                                            o = -1; for (; !s && ++o < w;) { const e = L[o]; let i = e.isMultiMatch(r);
                                            i && (n.push(new e(i, t)), s = !0) } if (!s)
                                            for (o = -1; ++o < w;) { const e = L[o]; let i = e.isSingleMatch(r); if (i) { n.push(new e(i, t)); break } } } return n })) }(this.pattern, this.options) }
                        static condition(e, t) { return t.useExtendedSearch }
                        searchIn(e) { const t = this.query; if (!t) return { isMatch: !1, score: 1 }; const { includeMatches: i, isCaseSensitive: n } = this.options;
                            e = n ? e : e.toLowerCase(); let r = 0,
                                s = [],
                                o = 0; for (let n = 0, a = t.length; n < a; n += 1) { const a = t[n];
                                s.length = 0, r = 0; for (let t = 0, n = a.length; t < n; t += 1) { const n = a[t],
                                        { isMatch: c, indices: l, score: h } = n.search(e); if (!c) { o = 0, r = 0, s.length = 0; break } if (r += 1, o += h, i) { const e = n.constructor.type;
                                        M.has(e) ? s = [...s, ...l] : s.push(l) } } if (r) { let e = { isMatch: !0, score: o / r }; return i && (e.indices = s), e } } return { isMatch: !1, score: 1 } } }) }, 791: function(e, t, i) {
                function n(e) { return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, n(e) }

                function r(e, t, i) { return (t = function(e) { var t = function(e, t) { if ("object" !== n(e) || null === e) return e; var i = e[Symbol.toPrimitive]; if (void 0 !== i) { var r = i.call(e, "string"); if ("object" !== n(r)) return r; throw new TypeError("@@toPrimitive must return a primitive value.") } return String(e) }(e); return "symbol" === n(t) ? t : String(t) }(t)) in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e }

                function s(e, t) { var i = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), i.push.apply(i, n) } return i }

                function o(e) { for (var t = 1; t < arguments.length; t++) { var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(i), !0).forEach((function(t) { r(e, t, i[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t)) })) } return e }

                function a(e) { return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. " }
                i.r(t), i.d(t, { __DO_NOT_USE__ActionTypes: function() { return h }, applyMiddleware: function() { return _ }, bindActionCreators: function() { return v }, combineReducers: function() { return f }, compose: function() { return g }, createStore: function() { return d }, legacy_createStore: function() { return p } }); var c = "function" == typeof Symbol && Symbol.observable || "@@observable",
                    l = function() { return Math.random().toString(36).substring(7).split("").join(".") },
                    h = { INIT: "@@redux/INIT" + l(), REPLACE: "@@redux/REPLACE" + l(), PROBE_UNKNOWN_ACTION: function() { return "@@redux/PROBE_UNKNOWN_ACTION" + l() } };

                function d(e, t, i) { var n; if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error(a(0)); if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) { if ("function" != typeof i) throw new Error(a(1)); return i(d)(e, t) } if ("function" != typeof e) throw new Error(a(2)); var r = e,
                        s = t,
                        o = [],
                        l = o,
                        p = !1;

                    function f() { l === o && (l = o.slice()) }

                    function m() { if (p) throw new Error(a(3)); return s }

                    function v(e) { if ("function" != typeof e) throw new Error(a(4)); if (p) throw new Error(a(5)); var t = !0; return f(), l.push(e),
                            function() { if (t) { if (p) throw new Error(a(6));
                                    t = !1, f(); var i = l.indexOf(e);
                                    l.splice(i, 1), o = null } } }

                    function g(e) { if (! function u(e) { if ("object" != typeof e || null === e) return !1; for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t); return Object.getPrototypeOf(e) === t }(e)) throw new Error(a(7)); if (void 0 === e.type) throw new Error(a(8)); if (p) throw new Error(a(9)); try { p = !0, s = r(s, e) } finally { p = !1 } for (var t = o = l, i = 0; i < t.length; i++)(0, t[i])(); return e } return g({ type: h.INIT }), (n = { dispatch: g, subscribe: v, getState: m, replaceReducer: function _(e) { if ("function" != typeof e) throw new Error(a(10));
                            r = e, g({ type: h.REPLACE }) } })[c] = function y() { var e, t = v; return (e = { subscribe: function(e) { if ("object" != typeof e || null === e) throw new Error(a(11));

                                function i() { e.next && e.next(m()) } return i(), { unsubscribe: t(i) } } })[c] = function() { return this }, e }, n } var p = d;

                function f(e) { for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) { var r = t[n]; "function" == typeof e[r] && (i[r] = e[r]) } var s, o = Object.keys(i); try {! function(e) { Object.keys(e).forEach((function(t) { var i = e[t]; if (void 0 === i(void 0, { type: h.INIT })) throw new Error(a(12)); if (void 0 === i(void 0, { type: h.PROBE_UNKNOWN_ACTION() })) throw new Error(a(13)) })) }(i) } catch (e) { s = e } return function(e, t) { if (void 0 === e && (e = {}), s) throw s; for (var n = !1, r = {}, c = 0; c < o.length; c++) { var l = o[c],
                                h = i[l],
                                u = e[l],
                                d = h(u, t); if (void 0 === d) throw t && t.type, new Error(a(14));
                            r[l] = d, n = n || d !== u } return (n = n || o.length !== Object.keys(e).length) ? r : e } }

                function m(e, t) { return function() { return t(e.apply(this, arguments)) } }

                function v(e, t) { if ("function" == typeof e) return m(e, t); if ("object" != typeof e || null === e) throw new Error(a(16)); var i = {}; for (var n in e) { var r = e[n]; "function" == typeof r && (i[n] = m(r, t)) } return i }

                function g() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return 0 === t.length ? function(e) { return e } : 1 === t.length ? t[0] : t.reduce((function(e, t) { return function() { return e(t.apply(void 0, arguments)) } })) }

                function _() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return function(e) { return function() { var i = e.apply(void 0, arguments),
                                n = function() { throw new Error(a(15)) },
                                r = { getState: i.getState, dispatch: function() { return n.apply(void 0, arguments) } },
                                s = t.map((function(e) { return e(r) })); return n = g.apply(void 0, s)(i.dispatch), o(o({}, i), {}, { dispatch: n }) } } } } },
        t = {};

    function i(n) { var r = t[n]; if (void 0 !== r) return r.exports; var s = t[n] = { exports: {} }; return e[n].call(s.exports, s, s.exports, i), s.exports }
    i.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return i.d(t, { a: t }), t }, i.d = function(e, t) { for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }) }, i.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }; var n, r, s = {};
    n = i(373), r = i.n(n), i(187), i(883), i(789), i(686), s.default = r(), window.Choices = s.default }(),
function(e, t) { if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else { var n = t(); for (var r in n)("object" == typeof exports ? exports : e)[r] = n[r] } }(self, (function() { return function() { var e = { 3099: function(e) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(String(e) + " is not a function"); return e } }, 6077: function(e, t, n) { var r = n(111);
                    e.exports = function(e) { if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype"); return e } }, 1223: function(e, t, n) { var r = n(5112),
                        i = n(30),
                        o = n(3070),
                        a = r("unscopables"),
                        u = Array.prototype;
                    null == u[a] && o.f(u, a, { configurable: !0, value: i(null) }), e.exports = function(e) { u[a][e] = !0 } }, 1530: function(e, t, n) { "use strict"; var r = n(8710).charAt;
                    e.exports = function(e, t, n) { return t + (n ? r(e, t).length : 1) } }, 5787: function(e) { e.exports = function(e, t, n) { if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation"); return e } }, 9670: function(e, t, n) { var r = n(111);
                    e.exports = function(e) { if (!r(e)) throw TypeError(String(e) + " is not an object"); return e } }, 4019: function(e) { e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView }, 260: function(e, t, n) { "use strict"; var r, i = n(4019),
                        o = n(9781),
                        a = n(7854),
                        u = n(111),
                        s = n(6656),
                        l = n(648),
                        c = n(8880),
                        f = n(1320),
                        p = n(3070).f,
                        h = n(9518),
                        d = n(7674),
                        v = n(5112),
                        y = n(9711),
                        g = a.Int8Array,
                        m = g && g.prototype,
                        b = a.Uint8ClampedArray,
                        x = b && b.prototype,
                        w = g && h(g),
                        E = m && h(m),
                        k = Object.prototype,
                        A = k.isPrototypeOf,
                        S = v("toStringTag"),
                        F = y("TYPED_ARRAY_TAG"),
                        T = i && !!d && "Opera" !== l(a.opera),
                        C = !1,
                        L = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 },
                        R = { BigInt64Array: 8, BigUint64Array: 8 },
                        I = function(e) { if (!u(e)) return !1; var t = l(e); return s(L, t) || s(R, t) }; for (r in L) a[r] || (T = !1); if ((!T || "function" != typeof w || w === Function.prototype) && (w = function() { throw TypeError("Incorrect invocation") }, T))
                        for (r in L) a[r] && d(a[r], w); if ((!T || !E || E === k) && (E = w.prototype, T))
                        for (r in L) a[r] && d(a[r].prototype, E); if (T && h(x) !== E && d(x, E), o && !s(E, S))
                        for (r in C = !0, p(E, S, { get: function() { return u(this) ? this[F] : void 0 } }), L) a[r] && c(a[r], F, r);
                    e.exports = { NATIVE_ARRAY_BUFFER_VIEWS: T, TYPED_ARRAY_TAG: C && F, aTypedArray: function(e) { if (I(e)) return e; throw TypeError("Target is not a typed array") }, aTypedArrayConstructor: function(e) { if (d) { if (A.call(w, e)) return e } else
                                for (var t in L)
                                    if (s(L, r)) { var n = a[t]; if (n && (e === n || A.call(n, e))) return e } throw TypeError("Target is not a typed array constructor") }, exportTypedArrayMethod: function(e, t, n) { if (o) { if (n)
                                    for (var r in L) { var i = a[r];
                                        i && s(i.prototype, e) && delete i.prototype[e] }
                                E[e] && !n || f(E, e, n ? t : T && m[e] || t) } }, exportTypedArrayStaticMethod: function(e, t, n) { var r, i; if (o) { if (d) { if (n)
                                        for (r in L)(i = a[r]) && s(i, e) && delete i[e]; if (w[e] && !n) return; try { return f(w, e, n ? t : T && g[e] || t) } catch (e) {} } for (r in L) !(i = a[r]) || i[e] && !n || f(i, e, t) } }, isView: function(e) { if (!u(e)) return !1; var t = l(e); return "DataView" === t || s(L, t) || s(R, t) }, isTypedArray: I, TypedArray: w, TypedArrayPrototype: E } }, 3331: function(e, t, n) { "use strict"; var r = n(7854),
                        i = n(9781),
                        o = n(4019),
                        a = n(8880),
                        u = n(2248),
                        s = n(7293),
                        l = n(5787),
                        c = n(9958),
                        f = n(7466),
                        p = n(7067),
                        h = n(1179),
                        d = n(9518),
                        v = n(7674),
                        y = n(8006).f,
                        g = n(3070).f,
                        m = n(1285),
                        b = n(8003),
                        x = n(9909),
                        w = x.get,
                        E = x.set,
                        k = "ArrayBuffer",
                        A = "DataView",
                        S = "Wrong index",
                        F = r.ArrayBuffer,
                        T = F,
                        C = r.DataView,
                        L = C && C.prototype,
                        R = Object.prototype,
                        I = r.RangeError,
                        U = h.pack,
                        O = h.unpack,
                        _ = function(e) { return [255 & e] },
                        M = function(e) { return [255 & e, e >> 8 & 255] },
                        z = function(e) { return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255] },
                        P = function(e) { return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0] },
                        j = function(e) { return U(e, 23, 4) },
                        D = function(e) { return U(e, 52, 8) },
                        N = function(e, t) { g(e.prototype, t, { get: function() { return w(this)[t] } }) },
                        B = function(e, t, n, r) { var i = p(n),
                                o = w(e); if (i + t > o.byteLength) throw I(S); var a = w(o.buffer).bytes,
                                u = i + o.byteOffset,
                                s = a.slice(u, u + t); return r ? s : s.reverse() },
                        q = function(e, t, n, r, i, o) { var a = p(n),
                                u = w(e); if (a + t > u.byteLength) throw I(S); for (var s = w(u.buffer).bytes, l = a + u.byteOffset, c = r(+i), f = 0; f < t; f++) s[l + f] = c[o ? f : t - f - 1] }; if (o) { if (!s((function() { F(1) })) || !s((function() { new F(-1) })) || s((function() { return new F, new F(1.5), new F(NaN), F.name != k }))) { for (var W, H = (T = function(e) { return l(this, T), new F(p(e)) }).prototype = F.prototype, Y = y(F), G = 0; Y.length > G;)(W = Y[G++]) in T || a(T, W, F[W]);
                            H.constructor = T }
                        v && d(L) !== R && v(L, R); var Q = new C(new T(2)),
                            $ = L.setInt8;
                        Q.setInt8(0, 2147483648), Q.setInt8(1, 2147483649), !Q.getInt8(0) && Q.getInt8(1) || u(L, { setInt8: function(e, t) { $.call(this, e, t << 24 >> 24) }, setUint8: function(e, t) { $.call(this, e, t << 24 >> 24) } }, { unsafe: !0 }) } else T = function(e) { l(this, T, k); var t = p(e);
                        E(this, { bytes: m.call(new Array(t), 0), byteLength: t }), i || (this.byteLength = t) }, C = function(e, t, n) { l(this, C, A), l(e, T, A); var r = w(e).byteLength,
                            o = c(t); if (o < 0 || o > r) throw I("Wrong offset"); if (o + (n = void 0 === n ? r - o : f(n)) > r) throw I("Wrong length");
                        E(this, { buffer: e, byteLength: n, byteOffset: o }), i || (this.buffer = e, this.byteLength = n, this.byteOffset = o) }, i && (N(T, "byteLength"), N(C, "buffer"), N(C, "byteLength"), N(C, "byteOffset")), u(C.prototype, { getInt8: function(e) { return B(this, 1, e)[0] << 24 >> 24 }, getUint8: function(e) { return B(this, 1, e)[0] }, getInt16: function(e) { var t = B(this, 2, e, arguments.length > 1 ? arguments[1] : void 0); return (t[1] << 8 | t[0]) << 16 >> 16 }, getUint16: function(e) { var t = B(this, 2, e, arguments.length > 1 ? arguments[1] : void 0); return t[1] << 8 | t[0] }, getInt32: function(e) { return P(B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) }, getUint32: function(e) { return P(B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0 }, getFloat32: function(e) { return O(B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23) }, getFloat64: function(e) { return O(B(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52) }, setInt8: function(e, t) { q(this, 1, e, _, t) }, setUint8: function(e, t) { q(this, 1, e, _, t) }, setInt16: function(e, t) { q(this, 2, e, M, t, arguments.length > 2 ? arguments[2] : void 0) }, setUint16: function(e, t) { q(this, 2, e, M, t, arguments.length > 2 ? arguments[2] : void 0) }, setInt32: function(e, t) { q(this, 4, e, z, t, arguments.length > 2 ? arguments[2] : void 0) }, setUint32: function(e, t) { q(this, 4, e, z, t, arguments.length > 2 ? arguments[2] : void 0) }, setFloat32: function(e, t) { q(this, 4, e, j, t, arguments.length > 2 ? arguments[2] : void 0) }, setFloat64: function(e, t) { q(this, 8, e, D, t, arguments.length > 2 ? arguments[2] : void 0) } });
                    b(T, k), b(C, A), e.exports = { ArrayBuffer: T, DataView: C } }, 1048: function(e, t, n) { "use strict"; var r = n(7908),
                        i = n(1400),
                        o = n(7466),
                        a = Math.min;
                    e.exports = [].copyWithin || function(e, t) { var n = r(this),
                            u = o(n.length),
                            s = i(e, u),
                            l = i(t, u),
                            c = arguments.length > 2 ? arguments[2] : void 0,
                            f = a((void 0 === c ? u : i(c, u)) - l, u - s),
                            p = 1; for (l < s && s < l + f && (p = -1, l += f - 1, s += f - 1); f-- > 0;) l in n ? n[s] = n[l] : delete n[s], s += p, l += p; return n } }, 1285: function(e, t, n) { "use strict"; var r = n(7908),
                        i = n(1400),
                        o = n(7466);
                    e.exports = function(e) { for (var t = r(this), n = o(t.length), a = arguments.length, u = i(a > 1 ? arguments[1] : void 0, n), s = a > 2 ? arguments[2] : void 0, l = void 0 === s ? n : i(s, n); l > u;) t[u++] = e; return t } }, 8533: function(e, t, n) { "use strict"; var r = n(2092).forEach,
                        i = n(9341)("forEach");
                    e.exports = i ? [].forEach : function(e) { return r(this, e, arguments.length > 1 ? arguments[1] : void 0) } }, 8457: function(e, t, n) { "use strict"; var r = n(9974),
                        i = n(7908),
                        o = n(3411),
                        a = n(7659),
                        u = n(7466),
                        s = n(6135),
                        l = n(1246);
                    e.exports = function(e) { var t, n, c, f, p, h, d = i(e),
                            v = "function" == typeof this ? this : Array,
                            y = arguments.length,
                            g = y > 1 ? arguments[1] : void 0,
                            m = void 0 !== g,
                            b = l(d),
                            x = 0; if (m && (g = r(g, y > 2 ? arguments[2] : void 0, 2)), null == b || v == Array && a(b))
                            for (n = new v(t = u(d.length)); t > x; x++) h = m ? g(d[x], x) : d[x], s(n, x, h);
                        else
                            for (p = (f = b.call(d)).next, n = new v; !(c = p.call(f)).done; x++) h = m ? o(f, g, [c.value, x], !0) : c.value, s(n, x, h); return n.length = x, n } }, 1318: function(e, t, n) { var r = n(5656),
                        i = n(7466),
                        o = n(1400),
                        a = function(e) { return function(t, n, a) { var u, s = r(t),
                                    l = i(s.length),
                                    c = o(a, l); if (e && n != n) { for (; l > c;)
                                        if ((u = s[c++]) != u) return !0 } else
                                    for (; l > c; c++)
                                        if ((e || c in s) && s[c] === n) return e || c || 0; return !e && -1 } };
                    e.exports = { includes: a(!0), indexOf: a(!1) } }, 2092: function(e, t, n) { var r = n(9974),
                        i = n(8361),
                        o = n(7908),
                        a = n(7466),
                        u = n(5417),
                        s = [].push,
                        l = function(e) { var t = 1 == e,
                                n = 2 == e,
                                l = 3 == e,
                                c = 4 == e,
                                f = 6 == e,
                                p = 7 == e,
                                h = 5 == e || f; return function(d, v, y, g) { for (var m, b, x = o(d), w = i(x), E = r(v, y, 3), k = a(w.length), A = 0, S = g || u, F = t ? S(d, k) : n || p ? S(d, 0) : void 0; k > A; A++)
                                    if ((h || A in w) && (b = E(m = w[A], A, x), e))
                                        if (t) F[A] = b;
                                        else if (b) switch (e) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return m;
                                    case 6:
                                        return A;
                                    case 2:
                                        s.call(F, m) } else switch (e) {
                                    case 4:
                                        return !1;
                                    case 7:
                                        s.call(F, m) }
                                return f ? -1 : l || c ? c : F } };
                    e.exports = { forEach: l(0), map: l(1), filter: l(2), some: l(3), every: l(4), find: l(5), findIndex: l(6), filterOut: l(7) } }, 6583: function(e, t, n) { "use strict"; var r = n(5656),
                        i = n(9958),
                        o = n(7466),
                        a = n(9341),
                        u = Math.min,
                        s = [].lastIndexOf,
                        l = !!s && 1 / [1].lastIndexOf(1, -0) < 0,
                        c = a("lastIndexOf"),
                        f = l || !c;
                    e.exports = f ? function(e) { if (l) return s.apply(this, arguments) || 0; var t = r(this),
                            n = o(t.length),
                            a = n - 1; for (arguments.length > 1 && (a = u(a, i(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--)
                            if (a in t && t[a] === e) return a || 0;
                        return -1 } : s }, 1194: function(e, t, n) { var r = n(7293),
                        i = n(5112),
                        o = n(7392),
                        a = i("species");
                    e.exports = function(e) { return o >= 51 || !r((function() { var t = []; return (t.constructor = {})[a] = function() { return { foo: 1 } }, 1 !== t[e](Boolean).foo })) } }, 9341: function(e, t, n) { "use strict"; var r = n(7293);
                    e.exports = function(e, t) { var n = [][e]; return !!n && r((function() { n.call(null, t || function() { throw 1 }, 1) })) } }, 3671: function(e, t, n) { var r = n(3099),
                        i = n(7908),
                        o = n(8361),
                        a = n(7466),
                        u = function(e) { return function(t, n, u, s) { r(n); var l = i(t),
                                    c = o(l),
                                    f = a(l.length),
                                    p = e ? f - 1 : 0,
                                    h = e ? -1 : 1; if (u < 2)
                                    for (;;) { if (p in c) { s = c[p], p += h; break } if (p += h, e ? p < 0 : f <= p) throw TypeError("Reduce of empty array with no initial value") }
                                for (; e ? p >= 0 : f > p; p += h) p in c && (s = n(s, c[p], p, l)); return s } };
                    e.exports = { left: u(!1), right: u(!0) } }, 5417: function(e, t, n) { var r = n(111),
                        i = n(3157),
                        o = n(5112)("species");
                    e.exports = function(e, t) { var n; return i(e) && ("function" != typeof(n = e.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t) } }, 3411: function(e, t, n) { var r = n(9670),
                        i = n(9212);
                    e.exports = function(e, t, n, o) { try { return o ? t(r(n)[0], n[1]) : t(n) } catch (t) { throw i(e), t } } }, 7072: function(e, t, n) { var r = n(5112)("iterator"),
                        i = !1; try { var o = 0,
                            a = { next: function() { return { done: !!o++ } }, return: function() { i = !0 } };
                        a[r] = function() { return this }, Array.from(a, (function() { throw 2 })) } catch (e) {}
                    e.exports = function(e, t) { if (!t && !i) return !1; var n = !1; try { var o = {};
                            o[r] = function() { return { next: function() { return { done: n = !0 } } } }, e(o) } catch (e) {} return n } }, 4326: function(e) { var t = {}.toString;
                    e.exports = function(e) { return t.call(e).slice(8, -1) } }, 648: function(e, t, n) { var r = n(1694),
                        i = n(4326),
                        o = n(5112)("toStringTag"),
                        a = "Arguments" == i(function() { return arguments }());
                    e.exports = r ? i : function(e) { var t, n, r; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (e) {} }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r } }, 9920: function(e, t, n) { var r = n(6656),
                        i = n(3887),
                        o = n(1236),
                        a = n(3070);
                    e.exports = function(e, t) { for (var n = i(t), u = a.f, s = o.f, l = 0; l < n.length; l++) { var c = n[l];
                            r(e, c) || u(e, c, s(t, c)) } } }, 8544: function(e, t, n) { var r = n(7293);
                    e.exports = !r((function() {
                        function e() {} return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype })) }, 4994: function(e, t, n) { "use strict"; var r = n(3383).IteratorPrototype,
                        i = n(30),
                        o = n(9114),
                        a = n(8003),
                        u = n(7497),
                        s = function() { return this };
                    e.exports = function(e, t, n) { var l = t + " Iterator"; return e.prototype = i(r, { next: o(1, n) }), a(e, l, !1, !0), u[l] = s, e } }, 8880: function(e, t, n) { var r = n(9781),
                        i = n(3070),
                        o = n(9114);
                    e.exports = r ? function(e, t, n) { return i.f(e, t, o(1, n)) } : function(e, t, n) { return e[t] = n, e } }, 9114: function(e) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, 6135: function(e, t, n) { "use strict"; var r = n(7593),
                        i = n(3070),
                        o = n(9114);
                    e.exports = function(e, t, n) { var a = r(t);
                        a in e ? i.f(e, a, o(0, n)) : e[a] = n } }, 654: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(4994),
                        o = n(9518),
                        a = n(7674),
                        u = n(8003),
                        s = n(8880),
                        l = n(1320),
                        c = n(5112),
                        f = n(1913),
                        p = n(7497),
                        h = n(3383),
                        d = h.IteratorPrototype,
                        v = h.BUGGY_SAFARI_ITERATORS,
                        y = c("iterator"),
                        g = "keys",
                        m = "values",
                        b = "entries",
                        x = function() { return this };
                    e.exports = function(e, t, n, c, h, w, E) { i(n, t, c); var k, A, S, F = function(e) { if (e === h && I) return I; if (!v && e in L) return L[e]; switch (e) {
                                    case g:
                                    case m:
                                    case b:
                                        return function() { return new n(this, e) } } return function() { return new n(this) } },
                            T = t + " Iterator",
                            C = !1,
                            L = e.prototype,
                            R = L[y] || L["@@iterator"] || h && L[h],
                            I = !v && R || F(h),
                            U = "Array" == t && L.entries || R; if (U && (k = o(U.call(new e)), d !== Object.prototype && k.next && (f || o(k) === d || (a ? a(k, d) : "function" != typeof k[y] && s(k, y, x)), u(k, T, !0, !0), f && (p[T] = x))), h == m && R && R.name !== m && (C = !0, I = function() { return R.call(this) }), f && !E || L[y] === I || s(L, y, I), p[t] = I, h)
                            if (A = { values: F(m), keys: w ? I : F(g), entries: F(b) }, E)
                                for (S in A)(v || C || !(S in L)) && l(L, S, A[S]);
                            else r({ target: t, proto: !0, forced: v || C }, A);
                        return A } }, 9781: function(e, t, n) { var r = n(7293);
                    e.exports = !r((function() { return 7 != Object.defineProperty({}, 1, { get: function() { return 7 } })[1] })) }, 317: function(e, t, n) { var r = n(7854),
                        i = n(111),
                        o = r.document,
                        a = i(o) && i(o.createElement);
                    e.exports = function(e) { return a ? o.createElement(e) : {} } }, 8324: function(e) { e.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 } }, 8113: function(e, t, n) { var r = n(5005);
                    e.exports = r("navigator", "userAgent") || "" }, 7392: function(e, t, n) { var r, i, o = n(7854),
                        a = n(8113),
                        u = o.process,
                        s = u && u.versions,
                        l = s && s.v8;
                    l ? i = (r = l.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]), e.exports = i && +i }, 748: function(e) { e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, 2109: function(e, t, n) { var r = n(7854),
                        i = n(1236).f,
                        o = n(8880),
                        a = n(1320),
                        u = n(3505),
                        s = n(9920),
                        l = n(4705);
                    e.exports = function(e, t) { var n, c, f, p, h, d = e.target,
                            v = e.global,
                            y = e.stat; if (n = v ? r : y ? r[d] || u(d, {}) : (r[d] || {}).prototype)
                            for (c in t) { if (p = t[c], f = e.noTargetGet ? (h = i(n, c)) && h.value : n[c], !l(v ? c : d + (y ? "." : "#") + c, e.forced) && void 0 !== f) { if (typeof p == typeof f) continue;
                                    s(p, f) }(e.sham || f && f.sham) && o(p, "sham", !0), a(n, c, p, e) } } }, 7293: function(e) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } }, 7007: function(e, t, n) { "use strict";
                    n(4916); var r = n(1320),
                        i = n(7293),
                        o = n(5112),
                        a = n(2261),
                        u = n(8880),
                        s = o("species"),
                        l = !i((function() { var e = /./; return e.exec = function() { var e = []; return e.groups = { a: "7" }, e }, "7" !== "".replace(e, "$<a>") })),
                        c = "$0" === "a".replace(/./, "$0"),
                        f = o("replace"),
                        p = !!/./ [f] && "" === /./ [f]("a", "$0"),
                        h = !i((function() { var e = /(?:)/,
                                t = e.exec;
                            e.exec = function() { return t.apply(this, arguments) }; var n = "ab".split(e); return 2 !== n.length || "a" !== n[0] || "b" !== n[1] }));
                    e.exports = function(e, t, n, f) { var d = o(e),
                            v = !i((function() { var t = {}; return t[d] = function() { return 7 }, 7 != "" [e](t) })),
                            y = v && !i((function() { var t = !1,
                                    n = /a/; return "split" === e && ((n = {}).constructor = {}, n.constructor[s] = function() { return n }, n.flags = "", n[d] = /./ [d]), n.exec = function() { return t = !0, null }, n[d](""), !t })); if (!v || !y || "replace" === e && (!l || !c || p) || "split" === e && !h) { var g = /./ [d],
                                m = n(d, "" [e], (function(e, t, n, r, i) { return t.exec === a ? v && !i ? { done: !0, value: g.call(t, n, r) } : { done: !0, value: e.call(n, t, r) } : { done: !1 } }), { REPLACE_KEEPS_$0: c, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p }),
                                b = m[0],
                                x = m[1];
                            r(String.prototype, e, b), r(RegExp.prototype, d, 2 == t ? function(e, t) { return x.call(e, this, t) } : function(e) { return x.call(e, this) }) }
                        f && u(RegExp.prototype[d], "sham", !0) } }, 9974: function(e, t, n) { var r = n(3099);
                    e.exports = function(e, t, n) { if (r(e), void 0 === t) return e; switch (n) {
                            case 0:
                                return function() { return e.call(t) };
                            case 1:
                                return function(n) { return e.call(t, n) };
                            case 2:
                                return function(n, r) { return e.call(t, n, r) };
                            case 3:
                                return function(n, r, i) { return e.call(t, n, r, i) } } return function() { return e.apply(t, arguments) } } }, 5005: function(e, t, n) { var r = n(857),
                        i = n(7854),
                        o = function(e) { return "function" == typeof e ? e : void 0 };
                    e.exports = function(e, t) { return arguments.length < 2 ? o(r[e]) || o(i[e]) : r[e] && r[e][t] || i[e] && i[e][t] } }, 1246: function(e, t, n) { var r = n(648),
                        i = n(7497),
                        o = n(5112)("iterator");
                    e.exports = function(e) { if (null != e) return e[o] || e["@@iterator"] || i[r(e)] } }, 8554: function(e, t, n) { var r = n(9670),
                        i = n(1246);
                    e.exports = function(e) { var t = i(e); if ("function" != typeof t) throw TypeError(String(e) + " is not iterable"); return r(t.call(e)) } }, 647: function(e, t, n) { var r = n(7908),
                        i = Math.floor,
                        o = "".replace,
                        a = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                        u = /\$([$&'`]|\d\d?)/g;
                    e.exports = function(e, t, n, s, l, c) { var f = n + e.length,
                            p = s.length,
                            h = u; return void 0 !== l && (l = r(l), h = a), o.call(c, h, (function(r, o) { var a; switch (o.charAt(0)) {
                                case "$":
                                    return "$";
                                case "&":
                                    return e;
                                case "`":
                                    return t.slice(0, n);
                                case "'":
                                    return t.slice(f);
                                case "<":
                                    a = l[o.slice(1, -1)]; break;
                                default:
                                    var u = +o; if (0 === u) return r; if (u > p) { var c = i(u / 10); return 0 === c ? r : c <= p ? void 0 === s[c - 1] ? o.charAt(1) : s[c - 1] + o.charAt(1) : r }
                                    a = s[u - 1] } return void 0 === a ? "" : a })) } }, 7854: function(e, t, n) { var r = function(e) { return e && e.Math == Math && e };
                    e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function() { return this }() || Function("return this")() }, 6656: function(e) { var t = {}.hasOwnProperty;
                    e.exports = function(e, n) { return t.call(e, n) } }, 3501: function(e) { e.exports = {} }, 490: function(e, t, n) { var r = n(5005);
                    e.exports = r("document", "documentElement") }, 4664: function(e, t, n) { var r = n(9781),
                        i = n(7293),
                        o = n(317);
                    e.exports = !r && !i((function() { return 7 != Object.defineProperty(o("div"), "a", { get: function() { return 7 } }).a })) }, 1179: function(e) { var t = Math.abs,
                        n = Math.pow,
                        r = Math.floor,
                        i = Math.log,
                        o = Math.LN2;
                    e.exports = { pack: function(e, a, u) { var s, l, c, f = new Array(u),
                                p = 8 * u - a - 1,
                                h = (1 << p) - 1,
                                d = h >> 1,
                                v = 23 === a ? n(2, -24) - n(2, -77) : 0,
                                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                                g = 0; for ((e = t(e)) != e || e === 1 / 0 ? (l = e != e ? 1 : 0, s = h) : (s = r(i(e) / o), e * (c = n(2, -s)) < 1 && (s--, c *= 2), (e += s + d >= 1 ? v / c : v * n(2, 1 - d)) * c >= 2 && (s++, c /= 2), s + d >= h ? (l = 0, s = h) : s + d >= 1 ? (l = (e * c - 1) * n(2, a), s += d) : (l = e * n(2, d - 1) * n(2, a), s = 0)); a >= 8; f[g++] = 255 & l, l /= 256, a -= 8); for (s = s << a | l, p += a; p > 0; f[g++] = 255 & s, s /= 256, p -= 8); return f[--g] |= 128 * y, f }, unpack: function(e, t) { var r, i = e.length,
                                o = 8 * i - t - 1,
                                a = (1 << o) - 1,
                                u = a >> 1,
                                s = o - 7,
                                l = i - 1,
                                c = e[l--],
                                f = 127 & c; for (c >>= 7; s > 0; f = 256 * f + e[l], l--, s -= 8); for (r = f & (1 << -s) - 1, f >>= -s, s += t; s > 0; r = 256 * r + e[l], l--, s -= 8); if (0 === f) f = 1 - u;
                            else { if (f === a) return r ? NaN : c ? -1 / 0 : 1 / 0;
                                r += n(2, t), f -= u } return (c ? -1 : 1) * r * n(2, f - t) } } }, 8361: function(e, t, n) { var r = n(7293),
                        i = n(4326),
                        o = "".split;
                    e.exports = r((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(e) { return "String" == i(e) ? o.call(e, "") : Object(e) } : Object }, 9587: function(e, t, n) { var r = n(111),
                        i = n(7674);
                    e.exports = function(e, t, n) { var o, a; return i && "function" == typeof(o = t.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && i(e, a), e } }, 2788: function(e, t, n) { var r = n(5465),
                        i = Function.toString; "function" != typeof r.inspectSource && (r.inspectSource = function(e) { return i.call(e) }), e.exports = r.inspectSource }, 9909: function(e, t, n) { var r, i, o, a = n(8536),
                        u = n(7854),
                        s = n(111),
                        l = n(8880),
                        c = n(6656),
                        f = n(5465),
                        p = n(6200),
                        h = n(3501),
                        d = u.WeakMap; if (a) { var v = f.state || (f.state = new d),
                            y = v.get,
                            g = v.has,
                            m = v.set;
                        r = function(e, t) { return t.facade = e, m.call(v, e, t), t }, i = function(e) { return y.call(v, e) || {} }, o = function(e) { return g.call(v, e) } } else { var b = p("state");
                        h[b] = !0, r = function(e, t) { return t.facade = e, l(e, b, t), t }, i = function(e) { return c(e, b) ? e[b] : {} }, o = function(e) { return c(e, b) } }
                    e.exports = { set: r, get: i, has: o, enforce: function(e) { return o(e) ? i(e) : r(e, {}) }, getterFor: function(e) { return function(t) { var n; if (!s(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required"); return n } } } }, 7659: function(e, t, n) { var r = n(5112),
                        i = n(7497),
                        o = r("iterator"),
                        a = Array.prototype;
                    e.exports = function(e) { return void 0 !== e && (i.Array === e || a[o] === e) } }, 3157: function(e, t, n) { var r = n(4326);
                    e.exports = Array.isArray || function(e) { return "Array" == r(e) } }, 4705: function(e, t, n) { var r = n(7293),
                        i = /#|\.prototype\./,
                        o = function(e, t) { var n = u[a(e)]; return n == l || n != s && ("function" == typeof t ? r(t) : !!t) },
                        a = o.normalize = function(e) { return String(e).replace(i, ".").toLowerCase() },
                        u = o.data = {},
                        s = o.NATIVE = "N",
                        l = o.POLYFILL = "P";
                    e.exports = o }, 111: function(e) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, 1913: function(e) { e.exports = !1 }, 7850: function(e, t, n) { var r = n(111),
                        i = n(4326),
                        o = n(5112)("match");
                    e.exports = function(e) { var t; return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e)) } }, 9212: function(e, t, n) { var r = n(9670);
                    e.exports = function(e) { var t = e.return; if (void 0 !== t) return r(t.call(e)).value } }, 3383: function(e, t, n) { "use strict"; var r, i, o, a = n(7293),
                        u = n(9518),
                        s = n(8880),
                        l = n(6656),
                        c = n(5112),
                        f = n(1913),
                        p = c("iterator"),
                        h = !1;
                    [].keys && ("next" in (o = [].keys()) ? (i = u(u(o))) !== Object.prototype && (r = i) : h = !0); var d = null == r || a((function() { var e = {}; return r[p].call(e) !== e }));
                    d && (r = {}), f && !d || l(r, p) || s(r, p, (function() { return this })), e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: h } }, 7497: function(e) { e.exports = {} }, 133: function(e, t, n) { var r = n(7293);
                    e.exports = !!Object.getOwnPropertySymbols && !r((function() { return !String(Symbol()) })) }, 590: function(e, t, n) { var r = n(7293),
                        i = n(5112),
                        o = n(1913),
                        a = i("iterator");
                    e.exports = !r((function() { var e = new URL("b?a=1&b=2&c=3", "http://a"),
                            t = e.searchParams,
                            n = ""; return e.pathname = "c%20d", t.forEach((function(e, r) { t.delete("b"), n += r + e })), o && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host })) }, 8536: function(e, t, n) { var r = n(7854),
                        i = n(2788),
                        o = r.WeakMap;
                    e.exports = "function" == typeof o && /native code/.test(i(o)) }, 1574: function(e, t, n) { "use strict"; var r = n(9781),
                        i = n(7293),
                        o = n(1956),
                        a = n(5181),
                        u = n(5296),
                        s = n(7908),
                        l = n(8361),
                        c = Object.assign,
                        f = Object.defineProperty;
                    e.exports = !c || i((function() { if (r && 1 !== c({ b: 1 }, c(f({}, "a", { enumerable: !0, get: function() { f(this, "b", { value: 3, enumerable: !1 }) } }), { b: 2 })).b) return !0; var e = {},
                            t = {},
                            n = Symbol(),
                            i = "abcdefghijklmnopqrst"; return e[n] = 7, i.split("").forEach((function(e) { t[e] = e })), 7 != c({}, e)[n] || o(c({}, t)).join("") != i })) ? function(e, t) { for (var n = s(e), i = arguments.length, c = 1, f = a.f, p = u.f; i > c;)
                            for (var h, d = l(arguments[c++]), v = f ? o(d).concat(f(d)) : o(d), y = v.length, g = 0; y > g;) h = v[g++], r && !p.call(d, h) || (n[h] = d[h]); return n } : c }, 30: function(e, t, n) { var r, i = n(9670),
                        o = n(6048),
                        a = n(748),
                        u = n(3501),
                        s = n(490),
                        l = n(317),
                        c = n(6200)("IE_PROTO"),
                        f = function() {},
                        p = function(e) { return "<script>" + e + "<\/script>" },
                        h = function() { try { r = document.domain && new ActiveXObject("htmlfile") } catch (e) {} var e, t;
                            h = r ? function(e) { e.write(p("")), e.close(); var t = e.parentWindow.Object; return e = null, t }(r) : ((t = l("iframe")).style.display = "none", s.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F); for (var n = a.length; n--;) delete h.prototype[a[n]]; return h() };
                    u[c] = !0, e.exports = Object.create || function(e, t) { var n; return null !== e ? (f.prototype = i(e), n = new f, f.prototype = null, n[c] = e) : n = h(), void 0 === t ? n : o(n, t) } }, 6048: function(e, t, n) { var r = n(9781),
                        i = n(3070),
                        o = n(9670),
                        a = n(1956);
                    e.exports = r ? Object.defineProperties : function(e, t) { o(e); for (var n, r = a(t), u = r.length, s = 0; u > s;) i.f(e, n = r[s++], t[n]); return e } }, 3070: function(e, t, n) { var r = n(9781),
                        i = n(4664),
                        o = n(9670),
                        a = n(7593),
                        u = Object.defineProperty;
                    t.f = r ? u : function(e, t, n) { if (o(e), t = a(t, !0), o(n), i) try { return u(e, t, n) } catch (e) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported"); return "value" in n && (e[t] = n.value), e } }, 1236: function(e, t, n) { var r = n(9781),
                        i = n(5296),
                        o = n(9114),
                        a = n(5656),
                        u = n(7593),
                        s = n(6656),
                        l = n(4664),
                        c = Object.getOwnPropertyDescriptor;
                    t.f = r ? c : function(e, t) { if (e = a(e), t = u(t, !0), l) try { return c(e, t) } catch (e) {}
                        if (s(e, t)) return o(!i.f.call(e, t), e[t]) } }, 8006: function(e, t, n) { var r = n(6324),
                        i = n(748).concat("length", "prototype");
                    t.f = Object.getOwnPropertyNames || function(e) { return r(e, i) } }, 5181: function(e, t) { t.f = Object.getOwnPropertySymbols }, 9518: function(e, t, n) { var r = n(6656),
                        i = n(7908),
                        o = n(6200),
                        a = n(8544),
                        u = o("IE_PROTO"),
                        s = Object.prototype;
                    e.exports = a ? Object.getPrototypeOf : function(e) { return e = i(e), r(e, u) ? e[u] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null } }, 6324: function(e, t, n) { var r = n(6656),
                        i = n(5656),
                        o = n(1318).indexOf,
                        a = n(3501);
                    e.exports = function(e, t) { var n, u = i(e),
                            s = 0,
                            l = []; for (n in u) !r(a, n) && r(u, n) && l.push(n); for (; t.length > s;) r(u, n = t[s++]) && (~o(l, n) || l.push(n)); return l } }, 1956: function(e, t, n) { var r = n(6324),
                        i = n(748);
                    e.exports = Object.keys || function(e) { return r(e, i) } }, 5296: function(e, t) { "use strict"; var n = {}.propertyIsEnumerable,
                        r = Object.getOwnPropertyDescriptor,
                        i = r && !n.call({ 1: 2 }, 1);
                    t.f = i ? function(e) { var t = r(this, e); return !!t && t.enumerable } : n }, 7674: function(e, t, n) { var r = n(9670),
                        i = n(6077);
                    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() { var e, t = !1,
                            n = {}; try {
                            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array } catch (e) {} return function(n, o) { return r(n), i(o), t ? e.call(n, o) : n.__proto__ = o, n } }() : void 0) }, 288: function(e, t, n) { "use strict"; var r = n(1694),
                        i = n(648);
                    e.exports = r ? {}.toString : function() { return "[object " + i(this) + "]" } }, 3887: function(e, t, n) { var r = n(5005),
                        i = n(8006),
                        o = n(5181),
                        a = n(9670);
                    e.exports = r("Reflect", "ownKeys") || function(e) { var t = i.f(a(e)),
                            n = o.f; return n ? t.concat(n(e)) : t } }, 857: function(e, t, n) { var r = n(7854);
                    e.exports = r }, 2248: function(e, t, n) { var r = n(1320);
                    e.exports = function(e, t, n) { for (var i in t) r(e, i, t[i], n); return e } }, 1320: function(e, t, n) { var r = n(7854),
                        i = n(8880),
                        o = n(6656),
                        a = n(3505),
                        u = n(2788),
                        s = n(9909),
                        l = s.get,
                        c = s.enforce,
                        f = String(String).split("String");
                    (e.exports = function(e, t, n, u) { var s, l = !!u && !!u.unsafe,
                            p = !!u && !!u.enumerable,
                            h = !!u && !!u.noTargetGet; "function" == typeof n && ("string" != typeof t || o(n, "name") || i(n, "name", t), (s = c(n)).source || (s.source = f.join("string" == typeof t ? t : ""))), e !== r ? (l ? !h && e[t] && (p = !0) : delete e[t], p ? e[t] = n : i(e, t, n)) : p ? e[t] = n : a(t, n) })(Function.prototype, "toString", (function() { return "function" == typeof this && l(this).source || u(this) })) }, 7651: function(e, t, n) { var r = n(4326),
                        i = n(2261);
                    e.exports = function(e, t) { var n = e.exec; if ("function" == typeof n) { var o = n.call(e, t); if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null"); return o } if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver"); return i.call(e, t) } }, 2261: function(e, t, n) { "use strict"; var r, i, o = n(7066),
                        a = n(2999),
                        u = RegExp.prototype.exec,
                        s = String.prototype.replace,
                        l = u,
                        c = (r = /a/, i = /b*/g, u.call(r, "a"), u.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
                        f = a.UNSUPPORTED_Y || a.BROKEN_CARET,
                        p = void 0 !== /()??/.exec("")[1];
                    (c || p || f) && (l = function(e) { var t, n, r, i, a = this,
                            l = f && a.sticky,
                            h = o.call(a),
                            d = a.source,
                            v = 0,
                            y = e; return l && (-1 === (h = h.replace("y", "")).indexOf("g") && (h += "g"), y = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (d = "(?: " + d + ")", y = " " + y, v++), n = new RegExp("^(?:" + d + ")", h)), p && (n = new RegExp("^" + d + "$(?!\\s)", h)), c && (t = a.lastIndex), r = u.call(l ? n : a, y), l ? r ? (r.input = r.input.slice(v), r[0] = r[0].slice(v), r.index = a.lastIndex, a.lastIndex += r[0].length) : a.lastIndex = 0 : c && r && (a.lastIndex = a.global ? r.index + r[0].length : t), p && r && r.length > 1 && s.call(r[0], n, (function() { for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0) })), r }), e.exports = l }, 7066: function(e, t, n) { "use strict"; var r = n(9670);
                    e.exports = function() { var e = r(this),
                            t = ""; return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t } }, 2999: function(e, t, n) { "use strict"; var r = n(7293);

                    function i(e, t) { return RegExp(e, t) }
                    t.UNSUPPORTED_Y = r((function() { var e = i("a", "y"); return e.lastIndex = 2, null != e.exec("abcd") })), t.BROKEN_CARET = r((function() { var e = i("^r", "gy"); return e.lastIndex = 2, null != e.exec("str") })) }, 4488: function(e) { e.exports = function(e) { if (null == e) throw TypeError("Can't call method on " + e); return e } }, 3505: function(e, t, n) { var r = n(7854),
                        i = n(8880);
                    e.exports = function(e, t) { try { i(r, e, t) } catch (n) { r[e] = t } return t } }, 6340: function(e, t, n) { "use strict"; var r = n(5005),
                        i = n(3070),
                        o = n(5112),
                        a = n(9781),
                        u = o("species");
                    e.exports = function(e) { var t = r(e),
                            n = i.f;
                        a && t && !t[u] && n(t, u, { configurable: !0, get: function() { return this } }) } }, 8003: function(e, t, n) { var r = n(3070).f,
                        i = n(6656),
                        o = n(5112)("toStringTag");
                    e.exports = function(e, t, n) { e && !i(e = n ? e : e.prototype, o) && r(e, o, { configurable: !0, value: t }) } }, 6200: function(e, t, n) { var r = n(2309),
                        i = n(9711),
                        o = r("keys");
                    e.exports = function(e) { return o[e] || (o[e] = i(e)) } }, 5465: function(e, t, n) { var r = n(7854),
                        i = n(3505),
                        o = "__core-js_shared__",
                        a = r[o] || i(o, {});
                    e.exports = a }, 2309: function(e, t, n) { var r = n(1913),
                        i = n(5465);
                    (e.exports = function(e, t) { return i[e] || (i[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: "3.9.0", mode: r ? "pure" : "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" }) }, 6707: function(e, t, n) { var r = n(9670),
                        i = n(3099),
                        o = n(5112)("species");
                    e.exports = function(e, t) { var n, a = r(e).constructor; return void 0 === a || null == (n = r(a)[o]) ? t : i(n) } }, 8710: function(e, t, n) { var r = n(9958),
                        i = n(4488),
                        o = function(e) { return function(t, n) { var o, a, u = String(i(t)),
                                    s = r(n),
                                    l = u.length; return s < 0 || s >= l ? e ? "" : void 0 : (o = u.charCodeAt(s)) < 55296 || o > 56319 || s + 1 === l || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? u.charAt(s) : o : e ? u.slice(s, s + 2) : a - 56320 + (o - 55296 << 10) + 65536 } };
                    e.exports = { codeAt: o(!1), charAt: o(!0) } }, 3197: function(e) { "use strict"; var t = 2147483647,
                        n = /[^\0-\u007E]/,
                        r = /[.\u3002\uFF0E\uFF61]/g,
                        i = "Overflow: input needs wider integers to process",
                        o = Math.floor,
                        a = String.fromCharCode,
                        u = function(e) { return e + 22 + 75 * (e < 26) },
                        s = function(e, t, n) { var r = 0; for (e = n ? o(e / 700) : e >> 1, e += o(e / t); e > 455; r += 36) e = o(e / 35); return o(r + 36 * e / (e + 38)) },
                        l = function(e) { var n, r, l = [],
                                c = (e = function(e) { for (var t = [], n = 0, r = e.length; n < r;) { var i = e.charCodeAt(n++); if (i >= 55296 && i <= 56319 && n < r) { var o = e.charCodeAt(n++);
                                            56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), n--) } else t.push(i) } return t }(e)).length,
                                f = 128,
                                p = 0,
                                h = 72; for (n = 0; n < e.length; n++)(r = e[n]) < 128 && l.push(a(r)); var d = l.length,
                                v = d; for (d && l.push("-"); v < c;) { var y = t; for (n = 0; n < e.length; n++)(r = e[n]) >= f && r < y && (y = r); var g = v + 1; if (y - f > o((t - p) / g)) throw RangeError(i); for (p += (y - f) * g, f = y, n = 0; n < e.length; n++) { if ((r = e[n]) < f && ++p > t) throw RangeError(i); if (r == f) { for (var m = p, b = 36;; b += 36) { var x = b <= h ? 1 : b >= h + 26 ? 26 : b - h; if (m < x) break; var w = m - x,
                                                E = 36 - x;
                                            l.push(a(u(x + w % E))), m = o(w / E) }
                                        l.push(a(u(m))), h = s(p, g, v == d), p = 0, ++v } }++p, ++f } return l.join("") };
                    e.exports = function(e) { var t, i, o = [],
                            a = e.toLowerCase().replace(r, ".").split("."); for (t = 0; t < a.length; t++) i = a[t], o.push(n.test(i) ? "xn--" + l(i) : i); return o.join(".") } }, 6091: function(e, t, n) { var r = n(7293),
                        i = n(1361);
                    e.exports = function(e) { return r((function() { return !!i[e]() || "​᠎" != "​᠎" [e]() || i[e].name !== e })) } }, 3111: function(e, t, n) { var r = n(4488),
                        i = "[" + n(1361) + "]",
                        o = RegExp("^" + i + i + "*"),
                        a = RegExp(i + i + "*$"),
                        u = function(e) { return function(t) { var n = String(r(t)); return 1 & e && (n = n.replace(o, "")), 2 & e && (n = n.replace(a, "")), n } };
                    e.exports = { start: u(1), end: u(2), trim: u(3) } }, 1400: function(e, t, n) { var r = n(9958),
                        i = Math.max,
                        o = Math.min;
                    e.exports = function(e, t) { var n = r(e); return n < 0 ? i(n + t, 0) : o(n, t) } }, 7067: function(e, t, n) { var r = n(9958),
                        i = n(7466);
                    e.exports = function(e) { if (void 0 === e) return 0; var t = r(e),
                            n = i(t); if (t !== n) throw RangeError("Wrong length or index"); return n } }, 5656: function(e, t, n) { var r = n(8361),
                        i = n(4488);
                    e.exports = function(e) { return r(i(e)) } }, 9958: function(e) { var t = Math.ceil,
                        n = Math.floor;
                    e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e) } }, 7466: function(e, t, n) { var r = n(9958),
                        i = Math.min;
                    e.exports = function(e) { return e > 0 ? i(r(e), 9007199254740991) : 0 } }, 7908: function(e, t, n) { var r = n(4488);
                    e.exports = function(e) { return Object(r(e)) } }, 4590: function(e, t, n) { var r = n(3002);
                    e.exports = function(e, t) { var n = r(e); if (n % t) throw RangeError("Wrong offset"); return n } }, 3002: function(e, t, n) { var r = n(9958);
                    e.exports = function(e) { var t = r(e); if (t < 0) throw RangeError("The argument can't be less than 0"); return t } }, 7593: function(e, t, n) { var r = n(111);
                    e.exports = function(e, t) { if (!r(e)) return e; var n, i; if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i; if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i; if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i; throw TypeError("Can't convert object to primitive value") } }, 1694: function(e, t, n) { var r = {};
                    r[n(5112)("toStringTag")] = "z", e.exports = "[object z]" === String(r) }, 9843: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(7854),
                        o = n(9781),
                        a = n(3832),
                        u = n(260),
                        s = n(3331),
                        l = n(5787),
                        c = n(9114),
                        f = n(8880),
                        p = n(7466),
                        h = n(7067),
                        d = n(4590),
                        v = n(7593),
                        y = n(6656),
                        g = n(648),
                        m = n(111),
                        b = n(30),
                        x = n(7674),
                        w = n(8006).f,
                        E = n(7321),
                        k = n(2092).forEach,
                        A = n(6340),
                        S = n(3070),
                        F = n(1236),
                        T = n(9909),
                        C = n(9587),
                        L = T.get,
                        R = T.set,
                        I = S.f,
                        U = F.f,
                        O = Math.round,
                        _ = i.RangeError,
                        M = s.ArrayBuffer,
                        z = s.DataView,
                        P = u.NATIVE_ARRAY_BUFFER_VIEWS,
                        j = u.TYPED_ARRAY_TAG,
                        D = u.TypedArray,
                        N = u.TypedArrayPrototype,
                        B = u.aTypedArrayConstructor,
                        q = u.isTypedArray,
                        W = "BYTES_PER_ELEMENT",
                        H = "Wrong length",
                        Y = function(e, t) { for (var n = 0, r = t.length, i = new(B(e))(r); r > n;) i[n] = t[n++]; return i },
                        G = function(e, t) { I(e, t, { get: function() { return L(this)[t] } }) },
                        Q = function(e) { var t; return e instanceof M || "ArrayBuffer" == (t = g(e)) || "SharedArrayBuffer" == t },
                        $ = function(e, t) { return q(e) && "symbol" != typeof t && t in e && String(+t) == String(t) },
                        V = function(e, t) { return $(e, t = v(t, !0)) ? c(2, e[t]) : U(e, t) },
                        X = function(e, t, n) { return !($(e, t = v(t, !0)) && m(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable ? I(e, t, n) : (e[t] = n.value, e) };
                    o ? (P || (F.f = V, S.f = X, G(N, "buffer"), G(N, "byteOffset"), G(N, "byteLength"), G(N, "length")), r({ target: "Object", stat: !0, forced: !P }, { getOwnPropertyDescriptor: V, defineProperty: X }), e.exports = function(e, t, n) { var o = e.match(/\d+$/)[0] / 8,
                            u = e + (n ? "Clamped" : "") + "Array",
                            s = "get" + e,
                            c = "set" + e,
                            v = i[u],
                            y = v,
                            g = y && y.prototype,
                            S = {},
                            F = function(e, t) { I(e, t, { get: function() { return function(e, t) { var n = L(e); return n.view[s](t * o + n.byteOffset, !0) }(this, t) }, set: function(e) { return function(e, t, r) { var i = L(e);
                                            n && (r = (r = O(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.view[c](t * o + i.byteOffset, r, !0) }(this, t, e) }, enumerable: !0 }) };
                        P ? a && (y = t((function(e, t, n, r) { return l(e, y, u), C(m(t) ? Q(t) ? void 0 !== r ? new v(t, d(n, o), r) : void 0 !== n ? new v(t, d(n, o)) : new v(t) : q(t) ? Y(y, t) : E.call(y, t) : new v(h(t)), e, y) })), x && x(y, D), k(w(v), (function(e) { e in y || f(y, e, v[e]) })), y.prototype = g) : (y = t((function(e, t, n, r) { l(e, y, u); var i, a, s, c = 0,
                                f = 0; if (m(t)) { if (!Q(t)) return q(t) ? Y(y, t) : E.call(y, t);
                                i = t, f = d(n, o); var v = t.byteLength; if (void 0 === r) { if (v % o) throw _(H); if ((a = v - f) < 0) throw _(H) } else if ((a = p(r) * o) + f > v) throw _(H);
                                s = a / o } else s = h(t), i = new M(a = s * o); for (R(e, { buffer: i, byteOffset: f, byteLength: a, length: s, view: new z(i) }); c < s;) F(e, c++) })), x && x(y, D), g = y.prototype = b(N)), g.constructor !== y && f(g, "constructor", y), j && f(g, j, u), S[u] = y, r({ global: !0, forced: y != v, sham: !P }, S), W in y || f(y, W, o), W in g || f(g, W, o), A(u) }) : e.exports = function() {} }, 3832: function(e, t, n) { var r = n(7854),
                        i = n(7293),
                        o = n(7072),
                        a = n(260).NATIVE_ARRAY_BUFFER_VIEWS,
                        u = r.ArrayBuffer,
                        s = r.Int8Array;
                    e.exports = !a || !i((function() { s(1) })) || !i((function() { new s(-1) })) || !o((function(e) { new s, new s(null), new s(1.5), new s(e) }), !0) || i((function() { return 1 !== new s(new u(2), 1, void 0).length })) }, 3074: function(e, t, n) { var r = n(260).aTypedArrayConstructor,
                        i = n(6707);
                    e.exports = function(e, t) { for (var n = i(e, e.constructor), o = 0, a = t.length, u = new(r(n))(a); a > o;) u[o] = t[o++]; return u } }, 7321: function(e, t, n) { var r = n(7908),
                        i = n(7466),
                        o = n(1246),
                        a = n(7659),
                        u = n(9974),
                        s = n(260).aTypedArrayConstructor;
                    e.exports = function(e) { var t, n, l, c, f, p, h = r(e),
                            d = arguments.length,
                            v = d > 1 ? arguments[1] : void 0,
                            y = void 0 !== v,
                            g = o(h); if (null != g && !a(g))
                            for (p = (f = g.call(h)).next, h = []; !(c = p.call(f)).done;) h.push(c.value); for (y && d > 2 && (v = u(v, arguments[2], 2)), n = i(h.length), l = new(s(this))(n), t = 0; n > t; t++) l[t] = y ? v(h[t], t) : h[t]; return l } }, 9711: function(e) { var t = 0,
                        n = Math.random();
                    e.exports = function(e) { return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++t + n).toString(36) } }, 3307: function(e, t, n) { var r = n(133);
                    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator }, 5112: function(e, t, n) { var r = n(7854),
                        i = n(2309),
                        o = n(6656),
                        a = n(9711),
                        u = n(133),
                        s = n(3307),
                        l = i("wks"),
                        c = r.Symbol,
                        f = s ? c : c && c.withoutSetter || a;
                    e.exports = function(e) { return o(l, e) || (u && o(c, e) ? l[e] = c[e] : l[e] = f("Symbol." + e)), l[e] } }, 1361: function(e) { e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff" }, 8264: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(7854),
                        o = n(3331),
                        a = n(6340),
                        u = o.ArrayBuffer;
                    r({ global: !0, forced: i.ArrayBuffer !== u }, { ArrayBuffer: u }), a("ArrayBuffer") }, 2222: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(7293),
                        o = n(3157),
                        a = n(111),
                        u = n(7908),
                        s = n(7466),
                        l = n(6135),
                        c = n(5417),
                        f = n(1194),
                        p = n(5112),
                        h = n(7392),
                        d = p("isConcatSpreadable"),
                        v = 9007199254740991,
                        y = "Maximum allowed index exceeded",
                        g = h >= 51 || !i((function() { var e = []; return e[d] = !1, e.concat()[0] !== e })),
                        m = f("concat"),
                        b = function(e) { if (!a(e)) return !1; var t = e[d]; return void 0 !== t ? !!t : o(e) };
                    r({ target: "Array", proto: !0, forced: !g || !m }, { concat: function(e) { var t, n, r, i, o, a = u(this),
                                f = c(a, 0),
                                p = 0; for (t = -1, r = arguments.length; t < r; t++)
                                if (b(o = -1 === t ? a : arguments[t])) { if (p + (i = s(o.length)) > v) throw TypeError(y); for (n = 0; n < i; n++, p++) n in o && l(f, p, o[n]) } else { if (p >= v) throw TypeError(y);
                                    l(f, p++, o) }
                            return f.length = p, f } }) }, 7327: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(2092).filter;
                    r({ target: "Array", proto: !0, forced: !n(1194)("filter") }, { filter: function(e) { return i(this, e, arguments.length > 1 ? arguments[1] : void 0) } }) }, 2772: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(1318).indexOf,
                        o = n(9341),
                        a = [].indexOf,
                        u = !!a && 1 / [1].indexOf(1, -0) < 0,
                        s = o("indexOf");
                    r({ target: "Array", proto: !0, forced: u || !s }, { indexOf: function(e) { return u ? a.apply(this, arguments) || 0 : i(this, e, arguments.length > 1 ? arguments[1] : void 0) } }) }, 6992: function(e, t, n) { "use strict"; var r = n(5656),
                        i = n(1223),
                        o = n(7497),
                        a = n(9909),
                        u = n(654),
                        s = "Array Iterator",
                        l = a.set,
                        c = a.getterFor(s);
                    e.exports = u(Array, "Array", (function(e, t) { l(this, { type: s, target: r(e), index: 0, kind: t }) }), (function() { var e = c(this),
                            t = e.target,
                            n = e.kind,
                            r = e.index++; return !t || r >= t.length ? (e.target = void 0, { value: void 0, done: !0 }) : "keys" == n ? { value: r, done: !1 } : "values" == n ? { value: t[r], done: !1 } : { value: [r, t[r]], done: !1 } }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries") }, 1249: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(2092).map;
                    r({ target: "Array", proto: !0, forced: !n(1194)("map") }, { map: function(e) { return i(this, e, arguments.length > 1 ? arguments[1] : void 0) } }) }, 7042: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(111),
                        o = n(3157),
                        a = n(1400),
                        u = n(7466),
                        s = n(5656),
                        l = n(6135),
                        c = n(5112),
                        f = n(1194)("slice"),
                        p = c("species"),
                        h = [].slice,
                        d = Math.max;
                    r({ target: "Array", proto: !0, forced: !f }, { slice: function(e, t) { var n, r, c, f = s(this),
                                v = u(f.length),
                                y = a(e, v),
                                g = a(void 0 === t ? v : t, v); if (o(f) && ("function" != typeof(n = f.constructor) || n !== Array && !o(n.prototype) ? i(n) && null === (n = n[p]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return h.call(f, y, g); for (r = new(void 0 === n ? Array : n)(d(g - y, 0)), c = 0; y < g; y++, c++) y in f && l(r, c, f[y]); return r.length = c, r } }) }, 561: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(1400),
                        o = n(9958),
                        a = n(7466),
                        u = n(7908),
                        s = n(5417),
                        l = n(6135),
                        c = n(1194)("splice"),
                        f = Math.max,
                        p = Math.min;
                    r({ target: "Array", proto: !0, forced: !c }, { splice: function(e, t) { var n, r, c, v, y, g, m = u(this),
                                b = a(m.length),
                                x = i(e, b),
                                w = arguments.length; if (0 === w ? n = r = 0 : 1 === w ? (n = 0, r = b - x) : (n = w - 2, r = p(f(o(t), 0), b - x)), b + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded"); for (c = s(m, r), v = 0; v < r; v++)(y = x + v) in m && l(c, v, m[y]); if (c.length = r, n < r) { for (v = x; v < b - r; v++) g = v + n, (y = v + r) in m ? m[g] = m[y] : delete m[g]; for (v = b; v > b - r + n; v--) delete m[v - 1] } else if (n > r)
                                for (v = b - r; v > x; v--) g = v + n - 1, (y = v + r - 1) in m ? m[g] = m[y] : delete m[g]; for (v = 0; v < n; v++) m[v + x] = arguments[v + 2]; return m.length = b - r + n, c } }) }, 8309: function(e, t, n) { var r = n(9781),
                        i = n(3070).f,
                        o = Function.prototype,
                        a = o.toString,
                        u = /^\s*function ([^ (]*)/,
                        s = "name";
                    r && !(s in o) && i(o, s, { configurable: !0, get: function() { try { return a.call(this).match(u)[1] } catch (e) { return "" } } }) }, 489: function(e, t, n) { var r = n(2109),
                        i = n(7293),
                        o = n(7908),
                        a = n(9518),
                        u = n(8544);
                    r({ target: "Object", stat: !0, forced: i((function() { a(1) })), sham: !u }, { getPrototypeOf: function(e) { return a(o(e)) } }) }, 1539: function(e, t, n) { var r = n(1694),
                        i = n(1320),
                        o = n(288);
                    r || i(Object.prototype, "toString", o, { unsafe: !0 }) }, 4916: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(2261);
                    r({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i }) }, 9714: function(e, t, n) { "use strict"; var r = n(1320),
                        i = n(9670),
                        o = n(7293),
                        a = n(7066),
                        u = "toString",
                        s = RegExp.prototype,
                        l = s.toString,
                        c = o((function() { return "/a/b" != l.call({ source: "a", flags: "b" }) })),
                        f = l.name != u;
                    (c || f) && r(RegExp.prototype, u, (function() { var e = i(this),
                            t = String(e.source),
                            n = e.flags; return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in s) ? a.call(e) : n) }), { unsafe: !0 }) }, 8783: function(e, t, n) { "use strict"; var r = n(8710).charAt,
                        i = n(9909),
                        o = n(654),
                        a = "String Iterator",
                        u = i.set,
                        s = i.getterFor(a);
                    o(String, "String", (function(e) { u(this, { type: a, string: String(e), index: 0 }) }), (function() { var e, t = s(this),
                            n = t.string,
                            i = t.index; return i >= n.length ? { value: void 0, done: !0 } : (e = r(n, i), t.index += e.length, { value: e, done: !1 }) })) }, 4723: function(e, t, n) { "use strict"; var r = n(7007),
                        i = n(9670),
                        o = n(7466),
                        a = n(4488),
                        u = n(1530),
                        s = n(7651);
                    r("match", 1, (function(e, t, n) { return [function(t) { var n = a(this),
                                r = null == t ? void 0 : t[e]; return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n)) }, function(e) { var r = n(t, e, this); if (r.done) return r.value; var a = i(e),
                                l = String(this); if (!a.global) return s(a, l); var c = a.unicode;
                            a.lastIndex = 0; for (var f, p = [], h = 0; null !== (f = s(a, l));) { var d = String(f[0]);
                                p[h] = d, "" === d && (a.lastIndex = u(l, o(a.lastIndex), c)), h++ } return 0 === h ? null : p }] })) }, 5306: function(e, t, n) { "use strict"; var r = n(7007),
                        i = n(9670),
                        o = n(7466),
                        a = n(9958),
                        u = n(4488),
                        s = n(1530),
                        l = n(647),
                        c = n(7651),
                        f = Math.max,
                        p = Math.min;
                    r("replace", 2, (function(e, t, n, r) { var h = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                            d = r.REPLACE_KEEPS_$0,
                            v = h ? "$" : "$0"; return [function(n, r) { var i = u(this),
                                o = null == n ? void 0 : n[e]; return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r) }, function(e, r) { if (!h && d || "string" == typeof r && -1 === r.indexOf(v)) { var u = n(t, e, this, r); if (u.done) return u.value } var y = i(e),
                                g = String(this),
                                m = "function" == typeof r;
                            m || (r = String(r)); var b = y.global; if (b) { var x = y.unicode;
                                y.lastIndex = 0 } for (var w = [];;) { var E = c(y, g); if (null === E) break; if (w.push(E), !b) break; "" === String(E[0]) && (y.lastIndex = s(g, o(y.lastIndex), x)) } for (var k, A = "", S = 0, F = 0; F < w.length; F++) { E = w[F]; for (var T = String(E[0]), C = f(p(a(E.index), g.length), 0), L = [], R = 1; R < E.length; R++) L.push(void 0 === (k = E[R]) ? k : String(k)); var I = E.groups; if (m) { var U = [T].concat(L, C, g);
                                    void 0 !== I && U.push(I); var O = String(r.apply(void 0, U)) } else O = l(T, g, C, L, I, r);
                                C >= S && (A += g.slice(S, C) + O, S = C + T.length) } return A + g.slice(S) }] })) }, 3123: function(e, t, n) { "use strict"; var r = n(7007),
                        i = n(7850),
                        o = n(9670),
                        a = n(4488),
                        u = n(6707),
                        s = n(1530),
                        l = n(7466),
                        c = n(7651),
                        f = n(2261),
                        p = n(7293),
                        h = [].push,
                        d = Math.min,
                        v = 4294967295,
                        y = !p((function() { return !RegExp(v, "y") }));
                    r("split", 2, (function(e, t, n) { var r; return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) { var r = String(a(this)),
                                o = void 0 === n ? v : n >>> 0; if (0 === o) return []; if (void 0 === e) return [r]; if (!i(e)) return t.call(r, e, o); for (var u, s, l, c = [], p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, y = new RegExp(e.source, p + "g");
                                (u = f.call(y, r)) && !((s = y.lastIndex) > d && (c.push(r.slice(d, u.index)), u.length > 1 && u.index < r.length && h.apply(c, u.slice(1)), l = u[0].length, d = s, c.length >= o));) y.lastIndex === u.index && y.lastIndex++; return d === r.length ? !l && y.test("") || c.push("") : c.push(r.slice(d)), c.length > o ? c.slice(0, o) : c } : "0".split(void 0, 0).length ? function(e, n) { return void 0 === e && 0 === n ? [] : t.call(this, e, n) } : t, [function(t, n) { var i = a(this),
                                o = null == t ? void 0 : t[e]; return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n) }, function(e, i) { var a = n(r, e, this, i, r !== t); if (a.done) return a.value; var f = o(e),
                                p = String(this),
                                h = u(f, RegExp),
                                g = f.unicode,
                                m = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (y ? "y" : "g"),
                                b = new h(y ? f : "^(?:" + f.source + ")", m),
                                x = void 0 === i ? v : i >>> 0; if (0 === x) return []; if (0 === p.length) return null === c(b, p) ? [p] : []; for (var w = 0, E = 0, k = []; E < p.length;) { b.lastIndex = y ? E : 0; var A, S = c(b, y ? p : p.slice(E)); if (null === S || (A = d(l(b.lastIndex + (y ? 0 : E)), p.length)) === w) E = s(p, E, g);
                                else { if (k.push(p.slice(w, E)), k.length === x) return k; for (var F = 1; F <= S.length - 1; F++)
                                        if (k.push(S[F]), k.length === x) return k;
                                    E = w = A } } return k.push(p.slice(w)), k }] }), !y) }, 3210: function(e, t, n) { "use strict"; var r = n(2109),
                        i = n(3111).trim;
                    r({ target: "String", proto: !0, forced: n(6091)("trim") }, { trim: function() { return i(this) } }) }, 2990: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(1048),
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("copyWithin", (function(e, t) { return i.call(o(this), e, t, arguments.length > 2 ? arguments[2] : void 0) })) }, 8927: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(2092).every,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("every", (function(e) { return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0) })) }, 3105: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(1285),
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("fill", (function(e) { return i.apply(o(this), arguments) })) }, 5035: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(2092).filter,
                        o = n(3074),
                        a = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("filter", (function(e) { var t = i(a(this), e, arguments.length > 1 ? arguments[1] : void 0); return o(this, t) })) }, 7174: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(2092).findIndex,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("findIndex", (function(e) { return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0) })) }, 4345: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(2092).find,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("find", (function(e) { return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0) })) }, 2846: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(2092).forEach,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("forEach", (function(e) { i(o(this), e, arguments.length > 1 ? arguments[1] : void 0) })) }, 4731: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(1318).includes,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("includes", (function(e) { return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0) })) }, 7209: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(1318).indexOf,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("indexOf", (function(e) { return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0) })) }, 6319: function(e, t, n) { "use strict"; var r = n(7854),
                        i = n(260),
                        o = n(6992),
                        a = n(5112)("iterator"),
                        u = r.Uint8Array,
                        s = o.values,
                        l = o.keys,
                        c = o.entries,
                        f = i.aTypedArray,
                        p = i.exportTypedArrayMethod,
                        h = u && u.prototype[a],
                        d = !!h && ("values" == h.name || null == h.name),
                        v = function() { return s.call(f(this)) };
                    p("entries", (function() { return c.call(f(this)) })), p("keys", (function() { return l.call(f(this)) })), p("values", v, !d), p(a, v, !d) }, 8867: function(e, t, n) { "use strict"; var r = n(260),
                        i = r.aTypedArray,
                        o = r.exportTypedArrayMethod,
                        a = [].join;
                    o("join", (function(e) { return a.apply(i(this), arguments) })) }, 7789: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(6583),
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("lastIndexOf", (function(e) { return i.apply(o(this), arguments) })) }, 3739: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(2092).map,
                        o = n(6707),
                        a = r.aTypedArray,
                        u = r.aTypedArrayConstructor;
                    (0, r.exportTypedArrayMethod)("map", (function(e) { return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0, (function(e, t) { return new(u(o(e, e.constructor)))(t) })) })) }, 4483: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(3671).right,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("reduceRight", (function(e) { return i(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0) })) }, 9368: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(3671).left,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("reduce", (function(e) { return i(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0) })) }, 2056: function(e, t, n) { "use strict"; var r = n(260),
                        i = r.aTypedArray,
                        o = r.exportTypedArrayMethod,
                        a = Math.floor;
                    o("reverse", (function() { for (var e, t = this, n = i(t).length, r = a(n / 2), o = 0; o < r;) e = t[o], t[o++] = t[--n], t[n] = e; return t })) }, 3462: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(7466),
                        o = n(4590),
                        a = n(7908),
                        u = n(7293),
                        s = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("set", (function(e) { s(this); var t = o(arguments.length > 1 ? arguments[1] : void 0, 1),
                            n = this.length,
                            r = a(e),
                            u = i(r.length),
                            l = 0; if (u + t > n) throw RangeError("Wrong length"); for (; l < u;) this[t + l] = r[l++] }), u((function() { new Int8Array(1).set({}) }))) }, 678: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(6707),
                        o = n(7293),
                        a = r.aTypedArray,
                        u = r.aTypedArrayConstructor,
                        s = r.exportTypedArrayMethod,
                        l = [].slice;
                    s("slice", (function(e, t) { for (var n = l.call(a(this), e, t), r = i(this, this.constructor), o = 0, s = n.length, c = new(u(r))(s); s > o;) c[o] = n[o++]; return c }), o((function() { new Int8Array(1).slice() }))) }, 7462: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(2092).some,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("some", (function(e) { return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0) })) }, 3824: function(e, t, n) { "use strict"; var r = n(260),
                        i = r.aTypedArray,
                        o = r.exportTypedArrayMethod,
                        a = [].sort;
                    o("sort", (function(e) { return a.call(i(this), e) })) }, 5021: function(e, t, n) { "use strict"; var r = n(260),
                        i = n(7466),
                        o = n(1400),
                        a = n(6707),
                        u = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("subarray", (function(e, t) { var n = u(this),
                            r = n.length,
                            s = o(e, r); return new(a(n, n.constructor))(n.buffer, n.byteOffset + s * n.BYTES_PER_ELEMENT, i((void 0 === t ? r : o(t, r)) - s)) })) }, 2974: function(e, t, n) { "use strict"; var r = n(7854),
                        i = n(260),
                        o = n(7293),
                        a = r.Int8Array,
                        u = i.aTypedArray,
                        s = i.exportTypedArrayMethod,
                        l = [].toLocaleString,
                        c = [].slice,
                        f = !!a && o((function() { l.call(new a(1)) }));
                    s("toLocaleString", (function() { return l.apply(f ? c.call(u(this)) : u(this), arguments) }), o((function() { return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString() })) || !o((function() { a.prototype.toLocaleString.call([1, 2]) }))) }, 5016: function(e, t, n) { "use strict"; var r = n(260).exportTypedArrayMethod,
                        i = n(7293),
                        o = n(7854).Uint8Array,
                        a = o && o.prototype || {},
                        u = [].toString,
                        s = [].join;
                    i((function() { u.call({}) })) && (u = function() { return s.call(this) }); var l = a.toString != u;
                    r("toString", u, l) }, 2472: function(e, t, n) { n(9843)("Uint8", (function(e) { return function(t, n, r) { return e(this, t, n, r) } })) }, 4747: function(e, t, n) { var r = n(7854),
                        i = n(8324),
                        o = n(8533),
                        a = n(8880); for (var u in i) { var s = r[u],
                            l = s && s.prototype; if (l && l.forEach !== o) try { a(l, "forEach", o) } catch (e) { l.forEach = o } } }, 3948: function(e, t, n) { var r = n(7854),
                        i = n(8324),
                        o = n(6992),
                        a = n(8880),
                        u = n(5112),
                        s = u("iterator"),
                        l = u("toStringTag"),
                        c = o.values; for (var f in i) { var p = r[f],
                            h = p && p.prototype; if (h) { if (h[s] !== c) try { a(h, s, c) } catch (e) { h[s] = c }
                            if (h[l] || a(h, l, f), i[f])
                                for (var d in o)
                                    if (h[d] !== o[d]) try { a(h, d, o[d]) } catch (e) { h[d] = o[d] } } } }, 1637: function(e, t, n) { "use strict";
                    n(6992); var r = n(2109),
                        i = n(5005),
                        o = n(590),
                        a = n(1320),
                        u = n(2248),
                        s = n(8003),
                        l = n(4994),
                        c = n(9909),
                        f = n(5787),
                        p = n(6656),
                        h = n(9974),
                        d = n(648),
                        v = n(9670),
                        y = n(111),
                        g = n(30),
                        m = n(9114),
                        b = n(8554),
                        x = n(1246),
                        w = n(5112),
                        E = i("fetch"),
                        k = i("Headers"),
                        A = w("iterator"),
                        S = "URLSearchParams",
                        F = "URLSearchParamsIterator",
                        T = c.set,
                        C = c.getterFor(S),
                        L = c.getterFor(F),
                        R = /\+/g,
                        I = Array(4),
                        U = function(e) { return I[e - 1] || (I[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi")) },
                        O = function(e) { try { return decodeURIComponent(e) } catch (t) { return e } },
                        _ = function(e) { var t = e.replace(R, " "),
                                n = 4; try { return decodeURIComponent(t) } catch (e) { for (; n;) t = t.replace(U(n--), O); return t } },
                        M = /[!'()~]|%20/g,
                        z = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" },
                        P = function(e) { return z[e] },
                        j = function(e) { return encodeURIComponent(e).replace(M, P) },
                        D = function(e, t) { if (t)
                                for (var n, r, i = t.split("&"), o = 0; o < i.length;)(n = i[o++]).length && (r = n.split("="), e.push({ key: _(r.shift()), value: _(r.join("=")) })) },
                        N = function(e) { this.entries.length = 0, D(this.entries, e) },
                        B = function(e, t) { if (e < t) throw TypeError("Not enough arguments") },
                        q = l((function(e, t) { T(this, { type: F, iterator: b(C(e).entries), kind: t }) }), "Iterator", (function() { var e = L(this),
                                t = e.kind,
                                n = e.iterator.next(),
                                r = n.value; return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n })),
                        W = function() { f(this, W, S); var e, t, n, r, i, o, a, u, s, l = arguments.length > 0 ? arguments[0] : void 0,
                                h = []; if (T(this, { type: S, entries: h, updateURL: function() {}, updateSearchParams: N }), void 0 !== l)
                                if (y(l))
                                    if ("function" == typeof(e = x(l)))
                                        for (n = (t = e.call(l)).next; !(r = n.call(t)).done;) { if ((a = (o = (i = b(v(r.value))).next).call(i)).done || (u = o.call(i)).done || !o.call(i).done) throw TypeError("Expected sequence with length 2");
                                            h.push({ key: a.value + "", value: u.value + "" }) } else
                                            for (s in l) p(l, s) && h.push({ key: s, value: l[s] + "" });
                                    else D(h, "string" == typeof l ? "?" === l.charAt(0) ? l.slice(1) : l : l + "") },
                        H = W.prototype;
                    u(H, { append: function(e, t) { B(arguments.length, 2); var n = C(this);
                            n.entries.push({ key: e + "", value: t + "" }), n.updateURL() }, delete: function(e) { B(arguments.length, 1); for (var t = C(this), n = t.entries, r = e + "", i = 0; i < n.length;) n[i].key === r ? n.splice(i, 1) : i++;
                            t.updateURL() }, get: function(e) { B(arguments.length, 1); for (var t = C(this).entries, n = e + "", r = 0; r < t.length; r++)
                                if (t[r].key === n) return t[r].value;
                            return null }, getAll: function(e) { B(arguments.length, 1); for (var t = C(this).entries, n = e + "", r = [], i = 0; i < t.length; i++) t[i].key === n && r.push(t[i].value); return r }, has: function(e) { B(arguments.length, 1); for (var t = C(this).entries, n = e + "", r = 0; r < t.length;)
                                if (t[r++].key === n) return !0;
                            return !1 }, set: function(e, t) { B(arguments.length, 1); for (var n, r = C(this), i = r.entries, o = !1, a = e + "", u = t + "", s = 0; s < i.length; s++)(n = i[s]).key === a && (o ? i.splice(s--, 1) : (o = !0, n.value = u));
                            o || i.push({ key: a, value: u }), r.updateURL() }, sort: function() { var e, t, n, r = C(this),
                                i = r.entries,
                                o = i.slice(); for (i.length = 0, n = 0; n < o.length; n++) { for (e = o[n], t = 0; t < n; t++)
                                    if (i[t].key > e.key) { i.splice(t, 0, e); break }
                                t === n && i.push(e) }
                            r.updateURL() }, forEach: function(e) { for (var t, n = C(this).entries, r = h(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this) }, keys: function() { return new q(this, "keys") }, values: function() { return new q(this, "values") }, entries: function() { return new q(this, "entries") } }, { enumerable: !0 }), a(H, A, H.entries), a(H, "toString", (function() { for (var e, t = C(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(j(e.key) + "=" + j(e.value)); return n.join("&") }), { enumerable: !0 }), s(W, S), r({ global: !0, forced: !o }, { URLSearchParams: W }), o || "function" != typeof E || "function" != typeof k || r({ global: !0, enumerable: !0, forced: !0 }, { fetch: function(e) { var t, n, r, i = [e]; return arguments.length > 1 && (y(t = arguments[1]) && (n = t.body, d(n) === S && ((r = t.headers ? new k(t.headers) : new k).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = g(t, { body: m(0, String(n)), headers: m(0, r) }))), i.push(t)), E.apply(this, i) } }), e.exports = { URLSearchParams: W, getState: C } }, 285: function(e, t, n) { "use strict";
                    n(8783); var r, i = n(2109),
                        o = n(9781),
                        a = n(590),
                        u = n(7854),
                        s = n(6048),
                        l = n(1320),
                        c = n(5787),
                        f = n(6656),
                        p = n(1574),
                        h = n(8457),
                        d = n(8710).codeAt,
                        v = n(3197),
                        y = n(8003),
                        g = n(1637),
                        m = n(9909),
                        b = u.URL,
                        x = g.URLSearchParams,
                        w = g.getState,
                        E = m.set,
                        k = m.getterFor("URL"),
                        A = Math.floor,
                        S = Math.pow,
                        F = "Invalid scheme",
                        T = "Invalid host",
                        C = "Invalid port",
                        L = /[A-Za-z]/,
                        R = /[\d+-.A-Za-z]/,
                        I = /\d/,
                        U = /^(0x|0X)/,
                        O = /^[0-7]+$/,
                        _ = /^\d+$/,
                        M = /^[\dA-Fa-f]+$/,
                        z = /[\u0000\t\u000A\u000D #%/:?@[\\]]/,
                        P = /[\u0000\t\u000A\u000D #/:?@[\\]]/,
                        j = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
                        D = /[\t\u000A\u000D]/g,
                        N = function(e, t) { var n, r, i; if ("[" == t.charAt(0)) { if ("]" != t.charAt(t.length - 1)) return T; if (!(n = q(t.slice(1, -1)))) return T;
                                e.host = n } else if (X(e)) { if (t = v(t), z.test(t)) return T; if (null === (n = B(t))) return T;
                                e.host = n } else { if (P.test(t)) return T; for (n = "", r = h(t), i = 0; i < r.length; i++) n += $(r[i], H);
                                e.host = n } },
                        B = function(e) { var t, n, r, i, o, a, u, s = e.split("."); if (s.length && "" == s[s.length - 1] && s.pop(), (t = s.length) > 4) return e; for (n = [], r = 0; r < t; r++) { if ("" == (i = s[r])) return e; if (o = 10, i.length > 1 && "0" == i.charAt(0) && (o = U.test(i) ? 16 : 8, i = i.slice(8 == o ? 1 : 2)), "" === i) a = 0;
                                else { if (!(10 == o ? _ : 8 == o ? O : M).test(i)) return e;
                                    a = parseInt(i, o) }
                                n.push(a) } for (r = 0; r < t; r++)
                                if (a = n[r], r == t - 1) { if (a >= S(256, 5 - t)) return null } else if (a > 255) return null; for (u = n.pop(), r = 0; r < n.length; r++) u += n[r] * S(256, 3 - r); return u },
                        q = function(e) { var t, n, r, i, o, a, u, s = [0, 0, 0, 0, 0, 0, 0, 0],
                                l = 0,
                                c = null,
                                f = 0,
                                p = function() { return e.charAt(f) }; if (":" == p()) { if (":" != e.charAt(1)) return;
                                f += 2, c = ++l } for (; p();) { if (8 == l) return; if (":" != p()) { for (t = n = 0; n < 4 && M.test(p());) t = 16 * t + parseInt(p(), 16), f++, n++; if ("." == p()) { if (0 == n) return; if (f -= n, l > 6) return; for (r = 0; p();) { if (i = null, r > 0) { if (!("." == p() && r < 4)) return;
                                                f++ } if (!I.test(p())) return; for (; I.test(p());) { if (o = parseInt(p(), 10), null === i) i = o;
                                                else { if (0 == i) return;
                                                    i = 10 * i + o } if (i > 255) return;
                                                f++ }
                                            s[l] = 256 * s[l] + i, 2 != ++r && 4 != r || l++ } if (4 != r) return; break } if (":" == p()) { if (f++, !p()) return } else if (p()) return;
                                    s[l++] = t } else { if (null !== c) return;
                                    f++, c = ++l } } if (null !== c)
                                for (a = l - c, l = 7; 0 != l && a > 0;) u = s[l], s[l--] = s[c + a - 1], s[c + --a] = u;
                            else if (8 != l) return; return s },
                        W = function(e) { var t, n, r, i; if ("number" == typeof e) { for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = A(e / 256); return t.join(".") } if ("object" == typeof e) { for (t = "", r = function(e) { for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = o), ++i); return i > n && (t = r, n = i), t }(e), n = 0; n < 8; n++) i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += e[n].toString(16), n < 7 && (t += ":"))); return "[" + t + "]" } return e },
                        H = {},
                        Y = p({}, H, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
                        G = p({}, Y, { "#": 1, "?": 1, "{": 1, "}": 1 }),
                        Q = p({}, G, { "/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1 }),
                        $ = function(e, t) { var n = d(e, 0); return n > 32 && n < 127 && !f(t, e) ? e : encodeURIComponent(e) },
                        V = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
                        X = function(e) { return f(V, e.scheme) },
                        K = function(e) { return "" != e.username || "" != e.password },
                        Z = function(e) { return !e.host || e.cannotBeABaseURL || "file" == e.scheme },
                        J = function(e, t) { var n; return 2 == e.length && L.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n) },
                        ee = function(e) { var t; return e.length > 1 && J(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t) },
                        te = function(e) { var t = e.path,
                                n = t.length;!n || "file" == e.scheme && 1 == n && J(t[0], !0) || t.pop() },
                        ne = function(e) { return "." === e || "%2e" === e.toLowerCase() },
                        re = {},
                        ie = {},
                        oe = {},
                        ae = {},
                        ue = {},
                        se = {},
                        le = {},
                        ce = {},
                        fe = {},
                        pe = {},
                        he = {},
                        de = {},
                        ve = {},
                        ye = {},
                        ge = {},
                        me = {},
                        be = {},
                        xe = {},
                        we = {},
                        Ee = {},
                        ke = {},
                        Ae = function(e, t, n, i) { var o, a, u, s, l, c = n || re,
                                p = 0,
                                d = "",
                                v = !1,
                                y = !1,
                                g = !1; for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(j, "")), t = t.replace(D, ""), o = h(t); p <= o.length;) { switch (a = o[p], c) {
                                    case re:
                                        if (!a || !L.test(a)) { if (n) return F;
                                            c = oe; continue }
                                        d += a.toLowerCase(), c = ie; break;
                                    case ie:
                                        if (a && (R.test(a) || "+" == a || "-" == a || "." == a)) d += a.toLowerCase();
                                        else { if (":" != a) { if (n) return F;
                                                d = "", c = oe, p = 0; continue } if (n && (X(e) != f(V, d) || "file" == d && (K(e) || null !== e.port) || "file" == e.scheme && !e.host)) return; if (e.scheme = d, n) return void(X(e) && V[e.scheme] == e.port && (e.port = null));
                                            d = "", "file" == e.scheme ? c = ye : X(e) && i && i.scheme == e.scheme ? c = ae : X(e) ? c = ce : "/" == o[p + 1] ? (c = ue, p++) : (e.cannotBeABaseURL = !0, e.path.push(""), c = we) } break;
                                    case oe:
                                        if (!i || i.cannotBeABaseURL && "#" != a) return F; if (i.cannotBeABaseURL && "#" == a) { e.scheme = i.scheme, e.path = i.path.slice(), e.query = i.query, e.fragment = "", e.cannotBeABaseURL = !0, c = ke; break }
                                        c = "file" == i.scheme ? ye : se; continue;
                                    case ae:
                                        if ("/" != a || "/" != o[p + 1]) { c = se; continue }
                                        c = fe, p++; break;
                                    case ue:
                                        if ("/" == a) { c = pe; break }
                                        c = xe; continue;
                                    case se:
                                        if (e.scheme = i.scheme, a == r) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query;
                                        else if ("/" == a || "\\" == a && X(e)) c = le;
                                        else if ("?" == a) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = "", c = Ee;
                                        else { if ("#" != a) { e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.path.pop(), c = xe; continue }
                                            e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query, e.fragment = "", c = ke } break;
                                    case le:
                                        if (!X(e) || "/" != a && "\\" != a) { if ("/" != a) { e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, c = xe; continue }
                                            c = pe } else c = fe; break;
                                    case ce:
                                        if (c = fe, "/" != a || "/" != d.charAt(p + 1)) continue;
                                        p++; break;
                                    case fe:
                                        if ("/" != a && "\\" != a) { c = pe; continue } break;
                                    case pe:
                                        if ("@" == a) { v && (d = "%40" + d), v = !0, u = h(d); for (var m = 0; m < u.length; m++) { var b = u[m]; if (":" != b || g) { var x = $(b, Q);
                                                    g ? e.password += x : e.username += x } else g = !0 }
                                            d = "" } else if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && X(e)) { if (v && "" == d) return "Invalid authority";
                                            p -= h(d).length + 1, d = "", c = he } else d += a; break;
                                    case he:
                                    case de:
                                        if (n && "file" == e.scheme) { c = me; continue } if (":" != a || y) { if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && X(e)) { if (X(e) && "" == d) return T; if (n && "" == d && (K(e) || null !== e.port)) return; if (s = N(e, d)) return s; if (d = "", c = be, n) return; continue } "[" == a ? y = !0 : "]" == a && (y = !1), d += a } else { if ("" == d) return T; if (s = N(e, d)) return s; if (d = "", c = ve, n == de) return } break;
                                    case ve:
                                        if (!I.test(a)) { if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && X(e) || n) { if ("" != d) { var w = parseInt(d, 10); if (w > 65535) return C;
                                                    e.port = X(e) && w === V[e.scheme] ? null : w, d = "" } if (n) return;
                                                c = be; continue } return C }
                                        d += a; break;
                                    case ye:
                                        if (e.scheme = "file", "/" == a || "\\" == a) c = ge;
                                        else { if (!i || "file" != i.scheme) { c = xe; continue } if (a == r) e.host = i.host, e.path = i.path.slice(), e.query = i.query;
                                            else if ("?" == a) e.host = i.host, e.path = i.path.slice(), e.query = "", c = Ee;
                                            else { if ("#" != a) { ee(o.slice(p).join("")) || (e.host = i.host, e.path = i.path.slice(), te(e)), c = xe; continue }
                                                e.host = i.host, e.path = i.path.slice(), e.query = i.query, e.fragment = "", c = ke } } break;
                                    case ge:
                                        if ("/" == a || "\\" == a) { c = me; break }
                                        i && "file" == i.scheme && !ee(o.slice(p).join("")) && (J(i.path[0], !0) ? e.path.push(i.path[0]) : e.host = i.host), c = xe; continue;
                                    case me:
                                        if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) { if (!n && J(d)) c = xe;
                                            else if ("" == d) { if (e.host = "", n) return;
                                                c = be } else { if (s = N(e, d)) return s; if ("localhost" == e.host && (e.host = ""), n) return;
                                                d = "", c = be } continue }
                                        d += a; break;
                                    case be:
                                        if (X(e)) { if (c = xe, "/" != a && "\\" != a) continue } else if (n || "?" != a)
                                            if (n || "#" != a) { if (a != r && (c = xe, "/" != a)) continue } else e.fragment = "", c = ke;
                                        else e.query = "", c = Ee; break;
                                    case xe:
                                        if (a == r || "/" == a || "\\" == a && X(e) || !n && ("?" == a || "#" == a)) { if (".." === (l = (l = d).toLowerCase()) || "%2e." === l || ".%2e" === l || "%2e%2e" === l ? (te(e), "/" == a || "\\" == a && X(e) || e.path.push("")) : ne(d) ? "/" == a || "\\" == a && X(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && J(d) && (e.host && (e.host = ""), d = d.charAt(0) + ":"), e.path.push(d)), d = "", "file" == e.scheme && (a == r || "?" == a || "#" == a))
                                                for (; e.path.length > 1 && "" === e.path[0];) e.path.shift(); "?" == a ? (e.query = "", c = Ee) : "#" == a && (e.fragment = "", c = ke) } else d += $(a, G); break;
                                    case we:
                                        "?" == a ? (e.query = "", c = Ee) : "#" == a ? (e.fragment = "", c = ke) : a != r && (e.path[0] += $(a, H)); break;
                                    case Ee:
                                        n || "#" != a ? a != r && ("'" == a && X(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : $(a, H)) : (e.fragment = "", c = ke); break;
                                    case ke:
                                        a != r && (e.fragment += $(a, Y)) }
                                p++ } },
                        Se = function(e) { var t, n, r = c(this, Se, "URL"),
                                i = arguments.length > 1 ? arguments[1] : void 0,
                                a = String(e),
                                u = E(r, { type: "URL" }); if (void 0 !== i)
                                if (i instanceof Se) t = k(i);
                                else if (n = Ae(t = {}, String(i))) throw TypeError(n); if (n = Ae(u, a, null, t)) throw TypeError(n); var s = u.searchParams = new x,
                                l = w(s);
                            l.updateSearchParams(u.query), l.updateURL = function() { u.query = String(s) || null }, o || (r.href = Te.call(r), r.origin = Ce.call(r), r.protocol = Le.call(r), r.username = Re.call(r), r.password = Ie.call(r), r.host = Ue.call(r), r.hostname = Oe.call(r), r.port = _e.call(r), r.pathname = Me.call(r), r.search = ze.call(r), r.searchParams = Pe.call(r), r.hash = je.call(r)) },
                        Fe = Se.prototype,
                        Te = function() { var e = k(this),
                                t = e.scheme,
                                n = e.username,
                                r = e.password,
                                i = e.host,
                                o = e.port,
                                a = e.path,
                                u = e.query,
                                s = e.fragment,
                                l = t + ":"; return null !== i ? (l += "//", K(e) && (l += n + (r ? ":" + r : "") + "@"), l += W(i), null !== o && (l += ":" + o)) : "file" == t && (l += "//"), l += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== u && (l += "?" + u), null !== s && (l += "#" + s), l },
                        Ce = function() { var e = k(this),
                                t = e.scheme,
                                n = e.port; if ("blob" == t) try { return new URL(t.path[0]).origin } catch (e) { return "null" }
                            return "file" != t && X(e) ? t + "://" + W(e.host) + (null !== n ? ":" + n : "") : "null" },
                        Le = function() { return k(this).scheme + ":" },
                        Re = function() { return k(this).username },
                        Ie = function() { return k(this).password },
                        Ue = function() { var e = k(this),
                                t = e.host,
                                n = e.port; return null === t ? "" : null === n ? W(t) : W(t) + ":" + n },
                        Oe = function() { var e = k(this).host; return null === e ? "" : W(e) },
                        _e = function() { var e = k(this).port; return null === e ? "" : String(e) },
                        Me = function() { var e = k(this),
                                t = e.path; return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "" },
                        ze = function() { var e = k(this).query; return e ? "?" + e : "" },
                        Pe = function() { return k(this).searchParams },
                        je = function() { var e = k(this).fragment; return e ? "#" + e : "" },
                        De = function(e, t) { return { get: e, set: t, configurable: !0, enumerable: !0 } }; if (o && s(Fe, { href: De(Te, (function(e) { var t = k(this),
                                    n = String(e),
                                    r = Ae(t, n); if (r) throw TypeError(r);
                                w(t.searchParams).updateSearchParams(t.query) })), origin: De(Ce), protocol: De(Le, (function(e) { var t = k(this);
                                Ae(t, String(e) + ":", re) })), username: De(Re, (function(e) { var t = k(this),
                                    n = h(String(e)); if (!Z(t)) { t.username = ""; for (var r = 0; r < n.length; r++) t.username += $(n[r], Q) } })), password: De(Ie, (function(e) { var t = k(this),
                                    n = h(String(e)); if (!Z(t)) { t.password = ""; for (var r = 0; r < n.length; r++) t.password += $(n[r], Q) } })), host: De(Ue, (function(e) { var t = k(this);
                                t.cannotBeABaseURL || Ae(t, String(e), he) })), hostname: De(Oe, (function(e) { var t = k(this);
                                t.cannotBeABaseURL || Ae(t, String(e), de) })), port: De(_e, (function(e) { var t = k(this);
                                Z(t) || ("" == (e = String(e)) ? t.port = null : Ae(t, e, ve)) })), pathname: De(Me, (function(e) { var t = k(this);
                                t.cannotBeABaseURL || (t.path = [], Ae(t, e + "", be)) })), search: De(ze, (function(e) { var t = k(this); "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Ae(t, e, Ee)), w(t.searchParams).updateSearchParams(t.query) })), searchParams: De(Pe), hash: De(je, (function(e) { var t = k(this); "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Ae(t, e, ke)) : t.fragment = null })) }), l(Fe, "toJSON", (function() { return Te.call(this) }), { enumerable: !0 }), l(Fe, "toString", (function() { return Te.call(this) }), { enumerable: !0 }), b) { var Ne = b.createObjectURL,
                            Be = b.revokeObjectURL;
                        Ne && l(Se, "createObjectURL", (function(e) { return Ne.apply(b, arguments) })), Be && l(Se, "revokeObjectURL", (function(e) { return Be.apply(b, arguments) })) }
                    y(Se, "URL"), i({ global: !0, forced: !a, sham: !o }, { URL: Se }) } },
            t = {};

        function n(r) { if (t[r]) return t[r].exports; var i = t[r] = { exports: {} }; return e[r](i, i.exports, n), i.exports }
        n.d = function(e, t) { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }; var r = {}; return function() { "use strict";

            function e(e, n) { var r; if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (r = function(e, n) { if (e) { if ("string" == typeof e) return t(e, n); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0 } }(e)) || n && e && "number" == typeof e.length) { r && (e = r); var i = 0,
                            o = function() {}; return { s: o, n: function() { return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] } }, e: function(e) { throw e }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var a, u = !0,
                    s = !1; return { s: function() { r = e[Symbol.iterator]() }, n: function() { var e = r.next(); return u = e.done, e }, e: function(e) { s = !0, a = e }, f: function() { try { u || null == r.return || r.return() } finally { if (s) throw a } } } }

            function t(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]; return r }
            n.r(r), n.d(r, { Dropzone: function() { return b }, default: function() { return A } }), n(2222), n(7327), n(2772), n(6992), n(1249), n(7042), n(561), n(8264), n(8309), n(489), n(1539), n(4916), n(9714), n(8783), n(4723), n(5306), n(3123), n(3210), n(2472), n(2990), n(8927), n(3105), n(5035), n(4345), n(7174), n(2846), n(4731), n(7209), n(6319), n(8867), n(7789), n(3739), n(9368), n(4483), n(2056), n(3462), n(678), n(7462), n(3824), n(5021), n(2974), n(5016), n(4747), n(3948), n(285); var o = function() {
                function t() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t) } var r; return (r = [{ key: "on", value: function(e, t) { return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this } }, { key: "emit", value: function(t) { this._callbacks = this._callbacks || {}; for (var n = this._callbacks[t], r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o]; if (n) { var a, u = e(n, !0); try { for (u.s(); !(a = u.n()).done;) { a.value.apply(this, i) } } catch (e) { u.e(e) } finally { u.f() } } return this.element && this.element.dispatchEvent(this.makeEvent("dropzone:" + t, { args: i })), this } }, { key: "makeEvent", value: function(e, t) { var n = { bubbles: !0, cancelable: !0, detail: t }; if ("function" == typeof window.CustomEvent) return new CustomEvent(e, n); var r = document.createEvent("CustomEvent"); return r.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), r } }, { key: "off", value: function(e, t) { if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this; var n = this._callbacks[e]; if (!n) return this; if (1 === arguments.length) return delete this._callbacks[e], this; for (var r = 0; r < n.length; r++) { if (n[r] === t) { n.splice(r, 1); break } } return this } }]) && function i(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }(t.prototype, r), t }();

            function a(e, t) { var n; if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (n = function(e, t) { if (e) { if ("string" == typeof e) return u(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0 } }(e)) || t && e && "number" == typeof e.length) { n && (e = n); var r = 0,
                            i = function() {}; return { s: i, n: function() { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] } }, e: function(e) { throw e }, f: i } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var o, a = !0,
                    s = !1; return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return a = e.done, e }, e: function(e) { s = !0, o = e }, f: function() { try { a || null == n.return || n.return() } finally { if (s) throw o } } } }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]; return r } var s = { url: null, method: "post", withCredentials: !1, timeout: null, parallelUploads: 2, uploadMultiple: !1, chunking: !1, forceChunking: !1, chunkSize: 2e6, parallelChunkUploads: !1, retryChunks: !1, retryChunksLimit: 3, maxFilesize: 256, paramName: "file", createImageThumbnails: !0, maxThumbnailFilesize: 10, thumbnailWidth: 120, thumbnailHeight: 120, thumbnailMethod: "crop", resizeWidth: null, resizeHeight: null, resizeMimeType: null, resizeQuality: .8, resizeMethod: "contain", filesizeBase: 1e3, maxFiles: null, headers: null, clickable: !0, ignoreHiddenFiles: !0, acceptedFiles: null, acceptedMimeTypes: null, autoProcessQueue: !0, autoQueue: !0, addRemoveLinks: !1, previewsContainer: null, disablePreviews: !1, hiddenInputContainer: "body", capture: null, renameFilename: null, renameFile: null, forceFallback: !1, dictDefaultMessage: "Drop files here to upload", dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.", dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.", dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.", dictInvalidFileType: "You can't upload files of this type.", dictResponseError: "Server responded with {{statusCode}} code.", dictCancelUpload: "Cancel upload", dictUploadCanceled: "Upload canceled.", dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?", dictRemoveFile: "Remove file", dictRemoveFileConfirmation: null, dictMaxFilesExceeded: "You can not upload any more files.", dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" }, init: function() {}, params: function(e, t, n) { if (n) return { dzuuid: n.file.upload.uuid, dzchunkindex: n.index, dztotalfilesize: n.file.size, dzchunksize: this.options.chunkSize, dztotalchunkcount: n.file.upload.totalChunkCount, dzchunkbyteoffset: n.index * this.options.chunkSize } }, accept: function(e, t) { return t() }, chunksUploaded: function(e, t) { t() }, fallback: function() { var e;
                    this.element.className = "".concat(this.element.className, " dz-browser-not-supported"); var t, n = a(this.element.getElementsByTagName("div"), !0); try { for (n.s(); !(t = n.n()).done;) { var r = t.value; if (/(^| )dz-message($| )/.test(r.className)) { e = r, r.className = "dz-message"; break } } } catch (e) { n.e(e) } finally { n.f() }
                    e || (e = b.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e)); var i = e.getElementsByTagName("span")[0]; return i && (null != i.textContent ? i.textContent = this.options.dictFallbackMessage : null != i.innerText && (i.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm()) }, resize: function(e, t, n, r) { var i = { srcX: 0, srcY: 0, srcWidth: e.width, srcHeight: e.height },
                        o = e.width / e.height;
                    null == t && null == n ? (t = i.srcWidth, n = i.srcHeight) : null == t ? t = n * o : null == n && (n = t / o); var a = (t = Math.min(t, i.srcWidth)) / (n = Math.min(n, i.srcHeight)); if (i.srcWidth > t || i.srcHeight > n)
                        if ("crop" === r) o > a ? (i.srcHeight = e.height, i.srcWidth = i.srcHeight * a) : (i.srcWidth = e.width, i.srcHeight = i.srcWidth / a);
                        else { if ("contain" !== r) throw new Error("Unknown resizeMethod '".concat(r, "'"));
                            o > a ? n = t / o : t = n * o }
                    return i.srcX = (e.width - i.srcWidth) / 2, i.srcY = (e.height - i.srcHeight) / 2, i.trgWidth = t, i.trgHeight = n, i }, transformFile: function(e, t) { return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e) }, previewTemplate: '<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ', drop: function(e) { return this.element.classList.remove("dz-drag-hover") }, dragstart: function(e) {}, dragend: function(e) { return this.element.classList.remove("dz-drag-hover") }, dragenter: function(e) { return this.element.classList.add("dz-drag-hover") }, dragover: function(e) { return this.element.classList.add("dz-drag-hover") }, dragleave: function(e) { return this.element.classList.remove("dz-drag-hover") }, paste: function(e) {}, reset: function() { return this.element.classList.remove("dz-started") }, addedfile: function(e) { var t = this; if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer && !this.options.disablePreviews) { e.previewElement = b.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement); var n, r = a(e.previewElement.querySelectorAll("[data-dz-name]"), !0); try { for (r.s(); !(n = r.n()).done;) { var i = n.value;
                                i.textContent = e.name } } catch (e) { r.e(e) } finally { r.f() } var o, u = a(e.previewElement.querySelectorAll("[data-dz-size]"), !0); try { for (u.s(); !(o = u.n()).done;)(i = o.value).innerHTML = this.filesize(e.size) } catch (e) { u.e(e) } finally { u.f() }
                        this.options.addRemoveLinks && (e._removeLink = b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>")), e.previewElement.appendChild(e._removeLink)); var s, l = function(n) { return n.preventDefault(), n.stopPropagation(), e.status === b.UPLOADING ? b.confirm(t.options.dictCancelUploadConfirmation, (function() { return t.removeFile(e) })) : t.options.dictRemoveFileConfirmation ? b.confirm(t.options.dictRemoveFileConfirmation, (function() { return t.removeFile(e) })) : t.removeFile(e) },
                            c = a(e.previewElement.querySelectorAll("[data-dz-remove]"), !0); try { for (c.s(); !(s = c.n()).done;) s.value.addEventListener("click", l) } catch (e) { c.e(e) } finally { c.f() } } }, removedfile: function(e) { return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass() }, thumbnail: function(e, t) { if (e.previewElement) { e.previewElement.classList.remove("dz-file-preview"); var n, r = a(e.previewElement.querySelectorAll("[data-dz-thumbnail]"), !0); try { for (r.s(); !(n = r.n()).done;) { var i = n.value;
                                i.alt = e.name, i.src = t } } catch (e) { r.e(e) } finally { r.f() } return setTimeout((function() { return e.previewElement.classList.add("dz-image-preview") }), 1) } }, error: function(e, t) { if (e.previewElement) { e.previewElement.classList.add("dz-error"), "string" != typeof t && t.error && (t = t.error); var n, r = a(e.previewElement.querySelectorAll("[data-dz-errormessage]"), !0); try { for (r.s(); !(n = r.n()).done;) n.value.textContent = t } catch (e) { r.e(e) } finally { r.f() } } }, errormultiple: function() {}, processing: function(e) { if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.innerHTML = this.options.dictCancelUpload }, processingmultiple: function() {}, uploadprogress: function(e, t, n) { if (e.previewElement) { var r, i = a(e.previewElement.querySelectorAll("[data-dz-uploadprogress]"), !0); try { for (i.s(); !(r = i.n()).done;) { var o = r.value; "PROGRESS" === o.nodeName ? o.value = t : o.style.width = "".concat(t, "%") } } catch (e) { i.e(e) } finally { i.f() } } }, totaluploadprogress: function() {}, sending: function() {}, sendingmultiple: function() {}, success: function(e) { if (e.previewElement) return e.previewElement.classList.add("dz-success") }, successmultiple: function() {}, canceled: function(e) { return this.emit("error", e, this.options.dictUploadCanceled) }, canceledmultiple: function() {}, complete: function(e) { if (e._removeLink && (e._removeLink.innerHTML = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete") }, completemultiple: function() {}, maxfilesexceeded: function() {}, maxfilesreached: function() {}, queuecomplete: function() {}, addedfiles: function() {} };

            function l(e) { return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function c(e, t) { var n; if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (n = function(e, t) { if (e) { if ("string" == typeof e) return f(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0 } }(e)) || t && e && "number" == typeof e.length) { n && (e = n); var r = 0,
                            i = function() {}; return { s: i, n: function() { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] } }, e: function(e) { throw e }, f: i } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var o, a = !0,
                    u = !1; return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return a = e.done, e }, e: function(e) { u = !0, o = e }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw o } } } }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]; return r }

            function p(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function h(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

            function d(e, t, n) { return t && h(e.prototype, t), n && h(e, n), e }

            function v(e, t) { return (v = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function y(e, t) { return !t || "object" !== l(t) && "function" != typeof t ? g(e) : t }

            function g(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function m(e) { return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) } var b = function(e) {! function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && v(e, t) }(i, e); var t, n, r = (t = i, n = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }(), function() { var e, r = m(t); if (n) { var i = m(this).constructor;
                        e = Reflect.construct(r, arguments, i) } else e = r.apply(this, arguments); return y(this, e) });

                function i(e, t) { var n, o, a; if (p(this, i), (n = r.call(this)).element = e, n.version = i.version, n.clickableElements = [], n.listeners = [], n.files = [], "string" == typeof n.element && (n.element = document.querySelector(n.element)), !n.element || null == n.element.nodeType) throw new Error("Invalid dropzone element."); if (n.element.dropzone) throw new Error("Dropzone already attached.");
                    i.instances.push(g(n)), n.element.dropzone = g(n); var u = null != (a = i.optionsForElement(n.element)) ? a : {}; if (n.options = i.extend({}, s, u, null != t ? t : {}), n.options.previewTemplate = n.options.previewTemplate.replace(/\n*/g, ""), n.options.forceFallback || !i.isBrowserSupported()) return y(n, n.options.fallback.call(g(n))); if (null == n.options.url && (n.options.url = n.element.getAttribute("action")), !n.options.url) throw new Error("No URL provided."); if (n.options.acceptedFiles && n.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."); if (n.options.uploadMultiple && n.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking."); return n.options.acceptedMimeTypes && (n.options.acceptedFiles = n.options.acceptedMimeTypes, delete n.options.acceptedMimeTypes), null != n.options.renameFilename && (n.options.renameFile = function(e) { return n.options.renameFilename.call(g(n), e.name, e) }), "string" == typeof n.options.method && (n.options.method = n.options.method.toUpperCase()), (o = n.getExistingFallback()) && o.parentNode && o.parentNode.removeChild(o), !1 !== n.options.previewsContainer && (n.options.previewsContainer ? n.previewsContainer = i.getElement(n.options.previewsContainer, "previewsContainer") : n.previewsContainer = n.element), n.options.clickable && (!0 === n.options.clickable ? n.clickableElements = [n.element] : n.clickableElements = i.getElements(n.options.clickable, "clickable")), n.init(), n } return d(i, [{ key: "getAcceptedFiles", value: function() { return this.files.filter((function(e) { return e.accepted })).map((function(e) { return e })) } }, { key: "getRejectedFiles", value: function() { return this.files.filter((function(e) { return !e.accepted })).map((function(e) { return e })) } }, { key: "getFilesWithStatus", value: function(e) { return this.files.filter((function(t) { return t.status === e })).map((function(e) { return e })) } }, { key: "getQueuedFiles", value: function() { return this.getFilesWithStatus(i.QUEUED) } }, { key: "getUploadingFiles", value: function() { return this.getFilesWithStatus(i.UPLOADING) } }, { key: "getAddedFiles", value: function() { return this.getFilesWithStatus(i.ADDED) } }, { key: "getActiveFiles", value: function() { return this.files.filter((function(e) { return e.status === i.UPLOADING || e.status === i.QUEUED })).map((function(e) { return e })) } }, { key: "init", value: function() { var e = this; "form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(i.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage, "</button></div>"))), this.clickableElements.length && function t() { e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null === e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null !== e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null !== e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.setAttribute("tabindex", "-1"), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", i.getElement(e.options.hiddenInputContainer, "hiddenInputContainer").appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", (function() { var n = e.hiddenFileInput.files; if (n.length) { var r, i = c(n, !0); try { for (i.s(); !(r = i.n()).done;) { var o = r.value;
                                            e.addFile(o) } } catch (e) { i.e(e) } finally { i.f() } }
                                e.emit("addedfiles", n), t() })) }(), this.URL = null !== window.URL ? window.URL : window.webkitURL; var t, n = c(this.events, !0); try { for (n.s(); !(t = n.n()).done;) { var r = t.value;
                                this.on(r, this.options[r]) } } catch (e) { n.e(e) } finally { n.f() }
                        this.on("uploadprogress", (function() { return e.updateTotalUploadProgress() })), this.on("removedfile", (function() { return e.updateTotalUploadProgress() })), this.on("canceled", (function(t) { return e.emit("complete", t) })), this.on("complete", (function(t) { if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length) return setTimeout((function() { return e.emit("queuecomplete") }), 0) })); var o = function(e) { if (function(e) { if (e.dataTransfer.types)
                                        for (var t = 0; t < e.dataTransfer.types.length; t++)
                                            if ("Files" === e.dataTransfer.types[t]) return !0;
                                    return !1 }(e)) return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1 }; return this.listeners = [{ element: this.element, events: { dragstart: function(t) { return e.emit("dragstart", t) }, dragenter: function(t) { return o(t), e.emit("dragenter", t) }, dragover: function(t) { var n; try { n = t.dataTransfer.effectAllowed } catch (e) {} return t.dataTransfer.dropEffect = "move" === n || "linkMove" === n ? "move" : "copy", o(t), e.emit("dragover", t) }, dragleave: function(t) { return e.emit("dragleave", t) }, drop: function(t) { return o(t), e.drop(t) }, dragend: function(t) { return e.emit("dragend", t) } } }], this.clickableElements.forEach((function(t) { return e.listeners.push({ element: t, events: { click: function(n) { return (t !== e.element || n.target === e.element || i.elementInside(n.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0 } } }) })), this.enable(), this.options.init.call(this) } }, { key: "destroy", value: function() { return this.disable(), this.removeAllFiles(!0), (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, i.instances.splice(i.instances.indexOf(this), 1) } }, { key: "updateTotalUploadProgress", value: function() { var e, t = 0,
                            n = 0; if (this.getActiveFiles().length) { var r, i = c(this.getActiveFiles(), !0); try { for (i.s(); !(r = i.n()).done;) { var o = r.value;
                                    t += o.upload.bytesSent, n += o.upload.total } } catch (e) { i.e(e) } finally { i.f() }
                            e = 100 * t / n } else e = 100; return this.emit("totaluploadprogress", e, n, t) } }, { key: "_getParamName", value: function(e) { return "function" == typeof this.options.paramName ? this.options.paramName(e) : "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(e, "]") : "") } }, { key: "_renameFile", value: function(e) { return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e) } }, { key: "getFallbackForm", value: function() { var e, t; if (e = this.getExistingFallback()) return e; var n = '<div class="dz-fallback">';
                        this.options.dictFallbackText && (n += "<p>".concat(this.options.dictFallbackText, "</p>")), n += '<input type="file" name="'.concat(this._getParamName(0), '" ').concat(this.options.uploadMultiple ? 'multiple="multiple"' : void 0, ' /><input type="submit" value="Upload!"></div>'); var r = i.createElement(n); return "FORM" !== this.element.tagName ? (t = i.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>'))).appendChild(r) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != t ? t : r } }, { key: "getExistingFallback", value: function() { for (var e = function(e) { var t, n = c(e, !0); try { for (n.s(); !(t = n.n()).done;) { var r = t.value; if (/(^| )fallback($| )/.test(r.className)) return r } } catch (e) { n.e(e) } finally { n.f() } }, t = 0, n = ["div", "form"]; t < n.length; t++) { var r, i = n[t]; if (r = e(this.element.getElementsByTagName(i))) return r } } }, { key: "setupEventListeners", value: function() { return this.listeners.map((function(e) { return function() { var t = []; for (var n in e.events) { var r = e.events[n];
                                    t.push(e.element.addEventListener(n, r, !1)) } return t }() })) } }, { key: "removeEventListeners", value: function() { return this.listeners.map((function(e) { return function() { var t = []; for (var n in e.events) { var r = e.events[n];
                                    t.push(e.element.removeEventListener(n, r, !1)) } return t }() })) } }, { key: "disable", value: function() { var e = this; return this.clickableElements.forEach((function(e) { return e.classList.remove("dz-clickable") })), this.removeEventListeners(), this.disabled = !0, this.files.map((function(t) { return e.cancelUpload(t) })) } }, { key: "enable", value: function() { return delete this.disabled, this.clickableElements.forEach((function(e) { return e.classList.add("dz-clickable") })), this.setupEventListeners() } }, { key: "filesize", value: function(e) { var t = 0,
                            n = "b"; if (e > 0) { for (var r = ["tb", "gb", "mb", "kb", "b"], i = 0; i < r.length; i++) { var o = r[i]; if (e >= Math.pow(this.options.filesizeBase, 4 - i) / 10) { t = e / Math.pow(this.options.filesizeBase, 4 - i), n = o; break } }
                            t = Math.round(10 * t) / 10 } return "<strong>".concat(t, "</strong> ").concat(this.options.dictFileSizeUnits[n]) } }, { key: "_updateMaxFilesReachedClass", value: function() { return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached") } }, { key: "drop", value: function(e) { if (e.dataTransfer) { this.emit("drop", e); for (var t = [], n = 0; n < e.dataTransfer.files.length; n++) t[n] = e.dataTransfer.files[n]; if (t.length) { var r = e.dataTransfer.items;
                                r && r.length && null != r[0].webkitGetAsEntry ? this._addFilesFromItems(r) : this.handleFiles(t) }
                            this.emit("addedfiles", t) } } }, { key: "paste", value: function(e) { if (null != (null != (t = null != e ? e.clipboardData : void 0) ? function(e) { return e.items }(t) : void 0)) { var t;
                            this.emit("paste", e); var n = e.clipboardData.items; return n.length ? this._addFilesFromItems(n) : void 0 } } }, { key: "handleFiles", value: function(e) { var t, n = c(e, !0); try { for (n.s(); !(t = n.n()).done;) { var r = t.value;
                                this.addFile(r) } } catch (e) { n.e(e) } finally { n.f() } } }, { key: "_addFilesFromItems", value: function(e) { var t = this; return function() { var n, r = [],
                                i = c(e, !0); try { for (i.s(); !(n = i.n()).done;) { var o, a = n.value;
                                    null != a.webkitGetAsEntry && (o = a.webkitGetAsEntry()) ? o.isFile ? r.push(t.addFile(a.getAsFile())) : o.isDirectory ? r.push(t._addFilesFromDirectory(o, o.name)) : r.push(void 0) : null == a.getAsFile || null != a.kind && "file" !== a.kind ? r.push(void 0) : r.push(t.addFile(a.getAsFile())) } } catch (e) { i.e(e) } finally { i.f() } return r }() } }, { key: "_addFilesFromDirectory", value: function(e, t) { var n = this,
                            r = e.createReader(),
                            i = function(e) { return n = function(t) { return t.log(e) }, null != (t = console) && "function" == typeof t.log ? n(t) : void 0; var t, n }; return function e() { return r.readEntries((function(r) { if (r.length > 0) { var i, o = c(r, !0); try { for (o.s(); !(i = o.n()).done;) { var a = i.value;
                                            a.isFile ? a.file((function(e) { if (!n.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return e.fullPath = "".concat(t, "/").concat(e.name), n.addFile(e) })) : a.isDirectory && n._addFilesFromDirectory(a, "".concat(t, "/").concat(a.name)) } } catch (e) { o.e(e) } finally { o.f() }
                                    e() } return null }), i) }() } }, { key: "accept", value: function(e, t) { this.options.maxFilesize && e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : i.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType) } }, { key: "addFile", value: function(e) { var t = this;
                        e.upload = { uuid: i.uuidv4(), progress: 0, total: e.size, bytesSent: 0, filename: this._renameFile(e) }, this.files.push(e), e.status = i.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, (function(n) { n ? (e.accepted = !1, t._errorProcessing([e], n)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass() })) } }, { key: "enqueueFiles", value: function(e) { var t, n = c(e, !0); try { for (n.s(); !(t = n.n()).done;) { var r = t.value;
                                this.enqueueFile(r) } } catch (e) { n.e(e) } finally { n.f() } return null } }, { key: "enqueueFile", value: function(e) { var t = this; if (e.status !== i.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected."); if (e.status = i.QUEUED, this.options.autoProcessQueue) return setTimeout((function() { return t.processQueue() }), 0) } }, { key: "_enqueueThumbnail", value: function(e) { var t = this; if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout((function() { return t._processThumbnailQueue() }), 0) } }, { key: "_processThumbnailQueue", value: function() { var e = this; if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) { this._processingThumbnail = !0; var t = this._thumbnailQueue.shift(); return this.createThumbnail(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, (function(n) { return e.emit("thumbnail", t, n), e._processingThumbnail = !1, e._processThumbnailQueue() })) } } }, { key: "removeFile", value: function(e) { if (e.status === i.UPLOADING && this.cancelUpload(e), this.files = x(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset") } }, { key: "removeAllFiles", value: function(e) { null == e && (e = !1); var t, n = c(this.files.slice(), !0); try { for (n.s(); !(t = n.n()).done;) { var r = t.value;
                                (r.status !== i.UPLOADING || e) && this.removeFile(r) } } catch (e) { n.e(e) } finally { n.f() } return null } }, { key: "resizeImage", value: function(e, t, n, r, o) { var a = this; return this.createThumbnail(e, t, n, r, !0, (function(t, n) { if (null == n) return o(e); var r = a.options.resizeMimeType;
                            null == r && (r = e.type); var u = n.toDataURL(r, a.options.resizeQuality); return "image/jpeg" !== r && "image/jpg" !== r || (u = k.restore(e.dataURL, u)), o(i.dataURItoBlob(u)) })) } }, { key: "createThumbnail", value: function(e, t, n, r, i, o) { var a = this,
                            u = new FileReader;
                        u.onload = function() { e.dataURL = u.result, "image/svg+xml" !== e.type ? a.createThumbnailFromUrl(e, t, n, r, i, o) : null != o && o(u.result) }, u.readAsDataURL(e) } }, { key: "displayExistingFile", value: function(e, t, n, r) { var i = this,
                            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]; if (this.emit("addedfile", e), this.emit("complete", e), o) { e.dataURL = t, this.createThumbnailFromUrl(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, (function(t) { i.emit("thumbnail", e, t), n && n() }), r) } else this.emit("thumbnail", e, t), n && n() } }, { key: "createThumbnailFromUrl", value: function(e, t, n, r, i, o, a) { var u = this,
                            s = document.createElement("img"); return a && (s.crossOrigin = a), i = "from-image" != getComputedStyle(document.body).imageOrientation && i, s.onload = function() { var a = function(e) { return e(1) }; return "undefined" != typeof EXIF && null !== EXIF && i && (a = function(e) { return EXIF.getData(s, (function() { return e(EXIF.getTag(this, "Orientation")) })) }), a((function(i) { e.width = s.width, e.height = s.height; var a = u.options.resize.call(u, e, t, n, r),
                                    l = document.createElement("canvas"),
                                    c = l.getContext("2d"); switch (l.width = a.trgWidth, l.height = a.trgHeight, i > 4 && (l.width = a.trgHeight, l.height = a.trgWidth), i) {
                                    case 2:
                                        c.translate(l.width, 0), c.scale(-1, 1); break;
                                    case 3:
                                        c.translate(l.width, l.height), c.rotate(Math.PI); break;
                                    case 4:
                                        c.translate(0, l.height), c.scale(1, -1); break;
                                    case 5:
                                        c.rotate(.5 * Math.PI), c.scale(1, -1); break;
                                    case 6:
                                        c.rotate(.5 * Math.PI), c.translate(0, -l.width); break;
                                    case 7:
                                        c.rotate(.5 * Math.PI), c.translate(l.height, -l.width), c.scale(-1, 1); break;
                                    case 8:
                                        c.rotate(-.5 * Math.PI), c.translate(-l.height, 0) }
                                E(c, s, null != a.srcX ? a.srcX : 0, null != a.srcY ? a.srcY : 0, a.srcWidth, a.srcHeight, null != a.trgX ? a.trgX : 0, null != a.trgY ? a.trgY : 0, a.trgWidth, a.trgHeight); var f = l.toDataURL("image/png"); if (null != o) return o(f, l) })) }, null != o && (s.onerror = o), s.src = e.dataURL } }, { key: "processQueue", value: function() { var e = this.options.parallelUploads,
                            t = this.getUploadingFiles().length,
                            n = t; if (!(t >= e)) { var r = this.getQueuedFiles(); if (r.length > 0) { if (this.options.uploadMultiple) return this.processFiles(r.slice(0, e - t)); for (; n < e;) { if (!r.length) return;
                                    this.processFile(r.shift()), n++ } } } } }, { key: "processFile", value: function(e) { return this.processFiles([e]) } }, { key: "processFiles", value: function(e) { var t, n = c(e, !0); try { for (n.s(); !(t = n.n()).done;) { var r = t.value;
                                r.processing = !0, r.status = i.UPLOADING, this.emit("processing", r) } } catch (e) { n.e(e) } finally { n.f() } return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e) } }, { key: "_getFilesWithXhr", value: function(e) { return this.files.filter((function(t) { return t.xhr === e })).map((function(e) { return e })) } }, { key: "cancelUpload", value: function(e) { if (e.status === i.UPLOADING) { var t, n = this._getFilesWithXhr(e.xhr),
                                r = c(n, !0); try { for (r.s(); !(t = r.n()).done;) t.value.status = i.CANCELED } catch (e) { r.e(e) } finally { r.f() }
                            void 0 !== e.xhr && e.xhr.abort(); var o, a = c(n, !0); try { for (a.s(); !(o = a.n()).done;) { var u = o.value;
                                    this.emit("canceled", u) } } catch (e) { a.e(e) } finally { a.f() }
                            this.options.uploadMultiple && this.emit("canceledmultiple", n) } else e.status !== i.ADDED && e.status !== i.QUEUED || (e.status = i.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e])); if (this.options.autoProcessQueue) return this.processQueue() } }, { key: "resolveOption", value: function(e) { if ("function" == typeof e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; return e.apply(this, n) } return e } }, { key: "uploadFile", value: function(e) { return this.uploadFiles([e]) } }, { key: "uploadFiles", value: function(e) { var t = this;
                        this._transformFiles(e, (function(n) { if (t.options.chunking) { var r = n[0];
                                e[0].upload.chunked = t.options.chunking && (t.options.forceChunking || r.size > t.options.chunkSize), e[0].upload.totalChunkCount = Math.ceil(r.size / t.options.chunkSize) } if (e[0].upload.chunked) { var o = e[0],
                                    a = n[0];
                                o.upload.chunks = []; var u = function() { for (var n = 0; void 0 !== o.upload.chunks[n];) n++; if (!(n >= o.upload.totalChunkCount)) { var r = n * t.options.chunkSize,
                                            u = Math.min(r + t.options.chunkSize, a.size),
                                            s = { name: t._getParamName(0), data: a.webkitSlice ? a.webkitSlice(r, u) : a.slice(r, u), filename: o.upload.filename, chunkIndex: n };
                                        o.upload.chunks[n] = { file: o, index: n, dataBlock: s, status: i.UPLOADING, progress: 0, retries: 0 }, t._uploadData(e, [s]) } }; if (o.upload.finishedChunkUpload = function(n, r) { var a = !0;
                                        n.status = i.SUCCESS, n.dataBlock = null, n.xhr = null; for (var s = 0; s < o.upload.totalChunkCount; s++) { if (void 0 === o.upload.chunks[s]) return u();
                                            o.upload.chunks[s].status !== i.SUCCESS && (a = !1) }
                                        a && t.options.chunksUploaded(o, (function() { t._finished(e, r, null) })) }, t.options.parallelChunkUploads)
                                    for (var s = 0; s < o.upload.totalChunkCount; s++) u();
                                else u() } else { for (var l = [], c = 0; c < e.length; c++) l[c] = { name: t._getParamName(c), data: n[c], filename: e[c].upload.filename };
                                t._uploadData(e, l) } })) } }, { key: "_getChunk", value: function(e, t) { for (var n = 0; n < e.upload.totalChunkCount; n++)
                            if (void 0 !== e.upload.chunks[n] && e.upload.chunks[n].xhr === t) return e.upload.chunks[n] } }, { key: "_uploadData", value: function(e, t) { var n, r = this,
                            o = new XMLHttpRequest,
                            a = c(e, !0); try { for (a.s(); !(n = a.n()).done;) n.value.xhr = o } catch (e) { a.e(e) } finally { a.f() }
                        e[0].upload.chunked && (e[0].upload.chunks[t[0].chunkIndex].xhr = o); var u = this.resolveOption(this.options.method, e),
                            s = this.resolveOption(this.options.url, e);
                        o.open(u, s, !0), this.resolveOption(this.options.timeout, e) && (o.timeout = this.resolveOption(this.options.timeout, e)), o.withCredentials = !!this.options.withCredentials, o.onload = function(t) { r._finishedUploading(e, o, t) }, o.ontimeout = function() { r._handleUploadError(e, o, "Request timedout after ".concat(r.options.timeout / 1e3, " seconds")) }, o.onerror = function() { r._handleUploadError(e, o) }, (null != o.upload ? o.upload : o).onprogress = function(t) { return r._updateFilesUploadProgress(e, o, t) }; var l = { Accept: "application/json", "Cache-Control": "no-cache", "X-Requested-With": "XMLHttpRequest" }; for (var f in this.options.headers && i.extend(l, this.options.headers), l) { var p = l[f];
                            p && o.setRequestHeader(f, p) } var h = new FormData; if (this.options.params) { var d = this.options.params; for (var v in "function" == typeof d && (d = d.call(this, e, o, e[0].upload.chunked ? this._getChunk(e[0], o) : null)), d) { var y = d[v]; if (Array.isArray(y))
                                    for (var g = 0; g < y.length; g++) h.append(v, y[g]);
                                else h.append(v, y) } } var m, b = c(e, !0); try { for (b.s(); !(m = b.n()).done;) { var x = m.value;
                                this.emit("sending", x, o, h) } } catch (e) { b.e(e) } finally { b.f() }
                        this.options.uploadMultiple && this.emit("sendingmultiple", e, o, h), this._addFormElementData(h); for (var w = 0; w < t.length; w++) { var E = t[w];
                            h.append(E.name, E.data, E.filename) }
                        this.submitRequest(o, h, e) } }, { key: "_transformFiles", value: function(e, t) { for (var n = this, r = [], i = 0, o = function(o) { n.options.transformFile.call(n, e[o], (function(n) { r[o] = n, ++i === e.length && t(r) })) }, a = 0; a < e.length; a++) o(a) } }, { key: "_addFormElementData", value: function(e) { if ("FORM" === this.element.tagName) { var t, n = c(this.element.querySelectorAll("input, textarea, select, button"), !0); try { for (n.s(); !(t = n.n()).done;) { var r = t.value,
                                        i = r.getAttribute("name"),
                                        o = r.getAttribute("type"); if (o && (o = o.toLowerCase()), null != i)
                                        if ("SELECT" === r.tagName && r.hasAttribute("multiple")) { var a, u = c(r.options, !0); try { for (u.s(); !(a = u.n()).done;) { var s = a.value;
                                                    s.selected && e.append(i, s.value) } } catch (e) { u.e(e) } finally { u.f() } } else(!o || "checkbox" !== o && "radio" !== o || r.checked) && e.append(i, r.value) } } catch (e) { n.e(e) } finally { n.f() } } } }, { key: "_updateFilesUploadProgress", value: function(e, t, n) { if (e[0].upload.chunked) { var r = e[0],
                                i = this._getChunk(r, t);
                            n ? (i.progress = 100 * n.loaded / n.total, i.total = n.total, i.bytesSent = n.loaded) : (i.progress = 100, i.bytesSent = i.total), r.upload.progress = 0, r.upload.total = 0, r.upload.bytesSent = 0; for (var o = 0; o < r.upload.totalChunkCount; o++) r.upload.chunks[o] && void 0 !== r.upload.chunks[o].progress && (r.upload.progress += r.upload.chunks[o].progress, r.upload.total += r.upload.chunks[o].total, r.upload.bytesSent += r.upload.chunks[o].bytesSent);
                            r.upload.progress = r.upload.progress / r.upload.totalChunkCount, this.emit("uploadprogress", r, r.upload.progress, r.upload.bytesSent) } else { var a, u = c(e, !0); try { for (u.s(); !(a = u.n()).done;) { var s = a.value;
                                    s.upload.total && s.upload.bytesSent && s.upload.bytesSent == s.upload.total || (n ? (s.upload.progress = 100 * n.loaded / n.total, s.upload.total = n.total, s.upload.bytesSent = n.loaded) : (s.upload.progress = 100, s.upload.bytesSent = s.upload.total), this.emit("uploadprogress", s, s.upload.progress, s.upload.bytesSent)) } } catch (e) { u.e(e) } finally { u.f() } } } }, { key: "_finishedUploading", value: function(e, t, n) { var r; if (e[0].status !== i.CANCELED && 4 === t.readyState) { if ("arraybuffer" !== t.responseType && "blob" !== t.responseType && (r = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))) try { r = JSON.parse(r) } catch (e) { n = e, r = "Invalid JSON response from server." }
                            this._updateFilesUploadProgress(e, t), 200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t), r) : this._finished(e, r, n) : this._handleUploadError(e, t, r) } } }, { key: "_handleUploadError", value: function(e, t, n) { if (e[0].status !== i.CANCELED) { if (e[0].upload.chunked && this.options.retryChunks) { var r = this._getChunk(e[0], t); if (r.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [r.dataBlock]);
                                console.warn("Retried this chunk too often. Giving up.") }
                            this._errorProcessing(e, n || this.options.dictResponseError.replace("{{statusCode}}", t.status), t) } } }, { key: "submitRequest", value: function(e, t, n) { 1 == e.readyState ? e.send(t) : console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.") } }, { key: "_finished", value: function(e, t, n) { var r, o = c(e, !0); try { for (o.s(); !(r = o.n()).done;) { var a = r.value;
                                a.status = i.SUCCESS, this.emit("success", a, t, n), this.emit("complete", a) } } catch (e) { o.e(e) } finally { o.f() } if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue() } }, { key: "_errorProcessing", value: function(e, t, n) { var r, o = c(e, !0); try { for (o.s(); !(r = o.n()).done;) { var a = r.value;
                                a.status = i.ERROR, this.emit("error", a, t, n), this.emit("complete", a) } } catch (e) { o.e(e) } finally { o.f() } if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue() } }], [{ key: "initClass", value: function() { this.prototype.Emitter = o, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1 } }, { key: "extend", value: function(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; for (var i = 0, o = n; i < o.length; i++) { var a = o[i]; for (var u in a) { var s = a[u];
                                e[u] = s } } return e } }, { key: "uuidv4", value: function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) { var t = 16 * Math.random() | 0; return ("x" === e ? t : 3 & t | 8).toString(16) })) } }]), i }(o);
            b.initClass(), b.version = "5.9.3", b.options = {}, b.optionsForElement = function(e) { return e.getAttribute("id") ? b.options[w(e.getAttribute("id"))] : void 0 }, b.instances = [], b.forElement = function(e) { if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."); return e.dropzone }, b.autoDiscover = !0, b.discover = function() { var e; if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");
                else { e = []; var t = function(t) { return function() { var n, r = [],
                                i = c(t, !0); try { for (i.s(); !(n = i.n()).done;) { var o = n.value; /(^| )dropzone($| )/.test(o.className) ? r.push(e.push(o)) : r.push(void 0) } } catch (e) { i.e(e) } finally { i.f() } return r }() };
                    t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form")) } return function() { var t, n = [],
                        r = c(e, !0); try { for (r.s(); !(t = r.n()).done;) { var i = t.value;!1 !== b.optionsForElement(i) ? n.push(new b(i)) : n.push(void 0) } } catch (e) { r.e(e) } finally { r.f() } return n }() }, b.blockedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], b.isBrowserSupported = function() { var e = !0; if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                    if ("classList" in document.createElement("a")) { void 0 !== b.blacklistedBrowsers && (b.blockedBrowsers = b.blacklistedBrowsers); var t, n = c(b.blockedBrowsers, !0); try { for (n.s(); !(t = n.n()).done;) t.value.test(navigator.userAgent) && (e = !1) } catch (e) { n.e(e) } finally { n.f() } } else e = !1;
                else e = !1; return e }, b.dataURItoBlob = function(e) { for (var t = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], r = new ArrayBuffer(t.length), i = new Uint8Array(r), o = 0, a = t.length, u = 0 <= a; u ? o <= a : o >= a; u ? o++ : o--) i[o] = t.charCodeAt(o); return new Blob([r], { type: n }) }; var x = function(e, t) { return e.filter((function(e) { return e !== t })).map((function(e) { return e })) },
                w = function(e) { return e.replace(/[\-_](\w)/g, (function(e) { return e.charAt(1).toUpperCase() })) };
            b.createElement = function(e) { var t = document.createElement("div"); return t.innerHTML = e, t.childNodes[0] }, b.elementInside = function(e, t) { if (e === t) return !0; for (; e = e.parentNode;)
                    if (e === t) return !0;
                return !1 }, b.getElement = function(e, t) { var n; if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e), null == n) throw new Error("Invalid `".concat(t, "` option provided. Please provide a CSS selector or a plain HTML element.")); return n }, b.getElements = function(e, t) { var n, r; if (e instanceof Array) { r = []; try { var i, o = c(e, !0); try { for (o.s(); !(i = o.n()).done;) n = i.value, r.push(this.getElement(n, t)) } catch (e) { o.e(e) } finally { o.f() } } catch (e) { r = null } } else if ("string" == typeof e) { r = []; var a, u = c(document.querySelectorAll(e), !0); try { for (u.s(); !(a = u.n()).done;) n = a.value, r.push(n) } catch (e) { u.e(e) } finally { u.f() } } else null != e.nodeType && (r = [e]); if (null == r || !r.length) throw new Error("Invalid `".concat(t, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.")); return r }, b.confirm = function(e, t, n) { return window.confirm(e) ? t() : null != n ? n() : void 0 }, b.isValidFile = function(e, t) { if (!t) return !0;
                t = t.split(","); var n, r = e.type,
                    i = r.replace(/\/.*$/, ""),
                    o = c(t, !0); try { for (o.s(); !(n = o.n()).done;) { var a = n.value; if ("." === (a = a.trim()).charAt(0)) { if (-1 !== e.name.toLowerCase().indexOf(a.toLowerCase(), e.name.length - a.length)) return !0 } else if (/\/\*$/.test(a)) { if (i === a.replace(/\/.*$/, "")) return !0 } else if (r === a) return !0 } } catch (e) { o.e(e) } finally { o.f() } return !1 }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(e) { return this.each((function() { return new b(this, e) })) }), b.ADDED = "added", b.QUEUED = "queued", b.ACCEPTED = b.QUEUED, b.UPLOADING = "uploading", b.PROCESSING = b.UPLOADING, b.CANCELED = "canceled", b.ERROR = "error", b.SUCCESS = "success"; var E = function(e, t, n, r, i, o, a, u, s, l) { var c = function(e) { e.naturalWidth; var t = e.naturalHeight,
                            n = document.createElement("canvas");
                        n.width = 1, n.height = t; var r = n.getContext("2d");
                        r.drawImage(e, 0, 0); for (var i = r.getImageData(1, 0, 1, t).data, o = 0, a = t, u = t; u > o;) 0 === i[4 * (u - 1) + 3] ? a = u : o = u, u = a + o >> 1; var s = u / t; return 0 === s ? 1 : s }(t); return e.drawImage(t, n, r, i, o, a, u, s, l / c) },
                k = function() {
                    function e() { p(this, e) } return d(e, null, [{ key: "initClass", value: function() { this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" } }, { key: "encode64", value: function(e) { for (var t = "", n = void 0, r = void 0, i = "", o = void 0, a = void 0, u = void 0, s = "", l = 0; o = (n = e[l++]) >> 2, a = (3 & n) << 4 | (r = e[l++]) >> 4, u = (15 & r) << 2 | (i = e[l++]) >> 6, s = 63 & i, isNaN(r) ? u = s = 64 : isNaN(i) && (s = 64), t = t + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(u) + this.KEY_STR.charAt(s), n = r = i = "", o = a = u = s = "", l < e.length;); return t } }, { key: "restore", value: function(e, t) { if (!e.match("data:image/jpeg;base64,")) return t; var n = this.decode64(e.replace("data:image/jpeg;base64,", "")),
                                r = this.slice2Segments(n),
                                i = this.exifManipulation(t, r); return "data:image/jpeg;base64,".concat(this.encode64(i)) } }, { key: "exifManipulation", value: function(e, t) { var n = this.getExifArray(t),
                                r = this.insertExif(e, n); return new Uint8Array(r) } }, { key: "getExifArray", value: function(e) { for (var t = void 0, n = 0; n < e.length;) { if (255 === (t = e[n])[0] & 225 === t[1]) return t;
                                n++ } return [] } }, { key: "insertExif", value: function(e, t) { var n = e.replace("data:image/jpeg;base64,", ""),
                                r = this.decode64(n),
                                i = r.indexOf(255, 3),
                                o = r.slice(0, i),
                                a = r.slice(i); return o.concat(t).concat(a) } }, { key: "slice2Segments", value: function(e) { for (var t = 0, n = []; !(255 === e[t] & 218 === e[t + 1]);) { if (255 === e[t] & 216 === e[t + 1]) t += 2;
                                else { var r = t + (256 * e[t + 2] + e[t + 3]) + 2,
                                        i = e.slice(t, r);
                                    n.push(i), t = r } if (t > e.length) break } return n } }, { key: "decode64", value: function(e) { var t = void 0,
                                n = void 0,
                                r = "",
                                i = void 0,
                                o = void 0,
                                a = "",
                                u = 0,
                                s = []; for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(u++)) << 2 | (i = this.KEY_STR.indexOf(e.charAt(u++))) >> 4, n = (15 & i) << 4 | (o = this.KEY_STR.indexOf(e.charAt(u++))) >> 2, r = (3 & o) << 6 | (a = this.KEY_STR.indexOf(e.charAt(u++))), s.push(t), 64 !== o && s.push(n), 64 !== a && s.push(r), t = n = r = "", i = o = a = "", u < e.length;); return s } }]), e }();
            k.initClass(), b._autoDiscoverFunction = function() { if (b.autoDiscover) return b.discover() },
                function(e, t) { var n = !1,
                        r = !0,
                        i = e.document,
                        o = i.documentElement,
                        a = i.addEventListener ? "addEventListener" : "attachEvent",
                        u = i.addEventListener ? "removeEventListener" : "detachEvent",
                        s = i.addEventListener ? "" : "on",
                        l = function r(o) { if ("readystatechange" !== o.type || "complete" === i.readyState) return ("load" === o.type ? e : i)[u](s + o.type, r, !1), !n && (n = !0) ? t.call(e, o.type || o) : void 0 }; if ("complete" !== i.readyState) { if (i.createEventObject && o.doScroll) { try { r = !e.frameElement } catch (e) {}
                            r && function e() { try { o.doScroll("left") } catch (t) { return void setTimeout(e, 50) } return l("poll") }() }
                        i[a](s + "DOMContentLoaded", l, !1), i[a](s + "readystatechange", l, !1), e[a](s + "load", l, !1) } }(window, b._autoDiscoverFunction), window.Dropzone = b; var A = b }(), r }() }));
var Swiper = function() { "use strict";

        function e(e) { return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object }

        function t(s, a) { void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => { void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]) })) } const s = { body: {}, addEventListener() {}, removeEventListener() {}, activeElement: { blur() {}, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() {} }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };

        function a() { const e = "undefined" != typeof document ? document : {}; return t(e, s), e } const i = { document: s, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {}, pushState() {}, go() {}, back() {} }, CustomEvent: function() { return this }, addEventListener() {}, removeEventListener() {}, getComputedStyle: () => ({ getPropertyValue: () => "" }), Image() {}, Date() {}, screen: {}, setTimeout() {}, clearTimeout() {}, matchMedia: () => ({}), requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0), cancelAnimationFrame(e) { "undefined" != typeof setTimeout && clearTimeout(e) } };

        function r() { const e = "undefined" != typeof window ? window : {}; return t(e, i), e }

        function n(e, t) { return void 0 === t && (t = 0), setTimeout(e, t) }

        function l() { return Date.now() }

        function o(e, t) { void 0 === t && (t = "x"); const s = r(); let a, i, n; const l = function(e) { const t = r(); let s; return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s }(e); return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0 }

        function d(e) { return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) }

        function c() { const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"]; for (let a = 1; a < arguments.length; a += 1) { const i = a < 0 || arguments.length <= a ? void 0 : arguments[a]; if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) { const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0)); for (let t = 0, a = s.length; t < a; t += 1) { const a = s[t],
                            r = Object.getOwnPropertyDescriptor(i, a);
                        void 0 !== r && r.enumerable && (d(e[a]) && d(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : c(e[a], i[a]) : !d(e[a]) && d(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : c(e[a], i[a])) : e[a] = i[a]) } } } var s; return e }

        function p(e, t, s) { e.style.setProperty(t, s) }

        function u(e) { let { swiper: t, targetPosition: s, side: a } = e; const i = r(),
                n = -t.translate; let l, o = null; const d = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID); const c = s > n ? "next" : "prev",
                p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                u = () => { l = (new Date).getTime(), null === o && (o = l); const e = Math.max(Math.min((l - o) / d, 1), 0),
                        r = .5 - Math.cos(e * Math.PI) / 2; let c = n + r * (s - n); if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                            [a]: c }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => { t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                            [a]: c }) })), void i.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = i.requestAnimationFrame(u) };
            u() }

        function m(e) { return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e }

        function h(e, t) { return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t))) }

        function f(e, t) { void 0 === t && (t = []); const s = document.createElement(e); return s.classList.add(...Array.isArray(t) ? t : [t]), s }

        function g(e) { const t = r(),
                s = a(),
                i = e.getBoundingClientRect(),
                n = s.body,
                l = e.clientTop || n.clientTop || 0,
                o = e.clientLeft || n.clientLeft || 0,
                d = e === t ? t.scrollY : e.scrollTop,
                c = e === t ? t.scrollX : e.scrollLeft; return { top: i.top + d - l, left: i.left + c - o } }

        function v(e, t) { return r().getComputedStyle(e, null).getPropertyValue(t) }

        function w(e) { let t, s = e; if (s) { for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1); return t } }

        function b(e, t) { const s = []; let a = e.parentElement; for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement; return s }

        function y(e, t) { t && e.addEventListener("transitionend", (function s(a) { a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s)) })) }

        function E(e, t, s) { const a = r(); return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth } let x, S, T;

        function M() { return x || (x = function() { const e = r(),
                    t = a(); return { smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style, touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch) } }()), x }

        function C(e) { return void 0 === e && (e = {}), S || (S = function(e) { let { userAgent: t } = void 0 === e ? {} : e; const s = M(),
                    a = r(),
                    i = a.navigator.platform,
                    n = t || a.navigator.userAgent,
                    l = { ios: !1, android: !1 },
                    o = a.screen.width,
                    d = a.screen.height,
                    c = n.match(/(Android);?[\s\/]+([\d.]+)?/); let p = n.match(/(iPad).*OS\s([\d_]+)/); const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                    m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    h = "Win32" === i; let f = "MacIntel" === i; return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l }(e)), S }

        function P() { return T || (T = function() { const e = r(); let t = !1;

                function s() { const t = e.navigator.userAgent.toLowerCase(); return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0 } if (s()) { const s = String(e.navigator.userAgent); if (s.includes("Version/")) { const [e, a] = s.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                        t = e < 16 || 16 === e && a < 2 } } return { isSafari: t || s(), needPerspectiveFix: t, isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) } }()), T } var L = { on(e, t, s) { const a = this; if (!a.eventsListeners || a.destroyed) return a; if ("function" != typeof t) return a; const i = s ? "unshift" : "push"; return e.split(" ").forEach((e => { a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t) })), a }, once(e, t, s) { const a = this; if (!a.eventsListeners || a.destroyed) return a; if ("function" != typeof t) return a;

                function i() { a.off(e, i), i.__emitterProxy && delete i.__emitterProxy; for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                    t.apply(a, r) } return i.__emitterProxy = t, a.on(e, i, s) }, onAny(e, t) { const s = this; if (!s.eventsListeners || s.destroyed) return s; if ("function" != typeof e) return s; const a = t ? "unshift" : "push"; return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s }, offAny(e) { const t = this; if (!t.eventsListeners || t.destroyed) return t; if (!t.eventsAnyListeners) return t; const s = t.eventsAnyListeners.indexOf(e); return s >= 0 && t.eventsAnyListeners.splice(s, 1), t }, off(e, t) { const s = this; return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => { void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                        (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1) })) })), s) : s }, emit() { const e = this; if (!e.eventsListeners || e.destroyed) return e; if (!e.eventsListeners) return e; let t, s, a; for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n]; return "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a), (Array.isArray(t) ? t : t.split(" ")).forEach((t => { e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => { e.apply(a, [t, ...s]) })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => { e.apply(a, s) })) })), e } }; const z = (e, t) => { if (!e || e.destroyed || !e.params) return; const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`); if (s) { let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);!t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => { s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove()) }))), t && t.remove() } },
            A = (e, t) => { if (!e.slides[t]) return; const s = e.slides[t].querySelector('[loading="lazy"]');
                s && s.removeAttribute("loading") },
            $ = e => { if (!e || e.destroyed || !e.params) return; let t = e.params.lazyPreloadPrevNext; const s = e.slides.length; if (!s || !t || t < 0) return;
                t = Math.min(t, s); const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                    i = e.activeIndex; if (e.params.grid && e.params.grid.rows > 1) { const s = i,
                        r = [s - t]; return r.push(...Array.from({ length: t }).map(((e, t) => s + a + t))), void e.slides.forEach(((t, s) => { r.includes(t.column) && A(e, s) })) } const r = i + a - 1; if (e.params.rewind || e.params.loop)
                    for (let a = i - t; a <= r + t; a += 1) { const t = (a % s + s) % s;
                        (t < i || t > r) && A(e, t) } else
                        for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== i && (a > r || a < i) && A(e, a) }; var I = { updateSize: function() { const e = this; let t, s; const a = e.el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(v(a, "padding-left") || 0, 10) - parseInt(v(a, "padding-right") || 0, 10), s = s - parseInt(v(a, "padding-top") || 0, 10) - parseInt(v(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s })) }, updateSlides: function() { const e = this;

                    function t(t) { return e.isHorizontal() ? t : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[t] }

                    function s(e, s) { return parseFloat(e.getPropertyValue(t(s)) || 0) } const a = e.params,
                        { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: l, wrongRTL: o } = e,
                        d = e.virtual && a.virtual.enabled,
                        c = d ? e.virtual.slides.length : e.slides.length,
                        u = h(r, `.${e.params.slideClass}, swiper-slide`),
                        m = d ? e.virtual.slides.length : u.length; let f = []; const g = [],
                        w = []; let b = a.slidesOffsetBefore; "function" == typeof b && (b = a.slidesOffsetBefore.call(e)); let y = a.slidesOffsetAfter; "function" == typeof y && (y = a.slidesOffsetAfter.call(e)); const x = e.snapGrid.length,
                        S = e.slidesGrid.length; let T = a.spaceBetween,
                        M = -b,
                        C = 0,
                        P = 0; if (void 0 === n) return; "string" == typeof T && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * n : "string" == typeof T && (T = parseFloat(T)), e.virtualSize = -T, u.forEach((e => { l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "" })), a.centeredSlides && a.cssMode && (p(i, "--swiper-centered-offset-before", ""), p(i, "--swiper-centered-offset-after", "")); const L = a.grid && a.grid.rows > 1 && e.grid; let z;
                    L && e.grid.initSlides(m); const A = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0; for (let i = 0; i < m; i += 1) { let r; if (z = 0, u[i] && (r = u[i]), L && e.grid.updateSlide(i, r, m, t), !u[i] || "none" !== v(r, "display")) { if ("auto" === a.slidesPerView) { A && (u[i].style[t("width")] = ""); const n = getComputedStyle(r),
                                    l = r.style.transform,
                                    o = r.style.webkitTransform; if (l && (r.style.transform = "none"), o && (r.style.webkitTransform = "none"), a.roundLengths) z = e.isHorizontal() ? E(r, "width", !0) : E(r, "height", !0);
                                else { const e = s(n, "width"),
                                        t = s(n, "padding-left"),
                                        a = s(n, "padding-right"),
                                        i = s(n, "margin-left"),
                                        l = s(n, "margin-right"),
                                        o = n.getPropertyValue("box-sizing"); if (o && "border-box" === o) z = e + i + l;
                                    else { const { clientWidth: s, offsetWidth: n } = r;
                                        z = e + t + a + i + l + (n - s) } }
                                l && (r.style.transform = l), o && (r.style.webkitTransform = o), a.roundLengths && (z = Math.floor(z)) } else z = (n - (a.slidesPerView - 1) * T) / a.slidesPerView, a.roundLengths && (z = Math.floor(z)), u[i] && (u[i].style[t("width")] = `${z}px`);
                            u[i] && (u[i].swiperSlideSize = z), w.push(z), a.centeredSlides ? (M = M + z / 2 + C / 2 + T, 0 === C && 0 !== i && (M = M - n / 2 - T), 0 === i && (M = M - n / 2 - T), Math.abs(M) < .001 && (M = 0), a.roundLengths && (M = Math.floor(M)), P % a.slidesPerGroup == 0 && f.push(M), g.push(M)) : (a.roundLengths && (M = Math.floor(M)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup == 0 && f.push(M), g.push(M), M = M + z + T), e.virtualSize += z + T, C = z, P += 1 } } if (e.virtualSize = Math.max(e.virtualSize, n) + y, l && o && ("slide" === a.effect || "coverflow" === a.effect) && (i.style.width = `${e.virtualSize+T}px`), a.setWrapperSize && (i.style[t("width")] = `${e.virtualSize+T}px`), L && e.grid.updateWrapperSize(z, f, t), !a.centeredSlides) { const t = []; for (let s = 0; s < f.length; s += 1) { let i = f[s];
                            a.roundLengths && (i = Math.floor(i)), f[s] <= e.virtualSize - n && t.push(i) }
                        f = t, Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - n) } if (d && a.loop) { const t = w[0] + T; if (a.slidesPerGroup > 1) { const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / a.slidesPerGroup),
                                i = t * a.slidesPerGroup; for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + i) } for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1) 1 === a.slidesPerGroup && f.push(f[f.length - 1] + t), g.push(g[g.length - 1] + t), e.virtualSize += t } if (0 === f.length && (f = [0]), 0 !== T) { const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
                        u.filter(((e, t) => !(a.cssMode && !a.loop) || t !== u.length - 1)).forEach((e => { e.style[s] = `${T}px` })) } if (a.centeredSlides && a.centeredSlidesBounds) { let e = 0;
                        w.forEach((t => { e += t + (T || 0) })), e -= T; const t = e - n;
                        f = f.map((e => e <= 0 ? -b : e > t ? t + y : e)) } if (a.centerInsufficientSlides) { let e = 0; if (w.forEach((t => { e += t + (T || 0) })), e -= T, e < n) { const t = (n - e) / 2;
                            f.forEach(((e, s) => { f[s] = e - t })), g.forEach(((e, s) => { g[s] = e + t })) } } if (Object.assign(e, { slides: u, snapGrid: f, slidesGrid: g, slidesSizesGrid: w }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) { p(i, "--swiper-centered-offset-before", -f[0] + "px"), p(i, "--swiper-centered-offset-after", e.size / 2 - w[w.length - 1] / 2 + "px"); const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s)) } if (m !== c && e.emit("slidesLengthChange"), f.length !== x && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), g.length !== S && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(d || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) { const t = `${a.containerModifierClass}backface-hidden`,
                            s = e.el.classList.contains(t);
                        m <= a.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t) } }, updateAutoHeight: function(e) { const t = this,
                        s = [],
                        a = t.virtual && t.params.virtual.enabled; let i, r = 0; "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed); const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]; if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => { s.push(e) }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) { const e = t.activeIndex + i; if (e > t.slides.length && !a) break;
                                s.push(n(e)) } else s.push(n(t.activeIndex));
                    for (i = 0; i < s.length; i += 1)
                        if (void 0 !== s[i]) { const e = s[i].offsetHeight;
                            r = e > r ? e : r }(r || 0 === r) && (t.wrapperEl.style.height = `${r}px`) }, updateSlidesOffset: function() { const e = this,
                        t = e.slides,
                        s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0; for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment() }, updateSlidesProgress: function(e) { void 0 === e && (e = this && this.translate || 0); const t = this,
                        s = t.params,
                        { slides: a, rtlTranslate: i, snapGrid: r } = t; if (0 === a.length) return;
                    void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset(); let n = -e;
                    i && (n = e), a.forEach((e => { e.classList.remove(s.slideVisibleClass) })), t.visibleSlidesIndexes = [], t.visibleSlides = []; let l = s.spaceBetween; "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l)); for (let e = 0; e < a.length; e += 1) { const o = a[e]; let d = o.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset); const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
                            p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
                            u = -(n - d),
                            m = u + t.slidesSizesGrid[e];
                        (u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), a[e].classList.add(s.slideVisibleClass)), o.progress = i ? -c : c, o.originalProgress = i ? -p : p } }, updateProgress: function(e) { const t = this; if (void 0 === e) { const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0 } const s = t.params,
                        a = t.maxTranslate() - t.minTranslate(); let { progress: i, isBeginning: r, isEnd: n, progressLoop: l } = t; const o = r,
                        d = n; if (0 === a) i = 0, r = !0, n = !0;
                    else { i = (e - t.minTranslate()) / a; const s = Math.abs(e - t.minTranslate()) < 1,
                            l = Math.abs(e - t.maxTranslate()) < 1;
                        r = s || i <= 0, n = l || i >= 1, s && (i = 0), l && (i = 1) } if (s.loop) { const s = t.getSlideIndexByData(0),
                            a = t.getSlideIndexByData(t.slides.length - 1),
                            i = t.slidesGrid[s],
                            r = t.slidesGrid[a],
                            n = t.slidesGrid[t.slidesGrid.length - 1],
                            o = Math.abs(e);
                        l = o >= i ? (o - i) / n : (o + n - r) / n, l > 1 && (l -= 1) }
                    Object.assign(t, { progress: i, progressLoop: l, isBeginning: r, isEnd: n }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i) }, updateSlidesClasses: function() { const e = this,
                        { slides: t, params: s, slidesEl: a, activeIndex: i } = e,
                        r = e.virtual && s.virtual.enabled,
                        n = e => h(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0]; let l; if (t.forEach((e => { e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass) })), r)
                        if (s.loop) { let t = i - e.virtual.slidesBefore;
                            t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = n(`[data-swiper-slide-index="${t}"]`) } else l = n(`[data-swiper-slide-index="${i}"]`);
                    else l = t[i]; if (l) { l.classList.add(s.slideActiveClass); let e = function(e, t) { const s = []; for (; e.nextElementSibling;) { const a = e.nextElementSibling;
                                t ? a.matches(t) && s.push(a) : s.push(a), e = a } return s }(l, `.${s.slideClass}, swiper-slide`)[0];
                        s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass); let a = function(e, t) { const s = []; for (; e.previousElementSibling;) { const a = e.previousElementSibling;
                                t ? a.matches(t) && s.push(a) : s.push(a), e = a } return s }(l, `.${s.slideClass}, swiper-slide`)[0];
                        s.loop && 0 === !a && (a = t[t.length - 1]), a && a.classList.add(s.slidePrevClass) }
                    e.emitSlidesClasses() }, updateActiveIndex: function(e) { const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        { snapGrid: a, params: i, activeIndex: r, realIndex: n, snapIndex: l } = t; let o, d = e; const c = e => { let s = e - t.virtual.slidesBefore; return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s }; if (void 0 === d && (d = function(e) { const { slidesGrid: t, params: s } = e, a = e.rtlTranslate ? e.translate : -e.translate; let i; for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e); return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i }(t)), a.indexOf(s) >= 0) o = a.indexOf(s);
                    else { const e = Math.min(i.slidesPerGroupSkip, d);
                        o = e + Math.floor((d - e) / i.slidesPerGroup) } if (o >= a.length && (o = a.length - 1), d === r) return o !== l && (t.snapIndex = o, t.emit("snapIndexChange")), void(t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(d))); let p;
                    p = t.virtual && i.virtual.enabled && i.loop ? c(d) : t.slides[d] ? parseInt(t.slides[d].getAttribute("data-swiper-slide-index") || d, 10) : d, Object.assign(t, { previousSnapIndex: l, snapIndex: o, previousRealIndex: n, realIndex: p, previousIndex: r, activeIndex: d }), t.initialized && $(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (n !== p && t.emit("realIndexChange"), t.emit("slideChange")) }, updateClickedSlide: function(e, t) { const s = this,
                        a = s.params; let i = e.closest(`.${a.slideClass}, swiper-slide`);!i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {!i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e) })); let r, n = !1; if (i)
                        for (let e = 0; e < s.slides.length; e += 1)
                            if (s.slides[e] === i) { n = !0, r = e; break }
                    if (!i || !n) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
                    s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide() } },
            k = { getTranslate: function(e) { void 0 === e && (e = this.isHorizontal() ? "x" : "y"); const { params: t, rtlTranslate: s, translate: a, wrapperEl: i } = this; if (t.virtualTranslate) return s ? -a : a; if (t.cssMode) return a; let r = o(i, e); return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0 }, setTranslate: function(e, t) { const s = this,
                        { rtlTranslate: a, params: i, wrapperEl: r, progress: n } = s; let l, o = 0,
                        d = 0;
                    s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`); const c = s.maxTranslate() - s.minTranslate();
                    l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t) }, minTranslate: function() { return -this.snapGrid[0] }, maxTranslate: function() { return -this.snapGrid[this.snapGrid.length - 1] }, translateTo: function(e, t, s, a, i) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0); const r = this,
                        { params: n, wrapperEl: l } = r; if (r.animating && n.preventInteractionOnTransition) return !1; const o = r.minTranslate(),
                        d = r.maxTranslate(); let c; if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) { const e = r.isHorizontal(); if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                        else { if (!r.support.smoothScroll) return u({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -c, behavior: "smooth" }) } return !0 } return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) { r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd")) }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0 } };

        function O(e) { let { swiper: t, runCallbacks: s, direction: a, step: i } = e; const { activeIndex: r, previousIndex: n } = t; let l = a; if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) { if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
                t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`) } } var D = { slideTo: function(e, t, s, a, i) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10)); const r = this; let n = e;
                    n < 0 && (n = 0); const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: m, wrapperEl: h, enabled: f } = r; if (r.animating && l.preventInteractionOnTransition || !f && !a && !i) return !1; const g = Math.min(r.params.slidesPerGroupSkip, n); let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
                    v >= o.length && (v = o.length - 1); const w = -o[v]; if (l.normalizeSlideIndex)
                        for (let e = 0; e < d.length; e += 1) { const t = -Math.floor(100 * w),
                                s = Math.floor(100 * d[e]),
                                a = Math.floor(100 * d[e + 1]);
                            void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e) }
                    if (r.initialized && n !== p) { if (!r.allowSlideNext && (m ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1; if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1 } let b; if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset", m && -w === r.translate || !m && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1; if (l.cssMode) { const e = r.isHorizontal(),
                            s = m ? w : -w; if (0 === t) { const t = r.virtual && r.params.virtual.enabled;
                            t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => { h[e ? "scrollLeft" : "scrollTop"] = s }))) : h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => { r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1 })) } else { if (!r.support.smoothScroll) return u({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: s, behavior: "smooth" }) } return !0 } return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) { r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b)) }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0 }, slideToLoop: function(e, t, s, a) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10)); const i = this; let r = e; return i.params.loop && (i.virtual && i.params.virtual.enabled ? r += i.virtual.slidesBefore : r = i.getSlideIndexByData(r)), i.slideTo(r, t, s, a) }, slideNext: function(e, t, s) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); const a = this,
                        { enabled: i, params: r, animating: n } = a; if (!i) return a; let l = r.slidesPerGroup; "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1)); const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
                        d = a.virtual && r.virtual.enabled; if (r.loop) { if (n && !d && r.loopPreventsSliding) return !1; if (a.loopFix({ direction: "next" }), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => { a.slideTo(a.activeIndex + o, e, t, s) })), !0 } return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s) }, slidePrev: function(e, t, s) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); const a = this,
                        { params: i, snapGrid: r, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d } = a; if (!o) return a; const c = a.virtual && i.virtual.enabled; if (i.loop) { if (d && !c && i.loopPreventsSliding) return !1;
                        a.loopFix({ direction: "prev" }), a._clientLeft = a.wrapperEl.clientLeft }

                    function p(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e) } const u = p(l ? a.translate : -a.translate),
                        m = r.map((e => p(e))); let h = r[m.indexOf(u) - 1]; if (void 0 === h && i.cssMode) { let e;
                        r.forEach(((t, s) => { u >= t && (e = s) })), void 0 !== e && (h = r[e > 0 ? e - 1 : e]) } let f = 0; if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && a.isBeginning) { const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1; return a.slideTo(i, e, t, s) } return i.loop && 0 === a.activeIndex && i.cssMode ? (requestAnimationFrame((() => { a.slideTo(f, e, t, s) })), !0) : a.slideTo(f, e, t, s) }, slideReset: function(e, t, s) { return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s) }, slideToClosest: function(e, t, s, a) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5); const i = this; let r = i.activeIndex; const n = Math.min(i.params.slidesPerGroupSkip, r),
                        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                        o = i.rtlTranslate ? i.translate : -i.translate; if (o >= i.snapGrid[l]) { const e = i.snapGrid[l];
                        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup) } else { const e = i.snapGrid[l - 1];
                        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup) } return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s) }, slideToClickedSlide: function() { const e = this,
                        { params: t, slidesEl: s } = e,
                        a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView; let i, r = e.clickedIndex; const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`; if (t.loop) { if (e.animating) return;
                        i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = e.getSlideIndex(h(s, `${l}[data-swiper-slide-index="${i}"]`)[0]), n((() => { e.slideTo(r) }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = e.getSlideIndex(h(s, `${l}[data-swiper-slide-index="${i}"]`)[0]), n((() => { e.slideTo(r) }))) : e.slideTo(r) } else e.slideTo(r) } },
            G = { loopCreate: function(e) { const t = this,
                        { params: s, slidesEl: a } = t;!s.loop || t.virtual && t.params.virtual.enabled || (h(a, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => { e.setAttribute("data-swiper-slide-index", t) })), t.loopFix({ slideRealIndex: e, direction: s.centeredSlides ? void 0 : "next" })) }, loopFix: function(e) { let { slideRealIndex: t, slideTo: s = !0, direction: a, setTranslate: i, activeSlideIndex: r, byController: n, byMousewheel: l } = void 0 === e ? {} : e; const o = this; if (!o.params.loop) return;
                    o.emit("beforeLoopFix"); const { slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: m } = o; if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix"); const h = "auto" === m.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(m.slidesPerView, 10)); let f = m.loopedSlides || h;
                    f % m.slidesPerGroup != 0 && (f += m.slidesPerGroup - f % m.slidesPerGroup), o.loopedSlides = f; const g = [],
                        v = []; let w = o.activeIndex;
                    void 0 === r ? r = o.getSlideIndex(o.slides.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : w = r; const b = "next" === a || !a,
                        y = "prev" === a || !a; let E = 0,
                        x = 0; if (r < f) { E = Math.max(f - r, m.slidesPerGroup); for (let e = 0; e < f - r; e += 1) { const t = e - Math.floor(e / d.length) * d.length;
                            g.push(d.length - t - 1) } } else if (r > o.slides.length - 2 * f) { x = Math.max(r - (o.slides.length - 2 * f), m.slidesPerGroup); for (let e = 0; e < x; e += 1) { const t = e - Math.floor(e / d.length) * d.length;
                            v.push(t) } } if (y && g.forEach((e => { o.slides[e].swiperLoopMoveDOM = !0, u.prepend(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1 })), b && v.forEach((e => { o.slides[e].swiperLoopMoveDOM = !0, u.append(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1 })), o.recalcSlides(), "auto" === m.slidesPerView && o.updateSlides(), m.watchSlidesProgress && o.updateSlidesOffset(), s)
                        if (g.length > 0 && y)
                            if (void 0 === t) { const e = o.slidesGrid[w],
                                    t = o.slidesGrid[w + E] - e;
                                l ? o.setTranslate(o.translate - t) : (o.slideTo(w + E, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t, o.touchEventsData.currentTranslate = o.translate)) } else i && (o.slideToLoop(t, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate);
                    else if (v.length > 0 && b)
                        if (void 0 === t) { const e = o.slidesGrid[w],
                                t = o.slidesGrid[w - x] - e;
                            l ? o.setTranslate(o.translate - t) : (o.slideTo(w - x, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t, o.touchEventsData.currentTranslate = o.translate)) } else o.slideToLoop(t, 0, !1, !0);
                    if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !n) { const e = { slideRealIndex: t, direction: a, setTranslate: i, activeSlideIndex: r, byController: !0 };
                        Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {!t.destroyed && t.params.loop && t.loopFix({...e, slideTo: t.params.slidesPerView === m.slidesPerView && s }) })) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({...e, slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s }) }
                    o.emit("loopFix") }, loopDestroy: function() { const e = this,
                        { params: t, slidesEl: s } = e; if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                    e.recalcSlides(); const a = [];
                    e.slides.forEach((e => { const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                        a[t] = e })), e.slides.forEach((e => { e.removeAttribute("data-swiper-slide-index") })), a.forEach((e => { s.append(e) })), e.recalcSlides(), e.slideTo(e.realIndex, 0) } };

        function H(e) { const t = this,
                s = a(),
                i = r(),
                n = t.touchEventsData;
            n.evCache.push(e); const { params: o, touches: d, enabled: c } = t; if (!c) return; if (!o.simulateTouch && "mouse" === e.pointerType) return; if (t.animating && o.preventInteractionOnTransition) return;!t.animating && o.cssMode && o.loop && t.loopFix(); let p = e;
            p.originalEvent && (p = p.originalEvent); let u = p.target; if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(u)) return; if ("which" in p && 3 === p.which) return; if ("button" in p && p.button > 0) return; if (n.isTouched && n.isMoved) return; const m = !!o.noSwipingClass && "" !== o.noSwipingClass,
                h = e.composedPath ? e.composedPath() : e.path;
            m && p.target && p.target.shadowRoot && h && (u = h[0]); const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
                g = !(!p.target || !p.target.shadowRoot); if (o.noSwiping && (g ? function(e, t) { return void 0 === t && (t = this),
                        function t(s) { if (!s || s === a() || s === r()) return null;
                            s.assignedSlot && (s = s.assignedSlot); const i = s.closest(e); return i || s.getRootNode ? i || t(s.getRootNode().host) : null }(t) }(f, u) : u.closest(f))) return void(t.allowClick = !0); if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
            d.currentX = p.pageX, d.currentY = p.pageY; const v = d.currentX,
                w = d.currentY,
                b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold; if (b && (v <= y || v >= i.innerWidth - y)) { if ("prevent" !== b) return;
                e.preventDefault() }
            Object.assign(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), d.startX = v, d.startY = w, n.touchStartTime = l(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (n.allowThresholdMove = !1); let E = !0;
            u.matches(n.focusableElements) && (E = !1, "SELECT" === u.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== u && s.activeElement.blur(); const x = E && t.allowTouchMove && o.touchStartPreventDefault;!o.touchStartForcePreventDefault && !x || u.isContentEditable || p.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p) }

        function X(e) { const t = a(),
                s = this,
                i = s.touchEventsData,
                { params: r, touches: n, rtlTranslate: o, enabled: d } = s; if (!d) return; if (!r.simulateTouch && "mouse" === e.pointerType) return; let c = e; if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c)); const p = i.evCache.findIndex((e => e.pointerId === c.pointerId));
            p >= 0 && (i.evCache[p] = c); const u = i.evCache.length > 1 ? i.evCache[0] : c,
                m = u.pageX,
                h = u.pageY; if (c.preventedByNestedSwiper) return n.startX = m, void(n.startY = h); if (!s.allowTouchMove) return c.target.matches(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, { startX: m, startY: h, prevX: s.touches.currentX, prevY: s.touches.currentY, currentX: m, currentY: h }), i.touchStartTime = l())); if (r.touchReleaseOnEdges && !r.loop)
                if (s.isVertical()) { if (h < n.startY && s.translate <= s.maxTranslate() || h > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1) } else if (m < n.startX && s.translate <= s.maxTranslate() || m > n.startX && s.translate >= s.minTranslate()) return; if (t.activeElement && c.target === t.activeElement && c.target.matches(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1); if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
            n.currentX = m, n.currentY = h; const f = n.currentX - n.startX,
                g = n.currentY - n.startY; if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return; if (void 0 === i.isScrolling) { let e;
                s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle) } if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && i.evCache.length > 1) return void(i.isTouched = !1); if (!i.startMoving) return;
            s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(); let v = s.isHorizontal() ? f : g,
                w = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
            r.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), w = Math.abs(w) * (o ? 1 : -1)), n.diff = v, v *= r.touchRatio, o && (v = -v, w = -w); const b = s.touchesDirection;
            s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = w > 0 ? "prev" : "next"; const y = s.params.loop && !r.cssMode,
                E = "next" === s.swipeDirection && s.allowSlideNext || "prev" === s.swipeDirection && s.allowSlidePrev; if (!i.isMoved) { if (y && E && s.loopFix({ direction: s.swipeDirection }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) { const e = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
                    s.wrapperEl.dispatchEvent(e) }
                i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c) } let x;
            i.isMoved && b !== s.touchesDirection && y && E && Math.abs(v) >= 1 && (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), x = !0), s.emit("sliderMove", c), i.isMoved = !0, i.currentTranslate = v + i.startTranslate; let S = !0,
                T = r.resistanceRatio; if (r.touchReleaseOnEdges && (T = 0), v > 0 ? (y && E && !x && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }), i.currentTranslate > s.minTranslate() && (S = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** T))) : v < 0 && (y && E && !x && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({ direction: "next", setTranslate: !0, activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10))) }), i.currentTranslate < s.maxTranslate() && (S = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** T))), S && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) { if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate); if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY) }
            r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate)) }

        function Y(e) { const t = this,
                s = t.touchEventsData,
                a = s.evCache.findIndex((t => t.pointerId === e.pointerId)); if (a >= 0 && s.evCache.splice(a, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type) && (!["pointercancel", "contextmenu"].includes(e.type) || !t.browser.isSafari && !t.browser.isWebView)) return; const { params: i, touches: r, rtlTranslate: o, slidesGrid: d, enabled: c } = t; if (!c) return; if (!i.simulateTouch && "mouse" === e.pointerType) return; let p = e; if (p.originalEvent && (p = p.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", p), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
            i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1); const u = l(),
                m = u - s.touchStartTime; if (t.allowClick) { const e = p.path || p.composedPath && p.composedPath();
                t.updateClickedSlide(e && e[0] || p.target, e), t.emit("tap click", p), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", p) } if (s.lastClickTime = l(), n((() => { t.destroyed || (t.allowClick = !0) })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1); let h; if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = i.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return; if (i.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: h }); let f = 0,
                g = t.slidesSizesGrid[0]; for (let e = 0; e < d.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) { const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                void 0 !== d[e + t] ? h >= d[e] && h < d[e + t] && (f = e, g = d[e + t] - d[e]) : h >= d[e] && (f = e, g = d[d.length - 1] - d[d.length - 2]) } let v = null,
                w = null;
            i.rewind && (t.isBeginning ? w = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0)); const b = (h - d[f]) / g,
                y = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup; if (m > i.longSwipesMs) { if (!i.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (b >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : f + y) : t.slideTo(f)), "prev" === t.swipeDirection && (b > 1 - i.longSwipesRatio ? t.slideTo(f + y) : null !== w && b < 0 && Math.abs(b) > i.longSwipesRatio ? t.slideTo(w) : t.slideTo(f)) } else { if (!i.shortSwipes) return void t.slideTo(t.activeIndex);!t.navigation || p.target !== t.navigation.nextEl && p.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f)) : p.target === t.navigation.nextEl ? t.slideTo(f + y) : t.slideTo(f) } }

        function N() { const e = this,
                { params: t, el: s } = e; if (s && 0 === s.offsetWidth) return;
            t.breakpoints && e.setBreakpoint(); const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e, n = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(); const l = n && t.loop;!("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => { e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume() }), 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow() }

        function B(e) { const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))) }

        function R() { const e = this,
                { wrapperEl: t, rtlTranslate: s, enabled: a } = e; if (!a) return; let i;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses(); const r = e.maxTranslate() - e.minTranslate();
            i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1) }

        function q(e) { const t = this;
            z(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update() } let V = !1;

        function F() {} const _ = (e, t) => { const s = a(),
                    { params: i, el: r, wrapperEl: n, device: l } = e,
                    o = !!i.nested,
                    d = "on" === t ? "addEventListener" : "removeEventListener",
                    c = t;
                r[d]("pointerdown", e.onTouchStart, { passive: !1 }), s[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }), s[d]("pointerup", e.onTouchEnd, { passive: !0 }), s[d]("pointercancel", e.onTouchEnd, { passive: !0 }), s[d]("pointerout", e.onTouchEnd, { passive: !0 }), s[d]("pointerleave", e.onTouchEnd, { passive: !0 }), s[d]("contextmenu", e.onTouchEnd, { passive: !0 }), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : e[c]("observerUpdate", N, !0), r[d]("load", e.onLoad, { capture: !0 }) },
            j = (e, t) => e.grid && t.grid && t.grid.rows > 1; var W = { init: !0, direction: "horizontal", oneWayMovement: !1, touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: !1, updateOnWindowResize: !0, resizeObserver: !0, nested: !1, createElements: !1, enabled: !0, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: !1, userAgent: null, url: null, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: !1, centeredSlides: !1, centeredSlidesBounds: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 5, touchMoveStopPropagation: !1, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, loop: !1, loopedSlides: null, loopPreventsSliding: !0, rewind: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", lazyPreloaderClass: "swiper-lazy-preloader", lazyPreloadPrevNext: 0, runCallbacksOnInit: !0, _emitClasses: !1 };

        function U(e, t) { return function(s) { void 0 === s && (s = {}); const a = Object.keys(s)[0],
                    i = s[a]; "object" == typeof i && null !== i ? (!0 === e[a] && (e[a] = { enabled: !0 }), "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0), a in e && "enabled" in i ? ("object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = { enabled: !1 }), c(t, s)) : c(t, s)) : c(t, s) } } const K = { eventsEmitter: L, update: I, translate: k, transition: { setTransition: function(e, t) { const s = this;
                        s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t) }, transitionStart: function(e, t) { void 0 === e && (e = !0); const s = this,
                            { params: a } = s;
                        a.cssMode || (a.autoHeight && s.updateAutoHeight(), O({ swiper: s, runCallbacks: e, direction: t, step: "Start" })) }, transitionEnd: function(e, t) { void 0 === e && (e = !0); const s = this,
                            { params: a } = s;
                        s.animating = !1, a.cssMode || (s.setTransition(0), O({ swiper: s, runCallbacks: e, direction: t, step: "End" })) } }, slide: D, loop: G, grabCursor: { setGrabCursor: function(e) { const t = this; if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return; const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                        t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => { t.__preventObserver__ = !1 })) }, unsetGrabCursor: function() { const e = this;
                        e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => { e.__preventObserver__ = !1 }))) } }, events: { attachEvents: function() { const e = this,
                            t = a(),
                            { params: s } = e;
                        e.onTouchStart = H.bind(e), e.onTouchMove = X.bind(e), e.onTouchEnd = Y.bind(e), s.cssMode && (e.onScroll = R.bind(e)), e.onClick = B.bind(e), e.onLoad = q.bind(e), V || (t.addEventListener("touchstart", F), V = !0), _(e, "on") }, detachEvents: function() { _(this, "off") } }, breakpoints: { setBreakpoint: function() { const e = this,
                            { realIndex: t, initialized: s, params: a, el: i } = e,
                            r = a.breakpoints; if (!r || r && 0 === Object.keys(r).length) return; const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el); if (!n || e.currentBreakpoint === n) return; const l = (n in r ? r[n] : void 0) || e.originalParams,
                            o = j(e, a),
                            d = j(e, l),
                            p = a.enabled;
                        o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (i.classList.add(`${a.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => { if (void 0 === l[t]) return; const s = a[t] && a[t].enabled,
                                i = l[t] && l[t].enabled;
                            s && !i && e[t].disable(), !s && i && e[t].enable() })); const u = l.direction && l.direction !== a.direction,
                            m = a.loop && (l.slidesPerView !== a.slidesPerView || u),
                            h = a.loop;
                        u && s && e.changeDirection(), c(e.params, l); const f = e.params.enabled,
                            g = e.params.loop;
                        Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), p && !f ? e.disable() : !p && f && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), s && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !h && g ? (e.loopCreate(t), e.updateSlides()) : h && !g && e.loopDestroy()), e.emit("breakpoint", l) }, getBreakpoint: function(e, t, s) { if (void 0 === t && (t = "window"), !e || "container" === t && !s) return; let a = !1; const i = r(),
                            n = "window" === t ? i.innerHeight : s.clientHeight,
                            l = Object.keys(e).map((e => { if ("string" == typeof e && 0 === e.indexOf("@")) { const t = parseFloat(e.substr(1)); return { value: n * t, point: e } } return { value: e, point: e } }));
                        l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10))); for (let e = 0; e < l.length; e += 1) { const { point: r, value: n } = l[e]; "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r) } return a || "max" } }, checkOverflow: { checkOverflow: function() { const e = this,
                            { isLocked: t, params: s } = e,
                            { slidesOffsetBefore: a } = s; if (a) { const t = e.slides.length - 1,
                                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                            e.isLocked = e.size > s } else e.isLocked = 1 === e.snapGrid.length;!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock") } }, classes: { addClasses: function() { const e = this,
                            { classNames: t, params: s, rtl: a, el: i, device: r } = e,
                            n = function(e, t) { const s = []; return e.forEach((e => { "object" == typeof e ? Object.keys(e).forEach((a => { e[a] && s.push(t + a) })) : "string" == typeof e && s.push(t + e) })), s }(["initialized", s.direction, { "free-mode": e.params.freeMode && s.freeMode.enabled }, { autoheight: s.autoHeight }, { rtl: a }, { grid: s.grid && s.grid.rows > 1 }, { "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill }, { android: r.android }, { ios: r.ios }, { "css-mode": s.cssMode }, { centered: s.cssMode && s.centeredSlides }, { "watch-progress": s.watchSlidesProgress }], s.containerModifierClass);
                        t.push(...n), i.classList.add(...t), e.emitContainerClasses() }, removeClasses: function() { const { el: e, classNames: t } = this;
                        e.classList.remove(...t), this.emitContainerClasses() } } },
            Z = {};
        class Q { constructor() { let e, t; for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
                1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = c({}, t), e && !t.el && (t.el = e); const n = a(); if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) { const e = []; return n.querySelectorAll(t.el).forEach((s => { const a = c({}, t, { el: s });
                        e.push(new Q(a)) })), e } const l = this;
                l.__swiper__ = !0, l.support = M(), l.device = C({ userAgent: t.userAgent }), l.browser = P(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules); const o = {};
                l.modules.forEach((e => { e({ params: t, swiper: l, extendParams: U(t, o), on: l.on.bind(l), once: l.once.bind(l), off: l.off.bind(l), emit: l.emit.bind(l) }) })); const d = c({}, W, o); return l.params = c({}, d, Z, t), l.originalParams = c({}, l.params), l.passedParams = c({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => { l.on(e, l.params.on[e]) })), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, { enabled: l.params.enabled, el: e, classNames: [], slides: [], slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: () => "horizontal" === l.params.direction, isVertical: () => "vertical" === l.params.direction, activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, cssOverflowAdjustment() { return Math.trunc(this.translate / 2 ** 23) * 2 ** 23 }, allowSlideNext: l.params.allowSlideNext, allowSlidePrev: l.params.allowSlidePrev, touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: l.params.focusableElements, lastClickTime: 0, clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, startMoving: void 0, evCache: [] }, allowClick: !0, allowTouchMove: l.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), l.emit("_swiper"), l.params.init && l.init(), l }
            getSlideIndex(e) { const { slidesEl: t, params: s } = this, a = w(h(t, `.${s.slideClass}, swiper-slide`)[0]); return w(e) - a }
            getSlideIndexByData(e) { return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0]) }
            recalcSlides() { const { slidesEl: e, params: t } = this;
                this.slides = h(e, `.${t.slideClass}, swiper-slide`) }
            enable() { const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable")) }
            disable() { const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable")) }
            setProgress(e, t) { const s = this;
                e = Math.min(Math.max(e, 0), 1); const a = s.minTranslate(),
                    i = (s.maxTranslate() - a) * e + a;
                s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses() }
            emitContainerClasses() { const e = this; if (!e.params._emitClasses || !e.el) return; const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" ")) }
            getSlideClasses(e) { const t = this; return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ") }
            emitSlidesClasses() { const e = this; if (!e.params._emitClasses || !e.el) return; const t = [];
                e.slides.forEach((s => { const a = e.getSlideClasses(s);
                    t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a) })), e.emit("_slideClasses", t) }
            slidesPerViewDynamic(e, t) { void 0 === e && (e = "current"), void 0 === t && (t = !1); const { params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l } = this; let o = 1; if ("number" == typeof s.slidesPerView) return s.slidesPerView; if (s.centeredSlides) { let e, t = a[l] ? a[l].swiperSlideSize : 0; for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0)); for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0)) } else if ("current" === e)
                    for (let e = l + 1; e < a.length; e += 1)(t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
                else
                    for (let e = l - 1; e >= 0; e -= 1) i[l] - i[e] < n && (o += 1); return o }
            update() { const e = this; if (!e || e.destroyed) return; const { snapGrid: t, params: s } = e;

                function a() { const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses() } let i; if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => { t.complete && z(e, t) })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) a(), s.autoHeight && e.updateAutoHeight();
                else { if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) { const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                        i = e.slideTo(t.length - 1, 0, !1, !0) } else i = e.slideTo(e.activeIndex, 0, !1, !0);
                    i || a() }
                s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update") }
            changeDirection(e, t) { void 0 === t && (t = !0); const s = this,
                    a = s.params.direction; return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => { "vertical" === e ? t.style.width = "" : t.style.height = "" })), s.emit("changeDirection"), t && s.update()), s }
            changeLanguageDirection(e) { const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update()) }
            mount(e) { const t = this; if (t.mounted) return !0; let s = e || t.params.el; if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
                s.swiper = t, s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0); const a = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`; let i = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(a()) : h(s, a())[0]; return !i && t.params.createElements && (i = f("div", t.params.wrapperClass), s.append(i), h(s, `.${t.params.slideClass}`).forEach((e => { i.append(e) }))), Object.assign(t, { el: s, wrapperEl: i, slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i, hostEl: t.isElement ? s.parentNode.host : s, mounted: !0, rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"), rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")), wrongRTL: "-webkit-box" === v(i, "display") }), !0 }
            init(e) { const t = this; if (t.initialized) return t; if (!1 === t.mount(e)) return t;
                t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(); const s = [...t.el.querySelectorAll('[loading="lazy"]')]; return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => { e.complete ? z(t, e) : e.addEventListener("load", (e => { z(t, e.target) })) })), $(t), t.initialized = !0, $(t), t.emit("init"), t.emit("afterInit"), t }
            destroy(e, t) { void 0 === e && (e = !0), void 0 === t && (t = !0); const s = this,
                    { params: a, el: i, wrapperEl: r, slides: n } = s; return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttribute("style"), r.removeAttribute("style"), n && n.length && n.forEach((e => { e.classList.remove(a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index") }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => { s.off(e) })), !1 !== e && (s.el.swiper = null, function(e) { const t = e;
                    Object.keys(t).forEach((e => { try { t[e] = null } catch (e) {} try { delete t[e] } catch (e) {} })) }(s)), s.destroyed = !0), null }
            static extendDefaults(e) { c(Z, e) }
            static get extendedDefaults() { return Z }
            static get defaults() { return W }
            static installModule(e) { Q.prototype.__modules__ || (Q.prototype.__modules__ = []); const t = Q.prototype.__modules__; "function" == typeof e && t.indexOf(e) < 0 && t.push(e) }
            static use(e) { return Array.isArray(e) ? (e.forEach((e => Q.installModule(e))), Q) : (Q.installModule(e), Q) } }

        function J(e, t, s, a) { return e.params.createElements && Object.keys(a).forEach((i => { if (!s[i] && !0 === s.auto) { let r = h(e.el, `.${a[i]}`)[0];
                    r || (r = f("div", a[i]), r.className = a[i], e.el.append(r)), s[i] = r, t[i] = r } })), s }

        function ee(e) { return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}` }

        function te(e) { const t = this,
                { params: s, slidesEl: a } = t;
            s.loop && t.loopDestroy(); const i = e => { if ("string" == typeof e) { const t = document.createElement("div");
                    t.innerHTML = e, a.append(t.children[0]), t.innerHTML = "" } else a.append(e) }; if ("object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
            else i(e);
            t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update() }

        function se(e) { const t = this,
                { params: s, activeIndex: a, slidesEl: i } = t;
            s.loop && t.loopDestroy(); let r = a + 1; const n = e => { if ("string" == typeof e) { const t = document.createElement("div");
                    t.innerHTML = e, i.prepend(t.children[0]), t.innerHTML = "" } else i.prepend(e) }; if ("object" == typeof e && "length" in e) { for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
                r = a + e.length } else n(e);
            t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1) }

        function ae(e, t) { const s = this,
                { params: a, activeIndex: i, slidesEl: r } = s; let n = i;
            a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides()); const l = s.slides.length; if (e <= 0) return void s.prependSlide(t); if (e >= l) return void s.appendSlide(t); let o = n > e ? n + 1 : n; const d = []; for (let t = l - 1; t >= e; t -= 1) { const e = s.slides[t];
                e.remove(), d.unshift(e) } if ("object" == typeof t && "length" in t) { for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
                o = n > e ? n + t.length : n } else r.append(t); for (let e = 0; e < d.length; e += 1) r.append(d[e]);
            s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1) }

        function ie(e) { const t = this,
                { params: s, activeIndex: a } = t; let i = a;
            s.loop && (i -= t.loopedSlides, t.loopDestroy()); let r, n = i; if ("object" == typeof e && "length" in e) { for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
                n = Math.max(n, 0) } else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
            t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1) }

        function re() { const e = this,
                t = []; for (let s = 0; s < e.slides.length; s += 1) t.push(s);
            e.removeSlide(t) }

        function ne(e) { const { effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d } = e; let c;
            a("beforeInit", (() => { if (s.params.effect !== t) return;
                s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`); const e = n ? n() : {};
                Object.assign(s.params, e), Object.assign(s.originalParams, e) })), a("setTranslate", (() => { s.params.effect === t && i() })), a("setTransition", ((e, a) => { s.params.effect === t && r(a) })), a("transitionEnd", (() => { if (s.params.effect === t && o) { if (!d || !d().slideShadows) return;
                    s.slides.forEach((e => { e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove())) })), o() } })), a("virtualUpdate", (() => { s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => { c && s.slides && s.slides.length && (i(), c = !1) }))) })) }

        function le(e, t) { const s = m(t); return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s }

        function oe(e) { let { swiper: t, duration: s, transformElements: a, allSlides: i } = e; const { activeIndex: r } = t; if (t.params.virtualTranslate && 0 !== s) { let e, s = !1;
                e = i ? a : a.filter((e => { const s = e.classList.contains("swiper-slide-transform") ? (e => e.parentElement ? e.parentElement : t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0])(e) : e; return t.getSlideIndex(s) === r })), e.forEach((e => { y(e, (() => { if (s) return; if (!t || t.destroyed) return;
                        s = !0, t.animating = !1; const e = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
                        t.wrapperEl.dispatchEvent(e) })) })) } }
