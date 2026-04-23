/*! Bootstrap EE v2.2.0 | bs-ee profile (https://github.com/Erehab/bootstrap-ee) */
var je = "top", Ze = "bottom", Je = "right", We = "left", Fi = "auto", kn = [je, Ze, Je, We], rn = "start", On = "end", na = "clippingParents", kr = "viewport", bn = "popper", ia = "reference", wr = /* @__PURE__ */ kn.reduce(function(n, t) {
  return n.concat([t + "-" + rn, t + "-" + On]);
}, []), Pr = /* @__PURE__ */ [].concat(kn, [Fi]).reduce(function(n, t) {
  return n.concat([t, t + "-" + rn, t + "-" + On]);
}, []), ra = "beforeRead", oa = "read", aa = "afterRead", sa = "beforeMain", la = "main", ca = "afterMain", ua = "beforeWrite", fa = "write", da = "afterWrite", ha = [ra, oa, aa, sa, la, ca, ua, fa, da];
function Dt(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function et(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var t = n.ownerDocument;
    return t && t.defaultView || window;
  }
  return n;
}
function on(n) {
  var t = et(n).Element;
  return n instanceof t || n instanceof Element;
}
function at(n) {
  var t = et(n).HTMLElement;
  return n instanceof t || n instanceof HTMLElement;
}
function Rr(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = et(n).ShadowRoot;
  return n instanceof t || n instanceof ShadowRoot;
}
function Vs(n) {
  var t = n.state;
  Object.keys(t.elements).forEach(function(e) {
    var i = t.styles[e] || {}, r = t.attributes[e] || {}, o = t.elements[e];
    !at(o) || !Dt(o) || (Object.assign(o.style, i), Object.keys(r).forEach(function(s) {
      var a = r[s];
      a === !1 ? o.removeAttribute(s) : o.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Ks(n) {
  var t = n.state, e = {
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
    Object.keys(t.elements).forEach(function(i) {
      var r = t.elements[i], o = t.attributes[i] || {}, s = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]), a = s.reduce(function(l, f) {
        return l[f] = "", l;
      }, {});
      !at(r) || !Dt(r) || (Object.assign(r.style, a), Object.keys(o).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const Yr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Vs,
  effect: Ks,
  requires: ["computeStyles"]
};
function Et(n) {
  return n.split("-")[0];
}
var nn = Math.max, xi = Math.min, Mn = Math.round;
function Dr() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pa() {
  return !/^((?!chrome|android).)*safari/i.test(Dr());
}
function xn(n, t, e) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  var i = n.getBoundingClientRect(), r = 1, o = 1;
  t && at(n) && (r = n.offsetWidth > 0 && Mn(i.width) / n.offsetWidth || 1, o = n.offsetHeight > 0 && Mn(i.height) / n.offsetHeight || 1);
  var s = on(n) ? et(n) : window, a = s.visualViewport, l = !pa() && e, f = (i.left + (l && a ? a.offsetLeft : 0)) / r, d = (i.top + (l && a ? a.offsetTop : 0)) / o, v = i.width / r, b = i.height / o;
  return {
    width: v,
    height: b,
    top: d,
    right: f + v,
    bottom: d + b,
    left: f,
    x: f,
    y: d
  };
}
function Hr(n) {
  var t = xn(n), e = n.offsetWidth, i = n.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: e,
    height: i
  };
}
function ma(n, t) {
  var e = t.getRootNode && t.getRootNode();
  if (n.contains(t))
    return !0;
  if (e && Rr(e)) {
    var i = t;
    do {
      if (i && n.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Mt(n) {
  return et(n).getComputedStyle(n);
}
function Us(n) {
  return ["table", "td", "th"].indexOf(Dt(n)) >= 0;
}
function Ut(n) {
  return ((on(n) ? n.ownerDocument : (
    // $FlowFixMe[prop-missing]
    n.document
  )) || window.document).documentElement;
}
function ji(n) {
  return Dt(n) === "html" ? n : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    n.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    n.parentNode || // DOM Element detected
    (Rr(n) ? n.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ut(n)
  );
}
function io(n) {
  return !at(n) || // https://github.com/popperjs/popper-core/issues/837
  Mt(n).position === "fixed" ? null : n.offsetParent;
}
function zs(n) {
  var t = /firefox/i.test(Dr()), e = /Trident/i.test(Dr());
  if (e && at(n)) {
    var i = Mt(n);
    if (i.position === "fixed")
      return null;
  }
  var r = ji(n);
  for (Rr(r) && (r = r.host); at(r) && ["html", "body"].indexOf(Dt(r)) < 0; ) {
    var o = Mt(r);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function ei(n) {
  for (var t = et(n), e = io(n); e && Us(e) && Mt(e).position === "static"; )
    e = io(e);
  return e && (Dt(e) === "html" || Dt(e) === "body" && Mt(e).position === "static") ? t : e || zs(n) || t;
}
function Fr(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Kn(n, t, e) {
  return nn(n, xi(t, e));
}
function Gs(n, t, e) {
  var i = Kn(n, t, e);
  return i > e ? e : i;
}
function ga() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function va(n) {
  return Object.assign({}, ga(), n);
}
function _a(n, t) {
  return t.reduce(function(e, i) {
    return e[i] = n, e;
  }, {});
}
var qs = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, va(typeof t != "number" ? t : _a(t, kn));
};
function Xs(n) {
  var t, e = n.state, i = n.name, r = n.options, o = e.elements.arrow, s = e.modifiersData.popperOffsets, a = Et(e.placement), l = Fr(a), f = [We, Je].indexOf(a) >= 0, d = f ? "height" : "width";
  if (!(!o || !s)) {
    var v = qs(r.padding, e), b = Hr(o), E = l === "y" ? je : We, D = l === "y" ? Ze : Je, m = e.rects.reference[d] + e.rects.reference[l] - s[l] - e.rects.popper[d], _ = s[l] - e.rects.reference[l], M = ei(o), O = M ? l === "y" ? M.clientHeight || 0 : M.clientWidth || 0 : 0, L = m / 2 - _ / 2, I = v[E], V = O - b[d] - v[D], A = O / 2 - b[d] / 2 + L, p = Kn(I, A, V), w = l;
    e.modifiersData[i] = (t = {}, t[w] = p, t.centerOffset = p - A, t);
  }
}
function Qs(n) {
  var t = n.state, e = n.options, i = e.element, r = i === void 0 ? "[data-popper-arrow]" : i;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || ma(t.elements.popper, r) && (t.elements.arrow = r));
}
const ba = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Xs,
  effect: Qs,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Nn(n) {
  return n.split("-")[1];
}
var Zs = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Js(n, t) {
  var e = n.x, i = n.y, r = t.devicePixelRatio || 1;
  return {
    x: Mn(e * r) / r || 0,
    y: Mn(i * r) / r || 0
  };
}
function ro(n) {
  var t, e = n.popper, i = n.popperRect, r = n.placement, o = n.variation, s = n.offsets, a = n.position, l = n.gpuAcceleration, f = n.adaptive, d = n.roundOffsets, v = n.isFixed, b = s.x, E = b === void 0 ? 0 : b, D = s.y, m = D === void 0 ? 0 : D, _ = typeof d == "function" ? d({
    x: E,
    y: m
  }) : {
    x: E,
    y: m
  };
  E = _.x, m = _.y;
  var M = s.hasOwnProperty("x"), O = s.hasOwnProperty("y"), L = We, I = je, V = window;
  if (f) {
    var A = ei(e), p = "clientHeight", w = "clientWidth";
    if (A === et(e) && (A = Ut(e), Mt(A).position !== "static" && a === "absolute" && (p = "scrollHeight", w = "scrollWidth")), A = A, r === je || (r === We || r === Je) && o === On) {
      I = Ze;
      var Y = v && A === V && V.visualViewport ? V.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        A[p]
      );
      m -= Y - i.height, m *= l ? 1 : -1;
    }
    if (r === We || (r === je || r === Ze) && o === On) {
      L = Je;
      var H = v && A === V && V.visualViewport ? V.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        A[w]
      );
      E -= H - i.width, E *= l ? 1 : -1;
    }
  }
  var k = Object.assign({
    position: a
  }, f && Zs), te = d === !0 ? Js({
    x: E,
    y: m
  }, et(e)) : {
    x: E,
    y: m
  };
  if (E = te.x, m = te.y, l) {
    var Q;
    return Object.assign({}, k, (Q = {}, Q[I] = O ? "0" : "", Q[L] = M ? "0" : "", Q.transform = (V.devicePixelRatio || 1) <= 1 ? "translate(" + E + "px, " + m + "px)" : "translate3d(" + E + "px, " + m + "px, 0)", Q));
  }
  return Object.assign({}, k, (t = {}, t[I] = O ? m + "px" : "", t[L] = M ? E + "px" : "", t.transform = "", t));
}
function el(n) {
  var t = n.state, e = n.options, i = e.gpuAcceleration, r = i === void 0 ? !0 : i, o = e.adaptive, s = o === void 0 ? !0 : o, a = e.roundOffsets, l = a === void 0 ? !0 : a, f = {
    placement: Et(t.placement),
    variation: Nn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ro(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ro(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const jr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: el,
  data: {}
};
var ui = {
  passive: !0
};
function tl(n) {
  var t = n.state, e = n.instance, i = n.options, r = i.scroll, o = r === void 0 ? !0 : r, s = i.resize, a = s === void 0 ? !0 : s, l = et(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && f.forEach(function(d) {
    d.addEventListener("scroll", e.update, ui);
  }), a && l.addEventListener("resize", e.update, ui), function() {
    o && f.forEach(function(d) {
      d.removeEventListener("scroll", e.update, ui);
    }), a && l.removeEventListener("resize", e.update, ui);
  };
}
const Wr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: tl,
  data: {}
};
var nl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Di(n) {
  return n.replace(/left|right|bottom|top/g, function(t) {
    return nl[t];
  });
}
var il = {
  start: "end",
  end: "start"
};
function oo(n) {
  return n.replace(/start|end/g, function(t) {
    return il[t];
  });
}
function Br(n) {
  var t = et(n), e = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: i
  };
}
function Vr(n) {
  return xn(Ut(n)).left + Br(n).scrollLeft;
}
function rl(n, t) {
  var e = et(n), i = Ut(n), r = e.visualViewport, o = i.clientWidth, s = i.clientHeight, a = 0, l = 0;
  if (r) {
    o = r.width, s = r.height;
    var f = pa();
    (f || !f && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a + Vr(n),
    y: l
  };
}
function ol(n) {
  var t, e = Ut(n), i = Br(n), r = (t = n.ownerDocument) == null ? void 0 : t.body, o = nn(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = nn(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -i.scrollLeft + Vr(n), l = -i.scrollTop;
  return Mt(r || e).direction === "rtl" && (a += nn(e.clientWidth, r ? r.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
function Kr(n) {
  var t = Mt(n), e = t.overflow, i = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + r + i);
}
function ya(n) {
  return ["html", "body", "#document"].indexOf(Dt(n)) >= 0 ? n.ownerDocument.body : at(n) && Kr(n) ? n : ya(ji(n));
}
function Un(n, t) {
  var e;
  t === void 0 && (t = []);
  var i = ya(n), r = i === ((e = n.ownerDocument) == null ? void 0 : e.body), o = et(i), s = r ? [o].concat(o.visualViewport || [], Kr(i) ? i : []) : i, a = t.concat(s);
  return r ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Un(ji(s)))
  );
}
function Tr(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function al(n, t) {
  var e = xn(n, !1, t === "fixed");
  return e.top = e.top + n.clientTop, e.left = e.left + n.clientLeft, e.bottom = e.top + n.clientHeight, e.right = e.left + n.clientWidth, e.width = n.clientWidth, e.height = n.clientHeight, e.x = e.left, e.y = e.top, e;
}
function ao(n, t, e) {
  return t === kr ? Tr(rl(n, e)) : on(t) ? al(t, e) : Tr(ol(Ut(n)));
}
function sl(n) {
  var t = Un(ji(n)), e = ["absolute", "fixed"].indexOf(Mt(n).position) >= 0, i = e && at(n) ? ei(n) : n;
  return on(i) ? t.filter(function(r) {
    return on(r) && ma(r, i) && Dt(r) !== "body";
  }) : [];
}
function ll(n, t, e, i) {
  var r = t === "clippingParents" ? sl(n) : [].concat(t), o = [].concat(r, [e]), s = o[0], a = o.reduce(function(l, f) {
    var d = ao(n, f, i);
    return l.top = nn(d.top, l.top), l.right = xi(d.right, l.right), l.bottom = xi(d.bottom, l.bottom), l.left = nn(d.left, l.left), l;
  }, ao(n, s, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Ea(n) {
  var t = n.reference, e = n.element, i = n.placement, r = i ? Et(i) : null, o = i ? Nn(i) : null, s = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
  switch (r) {
    case je:
      l = {
        x: s,
        y: t.y - e.height
      };
      break;
    case Ze:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Je:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case We:
      l = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var f = r ? Fr(r) : null;
  if (f != null) {
    var d = f === "y" ? "height" : "width";
    switch (o) {
      case rn:
        l[f] = l[f] - (t[d] / 2 - e[d] / 2);
        break;
      case On:
        l[f] = l[f] + (t[d] / 2 - e[d] / 2);
        break;
    }
  }
  return l;
}
function $n(n, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, r = i === void 0 ? n.placement : i, o = e.strategy, s = o === void 0 ? n.strategy : o, a = e.boundary, l = a === void 0 ? na : a, f = e.rootBoundary, d = f === void 0 ? kr : f, v = e.elementContext, b = v === void 0 ? bn : v, E = e.altBoundary, D = E === void 0 ? !1 : E, m = e.padding, _ = m === void 0 ? 0 : m, M = va(typeof _ != "number" ? _ : _a(_, kn)), O = b === bn ? ia : bn, L = n.rects.popper, I = n.elements[D ? O : b], V = ll(on(I) ? I : I.contextElement || Ut(n.elements.popper), l, d, s), A = xn(n.elements.reference), p = Ea({
    reference: A,
    element: L,
    strategy: "absolute",
    placement: r
  }), w = Tr(Object.assign({}, L, p)), Y = b === bn ? w : A, H = {
    top: V.top - Y.top + M.top,
    bottom: Y.bottom - V.bottom + M.bottom,
    left: V.left - Y.left + M.left,
    right: Y.right - V.right + M.right
  }, k = n.modifiersData.offset;
  if (b === bn && k) {
    var te = k[r];
    Object.keys(H).forEach(function(Q) {
      var F = [Je, Ze].indexOf(Q) >= 0 ? 1 : -1, N = [je, Ze].indexOf(Q) >= 0 ? "y" : "x";
      H[Q] += te[N] * F;
    });
  }
  return H;
}
function cl(n, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, r = e.boundary, o = e.rootBoundary, s = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, f = l === void 0 ? Pr : l, d = Nn(i), v = d ? a ? wr : wr.filter(function(D) {
    return Nn(D) === d;
  }) : kn, b = v.filter(function(D) {
    return f.indexOf(D) >= 0;
  });
  b.length === 0 && (b = v);
  var E = b.reduce(function(D, m) {
    return D[m] = $n(n, {
      placement: m,
      boundary: r,
      rootBoundary: o,
      padding: s
    })[Et(m)], D;
  }, {});
  return Object.keys(E).sort(function(D, m) {
    return E[D] - E[m];
  });
}
function ul(n) {
  if (Et(n) === Fi)
    return [];
  var t = Di(n);
  return [oo(n), t, oo(t)];
}
function fl(n) {
  var t = n.state, e = n.options, i = n.name;
  if (!t.modifiersData[i]._skip) {
    for (var r = e.mainAxis, o = r === void 0 ? !0 : r, s = e.altAxis, a = s === void 0 ? !0 : s, l = e.fallbackPlacements, f = e.padding, d = e.boundary, v = e.rootBoundary, b = e.altBoundary, E = e.flipVariations, D = E === void 0 ? !0 : E, m = e.allowedAutoPlacements, _ = t.options.placement, M = Et(_), O = M === _, L = l || (O || !D ? [Di(_)] : ul(_)), I = [_].concat(L).reduce(function(R, U) {
      return R.concat(Et(U) === Fi ? cl(t, {
        placement: U,
        boundary: d,
        rootBoundary: v,
        padding: f,
        flipVariations: D,
        allowedAutoPlacements: m
      }) : U);
    }, []), V = t.rects.reference, A = t.rects.popper, p = /* @__PURE__ */ new Map(), w = !0, Y = I[0], H = 0; H < I.length; H++) {
      var k = I[H], te = Et(k), Q = Nn(k) === rn, F = [je, Ze].indexOf(te) >= 0, N = F ? "width" : "height", T = $n(t, {
        placement: k,
        boundary: d,
        rootBoundary: v,
        altBoundary: b,
        padding: f
      }), j = F ? Q ? Je : We : Q ? Ze : je;
      V[N] > A[N] && (j = Di(j));
      var $ = Di(j), z = [];
      if (o && z.push(T[te] <= 0), a && z.push(T[j] <= 0, T[$] <= 0), z.every(function(R) {
        return R;
      })) {
        Y = k, w = !1;
        break;
      }
      p.set(k, z);
    }
    if (w)
      for (var ee = D ? 3 : 1, re = function(U) {
        var q = I.find(function(oe) {
          var de = p.get(oe);
          if (de)
            return de.slice(0, U).every(function(we) {
              return we;
            });
        });
        if (q)
          return Y = q, "break";
      }, K = ee; K > 0; K--) {
        var P = re(K);
        if (P === "break")
          break;
      }
    t.placement !== Y && (t.modifiersData[i]._skip = !0, t.placement = Y, t.reset = !0);
  }
}
const wa = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fl,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function so(n, t, e) {
  return e === void 0 && (e = {
    x: 0,
    y: 0
  }), {
    top: n.top - t.height - e.y,
    right: n.right - t.width + e.x,
    bottom: n.bottom - t.height + e.y,
    left: n.left - t.width - e.x
  };
}
function lo(n) {
  return [je, Je, Ze, We].some(function(t) {
    return n[t] >= 0;
  });
}
function dl(n) {
  var t = n.state, e = n.name, i = t.rects.reference, r = t.rects.popper, o = t.modifiersData.preventOverflow, s = $n(t, {
    elementContext: "reference"
  }), a = $n(t, {
    altBoundary: !0
  }), l = so(s, i), f = so(a, r, o), d = lo(l), v = lo(f);
  t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: f,
    isReferenceHidden: d,
    hasPopperEscaped: v
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": v
  });
}
const Da = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: dl
};
function hl(n, t, e) {
  var i = Et(n), r = [We, je].indexOf(i) >= 0 ? -1 : 1, o = typeof e == "function" ? e(Object.assign({}, t, {
    placement: n
  })) : e, s = o[0], a = o[1];
  return s = s || 0, a = (a || 0) * r, [We, Je].indexOf(i) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function pl(n) {
  var t = n.state, e = n.options, i = n.name, r = e.offset, o = r === void 0 ? [0, 0] : r, s = Pr.reduce(function(d, v) {
    return d[v] = hl(v, t.rects, o), d;
  }, {}), a = s[t.placement], l = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[i] = s;
}
const Ta = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pl
};
function ml(n) {
  var t = n.state, e = n.name;
  t.modifiersData[e] = Ea({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Ur = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ml,
  data: {}
};
function gl(n) {
  return n === "x" ? "y" : "x";
}
function vl(n) {
  var t = n.state, e = n.options, i = n.name, r = e.mainAxis, o = r === void 0 ? !0 : r, s = e.altAxis, a = s === void 0 ? !1 : s, l = e.boundary, f = e.rootBoundary, d = e.altBoundary, v = e.padding, b = e.tether, E = b === void 0 ? !0 : b, D = e.tetherOffset, m = D === void 0 ? 0 : D, _ = $n(t, {
    boundary: l,
    rootBoundary: f,
    padding: v,
    altBoundary: d
  }), M = Et(t.placement), O = Nn(t.placement), L = !O, I = Fr(M), V = gl(I), A = t.modifiersData.popperOffsets, p = t.rects.reference, w = t.rects.popper, Y = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, H = typeof Y == "number" ? {
    mainAxis: Y,
    altAxis: Y
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Y), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, te = {
    x: 0,
    y: 0
  };
  if (A) {
    if (o) {
      var Q, F = I === "y" ? je : We, N = I === "y" ? Ze : Je, T = I === "y" ? "height" : "width", j = A[I], $ = j + _[F], z = j - _[N], ee = E ? -w[T] / 2 : 0, re = O === rn ? p[T] : w[T], K = O === rn ? -w[T] : -p[T], P = t.elements.arrow, R = E && P ? Hr(P) : {
        width: 0,
        height: 0
      }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ga(), q = U[F], oe = U[N], de = Kn(0, p[T], R[T]), we = L ? p[T] / 2 - ee - de - q - H.mainAxis : re - de - q - H.mainAxis, _e = L ? -p[T] / 2 + ee + de + oe + H.mainAxis : K + de + oe + H.mainAxis, Se = t.elements.arrow && ei(t.elements.arrow), xe = Se ? I === "y" ? Se.clientTop || 0 : Se.clientLeft || 0 : 0, Le = (Q = k == null ? void 0 : k[I]) != null ? Q : 0, gt = j + we - Le - xe, ut = j + _e - Le, vt = Kn(E ? xi($, gt) : $, j, E ? nn(z, ut) : z);
      A[I] = vt, te[I] = vt - j;
    }
    if (a) {
      var ft, _t = I === "x" ? je : We, tt = I === "x" ? Ze : Je, nt = A[V], Yt = V === "y" ? "height" : "width", qt = nt + _[_t], Ht = nt - _[tt], Ct = [je, We].indexOf(M) !== -1, Te = (ft = k == null ? void 0 : k[V]) != null ? ft : 0, ge = Ct ? qt : nt - p[Yt] - w[Yt] - Te + H.altAxis, bt = Ct ? nt + p[Yt] + w[Yt] - Te - H.altAxis : Ht, dn = E && Ct ? Gs(ge, nt, bt) : Kn(E ? ge : qt, nt, E ? bt : Ht);
      A[V] = dn, te[V] = dn - nt;
    }
    t.modifiersData[i] = te;
  }
}
const Ca = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: vl,
  requiresIfExists: ["offset"]
};
function _l(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function bl(n) {
  return n === et(n) || !at(n) ? Br(n) : _l(n);
}
function yl(n) {
  var t = n.getBoundingClientRect(), e = Mn(t.width) / n.offsetWidth || 1, i = Mn(t.height) / n.offsetHeight || 1;
  return e !== 1 || i !== 1;
}
function El(n, t, e) {
  e === void 0 && (e = !1);
  var i = at(t), r = at(t) && yl(t), o = Ut(t), s = xn(n, r, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (i || !i && !e) && ((Dt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Kr(o)) && (a = bl(t)), at(t) ? (l = xn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Vr(o))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function wl(n) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), i = [];
  n.forEach(function(o) {
    t.set(o.name, o);
  });
  function r(o) {
    e.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(a) {
      if (!e.has(a)) {
        var l = t.get(a);
        l && r(l);
      }
    }), i.push(o);
  }
  return n.forEach(function(o) {
    e.has(o.name) || r(o);
  }), i;
}
function Dl(n) {
  var t = wl(n);
  return ha.reduce(function(e, i) {
    return e.concat(t.filter(function(r) {
      return r.phase === i;
    }));
  }, []);
}
function Tl(n) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(n());
      });
    })), t;
  };
}
function Cl(n) {
  var t = n.reduce(function(e, i) {
    var r = e[i.name];
    return e[i.name] = r ? Object.assign({}, r, i, {
      options: Object.assign({}, r.options, i.options),
      data: Object.assign({}, r.data, i.data)
    }) : i, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
var co = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function uo() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function Wi(n) {
  n === void 0 && (n = {});
  var t = n, e = t.defaultModifiers, i = e === void 0 ? [] : e, r = t.defaultOptions, o = r === void 0 ? co : r;
  return function(a, l, f) {
    f === void 0 && (f = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, co, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, v = [], b = !1, E = {
      state: d,
      setOptions: function(M) {
        var O = typeof M == "function" ? M(d.options) : M;
        m(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: on(a) ? Un(a) : a.contextElement ? Un(a.contextElement) : [],
          popper: Un(l)
        };
        var L = Dl(Cl([].concat(i, d.options.modifiers)));
        return d.orderedModifiers = L.filter(function(I) {
          return I.enabled;
        }), D(), E.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!b) {
          var M = d.elements, O = M.reference, L = M.popper;
          if (uo(O, L)) {
            d.rects = {
              reference: El(O, ei(L), d.options.strategy === "fixed"),
              popper: Hr(L)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(H) {
              return d.modifiersData[H.name] = Object.assign({}, H.data);
            });
            for (var I = 0; I < d.orderedModifiers.length; I++) {
              if (d.reset === !0) {
                d.reset = !1, I = -1;
                continue;
              }
              var V = d.orderedModifiers[I], A = V.fn, p = V.options, w = p === void 0 ? {} : p, Y = V.name;
              typeof A == "function" && (d = A({
                state: d,
                options: w,
                name: Y,
                instance: E
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Tl(function() {
        return new Promise(function(_) {
          E.forceUpdate(), _(d);
        });
      }),
      destroy: function() {
        m(), b = !0;
      }
    };
    if (!uo(a, l))
      return E;
    E.setOptions(f).then(function(_) {
      !b && f.onFirstUpdate && f.onFirstUpdate(_);
    });
    function D() {
      d.orderedModifiers.forEach(function(_) {
        var M = _.name, O = _.options, L = O === void 0 ? {} : O, I = _.effect;
        if (typeof I == "function") {
          var V = I({
            state: d,
            name: M,
            instance: E,
            options: L
          }), A = function() {
          };
          v.push(V || A);
        }
      });
    }
    function m() {
      v.forEach(function(_) {
        return _();
      }), v = [];
    }
    return E;
  };
}
var Al = /* @__PURE__ */ Wi(), Sl = [Wr, Ur, jr, Yr], Ol = /* @__PURE__ */ Wi({
  defaultModifiers: Sl
}), Ml = [Wr, Ur, jr, Yr, Ta, wa, Ca, ba, Da], zr = /* @__PURE__ */ Wi({
  defaultModifiers: Ml
});
const Aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: ca,
  afterRead: aa,
  afterWrite: da,
  applyStyles: Yr,
  arrow: ba,
  auto: Fi,
  basePlacements: kn,
  beforeMain: sa,
  beforeRead: ra,
  beforeWrite: ua,
  bottom: Ze,
  clippingParents: na,
  computeStyles: jr,
  createPopper: zr,
  createPopperBase: Al,
  createPopperLite: Ol,
  detectOverflow: $n,
  end: On,
  eventListeners: Wr,
  flip: wa,
  hide: Da,
  left: We,
  main: la,
  modifierPhases: ha,
  offset: Ta,
  placements: Pr,
  popper: bn,
  popperGenerator: Wi,
  popperOffsets: Ur,
  preventOverflow: Ca,
  read: oa,
  reference: ia,
  right: Je,
  start: rn,
  top: je,
  variationPlacements: wr,
  viewport: kr,
  write: fa
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const Ft = /* @__PURE__ */ new Map(), Ui = {
  set(n, t, e) {
    Ft.has(n) || Ft.set(n, /* @__PURE__ */ new Map());
    const i = Ft.get(n);
    if (!i.has(t) && i.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
      return;
    }
    i.set(t, e);
  },
  get(n, t) {
    return Ft.has(n) && Ft.get(n).get(t) || null;
  },
  remove(n, t) {
    if (!Ft.has(n))
      return;
    const e = Ft.get(n);
    e.delete(t), e.size === 0 && Ft.delete(n);
  }
}, xl = 1e6, Nl = 1e3, Cr = "transitionend", Sa = (n) => (n && window.CSS && window.CSS.escape && (n = n.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)), n), $l = (n) => n == null ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(), Ll = (n) => {
  do
    n += Math.floor(Math.random() * xl);
  while (document.getElementById(n));
  return n;
}, Il = (n) => {
  if (!n)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: e
  } = window.getComputedStyle(n);
  const i = Number.parseFloat(t), r = Number.parseFloat(e);
  return !i && !r ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * Nl);
}, Oa = (n) => {
  n.dispatchEvent(new Event(Cr));
}, At = (n) => !n || typeof n != "object" ? !1 : (typeof n.jquery < "u" && (n = n[0]), typeof n.nodeType < "u"), Vt = (n) => At(n) ? n.jquery ? n[0] : n : typeof n == "string" && n.length > 0 ? document.querySelector(Sa(n)) : null, Pn = (n) => {
  if (!At(n) || n.getClientRects().length === 0)
    return !1;
  const t = getComputedStyle(n).getPropertyValue("visibility") === "visible", e = n.closest("details:not([open])");
  if (!e)
    return t;
  if (e !== n) {
    const i = n.closest("summary");
    if (i && i.parentNode !== e || i === null)
      return !1;
  }
  return t;
}, Kt = (n) => !n || n.nodeType !== Node.ELEMENT_NODE || n.classList.contains("disabled") ? !0 : typeof n.disabled < "u" ? n.disabled : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false", Ma = (n) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof n.getRootNode == "function") {
    const t = n.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return n instanceof ShadowRoot ? n : n.parentNode ? Ma(n.parentNode) : null;
}, Ni = () => {
}, ti = (n) => {
  n.offsetHeight;
}, xa = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, zi = [], kl = (n) => {
  document.readyState === "loading" ? (zi.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of zi)
      t();
  }), zi.push(n)) : n();
}, st = () => document.documentElement.dir === "rtl", ct = (n) => {
  kl(() => {
    const t = xa();
    if (t) {
      const e = n.NAME, i = t.fn[e];
      t.fn[e] = n.jQueryInterface, t.fn[e].Constructor = n, t.fn[e].noConflict = () => (t.fn[e] = i, n.jQueryInterface);
    }
  });
}, Ke = (n, t = [], e = n) => typeof n == "function" ? n(...t) : e, Na = (n, t, e = !0) => {
  if (!e) {
    Ke(n);
    return;
  }
  const i = 5, r = Il(t) + i;
  let o = !1;
  const s = ({
    target: a
  }) => {
    a === t && (o = !0, t.removeEventListener(Cr, s), Ke(n));
  };
  t.addEventListener(Cr, s), setTimeout(() => {
    o || Oa(t);
  }, r);
}, Gr = (n, t, e, i) => {
  const r = n.length;
  let o = n.indexOf(t);
  return o === -1 ? !e && i ? n[r - 1] : n[0] : (o += e ? 1 : -1, i && (o = (o + r) % r), n[Math.max(0, Math.min(o, r - 1))]);
}, Pl = /[^.]*(?=\..*)\.|.*/, Rl = /\..*/, Yl = /::\d+$/, Gi = {};
let fo = 1;
const $a = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Hl = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function La(n, t) {
  return t && `${t}::${fo++}` || n.uidEvent || fo++;
}
function Ia(n) {
  const t = La(n);
  return n.uidEvent = t, Gi[t] = Gi[t] || {}, Gi[t];
}
function Fl(n, t) {
  return function e(i) {
    return qr(i, {
      delegateTarget: n
    }), e.oneOff && x.off(n, i.type, t), t.apply(n, [i]);
  };
}
function jl(n, t, e) {
  return function i(r) {
    const o = n.querySelectorAll(t);
    for (let {
      target: s
    } = r; s && s !== this; s = s.parentNode)
      for (const a of o)
        if (a === s)
          return qr(r, {
            delegateTarget: s
          }), i.oneOff && x.off(n, r.type, t, e), e.apply(s, [r]);
  };
}
function ka(n, t, e = null) {
  return Object.values(n).find((i) => i.callable === t && i.delegationSelector === e);
}
function Pa(n, t, e) {
  const i = typeof t == "string", r = i ? e : t || e;
  let o = Ra(n);
  return Hl.has(o) || (o = n), [i, r, o];
}
function ho(n, t, e, i, r) {
  if (typeof t != "string" || !n)
    return;
  let [o, s, a] = Pa(t, e, i);
  t in $a && (s = ((D) => function(m) {
    if (!m.relatedTarget || m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget))
      return D.call(this, m);
  })(s));
  const l = Ia(n), f = l[a] || (l[a] = {}), d = ka(f, s, o ? e : null);
  if (d) {
    d.oneOff = d.oneOff && r;
    return;
  }
  const v = La(s, t.replace(Pl, "")), b = o ? jl(n, e, s) : Fl(n, s);
  b.delegationSelector = o ? e : null, b.callable = s, b.oneOff = r, b.uidEvent = v, f[v] = b, n.addEventListener(a, b, o);
}
function Ar(n, t, e, i, r) {
  const o = ka(t[e], i, r);
  o && (n.removeEventListener(e, o, !!r), delete t[e][o.uidEvent]);
}
function Wl(n, t, e, i) {
  const r = t[e] || {};
  for (const [o, s] of Object.entries(r))
    o.includes(i) && Ar(n, t, e, s.callable, s.delegationSelector);
}
function Ra(n) {
  return n = n.replace(Rl, ""), $a[n] || n;
}
const x = {
  on(n, t, e, i) {
    ho(n, t, e, i, !1);
  },
  one(n, t, e, i) {
    ho(n, t, e, i, !0);
  },
  off(n, t, e, i) {
    if (typeof t != "string" || !n)
      return;
    const [r, o, s] = Pa(t, e, i), a = s !== t, l = Ia(n), f = l[s] || {}, d = t.startsWith(".");
    if (typeof o < "u") {
      if (!Object.keys(f).length)
        return;
      Ar(n, l, s, o, r ? e : null);
      return;
    }
    if (d)
      for (const v of Object.keys(l))
        Wl(n, l, v, t.slice(1));
    for (const [v, b] of Object.entries(f)) {
      const E = v.replace(Yl, "");
      (!a || t.includes(E)) && Ar(n, l, s, b.callable, b.delegationSelector);
    }
  },
  trigger(n, t, e) {
    if (typeof t != "string" || !n)
      return null;
    const i = xa(), r = Ra(t), o = t !== r;
    let s = null, a = !0, l = !0, f = !1;
    o && i && (s = i.Event(t, e), i(n).trigger(s), a = !s.isPropagationStopped(), l = !s.isImmediatePropagationStopped(), f = s.isDefaultPrevented());
    const d = qr(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), e);
    return f && d.preventDefault(), l && n.dispatchEvent(d), d.defaultPrevented && s && s.preventDefault(), d;
  }
};
function qr(n, t = {}) {
  for (const [e, i] of Object.entries(t))
    try {
      n[e] = i;
    } catch {
      Object.defineProperty(n, e, {
        configurable: !0,
        get() {
          return i;
        }
      });
    }
  return n;
}
function po(n) {
  if (n === "true")
    return !0;
  if (n === "false")
    return !1;
  if (n === Number(n).toString())
    return Number(n);
  if (n === "" || n === "null")
    return null;
  if (typeof n != "string")
    return n;
  try {
    return JSON.parse(decodeURIComponent(n));
  } catch {
    return n;
  }
}
function qi(n) {
  return n.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const St = {
  setDataAttribute(n, t, e) {
    n.setAttribute(`data-bs-${qi(t)}`, e);
  },
  removeDataAttribute(n, t) {
    n.removeAttribute(`data-bs-${qi(t)}`);
  },
  getDataAttributes(n) {
    if (!n)
      return {};
    const t = {}, e = Object.keys(n.dataset).filter((i) => i.startsWith("bs") && !i.startsWith("bsConfig"));
    for (const i of e) {
      let r = i.replace(/^bs/, "");
      r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = po(n.dataset[i]);
    }
    return t;
  },
  getDataAttribute(n, t) {
    return po(n.getAttribute(`data-bs-${qi(t)}`));
  }
};
class ni {
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
    const i = At(e) ? St.getDataAttribute(e, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof i == "object" ? i : {},
      ...At(e) ? St.getDataAttributes(e) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, e = this.constructor.DefaultType) {
    for (const [i, r] of Object.entries(e)) {
      const o = t[i], s = At(o) ? "element" : $l(o);
      if (!new RegExp(r).test(s))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${r}".`);
    }
  }
}
const Bl = "5.3.2";
class mt extends ni {
  constructor(t, e) {
    super(), t = Vt(t), t && (this._element = t, this._config = this._getConfig(e), Ui.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    Ui.remove(this._element, this.constructor.DATA_KEY), x.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  _queueCallback(t, e, i = !0) {
    Na(t, e, i);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return Ui.get(Vt(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return Bl;
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
const Xi = (n) => {
  let t = n.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let e = n.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? Sa(e.trim()) : null;
  }
  return t;
}, ae = {
  find(n, t = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(t, n));
  },
  findOne(n, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, n);
  },
  children(n, t) {
    return [].concat(...n.children).filter((e) => e.matches(t));
  },
  parents(n, t) {
    const e = [];
    let i = n.parentNode.closest(t);
    for (; i; )
      e.push(i), i = i.parentNode.closest(t);
    return e;
  },
  prev(n, t) {
    let e = n.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(n, t) {
    let e = n.nextElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(n) {
    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(",");
    return this.find(t, n).filter((e) => !Kt(e) && Pn(e));
  },
  getSelectorFromElement(n) {
    const t = Xi(n);
    return t && ae.findOne(t) ? t : null;
  },
  getElementFromSelector(n) {
    const t = Xi(n);
    return t ? ae.findOne(t) : null;
  },
  getMultipleElementsFromSelector(n) {
    const t = Xi(n);
    return t ? ae.find(t) : [];
  }
}, Bi = (n, t = "hide") => {
  const e = `click.dismiss${n.EVENT_KEY}`, i = n.NAME;
  x.on(document, e, `[data-bs-dismiss="${i}"]`, function(r) {
    if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), Kt(this))
      return;
    const o = ae.getElementFromSelector(this) || this.closest(`.${i}`);
    n.getOrCreateInstance(o)[t]();
  });
}, Vl = "alert", Kl = "bs.alert", Ya = `.${Kl}`, Ul = `close${Ya}`, zl = `closed${Ya}`, Gl = "fade", ql = "show";
class ii extends mt {
  // Getters
  static get NAME() {
    return Vl;
  }
  // Public
  close() {
    if (x.trigger(this._element, Ul).defaultPrevented)
      return;
    this._element.classList.remove(ql);
    const e = this._element.classList.contains(Gl);
    this._queueCallback(() => this._destroyElement(), this._element, e);
  }
  // Private
  _destroyElement() {
    this._element.remove(), x.trigger(this._element, zl), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ii.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
Bi(ii, "close");
ct(ii);
const Xl = "button", Ql = "bs.button", Zl = `.${Ql}`, Jl = ".data-api", ec = "active", mo = '[data-bs-toggle="button"]', tc = `click${Zl}${Jl}`;
class ri extends mt {
  // Getters
  static get NAME() {
    return Xl;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(ec));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ri.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
}
x.on(document, tc, mo, (n) => {
  n.preventDefault();
  const t = n.target.closest(mo);
  ri.getOrCreateInstance(t).toggle();
});
ct(ri);
const nc = "swipe", Rn = ".bs.swipe", ic = `touchstart${Rn}`, rc = `touchmove${Rn}`, oc = `touchend${Rn}`, ac = `pointerdown${Rn}`, sc = `pointerup${Rn}`, lc = "touch", cc = "pen", uc = "pointer-event", fc = 40, dc = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, hc = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class $i extends ni {
  constructor(t, e) {
    super(), this._element = t, !(!t || !$i.isSupported()) && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return dc;
  }
  static get DefaultType() {
    return hc;
  }
  static get NAME() {
    return nc;
  }
  // Public
  dispose() {
    x.off(this._element, Rn);
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
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), Ke(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= fc)
      return;
    const e = t / this._deltaX;
    this._deltaX = 0, e && Ke(e > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (x.on(this._element, ac, (t) => this._start(t)), x.on(this._element, sc, (t) => this._end(t)), this._element.classList.add(uc)) : (x.on(this._element, ic, (t) => this._start(t)), x.on(this._element, rc, (t) => this._move(t)), x.on(this._element, oc, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === cc || t.pointerType === lc);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const pc = "carousel", mc = "bs.carousel", zt = `.${mc}`, Ha = ".data-api", gc = "ArrowLeft", vc = "ArrowRight", _c = 500, Fn = "next", mn = "prev", yn = "left", Ti = "right", bc = `slide${zt}`, Qi = `slid${zt}`, yc = `keydown${zt}`, Ec = `mouseenter${zt}`, wc = `mouseleave${zt}`, Dc = `dragstart${zt}`, Tc = `load${zt}${Ha}`, Cc = `click${zt}${Ha}`, Fa = "carousel", fi = "active", Ac = "slide", Sc = "carousel-item-end", Oc = "carousel-item-start", Mc = "carousel-item-next", xc = "carousel-item-prev", ja = ".active", Wa = ".carousel-item", Nc = ja + Wa, $c = ".carousel-item img", Lc = ".carousel-indicators", Ic = "[data-bs-slide], [data-bs-slide-to]", kc = '[data-bs-ride="carousel"]', Pc = {
  [gc]: Ti,
  [vc]: yn
}, Rc = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, Yc = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class Yn extends mt {
  constructor(t, e) {
    super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ae.findOne(Lc, this._element), this._addEventListeners(), this._config.ride === Fa && this.cycle();
  }
  // Getters
  static get Default() {
    return Rc;
  }
  static get DefaultType() {
    return Yc;
  }
  static get NAME() {
    return pc;
  }
  // Public
  next() {
    this._slide(Fn);
  }
  nextWhenVisible() {
    !document.hidden && Pn(this._element) && this.next();
  }
  prev() {
    this._slide(mn);
  }
  pause() {
    this._isSliding && Oa(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        x.one(this._element, Qi, () => this.cycle());
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
      x.one(this._element, Qi, () => this.to(t));
      return;
    }
    const i = this._getItemIndex(this._getActive());
    if (i === t)
      return;
    const r = t > i ? Fn : mn;
    this._slide(r, e[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.defaultInterval = t.interval, t;
  }
  _addEventListeners() {
    this._config.keyboard && x.on(this._element, yc, (t) => this._keydown(t)), this._config.pause === "hover" && (x.on(this._element, Ec, () => this.pause()), x.on(this._element, wc, () => this._maybeEnableCycle())), this._config.touch && $i.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const i of ae.find($c, this._element))
      x.on(i, Dc, (r) => r.preventDefault());
    const e = {
      leftCallback: () => this._slide(this._directionToOrder(yn)),
      rightCallback: () => this._slide(this._directionToOrder(Ti)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), _c + this._config.interval));
      }
    };
    this._swipeHelper = new $i(this._element, e);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = Pc[t.key];
    e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const e = ae.findOne(ja, this._indicatorsElement);
    e.classList.remove(fi), e.removeAttribute("aria-current");
    const i = ae.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    i && (i.classList.add(fi), i.setAttribute("aria-current", "true"));
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
    const i = this._getActive(), r = t === Fn, o = e || Gr(this._getItems(), i, r, this._config.wrap);
    if (o === i)
      return;
    const s = this._getItemIndex(o), a = (E) => x.trigger(this._element, E, {
      relatedTarget: o,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(i),
      to: s
    });
    if (a(bc).defaultPrevented || !i || !o)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(s), this._activeElement = o;
    const d = r ? Oc : Sc, v = r ? Mc : xc;
    o.classList.add(v), ti(o), i.classList.add(d), o.classList.add(d);
    const b = () => {
      o.classList.remove(d, v), o.classList.add(fi), i.classList.remove(fi, v, d), this._isSliding = !1, a(Qi);
    };
    this._queueCallback(b, i, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(Ac);
  }
  _getActive() {
    return ae.findOne(Nc, this._element);
  }
  _getItems() {
    return ae.find(Wa, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return st() ? t === yn ? mn : Fn : t === yn ? Fn : mn;
  }
  _orderToDirection(t) {
    return st() ? t === mn ? yn : Ti : t === mn ? Ti : yn;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Yn.getOrCreateInstance(this, t);
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
x.on(document, Cc, Ic, function(n) {
  const t = ae.getElementFromSelector(this);
  if (!t || !t.classList.contains(Fa))
    return;
  n.preventDefault();
  const e = Yn.getOrCreateInstance(t), i = this.getAttribute("data-bs-slide-to");
  if (i) {
    e.to(i), e._maybeEnableCycle();
    return;
  }
  if (St.getDataAttribute(this, "slide") === "next") {
    e.next(), e._maybeEnableCycle();
    return;
  }
  e.prev(), e._maybeEnableCycle();
});
x.on(window, Tc, () => {
  const n = ae.find(kc);
  for (const t of n)
    Yn.getOrCreateInstance(t);
});
ct(Yn);
const Hc = "collapse", Fc = "bs.collapse", oi = `.${Fc}`, jc = ".data-api", Wc = `show${oi}`, Bc = `shown${oi}`, Vc = `hide${oi}`, Kc = `hidden${oi}`, Uc = `click${oi}${jc}`, Zi = "show", Dn = "collapse", di = "collapsing", zc = "collapsed", Gc = `:scope .${Dn} .${Dn}`, qc = "collapse-horizontal", Xc = "width", Qc = "height", Zc = ".collapse.show, .collapse.collapsing", Sr = '[data-bs-toggle="collapse"]', Jc = {
  parent: null,
  toggle: !0
}, eu = {
  parent: "(null|element)",
  toggle: "boolean"
};
class an extends mt {
  constructor(t, e) {
    super(t, e), this._isTransitioning = !1, this._triggerArray = [];
    const i = ae.find(Sr);
    for (const r of i) {
      const o = ae.getSelectorFromElement(r), s = ae.find(o).filter((a) => a === this._element);
      o !== null && s.length && this._triggerArray.push(r);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Jc;
  }
  static get DefaultType() {
    return eu;
  }
  static get NAME() {
    return Hc;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(Zc).filter((a) => a !== this._element).map((a) => an.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || x.trigger(this._element, Wc).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const i = this._getDimension();
    this._element.classList.remove(Dn), this._element.classList.add(di), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const r = () => {
      this._isTransitioning = !1, this._element.classList.remove(di), this._element.classList.add(Dn, Zi), this._element.style[i] = "", x.trigger(this._element, Bc);
    }, s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
    this._queueCallback(r, this._element, !0), this._element.style[i] = `${this._element[s]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || x.trigger(this._element, Vc).defaultPrevented)
      return;
    const e = this._getDimension();
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, ti(this._element), this._element.classList.add(di), this._element.classList.remove(Dn, Zi);
    for (const r of this._triggerArray) {
      const o = ae.getElementFromSelector(r);
      o && !this._isShown(o) && this._addAriaAndCollapsedClass([r], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, this._element.classList.remove(di), this._element.classList.add(Dn), x.trigger(this._element, Kc);
    };
    this._element.style[e] = "", this._queueCallback(i, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(Zi);
  }
  // Private
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = Vt(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(qc) ? Xc : Qc;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(Sr);
    for (const e of t) {
      const i = ae.getElementFromSelector(e);
      i && this._addAriaAndCollapsedClass([e], this._isShown(i));
    }
  }
  _getFirstLevelChildren(t) {
    const e = ae.find(Gc, this._config.parent);
    return ae.find(t, this._config.parent).filter((i) => !e.includes(i));
  }
  _addAriaAndCollapsedClass(t, e) {
    if (t.length)
      for (const i of t)
        i.classList.toggle(zc, !e), i.setAttribute("aria-expanded", e);
  }
  // Static
  static jQueryInterface(t) {
    const e = {};
    return typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
      const i = an.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t]();
      }
    });
  }
}
x.on(document, Uc, Sr, function(n) {
  (n.target.tagName === "A" || n.delegateTarget && n.delegateTarget.tagName === "A") && n.preventDefault();
  for (const t of ae.getMultipleElementsFromSelector(this))
    an.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
ct(an);
const go = "dropdown", tu = "bs.dropdown", cn = `.${tu}`, Xr = ".data-api", nu = "Escape", vo = "Tab", iu = "ArrowUp", _o = "ArrowDown", ru = 2, ou = `hide${cn}`, au = `hidden${cn}`, su = `show${cn}`, lu = `shown${cn}`, Ba = `click${cn}${Xr}`, Va = `keydown${cn}${Xr}`, cu = `keyup${cn}${Xr}`, En = "show", uu = "dropup", fu = "dropend", du = "dropstart", hu = "dropup-center", pu = "dropdown-center", en = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', mu = `${en}.${En}`, Ci = ".dropdown-menu", gu = ".navbar", vu = ".navbar-nav", _u = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", bu = st() ? "top-end" : "top-start", yu = st() ? "top-start" : "top-end", Eu = st() ? "bottom-end" : "bottom-start", wu = st() ? "bottom-start" : "bottom-end", Du = st() ? "left-start" : "right-start", Tu = st() ? "right-start" : "left-start", Cu = "top", Au = "bottom", Su = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, Ou = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class pt extends mt {
  constructor(t, e) {
    super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = ae.next(this._element, Ci)[0] || ae.prev(this._element, Ci)[0] || ae.findOne(Ci, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return Su;
  }
  static get DefaultType() {
    return Ou;
  }
  static get NAME() {
    return go;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Kt(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!x.trigger(this._element, su, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(vu))
        for (const i of [].concat(...document.body.children))
          x.on(i, "mouseover", Ni);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(En), this._element.classList.add(En), x.trigger(this._element, lu, t);
    }
  }
  hide() {
    if (Kt(this._element) || !this._isShown())
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
    if (!x.trigger(this._element, ou, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const i of [].concat(...document.body.children))
          x.off(i, "mouseover", Ni);
      this._popper && this._popper.destroy(), this._menu.classList.remove(En), this._element.classList.remove(En), this._element.setAttribute("aria-expanded", "false"), St.removeDataAttribute(this._menu, "popper"), x.trigger(this._element, au, t);
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !At(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${go.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Aa > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : At(this._config.reference) ? t = Vt(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const e = this._getPopperConfig();
    this._popper = zr(t, this._menu, e);
  }
  _isShown() {
    return this._menu.classList.contains(En);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(fu))
      return Du;
    if (t.classList.contains(du))
      return Tu;
    if (t.classList.contains(hu))
      return Cu;
    if (t.classList.contains(pu))
      return Au;
    const e = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(uu) ? e ? yu : bu : e ? wu : Eu;
  }
  _detectNavbar() {
    return this._element.closest(gu) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (St.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...Ke(this._config.popperConfig, [t])
    };
  }
  _selectMenuItem({
    key: t,
    target: e
  }) {
    const i = ae.find(_u, this._menu).filter((r) => Pn(r));
    i.length && Gr(i, e, t === _o, !i.includes(e)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = pt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === ru || t.type === "keyup" && t.key !== vo)
      return;
    const e = ae.find(mu);
    for (const i of e) {
      const r = pt.getInstance(i);
      if (!r || r._config.autoClose === !1)
        continue;
      const o = t.composedPath(), s = o.includes(r._menu);
      if (o.includes(r._element) || r._config.autoClose === "inside" && !s || r._config.autoClose === "outside" && s || r._menu.contains(t.target) && (t.type === "keyup" && t.key === vo || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: r._element
      };
      t.type === "click" && (a.clickEvent = t), r._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const e = /input|textarea/i.test(t.target.tagName), i = t.key === nu, r = [iu, _o].includes(t.key);
    if (!r && !i || e && !i)
      return;
    t.preventDefault();
    const o = this.matches(en) ? this : ae.prev(this, en)[0] || ae.next(this, en)[0] || ae.findOne(en, t.delegateTarget.parentNode), s = pt.getOrCreateInstance(o);
    if (r) {
      t.stopPropagation(), s.show(), s._selectMenuItem(t);
      return;
    }
    s._isShown() && (t.stopPropagation(), s.hide(), o.focus());
  }
}
x.on(document, Va, en, pt.dataApiKeydownHandler);
x.on(document, Va, Ci, pt.dataApiKeydownHandler);
x.on(document, Ba, pt.clearMenus);
x.on(document, cu, pt.clearMenus);
x.on(document, Ba, en, function(n) {
  n.preventDefault(), pt.getOrCreateInstance(this).toggle();
});
ct(pt);
const Ka = "backdrop", Mu = "fade", bo = "show", yo = `mousedown.bs.${Ka}`, xu = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, Nu = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Ua extends ni {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return xu;
  }
  static get DefaultType() {
    return Nu;
  }
  static get NAME() {
    return Ka;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      Ke(t);
      return;
    }
    this._append();
    const e = this._getElement();
    this._config.isAnimated && ti(e), e.classList.add(bo), this._emulateAnimation(() => {
      Ke(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      Ke(t);
      return;
    }
    this._getElement().classList.remove(bo), this._emulateAnimation(() => {
      this.dispose(), Ke(t);
    });
  }
  dispose() {
    this._isAppended && (x.off(this._element, yo), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(Mu), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = Vt(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), x.on(t, yo, () => {
      Ke(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Na(t, this._getElement(), this._config.isAnimated);
  }
}
const $u = "focustrap", Lu = "bs.focustrap", Li = `.${Lu}`, Iu = `focusin${Li}`, ku = `keydown.tab${Li}`, Pu = "Tab", Ru = "forward", Eo = "backward", Yu = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, Hu = {
  autofocus: "boolean",
  trapElement: "element"
};
class za extends ni {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return Yu;
  }
  static get DefaultType() {
    return Hu;
  }
  static get NAME() {
    return $u;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), x.off(document, Li), x.on(document, Iu, (t) => this._handleFocusin(t)), x.on(document, ku, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, x.off(document, Li));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: e
    } = this._config;
    if (t.target === document || t.target === e || e.contains(t.target))
      return;
    const i = ae.focusableChildren(e);
    i.length === 0 ? e.focus() : this._lastTabNavDirection === Eo ? i[i.length - 1].focus() : i[0].focus();
  }
  _handleKeydown(t) {
    t.key === Pu && (this._lastTabNavDirection = t.shiftKey ? Eo : Ru);
  }
}
const wo = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Do = ".sticky-top", hi = "padding-right", To = "margin-right";
class Or {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, hi, (e) => e + t), this._setElementAttributes(wo, hi, (e) => e + t), this._setElementAttributes(Do, To, (e) => e - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hi), this._resetElementAttributes(wo, hi), this._resetElementAttributes(Do, To);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, i) {
    const r = this.getWidth(), o = (s) => {
      if (s !== this._element && window.innerWidth > s.clientWidth + r)
        return;
      this._saveInitialAttribute(s, e);
      const a = window.getComputedStyle(s).getPropertyValue(e);
      s.style.setProperty(e, `${i(Number.parseFloat(a))}px`);
    };
    this._applyManipulationCallback(t, o);
  }
  _saveInitialAttribute(t, e) {
    const i = t.style.getPropertyValue(e);
    i && St.setDataAttribute(t, e, i);
  }
  _resetElementAttributes(t, e) {
    const i = (r) => {
      const o = St.getDataAttribute(r, e);
      if (o === null) {
        r.style.removeProperty(e);
        return;
      }
      St.removeDataAttribute(r, e), r.style.setProperty(e, o);
    };
    this._applyManipulationCallback(t, i);
  }
  _applyManipulationCallback(t, e) {
    if (At(t)) {
      e(t);
      return;
    }
    for (const i of ae.find(t, this._element))
      e(i);
  }
}
const Fu = "modal", ju = "bs.modal", lt = `.${ju}`, Wu = ".data-api", Bu = "Escape", Vu = `hide${lt}`, Ku = `hidePrevented${lt}`, Ga = `hidden${lt}`, qa = `show${lt}`, Uu = `shown${lt}`, zu = `resize${lt}`, Gu = `click.dismiss${lt}`, qu = `mousedown.dismiss${lt}`, Xu = `keydown.dismiss${lt}`, Qu = `click${lt}${Wu}`, Co = "modal-open", Zu = "fade", Ao = "show", Ji = "modal-static", Ju = ".modal.show", ef = ".modal-dialog", tf = ".modal-body", nf = '[data-bs-toggle="modal"]', rf = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, of = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class sn extends mt {
  constructor(t, e) {
    super(t, e), this._dialog = ae.findOne(ef, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Or(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return rf;
  }
  static get DefaultType() {
    return of;
  }
  static get NAME() {
    return Fu;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || x.trigger(this._element, qa, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Co), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || x.trigger(this._element, Vu).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ao), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    x.off(window, lt), x.off(this._dialog, lt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Ua({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new za({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const e = ae.findOne(tf, this._dialog);
    e && (e.scrollTop = 0), ti(this._element), this._element.classList.add(Ao);
    const i = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, x.trigger(this._element, Uu, {
        relatedTarget: t
      });
    };
    this._queueCallback(i, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    x.on(this._element, Xu, (t) => {
      if (t.key === Bu) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), x.on(window, zu, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), x.on(this._element, qu, (t) => {
      x.one(this._element, Gu, (e) => {
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
      document.body.classList.remove(Co), this._resetAdjustments(), this._scrollBar.reset(), x.trigger(this._element, Ga);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(Zu);
  }
  _triggerBackdropTransition() {
    if (x.trigger(this._element, Ku).defaultPrevented)
      return;
    const e = this._element.scrollHeight > document.documentElement.clientHeight, i = this._element.style.overflowY;
    i === "hidden" || this._element.classList.contains(Ji) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Ji), this._queueCallback(() => {
      this._element.classList.remove(Ji), this._queueCallback(() => {
        this._element.style.overflowY = i;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
    if (i && !t) {
      const r = st() ? "paddingLeft" : "paddingRight";
      this._element.style[r] = `${e}px`;
    }
    if (!i && t) {
      const r = st() ? "paddingRight" : "paddingLeft";
      this._element.style[r] = `${e}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const i = sn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
}
x.on(document, Qu, nf, function(n) {
  const t = ae.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && n.preventDefault(), x.one(t, qa, (r) => {
    r.defaultPrevented || x.one(t, Ga, () => {
      Pn(this) && this.focus();
    });
  });
  const e = ae.findOne(Ju);
  e && sn.getInstance(e).hide(), sn.getOrCreateInstance(t).toggle(this);
});
Bi(sn);
ct(sn);
const af = "offcanvas", sf = "bs.offcanvas", Lt = `.${sf}`, Xa = ".data-api", lf = `load${Lt}${Xa}`, cf = "Escape", So = "show", Oo = "showing", Mo = "hiding", uf = "offcanvas-backdrop", Qa = ".offcanvas.show", ff = `show${Lt}`, df = `shown${Lt}`, hf = `hide${Lt}`, xo = `hidePrevented${Lt}`, Za = `hidden${Lt}`, pf = `resize${Lt}`, mf = `click${Lt}${Xa}`, gf = `keydown.dismiss${Lt}`, vf = '[data-bs-toggle="offcanvas"]', _f = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, bf = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class xt extends mt {
  constructor(t, e) {
    super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return _f;
  }
  static get DefaultType() {
    return bf;
  }
  static get NAME() {
    return af;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || x.trigger(this._element, ff, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new Or().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Oo);
    const i = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(So), this._element.classList.remove(Oo), x.trigger(this._element, df, {
        relatedTarget: t
      });
    };
    this._queueCallback(i, this._element, !0);
  }
  hide() {
    if (!this._isShown || x.trigger(this._element, hf).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Mo), this._backdrop.hide();
    const e = () => {
      this._element.classList.remove(So, Mo), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Or().reset(), x.trigger(this._element, Za);
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
        x.trigger(this._element, xo);
        return;
      }
      this.hide();
    }, e = !!this._config.backdrop;
    return new Ua({
      className: uf,
      isVisible: e,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: e ? t : null
    });
  }
  _initializeFocusTrap() {
    return new za({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    x.on(this._element, gf, (t) => {
      if (t.key === cf) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        x.trigger(this._element, xo);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = xt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
x.on(document, mf, vf, function(n) {
  const t = ae.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Kt(this))
    return;
  x.one(t, Za, () => {
    Pn(this) && this.focus();
  });
  const e = ae.findOne(Qa);
  e && e !== t && xt.getInstance(e).hide(), xt.getOrCreateInstance(t).toggle(this);
});
x.on(window, lf, () => {
  for (const n of ae.find(Qa))
    xt.getOrCreateInstance(n).show();
});
x.on(window, pf, () => {
  for (const n of ae.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(n).position !== "fixed" && xt.getOrCreateInstance(n).hide();
});
Bi(xt);
ct(xt);
const yf = /^aria-[\w-]*$/i, Ja = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", yf],
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
}, Ef = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), wf = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Df = (n, t) => {
  const e = n.nodeName.toLowerCase();
  return t.includes(e) ? Ef.has(e) ? !!wf.test(n.nodeValue) : !0 : t.filter((i) => i instanceof RegExp).some((i) => i.test(e));
};
function Tf(n, t, e) {
  if (!n.length)
    return n;
  if (e && typeof e == "function")
    return e(n);
  const r = new window.DOMParser().parseFromString(n, "text/html"), o = [].concat(...r.body.querySelectorAll("*"));
  for (const s of o) {
    const a = s.nodeName.toLowerCase();
    if (!Object.keys(t).includes(a)) {
      s.remove();
      continue;
    }
    const l = [].concat(...s.attributes), f = [].concat(t["*"] || [], t[a] || []);
    for (const d of l)
      Df(d, f) || s.removeAttribute(d.nodeName);
  }
  return r.body.innerHTML;
}
const Cf = "TemplateFactory", Af = {
  allowList: Ja,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, Sf = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, Of = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class Mf extends ni {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return Af;
  }
  static get DefaultType() {
    return Sf;
  }
  static get NAME() {
    return Cf;
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
    for (const [r, o] of Object.entries(this._config.content))
      this._setContent(t, o, r);
    const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
    return i && e.classList.add(...i.split(" ")), e;
  }
  // Private
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [e, i] of Object.entries(t))
      super._typeCheckConfig({
        selector: e,
        entry: i
      }, Of);
  }
  _setContent(t, e, i) {
    const r = ae.findOne(i, t);
    if (r) {
      if (e = this._resolvePossibleFunction(e), !e) {
        r.remove();
        return;
      }
      if (At(e)) {
        this._putElementInTemplate(Vt(e), r);
        return;
      }
      if (this._config.html) {
        r.innerHTML = this._maybeSanitize(e);
        return;
      }
      r.textContent = e;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize ? Tf(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return Ke(t, [this]);
  }
  _putElementInTemplate(t, e) {
    if (this._config.html) {
      e.innerHTML = "", e.append(t);
      return;
    }
    e.textContent = t.textContent;
  }
}
const xf = "tooltip", Nf = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), er = "fade", $f = "modal", pi = "show", Lf = ".tooltip-inner", No = `.${$f}`, $o = "hide.bs.modal", jn = "hover", tr = "focus", If = "click", kf = "manual", Pf = "hide", Rf = "hidden", Yf = "show", Hf = "shown", Ff = "inserted", jf = "click", Wf = "focusin", Bf = "focusout", Vf = "mouseenter", Kf = "mouseleave", Uf = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: st() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: st() ? "right" : "left"
}, zf = {
  allowList: Ja,
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
}, Gf = {
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
class Nt extends mt {
  constructor(t, e) {
    if (typeof Aa > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return zf;
  }
  static get DefaultType() {
    return Gf;
  }
  static get NAME() {
    return xf;
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
    clearTimeout(this._timeout), x.off(this._element.closest(No), $o, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = x.trigger(this._element, this.constructor.eventName(Yf)), i = (Ma(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !i)
      return;
    this._disposePopper();
    const r = this._getTipElement();
    this._element.setAttribute("aria-describedby", r.getAttribute("id"));
    const {
      container: o
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (o.append(r), x.trigger(this._element, this.constructor.eventName(Ff))), this._popper = this._createPopper(r), r.classList.add(pi), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        x.on(a, "mouseover", Ni);
    const s = () => {
      x.trigger(this._element, this.constructor.eventName(Hf)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(s, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || x.trigger(this._element, this.constructor.eventName(Pf)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(pi), "ontouchstart" in document.documentElement)
      for (const r of [].concat(...document.body.children))
        x.off(r, "mouseover", Ni);
    this._activeTrigger[If] = !1, this._activeTrigger[tr] = !1, this._activeTrigger[jn] = !1, this._isHovered = null;
    const i = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), x.trigger(this._element, this.constructor.eventName(Rf)));
    };
    this._queueCallback(i, this.tip, this._isAnimated());
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
    e.classList.remove(er, pi), e.classList.add(`bs-${this.constructor.NAME}-auto`);
    const i = Ll(this.constructor.NAME).toString();
    return e.setAttribute("id", i), this._isAnimated() && e.classList.add(er), e;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Mf({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [Lf]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(er);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(pi);
  }
  _createPopper(t) {
    const e = Ke(this._config.placement, [this, t, this._element]), i = Uf[e.toUpperCase()];
    return zr(this._element, t, this._getPopperConfig(i));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return Ke(t, [this._element]);
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
        fn: (i) => {
          this._getTipElement().setAttribute("data-popper-placement", i.state.placement);
        }
      }]
    };
    return {
      ...e,
      ...Ke(this._config.popperConfig, [e])
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const e of t)
      if (e === "click")
        x.on(this._element, this.constructor.eventName(jf), this._config.selector, (i) => {
          this._initializeOnDelegatedTarget(i).toggle();
        });
      else if (e !== kf) {
        const i = e === jn ? this.constructor.eventName(Vf) : this.constructor.eventName(Wf), r = e === jn ? this.constructor.eventName(Kf) : this.constructor.eventName(Bf);
        x.on(this._element, i, this._config.selector, (o) => {
          const s = this._initializeOnDelegatedTarget(o);
          s._activeTrigger[o.type === "focusin" ? tr : jn] = !0, s._enter();
        }), x.on(this._element, r, this._config.selector, (o) => {
          const s = this._initializeOnDelegatedTarget(o);
          s._activeTrigger[o.type === "focusout" ? tr : jn] = s._element.contains(o.relatedTarget), s._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, x.on(this._element.closest(No), $o, this._hideModalHandler);
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
    const e = St.getDataAttributes(this._element);
    for (const i of Object.keys(e))
      Nf.has(i) && delete e[i];
    return t = {
      ...e,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : Vt(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const [e, i] of Object.entries(this._config))
      this.constructor.Default[e] !== i && (t[e] = i);
    return t.selector = !1, t.trigger = "manual", t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Nt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
ct(Nt);
const qf = "popover", Xf = ".popover-header", Qf = ".popover-body", Zf = {
  ...Nt.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, Jf = {
  ...Nt.DefaultType,
  content: "(null|string|element|function)"
};
class Ln extends Nt {
  // Getters
  static get Default() {
    return Zf;
  }
  static get DefaultType() {
    return Jf;
  }
  static get NAME() {
    return qf;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [Xf]: this._getTitle(),
      [Qf]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Ln.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
ct(Ln);
const ed = "scrollspy", td = "bs.scrollspy", Qr = `.${td}`, nd = ".data-api", id = `activate${Qr}`, Lo = `click${Qr}`, rd = `load${Qr}${nd}`, od = "dropdown-item", gn = "active", ad = '[data-bs-spy="scroll"]', nr = "[href]", sd = ".nav, .list-group", Io = ".nav-link", ld = ".nav-item", cd = ".list-group-item", ud = `${Io}, ${ld} > ${Io}, ${cd}`, fd = ".dropdown", dd = ".dropdown-toggle", hd = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, pd = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class ai extends mt {
  constructor(t, e) {
    super(t, e), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return hd;
  }
  static get DefaultType() {
    return pd;
  }
  static get NAME() {
    return ed;
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
    return t.target = Vt(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((e) => Number.parseFloat(e))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (x.off(this._config.target, Lo), x.on(this._config.target, Lo, nr, (t) => {
      const e = this._observableSections.get(t.target.hash);
      if (e) {
        t.preventDefault();
        const i = this._rootElement || window, r = e.offsetTop - this._element.offsetTop;
        if (i.scrollTo) {
          i.scrollTo({
            top: r,
            behavior: "smooth"
          });
          return;
        }
        i.scrollTop = r;
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
    const e = (s) => this._targetLinks.get(`#${s.target.id}`), i = (s) => {
      this._previousScrollData.visibleEntryTop = s.target.offsetTop, this._process(e(s));
    }, r = (this._rootElement || document.documentElement).scrollTop, o = r >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = r;
    for (const s of t) {
      if (!s.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(e(s));
        continue;
      }
      const a = s.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (o && a) {
        if (i(s), !r)
          return;
        continue;
      }
      !o && !a && i(s);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const t = ae.find(nr, this._config.target);
    for (const e of t) {
      if (!e.hash || Kt(e))
        continue;
      const i = ae.findOne(decodeURI(e.hash), this._element);
      Pn(i) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, i));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(gn), this._activateParents(t), x.trigger(this._element, id, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(od)) {
      ae.findOne(dd, t.closest(fd)).classList.add(gn);
      return;
    }
    for (const e of ae.parents(t, sd))
      for (const i of ae.prev(e, ud))
        i.classList.add(gn);
  }
  _clearActiveClass(t) {
    t.classList.remove(gn);
    const e = ae.find(`${nr}.${gn}`, t);
    for (const i of e)
      i.classList.remove(gn);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ai.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
x.on(window, rd, () => {
  for (const n of ae.find(ad))
    ai.getOrCreateInstance(n);
});
ct(ai);
const md = "tab", gd = "bs.tab", un = `.${gd}`, vd = `hide${un}`, _d = `hidden${un}`, bd = `show${un}`, yd = `shown${un}`, Ed = `click${un}`, wd = `keydown${un}`, Dd = `load${un}`, Td = "ArrowLeft", ko = "ArrowRight", Cd = "ArrowUp", Po = "ArrowDown", ir = "Home", Ro = "End", tn = "active", Yo = "fade", rr = "show", Ad = "dropdown", es = ".dropdown-toggle", Sd = ".dropdown-menu", or = `:not(${es})`, Od = '.list-group, .nav, [role="tablist"]', Md = ".nav-item, .list-group-item", xd = `.nav-link${or}, .list-group-item${or}, [role="tab"]${or}`, ts = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', ar = `${xd}, ${ts}`, Nd = `.${tn}[data-bs-toggle="tab"], .${tn}[data-bs-toggle="pill"], .${tn}[data-bs-toggle="list"]`;
class ln extends mt {
  constructor(t) {
    super(t), this._parent = this._element.closest(Od), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), x.on(this._element, wd, (e) => this._keydown(e)));
  }
  // Getters
  static get NAME() {
    return md;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const e = this._getActiveElem(), i = e ? x.trigger(e, vd, {
      relatedTarget: t
    }) : null;
    x.trigger(t, bd, {
      relatedTarget: e
    }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
  }
  // Private
  _activate(t, e) {
    if (!t)
      return;
    t.classList.add(tn), this._activate(ae.getElementFromSelector(t));
    const i = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(rr);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), x.trigger(t, yd, {
        relatedTarget: e
      });
    };
    this._queueCallback(i, t, t.classList.contains(Yo));
  }
  _deactivate(t, e) {
    if (!t)
      return;
    t.classList.remove(tn), t.blur(), this._deactivate(ae.getElementFromSelector(t));
    const i = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(rr);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), x.trigger(t, _d, {
        relatedTarget: e
      });
    };
    this._queueCallback(i, t, t.classList.contains(Yo));
  }
  _keydown(t) {
    if (![Td, ko, Cd, Po, ir, Ro].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const e = this._getChildren().filter((r) => !Kt(r));
    let i;
    if ([ir, Ro].includes(t.key))
      i = e[t.key === ir ? 0 : e.length - 1];
    else {
      const r = [ko, Po].includes(t.key);
      i = Gr(e, t.target, r, !0);
    }
    i && (i.focus({
      preventScroll: !0
    }), ln.getOrCreateInstance(i).show());
  }
  _getChildren() {
    return ae.find(ar, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, e) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const i of e)
      this._setInitialAttributesOnChild(i);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const e = this._elemIsActive(t), i = this._getOuterElement(t);
    t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const e = ae.getElementFromSelector(t);
    e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, e) {
    const i = this._getOuterElement(t);
    if (!i.classList.contains(Ad))
      return;
    const r = (o, s) => {
      const a = ae.findOne(o, i);
      a && a.classList.toggle(s, e);
    };
    r(es, tn), r(Sd, rr), i.setAttribute("aria-expanded", e);
  }
  _setAttributeIfNotExists(t, e, i) {
    t.hasAttribute(e) || t.setAttribute(e, i);
  }
  _elemIsActive(t) {
    return t.classList.contains(tn);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(ar) ? t : ae.findOne(ar, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(Md) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ln.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
x.on(document, Ed, ts, function(n) {
  ["A", "AREA"].includes(this.tagName) && n.preventDefault(), !Kt(this) && ln.getOrCreateInstance(this).show();
});
x.on(window, Dd, () => {
  for (const n of ae.find(Nd))
    ln.getOrCreateInstance(n);
});
ct(ln);
const $d = "toast", Ld = "bs.toast", Gt = `.${Ld}`, Id = `mouseover${Gt}`, kd = `mouseout${Gt}`, Pd = `focusin${Gt}`, Rd = `focusout${Gt}`, Yd = `hide${Gt}`, Hd = `hidden${Gt}`, Fd = `show${Gt}`, jd = `shown${Gt}`, Wd = "fade", Ho = "hide", mi = "show", gi = "showing", Bd = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Vd = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class si extends mt {
  constructor(t, e) {
    super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Vd;
  }
  static get DefaultType() {
    return Bd;
  }
  static get NAME() {
    return $d;
  }
  // Public
  show() {
    if (x.trigger(this._element, Fd).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Wd);
    const e = () => {
      this._element.classList.remove(gi), x.trigger(this._element, jd), this._maybeScheduleHide();
    };
    this._element.classList.remove(Ho), ti(this._element), this._element.classList.add(mi, gi), this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || x.trigger(this._element, Yd).defaultPrevented)
      return;
    const e = () => {
      this._element.classList.add(Ho), this._element.classList.remove(gi, mi), x.trigger(this._element, Hd);
    };
    this._element.classList.add(gi), this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(mi), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(mi);
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
    const i = t.relatedTarget;
    this._element === i || this._element.contains(i) || this._maybeScheduleHide();
  }
  _setListeners() {
    x.on(this._element, Id, (t) => this._onInteraction(t, !0)), x.on(this._element, kd, (t) => this._onInteraction(t, !1)), x.on(this._element, Pd, (t) => this._onInteraction(t, !0)), x.on(this._element, Rd, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = si.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
Bi(si);
ct(si);
const Jh = {
  /**
   * Trigger an animation class on an element.
   * Removes the class after animationend so it can be re-triggered.
   *
   * @param el        Target element
   * @param cls       Animation class name (e.g. 'animate-shake')
   * @param onEnd     Optional callback fired when animation completes
   */
  trigger(n, t, e) {
    n.classList.add("animate", t), n.addEventListener("animationend", () => {
      n.classList.remove("animate", t), e && e();
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
  observe(n = "[data-animate]", t = { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }) {
    const e = document.querySelectorAll(n);
    if (e.length === 0)
      return;
    const i = new IntersectionObserver((r, o) => {
      r.forEach((s) => {
        if (!s.isIntersecting)
          return;
        const a = s.target, l = a.dataset.animate;
        l && (a.classList.add("animate", l), delete a.dataset.animate), o.unobserve(a);
      });
    }, t);
    e.forEach((r) => i.observe(r));
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
  onEnter(n, t, e = { rootMargin: "0px 0px 100px 0px", threshold: 0 }) {
    new IntersectionObserver((r, o) => {
      var s;
      (s = r[0]) != null && s.isIntersecting && (o.disconnect(), t());
    }, e).observe(n);
  }
}, Kd = {
  delay: 500,
  instantlyCloseOthers: !0
};
function ns() {
  return "ontouchstart" in document;
}
function is(n) {
  return n.closest(".dropdown, .nav-item");
}
function Ud(n) {
  const t = n.closest("nav, .navbar-nav, ul");
  return t ? t.querySelectorAll('[data-hover="dropdown"], [data-bsee-hover="dropdown"]') : document.querySelectorAll("__none__");
}
function zd(n) {
  Ud(n).forEach((t) => {
    if (t === n)
      return;
    const e = is(t);
    if (e) {
      e.classList.remove("show");
      const i = e.querySelector(".dropdown-menu");
      i && i.classList.remove("show"), t.setAttribute("aria-expanded", "false");
    }
  });
}
function rs(n, t = {}) {
  if (ns())
    return;
  const e = { ...Kd, ...t }, i = n.dataset.delay, r = n.dataset.closeOthers;
  i !== void 0 && (e.delay = parseInt(i, 10)), r !== void 0 && (e.instantlyCloseOthers = r !== "false");
  const o = is(n);
  if (!o)
    return;
  let s = null;
  const a = o.querySelector(".dropdown-menu");
  function l() {
    s !== null && (clearTimeout(s), s = null), e.instantlyCloseOthers && zd(n), o.classList.add("show"), a && a.classList.add("show"), n.setAttribute("aria-expanded", "true");
  }
  function f() {
    s = setTimeout(() => {
      o.classList.remove("show"), a && a.classList.remove("show"), n.setAttribute("aria-expanded", "false"), s = null;
    }, e.delay);
  }
  o.addEventListener("mouseenter", l), o.addEventListener("mouseleave", f), n.dataset.bseeHover = "dropdown";
}
function Gd(n = {}) {
  ns() || document.querySelectorAll('[data-hover="dropdown"]').forEach((t) => {
    t.dataset.bseeHover !== "dropdown" && rs(t, n);
  });
}
const qd = { init: Gd, attach: rs };
function Fo(n, t) {
  const e = /* @__PURE__ */ new WeakSet();
  function i(s) {
    e.has(s) || (e.add(s), t(s));
  }
  function r(s) {
    if (s.nodeType !== Node.ELEMENT_NODE)
      return;
    const a = s;
    a.matches(n) && i(a), a.querySelectorAll(n).forEach(i);
  }
  document.querySelectorAll(n).forEach(i);
  const o = new MutationObserver((s) => {
    s.forEach((a) => {
      a.addedNodes.forEach(r);
    });
  });
  return o.observe(document.body, { childList: !0, subtree: !0 }), () => o.disconnect();
}
const Xd = {
  "top-right": "top-0 end-0",
  "top-left": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "bottom-right": "bottom-0 end-0",
  "bottom-left": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x"
}, Qd = {
  success: "fa-check",
  danger: "fa-xmark",
  warning: "fa-exclamation",
  info: "fa-info",
  primary: "fa-info",
  secondary: "fa-info"
};
function Zd(n) {
  const t = `bsee-toast-container-${n}`, e = document.getElementById(t);
  if (e)
    return e;
  const i = document.createElement("div");
  return i.id = t, i.className = `toast-container position-fixed p-3 ${Xd[n]}`, document.body.appendChild(i), i;
}
function jo(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function Jd(n, t = {}) {
  const e = t.type ?? "success", i = t.delay ?? 5e3, r = t.position ?? "bottom-right", o = t.timestamp ?? "just now", s = Qd[e], a = document.createElement("div");
  a.className = "toast", a.setAttribute("role", "alert"), a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-atomic", "true"), t.id && (a.id = t.id), a.innerHTML = `
        <div class="toast-header">
            <span class="badge text-bg-${e} d-inline-flex align-items-center justify-content-center me-2"
                  style="width: 1.25rem; height: 1.25rem;">
                <i class="fa-solid ${s}"></i>
            </span>
            <strong class="me-auto">${jo(n)}</strong>
            <small class="text-body-secondary">${jo(o)}</small>
            <button type="button" class="btn-close ms-2"
                    data-bs-dismiss="toast" aria-label="Close"></button>
        </div>`, Zd(r).appendChild(a);
  const { Toast: l } = window.bootstrap ?? {};
  if (l) {
    const f = new l(a, {
      autohide: i > 0,
      delay: i > 0 ? i : 5e3
    });
    a.addEventListener("hidden.bs.toast", () => a.remove()), f.show();
  } else
    a.classList.add("show"), i > 0 && setTimeout(() => a.remove(), i);
}
const ep = Jd;
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var os = { exports: {} };
(function(n, t) {
  (function(e, i) {
    n.exports = i();
  })(It, function() {
    var e = 1e3, i = 6e4, r = 36e5, o = "millisecond", s = "second", a = "minute", l = "hour", f = "day", d = "week", v = "month", b = "quarter", E = "year", D = "date", m = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, M = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, O = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(F) {
      var N = ["th", "st", "nd", "rd"], T = F % 100;
      return "[" + F + (N[(T - 20) % 10] || N[T] || N[0]) + "]";
    } }, L = function(F, N, T) {
      var j = String(F);
      return !j || j.length >= N ? F : "" + Array(N + 1 - j.length).join(T) + F;
    }, I = { s: L, z: function(F) {
      var N = -F.utcOffset(), T = Math.abs(N), j = Math.floor(T / 60), $ = T % 60;
      return (N <= 0 ? "+" : "-") + L(j, 2, "0") + ":" + L($, 2, "0");
    }, m: function F(N, T) {
      if (N.date() < T.date())
        return -F(T, N);
      var j = 12 * (T.year() - N.year()) + (T.month() - N.month()), $ = N.clone().add(j, v), z = T - $ < 0, ee = N.clone().add(j + (z ? -1 : 1), v);
      return +(-(j + (T - $) / (z ? $ - ee : ee - $)) || 0);
    }, a: function(F) {
      return F < 0 ? Math.ceil(F) || 0 : Math.floor(F);
    }, p: function(F) {
      return { M: v, y: E, w: d, d: f, D, h: l, m: a, s, ms: o, Q: b }[F] || String(F || "").toLowerCase().replace(/s$/, "");
    }, u: function(F) {
      return F === void 0;
    } }, V = "en", A = {};
    A[V] = O;
    var p = "$isDayjsObject", w = function(F) {
      return F instanceof te || !(!F || !F[p]);
    }, Y = function F(N, T, j) {
      var $;
      if (!N)
        return V;
      if (typeof N == "string") {
        var z = N.toLowerCase();
        A[z] && ($ = z), T && (A[z] = T, $ = z);
        var ee = N.split("-");
        if (!$ && ee.length > 1)
          return F(ee[0]);
      } else {
        var re = N.name;
        A[re] = N, $ = re;
      }
      return !j && $ && (V = $), $ || !j && V;
    }, H = function(F, N) {
      if (w(F))
        return F.clone();
      var T = typeof N == "object" ? N : {};
      return T.date = F, T.args = arguments, new te(T);
    }, k = I;
    k.l = Y, k.i = w, k.w = function(F, N) {
      return H(F, { locale: N.$L, utc: N.$u, x: N.$x, $offset: N.$offset });
    };
    var te = function() {
      function F(T) {
        this.$L = Y(T.locale, null, !0), this.parse(T), this.$x = this.$x || T.x || {}, this[p] = !0;
      }
      var N = F.prototype;
      return N.parse = function(T) {
        this.$d = function(j) {
          var $ = j.date, z = j.utc;
          if ($ === null)
            return /* @__PURE__ */ new Date(NaN);
          if (k.u($))
            return /* @__PURE__ */ new Date();
          if ($ instanceof Date)
            return new Date($);
          if (typeof $ == "string" && !/Z$/i.test($)) {
            var ee = $.match(_);
            if (ee) {
              var re = ee[2] - 1 || 0, K = (ee[7] || "0").substring(0, 3);
              return z ? new Date(Date.UTC(ee[1], re, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, K)) : new Date(ee[1], re, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, K);
            }
          }
          return new Date($);
        }(T), this.init();
      }, N.init = function() {
        var T = this.$d;
        this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
      }, N.$utils = function() {
        return k;
      }, N.isValid = function() {
        return this.$d.toString() !== m;
      }, N.isSame = function(T, j) {
        var $ = H(T);
        return this.startOf(j) <= $ && $ <= this.endOf(j);
      }, N.isAfter = function(T, j) {
        return H(T) < this.startOf(j);
      }, N.isBefore = function(T, j) {
        return this.endOf(j) < H(T);
      }, N.$g = function(T, j, $) {
        return k.u(T) ? this[j] : this.set($, T);
      }, N.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, N.valueOf = function() {
        return this.$d.getTime();
      }, N.startOf = function(T, j) {
        var $ = this, z = !!k.u(j) || j, ee = k.p(T), re = function(we, _e) {
          var Se = k.w($.$u ? Date.UTC($.$y, _e, we) : new Date($.$y, _e, we), $);
          return z ? Se : Se.endOf(f);
        }, K = function(we, _e) {
          return k.w($.toDate()[we].apply($.toDate("s"), (z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(_e)), $);
        }, P = this.$W, R = this.$M, U = this.$D, q = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case E:
            return z ? re(1, 0) : re(31, 11);
          case v:
            return z ? re(1, R) : re(0, R + 1);
          case d:
            var oe = this.$locale().weekStart || 0, de = (P < oe ? P + 7 : P) - oe;
            return re(z ? U - de : U + (6 - de), R);
          case f:
          case D:
            return K(q + "Hours", 0);
          case l:
            return K(q + "Minutes", 1);
          case a:
            return K(q + "Seconds", 2);
          case s:
            return K(q + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, N.endOf = function(T) {
        return this.startOf(T, !1);
      }, N.$set = function(T, j) {
        var $, z = k.p(T), ee = "set" + (this.$u ? "UTC" : ""), re = ($ = {}, $[f] = ee + "Date", $[D] = ee + "Date", $[v] = ee + "Month", $[E] = ee + "FullYear", $[l] = ee + "Hours", $[a] = ee + "Minutes", $[s] = ee + "Seconds", $[o] = ee + "Milliseconds", $)[z], K = z === f ? this.$D + (j - this.$W) : j;
        if (z === v || z === E) {
          var P = this.clone().set(D, 1);
          P.$d[re](K), P.init(), this.$d = P.set(D, Math.min(this.$D, P.daysInMonth())).$d;
        } else
          re && this.$d[re](K);
        return this.init(), this;
      }, N.set = function(T, j) {
        return this.clone().$set(T, j);
      }, N.get = function(T) {
        return this[k.p(T)]();
      }, N.add = function(T, j) {
        var $, z = this;
        T = Number(T);
        var ee = k.p(j), re = function(R) {
          var U = H(z);
          return k.w(U.date(U.date() + Math.round(R * T)), z);
        };
        if (ee === v)
          return this.set(v, this.$M + T);
        if (ee === E)
          return this.set(E, this.$y + T);
        if (ee === f)
          return re(1);
        if (ee === d)
          return re(7);
        var K = ($ = {}, $[a] = i, $[l] = r, $[s] = e, $)[ee] || 1, P = this.$d.getTime() + T * K;
        return k.w(P, this);
      }, N.subtract = function(T, j) {
        return this.add(-1 * T, j);
      }, N.format = function(T) {
        var j = this, $ = this.$locale();
        if (!this.isValid())
          return $.invalidDate || m;
        var z = T || "YYYY-MM-DDTHH:mm:ssZ", ee = k.z(this), re = this.$H, K = this.$m, P = this.$M, R = $.weekdays, U = $.months, q = $.meridiem, oe = function(_e, Se, xe, Le) {
          return _e && (_e[Se] || _e(j, z)) || xe[Se].slice(0, Le);
        }, de = function(_e) {
          return k.s(re % 12 || 12, _e, "0");
        }, we = q || function(_e, Se, xe) {
          var Le = _e < 12 ? "AM" : "PM";
          return xe ? Le.toLowerCase() : Le;
        };
        return z.replace(M, function(_e, Se) {
          return Se || function(xe) {
            switch (xe) {
              case "YY":
                return String(j.$y).slice(-2);
              case "YYYY":
                return k.s(j.$y, 4, "0");
              case "M":
                return P + 1;
              case "MM":
                return k.s(P + 1, 2, "0");
              case "MMM":
                return oe($.monthsShort, P, U, 3);
              case "MMMM":
                return oe(U, P);
              case "D":
                return j.$D;
              case "DD":
                return k.s(j.$D, 2, "0");
              case "d":
                return String(j.$W);
              case "dd":
                return oe($.weekdaysMin, j.$W, R, 2);
              case "ddd":
                return oe($.weekdaysShort, j.$W, R, 3);
              case "dddd":
                return R[j.$W];
              case "H":
                return String(re);
              case "HH":
                return k.s(re, 2, "0");
              case "h":
                return de(1);
              case "hh":
                return de(2);
              case "a":
                return we(re, K, !0);
              case "A":
                return we(re, K, !1);
              case "m":
                return String(K);
              case "mm":
                return k.s(K, 2, "0");
              case "s":
                return String(j.$s);
              case "ss":
                return k.s(j.$s, 2, "0");
              case "SSS":
                return k.s(j.$ms, 3, "0");
              case "Z":
                return ee;
            }
            return null;
          }(_e) || ee.replace(":", "");
        });
      }, N.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, N.diff = function(T, j, $) {
        var z, ee = this, re = k.p(j), K = H(T), P = (K.utcOffset() - this.utcOffset()) * i, R = this - K, U = function() {
          return k.m(ee, K);
        };
        switch (re) {
          case E:
            z = U() / 12;
            break;
          case v:
            z = U();
            break;
          case b:
            z = U() / 3;
            break;
          case d:
            z = (R - P) / 6048e5;
            break;
          case f:
            z = (R - P) / 864e5;
            break;
          case l:
            z = R / r;
            break;
          case a:
            z = R / i;
            break;
          case s:
            z = R / e;
            break;
          default:
            z = R;
        }
        return $ ? z : k.a(z);
      }, N.daysInMonth = function() {
        return this.endOf(v).$D;
      }, N.$locale = function() {
        return A[this.$L];
      }, N.locale = function(T, j) {
        if (!T)
          return this.$L;
        var $ = this.clone(), z = Y(T, j, !0);
        return z && ($.$L = z), $;
      }, N.clone = function() {
        return k.w(this.$d, this);
      }, N.toDate = function() {
        return new Date(this.valueOf());
      }, N.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, N.toISOString = function() {
        return this.$d.toISOString();
      }, N.toString = function() {
        return this.$d.toUTCString();
      }, F;
    }(), Q = te.prototype;
    return H.prototype = Q, [["$ms", o], ["$s", s], ["$m", a], ["$H", l], ["$W", f], ["$M", v], ["$y", E], ["$D", D]].forEach(function(F) {
      Q[F[1]] = function(N) {
        return this.$g(N, F[0], F[1]);
      };
    }), H.extend = function(F, N) {
      return F.$i || (F(N, te, H), F.$i = !0), H;
    }, H.locale = Y, H.isDayjs = w, H.unix = function(F) {
      return H(1e3 * F);
    }, H.en = A[V], H.Ls = A, H.p = {}, H;
  });
})(os);
var eh = os.exports;
const fn = /* @__PURE__ */ kt(eh);
var as = { exports: {} };
(function(n, t) {
  (function(e, i) {
    n.exports = i();
  })(It, function() {
    return function(e, i, r) {
      e = e || {};
      var o = i.prototype, s = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function a(f, d, v, b) {
        return o.fromToBase(f, d, v, b);
      }
      r.en.relativeTime = s, o.fromToBase = function(f, d, v, b, E) {
        for (var D, m, _, M = v.$locale().relativeTime || s, O = e.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], L = O.length, I = 0; I < L; I += 1) {
          var V = O[I];
          V.d && (D = b ? r(f).diff(v, V.d, !0) : v.diff(f, V.d, !0));
          var A = (e.rounding || Math.round)(Math.abs(D));
          if (_ = D > 0, A <= V.r || !V.r) {
            A <= 1 && I > 0 && (V = O[I - 1]);
            var p = M[V.l];
            E && (A = E("" + A)), m = typeof p == "string" ? p.replace("%d", A) : p(A, d, V.l, _);
            break;
          }
        }
        if (d)
          return m;
        var w = _ ? M.future : M.past;
        return typeof w == "function" ? w(m) : w.replace("%s", m);
      }, o.to = function(f, d) {
        return a(f, d, this, !0);
      }, o.from = function(f, d) {
        return a(f, d, this);
      };
      var l = function(f) {
        return f.$u ? r.utc() : r();
      };
      o.toNow = function(f) {
        return this.to(l(this), f);
      }, o.fromNow = function(f) {
        return this.from(l(this), f);
      };
    };
  });
})(as);
var th = as.exports;
const nh = /* @__PURE__ */ kt(th);
var ss = { exports: {} };
(function(n, t) {
  (function(e, i) {
    n.exports = i();
  })(It, function() {
    var e, i, r = 1e3, o = 6e4, s = 36e5, a = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, f = 31536e6, d = 2628e6, v = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, b = { years: f, months: d, days: a, hours: s, minutes: o, seconds: r, milliseconds: 1, weeks: 6048e5 }, E = function(A) {
      return A instanceof I;
    }, D = function(A, p, w) {
      return new I(A, w, p.$l);
    }, m = function(A) {
      return i.p(A) + "s";
    }, _ = function(A) {
      return A < 0;
    }, M = function(A) {
      return _(A) ? Math.ceil(A) : Math.floor(A);
    }, O = function(A) {
      return Math.abs(A);
    }, L = function(A, p) {
      return A ? _(A) ? { negative: !0, format: "" + O(A) + p } : { negative: !1, format: "" + A + p } : { negative: !1, format: "" };
    }, I = function() {
      function A(w, Y, H) {
        var k = this;
        if (this.$d = {}, this.$l = H, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), Y)
          return D(w * b[m(Y)], this);
        if (typeof w == "number")
          return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object")
          return Object.keys(w).forEach(function(F) {
            k.$d[m(F)] = w[F];
          }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var te = w.match(v);
          if (te) {
            var Q = te.slice(2).map(function(F) {
              return F != null ? Number(F) : 0;
            });
            return this.$d.years = Q[0], this.$d.months = Q[1], this.$d.weeks = Q[2], this.$d.days = Q[3], this.$d.hours = Q[4], this.$d.minutes = Q[5], this.$d.seconds = Q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var p = A.prototype;
      return p.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(Y, H) {
          return Y + (w.$d[H] || 0) * b[H];
        }, 0);
      }, p.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = M(w / f), w %= f, this.$d.months = M(w / d), w %= d, this.$d.days = M(w / a), w %= a, this.$d.hours = M(w / s), w %= s, this.$d.minutes = M(w / o), w %= o, this.$d.seconds = M(w / r), w %= r, this.$d.milliseconds = w;
      }, p.toISOString = function() {
        var w = L(this.$d.years, "Y"), Y = L(this.$d.months, "M"), H = +this.$d.days || 0;
        this.$d.weeks && (H += 7 * this.$d.weeks);
        var k = L(H, "D"), te = L(this.$d.hours, "H"), Q = L(this.$d.minutes, "M"), F = this.$d.seconds || 0;
        this.$d.milliseconds && (F += this.$d.milliseconds / 1e3, F = Math.round(1e3 * F) / 1e3);
        var N = L(F, "S"), T = w.negative || Y.negative || k.negative || te.negative || Q.negative || N.negative, j = te.format || Q.format || N.format ? "T" : "", $ = (T ? "-" : "") + "P" + w.format + Y.format + k.format + j + te.format + Q.format + N.format;
        return $ === "P" || $ === "-P" ? "P0D" : $;
      }, p.toJSON = function() {
        return this.toISOString();
      }, p.format = function(w) {
        var Y = w || "YYYY-MM-DDTHH:mm:ss", H = { Y: this.$d.years, YY: i.s(this.$d.years, 2, "0"), YYYY: i.s(this.$d.years, 4, "0"), M: this.$d.months, MM: i.s(this.$d.months, 2, "0"), D: this.$d.days, DD: i.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: i.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: i.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: i.s(this.$d.seconds, 2, "0"), SSS: i.s(this.$d.milliseconds, 3, "0") };
        return Y.replace(l, function(k, te) {
          return te || String(H[k]);
        });
      }, p.as = function(w) {
        return this.$ms / b[m(w)];
      }, p.get = function(w) {
        var Y = this.$ms, H = m(w);
        return H === "milliseconds" ? Y %= 1e3 : Y = H === "weeks" ? M(Y / b[H]) : this.$d[H], Y || 0;
      }, p.add = function(w, Y, H) {
        var k;
        return k = Y ? w * b[m(Y)] : E(w) ? w.$ms : D(w, this).$ms, D(this.$ms + k * (H ? -1 : 1), this);
      }, p.subtract = function(w, Y) {
        return this.add(w, Y, !0);
      }, p.locale = function(w) {
        var Y = this.clone();
        return Y.$l = w, Y;
      }, p.clone = function() {
        return D(this.$ms, this);
      }, p.humanize = function(w) {
        return e().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
      }, p.valueOf = function() {
        return this.asMilliseconds();
      }, p.milliseconds = function() {
        return this.get("milliseconds");
      }, p.asMilliseconds = function() {
        return this.as("milliseconds");
      }, p.seconds = function() {
        return this.get("seconds");
      }, p.asSeconds = function() {
        return this.as("seconds");
      }, p.minutes = function() {
        return this.get("minutes");
      }, p.asMinutes = function() {
        return this.as("minutes");
      }, p.hours = function() {
        return this.get("hours");
      }, p.asHours = function() {
        return this.as("hours");
      }, p.days = function() {
        return this.get("days");
      }, p.asDays = function() {
        return this.as("days");
      }, p.weeks = function() {
        return this.get("weeks");
      }, p.asWeeks = function() {
        return this.as("weeks");
      }, p.months = function() {
        return this.get("months");
      }, p.asMonths = function() {
        return this.as("months");
      }, p.years = function() {
        return this.get("years");
      }, p.asYears = function() {
        return this.as("years");
      }, A;
    }(), V = function(A, p, w) {
      return A.add(p.years() * w, "y").add(p.months() * w, "M").add(p.days() * w, "d").add(p.hours() * w, "h").add(p.minutes() * w, "m").add(p.seconds() * w, "s").add(p.milliseconds() * w, "ms");
    };
    return function(A, p, w) {
      e = w, i = w().$utils(), w.duration = function(k, te) {
        var Q = w.locale();
        return D(k, { $l: Q }, te);
      }, w.isDuration = E;
      var Y = p.prototype.add, H = p.prototype.subtract;
      p.prototype.add = function(k, te) {
        return E(k) ? V(this, k, 1) : Y.bind(this)(k, te);
      }, p.prototype.subtract = function(k, te) {
        return E(k) ? V(this, k, -1) : H.bind(this)(k, te);
      };
    };
  });
})(ss);
var ih = ss.exports;
const rh = /* @__PURE__ */ kt(ih);
var ls = { exports: {} };
(function(n, t) {
  (function(e, i) {
    n.exports = i();
  })(It, function() {
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(i, r, o) {
      var s = r.prototype, a = s.format;
      o.en.formats = e, s.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var f = this.$locale().formats, d = function(v, b) {
          return v.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(E, D, m) {
            var _ = m && m.toUpperCase();
            return D || b[m] || e[m] || b[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(M, O, L) {
              return O || L.slice(1);
            });
          });
        }(l, f === void 0 ? {} : f);
        return a.call(this, d);
      };
    };
  });
})(ls);
var oh = ls.exports;
const ah = /* @__PURE__ */ kt(oh);
var cs = { exports: {} };
(function(n, t) {
  (function(e, i) {
    n.exports = i();
  })(It, function() {
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, i = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d/, o = /\d\d/, s = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, l = {}, f = function(_) {
      return (_ = +_) + (_ > 68 ? 1900 : 2e3);
    }, d = function(_) {
      return function(M) {
        this[_] = +M;
      };
    }, v = [/[+-]\d\d:?(\d\d)?|Z/, function(_) {
      (this.zone || (this.zone = {})).offset = function(M) {
        if (!M || M === "Z")
          return 0;
        var O = M.match(/([+-]|\d\d)/g), L = 60 * O[1] + (+O[2] || 0);
        return L === 0 ? 0 : O[0] === "+" ? -L : L;
      }(_);
    }], b = function(_) {
      var M = l[_];
      return M && (M.indexOf ? M : M.s.concat(M.f));
    }, E = function(_, M) {
      var O, L = l.meridiem;
      if (L) {
        for (var I = 1; I <= 24; I += 1)
          if (_.indexOf(L(I, 0, M)) > -1) {
            O = I > 12;
            break;
          }
      } else
        O = _ === (M ? "pm" : "PM");
      return O;
    }, D = { A: [a, function(_) {
      this.afternoon = E(_, !1);
    }], a: [a, function(_) {
      this.afternoon = E(_, !0);
    }], Q: [r, function(_) {
      this.month = 3 * (_ - 1) + 1;
    }], S: [r, function(_) {
      this.milliseconds = 100 * +_;
    }], SS: [o, function(_) {
      this.milliseconds = 10 * +_;
    }], SSS: [/\d{3}/, function(_) {
      this.milliseconds = +_;
    }], s: [s, d("seconds")], ss: [s, d("seconds")], m: [s, d("minutes")], mm: [s, d("minutes")], H: [s, d("hours")], h: [s, d("hours")], HH: [s, d("hours")], hh: [s, d("hours")], D: [s, d("day")], DD: [o, d("day")], Do: [a, function(_) {
      var M = l.ordinal, O = _.match(/\d+/);
      if (this.day = O[0], M)
        for (var L = 1; L <= 31; L += 1)
          M(L).replace(/\[|\]/g, "") === _ && (this.day = L);
    }], w: [s, d("week")], ww: [o, d("week")], M: [s, d("month")], MM: [o, d("month")], MMM: [a, function(_) {
      var M = b("months"), O = (b("monthsShort") || M.map(function(L) {
        return L.slice(0, 3);
      })).indexOf(_) + 1;
      if (O < 1)
        throw new Error();
      this.month = O % 12 || O;
    }], MMMM: [a, function(_) {
      var M = b("months").indexOf(_) + 1;
      if (M < 1)
        throw new Error();
      this.month = M % 12 || M;
    }], Y: [/[+-]?\d+/, d("year")], YY: [o, function(_) {
      this.year = f(_);
    }], YYYY: [/\d{4}/, d("year")], Z: v, ZZ: v };
    function m(_) {
      var M, O;
      M = _, O = l && l.formats;
      for (var L = (_ = M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(H, k, te) {
        var Q = te && te.toUpperCase();
        return k || O[te] || e[te] || O[Q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(F, N, T) {
          return N || T.slice(1);
        });
      })).match(i), I = L.length, V = 0; V < I; V += 1) {
        var A = L[V], p = D[A], w = p && p[0], Y = p && p[1];
        L[V] = Y ? { regex: w, parser: Y } : A.replace(/^\[|\]$/g, "");
      }
      return function(H) {
        for (var k = {}, te = 0, Q = 0; te < I; te += 1) {
          var F = L[te];
          if (typeof F == "string")
            Q += F.length;
          else {
            var N = F.regex, T = F.parser, j = H.slice(Q), $ = N.exec(j)[0];
            T.call(k, $), H = H.replace($, "");
          }
        }
        return function(z) {
          var ee = z.afternoon;
          if (ee !== void 0) {
            var re = z.hours;
            ee ? re < 12 && (z.hours += 12) : re === 12 && (z.hours = 0), delete z.afternoon;
          }
        }(k), k;
      };
    }
    return function(_, M, O) {
      O.p.customParseFormat = !0, _ && _.parseTwoDigitYear && (f = _.parseTwoDigitYear);
      var L = M.prototype, I = L.parse;
      L.parse = function(V) {
        var A = V.date, p = V.utc, w = V.args;
        this.$u = p;
        var Y = w[1];
        if (typeof Y == "string") {
          var H = w[2] === !0, k = w[3] === !0, te = H || k, Q = w[2];
          k && (Q = w[2]), l = this.$locale(), !H && Q && (l = O.Ls[Q]), this.$d = function(j, $, z, ee) {
            try {
              if (["x", "X"].indexOf($) > -1)
                return new Date(($ === "X" ? 1e3 : 1) * j);
              var re = m($)(j), K = re.year, P = re.month, R = re.day, U = re.hours, q = re.minutes, oe = re.seconds, de = re.milliseconds, we = re.zone, _e = re.week, Se = /* @__PURE__ */ new Date(), xe = R || (K || P ? 1 : Se.getDate()), Le = K || Se.getFullYear(), gt = 0;
              K && !P || (gt = P > 0 ? P - 1 : Se.getMonth());
              var ut, vt = U || 0, ft = q || 0, _t = oe || 0, tt = de || 0;
              return we ? new Date(Date.UTC(Le, gt, xe, vt, ft, _t, tt + 60 * we.offset * 1e3)) : z ? new Date(Date.UTC(Le, gt, xe, vt, ft, _t, tt)) : (ut = new Date(Le, gt, xe, vt, ft, _t, tt), _e && (ut = ee(ut).week(_e).toDate()), ut);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(A, Y, p, O), this.init(), Q && Q !== !0 && (this.$L = this.locale(Q).$L), te && A != this.format(Y) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (Y instanceof Array)
          for (var F = Y.length, N = 1; N <= F; N += 1) {
            w[1] = Y[N - 1];
            var T = O.apply(this, w);
            if (T.isValid()) {
              this.$d = T.$d, this.$L = T.$L, this.init();
              break;
            }
            N === F && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          I.call(this, V);
      };
    };
  });
})(cs);
var sh = cs.exports;
const lh = /* @__PURE__ */ kt(sh);
var us = { exports: {} };
(function(n, t) {
  (function(e, i) {
    n.exports = i();
  })(It, function() {
    return function(e, i) {
      i.prototype.isSameOrBefore = function(r, o) {
        return this.isSame(r, o) || this.isBefore(r, o);
      };
    };
  });
})(us);
var ch = us.exports;
const uh = /* @__PURE__ */ kt(ch);
var fs = { exports: {} };
(function(n, t) {
  (function(e, i) {
    n.exports = i();
  })(It, function() {
    return function(e, i) {
      i.prototype.isSameOrAfter = function(r, o) {
        return this.isSame(r, o) || this.isAfter(r, o);
      };
    };
  });
})(fs);
var fh = fs.exports;
const dh = /* @__PURE__ */ kt(fh);
var ds = { exports: {} };
(function(n, t) {
  (function(e, i) {
    n.exports = i();
  })(It, function() {
    var e = "minute", i = /[+-]\d\d(?::?\d\d)?/g, r = /([+-]|\d\d)/g;
    return function(o, s, a) {
      var l = s.prototype;
      a.utc = function(m) {
        var _ = { date: m, utc: !0, args: arguments };
        return new s(_);
      }, l.utc = function(m) {
        var _ = a(this.toDate(), { locale: this.$L, utc: !0 });
        return m ? _.add(this.utcOffset(), e) : _;
      }, l.local = function() {
        return a(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var f = l.parse;
      l.parse = function(m) {
        m.utc && (this.$u = !0), this.$utils().u(m.$offset) || (this.$offset = m.$offset), f.call(this, m);
      };
      var d = l.init;
      l.init = function() {
        if (this.$u) {
          var m = this.$d;
          this.$y = m.getUTCFullYear(), this.$M = m.getUTCMonth(), this.$D = m.getUTCDate(), this.$W = m.getUTCDay(), this.$H = m.getUTCHours(), this.$m = m.getUTCMinutes(), this.$s = m.getUTCSeconds(), this.$ms = m.getUTCMilliseconds();
        } else
          d.call(this);
      };
      var v = l.utcOffset;
      l.utcOffset = function(m, _) {
        var M = this.$utils().u;
        if (M(m))
          return this.$u ? 0 : M(this.$offset) ? v.call(this) : this.$offset;
        if (typeof m == "string" && (m = function(V) {
          V === void 0 && (V = "");
          var A = V.match(i);
          if (!A)
            return null;
          var p = ("" + A[0]).match(r) || ["-", 0, 0], w = p[0], Y = 60 * +p[1] + +p[2];
          return Y === 0 ? 0 : w === "+" ? Y : -Y;
        }(m), m === null))
          return this;
        var O = Math.abs(m) <= 16 ? 60 * m : m;
        if (O === 0)
          return this.utc(_);
        var L = this.clone();
        if (_)
          return L.$offset = O, L.$u = !1, L;
        var I = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return (L = this.local().add(O + I, e)).$offset = O, L.$x.$localOffset = I, L;
      };
      var b = l.format;
      l.format = function(m) {
        var _ = m || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return b.call(this, _);
      }, l.valueOf = function() {
        var m = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * m;
      }, l.isUTC = function() {
        return !!this.$u;
      }, l.toISOString = function() {
        return this.toDate().toISOString();
      }, l.toString = function() {
        return this.toDate().toUTCString();
      };
      var E = l.toDate;
      l.toDate = function(m) {
        return m === "s" && this.$offset ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : E.call(this);
      };
      var D = l.diff;
      l.diff = function(m, _, M) {
        if (m && this.$u === m.$u)
          return D.call(this, m, _, M);
        var O = this.local(), L = a(m).local();
        return D.call(O, L, _, M);
      };
    };
  });
})(ds);
var hh = ds.exports;
const ph = /* @__PURE__ */ kt(hh);
fn.extend(nh);
fn.extend(rh);
fn.extend(ah);
fn.extend(lh);
fn.extend(uh);
fn.extend(dh);
fn.extend(ph);
var hs = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(n, t) {
  (function(i, r) {
    n.exports = r();
  })(It, function() {
    return (
      /******/
      function() {
        var e = {
          /***/
          686: (
            /***/
            function(o, s, a) {
              a.d(s, {
                default: function() {
                  return (
                    /* binding */
                    re
                  );
                }
              });
              var l = a(279), f = /* @__PURE__ */ a.n(l), d = a(370), v = /* @__PURE__ */ a.n(d), b = a(817), E = /* @__PURE__ */ a.n(b);
              function D(K) {
                try {
                  return document.execCommand(K);
                } catch {
                  return !1;
                }
              }
              var m = function(P) {
                var R = E()(P);
                return D("cut"), R;
              }, _ = m;
              function M(K) {
                var P = document.documentElement.getAttribute("dir") === "rtl", R = document.createElement("textarea");
                R.style.fontSize = "12pt", R.style.border = "0", R.style.padding = "0", R.style.margin = "0", R.style.position = "absolute", R.style[P ? "right" : "left"] = "-9999px";
                var U = window.pageYOffset || document.documentElement.scrollTop;
                return R.style.top = "".concat(U, "px"), R.setAttribute("readonly", ""), R.value = K, R;
              }
              var O = function(P, R) {
                var U = M(P);
                R.container.appendChild(U);
                var q = E()(U);
                return D("copy"), U.remove(), q;
              }, L = function(P) {
                var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                  container: document.body
                }, U = "";
                return typeof P == "string" ? U = O(P, R) : P instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(P == null ? void 0 : P.type) ? U = O(P.value, R) : (U = E()(P), D("copy")), U;
              }, I = L;
              function V(K) {
                "@babel/helpers - typeof";
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? V = function(R) {
                  return typeof R;
                } : V = function(R) {
                  return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
                }, V(K);
              }
              var A = function() {
                var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, R = P.action, U = R === void 0 ? "copy" : R, q = P.container, oe = P.target, de = P.text;
                if (U !== "copy" && U !== "cut")
                  throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (oe !== void 0)
                  if (oe && V(oe) === "object" && oe.nodeType === 1) {
                    if (U === "copy" && oe.hasAttribute("disabled"))
                      throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if (U === "cut" && (oe.hasAttribute("readonly") || oe.hasAttribute("disabled")))
                      throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                  } else
                    throw new Error('Invalid "target" value, use a valid Element');
                if (de)
                  return I(de, {
                    container: q
                  });
                if (oe)
                  return U === "cut" ? _(oe) : I(oe, {
                    container: q
                  });
              }, p = A;
              function w(K) {
                "@babel/helpers - typeof";
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? w = function(R) {
                  return typeof R;
                } : w = function(R) {
                  return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
                }, w(K);
              }
              function Y(K, P) {
                if (!(K instanceof P))
                  throw new TypeError("Cannot call a class as a function");
              }
              function H(K, P) {
                for (var R = 0; R < P.length; R++) {
                  var U = P[R];
                  U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(K, U.key, U);
                }
              }
              function k(K, P, R) {
                return P && H(K.prototype, P), R && H(K, R), K;
              }
              function te(K, P) {
                if (typeof P != "function" && P !== null)
                  throw new TypeError("Super expression must either be null or a function");
                K.prototype = Object.create(P && P.prototype, { constructor: { value: K, writable: !0, configurable: !0 } }), P && Q(K, P);
              }
              function Q(K, P) {
                return Q = Object.setPrototypeOf || function(U, q) {
                  return U.__proto__ = q, U;
                }, Q(K, P);
              }
              function F(K) {
                var P = j();
                return function() {
                  var U = $(K), q;
                  if (P) {
                    var oe = $(this).constructor;
                    q = Reflect.construct(U, arguments, oe);
                  } else
                    q = U.apply(this, arguments);
                  return N(this, q);
                };
              }
              function N(K, P) {
                return P && (w(P) === "object" || typeof P == "function") ? P : T(K);
              }
              function T(K) {
                if (K === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return K;
              }
              function j() {
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
              function $(K) {
                return $ = Object.setPrototypeOf ? Object.getPrototypeOf : function(R) {
                  return R.__proto__ || Object.getPrototypeOf(R);
                }, $(K);
              }
              function z(K, P) {
                var R = "data-clipboard-".concat(K);
                if (P.hasAttribute(R))
                  return P.getAttribute(R);
              }
              var ee = /* @__PURE__ */ function(K) {
                te(R, K);
                var P = F(R);
                function R(U, q) {
                  var oe;
                  return Y(this, R), oe = P.call(this), oe.resolveOptions(q), oe.listenClick(U), oe;
                }
                return k(R, [{
                  key: "resolveOptions",
                  value: function() {
                    var q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    this.action = typeof q.action == "function" ? q.action : this.defaultAction, this.target = typeof q.target == "function" ? q.target : this.defaultTarget, this.text = typeof q.text == "function" ? q.text : this.defaultText, this.container = w(q.container) === "object" ? q.container : document.body;
                  }
                  /**
                   * Adds a click event listener to the passed trigger.
                   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                   */
                }, {
                  key: "listenClick",
                  value: function(q) {
                    var oe = this;
                    this.listener = v()(q, "click", function(de) {
                      return oe.onClick(de);
                    });
                  }
                  /**
                   * Defines a new `ClipboardAction` on each click event.
                   * @param {Event} e
                   */
                }, {
                  key: "onClick",
                  value: function(q) {
                    var oe = q.delegateTarget || q.currentTarget, de = this.action(oe) || "copy", we = p({
                      action: de,
                      container: this.container,
                      target: this.target(oe),
                      text: this.text(oe)
                    });
                    this.emit(we ? "success" : "error", {
                      action: de,
                      text: we,
                      trigger: oe,
                      clearSelection: function() {
                        oe && oe.focus(), window.getSelection().removeAllRanges();
                      }
                    });
                  }
                  /**
                   * Default `action` lookup function.
                   * @param {Element} trigger
                   */
                }, {
                  key: "defaultAction",
                  value: function(q) {
                    return z("action", q);
                  }
                  /**
                   * Default `target` lookup function.
                   * @param {Element} trigger
                   */
                }, {
                  key: "defaultTarget",
                  value: function(q) {
                    var oe = z("target", q);
                    if (oe)
                      return document.querySelector(oe);
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
                  value: function(q) {
                    return z("text", q);
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
                  value: function(q) {
                    var oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                      container: document.body
                    };
                    return I(q, oe);
                  }
                  /**
                   * Allow fire programmatically a cut action
                   * @param {String|HTMLElement} target
                   * @returns Text cutted.
                   */
                }, {
                  key: "cut",
                  value: function(q) {
                    return _(q);
                  }
                  /**
                   * Returns the support of the given action, or all actions if no action is
                   * given.
                   * @param {String} [action]
                   */
                }, {
                  key: "isSupported",
                  value: function() {
                    var q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], oe = typeof q == "string" ? [q] : q, de = !!document.queryCommandSupported;
                    return oe.forEach(function(we) {
                      de = de && !!document.queryCommandSupported(we);
                    }), de;
                  }
                }]), R;
              }(f()), re = ee;
            }
          ),
          /***/
          828: (
            /***/
            function(o) {
              var s = 9;
              if (typeof Element < "u" && !Element.prototype.matches) {
                var a = Element.prototype;
                a.matches = a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector;
              }
              function l(f, d) {
                for (; f && f.nodeType !== s; ) {
                  if (typeof f.matches == "function" && f.matches(d))
                    return f;
                  f = f.parentNode;
                }
              }
              o.exports = l;
            }
          ),
          /***/
          438: (
            /***/
            function(o, s, a) {
              var l = a(828);
              function f(b, E, D, m, _) {
                var M = v.apply(this, arguments);
                return b.addEventListener(D, M, _), {
                  destroy: function() {
                    b.removeEventListener(D, M, _);
                  }
                };
              }
              function d(b, E, D, m, _) {
                return typeof b.addEventListener == "function" ? f.apply(null, arguments) : typeof D == "function" ? f.bind(null, document).apply(null, arguments) : (typeof b == "string" && (b = document.querySelectorAll(b)), Array.prototype.map.call(b, function(M) {
                  return f(M, E, D, m, _);
                }));
              }
              function v(b, E, D, m) {
                return function(_) {
                  _.delegateTarget = l(_.target, E), _.delegateTarget && m.call(b, _);
                };
              }
              o.exports = d;
            }
          ),
          /***/
          879: (
            /***/
            function(o, s) {
              s.node = function(a) {
                return a !== void 0 && a instanceof HTMLElement && a.nodeType === 1;
              }, s.nodeList = function(a) {
                var l = Object.prototype.toString.call(a);
                return a !== void 0 && (l === "[object NodeList]" || l === "[object HTMLCollection]") && "length" in a && (a.length === 0 || s.node(a[0]));
              }, s.string = function(a) {
                return typeof a == "string" || a instanceof String;
              }, s.fn = function(a) {
                var l = Object.prototype.toString.call(a);
                return l === "[object Function]";
              };
            }
          ),
          /***/
          370: (
            /***/
            function(o, s, a) {
              var l = a(879), f = a(438);
              function d(D, m, _) {
                if (!D && !m && !_)
                  throw new Error("Missing required arguments");
                if (!l.string(m))
                  throw new TypeError("Second argument must be a String");
                if (!l.fn(_))
                  throw new TypeError("Third argument must be a Function");
                if (l.node(D))
                  return v(D, m, _);
                if (l.nodeList(D))
                  return b(D, m, _);
                if (l.string(D))
                  return E(D, m, _);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
              }
              function v(D, m, _) {
                return D.addEventListener(m, _), {
                  destroy: function() {
                    D.removeEventListener(m, _);
                  }
                };
              }
              function b(D, m, _) {
                return Array.prototype.forEach.call(D, function(M) {
                  M.addEventListener(m, _);
                }), {
                  destroy: function() {
                    Array.prototype.forEach.call(D, function(M) {
                      M.removeEventListener(m, _);
                    });
                  }
                };
              }
              function E(D, m, _) {
                return f(document.body, D, m, _);
              }
              o.exports = d;
            }
          ),
          /***/
          817: (
            /***/
            function(o) {
              function s(a) {
                var l;
                if (a.nodeName === "SELECT")
                  a.focus(), l = a.value;
                else if (a.nodeName === "INPUT" || a.nodeName === "TEXTAREA") {
                  var f = a.hasAttribute("readonly");
                  f || a.setAttribute("readonly", ""), a.select(), a.setSelectionRange(0, a.value.length), f || a.removeAttribute("readonly"), l = a.value;
                } else {
                  a.hasAttribute("contenteditable") && a.focus();
                  var d = window.getSelection(), v = document.createRange();
                  v.selectNodeContents(a), d.removeAllRanges(), d.addRange(v), l = d.toString();
                }
                return l;
              }
              o.exports = s;
            }
          ),
          /***/
          279: (
            /***/
            function(o) {
              function s() {
              }
              s.prototype = {
                on: function(a, l, f) {
                  var d = this.e || (this.e = {});
                  return (d[a] || (d[a] = [])).push({
                    fn: l,
                    ctx: f
                  }), this;
                },
                once: function(a, l, f) {
                  var d = this;
                  function v() {
                    d.off(a, v), l.apply(f, arguments);
                  }
                  return v._ = l, this.on(a, v, f);
                },
                emit: function(a) {
                  var l = [].slice.call(arguments, 1), f = ((this.e || (this.e = {}))[a] || []).slice(), d = 0, v = f.length;
                  for (d; d < v; d++)
                    f[d].fn.apply(f[d].ctx, l);
                  return this;
                },
                off: function(a, l) {
                  var f = this.e || (this.e = {}), d = f[a], v = [];
                  if (d && l)
                    for (var b = 0, E = d.length; b < E; b++)
                      d[b].fn !== l && d[b].fn._ !== l && v.push(d[b]);
                  return v.length ? f[a] = v : delete f[a], this;
                }
              }, o.exports = s, o.exports.TinyEmitter = s;
            }
          )
          /******/
        }, i = {};
        function r(o) {
          if (i[o])
            return i[o].exports;
          var s = i[o] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return e[o](s, s.exports, r), s.exports;
        }
        return function() {
          r.n = function(o) {
            var s = o && o.__esModule ? (
              /******/
              function() {
                return o.default;
              }
            ) : (
              /******/
              function() {
                return o;
              }
            );
            return r.d(s, { a: s }), s;
          };
        }(), function() {
          r.d = function(o, s) {
            for (var a in s)
              r.o(s, a) && !r.o(o, a) && Object.defineProperty(o, a, { enumerable: !0, get: s[a] });
          };
        }(), function() {
          r.o = function(o, s) {
            return Object.prototype.hasOwnProperty.call(o, s);
          };
        }(), r(686);
      }().default
    );
  });
})(hs);
var mh = hs.exports;
const tp = /* @__PURE__ */ kt(mh);
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function gh(n, t, e) {
  return (t = yh(t)) in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function $t() {
  return $t = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var i in e)
        ({}).hasOwnProperty.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }, $t.apply(null, arguments);
}
function Wo(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    t && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function Tt(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wo(Object(e), !0).forEach(function(i) {
      gh(n, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Wo(Object(e)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return n;
}
function vh(n, t) {
  if (n == null)
    return {};
  var e, i, r = _h(n, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (i = 0; i < o.length; i++)
      e = o[i], t.indexOf(e) === -1 && {}.propertyIsEnumerable.call(n, e) && (r[e] = n[e]);
  }
  return r;
}
function _h(n, t) {
  if (n == null)
    return {};
  var e = {};
  for (var i in n)
    if ({}.hasOwnProperty.call(n, i)) {
      if (t.indexOf(i) !== -1)
        continue;
      e[i] = n[i];
    }
  return e;
}
function bh(n, t) {
  if (typeof n != "object" || !n)
    return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(n, t || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function yh(n) {
  var t = bh(n, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Mr(n) {
  "@babel/helpers - typeof";
  return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mr(n);
}
var Eh = "1.15.7";
function Ot(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var Pt = Ot(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), li = Ot(/Edge/i), Bo = Ot(/firefox/i), zn = Ot(/safari/i) && !Ot(/chrome/i) && !Ot(/android/i), Zr = Ot(/iP(ad|od|hone)/i), ps = Ot(/chrome/i) && Ot(/android/i), ms = {
  capture: !1,
  passive: !1
};
function me(n, t, e) {
  n.addEventListener(t, e, !Pt && ms);
}
function pe(n, t, e) {
  n.removeEventListener(t, e, !Pt && ms);
}
function Ii(n, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), n)
      try {
        if (n.matches)
          return n.matches(t);
        if (n.msMatchesSelector)
          return n.msMatchesSelector(t);
        if (n.webkitMatchesSelector)
          return n.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function gs(n) {
  return n.host && n !== document && n.host.nodeType && n.host !== n ? n.host : n.parentNode;
}
function ht(n, t, e, i) {
  if (n) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? n.parentNode === e && Ii(n, t) : Ii(n, t)) || i && n === e)
        return n;
      if (n === e)
        break;
    } while (n = gs(n));
  }
  return null;
}
var Vo = /\s+/g;
function qe(n, t, e) {
  if (n && t)
    if (n.classList)
      n.classList[e ? "add" : "remove"](t);
    else {
      var i = (" " + n.className + " ").replace(Vo, " ").replace(" " + t + " ", " ");
      n.className = (i + (e ? " " + t : "")).replace(Vo, " ");
    }
}
function se(n, t, e) {
  var i = n && n.style;
  if (i) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (e = n.currentStyle), t === void 0 ? e : e[t];
    !(t in i) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), i[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function Cn(n, t) {
  var e = "";
  if (typeof n == "string")
    e = n;
  else
    do {
      var i = se(n, "transform");
      i && i !== "none" && (e = i + " " + e);
    } while (!t && (n = n.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(e);
}
function vs(n, t, e) {
  if (n) {
    var i = n.getElementsByTagName(t), r = 0, o = i.length;
    if (e)
      for (; r < o; r++)
        e(i[r], r);
    return i;
  }
  return [];
}
function wt() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function Me(n, t, e, i, r) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var o, s, a, l, f, d, v;
    if (n !== window && n.parentNode && n !== wt() ? (o = n.getBoundingClientRect(), s = o.top, a = o.left, l = o.bottom, f = o.right, d = o.height, v = o.width) : (s = 0, a = 0, l = window.innerHeight, f = window.innerWidth, d = window.innerHeight, v = window.innerWidth), (t || e) && n !== window && (r = r || n.parentNode, !Pt))
      do
        if (r && r.getBoundingClientRect && (se(r, "transform") !== "none" || e && se(r, "position") !== "static")) {
          var b = r.getBoundingClientRect();
          s -= b.top + parseInt(se(r, "border-top-width")), a -= b.left + parseInt(se(r, "border-left-width")), l = s + o.height, f = a + o.width;
          break;
        }
      while (r = r.parentNode);
    if (i && n !== window) {
      var E = Cn(r || n), D = E && E.a, m = E && E.d;
      E && (s /= m, a /= D, v /= D, d /= m, l = s + d, f = a + v);
    }
    return {
      top: s,
      left: a,
      bottom: l,
      right: f,
      width: v,
      height: d
    };
  }
}
function Ko(n, t, e) {
  for (var i = Bt(n, !0), r = Me(n)[t]; i; ) {
    var o = Me(i)[e], s = void 0;
    if (e === "top" || e === "left" ? s = r >= o : s = r <= o, !s)
      return i;
    if (i === wt())
      break;
    i = Bt(i, !1);
  }
  return !1;
}
function In(n, t, e, i) {
  for (var r = 0, o = 0, s = n.children; o < s.length; ) {
    if (s[o].style.display !== "none" && s[o] !== ce.ghost && (i || s[o] !== ce.dragged) && ht(s[o], e.draggable, n, !1)) {
      if (r === t)
        return s[o];
      r++;
    }
    o++;
  }
  return null;
}
function Jr(n, t) {
  for (var e = n.lastElementChild; e && (e === ce.ghost || se(e, "display") === "none" || t && !Ii(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function ot(n, t) {
  var e = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== ce.clone && (!t || Ii(n, t)) && e++;
  return e;
}
function Uo(n) {
  var t = 0, e = 0, i = wt();
  if (n)
    do {
      var r = Cn(n), o = r.a, s = r.d;
      t += n.scrollLeft * o, e += n.scrollTop * s;
    } while (n !== i && (n = n.parentNode));
  return [t, e];
}
function wh(n, t) {
  for (var e in n)
    if (n.hasOwnProperty(e)) {
      for (var i in t)
        if (t.hasOwnProperty(i) && t[i] === n[e][i])
          return Number(e);
    }
  return -1;
}
function Bt(n, t) {
  if (!n || !n.getBoundingClientRect)
    return wt();
  var e = n, i = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var r = se(e);
      if (e.clientWidth < e.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body)
          return wt();
        if (i || t)
          return e;
        i = !0;
      }
    }
  while (e = e.parentNode);
  return wt();
}
function Dh(n, t) {
  if (n && t)
    for (var e in t)
      t.hasOwnProperty(e) && (n[e] = t[e]);
  return n;
}
function sr(n, t) {
  return Math.round(n.top) === Math.round(t.top) && Math.round(n.left) === Math.round(t.left) && Math.round(n.height) === Math.round(t.height) && Math.round(n.width) === Math.round(t.width);
}
var Gn;
function _s(n, t) {
  return function() {
    if (!Gn) {
      var e = arguments, i = this;
      e.length === 1 ? n.call(i, e[0]) : n.apply(i, e), Gn = setTimeout(function() {
        Gn = void 0;
      }, t);
    }
  };
}
function Th() {
  clearTimeout(Gn), Gn = void 0;
}
function bs(n, t, e) {
  n.scrollLeft += t, n.scrollTop += e;
}
function ys(n) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(n).cloneNode(!0) : e ? e(n).clone(!0)[0] : n.cloneNode(!0);
}
function Es(n, t, e) {
  var i = {};
  return Array.from(n.children).forEach(function(r) {
    var o, s, a, l;
    if (!(!ht(r, t.draggable, n, !1) || r.animated || r === e)) {
      var f = Me(r);
      i.left = Math.min((o = i.left) !== null && o !== void 0 ? o : 1 / 0, f.left), i.top = Math.min((s = i.top) !== null && s !== void 0 ? s : 1 / 0, f.top), i.right = Math.max((a = i.right) !== null && a !== void 0 ? a : -1 / 0, f.right), i.bottom = Math.max((l = i.bottom) !== null && l !== void 0 ? l : -1 / 0, f.bottom);
    }
  }), i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
var Ue = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Ch() {
  var n = [], t;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(r) {
          if (!(se(r, "display") === "none" || r === ce.ghost)) {
            n.push({
              target: r,
              rect: Me(r)
            });
            var o = Tt({}, n[n.length - 1].rect);
            if (r.thisAnimationDuration) {
              var s = Cn(r, !0);
              s && (o.top -= s.f, o.left -= s.e);
            }
            r.fromRect = o;
          }
        });
      }
    },
    addAnimationState: function(i) {
      n.push(i);
    },
    removeAnimationState: function(i) {
      n.splice(wh(n, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof i == "function" && i();
        return;
      }
      var o = !1, s = 0;
      n.forEach(function(a) {
        var l = 0, f = a.target, d = f.fromRect, v = Me(f), b = f.prevFromRect, E = f.prevToRect, D = a.rect, m = Cn(f, !0);
        m && (v.top -= m.f, v.left -= m.e), f.toRect = v, f.thisAnimationDuration && sr(b, v) && !sr(d, v) && // Make sure animatingRect is on line between toRect & fromRect
        (D.top - v.top) / (D.left - v.left) === (d.top - v.top) / (d.left - v.left) && (l = Sh(D, b, E, r.options)), sr(v, d) || (f.prevFromRect = d, f.prevToRect = v, l || (l = r.options.animation), r.animate(f, D, v, l)), l && (o = !0, s = Math.max(s, l), clearTimeout(f.animationResetTimer), f.animationResetTimer = setTimeout(function() {
          f.animationTime = 0, f.prevFromRect = null, f.fromRect = null, f.prevToRect = null, f.thisAnimationDuration = null;
        }, l), f.thisAnimationDuration = l);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof i == "function" && i();
      }, s) : typeof i == "function" && i(), n = [];
    },
    animate: function(i, r, o, s) {
      if (s) {
        se(i, "transition", ""), se(i, "transform", "");
        var a = Cn(this.el), l = a && a.a, f = a && a.d, d = (r.left - o.left) / (l || 1), v = (r.top - o.top) / (f || 1);
        i.animatingX = !!d, i.animatingY = !!v, se(i, "transform", "translate3d(" + d + "px," + v + "px,0)"), this.forRepaintDummy = Ah(i), se(i, "transition", "transform " + s + "ms" + (this.options.easing ? " " + this.options.easing : "")), se(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          se(i, "transition", ""), se(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, s);
      }
    }
  };
}
function Ah(n) {
  return n.offsetWidth;
}
function Sh(n, t, e, i) {
  return Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * i.animation;
}
var vn = [], lr = {
  initializeByDefault: !0
}, ci = {
  mount: function(t) {
    for (var e in lr)
      lr.hasOwnProperty(e) && !(e in t) && (t[e] = lr[e]);
    vn.forEach(function(i) {
      if (i.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), vn.push(t);
  },
  pluginEvent: function(t, e, i) {
    var r = this;
    this.eventCanceled = !1, i.cancel = function() {
      r.eventCanceled = !0;
    };
    var o = t + "Global";
    vn.forEach(function(s) {
      e[s.pluginName] && (e[s.pluginName][o] && e[s.pluginName][o](Tt({
        sortable: e
      }, i)), e.options[s.pluginName] && e[s.pluginName][t] && e[s.pluginName][t](Tt({
        sortable: e
      }, i)));
    });
  },
  initializePlugins: function(t, e, i, r) {
    vn.forEach(function(a) {
      var l = a.pluginName;
      if (!(!t.options[l] && !a.initializeByDefault)) {
        var f = new a(t, e, t.options);
        f.sortable = t, f.options = t.options, t[l] = f, $t(i, f.defaults);
      }
    });
    for (var o in t.options)
      if (t.options.hasOwnProperty(o)) {
        var s = this.modifyOption(t, o, t.options[o]);
        typeof s < "u" && (t.options[o] = s);
      }
  },
  getEventProperties: function(t, e) {
    var i = {};
    return vn.forEach(function(r) {
      typeof r.eventProperties == "function" && $t(i, r.eventProperties.call(e[r.pluginName], t));
    }), i;
  },
  modifyOption: function(t, e, i) {
    var r;
    return vn.forEach(function(o) {
      t[o.pluginName] && o.optionListeners && typeof o.optionListeners[e] == "function" && (r = o.optionListeners[e].call(t[o.pluginName], i));
    }), r;
  }
};
function Oh(n) {
  var t = n.sortable, e = n.rootEl, i = n.name, r = n.targetEl, o = n.cloneEl, s = n.toEl, a = n.fromEl, l = n.oldIndex, f = n.newIndex, d = n.oldDraggableIndex, v = n.newDraggableIndex, b = n.originalEvent, E = n.putSortable, D = n.extraEventProperties;
  if (t = t || e && e[Ue], !!t) {
    var m, _ = t.options, M = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !Pt && !li ? m = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (m = document.createEvent("Event"), m.initEvent(i, !0, !0)), m.to = s || e, m.from = a || e, m.item = r || e, m.clone = o, m.oldIndex = l, m.newIndex = f, m.oldDraggableIndex = d, m.newDraggableIndex = v, m.originalEvent = b, m.pullMode = E ? E.lastPutMode : void 0;
    var O = Tt(Tt({}, D), ci.getEventProperties(i, t));
    for (var L in O)
      m[L] = O[L];
    e && e.dispatchEvent(m), _[M] && _[M].call(t, m);
  }
}
var Mh = ["evt"], Be = function(t, e) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = i.evt, o = vh(i, Mh);
  ci.pluginEvent.bind(ce)(t, e, Tt({
    dragEl: B,
    parentEl: Ae,
    ghostEl: ue,
    rootEl: De,
    nextEl: Zt,
    lastDownEl: Ai,
    cloneEl: Ce,
    cloneHidden: Wt,
    dragStarted: Wn,
    putSortable: Pe,
    activeSortable: ce.active,
    originalEvent: r,
    oldIndex: Tn,
    oldDraggableIndex: qn,
    newIndex: Qe,
    newDraggableIndex: jt,
    hideGhostForTarget: Cs,
    unhideGhostForTarget: As,
    cloneNowHidden: function() {
      Wt = !0;
    },
    cloneNowShown: function() {
      Wt = !1;
    },
    dispatchSortableEvent: function(a) {
      Fe({
        sortable: e,
        name: a,
        originalEvent: r
      });
    }
  }, o));
};
function Fe(n) {
  Oh(Tt({
    putSortable: Pe,
    cloneEl: Ce,
    targetEl: B,
    rootEl: De,
    oldIndex: Tn,
    oldDraggableIndex: qn,
    newIndex: Qe,
    newDraggableIndex: jt
  }, n));
}
var B, Ae, ue, De, Zt, Ai, Ce, Wt, Tn, Qe, qn, jt, vi, Pe, wn = !1, ki = !1, Pi = [], Xt, dt, cr, ur, zo, Go, Wn, _n, Xn, Qn = !1, _i = !1, Si, Re, fr = [], xr = !1, Ri = [], Vi = typeof document < "u", bi = Zr, qo = li || Pt ? "cssFloat" : "float", xh = Vi && !ps && !Zr && "draggable" in document.createElement("div"), ws = function() {
  if (Vi) {
    if (Pt)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
}(), Ds = function(t, e) {
  var i = se(t), r = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), o = In(t, 0, e), s = In(t, 1, e), a = o && se(o), l = s && se(s), f = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + Me(o).width, d = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Me(s).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && a.float && a.float !== "none") {
    var v = a.float === "left" ? "left" : "right";
    return s && (l.clear === "both" || l.clear === v) ? "vertical" : "horizontal";
  }
  return o && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || f >= r && i[qo] === "none" || s && i[qo] === "none" && f + d > r) ? "vertical" : "horizontal";
}, Nh = function(t, e, i) {
  var r = i ? t.left : t.top, o = i ? t.right : t.bottom, s = i ? t.width : t.height, a = i ? e.left : e.top, l = i ? e.right : e.bottom, f = i ? e.width : e.height;
  return r === a || o === l || r + s / 2 === a + f / 2;
}, $h = function(t, e) {
  var i;
  return Pi.some(function(r) {
    var o = r[Ue].options.emptyInsertThreshold;
    if (!(!o || Jr(r))) {
      var s = Me(r), a = t >= s.left - o && t <= s.right + o, l = e >= s.top - o && e <= s.bottom + o;
      if (a && l)
        return i = r;
    }
  }), i;
}, Ts = function(t) {
  function e(o, s) {
    return function(a, l, f, d) {
      var v = a.options.group.name && l.options.group.name && a.options.group.name === l.options.group.name;
      if (o == null && (s || v))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (s && o === "clone")
        return o;
      if (typeof o == "function")
        return e(o(a, l, f, d), s)(a, l, f, d);
      var b = (s ? a : l).options.group.name;
      return o === !0 || typeof o == "string" && o === b || o.join && o.indexOf(b) > -1;
    };
  }
  var i = {}, r = t.group;
  (!r || Mr(r) != "object") && (r = {
    name: r
  }), i.name = r.name, i.checkPull = e(r.pull, !0), i.checkPut = e(r.put), i.revertClone = r.revertClone, t.group = i;
}, Cs = function() {
  !ws && ue && se(ue, "display", "none");
}, As = function() {
  !ws && ue && se(ue, "display", "");
};
Vi && !ps && document.addEventListener("click", function(n) {
  if (ki)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), ki = !1, !1;
}, !0);
var Qt = function(t) {
  if (B) {
    t = t.touches ? t.touches[0] : t;
    var e = $h(t.clientX, t.clientY);
    if (e) {
      var i = {};
      for (var r in t)
        t.hasOwnProperty(r) && (i[r] = t[r]);
      i.target = i.rootEl = e, i.preventDefault = void 0, i.stopPropagation = void 0, e[Ue]._onDragOver(i);
    }
  }
}, Lh = function(t) {
  B && B.parentNode[Ue]._isOutsideThisEl(t.target);
};
function ce(n, t) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = t = $t({}, t), n[Ue] = this;
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Ds(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(s, a) {
      s.setData("Text", a.textContent);
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
    supportPointer: ce.supportPointer !== !1 && "PointerEvent" in window && (!zn || Zr),
    emptyInsertThreshold: 5
  };
  ci.initializePlugins(this, n, e);
  for (var i in e)
    !(i in t) && (t[i] = e[i]);
  Ts(t);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : xh, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? me(n, "pointerdown", this._onTapStart) : (me(n, "mousedown", this._onTapStart), me(n, "touchstart", this._onTapStart)), this.nativeDraggable && (me(n, "dragover", this), me(n, "dragenter", this)), Pi.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), $t(this, Ch());
}
ce.prototype = /** @lends Sortable.prototype */
{
  constructor: ce,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (_n = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, B) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var e = this, i = this.el, r = this.options, o = r.preventOnFilter, s = t.type, a = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, l = (a || t).target, f = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l, d = r.filter;
      if (jh(i), !B && !(/mousedown|pointerdown/.test(s) && t.button !== 0 || r.disabled) && !f.isContentEditable && !(!this.nativeDraggable && zn && l && l.tagName.toUpperCase() === "SELECT") && (l = ht(l, r.draggable, i, !1), !(l && l.animated) && Ai !== l)) {
        if (Tn = ot(l), qn = ot(l, r.draggable), typeof d == "function") {
          if (d.call(this, t, l, this)) {
            Fe({
              sortable: e,
              rootEl: f,
              name: "filter",
              targetEl: l,
              toEl: i,
              fromEl: i
            }), Be("filter", e, {
              evt: t
            }), o && t.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(v) {
          if (v = ht(f, v.trim(), i, !1), v)
            return Fe({
              sortable: e,
              rootEl: v,
              name: "filter",
              targetEl: l,
              fromEl: i,
              toEl: i
            }), Be("filter", e, {
              evt: t
            }), !0;
        }), d)) {
          o && t.preventDefault();
          return;
        }
        r.handle && !ht(f, r.handle, i, !1) || this._prepareDragStart(t, a, l);
      }
    }
  },
  _prepareDragStart: function(t, e, i) {
    var r = this, o = r.el, s = r.options, a = o.ownerDocument, l;
    if (i && !B && i.parentNode === o) {
      var f = Me(i);
      if (De = o, B = i, Ae = B.parentNode, Zt = B.nextSibling, Ai = i, vi = s.group, ce.dragged = B, Xt = {
        target: B,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, zo = Xt.clientX - f.left, Go = Xt.clientY - f.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, B.style["will-change"] = "all", l = function() {
        if (Be("delayEnded", r, {
          evt: t
        }), ce.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !Bo && r.nativeDraggable && (B.draggable = !0), r._triggerDragStart(t, e), Fe({
          sortable: r,
          name: "choose",
          originalEvent: t
        }), qe(B, s.chosenClass, !0);
      }, s.ignore.split(",").forEach(function(d) {
        vs(B, d.trim(), dr);
      }), me(a, "dragover", Qt), me(a, "mousemove", Qt), me(a, "touchmove", Qt), s.supportPointer ? (me(a, "pointerup", r._onDrop), !this.nativeDraggable && me(a, "pointercancel", r._onDrop)) : (me(a, "mouseup", r._onDrop), me(a, "touchend", r._onDrop), me(a, "touchcancel", r._onDrop)), Bo && this.nativeDraggable && (this.options.touchStartThreshold = 4, B.draggable = !0), Be("delayStart", this, {
        evt: t
      }), s.delay && (!s.delayOnTouchOnly || e) && (!this.nativeDraggable || !(li || Pt))) {
        if (ce.eventCanceled) {
          this._onDrop();
          return;
        }
        s.supportPointer ? (me(a, "pointerup", r._disableDelayedDrag), me(a, "pointercancel", r._disableDelayedDrag)) : (me(a, "mouseup", r._disableDelayedDrag), me(a, "touchend", r._disableDelayedDrag), me(a, "touchcancel", r._disableDelayedDrag)), me(a, "mousemove", r._delayedDragTouchMoveHandler), me(a, "touchmove", r._delayedDragTouchMoveHandler), s.supportPointer && me(a, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(l, s.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    B && dr(B), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    pe(t, "mouseup", this._disableDelayedDrag), pe(t, "touchend", this._disableDelayedDrag), pe(t, "touchcancel", this._disableDelayedDrag), pe(t, "pointerup", this._disableDelayedDrag), pe(t, "pointercancel", this._disableDelayedDrag), pe(t, "mousemove", this._delayedDragTouchMoveHandler), pe(t, "touchmove", this._delayedDragTouchMoveHandler), pe(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? me(document, "pointermove", this._onTouchMove) : e ? me(document, "touchmove", this._onTouchMove) : me(document, "mousemove", this._onTouchMove) : (me(B, "dragend", this), me(De, "dragstart", this._onDragStart));
    try {
      document.selection ? Oi(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (wn = !1, De && B) {
      Be("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && me(document, "dragover", Lh);
      var i = this.options;
      !t && qe(B, i.dragClass, !1), qe(B, i.ghostClass, !0), ce.active = this, t && this._appendGhost(), Fe({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (dt) {
      this._lastX = dt.clientX, this._lastY = dt.clientY, Cs();
      for (var t = document.elementFromPoint(dt.clientX, dt.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(dt.clientX, dt.clientY), t !== e); )
        e = t;
      if (B.parentNode[Ue]._isOutsideThisEl(t), e)
        do {
          if (e[Ue]) {
            var i = void 0;
            if (i = e[Ue]._onDragOver({
              clientX: dt.clientX,
              clientY: dt.clientY,
              target: t,
              rootEl: e
            }), i && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = gs(e));
      As();
    }
  },
  _onTouchMove: function(t) {
    if (Xt) {
      var e = this.options, i = e.fallbackTolerance, r = e.fallbackOffset, o = t.touches ? t.touches[0] : t, s = ue && Cn(ue, !0), a = ue && s && s.a, l = ue && s && s.d, f = bi && Re && Uo(Re), d = (o.clientX - Xt.clientX + r.x) / (a || 1) + (f ? f[0] - fr[0] : 0) / (a || 1), v = (o.clientY - Xt.clientY + r.y) / (l || 1) + (f ? f[1] - fr[1] : 0) / (l || 1);
      if (!ce.active && !wn) {
        if (i && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < i)
          return;
        this._onDragStart(t, !0);
      }
      if (ue) {
        s ? (s.e += d - (cr || 0), s.f += v - (ur || 0)) : s = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: v
        };
        var b = "matrix(".concat(s.a, ",").concat(s.b, ",").concat(s.c, ",").concat(s.d, ",").concat(s.e, ",").concat(s.f, ")");
        se(ue, "webkitTransform", b), se(ue, "mozTransform", b), se(ue, "msTransform", b), se(ue, "transform", b), cr = d, ur = v, dt = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ue) {
      var t = this.options.fallbackOnBody ? document.body : De, e = Me(B, !0, bi, !0, t), i = this.options;
      if (bi) {
        for (Re = t; se(Re, "position") === "static" && se(Re, "transform") === "none" && Re !== document; )
          Re = Re.parentNode;
        Re !== document.body && Re !== document.documentElement ? (Re === document && (Re = wt()), e.top += Re.scrollTop, e.left += Re.scrollLeft) : Re = wt(), fr = Uo(Re);
      }
      ue = B.cloneNode(!0), qe(ue, i.ghostClass, !1), qe(ue, i.fallbackClass, !0), qe(ue, i.dragClass, !0), se(ue, "transition", ""), se(ue, "transform", ""), se(ue, "box-sizing", "border-box"), se(ue, "margin", 0), se(ue, "top", e.top), se(ue, "left", e.left), se(ue, "width", e.width), se(ue, "height", e.height), se(ue, "opacity", "0.8"), se(ue, "position", bi ? "absolute" : "fixed"), se(ue, "zIndex", "100000"), se(ue, "pointerEvents", "none"), ce.ghost = ue, t.appendChild(ue), se(ue, "transform-origin", zo / parseInt(ue.style.width) * 100 + "% " + Go / parseInt(ue.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var i = this, r = t.dataTransfer, o = i.options;
    if (Be("dragStart", this, {
      evt: t
    }), ce.eventCanceled) {
      this._onDrop();
      return;
    }
    Be("setupClone", this), ce.eventCanceled || (Ce = ys(B), Ce.removeAttribute("id"), Ce.draggable = !1, Ce.style["will-change"] = "", this._hideClone(), qe(Ce, this.options.chosenClass, !1), ce.clone = Ce), i.cloneId = Oi(function() {
      Be("clone", i), !ce.eventCanceled && (i.options.removeCloneOnHide || De.insertBefore(Ce, B), i._hideClone(), Fe({
        sortable: i,
        name: "clone"
      }));
    }), !e && qe(B, o.dragClass, !0), e ? (ki = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (pe(document, "mouseup", i._onDrop), pe(document, "touchend", i._onDrop), pe(document, "touchcancel", i._onDrop), r && (r.effectAllowed = "move", o.setData && o.setData.call(i, r, B)), me(document, "drop", i), se(B, "transform", "translateZ(0)")), wn = !0, i._dragStartId = Oi(i._dragStarted.bind(i, e, t)), me(document, "selectstart", i), Wn = !0, window.getSelection().removeAllRanges(), zn && se(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var e = this.el, i = t.target, r, o, s, a = this.options, l = a.group, f = ce.active, d = vi === l, v = a.sort, b = Pe || f, E, D = this, m = !1;
    if (xr)
      return;
    function _($, z) {
      Be($, D, Tt({
        evt: t,
        isOwner: d,
        axis: E ? "vertical" : "horizontal",
        revert: s,
        dragRect: r,
        targetRect: o,
        canSort: v,
        fromSortable: b,
        target: i,
        completed: O,
        onMove: function(re, K) {
          return yi(De, e, B, r, re, Me(re), t, K);
        },
        changed: L
      }, z));
    }
    function M() {
      _("dragOverAnimationCapture"), D.captureAnimationState(), D !== b && b.captureAnimationState();
    }
    function O($) {
      return _("dragOverCompleted", {
        insertion: $
      }), $ && (d ? f._hideClone() : f._showClone(D), D !== b && (qe(B, Pe ? Pe.options.ghostClass : f.options.ghostClass, !1), qe(B, a.ghostClass, !0)), Pe !== D && D !== ce.active ? Pe = D : D === ce.active && Pe && (Pe = null), b === D && (D._ignoreWhileAnimating = i), D.animateAll(function() {
        _("dragOverAnimationComplete"), D._ignoreWhileAnimating = null;
      }), D !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (i === B && !B.animated || i === e && !i.animated) && (_n = null), !a.dragoverBubble && !t.rootEl && i !== document && (B.parentNode[Ue]._isOutsideThisEl(t.target), !$ && Qt(t)), !a.dragoverBubble && t.stopPropagation && t.stopPropagation(), m = !0;
    }
    function L() {
      Qe = ot(B), jt = ot(B, a.draggable), Fe({
        sortable: D,
        name: "change",
        toEl: e,
        newIndex: Qe,
        newDraggableIndex: jt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), i = ht(i, a.draggable, e, !0), _("dragOver"), ce.eventCanceled)
      return m;
    if (B.contains(t.target) || i.animated && i.animatingX && i.animatingY || D._ignoreWhileAnimating === i)
      return O(!1);
    if (ki = !1, f && !a.disabled && (d ? v || (s = Ae !== De) : Pe === this || (this.lastPutMode = vi.checkPull(this, f, B, t)) && l.checkPut(this, f, B, t))) {
      if (E = this._getDirection(t, i) === "vertical", r = Me(B), _("dragOverValid"), ce.eventCanceled)
        return m;
      if (s)
        return Ae = De, M(), this._hideClone(), _("revert"), ce.eventCanceled || (Zt ? De.insertBefore(B, Zt) : De.appendChild(B)), O(!0);
      var I = Jr(e, a.draggable);
      if (!I || Rh(t, E, this) && !I.animated) {
        if (I === B)
          return O(!1);
        if (I && e === t.target && (i = I), i && (o = Me(i)), yi(De, e, B, r, i, o, t, !!i) !== !1)
          return M(), I && I.nextSibling ? e.insertBefore(B, I.nextSibling) : e.appendChild(B), Ae = e, L(), O(!0);
      } else if (I && Ph(t, E, this)) {
        var V = In(e, 0, a, !0);
        if (V === B)
          return O(!1);
        if (i = V, o = Me(i), yi(De, e, B, r, i, o, t, !1) !== !1)
          return M(), e.insertBefore(B, V), Ae = e, L(), O(!0);
      } else if (i.parentNode === e) {
        o = Me(i);
        var A = 0, p, w = B.parentNode !== e, Y = !Nh(B.animated && B.toRect || r, i.animated && i.toRect || o, E), H = E ? "top" : "left", k = Ko(i, "top", "top") || Ko(B, "top", "top"), te = k ? k.scrollTop : void 0;
        _n !== i && (p = o[H], Qn = !1, _i = !Y && a.invertSwap || w), A = Yh(t, i, o, E, Y ? 1 : a.swapThreshold, a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold, _i, _n === i);
        var Q;
        if (A !== 0) {
          var F = ot(B);
          do
            F -= A, Q = Ae.children[F];
          while (Q && (se(Q, "display") === "none" || Q === ue));
        }
        if (A === 0 || Q === i)
          return O(!1);
        _n = i, Xn = A;
        var N = i.nextElementSibling, T = !1;
        T = A === 1;
        var j = yi(De, e, B, r, i, o, t, T);
        if (j !== !1)
          return (j === 1 || j === -1) && (T = j === 1), xr = !0, setTimeout(kh, 30), M(), T && !N ? e.appendChild(B) : i.parentNode.insertBefore(B, T ? N : i), k && bs(k, 0, te - k.scrollTop), Ae = B.parentNode, p !== void 0 && !_i && (Si = Math.abs(p - Me(i)[H])), L(), O(!0);
      }
      if (e.contains(B))
        return O(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    pe(document, "mousemove", this._onTouchMove), pe(document, "touchmove", this._onTouchMove), pe(document, "pointermove", this._onTouchMove), pe(document, "dragover", Qt), pe(document, "mousemove", Qt), pe(document, "touchmove", Qt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    pe(t, "mouseup", this._onDrop), pe(t, "touchend", this._onDrop), pe(t, "pointerup", this._onDrop), pe(t, "pointercancel", this._onDrop), pe(t, "touchcancel", this._onDrop), pe(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, i = this.options;
    if (Qe = ot(B), jt = ot(B, i.draggable), Be("drop", this, {
      evt: t
    }), Ae = B && B.parentNode, Qe = ot(B), jt = ot(B, i.draggable), ce.eventCanceled) {
      this._nulling();
      return;
    }
    wn = !1, _i = !1, Qn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Nr(this.cloneId), Nr(this._dragStartId), this.nativeDraggable && (pe(document, "drop", this), pe(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), zn && se(document.body, "user-select", ""), se(B, "transform", ""), t && (Wn && (t.cancelable && t.preventDefault(), !i.dropBubble && t.stopPropagation()), ue && ue.parentNode && ue.parentNode.removeChild(ue), (De === Ae || Pe && Pe.lastPutMode !== "clone") && Ce && Ce.parentNode && Ce.parentNode.removeChild(Ce), B && (this.nativeDraggable && pe(B, "dragend", this), dr(B), B.style["will-change"] = "", Wn && !wn && qe(B, Pe ? Pe.options.ghostClass : this.options.ghostClass, !1), qe(B, this.options.chosenClass, !1), Fe({
      sortable: this,
      name: "unchoose",
      toEl: Ae,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), De !== Ae ? (Qe >= 0 && (Fe({
      rootEl: Ae,
      name: "add",
      toEl: Ae,
      fromEl: De,
      originalEvent: t
    }), Fe({
      sortable: this,
      name: "remove",
      toEl: Ae,
      originalEvent: t
    }), Fe({
      rootEl: Ae,
      name: "sort",
      toEl: Ae,
      fromEl: De,
      originalEvent: t
    }), Fe({
      sortable: this,
      name: "sort",
      toEl: Ae,
      originalEvent: t
    })), Pe && Pe.save()) : Qe !== Tn && Qe >= 0 && (Fe({
      sortable: this,
      name: "update",
      toEl: Ae,
      originalEvent: t
    }), Fe({
      sortable: this,
      name: "sort",
      toEl: Ae,
      originalEvent: t
    })), ce.active && ((Qe == null || Qe === -1) && (Qe = Tn, jt = qn), Fe({
      sortable: this,
      name: "end",
      toEl: Ae,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Be("nulling", this), De = B = Ae = ue = Zt = Ce = Ai = Wt = Xt = dt = Wn = Qe = jt = Tn = qn = _n = Xn = Pe = vi = ce.dragged = ce.ghost = ce.clone = ce.active = null;
    var t = this.el;
    Ri.forEach(function(e) {
      t.contains(e) && (e.checked = !0);
    }), Ri.length = cr = ur = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        B && (this._onDragOver(t), Ih(t));
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
    for (var t = [], e, i = this.el.children, r = 0, o = i.length, s = this.options; r < o; r++)
      e = i[r], ht(e, s.draggable, this.el, !1) && t.push(e.getAttribute(s.dataIdAttr) || Fh(e));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, e) {
    var i = {}, r = this.el;
    this.toArray().forEach(function(o, s) {
      var a = r.children[s];
      ht(a, this.options.draggable, r, !1) && (i[o] = a);
    }, this), e && this.captureAnimationState(), t.forEach(function(o) {
      i[o] && (r.removeChild(i[o]), r.appendChild(i[o]));
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
    return ht(t, e || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, e) {
    var i = this.options;
    if (e === void 0)
      return i[t];
    var r = ci.modifyOption(this, t, e);
    typeof r < "u" ? i[t] = r : i[t] = e, t === "group" && Ts(i);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Be("destroy", this);
    var t = this.el;
    t[Ue] = null, pe(t, "mousedown", this._onTapStart), pe(t, "touchstart", this._onTapStart), pe(t, "pointerdown", this._onTapStart), this.nativeDraggable && (pe(t, "dragover", this), pe(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Pi.splice(Pi.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Wt) {
      if (Be("hideClone", this), ce.eventCanceled)
        return;
      se(Ce, "display", "none"), this.options.removeCloneOnHide && Ce.parentNode && Ce.parentNode.removeChild(Ce), Wt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Wt) {
      if (Be("showClone", this), ce.eventCanceled)
        return;
      B.parentNode == De && !this.options.group.revertClone ? De.insertBefore(Ce, B) : Zt ? De.insertBefore(Ce, Zt) : De.appendChild(Ce), this.options.group.revertClone && this.animate(B, Ce), se(Ce, "display", ""), Wt = !1;
    }
  }
};
function Ih(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function yi(n, t, e, i, r, o, s, a) {
  var l, f = n[Ue], d = f.options.onMove, v;
  return window.CustomEvent && !Pt && !li ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = t, l.from = n, l.dragged = e, l.draggedRect = i, l.related = r || t, l.relatedRect = o || Me(t), l.willInsertAfter = a, l.originalEvent = s, n.dispatchEvent(l), d && (v = d.call(f, l, s)), v;
}
function dr(n) {
  n.draggable = !1;
}
function kh() {
  xr = !1;
}
function Ph(n, t, e) {
  var i = Me(In(e.el, 0, e.options, !0)), r = Es(e.el, e.options, ue), o = 10;
  return t ? n.clientX < r.left - o || n.clientY < i.top && n.clientX < i.right : n.clientY < r.top - o || n.clientY < i.bottom && n.clientX < i.left;
}
function Rh(n, t, e) {
  var i = Me(Jr(e.el, e.options.draggable)), r = Es(e.el, e.options, ue), o = 10;
  return t ? n.clientX > r.right + o || n.clientY > i.bottom && n.clientX > i.left : n.clientY > r.bottom + o || n.clientX > i.right && n.clientY > i.top;
}
function Yh(n, t, e, i, r, o, s, a) {
  var l = i ? n.clientY : n.clientX, f = i ? e.height : e.width, d = i ? e.top : e.left, v = i ? e.bottom : e.right, b = !1;
  if (!s) {
    if (a && Si < f * r) {
      if (!Qn && (Xn === 1 ? l > d + f * o / 2 : l < v - f * o / 2) && (Qn = !0), Qn)
        b = !0;
      else if (Xn === 1 ? l < d + Si : l > v - Si)
        return -Xn;
    } else if (l > d + f * (1 - r) / 2 && l < v - f * (1 - r) / 2)
      return Hh(t);
  }
  return b = b || s, b && (l < d + f * o / 2 || l > v - f * o / 2) ? l > d + f / 2 ? 1 : -1 : 0;
}
function Hh(n) {
  return ot(B) < ot(n) ? 1 : -1;
}
function Fh(n) {
  for (var t = n.tagName + n.className + n.src + n.href + n.textContent, e = t.length, i = 0; e--; )
    i += t.charCodeAt(e);
  return i.toString(36);
}
function jh(n) {
  Ri.length = 0;
  for (var t = n.getElementsByTagName("input"), e = t.length; e--; ) {
    var i = t[e];
    i.checked && Ri.push(i);
  }
}
function Oi(n) {
  return setTimeout(n, 0);
}
function Nr(n) {
  return clearTimeout(n);
}
Vi && me(document, "touchmove", function(n) {
  (ce.active || wn) && n.cancelable && n.preventDefault();
});
ce.utils = {
  on: me,
  off: pe,
  css: se,
  find: vs,
  is: function(t, e) {
    return !!ht(t, e, t, !1);
  },
  extend: Dh,
  throttle: _s,
  closest: ht,
  toggleClass: qe,
  clone: ys,
  index: ot,
  nextTick: Oi,
  cancelNextTick: Nr,
  detectDirection: Ds,
  getChild: In,
  expando: Ue
};
ce.get = function(n) {
  return n[Ue];
};
ce.mount = function() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (ce.utils = Tt(Tt({}, ce.utils), i.utils)), ci.mount(i);
  });
};
ce.create = function(n, t) {
  return new ce(n, t);
};
ce.version = Eh;
var Oe = [], Bn, $r, Lr = !1, hr, pr, Yi, Vn;
function Wh() {
  function n() {
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
  return n.prototype = {
    dragStarted: function(e) {
      var i = e.originalEvent;
      this.sortable.nativeDraggable ? me(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? me(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? me(document, "touchmove", this._handleFallbackAutoScroll) : me(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var i = e.originalEvent;
      !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i);
    },
    drop: function() {
      this.sortable.nativeDraggable ? pe(document, "dragover", this._handleAutoScroll) : (pe(document, "pointermove", this._handleFallbackAutoScroll), pe(document, "touchmove", this._handleFallbackAutoScroll), pe(document, "mousemove", this._handleFallbackAutoScroll)), Xo(), Mi(), Th();
    },
    nulling: function() {
      Yi = $r = Bn = Lr = Vn = hr = pr = null, Oe.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, i) {
      var r = this, o = (e.touches ? e.touches[0] : e).clientX, s = (e.touches ? e.touches[0] : e).clientY, a = document.elementFromPoint(o, s);
      if (Yi = e, i || this.options.forceAutoScrollFallback || li || Pt || zn) {
        mr(e, this.options, a, i);
        var l = Bt(a, !0);
        Lr && (!Vn || o !== hr || s !== pr) && (Vn && Xo(), Vn = setInterval(function() {
          var f = Bt(document.elementFromPoint(o, s), !0);
          f !== l && (l = f, Mi()), mr(e, r.options, f, i);
        }, 10), hr = o, pr = s);
      } else {
        if (!this.options.bubbleScroll || Bt(a, !0) === wt()) {
          Mi();
          return;
        }
        mr(e, this.options, Bt(a, !1), !1);
      }
    }
  }, $t(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Mi() {
  Oe.forEach(function(n) {
    clearInterval(n.pid);
  }), Oe = [];
}
function Xo() {
  clearInterval(Vn);
}
var mr = _s(function(n, t, e, i) {
  if (t.scroll) {
    var r = (n.touches ? n.touches[0] : n).clientX, o = (n.touches ? n.touches[0] : n).clientY, s = t.scrollSensitivity, a = t.scrollSpeed, l = wt(), f = !1, d;
    $r !== e && ($r = e, Mi(), Bn = t.scroll, d = t.scrollFn, Bn === !0 && (Bn = Bt(e, !0)));
    var v = 0, b = Bn;
    do {
      var E = b, D = Me(E), m = D.top, _ = D.bottom, M = D.left, O = D.right, L = D.width, I = D.height, V = void 0, A = void 0, p = E.scrollWidth, w = E.scrollHeight, Y = se(E), H = E.scrollLeft, k = E.scrollTop;
      E === l ? (V = L < p && (Y.overflowX === "auto" || Y.overflowX === "scroll" || Y.overflowX === "visible"), A = I < w && (Y.overflowY === "auto" || Y.overflowY === "scroll" || Y.overflowY === "visible")) : (V = L < p && (Y.overflowX === "auto" || Y.overflowX === "scroll"), A = I < w && (Y.overflowY === "auto" || Y.overflowY === "scroll"));
      var te = V && (Math.abs(O - r) <= s && H + L < p) - (Math.abs(M - r) <= s && !!H), Q = A && (Math.abs(_ - o) <= s && k + I < w) - (Math.abs(m - o) <= s && !!k);
      if (!Oe[v])
        for (var F = 0; F <= v; F++)
          Oe[F] || (Oe[F] = {});
      (Oe[v].vx != te || Oe[v].vy != Q || Oe[v].el !== E) && (Oe[v].el = E, Oe[v].vx = te, Oe[v].vy = Q, clearInterval(Oe[v].pid), (te != 0 || Q != 0) && (f = !0, Oe[v].pid = setInterval((function() {
        i && this.layer === 0 && ce.active._onTouchMove(Yi);
        var N = Oe[this.layer].vy ? Oe[this.layer].vy * a : 0, T = Oe[this.layer].vx ? Oe[this.layer].vx * a : 0;
        typeof d == "function" && d.call(ce.dragged.parentNode[Ue], T, N, n, Yi, Oe[this.layer].el) !== "continue" || bs(Oe[this.layer].el, T, N);
      }).bind({
        layer: v
      }), 24))), v++;
    } while (t.bubbleScroll && b !== l && (b = Bt(b, !1)));
    Lr = f;
  }
}, 30), Ss = function(t) {
  var e = t.originalEvent, i = t.putSortable, r = t.dragEl, o = t.activeSortable, s = t.dispatchSortableEvent, a = t.hideGhostForTarget, l = t.unhideGhostForTarget;
  if (e) {
    var f = i || o;
    a();
    var d = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, v = document.elementFromPoint(d.clientX, d.clientY);
    l(), f && !f.el.contains(v) && (s("spill"), this.onSpill({
      dragEl: r,
      putSortable: i
    }));
  }
};
function eo() {
}
eo.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function(t) {
    var e = t.dragEl, i = t.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var r = In(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(e, r) : this.sortable.el.appendChild(e), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: Ss
};
$t(eo, {
  pluginName: "revertOnSpill"
});
function to() {
}
to.prototype = {
  onSpill: function(t) {
    var e = t.dragEl, i = t.putSortable, r = i || this.sortable;
    r.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), r.animateAll();
  },
  drop: Ss
};
$t(to, {
  pluginName: "removeOnSpill"
});
ce.mount(new Wh());
ce.mount(to, eo);
var gr = [
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
], An = {
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
  errorHandler: function(n) {
    return typeof console < "u" && console.warn(n);
  },
  getWeek: function(n) {
    var t = new Date(n.getTime());
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
}, Jn = {
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
  ordinal: function(n) {
    var t = n % 100;
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
}, Ve = function(n, t) {
  return t === void 0 && (t = 2), ("000" + n).slice(t * -1);
}, rt = function(n) {
  return n === !0 ? 1 : 0;
};
function Qo(n, t) {
  var e;
  return function() {
    var i = this, r = arguments;
    clearTimeout(e), e = setTimeout(function() {
      return n.apply(i, r);
    }, t);
  };
}
var vr = function(n) {
  return n instanceof Array ? n : [n];
};
function He(n, t, e) {
  if (e === !0)
    return n.classList.add(t);
  n.classList.remove(t);
}
function ve(n, t, e) {
  var i = window.document.createElement(n);
  return t = t || "", e = e || "", i.className = t, e !== void 0 && (i.textContent = e), i;
}
function Ei(n) {
  for (; n.firstChild; )
    n.removeChild(n.firstChild);
}
function Os(n, t) {
  if (t(n))
    return n;
  if (n.parentNode)
    return Os(n.parentNode, t);
}
function wi(n, t) {
  var e = ve("div", "numInputWrapper"), i = ve("input", "numInput " + n), r = ve("span", "arrowUp"), o = ve("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1 ? i.type = "number" : (i.type = "text", i.pattern = "\\d*"), t !== void 0)
    for (var s in t)
      i.setAttribute(s, t[s]);
  return e.appendChild(i), e.appendChild(r), e.appendChild(o), e;
}
function Ge(n) {
  try {
    if (typeof n.composedPath == "function") {
      var t = n.composedPath();
      return t[0];
    }
    return n.target;
  } catch {
    return n.target;
  }
}
var _r = function() {
}, Hi = function(n, t, e) {
  return e.months[t ? "shorthand" : "longhand"][n];
}, Bh = {
  D: _r,
  F: function(n, t, e) {
    n.setMonth(e.months.longhand.indexOf(t));
  },
  G: function(n, t) {
    n.setHours((n.getHours() >= 12 ? 12 : 0) + parseFloat(t));
  },
  H: function(n, t) {
    n.setHours(parseFloat(t));
  },
  J: function(n, t) {
    n.setDate(parseFloat(t));
  },
  K: function(n, t, e) {
    n.setHours(n.getHours() % 12 + 12 * rt(new RegExp(e.amPM[1], "i").test(t)));
  },
  M: function(n, t, e) {
    n.setMonth(e.months.shorthand.indexOf(t));
  },
  S: function(n, t) {
    n.setSeconds(parseFloat(t));
  },
  U: function(n, t) {
    return new Date(parseFloat(t) * 1e3);
  },
  W: function(n, t, e) {
    var i = parseInt(t), r = new Date(n.getFullYear(), 0, 2 + (i - 1) * 7, 0, 0, 0, 0);
    return r.setDate(r.getDate() - r.getDay() + e.firstDayOfWeek), r;
  },
  Y: function(n, t) {
    n.setFullYear(parseFloat(t));
  },
  Z: function(n, t) {
    return new Date(t);
  },
  d: function(n, t) {
    n.setDate(parseFloat(t));
  },
  h: function(n, t) {
    n.setHours((n.getHours() >= 12 ? 12 : 0) + parseFloat(t));
  },
  i: function(n, t) {
    n.setMinutes(parseFloat(t));
  },
  j: function(n, t) {
    n.setDate(parseFloat(t));
  },
  l: _r,
  m: function(n, t) {
    n.setMonth(parseFloat(t) - 1);
  },
  n: function(n, t) {
    n.setMonth(parseFloat(t) - 1);
  },
  s: function(n, t) {
    n.setSeconds(parseFloat(t));
  },
  u: function(n, t) {
    return new Date(parseFloat(t));
  },
  w: _r,
  y: function(n, t) {
    n.setFullYear(2e3 + parseFloat(t));
  }
}, Jt = {
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
}, Zn = {
  Z: function(n) {
    return n.toISOString();
  },
  D: function(n, t, e) {
    return t.weekdays.shorthand[Zn.w(n, t, e)];
  },
  F: function(n, t, e) {
    return Hi(Zn.n(n, t, e) - 1, !1, t);
  },
  G: function(n, t, e) {
    return Ve(Zn.h(n, t, e));
  },
  H: function(n) {
    return Ve(n.getHours());
  },
  J: function(n, t) {
    return t.ordinal !== void 0 ? n.getDate() + t.ordinal(n.getDate()) : n.getDate();
  },
  K: function(n, t) {
    return t.amPM[rt(n.getHours() > 11)];
  },
  M: function(n, t) {
    return Hi(n.getMonth(), !0, t);
  },
  S: function(n) {
    return Ve(n.getSeconds());
  },
  U: function(n) {
    return n.getTime() / 1e3;
  },
  W: function(n, t, e) {
    return e.getWeek(n);
  },
  Y: function(n) {
    return Ve(n.getFullYear(), 4);
  },
  d: function(n) {
    return Ve(n.getDate());
  },
  h: function(n) {
    return n.getHours() % 12 ? n.getHours() % 12 : 12;
  },
  i: function(n) {
    return Ve(n.getMinutes());
  },
  j: function(n) {
    return n.getDate();
  },
  l: function(n, t) {
    return t.weekdays.longhand[n.getDay()];
  },
  m: function(n) {
    return Ve(n.getMonth() + 1);
  },
  n: function(n) {
    return n.getMonth() + 1;
  },
  s: function(n) {
    return n.getSeconds();
  },
  u: function(n) {
    return n.getTime();
  },
  w: function(n) {
    return n.getDay();
  },
  y: function(n) {
    return String(n.getFullYear()).substring(2);
  }
}, Ms = function(n) {
  var t = n.config, e = t === void 0 ? An : t, i = n.l10n, r = i === void 0 ? Jn : i, o = n.isMobile, s = o === void 0 ? !1 : o;
  return function(a, l, f) {
    var d = f || r;
    return e.formatDate !== void 0 && !s ? e.formatDate(a, l, d) : l.split("").map(function(v, b, E) {
      return Zn[v] && E[b - 1] !== "\\" ? Zn[v](a, d, e) : v !== "\\" ? v : "";
    }).join("");
  };
}, Ir = function(n) {
  var t = n.config, e = t === void 0 ? An : t, i = n.l10n, r = i === void 0 ? Jn : i;
  return function(o, s, a, l) {
    if (!(o !== 0 && !o)) {
      var f = l || r, d, v = o;
      if (o instanceof Date)
        d = new Date(o.getTime());
      else if (typeof o != "string" && o.toFixed !== void 0)
        d = new Date(o);
      else if (typeof o == "string") {
        var b = s || (e || An).dateFormat, E = String(o).trim();
        if (E === "today")
          d = /* @__PURE__ */ new Date(), a = !0;
        else if (e && e.parseDate)
          d = e.parseDate(o, b);
        else if (/Z$/.test(E) || /GMT$/.test(E))
          d = new Date(o);
        else {
          for (var D = void 0, m = [], _ = 0, M = 0, O = ""; _ < b.length; _++) {
            var L = b[_], I = L === "\\", V = b[_ - 1] === "\\" || I;
            if (Jt[L] && !V) {
              O += Jt[L];
              var A = new RegExp(O).exec(o);
              A && (D = !0) && m[L !== "Y" ? "push" : "unshift"]({
                fn: Bh[L],
                val: A[++M]
              });
            } else
              I || (O += ".");
          }
          d = !e || !e.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), m.forEach(function(p) {
            var w = p.fn, Y = p.val;
            return d = w(d, Y, f) || d;
          }), d = D ? d : void 0;
        }
      }
      if (!(d instanceof Date && !isNaN(d.getTime()))) {
        e.errorHandler(new Error("Invalid date provided: " + v));
        return;
      }
      return a === !0 && d.setHours(0, 0, 0, 0), d;
    }
  };
};
function Xe(n, t, e) {
  return e === void 0 && (e = !0), e !== !1 ? new Date(n.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : n.getTime() - t.getTime();
}
var Vh = function(n, t, e) {
  return n > Math.min(t, e) && n < Math.max(t, e);
}, br = function(n, t, e) {
  return n * 3600 + t * 60 + e;
}, Kh = function(n) {
  var t = Math.floor(n / 3600), e = (n - t * 3600) / 60;
  return [t, e, n - t * 3600 - e * 60];
}, Uh = {
  DAY: 864e5
};
function yr(n) {
  var t = n.defaultHour, e = n.defaultMinute, i = n.defaultSeconds;
  if (n.minDate !== void 0) {
    var r = n.minDate.getHours(), o = n.minDate.getMinutes(), s = n.minDate.getSeconds();
    t < r && (t = r), t === r && e < o && (e = o), t === r && e === o && i < s && (i = n.minDate.getSeconds());
  }
  if (n.maxDate !== void 0) {
    var a = n.maxDate.getHours(), l = n.maxDate.getMinutes();
    t = Math.min(t, a), t === a && (e = Math.min(l, e)), t === a && e === l && (i = n.maxDate.getSeconds());
  }
  return { hours: t, minutes: e, seconds: i };
}
typeof Object.assign != "function" && (Object.assign = function(n) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  if (!n)
    throw TypeError("Cannot convert undefined or null to object");
  for (var i = function(a) {
    a && Object.keys(a).forEach(function(l) {
      return n[l] = a[l];
    });
  }, r = 0, o = t; r < o.length; r++) {
    var s = o[r];
    i(s);
  }
  return n;
});
var Ye = function() {
  return Ye = Object.assign || function(n) {
    for (var t, e = 1, i = arguments.length; e < i; e++) {
      t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Ye.apply(this, arguments);
}, Zo = function() {
  for (var n = 0, t = 0, e = arguments.length; t < e; t++)
    n += arguments[t].length;
  for (var i = Array(n), r = 0, t = 0; t < e; t++)
    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, r++)
      i[r] = o[s];
  return i;
}, zh = 300;
function Gh(n, t) {
  var e = {
    config: Ye(Ye({}, An), $e.defaultConfig),
    l10n: Jn
  };
  e.parseDate = Ir({ config: e.config, l10n: e.l10n }), e._handlers = [], e.pluginElements = [], e.loadedPlugins = [], e._bind = m, e._setHoursFromDate = b, e._positionCalendar = tt, e.changeMonth = re, e.changeYear = oe, e.clear = K, e.close = P, e.onMouseOver = xe, e._createElement = ve, e.createDay = A, e.destroy = R, e.isEnabled = de, e.jumpToDate = O, e.updateValue = ke, e.open = gt, e.redraw = qt, e.set = ge, e.setDate = dn, e.toggle = ie;
  function i() {
    e.utils = {
      getDaysInMonth: function(c, u) {
        return c === void 0 && (c = e.currentMonth), u === void 0 && (u = e.currentYear), c === 1 && (u % 4 === 0 && u % 100 !== 0 || u % 400 === 0) ? 29 : e.l10n.daysInMonth[c];
      }
    };
  }
  function r() {
    e.element = e.input = n, e.isOpen = !1, vt(), _t(), C(), h(), i(), e.isMobile || V(), M(), (e.selectedDates.length || e.config.noCalendar) && (e.config.enableTime && b(e.config.noCalendar ? e.latestSelectedDateObj : void 0), ke(!1)), a();
    var c = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    !e.isMobile && c && tt(), Z("onReady");
  }
  function o() {
    var c;
    return ((c = e.calendarContainer) === null || c === void 0 ? void 0 : c.getRootNode()).activeElement || document.activeElement;
  }
  function s(c) {
    return c.bind(e);
  }
  function a() {
    var c = e.config;
    c.weekNumbers === !1 && c.showMonths === 1 || c.noCalendar !== !0 && window.requestAnimationFrame(function() {
      if (e.calendarContainer !== void 0 && (e.calendarContainer.style.visibility = "hidden", e.calendarContainer.style.display = "block"), e.daysContainer !== void 0) {
        var u = (e.days.offsetWidth + 1) * c.showMonths;
        e.daysContainer.style.width = u + "px", e.calendarContainer.style.width = u + (e.weekWrapper !== void 0 ? e.weekWrapper.offsetWidth : 0) + "px", e.calendarContainer.style.removeProperty("visibility"), e.calendarContainer.style.removeProperty("display");
      }
    });
  }
  function l(c) {
    if (e.selectedDates.length === 0) {
      var u = e.config.minDate === void 0 || Xe(/* @__PURE__ */ new Date(), e.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(e.config.minDate.getTime()), g = yr(e.config);
      u.setHours(g.hours, g.minutes, g.seconds, u.getMilliseconds()), e.selectedDates = [u], e.latestSelectedDateObj = u;
    }
    c !== void 0 && c.type !== "blur" && Is(c);
    var y = e._input.value;
    v(), ke(), e._input.value !== y && e._debouncedChange();
  }
  function f(c, u) {
    return c % 12 + 12 * rt(u === e.l10n.amPM[1]);
  }
  function d(c) {
    switch (c % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return c % 12;
    }
  }
  function v() {
    if (!(e.hourElement === void 0 || e.minuteElement === void 0)) {
      var c = (parseInt(e.hourElement.value.slice(-2), 10) || 0) % 24, u = (parseInt(e.minuteElement.value, 10) || 0) % 60, g = e.secondElement !== void 0 ? (parseInt(e.secondElement.value, 10) || 0) % 60 : 0;
      e.amPM !== void 0 && (c = f(c, e.amPM.textContent));
      var y = e.config.minTime !== void 0 || e.config.minDate && e.minDateHasTime && e.latestSelectedDateObj && Xe(e.latestSelectedDateObj, e.config.minDate, !0) === 0, W = e.config.maxTime !== void 0 || e.config.maxDate && e.maxDateHasTime && e.latestSelectedDateObj && Xe(e.latestSelectedDateObj, e.config.maxDate, !0) === 0;
      if (e.config.maxTime !== void 0 && e.config.minTime !== void 0 && e.config.minTime > e.config.maxTime) {
        var G = br(e.config.minTime.getHours(), e.config.minTime.getMinutes(), e.config.minTime.getSeconds()), fe = br(e.config.maxTime.getHours(), e.config.maxTime.getMinutes(), e.config.maxTime.getSeconds()), ne = br(c, u, g);
        if (ne > fe && ne < G) {
          var he = Kh(G);
          c = he[0], u = he[1], g = he[2];
        }
      } else {
        if (W) {
          var J = e.config.maxTime !== void 0 ? e.config.maxTime : e.config.maxDate;
          c = Math.min(c, J.getHours()), c === J.getHours() && (u = Math.min(u, J.getMinutes())), u === J.getMinutes() && (g = Math.min(g, J.getSeconds()));
        }
        if (y) {
          var le = e.config.minTime !== void 0 ? e.config.minTime : e.config.minDate;
          c = Math.max(c, le.getHours()), c === le.getHours() && u < le.getMinutes() && (u = le.getMinutes()), u === le.getMinutes() && (g = Math.max(g, le.getSeconds()));
        }
      }
      E(c, u, g);
    }
  }
  function b(c) {
    var u = c || e.latestSelectedDateObj;
    u && u instanceof Date && E(u.getHours(), u.getMinutes(), u.getSeconds());
  }
  function E(c, u, g) {
    e.latestSelectedDateObj !== void 0 && e.latestSelectedDateObj.setHours(c % 24, u, g || 0, 0), !(!e.hourElement || !e.minuteElement || e.isMobile) && (e.hourElement.value = Ve(e.config.time_24hr ? c : (12 + c) % 12 + 12 * rt(c % 12 === 0)), e.minuteElement.value = Ve(u), e.amPM !== void 0 && (e.amPM.textContent = e.l10n.amPM[rt(c >= 12)]), e.secondElement !== void 0 && (e.secondElement.value = Ve(g)));
  }
  function D(c) {
    var u = Ge(c), g = parseInt(u.value) + (c.delta || 0);
    (g / 1e3 > 1 || c.key === "Enter" && !/[^\d]/.test(g.toString())) && oe(g);
  }
  function m(c, u, g, y) {
    if (u instanceof Array)
      return u.forEach(function(W) {
        return m(c, W, g, y);
      });
    if (c instanceof Array)
      return c.forEach(function(W) {
        return m(W, u, g, y);
      });
    c.addEventListener(u, g, y), e._handlers.push({
      remove: function() {
        return c.removeEventListener(u, g, y);
      }
    });
  }
  function _() {
    Z("onChange");
  }
  function M() {
    if (e.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(g) {
      Array.prototype.forEach.call(e.element.querySelectorAll("[data-" + g + "]"), function(y) {
        return m(y, "click", e[g]);
      });
    }), e.isMobile) {
      X();
      return;
    }
    var c = Qo(Le, 50);
    if (e._debouncedChange = Qo(_, zh), e.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && m(e.daysContainer, "mouseover", function(g) {
      e.config.mode === "range" && xe(Ge(g));
    }), m(e._input, "keydown", Se), e.calendarContainer !== void 0 && m(e.calendarContainer, "keydown", Se), !e.config.inline && !e.config.static && m(window, "resize", c), window.ontouchstart !== void 0 ? m(window.document, "touchstart", q) : m(window.document, "mousedown", q), m(window.document, "focus", q, { capture: !0 }), e.config.clickOpens === !0 && (m(e._input, "focus", e.open), m(e._input, "click", e.open)), e.daysContainer !== void 0 && (m(e.monthNav, "click", Ls), m(e.monthNav, ["keyup", "increment"], D), m(e.daysContainer, "click", Ct)), e.timeContainer !== void 0 && e.minuteElement !== void 0 && e.hourElement !== void 0) {
      var u = function(g) {
        return Ge(g).select();
      };
      m(e.timeContainer, ["increment"], l), m(e.timeContainer, "blur", l, { capture: !0 }), m(e.timeContainer, "click", L), m([e.hourElement, e.minuteElement], ["focus", "click"], u), e.secondElement !== void 0 && m(e.secondElement, "focus", function() {
        return e.secondElement && e.secondElement.select();
      }), e.amPM !== void 0 && m(e.amPM, "click", function(g) {
        l(g);
      });
    }
    e.config.allowInput && m(e._input, "blur", _e);
  }
  function O(c, u) {
    var g = c !== void 0 ? e.parseDate(c) : e.latestSelectedDateObj || (e.config.minDate && e.config.minDate > e.now ? e.config.minDate : e.config.maxDate && e.config.maxDate < e.now ? e.config.maxDate : e.now), y = e.currentYear, W = e.currentMonth;
    try {
      g !== void 0 && (e.currentYear = g.getFullYear(), e.currentMonth = g.getMonth());
    } catch (G) {
      G.message = "Invalid date supplied: " + g, e.config.errorHandler(G);
    }
    u && e.currentYear !== y && (Z("onYearChange"), Q()), u && (e.currentYear !== y || e.currentMonth !== W) && Z("onMonthChange"), e.redraw();
  }
  function L(c) {
    var u = Ge(c);
    ~u.className.indexOf("arrow") && I(c, u.classList.contains("arrowUp") ? 1 : -1);
  }
  function I(c, u, g) {
    var y = c && Ge(c), W = g || y && y.parentNode && y.parentNode.firstChild, G = ye("increment");
    G.delta = u, W && W.dispatchEvent(G);
  }
  function V() {
    var c = window.document.createDocumentFragment();
    if (e.calendarContainer = ve("div", "flatpickr-calendar"), e.calendarContainer.tabIndex = -1, !e.config.noCalendar) {
      if (c.appendChild(T()), e.innerContainer = ve("div", "flatpickr-innerContainer"), e.config.weekNumbers) {
        var u = ee(), g = u.weekWrapper, y = u.weekNumbers;
        e.innerContainer.appendChild(g), e.weekNumbers = y, e.weekWrapper = g;
      }
      e.rContainer = ve("div", "flatpickr-rContainer"), e.rContainer.appendChild($()), e.daysContainer || (e.daysContainer = ve("div", "flatpickr-days"), e.daysContainer.tabIndex = -1), te(), e.rContainer.appendChild(e.daysContainer), e.innerContainer.appendChild(e.rContainer), c.appendChild(e.innerContainer);
    }
    e.config.enableTime && c.appendChild(j()), He(e.calendarContainer, "rangeMode", e.config.mode === "range"), He(e.calendarContainer, "animate", e.config.animate === !0), He(e.calendarContainer, "multiMonth", e.config.showMonths > 1), e.calendarContainer.appendChild(c);
    var W = e.config.appendTo !== void 0 && e.config.appendTo.nodeType !== void 0;
    if ((e.config.inline || e.config.static) && (e.calendarContainer.classList.add(e.config.inline ? "inline" : "static"), e.config.inline && (!W && e.element.parentNode ? e.element.parentNode.insertBefore(e.calendarContainer, e._input.nextSibling) : e.config.appendTo !== void 0 && e.config.appendTo.appendChild(e.calendarContainer)), e.config.static)) {
      var G = ve("div", "flatpickr-wrapper");
      e.element.parentNode && e.element.parentNode.insertBefore(G, e.element), G.appendChild(e.element), e.altInput && G.appendChild(e.altInput), G.appendChild(e.calendarContainer);
    }
    !e.config.static && !e.config.inline && (e.config.appendTo !== void 0 ? e.config.appendTo : window.document.body).appendChild(e.calendarContainer);
  }
  function A(c, u, g, y) {
    var W = de(u, !0), G = ve("span", c, u.getDate().toString());
    return G.dateObj = u, G.$i = y, G.setAttribute("aria-label", e.formatDate(u, e.config.ariaDateFormat)), c.indexOf("hidden") === -1 && Xe(u, e.now) === 0 && (e.todayDateElem = G, G.classList.add("today"), G.setAttribute("aria-current", "date")), W ? (G.tabIndex = -1, Ie(u) && (G.classList.add("selected"), e.selectedDateElem = G, e.config.mode === "range" && (He(G, "startRange", e.selectedDates[0] && Xe(u, e.selectedDates[0], !0) === 0), He(G, "endRange", e.selectedDates[1] && Xe(u, e.selectedDates[1], !0) === 0), c === "nextMonthDay" && G.classList.add("inRange")))) : G.classList.add("flatpickr-disabled"), e.config.mode === "range" && be(u) && !Ie(u) && G.classList.add("inRange"), e.weekNumbers && e.config.showMonths === 1 && c !== "prevMonthDay" && y % 7 === 6 && e.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + e.config.getWeek(u) + "</span>"), Z("onDayCreate", G), G;
  }
  function p(c) {
    c.focus(), e.config.mode === "range" && xe(c);
  }
  function w(c) {
    for (var u = c > 0 ? 0 : e.config.showMonths - 1, g = c > 0 ? e.config.showMonths : -1, y = u; y != g; y += c)
      for (var W = e.daysContainer.children[y], G = c > 0 ? 0 : W.children.length - 1, fe = c > 0 ? W.children.length : -1, ne = G; ne != fe; ne += c) {
        var he = W.children[ne];
        if (he.className.indexOf("hidden") === -1 && de(he.dateObj))
          return he;
      }
  }
  function Y(c, u) {
    for (var g = c.className.indexOf("Month") === -1 ? c.dateObj.getMonth() : e.currentMonth, y = u > 0 ? e.config.showMonths : -1, W = u > 0 ? 1 : -1, G = g - e.currentMonth; G != y; G += W)
      for (var fe = e.daysContainer.children[G], ne = g - e.currentMonth === G ? c.$i + u : u < 0 ? fe.children.length - 1 : 0, he = fe.children.length, J = ne; J >= 0 && J < he && J != (u > 0 ? he : -1); J += W) {
        var le = fe.children[J];
        if (le.className.indexOf("hidden") === -1 && de(le.dateObj) && Math.abs(c.$i - J) >= Math.abs(u))
          return p(le);
      }
    e.changeMonth(W), H(w(W), 0);
  }
  function H(c, u) {
    var g = o(), y = we(g || document.body), W = c !== void 0 ? c : y ? g : e.selectedDateElem !== void 0 && we(e.selectedDateElem) ? e.selectedDateElem : e.todayDateElem !== void 0 && we(e.todayDateElem) ? e.todayDateElem : w(u > 0 ? 1 : -1);
    W === void 0 ? e._input.focus() : y ? Y(W, u) : p(W);
  }
  function k(c, u) {
    for (var g = (new Date(c, u, 1).getDay() - e.l10n.firstDayOfWeek + 7) % 7, y = e.utils.getDaysInMonth((u - 1 + 12) % 12, c), W = e.utils.getDaysInMonth(u, c), G = window.document.createDocumentFragment(), fe = e.config.showMonths > 1, ne = fe ? "prevMonthDay hidden" : "prevMonthDay", he = fe ? "nextMonthDay hidden" : "nextMonthDay", J = y + 1 - g, le = 0; J <= y; J++, le++)
      G.appendChild(A("flatpickr-day " + ne, new Date(c, u - 1, J), J, le));
    for (J = 1; J <= W; J++, le++)
      G.appendChild(A("flatpickr-day", new Date(c, u, J), J, le));
    for (var Ee = W + 1; Ee <= 42 - g && (e.config.showMonths === 1 || le % 7 !== 0); Ee++, le++)
      G.appendChild(A("flatpickr-day " + he, new Date(c, u + 1, Ee % W), Ee, le));
    var yt = ve("div", "dayContainer");
    return yt.appendChild(G), yt;
  }
  function te() {
    if (e.daysContainer !== void 0) {
      Ei(e.daysContainer), e.weekNumbers && Ei(e.weekNumbers);
      for (var c = document.createDocumentFragment(), u = 0; u < e.config.showMonths; u++) {
        var g = new Date(e.currentYear, e.currentMonth, 1);
        g.setMonth(e.currentMonth + u), c.appendChild(k(g.getFullYear(), g.getMonth()));
      }
      e.daysContainer.appendChild(c), e.days = e.daysContainer.firstChild, e.config.mode === "range" && e.selectedDates.length === 1 && xe();
    }
  }
  function Q() {
    if (!(e.config.showMonths > 1 || e.config.monthSelectorType !== "dropdown")) {
      var c = function(y) {
        return e.config.minDate !== void 0 && e.currentYear === e.config.minDate.getFullYear() && y < e.config.minDate.getMonth() ? !1 : !(e.config.maxDate !== void 0 && e.currentYear === e.config.maxDate.getFullYear() && y > e.config.maxDate.getMonth());
      };
      e.monthsDropdownContainer.tabIndex = -1, e.monthsDropdownContainer.innerHTML = "";
      for (var u = 0; u < 12; u++)
        if (c(u)) {
          var g = ve("option", "flatpickr-monthDropdown-month");
          g.value = new Date(e.currentYear, u).getMonth().toString(), g.textContent = Hi(u, e.config.shorthandCurrentMonth, e.l10n), g.tabIndex = -1, e.currentMonth === u && (g.selected = !0), e.monthsDropdownContainer.appendChild(g);
        }
    }
  }
  function F() {
    var c = ve("div", "flatpickr-month"), u = window.document.createDocumentFragment(), g;
    e.config.showMonths > 1 || e.config.monthSelectorType === "static" ? g = ve("span", "cur-month") : (e.monthsDropdownContainer = ve("select", "flatpickr-monthDropdown-months"), e.monthsDropdownContainer.setAttribute("aria-label", e.l10n.monthAriaLabel), m(e.monthsDropdownContainer, "change", function(fe) {
      var ne = Ge(fe), he = parseInt(ne.value, 10);
      e.changeMonth(he - e.currentMonth), Z("onMonthChange");
    }), Q(), g = e.monthsDropdownContainer);
    var y = wi("cur-year", { tabindex: "-1" }), W = y.getElementsByTagName("input")[0];
    W.setAttribute("aria-label", e.l10n.yearAriaLabel), e.config.minDate && W.setAttribute("min", e.config.minDate.getFullYear().toString()), e.config.maxDate && (W.setAttribute("max", e.config.maxDate.getFullYear().toString()), W.disabled = !!e.config.minDate && e.config.minDate.getFullYear() === e.config.maxDate.getFullYear());
    var G = ve("div", "flatpickr-current-month");
    return G.appendChild(g), G.appendChild(y), u.appendChild(G), c.appendChild(u), {
      container: c,
      yearElement: W,
      monthElement: g
    };
  }
  function N() {
    Ei(e.monthNav), e.monthNav.appendChild(e.prevMonthNav), e.config.showMonths && (e.yearElements = [], e.monthElements = []);
    for (var c = e.config.showMonths; c--; ) {
      var u = F();
      e.yearElements.push(u.yearElement), e.monthElements.push(u.monthElement), e.monthNav.appendChild(u.container);
    }
    e.monthNav.appendChild(e.nextMonthNav);
  }
  function T() {
    return e.monthNav = ve("div", "flatpickr-months"), e.yearElements = [], e.monthElements = [], e.prevMonthNav = ve("span", "flatpickr-prev-month"), e.prevMonthNav.innerHTML = e.config.prevArrow, e.nextMonthNav = ve("span", "flatpickr-next-month"), e.nextMonthNav.innerHTML = e.config.nextArrow, N(), Object.defineProperty(e, "_hidePrevMonthArrow", {
      get: function() {
        return e.__hidePrevMonthArrow;
      },
      set: function(c) {
        e.__hidePrevMonthArrow !== c && (He(e.prevMonthNav, "flatpickr-disabled", c), e.__hidePrevMonthArrow = c);
      }
    }), Object.defineProperty(e, "_hideNextMonthArrow", {
      get: function() {
        return e.__hideNextMonthArrow;
      },
      set: function(c) {
        e.__hideNextMonthArrow !== c && (He(e.nextMonthNav, "flatpickr-disabled", c), e.__hideNextMonthArrow = c);
      }
    }), e.currentYearElement = e.yearElements[0], Ne(), e.monthNav;
  }
  function j() {
    e.calendarContainer.classList.add("hasTime"), e.config.noCalendar && e.calendarContainer.classList.add("noCalendar");
    var c = yr(e.config);
    e.timeContainer = ve("div", "flatpickr-time"), e.timeContainer.tabIndex = -1;
    var u = ve("span", "flatpickr-time-separator", ":"), g = wi("flatpickr-hour", {
      "aria-label": e.l10n.hourAriaLabel
    });
    e.hourElement = g.getElementsByTagName("input")[0];
    var y = wi("flatpickr-minute", {
      "aria-label": e.l10n.minuteAriaLabel
    });
    if (e.minuteElement = y.getElementsByTagName("input")[0], e.hourElement.tabIndex = e.minuteElement.tabIndex = -1, e.hourElement.value = Ve(e.latestSelectedDateObj ? e.latestSelectedDateObj.getHours() : e.config.time_24hr ? c.hours : d(c.hours)), e.minuteElement.value = Ve(e.latestSelectedDateObj ? e.latestSelectedDateObj.getMinutes() : c.minutes), e.hourElement.setAttribute("step", e.config.hourIncrement.toString()), e.minuteElement.setAttribute("step", e.config.minuteIncrement.toString()), e.hourElement.setAttribute("min", e.config.time_24hr ? "0" : "1"), e.hourElement.setAttribute("max", e.config.time_24hr ? "23" : "12"), e.hourElement.setAttribute("maxlength", "2"), e.minuteElement.setAttribute("min", "0"), e.minuteElement.setAttribute("max", "59"), e.minuteElement.setAttribute("maxlength", "2"), e.timeContainer.appendChild(g), e.timeContainer.appendChild(u), e.timeContainer.appendChild(y), e.config.time_24hr && e.timeContainer.classList.add("time24hr"), e.config.enableSeconds) {
      e.timeContainer.classList.add("hasSeconds");
      var W = wi("flatpickr-second");
      e.secondElement = W.getElementsByTagName("input")[0], e.secondElement.value = Ve(e.latestSelectedDateObj ? e.latestSelectedDateObj.getSeconds() : c.seconds), e.secondElement.setAttribute("step", e.minuteElement.getAttribute("step")), e.secondElement.setAttribute("min", "0"), e.secondElement.setAttribute("max", "59"), e.secondElement.setAttribute("maxlength", "2"), e.timeContainer.appendChild(ve("span", "flatpickr-time-separator", ":")), e.timeContainer.appendChild(W);
    }
    return e.config.time_24hr || (e.amPM = ve("span", "flatpickr-am-pm", e.l10n.amPM[rt((e.latestSelectedDateObj ? e.hourElement.value : e.config.defaultHour) > 11)]), e.amPM.title = e.l10n.toggleTitle, e.amPM.tabIndex = -1, e.timeContainer.appendChild(e.amPM)), e.timeContainer;
  }
  function $() {
    e.weekdayContainer ? Ei(e.weekdayContainer) : e.weekdayContainer = ve("div", "flatpickr-weekdays");
    for (var c = e.config.showMonths; c--; ) {
      var u = ve("div", "flatpickr-weekdaycontainer");
      e.weekdayContainer.appendChild(u);
    }
    return z(), e.weekdayContainer;
  }
  function z() {
    if (e.weekdayContainer) {
      var c = e.l10n.firstDayOfWeek, u = Zo(e.l10n.weekdays.shorthand);
      c > 0 && c < u.length && (u = Zo(u.splice(c, u.length), u.splice(0, c)));
      for (var g = e.config.showMonths; g--; )
        e.weekdayContainer.children[g].innerHTML = `
      <span class='flatpickr-weekday'>
        ` + u.join("</span><span class='flatpickr-weekday'>") + `
      </span>
      `;
    }
  }
  function ee() {
    e.calendarContainer.classList.add("hasWeeks");
    var c = ve("div", "flatpickr-weekwrapper");
    c.appendChild(ve("span", "flatpickr-weekday", e.l10n.weekAbbreviation));
    var u = ve("div", "flatpickr-weeks");
    return c.appendChild(u), {
      weekWrapper: c,
      weekNumbers: u
    };
  }
  function re(c, u) {
    u === void 0 && (u = !0);
    var g = u ? c : c - e.currentMonth;
    g < 0 && e._hidePrevMonthArrow === !0 || g > 0 && e._hideNextMonthArrow === !0 || (e.currentMonth += g, (e.currentMonth < 0 || e.currentMonth > 11) && (e.currentYear += e.currentMonth > 11 ? 1 : -1, e.currentMonth = (e.currentMonth + 12) % 12, Z("onYearChange"), Q()), te(), Z("onMonthChange"), Ne());
  }
  function K(c, u) {
    if (c === void 0 && (c = !0), u === void 0 && (u = !0), e.input.value = "", e.altInput !== void 0 && (e.altInput.value = ""), e.mobileInput !== void 0 && (e.mobileInput.value = ""), e.selectedDates = [], e.latestSelectedDateObj = void 0, u === !0 && (e.currentYear = e._initialDate.getFullYear(), e.currentMonth = e._initialDate.getMonth()), e.config.enableTime === !0) {
      var g = yr(e.config), y = g.hours, W = g.minutes, G = g.seconds;
      E(y, W, G);
    }
    e.redraw(), c && Z("onChange");
  }
  function P() {
    e.isOpen = !1, e.isMobile || (e.calendarContainer !== void 0 && e.calendarContainer.classList.remove("open"), e._input !== void 0 && e._input.classList.remove("active")), Z("onClose");
  }
  function R() {
    e.config !== void 0 && Z("onDestroy");
    for (var c = e._handlers.length; c--; )
      e._handlers[c].remove();
    if (e._handlers = [], e.mobileInput)
      e.mobileInput.parentNode && e.mobileInput.parentNode.removeChild(e.mobileInput), e.mobileInput = void 0;
    else if (e.calendarContainer && e.calendarContainer.parentNode)
      if (e.config.static && e.calendarContainer.parentNode) {
        var u = e.calendarContainer.parentNode;
        if (u.lastChild && u.removeChild(u.lastChild), u.parentNode) {
          for (; u.firstChild; )
            u.parentNode.insertBefore(u.firstChild, u);
          u.parentNode.removeChild(u);
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
    ].forEach(function(g) {
      try {
        delete e[g];
      } catch {
      }
    });
  }
  function U(c) {
    return e.calendarContainer.contains(c);
  }
  function q(c) {
    if (e.isOpen && !e.config.inline) {
      var u = Ge(c), g = U(u), y = u === e.input || u === e.altInput || e.element.contains(u) || c.path && c.path.indexOf && (~c.path.indexOf(e.input) || ~c.path.indexOf(e.altInput)), W = !y && !g && !U(c.relatedTarget), G = !e.config.ignoredFocusElements.some(function(fe) {
        return fe.contains(u);
      });
      W && G && (e.config.allowInput && e.setDate(e._input.value, !1, e.config.altInput ? e.config.altFormat : e.config.dateFormat), e.timeContainer !== void 0 && e.minuteElement !== void 0 && e.hourElement !== void 0 && e.input.value !== "" && e.input.value !== void 0 && l(), e.close(), e.config && e.config.mode === "range" && e.selectedDates.length === 1 && e.clear(!1));
    }
  }
  function oe(c) {
    if (!(!c || e.config.minDate && c < e.config.minDate.getFullYear() || e.config.maxDate && c > e.config.maxDate.getFullYear())) {
      var u = c, g = e.currentYear !== u;
      e.currentYear = u || e.currentYear, e.config.maxDate && e.currentYear === e.config.maxDate.getFullYear() ? e.currentMonth = Math.min(e.config.maxDate.getMonth(), e.currentMonth) : e.config.minDate && e.currentYear === e.config.minDate.getFullYear() && (e.currentMonth = Math.max(e.config.minDate.getMonth(), e.currentMonth)), g && (e.redraw(), Z("onYearChange"), Q());
    }
  }
  function de(c, u) {
    var g;
    u === void 0 && (u = !0);
    var y = e.parseDate(c, void 0, u);
    if (e.config.minDate && y && Xe(y, e.config.minDate, u !== void 0 ? u : !e.minDateHasTime) < 0 || e.config.maxDate && y && Xe(y, e.config.maxDate, u !== void 0 ? u : !e.maxDateHasTime) > 0)
      return !1;
    if (!e.config.enable && e.config.disable.length === 0)
      return !0;
    if (y === void 0)
      return !1;
    for (var W = !!e.config.enable, G = (g = e.config.enable) !== null && g !== void 0 ? g : e.config.disable, fe = 0, ne = void 0; fe < G.length; fe++) {
      if (ne = G[fe], typeof ne == "function" && ne(y))
        return W;
      if (ne instanceof Date && y !== void 0 && ne.getTime() === y.getTime())
        return W;
      if (typeof ne == "string") {
        var he = e.parseDate(ne, void 0, !0);
        return he && he.getTime() === y.getTime() ? W : !W;
      } else if (typeof ne == "object" && y !== void 0 && ne.from && ne.to && y.getTime() >= ne.from.getTime() && y.getTime() <= ne.to.getTime())
        return W;
    }
    return !W;
  }
  function we(c) {
    return e.daysContainer !== void 0 ? c.className.indexOf("hidden") === -1 && c.className.indexOf("flatpickr-disabled") === -1 && e.daysContainer.contains(c) : !1;
  }
  function _e(c) {
    var u = c.target === e._input, g = e._input.value.trimEnd() !== it();
    u && g && !(c.relatedTarget && U(c.relatedTarget)) && e.setDate(e._input.value, !0, c.target === e.altInput ? e.config.altFormat : e.config.dateFormat);
  }
  function Se(c) {
    var u = Ge(c), g = e.config.wrap ? n.contains(u) : u === e._input, y = e.config.allowInput, W = e.isOpen && (!y || !g), G = e.config.inline && g && !y;
    if (c.keyCode === 13 && g) {
      if (y)
        return e.setDate(e._input.value, !0, u === e.altInput ? e.config.altFormat : e.config.dateFormat), e.close(), u.blur();
      e.open();
    } else if (U(u) || W || G) {
      var fe = !!e.timeContainer && e.timeContainer.contains(u);
      switch (c.keyCode) {
        case 13:
          fe ? (c.preventDefault(), l(), Ht()) : Ct(c);
          break;
        case 27:
          c.preventDefault(), Ht();
          break;
        case 8:
        case 46:
          g && !e.config.allowInput && (c.preventDefault(), e.clear());
          break;
        case 37:
        case 39:
          if (!fe && !g) {
            c.preventDefault();
            var ne = o();
            if (e.daysContainer !== void 0 && (y === !1 || ne && we(ne))) {
              var he = c.keyCode === 39 ? 1 : -1;
              c.ctrlKey ? (c.stopPropagation(), re(he), H(w(1), 0)) : H(void 0, he);
            }
          } else
            e.hourElement && e.hourElement.focus();
          break;
        case 38:
        case 40:
          c.preventDefault();
          var J = c.keyCode === 40 ? 1 : -1;
          e.daysContainer && u.$i !== void 0 || u === e.input || u === e.altInput ? c.ctrlKey ? (c.stopPropagation(), oe(e.currentYear - J), H(w(1), 0)) : fe || H(void 0, J * 7) : u === e.currentYearElement ? oe(e.currentYear - J) : e.config.enableTime && (!fe && e.hourElement && e.hourElement.focus(), l(c), e._debouncedChange());
          break;
        case 9:
          if (fe) {
            var le = [
              e.hourElement,
              e.minuteElement,
              e.secondElement,
              e.amPM
            ].concat(e.pluginElements).filter(function(ze) {
              return ze;
            }), Ee = le.indexOf(u);
            if (Ee !== -1) {
              var yt = le[Ee + (c.shiftKey ? -1 : 1)];
              c.preventDefault(), (yt || e._input).focus();
            }
          } else
            !e.config.noCalendar && e.daysContainer && e.daysContainer.contains(u) && c.shiftKey && (c.preventDefault(), e._input.focus());
          break;
      }
    }
    if (e.amPM !== void 0 && u === e.amPM)
      switch (c.key) {
        case e.l10n.amPM[0].charAt(0):
        case e.l10n.amPM[0].charAt(0).toLowerCase():
          e.amPM.textContent = e.l10n.amPM[0], v(), ke();
          break;
        case e.l10n.amPM[1].charAt(0):
        case e.l10n.amPM[1].charAt(0).toLowerCase():
          e.amPM.textContent = e.l10n.amPM[1], v(), ke();
          break;
      }
    (g || U(u)) && Z("onKeyDown", c);
  }
  function xe(c, u) {
    if (u === void 0 && (u = "flatpickr-day"), !(e.selectedDates.length !== 1 || c && (!c.classList.contains(u) || c.classList.contains("flatpickr-disabled")))) {
      for (var g = c ? c.dateObj.getTime() : e.days.firstElementChild.dateObj.getTime(), y = e.parseDate(e.selectedDates[0], void 0, !0).getTime(), W = Math.min(g, e.selectedDates[0].getTime()), G = Math.max(g, e.selectedDates[0].getTime()), fe = !1, ne = 0, he = 0, J = W; J < G; J += Uh.DAY)
        de(new Date(J), !0) || (fe = fe || J > W && J < G, J < y && (!ne || J > ne) ? ne = J : J > y && (!he || J < he) && (he = J));
      var le = Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+" + e.config.showMonths + ") > ." + u));
      le.forEach(function(Ee) {
        var yt = Ee.dateObj, ze = yt.getTime(), Hn = ne > 0 && ze < ne || he > 0 && ze > he;
        if (Hn) {
          Ee.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function(pn) {
            Ee.classList.remove(pn);
          });
          return;
        } else if (fe && !Hn)
          return;
        ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(pn) {
          Ee.classList.remove(pn);
        }), c !== void 0 && (c.classList.add(g <= e.selectedDates[0].getTime() ? "startRange" : "endRange"), y < g && ze === y ? Ee.classList.add("startRange") : y > g && ze === y && Ee.classList.add("endRange"), ze >= ne && (he === 0 || ze <= he) && Vh(ze, y, g) && Ee.classList.add("inRange"));
      });
    }
  }
  function Le() {
    e.isOpen && !e.config.static && !e.config.inline && tt();
  }
  function gt(c, u) {
    if (u === void 0 && (u = e._positionElement), e.isMobile === !0) {
      if (c) {
        c.preventDefault();
        var g = Ge(c);
        g && g.blur();
      }
      e.mobileInput !== void 0 && (e.mobileInput.focus(), e.mobileInput.click()), Z("onOpen");
      return;
    } else if (e._input.disabled || e.config.inline)
      return;
    var y = e.isOpen;
    e.isOpen = !0, y || (e.calendarContainer.classList.add("open"), e._input.classList.add("active"), Z("onOpen"), tt(u)), e.config.enableTime === !0 && e.config.noCalendar === !0 && e.config.allowInput === !1 && (c === void 0 || !e.timeContainer.contains(c.relatedTarget)) && setTimeout(function() {
      return e.hourElement.select();
    }, 50);
  }
  function ut(c) {
    return function(u) {
      var g = e.config["_" + c + "Date"] = e.parseDate(u, e.config.dateFormat), y = e.config["_" + (c === "min" ? "max" : "min") + "Date"];
      g !== void 0 && (e[c === "min" ? "minDateHasTime" : "maxDateHasTime"] = g.getHours() > 0 || g.getMinutes() > 0 || g.getSeconds() > 0), e.selectedDates && (e.selectedDates = e.selectedDates.filter(function(W) {
        return de(W);
      }), !e.selectedDates.length && c === "min" && b(g), ke()), e.daysContainer && (qt(), g !== void 0 ? e.currentYearElement[c] = g.getFullYear().toString() : e.currentYearElement.removeAttribute(c), e.currentYearElement.disabled = !!y && g !== void 0 && y.getFullYear() === g.getFullYear());
    };
  }
  function vt() {
    var c = [
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
    ], u = Ye(Ye({}, JSON.parse(JSON.stringify(n.dataset || {}))), t), g = {};
    e.config.parseDate = u.parseDate, e.config.formatDate = u.formatDate, Object.defineProperty(e.config, "enable", {
      get: function() {
        return e.config._enable;
      },
      set: function(le) {
        e.config._enable = hn(le);
      }
    }), Object.defineProperty(e.config, "disable", {
      get: function() {
        return e.config._disable;
      },
      set: function(le) {
        e.config._disable = hn(le);
      }
    });
    var y = u.mode === "time";
    if (!u.dateFormat && (u.enableTime || y)) {
      var W = $e.defaultConfig.dateFormat || An.dateFormat;
      g.dateFormat = u.noCalendar || y ? "H:i" + (u.enableSeconds ? ":S" : "") : W + " H:i" + (u.enableSeconds ? ":S" : "");
    }
    if (u.altInput && (u.enableTime || y) && !u.altFormat) {
      var G = $e.defaultConfig.altFormat || An.altFormat;
      g.altFormat = u.noCalendar || y ? "h:i" + (u.enableSeconds ? ":S K" : " K") : G + (" h:i" + (u.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(e.config, "minDate", {
      get: function() {
        return e.config._minDate;
      },
      set: ut("min")
    }), Object.defineProperty(e.config, "maxDate", {
      get: function() {
        return e.config._maxDate;
      },
      set: ut("max")
    });
    var fe = function(le) {
      return function(Ee) {
        e.config[le === "min" ? "_minTime" : "_maxTime"] = e.parseDate(Ee, "H:i:S");
      };
    };
    Object.defineProperty(e.config, "minTime", {
      get: function() {
        return e.config._minTime;
      },
      set: fe("min")
    }), Object.defineProperty(e.config, "maxTime", {
      get: function() {
        return e.config._maxTime;
      },
      set: fe("max")
    }), u.mode === "time" && (e.config.noCalendar = !0, e.config.enableTime = !0), Object.assign(e.config, g, u);
    for (var ne = 0; ne < c.length; ne++)
      e.config[c[ne]] = e.config[c[ne]] === !0 || e.config[c[ne]] === "true";
    gr.filter(function(le) {
      return e.config[le] !== void 0;
    }).forEach(function(le) {
      e.config[le] = vr(e.config[le] || []).map(s);
    }), e.isMobile = !e.config.disableMobile && !e.config.inline && e.config.mode === "single" && !e.config.disable.length && !e.config.enable && !e.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var ne = 0; ne < e.config.plugins.length; ne++) {
      var he = e.config.plugins[ne](e) || {};
      for (var J in he)
        gr.indexOf(J) > -1 ? e.config[J] = vr(he[J]).map(s).concat(e.config[J]) : typeof u[J] > "u" && (e.config[J] = he[J]);
    }
    u.altInputClass || (e.config.altInputClass = ft().className + " " + e.config.altInputClass), Z("onParseConfig");
  }
  function ft() {
    return e.config.wrap ? n.querySelector("[data-input]") : n;
  }
  function _t() {
    typeof e.config.locale != "object" && typeof $e.l10ns[e.config.locale] > "u" && e.config.errorHandler(new Error("flatpickr: invalid locale " + e.config.locale)), e.l10n = Ye(Ye({}, $e.l10ns.default), typeof e.config.locale == "object" ? e.config.locale : e.config.locale !== "default" ? $e.l10ns[e.config.locale] : void 0), Jt.D = "(" + e.l10n.weekdays.shorthand.join("|") + ")", Jt.l = "(" + e.l10n.weekdays.longhand.join("|") + ")", Jt.M = "(" + e.l10n.months.shorthand.join("|") + ")", Jt.F = "(" + e.l10n.months.longhand.join("|") + ")", Jt.K = "(" + e.l10n.amPM[0] + "|" + e.l10n.amPM[1] + "|" + e.l10n.amPM[0].toLowerCase() + "|" + e.l10n.amPM[1].toLowerCase() + ")";
    var c = Ye(Ye({}, t), JSON.parse(JSON.stringify(n.dataset || {})));
    c.time_24hr === void 0 && $e.defaultConfig.time_24hr === void 0 && (e.config.time_24hr = e.l10n.time_24hr), e.formatDate = Ms(e), e.parseDate = Ir({ config: e.config, l10n: e.l10n });
  }
  function tt(c) {
    if (typeof e.config.position == "function")
      return void e.config.position(e, c);
    if (e.calendarContainer !== void 0) {
      Z("onPreCalendarPosition");
      var u = c || e._positionElement, g = Array.prototype.reduce.call(e.calendarContainer.children, function(Ws, Bs) {
        return Ws + Bs.offsetHeight;
      }, 0), y = e.calendarContainer.offsetWidth, W = e.config.position.split(" "), G = W[0], fe = W.length > 1 ? W[1] : null, ne = u.getBoundingClientRect(), he = window.innerHeight - ne.bottom, J = G === "above" || G !== "below" && he < g && ne.top > g, le = window.pageYOffset + ne.top + (J ? -g - 2 : u.offsetHeight + 2);
      if (He(e.calendarContainer, "arrowTop", !J), He(e.calendarContainer, "arrowBottom", J), !e.config.inline) {
        var Ee = window.pageXOffset + ne.left, yt = !1, ze = !1;
        fe === "center" ? (Ee -= (y - ne.width) / 2, yt = !0) : fe === "right" && (Ee -= y - ne.width, ze = !0), He(e.calendarContainer, "arrowLeft", !yt && !ze), He(e.calendarContainer, "arrowCenter", yt), He(e.calendarContainer, "arrowRight", ze);
        var Hn = window.document.body.offsetWidth - (window.pageXOffset + ne.right), pn = Ee + y > window.document.body.offsetWidth, ks = Hn + y > window.document.body.offsetWidth;
        if (He(e.calendarContainer, "rightMost", pn), !e.config.static)
          if (e.calendarContainer.style.top = le + "px", !pn)
            e.calendarContainer.style.left = Ee + "px", e.calendarContainer.style.right = "auto";
          else if (!ks)
            e.calendarContainer.style.left = "auto", e.calendarContainer.style.right = Hn + "px";
          else {
            var Ki = nt();
            if (Ki === void 0)
              return;
            var Ps = window.document.body.offsetWidth, Rs = Math.max(0, Ps / 2 - y / 2), Ys = ".flatpickr-calendar.centerMost:before", Hs = ".flatpickr-calendar.centerMost:after", Fs = Ki.cssRules.length, js = "{left:" + ne.left + "px;right:auto;}";
            He(e.calendarContainer, "rightMost", !1), He(e.calendarContainer, "centerMost", !0), Ki.insertRule(Ys + "," + Hs + js, Fs), e.calendarContainer.style.left = Rs + "px", e.calendarContainer.style.right = "auto";
          }
      }
    }
  }
  function nt() {
    for (var c = null, u = 0; u < document.styleSheets.length; u++) {
      var g = document.styleSheets[u];
      if (g.cssRules) {
        try {
          g.cssRules;
        } catch {
          continue;
        }
        c = g;
        break;
      }
    }
    return c ?? Yt();
  }
  function Yt() {
    var c = document.createElement("style");
    return document.head.appendChild(c), c.sheet;
  }
  function qt() {
    e.config.noCalendar || e.isMobile || (Q(), Ne(), te());
  }
  function Ht() {
    e._input.focus(), window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0 ? setTimeout(e.close, 0) : e.close();
  }
  function Ct(c) {
    c.preventDefault(), c.stopPropagation();
    var u = function(le) {
      return le.classList && le.classList.contains("flatpickr-day") && !le.classList.contains("flatpickr-disabled") && !le.classList.contains("notAllowed");
    }, g = Os(Ge(c), u);
    if (g !== void 0) {
      var y = g, W = e.latestSelectedDateObj = new Date(y.dateObj.getTime()), G = (W.getMonth() < e.currentMonth || W.getMonth() > e.currentMonth + e.config.showMonths - 1) && e.config.mode !== "range";
      if (e.selectedDateElem = y, e.config.mode === "single")
        e.selectedDates = [W];
      else if (e.config.mode === "multiple") {
        var fe = Ie(W);
        fe ? e.selectedDates.splice(parseInt(fe), 1) : e.selectedDates.push(W);
      } else
        e.config.mode === "range" && (e.selectedDates.length === 2 && e.clear(!1, !1), e.latestSelectedDateObj = W, e.selectedDates.push(W), Xe(W, e.selectedDates[0], !0) !== 0 && e.selectedDates.sort(function(le, Ee) {
          return le.getTime() - Ee.getTime();
        }));
      if (v(), G) {
        var ne = e.currentYear !== W.getFullYear();
        e.currentYear = W.getFullYear(), e.currentMonth = W.getMonth(), ne && (Z("onYearChange"), Q()), Z("onMonthChange");
      }
      if (Ne(), te(), ke(), !G && e.config.mode !== "range" && e.config.showMonths === 1 ? p(y) : e.selectedDateElem !== void 0 && e.hourElement === void 0 && e.selectedDateElem && e.selectedDateElem.focus(), e.hourElement !== void 0 && e.hourElement !== void 0 && e.hourElement.focus(), e.config.closeOnSelect) {
        var he = e.config.mode === "single" && !e.config.enableTime, J = e.config.mode === "range" && e.selectedDates.length === 2 && !e.config.enableTime;
        (he || J) && Ht();
      }
      _();
    }
  }
  var Te = {
    locale: [_t, z],
    showMonths: [N, a, $],
    minDate: [O],
    maxDate: [O],
    positionElement: [S],
    clickOpens: [
      function() {
        e.config.clickOpens === !0 ? (m(e._input, "focus", e.open), m(e._input, "click", e.open)) : (e._input.removeEventListener("focus", e.open), e._input.removeEventListener("click", e.open));
      }
    ]
  };
  function ge(c, u) {
    if (c !== null && typeof c == "object") {
      Object.assign(e.config, c);
      for (var g in c)
        Te[g] !== void 0 && Te[g].forEach(function(y) {
          return y();
        });
    } else
      e.config[c] = u, Te[c] !== void 0 ? Te[c].forEach(function(y) {
        return y();
      }) : gr.indexOf(c) > -1 && (e.config[c] = vr(u));
    e.redraw(), ke(!0);
  }
  function bt(c, u) {
    var g = [];
    if (c instanceof Array)
      g = c.map(function(y) {
        return e.parseDate(y, u);
      });
    else if (c instanceof Date || typeof c == "number")
      g = [e.parseDate(c, u)];
    else if (typeof c == "string")
      switch (e.config.mode) {
        case "single":
        case "time":
          g = [e.parseDate(c, u)];
          break;
        case "multiple":
          g = c.split(e.config.conjunction).map(function(y) {
            return e.parseDate(y, u);
          });
          break;
        case "range":
          g = c.split(e.l10n.rangeSeparator).map(function(y) {
            return e.parseDate(y, u);
          });
          break;
      }
    else
      e.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(c)));
    e.selectedDates = e.config.allowInvalidPreload ? g : g.filter(function(y) {
      return y instanceof Date && de(y, !1);
    }), e.config.mode === "range" && e.selectedDates.sort(function(y, W) {
      return y.getTime() - W.getTime();
    });
  }
  function dn(c, u, g) {
    if (u === void 0 && (u = !1), g === void 0 && (g = e.config.dateFormat), c !== 0 && !c || c instanceof Array && c.length === 0)
      return e.clear(u);
    bt(c, g), e.latestSelectedDateObj = e.selectedDates[e.selectedDates.length - 1], e.redraw(), O(void 0, u), b(), e.selectedDates.length === 0 && e.clear(!1), ke(u), u && Z("onChange");
  }
  function hn(c) {
    return c.slice().map(function(u) {
      return typeof u == "string" || typeof u == "number" || u instanceof Date ? e.parseDate(u, void 0, !0) : u && typeof u == "object" && u.from && u.to ? {
        from: e.parseDate(u.from, void 0),
        to: e.parseDate(u.to, void 0)
      } : u;
    }).filter(function(u) {
      return u;
    });
  }
  function h() {
    e.selectedDates = [], e.now = e.parseDate(e.config.now) || /* @__PURE__ */ new Date();
    var c = e.config.defaultDate || ((e.input.nodeName === "INPUT" || e.input.nodeName === "TEXTAREA") && e.input.placeholder && e.input.value === e.input.placeholder ? null : e.input.value);
    c && bt(c, e.config.dateFormat), e._initialDate = e.selectedDates.length > 0 ? e.selectedDates[0] : e.config.minDate && e.config.minDate.getTime() > e.now.getTime() ? e.config.minDate : e.config.maxDate && e.config.maxDate.getTime() < e.now.getTime() ? e.config.maxDate : e.now, e.currentYear = e._initialDate.getFullYear(), e.currentMonth = e._initialDate.getMonth(), e.selectedDates.length > 0 && (e.latestSelectedDateObj = e.selectedDates[0]), e.config.minTime !== void 0 && (e.config.minTime = e.parseDate(e.config.minTime, "H:i")), e.config.maxTime !== void 0 && (e.config.maxTime = e.parseDate(e.config.maxTime, "H:i")), e.minDateHasTime = !!e.config.minDate && (e.config.minDate.getHours() > 0 || e.config.minDate.getMinutes() > 0 || e.config.minDate.getSeconds() > 0), e.maxDateHasTime = !!e.config.maxDate && (e.config.maxDate.getHours() > 0 || e.config.maxDate.getMinutes() > 0 || e.config.maxDate.getSeconds() > 0);
  }
  function C() {
    if (e.input = ft(), !e.input) {
      e.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    e.input._type = e.input.type, e.input.type = "text", e.input.classList.add("flatpickr-input"), e._input = e.input, e.config.altInput && (e.altInput = ve(e.input.nodeName, e.config.altInputClass), e._input = e.altInput, e.altInput.placeholder = e.input.placeholder, e.altInput.disabled = e.input.disabled, e.altInput.required = e.input.required, e.altInput.tabIndex = e.input.tabIndex, e.altInput.type = "text", e.input.setAttribute("type", "hidden"), !e.config.static && e.input.parentNode && e.input.parentNode.insertBefore(e.altInput, e.input.nextSibling)), e.config.allowInput || e._input.setAttribute("readonly", "readonly"), S();
  }
  function S() {
    e._positionElement = e.config.positionElement || e._input;
  }
  function X() {
    var c = e.config.enableTime ? e.config.noCalendar ? "time" : "datetime-local" : "date";
    e.mobileInput = ve("input", e.input.className + " flatpickr-mobile"), e.mobileInput.tabIndex = 1, e.mobileInput.type = c, e.mobileInput.disabled = e.input.disabled, e.mobileInput.required = e.input.required, e.mobileInput.placeholder = e.input.placeholder, e.mobileFormatStr = c === "datetime-local" ? "Y-m-d\\TH:i:S" : c === "date" ? "Y-m-d" : "H:i:S", e.selectedDates.length > 0 && (e.mobileInput.defaultValue = e.mobileInput.value = e.formatDate(e.selectedDates[0], e.mobileFormatStr)), e.config.minDate && (e.mobileInput.min = e.formatDate(e.config.minDate, "Y-m-d")), e.config.maxDate && (e.mobileInput.max = e.formatDate(e.config.maxDate, "Y-m-d")), e.input.getAttribute("step") && (e.mobileInput.step = String(e.input.getAttribute("step"))), e.input.type = "hidden", e.altInput !== void 0 && (e.altInput.type = "hidden");
    try {
      e.input.parentNode && e.input.parentNode.insertBefore(e.mobileInput, e.input.nextSibling);
    } catch {
    }
    m(e.mobileInput, "change", function(u) {
      e.setDate(Ge(u).value, !1, e.mobileFormatStr), Z("onChange"), Z("onClose");
    });
  }
  function ie(c) {
    if (e.isOpen === !0)
      return e.close();
    e.open(c);
  }
  function Z(c, u) {
    if (e.config !== void 0) {
      var g = e.config[c];
      if (g !== void 0 && g.length > 0)
        for (var y = 0; g[y] && y < g.length; y++)
          g[y](e.selectedDates, e.input.value, e, u);
      c === "onChange" && (e.input.dispatchEvent(ye("change")), e.input.dispatchEvent(ye("input")));
    }
  }
  function ye(c) {
    var u = document.createEvent("Event");
    return u.initEvent(c, !0, !0), u;
  }
  function Ie(c) {
    for (var u = 0; u < e.selectedDates.length; u++) {
      var g = e.selectedDates[u];
      if (g instanceof Date && Xe(g, c) === 0)
        return "" + u;
    }
    return !1;
  }
  function be(c) {
    return e.config.mode !== "range" || e.selectedDates.length < 2 ? !1 : Xe(c, e.selectedDates[0]) >= 0 && Xe(c, e.selectedDates[1]) <= 0;
  }
  function Ne() {
    e.config.noCalendar || e.isMobile || !e.monthNav || (e.yearElements.forEach(function(c, u) {
      var g = new Date(e.currentYear, e.currentMonth, 1);
      g.setMonth(e.currentMonth + u), e.config.showMonths > 1 || e.config.monthSelectorType === "static" ? e.monthElements[u].textContent = Hi(g.getMonth(), e.config.shorthandCurrentMonth, e.l10n) + " " : e.monthsDropdownContainer.value = g.getMonth().toString(), c.value = g.getFullYear().toString();
    }), e._hidePrevMonthArrow = e.config.minDate !== void 0 && (e.currentYear === e.config.minDate.getFullYear() ? e.currentMonth <= e.config.minDate.getMonth() : e.currentYear < e.config.minDate.getFullYear()), e._hideNextMonthArrow = e.config.maxDate !== void 0 && (e.currentYear === e.config.maxDate.getFullYear() ? e.currentMonth + 1 > e.config.maxDate.getMonth() : e.currentYear > e.config.maxDate.getFullYear()));
  }
  function it(c) {
    var u = c || (e.config.altInput ? e.config.altFormat : e.config.dateFormat);
    return e.selectedDates.map(function(g) {
      return e.formatDate(g, u);
    }).filter(function(g, y, W) {
      return e.config.mode !== "range" || e.config.enableTime || W.indexOf(g) === y;
    }).join(e.config.mode !== "range" ? e.config.conjunction : e.l10n.rangeSeparator);
  }
  function ke(c) {
    c === void 0 && (c = !0), e.mobileInput !== void 0 && e.mobileFormatStr && (e.mobileInput.value = e.latestSelectedDateObj !== void 0 ? e.formatDate(e.latestSelectedDateObj, e.mobileFormatStr) : ""), e.input.value = it(e.config.dateFormat), e.altInput !== void 0 && (e.altInput.value = it(e.config.altFormat)), c !== !1 && Z("onValueUpdate");
  }
  function Ls(c) {
    var u = Ge(c), g = e.prevMonthNav.contains(u), y = e.nextMonthNav.contains(u);
    g || y ? re(g ? -1 : 1) : e.yearElements.indexOf(u) >= 0 ? u.select() : u.classList.contains("arrowUp") ? e.changeYear(e.currentYear + 1) : u.classList.contains("arrowDown") && e.changeYear(e.currentYear - 1);
  }
  function Is(c) {
    c.preventDefault();
    var u = c.type === "keydown", g = Ge(c), y = g;
    e.amPM !== void 0 && g === e.amPM && (e.amPM.textContent = e.l10n.amPM[rt(e.amPM.textContent === e.l10n.amPM[0])]);
    var W = parseFloat(y.getAttribute("min")), G = parseFloat(y.getAttribute("max")), fe = parseFloat(y.getAttribute("step")), ne = parseInt(y.value, 10), he = c.delta || (u ? c.which === 38 ? 1 : -1 : 0), J = ne + fe * he;
    if (typeof y.value < "u" && y.value.length === 2) {
      var le = y === e.hourElement, Ee = y === e.minuteElement;
      J < W ? (J = G + J + rt(!le) + (rt(le) && rt(!e.amPM)), Ee && I(void 0, -1, e.hourElement)) : J > G && (J = y === e.hourElement ? J - G - rt(!e.amPM) : W, Ee && I(void 0, 1, e.hourElement)), e.amPM && le && (fe === 1 ? J + ne === 23 : Math.abs(J - ne) > fe) && (e.amPM.textContent = e.l10n.amPM[rt(e.amPM.textContent === e.l10n.amPM[0])]), y.value = Ve(J);
    }
  }
  return r(), e;
}
function Sn(n, t) {
  for (var e = Array.prototype.slice.call(n).filter(function(s) {
    return s instanceof HTMLElement;
  }), i = [], r = 0; r < e.length; r++) {
    var o = e[r];
    try {
      if (o.getAttribute("data-fp-omit") !== null)
        continue;
      o._flatpickr !== void 0 && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = Gh(o, t || {}), i.push(o._flatpickr);
    } catch (s) {
      console.error(s);
    }
  }
  return i.length === 1 ? i[0] : i;
}
typeof HTMLElement < "u" && typeof HTMLCollection < "u" && typeof NodeList < "u" && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(n) {
  return Sn(this, n);
}, HTMLElement.prototype.flatpickr = function(n) {
  return Sn([this], n);
});
var $e = function(n, t) {
  return typeof n == "string" ? Sn(window.document.querySelectorAll(n), t) : n instanceof Node ? Sn([n], t) : Sn(n, t);
};
$e.defaultConfig = {};
$e.l10ns = {
  en: Ye({}, Jn),
  default: Ye({}, Jn)
};
$e.localize = function(n) {
  $e.l10ns.default = Ye(Ye({}, $e.l10ns.default), n);
};
$e.setDefaults = function(n) {
  $e.defaultConfig = Ye(Ye({}, $e.defaultConfig), n);
};
$e.parseDate = Ir({});
$e.formatDate = Ms({});
$e.compareDates = Xe;
typeof jQuery < "u" && typeof jQuery.fn < "u" && (jQuery.fn.flatpickr = function(n) {
  return Sn(this, n);
});
Date.prototype.fp_incr = function(n) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof n == "string" ? parseInt(n, 10) : n));
};
typeof window < "u" && (window.flatpickr = $e);
const Rt = (() => {
  /*!
  * Copyright (c) 2021-2024 Momo Bassit.
  * Licensed under the MIT License (MIT)
  * https://github.com/mdbassit/Coloris
  * Version: 0.25.0
  * NPM: https://github.com/melloware/coloris-npm
  */
  return ((n, t, e, i) => {
    const r = t.createElement("canvas").getContext("2d"), o = { r: 0, g: 0, b: 0, h: 0, s: 0, v: 0, a: 1 };
    let s, a, l, f, d, v, b, E, D, m, _, M, O, L, I, V, A = {};
    const p = {
      el: "[data-coloris]",
      parent: "body",
      theme: "default",
      themeMode: "light",
      rtl: !1,
      wrap: !0,
      margin: 2,
      format: "hex",
      formatToggle: !1,
      swatches: [],
      swatchesOnly: !1,
      alpha: !0,
      forceAlpha: !1,
      focusInput: !0,
      selectInput: !1,
      inline: !1,
      defaultColor: "#000000",
      clearButton: !1,
      clearLabel: "Clear",
      closeButton: !1,
      closeLabel: "Close",
      onChange: () => i,
      a11y: {
        open: "Open color picker",
        close: "Close color picker",
        clear: "Clear the selected color",
        marker: "Saturation: {s}. Brightness: {v}.",
        hueSlider: "Hue slider",
        alphaSlider: "Opacity slider",
        input: "Color value field",
        format: "Color format",
        swatch: "Color swatch",
        instruction: "Saturation and brightness selector. Use up, down, left and right arrow keys to select."
      }
    }, w = {};
    let Y = "", H = {}, k = !1;
    function te(h) {
      if (typeof h == "object")
        for (const C in h)
          switch (C) {
            case "el":
              j(h.el), h.wrap !== !1 && ee(h.el);
              break;
            case "parent":
              s = h.parent instanceof HTMLElement ? h.parent : t.querySelector(h.parent), s && (s.appendChild(a), p.parent = h.parent, s === t.body && (s = i));
              break;
            case "themeMode":
              p.themeMode = h.themeMode, h.themeMode === "auto" && n.matchMedia && n.matchMedia("(prefers-color-scheme: dark)").matches && (p.themeMode = "dark");
            case "theme":
              h.theme && (p.theme = h.theme), a.className = `clr-picker clr-${p.theme} clr-${p.themeMode}`, p.inline && z();
              break;
            case "rtl":
              p.rtl = !!h.rtl, Array.from(t.getElementsByClassName("clr-field")).forEach((ie) => ie.classList.toggle("clr-rtl", p.rtl));
              break;
            case "margin":
              h.margin *= 1, p.margin = isNaN(h.margin) ? p.margin : h.margin;
              break;
            case "wrap":
              h.el && h.wrap && ee(h.el);
              break;
            case "formatToggle":
              p.formatToggle = !!h.formatToggle, Te("clr-format").style.display = p.formatToggle ? "block" : "none", p.formatToggle && (p.format = "auto");
              break;
            case "swatches":
              if (Array.isArray(h.swatches)) {
                const ie = Te("clr-swatches"), Z = t.createElement("div");
                ie.textContent = "", h.swatches.forEach((ye, Ie) => {
                  const be = t.createElement("button");
                  be.setAttribute("type", "button"), be.setAttribute("id", `clr-swatch-${Ie}`), be.setAttribute("aria-labelledby", `clr-swatch-label clr-swatch-${Ie}`), be.style.color = ye, be.textContent = ye, Z.appendChild(be);
                }), h.swatches.length && ie.appendChild(Z), p.swatches = h.swatches.slice();
              }
              break;
            case "swatchesOnly":
              p.swatchesOnly = !!h.swatchesOnly, a.setAttribute("data-minimal", p.swatchesOnly);
              break;
            case "alpha":
              p.alpha = !!h.alpha, a.setAttribute("data-alpha", p.alpha);
              break;
            case "inline":
              if (p.inline = !!h.inline, a.setAttribute("data-inline", p.inline), p.inline) {
                const ie = h.defaultColor || p.defaultColor;
                L = U(ie), z(), R(ie);
              }
              break;
            case "clearButton":
              typeof h.clearButton == "object" && (h.clearButton.label && (p.clearLabel = h.clearButton.label, b.innerHTML = p.clearLabel), h.clearButton = h.clearButton.show), p.clearButton = !!h.clearButton, b.style.display = p.clearButton ? "block" : "none";
              break;
            case "clearLabel":
              p.clearLabel = h.clearLabel, b.innerHTML = p.clearLabel;
              break;
            case "closeButton":
              p.closeButton = !!h.closeButton, p.closeButton ? a.insertBefore(E, d) : d.appendChild(E);
              break;
            case "closeLabel":
              p.closeLabel = h.closeLabel, E.innerHTML = p.closeLabel;
              break;
            case "a11y":
              const S = h.a11y;
              let X = !1;
              if (typeof S == "object")
                for (const ie in S)
                  S[ie] && p.a11y[ie] && (p.a11y[ie] = S[ie], X = !0);
              if (X) {
                const ie = Te("clr-open-label"), Z = Te("clr-swatch-label");
                ie.innerHTML = p.a11y.open, Z.innerHTML = p.a11y.swatch, E.setAttribute("aria-label", p.a11y.close), b.setAttribute("aria-label", p.a11y.clear), D.setAttribute("aria-label", p.a11y.hueSlider), _.setAttribute("aria-label", p.a11y.alphaSlider), v.setAttribute("aria-label", p.a11y.input), l.setAttribute("aria-label", p.a11y.instruction);
              }
              break;
            default:
              p[C] = h[C];
          }
    }
    function Q(h, C) {
      typeof h == "string" && typeof C == "object" && (w[h] = C, k = !0);
    }
    function F(h) {
      delete w[h], Object.keys(w).length === 0 && (k = !1, h === Y && T());
    }
    function N(h) {
      if (k) {
        const C = ["el", "wrap", "rtl", "inline", "defaultColor", "a11y"];
        for (let S in w) {
          const X = w[S];
          if (h.matches(S)) {
            Y = S, H = {}, C.forEach((ie) => delete X[ie]);
            for (let ie in X)
              H[ie] = Array.isArray(p[ie]) ? p[ie].slice() : p[ie];
            te(X);
            break;
          }
        }
      }
    }
    function T() {
      Object.keys(H).length > 0 && (te(H), Y = "", H = {});
    }
    function j(h) {
      h instanceof HTMLElement && (h = [h]), Array.isArray(h) ? h.forEach((C) => {
        ge(C, "click", $), ge(C, "input", K);
      }) : (ge(t, "click", h, $), ge(t, "input", h, K));
    }
    function $(h) {
      p.inline || (N(h.target), O = h.target, I = O.value, L = U(I), a.classList.add("clr-open"), z(), R(I), (p.focusInput || p.selectInput) && (v.focus({ preventScroll: !0 }), v.setSelectionRange(O.selectionStart, O.selectionEnd)), p.selectInput && v.select(), (V || p.swatchesOnly) && Ct().shift().focus(), O.dispatchEvent(new Event("open", { bubbles: !1 })));
    }
    function z() {
      if (!a || !O && !p.inline)
        return;
      const h = s, C = n.scrollY, S = a.offsetWidth, X = a.offsetHeight, ie = { left: !1, top: !1 };
      let Z, ye, Ie, be = { x: 0, y: 0 };
      if (h && (Z = n.getComputedStyle(h), ye = parseFloat(Z.marginTop), Ie = parseFloat(Z.borderTopWidth), be = h.getBoundingClientRect(), be.y += Ie + C), !p.inline) {
        const Ne = O.getBoundingClientRect();
        let it = Ne.x, ke = C + Ne.y + Ne.height + p.margin;
        h ? (it -= be.x, ke -= be.y, it + S > h.clientWidth && (it += Ne.width - S, ie.left = !0), ke + X > h.clientHeight - ye && X + p.margin <= Ne.top - (be.y - C) && (ke -= Ne.height + X + p.margin * 2, ie.top = !0), ke += h.scrollTop) : (it + S > t.documentElement.clientWidth && (it += Ne.width - S, ie.left = !0), ke + X - C > t.documentElement.clientHeight && X + p.margin <= Ne.top && (ke = C + Ne.y - X - p.margin, ie.top = !0)), a.classList.toggle("clr-left", ie.left), a.classList.toggle("clr-top", ie.top), a.style.left = `${it}px`, a.style.top = `${ke}px`, be.x += a.offsetLeft, be.y += a.offsetTop;
      }
      A = {
        width: l.offsetWidth,
        height: l.offsetHeight,
        x: l.offsetLeft + be.x,
        y: l.offsetTop + be.y
      };
    }
    function ee(h) {
      h instanceof HTMLElement ? re(h) : Array.isArray(h) ? h.forEach(re) : t.querySelectorAll(h).forEach(re);
    }
    function re(h) {
      const C = h.parentNode;
      if (!C.classList.contains("clr-field")) {
        const S = t.createElement("div");
        let X = "clr-field";
        (p.rtl || h.classList.contains("clr-rtl")) && (X += " clr-rtl"), S.innerHTML = '<button type="button" aria-labelledby="clr-open-label"></button>', C.insertBefore(S, h), S.className = X, S.style.color = h.value, S.appendChild(h);
      }
    }
    function K(h) {
      const C = h.target.parentNode;
      C.classList.contains("clr-field") && (C.style.color = h.target.value);
    }
    function P(h) {
      if (O && !p.inline) {
        const C = O;
        h && (O = i, I !== C.value && (C.value = I, C.dispatchEvent(new Event("input", { bubbles: !0 })))), setTimeout(() => {
          I !== C.value && C.dispatchEvent(new Event("change", { bubbles: !0 }));
        }), a.classList.remove("clr-open"), k && T(), C.dispatchEvent(new Event("close", { bubbles: !1 })), p.focusInput && C.focus({ preventScroll: !0 }), O = i;
      }
    }
    function R(h) {
      const C = tt(h), S = _t(C);
      de(S.s, S.v), Le(C, S), D.value = S.h, a.style.color = `hsl(${S.h}, 100%, 50%)`, m.style.left = `${S.h / 360 * 100}%`, f.style.left = `${A.width * S.s / 100}px`, f.style.top = `${A.height - A.height * S.v / 100}px`, _.value = S.a * 100, M.style.left = `${S.a * 100}%`;
    }
    function U(h) {
      const C = h.substring(0, 3).toLowerCase();
      return C === "rgb" || C === "hsl" ? C : "hex";
    }
    function q(h) {
      h = h !== i ? h : v.value, O && (O.value = h, O.dispatchEvent(new Event("input", { bubbles: !0 }))), p.onChange && p.onChange.call(n, h, O), t.dispatchEvent(new CustomEvent("coloris:pick", { detail: { color: h, currentEl: O } }));
    }
    function oe(h, C) {
      const S = {
        h: D.value * 1,
        s: h / A.width * 100,
        v: 100 - C / A.height * 100,
        a: _.value / 100
      }, X = vt(S);
      de(S.s, S.v), Le(X, S), q();
    }
    function de(h, C) {
      let S = p.a11y.marker;
      h = h.toFixed(1) * 1, C = C.toFixed(1) * 1, S = S.replace("{s}", h), S = S.replace("{v}", C), f.setAttribute("aria-label", S);
    }
    function we(h) {
      return {
        pageX: h.changedTouches ? h.changedTouches[0].pageX : h.pageX,
        pageY: h.changedTouches ? h.changedTouches[0].pageY : h.pageY
      };
    }
    function _e(h) {
      const C = we(h);
      let S = C.pageX - A.x, X = C.pageY - A.y;
      s && (X += s.scrollTop), xe(S, X), h.preventDefault(), h.stopPropagation();
    }
    function Se(h, C) {
      let S = f.style.left.replace("px", "") * 1 + h, X = f.style.top.replace("px", "") * 1 + C;
      xe(S, X);
    }
    function xe(h, C) {
      h = h < 0 ? 0 : h > A.width ? A.width : h, C = C < 0 ? 0 : C > A.height ? A.height : C, f.style.left = `${h}px`, f.style.top = `${C}px`, oe(h, C), f.focus();
    }
    function Le(h, C) {
      h === void 0 && (h = {}), C === void 0 && (C = {});
      let S = p.format;
      for (const Z in h)
        o[Z] = h[Z];
      for (const Z in C)
        o[Z] = C[Z];
      const X = nt(o), ie = X.substring(0, 7);
      switch (f.style.color = ie, M.parentNode.style.color = ie, M.style.color = X, d.style.color = X, l.style.display = "none", l.offsetHeight, l.style.display = "", M.nextElementSibling.style.display = "none", M.nextElementSibling.offsetHeight, M.nextElementSibling.style.display = "", S === "mixed" ? S = o.a === 1 ? "hex" : "rgb" : S === "auto" && (S = L), S) {
        case "hex":
          v.value = X;
          break;
        case "rgb":
          v.value = Yt(o);
          break;
        case "hsl":
          v.value = qt(ft(o));
          break;
      }
      t.querySelector(`.clr-format [value="${S}"]`).checked = !0;
    }
    function gt() {
      const h = D.value * 1, C = f.style.left.replace("px", "") * 1, S = f.style.top.replace("px", "") * 1;
      a.style.color = `hsl(${h}, 100%, 50%)`, m.style.left = `${h / 360 * 100}%`, oe(C, S);
    }
    function ut() {
      const h = _.value / 100;
      M.style.left = `${h * 100}%`, Le({ a: h }), q();
    }
    function vt(h) {
      const C = h.s / 100, S = h.v / 100;
      let X = C * S, ie = h.h / 60, Z = X * (1 - e.abs(ie % 2 - 1)), ye = S - X;
      X = X + ye, Z = Z + ye;
      const Ie = e.floor(ie) % 6, be = [X, Z, ye, ye, Z, X][Ie], Ne = [Z, X, X, Z, ye, ye][Ie], it = [ye, ye, Z, X, X, Z][Ie];
      return {
        r: e.round(be * 255),
        g: e.round(Ne * 255),
        b: e.round(it * 255),
        a: h.a
      };
    }
    function ft(h) {
      const C = h.v / 100, S = C * (1 - h.s / 100 / 2);
      let X;
      return S > 0 && S < 1 && (X = e.round((C - S) / e.min(S, 1 - S) * 100)), {
        h: h.h,
        s: X || 0,
        l: e.round(S * 100),
        a: h.a
      };
    }
    function _t(h) {
      const C = h.r / 255, S = h.g / 255, X = h.b / 255, ie = e.max(C, S, X), Z = e.min(C, S, X), ye = ie - Z, Ie = ie;
      let be = 0, Ne = 0;
      return ye && (ie === C && (be = (S - X) / ye), ie === S && (be = 2 + (X - C) / ye), ie === X && (be = 4 + (C - S) / ye), ie && (Ne = ye / ie)), be = e.floor(be * 60), {
        h: be < 0 ? be + 360 : be,
        s: e.round(Ne * 100),
        v: e.round(Ie * 100),
        a: h.a
      };
    }
    function tt(h) {
      const C = /^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i;
      let S, X;
      return r.fillStyle = "#000", r.fillStyle = h, S = C.exec(r.fillStyle), S ? X = {
        r: S[3] * 1,
        g: S[4] * 1,
        b: S[5] * 1,
        a: S[6] * 1
      } : (S = r.fillStyle.replace("#", "").match(/.{2}/g).map((ie) => parseInt(ie, 16)), X = {
        r: S[0],
        g: S[1],
        b: S[2],
        a: 1
      }), X;
    }
    function nt(h) {
      let C = h.r.toString(16), S = h.g.toString(16), X = h.b.toString(16), ie = "";
      if (h.r < 16 && (C = "0" + C), h.g < 16 && (S = "0" + S), h.b < 16 && (X = "0" + X), p.alpha && (h.a < 1 || p.forceAlpha)) {
        const Z = h.a * 255 | 0;
        ie = Z.toString(16), Z < 16 && (ie = "0" + ie);
      }
      return "#" + C + S + X + ie;
    }
    function Yt(h) {
      return !p.alpha || h.a === 1 && !p.forceAlpha ? `rgb(${h.r}, ${h.g}, ${h.b})` : `rgba(${h.r}, ${h.g}, ${h.b}, ${h.a})`;
    }
    function qt(h) {
      return !p.alpha || h.a === 1 && !p.forceAlpha ? `hsl(${h.h}, ${h.s}%, ${h.l}%)` : `hsla(${h.h}, ${h.s}%, ${h.l}%, ${h.a})`;
    }
    function Ht() {
      t.getElementById("clr-picker") || (s = i, a = t.createElement("div"), a.setAttribute("id", "clr-picker"), a.className = "clr-picker", a.innerHTML = `<input id="clr-color-value" name="clr-color-value" class="clr-color" type="text" value="" spellcheck="false" aria-label="${p.a11y.input}"><div id="clr-color-area" class="clr-gradient" role="application" aria-label="${p.a11y.instruction}"><div id="clr-color-marker" class="clr-marker" tabindex="0"></div></div><div class="clr-hue"><input id="clr-hue-slider" name="clr-hue-slider" type="range" min="0" max="360" step="1" aria-label="${p.a11y.hueSlider}"><div id="clr-hue-marker"></div></div><div class="clr-alpha"><input id="clr-alpha-slider" name="clr-alpha-slider" type="range" min="0" max="100" step="1" aria-label="${p.a11y.alphaSlider}"><div id="clr-alpha-marker"></div><span></span></div><div id="clr-format" class="clr-format"><fieldset class="clr-segmented"><legend>${p.a11y.format}</legend><input id="clr-f1" type="radio" name="clr-format" value="hex"><label for="clr-f1">Hex</label><input id="clr-f2" type="radio" name="clr-format" value="rgb"><label for="clr-f2">RGB</label><input id="clr-f3" type="radio" name="clr-format" value="hsl"><label for="clr-f3">HSL</label><span></span></fieldset></div><div id="clr-swatches" class="clr-swatches"></div><button type="button" id="clr-clear" class="clr-clear" aria-label="${p.a11y.clear}">${p.clearLabel}</button><div id="clr-color-preview" class="clr-preview"><button type="button" id="clr-close" class="clr-close" aria-label="${p.a11y.close}">${p.closeLabel}</button></div><span id="clr-open-label" hidden>${p.a11y.open}</span><span id="clr-swatch-label" hidden>${p.a11y.swatch}</span>`, t.body.appendChild(a), l = Te("clr-color-area"), f = Te("clr-color-marker"), b = Te("clr-clear"), E = Te("clr-close"), d = Te("clr-color-preview"), v = Te("clr-color-value"), D = Te("clr-hue-slider"), m = Te("clr-hue-marker"), _ = Te("clr-alpha-slider"), M = Te("clr-alpha-marker"), j(p.el), ee(p.el), ge(a, "mousedown", (h) => {
        a.classList.remove("clr-keyboard-nav"), h.stopPropagation();
      }), ge(l, "mousedown", (h) => {
        ge(t, "mousemove", _e);
      }), ge(l, "contextmenu", (h) => {
        h.preventDefault();
      }), ge(l, "touchstart", (h) => {
        t.addEventListener("touchmove", _e, { passive: !1 });
      }), ge(f, "mousedown", (h) => {
        ge(t, "mousemove", _e);
      }), ge(f, "touchstart", (h) => {
        t.addEventListener("touchmove", _e, { passive: !1 });
      }), ge(v, "change", (h) => {
        const C = v.value;
        if (O || p.inline) {
          const S = C === "" ? C : R(C);
          q(S);
        }
      }), ge(b, "click", (h) => {
        q(""), P();
      }), ge(E, "click", (h) => {
        q(), P();
      }), ge(Te("clr-format"), "click", ".clr-format input", (h) => {
        L = h.target.value, Le(), q();
      }), ge(a, "click", ".clr-swatches button", (h) => {
        R(h.target.textContent), q(), p.swatchesOnly && P();
      }), ge(t, "mouseup", (h) => {
        t.removeEventListener("mousemove", _e);
      }), ge(t, "touchend", (h) => {
        t.removeEventListener("touchmove", _e);
      }), ge(t, "mousedown", (h) => {
        V = !1, a.classList.remove("clr-keyboard-nav"), P();
      }), ge(t, "keydown", (h) => {
        const C = h.key, S = h.target, X = h.shiftKey, ie = ["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        if (C === "Escape") {
          P(!0);
          return;
        } else if (C === "Enter" && S.tagName !== "BUTTON") {
          P();
          return;
        } else
          ie.includes(C) && (V = !0, a.classList.add("clr-keyboard-nav"));
        if (C === "Tab" && S.matches(".clr-picker *")) {
          const Z = Ct(), ye = Z.shift(), Ie = Z.pop();
          X && S === ye ? (Ie.focus(), h.preventDefault()) : !X && S === Ie && (ye.focus(), h.preventDefault());
        }
      }), ge(t, "click", ".clr-field button", (h) => {
        k && T(), h.target.nextElementSibling.dispatchEvent(new Event("click", { bubbles: !0 }));
      }), ge(f, "keydown", (h) => {
        const C = {
          ArrowUp: [0, -1],
          ArrowDown: [0, 1],
          ArrowLeft: [-1, 0],
          ArrowRight: [1, 0]
        };
        Object.keys(C).includes(h.key) && (Se(...C[h.key]), h.preventDefault());
      }), ge(l, "click", _e), ge(D, "input", gt), ge(_, "input", ut));
    }
    function Ct() {
      return Array.from(a.querySelectorAll("input, button")).filter((S) => !!S.offsetWidth);
    }
    function Te(h) {
      return t.getElementById(h);
    }
    function ge(h, C, S, X) {
      const ie = Element.prototype.matches || Element.prototype.msMatchesSelector;
      typeof S == "string" ? h.addEventListener(C, (Z) => {
        ie.call(Z.target, S) && X.call(Z.target, Z);
      }) : (X = S, h.addEventListener(C, X));
    }
    function bt(h, C) {
      C = C !== i ? C : [], t.readyState !== "loading" ? h(...C) : t.addEventListener("DOMContentLoaded", () => {
        h(...C);
      });
    }
    NodeList !== i && NodeList.prototype && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
    function dn(h, C) {
      O = C, I = O.value, N(C), L = U(h), z(), R(h), q(), I !== h && O.dispatchEvent(new Event("change", { bubbles: !0 }));
    }
    const hn = (() => {
      const h = {
        init: Ht,
        set: te,
        wrap: ee,
        close: P,
        setInstance: Q,
        setColor: dn,
        removeInstance: F,
        updatePosition: z,
        ready: bt
      };
      function C(S) {
        bt(() => {
          S && (typeof S == "string" ? j(S) : te(S));
        });
      }
      for (const S in h)
        C[S] = function() {
          for (var X = arguments.length, ie = new Array(X), Z = 0; Z < X; Z++)
            ie[Z] = arguments[Z];
          bt(h[S], ie);
        };
      return bt(() => {
        n.addEventListener("resize", (S) => {
          C.updatePosition();
        }), n.addEventListener("scroll", (S) => {
          C.updatePosition();
        });
      }), C;
    })();
    return hn.coloris = hn, hn;
  })(window, document, Math);
})();
Rt.coloris;
Rt.init;
Rt.set;
Rt.wrap;
Rt.close;
Rt.setInstance;
Rt.removeInstance;
Rt.updatePosition;
const xs = ".js-coloris-swatch", Jo = (n) => {
  const t = n.closest(".input-group");
  if (!t)
    return;
  const e = t.querySelector(xs);
  e && (e.style.backgroundColor = n.value || "transparent");
}, ea = () => {
  Rt.init(), document.querySelectorAll("[data-coloris]").forEach(Jo), document.addEventListener("input", (n) => {
    var e;
    const t = n.target;
    t && ((e = t.matches) != null && e.call(t, "input[data-coloris]")) && Jo(t);
  }), document.addEventListener("click", (n) => {
    const t = n.target;
    if (!t)
      return;
    const e = t.closest(xs);
    if (!e)
      return;
    const i = e.closest(".input-group"), r = i == null ? void 0 : i.querySelector("input[data-coloris]");
    r && r.click();
  });
};
typeof document < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ea, { once: !0 }) : ea());
const no = {
  // Documents
  pdf: "fa-file-pdf",
  doc: "fa-file-word",
  docx: "fa-file-word",
  odt: "fa-file-word",
  rtf: "fa-file-word",
  xls: "fa-file-excel",
  xlsx: "fa-file-excel",
  ods: "fa-file-excel",
  csv: "fa-file-csv",
  ppt: "fa-file-powerpoint",
  pptx: "fa-file-powerpoint",
  odp: "fa-file-powerpoint",
  txt: "fa-file-lines",
  // Images
  jpg: "fa-file-image",
  jpeg: "fa-file-image",
  png: "fa-file-image",
  gif: "fa-file-image",
  bmp: "fa-file-image",
  svg: "fa-file-image",
  webp: "fa-file-image",
  ico: "fa-file-image",
  tif: "fa-file-image",
  tiff: "fa-file-image",
  psd: "fa-file-image",
  ai: "fa-file-image",
  // Audio
  mp3: "fa-file-audio",
  wav: "fa-file-audio",
  ogg: "fa-file-audio",
  flac: "fa-file-audio",
  aac: "fa-file-audio",
  wma: "fa-file-audio",
  m4a: "fa-file-audio",
  aif: "fa-file-audio",
  aiff: "fa-file-audio",
  // Video
  mp4: "fa-file-video",
  avi: "fa-file-video",
  mov: "fa-file-video",
  wmv: "fa-file-video",
  mkv: "fa-file-video",
  webm: "fa-file-video",
  flv: "fa-file-video",
  m4v: "fa-file-video",
  // Archives
  zip: "fa-file-zipper",
  rar: "fa-file-zipper",
  "7z": "fa-file-zipper",
  gz: "fa-file-zipper",
  gzip: "fa-file-zipper",
  tar: "fa-file-zipper",
  bz2: "fa-file-zipper",
  arj: "fa-file-zipper",
  // Code
  js: "fa-file-code",
  ts: "fa-file-code",
  jsx: "fa-file-code",
  tsx: "fa-file-code",
  css: "fa-file-code",
  scss: "fa-file-code",
  html: "fa-file-code",
  htm: "fa-file-code",
  php: "fa-file-code",
  py: "fa-file-code",
  rb: "fa-file-code",
  java: "fa-file-code",
  json: "fa-file-code",
  xml: "fa-file-code",
  sql: "fa-file-code",
  sh: "fa-file-code",
  // Other
  swf: "fa-file",
  fla: "fa-file"
}, qh = "fa-file", Xh = /\.([0-9a-z]+)$/i, Er = "data-filetype-processed";
function Ns(n) {
  const t = n.toLowerCase().match(Xh);
  return t ? t[1] : null;
}
function $s(n) {
  return no[n.toLowerCase()] ?? qh;
}
function ta(n) {
  if (n.hasAttribute(Er))
    return;
  const t = n.getAttribute("data-filetype");
  if (t === "none") {
    n.setAttribute(Er, "");
    return;
  }
  let e = t;
  if (!e) {
    const o = n.getAttribute("href");
    if (!o)
      return;
    e = Ns(o);
  }
  if (!e)
    return;
  const i = $s(e), r = document.createElement("i");
  r.className = `fa-solid ${i} bsee-filetype-icon`, n.prepend(r), n.classList.add("bsee-filetype-link"), n.setAttribute(Er, "");
}
function Qh(n = document) {
  n.querySelectorAll("a[data-filetype]").forEach(ta), n.querySelectorAll("a[href]").forEach((t) => {
    const e = t.getAttribute("href");
    if (!e)
      return;
    const i = Ns(e);
    i && i in no && ta(t);
  });
}
const Zh = {
  /**
   * Scan a container for links and decorate them with FA file-type icons.
   * Safe to call multiple times — already-processed links are skipped.
   */
  scan: Qh,
  /**
   * Get the FA icon class for a file extension.
   * Returns the generic 'fa-file' for unknown extensions.
   */
  iconClass: $s,
  /**
   * The full extension → icon class map. Can be extended at runtime:
   *   filetype.map['sketch'] = 'fa-file-image';
   */
  map: no
};
function np(n, t = 300) {
  let e = null;
  const i = (...r) => {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      e = null, n(...r);
    }, t);
  };
  return i.cancel = () => {
    e !== null && (clearTimeout(e), e = null);
  }, i;
}
window.bootstrap = {
  Alert: ii,
  Button: ri,
  Carousel: Yn,
  Collapse: an,
  Dropdown: pt,
  Modal: sn,
  Offcanvas: xt,
  Popover: Ln,
  ScrollSpy: ai,
  Tab: ln,
  Toast: si,
  Tooltip: Nt
};
document.addEventListener("DOMContentLoaded", () => {
  qd.init(), document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((n) => {
    an.getOrCreateInstance(n, { toggle: !1 });
  }), document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((n) => {
    Nt.getOrCreateInstance(n);
  }), document.querySelectorAll('[data-bs-toggle="popover"]').forEach((n) => {
    Ln.getOrCreateInstance(n);
  }), Zh.scan(), Fo('[data-bs-toggle="tooltip"]', (n) => {
    Nt.getOrCreateInstance(n);
  }), Fo('[data-bs-toggle="popover"]', (n) => {
    Ln.getOrCreateInstance(n);
  });
});
export {
  ii as Alert,
  ri as Button,
  Yn as Carousel,
  tp as ClipboardJS,
  an as Collapse,
  Rt as Coloris,
  pt as Dropdown,
  sn as Modal,
  xt as Offcanvas,
  Ln as Popover,
  ai as ScrollSpy,
  ce as Sortable,
  ln as Tab,
  si as Toast,
  Nt as Tooltip,
  Jh as animate,
  fn as dayjs,
  np as debounce,
  qd as dropdownHover,
  Zh as filetype,
  $e as flatpickr,
  Fo as onInsert,
  ep as toast
};
//# sourceMappingURL=bs-ee.mjs.map
