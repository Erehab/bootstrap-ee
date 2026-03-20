/*! Bootstrap EE v2.2.0 | bs-ee profile (https://github.com/Erehab/bootstrap-ee) */
var Oe = "top", Ye = "bottom", We = "right", Ne = "left", Mr = "auto", _n = [Oe, Ye, We, Ne], Ft = "start", fn = "end", jo = "clippingParents", Ai = "viewport", nn = "popper", zo = "reference", pi = /* @__PURE__ */ _n.reduce(function(r, t) {
  return r.concat([t + "-" + Ft, t + "-" + fn]);
}, []), Mi = /* @__PURE__ */ [].concat(_n, [Mr]).reduce(function(r, t) {
  return r.concat([t, t + "-" + Ft, t + "-" + fn]);
}, []), Go = "beforeRead", Ko = "read", Uo = "afterRead", Xo = "beforeMain", qo = "main", Qo = "afterMain", Jo = "beforeWrite", Zo = "write", ea = "afterWrite", ta = [Go, Ko, Uo, Xo, qo, Qo, Jo, Zo, ea];
function st(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
function Ve(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var t = r.ownerDocument;
    return t && t.defaultView || window;
  }
  return r;
}
function Yt(r) {
  var t = Ve(r).Element;
  return r instanceof t || r instanceof Element;
}
function Ge(r) {
  var t = Ve(r).HTMLElement;
  return r instanceof t || r instanceof HTMLElement;
}
function xi(r) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ve(r).ShadowRoot;
  return r instanceof t || r instanceof ShadowRoot;
}
function Ls(r) {
  var t = r.state;
  Object.keys(t.elements).forEach(function(e) {
    var n = t.styles[e] || {}, i = t.attributes[e] || {}, a = t.elements[e];
    !Ge(a) || !st(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(o) {
      var s = i[o];
      s === !1 ? a.removeAttribute(o) : a.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function $s(r) {
  var t = r.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], a = t.attributes[n] || {}, o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : e[n]), s = o.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Ge(i) || !st(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Oi = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ls,
  effect: $s,
  requires: ["computeStyles"]
};
function ot(r) {
  return r.split("-")[0];
}
var Ht = Math.max, _r = Math.min, hn = Math.round;
function gi() {
  var r = navigator.userAgentData;
  return r != null && r.brands && Array.isArray(r.brands) ? r.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function na() {
  return !/^((?!chrome|android).)*safari/i.test(gi());
}
function pn(r, t, e) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  var n = r.getBoundingClientRect(), i = 1, a = 1;
  t && Ge(r) && (i = r.offsetWidth > 0 && hn(n.width) / r.offsetWidth || 1, a = r.offsetHeight > 0 && hn(n.height) / r.offsetHeight || 1);
  var o = Yt(r) ? Ve(r) : window, s = o.visualViewport, l = !na() && e, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, d = (n.top + (l && s ? s.offsetTop : 0)) / a, p = n.width / i, m = n.height / a;
  return {
    width: p,
    height: m,
    top: d,
    right: u + p,
    bottom: d + m,
    left: u,
    x: u,
    y: d
  };
}
function Ni(r) {
  var t = pn(r), e = r.offsetWidth, n = r.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: r.offsetLeft,
    y: r.offsetTop,
    width: e,
    height: n
  };
}
function ra(r, t) {
  var e = t.getRootNode && t.getRootNode();
  if (r.contains(t))
    return !0;
  if (e && xi(e)) {
    var n = t;
    do {
      if (n && r.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function mt(r) {
  return Ve(r).getComputedStyle(r);
}
function Rs(r) {
  return ["table", "td", "th"].indexOf(st(r)) >= 0;
}
function Mt(r) {
  return ((Yt(r) ? r.ownerDocument : (
    // $FlowFixMe[prop-missing]
    r.document
  )) || window.document).documentElement;
}
function xr(r) {
  return st(r) === "html" ? r : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    r.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    r.parentNode || // DOM Element detected
    (xi(r) ? r.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mt(r)
  );
}
function qi(r) {
  return !Ge(r) || // https://github.com/popperjs/popper-core/issues/837
  mt(r).position === "fixed" ? null : r.offsetParent;
}
function Bs(r) {
  var t = /firefox/i.test(gi()), e = /Trident/i.test(gi());
  if (e && Ge(r)) {
    var n = mt(r);
    if (n.position === "fixed")
      return null;
  }
  var i = xr(r);
  for (xi(i) && (i = i.host); Ge(i) && ["html", "body"].indexOf(st(i)) < 0; ) {
    var a = mt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Hn(r) {
  for (var t = Ve(r), e = qi(r); e && Rs(e) && mt(e).position === "static"; )
    e = qi(e);
  return e && (st(e) === "html" || st(e) === "body" && mt(e).position === "static") ? t : e || Bs(r) || t;
}
function ki(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
function On(r, t, e) {
  return Ht(r, _r(t, e));
}
function Hs(r, t, e) {
  var n = On(r, t, e);
  return n > e ? e : n;
}
function ia() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function oa(r) {
  return Object.assign({}, ia(), r);
}
function aa(r, t) {
  return t.reduce(function(e, n) {
    return e[n] = r, e;
  }, {});
}
var Fs = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, oa(typeof t != "number" ? t : aa(t, _n));
};
function Ys(r) {
  var t, e = r.state, n = r.name, i = r.options, a = e.elements.arrow, o = e.modifiersData.popperOffsets, s = ot(e.placement), l = ki(s), u = [Ne, We].indexOf(s) >= 0, d = u ? "height" : "width";
  if (!(!a || !o)) {
    var p = Fs(i.padding, e), m = Ni(a), E = l === "y" ? Oe : Ne, b = l === "y" ? Ye : We, g = e.rects.reference[d] + e.rects.reference[l] - o[l] - e.rects.popper[d], y = o[l] - e.rects.reference[l], M = Hn(a), I = M ? l === "y" ? M.clientHeight || 0 : M.clientWidth || 0 : 0, $ = g / 2 - y / 2, F = p[E], R = I - m[d] - p[b], N = I / 2 - m[d] / 2 + $, x = On(F, N, R), D = l;
    e.modifiersData[n] = (t = {}, t[D] = x, t.centerOffset = x - N, t);
  }
}
function Ws(r) {
  var t = r.state, e = r.options, n = e.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || ra(t.elements.popper, i) && (t.elements.arrow = i));
}
const sa = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ys,
  effect: Ws,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function gn(r) {
  return r.split("-")[1];
}
var Vs = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function js(r, t) {
  var e = r.x, n = r.y, i = t.devicePixelRatio || 1;
  return {
    x: hn(e * i) / i || 0,
    y: hn(n * i) / i || 0
  };
}
function Qi(r) {
  var t, e = r.popper, n = r.popperRect, i = r.placement, a = r.variation, o = r.offsets, s = r.position, l = r.gpuAcceleration, u = r.adaptive, d = r.roundOffsets, p = r.isFixed, m = o.x, E = m === void 0 ? 0 : m, b = o.y, g = b === void 0 ? 0 : b, y = typeof d == "function" ? d({
    x: E,
    y: g
  }) : {
    x: E,
    y: g
  };
  E = y.x, g = y.y;
  var M = o.hasOwnProperty("x"), I = o.hasOwnProperty("y"), $ = Ne, F = Oe, R = window;
  if (u) {
    var N = Hn(e), x = "clientHeight", D = "clientWidth";
    if (N === Ve(e) && (N = Mt(e), mt(N).position !== "static" && s === "absolute" && (x = "scrollHeight", D = "scrollWidth")), N = N, i === Oe || (i === Ne || i === We) && a === fn) {
      F = Ye;
      var Y = p && N === R && R.visualViewport ? R.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[x]
      );
      g -= Y - n.height, g *= l ? 1 : -1;
    }
    if (i === Ne || (i === Oe || i === Ye) && a === fn) {
      $ = We;
      var W = p && N === R && R.visualViewport ? R.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[D]
      );
      E -= W - n.width, E *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: s
  }, u && Vs), J = d === !0 ? js({
    x: E,
    y: g
  }, Ve(e)) : {
    x: E,
    y: g
  };
  if (E = J.x, g = J.y, l) {
    var U;
    return Object.assign({}, B, (U = {}, U[F] = I ? "0" : "", U[$] = M ? "0" : "", U.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + E + "px, " + g + "px)" : "translate3d(" + E + "px, " + g + "px, 0)", U));
  }
  return Object.assign({}, B, (t = {}, t[F] = I ? g + "px" : "", t[$] = M ? E + "px" : "", t.transform = "", t));
}
function zs(r) {
  var t = r.state, e = r.options, n = e.gpuAcceleration, i = n === void 0 ? !0 : n, a = e.adaptive, o = a === void 0 ? !0 : a, s = e.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: ot(t.placement),
    variation: gn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qi(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qi(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Pi = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zs,
  data: {}
};
var Jn = {
  passive: !0
};
function Gs(r) {
  var t = r.state, e = r.instance, n = r.options, i = n.scroll, a = i === void 0 ? !0 : i, o = n.resize, s = o === void 0 ? !0 : o, l = Ve(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", e.update, Jn);
  }), s && l.addEventListener("resize", e.update, Jn), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", e.update, Jn);
    }), s && l.removeEventListener("resize", e.update, Jn);
  };
}
const Ii = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Gs,
  data: {}
};
var Ks = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function dr(r) {
  return r.replace(/left|right|bottom|top/g, function(t) {
    return Ks[t];
  });
}
var Us = {
  start: "end",
  end: "start"
};
function Ji(r) {
  return r.replace(/start|end/g, function(t) {
    return Us[t];
  });
}
function Li(r) {
  var t = Ve(r), e = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: n
  };
}
function $i(r) {
  return pn(Mt(r)).left + Li(r).scrollLeft;
}
function Xs(r, t) {
  var e = Ve(r), n = Mt(r), i = e.visualViewport, a = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = na();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + $i(r),
    y: l
  };
}
function qs(r) {
  var t, e = Mt(r), n = Li(r), i = (t = r.ownerDocument) == null ? void 0 : t.body, a = Ht(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Ht(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + $i(r), l = -n.scrollTop;
  return mt(i || e).direction === "rtl" && (s += Ht(e.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function Ri(r) {
  var t = mt(r), e = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + i + n);
}
function la(r) {
  return ["html", "body", "#document"].indexOf(st(r)) >= 0 ? r.ownerDocument.body : Ge(r) && Ri(r) ? r : la(xr(r));
}
function Nn(r, t) {
  var e;
  t === void 0 && (t = []);
  var n = la(r), i = n === ((e = r.ownerDocument) == null ? void 0 : e.body), a = Ve(n), o = i ? [a].concat(a.visualViewport || [], Ri(n) ? n : []) : n, s = t.concat(o);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Nn(xr(o)))
  );
}
function mi(r) {
  return Object.assign({}, r, {
    left: r.x,
    top: r.y,
    right: r.x + r.width,
    bottom: r.y + r.height
  });
}
function Qs(r, t) {
  var e = pn(r, !1, t === "fixed");
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
function Zi(r, t, e) {
  return t === Ai ? mi(Xs(r, e)) : Yt(t) ? Qs(t, e) : mi(qs(Mt(r)));
}
function Js(r) {
  var t = Nn(xr(r)), e = ["absolute", "fixed"].indexOf(mt(r).position) >= 0, n = e && Ge(r) ? Hn(r) : r;
  return Yt(n) ? t.filter(function(i) {
    return Yt(i) && ra(i, n) && st(i) !== "body";
  }) : [];
}
function Zs(r, t, e, n) {
  var i = t === "clippingParents" ? Js(r) : [].concat(t), a = [].concat(i, [e]), o = a[0], s = a.reduce(function(l, u) {
    var d = Zi(r, u, n);
    return l.top = Ht(d.top, l.top), l.right = _r(d.right, l.right), l.bottom = _r(d.bottom, l.bottom), l.left = Ht(d.left, l.left), l;
  }, Zi(r, o, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ca(r) {
  var t = r.reference, e = r.element, n = r.placement, i = n ? ot(n) : null, a = n ? gn(n) : null, o = t.x + t.width / 2 - e.width / 2, s = t.y + t.height / 2 - e.height / 2, l;
  switch (i) {
    case Oe:
      l = {
        x: o,
        y: t.y - e.height
      };
      break;
    case Ye:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case We:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Ne:
      l = {
        x: t.x - e.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? ki(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Ft:
        l[u] = l[u] - (t[d] / 2 - e[d] / 2);
        break;
      case fn:
        l[u] = l[u] + (t[d] / 2 - e[d] / 2);
        break;
    }
  }
  return l;
}
function mn(r, t) {
  t === void 0 && (t = {});
  var e = t, n = e.placement, i = n === void 0 ? r.placement : n, a = e.strategy, o = a === void 0 ? r.strategy : a, s = e.boundary, l = s === void 0 ? jo : s, u = e.rootBoundary, d = u === void 0 ? Ai : u, p = e.elementContext, m = p === void 0 ? nn : p, E = e.altBoundary, b = E === void 0 ? !1 : E, g = e.padding, y = g === void 0 ? 0 : g, M = oa(typeof y != "number" ? y : aa(y, _n)), I = m === nn ? zo : nn, $ = r.rects.popper, F = r.elements[b ? I : m], R = Zs(Yt(F) ? F : F.contextElement || Mt(r.elements.popper), l, d, o), N = pn(r.elements.reference), x = ca({
    reference: N,
    element: $,
    strategy: "absolute",
    placement: i
  }), D = mi(Object.assign({}, $, x)), Y = m === nn ? D : N, W = {
    top: R.top - Y.top + M.top,
    bottom: Y.bottom - R.bottom + M.bottom,
    left: R.left - Y.left + M.left,
    right: Y.right - R.right + M.right
  }, B = r.modifiersData.offset;
  if (m === nn && B) {
    var J = B[i];
    Object.keys(W).forEach(function(U) {
      var H = [We, Ye].indexOf(U) >= 0 ? 1 : -1, k = [Oe, Ye].indexOf(U) >= 0 ? "y" : "x";
      W[U] += J[k] * H;
    });
  }
  return W;
}
function el(r, t) {
  t === void 0 && (t = {});
  var e = t, n = e.placement, i = e.boundary, a = e.rootBoundary, o = e.padding, s = e.flipVariations, l = e.allowedAutoPlacements, u = l === void 0 ? Mi : l, d = gn(n), p = d ? s ? pi : pi.filter(function(b) {
    return gn(b) === d;
  }) : _n, m = p.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  m.length === 0 && (m = p);
  var E = m.reduce(function(b, g) {
    return b[g] = mn(r, {
      placement: g,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[ot(g)], b;
  }, {});
  return Object.keys(E).sort(function(b, g) {
    return E[b] - E[g];
  });
}
function tl(r) {
  if (ot(r) === Mr)
    return [];
  var t = dr(r);
  return [Ji(r), t, Ji(t)];
}
function nl(r) {
  var t = r.state, e = r.options, n = r.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = e.mainAxis, a = i === void 0 ? !0 : i, o = e.altAxis, s = o === void 0 ? !0 : o, l = e.fallbackPlacements, u = e.padding, d = e.boundary, p = e.rootBoundary, m = e.altBoundary, E = e.flipVariations, b = E === void 0 ? !0 : E, g = e.allowedAutoPlacements, y = t.options.placement, M = ot(y), I = M === y, $ = l || (I || !b ? [dr(y)] : tl(y)), F = [y].concat($).reduce(function(L, z) {
      return L.concat(ot(z) === Mr ? el(t, {
        placement: z,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: g
      }) : z);
    }, []), R = t.rects.reference, N = t.rects.popper, x = /* @__PURE__ */ new Map(), D = !0, Y = F[0], W = 0; W < F.length; W++) {
      var B = F[W], J = ot(B), U = gn(B) === Ft, H = [Oe, Ye].indexOf(J) >= 0, k = H ? "width" : "height", A = mn(t, {
        placement: B,
        boundary: d,
        rootBoundary: p,
        altBoundary: m,
        padding: u
      }), c = H ? U ? We : Ne : U ? Ye : Oe;
      R[k] > N[k] && (c = dr(c));
      var v = dr(c), w = [];
      if (a && w.push(A[J] <= 0), s && w.push(A[c] <= 0, A[v] <= 0), w.every(function(L) {
        return L;
      })) {
        Y = B, D = !1;
        break;
      }
      x.set(B, w);
    }
    if (D)
      for (var S = b ? 3 : 1, j = function(z) {
        var X = F.find(function(Z) {
          var ae = x.get(Z);
          if (ae)
            return ae.slice(0, z).every(function(de) {
              return de;
            });
        });
        if (X)
          return Y = X, "break";
      }, T = S; T > 0; T--) {
        var O = j(T);
        if (O === "break")
          break;
      }
    t.placement !== Y && (t.modifiersData[n]._skip = !0, t.placement = Y, t.reset = !0);
  }
}
const ua = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: nl,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function eo(r, t, e) {
  return e === void 0 && (e = {
    x: 0,
    y: 0
  }), {
    top: r.top - t.height - e.y,
    right: r.right - t.width + e.x,
    bottom: r.bottom - t.height + e.y,
    left: r.left - t.width - e.x
  };
}
function to(r) {
  return [Oe, We, Ye, Ne].some(function(t) {
    return r[t] >= 0;
  });
}
function rl(r) {
  var t = r.state, e = r.name, n = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = mn(t, {
    elementContext: "reference"
  }), s = mn(t, {
    altBoundary: !0
  }), l = eo(o, n), u = eo(s, i, a), d = to(l), p = to(u);
  t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": p
  });
}
const da = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: rl
};
function il(r, t, e) {
  var n = ot(r), i = [Ne, Oe].indexOf(n) >= 0 ? -1 : 1, a = typeof e == "function" ? e(Object.assign({}, t, {
    placement: r
  })) : e, o = a[0], s = a[1];
  return o = o || 0, s = (s || 0) * i, [Ne, We].indexOf(n) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function ol(r) {
  var t = r.state, e = r.options, n = r.name, i = e.offset, a = i === void 0 ? [0, 0] : i, o = Mi.reduce(function(d, p) {
    return d[p] = il(p, t.rects, a), d;
  }, {}), s = o[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = o;
}
const fa = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ol
};
function al(r) {
  var t = r.state, e = r.name;
  t.modifiersData[e] = ca({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Bi = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: al,
  data: {}
};
function sl(r) {
  return r === "x" ? "y" : "x";
}
function ll(r) {
  var t = r.state, e = r.options, n = r.name, i = e.mainAxis, a = i === void 0 ? !0 : i, o = e.altAxis, s = o === void 0 ? !1 : o, l = e.boundary, u = e.rootBoundary, d = e.altBoundary, p = e.padding, m = e.tether, E = m === void 0 ? !0 : m, b = e.tetherOffset, g = b === void 0 ? 0 : b, y = mn(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), M = ot(t.placement), I = gn(t.placement), $ = !I, F = ki(M), R = sl(F), N = t.modifiersData.popperOffsets, x = t.rects.reference, D = t.rects.popper, Y = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, W = typeof Y == "number" ? {
    mainAxis: Y,
    altAxis: Y
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Y), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = {
    x: 0,
    y: 0
  };
  if (N) {
    if (a) {
      var U, H = F === "y" ? Oe : Ne, k = F === "y" ? Ye : We, A = F === "y" ? "height" : "width", c = N[F], v = c + y[H], w = c - y[k], S = E ? -D[A] / 2 : 0, j = I === Ft ? x[A] : D[A], T = I === Ft ? -D[A] : -x[A], O = t.elements.arrow, L = E && O ? Ni(O) : {
        width: 0,
        height: 0
      }, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ia(), X = z[H], Z = z[k], ae = On(0, x[A], L[A]), de = $ ? x[A] / 2 - S - ae - X - W.mainAxis : j - ae - X - W.mainAxis, pe = $ ? -x[A] / 2 + S + ae + Z + W.mainAxis : T + ae + Z + W.mainAxis, ge = t.elements.arrow && Hn(t.elements.arrow), fe = ge ? F === "y" ? ge.clientTop || 0 : ge.clientLeft || 0 : 0, Ae = (U = B == null ? void 0 : B[F]) != null ? U : 0, qe = c + de - Ae - fe, De = c + pe - Ae, tt = On(E ? _r(v, qe) : v, c, E ? Ht(w, De) : w);
      N[F] = tt, J[F] = tt - c;
    }
    if (s) {
      var dt, Et = F === "x" ? Oe : Ne, nt = F === "x" ? Ye : We, rt = N[R], Ut = R === "y" ? "height" : "width", wn = rt + y[Et], Xt = rt - y[nt], qt = [Oe, Ne].indexOf(M) !== -1, kt = (dt = B == null ? void 0 : B[R]) != null ? dt : 0, Xn = qt ? wn : rt - x[Ut] - D[Ut] - kt + W.altAxis, Cn = qt ? rt + x[Ut] + D[Ut] - kt - W.altAxis : Xt, qn = E && qt ? Hs(Xn, rt, Cn) : On(E ? Xn : wn, rt, E ? Cn : Xt);
      N[R] = qn, J[R] = qn - rt;
    }
    t.modifiersData[n] = J;
  }
}
const ha = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ll,
  requiresIfExists: ["offset"]
};
function cl(r) {
  return {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  };
}
function ul(r) {
  return r === Ve(r) || !Ge(r) ? Li(r) : cl(r);
}
function dl(r) {
  var t = r.getBoundingClientRect(), e = hn(t.width) / r.offsetWidth || 1, n = hn(t.height) / r.offsetHeight || 1;
  return e !== 1 || n !== 1;
}
function fl(r, t, e) {
  e === void 0 && (e = !1);
  var n = Ge(t), i = Ge(t) && dl(t), a = Mt(t), o = pn(r, i, e), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !e) && ((st(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ri(a)) && (s = ul(t)), Ge(t) ? (l = pn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = $i(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function hl(r) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), n = [];
  r.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    e.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(s) {
      if (!e.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }), n.push(a);
  }
  return r.forEach(function(a) {
    e.has(a.name) || i(a);
  }), n;
}
function pl(r) {
  var t = hl(r);
  return ta.reduce(function(e, n) {
    return e.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function gl(r) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(r());
      });
    })), t;
  };
}
function ml(r) {
  var t = r.reduce(function(e, n) {
    var i = e[n.name];
    return e[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
var no = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ro() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Or(r) {
  r === void 0 && (r = {});
  var t = r, e = t.defaultModifiers, n = e === void 0 ? [] : e, i = t.defaultOptions, a = i === void 0 ? no : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, no, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], m = !1, E = {
      state: d,
      setOptions: function(M) {
        var I = typeof M == "function" ? M(d.options) : M;
        g(), d.options = Object.assign({}, a, d.options, I), d.scrollParents = {
          reference: Yt(s) ? Nn(s) : s.contextElement ? Nn(s.contextElement) : [],
          popper: Nn(l)
        };
        var $ = pl(ml([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = $.filter(function(F) {
          return F.enabled;
        }), b(), E.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var M = d.elements, I = M.reference, $ = M.popper;
          if (ro(I, $)) {
            d.rects = {
              reference: fl(I, Hn($), d.options.strategy === "fixed"),
              popper: Ni($)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(W) {
              return d.modifiersData[W.name] = Object.assign({}, W.data);
            });
            for (var F = 0; F < d.orderedModifiers.length; F++) {
              if (d.reset === !0) {
                d.reset = !1, F = -1;
                continue;
              }
              var R = d.orderedModifiers[F], N = R.fn, x = R.options, D = x === void 0 ? {} : x, Y = R.name;
              typeof N == "function" && (d = N({
                state: d,
                options: D,
                name: Y,
                instance: E
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: gl(function() {
        return new Promise(function(y) {
          E.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        g(), m = !0;
      }
    };
    if (!ro(s, l))
      return E;
    E.setOptions(u).then(function(y) {
      !m && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function b() {
      d.orderedModifiers.forEach(function(y) {
        var M = y.name, I = y.options, $ = I === void 0 ? {} : I, F = y.effect;
        if (typeof F == "function") {
          var R = F({
            state: d,
            name: M,
            instance: E,
            options: $
          }), N = function() {
          };
          p.push(R || N);
        }
      });
    }
    function g() {
      p.forEach(function(y) {
        return y();
      }), p = [];
    }
    return E;
  };
}
var vl = /* @__PURE__ */ Or(), _l = [Ii, Bi, Pi, Oi], bl = /* @__PURE__ */ Or({
  defaultModifiers: _l
}), yl = [Ii, Bi, Pi, Oi, fa, ua, ha, sa, da], Hi = /* @__PURE__ */ Or({
  defaultModifiers: yl
});
const pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: Qo,
  afterRead: Uo,
  afterWrite: ea,
  applyStyles: Oi,
  arrow: sa,
  auto: Mr,
  basePlacements: _n,
  beforeMain: Xo,
  beforeRead: Go,
  beforeWrite: Jo,
  bottom: Ye,
  clippingParents: jo,
  computeStyles: Pi,
  createPopper: Hi,
  createPopperBase: vl,
  createPopperLite: bl,
  detectOverflow: mn,
  end: fn,
  eventListeners: Ii,
  flip: ua,
  hide: da,
  left: Ne,
  main: qo,
  modifierPhases: ta,
  offset: fa,
  placements: Mi,
  popper: nn,
  popperGenerator: Or,
  popperOffsets: Bi,
  preventOverflow: ha,
  read: Ko,
  reference: zo,
  right: We,
  start: Ft,
  top: Oe,
  variationPlacements: pi,
  viewport: Ai,
  write: Zo
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const wt = /* @__PURE__ */ new Map(), Br = {
  set(r, t, e) {
    wt.has(r) || wt.set(r, /* @__PURE__ */ new Map());
    const n = wt.get(r);
    if (!n.has(t) && n.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
      return;
    }
    n.set(t, e);
  },
  get(r, t) {
    return wt.has(r) && wt.get(r).get(t) || null;
  },
  remove(r, t) {
    if (!wt.has(r))
      return;
    const e = wt.get(r);
    e.delete(t), e.size === 0 && wt.delete(r);
  }
}, El = 1e6, wl = 1e3, vi = "transitionend", ga = (r) => (r && window.CSS && window.CSS.escape && (r = r.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)), r), Cl = (r) => r == null ? `${r}` : Object.prototype.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase(), Dl = (r) => {
  do
    r += Math.floor(Math.random() * El);
  while (document.getElementById(r));
  return r;
}, Sl = (r) => {
  if (!r)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: e
  } = window.getComputedStyle(r);
  const n = Number.parseFloat(t), i = Number.parseFloat(e);
  return !n && !i ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * wl);
}, ma = (r) => {
  r.dispatchEvent(new Event(vi));
}, ht = (r) => !r || typeof r != "object" ? !1 : (typeof r.jquery < "u" && (r = r[0]), typeof r.nodeType < "u"), Tt = (r) => ht(r) ? r.jquery ? r[0] : r : typeof r == "string" && r.length > 0 ? document.querySelector(ga(r)) : null, bn = (r) => {
  if (!ht(r) || r.getClientRects().length === 0)
    return !1;
  const t = getComputedStyle(r).getPropertyValue("visibility") === "visible", e = r.closest("details:not([open])");
  if (!e)
    return t;
  if (e !== r) {
    const n = r.closest("summary");
    if (n && n.parentNode !== e || n === null)
      return !1;
  }
  return t;
}, At = (r) => !r || r.nodeType !== Node.ELEMENT_NODE || r.classList.contains("disabled") ? !0 : typeof r.disabled < "u" ? r.disabled : r.hasAttribute("disabled") && r.getAttribute("disabled") !== "false", va = (r) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof r.getRootNode == "function") {
    const t = r.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return r instanceof ShadowRoot ? r : r.parentNode ? va(r.parentNode) : null;
}, br = () => {
}, Fn = (r) => {
  r.offsetHeight;
}, _a = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Hr = [], Tl = (r) => {
  document.readyState === "loading" ? (Hr.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of Hr)
      t();
  }), Hr.push(r)) : r();
}, Ke = () => document.documentElement.dir === "rtl", Xe = (r) => {
  Tl(() => {
    const t = _a();
    if (t) {
      const e = r.NAME, n = t.fn[e];
      t.fn[e] = r.jQueryInterface, t.fn[e].Constructor = r, t.fn[e].noConflict = () => (t.fn[e] = n, r.jQueryInterface);
    }
  });
}, Ie = (r, t = [], e = r) => typeof r == "function" ? r(...t) : e, ba = (r, t, e = !0) => {
  if (!e) {
    Ie(r);
    return;
  }
  const n = 5, i = Sl(t) + n;
  let a = !1;
  const o = ({
    target: s
  }) => {
    s === t && (a = !0, t.removeEventListener(vi, o), Ie(r));
  };
  t.addEventListener(vi, o), setTimeout(() => {
    a || ma(t);
  }, i);
}, Fi = (r, t, e, n) => {
  const i = r.length;
  let a = r.indexOf(t);
  return a === -1 ? !e && n ? r[i - 1] : r[0] : (a += e ? 1 : -1, n && (a = (a + i) % i), r[Math.max(0, Math.min(a, i - 1))]);
}, Al = /[^.]*(?=\..*)\.|.*/, Ml = /\..*/, xl = /::\d+$/, Fr = {};
let io = 1;
const ya = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Ol = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Ea(r, t) {
  return t && `${t}::${io++}` || r.uidEvent || io++;
}
function wa(r) {
  const t = Ea(r);
  return r.uidEvent = t, Fr[t] = Fr[t] || {}, Fr[t];
}
function Nl(r, t) {
  return function e(n) {
    return Yi(n, {
      delegateTarget: r
    }), e.oneOff && P.off(r, n.type, t), t.apply(r, [n]);
  };
}
function kl(r, t, e) {
  return function n(i) {
    const a = r.querySelectorAll(t);
    for (let {
      target: o
    } = i; o && o !== this; o = o.parentNode)
      for (const s of a)
        if (s === o)
          return Yi(i, {
            delegateTarget: o
          }), n.oneOff && P.off(r, i.type, t, e), e.apply(o, [i]);
  };
}
function Ca(r, t, e = null) {
  return Object.values(r).find((n) => n.callable === t && n.delegationSelector === e);
}
function Da(r, t, e) {
  const n = typeof t == "string", i = n ? e : t || e;
  let a = Sa(r);
  return Ol.has(a) || (a = r), [n, i, a];
}
function oo(r, t, e, n, i) {
  if (typeof t != "string" || !r)
    return;
  let [a, o, s] = Da(t, e, n);
  t in ya && (o = ((b) => function(g) {
    if (!g.relatedTarget || g.relatedTarget !== g.delegateTarget && !g.delegateTarget.contains(g.relatedTarget))
      return b.call(this, g);
  })(o));
  const l = wa(r), u = l[s] || (l[s] = {}), d = Ca(u, o, a ? e : null);
  if (d) {
    d.oneOff = d.oneOff && i;
    return;
  }
  const p = Ea(o, t.replace(Al, "")), m = a ? kl(r, e, o) : Nl(r, o);
  m.delegationSelector = a ? e : null, m.callable = o, m.oneOff = i, m.uidEvent = p, u[p] = m, r.addEventListener(s, m, a);
}
function _i(r, t, e, n, i) {
  const a = Ca(t[e], n, i);
  a && (r.removeEventListener(e, a, !!i), delete t[e][a.uidEvent]);
}
function Pl(r, t, e, n) {
  const i = t[e] || {};
  for (const [a, o] of Object.entries(i))
    a.includes(n) && _i(r, t, e, o.callable, o.delegationSelector);
}
function Sa(r) {
  return r = r.replace(Ml, ""), ya[r] || r;
}
const P = {
  on(r, t, e, n) {
    oo(r, t, e, n, !1);
  },
  one(r, t, e, n) {
    oo(r, t, e, n, !0);
  },
  off(r, t, e, n) {
    if (typeof t != "string" || !r)
      return;
    const [i, a, o] = Da(t, e, n), s = o !== t, l = wa(r), u = l[o] || {}, d = t.startsWith(".");
    if (typeof a < "u") {
      if (!Object.keys(u).length)
        return;
      _i(r, l, o, a, i ? e : null);
      return;
    }
    if (d)
      for (const p of Object.keys(l))
        Pl(r, l, p, t.slice(1));
    for (const [p, m] of Object.entries(u)) {
      const E = p.replace(xl, "");
      (!s || t.includes(E)) && _i(r, l, o, m.callable, m.delegationSelector);
    }
  },
  trigger(r, t, e) {
    if (typeof t != "string" || !r)
      return null;
    const n = _a(), i = Sa(t), a = t !== i;
    let o = null, s = !0, l = !0, u = !1;
    a && n && (o = n.Event(t, e), n(r).trigger(o), s = !o.isPropagationStopped(), l = !o.isImmediatePropagationStopped(), u = o.isDefaultPrevented());
    const d = Yi(new Event(t, {
      bubbles: s,
      cancelable: !0
    }), e);
    return u && d.preventDefault(), l && r.dispatchEvent(d), d.defaultPrevented && o && o.preventDefault(), d;
  }
};
function Yi(r, t = {}) {
  for (const [e, n] of Object.entries(t))
    try {
      r[e] = n;
    } catch {
      Object.defineProperty(r, e, {
        configurable: !0,
        get() {
          return n;
        }
      });
    }
  return r;
}
function ao(r) {
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
  if (r === Number(r).toString())
    return Number(r);
  if (r === "" || r === "null")
    return null;
  if (typeof r != "string")
    return r;
  try {
    return JSON.parse(decodeURIComponent(r));
  } catch {
    return r;
  }
}
function Yr(r) {
  return r.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const pt = {
  setDataAttribute(r, t, e) {
    r.setAttribute(`data-bs-${Yr(t)}`, e);
  },
  removeDataAttribute(r, t) {
    r.removeAttribute(`data-bs-${Yr(t)}`);
  },
  getDataAttributes(r) {
    if (!r)
      return {};
    const t = {}, e = Object.keys(r.dataset).filter((n) => n.startsWith("bs") && !n.startsWith("bsConfig"));
    for (const n of e) {
      let i = n.replace(/^bs/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = ao(r.dataset[n]);
    }
    return t;
  },
  getDataAttribute(r, t) {
    return ao(r.getAttribute(`data-bs-${Yr(t)}`));
  }
};
class Yn {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, e) {
    const n = ht(e) ? pt.getDataAttribute(e, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof n == "object" ? n : {},
      ...ht(e) ? pt.getDataAttributes(e) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, e = this.constructor.DefaultType) {
    for (const [n, i] of Object.entries(e)) {
      const a = t[n], o = ht(a) ? "element" : Cl(a);
      if (!new RegExp(i).test(o))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`);
    }
  }
}
const Il = "5.3.2";
class et extends Yn {
  constructor(t, e) {
    super(), t = Tt(t), t && (this._element = t, this._config = this._getConfig(e), Br.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    Br.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  _queueCallback(t, e, n = !0) {
    ba(t, e, n);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return Br.get(Tt(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return Il;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const Wr = (r) => {
  let t = r.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let e = r.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? ga(e.trim()) : null;
  }
  return t;
}, ee = {
  find(r, t = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(t, r));
  },
  findOne(r, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, r);
  },
  children(r, t) {
    return [].concat(...r.children).filter((e) => e.matches(t));
  },
  parents(r, t) {
    const e = [];
    let n = r.parentNode.closest(t);
    for (; n; )
      e.push(n), n = n.parentNode.closest(t);
    return e;
  },
  prev(r, t) {
    let e = r.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(r, t) {
    let e = r.nextElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(r) {
    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(",");
    return this.find(t, r).filter((e) => !At(e) && bn(e));
  },
  getSelectorFromElement(r) {
    const t = Wr(r);
    return t && ee.findOne(t) ? t : null;
  },
  getElementFromSelector(r) {
    const t = Wr(r);
    return t ? ee.findOne(t) : null;
  },
  getMultipleElementsFromSelector(r) {
    const t = Wr(r);
    return t ? ee.find(t) : [];
  }
}, Nr = (r, t = "hide") => {
  const e = `click.dismiss${r.EVENT_KEY}`, n = r.NAME;
  P.on(document, e, `[data-bs-dismiss="${n}"]`, function(i) {
    if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), At(this))
      return;
    const a = ee.getElementFromSelector(this) || this.closest(`.${n}`);
    r.getOrCreateInstance(a)[t]();
  });
}, Ll = "alert", $l = "bs.alert", Ta = `.${$l}`, Rl = `close${Ta}`, Bl = `closed${Ta}`, Hl = "fade", Fl = "show";
class Wn extends et {
  // Getters
  static get NAME() {
    return Ll;
  }
  // Public
  close() {
    if (P.trigger(this._element, Rl).defaultPrevented)
      return;
    this._element.classList.remove(Fl);
    const e = this._element.classList.contains(Hl);
    this._queueCallback(() => this._destroyElement(), this._element, e);
  }
  // Private
  _destroyElement() {
    this._element.remove(), P.trigger(this._element, Bl), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Wn.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
Nr(Wn, "close");
Xe(Wn);
const Yl = "button", Wl = "bs.button", Vl = `.${Wl}`, jl = ".data-api", zl = "active", so = '[data-bs-toggle="button"]', Gl = `click${Vl}${jl}`;
class Vn extends et {
  // Getters
  static get NAME() {
    return Yl;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(zl));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Vn.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
}
P.on(document, Gl, so, (r) => {
  r.preventDefault();
  const t = r.target.closest(so);
  Vn.getOrCreateInstance(t).toggle();
});
Xe(Vn);
const Kl = "swipe", yn = ".bs.swipe", Ul = `touchstart${yn}`, Xl = `touchmove${yn}`, ql = `touchend${yn}`, Ql = `pointerdown${yn}`, Jl = `pointerup${yn}`, Zl = "touch", ec = "pen", tc = "pointer-event", nc = 40, rc = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, ic = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class yr extends Yn {
  constructor(t, e) {
    super(), this._element = t, !(!t || !yr.isSupported()) && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return rc;
  }
  static get DefaultType() {
    return ic;
  }
  static get NAME() {
    return Kl;
  }
  // Public
  dispose() {
    P.off(this._element, yn);
  }
  // Private
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), Ie(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= nc)
      return;
    const e = t / this._deltaX;
    this._deltaX = 0, e && Ie(e > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (P.on(this._element, Ql, (t) => this._start(t)), P.on(this._element, Jl, (t) => this._end(t)), this._element.classList.add(tc)) : (P.on(this._element, Ul, (t) => this._start(t)), P.on(this._element, Xl, (t) => this._move(t)), P.on(this._element, ql, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === ec || t.pointerType === Zl);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const oc = "carousel", ac = "bs.carousel", xt = `.${ac}`, Aa = ".data-api", sc = "ArrowLeft", lc = "ArrowRight", cc = 500, Sn = "next", Jt = "prev", rn = "left", fr = "right", uc = `slide${xt}`, Vr = `slid${xt}`, dc = `keydown${xt}`, fc = `mouseenter${xt}`, hc = `mouseleave${xt}`, pc = `dragstart${xt}`, gc = `load${xt}${Aa}`, mc = `click${xt}${Aa}`, Ma = "carousel", Zn = "active", vc = "slide", _c = "carousel-item-end", bc = "carousel-item-start", yc = "carousel-item-next", Ec = "carousel-item-prev", xa = ".active", Oa = ".carousel-item", wc = xa + Oa, Cc = ".carousel-item img", Dc = ".carousel-indicators", Sc = "[data-bs-slide], [data-bs-slide-to]", Tc = '[data-bs-ride="carousel"]', Ac = {
  [sc]: fr,
  [lc]: rn
}, Mc = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, xc = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class En extends et {
  constructor(t, e) {
    super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ee.findOne(Dc, this._element), this._addEventListeners(), this._config.ride === Ma && this.cycle();
  }
  // Getters
  static get Default() {
    return Mc;
  }
  static get DefaultType() {
    return xc;
  }
  static get NAME() {
    return oc;
  }
  // Public
  next() {
    this._slide(Sn);
  }
  nextWhenVisible() {
    !document.hidden && bn(this._element) && this.next();
  }
  prev() {
    this._slide(Jt);
  }
  pause() {
    this._isSliding && ma(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        P.one(this._element, Vr, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const e = this._getItems();
    if (t > e.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      P.one(this._element, Vr, () => this.to(t));
      return;
    }
    const n = this._getItemIndex(this._getActive());
    if (n === t)
      return;
    const i = t > n ? Sn : Jt;
    this._slide(i, e[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.defaultInterval = t.interval, t;
  }
  _addEventListeners() {
    this._config.keyboard && P.on(this._element, dc, (t) => this._keydown(t)), this._config.pause === "hover" && (P.on(this._element, fc, () => this.pause()), P.on(this._element, hc, () => this._maybeEnableCycle())), this._config.touch && yr.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const n of ee.find(Cc, this._element))
      P.on(n, pc, (i) => i.preventDefault());
    const e = {
      leftCallback: () => this._slide(this._directionToOrder(rn)),
      rightCallback: () => this._slide(this._directionToOrder(fr)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), cc + this._config.interval));
      }
    };
    this._swipeHelper = new yr(this._element, e);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = Ac[t.key];
    e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const e = ee.findOne(xa, this._indicatorsElement);
    e.classList.remove(Zn), e.removeAttribute("aria-current");
    const n = ee.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    n && (n.classList.add(Zn), n.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t)
      return;
    const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = e || this._config.defaultInterval;
  }
  _slide(t, e = null) {
    if (this._isSliding)
      return;
    const n = this._getActive(), i = t === Sn, a = e || Fi(this._getItems(), n, i, this._config.wrap);
    if (a === n)
      return;
    const o = this._getItemIndex(a), s = (E) => P.trigger(this._element, E, {
      relatedTarget: a,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(n),
      to: o
    });
    if (s(uc).defaultPrevented || !n || !a)
      return;
    const u = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = a;
    const d = i ? bc : _c, p = i ? yc : Ec;
    a.classList.add(p), Fn(a), n.classList.add(d), a.classList.add(d);
    const m = () => {
      a.classList.remove(d, p), a.classList.add(Zn), n.classList.remove(Zn, p, d), this._isSliding = !1, s(Vr);
    };
    this._queueCallback(m, n, this._isAnimated()), u && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(vc);
  }
  _getActive() {
    return ee.findOne(wc, this._element);
  }
  _getItems() {
    return ee.find(Oa, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Ke() ? t === rn ? Jt : Sn : t === rn ? Sn : Jt;
  }
  _orderToDirection(t) {
    return Ke() ? t === Jt ? rn : fr : t === Jt ? fr : rn;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = En.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        e.to(t);
        return;
      }
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
P.on(document, mc, Sc, function(r) {
  const t = ee.getElementFromSelector(this);
  if (!t || !t.classList.contains(Ma))
    return;
  r.preventDefault();
  const e = En.getOrCreateInstance(t), n = this.getAttribute("data-bs-slide-to");
  if (n) {
    e.to(n), e._maybeEnableCycle();
    return;
  }
  if (pt.getDataAttribute(this, "slide") === "next") {
    e.next(), e._maybeEnableCycle();
    return;
  }
  e.prev(), e._maybeEnableCycle();
});
P.on(window, gc, () => {
  const r = ee.find(Tc);
  for (const t of r)
    En.getOrCreateInstance(t);
});
Xe(En);
const Oc = "collapse", Nc = "bs.collapse", jn = `.${Nc}`, kc = ".data-api", Pc = `show${jn}`, Ic = `shown${jn}`, Lc = `hide${jn}`, $c = `hidden${jn}`, Rc = `click${jn}${kc}`, jr = "show", sn = "collapse", er = "collapsing", Bc = "collapsed", Hc = `:scope .${sn} .${sn}`, Fc = "collapse-horizontal", Yc = "width", Wc = "height", Vc = ".collapse.show, .collapse.collapsing", bi = '[data-bs-toggle="collapse"]', jc = {
  parent: null,
  toggle: !0
}, zc = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Wt extends et {
  constructor(t, e) {
    super(t, e), this._isTransitioning = !1, this._triggerArray = [];
    const n = ee.find(bi);
    for (const i of n) {
      const a = ee.getSelectorFromElement(i), o = ee.find(a).filter((s) => s === this._element);
      a !== null && o.length && this._triggerArray.push(i);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return jc;
  }
  static get DefaultType() {
    return zc;
  }
  static get NAME() {
    return Oc;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(Vc).filter((s) => s !== this._element).map((s) => Wt.getOrCreateInstance(s, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || P.trigger(this._element, Pc).defaultPrevented)
      return;
    for (const s of t)
      s.hide();
    const n = this._getDimension();
    this._element.classList.remove(sn), this._element.classList.add(er), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, this._element.classList.remove(er), this._element.classList.add(sn, jr), this._element.style[n] = "", P.trigger(this._element, Ic);
    }, o = `scroll${n[0].toUpperCase() + n.slice(1)}`;
    this._queueCallback(i, this._element, !0), this._element.style[n] = `${this._element[o]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || P.trigger(this._element, Lc).defaultPrevented)
      return;
    const e = this._getDimension();
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Fn(this._element), this._element.classList.add(er), this._element.classList.remove(sn, jr);
    for (const i of this._triggerArray) {
      const a = ee.getElementFromSelector(i);
      a && !this._isShown(a) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const n = () => {
      this._isTransitioning = !1, this._element.classList.remove(er), this._element.classList.add(sn), P.trigger(this._element, $c);
    };
    this._element.style[e] = "", this._queueCallback(n, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(jr);
  }
  // Private
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = Tt(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(Fc) ? Yc : Wc;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(bi);
    for (const e of t) {
      const n = ee.getElementFromSelector(e);
      n && this._addAriaAndCollapsedClass([e], this._isShown(n));
    }
  }
  _getFirstLevelChildren(t) {
    const e = ee.find(Hc, this._config.parent);
    return ee.find(t, this._config.parent).filter((n) => !e.includes(n));
  }
  _addAriaAndCollapsedClass(t, e) {
    if (t.length)
      for (const n of t)
        n.classList.toggle(Bc, !e), n.setAttribute("aria-expanded", e);
  }
  // Static
  static jQueryInterface(t) {
    const e = {};
    return typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
      const n = Wt.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
P.on(document, Rc, bi, function(r) {
  (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
  for (const t of ee.getMultipleElementsFromSelector(this))
    Wt.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Xe(Wt);
const lo = "dropdown", Gc = "bs.dropdown", zt = `.${Gc}`, Wi = ".data-api", Kc = "Escape", co = "Tab", Uc = "ArrowUp", uo = "ArrowDown", Xc = 2, qc = `hide${zt}`, Qc = `hidden${zt}`, Jc = `show${zt}`, Zc = `shown${zt}`, Na = `click${zt}${Wi}`, ka = `keydown${zt}${Wi}`, eu = `keyup${zt}${Wi}`, on = "show", tu = "dropup", nu = "dropend", ru = "dropstart", iu = "dropup-center", ou = "dropdown-center", Rt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', au = `${Rt}.${on}`, hr = ".dropdown-menu", su = ".navbar", lu = ".navbar-nav", cu = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", uu = Ke() ? "top-end" : "top-start", du = Ke() ? "top-start" : "top-end", fu = Ke() ? "bottom-end" : "bottom-start", hu = Ke() ? "bottom-start" : "bottom-end", pu = Ke() ? "left-start" : "right-start", gu = Ke() ? "right-start" : "left-start", mu = "top", vu = "bottom", _u = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, bu = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Ze extends et {
  constructor(t, e) {
    super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = ee.next(this._element, hr)[0] || ee.prev(this._element, hr)[0] || ee.findOne(hr, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return _u;
  }
  static get DefaultType() {
    return bu;
  }
  static get NAME() {
    return lo;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (At(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!P.trigger(this._element, Jc, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(lu))
        for (const n of [].concat(...document.body.children))
          P.on(n, "mouseover", br);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(on), this._element.classList.add(on), P.trigger(this._element, Zc, t);
    }
  }
  hide() {
    if (At(this._element) || !this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _completeHide(t) {
    if (!P.trigger(this._element, qc, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const n of [].concat(...document.body.children))
          P.off(n, "mouseover", br);
      this._popper && this._popper.destroy(), this._menu.classList.remove(on), this._element.classList.remove(on), this._element.setAttribute("aria-expanded", "false"), pt.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, Qc, t);
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !ht(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${lo.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof pa > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : ht(this._config.reference) ? t = Tt(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const e = this._getPopperConfig();
    this._popper = Hi(t, this._menu, e);
  }
  _isShown() {
    return this._menu.classList.contains(on);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(nu))
      return pu;
    if (t.classList.contains(ru))
      return gu;
    if (t.classList.contains(iu))
      return mu;
    if (t.classList.contains(ou))
      return vu;
    const e = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(tu) ? e ? du : uu : e ? hu : fu;
  }
  _detectNavbar() {
    return this._element.closest(su) !== null;
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    return (this._inNavbar || this._config.display === "static") && (pt.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...Ie(this._config.popperConfig, [t])
    };
  }
  _selectMenuItem({
    key: t,
    target: e
  }) {
    const n = ee.find(cu, this._menu).filter((i) => bn(i));
    n.length && Fi(n, e, t === uo, !n.includes(e)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Ze.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === Xc || t.type === "keyup" && t.key !== co)
      return;
    const e = ee.find(au);
    for (const n of e) {
      const i = Ze.getInstance(n);
      if (!i || i._config.autoClose === !1)
        continue;
      const a = t.composedPath(), o = a.includes(i._menu);
      if (a.includes(i._element) || i._config.autoClose === "inside" && !o || i._config.autoClose === "outside" && o || i._menu.contains(t.target) && (t.type === "keyup" && t.key === co || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const s = {
        relatedTarget: i._element
      };
      t.type === "click" && (s.clickEvent = t), i._completeHide(s);
    }
  }
  static dataApiKeydownHandler(t) {
    const e = /input|textarea/i.test(t.target.tagName), n = t.key === Kc, i = [Uc, uo].includes(t.key);
    if (!i && !n || e && !n)
      return;
    t.preventDefault();
    const a = this.matches(Rt) ? this : ee.prev(this, Rt)[0] || ee.next(this, Rt)[0] || ee.findOne(Rt, t.delegateTarget.parentNode), o = Ze.getOrCreateInstance(a);
    if (i) {
      t.stopPropagation(), o.show(), o._selectMenuItem(t);
      return;
    }
    o._isShown() && (t.stopPropagation(), o.hide(), a.focus());
  }
}
P.on(document, ka, Rt, Ze.dataApiKeydownHandler);
P.on(document, ka, hr, Ze.dataApiKeydownHandler);
P.on(document, Na, Ze.clearMenus);
P.on(document, eu, Ze.clearMenus);
P.on(document, Na, Rt, function(r) {
  r.preventDefault(), Ze.getOrCreateInstance(this).toggle();
});
Xe(Ze);
const Pa = "backdrop", yu = "fade", fo = "show", ho = `mousedown.bs.${Pa}`, Eu = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, wu = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Ia extends Yn {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return Eu;
  }
  static get DefaultType() {
    return wu;
  }
  static get NAME() {
    return Pa;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      Ie(t);
      return;
    }
    this._append();
    const e = this._getElement();
    this._config.isAnimated && Fn(e), e.classList.add(fo), this._emulateAnimation(() => {
      Ie(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      Ie(t);
      return;
    }
    this._getElement().classList.remove(fo), this._emulateAnimation(() => {
      this.dispose(), Ie(t);
    });
  }
  dispose() {
    this._isAppended && (P.off(this._element, ho), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(yu), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = Tt(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), P.on(t, ho, () => {
      Ie(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    ba(t, this._getElement(), this._config.isAnimated);
  }
}
const Cu = "focustrap", Du = "bs.focustrap", Er = `.${Du}`, Su = `focusin${Er}`, Tu = `keydown.tab${Er}`, Au = "Tab", Mu = "forward", po = "backward", xu = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, Ou = {
  autofocus: "boolean",
  trapElement: "element"
};
class La extends Yn {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return xu;
  }
  static get DefaultType() {
    return Ou;
  }
  static get NAME() {
    return Cu;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, Er), P.on(document, Su, (t) => this._handleFocusin(t)), P.on(document, Tu, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, P.off(document, Er));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: e
    } = this._config;
    if (t.target === document || t.target === e || e.contains(t.target))
      return;
    const n = ee.focusableChildren(e);
    n.length === 0 ? e.focus() : this._lastTabNavDirection === po ? n[n.length - 1].focus() : n[0].focus();
  }
  _handleKeydown(t) {
    t.key === Au && (this._lastTabNavDirection = t.shiftKey ? po : Mu);
  }
}
const go = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", mo = ".sticky-top", tr = "padding-right", vo = "margin-right";
class yi {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, tr, (e) => e + t), this._setElementAttributes(go, tr, (e) => e + t), this._setElementAttributes(mo, vo, (e) => e - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, tr), this._resetElementAttributes(go, tr), this._resetElementAttributes(mo, vo);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, n) {
    const i = this.getWidth(), a = (o) => {
      if (o !== this._element && window.innerWidth > o.clientWidth + i)
        return;
      this._saveInitialAttribute(o, e);
      const s = window.getComputedStyle(o).getPropertyValue(e);
      o.style.setProperty(e, `${n(Number.parseFloat(s))}px`);
    };
    this._applyManipulationCallback(t, a);
  }
  _saveInitialAttribute(t, e) {
    const n = t.style.getPropertyValue(e);
    n && pt.setDataAttribute(t, e, n);
  }
  _resetElementAttributes(t, e) {
    const n = (i) => {
      const a = pt.getDataAttribute(i, e);
      if (a === null) {
        i.style.removeProperty(e);
        return;
      }
      pt.removeDataAttribute(i, e), i.style.setProperty(e, a);
    };
    this._applyManipulationCallback(t, n);
  }
  _applyManipulationCallback(t, e) {
    if (ht(t)) {
      e(t);
      return;
    }
    for (const n of ee.find(t, this._element))
      e(n);
  }
}
const Nu = "modal", ku = "bs.modal", Ue = `.${ku}`, Pu = ".data-api", Iu = "Escape", Lu = `hide${Ue}`, $u = `hidePrevented${Ue}`, $a = `hidden${Ue}`, Ra = `show${Ue}`, Ru = `shown${Ue}`, Bu = `resize${Ue}`, Hu = `click.dismiss${Ue}`, Fu = `mousedown.dismiss${Ue}`, Yu = `keydown.dismiss${Ue}`, Wu = `click${Ue}${Pu}`, _o = "modal-open", Vu = "fade", bo = "show", zr = "modal-static", ju = ".modal.show", zu = ".modal-dialog", Gu = ".modal-body", Ku = '[data-bs-toggle="modal"]', Uu = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, Xu = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Vt extends et {
  constructor(t, e) {
    super(t, e), this._dialog = ee.findOne(zu, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new yi(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Uu;
  }
  static get DefaultType() {
    return Xu;
  }
  static get NAME() {
    return Nu;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || P.trigger(this._element, Ra, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(_o), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || P.trigger(this._element, Lu).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(bo), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    P.off(window, Ue), P.off(this._dialog, Ue), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Ia({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new La({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const e = ee.findOne(Gu, this._dialog);
    e && (e.scrollTop = 0), Fn(this._element), this._element.classList.add(bo);
    const n = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, P.trigger(this._element, Ru, {
        relatedTarget: t
      });
    };
    this._queueCallback(n, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    P.on(this._element, Yu, (t) => {
      if (t.key === Iu) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), P.on(window, Bu, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), P.on(this._element, Fu, (t) => {
      P.one(this._element, Hu, (e) => {
        if (!(this._element !== t.target || this._element !== e.target)) {
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          this._config.backdrop && this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
      document.body.classList.remove(_o), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, $a);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(Vu);
  }
  _triggerBackdropTransition() {
    if (P.trigger(this._element, $u).defaultPrevented)
      return;
    const e = this._element.scrollHeight > document.documentElement.clientHeight, n = this._element.style.overflowY;
    n === "hidden" || this._element.classList.contains(zr) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(zr), this._queueCallback(() => {
      this._element.classList.remove(zr), this._queueCallback(() => {
        this._element.style.overflowY = n;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), n = e > 0;
    if (n && !t) {
      const i = Ke() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${e}px`;
    }
    if (!n && t) {
      const i = Ke() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${e}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const n = Vt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](e);
      }
    });
  }
}
P.on(document, Wu, Ku, function(r) {
  const t = ee.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && r.preventDefault(), P.one(t, Ra, (i) => {
    i.defaultPrevented || P.one(t, $a, () => {
      bn(this) && this.focus();
    });
  });
  const e = ee.findOne(ju);
  e && Vt.getInstance(e).hide(), Vt.getOrCreateInstance(t).toggle(this);
});
Nr(Vt);
Xe(Vt);
const qu = "offcanvas", Qu = "bs.offcanvas", bt = `.${Qu}`, Ba = ".data-api", Ju = `load${bt}${Ba}`, Zu = "Escape", yo = "show", Eo = "showing", wo = "hiding", ed = "offcanvas-backdrop", Ha = ".offcanvas.show", td = `show${bt}`, nd = `shown${bt}`, rd = `hide${bt}`, Co = `hidePrevented${bt}`, Fa = `hidden${bt}`, id = `resize${bt}`, od = `click${bt}${Ba}`, ad = `keydown.dismiss${bt}`, sd = '[data-bs-toggle="offcanvas"]', ld = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, cd = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class vt extends et {
  constructor(t, e) {
    super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return ld;
  }
  static get DefaultType() {
    return cd;
  }
  static get NAME() {
    return qu;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || P.trigger(this._element, td, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new yi().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Eo);
    const n = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(yo), this._element.classList.remove(Eo), P.trigger(this._element, nd, {
        relatedTarget: t
      });
    };
    this._queueCallback(n, this._element, !0);
  }
  hide() {
    if (!this._isShown || P.trigger(this._element, rd).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(wo), this._backdrop.hide();
    const e = () => {
      this._element.classList.remove(yo, wo), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new yi().reset(), P.trigger(this._element, Fa);
    };
    this._queueCallback(e, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const t = () => {
      if (this._config.backdrop === "static") {
        P.trigger(this._element, Co);
        return;
      }
      this.hide();
    }, e = !!this._config.backdrop;
    return new Ia({
      className: ed,
      isVisible: e,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: e ? t : null
    });
  }
  _initializeFocusTrap() {
    return new La({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    P.on(this._element, ad, (t) => {
      if (t.key === Zu) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        P.trigger(this._element, Co);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = vt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
P.on(document, od, sd, function(r) {
  const t = ee.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), At(this))
    return;
  P.one(t, Fa, () => {
    bn(this) && this.focus();
  });
  const e = ee.findOne(Ha);
  e && e !== t && vt.getInstance(e).hide(), vt.getOrCreateInstance(t).toggle(this);
});
P.on(window, Ju, () => {
  for (const r of ee.find(Ha))
    vt.getOrCreateInstance(r).show();
});
P.on(window, id, () => {
  for (const r of ee.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(r).position !== "fixed" && vt.getOrCreateInstance(r).hide();
});
Nr(vt);
Xe(vt);
const ud = /^aria-[\w-]*$/i, Ya = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", ud],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}, dd = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), fd = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, hd = (r, t) => {
  const e = r.nodeName.toLowerCase();
  return t.includes(e) ? dd.has(e) ? !!fd.test(r.nodeValue) : !0 : t.filter((n) => n instanceof RegExp).some((n) => n.test(e));
};
function pd(r, t, e) {
  if (!r.length)
    return r;
  if (e && typeof e == "function")
    return e(r);
  const i = new window.DOMParser().parseFromString(r, "text/html"), a = [].concat(...i.body.querySelectorAll("*"));
  for (const o of a) {
    const s = o.nodeName.toLowerCase();
    if (!Object.keys(t).includes(s)) {
      o.remove();
      continue;
    }
    const l = [].concat(...o.attributes), u = [].concat(t["*"] || [], t[s] || []);
    for (const d of l)
      hd(d, u) || o.removeAttribute(d.nodeName);
  }
  return i.body.innerHTML;
}
const gd = "TemplateFactory", md = {
  allowList: Ya,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, vd = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, _d = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class bd extends Yn {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return md;
  }
  static get DefaultType() {
    return vd;
  }
  static get NAME() {
    return gd;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((t) => this._resolvePossibleFunction(t)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return this._checkContent(t), this._config.content = {
      ...this._config.content,
      ...t
    }, this;
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [i, a] of Object.entries(this._config.content))
      this._setContent(t, a, i);
    const e = t.children[0], n = this._resolvePossibleFunction(this._config.extraClass);
    return n && e.classList.add(...n.split(" ")), e;
  }
  // Private
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [e, n] of Object.entries(t))
      super._typeCheckConfig({
        selector: e,
        entry: n
      }, _d);
  }
  _setContent(t, e, n) {
    const i = ee.findOne(n, t);
    if (i) {
      if (e = this._resolvePossibleFunction(e), !e) {
        i.remove();
        return;
      }
      if (ht(e)) {
        this._putElementInTemplate(Tt(e), i);
        return;
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(e);
        return;
      }
      i.textContent = e;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize ? pd(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return Ie(t, [this]);
  }
  _putElementInTemplate(t, e) {
    if (this._config.html) {
      e.innerHTML = "", e.append(t);
      return;
    }
    e.textContent = t.textContent;
  }
}
const yd = "tooltip", Ed = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Gr = "fade", wd = "modal", nr = "show", Cd = ".tooltip-inner", Do = `.${wd}`, So = "hide.bs.modal", Tn = "hover", Kr = "focus", Dd = "click", Sd = "manual", Td = "hide", Ad = "hidden", Md = "show", xd = "shown", Od = "inserted", Nd = "click", kd = "focusin", Pd = "focusout", Id = "mouseenter", Ld = "mouseleave", $d = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Ke() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Ke() ? "right" : "left"
}, Rd = {
  allowList: Ya,
  animation: !0,
  boundary: "clippingParents",
  container: !1,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: !1,
  offset: [0, 6],
  placement: "top",
  popperConfig: null,
  sanitize: !0,
  sanitizeFn: null,
  selector: !1,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
}, Bd = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
class Ot extends et {
  constructor(t, e) {
    if (typeof pa > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return Rd;
  }
  static get DefaultType() {
    return Bd;
  }
  static get NAME() {
    return yd;
  }
  // Public
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout), P.off(this._element.closest(Do), So, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = P.trigger(this._element, this.constructor.eventName(Md)), n = (va(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !n)
      return;
    this._disposePopper();
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const {
      container: a
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), P.trigger(this._element, this.constructor.eventName(Od))), this._popper = this._createPopper(i), i.classList.add(nr), "ontouchstart" in document.documentElement)
      for (const s of [].concat(...document.body.children))
        P.on(s, "mouseover", br);
    const o = () => {
      P.trigger(this._element, this.constructor.eventName(xd)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || P.trigger(this._element, this.constructor.eventName(Td)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(nr), "ontouchstart" in document.documentElement)
      for (const i of [].concat(...document.body.children))
        P.off(i, "mouseover", br);
    this._activeTrigger[Dd] = !1, this._activeTrigger[Kr] = !1, this._activeTrigger[Tn] = !1, this._isHovered = null;
    const n = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName(Ad)));
    };
    this._queueCallback(n, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  // Protected
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
  }
  _createTipElement(t) {
    const e = this._getTemplateFactory(t).toHtml();
    if (!e)
      return null;
    e.classList.remove(Gr, nr), e.classList.add(`bs-${this.constructor.NAME}-auto`);
    const n = Dl(this.constructor.NAME).toString();
    return e.setAttribute("id", n), this._isAnimated() && e.classList.add(Gr), e;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new bd({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [Cd]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(Gr);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(nr);
  }
  _createPopper(t) {
    const e = Ie(this._config.placement, [this, t, this._element]), n = $d[e.toUpperCase()];
    return Hi(this._element, t, this._getPopperConfig(n));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return Ie(t, [this._element]);
  }
  _getPopperConfig(t) {
    const e = {
      placement: t,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: !0,
        phase: "beforeMain",
        fn: (n) => {
          this._getTipElement().setAttribute("data-popper-placement", n.state.placement);
        }
      }]
    };
    return {
      ...e,
      ...Ie(this._config.popperConfig, [e])
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const e of t)
      if (e === "click")
        P.on(this._element, this.constructor.eventName(Nd), this._config.selector, (n) => {
          this._initializeOnDelegatedTarget(n).toggle();
        });
      else if (e !== Sd) {
        const n = e === Tn ? this.constructor.eventName(Id) : this.constructor.eventName(kd), i = e === Tn ? this.constructor.eventName(Ld) : this.constructor.eventName(Pd);
        P.on(this._element, n, this._config.selector, (a) => {
          const o = this._initializeOnDelegatedTarget(a);
          o._activeTrigger[a.type === "focusin" ? Kr : Tn] = !0, o._enter();
        }), P.on(this._element, i, this._config.selector, (a) => {
          const o = this._initializeOnDelegatedTarget(a);
          o._activeTrigger[a.type === "focusout" ? Kr : Tn] = o._element.contains(a.relatedTarget), o._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, P.on(this._element.closest(Do), So, this._hideModalHandler);
  }
  _fixTitle() {
    const t = this._element.getAttribute("title");
    t && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    this._isHovered = !0, this._setTimeout(() => {
      this._isHovered && this.show();
    }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
      this._isHovered || this.hide();
    }, this._config.delay.hide));
  }
  _setTimeout(t, e) {
    clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const e = pt.getDataAttributes(this._element);
    for (const n of Object.keys(e))
      Ed.has(n) && delete e[n];
    return t = {
      ...e,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : Tt(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const [e, n] of Object.entries(this._config))
      this.constructor.Default[e] !== n && (t[e] = n);
    return t.selector = !1, t.trigger = "manual", t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Ot.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
Xe(Ot);
const Hd = "popover", Fd = ".popover-header", Yd = ".popover-body", Wd = {
  ...Ot.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, Vd = {
  ...Ot.DefaultType,
  content: "(null|string|element|function)"
};
class kr extends Ot {
  // Getters
  static get Default() {
    return Wd;
  }
  static get DefaultType() {
    return Vd;
  }
  static get NAME() {
    return Hd;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [Fd]: this._getTitle(),
      [Yd]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = kr.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
Xe(kr);
const jd = "scrollspy", zd = "bs.scrollspy", Vi = `.${zd}`, Gd = ".data-api", Kd = `activate${Vi}`, To = `click${Vi}`, Ud = `load${Vi}${Gd}`, Xd = "dropdown-item", Zt = "active", qd = '[data-bs-spy="scroll"]', Ur = "[href]", Qd = ".nav, .list-group", Ao = ".nav-link", Jd = ".nav-item", Zd = ".list-group-item", ef = `${Ao}, ${Jd} > ${Ao}, ${Zd}`, tf = ".dropdown", nf = ".dropdown-toggle", rf = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, of = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class zn extends et {
  constructor(t, e) {
    super(t, e), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return rf;
  }
  static get DefaultType() {
    return of;
  }
  static get NAME() {
    return jd;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
    for (const t of this._observableSections.values())
      this._observer.observe(t);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.target = Tt(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((e) => Number.parseFloat(e))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (P.off(this._config.target, To), P.on(this._config.target, To, Ur, (t) => {
      const e = this._observableSections.get(t.target.hash);
      if (e) {
        t.preventDefault();
        const n = this._rootElement || window, i = e.offsetTop - this._element.offsetTop;
        if (n.scrollTo) {
          n.scrollTo({
            top: i,
            behavior: "smooth"
          });
          return;
        }
        n.scrollTop = i;
      }
    }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((e) => this._observerCallback(e), t);
  }
  // The logic of selection
  _observerCallback(t) {
    const e = (o) => this._targetLinks.get(`#${o.target.id}`), n = (o) => {
      this._previousScrollData.visibleEntryTop = o.target.offsetTop, this._process(e(o));
    }, i = (this._rootElement || document.documentElement).scrollTop, a = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const o of t) {
      if (!o.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(e(o));
        continue;
      }
      const s = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (a && s) {
        if (n(o), !i)
          return;
        continue;
      }
      !a && !s && n(o);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const t = ee.find(Ur, this._config.target);
    for (const e of t) {
      if (!e.hash || At(e))
        continue;
      const n = ee.findOne(decodeURI(e.hash), this._element);
      bn(n) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, n));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Zt), this._activateParents(t), P.trigger(this._element, Kd, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(Xd)) {
      ee.findOne(nf, t.closest(tf)).classList.add(Zt);
      return;
    }
    for (const e of ee.parents(t, Qd))
      for (const n of ee.prev(e, ef))
        n.classList.add(Zt);
  }
  _clearActiveClass(t) {
    t.classList.remove(Zt);
    const e = ee.find(`${Ur}.${Zt}`, t);
    for (const n of e)
      n.classList.remove(Zt);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = zn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
P.on(window, Ud, () => {
  for (const r of ee.find(qd))
    zn.getOrCreateInstance(r);
});
Xe(zn);
const af = "tab", sf = "bs.tab", Gt = `.${sf}`, lf = `hide${Gt}`, cf = `hidden${Gt}`, uf = `show${Gt}`, df = `shown${Gt}`, ff = `click${Gt}`, hf = `keydown${Gt}`, pf = `load${Gt}`, gf = "ArrowLeft", Mo = "ArrowRight", mf = "ArrowUp", xo = "ArrowDown", Xr = "Home", Oo = "End", Bt = "active", No = "fade", qr = "show", vf = "dropdown", Wa = ".dropdown-toggle", _f = ".dropdown-menu", Qr = `:not(${Wa})`, bf = '.list-group, .nav, [role="tablist"]', yf = ".nav-item, .list-group-item", Ef = `.nav-link${Qr}, .list-group-item${Qr}, [role="tab"]${Qr}`, Va = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Jr = `${Ef}, ${Va}`, wf = `.${Bt}[data-bs-toggle="tab"], .${Bt}[data-bs-toggle="pill"], .${Bt}[data-bs-toggle="list"]`;
class jt extends et {
  constructor(t) {
    super(t), this._parent = this._element.closest(bf), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, hf, (e) => this._keydown(e)));
  }
  // Getters
  static get NAME() {
    return af;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const e = this._getActiveElem(), n = e ? P.trigger(e, lf, {
      relatedTarget: t
    }) : null;
    P.trigger(t, uf, {
      relatedTarget: e
    }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
  }
  // Private
  _activate(t, e) {
    if (!t)
      return;
    t.classList.add(Bt), this._activate(ee.getElementFromSelector(t));
    const n = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(qr);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), P.trigger(t, df, {
        relatedTarget: e
      });
    };
    this._queueCallback(n, t, t.classList.contains(No));
  }
  _deactivate(t, e) {
    if (!t)
      return;
    t.classList.remove(Bt), t.blur(), this._deactivate(ee.getElementFromSelector(t));
    const n = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(qr);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), P.trigger(t, cf, {
        relatedTarget: e
      });
    };
    this._queueCallback(n, t, t.classList.contains(No));
  }
  _keydown(t) {
    if (![gf, Mo, mf, xo, Xr, Oo].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const e = this._getChildren().filter((i) => !At(i));
    let n;
    if ([Xr, Oo].includes(t.key))
      n = e[t.key === Xr ? 0 : e.length - 1];
    else {
      const i = [Mo, xo].includes(t.key);
      n = Fi(e, t.target, i, !0);
    }
    n && (n.focus({
      preventScroll: !0
    }), jt.getOrCreateInstance(n).show());
  }
  _getChildren() {
    return ee.find(Jr, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, e) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const n of e)
      this._setInitialAttributesOnChild(n);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const e = this._elemIsActive(t), n = this._getOuterElement(t);
    t.setAttribute("aria-selected", e), n !== t && this._setAttributeIfNotExists(n, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const e = ee.getElementFromSelector(t);
    e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, e) {
    const n = this._getOuterElement(t);
    if (!n.classList.contains(vf))
      return;
    const i = (a, o) => {
      const s = ee.findOne(a, n);
      s && s.classList.toggle(o, e);
    };
    i(Wa, Bt), i(_f, qr), n.setAttribute("aria-expanded", e);
  }
  _setAttributeIfNotExists(t, e, n) {
    t.hasAttribute(e) || t.setAttribute(e, n);
  }
  _elemIsActive(t) {
    return t.classList.contains(Bt);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(Jr) ? t : ee.findOne(Jr, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(yf) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = jt.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
P.on(document, ff, Va, function(r) {
  ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !At(this) && jt.getOrCreateInstance(this).show();
});
P.on(window, pf, () => {
  for (const r of ee.find(wf))
    jt.getOrCreateInstance(r);
});
Xe(jt);
const Cf = "toast", Df = "bs.toast", Nt = `.${Df}`, Sf = `mouseover${Nt}`, Tf = `mouseout${Nt}`, Af = `focusin${Nt}`, Mf = `focusout${Nt}`, xf = `hide${Nt}`, Of = `hidden${Nt}`, Nf = `show${Nt}`, kf = `shown${Nt}`, Pf = "fade", ko = "hide", rr = "show", ir = "showing", If = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Lf = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class Gn extends et {
  constructor(t, e) {
    super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Lf;
  }
  static get DefaultType() {
    return If;
  }
  static get NAME() {
    return Cf;
  }
  // Public
  show() {
    if (P.trigger(this._element, Nf).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Pf);
    const e = () => {
      this._element.classList.remove(ir), P.trigger(this._element, kf), this._maybeScheduleHide();
    };
    this._element.classList.remove(ko), Fn(this._element), this._element.classList.add(rr, ir), this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || P.trigger(this._element, xf).defaultPrevented)
      return;
    const e = () => {
      this._element.classList.add(ko), this._element.classList.remove(ir, rr), P.trigger(this._element, Of);
    };
    this._element.classList.add(ir), this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(rr), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(rr);
  }
  // Private
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(t, e) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = e;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = e;
        break;
      }
    }
    if (e) {
      this._clearTimeout();
      return;
    }
    const n = t.relatedTarget;
    this._element === n || this._element.contains(n) || this._maybeScheduleHide();
  }
  _setListeners() {
    P.on(this._element, Sf, (t) => this._onInteraction(t, !0)), P.on(this._element, Tf, (t) => this._onInteraction(t, !1)), P.on(this._element, Af, (t) => this._onInteraction(t, !0)), P.on(this._element, Mf, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Gn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
Nr(Gn);
Xe(Gn);
const Hh = {
  /**
   * Trigger an animation class on an element.
   * Removes the class after animationend so it can be re-triggered.
   *
   * @param el        Target element
   * @param cls       Animation class name (e.g. 'animate-shake')
   * @param onEnd     Optional callback fired when animation completes
   */
  trigger(r, t, e) {
    r.classList.add("animate", t), r.addEventListener("animationend", () => {
      r.classList.remove("animate", t), e && e();
    }, { once: !0 });
  },
  /**
   * Observe elements matching selector and apply their data-animate class
   * when they enter the viewport. Each element animates once then stops
   * being observed.
   *
   * @param selector   CSS selector (default: '[data-animate]')
   * @param options    IntersectionObserver options
   */
  observe(r = "[data-animate]", t = { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }) {
    const e = document.querySelectorAll(r);
    if (e.length === 0)
      return;
    const n = new IntersectionObserver((i, a) => {
      i.forEach((o) => {
        if (!o.isIntersecting)
          return;
        const s = o.target, l = s.dataset.animate;
        l && (s.classList.add("animate", l), delete s.dataset.animate), a.unobserve(s);
      });
    }, t);
    e.forEach((i) => n.observe(i));
  },
  /**
   * Fire a callback once when a sentinel element enters the viewport.
   * The observer disconnects after firing — attach a new sentinel for
   * subsequent pages in an infinite scroll.
   *
   * @param sentinel   Sentinel element to watch
   * @param onEnter    Callback fired when the sentinel is visible
   * @param options    IntersectionObserver options
   */
  onEnter(r, t, e = { rootMargin: "0px 0px 100px 0px", threshold: 0 }) {
    new IntersectionObserver((i, a) => {
      var o;
      (o = i[0]) != null && o.isIntersecting && (a.disconnect(), t());
    }, e).observe(r);
  }
}, $f = {
  delay: 500,
  instantlyCloseOthers: !0
};
function ja() {
  return "ontouchstart" in document;
}
function za(r) {
  return r.closest(".dropdown, .nav-item");
}
function Rf(r) {
  const t = r.closest("nav, .navbar-nav, ul");
  return t ? t.querySelectorAll('[data-hover="dropdown"], [data-bsee-hover="dropdown"]') : document.querySelectorAll("__none__");
}
function Bf(r) {
  Rf(r).forEach((t) => {
    if (t === r)
      return;
    const e = za(t);
    if (e) {
      e.classList.remove("show");
      const n = e.querySelector(".dropdown-menu");
      n && n.classList.remove("show"), t.setAttribute("aria-expanded", "false");
    }
  });
}
function Ga(r, t = {}) {
  if (ja())
    return;
  const e = { ...$f, ...t }, n = r.dataset.delay, i = r.dataset.closeOthers;
  n !== void 0 && (e.delay = parseInt(n, 10)), i !== void 0 && (e.instantlyCloseOthers = i !== "false");
  const a = za(r);
  if (!a)
    return;
  let o = null;
  const s = a.querySelector(".dropdown-menu");
  function l() {
    o !== null && (clearTimeout(o), o = null), e.instantlyCloseOthers && Bf(r), a.classList.add("show"), s && s.classList.add("show"), r.setAttribute("aria-expanded", "true");
  }
  function u() {
    o = setTimeout(() => {
      a.classList.remove("show"), s && s.classList.remove("show"), r.setAttribute("aria-expanded", "false"), o = null;
    }, e.delay);
  }
  a.addEventListener("mouseenter", l), a.addEventListener("mouseleave", u), r.dataset.bseeHover = "dropdown";
}
function Hf(r = {}) {
  ja() || document.querySelectorAll('[data-hover="dropdown"]').forEach((t) => {
    t.dataset.bseeHover !== "dropdown" && Ga(t, r);
  });
}
const Ff = { init: Hf, attach: Ga };
function Fh(r, t) {
  const e = /* @__PURE__ */ new WeakSet();
  function n(o) {
    e.has(o) || (e.add(o), t(o));
  }
  function i(o) {
    if (o.nodeType !== Node.ELEMENT_NODE)
      return;
    const s = o;
    s.matches(r) && n(s), s.querySelectorAll(r).forEach(n);
  }
  document.querySelectorAll(r).forEach(n);
  const a = new MutationObserver((o) => {
    o.forEach((s) => {
      s.addedNodes.forEach(i);
    });
  });
  return a.observe(document.body, { childList: !0, subtree: !0 }), () => a.disconnect();
}
function Yf() {
  const r = document.getElementById("bsee-toast-container");
  if (r)
    return r;
  const t = document.createElement("div");
  return t.id = "bsee-toast-container", t.style.position = "fixed", t.style.zIndex = "1090", t.style.right = "15px", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "8px", document.body.appendChild(t), t;
}
function Wf(r, t = {}) {
  var u, d;
  const e = t.type ?? "success", n = t.delay ?? 5e3, i = ((u = t.offset) == null ? void 0 : u.from) ?? "top", a = ((d = t.offset) == null ? void 0 : d.amount) ?? 60, o = Yf();
  o.style[i] = `${a}px`, i === "top" ? (o.style.bottom = "", o.style.flexDirection = "column") : (o.style.top = "", o.style.flexDirection = "column-reverse");
  const s = document.createElement("div");
  s.className = `toast align-items-center text-bg-${e} border-0`, t.id && (s.id = t.id), s.setAttribute("role", "alert"), s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true"), s.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${r}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast" aria-label="Close"></button>
        </div>`, o.appendChild(s);
  const { Toast: l } = window.bootstrap ?? {};
  if (l) {
    const p = new l(s, {
      autohide: n > 0,
      delay: n > 0 ? n : 5e3
    });
    s.addEventListener("hidden.bs.toast", () => s.remove()), p.show();
  } else
    s.classList.add("show"), n > 0 && setTimeout(() => s.remove(), n);
}
const Yh = Wf;
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ut(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ka = { exports: {} };
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(ct, function() {
    var e = 1e3, n = 6e4, i = 36e5, a = "millisecond", o = "second", s = "minute", l = "hour", u = "day", d = "week", p = "month", m = "quarter", E = "year", b = "date", g = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, M = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, I = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(H) {
      var k = ["th", "st", "nd", "rd"], A = H % 100;
      return "[" + H + (k[(A - 20) % 10] || k[A] || k[0]) + "]";
    } }, $ = function(H, k, A) {
      var c = String(H);
      return !c || c.length >= k ? H : "" + Array(k + 1 - c.length).join(A) + H;
    }, F = { s: $, z: function(H) {
      var k = -H.utcOffset(), A = Math.abs(k), c = Math.floor(A / 60), v = A % 60;
      return (k <= 0 ? "+" : "-") + $(c, 2, "0") + ":" + $(v, 2, "0");
    }, m: function H(k, A) {
      if (k.date() < A.date())
        return -H(A, k);
      var c = 12 * (A.year() - k.year()) + (A.month() - k.month()), v = k.clone().add(c, p), w = A - v < 0, S = k.clone().add(c + (w ? -1 : 1), p);
      return +(-(c + (A - v) / (w ? v - S : S - v)) || 0);
    }, a: function(H) {
      return H < 0 ? Math.ceil(H) || 0 : Math.floor(H);
    }, p: function(H) {
      return { M: p, y: E, w: d, d: u, D: b, h: l, m: s, s: o, ms: a, Q: m }[H] || String(H || "").toLowerCase().replace(/s$/, "");
    }, u: function(H) {
      return H === void 0;
    } }, R = "en", N = {};
    N[R] = I;
    var x = "$isDayjsObject", D = function(H) {
      return H instanceof J || !(!H || !H[x]);
    }, Y = function H(k, A, c) {
      var v;
      if (!k)
        return R;
      if (typeof k == "string") {
        var w = k.toLowerCase();
        N[w] && (v = w), A && (N[w] = A, v = w);
        var S = k.split("-");
        if (!v && S.length > 1)
          return H(S[0]);
      } else {
        var j = k.name;
        N[j] = k, v = j;
      }
      return !c && v && (R = v), v || !c && R;
    }, W = function(H, k) {
      if (D(H))
        return H.clone();
      var A = typeof k == "object" ? k : {};
      return A.date = H, A.args = arguments, new J(A);
    }, B = F;
    B.l = Y, B.i = D, B.w = function(H, k) {
      return W(H, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
    };
    var J = function() {
      function H(A) {
        this.$L = Y(A.locale, null, !0), this.parse(A), this.$x = this.$x || A.x || {}, this[x] = !0;
      }
      var k = H.prototype;
      return k.parse = function(A) {
        this.$d = function(c) {
          var v = c.date, w = c.utc;
          if (v === null)
            return /* @__PURE__ */ new Date(NaN);
          if (B.u(v))
            return /* @__PURE__ */ new Date();
          if (v instanceof Date)
            return new Date(v);
          if (typeof v == "string" && !/Z$/i.test(v)) {
            var S = v.match(y);
            if (S) {
              var j = S[2] - 1 || 0, T = (S[7] || "0").substring(0, 3);
              return w ? new Date(Date.UTC(S[1], j, S[3] || 1, S[4] || 0, S[5] || 0, S[6] || 0, T)) : new Date(S[1], j, S[3] || 1, S[4] || 0, S[5] || 0, S[6] || 0, T);
            }
          }
          return new Date(v);
        }(A), this.init();
      }, k.init = function() {
        var A = this.$d;
        this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
      }, k.$utils = function() {
        return B;
      }, k.isValid = function() {
        return this.$d.toString() !== g;
      }, k.isSame = function(A, c) {
        var v = W(A);
        return this.startOf(c) <= v && v <= this.endOf(c);
      }, k.isAfter = function(A, c) {
        return W(A) < this.startOf(c);
      }, k.isBefore = function(A, c) {
        return this.endOf(c) < W(A);
      }, k.$g = function(A, c, v) {
        return B.u(A) ? this[c] : this.set(v, A);
      }, k.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, k.valueOf = function() {
        return this.$d.getTime();
      }, k.startOf = function(A, c) {
        var v = this, w = !!B.u(c) || c, S = B.p(A), j = function(de, pe) {
          var ge = B.w(v.$u ? Date.UTC(v.$y, pe, de) : new Date(v.$y, pe, de), v);
          return w ? ge : ge.endOf(u);
        }, T = function(de, pe) {
          return B.w(v.toDate()[de].apply(v.toDate("s"), (w ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(pe)), v);
        }, O = this.$W, L = this.$M, z = this.$D, X = "set" + (this.$u ? "UTC" : "");
        switch (S) {
          case E:
            return w ? j(1, 0) : j(31, 11);
          case p:
            return w ? j(1, L) : j(0, L + 1);
          case d:
            var Z = this.$locale().weekStart || 0, ae = (O < Z ? O + 7 : O) - Z;
            return j(w ? z - ae : z + (6 - ae), L);
          case u:
          case b:
            return T(X + "Hours", 0);
          case l:
            return T(X + "Minutes", 1);
          case s:
            return T(X + "Seconds", 2);
          case o:
            return T(X + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, k.endOf = function(A) {
        return this.startOf(A, !1);
      }, k.$set = function(A, c) {
        var v, w = B.p(A), S = "set" + (this.$u ? "UTC" : ""), j = (v = {}, v[u] = S + "Date", v[b] = S + "Date", v[p] = S + "Month", v[E] = S + "FullYear", v[l] = S + "Hours", v[s] = S + "Minutes", v[o] = S + "Seconds", v[a] = S + "Milliseconds", v)[w], T = w === u ? this.$D + (c - this.$W) : c;
        if (w === p || w === E) {
          var O = this.clone().set(b, 1);
          O.$d[j](T), O.init(), this.$d = O.set(b, Math.min(this.$D, O.daysInMonth())).$d;
        } else
          j && this.$d[j](T);
        return this.init(), this;
      }, k.set = function(A, c) {
        return this.clone().$set(A, c);
      }, k.get = function(A) {
        return this[B.p(A)]();
      }, k.add = function(A, c) {
        var v, w = this;
        A = Number(A);
        var S = B.p(c), j = function(L) {
          var z = W(w);
          return B.w(z.date(z.date() + Math.round(L * A)), w);
        };
        if (S === p)
          return this.set(p, this.$M + A);
        if (S === E)
          return this.set(E, this.$y + A);
        if (S === u)
          return j(1);
        if (S === d)
          return j(7);
        var T = (v = {}, v[s] = n, v[l] = i, v[o] = e, v)[S] || 1, O = this.$d.getTime() + A * T;
        return B.w(O, this);
      }, k.subtract = function(A, c) {
        return this.add(-1 * A, c);
      }, k.format = function(A) {
        var c = this, v = this.$locale();
        if (!this.isValid())
          return v.invalidDate || g;
        var w = A || "YYYY-MM-DDTHH:mm:ssZ", S = B.z(this), j = this.$H, T = this.$m, O = this.$M, L = v.weekdays, z = v.months, X = v.meridiem, Z = function(pe, ge, fe, Ae) {
          return pe && (pe[ge] || pe(c, w)) || fe[ge].slice(0, Ae);
        }, ae = function(pe) {
          return B.s(j % 12 || 12, pe, "0");
        }, de = X || function(pe, ge, fe) {
          var Ae = pe < 12 ? "AM" : "PM";
          return fe ? Ae.toLowerCase() : Ae;
        };
        return w.replace(M, function(pe, ge) {
          return ge || function(fe) {
            switch (fe) {
              case "YY":
                return String(c.$y).slice(-2);
              case "YYYY":
                return B.s(c.$y, 4, "0");
              case "M":
                return O + 1;
              case "MM":
                return B.s(O + 1, 2, "0");
              case "MMM":
                return Z(v.monthsShort, O, z, 3);
              case "MMMM":
                return Z(z, O);
              case "D":
                return c.$D;
              case "DD":
                return B.s(c.$D, 2, "0");
              case "d":
                return String(c.$W);
              case "dd":
                return Z(v.weekdaysMin, c.$W, L, 2);
              case "ddd":
                return Z(v.weekdaysShort, c.$W, L, 3);
              case "dddd":
                return L[c.$W];
              case "H":
                return String(j);
              case "HH":
                return B.s(j, 2, "0");
              case "h":
                return ae(1);
              case "hh":
                return ae(2);
              case "a":
                return de(j, T, !0);
              case "A":
                return de(j, T, !1);
              case "m":
                return String(T);
              case "mm":
                return B.s(T, 2, "0");
              case "s":
                return String(c.$s);
              case "ss":
                return B.s(c.$s, 2, "0");
              case "SSS":
                return B.s(c.$ms, 3, "0");
              case "Z":
                return S;
            }
            return null;
          }(pe) || S.replace(":", "");
        });
      }, k.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, k.diff = function(A, c, v) {
        var w, S = this, j = B.p(c), T = W(A), O = (T.utcOffset() - this.utcOffset()) * n, L = this - T, z = function() {
          return B.m(S, T);
        };
        switch (j) {
          case E:
            w = z() / 12;
            break;
          case p:
            w = z();
            break;
          case m:
            w = z() / 3;
            break;
          case d:
            w = (L - O) / 6048e5;
            break;
          case u:
            w = (L - O) / 864e5;
            break;
          case l:
            w = L / i;
            break;
          case s:
            w = L / n;
            break;
          case o:
            w = L / e;
            break;
          default:
            w = L;
        }
        return v ? w : B.a(w);
      }, k.daysInMonth = function() {
        return this.endOf(p).$D;
      }, k.$locale = function() {
        return N[this.$L];
      }, k.locale = function(A, c) {
        if (!A)
          return this.$L;
        var v = this.clone(), w = Y(A, c, !0);
        return w && (v.$L = w), v;
      }, k.clone = function() {
        return B.w(this.$d, this);
      }, k.toDate = function() {
        return new Date(this.valueOf());
      }, k.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, k.toISOString = function() {
        return this.$d.toISOString();
      }, k.toString = function() {
        return this.$d.toUTCString();
      }, H;
    }(), U = J.prototype;
    return W.prototype = U, [["$ms", a], ["$s", o], ["$m", s], ["$H", l], ["$W", u], ["$M", p], ["$y", E], ["$D", b]].forEach(function(H) {
      U[H[1]] = function(k) {
        return this.$g(k, H[0], H[1]);
      };
    }), W.extend = function(H, k) {
      return H.$i || (H(k, J, W), H.$i = !0), W;
    }, W.locale = Y, W.isDayjs = D, W.unix = function(H) {
      return W(1e3 * H);
    }, W.en = N[R], W.Ls = N, W.p = {}, W;
  });
})(Ka);
var Vf = Ka.exports;
const Kt = /* @__PURE__ */ ut(Vf);
var Ua = { exports: {} };
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(ct, function() {
    return function(e, n, i) {
      e = e || {};
      var a = n.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function s(u, d, p, m) {
        return a.fromToBase(u, d, p, m);
      }
      i.en.relativeTime = o, a.fromToBase = function(u, d, p, m, E) {
        for (var b, g, y, M = p.$locale().relativeTime || o, I = e.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], $ = I.length, F = 0; F < $; F += 1) {
          var R = I[F];
          R.d && (b = m ? i(u).diff(p, R.d, !0) : p.diff(u, R.d, !0));
          var N = (e.rounding || Math.round)(Math.abs(b));
          if (y = b > 0, N <= R.r || !R.r) {
            N <= 1 && F > 0 && (R = I[F - 1]);
            var x = M[R.l];
            E && (N = E("" + N)), g = typeof x == "string" ? x.replace("%d", N) : x(N, d, R.l, y);
            break;
          }
        }
        if (d)
          return g;
        var D = y ? M.future : M.past;
        return typeof D == "function" ? D(g) : D.replace("%s", g);
      }, a.to = function(u, d) {
        return s(u, d, this, !0);
      }, a.from = function(u, d) {
        return s(u, d, this);
      };
      var l = function(u) {
        return u.$u ? i.utc() : i();
      };
      a.toNow = function(u) {
        return this.to(l(this), u);
      }, a.fromNow = function(u) {
        return this.from(l(this), u);
      };
    };
  });
})(Ua);
var jf = Ua.exports;
const zf = /* @__PURE__ */ ut(jf);
var Xa = { exports: {} };
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(ct, function() {
    var e, n, i = 1e3, a = 6e4, o = 36e5, s = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6, d = 2628e6, p = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, m = { years: u, months: d, days: s, hours: o, minutes: a, seconds: i, milliseconds: 1, weeks: 6048e5 }, E = function(N) {
      return N instanceof F;
    }, b = function(N, x, D) {
      return new F(N, D, x.$l);
    }, g = function(N) {
      return n.p(N) + "s";
    }, y = function(N) {
      return N < 0;
    }, M = function(N) {
      return y(N) ? Math.ceil(N) : Math.floor(N);
    }, I = function(N) {
      return Math.abs(N);
    }, $ = function(N, x) {
      return N ? y(N) ? { negative: !0, format: "" + I(N) + x } : { negative: !1, format: "" + N + x } : { negative: !1, format: "" };
    }, F = function() {
      function N(D, Y, W) {
        var B = this;
        if (this.$d = {}, this.$l = W, D === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), Y)
          return b(D * m[g(Y)], this);
        if (typeof D == "number")
          return this.$ms = D, this.parseFromMilliseconds(), this;
        if (typeof D == "object")
          return Object.keys(D).forEach(function(H) {
            B.$d[g(H)] = D[H];
          }), this.calMilliseconds(), this;
        if (typeof D == "string") {
          var J = D.match(p);
          if (J) {
            var U = J.slice(2).map(function(H) {
              return H != null ? Number(H) : 0;
            });
            return this.$d.years = U[0], this.$d.months = U[1], this.$d.weeks = U[2], this.$d.days = U[3], this.$d.hours = U[4], this.$d.minutes = U[5], this.$d.seconds = U[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var x = N.prototype;
      return x.calMilliseconds = function() {
        var D = this;
        this.$ms = Object.keys(this.$d).reduce(function(Y, W) {
          return Y + (D.$d[W] || 0) * m[W];
        }, 0);
      }, x.parseFromMilliseconds = function() {
        var D = this.$ms;
        this.$d.years = M(D / u), D %= u, this.$d.months = M(D / d), D %= d, this.$d.days = M(D / s), D %= s, this.$d.hours = M(D / o), D %= o, this.$d.minutes = M(D / a), D %= a, this.$d.seconds = M(D / i), D %= i, this.$d.milliseconds = D;
      }, x.toISOString = function() {
        var D = $(this.$d.years, "Y"), Y = $(this.$d.months, "M"), W = +this.$d.days || 0;
        this.$d.weeks && (W += 7 * this.$d.weeks);
        var B = $(W, "D"), J = $(this.$d.hours, "H"), U = $(this.$d.minutes, "M"), H = this.$d.seconds || 0;
        this.$d.milliseconds && (H += this.$d.milliseconds / 1e3, H = Math.round(1e3 * H) / 1e3);
        var k = $(H, "S"), A = D.negative || Y.negative || B.negative || J.negative || U.negative || k.negative, c = J.format || U.format || k.format ? "T" : "", v = (A ? "-" : "") + "P" + D.format + Y.format + B.format + c + J.format + U.format + k.format;
        return v === "P" || v === "-P" ? "P0D" : v;
      }, x.toJSON = function() {
        return this.toISOString();
      }, x.format = function(D) {
        var Y = D || "YYYY-MM-DDTHH:mm:ss", W = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return Y.replace(l, function(B, J) {
          return J || String(W[B]);
        });
      }, x.as = function(D) {
        return this.$ms / m[g(D)];
      }, x.get = function(D) {
        var Y = this.$ms, W = g(D);
        return W === "milliseconds" ? Y %= 1e3 : Y = W === "weeks" ? M(Y / m[W]) : this.$d[W], Y || 0;
      }, x.add = function(D, Y, W) {
        var B;
        return B = Y ? D * m[g(Y)] : E(D) ? D.$ms : b(D, this).$ms, b(this.$ms + B * (W ? -1 : 1), this);
      }, x.subtract = function(D, Y) {
        return this.add(D, Y, !0);
      }, x.locale = function(D) {
        var Y = this.clone();
        return Y.$l = D, Y;
      }, x.clone = function() {
        return b(this.$ms, this);
      }, x.humanize = function(D) {
        return e().add(this.$ms, "ms").locale(this.$l).fromNow(!D);
      }, x.valueOf = function() {
        return this.asMilliseconds();
      }, x.milliseconds = function() {
        return this.get("milliseconds");
      }, x.asMilliseconds = function() {
        return this.as("milliseconds");
      }, x.seconds = function() {
        return this.get("seconds");
      }, x.asSeconds = function() {
        return this.as("seconds");
      }, x.minutes = function() {
        return this.get("minutes");
      }, x.asMinutes = function() {
        return this.as("minutes");
      }, x.hours = function() {
        return this.get("hours");
      }, x.asHours = function() {
        return this.as("hours");
      }, x.days = function() {
        return this.get("days");
      }, x.asDays = function() {
        return this.as("days");
      }, x.weeks = function() {
        return this.get("weeks");
      }, x.asWeeks = function() {
        return this.as("weeks");
      }, x.months = function() {
        return this.get("months");
      }, x.asMonths = function() {
        return this.as("months");
      }, x.years = function() {
        return this.get("years");
      }, x.asYears = function() {
        return this.as("years");
      }, N;
    }(), R = function(N, x, D) {
      return N.add(x.years() * D, "y").add(x.months() * D, "M").add(x.days() * D, "d").add(x.hours() * D, "h").add(x.minutes() * D, "m").add(x.seconds() * D, "s").add(x.milliseconds() * D, "ms");
    };
    return function(N, x, D) {
      e = D, n = D().$utils(), D.duration = function(B, J) {
        var U = D.locale();
        return b(B, { $l: U }, J);
      }, D.isDuration = E;
      var Y = x.prototype.add, W = x.prototype.subtract;
      x.prototype.add = function(B, J) {
        return E(B) ? R(this, B, 1) : Y.bind(this)(B, J);
      }, x.prototype.subtract = function(B, J) {
        return E(B) ? R(this, B, -1) : W.bind(this)(B, J);
      };
    };
  });
})(Xa);
var Gf = Xa.exports;
const Kf = /* @__PURE__ */ ut(Gf);
var qa = { exports: {} };
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(ct, function() {
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(n, i, a) {
      var o = i.prototype, s = o.format;
      a.en.formats = e, o.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var u = this.$locale().formats, d = function(p, m) {
          return p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(E, b, g) {
            var y = g && g.toUpperCase();
            return b || m[g] || e[g] || m[y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(M, I, $) {
              return I || $.slice(1);
            });
          });
        }(l, u === void 0 ? {} : u);
        return s.call(this, d);
      };
    };
  });
})(qa);
var Uf = qa.exports;
const Xf = /* @__PURE__ */ ut(Uf);
var Qa = { exports: {} };
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(ct, function() {
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, a = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(y) {
      return (y = +y) + (y > 68 ? 1900 : 2e3);
    }, d = function(y) {
      return function(M) {
        this[y] = +M;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(y) {
      (this.zone || (this.zone = {})).offset = function(M) {
        if (!M || M === "Z")
          return 0;
        var I = M.match(/([+-]|\d\d)/g), $ = 60 * I[1] + (+I[2] || 0);
        return $ === 0 ? 0 : I[0] === "+" ? -$ : $;
      }(y);
    }], m = function(y) {
      var M = l[y];
      return M && (M.indexOf ? M : M.s.concat(M.f));
    }, E = function(y, M) {
      var I, $ = l.meridiem;
      if ($) {
        for (var F = 1; F <= 24; F += 1)
          if (y.indexOf($(F, 0, M)) > -1) {
            I = F > 12;
            break;
          }
      } else
        I = y === (M ? "pm" : "PM");
      return I;
    }, b = { A: [s, function(y) {
      this.afternoon = E(y, !1);
    }], a: [s, function(y) {
      this.afternoon = E(y, !0);
    }], Q: [i, function(y) {
      this.month = 3 * (y - 1) + 1;
    }], S: [i, function(y) {
      this.milliseconds = 100 * +y;
    }], SS: [a, function(y) {
      this.milliseconds = 10 * +y;
    }], SSS: [/\d{3}/, function(y) {
      this.milliseconds = +y;
    }], s: [o, d("seconds")], ss: [o, d("seconds")], m: [o, d("minutes")], mm: [o, d("minutes")], H: [o, d("hours")], h: [o, d("hours")], HH: [o, d("hours")], hh: [o, d("hours")], D: [o, d("day")], DD: [a, d("day")], Do: [s, function(y) {
      var M = l.ordinal, I = y.match(/\d+/);
      if (this.day = I[0], M)
        for (var $ = 1; $ <= 31; $ += 1)
          M($).replace(/\[|\]/g, "") === y && (this.day = $);
    }], w: [o, d("week")], ww: [a, d("week")], M: [o, d("month")], MM: [a, d("month")], MMM: [s, function(y) {
      var M = m("months"), I = (m("monthsShort") || M.map(function($) {
        return $.slice(0, 3);
      })).indexOf(y) + 1;
      if (I < 1)
        throw new Error();
      this.month = I % 12 || I;
    }], MMMM: [s, function(y) {
      var M = m("months").indexOf(y) + 1;
      if (M < 1)
        throw new Error();
      this.month = M % 12 || M;
    }], Y: [/[+-]?\d+/, d("year")], YY: [a, function(y) {
      this.year = u(y);
    }], YYYY: [/\d{4}/, d("year")], Z: p, ZZ: p };
    function g(y) {
      var M, I;
      M = y, I = l && l.formats;
      for (var $ = (y = M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(W, B, J) {
        var U = J && J.toUpperCase();
        return B || I[J] || e[J] || I[U].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(H, k, A) {
          return k || A.slice(1);
        });
      })).match(n), F = $.length, R = 0; R < F; R += 1) {
        var N = $[R], x = b[N], D = x && x[0], Y = x && x[1];
        $[R] = Y ? { regex: D, parser: Y } : N.replace(/^\[|\]$/g, "");
      }
      return function(W) {
        for (var B = {}, J = 0, U = 0; J < F; J += 1) {
          var H = $[J];
          if (typeof H == "string")
            U += H.length;
          else {
            var k = H.regex, A = H.parser, c = W.slice(U), v = k.exec(c)[0];
            A.call(B, v), W = W.replace(v, "");
          }
        }
        return function(w) {
          var S = w.afternoon;
          if (S !== void 0) {
            var j = w.hours;
            S ? j < 12 && (w.hours += 12) : j === 12 && (w.hours = 0), delete w.afternoon;
          }
        }(B), B;
      };
    }
    return function(y, M, I) {
      I.p.customParseFormat = !0, y && y.parseTwoDigitYear && (u = y.parseTwoDigitYear);
      var $ = M.prototype, F = $.parse;
      $.parse = function(R) {
        var N = R.date, x = R.utc, D = R.args;
        this.$u = x;
        var Y = D[1];
        if (typeof Y == "string") {
          var W = D[2] === !0, B = D[3] === !0, J = W || B, U = D[2];
          B && (U = D[2]), l = this.$locale(), !W && U && (l = I.Ls[U]), this.$d = function(c, v, w, S) {
            try {
              if (["x", "X"].indexOf(v) > -1)
                return new Date((v === "X" ? 1e3 : 1) * c);
              var j = g(v)(c), T = j.year, O = j.month, L = j.day, z = j.hours, X = j.minutes, Z = j.seconds, ae = j.milliseconds, de = j.zone, pe = j.week, ge = /* @__PURE__ */ new Date(), fe = L || (T || O ? 1 : ge.getDate()), Ae = T || ge.getFullYear(), qe = 0;
              T && !O || (qe = O > 0 ? O - 1 : ge.getMonth());
              var De, tt = z || 0, dt = X || 0, Et = Z || 0, nt = ae || 0;
              return de ? new Date(Date.UTC(Ae, qe, fe, tt, dt, Et, nt + 60 * de.offset * 1e3)) : w ? new Date(Date.UTC(Ae, qe, fe, tt, dt, Et, nt)) : (De = new Date(Ae, qe, fe, tt, dt, Et, nt), pe && (De = S(De).week(pe).toDate()), De);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, Y, x, I), this.init(), U && U !== !0 && (this.$L = this.locale(U).$L), J && N != this.format(Y) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (Y instanceof Array)
          for (var H = Y.length, k = 1; k <= H; k += 1) {
            D[1] = Y[k - 1];
            var A = I.apply(this, D);
            if (A.isValid()) {
              this.$d = A.$d, this.$L = A.$L, this.init();
              break;
            }
            k === H && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          F.call(this, R);
      };
    };
  });
})(Qa);
var qf = Qa.exports;
const Qf = /* @__PURE__ */ ut(qf);
var Ja = { exports: {} };
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(ct, function() {
    return function(e, n) {
      n.prototype.isSameOrBefore = function(i, a) {
        return this.isSame(i, a) || this.isBefore(i, a);
      };
    };
  });
})(Ja);
var Jf = Ja.exports;
const Zf = /* @__PURE__ */ ut(Jf);
var Za = { exports: {} };
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(ct, function() {
    return function(e, n) {
      n.prototype.isSameOrAfter = function(i, a) {
        return this.isSame(i, a) || this.isAfter(i, a);
      };
    };
  });
})(Za);
var eh = Za.exports;
const th = /* @__PURE__ */ ut(eh);
var es = { exports: {} };
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(ct, function() {
    var e = "minute", n = /[+-]\d\d(?::?\d\d)?/g, i = /([+-]|\d\d)/g;
    return function(a, o, s) {
      var l = o.prototype;
      s.utc = function(g) {
        var y = { date: g, utc: !0, args: arguments };
        return new o(y);
      }, l.utc = function(g) {
        var y = s(this.toDate(), { locale: this.$L, utc: !0 });
        return g ? y.add(this.utcOffset(), e) : y;
      }, l.local = function() {
        return s(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var u = l.parse;
      l.parse = function(g) {
        g.utc && (this.$u = !0), this.$utils().u(g.$offset) || (this.$offset = g.$offset), u.call(this, g);
      };
      var d = l.init;
      l.init = function() {
        if (this.$u) {
          var g = this.$d;
          this.$y = g.getUTCFullYear(), this.$M = g.getUTCMonth(), this.$D = g.getUTCDate(), this.$W = g.getUTCDay(), this.$H = g.getUTCHours(), this.$m = g.getUTCMinutes(), this.$s = g.getUTCSeconds(), this.$ms = g.getUTCMilliseconds();
        } else
          d.call(this);
      };
      var p = l.utcOffset;
      l.utcOffset = function(g, y) {
        var M = this.$utils().u;
        if (M(g))
          return this.$u ? 0 : M(this.$offset) ? p.call(this) : this.$offset;
        if (typeof g == "string" && (g = function(R) {
          R === void 0 && (R = "");
          var N = R.match(n);
          if (!N)
            return null;
          var x = ("" + N[0]).match(i) || ["-", 0, 0], D = x[0], Y = 60 * +x[1] + +x[2];
          return Y === 0 ? 0 : D === "+" ? Y : -Y;
        }(g), g === null))
          return this;
        var I = Math.abs(g) <= 16 ? 60 * g : g;
        if (I === 0)
          return this.utc(y);
        var $ = this.clone();
        if (y)
          return $.$offset = I, $.$u = !1, $;
        var F = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return ($ = this.local().add(I + F, e)).$offset = I, $.$x.$localOffset = F, $;
      };
      var m = l.format;
      l.format = function(g) {
        var y = g || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return m.call(this, y);
      }, l.valueOf = function() {
        var g = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * g;
      }, l.isUTC = function() {
        return !!this.$u;
      }, l.toISOString = function() {
        return this.toDate().toISOString();
      }, l.toString = function() {
        return this.toDate().toUTCString();
      };
      var E = l.toDate;
      l.toDate = function(g) {
        return g === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : E.call(this);
      };
      var b = l.diff;
      l.diff = function(g, y, M) {
        if (g && this.$u === g.$u)
          return b.call(this, g, y, M);
        var I = this.local(), $ = s(g).local();
        return b.call(I, $, y, M);
      };
    };
  });
})(es);
var nh = es.exports;
const rh = /* @__PURE__ */ ut(nh);
Kt.extend(zf);
Kt.extend(Kf);
Kt.extend(Xf);
Kt.extend(Qf);
Kt.extend(Zf);
Kt.extend(th);
Kt.extend(rh);
var ts = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(r, t) {
  (function(n, i) {
    r.exports = i();
  })(ct, function() {
    return (
      /******/
      function() {
        var e = {
          /***/
          686: (
            /***/
            function(a, o, s) {
              s.d(o, {
                default: function() {
                  return (
                    /* binding */
                    j
                  );
                }
              });
              var l = s(279), u = /* @__PURE__ */ s.n(l), d = s(370), p = /* @__PURE__ */ s.n(d), m = s(817), E = /* @__PURE__ */ s.n(m);
              function b(T) {
                try {
                  return document.execCommand(T);
                } catch {
                  return !1;
                }
              }
              var g = function(O) {
                var L = E()(O);
                return b("cut"), L;
              }, y = g;
              function M(T) {
                var O = document.documentElement.getAttribute("dir") === "rtl", L = document.createElement("textarea");
                L.style.fontSize = "12pt", L.style.border = "0", L.style.padding = "0", L.style.margin = "0", L.style.position = "absolute", L.style[O ? "right" : "left"] = "-9999px";
                var z = window.pageYOffset || document.documentElement.scrollTop;
                return L.style.top = "".concat(z, "px"), L.setAttribute("readonly", ""), L.value = T, L;
              }
              var I = function(O, L) {
                var z = M(O);
                L.container.appendChild(z);
                var X = E()(z);
                return b("copy"), z.remove(), X;
              }, $ = function(O) {
                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                  container: document.body
                }, z = "";
                return typeof O == "string" ? z = I(O, L) : O instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(O == null ? void 0 : O.type) ? z = I(O.value, L) : (z = E()(O), b("copy")), z;
              }, F = $;
              function R(T) {
                "@babel/helpers - typeof";
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? R = function(L) {
                  return typeof L;
                } : R = function(L) {
                  return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L;
                }, R(T);
              }
              var N = function() {
                var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, L = O.action, z = L === void 0 ? "copy" : L, X = O.container, Z = O.target, ae = O.text;
                if (z !== "copy" && z !== "cut")
                  throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (Z !== void 0)
                  if (Z && R(Z) === "object" && Z.nodeType === 1) {
                    if (z === "copy" && Z.hasAttribute("disabled"))
                      throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if (z === "cut" && (Z.hasAttribute("readonly") || Z.hasAttribute("disabled")))
                      throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                  } else
                    throw new Error('Invalid "target" value, use a valid Element');
                if (ae)
                  return F(ae, {
                    container: X
                  });
                if (Z)
                  return z === "cut" ? y(Z) : F(Z, {
                    container: X
                  });
              }, x = N;
              function D(T) {
                "@babel/helpers - typeof";
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? D = function(L) {
                  return typeof L;
                } : D = function(L) {
                  return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L;
                }, D(T);
              }
              function Y(T, O) {
                if (!(T instanceof O))
                  throw new TypeError("Cannot call a class as a function");
              }
              function W(T, O) {
                for (var L = 0; L < O.length; L++) {
                  var z = O[L];
                  z.enumerable = z.enumerable || !1, z.configurable = !0, "value" in z && (z.writable = !0), Object.defineProperty(T, z.key, z);
                }
              }
              function B(T, O, L) {
                return O && W(T.prototype, O), L && W(T, L), T;
              }
              function J(T, O) {
                if (typeof O != "function" && O !== null)
                  throw new TypeError("Super expression must either be null or a function");
                T.prototype = Object.create(O && O.prototype, { constructor: { value: T, writable: !0, configurable: !0 } }), O && U(T, O);
              }
              function U(T, O) {
                return U = Object.setPrototypeOf || function(z, X) {
                  return z.__proto__ = X, z;
                }, U(T, O);
              }
              function H(T) {
                var O = c();
                return function() {
                  var z = v(T), X;
                  if (O) {
                    var Z = v(this).constructor;
                    X = Reflect.construct(z, arguments, Z);
                  } else
                    X = z.apply(this, arguments);
                  return k(this, X);
                };
              }
              function k(T, O) {
                return O && (D(O) === "object" || typeof O == "function") ? O : A(T);
              }
              function A(T) {
                if (T === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return T;
              }
              function c() {
                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
                  return !1;
                if (typeof Proxy == "function")
                  return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                  })), !0;
                } catch {
                  return !1;
                }
              }
              function v(T) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(L) {
                  return L.__proto__ || Object.getPrototypeOf(L);
                }, v(T);
              }
              function w(T, O) {
                var L = "data-clipboard-".concat(T);
                if (O.hasAttribute(L))
                  return O.getAttribute(L);
              }
              var S = /* @__PURE__ */ function(T) {
                J(L, T);
                var O = H(L);
                function L(z, X) {
                  var Z;
                  return Y(this, L), Z = O.call(this), Z.resolveOptions(X), Z.listenClick(z), Z;
                }
                return B(L, [{
                  key: "resolveOptions",
                  value: function() {
                    var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    this.action = typeof X.action == "function" ? X.action : this.defaultAction, this.target = typeof X.target == "function" ? X.target : this.defaultTarget, this.text = typeof X.text == "function" ? X.text : this.defaultText, this.container = D(X.container) === "object" ? X.container : document.body;
                  }
                  /**
                   * Adds a click event listener to the passed trigger.
                   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                   */
                }, {
                  key: "listenClick",
                  value: function(X) {
                    var Z = this;
                    this.listener = p()(X, "click", function(ae) {
                      return Z.onClick(ae);
                    });
                  }
                  /**
                   * Defines a new `ClipboardAction` on each click event.
                   * @param {Event} e
                   */
                }, {
                  key: "onClick",
                  value: function(X) {
                    var Z = X.delegateTarget || X.currentTarget, ae = this.action(Z) || "copy", de = x({
                      action: ae,
                      container: this.container,
                      target: this.target(Z),
                      text: this.text(Z)
                    });
                    this.emit(de ? "success" : "error", {
                      action: ae,
                      text: de,
                      trigger: Z,
                      clearSelection: function() {
                        Z && Z.focus(), window.getSelection().removeAllRanges();
                      }
                    });
                  }
                  /**
                   * Default `action` lookup function.
                   * @param {Element} trigger
                   */
                }, {
                  key: "defaultAction",
                  value: function(X) {
                    return w("action", X);
                  }
                  /**
                   * Default `target` lookup function.
                   * @param {Element} trigger
                   */
                }, {
                  key: "defaultTarget",
                  value: function(X) {
                    var Z = w("target", X);
                    if (Z)
                      return document.querySelector(Z);
                  }
                  /**
                   * Allow fire programmatically a copy action
                   * @param {String|HTMLElement} target
                   * @param {Object} options
                   * @returns Text copied.
                   */
                }, {
                  key: "defaultText",
                  /**
                   * Default `text` lookup function.
                   * @param {Element} trigger
                   */
                  value: function(X) {
                    return w("text", X);
                  }
                  /**
                   * Destroy lifecycle.
                   */
                }, {
                  key: "destroy",
                  value: function() {
                    this.listener.destroy();
                  }
                }], [{
                  key: "copy",
                  value: function(X) {
                    var Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                      container: document.body
                    };
                    return F(X, Z);
                  }
                  /**
                   * Allow fire programmatically a cut action
                   * @param {String|HTMLElement} target
                   * @returns Text cutted.
                   */
                }, {
                  key: "cut",
                  value: function(X) {
                    return y(X);
                  }
                  /**
                   * Returns the support of the given action, or all actions if no action is
                   * given.
                   * @param {String} [action]
                   */
                }, {
                  key: "isSupported",
                  value: function() {
                    var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], Z = typeof X == "string" ? [X] : X, ae = !!document.queryCommandSupported;
                    return Z.forEach(function(de) {
                      ae = ae && !!document.queryCommandSupported(de);
                    }), ae;
                  }
                }]), L;
              }(u()), j = S;
            }
          ),
          /***/
          828: (
            /***/
            function(a) {
              var o = 9;
              if (typeof Element < "u" && !Element.prototype.matches) {
                var s = Element.prototype;
                s.matches = s.matchesSelector || s.mozMatchesSelector || s.msMatchesSelector || s.oMatchesSelector || s.webkitMatchesSelector;
              }
              function l(u, d) {
                for (; u && u.nodeType !== o; ) {
                  if (typeof u.matches == "function" && u.matches(d))
                    return u;
                  u = u.parentNode;
                }
              }
              a.exports = l;
            }
          ),
          /***/
          438: (
            /***/
            function(a, o, s) {
              var l = s(828);
              function u(m, E, b, g, y) {
                var M = p.apply(this, arguments);
                return m.addEventListener(b, M, y), {
                  destroy: function() {
                    m.removeEventListener(b, M, y);
                  }
                };
              }
              function d(m, E, b, g, y) {
                return typeof m.addEventListener == "function" ? u.apply(null, arguments) : typeof b == "function" ? u.bind(null, document).apply(null, arguments) : (typeof m == "string" && (m = document.querySelectorAll(m)), Array.prototype.map.call(m, function(M) {
                  return u(M, E, b, g, y);
                }));
              }
              function p(m, E, b, g) {
                return function(y) {
                  y.delegateTarget = l(y.target, E), y.delegateTarget && g.call(m, y);
                };
              }
              a.exports = d;
            }
          ),
          /***/
          879: (
            /***/
            function(a, o) {
              o.node = function(s) {
                return s !== void 0 && s instanceof HTMLElement && s.nodeType === 1;
              }, o.nodeList = function(s) {
                var l = Object.prototype.toString.call(s);
                return s !== void 0 && (l === "[object NodeList]" || l === "[object HTMLCollection]") && "length" in s && (s.length === 0 || o.node(s[0]));
              }, o.string = function(s) {
                return typeof s == "string" || s instanceof String;
              }, o.fn = function(s) {
                var l = Object.prototype.toString.call(s);
                return l === "[object Function]";
              };
            }
          ),
          /***/
          370: (
            /***/
            function(a, o, s) {
              var l = s(879), u = s(438);
              function d(b, g, y) {
                if (!b && !g && !y)
                  throw new Error("Missing required arguments");
                if (!l.string(g))
                  throw new TypeError("Second argument must be a String");
                if (!l.fn(y))
                  throw new TypeError("Third argument must be a Function");
                if (l.node(b))
                  return p(b, g, y);
                if (l.nodeList(b))
                  return m(b, g, y);
                if (l.string(b))
                  return E(b, g, y);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
              }
              function p(b, g, y) {
                return b.addEventListener(g, y), {
                  destroy: function() {
                    b.removeEventListener(g, y);
                  }
                };
              }
              function m(b, g, y) {
                return Array.prototype.forEach.call(b, function(M) {
                  M.addEventListener(g, y);
                }), {
                  destroy: function() {
                    Array.prototype.forEach.call(b, function(M) {
                      M.removeEventListener(g, y);
                    });
                  }
                };
              }
              function E(b, g, y) {
                return u(document.body, b, g, y);
              }
              a.exports = d;
            }
          ),
          /***/
          817: (
            /***/
            function(a) {
              function o(s) {
                var l;
                if (s.nodeName === "SELECT")
                  s.focus(), l = s.value;
                else if (s.nodeName === "INPUT" || s.nodeName === "TEXTAREA") {
                  var u = s.hasAttribute("readonly");
                  u || s.setAttribute("readonly", ""), s.select(), s.setSelectionRange(0, s.value.length), u || s.removeAttribute("readonly"), l = s.value;
                } else {
                  s.hasAttribute("contenteditable") && s.focus();
                  var d = window.getSelection(), p = document.createRange();
                  p.selectNodeContents(s), d.removeAllRanges(), d.addRange(p), l = d.toString();
                }
                return l;
              }
              a.exports = o;
            }
          ),
          /***/
          279: (
            /***/
            function(a) {
              function o() {
              }
              o.prototype = {
                on: function(s, l, u) {
                  var d = this.e || (this.e = {});
                  return (d[s] || (d[s] = [])).push({
                    fn: l,
                    ctx: u
                  }), this;
                },
                once: function(s, l, u) {
                  var d = this;
                  function p() {
                    d.off(s, p), l.apply(u, arguments);
                  }
                  return p._ = l, this.on(s, p, u);
                },
                emit: function(s) {
                  var l = [].slice.call(arguments, 1), u = ((this.e || (this.e = {}))[s] || []).slice(), d = 0, p = u.length;
                  for (d; d < p; d++)
                    u[d].fn.apply(u[d].ctx, l);
                  return this;
                },
                off: function(s, l) {
                  var u = this.e || (this.e = {}), d = u[s], p = [];
                  if (d && l)
                    for (var m = 0, E = d.length; m < E; m++)
                      d[m].fn !== l && d[m].fn._ !== l && p.push(d[m]);
                  return p.length ? u[s] = p : delete u[s], this;
                }
              }, a.exports = o, a.exports.TinyEmitter = o;
            }
          )
          /******/
        }, n = {};
        function i(a) {
          if (n[a])
            return n[a].exports;
          var o = n[a] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return e[a](o, o.exports, i), o.exports;
        }
        return function() {
          i.n = function(a) {
            var o = a && a.__esModule ? (
              /******/
              function() {
                return a.default;
              }
            ) : (
              /******/
              function() {
                return a;
              }
            );
            return i.d(o, { a: o }), o;
          };
        }(), function() {
          i.d = function(a, o) {
            for (var s in o)
              i.o(o, s) && !i.o(a, s) && Object.defineProperty(a, s, { enumerable: !0, get: o[s] });
          };
        }(), function() {
          i.o = function(a, o) {
            return Object.prototype.hasOwnProperty.call(a, o);
          };
        }(), i(686);
      }().default
    );
  });
})(ts);
var ih = ts.exports;
const Wh = /* @__PURE__ */ ut(ih);
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function oh(r, t, e) {
  return (t = ch(t)) in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e)
        ({}).hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, _t.apply(null, arguments);
}
function Po(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function lt(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Po(Object(e), !0).forEach(function(n) {
      oh(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Po(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
function ah(r, t) {
  if (r == null)
    return {};
  var e, n, i = sh(r, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    for (n = 0; n < a.length; n++)
      e = a[n], t.indexOf(e) === -1 && {}.propertyIsEnumerable.call(r, e) && (i[e] = r[e]);
  }
  return i;
}
function sh(r, t) {
  if (r == null)
    return {};
  var e = {};
  for (var n in r)
    if ({}.hasOwnProperty.call(r, n)) {
      if (t.indexOf(n) !== -1)
        continue;
      e[n] = r[n];
    }
  return e;
}
function lh(r, t) {
  if (typeof r != "object" || !r)
    return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function ch(r) {
  var t = lh(r, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ei(r) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(r);
}
var uh = "1.15.7";
function gt(r) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(r);
}
var yt = gt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Kn = gt(/Edge/i), Io = gt(/firefox/i), kn = gt(/safari/i) && !gt(/chrome/i) && !gt(/android/i), ji = gt(/iP(ad|od|hone)/i), ns = gt(/chrome/i) && gt(/android/i), rs = {
  capture: !1,
  passive: !1
};
function ce(r, t, e) {
  r.addEventListener(t, e, !yt && rs);
}
function le(r, t, e) {
  r.removeEventListener(t, e, !yt && rs);
}
function wr(r, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), r)
      try {
        if (r.matches)
          return r.matches(t);
        if (r.msMatchesSelector)
          return r.msMatchesSelector(t);
        if (r.webkitMatchesSelector)
          return r.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function is(r) {
  return r.host && r !== document && r.host.nodeType && r.host !== r ? r.host : r.parentNode;
}
function Je(r, t, e, n) {
  if (r) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? r.parentNode === e && wr(r, t) : wr(r, t)) || n && r === e)
        return r;
      if (r === e)
        break;
    } while (r = is(r));
  }
  return null;
}
var Lo = /\s+/g;
function Be(r, t, e) {
  if (r && t)
    if (r.classList)
      r.classList[e ? "add" : "remove"](t);
    else {
      var n = (" " + r.className + " ").replace(Lo, " ").replace(" " + t + " ", " ");
      r.className = (n + (e ? " " + t : "")).replace(Lo, " ");
    }
}
function te(r, t, e) {
  var n = r && r.style;
  if (n) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(r, "") : r.currentStyle && (e = r.currentStyle), t === void 0 ? e : e[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function cn(r, t) {
  var e = "";
  if (typeof r == "string")
    e = r;
  else
    do {
      var n = te(r, "transform");
      n && n !== "none" && (e = n + " " + e);
    } while (!t && (r = r.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(e);
}
function os(r, t, e) {
  if (r) {
    var n = r.getElementsByTagName(t), i = 0, a = n.length;
    if (e)
      for (; i < a; i++)
        e(n[i], i);
    return n;
  }
  return [];
}
function at() {
  var r = document.scrollingElement;
  return r || document.documentElement;
}
function Ee(r, t, e, n, i) {
  if (!(!r.getBoundingClientRect && r !== window)) {
    var a, o, s, l, u, d, p;
    if (r !== window && r.parentNode && r !== at() ? (a = r.getBoundingClientRect(), o = a.top, s = a.left, l = a.bottom, u = a.right, d = a.height, p = a.width) : (o = 0, s = 0, l = window.innerHeight, u = window.innerWidth, d = window.innerHeight, p = window.innerWidth), (t || e) && r !== window && (i = i || r.parentNode, !yt))
      do
        if (i && i.getBoundingClientRect && (te(i, "transform") !== "none" || e && te(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          o -= m.top + parseInt(te(i, "border-top-width")), s -= m.left + parseInt(te(i, "border-left-width")), l = o + a.height, u = s + a.width;
          break;
        }
      while (i = i.parentNode);
    if (n && r !== window) {
      var E = cn(i || r), b = E && E.a, g = E && E.d;
      E && (o /= g, s /= b, p /= b, d /= g, l = o + d, u = s + p);
    }
    return {
      top: o,
      left: s,
      bottom: l,
      right: u,
      width: p,
      height: d
    };
  }
}
function $o(r, t, e) {
  for (var n = St(r, !0), i = Ee(r)[t]; n; ) {
    var a = Ee(n)[e], o = void 0;
    if (e === "top" || e === "left" ? o = i >= a : o = i <= a, !o)
      return n;
    if (n === at())
      break;
    n = St(n, !1);
  }
  return !1;
}
function vn(r, t, e, n) {
  for (var i = 0, a = 0, o = r.children; a < o.length; ) {
    if (o[a].style.display !== "none" && o[a] !== re.ghost && (n || o[a] !== re.dragged) && Je(o[a], e.draggable, r, !1)) {
      if (i === t)
        return o[a];
      i++;
    }
    a++;
  }
  return null;
}
function zi(r, t) {
  for (var e = r.lastElementChild; e && (e === re.ghost || te(e, "display") === "none" || t && !wr(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function ze(r, t) {
  var e = 0;
  if (!r || !r.parentNode)
    return -1;
  for (; r = r.previousElementSibling; )
    r.nodeName.toUpperCase() !== "TEMPLATE" && r !== re.clone && (!t || wr(r, t)) && e++;
  return e;
}
function Ro(r) {
  var t = 0, e = 0, n = at();
  if (r)
    do {
      var i = cn(r), a = i.a, o = i.d;
      t += r.scrollLeft * a, e += r.scrollTop * o;
    } while (r !== n && (r = r.parentNode));
  return [t, e];
}
function dh(r, t) {
  for (var e in r)
    if (r.hasOwnProperty(e)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === r[e][n])
          return Number(e);
    }
  return -1;
}
function St(r, t) {
  if (!r || !r.getBoundingClientRect)
    return at();
  var e = r, n = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var i = te(e);
      if (e.clientWidth < e.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body)
          return at();
        if (n || t)
          return e;
        n = !0;
      }
    }
  while (e = e.parentNode);
  return at();
}
function fh(r, t) {
  if (r && t)
    for (var e in t)
      t.hasOwnProperty(e) && (r[e] = t[e]);
  return r;
}
function Zr(r, t) {
  return Math.round(r.top) === Math.round(t.top) && Math.round(r.left) === Math.round(t.left) && Math.round(r.height) === Math.round(t.height) && Math.round(r.width) === Math.round(t.width);
}
var Pn;
function as(r, t) {
  return function() {
    if (!Pn) {
      var e = arguments, n = this;
      e.length === 1 ? r.call(n, e[0]) : r.apply(n, e), Pn = setTimeout(function() {
        Pn = void 0;
      }, t);
    }
  };
}
function hh() {
  clearTimeout(Pn), Pn = void 0;
}
function ss(r, t, e) {
  r.scrollLeft += t, r.scrollTop += e;
}
function ls(r) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(r).cloneNode(!0) : e ? e(r).clone(!0)[0] : r.cloneNode(!0);
}
function cs(r, t, e) {
  var n = {};
  return Array.from(r.children).forEach(function(i) {
    var a, o, s, l;
    if (!(!Je(i, t.draggable, r, !1) || i.animated || i === e)) {
      var u = Ee(i);
      n.left = Math.min((a = n.left) !== null && a !== void 0 ? a : 1 / 0, u.left), n.top = Math.min((o = n.top) !== null && o !== void 0 ? o : 1 / 0, u.top), n.right = Math.max((s = n.right) !== null && s !== void 0 ? s : -1 / 0, u.right), n.bottom = Math.max((l = n.bottom) !== null && l !== void 0 ? l : -1 / 0, u.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var Le = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function ph() {
  var r = [], t;
  return {
    captureAnimationState: function() {
      if (r = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(i) {
          if (!(te(i, "display") === "none" || i === re.ghost)) {
            r.push({
              target: i,
              rect: Ee(i)
            });
            var a = lt({}, r[r.length - 1].rect);
            if (i.thisAnimationDuration) {
              var o = cn(i, !0);
              o && (a.top -= o.f, a.left -= o.e);
            }
            i.fromRect = a;
          }
        });
      }
    },
    addAnimationState: function(n) {
      r.push(n);
    },
    removeAnimationState: function(n) {
      r.splice(dh(r, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var a = !1, o = 0;
      r.forEach(function(s) {
        var l = 0, u = s.target, d = u.fromRect, p = Ee(u), m = u.prevFromRect, E = u.prevToRect, b = s.rect, g = cn(u, !0);
        g && (p.top -= g.f, p.left -= g.e), u.toRect = p, u.thisAnimationDuration && Zr(m, p) && !Zr(d, p) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - p.top) / (b.left - p.left) === (d.top - p.top) / (d.left - p.left) && (l = mh(b, m, E, i.options)), Zr(p, d) || (u.prevFromRect = d, u.prevToRect = p, l || (l = i.options.animation), i.animate(u, b, p, l)), l && (a = !0, o = Math.max(o, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, l), u.thisAnimationDuration = l);
      }), clearTimeout(t), a ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, o) : typeof n == "function" && n(), r = [];
    },
    animate: function(n, i, a, o) {
      if (o) {
        te(n, "transition", ""), te(n, "transform", "");
        var s = cn(this.el), l = s && s.a, u = s && s.d, d = (i.left - a.left) / (l || 1), p = (i.top - a.top) / (u || 1);
        n.animatingX = !!d, n.animatingY = !!p, te(n, "transform", "translate3d(" + d + "px," + p + "px,0)"), this.forRepaintDummy = gh(n), te(n, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), te(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          te(n, "transition", ""), te(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, o);
      }
    }
  };
}
function gh(r) {
  return r.offsetWidth;
}
function mh(r, t, e, n) {
  return Math.sqrt(Math.pow(t.top - r.top, 2) + Math.pow(t.left - r.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * n.animation;
}
var en = [], ei = {
  initializeByDefault: !0
}, Un = {
  mount: function(t) {
    for (var e in ei)
      ei.hasOwnProperty(e) && !(e in t) && (t[e] = ei[e]);
    en.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), en.push(t);
  },
  pluginEvent: function(t, e, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var a = t + "Global";
    en.forEach(function(o) {
      e[o.pluginName] && (e[o.pluginName][a] && e[o.pluginName][a](lt({
        sortable: e
      }, n)), e.options[o.pluginName] && e[o.pluginName][t] && e[o.pluginName][t](lt({
        sortable: e
      }, n)));
    });
  },
  initializePlugins: function(t, e, n, i) {
    en.forEach(function(s) {
      var l = s.pluginName;
      if (!(!t.options[l] && !s.initializeByDefault)) {
        var u = new s(t, e, t.options);
        u.sortable = t, u.options = t.options, t[l] = u, _t(n, u.defaults);
      }
    });
    for (var a in t.options)
      if (t.options.hasOwnProperty(a)) {
        var o = this.modifyOption(t, a, t.options[a]);
        typeof o < "u" && (t.options[a] = o);
      }
  },
  getEventProperties: function(t, e) {
    var n = {};
    return en.forEach(function(i) {
      typeof i.eventProperties == "function" && _t(n, i.eventProperties.call(e[i.pluginName], t));
    }), n;
  },
  modifyOption: function(t, e, n) {
    var i;
    return en.forEach(function(a) {
      t[a.pluginName] && a.optionListeners && typeof a.optionListeners[e] == "function" && (i = a.optionListeners[e].call(t[a.pluginName], n));
    }), i;
  }
};
function vh(r) {
  var t = r.sortable, e = r.rootEl, n = r.name, i = r.targetEl, a = r.cloneEl, o = r.toEl, s = r.fromEl, l = r.oldIndex, u = r.newIndex, d = r.oldDraggableIndex, p = r.newDraggableIndex, m = r.originalEvent, E = r.putSortable, b = r.extraEventProperties;
  if (t = t || e && e[Le], !!t) {
    var g, y = t.options, M = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !yt && !Kn ? g = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (g = document.createEvent("Event"), g.initEvent(n, !0, !0)), g.to = o || e, g.from = s || e, g.item = i || e, g.clone = a, g.oldIndex = l, g.newIndex = u, g.oldDraggableIndex = d, g.newDraggableIndex = p, g.originalEvent = m, g.pullMode = E ? E.lastPutMode : void 0;
    var I = lt(lt({}, b), Un.getEventProperties(n, t));
    for (var $ in I)
      g[$] = I[$];
    e && e.dispatchEvent(g), y[M] && y[M].call(t, g);
  }
}
var _h = ["evt"], ke = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, a = ah(n, _h);
  Un.pluginEvent.bind(re)(t, e, lt({
    dragEl: G,
    parentEl: be,
    ghostEl: ie,
    rootEl: me,
    nextEl: Lt,
    lastDownEl: pr,
    cloneEl: _e,
    cloneHidden: Dt,
    dragStarted: An,
    putSortable: Ce,
    activeSortable: re.active,
    originalEvent: i,
    oldIndex: ln,
    oldDraggableIndex: In,
    newIndex: Fe,
    newDraggableIndex: Ct,
    hideGhostForTarget: hs,
    unhideGhostForTarget: ps,
    cloneNowHidden: function() {
      Dt = !0;
    },
    cloneNowShown: function() {
      Dt = !1;
    },
    dispatchSortableEvent: function(s) {
      xe({
        sortable: e,
        name: s,
        originalEvent: i
      });
    }
  }, a));
};
function xe(r) {
  vh(lt({
    putSortable: Ce,
    cloneEl: _e,
    targetEl: G,
    rootEl: me,
    oldIndex: ln,
    oldDraggableIndex: In,
    newIndex: Fe,
    newDraggableIndex: Ct
  }, r));
}
var G, be, ie, me, Lt, pr, _e, Dt, ln, Fe, In, Ct, or, Ce, an = !1, Cr = !1, Dr = [], Pt, Qe, ti, ni, Bo, Ho, An, tn, Ln, $n = !1, ar = !1, gr, Se, ri = [], wi = !1, Sr = [], Pr = typeof document < "u", sr = ji, Fo = Kn || yt ? "cssFloat" : "float", bh = Pr && !ns && !ji && "draggable" in document.createElement("div"), us = function() {
  if (Pr) {
    if (yt)
      return !1;
    var r = document.createElement("x");
    return r.style.cssText = "pointer-events:auto", r.style.pointerEvents === "auto";
  }
}(), ds = function(t, e) {
  var n = te(t), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), a = vn(t, 0, e), o = vn(t, 1, e), s = a && te(a), l = o && te(o), u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Ee(a).width, d = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Ee(o).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && s.float && s.float !== "none") {
    var p = s.float === "left" ? "left" : "right";
    return o && (l.clear === "both" || l.clear === p) ? "vertical" : "horizontal";
  }
  return a && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || u >= i && n[Fo] === "none" || o && n[Fo] === "none" && u + d > i) ? "vertical" : "horizontal";
}, yh = function(t, e, n) {
  var i = n ? t.left : t.top, a = n ? t.right : t.bottom, o = n ? t.width : t.height, s = n ? e.left : e.top, l = n ? e.right : e.bottom, u = n ? e.width : e.height;
  return i === s || a === l || i + o / 2 === s + u / 2;
}, Eh = function(t, e) {
  var n;
  return Dr.some(function(i) {
    var a = i[Le].options.emptyInsertThreshold;
    if (!(!a || zi(i))) {
      var o = Ee(i), s = t >= o.left - a && t <= o.right + a, l = e >= o.top - a && e <= o.bottom + a;
      if (s && l)
        return n = i;
    }
  }), n;
}, fs = function(t) {
  function e(a, o) {
    return function(s, l, u, d) {
      var p = s.options.group.name && l.options.group.name && s.options.group.name === l.options.group.name;
      if (a == null && (o || p))
        return !0;
      if (a == null || a === !1)
        return !1;
      if (o && a === "clone")
        return a;
      if (typeof a == "function")
        return e(a(s, l, u, d), o)(s, l, u, d);
      var m = (o ? s : l).options.group.name;
      return a === !0 || typeof a == "string" && a === m || a.join && a.indexOf(m) > -1;
    };
  }
  var n = {}, i = t.group;
  (!i || Ei(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = e(i.pull, !0), n.checkPut = e(i.put), n.revertClone = i.revertClone, t.group = n;
}, hs = function() {
  !us && ie && te(ie, "display", "none");
}, ps = function() {
  !us && ie && te(ie, "display", "");
};
Pr && !ns && document.addEventListener("click", function(r) {
  if (Cr)
    return r.preventDefault(), r.stopPropagation && r.stopPropagation(), r.stopImmediatePropagation && r.stopImmediatePropagation(), Cr = !1, !1;
}, !0);
var It = function(t) {
  if (G) {
    t = t.touches ? t.touches[0] : t;
    var e = Eh(t.clientX, t.clientY);
    if (e) {
      var n = {};
      for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
      n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[Le]._onDragOver(n);
    }
  }
}, wh = function(t) {
  G && G.parentNode[Le]._isOutsideThisEl(t.target);
};
function re(r, t) {
  if (!(r && r.nodeType && r.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(r));
  this.el = r, this.options = t = _t({}, t), r[Le] = this;
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(r.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return ds(r, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(o, s) {
      o.setData("Text", s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: re.supportPointer !== !1 && "PointerEvent" in window && (!kn || ji),
    emptyInsertThreshold: 5
  };
  Un.initializePlugins(this, r, e);
  for (var n in e)
    !(n in t) && (t[n] = e[n]);
  fs(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : bh, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? ce(r, "pointerdown", this._onTapStart) : (ce(r, "mousedown", this._onTapStart), ce(r, "touchstart", this._onTapStart)), this.nativeDraggable && (ce(r, "dragover", this), ce(r, "dragenter", this)), Dr.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), _t(this, ph());
}
re.prototype = /** @lends Sortable.prototype */
{
  constructor: re,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (tn = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, G) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var e = this, n = this.el, i = this.options, a = i.preventOnFilter, o = t.type, s = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, l = (s || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l, d = i.filter;
      if (Oh(n), !G && !(/mousedown|pointerdown/.test(o) && t.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && kn && l && l.tagName.toUpperCase() === "SELECT") && (l = Je(l, i.draggable, n, !1), !(l && l.animated) && pr !== l)) {
        if (ln = ze(l), In = ze(l, i.draggable), typeof d == "function") {
          if (d.call(this, t, l, this)) {
            xe({
              sortable: e,
              rootEl: u,
              name: "filter",
              targetEl: l,
              toEl: n,
              fromEl: n
            }), ke("filter", e, {
              evt: t
            }), a && t.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(p) {
          if (p = Je(u, p.trim(), n, !1), p)
            return xe({
              sortable: e,
              rootEl: p,
              name: "filter",
              targetEl: l,
              fromEl: n,
              toEl: n
            }), ke("filter", e, {
              evt: t
            }), !0;
        }), d)) {
          a && t.preventDefault();
          return;
        }
        i.handle && !Je(u, i.handle, n, !1) || this._prepareDragStart(t, s, l);
      }
    }
  },
  _prepareDragStart: function(t, e, n) {
    var i = this, a = i.el, o = i.options, s = a.ownerDocument, l;
    if (n && !G && n.parentNode === a) {
      var u = Ee(n);
      if (me = a, G = n, be = G.parentNode, Lt = G.nextSibling, pr = n, or = o.group, re.dragged = G, Pt = {
        target: G,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, Bo = Pt.clientX - u.left, Ho = Pt.clientY - u.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, G.style["will-change"] = "all", l = function() {
        if (ke("delayEnded", i, {
          evt: t
        }), re.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Io && i.nativeDraggable && (G.draggable = !0), i._triggerDragStart(t, e), xe({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), Be(G, o.chosenClass, !0);
      }, o.ignore.split(",").forEach(function(d) {
        os(G, d.trim(), ii);
      }), ce(s, "dragover", It), ce(s, "mousemove", It), ce(s, "touchmove", It), o.supportPointer ? (ce(s, "pointerup", i._onDrop), !this.nativeDraggable && ce(s, "pointercancel", i._onDrop)) : (ce(s, "mouseup", i._onDrop), ce(s, "touchend", i._onDrop), ce(s, "touchcancel", i._onDrop)), Io && this.nativeDraggable && (this.options.touchStartThreshold = 4, G.draggable = !0), ke("delayStart", this, {
        evt: t
      }), o.delay && (!o.delayOnTouchOnly || e) && (!this.nativeDraggable || !(Kn || yt))) {
        if (re.eventCanceled) {
          this._onDrop();
          return;
        }
        o.supportPointer ? (ce(s, "pointerup", i._disableDelayedDrag), ce(s, "pointercancel", i._disableDelayedDrag)) : (ce(s, "mouseup", i._disableDelayedDrag), ce(s, "touchend", i._disableDelayedDrag), ce(s, "touchcancel", i._disableDelayedDrag)), ce(s, "mousemove", i._delayedDragTouchMoveHandler), ce(s, "touchmove", i._delayedDragTouchMoveHandler), o.supportPointer && ce(s, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(l, o.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    G && ii(G), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    le(t, "mouseup", this._disableDelayedDrag), le(t, "touchend", this._disableDelayedDrag), le(t, "touchcancel", this._disableDelayedDrag), le(t, "pointerup", this._disableDelayedDrag), le(t, "pointercancel", this._disableDelayedDrag), le(t, "mousemove", this._delayedDragTouchMoveHandler), le(t, "touchmove", this._delayedDragTouchMoveHandler), le(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? ce(document, "pointermove", this._onTouchMove) : e ? ce(document, "touchmove", this._onTouchMove) : ce(document, "mousemove", this._onTouchMove) : (ce(G, "dragend", this), ce(me, "dragstart", this._onDragStart));
    try {
      document.selection ? mr(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (an = !1, me && G) {
      ke("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && ce(document, "dragover", wh);
      var n = this.options;
      !t && Be(G, n.dragClass, !1), Be(G, n.ghostClass, !0), re.active = this, t && this._appendGhost(), xe({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Qe) {
      this._lastX = Qe.clientX, this._lastY = Qe.clientY, hs();
      for (var t = document.elementFromPoint(Qe.clientX, Qe.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Qe.clientX, Qe.clientY), t !== e); )
        e = t;
      if (G.parentNode[Le]._isOutsideThisEl(t), e)
        do {
          if (e[Le]) {
            var n = void 0;
            if (n = e[Le]._onDragOver({
              clientX: Qe.clientX,
              clientY: Qe.clientY,
              target: t,
              rootEl: e
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = is(e));
      ps();
    }
  },
  _onTouchMove: function(t) {
    if (Pt) {
      var e = this.options, n = e.fallbackTolerance, i = e.fallbackOffset, a = t.touches ? t.touches[0] : t, o = ie && cn(ie, !0), s = ie && o && o.a, l = ie && o && o.d, u = sr && Se && Ro(Se), d = (a.clientX - Pt.clientX + i.x) / (s || 1) + (u ? u[0] - ri[0] : 0) / (s || 1), p = (a.clientY - Pt.clientY + i.y) / (l || 1) + (u ? u[1] - ri[1] : 0) / (l || 1);
      if (!re.active && !an) {
        if (n && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (ie) {
        o ? (o.e += d - (ti || 0), o.f += p - (ni || 0)) : o = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: p
        };
        var m = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
        te(ie, "webkitTransform", m), te(ie, "mozTransform", m), te(ie, "msTransform", m), te(ie, "transform", m), ti = d, ni = p, Qe = a;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ie) {
      var t = this.options.fallbackOnBody ? document.body : me, e = Ee(G, !0, sr, !0, t), n = this.options;
      if (sr) {
        for (Se = t; te(Se, "position") === "static" && te(Se, "transform") === "none" && Se !== document; )
          Se = Se.parentNode;
        Se !== document.body && Se !== document.documentElement ? (Se === document && (Se = at()), e.top += Se.scrollTop, e.left += Se.scrollLeft) : Se = at(), ri = Ro(Se);
      }
      ie = G.cloneNode(!0), Be(ie, n.ghostClass, !1), Be(ie, n.fallbackClass, !0), Be(ie, n.dragClass, !0), te(ie, "transition", ""), te(ie, "transform", ""), te(ie, "box-sizing", "border-box"), te(ie, "margin", 0), te(ie, "top", e.top), te(ie, "left", e.left), te(ie, "width", e.width), te(ie, "height", e.height), te(ie, "opacity", "0.8"), te(ie, "position", sr ? "absolute" : "fixed"), te(ie, "zIndex", "100000"), te(ie, "pointerEvents", "none"), re.ghost = ie, t.appendChild(ie), te(ie, "transform-origin", Bo / parseInt(ie.style.width) * 100 + "% " + Ho / parseInt(ie.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var n = this, i = t.dataTransfer, a = n.options;
    if (ke("dragStart", this, {
      evt: t
    }), re.eventCanceled) {
      this._onDrop();
      return;
    }
    ke("setupClone", this), re.eventCanceled || (_e = ls(G), _e.removeAttribute("id"), _e.draggable = !1, _e.style["will-change"] = "", this._hideClone(), Be(_e, this.options.chosenClass, !1), re.clone = _e), n.cloneId = mr(function() {
      ke("clone", n), !re.eventCanceled && (n.options.removeCloneOnHide || me.insertBefore(_e, G), n._hideClone(), xe({
        sortable: n,
        name: "clone"
      }));
    }), !e && Be(G, a.dragClass, !0), e ? (Cr = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (le(document, "mouseup", n._onDrop), le(document, "touchend", n._onDrop), le(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", a.setData && a.setData.call(n, i, G)), ce(document, "drop", n), te(G, "transform", "translateZ(0)")), an = !0, n._dragStartId = mr(n._dragStarted.bind(n, e, t)), ce(document, "selectstart", n), An = !0, window.getSelection().removeAllRanges(), kn && te(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var e = this.el, n = t.target, i, a, o, s = this.options, l = s.group, u = re.active, d = or === l, p = s.sort, m = Ce || u, E, b = this, g = !1;
    if (wi)
      return;
    function y(v, w) {
      ke(v, b, lt({
        evt: t,
        isOwner: d,
        axis: E ? "vertical" : "horizontal",
        revert: o,
        dragRect: i,
        targetRect: a,
        canSort: p,
        fromSortable: m,
        target: n,
        completed: I,
        onMove: function(j, T) {
          return lr(me, e, G, i, j, Ee(j), t, T);
        },
        changed: $
      }, w));
    }
    function M() {
      y("dragOverAnimationCapture"), b.captureAnimationState(), b !== m && m.captureAnimationState();
    }
    function I(v) {
      return y("dragOverCompleted", {
        insertion: v
      }), v && (d ? u._hideClone() : u._showClone(b), b !== m && (Be(G, Ce ? Ce.options.ghostClass : u.options.ghostClass, !1), Be(G, s.ghostClass, !0)), Ce !== b && b !== re.active ? Ce = b : b === re.active && Ce && (Ce = null), m === b && (b._ignoreWhileAnimating = n), b.animateAll(function() {
        y("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === G && !G.animated || n === e && !n.animated) && (tn = null), !s.dragoverBubble && !t.rootEl && n !== document && (G.parentNode[Le]._isOutsideThisEl(t.target), !v && It(t)), !s.dragoverBubble && t.stopPropagation && t.stopPropagation(), g = !0;
    }
    function $() {
      Fe = ze(G), Ct = ze(G, s.draggable), xe({
        sortable: b,
        name: "change",
        toEl: e,
        newIndex: Fe,
        newDraggableIndex: Ct,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = Je(n, s.draggable, e, !0), y("dragOver"), re.eventCanceled)
      return g;
    if (G.contains(t.target) || n.animated && n.animatingX && n.animatingY || b._ignoreWhileAnimating === n)
      return I(!1);
    if (Cr = !1, u && !s.disabled && (d ? p || (o = be !== me) : Ce === this || (this.lastPutMode = or.checkPull(this, u, G, t)) && l.checkPut(this, u, G, t))) {
      if (E = this._getDirection(t, n) === "vertical", i = Ee(G), y("dragOverValid"), re.eventCanceled)
        return g;
      if (o)
        return be = me, M(), this._hideClone(), y("revert"), re.eventCanceled || (Lt ? me.insertBefore(G, Lt) : me.appendChild(G)), I(!0);
      var F = zi(e, s.draggable);
      if (!F || Th(t, E, this) && !F.animated) {
        if (F === G)
          return I(!1);
        if (F && e === t.target && (n = F), n && (a = Ee(n)), lr(me, e, G, i, n, a, t, !!n) !== !1)
          return M(), F && F.nextSibling ? e.insertBefore(G, F.nextSibling) : e.appendChild(G), be = e, $(), I(!0);
      } else if (F && Sh(t, E, this)) {
        var R = vn(e, 0, s, !0);
        if (R === G)
          return I(!1);
        if (n = R, a = Ee(n), lr(me, e, G, i, n, a, t, !1) !== !1)
          return M(), e.insertBefore(G, R), be = e, $(), I(!0);
      } else if (n.parentNode === e) {
        a = Ee(n);
        var N = 0, x, D = G.parentNode !== e, Y = !yh(G.animated && G.toRect || i, n.animated && n.toRect || a, E), W = E ? "top" : "left", B = $o(n, "top", "top") || $o(G, "top", "top"), J = B ? B.scrollTop : void 0;
        tn !== n && (x = a[W], $n = !1, ar = !Y && s.invertSwap || D), N = Ah(t, n, a, E, Y ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, ar, tn === n);
        var U;
        if (N !== 0) {
          var H = ze(G);
          do
            H -= N, U = be.children[H];
          while (U && (te(U, "display") === "none" || U === ie));
        }
        if (N === 0 || U === n)
          return I(!1);
        tn = n, Ln = N;
        var k = n.nextElementSibling, A = !1;
        A = N === 1;
        var c = lr(me, e, G, i, n, a, t, A);
        if (c !== !1)
          return (c === 1 || c === -1) && (A = c === 1), wi = !0, setTimeout(Dh, 30), M(), A && !k ? e.appendChild(G) : n.parentNode.insertBefore(G, A ? k : n), B && ss(B, 0, J - B.scrollTop), be = G.parentNode, x !== void 0 && !ar && (gr = Math.abs(x - Ee(n)[W])), $(), I(!0);
      }
      if (e.contains(G))
        return I(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    le(document, "mousemove", this._onTouchMove), le(document, "touchmove", this._onTouchMove), le(document, "pointermove", this._onTouchMove), le(document, "dragover", It), le(document, "mousemove", It), le(document, "touchmove", It);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    le(t, "mouseup", this._onDrop), le(t, "touchend", this._onDrop), le(t, "pointerup", this._onDrop), le(t, "pointercancel", this._onDrop), le(t, "touchcancel", this._onDrop), le(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, n = this.options;
    if (Fe = ze(G), Ct = ze(G, n.draggable), ke("drop", this, {
      evt: t
    }), be = G && G.parentNode, Fe = ze(G), Ct = ze(G, n.draggable), re.eventCanceled) {
      this._nulling();
      return;
    }
    an = !1, ar = !1, $n = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ci(this.cloneId), Ci(this._dragStartId), this.nativeDraggable && (le(document, "drop", this), le(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), kn && te(document.body, "user-select", ""), te(G, "transform", ""), t && (An && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), ie && ie.parentNode && ie.parentNode.removeChild(ie), (me === be || Ce && Ce.lastPutMode !== "clone") && _e && _e.parentNode && _e.parentNode.removeChild(_e), G && (this.nativeDraggable && le(G, "dragend", this), ii(G), G.style["will-change"] = "", An && !an && Be(G, Ce ? Ce.options.ghostClass : this.options.ghostClass, !1), Be(G, this.options.chosenClass, !1), xe({
      sortable: this,
      name: "unchoose",
      toEl: be,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), me !== be ? (Fe >= 0 && (xe({
      rootEl: be,
      name: "add",
      toEl: be,
      fromEl: me,
      originalEvent: t
    }), xe({
      sortable: this,
      name: "remove",
      toEl: be,
      originalEvent: t
    }), xe({
      rootEl: be,
      name: "sort",
      toEl: be,
      fromEl: me,
      originalEvent: t
    }), xe({
      sortable: this,
      name: "sort",
      toEl: be,
      originalEvent: t
    })), Ce && Ce.save()) : Fe !== ln && Fe >= 0 && (xe({
      sortable: this,
      name: "update",
      toEl: be,
      originalEvent: t
    }), xe({
      sortable: this,
      name: "sort",
      toEl: be,
      originalEvent: t
    })), re.active && ((Fe == null || Fe === -1) && (Fe = ln, Ct = In), xe({
      sortable: this,
      name: "end",
      toEl: be,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ke("nulling", this), me = G = be = ie = Lt = _e = pr = Dt = Pt = Qe = An = Fe = Ct = ln = In = tn = Ln = Ce = or = re.dragged = re.ghost = re.clone = re.active = null;
    var t = this.el;
    Sr.forEach(function(e) {
      t.contains(e) && (e.checked = !0);
    }), Sr.length = ti = ni = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        G && (this._onDragOver(t), Ch(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], e, n = this.el.children, i = 0, a = n.length, o = this.options; i < a; i++)
      e = n[i], Je(e, o.draggable, this.el, !1) && t.push(e.getAttribute(o.dataIdAttr) || xh(e));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, e) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(a, o) {
      var s = i.children[o];
      Je(s, this.options.draggable, i, !1) && (n[a] = s);
    }, this), e && this.captureAnimationState(), t.forEach(function(a) {
      n[a] && (i.removeChild(n[a]), i.appendChild(n[a]));
    }), e && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, e) {
    return Je(t, e || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, e) {
    var n = this.options;
    if (e === void 0)
      return n[t];
    var i = Un.modifyOption(this, t, e);
    typeof i < "u" ? n[t] = i : n[t] = e, t === "group" && fs(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    ke("destroy", this);
    var t = this.el;
    t[Le] = null, le(t, "mousedown", this._onTapStart), le(t, "touchstart", this._onTapStart), le(t, "pointerdown", this._onTapStart), this.nativeDraggable && (le(t, "dragover", this), le(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Dr.splice(Dr.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Dt) {
      if (ke("hideClone", this), re.eventCanceled)
        return;
      te(_e, "display", "none"), this.options.removeCloneOnHide && _e.parentNode && _e.parentNode.removeChild(_e), Dt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Dt) {
      if (ke("showClone", this), re.eventCanceled)
        return;
      G.parentNode == me && !this.options.group.revertClone ? me.insertBefore(_e, G) : Lt ? me.insertBefore(_e, Lt) : me.appendChild(_e), this.options.group.revertClone && this.animate(G, _e), te(_e, "display", ""), Dt = !1;
    }
  }
};
function Ch(r) {
  r.dataTransfer && (r.dataTransfer.dropEffect = "move"), r.cancelable && r.preventDefault();
}
function lr(r, t, e, n, i, a, o, s) {
  var l, u = r[Le], d = u.options.onMove, p;
  return window.CustomEvent && !yt && !Kn ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = t, l.from = r, l.dragged = e, l.draggedRect = n, l.related = i || t, l.relatedRect = a || Ee(t), l.willInsertAfter = s, l.originalEvent = o, r.dispatchEvent(l), d && (p = d.call(u, l, o)), p;
}
function ii(r) {
  r.draggable = !1;
}
function Dh() {
  wi = !1;
}
function Sh(r, t, e) {
  var n = Ee(vn(e.el, 0, e.options, !0)), i = cs(e.el, e.options, ie), a = 10;
  return t ? r.clientX < i.left - a || r.clientY < n.top && r.clientX < n.right : r.clientY < i.top - a || r.clientY < n.bottom && r.clientX < n.left;
}
function Th(r, t, e) {
  var n = Ee(zi(e.el, e.options.draggable)), i = cs(e.el, e.options, ie), a = 10;
  return t ? r.clientX > i.right + a || r.clientY > n.bottom && r.clientX > n.left : r.clientY > i.bottom + a || r.clientX > n.right && r.clientY > n.top;
}
function Ah(r, t, e, n, i, a, o, s) {
  var l = n ? r.clientY : r.clientX, u = n ? e.height : e.width, d = n ? e.top : e.left, p = n ? e.bottom : e.right, m = !1;
  if (!o) {
    if (s && gr < u * i) {
      if (!$n && (Ln === 1 ? l > d + u * a / 2 : l < p - u * a / 2) && ($n = !0), $n)
        m = !0;
      else if (Ln === 1 ? l < d + gr : l > p - gr)
        return -Ln;
    } else if (l > d + u * (1 - i) / 2 && l < p - u * (1 - i) / 2)
      return Mh(t);
  }
  return m = m || o, m && (l < d + u * a / 2 || l > p - u * a / 2) ? l > d + u / 2 ? 1 : -1 : 0;
}
function Mh(r) {
  return ze(G) < ze(r) ? 1 : -1;
}
function xh(r) {
  for (var t = r.tagName + r.className + r.src + r.href + r.textContent, e = t.length, n = 0; e--; )
    n += t.charCodeAt(e);
  return n.toString(36);
}
function Oh(r) {
  Sr.length = 0;
  for (var t = r.getElementsByTagName("input"), e = t.length; e--; ) {
    var n = t[e];
    n.checked && Sr.push(n);
  }
}
function mr(r) {
  return setTimeout(r, 0);
}
function Ci(r) {
  return clearTimeout(r);
}
Pr && ce(document, "touchmove", function(r) {
  (re.active || an) && r.cancelable && r.preventDefault();
});
re.utils = {
  on: ce,
  off: le,
  css: te,
  find: os,
  is: function(t, e) {
    return !!Je(t, e, t, !1);
  },
  extend: fh,
  throttle: as,
  closest: Je,
  toggleClass: Be,
  clone: ls,
  index: ze,
  nextTick: mr,
  cancelNextTick: Ci,
  detectDirection: ds,
  getChild: vn,
  expando: Le
};
re.get = function(r) {
  return r[Le];
};
re.mount = function() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (re.utils = lt(lt({}, re.utils), n.utils)), Un.mount(n);
  });
};
re.create = function(r, t) {
  return new re(r, t);
};
re.version = uh;
var ye = [], Mn, Di, Si = !1, oi, ai, Tr, xn;
function Nh() {
  function r() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return r.prototype = {
    dragStarted: function(e) {
      var n = e.originalEvent;
      this.sortable.nativeDraggable ? ce(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ce(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? ce(document, "touchmove", this._handleFallbackAutoScroll) : ce(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var n = e.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? le(document, "dragover", this._handleAutoScroll) : (le(document, "pointermove", this._handleFallbackAutoScroll), le(document, "touchmove", this._handleFallbackAutoScroll), le(document, "mousemove", this._handleFallbackAutoScroll)), Yo(), vr(), hh();
    },
    nulling: function() {
      Tr = Di = Mn = Si = xn = oi = ai = null, ye.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, n) {
      var i = this, a = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, s = document.elementFromPoint(a, o);
      if (Tr = e, n || this.options.forceAutoScrollFallback || Kn || yt || kn) {
        si(e, this.options, s, n);
        var l = St(s, !0);
        Si && (!xn || a !== oi || o !== ai) && (xn && Yo(), xn = setInterval(function() {
          var u = St(document.elementFromPoint(a, o), !0);
          u !== l && (l = u, vr()), si(e, i.options, u, n);
        }, 10), oi = a, ai = o);
      } else {
        if (!this.options.bubbleScroll || St(s, !0) === at()) {
          vr();
          return;
        }
        si(e, this.options, St(s, !1), !1);
      }
    }
  }, _t(r, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function vr() {
  ye.forEach(function(r) {
    clearInterval(r.pid);
  }), ye = [];
}
function Yo() {
  clearInterval(xn);
}
var si = as(function(r, t, e, n) {
  if (t.scroll) {
    var i = (r.touches ? r.touches[0] : r).clientX, a = (r.touches ? r.touches[0] : r).clientY, o = t.scrollSensitivity, s = t.scrollSpeed, l = at(), u = !1, d;
    Di !== e && (Di = e, vr(), Mn = t.scroll, d = t.scrollFn, Mn === !0 && (Mn = St(e, !0)));
    var p = 0, m = Mn;
    do {
      var E = m, b = Ee(E), g = b.top, y = b.bottom, M = b.left, I = b.right, $ = b.width, F = b.height, R = void 0, N = void 0, x = E.scrollWidth, D = E.scrollHeight, Y = te(E), W = E.scrollLeft, B = E.scrollTop;
      E === l ? (R = $ < x && (Y.overflowX === "auto" || Y.overflowX === "scroll" || Y.overflowX === "visible"), N = F < D && (Y.overflowY === "auto" || Y.overflowY === "scroll" || Y.overflowY === "visible")) : (R = $ < x && (Y.overflowX === "auto" || Y.overflowX === "scroll"), N = F < D && (Y.overflowY === "auto" || Y.overflowY === "scroll"));
      var J = R && (Math.abs(I - i) <= o && W + $ < x) - (Math.abs(M - i) <= o && !!W), U = N && (Math.abs(y - a) <= o && B + F < D) - (Math.abs(g - a) <= o && !!B);
      if (!ye[p])
        for (var H = 0; H <= p; H++)
          ye[H] || (ye[H] = {});
      (ye[p].vx != J || ye[p].vy != U || ye[p].el !== E) && (ye[p].el = E, ye[p].vx = J, ye[p].vy = U, clearInterval(ye[p].pid), (J != 0 || U != 0) && (u = !0, ye[p].pid = setInterval((function() {
        n && this.layer === 0 && re.active._onTouchMove(Tr);
        var k = ye[this.layer].vy ? ye[this.layer].vy * s : 0, A = ye[this.layer].vx ? ye[this.layer].vx * s : 0;
        typeof d == "function" && d.call(re.dragged.parentNode[Le], A, k, r, Tr, ye[this.layer].el) !== "continue" || ss(ye[this.layer].el, A, k);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && m !== l && (m = St(m, !1)));
    Si = u;
  }
}, 30), gs = function(t) {
  var e = t.originalEvent, n = t.putSortable, i = t.dragEl, a = t.activeSortable, o = t.dispatchSortableEvent, s = t.hideGhostForTarget, l = t.unhideGhostForTarget;
  if (e) {
    var u = n || a;
    s();
    var d = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, p = document.elementFromPoint(d.clientX, d.clientY);
    l(), u && !u.el.contains(p) && (o("spill"), this.onSpill({
      dragEl: i,
      putSortable: n
    }));
  }
};
function Gi() {
}
Gi.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = vn(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(e, i) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: gs
};
_t(Gi, {
  pluginName: "revertOnSpill"
});
function Ki() {
}
Ki.prototype = {
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable, i = n || this.sortable;
    i.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), i.animateAll();
  },
  drop: gs
};
_t(Ki, {
  pluginName: "removeOnSpill"
});
re.mount(new Nh());
re.mount(Ki, Gi);
var li = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
], un = {
  _disable: [],
  allowInput: !1,
  allowInvalidPreload: !1,
  altFormat: "F j, Y",
  altInput: !1,
  altInputClass: "form-control input",
  animate: typeof window == "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: !0,
  clickOpens: !0,
  closeOnSelect: !0,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: !1,
  enableSeconds: !1,
  enableTime: !1,
  errorHandler: function(r) {
    return typeof console < "u" && console.warn(r);
  },
  getWeek: function(r) {
    var t = new Date(r.getTime());
    t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
    var e = new Date(t.getFullYear(), 0, 4);
    return 1 + Math.round(((t.getTime() - e.getTime()) / 864e5 - 3 + (e.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: !1,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: !1,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: !1,
  showMonths: 1,
  static: !1,
  time_24hr: !1,
  weekNumbers: !1,
  wrap: !1
}, Bn = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(r) {
    var t = r % 100;
    if (t > 3 && t < 21)
      return "th";
    switch (t % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: !1
}, Pe = function(r, t) {
  return t === void 0 && (t = 2), ("000" + r).slice(t * -1);
}, je = function(r) {
  return r === !0 ? 1 : 0;
};
function Wo(r, t) {
  var e;
  return function() {
    var n = this, i = arguments;
    clearTimeout(e), e = setTimeout(function() {
      return r.apply(n, i);
    }, t);
  };
}
var ci = function(r) {
  return r instanceof Array ? r : [r];
};
function Me(r, t, e) {
  if (e === !0)
    return r.classList.add(t);
  r.classList.remove(t);
}
function ue(r, t, e) {
  var n = window.document.createElement(r);
  return t = t || "", e = e || "", n.className = t, e !== void 0 && (n.textContent = e), n;
}
function cr(r) {
  for (; r.firstChild; )
    r.removeChild(r.firstChild);
}
function ms(r, t) {
  if (t(r))
    return r;
  if (r.parentNode)
    return ms(r.parentNode, t);
}
function ur(r, t) {
  var e = ue("div", "numInputWrapper"), n = ue("input", "numInput " + r), i = ue("span", "arrowUp"), a = ue("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1 ? n.type = "number" : (n.type = "text", n.pattern = "\\d*"), t !== void 0)
    for (var o in t)
      n.setAttribute(o, t[o]);
  return e.appendChild(n), e.appendChild(i), e.appendChild(a), e;
}
function Re(r) {
  try {
    if (typeof r.composedPath == "function") {
      var t = r.composedPath();
      return t[0];
    }
    return r.target;
  } catch {
    return r.target;
  }
}
var ui = function() {
}, Ar = function(r, t, e) {
  return e.months[t ? "shorthand" : "longhand"][r];
}, kh = {
  D: ui,
  F: function(r, t, e) {
    r.setMonth(e.months.longhand.indexOf(t));
  },
  G: function(r, t) {
    r.setHours((r.getHours() >= 12 ? 12 : 0) + parseFloat(t));
  },
  H: function(r, t) {
    r.setHours(parseFloat(t));
  },
  J: function(r, t) {
    r.setDate(parseFloat(t));
  },
  K: function(r, t, e) {
    r.setHours(r.getHours() % 12 + 12 * je(new RegExp(e.amPM[1], "i").test(t)));
  },
  M: function(r, t, e) {
    r.setMonth(e.months.shorthand.indexOf(t));
  },
  S: function(r, t) {
    r.setSeconds(parseFloat(t));
  },
  U: function(r, t) {
    return new Date(parseFloat(t) * 1e3);
  },
  W: function(r, t, e) {
    var n = parseInt(t), i = new Date(r.getFullYear(), 0, 2 + (n - 1) * 7, 0, 0, 0, 0);
    return i.setDate(i.getDate() - i.getDay() + e.firstDayOfWeek), i;
  },
  Y: function(r, t) {
    r.setFullYear(parseFloat(t));
  },
  Z: function(r, t) {
    return new Date(t);
  },
  d: function(r, t) {
    r.setDate(parseFloat(t));
  },
  h: function(r, t) {
    r.setHours((r.getHours() >= 12 ? 12 : 0) + parseFloat(t));
  },
  i: function(r, t) {
    r.setMinutes(parseFloat(t));
  },
  j: function(r, t) {
    r.setDate(parseFloat(t));
  },
  l: ui,
  m: function(r, t) {
    r.setMonth(parseFloat(t) - 1);
  },
  n: function(r, t) {
    r.setMonth(parseFloat(t) - 1);
  },
  s: function(r, t) {
    r.setSeconds(parseFloat(t));
  },
  u: function(r, t) {
    return new Date(parseFloat(t));
  },
  w: ui,
  y: function(r, t) {
    r.setFullYear(2e3 + parseFloat(t));
  }
}, $t = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
}, Rn = {
  Z: function(r) {
    return r.toISOString();
  },
  D: function(r, t, e) {
    return t.weekdays.shorthand[Rn.w(r, t, e)];
  },
  F: function(r, t, e) {
    return Ar(Rn.n(r, t, e) - 1, !1, t);
  },
  G: function(r, t, e) {
    return Pe(Rn.h(r, t, e));
  },
  H: function(r) {
    return Pe(r.getHours());
  },
  J: function(r, t) {
    return t.ordinal !== void 0 ? r.getDate() + t.ordinal(r.getDate()) : r.getDate();
  },
  K: function(r, t) {
    return t.amPM[je(r.getHours() > 11)];
  },
  M: function(r, t) {
    return Ar(r.getMonth(), !0, t);
  },
  S: function(r) {
    return Pe(r.getSeconds());
  },
  U: function(r) {
    return r.getTime() / 1e3;
  },
  W: function(r, t, e) {
    return e.getWeek(r);
  },
  Y: function(r) {
    return Pe(r.getFullYear(), 4);
  },
  d: function(r) {
    return Pe(r.getDate());
  },
  h: function(r) {
    return r.getHours() % 12 ? r.getHours() % 12 : 12;
  },
  i: function(r) {
    return Pe(r.getMinutes());
  },
  j: function(r) {
    return r.getDate();
  },
  l: function(r, t) {
    return t.weekdays.longhand[r.getDay()];
  },
  m: function(r) {
    return Pe(r.getMonth() + 1);
  },
  n: function(r) {
    return r.getMonth() + 1;
  },
  s: function(r) {
    return r.getSeconds();
  },
  u: function(r) {
    return r.getTime();
  },
  w: function(r) {
    return r.getDay();
  },
  y: function(r) {
    return String(r.getFullYear()).substring(2);
  }
}, vs = function(r) {
  var t = r.config, e = t === void 0 ? un : t, n = r.l10n, i = n === void 0 ? Bn : n, a = r.isMobile, o = a === void 0 ? !1 : a;
  return function(s, l, u) {
    var d = u || i;
    return e.formatDate !== void 0 && !o ? e.formatDate(s, l, d) : l.split("").map(function(p, m, E) {
      return Rn[p] && E[m - 1] !== "\\" ? Rn[p](s, d, e) : p !== "\\" ? p : "";
    }).join("");
  };
}, Ti = function(r) {
  var t = r.config, e = t === void 0 ? un : t, n = r.l10n, i = n === void 0 ? Bn : n;
  return function(a, o, s, l) {
    if (!(a !== 0 && !a)) {
      var u = l || i, d, p = a;
      if (a instanceof Date)
        d = new Date(a.getTime());
      else if (typeof a != "string" && a.toFixed !== void 0)
        d = new Date(a);
      else if (typeof a == "string") {
        var m = o || (e || un).dateFormat, E = String(a).trim();
        if (E === "today")
          d = /* @__PURE__ */ new Date(), s = !0;
        else if (e && e.parseDate)
          d = e.parseDate(a, m);
        else if (/Z$/.test(E) || /GMT$/.test(E))
          d = new Date(a);
        else {
          for (var b = void 0, g = [], y = 0, M = 0, I = ""; y < m.length; y++) {
            var $ = m[y], F = $ === "\\", R = m[y - 1] === "\\" || F;
            if ($t[$] && !R) {
              I += $t[$];
              var N = new RegExp(I).exec(a);
              N && (b = !0) && g[$ !== "Y" ? "push" : "unshift"]({
                fn: kh[$],
                val: N[++M]
              });
            } else
              F || (I += ".");
          }
          d = !e || !e.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), g.forEach(function(x) {
            var D = x.fn, Y = x.val;
            return d = D(d, Y, u) || d;
          }), d = b ? d : void 0;
        }
      }
      if (!(d instanceof Date && !isNaN(d.getTime()))) {
        e.errorHandler(new Error("Invalid date provided: " + p));
        return;
      }
      return s === !0 && d.setHours(0, 0, 0, 0), d;
    }
  };
};
function He(r, t, e) {
  return e === void 0 && (e = !0), e !== !1 ? new Date(r.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : r.getTime() - t.getTime();
}
var Ph = function(r, t, e) {
  return r > Math.min(t, e) && r < Math.max(t, e);
}, di = function(r, t, e) {
  return r * 3600 + t * 60 + e;
}, Ih = function(r) {
  var t = Math.floor(r / 3600), e = (r - t * 3600) / 60;
  return [t, e, r - t * 3600 - e * 60];
}, Lh = {
  DAY: 864e5
};
function fi(r) {
  var t = r.defaultHour, e = r.defaultMinute, n = r.defaultSeconds;
  if (r.minDate !== void 0) {
    var i = r.minDate.getHours(), a = r.minDate.getMinutes(), o = r.minDate.getSeconds();
    t < i && (t = i), t === i && e < a && (e = a), t === i && e === a && n < o && (n = r.minDate.getSeconds());
  }
  if (r.maxDate !== void 0) {
    var s = r.maxDate.getHours(), l = r.maxDate.getMinutes();
    t = Math.min(t, s), t === s && (e = Math.min(l, e)), t === s && e === l && (n = r.maxDate.getSeconds());
  }
  return { hours: t, minutes: e, seconds: n };
}
typeof Object.assign != "function" && (Object.assign = function(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  if (!r)
    throw TypeError("Cannot convert undefined or null to object");
  for (var n = function(s) {
    s && Object.keys(s).forEach(function(l) {
      return r[l] = s[l];
    });
  }, i = 0, a = t; i < a.length; i++) {
    var o = a[i];
    n(o);
  }
  return r;
});
var Te = function() {
  return Te = Object.assign || function(r) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, Te.apply(this, arguments);
}, Vo = function() {
  for (var r = 0, t = 0, e = arguments.length; t < e; t++)
    r += arguments[t].length;
  for (var n = Array(r), i = 0, t = 0; t < e; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}, $h = 300;
function Rh(r, t) {
  var e = {
    config: Te(Te({}, un), we.defaultConfig),
    l10n: Bn
  };
  e.parseDate = Ti({ config: e.config, l10n: e.l10n }), e._handlers = [], e.pluginElements = [], e.loadedPlugins = [], e._bind = g, e._setHoursFromDate = m, e._positionCalendar = nt, e.changeMonth = j, e.changeYear = Z, e.clear = T, e.close = O, e.onMouseOver = fe, e._createElement = ue, e.createDay = N, e.destroy = L, e.isEnabled = ae, e.jumpToDate = I, e.updateValue = ft, e.open = qe, e.redraw = wn, e.set = Xn, e.setDate = qn, e.toggle = ws;
  function n() {
    e.utils = {
      getDaysInMonth: function(f, h) {
        return f === void 0 && (f = e.currentMonth), h === void 0 && (h = e.currentYear), f === 1 && (h % 4 === 0 && h % 100 !== 0 || h % 400 === 0) ? 29 : e.l10n.daysInMonth[f];
      }
    };
  }
  function i() {
    e.element = e.input = r, e.isOpen = !1, tt(), Et(), ys(), bs(), n(), e.isMobile || R(), M(), (e.selectedDates.length || e.config.noCalendar) && (e.config.enableTime && m(e.config.noCalendar ? e.latestSelectedDateObj : void 0), ft(!1)), s();
    var f = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    !e.isMobile && f && nt(), ve("onReady");
  }
  function a() {
    var f;
    return ((f = e.calendarContainer) === null || f === void 0 ? void 0 : f.getRootNode()).activeElement || document.activeElement;
  }
  function o(f) {
    return f.bind(e);
  }
  function s() {
    var f = e.config;
    f.weekNumbers === !1 && f.showMonths === 1 || f.noCalendar !== !0 && window.requestAnimationFrame(function() {
      if (e.calendarContainer !== void 0 && (e.calendarContainer.style.visibility = "hidden", e.calendarContainer.style.display = "block"), e.daysContainer !== void 0) {
        var h = (e.days.offsetWidth + 1) * f.showMonths;
        e.daysContainer.style.width = h + "px", e.calendarContainer.style.width = h + (e.weekWrapper !== void 0 ? e.weekWrapper.offsetWidth : 0) + "px", e.calendarContainer.style.removeProperty("visibility"), e.calendarContainer.style.removeProperty("display");
      }
    });
  }
  function l(f) {
    if (e.selectedDates.length === 0) {
      var h = e.config.minDate === void 0 || He(/* @__PURE__ */ new Date(), e.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(e.config.minDate.getTime()), _ = fi(e.config);
      h.setHours(_.hours, _.minutes, _.seconds, h.getMilliseconds()), e.selectedDates = [h], e.latestSelectedDateObj = h;
    }
    f !== void 0 && f.type !== "blur" && Ss(f);
    var C = e._input.value;
    p(), ft(), e._input.value !== C && e._debouncedChange();
  }
  function u(f, h) {
    return f % 12 + 12 * je(h === e.l10n.amPM[1]);
  }
  function d(f) {
    switch (f % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return f % 12;
    }
  }
  function p() {
    if (!(e.hourElement === void 0 || e.minuteElement === void 0)) {
      var f = (parseInt(e.hourElement.value.slice(-2), 10) || 0) % 24, h = (parseInt(e.minuteElement.value, 10) || 0) % 60, _ = e.secondElement !== void 0 ? (parseInt(e.secondElement.value, 10) || 0) % 60 : 0;
      e.amPM !== void 0 && (f = u(f, e.amPM.textContent));
      var C = e.config.minTime !== void 0 || e.config.minDate && e.minDateHasTime && e.latestSelectedDateObj && He(e.latestSelectedDateObj, e.config.minDate, !0) === 0, V = e.config.maxTime !== void 0 || e.config.maxDate && e.maxDateHasTime && e.latestSelectedDateObj && He(e.latestSelectedDateObj, e.config.maxDate, !0) === 0;
      if (e.config.maxTime !== void 0 && e.config.minTime !== void 0 && e.config.minTime > e.config.maxTime) {
        var K = di(e.config.minTime.getHours(), e.config.minTime.getMinutes(), e.config.minTime.getSeconds()), oe = di(e.config.maxTime.getHours(), e.config.maxTime.getMinutes(), e.config.maxTime.getSeconds()), Q = di(f, h, _);
        if (Q > oe && Q < K) {
          var se = Ih(K);
          f = se[0], h = se[1], _ = se[2];
        }
      } else {
        if (V) {
          var q = e.config.maxTime !== void 0 ? e.config.maxTime : e.config.maxDate;
          f = Math.min(f, q.getHours()), f === q.getHours() && (h = Math.min(h, q.getMinutes())), h === q.getMinutes() && (_ = Math.min(_, q.getSeconds()));
        }
        if (C) {
          var ne = e.config.minTime !== void 0 ? e.config.minTime : e.config.minDate;
          f = Math.max(f, ne.getHours()), f === ne.getHours() && h < ne.getMinutes() && (h = ne.getMinutes()), h === ne.getMinutes() && (_ = Math.max(_, ne.getSeconds()));
        }
      }
      E(f, h, _);
    }
  }
  function m(f) {
    var h = f || e.latestSelectedDateObj;
    h && h instanceof Date && E(h.getHours(), h.getMinutes(), h.getSeconds());
  }
  function E(f, h, _) {
    e.latestSelectedDateObj !== void 0 && e.latestSelectedDateObj.setHours(f % 24, h, _ || 0, 0), !(!e.hourElement || !e.minuteElement || e.isMobile) && (e.hourElement.value = Pe(e.config.time_24hr ? f : (12 + f) % 12 + 12 * je(f % 12 === 0)), e.minuteElement.value = Pe(h), e.amPM !== void 0 && (e.amPM.textContent = e.l10n.amPM[je(f >= 12)]), e.secondElement !== void 0 && (e.secondElement.value = Pe(_)));
  }
  function b(f) {
    var h = Re(f), _ = parseInt(h.value) + (f.delta || 0);
    (_ / 1e3 > 1 || f.key === "Enter" && !/[^\d]/.test(_.toString())) && Z(_);
  }
  function g(f, h, _, C) {
    if (h instanceof Array)
      return h.forEach(function(V) {
        return g(f, V, _, C);
      });
    if (f instanceof Array)
      return f.forEach(function(V) {
        return g(V, h, _, C);
      });
    f.addEventListener(h, _, C), e._handlers.push({
      remove: function() {
        return f.removeEventListener(h, _, C);
      }
    });
  }
  function y() {
    ve("onChange");
  }
  function M() {
    if (e.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(_) {
      Array.prototype.forEach.call(e.element.querySelectorAll("[data-" + _ + "]"), function(C) {
        return g(C, "click", e[_]);
      });
    }), e.isMobile) {
      Es();
      return;
    }
    var f = Wo(Ae, 50);
    if (e._debouncedChange = Wo(y, $h), e.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && g(e.daysContainer, "mouseover", function(_) {
      e.config.mode === "range" && fe(Re(_));
    }), g(e._input, "keydown", ge), e.calendarContainer !== void 0 && g(e.calendarContainer, "keydown", ge), !e.config.inline && !e.config.static && g(window, "resize", f), window.ontouchstart !== void 0 ? g(window.document, "touchstart", X) : g(window.document, "mousedown", X), g(window.document, "focus", X, { capture: !0 }), e.config.clickOpens === !0 && (g(e._input, "focus", e.open), g(e._input, "click", e.open)), e.daysContainer !== void 0 && (g(e.monthNav, "click", Ds), g(e.monthNav, ["keyup", "increment"], b), g(e.daysContainer, "click", qt)), e.timeContainer !== void 0 && e.minuteElement !== void 0 && e.hourElement !== void 0) {
      var h = function(_) {
        return Re(_).select();
      };
      g(e.timeContainer, ["increment"], l), g(e.timeContainer, "blur", l, { capture: !0 }), g(e.timeContainer, "click", $), g([e.hourElement, e.minuteElement], ["focus", "click"], h), e.secondElement !== void 0 && g(e.secondElement, "focus", function() {
        return e.secondElement && e.secondElement.select();
      }), e.amPM !== void 0 && g(e.amPM, "click", function(_) {
        l(_);
      });
    }
    e.config.allowInput && g(e._input, "blur", pe);
  }
  function I(f, h) {
    var _ = f !== void 0 ? e.parseDate(f) : e.latestSelectedDateObj || (e.config.minDate && e.config.minDate > e.now ? e.config.minDate : e.config.maxDate && e.config.maxDate < e.now ? e.config.maxDate : e.now), C = e.currentYear, V = e.currentMonth;
    try {
      _ !== void 0 && (e.currentYear = _.getFullYear(), e.currentMonth = _.getMonth());
    } catch (K) {
      K.message = "Invalid date supplied: " + _, e.config.errorHandler(K);
    }
    h && e.currentYear !== C && (ve("onYearChange"), U()), h && (e.currentYear !== C || e.currentMonth !== V) && ve("onMonthChange"), e.redraw();
  }
  function $(f) {
    var h = Re(f);
    ~h.className.indexOf("arrow") && F(f, h.classList.contains("arrowUp") ? 1 : -1);
  }
  function F(f, h, _) {
    var C = f && Re(f), V = _ || C && C.parentNode && C.parentNode.firstChild, K = Ir("increment");
    K.delta = h, V && V.dispatchEvent(K);
  }
  function R() {
    var f = window.document.createDocumentFragment();
    if (e.calendarContainer = ue("div", "flatpickr-calendar"), e.calendarContainer.tabIndex = -1, !e.config.noCalendar) {
      if (f.appendChild(A()), e.innerContainer = ue("div", "flatpickr-innerContainer"), e.config.weekNumbers) {
        var h = S(), _ = h.weekWrapper, C = h.weekNumbers;
        e.innerContainer.appendChild(_), e.weekNumbers = C, e.weekWrapper = _;
      }
      e.rContainer = ue("div", "flatpickr-rContainer"), e.rContainer.appendChild(v()), e.daysContainer || (e.daysContainer = ue("div", "flatpickr-days"), e.daysContainer.tabIndex = -1), J(), e.rContainer.appendChild(e.daysContainer), e.innerContainer.appendChild(e.rContainer), f.appendChild(e.innerContainer);
    }
    e.config.enableTime && f.appendChild(c()), Me(e.calendarContainer, "rangeMode", e.config.mode === "range"), Me(e.calendarContainer, "animate", e.config.animate === !0), Me(e.calendarContainer, "multiMonth", e.config.showMonths > 1), e.calendarContainer.appendChild(f);
    var V = e.config.appendTo !== void 0 && e.config.appendTo.nodeType !== void 0;
    if ((e.config.inline || e.config.static) && (e.calendarContainer.classList.add(e.config.inline ? "inline" : "static"), e.config.inline && (!V && e.element.parentNode ? e.element.parentNode.insertBefore(e.calendarContainer, e._input.nextSibling) : e.config.appendTo !== void 0 && e.config.appendTo.appendChild(e.calendarContainer)), e.config.static)) {
      var K = ue("div", "flatpickr-wrapper");
      e.element.parentNode && e.element.parentNode.insertBefore(K, e.element), K.appendChild(e.element), e.altInput && K.appendChild(e.altInput), K.appendChild(e.calendarContainer);
    }
    !e.config.static && !e.config.inline && (e.config.appendTo !== void 0 ? e.config.appendTo : window.document.body).appendChild(e.calendarContainer);
  }
  function N(f, h, _, C) {
    var V = ae(h, !0), K = ue("span", f, h.getDate().toString());
    return K.dateObj = h, K.$i = C, K.setAttribute("aria-label", e.formatDate(h, e.config.ariaDateFormat)), f.indexOf("hidden") === -1 && He(h, e.now) === 0 && (e.todayDateElem = K, K.classList.add("today"), K.setAttribute("aria-current", "date")), V ? (K.tabIndex = -1, Lr(h) && (K.classList.add("selected"), e.selectedDateElem = K, e.config.mode === "range" && (Me(K, "startRange", e.selectedDates[0] && He(h, e.selectedDates[0], !0) === 0), Me(K, "endRange", e.selectedDates[1] && He(h, e.selectedDates[1], !0) === 0), f === "nextMonthDay" && K.classList.add("inRange")))) : K.classList.add("flatpickr-disabled"), e.config.mode === "range" && Cs(h) && !Lr(h) && K.classList.add("inRange"), e.weekNumbers && e.config.showMonths === 1 && f !== "prevMonthDay" && C % 7 === 6 && e.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + e.config.getWeek(h) + "</span>"), ve("onDayCreate", K), K;
  }
  function x(f) {
    f.focus(), e.config.mode === "range" && fe(f);
  }
  function D(f) {
    for (var h = f > 0 ? 0 : e.config.showMonths - 1, _ = f > 0 ? e.config.showMonths : -1, C = h; C != _; C += f)
      for (var V = e.daysContainer.children[C], K = f > 0 ? 0 : V.children.length - 1, oe = f > 0 ? V.children.length : -1, Q = K; Q != oe; Q += f) {
        var se = V.children[Q];
        if (se.className.indexOf("hidden") === -1 && ae(se.dateObj))
          return se;
      }
  }
  function Y(f, h) {
    for (var _ = f.className.indexOf("Month") === -1 ? f.dateObj.getMonth() : e.currentMonth, C = h > 0 ? e.config.showMonths : -1, V = h > 0 ? 1 : -1, K = _ - e.currentMonth; K != C; K += V)
      for (var oe = e.daysContainer.children[K], Q = _ - e.currentMonth === K ? f.$i + h : h < 0 ? oe.children.length - 1 : 0, se = oe.children.length, q = Q; q >= 0 && q < se && q != (h > 0 ? se : -1); q += V) {
        var ne = oe.children[q];
        if (ne.className.indexOf("hidden") === -1 && ae(ne.dateObj) && Math.abs(f.$i - q) >= Math.abs(h))
          return x(ne);
      }
    e.changeMonth(V), W(D(V), 0);
  }
  function W(f, h) {
    var _ = a(), C = de(_ || document.body), V = f !== void 0 ? f : C ? _ : e.selectedDateElem !== void 0 && de(e.selectedDateElem) ? e.selectedDateElem : e.todayDateElem !== void 0 && de(e.todayDateElem) ? e.todayDateElem : D(h > 0 ? 1 : -1);
    V === void 0 ? e._input.focus() : C ? Y(V, h) : x(V);
  }
  function B(f, h) {
    for (var _ = (new Date(f, h, 1).getDay() - e.l10n.firstDayOfWeek + 7) % 7, C = e.utils.getDaysInMonth((h - 1 + 12) % 12, f), V = e.utils.getDaysInMonth(h, f), K = window.document.createDocumentFragment(), oe = e.config.showMonths > 1, Q = oe ? "prevMonthDay hidden" : "prevMonthDay", se = oe ? "nextMonthDay hidden" : "nextMonthDay", q = C + 1 - _, ne = 0; q <= C; q++, ne++)
      K.appendChild(N("flatpickr-day " + Q, new Date(f, h - 1, q), q, ne));
    for (q = 1; q <= V; q++, ne++)
      K.appendChild(N("flatpickr-day", new Date(f, h, q), q, ne));
    for (var he = V + 1; he <= 42 - _ && (e.config.showMonths === 1 || ne % 7 !== 0); he++, ne++)
      K.appendChild(N("flatpickr-day " + se, new Date(f, h + 1, he % V), he, ne));
    var it = ue("div", "dayContainer");
    return it.appendChild(K), it;
  }
  function J() {
    if (e.daysContainer !== void 0) {
      cr(e.daysContainer), e.weekNumbers && cr(e.weekNumbers);
      for (var f = document.createDocumentFragment(), h = 0; h < e.config.showMonths; h++) {
        var _ = new Date(e.currentYear, e.currentMonth, 1);
        _.setMonth(e.currentMonth + h), f.appendChild(B(_.getFullYear(), _.getMonth()));
      }
      e.daysContainer.appendChild(f), e.days = e.daysContainer.firstChild, e.config.mode === "range" && e.selectedDates.length === 1 && fe();
    }
  }
  function U() {
    if (!(e.config.showMonths > 1 || e.config.monthSelectorType !== "dropdown")) {
      var f = function(C) {
        return e.config.minDate !== void 0 && e.currentYear === e.config.minDate.getFullYear() && C < e.config.minDate.getMonth() ? !1 : !(e.config.maxDate !== void 0 && e.currentYear === e.config.maxDate.getFullYear() && C > e.config.maxDate.getMonth());
      };
      e.monthsDropdownContainer.tabIndex = -1, e.monthsDropdownContainer.innerHTML = "";
      for (var h = 0; h < 12; h++)
        if (f(h)) {
          var _ = ue("option", "flatpickr-monthDropdown-month");
          _.value = new Date(e.currentYear, h).getMonth().toString(), _.textContent = Ar(h, e.config.shorthandCurrentMonth, e.l10n), _.tabIndex = -1, e.currentMonth === h && (_.selected = !0), e.monthsDropdownContainer.appendChild(_);
        }
    }
  }
  function H() {
    var f = ue("div", "flatpickr-month"), h = window.document.createDocumentFragment(), _;
    e.config.showMonths > 1 || e.config.monthSelectorType === "static" ? _ = ue("span", "cur-month") : (e.monthsDropdownContainer = ue("select", "flatpickr-monthDropdown-months"), e.monthsDropdownContainer.setAttribute("aria-label", e.l10n.monthAriaLabel), g(e.monthsDropdownContainer, "change", function(oe) {
      var Q = Re(oe), se = parseInt(Q.value, 10);
      e.changeMonth(se - e.currentMonth), ve("onMonthChange");
    }), U(), _ = e.monthsDropdownContainer);
    var C = ur("cur-year", { tabindex: "-1" }), V = C.getElementsByTagName("input")[0];
    V.setAttribute("aria-label", e.l10n.yearAriaLabel), e.config.minDate && V.setAttribute("min", e.config.minDate.getFullYear().toString()), e.config.maxDate && (V.setAttribute("max", e.config.maxDate.getFullYear().toString()), V.disabled = !!e.config.minDate && e.config.minDate.getFullYear() === e.config.maxDate.getFullYear());
    var K = ue("div", "flatpickr-current-month");
    return K.appendChild(_), K.appendChild(C), h.appendChild(K), f.appendChild(h), {
      container: f,
      yearElement: V,
      monthElement: _
    };
  }
  function k() {
    cr(e.monthNav), e.monthNav.appendChild(e.prevMonthNav), e.config.showMonths && (e.yearElements = [], e.monthElements = []);
    for (var f = e.config.showMonths; f--; ) {
      var h = H();
      e.yearElements.push(h.yearElement), e.monthElements.push(h.monthElement), e.monthNav.appendChild(h.container);
    }
    e.monthNav.appendChild(e.nextMonthNav);
  }
  function A() {
    return e.monthNav = ue("div", "flatpickr-months"), e.yearElements = [], e.monthElements = [], e.prevMonthNav = ue("span", "flatpickr-prev-month"), e.prevMonthNav.innerHTML = e.config.prevArrow, e.nextMonthNav = ue("span", "flatpickr-next-month"), e.nextMonthNav.innerHTML = e.config.nextArrow, k(), Object.defineProperty(e, "_hidePrevMonthArrow", {
      get: function() {
        return e.__hidePrevMonthArrow;
      },
      set: function(f) {
        e.__hidePrevMonthArrow !== f && (Me(e.prevMonthNav, "flatpickr-disabled", f), e.__hidePrevMonthArrow = f);
      }
    }), Object.defineProperty(e, "_hideNextMonthArrow", {
      get: function() {
        return e.__hideNextMonthArrow;
      },
      set: function(f) {
        e.__hideNextMonthArrow !== f && (Me(e.nextMonthNav, "flatpickr-disabled", f), e.__hideNextMonthArrow = f);
      }
    }), e.currentYearElement = e.yearElements[0], Qn(), e.monthNav;
  }
  function c() {
    e.calendarContainer.classList.add("hasTime"), e.config.noCalendar && e.calendarContainer.classList.add("noCalendar");
    var f = fi(e.config);
    e.timeContainer = ue("div", "flatpickr-time"), e.timeContainer.tabIndex = -1;
    var h = ue("span", "flatpickr-time-separator", ":"), _ = ur("flatpickr-hour", {
      "aria-label": e.l10n.hourAriaLabel
    });
    e.hourElement = _.getElementsByTagName("input")[0];
    var C = ur("flatpickr-minute", {
      "aria-label": e.l10n.minuteAriaLabel
    });
    if (e.minuteElement = C.getElementsByTagName("input")[0], e.hourElement.tabIndex = e.minuteElement.tabIndex = -1, e.hourElement.value = Pe(e.latestSelectedDateObj ? e.latestSelectedDateObj.getHours() : e.config.time_24hr ? f.hours : d(f.hours)), e.minuteElement.value = Pe(e.latestSelectedDateObj ? e.latestSelectedDateObj.getMinutes() : f.minutes), e.hourElement.setAttribute("step", e.config.hourIncrement.toString()), e.minuteElement.setAttribute("step", e.config.minuteIncrement.toString()), e.hourElement.setAttribute("min", e.config.time_24hr ? "0" : "1"), e.hourElement.setAttribute("max", e.config.time_24hr ? "23" : "12"), e.hourElement.setAttribute("maxlength", "2"), e.minuteElement.setAttribute("min", "0"), e.minuteElement.setAttribute("max", "59"), e.minuteElement.setAttribute("maxlength", "2"), e.timeContainer.appendChild(_), e.timeContainer.appendChild(h), e.timeContainer.appendChild(C), e.config.time_24hr && e.timeContainer.classList.add("time24hr"), e.config.enableSeconds) {
      e.timeContainer.classList.add("hasSeconds");
      var V = ur("flatpickr-second");
      e.secondElement = V.getElementsByTagName("input")[0], e.secondElement.value = Pe(e.latestSelectedDateObj ? e.latestSelectedDateObj.getSeconds() : f.seconds), e.secondElement.setAttribute("step", e.minuteElement.getAttribute("step")), e.secondElement.setAttribute("min", "0"), e.secondElement.setAttribute("max", "59"), e.secondElement.setAttribute("maxlength", "2"), e.timeContainer.appendChild(ue("span", "flatpickr-time-separator", ":")), e.timeContainer.appendChild(V);
    }
    return e.config.time_24hr || (e.amPM = ue("span", "flatpickr-am-pm", e.l10n.amPM[je((e.latestSelectedDateObj ? e.hourElement.value : e.config.defaultHour) > 11)]), e.amPM.title = e.l10n.toggleTitle, e.amPM.tabIndex = -1, e.timeContainer.appendChild(e.amPM)), e.timeContainer;
  }
  function v() {
    e.weekdayContainer ? cr(e.weekdayContainer) : e.weekdayContainer = ue("div", "flatpickr-weekdays");
    for (var f = e.config.showMonths; f--; ) {
      var h = ue("div", "flatpickr-weekdaycontainer");
      e.weekdayContainer.appendChild(h);
    }
    return w(), e.weekdayContainer;
  }
  function w() {
    if (e.weekdayContainer) {
      var f = e.l10n.firstDayOfWeek, h = Vo(e.l10n.weekdays.shorthand);
      f > 0 && f < h.length && (h = Vo(h.splice(f, h.length), h.splice(0, f)));
      for (var _ = e.config.showMonths; _--; )
        e.weekdayContainer.children[_].innerHTML = `
      <span class='flatpickr-weekday'>
        ` + h.join("</span><span class='flatpickr-weekday'>") + `
      </span>
      `;
    }
  }
  function S() {
    e.calendarContainer.classList.add("hasWeeks");
    var f = ue("div", "flatpickr-weekwrapper");
    f.appendChild(ue("span", "flatpickr-weekday", e.l10n.weekAbbreviation));
    var h = ue("div", "flatpickr-weeks");
    return f.appendChild(h), {
      weekWrapper: f,
      weekNumbers: h
    };
  }
  function j(f, h) {
    h === void 0 && (h = !0);
    var _ = h ? f : f - e.currentMonth;
    _ < 0 && e._hidePrevMonthArrow === !0 || _ > 0 && e._hideNextMonthArrow === !0 || (e.currentMonth += _, (e.currentMonth < 0 || e.currentMonth > 11) && (e.currentYear += e.currentMonth > 11 ? 1 : -1, e.currentMonth = (e.currentMonth + 12) % 12, ve("onYearChange"), U()), J(), ve("onMonthChange"), Qn());
  }
  function T(f, h) {
    if (f === void 0 && (f = !0), h === void 0 && (h = !0), e.input.value = "", e.altInput !== void 0 && (e.altInput.value = ""), e.mobileInput !== void 0 && (e.mobileInput.value = ""), e.selectedDates = [], e.latestSelectedDateObj = void 0, h === !0 && (e.currentYear = e._initialDate.getFullYear(), e.currentMonth = e._initialDate.getMonth()), e.config.enableTime === !0) {
      var _ = fi(e.config), C = _.hours, V = _.minutes, K = _.seconds;
      E(C, V, K);
    }
    e.redraw(), f && ve("onChange");
  }
  function O() {
    e.isOpen = !1, e.isMobile || (e.calendarContainer !== void 0 && e.calendarContainer.classList.remove("open"), e._input !== void 0 && e._input.classList.remove("active")), ve("onClose");
  }
  function L() {
    e.config !== void 0 && ve("onDestroy");
    for (var f = e._handlers.length; f--; )
      e._handlers[f].remove();
    if (e._handlers = [], e.mobileInput)
      e.mobileInput.parentNode && e.mobileInput.parentNode.removeChild(e.mobileInput), e.mobileInput = void 0;
    else if (e.calendarContainer && e.calendarContainer.parentNode)
      if (e.config.static && e.calendarContainer.parentNode) {
        var h = e.calendarContainer.parentNode;
        if (h.lastChild && h.removeChild(h.lastChild), h.parentNode) {
          for (; h.firstChild; )
            h.parentNode.insertBefore(h.firstChild, h);
          h.parentNode.removeChild(h);
        }
      } else
        e.calendarContainer.parentNode.removeChild(e.calendarContainer);
    e.altInput && (e.input.type = "text", e.altInput.parentNode && e.altInput.parentNode.removeChild(e.altInput), delete e.altInput), e.input && (e.input.type = e.input._type, e.input.classList.remove("flatpickr-input"), e.input.removeAttribute("readonly")), [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(_) {
      try {
        delete e[_];
      } catch {
      }
    });
  }
  function z(f) {
    return e.calendarContainer.contains(f);
  }
  function X(f) {
    if (e.isOpen && !e.config.inline) {
      var h = Re(f), _ = z(h), C = h === e.input || h === e.altInput || e.element.contains(h) || f.path && f.path.indexOf && (~f.path.indexOf(e.input) || ~f.path.indexOf(e.altInput)), V = !C && !_ && !z(f.relatedTarget), K = !e.config.ignoredFocusElements.some(function(oe) {
        return oe.contains(h);
      });
      V && K && (e.config.allowInput && e.setDate(e._input.value, !1, e.config.altInput ? e.config.altFormat : e.config.dateFormat), e.timeContainer !== void 0 && e.minuteElement !== void 0 && e.hourElement !== void 0 && e.input.value !== "" && e.input.value !== void 0 && l(), e.close(), e.config && e.config.mode === "range" && e.selectedDates.length === 1 && e.clear(!1));
    }
  }
  function Z(f) {
    if (!(!f || e.config.minDate && f < e.config.minDate.getFullYear() || e.config.maxDate && f > e.config.maxDate.getFullYear())) {
      var h = f, _ = e.currentYear !== h;
      e.currentYear = h || e.currentYear, e.config.maxDate && e.currentYear === e.config.maxDate.getFullYear() ? e.currentMonth = Math.min(e.config.maxDate.getMonth(), e.currentMonth) : e.config.minDate && e.currentYear === e.config.minDate.getFullYear() && (e.currentMonth = Math.max(e.config.minDate.getMonth(), e.currentMonth)), _ && (e.redraw(), ve("onYearChange"), U());
    }
  }
  function ae(f, h) {
    var _;
    h === void 0 && (h = !0);
    var C = e.parseDate(f, void 0, h);
    if (e.config.minDate && C && He(C, e.config.minDate, h !== void 0 ? h : !e.minDateHasTime) < 0 || e.config.maxDate && C && He(C, e.config.maxDate, h !== void 0 ? h : !e.maxDateHasTime) > 0)
      return !1;
    if (!e.config.enable && e.config.disable.length === 0)
      return !0;
    if (C === void 0)
      return !1;
    for (var V = !!e.config.enable, K = (_ = e.config.enable) !== null && _ !== void 0 ? _ : e.config.disable, oe = 0, Q = void 0; oe < K.length; oe++) {
      if (Q = K[oe], typeof Q == "function" && Q(C))
        return V;
      if (Q instanceof Date && C !== void 0 && Q.getTime() === C.getTime())
        return V;
      if (typeof Q == "string") {
        var se = e.parseDate(Q, void 0, !0);
        return se && se.getTime() === C.getTime() ? V : !V;
      } else if (typeof Q == "object" && C !== void 0 && Q.from && Q.to && C.getTime() >= Q.from.getTime() && C.getTime() <= Q.to.getTime())
        return V;
    }
    return !V;
  }
  function de(f) {
    return e.daysContainer !== void 0 ? f.className.indexOf("hidden") === -1 && f.className.indexOf("flatpickr-disabled") === -1 && e.daysContainer.contains(f) : !1;
  }
  function pe(f) {
    var h = f.target === e._input, _ = e._input.value.trimEnd() !== $r();
    h && _ && !(f.relatedTarget && z(f.relatedTarget)) && e.setDate(e._input.value, !0, f.target === e.altInput ? e.config.altFormat : e.config.dateFormat);
  }
  function ge(f) {
    var h = Re(f), _ = e.config.wrap ? r.contains(h) : h === e._input, C = e.config.allowInput, V = e.isOpen && (!C || !_), K = e.config.inline && _ && !C;
    if (f.keyCode === 13 && _) {
      if (C)
        return e.setDate(e._input.value, !0, h === e.altInput ? e.config.altFormat : e.config.dateFormat), e.close(), h.blur();
      e.open();
    } else if (z(h) || V || K) {
      var oe = !!e.timeContainer && e.timeContainer.contains(h);
      switch (f.keyCode) {
        case 13:
          oe ? (f.preventDefault(), l(), Xt()) : qt(f);
          break;
        case 27:
          f.preventDefault(), Xt();
          break;
        case 8:
        case 46:
          _ && !e.config.allowInput && (f.preventDefault(), e.clear());
          break;
        case 37:
        case 39:
          if (!oe && !_) {
            f.preventDefault();
            var Q = a();
            if (e.daysContainer !== void 0 && (C === !1 || Q && de(Q))) {
              var se = f.keyCode === 39 ? 1 : -1;
              f.ctrlKey ? (f.stopPropagation(), j(se), W(D(1), 0)) : W(void 0, se);
            }
          } else
            e.hourElement && e.hourElement.focus();
          break;
        case 38:
        case 40:
          f.preventDefault();
          var q = f.keyCode === 40 ? 1 : -1;
          e.daysContainer && h.$i !== void 0 || h === e.input || h === e.altInput ? f.ctrlKey ? (f.stopPropagation(), Z(e.currentYear - q), W(D(1), 0)) : oe || W(void 0, q * 7) : h === e.currentYearElement ? Z(e.currentYear - q) : e.config.enableTime && (!oe && e.hourElement && e.hourElement.focus(), l(f), e._debouncedChange());
          break;
        case 9:
          if (oe) {
            var ne = [
              e.hourElement,
              e.minuteElement,
              e.secondElement,
              e.amPM
            ].concat(e.pluginElements).filter(function($e) {
              return $e;
            }), he = ne.indexOf(h);
            if (he !== -1) {
              var it = ne[he + (f.shiftKey ? -1 : 1)];
              f.preventDefault(), (it || e._input).focus();
            }
          } else
            !e.config.noCalendar && e.daysContainer && e.daysContainer.contains(h) && f.shiftKey && (f.preventDefault(), e._input.focus());
          break;
      }
    }
    if (e.amPM !== void 0 && h === e.amPM)
      switch (f.key) {
        case e.l10n.amPM[0].charAt(0):
        case e.l10n.amPM[0].charAt(0).toLowerCase():
          e.amPM.textContent = e.l10n.amPM[0], p(), ft();
          break;
        case e.l10n.amPM[1].charAt(0):
        case e.l10n.amPM[1].charAt(0).toLowerCase():
          e.amPM.textContent = e.l10n.amPM[1], p(), ft();
          break;
      }
    (_ || z(h)) && ve("onKeyDown", f);
  }
  function fe(f, h) {
    if (h === void 0 && (h = "flatpickr-day"), !(e.selectedDates.length !== 1 || f && (!f.classList.contains(h) || f.classList.contains("flatpickr-disabled")))) {
      for (var _ = f ? f.dateObj.getTime() : e.days.firstElementChild.dateObj.getTime(), C = e.parseDate(e.selectedDates[0], void 0, !0).getTime(), V = Math.min(_, e.selectedDates[0].getTime()), K = Math.max(_, e.selectedDates[0].getTime()), oe = !1, Q = 0, se = 0, q = V; q < K; q += Lh.DAY)
        ae(new Date(q), !0) || (oe = oe || q > V && q < K, q < C && (!Q || q > Q) ? Q = q : q > C && (!se || q < se) && (se = q));
      var ne = Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+" + e.config.showMonths + ") > ." + h));
      ne.forEach(function(he) {
        var it = he.dateObj, $e = it.getTime(), Dn = Q > 0 && $e < Q || se > 0 && $e > se;
        if (Dn) {
          he.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function(Qt) {
            he.classList.remove(Qt);
          });
          return;
        } else if (oe && !Dn)
          return;
        ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(Qt) {
          he.classList.remove(Qt);
        }), f !== void 0 && (f.classList.add(_ <= e.selectedDates[0].getTime() ? "startRange" : "endRange"), C < _ && $e === C ? he.classList.add("startRange") : C > _ && $e === C && he.classList.add("endRange"), $e >= Q && (se === 0 || $e <= se) && Ph($e, C, _) && he.classList.add("inRange"));
      });
    }
  }
  function Ae() {
    e.isOpen && !e.config.static && !e.config.inline && nt();
  }
  function qe(f, h) {
    if (h === void 0 && (h = e._positionElement), e.isMobile === !0) {
      if (f) {
        f.preventDefault();
        var _ = Re(f);
        _ && _.blur();
      }
      e.mobileInput !== void 0 && (e.mobileInput.focus(), e.mobileInput.click()), ve("onOpen");
      return;
    } else if (e._input.disabled || e.config.inline)
      return;
    var C = e.isOpen;
    e.isOpen = !0, C || (e.calendarContainer.classList.add("open"), e._input.classList.add("active"), ve("onOpen"), nt(h)), e.config.enableTime === !0 && e.config.noCalendar === !0 && e.config.allowInput === !1 && (f === void 0 || !e.timeContainer.contains(f.relatedTarget)) && setTimeout(function() {
      return e.hourElement.select();
    }, 50);
  }
  function De(f) {
    return function(h) {
      var _ = e.config["_" + f + "Date"] = e.parseDate(h, e.config.dateFormat), C = e.config["_" + (f === "min" ? "max" : "min") + "Date"];
      _ !== void 0 && (e[f === "min" ? "minDateHasTime" : "maxDateHasTime"] = _.getHours() > 0 || _.getMinutes() > 0 || _.getSeconds() > 0), e.selectedDates && (e.selectedDates = e.selectedDates.filter(function(V) {
        return ae(V);
      }), !e.selectedDates.length && f === "min" && m(_), ft()), e.daysContainer && (wn(), _ !== void 0 ? e.currentYearElement[f] = _.getFullYear().toString() : e.currentYearElement.removeAttribute(f), e.currentYearElement.disabled = !!C && _ !== void 0 && C.getFullYear() === _.getFullYear());
    };
  }
  function tt() {
    var f = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ], h = Te(Te({}, JSON.parse(JSON.stringify(r.dataset || {}))), t), _ = {};
    e.config.parseDate = h.parseDate, e.config.formatDate = h.formatDate, Object.defineProperty(e.config, "enable", {
      get: function() {
        return e.config._enable;
      },
      set: function(ne) {
        e.config._enable = Ui(ne);
      }
    }), Object.defineProperty(e.config, "disable", {
      get: function() {
        return e.config._disable;
      },
      set: function(ne) {
        e.config._disable = Ui(ne);
      }
    });
    var C = h.mode === "time";
    if (!h.dateFormat && (h.enableTime || C)) {
      var V = we.defaultConfig.dateFormat || un.dateFormat;
      _.dateFormat = h.noCalendar || C ? "H:i" + (h.enableSeconds ? ":S" : "") : V + " H:i" + (h.enableSeconds ? ":S" : "");
    }
    if (h.altInput && (h.enableTime || C) && !h.altFormat) {
      var K = we.defaultConfig.altFormat || un.altFormat;
      _.altFormat = h.noCalendar || C ? "h:i" + (h.enableSeconds ? ":S K" : " K") : K + (" h:i" + (h.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(e.config, "minDate", {
      get: function() {
        return e.config._minDate;
      },
      set: De("min")
    }), Object.defineProperty(e.config, "maxDate", {
      get: function() {
        return e.config._maxDate;
      },
      set: De("max")
    });
    var oe = function(ne) {
      return function(he) {
        e.config[ne === "min" ? "_minTime" : "_maxTime"] = e.parseDate(he, "H:i:S");
      };
    };
    Object.defineProperty(e.config, "minTime", {
      get: function() {
        return e.config._minTime;
      },
      set: oe("min")
    }), Object.defineProperty(e.config, "maxTime", {
      get: function() {
        return e.config._maxTime;
      },
      set: oe("max")
    }), h.mode === "time" && (e.config.noCalendar = !0, e.config.enableTime = !0), Object.assign(e.config, _, h);
    for (var Q = 0; Q < f.length; Q++)
      e.config[f[Q]] = e.config[f[Q]] === !0 || e.config[f[Q]] === "true";
    li.filter(function(ne) {
      return e.config[ne] !== void 0;
    }).forEach(function(ne) {
      e.config[ne] = ci(e.config[ne] || []).map(o);
    }), e.isMobile = !e.config.disableMobile && !e.config.inline && e.config.mode === "single" && !e.config.disable.length && !e.config.enable && !e.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var Q = 0; Q < e.config.plugins.length; Q++) {
      var se = e.config.plugins[Q](e) || {};
      for (var q in se)
        li.indexOf(q) > -1 ? e.config[q] = ci(se[q]).map(o).concat(e.config[q]) : typeof h[q] > "u" && (e.config[q] = se[q]);
    }
    h.altInputClass || (e.config.altInputClass = dt().className + " " + e.config.altInputClass), ve("onParseConfig");
  }
  function dt() {
    return e.config.wrap ? r.querySelector("[data-input]") : r;
  }
  function Et() {
    typeof e.config.locale != "object" && typeof we.l10ns[e.config.locale] > "u" && e.config.errorHandler(new Error("flatpickr: invalid locale " + e.config.locale)), e.l10n = Te(Te({}, we.l10ns.default), typeof e.config.locale == "object" ? e.config.locale : e.config.locale !== "default" ? we.l10ns[e.config.locale] : void 0), $t.D = "(" + e.l10n.weekdays.shorthand.join("|") + ")", $t.l = "(" + e.l10n.weekdays.longhand.join("|") + ")", $t.M = "(" + e.l10n.months.shorthand.join("|") + ")", $t.F = "(" + e.l10n.months.longhand.join("|") + ")", $t.K = "(" + e.l10n.amPM[0] + "|" + e.l10n.amPM[1] + "|" + e.l10n.amPM[0].toLowerCase() + "|" + e.l10n.amPM[1].toLowerCase() + ")";
    var f = Te(Te({}, t), JSON.parse(JSON.stringify(r.dataset || {})));
    f.time_24hr === void 0 && we.defaultConfig.time_24hr === void 0 && (e.config.time_24hr = e.l10n.time_24hr), e.formatDate = vs(e), e.parseDate = Ti({ config: e.config, l10n: e.l10n });
  }
  function nt(f) {
    if (typeof e.config.position == "function")
      return void e.config.position(e, f);
    if (e.calendarContainer !== void 0) {
      ve("onPreCalendarPosition");
      var h = f || e._positionElement, _ = Array.prototype.reduce.call(e.calendarContainer.children, function(Ps, Is) {
        return Ps + Is.offsetHeight;
      }, 0), C = e.calendarContainer.offsetWidth, V = e.config.position.split(" "), K = V[0], oe = V.length > 1 ? V[1] : null, Q = h.getBoundingClientRect(), se = window.innerHeight - Q.bottom, q = K === "above" || K !== "below" && se < _ && Q.top > _, ne = window.pageYOffset + Q.top + (q ? -_ - 2 : h.offsetHeight + 2);
      if (Me(e.calendarContainer, "arrowTop", !q), Me(e.calendarContainer, "arrowBottom", q), !e.config.inline) {
        var he = window.pageXOffset + Q.left, it = !1, $e = !1;
        oe === "center" ? (he -= (C - Q.width) / 2, it = !0) : oe === "right" && (he -= C - Q.width, $e = !0), Me(e.calendarContainer, "arrowLeft", !it && !$e), Me(e.calendarContainer, "arrowCenter", it), Me(e.calendarContainer, "arrowRight", $e);
        var Dn = window.document.body.offsetWidth - (window.pageXOffset + Q.right), Qt = he + C > window.document.body.offsetWidth, Ts = Dn + C > window.document.body.offsetWidth;
        if (Me(e.calendarContainer, "rightMost", Qt), !e.config.static)
          if (e.calendarContainer.style.top = ne + "px", !Qt)
            e.calendarContainer.style.left = he + "px", e.calendarContainer.style.right = "auto";
          else if (!Ts)
            e.calendarContainer.style.left = "auto", e.calendarContainer.style.right = Dn + "px";
          else {
            var Rr = rt();
            if (Rr === void 0)
              return;
            var As = window.document.body.offsetWidth, Ms = Math.max(0, As / 2 - C / 2), xs = ".flatpickr-calendar.centerMost:before", Os = ".flatpickr-calendar.centerMost:after", Ns = Rr.cssRules.length, ks = "{left:" + Q.left + "px;right:auto;}";
            Me(e.calendarContainer, "rightMost", !1), Me(e.calendarContainer, "centerMost", !0), Rr.insertRule(xs + "," + Os + ks, Ns), e.calendarContainer.style.left = Ms + "px", e.calendarContainer.style.right = "auto";
          }
      }
    }
  }
  function rt() {
    for (var f = null, h = 0; h < document.styleSheets.length; h++) {
      var _ = document.styleSheets[h];
      if (_.cssRules) {
        try {
          _.cssRules;
        } catch {
          continue;
        }
        f = _;
        break;
      }
    }
    return f ?? Ut();
  }
  function Ut() {
    var f = document.createElement("style");
    return document.head.appendChild(f), f.sheet;
  }
  function wn() {
    e.config.noCalendar || e.isMobile || (U(), Qn(), J());
  }
  function Xt() {
    e._input.focus(), window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0 ? setTimeout(e.close, 0) : e.close();
  }
  function qt(f) {
    f.preventDefault(), f.stopPropagation();
    var h = function(ne) {
      return ne.classList && ne.classList.contains("flatpickr-day") && !ne.classList.contains("flatpickr-disabled") && !ne.classList.contains("notAllowed");
    }, _ = ms(Re(f), h);
    if (_ !== void 0) {
      var C = _, V = e.latestSelectedDateObj = new Date(C.dateObj.getTime()), K = (V.getMonth() < e.currentMonth || V.getMonth() > e.currentMonth + e.config.showMonths - 1) && e.config.mode !== "range";
      if (e.selectedDateElem = C, e.config.mode === "single")
        e.selectedDates = [V];
      else if (e.config.mode === "multiple") {
        var oe = Lr(V);
        oe ? e.selectedDates.splice(parseInt(oe), 1) : e.selectedDates.push(V);
      } else
        e.config.mode === "range" && (e.selectedDates.length === 2 && e.clear(!1, !1), e.latestSelectedDateObj = V, e.selectedDates.push(V), He(V, e.selectedDates[0], !0) !== 0 && e.selectedDates.sort(function(ne, he) {
          return ne.getTime() - he.getTime();
        }));
      if (p(), K) {
        var Q = e.currentYear !== V.getFullYear();
        e.currentYear = V.getFullYear(), e.currentMonth = V.getMonth(), Q && (ve("onYearChange"), U()), ve("onMonthChange");
      }
      if (Qn(), J(), ft(), !K && e.config.mode !== "range" && e.config.showMonths === 1 ? x(C) : e.selectedDateElem !== void 0 && e.hourElement === void 0 && e.selectedDateElem && e.selectedDateElem.focus(), e.hourElement !== void 0 && e.hourElement !== void 0 && e.hourElement.focus(), e.config.closeOnSelect) {
        var se = e.config.mode === "single" && !e.config.enableTime, q = e.config.mode === "range" && e.selectedDates.length === 2 && !e.config.enableTime;
        (se || q) && Xt();
      }
      y();
    }
  }
  var kt = {
    locale: [Et, w],
    showMonths: [k, s, v],
    minDate: [I],
    maxDate: [I],
    positionElement: [Xi],
    clickOpens: [
      function() {
        e.config.clickOpens === !0 ? (g(e._input, "focus", e.open), g(e._input, "click", e.open)) : (e._input.removeEventListener("focus", e.open), e._input.removeEventListener("click", e.open));
      }
    ]
  };
  function Xn(f, h) {
    if (f !== null && typeof f == "object") {
      Object.assign(e.config, f);
      for (var _ in f)
        kt[_] !== void 0 && kt[_].forEach(function(C) {
          return C();
        });
    } else
      e.config[f] = h, kt[f] !== void 0 ? kt[f].forEach(function(C) {
        return C();
      }) : li.indexOf(f) > -1 && (e.config[f] = ci(h));
    e.redraw(), ft(!0);
  }
  function Cn(f, h) {
    var _ = [];
    if (f instanceof Array)
      _ = f.map(function(C) {
        return e.parseDate(C, h);
      });
    else if (f instanceof Date || typeof f == "number")
      _ = [e.parseDate(f, h)];
    else if (typeof f == "string")
      switch (e.config.mode) {
        case "single":
        case "time":
          _ = [e.parseDate(f, h)];
          break;
        case "multiple":
          _ = f.split(e.config.conjunction).map(function(C) {
            return e.parseDate(C, h);
          });
          break;
        case "range":
          _ = f.split(e.l10n.rangeSeparator).map(function(C) {
            return e.parseDate(C, h);
          });
          break;
      }
    else
      e.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(f)));
    e.selectedDates = e.config.allowInvalidPreload ? _ : _.filter(function(C) {
      return C instanceof Date && ae(C, !1);
    }), e.config.mode === "range" && e.selectedDates.sort(function(C, V) {
      return C.getTime() - V.getTime();
    });
  }
  function qn(f, h, _) {
    if (h === void 0 && (h = !1), _ === void 0 && (_ = e.config.dateFormat), f !== 0 && !f || f instanceof Array && f.length === 0)
      return e.clear(h);
    Cn(f, _), e.latestSelectedDateObj = e.selectedDates[e.selectedDates.length - 1], e.redraw(), I(void 0, h), m(), e.selectedDates.length === 0 && e.clear(!1), ft(h), h && ve("onChange");
  }
  function Ui(f) {
    return f.slice().map(function(h) {
      return typeof h == "string" || typeof h == "number" || h instanceof Date ? e.parseDate(h, void 0, !0) : h && typeof h == "object" && h.from && h.to ? {
        from: e.parseDate(h.from, void 0),
        to: e.parseDate(h.to, void 0)
      } : h;
    }).filter(function(h) {
      return h;
    });
  }
  function bs() {
    e.selectedDates = [], e.now = e.parseDate(e.config.now) || /* @__PURE__ */ new Date();
    var f = e.config.defaultDate || ((e.input.nodeName === "INPUT" || e.input.nodeName === "TEXTAREA") && e.input.placeholder && e.input.value === e.input.placeholder ? null : e.input.value);
    f && Cn(f, e.config.dateFormat), e._initialDate = e.selectedDates.length > 0 ? e.selectedDates[0] : e.config.minDate && e.config.minDate.getTime() > e.now.getTime() ? e.config.minDate : e.config.maxDate && e.config.maxDate.getTime() < e.now.getTime() ? e.config.maxDate : e.now, e.currentYear = e._initialDate.getFullYear(), e.currentMonth = e._initialDate.getMonth(), e.selectedDates.length > 0 && (e.latestSelectedDateObj = e.selectedDates[0]), e.config.minTime !== void 0 && (e.config.minTime = e.parseDate(e.config.minTime, "H:i")), e.config.maxTime !== void 0 && (e.config.maxTime = e.parseDate(e.config.maxTime, "H:i")), e.minDateHasTime = !!e.config.minDate && (e.config.minDate.getHours() > 0 || e.config.minDate.getMinutes() > 0 || e.config.minDate.getSeconds() > 0), e.maxDateHasTime = !!e.config.maxDate && (e.config.maxDate.getHours() > 0 || e.config.maxDate.getMinutes() > 0 || e.config.maxDate.getSeconds() > 0);
  }
  function ys() {
    if (e.input = dt(), !e.input) {
      e.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    e.input._type = e.input.type, e.input.type = "text", e.input.classList.add("flatpickr-input"), e._input = e.input, e.config.altInput && (e.altInput = ue(e.input.nodeName, e.config.altInputClass), e._input = e.altInput, e.altInput.placeholder = e.input.placeholder, e.altInput.disabled = e.input.disabled, e.altInput.required = e.input.required, e.altInput.tabIndex = e.input.tabIndex, e.altInput.type = "text", e.input.setAttribute("type", "hidden"), !e.config.static && e.input.parentNode && e.input.parentNode.insertBefore(e.altInput, e.input.nextSibling)), e.config.allowInput || e._input.setAttribute("readonly", "readonly"), Xi();
  }
  function Xi() {
    e._positionElement = e.config.positionElement || e._input;
  }
  function Es() {
    var f = e.config.enableTime ? e.config.noCalendar ? "time" : "datetime-local" : "date";
    e.mobileInput = ue("input", e.input.className + " flatpickr-mobile"), e.mobileInput.tabIndex = 1, e.mobileInput.type = f, e.mobileInput.disabled = e.input.disabled, e.mobileInput.required = e.input.required, e.mobileInput.placeholder = e.input.placeholder, e.mobileFormatStr = f === "datetime-local" ? "Y-m-d\\TH:i:S" : f === "date" ? "Y-m-d" : "H:i:S", e.selectedDates.length > 0 && (e.mobileInput.defaultValue = e.mobileInput.value = e.formatDate(e.selectedDates[0], e.mobileFormatStr)), e.config.minDate && (e.mobileInput.min = e.formatDate(e.config.minDate, "Y-m-d")), e.config.maxDate && (e.mobileInput.max = e.formatDate(e.config.maxDate, "Y-m-d")), e.input.getAttribute("step") && (e.mobileInput.step = String(e.input.getAttribute("step"))), e.input.type = "hidden", e.altInput !== void 0 && (e.altInput.type = "hidden");
    try {
      e.input.parentNode && e.input.parentNode.insertBefore(e.mobileInput, e.input.nextSibling);
    } catch {
    }
    g(e.mobileInput, "change", function(h) {
      e.setDate(Re(h).value, !1, e.mobileFormatStr), ve("onChange"), ve("onClose");
    });
  }
  function ws(f) {
    if (e.isOpen === !0)
      return e.close();
    e.open(f);
  }
  function ve(f, h) {
    if (e.config !== void 0) {
      var _ = e.config[f];
      if (_ !== void 0 && _.length > 0)
        for (var C = 0; _[C] && C < _.length; C++)
          _[C](e.selectedDates, e.input.value, e, h);
      f === "onChange" && (e.input.dispatchEvent(Ir("change")), e.input.dispatchEvent(Ir("input")));
    }
  }
  function Ir(f) {
    var h = document.createEvent("Event");
    return h.initEvent(f, !0, !0), h;
  }
  function Lr(f) {
    for (var h = 0; h < e.selectedDates.length; h++) {
      var _ = e.selectedDates[h];
      if (_ instanceof Date && He(_, f) === 0)
        return "" + h;
    }
    return !1;
  }
  function Cs(f) {
    return e.config.mode !== "range" || e.selectedDates.length < 2 ? !1 : He(f, e.selectedDates[0]) >= 0 && He(f, e.selectedDates[1]) <= 0;
  }
  function Qn() {
    e.config.noCalendar || e.isMobile || !e.monthNav || (e.yearElements.forEach(function(f, h) {
      var _ = new Date(e.currentYear, e.currentMonth, 1);
      _.setMonth(e.currentMonth + h), e.config.showMonths > 1 || e.config.monthSelectorType === "static" ? e.monthElements[h].textContent = Ar(_.getMonth(), e.config.shorthandCurrentMonth, e.l10n) + " " : e.monthsDropdownContainer.value = _.getMonth().toString(), f.value = _.getFullYear().toString();
    }), e._hidePrevMonthArrow = e.config.minDate !== void 0 && (e.currentYear === e.config.minDate.getFullYear() ? e.currentMonth <= e.config.minDate.getMonth() : e.currentYear < e.config.minDate.getFullYear()), e._hideNextMonthArrow = e.config.maxDate !== void 0 && (e.currentYear === e.config.maxDate.getFullYear() ? e.currentMonth + 1 > e.config.maxDate.getMonth() : e.currentYear > e.config.maxDate.getFullYear()));
  }
  function $r(f) {
    var h = f || (e.config.altInput ? e.config.altFormat : e.config.dateFormat);
    return e.selectedDates.map(function(_) {
      return e.formatDate(_, h);
    }).filter(function(_, C, V) {
      return e.config.mode !== "range" || e.config.enableTime || V.indexOf(_) === C;
    }).join(e.config.mode !== "range" ? e.config.conjunction : e.l10n.rangeSeparator);
  }
  function ft(f) {
    f === void 0 && (f = !0), e.mobileInput !== void 0 && e.mobileFormatStr && (e.mobileInput.value = e.latestSelectedDateObj !== void 0 ? e.formatDate(e.latestSelectedDateObj, e.mobileFormatStr) : ""), e.input.value = $r(e.config.dateFormat), e.altInput !== void 0 && (e.altInput.value = $r(e.config.altFormat)), f !== !1 && ve("onValueUpdate");
  }
  function Ds(f) {
    var h = Re(f), _ = e.prevMonthNav.contains(h), C = e.nextMonthNav.contains(h);
    _ || C ? j(_ ? -1 : 1) : e.yearElements.indexOf(h) >= 0 ? h.select() : h.classList.contains("arrowUp") ? e.changeYear(e.currentYear + 1) : h.classList.contains("arrowDown") && e.changeYear(e.currentYear - 1);
  }
  function Ss(f) {
    f.preventDefault();
    var h = f.type === "keydown", _ = Re(f), C = _;
    e.amPM !== void 0 && _ === e.amPM && (e.amPM.textContent = e.l10n.amPM[je(e.amPM.textContent === e.l10n.amPM[0])]);
    var V = parseFloat(C.getAttribute("min")), K = parseFloat(C.getAttribute("max")), oe = parseFloat(C.getAttribute("step")), Q = parseInt(C.value, 10), se = f.delta || (h ? f.which === 38 ? 1 : -1 : 0), q = Q + oe * se;
    if (typeof C.value < "u" && C.value.length === 2) {
      var ne = C === e.hourElement, he = C === e.minuteElement;
      q < V ? (q = K + q + je(!ne) + (je(ne) && je(!e.amPM)), he && F(void 0, -1, e.hourElement)) : q > K && (q = C === e.hourElement ? q - K - je(!e.amPM) : V, he && F(void 0, 1, e.hourElement)), e.amPM && ne && (oe === 1 ? q + Q === 23 : Math.abs(q - Q) > oe) && (e.amPM.textContent = e.l10n.amPM[je(e.amPM.textContent === e.l10n.amPM[0])]), C.value = Pe(q);
    }
  }
  return i(), e;
}
function dn(r, t) {
  for (var e = Array.prototype.slice.call(r).filter(function(o) {
    return o instanceof HTMLElement;
  }), n = [], i = 0; i < e.length; i++) {
    var a = e[i];
    try {
      if (a.getAttribute("data-fp-omit") !== null)
        continue;
      a._flatpickr !== void 0 && (a._flatpickr.destroy(), a._flatpickr = void 0), a._flatpickr = Rh(a, t || {}), n.push(a._flatpickr);
    } catch (o) {
      console.error(o);
    }
  }
  return n.length === 1 ? n[0] : n;
}
typeof HTMLElement < "u" && typeof HTMLCollection < "u" && typeof NodeList < "u" && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(r) {
  return dn(this, r);
}, HTMLElement.prototype.flatpickr = function(r) {
  return dn([this], r);
});
var we = function(r, t) {
  return typeof r == "string" ? dn(window.document.querySelectorAll(r), t) : r instanceof Node ? dn([r], t) : dn(r, t);
};
we.defaultConfig = {};
we.l10ns = {
  en: Te({}, Bn),
  default: Te({}, Bn)
};
we.localize = function(r) {
  we.l10ns.default = Te(Te({}, we.l10ns.default), r);
};
we.setDefaults = function(r) {
  we.defaultConfig = Te(Te({}, we.defaultConfig), r);
};
we.parseDate = Ti({});
we.formatDate = vs({});
we.compareDates = He;
typeof jQuery < "u" && typeof jQuery.fn < "u" && (jQuery.fn.flatpickr = function(r) {
  return dn(this, r);
});
Date.prototype.fp_incr = function(r) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof r == "string" ? parseInt(r, 10) : r));
};
typeof window < "u" && (window.flatpickr = we);
var _s = { exports: {} };
/**
 * jscolor - JavaScript Color Picker
 *
 * @link    http://jscolor.com
 * @license For open source use: GPLv3
 *          For commercial use: JSColor Commercial License
 * @author  Jan Odvarko - East Desire
 *
 * See usage examples at http://jscolor.com/examples/
 */
(function(r) {
  (function(t, e) {
    {
      r.exports = t.document ? e(t) : function(n) {
        if (!n.document)
          throw new Error("jscolor needs a window with document");
        return e(n);
      };
      return;
    }
  })(typeof window < "u" ? window : ct, function(t) {
    var e = function() {
      var n = {
        initialized: !1,
        instances: [],
        // created instances of jscolor
        readyQueue: [],
        // functions waiting to be called after init
        register: function() {
          typeof t < "u" && t.document && (t.document.readyState !== "loading" ? n.pub.init() : t.document.addEventListener("DOMContentLoaded", n.pub.init, !1));
        },
        installBySelector: function(i, a) {
          if (a = a ? n.node(a) : t.document, !a)
            throw new Error("Missing root node");
          for (var o = a.querySelectorAll(i), s = new RegExp("(^|\\s)(" + n.pub.lookupClass + ")(\\s*(\\{[^}]*\\})|\\s|$)", "i"), l = 0; l < o.length; l += 1)
            if (!(o[l].jscolor && o[l].jscolor instanceof n.pub) && !(o[l].type !== void 0 && o[l].type.toLowerCase() == "color" && n.isColorAttrSupported)) {
              var u, d;
              if ((u = n.getDataAttr(o[l], "jscolor")) !== null || o[l].className && (d = o[l].className.match(s))) {
                var p = o[l], m = "";
                u !== null ? m = u : d && (console.warn('Installation using class name is DEPRECATED. Use data-jscolor="" attribute instead.' + n.docsRef), d[4] && (m = d[4]));
                var E = null;
                if (m.trim())
                  try {
                    E = n.parseOptionsStr(m);
                  } catch (b) {
                    console.warn(b + `
` + m);
                  }
                try {
                  new n.pub(p, E);
                } catch (b) {
                  console.warn(b);
                }
              }
            }
        },
        parseOptionsStr: function(i) {
          var a = null;
          try {
            a = JSON.parse(i);
          } catch (o) {
            if (n.pub.looseJSON)
              try {
                a = new Function("var opts = (" + i + '); return typeof opts === "object" ? opts : {};')();
              } catch (s) {
                throw new Error("Could not evaluate jscolor options: " + s);
              }
            else
              throw new Error("Could not parse jscolor options as JSON: " + o);
          }
          return a;
        },
        getInstances: function() {
          for (var i = [], a = 0; a < n.instances.length; a += 1)
            n.instances[a] && n.instances[a].targetElement && i.push(n.instances[a]);
          return i;
        },
        createEl: function(i) {
          var a = t.document.createElement(i);
          return n.setData(a, "gui", !0), a;
        },
        node: function(i) {
          if (!i)
            return null;
          if (typeof i == "string") {
            var a = i, o = null;
            try {
              o = t.document.querySelector(a);
            } catch (s) {
              return console.warn(s), null;
            }
            return o || console.warn("No element matches the selector: %s", a), o;
          }
          return n.isNode(i) ? i : (console.warn("Invalid node of type %s: %s", typeof i, i), null);
        },
        // See https://stackoverflow.com/questions/384286/
        isNode: function(i) {
          return typeof Node == "object" ? i instanceof Node : i && typeof i == "object" && typeof i.nodeType == "number" && typeof i.nodeName == "string";
        },
        nodeName: function(i) {
          return i && i.nodeName ? i.nodeName.toLowerCase() : !1;
        },
        removeChildren: function(i) {
          for (; i.firstChild; )
            i.removeChild(i.firstChild);
        },
        isTextInput: function(i) {
          return i && n.nodeName(i) === "input" && i.type.toLowerCase() === "text";
        },
        isButton: function(i) {
          if (!i)
            return !1;
          var a = n.nodeName(i);
          return a === "button" || a === "input" && ["button", "submit", "reset"].indexOf(i.type.toLowerCase()) > -1;
        },
        isButtonEmpty: function(i) {
          switch (n.nodeName(i)) {
            case "input":
              return !i.value || i.value.trim() === "";
            case "button":
              return i.textContent.trim() === "";
          }
          return null;
        },
        // See https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
        isPassiveEventSupported: function() {
          var i = !1;
          try {
            var a = Object.defineProperty({}, "passive", {
              get: function() {
                i = !0;
              }
            });
            t.addEventListener("testPassive", null, a), t.removeEventListener("testPassive", null, a);
          } catch {
          }
          return i;
        }(),
        isColorAttrSupported: function() {
          var i = t.document.createElement("input");
          return !!(i.setAttribute && (i.setAttribute("type", "color"), i.type.toLowerCase() == "color"));
        }(),
        dataProp: "_data_jscolor",
        // usage:
        //   setData(obj, prop, value)
        //   setData(obj, {prop:value, ...})
        //
        setData: function() {
          var i = arguments[0];
          if (arguments.length === 3) {
            var a = i.hasOwnProperty(n.dataProp) ? i[n.dataProp] : i[n.dataProp] = {}, o = arguments[1], s = arguments[2];
            return a[o] = s, !0;
          } else if (arguments.length === 2 && typeof arguments[1] == "object") {
            var a = i.hasOwnProperty(n.dataProp) ? i[n.dataProp] : i[n.dataProp] = {}, l = arguments[1];
            for (var o in l)
              l.hasOwnProperty(o) && (a[o] = l[o]);
            return !0;
          }
          throw new Error("Invalid arguments");
        },
        // usage:
        //   removeData(obj, prop, [prop...])
        //
        removeData: function() {
          var i = arguments[0];
          if (!i.hasOwnProperty(n.dataProp))
            return !0;
          for (var a = 1; a < arguments.length; a += 1) {
            var o = arguments[a];
            delete i[n.dataProp][o];
          }
          return !0;
        },
        getData: function(i, a, o) {
          if (!i.hasOwnProperty(n.dataProp))
            if (o !== void 0)
              i[n.dataProp] = {};
            else
              return;
          var s = i[n.dataProp];
          return !s.hasOwnProperty(a) && o !== void 0 && (s[a] = o), s[a];
        },
        getDataAttr: function(i, a) {
          var o = "data-" + a, s = i.getAttribute(o);
          return s;
        },
        setDataAttr: function(i, a, o) {
          var s = "data-" + a;
          i.setAttribute(s, o);
        },
        _attachedGroupEvents: {},
        attachGroupEvent: function(i, a, o, s) {
          n._attachedGroupEvents.hasOwnProperty(i) || (n._attachedGroupEvents[i] = []), n._attachedGroupEvents[i].push([a, o, s]), a.addEventListener(o, s, !1);
        },
        detachGroupEvents: function(i) {
          if (n._attachedGroupEvents.hasOwnProperty(i)) {
            for (var a = 0; a < n._attachedGroupEvents[i].length; a += 1) {
              var o = n._attachedGroupEvents[i][a];
              o[0].removeEventListener(o[1], o[2], !1);
            }
            delete n._attachedGroupEvents[i];
          }
        },
        preventDefault: function(i) {
          i.preventDefault && i.preventDefault(), i.returnValue = !1;
        },
        triggerEvent: function(i, a, o, s) {
          if (i) {
            var l = null;
            return typeof Event == "function" ? l = new Event(a, {
              bubbles: o,
              cancelable: s
            }) : (l = t.document.createEvent("Event"), l.initEvent(a, o, s)), l ? (n.setData(l, "internal", !0), i.dispatchEvent(l), !0) : !1;
          }
        },
        triggerInputEvent: function(i, a, o, s) {
          i && n.isTextInput(i) && n.triggerEvent(i, a, o, s);
        },
        eventKey: function(i) {
          var a = {
            9: "Tab",
            13: "Enter",
            27: "Escape"
          };
          return typeof i.code == "string" ? i.code : i.keyCode !== void 0 && a.hasOwnProperty(i.keyCode) ? a[i.keyCode] : null;
        },
        strList: function(i) {
          return i ? i.replace(/^\s+|\s+$/g, "").split(/\s+/) : [];
        },
        // The className parameter (str) can only contain a single class name
        hasClass: function(i, a) {
          return a ? i.classList !== void 0 ? i.classList.contains(a) : (" " + i.className.replace(/\s+/g, " ") + " ").indexOf(" " + a + " ") != -1 : !1;
        },
        // The className parameter (str) can contain multiple class names separated by whitespace
        addClass: function(i, a) {
          var o = n.strList(a);
          if (i.classList !== void 0) {
            for (var s = 0; s < o.length; s += 1)
              i.classList.add(o[s]);
            return;
          }
          for (var s = 0; s < o.length; s += 1)
            n.hasClass(i, o[s]) || (i.className += (i.className ? " " : "") + o[s]);
        },
        // The className parameter (str) can contain multiple class names separated by whitespace
        removeClass: function(i, a) {
          var o = n.strList(a);
          if (i.classList !== void 0) {
            for (var s = 0; s < o.length; s += 1)
              i.classList.remove(o[s]);
            return;
          }
          for (var s = 0; s < o.length; s += 1) {
            var l = new RegExp(
              "^\\s*" + o[s] + "\\s*|\\s*" + o[s] + "\\s*$|\\s+" + o[s] + "(\\s+)",
              "g"
            );
            i.className = i.className.replace(l, "$1");
          }
        },
        getCompStyle: function(i) {
          var a = t.getComputedStyle ? t.getComputedStyle(i) : i.currentStyle;
          return a || {};
        },
        // Note:
        //   Setting a property to NULL reverts it to the state before it was first set
        //   with the 'reversible' flag enabled
        //
        setStyle: function(i, a, o, s) {
          var l = o ? "important" : "", u = null;
          for (var d in a)
            if (a.hasOwnProperty(d)) {
              var p = null;
              a[d] === null ? (u || (u = n.getData(i, "origStyle")), u && u.hasOwnProperty(d) && (p = u[d])) : (s && (u || (u = n.getData(i, "origStyle", {})), u.hasOwnProperty(d) || (u[d] = i.style[d])), p = a[d]), p !== null && i.style.setProperty(d, p, l);
            }
        },
        appendCss: function(i) {
          var a = document.querySelector("head"), o = document.createElement("style");
          o.innerText = i, a.appendChild(o);
        },
        appendDefaultCss: function(i) {
          n.appendCss(
            [
              ".jscolor-wrap, .jscolor-wrap div, .jscolor-wrap canvas { position:static; display:block; visibility:visible; overflow:visible; margin:0; padding:0; border:none; border-radius:0; outline:none; z-index:auto; float:none; width:auto; height:auto; left:auto; right:auto; top:auto; bottom:auto; min-width:0; min-height:0; max-width:none; max-height:none; background:none; clip:auto; opacity:1; transform:none; box-shadow:none; box-sizing:content-box; }",
              ".jscolor-wrap { clear:both; }",
              ".jscolor-wrap .jscolor-picker { position:relative; }",
              ".jscolor-wrap .jscolor-shadow { position:absolute; left:0; top:0; width:100%; height:100%; }",
              ".jscolor-wrap .jscolor-border { position:relative; }",
              ".jscolor-wrap .jscolor-palette { position:absolute; }",
              ".jscolor-wrap .jscolor-palette-sw { position:absolute; display:block; cursor:pointer; }",
              ".jscolor-wrap .jscolor-btn { position:absolute; overflow:hidden; white-space:nowrap; font:13px sans-serif; text-align:center; cursor:pointer; }"
            ].join(`
`)
          );
        },
        hexColor: function(i, a, o) {
          return "#" + (("0" + Math.round(i).toString(16)).slice(-2) + ("0" + Math.round(a).toString(16)).slice(-2) + ("0" + Math.round(o).toString(16)).slice(-2)).toUpperCase();
        },
        hexaColor: function(i, a, o, s) {
          return "#" + (("0" + Math.round(i).toString(16)).slice(-2) + ("0" + Math.round(a).toString(16)).slice(-2) + ("0" + Math.round(o).toString(16)).slice(-2) + ("0" + Math.round(s * 255).toString(16)).slice(-2)).toUpperCase();
        },
        rgbColor: function(i, a, o) {
          return "rgb(" + Math.round(i) + "," + Math.round(a) + "," + Math.round(o) + ")";
        },
        rgbaColor: function(i, a, o, s) {
          return "rgba(" + Math.round(i) + "," + Math.round(a) + "," + Math.round(o) + "," + Math.round((s ?? 1) * 100) / 100 + ")";
        },
        linearGradient: function() {
          function i() {
            for (var o = "linear-gradient", s = ["", "-webkit-", "-moz-", "-o-", "-ms-"], l = t.document.createElement("div"), u = 0; u < s.length; u += 1) {
              var d = s[u] + o, p = d + "(to right, rgba(0,0,0,0), rgba(0,0,0,0))";
              if (l.style.background = p, l.style.background)
                return d;
            }
            return o;
          }
          var a = i();
          return function() {
            return a + "(" + Array.prototype.join.call(arguments, ", ") + ")";
          };
        }(),
        setBorderRadius: function(i, a) {
          n.setStyle(i, { "border-radius": a || "0" });
        },
        setBoxShadow: function(i, a) {
          n.setStyle(i, { "box-shadow": a || "none" });
        },
        getElementPos: function(i, a) {
          var o = 0, s = 0, l = i.getBoundingClientRect();
          if (o = l.left, s = l.top, !a) {
            var u = n.getViewPos();
            o += u[0], s += u[1];
          }
          return [o, s];
        },
        getElementSize: function(i) {
          return [i.offsetWidth, i.offsetHeight];
        },
        // get pointer's X/Y coordinates relative to viewport
        getAbsPointerPos: function(i) {
          var a = 0, o = 0;
          return typeof i.changedTouches < "u" && i.changedTouches.length ? (a = i.changedTouches[0].clientX, o = i.changedTouches[0].clientY) : typeof i.clientX == "number" && (a = i.clientX, o = i.clientY), { x: a, y: o };
        },
        // get pointer's X/Y coordinates relative to target element
        getRelPointerPos: function(i) {
          var a = i.target || i.srcElement, o = a.getBoundingClientRect(), s = 0, l = 0, u = 0, d = 0;
          return typeof i.changedTouches < "u" && i.changedTouches.length ? (u = i.changedTouches[0].clientX, d = i.changedTouches[0].clientY) : typeof i.clientX == "number" && (u = i.clientX, d = i.clientY), s = u - o.left, l = d - o.top, { x: s, y: l };
        },
        getViewPos: function() {
          var i = t.document.documentElement;
          return [
            (t.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
            (t.pageYOffset || i.scrollTop) - (i.clientTop || 0)
          ];
        },
        getViewSize: function() {
          var i = t.document.documentElement;
          return [
            t.innerWidth || i.clientWidth,
            t.innerHeight || i.clientHeight
          ];
        },
        // r: 0-255
        // g: 0-255
        // b: 0-255
        //
        // returns: [ 0-360, 0-100, 0-100 ]
        //
        RGB_HSV: function(i, a, o) {
          i /= 255, a /= 255, o /= 255;
          var s = Math.min(Math.min(i, a), o), l = Math.max(Math.max(i, a), o), u = l - s;
          if (u === 0)
            return [null, 0, 100 * l];
          var d = i === s ? 3 + (o - a) / u : a === s ? 5 + (i - o) / u : 1 + (a - i) / u;
          return [
            60 * (d === 6 ? 0 : d),
            100 * (u / l),
            100 * l
          ];
        },
        // h: 0-360
        // s: 0-100
        // v: 0-100
        //
        // returns: [ 0-255, 0-255, 0-255 ]
        //
        HSV_RGB: function(i, a, o) {
          var s = 255 * (o / 100);
          if (i === null)
            return [s, s, s];
          i /= 60, a /= 100;
          var l = Math.floor(i), u = l % 2 ? i - l : 1 - (i - l), d = s * (1 - a), p = s * (1 - a * u);
          switch (l) {
            case 6:
            case 0:
              return [s, p, d];
            case 1:
              return [p, s, d];
            case 2:
              return [d, s, p];
            case 3:
              return [d, p, s];
            case 4:
              return [p, d, s];
            case 5:
              return [s, d, p];
          }
        },
        parseColorString: function(i) {
          var a = {
            rgba: null,
            format: null
            // 'hex' | 'hexa' | 'rgb' | 'rgba'
          }, o;
          if (o = i.match(/^\W*([0-9A-F]{3,8})\W*$/i)) {
            if (o[1].length === 8)
              a.format = "hexa", a.rgba = [
                parseInt(o[1].slice(0, 2), 16),
                parseInt(o[1].slice(2, 4), 16),
                parseInt(o[1].slice(4, 6), 16),
                parseInt(o[1].slice(6, 8), 16) / 255
              ];
            else if (o[1].length === 6)
              a.format = "hex", a.rgba = [
                parseInt(o[1].slice(0, 2), 16),
                parseInt(o[1].slice(2, 4), 16),
                parseInt(o[1].slice(4, 6), 16),
                null
              ];
            else if (o[1].length === 3)
              a.format = "hex", a.rgba = [
                parseInt(o[1].charAt(0) + o[1].charAt(0), 16),
                parseInt(o[1].charAt(1) + o[1].charAt(1), 16),
                parseInt(o[1].charAt(2) + o[1].charAt(2), 16),
                null
              ];
            else
              return !1;
            return a;
          }
          if (o = i.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
            var s = o[1].split(","), l = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/, u, d, p, m;
            if (s.length >= 3 && (u = s[0].match(l)) && (d = s[1].match(l)) && (p = s[2].match(l)))
              return a.format = "rgb", a.rgba = [
                parseFloat(u[1]) || 0,
                parseFloat(d[1]) || 0,
                parseFloat(p[1]) || 0,
                null
              ], s.length >= 4 && (m = s[3].match(l)) && (a.format = "rgba", a.rgba[3] = parseFloat(m[1]) || 0), a;
          }
          return !1;
        },
        parsePaletteValue: function(i) {
          var a = [];
          typeof i == "string" ? i.replace(/#[0-9A-F]{3}\b|#[0-9A-F]{6}([0-9A-F]{2})?\b|rgba?\(([^)]*)\)/ig, function(u) {
            a.push(u);
          }) : Array.isArray(i) && (a = i);
          for (var o = [], s = 0; s < a.length; s++) {
            var l = n.parseColorString(a[s]);
            l && o.push(l);
          }
          return o;
        },
        containsTranparentColor: function(i) {
          for (var a = 0; a < i.length; a++) {
            var o = i[a].rgba[3];
            if (o !== null && o < 1)
              return !0;
          }
          return !1;
        },
        isAlphaFormat: function(i) {
          switch (i.toLowerCase()) {
            case "hexa":
            case "rgba":
              return !0;
          }
          return !1;
        },
        // Canvas scaling for retina displays
        //
        // adapted from https://www.html5rocks.com/en/tutorials/canvas/hidpi/
        //
        scaleCanvasForHighDPR: function(i) {
          var a = t.devicePixelRatio || 1;
          i.width *= a, i.height *= a;
          var o = i.getContext("2d");
          o.scale(a, a);
        },
        genColorPreviewCanvas: function(i, a, o, s) {
          var l = Math.round(n.pub.previewSeparator.length), u = n.pub.chessboardSize, d = n.pub.chessboardColor1, p = n.pub.chessboardColor2, m = o || u * 2, E = u * 2, b = n.createEl("canvas"), g = b.getContext("2d");
          b.width = m, b.height = E, s && n.scaleCanvasForHighDPR(b), g.fillStyle = d, g.fillRect(0, 0, m, E), g.fillStyle = p;
          for (var y = 0; y < m; y += u * 2)
            g.fillRect(y, 0, u, u), g.fillRect(y + u, u, u, u);
          i && (g.fillStyle = i, g.fillRect(0, 0, m, E));
          var M = null;
          switch (a) {
            case "left":
              M = 0, g.clearRect(0, 0, l / 2, E);
              break;
            case "right":
              M = m - l, g.clearRect(m - l / 2, 0, l / 2, E);
              break;
          }
          if (M !== null) {
            g.lineWidth = 1;
            for (var I = 0; I < n.pub.previewSeparator.length; I += 1)
              g.beginPath(), g.strokeStyle = n.pub.previewSeparator[I], g.moveTo(0.5 + M + I, 0), g.lineTo(0.5 + M + I, E), g.stroke();
          }
          return {
            canvas: b,
            width: m,
            height: E
          };
        },
        // if position or width is not set => fill the entire element (0%-100%)
        genColorPreviewGradient: function(i, a, o) {
          var s = [];
          return a && o ? s = [
            "to " + { left: "right", right: "left" }[a],
            i + " 0%",
            i + " " + o + "px",
            "rgba(0,0,0,0) " + (o + 1) + "px",
            "rgba(0,0,0,0) 100%"
          ] : s = [
            "to right",
            i + " 0%",
            i + " 100%"
          ], n.linearGradient.apply(this, s);
        },
        redrawPosition: function() {
          if (!(!n.picker || !n.picker.owner)) {
            var i = n.picker.owner;
            if (i.container !== t.document.body)
              n._drawPosition(i, 0, 0, "relative", !1);
            else {
              var a, o;
              i.fixed ? (a = n.getElementPos(i.targetElement, !0), o = [0, 0]) : (a = n.getElementPos(i.targetElement), o = n.getViewPos());
              var s = n.getElementSize(i.targetElement), l = n.getViewSize(), u = n.getPickerDims(i), d = [u.borderW, u.borderH], p, m, E;
              switch (i.position.toLowerCase()) {
                case "left":
                  p = 1, m = 0, E = -1;
                  break;
                case "right":
                  p = 1, m = 0, E = 1;
                  break;
                case "top":
                  p = 0, m = 1, E = -1;
                  break;
                default:
                  p = 0, m = 1, E = 1;
                  break;
              }
              var b = (s[m] + d[m]) / 2;
              if (i.smartPosition)
                var g = [
                  -o[p] + a[p] + d[p] > l[p] && -o[p] + a[p] + s[p] / 2 > l[p] / 2 && a[p] + s[p] - d[p] >= 0 ? a[p] + s[p] - d[p] : a[p],
                  -o[m] + a[m] + s[m] + d[m] - b + b * E > l[m] ? -o[m] + a[m] + s[m] / 2 > l[m] / 2 && a[m] + s[m] - b - b * E >= 0 ? a[m] + s[m] - b - b * E : a[m] + s[m] - b + b * E : a[m] + s[m] - b + b * E >= 0 ? a[m] + s[m] - b + b * E : a[m] + s[m] - b - b * E
                ];
              else
                var g = [
                  a[p],
                  a[m] + s[m] - b + b * E
                ];
              var y = g[p], M = g[m], I = i.fixed ? "fixed" : "absolute", $ = (g[0] + d[0] > a[0] || g[0] < a[0] + s[0]) && g[1] + d[1] < a[1] + s[1];
              n._drawPosition(i, y, M, I, $);
            }
          }
        },
        _drawPosition: function(i, a, o, s, l) {
          var u = l ? 0 : i.shadowBlur;
          n.picker.wrap.style.position = s, // To avoid unnecessary repositioning during scroll
          (Math.round(parseFloat(n.picker.wrap.style.left)) !== Math.round(a) || Math.round(parseFloat(n.picker.wrap.style.top)) !== Math.round(o)) && (n.picker.wrap.style.left = a + "px", n.picker.wrap.style.top = o + "px"), n.setBoxShadow(
            n.picker.boxS,
            i.shadow ? new n.BoxShadow(0, u, i.shadowBlur, 0, i.shadowColor) : null
          );
        },
        getPickerDims: function(i) {
          var a = 2 * i.controlBorderWidth + i.width, o = 2 * i.controlBorderWidth + i.height, s = 2 * i.controlBorderWidth + 2 * n.getControlPadding(i) + i.sliderSize;
          n.getSliderChannel(i) && (a += s), i.hasAlphaChannel() && (a += s);
          var l = n.getPaletteDims(i, a);
          l.height && (o += l.height + i.padding), i.closeButton && (o += 2 * i.controlBorderWidth + i.padding + i.buttonHeight);
          var u = a + 2 * i.padding, d = o + 2 * i.padding;
          return {
            contentW: a,
            contentH: o,
            paddedW: u,
            paddedH: d,
            borderW: u + 2 * i.borderWidth,
            borderH: d + 2 * i.borderWidth,
            palette: l
          };
        },
        getPaletteDims: function(i, a) {
          var o = 0, s = 0, l = 0, u = 0, d = 0, p = i._palette ? i._palette.length : 0;
          return p && (o = i.paletteCols, s = o > 0 ? Math.ceil(p / o) : 0, l = Math.max(1, Math.floor((a - (o - 1) * i.paletteSpacing) / o)), u = i.paletteHeight ? Math.min(i.paletteHeight, l) : l), s && (d = s * u + (s - 1) * i.paletteSpacing), {
            cols: o,
            rows: s,
            cellW: l,
            cellH: u,
            width: a,
            height: d
          };
        },
        getControlPadding: function(i) {
          return Math.max(
            i.padding / 2,
            2 * i.pointerBorderWidth + i.pointerThickness - i.controlBorderWidth
          );
        },
        getPadYChannel: function(i) {
          switch (i.mode.charAt(1).toLowerCase()) {
            case "v":
              return "v";
          }
          return "s";
        },
        getSliderChannel: function(i) {
          if (i.mode.length > 2)
            switch (i.mode.charAt(2).toLowerCase()) {
              case "s":
                return "s";
              case "v":
                return "v";
            }
          return null;
        },
        // calls function specified in picker's property
        triggerCallback: function(i, a) {
          if (i[a]) {
            var o = null;
            if (typeof i[a] == "string")
              try {
                o = new Function(i[a]);
              } catch (s) {
                console.error(s);
              }
            else
              o = i[a];
            o && o.call(i);
          }
        },
        // Triggers a color change related event(s) on all picker instances.
        // It is possible to specify multiple events separated with a space.
        triggerGlobal: function(i) {
          for (var a = n.getInstances(), o = 0; o < a.length; o += 1)
            a[o].trigger(i);
        },
        _pointerMoveEvent: {
          mouse: "mousemove",
          touch: "touchmove"
        },
        _pointerEndEvent: {
          mouse: "mouseup",
          touch: "touchend"
        },
        _pointerOrigin: null,
        onDocumentKeyUp: function(i) {
          ["Tab", "Escape"].indexOf(n.eventKey(i)) !== -1 && n.picker && n.picker.owner && n.picker.owner.tryHide();
        },
        onWindowResize: function(i) {
          n.redrawPosition();
        },
        onWindowScroll: function(i) {
          n.redrawPosition();
        },
        onParentScroll: function(i) {
          n.picker && n.picker.owner && n.picker.owner.tryHide();
        },
        onDocumentMouseDown: function(i) {
          var a = i.target || i.srcElement;
          if (a.jscolor && a.jscolor instanceof n.pub)
            a.jscolor.showOnClick && !a.disabled && a.jscolor.show();
          else if (n.getData(a, "gui")) {
            var o = n.getData(a, "control");
            o && n.onControlPointerStart(i, a, n.getData(a, "control"), "mouse");
          } else
            n.picker && n.picker.owner && n.picker.owner.tryHide();
        },
        onPickerTouchStart: function(i) {
          var a = i.target || i.srcElement;
          n.getData(a, "control") && n.onControlPointerStart(i, a, n.getData(a, "control"), "touch");
        },
        onControlPointerStart: function(i, a, o, s) {
          var l = n.getData(a, "instance");
          n.preventDefault(i);
          var u = function(b, g) {
            n.attachGroupEvent(
              "drag",
              b,
              n._pointerMoveEvent[s],
              n.onDocumentPointerMove(i, a, o, s, g)
            ), n.attachGroupEvent(
              "drag",
              b,
              n._pointerEndEvent[s],
              n.onDocumentPointerEnd(i, a, o, s)
            );
          };
          if (u(t.document, [0, 0]), t.parent && t.frameElement) {
            var d = t.frameElement.getBoundingClientRect(), p = [-d.left, -d.top];
            u(t.parent.window.document, p);
          }
          var m = n.getAbsPointerPos(i), E = n.getRelPointerPos(i);
          switch (n._pointerOrigin = {
            x: m.x - E.x,
            y: m.y - E.y
          }, o) {
            case "pad":
              n.getSliderChannel(l) === "v" && l.channels.v === 0 && l.fromHSVA(null, null, 100, null), n.setPad(l, i, 0, 0);
              break;
            case "sld":
              n.setSld(l, i, 0);
              break;
            case "asld":
              n.setASld(l, i, 0);
              break;
          }
          l.trigger("input");
        },
        onDocumentPointerMove: function(i, a, o, s, l) {
          return function(u) {
            var d = n.getData(a, "instance");
            switch (o) {
              case "pad":
                n.setPad(d, u, l[0], l[1]);
                break;
              case "sld":
                n.setSld(d, u, l[1]);
                break;
              case "asld":
                n.setASld(d, u, l[1]);
                break;
            }
            d.trigger("input");
          };
        },
        onDocumentPointerEnd: function(i, a, o, s) {
          return function(l) {
            var u = n.getData(a, "instance");
            n.detachGroupEvents("drag"), u.trigger("input"), u.trigger("change");
          };
        },
        onPaletteSampleClick: function(i) {
          var a = i.currentTarget, o = n.getData(a, "instance"), s = n.getData(a, "color");
          o.format.toLowerCase() === "any" && (o._setFormat(s.format), n.isAlphaFormat(o.getFormat()) || (s.rgba[3] = 1)), s.rgba[3] === null && (o.paletteSetsAlpha === !0 || o.paletteSetsAlpha === "auto" && o._paletteHasTransparency) && (s.rgba[3] = 1), o.fromRGBA.apply(o, s.rgba), o.trigger("input"), o.trigger("change"), o.hideOnPaletteClick && o.hide();
        },
        setPad: function(i, a, o, s) {
          var l = n.getAbsPointerPos(a), u = o + l.x - n._pointerOrigin.x - i.padding - i.controlBorderWidth, d = s + l.y - n._pointerOrigin.y - i.padding - i.controlBorderWidth, p = u * (360 / (i.width - 1)), m = 100 - d * (100 / (i.height - 1));
          switch (n.getPadYChannel(i)) {
            case "s":
              i.fromHSVA(p, m, null, null);
              break;
            case "v":
              i.fromHSVA(p, null, m, null);
              break;
          }
        },
        setSld: function(i, a, o) {
          var s = n.getAbsPointerPos(a), l = o + s.y - n._pointerOrigin.y - i.padding - i.controlBorderWidth, u = 100 - l * (100 / (i.height - 1));
          switch (n.getSliderChannel(i)) {
            case "s":
              i.fromHSVA(null, u, null, null);
              break;
            case "v":
              i.fromHSVA(null, null, u, null);
              break;
          }
        },
        setASld: function(i, a, o) {
          var s = n.getAbsPointerPos(a), l = o + s.y - n._pointerOrigin.y - i.padding - i.controlBorderWidth, u = 1 - l * (1 / (i.height - 1));
          if (u < 1) {
            var d = i.getFormat();
            i.format.toLowerCase() === "any" && !n.isAlphaFormat(d) && i._setFormat(d === "hex" ? "hexa" : "rgba");
          }
          i.fromHSVA(null, null, null, u);
        },
        createPadCanvas: function() {
          var i = {
            elm: null,
            draw: null
          }, a = n.createEl("canvas"), o = a.getContext("2d"), s = function(l, u, d) {
            a.width = l, a.height = u, o.clearRect(0, 0, a.width, a.height);
            var p = o.createLinearGradient(0, 0, a.width, 0);
            p.addColorStop(0 / 6, "#F00"), p.addColorStop(1 / 6, "#FF0"), p.addColorStop(2 / 6, "#0F0"), p.addColorStop(3 / 6, "#0FF"), p.addColorStop(4 / 6, "#00F"), p.addColorStop(5 / 6, "#F0F"), p.addColorStop(6 / 6, "#F00"), o.fillStyle = p, o.fillRect(0, 0, a.width, a.height);
            var m = o.createLinearGradient(0, 0, 0, a.height);
            switch (d.toLowerCase()) {
              case "s":
                m.addColorStop(0, "rgba(255,255,255,0)"), m.addColorStop(1, "rgba(255,255,255,1)");
                break;
              case "v":
                m.addColorStop(0, "rgba(0,0,0,0)"), m.addColorStop(1, "rgba(0,0,0,1)");
                break;
            }
            o.fillStyle = m, o.fillRect(0, 0, a.width, a.height);
          };
          return i.elm = a, i.draw = s, i;
        },
        createSliderGradient: function() {
          var i = {
            elm: null,
            draw: null
          }, a = n.createEl("canvas"), o = a.getContext("2d"), s = function(l, u, d, p) {
            a.width = l, a.height = u, o.clearRect(0, 0, a.width, a.height);
            var m = o.createLinearGradient(0, 0, 0, a.height);
            m.addColorStop(0, d), m.addColorStop(1, p), o.fillStyle = m, o.fillRect(0, 0, a.width, a.height);
          };
          return i.elm = a, i.draw = s, i;
        },
        createASliderGradient: function() {
          var i = {
            elm: null,
            draw: null
          }, a = n.createEl("canvas"), o = a.getContext("2d"), s = function(l, u, d) {
            a.width = l, a.height = u, o.clearRect(0, 0, a.width, a.height);
            var p = a.width / 2, m = n.pub.chessboardColor1, E = n.pub.chessboardColor2;
            if (o.fillStyle = m, o.fillRect(0, 0, a.width, a.height), p > 0)
              for (var b = 0; b < a.height; b += p * 2)
                o.fillStyle = E, o.fillRect(0, b, p, p), o.fillRect(p, b + p, p, p);
            var g = o.createLinearGradient(0, 0, 0, a.height);
            g.addColorStop(0, d), g.addColorStop(1, "rgba(0,0,0,0)"), o.fillStyle = g, o.fillRect(0, 0, a.width, a.height);
          };
          return i.elm = a, i.draw = s, i;
        },
        BoxShadow: function() {
          var i = function(a, o, s, l, u, d) {
            this.hShadow = a, this.vShadow = o, this.blur = s, this.spread = l, this.color = u, this.inset = !!d;
          };
          return i.prototype.toString = function() {
            var a = [
              Math.round(this.hShadow) + "px",
              Math.round(this.vShadow) + "px",
              Math.round(this.blur) + "px",
              Math.round(this.spread) + "px",
              this.color
            ];
            return this.inset && a.push("inset"), a.join(" ");
          }, i;
        }(),
        flags: {
          leaveValue: 1,
          leaveAlpha: 2,
          leavePreview: 4
        },
        enumOpts: {
          format: ["auto", "any", "hex", "hexa", "rgb", "rgba"],
          previewPosition: ["left", "right"],
          mode: ["hsv", "hvs", "hs", "hv"],
          position: ["left", "right", "top", "bottom"],
          alphaChannel: ["auto", !0, !1],
          paletteSetsAlpha: ["auto", !0, !1]
        },
        deprecatedOpts: {
          // <old_option>: <new_option>  (<new_option> can be null)
          styleElement: "previewElement",
          onFineChange: "onInput",
          overwriteImportant: "forceStyle",
          closable: "closeButton",
          insetWidth: "controlBorderWidth",
          insetColor: "controlBorderColor",
          refine: null
        },
        docsRef: " See https://jscolor.com/docs/",
        //
        // Usage:
        // var myPicker = new JSColor(<targetElement> [, <options>])
        //
        // (constructor is accessible via both 'jscolor' and 'JSColor' name)
        //
        pub: function(i, a) {
          var o = this;
          a || (a = {}), this.channels = {
            r: 255,
            // red [0-255]
            g: 255,
            // green [0-255]
            b: 255,
            // blue [0-255]
            h: 0,
            // hue [0-360]
            s: 0,
            // saturation [0-100]
            v: 100,
            // value (brightness) [0-100]
            a: 1
            // alpha (opacity) [0.0 - 1.0]
          }, this.format = "auto", this.value = void 0, this.alpha = void 0, this.random = !1, this.onChange = void 0, this.onInput = void 0, this.valueElement = void 0, this.alphaElement = void 0, this.previewElement = void 0, this.previewPosition = "left", this.previewSize = 32, this.previewPadding = 8, this.required = !0, this.hash = !0, this.uppercase = !0, this.forceStyle = !0, this.width = 181, this.height = 101, this.mode = "HSV", this.alphaChannel = "auto", this.position = "bottom", this.smartPosition = !0, this.showOnClick = !0, this.hideOnLeave = !0, this.palette = [], this.paletteCols = 10, this.paletteSetsAlpha = "auto", this.paletteHeight = 16, this.paletteSpacing = 4, this.hideOnPaletteClick = !1, this.sliderSize = 16, this.crossSize = 8, this.closeButton = !1, this.closeText = "Close", this.buttonColor = "rgba(0,0,0,1)", this.buttonHeight = 18, this.padding = 12, this.backgroundColor = "rgba(255,255,255,1)", this.borderWidth = 1, this.borderColor = "rgba(187,187,187,1)", this.borderRadius = 8, this.controlBorderWidth = 1, this.controlBorderColor = "rgba(187,187,187,1)", this.shadow = !0, this.shadowBlur = 15, this.shadowColor = "rgba(0,0,0,0.2)", this.pointerColor = "rgba(76,76,76,1)", this.pointerBorderWidth = 1, this.pointerBorderColor = "rgba(255,255,255,1)", this.pointerThickness = 2, this.zIndex = 5e3, this.container = void 0, this.minS = 0, this.maxS = 100, this.minV = 0, this.maxV = 100, this.minA = 0, this.maxA = 1, this.option = function() {
            if (!arguments.length)
              throw new Error("No option specified");
            if (arguments.length === 1 && typeof arguments[0] == "string") {
              try {
                return l(arguments[0]);
              } catch (S) {
                console.warn(S);
              }
              return !1;
            } else if (arguments.length >= 2 && typeof arguments[0] == "string") {
              try {
                if (!s(arguments[0], arguments[1]))
                  return !1;
              } catch (S) {
                return console.warn(S), !1;
              }
              return this.redraw(), this.exposeColor(), !0;
            } else if (arguments.length === 1 && typeof arguments[0] == "object") {
              var c = arguments[0], v = !0;
              for (var w in c)
                if (c.hasOwnProperty(w))
                  try {
                    s(w, c[w]) || (v = !1);
                  } catch (S) {
                    console.warn(S), v = !1;
                  }
              return this.redraw(), this.exposeColor(), v;
            }
            throw new Error("Invalid arguments");
          }, this.channel = function(c, v) {
            if (typeof c != "string")
              throw new Error("Invalid value for channel name: " + c);
            if (v === void 0)
              return this.channels.hasOwnProperty(c.toLowerCase()) ? this.channels[c.toLowerCase()] : (console.warn("Getting unknown channel: " + c), !1);
            var w = !1;
            switch (c.toLowerCase()) {
              case "r":
                w = this.fromRGBA(v, null, null, null);
                break;
              case "g":
                w = this.fromRGBA(null, v, null, null);
                break;
              case "b":
                w = this.fromRGBA(null, null, v, null);
                break;
              case "h":
                w = this.fromHSVA(v, null, null, null);
                break;
              case "s":
                w = this.fromHSVA(null, v, null, null);
                break;
              case "v":
                w = this.fromHSVA(null, null, v, null);
                break;
              case "a":
                w = this.fromHSVA(null, null, null, v);
                break;
              default:
                return console.warn("Setting unknown channel: " + c), !1;
            }
            return w ? (this.redraw(), !0) : !1;
          }, this.trigger = function(c) {
            for (var v = n.strList(c), w = 0; w < v.length; w += 1) {
              var S = v[w].toLowerCase(), j = null;
              switch (S) {
                case "input":
                  j = "onInput";
                  break;
                case "change":
                  j = "onChange";
                  break;
              }
              j && n.triggerCallback(this, j), n.triggerInputEvent(this.valueElement, S, !0, !0);
            }
          }, this.fromHSVA = function(c, v, w, S, j) {
            if (c === void 0 && (c = null), v === void 0 && (v = null), w === void 0 && (w = null), S === void 0 && (S = null), c !== null) {
              if (isNaN(c))
                return !1;
              this.channels.h = Math.max(0, Math.min(360, c));
            }
            if (v !== null) {
              if (isNaN(v))
                return !1;
              this.channels.s = Math.max(0, Math.min(100, this.maxS, v), this.minS);
            }
            if (w !== null) {
              if (isNaN(w))
                return !1;
              this.channels.v = Math.max(0, Math.min(100, this.maxV, w), this.minV);
            }
            if (S !== null) {
              if (isNaN(S))
                return !1;
              this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, S), this.minA) : 1;
            }
            var T = n.HSV_RGB(
              this.channels.h,
              this.channels.s,
              this.channels.v
            );
            return this.channels.r = T[0], this.channels.g = T[1], this.channels.b = T[2], this.exposeColor(j), !0;
          }, this.fromRGBA = function(c, v, w, S, j) {
            if (c === void 0 && (c = null), v === void 0 && (v = null), w === void 0 && (w = null), S === void 0 && (S = null), c !== null) {
              if (isNaN(c))
                return !1;
              c = Math.max(0, Math.min(255, c));
            }
            if (v !== null) {
              if (isNaN(v))
                return !1;
              v = Math.max(0, Math.min(255, v));
            }
            if (w !== null) {
              if (isNaN(w))
                return !1;
              w = Math.max(0, Math.min(255, w));
            }
            if (S !== null) {
              if (isNaN(S))
                return !1;
              this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, S), this.minA) : 1;
            }
            var T = n.RGB_HSV(
              c === null ? this.channels.r : c,
              v === null ? this.channels.g : v,
              w === null ? this.channels.b : w
            );
            T[0] !== null && (this.channels.h = Math.max(0, Math.min(360, T[0]))), T[2] !== 0 && (this.channels.s = Math.max(0, this.minS, Math.min(100, this.maxS, T[1]))), this.channels.v = Math.max(0, this.minV, Math.min(100, this.maxV, T[2]));
            var O = n.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
            return this.channels.r = O[0], this.channels.g = O[1], this.channels.b = O[2], this.exposeColor(j), !0;
          }, this.fromHSV = function(c, v, w, S) {
            return console.warn("fromHSV() method is DEPRECATED. Using fromHSVA() instead." + n.docsRef), this.fromHSVA(c, v, w, null, S);
          }, this.fromRGB = function(c, v, w, S) {
            return console.warn("fromRGB() method is DEPRECATED. Using fromRGBA() instead." + n.docsRef), this.fromRGBA(c, v, w, null, S);
          }, this.fromString = function(c, v) {
            if (!this.required && c.trim() === "")
              return this.setPreviewElementBg(null), this.setValueElementValue(""), !0;
            var w = n.parseColorString(c);
            return w ? (this.format.toLowerCase() === "any" && (this._setFormat(w.format), n.isAlphaFormat(this.getFormat()) || (w.rgba[3] = 1)), this.fromRGBA(
              w.rgba[0],
              w.rgba[1],
              w.rgba[2],
              w.rgba[3],
              v
            ), !0) : !1;
          }, this.randomize = function(c, v, w, S, j, T, O, L) {
            c === void 0 && (c = 0), v === void 0 && (v = 100), w === void 0 && (w = 0), S === void 0 && (S = 100), j === void 0 && (j = 0), T === void 0 && (T = 359), O === void 0 && (O = 1), L === void 0 && (L = 1), this.fromHSVA(
              j + Math.floor(Math.random() * (T - j + 1)),
              w + Math.floor(Math.random() * (S - w + 1)),
              c + Math.floor(Math.random() * (v - c + 1)),
              (100 * O + Math.floor(Math.random() * (100 * (L - O) + 1))) / 100
            );
          }, this.toString = function(c) {
            switch (c === void 0 && (c = this.getFormat()), c.toLowerCase()) {
              case "hex":
                return this.toHEXString();
              case "hexa":
                return this.toHEXAString();
              case "rgb":
                return this.toRGBString();
              case "rgba":
                return this.toRGBAString();
            }
            return !1;
          }, this.toHEXString = function() {
            return n.hexColor(
              this.channels.r,
              this.channels.g,
              this.channels.b
            );
          }, this.toHEXAString = function() {
            return n.hexaColor(
              this.channels.r,
              this.channels.g,
              this.channels.b,
              this.channels.a
            );
          }, this.toRGBString = function() {
            return n.rgbColor(
              this.channels.r,
              this.channels.g,
              this.channels.b
            );
          }, this.toRGBAString = function() {
            return n.rgbaColor(
              this.channels.r,
              this.channels.g,
              this.channels.b,
              this.channels.a
            );
          }, this.toGrayscale = function() {
            return 0.213 * this.channels.r + 0.715 * this.channels.g + 0.072 * this.channels.b;
          }, this.toCanvas = function() {
            return n.genColorPreviewCanvas(this.toRGBAString()).canvas;
          }, this.toDataURL = function() {
            return this.toCanvas().toDataURL();
          }, this.toBackground = function() {
            return n.pub.background(this.toRGBAString());
          }, this.isLight = function() {
            return this.toGrayscale() > 127.5;
          }, this.hide = function() {
            b() && u();
          }, this.show = function() {
            d();
          }, this.redraw = function() {
            b() && d();
          }, this.getFormat = function() {
            return this._currentFormat;
          }, this._setFormat = function(c) {
            this._currentFormat = c.toLowerCase();
          }, this.hasAlphaChannel = function() {
            return this.alphaChannel === "auto" ? this.format.toLowerCase() === "any" || // format can change on the fly (e.g. from hex to rgba), so let's consider the alpha channel enabled
            n.isAlphaFormat(this.getFormat()) || // the current format supports alpha channel
            this.alpha !== void 0 || // initial alpha value is set, so we're working with alpha channel
            this.alphaElement !== void 0 : this.alphaChannel;
          }, this.processValueInput = function(c) {
            this.fromString(c) || this.exposeColor();
          }, this.processAlphaInput = function(c) {
            this.fromHSVA(null, null, null, parseFloat(c)) || this.exposeColor();
          }, this.exposeColor = function(c) {
            var v = this.toString(), w = this.getFormat();
            if (n.setDataAttr(this.targetElement, "current-color", v), !(c & n.flags.leaveValue) && this.valueElement && ((w === "hex" || w === "hexa") && (this.uppercase || (v = v.toLowerCase()), this.hash || (v = v.replace(/^#/, ""))), this.setValueElementValue(v)), !(c & n.flags.leaveAlpha) && this.alphaElement) {
              var S = Math.round(this.channels.a * 100) / 100;
              this.setAlphaElementValue(S);
            }
            !(c & n.flags.leavePreview) && this.previewElement && ((n.isTextInput(this.previewElement) || // text input
            n.isButton(this.previewElement) && !n.isButtonEmpty(this.previewElement)) && this.previewPosition, this.setPreviewElementBg(this.toRGBAString())), b() && (p(), m(), E());
          }, this.setPreviewElementBg = function(c) {
            if (this.previewElement) {
              var v = null, w = null;
              (n.isTextInput(this.previewElement) || // text input
              n.isButton(this.previewElement) && !n.isButtonEmpty(this.previewElement)) && (v = this.previewPosition, w = this.previewSize);
              var S = [];
              if (!c)
                S.push({
                  image: "none",
                  position: "left top",
                  size: "auto",
                  repeat: "no-repeat",
                  origin: "padding-box"
                });
              else {
                S.push({
                  image: n.genColorPreviewGradient(
                    c,
                    v,
                    w ? w - n.pub.previewSeparator.length : null
                  ),
                  position: "left top",
                  size: "auto",
                  repeat: v ? "repeat-y" : "repeat",
                  origin: "padding-box"
                });
                var j = n.genColorPreviewCanvas(
                  "rgba(0,0,0,0)",
                  v ? { left: "right", right: "left" }[v] : null,
                  w,
                  !0
                );
                S.push({
                  image: "url('" + j.canvas.toDataURL() + "')",
                  position: (v || "left") + " top",
                  size: j.width + "px " + j.height + "px",
                  repeat: v ? "repeat-y" : "repeat",
                  origin: "padding-box"
                });
              }
              for (var T = {
                image: [],
                position: [],
                size: [],
                repeat: [],
                origin: []
              }, O = 0; O < S.length; O += 1)
                T.image.push(S[O].image), T.position.push(S[O].position), T.size.push(S[O].size), T.repeat.push(S[O].repeat), T.origin.push(S[O].origin);
              var z = {
                "background-image": T.image.join(", "),
                "background-position": T.position.join(", "),
                "background-size": T.size.join(", "),
                "background-repeat": T.repeat.join(", "),
                "background-origin": T.origin.join(", ")
              };
              n.setStyle(this.previewElement, z, this.forceStyle);
              var L = {
                left: null,
                right: null
              };
              v && (L[v] = this.previewSize + this.previewPadding + "px");
              var z = {
                "padding-left": L.left,
                "padding-right": L.right
              };
              n.setStyle(this.previewElement, z, this.forceStyle, !0);
            }
          }, this.setValueElementValue = function(c) {
            this.valueElement && (n.nodeName(this.valueElement) === "input" ? this.valueElement.value = c : this.valueElement.innerHTML = c);
          }, this.setAlphaElementValue = function(c) {
            this.alphaElement && (n.nodeName(this.alphaElement) === "input" ? this.alphaElement.value = c : this.alphaElement.innerHTML = c);
          }, this._processParentElementsInDOM = function() {
            if (!this._parentElementsProcessed) {
              this._parentElementsProcessed = !0;
              var c = this.targetElement;
              do {
                var v = n.getCompStyle(c);
                v.position && v.position.toLowerCase() === "fixed" && (this.fixed = !0), c !== this.targetElement && (n.getData(c, "hasScrollListener") || (c.addEventListener("scroll", n.onParentScroll, !1), n.setData(c, "hasScrollListener", !0)));
              } while ((c = c.parentNode) && n.nodeName(c) !== "body");
            }
          }, this.tryHide = function() {
            this.hideOnLeave && this.hide();
          }, this.set__palette = function(c) {
            this.palette = c, this._palette = n.parsePaletteValue(c), this._paletteHasTransparency = n.containsTranparentColor(this._palette);
          };
          function s(c, v) {
            if (typeof c != "string")
              throw new Error("Invalid value for option name: " + c);
            if (n.enumOpts.hasOwnProperty(c) && (typeof v == "string" && (v = v.toLowerCase()), n.enumOpts[c].indexOf(v) === -1))
              throw new Error("Option '" + c + "' has invalid value: " + v);
            if (n.deprecatedOpts.hasOwnProperty(c)) {
              var w = c, S = n.deprecatedOpts[c];
              if (S)
                console.warn("Option '%s' is DEPRECATED, using '%s' instead." + n.docsRef, w, S), c = S;
              else
                throw new Error("Option '" + c + "' is DEPRECATED");
            }
            var j = "set__" + c;
            if (typeof o[j] == "function")
              return o[j](v), !0;
            if (c in o)
              return o[c] = v, !0;
            throw new Error("Unrecognized configuration option: " + c);
          }
          function l(c) {
            if (typeof c != "string")
              throw new Error("Invalid value for option name: " + c);
            if (n.deprecatedOpts.hasOwnProperty(c)) {
              var v = c, w = n.deprecatedOpts[c];
              if (w)
                console.warn("Option '%s' is DEPRECATED, using '%s' instead." + n.docsRef, v, w), c = w;
              else
                throw new Error("Option '" + c + "' is DEPRECATED");
            }
            var S = "get__" + c;
            if (typeof o[S] == "function")
              return o[S](value);
            if (c in o)
              return o[c];
            throw new Error("Unrecognized configuration option: " + c);
          }
          function u() {
            n.removeClass(o.targetElement, n.pub.activeClassName), n.picker.wrap.parentNode.removeChild(n.picker.wrap), delete n.picker.owner;
          }
          function d() {
            o._processParentElementsInDOM(), n.picker || (n.picker = {
              owner: null,
              // owner picker instance
              wrap: n.createEl("div"),
              box: n.createEl("div"),
              boxS: n.createEl("div"),
              // shadow area
              boxB: n.createEl("div"),
              // border
              pad: n.createEl("div"),
              padB: n.createEl("div"),
              // border
              padM: n.createEl("div"),
              // mouse/touch area
              padCanvas: n.createPadCanvas(),
              cross: n.createEl("div"),
              crossBY: n.createEl("div"),
              // border Y
              crossBX: n.createEl("div"),
              // border X
              crossLY: n.createEl("div"),
              // line Y
              crossLX: n.createEl("div"),
              // line X
              sld: n.createEl("div"),
              // slider
              sldB: n.createEl("div"),
              // border
              sldM: n.createEl("div"),
              // mouse/touch area
              sldGrad: n.createSliderGradient(),
              sldPtrS: n.createEl("div"),
              // slider pointer spacer
              sldPtrIB: n.createEl("div"),
              // slider pointer inner border
              sldPtrMB: n.createEl("div"),
              // slider pointer middle border
              sldPtrOB: n.createEl("div"),
              // slider pointer outer border
              asld: n.createEl("div"),
              // alpha slider
              asldB: n.createEl("div"),
              // border
              asldM: n.createEl("div"),
              // mouse/touch area
              asldGrad: n.createASliderGradient(),
              asldPtrS: n.createEl("div"),
              // slider pointer spacer
              asldPtrIB: n.createEl("div"),
              // slider pointer inner border
              asldPtrMB: n.createEl("div"),
              // slider pointer middle border
              asldPtrOB: n.createEl("div"),
              // slider pointer outer border
              pal: n.createEl("div"),
              // palette
              btn: n.createEl("div"),
              btnT: n.createEl("div")
              // text
            }, n.picker.pad.appendChild(n.picker.padCanvas.elm), n.picker.padB.appendChild(n.picker.pad), n.picker.cross.appendChild(n.picker.crossBY), n.picker.cross.appendChild(n.picker.crossBX), n.picker.cross.appendChild(n.picker.crossLY), n.picker.cross.appendChild(n.picker.crossLX), n.picker.padB.appendChild(n.picker.cross), n.picker.box.appendChild(n.picker.padB), n.picker.box.appendChild(n.picker.padM), n.picker.sld.appendChild(n.picker.sldGrad.elm), n.picker.sldB.appendChild(n.picker.sld), n.picker.sldB.appendChild(n.picker.sldPtrOB), n.picker.sldPtrOB.appendChild(n.picker.sldPtrMB), n.picker.sldPtrMB.appendChild(n.picker.sldPtrIB), n.picker.sldPtrIB.appendChild(n.picker.sldPtrS), n.picker.box.appendChild(n.picker.sldB), n.picker.box.appendChild(n.picker.sldM), n.picker.asld.appendChild(n.picker.asldGrad.elm), n.picker.asldB.appendChild(n.picker.asld), n.picker.asldB.appendChild(n.picker.asldPtrOB), n.picker.asldPtrOB.appendChild(n.picker.asldPtrMB), n.picker.asldPtrMB.appendChild(n.picker.asldPtrIB), n.picker.asldPtrIB.appendChild(n.picker.asldPtrS), n.picker.box.appendChild(n.picker.asldB), n.picker.box.appendChild(n.picker.asldM), n.picker.box.appendChild(n.picker.pal), n.picker.btn.appendChild(n.picker.btnT), n.picker.box.appendChild(n.picker.btn), n.picker.boxB.appendChild(n.picker.box), n.picker.wrap.appendChild(n.picker.boxS), n.picker.wrap.appendChild(n.picker.boxB), n.picker.wrap.addEventListener(
              "touchstart",
              n.onPickerTouchStart,
              n.isPassiveEventSupported ? { passive: !1 } : !1
            ));
            var c = n.picker, v = !!n.getSliderChannel(o), w = o.hasAlphaChannel(), S = n.getPickerDims(o), j = 2 * o.pointerBorderWidth + o.pointerThickness + 2 * o.crossSize, T = n.getControlPadding(o), O = Math.min(
              o.borderRadius,
              Math.round(o.padding * Math.PI)
            ), L = "crosshair";
            c.wrap.className = "jscolor-wrap", c.wrap.style.width = S.borderW + "px", c.wrap.style.height = S.borderH + "px", c.wrap.style.zIndex = o.zIndex, c.box.className = "jscolor-picker", c.box.style.width = S.paddedW + "px", c.box.style.height = S.paddedH + "px", c.boxS.className = "jscolor-shadow", n.setBorderRadius(c.boxS, O + "px"), c.boxB.className = "jscolor-border", c.boxB.style.border = o.borderWidth + "px solid", c.boxB.style.borderColor = o.borderColor, c.boxB.style.background = o.backgroundColor, n.setBorderRadius(c.boxB, O + "px"), c.padM.style.background = "rgba(255,0,0,.2)", c.sldM.style.background = "rgba(0,255,0,.2)", c.asldM.style.background = "rgba(0,0,255,.2)", c.padM.style.opacity = c.sldM.style.opacity = c.asldM.style.opacity = "0", c.pad.style.position = "relative", c.pad.style.width = o.width + "px", c.pad.style.height = o.height + "px", c.padCanvas.draw(o.width, o.height, n.getPadYChannel(o)), c.padB.style.position = "absolute", c.padB.style.left = o.padding + "px", c.padB.style.top = o.padding + "px", c.padB.style.border = o.controlBorderWidth + "px solid", c.padB.style.borderColor = o.controlBorderColor, c.padM.style.position = "absolute", c.padM.style.left = "0px", c.padM.style.top = "0px", c.padM.style.width = o.padding + 2 * o.controlBorderWidth + o.width + T + "px", c.padM.style.height = 2 * o.controlBorderWidth + 2 * o.padding + o.height + "px", c.padM.style.cursor = L, n.setData(c.padM, {
              instance: o,
              control: "pad"
            }), c.cross.style.position = "absolute", c.cross.style.left = c.cross.style.top = "0", c.cross.style.width = c.cross.style.height = j + "px", c.crossBY.style.position = c.crossBX.style.position = "absolute", c.crossBY.style.background = c.crossBX.style.background = o.pointerBorderColor, c.crossBY.style.width = c.crossBX.style.height = 2 * o.pointerBorderWidth + o.pointerThickness + "px", c.crossBY.style.height = c.crossBX.style.width = j + "px", c.crossBY.style.left = c.crossBX.style.top = Math.floor(j / 2) - Math.floor(o.pointerThickness / 2) - o.pointerBorderWidth + "px", c.crossBY.style.top = c.crossBX.style.left = "0", c.crossLY.style.position = c.crossLX.style.position = "absolute", c.crossLY.style.background = c.crossLX.style.background = o.pointerColor, c.crossLY.style.height = c.crossLX.style.width = j - 2 * o.pointerBorderWidth + "px", c.crossLY.style.width = c.crossLX.style.height = o.pointerThickness + "px", c.crossLY.style.left = c.crossLX.style.top = Math.floor(j / 2) - Math.floor(o.pointerThickness / 2) + "px", c.crossLY.style.top = c.crossLX.style.left = o.pointerBorderWidth + "px", c.sld.style.overflow = "hidden", c.sld.style.width = o.sliderSize + "px", c.sld.style.height = o.height + "px", c.sldGrad.draw(o.sliderSize, o.height, "#000", "#000"), c.sldB.style.display = v ? "block" : "none", c.sldB.style.position = "absolute", c.sldB.style.left = o.padding + o.width + 2 * o.controlBorderWidth + 2 * T + "px", c.sldB.style.top = o.padding + "px", c.sldB.style.border = o.controlBorderWidth + "px solid", c.sldB.style.borderColor = o.controlBorderColor, c.sldM.style.display = v ? "block" : "none", c.sldM.style.position = "absolute", c.sldM.style.left = o.padding + o.width + 2 * o.controlBorderWidth + T + "px", c.sldM.style.top = "0px", c.sldM.style.width = o.sliderSize + 2 * T + 2 * o.controlBorderWidth + (w ? 0 : Math.max(0, o.padding - T)) + "px", c.sldM.style.height = 2 * o.controlBorderWidth + 2 * o.padding + o.height + "px", c.sldM.style.cursor = "default", n.setData(c.sldM, {
              instance: o,
              control: "sld"
            }), c.sldPtrIB.style.border = c.sldPtrOB.style.border = o.pointerBorderWidth + "px solid " + o.pointerBorderColor, c.sldPtrOB.style.position = "absolute", c.sldPtrOB.style.left = -(2 * o.pointerBorderWidth + o.pointerThickness) + "px", c.sldPtrOB.style.top = "0", c.sldPtrMB.style.border = o.pointerThickness + "px solid " + o.pointerColor, c.sldPtrS.style.width = o.sliderSize + "px", c.sldPtrS.style.height = n.pub.sliderInnerSpace + "px", c.asld.style.overflow = "hidden", c.asld.style.width = o.sliderSize + "px", c.asld.style.height = o.height + "px", c.asldGrad.draw(o.sliderSize, o.height, "#000"), c.asldB.style.display = w ? "block" : "none", c.asldB.style.position = "absolute", c.asldB.style.left = o.padding + o.width + 2 * o.controlBorderWidth + T + (v ? o.sliderSize + 3 * T + 2 * o.controlBorderWidth : 0) + "px", c.asldB.style.top = o.padding + "px", c.asldB.style.border = o.controlBorderWidth + "px solid", c.asldB.style.borderColor = o.controlBorderColor, c.asldM.style.display = w ? "block" : "none", c.asldM.style.position = "absolute", c.asldM.style.left = o.padding + o.width + 2 * o.controlBorderWidth + T + (v ? o.sliderSize + 2 * T + 2 * o.controlBorderWidth : 0) + "px", c.asldM.style.top = "0px", c.asldM.style.width = o.sliderSize + 2 * T + 2 * o.controlBorderWidth + Math.max(0, o.padding - T) + "px", c.asldM.style.height = 2 * o.controlBorderWidth + 2 * o.padding + o.height + "px", c.asldM.style.cursor = "default", n.setData(c.asldM, {
              instance: o,
              control: "asld"
            }), c.asldPtrIB.style.border = c.asldPtrOB.style.border = o.pointerBorderWidth + "px solid " + o.pointerBorderColor, c.asldPtrOB.style.position = "absolute", c.asldPtrOB.style.left = -(2 * o.pointerBorderWidth + o.pointerThickness) + "px", c.asldPtrOB.style.top = "0", c.asldPtrMB.style.border = o.pointerThickness + "px solid " + o.pointerColor, c.asldPtrS.style.width = o.sliderSize + "px", c.asldPtrS.style.height = n.pub.sliderInnerSpace + "px", c.pal.className = "jscolor-palette", c.pal.style.display = S.palette.rows ? "block" : "none", c.pal.style.left = o.padding + "px", c.pal.style.top = 2 * o.controlBorderWidth + 2 * o.padding + o.height + "px", c.pal.innerHTML = "";
            for (var z = n.genColorPreviewCanvas("rgba(0,0,0,0)"), X = 0, Z = 0; Z < S.palette.rows; Z++)
              for (var ae = 0; ae < S.palette.cols && X < o._palette.length; ae++, X++) {
                var de = o._palette[X], pe = n.rgbaColor.apply(null, de.rgba), ge = n.createEl("div");
                ge.style.width = S.palette.cellW - 2 * o.controlBorderWidth + "px", ge.style.height = S.palette.cellH - 2 * o.controlBorderWidth + "px", ge.style.backgroundColor = pe;
                var fe = n.createEl("div");
                fe.className = "jscolor-palette-sw", fe.style.left = (S.palette.cols <= 1 ? 0 : Math.round(10 * (ae * ((S.contentW - S.palette.cellW) / (S.palette.cols - 1)))) / 10) + "px", fe.style.top = Z * (S.palette.cellH + o.paletteSpacing) + "px", fe.style.border = o.controlBorderWidth + "px solid", fe.style.borderColor = o.controlBorderColor, de.rgba[3] !== null && de.rgba[3] < 1 && (fe.style.backgroundImage = "url('" + z.canvas.toDataURL() + "')", fe.style.backgroundRepeat = "repeat", fe.style.backgroundPosition = "center center"), n.setData(fe, {
                  instance: o,
                  control: "palette-sw",
                  color: de
                }), fe.addEventListener("click", n.onPaletteSampleClick, !1), fe.appendChild(ge), c.pal.appendChild(fe);
              }
            function Ae() {
              var De = o.controlBorderColor.split(/\s+/), tt = De.length < 2 ? De[0] : De[1] + " " + De[0] + " " + De[0] + " " + De[1];
              c.btn.style.borderColor = tt;
            }
            var qe = 15;
            c.btn.className = "jscolor-btn jscolor-btn-close", c.btn.style.display = o.closeButton ? "block" : "none", c.btn.style.left = o.padding + "px", c.btn.style.bottom = o.padding + "px", c.btn.style.padding = "0 " + qe + "px", c.btn.style.maxWidth = S.contentW - 2 * o.controlBorderWidth - 2 * qe + "px", c.btn.style.height = o.buttonHeight + "px", c.btn.style.border = o.controlBorderWidth + "px solid", Ae(), c.btn.style.color = o.buttonColor, c.btn.onmousedown = function() {
              o.hide();
            }, c.btnT.style.display = "inline", c.btnT.style.lineHeight = o.buttonHeight + "px", c.btnT.innerText = o.closeText, p(), m(), E(), n.picker.owner && n.picker.owner !== o && n.removeClass(n.picker.owner.targetElement, n.pub.activeClassName), n.picker.owner = o, n.redrawPosition(), c.wrap.parentNode !== o.container && o.container.appendChild(c.wrap), n.addClass(o.targetElement, n.pub.activeClassName);
          }
          function p() {
            var c = n.getPadYChannel(o), v = Math.round(o.channels.h / 360 * (o.width - 1)), w = Math.round((1 - o.channels[c] / 100) * (o.height - 1)), S = 2 * o.pointerBorderWidth + o.pointerThickness + 2 * o.crossSize, j = -Math.floor(S / 2);
            switch (n.picker.cross.style.left = v + j + "px", n.picker.cross.style.top = w + j + "px", n.getSliderChannel(o)) {
              case "s":
                var T = n.HSV_RGB(o.channels.h, 100, o.channels.v), O = n.HSV_RGB(o.channels.h, 0, o.channels.v), z = "rgb(" + Math.round(T[0]) + "," + Math.round(T[1]) + "," + Math.round(T[2]) + ")", X = "rgb(" + Math.round(O[0]) + "," + Math.round(O[1]) + "," + Math.round(O[2]) + ")";
                n.picker.sldGrad.draw(o.sliderSize, o.height, z, X);
                break;
              case "v":
                var L = n.HSV_RGB(o.channels.h, o.channels.s, 100), z = "rgb(" + Math.round(L[0]) + "," + Math.round(L[1]) + "," + Math.round(L[2]) + ")", X = "#000";
                n.picker.sldGrad.draw(o.sliderSize, o.height, z, X);
                break;
            }
            n.picker.asldGrad.draw(o.sliderSize, o.height, o.toHEXString());
          }
          function m() {
            var c = n.getSliderChannel(o);
            if (c) {
              var v = Math.round((1 - o.channels[c] / 100) * (o.height - 1));
              n.picker.sldPtrOB.style.top = v - (2 * o.pointerBorderWidth + o.pointerThickness) - Math.floor(n.pub.sliderInnerSpace / 2) + "px";
            }
            n.picker.asldGrad.draw(o.sliderSize, o.height, o.toHEXString());
          }
          function E() {
            var c = Math.round((1 - o.channels.a) * (o.height - 1));
            n.picker.asldPtrOB.style.top = c - (2 * o.pointerBorderWidth + o.pointerThickness) - Math.floor(n.pub.sliderInnerSpace / 2) + "px";
          }
          function b() {
            return n.picker && n.picker.owner === o;
          }
          function g(c) {
            n.eventKey(c) === "Enter" && (o.valueElement && o.processValueInput(o.valueElement.value), o.tryHide());
          }
          function y(c) {
            n.eventKey(c) === "Enter" && (o.alphaElement && o.processAlphaInput(o.alphaElement.value), o.tryHide());
          }
          function M(c) {
            if (!n.getData(c, "internal")) {
              var v = o.valueElement.value;
              o.processValueInput(o.valueElement.value), n.triggerCallback(o, "onChange"), o.valueElement.value !== v && n.triggerInputEvent(o.valueElement, "change", !0, !0);
            }
          }
          function I(c) {
            if (!n.getData(c, "internal")) {
              var v = o.alphaElement.value;
              o.processAlphaInput(o.alphaElement.value), n.triggerCallback(o, "onChange"), n.triggerInputEvent(o.valueElement, "change", !0, !0), o.alphaElement.value !== v && n.triggerInputEvent(o.alphaElement, "change", !0, !0);
            }
          }
          function $(c) {
            n.getData(c, "internal") || (o.valueElement && o.fromString(o.valueElement.value, n.flags.leaveValue), n.triggerCallback(o, "onInput"));
          }
          function F(c) {
            n.getData(c, "internal") || (o.alphaElement && o.fromHSVA(null, null, null, parseFloat(o.alphaElement.value), n.flags.leaveAlpha), n.triggerCallback(o, "onInput"), n.triggerInputEvent(o.valueElement, "input", !0, !0));
          }
          if (n.pub.options) {
            for (var R in n.pub.options)
              if (n.pub.options.hasOwnProperty(R))
                try {
                  s(R, n.pub.options[R]);
                } catch (c) {
                  console.warn(c);
                }
          }
          var N = [];
          a.preset && (typeof a.preset == "string" ? N = a.preset.split(/\s+/) : Array.isArray(a.preset) ? N = a.preset.slice() : console.warn("Unrecognized preset value")), N.indexOf("default") === -1 && N.push("default");
          for (var x = N.length - 1; x >= 0; x -= 1) {
            var D = N[x];
            if (D) {
              if (!n.pub.presets.hasOwnProperty(D)) {
                console.warn("Unknown preset: %s", D);
                continue;
              }
              for (var R in n.pub.presets[D])
                if (n.pub.presets[D].hasOwnProperty(R))
                  try {
                    s(R, n.pub.presets[D][R]);
                  } catch (v) {
                    console.warn(v);
                  }
            }
          }
          var Y = [
            // these options won't be set as instance properties
            "preset"
          ];
          for (var R in a)
            if (a.hasOwnProperty(R) && Y.indexOf(R) === -1)
              try {
                s(R, a[R]);
              } catch (v) {
                console.warn(v);
              }
          if (this.container === void 0 ? this.container = t.document.body : this.container = n.node(this.container), !this.container)
            throw new Error("Cannot instantiate color picker without a container element");
          if (this.targetElement = n.node(i), !this.targetElement) {
            if (typeof i == "string" && /^[a-zA-Z][\w:.-]*$/.test(i)) {
              var W = i;
              throw new Error("If '" + W + "' is supposed to be an ID, please use '#" + W + "' or any valid CSS selector.");
            }
            throw new Error("Cannot instantiate color picker without a target element");
          }
          if (this.targetElement.jscolor && this.targetElement.jscolor instanceof n.pub)
            throw new Error("Color picker already installed on this element");
          if (this.targetElement.jscolor = this, n.addClass(this.targetElement, n.pub.className), n.instances.push(this), n.isButton(this.targetElement) && (this.targetElement.type.toLowerCase() !== "button" && (this.targetElement.type = "button"), n.isButtonEmpty(this.targetElement))) {
            n.removeChildren(this.targetElement), this.targetElement.appendChild(t.document.createTextNode(" "));
            var B = n.getCompStyle(this.targetElement), J = parseFloat(B["min-width"]) || 0;
            J < this.previewSize && n.setStyle(this.targetElement, {
              "min-width": this.previewSize + "px"
            }, this.forceStyle);
          }
          if (this.valueElement === void 0 ? n.isTextInput(this.targetElement) && (this.valueElement = this.targetElement) : this.valueElement === null || (this.valueElement = n.node(this.valueElement)), this.alphaElement && (this.alphaElement = n.node(this.alphaElement)), this.previewElement === void 0 ? this.previewElement = this.targetElement : this.previewElement === null || (this.previewElement = n.node(this.previewElement)), this.valueElement && n.isTextInput(this.valueElement)) {
            var U = {
              onInput: this.valueElement.oninput
            };
            this.valueElement.oninput = null, this.valueElement.addEventListener("keydown", g, !1), this.valueElement.addEventListener("change", M, !1), this.valueElement.addEventListener("input", $, !1), U.onInput && this.valueElement.addEventListener("input", U.onInput, !1), this.valueElement.setAttribute("autocomplete", "off"), this.valueElement.setAttribute("autocorrect", "off"), this.valueElement.setAttribute("autocapitalize", "off"), this.valueElement.setAttribute("spellcheck", !1);
          }
          this.alphaElement && n.isTextInput(this.alphaElement) && (this.alphaElement.addEventListener("keydown", y, !1), this.alphaElement.addEventListener("change", I, !1), this.alphaElement.addEventListener("input", F, !1), this.alphaElement.setAttribute("autocomplete", "off"), this.alphaElement.setAttribute("autocorrect", "off"), this.alphaElement.setAttribute("autocapitalize", "off"), this.alphaElement.setAttribute("spellcheck", !1));
          var H = "FFFFFF";
          this.value !== void 0 ? H = this.value : this.valueElement && this.valueElement.value !== void 0 && (H = this.valueElement.value);
          var k = void 0;
          if (this.alpha !== void 0 ? k = "" + this.alpha : this.alphaElement && this.alphaElement.value !== void 0 && (k = this.alphaElement.value), this._currentFormat = null, ["auto", "any"].indexOf(this.format.toLowerCase()) > -1) {
            var A = n.parseColorString(H);
            this._currentFormat = A ? A.format : "hex";
          } else
            this._currentFormat = this.format.toLowerCase();
          this.processValueInput(H), k !== void 0 && this.processAlphaInput(k), this.random && this.randomize.apply(this, Array.isArray(this.random) ? this.random : []);
        }
      };
      return n.pub.className = "jscolor", n.pub.activeClassName = "jscolor-active", n.pub.looseJSON = !0, n.pub.presets = {}, n.pub.presets.default = {}, n.pub.presets.light = {
        // default color scheme
        backgroundColor: "rgba(255,255,255,1)",
        controlBorderColor: "rgba(187,187,187,1)",
        buttonColor: "rgba(0,0,0,1)"
      }, n.pub.presets.dark = {
        backgroundColor: "rgba(51,51,51,1)",
        controlBorderColor: "rgba(153,153,153,1)",
        buttonColor: "rgba(240,240,240,1)"
      }, n.pub.presets.small = { width: 101, height: 101, padding: 10, sliderSize: 14, paletteCols: 8 }, n.pub.presets.medium = { width: 181, height: 101, padding: 12, sliderSize: 16, paletteCols: 10 }, n.pub.presets.large = { width: 271, height: 151, padding: 12, sliderSize: 24, paletteCols: 15 }, n.pub.presets.thin = { borderWidth: 1, controlBorderWidth: 1, pointerBorderWidth: 1 }, n.pub.presets.thick = { borderWidth: 2, controlBorderWidth: 2, pointerBorderWidth: 2 }, n.pub.sliderInnerSpace = 3, n.pub.chessboardSize = 8, n.pub.chessboardColor1 = "#666666", n.pub.chessboardColor2 = "#999999", n.pub.previewSeparator = ["rgba(255,255,255,.65)", "rgba(128,128,128,.65)"], n.pub.init = function() {
        if (!n.initialized)
          for (t.document.addEventListener("mousedown", n.onDocumentMouseDown, !1), t.document.addEventListener("keyup", n.onDocumentKeyUp, !1), t.addEventListener("resize", n.onWindowResize, !1), t.addEventListener("scroll", n.onWindowScroll, !1), n.appendDefaultCss(), n.pub.install(), n.initialized = !0; n.readyQueue.length; ) {
            var i = n.readyQueue.shift();
            i();
          }
      }, n.pub.install = function(i) {
        var a = !0;
        try {
          n.installBySelector("[data-jscolor]", i);
        } catch (o) {
          a = !1, console.warn(o);
        }
        if (n.pub.lookupClass)
          try {
            n.installBySelector(
              "input." + n.pub.lookupClass + ", button." + n.pub.lookupClass,
              i
            );
          } catch {
          }
        return a;
      }, n.pub.ready = function(i) {
        return typeof i != "function" ? (console.warn("Passed value is not a function"), !1) : (n.initialized ? i() : n.readyQueue.push(i), !0);
      }, n.pub.trigger = function(i) {
        var a = function() {
          n.triggerGlobal(i);
        };
        n.initialized ? a() : n.pub.ready(a);
      }, n.pub.hide = function() {
        n.picker && n.picker.owner && n.picker.owner.hide();
      }, n.pub.chessboard = function(i) {
        i || (i = "rgba(0,0,0,0)");
        var a = n.genColorPreviewCanvas(i);
        return a.canvas.toDataURL();
      }, n.pub.background = function(i) {
        var a = [];
        a.push(n.genColorPreviewGradient(i));
        var o = n.genColorPreviewCanvas();
        return a.push([
          "url('" + o.canvas.toDataURL() + "')",
          "left top",
          "repeat"
        ].join(" ")), a.join(", ");
      }, n.pub.options = {}, n.pub.lookupClass = "jscolor", n.pub.installByClassName = function() {
        return console.error('jscolor.installByClassName() is DEPRECATED. Use data-jscolor="" attribute instead of a class name.' + n.docsRef), !1;
      }, n.register(), n.pub;
    }();
    return typeof t.jscolor > "u" && (t.jscolor = t.JSColor = e), e;
  });
})(_s);
var Bh = _s.exports;
const hi = /* @__PURE__ */ ut(Bh);
window.bootstrap = {
  Alert: Wn,
  Button: Vn,
  Carousel: En,
  Collapse: Wt,
  Dropdown: Ze,
  Modal: Vt,
  Offcanvas: vt,
  Popover: kr,
  ScrollSpy: zn,
  Tab: jt,
  Toast: Gn,
  Tooltip: Ot
};
document.addEventListener("DOMContentLoaded", () => {
  var r;
  Ff.init(), document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((t) => {
    Wt.getOrCreateInstance(t, { toggle: !1 });
  }), document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((t) => {
    Ot.getOrCreateInstance(t);
  }), (r = hi.install) == null || r.call(hi);
});
export {
  Wn as Alert,
  Vn as Button,
  En as Carousel,
  Wh as ClipboardJS,
  Wt as Collapse,
  Ze as Dropdown,
  Vt as Modal,
  vt as Offcanvas,
  kr as Popover,
  zn as ScrollSpy,
  re as Sortable,
  jt as Tab,
  Gn as Toast,
  Ot as Tooltip,
  Hh as animate,
  Kt as dayjs,
  Ff as dropdownHover,
  we as flatpickr,
  hi as jscolor,
  Fh as onInsert,
  Yh as toast
};
//# sourceMappingURL=bs-ee.mjs.map
