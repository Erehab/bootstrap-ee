/*! Bootstrap EE v2.2.0 (https://github.com/Erehab/bootstrap-ee) */
/*!
 * jQuery JavaScript Library v4.0.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.com/license/
 *
 * Date: 2026-01-18T00:20Z
 */
function zd(e, t) {
  if (typeof e > "u" || !e.document)
    throw new Error("jQuery requires a window with a document");
  var n = [], r = Object.getPrototypeOf, i = n.slice, a = n.flat ? function(s) {
    return n.flat.call(s);
  } : function(s) {
    return n.concat.apply([], s);
  }, o = n.push, u = n.indexOf, v = {}, b = v.toString, m = v.hasOwnProperty, x = m.toString, _ = x.call(Object), T = {};
  function N(s) {
    return s == null ? s + "" : typeof s == "object" ? v[b.call(s)] || "object" : typeof s;
  }
  function D(s) {
    return s != null && s === s.window;
  }
  function p(s) {
    var c = !!s && s.length, h = N(s);
    return typeof s == "function" || D(s) ? !1 : h === "array" || c === 0 || typeof c == "number" && c > 0 && c - 1 in s;
  }
  var l = e.document, d = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };
  function y(s, c, h) {
    h = h || l;
    var g, w = h.createElement("script");
    w.text = s;
    for (g in d)
      c && c[g] && (w[g] = c[g]);
    h.head.appendChild(w).parentNode && w.parentNode.removeChild(w);
  }
  var E = "4.0.0", O = /HTML$/i, f = function(s, c) {
    return new f.fn.init(s, c);
  };
  f.fn = f.prototype = {
    // The current version of jQuery being used
    jquery: E,
    constructor: f,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function() {
      return i.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function(s) {
      return s == null ? i.call(this) : s < 0 ? this[s + this.length] : this[s];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function(s) {
      var c = f.merge(this.constructor(), s);
      return c.prevObject = this, c;
    },
    // Execute a callback for every element in the matched set.
    each: function(s) {
      return f.each(this, s);
    },
    map: function(s) {
      return this.pushStack(f.map(this, function(c, h) {
        return s.call(c, h, c);
      }));
    },
    slice: function() {
      return this.pushStack(i.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    even: function() {
      return this.pushStack(f.grep(this, function(s, c) {
        return (c + 1) % 2;
      }));
    },
    odd: function() {
      return this.pushStack(f.grep(this, function(s, c) {
        return c % 2;
      }));
    },
    eq: function(s) {
      var c = this.length, h = +s + (s < 0 ? c : 0);
      return this.pushStack(h >= 0 && h < c ? [this[h]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    }
  }, f.extend = f.fn.extend = function() {
    var s, c, h, g, w, C, R = arguments[0] || {}, M = 1, B = arguments.length, $ = !1;
    for (typeof R == "boolean" && ($ = R, R = arguments[M] || {}, M++), typeof R != "object" && typeof R != "function" && (R = {}), M === B && (R = this, M--); M < B; M++)
      if ((s = arguments[M]) != null)
        for (c in s)
          g = s[c], !(c === "__proto__" || R === g) && ($ && g && (f.isPlainObject(g) || (w = Array.isArray(g))) ? (h = R[c], w && !Array.isArray(h) ? C = [] : !w && !f.isPlainObject(h) ? C = {} : C = h, w = !1, R[c] = f.extend($, C, g)) : g !== void 0 && (R[c] = g));
    return R;
  }, f.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: !0,
    error: function(s) {
      throw new Error(s);
    },
    noop: function() {
    },
    isPlainObject: function(s) {
      var c, h;
      return !s || b.call(s) !== "[object Object]" ? !1 : (c = r(s), c ? (h = m.call(c, "constructor") && c.constructor, typeof h == "function" && x.call(h) === _) : !0);
    },
    isEmptyObject: function(s) {
      var c;
      for (c in s)
        return !1;
      return !0;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function(s, c, h) {
      y(s, { nonce: c && c.nonce }, h);
    },
    each: function(s, c) {
      var h, g = 0;
      if (p(s))
        for (h = s.length; g < h && c.call(s[g], g, s[g]) !== !1; g++)
          ;
      else
        for (g in s)
          if (c.call(s[g], g, s[g]) === !1)
            break;
      return s;
    },
    // Retrieve the text value of an array of DOM nodes
    text: function(s) {
      var c, h = "", g = 0, w = s.nodeType;
      if (!w)
        for (; c = s[g++]; )
          h += f.text(c);
      return w === 1 || w === 11 ? s.textContent : w === 9 ? s.documentElement.textContent : w === 3 || w === 4 ? s.nodeValue : h;
    },
    // results is for internal usage only
    makeArray: function(s, c) {
      var h = c || [];
      return s != null && (p(Object(s)) ? f.merge(
        h,
        typeof s == "string" ? [s] : s
      ) : o.call(h, s)), h;
    },
    inArray: function(s, c, h) {
      return c == null ? -1 : u.call(c, s, h);
    },
    isXMLDoc: function(s) {
      var c = s && s.namespaceURI, h = s && (s.ownerDocument || s).documentElement;
      return !O.test(c || h && h.nodeName || "HTML");
    },
    // Note: an element does not contain itself
    contains: function(s, c) {
      var h = c && c.parentNode;
      return s === h || !!(h && h.nodeType === 1 && // Support: IE 9 - 11+
      // IE doesn't have `contains` on SVG.
      (s.contains ? s.contains(h) : s.compareDocumentPosition && s.compareDocumentPosition(h) & 16));
    },
    merge: function(s, c) {
      for (var h = +c.length, g = 0, w = s.length; g < h; g++)
        s[w++] = c[g];
      return s.length = w, s;
    },
    grep: function(s, c, h) {
      for (var g, w = [], C = 0, R = s.length, M = !h; C < R; C++)
        g = !c(s[C], C), g !== M && w.push(s[C]);
      return w;
    },
    // arg is for internal usage only
    map: function(s, c, h) {
      var g, w, C = 0, R = [];
      if (p(s))
        for (g = s.length; C < g; C++)
          w = c(s[C], C, h), w != null && R.push(w);
      else
        for (C in s)
          w = c(s[C], C, h), w != null && R.push(w);
      return a(R);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: T
  }), typeof Symbol == "function" && (f.fn[Symbol.iterator] = n[Symbol.iterator]), f.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(s, c) {
      v["[object " + c + "]"] = c.toLowerCase();
    }
  );
  function H(s, c) {
    return s.nodeName && s.nodeName.toLowerCase() === c.toLowerCase();
  }
  var Y = n.pop, q = "[\\x20\\t\\r\\n\\f]", K = l.documentMode, ne = K && new RegExp(
    // Support: IE 9 - 11+
    // IE's :disabled selector does not pick up the children of disabled fieldsets
    ":enabled|:disabled|\\[" + q + "*name" + q + "*=" + q + `*(?:''|"")`
  ), F = new RegExp(
    "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
    "g"
  ), S = "(?:\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", A = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"), P = new RegExp(q + "|>"), L = /[+~]/, V = l.documentElement, j = V.matches || V.msMatchesSelector;
  function G() {
    var s = [];
    function c(h, g) {
      return s.push(h + " ") > f.expr.cacheLength && delete c[s.shift()], c[h + " "] = g;
    }
    return c;
  }
  function ee(s) {
    return s && typeof s.getElementsByTagName < "u" && s;
  }
  var J = "\\[" + q + "*(" + S + ")(?:" + q + // Operator (capture 2)
  "*([*^$|!~]?=)" + q + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
  `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + S + "))|)" + q + "*\\]", Z = ":(" + S + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + J + ")*)|.*)\\)|)", te = {
    ID: new RegExp("^#(" + S + ")"),
    CLASS: new RegExp("^\\.(" + S + ")"),
    TAG: new RegExp("^(" + S + "|[*])"),
    ATTR: new RegExp("^" + J),
    PSEUDO: new RegExp("^" + Z),
    CHILD: new RegExp(
      "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)",
      "i"
    )
  }, se = new RegExp(Z), oe = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"), le = function(s, c) {
    var h = "0x" + s.slice(1) - 65536;
    return c || (h < 0 ? String.fromCharCode(h + 65536) : String.fromCharCode(h >> 10 | 55296, h & 1023 | 56320));
  };
  function ce(s) {
    return s.replace(oe, le);
  }
  function ve(s) {
    f.error("Syntax error, unrecognized expression: " + s);
  }
  var Ne = new RegExp("^" + q + "*," + q + "*"), Pe = G();
  function Ie(s, c) {
    var h, g, w, C, R, M, B, $ = Pe[s + " "];
    if ($)
      return c ? 0 : $.slice(0);
    for (R = s, M = [], B = f.expr.preFilter; R; ) {
      (!h || (g = Ne.exec(R))) && (g && (R = R.slice(g[0].length) || R), M.push(w = [])), h = !1, (g = A.exec(R)) && (h = g.shift(), w.push({
        value: h,
        // Cast descendant combinators to space
        type: g[0].replace(F, " ")
      }), R = R.slice(h.length));
      for (C in te)
        (g = f.expr.match[C].exec(R)) && (!B[C] || (g = B[C](g))) && (h = g.shift(), w.push({
          value: h,
          type: C,
          matches: g
        }), R = R.slice(h.length));
      if (!h)
        break;
    }
    return c ? R.length : R ? ve(s) : (
      // Cache the tokens
      Pe(s, M).slice(0)
    );
  }
  var Ze = {
    ATTR: function(s) {
      return s[1] = ce(s[1]), s[3] = ce(s[3] || s[4] || s[5] || ""), s[2] === "~=" && (s[3] = " " + s[3] + " "), s.slice(0, 4);
    },
    CHILD: function(s) {
      return s[1] = s[1].toLowerCase(), s[1].slice(0, 3) === "nth" ? (s[3] || ve(s[0]), s[4] = +(s[4] ? s[5] + (s[6] || 1) : 2 * (s[3] === "even" || s[3] === "odd")), s[5] = +(s[7] + s[8] || s[3] === "odd")) : s[3] && ve(s[0]), s;
    },
    PSEUDO: function(s) {
      var c, h = !s[6] && s[2];
      return te.CHILD.test(s[0]) ? null : (s[3] ? s[2] = s[4] || s[5] || "" : h && se.test(h) && // Get excess from tokenize (recursively)
      (c = Ie(h, !0)) && // advance to the next closing parenthesis
      (c = h.indexOf(")", h.length - c) - h.length) && (s[0] = s[0].slice(0, c), s[2] = h.slice(0, c)), s.slice(0, 3));
    }
  };
  function We(s) {
    for (var c = 0, h = s.length, g = ""; c < h; c++)
      g += s[c].value;
    return g;
  }
  function Be(s, c, h, g, w, C, R) {
    var M = 0, B = s.length, $ = h == null;
    if (N(h) === "object") {
      w = !0;
      for (M in h)
        Be(s, c, M, h[M], !0, C, R);
    } else if (g !== void 0 && (w = !0, typeof g != "function" && (R = !0), $ && (R ? (c.call(s, g), c = null) : ($ = c, c = function(U, X, W) {
      return $.call(f(U), W);
    })), c))
      for (; M < B; M++)
        c(
          s[M],
          h,
          R ? g : g.call(s[M], M, c(s[M], h))
        );
    return w ? s : $ ? c.call(s) : B ? c(s[0], h) : C;
  }
  var Ee = /[^\x20\t\r\n\f]+/g;
  f.fn.extend({
    attr: function(s, c) {
      return Be(this, f.attr, s, c, arguments.length > 1);
    },
    removeAttr: function(s) {
      return this.each(function() {
        f.removeAttr(this, s);
      });
    }
  }), f.extend({
    attr: function(s, c, h) {
      var g, w, C = s.nodeType;
      if (!(C === 3 || C === 8 || C === 2)) {
        if (typeof s.getAttribute > "u")
          return f.prop(s, c, h);
        if ((C !== 1 || !f.isXMLDoc(s)) && (w = f.attrHooks[c.toLowerCase()]), h !== void 0) {
          if (h === null || // For compat with previous handling of boolean attributes,
          // remove when `false` passed. For ARIA attributes -
          // many of which recognize a `"false"` value - continue to
          // set the `"false"` value as jQuery <4 did.
          h === !1 && c.toLowerCase().indexOf("aria-") !== 0) {
            f.removeAttr(s, c);
            return;
          }
          return w && "set" in w && (g = w.set(s, h, c)) !== void 0 ? g : (s.setAttribute(c, h), h);
        }
        return w && "get" in w && (g = w.get(s, c)) !== null ? g : (g = s.getAttribute(c), g ?? void 0);
      }
    },
    attrHooks: {},
    removeAttr: function(s, c) {
      var h, g = 0, w = c && c.match(Ee);
      if (w && s.nodeType === 1)
        for (; h = w[g++]; )
          s.removeAttribute(h);
    }
  }), K && (f.attrHooks.type = {
    set: function(s, c) {
      if (c === "radio" && H(s, "input")) {
        var h = s.value;
        return s.setAttribute("type", c), h && (s.value = h), c;
      }
    }
  });
  var at = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function Pt(s, c) {
    return c ? s === "\0" ? "�" : s.slice(0, -1) + "\\" + s.charCodeAt(s.length - 1).toString(16) + " " : "\\" + s;
  }
  f.escapeSelector = function(s) {
    return (s + "").replace(at, Pt);
  };
  var St = n.sort, Ht = n.splice, ke;
  function Ye(s, c) {
    if (s === c)
      return ke = !0, 0;
    var h = !s.compareDocumentPosition - !c.compareDocumentPosition;
    return h || (h = (s.ownerDocument || s) == (c.ownerDocument || c) ? s.compareDocumentPosition(c) : (
      // Otherwise we know they are disconnected
      1
    ), h & 1 ? s == l || s.ownerDocument == l && f.contains(l, s) ? -1 : c == l || c.ownerDocument == l && f.contains(l, c) ? 1 : 0 : h & 4 ? -1 : 1);
  }
  f.uniqueSort = function(s) {
    var c, h = [], g = 0, w = 0;
    if (ke = !1, St.call(s, Ye), ke) {
      for (; c = s[w++]; )
        c === s[w] && (g = h.push(w));
      for (; g--; )
        Ht.call(s, h[g], 1);
    }
    return s;
  }, f.fn.uniqueSort = function() {
    return this.pushStack(f.uniqueSort(i.apply(this)));
  };
  var $e, qe, Fe, _r, vt, mt = 0, Xr = 0, Za = G(), eo = G(), Qr = G(), Ku = new RegExp(q + "+", "g"), Uu = new RegExp("^" + S + "$"), to = f.extend({
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
  }, te), Yu = /^(?:input|select|textarea|button)$/i, zu = /^h\d$/i, Xu = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Qu = function() {
    kn();
  }, Ju = Jr(
    function(s) {
      return s.disabled === !0 && H(s, "fieldset");
    },
    { dir: "parentNode", next: "legend" }
  );
  function Dt(s, c, h, g) {
    var w, C, R, M, B, $, U, X = c && c.ownerDocument, W = c ? c.nodeType : 9;
    if (h = h || [], typeof s != "string" || !s || W !== 1 && W !== 9 && W !== 11)
      return h;
    if (!g && (kn(c), c = c || Fe, vt)) {
      if (W !== 11 && (B = Xu.exec(s)))
        if (w = B[1]) {
          if (W === 9)
            return (R = c.getElementById(w)) && o.call(h, R), h;
          if (X && (R = X.getElementById(w)) && f.contains(c, R))
            return o.call(h, R), h;
        } else {
          if (B[2])
            return o.apply(h, c.getElementsByTagName(s)), h;
          if ((w = B[3]) && c.getElementsByClassName)
            return o.apply(h, c.getElementsByClassName(w)), h;
        }
      if (!Qr[s + " "] && (!ne || !ne.test(s))) {
        if (U = s, X = c, W === 1 && (P.test(s) || A.test(s))) {
          for (X = L.test(s) && ee(c.parentNode) || c, (X != c || K) && ((M = c.getAttribute("id")) ? M = f.escapeSelector(M) : c.setAttribute("id", M = f.expando)), $ = Ie(s), C = $.length; C--; )
            $[C] = (M ? "#" + M : ":scope") + " " + We($[C]);
          U = $.join(",");
        }
        try {
          return o.apply(
            h,
            X.querySelectorAll(U)
          ), h;
        } catch {
          Qr(s, !0);
        } finally {
          M === f.expando && c.removeAttribute("id");
        }
      }
    }
    return io(s.replace(F, "$1"), c, h, g);
  }
  function Rt(s) {
    return s[f.expando] = !0, s;
  }
  function Zu(s) {
    return function(c) {
      return H(c, "input") && c.type === s;
    };
  }
  function ed(s) {
    return function(c) {
      return (H(c, "input") || H(c, "button")) && c.type === s;
    };
  }
  function no(s) {
    return function(c) {
      return "form" in c ? c.parentNode && c.disabled === !1 ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === s : c.disabled === s : c.isDisabled === s || // Where there is no isDisabled, check manually
      c.isDisabled !== !s && Ju(c) === s : c.disabled === s : "label" in c ? c.disabled === s : !1;
    };
  }
  function fn(s) {
    return Rt(function(c) {
      return c = +c, Rt(function(h, g) {
        for (var w, C = s([], h.length, c), R = C.length; R--; )
          h[w = C[R]] && (h[w] = !(g[w] = h[w]));
      });
    });
  }
  function kn(s) {
    var c, h = s ? s.ownerDocument || s : l;
    h == Fe || h.nodeType !== 9 || (Fe = h, _r = Fe.documentElement, vt = !f.isXMLDoc(Fe), K && l != Fe && (c = Fe.defaultView) && c.top !== c && c.addEventListener("unload", Qu));
  }
  Dt.matches = function(s, c) {
    return Dt(s, null, null, c);
  }, Dt.matchesSelector = function(s, c) {
    if (kn(s), vt && !Qr[c + " "] && (!ne || !ne.test(c)))
      try {
        return j.call(s, c);
      } catch {
        Qr(c, !0);
      }
    return Dt(c, Fe, null, [s]).length > 0;
  }, f.expr = {
    // Can be adjusted by the user
    cacheLength: 50,
    createPseudo: Rt,
    match: to,
    find: {
      ID: function(s, c) {
        if (typeof c.getElementById < "u" && vt) {
          var h = c.getElementById(s);
          return h ? [h] : [];
        }
      },
      TAG: function(s, c) {
        return typeof c.getElementsByTagName < "u" ? c.getElementsByTagName(s) : c.querySelectorAll(s);
      },
      CLASS: function(s, c) {
        if (typeof c.getElementsByClassName < "u" && vt)
          return c.getElementsByClassName(s);
      }
    },
    relative: {
      ">": { dir: "parentNode", first: !0 },
      " ": { dir: "parentNode" },
      "+": { dir: "previousSibling", first: !0 },
      "~": { dir: "previousSibling" }
    },
    preFilter: Ze,
    filter: {
      ID: function(s) {
        var c = ce(s);
        return function(h) {
          return h.getAttribute("id") === c;
        };
      },
      TAG: function(s) {
        var c = ce(s).toLowerCase();
        return s === "*" ? function() {
          return !0;
        } : function(h) {
          return H(h, c);
        };
      },
      CLASS: function(s) {
        var c = Za[s + " "];
        return c || (c = new RegExp("(^|" + q + ")" + s + "(" + q + "|$)")) && Za(s, function(h) {
          return c.test(
            typeof h.className == "string" && h.className || typeof h.getAttribute < "u" && h.getAttribute("class") || ""
          );
        });
      },
      ATTR: function(s, c, h) {
        return function(g) {
          var w = f.attr(g, s);
          return w == null ? c === "!=" : c ? (w += "", c === "=" ? w === h : c === "!=" ? w !== h : c === "^=" ? h && w.indexOf(h) === 0 : c === "*=" ? h && w.indexOf(h) > -1 : c === "$=" ? h && w.slice(-h.length) === h : c === "~=" ? (" " + w.replace(Ku, " ") + " ").indexOf(h) > -1 : c === "|=" ? w === h || w.slice(0, h.length + 1) === h + "-" : !1) : !0;
        };
      },
      CHILD: function(s, c, h, g, w) {
        var C = s.slice(0, 3) !== "nth", R = s.slice(-4) !== "last", M = c === "of-type";
        return g === 1 && w === 0 ? (
          // Shortcut for :nth-*(n)
          function(B) {
            return !!B.parentNode;
          }
        ) : function(B, $, U) {
          var X, W, z, ae, be, me = C !== R ? "nextSibling" : "previousSibling", Re = B.parentNode, Oe = M && B.nodeName.toLowerCase(), nt = !U && !M, Ge = !1;
          if (Re) {
            if (C) {
              for (; me; ) {
                for (z = B; z = z[me]; )
                  if (M ? H(z, Oe) : z.nodeType === 1)
                    return !1;
                be = me = s === "only" && !be && "nextSibling";
              }
              return !0;
            }
            if (be = [R ? Re.firstChild : Re.lastChild], R && nt) {
              for (W = Re[f.expando] || (Re[f.expando] = {}), X = W[s] || [], ae = X[0] === mt && X[1], Ge = ae && X[2], z = ae && Re.childNodes[ae]; z = ++ae && z && z[me] || // Fallback to seeking `elem` from the start
              (Ge = ae = 0) || be.pop(); )
                if (z.nodeType === 1 && ++Ge && z === B) {
                  W[s] = [mt, ae, Ge];
                  break;
                }
            } else if (nt && (W = B[f.expando] || (B[f.expando] = {}), X = W[s] || [], ae = X[0] === mt && X[1], Ge = ae), Ge === !1)
              for (; (z = ++ae && z && z[me] || (Ge = ae = 0) || be.pop()) && !((M ? H(z, Oe) : z.nodeType === 1) && ++Ge && (nt && (W = z[f.expando] || (z[f.expando] = {}), W[s] = [mt, Ge]), z === B)); )
                ;
            return Ge -= w, Ge === g || Ge % g === 0 && Ge / g >= 0;
          }
        };
      },
      PSEUDO: function(s, c) {
        var h = f.expr.pseudos[s] || f.expr.setFilters[s.toLowerCase()] || ve("unsupported pseudo: " + s);
        return h[f.expando] ? h(c) : h;
      }
    },
    pseudos: {
      // Potentially complex pseudos
      not: Rt(function(s) {
        var c = [], h = [], g = cs(s.replace(F, "$1"));
        return g[f.expando] ? Rt(function(w, C, R, M) {
          for (var B, $ = g(w, null, M, []), U = w.length; U--; )
            (B = $[U]) && (w[U] = !(C[U] = B));
        }) : function(w, C, R) {
          return c[0] = w, g(c, null, R, h), c[0] = null, !h.pop();
        };
      }),
      has: Rt(function(s) {
        return function(c) {
          return Dt(s, c).length > 0;
        };
      }),
      contains: Rt(function(s) {
        return s = ce(s), function(c) {
          return (c.textContent || f.text(c)).indexOf(s) > -1;
        };
      }),
      // "Whether an element is represented by a :lang() selector
      // is based solely on the element's language value
      // being equal to the identifier C,
      // or beginning with the identifier C immediately followed by "-".
      // The matching of C against the element's language value is performed case-insensitively.
      // The identifier C does not have to be a valid language name."
      // https://www.w3.org/TR/selectors/#lang-pseudo
      lang: Rt(function(s) {
        return Uu.test(s || "") || ve("unsupported lang: " + s), s = ce(s).toLowerCase(), function(c) {
          var h;
          do
            if (h = vt ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang"))
              return h = h.toLowerCase(), h === s || h.indexOf(s + "-") === 0;
          while ((c = c.parentNode) && c.nodeType === 1);
          return !1;
        };
      }),
      // Miscellaneous
      target: function(s) {
        var c = e.location && e.location.hash;
        return c && c.slice(1) === s.id;
      },
      root: function(s) {
        return s === _r;
      },
      focus: function(s) {
        return s === Fe.activeElement && Fe.hasFocus() && !!(s.type || s.href || ~s.tabIndex);
      },
      // Boolean properties
      enabled: no(!1),
      disabled: no(!0),
      checked: function(s) {
        return H(s, "input") && !!s.checked || H(s, "option") && !!s.selected;
      },
      selected: function(s) {
        return K && s.parentNode && s.parentNode.selectedIndex, s.selected === !0;
      },
      // Contents
      empty: function(s) {
        for (s = s.firstChild; s; s = s.nextSibling)
          if (s.nodeType < 6)
            return !1;
        return !0;
      },
      parent: function(s) {
        return !f.expr.pseudos.empty(s);
      },
      // Element/input types
      header: function(s) {
        return zu.test(s.nodeName);
      },
      input: function(s) {
        return Yu.test(s.nodeName);
      },
      button: function(s) {
        return H(s, "input") && s.type === "button" || H(s, "button");
      },
      text: function(s) {
        return H(s, "input") && s.type === "text";
      },
      // Position-in-collection
      first: fn(function() {
        return [0];
      }),
      last: fn(function(s, c) {
        return [c - 1];
      }),
      eq: fn(function(s, c, h) {
        return [h < 0 ? h + c : h];
      }),
      even: fn(function(s, c) {
        for (var h = 0; h < c; h += 2)
          s.push(h);
        return s;
      }),
      odd: fn(function(s, c) {
        for (var h = 1; h < c; h += 2)
          s.push(h);
        return s;
      }),
      lt: fn(function(s, c, h) {
        var g;
        for (h < 0 ? g = h + c : h > c ? g = c : g = h; --g >= 0; )
          s.push(g);
        return s;
      }),
      gt: fn(function(s, c, h) {
        for (var g = h < 0 ? h + c : h; ++g < c; )
          s.push(g);
        return s;
      })
    }
  }, f.expr.pseudos.nth = f.expr.pseudos.eq;
  for ($e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
    f.expr.pseudos[$e] = Zu($e);
  for ($e in { submit: !0, reset: !0 })
    f.expr.pseudos[$e] = ed($e);
  function ro() {
  }
  ro.prototype = f.expr.pseudos, f.expr.setFilters = new ro();
  function Jr(s, c, h) {
    var g = c.dir, w = c.next, C = w || g, R = h && C === "parentNode", M = Xr++;
    return c.first ? (
      // Check against closest ancestor/preceding element
      function(B, $, U) {
        for (; B = B[g]; )
          if (B.nodeType === 1 || R)
            return s(B, $, U);
        return !1;
      }
    ) : (
      // Check against all ancestor/preceding elements
      function(B, $, U) {
        var X, W, z = [mt, M];
        if (U) {
          for (; B = B[g]; )
            if ((B.nodeType === 1 || R) && s(B, $, U))
              return !0;
        } else
          for (; B = B[g]; )
            if (B.nodeType === 1 || R)
              if (W = B[f.expando] || (B[f.expando] = {}), w && H(B, w))
                B = B[g] || B;
              else {
                if ((X = W[C]) && X[0] === mt && X[1] === M)
                  return z[2] = X[2];
                if (W[C] = z, z[2] = s(B, $, U))
                  return !0;
              }
        return !1;
      }
    );
  }
  function as(s) {
    return s.length > 1 ? function(c, h, g) {
      for (var w = s.length; w--; )
        if (!s[w](c, h, g))
          return !1;
      return !0;
    } : s[0];
  }
  function td(s, c, h) {
    for (var g = 0, w = c.length; g < w; g++)
      Dt(s, c[g], h);
    return h;
  }
  function Zr(s, c, h, g, w) {
    for (var C, R = [], M = 0, B = s.length, $ = c != null; M < B; M++)
      (C = s[M]) && (!h || h(C, g, w)) && (R.push(C), $ && c.push(M));
    return R;
  }
  function os(s, c, h, g, w, C) {
    return g && !g[f.expando] && (g = os(g)), w && !w[f.expando] && (w = os(w, C)), Rt(function(R, M, B, $) {
      var U, X, W, z, ae = [], be = [], me = M.length, Re = R || td(
        c || "*",
        B.nodeType ? [B] : B,
        []
      ), Oe = s && (R || !c) ? Zr(Re, ae, s, B, $) : Re;
      if (h ? (z = w || (R ? s : me || g) ? (
        // ...intermediate processing is necessary
        []
      ) : (
        // ...otherwise use results directly
        M
      ), h(Oe, z, B, $)) : z = Oe, g)
        for (U = Zr(z, be), g(U, [], B, $), X = U.length; X--; )
          (W = U[X]) && (z[be[X]] = !(Oe[be[X]] = W));
      if (R) {
        if (w || s) {
          if (w) {
            for (U = [], X = z.length; X--; )
              (W = z[X]) && U.push(Oe[X] = W);
            w(null, z = [], U, $);
          }
          for (X = z.length; X--; )
            (W = z[X]) && (U = w ? u.call(R, W) : ae[X]) > -1 && (R[U] = !(M[U] = W));
        }
      } else
        z = Zr(
          z === M ? z.splice(me, z.length) : z
        ), w ? w(null, M, z, $) : o.apply(M, z);
    });
  }
  function ls(s) {
    for (var c, h, g, w = s.length, C = f.expr.relative[s[0].type], R = C || f.expr.relative[" "], M = C ? 1 : 0, B = Jr(function(X) {
      return X === c;
    }, R, !0), $ = Jr(function(X) {
      return u.call(c, X) > -1;
    }, R, !0), U = [function(X, W, z) {
      var ae = !C && (z || W != qe) || ((c = W).nodeType ? B(X, W, z) : $(X, W, z));
      return c = null, ae;
    }]; M < w; M++)
      if (h = f.expr.relative[s[M].type])
        U = [Jr(as(U), h)];
      else {
        if (h = f.expr.filter[s[M].type].apply(null, s[M].matches), h[f.expando]) {
          for (g = ++M; g < w && !f.expr.relative[s[g].type]; g++)
            ;
          return os(
            M > 1 && as(U),
            M > 1 && We(
              // If the preceding token was a descendant combinator, insert an implicit any-element `*`
              s.slice(0, M - 1).concat({ value: s[M - 2].type === " " ? "*" : "" })
            ).replace(F, "$1"),
            h,
            M < g && ls(s.slice(M, g)),
            g < w && ls(s = s.slice(g)),
            g < w && We(s)
          );
        }
        U.push(h);
      }
    return as(U);
  }
  function nd(s, c) {
    var h = c.length > 0, g = s.length > 0, w = function(C, R, M, B, $) {
      var U, X, W, z = 0, ae = "0", be = C && [], me = [], Re = qe, Oe = C || g && f.expr.find.TAG("*", $), nt = mt += Re == null ? 1 : Math.random() || 0.1;
      for ($ && (qe = R == Fe || R || $); (U = Oe[ae]) != null; ae++) {
        if (g && U) {
          for (X = 0, !R && U.ownerDocument != Fe && (kn(U), M = !vt); W = s[X++]; )
            if (W(U, R || Fe, M)) {
              o.call(B, U);
              break;
            }
          $ && (mt = nt);
        }
        h && ((U = !W && U) && z--, C && be.push(U));
      }
      if (z += ae, h && ae !== z) {
        for (X = 0; W = c[X++]; )
          W(be, me, R, M);
        if (C) {
          if (z > 0)
            for (; ae--; )
              be[ae] || me[ae] || (me[ae] = Y.call(B));
          me = Zr(me);
        }
        o.apply(B, me), $ && !C && me.length > 0 && z + c.length > 1 && f.uniqueSort(B);
      }
      return $ && (mt = nt, qe = Re), be;
    };
    return h ? Rt(w) : w;
  }
  function cs(s, c) {
    var h, g = [], w = [], C = eo[s + " "];
    if (!C) {
      for (c || (c = Ie(s)), h = c.length; h--; )
        C = ls(c[h]), C[f.expando] ? g.push(C) : w.push(C);
      C = eo(
        s,
        nd(w, g)
      ), C.selector = s;
    }
    return C;
  }
  function io(s, c, h, g) {
    var w, C, R, M, B, $ = typeof s == "function" && s, U = !g && Ie(s = $.selector || s);
    if (h = h || [], U.length === 1) {
      if (C = U[0] = U[0].slice(0), C.length > 2 && (R = C[0]).type === "ID" && c.nodeType === 9 && vt && f.expr.relative[C[1].type]) {
        if (c = (f.expr.find.ID(
          ce(R.matches[0]),
          c
        ) || [])[0], c)
          $ && (c = c.parentNode);
        else
          return h;
        s = s.slice(C.shift().value.length);
      }
      for (w = to.needsContext.test(s) ? 0 : C.length; w-- && (R = C[w], !f.expr.relative[M = R.type]); )
        if ((B = f.expr.find[M]) && (g = B(
          ce(R.matches[0]),
          L.test(C[0].type) && ee(c.parentNode) || c
        ))) {
          if (C.splice(w, 1), s = g.length && We(C), !s)
            return o.apply(h, g), h;
          break;
        }
    }
    return ($ || cs(s, U))(
      g,
      c,
      !vt,
      h,
      !c || L.test(s) && ee(c.parentNode) || c
    ), h;
  }
  kn(), f.find = Dt, Dt.compile = cs, Dt.select = io, Dt.setDocument = kn, Dt.tokenize = Ie;
  function Ln(s, c, h) {
    for (var g = [], w = h !== void 0; (s = s[c]) && s.nodeType !== 9; )
      if (s.nodeType === 1) {
        if (w && f(s).is(h))
          break;
        g.push(s);
      }
    return g;
  }
  function so(s, c) {
    for (var h = []; s; s = s.nextSibling)
      s.nodeType === 1 && s !== c && h.push(s);
    return h;
  }
  var ao = f.expr.match.needsContext, oo = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function lo(s) {
    return s[0] === "<" && s[s.length - 1] === ">" && s.length >= 3;
  }
  function us(s, c, h) {
    return typeof c == "function" ? f.grep(s, function(g, w) {
      return !!c.call(g, w, g) !== h;
    }) : c.nodeType ? f.grep(s, function(g) {
      return g === c !== h;
    }) : typeof c != "string" ? f.grep(s, function(g) {
      return u.call(c, g) > -1 !== h;
    }) : f.filter(c, s, h);
  }
  f.filter = function(s, c, h) {
    var g = c[0];
    return h && (s = ":not(" + s + ")"), c.length === 1 && g.nodeType === 1 ? f.find.matchesSelector(g, s) ? [g] : [] : f.find.matches(s, f.grep(c, function(w) {
      return w.nodeType === 1;
    }));
  }, f.fn.extend({
    find: function(s) {
      var c, h, g = this.length, w = this;
      if (typeof s != "string")
        return this.pushStack(f(s).filter(function() {
          for (c = 0; c < g; c++)
            if (f.contains(w[c], this))
              return !0;
        }));
      for (h = this.pushStack([]), c = 0; c < g; c++)
        f.find(s, w[c], h);
      return g > 1 ? f.uniqueSort(h) : h;
    },
    filter: function(s) {
      return this.pushStack(us(this, s || [], !1));
    },
    not: function(s) {
      return this.pushStack(us(this, s || [], !0));
    },
    is: function(s) {
      return !!us(
        this,
        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        typeof s == "string" && ao.test(s) ? f(s) : s || [],
        !1
      ).length;
    }
  });
  var ei, rd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, id = f.fn.init = function(s, c) {
    var h, g;
    if (!s)
      return this;
    if (s.nodeType)
      return this[0] = s, this.length = 1, this;
    if (typeof s == "function")
      return ei.ready !== void 0 ? ei.ready(s) : (
        // Execute immediately if ready is not present
        s(f)
      );
    if (h = s + "", lo(h))
      h = [null, s, null];
    else if (typeof s == "string")
      h = rd.exec(s);
    else
      return f.makeArray(s, this);
    if (h && (h[1] || !c))
      if (h[1]) {
        if (c = c instanceof f ? c[0] : c, f.merge(this, f.parseHTML(
          h[1],
          c && c.nodeType ? c.ownerDocument || c : l,
          !0
        )), oo.test(h[1]) && f.isPlainObject(c))
          for (h in c)
            typeof this[h] == "function" ? this[h](c[h]) : this.attr(h, c[h]);
        return this;
      } else
        return g = l.getElementById(h[2]), g && (this[0] = g, this.length = 1), this;
    else
      return !c || c.jquery ? (c || ei).find(s) : this.constructor(c).find(s);
  };
  id.prototype = f.fn, ei = f(l);
  var sd = /^(?:parents|prev(?:Until|All))/, ad = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  f.fn.extend({
    has: function(s) {
      var c = f(s, this), h = c.length;
      return this.filter(function() {
        for (var g = 0; g < h; g++)
          if (f.contains(this, c[g]))
            return !0;
      });
    },
    closest: function(s, c) {
      var h, g = 0, w = this.length, C = [], R = typeof s != "string" && f(s);
      if (!ao.test(s)) {
        for (; g < w; g++)
          for (h = this[g]; h && h !== c; h = h.parentNode)
            if (h.nodeType < 11 && (R ? R.index(h) > -1 : (
              // Don't pass non-elements to jQuery#find
              h.nodeType === 1 && f.find.matchesSelector(h, s)
            ))) {
              C.push(h);
              break;
            }
      }
      return this.pushStack(C.length > 1 ? f.uniqueSort(C) : C);
    },
    // Determine the position of an element within the set
    index: function(s) {
      return s ? typeof s == "string" ? u.call(f(s), this[0]) : u.call(
        this,
        // If it receives a jQuery object, the first element is used
        s.jquery ? s[0] : s
      ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function(s, c) {
      return this.pushStack(
        f.uniqueSort(
          f.merge(this.get(), f(s, c))
        )
      );
    },
    addBack: function(s) {
      return this.add(
        s == null ? this.prevObject : this.prevObject.filter(s)
      );
    }
  });
  function co(s, c) {
    for (; (s = s[c]) && s.nodeType !== 1; )
      ;
    return s;
  }
  f.each({
    parent: function(s) {
      var c = s.parentNode;
      return c && c.nodeType !== 11 ? c : null;
    },
    parents: function(s) {
      return Ln(s, "parentNode");
    },
    parentsUntil: function(s, c, h) {
      return Ln(s, "parentNode", h);
    },
    next: function(s) {
      return co(s, "nextSibling");
    },
    prev: function(s) {
      return co(s, "previousSibling");
    },
    nextAll: function(s) {
      return Ln(s, "nextSibling");
    },
    prevAll: function(s) {
      return Ln(s, "previousSibling");
    },
    nextUntil: function(s, c, h) {
      return Ln(s, "nextSibling", h);
    },
    prevUntil: function(s, c, h) {
      return Ln(s, "previousSibling", h);
    },
    siblings: function(s) {
      return so((s.parentNode || {}).firstChild, s);
    },
    children: function(s) {
      return so(s.firstChild);
    },
    contents: function(s) {
      return s.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      r(s.contentDocument) ? s.contentDocument : (H(s, "template") && (s = s.content || s), f.merge([], s.childNodes));
    }
  }, function(s, c) {
    f.fn[s] = function(h, g) {
      var w = f.map(this, c, h);
      return s.slice(-5) !== "Until" && (g = h), g && typeof g == "string" && (w = f.filter(g, w)), this.length > 1 && (ad[s] || f.uniqueSort(w), sd.test(s) && w.reverse()), this.pushStack(w);
    };
  });
  function od(s) {
    var c = {};
    return f.each(s.match(Ee) || [], function(h, g) {
      c[g] = !0;
    }), c;
  }
  f.Callbacks = function(s) {
    s = typeof s == "string" ? od(s) : f.extend({}, s);
    var c, h, g, w, C = [], R = [], M = -1, B = function() {
      for (w = w || s.once, g = c = !0; R.length; M = -1)
        for (h = R.shift(); ++M < C.length; )
          C[M].apply(h[0], h[1]) === !1 && s.stopOnFalse && (M = C.length, h = !1);
      s.memory || (h = !1), c = !1, w && (h ? C = [] : C = "");
    }, $ = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        return C && (h && !c && (M = C.length - 1, R.push(h)), function U(X) {
          f.each(X, function(W, z) {
            typeof z == "function" ? (!s.unique || !$.has(z)) && C.push(z) : z && z.length && N(z) !== "string" && U(z);
          });
        }(arguments), h && !c && B()), this;
      },
      // Remove a callback from the list
      remove: function() {
        return f.each(arguments, function(U, X) {
          for (var W; (W = f.inArray(X, C, W)) > -1; )
            C.splice(W, 1), W <= M && M--;
        }), this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function(U) {
        return U ? f.inArray(U, C) > -1 : C.length > 0;
      },
      // Remove all callbacks from the list
      empty: function() {
        return C && (C = []), this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function() {
        return w = R = [], C = h = "", this;
      },
      disabled: function() {
        return !C;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function() {
        return w = R = [], !h && !c && (C = h = ""), this;
      },
      locked: function() {
        return !!w;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function(U, X) {
        return w || (X = X || [], X = [U, X.slice ? X.slice() : X], R.push(X), c || B()), this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        return $.fireWith(this, arguments), this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!g;
      }
    };
    return $;
  };
  function In(s) {
    return s;
  }
  function ti(s) {
    throw s;
  }
  function uo(s, c, h, g) {
    var w;
    try {
      s && typeof (w = s.promise) == "function" ? w.call(s).done(c).fail(h) : s && typeof (w = s.then) == "function" ? w.call(s, c, h) : c.apply(void 0, [s].slice(g));
    } catch (C) {
      h(C);
    }
  }
  f.extend({
    Deferred: function(s) {
      var c = [
        // action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        [
          "notify",
          "progress",
          f.Callbacks("memory"),
          f.Callbacks("memory"),
          2
        ],
        [
          "resolve",
          "done",
          f.Callbacks("once memory"),
          f.Callbacks("once memory"),
          0,
          "resolved"
        ],
        [
          "reject",
          "fail",
          f.Callbacks("once memory"),
          f.Callbacks("once memory"),
          1,
          "rejected"
        ]
      ], h = "pending", g = {
        state: function() {
          return h;
        },
        always: function() {
          return w.done(arguments).fail(arguments), this;
        },
        catch: function(C) {
          return g.then(null, C);
        },
        // Keep pipe for back-compat
        pipe: function() {
          var C = arguments;
          return f.Deferred(function(R) {
            f.each(c, function(M, B) {
              var $ = typeof C[B[4]] == "function" && C[B[4]];
              w[B[1]](function() {
                var U = $ && $.apply(this, arguments);
                U && typeof U.promise == "function" ? U.promise().progress(R.notify).done(R.resolve).fail(R.reject) : R[B[0] + "With"](
                  this,
                  $ ? [U] : arguments
                );
              });
            }), C = null;
          }).promise();
        },
        then: function(C, R, M) {
          var B = 0;
          function $(U, X, W, z) {
            return function() {
              var ae = this, be = arguments, me = function() {
                var Oe, nt;
                if (!(U < B)) {
                  if (Oe = W.apply(ae, be), Oe === X.promise())
                    throw new TypeError("Thenable self-resolution");
                  nt = Oe && // Support: Promises/A+ section 2.3.4
                  // https://promisesaplus.com/#point-64
                  // Only check objects and functions for thenability
                  (typeof Oe == "object" || typeof Oe == "function") && Oe.then, typeof nt == "function" ? z ? nt.call(
                    Oe,
                    $(B, X, In, z),
                    $(B, X, ti, z)
                  ) : (B++, nt.call(
                    Oe,
                    $(B, X, In, z),
                    $(B, X, ti, z),
                    $(
                      B,
                      X,
                      In,
                      X.notifyWith
                    )
                  )) : (W !== In && (ae = void 0, be = [Oe]), (z || X.resolveWith)(ae, be));
                }
              }, Re = z ? me : function() {
                try {
                  me();
                } catch (Oe) {
                  f.Deferred.exceptionHook && f.Deferred.exceptionHook(
                    Oe,
                    Re.error
                  ), U + 1 >= B && (W !== ti && (ae = void 0, be = [Oe]), X.rejectWith(ae, be));
                }
              };
              U ? Re() : (f.Deferred.getErrorHook && (Re.error = f.Deferred.getErrorHook()), e.setTimeout(Re));
            };
          }
          return f.Deferred(function(U) {
            c[0][3].add(
              $(
                0,
                U,
                typeof M == "function" ? M : In,
                U.notifyWith
              )
            ), c[1][3].add(
              $(
                0,
                U,
                typeof C == "function" ? C : In
              )
            ), c[2][3].add(
              $(
                0,
                U,
                typeof R == "function" ? R : ti
              )
            );
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function(C) {
          return C != null ? f.extend(C, g) : g;
        }
      }, w = {};
      return f.each(c, function(C, R) {
        var M = R[2], B = R[5];
        g[R[1]] = M.add, B && M.add(
          function() {
            h = B;
          },
          // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          c[3 - C][2].disable,
          // rejected_handlers.disable
          // fulfilled_handlers.disable
          c[3 - C][3].disable,
          // progress_callbacks.lock
          c[0][2].lock,
          // progress_handlers.lock
          c[0][3].lock
        ), M.add(R[3].fire), w[R[0]] = function() {
          return w[R[0] + "With"](this === w ? void 0 : this, arguments), this;
        }, w[R[0] + "With"] = M.fireWith;
      }), g.promise(w), s && s.call(w, w), w;
    },
    // Deferred helper
    when: function(s) {
      var c = arguments.length, h = c, g = Array(h), w = i.call(arguments), C = f.Deferred(), R = function(M) {
        return function(B) {
          g[M] = this, w[M] = arguments.length > 1 ? i.call(arguments) : B, --c || C.resolveWith(g, w);
        };
      };
      if (c <= 1 && (uo(
        s,
        C.done(R(h)).resolve,
        C.reject,
        !c
      ), C.state() === "pending" || typeof (w[h] && w[h].then) == "function"))
        return C.then();
      for (; h--; )
        uo(w[h], R(h), C.reject);
      return C.promise();
    }
  });
  var ld = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  f.Deferred.exceptionHook = function(s, c) {
    s && ld.test(s.name) && e.console.warn(
      "jQuery.Deferred exception",
      s,
      c
    );
  }, f.readyException = function(s) {
    e.setTimeout(function() {
      throw s;
    });
  };
  var ds = f.Deferred();
  f.fn.ready = function(s) {
    return ds.then(s).catch(function(c) {
      f.readyException(c);
    }), this;
  }, f.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: !1,
    // A counter to track how many items to wait for before
    // the ready event fires. See trac-6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function(s) {
      (s === !0 ? --f.readyWait : f.isReady) || (f.isReady = !0, !(s !== !0 && --f.readyWait > 0) && ds.resolveWith(l, [f]));
    }
  }), f.ready.then = ds.then;
  function ni() {
    l.removeEventListener("DOMContentLoaded", ni), e.removeEventListener("load", ni), f.ready();
  }
  l.readyState !== "loading" ? e.setTimeout(f.ready) : (l.addEventListener("DOMContentLoaded", ni), e.addEventListener("load", ni));
  var cd = /-([a-z])/g;
  function ud(s, c) {
    return c.toUpperCase();
  }
  function hn(s) {
    return s.replace(cd, ud);
  }
  function wr(s) {
    return s.nodeType === 1 || s.nodeType === 9 || !+s.nodeType;
  }
  function Tr() {
    this.expando = f.expando + Tr.uid++;
  }
  Tr.uid = 1, Tr.prototype = {
    cache: function(s) {
      var c = s[this.expando];
      return c || (c = /* @__PURE__ */ Object.create(null), wr(s) && (s.nodeType ? s[this.expando] = c : Object.defineProperty(s, this.expando, {
        value: c,
        configurable: !0
      }))), c;
    },
    set: function(s, c, h) {
      var g, w = this.cache(s);
      if (typeof c == "string")
        w[hn(c)] = h;
      else
        for (g in c)
          w[hn(g)] = c[g];
      return h;
    },
    get: function(s, c) {
      return c === void 0 ? this.cache(s) : (
        // Always use camelCase key (gh-2257)
        s[this.expando] && s[this.expando][hn(c)]
      );
    },
    access: function(s, c, h) {
      return c === void 0 || c && typeof c == "string" && h === void 0 ? this.get(s, c) : (this.set(s, c, h), h !== void 0 ? h : c);
    },
    remove: function(s, c) {
      var h, g = s[this.expando];
      if (g !== void 0) {
        if (c !== void 0)
          for (Array.isArray(c) ? c = c.map(hn) : (c = hn(c), c = c in g ? [c] : c.match(Ee) || []), h = c.length; h--; )
            delete g[c[h]];
        (c === void 0 || f.isEmptyObject(g)) && (s.nodeType ? s[this.expando] = void 0 : delete s[this.expando]);
      }
    },
    hasData: function(s) {
      var c = s[this.expando];
      return c !== void 0 && !f.isEmptyObject(c);
    }
  };
  var ye = new Tr(), et = new Tr(), dd = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, fd = /[A-Z]/g;
  function hd(s) {
    return s === "true" ? !0 : s === "false" ? !1 : s === "null" ? null : s === +s + "" ? +s : dd.test(s) ? JSON.parse(s) : s;
  }
  function fo(s, c, h) {
    var g;
    if (h === void 0 && s.nodeType === 1)
      if (g = "data-" + c.replace(fd, "-$&").toLowerCase(), h = s.getAttribute(g), typeof h == "string") {
        try {
          h = hd(h);
        } catch {
        }
        et.set(s, c, h);
      } else
        h = void 0;
    return h;
  }
  f.extend({
    hasData: function(s) {
      return et.hasData(s) || ye.hasData(s);
    },
    data: function(s, c, h) {
      return et.access(s, c, h);
    },
    removeData: function(s, c) {
      et.remove(s, c);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function(s, c, h) {
      return ye.access(s, c, h);
    },
    _removeData: function(s, c) {
      ye.remove(s, c);
    }
  }), f.fn.extend({
    data: function(s, c) {
      var h, g, w, C = this[0], R = C && C.attributes;
      if (s === void 0) {
        if (this.length && (w = et.get(C), C.nodeType === 1 && !ye.get(C, "hasDataAttrs"))) {
          for (h = R.length; h--; )
            R[h] && (g = R[h].name, g.indexOf("data-") === 0 && (g = hn(g.slice(5)), fo(C, g, w[g])));
          ye.set(C, "hasDataAttrs", !0);
        }
        return w;
      }
      return typeof s == "object" ? this.each(function() {
        et.set(this, s);
      }) : Be(this, function(M) {
        var B;
        if (C && M === void 0)
          return B = et.get(C, s), B !== void 0 || (B = fo(C, s), B !== void 0) ? B : void 0;
        this.each(function() {
          et.set(this, s, M);
        });
      }, null, c, arguments.length > 1, null, !0);
    },
    removeData: function(s) {
      return this.each(function() {
        et.remove(this, s);
      });
    }
  }), f.extend({
    queue: function(s, c, h) {
      var g;
      if (s)
        return c = (c || "fx") + "queue", g = ye.get(s, c), h && (!g || Array.isArray(h) ? g = ye.set(s, c, f.makeArray(h)) : g.push(h)), g || [];
    },
    dequeue: function(s, c) {
      c = c || "fx";
      var h = f.queue(s, c), g = h.length, w = h.shift(), C = f._queueHooks(s, c), R = function() {
        f.dequeue(s, c);
      };
      w === "inprogress" && (w = h.shift(), g--), w && (c === "fx" && h.unshift("inprogress"), delete C.stop, w.call(s, R, C)), !g && C && C.empty.fire();
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function(s, c) {
      var h = c + "queueHooks";
      return ye.get(s, h) || ye.set(s, h, {
        empty: f.Callbacks("once memory").add(function() {
          ye.remove(s, [c + "queue", h]);
        })
      });
    }
  }), f.fn.extend({
    queue: function(s, c) {
      var h = 2;
      return typeof s != "string" && (c = s, s = "fx", h--), arguments.length < h ? f.queue(this[0], s) : c === void 0 ? this : this.each(function() {
        var g = f.queue(this, s, c);
        f._queueHooks(this, s), s === "fx" && g[0] !== "inprogress" && f.dequeue(this, s);
      });
    },
    dequeue: function(s) {
      return this.each(function() {
        f.dequeue(this, s);
      });
    },
    clearQueue: function(s) {
      return this.queue(s || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function(s, c) {
      var h, g = 1, w = f.Deferred(), C = this, R = this.length, M = function() {
        --g || w.resolveWith(C, [C]);
      };
      for (typeof s != "string" && (c = s, s = void 0), s = s || "fx"; R--; )
        h = ye.get(C[R], s + "queueHooks"), h && h.empty && (g++, h.empty.add(M));
      return M(), w.promise(c);
    }
  });
  var ho = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Cr = new RegExp("^(?:([+-])=|)(" + ho + ")([a-z%]*)$", "i"), Ut = ["Top", "Right", "Bottom", "Left"];
  function ri(s, c) {
    return s = c || s, s.style.display === "none" || s.style.display === "" && f.css(s, "display") === "none";
  }
  var pd = /^[a-z]/, vd = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  function ii(s) {
    return pd.test(s) && vd.test(s[0].toUpperCase() + s.slice(1));
  }
  function po(s, c, h, g) {
    var w, C, R = 20, M = g ? function() {
      return g.cur();
    } : function() {
      return f.css(s, c, "");
    }, B = M(), $ = h && h[3] || (ii(c) ? "px" : ""), U = s.nodeType && (!ii(c) || $ !== "px" && +B) && Cr.exec(f.css(s, c));
    if (U && U[3] !== $) {
      for (B = B / 2, $ = $ || U[3], U = +B || 1; R--; )
        f.style(s, c, U + $), (1 - C) * (1 - (C = M() / B || 0.5)) <= 0 && (R = 0), U = U / C;
      U = U * 2, f.style(s, c, U + $), h = h || [];
    }
    return h && (U = +U || +B || 0, w = h[1] ? U + (h[1] + 1) * h[2] : +h[2], g && (g.unit = $, g.start = U, g.end = w)), w;
  }
  var md = /^-ms-/;
  function fs(s) {
    return hn(s.replace(md, "ms-"));
  }
  var vo = {};
  function gd(s) {
    var c, h = s.ownerDocument, g = s.nodeName, w = vo[g];
    return w || (c = h.body.appendChild(h.createElement(g)), w = f.css(c, "display"), c.parentNode.removeChild(c), w === "none" && (w = "block"), vo[g] = w, w);
  }
  function Bn(s, c) {
    for (var h, g, w = [], C = 0, R = s.length; C < R; C++)
      g = s[C], g.style && (h = g.style.display, c ? (h === "none" && (w[C] = ye.get(g, "display") || null, w[C] || (g.style.display = "")), g.style.display === "" && ri(g) && (w[C] = gd(g))) : h !== "none" && (w[C] = "none", ye.set(g, "display", h)));
    for (C = 0; C < R; C++)
      w[C] != null && (s[C].style.display = w[C]);
    return s;
  }
  f.fn.extend({
    show: function() {
      return Bn(this, !0);
    },
    hide: function() {
      return Bn(this);
    },
    toggle: function(s) {
      return typeof s == "boolean" ? s ? this.show() : this.hide() : this.each(function() {
        ri(this) ? f(this).show() : f(this).hide();
      });
    }
  });
  var xr = function(s) {
    return f.contains(s.ownerDocument, s) || s.getRootNode(bd) === s.ownerDocument;
  }, bd = { composed: !0 };
  V.getRootNode || (xr = function(s) {
    return f.contains(s.ownerDocument, s);
  });
  var mo = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, $t = {
    // Table parts need to be wrapped with `<table>` or they're
    // stripped to their contents when put in a div.
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do, so we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: ["table"],
    col: ["colgroup", "table"],
    tr: ["tbody", "table"],
    td: ["tr", "tbody", "table"]
  };
  $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead, $t.th = $t.td;
  function tt(s, c) {
    var h;
    return typeof s.getElementsByTagName < "u" ? h = n.slice.call(s.getElementsByTagName(c || "*")) : typeof s.querySelectorAll < "u" ? h = s.querySelectorAll(c || "*") : h = [], c === void 0 || c && H(s, c) ? f.merge([s], h) : h;
  }
  var go = /^$|^module$|\/(?:java|ecma)script/i;
  function hs(s, c) {
    for (var h = 0, g = s.length; h < g; h++)
      ye.set(
        s[h],
        "globalEval",
        !c || ye.get(c[h], "globalEval")
      );
  }
  var yd = /<|&#?\w+;/;
  function bo(s, c, h, g, w) {
    for (var C, R, M, B, $, U, X = c.createDocumentFragment(), W = [], z = 0, ae = s.length; z < ae; z++)
      if (C = s[z], C || C === 0)
        if (N(C) === "object" && (C.nodeType || p(C)))
          f.merge(W, C.nodeType ? [C] : C);
        else if (!yd.test(C))
          W.push(c.createTextNode(C));
        else {
          for (R = R || X.appendChild(c.createElement("div")), M = (mo.exec(C) || ["", ""])[1].toLowerCase(), B = $t[M] || n, U = B.length; --U > -1; )
            R = R.appendChild(c.createElement(B[U]));
          R.innerHTML = f.htmlPrefilter(C), f.merge(W, R.childNodes), R = X.firstChild, R.textContent = "";
        }
    for (X.textContent = "", z = 0; C = W[z++]; ) {
      if (g && f.inArray(C, g) > -1) {
        w && w.push(C);
        continue;
      }
      if ($ = xr(C), R = tt(X.appendChild(C), "script"), $ && hs(R), h)
        for (U = 0; C = R[U++]; )
          go.test(C.type || "") && h.push(C);
    }
    return X;
  }
  function _d(s) {
    return s.type = (s.getAttribute("type") !== null) + "/" + s.type, s;
  }
  function wd(s) {
    return (s.type || "").slice(0, 5) === "true/" ? s.type = s.type.slice(5) : s.removeAttribute("type"), s;
  }
  function Fn(s, c, h, g) {
    c = a(c);
    var w, C, R, M, B, $, U = 0, X = s.length, W = X - 1, z = c[0], ae = typeof z == "function";
    if (ae)
      return s.each(function(be) {
        var me = s.eq(be);
        c[0] = z.call(this, be, me.html()), Fn(me, c, h, g);
      });
    if (X && (w = bo(c, s[0].ownerDocument, !1, s, g), C = w.firstChild, w.childNodes.length === 1 && (w = C), C || g)) {
      for (R = f.map(tt(w, "script"), _d), M = R.length; U < X; U++)
        B = w, U !== W && (B = f.clone(B, !0, !0), M && f.merge(R, tt(B, "script"))), h.call(s[U], B, U);
      if (M)
        for ($ = R[R.length - 1].ownerDocument, f.map(R, wd), U = 0; U < M; U++)
          B = R[U], go.test(B.type || "") && !ye.get(B, "globalEval") && f.contains($, B) && (B.src && (B.type || "").toLowerCase() !== "module" ? f._evalUrl && !B.noModule && f._evalUrl(B.src, {
            nonce: B.nonce,
            crossOrigin: B.crossOrigin
          }, $) : y(B.textContent, B, $));
    }
    return s;
  }
  var si = /^(?:checkbox|radio)$/i, yo = /^([^.]*)(?:\.(.+)|)/;
  function Mn() {
    return !0;
  }
  function Vn() {
    return !1;
  }
  function ps(s, c, h, g, w, C) {
    var R, M;
    if (typeof c == "object") {
      typeof h != "string" && (g = g || h, h = void 0);
      for (M in c)
        ps(s, M, h, g, c[M], C);
      return s;
    }
    if (g == null && w == null ? (w = h, g = h = void 0) : w == null && (typeof h == "string" ? (w = g, g = void 0) : (w = g, g = h, h = void 0)), w === !1)
      w = Vn;
    else if (!w)
      return s;
    return C === 1 && (R = w, w = function(B) {
      return f().off(B), R.apply(this, arguments);
    }, w.guid = R.guid || (R.guid = f.guid++)), s.each(function() {
      f.event.add(this, c, w, g, h);
    });
  }
  f.event = {
    add: function(s, c, h, g, w) {
      var C, R, M, B, $, U, X, W, z, ae, be, me = ye.get(s);
      if (wr(s))
        for (h.handler && (C = h, h = C.handler, w = C.selector), w && f.find.matchesSelector(V, w), h.guid || (h.guid = f.guid++), (B = me.events) || (B = me.events = /* @__PURE__ */ Object.create(null)), (R = me.handle) || (R = me.handle = function(Re) {
          return typeof f < "u" && f.event.triggered !== Re.type ? f.event.dispatch.apply(s, arguments) : void 0;
        }), c = (c || "").match(Ee) || [""], $ = c.length; $--; )
          M = yo.exec(c[$]) || [], z = be = M[1], ae = (M[2] || "").split(".").sort(), z && (X = f.event.special[z] || {}, z = (w ? X.delegateType : X.bindType) || z, X = f.event.special[z] || {}, U = f.extend({
            type: z,
            origType: be,
            data: g,
            handler: h,
            guid: h.guid,
            selector: w,
            needsContext: w && f.expr.match.needsContext.test(w),
            namespace: ae.join(".")
          }, C), (W = B[z]) || (W = B[z] = [], W.delegateCount = 0, (!X.setup || X.setup.call(s, g, ae, R) === !1) && s.addEventListener && s.addEventListener(z, R)), X.add && (X.add.call(s, U), U.handler.guid || (U.handler.guid = h.guid)), w ? W.splice(W.delegateCount++, 0, U) : W.push(U));
    },
    // Detach an event or set of events from an element
    remove: function(s, c, h, g, w) {
      var C, R, M, B, $, U, X, W, z, ae, be, me = ye.hasData(s) && ye.get(s);
      if (!(!me || !(B = me.events))) {
        for (c = (c || "").match(Ee) || [""], $ = c.length; $--; ) {
          if (M = yo.exec(c[$]) || [], z = be = M[1], ae = (M[2] || "").split(".").sort(), !z) {
            for (z in B)
              f.event.remove(s, z + c[$], h, g, !0);
            continue;
          }
          for (X = f.event.special[z] || {}, z = (g ? X.delegateType : X.bindType) || z, W = B[z] || [], M = M[2] && new RegExp("(^|\\.)" + ae.join("\\.(?:.*\\.|)") + "(\\.|$)"), R = C = W.length; C--; )
            U = W[C], (w || be === U.origType) && (!h || h.guid === U.guid) && (!M || M.test(U.namespace)) && (!g || g === U.selector || g === "**" && U.selector) && (W.splice(C, 1), U.selector && W.delegateCount--, X.remove && X.remove.call(s, U));
          R && !W.length && ((!X.teardown || X.teardown.call(s, ae, me.handle) === !1) && f.removeEvent(s, z, me.handle), delete B[z]);
        }
        f.isEmptyObject(B) && ye.remove(s, "handle events");
      }
    },
    dispatch: function(s) {
      var c, h, g, w, C, R, M = new Array(arguments.length), B = f.event.fix(s), $ = (ye.get(this, "events") || /* @__PURE__ */ Object.create(null))[B.type] || [], U = f.event.special[B.type] || {};
      for (M[0] = B, c = 1; c < arguments.length; c++)
        M[c] = arguments[c];
      if (B.delegateTarget = this, !(U.preDispatch && U.preDispatch.call(this, B) === !1)) {
        for (R = f.event.handlers.call(this, B, $), c = 0; (w = R[c++]) && !B.isPropagationStopped(); )
          for (B.currentTarget = w.elem, h = 0; (C = w.handlers[h++]) && !B.isImmediatePropagationStopped(); )
            (!B.rnamespace || C.namespace === !1 || B.rnamespace.test(C.namespace)) && (B.handleObj = C, B.data = C.data, g = ((f.event.special[C.origType] || {}).handle || C.handler).apply(w.elem, M), g !== void 0 && (B.result = g) === !1 && (B.preventDefault(), B.stopPropagation()));
        return U.postDispatch && U.postDispatch.call(this, B), B.result;
      }
    },
    handlers: function(s, c) {
      var h, g, w, C, R, M = [], B = c.delegateCount, $ = s.target;
      if (B && // Support: Firefox <=42 - 66+
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11+
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(s.type === "click" && s.button >= 1)) {
        for (; $ !== this; $ = $.parentNode || this)
          if ($.nodeType === 1 && !(s.type === "click" && $.disabled === !0)) {
            for (C = [], R = {}, h = 0; h < B; h++)
              g = c[h], w = g.selector + " ", R[w] === void 0 && (R[w] = g.needsContext ? f(w, this).index($) > -1 : f.find(w, this, null, [$]).length), R[w] && C.push(g);
            C.length && M.push({ elem: $, handlers: C });
          }
      }
      return $ = this, B < c.length && M.push({ elem: $, handlers: c.slice(B) }), M;
    },
    addProp: function(s, c) {
      Object.defineProperty(f.Event.prototype, s, {
        enumerable: !0,
        configurable: !0,
        get: typeof c == "function" ? function() {
          if (this.originalEvent)
            return c(this.originalEvent);
        } : function() {
          if (this.originalEvent)
            return this.originalEvent[s];
        },
        set: function(h) {
          Object.defineProperty(this, s, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: h
          });
        }
      });
    },
    fix: function(s) {
      return s[f.expando] ? s : new f.Event(s);
    },
    special: f.extend(/* @__PURE__ */ Object.create(null), {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: !0
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function(s) {
          var c = this || s;
          return si.test(c.type) && c.click && H(c, "input") && ai(c, "click", !0), !1;
        },
        trigger: function(s) {
          var c = this || s;
          return si.test(c.type) && c.click && H(c, "input") && ai(c, "click"), !0;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function(s) {
          var c = s.target;
          return si.test(c.type) && c.click && H(c, "input") && ye.get(c, "click") || H(c, "a");
        }
      },
      beforeunload: {
        postDispatch: function(s) {
          s.result !== void 0 && s.preventDefault();
        }
      }
    })
  };
  function ai(s, c, h) {
    if (!h) {
      ye.get(s, c) === void 0 && f.event.add(s, c, Mn);
      return;
    }
    ye.set(s, c, !1), f.event.add(s, c, {
      namespace: !1,
      handler: function(g) {
        var w, C = ye.get(this, c);
        if (g.isTrigger & 1 && this[c]) {
          if (C.length)
            (f.event.special[c] || {}).delegateType && g.stopPropagation();
          else if (C = i.call(arguments), ye.set(this, c, C), this[c](), w = ye.get(this, c), ye.set(this, c, !1), C !== w)
            return g.stopImmediatePropagation(), g.preventDefault(), w && w.value;
        } else
          C.length && (ye.set(this, c, {
            value: f.event.trigger(
              C[0],
              C.slice(1),
              this
            )
          }), g.stopPropagation(), g.isImmediatePropagationStopped = Mn);
      }
    });
  }
  f.removeEvent = function(s, c, h) {
    s.removeEventListener && s.removeEventListener(c, h);
  }, f.Event = function(s, c) {
    if (!(this instanceof f.Event))
      return new f.Event(s, c);
    s && s.type ? (this.originalEvent = s, this.type = s.type, this.isDefaultPrevented = s.defaultPrevented ? Mn : Vn, this.target = s.target, this.currentTarget = s.currentTarget, this.relatedTarget = s.relatedTarget) : this.type = s, c && f.extend(this, c), this.timeStamp = s && s.timeStamp || Date.now(), this[f.expando] = !0;
  }, f.Event.prototype = {
    constructor: f.Event,
    isDefaultPrevented: Vn,
    isPropagationStopped: Vn,
    isImmediatePropagationStopped: Vn,
    isSimulated: !1,
    preventDefault: function() {
      var s = this.originalEvent;
      this.isDefaultPrevented = Mn, s && !this.isSimulated && s.preventDefault();
    },
    stopPropagation: function() {
      var s = this.originalEvent;
      this.isPropagationStopped = Mn, s && !this.isSimulated && s.stopPropagation();
    },
    stopImmediatePropagation: function() {
      var s = this.originalEvent;
      this.isImmediatePropagationStopped = Mn, s && !this.isSimulated && s.stopImmediatePropagation(), this.stopPropagation();
    }
  }, f.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, f.event.addProp), f.each({ focus: "focusin", blur: "focusout" }, function(s, c) {
    function h(g) {
      var w = f.event.fix(g);
      w.type = g.type === "focusin" ? "focus" : "blur", w.isSimulated = !0, w.target === w.currentTarget && ye.get(this, "handle")(w);
    }
    f.event.special[s] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function() {
        if (ai(this, s, !0), K)
          this.addEventListener(c, h);
        else
          return !1;
      },
      trigger: function() {
        return ai(this, s), !0;
      },
      teardown: function() {
        if (K)
          this.removeEventListener(c, h);
        else
          return !1;
      },
      // Suppress native focus or blur if we're currently inside
      // a leveraged native-event stack
      _default: function(g) {
        return ye.get(g.target, s);
      },
      delegateType: c
    };
  }), f.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(s, c) {
    f.event.special[s] = {
      delegateType: c,
      bindType: c,
      handle: function(h) {
        var g, w = this, C = h.relatedTarget, R = h.handleObj;
        return (!C || C !== w && !f.contains(w, C)) && (h.type = R.origType, g = R.handler.apply(this, arguments), h.type = c), g;
      }
    };
  }), f.fn.extend({
    on: function(s, c, h, g) {
      return ps(this, s, c, h, g);
    },
    one: function(s, c, h, g) {
      return ps(this, s, c, h, g, 1);
    },
    off: function(s, c, h) {
      var g, w;
      if (s && s.preventDefault && s.handleObj)
        return g = s.handleObj, f(s.delegateTarget).off(
          g.namespace ? g.origType + "." + g.namespace : g.origType,
          g.selector,
          g.handler
        ), this;
      if (typeof s == "object") {
        for (w in s)
          this.off(w, c, s[w]);
        return this;
      }
      return (c === !1 || typeof c == "function") && (h = c, c = void 0), h === !1 && (h = Vn), this.each(function() {
        f.event.remove(this, s, h, c);
      });
    }
  });
  var Td = /<script|<style|<link/i;
  function _o(s, c) {
    return H(s, "table") && H(c.nodeType !== 11 ? c : c.firstChild, "tr") && f(s).children("tbody")[0] || s;
  }
  function wo(s, c) {
    var h, g, w, C = ye.get(s, "events");
    if (c.nodeType === 1) {
      if (C) {
        ye.remove(c, "handle events");
        for (h in C)
          for (g = 0, w = C[h].length; g < w; g++)
            f.event.add(c, h, C[h][g]);
      }
      et.hasData(s) && et.set(c, f.extend({}, et.get(s)));
    }
  }
  function To(s, c, h) {
    for (var g, w = c ? f.filter(c, s) : s, C = 0; (g = w[C]) != null; C++)
      !h && g.nodeType === 1 && f.cleanData(tt(g)), g.parentNode && (h && xr(g) && hs(tt(g, "script")), g.parentNode.removeChild(g));
    return s;
  }
  f.extend({
    htmlPrefilter: function(s) {
      return s;
    },
    clone: function(s, c, h) {
      var g, w, C, R, M = s.cloneNode(!0), B = xr(s);
      if (K && (s.nodeType === 1 || s.nodeType === 11) && !f.isXMLDoc(s))
        for (R = tt(M), C = tt(s), g = 0, w = C.length; g < w; g++)
          H(R[g], "textarea") && (R[g].defaultValue = C[g].defaultValue);
      if (c)
        if (h)
          for (C = C || tt(s), R = R || tt(M), g = 0, w = C.length; g < w; g++)
            wo(C[g], R[g]);
        else
          wo(s, M);
      return R = tt(M, "script"), R.length > 0 && hs(R, !B && tt(s, "script")), M;
    },
    cleanData: function(s) {
      for (var c, h, g, w = f.event.special, C = 0; (h = s[C]) !== void 0; C++)
        if (wr(h)) {
          if (c = h[ye.expando]) {
            if (c.events)
              for (g in c.events)
                w[g] ? f.event.remove(h, g) : f.removeEvent(h, g, c.handle);
            h[ye.expando] = void 0;
          }
          h[et.expando] && (h[et.expando] = void 0);
        }
    }
  }), f.fn.extend({
    detach: function(s) {
      return To(this, s, !0);
    },
    remove: function(s) {
      return To(this, s);
    },
    text: function(s) {
      return Be(this, function(c) {
        return c === void 0 ? f.text(this) : this.empty().each(function() {
          (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = c);
        });
      }, null, s, arguments.length);
    },
    append: function() {
      return Fn(this, arguments, function(s) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var c = _o(this, s);
          c.appendChild(s);
        }
      });
    },
    prepend: function() {
      return Fn(this, arguments, function(s) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var c = _o(this, s);
          c.insertBefore(s, c.firstChild);
        }
      });
    },
    before: function() {
      return Fn(this, arguments, function(s) {
        this.parentNode && this.parentNode.insertBefore(s, this);
      });
    },
    after: function() {
      return Fn(this, arguments, function(s) {
        this.parentNode && this.parentNode.insertBefore(s, this.nextSibling);
      });
    },
    empty: function() {
      for (var s, c = 0; (s = this[c]) != null; c++)
        s.nodeType === 1 && (f.cleanData(tt(s, !1)), s.textContent = "");
      return this;
    },
    clone: function(s, c) {
      return s = s ?? !1, c = c ?? s, this.map(function() {
        return f.clone(this, s, c);
      });
    },
    html: function(s) {
      return Be(this, function(c) {
        var h = this[0] || {}, g = 0, w = this.length;
        if (c === void 0 && h.nodeType === 1)
          return h.innerHTML;
        if (typeof c == "string" && !Td.test(c) && !$t[(mo.exec(c) || ["", ""])[1].toLowerCase()]) {
          c = f.htmlPrefilter(c);
          try {
            for (; g < w; g++)
              h = this[g] || {}, h.nodeType === 1 && (f.cleanData(tt(h, !1)), h.innerHTML = c);
            h = 0;
          } catch {
          }
        }
        h && this.empty().append(c);
      }, null, s, arguments.length);
    },
    replaceWith: function() {
      var s = [];
      return Fn(this, arguments, function(c) {
        var h = this.parentNode;
        f.inArray(this, s) < 0 && (f.cleanData(tt(this)), h && h.replaceChild(c, this));
      }, s);
    }
  }), f.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(s, c) {
    f.fn[s] = function(h) {
      for (var g, w = [], C = f(h), R = C.length - 1, M = 0; M <= R; M++)
        g = M === R ? this : this.clone(!0), f(C[M])[c](g), o.apply(w, g);
      return this.pushStack(w);
    };
  });
  var Cd = new RegExp("^(" + ho + ")(?!px)[a-z%]+$", "i"), vs = /^--/;
  function oi(s) {
    var c = s.ownerDocument.defaultView;
    return c || (c = e), c.getComputedStyle(s);
  }
  function xd(s, c, h) {
    var g, w, C = {};
    for (w in c)
      C[w] = s.style[w], s.style[w] = c[w];
    g = h.call(s);
    for (w in c)
      s.style[w] = C[w];
    return g;
  }
  function Co(s, c, h) {
    var g, w = vs.test(c);
    return h = h || oi(s), h && (g = h.getPropertyValue(c) || h[c], w && g && (g = g.replace(F, "$1") || void 0), g === "" && !xr(s) && (g = f.style(s, c))), g !== void 0 ? (
      // Support: IE <=9 - 11+
      // IE returns zIndex value as an integer.
      g + ""
    ) : g;
  }
  var xo = ["Webkit", "Moz", "ms"], So = l.createElement("div").style;
  function Sd(s) {
    for (var c = s[0].toUpperCase() + s.slice(1), h = xo.length; h--; )
      if (s = xo[h] + c, s in So)
        return s;
  }
  function ms(s) {
    return s in So ? s : Sd(s) || s;
  }
  var Do, Ao, Yt = l.createElement("table");
  function Eo() {
    if (
      // This is a singleton, we need to execute it only once
      !(!Yt || // Finish early in limited (non-browser) environments
      !Yt.style)
    ) {
      var s, c = l.createElement("col"), h = l.createElement("tr"), g = l.createElement("td");
      if (Yt.style.cssText = "position:absolute;left:-11111px;border-collapse:separate;border-spacing:0", h.style.cssText = "box-sizing:content-box;border:1px solid;height:1px", g.style.cssText = "height:9px;width:9px;padding:0", c.span = 2, V.appendChild(Yt).appendChild(c).parentNode.appendChild(h).appendChild(g).parentNode.appendChild(g.cloneNode(!0)), Yt.offsetWidth === 0) {
        V.removeChild(Yt);
        return;
      }
      s = e.getComputedStyle(h), Ao = K || Math.round(
        parseFloat(
          e.getComputedStyle(c).width
        )
      ) === 18, Do = Math.round(parseFloat(s.height) + parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth)) === h.offsetHeight, V.removeChild(Yt), Yt = null;
    }
  }
  f.extend(T, {
    reliableTrDimensions: function() {
      return Eo(), Do;
    },
    reliableColDimensions: function() {
      return Eo(), Ao;
    }
  });
  var Dd = { position: "absolute", visibility: "hidden", display: "block" }, No = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  function Oo(s, c, h) {
    var g = Cr.exec(c);
    return g ? (
      // Guard against undefined "subtract", e.g., when used as in cssHooks
      Math.max(0, g[2] - (h || 0)) + (g[3] || "px")
    ) : c;
  }
  function Po(s, c, h, g, w, C) {
    var R = c === "width" ? 1 : 0, M = 0, B = 0, $ = 0;
    if (h === (g ? "border" : "content"))
      return 0;
    for (; R < 4; R += 2)
      h === "margin" && ($ += f.css(s, h + Ut[R], !0, w)), g ? (h === "content" && (B -= f.css(s, "padding" + Ut[R], !0, w)), h !== "margin" && (B -= f.css(s, "border" + Ut[R] + "Width", !0, w))) : (B += f.css(s, "padding" + Ut[R], !0, w), h !== "padding" ? B += f.css(s, "border" + Ut[R] + "Width", !0, w) : M += f.css(s, "border" + Ut[R] + "Width", !0, w));
    return !g && C >= 0 && (B += Math.max(0, Math.ceil(
      s["offset" + c[0].toUpperCase() + c.slice(1)] - C - B - M - 0.5
      // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
    )) || 0), B + $;
  }
  function Ro(s, c, h) {
    var g = oi(s), w = K || h, C = w && f.css(s, "boxSizing", !1, g) === "border-box", R = C, M = Co(s, c, g), B = "offset" + c[0].toUpperCase() + c.slice(1);
    if (Cd.test(M)) {
      if (!h)
        return M;
      M = "auto";
    }
    return (
      // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      (M === "auto" || // Support: IE 9 - 11+
      // Use offsetWidth/offsetHeight for when box sizing is unreliable.
      // In those cases, the computed value can be trusted to be border-box.
      K && C || !T.reliableColDimensions() && H(s, "col") || !T.reliableTrDimensions() && H(s, "tr")) && // Make sure the element is visible & connected
      s.getClientRects().length && (C = f.css(s, "boxSizing", !1, g) === "border-box", R = B in s, R && (M = s[B])), M = parseFloat(M) || 0, M + Po(
        s,
        c,
        h || (C ? "border" : "content"),
        R,
        g,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        M
      ) + "px"
    );
  }
  f.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {},
    // Get and set the style property on a DOM Node
    style: function(s, c, h, g) {
      if (!(!s || s.nodeType === 3 || s.nodeType === 8 || !s.style)) {
        var w, C, R, M = fs(c), B = vs.test(c), $ = s.style;
        if (B || (c = ms(M)), R = f.cssHooks[c] || f.cssHooks[M], h !== void 0) {
          if (C = typeof h, C === "string" && (w = Cr.exec(h)) && w[1] && (h = po(s, c, w), C = "number"), h == null || h !== h)
            return;
          C === "number" && (h += w && w[3] || (ii(M) ? "px" : "")), K && h === "" && c.indexOf("background") === 0 && ($[c] = "inherit"), (!R || !("set" in R) || (h = R.set(s, h, g)) !== void 0) && (B ? $.setProperty(c, h) : $[c] = h);
        } else
          return R && "get" in R && (w = R.get(s, !1, g)) !== void 0 ? w : $[c];
      }
    },
    css: function(s, c, h, g) {
      var w, C, R, M = fs(c), B = vs.test(c);
      return B || (c = ms(M)), R = f.cssHooks[c] || f.cssHooks[M], R && "get" in R && (w = R.get(s, !0, h)), w === void 0 && (w = Co(s, c, g)), w === "normal" && c in No && (w = No[c]), h === "" || h ? (C = parseFloat(w), h === !0 || isFinite(C) ? C || 0 : w) : w;
    }
  }), f.each(["height", "width"], function(s, c) {
    f.cssHooks[c] = {
      get: function(h, g, w) {
        if (g)
          return f.css(h, "display") === "none" ? xd(h, Dd, function() {
            return Ro(h, c, w);
          }) : Ro(h, c, w);
      },
      set: function(h, g, w) {
        var C, R = oi(h), M = w && f.css(h, "boxSizing", !1, R) === "border-box", B = w ? Po(
          h,
          c,
          w,
          M,
          R
        ) : 0;
        return B && (C = Cr.exec(g)) && (C[3] || "px") !== "px" && (h.style[c] = g, g = f.css(h, c)), Oo(h, g, B);
      }
    };
  }), f.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(s, c) {
    f.cssHooks[s + c] = {
      expand: function(h) {
        for (var g = 0, w = {}, C = typeof h == "string" ? h.split(" ") : [h]; g < 4; g++)
          w[s + Ut[g] + c] = C[g] || C[g - 2] || C[0];
        return w;
      }
    }, s !== "margin" && (f.cssHooks[s + c].set = Oo);
  }), f.fn.extend({
    css: function(s, c) {
      return Be(this, function(h, g, w) {
        var C, R, M = {}, B = 0;
        if (Array.isArray(g)) {
          for (C = oi(h), R = g.length; B < R; B++)
            M[g[B]] = f.css(h, g[B], !1, C);
          return M;
        }
        return w !== void 0 ? f.style(h, g, w) : f.css(h, g);
      }, s, c, arguments.length > 1);
    }
  });
  function gt(s, c, h, g, w) {
    return new gt.prototype.init(s, c, h, g, w);
  }
  f.Tween = gt, gt.prototype = {
    constructor: gt,
    init: function(s, c, h, g, w, C) {
      this.elem = s, this.prop = h, this.easing = w || f.easing._default, this.options = c, this.start = this.now = this.cur(), this.end = g, this.unit = C || (ii(h) ? "px" : "");
    },
    cur: function() {
      var s = gt.propHooks[this.prop];
      return s && s.get ? s.get(this) : gt.propHooks._default.get(this);
    },
    run: function(s) {
      var c, h = gt.propHooks[this.prop];
      return this.options.duration ? this.pos = c = f.easing[this.easing](
        s,
        this.options.duration * s,
        0,
        1,
        this.options.duration
      ) : this.pos = c = s, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), h && h.set ? h.set(this) : gt.propHooks._default.set(this), this;
    }
  }, gt.prototype.init.prototype = gt.prototype, gt.propHooks = {
    _default: {
      get: function(s) {
        var c;
        return s.elem.nodeType !== 1 || s.elem[s.prop] != null && s.elem.style[s.prop] == null ? s.elem[s.prop] : (c = f.css(s.elem, s.prop, ""), !c || c === "auto" ? 0 : c);
      },
      set: function(s) {
        f.fx.step[s.prop] ? f.fx.step[s.prop](s) : s.elem.nodeType === 1 && (f.cssHooks[s.prop] || s.elem.style[ms(s.prop)] != null) ? f.style(s.elem, s.prop, s.now + s.unit) : s.elem[s.prop] = s.now;
      }
    }
  }, f.easing = {
    linear: function(s) {
      return s;
    },
    swing: function(s) {
      return 0.5 - Math.cos(s * Math.PI) / 2;
    },
    _default: "swing"
  }, f.fx = gt.prototype.init, f.fx.step = {};
  var Hn, li, Ad = /^(?:toggle|show|hide)$/, Ed = /queueHooks$/;
  function gs() {
    li && (l.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(gs) : e.setTimeout(gs, 13), f.fx.tick());
  }
  function ko() {
    return e.setTimeout(function() {
      Hn = void 0;
    }), Hn = Date.now();
  }
  function ci(s, c) {
    var h, g = 0, w = { height: s };
    for (c = c ? 1 : 0; g < 4; g += 2 - c)
      h = Ut[g], w["margin" + h] = w["padding" + h] = s;
    return c && (w.opacity = w.width = s), w;
  }
  function Lo(s, c, h) {
    for (var g, w = (At.tweeners[c] || []).concat(At.tweeners["*"]), C = 0, R = w.length; C < R; C++)
      if (g = w[C].call(h, c, s))
        return g;
  }
  function Nd(s, c, h) {
    var g, w, C, R, M, B, $, U, X = "width" in c || "height" in c, W = this, z = {}, ae = s.style, be = s.nodeType && ri(s), me = ye.get(s, "fxshow");
    h.queue || (R = f._queueHooks(s, "fx"), R.unqueued == null && (R.unqueued = 0, M = R.empty.fire, R.empty.fire = function() {
      R.unqueued || M();
    }), R.unqueued++, W.always(function() {
      W.always(function() {
        R.unqueued--, f.queue(s, "fx").length || R.empty.fire();
      });
    }));
    for (g in c)
      if (w = c[g], Ad.test(w)) {
        if (delete c[g], C = C || w === "toggle", w === (be ? "hide" : "show"))
          if (w === "show" && me && me[g] !== void 0)
            be = !0;
          else
            continue;
        z[g] = me && me[g] || f.style(s, g);
      }
    if (B = !f.isEmptyObject(c), !(!B && f.isEmptyObject(z))) {
      X && s.nodeType === 1 && (h.overflow = [ae.overflow, ae.overflowX, ae.overflowY], $ = me && me.display, $ == null && ($ = ye.get(s, "display")), U = f.css(s, "display"), U === "none" && ($ ? U = $ : (Bn([s], !0), $ = s.style.display || $, U = f.css(s, "display"), Bn([s]))), (U === "inline" || U === "inline-block" && $ != null) && f.css(s, "float") === "none" && (B || (W.done(function() {
        ae.display = $;
      }), $ == null && (U = ae.display, $ = U === "none" ? "" : U)), ae.display = "inline-block")), h.overflow && (ae.overflow = "hidden", W.always(function() {
        ae.overflow = h.overflow[0], ae.overflowX = h.overflow[1], ae.overflowY = h.overflow[2];
      })), B = !1;
      for (g in z)
        B || (me ? "hidden" in me && (be = me.hidden) : me = ye.set(s, "fxshow", { display: $ }), C && (me.hidden = !be), be && Bn([s], !0), W.done(function() {
          be || Bn([s]), ye.remove(s, "fxshow");
          for (g in z)
            f.style(s, g, z[g]);
        })), B = Lo(be ? me[g] : 0, g, W), g in me || (me[g] = B.start, be && (B.end = B.start, B.start = 0));
    }
  }
  function Od(s, c) {
    var h, g, w, C, R;
    for (h in s)
      if (g = fs(h), w = c[g], C = s[h], Array.isArray(C) && (w = C[1], C = s[h] = C[0]), h !== g && (s[g] = C, delete s[h]), R = f.cssHooks[g], R && "expand" in R) {
        C = R.expand(C), delete s[g];
        for (h in C)
          h in s || (s[h] = C[h], c[h] = w);
      } else
        c[g] = w;
  }
  function At(s, c, h) {
    var g, w, C = 0, R = At.prefilters.length, M = f.Deferred().always(function() {
      delete B.elem;
    }), B = function() {
      if (w)
        return !1;
      for (var X = Hn || ko(), W = Math.max(0, $.startTime + $.duration - X), z = 1 - (W / $.duration || 0), ae = 0, be = $.tweens.length; ae < be; ae++)
        $.tweens[ae].run(z);
      return M.notifyWith(s, [$, z, W]), z < 1 && be ? W : (be || M.notifyWith(s, [$, 1, 0]), M.resolveWith(s, [$]), !1);
    }, $ = M.promise({
      elem: s,
      props: f.extend({}, c),
      opts: f.extend(!0, {
        specialEasing: {},
        easing: f.easing._default
      }, h),
      originalProperties: c,
      originalOptions: h,
      startTime: Hn || ko(),
      duration: h.duration,
      tweens: [],
      createTween: function(X, W) {
        var z = f.Tween(
          s,
          $.opts,
          X,
          W,
          $.opts.specialEasing[X] || $.opts.easing
        );
        return $.tweens.push(z), z;
      },
      stop: function(X) {
        var W = 0, z = X ? $.tweens.length : 0;
        if (w)
          return this;
        for (w = !0; W < z; W++)
          $.tweens[W].run(1);
        return X ? (M.notifyWith(s, [$, 1, 0]), M.resolveWith(s, [$, X])) : M.rejectWith(s, [$, X]), this;
      }
    }), U = $.props;
    for (Od(U, $.opts.specialEasing); C < R; C++)
      if (g = At.prefilters[C].call($, s, U, $.opts), g)
        return typeof g.stop == "function" && (f._queueHooks($.elem, $.opts.queue).stop = g.stop.bind(g)), g;
    return f.map(U, Lo, $), typeof $.opts.start == "function" && $.opts.start.call(s, $), $.progress($.opts.progress).done($.opts.done, $.opts.complete).fail($.opts.fail).always($.opts.always), f.fx.timer(
      f.extend(B, {
        elem: s,
        anim: $,
        queue: $.opts.queue
      })
    ), $;
  }
  f.Animation = f.extend(At, {
    tweeners: {
      "*": [function(s, c) {
        var h = this.createTween(s, c);
        return po(h.elem, s, Cr.exec(c), h), h;
      }]
    },
    tweener: function(s, c) {
      typeof s == "function" ? (c = s, s = ["*"]) : s = s.match(Ee);
      for (var h, g = 0, w = s.length; g < w; g++)
        h = s[g], At.tweeners[h] = At.tweeners[h] || [], At.tweeners[h].unshift(c);
    },
    prefilters: [Nd],
    prefilter: function(s, c) {
      c ? At.prefilters.unshift(s) : At.prefilters.push(s);
    }
  }), f.speed = function(s, c, h) {
    var g = s && typeof s == "object" ? f.extend({}, s) : {
      complete: h || c || typeof s == "function" && s,
      duration: s,
      easing: h && c || c && typeof c != "function" && c
    };
    return f.fx.off ? g.duration = 0 : typeof g.duration != "number" && (g.duration in f.fx.speeds ? g.duration = f.fx.speeds[g.duration] : g.duration = f.fx.speeds._default), (g.queue == null || g.queue === !0) && (g.queue = "fx"), g.old = g.complete, g.complete = function() {
      typeof g.old == "function" && g.old.call(this), g.queue && f.dequeue(this, g.queue);
    }, g;
  }, f.fn.extend({
    fadeTo: function(s, c, h, g) {
      return this.filter(ri).css("opacity", 0).show().end().animate({ opacity: c }, s, h, g);
    },
    animate: function(s, c, h, g) {
      var w = f.isEmptyObject(s), C = f.speed(c, h, g), R = function() {
        var M = At(this, f.extend({}, s), C);
        (w || ye.get(this, "finish")) && M.stop(!0);
      };
      return R.finish = R, w || C.queue === !1 ? this.each(R) : this.queue(C.queue, R);
    },
    stop: function(s, c, h) {
      var g = function(w) {
        var C = w.stop;
        delete w.stop, C(h);
      };
      return typeof s != "string" && (h = c, c = s, s = void 0), c && this.queue(s || "fx", []), this.each(function() {
        var w = !0, C = s != null && s + "queueHooks", R = f.timers, M = ye.get(this);
        if (C)
          M[C] && M[C].stop && g(M[C]);
        else
          for (C in M)
            M[C] && M[C].stop && Ed.test(C) && g(M[C]);
        for (C = R.length; C--; )
          R[C].elem === this && (s == null || R[C].queue === s) && (R[C].anim.stop(h), w = !1, R.splice(C, 1));
        (w || !h) && f.dequeue(this, s);
      });
    },
    finish: function(s) {
      return s !== !1 && (s = s || "fx"), this.each(function() {
        var c, h = ye.get(this), g = h[s + "queue"], w = h[s + "queueHooks"], C = f.timers, R = g ? g.length : 0;
        for (h.finish = !0, f.queue(this, s, []), w && w.stop && w.stop.call(this, !0), c = C.length; c--; )
          C[c].elem === this && C[c].queue === s && (C[c].anim.stop(!0), C.splice(c, 1));
        for (c = 0; c < R; c++)
          g[c] && g[c].finish && g[c].finish.call(this);
        delete h.finish;
      });
    }
  }), f.each(["toggle", "show", "hide"], function(s, c) {
    var h = f.fn[c];
    f.fn[c] = function(g, w, C) {
      return g == null || typeof g == "boolean" ? h.apply(this, arguments) : this.animate(ci(c, !0), g, w, C);
    };
  }), f.each({
    slideDown: ci("show"),
    slideUp: ci("hide"),
    slideToggle: ci("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
  }, function(s, c) {
    f.fn[s] = function(h, g, w) {
      return this.animate(c, h, g, w);
    };
  }), f.timers = [], f.fx.tick = function() {
    var s, c = 0, h = f.timers;
    for (Hn = Date.now(); c < h.length; c++)
      s = h[c], !s() && h[c] === s && h.splice(c--, 1);
    h.length || f.fx.stop(), Hn = void 0;
  }, f.fx.timer = function(s) {
    f.timers.push(s), f.fx.start();
  }, f.fx.start = function() {
    li || (li = !0, gs());
  }, f.fx.stop = function() {
    li = null;
  }, f.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }, f.fn.delay = function(s, c) {
    return s = f.fx && f.fx.speeds[s] || s, c = c || "fx", this.queue(c, function(h, g) {
      var w = e.setTimeout(h, s);
      g.stop = function() {
        e.clearTimeout(w);
      };
    });
  };
  var Pd = /^(?:input|select|textarea|button)$/i, Rd = /^(?:a|area)$/i;
  f.fn.extend({
    prop: function(s, c) {
      return Be(this, f.prop, s, c, arguments.length > 1);
    },
    removeProp: function(s) {
      return this.each(function() {
        delete this[f.propFix[s] || s];
      });
    }
  }), f.extend({
    prop: function(s, c, h) {
      var g, w, C = s.nodeType;
      if (!(C === 3 || C === 8 || C === 2))
        return (C !== 1 || !f.isXMLDoc(s)) && (c = f.propFix[c] || c, w = f.propHooks[c]), h !== void 0 ? w && "set" in w && (g = w.set(s, h, c)) !== void 0 ? g : s[c] = h : w && "get" in w && (g = w.get(s, c)) !== null ? g : s[c];
    },
    propHooks: {
      tabIndex: {
        get: function(s) {
          var c = s.getAttribute("tabindex");
          return c ? parseInt(c, 10) : Pd.test(s.nodeName) || // href-less anchor's `tabIndex` property value is `0` and
          // the `tabindex` attribute value: `null`. We want `-1`.
          Rd.test(s.nodeName) && s.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), K && (f.propHooks.selected = {
    get: function(s) {
      var c = s.parentNode;
      return c && c.parentNode && c.parentNode.selectedIndex, null;
    },
    set: function(s) {
      var c = s.parentNode;
      c && (c.selectedIndex, c.parentNode && c.parentNode.selectedIndex);
    }
  }), f.each([
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable"
  ], function() {
    f.propFix[this.toLowerCase()] = this;
  });
  function pn(s) {
    var c = s.match(Ee) || [];
    return c.join(" ");
  }
  function $n(s) {
    return s.getAttribute && s.getAttribute("class") || "";
  }
  function bs(s) {
    return Array.isArray(s) ? s : typeof s == "string" ? s.match(Ee) || [] : [];
  }
  f.fn.extend({
    addClass: function(s) {
      var c, h, g, w, C, R;
      return typeof s == "function" ? this.each(function(M) {
        f(this).addClass(s.call(this, M, $n(this)));
      }) : (c = bs(s), c.length ? this.each(function() {
        if (g = $n(this), h = this.nodeType === 1 && " " + pn(g) + " ", h) {
          for (C = 0; C < c.length; C++)
            w = c[C], h.indexOf(" " + w + " ") < 0 && (h += w + " ");
          R = pn(h), g !== R && this.setAttribute("class", R);
        }
      }) : this);
    },
    removeClass: function(s) {
      var c, h, g, w, C, R;
      return typeof s == "function" ? this.each(function(M) {
        f(this).removeClass(s.call(this, M, $n(this)));
      }) : arguments.length ? (c = bs(s), c.length ? this.each(function() {
        if (g = $n(this), h = this.nodeType === 1 && " " + pn(g) + " ", h) {
          for (C = 0; C < c.length; C++)
            for (w = c[C]; h.indexOf(" " + w + " ") > -1; )
              h = h.replace(" " + w + " ", " ");
          R = pn(h), g !== R && this.setAttribute("class", R);
        }
      }) : this) : this.attr("class", "");
    },
    toggleClass: function(s, c) {
      var h, g, w, C;
      return typeof s == "function" ? this.each(function(R) {
        f(this).toggleClass(
          s.call(this, R, $n(this), c),
          c
        );
      }) : typeof c == "boolean" ? c ? this.addClass(s) : this.removeClass(s) : (h = bs(s), h.length ? this.each(function() {
        for (C = f(this), w = 0; w < h.length; w++)
          g = h[w], C.hasClass(g) ? C.removeClass(g) : C.addClass(g);
      }) : this);
    },
    hasClass: function(s) {
      var c, h, g = 0;
      for (c = " " + s + " "; h = this[g++]; )
        if (h.nodeType === 1 && (" " + pn($n(h)) + " ").indexOf(c) > -1)
          return !0;
      return !1;
    }
  }), f.fn.extend({
    val: function(s) {
      var c, h, g, w = this[0];
      return arguments.length ? (g = typeof s == "function", this.each(function(C) {
        var R;
        this.nodeType === 1 && (g ? R = s.call(this, C, f(this).val()) : R = s, R == null ? R = "" : typeof R == "number" ? R += "" : Array.isArray(R) && (R = f.map(R, function(M) {
          return M == null ? "" : M + "";
        })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], (!c || !("set" in c) || c.set(this, R, "value") === void 0) && (this.value = R));
      })) : w ? (c = f.valHooks[w.type] || f.valHooks[w.nodeName.toLowerCase()], c && "get" in c && (h = c.get(w, "value")) !== void 0 ? h : (h = w.value, h ?? "")) : void 0;
    }
  }), f.extend({
    valHooks: {
      select: {
        get: function(s) {
          var c, h, g, w = s.options, C = s.selectedIndex, R = s.type === "select-one", M = R ? null : [], B = R ? C + 1 : w.length;
          for (C < 0 ? g = B : g = R ? C : 0; g < B; g++)
            if (h = w[g], h.selected && // Don't return options that are disabled or in a disabled optgroup
            !h.disabled && (!h.parentNode.disabled || !H(h.parentNode, "optgroup"))) {
              if (c = f(h).val(), R)
                return c;
              M.push(c);
            }
          return M;
        },
        set: function(s, c) {
          for (var h, g, w = s.options, C = f.makeArray(c), R = w.length; R--; )
            g = w[R], (g.selected = f.inArray(f(g).val(), C) > -1) && (h = !0);
          return h || (s.selectedIndex = -1), C;
        }
      }
    }
  }), K && (f.valHooks.option = {
    get: function(s) {
      var c = s.getAttribute("value");
      return c ?? // Support: IE <=10 - 11+
      // option.text throws exceptions (trac-14686, trac-14858)
      // Strip and collapse whitespace
      // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
      pn(f.text(s));
    }
  }), f.each(["radio", "checkbox"], function() {
    f.valHooks[this] = {
      set: function(s, c) {
        if (Array.isArray(c))
          return s.checked = f.inArray(f(s).val(), c) > -1;
      }
    };
  });
  var Io = /^(?:focusinfocus|focusoutblur)$/, Bo = function(s) {
    s.stopPropagation();
  };
  f.extend(f.event, {
    trigger: function(s, c, h, g) {
      var w, C, R, M, B, $, U, X, W = [h || l], z = m.call(s, "type") ? s.type : s, ae = m.call(s, "namespace") ? s.namespace.split(".") : [];
      if (C = X = R = h = h || l, !(h.nodeType === 3 || h.nodeType === 8) && !Io.test(z + f.event.triggered) && (z.indexOf(".") > -1 && (ae = z.split("."), z = ae.shift(), ae.sort()), B = z.indexOf(":") < 0 && "on" + z, s = s[f.expando] ? s : new f.Event(z, typeof s == "object" && s), s.isTrigger = g ? 2 : 3, s.namespace = ae.join("."), s.rnamespace = s.namespace ? new RegExp("(^|\\.)" + ae.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, s.result = void 0, s.target || (s.target = h), c = c == null ? [s] : f.makeArray(c, [s]), U = f.event.special[z] || {}, !(!g && U.trigger && U.trigger.apply(h, c) === !1))) {
        if (!g && !U.noBubble && !D(h)) {
          for (M = U.delegateType || z, Io.test(M + z) || (C = C.parentNode); C; C = C.parentNode)
            W.push(C), R = C;
          R === (h.ownerDocument || l) && W.push(R.defaultView || R.parentWindow || e);
        }
        for (w = 0; (C = W[w++]) && !s.isPropagationStopped(); )
          X = C, s.type = w > 1 ? M : U.bindType || z, $ = (ye.get(C, "events") || /* @__PURE__ */ Object.create(null))[s.type] && ye.get(C, "handle"), $ && $.apply(C, c), $ = B && C[B], $ && $.apply && wr(C) && (s.result = $.apply(C, c), s.result === !1 && s.preventDefault());
        return s.type = z, !g && !s.isDefaultPrevented() && (!U._default || U._default.apply(W.pop(), c) === !1) && wr(h) && B && typeof h[z] == "function" && !D(h) && (R = h[B], R && (h[B] = null), f.event.triggered = z, s.isPropagationStopped() && X.addEventListener(z, Bo), h[z](), s.isPropagationStopped() && X.removeEventListener(z, Bo), f.event.triggered = void 0, R && (h[B] = R)), s.result;
      }
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function(s, c, h) {
      var g = f.extend(
        new f.Event(),
        h,
        {
          type: s,
          isSimulated: !0
        }
      );
      f.event.trigger(g, null, c);
    }
  }), f.fn.extend({
    trigger: function(s, c) {
      return this.each(function() {
        f.event.trigger(s, c, this);
      });
    },
    triggerHandler: function(s, c) {
      var h = this[0];
      if (h)
        return f.event.trigger(s, c, h, !0);
    }
  });
  var Sr = e.location, Fo = { guid: Date.now() }, ys = /\?/;
  f.parseXML = function(s) {
    var c, h;
    if (!s || typeof s != "string")
      return null;
    try {
      c = new e.DOMParser().parseFromString(s, "text/xml");
    } catch {
    }
    return h = c && c.getElementsByTagName("parsererror")[0], (!c || h) && f.error("Invalid XML: " + (h ? f.map(h.childNodes, function(g) {
      return g.textContent;
    }).join(`
`) : s)), c;
  };
  var kd = /\[\]$/, Mo = /\r?\n/g, Ld = /^(?:submit|button|image|reset|file)$/i, Id = /^(?:input|select|textarea|keygen)/i;
  function _s(s, c, h, g) {
    var w;
    if (Array.isArray(c))
      f.each(c, function(C, R) {
        h || kd.test(s) ? g(s, R) : _s(
          s + "[" + (typeof R == "object" && R != null ? C : "") + "]",
          R,
          h,
          g
        );
      });
    else if (!h && N(c) === "object")
      for (w in c)
        _s(s + "[" + w + "]", c[w], h, g);
    else
      g(s, c);
  }
  f.param = function(s, c) {
    var h, g = [], w = function(C, R) {
      var M = typeof R == "function" ? R() : R;
      g[g.length] = encodeURIComponent(C) + "=" + encodeURIComponent(M ?? "");
    };
    if (s == null)
      return "";
    if (Array.isArray(s) || s.jquery && !f.isPlainObject(s))
      f.each(s, function() {
        w(this.name, this.value);
      });
    else
      for (h in s)
        _s(h, s[h], c, w);
    return g.join("&");
  }, f.fn.extend({
    serialize: function() {
      return f.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var s = f.prop(this, "elements");
        return s ? f.makeArray(s) : this;
      }).filter(function() {
        var s = this.type;
        return this.name && !f(this).is(":disabled") && Id.test(this.nodeName) && !Ld.test(s) && (this.checked || !si.test(s));
      }).map(function(s, c) {
        var h = f(this).val();
        return h == null ? null : Array.isArray(h) ? f.map(h, function(g) {
          return { name: c.name, value: g.replace(Mo, `\r
`) };
        }) : { name: c.name, value: h.replace(Mo, `\r
`) };
      }).get();
    }
  });
  var Bd = /%20/g, Fd = /#.*$/, Md = /([?&])_=[^&]*/, Vd = /^(.*?):[ \t]*([^\r\n]*)$/mg, Hd = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, $d = /^(?:GET|HEAD)$/, jd = /^\/\//, Vo = {}, ws = {}, Ho = "*/".concat("*"), Ts = l.createElement("a");
  Ts.href = Sr.href;
  function $o(s) {
    return function(c, h) {
      typeof c != "string" && (h = c, c = "*");
      var g, w = 0, C = c.toLowerCase().match(Ee) || [];
      if (typeof h == "function")
        for (; g = C[w++]; )
          g[0] === "+" ? (g = g.slice(1) || "*", (s[g] = s[g] || []).unshift(h)) : (s[g] = s[g] || []).push(h);
    };
  }
  function jo(s, c, h, g) {
    var w = {}, C = s === ws;
    function R(M) {
      var B;
      return w[M] = !0, f.each(s[M] || [], function($, U) {
        var X = U(c, h, g);
        if (typeof X == "string" && !C && !w[X])
          return c.dataTypes.unshift(X), R(X), !1;
        if (C)
          return !(B = X);
      }), B;
    }
    return R(c.dataTypes[0]) || !w["*"] && R("*");
  }
  function Cs(s, c) {
    var h, g, w = f.ajaxSettings.flatOptions || {};
    for (h in c)
      c[h] !== void 0 && ((w[h] ? s : g || (g = {}))[h] = c[h]);
    return g && f.extend(!0, s, g), s;
  }
  function Wd(s, c, h) {
    for (var g, w, C, R, M = s.contents, B = s.dataTypes; B[0] === "*"; )
      B.shift(), g === void 0 && (g = s.mimeType || c.getResponseHeader("Content-Type"));
    if (g) {
      for (w in M)
        if (M[w] && M[w].test(g)) {
          B.unshift(w);
          break;
        }
    }
    if (B[0] in h)
      C = B[0];
    else {
      for (w in h) {
        if (!B[0] || s.converters[w + " " + B[0]]) {
          C = w;
          break;
        }
        R || (R = w);
      }
      C = C || R;
    }
    if (C)
      return C !== B[0] && B.unshift(C), h[C];
  }
  function qd(s, c, h, g) {
    var w, C, R, M, B, $ = {}, U = s.dataTypes.slice();
    if (U[1])
      for (R in s.converters)
        $[R.toLowerCase()] = s.converters[R];
    for (C = U.shift(); C; )
      if (s.responseFields[C] && (h[s.responseFields[C]] = c), !B && g && s.dataFilter && (c = s.dataFilter(c, s.dataType)), B = C, C = U.shift(), C) {
        if (C === "*")
          C = B;
        else if (B !== "*" && B !== C) {
          if (R = $[B + " " + C] || $["* " + C], !R) {
            for (w in $)
              if (M = w.split(" "), M[1] === C && (R = $[B + " " + M[0]] || $["* " + M[0]], R)) {
                R === !0 ? R = $[w] : $[w] !== !0 && (C = M[0], U.unshift(M[1]));
                break;
              }
          }
          if (R !== !0)
            if (R && s.throws)
              c = R(c);
            else
              try {
                c = R(c);
              } catch (X) {
                return {
                  state: "parsererror",
                  error: R ? X : "No conversion from " + B + " to " + C
                };
              }
        }
      }
    return { state: "success", data: c };
  }
  f.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Sr.href,
      type: "GET",
      isLocal: Hd.test(Sr.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": Ho,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": !0,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": f.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function(s, c) {
      return c ? (
        // Building a settings object
        Cs(Cs(s, f.ajaxSettings), c)
      ) : (
        // Extending ajaxSettings
        Cs(f.ajaxSettings, s)
      );
    },
    ajaxPrefilter: $o(Vo),
    ajaxTransport: $o(ws),
    // Main method
    ajax: function(s, c) {
      typeof s == "object" && (c = s, s = void 0), c = c || {};
      var h, g, w, C, R, M, B, $, U, X, W = f.ajaxSetup({}, c), z = W.context || W, ae = W.context && (z.nodeType || z.jquery) ? f(z) : f.event, be = f.Deferred(), me = f.Callbacks("once memory"), Re = W.statusCode || {}, Oe = {}, nt = {}, Ge = "canceled", Ce = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function(Se) {
          var Ve;
          if (B) {
            if (!C)
              for (C = {}; Ve = Vd.exec(w); )
                C[Ve[1].toLowerCase() + " "] = (C[Ve[1].toLowerCase() + " "] || []).concat(Ve[2]);
            Ve = C[Se.toLowerCase() + " "];
          }
          return Ve == null ? null : Ve.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function() {
          return B ? w : null;
        },
        // Caches the header
        setRequestHeader: function(Se, Ve) {
          return B == null && (Se = nt[Se.toLowerCase()] = nt[Se.toLowerCase()] || Se, Oe[Se] = Ve), this;
        },
        // Overrides response content-type header
        overrideMimeType: function(Se) {
          return B == null && (W.mimeType = Se), this;
        },
        // Status-dependent callbacks
        statusCode: function(Se) {
          var Ve;
          if (Se)
            if (B)
              Ce.always(Se[Ce.status]);
            else
              for (Ve in Se)
                Re[Ve] = [Re[Ve], Se[Ve]];
          return this;
        },
        // Cancel the request
        abort: function(Se) {
          var Ve = Se || Ge;
          return h && h.abort(Ve), ui(0, Ve), this;
        }
      };
      if (be.promise(Ce), W.url = ((s || W.url || Sr.href) + "").replace(jd, Sr.protocol + "//"), W.type = c.method || c.type || W.method || W.type, W.dataTypes = (W.dataType || "*").toLowerCase().match(Ee) || [""], W.crossDomain == null) {
        M = l.createElement("a");
        try {
          M.href = W.url, M.href = M.href, W.crossDomain = Ts.protocol + "//" + Ts.host != M.protocol + "//" + M.host;
        } catch {
          W.crossDomain = !0;
        }
      }
      if (jo(Vo, W, c, Ce), W.data && W.processData && typeof W.data != "string" && (W.data = f.param(W.data, W.traditional)), B)
        return Ce;
      $ = f.event && W.global, $ && f.active++ === 0 && f.event.trigger("ajaxStart"), W.type = W.type.toUpperCase(), W.hasContent = !$d.test(W.type), g = W.url.replace(Fd, ""), W.hasContent ? W.data && W.processData && (W.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (W.data = W.data.replace(Bd, "+")) : (X = W.url.slice(g.length), W.data && (W.processData || typeof W.data == "string") && (g += (ys.test(g) ? "&" : "?") + W.data, delete W.data), W.cache === !1 && (g = g.replace(Md, "$1"), X = (ys.test(g) ? "&" : "?") + "_=" + Fo.guid++ + X), W.url = g + X), W.ifModified && (f.lastModified[g] && Ce.setRequestHeader("If-Modified-Since", f.lastModified[g]), f.etag[g] && Ce.setRequestHeader("If-None-Match", f.etag[g])), (W.data && W.hasContent && W.contentType !== !1 || c.contentType) && Ce.setRequestHeader("Content-Type", W.contentType), Ce.setRequestHeader(
        "Accept",
        W.dataTypes[0] && W.accepts[W.dataTypes[0]] ? W.accepts[W.dataTypes[0]] + (W.dataTypes[0] !== "*" ? ", " + Ho + "; q=0.01" : "") : W.accepts["*"]
      );
      for (U in W.headers)
        Ce.setRequestHeader(U, W.headers[U]);
      if (W.beforeSend && (W.beforeSend.call(z, Ce, W) === !1 || B))
        return Ce.abort();
      if (Ge = "abort", me.add(W.complete), Ce.done(W.success), Ce.fail(W.error), h = jo(ws, W, c, Ce), !h)
        ui(-1, "No Transport");
      else {
        if (Ce.readyState = 1, $ && ae.trigger("ajaxSend", [Ce, W]), B)
          return Ce;
        W.async && W.timeout > 0 && (R = e.setTimeout(function() {
          Ce.abort("timeout");
        }, W.timeout));
        try {
          B = !1, h.send(Oe, ui);
        } catch (Se) {
          if (B)
            throw Se;
          ui(-1, Se);
        }
      }
      function ui(Se, Ve, Go, Yd) {
        var zt, Ss, Dr, jn, Wn, kt = Ve;
        B || (B = !0, R && e.clearTimeout(R), h = void 0, w = Yd || "", Ce.readyState = Se > 0 ? 4 : 0, zt = Se >= 200 && Se < 300 || Se === 304, Go && (jn = Wd(W, Ce, Go)), !zt && f.inArray("script", W.dataTypes) > -1 && f.inArray("json", W.dataTypes) < 0 && (W.converters["text script"] = function() {
        }), jn = qd(W, jn, Ce, zt), zt ? (W.ifModified && (Wn = Ce.getResponseHeader("Last-Modified"), Wn && (f.lastModified[g] = Wn), Wn = Ce.getResponseHeader("etag"), Wn && (f.etag[g] = Wn)), Se === 204 || W.type === "HEAD" ? kt = "nocontent" : Se === 304 ? kt = "notmodified" : (kt = jn.state, Ss = jn.data, Dr = jn.error, zt = !Dr)) : (Dr = kt, (Se || !kt) && (kt = "error", Se < 0 && (Se = 0))), Ce.status = Se, Ce.statusText = (Ve || kt) + "", zt ? be.resolveWith(z, [Ss, kt, Ce]) : be.rejectWith(z, [Ce, kt, Dr]), Ce.statusCode(Re), Re = void 0, $ && ae.trigger(
          zt ? "ajaxSuccess" : "ajaxError",
          [Ce, W, zt ? Ss : Dr]
        ), me.fireWith(z, [Ce, kt]), $ && (ae.trigger("ajaxComplete", [Ce, W]), --f.active || f.event.trigger("ajaxStop")));
      }
      return Ce;
    },
    getJSON: function(s, c, h) {
      return f.get(s, c, h, "json");
    },
    getScript: function(s, c) {
      return f.get(s, void 0, c, "script");
    }
  }), f.each(["get", "post"], function(s, c) {
    f[c] = function(h, g, w, C) {
      return (typeof g == "function" || g === null) && (C = C || w, w = g, g = void 0), f.ajax(f.extend({
        url: h,
        type: c,
        dataType: C,
        data: g,
        success: w
      }, f.isPlainObject(h) && h));
    };
  }), f.ajaxPrefilter(function(s) {
    var c;
    for (c in s.headers)
      c.toLowerCase() === "content-type" && (s.contentType = s.headers[c] || "");
  }), f._evalUrl = function(s, c, h) {
    return f.ajax({
      url: s,
      // Make this explicit, since user can override this through ajaxSetup (trac-11264)
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      scriptAttrs: c.crossOrigin ? { crossOrigin: c.crossOrigin } : void 0,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function() {
        }
      },
      dataFilter: function(g) {
        f.globalEval(g, c, h);
      }
    });
  }, f.fn.extend({
    wrapAll: function(s) {
      var c;
      return this[0] && (typeof s == "function" && (s = s.call(this[0])), c = f(s, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
        for (var h = this; h.firstElementChild; )
          h = h.firstElementChild;
        return h;
      }).append(this)), this;
    },
    wrapInner: function(s) {
      return typeof s == "function" ? this.each(function(c) {
        f(this).wrapInner(s.call(this, c));
      }) : this.each(function() {
        var c = f(this), h = c.contents();
        h.length ? h.wrapAll(s) : c.append(s);
      });
    },
    wrap: function(s) {
      var c = typeof s == "function";
      return this.each(function(h) {
        f(this).wrapAll(c ? s.call(this, h) : s);
      });
    },
    unwrap: function(s) {
      return this.parent(s).not("body").each(function() {
        f(this).replaceWith(this.childNodes);
      }), this;
    }
  }), f.expr.pseudos.hidden = function(s) {
    return !f.expr.pseudos.visible(s);
  }, f.expr.pseudos.visible = function(s) {
    return !!(s.offsetWidth || s.offsetHeight || s.getClientRects().length);
  }, f.ajaxSettings.xhr = function() {
    return new e.XMLHttpRequest();
  };
  var Gd = {
    // File protocol always yields status code 0, assume 200
    0: 200
  };
  f.ajaxTransport(function(s) {
    var c;
    return {
      send: function(h, g) {
        var w, C = s.xhr();
        if (C.open(
          s.type,
          s.url,
          s.async,
          s.username,
          s.password
        ), s.xhrFields)
          for (w in s.xhrFields)
            C[w] = s.xhrFields[w];
        s.mimeType && C.overrideMimeType && C.overrideMimeType(s.mimeType), !s.crossDomain && !h["X-Requested-With"] && (h["X-Requested-With"] = "XMLHttpRequest");
        for (w in h)
          C.setRequestHeader(w, h[w]);
        c = function(R) {
          return function() {
            c && (c = C.onload = C.onerror = C.onabort = C.ontimeout = null, R === "abort" ? C.abort() : R === "error" ? g(
              // File: protocol always yields status 0; see trac-8605, trac-14207
              C.status,
              C.statusText
            ) : g(
              Gd[C.status] || C.status,
              C.statusText,
              // For XHR2 non-text, let the caller handle it (gh-2498)
              (C.responseType || "text") === "text" ? { text: C.responseText } : { binary: C.response },
              C.getAllResponseHeaders()
            ));
          };
        }, C.onload = c(), C.onabort = C.onerror = C.ontimeout = c("error"), c = c("abort");
        try {
          C.send(s.hasContent && s.data || null);
        } catch (R) {
          if (c)
            throw R;
        }
      },
      abort: function() {
        c && c();
      }
    };
  });
  function Wo(s) {
    return s.scriptAttrs || !s.headers && (s.crossDomain || // When dealing with JSONP (`s.dataTypes` include "json" then)
    // don't use a script tag so that error responses still may have
    // `responseJSON` set. Continue using a script tag for JSONP requests that:
    //   * are cross-domain as AJAX requests won't work without a CORS setup
    //   * have `scriptAttrs` set as that's a script-only functionality
    // Note that this means JSONP requests violate strict CSP script-src settings.
    // A proper solution is to migrate from using JSONP to a CORS setup.
    s.async && f.inArray("json", s.dataTypes) < 0);
  }
  f.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    converters: {
      "text script": function(s) {
        return f.globalEval(s), s;
      }
    }
  }), f.ajaxPrefilter("script", function(s) {
    s.cache === void 0 && (s.cache = !1), Wo(s) && (s.type = "GET");
  }), f.ajaxTransport("script", function(s) {
    if (Wo(s)) {
      var c, h;
      return {
        send: function(g, w) {
          c = f("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", h = function(C) {
            c.remove(), h = null, C && w(C.type === "error" ? 404 : 200, C.type);
          }), l.head.appendChild(c[0]);
        },
        abort: function() {
          h && h();
        }
      };
    }
  });
  var qo = [], xs = /(=)\?(?=&|$)|\?\?/;
  f.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var s = qo.pop() || f.expando + "_" + Fo.guid++;
      return this[s] = !0, s;
    }
  }), f.ajaxPrefilter("jsonp", function(s, c, h) {
    var g, w, C, R = s.jsonp !== !1 && (xs.test(s.url) ? "url" : typeof s.data == "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && xs.test(s.data) && "data");
    return g = s.jsonpCallback = typeof s.jsonpCallback == "function" ? s.jsonpCallback() : s.jsonpCallback, R ? s[R] = s[R].replace(xs, "$1" + g) : s.jsonp !== !1 && (s.url += (ys.test(s.url) ? "&" : "?") + s.jsonp + "=" + g), s.converters["script json"] = function() {
      return C || f.error(g + " was not called"), C[0];
    }, s.dataTypes[0] = "json", w = e[g], e[g] = function() {
      C = arguments;
    }, h.always(function() {
      w === void 0 ? f(e).removeProp(g) : e[g] = w, s[g] && (s.jsonpCallback = c.jsonpCallback, qo.push(g)), C && typeof w == "function" && w(C[0]), C = w = void 0;
    }), "script";
  }), f.ajaxPrefilter(function(s, c) {
    typeof s.data != "string" && !f.isPlainObject(s.data) && !Array.isArray(s.data) && // Don't disable data processing if explicitly set by the user.
    !("processData" in c) && (s.processData = !1), s.data instanceof e.FormData && (s.contentType = !1);
  }), f.parseHTML = function(s, c, h) {
    if (typeof s != "string" && !lo(s + ""))
      return [];
    typeof c == "boolean" && (h = c, c = !1);
    var g, w;
    return c || (c = new e.DOMParser().parseFromString("", "text/html")), g = oo.exec(s), w = !h && [], g ? [c.createElement(g[1])] : (g = bo([s], c, w), w && w.length && f(w).remove(), f.merge([], g.childNodes));
  }, f.fn.load = function(s, c, h) {
    var g, w, C, R = this, M = s.indexOf(" ");
    return M > -1 && (g = pn(s.slice(M)), s = s.slice(0, M)), typeof c == "function" ? (h = c, c = void 0) : c && typeof c == "object" && (w = "POST"), R.length > 0 && f.ajax({
      url: s,
      // If "type" variable is undefined, then "GET" method will be used.
      // Make value of this field explicit since
      // user can override it through ajaxSetup method
      type: w || "GET",
      dataType: "html",
      data: c
    }).done(function(B) {
      C = arguments, R.html(g ? (
        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        f("<div>").append(f.parseHTML(B)).find(g)
      ) : (
        // Otherwise use the full result
        B
      ));
    }).always(h && function(B, $) {
      R.each(function() {
        h.apply(this, C || [B.responseText, $, B]);
      });
    }), this;
  }, f.expr.pseudos.animated = function(s) {
    return f.grep(f.timers, function(c) {
      return s === c.elem;
    }).length;
  }, f.offset = {
    setOffset: function(s, c, h) {
      var g, w, C, R, M, B, $, U = f.css(s, "position"), X = f(s), W = {};
      U === "static" && (s.style.position = "relative"), M = X.offset(), C = f.css(s, "top"), B = f.css(s, "left"), $ = (U === "absolute" || U === "fixed") && (C + B).indexOf("auto") > -1, $ ? (g = X.position(), R = g.top, w = g.left) : (R = parseFloat(C) || 0, w = parseFloat(B) || 0), typeof c == "function" && (c = c.call(s, h, f.extend({}, M))), c.top != null && (W.top = c.top - M.top + R), c.left != null && (W.left = c.left - M.left + w), "using" in c ? c.using.call(s, W) : X.css(W);
    }
  }, f.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function(s) {
      if (arguments.length)
        return s === void 0 ? this : this.each(function(w) {
          f.offset.setOffset(this, s, w);
        });
      var c, h, g = this[0];
      if (g)
        return g.getClientRects().length ? (c = g.getBoundingClientRect(), h = g.ownerDocument.defaultView, {
          top: c.top + h.pageYOffset,
          left: c.left + h.pageXOffset
        }) : { top: 0, left: 0 };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function() {
      if (this[0]) {
        var s, c, h, g = this[0], w = { top: 0, left: 0 };
        if (f.css(g, "position") === "fixed")
          c = g.getBoundingClientRect();
        else {
          for (c = this.offset(), h = g.ownerDocument, s = g.offsetParent || h.documentElement; s && s !== h.documentElement && f.css(s, "position") === "static"; )
            s = s.offsetParent || h.documentElement;
          s && s !== g && s.nodeType === 1 && f.css(s, "position") !== "static" && (w = f(s).offset(), w.top += f.css(s, "borderTopWidth", !0), w.left += f.css(s, "borderLeftWidth", !0));
        }
        return {
          top: c.top - w.top - f.css(g, "marginTop", !0),
          left: c.left - w.left - f.css(g, "marginLeft", !0)
        };
      }
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function() {
      return this.map(function() {
        for (var s = this.offsetParent; s && f.css(s, "position") === "static"; )
          s = s.offsetParent;
        return s || V;
      });
    }
  }), f.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(s, c) {
    var h = c === "pageYOffset";
    f.fn[s] = function(g) {
      return Be(this, function(w, C, R) {
        var M;
        if (D(w) ? M = w : w.nodeType === 9 && (M = w.defaultView), R === void 0)
          return M ? M[c] : w[C];
        M ? M.scrollTo(
          h ? M.pageXOffset : R,
          h ? R : M.pageYOffset
        ) : w[C] = R;
      }, s, g, arguments.length);
    };
  }), f.each({ Height: "height", Width: "width" }, function(s, c) {
    f.each({
      padding: "inner" + s,
      content: c,
      "": "outer" + s
    }, function(h, g) {
      f.fn[g] = function(w, C) {
        var R = arguments.length && (h || typeof w != "boolean"), M = h || (w === !0 || C === !0 ? "margin" : "border");
        return Be(this, function(B, $, U) {
          var X;
          return D(B) ? g.indexOf("outer") === 0 ? B["inner" + s] : B.document.documentElement["client" + s] : B.nodeType === 9 ? (X = B.documentElement, Math.max(
            B.body["scroll" + s],
            X["scroll" + s],
            B.body["offset" + s],
            X["offset" + s],
            X["client" + s]
          )) : U === void 0 ? (
            // Get width or height on the element, requesting but not forcing parseFloat
            f.css(B, $, M)
          ) : (
            // Set width or height on the element
            f.style(B, $, U, M)
          );
        }, c, R ? w : void 0, R);
      };
    });
  }), f.each([
    "ajaxStart",
    "ajaxStop",
    "ajaxComplete",
    "ajaxError",
    "ajaxSuccess",
    "ajaxSend"
  ], function(s, c) {
    f.fn[c] = function(h) {
      return this.on(c, h);
    };
  }), f.fn.extend({
    bind: function(s, c, h) {
      return this.on(s, null, c, h);
    },
    unbind: function(s, c) {
      return this.off(s, null, c);
    },
    delegate: function(s, c, h, g) {
      return this.on(c, s, h, g);
    },
    undelegate: function(s, c, h) {
      return arguments.length === 1 ? this.off(s, "**") : this.off(c, s || "**", h);
    },
    hover: function(s, c) {
      return this.on("mouseenter", s).on("mouseleave", c || s);
    }
  }), f.each(
    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
    function(s, c) {
      f.fn[c] = function(h, g) {
        return arguments.length > 0 ? this.on(c, null, h, g) : this.trigger(c);
      };
    }
  ), f.proxy = function(s, c) {
    var h, g, w;
    if (typeof c == "string" && (h = s[c], c = s, s = h), typeof s == "function")
      return g = i.call(arguments, 2), w = function() {
        return s.apply(c || this, g.concat(i.call(arguments)));
      }, w.guid = s.guid = s.guid || f.guid++, w;
  }, f.holdReady = function(s) {
    s ? f.readyWait++ : f.ready(!0);
  }, f.expr[":"] = f.expr.filters = f.expr.pseudos, typeof define == "function" && define.amd && define("jquery", [], function() {
    return f;
  });
  var Kd = e.jQuery, Ud = e.$;
  return f.noConflict = function(s) {
    return e.$ === f && (e.$ = Ud), s && e.jQuery === f && (e.jQuery = Kd), f;
  }, typeof t > "u" && (e.jQuery = e.$ = f), f;
}
var Me = zd(window, !0);
/*! DataTables 2.3.7
 * © SpryMedia Ltd - datatables.net/license
 */
var I = Me, k = function(e, t) {
  if (k.factory(e, t))
    return k;
  if (this instanceof k)
    return I(e).DataTable(t);
  t = e;
  var n = this, r = t === void 0, i = this.length;
  return r && (t = {}), this.api = function() {
    return new Te(this);
  }, this.each(function() {
    var a = {}, o = i > 1 ? (
      // optimisation for single table case
      tl(a, t, !0)
    ) : t, u = 0, v, b = this.getAttribute("id"), m = k.defaults, x = I(this);
    if (this.nodeName.toLowerCase() != "table") {
      yt(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
      return;
    }
    o.on && o.on.options && nl(x, "options", o.on.options), x.trigger("options.dt", o), Uo(m), oc(m.column), Zt(m, m, !0), Zt(m.column, m.column, !0), Zt(m, I.extend(o, xc(x.data())), !0);
    var _ = k.settings;
    for (u = 0, v = _.length; u < v; u++) {
      var T = _[u];
      if (T.nTable == this || T.nTHead && T.nTHead.parentNode == this || T.nTFoot && T.nTFoot.parentNode == this) {
        var N = o.bRetrieve !== void 0 ? o.bRetrieve : m.bRetrieve, D = o.bDestroy !== void 0 ? o.bDestroy : m.bDestroy;
        if (r || N)
          return T.oInstance;
        if (D) {
          new k.Api(T).destroy();
          break;
        } else {
          yt(T, 0, "Cannot reinitialise DataTable", 3);
          return;
        }
      }
      if (T.sTableId == this.id) {
        _.splice(u, 1);
        break;
      }
    }
    (b === null || b === "") && (b = "DataTables_Table_" + k.ext._unique++, this.id = b), x.children("colgroup").remove();
    var p = I.extend(!0, {}, k.models.oSettings, {
      sDestroyWidth: x[0].style.width,
      sInstance: b,
      sTableId: b,
      colgroup: I("<colgroup>"),
      fastData: function(P, L, V) {
        return Ct(p, P, L, V);
      }
    });
    p.nTable = this, p.oInit = o, _.push(p), p.api = new Te(p), p.oInstance = n.length === 1 ? n : x.dataTable(), Uo(o), o.aLengthMenu && !o.iDisplayLength && (o.iDisplayLength = Array.isArray(o.aLengthMenu[0]) ? o.aLengthMenu[0][0] : I.isPlainObject(o.aLengthMenu[0]) ? o.aLengthMenu[0].value : o.aLengthMenu[0]), o = tl(I.extend(!0, {}, m), o), tn(p.oFeatures, o, [
      "bPaginate",
      "bLengthChange",
      "bFilter",
      "bSort",
      "bSortMulti",
      "bInfo",
      "bProcessing",
      "bAutoWidth",
      "bSortClasses",
      "bServerSide",
      "bDeferRender"
    ]), tn(p, o, [
      "ajax",
      "fnFormatNumber",
      "sServerMethod",
      "aaSorting",
      "aaSortingFixed",
      "aLengthMenu",
      "sPaginationType",
      "iStateDuration",
      "bSortCellsTop",
      "iTabIndex",
      "sDom",
      "fnStateLoadCallback",
      "fnStateSaveCallback",
      "renderer",
      "searchDelay",
      "rowId",
      "caption",
      "layout",
      "orderDescReverse",
      "orderIndicators",
      "orderHandler",
      "titleRow",
      "typeDetect",
      "columnTitleTag",
      ["iCookieDuration", "iStateDuration"],
      // backwards compat
      ["oSearch", "oPreviousSearch"],
      ["aoSearchCols", "aoPreSearchCols"],
      ["iDisplayLength", "_iDisplayLength"]
    ]), tn(p.oScroll, o, [
      ["sScrollX", "sX"],
      ["sScrollXInner", "sXInner"],
      ["sScrollY", "sY"],
      ["bScrollCollapse", "bCollapse"]
    ]), tn(p.oLanguage, o, "fnInfoCallback"), bt(p, "aoDrawCallback", o.fnDrawCallback), bt(p, "aoStateSaveParams", o.fnStateSaveParams), bt(p, "aoStateLoadParams", o.fnStateLoadParams), bt(p, "aoStateLoaded", o.fnStateLoaded), bt(p, "aoRowCallback", o.fnRowCallback), bt(p, "aoRowCreatedCallback", o.fnCreatedRow), bt(p, "aoHeaderCallback", o.fnHeaderCallback), bt(p, "aoFooterCallback", o.fnFooterCallback), bt(p, "aoInitComplete", o.fnInitComplete), bt(p, "aoPreDrawCallback", o.fnPreDrawCallback), p.rowIdFn = tr(o.rowId), o.on && Object.keys(o.on).forEach(function(P) {
      nl(x, P, o.on[P]);
    }), tf(p);
    var l = p.oClasses;
    I.extend(l, k.ext.classes, o.oClasses), x.addClass(l.table), p.oFeatures.bPaginate || (o.iDisplayStart = 0), p.iInitDisplayStart === void 0 && (p.iInitDisplayStart = o.iDisplayStart, p._iDisplayStart = o.iDisplayStart);
    var d = o.iDeferLoading;
    if (d !== null) {
      p.deferLoading = !0;
      var y = Array.isArray(d);
      p._iRecordsDisplay = y ? d[0] : d, p._iRecordsTotal = y ? d[1] : d;
    }
    var E = [], O = this.getElementsByTagName("thead"), f = pc(p, O[0]);
    if (o.aoColumns)
      E = o.aoColumns;
    else if (f.length)
      for (u = 0, v = f[0].length; u < v; u++)
        E.push(null);
    for (u = 0, v = E.length; u < v; u++)
      lc(p);
    sf(p, o.aoColumnDefs, E, f, function(P, L) {
      Xs(p, P, L);
    });
    var H = x.children("tbody").find("tr:first-child").eq(0);
    if (H.length) {
      var Y = function(P, L) {
        return P.getAttribute("data-" + L) !== null ? L : null;
      };
      I(H[0]).children("th, td").each(function(P, L) {
        var V = p.aoColumns[P];
        if (V || yt(p, 0, "Incorrect column count", 18), V.mData === P) {
          var j = Y(L, "sort") || Y(L, "order"), G = Y(L, "filter") || Y(L, "search");
          (j !== null || G !== null) && (V.mData = {
            _: P + ".display",
            sort: j !== null ? P + ".@data-" + j : void 0,
            type: j !== null ? P + ".@data-" + j : void 0,
            filter: G !== null ? P + ".@data-" + G : void 0
          }, V._isArrayHost = !0, Xs(p, P));
        }
      });
    }
    bt(p, "aoDrawCallback", qi);
    var q = p.oFeatures;
    if (o.bStateSave && (q.bStateSave = !0), o.aaSorting === void 0) {
      var K = p.aaSorting;
      for (u = 0, v = K.length; u < v; u++)
        K[u][1] = p.aoColumns[u].asSorting[0];
    }
    Zs(p), bt(p, "aoDrawCallback", function() {
      (p.bSorted || dt(p) === "ssp" || q.bDeferRender) && Zs(p);
    });
    var ne = x.children("caption");
    p.caption && (ne.length === 0 && (ne = I("<caption/>").prependTo(x)), ne.html(p.caption)), ne.length && (ne[0]._captionSide = ne.css("caption-side"), p.captionNode = ne[0]), ne.length ? p.colgroup.insertAfter(ne) : p.colgroup.prependTo(p.nTable), O.length === 0 && (O = I("<thead/>").appendTo(x)), p.nTHead = O[0];
    var F = x.children("tbody");
    F.length === 0 && (F = I("<tbody/>").insertAfter(O)), p.nTBody = F[0];
    var S = x.children("tfoot");
    S.length === 0 && (S = I("<tfoot/>").appendTo(x)), p.nTFoot = S[0], p.aiDisplay = p.aiDisplayMaster.slice(), p.bInitialised = !0;
    var A = p.oLanguage;
    I.extend(!0, A, o.oLanguage), A.sUrl ? I.ajax({
      dataType: "json",
      url: A.sUrl,
      success: function(P) {
        Zt(m.oLanguage, P), I.extend(!0, A, P, p.oInit.oLanguage), xe(p, null, "i18n", [p], !0), Ti(p);
      },
      error: function() {
        yt(p, 0, "i18n file loading error", 21), Ti(p);
      }
    }) : (xe(p, null, "i18n", [p], !0), Ti(p));
  }), n = null, this;
};
k.ext = je = {
  /**
   * DataTables build type (expanded by the download builder)
   *
   *  @type string
   */
  builder: "-source-",
  /**
   * Buttons. For use with the Buttons extension for DataTables. This is
   * defined here so other extensions can define buttons regardless of load
   * order. It is _not_ used by DataTables core.
   *
   *  @type object
   *  @default {}
   */
  buttons: {},
  /**
   * ColumnControl buttons and content
   *
   *  @type object
   */
  ccContent: {},
  /**
   * Element class names
   *
   *  @type object
   *  @default {}
   */
  classes: {},
  /**
   * Error reporting.
   * 
   * How should DataTables report an error. Can take the value 'alert',
   * 'throw', 'none' or a function.
   *
   *  @type string|function
   *  @default alert
   */
  errMode: "alert",
  /** HTML entity escaping */
  escape: {
    /** When reading data-* attributes for initialisation options */
    attributes: !1
  },
  /**
   * Legacy so v1 plug-ins don't throw js errors on load
   */
  feature: [],
  /**
   * Feature plug-ins.
   * 
   * This is an object of callbacks which provide the features for DataTables
   * to be initialised via the `layout` option.
   */
  features: {},
  /**
   * Row searching.
   * 
   * This method of searching is complimentary to the default type based
   * searching, and a lot more comprehensive as it allows you complete control
   * over the searching logic. Each element in this array is a function
   * (parameters described below) that is called for every row in the table,
   * and your logic decides if it should be included in the searching data set
   * or not.
   *
   * Searching functions have the following input parameters:
   *
   * 1. `{object}` DataTables settings object: see
   *    {@link DataTable.models.oSettings}
   * 2. `{array|object}` Data for the row to be processed (same as the
   *    original format that was passed in as the data source, or an array
   *    from a DOM data source
   * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
   *    can be useful to retrieve the `TR` element if you need DOM interaction.
   *
   * And the following return is expected:
   *
   * * {boolean} Include the row in the searched result set (true) or not
   *   (false)
   *
   * Note that as with the main search ability in DataTables, technically this
   * is "filtering", since it is subtractive. However, for consistency in
   * naming we call it searching here.
   *
   *  @type array
   *  @default []
   *
   *  @example
   *    // The following example shows custom search being applied to the
   *    // fourth column (i.e. the data[3] index) based on two input values
   *    // from the end-user, matching the data in a certain range.
   *    $.fn.dataTable.ext.search.push(
   *      function( settings, data, dataIndex ) {
   *        var min = document.getElementById('min').value * 1;
   *        var max = document.getElementById('max').value * 1;
   *        var version = data[3] == "-" ? 0 : data[3]*1;
   *
   *        if ( min == "" && max == "" ) {
   *          return true;
   *        }
   *        else if ( min == "" && version < max ) {
   *          return true;
   *        }
   *        else if ( min < version && "" == max ) {
   *          return true;
   *        }
   *        else if ( min < version && version < max ) {
   *          return true;
   *        }
   *        return false;
   *      }
   *    );
   */
  search: [],
  /**
   * Selector extensions
   *
   * The `selector` option can be used to extend the options available for the
   * selector modifier options (`selector-modifier` object data type) that
   * each of the three built in selector types offer (row, column and cell +
   * their plural counterparts). For example the Select extension uses this
   * mechanism to provide an option to select only rows, columns and cells
   * that have been marked as selected by the end user (`{selected: true}`),
   * which can be used in conjunction with the existing built in selector
   * options.
   *
   * Each property is an array to which functions can be pushed. The functions
   * take three attributes:
   *
   * * Settings object for the host table
   * * Options object (`selector-modifier` object type)
   * * Array of selected item indexes
   *
   * The return is an array of the resulting item indexes after the custom
   * selector has been applied.
   *
   *  @type object
   */
  selector: {
    cell: [],
    column: [],
    row: []
  },
  /**
   * Legacy configuration options. Enable and disable legacy options that
   * are available in DataTables.
   *
   *  @type object
   */
  legacy: {
    /**
     * Enable / disable DataTables 1.9 compatible server-side processing
     * requests
     *
     *  @type boolean
     *  @default null
     */
    ajax: null
  },
  /**
   * Pagination plug-in methods.
   * 
   * Each entry in this object is a function and defines which buttons should
   * be shown by the pagination rendering method that is used for the table:
   * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
   * buttons are displayed in the document, while the functions here tell it
   * what buttons to display. This is done by returning an array of button
   * descriptions (what each button will do).
   *
   * Pagination types (the four built in options and any additional plug-in
   * options defined here) can be used through the `paginationType`
   * initialisation parameter.
   *
   * The functions defined take two parameters:
   *
   * 1. `{int} page` The current page index
   * 2. `{int} pages` The number of pages in the table
   *
   * Each function is expected to return an array where each element of the
   * array can be one of:
   *
   * * `first` - Jump to first page when activated
   * * `last` - Jump to last page when activated
   * * `previous` - Show previous page when activated
   * * `next` - Show next page when activated
   * * `{int}` - Show page of the index given
   * * `{array}` - A nested array containing the above elements to add a
   *   containing 'DIV' element (might be useful for styling).
   *
   * Note that DataTables v1.9- used this object slightly differently whereby
   * an object with two functions would be defined for each plug-in. That
   * ability is still supported by DataTables 1.10+ to provide backwards
   * compatibility, but this option of use is now decremented and no longer
   * documented in DataTables 1.10+.
   *
   *  @type object
   *  @default {}
   *
   *  @example
   *    // Show previous, next and current page buttons only
   *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
   *      return [ 'previous', page, 'next' ];
   *    };
   */
  pager: {},
  renderer: {
    pageButton: {},
    header: {}
  },
  /**
   * Ordering plug-ins - custom data source
   * 
   * The extension options for ordering of data available here is complimentary
   * to the default type based ordering that DataTables typically uses. It
   * allows much greater control over the data that is being used to
   * order a column, but is necessarily therefore more complex.
   * 
   * This type of ordering is useful if you want to do ordering based on data
   * live from the DOM (for example the contents of an 'input' element) rather
   * than just the static string that DataTables knows of.
   * 
   * The way these plug-ins work is that you create an array of the values you
   * wish to be ordering for the column in question and then return that
   * array. The data in the array much be in the index order of the rows in
   * the table (not the currently ordering order!). Which order data gathering
   * function is run here depends on the `dt-init columns.orderDataType`
   * parameter that is used for the column (if any).
   *
   * The functions defined take two parameters:
   *
   * 1. `{object}` DataTables settings object: see
   *    {@link DataTable.models.oSettings}
   * 2. `{int}` Target column index
   *
   * Each function is expected to return an array:
   *
   * * `{array}` Data for the column to be ordering upon
   *
   *  @type array
   *
   *  @example
   *    // Ordering using `input` node values
   *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
   *    {
   *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
   *        return $('input', td).val();
   *      } );
   *    }
   */
  order: {},
  /**
   * Type based plug-ins.
   *
   * Each column in DataTables has a type assigned to it, either by automatic
   * detection or by direct assignment using the `type` option for the column.
   * The type of a column will effect how it is ordering and search (plug-ins
   * can also make use of the column type if required).
   *
   * @namespace
   */
  type: {
    /**
     * Automatic column class assignment
     */
    className: {},
    /**
     * Type detection functions.
     *
     * The functions defined in this object are used to automatically detect
     * a column's type, making initialisation of DataTables super easy, even
     * when complex data is in the table.
     *
     * The functions defined take two parameters:
     *
        *  1. `{*}` Data from the column cell to be analysed
        *  2. `{settings}` DataTables settings object. This can be used to
        *     perform context specific type detection - for example detection
        *     based on language settings such as using a comma for a decimal
        *     place. Generally speaking the options from the settings will not
        *     be required
     *
     * Each function is expected to return:
     *
     * * `{string|null}` Data type detected, or null if unknown (and thus
     *   pass it on to the other type detection functions.
     *
     *  @type array
     *
     *  @example
     *    // Currency type detection plug-in:
     *    $.fn.dataTable.ext.type.detect.push(
     *      function ( data, settings ) {
     *        // Check the numeric part
     *        if ( ! data.substring(1).match(/[0-9]/) ) {
     *          return null;
     *        }
     *
     *        // Check prefixed by currency
     *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
     *          return 'currency';
     *        }
     *        return null;
     *      }
     *    );
     */
    detect: [],
    /**
     * Automatic renderer assignment
     */
    render: {},
    /**
     * Type based search formatting.
     *
     * The type based searching functions can be used to pre-format the
     * data to be search on. For example, it can be used to strip HTML
     * tags or to de-format telephone numbers for numeric only searching.
     *
     * Note that is a search is not defined for a column of a given type,
     * no search formatting will be performed.
     * 
     * Pre-processing of searching data plug-ins - When you assign the sType
     * for a column (or have it automatically detected for you by DataTables
     * or a type detection plug-in), you will typically be using this for
     * custom sorting, but it can also be used to provide custom searching
     * by allowing you to pre-processing the data and returning the data in
     * the format that should be searched upon. This is done by adding
     * functions this object with a parameter name which matches the sType
     * for that target column. This is the corollary of <i>afnSortData</i>
     * for searching data.
     *
     * The functions defined take a single parameter:
     *
        *  1. `{*}` Data from the column cell to be prepared for searching
     *
     * Each function is expected to return:
     *
     * * `{string|null}` Formatted string that will be used for the searching.
     *
     *  @type object
     *  @default {}
     *
     *  @example
     *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
     *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
     *    }
     */
    search: {},
    /**
     * Type based ordering.
     *
     * The column type tells DataTables what ordering to apply to the table
     * when a column is sorted upon. The order for each type that is defined,
     * is defined by the functions available in this object.
     *
     * Each ordering option can be described by three properties added to
     * this object:
     *
     * * `{type}-pre` - Pre-formatting function
     * * `{type}-asc` - Ascending order function
     * * `{type}-desc` - Descending order function
     *
     * All three can be used together, only `{type}-pre` or only
     * `{type}-asc` and `{type}-desc` together. It is generally recommended
     * that only `{type}-pre` is used, as this provides the optimal
     * implementation in terms of speed, although the others are provided
     * for compatibility with existing JavaScript sort functions.
     *
     * `{type}-pre`: Functions defined take a single parameter:
     *
        *  1. `{*}` Data from the column cell to be prepared for ordering
     *
     * And return:
     *
     * * `{*}` Data to be sorted upon
     *
     * `{type}-asc` and `{type}-desc`: Functions are typical JavaScript sort
     * functions, taking two parameters:
     *
        *  1. `{*}` Data to compare to the second parameter
        *  2. `{*}` Data to compare to the first parameter
     *
     * And returning:
     *
     * * `{*}` Ordering match: <0 if first parameter should be sorted lower
     *   than the second parameter, ===0 if the two parameters are equal and
     *   >0 if the first parameter should be sorted height than the second
     *   parameter.
     * 
     *  @type object
     *  @default {}
     *
     *  @example
     *    // Numeric ordering of formatted numbers with a pre-formatter
     *    $.extend( $.fn.dataTable.ext.type.order, {
     *      "string-pre": function(x) {
     *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
     *        return parseFloat( a );
     *      }
     *    } );
     *
     *  @example
     *    // Case-sensitive string ordering, with no pre-formatting method
     *    $.extend( $.fn.dataTable.ext.order, {
     *      "string-case-asc": function(x,y) {
     *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
     *      },
     *      "string-case-desc": function(x,y) {
     *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
     *      }
     *    } );
     */
    order: {}
  },
  /**
   * Unique DataTables instance counter
   *
   * @type int
   * @private
   */
  _unique: 0,
  //
  // Depreciated
  // The following properties are retained for backwards compatibility only.
  // The should not be used in new projects and will be removed in a future
  // version
  //
  /**
   * Version check function.
   *  @type function
   *  @depreciated Since 1.10
   */
  fnVersionCheck: k.fnVersionCheck,
  /**
   * Index for what 'this' index API functions should use
   *  @type int
   *  @deprecated Since v1.10
   */
  iApiIndex: 0,
  /**
   * Software version
   *  @type string
   *  @deprecated Since v1.10
   */
  sVersion: k.version
};
I.extend(je, {
  afnFiltering: je.search,
  aTypes: je.type.detect,
  ofnSearch: je.type.search,
  oSort: je.type.order,
  afnSortData: je.order,
  aoFeatures: je.feature,
  oStdClasses: je.classes,
  oPagination: je.pager
});
I.extend(k.ext.classes, {
  container: "dt-container",
  empty: {
    row: "dt-empty"
  },
  info: {
    container: "dt-info"
  },
  layout: {
    row: "dt-layout-row",
    cell: "dt-layout-cell",
    tableRow: "dt-layout-table",
    tableCell: "",
    start: "dt-layout-start",
    end: "dt-layout-end",
    full: "dt-layout-full"
  },
  length: {
    container: "dt-length",
    select: "dt-input"
  },
  order: {
    canAsc: "dt-orderable-asc",
    canDesc: "dt-orderable-desc",
    isAsc: "dt-ordering-asc",
    isDesc: "dt-ordering-desc",
    none: "dt-orderable-none",
    position: "sorting_"
  },
  processing: {
    container: "dt-processing"
  },
  scrolling: {
    body: "dt-scroll-body",
    container: "dt-scroll",
    footer: {
      self: "dt-scroll-foot",
      inner: "dt-scroll-footInner"
    },
    header: {
      self: "dt-scroll-head",
      inner: "dt-scroll-headInner"
    }
  },
  search: {
    container: "dt-search",
    input: "dt-input"
  },
  table: "dataTable",
  tbody: {
    cell: "",
    row: ""
  },
  thead: {
    cell: "",
    row: ""
  },
  tfoot: {
    cell: "",
    row: ""
  },
  paging: {
    active: "current",
    button: "dt-paging-button",
    container: "dt-paging",
    disabled: "disabled",
    nav: ""
  }
});
var je, Te, ue, De, Ds = {}, Xd = /[\r\n\u2028]/g, ua = /<([^>]*>)/g, Qd = Math.pow(2, 28), Ko = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/, Jd = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"), da = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, ct = function(e) {
  return !e || e === !0 || e === "-";
}, rc = function(e) {
  var t = parseInt(e, 10);
  return !isNaN(t) && isFinite(e) ? t : null;
}, ic = function(e, t) {
  return Ds[t] || (Ds[t] = new RegExp(Js(t), "g")), typeof e == "string" && t !== "." ? e.replace(/\./g, "").replace(Ds[t], ".") : e;
}, Ir = function(e, t, n, r) {
  var i = typeof e, a = i === "string";
  return i === "number" || i === "bigint" || r && ct(e) ? !0 : (t && a && (e = ic(e, t)), n && a && (e = e.replace(da, "")), !isNaN(parseFloat(e)) && isFinite(e));
}, Zd = function(e) {
  return ct(e) || typeof e == "string";
}, Di = function(e, t, n, r) {
  if (r && ct(e))
    return !0;
  if (typeof e == "string" && e.match(/<(input|select)/i))
    return null;
  var i = Zd(e);
  return i && Ir(qt(e), t, n, r) ? !0 : null;
}, Ke = function(e, t, n) {
  var r = [], i = 0, a = e.length;
  if (n !== void 0)
    for (; i < a; i++)
      e[i] && e[i][t] && r.push(e[i][t][n]);
  else
    for (; i < a; i++)
      e[i] && r.push(e[i][t]);
  return r;
}, Hr = function(e, t, n, r) {
  var i = [], a = 0, o = t.length;
  if (r !== void 0)
    for (; a < o; a++)
      e[t[a]] && e[t[a]][n] && i.push(e[t[a]][n][r]);
  else
    for (; a < o; a++)
      e[t[a]] && i.push(e[t[a]][n]);
  return i;
}, Jt = function(e, t) {
  var n = [], r;
  t === void 0 ? (t = 0, r = e) : (r = t, t = e);
  for (var i = t; i < r; i++)
    n.push(i);
  return n;
}, sc = function(e) {
  for (var t = [], n = 0, r = e.length; n < r; n++)
    e[n] && t.push(e[n]);
  return t;
}, qt = function(e, t) {
  if (!e || typeof e != "string")
    return e;
  if (e.length > Qd)
    throw new Error("Exceeded max str len");
  var n;
  e = e.replace(ua, t || "");
  do
    n = e, e = e.replace(/<script/i, "");
  while (e !== n);
  return n;
}, Tn = function(e) {
  return Array.isArray(e) && (e = e.join(",")), typeof e == "string" ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : e;
}, Ai = function(e, t) {
  if (typeof e != "string")
    return e;
  var n = e.normalize ? e.normalize("NFD") : e;
  return n.length !== e.length ? (t === !0 ? e + " " : "") + n.replace(/[\u0300-\u036f]/g, "") : n;
}, ef = function(e) {
  if (e.length < 2)
    return !0;
  for (var t = e.slice().sort(), n = t[0], r = 1, i = t.length; r < i; r++) {
    if (t[r] === n)
      return !1;
    n = t[r];
  }
  return !0;
}, dr = function(e) {
  if (Array.from && Set)
    return Array.from(new Set(e));
  if (ef(e))
    return e.slice();
  var t = [], n, r, i = e.length, a, o = 0;
  e:
    for (r = 0; r < i; r++) {
      for (n = e[r], a = 0; a < o; a++)
        if (t[a] === n)
          continue e;
      t.push(n), o++;
    }
  return t;
}, ac = function(e, t) {
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      ac(e, t[n]);
  else
    e.push(t);
  return e;
};
function Zn(e, t) {
  t && t.split(" ").forEach(function(n) {
    n && e.classList.add(n);
  });
}
k.util = {
  /**
   * Return a string with diacritic characters decomposed
   * @param {*} mixed Function or string to normalize
   * @param {*} both Return original string and the normalized string
   * @returns String or undefined
   */
  diacritics: function(e, t) {
    var n = typeof e;
    if (n !== "function")
      return Ai(e, t);
    Ai = e;
  },
  /**
   * Debounce a function
   *
   * @param {function} fn Function to be called
   * @param {integer} freq Call frequency in mS
   * @return {function} Wrapped function
   */
  debounce: function(e, t) {
    var n;
    return function() {
      var r = this, i = arguments;
      clearTimeout(n), n = setTimeout(function() {
        e.apply(r, i);
      }, t || 250);
    };
  },
  /**
   * Throttle the calls to a function. Arguments and context are maintained
   * for the throttled function.
   *
   * @param {function} fn Function to be called
   * @param {integer} freq Call frequency in mS
   * @return {function} Wrapped function
   */
  throttle: function(e, t) {
    var n = t !== void 0 ? t : 200, r, i;
    return function() {
      var a = this, o = +/* @__PURE__ */ new Date(), u = arguments;
      r && o < r + n ? (clearTimeout(i), i = setTimeout(function() {
        r = void 0, e.apply(a, u);
      }, n)) : (r = o, e.apply(a, u));
    };
  },
  /**
   * Escape a string such that it can be used in a regular expression
   *
   *  @param {string} val string to escape
   *  @returns {string} escaped string
   */
  escapeRegex: function(e) {
    return e.replace(Jd, "\\$1");
  },
  /**
   * Create a function that will write to a nested object or array
   * @param {*} source JSON notation string
   * @returns Write function
   */
  set: function(e) {
    if (I.isPlainObject(e))
      return k.util.set(e._);
    if (e === null)
      return function() {
      };
    if (typeof e == "function")
      return function(n, r, i) {
        e(n, "set", r, i);
      };
    if (typeof e == "string" && (e.indexOf(".") !== -1 || e.indexOf("[") !== -1 || e.indexOf("(") !== -1)) {
      var t = function(n, r, i) {
        for (var a = zo(i), o, u = a[a.length - 1], v, b, m, x, _ = 0, T = a.length - 1; _ < T; _++) {
          if (a[_] === "__proto__" || a[_] === "constructor")
            throw new Error("Cannot set prototype values");
          if (v = a[_].match(Ar), b = a[_].match(qn), v) {
            if (a[_] = a[_].replace(Ar, ""), n[a[_]] = [], o = a.slice(), o.splice(0, _ + 1), x = o.join("."), Array.isArray(r))
              for (var N = 0, D = r.length; N < D; N++)
                m = {}, t(m, r[N], x), n[a[_]].push(m);
            else
              n[a[_]] = r;
            return;
          } else
            b && (a[_] = a[_].replace(qn, ""), n = n[a[_]](r));
          (n[a[_]] === null || n[a[_]] === void 0) && (n[a[_]] = {}), n = n[a[_]];
        }
        u.match(qn) ? n = n[u.replace(qn, "")](r) : n[u.replace(Ar, "")] = r;
      };
      return function(n, r) {
        return t(n, r, e);
      };
    } else
      return function(n, r) {
        n[e] = r;
      };
  },
  /**
   * Create a function that will read nested objects from arrays, based on JSON notation
   * @param {*} source JSON notation string
   * @returns Value read
   */
  get: function(e) {
    if (I.isPlainObject(e)) {
      var t = {};
      return I.each(e, function(r, i) {
        i && (t[r] = k.util.get(i));
      }), function(r, i, a, o) {
        var u = t[i] || t._;
        return u !== void 0 ? u(r, i, a, o) : r;
      };
    } else {
      if (e === null)
        return function(r) {
          return r;
        };
      if (typeof e == "function")
        return function(r, i, a, o) {
          return e(r, i, a, o);
        };
      if (typeof e == "string" && (e.indexOf(".") !== -1 || e.indexOf("[") !== -1 || e.indexOf("(") !== -1)) {
        var n = function(r, i, a) {
          var o, u, v, b;
          if (a !== "")
            for (var m = zo(a), x = 0, _ = m.length; x < _; x++) {
              if (o = m[x].match(Ar), u = m[x].match(qn), o) {
                if (m[x] = m[x].replace(Ar, ""), m[x] !== "" && (r = r[m[x]]), v = [], m.splice(0, x + 1), b = m.join("."), Array.isArray(r))
                  for (var T = 0, N = r.length; T < N; T++)
                    v.push(n(r[T], i, b));
                var D = o[0].substring(1, o[0].length - 1);
                r = D === "" ? v : v.join(D);
                break;
              } else if (u) {
                m[x] = m[x].replace(qn, ""), r = r[m[x]]();
                continue;
              }
              if (r === null || r[m[x]] === null)
                return null;
              if (r === void 0 || r[m[x]] === void 0)
                return;
              r = r[m[x]];
            }
          return r;
        };
        return function(r, i) {
          return n(r, i, e);
        };
      } else
        return function(r) {
          return r[e];
        };
    }
  },
  stripHtml: function(e, t) {
    var n = typeof e;
    if (n === "function") {
      qt = e;
      return;
    } else if (n === "string")
      return qt(e, t);
    return e;
  },
  escapeHtml: function(e) {
    var t = typeof e;
    if (t === "function") {
      Tn = e;
      return;
    } else if (t === "string" || Array.isArray(e))
      return Tn(e);
    return e;
  },
  unique: dr
};
function Mi(e) {
  var t = "a aa ai ao as b fn i m o s ", n, r, i = {};
  I.each(e, function(a) {
    n = a.match(/^([^A-Z]+?)([A-Z])/), n && t.indexOf(n[1] + " ") !== -1 && (r = a.replace(n[0], n[2].toLowerCase()), i[r] = a, n[1] === "o" && Mi(e[a]));
  }), e._hungarianMap = i;
}
function Zt(e, t, n) {
  e._hungarianMap || Mi(e);
  var r;
  I.each(t, function(i) {
    r = e._hungarianMap[i], r !== void 0 && (n || t[r] === void 0) && (r.charAt(0) === "o" ? (t[r] || (t[r] = {}), I.extend(!0, t[r], t[i]), Zt(e[r], t[r], n)) : t[r] = t[i]);
  });
}
var rt = function(e, t, n) {
  e[t] !== void 0 && (e[n] = e[t]);
};
function Uo(e) {
  rt(e, "ordering", "bSort"), rt(e, "orderMulti", "bSortMulti"), rt(e, "orderClasses", "bSortClasses"), rt(e, "orderCellsTop", "bSortCellsTop"), rt(e, "order", "aaSorting"), rt(e, "orderFixed", "aaSortingFixed"), rt(e, "paging", "bPaginate"), rt(e, "pagingType", "sPaginationType"), rt(e, "pageLength", "iDisplayLength"), rt(e, "searching", "bFilter"), typeof e.sScrollX == "boolean" && (e.sScrollX = e.sScrollX ? "100%" : ""), typeof e.scrollX == "boolean" && (e.scrollX = e.scrollX ? "100%" : ""), typeof e.bSort == "object" ? (e.orderIndicators = e.bSort.indicators !== void 0 ? e.bSort.indicators : !0, e.orderHandler = e.bSort.handler !== void 0 ? e.bSort.handler : !0, e.bSort = !0) : e.bSort === !1 ? (e.orderIndicators = !1, e.orderHandler = !1) : e.bSort === !0 && (e.orderIndicators = !0, e.orderHandler = !0), typeof e.bSortCellsTop == "boolean" && (e.titleRow = e.bSortCellsTop);
  var t = e.aoSearchCols;
  if (t)
    for (var n = 0, r = t.length; n < r; n++)
      t[n] && Zt(k.models.oSearch, t[n]);
  e.serverSide && !e.searchDelay && (e.searchDelay = 400);
}
function oc(e) {
  rt(e, "orderable", "bSortable"), rt(e, "orderData", "aDataSort"), rt(e, "orderSequence", "asSorting"), rt(e, "orderDataType", "sortDataType");
  var t = e.aDataSort;
  typeof t == "number" && !Array.isArray(t) && (e.aDataSort = [t]);
}
function tf(e) {
  if (!k.__browser) {
    var t = {};
    k.__browser = t;
    var n = I("<div/>").css({
      position: "fixed",
      top: 0,
      left: -1 * window.pageXOffset,
      // allow for scrolling
      height: 1,
      width: 1,
      overflow: "hidden"
    }).append(
      I("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append(
        I("<div/>").css({
          width: "100%",
          height: 10
        })
      )
    ).appendTo("body"), r = n.children(), i = r.children();
    t.barWidth = r[0].offsetWidth - r[0].clientWidth, t.bScrollbarLeft = Math.round(i.offset().left) !== 1, n.remove();
  }
  I.extend(e.oBrowser, k.__browser), e.oScroll.iBarWidth = k.__browser.barWidth;
}
function lc(e) {
  var t = k.defaults.column, n = e.aoColumns.length, r = I.extend({}, k.models.oColumn, t, {
    aDataSort: t.aDataSort ? t.aDataSort : [n],
    mData: t.mData ? t.mData : n,
    idx: n,
    searchFixed: {},
    colEl: I("<col>").attr("data-dt-column", n)
  });
  e.aoColumns.push(r);
  var i = e.aoPreSearchCols;
  i[n] = I.extend({}, k.models.oSearch, i[n]);
}
function Xs(e, t, n) {
  var r = e.aoColumns[t];
  if (n != null) {
    oc(n), Zt(k.defaults.column, n, !0), n.mDataProp !== void 0 && !n.mData && (n.mData = n.mDataProp), n.sType && (r._sManualType = n.sType), n.className && !n.sClass && (n.sClass = n.className);
    var i = r.sClass;
    I.extend(r, n), tn(r, n, "sWidth", "sWidthOrig"), i !== r.sClass && (r.sClass = i + " " + r.sClass), n.iDataSort !== void 0 && (r.aDataSort = [n.iDataSort]), tn(r, n, "aDataSort");
  }
  var a = r.mData, o = tr(a);
  if (r.mRender && Array.isArray(r.mRender)) {
    var u = r.mRender.slice(), v = u.shift();
    r.mRender = k.render[v].apply(window, u);
  }
  r._render = r.mRender ? tr(r.mRender) : null;
  var b = function(m) {
    return typeof m == "string" && m.indexOf("@") !== -1;
  };
  r._bAttrSrc = I.isPlainObject(a) && (b(a.sort) || b(a.type) || b(a.filter)), r._setter = null, r.fnGetData = function(m, x, _) {
    var T = o(m, x, void 0, _);
    return r._render && x ? r._render(T, x, m, _) : T;
  }, r.fnSetData = function(m, x, _) {
    return gn(a)(m, x, _);
  }, typeof a != "number" && !r._isArrayHost && (e._rowReadObject = !0), e.oFeatures.bSort || (r.bSortable = !1);
}
function Vi(e) {
  _f(e), nf(e);
  var t = e.oScroll;
  (t.sY !== "" || t.sX !== "") && bc(e), xe(e, null, "column-sizing", [e]);
}
function nf(e) {
  for (var t = e.aoColumns, n = 0; n < t.length; n++) {
    var r = cc(e, [n], !1, !1);
    t[n].colEl.css("width", r), e.oScroll.sX && t[n].colEl.css("min-width", r);
  }
}
function fa(e, t) {
  var n = ha(e, "bVisible");
  return typeof n[t] == "number" ? n[t] : null;
}
function $r(e, t) {
  var n = ha(e, "bVisible"), r = n.indexOf(t);
  return r !== -1 ? r : null;
}
function Hi(e) {
  var t = e.aoHeader, n = e.aoColumns, r = 0;
  if (t.length)
    for (var i = 0, a = t[0].length; i < a; i++)
      n[i].bVisible && I(t[0][i].cell).css("display") !== "none" && r++;
  return r;
}
function ha(e, t) {
  var n = [];
  return e.aoColumns.map(function(r, i) {
    r[t] && n.push(i);
  }), n;
}
function As(e, t) {
  return t === !0 ? e._name : t;
}
function $i(e) {
  var t = e.aoColumns, n = e.aoData, r = k.ext.type.detect, i, a, o, u, v, b, m, x, _;
  for (i = 0, a = t.length; i < a; i++) {
    if (m = t[i], _ = [], !m.sType && m._sManualType)
      m.sType = m._sManualType;
    else if (!m.sType) {
      if (!e.typeDetect)
        return;
      for (o = 0, u = r.length; o < u; o++) {
        var T = r[o], N = T.oneOf, D = T.allOf || T, p = T.init, l = !1;
        if (x = null, p && (x = As(T, p(e, m, i)), x)) {
          m.sType = x;
          break;
        }
        for (v = 0, b = n.length; v < b && !(n[v] && (_[v] === void 0 && (_[v] = Ct(e, v, i, "type")), N && !l && (l = As(T, N(_[v], e))), x = As(T, D(_[v], e)), !x && o !== r.length - 3 || x === "html" && !ct(_[v]))); v++)
          ;
        if (N && l && x || !N && x) {
          m.sType = x;
          break;
        }
      }
      m.sType || (m.sType = "string");
    }
    var d = je.type.className[m.sType];
    d && (Yo(e.aoHeader, i, d), Yo(e.aoFooter, i, d));
    var y = je.type.render[m.sType];
    y && !m._render && (m._render = k.util.get(y), rf(e, i));
  }
}
function rf(e, t) {
  for (var n = e.aoData, r = 0; r < n.length; r++)
    if (n[r].nTr) {
      var i = Ct(e, r, t, "display");
      n[r].displayData[t] = i, Ei(n[r].anCells[t], i);
    }
}
function Yo(e, t, n) {
  e.forEach(function(r) {
    r[t] && r[t].unique && Zn(r[t].cell, n);
  });
}
function sf(e, t, n, r, i) {
  var a, o, u, v, b, m, x, _ = e.aoColumns;
  if (n)
    for (a = 0, o = n.length; a < o; a++)
      n[a] && n[a].name && (_[a].sName = n[a].name);
  if (t)
    for (a = t.length - 1; a >= 0; a--) {
      x = t[a];
      var T = x.target !== void 0 ? x.target : x.targets !== void 0 ? x.targets : x.aTargets;
      for (Array.isArray(T) || (T = [T]), u = 0, v = T.length; u < v; u++) {
        var N = T[u];
        if (typeof N == "number" && N >= 0) {
          for (; _.length <= N; )
            lc(e);
          i(N, x);
        } else if (typeof N == "number" && N < 0)
          i(_.length + N, x);
        else if (typeof N == "string")
          for (b = 0, m = _.length; b < m; b++)
            N === "_all" ? i(b, x) : N.indexOf(":name") !== -1 ? _[b].sName === N.replace(":name", "") && i(b, x) : r.forEach(function(D) {
              if (D[b]) {
                var p = I(D[b].cell);
                N.match(/^[a-z][\w-]*$/i) && (N = "." + N), p.is(N) && i(b, x);
              }
            });
      }
    }
  if (n)
    for (a = 0, o = n.length; a < o; a++)
      i(a, n[a]);
}
function cc(e, t, n, r) {
  Array.isArray(t) || (t = pa(t));
  for (var i = 0, a, o = e.aoColumns, u = 0, v = t.length; u < v; u++) {
    var b = o[t[u]], m = n ? b.sWidthOrig : b.sWidth;
    if (!(!r && b.bVisible === !1)) {
      if (m == null)
        return null;
      if (typeof m == "number")
        a = "px", i += m;
      else {
        var x = m.match(/([\d\.]+)([^\d]*)/);
        x && (i += x[1] * 1, a = x.length === 3 ? x[2] : "px");
      }
    }
  }
  return i + a;
}
function pa(e) {
  var t = I(e).closest("[data-dt-column]").attr("data-dt-column");
  return t ? t.split(",").map(function(n) {
    return n * 1;
  }) : [];
}
function xn(e, t, n, r) {
  var i = e.aoData.length, a = I.extend(!0, {}, k.models.oRow, {
    src: n ? "dom" : "data",
    idx: i
  });
  a._aData = t, e.aoData.push(a);
  for (var o = e.aoColumns, u = 0, v = o.length; u < v; u++)
    o[u].sType = null;
  e.aiDisplayMaster.push(i);
  var b = e.rowIdFn(t);
  return b !== void 0 && (e.aIds[b] = a), (n || !e.oFeatures.bDeferRender) && dc(e, i, n, r), i;
}
function va(e, t) {
  var n;
  return t instanceof I || (t = I(t)), t.map(function(r, i) {
    return n = uc(e, i), xn(e, n.data, i, n.cells);
  });
}
function Ct(e, t, n, r) {
  r === "search" ? r = "filter" : r === "order" && (r = "sort");
  var i = e.aoData[t];
  if (i) {
    var a = e.iDraw, o = e.aoColumns[n], u = i._aData, v = o.sDefaultContent, b = o.fnGetData(u, r, {
      settings: e,
      row: t,
      col: n
    });
    if (r !== "display" && b && typeof b == "object" && b.nodeName && (b = b.innerHTML), b === void 0)
      return e.iDrawError != a && v === null && (yt(e, 0, "Requested unknown parameter " + (typeof o.mData == "function" ? "{function}" : "'" + o.mData + "'") + " for row " + t + ", column " + n, 4), e.iDrawError = a), v;
    if ((b === u || b === null) && v !== null && r !== void 0)
      b = v;
    else if (typeof b == "function")
      return b.call(u);
    if (b === null && r === "display")
      return "";
    if (r === "filter") {
      var m = k.ext.type.search;
      m[o.sType] && (b = m[o.sType](b));
    }
    return b;
  }
}
function af(e, t, n, r) {
  var i = e.aoColumns[n], a = e.aoData[t]._aData;
  i.fnSetData(a, r, {
    settings: e,
    row: t,
    col: n
  });
}
function Ei(e, t) {
  t && typeof t == "object" && t.nodeName ? I(e).empty().append(t) : e.innerHTML = t;
}
var Ar = /\[.*?\]$/, qn = /\(\)$/;
function zo(e) {
  var t = e.match(/(\\.|[^.])+/g) || [""];
  return t.map(function(n) {
    return n.replace(/\\\./g, ".");
  });
}
var tr = k.util.get, gn = k.util.set;
function Xo(e) {
  return Ke(e.aoData, "_aData");
}
function ma(e) {
  e.aoData.length = 0, e.aiDisplayMaster.length = 0, e.aiDisplay.length = 0, e.aIds = {};
}
function ji(e, t, n, r) {
  var i = e.aoData[t], a, o;
  if (i._aSortData = null, i._aFilterData = null, i.displayData = null, n === "dom" || (!n || n === "auto") && i.src === "dom")
    i._aData = uc(
      e,
      i,
      r,
      r === void 0 ? void 0 : i._aData
    ).data;
  else {
    var u = i.anCells, v = ga(e, t);
    if (u)
      if (r !== void 0)
        Ei(u[r], v[r]);
      else
        for (a = 0, o = u.length; a < o; a++)
          Ei(u[a], v[a]);
  }
  var b = e.aoColumns;
  if (r !== void 0)
    b[r].sType = null, b[r].wideStrings = null;
  else {
    for (a = 0, o = b.length; a < o; a++)
      b[a].sType = null, b[a].wideStrings = null;
    fc(e, i);
  }
}
function uc(e, t, n, r) {
  var i = [], a = t.firstChild, o, u, v = 0, b, m = e.aoColumns, x = e._rowReadObject;
  r = r !== void 0 ? r : x ? {} : [];
  var _ = function(d, y) {
    if (typeof d == "string") {
      var E = d.indexOf("@");
      if (E !== -1) {
        var O = d.substring(E + 1), f = gn(d);
        f(r, y.getAttribute(O));
      }
    }
  }, T = function(d) {
    if (n === void 0 || n === v)
      if (u = m[v], b = d.innerHTML.trim(), u && u._bAttrSrc) {
        var y = gn(u.mData._);
        y(r, b), _(u.mData.sort, d), _(u.mData.type, d), _(u.mData.filter, d);
      } else
        x ? (u._setter || (u._setter = gn(u.mData)), u._setter(r, b)) : r[v] = b;
    v++;
  };
  if (a)
    for (; a; )
      o = a.nodeName.toUpperCase(), (o == "TD" || o == "TH") && (T(a), i.push(a)), a = a.nextSibling;
  else {
    i = t.anCells;
    for (var N = 0, D = i.length; N < D; N++)
      T(i[N]);
  }
  var p = t.firstChild ? t : t.nTr;
  if (p) {
    var l = p.getAttribute("id");
    l && gn(e.rowId)(r, l);
  }
  return {
    data: r,
    cells: i
  };
}
function ga(e, t) {
  var n = e.aoData[t], r = e.aoColumns;
  if (!n.displayData) {
    n.displayData = [];
    for (var i = 0, a = r.length; i < a; i++)
      n.displayData.push(
        Ct(e, t, i, "display")
      );
  }
  return n.displayData;
}
function dc(e, t, n, r) {
  var i = e.aoData[t], a = i._aData, o = [], u, v, b, m, x, _, T = e.oClasses.tbody.row;
  if (i.nTr === null) {
    for (u = n || document.createElement("tr"), i.nTr = u, i.anCells = o, Zn(u, T), u._DT_RowIndex = t, fc(e, i), m = 0, x = e.aoColumns.length; m < x; m++) {
      b = e.aoColumns[m], _ = !(n && r[m]), v = _ ? document.createElement(b.sCellType) : r[m], v || yt(e, 0, "Incorrect column count", 18), v._DT_CellIndex = {
        row: t,
        column: m
      }, o.push(v);
      var N = ga(e, t);
      (_ || (b.mRender || b.mData !== m) && (!I.isPlainObject(b.mData) || b.mData._ !== m + ".display")) && Ei(v, N[m]), Zn(v, b.sClass), b.bVisible && _ ? u.appendChild(v) : !b.bVisible && !_ && v.parentNode.removeChild(v), b.fnCreatedCell && b.fnCreatedCell.call(
        e.oInstance,
        v,
        Ct(e, t, m),
        a,
        t,
        m
      );
    }
    xe(e, "aoRowCreatedCallback", "row-created", [u, a, t, o]);
  } else
    Zn(i.nTr, T);
}
function fc(e, t) {
  var n = t.nTr, r = t._aData;
  if (n) {
    var i = e.rowIdFn(r);
    if (i && (n.id = i), r.DT_RowClass) {
      var a = r.DT_RowClass.split(" ");
      t.__rowc = t.__rowc ? dr(t.__rowc.concat(a)) : a, I(n).removeClass(t.__rowc.join(" ")).addClass(r.DT_RowClass);
    }
    r.DT_RowAttr && I(n).attr(r.DT_RowAttr), r.DT_RowData && I(n).data(r.DT_RowData);
  }
}
function Qo(e, t) {
  var n = e.oClasses, r = e.aoColumns, i, a, o, u = t === "header" ? e.nTHead : e.nTFoot, v = t === "header" ? "sTitle" : t;
  if (u) {
    if ((t === "header" || Ke(e.aoColumns, v).join("")) && (o = I("tr", u), o.length || (o = I("<tr/>").appendTo(u)), o.length === 1)) {
      var b = 0;
      for (I("td, th", o).each(function() {
        b += this.colSpan;
      }), i = b, a = r.length; i < a; i++)
        I("<th/>").html(r[i][v] || "").appendTo(o);
    }
    var m = pc(e, u, !0);
    t === "header" ? (e.aoHeader = m, I("tr", u).addClass(n.thead.row)) : (e.aoFooter = m, I("tr", u).addClass(n.tfoot.row)), I(u).children("tr").children("th, td").each(function() {
      Pi(e, t)(
        e,
        I(this),
        n
      );
    });
  }
}
function hc(e, t, n) {
  var r, i, a, o = [], u = [], v = e.aoColumns, b = v.length, m, x;
  if (t) {
    for (n || (n = Jt(b).filter(function(N) {
      return v[N].bVisible;
    })), r = 0; r < t.length; r++)
      o[r] = t[r].slice().filter(function(N, D) {
        return n.includes(D);
      }), u.push([]);
    for (r = 0; r < o.length; r++)
      for (i = 0; i < o[r].length; i++)
        if (m = 1, x = 1, u[r][i] === void 0) {
          for (a = o[r][i].cell; o[r + m] !== void 0 && o[r][i].cell == o[r + m][i].cell; )
            u[r + m][i] = null, m++;
          for (; o[r][i + x] !== void 0 && o[r][i].cell == o[r][i + x].cell; ) {
            for (var _ = 0; _ < m; _++)
              u[r + _][i + x] = null;
            x++;
          }
          var T = I(".dt-column-title", a);
          u[r][i] = {
            cell: a,
            colspan: x,
            rowspan: m,
            title: T.length ? T.html() : I(a).html()
          };
        }
    return u;
  }
}
function Ni(e, t) {
  for (var n = hc(e, t), r, i, a = 0; a < t.length; a++) {
    if (r = t[a].row, r)
      for (; i = r.firstChild; )
        r.removeChild(i);
    for (var o = 0; o < n[a].length; o++) {
      var u = n[a][o];
      u && I(u.cell).appendTo(r).attr("rowspan", u.rowspan).attr("colspan", u.colspan);
    }
  }
}
function fr(e, t) {
  df(e);
  var n = xe(e, "aoPreDrawCallback", "preDraw", [e]);
  if (n.indexOf(!1) !== -1) {
    ut(e, !1);
    return;
  }
  var r = [], i = 0, a = dt(e) == "ssp", o = e.aiDisplay, u = e._iDisplayStart, v = e.fnDisplayEnd(), b = e.aoColumns, m = I(e.nTBody);
  if (e.bDrawing = !0, e.deferLoading)
    e.deferLoading = !1, e.iDraw++, ut(e, !1);
  else if (!a)
    e.iDraw++;
  else if (!e.bDestroying && !t) {
    e.iDraw === 0 && m.empty().append(Jo(e)), ff(e);
    return;
  }
  if (o.length !== 0)
    for (var x = a ? 0 : u, _ = a ? e.aoData.length : v, T = x; T < _; T++) {
      var N = o[T], D = e.aoData[N];
      if (D !== null) {
        D.nTr === null && dc(e, N);
        for (var p = D.nTr, l = 0; l < b.length; l++) {
          var d = b[l], y = D.anCells[l];
          Zn(y, je.type.className[d.sType]), Zn(y, e.oClasses.tbody.cell);
        }
        xe(
          e,
          "aoRowCallback",
          null,
          [p, D._aData, i, T, N]
        ), r.push(p), i++;
      }
    }
  else
    r[0] = Jo(e);
  xe(e, "aoHeaderCallback", "header", [
    I(e.nTHead).children("tr")[0],
    Xo(e),
    u,
    v,
    o
  ]), xe(e, "aoFooterCallback", "footer", [
    I(e.nTFoot).children("tr")[0],
    Xo(e),
    u,
    v,
    o
  ]), m[0].replaceChildren ? m[0].replaceChildren.apply(m[0], r) : (m.children().detach(), m.append(I(r))), I(e.nTableWrapper).toggleClass("dt-empty-footer", I("tr", e.nTFoot).length === 0), xe(e, "aoDrawCallback", "draw", [e], !0), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1;
}
function nr(e, t, n) {
  var r = e.oFeatures, i = r.bSort, a = r.bFilter;
  (n === void 0 || n === !0) && ($i(e), i && _a(e), a ? Fr(e, e.oPreviousSearch) : e.aiDisplay = e.aiDisplayMaster.slice()), t !== !0 && (e._iDisplayStart = 0), e._drawHold = t, fr(e), e.api.one("draw", function() {
    e._drawHold = !1;
  });
}
function Jo(e) {
  var t = e.oLanguage, n = t.sZeroRecords, r = dt(e);
  return (r === "ssp" || r === "ajax") && !e.json ? n = t.sLoadingRecords : t.sEmptyTable && e.fnRecordsTotal() === 0 && (n = t.sEmptyTable), I("<tr/>").append(I("<td />", {
    colSpan: Hi(e),
    class: e.oClasses.empty.row
  }).html(n))[0];
}
function Qs(e, t, n) {
  if (Array.isArray(n)) {
    for (var r = 0; r < n.length; r++)
      Qs(e, t, n[r]);
    return;
  }
  var i = e[t];
  I.isPlainObject(n) ? n.features ? (n.rowId && (e.id = n.rowId), n.rowClass && (e.className = n.rowClass), i.id = n.id, i.className = n.className, Qs(e, t, n.features)) : Object.keys(n).map(function(a) {
    i.contents.push({
      feature: a,
      opts: n[a]
    });
  }) : i.contents.push(n);
}
function of(e, t, n) {
  for (var r, i = 0; i < e.length; i++)
    if (r = e[i], r.rowNum === t && (n === "full" && r.full || (n === "start" || n === "end") && (r.start || r.end)))
      return r[n] || (r[n] = {
        contents: []
      }), r;
  return r = {
    rowNum: t
  }, r[n] = {
    contents: []
  }, e.push(r), r;
}
function Zo(e, t, n) {
  var r = [];
  I.each(t, function(a, o) {
    if (o !== null) {
      var u = a.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/), v = u[2] ? u[2] * 1 : 0, b = u[3] ? u[3].toLowerCase() : "full";
      if (u[1] === n) {
        var m = of(r, v, b);
        Qs(m, b, o);
      }
    }
  }), r.sort(function(a, o) {
    var u = a.rowNum, v = o.rowNum;
    if (u === v) {
      var b = a.full && !o.full ? -1 : 1;
      return n === "bottom" ? b * -1 : b;
    }
    return v - u;
  }), n === "bottom" && r.reverse();
  for (var i = 0; i < r.length; i++)
    delete r[i].rowNum, lf(e, r[i]);
  return r;
}
function lf(e, t) {
  var n = function(i, a) {
    return je.features[i] || yt(e, 0, "Unknown feature: " + i), je.features[i].apply(this, [e, a]);
  }, r = function(i) {
    if (t[i])
      for (var a = t[i].contents, o = 0, u = a.length; o < u; o++)
        if (a[o]) {
          if (typeof a[o] == "string")
            a[o] = n(a[o], null);
          else if (I.isPlainObject(a[o]))
            a[o] = n(a[o].feature, a[o].opts);
          else if (typeof a[o].node == "function")
            a[o] = a[o].node(e);
          else if (typeof a[o] == "function") {
            var v = a[o](e);
            a[o] = typeof v.node == "function" ? v.node() : v;
          }
        } else
          continue;
  };
  r("start"), r("end"), r("full");
}
function cf(e) {
  var t = e.oClasses, n = I(e.nTable), r = I("<div/>").attr({
    id: e.sTableId + "_wrapper",
    class: t.container
  }).insertBefore(n);
  if (e.nTableWrapper = r[0], e.sDom)
    uf(e, e.sDom, r);
  else {
    var i = Zo(e, e.layout, "top"), a = Zo(e, e.layout, "bottom"), o = Pi(e, "layout");
    i.forEach(function(u) {
      o(e, r, u);
    }), o(e, r, {
      full: {
        table: !0,
        contents: [gc(e)]
      }
    }), a.forEach(function(u) {
      o(e, r, u);
    });
  }
  yf(e);
}
function uf(e, t, n) {
  for (var r = t.match(/(".*?")|('.*?')|./g), i, a, o, u, v, b = 0; b < r.length; b++) {
    if (i = null, a = r[b], a == "<") {
      if (o = I("<div/>"), u = r[b + 1], u[0] == "'" || u[0] == '"') {
        v = u.replace(/['"]/g, "");
        var m = "", x;
        if (v.indexOf(".") != -1) {
          var _ = v.split(".");
          m = _[0], x = _[1];
        } else
          v[0] == "#" ? m = v : x = v;
        o.attr("id", m.substring(1)).addClass(x), b++;
      }
      n.append(o), n = o;
    } else
      a == ">" ? n = n.parent() : a == "t" ? i = gc(e) : k.ext.feature.forEach(function(T) {
        a == T.cFeature && (i = T.fnInit(e));
      });
    i && n.append(i);
  }
}
function pc(e, t, n) {
  var r = e.aoColumns, i = I(t).children("tr"), a, o, u, v, b, m, x, _, T, N, D = e.titleRow, p = t && t.nodeName.toLowerCase() === "thead", l = [], d, y = function(K, ne, F) {
    for (var S = K[ne]; S[F]; )
      F++;
    return F;
  };
  for (u = 0, m = i.length; u < m; u++)
    l.push([]);
  for (u = 0, m = i.length; u < m; u++)
    for (a = i[u], _ = 0, o = a.firstChild; o; ) {
      if (o.nodeName.toUpperCase() == "TD" || o.nodeName.toUpperCase() == "TH") {
        var E = [], O = I(o);
        if (T = o.getAttribute("colspan") * 1, N = o.getAttribute("rowspan") * 1, T = !T || T === 0 || T === 1 ? 1 : T, N = !N || N === 0 || N === 1 ? 1 : N, x = y(l, u, _), d = T === 1, n) {
          if (d) {
            Xs(e, x, xc(O.data()));
            var f = r[x], H = o.getAttribute("width") || null, Y = o.style.width.match(/width:\s*(\d+[pxem%]+)/);
            Y && (H = Y[1]), f.sWidthOrig = f.sWidth || H, p ? (f.sTitle !== null && !f.autoTitle && (D === !0 && u === 0 || // top row
            D === !1 && u === i.length - 1 || // bottom row
            D === u || // specific row
            D === null) && (o.innerHTML = f.sTitle), !f.sTitle && d && (f.sTitle = qt(o.innerHTML), f.autoTitle = !0)) : f.footer && (o.innerHTML = f.footer), f.ariaTitle || (f.ariaTitle = O.attr("aria-label") || f.sTitle), f.className && O.addClass(f.className);
          }
          I(".dt-column-title", o).length === 0 && I(document.createElement(e.columnTitleTag)).addClass("dt-column-title").append(o.childNodes).appendTo(o), e.orderIndicators && p && O.filter(":not([data-dt-order=disable])").length !== 0 && O.parent(":not([data-dt-order=disable])").length !== 0 && I(".dt-column-order", o).length === 0 && I(document.createElement(e.columnTitleTag)).addClass("dt-column-order").appendTo(o);
          var q = p ? "header" : "footer";
          I("div.dt-column-" + q, o).length === 0 && I("<div>").addClass("dt-column-" + q).append(o.childNodes).appendTo(o);
        }
        for (b = 0; b < T; b++) {
          for (v = 0; v < N; v++)
            l[u + v][x + b] = {
              cell: o,
              unique: d
            }, l[u + v].row = a;
          E.push(x + b);
        }
        o.setAttribute("data-dt-column", dr(E).join(","));
      }
      o = o.nextSibling;
    }
  return l;
}
function df(e) {
  var t = dt(e) == "ssp", n = e.iInitDisplayStart;
  n !== void 0 && n !== -1 && (e._iDisplayStart = t ? n : n >= e.fnRecordsDisplay() ? 0 : n, e.iInitDisplayStart = -1);
}
function ba(e, t, n) {
  var r, i = e.ajax, a = e.oInstance, o = function(m) {
    var x = e.jqXHR ? e.jqXHR.status : null;
    (m === null || typeof x == "number" && x == 204) && (m = {}, Br(e, m, []));
    var _ = m.error || m.sError;
    if (_ && yt(e, 0, _), m.d && typeof m.d == "string")
      try {
        m = JSON.parse(m.d);
      } catch {
      }
    e.json = m, xe(e, null, "xhr", [e, m, e.jqXHR], !0), n(m);
  };
  if (I.isPlainObject(i) && i.data) {
    r = i.data;
    var u = typeof r == "function" ? r(t, e) : r;
    t = typeof r == "function" && u ? u : I.extend(!0, t, u), delete i.data;
  }
  var v = {
    url: typeof i == "string" ? i : "",
    data: t,
    success: o,
    dataType: "json",
    cache: !1,
    type: e.sServerMethod,
    error: function(m, x) {
      var _ = xe(
        e,
        null,
        "xhr",
        [e, null, e.jqXHR],
        !0
      );
      _.indexOf(!0) === -1 && (x == "parsererror" ? yt(e, 0, "Invalid JSON response", 1) : m.readyState === 4 && yt(e, 0, "Ajax error", 7)), ut(e, !1);
    }
  };
  if (I.isPlainObject(i) && I.extend(v, i), e.oAjaxData = t, xe(e, null, "preXhr", [e, t, v], !0), v.submitAs === "json" && typeof t == "object" && (v.data = JSON.stringify(t), v.contentType || (v.contentType = "application/json; charset=utf-8")), typeof i == "function")
    e.jqXHR = i.call(a, t, o, e);
  else if (i.url === "") {
    var b = {};
    Br(e, b, []), o(b);
  } else
    e.jqXHR = I.ajax(v);
  r && (i.data = r);
}
function ff(e) {
  e.iDraw++, ut(e, !0), ba(e, hf(e), function(t) {
    pf(e, t);
  });
}
function hf(e) {
  var t = e.aoColumns, n = e.oFeatures, r = e.oPreviousSearch, i = e.aoPreSearchCols, a = function(o, u) {
    return typeof t[o][u] == "function" ? "function" : t[o][u];
  };
  return {
    draw: e.iDraw,
    columns: t.map(function(o, u) {
      return {
        data: a(u, "mData"),
        name: o.sName,
        searchable: o.bSearchable,
        orderable: o.bSortable,
        search: {
          value: i[u].search,
          regex: i[u].regex,
          fixed: Object.keys(o.searchFixed).map(function(v) {
            return {
              name: v,
              term: typeof o.searchFixed[v] != "function" ? o.searchFixed[v].toString() : "function"
            };
          })
        }
      };
    }),
    order: Wi(e).map(function(o) {
      return {
        column: o.col,
        dir: o.dir,
        name: a(o.col, "sName")
      };
    }),
    start: e._iDisplayStart,
    length: n.bPaginate ? e._iDisplayLength : -1,
    search: {
      value: r.search,
      regex: r.regex,
      fixed: Object.keys(e.searchFixed).map(function(o) {
        return {
          name: o,
          term: typeof e.searchFixed[o] != "function" ? e.searchFixed[o].toString() : "function"
        };
      })
    }
  };
}
function pf(e, t) {
  var n = Br(e, t), r = Es(e, "draw", t), i = Es(e, "recordsTotal", t), a = Es(e, "recordsFiltered", t);
  if (r !== void 0) {
    if (r * 1 < e.iDraw)
      return;
    e.iDraw = r * 1;
  }
  n || (n = []), ma(e), e._iRecordsTotal = parseInt(i, 10), e._iRecordsDisplay = parseInt(a, 10);
  for (var o = 0, u = n.length; o < u; o++)
    xn(e, n[o]);
  e.aiDisplay = e.aiDisplayMaster.slice(), $i(e), fr(e, !0), Oi(e), ut(e, !1);
}
function Br(e, t, n) {
  var r = "data";
  if (I.isPlainObject(e.ajax) && e.ajax.dataSrc !== void 0) {
    var i = e.ajax.dataSrc;
    typeof i == "string" || typeof i == "function" ? r = i : i.data !== void 0 && (r = i.data);
  }
  if (!n)
    return r === "data" ? t.aaData || t[r] : r !== "" ? tr(r)(t) : t;
  gn(r)(t, n);
}
function Es(e, t, n) {
  var r = I.isPlainObject(e.ajax) ? e.ajax.dataSrc : null;
  if (r && r[t])
    return tr(r[t])(n);
  var i = "";
  return t === "draw" ? i = "sEcho" : t === "recordsTotal" ? i = "iTotalRecords" : t === "recordsFiltered" && (i = "iTotalDisplayRecords"), n[i] !== void 0 ? n[i] : n[t];
}
function Fr(e, t) {
  var n = e.aoPreSearchCols;
  if (dt(e) != "ssp") {
    bf(e), e.aiDisplay = e.aiDisplayMaster.slice(), di(e.aiDisplay, e, t.search, t), I.each(e.searchFixed, function(a, o) {
      di(e.aiDisplay, e, o, {});
    });
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      di(
        e.aiDisplay,
        e,
        i.search,
        i,
        r
      ), I.each(e.aoColumns[r].searchFixed, function(a, o) {
        di(e.aiDisplay, e, o, {}, r);
      });
    }
    vf(e);
  }
  e.bFiltered = !0, xe(e, null, "search", [e]);
}
function vf(e) {
  for (var t = k.ext.search, n = e.aiDisplay, r, i, a = 0, o = t.length; a < o; a++) {
    for (var u = [], v = 0, b = n.length; v < b; v++)
      i = n[v], r = e.aoData[i], t[a](e, r._aFilterData, i, r._aData, v) && u.push(i);
    n.length = 0, Gi(n, u);
  }
}
function di(e, t, n, r, i) {
  if (n !== "") {
    var a = 0, o = [], u = typeof n == "function" ? n : null, v = n instanceof RegExp ? n : u ? null : mf(n, r);
    for (a = 0; a < e.length; a++) {
      var b = t.aoData[e[a]], m = i === void 0 ? b._sFilterRow : b._aFilterData[i];
      (u && u(m, b._aData, e[a], i) || v && v.test(m)) && o.push(e[a]);
    }
    for (e.length = o.length, a = 0; a < o.length; a++)
      e[a] = o[a];
  }
}
function mf(e, t) {
  var n = [], r = I.extend({}, {
    boundary: !1,
    caseInsensitive: !0,
    exact: !1,
    regex: !1,
    smart: !0
  }, t);
  if (typeof e != "string" && (e = e.toString()), e = Ai(e), r.exact)
    return new RegExp(
      "^" + Js(e) + "$",
      r.caseInsensitive ? "i" : ""
    );
  if (e = r.regex ? e : Js(e), r.smart) {
    var i = e.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""], a = i.map(function(v) {
      var b = !1, m;
      return v.charAt(0) === "!" && (b = !0, v = v.substring(1)), v.charAt(0) === '"' ? (m = v.match(/^"(.*)"$/), v = m ? m[1] : v) : v.charAt(0) === "“" && (m = v.match(/^\u201C(.*)\u201D$/), v = m ? m[1] : v), b && (v.length > 1 && n.push("(?!" + v + ")"), v = ""), v.replace(/"/g, "");
    }), o = n.length ? n.join("") : "", u = r.boundary ? "\\b" : "";
    e = "^(?=.*?" + u + a.join(")(?=.*?" + u) + ")(" + o + ".)*$";
  }
  return new RegExp(e, r.caseInsensitive ? "i" : "");
}
var Js = k.util.escapeRegex, wi = I("<div>")[0], gf = wi.textContent !== void 0;
function bf(e) {
  for (var t = e.aoColumns, n = e.aoData, r, i, a, o, u, v, b = !1, m = 0; m < n.length; m++)
    if (n[m] && (v = n[m], !v._aFilterData)) {
      for (o = [], i = 0, a = t.length; i < a; i++)
        r = t[i], r.bSearchable ? (u = Ct(e, m, i, "filter"), u === null && (u = ""), typeof u != "string" && u.toString && (u = u.toString())) : u = "", u.indexOf && u.indexOf("&") !== -1 && (wi.innerHTML = u, u = gf ? wi.textContent : wi.innerText), u.replace && (u = u.replace(/[\r\n\u2028]/g, "")), o.push(u);
      v._aFilterData = o, v._sFilterRow = o.join("  "), b = !0;
    }
  return b;
}
function Ti(e) {
  var t, n = e.oInit, r = e.deferLoading, i = dt(e);
  if (!e.bInitialised) {
    setTimeout(function() {
      Ti(e);
    }, 200);
    return;
  }
  Qo(e, "header"), Qo(e, "footer"), Sf(e, n, function() {
    Ni(e, e.aoHeader), Ni(e, e.aoFooter);
    var a = e.iInitDisplayStart;
    if (n.aaData)
      for (t = 0; t < n.aaData.length; t++)
        xn(e, n.aaData[t]);
    else
      (r || i == "dom") && va(e, I(e.nTBody).children("tr"));
    e.aiDisplay = e.aiDisplayMaster.slice(), cf(e), Tf(e), yc(e), ut(e, !0), xe(e, null, "preInit", [e], !0), nr(e), (i != "ssp" || r) && (i == "ajax" ? ba(e, {}, function(o) {
      var u = Br(e, o);
      for (t = 0; t < u.length; t++)
        xn(e, u[t]);
      e.iInitDisplayStart = a, nr(e), ut(e, !1), Oi(e);
    }) : (Oi(e), ut(e, !1)));
  });
}
function Oi(e) {
  if (!e._bInitComplete) {
    var t = [e, e.json];
    e._bInitComplete = !0, Vi(e), xe(e, null, "plugin-init", t, !0), xe(e, "aoInitComplete", "init", t, !0);
  }
}
function vc(e, t) {
  var n = parseInt(t, 10);
  e._iDisplayLength = n, Cc(e), xe(e, null, "length", [e, n]);
}
function ya(e, t, n) {
  var r = e._iDisplayStart, i = e._iDisplayLength, a = e.fnRecordsDisplay();
  if (a === 0 || i === -1)
    r = 0;
  else if (typeof t == "number")
    r = t * i, r > a && (r = 0);
  else if (t == "first")
    r = 0;
  else if (t == "previous")
    r = i >= 0 ? r - i : 0, r < 0 && (r = 0);
  else if (t == "next")
    r + i < a && (r += i);
  else if (t == "last")
    r = Math.floor((a - 1) / i) * i;
  else {
    if (t === "ellipsis")
      return;
    yt(e, 0, "Unknown paging action: " + t, 5);
  }
  var o = e._iDisplayStart !== r;
  return e._iDisplayStart = r, xe(e, null, o ? "page" : "page-nc", [e]), o && n && fr(e), o;
}
function yf(e) {
  var t = e.nTable, n = e.oScroll.sX !== "" || e.oScroll.sY !== "";
  if (e.oFeatures.bProcessing) {
    var r = I("<div/>", {
      id: e.sTableId + "_processing",
      class: e.oClasses.processing.container,
      role: "status"
    }).html(e.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>");
    n ? r.prependTo(I("div.dt-scroll", e.nTableWrapper)) : r.insertBefore(t), I(t).on("processing.dt.DT", function(i, a, o) {
      r.css("display", o ? "block" : "none");
    });
  }
}
function ut(e, t) {
  e.bDrawing && t === !1 || xe(e, null, "processing", [e, t]);
}
function mc(e, t, n) {
  t ? (ut(e, !0), setTimeout(function() {
    n(), ut(e, !1);
  }, 0)) : n();
}
function gc(e) {
  var t = I(e.nTable), n = e.oScroll;
  if (n.sX === "" && n.sY === "")
    return e.nTable;
  var r = n.sX, i = n.sY, a = e.oClasses.scrolling, o = e.captionNode, u = o ? o._captionSide : null, v = I(t[0].cloneNode(!1)), b = I(t[0].cloneNode(!1)), m = t.children("tfoot"), x = "<div/>", _ = function(d) {
    return d ? en(d) : null;
  };
  m.length || (m = null);
  var T = I(x, { class: a.container }).append(
    I(x, { class: a.header.self }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: r ? _(r) : "100%"
    }).append(
      I(x, { class: a.header.inner }).css({
        "box-sizing": "content-box",
        width: n.sXInner || "100%"
      }).append(
        v.removeAttr("id").css("margin-left", 0).append(u === "top" ? o : null).append(
          t.children("thead")
        )
      )
    )
  ).append(
    I(x, { class: a.body }).css({
      position: "relative",
      overflow: "auto",
      width: _(r)
    }).append(t)
  );
  m && T.append(
    I(x, { class: a.footer.self }).css({
      overflow: "hidden",
      border: 0,
      width: r ? _(r) : "100%"
    }).append(
      I(x, { class: a.footer.inner }).append(
        b.removeAttr("id").css("margin-left", 0).append(u === "bottom" ? o : null).append(
          t.children("tfoot")
        )
      )
    )
  );
  var N = T.children(), D = N[0], p = N[1], l = m ? N[2] : null;
  return I(p).on("scroll.DT", function() {
    var d = this.scrollLeft;
    D.scrollLeft = d, m && (l.scrollLeft = d);
  }), I("th, td", D).on("focus", function() {
    var d = D.scrollLeft;
    p.scrollLeft = d, m && (p.scrollLeft = d);
  }), I(p).css("max-height", i), n.bCollapse || I(p).css("height", i), e.nScrollHead = D, e.nScrollBody = p, e.nScrollFoot = l, e.aoDrawCallback.push(bc), T[0];
}
function bc(e) {
  var t = e.oScroll, n = t.iBarWidth, r = I(e.nScrollHead), i = r.children("div"), a = i.children("table"), o = e.nScrollBody, u = I(o), v = I(e.nScrollFoot), b = v.children("div"), m = b.children("table"), x = I(e.nTHead), _ = I(e.nTable), T = e.nTFoot && I("th, td", e.nTFoot).length ? I(e.nTFoot) : null, N = e.oBrowser, D, p, l = o.scrollHeight > o.clientHeight;
  if (e.scrollBarVis !== l && e.scrollBarVis !== void 0) {
    e.scrollBarVis = l, Vi(e);
    return;
  } else
    e.scrollBarVis = l;
  if (_.children("thead, tfoot").remove(), D = x.clone().prependTo(_), D.find("th, td").removeAttr("tabindex"), D.find("[id]").removeAttr("id"), T && (p = T.clone().prependTo(_), p.find("[id]").removeAttr("id")), e.aiDisplay.length) {
    var d = null, y = dt(e) !== "ssp" ? e._iDisplayStart : 0;
    for (H = y; H < y + e.aiDisplay.length; H++) {
      var E = e.aiDisplay[H], O = e.aoData[E].nTr;
      if (O) {
        d = O;
        break;
      }
    }
    if (d)
      for (var f = I(d).children("th, td").map(function(S) {
        return {
          idx: fa(e, S),
          width: I(this).outerWidth()
        };
      }), H = 0; H < f.length; H++) {
        var Y = e.aoColumns[f[H].idx].colEl[0], q = Y.style.width.replace("px", "");
        q !== f[H].width && (Y.style.width = f[H].width + "px", t.sX && (Y.style.minWidth = f[H].width + "px"));
      }
  }
  a.find("colgroup").remove(), a.append(e.colgroup.clone()), T && (m.find("colgroup").remove(), m.append(e.colgroup.clone())), I("th, td", D).each(function() {
    I(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
  }), T && I("th, td", p).each(function() {
    I(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
  });
  var K = Math.floor(_.height()) > o.clientHeight || u.css("overflow-y") == "scroll", ne = "padding" + (N.bScrollbarLeft ? "Left" : "Right"), F = _.outerWidth();
  a.css("width", en(F)), i.css("width", en(F)).css(ne, K ? n + "px" : "0px"), T && (m.css("width", en(F)), b.css("width", en(F)).css(ne, K ? n + "px" : "0px")), _.children("colgroup").prependTo(_), u.trigger("scroll"), (e.bSorted || e.bFiltered) && !e._drawHold && (o.scrollTop = 0);
}
function _f(e) {
  if (e.oFeatures.bAutoWidth) {
    var t = e.nTable, n = e.aoColumns, r = e.oScroll, i = r.sY, a = r.sX, o = r.sXInner, u = ha(e, "bVisible"), v = t.getAttribute("width"), b = t.parentNode, m, x, _, T, N = t.style.width, D = el(e);
    if (D === e.containerWidth)
      return !1;
    e.containerWidth = D, !N && !v && (t.style.width = "100%", N = "100%"), N && N.indexOf("%") !== -1 && (v = N), xe(
      e,
      null,
      "column-calc",
      { visible: u },
      !1
    );
    var p = I(t.cloneNode()).css("visibility", "hidden").css("margin", 0).removeAttr("id");
    p.append("<tbody/>"), p.append(I(e.nTHead).clone()).append(I(e.nTFoot).clone()), p.find("tfoot th, tfoot td").css("width", ""), p.find("thead th, thead td").each(function() {
      var P = cc(e, this, !0, !1);
      P ? (this.style.width = P, a && (this.style.minWidth = P, I(this).append(I("<div/>").css({
        width: P,
        margin: 0,
        padding: 0,
        border: 0,
        height: 1
      })))) : this.style.width = "";
    });
    var l = [];
    for (m = 0; m < u.length; m++)
      l.push(wf(e, u[m]));
    if (l.length)
      for (m = 0; m < l[0].length; m++) {
        var d = I("<tr/>").appendTo(p.find("tbody"));
        for (x = 0; x < u.length; x++) {
          T = u[x], _ = n[T];
          var y = l[x][m] || "", E = je.type.className[_.sType], O = _.sContentPadding || (a ? "-" : ""), f = y + O, H = y.indexOf("<") === -1 && y.indexOf("&") === -1 ? document.createTextNode(f) : f;
          I("<td/>").addClass(E).addClass(_.sClass).append(H).appendTo(d);
        }
      }
    I("[name]", p).removeAttr("name");
    var Y = I("<div/>").css(
      a || i ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}
    ).append(p).appendTo(b);
    a && o ? p.width(o) : a ? (p.css("width", "auto"), p.removeAttr("width"), p.outerWidth() < b.clientWidth && v && p.outerWidth(b.clientWidth)) : i ? p.outerWidth(b.clientWidth) : v && p.outerWidth(v);
    var q = 0, K = p.find("tbody tr").eq(0).children();
    for (m = 0; m < u.length; m++) {
      var ne = K[m].getBoundingClientRect().width;
      q += ne, n[u[m]].sWidth = en(ne);
    }
    if (t.style.width = en(q), Y.remove(), v && (t.style.width = en(v)), (v || a) && !e._reszEvt) {
      var F = k.util.throttle(function() {
        var P = el(e);
        !e.bDestroying && P !== 0 && Vi(e);
      });
      if (window.ResizeObserver) {
        var S = I(e.nTableWrapper).is(":visible"), A = I("<div>").css({
          width: "100%",
          height: 0
        }).addClass("dt-autosize").appendTo(e.nTableWrapper);
        e.resizeObserver = new ResizeObserver(function(P) {
          S ? S = !1 : F();
        }), e.resizeObserver.observe(A[0]);
      } else
        I(window).on("resize.DT-" + e.sInstance, F);
      e._reszEvt = !0;
    }
  }
}
function el(e) {
  return I(e.nTableWrapper).is(":visible") ? I(e.nTableWrapper).width() : 0;
}
function wf(e, t) {
  var n = e.aoColumns[t];
  if (!n.wideStrings) {
    for (var r = [], i = [], a = 0, o = e.aiDisplayMaster.length; a < o; a++) {
      var u = e.aiDisplayMaster[a], v = ga(e, u)[t], b = v && typeof v == "object" && v.nodeType ? v.innerHTML : v + "";
      b = b.replace(/id=".*?"/g, "").replace(/name=".*?"/g, ""), b = b.replace(/<script.*?<\/script>/gi, " ");
      var m = qt(b, " ").replace(/&nbsp;/g, " ");
      i.push({
        str: b,
        len: m.length
      }), r.push(m);
    }
    i.sort(function(_, T) {
      return T.len - _.len;
    }).splice(3), n.wideStrings = i.map(function(_) {
      return _.str;
    });
    let x = r.join(" ").split(" ");
    x.sort(function(_, T) {
      return T.length - _.length;
    }), x.length && n.wideStrings.push(x[0]), x.length > 1 && n.wideStrings.push(x[1]), x.length > 2 && n.wideStrings.push(x[3]);
  }
  return n.wideStrings;
}
function en(e) {
  return e === null ? "0px" : typeof e == "number" ? e < 0 ? "0px" : e + "px" : e.match(/\d$/) ? e + "px" : e;
}
function yc(e) {
  var t = e.aoColumns;
  for (e.colgroup.empty(), He = 0; He < t.length; He++)
    t[He].bVisible && e.colgroup.append(t[He].colEl);
}
function Tf(e) {
  var t = e.nTHead, n = t.querySelectorAll("tr"), r = e.titleRow, i = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
  r === !0 ? t = n[0] : r === !1 ? t = n[n.length - 1] : r !== null && (t = n[r]), e.orderHandler && _c(
    e,
    t,
    t === e.nTHead ? "tr" + i + " th" + i + ", tr" + i + " td" + i : "th" + i + ", td" + i
  );
  var a = [];
  bn(e, a, e.aaSorting), e.aaSorting = a;
}
function _c(e, t, n, r, i) {
  Tc(t, n, function(a) {
    var o = !1, u = r === void 0 ? pa(a.target) : typeof r == "function" ? r() : Array.isArray(r) ? r : [r];
    if (u.length) {
      for (var v = 0, b = u.length; v < b; v++) {
        var m = Cf(e, u[v], v, a.shiftKey);
        if (m !== !1 && (o = !0), e.aaSorting.length === 1 && e.aaSorting[0][1] === "")
          break;
      }
      o && mc(e, !0, function() {
        _a(e), wc(e, e.aiDisplay), nr(e, !1, !1), i && i();
      });
    }
  });
}
function wc(e, t) {
  if (!(t.length < 2)) {
    var n = e.aiDisplayMaster, r = {}, i = {}, a;
    for (a = 0; a < n.length; a++)
      r[n[a]] = a;
    for (a = 0; a < t.length; a++)
      i[t[a]] = r[t[a]];
    t.sort(function(o, u) {
      return i[o] - i[u];
    });
  }
}
function bn(e, t, n) {
  var r = function(a) {
    if (I.isPlainObject(a)) {
      if (a.idx !== void 0)
        t.push([a.idx, a.dir]);
      else if (a.name) {
        var o = Ke(e.aoColumns, "sName"), u = o.indexOf(a.name);
        u !== -1 && t.push([u, a.dir]);
      }
    } else
      t.push(a);
  };
  if (I.isPlainObject(n))
    r(n);
  else if (n.length && typeof n[0] == "number")
    r(n);
  else if (n.length)
    for (var i = 0; i < n.length; i++)
      r(n[i]);
}
function Wi(e) {
  var t, n, r, i = [], a = k.ext.type.order, o = e.aoColumns, u, v, b, m, x = e.aaSortingFixed, _ = I.isPlainObject(x), T = [];
  if (!e.oFeatures.bSort)
    return i;
  for (Array.isArray(x) && bn(e, T, x), _ && x.pre && bn(e, T, x.pre), bn(e, T, e.aaSorting), _ && x.post && bn(e, T, x.post), t = 0; t < T.length; t++)
    if (m = T[t][0], o[m])
      for (u = o[m].aDataSort, n = 0, r = u.length; n < r; n++)
        v = u[n], b = o[v].sType || "string", T[t]._idx === void 0 && (T[t]._idx = o[v].asSorting.indexOf(T[t][1])), T[t][1] && i.push({
          src: m,
          col: v,
          dir: T[t][1],
          index: T[t]._idx,
          type: b,
          formatter: a[b + "-pre"],
          sorter: a[b + "-" + T[t][1]]
        });
  return i;
}
function _a(e, t, n) {
  var r, i, a = [], o = k.ext.type.order, u = e.aoData, v, b = e.aiDisplayMaster, m;
  if ($i(e), t !== void 0) {
    var x = e.aoColumns[t];
    m = [{
      src: t,
      col: t,
      dir: n,
      index: 0,
      type: x.sType,
      formatter: o[x.sType + "-pre"],
      sorter: o[x.sType + "-" + n]
    }], b = b.slice();
  } else
    m = Wi(e);
  for (r = 0, i = m.length; r < i; r++)
    v = m[r], xf(e, v.col);
  if (dt(e) != "ssp" && m.length !== 0) {
    for (r = 0, i = b.length; r < i; r++)
      a[r] = r;
    m.length && m[0].dir === "desc" && e.orderDescReverse && a.reverse(), b.sort(function(_, T) {
      var N, D, p, l, d, y = m.length, E = u[_]._aSortData, O = u[T]._aSortData;
      for (p = 0; p < y; p++)
        if (d = m[p], N = E[d.col], D = O[d.col], d.sorter) {
          if (l = d.sorter(N, D), l !== 0)
            return l;
        } else if (l = N < D ? -1 : N > D ? 1 : 0, l !== 0)
          return d.dir === "asc" ? l : -l;
      return N = a[_], D = a[T], N < D ? -1 : N > D ? 1 : 0;
    });
  } else
    m.length === 0 && b.sort(function(_, T) {
      return _ < T ? -1 : _ > T ? 1 : 0;
    });
  return t === void 0 && (e.bSorted = !0, e.sortDetails = m, xe(e, null, "order", [e, m])), b;
}
function Cf(e, t, n, r) {
  var i = e.aoColumns[t], a = e.aaSorting, o = i.asSorting, u, v = function(m, x) {
    var _ = m._idx;
    return _ === void 0 && (_ = o.indexOf(m[1])), _ + 1 < o.length ? _ + 1 : x ? null : 0;
  };
  if (!i.bSortable)
    return !1;
  if (typeof a[0] == "number" && (a = e.aaSorting = [a]), (r || n) && e.oFeatures.bSortMulti) {
    var b = Ke(a, "0").indexOf(t);
    b !== -1 ? (u = v(a[b], !0), u === null && a.length === 1 && (u = 0), u === null || o[u] === "" ? a.splice(b, 1) : (a[b][1] = o[u], a[b]._idx = u)) : r ? (a.push([t, o[0], 0]), a[a.length - 1]._idx = 0) : (a.push([t, a[0][1], 0]), a[a.length - 1]._idx = 0);
  } else
    a.length && a[0][0] == t ? (u = v(a[0]), a.length = 1, a[0][1] = o[u], a[0]._idx = u) : (a.length = 0, a.push([t, o[0]]), a[0]._idx = 0);
}
function Zs(e) {
  var t = e.aLastSort, n = e.oClasses.order.position, r = Wi(e), i = e.oFeatures, a, o, u;
  if (i.bSort && i.bSortClasses) {
    for (a = 0, o = t.length; a < o; a++)
      u = t[a].src, I(Ke(e.aoData, "anCells", u)).removeClass(n + (a < 2 ? a + 1 : 3));
    for (a = 0, o = r.length; a < o; a++)
      u = r[a].src, I(Ke(e.aoData, "anCells", u)).addClass(n + (a < 2 ? a + 1 : 3));
  }
  e.aLastSort = r;
}
function xf(e, t) {
  var n = e.aoColumns[t], r = k.ext.order[n.sSortDataType], i;
  r && (i = r.call(
    e.oInstance,
    e,
    t,
    $r(e, t)
  ));
  for (var a, o, u = k.ext.type.order[n.sType + "-pre"], v = e.aoData, b = 0; b < v.length; b++)
    v[b] && (a = v[b], a._aSortData || (a._aSortData = []), (!a._aSortData[t] || r) && (o = r ? i[b] : (
      // If there was a custom sort function, use data from there
      Ct(e, b, t, "sort")
    ), a._aSortData[t] = u ? u(o, e) : o));
}
function qi(e) {
  if (!e._bLoadingState) {
    var t = [];
    bn(e, t, e.aaSorting);
    var n = e.aoColumns, r = {
      time: +/* @__PURE__ */ new Date(),
      start: e._iDisplayStart,
      length: e._iDisplayLength,
      order: t.map(function(i) {
        return n[i[0]] && n[i[0]].sName ? [n[i[0]].sName, i[1]] : i.slice();
      }),
      search: I.extend({}, e.oPreviousSearch),
      columns: e.aoColumns.map(function(i, a) {
        return {
          name: i.sName,
          visible: i.bVisible,
          search: I.extend({}, e.aoPreSearchCols[a])
        };
      })
    };
    e.oSavedState = r, xe(e, "aoStateSaveParams", "stateSaveParams", [e, r]), e.oFeatures.bStateSave && !e.bDestroying && e.fnStateSaveCallback.call(e.oInstance, e, r);
  }
}
function Sf(e, t, n) {
  if (!e.oFeatures.bStateSave) {
    n();
    return;
  }
  var r = function(a) {
    ea(e, a, n);
  }, i = e.fnStateLoadCallback.call(e.oInstance, e, r);
  return i !== void 0 && ea(e, i, n), !0;
}
function ea(e, t, n) {
  var r, i, a = e.aoColumns, o = Ke(e.aoColumns, "sName");
  e._bLoadingState = !0;
  var u = e._bInitComplete ? new k.Api(e) : null;
  if (!t || !t.time) {
    e._bLoadingState = !1, n();
    return;
  }
  var v = e.iStateDuration;
  if (v > 0 && t.time < +/* @__PURE__ */ new Date() - v * 1e3) {
    e._bLoadingState = !1, n();
    return;
  }
  var b = xe(e, "aoStateLoadParams", "stateLoadParams", [e, t]);
  if (b.indexOf(!1) !== -1) {
    e._bLoadingState = !1, n();
    return;
  }
  if (e.oLoadedState = I.extend(!0, {}, t), xe(e, null, "stateLoadInit", [e, t], !0), t.length !== void 0 && (u ? u.page.len(t.length) : e._iDisplayLength = t.length), t.start !== void 0 && (u === null ? (e._iDisplayStart = t.start, e.iInitDisplayStart = t.start) : ya(e, t.start / e._iDisplayLength)), t.order !== void 0 && (e.aaSorting = [], I.each(t.order, function(N, D) {
    var p = [D[0], D[1]];
    if (typeof D[0] == "string") {
      var l = o.indexOf(D[0]);
      if (l < 0)
        return;
      p[0] = l;
    } else if (p[0] >= a.length)
      return;
    e.aaSorting.push(p);
  })), t.search !== void 0 && I.extend(e.oPreviousSearch, t.search), t.columns) {
    var m = t.columns, x = Ke(t.columns, "name");
    if (x.join("").length && x.join("") !== o.join(""))
      for (m = [], r = 0; r < o.length; r++)
        if (o[r] != "") {
          var _ = x.indexOf(o[r]);
          _ >= 0 ? m.push(t.columns[_]) : m.push({});
        } else
          m.push({});
    if (m.length === a.length) {
      for (r = 0, i = m.length; r < i; r++) {
        var T = m[r];
        T.visible !== void 0 && (u ? u.column(r).visible(T.visible, !1) : a[r].bVisible = T.visible), T.search !== void 0 && I.extend(e.aoPreSearchCols[r], T.search);
      }
      u && u.one("draw", function() {
        u.columns.adjust();
      });
    }
  }
  e._bLoadingState = !1, xe(e, "aoStateLoaded", "stateLoaded", [e, t]), n();
}
function yt(e, t, n, r) {
  if (n = "DataTables warning: " + (e ? "table id=" + e.sTableId + " - " : "") + n, r && (n += ". For more information about this error, please see https://datatables.net/tn/" + r), t)
    window.console && console.log && console.log(n);
  else {
    var i = k.ext, a = i.sErrMode || i.errMode;
    if (e && xe(e, null, "dt-error", [e, r, n], !0), a == "alert")
      alert(n);
    else {
      if (a == "throw")
        throw new Error(n);
      typeof a == "function" && a(e, r, n);
    }
  }
}
function tn(e, t, n, r) {
  if (Array.isArray(n)) {
    I.each(n, function(i, a) {
      Array.isArray(a) ? tn(e, t, a[0], a[1]) : tn(e, t, a);
    });
    return;
  }
  r === void 0 && (r = n), t[n] !== void 0 && (e[r] = t[n]);
}
function tl(e, t, n) {
  var r;
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && (r = t[i], I.isPlainObject(r) ? (I.isPlainObject(e[i]) || (e[i] = {}), I.extend(!0, e[i], r)) : n && i !== "data" && i !== "aaData" && Array.isArray(r) ? e[i] = r.slice() : e[i] = r);
  return e;
}
function Tc(e, t, n) {
  I(e).on("click.DT", t, function(r) {
    n(r);
  }).on("keypress.DT", t, function(r) {
    r.which === 13 && (r.preventDefault(), n(r));
  }).on("selectstart.DT", t, function() {
    return !1;
  });
}
function bt(e, t, n) {
  n && e[t].push(n);
}
function xe(e, t, n, r, i) {
  var a = [];
  if (t && (a = e[t].slice().reverse().map(function(v) {
    return v.apply(e.oInstance, r);
  })), n !== null) {
    var o = I.Event(n + ".dt"), u = I(e.nTable);
    o.dt = e.api, u[i ? "trigger" : "triggerHandler"](o, r), i && u.parents("body").length === 0 && I("body").trigger(o, r), a.push(o.result);
  }
  return a;
}
function Cc(e) {
  var t = e._iDisplayStart, n = e.fnDisplayEnd(), r = e._iDisplayLength;
  t >= n && (t = n - r), t -= t % r, (r === -1 || t < 0) && (t = 0), e._iDisplayStart = t;
}
function Pi(e, t) {
  var n = e.renderer, r = k.ext.renderer[t];
  return I.isPlainObject(n) && n[t] ? r[n[t]] || r._ : typeof n == "string" && r[n] || r._;
}
function dt(e) {
  return e.oFeatures.bServerSide ? "ssp" : e.ajax ? "ajax" : "dom";
}
function wa(e, t, n) {
  var r = e.fnFormatNumber, i = e._iDisplayStart + 1, a = e._iDisplayLength, o = e.fnRecordsDisplay(), u = e.fnRecordsTotal(), v = a === -1;
  return t.replace(/_START_/g, r.call(e, i)).replace(/_END_/g, r.call(e, e.fnDisplayEnd())).replace(/_MAX_/g, r.call(e, u)).replace(/_TOTAL_/g, r.call(e, o)).replace(/_PAGE_/g, r.call(e, v ? 1 : Math.ceil(i / a))).replace(/_PAGES_/g, r.call(e, v ? 1 : Math.ceil(o / a))).replace(/_ENTRIES_/g, e.api.i18n("entries", "", n)).replace(/_ENTRIES-MAX_/g, e.api.i18n("entries", "", u)).replace(/_ENTRIES-TOTAL_/g, e.api.i18n("entries", "", o));
}
function Gi(e, t) {
  if (t)
    if (t.length < 1e4)
      e.push.apply(e, t);
    else
      for (He = 0; He < t.length; He++)
        e.push(t[He]);
}
function nl(e, t, n) {
  for (Array.isArray(n) || (n = [n]), He = 0; He < n.length; He++)
    e.on(t + ".dt", n[He]);
}
function xc(e) {
  return k.ext.escape.attributes && I.each(e, function(t, n) {
    e[t] = Tn(n);
  }), e;
}
var Ta = [], ze = Array.prototype, Df = function(e) {
  var t, n, r = k.settings, i = Ke(r, "nTable");
  if (e) {
    if (e.nTable && e.oFeatures)
      return [e];
    if (e.nodeName && e.nodeName.toLowerCase() === "table")
      return t = i.indexOf(e), t !== -1 ? [r[t]] : null;
    if (e && typeof e.settings == "function")
      return e.settings().toArray();
    typeof e == "string" ? n = I(e).get() : e instanceof I && (n = e.get());
  } else
    return [];
  if (n)
    return r.filter(function(a, o) {
      return n.includes(i[o]);
    });
};
Te = function(e, t) {
  if (!(this instanceof Te))
    return new Te(e, t);
  var n, r = [], i = function(a) {
    var o = Df(a);
    o && r.push.apply(r, o);
  };
  if (Array.isArray(e))
    for (n = 0; n < e.length; n++)
      i(e[n]);
  else
    i(e);
  this.context = r.length > 1 ? dr(r) : r, Gi(this, t), this.selector = {
    rows: null,
    cols: null,
    opts: null
  }, Te.extend(this, this, Ta);
};
k.Api = Te;
I.extend(Te.prototype, {
  any: function() {
    return this.count() !== 0;
  },
  context: [],
  // array of table settings objects
  count: function() {
    return this.flatten().length;
  },
  each: function(e) {
    for (var t = 0, n = this.length; t < n; t++)
      e.call(this, this[t], t, this);
    return this;
  },
  eq: function(e) {
    var t = this.context;
    return t.length > e ? new Te(t[e], this[e]) : null;
  },
  filter: function(e) {
    var t = ze.filter.call(this, e, this);
    return new Te(this.context, t);
  },
  flatten: function() {
    var e = [];
    return new Te(this.context, e.concat.apply(e, this.toArray()));
  },
  get: function(e) {
    return this[e];
  },
  join: ze.join,
  includes: function(e) {
    return this.indexOf(e) !== -1;
  },
  indexOf: ze.indexOf,
  iterator: function(e, t, n, r) {
    var i = [], a, o, u, v, b, m = this.context, x, _, T, N = this.selector;
    for (typeof e == "string" && (r = n, n = t, t = e, e = !1), o = 0, u = m.length; o < u; o++) {
      var D = new Te(m[o]);
      if (t === "table")
        a = n.call(D, m[o], o), a !== void 0 && i.push(a);
      else if (t === "columns" || t === "rows")
        a = n.call(D, m[o], this[o], o), a !== void 0 && i.push(a);
      else if (t === "every" || t === "column" || t === "column-rows" || t === "row" || t === "cell")
        for (_ = this[o], t === "column-rows" && (x = Ki(m[o], N.opts)), v = 0, b = _.length; v < b; v++)
          T = _[v], t === "cell" ? a = n.call(D, m[o], T.row, T.column, o, v) : a = n.call(D, m[o], T, o, v, x), a !== void 0 && i.push(a);
    }
    if (i.length || r) {
      var p = new Te(m, e ? i.concat.apply([], i) : i), l = p.selector;
      return l.rows = N.rows, l.cols = N.cols, l.opts = N.opts, p;
    }
    return this;
  },
  lastIndexOf: ze.lastIndexOf,
  length: 0,
  map: function(e) {
    var t = ze.map.call(this, e, this);
    return new Te(this.context, t);
  },
  pluck: function(e) {
    var t = k.util.get(e);
    return this.map(function(n) {
      return t(n);
    });
  },
  pop: ze.pop,
  push: ze.push,
  reduce: ze.reduce,
  reduceRight: ze.reduceRight,
  reverse: ze.reverse,
  // Object with rows, columns and opts
  selector: null,
  shift: ze.shift,
  slice: function() {
    return new Te(this.context, this);
  },
  sort: ze.sort,
  splice: ze.splice,
  toArray: function() {
    return ze.slice.call(this);
  },
  to$: function() {
    return I(this);
  },
  toJQuery: function() {
    return I(this);
  },
  unique: function() {
    return new Te(this.context, dr(this.toArray()));
  },
  unshift: ze.unshift
});
function Af(e, t, n) {
  return function() {
    var r = t.apply(e || this, arguments);
    return Te.extend(r, r, n.methodExt), r;
  };
}
function Ef(e, t) {
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n].name === t)
      return e[n];
  return null;
}
window.__apiStruct = Ta;
Te.extend = function(e, t, n) {
  if (!(!n.length || !t || !(t instanceof Te) && !t.__dt_wrapper)) {
    var r, i, a;
    for (r = 0, i = n.length; r < i; r++)
      a = n[r], a.name !== "__proto__" && (t[a.name] = a.type === "function" ? Af(e, a.val, a) : a.type === "object" ? {} : a.val, t[a.name].__dt_wrapper = !0, Te.extend(e, t[a.name], a.propExt));
  }
};
Te.register = ue = function(e, t) {
  if (Array.isArray(e)) {
    for (var n = 0, r = e.length; n < r; n++)
      Te.register(e[n], t);
    return;
  }
  var i, a, o = e.split("."), u = Ta, v, b;
  for (i = 0, a = o.length; i < a; i++) {
    b = o[i].indexOf("()") !== -1, v = b ? o[i].replace("()", "") : o[i];
    var m = Ef(u, v);
    m || (m = {
      name: v,
      val: {},
      methodExt: [],
      propExt: [],
      type: "object"
    }, u.push(m)), i === a - 1 ? (m.val = t, m.type = typeof t == "function" ? "function" : I.isPlainObject(t) ? "object" : "other") : u = b ? m.methodExt : m.propExt;
  }
};
Te.registerPlural = De = function(e, t, n) {
  Te.register(e, n), Te.register(t, function() {
    var r = n.apply(this, arguments);
    return r === this ? this : r instanceof Te ? r.length ? Array.isArray(r[0]) ? new Te(r.context, r[0]) : (
      // Array results are 'enhanced'
      r[0]
    ) : void 0 : r;
  });
};
var Sc = function(e, t) {
  if (Array.isArray(e)) {
    var n = [];
    return e.forEach(function(i) {
      var a = Sc(i, t);
      Gi(n, a);
    }), n.filter(function(i) {
      return i;
    });
  }
  if (typeof e == "number")
    return [t[e]];
  var r = t.map(function(i) {
    return i.nTable;
  });
  return I(r).filter(e).map(function() {
    var i = r.indexOf(this);
    return t[i];
  }).toArray();
};
ue("tables()", function(e) {
  return e != null ? new Te(Sc(e, this.context)) : this;
});
ue("table()", function(e) {
  var t = this.tables(e), n = t.context;
  return n.length ? new Te(n[0]) : t;
});
[
  ["nodes", "node", "nTable"],
  ["body", "body", "nTBody"],
  ["header", "header", "nTHead"],
  ["footer", "footer", "nTFoot"]
].forEach(function(e) {
  De(
    "tables()." + e[0] + "()",
    "table()." + e[1] + "()",
    function() {
      return this.iterator("table", function(t) {
        return t[e[2]];
      }, 1);
    }
  );
});
[
  ["header", "aoHeader"],
  ["footer", "aoFooter"]
].forEach(function(e) {
  ue("table()." + e[0] + ".structure()", function(t) {
    var n = this.columns(t).indexes().flatten().toArray(), r = this.context[0], i = hc(r, r[e[1]], n), a = n.slice().sort(function(o, u) {
      return o - u;
    });
    return i.map(function(o) {
      return n.map(function(u) {
        return o[a.indexOf(u)];
      });
    });
  });
});
De("tables().containers()", "table().container()", function() {
  return this.iterator("table", function(e) {
    return e.nTableWrapper;
  }, 1);
});
ue("tables().every()", function(e) {
  var t = this;
  return this.iterator("table", function(n, r) {
    e.call(t.table(r), r);
  });
});
ue("caption()", function(e, t) {
  var n = this.context;
  if (e === void 0) {
    var r = n[0].captionNode;
    return r && n.length ? r.innerHTML : null;
  }
  return this.iterator("table", function(i) {
    var a = I(i.nTable), o = I(i.captionNode), u = I(i.nTableWrapper);
    if (o.length || (o = I("<caption/>").html(e), i.captionNode = o[0], t || (a.prepend(o), t = o.css("caption-side"))), o.html(e), t && (o.css("caption-side", t), o[0]._captionSide = t), u.find("div.dataTables_scroll").length) {
      var v = t === "top" ? "Head" : "Foot";
      u.find("div.dataTables_scroll" + v + " table").prepend(o);
    } else
      a.prepend(o);
  }, 1);
});
ue("caption.node()", function() {
  var e = this.context;
  return e.length ? e[0].captionNode : null;
});
ue("draw()", function(e) {
  return this.iterator("table", function(t) {
    e === "page" ? fr(t) : (typeof e == "string" && (e = e !== "full-hold"), nr(t, e === !1));
  });
});
ue("page()", function(e) {
  return e === void 0 ? this.page.info().page : this.iterator("table", function(t) {
    ya(t, e);
  });
});
ue("page.info()", function() {
  if (this.context.length !== 0) {
    var e = this.context[0], t = e._iDisplayStart, n = e.oFeatures.bPaginate ? e._iDisplayLength : -1, r = e.fnRecordsDisplay(), i = n === -1;
    return {
      page: i ? 0 : Math.floor(t / n),
      pages: i ? 1 : Math.ceil(r / n),
      start: t,
      end: e.fnDisplayEnd(),
      length: n,
      recordsTotal: e.fnRecordsTotal(),
      recordsDisplay: r,
      serverSide: dt(e) === "ssp"
    };
  }
});
ue("page.len()", function(e) {
  return e === void 0 ? this.context.length !== 0 ? this.context[0]._iDisplayLength : void 0 : this.iterator("table", function(t) {
    vc(t, e);
  });
});
var Dc = function(e, t, n) {
  if (n) {
    var r = new Te(e);
    r.one("draw", function() {
      n(r.ajax.json());
    });
  }
  if (dt(e) == "ssp")
    nr(e, t);
  else {
    ut(e, !0);
    var i = e.jqXHR;
    i && i.readyState !== 4 && i.abort(), ba(e, {}, function(a) {
      ma(e);
      for (var o = Br(e, a), u = 0, v = o.length; u < v; u++)
        xn(e, o[u]);
      nr(e, t), Oi(e), ut(e, !1);
    });
  }
};
ue("ajax.json()", function() {
  var e = this.context;
  if (e.length > 0)
    return e[0].json;
});
ue("ajax.params()", function() {
  var e = this.context;
  if (e.length > 0)
    return e[0].oAjaxData;
});
ue("ajax.reload()", function(e, t) {
  return this.iterator("table", function(n) {
    Dc(n, t === !1, e);
  });
});
ue("ajax.url()", function(e) {
  var t = this.context;
  return e === void 0 ? t.length === 0 ? void 0 : (t = t[0], I.isPlainObject(t.ajax) ? t.ajax.url : t.ajax) : this.iterator("table", function(n) {
    I.isPlainObject(n.ajax) ? n.ajax.url = e : n.ajax = e;
  });
});
ue("ajax.url().load()", function(e, t) {
  return this.iterator("table", function(n) {
    Dc(n, t === !1, e);
  });
});
var Ca = function(e, t, n, r, i) {
  var a = [], o, u, v, b = typeof t;
  for ((!t || b === "string" || b === "function" || t.length === void 0) && (t = [t]), u = 0, v = t.length; u < v; u++)
    o = n(typeof t[u] == "string" ? t[u].trim() : t[u]), o = o.filter(function(x) {
      return x != null;
    }), o && o.length && (a = a.concat(o));
  var m = je.selector[e];
  if (m.length)
    for (u = 0, v = m.length; u < v; u++)
      a = m[u](r, i, a);
  return dr(a);
}, xa = function(e) {
  return e || (e = {}), e.filter && e.search === void 0 && (e.search = e.filter), I.extend({
    columnOrder: "implied",
    search: "none",
    order: "current",
    page: "all"
  }, e);
}, Sa = function(e) {
  var t = new Te(e.context[0]);
  return e.length && t.push(e[0]), t.selector = e.selector, t.length && t[0].length > 1 && t[0].splice(1), t;
}, Ki = function(e, t) {
  var n, r, i, a = [], o = e.aiDisplay, u = e.aiDisplayMaster, v = t.search, b = t.order, m = t.page;
  if (dt(e) == "ssp")
    return v === "removed" ? [] : Jt(0, u.length);
  if (m == "current")
    for (n = e._iDisplayStart, r = e.fnDisplayEnd(); n < r; n++)
      a.push(o[n]);
  else if (b == "current" || b == "applied") {
    if (v == "none")
      a = u.slice();
    else if (v == "applied")
      a = o.slice();
    else if (v == "removed") {
      var x = {};
      for (n = 0, r = o.length; n < r; n++)
        x[o[n]] = null;
      u.forEach(function(T) {
        Object.prototype.hasOwnProperty.call(x, T) || a.push(T);
      });
    }
  } else if (b == "index" || b == "original")
    for (n = 0, r = e.aoData.length; n < r; n++)
      e.aoData[n] && (v == "none" ? a.push(n) : (i = o.indexOf(n), (i === -1 && v == "removed" || i >= 0 && v == "applied") && a.push(n)));
  else if (typeof b == "number") {
    var _ = _a(e, b, "asc");
    if (v === "none")
      a = _;
    else
      for (n = 0; n < _.length; n++)
        i = o.indexOf(_[n]), (i === -1 && v == "removed" || i >= 0 && v == "applied") && a.push(_[n]);
  }
  return a;
}, Nf = function(e, t, n) {
  var r, i = function(o) {
    var u = rc(o), v = e.aoData;
    if (u !== null && !n)
      return [u];
    if (r || (r = Ki(e, n)), u !== null && r.indexOf(u) !== -1)
      return [u];
    if (o == null || o === "")
      return r;
    if (typeof o == "function")
      return r.map(function(N) {
        var D = v[N];
        return o(N, D._aData, D.nTr) ? N : null;
      });
    if (o.nodeName) {
      var b = o._DT_RowIndex, m = o._DT_CellIndex;
      if (b !== void 0)
        return v[b] && v[b].nTr === o ? [b] : [];
      if (m)
        return v[m.row] && v[m.row].nTr === o.parentNode ? [m.row] : [];
      var x = I(o).closest("*[data-dt-row]");
      return x.length ? [x.data("dt-row")] : [];
    }
    if (typeof o == "string" && o.charAt(0) === "#") {
      var _ = e.aIds[o.replace(/^#/, "")];
      if (_ !== void 0)
        return [_.idx];
    }
    var T = sc(
      Hr(e.aoData, r, "nTr")
    );
    return I(T).filter(o).map(function() {
      return this._DT_RowIndex;
    }).toArray();
  }, a = Ca("row", t, i, e, n);
  return (n.order === "current" || n.order === "applied") && wc(e, a), a;
};
ue("rows()", function(e, t) {
  e === void 0 ? e = "" : I.isPlainObject(e) && (t = e, e = ""), t = xa(t);
  var n = this.iterator("table", function(r) {
    return Nf(r, e, t);
  }, 1);
  return n.selector.rows = e, n.selector.opts = t, n;
});
ue("rows().nodes()", function() {
  return this.iterator("row", function(e, t) {
    return e.aoData[t].nTr || void 0;
  }, 1);
});
ue("rows().data()", function() {
  return this.iterator(!0, "rows", function(e, t) {
    return Hr(e.aoData, t, "_aData");
  }, 1);
});
De("rows().cache()", "row().cache()", function(e) {
  return this.iterator("row", function(t, n) {
    var r = t.aoData[n];
    return e === "search" ? r._aFilterData : r._aSortData;
  }, 1);
});
De("rows().invalidate()", "row().invalidate()", function(e) {
  return this.iterator("row", function(t, n) {
    ji(t, n, e);
  });
});
De("rows().indexes()", "row().index()", function() {
  return this.iterator("row", function(e, t) {
    return t;
  }, 1);
});
De("rows().ids()", "row().id()", function(e) {
  for (var t = [], n = this.context, r = 0, i = n.length; r < i; r++)
    for (var a = 0, o = this[r].length; a < o; a++) {
      var u = n[r].rowIdFn(n[r].aoData[this[r][a]]._aData);
      t.push((e === !0 ? "#" : "") + u);
    }
  return new Te(n, t);
});
De("rows().remove()", "row().remove()", function() {
  return this.iterator("row", function(e, t) {
    var n = e.aoData, r = n[t], i = e.aiDisplayMaster.indexOf(t);
    i !== -1 && e.aiDisplayMaster.splice(i, 1), e._iRecordsDisplay > 0 && e._iRecordsDisplay--, Cc(e);
    var a = e.rowIdFn(r._aData);
    a !== void 0 && delete e.aIds[a], n[t] = null;
  }), this;
});
ue("rows.add()", function(e) {
  var t = this.iterator("table", function(r) {
    var i, a, o, u = [];
    for (a = 0, o = e.length; a < o; a++)
      i = e[a], i.nodeName && i.nodeName.toUpperCase() === "TR" ? u.push(va(r, i)[0]) : u.push(xn(r, i));
    return u;
  }, 1), n = this.rows(-1);
  return n.pop(), Gi(n, t), n;
});
ue("row()", function(e, t) {
  return Sa(this.rows(e, t));
});
ue("row().data()", function(e) {
  var t = this.context;
  if (e === void 0)
    return t.length && this.length && this[0].length ? t[0].aoData[this[0]]._aData : void 0;
  var n = t[0].aoData[this[0]];
  return n._aData = e, Array.isArray(e) && n.nTr && n.nTr.id && gn(t[0].rowId)(e, n.nTr.id), ji(t[0], this[0], "data"), this;
});
ue("row().node()", function() {
  var e = this.context;
  if (e.length && this.length && this[0].length) {
    var t = e[0].aoData[this[0]];
    if (t && t.nTr)
      return t.nTr;
  }
  return null;
});
ue("row.add()", function(e) {
  e instanceof I && e.length && (e = e[0]);
  var t = this.iterator("table", function(n) {
    return e.nodeName && e.nodeName.toUpperCase() === "TR" ? va(n, e)[0] : xn(n, e);
  });
  return this.row(t[0]);
});
I(document).on("plugin-init.dt", function(e, t) {
  var n = new Te(t);
  n.on("stateSaveParams.DT", function(r, i, a) {
    for (var o = i.rowIdFn, u = i.aiDisplayMaster, v = [], b = 0; b < u.length; b++) {
      var m = u[b], x = i.aoData[m];
      x._detailsShow && v.push("#" + o(x._aData));
    }
    a.childRows = v;
  }), n.on("stateLoaded.DT", function(r, i, a) {
    rl(n, a);
  }), rl(n, n.state.loaded());
});
var rl = function(e, t) {
  t && t.childRows && e.rows(t.childRows.map(function(n) {
    return n.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g, "$1\\:");
  })).every(function() {
    xe(e.settings()[0], null, "requestChild", [this]);
  });
}, Of = function(e, t, n, r) {
  var i = [], a = function(o, u) {
    if (Array.isArray(o) || o instanceof I) {
      for (var v = 0, b = o.length; v < b; v++)
        a(o[v], u);
      return;
    }
    if (o.nodeName && o.nodeName.toLowerCase() === "tr")
      o.setAttribute("data-dt-row", t.idx), i.push(o);
    else {
      var m = I("<tr><td></td></tr>").attr("data-dt-row", t.idx).addClass(u);
      I("td", m).addClass(u).html(o)[0].colSpan = Hi(e), i.push(m[0]);
    }
  };
  a(n, r), t._details && t._details.detach(), t._details = I(i), t._detailsShow && t._details.insertAfter(t.nTr);
}, Ac = k.util.throttle(
  function(e) {
    qi(e[0]);
  },
  500
), Da = function(e, t) {
  var n = e.context;
  if (n.length) {
    var r = n[0].aoData[t !== void 0 ? t : e[0]];
    r && r._details && (r._details.detach(), r._detailsShow = void 0, r._details = void 0, I(r.nTr).removeClass("dt-hasChild"), Ac(n));
  }
}, Ec = function(e, t) {
  var n = e.context;
  if (n.length && e.length) {
    var r = n[0].aoData[e[0]];
    r._details && (r._detailsShow = t, t ? (r._details.insertAfter(r.nTr), I(r.nTr).addClass("dt-hasChild")) : (r._details.detach(), I(r.nTr).removeClass("dt-hasChild")), xe(n[0], null, "childRow", [t, e.row(e[0])]), Pf(n[0]), Ac(n));
  }
}, Pf = function(e) {
  var t = new Te(e), n = ".dt.DT_details", r = "draw" + n, i = "column-sizing" + n, a = "destroy" + n, o = e.aoData;
  t.off(r + " " + i + " " + a), Ke(o, "_details").length > 0 && (t.on(r, function(u, v) {
    e === v && t.rows({ page: "current" }).eq(0).each(function(b) {
      var m = o[b];
      m._detailsShow && m._details.insertAfter(m.nTr);
    });
  }), t.on(i, function(u, v) {
    if (e === v)
      for (var b, m = Hi(v), x = 0, _ = o.length; x < _; x++)
        b = o[x], b && b._details && b._details.each(function() {
          var T = I(this).children("td");
          T.length == 1 && T.attr("colspan", m);
        });
  }), t.on(a, function(u, v) {
    if (e === v)
      for (var b = 0, m = o.length; b < m; b++)
        o[b] && o[b]._details && Da(t, b);
  }));
}, Rf = "", jr = Rf + "row().child", Ui = jr + "()";
ue(Ui, function(e, t) {
  var n = this.context;
  return e === void 0 ? n.length && this.length && n[0].aoData[this[0]] ? n[0].aoData[this[0]]._details : void 0 : (e === !0 ? this.child.show() : e === !1 ? Da(this) : n.length && this.length && Of(n[0], n[0].aoData[this[0]], e, t), this);
});
ue([
  jr + ".show()",
  Ui + ".show()"
  // only when `child()` was called with parameters (without
], function() {
  return Ec(this, !0), this;
});
ue([
  jr + ".hide()",
  Ui + ".hide()"
  // only when `child()` was called with parameters (without
], function() {
  return Ec(this, !1), this;
});
ue([
  jr + ".remove()",
  Ui + ".remove()"
  // only when `child()` was called with parameters (without
], function() {
  return Da(this), this;
});
ue(jr + ".isShown()", function() {
  var e = this.context;
  return e.length && this.length && e[0].aoData[this[0]] && e[0].aoData[this[0]]._detailsShow || !1;
});
var kf = /^([^:]+)?:(name|title|visIdx|visible)$/, Aa = function(e, t, n, r, i, a) {
  for (var o = [], u = 0, v = i.length; u < v; u++)
    o.push(Ct(e, i[u], t, a));
  return o;
}, Nc = function(e, t, n) {
  var r = e.aoHeader, i = e.titleRow, a = null;
  if (n !== void 0)
    a = n;
  else if (i === !0)
    a = 0;
  else if (i === !1)
    a = r.length - 1;
  else if (i !== null)
    a = i;
  else {
    for (var o = 0; o < r.length; o++)
      r[o][t].unique && I(".dt-column-title", r[o][t].cell).text() && (a = o);
    a === null && (a = 0);
  }
  return r[a][t].cell;
}, Lf = function(e) {
  for (var t = [], n = 0; n < e.length; n++)
    for (var r = 0; r < e[n].length; r++) {
      var i = e[n][r].cell;
      t.includes(i) || t.push(i);
    }
  return t;
}, If = function(e, t, n) {
  var r = e.aoColumns, i, a, o = Lf(e.aoHeader), u = function(b) {
    var m = rc(b);
    if (b === "")
      return Jt(r.length);
    if (m !== null)
      return [
        m >= 0 ? m : (
          // Count from left
          r.length + m
        )
        // Count from right (+ because its a negative value)
      ];
    if (typeof b == "function") {
      var x = Ki(e, n);
      return r.map(function(l, d) {
        return b(
          d,
          Aa(e, d, 0, 0, x),
          Nc(e, d)
        ) ? d : null;
      });
    }
    var _ = typeof b == "string" ? b.match(kf) : "";
    if (_)
      switch (_[2]) {
        case "visIdx":
        case "visible":
          if (_[1] && _[1].match(/^\d+$/)) {
            var T = parseInt(_[1], 10);
            if (T < 0) {
              var N = r.map(function(l, d) {
                return l.bVisible ? d : null;
              });
              return [N[N.length + T]];
            }
            return [fa(e, T)];
          }
          return r.map(function(l, d) {
            return !l.bVisible || l.responsiveVisible === !1 ? null : _[1] ? I(o[d]).filter(_[1]).length > 0 ? d : null : d;
          });
        case "name":
          return i || (i = Ke(r, "sName")), i.map(function(l, d) {
            return l === _[1] ? d : null;
          });
        case "title":
          return a || (a = Ke(r, "sTitle")), a.map(function(l, d) {
            return l === _[1] ? d : null;
          });
        default:
          return [];
      }
    if (b.nodeName && b._DT_CellIndex)
      return [b._DT_CellIndex.column];
    var D = I(o).filter(b).map(function() {
      return pa(this);
    }).toArray().sort(function(l, d) {
      return l - d;
    });
    if (D.length || !b.nodeName)
      return D;
    var p = I(b).closest("*[data-dt-column]");
    return p.length ? [p.data("dt-column")] : [];
  }, v = Ca("column", t, u, e, n);
  return n.columnOrder && n.columnOrder === "index" ? v.sort(function(b, m) {
    return b - m;
  }) : v;
}, Bf = function(e, t, n) {
  var r = e.aoColumns, i = r[t], a = e.aoData, o, u, v, b;
  if (n === void 0)
    return i.bVisible;
  if (i.bVisible === n)
    return !1;
  if (n) {
    var m = Ke(r, "bVisible").indexOf(!0, t + 1);
    for (u = 0, v = a.length; u < v; u++)
      a[u] && (b = a[u].nTr, o = a[u].anCells, b && b.insertBefore(o[t], o[m] || null));
  } else
    I(Ke(e.aoData, "anCells", t)).detach();
  return i.bVisible = n, yc(e), !0;
};
ue("columns()", function(e, t) {
  e === void 0 ? e = "" : I.isPlainObject(e) && (t = e, e = ""), t = xa(t);
  var n = this.iterator("table", function(r) {
    return If(r, e, t);
  }, 1);
  return n.selector.cols = e, n.selector.opts = t, n;
});
De("columns().header()", "column().header()", function(e) {
  return this.iterator("column", function(t, n) {
    return Nc(t, n, e);
  }, 1);
});
De("columns().footer()", "column().footer()", function(e) {
  return this.iterator("column", function(t, n) {
    var r = t.aoFooter;
    return r.length ? t.aoFooter[e !== void 0 ? e : 0][n].cell : null;
  }, 1);
});
De("columns().data()", "column().data()", function() {
  return this.iterator("column-rows", Aa, 1);
});
De("columns().render()", "column().render()", function(e) {
  return this.iterator("column-rows", function(t, n, r, i, a) {
    return Aa(t, n, r, i, a, e);
  }, 1);
});
De("columns().dataSrc()", "column().dataSrc()", function() {
  return this.iterator("column", function(e, t) {
    return e.aoColumns[t].mData;
  }, 1);
});
De("columns().cache()", "column().cache()", function(e) {
  return this.iterator("column-rows", function(t, n, r, i, a) {
    return Hr(
      t.aoData,
      a,
      e === "search" ? "_aFilterData" : "_aSortData",
      n
    );
  }, 1);
});
De("columns().init()", "column().init()", function() {
  return this.iterator("column", function(e, t) {
    return e.aoColumns[t];
  }, 1);
});
De("columns().names()", "column().name()", function() {
  return this.iterator("column", function(e, t) {
    return e.aoColumns[t].sName;
  }, 1);
});
De("columns().nodes()", "column().nodes()", function() {
  return this.iterator("column-rows", function(e, t, n, r, i) {
    return Hr(e.aoData, i, "anCells", t);
  }, 1);
});
De("columns().titles()", "column().title()", function(e, t) {
  return this.iterator("column", function(n, r) {
    typeof e == "number" && (t = e, e = void 0);
    var i = I(".dt-column-title", this.column(r).header(t));
    return e !== void 0 ? (i.html(e), this) : i.html();
  }, 1);
});
De("columns().types()", "column().type()", function() {
  return this.iterator("column", function(e, t) {
    var n = e.aoColumns[t], r = n.sType;
    return r || ($i(e), r = n.sType), r;
  }, 1);
});
De("columns().visible()", "column().visible()", function(e, t) {
  var n = this, r = [], i = this.iterator("column", function(a, o) {
    if (e === void 0)
      return a.aoColumns[o].bVisible;
    Bf(a, o, e) && r.push(o);
  });
  return e !== void 0 && this.iterator("table", function(a) {
    Ni(a, a.aoHeader), Ni(a, a.aoFooter), a.aiDisplay.length || I(a.nTBody).find("td[colspan]").attr("colspan", Hi(a)), qi(a), n.iterator("column", function(o, u) {
      r.includes(u) && xe(o, null, "column-visibility", [o, u, e, t]);
    }), r.length && (t === void 0 || t) && n.columns.adjust();
  }), i;
});
De("columns().widths()", "column().width()", function() {
  var e = this.columns(":visible").count(), t = I("<tr>").html("<td>" + Array(e).join("</td><td>") + "</td>");
  I(this.table().body()).append(t);
  var n = t.children().map(function() {
    return I(this).outerWidth();
  });
  return t.remove(), this.iterator("column", function(r, i) {
    var a = $r(r, i);
    return a !== null ? n[a] : 0;
  }, 1);
});
De("columns().indexes()", "column().index()", function(e) {
  return this.iterator("column", function(t, n) {
    return e === "visible" ? $r(t, n) : n;
  }, 1);
});
ue("columns.adjust()", function() {
  return this.iterator("table", function(e) {
    e.containerWidth = -1, Vi(e);
  }, 1);
});
ue("column.index()", function(e, t) {
  if (this.context.length !== 0) {
    var n = this.context[0];
    if (e === "fromVisible" || e === "toData")
      return fa(n, t);
    if (e === "fromData" || e === "toVisible")
      return $r(n, t);
  }
});
ue("column()", function(e, t) {
  return Sa(this.columns(e, t));
});
var Ff = function(e, t, n) {
  var r = e.aoData, i = Ki(e, n), a = sc(Hr(r, i, "anCells")), o = I(ac([], a)), u, v = e.aoColumns.length, b, m, x, _, T, N, D = function(p) {
    var l = typeof p == "function";
    if (p == null || l) {
      for (b = [], m = 0, x = i.length; m < x; m++)
        for (u = i[m], _ = 0; _ < v; _++)
          T = {
            row: u,
            column: _
          }, l ? (N = r[u], p(T, Ct(e, u, _), N.anCells ? N.anCells[_] : null) && b.push(T)) : b.push(T);
      return b;
    }
    if (I.isPlainObject(p))
      return p.column !== void 0 && p.row !== void 0 && i.indexOf(p.row) !== -1 ? [p] : [];
    var d = o.filter(p).map(function(y, E) {
      return {
        // use a new object, in case someone changes the values
        row: E._DT_CellIndex.row,
        column: E._DT_CellIndex.column
      };
    }).toArray();
    return d.length || !p.nodeName ? d : (N = I(p).closest("*[data-dt-row]"), N.length ? [{
      row: N.data("dt-row"),
      column: N.data("dt-column")
    }] : []);
  };
  return Ca("cell", t, D, e, n);
};
ue("cells()", function(e, t, n) {
  if (I.isPlainObject(e) && (e.row === void 0 ? (n = e, e = null) : (n = t, t = null)), I.isPlainObject(t) && (n = t, t = null), t == null)
    return this.iterator("table", function(_) {
      return Ff(_, e, xa(n));
    });
  var r = n ? {
    page: n.page,
    order: n.order,
    search: n.search
  } : {}, i = this.columns(t, r), a = this.rows(e, r), o, u, v, b, m = this.iterator("table", function(_, T) {
    var N = [];
    for (o = 0, u = a[T].length; o < u; o++)
      for (v = 0, b = i[T].length; v < b; v++)
        N.push({
          row: a[T][o],
          column: i[T][v]
        });
    return N;
  }, 1), x = n && n.selected ? this.cells(m, n) : m;
  return I.extend(x.selector, {
    cols: t,
    rows: e,
    opts: n
  }), x;
});
De("cells().nodes()", "cell().node()", function() {
  return this.iterator("cell", function(e, t, n) {
    var r = e.aoData[t];
    return r && r.anCells ? r.anCells[n] : void 0;
  }, 1);
});
ue("cells().data()", function() {
  return this.iterator("cell", function(e, t, n) {
    return Ct(e, t, n);
  }, 1);
});
De("cells().cache()", "cell().cache()", function(e) {
  return e = e === "search" ? "_aFilterData" : "_aSortData", this.iterator("cell", function(t, n, r) {
    return t.aoData[n][e][r];
  }, 1);
});
De("cells().render()", "cell().render()", function(e) {
  return this.iterator("cell", function(t, n, r) {
    return Ct(t, n, r, e);
  }, 1);
});
De("cells().indexes()", "cell().index()", function() {
  return this.iterator("cell", function(e, t, n) {
    return {
      row: t,
      column: n,
      columnVisible: $r(e, n)
    };
  }, 1);
});
De("cells().invalidate()", "cell().invalidate()", function(e) {
  return this.iterator("cell", function(t, n, r) {
    ji(t, n, e, r);
  });
});
ue("cell()", function(e, t, n) {
  return Sa(this.cells(e, t, n));
});
ue("cell().data()", function(e) {
  var t = this.context, n = this[0];
  return e === void 0 ? t.length && n.length ? Ct(t[0], n[0].row, n[0].column) : void 0 : (af(t[0], n[0].row, n[0].column, e), ji(t[0], n[0].row, "data", n[0].column), this);
});
ue("order()", function(e, t) {
  var n = this.context, r = Array.prototype.slice.call(arguments);
  return e === void 0 ? n.length !== 0 ? n[0].aaSorting : void 0 : (typeof e == "number" ? e = [[e, t]] : r.length > 1 && (e = r), this.iterator("table", function(i) {
    var a = [];
    bn(i, a, e), i.aaSorting = a;
  }));
});
ue("order.listener()", function(e, t, n) {
  return this.iterator("table", function(r) {
    _c(r, e, {}, t, n);
  });
});
ue("order.fixed()", function(e) {
  if (!e) {
    var t = this.context, n = t.length ? t[0].aaSortingFixed : void 0;
    return Array.isArray(n) ? { pre: n } : n;
  }
  return this.iterator("table", function(r) {
    r.aaSortingFixed = I.extend(!0, {}, e);
  });
});
ue([
  "columns().order()",
  "column().order()"
], function(e) {
  var t = this;
  return e ? this.iterator("table", function(n, r) {
    n.aaSorting = t[r].map(function(i) {
      return [i, e];
    });
  }) : this.iterator("column", function(n, r) {
    for (var i = Wi(n), a = 0, o = i.length; a < o; a++)
      if (i[a].col === r)
        return i[a].dir;
    return null;
  }, 1);
});
De("columns().orderable()", "column().orderable()", function(e) {
  return this.iterator("column", function(t, n) {
    var r = t.aoColumns[n];
    return e ? r.asSorting : r.bSortable;
  }, 1);
});
ue("processing()", function(e) {
  return this.iterator("table", function(t) {
    ut(t, e);
  });
});
ue("search()", function(e, t, n, r) {
  var i = this.context;
  return e === void 0 ? i.length !== 0 ? i[0].oPreviousSearch.search : void 0 : this.iterator("table", function(a) {
    a.oFeatures.bFilter && (typeof t == "object" ? Fr(a, I.extend(a.oPreviousSearch, t, {
      search: e
    })) : Fr(a, I.extend(a.oPreviousSearch, {
      search: e,
      regex: t === null ? !1 : t,
      smart: n === null ? !0 : n,
      caseInsensitive: r === null ? !0 : r
    })));
  });
});
ue("search.fixed()", function(e, t) {
  var n = this.iterator(!0, "table", function(r) {
    var i = r.searchFixed;
    if (e) {
      if (t === void 0)
        return i[e];
      t === null ? delete i[e] : i[e] = t;
    } else
      return Object.keys(i);
    return this;
  });
  return e !== void 0 && t === void 0 ? n[0] : n;
});
De(
  "columns().search()",
  "column().search()",
  function(e, t, n, r) {
    return this.iterator("column", function(i, a) {
      var o = i.aoPreSearchCols;
      if (e === void 0)
        return o[a].search;
      i.oFeatures.bFilter && (typeof t == "object" ? I.extend(o[a], t, {
        search: e
      }) : I.extend(o[a], {
        search: e,
        regex: t === null ? !1 : t,
        smart: n === null ? !0 : n,
        caseInsensitive: r === null ? !0 : r
      }), Fr(i, i.oPreviousSearch));
    });
  }
);
ue(
  [
    "columns().search.fixed()",
    "column().search.fixed()"
  ],
  function(e, t) {
    var n = this.iterator(!0, "column", function(r, i) {
      var a = r.aoColumns[i].searchFixed;
      if (e) {
        if (t === void 0)
          return a[e] || null;
        t === null ? delete a[e] : a[e] = t;
      } else
        return Object.keys(a);
      return this;
    });
    return e !== void 0 && t === void 0 ? n[0] : n;
  }
);
ue("state()", function(e, t) {
  if (!e)
    return this.context.length ? this.context[0].oSavedState : null;
  var n = I.extend(!0, {}, e);
  return this.iterator("table", function(r) {
    t !== !1 && (n.time = +/* @__PURE__ */ new Date() + 100), ea(r, n, function() {
    });
  });
});
ue("state.clear()", function() {
  return this.iterator("table", function(e) {
    e.fnStateSaveCallback.call(e.oInstance, e, {});
  });
});
ue("state.loaded()", function() {
  return this.context.length ? this.context[0].oLoadedState : null;
});
ue("state.save()", function() {
  return this.iterator("table", function(e) {
    qi(e);
  });
});
var il, sl;
k.use = function(e, t) {
  var n = typeof e == "string" ? t : e, r = typeof t == "string" ? t : e;
  if (n === void 0 && typeof r == "string")
    switch (r) {
      case "lib":
      case "jq":
        return I;
      case "win":
        return window;
      case "datetime":
        return k.DateTime;
      case "luxon":
        return nn;
      case "moment":
        return Sn;
      case "bootstrap":
        return il || window.bootstrap;
      case "foundation":
        return sl || window.Foundation;
      default:
        return null;
    }
  r === "lib" || r === "jq" || n && n.fn && n.fn.jquery ? I = n : r === "win" || n && n.document ? (window = n, document = n.document) : r === "datetime" || n && n.type === "DateTime" ? k.DateTime = n : r === "luxon" || n && n.FixedOffsetZone ? nn = n : r === "moment" || n && n.isMoment ? Sn = n : r === "bootstrap" || n && n.Modal && n.Modal.NAME === "modal" ? il = n : (r === "foundation" || n && n.Reveal) && (sl = n);
};
k.factory = function(e, t) {
  var n = !1;
  return e && e.document && (window = e, document = e.document), t && t.fn && t.fn.jquery && (I = t, n = !0), n;
};
k.versionCheck = function(e, t) {
  for (var n = t ? t.split(".") : k.version.split("."), r = e.split("."), i, a, o = 0, u = r.length; o < u; o++)
    if (i = parseInt(n[o], 10) || 0, a = parseInt(r[o], 10) || 0, i !== a)
      return i > a;
  return !0;
};
k.isDataTable = function(e) {
  var t = I(e).get(0), n = !1;
  return e instanceof k.Api ? !0 : (I.each(k.settings, function(r, i) {
    var a = i.nScrollHead ? I("table", i.nScrollHead)[0] : null, o = i.nScrollFoot ? I("table", i.nScrollFoot)[0] : null;
    (i.nTable === t || a === t || o === t) && (n = !0);
  }), n);
};
k.tables = function(e) {
  var t = !1;
  I.isPlainObject(e) && (t = e.api, e = e.visible);
  var n = k.settings.filter(function(r) {
    return !!(!e || e && I(r.nTable).is(":visible"));
  }).map(function(r) {
    return r.nTable;
  });
  return t ? new Te(n) : n;
};
k.camelToHungarian = Zt;
ue("$()", function(e, t) {
  var n = this.rows(t).nodes(), r = I(n);
  return I([].concat(
    r.filter(e).toArray(),
    r.find(e).toArray()
  ));
});
I.each(["on", "one", "off"], function(e, t) {
  ue(t + "()", function() {
    var n = Array.prototype.slice.call(arguments);
    n[0] = n[0].split(/\s/).map(function(i) {
      return i.match(/\.dt\b/) ? i : i + ".dt";
    }).join(" ");
    var r = I(this.tables().nodes());
    return r[t].apply(r, n), this;
  });
});
ue("clear()", function() {
  return this.iterator("table", function(e) {
    ma(e);
  });
});
ue("error()", function(e) {
  return this.iterator("table", function(t) {
    yt(t, 0, e);
  });
});
ue("settings()", function() {
  return new Te(this.context, this.context);
});
ue("init()", function() {
  var e = this.context;
  return e.length ? e[0].oInit : null;
});
ue("data()", function() {
  return this.iterator("table", function(e) {
    return Ke(e.aoData, "_aData");
  }).flatten();
});
ue("trigger()", function(e, t, n) {
  return this.iterator("table", function(r) {
    return xe(r, null, e, t, n);
  }).flatten();
});
ue("ready()", function(e) {
  var t = this.context;
  return e ? this.tables().every(function() {
    var n = this;
    this.context[0]._bInitComplete ? e.call(n) : this.on("init.dt.DT", function() {
      e.call(n);
    });
  }) : t.length ? t[0]._bInitComplete || !1 : null;
});
ue("destroy()", function(e) {
  return e = e || !1, this.iterator("table", function(t) {
    var n = t.oClasses, r = t.nTable, i = t.nTBody, a = t.nTHead, o = t.nTFoot, u = I(r), v = I(i), b = I(t.nTableWrapper), m = t.aoData.map(function(p) {
      return p ? p.nTr : null;
    }), x = n.order;
    t.bDestroying = !0, xe(t, "aoDestroyCallback", "destroy", [t], !0), e || new Te(t).columns().visible(!0), t.resizeObserver && t.resizeObserver.disconnect(), b.off(".DT").find(":not(tbody *)").off(".DT"), I(window).off(".DT-" + t.sInstance), r != a.parentNode && (u.children("thead").detach(), u.append(a)), o && r != o.parentNode && (u.children("tfoot").detach(), u.append(o)), al(a, "header"), al(o, "footer"), t.colgroup.remove(), t.aaSorting = [], t.aaSortingFixed = [], Zs(t), I(u).find("th, td").removeClass(
      I.map(k.ext.type.className, function(p) {
        return p;
      }).join(" ")
    ), I("th, td", a).removeClass(
      x.none + " " + x.canAsc + " " + x.canDesc + " " + x.isAsc + " " + x.isDesc
    ).css("width", "").removeAttr("aria-sort"), v.children().detach(), v.append(m);
    var _ = t.nTableWrapper.parentNode, T = t.nTableWrapper.nextSibling, N = e ? "remove" : "detach";
    u[N](), b[N](), !e && _ && (_.insertBefore(r, T), u.css("width", t.sDestroyWidth).removeClass(n.table));
    var D = k.settings.indexOf(t);
    D !== -1 && k.settings.splice(D, 1);
  });
});
I.each(["column", "row", "cell"], function(e, t) {
  ue(t + "s().every()", function(n) {
    var r = this.selector.opts, i = this, a, o = 0;
    return this.iterator("every", function(u, v, b) {
      a = i[t](v, r), t === "cell" ? n.call(a, a[0][0].row, a[0][0].column, b, o) : n.call(a, v, b, o), o++;
    });
  });
});
ue("i18n()", function(e, t, n) {
  var r = this.context[0], i = tr(e)(r.oLanguage);
  return i === void 0 && (i = t), I.isPlainObject(i) && (i = n !== void 0 && i[n] !== void 0 ? i[n] : n === !1 ? i : i._), typeof i == "string" ? i.replace("%d", n) : i;
});
function al(e, t) {
  I(e).find(".dt-column-order").remove(), I(e).find(".dt-column-title").each(function() {
    var n = I(this).html();
    I(this).parent().parent().append(n), I(this).remove();
  }), I(e).find("div.dt-column-" + t).remove(), I("th, td", e).removeAttr("data-dt-column");
}
k.version = "2.3.7";
k.settings = [];
k.models = {};
k.models.oSearch = {
  /**
   * Flag to whether or not the filtering should be case-insensitive
   */
  caseInsensitive: !0,
  /**
   * Applied search term
   */
  search: "",
  /**
   * Flag to indicate if the search term should be interpreted as a
   * regular expression (true) or not (false) and therefore and special
   * regex characters escaped.
   */
  regex: !1,
  /**
   * Flag to indicate if DataTables is to use its smart filtering or not.
   */
  smart: !0,
  /**
   * Flag to indicate if DataTables should only trigger a search when
   * the return key is pressed.
   */
  return: !1
};
k.models.oRow = {
  /**
   * TR element for the row
   */
  nTr: null,
  /**
   * Array of TD elements for each row. This is null until the row has been
   * created.
   */
  anCells: null,
  /**
   * Data object from the original data source for the row. This is either
   * an array if using the traditional form of DataTables, or an object if
   * using mData options. The exact type will depend on the passed in
   * data from the data source, or will be an array if using DOM a data
   * source.
   */
  _aData: [],
  /**
   * Sorting data cache - this array is ostensibly the same length as the
   * number of columns (although each index is generated only as it is
   * needed), and holds the data that is used for sorting each column in the
   * row. We do this cache generation at the start of the sort in order that
   * the formatting of the sort data need be done only once for each cell
   * per sort. This array should not be read from or written to by anything
   * other than the master sorting methods.
   */
  _aSortData: null,
  /**
   * Per cell filtering data cache. As per the sort data cache, used to
   * increase the performance of the filtering in DataTables
   */
  _aFilterData: null,
  /**
   * Filtering data cache. This is the same as the cell filtering cache, but
   * in this case a string rather than an array. This is easily computed with
   * a join on `_aFilterData`, but is provided as a cache so the join isn't
   * needed on every search (memory traded for performance)
   */
  _sFilterRow: null,
  /**
   * Denote if the original data source was from the DOM, or the data source
   * object. This is used for invalidating data, so DataTables can
   * automatically read data from the original source, unless uninstructed
   * otherwise.
   */
  src: null,
  /**
   * Index in the aoData array. This saves an indexOf lookup when we have the
   * object, but want to know the index
   */
  idx: -1,
  /**
   * Cached display value
   */
  displayData: null
};
k.models.oColumn = {
  /**
   * Column index.
   */
  idx: null,
  /**
   * A list of the columns that sorting should occur on when this column
   * is sorted. That this property is an array allows multi-column sorting
   * to be defined for a column (for example first name / last name columns
   * would benefit from this). The values are integers pointing to the
   * columns to be sorted on (typically it will be a single integer pointing
   * at itself, but that doesn't need to be the case).
   */
  aDataSort: null,
  /**
   * Define the sorting directions that are applied to the column, in sequence
   * as the column is repeatedly sorted upon - i.e. the first value is used
   * as the sorting direction when the column if first sorted (clicked on).
   * Sort it again (click again) and it will move on to the next index.
   * Repeat until loop.
   */
  asSorting: null,
  /**
   * Flag to indicate if the column is searchable, and thus should be included
   * in the filtering or not.
   */
  bSearchable: null,
  /**
   * Flag to indicate if the column is sortable or not.
   */
  bSortable: null,
  /**
   * Flag to indicate if the column is currently visible in the table or not
   */
  bVisible: null,
  /**
   * Store for manual type assignment using the `column.type` option. This
   * is held in store so we can manipulate the column's `sType` property.
   */
  _sManualType: null,
  /**
   * Flag to indicate if HTML5 data attributes should be used as the data
   * source for filtering or sorting. True is either are.
   */
  _bAttrSrc: !1,
  /**
   * Developer definable function that is called whenever a cell is created (Ajax source,
   * etc) or processed for input (DOM source). This can be used as a compliment to mRender
   * allowing you to modify the DOM element (add background colour for example) when the
   * element is available.
   */
  fnCreatedCell: null,
  /**
   * Function to get data from a cell in a column. You should <b>never</b>
   * access data directly through _aData internally in DataTables - always use
   * the method attached to this property. It allows mData to function as
   * required. This function is automatically assigned by the column
   * initialisation method
   */
  fnGetData: null,
  /**
   * Function to set data for a cell in the column. You should <b>never</b>
   * set the data directly to _aData internally in DataTables - always use
   * this method. It allows mData to function as required. This function
   * is automatically assigned by the column initialisation method
   */
  fnSetData: null,
  /**
   * Property to read the value for the cells in the column from the data
   * source array / object. If null, then the default content is used, if a
   * function is given then the return from the function is used.
   */
  mData: null,
  /**
   * Partner property to mData which is used (only when defined) to get
   * the data - i.e. it is basically the same as mData, but without the
   * 'set' option, and also the data fed to it is the result from mData.
   * This is the rendering method to match the data method of mData.
   */
  mRender: null,
  /**
   * The class to apply to all TD elements in the table's TBODY for the column
   */
  sClass: null,
  /**
   * When DataTables calculates the column widths to assign to each column,
   * it finds the longest string in each column and then constructs a
   * temporary table and reads the widths from that. The problem with this
   * is that "mmm" is much wider then "iiii", but the latter is a longer
   * string - thus the calculation can go wrong (doing it properly and putting
   * it into an DOM object and measuring that is horribly(!) slow). Thus as
   * a "work around" we provide this option. It will append its value to the
   * text that is found to be the longest string for the column - i.e. padding.
   */
  sContentPadding: null,
  /**
   * Allows a default value to be given for a column's data, and will be used
   * whenever a null data source is encountered (this can be because mData
   * is set to null, or because the data source itself is null).
   */
  sDefaultContent: null,
  /**
   * Name for the column, allowing reference to the column by name as well as
   * by index (needs a lookup to work by name).
   */
  sName: null,
  /**
   * Custom sorting data type - defines which of the available plug-ins in
   * afnSortData the custom sorting will use - if any is defined.
   */
  sSortDataType: "std",
  /**
   * Class to be applied to the header element when sorting on this column
   */
  sSortingClass: null,
  /**
   * Title of the column - what is seen in the TH element (nTh).
   */
  sTitle: null,
  /**
   * Column sorting and filtering type
   */
  sType: null,
  /**
   * Width of the column
   */
  sWidth: null,
  /**
   * Width of the column when it was first "encountered"
   */
  sWidthOrig: null,
  /** Cached longest strings from a column */
  wideStrings: null,
  /**
   * Store for named searches
   */
  searchFixed: null
};
k.defaults = {
  /**
   * An array of data to use for the table, passed in at initialisation which
   * will be used in preference to any data which is already in the DOM. This is
   * particularly useful for constructing tables purely in JavaScript, for
   * example with a custom Ajax call.
   */
  aaData: null,
  /**
   * If ordering is enabled, then DataTables will perform a first pass sort on
   * initialisation. You can define which column(s) the sort is performed
   * upon, and the sorting direction, with this variable. The `sorting` array
   * should contain an array for each column to be sorted initially containing
   * the column's index and a direction string ('asc' or 'desc').
   */
  aaSorting: [[0, "asc"]],
  /**
   * This parameter is basically identical to the `sorting` parameter, but
   * cannot be overridden by user interaction with the table. What this means
   * is that you could have a column (visible or hidden) which the sorting
   * will always be forced on first - any sorting after that (from the user)
   * will then be performed as required. This can be useful for grouping rows
   * together.
   */
  aaSortingFixed: [],
  /**
   * DataTables can be instructed to load data to display in the table from a
   * Ajax source. This option defines how that Ajax call is made and where to.
   *
   * The `ajax` property has three different modes of operation, depending on
   * how it is defined. These are:
   *
   * * `string` - Set the URL from where the data should be loaded from.
   * * `object` - Define properties for `jQuery.ajax`.
   * * `function` - Custom data get function
   *
   * `string`
   * --------
   *
   * As a string, the `ajax` property simply defines the URL from which
   * DataTables will load data.
   *
   * `object`
   * --------
   *
   * As an object, the parameters in the object are passed to
   * [jQuery.ajax](https://api.jquery.com/jQuery.ajax/) allowing fine control
   * of the Ajax request. DataTables has a number of default parameters which
   * you can override using this option. Please refer to the jQuery
   * documentation for a full description of the options available, although
   * the following parameters provide additional options in DataTables or
   * require special consideration:
   *
   * * `data` - As with jQuery, `data` can be provided as an object, but it
   *   can also be used as a function to manipulate the data DataTables sends
   *   to the server. The function takes a single parameter, an object of
   *   parameters with the values that DataTables has readied for sending. An
   *   object may be returned which will be merged into the DataTables
   *   defaults, or you can add the items to the object that was passed in and
   *   not return anything from the function. This supersedes `fnServerParams`
   *   from DataTables 1.9-.
   *
   * * `dataSrc` - By default DataTables will look for the property `data` (or
   *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
   *   from an Ajax source or for server-side processing - this parameter
   *   allows that property to be changed. You can use JavaScript dotted
   *   object notation to get a data source for multiple levels of nesting, or
   *   it my be used as a function. As a function it takes a single parameter,
   *   the JSON returned from the server, which can be manipulated as
   *   required, with the returned value being that used by DataTables as the
   *   data source for the table.
   *
   * * `success` - Should not be overridden it is used internally in
   *   DataTables. To manipulate / transform the data returned by the server
   *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
   *
   * `function`
   * ----------
   *
   * As a function, making the Ajax call is left up to yourself allowing
   * complete control of the Ajax request. Indeed, if desired, a method other
   * than Ajax could be used to obtain the required data, such as Web storage
   * or an AIR database.
   *
   * The function is given four parameters and no return is required. The
   * parameters are:
   *
   * 1. _object_ - Data to send to the server
   * 2. _function_ - Callback function that must be executed when the required
   *    data has been obtained. That data should be passed into the callback
   *    as the only parameter
   * 3. _object_ - DataTables settings object for the table
   */
  ajax: null,
  /**
   * This parameter allows you to readily specify the entries in the length drop
   * down menu that DataTables shows when pagination is enabled. It can be
   * either a 1D array of options which will be used for both the displayed
   * option and the value, or a 2D array which will use the array in the first
   * position as the value, and the array in the second position as the
   * displayed options (useful for language strings such as 'All').
   *
   * Note that the `pageLength` property will be automatically set to the
   * first value given in this array, unless `pageLength` is also provided.
   */
  aLengthMenu: [10, 25, 50, 100],
  /**
   * The `columns` option in the initialisation parameter allows you to define
   * details about the way individual columns behave. For a full list of
   * column options that can be set, please see
   * {@link DataTable.defaults.column}. Note that if you use `columns` to
   * define your columns, you must have an entry in the array for every single
   * column that you have in your table (these can be null if you don't which
   * to specify any options).
   */
  aoColumns: null,
  /**
   * Very similar to `columns`, `columnDefs` allows you to target a specific
   * column, multiple columns, or all columns, using the `targets` property of
   * each object in the array. This allows great flexibility when creating
   * tables, as the `columnDefs` arrays can be of any length, targeting the
   * columns you specifically want. `columnDefs` may use any of the column
   * options available: {@link DataTable.defaults.column}, but it _must_
   * have `targets` defined in each object in the array. Values in the `targets`
   * array may be:
   *   <ul>
   *     <li>a string - class name will be matched on the TH for the column</li>
   *     <li>0 or a positive integer - column index counting from the left</li>
   *     <li>a negative integer - column index counting from the right</li>
   *     <li>the string "_all" - all columns (i.e. assign a default)</li>
   *   </ul>
   */
  aoColumnDefs: null,
  /**
   * Basically the same as `search`, this parameter defines the individual column
   * filtering state at initialisation time. The array must be of the same size
   * as the number of columns, and each element be an object with the parameters
   * `search` and `escapeRegex` (the latter is optional). 'null' is also
   * accepted and the default will be used.
   */
  aoSearchCols: [],
  /**
   * Enable or disable automatic column width calculation. This can be disabled
   * as an optimisation (it takes some time to calculate the widths) if the
   * tables widths are passed in using `columns`.
   */
  bAutoWidth: !0,
  /**
   * Deferred rendering can provide DataTables with a huge speed boost when you
   * are using an Ajax or JS data source for the table. This option, when set to
   * true, will cause DataTables to defer the creation of the table elements for
   * each row until they are needed for a draw - saving a significant amount of
   * time.
   */
  bDeferRender: !0,
  /**
   * Replace a DataTable which matches the given selector and replace it with
   * one which has the properties of the new initialisation object passed. If no
   * table matches the selector, then the new DataTable will be constructed as
   * per normal.
   */
  bDestroy: !1,
  /**
   * Enable or disable filtering of data. Filtering in DataTables is "smart" in
   * that it allows the end user to input multiple words (space separated) and
   * will match a row containing those words, even if not in the order that was
   * specified (this allow matching across multiple columns). Note that if you
   * wish to use filtering in DataTables this must remain 'true' - to remove the
   * default filtering input box and retain filtering abilities, please use
   * {@link DataTable.defaults.dom}.
   */
  bFilter: !0,
  /**
   * Used only for compatibility with DT1
   * @deprecated
   */
  bInfo: !0,
  /**
   * Used only for compatibility with DT1
   * @deprecated
   */
  bLengthChange: !0,
  /**
   * Enable or disable pagination.
   */
  bPaginate: !0,
  /**
   * Enable or disable the display of a 'processing' indicator when the table is
   * being processed (e.g. a sort). This is particularly useful for tables with
   * large amounts of data where it can take a noticeable amount of time to sort
   * the entries.
   */
  bProcessing: !1,
  /**
   * Retrieve the DataTables object for the given selector. Note that if the
   * table has already been initialised, this parameter will cause DataTables
   * to simply return the object that has already been set up - it will not take
   * account of any changes you might have made to the initialisation object
   * passed to DataTables (setting this parameter to true is an acknowledgement
   * that you understand this). `destroy` can be used to reinitialise a table if
   * you need.
   */
  bRetrieve: !1,
  /**
   * When vertical (y) scrolling is enabled, DataTables will force the height of
   * the table's viewport to the given height at all times (useful for layout).
   * However, this can look odd when filtering data down to a small data set,
   * and the footer is left "floating" further down. This parameter (when
   * enabled) will cause DataTables to collapse the table's viewport down when
   * the result set will fit within the given Y height.
   */
  bScrollCollapse: !1,
  /**
   * Configure DataTables to use server-side processing. Note that the
   * `ajax` parameter must also be given in order to give DataTables a
   * source to obtain the required data for each draw.
   */
  bServerSide: !1,
  /**
   * Enable or disable sorting of columns. Sorting of individual columns can be
   * disabled by the `sortable` option for each column.
   */
  bSort: !0,
  /**
   * Enable or display DataTables' ability to sort multiple columns at the
   * same time (activated by shift-click by the user).
   */
  bSortMulti: !0,
  /**
   * Allows control over whether DataTables should use the top (true) unique
   * cell that is found for a single column, or the bottom (false - default).
   * This is useful when using complex headers.
   */
  bSortCellsTop: null,
  /** Specify which row is the title row in the header. Replacement for bSortCellsTop */
  titleRow: null,
  /**
   * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
   * `sorting\_3` to the columns which are currently being sorted on. This is
   * presented as a feature switch as it can increase processing time (while
   * classes are removed and added) so for large data sets you might want to
   * turn this off.
   */
  bSortClasses: !0,
  /**
   * Enable or disable state saving. When enabled HTML5 `localStorage` will be
   * used to save table display information such as pagination information,
   * display length, filtering and sorting. As such when the end user reloads
   * the page the display will match what thy had previously set up.
   */
  bStateSave: !1,
  /**
   * This function is called when a TR element is created (and all TD child
   * elements have been inserted), or registered if using a DOM source, allowing
   * manipulation of the TR element (adding classes etc).
   */
  fnCreatedRow: null,
  /**
   * This function is called on every 'draw' event, and allows you to
   * dynamically modify any aspect you want about the created DOM.
   */
  fnDrawCallback: null,
  /**
   * Identical to fnHeaderCallback() but for the table footer this function
   * allows you to modify the table footer on every 'draw' event.
   */
  fnFooterCallback: null,
  /**
   * When rendering large numbers in the information element for the table
   * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
   * to have a comma separator for the 'thousands' units (e.g. 1 million is
   * rendered as "1,000,000") to help readability for the end user. This
   * function will override the default method DataTables uses.
   */
  fnFormatNumber: function(e) {
    return e.toString().replace(
      /\B(?=(\d{3})+(?!\d))/g,
      this.oLanguage.sThousands
    );
  },
  /**
   * This function is called on every 'draw' event, and allows you to
   * dynamically modify the header row. This can be used to calculate and
   * display useful information about the table.
   */
  fnHeaderCallback: null,
  /**
   * The information element can be used to convey information about the current
   * state of the table. Although the internationalisation options presented by
   * DataTables are quite capable of dealing with most customisations, there may
   * be times where you wish to customise the string further. This callback
   * allows you to do exactly that.
   */
  fnInfoCallback: null,
  /**
   * Called when the table has been initialised. Normally DataTables will
   * initialise sequentially and there will be no need for this function,
   * however, this does not hold true when using external language information
   * since that is obtained using an async XHR call.
   */
  fnInitComplete: null,
  /**
   * Called at the very start of each table draw and can be used to cancel the
   * draw by returning false, any other return (including undefined) results in
   * the full draw occurring).
   */
  fnPreDrawCallback: null,
  /**
   * This function allows you to 'post process' each row after it have been
   * generated for each table draw, but before it is rendered on screen. This
   * function might be used for setting the row class name etc.
   */
  fnRowCallback: null,
  /**
   * Load the table state. With this function you can define from where, and how, the
   * state of a table is loaded. By default DataTables will load from `localStorage`
   * but you might wish to use a server-side database or cookies.
   */
  fnStateLoadCallback: function(e) {
    try {
      return JSON.parse(
        (e.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
          "DataTables_" + e.sInstance + "_" + location.pathname
        )
      );
    } catch {
      return {};
    }
  },
  /**
   * Callback which allows modification of the saved state prior to loading that state.
   * This callback is called when the table is loading state from the stored data, but
   * prior to the settings object being modified by the saved state. Note that for
   * plug-in authors, you should use the `stateLoadParams` event to load parameters for
   * a plug-in.
   */
  fnStateLoadParams: null,
  /**
   * Callback that is called when the state has been loaded from the state saving method
   * and the DataTables settings object has been modified as a result of the loaded state.
   */
  fnStateLoaded: null,
  /**
   * Save the table state. This function allows you to define where and how the state
   * information for the table is stored By default DataTables will use `localStorage`
   * but you might wish to use a server-side database or cookies.
   */
  fnStateSaveCallback: function(e, t) {
    try {
      (e.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
        "DataTables_" + e.sInstance + "_" + location.pathname,
        JSON.stringify(t)
      );
    } catch {
    }
  },
  /**
   * Callback which allows modification of the state to be saved. Called when the table
   * has changed state a new state save is required. This method allows modification of
   * the state saving object prior to actually doing the save, including addition or
   * other state properties or modification. Note that for plug-in authors, you should
   * use the `stateSaveParams` event to save parameters for a plug-in.
   */
  fnStateSaveParams: null,
  /**
   * Duration for which the saved state information is considered valid. After this period
   * has elapsed the state will be returned to the default.
   * Value is given in seconds.
   */
  iStateDuration: 7200,
  /**
   * Number of rows to display on a single page when using pagination. If
   * feature enabled (`lengthChange`) then the end user will be able to override
   * this to a custom setting using a pop-up menu.
   */
  iDisplayLength: 10,
  /**
   * Define the starting point for data display when using DataTables with
   * pagination. Note that this parameter is the number of records, rather than
   * the page number, so if you have 10 records per page and want to start on
   * the third page, it should be "20".
   */
  iDisplayStart: 0,
  /**
   * By default DataTables allows keyboard navigation of the table (sorting, paging,
   * and filtering) by adding a `tabindex` attribute to the required elements. This
   * allows you to tab through the controls and press the enter key to activate them.
   * The tabindex is default 0, meaning that the tab follows the flow of the document.
   * You can overrule this using this parameter if you wish. Use a value of -1 to
   * disable built-in keyboard navigation.
   */
  iTabIndex: 0,
  /**
   * Classes that DataTables assigns to the various components and features
   * that it adds to the HTML table. This allows classes to be configured
   * during initialisation in addition to through the static
   * {@link DataTable.ext.oStdClasses} object).
   */
  oClasses: {},
  /**
   * All strings that DataTables uses in the user interface that it creates
   * are defined in this object, allowing you to modified them individually or
   * completely replace them all as required.
   */
  oLanguage: {
    /**
     * Strings that are used for WAI-ARIA labels and controls only (these are not
     * actually visible on the page, but will be read by screenreaders, and thus
     * must be internationalised as well).
     */
    oAria: {
      /**
       * ARIA label that is added to the table headers when the column may be sorted
       */
      orderable: ": Activate to sort",
      /**
       * ARIA label that is added to the table headers when the column is currently being sorted
       */
      orderableReverse: ": Activate to invert sorting",
      /**
       * ARIA label that is added to the table headers when the column is currently being 
       * sorted and next step is to remove sorting
       */
      orderableRemove: ": Activate to remove sorting",
      paginate: {
        first: "First",
        last: "Last",
        next: "Next",
        previous: "Previous",
        number: ""
      }
    },
    /**
     * Pagination string used by DataTables for the built-in pagination
     * control types.
     */
    oPaginate: {
      /**
       * Label and character for first page button («)
       */
      sFirst: "«",
      /**
       * Last page button (»)
       */
      sLast: "»",
      /**
       * Next page button (›)
       */
      sNext: "›",
      /**
       * Previous page button (‹)
       */
      sPrevious: "‹"
    },
    /**
     * Plural object for the data type the table is showing
     */
    entries: {
      _: "entries",
      1: "entry"
    },
    /**
     * Page length options
     */
    lengthLabels: {
      "-1": "All"
    },
    /**
     * This string is shown in preference to `zeroRecords` when the table is
     * empty of data (regardless of filtering). Note that this is an optional
     * parameter - if it is not given, the value of `zeroRecords` will be used
     * instead (either the default or given value).
     */
    sEmptyTable: "No data available in table",
    /**
     * This string gives information to the end user about the information
     * that is current on display on the page. The following tokens can be
     * used in the string and will be dynamically replaced as the table
     * display updates. This tokens can be placed anywhere in the string, or
     * removed as needed by the language requires:
     *
     * * `\_START\_` - Display index of the first record on the current page
     * * `\_END\_` - Display index of the last record on the current page
     * * `\_TOTAL\_` - Number of records in the table after filtering
     * * `\_MAX\_` - Number of records in the table without filtering
     * * `\_PAGE\_` - Current page number
     * * `\_PAGES\_` - Total number of pages of data in the table
     */
    sInfo: "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
    /**
     * Display information string for when the table is empty. Typically the
     * format of this string should match `info`.
     */
    sInfoEmpty: "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
    /**
     * When a user filters the information in a table, this string is appended
     * to the information (`info`) to give an idea of how strong the filtering
     * is. The variable _MAX_ is dynamically updated.
     */
    sInfoFiltered: "(filtered from _MAX_ total _ENTRIES-MAX_)",
    /**
     * If can be useful to append extra information to the info string at times,
     * and this variable does exactly that. This information will be appended to
     * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
     * being used) at all times.
     */
    sInfoPostFix: "",
    /**
     * This decimal place operator is a little different from the other
     * language options since DataTables doesn't output floating point
     * numbers, so it won't ever use this for display of a number. Rather,
     * what this parameter does is modify the sort methods of the table so
     * that numbers which are in a format which has a character other than
     * a period (`.`) as a decimal place will be sorted numerically.
     *
     * Note that numbers with different decimal places cannot be shown in
     * the same table and still be sortable, the table must be consistent.
     * However, multiple different tables on the page can use different
     * decimal place characters.
     */
    sDecimal: "",
    /**
     * DataTables has a build in number formatter (`formatNumber`) which is
     * used to format large numbers that are used in the table information.
     * By default a comma is used, but this can be trivially changed to any
     * character you wish with this parameter.
     */
    sThousands: ",",
    /**
     * Detail the action that will be taken when the drop down menu for the
     * pagination length option is changed. The '_MENU_' variable is replaced
     * with a default select list of 10, 25, 50 and 100, and can be replaced
     * with a custom select box if required.
     */
    sLengthMenu: "_MENU_ _ENTRIES_ per page",
    /**
     * When using Ajax sourced data and during the first draw when DataTables is
     * gathering the data, this message is shown in an empty row in the table to
     * indicate to the end user the data is being loaded. Note that this
     * parameter is not used when loading data by server-side processing, just
     * Ajax sourced data with client-side processing.
     */
    sLoadingRecords: "Loading...",
    /**
     * Text which is displayed when the table is processing a user action
     * (usually a sort command or similar).
     */
    sProcessing: "",
    /**
     * Details the actions that will be taken when the user types into the
     * filtering input text box. The variable "_INPUT_", if used in the string,
     * is replaced with the HTML text box for the filtering input allowing
     * control over where it appears in the string. If "_INPUT_" is not given
     * then the input box is appended to the string automatically.
     */
    sSearch: "Search:",
    /**
     * Assign a `placeholder` attribute to the search `input` element
     *  @type string
     *  @default 
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.searchPlaceholder
     */
    sSearchPlaceholder: "",
    /**
     * All of the language information can be stored in a file on the
     * server-side, which DataTables will look up if this parameter is passed.
     * It must store the URL of the language file, which is in a JSON format,
     * and the object has the same properties as the oLanguage object in the
     * initialiser object (i.e. the above parameters). Please refer to one of
     * the example language files to see how this works in action.
     */
    sUrl: "",
    /**
     * Text shown inside the table records when the is no information to be
     * displayed after filtering. `emptyTable` is shown when there is simply no
     * information in the table at all (regardless of filtering).
     */
    sZeroRecords: "No matching records found"
  },
  /** The initial data order is reversed when `desc` ordering */
  orderDescReverse: !0,
  /**
   * This parameter allows you to have define the global filtering state at
   * initialisation time. As an object the `search` parameter must be
   * defined, but all other parameters are optional. When `regex` is true,
   * the search string will be treated as a regular expression, when false
   * (default) it will be treated as a straight string. When `smart`
   * DataTables will use it's smart filtering methods (to word match at
   * any point in the data), when false this will not be done.
   */
  oSearch: I.extend({}, k.models.oSearch),
  /**
   * Table and control layout. This replaces the legacy `dom` option.
   */
  layout: {
    topStart: "pageLength",
    topEnd: "search",
    bottomStart: "info",
    bottomEnd: "paging"
  },
  /**
   * Legacy DOM layout option
   */
  sDom: null,
  /**
   * Search delay option. This will throttle full table searches that use the
   * DataTables provided search input element (it does not effect calls to
   * `dt-api search()`, providing a delay before the search is made.
   */
  searchDelay: null,
  /**
   * DataTables features six different built-in options for the buttons to
   * display for pagination control:
   *
   * * `numbers` - Page number buttons only
   * * `simple` - 'Previous' and 'Next' buttons only
   * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
   * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
   * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
   * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
   */
  sPaginationType: "",
  /**
   * Enable horizontal scrolling. When a table is too wide to fit into a
   * certain layout, or you have a large number of columns in the table, you
   * can enable x-scrolling to show the table in a viewport, which can be
   * scrolled. This property can be `true` which will allow the table to
   * scroll horizontally when needed, or any CSS unit, or a number (in which
   * case it will be treated as a pixel measurement). Setting as simply `true`
   * is recommended.
   */
  sScrollX: "",
  /**
   * This property can be used to force a DataTable to use more width than it
   * might otherwise do when x-scrolling is enabled. For example if you have a
   * table which requires to be well spaced, this parameter is useful for
   * "over-sizing" the table, and thus forcing scrolling. This property can by
   * any CSS unit, or a number (in which case it will be treated as a pixel
   * measurement).
   */
  sScrollXInner: "",
  /**
   * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
   * to the given height, and enable scrolling for any data which overflows the
   * current viewport. This can be used as an alternative to paging to display
   * a lot of data in a small area (although paging and scrolling can both be
   * enabled at the same time). This property can be any CSS unit, or a number
   * (in which case it will be treated as a pixel measurement).
   */
  sScrollY: "",
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   * Set the HTTP method that is used to make the Ajax call for server-side
   * processing or Ajax sourced data.
   */
  sServerMethod: "GET",
  /**
   * DataTables makes use of renderers when displaying HTML elements for
   * a table. These renderers can be added or modified by plug-ins to
   * generate suitable mark-up for a site. For example the Bootstrap
   * integration plug-in for DataTables uses a paging button renderer to
   * display pagination buttons in the mark-up required by Bootstrap.
   *
   * For further information about the renderers available see
   * DataTable.ext.renderer
   */
  renderer: null,
  /**
   * Set the data property name that DataTables should use to get a row's id
   * to set as the `id` property in the node.
   */
  rowId: "DT_RowId",
  /**
   * Caption value
   */
  caption: null,
  /**
   * For server-side processing - use the data from the DOM for the first draw
   */
  iDeferLoading: null,
  /** Event listeners */
  on: null,
  /** Title wrapper element type */
  columnTitleTag: "span"
};
Mi(k.defaults);
k.defaults.column = {
  /**
   * Define which column(s) an order will occur on for this column. This
   * allows a column's ordering to take multiple columns into account when
   * doing a sort or use the data from a different column. For example first
   * name / last name columns make sense to do a multi-column sort over the
   * two columns.
   */
  aDataSort: null,
  iDataSort: -1,
  ariaTitle: "",
  /**
   * You can control the default ordering direction, and even alter the
   * behaviour of the sort handler (i.e. only allow ascending ordering etc)
   * using this parameter.
   */
  asSorting: ["asc", "desc", ""],
  /**
   * Enable or disable filtering on the data in this column.
   */
  bSearchable: !0,
  /**
   * Enable or disable ordering on this column.
   */
  bSortable: !0,
  /**
   * Enable or disable the display of this column.
   */
  bVisible: !0,
  /**
   * Developer definable function that is called whenever a cell is created (Ajax source,
   * etc) or processed for input (DOM source). This can be used as a compliment to mRender
   * allowing you to modify the DOM element (add background colour for example) when the
   * element is available.
   */
  fnCreatedCell: null,
  /**
   * This property can be used to read data from any data source property,
   * including deeply nested objects / properties. `data` can be given in a
   * number of different ways which effect its behaviour:
   *
   * * `integer` - treated as an array index for the data source. This is the
   *   default that DataTables uses (incrementally increased for each column).
   * * `string` - read an object property from the data source. There are
   *   three 'special' options that can be used in the string to alter how
   *   DataTables reads the data from the source object:
   *    * `.` - Dotted JavaScript notation. Just as you use a `.` in
   *      JavaScript to read from nested objects, so to can the options
   *      specified in `data`. For example: `browser.version` or
   *      `browser.name`. If your object parameter name contains a period, use
   *      `\\` to escape it - i.e. `first\\.name`.
   *    * `[]` - Array notation. DataTables can automatically combine data
   *      from and array source, joining the data with the characters provided
   *      between the two brackets. For example: `name[, ]` would provide a
   *      comma-space separated list from the source array. If no characters
   *      are provided between the brackets, the original array source is
   *      returned.
   *    * `()` - Function notation. Adding `()` to the end of a parameter will
   *      execute a function of the name given. For example: `browser()` for a
   *      simple function on the data source, `browser.version()` for a
   *      function in a nested property or even `browser().version` to get an
   *      object property if the function called returns an object. Note that
   *      function notation is recommended for use in `render` rather than
   *      `data` as it is much simpler to use as a renderer.
   * * `null` - use the original data source for the row rather than plucking
   *   data directly from it. This action has effects on two other
   *   initialisation options:
   *    * `defaultContent` - When null is given as the `data` option and
   *      `defaultContent` is specified for the column, the value defined by
   *      `defaultContent` will be used for the cell.
   *    * `render` - When null is used for the `data` option and the `render`
   *      option is specified for the column, the whole data source for the
   *      row is used for the renderer.
   * * `function` - the function given will be executed whenever DataTables
   *   needs to set or get the data for a cell in the column. The function
   *   takes three parameters:
   *    * Parameters:
   *      * `{array|object}` The data source for the row
   *      * `{string}` The type call data requested - this will be 'set' when
   *        setting data or 'filter', 'display', 'type', 'sort' or undefined
   *        when gathering data. Note that when `undefined` is given for the
   *        type DataTables expects to get the raw data for the object back<
   *      * `{*}` Data to set when the second parameter is 'set'.
   *    * Return:
   *      * The return value from the function is not required when 'set' is
   *        the type of call, but otherwise the return is what will be used
   *        for the data requested.
   *
   * Note that `data` is a getter and setter option. If you just require
   * formatting of data for output, you will likely want to use `render` which
   * is simply a getter and thus simpler to use.
   *
   * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
   * name change reflects the flexibility of this property and is consistent
   * with the naming of mRender. If 'mDataProp' is given, then it will still
   * be used by DataTables, as it automatically maps the old name to the new
   * if required.
   */
  mData: null,
  /**
   * This property is the rendering partner to `data` and it is suggested that
   * when you want to manipulate data for display (including filtering,
   * sorting etc) without altering the underlying data for the table, use this
   * property. `render` can be considered to be the read only companion to
   * `data` which is read / write (then as such more complex). Like `data`
   * this option can be given in a number of different ways to effect its
   * behaviour:
   *
   * * `integer` - treated as an array index for the data source. This is the
   *   default that DataTables uses (incrementally increased for each column).
   * * `string` - read an object property from the data source. There are
   *   three 'special' options that can be used in the string to alter how
   *   DataTables reads the data from the source object:
   *    * `.` - Dotted JavaScript notation. Just as you use a `.` in
   *      JavaScript to read from nested objects, so to can the options
   *      specified in `data`. For example: `browser.version` or
   *      `browser.name`. If your object parameter name contains a period, use
   *      `\\` to escape it - i.e. `first\\.name`.
   *    * `[]` - Array notation. DataTables can automatically combine data
   *      from and array source, joining the data with the characters provided
   *      between the two brackets. For example: `name[, ]` would provide a
   *      comma-space separated list from the source array. If no characters
   *      are provided between the brackets, the original array source is
   *      returned.
   *    * `()` - Function notation. Adding `()` to the end of a parameter will
   *      execute a function of the name given. For example: `browser()` for a
   *      simple function on the data source, `browser.version()` for a
   *      function in a nested property or even `browser().version` to get an
   *      object property if the function called returns an object.
   * * `object` - use different data for the different data types requested by
   *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
   *   of the object is the data type the property refers to and the value can
   *   defined using an integer, string or function using the same rules as
   *   `render` normally does. Note that an `_` option _must_ be specified.
   *   This is the default value to use if you haven't specified a value for
   *   the data type requested by DataTables.
   * * `function` - the function given will be executed whenever DataTables
   *   needs to set or get the data for a cell in the column. The function
   *   takes three parameters:
   *    * Parameters:
   *      * {array|object} The data source for the row (based on `data`)
   *      * {string} The type call data requested - this will be 'filter',
   *        'display', 'type' or 'sort'.
   *      * {array|object} The full data source for the row (not based on
   *        `data`)
   *    * Return:
   *      * The return value from the function is what will be used for the
   *        data requested.
   */
  mRender: null,
  /**
   * Change the cell type created for the column - either TD cells or TH cells. This
   * can be useful as TH cells have semantic meaning in the table body, allowing them
   * to act as a header for a row (you may wish to add scope='row' to the TH elements).
   */
  sCellType: "td",
  /**
   * Class to give to each cell in this column.
   */
  sClass: "",
  /**
   * When DataTables calculates the column widths to assign to each column,
   * it finds the longest string in each column and then constructs a
   * temporary table and reads the widths from that. The problem with this
   * is that "mmm" is much wider then "iiii", but the latter is a longer
   * string - thus the calculation can go wrong (doing it properly and putting
   * it into an DOM object and measuring that is horribly(!) slow). Thus as
   * a "work around" we provide this option. It will append its value to the
   * text that is found to be the longest string for the column - i.e. padding.
   * Generally you shouldn't need this!
   */
  sContentPadding: "",
  /**
   * Allows a default value to be given for a column's data, and will be used
   * whenever a null data source is encountered (this can be because `data`
   * is set to null, or because the data source itself is null).
   */
  sDefaultContent: null,
  /**
   * This parameter is only used in DataTables' server-side processing. It can
   * be exceptionally useful to know what columns are being displayed on the
   * client side, and to map these to database fields. When defined, the names
   * also allow DataTables to reorder information from the server if it comes
   * back in an unexpected order (i.e. if you switch your columns around on the
   * client-side, your server-side code does not also need updating).
   */
  sName: "",
  /**
   * Defines a data source type for the ordering which can be used to read
   * real-time information from the table (updating the internally cached
   * version) prior to ordering. This allows ordering to occur on user
   * editable elements such as form inputs.
   */
  sSortDataType: "std",
  /**
   * The title of this column.
   */
  sTitle: null,
  /**
   * The type allows you to specify how the data for this column will be
   * ordered. Four types (string, numeric, date and html (which will strip
   * HTML tags before ordering)) are currently available. Note that only date
   * formats understood by JavaScript's Date() object will be accepted as type
   * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
   * 'numeric', 'date' or 'html' (by default). Further types can be adding
   * through plug-ins.
   */
  sType: null,
  /**
   * Defining the width of the column, this parameter may take any CSS value
   * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
   * been given a specific width through this interface ensuring that the table
   * remains readable.
   */
  sWidth: null
};
Mi(k.defaults.column);
k.models.oSettings = {
  /**
   * Primary features of DataTables and their enablement state.
   */
  oFeatures: {
    /**
     * Flag to say if DataTables should automatically try to calculate the
     * optimum table and columns widths (true) or not (false).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bAutoWidth: null,
    /**
     * Delay the creation of TR and TD elements until they are actually
     * needed by a driven page draw. This can give a significant speed
     * increase for Ajax source and JavaScript source data, but makes no
     * difference at all for DOM and server-side processing tables.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bDeferRender: null,
    /**
     * Enable filtering on the table or not. Note that if this is disabled
     * then there is no filtering at all on the table, including fnFilter.
     * To just remove the filtering input use sDom and remove the 'f' option.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bFilter: null,
    /**
     * Used only for compatibility with DT1
     * @deprecated
     */
    bInfo: !0,
    /**
     * Used only for compatibility with DT1
     * @deprecated
     */
    bLengthChange: !0,
    /**
     * Pagination enabled or not. Note that if this is disabled then length
     * changing must also be disabled.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bPaginate: null,
    /**
     * Processing indicator enable flag whenever DataTables is enacting a
     * user request - typically an Ajax request for server-side processing.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bProcessing: null,
    /**
     * Server-side processing enabled flag - when enabled DataTables will
     * get all data from the server for every draw - there is no filtering,
     * sorting or paging done on the client-side.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bServerSide: null,
    /**
     * Sorting enablement flag.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bSort: null,
    /**
     * Multi-column sorting
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bSortMulti: null,
    /**
     * Apply a class to the columns which are being sorted to provide a
     * visual highlight or not. This can slow things down when enabled since
     * there is a lot of DOM interaction.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bSortClasses: null,
    /**
     * State saving enablement flag.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bStateSave: null
  },
  /**
   * Scrolling settings for a table.
   */
  oScroll: {
    /**
     * When the table is shorter in height than sScrollY, collapse the
     * table container down to the height of the table (when true).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    bCollapse: null,
    /**
     * Width of the scrollbar for the web-browser's platform. Calculated
     * during table initialisation.
     */
    iBarWidth: 0,
    /**
     * Viewport width for horizontal scrolling. Horizontal scrolling is
     * disabled if an empty string.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    sX: null,
    /**
     * Width to expand the table to when using x-scrolling. Typically you
     * should not need to use this.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @deprecated
     */
    sXInner: null,
    /**
     * Viewport height for vertical scrolling. Vertical scrolling is disabled
     * if an empty string.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    sY: null
  },
  /**
   * Language information for the table.
   */
  oLanguage: {
    /**
     * Information callback function. See
     * {@link DataTable.defaults.fnInfoCallback}
     */
    fnInfoCallback: null
  },
  /**
   * Browser support parameters
   */
  oBrowser: {
    /**
     * Determine if the vertical scrollbar is on the right or left of the
     * scrolling container - needed for rtl language layout, although not
     * all browsers move the scrollbar (Safari).
     */
    bScrollbarLeft: !1,
    /**
     * Browser scrollbar width
     */
    barWidth: 0
  },
  ajax: null,
  /**
   * Array referencing the nodes which are used for the features. The
   * parameters of this object match what is allowed by sDom - i.e.
   *   <ul>
   *     <li>'l' - Length changing</li>
   *     <li>'f' - Filtering input</li>
   *     <li>'t' - The table!</li>
   *     <li>'i' - Information</li>
   *     <li>'p' - Pagination</li>
   *     <li>'r' - pRocessing</li>
   *   </ul>
   */
  aanFeatures: [],
  /**
   * Store data information - see {@link DataTable.models.oRow} for detailed
   * information.
   */
  aoData: [],
  /**
   * Array of indexes which are in the current display (after filtering etc)
   */
  aiDisplay: [],
  /**
   * Array of indexes for display - no filtering
   */
  aiDisplayMaster: [],
  /**
   * Map of row ids to data indexes
   */
  aIds: {},
  /**
   * Store information about each column that is in use
   */
  aoColumns: [],
  /**
   * Store information about the table's header
   */
  aoHeader: [],
  /**
   * Store information about the table's footer
   */
  aoFooter: [],
  /**
   * Store the applied global search information in case we want to force a
   * research or compare the old search to a new one.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  oPreviousSearch: {},
  /**
   * Store for named searches
   */
  searchFixed: {},
  /**
   * Store the applied search for each column - see
   * {@link DataTable.models.oSearch} for the format that is used for the
   * filtering information for each column.
   */
  aoPreSearchCols: [],
  /**
   * Sorting that is applied to the table. Note that the inner arrays are
   * used in the following manner:
   * <ul>
   *   <li>Index 0 - column number</li>
   *   <li>Index 1 - current sorting direction</li>
   * </ul>
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  aaSorting: null,
  /**
   * Sorting that is always applied to the table (i.e. prefixed in front of
   * aaSorting).
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  aaSortingFixed: [],
  /**
   * If restoring a table - we should restore its width
   */
  sDestroyWidth: 0,
  /**
   * Callback functions array for every time a row is inserted (i.e. on a draw).
   */
  aoRowCallback: [],
  /**
   * Callback functions for the header on each draw.
   */
  aoHeaderCallback: [],
  /**
   * Callback function for the footer on each draw.
   */
  aoFooterCallback: [],
  /**
   * Array of callback functions for draw callback functions
   */
  aoDrawCallback: [],
  /**
   * Array of callback functions for row created function
   */
  aoRowCreatedCallback: [],
  /**
   * Callback functions for just before the table is redrawn. A return of
   * false will be used to cancel the draw.
   */
  aoPreDrawCallback: [],
  /**
   * Callback functions for when the table has been initialised.
   */
  aoInitComplete: [],
  /**
   * Callbacks for modifying the settings to be stored for state saving, prior to
   * saving state.
   */
  aoStateSaveParams: [],
  /**
   * Callbacks for modifying the settings that have been stored for state saving
   * prior to using the stored values to restore the state.
   */
  aoStateLoadParams: [],
  /**
   * Callbacks for operating on the settings object once the saved state has been
   * loaded
   */
  aoStateLoaded: [],
  /**
   * Cache the table ID for quick access
   */
  sTableId: "",
  /**
   * The TABLE node for the main table
   */
  nTable: null,
  /**
   * Permanent ref to the thead element
   */
  nTHead: null,
  /**
   * Permanent ref to the tfoot element - if it exists
   */
  nTFoot: null,
  /**
   * Permanent ref to the tbody element
   */
  nTBody: null,
  /**
   * Cache the wrapper node (contains all DataTables controlled elements)
   */
  nTableWrapper: null,
  /**
   * Indicate if all required information has been read in
   */
  bInitialised: !1,
  /**
   * Information about open rows. Each object in the array has the parameters
   * 'nTr' and 'nParent'
   */
  aoOpenRows: [],
  /**
   * Dictate the positioning of DataTables' control elements - see
   * {@link DataTable.model.oInit.sDom}.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  sDom: null,
  /**
   * Search delay (in mS)
   */
  searchDelay: null,
  /**
   * Which type of pagination should be used.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  sPaginationType: "two_button",
  /**
   * Number of paging controls on the page. Only used for backwards compatibility
   */
  pagingControls: 0,
  /**
   * The state duration (for `stateSave`) in seconds.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  iStateDuration: 0,
  /**
   * Array of callback functions for state saving. Each array element is an
   * object with the following parameters:
   *   <ul>
   *     <li>function:fn - function to call. Takes two parameters, oSettings
   *       and the JSON string to save that has been thus far created. Returns
   *       a JSON string to be inserted into a json object
   *       (i.e. '"param": [ 0, 1, 2]')</li>
   *     <li>string:sName - name of callback</li>
   *   </ul>
   */
  aoStateSave: [],
  /**
   * Array of callback functions for state loading. Each array element is an
   * object with the following parameters:
   *   <ul>
   *     <li>function:fn - function to call. Takes two parameters, oSettings
   *       and the object stored. May return false to cancel state loading</li>
   *     <li>string:sName - name of callback</li>
   *   </ul>
   */
  aoStateLoad: [],
  /**
   * State that was saved. Useful for back reference
   */
  oSavedState: null,
  /**
   * State that was loaded. Useful for back reference
   */
  oLoadedState: null,
  /**
   * Note if draw should be blocked while getting data
   */
  bAjaxDataGet: !0,
  /**
   * The last jQuery XHR object that was used for server-side data gathering.
   * This can be used for working with the XHR information in one of the
   * callbacks
   */
  jqXHR: null,
  /**
   * JSON returned from the server in the last Ajax request
   */
  json: void 0,
  /**
   * Data submitted as part of the last Ajax request
   */
  oAjaxData: void 0,
  /**
   * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
   * required).
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  sServerMethod: null,
  /**
   * Format numbers for display.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  fnFormatNumber: null,
  /**
   * List of options that can be used for the user selectable length menu.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  aLengthMenu: null,
  /**
   * Counter for the draws that the table does. Also used as a tracker for
   * server-side processing
   */
  iDraw: 0,
  /**
   * Indicate if a redraw is being done - useful for Ajax
   */
  bDrawing: !1,
  /**
   * Draw index (iDraw) of the last error when parsing the returned data
   */
  iDrawError: -1,
  /**
   * Paging display length
   */
  _iDisplayLength: 10,
  /**
   * Paging start point - aiDisplay index
   */
  _iDisplayStart: 0,
  /**
   * Server-side processing - number of records in the result set
   * (i.e. before filtering), Use fnRecordsTotal rather than
   * this property to get the value of the number of records, regardless of
   * the server-side processing setting.
   */
  _iRecordsTotal: 0,
  /**
   * Server-side processing - number of records in the current display set
   * (i.e. after filtering). Use fnRecordsDisplay rather than
   * this property to get the value of the number of records, regardless of
   * the server-side processing setting.
   */
  _iRecordsDisplay: 0,
  /**
   * The classes to use for the table
   */
  oClasses: {},
  /**
   * Flag attached to the settings object so you can check in the draw
   * callback if filtering has been done in the draw. Deprecated in favour of
   * events.
   *  @deprecated
   */
  bFiltered: !1,
  /**
   * Flag attached to the settings object so you can check in the draw
   * callback if sorting has been done in the draw. Deprecated in favour of
   * events.
   *  @deprecated
   */
  bSorted: !1,
  /**
   * Indicate that if multiple rows are in the header and there is more than
   * one unique cell per column. Replaced by titleRow
   */
  bSortCellsTop: null,
  /**
   * Initialisation object that is used for the table
   */
  oInit: null,
  /**
   * Destroy callback functions - for plug-ins to attach themselves to the
   * destroy so they can clean up markup and events.
   */
  aoDestroyCallback: [],
  /**
   * Get the number of records in the current record set, before filtering
   */
  fnRecordsTotal: function() {
    return dt(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
  },
  /**
   * Get the number of records in the current record set, after filtering
   */
  fnRecordsDisplay: function() {
    return dt(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
  },
  /**
   * Get the display end point - aiDisplay index
   */
  fnDisplayEnd: function() {
    var e = this._iDisplayLength, t = this._iDisplayStart, n = t + e, r = this.aiDisplay.length, i = this.oFeatures, a = i.bPaginate;
    return i.bServerSide ? a === !1 || e === -1 ? t + r : Math.min(t + e, this._iRecordsDisplay) : !a || n > r || e === -1 ? r : n;
  },
  /**
   * The DataTables object for this table
   */
  oInstance: null,
  /**
   * Unique identifier for each instance of the DataTables object. If there
   * is an ID on the table node, then it takes that value, otherwise an
   * incrementing internal counter is used.
   */
  sInstance: null,
  /**
   * tabindex attribute value that is added to DataTables control elements, allowing
   * keyboard navigation of the table and its controls.
   */
  iTabIndex: 0,
  /**
   * DIV container for the footer scrolling table if scrolling
   */
  nScrollHead: null,
  /**
   * DIV container for the footer scrolling table if scrolling
   */
  nScrollFoot: null,
  /**
   * Last applied sort
   */
  aLastSort: [],
  /**
   * Stored plug-in instances
   */
  oPlugins: {},
  /**
   * Function used to get a row's id from the row's data
   */
  rowIdFn: null,
  /**
   * Data location where to store a row's id
   */
  rowId: null,
  caption: "",
  captionNode: null,
  colgroup: null,
  /** Delay loading of data */
  deferLoading: null,
  /** Allow auto type detection */
  typeDetect: !0,
  /** ResizeObserver for the container div */
  resizeObserver: null,
  /** Keep a record of the last size of the container, so we can skip duplicates */
  containerWidth: -1,
  /** Reverse the initial order of the data set on desc ordering */
  orderDescReverse: null,
  /** Show / hide ordering indicators in headers */
  orderIndicators: !0,
  /** Default ordering listener */
  orderHandler: !0,
  /** Title row indicator */
  titleRow: null,
  /** Title wrapper element type */
  columnTitleTag: "span"
};
var Mf = k.ext.pager;
I.extend(Mf, {
  simple: function() {
    return ["previous", "next"];
  },
  full: function() {
    return ["first", "previous", "next", "last"];
  },
  numbers: function() {
    return ["numbers"];
  },
  simple_numbers: function() {
    return ["previous", "numbers", "next"];
  },
  full_numbers: function() {
    return ["first", "previous", "numbers", "next", "last"];
  },
  first_last: function() {
    return ["first", "last"];
  },
  first_last_numbers: function() {
    return ["first", "numbers", "last"];
  },
  // For testing and plug-ins to use
  _numbers: kc,
  // Number of number buttons - legacy, use `numbers` option for paging feature
  numbers_length: 7
});
I.extend(!0, k.ext.renderer, {
  pagingButton: {
    _: function(e, t, n, r, i) {
      var a = e.oClasses.paging, o = [a.button], u;
      return r && o.push(a.active), i && o.push(a.disabled), t === "ellipsis" ? u = I('<span class="ellipsis"></span>').html(n)[0] : u = I("<button>", {
        class: o.join(" "),
        role: "link",
        type: "button"
      }).html(n), {
        display: u,
        clicker: u
      };
    }
  },
  pagingContainer: {
    _: function(e, t) {
      return t;
    }
  }
});
var hr = function(e, t) {
  return function(n) {
    return ct(n) || typeof n != "string" || (n = n.replace(Xd, " "), e && (n = qt(n)), t && (n = Ai(n, !1))), n;
  };
};
function ol(e, t, n, r, i) {
  return Sn ? e[t](i) : nn ? e[n](i) : r ? e[r](i) : e;
}
var ll = !1, nn, Sn;
function Vf() {
  window.luxon && !nn && (nn = window.luxon), window.moment && !Sn && (Sn = window.moment);
}
function Ri(e, t, n) {
  var r;
  if (Vf(), Sn) {
    if (r = Sn.utc(e, t, n, !0), !r.isValid())
      return null;
  } else if (nn) {
    if (r = t && typeof e == "string" ? nn.DateTime.fromFormat(e, t) : nn.DateTime.fromISO(e), !r.isValid)
      return null;
    r = r.setLocale(n);
  } else
    t ? (ll || alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"), ll = !0) : r = new Date(e);
  return r;
}
function Ns(e) {
  return function(t, n, r, i) {
    arguments.length === 0 ? (r = "en", n = null, t = null) : arguments.length === 1 ? (r = "en", n = t, t = null) : arguments.length === 2 && (r = n, n = t, t = null);
    var a = "datetime" + (n ? "-" + n : "");
    return k.ext.type.order[a + "-pre"] || k.type(a, {
      detect: function(o) {
        return o === a ? a : !1;
      },
      order: {
        pre: function(o) {
          return o.valueOf();
        }
      },
      className: "dt-right"
    }), function(o, u) {
      if (o == null)
        if (i === "--now") {
          var v = /* @__PURE__ */ new Date();
          o = new Date(Date.UTC(
            v.getFullYear(),
            v.getMonth(),
            v.getDate(),
            v.getHours(),
            v.getMinutes(),
            v.getSeconds()
          ));
        } else
          o = "";
      if (u === "type")
        return a;
      if (o === "")
        return u !== "sort" ? "" : Ri("0000-01-01 00:00:00", null, r);
      if (n !== null && t === n && u !== "sort" && u !== "type" && !(o instanceof Date))
        return o;
      var b = Ri(o, t, r);
      if (b === null)
        return o;
      if (u === "sort")
        return b;
      var m = n === null ? ol(b, "toDate", "toJSDate", "")[e](
        navigator.language,
        { timeZone: "UTC" }
      ) : ol(b, "format", "toFormat", "toISOString", n);
      return u === "display" ? Tn(m) : m;
    };
  };
}
var Oc = ",", Pc = ".";
if (window.Intl !== void 0)
  try {
    for (var Er = new Intl.NumberFormat().formatToParts(100000.1), He = 0; He < Er.length; He++)
      Er[He].type === "group" ? Oc = Er[He].value : Er[He].type === "decimal" && (Pc = Er[He].value);
  } catch {
  }
k.datetime = function(e, t) {
  var n = "datetime-" + e;
  t || (t = "en"), k.ext.type.order[n] || k.type(n, {
    detect: function(r) {
      var i = Ri(r, e, t);
      return r === "" || i ? n : !1;
    },
    order: {
      pre: function(r) {
        return Ri(r, e, t) || 0;
      }
    },
    className: "dt-right"
  });
};
k.render = {
  date: Ns("toLocaleDateString"),
  datetime: Ns("toLocaleString"),
  time: Ns("toLocaleTimeString"),
  number: function(e, t, n, r, i) {
    return e == null && (e = Oc), t == null && (t = Pc), {
      display: function(a) {
        if (typeof a != "number" && typeof a != "string" || a === "" || a === null)
          return a;
        var o = a < 0 ? "-" : "", u = parseFloat(a), v = Math.abs(u);
        if (v >= 1e11 || v < 1e-4 && v !== 0) {
          var b = u.toExponential(n).split(/e\+?/);
          return b[0] + " x 10<sup>" + b[1] + "</sup>";
        }
        if (isNaN(u))
          return Tn(a);
        u = u.toFixed(n), a = Math.abs(u);
        var m = parseInt(a, 10), x = n ? t + (a - m).toFixed(n).substring(2) : "";
        return m === 0 && parseFloat(x) === 0 && (o = ""), o + (r || "") + m.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          e
        ) + x + (i || "");
      }
    };
  },
  text: function() {
    return {
      display: Tn,
      filter: Tn
    };
  }
};
var Xe = k.ext.type;
k.type = function(e, t, n) {
  if (!t)
    return {
      className: Xe.className[e],
      detect: Xe.detect.find(function(o) {
        return o._name === e;
      }),
      order: {
        pre: Xe.order[e + "-pre"],
        asc: Xe.order[e + "-asc"],
        desc: Xe.order[e + "-desc"]
      },
      render: Xe.render[e],
      search: Xe.search[e]
    };
  var r = function(o, u) {
    Xe[o][e] = u;
  }, i = function(o) {
    Object.defineProperty(o, "_name", { value: e });
    var u = Xe.detect.findIndex(function(v) {
      return v._name === e;
    });
    u === -1 ? Xe.detect.unshift(o) : Xe.detect.splice(u, 1, o);
  }, a = function(o) {
    Xe.order[e + "-pre"] = o.pre, Xe.order[e + "-asc"] = o.asc, Xe.order[e + "-desc"] = o.desc;
  };
  n === void 0 && (n = t, t = null), t === "className" ? r("className", n) : t === "detect" ? i(n) : t === "order" ? a(n) : t === "render" ? r("render", n) : t === "search" ? r("search", n) : t || (n.className && r("className", n.className), n.detect !== void 0 && i(n.detect), n.order && a(n.order), n.render !== void 0 && r("render", n.render), n.search !== void 0 && r("search", n.search));
};
k.types = function() {
  return Xe.detect.map(function(e) {
    return e._name;
  });
};
var ta = function(e, t) {
  return e = e != null ? e.toString().toLowerCase() : "", t = t != null ? t.toString().toLowerCase() : "", e.localeCompare(t, navigator.languages[0] || navigator.language, {
    numeric: !0,
    ignorePunctuation: !0
  });
}, cl = function(e, t) {
  return e = qt(e), t = qt(t), ta(e, t);
};
k.type("string", {
  detect: function() {
    return "string";
  },
  order: {
    pre: function(e) {
      return ct(e) && typeof e != "boolean" ? "" : typeof e == "string" ? e.toLowerCase() : e.toString ? e.toString() : "";
    }
  },
  search: hr(!1, !0)
});
k.type("string-utf8", {
  detect: {
    allOf: function(e) {
      return !0;
    },
    oneOf: function(e) {
      return !ct(e) && navigator.languages && typeof e == "string" && e.match(/[^\x00-\x7F]/);
    }
  },
  order: {
    asc: ta,
    desc: function(e, t) {
      return ta(e, t) * -1;
    }
  },
  search: hr(!1, !0)
});
k.type("html", {
  detect: {
    allOf: function(e) {
      return ct(e) || typeof e == "string" && e.indexOf("<") !== -1;
    },
    oneOf: function(e) {
      return !ct(e) && typeof e == "string" && e.indexOf("<") !== -1;
    }
  },
  order: {
    pre: function(e) {
      return ct(e) ? "" : e.replace ? qt(e).trim().toLowerCase() : e + "";
    }
  },
  search: hr(!0, !0)
});
k.type("html-utf8", {
  detect: {
    allOf: function(e) {
      return ct(e) || typeof e == "string" && e.indexOf("<") !== -1;
    },
    oneOf: function(e) {
      return navigator.languages && !ct(e) && typeof e == "string" && e.indexOf("<") !== -1 && typeof e == "string" && e.match(/[^\x00-\x7F]/);
    }
  },
  order: {
    asc: cl,
    desc: function(e, t) {
      return cl(e, t) * -1;
    }
  },
  search: hr(!0, !0)
});
k.type("date", {
  className: "dt-type-date",
  detect: {
    allOf: function(e) {
      if (e && !(e instanceof Date) && !Ko.test(e))
        return null;
      var t = Date.parse(e);
      return t !== null && !isNaN(t) || ct(e);
    },
    oneOf: function(e) {
      return e instanceof Date || typeof e == "string" && Ko.test(e);
    }
  },
  order: {
    pre: function(e) {
      var t = Date.parse(e);
      return isNaN(t) ? -1 / 0 : t;
    }
  }
});
k.type("html-num-fmt", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Di(e, n, !0, !1);
    },
    oneOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Di(e, n, !0, !1);
    }
  },
  order: {
    pre: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Yi(e, n, ua, da);
    }
  },
  search: hr(!0, !0)
});
k.type("html-num", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Di(e, n, !1, !0);
    },
    oneOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Di(e, n, !1, !1);
    }
  },
  order: {
    pre: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Yi(e, n, ua);
    }
  },
  search: hr(!0, !0)
});
k.type("num-fmt", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Ir(e, n, !0, !0);
    },
    oneOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Ir(e, n, !0, !1);
    }
  },
  order: {
    pre: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Yi(e, n, da);
    }
  }
});
k.type("num", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Ir(e, n, !1, !0);
    },
    oneOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Ir(e, n, !1, !1);
    }
  },
  order: {
    pre: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return Yi(e, n);
    }
  }
});
var Yi = function(e, t, n, r) {
  if (e !== 0 && (!e || e === "-"))
    return -1 / 0;
  var i = typeof e;
  return i === "number" || i === "bigint" ? e : (t && (e = ic(e, t)), e.replace && (n && (e = e.replace(n, "")), r && (e = e.replace(r, ""))), e * 1);
};
I.extend(!0, k.ext.renderer, {
  footer: {
    _: function(e, t, n) {
      t.addClass(n.tfoot.cell);
    }
  },
  header: {
    _: function(e, t, n) {
      t.addClass(n.thead.cell), e.oFeatures.bSort || t.addClass(n.order.none);
      var r = e.titleRow, i = t.closest("thead").find("tr"), a = t.parent().index();
      // Cells and rows which have the attribute to disable the icons
      t.attr("data-dt-order") === "disable" || t.parent().attr("data-dt-order") === "disable" || // titleRow support, for defining a specific row in the header
      r === !0 && a !== 0 || r === !1 && a !== i.length - 1 || typeof r == "number" && a !== r || I(e.nTable).on("order.dt.DT column-visibility.dt.DT", function(o, u, v) {
        if (e === u) {
          var b = u.sortDetails;
          if (b) {
            var m = Ke(b, "col");
            if (!(o.type === "column-visibility" && !m.includes(v))) {
              var x, _ = n.order, T = u.api.columns(t), N = e.aoColumns[T.flatten()[0]], D = T.orderable().includes(!0), p = "", l = T.indexes(), d = T.orderable(!0).flatten(), y = e.iTabIndex, E = u.orderHandler && D;
              t.removeClass(
                _.isAsc + " " + _.isDesc
              ).toggleClass(_.none, !D).toggleClass(_.canAsc, E && d.includes("asc")).toggleClass(_.canDesc, E && d.includes("desc"));
              var O = !0;
              for (x = 0; x < l.length; x++)
                m.includes(l[x]) || (O = !1);
              if (O) {
                var f = T.order();
                t.addClass(
                  f.includes("asc") ? _.isAsc : "" + f.includes("desc") ? _.isDesc : ""
                );
              }
              var H = -1;
              for (x = 0; x < m.length; x++)
                if (e.aoColumns[m[x]].bVisible) {
                  H = m[x];
                  break;
                }
              if (l[0] == H) {
                var Y = b[0], q = N.asSorting;
                t.attr("aria-sort", Y.dir === "asc" ? "ascending" : "descending"), p = q[Y.index + 1] ? "Reverse" : "Remove";
              } else
                t.removeAttr("aria-sort");
              if (D) {
                var K = t.find(".dt-column-order");
                K.attr("role", "button").attr(
                  "aria-label",
                  D ? N.ariaTitle + u.api.i18n("oAria.orderable" + p) : N.ariaTitle
                ), y !== -1 && K.attr("tabindex", y);
              }
            }
          }
        }
      });
    }
  },
  layout: {
    _: function(e, t, n) {
      var r = e.oClasses.layout, i = I("<div/>").attr("id", n.id || null).addClass(n.className || r.row).appendTo(t);
      k.ext.renderer.layout._forLayoutRow(n, function(a, o) {
        if (!(a === "id" || a === "className")) {
          var u = "";
          o.table && (i.addClass(r.tableRow), u += r.tableCell + " "), a === "start" ? u += r.start : a === "end" ? u += r.end : u += r.full, I("<div/>").attr({
            id: o.id || null,
            class: o.className ? o.className : r.cell + " " + u
          }).append(o.contents).appendTo(i);
        }
      });
    },
    // Shared for use by the styling frameworks
    _forLayoutRow: function(e, t) {
      var n = function(r) {
        switch (r) {
          case "":
            return 0;
          case "start":
            return 1;
          case "end":
            return 2;
          default:
            return 3;
        }
      };
      Object.keys(e).sort(function(r, i) {
        return n(r) - n(i);
      }).forEach(function(r) {
        t(r, e[r]);
      });
    }
  }
});
k.feature = {};
k.feature.register = function(e, t, n) {
  k.ext.features[e] = t, n && je.feature.push({
    cFeature: n,
    fnInit: t
  });
};
function fi(e, t, n) {
  n && (e[t] = n);
}
k.feature.register("div", function(e, t) {
  var n = I("<div>")[0];
  return t && (fi(n, "className", t.className), fi(n, "id", t.id), fi(n, "innerHTML", t.html), fi(n, "textContent", t.text)), n;
});
k.feature.register("info", function(e, t) {
  if (!e.oFeatures.bInfo)
    return null;
  var n = e.oLanguage, r = e.sTableId, i = I("<div/>", {
    class: e.oClasses.info.container
  });
  return t = I.extend({
    callback: n.fnInfoCallback,
    empty: n.sInfoEmpty,
    postfix: n.sInfoPostFix,
    search: n.sInfoFiltered,
    text: n.sInfo
  }, t), e.aoDrawCallback.push(function(a) {
    Hf(a, t, i);
  }), e._infoEl || (i.attr({
    "aria-live": "polite",
    id: r + "_info",
    role: "status"
  }), I(e.nTable).attr("aria-describedby", r + "_info"), e._infoEl = i), i;
}, "i");
function Hf(e, t, n) {
  var r = e._iDisplayStart + 1, i = e.fnDisplayEnd(), a = e.fnRecordsTotal(), o = e.fnRecordsDisplay(), u = o ? t.text : t.empty;
  o !== a && (u += " " + t.search), u += t.postfix, u = wa(e, u), t.callback && (u = t.callback.call(
    e.oInstance,
    e,
    r,
    i,
    a,
    o,
    u
  )), n.html(u), xe(e, null, "info", [e, n[0], u]);
}
var Os = 0;
k.feature.register("search", function(e, t) {
  if (!e.oFeatures.bFilter)
    return null;
  var n = e.oClasses.search, r = e.sTableId, i = e.oLanguage, a = e.oPreviousSearch, o = '<input type="search" class="' + n.input + '"/>';
  t = I.extend({
    placeholder: i.sSearchPlaceholder,
    processing: !1,
    text: i.sSearch
  }, t), t.text.indexOf("_INPUT_") === -1 && (t.text += "_INPUT_"), t.text = wa(e, t.text);
  var u = t.text.match(/_INPUT_$/), v = t.text.match(/^_INPUT_/), b = t.text.replace(/_INPUT_/, ""), m = "<label>" + t.text + "</label>";
  v ? m = "_INPUT_<label>" + b + "</label>" : u && (m = "<label>" + b + "</label>_INPUT_");
  var x = I("<div>").addClass(n.container).append(m.replace(/_INPUT_/, o));
  x.find("label").attr("for", "dt-search-" + Os), x.find("input").attr("id", "dt-search-" + Os), Os++;
  var _ = function(D) {
    var p = this.value;
    a.return && D.key !== "Enter" || p != a.search && mc(e, t.processing, function() {
      a.search = p, Fr(e, a), e._iDisplayStart = 0, fr(e);
    });
  }, T = e.searchDelay !== null ? e.searchDelay : 0, N = I("input", x).val(a.search).attr("placeholder", t.placeholder).on(
    "keyup.DT search.DT input.DT paste.DT cut.DT",
    T ? k.util.debounce(_, T) : _
  ).on("mouseup.DT", function(D) {
    setTimeout(function() {
      _.call(N[0], D);
    }, 10);
  }).on("keypress.DT", function(D) {
    if (D.keyCode == 13)
      return !1;
  }).attr("aria-controls", r);
  return I(e.nTable).on("search.dt.DT", function(D, p) {
    e === p && N[0] !== document.activeElement && N.val(
      typeof a.search != "function" ? a.search : ""
    );
  }), x;
}, "f");
k.feature.register("paging", function(e, t) {
  if (!e.oFeatures.bPaginate)
    return null;
  t = I.extend({
    buttons: k.ext.pager.numbers_length,
    type: e.sPaginationType,
    boundaryNumbers: !0,
    firstLast: !0,
    previousNext: !0,
    numbers: !0
  }, t);
  var n = I("<div/>").addClass(e.oClasses.paging.container + (t.type ? " paging_" + t.type : "")).append(
    I("<nav>").attr("aria-label", "pagination").addClass(e.oClasses.paging.nav)
  ), r = function() {
    Rc(e, n.children(), t);
  };
  return e.aoDrawCallback.push(r), I(e.nTable).on("column-sizing.dt.DT", r), n;
}, "p");
function $f(e) {
  var t = [];
  return e.numbers && t.push("numbers"), e.previousNext && (t.unshift("previous"), t.push("next")), e.firstLast && (t.unshift("first"), t.push("last")), t;
}
function Rc(e, t, n) {
  if (e._bInitComplete) {
    var r = n.type ? k.ext.pager[n.type] : $f, i = e.oLanguage.oAria.paginate || {}, a = e._iDisplayStart, o = e._iDisplayLength, u = e.fnRecordsDisplay(), v = o === -1, b = v ? 0 : Math.ceil(a / o), m = v ? 1 : Math.ceil(u / o), x = [], _ = [], T = r(n).map(function(f) {
      return f === "numbers" ? kc(b, m, n.buttons, n.boundaryNumbers) : f;
    });
    x = x.concat.apply(x, T);
    for (var N = 0; N < x.length; N++) {
      var D = x[N], p = jf(e, D, b, m), l = Pi(e, "pagingButton")(
        e,
        D,
        p.display,
        p.active,
        p.disabled
      ), d = typeof D == "string" ? i[D] : i.number ? i.number + (D + 1) : null;
      I(l.clicker).attr({
        "aria-controls": e.sTableId,
        "aria-disabled": p.disabled ? "true" : null,
        "aria-current": p.active ? "page" : null,
        "aria-label": d,
        "data-dt-idx": D,
        tabIndex: p.disabled ? -1 : e.iTabIndex && l.clicker[0].nodeName.toLowerCase() !== "span" ? e.iTabIndex : null
        // `0` doesn't need a tabIndex since it is the default
      }), typeof D != "number" && I(l.clicker).addClass(D), Tc(
        l.clicker,
        { action: D },
        function(f) {
          f.preventDefault(), ya(e, f.data.action, !0);
        }
      ), _.push(l.display);
    }
    var y = Pi(e, "pagingContainer")(
      e,
      _
    ), E = t.find(document.activeElement).data("dt-idx");
    if (t.empty().append(y), E !== void 0 && t.find("[data-dt-idx=" + E + "]").trigger("focus"), _.length) {
      var O = I(_[0]).outerHeight();
      n.buttons > 1 && // prevent infinite
      O > 0 && // will be 0 if hidden
      I(t).height() >= O * 2 - 10 && Rc(e, t, I.extend({}, n, { buttons: n.buttons - 2 }));
    }
  }
}
function jf(e, t, n, r) {
  var i = e.oLanguage.oPaginate, a = {
    display: "",
    active: !1,
    disabled: !1
  };
  switch (t) {
    case "ellipsis":
      a.display = "&#x2026;";
      break;
    case "first":
      a.display = i.sFirst, n === 0 && (a.disabled = !0);
      break;
    case "previous":
      a.display = i.sPrevious, n === 0 && (a.disabled = !0);
      break;
    case "next":
      a.display = i.sNext, (r === 0 || n === r - 1) && (a.disabled = !0);
      break;
    case "last":
      a.display = i.sLast, (r === 0 || n === r - 1) && (a.disabled = !0);
      break;
    default:
      typeof t == "number" && (a.display = e.fnFormatNumber(t + 1), n === t && (a.active = !0));
      break;
  }
  return a;
}
function kc(e, t, n, r) {
  var i = [], a = Math.floor(n / 2), o = r ? 2 : 1, u = r ? 1 : 0;
  return t <= n ? i = Jt(0, t) : n === 1 ? i = [e] : n === 3 ? e <= 1 ? i = [0, 1, "ellipsis"] : e >= t - 2 ? (i = Jt(t - 2, t), i.unshift("ellipsis")) : i = ["ellipsis", e, "ellipsis"] : e <= a ? (i = Jt(0, n - o), i.push("ellipsis"), r && i.push(t - 1)) : e >= t - 1 - a ? (i = Jt(t - (n - o), t), i.unshift("ellipsis"), r && i.unshift(0)) : (i = Jt(e - a + o, e + a - u), i.push("ellipsis"), i.unshift("ellipsis"), r && (i.push(t - 1), i.unshift(0))), i;
}
var Ps = 0;
k.feature.register("pageLength", function(e, t) {
  var n = e.oFeatures;
  if (!n.bPaginate || !n.bLengthChange)
    return null;
  t = I.extend({
    menu: e.aLengthMenu,
    text: e.oLanguage.sLengthMenu
  }, t);
  var r = e.oClasses.length, i = e.sTableId, a = t.menu, o = [], u = [], v;
  if (Array.isArray(a[0]))
    o = a[0], u = a[1];
  else
    for (v = 0; v < a.length; v++)
      I.isPlainObject(a[v]) ? (o.push(a[v].value), u.push(a[v].label)) : (o.push(a[v]), u.push(a[v]));
  var b = t.text.match(/_MENU_$/), m = t.text.match(/^_MENU_/), x = t.text.replace(/_MENU_/, ""), _ = "<label>" + t.text + "</label>";
  m ? _ = "_MENU_<label>" + x + "</label>" : b && (_ = "<label>" + x + "</label>_MENU_");
  var T = "tmp-" + +/* @__PURE__ */ new Date(), N = I("<div/>").addClass(r.container).append(
    _.replace("_MENU_", '<span id="' + T + '"></span>')
  ), D = [];
  Array.prototype.slice.call(N.find("label")[0].childNodes).forEach(function(y) {
    y.nodeType === Node.TEXT_NODE && D.push({
      el: y,
      text: y.textContent
    });
  });
  var p = function(y) {
    D.forEach(function(E) {
      E.el.textContent = wa(e, E.text, y);
    });
  }, l = I("<select/>", {
    "aria-controls": i,
    class: r.select
  });
  for (v = 0; v < o.length; v++) {
    var d = e.api.i18n("lengthLabels." + o[v], null);
    d === null && (d = typeof u[v] == "number" ? e.fnFormatNumber(u[v]) : u[v]), l[0][v] = new Option(d, o[v]);
  }
  return N.find("label").attr("for", "dt-length-" + Ps), l.attr("id", "dt-length-" + Ps), Ps++, N.find("#" + T).replaceWith(l), I("select", N).val(e._iDisplayLength).on("change.DT", function() {
    vc(e, I(this).val()), fr(e);
  }), I(e.nTable).on("length.dt.DT", function(y, E, O) {
    e === E && (I("select", N).val(O), p(O));
  }), p(e._iDisplayLength), N;
}, "l");
I.fn.dataTable = k;
k.$ = I;
I.fn.dataTableSettings = k.settings;
I.fn.dataTableExt = k.ext;
I.fn.DataTable = function(e) {
  return I(this).dataTable(e).api();
};
I.each(k, function(e, t) {
  I.fn.DataTable[e] = t;
});
/*! DataTables Bootstrap 5 integration
 * © SpryMedia Ltd - datatables.net/license
 */
let Mr = Me;
Mr.extend(!0, k.defaults, {
  renderer: "bootstrap"
});
Mr.extend(!0, k.ext.classes, {
  container: "dt-container dt-bootstrap5",
  search: {
    input: "form-control form-control-sm"
  },
  length: {
    select: "form-select form-select-sm"
  },
  processing: {
    container: "dt-processing card"
  },
  layout: {
    row: "row mt-2 justify-content-between",
    cell: "d-md-flex justify-content-between align-items-center",
    tableCell: "col-12",
    start: "dt-layout-start col-md-auto me-auto",
    end: "dt-layout-end col-md-auto ms-auto",
    full: "dt-layout-full col-md"
  }
});
k.ext.renderer.pagingButton.bootstrap = function(e, t, n, r, i) {
  var a = ["dt-paging-button", "page-item"];
  r && a.push("active"), i && a.push("disabled");
  var o = Mr("<li>").addClass(a.join(" ")), u = Mr("<button>", {
    class: "page-link",
    role: "link",
    type: "button"
  }).html(n).appendTo(o);
  return {
    display: o,
    clicker: u
  };
};
k.ext.renderer.pagingContainer.bootstrap = function(e, t) {
  return Mr("<ul/>").addClass("pagination").append(t);
};
/*! Buttons for DataTables 3.2.6
 * © SpryMedia Ltd - datatables.net/license
 */
let Q = Me;
var Wf = 0, qf = 0, ot = k.ext.buttons, na = null;
function Ea(e, t, n) {
  Q.fn.animate ? e.stop().fadeIn(t, n) : (e.css("display", "block"), n && n.call(e));
}
function Na(e, t, n) {
  Q.fn.animate ? e.stop().fadeOut(t, n) : (e.css("display", "none"), n && n.call(e));
}
var Ae = function(e, t) {
  if (!k.versionCheck("2"))
    throw "Warning: Buttons requires DataTables 2 or newer";
  if (!(this instanceof Ae))
    return function(n) {
      return new Ae(n, e).container();
    };
  typeof t > "u" && (t = {}), t === !0 && (t = {}), Array.isArray(t) && (t = { buttons: t }), this.c = Q.extend(!0, {}, Ae.defaults, t), t.buttons && (this.c.buttons = t.buttons), this.s = {
    dt: new k.Api(e),
    buttons: [],
    listenKeys: "",
    namespace: "dtb" + Wf++
  }, this.dom = {
    container: Q("<" + this.c.dom.container.tag + "/>").addClass(
      this.c.dom.container.className
    )
  }, this._constructor();
};
Q.extend(Ae.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Public methods
   */
  /**
   * Get the action of a button
   * @param  {int|string} Button index
   * @return {function}
   */
  /**
  * Set the action of a button
  * @param  {node} node Button element
  * @param  {function} action Function to set
  * @return {Buttons} Self for chaining
  */
  action: function(e, t) {
    var n = this._nodeToButton(e);
    return t === void 0 ? n.conf.action : (n.conf.action = t, this);
  },
  /**
   * Add an active class to the button to make to look active or get current
   * active state.
   * @param  {node} node Button element
   * @param  {boolean} [flag] Enable / disable flag
   * @return {Buttons} Self for chaining or boolean for getter
   */
  active: function(e, t) {
    var n = this._nodeToButton(e), r = this.c.dom.button.active, i = Q(n.node);
    return n.inCollection && this.c.dom.collection.button && this.c.dom.collection.button.active !== void 0 && (r = this.c.dom.collection.button.active), t === void 0 ? i.hasClass(r) : (i.toggleClass(r, t === void 0 ? !0 : t), this);
  },
  /**
   * Add a new button
   * @param {object} config Button configuration object, base string name or function
   * @param {int|string} [idx] Button index for where to insert the button
   * @param {boolean} [draw=true] Trigger a draw. Set a false when adding
   *   lots of buttons, until the last button.
   * @return {Buttons} Self for chaining
   */
  add: function(e, t, n) {
    var r = this.s.buttons;
    if (typeof t == "string") {
      for (var i = t.split("-"), a = this.s, o = 0, u = i.length - 1; o < u; o++)
        a = a.buttons[i[o] * 1];
      r = a.buttons, t = i[i.length - 1] * 1;
    }
    let v = this._expandButton(
      r,
      e,
      e !== void 0 ? e.split : void 0,
      (e === void 0 || e.split === void 0 || e.split.length === 0) && a !== void 0,
      !1,
      t
    );
    return (n === void 0 || n === !0) && this._draw(), v;
  },
  /**
   * Clear buttons from a collection and then insert new buttons
   */
  collectionRebuild: function(e, t) {
    var n = this._nodeToButton(e);
    if (t !== void 0) {
      var r;
      for (r = n.buttons.length - 1; r >= 0; r--)
        this.remove(n.buttons[r].node);
      for (n.conf.prefixButtons && t.unshift.apply(t, n.conf.prefixButtons), n.conf.postfixButtons && t.push.apply(t, n.conf.postfixButtons), r = 0; r < t.length; r++) {
        var i = t[r];
        this._expandButton(
          n.buttons,
          i,
          i !== void 0 && i.config !== void 0 && i.config.split !== void 0,
          !0,
          i.parentConf !== void 0 && i.parentConf.split !== void 0,
          null,
          i.parentConf
        );
      }
    }
    this._draw(n.collection, n.buttons);
  },
  /**
   * Get the container node for the buttons
   * @return {jQuery} Buttons node
   */
  container: function() {
    return this.dom.container;
  },
  /**
   * Disable a button
   * @param  {node} node Button node
   * @return {Buttons} Self for chaining
   */
  disable: function(e) {
    var t = this._nodeToButton(e);
    return t.isSplit ? Q(t.node.childNodes[0]).addClass(this.c.dom.button.disabled).prop("disabled", !0) : Q(t.node).addClass(this.c.dom.button.disabled).prop("disabled", !0), t.disabled = !0, this._checkSplitEnable(), this;
  },
  /**
   * Destroy the instance, cleaning up event handlers and removing DOM
   * elements
   * @return {Buttons} Self for chaining
   */
  destroy: function() {
    Q("body").off("keyup." + this.s.namespace);
    var e = this.s.buttons.slice(), t, n;
    for (t = 0, n = e.length; t < n; t++)
      this.remove(e[t].node);
    this.dom.container.remove();
    var r = this.s.dt.settings()[0];
    for (t = 0, n = r.length; t < n; t++)
      if (r.inst === this) {
        r.splice(t, 1);
        break;
      }
    return this;
  },
  /**
   * Enable / disable a button
   * @param  {node} node Button node
   * @param  {boolean} [flag=true] Enable / disable flag
   * @return {Buttons} Self for chaining
   */
  enable: function(e, t) {
    if (t === !1)
      return this.disable(e);
    var n = this._nodeToButton(e);
    return n.isSplit ? Q(n.node.childNodes[0]).removeClass(this.c.dom.button.disabled).prop("disabled", !1) : Q(n.node).removeClass(this.c.dom.button.disabled).prop("disabled", !1), n.disabled = !1, this._checkSplitEnable(), this;
  },
  /**
   * Get a button's index
   *
   * This is internally recursive
   * @param {element} node Button to get the index of
   * @return {string} Button index
   */
  index: function(e, t, n) {
    t || (t = "", n = this.s.buttons);
    for (var r = 0, i = n.length; r < i; r++) {
      var a = n[r].buttons;
      if (n[r].node === e)
        return t + r;
      if (a && a.length) {
        var o = this.index(e, r + "-", a);
        if (o !== null)
          return o;
      }
    }
    return null;
  },
  /**
   * Get the instance name for the button set selector
   * @return {string} Instance name
   */
  name: function() {
    return this.c.name;
  },
  /**
   * Get a button's node of the buttons container if no button is given
   * @param  {node} [node] Button node
   * @return {jQuery} Button element, or container
   */
  node: function(e) {
    if (!e)
      return this.dom.container;
    var t = this._nodeToButton(e);
    return Q(t.node);
  },
  /**
   * Set / get a processing class on the selected button
   * @param {element} node Triggering button node
   * @param  {boolean} flag true to add, false to remove, undefined to get
   * @return {boolean|Buttons} Getter value or this if a setter.
   */
  processing: function(e, t) {
    var n = this.s.dt, r = this._nodeToButton(e);
    return t === void 0 ? Q(r.node).hasClass("processing") : (Q(r.node).toggleClass("processing", t), Q(n.table().node()).triggerHandler("buttons-processing.dt", [
      t,
      n.button(e),
      n,
      Q(e),
      r.conf
    ]), this);
  },
  /**
   * Remove a button.
   * @param  {node} node Button node
   * @return {Buttons} Self for chaining
   */
  remove: function(e) {
    var t = this._nodeToButton(e), n = this._nodeToHost(e), r = this.s.dt;
    if (t.buttons.length)
      for (var i = t.buttons.length - 1; i >= 0; i--)
        this.remove(t.buttons[i].node);
    t.conf.destroying = !0, t.conf.destroy && t.conf.destroy.call(r.button(e), r, Q(e), t.conf), this._removeKey(t.conf), Q(t.node).remove(), t.inserter && Q(t.inserter).remove();
    var a = Q.inArray(t, n);
    return n.splice(a, 1), this;
  },
  /**
   * Get the text for a button
   * @param  {int|string} node Button index
   * @return {string} Button text
   */
  /**
  * Set the text for a button
  * @param  {int|string|function} node Button index
  * @param  {string} label Text
  * @return {Buttons} Self for chaining
  */
  text: function(e, t) {
    var n = this._nodeToButton(e), r = n.textNode, i = this.s.dt, a = Q(n.node), o = function(u) {
      return typeof u == "function" ? u(i, a, n.conf) : u;
    };
    return t === void 0 ? o(n.conf.text) : (n.conf.text = t, r.html(o(t)), this);
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * Buttons constructor
   * @private
   */
  _constructor: function() {
    var e = this, t = this.s.dt, n = t.settings()[0], r = this.c.buttons;
    n._buttons || (n._buttons = []), n._buttons.push({
      inst: this,
      name: this.c.name
    });
    for (var i = 0, a = r.length; i < a; i++)
      this.add(r[i]);
    t.on("destroy", function(o, u) {
      u === n && e.destroy();
    }), Q("body").on("keyup." + this.s.namespace, function(o) {
      if (!document.activeElement || document.activeElement === document.body) {
        var u = String.fromCharCode(o.keyCode).toLowerCase();
        e.s.listenKeys.toLowerCase().indexOf(u) !== -1 && e._keypress(u, o);
      }
    });
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Add a new button to the key press listener
   * @param {object} conf Resolved button configuration object
   * @private
   */
  _addKey: function(e) {
    e.key && (this.s.listenKeys += Q.isPlainObject(e.key) ? e.key.key : e.key);
  },
  /**
   * Insert the buttons into the container. Call without parameters!
   * @param  {node} [container] Recursive only - Insert point
   * @param  {array} [buttons] Recursive only - Buttons array
   * @private
   */
  _draw: function(e, t) {
    e || (e = this.dom.container, t = this.s.buttons), e.children().detach();
    for (var n = 0, r = t.length; n < r; n++)
      e.append(t[n].inserter), e.append(" "), t[n].buttons && t[n].buttons.length && this._draw(t[n].collection, t[n].buttons);
  },
  /**
   * Create buttons from an array of buttons
   * @param  {array} attachTo Buttons array to attach to
   * @param  {object} button Button definition
   * @param  {boolean} inCollection true if the button is in a collection
   * @private
   */
  _expandButton: function(e, t, n, r, i, a, o) {
    var u = this.s.dt, v = !1, b = this.c.dom.collection, m = Array.isArray(t) ? t : [t], x;
    t === void 0 && (m = Array.isArray(n) ? n : [n]);
    for (var _ = 0, T = m.length; _ < T; _++) {
      var N = this._resolveExtends(m[_]);
      if (N) {
        if (v = !!(N.config && N.config.split), Array.isArray(N)) {
          this._expandButton(
            e,
            N,
            D !== void 0 && D.conf !== void 0 ? D.conf.split : void 0,
            r,
            o !== void 0 && o.split !== void 0,
            a,
            o
          );
          continue;
        }
        var D = this._buildButton(
          N,
          r,
          N.split !== void 0 || N.config !== void 0 && N.config.split !== void 0,
          i
        );
        if (D) {
          if (a != null ? (e.splice(a, 0, D), a++) : e.push(D), D.conf.dropIcon && !D.conf.split && Q(D.node).addClass(this.c.dom.button.dropClass).append(this.c.dom.button.dropHtml), D.conf.buttons && (D.collection = Q(
            "<" + b.container.content.tag + "/>"
          ), D.conf._collection = D.collection, this._expandButton(
            D.buttons,
            D.conf.buttons,
            D.conf.split,
            !v,
            v,
            a,
            D.conf
          )), D.conf.split) {
            D.collection = Q("<" + b.container.tag + "/>"), D.conf._collection = D.collection;
            for (var p = 0; p < D.conf.split.length; p++) {
              var l = D.conf.split[p];
              typeof l == "object" && (l.parent = o, l.collectionLayout === void 0 && (l.collectionLayout = D.conf.collectionLayout), l.dropup === void 0 && (l.dropup = D.conf.dropup), l.fade === void 0 && (l.fade = D.conf.fade));
            }
            this._expandButton(
              D.buttons,
              D.conf.buttons,
              D.conf.split,
              !v,
              v,
              a,
              D.conf
            );
          }
          D.conf.parent = o, N.init && N.init.call(u.button(D.node), u, Q(D.node), N), x = D.node;
        }
      }
    }
    return x;
  },
  /**
   * Create an individual button
   * @param  {object} config            Resolved button configuration
   * @param  {boolean} inCollection `true` if a collection button
   * @return {object} Completed button description object
   * @private
   */
  _buildButton: function(e, t, n, r) {
    var i = this, a = this.c.dom, o, u = this.s.dt, v = !1, b = function(F) {
      return typeof F == "function" ? F(u, _, e) : F;
    }, m = Q.extend(!0, {}, a.button);
    if (t && n && a.collection.split ? Q.extend(!0, m, a.collection.split.action) : r || t ? Q.extend(!0, m, a.collection.button) : n && Q.extend(!0, m, a.split.button), e.spacer) {
      var x = Q("<" + m.spacer.tag + "/>").addClass(
        "dt-button-spacer " + e.style + " " + m.spacer.className
      ).html(b(e.text));
      return {
        conf: e,
        node: x,
        nodeChild: null,
        inserter: x,
        buttons: [],
        inCollection: t,
        isSplit: n,
        collection: null,
        textNode: x
      };
    }
    if (e.available && !e.available(u, e) && !e.html)
      return !1;
    var _;
    if (e.html)
      _ = Q(e.html);
    else {
      var T = function(F, S, A, P, L) {
        P.action.call(S.button(A), F, S, A, P, L), Q(S.table().node()).triggerHandler("buttons-action.dt", [
          S.button(A),
          S,
          A,
          P
        ]);
      }, N = function(F, S, A, P) {
        P.async ? (i.processing(A[0], !0), setTimeout(function() {
          T(F, S, A, P, function() {
            i.processing(A[0], !1);
          });
        }, P.async)) : T(F, S, A, P, function() {
        });
      }, D = e.tag || m.tag, p = e.clickBlurs === void 0 ? !0 : e.clickBlurs;
      if (_ = Q("<" + D + "/>").addClass(m.className).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function(F) {
        F.preventDefault(), !_.hasClass(m.disabled) && e.action && N(F, u, _, e), p && _.trigger("blur");
      }).on("keypress.dtb", function(F) {
        F.keyCode === 13 && (F.preventDefault(), !_.hasClass(m.disabled) && e.action && N(F, u, _, e));
      }), D.toLowerCase() === "a" && _.attr("href", "#"), D.toLowerCase() === "button" && _.attr("type", "button"), m.liner.tag) {
        var l = m.liner.tag.toLowerCase(), d = Q("<" + l + "/>").html(b(e.text)).addClass(m.liner.className);
        l === "a" && d.attr("href", "#"), (l === "a" || l === "button") && (d.attr("tabindex", this.s.dt.settings()[0].iTabIndex), v = !0), _.append(d), o = d;
      } else
        _.html(b(e.text)), o = _;
      v || _.attr("tabindex", this.s.dt.settings()[0].iTabIndex), e.enabled === !1 && _.addClass(m.disabled), e.className && _.addClass(e.className), e.titleAttr && _.attr("title", b(e.titleAttr)), e.attr && _.attr(e.attr), e.namespace || (e.namespace = ".dt-button-" + qf++), e.config !== void 0 && e.config.split && (e.split = e.config.split);
    }
    var y = this.c.dom.buttonContainer, E;
    y && y.tag ? E = Q("<" + y.tag + "/>").addClass(y.className).append(_) : E = _, this._addKey(e), this.c.buttonCreated && (E = this.c.buttonCreated(e, E));
    var O;
    if (n) {
      var f = t ? Q.extend(!0, this.c.dom.split, this.c.dom.collection.split) : this.c.dom.split, H = f.wrapper;
      O = Q("<" + H.tag + "/>").addClass(H.className).append(_);
      var Y = Q.extend(e, {
        autoClose: !0,
        align: f.dropdown.align,
        attr: {
          "aria-haspopup": "dialog",
          "aria-expanded": !1
        },
        className: f.dropdown.className,
        closeButton: !1,
        splitAlignClass: f.dropdown.splitAlignClass,
        text: f.dropdown.text
      });
      this._addKey(Y);
      var q = function(F, S, A, P) {
        ot.split.action.call(
          S.button(O),
          F,
          S,
          A,
          P
        ), Q(S.table().node()).triggerHandler("buttons-action.dt", [
          S.button(A),
          S,
          A,
          P
        ]), A.attr("aria-expanded", !0);
      }, K = Q(
        '<button class="' + f.dropdown.className + ' dt-button"></button>'
      ).html(this.c.dom.button.dropHtml).addClass(this.c.dom.button.dropClass).on("click.dtb", function(F) {
        F.preventDefault(), F.stopPropagation(), K.hasClass(m.disabled) || q(F, u, K, Y), p && K.trigger("blur");
      }).on("keypress.dtb", function(F) {
        F.keyCode === 13 && (F.preventDefault(), K.hasClass(m.disabled) || q(F, u, K, Y));
      });
      e.split.length === 0 && K.addClass("dtb-hide-drop"), O.append(K).attr(Y.attr);
    }
    var ne = n ? O.get(0) : _.get(0);
    return {
      conf: e,
      node: ne,
      nodeChild: ne && ne.children && ne.children.length ? ne.children[0] : null,
      inserter: n ? O : E,
      buttons: [],
      inCollection: t,
      isSplit: n,
      inSplit: r,
      collection: null,
      textNode: o
    };
  },
  /**
   * Spin over buttons checking if splits should be enabled or not.
   * @param {*} buttons Array of buttons to check
   */
  _checkSplitEnable: function(e) {
    e || (e = this.s.buttons);
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      if (n.isSplit) {
        var r = n.node.childNodes[1];
        this._checkAnyEnabled(n.buttons) ? Q(r).removeClass(this.c.dom.button.disabled).prop("disabled", !1) : Q(r).addClass(this.c.dom.button.disabled).prop("disabled", !1);
      } else
        n.isCollection && this._checkSplitEnable(n.buttons);
    }
  },
  /**
   * Check an array of buttons and see if any are enabled in it
   * @param {*} buttons Button array
   * @returns true if a button is enabled, false otherwise
   */
  _checkAnyEnabled: function(e) {
    for (var t = 0; t < e.length; t++)
      if (!e[t].disabled)
        return !0;
    return !1;
  },
  /**
   * Get the button object from a node (recursive)
   * @param  {node} node Button node
   * @param  {array} [buttons] Button array, uses base if not defined
   * @return {object} Button object
   * @private
   */
  _nodeToButton: function(e, t) {
    t || (t = this.s.buttons);
    for (var n = 0, r = t.length; n < r; n++) {
      if (t[n].node === e || t[n].nodeChild === e)
        return t[n];
      if (t[n].buttons.length) {
        var i = this._nodeToButton(e, t[n].buttons);
        if (i)
          return i;
      }
    }
  },
  /**
   * Get container array for a button from a button node (recursive)
   * @param  {node} node Button node
   * @param  {array} [buttons] Button array, uses base if not defined
   * @return {array} Button's host array
   * @private
   */
  _nodeToHost: function(e, t) {
    t || (t = this.s.buttons);
    for (var n = 0, r = t.length; n < r; n++) {
      if (t[n].node === e)
        return t;
      if (t[n].buttons.length) {
        var i = this._nodeToHost(e, t[n].buttons);
        if (i)
          return i;
      }
    }
  },
  /**
   * Handle a key press - determine if any button's key configured matches
   * what was typed and trigger the action if so.
   * @param  {string} character The character pressed
   * @param  {object} e Key event that triggered this call
   * @private
   */
  _keypress: function(e, t) {
    if (!t._buttonsHandled) {
      var n = function(i, a) {
        if (i.key) {
          if (i.key === e)
            t._buttonsHandled = !0, Q(a).click();
          else if (Q.isPlainObject(i.key)) {
            if (i.key.key !== e || i.key.shiftKey && !t.shiftKey || i.key.altKey && !t.altKey || i.key.ctrlKey && !t.ctrlKey || i.key.metaKey && !t.metaKey)
              return;
            t._buttonsHandled = !0, Q(a).click();
          }
        }
      }, r = function(i) {
        for (var a = 0, o = i.length; a < o; a++)
          n(i[a].conf, i[a].node), i[a].buttons.length && r(i[a].buttons);
      };
      r(this.s.buttons);
    }
  },
  /**
   * Remove a key from the key listener for this instance (to be used when a
   * button is removed)
   * @param  {object} conf Button configuration
   * @private
   */
  _removeKey: function(e) {
    if (e.key) {
      var t = Q.isPlainObject(e.key) ? e.key.key : e.key, n = this.s.listenKeys.split(""), r = Q.inArray(t, n);
      n.splice(r, 1), this.s.listenKeys = n.join("");
    }
  },
  /**
   * Resolve a button configuration
   * @param  {string|function|object} conf Button config to resolve
   * @return {object} Button configuration
   * @private
   */
  _resolveExtends: function(e) {
    var t = this, n = this.s.dt, r, i, a = function(m) {
      for (var x = 0; !Q.isPlainObject(m) && !Array.isArray(m); ) {
        if (m === void 0)
          return;
        if (typeof m == "function") {
          if (m = m.call(t, n, e), !m)
            return !1;
        } else if (typeof m == "string") {
          if (!ot[m])
            return { html: m };
          m = ot[m];
        }
        if (x++, x > 30)
          throw "Buttons: Too many iterations";
      }
      return Array.isArray(m) ? m : Q.extend({}, m);
    };
    for (e = a(e); e && e.extend; ) {
      if (!ot[e.extend])
        throw "Cannot extend unknown button type: " + e.extend;
      var o = a(ot[e.extend]);
      if (Array.isArray(o))
        return o;
      if (!o)
        return !1;
      var u = o.className;
      e.config !== void 0 && o.config !== void 0 && (e.config = Q.extend({}, o.config, e.config)), e = Q.extend({}, o, e), u && e.className !== u && (e.className = u + " " + e.className), e.extend = o.extend;
    }
    var v = e.postfixButtons;
    if (v)
      for (e.buttons || (e.buttons = []), r = 0, i = v.length; r < i; r++)
        e.buttons.push(v[r]);
    var b = e.prefixButtons;
    if (b)
      for (e.buttons || (e.buttons = []), r = 0, i = b.length; r < i; r++)
        e.buttons.splice(r, 0, b[r]);
    return e;
  },
  /**
   * Display (and replace if there is an existing one) a popover attached to a button
   * @param {string|node} content Content to show
   * @param {DataTable.Api} hostButton DT API instance of the button
   * @param {object} inOpts Options (see object below for all options)
   */
  _popover: function(e, t, n) {
    var r = t, i = this.c, a = !1, o = Q.extend(
      {
        align: "button-left",
        // button-right, dt-container, split-left, split-right
        autoClose: !1,
        background: !0,
        backgroundClassName: "dt-button-background",
        closeButton: !0,
        containerClassName: i.dom.collection.container.className,
        contentClassName: i.dom.collection.container.content.className,
        collectionLayout: "",
        collectionTitle: "",
        dropup: !1,
        fade: 400,
        popoverTitle: "",
        rightAlignClassName: "dt-button-right",
        tag: i.dom.collection.container.tag
      },
      n
    ), u = o.tag + "." + o.containerClassName.replace(/ /g, "."), v = t.node(), b = o.collectionLayout.includes("fixed") ? Q("body") : t.node(), m = function() {
      a = !0, Na(Q(u), o.fade, function() {
        Q(this).detach();
      }), Q(
        r.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
      ).attr("aria-expanded", "false"), Q("div.dt-button-background").off("click.dtb-collection"), Ae.background(
        !1,
        o.backgroundClassName,
        o.fade,
        b
      ), Q(window).off("resize.resize.dtb-collection"), Q("body").off(".dtb-collection"), r.off("buttons-action.b-internal"), r.off("destroy.dtb-popover"), Q("body").trigger("buttons-popover-hide.dt");
    };
    if (e === !1) {
      m();
      return;
    }
    var x = Q(
      r.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
    );
    if (x.length && (b.closest(u).length && (b = x.eq(0)), m()), o.sort) {
      var _ = Q("button", e).map(function(F, S) {
        return {
          text: Q(S).text(),
          el: S
        };
      }).toArray();
      _.sort(function(F, S) {
        return F.text.localeCompare(S.text);
      }), Q(e).append(_.map(function(F) {
        return F.el;
      }));
    }
    var T = Q(".dt-button", e).length, N = "";
    T === 3 ? N = "dtb-b3" : T === 2 ? N = "dtb-b2" : T === 1 && (N = "dtb-b1");
    var D = Q("<" + o.tag + "/>").addClass(o.containerClassName).addClass(o.collectionLayout).addClass(o.splitAlignClass).addClass(N).css("display", "none").attr({
      "aria-modal": !0,
      role: "dialog"
    });
    e = Q(e).addClass(o.contentClassName).attr("role", "menu").appendTo(D), v.attr("aria-expanded", "true"), b.parents("body")[0] !== document.body && (b = Q(document.body).children("div, section, p").last()), o.popoverTitle ? D.prepend(
      '<div class="dt-button-collection-title">' + o.popoverTitle + "</div>"
    ) : o.collectionTitle && D.prepend(
      '<div class="dt-button-collection-title">' + o.collectionTitle + "</div>"
    ), o.closeButton && D.prepend('<div class="dtb-popover-close">&times;</div>').addClass("dtb-collection-closeable"), Ea(D.insertAfter(b), o.fade);
    var p = Q(t.table().container()), l = D.css("position");
    if ((o.span === "container" || o.align === "dt-container") && (b = b.parent(), D.css("width", p.width())), l === "absolute") {
      var d = Q(b[0].offsetParent), y = b.position(), E = b.offset(), O = d.offset(), f = d.position(), H = window.getComputedStyle(d[0]);
      O.height = d.outerHeight(), O.width = d.width() + parseFloat(H.paddingLeft), O.right = O.left + O.width, O.bottom = O.top + O.height;
      var Y = y.top + b.outerHeight(), q = y.left;
      D.css({
        top: Y,
        left: q
      }), H = window.getComputedStyle(D[0]);
      var K = D.offset();
      K.height = D.outerHeight(), K.width = D.outerWidth(), K.right = K.left + K.width, K.bottom = K.top + K.height, K.marginTop = parseFloat(H.marginTop), K.marginBottom = parseFloat(H.marginBottom), o.dropup && (Y = y.top - K.height - K.marginTop - K.marginBottom), (o.align === "button-right" || D.hasClass(o.rightAlignClassName)) && (q = y.left - K.width + b.outerWidth()), (o.align === "dt-container" || o.align === "container") && q < y.left && (q = -y.left), f.left + q + K.width > Q(window).width() && (q = Q(window).width() - K.width - f.left), E.left + q < 0 && (q = -E.left), f.top + Y + K.height > Q(window).height() + Q(window).scrollTop() && (Y = y.top - K.height - K.marginTop - K.marginBottom), d.offset().top + Y < Q(window).scrollTop() && (Y = y.top + b.outerHeight()), D.css({
        top: Y,
        left: q
      });
    } else {
      var ne = function() {
        var F = Q(window).height() / 2, S = D.height() / 2;
        S > F && (S = F), D.css("marginTop", S * -1);
      };
      ne(), Q(window).on("resize.dtb-collection", function() {
        ne();
      });
    }
    o.background && Ae.background(
      !0,
      o.backgroundClassName,
      o.fade,
      o.backgroundHost || b
    ), Q("div.dt-button-background").on(
      "click.dtb-collection",
      function() {
      }
    ), o.autoClose && setTimeout(function() {
      r.on("buttons-action.b-internal", function(F, S, A, P) {
        P[0] !== b[0] && m();
      });
    }, 0), Q(D).trigger("buttons-popover.dt"), r.on("destroy.dtb-popover", m), setTimeout(function() {
      a = !1, Q("body").on("click.dtb-collection", function(F) {
        if (!a) {
          var S = Q.fn.addBack ? "addBack" : "andSelf", A = Q(F.target).parent()[0];
          (!Q(F.target).parents()[S]().filter(e).length && !Q(A).hasClass("dt-buttons") || Q(F.target).hasClass("dt-button-background")) && m();
        }
      }).on("keyup.dtb-collection", function(F) {
        F.keyCode === 27 && m();
      }).on("keydown.dtb-collection", function(F) {
        var S = Q("a, button", e), A = document.activeElement;
        F.keyCode === 9 && (S.index(A) === -1 ? (S.first().focus(), F.preventDefault()) : F.shiftKey ? A === S[0] && (S.last().focus(), F.preventDefault()) : A === S.last()[0] && (S.first().focus(), F.preventDefault()));
      });
    }, 0);
  }
});
Ae.background = function(e, t, n, r) {
  n === void 0 && (n = 400), r || (r = document.body), e ? Ea(
    Q("<div/>").addClass(t).css("display", "none").insertAfter(r),
    n
  ) : Na(Q("div." + t), n, function() {
    Q(this).removeClass(t).remove();
  });
};
Ae.instanceSelector = function(e, t) {
  if (e == null)
    return Q.map(t, function(a) {
      return a.inst;
    });
  var n = [], r = Q.map(t, function(a) {
    return a.name;
  }), i = function(a) {
    if (Array.isArray(a)) {
      for (var o = 0, u = a.length; o < u; o++)
        i(a[o]);
      return;
    }
    if (typeof a == "string")
      if (a.indexOf(",") !== -1)
        i(a.split(","));
      else {
        var v = Q.inArray(a.trim(), r);
        v !== -1 && n.push(t[v].inst);
      }
    else if (typeof a == "number")
      n.push(t[a].inst);
    else if (typeof a == "object" && a.nodeName)
      for (var b = 0; b < t.length; b++)
        t[b].inst.dom.container[0] === a && n.push(t[b].inst);
    else
      typeof a == "object" && n.push(a);
  };
  return i(e), n;
};
Ae.buttonSelector = function(e, t) {
  for (var n = [], r = function(v, b, m) {
    for (var x, _, T = 0, N = b.length; T < N; T++)
      x = b[T], x && (_ = m !== void 0 ? m + T : T + "", v.push({
        node: x.node,
        name: x.conf.name,
        idx: _
      }), x.buttons && r(v, x.buttons, _ + "-"));
  }, i = function(v, b) {
    var m, x, _ = [];
    r(_, b.s.buttons);
    var T = Q.map(_, function(d) {
      return d.node;
    });
    if (Array.isArray(v) || v instanceof Q) {
      for (m = 0, x = v.length; m < x; m++)
        i(v[m], b);
      return;
    }
    if (v == null || v === "*")
      for (m = 0, x = _.length; m < x; m++)
        n.push({
          inst: b,
          node: _[m].node
        });
    else if (typeof v == "number")
      b.s.buttons[v] && n.push({
        inst: b,
        node: b.s.buttons[v].node
      });
    else if (typeof v == "string")
      if (v.indexOf(",") !== -1) {
        var N = v.split(",");
        for (m = 0, x = N.length; m < x; m++)
          i(N[m].trim(), b);
      } else if (v.match(/^\d+(\-\d+)*$/)) {
        var D = Q.map(_, function(d) {
          return d.idx;
        });
        n.push({
          inst: b,
          node: _[Q.inArray(v, D)].node
        });
      } else if (v.indexOf(":name") !== -1) {
        var p = v.replace(":name", "");
        for (m = 0, x = _.length; m < x; m++)
          _[m].name === p && n.push({
            inst: b,
            node: _[m].node
          });
      } else
        Q(T).filter(v).each(function() {
          n.push({
            inst: b,
            node: this
          });
        });
    else if (typeof v == "object" && v.nodeName) {
      var l = Q.inArray(v, T);
      l !== -1 && n.push({
        inst: b,
        node: T[l]
      });
    }
  }, a = 0, o = e.length; a < o; a++) {
    var u = e[a];
    i(t, u);
  }
  return n;
};
Ae.stripData = function(e, t) {
  return e !== null && typeof e == "object" && e.nodeName && e.nodeType && (e = e.innerHTML), typeof e != "string" || (e = Ae.stripHtmlScript(e), e = Ae.stripHtmlComments(e), (!t || t.stripHtml) && (e = k.util.stripHtml(e)), (!t || t.trim) && (e = e.trim()), (!t || t.stripNewlines) && (e = e.replace(/\n/g, " ")), (!t || t.decodeEntities) && (na ? e = na(e) : (dl.innerHTML = e, e = dl.value)), (!t || t.escapeExcelFormula) && e.match(/^[=@\t\r]/) && (e = "'" + e)), e;
};
Ae.entityDecoder = function(e) {
  na = e;
};
Ae.stripHtmlComments = function(e) {
  var t;
  do
    t = e, e = e.replace(/(<!--.*?--!?>)|(<!--[\S\s]+?--!?>)|(<!--[\S\s]*?$)/g, "");
  while (e !== t);
  return e;
};
Ae.stripHtmlScript = function(e) {
  var t;
  do
    t = e, e = e.replace(/<script\b[^<]*(?:(?!<\/script[^>]*>)<[^<]*)*<\/script[^>]*>/gi, "");
  while (e !== t);
  return e;
};
Ae.defaults = {
  buttons: ["copy", "excel", "csv", "pdf", "print"],
  name: "main",
  tabIndex: 0,
  dom: {
    container: {
      tag: "div",
      className: "dt-buttons"
    },
    collection: {
      container: {
        // The element used for the dropdown
        className: "dt-button-collection",
        content: {
          className: "",
          tag: "div"
        },
        tag: "div"
      }
      // optionally
      // , button: IButton - buttons inside the collection container
      // , split: ISplit - splits inside the collection container
    },
    button: {
      tag: "button",
      className: "dt-button",
      active: "dt-button-active",
      // class name
      disabled: "disabled",
      // class name
      spacer: {
        className: "dt-button-spacer",
        tag: "span"
      },
      liner: {
        tag: "span",
        className: ""
      },
      dropClass: "",
      dropHtml: '<span class="dt-button-down-arrow">&#x25BC;</span>'
    },
    split: {
      action: {
        // action button
        className: "dt-button-split-drop-button dt-button",
        tag: "button"
      },
      dropdown: {
        // button to trigger the dropdown
        align: "split-right",
        className: "dt-button-split-drop",
        splitAlignClass: "dt-button-split-left",
        tag: "button"
      },
      wrapper: {
        // wrap around both
        className: "dt-button-split",
        tag: "div"
      }
    }
  }
};
Ae.version = "3.2.6";
Q.extend(ot, {
  collection: {
    text: function(e) {
      return e.i18n("buttons.collection", "Collection");
    },
    className: "buttons-collection",
    closeButton: !1,
    dropIcon: !0,
    init: function(e, t) {
      t.attr("aria-expanded", !1);
    },
    action: function(e, t, n, r) {
      r._collection.parents("body").length ? this.popover(!1, r) : this.popover(r._collection, r), e.type === "keypress" && Q("a, button", r._collection).eq(0).focus();
    },
    attr: {
      "aria-haspopup": "dialog"
    }
    // Also the popover options, defined in Buttons.popover
  },
  split: {
    text: function(e) {
      return e.i18n("buttons.split", "Split");
    },
    className: "buttons-split",
    closeButton: !1,
    init: function(e, t) {
      return t.attr("aria-expanded", !1);
    },
    action: function(e, t, n, r) {
      this.popover(r._collection, r);
    },
    attr: {
      "aria-haspopup": "dialog"
    }
    // Also the popover options, defined in Buttons.popover
  },
  copy: function() {
    if (ot.copyHtml5)
      return "copyHtml5";
  },
  csv: function(e, t) {
    if (ot.csvHtml5 && ot.csvHtml5.available(e, t))
      return "csvHtml5";
  },
  excel: function(e, t) {
    if (ot.excelHtml5 && ot.excelHtml5.available(e, t))
      return "excelHtml5";
  },
  pdf: function(e, t) {
    if (ot.pdfHtml5 && ot.pdfHtml5.available(e, t))
      return "pdfHtml5";
  },
  pageLength: function(e) {
    var t = e.settings()[0].aLengthMenu, n = [], r = [], i = function(u) {
      return u.i18n(
        "buttons.pageLength",
        {
          "-1": "Show all rows",
          _: "Show %d rows"
        },
        u.page.len()
      );
    };
    if (Array.isArray(t[0]))
      n = t[0], r = t[1];
    else
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        Q.isPlainObject(o) ? (n.push(o.value), r.push(o.label)) : (n.push(o), r.push(o));
      }
    return {
      extend: "collection",
      text: i,
      className: "buttons-page-length",
      autoClose: !0,
      buttons: Q.map(n, function(u, v) {
        return {
          text: r[v],
          className: "button-page-length",
          action: function(b, m) {
            m.page.len(u).draw();
          },
          init: function(b, m, x) {
            var _ = this, T = function() {
              _.active(b.page.len() === u);
            };
            b.on("length.dt" + x.namespace, T), T();
          },
          destroy: function(b, m, x) {
            b.off("length.dt" + x.namespace);
          }
        };
      }),
      init: function(u, v, b) {
        var m = this;
        u.on("length.dt" + b.namespace, function() {
          m.text(b.text);
        });
      },
      destroy: function(u, v, b) {
        u.off("length.dt" + b.namespace);
      }
    };
  },
  spacer: {
    style: "empty",
    spacer: !0,
    text: function(e) {
      return e.i18n("buttons.spacer", "");
    }
  }
});
k.Api.register("buttons()", function(e, t) {
  t === void 0 && (t = e, e = void 0), this.selector.buttonGroup = e;
  var n = this.iterator(
    !0,
    "table",
    function(r) {
      if (r._buttons)
        return Ae.buttonSelector(
          Ae.instanceSelector(e, r._buttons),
          t
        );
    },
    !0
  );
  return n._groupSelector = e, n;
});
k.Api.register("button()", function(e, t) {
  var n = this.buttons(e, t);
  return n.length > 1 && n.splice(1, n.length), n;
});
k.Api.registerPlural(
  "buttons().active()",
  "button().active()",
  function(e) {
    return e === void 0 ? this.map(function(t) {
      return t.inst.active(t.node);
    }) : this.each(function(t) {
      t.inst.active(t.node, e);
    });
  }
);
k.Api.registerPlural(
  "buttons().action()",
  "button().action()",
  function(e) {
    return e === void 0 ? this.map(function(t) {
      return t.inst.action(t.node);
    }) : this.each(function(t) {
      t.inst.action(t.node, e);
    });
  }
);
k.Api.registerPlural(
  "buttons().collectionRebuild()",
  "button().collectionRebuild()",
  function(e) {
    return this.each(function(t) {
      for (var n = 0; n < e.length; n++)
        typeof e[n] == "object" && (e[n].parentConf = t);
      t.inst.collectionRebuild(t.node, e);
    });
  }
);
k.Api.register(
  ["buttons().enable()", "button().enable()"],
  function(e) {
    return this.each(function(t) {
      t.inst.enable(t.node, e);
    });
  }
);
k.Api.register(
  ["buttons().disable()", "button().disable()"],
  function() {
    return this.each(function(e) {
      e.inst.disable(e.node);
    });
  }
);
k.Api.register("button().index()", function() {
  var e = null;
  return this.each(function(t) {
    var n = t.inst.index(t.node);
    n !== null && (e = n);
  }), e;
});
k.Api.registerPlural(
  "buttons().nodes()",
  "button().node()",
  function() {
    var e = Q();
    return Q(
      this.each(function(t) {
        e = e.add(t.inst.node(t.node));
      })
    ), e;
  }
);
k.Api.registerPlural(
  "buttons().processing()",
  "button().processing()",
  function(e) {
    return e === void 0 ? this.map(function(t) {
      return t.inst.processing(t.node);
    }) : this.each(function(t) {
      t.inst.processing(t.node, e);
    });
  }
);
k.Api.registerPlural(
  "buttons().text()",
  "button().text()",
  function(e) {
    return e === void 0 ? this.map(function(t) {
      return t.inst.text(t.node);
    }) : this.each(function(t) {
      t.inst.text(t.node, e);
    });
  }
);
k.Api.registerPlural(
  "buttons().trigger()",
  "button().trigger()",
  function() {
    return this.each(function(e) {
      e.inst.node(e.node).trigger("click");
    });
  }
);
k.Api.register("button().popover()", function(e, t) {
  return this.map(function(n) {
    return n.inst._popover(e, this.button(this[0].node), t);
  });
});
k.Api.register("buttons().containers()", function() {
  var e = Q(), t = this._groupSelector;
  return this.iterator(!0, "table", function(n) {
    if (n._buttons)
      for (var r = Ae.instanceSelector(t, n._buttons), i = 0, a = r.length; i < a; i++)
        e = e.add(r[i].container());
  }), e;
});
k.Api.register("buttons().container()", function() {
  return this.containers().eq(0);
});
k.Api.register("button().add()", function(e, t, n) {
  var r = this.context, i;
  if (r.length) {
    var a = Ae.instanceSelector(
      this._groupSelector,
      r[0]._buttons
    );
    a.length && (i = a[0].add(t, e, n));
  }
  return i ? this.button(this._groupSelector, i) : this;
});
k.Api.register("buttons().destroy()", function() {
  return this.pluck("inst").unique().each(function(e) {
    e.destroy();
  }), this;
});
k.Api.registerPlural(
  "buttons().remove()",
  "buttons().remove()",
  function() {
    return this.each(function(e) {
      e.inst.remove(e.node);
    }), this;
  }
);
var Nr;
k.Api.register("buttons.info()", function(e, t, n) {
  var r = this;
  return e === !1 ? (this.off("destroy.btn-info"), Na(Q("#datatables_buttons_info"), 400, function() {
    Q(this).remove();
  }), clearTimeout(Nr), Nr = null, this) : (Nr && clearTimeout(Nr), Q("#datatables_buttons_info").length && Q("#datatables_buttons_info").remove(), e = e ? "<h2>" + e + "</h2>" : "", Ea(
    Q('<div id="datatables_buttons_info" class="dt-button-info"/>').html(e).append(
      Q("<div/>")[typeof t == "string" ? "html" : "append"](
        t
      )
    ).css("display", "none").appendTo("body")
  ), n !== void 0 && n !== 0 && (Nr = setTimeout(function() {
    r.buttons.info(!1);
  }, n)), this.on("destroy.btn-info", function() {
    r.buttons.info(!1);
  }), this);
});
k.Api.register("buttons.exportData()", function(e) {
  if (this.context.length)
    return Uf(new k.Api(this.context[0]), e);
});
k.Api.register("buttons.exportInfo()", function(e) {
  return e || (e = {}), {
    filename: Gf(e, this),
    title: Kf(e, this),
    messageTop: ul(this, e, e.message || e.messageTop, "top"),
    messageBottom: ul(this, e, e.messageBottom, "bottom")
  };
});
var Gf = function(e, t) {
  var n = e.filename === "*" && e.title !== "*" && e.title !== void 0 && e.title !== null && e.title !== "" ? e.title : e.filename;
  if (typeof n == "function" && (n = n(e, t)), n == null)
    return null;
  n.indexOf("*") !== -1 && (n = n.replace(/\*/g, Q("head > title").text()).trim()), n = n.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");
  var r = Oa(e.extension, e, t);
  return r || (r = ""), n + r;
}, Oa = function(e, t, n) {
  return e == null ? null : typeof e == "function" ? e(t, n) : e;
}, Kf = function(e, t) {
  var n = Oa(e.title, e, t);
  return n === null ? null : n.indexOf("*") !== -1 ? n.replace(/\*/g, Q("head > title").text() || "Exported data") : n;
}, ul = function(e, t, n, r) {
  var i = Oa(n, t, e);
  if (i === null)
    return null;
  var a = Q("caption", e.table().container()).eq(0);
  if (i === "*") {
    var o = a.css("caption-side");
    return o !== r ? null : a.length ? a.text() : "";
  }
  return i;
}, dl = Q("<textarea/>")[0], Uf = function(e, t) {
  var n = Q.extend(
    !0,
    {},
    {
      rows: null,
      columns: "",
      modifier: {
        search: "applied",
        order: "applied"
      },
      orthogonal: "display",
      stripHtml: !0,
      stripNewlines: !0,
      decodeEntities: !0,
      escapeExcelFormula: !1,
      trim: !0,
      format: {
        header: function(E) {
          return Ae.stripData(E, n);
        },
        footer: function(E) {
          return Ae.stripData(E, n);
        },
        body: function(E) {
          return Ae.stripData(E, n);
        }
      },
      customizeData: null,
      customizeZip: null
    },
    t
  ), r = e.columns(n.columns).indexes().map(function(E) {
    var O = e.column(E);
    return n.format.header(O.title(), E, O.header());
  }).toArray(), i = e.table().footer() ? e.columns(n.columns).indexes().map(function(E) {
    var O = e.column(E).footer(), f = "";
    if (O) {
      var H = Q(".dt-column-title", O);
      f = H.length ? H.html() : Q(O).html();
    }
    return n.format.footer(f, E, O);
  }).toArray() : null, a = Q.extend({}, n.modifier);
  e.select && typeof e.select.info == "function" && a.selected === void 0 && e.rows(n.rows, Q.extend({ selected: !0 }, a)).any() && Q.extend(a, { selected: !0 });
  for (var o = e.rows(n.rows, a).indexes().toArray(), u = e.cells(o, n.columns, {
    order: a.order
  }), v = u.render(n.orthogonal).toArray(), b = u.nodes().toArray(), m = u.indexes().toArray(), x = e.columns(n.columns).count(), _ = x > 0 ? v.length / x : 0, T = [], N = 0, D = 0, p = _; D < p; D++) {
    for (var l = [x], d = 0; d < x; d++)
      l[d] = n.format.body(
        v[N],
        m[N].row,
        m[N].column,
        b[N]
      ), N++;
    T[D] = l;
  }
  var y = {
    header: r,
    headerStructure: fl(
      n.format.header,
      e.table().header.structure(n.columns)
    ),
    footer: i,
    footerStructure: fl(
      n.format.footer,
      e.table().footer.structure(n.columns)
    ),
    body: T
  };
  return n.customizeData && n.customizeData(y), y;
};
function fl(e, t) {
  for (var n = 0; n < t.length; n++)
    for (var r = 0; r < t[n].length; r++) {
      var i = t[n][r];
      i && (i.title = e(
        i.title,
        r,
        i.cell
      ));
    }
  return t;
}
Q.fn.dataTable.Buttons = Ae;
Q.fn.DataTable.Buttons = Ae;
Q(document).on("init.dt plugin-init.dt", function(e, t) {
  if (e.namespace === "dt") {
    var n = t.oInit.buttons || k.defaults.buttons;
    n && !t._buttons && new Ae(t, n).container();
  }
});
function Lc(e, t) {
  var n = new k.Api(e), r = t || n.init().buttons || k.defaults.buttons;
  return new Ae(n, r).container();
}
k.ext.feature.push({
  fnInit: Lc,
  cFeature: "B"
});
k.feature && k.feature.register("buttons", Lc);
/*! Bootstrap integration for DataTables' Buttons
 * © SpryMedia Ltd - datatables.net/license
 */
let hl = Me;
hl.extend(!0, k.Buttons.defaults, {
  dom: {
    container: {
      className: "dt-buttons btn-group flex-wrap"
    },
    button: {
      className: "btn btn-secondary",
      active: "active",
      dropHtml: "",
      dropClass: "dropdown-toggle"
    },
    collection: {
      container: {
        tag: "div",
        className: "dt-button-collection",
        content: {
          tag: "ul",
          className: "dropdown-menu show"
        }
      },
      closeButton: !1,
      button: {
        tag: "li",
        className: "dt-button",
        active: "dt-button-active-a",
        disabled: "disabled",
        liner: {
          tag: "a",
          className: "dropdown-item"
        },
        spacer: {
          className: "divider",
          tag: "li"
        }
      }
    },
    split: {
      action: {
        tag: "a",
        className: "btn btn-secondary dt-button-split-drop-button",
        closeButton: !1
      },
      dropdown: {
        tag: "button",
        className: "btn btn-secondary dt-button-split-drop dropdown-toggle-split",
        closeButton: !1,
        align: "split-left",
        splitAlignClass: "dt-button-split-left"
      },
      wrapper: {
        tag: "div",
        className: "dt-button-split btn-group",
        closeButton: !1
      }
    }
  },
  buttonCreated: function(e, t) {
    return e.buttons ? hl('<div class="btn-group"/>').append(t) : t;
  }
});
k.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";
/*! Responsive 3.0.8
 * © SpryMedia Ltd - datatables.net/license
 */
let ie = Me;
var st = function(e, t) {
  if (!k.versionCheck || !k.versionCheck("2"))
    throw "DataTables Responsive requires DataTables 2 or newer";
  this.s = {
    childNodeStore: {},
    columns: [],
    current: [],
    dt: new k.Api(e)
  }, !this.s.dt.settings()[0].responsive && (t && typeof t.details == "string" ? t.details = { type: t.details } : t && t.details === !1 ? t.details = { type: !1 } : t && t.details === !0 && (t.details = { type: "inline" }), this.c = ie.extend(
    !0,
    {},
    st.defaults,
    k.defaults.responsive,
    t
  ), e.responsive = this, this._constructor());
};
ie.extend(st.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * Initialise the Responsive instance
   *
   * @private
   */
  _constructor: function() {
    var e = this, t = this.s.dt, n = ie(window).innerWidth();
    t.settings()[0]._responsive = this, ie(window).on(
      "orientationchange.dtr",
      k.util.throttle(function() {
        var i = ie(window).innerWidth();
        i !== n && (e._resize(), n = i);
      })
    ), t.on("row-created.dtr", function(i, a, o, u) {
      ie.inArray(!1, e.s.current) !== -1 && ie(">td, >th", a).each(function(v) {
        var b = t.column.index("toData", v);
        e.s.current[b] === !1 && ie(this).css("display", "none").addClass("dtr-hidden");
      });
    }), t.on("destroy.dtr", function() {
      t.off(".dtr"), ie(t.table().body()).off(".dtr"), ie(window).off("resize.dtr orientationchange.dtr"), t.cells(".dtr-control").nodes().to$().removeClass("dtr-control"), ie(t.table().node()).removeClass("dtr-inline collapsed"), ie.each(e.s.current, function(i, a) {
        a === !1 && e._setColumnVis(i, !0);
      });
    }), this.c.breakpoints.sort(function(i, a) {
      return i.width < a.width ? 1 : i.width > a.width ? -1 : 0;
    }), this._classLogic();
    var r = this.c.details;
    r.type !== !1 && (e._detailsInit(), t.on("column-visibility.dtr", function() {
      e._timer && clearTimeout(e._timer), e._timer = setTimeout(function() {
        e._timer = null, e._classLogic(), e._resizeAuto(), e._resize(!0), e._redrawChildren();
      }, 100);
    }), t.on("draw.dtr", function() {
      e._redrawChildren();
    }), ie(t.table().node()).addClass("dtr-" + r.type)), t.on("column-calc.dt", function(i, a) {
      for (var o = e.s.current, u = 0; u < o.length; u++) {
        var v = a.visible.indexOf(u);
        o[u] === !1 && v >= 0 && a.visible.splice(v, 1);
      }
    }), t.on("preXhr.dtr", function() {
      var i = [];
      t.rows().every(function() {
        this.child.isShown() && i.push(this.id(!0));
      }), t.one("draw.dtr", function() {
        e._resizeAuto(), e._resize(), t.rows(i).every(function() {
          e._detailsDisplay(this, !1);
        });
      });
    }), t.on("draw.dtr", function() {
      t.page.info().serverSide && (e.s.childNodeStore = {}), e._controlClass();
    }).ready(function() {
      e._resizeAuto(), e._resize(), t.on("column-sizing.dtr", function() {
        e._resizeAuto(), e._resize();
      });
    }), t.on("column-reorder.dtr", function(i, a, o) {
      e._classLogic(), e._resizeAuto(), e._resize(!0);
    });
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Insert a `col` tag into the correct location in a `colgroup`.
   *
   * @param {jQuery} colGroup The `colgroup` tag
   * @param {jQuery} colEl The `col` tag
   */
  _colGroupAttach: function(e, t, n) {
    var r = null;
    if (t[n].get(0).parentNode !== e[0]) {
      for (var i = n + 1; i < t.length; i++)
        if (e[0] === t[i].get(0).parentNode) {
          r = i;
          break;
        }
      r !== null ? t[n].insertBefore(t[r][0]) : e.append(t[n]);
    }
  },
  /**
   * Get and store nodes from a cell - use for node moving renderers
   *
   * @param {*} dt DT instance
   * @param {*} row Row index
   * @param {*} col Column index
   */
  _childNodes: function(e, t, n) {
    var r = t + "-" + n;
    if (this.s.childNodeStore[r])
      return this.s.childNodeStore[r];
    for (var i = [], a = e.cell(t, n).node().childNodes, o = 0, u = a.length; o < u; o++)
      i.push(a[o]);
    return this.s.childNodeStore[r] = i, i;
  },
  /**
   * Restore nodes from the cache to a table cell
   *
   * @param {*} dt DT instance
   * @param {*} row Row index
   * @param {*} col Column index
   */
  _childNodesRestore: function(e, t, n) {
    var r = t + "-" + n;
    if (this.s.childNodeStore[r]) {
      var i = e.cell(t, n).node(), a = this.s.childNodeStore[r];
      if (a.length > 0) {
        for (var o = a[0].parentNode, u = o.childNodes, v = [], b = 0, m = u.length; b < m; b++)
          v.push(u[b]);
        for (var x = 0, _ = v.length; x < _; x++)
          i.appendChild(v[x]);
      }
      this.s.childNodeStore[r] = void 0;
    }
  },
  /**
   * Calculate the visibility for the columns in a table for a given
   * breakpoint. The result is pre-determined based on the class logic if
   * class names are used to control all columns, but the width of the table
   * is also used if there are columns which are to be automatically shown
   * and hidden.
   *
   * @param  {string} breakpoint Breakpoint name to use for the calculation
   * @return {array} Array of boolean values initiating the visibility of each
   *   column.
   *  @private
   */
  _columnsVisibility: function(e) {
    var t = this.s.dt, n = this.s.columns, r, i, a = n.map(function(D, p) {
      return {
        columnIdx: p,
        priority: D.priority
      };
    }).sort(function(D, p) {
      return D.priority !== p.priority ? D.priority - p.priority : D.columnIdx - p.columnIdx;
    }), o = ie.map(n, function(D, p) {
      return t.column(p).visible() === !1 ? "not-visible" : D.auto && D.minWidth === null ? !1 : D.auto === !0 ? "-" : ie.inArray(e, D.includeIn) !== -1;
    }), u = 0;
    for (r = 0, i = o.length; r < i; r++)
      o[r] === !0 && (u += n[r].minWidth);
    var v = t.settings()[0].oScroll, b = v.sY || v.sX ? v.iBarWidth : 0, m = t.table().container().offsetWidth - b, x = m - u;
    for (r = 0, i = o.length; r < i; r++)
      n[r].control && (x -= n[r].minWidth);
    var _ = !1;
    for (r = 0, i = a.length; r < i; r++) {
      var T = a[r].columnIdx;
      o[T] === "-" && !n[T].control && n[T].minWidth && (_ || x - n[T].minWidth < 0 ? (_ = !0, o[T] = !1) : o[T] = !0, x -= n[T].minWidth);
    }
    var N = !1;
    for (r = 0, i = n.length; r < i; r++)
      if (!n[r].control && !n[r].never && o[r] === !1) {
        N = !0;
        break;
      }
    for (r = 0, i = n.length; r < i; r++)
      n[r].control && (o[r] = N), o[r] === "not-visible" && (o[r] = !1);
    return ie.inArray(!0, o) === -1 && (o[0] = !0), o;
  },
  /**
   * Create the internal `columns` array with information about the columns
   * for the table. This includes determining which breakpoints the column
   * will appear in, based upon class names in the column, which makes up the
   * vast majority of this method.
   *
   * @private
   */
  _classLogic: function() {
    var e = this, t = this.c.breakpoints, n = this.s.dt, r = n.columns().eq(0).map(function(o) {
      var u = this.column(o), v = u.header().className, b = u.init().responsivePriority, m = u.header().getAttribute("data-priority");
      return b === void 0 && (b = m == null ? 1e4 : m * 1), {
        className: v,
        includeIn: [],
        auto: !1,
        control: !1,
        never: !!v.match(/\b(dtr\-)?never\b/),
        priority: b
      };
    }), i = function(o, u) {
      var v = r[o].includeIn;
      ie.inArray(u, v) === -1 && v.push(u);
    }, a = function(o, u, v, b) {
      var m, x, _;
      if (!v)
        r[o].includeIn.push(u);
      else if (v === "max-")
        for (m = e._find(u).width, x = 0, _ = t.length; x < _; x++)
          t[x].width <= m && i(o, t[x].name);
      else if (v === "min-")
        for (m = e._find(u).width, x = 0, _ = t.length; x < _; x++)
          t[x].width >= m && i(o, t[x].name);
      else if (v === "not-")
        for (x = 0, _ = t.length; x < _; x++)
          t[x].name.indexOf(b) === -1 && i(o, t[x].name);
    };
    r.each(function(o, u) {
      for (var v = o.className.split(" "), b = !1, m = 0, x = v.length; m < x; m++) {
        var _ = v[m].trim();
        if (_ === "all" || _ === "dtr-all") {
          b = !0, o.includeIn = ie.map(t, function(T) {
            return T.name;
          });
          return;
        } else if (_ === "none" || _ === "dtr-none" || o.never) {
          b = !0;
          return;
        } else if (_ === "control" || _ === "dtr-control") {
          b = !0, o.control = !0;
          return;
        }
        ie.each(t, function(T, N) {
          var D = N.name.split("-"), p = new RegExp(
            "(min\\-|max\\-|not\\-)?(" + D[0] + ")(\\-[_a-zA-Z0-9])?"
          ), l = _.match(p);
          l && (b = !0, l[2] === D[0] && l[3] === "-" + D[1] ? a(
            u,
            N.name,
            l[1],
            l[2] + l[3]
          ) : l[2] === D[0] && !l[3] && a(u, N.name, l[1], l[2]));
        });
      }
      b || (o.auto = !0);
    }), this.s.columns = r;
  },
  /**
   * Update the cells to show the correct control class / button
   * @private
   */
  _controlClass: function() {
    if (this.c.details.type === "inline") {
      var e = this.s.dt, t = this.s.current, n = ie.inArray(!0, t);
      e.cells(
        null,
        function(r) {
          return r !== n;
        },
        { page: "current" }
      ).nodes().to$().filter(".dtr-control").removeClass("dtr-control"), n >= 0 && e.cells(null, n, { page: "current" }).nodes().to$().addClass("dtr-control");
    }
    this._tabIndexes();
  },
  /**
   * Show the details for the child row
   *
   * @param  {DataTables.Api} row    API instance for the row
   * @param  {boolean}        update Update flag
   * @private
   */
  _detailsDisplay: function(e, t) {
    var n = this, r = this.s.dt, i = this.c.details, a = function(v) {
      ie(e.node()).toggleClass("dtr-expanded", v !== !1), ie(r.table().node()).triggerHandler("responsive-display.dt", [
        r,
        e,
        v,
        t
      ]);
    };
    if (i && i.type !== !1) {
      var o = typeof i.renderer == "string" ? st.renderer[i.renderer]() : i.renderer, u = i.display(
        e,
        t,
        function() {
          return o.call(
            n,
            r,
            e[0][0],
            n._detailsObj(e[0])
          );
        },
        function() {
          a(!1);
        }
      );
      typeof u == "boolean" && a(u);
    }
  },
  /**
   * Initialisation for the details handler
   *
   * @private
   */
  _detailsInit: function() {
    var e = this, t = this.s.dt, n = this.c.details;
    n.type === "inline" && (n.target = "td.dtr-control, th.dtr-control"), ie(t.table().body()).on("keyup.dtr", "td, th", function(a) {
      let o = document.activeElement.nodeName.toLowerCase();
      a.keyCode === 13 && ie(this).data("dtr-keyboard") && (o === "td" || o === "th") && ie(this).click();
    });
    var r = n.target, i = typeof r == "string" ? r : "td, th";
    (r !== void 0 || r !== null) && ie(t.table().body()).on(
      "click.dtr mousedown.dtr mouseup.dtr",
      i,
      function(a) {
        if (ie(t.table().node()).hasClass("collapsed") && ie.inArray(
          ie(this).closest("tr").get(0),
          t.rows().nodes().toArray()
        ) !== -1) {
          if (typeof r == "number") {
            var o = r < 0 ? t.columns().eq(0).length + r : r;
            if (t.cell(this).index().column !== o)
              return;
          }
          var u = t.row(ie(this).closest("tr"));
          a.type === "click" ? e._detailsDisplay(u, !1) : a.type === "mousedown" ? ie(this).css("outline", "none") : a.type === "mouseup" && ie(this).trigger("blur").css("outline", "");
        }
      }
    );
  },
  /**
   * Get the details to pass to a renderer for a row
   * @param  {int} rowIdx Row index
   * @private
   */
  _detailsObj: function(e) {
    var t = this, n = this.s.dt, r = [];
    let i = n.settings()[0];
    return ie.map(this.s.columns, function(a, o) {
      if (!(a.never || a.control)) {
        var u = i.aoColumns[o];
        return r[o] || (r[o] = n.column(o)), {
          className: u.sClass,
          columnIndex: o,
          data: i.fastData(e, o, t.c.orthogonal),
          hidden: r[o].visible() && !t.s.current[o],
          rowIndex: e,
          title: r[o].title()
        };
      }
    });
  },
  /**
   * Find a breakpoint object from a name
   *
   * @param  {string} name Breakpoint name to find
   * @return {object}      Breakpoint description object
   * @private
   */
  _find: function(e) {
    for (var t = this.c.breakpoints, n = 0, r = t.length; n < r; n++)
      if (t[n].name === e)
        return t[n];
  },
  /**
   * Re-create the contents of the child rows as the display has changed in
   * some way.
   *
   * @private
   */
  _redrawChildren: function() {
    var e = this, t = this.s.dt;
    t.rows({ page: "current" }).iterator("row", function(n, r) {
      e._detailsDisplay(t.row(r), !0);
    });
  },
  /**
   * Alter the table display for a resized viewport. This involves first
   * determining what breakpoint the window currently is in, getting the
   * column visibilities to apply and then setting them.
   *
   * @param  {boolean} forceRedraw Force a redraw
   * @private
   */
  _resize: function(e) {
    var t = this, n = this.s.dt, r = ie(window).innerWidth(), i = this.c.breakpoints, a = i[0].name, o = this.s.columns, u, v, b = this.s.current.slice();
    for (u = i.length - 1; u >= 0; u--)
      if (r <= i[u].width) {
        a = i[u].name;
        break;
      }
    var m = this._columnsVisibility(a);
    this.s.current = m;
    var x = !1;
    for (u = 0, v = o.length; u < v; u++)
      if (m[u] === !1 && !o[u].never && !o[u].control && n.column(u).visible()) {
        x = !0;
        break;
      }
    ie(n.table().node()).toggleClass("collapsed", x);
    var _ = !1, T = 0, N = n.settings()[0], D = ie(n.table().node()).children("colgroup"), p = N.aoColumns.map(function(l) {
      return l.colEl;
    });
    n.columns().eq(0).each(function(l, d) {
      n.column(l).visible() && (m[d] === !0 && T++, (e || m[d] !== b[d]) && (_ = !0, t._setColumnVis(l, m[d])), m[d] ? t._colGroupAttach(D, p, d) : p[d].detach());
    }), _ && (n.columns.adjust(), this._redrawChildren(), ie(n.table().node()).trigger("responsive-resize.dt", [
      n,
      this._responsiveOnlyHidden()
    ]), n.page.info().recordsDisplay === 0 && ie("td", n.table().body()).eq(0).attr("colspan", T)), t._controlClass();
  },
  /**
   * Determine the width of each column in the table so the auto column hiding
   * has that information to work with. This method is never going to be 100%
   * perfect since column widths can change slightly per page, but without
   * seriously compromising performance this is quite effective.
   *
   * @private
   */
  _resizeAuto: function() {
    var e = this.s.dt, t = this.s.columns, n = this, r = e.columns().indexes().filter(function(x) {
      return e.column(x).visible();
    });
    if (this.c.auto && ie.inArray(
      !0,
      ie.map(t, function(x) {
        return x.auto;
      })
    ) !== -1) {
      var i = e.table().node().cloneNode(!1), a = ie(e.table().header().cloneNode(!1)).appendTo(
        i
      ), o = ie(e.table().footer().cloneNode(!1)).appendTo(
        i
      ), u = ie(e.table().body()).clone(!1, !1).empty().appendTo(i);
      i.style.width = "auto", e.table().header.structure(r).forEach((x) => {
        var _ = x.filter(function(T) {
          return !!T;
        }).map(function(T) {
          return ie(T.cell).clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0);
        });
        ie("<tr/>").append(_).appendTo(a);
      });
      for (var v = ie("<tr/>").appendTo(u), b = 0; b < r.count(); b++)
        v.append("<td/>");
      this.c.details.renderer._responsiveMovesNodes ? e.rows({ page: "current" }).every(function(x) {
        var _ = this.node();
        if (_) {
          var T = _.cloneNode(!1);
          e.cells(x, r).every(function(N, D) {
            var p = n.s.childNodeStore[x + "-" + D];
            p ? ie(this.node().cloneNode(!1)).append(ie(p).clone()).appendTo(T) : ie(this.node()).clone(!1).appendTo(T);
          }), u.append(T);
        }
      }) : ie(u).append(ie(e.rows({ page: "current" }).nodes()).clone(!1)).find("th, td").css("display", ""), u.find("th, td").css("display", ""), e.table().footer.structure(r).forEach((x) => {
        var _ = x.filter(function(T) {
          return !!T;
        }).map(function(T) {
          return ie(T.cell).clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0);
        });
        ie("<tr/>").append(_).appendTo(o);
      }), this.c.details.type === "inline" && ie(i).addClass("dtr-inline collapsed"), ie(i).find("[name]").removeAttr("name"), ie(i).css("position", "relative");
      var m = ie("<div/>").css({
        width: 1,
        height: 1,
        overflow: "hidden",
        clear: "both"
      }).append(i);
      m.insertBefore(e.table().node()), v.children().each(function(x) {
        var _ = e.column.index("fromVisible", x);
        t[_].minWidth = this.offsetWidth || 0;
      }), m.remove();
    }
  },
  /**
   * Get the state of the current hidden columns - controlled by Responsive only
   */
  _responsiveOnlyHidden: function() {
    var e = this.s.dt;
    return ie.map(this.s.current, function(t, n) {
      return e.column(n).visible() === !1 ? !0 : t;
    });
  },
  /**
   * Set a column's visibility.
   *
   * We don't use DataTables' column visibility controls in order to ensure
   * that column visibility can Responsive can no-exist. Since only IE8+ is
   * supported (and all evergreen browsers of course) the control of the
   * display attribute works well.
   *
   * @param {integer} col      Column index
   * @param {boolean} showHide Show or hide (true or false)
   * @private
   */
  _setColumnVis: function(e, t) {
    var n = this, r = this.s.dt, i = t ? "" : "none";
    this._setHeaderVis(e, t, r.table().header.structure()), this._setHeaderVis(e, t, r.table().footer.structure()), r.column(e).nodes().to$().css("display", i).toggleClass("dtr-hidden", !t), r.settings()[0].aoColumns[e].responsiveVisible = t, ie.isEmptyObject(this.s.childNodeStore) || r.cells(null, e).indexes().each(function(a) {
      n._childNodesRestore(r, a.row, a.column);
    });
  },
  /**
   * Set a column's visibility, taking into account multiple rows
   * in a header / footer and colspan attributes
   * @param {*} col
   * @param {*} showHide
   * @param {*} structure
   */
  _setHeaderVis: function(e, t, n) {
    var r = this, i = t ? "" : "none";
    n.forEach(function(a, o) {
      for (var u = 0; u < a.length; u++)
        if (a[u] && a[u].rowspan > 1)
          for (var v = a[u].rowspan, b = 1; b < v; b++)
            n[o + b][u] = {};
    }), n.forEach(function(a) {
      if (a[e] && a[e].cell)
        ie(a[e].cell).css("display", i).toggleClass("dtr-hidden", !t);
      else
        for (var o = e; o >= 0; ) {
          if (a[o] && a[o].cell) {
            a[o].cell.colSpan = r._colspan(a, o);
            break;
          }
          o--;
        }
    });
  },
  /**
   * How many columns should this cell span
   *
   * @param {*} row Header structure row
   * @param {*} idx The column index of the cell to span
   */
  _colspan: function(e, t) {
    for (var n = 1, r = t + 1; r < e.length; r++)
      if (e[r] === null && this.s.current[r])
        n++;
      else if (e[r])
        break;
    return n;
  },
  /**
   * Update the cell tab indexes for keyboard accessibility. This is called on
   * every table draw - that is potentially inefficient, but also the least
   * complex option given that column visibility can change on the fly. Its a
   * shame user-focus was removed from CSS 3 UI, as it would have solved this
   * issue with a single CSS statement.
   *
   * @private
   */
  _tabIndexes: function() {
    var e = this.s.dt, t = e.cells({ page: "current" }).nodes().to$(), n = e.settings()[0], r = this.c.details.target;
    if (t.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"), typeof r == "number")
      e.cells(null, r, { page: "current" }).nodes().to$().attr("tabIndex", n.iTabIndex).data("dtr-keyboard", 1);
    else {
      r === "td:first-child, th:first-child" && (r = ">td:first-child, >th:first-child");
      var i = e.rows({ page: "current" }).nodes(), a = r === "tr" ? ie(i) : ie(r, i);
      a.attr("tabIndex", n.iTabIndex).data("dtr-keyboard", 1);
    }
  }
});
st.breakpoints = [
  { name: "desktop", width: 1 / 0 },
  { name: "tablet-l", width: 1024 },
  { name: "tablet-p", width: 768 },
  { name: "mobile-l", width: 480 },
  { name: "mobile-p", width: 320 }
];
st.display = {
  childRow: function(e, t, n) {
    var r = ie(e.node());
    if (t) {
      if (r.hasClass("dtr-expanded"))
        return e.child(n(), "child").show(), !0;
    } else {
      if (r.hasClass("dtr-expanded"))
        return e.child(!1), !1;
      var i = n();
      return i === !1 ? !1 : (e.child(i, "child").show(), !0);
    }
  },
  childRowImmediate: function(e, t, n) {
    var r = ie(e.node());
    if (!t && r.hasClass("dtr-expanded") || !e.responsive.hasHidden())
      return e.child(!1), !1;
    var i = n();
    return i === !1 ? !1 : (e.child(i, "child").show(), !0);
  },
  // This is a wrapper so the modal options for Bootstrap and jQuery UI can
  // have options passed into them. This specific one doesn't need to be a
  // function but it is for consistency in the `modal` name
  modal: function(e) {
    return function(t, n, r, i) {
      var a, o = r();
      if (o === !1)
        return !1;
      if (n)
        if (a = ie("div.dtr-modal-content"), a.length && t.index() === a.data("dtr-row-idx"))
          a.empty().append(o);
        else
          return null;
      else {
        var u = function() {
          a.remove(), ie(document).off("keypress.dtr"), ie(t.node()).removeClass("dtr-expanded"), i();
        };
        a = ie('<div class="dtr-modal"/>').append(
          ie('<div class="dtr-modal-display"/>').append(
            ie('<div class="dtr-modal-content"/>').data("dtr-row-idx", t.index()).append(o)
          ).append(
            ie(
              '<div class="dtr-modal-close">&times;</div>'
            ).click(function() {
              u();
            })
          )
        ).append(
          ie('<div class="dtr-modal-background"/>').click(
            function() {
              u();
            }
          )
        ).appendTo("body"), ie(t.node()).addClass("dtr-expanded"), ie(document).on("keyup.dtr", function(v) {
          v.keyCode === 27 && (v.stopPropagation(), u());
        });
      }
      return e && e.header && ie("div.dtr-modal-content").prepend(
        "<h2>" + e.header(t) + "</h2>"
      ), !0;
    };
  }
};
st.renderer = {
  listHiddenNodes: function() {
    var e = function(t, n, r) {
      var i = this, a = ie(
        '<ul data-dtr-index="' + n + '" class="dtr-details"/>'
      ), o = !1;
      return ie.each(r, function(u, v) {
        if (v.hidden) {
          var b = v.className ? 'class="' + v.className + '"' : "";
          ie(
            "<li " + b + ' data-dtr-index="' + v.columnIndex + '" data-dt-row="' + v.rowIndex + '" data-dt-column="' + v.columnIndex + '"><span class="dtr-title">' + v.title + "</span> </li>"
          ).append(
            ie('<span class="dtr-data"/>').append(
              i._childNodes(
                t,
                v.rowIndex,
                v.columnIndex
              )
            )
          ).appendTo(a), o = !0;
        }
      }), o ? a : !1;
    };
    return e._responsiveMovesNodes = !0, e;
  },
  listHidden: function() {
    return function(e, t, n) {
      var r = ie.map(n, function(i) {
        var a = i.className ? 'class="' + i.className + '"' : "";
        return i.hidden ? "<li " + a + ' data-dtr-index="' + i.columnIndex + '" data-dt-row="' + i.rowIndex + '" data-dt-column="' + i.columnIndex + '"><span class="dtr-title">' + i.title + '</span> <span class="dtr-data">' + i.data + "</span></li>" : "";
      }).join("");
      return r ? ie(
        '<ul data-dtr-index="' + t + '" class="dtr-details"/>'
      ).append(r) : !1;
    };
  },
  tableAll: function(e) {
    return e = ie.extend(
      {
        tableClass: ""
      },
      e
    ), function(t, n, r) {
      var i = ie.map(r, function(a) {
        var o = a.className ? 'class="' + a.className + '"' : "";
        return "<tr " + o + ' data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><td>' + (a.title !== "" ? a.title + ":" : "") + "</td> <td>" + a.data + "</td></tr>";
      }).join("");
      return ie(
        '<table class="' + e.tableClass + ' dtr-details" width="100%"/>'
      ).append(i);
    };
  }
};
st.defaults = {
  /**
   * List of breakpoints for the instance. Note that this means that each
   * instance can have its own breakpoints. Additionally, the breakpoints
   * cannot be changed once an instance has been creased.
   *
   * @type {Array}
   * @default Takes the value of `Responsive.breakpoints`
   */
  breakpoints: st.breakpoints,
  /**
   * Enable / disable auto hiding calculations. It can help to increase
   * performance slightly if you disable this option, but all columns would
   * need to have breakpoint classes assigned to them
   *
   * @type {Boolean}
   * @default  `true`
   */
  auto: !0,
  /**
   * Details control. If given as a string value, the `type` property of the
   * default object is set to that value, and the defaults used for the rest
   * of the object - this is for ease of implementation.
   *
   * The object consists of the following properties:
   *
   * * `display` - A function that is used to show and hide the hidden details
   * * `renderer` - function that is called for display of the child row data.
   *   The default function will show the data from the hidden columns
   * * `target` - Used as the selector for what objects to attach the child
   *   open / close to
   * * `type` - `false` to disable the details display, `inline` or `column`
   *   for the two control types
   *
   * @type {Object|string}
   */
  details: {
    display: st.display.childRow,
    renderer: st.renderer.listHidden(),
    target: 0,
    type: "inline"
  },
  /**
   * Orthogonal data request option. This is used to define the data type
   * requested when Responsive gets the data to show in the child row.
   *
   * @type {String}
   */
  orthogonal: "display"
};
var pr = ie.fn.dataTable.Api;
pr.register("responsive()", function() {
  return this;
});
pr.register("responsive.index()", function(e) {
  return e = ie(e), {
    column: e.data("dtr-index"),
    row: e.parent().data("dtr-index")
  };
});
pr.register("responsive.rebuild()", function() {
  return this.iterator("table", function(e) {
    e._responsive && e._responsive._classLogic();
  });
});
pr.register("responsive.recalc()", function() {
  return this.iterator("table", function(e) {
    e._responsive && (e._responsive._resizeAuto(), e._responsive._resize());
  });
});
pr.register("responsive.hasHidden()", function() {
  var e = this.context[0];
  return e._responsive ? ie.inArray(!1, e._responsive._responsiveOnlyHidden()) !== -1 : !1;
});
pr.registerPlural(
  "columns().responsiveHidden()",
  "column().responsiveHidden()",
  function() {
    return this.iterator(
      "column",
      function(e, t) {
        return e._responsive ? e._responsive._responsiveOnlyHidden()[t] : !1;
      },
      1
    );
  }
);
st.version = "3.0.8";
ie.fn.dataTable.Responsive = st;
ie.fn.DataTable.Responsive = st;
ie(document).on("preInit.dt.dtr", function(e, t, n) {
  if (e.namespace === "dt" && (ie(t.nTable).hasClass("responsive") || ie(t.nTable).hasClass("dt-responsive") || t.oInit.responsive || k.defaults.responsive)) {
    var r = t.oInit.responsive;
    r !== !1 && new st(t, ie.isPlainObject(r) ? r : {});
  }
});
/*! Bootstrap 5 integration for DataTables' Responsive
 * © SpryMedia Ltd - datatables.net/license
 */
let Ic = Me;
var Bc = k.Responsive.display, Yf = Bc.modal, vn = Ic(
  '<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"/></div></div></div>'
), hi, ki = window.bootstrap;
k.Responsive.bootstrap = function(e) {
  ki = e;
};
function zf() {
  let e = k.use("bootstrap");
  if (e)
    return e;
  if (ki)
    return ki;
  throw new Error("No Bootstrap library. Set it with `DataTable.use(bootstrap);`");
}
Bc.modal = function(e) {
  if (!hi && ki.Modal) {
    let t = zf();
    hi = new t.Modal(vn[0]);
  }
  return function(t, n, r, i) {
    if (hi) {
      var a = r();
      if (a === !1)
        return !1;
      if (n)
        if (Ic.contains(document, vn[0]) && t.index() === vn.data("dtr-row-idx"))
          vn.find("div.modal-body").empty().append(a);
        else
          return null;
      else {
        if (e && e.header) {
          var o = vn.find("div.modal-header"), u = o.find("button").detach();
          o.empty().append('<h4 class="modal-title">' + e.header(t) + "</h4>").append(u);
        }
        vn.find("div.modal-body").empty().append(a), vn.data("dtr-row-idx", t.index()).one("hidden.bs.modal", i).appendTo("body"), hi.show();
      }
      return !0;
    } else
      return Yf(t, n, r, i);
  };
};
/*! Select for DataTables 3.1.3
 * © SpryMedia Ltd - datatables.net/license/mit
 */
let pe = Me;
k.select = {};
k.select.classes = {
  checkbox: "dt-select-checkbox"
};
k.select.version = "3.1.3";
k.select.init = function(e) {
  var t = e.settings()[0];
  if (!k.versionCheck("2"))
    throw "Warning: Select requires DataTables 2 or newer";
  if (!t._select) {
    var n = e.state.loaded(), r = function(y, E, O) {
      if (!(O === null || O.select === void 0)) {
        if (e.rows({ selected: !0 }).any() && e.rows().deselect(), O.select.rows !== void 0 && e.rows(O.select.rows).select(), e.columns({ selected: !0 }).any() && e.columns().deselect(), O.select.columns !== void 0 && e.columns(O.select.columns).select(), e.cells({ selected: !0 }).any() && e.cells().deselect(), O.select.cells !== void 0)
          for (var f = 0; f < O.select.cells.length; f++)
            e.cell(O.select.cells[f].row, O.select.cells[f].column).select();
        e.state.save();
      }
    };
    e.on("stateSaveParams", function(y, E, O) {
      O.select = {}, O.select.rows = e.rows({ selected: !0 }).ids(!0).toArray(), O.select.columns = e.columns({ selected: !0 })[0], O.select.cells = e.cells({ selected: !0 })[0].map(function(f) {
        return { row: e.row(f.row).id(!0), column: f.column };
      });
    }).on("stateLoadParams", r).one("init", function() {
      r(void 0, void 0, n);
    });
    var i = t.oInit.select, a = k.defaults.select, o = i === void 0 ? a : i, u = "row", v = "api", b = !1, m = !0, x = null, _ = !0, T = "td, th", N = "selected", D = !0, p = !1, l = !1, d = !1;
    t._select = {
      infoEls: []
    }, o === !0 ? (v = "os", p = !0) : typeof o == "string" ? (v = o, p = !0) : pe.isPlainObject(o) && (o.blurable !== void 0 && (b = o.blurable), o.toggleable !== void 0 && (m = o.toggleable), o.info !== void 0 && (_ = o.info), o.items !== void 0 && (u = o.items), o.style !== void 0 ? (v = o.style, p = !0) : (v = "os", p = !0), o.selector !== void 0 && (T = o.selector), o.className !== void 0 && (N = o.className), o.headerCheckbox !== void 0 && (D = o.headerCheckbox), o.selectable !== void 0 && (x = o.selectable), o.keys !== void 0 && (l = o.keys), o.keysWrap !== void 0 && (d = o.keysWrap)), e.select.selector(T), e.select.items(u), e.select.style(v), e.select.blurable(b), e.select.toggleable(m), e.select.info(_), e.select.keys(l, d), e.select.selectable(x), t._select.className = N, !p && pe(e.table().node()).hasClass("selectable") && e.select.style("os"), (D || D === "select-page" || D === "select-all") && e.ready(function() {
      Xf(e, D);
    });
  }
};
function pl(e, t, n) {
  var r, i, a, o = function(v, b) {
    if (v > b) {
      var m = b;
      b = v, v = m;
    }
    var x = !1;
    return e.columns(":visible").indexes().filter(function(_) {
      return _ === v && (x = !0), _ === b ? (x = !1, !0) : x;
    });
  }, u = function(v, b) {
    var m = e.rows({ search: "applied" }).indexes();
    if (m.indexOf(v) > m.indexOf(b)) {
      var x = b;
      b = v, v = x;
    }
    var _ = !1;
    return m.filter(function(T) {
      return T === v && (_ = !0), T === b ? (_ = !1, !0) : _;
    });
  };
  !e.cells({ selected: !0 }).any() && !n ? (i = o(0, t.column), a = u(0, t.row)) : (i = o(n.column, t.column), a = u(n.row, t.row)), r = e.cells(a, i).flatten(), e.cells(t, { selected: !0 }).any() ? e.cells(r).deselect() : e.cells(r).select();
}
function rr(e) {
  var t = k.select.classes.checkbox;
  return e ? t.replace(/ /g, ".") : t;
}
function er(e) {
  var t = e.settings()[0], n = t._select.selector;
  pe(e.table().container()).off("mousedown.dtSelect", n).off("mouseup.dtSelect", n).off("click.dtSelect", n), pe("body").off("click.dtSelect" + Pa(e.table().node()));
}
function Fc(e) {
  var t = pe(e.table().container()), n = e.settings()[0], r = n._select.selector, i;
  t.on("mousedown.dtSelect", r, function(a) {
    (a.shiftKey || a.metaKey || a.ctrlKey) && t.css("-moz-user-select", "none").one("selectstart.dtSelect", r, function() {
      return !1;
    }), window.getSelection && (i = window.getSelection());
  }).on("mouseup.dtSelect", r, function() {
    t.css("-moz-user-select", "");
  }).on("click.dtSelect", r, function(a) {
    var o = e.select.items(), u;
    if (i) {
      var v = window.getSelection();
      if ((!v.anchorNode || pe(v.anchorNode).closest("table")[0] === e.table().node()) && v !== i)
        return;
    }
    var b = e.settings()[0], m = e.table().container();
    if (pe(a.target).closest("div.dt-container")[0] == m) {
      var x = e.cell(pe(a.target).closest("td, th"));
      if (x.any()) {
        var _ = pe.Event("user-select.dt");
        if (Ft(e, _, [o, x, a]), !_.isDefaultPrevented()) {
          var T = x.index();
          o === "row" ? (u = T.row, Rs(a, e, b, "row", u)) : o === "column" ? (u = x.index().column, Rs(a, e, b, "column", u)) : o === "cell" && (u = x.index(), Rs(a, e, b, "cell", u)), b._select_lastCell = T;
        }
      }
    }
  }), pe("body").on("click.dtSelect" + Pa(e.table().node()), function(a) {
    if (n._select.blurable) {
      if (pe(a.target).parents().filter(e.table().container()).length || pe(a.target).parents("html").length === 0 || pe(a.target).parents("div.DTE").length)
        return;
      var o = pe.Event("select-blur.dt");
      if (Ft(e, o, [a.target, a]), o.isDefaultPrevented())
        return;
      Wr(n, !0);
    }
  });
}
function Ft(e, t, n, r) {
  r && !e.flatten().length || (typeof t == "string" && (t = t + ".dt"), n.unshift(e), pe(e.table().node()).trigger(t, n));
}
function zi(e) {
  return e.mRender && e.mRender._name === "selectCheckbox";
}
function vl(e, t) {
  if (!(e.select.style() === "api" || e.select.info() === !1)) {
    var n = e.settings()[0], r = n._select_set;
    if (!e.page.info().serverSide)
      for (var i = r.length - 1; i >= 0; i--)
        n.aIds[r[i]] || r.splice(i, 1);
    var a = r.length ? r.length : e.rows({ selected: !0 }).count(), o = e.columns({ selected: !0 }).count(), u = e.cells({ selected: !0 }).count();
    n._select_mode === "subtractive" && (a = e.page.info().recordsDisplay - r.length);
    var v = function(_, T, N) {
      _.append(
        pe('<span class="select-item"/>').append(
          e.i18n(
            "select." + T + "s",
            { _: "%d " + T + "s selected", 0: "", 1: "1 " + T + " selected" },
            N
          )
        )
      );
    }, b = pe(t), m = pe('<span class="select-info"/>');
    v(m, "row", a), v(m, "column", o), v(m, "cell", u);
    var x = b.children("span.select-info");
    x.length && x.remove(), m.text() !== "" && b.append(m);
  }
}
function Xf(e, t) {
  var n = e.settings()[0], r = n.aoColumns;
  e.columns().iterator("column", function(i, a) {
    var o = r[a];
    if (zi(o)) {
      var u = e.column(a).header(), v = pe("div.dt-column-header", u);
      if (v.length && (u = v), !pe("input", u).length) {
        var b = pe("<input>").attr({
          class: rr(!1),
          type: "checkbox",
          "aria-label": e.i18n("select.aria.headerCheckbox") || "Select all rows"
        }).appendTo(u).on("change", function() {
          this.checked ? t == "select-page" ? e.rows({ page: "current" }).select() : e.rows({ search: "applied" }).select() : t == "select-page" ? e.rows({ page: "current", selected: !0 }).deselect() : e.rows({ selected: !0 }).deselect();
        }).on("click", function(m) {
          m.stopPropagation();
        });
        e.on("draw select deselect", function(m, x, _) {
          if (_ === "row" || !_) {
            var T = Jf(e, t);
            T.search && T.search <= T.count && T.search === T.available ? b.prop("checked", !0).prop("indeterminate", !1) : T.search === 0 && T.count === 0 ? b.prop("checked", !1).prop("indeterminate", !1) : b.prop("checked", !1).prop("indeterminate", !0);
          }
        });
      }
    }
  });
}
function Qf(e) {
  var t = e.settings()[0], n = t._select.keys, r = t._select.keysWrap, i = "dts-keys-" + t.sTableId;
  n ? (pe(e.rows({ page: "current" }).nodes()).attr("tabindex", 0), e.on("draw." + i, function() {
    pe(e.rows({ page: "current" }).nodes()).attr("tabindex", 0);
  }), pe(document).on("keydown." + i, function(a) {
    var o = a.keyCode, u = document.activeElement;
    if ([9, 13, 32, 38, 40].includes(o)) {
      var v = e.rows({ page: "current" }).nodes().toArray(), b = v.indexOf(u), m = !0, x = e.page.info();
      if (b !== -1) {
        if (o === 9)
          a.shift === !1 && b === v.length - 1 ? Gn(e, "next", ":first-child") : a.shift === !0 && b === 0 ? Gn(e, "previous", ":last-child") : m = !1;
        else if (o === 13 || o === 32) {
          var _ = e.row(u);
          _.selected() ? _.deselect() : _.select();
        } else
          o === 38 ? b > 0 ? v[b - 1].focus() : x.start > 0 ? Gn(e, "previous", ":last-child") : r && Gn(e, "last", ":last-child") : b < v.length - 1 ? v[b + 1].focus() : x.page < x.pages - 1 ? Gn(e, "next", ":first-child") : r && Gn(e, "first", ":first-child");
        m && (a.stopPropagation(), a.preventDefault());
      }
    }
  })) : (pe(e.rows().nodes()).removeAttr("tabindex"), e.off("draw." + i), pe(document).off("keydown." + i));
}
function Gn(e, t, n) {
  e.one("draw", function() {
    e.row(n).node().focus();
  }).page(t).draw(!1);
}
function Jf(e, t) {
  var n = e.settings()[0], r = n._select.selectable, i = 0, a = t == "select-page" ? e.rows({ page: "current", selected: !0 }).count() : e.rows({ selected: !0 }).count(), o = t == "select-page" ? e.rows({ page: "current", selected: !0 }).count() : e.rows({ search: "applied", selected: !0 }).count();
  if (!r)
    i = t == "select-page" ? e.rows({ page: "current" }).count() : e.rows({ search: "applied" }).count();
  else
    for (var u = t == "select-page" ? e.rows({ page: "current" }).indexes() : e.rows({ search: "applied" }).indexes(), v = 0; v < u.length; v++) {
      var b = n.aoData[u[v]], m = r(b._aData, b.nTr, u[v]);
      m && i++;
    }
  return {
    available: i,
    count: a,
    search: o
  };
}
function Zf(e) {
  var t = new k.Api(e);
  e._select_init = !0, e._select_mode = "additive", e._select_set = [], e.aoRowCreatedCallback.push(
    function(n, r, i) {
      var a, o, u = e.aoData[i], v = t.row(i).id();
      for ((u._select_selected || e._select_mode === "additive" && e._select_set.includes(v) || e._select_mode === "subtractive" && !e._select_set.includes(v)) && (u._select_selected = !0, pe(n).addClass(e._select.className).find("input." + rr(!0)).prop("checked", !0)), a = 0, o = e.aoColumns.length; a < o; a++)
        (e.aoColumns[a]._select_selected || u._selected_cells && u._selected_cells[a]) && pe(u.anCells[a]).addClass(e._select.className);
    }
  ), eh(t), t.on("info.dt", function(n, r, i) {
    r._select.infoEls.includes(i) || r._select.infoEls.push(i), vl(t, i);
  }), t.on("select.dtSelect.dt deselect.dtSelect.dt", function() {
    e._select.infoEls.forEach(function(n) {
      vl(t, n);
    }), t.state.save();
  }), t.on("destroy.dtSelect", function() {
    pe(t.rows({ selected: !0 }).nodes()).removeClass(t.settings()[0]._select.className), pe("input." + rr(!0), t.table().header()).remove(), er(t), t.off(".dtSelect"), pe("body").off(".dtSelect" + Pa(t.table().node()));
  });
}
function ml(e, t, n, r) {
  var i = e[t + "s"]({ search: "applied" }).indexes(), a = i.indexOf(r), o = i.indexOf(n);
  if (!e[t + "s"]({ selected: !0 }).any() && a === -1)
    i.splice(i.indexOf(n) + 1, i.length);
  else {
    if (a > o) {
      var u = o;
      o = a, a = u;
    }
    i.splice(o + 1, i.length), i.splice(0, a);
  }
  e[t](n, { selected: !0 }).any() ? (i.splice(i.indexOf(n), 1), e[t + "s"](i).deselect()) : e[t + "s"](i).select();
}
function Wr(e, t) {
  if (t || e._select.style === "single") {
    var n = new k.Api(e);
    n.rows({ selected: !0 }).deselect(), n.columns({ selected: !0 }).deselect(), n.cells({ selected: !0 }).deselect();
  }
}
function Rs(e, t, n, r, i) {
  var a = t.select.style(), o = t.select.toggleable(), u = t[r](i, { selected: !0 }).any();
  if (!(u && !o))
    if (a === "os")
      if (e.ctrlKey || e.metaKey)
        t[r](i).select(!u);
      else if (e.shiftKey)
        r === "cell" ? pl(t, i, n._select_lastCell || null) : ml(
          t,
          r,
          i,
          n._select_lastCell ? n._select_lastCell[r] : null
        );
      else {
        var v = t[r + "s"]({ selected: !0 });
        u && v.flatten().length === 1 ? t[r](i).deselect() : (v.deselect(), t[r](i).select());
      }
    else
      a == "multi+shift" && e.shiftKey ? r === "cell" ? pl(t, i, n._select_lastCell || null) : ml(
        t,
        r,
        i,
        n._select_lastCell ? n._select_lastCell[r] : null
      ) : t[r](i).select(!u);
}
function Pa(e) {
  return e.id.replace(/[^a-zA-Z0-9\-\_]/g, "-");
}
function eh(e) {
  e.on("select", function(t, n, r, i) {
    if (r === "row") {
      var a = e.settings()[0];
      a._select_mode === "additive" ? gl(e, a._select_set, i) : bl(e, a._select_set, i);
    }
  }), e.on("deselect", function(t, n, r, i) {
    if (r === "row") {
      var a = e.settings()[0];
      a._select_mode === "additive" ? bl(e, a._select_set, i) : gl(e, a._select_set, i);
    }
  });
}
function gl(e, t, n) {
  for (var r = 0; r < n.length; r++) {
    var i = e.row(n[r]).id();
    i && i !== "undefined" && !t.includes(i) && t.push(i);
  }
}
function bl(e, t, n) {
  for (var r = 0; r < n.length; r++) {
    var i = e.row(n[r]).id(), a = t.indexOf(i);
    a !== -1 && t.splice(a, 1);
  }
}
pe.each(
  [
    { type: "row", prop: "aoData" },
    { type: "column", prop: "aoColumns" }
  ],
  function(e, t) {
    k.ext.selector[t.type].push(function(n, r, i) {
      var a = r.selected, o, u = [];
      if (a !== !0 && a !== !1)
        return i;
      for (var v = 0, b = i.length; v < b; v++)
        o = n[t.prop][i[v]], o && (a === !0 && o._select_selected === !0 || a === !1 && !o._select_selected) && u.push(i[v]);
      return u;
    });
  }
);
k.ext.selector.cell.push(function(e, t, n) {
  var r = t.selected, i, a = [];
  if (r === void 0)
    return n;
  for (var o = 0, u = n.length; o < u; o++)
    i = e.aoData[n[o].row], i && (r === !0 && i._selected_cells && i._selected_cells[n[o].column] === !0 || r === !1 && (!i._selected_cells || !i._selected_cells[n[o].column])) && a.push(n[o]);
  return a;
});
var Ue = k.Api.register, vr = k.Api.registerPlural;
Ue("select()", function() {
  return this.iterator("table", function(e) {
    k.select.init(new k.Api(e));
  });
});
Ue("select.blurable()", function(e) {
  return e === void 0 ? this.context[0]._select.blurable : this.iterator("table", function(t) {
    t._select.blurable = e;
  });
});
Ue("select.toggleable()", function(e) {
  return e === void 0 ? this.context[0]._select.toggleable : this.iterator("table", function(t) {
    t._select.toggleable = e;
  });
});
Ue("select.info()", function(e) {
  return e === void 0 ? this.context[0]._select.info : this.iterator("table", function(t) {
    t._select.info = e;
  });
});
Ue("select.items()", function(e) {
  return e === void 0 ? this.context[0]._select.items : this.iterator("table", function(t) {
    t._select.items = e, Ft(new k.Api(t), "selectItems", [e]);
  });
});
Ue("select.keys()", function(e, t) {
  return e === void 0 ? this.context[0]._select.keys : this.iterator("table", function(n) {
    n._select || k.select.init(new k.Api(n)), n._select.keys = e, n._select.keysWrap = t, Qf(new k.Api(n));
  });
});
Ue("select.style()", function(e) {
  return e === void 0 ? this.context[0]._select.style : this.iterator("table", function(t) {
    t._select || k.select.init(new k.Api(t)), t._select_init || Zf(t), t._select.style = e;
    var n = new k.Api(t);
    e !== "api" ? n.ready(function() {
      er(n), Fc(n);
    }) : er(n), Ft(new k.Api(t), "selectStyle", [e]);
  });
});
Ue("select.selector()", function(e) {
  return e === void 0 ? this.context[0]._select.selector : this.iterator("table", function(t) {
    var n = new k.Api(t), r = t._select.style;
    er(n), t._select.selector = e, r && r !== "api" ? n.ready(function() {
      er(n), Fc(n);
    }) : er(n);
  });
});
Ue("select.selectable()", function(e) {
  let t = this.context[0];
  return e ? (t._select.selectable = e, this) : t._select.selectable;
});
Ue("select.last()", function(e) {
  let t = this.context[0];
  return e ? (t._select_lastCell = e, this) : t._select_lastCell;
});
Ue("select.cumulative()", function(e) {
  if (e)
    return this.iterator("table", function(n) {
      if (n._select_mode !== e) {
        var r = new k.Api(n);
        if (e === "subtractive") {
          var i = r.rows({ selected: !1 }).ids().toArray();
          n._select_mode = e, n._select_set.length = 0, n._select_set.push.apply(n._select_set, i);
        } else {
          var a = r.rows({ selected: !0 }).ids().toArray();
          n._select_mode = e, n._select_set.length = 0, n._select_set.push.apply(n._select_set, a);
        }
      }
    }).draw(!1);
  let t = this.context[0];
  return t && t._select_set ? {
    mode: t._select_mode,
    rows: t._select_set
  } : null;
});
vr("rows().select()", "row().select()", function(e) {
  var t = this, n = [];
  return e === !1 ? this.deselect() : (this.iterator("row", function(r, i) {
    Wr(r);
    var a = r.aoData[i], o = r.aoColumns;
    if (r._select.selectable) {
      var u = r._select.selectable(a._aData, a.nTr, i);
      if (u === !1)
        return;
    }
    pe(a.nTr).addClass(r._select.className), a._select_selected = !0, n.push(i);
    for (var v = 0; v < o.length; v++) {
      var b = o[v];
      if (b.sType === null && t.columns().types(), zi(b)) {
        var m = a.anCells;
        m && m[v] && pe("input." + rr(!0), m[v]).prop("checked", !0), a._aSortData !== null && (a._aSortData[v] = null);
      }
    }
  }), this.iterator("table", function(r) {
    Ft(t, "select", ["row", n], !0);
  }), this);
});
Ue("row().selected()", function() {
  var e = this.context[0];
  return !!(e && this.length && e.aoData[this[0]] && e.aoData[this[0]]._select_selected);
});
Ue("row().focus()", function() {
  var e = this.context[0];
  e && this.length && e.aoData[this[0]] && e.aoData[this[0]].nTr && e.aoData[this[0]].nTr.focus();
});
Ue("row().blur()", function() {
  var e = this.context[0];
  e && this.length && e.aoData[this[0]] && e.aoData[this[0]].nTr && e.aoData[this[0]].nTr.blur();
});
vr("columns().select()", "column().select()", function(e) {
  var t = this;
  return e === !1 ? this.deselect() : (this.iterator("column", function(n, r) {
    Wr(n), n.aoColumns[r]._select_selected = !0;
    var i = new k.Api(n).column(r);
    pe(i.header()).addClass(n._select.className), pe(i.footer()).addClass(n._select.className), i.nodes().to$().addClass(n._select.className);
  }), this.iterator("table", function(n, r) {
    Ft(t, "select", ["column", t[r]], !0);
  }), this);
});
Ue("column().selected()", function() {
  var e = this.context[0];
  return !!(e && this.length && e.aoColumns[this[0]] && e.aoColumns[this[0]]._select_selected);
});
vr("cells().select()", "cell().select()", function(e) {
  var t = this;
  return e === !1 ? this.deselect() : (this.iterator("cell", function(n, r, i) {
    Wr(n);
    var a = n.aoData[r];
    a._selected_cells === void 0 && (a._selected_cells = []), a._selected_cells[i] = !0, a.anCells && pe(a.anCells[i]).addClass(n._select.className);
  }), this.iterator("table", function(n, r) {
    Ft(t, "select", ["cell", t.cells(t[r]).indexes().toArray()], !0);
  }), this);
});
Ue("cell().selected()", function() {
  var e = this.context[0];
  if (e && this.length) {
    var t = e.aoData[this[0][0].row];
    if (t && t._selected_cells && t._selected_cells[this[0][0].column])
      return !0;
  }
  return !1;
});
vr("rows().deselect()", "row().deselect()", function() {
  var e = this;
  return this.iterator("row", function(t, n) {
    var r = t.aoData[n], i = t.aoColumns;
    pe(r.nTr).removeClass(t._select.className), r._select_selected = !1, t._select_lastCell = null;
    for (var a = 0; a < i.length; a++) {
      var o = i[a];
      if (o.sType === null && e.columns().types(), zi(o)) {
        var u = r.anCells;
        u && u[a] && pe("input." + rr(!0), r.anCells[a]).prop("checked", !1), r._aSortData !== null && (r._aSortData[a] = null);
      }
    }
  }), this.iterator("table", function(t, n) {
    Ft(e, "deselect", ["row", e[n]], !0);
  }), this;
});
vr("columns().deselect()", "column().deselect()", function() {
  var e = this;
  return this.iterator("column", function(t, n) {
    t.aoColumns[n]._select_selected = !1;
    var r = new k.Api(t), i = r.column(n);
    pe(i.header()).removeClass(t._select.className), pe(i.footer()).removeClass(t._select.className), r.cells(null, n).indexes().each(function(a) {
      var o = t.aoData[a.row], u = o._selected_cells;
      o.anCells && (!u || !u[a.column]) && pe(o.anCells[a.column]).removeClass(t._select.className);
    });
  }), this.iterator("table", function(t, n) {
    Ft(e, "deselect", ["column", e[n]], !0);
  }), this;
});
vr("cells().deselect()", "cell().deselect()", function() {
  var e = this;
  return this.iterator("cell", function(t, n, r) {
    var i = t.aoData[n];
    i._selected_cells !== void 0 && (i._selected_cells[r] = !1), i.anCells && !t.aoColumns[r]._select_selected && pe(i.anCells[r]).removeClass(t._select.className);
  }), this.iterator("table", function(t, n) {
    Ft(e, "deselect", ["cell", e[n]], !0);
  }), this;
});
function Yn(e, t) {
  return function(n) {
    return n.i18n("buttons." + e, t);
  };
}
function ks(e) {
  var t = e._eventNamespace;
  return "draw.dt.DT" + t + " select.dt.DT" + t + " deselect.dt.DT" + t;
}
function th(e, t) {
  return !!(t.limitTo.indexOf("rows") !== -1 && e.rows({ selected: !0 }).any() || t.limitTo.indexOf("columns") !== -1 && e.columns({ selected: !0 }).any() || t.limitTo.indexOf("cells") !== -1 && e.cells({ selected: !0 }).any());
}
var Ls = 0;
pe.extend(k.ext.buttons, {
  selected: {
    text: Yn("selected", "Selected"),
    className: "buttons-selected",
    limitTo: ["rows", "columns", "cells"],
    init: function(e, t, n) {
      var r = this;
      n._eventNamespace = ".select" + Ls++, e.on(ks(n), function() {
        r.enable(th(e, n));
      }), this.disable();
    },
    destroy: function(e, t, n) {
      e.off(n._eventNamespace);
    }
  },
  selectedSingle: {
    text: Yn("selectedSingle", "Selected single"),
    className: "buttons-selected-single",
    init: function(e, t, n) {
      var r = this;
      n._eventNamespace = ".select" + Ls++, e.on(ks(n), function() {
        var i = e.rows({ selected: !0 }).flatten().length + e.columns({ selected: !0 }).flatten().length + e.cells({ selected: !0 }).flatten().length;
        r.enable(i === 1);
      }), this.disable();
    },
    destroy: function(e, t, n) {
      e.off(n._eventNamespace);
    }
  },
  selectAll: {
    text: Yn("selectAll", "Select all"),
    className: "buttons-select-all",
    action: function(e, t, n, r) {
      var i = this.select.items(), a = r.selectorModifier;
      a ? (typeof a == "function" && (a = a.call(t, e, t, n, r)), this[i + "s"](a).select()) : this[i + "s"]().select();
    }
    // selectorModifier can be specified
  },
  selectNone: {
    text: Yn("selectNone", "Deselect all"),
    className: "buttons-select-none",
    action: function() {
      Wr(this.settings()[0], !0);
    },
    init: function(e, t, n) {
      var r = this;
      n._eventNamespace = ".select" + Ls++, e.on(ks(n), function() {
        var i = e.rows({ selected: !0 }).flatten().length + e.columns({ selected: !0 }).flatten().length + e.cells({ selected: !0 }).flatten().length;
        r.enable(i > 0);
      }), this.disable();
    },
    destroy: function(e, t, n) {
      e.off(n._eventNamespace);
    }
  },
  showSelected: {
    text: Yn("showSelected", "Show only selected"),
    className: "buttons-show-selected",
    action: function(e, t) {
      if (t.search.fixed("dt-select"))
        t.search.fixed("dt-select", null), this.active(!1);
      else {
        var n = t.settings()[0].aoData;
        t.search.fixed("dt-select", function(r, i, a) {
          return n[a]._select_selected;
        }), this.active(!0);
      }
      t.draw();
    }
  }
});
pe.each(["Row", "Column", "Cell"], function(e, t) {
  var n = t.toLowerCase();
  k.ext.buttons["select" + t + "s"] = {
    text: Yn("select" + t + "s", "Select " + n + "s"),
    className: "buttons-select-" + n + "s",
    action: function() {
      this.select.items(n);
    },
    init: function(r) {
      var i = this;
      this.active(r.select.items() === n), r.on("selectItems.dt.DT", function(a, o, u) {
        i.active(u === n);
      });
    }
  };
});
k.type("select-checkbox", {
  className: "dt-select",
  detect: k.versionCheck("2.1") ? {
    oneOf: function() {
      return !1;
    },
    allOf: function() {
      return !1;
    },
    init: function(e, t, n) {
      return zi(t);
    }
  } : function(e) {
    return e === "select-checkbox" ? e : !1;
  },
  order: {
    pre: function(e) {
      return e === "X" ? -1 : 0;
    }
  }
});
pe.extend(!0, k.defaults.oLanguage, {
  select: {
    aria: {
      rowCheckbox: "Select row"
    }
  }
});
k.render.select = function(e, t) {
  var n = e ? k.util.get(e) : null, r = t ? k.util.get(t) : null, i = function(a, o, u, v) {
    var b = v.settings.aoData[v.row], m = b._select_selected, x = v.settings.oLanguage.select.aria.rowCheckbox, _ = v.settings._select.selectable;
    if (o === "display") {
      if (_) {
        var T = _(u, b.nTr, v.row);
        if (T === !1)
          return "";
      }
      return pe("<input>").attr({
        "aria-label": x,
        class: rr(),
        name: r ? r(u) : null,
        type: "checkbox",
        value: n ? n(u) : null,
        checked: m
      }).on("input", function(N) {
        N.preventDefault(), this.checked = pe(this).closest("tr").hasClass("selected");
      })[0];
    } else {
      if (o === "type")
        return "select-checkbox";
      if (o === "filter")
        return "";
    }
    return m ? "X" : "";
  };
  return i._name = "selectCheckbox", i;
};
k.ext.order["select-checkbox"] = function(e, t) {
  return this.api().column(t, { order: "index" }).nodes().map(function(n) {
    return e._select.items === "row" ? pe(n).parent().hasClass(e._select.className).toString() : e._select.items === "cell" ? pe(n).hasClass(e._select.className).toString() : !1;
  });
};
pe.fn.DataTable.select = k.select;
pe(document).on("i18n.dt.dtSelect preInit.dt.dtSelect", function(e, t) {
  e.namespace === "dt" && k.select.init(new k.Api(t));
});
/*! Bootstrap 5 styling wrapper for Select
 * © SpryMedia Ltd - datatables.net/license
 */
k.select.classes.checkbox = "form-check-input dt-select-checkbox";
/*! SearchPanes 2.3.5
 * © SpryMedia Ltd - datatables.net/license
 */
let Lt = Me;
(function() {
  var e, t;
  function n(F) {
    e = F, t = F.fn.dataTable;
  }
  var r = (
    /** @class */
    function() {
      function F(S, A, P, L, V) {
        var j = this;
        if (V === void 0 && (V = null), !t || !t.versionCheck || !t.versionCheck("1.10.0"))
          throw new Error("SearchPane requires DataTables 1.10 or newer");
        if (!t.select)
          throw new Error("SearchPane requires Select");
        var G = new t.Api(S);
        this.classes = e.extend(!0, {}, F.classes), this.c = e.extend(!0, {}, F.defaults, A, V), A && A.hideCount && A.viewCount === void 0 && (this.c.viewCount = !this.c.hideCount);
        var ee = G.columns().eq(0).toArray().length;
        this.s = {
          colExists: P < ee,
          colOpts: void 0,
          customPaneSettings: V,
          displayed: !1,
          dt: G,
          dtPane: void 0,
          firstSet: !0,
          index: P,
          indexes: [],
          listSet: !1,
          name: void 0,
          rowData: {
            arrayFilter: [],
            arrayOriginal: [],
            bins: {},
            binsOriginal: {},
            filterMap: /* @__PURE__ */ new Map(),
            totalOptions: 0
          },
          scrollTop: 0,
          searchFunction: void 0,
          selections: [],
          serverSelect: [],
          serverSelecting: !1,
          tableLength: null,
          updating: !1
        }, this.s.colOpts = this.s.colExists ? this._getOptions() : this._getBonusOptions(), this.dom = {
          buttonGroup: e("<div/>").addClass(this.classes.buttonGroup),
          clear: e('<button type="button">&#215;</button>').attr("disabled", "true").addClass(this.classes.disabledButton).addClass(this.classes.paneButton).addClass(this.classes.clearButton).attr("aria-label", G.i18n("searchPanes.buttons.clearPane", this.c.i18n.aria.clearPane)).html(this.s.dt.i18n("searchPanes.clearPane", this.c.i18n.clearPane)),
          collapseButton: e('<button type="button"><span class="' + this.classes.caret + '">&#x5e;</span></button>').addClass(this.classes.paneButton).addClass(this.classes.collapseButton).attr("aria-label", G.i18n("searchPanes.buttons.collapse", this.c.i18n.aria.collapse)),
          container: e("<div/>").addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout + (parseInt(this.c.layout.split("-")[1], 10) < 10 ? this.c.layout : this.c.layout.split("-")[0] + "-9")).addClass(this.s.customPaneSettings && this.s.customPaneSettings.className ? this.s.customPaneSettings.className : ""),
          countButton: e('<button type="button"><span></span></button>').addClass(this.classes.paneButton).addClass(this.classes.countButton).attr("aria-label", G.i18n("searchPanes.buttons.orderByCount", this.c.i18n.aria.orderByCount)),
          dtP: e('<table width="100%"><thead><tr><th></th><th></th></tr></thead></table>'),
          lower: e("<div/>").addClass(this.classes.subRow2).addClass(this.classes.narrowButton),
          nameButton: e('<button type="button"><span></span></button>').addClass(this.classes.paneButton).addClass(this.classes.nameButton).attr("aria-label", G.i18n("searchPanes.buttons.orderByLabel", this.c.i18n.aria.orderByLabel)),
          panesContainer: e(L),
          searchBox: e("<input/>").addClass(this.classes.paneInputButton).addClass(this.classes.search),
          searchButton: e('<button type="button"><span></span></button>').addClass(this.classes.searchIcon).addClass(this.classes.paneButton).attr("aria-label", G.i18n("searchPanes.buttons.clearSearch", this.c.i18n.aria.clearSearch)),
          searchCont: e("<div/>").addClass(this.classes.searchCont),
          searchLabelCont: e("<div/>").addClass(this.classes.searchLabelCont),
          topRow: e("<div/>").addClass(this.classes.topRow),
          upper: e("<div/>").addClass(this.classes.subRow1).addClass(this.classes.narrowSearch)
        };
        var J = "";
        this.s.colExists ? (J = e(this.s.dt.column(this.s.index).header()).text(), this.dom.dtP.find("th").eq(0).text(J)) : (J = this.s.customPaneSettings.header || "Custom Pane", this.dom.dtP.find("th").eq(0).html(J)), this.s.colOpts.name ? this.s.name = this.s.colOpts.name : this.s.customPaneSettings && this.s.customPaneSettings.name ? this.s.name = this.s.customPaneSettings.name : this.s.name = J;
        var Z = this.s.dt.table(0).node();
        return this.s.searchFunction = function(te, se, oe) {
          if (j.s.selections.length === 0 || te.nTable !== Z)
            return !0;
          var le = null;
          return j.s.colExists && (le = se[j.s.index], j.s.colOpts.orthogonal.filter !== "filter" && (le = j.s.rowData.filterMap.get(oe), le instanceof e.fn.dataTable.Api && (le = le.toArray()))), j._search(le, oe);
        }, e.fn.dataTable.ext.search.push(this.s.searchFunction), this.c.clear && this.dom.clear.on("click.dtsp", function() {
          var te = j.dom.container.find("." + j.classes.search.replace(/\s+/g, "."));
          te.each(function() {
            e(this).val("").trigger("input");
          }), j.clearPane();
        }), this.s.dt.on("draw.dtsp", function() {
          return j.adjustTopRow();
        }), this.s.dt.on("buttons-action.dtsp", function() {
          return j.adjustTopRow();
        }), this.s.dt.on("column-reorder.dtsp", function(te, se, oe) {
          j.s.index = oe.mapping[j.s.index];
        }), this;
      }
      return F.prototype.addRow = function(S, A, P, L, V, j, G) {
        j || (j = this.s.rowData.bins[A] ? this.s.rowData.bins[A] : 0), G || (G = this._getShown(A));
        for (var ee, J = 0, Z = this.s.indexes; J < Z.length; J++) {
          var te = Z[J];
          te.filter === A && (ee = te.index);
        }
        return ee === void 0 && (ee = this.s.indexes.length, this.s.indexes.push({ filter: A, index: ee })), this.s.dtPane.row.add({
          className: V,
          display: S !== "" ? S : this.emptyMessage(),
          filter: A,
          index: ee,
          shown: G,
          sort: P,
          total: j,
          type: L
        });
      }, F.prototype.adjustTopRow = function() {
        var S = this.dom.container.find("." + this.classes.subRowsContainer.replace(/\s+/g, ".")), A = this.dom.container.find("." + this.classes.subRow1.replace(/\s+/g, ".")), P = this.dom.container.find("." + this.classes.subRow2.replace(/\s+/g, ".")), L = this.dom.container.find("." + this.classes.topRow.replace(/\s+/g, "."));
        (e(S[0]).width() < 252 || e(L[0]).width() < 252) && e(S[0]).width() !== 0 ? (e(S[0]).addClass(this.classes.narrow), e(A[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowSearch), e(P[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowButton)) : (e(S[0]).removeClass(this.classes.narrow), e(A[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowSearch), e(P[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowButton));
      }, F.prototype.clearData = function() {
        this.s.rowData = {
          arrayFilter: [],
          arrayOriginal: [],
          bins: {},
          binsOriginal: {},
          filterMap: /* @__PURE__ */ new Map(),
          totalOptions: 0
        };
      }, F.prototype.clearPane = function() {
        return this.s.dtPane.rows({ selected: !0 }).deselect(), this.updateTable(), this;
      }, F.prototype.collapse = function() {
        var S = this;
        !this.s.displayed || // If collapsing is disabled globally, and not enabled specifically for this column
        !this.c.collapse && this.s.colOpts.collapse !== !0 || // OR, collapsing could be enabled globally and this column specifically
        // is not to be collapsed.
        // We can't just take !this.s.colOpts.collapse here as if it is undefined
        // then the global should be used
        this.s.colOpts.collapse === !1 || (e(this.s.dtPane.table().container()).addClass(this.classes.hidden), this.dom.topRow.addClass(this.classes.bordered), this.dom.nameButton.addClass(this.classes.disabledButton), this.dom.countButton.addClass(this.classes.disabledButton), this.dom.searchButton.addClass(this.classes.disabledButton), this.dom.collapseButton.addClass(this.classes.rotated), this.dom.topRow.one("click.dtsp", function() {
          return S.show();
        }), this.dom.topRow.trigger("collapse.dtsps"));
      }, F.prototype.destroy = function() {
        this.s.dtPane && this.s.dtPane.off(".dtsp"), this.s.dt.off(".dtsp"), this.dom.clear.off(".dtsp"), this.dom.nameButton.off(".dtsp"), this.dom.countButton.off(".dtsp"), this.dom.searchButton.off(".dtsp"), this.dom.collapseButton.off(".dtsp"), e(this.s.dt.table().node()).off(".dtsp"), this.dom.container.detach();
        for (var S = e.fn.dataTable.ext.search.indexOf(this.s.searchFunction); S !== -1; )
          e.fn.dataTable.ext.search.splice(S, 1), S = e.fn.dataTable.ext.search.indexOf(this.s.searchFunction);
        this.s.dtPane && this.s.dtPane.destroy(), this.s.listSet = !1;
      }, F.prototype.emptyMessage = function() {
        var S = this.c.i18n.emptyMessage;
        return this.c.emptyMessage && (S = this.c.emptyMessage), this.s.colOpts.emptyMessage !== !1 && this.s.colOpts.emptyMessage !== null && (S = this.s.colOpts.emptyMessage), this.s.dt.i18n("searchPanes.emptyMessage", S);
      }, F.prototype.getPaneCount = function() {
        return this.s.dtPane ? this.s.dtPane.rows({ selected: !0 }).data().toArray().length : 0;
      }, F.prototype.rebuildPane = function(S, A) {
        S === void 0 && (S = null), A === void 0 && (A = !1), this.clearData();
        var P = [];
        this.s.serverSelect = [];
        var L = null;
        return this.s.dtPane && (A && (this.s.dt.page.info().serverSide ? this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray() : P = this.s.dtPane.rows({ selected: !0 }).data().toArray()), this.s.dtPane.clear().destroy(), L = this.dom.container.prev(), this.destroy(), this.s.dtPane = void 0, e.fn.dataTable.ext.search.push(this.s.searchFunction)), this.dom.container.removeClass(this.classes.hidden), this.s.displayed = !1, this._buildPane(this.s.dt.page.info().serverSide ? this.s.serverSelect : P, S, L), this;
      }, F.prototype.resize = function(S) {
        this.c.layout = S, this.dom.container.removeClass().addClass(this.classes.show).addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout + (parseInt(S.split("-")[1], 10) < 10 ? S : S.split("-")[0] + "-9")).addClass(this.s.customPaneSettings !== null && this.s.customPaneSettings.className ? this.s.customPaneSettings.className : ""), this.adjustTopRow(), this.dom.dtP.css("table-layout", "fixed"), this.dom.dtP.css("width", "100%"), this.dom.dtP.find("colgroup col").css("width", "100%");
      }, F.prototype.setListeners = function() {
        var S = this;
        this.s.dtPane && (this.s.dtPane.off("select.dtsp").on("select.dtsp", function() {
          clearTimeout(S.s.deselectTimeout), S._updateSelection(!S.s.updating), S.dom.clear.removeClass(S.classes.disabledButton).removeAttr("disabled");
        }), this.s.dtPane.off("deselect.dtsp").on("deselect.dtsp", function() {
          S.s.deselectTimeout = setTimeout(function() {
            S._updateSelection(!0), S.s.dtPane.rows({ selected: !0 }).data().toArray().length === 0 && S.dom.clear.addClass(S.classes.disabledButton).attr("disabled", "true");
          }, 50);
        }), this.s.firstSet && (this.s.firstSet = !1, this.s.dt.on("stateSaveParams.dtsp", function(A, P, L) {
          if (e.isEmptyObject(L)) {
            S.s.dtPane.state.clear();
            return;
          }
          var V, j, G = [], ee, J, Z;
          S.s.dtPane && (G = S.s.dtPane.rows({ selected: !0 }).data().map(function(se) {
            return se.filter !== null ? se.filter.toString() : null;
          }).toArray(), J = S.dom.searchBox.val(), j = S.s.dtPane.order(), V = S.s.rowData.binsOriginal, Z = S.s.rowData.arrayOriginal, ee = S.dom.collapseButton.hasClass(S.classes.rotated)), L.searchPanes === void 0 && (L.searchPanes = {}), L.searchPanes.panes === void 0 && (L.searchPanes.panes = []);
          for (var te = 0; te < L.searchPanes.panes.length; te++)
            L.searchPanes.panes[te].id === S.s.index && (L.searchPanes.panes.splice(te, 1), te--);
          L.searchPanes.panes.push({
            arrayFilter: Z,
            bins: V,
            collapsed: ee,
            id: S.s.index,
            order: j,
            searchTerm: J,
            selected: G
          });
        })), this.s.dtPane.off("user-select.dtsp").on("user-select.dtsp", function(A, P, L, V, j) {
          j.stopPropagation();
        }), this.s.dtPane.off("draw.dtsp").on("draw.dtsp", function() {
          return S.adjustTopRow();
        }), this.dom.nameButton.off("click.dtsp").on("click.dtsp", function() {
          var A = S.s.dtPane.order()[0][1];
          S.s.dtPane.order([[0, A === "asc" ? "desc" : "asc"]]).draw(), S.s.dt.state.save();
        }), this.dom.countButton.off("click.dtsp").on("click.dtsp", function() {
          var A = S.s.dtPane.order()[0][1], P = A === "asc" ? "desc" : "asc";
          S.s.dtPane.order([[2, P], [1, P]]).draw(), S.s.dt.state.save();
        }), this.dom.collapseButton.off("click.dtsp").on("click.dtsp", function(A) {
          A.stopPropagation();
          var P = e(S.s.dtPane.table().container());
          P.toggleClass(S.classes.hidden), S.dom.topRow.toggleClass(S.classes.bordered), S.dom.nameButton.toggleClass(S.classes.disabledButton), S.dom.countButton.toggleClass(S.classes.disabledButton), S.dom.searchButton.toggleClass(S.classes.disabledButton), S.dom.collapseButton.toggleClass(S.classes.rotated), P.hasClass(S.classes.hidden) ? S.dom.topRow.on("click.dtsp", function() {
            return S.dom.collapseButton.click();
          }) : S.dom.topRow.off("click.dtsp"), S.s.dt.state.save(), S.dom.topRow.trigger("collapse.dtsps");
        }), this.dom.clear.off("click.dtsp").on("click.dtsp", function() {
          var A = S.dom.container.find("." + S.classes.search.replace(/ /g, "."));
          A.each(function() {
            e(this).val("").trigger("input");
          }), S.clearPane();
        }), this.dom.searchButton.off("click.dtsp").on("click.dtsp", function() {
          return S.dom.searchBox.focus();
        }), this.dom.searchBox.off("click.dtsp").on("input.dtsp", function() {
          var A = S.dom.searchBox.val();
          S.s.dtPane.search(A).draw(), typeof A == "string" && (A.length > 0 || A.length === 0 && S.s.dtPane.rows({ selected: !0 }).data().toArray().length > 0) ? S.dom.clear.removeClass(S.classes.disabledButton).removeAttr("disabled") : S.dom.clear.addClass(S.classes.disabledButton).attr("disabled", "true"), S.s.dt.state.save();
        }), this.s.dtPane.select.style(this.s.colOpts.dtOpts && this.s.colOpts.dtOpts.select && this.s.colOpts.dtOpts.select.style ? this.s.colOpts.dtOpts.select.style : this.c.dtOpts && this.c.dtOpts.select && this.c.dtOpts.select.style ? this.c.dtOpts.select.style : "os"));
      }, F.prototype._serverPopulate = function(S) {
        S.tableLength ? (this.s.tableLength = S.tableLength, this.s.rowData.totalOptions = this.s.tableLength) : (this.s.tableLength === null || this.s.dt.rows()[0].length > this.s.tableLength) && (this.s.tableLength = this.s.dt.rows()[0].length, this.s.rowData.totalOptions = this.s.tableLength);
        var A = this.s.dt.column(this.s.index).dataSrc();
        if (S.searchPanes.options[A])
          for (var P = 0, L = S.searchPanes.options[A]; P < L.length; P++) {
            var V = L[P];
            this.s.rowData.arrayFilter.push({
              display: V.label,
              filter: V.value,
              sort: V.label,
              type: V.label
            }), this.s.rowData.bins[V.value] = V.total;
          }
        var j = Object.keys(this.s.rowData.bins).length, G = this._uniqueRatio(j, this.s.tableLength);
        if (this.s.displayed === !1 && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? G > this.c.threshold : G > this.s.colOpts.threshold) || this.s.colOpts.show !== !0 && j <= 1)) {
          this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
          return;
        }
        this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins, this.s.displayed = !0;
      }, F.prototype.show = function() {
        this.s.displayed && (this.dom.topRow.removeClass(this.classes.bordered), this.dom.nameButton.removeClass(this.classes.disabledButton), this.dom.countButton.removeClass(this.classes.disabledButton), this.dom.searchButton.removeClass(this.classes.disabledButton), this.dom.collapseButton.removeClass(this.classes.rotated), e(this.s.dtPane.table().container()).removeClass(this.classes.hidden), this.dom.topRow.trigger("collapse.dtsps"));
      }, F.prototype._uniqueRatio = function(S, A) {
        return A > 0 && (this.s.rowData.totalOptions > 0 && !this.s.dt.page.info().serverSide || this.s.dt.page.info().serverSide && this.s.tableLength > 0) ? S / this.s.rowData.totalOptions : 1;
      }, F.prototype.updateTable = function() {
        var S = this.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(A) {
          return A.filter;
        });
        this.s.selections = S, this._searchExtras();
      }, F.prototype._getComparisonRows = function() {
        var S = this.s.colOpts.options ? this.s.colOpts.options : this.s.customPaneSettings && this.s.customPaneSettings.options ? this.s.customPaneSettings.options : void 0;
        if (S !== void 0) {
          var A = this.s.dt.rows(), P = A.data().toArray(), L = [];
          this.s.dtPane.clear(), this.s.indexes = [];
          for (var V = 0, j = S; V < j.length; V++) {
            var G = j[V], ee = G.label !== "" ? G.label : this.emptyMessage(), J = {
              className: G.className,
              display: ee,
              filter: typeof G.value == "function" ? G.value : [],
              sort: G.order !== void 0 ? G.order : ee,
              total: 0,
              type: ee
            };
            if (typeof G.value == "function") {
              for (var Z = 0; Z < P.length; Z++)
                G.value.call(this.s.dt, P[Z], A[0][Z]) && J.total++;
              typeof J.filter != "function" && J.filter.push(G.filter);
            }
            L.push(this.addRow(J.display, J.filter, J.sort, J.type, J.className, J.total));
          }
          return L;
        }
      }, F.prototype._getMessage = function(S) {
        return this.s.dt.i18n("searchPanes.count", this.c.i18n.count).replace(/{total}/g, S.total);
      }, F.prototype._getShown = function(S) {
      }, F.prototype._getPaneConfig = function() {
        var S = this, A = t.Scroller, P = this.s.dt.settings()[0].oLanguage;
        return P.url = null, P.sUrl = null, {
          columnDefs: [
            {
              className: "dtsp-nameColumn",
              data: "display",
              render: function(L, V, j) {
                if (V === "sort")
                  return j.sort;
                if (V === "type")
                  return j.type;
                var G = S._getMessage(j), ee = '<span class="' + S.classes.pill + '">' + G + "</span>";
                return (!S.c.viewCount || !S.s.colOpts.viewCount) && (ee = ""), V === "filter" ? typeof L == "string" && L.match(/<[^>]*>/) !== null ? L.replace(/<[^>]*>/g, "") : L : '<div class="' + S.classes.nameCont + '"><span title="' + (typeof L == "string" && L.match(/<[^>]*>/) !== null ? L.replace(/<[^>]*>/g, "") : L) + '" class="' + S.classes.name + '">' + L + "</span>" + ee + "</div>";
              },
              targets: 0,
              // Accessing the private datatables property to set type based on the original table.
              // This is null if not defined by the user, meaning that automatic type detection
              //  would take place
              type: this.s.dt.settings()[0].aoColumns[this.s.index] ? this.s.dt.settings()[0].aoColumns[this.s.index]._sManualType : null
            },
            {
              className: "dtsp-countColumn " + this.classes.badgePill,
              data: "total",
              searchable: !1,
              targets: 1,
              visible: !1
            },
            {
              data: "shown",
              searchable: !1,
              targets: 2,
              visible: !1,
              defaultContent: 0
            }
          ],
          deferRender: !0,
          info: !1,
          language: P,
          paging: !!A,
          scrollX: !1,
          scrollY: "200px",
          scroller: !!A,
          select: !0,
          stateSave: !!this.s.dt.settings()[0].oFeatures.bStateSave
        };
      }, F.prototype._makeSelection = function() {
        this.updateTable(), this.s.updating = !0, this.s.dt.draw(), this.s.updating = !1;
      }, F.prototype._populatePaneArray = function(S, A, P, L) {
        L === void 0 && (L = this.s.rowData.bins);
        var V = P.fastData ? P.fastData : function(ee, J, Z) {
          return P.oApi._fnGetCellData(P, ee, J, Z);
        };
        if (typeof this.s.colOpts.orthogonal == "string") {
          var j = V(S, this.s.index, this.s.colOpts.orthogonal);
          this.s.rowData.filterMap.set(S, j), this._addOption(j, j, j, j, A, L), this.s.rowData.totalOptions++;
        } else {
          var G = V(S, this.s.index, this.s.colOpts.orthogonal.search);
          G === null && (G = ""), typeof G == "string" && (G = G.replace(/<[^>]*>/g, "")), this.s.rowData.filterMap.set(S, G), L[G] ? (L[G]++, this.s.rowData.totalOptions++) : (this._addOption(G, V(S, this.s.index, this.s.colOpts.orthogonal.display), V(S, this.s.index, this.s.colOpts.orthogonal.sort), V(S, this.s.index, this.s.colOpts.orthogonal.type), A, L), this.s.rowData.totalOptions++);
        }
      }, F.prototype._reloadSelect = function(S) {
        if (S !== void 0) {
          for (var A, P = 0; P < S.searchPanes.panes.length; P++)
            if (S.searchPanes.panes[P].id === this.s.index) {
              A = P;
              break;
            }
          if (A)
            for (var L = this.s.dtPane, V = L.rows({ order: "index" }).data().map(function(Z) {
              return Z.filter !== null ? Z.filter.toString() : null;
            }).toArray(), j = 0, G = S.searchPanes.panes[A].selected; j < G.length; j++) {
              var ee = G[j], J = -1;
              ee !== null && (J = V.indexOf(ee.toString())), J > -1 && (this.s.serverSelecting = !0, L.row(J).select(), this.s.serverSelecting = !1);
            }
        }
      }, F.prototype._updateSelection = function(S) {
        var A = this, P = function(V) {
          if (k.versionCheck("2"))
            A.s.dt.processing(V);
          else {
            var j = A.s.dt.settings()[0], G = j.oApi;
            G._fnProcessingDisplay(j, !1);
          }
        }, L = function() {
          A.s.scrollTop = e(A.s.dtPane.table().node()).parent()[0].scrollTop, A.s.dt.page.info().serverSide && !A.s.updating ? A.s.serverSelecting || (A.s.serverSelect = A.s.dtPane.rows({ selected: !0 }).data().toArray(), A.s.dt.draw(!1)) : S && A._makeSelection(), P(!1);
        };
        P(!0), setTimeout(L, 1);
      }, F.prototype._addOption = function(S, A, P, L, V, j) {
        if (Array.isArray(S) || S instanceof t.Api) {
          if (S instanceof t.Api && (S = S.toArray(), A = A.toArray()), S.length === A.length) {
            for (var G = 0; G < S.length; G++)
              j[S[G]] ? j[S[G]]++ : (j[S[G]] = 1, V.push({
                display: A[G],
                filter: S[G],
                sort: P[G],
                type: L[G]
              })), this.s.rowData.totalOptions++;
            return;
          }
          throw new Error("display and filter not the same length");
        } else
          typeof this.s.colOpts.orthogonal == "string" ? j[S] ? (j[S]++, this.s.rowData.totalOptions++) : (j[S] = 1, V.push({
            display: A,
            filter: S,
            sort: P,
            type: L
          }), this.s.rowData.totalOptions++) : (j[S] = 1, V.push({
            display: A,
            filter: S,
            sort: P,
            type: L
          }));
      }, F.prototype._buildPane = function(S, A, P) {
        var L = this;
        S === void 0 && (S = []), A === void 0 && (A = null), P === void 0 && (P = null), this.s.selections = [];
        var V = this.s.dt.state.loaded(), j;
        if (this.s.listSet && (V = this.s.dt.state()), this.s.colExists) {
          var G = -1;
          if (V && V.searchPanes && V.searchPanes.panes) {
            for (var ee = 0; ee < V.searchPanes.panes.length; ee++)
              if (V.searchPanes.panes[ee].id === this.s.index) {
                G = ee;
                break;
              }
          }
          if ((this.s.colOpts.show === !1 || this.s.colOpts.show !== void 0 && this.s.colOpts.show !== !0) && G === -1)
            return this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1, !1;
          if ((this.s.colOpts.show === !0 || G !== -1) && (this.s.displayed = !0), !this.s.dt.page.info().serverSide && (!A || !A.searchPanes || !A.searchPanes.options)) {
            this.s.rowData.arrayFilter.length === 0 && (this.s.rowData.totalOptions = 0, this._populatePane(), this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins);
            var J = Object.keys(this.s.rowData.binsOriginal).length, Z = this._uniqueRatio(J, this.s.dt.rows()[0].length);
            if (this.s.displayed === !1 && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? Z > this.c.threshold : Z > this.s.colOpts.threshold) || this.s.colOpts.show !== !0 && J <= 1)) {
              this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
              return;
            }
            this.dom.container.addClass(this.classes.show), this.s.displayed = !0;
          } else
            A && A.searchPanes && A.searchPanes.options && this._serverPopulate(A);
        } else
          this.s.displayed = !0;
        this._displayPane(), this.s.listSet || this.dom.dtP.on("stateLoadParams.dtsp", function(Ye, $e, qe) {
          e.isEmptyObject(L.s.dt.state.loaded()) && e.each(qe, function(Fe) {
            delete qe[Fe];
          });
        }), P !== null && this.dom.panesContainer.has(P).length > 0 ? this.dom.container.insertAfter(P) : this.dom.panesContainer.prepend(this.dom.container);
        var te = e.fn.dataTable.ext.errMode;
        e.fn.dataTable.ext.errMode = "none", this.dom.dtP.on("init.dt", function(Ye, $e) {
          var qe = L.dom.dtP.DataTable(), Fe = qe.select.style();
          qe.select.style(Fe);
        });
        var se;
        if (e.fn.dataTable.versionCheck("2")) {
          var oe = e.extend(!0, {}, e.fn.dataTable.defaults.layout);
          e.each(oe, function(Ye, $e) {
            oe[Ye] = null;
          }), se = { layout: oe };
        } else
          se = { dom: "t" };
        this.s.dtPane = this.dom.dtP.DataTable(e.extend(!0, this._getPaneConfig(), this.c.dtOpts, this.s.colOpts ? this.s.colOpts.dtOpts : {}, this.s.colOpts.options || !this.s.colExists ? {
          createdRow: function(Ye, $e) {
            e(Ye).addClass($e.className);
          }
        } : void 0, this.s.customPaneSettings !== null && this.s.customPaneSettings.dtOpts ? this.s.customPaneSettings.dtOpts : {}, se)), this.dom.dtP.addClass(this.classes.table);
        var le = "Custom Pane";
        this.s.customPaneSettings && this.s.customPaneSettings.header ? le = this.s.customPaneSettings.header : this.s.colOpts.header ? le = this.s.colOpts.header : this.s.colExists && (le = e.fn.dataTable.versionCheck("2") ? this.s.dt.column(this.s.index).title() : this.s.dt.settings()[0].aoColumns[this.s.index].sTitle), le = this._escapeHTML(le);
        var ce = this.s.dt.i18n("searchBuilder.searchTitle", this.c.i18n.searchTitle).replace("{name}", le);
        if (this.dom.searchBox.attr("placeholder", le).attr("title", ce), e.fn.dataTable.ext.errMode = te, this.s.colExists)
          for (var ve = 0, Ne = this.s.rowData.arrayFilter.length; ve < Ne; ve++)
            if (this.s.dt.page.info().serverSide) {
              j = this.addRow(this.s.rowData.arrayFilter[ve].display, this.s.rowData.arrayFilter[ve].filter, this.s.rowData.arrayFilter[ve].sort, this.s.rowData.arrayFilter[ve].type);
              for (var Pe = 0, Ie = this.s.serverSelect; Pe < Ie.length; Pe++) {
                var Ze = Ie[Pe];
                Ze.filter === this.s.rowData.arrayFilter[ve].filter && (this.s.serverSelecting = !0, j.select(), this.s.serverSelecting = !1);
              }
            } else
              !this.s.dt.page.info().serverSide && this.s.rowData.arrayFilter[ve] ? this.addRow(this.s.rowData.arrayFilter[ve].display, this.s.rowData.arrayFilter[ve].filter, this.s.rowData.arrayFilter[ve].sort, this.s.rowData.arrayFilter[ve].type) : this.s.dt.page.info().serverSide || this.addRow("", "", "", "");
        (this.s.colOpts.options || this.s.customPaneSettings && this.s.customPaneSettings.options) && this._getComparisonRows(), this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop, this.adjustTopRow(), this.setListeners(), this.s.listSet = !0;
        for (var We = 0, Be = S; We < Be.length; We++) {
          var Ee = Be[We];
          if (Ee)
            for (var at = 0, Pt = this.s.dtPane.rows().indexes().toArray(); at < Pt.length; at++)
              j = Pt[at], this.s.dtPane.row(j).data() && Ee.filter === this.s.dtPane.row(j).data().filter && (this.s.dt.page.info().serverSide ? (this.s.serverSelecting = !0, this.s.dtPane.row(j).select(), this.s.serverSelecting = !1) : this.s.dtPane.row(j).select());
        }
        if (this.s.dt.page.info().serverSide && this.s.dtPane.search(this.dom.searchBox.val()).draw(), (this.c.initCollapsed && this.s.colOpts.initCollapsed !== !1 || this.s.colOpts.initCollapsed) && (this.c.collapse && this.s.colOpts.collapse !== !1 || this.s.colOpts.collapse) && (this.s.dtPane.settings()[0]._bInitComplete ? this.collapse() : this.s.dtPane.one("init", function() {
          return L.collapse();
        })), V && V.searchPanes && V.searchPanes.panes && (!A || A.draw === 1)) {
          this._reloadSelect(V);
          for (var St = 0, Ht = V.searchPanes.panes; St < Ht.length; St++) {
            var ke = Ht[St];
            ke.id === this.s.index && (ke.searchTerm && ke.searchTerm.length > 0 && this.dom.searchBox.val(ke.searchTerm).trigger("input"), ke.order && this.s.dtPane.order(ke.order).draw(), ke.collapsed ? this.collapse() : this.show());
          }
        }
        return !0;
      }, F.prototype._displayPane = function() {
        this.dom.dtP.empty(), this.dom.topRow.empty().addClass(this.classes.topRow), parseInt(this.c.layout.split("-")[1], 10) > 3 && this.dom.container.addClass(this.classes.smallGap), this.dom.topRow.addClass(this.classes.subRowsContainer).append(this.dom.upper.append(this.dom.searchCont)).append(this.dom.lower.append(this.dom.buttonGroup)), (this.c.dtOpts.searching === !1 || this.s.colOpts.dtOpts && this.s.colOpts.dtOpts.searching === !1 || !this.c.controls || !this.s.colOpts.controls || this.s.customPaneSettings && this.s.customPaneSettings.dtOpts && this.s.customPaneSettings.dtOpts.searching !== void 0 && !this.s.customPaneSettings.dtOpts.searching) && this.dom.searchBox.removeClass(this.classes.paneInputButton).addClass(this.classes.disabledButton).attr("disabled", "true"), this.dom.searchBox.appendTo(this.dom.searchCont), this._searchContSetup(), this.c.clear && this.c.controls && this.s.colOpts.controls && this.dom.clear.appendTo(this.dom.buttonGroup), this.c.orderable && this.s.colOpts.orderable && this.c.controls && this.s.colOpts.controls && this.dom.nameButton.appendTo(this.dom.buttonGroup), this.c.viewCount && this.s.colOpts.viewCount && this.c.orderable && this.s.colOpts.orderable && this.c.controls && this.s.colOpts.controls && this.dom.countButton.appendTo(this.dom.buttonGroup), (this.c.collapse && this.s.colOpts.collapse !== !1 || this.s.colOpts.collapse) && this.c.controls && this.s.colOpts.controls && this.dom.collapseButton.appendTo(this.dom.buttonGroup), this.dom.container.prepend(this.dom.topRow).append(this.dom.dtP).show();
      }, F.prototype._escapeHTML = function(S) {
        return S.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
      }, F.prototype._getBonusOptions = function() {
        var S = {
          threshold: null
        };
        return e.extend(!0, {}, F.defaults, S, this.c ? this.c : {});
      }, F.prototype._getOptions = function() {
        var S = this.s.dt, A = {
          collapse: null,
          emptyMessage: !1,
          initCollapsed: null,
          threshold: null
        }, P = S.settings()[0].aoColumns[this.s.index].searchPanes, L = e.extend(!0, {}, F.defaults, A, P);
        return P && P.hideCount && P.viewCount === void 0 && (L.viewCount = !P.hideCount), L;
      }, F.prototype._populatePane = function() {
        this.s.rowData.arrayFilter = [], this.s.rowData.bins = {};
        var S = this.s.dt.context[0];
        if (!this.s.dt.page.info().serverSide)
          for (var A = 0, P = this.s.dt.rows().indexes().toArray(); A < P.length; A++) {
            var L = P[A];
            this._populatePaneArray(L, this.s.rowData.arrayFilter, S);
          }
      }, F.prototype._search = function(S, A) {
        for (var P = this.s.colOpts, L = this.s.dt, V = 0, j = this.s.selections; V < j.length; V++) {
          var G = j[V];
          if (typeof G == "string" && typeof S == "string" && (G = this._escapeHTML(G)), Array.isArray(S)) {
            if (P.combiner === "and") {
              if (!S.includes(G))
                return !1;
            } else if (S.includes(G))
              return !0;
          } else if (typeof G == "function") {
            if (G.call(L, L.row(A).data(), A)) {
              if (P.combiner === "or")
                return !0;
            } else if (P.combiner === "and")
              return !1;
          } else if (S === G || // Loose type checking incase number type in column comparing to a string
          // eslint-disable-next-line eqeqeq
          !(typeof S == "string" && S.length === 0) && S == G || G === null && typeof S == "string" && S === "")
            return !0;
        }
        return P.combiner === "and";
      }, F.prototype._searchContSetup = function() {
        this.c.controls && this.s.colOpts.controls && this.dom.searchButton.appendTo(this.dom.searchLabelCont), this.c.dtOpts.searching === !1 || this.s.colOpts.dtOpts.searching === !1 || this.s.customPaneSettings && this.s.customPaneSettings.dtOpts && this.s.customPaneSettings.dtOpts.searching !== void 0 && !this.s.customPaneSettings.dtOpts.searching || this.dom.searchLabelCont.appendTo(this.dom.searchCont);
      }, F.prototype._searchExtras = function() {
        var S = this.s.updating;
        this.s.updating = !0;
        var A = this.s.dtPane.rows({ selected: !0 }).data().pluck("filter").toArray(), P = A.indexOf(this.emptyMessage()), L = e(this.s.dtPane.table().container());
        P > -1 && (A[P] = ""), A.length > 0 ? L.addClass(this.classes.selected) : A.length === 0 && L.removeClass(this.classes.selected), this.s.updating = S;
      }, F.version = "2.1.2", F.classes = {
        bordered: "dtsp-bordered",
        buttonGroup: "dtsp-buttonGroup",
        buttonSub: "dtsp-buttonSub",
        caret: "dtsp-caret",
        clear: "dtsp-clear",
        clearAll: "dtsp-clearAll",
        clearButton: "clearButton",
        collapseAll: "dtsp-collapseAll",
        collapseButton: "dtsp-collapseButton",
        container: "dtsp-searchPane",
        countButton: "dtsp-countButton",
        disabledButton: "dtsp-disabledButton",
        hidden: "dtsp-hidden",
        hide: "dtsp-hide",
        layout: "dtsp-",
        name: "dtsp-name",
        nameButton: "dtsp-nameButton",
        nameCont: "dtsp-nameCont",
        narrow: "dtsp-narrow",
        paneButton: "dtsp-paneButton",
        paneInputButton: "dtsp-paneInputButton",
        pill: "dtsp-pill",
        rotated: "dtsp-rotated",
        search: "dtsp-search",
        searchCont: "dtsp-searchCont",
        searchIcon: "dtsp-searchIcon",
        searchLabelCont: "dtsp-searchButtonCont",
        selected: "dtsp-selected",
        smallGap: "dtsp-smallGap",
        subRow1: "dtsp-subRow1",
        subRow2: "dtsp-subRow2",
        subRowsContainer: "dtsp-subRowsContainer",
        title: "dtsp-title",
        topRow: "dtsp-topRow"
      }, F.defaults = {
        clear: !0,
        collapse: !0,
        combiner: "or",
        container: function(S) {
          return S.table().container();
        },
        controls: !0,
        dtOpts: {},
        emptyMessage: null,
        hideCount: !1,
        i18n: {
          aria: {
            clearPane: "Clear selection",
            clearSearch: "Clear search",
            collapse: "Collapse / show pane",
            orderByCount: "Order by count",
            orderByLabel: "Order by label"
          },
          clearPane: "&times;",
          count: "{total}",
          emptyMessage: "<em>Empty</em>",
          searchTitle: "Search: {name}"
        },
        initCollapsed: !1,
        layout: "auto",
        name: void 0,
        orderable: !0,
        orthogonal: {
          display: "display",
          filter: "filter",
          hideCount: !1,
          search: "filter",
          show: void 0,
          sort: "sort",
          threshold: 0.6,
          type: "type",
          viewCount: !0
        },
        preSelect: [],
        threshold: 0.6,
        viewCount: !0
      }, F;
    }()
  ), i = window && window.__extends || /* @__PURE__ */ function() {
    var F = function(S, A) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, L) {
        P.__proto__ = L;
      } || function(P, L) {
        for (var V in L)
          L.hasOwnProperty(V) && (P[V] = L[V]);
      }, F(S, A);
    };
    return function(S, A) {
      F(S, A);
      function P() {
        this.constructor = S;
      }
      S.prototype = A === null ? Object.create(A) : (P.prototype = A.prototype, new P());
    };
  }(), a = (
    /** @class */
    function(F) {
      i(S, F);
      function S(A, P, L, V, j) {
        return F.call(this, A, P, L, V, j) || this;
      }
      return S.prototype._emptyPane = function() {
        var A = this.s.dtPane;
        if (k.versionCheck("2")) {
          var P = A.select.last(), L;
          return P && A.row(P.row).any() && (L = A.row(P.row).data().index), A.rows().remove(), function() {
            if (L !== void 0) {
              var V = A.row(function(j, G) {
                return G.index === L;
              }).index();
              A.select.last({ row: V, column: 0 });
            }
          };
        }
        return A.rows().remove(), function() {
        };
      }, S.prototype._serverPopulate = function(A) {
        var P, L, V;
        this.s.rowData.binsShown = {}, this.s.rowData.arrayFilter = [], A.tableLength !== void 0 ? (this.s.tableLength = A.tableLength, this.s.rowData.totalOptions = this.s.tableLength) : (this.s.tableLength === null || this.s.dt.rows()[0].length > this.s.tableLength) && (this.s.tableLength = this.s.dt.rows()[0].length, this.s.rowData.totalOptions = this.s.tableLength);
        var j = this.s.dt.column(this.s.index).dataSrc();
        if (A.searchPanes.options[j] !== void 0)
          for (var G = 0, ee = A.searchPanes.options[j]; G < ee.length; G++) {
            var J = ee[G];
            this.s.rowData.arrayFilter.push({
              display: J.label,
              filter: J.value,
              shown: +J.count,
              sort: J.label,
              total: +J.total,
              type: J.label
            }), this.s.rowData.binsShown[J.value] = +J.count, this.s.rowData.bins[J.value] = +J.total;
          }
        var Z = Object.keys(this.s.rowData.bins).length, te = this._uniqueRatio(Z, this.s.tableLength);
        if (!this.s.colOpts.show && this.s.displayed === !1 && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? te > this.c.threshold : te > this.s.colOpts.threshold) || this.s.colOpts.show !== !0 && Z <= 1)) {
          this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
          return;
        }
        if (this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins, this.s.displayed = !0, this.s.dtPane) {
          for (var se = this.s.serverSelect, oe = this._emptyPane(), le = 0, ce = this.s.rowData.arrayFilter; le < ce.length; le++)
            if (V = ce[le], this._shouldAddRow(V)) {
              L = this.addRow(V.display, V.filter, V.sort, V.type);
              for (var ve = 0; ve < se.length; ve++)
                if (P = se[ve], P.filter === V.filter) {
                  this.s.serverSelecting = !0, L.select(), this.s.serverSelecting = !1, se.splice(ve, 1), this.s.selections.push(V.filter);
                  break;
                }
            }
          for (var Ne = 0, Pe = se; Ne < Pe.length; Ne++) {
            P = Pe[Ne];
            for (var Ie = 0, Ze = this.s.rowData.arrayOriginal; Ie < Ze.length; Ie++)
              V = Ze[Ie], V.filter === P.filter && (L = this.addRow(V.display, V.filter, V.sort, V.type), this.s.serverSelecting = !0, L.select(), this.s.serverSelecting = !1, this.s.selections.push(V.filter));
          }
          this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray(), this.s.dtPane.draw(), oe();
        }
      }, S.prototype.updateRows = function() {
        if (!this.s.dt.page.info().serverSide) {
          this.s.rowData.binsShown = {};
          for (var A = 0, P = this.s.dt.rows({ search: "applied" }).indexes().toArray(); A < P.length; A++) {
            var L = P[A];
            this._updateShown(L, this.s.dt.settings()[0], this.s.rowData.binsShown);
          }
        }
        for (var V = function(Z) {
          Z.shown = typeof j.s.rowData.binsShown[Z.filter] == "number" ? j.s.rowData.binsShown[Z.filter] : 0, j.s.dtPane.row(function(te, se) {
            return se && se.index === Z.index;
          }).data(Z);
        }, j = this, G = 0, ee = this.s.dtPane.rows().data().toArray(); G < ee.length; G++) {
          var J = ee[G];
          V(J);
        }
        this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop;
      }, S.prototype._makeSelection = function() {
      }, S.prototype._reloadSelect = function() {
      }, S.prototype._shouldAddRow = function(A) {
        return !0;
      }, S.prototype._updateSelection = function() {
        this.s.dt.page.info().serverSide && !this.s.updating && !this.s.serverSelecting && (this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray());
      }, S.prototype._updateShown = function(A, P, L) {
        L === void 0 && (L = this.s.rowData.binsShown);
        var V = typeof this.s.colOpts.orthogonal == "string" ? this.s.colOpts.orthogonal : this.s.colOpts.orthogonal.search, j = P.fastData ? P.fastData : function(se, oe, le) {
          return P.oApi._fnGetCellData(P, se, oe, le);
        }, G = j(A, this.s.index, V), ee = function(se) {
          L[se] ? L[se]++ : L[se] = 1;
        };
        if (Array.isArray(G))
          for (var J = 0, Z = G; J < Z.length; J++) {
            var te = Z[J];
            ee(te);
          }
        else
          ee(G);
      }, S;
    }(r)
  ), o = window && window.__extends || /* @__PURE__ */ function() {
    var F = function(S, A) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, L) {
        P.__proto__ = L;
      } || function(P, L) {
        for (var V in L)
          L.hasOwnProperty(V) && (P[V] = L[V]);
      }, F(S, A);
    };
    return function(S, A) {
      F(S, A);
      function P() {
        this.constructor = S;
      }
      S.prototype = A === null ? Object.create(A) : (P.prototype = A.prototype, new P());
    };
  }(), u;
  function v(F) {
    u = F;
  }
  var b = (
    /** @class */
    function(F) {
      o(S, F);
      function S(A, P, L, V, j) {
        var G = this, ee = {
          i18n: {
            countFiltered: "{shown} ({total})"
          }
        };
        return G = F.call(this, A, u.extend(ee, P), L, V, j) || this, G;
      }
      return S.prototype._getMessage = function(A) {
        var P = this.s.dt.i18n("searchPanes.count", this.c.i18n.count), L = this.s.dt.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered);
        return (this.s.filteringActive ? L : P).replace(/{total}/g, A.total).replace(/{shown}/g, A.shown);
      }, S.prototype._getShown = function(A) {
        return this.s.rowData.binsShown && this.s.rowData.binsShown[A] ? this.s.rowData.binsShown[A] : 0;
      }, S;
    }(a)
  ), m = window && window.__extends || /* @__PURE__ */ function() {
    var F = function(S, A) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, L) {
        P.__proto__ = L;
      } || function(P, L) {
        for (var V in L)
          L.hasOwnProperty(V) && (P[V] = L[V]);
      }, F(S, A);
    };
    return function(S, A) {
      F(S, A);
      function P() {
        this.constructor = S;
      }
      S.prototype = A === null ? Object.create(A) : (P.prototype = A.prototype, new P());
    };
  }(), x;
  function _(F) {
    x = F;
  }
  var T = (
    /** @class */
    function(F) {
      m(S, F);
      function S(A, P, L, V, j) {
        var G = this, ee = {
          i18n: {
            count: "{shown}"
          }
        };
        return G = F.call(this, A, x.extend(ee, P), L, V, j) || this, G;
      }
      return S.prototype.updateRows = function() {
        var A = this.s.dtPane.rows({ selected: !0 }).data().toArray(), P;
        if (this.s.colOpts.options || this.s.customPaneSettings && this.s.customPaneSettings.options) {
          this._getComparisonRows();
          for (var L = this.s.dtPane.rows().toArray()[0], V = 0; V < L.length; V++) {
            var j = this.s.dtPane.row(L[V]), G = j.data();
            if (G !== void 0) {
              if (G.shown === 0) {
                j.remove(), L = this.s.dtPane.rows().toArray()[0], V--;
                continue;
              }
              for (var ee = 0, J = A; ee < J.length; ee++)
                if (P = J[ee], G.filter === P.filter) {
                  j.select(), A.splice(V, 1), this.s.selections.push(G.filter);
                  break;
                }
            }
          }
        } else {
          if (!this.s.dt.page.info().serverSide) {
            this._activePopulatePane(), this.s.rowData.binsShown = {};
            for (var Z = 0, te = this.s.dt.rows({ search: "applied" }).indexes().toArray(); Z < te.length; Z++) {
              var se = te[Z];
              this._updateShown(se, this.s.dt.settings()[0], this.s.rowData.binsShown);
            }
          }
          this.s.dtPane.rows().remove();
          for (var oe = 0, le = this.s.rowData.arrayFilter; oe < le.length; oe++) {
            var ce = le[oe];
            if (ce.shown !== 0)
              for (var ve = this.addRow(ce.display, ce.filter, ce.sort, ce.type, void 0), Ne = 0; Ne < A.length; Ne++) {
                var Pe = A[Ne];
                if (Pe.filter === ce.filter) {
                  ve.select(), A.splice(Ne, 1), this.s.selections.push(ce.filter);
                  break;
                }
              }
          }
          for (var Ie = 0, Ze = A; Ie < Ze.length; Ie++) {
            P = Ze[Ie];
            for (var We = 0, Be = this.s.rowData.arrayOriginal; We < Be.length; We++) {
              var Ee = Be[We];
              if (Ee.filter === P.filter) {
                var at = this.addRow(Ee.display, Ee.filter, Ee.sort, Ee.type, void 0);
                at.select(), this.s.selections.push(Ee.filter);
              }
            }
          }
        }
        this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop, this.s.dt.page.info().serverSide || this.s.dt.draw(!1);
      }, S.prototype._activePopulatePane = function() {
        this.s.rowData.arrayFilter = [], this.s.rowData.bins = {};
        var A = this.s.dt.settings()[0];
        if (!this.s.dt.page.info().serverSide)
          for (var P = 0, L = this.s.dt.rows({ search: "applied" }).indexes().toArray(); P < L.length; P++) {
            var V = L[P];
            this._populatePaneArray(V, this.s.rowData.arrayFilter, A);
          }
      }, S.prototype._getComparisonRows = function() {
        var A = this.s.colOpts.options ? this.s.colOpts.options : this.s.customPaneSettings && this.s.customPaneSettings.options ? this.s.customPaneSettings.options : void 0;
        if (A !== void 0) {
          var P = this.s.dt.rows(), L = this.s.dt.rows({ search: "applied" }), V = P.data().toArray(), j = L.data().toArray(), G = [];
          this.s.dtPane.clear(), this.s.indexes = [];
          for (var ee = 0, J = A; ee < J.length; ee++) {
            var Z = J[ee], te = Z.label !== "" ? Z.label : this.emptyMessage(), se = {
              className: Z.className,
              display: te,
              filter: typeof Z.value == "function" ? Z.value : [],
              shown: 0,
              sort: te,
              total: 0,
              type: te
            };
            if (typeof Z.value == "function") {
              for (var oe = 0; oe < V.length; oe++)
                Z.value.call(this.s.dt, V[oe], P[0][oe]) && se.total++;
              for (var le = 0; le < j.length; le++)
                Z.value.call(this.s.dt, j[le], L[0][le]) && se.shown++;
              typeof se.filter != "function" && se.filter.push(Z.filter);
            }
            G.push(this.addRow(se.display, se.filter, se.sort, se.type, se.className, se.total, se.shown));
          }
          return G;
        }
      }, S.prototype._getMessage = function(A) {
        return this.s.dt.i18n("searchPanes.count", this.c.i18n.count).replace(/{total}/g, A.total).replace(/{shown}/g, A.shown);
      }, S.prototype._getShown = function(A) {
        return this.s.rowData.binsShown && this.s.rowData.binsShown[A] ? this.s.rowData.binsShown[A] : 0;
      }, S.prototype._shouldAddRow = function(A) {
        return A.shown > 0;
      }, S;
    }(a)
  ), N = window && window.__extends || /* @__PURE__ */ function() {
    var F = function(S, A) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, L) {
        P.__proto__ = L;
      } || function(P, L) {
        for (var V in L)
          L.hasOwnProperty(V) && (P[V] = L[V]);
      }, F(S, A);
    };
    return function(S, A) {
      F(S, A);
      function P() {
        this.constructor = S;
      }
      S.prototype = A === null ? Object.create(A) : (P.prototype = A.prototype, new P());
    };
  }(), D;
  function p(F) {
    D = F;
  }
  var l = (
    /** @class */
    function(F) {
      N(S, F);
      function S(A, P, L, V, j) {
        var G = this, ee = {
          i18n: {
            count: "{total}",
            countFiltered: "{shown} ({total})"
          }
        };
        return G = F.call(this, A, D.extend(ee, P), L, V, j) || this, G;
      }
      return S.prototype._activePopulatePane = function() {
        this.s.rowData.arrayFilter = [], this.s.rowData.binsShown = {};
        var A = this.s.dt.settings()[0];
        if (!this.s.dt.page.info().serverSide)
          for (var P = 0, L = this.s.dt.rows({ search: "applied" }).indexes().toArray(); P < L.length; P++) {
            var V = L[P];
            this._populatePaneArray(V, this.s.rowData.arrayFilter, A, this.s.rowData.binsShown);
          }
      }, S.prototype._getMessage = function(A) {
        var P = this.s.dt.i18n("searchPanes.count", this.c.i18n.count), L = this.s.dt.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered);
        return (this.s.filteringActive ? L : P).replace(/{total}/g, A.total).replace(/{shown}/g, A.shown);
      }, S;
    }(T)
  ), d, y;
  function E(F) {
    d = F, y = F.fn.dataTable;
  }
  var O = (
    /** @class */
    function() {
      function F(S, A, P, L) {
        var V = this;
        if (P === void 0 && (P = !1), L === void 0 && (L = r), !y || !y.versionCheck || !y.versionCheck("1.10.0"))
          throw new Error("SearchPane requires DataTables 1.10 or newer");
        if (!y.select)
          throw new Error("SearchPane requires Select");
        var j = new y.Api(S);
        if (this.classes = d.extend(!0, {}, F.classes), this.c = d.extend(!0, {}, F.defaults, A), this.dom = {
          clearAll: d('<button type="button"/>').addClass(this.classes.clearAll).html(j.i18n("searchPanes.clearMessage", this.c.i18n.clearMessage)),
          collapseAll: d('<button type="button"/>').addClass(this.classes.collapseAll).html(j.i18n("searchPanes.collapseMessage", this.c.i18n.collapseMessage)),
          container: d("<div/>").addClass(this.classes.panes).html(j.i18n("searchPanes.loadMessage", this.c.i18n.loadMessage)),
          emptyMessage: d("<div/>").addClass(this.classes.emptyMessage),
          panes: d("<div/>").addClass(this.classes.container),
          showAll: d('<button type="button"/>').addClass(this.classes.showAll).addClass(this.classes.disabledButton).attr("disabled", "true").html(j.i18n("searchPanes.showMessage", this.c.i18n.showMessage)),
          title: d("<div/>").addClass(this.classes.title),
          titleRow: d("<div/>").addClass(this.classes.titleRow)
        }, this.s = {
          colOpts: [],
          dt: j,
          filterCount: 0,
          minPaneWidth: 260,
          page: 0,
          paging: !1,
          pagingST: !1,
          paneClass: L,
          panes: [],
          selectionList: [],
          serverData: {},
          stateRead: !1,
          updating: !1
        }, !j.settings()[0]._searchPanes) {
          if (d(document).on("draw.dt", function(ee) {
            V.dom.container.find(ee.target).length && V._updateFilterCount();
          }), this._getState(), this.s.dt.page.info().serverSide) {
            var G = this.s.dt.settings()[0];
            this.s.dt.on("preXhr.dtsps", function(ee, J, Z) {
              if (G === J) {
                Z.searchPanes === void 0 && (Z.searchPanes = {}), Z.searchPanes_null === void 0 && (Z.searchPanes_null = {});
                for (var te, se = 0, oe = V.s.selectionList; se < oe.length; se++) {
                  var le = oe[se];
                  te = V.s.dt.column(le.column).dataSrc(), Z.searchPanes[te] === void 0 && (Z.searchPanes[te] = {}), Z.searchPanes_null[te] === void 0 && (Z.searchPanes_null[te] = {});
                  for (var ce = 0; ce < le.rows.length; ce++)
                    Z.searchPanes[te][ce] = le.rows[ce], Z.searchPanes[te][ce] === null ? Z.searchPanes_null[te][ce] = !0 : Z.searchPanes_null[te][ce] = !1;
                }
                V.s.selectionList.length > 0 && (Z.searchPanesLast = te), Z.searchPanes_options = {
                  cascade: V.c.cascadePanes,
                  viewCount: V.c.viewCount,
                  viewTotal: V.c.viewTotal
                };
              }
            });
          }
          return this._setXHR(), j.settings()[0]._searchPanes = this, this.s.dt.settings()[0]._bInitComplete || P ? this._paneDeclare(j, S, A) : j.one("preInit.dtsps", function() {
            V._paneDeclare(j, S, A);
          }), this;
        }
      }
      return F.prototype.clearSelections = function() {
        for (var S, A = 0, P = this.s.panes; A < P.length; A++)
          S = P[A], S.s.dtPane && (S.s.scrollTop = S.s.dtPane.table().node().parentNode.scrollTop);
        var L = this.dom.container.find("." + this.classes.search.replace(/\s+/g, "."));
        L.each(function() {
          d(this).val("").trigger("input");
        }), this.s.selectionList = [];
        for (var V = [], j = 0, G = this.s.panes; j < G.length; j++)
          S = G[j], S.s.dtPane && V.push(S.clearPane());
        return V;
      }, F.prototype.getNode = function() {
        return this.dom.container;
      }, F.prototype.rebuild = function(S, A) {
        S === void 0 && (S = !1), A === void 0 && (A = !1), this.dom.emptyMessage.detach(), S === !1 && this.dom.panes.empty();
        for (var P = [], L = 0, V = this.s.panes; L < V.length; L++) {
          var j = V[L];
          (S === !1 || j.s.index === S) && (j.clearData(), j.rebuildPane(this.s.dt.page.info().serverSide ? this.s.serverData : void 0, A), this.dom.panes.append(j.dom.container), P.push(j));
        }
        return this._updateSelection(), this._updateFilterCount(), this._attachPaneContainer(), this._initSelectionListeners(!1), this.s.dt.draw(!A), this.resizePanes(), P.length === 1 ? P[0] : P;
      }, F.prototype.resizePanes = function() {
        var S;
        if (this.c.layout === "auto") {
          for (var A = d(this.s.dt.searchPanes.container()).width(), P = Math.floor(A / this.s.minPaneWidth), L = 1, V = 0, j = [], G = 0, ee = this.s.panes; G < ee.length; G++)
            S = ee[G], S.s.displayed && j.push(S.s.index);
          var J = j.length;
          if (P === J)
            L = P;
          else
            for (var Z = P; Z > 1; Z--) {
              var te = J % Z;
              if (te === 0) {
                L = Z, V = 0;
                break;
              } else
                te > V && (L = Z, V = te);
            }
          var se = V !== 0 ? j.slice(j.length - V, j.length) : [];
          this.s.panes.forEach(function(ce) {
            ce.s.displayed && ce.resize("columns-" + (se.includes(ce.s.index) ? V : L));
          });
        } else
          for (var oe = 0, le = this.s.panes; oe < le.length; oe++)
            S = le[oe], S.adjustTopRow();
        return this;
      }, F.prototype._initSelectionListeners = function(S) {
      }, F.prototype._serverTotals = function() {
      }, F.prototype._setXHR = function() {
        var S = this, A = this.s.dt.settings()[0], P = function(L) {
          L && L.searchPanes && L.searchPanes.options && (S.s.serverData = L, S.s.serverData.tableLength = L.recordsTotal, S._serverTotals());
        };
        this.s.dt.on("xhr.dtsps", function(L, V, j) {
          A === V && P(j);
        }), P(this.s.dt.ajax.json());
      }, F.prototype._stateLoadListener = function() {
        var S = this, A = this.s.dt.settings()[0];
        this.s.dt.on("stateLoadParams.dtsps", function(P, L, V) {
          if (!(V.searchPanes === void 0 || L !== A)) {
            if (S.clearSelections(), S.s.selectionList = V.searchPanes.selectionList ? V.searchPanes.selectionList : [], V.searchPanes.panes)
              for (var j = 0, G = V.searchPanes.panes; j < G.length; j++)
                for (var ee = G[j], J = 0, Z = S.s.panes; J < Z.length; J++) {
                  var te = Z[J];
                  ee.id === te.s.index && te.s.dtPane && (te.dom.searchBox.val(ee.searchTerm), te.s.dtPane.order(ee.order));
                }
            S._makeSelections(S.s.selectionList);
          }
        });
      }, F.prototype._updateSelection = function() {
        this.s.selectionList = [];
        for (var S = 0, A = this.s.panes; S < A.length; S++) {
          var P = A[S];
          if (P.s.dtPane) {
            var L = P.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(V) {
              return V.filter;
            });
            L.length && this.s.selectionList.push({
              column: P.s.index,
              rows: L
            });
          }
        }
      }, F.prototype._attach = function() {
        var S = this;
        this.dom.titleRow.removeClass(this.classes.hide).detach().append(this.dom.title), this.c.clear && this.dom.clearAll.appendTo(this.dom.titleRow).off("click.dtsps").on("click.dtsps", function() {
          return S.clearSelections();
        }), this.c.collapse && (this.dom.showAll.appendTo(this.dom.titleRow), this.dom.collapseAll.appendTo(this.dom.titleRow), this._setCollapseListener());
        for (var A = 0, P = this.s.panes; A < P.length; A++) {
          var L = P[A];
          this.dom.panes.append(L.dom.container);
        }
        this.dom.container[0].childNodes.forEach(function(V) {
          return V.remove();
        }), this.dom.container.removeClass(this.classes.hide).append(this.dom.titleRow).append(this.dom.panes), this.s.panes.forEach(function(V) {
          return V.setListeners();
        }), d("div." + this.classes.container).length === 0 && this.dom.container.prependTo(this.s.dt);
      }, F.prototype._attachMessage = function() {
        var S;
        try {
          S = this.s.dt.i18n("searchPanes.emptyPanes", this.c.i18n.emptyPanes);
        } catch {
          S = null;
        }
        if (S === null) {
          this.dom.container.addClass(this.classes.hide), this.dom.titleRow.removeClass(this.classes.hide);
          return;
        }
        this.dom.container.removeClass(this.classes.hide), this.dom.titleRow.addClass(this.classes.hide), this.dom.emptyMessage.html(S).appendTo(this.dom.container);
      }, F.prototype._attachPaneContainer = function() {
        for (var S = 0, A = this.s.panes; S < A.length; S++) {
          var P = A[S];
          if (P.s.displayed === !0) {
            this._attach();
            return;
          }
        }
        this._attachMessage();
      }, F.prototype._checkCollapse = function() {
        for (var S = !0, A = !0, P = 0, L = this.s.panes; P < L.length; P++) {
          var V = L[P];
          V.s.displayed && (V.dom.collapseButton.hasClass(V.classes.rotated) ? (this.dom.showAll.removeClass(this.classes.disabledButton).removeAttr("disabled"), A = !1) : (this.dom.collapseAll.removeClass(this.classes.disabledButton).removeAttr("disabled"), S = !1));
        }
        S && this.dom.collapseAll.addClass(this.classes.disabledButton).attr("disabled", "true"), A && this.dom.showAll.addClass(this.classes.disabledButton).attr("disabled", "true");
      }, F.prototype._checkMessage = function() {
        for (var S = 0, A = this.s.panes; S < A.length; S++) {
          var P = A[S];
          if (P.s.displayed === !0) {
            this.dom.emptyMessage.detach(), this.dom.titleRow.removeClass(this.classes.hide);
            return;
          }
        }
        this._attachMessage();
      }, F.prototype._collapseAll = function() {
        for (var S = 0, A = this.s.panes; S < A.length; S++) {
          var P = A[S];
          P.collapse();
        }
      }, F.prototype._findPane = function(S) {
        for (var A = 0, P = this.s.panes; A < P.length; A++) {
          var L = P[A];
          if (S === L.s.name)
            return L;
        }
      }, F.prototype._getState = function() {
        var S = this.s.dt.state.loaded();
        S && S.searchPanes && S.searchPanes.selectionList && (this.s.selectionList = S.searchPanes.selectionList);
      }, F.prototype._makeSelections = function(S) {
        for (var A = 0, P = S; A < P.length; A++) {
          for (var L = P[A], V = void 0, j = 0, G = this.s.panes; j < G.length; j++) {
            var ee = G[j];
            if (ee.s.index === L.column) {
              V = ee;
              break;
            }
          }
          if (V && V.s.dtPane) {
            for (var J = 0; J < V.s.dtPane.rows().data().toArray().length; J++)
              L.rows.includes(typeof V.s.dtPane.row(J).data().filter == "function" ? V.s.dtPane.cell(J, 0).data() : V.s.dtPane.row(J).data().filter) && V.s.dtPane.row(J).select();
            V.updateTable();
          }
        }
      }, F.prototype._paneDeclare = function(S, A, P) {
        var L = this;
        S.columns(this.c.columns.length > 0 ? this.c.columns : void 0).eq(0).each(function(ee) {
          L.s.panes.push(new L.s.paneClass(A, P, ee, L.dom.panes));
        });
        for (var V = S.columns().eq(0).toArray().length, j = 0; j < this.c.panes.length; j++) {
          var G = V + j;
          this.s.panes.push(new this.s.paneClass(A, P, G, this.dom.panes, this.c.panes[j]));
        }
        this.c.order.length > 0 && (this.s.panes = this.c.order.map(function(ee) {
          return L._findPane(ee);
        })), this.s.dt.settings()[0]._bInitComplete ? this._startup(S) : y.versionCheck("2") ? this.s.dt.settings()[0].aoInitComplete.push(function() {
          return L._startup(S);
        }) : this.s.dt.settings()[0].aoInitComplete.push({
          fn: function() {
            return L._startup(S);
          }
        });
      }, F.prototype._setCollapseListener = function() {
        var S = this;
        this.dom.collapseAll.off("click.dtsps").on("click.dtsps", function() {
          S._collapseAll(), S.dom.collapseAll.addClass(S.classes.disabledButton).attr("disabled", "true"), S.dom.showAll.removeClass(S.classes.disabledButton).removeAttr("disabled"), S.s.dt.state.save();
        }), this.dom.showAll.off("click.dtsps").on("click.dtsps", function() {
          S._showAll(), S.dom.showAll.addClass(S.classes.disabledButton).attr("disabled", "true"), S.dom.collapseAll.removeClass(S.classes.disabledButton).removeAttr("disabled"), S.s.dt.state.save();
        });
        for (var A = 0, P = this.s.panes; A < P.length; A++) {
          var L = P[A];
          L.dom.topRow.off("collapse.dtsps").on("collapse.dtsps", function() {
            return S._checkCollapse();
          });
        }
        this._checkCollapse();
      }, F.prototype._showAll = function() {
        for (var S = 0, A = this.s.panes; S < A.length; S++) {
          var P = A[S];
          P.show();
        }
      }, F.prototype._startup = function(S) {
        var A = this;
        this._attach(), this.dom.panes.empty();
        for (var P = this.s.dt.settings()[0], L = 0, V = this.s.panes; L < V.length; L++) {
          var j = V[L];
          j.rebuildPane(Object.keys(this.s.serverData).length > 0 ? this.s.serverData : void 0), this.dom.panes.append(j.dom.container);
        }
        this.c.layout === "auto" && this.resizePanes();
        var G = this.s.dt.state.loaded();
        !this.s.stateRead && G && this.s.dt.page(G.start / this.s.dt.page.len()).draw("page"), this.s.stateRead = !0, this._checkMessage(), S.on("preDraw.dtsps", function() {
          !A.s.updating && !A.s.paging && (A._updateFilterCount(), A._updateSelection()), A.s.paging = !1;
        }), d(window).on("resize.dtsps", y.util.throttle(function() {
          return A.resizePanes();
        })), this.s.dt.on("stateSaveParams.dtsps", function(J, Z, te) {
          Z === P && (te.searchPanes === void 0 && (te.searchPanes = {}), te.searchPanes.selectionList = A.s.selectionList);
        }), this._stateLoadListener(), S.off("page.dtsps page-nc.dtsps").on("page.dtsps page-nc.dtsps", function(J, Z) {
          A.s.paging = !0, A.s.pagingST = !0, A.s.page = A.s.dt.page();
        }), this.s.dt.page.info().serverSide ? S.off("preXhr.dtsps").on("preXhr.dtsps", function(J, Z, te) {
          if (Z === P) {
            te.searchPanes || (te.searchPanes = {}), te.searchPanes_null || (te.searchPanes_null = {});
            for (var se = 0, oe = 0, le = A.s.panes; oe < le.length; oe++) {
              var ce = le[oe], ve = A.s.dt.column(ce.s.index).dataSrc();
              if (te.searchPanes[ve] || (te.searchPanes[ve] = {}), te.searchPanes_null[ve] || (te.searchPanes_null[ve] = {}), ce.s.dtPane)
                for (var Ne = ce.s.dtPane.rows({ selected: !0 }).data().toArray(), Pe = 0; Pe < Ne.length; Pe++)
                  te.searchPanes[ve][Pe] = Ne[Pe].filter, te.searchPanes[ve][Pe] ? te.searchPanes_null[ve][Pe] = !1 : te.searchPanes_null[ve][Pe] = !0, se++;
            }
            se > 0 && (se !== A.s.filterCount && (te.start = 0, A.s.page = 0, A.s.dt.page(A.s.page)), A.s.filterCount = se), A.s.selectionList.length > 0 && (te.searchPanesLast = A.s.dt.column(A.s.selectionList[A.s.selectionList.length - 1].column).dataSrc()), te.searchPanes_options = {
              cascade: A.c.cascadePanes,
              viewCount: A.c.viewCount,
              viewTotal: A.c.viewTotal
            };
          }
        }) : S.on("preXhr.dtsps", function() {
          return A.s.panes.forEach(function(J) {
            return J.clearData();
          });
        }), this.s.dt.on("xhr.dtsps", function(J, Z) {
          if (Z.nTable === A.s.dt.table().node() && !A.s.dt.page.info().serverSide) {
            var te = !1;
            A.s.dt.one("preDraw.dtsps", function() {
              if (!te) {
                var se = A.s.dt.page();
                te = !0, A.s.updating = !0, A.dom.panes.empty();
                for (var oe = 0, le = A.s.panes; oe < le.length; oe++) {
                  var ce = le[oe];
                  ce.clearData(), ce.rebuildPane(void 0, !0), A.dom.panes.append(ce.dom.container);
                }
                A.s.dt.page.info().serverSide || A.s.dt.draw(), A.s.updating = !1, A._updateSelection(), A._checkMessage(), A.s.dt.one("draw.dtsps", function() {
                  A.s.updating = !0, A.s.dt.page(se).draw(!1), A.s.updating = !1;
                });
              }
            });
          }
        });
        var ee = this.c.preSelect;
        G && G.searchPanes && G.searchPanes.selectionList && (ee = G.searchPanes.selectionList), this._makeSelections(ee), this._updateFilterCount(), S.on("destroy.dtsps", function(J, Z) {
          if (Z === P) {
            for (var te = 0, se = A.s.panes; te < se.length; te++) {
              var oe = se[te];
              oe.destroy();
            }
            S.off(".dtsps"), A.dom.showAll.off(".dtsps"), A.dom.clearAll.off(".dtsps"), A.dom.collapseAll.off(".dtsps"), d(S.table().node()).off(".dtsps"), A.dom.container.detach(), A.clearSelections();
          }
        }), this.c.collapse && this._setCollapseListener(), this.c.clear && this.dom.clearAll.off("click.dtsps").on("click.dtsps", function() {
          return A.clearSelections();
        }), P._searchPanes = this, this.s.dt.state.save();
      }, F.prototype._updateFilterCount = function() {
        for (var S = 0, A = 0, P = 0, L = this.s.panes; P < L.length; P++) {
          var V = L[P];
          V.s.dtPane && (S += V.getPaneCount(), V.s.dtPane.search() && A++);
        }
        this.dom.title.html(this.s.dt.i18n("searchPanes.title", this.c.i18n.title, S)), this.c.filterChanged && typeof this.c.filterChanged == "function" && this.c.filterChanged.call(this.s.dt, S), S === 0 && A === 0 ? this.dom.clearAll.addClass(this.classes.disabledButton).attr("disabled", "true") : this.dom.clearAll.removeClass(this.classes.disabledButton).removeAttr("disabled");
      }, F.version = "2.3.5", F.classes = {
        clear: "dtsp-clear",
        clearAll: "dtsp-clearAll",
        collapseAll: "dtsp-collapseAll",
        container: "dtsp-searchPanes",
        disabledButton: "dtsp-disabledButton",
        emptyMessage: "dtsp-emptyMessage",
        hide: "dtsp-hidden",
        panes: "dtsp-panesContainer",
        search: "dtsp-search",
        showAll: "dtsp-showAll",
        title: "dtsp-title",
        titleRow: "dtsp-titleRow"
      }, F.defaults = {
        cascadePanes: !1,
        clear: !0,
        collapse: !0,
        columns: [],
        container: function(S) {
          return S.table().container();
        },
        filterChanged: void 0,
        i18n: {
          clearMessage: "Clear All",
          clearPane: "&times;",
          collapse: {
            0: "SearchPanes",
            _: "SearchPanes (%d)"
          },
          collapseMessage: "Collapse All",
          count: "{total}",
          emptyMessage: "<em>Empty</em>",
          emptyPanes: "No SearchPanes",
          loadMessage: "Loading Search Panes...",
          showMessage: "Show All",
          title: "Filters Active - %d"
        },
        layout: "auto",
        order: [],
        panes: [],
        preSelect: [],
        viewCount: !0,
        viewTotal: !1
      }, F;
    }()
  ), f = window && window.__extends || /* @__PURE__ */ function() {
    var F = function(S, A) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, L) {
        P.__proto__ = L;
      } || function(P, L) {
        for (var V in L)
          L.hasOwnProperty(V) && (P[V] = L[V]);
      }, F(S, A);
    };
    return function(S, A) {
      F(S, A);
      function P() {
        this.constructor = S;
      }
      S.prototype = A === null ? Object.create(A) : (P.prototype = A.prototype, new P());
    };
  }(), H = (
    /** @class */
    function(F) {
      f(S, F);
      function S(A, P, L) {
        L === void 0 && (L = !1);
        var V = this, j;
        P.cascadePanes && P.viewTotal ? j = l : P.cascadePanes ? j = T : P.viewTotal && (j = b), V = F.call(this, A, P, L, j) || this;
        var G = V.s.dt, ee = G.state.loaded(), J = function() {
          return V._initSelectionListeners(!0, ee && ee.searchPanes && ee.searchPanes.selectionList ? ee.searchPanes.selectionList : V.c.preSelect);
        };
        return G.settings()[0]._bInitComplete ? J() : G.off("init.dtsps").on("init.dtsps", J), V;
      }
      return S.prototype._initSelectionListeners = function(A, P) {
        A === void 0 && (A = !0), P === void 0 && (P = []), A && (this.s.selectionList = P);
        for (var L = 0, V = this.s.panes; L < V.length; L++) {
          var j = V[L];
          j.s.displayed && j.s.dtPane.off("select.dtsp").on("select.dtsp", this._update(j)).off("deselect.dtsp").on("deselect.dtsp", this._updateTimeout(j));
        }
        this.s.dt.off("draw.dtsps").on("draw.dtsps", this._update()), this._updateSelectionList();
      }, S.prototype._serverTotals = function() {
        for (var A = 0, P = this.s.panes; A < P.length; A++) {
          var L = P[A];
          if (L.s.colOpts.show) {
            var V = this.s.dt.column(L.s.index).dataSrc(), j = !0;
            if (this.s.serverData.searchPanes.options[V])
              for (var G = 0, ee = this.s.serverData.searchPanes.options[V]; G < ee.length; G++) {
                var J = ee[G];
                if (J.total !== J.count) {
                  j = !1;
                  break;
                }
              }
            L.s.filteringActive = !j, L._serverPopulate(this.s.serverData);
          }
        }
      }, S.prototype._stateLoadListener = function() {
        var A = this, P = function(L, V, j) {
          if (j.searchPanes !== void 0) {
            if (A.s.selectionList = j.searchPanes.selectionList ? j.searchPanes.selectionList : [], j.searchPanes.panes)
              for (var G = 0, ee = j.searchPanes.panes; G < ee.length; G++)
                for (var J = ee[G], Z = 0, te = A.s.panes; Z < te.length; Z++) {
                  var se = te[Z];
                  J.id === se.s.index && se.s.dtPane && (se.dom.searchBox.val(J.searchTerm), se.s.dtPane.order(J.order));
                }
            A._updateSelectionList();
          }
        };
        this.s.dt.off("stateLoadParams.dtsps", P).on("stateLoadParams.dtsps", P);
      }, S.prototype._updateSelection = function() {
      }, S.prototype._update = function(A) {
        var P = this;
        return A === void 0 && (A = void 0), function() {
          A && clearTimeout(A.s.deselectTimeout), P._updateSelectionList(A);
        };
      }, S.prototype._updateTimeout = function(A) {
        var P = this;
        return A === void 0 && (A = void 0), function() {
          return A ? A.s.deselectTimeout = setTimeout(function() {
            return P._updateSelectionList(A);
          }, 50) : P._updateSelectionList();
        };
      }, S.prototype._updateSelectionList = function(A) {
        if (A === void 0 && (A = void 0), this.s.pagingST) {
          this.s.pagingST = !1;
          return;
        } else if (this.s.updating || A && A.s.serverSelecting)
          return;
        if (A !== void 0) {
          this.s.dt.page.info().serverSide && A._updateSelection();
          var P = A.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(L) {
            return L.filter;
          });
          this.s.selectionList = this.s.selectionList.filter(function(L) {
            return L.column !== A.s.index;
          }), P.length > 0 ? (this.s.selectionList.push({
            column: A.s.index,
            rows: P
          }), A.dom.clear.removeClass(this.classes.disabledButton).removeAttr("disabled")) : A.dom.clear.addClass(this.classes.disabledButton).attr("disabled", "true"), this.s.dt.page.info().serverSide && this.s.dt.draw(!1);
        }
        this._remakeSelections(), this._updateFilterCount();
      }, S.prototype._remakeSelections = function() {
        var A, P;
        if (this.s.updating = !0, this.s.dt.page.info().serverSide) {
          this.s.selectionList.length > 0 && (P = this.s.panes[this.s.selectionList[this.s.selectionList.length - 1].column]);
          for (var $e = 0, qe = this.s.panes; $e < qe.length; $e++)
            A = qe[$e], A.s.displayed && (!P || A.s.index !== P.s.index) && A.updateRows();
        } else {
          var L = this.s.selectionList, V = !1;
          this.clearSelections(), this.s.dt.draw(!1), this.s.dt.rows().toArray()[0].length > this.s.dt.rows({ search: "applied" }).toArray()[0].length && (V = !0), this.s.selectionList = L;
          for (var j = 0, G = this.s.panes; j < G.length; j++)
            P = G[j], P.s.displayed && (P.s.filteringActive = V, P.updateRows());
          for (var ee = 0, J = this.s.selectionList; ee < J.length; ee++) {
            var Z = J[ee];
            P = null;
            for (var te = 0, se = this.s.panes; te < se.length; te++) {
              var oe = se[te];
              if (oe.s.index === Z.column) {
                P = oe;
                break;
              }
            }
            if (P.s.dtPane) {
              for (var le = P.s.dtPane.rows().indexes().toArray(), ce = 0; ce < Z.rows.length; ce++) {
                for (var ve = !1, Ne = 0, Pe = le; Ne < Pe.length; Ne++) {
                  var Ie = Pe[Ne], Ze = P.s.dtPane.row(Ie), We = Ze.data();
                  Z.rows[ce] === We.filter && (Ze.select(), ve = !0);
                }
                ve || (Z.rows.splice(ce, 1), ce--);
              }
              if (P.s.selections = Z.rows, Z.rows.length !== 0) {
                this.s.dt.draw();
                for (var Be = !1, Ee = 0, at = 0, Pt = 0, St = 0, Ht = this.s.panes; St < Ht.length; St++)
                  A = Ht[St], A.s.dtPane && (Ee += A.getPaneCount(), Ee > at && (Pt++, at = Ee));
                Be = Ee > 0;
                for (var ke = 0, Ye = this.s.panes; ke < Ye.length; ke++)
                  A = Ye[ke], A.s.displayed && (V || P.s.index !== A.s.index || !Be ? A.s.filteringActive = Be || V : Pt === 1 && (A.s.filteringActive = !1), A.s.index !== P.s.index && A.updateRows());
              }
            }
          }
          this.s.dt.draw(!1);
        }
        this.s.updating = !1;
      }, S;
    }(O)
  );
  /*! SearchPanes 2.3.5
   * © SpryMedia Ltd - datatables.net/license
   */
  n(Lt), E(Lt), v(Lt), _(Lt), p(Lt);
  var Y = Lt.fn.dataTable;
  Y.SearchPanes = O, k.SearchPanes = O, Y.SearchPanesST = H, k.SearchPanesST = H, Y.SearchPane = r, k.SearchPane = r, Y.SearchPaneViewTotal = b, k.SearchPaneViewTotal = b, Y.SearchPaneCascade = T, k.SearchPaneCascade = T, Y.SearchPaneCascadeViewTotal = l, k.SearchPaneCascadeViewTotal = l;
  var q = Lt.fn.dataTable.Api.register;
  q("searchPanes()", function() {
    return this;
  }), q("searchPanes.clearSelections()", function() {
    return this.iterator("table", function(F) {
      F._searchPanes && F._searchPanes.clearSelections();
    });
  }), q("searchPanes.rebuildPane()", function(F, S) {
    return this.iterator("table", function(A) {
      A._searchPanes && A._searchPanes.rebuild(F, S);
    });
  }), q("searchPanes.resizePanes()", function() {
    var F = this.context[0];
    return F._searchPanes ? F._searchPanes.resizePanes() : null;
  }), q("searchPanes.container()", function() {
    var F = this.context[0];
    return F._searchPanes ? F._searchPanes.getNode() : null;
  }), k.ext.buttons.searchPanesClear = {
    action: function(F, S) {
      S.searchPanes.clearSelections();
    },
    text: "Clear Panes"
  }, k.ext.buttons.searchPanes = {
    action: function(F, S, A, P) {
      var L = this, V = this;
      P._panes ? (this.popover(P._panes.getNode(), {
        align: "container",
        span: "container"
      }), P._panes.rebuild(void 0, !0)) : (this.processing(!0), setTimeout(function() {
        K(S, A, P), L.popover(P._panes.getNode(), {
          align: "container",
          span: "container"
        }), P._panes.rebuild(void 0, !0), Lt("table.dataTable", P._panes.getNode()).DataTable().columns.adjust(), V.processing(!1);
      }, 10));
    },
    init: function(F, S, A) {
      F.button(S).text(A.text || F.i18n("searchPanes.collapse", "SearchPanes", 0)), (F.init().stateSave || A.delayInit === !1) && K(F, S, A);
    },
    config: {},
    text: "",
    delayInit: !0
  };
  function K(F, S, A) {
    var P = Lt.extend({
      filterChanged: function(V) {
        F.button(S).text(F.i18n("searchPanes.collapse", F.context[0].oLanguage.searchPanes !== void 0 ? F.context[0].oLanguage.searchPanes.collapse : F.context[0]._searchPanes.c.i18n.collapse, V));
      }
    }, A.config), L = P && (P.cascadePanes || P.viewTotal) ? new k.SearchPanesST(F, P) : new k.SearchPanes(F, P);
    F.button(S).text(A.text || F.i18n("searchPanes.collapse", L.c.i18n.collapse, 0)), A._panes = L;
  }
  function ne(F, S, A) {
    S === void 0 && (S = null), A === void 0 && (A = !1);
    var P = new Y.Api(F), L = S || P.init().searchPanes || Y.defaults.searchPanes, V = L && (L.cascadePanes || L.viewTotal) ? new H(P, L, A) : new O(P, L, A), j = V.getNode();
    return j;
  }
  Lt(document).on("preInit.dt.dtsp", function(F, S) {
    F.namespace === "dt" && (S.oInit.searchPanes || k.defaults.searchPanes) && (S._searchPanes || ne(S, null, !0));
  }), k.ext.feature.push({
    cFeature: "P",
    fnInit: ne
  }), k.feature && k.feature.register("searchPanes", ne);
})();
/*! Bootstrap 5 integration for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */
let Mc = Me;
Mc.extend(!0, k.SearchPane.classes, {
  buttonGroup: "btn-group",
  disabledButton: "disabled",
  narrow: "col",
  pane: {
    container: "table"
  },
  paneButton: "btn btn-subtle",
  pill: "badge rounded-pill bg-secondary",
  search: "form-control search",
  table: "table table-sm table-borderless",
  topRow: "dtsp-topRow"
});
Mc.extend(!0, k.SearchPanes.classes, {
  clearAll: "dtsp-clearAll btn btn-subtle",
  collapseAll: "dtsp-collapseAll btn btn-subtle",
  container: "dtsp-searchPanes",
  disabledButton: "disabled",
  panes: "dtsp-panes dtsp-panesContainer",
  search: k.SearchPane.classes.search,
  showAll: "dtsp-showAll btn btn-subtle",
  title: "dtsp-title",
  titleRow: "dtsp-titleRow"
});
/*! SearchBuilder 1.8.4
 * ©SpryMedia Ltd - datatables.net/license/mit
 */
let mn = Me;
(function() {
  var e, t;
  function n() {
    var p = k.use("moment");
    return p || window.moment;
  }
  function r() {
    var p = k.use("luxon");
    return p || window.luxon;
  }
  function i(p) {
    e = p, t = p.fn.dataTable;
  }
  var a = (
    /** @class */
    function() {
      function p(l, d, y, E, O, f, H) {
        E === void 0 && (E = 0), O === void 0 && (O = 1), f === void 0 && (f = void 0), H === void 0 && (H = !1);
        var Y = this;
        this.classes = e.extend(!0, {}, p.classes), this.c = e.extend(!0, {}, p.defaults, e.fn.dataTable.ext.searchBuilder, d);
        var q = this.c.i18n;
        if (this.s = {
          condition: void 0,
          conditions: {},
          data: void 0,
          dataIdx: -1,
          dataPoints: [],
          dateFormat: !1,
          depth: O,
          dt: l,
          filled: !1,
          index: E,
          liveSearch: H,
          origData: void 0,
          preventRedraw: !1,
          serverData: f,
          topGroup: y,
          type: "",
          value: []
        }, this.dom = {
          buttons: e("<div/>").addClass(this.classes.buttonContainer),
          condition: e("<select disabled/>").addClass(this.classes.condition).addClass(this.classes.dropDown).addClass(this.classes.italic).attr("autocomplete", "hacking"),
          conditionTitle: e('<option value="" disabled selected hidden/>').html(this.s.dt.i18n("searchBuilder.condition", q.condition)),
          container: e("<div/>").addClass(this.classes.container),
          data: e("<select/>").addClass(this.classes.data).addClass(this.classes.dropDown).addClass(this.classes.italic),
          dataTitle: e('<option value="" disabled selected hidden/>').html(this.s.dt.i18n("searchBuilder.data", q.data)),
          defaultValue: e("<select disabled/>").addClass(this.classes.value).addClass(this.classes.dropDown).addClass(this.classes.select).addClass(this.classes.italic),
          delete: e("<button/>").html(this.s.dt.i18n("searchBuilder.delete", q.delete)).addClass(this.classes.delete).addClass(this.classes.button).attr("title", this.s.dt.i18n("searchBuilder.deleteTitle", q.deleteTitle)).attr("type", "button"),
          inputCont: e("<div/>").addClass(this.classes.inputCont),
          // eslint-disable-next-line no-useless-escape
          left: e("<button/>").html(this.s.dt.i18n("searchBuilder.left", q.left)).addClass(this.classes.left).addClass(this.classes.button).attr("title", this.s.dt.i18n("searchBuilder.leftTitle", q.leftTitle)).attr("type", "button"),
          // eslint-disable-next-line no-useless-escape
          right: e("<button/>").html(this.s.dt.i18n("searchBuilder.right", q.right)).addClass(this.classes.right).addClass(this.classes.button).attr("title", this.s.dt.i18n("searchBuilder.rightTitle", q.rightTitle)).attr("type", "button"),
          value: [
            e("<select disabled/>").addClass(this.classes.value).addClass(this.classes.dropDown).addClass(this.classes.italic).addClass(this.classes.select)
          ],
          valueTitle: e('<option value="--valueTitle--" disabled selected hidden/>').html(this.s.dt.i18n("searchBuilder.value", q.value))
        }, this.c.greyscale) {
          this.dom.data.addClass(this.classes.greyscale), this.dom.condition.addClass(this.classes.greyscale), this.dom.defaultValue.addClass(this.classes.greyscale);
          for (var K = 0, ne = this.dom.value; K < ne.length; K++) {
            var F = ne[K];
            F.addClass(this.classes.greyscale);
          }
        }
        return e(window).on("resize.dtsb", t.util.throttle(function() {
          Y.s.topGroup.trigger("dtsb-redrawLogic");
        })), this._buildCriteria(), this;
      }
      return p._escapeHTML = function(l) {
        return l.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
      }, p.prototype.doSearch = function() {
        this.c.liveSearch && this.s.dt.draw();
      }, p.parseNumFmt = function(l) {
        return +l.replace(/(?!^-)[^0-9.]/g, "");
      }, p.prototype.updateArrows = function(l) {
        l === void 0 && (l = !1), this.dom.container.children().detach(), this.dom.container.append(this.dom.data).append(this.dom.condition).append(this.dom.inputCont), this.setListeners(), this.dom.value[0] !== void 0 && e(this.dom.value[0]).trigger("dtsb-inserted");
        for (var d = 1; d < this.dom.value.length; d++)
          this.dom.inputCont.append(this.dom.value[d]), e(this.dom.value[d]).trigger("dtsb-inserted");
        this.s.depth > 1 && this.dom.buttons.append(this.dom.left), (this.c.depthLimit === !1 || this.s.depth < this.c.depthLimit) && l ? this.dom.buttons.append(this.dom.right) : this.dom.right.remove(), this.dom.buttons.append(this.dom.delete), this.dom.container.append(this.dom.buttons);
      }, p.prototype.destroy = function() {
        this.dom.data.off(".dtsb"), this.dom.condition.off(".dtsb"), this.dom.delete.off(".dtsb");
        for (var l = 0, d = this.dom.value; l < d.length; l++) {
          var y = d[l];
          y.off(".dtsb");
        }
        this.dom.container.remove();
      }, p.prototype.search = function(l, d) {
        var y = this.s.dt.settings()[0], E = this.s.conditions[this.s.condition];
        if (this.s.condition !== void 0 && E !== void 0) {
          var O = l[this.s.dataIdx];
          if (this.s.type && this.s.type.includes("num") && (y.oLanguage.sDecimal !== "" || y.oLanguage.sThousands !== "")) {
            var f = [l[this.s.dataIdx]];
            if (y.oLanguage.sDecimal !== "" && (f = l[this.s.dataIdx].split(y.oLanguage.sDecimal)), y.oLanguage.sThousands !== "")
              for (var H = 0; H < f.length; H++)
                f[H] = f[H].replace(y.oLanguage.sThousands, ",");
            O = f.join(".");
          }
          if (this.c.orthogonal.search !== "filter" && (O = y.fastData(d, this.s.dataIdx, typeof this.c.orthogonal == "string" ? this.c.orthogonal : this.c.orthogonal.search)), this.s.type === "array") {
            Array.isArray(O) || (O = [O]), O.sort();
            for (var Y = 0, q = O; Y < q.length; Y++) {
              var K = q[Y];
              K && typeof K == "string" && (K = K.replace(/[\r\n\u2028]/g, " "));
            }
          } else
            O !== null && typeof O == "string" && (O = O.replace(/[\r\n\u2028]/g, " "));
          return this.s.type.includes("html") && typeof O == "string" && (O = O.replace(/(<([^>]+)>)/ig, "")), O === null && (O = ""), E.search(O, this.s.value, this);
        }
      }, p.prototype.getDetails = function(l) {
        l === void 0 && (l = !1);
        var d, y = this.s.dt.settings()[0];
        if (this.s.type !== null && ["num", "num-fmt", "html-num", "html-num-fmt"].includes(this.s.type) && (y.oLanguage.sDecimal !== "" || y.oLanguage.sThousands !== ""))
          for (d = 0; d < this.s.value.length; d++) {
            var E = [this.s.value[d].toString()];
            if (y.oLanguage.sDecimal !== "" && (E = this.s.value[d].split(y.oLanguage.sDecimal)), y.oLanguage.sThousands !== "")
              for (var O = 0; O < E.length; O++)
                E[O] = E[O].replace(y.oLanguage.sThousands, ",");
            this.s.value[d] = E.join(".");
          }
        else if (this.s.type !== null && l) {
          var f = n(), H = r();
          if ((this.s.type.includes("date") || this.s.type.includes("time")) && !n && !r)
            for (d = 0; d < this.s.value.length; d++)
              this.s.value[d].match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g) === null && (this.s.value[d] = "");
          else if (this.s.type.includes("moment") || this.s.type.includes("datetime") && n)
            for (d = 0; d < this.s.value.length; d++)
              this.s.value[d] && this.s.value[d].length > 0 && f(this.s.value[d], this.s.dateFormat, !0).isValid() && (this.s.value[d] = f(this.s.value[d], this.s.dateFormat).format("YYYY-MM-DD HH:mm:ss"));
          else if (this.s.type.includes("luxon") || this.s.type.includes("datetime") && r)
            for (d = 0; d < this.s.value.length; d++)
              this.s.value[d] && this.s.value[d].length > 0 && H.DateTime.fromFormat(this.s.value[d], this.s.dateFormat).invalid === null && (this.s.value[d] = H.DateTime.fromFormat(this.s.value[d], this.s.dateFormat).toFormat("yyyy-MM-dd HH:mm:ss"));
        }
        if (this.s.type && this.s.type.includes("num") && this.s.dt.page.info().serverSide)
          for (d = 0; d < this.s.value.length; d++)
            this.s.value[d] = this.s.value[d].replace(/[^0-9.\-]/g, "");
        return {
          condition: this.s.condition,
          data: this.s.data,
          origData: this.s.origData,
          type: this.s.type,
          value: this.s.value.map(function(Y) {
            return Y != null ? Y.toString() : Y;
          })
        };
      }, p.prototype.getNode = function() {
        return this.dom.container;
      }, p.prototype.parseNumber = function(l) {
        var d = this.s.dt.i18n("decimal");
        return d && d !== "." && (l = l.replace(/\./g, "").replace(d, ".")), +l.replace(/(?!^-)[^0-9.]/g, "");
      }, p.prototype.populate = function() {
        this._populateData(), this.s.dataIdx !== -1 && (this._populateCondition(), this.s.condition !== void 0 && this._populateValue());
      }, p.prototype.rebuild = function(l) {
        var d = !1, y, E;
        if (this._populateData(), l.data !== void 0) {
          var O = this.classes.italic, f = this.dom.data;
          this.dom.data.children("option").each(function() {
            !d && (e(this).text() === l.data || l.origData && e(this).prop("origData") === l.origData) ? (e(this).prop("selected", !0), f.removeClass(O), d = !0, y = parseInt(e(this).val(), 10)) : e(this).removeProp("selected");
          });
        }
        if (d) {
          this.s.data = l.data, this.s.origData = l.origData, this.s.dataIdx = y, this.c.orthogonal = this._getOptions().orthogonal, this.dom.dataTitle.remove(), this._populateCondition(), this.dom.conditionTitle.remove();
          var H = void 0, Y = this.dom.condition.children("option");
          for (E = 0; E < Y.length; E++) {
            var q = e(Y[E]);
            l.condition !== void 0 && q.val() === l.condition && typeof l.condition == "string" ? (q.prop("selected", !0), H = q.val()) : q.removeProp("selected");
          }
          if (this.s.condition = H, this.s.condition !== void 0) {
            for (this.dom.conditionTitle.removeProp("selected"), this.dom.conditionTitle.remove(), this.dom.condition.removeClass(this.classes.italic), E = 0; E < Y.length; E++) {
              var K = e(Y[E]);
              K.val() !== this.s.condition && K.removeProp("selected");
            }
            this._populateValue(l);
          } else
            this.dom.conditionTitle.prependTo(this.dom.condition).prop("selected", !0);
        }
      }, p.prototype.setListeners = function() {
        var l = this;
        this.dom.data.unbind("change").on("change.dtsb", function() {
          l.dom.dataTitle.removeProp("selected");
          for (var d = l.dom.data.children("option." + l.classes.option), y = 0; y < d.length; y++) {
            var E = e(d[y]);
            E.val() === l.dom.data.val() ? (l.dom.data.removeClass(l.classes.italic), E.prop("selected", !0), l.s.dataIdx = +E.val(), l.s.data = E.text(), l.s.origData = E.prop("origData"), l.c.orthogonal = l._getOptions().orthogonal, l._clearCondition(), l._clearValue(), l._populateCondition(), l.s.filled && (l.s.filled = !1, l.doSearch(), l.setListeners()), l.s.dt.state.save()) : E.removeProp("selected");
          }
        }), this.dom.condition.unbind("change").on("change.dtsb", function() {
          l.dom.conditionTitle.removeProp("selected");
          for (var d = l.dom.condition.children("option." + l.classes.option), y = 0; y < d.length; y++) {
            var E = e(d[y]);
            if (E.val() === l.dom.condition.val()) {
              l.dom.condition.removeClass(l.classes.italic), E.prop("selected", !0);
              for (var O = E.val(), f = 0, H = Object.keys(l.s.conditions); f < H.length; f++) {
                var Y = H[f];
                if (Y === O) {
                  l.s.condition = O;
                  break;
                }
              }
              l._clearValue(), l._populateValue();
              for (var q = 0, K = l.dom.value; q < K.length; q++) {
                var ne = K[q];
                l.s.filled && ne !== void 0 && l.dom.inputCont.has(ne[0]).length !== 0 && (l.s.filled = !1, l.doSearch(), l.setListeners());
              }
              (l.dom.value.length === 0 || l.dom.value.length === 1 && l.dom.value[0] === void 0) && l.doSearch();
            } else
              E.removeProp("selected");
          }
        });
      }, p.prototype.setupButtons = function() {
        if (window.innerWidth > 550) {
          this.dom.container.removeClass(this.classes.vertical), this.dom.buttons.css("left", null), this.dom.buttons.css("top", null);
          return;
        }
        this.dom.container.addClass(this.classes.vertical), this.dom.buttons.css("left", this.dom.data.innerWidth()), this.dom.buttons.css("top", this.dom.data.position().top);
      }, p.prototype._buildCriteria = function() {
        this.dom.data.append(this.dom.dataTitle), this.dom.condition.append(this.dom.conditionTitle), this.dom.container.append(this.dom.data).append(this.dom.condition), this.dom.inputCont.empty();
        for (var l = 0, d = this.dom.value; l < d.length; l++) {
          var y = d[l];
          y.append(this.dom.valueTitle), this.dom.inputCont.append(y);
        }
        this.dom.buttons.append(this.dom.delete).append(this.dom.right), this.dom.container.append(this.dom.inputCont).append(this.dom.buttons), this.setListeners();
      }, p.prototype._clearCondition = function() {
        this.dom.condition.empty(), this.dom.conditionTitle.prop("selected", !0).attr("disabled", "true"), this.dom.condition.prepend(this.dom.conditionTitle).prop("selectedIndex", 0), this.s.conditions = {}, this.s.condition = void 0;
      }, p.prototype._clearValue = function() {
        var l;
        if (this.s.condition !== void 0) {
          if (this.dom.value.length > 0 && this.dom.value[0] !== void 0)
            for (var d = 0, y = this.dom.value; d < y.length; d++)
              l = y[d], l !== void 0 && setTimeout(function() {
                l.remove();
              }, 50);
          if (this.dom.value = [].concat(this.s.conditions[this.s.condition].init(this, p.updateListener)), this.dom.value.length > 0 && this.dom.value[0] !== void 0) {
            this.dom.inputCont.empty().append(this.dom.value[0]).insertAfter(this.dom.condition), e(this.dom.value[0]).trigger("dtsb-inserted");
            for (var E = 1; E < this.dom.value.length; E++)
              this.dom.inputCont.append(this.dom.value[E]), e(this.dom.value[E]).trigger("dtsb-inserted");
          }
        } else {
          for (var O = 0, f = this.dom.value; O < f.length; O++)
            l = f[O], l !== void 0 && setTimeout(function() {
              l.remove();
            }, 50);
          this.dom.valueTitle.prop("selected", !0), this.dom.defaultValue.append(this.dom.valueTitle).insertAfter(this.dom.condition);
        }
        this.s.value = [], this.dom.value = [
          e("<select disabled/>").addClass(this.classes.value).addClass(this.classes.dropDown).addClass(this.classes.italic).addClass(this.classes.select).append(this.dom.valueTitle.clone())
        ];
      }, p.prototype._getOptions = function() {
        var l = this.s.dt;
        return e.extend(!0, {}, p.defaults, l.settings()[0].aoColumns[this.s.dataIdx].searchBuilder);
      }, p.prototype._populateCondition = function() {
        var l = [], d = Object.keys(this.s.conditions).length, y = this.s.dt, E = y.settings()[0].aoColumns, O = +this.dom.data.children("option:selected").val(), f, H;
        if (d === 0) {
          if (this.s.type = y.column(O).type(), E !== void 0) {
            var Y = E[O];
            Y.searchBuilderType !== void 0 && Y.searchBuilderType !== null ? this.s.type = Y.searchBuilderType : (this.s.type === void 0 || this.s.type === null) && (this.s.type = Y.sType);
          }
          (this.s.type === null || this.s.type === void 0) && (e.fn.dataTable.ext.oApi && e.fn.dataTable.ext.oApi._fnColumnTypes(y.settings()[0]), this.s.type = y.column(O).type()), this.dom.condition.removeAttr("disabled").empty().append(this.dom.conditionTitle).addClass(this.classes.italic), this.dom.conditionTitle.prop("selected", !0);
          var q = y.settings()[0].oLanguage.sDecimal;
          q !== "" && this.s.type && this.s.type.indexOf(q) === this.s.type.length - q.length && (this.s.type.includes("num-fmt") ? this.s.type = this.s.type.replace(q, "") : this.s.type.includes("num") && (this.s.type = this.s.type.replace(q, "")));
          var K = void 0;
          if (this.c.conditions[this.s.type] !== void 0)
            K = this.c.conditions[this.s.type];
          else if (this.s.type && this.s.type === "datetime") {
            var ne = k.use("moment"), F = k.use("luxon");
            ne && (K = this.c.conditions.moment, this.s.dateFormat = ne().creationData().locale._longDateFormat.L), F && (K = this.c.conditions.luxon, this.s.dateFormat = F.DateTime.DATE_SHORT);
          } else
            this.s.type && this.s.type.includes("datetime-") ? (K = k.use("moment") ? this.c.conditions.moment : this.c.conditions.luxon, this.s.dateFormat = this.s.type.replace(/datetime-/g, "")) : this.s.type && this.s.type.includes("moment") ? (K = this.c.conditions.moment, this.s.dateFormat = this.s.type.replace(/moment-/g, "")) : this.s.type && this.s.type.includes("luxon") ? (K = this.c.conditions.luxon, this.s.dateFormat = this.s.type.replace(/luxon-/g, "")) : K = this.c.conditions.string;
          for (var S = 0, A = Object.keys(K); S < A.length; S++)
            if (f = A[S], K[f] !== null) {
              if (y.page.info().serverSide && K[f].init === p.initSelect) {
                var P = E[O];
                this.s.serverData && this.s.serverData[P.data] ? (K[f].init = p.initSelectSSP, K[f].inputValue = p.inputValueSelect, K[f].isInputValid = p.isInputValidSelect) : (K[f].init = p.initInput, K[f].inputValue = p.inputValueInput, K[f].isInputValid = p.isInputValidInput);
              }
              this.s.conditions[f] = K[f], H = K[f].conditionName, typeof H == "function" && (H = H(y, this.c.i18n)), l.push(e("<option>", {
                text: H,
                value: f
              }).addClass(this.classes.option).addClass(this.classes.notItalic));
            }
        } else if (d > 0) {
          this.dom.condition.empty().removeAttr("disabled").addClass(this.classes.italic);
          for (var L = 0, V = Object.keys(this.s.conditions); L < V.length; L++) {
            f = V[L];
            var j = this.s.conditions[f].conditionName;
            typeof j == "function" && (j = j(y, this.c.i18n));
            var G = e("<option>", {
              text: j,
              value: f
            }).addClass(this.classes.option).addClass(this.classes.notItalic);
            this.s.condition !== void 0 && this.s.condition === j && (G.prop("selected", !0), this.dom.condition.removeClass(this.classes.italic)), l.push(G);
          }
        } else {
          this.dom.condition.attr("disabled", "true").addClass(this.classes.italic);
          return;
        }
        for (var ee = 0, J = l; ee < J.length; ee++) {
          var Z = J[ee];
          this.dom.condition.append(Z);
        }
        if (E[O].searchBuilder && E[O].searchBuilder.defaultCondition) {
          var te = E[O].searchBuilder.defaultCondition;
          if (typeof te == "number")
            this.dom.condition.prop("selectedIndex", te), this.dom.condition.trigger("change");
          else if (typeof te == "string")
            for (var se = 0; se < l.length; se++)
              for (var oe = 0, le = Object.keys(this.s.conditions); oe < le.length; oe++) {
                var ce = le[oe];
                if (H = this.s.conditions[ce].conditionName, // If the conditionName matches the text of the option
                (typeof H == "string" ? H : H(y, this.c.i18n)) === l[se].text() && // and the tokens match
                ce === te) {
                  this.dom.condition.prop("selectedIndex", this.dom.condition.children().toArray().indexOf(l[se][0])).removeClass(this.classes.italic), this.dom.condition.trigger("change"), se = l.length;
                  break;
                }
              }
        } else
          this.dom.condition.prop("selectedIndex", 0);
      }, p.prototype._populateData = function() {
        var l = this.s.dt.settings()[0].aoColumns, d = this.s.dt.columns(this.c.columns).indexes().toArray();
        this.dom.data.empty().append(this.dom.dataTitle);
        for (var y = 0; y < l.length; y++)
          if (this.c.columns === !0 || d.includes(y)) {
            var E = l[y], O = {
              index: y,
              origData: E.data,
              text: (E.searchBuilderTitle || E.sTitle).replace(/(<([^>]+)>)/ig, "")
            };
            this.dom.data.append(e("<option>", {
              text: O.text,
              value: O.index
            }).addClass(this.classes.option).addClass(this.classes.notItalic).prop("origData", E.data).prop("selected", this.s.dataIdx === O.index)), this.s.dataIdx === O.index && this.dom.dataTitle.removeProp("selected");
          }
      }, p.prototype._populateValue = function(l) {
        var d = this, y = this.s.filled, E;
        this.s.filled = !1, setTimeout(function() {
          d.dom.defaultValue.remove();
        }, 50);
        for (var O = function(K) {
          setTimeout(function() {
            K !== void 0 && K.remove();
          }, 50);
        }, f = 0, H = this.dom.value; f < H.length; f++) {
          var Y = H[f];
          O(Y);
        }
        var q = this.dom.inputCont.children();
        if (q.length > 1)
          for (E = 0; E < q.length; E++)
            e(q[E]).remove();
        for (l !== void 0 && this.s.dt.columns().every(function(K) {
          d.s.dt.settings()[0].aoColumns[K].sTitle === l.data && (d.s.dataIdx = K);
        }), this.dom.value = [].concat(this.s.conditions[this.s.condition].init(this, p.updateListener, l !== void 0 ? l.value : void 0)), l !== void 0 && l.value !== void 0 && (this.s.value = l.value), this.dom.inputCont.empty(), this.dom.value[0] !== void 0 && e(this.dom.value[0]).appendTo(this.dom.inputCont).trigger("dtsb-inserted"), E = 1; E < this.dom.value.length; E++)
          e(this.dom.value[E]).insertAfter(this.dom.value[E - 1]).trigger("dtsb-inserted");
        this.s.filled = this.s.conditions[this.s.condition].isInputValid(this.dom.value, this), this.setListeners(), !this.s.preventRedraw && y !== this.s.filled && (this.s.dt.page.info().serverSide || this.doSearch(), this.setListeners());
      }, p.prototype._throttle = function(l, d) {
        d === void 0 && (d = 200);
        var y = null, E = null, O = this;
        return d === null && (d = 200), function() {
          for (var f = [], H = 0; H < arguments.length; H++)
            f[H] = arguments[H];
          var Y = +/* @__PURE__ */ new Date();
          y !== null && Y < y + d ? clearTimeout(E) : y = Y, E = setTimeout(function() {
            y = null, l.apply(O, f);
          }, d);
        };
      }, p.version = "1.1.0", p.classes = {
        button: "dtsb-button",
        buttonContainer: "dtsb-buttonContainer",
        condition: "dtsb-condition",
        container: "dtsb-criteria",
        data: "dtsb-data",
        delete: "dtsb-delete",
        dropDown: "dtsb-dropDown",
        greyscale: "dtsb-greyscale",
        input: "dtsb-input",
        inputCont: "dtsb-inputCont",
        italic: "dtsb-italic",
        joiner: "dtsb-joiner",
        left: "dtsb-left",
        notItalic: "dtsb-notItalic",
        option: "dtsb-option",
        right: "dtsb-right",
        select: "dtsb-select",
        value: "dtsb-value",
        vertical: "dtsb-vertical"
      }, p.initSelect = function(l, d, y, E) {
        y === void 0 && (y = null), E === void 0 && (E = !1);
        var O = l.dom.data.children("option:selected").val(), f = l.s.dt.rows().indexes().toArray(), H = l.s.dt.settings()[0].fastData;
        l.dom.valueTitle.prop("selected", !0);
        var Y = e("<select/>").addClass(p.classes.value).addClass(p.classes.dropDown).addClass(p.classes.italic).addClass(p.classes.select).append(l.dom.valueTitle).on("change.dtsb", function() {
          e(this).removeClass(p.classes.italic), d(l, this);
        });
        l.c.greyscale && Y.addClass(p.classes.greyscale);
        for (var q = [], K = [], ne = 0, F = f; ne < F.length; ne++) {
          var S = F[ne], A = H(S, O, typeof l.c.orthogonal == "string" ? l.c.orthogonal : l.c.orthogonal.search), P = {
            filter: typeof A == "string" ? A.replace(/[\r\n\u2028]/g, " ") : (
              // Need to replace certain characters to match search values
              A
            ),
            index: S,
            text: H(S, O, typeof l.c.orthogonal == "string" ? l.c.orthogonal : l.c.orthogonal.display)
          };
          l.s.type === "array" && (P.filter = Array.isArray(P.filter) ? P.filter : [P.filter], P.text = Array.isArray(P.text) ? P.text : [P.text]);
          var L = function(J, Z) {
            l.s.type.includes("html") && J !== null && typeof J == "string" && J.replace(/(<([^>]+)>)/ig, "");
            var te = e("<option>", {
              type: Array.isArray(J) ? "Array" : "String",
              value: J
            }).data("sbv", J).addClass(l.classes.option).addClass(l.classes.notItalic).html(typeof Z == "string" ? Z.replace(/(<([^>]+)>)/ig, "") : Z), se = te.val();
            q.indexOf(se) === -1 && (q.push(se), K.push(te), y !== null && Array.isArray(y[0]) && (y[0] = y[0].sort().join(",")), y !== null && te.val() === y[0] && (te.prop("selected", !0), Y.removeClass(p.classes.italic), l.dom.valueTitle.removeProp("selected")));
          };
          if (E)
            for (var V = 0; V < P.filter.length; V++)
              L(P.filter[V], P.text[V]);
          else
            L(P.filter, Array.isArray(P.text) ? P.text.join(", ") : P.text);
        }
        K.sort(function(J, Z) {
          if (l.s.type === "array" || l.s.type === "string" || l.s.type === "html")
            return J.val() < Z.val() ? -1 : J.val() > Z.val() ? 1 : 0;
          if (l.s.type === "num" || l.s.type === "html-num")
            return +J.val().replace(/(<([^>]+)>)/ig, "") < +Z.val().replace(/(<([^>]+)>)/ig, "") ? -1 : +J.val().replace(/(<([^>]+)>)/ig, "") > +Z.val().replace(/(<([^>]+)>)/ig, "") ? 1 : 0;
          if (l.s.type === "num-fmt" || l.s.type === "html-num-fmt")
            return +J.val().replace(/[^0-9.]/g, "") < +Z.val().replace(/[^0-9.]/g, "") ? -1 : +J.val().replace(/[^0-9.]/g, "") > +Z.val().replace(/[^0-9.]/g, "") ? 1 : 0;
        });
        for (var j = 0, G = K; j < G.length; j++) {
          var ee = G[j];
          Y.append(ee);
        }
        return Y;
      }, p.initSelectSSP = function(l, d, y) {
        y === void 0 && (y = null), l.dom.valueTitle.prop("selected", !0);
        var E = e("<select/>").addClass(p.classes.value).addClass(p.classes.dropDown).addClass(p.classes.italic).addClass(p.classes.select).append(l.dom.valueTitle).on("change.dtsb", function() {
          e(this).removeClass(p.classes.italic), d(l, this);
        });
        l.c.greyscale && E.addClass(p.classes.greyscale);
        for (var O = [], f = 0, H = l.s.serverData[l.s.origData]; f < H.length; f++) {
          var Y = H[f], q = Y.value, K = Y.label, ne = function(P, L) {
            l.s.type.includes("html") && P !== null && typeof P == "string" && P.replace(/(<([^>]+)>)/ig, "");
            var V = e("<option>", {
              type: Array.isArray(P) ? "Array" : "String",
              value: P
            }).data("sbv", P).addClass(l.classes.option).addClass(l.classes.notItalic).html(typeof L == "string" ? L.replace(/(<([^>]+)>)/ig, "") : L);
            O.push(V), y !== null && V.val() === y[0] && (V.prop("selected", !0), E.removeClass(p.classes.italic), l.dom.valueTitle.removeProp("selected"));
          };
          ne(q, K);
        }
        for (var F = 0, S = O; F < S.length; F++) {
          var A = S[F];
          E.append(A);
        }
        return E;
      }, p.initSelectArray = function(l, d, y) {
        return y === void 0 && (y = null), p.initSelect(l, d, y, !0);
      }, p.initInput = function(l, d, y) {
        y === void 0 && (y = null);
        var E = l.s.dt.settings()[0].searchDelay, O = e("<input/>").addClass(p.classes.value).addClass(p.classes.input).on("input.dtsb keypress.dtsb", l._throttle(function(f) {
          var H = f.keyCode || f.which;
          return d(l, this, H);
        }, E === null ? 100 : E));
        return l.c.greyscale && O.addClass(p.classes.greyscale), y !== null && O.val(y[0]), l.s.dt.one("draw.dtsb", function() {
          l.s.topGroup.trigger("dtsb-redrawLogic");
        }), O;
      }, p.init2Input = function(l, d, y) {
        y === void 0 && (y = null);
        var E = l.s.dt.settings()[0].searchDelay, O = [
          e("<input/>").addClass(p.classes.value).addClass(p.classes.input).on("input.dtsb keypress.dtsb", l._throttle(function(f) {
            var H = f.keyCode || f.which;
            return d(l, this, H);
          }, E === null ? 100 : E)),
          e("<span>").addClass(l.classes.joiner).html(l.s.dt.i18n("searchBuilder.valueJoiner", l.c.i18n.valueJoiner)),
          e("<input/>").addClass(p.classes.value).addClass(p.classes.input).on("input.dtsb keypress.dtsb", l._throttle(function(f) {
            var H = f.keyCode || f.which;
            return d(l, this, H);
          }, E === null ? 100 : E))
        ];
        return l.c.greyscale && (O[0].addClass(p.classes.greyscale), O[2].addClass(p.classes.greyscale)), y !== null && (O[0].val(y[0]), O[2].val(y[1])), l.s.dt.one("draw.dtsb", function() {
          l.s.topGroup.trigger("dtsb-redrawLogic");
        }), O;
      }, p.initDate = function(l, d, y) {
        y === void 0 && (y = null);
        var E = l.s.dt.settings()[0].searchDelay, O = l.s.dt.i18n("datetime", {}, !1), f = e("<input/>").addClass(p.classes.value).addClass(p.classes.input).dtDateTime({
          format: l.s.dateFormat ? l.s.dateFormat : void 0,
          i18n: O
        }).on("change.dtsb", l._throttle(function() {
          return d(l, this);
        }, E === null ? 100 : E)).on("input.dtsb keypress.dtsb", function(H) {
          l._throttle(function() {
            var Y = H.keyCode || H.which;
            return d(l, this, Y);
          }, E === null ? 100 : E);
        });
        return l.c.greyscale && f.addClass(p.classes.greyscale), y !== null && f.val(y[0]), l.s.dt.one("draw.dtsb", function() {
          l.s.topGroup.trigger("dtsb-redrawLogic");
        }), f;
      }, p.initNoValue = function(l) {
        return l.s.dt.one("draw.dtsb", function() {
          l.s.topGroup.trigger("dtsb-redrawLogic");
        }), [];
      }, p.init2Date = function(l, d, y) {
        var E = this;
        y === void 0 && (y = null);
        var O = l.s.dt.settings()[0].searchDelay, f = l.s.dt.i18n("datetime", {}, !1), H = [
          e("<input/>").addClass(p.classes.value).addClass(p.classes.input).dtDateTime({
            format: l.s.dateFormat ? l.s.dateFormat : void 0,
            i18n: f
          }).on("change.dtsb", O !== null ? k.util.throttle(function() {
            return d(l, this);
          }, O) : function() {
            d(l, E);
          }).on("input.dtsb keypress.dtsb", function(Y) {
            k.util.throttle(function() {
              var q = Y.keyCode || Y.which;
              return d(l, this, q);
            }, O === null ? 0 : O);
          }),
          e("<span>").addClass(l.classes.joiner).html(l.s.dt.i18n("searchBuilder.valueJoiner", l.c.i18n.valueJoiner)),
          e("<input/>").addClass(p.classes.value).addClass(p.classes.input).dtDateTime({
            format: l.s.dateFormat ? l.s.dateFormat : void 0,
            i18n: f
          }).on("change.dtsb", O !== null ? k.util.throttle(function() {
            return d(l, this);
          }, O) : function() {
            d(l, E);
          }).on("input.dtsb keypress.dtsb", !l.c.enterSearch && !(l.s.dt.settings()[0].oInit.search !== void 0 && l.s.dt.settings()[0].oInit.search.return) && O !== null ? k.util.throttle(function() {
            return d(l, this);
          }, O) : function(Y) {
            var q = Y.keyCode || Y.which;
            d(l, E, q);
          })
        ];
        return l.c.greyscale && (H[0].addClass(p.classes.greyscale), H[2].addClass(p.classes.greyscale)), y !== null && y.length > 0 && (H[0].val(y[0]), H[2].val(y[1])), l.s.dt.one("draw.dtsb", function() {
          l.s.topGroup.trigger("dtsb-redrawLogic");
        }), H;
      }, p.isInputValidSelect = function(l) {
        for (var d = !0, y = 0, E = l; y < E.length; y++) {
          var O = E[y];
          O.children("option:selected").length === O.children("option").length - O.children("option." + p.classes.notItalic).length && O.children("option:selected").length === 1 && O.children("option:selected")[0] === O.children("option")[0] && (d = !1);
        }
        return d;
      }, p.isInputValidInput = function(l) {
        for (var d = !0, y = 0, E = l; y < E.length; y++) {
          var O = E[y];
          O.is("input") && O.val().length === 0 && (d = !1);
        }
        return d;
      }, p.inputValueSelect = function(l) {
        for (var d = [], y = 0, E = l; y < E.length; y++) {
          var O = E[y];
          if (O.is("select")) {
            var f = [].concat(O.children("option:selected").data("sbv")).map(function(H) {
              return p._escapeHTML(H);
            });
            d.push.apply(d, f);
          }
        }
        return d;
      }, p.inputValueInput = function(l) {
        for (var d = [], y = 0, E = l; y < E.length; y++) {
          var O = E[y];
          O.is("input") && d.push(p._escapeHTML(O.val()));
        }
        return d.map(t.util.diacritics);
      }, p.updateListener = function(l, d, y) {
        var E = l.s.conditions[l.s.condition], O;
        if (l.s.filled = E.isInputValid(l.dom.value, l), l.s.value = E.inputValue(l.dom.value, l), !l.s.filled) {
          (!l.c.enterSearch && !(l.s.dt.settings()[0].oInit.search !== void 0 && l.s.dt.settings()[0].oInit.search.return) || y === 13) && l.doSearch();
          return;
        }
        for (Array.isArray(l.s.value) || (l.s.value = [l.s.value]), O = 0; O < l.s.value.length; O++)
          Array.isArray(l.s.value[O]) && l.s.value[O].sort();
        var f = null, H = null;
        for (O = 0; O < l.dom.value.length; O++)
          d === l.dom.value[O][0] && (f = O, d.selectionStart !== void 0 && (H = d.selectionStart));
        (!l.c.enterSearch && !(l.s.dt.settings()[0].oInit.search !== void 0 && l.s.dt.settings()[0].oInit.search.return) || y === 13 || d.nodeName.toLowerCase() === "select") && l.doSearch(), f !== null && (l.dom.value[f].removeClass(l.classes.italic), l.dom.value[f].focus(), H !== null && l.dom.value[f][0].setSelectionRange(H, H));
      }, p.dateConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.equals", d.conditions.date.equals);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), l === d[0];
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.not", d.conditions.date.not);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), l !== d[0];
          }
        },
        "<": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.before", d.conditions.date.before);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), l < d[0];
          }
        },
        ">": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.after", d.conditions.date.after);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), l > d[0];
          }
        },
        between: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.between", d.conditions.date.between);
          },
          init: p.init2Date,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), d[0] < d[1] ? d[0] <= l && l <= d[1] : d[1] <= l && l <= d[0];
          }
        },
        "!between": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.notBetween", d.conditions.date.notBetween);
          },
          init: p.init2Date,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), d[0] < d[1] ? !(d[0] <= l && l <= d[1]) : !(d[1] <= l && l <= d[0]);
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.empty", d.conditions.date.empty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return l == null || l.length === 0;
          }
        },
        "!null": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.notEmpty", d.conditions.date.notEmpty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, p.momentDateConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.equals", d.conditions.date.equals);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return n()(l, y.s.dateFormat).valueOf() === n()(d[0], y.s.dateFormat).valueOf();
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.not", d.conditions.date.not);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return n()(l, y.s.dateFormat).valueOf() !== n()(d[0], y.s.dateFormat).valueOf();
          }
        },
        "<": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.before", d.conditions.date.before);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return n()(l, y.s.dateFormat).valueOf() < n()(d[0], y.s.dateFormat).valueOf();
          }
        },
        ">": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.after", d.conditions.date.after);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return n()(l, y.s.dateFormat).valueOf() > n()(d[0], y.s.dateFormat).valueOf();
          }
        },
        between: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.between", d.conditions.date.between);
          },
          init: p.init2Date,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            var E = n()(l, y.s.dateFormat).valueOf(), O = n()(d[0], y.s.dateFormat).valueOf(), f = n()(d[1], y.s.dateFormat).valueOf();
            return O < f ? O <= E && E <= f : f <= E && E <= O;
          }
        },
        "!between": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.notBetween", d.conditions.date.notBetween);
          },
          init: p.init2Date,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            var E = n()(l, y.s.dateFormat).valueOf(), O = n()(d[0], y.s.dateFormat).valueOf(), f = n()(d[1], y.s.dateFormat).valueOf();
            return O < f ? !(+O <= +E && +E <= +f) : !(+f <= +E && +E <= +O);
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.empty", d.conditions.date.empty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return l == null || l.length === 0;
          }
        },
        "!null": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.notEmpty", d.conditions.date.notEmpty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, p.luxonDateConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.equals", d.conditions.date.equals);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return r().DateTime.fromFormat(l, y.s.dateFormat).ts === r().DateTime.fromFormat(d[0], y.s.dateFormat).ts;
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.not", d.conditions.date.not);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return r().DateTime.fromFormat(l, y.s.dateFormat).ts !== r().DateTime.fromFormat(d[0], y.s.dateFormat).ts;
          }
        },
        "<": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.before", d.conditions.date.before);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return r().DateTime.fromFormat(l, y.s.dateFormat).ts < r().DateTime.fromFormat(d[0], y.s.dateFormat).ts;
          }
        },
        ">": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.after", d.conditions.date.after);
          },
          init: p.initDate,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return r().DateTime.fromFormat(l, y.s.dateFormat).ts > r().DateTime.fromFormat(d[0], y.s.dateFormat).ts;
          }
        },
        between: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.between", d.conditions.date.between);
          },
          init: p.init2Date,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            var E = r().DateTime.fromFormat(l, y.s.dateFormat).ts, O = r().DateTime.fromFormat(d[0], y.s.dateFormat).ts, f = r().DateTime.fromFormat(d[1], y.s.dateFormat).ts;
            return O < f ? O <= E && E <= f : f <= E && E <= O;
          }
        },
        "!between": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.notBetween", d.conditions.date.notBetween);
          },
          init: p.init2Date,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            var E = r().DateTime.fromFormat(l, y.s.dateFormat).ts, O = r().DateTime.fromFormat(d[0], y.s.dateFormat).ts, f = r().DateTime.fromFormat(d[1], y.s.dateFormat).ts;
            return O < f ? !(+O <= +E && +E <= +f) : !(+f <= +E && +E <= +O);
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.empty", d.conditions.date.empty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return l == null || l.length === 0;
          }
        },
        "!null": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.notEmpty", d.conditions.date.notEmpty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, p.numConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.equals", d.conditions.number.equals);
          },
          init: p.initSelect,
          inputValue: p.inputValueSelect,
          isInputValid: p.isInputValidSelect,
          search: function(l, d) {
            return +l == +d[0];
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.not", d.conditions.number.not);
          },
          init: p.initSelect,
          inputValue: p.inputValueSelect,
          isInputValid: p.isInputValidSelect,
          search: function(l, d) {
            return +l != +d[0];
          }
        },
        "<": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.lt", d.conditions.number.lt);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return +l < +d[0];
          }
        },
        "<=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.lte", d.conditions.number.lte);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return +l <= +d[0];
          }
        },
        ">=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.gte", d.conditions.number.gte);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return +l >= +d[0];
          }
        },
        ">": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.gt", d.conditions.number.gt);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return +l > +d[0];
          }
        },
        between: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.between", d.conditions.number.between);
          },
          init: p.init2Input,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return +d[0] < +d[1] ? +d[0] <= +l && +l <= +d[1] : +d[1] <= +l && +l <= +d[0];
          }
        },
        "!between": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.notBetween", d.conditions.number.notBetween);
          },
          init: p.init2Input,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return +d[0] < +d[1] ? !(+d[0] <= +l && +l <= +d[1]) : !(+d[1] <= +l && +l <= +d[0]);
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.empty", d.conditions.number.empty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return l == null || l.length === 0;
          }
        },
        "!null": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.notEmpty", d.conditions.number.notEmpty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, p.numFmtConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.equals", d.conditions.number.equals);
          },
          init: p.initSelect,
          inputValue: p.inputValueSelect,
          isInputValid: p.isInputValidSelect,
          search: function(l, d, y) {
            return y.parseNumber(l) === y.parseNumber(d[0]);
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.not", d.conditions.number.not);
          },
          init: p.initSelect,
          inputValue: p.inputValueSelect,
          isInputValid: p.isInputValidSelect,
          search: function(l, d, y) {
            return y.parseNumber(l) !== y.parseNumber(d[0]);
          }
        },
        "<": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.lt", d.conditions.number.lt);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return y.parseNumber(l) < y.parseNumber(d[0]);
          }
        },
        "<=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.lte", d.conditions.number.lte);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return y.parseNumber(l) <= y.parseNumber(d[0]);
          }
        },
        ">=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.gte", d.conditions.number.gte);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return y.parseNumber(l) >= y.parseNumber(d[0]);
          }
        },
        ">": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.gt", d.conditions.number.gt);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            return y.parseNumber(l) > y.parseNumber(d[0]);
          }
        },
        between: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.between", d.conditions.number.between);
          },
          init: p.init2Input,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            var E = y.parseNumber(l), O = y.parseNumber(d[0]), f = y.parseNumber(d[1]);
            return +O < +f ? +O <= +E && +E <= +f : +f <= +E && +E <= +O;
          }
        },
        "!between": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.notBetween", d.conditions.number.notBetween);
          },
          init: p.init2Input,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d, y) {
            var E = y.parseNumber(l), O = y.parseNumber(d[0]), f = y.parseNumber(d[1]);
            return +O < +f ? !(+O <= +E && +E <= +f) : !(+f <= +E && +E <= +O);
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.empty", d.conditions.number.empty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return l == null || l.length === 0;
          }
        },
        "!null": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.notEmpty", d.conditions.number.notEmpty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, p.stringConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.equals", d.conditions.string.equals);
          },
          init: p.initSelect,
          inputValue: p.inputValueSelect,
          isInputValid: p.isInputValidSelect,
          search: function(l, d) {
            return l === d[0];
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.not", d.conditions.string.not);
          },
          init: p.initSelect,
          inputValue: p.inputValueSelect,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l !== d[0];
          }
        },
        starts: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.startsWith", d.conditions.string.startsWith);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l.toLowerCase().indexOf(d[0].toLowerCase()) === 0;
          }
        },
        "!starts": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.notStartsWith", d.conditions.string.notStartsWith);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l.toLowerCase().indexOf(d[0].toLowerCase()) !== 0;
          }
        },
        contains: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.contains", d.conditions.string.contains);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l.toLowerCase().includes(d[0].toLowerCase());
          }
        },
        "!contains": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.notContains", d.conditions.string.notContains);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return !l.toLowerCase().includes(d[0].toLowerCase());
          }
        },
        ends: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.endsWith", d.conditions.string.endsWith);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return l.toLowerCase().endsWith(d[0].toLowerCase());
          }
        },
        "!ends": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.notEndsWith", d.conditions.string.notEndsWith);
          },
          init: p.initInput,
          inputValue: p.inputValueInput,
          isInputValid: p.isInputValidInput,
          search: function(l, d) {
            return !l.toLowerCase().endsWith(d[0].toLowerCase());
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.empty", d.conditions.string.empty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return l == null || l.length === 0;
          }
        },
        "!null": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.notEmpty", d.conditions.string.notEmpty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, p.arrayConditions = {
        contains: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.array.contains", d.conditions.array.contains);
          },
          init: p.initSelectArray,
          inputValue: p.inputValueSelect,
          isInputValid: p.isInputValidSelect,
          search: function(l, d) {
            return l.includes(d[0]);
          }
        },
        without: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.array.without", d.conditions.array.without);
          },
          init: p.initSelectArray,
          inputValue: p.inputValueSelect,
          isInputValid: p.isInputValidSelect,
          search: function(l, d) {
            return l.indexOf(d[0]) === -1;
          }
        },
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.array.equals", d.conditions.array.equals);
          },
          init: p.initSelect,
          inputValue: p.inputValueSelect,
          isInputValid: p.isInputValidSelect,
          search: function(l, d) {
            if (l.length === d.length) {
              d.sort();
              for (var y = 0; y < l.length; y++)
                if (l[y] !== d[y])
                  return !1;
              return !0;
            }
            return !1;
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.array.not", d.conditions.array.not);
          },
          init: p.initSelect,
          inputValue: p.inputValueSelect,
          isInputValid: p.isInputValidSelect,
          search: function(l, d) {
            if (l.length === d.length) {
              d.sort();
              for (var y = 0; y < l.length; y++)
                if (l[y] !== d[y])
                  return !0;
              return !1;
            }
            return !0;
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.array.empty", d.conditions.array.empty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return l == null || l.length === 0;
          }
        },
        "!null": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.array.notEmpty", d.conditions.array.notEmpty);
          },
          init: p.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return l != null && l.length !== 0;
          }
        }
      }, p.defaults = {
        columns: !0,
        conditions: {
          array: p.arrayConditions,
          date: p.dateConditions,
          html: p.stringConditions,
          "html-num": p.numConditions,
          "html-num-fmt": p.numFmtConditions,
          luxon: p.luxonDateConditions,
          moment: p.momentDateConditions,
          num: p.numConditions,
          "num-fmt": p.numFmtConditions,
          string: p.stringConditions
        },
        depthLimit: !1,
        enterSearch: !1,
        filterChanged: void 0,
        greyscale: !1,
        i18n: {
          add: "Add Condition",
          button: {
            0: "Search Builder",
            _: "Search Builder (%d)"
          },
          clearAll: "Clear All",
          condition: "Condition",
          data: "Data",
          delete: "&times",
          deleteTitle: "Delete filtering rule",
          left: "<",
          leftTitle: "Outdent criteria",
          logicAnd: "And",
          logicOr: "Or",
          right: ">",
          rightTitle: "Indent criteria",
          search: "Search",
          title: {
            0: "Custom Search Builder",
            _: "Custom Search Builder (%d)"
          },
          value: "Value",
          valueJoiner: "and"
        },
        liveSearch: !0,
        logic: "AND",
        orthogonal: {
          display: "display",
          search: "filter"
        },
        preDefined: !1
      }, p;
    }()
  ), o;
  function u(p) {
    o = p, p.fn.dataTable;
  }
  var v = (
    /** @class */
    function() {
      function p(l, d, y, E, O, f, H) {
        return E === void 0 && (E = 0), O === void 0 && (O = !1), f === void 0 && (f = 1), H === void 0 && (H = void 0), this.classes = o.extend(!0, {}, p.classes), this.c = o.extend(!0, {}, p.defaults, d), this.s = {
          criteria: [],
          depth: f,
          dt: l,
          index: E,
          isChild: O,
          logic: void 0,
          opts: d,
          preventRedraw: !1,
          serverData: H,
          toDrop: void 0,
          topGroup: y
        }, this.dom = {
          add: o("<button/>").addClass(this.classes.add).addClass(this.classes.button).attr("type", "button"),
          clear: o("<button>&times</button>").addClass(this.classes.button).addClass(this.classes.clearGroup).attr("type", "button"),
          container: o("<div/>").addClass(this.classes.group),
          logic: o("<button><div/></button>").addClass(this.classes.logic).addClass(this.classes.button).attr("type", "button"),
          logicContainer: o("<div/>").addClass(this.classes.logicContainer),
          search: o("<button/>").addClass(this.classes.search).addClass(this.classes.button).attr("type", "button").css("display", "none")
        }, this.s.topGroup === void 0 && (this.s.topGroup = this.dom.container), this._setup(), this;
      }
      return p.prototype.destroy = function() {
        this.dom.add.off(".dtsb"), this.dom.logic.off(".dtsb"), this.dom.search.off(".dtsb"), this.dom.container.trigger("dtsb-destroy").remove(), this.s.criteria = [];
      }, p.prototype.getDetails = function(l) {
        if (l === void 0 && (l = !1), this.s.criteria.length === 0)
          return {};
        for (var d = {
          criteria: [],
          logic: this.s.logic
        }, y = 0, E = this.s.criteria; y < E.length; y++) {
          var O = E[y];
          d.criteria.push(O.criteria.getDetails(l));
        }
        return d;
      }, p.prototype.getNode = function() {
        return this.dom.container;
      }, p.prototype.rebuild = function(l) {
        var d;
        if (!(l.criteria === void 0 || l.criteria === null || Array.isArray(l.criteria) && l.criteria.length === 0)) {
          if (this.s.logic = l.logic, this.dom.logic.children().first().html(this.s.logic === "OR" ? this.s.dt.i18n("searchBuilder.logicOr", this.c.i18n.logicOr) : this.s.dt.i18n("searchBuilder.logicAnd", this.c.i18n.logicAnd)), Array.isArray(l.criteria))
            for (var y = 0, E = l.criteria; y < E.length; y++)
              d = E[y], d.logic !== void 0 ? this._addPrevGroup(d) : d.logic === void 0 && this._addPrevCriteria(d);
          for (var O = 0, f = this.s.criteria; O < f.length; O++)
            d = f[O], d.criteria instanceof a && (d.criteria.updateArrows(this.s.criteria.length > 1), this._setCriteriaListeners(d.criteria));
        }
      }, p.prototype.redrawContents = function() {
        if (!this.s.preventRedraw) {
          this.dom.container.children().detach(), this.dom.container.append(this.dom.logicContainer).append(this.dom.add), this.c.liveSearch || this.dom.container.append(this.dom.search), this.s.criteria.sort(function(y, E) {
            return y.criteria.s.index < E.criteria.s.index ? -1 : y.criteria.s.index > E.criteria.s.index ? 1 : 0;
          }), this.setListeners();
          for (var l = 0; l < this.s.criteria.length; l++) {
            var d = this.s.criteria[l].criteria;
            d instanceof a ? (this.s.criteria[l].index = l, this.s.criteria[l].criteria.s.index = l, this.s.criteria[l].criteria.dom.container.insertBefore(this.dom.add), this._setCriteriaListeners(d), this.s.criteria[l].criteria.s.preventRedraw = this.s.preventRedraw, this.s.criteria[l].criteria.rebuild(this.s.criteria[l].criteria.getDetails()), this.s.criteria[l].criteria.s.preventRedraw = !1) : d instanceof p && d.s.criteria.length > 0 ? (this.s.criteria[l].index = l, this.s.criteria[l].criteria.s.index = l, this.s.criteria[l].criteria.dom.container.insertBefore(this.dom.add), d.s.preventRedraw = this.s.preventRedraw, d.redrawContents(), d.s.preventRedraw = !1, this._setGroupListeners(d)) : (this.s.criteria.splice(l, 1), l--);
          }
          this.setupLogic();
        }
      }, p.prototype.redrawLogic = function() {
        for (var l = 0, d = this.s.criteria; l < d.length; l++) {
          var y = d[l];
          y.criteria instanceof p && y.criteria.redrawLogic();
        }
        this.setupLogic();
      }, p.prototype.search = function(l, d) {
        return this.s.logic === "AND" ? this._andSearch(l, d) : this.s.logic === "OR" ? this._orSearch(l, d) : !0;
      }, p.prototype.setupLogic = function() {
        if (this.dom.logicContainer.remove(), this.dom.clear.remove(), this.s.criteria.length < 1) {
          this.s.isChild || (this.dom.container.trigger("dtsb-destroy"), this.dom.container.css("margin-left", 0)), this.dom.search.css("display", "none");
          return;
        }
        this.dom.clear.height("0px"), this.dom.logicContainer.append(this.dom.clear), this.s.isChild || this.dom.search.css("display", "inline-block"), this.dom.container.prepend(this.dom.logicContainer);
        for (var l = 0, d = this.s.criteria; l < d.length; l++) {
          var y = d[l];
          y.criteria instanceof a && y.criteria.setupButtons();
        }
        var E = this.dom.container.outerHeight() - 1;
        this.dom.logicContainer.width(E), this._setLogicListener(), this.dom.container.css("margin-left", this.dom.logicContainer.outerHeight(!0));
        var O = this.dom.logicContainer.offset(), f = O.left, H = this.dom.container.offset().left, Y = f - H, q = f - Y - this.dom.logicContainer.outerHeight(!0);
        this.dom.logicContainer.offset({ left: q });
        var K = this.dom.logicContainer.next(), ne = O.top, F = o(K).offset().top, S = ne - F, A = ne - S;
        this.dom.logicContainer.offset({ top: A }), this.dom.clear.outerHeight(this.dom.logicContainer.height()), this._setClearListener();
      }, p.prototype.setListeners = function() {
        var l = this;
        this.dom.add.unbind("click"), this.dom.add.on("click.dtsb", function() {
          return l.s.isChild || l.dom.container.prepend(l.dom.logicContainer), l.addCriteria(), l.dom.container.trigger("dtsb-add"), l.s.dt.state.save(), !1;
        }), this.dom.search.off("click.dtsb").on("click.dtsb", function() {
          l.s.dt.draw();
        });
        for (var d = 0, y = this.s.criteria; d < y.length; d++) {
          var E = y[d];
          E.criteria.setListeners();
        }
        this._setClearListener(), this._setLogicListener();
      }, p.prototype.addCriteria = function(l) {
        l === void 0 && (l = null);
        var d = l === null ? this.s.criteria.length : l.s.index, y = new a(this.s.dt, this.s.opts, this.s.topGroup, d, this.s.depth, this.s.serverData, this.c.liveSearch);
        l !== null && (y.c = l.c, y.s = l.s, y.s.depth = this.s.depth, y.classes = l.classes), y.populate();
        for (var E = !1, O = 0; O < this.s.criteria.length; O++)
          O === 0 && this.s.criteria[O].criteria.s.index > y.s.index ? (y.getNode().insertBefore(this.s.criteria[O].criteria.dom.container), E = !0) : O < this.s.criteria.length - 1 && this.s.criteria[O].criteria.s.index < y.s.index && this.s.criteria[O + 1].criteria.s.index > y.s.index && (y.getNode().insertAfter(this.s.criteria[O].criteria.dom.container), E = !0);
        E || y.getNode().insertBefore(this.dom.add), this.s.criteria.push({
          criteria: y,
          index: d
        }), this.s.criteria = this.s.criteria.sort(function(q, K) {
          return q.criteria.s.index - K.criteria.s.index;
        });
        for (var f = 0, H = this.s.criteria; f < H.length; f++) {
          var Y = H[f];
          Y.criteria instanceof a && Y.criteria.updateArrows(this.s.criteria.length > 1);
        }
        this._setCriteriaListeners(y), y.setListeners(), this.setupLogic();
      }, p.prototype.checkFilled = function() {
        for (var l = 0, d = this.s.criteria; l < d.length; l++) {
          var y = d[l];
          if (y.criteria instanceof a && y.criteria.s.filled || y.criteria instanceof p && y.criteria.checkFilled())
            return !0;
        }
        return !1;
      }, p.prototype.count = function() {
        for (var l = 0, d = 0, y = this.s.criteria; d < y.length; d++) {
          var E = y[d];
          E.criteria instanceof p ? l += E.criteria.count() : l++;
        }
        return l;
      }, p.prototype._addPrevGroup = function(l) {
        var d = this.s.criteria.length, y = new p(this.s.dt, this.c, this.s.topGroup, d, !0, this.s.depth + 1, this.s.serverData);
        this.s.criteria.push({
          criteria: y,
          index: d,
          logic: y.s.logic
        }), y.rebuild(l), this.s.criteria[d].criteria = y, this.s.topGroup.trigger("dtsb-redrawContents"), this._setGroupListeners(y);
      }, p.prototype._addPrevCriteria = function(l) {
        var d = this.s.criteria.length, y = new a(this.s.dt, this.s.opts, this.s.topGroup, d, this.s.depth, this.s.serverData);
        y.populate(), this.s.criteria.push({
          criteria: y,
          index: d
        }), y.s.preventRedraw = this.s.preventRedraw, y.rebuild(l), y.s.preventRedraw = !1, this.s.criteria[d].criteria = y, this.s.preventRedraw || this.s.topGroup.trigger("dtsb-redrawContents");
      }, p.prototype._andSearch = function(l, d) {
        if (this.s.criteria.length === 0)
          return !0;
        for (var y = 0, E = this.s.criteria; y < E.length; y++) {
          var O = E[y];
          if (!(O.criteria instanceof a && !O.criteria.s.filled) && !O.criteria.search(l, d))
            return !1;
        }
        return !0;
      }, p.prototype._orSearch = function(l, d) {
        if (this.s.criteria.length === 0)
          return !0;
        for (var y = !1, E = 0, O = this.s.criteria; E < O.length; E++) {
          var f = O[E];
          if (f.criteria instanceof a && f.criteria.s.filled) {
            if (y = !0, f.criteria.search(l, d))
              return !0;
          } else if (f.criteria instanceof p && f.criteria.checkFilled() && (y = !0, f.criteria.search(l, d)))
            return !0;
        }
        return !y;
      }, p.prototype._removeCriteria = function(l, d) {
        d === void 0 && (d = !1);
        var y;
        if (this.s.criteria.length <= 1 && this.s.isChild)
          this.destroy();
        else {
          var E = void 0;
          for (y = 0; y < this.s.criteria.length; y++)
            this.s.criteria[y].index === l.s.index && (!d || this.s.criteria[y].criteria instanceof p) && (E = y);
          for (E !== void 0 && this.s.criteria.splice(E, 1), y = 0; y < this.s.criteria.length; y++)
            this.s.criteria[y].index = y, this.s.criteria[y].criteria.s.index = y;
        }
      }, p.prototype._setCriteriaListeners = function(l) {
        var d = this;
        l.dom.delete.unbind("click").on("click.dtsb", function() {
          d._removeCriteria(l), l.dom.container.remove();
          for (var y = 0, E = d.s.criteria; y < E.length; y++) {
            var O = E[y];
            O.criteria instanceof a && O.criteria.updateArrows(d.s.criteria.length > 1);
          }
          return l.destroy(), d.s.dt.draw(), d.s.topGroup.trigger("dtsb-redrawContents"), !1;
        }), l.dom.right.unbind("click").on("click.dtsb", function() {
          var y = l.s.index, E = new p(d.s.dt, d.s.opts, d.s.topGroup, l.s.index, !0, d.s.depth + 1, d.s.serverData);
          return E.addCriteria(l), d.s.criteria[y].criteria = E, d.s.criteria[y].logic = "AND", d.s.topGroup.trigger("dtsb-redrawContents"), d._setGroupListeners(E), !1;
        }), l.dom.left.unbind("click").on("click.dtsb", function() {
          d.s.toDrop = new a(d.s.dt, d.s.opts, d.s.topGroup, l.s.index, void 0, d.s.serverData), d.s.toDrop.s = l.s, d.s.toDrop.c = l.c, d.s.toDrop.classes = l.classes, d.s.toDrop.populate();
          var y = d.s.toDrop.s.index;
          return d.dom.container.trigger("dtsb-dropCriteria"), l.s.index = y, d._removeCriteria(l), d.s.topGroup.trigger("dtsb-redrawContents"), d.s.dt.draw(), !1;
        });
      }, p.prototype._setClearListener = function() {
        var l = this;
        this.dom.clear.unbind("click").on("click.dtsb", function() {
          return l.s.isChild ? (l.destroy(), l.s.topGroup.trigger("dtsb-redrawContents"), !1) : (l.dom.container.trigger("dtsb-clearContents"), !1);
        });
      }, p.prototype._setGroupListeners = function(l) {
        var d = this;
        l.dom.add.unbind("click").on("click.dtsb", function() {
          return d.setupLogic(), d.dom.container.trigger("dtsb-add"), !1;
        }), l.dom.container.unbind("dtsb-add").on("dtsb-add.dtsb", function() {
          return d.setupLogic(), d.dom.container.trigger("dtsb-add"), !1;
        }), l.dom.container.unbind("dtsb-destroy").on("dtsb-destroy.dtsb", function() {
          return d._removeCriteria(l, !0), l.dom.container.remove(), d.setupLogic(), !1;
        }), l.dom.container.unbind("dtsb-dropCriteria").on("dtsb-dropCriteria.dtsb", function() {
          var y = l.s.toDrop;
          return y.s.index = l.s.index, y.updateArrows(d.s.criteria.length > 1), d.addCriteria(y), !1;
        }), l.setListeners();
      }, p.prototype._setup = function() {
        this.setListeners(), this.dom.add.html(this.s.dt.i18n("searchBuilder.add", this.c.i18n.add)), this.dom.search.html(this.s.dt.i18n("searchBuilder.search", this.c.i18n.search)), this.dom.logic.children().first().html(this.c.logic === "OR" ? this.s.dt.i18n("searchBuilder.logicOr", this.c.i18n.logicOr) : this.s.dt.i18n("searchBuilder.logicAnd", this.c.i18n.logicAnd)), this.s.logic = this.c.logic === "OR" ? "OR" : "AND", this.c.greyscale && this.dom.logic.addClass(this.classes.greyscale), this.dom.logicContainer.append(this.dom.logic).append(this.dom.clear), this.s.isChild && this.dom.container.append(this.dom.logicContainer), this.dom.container.append(this.dom.add), this.c.liveSearch || this.dom.container.append(this.dom.search);
      }, p.prototype._setLogicListener = function() {
        var l = this;
        this.dom.logic.unbind("click").on("click.dtsb", function() {
          l._toggleLogic(), l.s.dt.draw();
          for (var d = 0, y = l.s.criteria; d < y.length; d++) {
            var E = y[d];
            E.criteria.setListeners();
          }
        });
      }, p.prototype._toggleLogic = function() {
        this.s.logic === "OR" ? (this.s.logic = "AND", this.dom.logic.children().first().html(this.s.dt.i18n("searchBuilder.logicAnd", this.c.i18n.logicAnd))) : this.s.logic === "AND" && (this.s.logic = "OR", this.dom.logic.children().first().html(this.s.dt.i18n("searchBuilder.logicOr", this.c.i18n.logicOr)));
      }, p.version = "1.1.0", p.classes = {
        add: "dtsb-add",
        button: "dtsb-button",
        clearGroup: "dtsb-clearGroup",
        greyscale: "dtsb-greyscale",
        group: "dtsb-group",
        inputButton: "dtsb-iptbtn",
        logic: "dtsb-logic",
        logicContainer: "dtsb-logicContainer",
        search: "dtsb-search"
      }, p.defaults = {
        columns: !0,
        conditions: {
          date: a.dateConditions,
          html: a.stringConditions,
          "html-num": a.numConditions,
          "html-num-fmt": a.numFmtConditions,
          luxon: a.luxonDateConditions,
          moment: a.momentDateConditions,
          num: a.numConditions,
          "num-fmt": a.numFmtConditions,
          string: a.stringConditions
        },
        depthLimit: !1,
        enterSearch: !1,
        filterChanged: void 0,
        greyscale: !1,
        liveSearch: !0,
        i18n: {
          add: "Add Condition",
          button: {
            0: "Search Builder",
            _: "Search Builder (%d)"
          },
          clearAll: "Clear All",
          condition: "Condition",
          data: "Data",
          delete: "&times",
          deleteTitle: "Delete filtering rule",
          left: "<",
          leftTitle: "Outdent criteria",
          logicAnd: "And",
          logicOr: "Or",
          right: ">",
          rightTitle: "Indent criteria",
          search: "Search",
          title: {
            0: "Custom Search Builder",
            _: "Custom Search Builder (%d)"
          },
          value: "Value",
          valueJoiner: "and"
        },
        logic: "AND",
        orthogonal: {
          display: "display",
          search: "filter"
        },
        preDefined: !1
      }, p;
    }()
  ), b, m;
  function x(p) {
    b = p, m = p.fn.DataTable;
  }
  var _ = (
    /** @class */
    function() {
      function p(l, d) {
        var y = this;
        if (!m || !m.versionCheck || !m.versionCheck("2"))
          throw new Error("SearchBuilder requires DataTables 2 or newer");
        var E = new m.Api(l);
        if (this.classes = b.extend(!0, {}, p.classes), this.c = b.extend(!0, {}, p.defaults, d), this.dom = {
          clearAll: b('<button type="button">' + E.i18n("searchBuilder.clearAll", this.c.i18n.clearAll) + "</button>").addClass(this.classes.clearAll).addClass(this.classes.button).attr("type", "button"),
          container: b("<div/>").addClass(this.classes.container),
          title: b("<div/>").addClass(this.classes.title),
          titleRow: b("<div/>").addClass(this.classes.titleRow),
          topGroup: void 0
        }, this.s = {
          dt: E,
          opts: d,
          search: void 0,
          serverData: void 0,
          topGroup: void 0
        }, E.settings()[0]._searchBuilder === void 0)
          return E.settings()[0]._searchBuilder = this, this.s.dt.page.info().serverSide && (this.s.dt.on("preXhr.dtsb", function(O, f, H) {
            var Y = y.s.dt.state.loaded();
            Y && Y.searchBuilder && (H.searchBuilder = y._collapseArray(Y.searchBuilder));
          }), this.s.dt.on("xhr.dtsb", function(O, f, H) {
            H && H.searchBuilder && H.searchBuilder.options && (y.s.serverData = H.searchBuilder.options);
          })), this.s.dt.settings()[0]._bInitComplete ? this._setUp() : E.one("init.dt", function() {
            y._setUp();
          }), this;
      }
      return p.prototype.getDetails = function(l) {
        return l === void 0 && (l = !1), this.s.topGroup ? this.s.topGroup.getDetails(l) : {};
      }, p.prototype.getNode = function() {
        return this.dom.container;
      }, p.prototype.rebuild = function(l, d) {
        return d === void 0 && (d = !0), this.dom.clearAll.trigger("click", !1), l == null ? this : (this.s.topGroup.s.preventRedraw = !0, this.s.topGroup.rebuild(l), this.s.topGroup.s.preventRedraw = !1, this._checkClear(), this._updateTitle(this.s.topGroup.count()), this.s.topGroup.redrawContents(), d && this.s.dt.draw(!1), this.s.topGroup.setListeners(), this);
      }, p.prototype._applyPreDefDefaults = function(l) {
        var d = this;
        l.criteria !== void 0 && l.logic === void 0 && (l.logic = "AND");
        for (var y = function(Y) {
          Y.criteria !== void 0 ? Y = E._applyPreDefDefaults(Y) : E.s.dt.columns().every(function(q) {
            d.s.dt.settings()[0].aoColumns[q].sTitle === Y.data && (Y.dataIdx = q);
          });
        }, E = this, O = 0, f = l.criteria; O < f.length; O++) {
          var H = f[O];
          y(H);
        }
        return l;
      }, p.prototype._setUp = function(l) {
        var d = this;
        if (l === void 0 && (l = !0), typeof this.s.dt.column().type != "function" && k.Api.registerPlural("columns().types()", "column().type()", function() {
          return this.iterator("column", function(F, S) {
            return F.aoColumns[S].sType;
          }, 1);
        }), !m.DateTime) {
          var y = this.s.dt.columns().types().toArray();
          if (y === void 0 || y.includes(void 0) || y.includes(null)) {
            y = [];
            for (var E = 0, O = this.s.dt.settings()[0].aoColumns; E < O.length; E++) {
              var f = O[E];
              y.push(f.searchBuilderType !== void 0 ? f.searchBuilderType : f.sType);
            }
          }
          var H = this.s.dt.columns().toArray();
          (y === void 0 || y.includes(void 0) || y.includes(null)) && (b.fn.dataTable.ext.oApi && b.fn.dataTable.ext.oApi._fnColumnTypes(this.s.dt.settings()[0]), y = this.s.dt.columns().types().toArray());
          for (var Y = 0; Y < H[0].length; Y++) {
            var q = H[0][Y], K = y[q];
            if (
              // Check if this column can be filtered
              (this.c.columns === !0 || Array.isArray(this.c.columns) && this.c.columns.includes(Y)) && // Check if the type is one of the restricted types
              (K.includes("date") || K.includes("moment") || K.includes("luxon"))
            )
              throw alert("SearchBuilder Requires DateTime when used with dates."), new Error("SearchBuilder requires DateTime");
          }
        }
        if (this.s.topGroup = new v(this.s.dt, this.c, void 0, void 0, void 0, void 0, this.s.serverData), this._setClearListener(), this.s.dt.on("stateSaveParams.dtsb", function(F, S, A) {
          A.searchBuilder = d.getDetails(), A.scroller ? A.start = d.s.dt.state().start : A.page = d.s.dt.page();
        }), this.s.dt.on("stateLoadParams.dtsb", function(F, S, A) {
          d.rebuild(A.searchBuilder);
        }), this._build(), this.s.dt.on("preXhr.dtsb", function(F, S, A) {
          d.s.dt.page.info().serverSide && (A.searchBuilder = d._collapseArray(d.getDetails(!0)));
        }), this.s.dt.on("columns-reordered", function() {
          d.rebuild(d.getDetails());
        }), l) {
          var ne = this.s.dt.state.loaded();
          ne !== null && ne.searchBuilder !== void 0 ? (this.s.topGroup.rebuild(ne.searchBuilder), this.s.topGroup.dom.container.trigger("dtsb-redrawContents"), this.s.dt.page.info().serverSide || (ne.page ? this.s.dt.page(ne.page).draw("page") : this.s.dt.scroller && ne.scroller && this.s.dt.scroller().scrollToRow(ne.scroller.topRow)), this.s.topGroup.setListeners()) : this.c.preDefined !== !1 && (this.c.preDefined = this._applyPreDefDefaults(this.c.preDefined), this.rebuild(this.c.preDefined));
        }
        this._setEmptyListener(), this.s.dt.state.save();
      }, p.prototype._collapseArray = function(l) {
        if (l.logic === void 0)
          l.value !== void 0 && (l.value.sort(function(y, E) {
            return isNaN(+y) || (y = +y, E = +E), y < E ? -1 : E < y ? 1 : 0;
          }), l.value1 = l.value[0], l.value2 = l.value[1]);
        else
          for (var d = 0; d < l.criteria.length; d++)
            l.criteria[d] = this._collapseArray(l.criteria[d]);
        return l;
      }, p.prototype._updateTitle = function(l) {
        this.dom.title.html(this.s.dt.i18n("searchBuilder.title", this.c.i18n.title, l));
      }, p.prototype._build = function() {
        var l = this;
        this.dom.clearAll.remove(), this.dom.container.empty();
        var d = this.s.topGroup.count();
        this._updateTitle(d), this.dom.titleRow.append(this.dom.title), this.dom.container.append(this.dom.titleRow), this.dom.topGroup = this.s.topGroup.getNode(), this.dom.container.append(this.dom.topGroup), this._setRedrawListener();
        var y = this.s.dt.table(0).node();
        b.fn.dataTable.ext.search.includes(this.s.search) || (this.s.search = function(E, O, f) {
          return E.nTable !== y ? !0 : l.s.topGroup.search(O, f);
        }, b.fn.dataTable.ext.search.push(this.s.search)), this.s.dt.on("destroy.dtsb", function() {
          l.dom.container.remove(), l.dom.clearAll.remove();
          for (var E = b.fn.dataTable.ext.search.indexOf(l.s.search); E !== -1; )
            b.fn.dataTable.ext.search.splice(E, 1), E = b.fn.dataTable.ext.search.indexOf(l.s.search);
          l.s.dt.off(".dtsb"), b(l.s.dt.table().node()).off(".dtsb");
        });
      }, p.prototype._checkClear = function() {
        this.s.topGroup.s.criteria.length > 0 ? (this.dom.clearAll.insertAfter(this.dom.title), this._setClearListener()) : this.dom.clearAll.remove();
      }, p.prototype._filterChanged = function(l) {
        var d = this.c.filterChanged;
        typeof d == "function" && d(l, this.s.dt.i18n("searchBuilder.button", this.c.i18n.button, l));
      }, p.prototype._setClearListener = function() {
        var l = this;
        this.dom.clearAll.unbind("click"), this.dom.clearAll.on("click.dtsb", function(d, y) {
          return l.s.topGroup = new v(l.s.dt, l.c, void 0, void 0, void 0, void 0, l.s.serverData), l._build(), y !== !1 && l.s.dt.draw(), l.s.topGroup.setListeners(), l.dom.clearAll.remove(), l._setEmptyListener(), l._filterChanged(0), !1;
        });
      }, p.prototype._setRedrawListener = function() {
        var l = this;
        this.s.topGroup.dom.container.unbind("dtsb-redrawContents"), this.s.topGroup.dom.container.on("dtsb-redrawContents.dtsb", function() {
          l._checkClear(), l.s.topGroup.redrawContents(), l.s.topGroup.setupLogic(), l._setEmptyListener();
          var d = l.s.topGroup.count();
          l._updateTitle(d), l._filterChanged(d), l.s.dt.page.info().serverSide || l.s.dt.draw(), l.s.dt.state.save();
        }), this.s.topGroup.dom.container.unbind("dtsb-redrawContents-noDraw"), this.s.topGroup.dom.container.on("dtsb-redrawContents-noDraw.dtsb", function() {
          l._checkClear(), l.s.topGroup.s.preventRedraw = !0, l.s.topGroup.redrawContents(), l.s.topGroup.s.preventRedraw = !1, l.s.topGroup.setupLogic(), l._setEmptyListener();
          var d = l.s.topGroup.count();
          l._updateTitle(d), l._filterChanged(d);
        }), this.s.topGroup.dom.container.unbind("dtsb-redrawLogic"), this.s.topGroup.dom.container.on("dtsb-redrawLogic.dtsb", function() {
          l.s.topGroup.redrawLogic();
          var d = l.s.topGroup.count();
          l._updateTitle(d), l._filterChanged(d);
        }), this.s.topGroup.dom.container.unbind("dtsb-add"), this.s.topGroup.dom.container.on("dtsb-add.dtsb", function() {
          var d = l.s.topGroup.count();
          l._updateTitle(d), l._filterChanged(d), l._checkClear();
        }), this.s.dt.on("postEdit.dtsb postCreate.dtsb postRemove.dtsb", function() {
          l.s.topGroup.redrawContents();
        }), this.s.topGroup.dom.container.unbind("dtsb-clearContents"), this.s.topGroup.dom.container.on("dtsb-clearContents.dtsb", function() {
          l._setUp(!1), l._filterChanged(0), l.s.dt.draw();
        });
      }, p.prototype._setEmptyListener = function() {
        var l = this;
        this.s.topGroup.dom.add.on("click.dtsb", function() {
          l._checkClear();
        }), this.s.topGroup.dom.container.on("dtsb-destroy.dtsb", function() {
          l.dom.clearAll.remove();
        });
      }, p.version = "1.8.4", p.classes = {
        button: "dtsb-button",
        clearAll: "dtsb-clearAll",
        container: "dtsb-searchBuilder",
        inputButton: "dtsb-iptbtn",
        title: "dtsb-title",
        titleRow: "dtsb-titleRow"
      }, p.defaults = {
        columns: !0,
        conditions: {
          date: a.dateConditions,
          html: a.stringConditions,
          "html-num": a.numConditions,
          "html-num-fmt": a.numFmtConditions,
          luxon: a.luxonDateConditions,
          moment: a.momentDateConditions,
          num: a.numConditions,
          "num-fmt": a.numFmtConditions,
          string: a.stringConditions
        },
        depthLimit: !1,
        enterSearch: !1,
        filterChanged: void 0,
        greyscale: !1,
        liveSearch: !0,
        i18n: {
          add: "Add Condition",
          button: {
            0: "Search Builder",
            _: "Search Builder (%d)"
          },
          clearAll: "Clear All",
          condition: "Condition",
          conditions: {
            array: {
              contains: "Contains",
              empty: "Empty",
              equals: "Equals",
              not: "Not",
              notEmpty: "Not Empty",
              without: "Without"
            },
            date: {
              after: "After",
              before: "Before",
              between: "Between",
              empty: "Empty",
              equals: "Equals",
              not: "Not",
              notBetween: "Not Between",
              notEmpty: "Not Empty"
            },
            // eslint-disable-next-line id-blacklist
            number: {
              between: "Between",
              empty: "Empty",
              equals: "Equals",
              gt: "Greater Than",
              gte: "Greater Than Equal To",
              lt: "Less Than",
              lte: "Less Than Equal To",
              not: "Not",
              notBetween: "Not Between",
              notEmpty: "Not Empty"
            },
            // eslint-disable-next-line id-blacklist
            string: {
              contains: "Contains",
              empty: "Empty",
              endsWith: "Ends With",
              equals: "Equals",
              not: "Not",
              notContains: "Does Not Contain",
              notEmpty: "Not Empty",
              notEndsWith: "Does Not End With",
              notStartsWith: "Does Not Start With",
              startsWith: "Starts With"
            }
          },
          data: "Data",
          delete: "&times",
          deleteTitle: "Delete filtering rule",
          left: "<",
          leftTitle: "Outdent criteria",
          logicAnd: "And",
          logicOr: "Or",
          right: ">",
          rightTitle: "Indent criteria",
          search: "Search",
          title: {
            0: "Custom Search Builder",
            _: "Custom Search Builder (%d)"
          },
          value: "Value",
          valueJoiner: "and"
        },
        logic: "AND",
        orthogonal: {
          display: "display",
          search: "filter"
        },
        preDefined: !1
      }, p;
    }()
  );
  /*! SearchBuilder 1.8.4
   * ©SpryMedia Ltd - datatables.net/license/mit
   */
  x(mn), u(mn), i(mn);
  var T = mn.fn.dataTable;
  k.SearchBuilder = _, T.SearchBuilder = _, k.Group = v, T.Group = v, k.Criteria = a, T.Criteria = a;
  var N = k.Api.register;
  k.ext.searchBuilder = {
    conditions: {}
  }, k.ext.buttons.searchBuilder = {
    action: function(p, l, d, y) {
      this.popover(y._searchBuilder.getNode(), {
        align: "container",
        span: "container"
      });
      var E = y._searchBuilder.s.topGroup;
      E !== void 0 && E.dom.container.trigger("dtsb-redrawContents-noDraw"), E.s.criteria.length === 0 && mn("." + mn.fn.dataTable.Group.classes.add.replace(/ /g, ".")).click();
    },
    config: {},
    init: function(p, l, d) {
      var y = this, E = new k.SearchBuilder(p, d.config);
      p.on("draw", function() {
        var O = E.s.topGroup ? E.s.topGroup.count() : 0;
        y.text(p.i18n("searchBuilder.button", E.c.i18n.button, O));
      }), y.text(d.text || p.i18n("searchBuilder.button", E.c.i18n.button, 0)), d._searchBuilder = E;
    },
    text: null
  }, N("searchBuilder.getDetails()", function(p) {
    p === void 0 && (p = !1);
    var l = this.context[0];
    return l._searchBuilder ? l._searchBuilder.getDetails(p) : null;
  }), N("searchBuilder.rebuild()", function(p, l) {
    l === void 0 && (l = !0);
    var d = this.context[0];
    return d._searchBuilder === void 0 ? null : (d._searchBuilder.rebuild(p, l), this);
  }), N("searchBuilder.container()", function() {
    var p = this.context[0];
    return p._searchBuilder ? p._searchBuilder.getNode() : null;
  });
  function D(p, l) {
    var d = new k.Api(p), y = l || d.init().searchBuilder || k.defaults.searchBuilder, E = new _(d, y), O = E.getNode();
    return O;
  }
  mn(document).on("preInit.dt.dtsp", function(p, l) {
    p.namespace === "dt" && (l.oInit.searchBuilder || k.defaults.searchBuilder) && (l._searchBuilder || D(l));
  }), k.ext.feature.push({
    cFeature: "Q",
    fnInit: D
  }), k.feature && k.feature.register("searchBuilder", D);
})();
/*! Bootstrap 5 ui integration for DataTables' SearchBuilder
 * © SpryMedia Ltd - datatables.net/license
 */
let Ra = Me;
Ra.extend(!0, k.SearchBuilder.classes, {
  clearAll: "btn btn-secondary dtsb-clearAll"
});
Ra.extend(!0, k.Group.classes, {
  add: "btn btn-secondary dtsb-add",
  clearGroup: "btn btn-secondary dtsb-clearGroup",
  logic: "btn btn-secondary dtsb-logic",
  search: "btn btn-secondary dtsb-search"
});
Ra.extend(!0, k.Criteria.classes, {
  condition: "form-select dtsb-condition",
  data: "dtsb-data form-select",
  delete: "btn btn-secondary dtsb-delete",
  input: "form-control dtsb-input",
  left: "btn btn-secondary dtsb-left",
  right: "btn btn-secondary dtsb-right",
  select: "form-select",
  value: "dtsb-value"
});
/*! RowGroup 1.6.0
 * © SpryMedia Ltd - datatables.net/license
 */
let lt = Me;
var ln = function(e, t) {
  if (!k.versionCheck || !k.versionCheck("2"))
    throw new Error("RowGroup requires DataTables 2 or newer");
  this.c = lt.extend(!0, {}, k.defaults.rowGroup, ln.defaults, t), this.s = {
    dt: new k.Api(e)
  }, this.dom = {};
  var n = this.s.dt.settings()[0], r = n.rowGroup;
  if (r)
    return r;
  n.rowGroup = this, this._constructor();
};
lt.extend(ln.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * API methods for DataTables API interface
   */
  /**
   * Get/set the grouping data source - need to call draw after this is
   * executed as a setter
   * @returns string~RowGroup
   */
  dataSrc: function(e) {
    if (e === void 0)
      return this.c.dataSrc;
    var t = this.s.dt;
    return this.c.dataSrc = e, lt(t.table().node()).triggerHandler("rowgroup-datasrc.dt", [t, e]), this;
  },
  /**
   * Disable - need to call draw after this is executed
   * @returns RowGroup
   */
  disable: function() {
    return this.c.enable = !1, this;
  },
  /**
   * Enable - need to call draw after this is executed
   * @returns RowGroup
   */
  enable: function(e) {
    return e === !1 ? this.disable() : (this.c.enable = !0, this);
  },
  /**
   * Get enabled flag
   * @returns boolean
   */
  enabled: function() {
    return this.c.enable;
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  _constructor: function() {
    var e = this, t = this.s.dt, n = t.settings()[0], r = lt("div.dt-scroll-body", t.table().container());
    t.on("draw.dtrg", function(a, o) {
      e.c.enable && n === o && (e._draw(), i && r.scrollTop() && (r.scrollTop(i), i = null));
    }), t.on("column-visibility.dt.dtrg responsive-resize.dt.dtrg", function() {
      e._adjustColspan();
    }), t.on("destroy", function() {
      t.off(".dtrg");
    });
    var i = null;
    r.length && t.on("preDraw", function() {
      i = r.scrollTop();
    });
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Adjust column span when column visibility changes
   * @private
   */
  _adjustColspan: function() {
    let e = lt("tr." + this.c.className, this.s.dt.table().body()).find("th:visible, td:visible");
    e.length === 1 && e.attr("colspan", this._colspan());
  },
  /**
   * Get the number of columns that a grouping row should span
   * @private
   */
  _colspan: function() {
    return this.s.dt.columns().visible().reduce(function(e, t) {
      return e + t;
    }, 0);
  },
  /**
   * Update function that is called whenever we need to draw the grouping rows.
   * This is basically a bootstrap for the self iterative _group and _groupDisplay
   * methods
   * @private
   */
  _draw: function() {
    var e = this.s.dt;
    if (!(this.c.dataSrc === null || Array.isArray(this.c.dataSrc) && this.c.dataSrc.length === 0)) {
      var t = this._group(0, e.rows({ page: "current" }).indexes());
      this._groupDisplay(0, t);
    }
  },
  /**
   * Get the grouping information from a data set (index) of rows
   * @param {number} level Nesting level
   * @param {DataTables.Api} rows API of the rows to consider for this group
   * @returns {object[]} Nested grouping information - it is structured like this:
   *	{
   *		dataPoint: 'Edinburgh',
   *		rows: [ 1,2,3,4,5,6,7 ],
   *		children: [ {
   *			dataPoint: 'developer'
   *			rows: [ 1, 2, 3 ]
   *		},
   *		{
   *			dataPoint: 'support',
   *			rows: [ 4, 5, 6, 7 ]
   *		} ]
   *	}
   * @private
   */
  _group: function(e, t) {
    var n = Array.isArray(this.c.dataSrc) ? this.c.dataSrc : [this.c.dataSrc], r = k.util.get(n[e]), i = this.s.dt, a, o, u, v, b = [], m = this;
    for (u = 0, v = t.length; u < v; u++) {
      var x = t[u], _ = i.row(x).data();
      a = r(_, e), a == null && (a = m.c.emptyDataGroup), (o === void 0 || a !== o) && (b.push({
        dataPoint: a,
        rows: []
      }), o = a), b[b.length - 1].rows.push(x);
    }
    if (n[e + 1] !== void 0)
      for (u = 0, v = b.length; u < v; u++)
        b[u].children = this._group(e + 1, b[u].rows);
    return b;
  },
  /**
   * Row group display - insert the rows into the document
   * @param {number} level Nesting level
   * @param {object[]} groups Takes the nested array from `_group`
   * @private
   */
  _groupDisplay: function(e, t) {
    for (var n = this.s.dt, r, i = 0, a = t.length; i < a; i++) {
      var o = t[i], u = o.dataPoint, v, b = o.rows;
      this.c.startRender && (r = this.c.startRender.call(this, n.rows(b), u, e), v = this._rowWrap(r, this.c.startClassName, e), v && v.insertBefore(n.row(b[0]).node())), this.c.endRender && (r = this.c.endRender.call(this, n.rows(b), u, e), v = this._rowWrap(r, this.c.endClassName, e), v && v.insertAfter(n.row(b[b.length - 1]).node())), o.children && this._groupDisplay(e + 1, o.children);
    }
  },
  /**
   * Take a rendered value from an end user and make it suitable for display
   * as a row, by wrapping it in a row, or detecting that it is a row.
   * @param {node|jQuery|string} display Display value
   * @param {string} className Class to add to the row
   * @param {array} group
   * @param {number} group level
   * @private
   */
  _rowWrap: function(e, t, n) {
    var r;
    return (e === null || e === "") && (e = this.c.emptyDataGroup), e == null ? null : (typeof e == "object" && e.nodeName && e.nodeName.toLowerCase() === "tr" ? r = lt(e) : e instanceof lt && e.length && e[0].nodeName.toLowerCase() === "tr" ? r = e : r = lt("<tr/>").append(
      lt("<th/>").attr("colspan", this._colspan()).attr("scope", "row").append(e)
    ), r.addClass(this.c.className).addClass(t).addClass("dtrg-level-" + n));
  }
});
ln.defaults = {
  /**
   * Class to apply to grouping rows - applied to both the start and
   * end grouping rows.
   * @type string
   */
  className: "dtrg-group",
  /**
   * Data property from which to read the grouping information
   * @type string|integer|array
   */
  dataSrc: 0,
  /**
   * Text to show if no data is found for a group
   * @type string
   */
  emptyDataGroup: "No group",
  /**
   * Initial enablement state
   * @boolean
   */
  enable: !0,
  /**
   * Class name to give to the end grouping row
   * @type string
   */
  endClassName: "dtrg-end",
  /**
   * End grouping label function
   * @function
   */
  endRender: null,
  /**
   * Class name to give to the start grouping row
   * @type string
   */
  startClassName: "dtrg-start",
  /**
   * Start grouping label function
   * @function
   */
  startRender: function(e, t) {
    return t;
  }
};
ln.version = "1.6.0";
lt.fn.dataTable.RowGroup = ln;
lt.fn.DataTable.RowGroup = ln;
k.Api.register("rowGroup()", function() {
  return this;
});
k.Api.register("rowGroup().disable()", function() {
  return this.iterator("table", function(e) {
    e.rowGroup && e.rowGroup.enable(!1);
  });
});
k.Api.register("rowGroup().enable()", function(e) {
  return this.iterator("table", function(t) {
    t.rowGroup && t.rowGroup.enable(e === void 0 ? !0 : e);
  });
});
k.Api.register("rowGroup().enabled()", function() {
  var e = this.context;
  return e.length && e[0].rowGroup ? e[0].rowGroup.enabled() : !1;
});
k.Api.register("rowGroup().dataSrc()", function(e) {
  if (e === void 0) {
    let t = this.context[0].rowGroup;
    return t ? t.dataSrc() : [];
  }
  return this.iterator("table", function(t) {
    t.rowGroup || new ln(this.context[0]), t.rowGroup.dataSrc(e);
  });
});
lt(document).on("preInit.dt.dtrg", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = t.oInit.rowGroup, i = k.defaults.rowGroup;
    if (r || i) {
      var a = lt.extend({}, i, r);
      r !== !1 && new ln(t, a);
    }
  }
});
/*! RowReorder 1.5.1
 * © SpryMedia Ltd - datatables.net/license
 */
let de = Me;
var En = function(e, t) {
  if (!k.versionCheck || !k.versionCheck("1.11"))
    throw "DataTables RowReorder requires DataTables 1.11 or newer";
  this.c = de.extend(!0, {}, k.defaults.rowReorder, En.defaults, t), this.s = {
    /** @type {integer} Scroll body top cache */
    bodyTop: null,
    /** @type {DataTable.Api} DataTables' API instance */
    dt: new k.Api(e),
    /** @type {function} Data fetch function */
    getDataFn: k.util.get(this.c.dataSrc),
    /** @type {array} Pixel positions for row insertion calculation */
    middles: null,
    /** @type {Object} Cached dimension information for use in the mouse move event handler */
    scroll: {},
    /** @type {integer} Interval object used for smooth scrolling */
    scrollInterval: null,
    /** @type {function} Data set function */
    setDataFn: k.util.set(this.c.dataSrc),
    /** @type {Object} Mouse down information */
    start: {
      top: 0,
      left: 0,
      offsetTop: 0,
      offsetLeft: 0,
      nodes: [],
      rowIndex: 0
    },
    /** @type {integer} Window height cached value */
    windowHeight: 0,
    /** @type {integer} Document outer height cached value */
    documentOuterHeight: 0,
    /** @type {integer} DOM clone outer height cached value */
    domCloneOuterHeight: 0,
    /** @type {integer} Flag used for signing if the drop is enabled or not */
    dropAllowed: !0
  }, this.dom = {
    /** @type {jQuery} Cloned row being moved around */
    clone: null,
    cloneParent: null,
    /** @type {jQuery} DataTables scrolling container */
    dtScroll: de("div.dataTables_scrollBody, div.dt-scroll-body", this.s.dt.table().container())
  };
  var n = this.s.dt.settings()[0], r = n.rowreorder;
  if (r)
    return r;
  this.dom.dtScroll.length || (this.dom.dtScroll = de(this.s.dt.table().container(), "tbody")), n.rowreorder = this, this._constructor();
};
de.extend(En.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * Initialise the RowReorder instance
   *
   * @private
   */
  _constructor: function() {
    var e = this, t = this.s.dt, n = de(t.table().node());
    n.css("position") === "static" && n.css("position", "relative"), de(t.table().container()).on(
      "mousedown.rowReorder touchstart.rowReorder",
      this.c.selector,
      function(r) {
        if (e.c.enable) {
          if (de(r.target).is(e.c.excludedChildren))
            return !0;
          var i = de(this).closest("tr"), a = t.row(i);
          if (a.any())
            return e._emitEvent("pre-row-reorder", {
              node: a.node(),
              index: a.index()
            }), e._mouseDown(r, i), !1;
        }
      }
    ), t.on("destroy.rowReorder", function() {
      de(t.table().container()).off(".rowReorder"), t.off(".rowReorder");
    }), this._keyup = this._keyup.bind(this);
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Cache the measurements that RowReorder needs in the mouse move handler
   * to attempt to speed things up, rather than reading from the DOM.
   *
   * @private
   */
  _cachePositions: function() {
    var e = this.s.dt, t = de(e.table().node()).find("thead").outerHeight(), n = de.uniqueSort(e.rows({ page: "current" }).nodes().toArray()), r = de.map(n, function(i, a) {
      var o = de(i).position().top - t;
      return (o + o + de(i).outerHeight()) / 2;
    });
    this.s.middles = r, this.s.bodyTop = de(e.table().body()).offset().top, this.s.windowHeight = de(window).height(), this.s.documentOuterHeight = de(document).outerHeight(), this.s.bodyArea = this._calcBodyArea();
  },
  /**
   * Clone a row so it can be floated around the screen
   *
   * @param  {jQuery} target Node to be cloned
   * @private
   */
  _clone: function(e) {
    var t = this.s.dt, n = de(t.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(e.clone(!1)), r = e.outerWidth(), i = e.outerHeight(), a = de(de(this.s.dt.table().node()).parent()), o = a.width(), u = a.scrollLeft(), v = e.children().map(function() {
      return de(this).width();
    });
    n.width(r).height(i).find("tr").children().each(function(m) {
      this.style.width = v[m] + "px";
    });
    var b = de("<div>").addClass("dt-rowReorder-float-parent").width(o).append(n).appendTo("body").scrollLeft(u);
    this.dom.clone = n, this.dom.cloneParent = b, this.s.domCloneOuterHeight = n.outerHeight();
  },
  /**
   * Update the cloned item's position in the document
   *
   * @param  {object} e Event giving the mouse's position
   * @private
   */
  _clonePosition: function(e) {
    var t = this.s.start, n = this._eventToPage(e, "Y") - t.top, r = this._eventToPage(e, "X") - t.left, i = this.c.snapX, a, o = n + t.offsetTop;
    i === !0 ? a = t.offsetLeft : typeof i == "number" ? a = t.offsetLeft + i : a = r + t.offsetLeft + this.dom.cloneParent.scrollLeft(), o < 0 ? o = 0 : o + this.s.domCloneOuterHeight > this.s.documentOuterHeight && (o = this.s.documentOuterHeight - this.s.domCloneOuterHeight), this.dom.cloneParent.css({
      top: o,
      left: a
    });
  },
  /**
   * Emit an event on the DataTable for listeners
   *
   * @param  {string} name Event name
   * @param  {array} args Event arguments
   * @private
   */
  _emitEvent: function(e, t) {
    var n;
    return this.s.dt.iterator("table", function(r, i) {
      var a = de(r.nTable).triggerHandler(e + ".dt", t);
      a !== void 0 && (n = a);
    }), n;
  },
  /**
   * Get pageX/Y position from an event, regardless of if it is a mouse or
   * touch event.
   *
   * @param  {object} e Event
   * @param  {string} pos X or Y (must be a capital)
   * @private
   */
  _eventToPage: function(e, t) {
    return e.type.indexOf("touch") !== -1 ? e.originalEvent.touches[0]["page" + t] : e["page" + t];
  },
  /**
   * Mouse down event handler. Read initial positions and add event handlers
   * for the move.
   *
   * @param  {object} e      Mouse event
   * @param  {jQuery} target TR element that is to be moved
   * @private
   */
  _mouseDown: function(e, t) {
    var n = this, r = this.s.dt, i = this.s.start, a = this.c.cancelable, o = t.offset();
    i.top = this._eventToPage(e, "Y"), i.left = this._eventToPage(e, "X"), i.offsetTop = o.top, i.offsetLeft = o.left, i.nodes = de.uniqueSort(r.rows({ page: "current" }).nodes().toArray()), this._cachePositions(), this._clone(t), this._clonePosition(e);
    var u = this._eventToPage(e, "Y") - this.s.bodyTop;
    i.rowIndex = this._calcRowIndexByPos(u), this.dom.target = t, t.addClass("dt-rowReorder-moving"), de(document).on("mouseup.rowReorder touchend.rowReorder", function(b) {
      n._mouseUp(b);
    }).on("mousemove.rowReorder touchmove.rowReorder", function(b) {
      n._mouseMove(b);
    }), de(window).width() === de(document).width() && de(document.body).addClass("dt-rowReorder-noOverflow");
    var v = this.dom.dtScroll;
    this.s.scroll = {
      windowHeight: de(window).height(),
      windowWidth: de(window).width(),
      dtTop: v.length ? v.offset().top : null,
      dtLeft: v.length ? v.offset().left : null,
      dtHeight: v.length ? v.outerHeight() : null,
      dtWidth: v.length ? v.outerWidth() : null
    }, a && de(document).on("keyup", this._keyup);
  },
  /**
   * Mouse move event handler - move the cloned row and shuffle the table's
   * rows if required.
   *
   * @param  {object} e Mouse event
   * @private
   */
  _mouseMove: function(e) {
    this._clonePosition(e);
    var t = this.s.start, n = this.c.cancelable;
    if (n) {
      var r = this.s.bodyArea, i = this._calcCloneParentArea();
      this.s.dropAllowed = this._rectanglesIntersect(r, i), de(this.dom.cloneParent).toggleClass("drop-not-allowed", !this.s.dropAllowed);
    }
    for (var a = this._eventToPage(e, "Y") - this.s.bodyTop, o = this.s.middles, u = null, v = 0, b = o.length; v < b; v++)
      if (a < o[v]) {
        u = v;
        break;
      }
    u === null && (u = o.length), n && (this.s.dropAllowed || (u = t.rowIndex > this.s.lastInsert ? t.rowIndex + 1 : t.rowIndex), this.dom.target.toggleClass("dt-rowReorder-moving", this.s.dropAllowed)), this._moveTargetIntoPosition(u), this._shiftScroll(e);
  },
  /**
   * Mouse up event handler - release the event handlers and perform the
   * table updates
   *
   * @param  {object} e Mouse event
   * @private
   */
  _mouseUp: function(e) {
    var t = this, n = this.s.dt, r, i, a = this.c.dataSrc, o = this.s.dropAllowed;
    if (!o) {
      t._cancel();
      return;
    }
    var u = this.s.start.nodes, v = de.uniqueSort(n.rows({ page: "current" }).nodes().toArray()), b = {}, m = [], x = [], _ = this.s.getDataFn, T = this.s.setDataFn;
    for (r = 0, i = u.length; r < i; r++)
      if (u[r] !== v[r]) {
        var N = n.row(v[r]).id(), D = n.row(v[r]).data(), p = n.row(u[r]).data();
        N && (b[N] = _(p)), m.push({
          node: v[r],
          oldData: _(D),
          newData: _(p),
          newPosition: r,
          oldPosition: de.inArray(v[r], u)
        }), x.push(v[r]);
      }
    var l = [
      m,
      {
        dataSrc: a,
        nodes: x,
        values: b,
        triggerRow: n.row(this.dom.target),
        originalEvent: e
      }
    ], d = this._emitEvent("row-reorder", l);
    if (d === !1) {
      t._cancel();
      return;
    }
    this._cleanupDragging();
    var y = function() {
      if (t.c.update) {
        for (r = 0, i = m.length; r < i; r++) {
          var E = n.row(m[r].node), O = E.data();
          T(O, m[r].newData), n.columns().every(function() {
            this.dataSrc() === a && n.cell(m[r].node, this.index()).invalidate("data");
          });
        }
        t._emitEvent("row-reordered", l), n.draw(!1);
      }
    };
    this.c.editor ? (this.c.enable = !1, this.c.editor.edit(x, !1, de.extend({ submit: "changed" }, this.c.formOptions)).multiSet(a, b).one("preSubmitCancelled.rowReorder", function() {
      t.c.enable = !0, t.c.editor.off(".rowReorder"), n.draw(!1);
    }).one("submitUnsuccessful.rowReorder", function() {
      n.draw(!1);
    }).one("submitSuccess.rowReorder", function() {
      y();
    }).one("submitComplete", function() {
      t.c.enable = !0, t.c.editor.off(".rowReorder");
    }).submit()) : y();
  },
  /**
   * Moves the current target into the given position within the table
   * and caches the new positions
   *
   * @param  {integer} insertPoint Position
   * @private
   */
  _moveTargetIntoPosition: function(e) {
    var t = this.s.dt;
    if (this.s.lastInsert === null || this.s.lastInsert !== e) {
      var n = de.uniqueSort(t.rows({ page: "current" }).nodes().toArray()), r = "";
      e > this.s.lastInsert ? (this.dom.target.insertAfter(n[e - 1]), r = "after") : (this.dom.target.insertBefore(n[e]), r = "before"), this._cachePositions(), this.s.lastInsert = e, this._emitEvent("row-reorder-changed", {
        insertPlacement: r,
        insertPoint: e,
        row: t.row(this.dom.target)
      });
    }
  },
  /**
   * Removes the cloned elements, event handlers, scrolling intervals, etc
   *
   * @private
   */
  _cleanupDragging: function() {
    var e = this.c.cancelable;
    this.dom.clone.remove(), this.dom.cloneParent.remove(), this.dom.clone = null, this.dom.cloneParent = null, this.dom.target.removeClass("dt-rowReorder-moving"), de(document).off(".rowReorder"), de(document.body).removeClass("dt-rowReorder-noOverflow"), clearInterval(this.s.scrollInterval), this.s.scrollInterval = null, e && de(document).off("keyup", this._keyup);
  },
  /**
   * Move the window and DataTables scrolling during a drag to scroll new
   * content into view.
   *
   * This matches the `_shiftScroll` method used in AutoFill, but only
   * horizontal scrolling is considered here.
   *
   * @param  {object} e Mouse move event object
   * @private
   */
  _shiftScroll: function(e) {
    var t = this, n = this.s.scroll, r = !1, i = 5, a = 65, o = e.pageY - document.body.scrollTop, u, v;
    o < de(window).scrollTop() + a ? u = i * -1 : o > n.windowHeight + de(window).scrollTop() - a && (u = i), n.dtTop !== null && e.pageY < n.dtTop + a ? v = i * -1 : n.dtTop !== null && e.pageY > n.dtTop + n.dtHeight - a && (v = i), u || v ? (n.windowVert = u, n.dtVert = v, r = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), this.s.scrollInterval = null), !this.s.scrollInterval && r && (this.s.scrollInterval = setInterval(function() {
      if (n.windowVert) {
        var b = de(document).scrollTop();
        if (de(document).scrollTop(b + n.windowVert), b !== de(document).scrollTop()) {
          var m = parseFloat(t.dom.cloneParent.css("top"));
          t.dom.cloneParent.css("top", m + n.windowVert);
        }
      }
      if (n.dtVert) {
        var x = t.dom.dtScroll[0];
        n.dtVert && (x.scrollTop += n.dtVert);
      }
    }, 20));
  },
  /**
   * Calculates the current area of the table body and returns it as a rectangle
   *
   * @private
   */
  _calcBodyArea: function(e) {
    var t = this.s.dt, n = de(t.table().body()).offset(), r = {
      left: n.left,
      top: n.top,
      right: n.left + de(t.table().body()).width(),
      bottom: n.top + de(t.table().body()).height()
    };
    return r;
  },
  /**
   * Calculates the current area of the cloned parent element and returns it as a rectangle
   *
   * @private
   */
  _calcCloneParentArea: function(e) {
    var t = de(this.dom.cloneParent).offset(), n = {
      left: t.left,
      top: t.top,
      right: t.left + de(this.dom.cloneParent).width(),
      bottom: t.top + de(this.dom.cloneParent).height()
    };
    return n;
  },
  /**
   * Returns whether the given reactangles intersect or not
   *
   * @private
   */
  _rectanglesIntersect: function(e, t) {
    var n = e.left >= t.right || t.left >= e.right || e.top >= t.bottom || t.top >= e.bottom;
    return !n;
  },
  /**
   * Calculates the index of the row which lays under the given Y position or
   * returns -1 if no such row
   *
   * @param  {integer} insertPoint Position
   * @private
   */
  _calcRowIndexByPos: function(e) {
    var t = this.s.dt, n = de.uniqueSort(t.rows({ page: "current" }).nodes().toArray()), r = -1, i = de(t.table().node()).find("thead").outerHeight();
    return de.each(n, function(a, o) {
      var u = de(o).position().top - i, v = u + de(o).outerHeight();
      e >= u && e <= v && (r = a);
    }), r;
  },
  /**
   * Handles key up events and cancels the dragging if ESC key is pressed
   *
   * @param  {object} e Mouse move event object
   * @private
   */
  _keyup: function(e) {
    var t = this.c.cancelable;
    t && e.which === 27 && (e.preventDefault(), this._cancel());
  },
  /**
   * Cancels the dragging, moves target back into its original position
   * and cleans up the dragging
   *
   * @param  {object} e Mouse move event object
   * @private
   */
  _cancel: function() {
    var e = this.s.start, t = e.rowIndex > this.s.lastInsert ? e.rowIndex + 1 : e.rowIndex;
    this._moveTargetIntoPosition(t), this._cleanupDragging(), this._emitEvent("row-reorder-canceled", [this.s.start.rowIndex]);
  }
});
En.defaults = {
  /**
   * Data point in the host row's data source object for where to get and set
   * the data to reorder. This will normally also be the sorting column.
   *
   * @type {Number}
   */
  dataSrc: 0,
  /**
   * Editor instance that will be used to perform the update
   *
   * @type {DataTable.Editor}
   */
  editor: null,
  /**
   * Enable / disable RowReorder's user interaction
   * @type {Boolean}
   */
  enable: !0,
  /**
   * Form options to pass to Editor when submitting a change in the row order.
   * See the Editor `from-options` object for details of the options
   * available.
   * @type {Object}
   */
  formOptions: {},
  /**
   * Drag handle selector. This defines the element that when dragged will
   * reorder a row.
   *
   * @type {String}
   */
  selector: "td:first-child",
  /**
   * Optionally lock the dragged row's x-position. This can be `true` to
   * fix the position match the host table's, `false` to allow free movement
   * of the row, or a number to define an offset from the host table.
   *
   * @type {Boolean|number}
   */
  snapX: !1,
  /**
   * Update the table's data on drop
   *
   * @type {Boolean}
   */
  update: !0,
  /**
   * Selector for children of the drag handle selector that mouseDown events
   * will be passed through to and drag will not activate
   *
   * @type {String}
   */
  excludedChildren: "a",
  /**
   * Enable / disable the canceling of the drag & drop interaction
   *
   * @type {Boolean}
   */
  cancelable: !1
};
var ka = de.fn.dataTable.Api;
ka.register("rowReorder()", function() {
  return this;
});
ka.register("rowReorder.enable()", function(e) {
  return e === void 0 && (e = !0), this.iterator("table", function(t) {
    t.rowreorder && (t.rowreorder.c.enable = e);
  });
});
ka.register("rowReorder.disable()", function() {
  return this.iterator("table", function(e) {
    e.rowreorder && (e.rowreorder.c.enable = !1);
  });
});
En.version = "1.5.1";
de.fn.dataTable.RowReorder = En;
de.fn.DataTable.RowReorder = En;
de(document).on("init.dt.dtr", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = t.oInit.rowReorder, i = k.defaults.rowReorder;
    if (r || i) {
      var a = de.extend({}, r, i);
      r !== !1 && new En(t, a);
    }
  }
});
/*! FixedHeader 4.0.6
 * © SpryMedia Ltd - datatables.net/license
 */
let fe = Me;
var nh = 0, rn = function(e, t) {
  if (!k.versionCheck("2"))
    throw "Warning: FixedHeader requires DataTables 2 or newer";
  if (!(this instanceof rn))
    throw "FixedHeader must be initialised with the 'new' keyword.";
  t === !0 && (t = {}), e = new k.Api(e), this.c = fe.extend(!0, {}, rn.defaults, t), this.s = {
    dt: e,
    position: {
      theadTop: 0,
      tbodyTop: 0,
      tfootTop: 0,
      tfootBottom: 0,
      width: 0,
      left: 0,
      tfootHeight: 0,
      theadHeight: 0,
      windowHeight: fe(window).height(),
      visible: !0
    },
    headerMode: null,
    footerMode: null,
    autoWidth: e.settings()[0].oFeatures.bAutoWidth,
    namespace: ".dtfc" + nh++,
    scrollLeft: {
      header: -1,
      footer: -1
    },
    enable: !0,
    autoDisable: !1
  }, this.dom = {
    floatingHeader: null,
    thead: fe(e.table().header()),
    tbody: fe(e.table().body()),
    tfoot: fe(e.table().footer()),
    header: {
      host: null,
      scrollAdjust: null,
      floating: null,
      floatingParent: fe(
        '<div class="dtfh-floatingparent"><div class="dtfh-floating-limiter"><div></div></div></div>'
      ),
      limiter: null,
      placeholder: null
    },
    footer: {
      host: null,
      scrollAdjust: null,
      floating: null,
      floatingParent: fe(
        '<div class="dtfh-floatingparent"><div class="dtfh-floating-limiter"><div></div></div></div>'
      ),
      limiter: null,
      placeholder: null
    }
  };
  var n = this.dom;
  n.header.host = n.thead.parent(), n.header.limiter = n.header.floatingParent.children(), n.header.scrollAdjust = n.header.limiter.children(), n.footer.host = n.tfoot.parent(), n.footer.limiter = n.footer.floatingParent.children(), n.footer.scrollAdjust = n.footer.limiter.children();
  var r = e.settings()[0];
  if (r._fixedHeader)
    throw "FixedHeader already initialised on table " + r.nTable.id;
  r._fixedHeader = this, this._constructor();
};
fe.extend(rn.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * API methods
   */
  /**
   * Kill off FH and any events
   */
  destroy: function() {
    var e = this.dom;
    this.s.dt.off(".dtfc"), fe("body").off(".dtfc"), fe(window).off(this.s.namespace), e.header.rightBlocker && e.header.rightBlocker.remove(), e.header.leftBlocker && e.header.leftBlocker.remove(), e.footer.rightBlocker && e.footer.rightBlocker.remove(), e.footer.leftBlocker && e.footer.leftBlocker.remove(), this.c.header && this._modeChange("in-place", "header", !0), this.c.footer && e.tfoot.length && this._modeChange("in-place", "footer", !0);
  },
  /**
   * Enable / disable the fixed elements
   *
   * @param  {boolean} enable `true` to enable, `false` to disable
   */
  enable: function(e, t, n) {
    this.s.enable = e, this.s.enableType = n, (t || t === void 0) && (this._positions(), this._scroll(!0));
  },
  /**
   * Get enabled status
   */
  enabled: function() {
    return this.s.enable;
  },
  /**
   * Set header offset
   *
   * @param  {int} new value for headerOffset
   */
  headerOffset: function(e) {
    return e !== void 0 && (this.c.headerOffset = e, this.update()), this.c.headerOffset;
  },
  /**
   * Set footer offset
   *
   * @param  {int} new value for footerOffset
   */
  footerOffset: function(e) {
    return e !== void 0 && (this.c.footerOffset = e, this.update()), this.c.footerOffset;
  },
  /**
   * Recalculate the position of the fixed elements and force them into place
   */
  update: function(e) {
    var t = this.s.dt.table().node();
    !this.s.enable && !this.s.autoDisable || (fe(t).is(":visible") ? (this.s.autoDisable = !1, this.enable(!0, !1)) : (this.s.autoDisable = !0, this.enable(!1, !1)), fe(t).children("thead").length !== 0 && (this._positions(), this._scroll(e !== void 0 ? e : !0), this._widths(this.dom.header), this._widths(this.dom.footer)));
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * FixedHeader constructor - adding the required event listeners and
   * simple initialisation
   *
   * @private
   */
  _constructor: function() {
    var e = this, t = this.s.dt;
    fe(window).on("scroll" + this.s.namespace, function() {
      e._scroll();
    }).on(
      "resize" + this.s.namespace,
      k.util.throttle(function() {
        e.s.position.windowHeight = fe(window).height(), e.update();
      }, 50)
    );
    var n = fe(".fh-fixedHeader");
    !this.c.headerOffset && n.length && (this.c.headerOffset = n.outerHeight());
    var r = fe(".fh-fixedFooter");
    !this.c.footerOffset && r.length && (this.c.footerOffset = r.outerHeight()), t.on(
      "column-reorder.dt.dtfc column-visibility.dt.dtfc column-sizing.dt.dtfc responsive-display.dt.dtfc",
      function(i, a) {
        e.update();
      }
    ), fe("body").on("draw.dt.dtfc", function(i, a) {
      e.update(a !== t.settings()[0]);
    }), t.on("destroy.dtfc", function() {
      e.destroy();
    }), this._positions(), this._scroll();
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Clone a fixed item to act as a place holder for the original element
   * which is moved into a clone of the table element, and moved around the
   * document to give the fixed effect.
   *
   * @param  {string}  item  'header' or 'footer'
   * @param  {boolean} force Force the clone to happen, or allow automatic
   *   decision (reuse existing if available)
   * @private
   */
  _clone: function(e, t) {
    var n = this, r = this.s.dt, i = this.dom[e], a = e === "header" ? this.dom.thead : this.dom.tfoot;
    if (!(e === "footer" && this._scrollEnabled()))
      if (!t && i.floating)
        i.floating.removeClass(
          "fixedHeader-floating fixedHeader-locked"
        );
      else {
        i.floating && (i.placeholder !== null && i.placeholder.detach(), i.floating.detach());
        var o = fe(r.table().node()), u = fe(o.parent()), v = this._scrollEnabled();
        i.floating = fe(r.table().node().cloneNode(!1)).attr("aria-hidden", "true").css({
          top: 0,
          left: 0
        }).removeAttr("id"), i.floatingParent.css({
          width: u[0].offsetWidth,
          position: "fixed",
          left: v ? o.offset().left + u.scrollLeft() : 0
        }).css(
          e === "header" ? {
            top: this.c.headerOffset,
            bottom: ""
          } : {
            top: "",
            bottom: this.c.footerOffset
          }
        ).addClass(
          e === "footer" ? "dtfh-floatingparent-foot" : "dtfh-floatingparent-head"
        ).appendTo("body").children().eq(0), i.limiter.css({
          width: "100%",
          overflow: "hidden",
          height: "fit-content"
        }), i.scrollAdjust.append(i.floating), this._stickyPosition(i.floating, "-");
        var b = function() {
          var x = u.scrollLeft();
          n.s.scrollLeft = { footer: x, header: x }, i.limiter.scrollLeft(n.s.scrollLeft.header);
        };
        b(), u.off("scroll.dtfh").on("scroll.dtfh", b), i.scrollAdjust.css({
          width: "fit-content",
          paddingRight: n.s.dt.settings()[0].oBrowser.barWidth
        });
        let m = fe(
          e === "footer" ? "div.dtfc-bottom-blocker" : "div.dtfc-top-blocker",
          r.table().container()
        );
        return m.length && m.clone().appendTo(i.floatingParent).css({
          position: "fixed",
          right: m.width()
        }), i.placeholder = a.clone(!1), i.placeholder.find("*[id]").removeAttr("id"), fe(i.placeholder).insertAfter(
          fe(e === "header" ? "colgroup" : "tbody", i.host)
        ), i.floating.append(a), this._widths(i), b;
      }
  },
  /**
   * This method sets the sticky position of the header elements to match fixed columns
   * @param {JQuery<HTMLElement>} el
   * @param {string} sign
   */
  _stickyPosition: function(e, t) {
    if (this._scrollEnabled()) {
      var n = this, r = fe(n.s.dt.table().node()).css("direction") === "rtl";
      e.find("th").each(function() {
        if (fe(this).css("position") === "sticky") {
          var i = fe(this).css("right"), a = fe(this).css("left"), o;
          i !== "auto" && !r ? (o = +i.replace(/px/g, ""), fe(this).css("right", o > 0 ? o : 0)) : a !== "auto" && r && (o = +a.replace(/px/g, ""), fe(this).css("left", o > 0 ? o : 0));
        }
      });
    }
  },
  /**
   * Reposition the floating elements to take account of horizontal page
   * scroll
   *
   * @param  {string} item       The `header` or `footer`
   * @param  {int}    scrollLeft Document scrollLeft
   * @private
   */
  _horizontal: function(e, t) {
    var n = this.dom[e], r = this.s.scrollLeft;
    if (n.floating && r[e] !== t) {
      if (this._scrollEnabled()) {
        var i = fe(
          fe(this.s.dt.table().node()).parent()
        ).scrollLeft();
        n.floating.scrollLeft(i), n.floatingParent.scrollLeft(i);
      }
      r[e] = t;
    }
  },
  /**
   * Change from one display mode to another. Each fixed item can be in one
   * of:
   *
   * * `in-place` - In the main DataTable
   * * `in` - Floating over the DataTable
   * * `below` - (Header only) Fixed to the bottom of the table body
   * * `above` - (Footer only) Fixed to the top of the table body
   *
   * @param  {string}  mode        Mode that the item should be shown in
   * @param  {string}  item        'header' or 'footer'
   * @param  {boolean} forceChange Force a redraw of the mode, even if already
   *     in that mode.
   * @private
   */
  _modeChange: function(e, t, n) {
    var r = this.s.dt, i = this.dom[t], a = this.s.position, o = this._scrollEnabled();
    if (!(t === "footer" && o)) {
      var u = function(E) {
        i.floating[0].style.setProperty("width", E + "px", "important"), o || i.floatingParent[0].style.setProperty("width", E + "px", "important");
      }, v = this.dom[t === "footer" ? "tfoot" : "thead"], b = fe.contains(v[0], document.activeElement) ? document.activeElement : null, m = fe(fe(this.s.dt.table().node()).parent());
      if (e === "in-place")
        i.placeholder && (i.placeholder.remove(), i.placeholder = null), fe.contains(i.host[0], v[0]) || (t === "header" ? v.insertAfter(fe("colgroup", i.host)) : i.host.append(v)), i.floating && (i.floating.remove(), i.floating = null, this._stickyPosition(i.host, "+")), i.floatingParent && (i.floatingParent.find("div.dtfc-top-blocker").remove(), i.floatingParent.remove()), fe(fe(i.host.parent()).parent()).scrollLeft(
          m.scrollLeft()
        );
      else if (e === "in") {
        let E = this._clone(t, n);
        var x = m.offset(), _ = fe(document).scrollTop(), T = fe(window).height(), N = _ + T, D = o ? x.top : a.tbodyTop, p = o ? x.top + m.outerHeight() : a.tfootTop, l;
        t === "footer" ? l = D > N ? a.tfootHeight : D + a.tfootHeight - N : l = _ + this.c.headerOffset + a.theadHeight - p;
        var d = t === "header" ? "top" : "bottom", y = this.c[t + "Offset"] - (l > 0 ? l : 0);
        i.floating.addClass("fixedHeader-floating"), i.floatingParent.css(d, y).css({
          left: a.left,
          "z-index": 3
        }), u(a.width), E && E(), t === "footer" && i.floating.css("top", "");
      } else
        e === "below" ? (this._clone(t, n), i.floating.addClass("fixedHeader-locked"), i.floatingParent.css({
          position: "absolute",
          top: a.tfootTop - a.theadHeight,
          left: a.left + "px"
        }), u(a.width)) : e === "above" && (this._clone(t, n), i.floating.addClass("fixedHeader-locked"), i.floatingParent.css({
          position: "absolute",
          top: a.tbodyTop,
          left: a.left + "px"
        }), u(a.width));
      b && b !== document.activeElement && setTimeout(function() {
        b.focus();
      }, 10), this.s.scrollLeft.header = -1, this.s.scrollLeft.footer = -1, this.s[t + "Mode"] = e, r.trigger("fixedheader-mode", [e, t]);
    }
  },
  /**
   * Cache the positional information that is required for the mode
   * calculations that FixedHeader performs.
   *
   * @private
   */
  _positions: function() {
    var e = this.s.dt, t = e.table(), n = this.s.position, r = this.dom, i = fe(t.node()), a = this._scrollEnabled(), o = fe(e.table().header()), u = fe(e.table().footer()), v = r.tbody, b = i.parent();
    n.visible = i.is(":visible"), n.width = i.outerWidth(), n.left = i.offset().left, n.theadTop = o.offset().top, n.tbodyTop = a ? b.offset().top : v.offset().top, n.tbodyHeight = a ? b.outerHeight() : v.outerHeight(), n.theadHeight = o.outerHeight(), n.theadBottom = n.theadTop + n.theadHeight, n.tfootTop = n.tbodyTop + n.tbodyHeight, u.length ? (n.tfootBottom = n.tfootTop + u.outerHeight(), n.tfootHeight = u.outerHeight()) : (n.tfootBottom = n.tfootTop, n.tfootHeight = 0);
  },
  /**
   * Mode calculation - determine what mode the fixed items should be placed
   * into.
   *
   * @param  {boolean} forceChange Force a redraw of the mode, even if already
   *     in that mode.
   * @private
   */
  _scroll: function(e) {
    if (!this.s.dt.settings()[0].bDestroying) {
      var t = this._scrollEnabled(), n = fe(this.s.dt.table().node()).parent(), r = n.offset(), i = n.outerHeight(), a = fe(document).scrollLeft(), o = fe(document).scrollTop(), u = fe(window).height(), v = u + o, b = this.s.position, m, x, _ = t ? r.top : b.tbodyTop, T = t ? r.left : b.left, N = t ? r.top + i : b.tfootTop, D = t ? n.outerWidth() : b.tbodyWidth;
      if (this.c.header) {
        if (!this.s.enable)
          m = "in-place";
        else if (!b.visible || o + this.c.headerOffset + b.theadHeight <= _)
          m = "in-place";
        else if (
          // The scrolling plus the header offset plus the height of the header is lower than the top of the body
          o + this.c.headerOffset + b.theadHeight > _ && // And the scrolling at the top plus the header offset is above the bottom of the body
          o + this.c.headerOffset + b.theadHeight < N
        )
          if (m = "in", o + this.c.headerOffset + b.theadHeight > N || this.dom.header.floatingParent === void 0)
            e = !0;
          else {
            var p = this.dom.header.floatingParent.css({
              top: this.c.headerOffset,
              position: "fixed"
            }).children().eq(0);
            p.find(this.dom.header.floating).length === 0 && p.append(this.dom.header.floating);
          }
        else
          m = "below";
        (e || m !== this.s.headerMode) && this._modeChange(m, "header", e), this._horizontal("header", a);
      }
      var l = {
        offset: { top: 0, left: 0 },
        height: 0
      }, d = {
        offset: { top: 0, left: 0 },
        height: 0
      };
      if (this.c.footer && this.dom.tfoot.length && this.dom.tfoot.find("th, td").length) {
        this.s.enable ? !b.visible || b.tfootBottom + this.c.footerOffset <= v ? x = "in-place" : N + b.tfootHeight + this.c.footerOffset > v && _ + this.c.footerOffset < v ? (x = "in", e = !0) : x = "above" : x = "in-place", (e || x !== this.s.footerMode) && this._modeChange(x, "footer", e), this._horizontal("footer", a);
        var y = function(H) {
          return {
            offset: H.offset(),
            height: H.outerHeight()
          };
        };
        if (l = this.dom.header.floating ? y(this.dom.header.floating) : y(this.dom.thead), d = this.dom.footer.floating ? y(this.dom.footer.floating) : y(this.dom.tfoot), t && d.offset.top > o) {
          var E = o - r.top, O = v + // If the gap between the top of the scrollbody and the window is more than
          //  the height of the header then the top of the table is still visible so add that gap
          // Doing this has effectively calculated the height from the top of the table to the bottom of the current page
          (E > -l.height ? E : 0) - // Take from that
          // The top of the header plus
          (l.offset.top + // The header height if the standard header is present
          (E < -l.height ? l.height : 0) + // And the height of the footer
          d.height);
          O < 0 && (O = 0), n.outerHeight(O), Math.round(n.outerHeight()) >= Math.round(O) ? fe(this.dom.tfoot.parent()).addClass("fixedHeader-floating") : fe(this.dom.tfoot.parent()).removeClass(
            "fixedHeader-floating"
          );
        }
      }
      if (this.dom.header.floating && this.dom.header.floatingParent.css("left", T - a), this.dom.footer.floating && this.dom.footer.floatingParent.css("left", T - a), this.s.dt.settings()[0]._fixedColumns !== void 0) {
        var f = function(H, Y, q) {
          if (q === void 0) {
            var K = fe(
              "div.dtfc-" + H + "-" + Y + "-blocker"
            );
            q = K.length === 0 ? null : K.clone().css("z-index", 1);
          }
          return q !== null && (m === "in" || m === "below" ? q.appendTo("body").css({
            top: Y === "top" ? l.offset.top : d.offset.top,
            left: H === "right" ? T + D - q.width() : T
          }) : q.detach()), q;
        };
        this.dom.header.rightBlocker = f(
          "right",
          "top",
          this.dom.header.rightBlocker
        ), this.dom.header.leftBlocker = f(
          "left",
          "top",
          this.dom.header.leftBlocker
        ), this.dom.footer.rightBlocker = f(
          "right",
          "bottom",
          this.dom.footer.rightBlocker
        ), this.dom.footer.leftBlocker = f(
          "left",
          "bottom",
          this.dom.footer.leftBlocker
        );
      }
    }
  },
  /**
   * Function to check if scrolling is enabled on the table or not
   * @returns Boolean value indicating if scrolling on the table is enabled or not
   */
  _scrollEnabled: function() {
    var e = this.s.dt.settings()[0].oScroll;
    return e.sY !== "" || e.sX !== "";
  },
  /**
   * Realign columns by using the colgroup tag and
   * checking column widths
   */
  _widths: function(e) {
    if (!(!e || !e.placeholder)) {
      var t = fe(this.s.dt.table().node()), n = fe(t.parent());
      e.floatingParent.css("width", n[0].offsetWidth), e.floating.css("width", t[0].offsetWidth), fe("colgroup", e.floating).remove();
      for (var r = e.placeholder.parent().find("colgroup").clone().appendTo(e.floating).find("col"), i = this.s.dt.columns(":visible").widths(), a = 0; a < i.length; a++)
        r.eq(a).css("width", i[a]);
    }
  }
});
rn.version = "4.0.6";
rn.defaults = {
  header: !0,
  footer: !1,
  headerOffset: 0,
  footerOffset: 0
};
fe.fn.dataTable.FixedHeader = rn;
fe.fn.DataTable.FixedHeader = rn;
fe(document).on("init.dt.dtfh", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = t.oInit.fixedHeader, i = k.defaults.fixedHeader;
    if ((r || i) && !t._fixedHeader) {
      var a = fe.extend({}, i, r);
      r !== !1 && new rn(t, a);
    }
  }
});
k.Api.register("fixedHeader()", function() {
});
k.Api.register("fixedHeader.adjust()", function() {
  return this.iterator("table", function(e) {
    var t = e._fixedHeader;
    t && t.update();
  });
});
k.Api.register("fixedHeader.enable()", function(e) {
  return this.iterator("table", function(t) {
    var n = t._fixedHeader;
    e = e !== void 0 ? e : !0, n && e !== n.enabled() && n.enable(e);
  });
});
k.Api.register("fixedHeader.enabled()", function() {
  if (this.context.length) {
    var e = this.context[0]._fixedHeader;
    if (e)
      return e.enabled();
  }
  return !1;
});
k.Api.register("fixedHeader.disable()", function() {
  return this.iterator("table", function(e) {
    var t = e._fixedHeader;
    t && t.enabled() && t.enable(!1);
  });
});
fe.each(["header", "footer"], function(e, t) {
  k.Api.register("fixedHeader." + t + "Offset()", function(n) {
    var r = this.context;
    return n === void 0 ? r.length && r[0]._fixedHeader ? r[0]._fixedHeader[t + "Offset"]() : void 0 : this.iterator("table", function(i) {
      var a = i._fixedHeader;
      a && a[t + "Offset"](n);
    });
  });
});
/*! FixedColumns 5.0.5
 * © SpryMedia Ltd - datatables.net/license
 */
let Xt = Me;
(function() {
  var e, t;
  function n(o) {
    e = o, t = e.fn.dataTable;
  }
  var r = (
    /** @class */
    function() {
      function o(u, v) {
        var b = this;
        if (!t || !t.versionCheck || !t.versionCheck("2"))
          throw new Error("FixedColumns requires DataTables 2 or newer");
        var m = new t.Api(u);
        this.classes = e.extend(!0, {}, o.classes), this.c = e.extend(!0, {}, o.defaults, v), this.s = {
          dt: m,
          rtl: e(m.table().node()).css("direction") === "rtl"
        }, v && v.leftColumns !== void 0 && (v.left = v.leftColumns), v && v.left !== void 0 && (this.c[this.s.rtl ? "end" : "start"] = v.left), v && v.rightColumns !== void 0 && (v.right = v.rightColumns), v && v.right !== void 0 && (this.c[this.s.rtl ? "start" : "end"] = v.right), this.dom = {
          bottomBlocker: e("<div>").addClass(this.classes.bottomBlocker),
          topBlocker: e("<div>").addClass(this.classes.topBlocker),
          scroller: e("div.dt-scroll-body", this.s.dt.table().container())
        }, this.s.dt.settings()[0]._bInitComplete ? (this._addStyles(), this._setKeyTableListener()) : m.one("init.dt.dtfc", function() {
          b._addStyles(), b._setKeyTableListener();
        }), m.on("column-sizing.dt.dtfc column-reorder.dt.dtfc draw.dt.dtfc", function() {
          return b._addStyles();
        });
        var x = t.util.debounce(function() {
          b._addStyles();
        }, 50);
        return m.on("column-visibility.dt.dtfc", function() {
          x();
        }), this.dom.scroller.on("scroll.dtfc", function() {
          return b._scroll();
        }), this._scroll(), m.settings()[0]._fixedColumns = this, m.on("destroy", function() {
          return b._destroy();
        }), this;
      }
      return o.prototype.end = function(u) {
        return u !== void 0 ? (u >= 0 && u <= this.s.dt.columns().count() && (this.c.end = u, this._addStyles()), this) : this.c.end;
      }, o.prototype.left = function(u) {
        return this.s.rtl ? this.end(u) : this.start(u);
      }, o.prototype.right = function(u) {
        return this.s.rtl ? this.start(u) : this.end(u);
      }, o.prototype.start = function(u) {
        return u !== void 0 ? (u >= 0 && u <= this.s.dt.columns().count() && (this.c.start = u, this._addStyles()), this) : this.c.start;
      }, o.prototype._addStyles = function() {
        var u = this.s.dt, v = this, b = this.s.dt.columns(":visible").count(), m = u.table().header.structure(":visible"), x = u.table().footer.structure(":visible"), _ = u.columns(":visible").widths().toArray(), T = e(u.table().node()).closest("div.dt-scroll"), N = e(u.table().node()).closest("div.dt-scroll-body")[0], D = this.s.rtl, p = this.c.start, l = this.c.end, d = D ? l : p, y = D ? p : l, E = u.settings()[0].oBrowser.barWidth;
        if (T.length === 0)
          return this;
        N.offsetWidth === N.clientWidth && (E = 0), u.columns().every(function(q) {
          var K = u.column.index("toVisible", q), ne;
          K !== null && (K < p ? (ne = v._sum(_, K), v._fixColumn(K, ne, "start", m, x, E)) : K >= b - l ? (ne = v._sum(_, b - K - 1, !0), v._fixColumn(K, ne, "end", m, x, E)) : v._fixColumn(K, 0, "none", m, x, E));
        }), e(u.table().node()).toggleClass(v.classes.tableFixedStart, p > 0).toggleClass(v.classes.tableFixedEnd, l > 0).toggleClass(v.classes.tableFixedLeft, d > 0).toggleClass(v.classes.tableFixedRight, y > 0);
        var O = u.table().header(), f = u.table().footer(), H = e(O).outerHeight(), Y = e(f).outerHeight();
        this.dom.topBlocker.appendTo(T).css("top", 0).css(this.s.rtl ? "left" : "right", 0).css("height", H).css("width", E + 1).css("display", E ? "block" : "none"), f && this.dom.bottomBlocker.appendTo(T).css("bottom", 0).css(this.s.rtl ? "left" : "right", 0).css("height", Y).css("width", E + 1).css("display", E ? "block" : "none");
      }, o.prototype._destroy = function() {
        this.s.dt.off(".dtfc"), this.dom.scroller.off(".dtfc"), e(this.s.dt.table().node()).removeClass(this.classes.tableScrollingEnd + " " + this.classes.tableScrollingLeft + " " + this.classes.tableScrollingStart + " " + this.classes.tableScrollingRight), this.dom.bottomBlocker.remove(), this.dom.topBlocker.remove();
      }, o.prototype._fixColumn = function(u, v, b, m, x, _) {
        var T = this, N = this.s.dt, D = function(p, l) {
          if (b === "none")
            p.css("position", "").css("left", "").css("right", "").removeClass(T.classes.fixedEnd + " " + T.classes.fixedLeft + " " + T.classes.fixedRight + " " + T.classes.fixedStart);
          else {
            var d = b === "start" ? "left" : "right";
            T.s.rtl && (d = b === "start" ? "right" : "left");
            var y = v;
            b === "end" && (l === "header" || l === "footer") && (y += _), p.css("position", "sticky").css(d, y).addClass(b === "start" ? T.classes.fixedStart : T.classes.fixedEnd).addClass(d === "left" ? T.classes.fixedLeft : T.classes.fixedRight);
          }
        };
        m.forEach(function(p) {
          p[u] && D(e(p[u].cell), "header");
        }), D(N.column(u + ":visible", { page: "current" }).nodes().to$(), "body"), x && x.forEach(function(p) {
          p[u] && D(e(p[u].cell), "footer");
        });
      }, o.prototype._scroll = function() {
        var u = this.dom.scroller[0];
        if (u) {
          var v = e(this.s.dt.table().node()).add(this.s.dt.table().header().parentNode).add(this.s.dt.table().footer().parentNode).add("div.dt-scroll-headInner table", this.s.dt.table().container()).add("div.dt-scroll-footInner table", this.s.dt.table().container()), b = u.scrollLeft, m = !this.s.rtl, x = b !== 0, _ = u.scrollWidth > u.clientWidth + Math.abs(b) + 1;
          v.toggleClass(this.classes.tableScrollingStart, x), v.toggleClass(this.classes.tableScrollingEnd, _), v.toggleClass(this.classes.tableScrollingLeft, x && m || _ && !m), v.toggleClass(this.classes.tableScrollingRight, _ && m || x && !m);
        }
      }, o.prototype._setKeyTableListener = function() {
        var u = this;
        this.s.dt.on("key-focus.dt.dtfc", function(v, b, m) {
          var x, _ = e(m.node()).offset(), T = u.dom.scroller[0], N = e(e(u.s.dt.table().node()).closest("div.dt-scroll-body"));
          if (u.c.start > 0) {
            var D = e(u.s.dt.column(u.c.start - 1).header()), p = D.offset(), l = D.outerWidth();
            e(m.node()).hasClass(u.classes.fixedLeft) ? N.scrollLeft(0) : _.left < p.left + l && (x = N.scrollLeft(), N.scrollLeft(x - (p.left + l - _.left)));
          }
          if (u.c.end > 0) {
            var d = u.s.dt.columns().data().toArray().length, y = e(m.node()).outerWidth(), E = e(u.s.dt.column(d - u.c.end).header()), O = E.offset();
            e(m.node()).hasClass(u.classes.fixedRight) ? N.scrollLeft(T.scrollWidth - T.clientWidth) : _.left + y > O.left && (x = N.scrollLeft(), N.scrollLeft(x - (O.left - (_.left + y))));
          }
        });
      }, o.prototype._sum = function(u, v, b) {
        return b === void 0 && (b = !1), b && (u = u.slice().reverse()), u.slice(0, v).reduce(function(m, x) {
          return m + x;
        }, 0);
      }, o.version = "5.0.5", o.classes = {
        bottomBlocker: "dtfc-bottom-blocker",
        fixedEnd: "dtfc-fixed-end",
        fixedLeft: "dtfc-fixed-left",
        fixedRight: "dtfc-fixed-right",
        fixedStart: "dtfc-fixed-start",
        tableFixedEnd: "dtfc-has-end",
        tableFixedLeft: "dtfc-has-left",
        tableFixedRight: "dtfc-has-right",
        tableFixedStart: "dtfc-has-start",
        tableScrollingEnd: "dtfc-scrolling-end",
        tableScrollingLeft: "dtfc-scrolling-left",
        tableScrollingRight: "dtfc-scrolling-right",
        tableScrollingStart: "dtfc-scrolling-start",
        topBlocker: "dtfc-top-blocker"
      }, o.defaults = {
        i18n: {
          button: "FixedColumns"
        },
        start: 1,
        end: 0
      }, o;
    }()
  );
  /*! FixedColumns 5.0.5
   * © SpryMedia Ltd - datatables.net/license
   */
  n(Xt), Xt.fn.dataTable.FixedColumns = r, Xt.fn.DataTable.FixedColumns = r;
  var i = k.Api.register;
  i("fixedColumns()", function() {
    return this;
  }), i("fixedColumns().start()", function(o) {
    var u = this.context[0];
    return o !== void 0 ? (u._fixedColumns.start(o), this) : u._fixedColumns.start();
  }), i("fixedColumns().end()", function(o) {
    var u = this.context[0];
    return o !== void 0 ? (u._fixedColumns.end(o), this) : u._fixedColumns.end();
  }), i("fixedColumns().left()", function(o) {
    var u = this.context[0];
    return o !== void 0 ? (u._fixedColumns.left(o), this) : u._fixedColumns.left();
  }), i("fixedColumns().right()", function(o) {
    var u = this.context[0];
    return o !== void 0 ? (u._fixedColumns.right(o), this) : u._fixedColumns.right();
  }), k.ext.buttons.fixedColumns = {
    action: function(o, u, v, b) {
      Xt(v).attr("active") ? (Xt(v).removeAttr("active").removeClass("active"), u.fixedColumns().start(0), u.fixedColumns().end(0)) : (Xt(v).attr("active", "true").addClass("active"), u.fixedColumns().start(b.config.start), u.fixedColumns().end(b.config.end));
    },
    config: {
      start: 1,
      end: 0
    },
    init: function(o, u, v) {
      o.settings()[0]._fixedColumns === void 0 && a(o.settings(), v.config), Xt(u).attr("active", "true").addClass("active"), o.button(u).text(v.text || o.i18n("buttons.fixedColumns", o.settings()[0]._fixedColumns.c.i18n.button));
    },
    text: null
  };
  function a(o, u) {
    u === void 0 && (u = null);
    var v = new k.Api(o), b = u || v.init().fixedColumns || k.defaults.fixedColumns, m = new r(v, b);
    return m;
  }
  Xt(document).on("plugin-init.dt", function(o, u) {
    o.namespace === "dt" && (u.oInit.fixedColumns || k.defaults.fixedColumns) && (u._fixedColumns || a(u, null));
  });
})();
/*! ColReorder 2.1.2
 * © SpryMedia Ltd - datatables.net/license
 */
let Le = Me;
function yn(e, t, n, r) {
  var i = e.splice(t, n);
  i.unshift(0), i.unshift(r < t ? r : r - n + 1), e.splice.apply(e, i);
}
function Vc(e) {
  e.rows().invalidate("data"), e.column(0).visible(e.column(0).visible()), e.columns.adjust();
  var t = e.colReorder.order();
  e.trigger("columns-reordered", [
    {
      order: t,
      mapping: La(t)
    }
  ]);
}
function Hc(e) {
  return e.settings()[0].aoColumns.map(function(t) {
    return t._crOriginalIdx;
  });
}
function yl(e, t, n, r) {
  for (var i = [], a = 0; a < e.length; a++) {
    var o = e[a];
    yn(o, n[0], n.length, r);
    for (var u = 0; u < o.length; u++) {
      var v = o[u].cell;
      if (!i.includes(v)) {
        var b = v.getAttribute("data-dt-column").split(","), m = b.map(function(x) {
          return t[x];
        }).join(",");
        v.setAttribute("data-dt-column", m), i.push(v);
      }
    }
  }
}
function qr(e) {
  e.columns().iterator("column", function(t, n) {
    var r = t.aoColumns;
    r[n]._crOriginalIdx === void 0 && (r[n]._crOriginalIdx = n);
  });
}
function La(e) {
  for (var t = [], n = 0; n < e.length; n++)
    t[e[n]] = n;
  return t;
}
function $c(e, t, n) {
  var r, i, a = e.settings()[0], o = a.aoColumns, u = o.map(function(_, T) {
    return T;
  });
  if (!t.includes(n)) {
    yn(u, t[0], t.length, n);
    var v = La(u);
    for (yn(o, t[0], t.length, n), r = 0; r < a.aoData.length; r++) {
      var b = a.aoData[r];
      if (b) {
        var m = b.anCells;
        if (m)
          for (yn(m, t[0], t.length, n), i = 0; i < m.length; i++)
            b.nTr && m[i] && o[i].bVisible && b.nTr.appendChild(m[i]), m[i] && m[i]._DT_CellIndex && (m[i]._DT_CellIndex.column = i);
      }
    }
    for (r = 0; r < o.length; r++) {
      var x = o[r];
      for (i = 0; i < x.aDataSort.length; i++)
        x.aDataSort[i] = v[x.aDataSort[i]];
      x.idx = v[x.idx], x.bVisible && a.colgroup.append(x.colEl);
    }
    yl(a.aoHeader, v, t, n), yl(a.aoFooter, v, t, n), yn(a.aoPreSearchCols, t[0], t.length, n), Rr(v, a.aaSorting), Array.isArray(a.aaSortingFixed) ? Rr(v, a.aaSortingFixed) : (a.aaSortingFixed.pre || a.aaSortingFixed.post) && Rr(v, a.aaSortingFixed.pre), a.aLastSort.forEach(function(_) {
      _.src = v[_.src];
    }), e.trigger("column-reorder", [
      e.settings()[0],
      {
        from: t,
        to: n,
        mapping: v
      }
    ]);
  }
}
function Rr(e, t) {
  if (t)
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      typeof r == "number" ? t[n] = e[r] : Le.isPlainObject(r) && r.idx !== void 0 ? r.idx = e[r.idx] : Array.isArray(r) && typeof r[0] == "number" && (r[0] = e[r[0]]);
    }
}
function Xi(e, t, n) {
  var r = !1, i;
  if (t.length !== e.columns().count()) {
    e.error("ColReorder - column count mismatch");
    return;
  }
  n && (t = jc(e, t, "toCurrent"));
  var a = La(t);
  for (i = 0; i < a.length; i++) {
    var o = a.indexOf(i);
    i !== o && (yn(a, o, 1, i), $c(e, [o], i), r = !0);
  }
  r && Vc(e);
}
function rh(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    t.push([]);
    for (var r = 0; r < e[n].length; r++) {
      var i = e[n][r];
      if (i)
        for (var a = 0; a < i.rowspan; a++) {
          t[n + a] || (t[n + a] = []);
          for (var o = 0; o < i.colspan; o++)
            t[n + a][r + o] = i.cell;
        }
    }
  }
  return t;
}
function jc(e, t, n) {
  var r = e.colReorder.order(), i = e.settings()[0].aoColumns;
  return n === "toCurrent" || n === "fromOriginal" ? Array.isArray(t) ? t.map(function(a) {
    return r.indexOf(a);
  }) : r.indexOf(t) : Array.isArray(t) ? t.map(function(a) {
    return i[a]._crOriginalIdx;
  }) : i[t]._crOriginalIdx;
}
function Wc(e, t, n) {
  var r = e.columns().count();
  return t[0] < n && n < t[t.length] || t[0] < 0 && t[t.length - 1] > r || n < 0 && n > r ? !1 : t.includes(n) ? !0 : !(!_l(e.table().header.structure(), t, n) || !_l(e.table().footer.structure(), t, n));
}
function _l(e, t, n) {
  var r = rh(e), i;
  for (i = 0; i < r.length; i++)
    yn(r[i], t[0], t.length, n);
  for (i = 0; i < r.length; i++)
    for (var a = [], o = 0; o < r[i].length; o++) {
      var u = r[i][o];
      if (!a.includes(u))
        a.push(u);
      else if (a[a.length - 1] !== u)
        return !1;
    }
  return !0;
}
var qc = (
  /** @class */
  function() {
    function e(t, n) {
      this.dom = {
        drag: null
      }, this.c = {
        columns: null,
        enable: null,
        headerRows: null,
        order: null
      }, this.s = {
        dropZones: [],
        mouse: {
          absLeft: -1,
          offset: {
            x: -1,
            y: -1
          },
          start: {
            x: -1,
            y: -1
          },
          target: null,
          targets: []
        },
        scrollInterval: null
      };
      var r = this, i = t.settings()[0];
      if (!i._colReorder) {
        t.settings()[0]._colReorder = this, this.dt = t, Le.extend(this.c, e.defaults, n), qr(t), t.on("stateSaveParams", function(u, v, b) {
          b.colReorder = Hc(t);
        }), t.on("destroy", function() {
          t.off(".colReorder"), t.colReorder.reset();
        });
        var a = t.state.loaded(), o = this.c.order;
        a && a.colReorder && t.columns().count() === a.colReorder.length && (o = a.colReorder), o && t.ready(function() {
          Xi(t, o, !0);
        }), t.table().header.structure().forEach(function(u, v) {
          for (var b = n.headerRows, m = 0; m < u.length; m++)
            (!b || b.includes(v)) && u[m] && u[m].cell && r._addListener(u[m].cell);
        });
      }
    }
    return e.prototype.disable = function() {
      return this.c.enable = !1, this;
    }, e.prototype.enable = function(t) {
      return t === void 0 && (t = !0), t === !1 ? this.disable() : (this.c.enable = !0, this);
    }, e.prototype._addListener = function(t) {
      var n = this;
      Le(t).on("selectstart.colReorder", function() {
        return !1;
      }).on("mousedown.colReorder touchstart.colReorder", function(r) {
        if (!(r.type === "mousedown" && r.which !== 1) && n.c.enable) {
          var i = Le("button.dtcc-button_reorder", this);
          i.length && r.target !== i[0] && i.find(r.target).length === 0 || n._mouseDown(r, this);
        }
      });
    }, e.prototype._createDragNode = function() {
      var t = this.s.mouse.target, n = t.parent(), r = n.parent(), i = r.parent(), a = t.clone();
      this.dom.drag = Le(i[0].cloneNode(!1)).addClass("dtcr-cloned").append(
        Le(r[0].cloneNode(!1)).append(Le(n[0].cloneNode(!1)).append(a[0]))
        // Not sure why  it doesn't want to append a jQuery node
      ).css({
        position: "absolute",
        top: 0,
        left: 0,
        width: Le(t).outerWidth(),
        height: Le(t).outerHeight()
      }).appendTo("body");
    }, e.prototype._cursorPosition = function(t, n) {
      return t.type.indexOf("touch") !== -1 ? t.originalEvent.touches[0][n] : t[n];
    }, e.prototype._mouseDown = function(t, n) {
      for (var r = this, i = Le(t.target).closest("th, td"), a = i.offset(), o = this.dt.columns(this.c.columns).indexes().toArray(), u = Le(n).attr("data-dt-column").split(",").map(function(_) {
        return parseInt(_, 10);
      }), v = 0; v < u.length; v++)
        if (!o.includes(u[v]))
          return !1;
      this.s.mouse.start.x = this._cursorPosition(t, "pageX"), this.s.mouse.start.y = this._cursorPosition(t, "pageY"), this.s.mouse.offset.x = this._cursorPosition(t, "pageX") - a.left, this.s.mouse.offset.y = this._cursorPosition(t, "pageY") - a.top, this.s.mouse.target = i, this.s.mouse.targets = u;
      for (var b = 0; b < u.length; b++) {
        var m = this.dt.cells(null, u[b], { page: "current" }).nodes().to$(), x = "dtcr-moving";
        b === 0 && (x += " dtcr-moving-first"), b === u.length - 1 && (x += " dtcr-moving-last"), m.addClass(x);
      }
      this._regions(u), this._scrollRegions(), Le(document).on("mousemove.colReorder touchmove.colReorder", function(_) {
        r._mouseMove(_);
      }).on("mouseup.colReorder touchend.colReorder", function(_) {
        r._mouseUp(_);
      });
    }, e.prototype._mouseMove = function(t) {
      if (this.dom.drag === null) {
        if (Math.pow(Math.pow(this._cursorPosition(t, "pageX") - this.s.mouse.start.x, 2) + Math.pow(this._cursorPosition(t, "pageY") - this.s.mouse.start.y, 2), 0.5) < 5)
          return;
        Le(document.body).addClass("dtcr-dragging"), this._createDragNode();
      }
      this.dom.drag.css({
        left: this._cursorPosition(t, "pageX") - this.s.mouse.offset.x,
        top: this._cursorPosition(t, "pageY") - this.s.mouse.offset.y
      });
      var n = this.dt.table().node(), r = Le(n).offset().left, i = this._cursorPosition(t, "pageX") - r, a;
      if (this._isRtl()) {
        var o = n.clientWidth;
        a = o - i;
      } else
        a = i;
      var u = this.s.dropZones.find(function(v) {
        return v.inlineStart <= a && a <= v.inlineStart + v.width;
      });
      this.s.mouse.absLeft = this._cursorPosition(t, "pageX"), u && (u.self || this._move(u, a));
    }, e.prototype._mouseUp = function(t) {
      var n = this;
      Le(document).off(".colReorder"), Le(document.body).removeClass("dtcr-dragging"), this.dom.drag && (this.dom.drag.remove(), this.dom.drag = null, this.s.mouse.target.on("click.dtcr", function(r) {
        return !1;
      }), setTimeout(function() {
        n.s.mouse.target.off(".dtcr");
      }, 10)), this.s.scrollInterval && clearInterval(this.s.scrollInterval), this.dt.cells(".dtcr-moving").nodes().to$().removeClass("dtcr-moving dtcr-moving-first dtcr-moving-last");
    }, e.prototype._move = function(t, n) {
      var r = this;
      this.dt.colReorder.move(this.s.mouse.targets, t.colIdx), this.s.mouse.targets = Le(this.s.mouse.target).attr("data-dt-column").split(",").map(function(x) {
        return parseInt(x, 10);
      }), this._regions(this.s.mouse.targets);
      var i = this.s.mouse.targets.filter(function(x) {
        return r.dt.column(x).visible();
      }), a = this.s.dropZones.find(function(x) {
        return x.colIdx === i[0];
      }), o = this.s.dropZones.indexOf(a);
      if (a.inlineStart > n) {
        var u = a.inlineStart - n, v = this.s.dropZones[o - 1];
        a.inlineStart -= u, a.width += u, v && (v.width -= u);
      }
      if (a = this.s.dropZones.find(function(x) {
        return x.colIdx === i[i.length - 1];
      }), a.inlineStart + a.width < n) {
        var b = n - (a.inlineStart + a.width), m = this.s.dropZones[o + 1];
        a.width += b, m && (m.inlineStart += b, m.width -= b);
      }
    }, e.prototype._regions = function(t) {
      var n = this, r = [], i = 0, a = 0, o = this.dt.columns(this.c.columns).indexes().toArray(), u = this.dt.columns().widths();
      this.dt.columns().every(function(v, b, m) {
        if (this.visible()) {
          var x = u[v];
          if (!o.includes(v)) {
            i += x;
            return;
          }
          var _ = Wc(n.dt, t, v);
          _ ? r.push({
            colIdx: v,
            inlineStart: i - a,
            self: t[0] <= v && v <= t[t.length - 1],
            width: x + a
          }) : v < t[0] ? r.length && (r[r.length - 1].width += x) : v > t[t.length - 1] && (a += x), i += x;
        }
      }), this.s.dropZones = r;
    }, e.prototype._isScrolling = function() {
      return this.dt.table().body().parentNode !== this.dt.table().header().parentNode;
    }, e.prototype._scrollRegions = function() {
      if (this._isScrolling()) {
        var t = this, n = Le(this.dt.table().container()).offset().left, r = Le(this.dt.table().container()).outerWidth(), i = 75, a = this.dt.table().body().parentElement.parentElement;
        this.s.scrollInterval = setInterval(function() {
          var o = t.s.mouse.absLeft;
          o !== -1 && (o < n + i && a.scrollLeft ? a.scrollLeft -= 5 : o > n + r - i && a.scrollLeft < a.scrollWidth && (a.scrollLeft += 5));
        }, 25);
      }
    }, e.prototype._isRtl = function() {
      return Le(this.dt.table().node()).css("direction") === "rtl";
    }, e.defaults = {
      columns: "",
      enable: !0,
      headerRows: null,
      order: null
    }, e.version = "2.1.2", e;
  }()
);
/*! ColReorder 2.1.2
 * © SpryMedia Ltd - datatables.net/license
 */
k.Api.register("colReorder.enable()", function(e) {
  return this.iterator("table", function(t) {
    t._colReorder && t._colReorder.enable(e);
  });
});
k.Api.register("colReorder.disable()", function() {
  return this.iterator("table", function(e) {
    e._colReorder && e._colReorder.disable();
  });
});
k.Api.register("colReorder.move()", function(e, t) {
  return qr(this), Array.isArray(e) || (e = [e]), Wc(this, e, t) ? this.tables().every(function() {
    $c(this, e, t), Vc(this);
  }) : (this.error("ColReorder - invalid move"), this);
});
k.Api.register("colReorder.order()", function(e, t) {
  return qr(this), e ? this.tables().every(function() {
    Xi(this, e, t);
  }) : this.context.length ? Hc(this) : null;
});
k.Api.register("colReorder.reset()", function() {
  return qr(this), this.tables().every(function() {
    var e = this.columns().every(function(t) {
      return t;
    }).flatten().toArray();
    Xi(this, e, !0);
  });
});
k.Api.register("colReorder.transpose()", function(e, t) {
  return qr(this), t || (t = "toCurrent"), jc(this, e, t);
});
k.ColReorder = qc;
Le(document).on("stateLoadInit.dt", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = new k.Api(t);
    if (n.colReorder && r.columns().count() === n.colReorder.length) {
      if (r.ready())
        Xi(r, n.colReorder, !0);
      else if (Rr(n.colReorder, n.order), n.columns) {
        for (var i = 0; i < n.columns.length; i++)
          n.columns[i]._cr_sort = n.colReorder[i];
        n.columns.sort(function(a, o) {
          return a._cr_sort - o._cr_sort;
        });
      }
    }
  }
});
Le(document).on("preInit.dt", function(e, t) {
  if (e.namespace === "dt") {
    var n = t.oInit.colReorder, r = k.defaults.colReorder;
    if (n || r) {
      var i = Le.extend({}, r, n);
      if (n !== !1) {
        var a = new k.Api(t);
        new qc(a, i);
      }
    }
  }
});
/*! KeyTable 2.12.2
 * © SpryMedia Ltd - datatables.net/license
 */
let we = Me;
var ih = 0, sh = 0, Nn = function(e, t) {
  if (!k.versionCheck || !k.versionCheck("1.10.8"))
    throw "KeyTable requires DataTables 1.10.8 or newer";
  this.c = we.extend(!0, {}, k.defaults.keyTable, Nn.defaults, t), this.s = {
    /** @type {DataTable.Api} DataTables' API instance */
    dt: new k.Api(e),
    /** Indicate when the DataTable is redrawing - take no action on key presses */
    dtDrawing: !1,
    enable: !0,
    /** @type {bool} Flag for if a draw is triggered by focus */
    focusDraw: !1,
    /** @type {bool} Flag to indicate when waiting for a draw to happen.
     *   Will ignore key presses at this point
     */
    waitingForDraw: !1,
    /** @type {object} Information about the last cell that was focused */
    lastFocus: null,
    /** @type {string} Unique namespace per instance */
    namespace: ".keyTable-" + ih++,
    /** @type {Node} Input element for tabbing into the table */
    tabInput: null
  }, this.dom = {};
  var n = this.s.dt.settings()[0], r = n.keytable;
  if (r)
    return r;
  n.keytable = this, this._constructor();
};
we.extend(Nn.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * API methods for DataTables API interface
   */
  /**
   * Blur the table's cell focus
   */
  blur: function() {
    this._blur();
  },
  /**
   * Enable cell focus for the table
   *
   * @param  {string} state Can be `true`, `false` or `-string navigation-only`
   */
  enable: function(e) {
    this.s.enable = e;
  },
  /**
   * Get enable status
   */
  enabled: function() {
    return this.s.enable;
  },
  /**
   * Focus on a cell
   * @param  {integer} row    Row index
   * @param  {integer} column Column index
   */
  focus: function(e, t) {
    this._focus(this.s.dt.cell(e, t));
  },
  /**
   * Is the cell focused
   * @param  {object} cell Cell index to check
   * @returns {boolean} true if focused, false otherwise
   */
  focused: function(e) {
    var t = this.s.lastFocus;
    if (!t)
      return !1;
    var n = this.s.lastFocus.cell.index();
    return e.row === n.row && e.column === n.column;
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * Initialise the KeyTable instance
   *
   * @private
   */
  _constructor: function() {
    this._tabInput();
    var e = this, t = this.s.dt, n = we(t.table().node()), r = this.s.namespace, i = !1;
    if (n.css("position") === "static" && n.css("position", "relative"), we(t.table().body()).on("click" + r, "th, td", function(u) {
      if (e.s.enable !== !1) {
        var v = t.cell(this);
        v.any() && e._focus(v, null, !1, u);
      }
    }), we(document).on("keydown" + r, function(u) {
      !i && !e.s.dtDrawing ? e._key(u) : u.preventDefault();
    }), this.c.blurable && we(document).on("mousedown" + r, function(u) {
      we(u.target).parents(".dataTables_filter, .dt-search").length && e._blur(), !we(u.target).parents().filter(t.table().container()).length && (we(u.target).parents("div.DTE").length || we(u.target).parents("div.editor-datetime").length || we(u.target).parents("div.dt-datetime").length || we(u.target).parents().filter(".DTFC_Cloned").length || e._blur());
    }), this.c.editor) {
      var a = this.c.editor;
      a.on("open.keyTableMain", function(u, v, b) {
        v !== "inline" && e.s.enable && (e.enable(!1), a.one("close" + r, function() {
          e.enable(!0);
        }));
      }), this.c.editOnFocus && t.on(
        "key-focus" + r + " key-refocus" + r,
        function(u, v, b, m) {
          e._editor(null, m, !0);
        }
      ), t.on("key" + r, function(u, v, b, m, x) {
        e._editor(b, x, !1);
      }), we(t.table().body()).on("dblclick" + r, "th, td", function(u) {
        if (e.s.enable !== !1) {
          var v = t.cell(this);
          v.any() && (e.s.lastFocus && this !== e.s.lastFocus.cell.node() || e._editor(null, u, !0));
        }
      }), a.on("preSubmit", function() {
        i = !0;
      }).on("preSubmitCancelled", function() {
        i = !1;
      }).on("submitComplete", function() {
        i = !1;
      });
    }
    t.on("stateSaveParams" + r, function(u, v, b) {
      b.keyTable = e.s.lastFocus ? e.s.lastFocus.cell.index() : null;
    }), t.on("column-visibility" + r, function(u) {
      e._tabInput();
    }), t.on("column-reorder" + r, function(u, v, b) {
      var m = e.s.lastFocus;
      if (m && m.cell) {
        var x = m.relative.column;
        m.cell[0][0].column = b.mapping.indexOf(x), m.relative.column = b.mapping.indexOf(x);
      }
    }), t.on("preDraw" + r + " scroller-will-draw" + r, function(u) {
      e.s.dtDrawing = !0;
    }), t.on("draw" + r, function(u) {
      if (e.s.dtDrawing = !1, e._tabInput(), !e.s.focusDraw) {
        var v = e.s.lastFocus;
        if (v) {
          var b = e.s.lastFocus.relative, m = t.page.info(), x = b.row;
          if (m.recordsDisplay === 0 || x < m.start || x > m.start + m.length)
            return;
          x >= m.recordsDisplay && (x = m.recordsDisplay - 1), e._focus(x, b.column, !0, u);
        }
      }
    }), this.c.clipboard && this._clipboard(), t.on("destroy" + r, function() {
      e._blur(!0), t.off(r), we(t.table().body()).off("click" + r, "th, td").off("dblclick" + r, "th, td"), we(document).off("mousedown" + r).off("keydown" + r).off("copy" + r).off("paste" + r);
    });
    var o = t.state.loaded();
    o && o.keyTable ? t.one("init", function() {
      var u = t.cell(o.keyTable);
      u.any() && u.focus();
    }) : this.c.focus && t.cell(this.c.focus).focus();
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Blur the control
   *
   * @param {boolean} [noEvents=false] Don't trigger updates / events (for destroying)
   * @private
   */
  _blur: function(e) {
    if (!(!this.s.enable || !this.s.lastFocus)) {
      var t = this.s.lastFocus.cell;
      we(t.node()).removeClass(this.c.className), this.s.lastFocus = null, e || (this._updateFixedColumns(t.index().column), this._emitEvent("key-blur", [this.s.dt, t]));
    }
  },
  /**
   * Clipboard interaction handlers
   *
   * @private
   */
  _clipboard: function() {
    var e = this.s.dt, t = this, n = this.s.namespace, r = this.c.clipboard;
    window.getSelection && ((r === !0 || r.copy) && we(document).on("copy" + n, function(i) {
      var a = i.originalEvent, o = window.getSelection().toString(), u = t.s.lastFocus;
      !o && u && (a.clipboardData.setData(
        "text/plain",
        u.cell.render(t.c.clipboardOrthogonal)
      ), a.preventDefault());
    }), (r === !0 || r.paste) && we(document).on("paste" + n, function(i) {
      var a = i.originalEvent, o = t.s.lastFocus, u = document.activeElement, v = t.c.editor, b;
      if (o && (!u || u.nodeName.toLowerCase() === "body"))
        if (a.preventDefault(), window.clipboardData && window.clipboardData.getData ? b = window.clipboardData.getData("Text") : a.clipboardData && a.clipboardData.getData && (b = a.clipboardData.getData("text/plain")), v) {
          var m = t._inlineOptions(o.cell.index());
          v.inline(m.cell, m.field, m.options).set(v.displayed()[0], b).submit();
        } else
          o.cell.data(b), e.draw(!1);
    }));
  },
  /**
   * Get an array of the column indexes that KeyTable can operate on. This
   * is a merge of the user supplied columns and the visible columns.
   *
   * @private
   */
  _columns: function() {
    var e = this.s.dt, t = e.columns(this.c.columns).indexes(), n = [];
    return e.columns(":visible").every(function(r) {
      t.indexOf(r) !== -1 && n.push(r);
    }), n;
  },
  /**
   * Perform excel like navigation for Editor by triggering an edit on key
   * press
   *
   * @param  {integer} key Key code for the pressed key
   * @param  {object} orig Original event
   * @private
   */
  _editor: function(e, t, n) {
    if (this.s.lastFocus && !(t && t.type === "draw")) {
      var r = this, i = this.s.dt, a = this.c.editor, o = this.s.lastFocus.cell, u = this.s.namespace + "e" + sh++;
      if (!we("div.DTE", o.node()).length && !(e !== null && (e >= 0 && e <= 9 || e === 11 || e === 12 || e >= 14 && e <= 31 || e >= 112 && e <= 123 || e >= 127 && e <= 159))) {
        t && (t.stopPropagation(), e === 13 && t.preventDefault());
        var v = function() {
          var b = r._inlineOptions(o.index());
          a.one("open" + u, function() {
            a.off("cancelOpen" + u), n || we(
              "div.DTE_Field_InputControl input, div.DTE_Field_InputControl textarea"
            ).select(), i.keys.enable(n ? "tab-only" : "navigation-only"), i.on("key-blur.editor", function(m, x, _) {
              a.s.editOpts.onBlur !== "submit" && a.displayed() && _.node() === o.node() && a.submit();
            }), n && we(i.table().container()).addClass("dtk-focus-alt"), a.on("preSubmitCancelled" + u, function() {
              setTimeout(function() {
                r._focus(o, null, !1);
              }, 50);
            }), a.on("submitUnsuccessful" + u, function() {
              r._focus(o, null, !1);
            }), a.one("close" + u, function() {
              i.keys.enable(!0), i.off("key-blur.editor"), a.off(u), we(i.table().container()).removeClass("dtk-focus-alt"), r.s.returnSubmit && (r.s.returnSubmit = !1, r._emitEvent("key-return-submit", [i, o]));
            });
          }).one("cancelOpen" + u, function() {
            a.off(u);
          }).inline(b.cell, b.field, b.options);
        };
        e === 13 ? (n = !0, we(document).one("keyup", function() {
          v();
        })) : v();
      }
    }
  },
  _inlineOptions: function(e) {
    return this.c.editorOptions ? this.c.editorOptions(e) : {
      cell: e,
      field: void 0,
      options: void 0
    };
  },
  /**
   * Emit an event on the DataTable for listeners
   *
   * @param  {string} name Event name
   * @param  {array} args Event arguments
   * @private
   */
  _emitEvent: function(e, t) {
    return this.s.dt.iterator("table", function(n, r) {
      return we(n.nTable).triggerHandler(e, t);
    });
  },
  /**
   * Focus on a particular cell, shifting the table's paging if required
   *
   * @param  {DataTables.Api|integer} row Can be given as an API instance that
   *   contains the cell to focus or as an integer. As the latter it is the
   *   visible row index (from the whole data set) - NOT the data index
   * @param  {integer} [column] Not required if a cell is given as the first
   *   parameter. Otherwise this is the column data index for the cell to
   *   focus on
   * @param {boolean} [shift=true] Should the viewport be moved to show cell
   * @private
   */
  _focus: function(e, t, n, r) {
    var i = this, a = this.s.dt, o = a.page.info(), u = this.s.lastFocus;
    if (r || (r = null), !!this.s.enable) {
      if (typeof e != "number") {
        if (!e.any())
          return;
        var v = e.index();
        if (t = v.column, e = a.rows({ filter: "applied", order: "applied" }).indexes().indexOf(v.row), e < 0)
          return;
        o.serverSide && (e += o.start);
      }
      if (o.length !== -1 && (e < o.start || e >= o.start + o.length)) {
        this.s.focusDraw = !0, this.s.waitingForDraw = !0, a.one("draw", function() {
          i.s.focusDraw = !1, i.s.waitingForDraw = !1, i._focus(e, t, void 0, r);
        }).page(Math.floor(e / o.length)).draw(!1);
        return;
      }
      if (we.inArray(t, this._columns()) !== -1) {
        o.serverSide && (e -= o.start);
        var b = a.cells(null, t, { search: "applied", order: "applied" }).flatten(), m = a.cell(b[e]), x = this._emitEvent("key-prefocus", [this.s.dt, m, r || null]);
        if (x.indexOf(!1) === -1) {
          if (u) {
            if (u.node === m.node()) {
              this._emitEvent("key-refocus", [this.s.dt, m, r || null]);
              return;
            }
            this._blur();
          }
          this._removeOtherFocus();
          var _ = we(m.node());
          if (_.addClass(this.c.className), this._updateFixedColumns(t), n === void 0 || n === !0) {
            this._scroll(we(window), we(document.body), _, "offset");
            var T = a.table().body().parentNode;
            if (T !== a.table().header().parentNode) {
              var N = we(T.parentNode);
              this._scroll(N, N, _, "position");
            }
          }
          var D = a.page.info();
          this.s.lastFocus = {
            cell: m,
            node: m.node(),
            relative: {
              row: D.start + a.rows({ page: "current" }).indexes().indexOf(m.index().row),
              column: m.index().column
            }
          }, this._emitEvent("key-focus", [this.s.dt, m, r || null]), a.state.save();
        }
      }
    }
  },
  /**
   * Handle key press
   *
   * @param  {object} e Event
   * @private
   */
  _key: function(e) {
    if (this.s.waitingForDraw) {
      e.preventDefault();
      return;
    }
    if (!we(e.target).closest(".dte-inlineAdd").length) {
      var t = this.s.enable;
      this.s.returnSubmit = (t === "navigation-only" || t === "tab-only") && e.keyCode === 13;
      var n = t === !0 || t === "navigation-only";
      if (t && !((e.keyCode === 0 || e.ctrlKey || e.metaKey || e.altKey) && !(e.ctrlKey && e.altKey))) {
        var r = this.s.lastFocus;
        if (r) {
          if (!this.s.dt.cell(r.node).any()) {
            this.s.lastFocus = null;
            return;
          }
          var i = this, a = this.s.dt, o = !!this.s.dt.settings()[0].oScroll.sY;
          if (!(this.c.keys && we.inArray(e.keyCode, this.c.keys) === -1))
            switch (e.keyCode) {
              case 9:
                e.preventDefault(), this._keyAction(function() {
                  i._shift(e, e.shiftKey ? "left" : "right", !0);
                });
                break;
              case 27:
                if (we(r.node).find("div.DTE").length)
                  return;
                this.c.blurable && t === !0 && this._blur();
                break;
              case 33:
              case 34:
                n && !o && (e.preventDefault(), this._keyAction(function() {
                  a.page(e.keyCode === 33 ? "previous" : "next").draw(!1);
                }));
                break;
              case 35:
              case 36:
                n && (e.preventDefault(), this._keyAction(function() {
                  var u = a.cells({ page: "current" }).indexes(), v = i._columns();
                  i._focus(
                    a.cell(u[e.keyCode === 35 ? u.length - 1 : v[0]]),
                    null,
                    !0,
                    e
                  );
                }));
                break;
              case 37:
                n && this._keyAction(function() {
                  i._shift(e, "left");
                });
                break;
              case 38:
                n && this._keyAction(function() {
                  i._shift(e, "up");
                });
                break;
              case 39:
                n && this._keyAction(function() {
                  i._shift(e, "right");
                });
                break;
              case 40:
                n && this._keyAction(function() {
                  i._shift(e, "down");
                });
                break;
              case 113:
                if (this.c.editor) {
                  this._editor(null, e, !0);
                  break;
                }
              default:
                t === !0 && this._emitEvent("key", [a, e.keyCode, this.s.lastFocus.cell, e]);
                break;
            }
        }
      }
    }
  },
  /**
   * Whether we perform a key shift action immediately or not depends
   * upon if Editor is being used. If it is, then we wait until it
   * completes its action
   * @param {*} action Function to trigger when ready
   */
  _keyAction: function(e) {
    var t = this.c.editor;
    t && t.mode() && t.display() ? t.submit(e) : e();
  },
  /**
   * Remove focus from all tables other than this one
   */
  _removeOtherFocus: function() {
    var e = this.s.dt.table().node();
    we.fn.dataTable.tables({ api: !0 }).iterator("table", function(t) {
      this.table().node() !== e && this.cell.blur();
    });
  },
  /**
   * Scroll a container to make a cell visible in it. This can be used for
   * both DataTables scrolling and native window scrolling.
   *
   * @param  {jQuery} container Scrolling container
   * @param  {jQuery} scroller  Item being scrolled
   * @param  {jQuery} cell      Cell in the scroller
   * @param  {string} posOff    `position` or `offset` - which to use for the
   *   calculation. `offset` for the document, otherwise `position`
   * @private
   */
  _scroll: function(e, t, n, r) {
    var i = n[r](), a = n.outerHeight(), o = n.outerWidth(), u = t.scrollTop(), v = t.scrollLeft(), b = e.height(), m = e.width();
    r === "position" && (i.top += parseInt(n.closest("table").css("top"), 10)), i.top < u && i.top + a > u - 5 && t.scrollTop(i.top), i.left < v && t.scrollLeft(i.left), i.top + a > u + b && i.top < u + b + 5 && a < b && t.scrollTop(i.top + a - b), i.left + o > v + m && o < m && t.scrollLeft(i.left + o - m);
  },
  /**
   * Calculate a single offset movement in the table - up, down, left and
   * right and then perform the focus if possible
   *
   * @param  {object}  e           Event object
   * @param  {string}  direction   Movement direction
   * @param  {boolean} keyBlurable `true` if the key press can result in the
   *   table being blurred. This is so arrow keys won't blur the table, but
   *   tab will.
   * @private
   */
  _shift: function(e, t, n) {
    var r = this.s.dt, i = r.page.info(), a = i.recordsDisplay, o = this._columns(), u = this.s.lastFocus;
    if (u) {
      var v = u.cell;
      if (v) {
        var b = r.rows({ filter: "applied", order: "applied" }).indexes().indexOf(v.index().row);
        i.serverSide && (b += i.start);
        var m = r.columns(o).indexes().indexOf(v.index().column), x = b, _ = o[m];
        we(r.table().node()).css("direction") === "rtl" && (t === "right" ? t = "left" : t === "left" && (t = "right")), t === "right" ? m >= o.length - 1 ? (x++, _ = o[0]) : _ = o[m + 1] : t === "left" ? m === 0 ? (x--, _ = o[o.length - 1]) : _ = o[m - 1] : t === "up" ? x-- : t === "down" && x++, x >= 0 && x < a && we.inArray(_, o) !== -1 ? (e && e.preventDefault(), this._focus(x, _, !0, e)) : !n || !this.c.blurable ? e && e.preventDefault() : this._blur();
      }
    }
  },
  /**
   * Create and insert a hidden input element that can receive focus on behalf
   * of the table
   *
   * @private
   */
  _tabInput: function() {
    var e = this, t = this.s.dt, n = this.c.tabIndex !== null ? this.c.tabIndex : t.settings()[0].iTabIndex;
    if (n != -1) {
      if (!this.s.tabInput) {
        var r = "keytable-focus-capture-" + this.s.namespace.split("-")[1], i = '<input id="' + r + '" type="text" tabindex="' + n + '"/>', a = we('<div><label for="' + r + '">' + i + "</label></div>").css({
          position: "absolute",
          height: 1,
          width: 0,
          overflow: "hidden"
        });
        a.find("input").on("focus", function(u) {
          var v = t.cell(":eq(0)", e._columns(), { page: "current" });
          v.any() && e._focus(v, null, !0, u);
        }), this.s.tabInput = a;
      }
      var o = this.s.dt.cell(":eq(0)", "0:visible", { page: "current", order: "current" }).node();
      o && we(o).prepend(this.s.tabInput);
    }
  },
  /**
   * Update fixed columns if they are enabled and if the cell we are
   * focusing is inside a fixed column
   * @param  {integer} column Index of the column being changed
   * @private
   */
  _updateFixedColumns: function(e) {
    var t = this.s.dt, n = t.settings()[0];
    if (n._oFixedColumns) {
      var r = n._oFixedColumns.s.iLeftColumns, i = n.aoColumns.length - n._oFixedColumns.s.iRightColumns;
      (e < r || e >= i) && t.fixedColumns().update();
    }
  }
});
Nn.defaults = {
  /**
   * Can focus be removed from the table
   * @type {Boolean}
   */
  blurable: !0,
  /**
   * Class to give to the focused cell
   * @type {String}
   */
  className: "focus",
  /**
   * Enable or disable clipboard support
   * @type {Boolean}
   */
  clipboard: !0,
  /**
   * Orthogonal data that should be copied to clipboard
   * @type {string}
   */
  clipboardOrthogonal: "display",
  /**
   * Columns that can be focused. This is automatically merged with the
   * visible columns as only visible columns can gain focus.
   * @type {String}
   */
  columns: "",
  // all
  /**
   * Editor instance to automatically perform Excel like navigation
   * @type {Editor}
   */
  editor: null,
  /**
   * Trigger editing immediately on focus
   * @type {boolean}
   */
  editOnFocus: !1,
  /**
   * Options to pass to Editor's inline method
   * @type {function}
   */
  editorOptions: null,
  /**
   * Select a cell to automatically select on start up. `null` for no
   * automatic selection
   * @type {cell-selector}
   */
  focus: null,
  /**
   * Array of keys to listen for
   * @type {null|array}
   */
  keys: null,
  /**
   * Tab index for where the table should sit in the document's tab flow
   * @type {integer|null}
   */
  tabIndex: null
};
Nn.version = "2.12.2";
we.fn.dataTable.KeyTable = Nn;
we.fn.DataTable.KeyTable = Nn;
k.Api.register("cell.blur()", function() {
  return this.iterator("table", function(e) {
    e.keytable && e.keytable.blur();
  });
});
k.Api.register("cell().focus()", function() {
  return this.iterator("cell", function(e, t, n) {
    e.keytable && e.keytable.focus(t, n);
  });
});
k.Api.register("keys.disable()", function() {
  return this.iterator("table", function(e) {
    e.keytable && e.keytable.enable(!1);
  });
});
k.Api.register("keys.enable()", function(e) {
  return this.iterator("table", function(t) {
    t.keytable && t.keytable.enable(e === void 0 ? !0 : e);
  });
});
k.Api.register("keys.enabled()", function(e) {
  var t = this.context;
  return t.length && t[0].keytable ? t[0].keytable.enabled() : !1;
});
k.Api.register("keys.move()", function(e) {
  return this.iterator("table", function(t) {
    t.keytable && t.keytable._shift(null, e, !1);
  });
});
k.ext.selector.cell.push(function(e, t, n) {
  var r = t.focused, i = e.keytable, a = [];
  if (!i || r === void 0)
    return n;
  for (var o = 0, u = n.length; o < u; o++)
    (r === !0 && i.focused(n[o]) || r === !1 && !i.focused(n[o])) && a.push(n[o]);
  return a;
});
we(document).on("preInit.dt.dtk", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = t.oInit.keys, i = k.defaults.keys;
    if (r || i) {
      var a = we.extend({}, i, r);
      r !== !1 && new Nn(t, a);
    }
  }
});
/*! Scroller 2.4.3
 * © SpryMedia Ltd - datatables.net/license
 */
let _e = Me;
var Mt = function(e, t) {
  if (!(this instanceof Mt)) {
    alert(
      "Scroller warning: Scroller must be initialised with the 'new' keyword."
    );
    return;
  }
  t === void 0 && (t = {});
  var n = _e.fn.dataTable.Api(e);
  this.s = {
    /**
     * DataTables settings object
     *  @type     object
     *  @default  Passed in as first parameter to constructor
     */
    dt: n.settings()[0],
    /**
     * DataTables API instance
     *  @type     DataTable.Api
     */
    dtApi: n,
    /**
     * Pixel location of the top of the drawn table in the viewport
     *  @type     int
     *  @default  0
     */
    tableTop: 0,
    /**
     * Pixel location of the bottom of the drawn table in the viewport
     *  @type     int
     *  @default  0
     */
    tableBottom: 0,
    /**
     * Pixel location of the boundary for when the next data set should be loaded and drawn
     * when scrolling up the way.
     *  @type     int
     *  @default  0
     *  @private
     */
    redrawTop: 0,
    /**
     * Pixel location of the boundary for when the next data set should be loaded and drawn
     * when scrolling down the way. Note that this is actually calculated as the offset from
     * the top.
     *  @type     int
     *  @default  0
     *  @private
     */
    redrawBottom: 0,
    /**
     * Auto row height or not indicator
     *  @type     bool
     *  @default  0
     */
    autoHeight: !0,
    /**
     * Number of rows calculated as visible in the visible viewport
     *  @type     int
     *  @default  0
     */
    viewportRows: 0,
    /**
     * setTimeout reference for state saving, used when state saving is enabled in the DataTable
     * and when the user scrolls the viewport in order to stop the cookie set taking too much
     * CPU!
     *  @type     int
     *  @default  0
     */
    stateTO: null,
    stateSaveThrottle: function() {
    },
    /**
     * setTimeout reference for the redraw, used when server-side processing is enabled in the
     * DataTables in order to prevent DoSing the server
     *  @type     int
     *  @default  null
     */
    drawTO: null,
    heights: {
      jump: null,
      page: null,
      virtual: null,
      scroll: null,
      /**
       * Height of rows in the table
       *  @type     int
       *  @default  0
       */
      row: null,
      /**
       * Pixel height of the viewport
       *  @type     int
       *  @default  0
       */
      viewport: null,
      labelHeight: 0,
      xbar: 0
    },
    topRowFloat: 0,
    scrollDrawDiff: null,
    loaderVisible: !1,
    forceReposition: !1,
    baseRowTop: 0,
    baseScrollTop: 0,
    mousedown: !1,
    lastScrollTop: 0
  }, this.s = _e.extend(this.s, Mt.oDefaults, t), this.s.heights.row = this.s.rowHeight, this.dom = {
    force: document.createElement("div"),
    label: _e('<div class="dts_label">0</div>'),
    scroller: null,
    table: null,
    loader: null
  }, !this.s.dt.oScroller && (this.s.dt.oScroller = this, this.construct());
};
_e.extend(Mt.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Public methods - to be exposed via the DataTables API
   */
  /**
   * Calculate and store information about how many rows are to be displayed
   * in the scrolling viewport, based on current dimensions in the browser's
   * rendering. This can be particularly useful if the table is initially
   * drawn in a hidden element - for example in a tab.
   *  @param {bool} [redraw=true] Redraw the table automatically after the recalculation, with
   *    the new dimensions forming the basis for the draw.
   *  @returns {void}
   */
  measure: function(e) {
    this.s.autoHeight && this._calcRowHeight();
    var t = this.s.heights;
    t.row && (t.viewport = this._parseHeight(
      _e(this.dom.scroller).css("max-height")
    ), this.s.viewportRows = parseInt(t.viewport / t.row, 10) + 1, this.s.dt._iDisplayLength = this.s.viewportRows * this.s.displayBuffer);
    var n = this.dom.label.outerHeight();
    t.xbar = this.dom.scroller.offsetHeight - this.dom.scroller.clientHeight, t.labelHeight = n, (e === void 0 || e) && this.s.dtApi.draw(!1);
  },
  /**
   * Get information about current displayed record range. This corresponds to
   * the information usually displayed in the "Info" block of the table.
   *
   * @returns {object} info as an object:
   *  {
   *      start: {int}, // the 0-indexed record at the top of the viewport
   *      end:   {int}, // the 0-indexed record at the bottom of the viewport
   *  }
   */
  pageInfo: function() {
    var e = this.s.dt, t = this.dom.scroller.scrollTop, n = e.fnRecordsDisplay(), r = Math.ceil(
      this.pixelsToRow(
        t + this.s.heights.viewport,
        !1,
        this.s.ani
      )
    );
    return {
      start: Math.floor(this.pixelsToRow(t, !1, this.s.ani)),
      end: n < r ? n - 1 : r - 1
    };
  },
  /**
   * Calculate the row number that will be found at the given pixel position
   * (y-scroll).
   *
   * Please note that when the height of the full table exceeds 1 million
   * pixels, Scroller switches into a non-linear mode for the scrollbar to fit
   * all of the records into a finite area, but this function returns a linear
   * value (relative to the last non-linear positioning).
   *  @param {int} pixels Offset from top to calculate the row number of
   *  @param {int} [intParse=true] If an integer value should be returned
   *  @param {int} [virtual=false] Perform the calculations in the virtual domain
   *  @returns {int} Row index
   */
  pixelsToRow: function(e, t, n) {
    var r = e - this.s.baseScrollTop, i = n ? (this._domain("physicalToVirtual", this.s.baseScrollTop) + r) / this.s.heights.row : r / this.s.heights.row + this.s.baseRowTop;
    return t || t === void 0 ? parseInt(i, 10) : i;
  },
  /**
   * Calculate the pixel position from the top of the scrolling container for
   * a given row
   *  @param {int} iRow Row number to calculate the position of
   *  @returns {int} Pixels
   */
  rowToPixels: function(e, t, n) {
    var r, i = e - this.s.baseRowTop;
    return n ? (r = this._domain("virtualToPhysical", this.s.baseScrollTop), r += i * this.s.heights.row) : (r = this.s.baseScrollTop, r += i * this.s.heights.row), t || t === void 0 ? parseInt(r, 10) : r;
  },
  /**
   * Calculate the row number that will be found at the given pixel position (y-scroll)
   *  @param {int} row Row index to scroll to
   *  @param {bool} [animate=true] Animate the transition or not
   *  @returns {void}
   */
  scrollToRow: function(e, t) {
    var n = this, r = !1, i = this.rowToPixels(e), a = (this.s.displayBuffer - 1) / 2 * this.s.viewportRows, o = e - a;
    o < 0 && (o = 0), (i > this.s.redrawBottom || i < this.s.redrawTop) && this.s.dt._iDisplayStart !== o && (r = !0, i = this._domain("virtualToPhysical", e * this.s.heights.row), this.s.redrawTop < i && i < this.s.redrawBottom && (this.s.forceReposition = !0, t = !1)), t === void 0 || t ? (this.s.ani = r, _e(this.dom.scroller).animate(
      {
        scrollTop: i
      },
      function() {
        setTimeout(function() {
          n.s.ani = !1;
        }, 250);
      }
    )) : _e(this.dom.scroller).scrollTop(i);
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * Initialisation for Scroller
   *  @returns {void}
   *  @private
   */
  construct: function() {
    var e = this, t = this.s.dtApi;
    if (!this.s.dt.oFeatures.bPaginate)
      throw new Error(
        "Pagination must be enabled for Scroller to operate"
      );
    this.dom.force.style.position = "relative", this.dom.force.style.top = "0px", this.dom.force.style.left = "0px", this.dom.force.style.width = "1px", this.dom.scroller = t.table().node().parentNode, this.dom.scroller.appendChild(this.dom.force), this.dom.scroller.style.position = "relative", this.dom.table = _e(">table", this.dom.scroller)[0], this.dom.table.style.position = "absolute", this.dom.table.style.top = "0px", this.dom.table.style.left = "0px", _e(t.table().container()).addClass("dts DTS"), this.dom.label.appendTo(this.dom.scroller), this.s.heights.row && this.s.heights.row != "auto" && (this.s.autoHeight = !1), this.s.ingnoreScroll = !0, _e(this.dom.scroller).on("scroll.dt-scroller", function(i) {
      e._scroll.call(e);
    }), _e(this.dom.scroller).on("touchstart.dt-scroller", function() {
      e._scroll.call(e);
    }), _e(this.dom.scroller).on("mousedown.dt-scroller", function() {
      e.s.mousedown = !0;
    }).on("mouseup.dt-scroller", function() {
      e.s.labelVisible = !1, e.s.mousedown = !1, e.dom.label.css("display", "none");
    }), _e(window).on("resize.dt-scroller", function() {
      e.measure(!1), e._info();
    });
    var n = !0, r = t.state.loaded();
    t.on("stateSaveParams.scroller", function(i, a, o) {
      n && r ? (o.scroller = r.scroller, n = !1, o.scroller && (e.s.lastScrollTop = o.scroller.scrollTop)) : o.scroller = {
        topRow: e.s.topRowFloat,
        baseRowTop: e.s.baseRowTop
      };
    }), t.on("stateLoadParams.scroller", function(i, a, o) {
      o.scroller !== void 0 && e.scrollToRow(o.scroller.topRow);
    }), this.measure(!1), r && r.scroller && (this.s.topRowFloat = r.scroller.topRow, this.s.baseRowTop = r.scroller.baseRowTop, this.s.baseScrollTop = this.s.baseRowTop * this.s.heights.row, r.scroller.scrollTop = this._domain("physicalToVirtual", this.s.topRowFloat * this.s.heights.row)), e.s.stateSaveThrottle = k.util.throttle(function() {
      e.s.dtApi.state.save();
    }, 500), t.on("init.scroller", function() {
      e.measure(!1), e.s.scrollType = "jump", e._draw(), t.on("draw.scroller", function() {
        e._draw();
      });
    }), t.on("preDraw.dt.scroller", function() {
      e._scrollForce();
    }), t.on("destroy.scroller", function() {
      _e(window).off("resize.dt-scroller"), _e(e.dom.scroller).off(".dt-scroller"), _e(e.s.dt.nTable).off(".scroller"), _e(e.s.dt.nTableWrapper).removeClass("DTS"), _e("div.DTS_Loading", e.dom.scroller.parentNode).remove(), e.dom.table.style.position = "", e.dom.table.style.top = "", e.dom.table.style.left = "";
    });
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Automatic calculation of table row height. This is just a little tricky here as using
   * initialisation DataTables has tale the table out of the document, so we need to create
   * a new table and insert it into the document, calculate the row height and then whip the
   * table out.
   *  @returns {void}
   *  @private
   */
  _calcRowHeight: function() {
    var e = this.s.dt, t = e.nTable, n = t.cloneNode(!1), r = _e("<tbody/>").appendTo(n), i = e.oClasses, a = k.versionCheck("2") ? {
      container: i.container,
      scroller: i.scrolling.container,
      body: i.scrolling.body
    } : {
      container: i.sWrapper,
      scroller: i.sScrollWrapper,
      body: i.sScrollBody
    }, o = _e(
      '<div class="' + a.container + ' DTS"><div class="' + a.scroller + '"><div class="' + a.body + '"></div></div></div>'
    );
    _e("tbody tr:lt(4)", t).clone().appendTo(r);
    var u = _e("tr", r).length;
    if (u === 1)
      r.prepend("<tr><td>&#160;</td></tr>"), r.append("<tr><td>&#160;</td></tr>");
    else
      for (; u < 3; u++)
        r.append("<tr><td>&#160;</td></tr>");
    _e("div." + a.body, o).append(n);
    var v = this.s.dt.nHolding || t.parentNode;
    _e(v).is(":visible") || (v = "body"), o.find("input").removeAttr("name"), o.appendTo(v), this.s.heights.row = _e("tr", r).eq(1).outerHeight(), o.remove();
  },
  /**
   * Draw callback function which is fired when the DataTable is redrawn. The main function of
   * this method is to position the drawn table correctly the scrolling container for the rows
   * that is displays as a result of the scrolling position.
   *  @returns {void}
   *  @private
   */
  _draw: function() {
    var e = this, t = this.s.heights, n = this.dom.scroller.scrollTop, r = _e(this.s.dt.nTable).height(), i = this.s.dt._iDisplayStart, a = this.s.dt._iDisplayLength, o = this.s.dt.fnRecordsDisplay(), u = n + t.viewport;
    this.s.skip = !0, (this.s.dt.bSorted || this.s.dt.bFiltered) && i === 0 && !this.s.dt._drawHold && (this.s.topRowFloat = 0), n = this.s.scrollType === "jump" ? this._domain(
      "virtualToPhysical",
      this.s.topRowFloat * t.row
    ) : n, this.s.baseScrollTop = n, this.s.baseRowTop = this.s.topRowFloat;
    var v = n - (this.s.topRowFloat - i) * t.row;
    if (i === 0)
      v = 0;
    else if (i + a >= o)
      v = t.scroll - r;
    else {
      var b = v + r;
      if (b < u) {
        var m = u - r, x = m - v;
        this.s.baseScrollTop += x + 1, v = m;
      }
    }
    this.dom.table.style.top = v + "px", this.s.tableTop = v, this.s.tableBottom = r + this.s.tableTop;
    var _ = (n - this.s.tableTop) * this.s.boundaryScale;
    if (this.s.redrawTop = n - _, this.s.redrawBottom = n + _ > t.scroll - t.viewport - t.row ? t.scroll - t.viewport - t.row : n + _, this.s.skip = !1, e.s.ingnoreScroll)
      if (this.s.dt.oFeatures.bStateSave && this.s.dt.oLoadedState !== null && typeof this.s.dt.oLoadedState.scroller < "u") {
        var T = !!((this.s.dt.sAjaxSource || e.s.dt.ajax) && !this.s.dt.oFeatures.bServerSide);
        (T && this.s.dt.iDraw >= 2 || !T && this.s.dt.iDraw >= 1) && setTimeout(function() {
          _e(e.dom.scroller).scrollTop(
            e.s.dt.oLoadedState.scroller.scrollTop
          ), setTimeout(function() {
            e.s.ingnoreScroll = !1;
          }, 0);
        }, 0);
      } else
        e.s.ingnoreScroll = !1;
    this.s.dt.oFeatures.bInfo && setTimeout(function() {
      e._info.call(e);
    }, 0), _e(this.s.dt.nTable).triggerHandler("position.dts.dt", v);
  },
  /**
   * Convert from one domain to another. The physical domain is the actual
   * pixel count on the screen, while the virtual is if we had browsers which
   * had scrolling containers of infinite height (i.e. the absolute value)
   *
   *  @param {string} dir Domain transform direction, `virtualToPhysical` or
   *    `physicalToVirtual`
   *  @returns {number} Calculated transform
   *  @private
   */
  _domain: function(e, t) {
    var n = this.s.heights, r, i = 1e4;
    if (n.virtual === n.scroll || t < i)
      return t;
    if (e === "virtualToPhysical" && t >= n.virtual - i)
      return r = n.virtual - t, n.scroll - r;
    if (e === "physicalToVirtual" && t >= n.scroll - i)
      return r = n.scroll - t, n.virtual - r;
    var a = (n.virtual - i - i) / (n.scroll - i - i), o = i - a * i;
    return e === "virtualToPhysical" ? (t - o) / a : a * t + o;
  },
  /**
   * Update any information elements that are controlled by the DataTable based on the scrolling
   * viewport and what rows are visible in it. This function basically acts in the same way as
   * _fnUpdateInfo in DataTables, and effectively replaces that function.
   *  @returns {void}
   *  @private
   */
  _info: function() {
    if (this.s.dt.oFeatures.bInfo) {
      var e = this.s.dt, t = this.s.dtApi, n = e.oLanguage, r = t.page.info(), i = r.recordsDisplay, a = r.recordsTotal, o = (this.s.lastScrollTop - this.s.baseScrollTop) / this.s.heights.row, u = Math.floor(this.s.baseRowTop + o) + 1;
      this.s.scrollType === "jump" && (u = Math.floor(this.s.topRowFloat) + 1);
      var v = u + Math.floor(this.s.heights.viewport / this.s.heights.row), b = v > i ? i : v, m;
      i === 0 && i == a ? m = n.sInfoEmpty + n.sInfoPostFix : i === 0 ? m = n.sInfoEmpty + " " + n.sInfoFiltered + n.sInfoPostFix : i == a ? m = n.sInfo + n.sInfoPostFix : m = n.sInfo + " " + n.sInfoFiltered + n.sInfoPostFix, m = this._macros(m, u, b, a, i);
      var x = n.fnInfoCallback;
      x && (m = x.call(
        e.oInstance,
        e,
        u,
        b,
        a,
        i,
        m
      ));
      var _ = e.aanFeatures.i;
      if (typeof _ < "u") {
        for (var T = 0, N = _.length; T < N; T++)
          _e(_[T]).html(m);
        _e(e.nTable).triggerHandler("info.dt");
      }
      _e("div.dt-info", t.table().container()).each(function() {
        _e(this).html(m), t.trigger("info", [t.settings()[0], this, m]);
      });
    }
  },
  /**
   * String replacement for info display. Basically the same as what DataTables does.
   *
   * @param {*} str
   * @param {*} start
   * @param {*} end
   * @param {*} max
   * @param {*} total
   * @returns Formatted string
   */
  _macros: function(e, t, n, r, i) {
    var a = this.s.dtApi, o = this.s.dt, u = o.fnFormatNumber;
    return e.replace(/_START_/g, u.call(o, t)).replace(/_END_/g, u.call(o, n)).replace(/_MAX_/g, u.call(o, r)).replace(/_TOTAL_/g, u.call(o, i)).replace(/_ENTRIES_/g, a.i18n("entries", "")).replace(/_ENTRIES-MAX_/g, a.i18n("entries", "", r)).replace(/_ENTRIES-TOTAL_/g, a.i18n("entries", "", i));
  },
  /**
   * Parse CSS height property string as number
   *
   * An attempt is made to parse the string as a number. Currently supported units are 'px',
   * 'vh', and 'rem'. 'em' is partially supported; it works as long as the parent element's
   * font size matches the body element. Zero is returned for unrecognized strings.
   *  @param {string} cssHeight CSS height property string
   *  @returns {number} height
   *  @private
   */
  _parseHeight: function(e) {
    var t, n = /^([+-]?(?:\d+(?:\.\d+)?|\.\d+))(px|em|rem|vh)$/.exec(
      e
    );
    if (n === null)
      return 0;
    var r = parseFloat(n[1]), i = n[2];
    return i === "px" ? t = r : i === "vh" ? t = r / 100 * _e(window).height() : i === "rem" ? t = r * parseFloat(_e(":root").css("font-size")) : i === "em" && (t = r * parseFloat(_e("body").css("font-size"))), t || 0;
  },
  /**
   * Scrolling function - fired whenever the scrolling position is changed.
   * This method needs to use the stored values to see if the table should be
   * redrawn as we are moving towards the end of the information that is
   * currently drawn or not. If needed, then it will redraw the table based on
   * the new position.
   *  @returns {void}
   *  @private
   */
  _scroll: function() {
    var e = this, t = this.s.heights, n = this.dom.scroller.scrollTop, r;
    if (!this.s.skip && !this.s.ingnoreScroll && n !== this.s.lastScrollTop) {
      if (this.s.dt.bFiltered || this.s.dt.bSorted) {
        this.s.lastScrollTop = 0;
        return;
      }
      if (clearTimeout(this.s.stateTO), this.s.stateTO = setTimeout(function() {
        e.s.dtApi.state.save(), e._info();
      }, 250), this.s.scrollType = Math.abs(n - this.s.lastScrollTop) > t.viewport ? "jump" : "cont", this.s.topRowFloat = this.s.scrollType === "cont" ? this.pixelsToRow(n, !1, !1) : this._domain("physicalToVirtual", n) / t.row, this.s.topRowFloat < 0 && (this.s.topRowFloat = 0), this.s.forceReposition || n < this.s.redrawTop || n > this.s.redrawBottom) {
        var i = Math.ceil(
          (this.s.displayBuffer - 1) / 2 * this.s.viewportRows
        );
        if (r = parseInt(this.s.topRowFloat, 10) - i, this.s.forceReposition = !1, r <= 0 ? r = 0 : r + this.s.dt._iDisplayLength > this.s.dt.fnRecordsDisplay() ? (r = this.s.dt.fnRecordsDisplay() - this.s.dt._iDisplayLength, r < 0 && (r = 0)) : r % 2 !== 0 && r++, this.s.targetTop = r, r != this.s.dt._iDisplayStart) {
          this.s.tableTop = _e(this.s.dt.nTable).offset().top, this.s.tableBottom = _e(this.s.dt.nTable).height() + this.s.tableTop;
          var a = function() {
            e.s.dt._iDisplayStart = e.s.targetTop, e.s.dtApi.draw("page");
          };
          this.s.dt.oFeatures.bServerSide ? (this.s.forceReposition = !0, _e(this.s.dt.nTable).triggerHandler("scroller-will-draw.dt"), k.versionCheck("2") ? e.s.dtApi.processing(!0) : this.s.dt.oApi._fnProcessingDisplay(this.s.dt, !0), clearTimeout(this.s.drawTO), this.s.drawTO = setTimeout(a, this.s.serverWait)) : a();
        }
      } else
        this.s.topRowFloat = this.pixelsToRow(n, !1, !0);
      if (this._info(), this.s.lastScrollTop = n, this.s.stateSaveThrottle(), this.s.scrollType === "jump" && this.s.mousedown && (this.s.labelVisible = !0), this.s.labelVisible) {
        var o = (t.viewport - t.labelHeight - t.xbar) / t.scroll;
        this.dom.label.html(
          this.s.dt.fnFormatNumber(
            parseInt(this.s.topRowFloat, 10) + 1
          )
        ).css("top", n + n * o).css("display", "block");
      }
    }
  },
  /**
   * Force the scrolling container to have height beyond that of just the
   * table that has been drawn so the user can scroll the whole data set.
   *
   * Note that if the calculated required scrolling height exceeds a maximum
   * value (1 million pixels - hard-coded) the forcing element will be set
   * only to that maximum value and virtual / physical domain transforms will
   * be used to allow Scroller to display tables of any number of records.
   *  @returns {void}
   *  @private
   */
  _scrollForce: function() {
    var e = this.s.heights, t = 1e6;
    e.virtual = e.row * this.s.dt.fnRecordsDisplay(), e.scroll = e.virtual, e.scroll > t && (e.scroll = t), this.dom.force.style.height = e.scroll > this.s.heights.row ? e.scroll + "px" : this.s.heights.row + "px";
  }
});
Mt.defaults = {
  /**
   * Scroller uses the boundary scaling factor to decide when to redraw the table - which it
   * typically does before you reach the end of the currently loaded data set (in order to
   * allow the data to look continuous to a user scrolling through the data). If given as 0
   * then the table will be redrawn whenever the viewport is scrolled, while 1 would not
   * redraw the table until the currently loaded data has all been shown. You will want
   * something in the middle - the default factor of 0.5 is usually suitable.
   *  @type     float
   *  @default  0.5
   *  @static
   */
  boundaryScale: 0.5,
  /**
   * The display buffer is what Scroller uses to calculate how many rows it should pre-fetch
   * for scrolling. Scroller automatically adjusts DataTables' display length to pre-fetch
   * rows that will be shown in "near scrolling" (i.e. just beyond the current display area).
   * The value is based upon the number of rows that can be displayed in the viewport (i.e.
   * a value of 1), and will apply the display range to records before before and after the
   * current viewport - i.e. a factor of 3 will allow Scroller to pre-fetch 1 viewport's worth
   * of rows before the current viewport, the current viewport's rows and 1 viewport's worth
   * of rows after the current viewport. Adjusting this value can be useful for ensuring
   * smooth scrolling based on your data set.
   *  @type     int
   *  @default  9
   *  @static
   */
  displayBuffer: 9,
  /**
   * Scroller will attempt to automatically calculate the height of rows for it's internal
   * calculations. However the height that is used can be overridden using this parameter.
   *  @type     int|string
   *  @default  auto
   *  @static
   */
  rowHeight: "auto",
  /**
   * When using server-side processing, Scroller will wait a small amount of time to allow
   * the scrolling to finish before requesting more data from the server. This prevents
   * you from DoSing your own server! The wait time can be configured by this parameter.
   *  @type     int
   *  @default  200
   *  @static
   */
  serverWait: 200
};
Mt.oDefaults = Mt.defaults;
Mt.version = "2.4.3";
_e(document).on("preInit.dt.dtscroller", function(e, t) {
  if (e.namespace === "dt") {
    var n = t.oInit.scroller, r = k.defaults.scroller;
    if (n || r) {
      var i = _e.extend({}, n, r);
      n !== !1 && new Mt(t, i);
    }
  }
});
_e.fn.dataTable.Scroller = Mt;
_e.fn.DataTable.Scroller = Mt;
var On = _e.fn.dataTable.Api;
On.register("scroller()", function() {
  return this;
});
On.register("scroller().rowToPixels()", function(e, t, n) {
  var r = this.context;
  if (r.length && r[0].oScroller)
    return r[0].oScroller.rowToPixels(e, t, n);
});
On.register("scroller().pixelsToRow()", function(e, t, n) {
  var r = this.context;
  if (r.length && r[0].oScroller)
    return r[0].oScroller.pixelsToRow(e, t, n);
});
On.register(
  ["scroller().scrollToRow()", "scroller.toPosition()"],
  function(e, t) {
    return this.iterator("table", function(n) {
      n.oScroller && n.oScroller.scrollToRow(e, t);
    }), this;
  }
);
On.register("row().scrollTo()", function(e) {
  var t = this;
  return this.iterator("row", function(n, r) {
    if (n.oScroller) {
      var i = t.rows({ order: "applied", search: "applied" }).indexes().indexOf(r);
      n.oScroller.scrollToRow(i, e);
    }
  }), this;
});
On.register("scroller.measure()", function(e) {
  return this.iterator("table", function(t) {
    t.oScroller && t.oScroller.measure(e);
  }), this;
});
On.register("scroller.page()", function() {
  var e = this.context;
  if (e.length && e[0].oScroller)
    return e[0].oScroller.pageInfo();
});
/*! AutoFill 2.7.1
 * © SpryMedia Ltd - datatables.net/license
 */
let ge = Me;
var ah = 0, Nt = function(e, t) {
  if (!k.versionCheck || !k.versionCheck("1.11"))
    throw "Warning: AutoFill requires DataTables 1.11 or greater";
  this.c = ge.extend(
    !0,
    {},
    k.defaults.autoFill,
    Nt.defaults,
    t
  ), this.s = {
    /** @type {DataTable.Api} DataTables' API instance */
    dt: new k.Api(e),
    /** @type {String} Unique namespace for events attached to the document */
    namespace: ".autoFill" + ah++,
    /** @type {Object} Cached dimension information for use in the mouse move event handler */
    scroll: {},
    /** @type {integer} Interval object used for smooth scrolling */
    scrollInterval: null,
    handle: {
      height: 0,
      width: 0
    },
    /**
     * Enabled setting
     * @type {Boolean}
     */
    enabled: !1
  }, this.dom = {
    closeButton: ge('<div class="dtaf-popover-close">&times;</div>'),
    /** @type {jQuery} AutoFill handle */
    handle: ge('<div class="dt-autofill-handle"/>'),
    /**
     * @type {Object} Selected cells outline - Need to use 4 elements,
     *   otherwise the mouse over if you back into the selected rectangle
     *   will be over that element, rather than the cells!
     */
    select: {
      top: ge('<div class="dt-autofill-select top"/>'),
      right: ge('<div class="dt-autofill-select right"/>'),
      bottom: ge('<div class="dt-autofill-select bottom"/>'),
      left: ge('<div class="dt-autofill-select left"/>')
    },
    /** @type {jQuery} Fill type chooser background */
    background: ge('<div class="dt-autofill-background"/>'),
    /** @type {jQuery} Fill type chooser */
    list: ge('<div class="dt-autofill-list">' + this.s.dt.i18n("autoFill.info", "") + "</div>").attr("aria-modal", !0).attr("role", "dialog").append('<div class="dt-autofill-list-items"></div>'),
    /** @type {jQuery} DataTables scrolling container */
    dtScroll: null,
    /** @type {jQuery} Offset parent element */
    offsetParent: null
  }, this._constructor();
};
ge.extend(Nt.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Public methods (exposed via the DataTables API below)
   */
  enabled: function() {
    return this.s.enabled;
  },
  enable: function(e) {
    var t = this;
    if (e === !1)
      return this.disable();
    this.s.enabled = !0, this._focusListener(), this.dom.handle.on("mousedown touchstart", function(r) {
      return t._mousedown(r), !1;
    }), ge(window).on("resize", function() {
      var r = ge("div.dt-autofill-handle");
      r.length > 0 && t.dom.attachedTo !== void 0 && t._attach(t.dom.attachedTo);
    });
    let n = function() {
      t.s.handle = {
        height: !1,
        width: !1
      }, ge(t.dom.handle).css({
        height: "",
        width: ""
      }), t.dom.attachedTo !== void 0 && t._attach(t.dom.attachedTo);
    };
    return ge(window).on("orientationchange", function() {
      setTimeout(function() {
        n(), setTimeout(n, 150);
      }, 50);
    }), this;
  },
  disable: function() {
    return this.s.enabled = !1, this._focusListenerRemove(), this;
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * Initialise the RowReorder instance
   *
   * @private
   */
  _constructor: function() {
    var e = this, t = this.s.dt, n = ge("div.dataTables_scrollBody, div.dt-scroll-body", this.s.dt.table().container());
    t.settings()[0].autoFill = this, n.length && (this.dom.dtScroll = n, n.css("position") === "static" && n.css("position", "relative")), this.c.enable !== !1 && this.enable(), t.on("destroy.autoFill", function() {
      e._focusListenerRemove();
    });
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Display the AutoFill drag handle by appending it to a table cell. This
   * is the opposite of the _detach method.
   *
   * @param  {node} node TD/TH cell to insert the handle into
   * @private
   */
  _attach: function(e) {
    var t = this.s.dt, n = t.cell(e).index(), r = this.dom.handle, i = this.s.handle;
    if (!n || t.columns(this.c.columns).indexes().indexOf(n.column) === -1) {
      this._detach();
      return;
    }
    this.dom.offsetParent || (this.dom.offsetParent = ge(t.table().node()).offsetParent()), (!i.height || !i.width) && (r.appendTo("body"), i.height = r.outerHeight(), i.width = r.outerWidth());
    var a = this._getPosition(e, this.dom.offsetParent);
    this.dom.attachedTo = e, r.css({
      top: a.top + e.offsetHeight - i.height,
      left: a.left + e.offsetWidth - i.width
    }).appendTo(this.dom.offsetParent);
  },
  /**
   * Determine can the fill type should be. This can be automatic, or ask the
   * end user.
   *
   * @param {array} cells Information about the selected cells from the key
   *     up function
   * @private
   */
  _actionSelector: function(e) {
    var t = this, n = this.s.dt, r = Nt.actions, i = [];
    if (ge.each(r, function(u, v) {
      v.available(n, e) && i.push(u);
    }), i.length === 1 && this.c.alwaysAsk === !1) {
      var a = r[i[0]].execute(n, e);
      this._update(a, e);
    } else if (i.length > 1 || this.c.alwaysAsk) {
      var o = this.dom.list.children("div.dt-autofill-list-items").empty();
      i.push("cancel"), ge.each(i, function(u, v) {
        o.append(
          ge("<button/>").html(r[v].option(n, e)).append(ge('<span class="dt-autofill-button"/>').html(n.i18n("autoFill.button", "&gt;"))).on("click", function(b) {
            if (b.target.nodeName.toLowerCase() === "button") {
              var m = r[v].execute(
                n,
                e,
                ge(this).closest("button")
              );
              t._update(m, e), t.dom.background.remove(), t.dom.list.remove();
            }
          })
        );
      }), this.dom.background.appendTo("body"), this.dom.background.one("click", function() {
        t.dom.background.remove(), t.dom.list.remove();
      }), this.dom.list.appendTo("body"), this.c.closeButton && (this.dom.list.prepend(this.dom.closeButton).addClass(Nt.classes.closeable), this.dom.closeButton.on("click", function() {
        return t.dom.background.click();
      })), this.dom.list.css("margin-top", this.dom.list.outerHeight() / 2 * -1);
    }
  },
  /**
   * Remove the AutoFill handle from the document
   *
   * @private
   */
  _detach: function() {
    this.dom.attachedTo = null, this.dom.handle.detach();
  },
  /**
   * Draw the selection outline by calculating the range between the start
   * and end cells, then placing the highlighting elements to draw a rectangle
   *
   * @param  {node}   target End cell
   * @param  {object} e      Originating event
   * @private
   */
  _drawSelection: function(e, t) {
    var n = this.s.dt, r = this.s.start, i = ge(this.dom.start), a = {
      row: this.c.vertical ? n.rows({ page: "current" }).nodes().indexOf(e.parentNode) : r.row,
      column: this.c.horizontal ? ge(e).index() : r.column
    }, o = n.column.index("toData", a.column), u = n.row(":eq(" + a.row + ")", { page: "current" }), v = ge(n.cell(u.index(), o).node());
    if (n.cell(v).any() && !(n.columns(this.c.columns).indexes().indexOf(o) === -1 || a.row === -1)) {
      this.s.end = a;
      var b, m, x, _, T, N;
      b = r.row < a.row ? i : v, m = r.row < a.row ? v : i, x = r.column < a.column ? i : v, _ = r.column < a.column ? v : i, b = this._getPosition(b.get(0)).top, x = this._getPosition(x.get(0)).left, T = this._getPosition(m.get(0)).top + m.outerHeight() - b, N = this._getPosition(_.get(0)).left + _.outerWidth() - x;
      var D = this.dom.select;
      D.top.css({
        top: b,
        left: x,
        width: N
      }), D.left.css({
        top: b,
        left: x,
        height: T
      }), D.bottom.css({
        top: b + T,
        left: x,
        width: N
      }), D.right.css({
        top: b,
        left: x + N,
        height: T
      });
    }
  },
  /**
   * Use the Editor API to perform an update based on the new data for the
   * cells
   *
   * @param {array} cells Information about the selected cells from the key
   *     up function
   * @private
   */
  _editor: function(e) {
    var t = this.s.dt, n = this.c.editor;
    if (n) {
      for (var r = {}, i = [], a = n.fields(), o = 0, u = e.length; o < u; o++)
        for (var v = 0, b = e[o].length; v < b; v++) {
          var m = e[o][v], x = t.settings()[0].aoColumns[m.index.column], _ = x.editField;
          if (_ === void 0)
            for (var T = x.mData, N = 0, D = a.length; N < D; N++) {
              var p = n.field(a[N]);
              if (p.dataSrc() === T) {
                _ = p.name();
                break;
              }
            }
          if (!_)
            throw "Could not automatically determine field data. Please see https://datatables.net/tn/11";
          r[_] || (r[_] = {});
          var l = t.row(m.index.row).id();
          r[_][l] = m.set, i.push(m.index);
        }
      n.bubble(i, !1).multiSet(r).submit(null, function() {
        n.close();
      });
    }
  },
  /**
   * Emit an event on the DataTable for listeners
   *
   * @param  {string} name Event name
   * @param  {array} args Event arguments
   * @private
   */
  _emitEvent: function(e, t) {
    this.s.dt.iterator("table", function(n, r) {
      ge(n.nTable).triggerHandler(e + ".dt", t);
    });
  },
  /**
   * Attach suitable listeners (based on the configuration) that will attach
   * and detach the AutoFill handle in the document.
   *
   * @private
   */
  _focusListener: function() {
    var e = this, t = this.s.dt, n = this.s.namespace, r = this.c.focus !== null ? this.c.focus : t.init().keys || t.settings()[0].keytable ? "focus" : "hover";
    r === "focus" ? t.on("key-focus.autoFill", function(i, a, o) {
      e._attach(o.node());
    }).on("key-blur.autoFill", function(i, a, o) {
      e._detach();
    }) : r === "click" ? (ge(t.table().body()).on("click" + n, "td, th", function(i) {
      e._attach(this);
    }), ge(document.body).on("click" + n, function(i) {
      ge(i.target).parents().filter(t.table().body()).length || e._detach();
    })) : ge(t.table().body()).on("mouseenter" + n + " touchstart" + n, "td, th", function(i) {
      e._attach(this);
    }).on("mouseleave" + n + "touchend" + n, function(i) {
      ge(i.relatedTarget).hasClass("dt-autofill-handle") || e._detach();
    });
  },
  _focusListenerRemove: function() {
    var e = this.s.dt;
    e.off(".autoFill"), ge(e.table().body()).off(this.s.namespace), ge(document.body).off(this.s.namespace);
  },
  /**
   * Get the position of a node, relative to another, including any scrolling
   * offsets.
   * @param  {Node}   node         Node to get the position of
   * @param  {jQuery} targetParent Node to use as the parent
   * @return {object}              Offset calculation
   * @private
   */
  _getPosition: function(e, t) {
    var n = e, r, i = 0, a = 0;
    t || (t = ge(ge(this.s.dt.table().node())[0].offsetParent));
    do {
      var o = n.offsetTop, u = n.offsetLeft;
      if (r = ge(n.offsetParent), i += o + parseInt(r.css("border-top-width") || 0) * 1, a += u + parseInt(r.css("border-left-width") || 0) * 1, n.nodeName.toLowerCase() === "body")
        break;
      n = r.get(0);
    } while (r.get(0) !== t.get(0));
    return {
      top: i,
      left: a
    };
  },
  /**
   * Start mouse drag - selects the start cell
   *
   * @param  {object} e Mouse down event
   * @private
   */
  _mousedown: function(e) {
    var t = this, n = this.s.dt;
    this.dom.start = this.dom.attachedTo, this.s.start = {
      row: n.rows({ page: "current" }).nodes().indexOf(ge(this.dom.start).parent()[0]),
      column: ge(this.dom.start).index()
    }, ge(document.body).on("mousemove.autoFill touchmove.autoFill", function(o) {
      t._mousemove(o), o.type === "touchmove" && ge(document.body).one("touchend.autoFill", function() {
        t._detach();
      });
    }).on("mouseup.autoFill touchend.autoFill", function(o) {
      t._mouseup(o);
    });
    var r = this.dom.select, i = ge(n.table().node()).offsetParent();
    r.top.appendTo(i), r.left.appendTo(i), r.right.appendTo(i), r.bottom.appendTo(i), this._drawSelection(this.dom.start, e), this.dom.handle.css("display", "none");
    var a = this.dom.dtScroll;
    this.s.scroll = {
      windowHeight: ge(window).height(),
      windowWidth: ge(window).width(),
      dtTop: a ? a.offset().top : null,
      dtLeft: a ? a.offset().left : null,
      dtHeight: a ? a.outerHeight() : null,
      dtWidth: a ? a.outerWidth() : null
    };
  },
  /**
   * Mouse drag - selects the end cell and update the selection display for
   * the end user
   *
   * @param  {object} e Mouse move event
   * @private
   */
  _mousemove: function(e) {
    var t = e.touches && e.touches.length ? document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) : e.target, n = t.nodeName.toLowerCase();
    n !== "td" && n !== "th" || (this._drawSelection(t, e), this._shiftScroll(e));
  },
  /**
   * End mouse drag - perform the update actions
   *
   * @param  {object} e Mouse up event
   * @private
   */
  _mouseup: function(e) {
    ge(document.body).off(".autoFill");
    var t = this, n = this.s.dt, r = this.dom.select;
    r.top.remove(), r.left.remove(), r.right.remove(), r.bottom.remove(), this.dom.handle.css("display", "block");
    var i = this.s.start, a = this.s.end;
    if (!(i.row === a.row && i.column === a.column)) {
      var o = n.cell(":eq(" + i.row + ")", i.column + ":visible", { page: "current" });
      if (ge("div.DTE", o.node()).length) {
        var u = n.editor();
        u.on("submitSuccess.dtaf close.dtaf", function() {
          u.off(".dtaf"), setTimeout(function() {
            t._mouseup(e);
          }, 100);
        }).on("submitComplete.dtaf preSubmitCancelled.dtaf close.dtaf", function() {
          u.off(".dtaf");
        }), u.submit();
        return;
      }
      for (var v = this._range(i.row, a.row), b = this._range(i.column, a.column), m = [], x = n.settings()[0], _ = x.aoColumns, T = n.columns(this.c.columns).indexes(), N = 0; N < v.length; N++)
        m.push(
          ge.map(b, function(D) {
            var p = n.row(":eq(" + v[N] + ")", { page: "current" }), l = n.cell(p.index(), D + ":visible"), d = l.data(), y = l.index(), E = _[y.column].editField;
            if (E !== void 0 && (d = k.util.get(E)(n.row(y.row).data())), T.indexOf(y.column) !== -1)
              return {
                cell: l,
                data: d,
                label: l.data(),
                index: y
              };
          })
        );
      this._actionSelector(m), clearInterval(this.s.scrollInterval), this.s.scrollInterval = null;
    }
  },
  /**
   * Create an array with a range of numbers defined by the start and end
   * parameters passed in (inclusive!).
   * 
   * @param  {integer} start Start
   * @param  {integer} end   End
   * @private
   */
  _range: function(e, t) {
    var n = [], r;
    if (e <= t)
      for (r = e; r <= t; r++)
        n.push(r);
    else
      for (r = e; r >= t; r--)
        n.push(r);
    return n;
  },
  /**
   * Move the window and DataTables scrolling during a drag to scroll new
   * content into view. This is done by proximity to the edge of the scrolling
   * container of the mouse - for example near the top edge of the window
   * should scroll up. This is a little complicated as there are two elements
   * that can be scrolled - the window and the DataTables scrolling view port
   * (if scrollX and / or scrollY is enabled).
   *
   * @param  {object} e Mouse move event object
   * @private
   */
  _shiftScroll: function(e) {
    var t = this, n = this.s.scroll, r = !1, i = 5, a = 65, o = e.type.includes("touch") ? e.touches[0].clientX : e.pageX - window.scrollX, u = e.type.includes("touch") ? e.touches[0].clientY : e.pageY - window.scrollY, v = u, b = o, m, x, _, T;
    v < a ? m = i * -1 : v > n.windowHeight - a && (m = i), b < a ? x = i * -1 : b > n.windowWidth - a && (x = i), n.dtTop !== null && u < n.dtTop + a ? _ = i * -1 : n.dtTop !== null && u > n.dtTop + n.dtHeight - a && (_ = i), n.dtLeft !== null && o < n.dtLeft + a ? T = i * -1 : n.dtLeft !== null && o > n.dtLeft + n.dtWidth - a && (T = i), m || x || _ || T ? (n.windowVert = m, n.windowHoriz = x, n.dtVert = _, n.dtHoriz = T, r = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), this.s.scrollInterval = null), !this.s.scrollInterval && r && (this.s.scrollInterval = setInterval(function() {
      if (window.scrollTo(window.scrollX + (n.windowHoriz ? n.windowHoriz : 0), window.scrollY + (n.windowVert ? n.windowVert : 0)), n.dtVert || n.dtHoriz) {
        var N = t.dom.dtScroll[0];
        n.dtVert && (N.scrollTop += n.dtVert), n.dtHoriz && (N.scrollLeft += n.dtHoriz);
      }
    }, 20));
  },
  /**
   * Update the DataTable after the user has selected what they want to do
   *
   * @param  {false|undefined} result Return from the `execute` method - can
   *   be false internally to do nothing. This is not documented for plug-ins
   *   and is used only by the cancel option.
   * @param {array} cells Information about the selected cells from the key
   *     up function, argumented with the set values
   * @private
   */
  _update: function(e, t) {
    if (e !== !1) {
      var n = this.s.dt, r, i = n.columns(this.c.columns).indexes();
      this._emitEvent("preAutoFill", [n, t]), this._editor(t);
      var a = this.c.update !== null ? this.c.update : !this.c.editor;
      if (a) {
        for (var o = 0, u = t.length; o < u; o++)
          for (var v = 0, b = t[o].length; v < b; v++)
            r = t[o][v], i.indexOf(r.index.column) !== -1 && r.cell.data(r.set);
        n.draw(!1);
      }
      this._emitEvent("autoFill", [n, t]);
    }
  }
});
Nt.actions = {
  increment: {
    available: function(e, t) {
      var n = t[0][0].label;
      return !isNaN(n - parseFloat(n));
    },
    option: function(e, t) {
      return e.i18n(
        "autoFill.increment",
        'Increment / decrement each cell by: <input type="number" value="1">'
      );
    },
    execute: function(e, t, n) {
      for (var r = t[0][0].data * 1, i = ge("input", n).val() * 1, a = 0, o = t.length; a < o; a++)
        for (var u = 0, v = t[a].length; u < v; u++)
          t[a][u].set = r, r += i;
    }
  },
  fill: {
    available: function(e, t) {
      return !0;
    },
    option: function(e, t) {
      return e.i18n("autoFill.fill", "Fill all cells with <i>%d</i>", t[0][0].label);
    },
    execute: function(e, t, n) {
      for (var r = t[0][0].data, i = 0, a = t.length; i < a; i++)
        for (var o = 0, u = t[i].length; o < u; o++)
          t[i][o].set = r;
    }
  },
  fillHorizontal: {
    available: function(e, t) {
      return t.length > 1 && t[0].length > 1;
    },
    option: function(e, t) {
      return e.i18n("autoFill.fillHorizontal", "Fill cells horizontally");
    },
    execute: function(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++)
        for (var a = 0, o = t[r].length; a < o; a++)
          t[r][a].set = t[r][0].data;
    }
  },
  fillVertical: {
    available: function(e, t) {
      return t.length > 1 && t[0].length > 1;
    },
    option: function(e, t) {
      return e.i18n("autoFill.fillVertical", "Fill cells vertically");
    },
    execute: function(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++)
        for (var a = 0, o = t[r].length; a < o; a++)
          t[r][a].set = t[0][a].data;
    }
  },
  // Special type that does not make itself available, but is added
  // automatically by AutoFill if a multi-choice list is shown. This allows
  // sensible code reuse
  cancel: {
    available: function() {
      return !1;
    },
    option: function(e) {
      return e.i18n("autoFill.cancel", "Cancel");
    },
    execute: function() {
      return !1;
    }
  }
};
Nt.version = "2.7.1";
Nt.defaults = {
  /** @type {Boolean} Ask user what they want to do, even for a single option */
  alwaysAsk: !1,
  closeButton: !0,
  /** @type {string|null} What will trigger a focus */
  focus: null,
  // focus, click, hover
  /** @type {column-selector} Columns to provide auto fill for */
  columns: "",
  // all
  /** @type {Boolean} Enable AutoFill on load */
  enable: !0,
  /** @type {boolean|null} Update the cells after a drag */
  update: null,
  // false is editor given, true otherwise
  /** @type {DataTable.Editor} Editor instance for automatic submission */
  editor: null,
  /** @type {boolean} Enable vertical fill */
  vertical: !0,
  /** @type {boolean} Enable horizontal fill */
  horizontal: !0
};
Nt.classes = {
  /** @type {String} Class used by the selection button */
  btn: "btn",
  closeable: "dtaf-popover-closeable"
};
var Qi = ge.fn.dataTable.Api;
Qi.register("autoFill()", function() {
  return this;
});
Qi.register("autoFill().enabled()", function() {
  var e = this.context[0];
  return e.autoFill ? e.autoFill.enabled() : !1;
});
Qi.register("autoFill().enable()", function(e) {
  return this.iterator("table", function(t) {
    t.autoFill && t.autoFill.enable(e);
  });
});
Qi.register("autoFill().disable()", function() {
  return this.iterator("table", function(e) {
    e.autoFill && e.autoFill.disable();
  });
});
ge(document).on("preInit.dt.autofill", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = t.oInit.autoFill, i = k.defaults.autoFill;
    if (r || i) {
      var a = ge.extend({}, r, i);
      r !== !1 && new Nt(t, a);
    }
  }
});
k.AutoFill = Nt;
ge.fn.DataTable.AutoFill = Nt;
/*! Bootstrap integration for DataTables' AutoFill
 * ©2015 SpryMedia Ltd - datatables.net/license
 */
k.AutoFill.classes.btn = "btn btn-primary";
/*! StateRestore 1.4.3
 * © SpryMedia Ltd - datatables.net/license
 */
let Et = Me;
(function() {
  var e, t;
  function n(_) {
    e = _, t = _.fn.dataTable;
  }
  var r = (
    /** @class */
    function() {
      function _(T, N, D, p, l, d) {
        if (p === void 0 && (p = void 0), l === void 0 && (l = !1), d === void 0 && (d = function() {
          return null;
        }), !t || !t.versionCheck || !t.versionCheck("1.10.0"))
          throw new Error("StateRestore requires DataTables 1.10 or newer");
        if (!t.Buttons)
          throw new Error("StateRestore requires Buttons");
        var y = new t.Api(T);
        this.classes = e.extend(!0, {}, _.classes), this.c = e.extend(!0, {}, _.defaults, N), this.s = {
          dt: y,
          identifier: D,
          isPreDefined: l,
          savedState: p,
          tableId: p && p.stateRestore ? p.stateRestore.tableId : void 0
        }, this.dom = {
          background: e('<div class="' + this.classes.background + '"/>'),
          closeButton: e('<div class="' + this.classes.closeButton + '">&times;</div>'),
          confirmation: e('<div class="' + this.classes.confirmation + '"/>'),
          confirmationButton: e('<button class="' + this.classes.confirmationButton + " " + this.classes.dtButton + '">'),
          confirmationTitleRow: e('<div class="' + this.classes.confirmationTitleRow + '"></div>'),
          dtContainer: e(this.s.dt.table().container()),
          duplicateError: e('<span class="' + this.classes.modalError + '">' + this.s.dt.i18n("stateRestore.duplicateError", this.c.i18n.duplicateError) + "</span>"),
          emptyError: e('<span class="' + this.classes.modalError + '">' + this.s.dt.i18n("stateRestore.emptyError", this.c.i18n.emptyError) + "</span>"),
          removeContents: e('<div class="' + this.classes.confirmationText + '"><span>' + this.s.dt.i18n("stateRestore.removeConfirm", this.c.i18n.removeConfirm).replace(/%s/g, _.entityEncode(this.s.identifier)) + "</span></div>"),
          removeError: e('<span class="' + this.classes.modalError + '">' + this.s.dt.i18n("stateRestore.removeError", this.c.i18n.removeError) + "</span>"),
          removeTitle: e('<h2 class="' + this.classes.confirmationTitle + '">' + this.s.dt.i18n("stateRestore.removeTitle", this.c.i18n.removeTitle) + "</h2>"),
          renameContents: e('<div class="' + this.classes.confirmationText + " " + this.classes.renameModal + '"><label class="' + this.classes.confirmationMessage + '">' + this.s.dt.i18n("stateRestore.renameLabel", this.c.i18n.renameLabel).replace(/%s/g, _.entityEncode(this.s.identifier)) + "</label></div>"),
          renameInput: e('<input class="' + this.classes.input + '" type="text"></input>'),
          renameTitle: e('<h2 class="' + this.classes.confirmationTitle + '">' + this.s.dt.i18n("stateRestore.renameTitle", this.c.i18n.renameTitle) + "</h2>")
        }, this.save(p, d, !l);
      }
      return _.prototype.remove = function(T) {
        var N, D = this;
        if (T === void 0 && (T = !1), !this.c.remove)
          return !1;
        var p, l = {
          action: "remove",
          stateRestore: (N = {}, N[this.s.identifier] = this.s.savedState, N)
        }, d = function() {
          D.dom.confirmation.trigger("dtsr-remove"), e(D.s.dt.table().node()).trigger("stateRestore-change"), D.dom.background.click(), D.dom.confirmation.remove(), e(document).unbind("keyup", function(y) {
            return D._keyupFunction(y);
          }), D.dom.confirmationButton.off("click");
        };
        return this.c.ajax ? typeof this.c.ajax == "string" && this.s.dt.settings()[0]._bInitComplete ? p = function() {
          return e.ajax({
            data: l,
            success: d,
            type: "POST",
            url: D.c.ajax
          }), !0;
        } : typeof this.c.ajax == "function" && (p = function() {
          return typeof D.c.ajax == "function" && D.c.ajax.call(D.s.dt, l, d), !0;
        }) : p = function() {
          try {
            localStorage.removeItem("DataTables_stateRestore_" + D.s.identifier + "_" + location.pathname + (D.s.tableId ? "_" + D.s.tableId : "")), d();
          } catch {
            return D.dom.confirmation.children("." + D.classes.modalError).remove(), D.dom.confirmation.append(D.dom.removeError), "remove";
          }
          return !0;
        }, T ? (this.dom.confirmation.appendTo(this.dom.dtContainer), e(this.s.dt.table().node()).trigger("dtsr-modal-inserted"), p(), this.dom.confirmation.remove()) : this._newModal(this.dom.removeTitle, this.s.dt.i18n("stateRestore.removeSubmit", this.c.i18n.removeSubmit), p, this.dom.removeContents), !0;
      }, _.prototype.compare = function(T) {
        if (this.c.saveState.order || (T.order = void 0), this.c.saveState.search || (T.search = void 0), this.c.saveState.columns && T.columns)
          for (var N = 0, D = T.columns.length; N < D; N++)
            typeof this.c.saveState.columns != "boolean" && !this.c.saveState.columns.visible && (T.columns[N].visible = void 0), typeof this.c.saveState.columns != "boolean" && !this.c.saveState.columns.search && (T.columns[N].search = void 0);
        else
          this.c.saveState.columns || (T.columns = void 0);
        this.c.saveState.paging || (T.page = void 0), this.c.saveState.searchBuilder || (T.searchBuilder = void 0), this.c.saveState.searchPanes || (T.searchPanes = void 0), this.c.saveState.select || (T.select = void 0), this.c.saveState.colReorder || (T.ColReorder = void 0), this.c.saveState.scroller || (T.scroller = void 0, t.Scroller !== void 0 && (T.start = 0)), this.c.saveState.paging || (T.start = 0), this.c.saveState.length || (T.length = void 0), delete T.time;
        var p = this.s.savedState;
        return delete p.time, delete p.c, delete p.stateRestore, this._deepCompare(T, p);
      }, _.prototype.destroy = function() {
        e.each(this.dom, function(T, N) {
          N.off().remove();
        });
      }, _.prototype.load = function() {
        var T = this, N = this.s.savedState, D = this.s.dt.settings()[0];
        N.time = +/* @__PURE__ */ new Date(), D.oLoadedState = e.extend(!0, {}, N), e("div.dt-button-background").click();
        var p = function() {
          var l = function(d, y) {
            setTimeout(function() {
              var E = y._iDisplayStart / y._iDisplayLength, O = N.start / N.length;
              E >= 0 && O >= 0 && E !== O && T.s.dt.page(O).draw(!1);
            }, 50);
          };
          T.s.dt.one("preDraw", l), T.s.dt.draw(!1);
        };
        return k.versionCheck("2") ? (this.s.dt.state(N), p()) : k.ext.oApi._fnImplementState(D, N, p), N;
      }, _.prototype.rename = function(T, N) {
        var D = this;
        if (T === void 0 && (T = null), !!this.c.rename) {
          var p = function() {
            var l;
            if (T === null) {
              var d = e("input." + D.classes.input.replace(/ /g, ".")).val();
              if (d.length === 0)
                return D.dom.confirmation.children("." + D.classes.modalError).remove(), D.dom.confirmation.append(D.dom.emptyError), "empty";
              if (N.includes(d))
                return D.dom.confirmation.children("." + D.classes.modalError).remove(), D.dom.confirmation.append(D.dom.duplicateError), "duplicate";
              T = d;
            }
            var y = {
              action: "rename",
              stateRestore: (l = {}, l[D.s.identifier] = T, l)
            }, E = function() {
              D.s.identifier = T, D.save(D.s.savedState, function() {
                return null;
              }, !1), D.dom.removeContents = e('<div class="' + D.classes.confirmationText + '"><span>' + D.s.dt.i18n("stateRestore.removeConfirm", D.c.i18n.removeConfirm).replace(/%s/g, D.s.identifier) + "</span></div>"), D.dom.confirmation.trigger("dtsr-rename"), D.dom.background.click(), D.dom.confirmation.remove(), e(document).unbind("keyup", function(O) {
                return D._keyupFunction(O);
              }), D.dom.confirmationButton.off("click");
            };
            if (D.c.ajax)
              typeof D.c.ajax == "string" && D.s.dt.settings()[0]._bInitComplete ? e.ajax({
                data: y,
                success: E,
                type: "POST",
                url: D.c.ajax
              }) : typeof D.c.ajax == "function" && D.c.ajax.call(D.s.dt, y, E);
            else
              try {
                localStorage.removeItem("DataTables_stateRestore_" + D.s.identifier + "_" + location.pathname + (D.s.tableId ? "_" + D.s.tableId : "")), E();
              } catch {
                return D.dom.confirmation.children("." + D.classes.modalError).remove(), D.dom.confirmation.append(D.dom.removeError), !1;
              }
            return !0;
          };
          if (T !== null) {
            if (N.includes(T))
              throw new Error(this.s.dt.i18n("stateRestore.duplicateError", this.c.i18n.duplicateError));
            if (T.length === 0)
              throw new Error(this.s.dt.i18n("stateRestore.emptyError", this.c.i18n.emptyError));
            this.dom.confirmation.appendTo(this.dom.dtContainer), e(this.s.dt.table().node()).trigger("dtsr-modal-inserted"), p(), this.dom.confirmation.remove();
          } else
            this.dom.renameInput.val(this.s.identifier), this.dom.renameContents.append(this.dom.renameInput), this._newModal(this.dom.renameTitle, this.s.dt.i18n("stateRestore.renameButton", this.c.i18n.renameButton), p, this.dom.renameContents);
        }
      }, _.prototype.save = function(T, N, D) {
        var p, l = this;
        if (D === void 0 && (D = !0), !this.c.save) {
          N && N.call(this);
          return;
        }
        var d;
        if (this.s.dt.state.save(), T === void 0)
          d = this.s.dt.state();
        else {
          if (typeof T != "object")
            return;
          d = T;
        }
        if (d.stateRestore ? (d.stateRestore.isPreDefined = this.s.isPreDefined, d.stateRestore.state = this.s.identifier, d.stateRestore.tableId = this.s.tableId) : d.stateRestore = {
          isPreDefined: this.s.isPreDefined,
          state: this.s.identifier,
          tableId: this.s.tableId
        }, this.s.savedState = d, this.c.saveState.order || (this.s.savedState.order = void 0), this.c.saveState.search || (this.s.savedState.search = void 0), this.c.saveState.columns && this.s.savedState.columns)
          for (var y = 0, E = this.s.savedState.columns.length; y < E; y++)
            typeof this.c.saveState.columns != "boolean" && !this.c.saveState.columns.visible && (this.s.savedState.columns[y].visible = void 0), typeof this.c.saveState.columns != "boolean" && !this.c.saveState.columns.search && (this.s.savedState.columns[y].search = void 0);
        else
          this.c.saveState.columns || (this.s.savedState.columns = void 0);
        if (this.c.saveState.searchBuilder || (this.s.savedState.searchBuilder = void 0), this.c.saveState.searchPanes || (this.s.savedState.searchPanes = void 0), this.c.saveState.select || (this.s.savedState.select = void 0), this.c.saveState.colReorder || (this.s.savedState.ColReorder = void 0), this.c.saveState.scroller || (this.s.savedState.scroller = void 0, t.Scroller !== void 0 && (this.s.savedState.start = 0)), this.c.saveState.paging || (this.s.savedState.start = 0), this.c.saveState.length || (this.s.savedState.length = void 0), this.s.savedState.c = this.c, this.s.savedState.c.splitSecondaries.length)
          for (var O = 0, f = this.s.savedState.c.splitSecondaries; O < f.length; O++) {
            var H = f[O];
            H.parent && (H.parent = void 0);
          }
        var Y = {
          action: "save",
          stateRestore: (p = {}, p[this.s.identifier] = this.s.savedState, p)
        }, q = function() {
          N && N.call(l), l.dom.confirmation.trigger("dtsr-save"), e(l.s.dt.table().node()).trigger("stateRestore-change");
        };
        this.c.ajax ? typeof this.c.ajax == "string" && D ? this.s.dt.settings()[0]._bInitComplete ? e.ajax({
          data: Y,
          success: q,
          type: "POST",
          url: this.c.ajax
        }) : this.s.dt.one("init", function() {
          e.ajax({
            data: Y,
            success: q,
            type: "POST",
            url: l.c.ajax
          });
        }) : typeof this.c.ajax == "function" && D ? this.c.ajax.call(this.s.dt, Y, q) : D || q() : (localStorage.setItem("DataTables_stateRestore_" + this.s.identifier + "_" + location.pathname + (this.s.tableId ? "_" + this.s.tableId : ""), JSON.stringify(this.s.savedState)), q());
      }, _.entityEncode = function(T) {
        return typeof T == "string" ? T.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : T;
      }, _.prototype._deepCompare = function(T, N) {
        if (T === null && N === null)
          return !0;
        if (T === null || N === null)
          return !1;
        var D = [T, N], p = [Object.keys(T).sort(), Object.keys(N).sort()], l, d;
        for (p[0].includes("scroller") && (l = p[0].indexOf("start"), l && p[0].splice(l, 1)), p[1].includes("scroller") && (l = p[1].indexOf("start"), l && p[1].splice(l, 1)), d = 0; d < p[0].length; d++) {
          if (p[0][d].indexOf("_") === 0) {
            p[0].splice(d, 1), d--;
            continue;
          }
          if (p[0][d] === "baseRowTop" || p[0][d] === "baseScrollTop" || p[0][d] === "scrollTop" || !this.c.saveState.paging && p[0][d] === "page") {
            p[0].splice(d, 1), d--;
            continue;
          }
        }
        for (d = 0; d < p[1].length; d++) {
          if (p[1][d].indexOf("_") === 0) {
            p[1].splice(d, 1), d--;
            continue;
          }
          if (p[1][d] === "baseRowTop" || p[1][d] === "baseScrollTop" || p[1][d] === "scrollTop" || !this.c.saveState.paging && p[0][d] === "page") {
            p[1].splice(d, 1), d--;
            continue;
          }
        }
        if (p[0].length === 0 && p[1].length > 0 || p[1].length === 0 && p[0].length > 0)
          return !1;
        for (d = 0; d < p[0].length; d++)
          p[1].includes(p[0][d]) || (p[0].splice(d, 1), d--);
        for (d = 0; d < p[1].length; d++)
          p[0].includes(p[1][d]) || (p[1].splice(d, 1), d--);
        for (d = 0; d < p[0].length; d++) {
          if (p[0][d] !== p[1][d] || typeof D[0][p[0][d]] != typeof D[1][p[1][d]])
            return !1;
          if (typeof D[0][p[0][d]] == "object") {
            if (Array.isArray(D[0][p[0][d]]) && Array.isArray(D[1][p[1][d]]) && D[0][p[0][d]].length !== D[1][p[0][d]].length || !this._deepCompare(D[0][p[0][d]], D[1][p[1][d]]))
              return !1;
          } else if (typeof D[0][p[0][d]] == "number" && typeof D[1][p[1][d]] == "number") {
            if (Math.round(D[0][p[0][d]]) !== Math.round(D[1][p[1][d]]))
              return !1;
          } else if (D[0][p[0][d]] !== D[1][p[1][d]])
            return !1;
        }
        return !0;
      }, _.prototype._keyupFunction = function(T) {
        T.key === "Enter" ? this.dom.confirmationButton.click() : T.key === "Escape" && e("div." + this.classes.background.replace(/ /g, ".")).click();
      }, _.prototype._newModal = function(T, N, D, p) {
        var l = this;
        this.dom.background.appendTo(this.dom.dtContainer), this.dom.confirmationTitleRow.empty().append(T), this.dom.confirmationButton.html(N), this.dom.confirmation.empty().append(this.dom.confirmationTitleRow).append(p).append(e('<div class="' + this.classes.confirmationButtons + '"></div>').append(this.dom.confirmationButton)).appendTo(this.dom.dtContainer), e(this.s.dt.table().node()).trigger("dtsr-modal-inserted");
        var d = p.children("input");
        d.length > 0 ? e(d[0]).focus() : this.dom.confirmationButton.focus();
        var y = e("div." + this.classes.background.replace(/ /g, "."));
        this.c.modalCloseButton && (this.dom.confirmation.append(this.dom.closeButton), this.dom.closeButton.on("click", function() {
          return y.click();
        })), this.dom.confirmationButton.on("click", function() {
          return D();
        }), this.dom.confirmation.on("click", function(E) {
          E.stopPropagation();
        }), y.one("click", function() {
          l.dom.background.remove(), l.dom.confirmation.remove(), e(document).unbind("keyup", function(E) {
            return l._keyupFunction(E);
          });
        }), e(document).on("keyup", function(E) {
          return l._keyupFunction(E);
        });
      }, _.version = "1.4.3", _.classes = {
        background: "dtsr-background",
        closeButton: "dtsr-popover-close",
        confirmation: "dtsr-confirmation",
        confirmationButton: "dtsr-confirmation-button",
        confirmationButtons: "dtsr-confirmation-buttons",
        confirmationMessage: "dtsr-confirmation-message dtsr-name-label",
        confirmationText: "dtsr-confirmation-text",
        confirmationTitle: "dtsr-confirmation-title",
        confirmationTitleRow: "dtsr-confirmation-title-row",
        dtButton: "dt-button",
        input: "dtsr-input",
        modalError: "dtsr-modal-error",
        renameModal: "dtsr-rename-modal"
      }, _.defaults = {
        _createInSaved: !1,
        ajax: !1,
        create: !0,
        creationModal: !1,
        i18n: {
          creationModal: {
            button: "Create",
            colReorder: "Column Order:",
            columns: {
              search: "Column Search:",
              visible: "Column Visibility:"
            },
            length: "Page Length:",
            name: "Name:",
            order: "Sorting:",
            paging: "Paging:",
            scroller: "Scroll Position:",
            search: "Search:",
            searchBuilder: "SearchBuilder:",
            searchPanes: "SearchPanes:",
            select: "Select:",
            title: "Create New State",
            toggleLabel: "Includes:"
          },
          duplicateError: "A state with this name already exists.",
          emptyError: "Name cannot be empty.",
          emptyStates: "No saved states",
          removeConfirm: 'Are you sure you want to remove "%s"?',
          removeError: "Failed to remove state.",
          removeJoiner: " and ",
          removeSubmit: "Remove",
          removeTitle: "Remove State",
          renameButton: "Rename",
          renameLabel: 'New Name for "%s":',
          renameTitle: "Rename State"
        },
        modalCloseButton: !0,
        remove: !0,
        rename: !0,
        save: !0,
        saveState: {
          colReorder: !0,
          columns: {
            search: !0,
            visible: !0
          },
          length: !0,
          order: !0,
          paging: !0,
          scroller: !0,
          search: !0,
          searchBuilder: !0,
          searchPanes: !0,
          select: !0
        },
        splitSecondaries: [
          "updateState",
          "renameState",
          "removeState"
        ],
        toggle: {
          colReorder: !1,
          columns: {
            search: !1,
            visible: !1
          },
          length: !1,
          order: !1,
          paging: !1,
          scroller: !1,
          search: !1,
          searchBuilder: !1,
          searchPanes: !1,
          select: !1
        },
        createButton: null,
        createState: null
      }, _;
    }()
  ), i, a;
  function o(_) {
    i = _, a = _.fn.dataTable;
  }
  var u = (
    /** @class */
    function() {
      function _(T, N) {
        var D = this;
        if (!a || !a.versionCheck || !a.versionCheck("1.10.0"))
          throw new Error("StateRestore requires DataTables 1.10 or newer");
        if (!a.Buttons)
          throw new Error("StateRestore requires Buttons");
        var p = new a.Api(T);
        if (this.classes = i.extend(!0, {}, _.classes), p.settings()[0]._stateRestore === void 0) {
          this.c = i.extend(!0, {}, _.defaults, N), this.s = {
            dt: p,
            hasColReorder: a.ColReorder !== void 0,
            hasScroller: a.Scroller !== void 0,
            hasSearchBuilder: a.SearchBuilder !== void 0,
            hasSearchPanes: a.SearchPanes !== void 0,
            hasSelect: a.select !== void 0,
            states: []
          }, this.s.dt.on("xhr", function(y, E, O) {
            O && O.stateRestore && D._addPreDefined(O.stateRestore);
          }), this.dom = {
            background: i('<div class="' + this.classes.background + '"/>'),
            checkboxInputRow: i('<div class="' + this.classes.formRow + '"><label class="' + this.classes.nameLabel + '">' + this.s.dt.i18n("stateRestore.creationModal.toggleLabel", this.c.i18n.creationModal.toggleLabel) + '</label><div class="dtsr-input"></div></div>'),
            closeButton: i('<div class="' + this.classes.closeButton + '">x</div>'),
            colReorderToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.colReorderToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.colReorder", this.c.i18n.creationModal.colReorder) + "</div>"),
            columnsSearchToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.columnsSearchToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.columns.search", this.c.i18n.creationModal.columns.search) + "</div>"),
            columnsVisibleToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.columnsVisibleToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.columns.visible", this.c.i18n.creationModal.columns.visible) + "</div>"),
            confirmation: i('<div class="' + this.classes.confirmation + '"/>'),
            confirmationTitleRow: i('<div class="' + this.classes.confirmationTitleRow + '"></div>'),
            createButtonRow: i('<div class="' + this.classes.formRow + " " + this.classes.modalFoot + '"><button class="' + this.classes.creationButton + " " + this.classes.dtButton + '">' + this.s.dt.i18n("stateRestore.creationModal.button", this.c.i18n.creationModal.button) + "</button></div>"),
            creation: i('<div class="' + this.classes.creation + '"/>'),
            creationForm: i('<div class="' + this.classes.creationForm + '"/>'),
            creationTitle: i('<div class="' + this.classes.creationText + '"><h2 class="' + this.classes.creationTitle + '">' + this.s.dt.i18n("stateRestore.creationModal.title", this.c.i18n.creationModal.title) + "</h2></div>"),
            dtContainer: i(this.s.dt.table().container()),
            duplicateError: i('<span class="' + this.classes.modalError + '">' + this.s.dt.i18n("stateRestore.duplicateError", this.c.i18n.duplicateError) + "</span>"),
            emptyError: i('<span class="' + this.classes.modalError + '">' + this.s.dt.i18n("stateRestore.emptyError", this.c.i18n.emptyError) + "</span>"),
            lengthToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.lengthToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.length", this.c.i18n.creationModal.length) + "</div>"),
            nameInputRow: i('<div class="' + this.classes.formRow + '"><label class="' + this.classes.nameLabel + '">' + this.s.dt.i18n("stateRestore.creationModal.name", this.c.i18n.creationModal.name) + '</label><div class="dtsr-input"><input class="' + this.classes.nameInput + '" type="text"></div></div>'),
            orderToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.orderToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.order", this.c.i18n.creationModal.order) + "</div>"),
            pagingToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.pagingToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.paging", this.c.i18n.creationModal.paging) + "</div>"),
            removeContents: i('<div class="' + this.classes.confirmationText + '"><span></span></div>'),
            removeTitle: i('<div class="' + this.classes.creationText + '"><h2 class="' + this.classes.creationTitle + '">' + this.s.dt.i18n("stateRestore.removeTitle", this.c.i18n.removeTitle) + "</h2></div>"),
            scrollerToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.scrollerToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.scroller", this.c.i18n.creationModal.scroller) + "</div>"),
            searchBuilderToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.searchBuilderToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.searchBuilder", this.c.i18n.creationModal.searchBuilder) + "</div>"),
            searchPanesToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.searchPanesToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.searchPanes", this.c.i18n.creationModal.searchPanes) + "</div>"),
            searchToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.searchToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.search", this.c.i18n.creationModal.search) + "</div>"),
            selectToggle: i('<div class="' + this.classes.checkLabel + '"><input type="checkbox" class="' + this.classes.selectToggle + " " + this.classes.checkBox + '" checked>' + this.s.dt.i18n("stateRestore.creationModal.select", this.c.i18n.creationModal.select) + "</div>")
          }, p.settings()[0]._stateRestore = this, this._searchForStates(), this._addPreDefined(this.c.preDefined);
          var l, d = {
            action: "load"
          };
          return typeof this.c.ajax == "function" ? l = function() {
            typeof D.c.ajax == "function" && D.c.ajax.call(D.s.dt, d, function(y) {
              return D._addPreDefined(y);
            });
          } : typeof this.c.ajax == "string" && (l = function() {
            i.ajax({
              data: d,
              dataType: "json",
              success: function(y) {
                D._addPreDefined(y);
              },
              type: "POST",
              url: D.c.ajax
            });
          }), typeof l == "function" && (this.s.dt.settings()[0]._bInitComplete ? l() : this.s.dt.one("preInit.dtsr", function() {
            l();
          })), this.s.dt.on("destroy.dtsr", function() {
            D.destroy();
          }), this.s.dt.on("draw.dtsr buttons-action.dtsr", function() {
            return D.findActive();
          }), this;
        }
      }
      return _.prototype.addState = function(T, N, D) {
        var p = this;
        if (!(!this.c.create || !this.c.save)) {
          var l = this.getState(T), d = function(E, O) {
            if (E.length === 0)
              return "empty";
            if (N.includes(E))
              return "duplicate";
            p.s.dt.state.save();
            var f = p, H = function() {
              f.s.states.push(this), f._collectionRebuild();
            }, Y = p.s.dt.state();
            if (Y.stateRestore = {
              isPredefined: !1,
              state: E,
              tableId: p.s.dt.table().node().id
            }, O.saveState) {
              for (var q = p.c.saveState, K = 0, ne = Object.keys(O.saveState); K < ne.length; K++) {
                var F = ne[K];
                if (typeof O.saveState[F] == "object")
                  for (var S = 0, A = Object.keys(O.saveState[F]); S < A.length; S++) {
                    var P = A[S];
                    O.saveState[F][P] || (q[F][P] = !1);
                  }
                else
                  O.saveState[F] || (q[F] = !1);
              }
              p.c.saveState = q;
            }
            var L = new r(p.s.dt.settings()[0], i.extend(!0, {}, p.c, D), E, Y, !1, H);
            return i(p.s.dt.table().node()).on("dtsr-modal-inserted", function() {
              L.dom.confirmation.one("dtsr-remove", function() {
                return p._removeCallback(L.s.identifier);
              }), L.dom.confirmation.one("dtsr-rename", function() {
                return p._collectionRebuild();
              }), L.dom.confirmation.one("dtsr-save", function() {
                return p._collectionRebuild();
              });
            }), !0;
          };
          if (l === null)
            if (this.c.creationModal || D !== void 0 && D.creationModal)
              this._creationModal(d, T, D);
            else {
              var y = d(T, {});
              if (y === "empty")
                throw new Error(this.s.dt.i18n("stateRestore.emptyError", this.c.i18n.emptyError));
              if (y === "duplicate")
                throw new Error(this.s.dt.i18n("stateRestore.duplicateError", this.c.i18n.duplicateError));
            }
          else
            throw new Error(this.s.dt.i18n("stateRestore.duplicateError", this.c.i18n.duplicateError));
        }
      }, _.prototype.removeAll = function(T) {
        if (this.s.states.length !== 0) {
          var N = this.s.states.map(function(p) {
            return p.s.identifier;
          }), D = N[0];
          N.length > 1 && (D = N.slice(0, -1).join(", ") + this.s.dt.i18n("stateRestore.removeJoiner", this.c.i18n.removeJoiner) + N.slice(-1)), i(this.dom.removeContents.children("span")).html(this.s.dt.i18n("stateRestore.removeConfirm", this.c.i18n.removeConfirm).replace(/%s/g, D)), this._newModal(this.dom.removeTitle, this.s.dt.i18n("stateRestore.removeSubmit", this.c.i18n.removeSubmit), T, this.dom.removeContents);
        }
      }, _.prototype.destroy = function() {
        for (var T = 0, N = this.s.states; T < N.length; T++) {
          var D = N[T];
          D.destroy();
        }
        i.each(this.dom, function(p, l) {
          l.off().remove();
        }), this.s.states = [], this.s.dt.off(".dtsr"), i(this.s.dt.table().node()).off(".dtsr");
      }, _.prototype.findActive = function() {
        this.s.dt.state.save();
        for (var T = this.s.dt.state(), N, D = this.s.dt.buttons().nodes(), p = 0, l = D; p < l.length; p++)
          N = l[p], (i(N).hasClass("dtsr-state") || i(N).children().hasClass("dtsr-state")) && this.s.dt.button(N).active(!1);
        for (var d = [], y = 0, E = this.s.states; y < E.length; y++) {
          var O = E[y];
          if (O.compare(T)) {
            d.push({
              data: O.s.savedState,
              name: O.s.identifier
            });
            for (var f = 0, H = D; f < H.length; f++) {
              N = H[f];
              var Y = this.s.dt.button(N);
              if (Y.text() === O.s.identifier) {
                Y.active(!0);
                break;
              }
            }
          }
        }
        return d;
      }, _.prototype.getState = function(T) {
        for (var N = 0, D = this.s.states; N < D.length; N++) {
          var p = D[N];
          if (p.s.identifier === T)
            return p;
        }
        return null;
      }, _.prototype.getStates = function(T) {
        if (T === void 0)
          return this.s.states;
        for (var N = [], D = 0, p = T; D < p.length; D++) {
          for (var l = p[D], d = !1, y = 0, E = this.s.states; y < E.length; y++) {
            var O = E[y];
            if (l === O.s.identifier) {
              N.push(O), d = !0;
              break;
            }
          }
          d || N.push(void 0);
        }
        return N;
      }, _.prototype._addPreDefined = function(T) {
        for (var N = this, D = Object.keys(T).sort(function(O, f) {
          return O > f ? 1 : O < f ? -1 : 0;
        }), p = function(O) {
          for (var f = 0; f < l.s.states.length; f++)
            l.s.states[f].s.identifier === O && l.s.states.splice(f, 1);
          var H = l, Y = function() {
            H.s.states.push(this), H._collectionRebuild();
          }, q = l._fixTypes(T[O]), K = i.extend(!0, {}, l.c, q.c !== void 0 ? {
            saveState: q.c.saveState,
            remove: q.c.remove,
            rename: q.c.rename,
            save: q.c.save
          } : void 0, !0);
          l.c.createState && l.c.createState(K, q);
          var ne = new r(l.s.dt, K, O, q, !0, Y);
          i(l.s.dt.table().node()).on("dtsr-modal-inserted", function() {
            ne.dom.confirmation.one("dtsr-remove", function() {
              return N._removeCallback(ne.s.identifier);
            }), ne.dom.confirmation.one("dtsr-rename", function() {
              return N._collectionRebuild();
            }), ne.dom.confirmation.one("dtsr-save", function() {
              return N._collectionRebuild();
            });
          });
        }, l = this, d = 0, y = D; d < y.length; d++) {
          var E = y[d];
          p(E);
        }
      }, _.prototype._collectionRebuild = function() {
        var T = this.s.dt.button("SaveStateRestore:name"), N = [], D;
        if (T[0]) {
          var p = T.index().split("-");
          for (N = T[0].inst.c.buttons, D = 0; D < p.length; D++)
            if (N[p[D]].buttons)
              N = N[p[D]].buttons;
            else {
              N = [];
              break;
            }
        }
        for (D = 0; D < N.length; D++)
          N[D].extend === "stateRestore" && (N.splice(D, 1), D--);
        this.c._createInSaved && N.push("createState");
        var l = '<span class="' + this.classes.emptyStates + '">' + this.s.dt.i18n("stateRestore.emptyStates", this.c.i18n.emptyStates) + "</span>";
        if (this.s.states.length === 0)
          N.includes(l) || N.push(l);
        else {
          for (; N.includes(l); )
            N.splice(N.indexOf(l), 1);
          this.s.states = this.s.states.sort(function(ne, F) {
            var S = ne.s.identifier, A = F.s.identifier;
            return S > A ? 1 : S < A ? -1 : 0;
          });
          for (var d = 0, y = this.s.states; d < y.length; d++) {
            var E = y[d], O = this.c.splitSecondaries.slice();
            O.includes("updateState") && (!this.c.save || !E.c.save) && O.splice(O.indexOf("updateState"), 1), O.includes("renameState") && (!this.c.save || !E.c.save || !this.c.rename || !E.c.rename) && O.splice(O.indexOf("renameState"), 1), O.includes("removeState") && (!this.c.remove || !E.c.remove) && O.splice(O.indexOf("removeState"), 1);
            var f = {
              _stateRestore: E,
              attr: {
                title: E.s.identifier
              },
              config: {
                split: O
              },
              extend: "stateRestore",
              text: r.entityEncode(E.s.identifier),
              popoverTitle: r.entityEncode(E.s.identifier)
            };
            this.c.createButton && this.c.createButton(f, E.s.savedState), N.push(f);
          }
        }
        T.collectionRebuild(N);
        for (var H = this.s.dt.buttons(), Y = 0, q = H; Y < q.length; Y++) {
          var K = q[Y];
          i(K.node).hasClass("dtsr-removeAllStates") && (this.s.states.length === 0 ? this.s.dt.button(K.node).disable() : this.s.dt.button(K.node).enable());
        }
      }, _.prototype._creationModal = function(T, N, D) {
        var p = this;
        this.dom.creation.empty(), this.dom.creationForm.empty(), this.dom.nameInputRow.find("input").val(N), this.dom.creationForm.append(this.dom.nameInputRow);
        var l = this.s.dt.settings()[0].oInit, d, y = [], E = D !== void 0 && D.toggle !== void 0;
        ((!E || D.toggle.order === void 0) && this.c.toggle.order || E && D.toggle.order) && this.c.saveState.order && (l.ordering === void 0 || l.ordering) && y.push(this.dom.orderToggle), ((!E || D.toggle.search === void 0) && this.c.toggle.search || E && D.toggle.search) && this.c.saveState.search && (l.searching === void 0 || l.searching) && y.push(this.dom.searchToggle), ((!E || D.toggle.paging === void 0) && this.c.toggle.paging || E && D.toggle.paging) && this.c.saveState.paging && (l.paging === void 0 || l.paging) && y.push(this.dom.pagingToggle), ((!E || D.toggle.length === void 0) && this.c.toggle.length || E && D.toggle.length) && this.c.saveState.length && (l.length === void 0 || l.length) && y.push(this.dom.lengthToggle), this.s.hasColReorder && ((!E || D.toggle.colReorder === void 0) && this.c.toggle.colReorder || E && D.toggle.colReorder) && this.c.saveState.colReorder && y.push(this.dom.colReorderToggle), this.s.hasScroller && ((!E || D.toggle.scroller === void 0) && this.c.toggle.scroller || E && D.toggle.scroller) && this.c.saveState.scroller && y.push(this.dom.scrollerToggle), this.s.hasSearchBuilder && ((!E || D.toggle.searchBuilder === void 0) && this.c.toggle.searchBuilder || E && D.toggle.searchBuilder) && this.c.saveState.searchBuilder && y.push(this.dom.searchBuilderToggle), this.s.hasSearchPanes && ((!E || D.toggle.searchPanes === void 0) && this.c.toggle.searchPanes || E && D.toggle.searchPanes) && this.c.saveState.searchPanes && y.push(this.dom.searchPanesToggle), this.s.hasSelect && ((!E || D.toggle.select === void 0) && this.c.toggle.select || E && D.toggle.select) && this.c.saveState.select && y.push(this.dom.selectToggle), typeof this.c.toggle.columns == "boolean" && ((!E || D.toggle.order === void 0) && this.c.toggle.columns || E && D.toggle.order) && this.c.saveState.columns ? (y.push(this.dom.columnsSearchToggle), y.push(this.dom.columnsVisibleToggle)) : ((!E || D.toggle.columns === void 0) && typeof this.c.toggle.columns != "boolean" || typeof D.toggle.order != "boolean") && (typeof this.c.saveState.columns != "boolean" && this.c.saveState.columns ? (
          // columns.search is defined when passed in
          ((E && D.toggle.columns !== void 0 && typeof D.toggle.columns != "boolean" && D.toggle.columns.search || // Columns search is not defined when passed in but is in defaults
          (!E || D.toggle.columns === void 0 || typeof D.toggle.columns != "boolean" && D.toggle.columns.search === void 0) && typeof this.c.toggle.columns != "boolean" && this.c.toggle.columns.search) && this.c.saveState.columns.search && y.push(this.dom.columnsSearchToggle), // columns.visible is defined when passed in
          (E && D.toggle.columns !== void 0 && typeof D.toggle.columns != "boolean" && D.toggle.columns.visible || // Columns visible is not defined when passed in but is in defaults
          (!E || D.toggle.columns === void 0 || typeof D.toggle.columns != "boolean" && D.toggle.columns.visible === void 0) && typeof this.c.toggle.columns != "boolean" && this.c.toggle.columns.visible) && this.c.saveState.columns.visible && y.push(this.dom.columnsVisibleToggle))
        ) : this.c.saveState.columns && (y.push(this.dom.columnsSearchToggle), y.push(this.dom.columnsVisibleToggle))), y.sort(function(A, P) {
          var L = A.text(), V = P.text();
          return L < V ? -1 : L > V ? 1 : 0;
        });
        for (var O = this.dom.checkboxInputRow.css("display", y.length ? "block" : "none").appendTo(this.dom.creationForm).find("div.dtsr-input").empty(), f = 0, H = y; f < H.length; f++)
          d = H[f], O.append(d);
        this.dom.background.appendTo(this.dom.dtContainer), this.dom.creation.append(this.dom.creationTitle).append(this.dom.creationForm).append(this.dom.createButtonRow).appendTo(this.dom.dtContainer), i(this.s.dt.table().node()).trigger("dtsr-modal-inserted");
        for (var Y = 0, q = y; Y < q.length; Y++)
          d = q[Y], i(d.children("label:last-child")).on("click", function() {
            d.children("input").prop("checked", !d.children("input").prop("checked"));
          });
        var K = i("button." + this.classes.creationButton.replace(/ /g, ".")), ne = this.dom.creationForm.find("input");
        ne.length > 0 ? i(ne[0]).focus() : K.focus();
        var F = i("div." + this.classes.background.replace(/ /g, ".")), S = function(A) {
          A.key === "Enter" ? K.click() : A.key === "Escape" && F.click();
        };
        this.c.modalCloseButton && (this.dom.creation.append(this.dom.closeButton), this.dom.closeButton.on("click", function() {
          return F.click();
        })), K.on("click", function() {
          var A = {
            colReorder: p.dom.colReorderToggle.find("input").is(":checked"),
            columns: {
              search: p.dom.columnsSearchToggle.find("input").is(":checked"),
              visible: p.dom.columnsVisibleToggle.find("input").is(":checked")
            },
            length: p.dom.lengthToggle.find("input").is(":checked"),
            order: p.dom.orderToggle.find("input").is(":checked"),
            paging: p.dom.pagingToggle.find("input").is(":checked"),
            scroller: p.dom.scrollerToggle.find("input").is(":checked"),
            search: p.dom.searchToggle.find("input").is(":checked"),
            searchBuilder: p.dom.searchBuilderToggle.find("input").is(":checked"),
            searchPanes: p.dom.searchPanesToggle.find("input").is(":checked"),
            select: p.dom.selectToggle.find("input").is(":checked")
          }, P = T(i("input." + p.classes.nameInput.replace(/ /g, ".")).val(), { saveState: A });
          P === !0 ? (p.dom.background.remove(), p.dom.creation.remove(), i(document).unbind("keyup", S)) : (p.dom.creation.children("." + p.classes.modalError).remove(), p.dom.creation.append(p.dom[P + "Error"]));
        }), F.one("click", function() {
          p.dom.background.remove(), p.dom.creation.remove(), i(document).unbind("keyup", S), p._collectionRebuild();
        }), i(document).on("keyup", S), this.s.dt.state.save();
      }, _.prototype._fixTypes = function(T) {
        var N, D = function(l, d) {
          var y = l[d];
          y !== void 0 && (l[d] = typeof y == "number" ? y : parseInt(y));
        }, p = function(l, d) {
          var y = l[d];
          y !== void 0 && (l[d] = typeof y != "string" ? y : y === "true");
        };
        if (D(T, "start"), D(T, "length"), D(T, "time"), T.order)
          for (N = 0; N < T.order.length; N++)
            D(T.order[N], 0);
        if (T.search && (p(T.search, "caseInsensitive"), p(T.search, "regex"), p(T.search, "smart"), p(T.search, "visible"), p(T.search, "return")), T.columns)
          for (N = 0; N < T.columns.length; N++)
            p(T.columns[N], "caseInsensitive"), p(T.columns[N], "regex"), p(T.columns[N], "smart"), p(T.columns[N], "visible");
        if (T.colReorder)
          for (N = 0; N < T.colReorder.length; N++)
            D(T.colReorder, N);
        return T;
      }, _.prototype._removeCallback = function(T) {
        for (var N = 0; N < this.s.states.length; N++)
          this.s.states[N].s.identifier === T && (this.s.states.splice(N, 1), N--);
        return this._collectionRebuild(), !0;
      }, _.prototype._newModal = function(T, N, D, p) {
        var l = this;
        this.dom.background.appendTo(this.dom.dtContainer), this.dom.confirmationTitleRow.empty().append(T);
        var d = i('<button class="' + this.classes.confirmationButton + " " + this.classes.dtButton + '">' + N + "</button>");
        this.dom.confirmation.empty().append(this.dom.confirmationTitleRow).append(p).append(i('<div class="' + this.classes.confirmationButtons + '"></div>').append(d)).appendTo(this.dom.dtContainer), i(this.s.dt.table().node()).trigger("dtsr-modal-inserted");
        var y = p.children("input");
        y.length > 0 ? i(y[0]).focus() : d.focus();
        var E = i("div." + this.classes.background.replace(/ /g, ".")), O = function(f) {
          f.key === "Enter" ? d.click() : f.key === "Escape" && E.click();
        };
        d.on("click", function() {
          var f = D(!0);
          f === !0 ? (l.dom.background.remove(), l.dom.confirmation.remove(), i(document).unbind("keyup", O), d.off("click")) : (l.dom.confirmation.children("." + l.classes.modalError).remove(), l.dom.confirmation.append(l.dom[f + "Error"]));
        }), this.dom.confirmation.on("click", function(f) {
          f.stopPropagation();
        }), E.one("click", function() {
          l.dom.background.remove(), l.dom.confirmation.remove(), i(document).unbind("keyup", O);
        }), i(document).on("keyup", O);
      }, _.prototype._searchForStates = function() {
        for (var T = this, N = Object.keys(localStorage), D = function(E) {
          if (E.startsWith("DataTables_stateRestore_") && (E.endsWith(location.pathname) || E.endsWith(location.pathname + "_" + p.s.dt.table().node().id))) {
            var O = JSON.parse(localStorage.getItem(E));
            if (O.stateRestore.isPreDefined || O.stateRestore.tableId && O.stateRestore.tableId !== p.s.dt.table().node().id)
              return "continue";
            var f = p, H = function() {
              this.s.savedState = O, f.s.states.push(this), f._collectionRebuild();
            }, Y = new r(p.s.dt, i.extend(!0, {}, p.c, { saveState: O.c.saveState }), O.stateRestore.state, O, !1, H);
            i(p.s.dt.table().node()).on("dtsr-modal-inserted", function() {
              Y.dom.confirmation.one("dtsr-remove", function() {
                return T._removeCallback(Y.s.identifier);
              }), Y.dom.confirmation.one("dtsr-rename", function() {
                return T._collectionRebuild();
              }), Y.dom.confirmation.one("dtsr-save", function() {
                return T._collectionRebuild();
              });
            });
          }
        }, p = this, l = 0, d = N; l < d.length; l++) {
          var y = d[l];
          D(y);
        }
      }, _.version = "1.0.0", _.classes = {
        background: "dtsr-background",
        checkBox: "dtsr-check-box",
        checkLabel: "dtsr-check-label",
        checkRow: "dtsr-check-row",
        closeButton: "dtsr-popover-close",
        colReorderToggle: "dtsr-colReorder-toggle",
        columnsSearchToggle: "dtsr-columns-search-toggle",
        columnsVisibleToggle: "dtsr-columns-visible-toggle",
        confirmation: "dtsr-confirmation",
        confirmationButton: "dtsr-confirmation-button",
        confirmationButtons: "dtsr-confirmation-buttons",
        confirmationMessage: "dtsr-confirmation-message dtsr-name-label",
        confirmationText: "dtsr-confirmation-text",
        confirmationTitle: "dtsr-confirmation-title",
        confirmationTitleRow: "dtsr-confirmation-title-row",
        creation: "dtsr-creation",
        creationButton: "dtsr-creation-button",
        creationForm: "dtsr-creation-form",
        creationText: "dtsr-creation-text",
        creationTitle: "dtsr-creation-title",
        dtButton: "dt-button",
        emptyStates: "dtsr-emptyStates",
        formRow: "dtsr-form-row",
        leftSide: "dtsr-left",
        lengthToggle: "dtsr-length-toggle",
        modalError: "dtsr-modal-error",
        modalFoot: "dtsr-modal-foot",
        nameInput: "dtsr-name-input",
        nameLabel: "dtsr-name-label",
        orderToggle: "dtsr-order-toggle",
        pagingToggle: "dtsr-paging-toggle",
        rightSide: "dtsr-right",
        scrollerToggle: "dtsr-scroller-toggle",
        searchBuilderToggle: "dtsr-searchBuilder-toggle",
        searchPanesToggle: "dtsr-searchPanes-toggle",
        searchToggle: "dtsr-search-toggle",
        selectToggle: "dtsr-select-toggle",
        toggleLabel: "dtsr-toggle-title"
      }, _.defaults = {
        _createInSaved: !1,
        ajax: !1,
        create: !0,
        creationModal: !1,
        i18n: {
          creationModal: {
            button: "Create",
            colReorder: "Column Order",
            columns: {
              search: "Column Search",
              visible: "Column Visibility"
            },
            length: "Page Length",
            name: "Name:",
            order: "Sorting",
            paging: "Paging",
            scroller: "Scroll Position",
            search: "Search",
            searchBuilder: "SearchBuilder",
            searchPanes: "SearchPanes",
            select: "Select",
            title: "Create New State",
            toggleLabel: "Include:"
          },
          duplicateError: "A state with this name already exists.",
          emptyError: "Name cannot be empty.",
          emptyStates: "No saved states",
          removeConfirm: "Are you sure you want to remove %s?",
          removeError: "Failed to remove state.",
          removeJoiner: " and ",
          removeSubmit: "Remove",
          removeTitle: "Remove State",
          renameButton: "Rename",
          renameLabel: "New Name for %s:",
          renameTitle: "Rename State"
        },
        modalCloseButton: !0,
        preDefined: {},
        remove: !0,
        rename: !0,
        save: !0,
        saveState: {
          colReorder: !0,
          columns: {
            search: !0,
            visible: !0
          },
          length: !0,
          order: !0,
          paging: !0,
          scroller: !0,
          search: !0,
          searchBuilder: !0,
          searchPanes: !0,
          select: !0
        },
        splitSecondaries: [
          "updateState",
          "renameState",
          "removeState"
        ],
        toggle: {
          colReorder: !1,
          columns: {
            search: !1,
            visible: !1
          },
          length: !1,
          order: !1,
          paging: !1,
          scroller: !1,
          search: !1,
          searchBuilder: !1,
          searchPanes: !1,
          select: !1
        },
        createButton: null,
        createState: null
      }, _;
    }()
  );
  /*! StateRestore 1.4.3
   * © SpryMedia Ltd - datatables.net/license
   */
  n(Et), o(Et), Et.fn.dataTable.StateRestore = r, Et.fn.DataTable.StateRestore = r, Et.fn.dataTable.StateRestoreCollection = u, Et.fn.DataTable.StateRestoreCollection = u;
  var v = k.Api.register;
  v("stateRestore()", function() {
    return this;
  }), v("stateRestore.state()", function(_) {
    var T = this.context[0];
    if (!T._stateRestore) {
      var N = k.Api(T), D = new k.StateRestoreCollection(N, {});
      x(N, D);
    }
    return this[0] = T._stateRestore.getState(_), this;
  }), v("stateRestore.state.add()", function(_, T) {
    var N = this.context[0];
    if (!N._stateRestore) {
      var D = k.Api(N), p = new k.StateRestoreCollection(D, {});
      x(D, p);
    }
    if (!N._stateRestore.c.create)
      return this;
    if (N._stateRestore.addState) {
      for (var l = N._stateRestore.s.states, d = [], y = 0, E = l; y < E.length; y++) {
        var O = E[y];
        d.push(O.s.identifier);
      }
      return N._stateRestore.addState(_, d, T), this;
    }
  }), v("stateRestore.states()", function(_) {
    var T = this.context[0];
    if (!T._stateRestore) {
      var N = k.Api(T), D = new k.StateRestoreCollection(N, {});
      x(N, D);
    }
    return this.length = 0, this.push.apply(this, T._stateRestore.getStates(_)), this;
  }), v("stateRestore.state().save()", function() {
    var _ = this[0];
    return _.c.save && _.save(), this;
  }), v("stateRestore.state().rename()", function(_) {
    var T = this.context[0], N = this[0];
    if (N.c.save) {
      for (var D = T._stateRestore.s.states, p = [], l = 0, d = D; l < d.length; l++) {
        var y = d[l];
        p.push(y.s.identifier);
      }
      N.rename(_, p);
    }
    return this;
  }), v("stateRestore.state().load()", function() {
    var _ = this[0];
    return _.load(), this;
  }), v("stateRestore.state().remove()", function(_) {
    var T = this[0];
    return T.c.remove && T.remove(_), this;
  }), v("stateRestore.states().remove()", function(_) {
    var T = this, N = function(D) {
      for (var p = !0, l = T.toArray(); l.length > 0; ) {
        var d = l[0];
        if (d !== void 0 && d.c.remove) {
          var y = d.remove(D);
          y !== !0 ? p = y : l.splice(0, 1);
        } else
          break;
      }
      return p;
    };
    return this.context[0]._stateRestore && this.context[0]._stateRestore.c.remove && (_ ? N(_) : this.context[0]._stateRestore.removeAll(N)), this;
  }), v("stateRestore.activeStates()", function() {
    var _ = this.context[0];
    if (this.length = 0, !_._stateRestore) {
      var T = k.Api(_), N = new k.StateRestoreCollection(T, {});
      x(T, N);
    }
    return _._stateRestore && this.push.apply(this, _._stateRestore.findActive()), this;
  }), k.ext.buttons.stateRestore = {
    action: function(_, T, N, D) {
      D._stateRestore.load(), N.blur();
    },
    className: "dtsr-state",
    config: {
      split: ["updateState", "renameState", "removeState"]
    },
    text: function(_) {
      return _.i18n("buttons.stateRestore", "State %d", _.stateRestore.states()[0].length + 1);
    }
  }, k.ext.buttons.updateState = {
    action: function(_, T, N, D) {
      Et("div.dt-button-background").click(), D.parent._stateRestore.save();
    },
    text: function(_) {
      return _.i18n("buttons.updateState", "Update");
    }
  }, k.ext.buttons.savedStates = {
    buttons: [],
    extend: "collection",
    init: function(_, T, N) {
      _.on("stateRestore-change", function() {
        _.button(T).text(_.i18n("buttons.savedStates", "Saved States", _.stateRestore.states().length));
      }), _.settings()[0]._stateRestore === void 0 && m(_, N);
    },
    name: "SaveStateRestore",
    text: function(_) {
      return _.i18n("buttons.savedStates", "Saved States", 0);
    }
  }, k.ext.buttons.savedStatesCreate = {
    buttons: [],
    extend: "collection",
    init: function(_, T, N) {
      _.on("stateRestore-change", function() {
        _.button(T).text(_.i18n("buttons.savedStates", "Saved States", _.stateRestore.states().length));
      }), _.settings()[0]._stateRestore === void 0 && (N.config === void 0 && (N.config = {}), N.config._createInSaved = !0, m(_, N));
    },
    name: "SaveStateRestore",
    text: function(_) {
      return _.i18n("buttons.savedStates", "Saved States", 0);
    }
  }, k.ext.buttons.createState = {
    action: function(_, T, N, D) {
      _.stopPropagation();
      var p = T.settings()[0]._stateRestore.c, l = T.settings()[0].oLanguage;
      if (!(!p.create || !p.save)) {
        var d = T.stateRestore.states().toArray(), y = l.buttons !== void 0 && l.buttons.stateRestore !== void 0 ? l.buttons.stateRestore : "State ", E;
        if (y.indexOf("%d") === y.length - 3)
          E = new RegExp(y.replace(/%d/g, ""));
        else {
          var O = y.split("%d");
          E = [];
          for (var f = 0, H = O; f < H.length; f++) {
            var Y = H[f];
            E.push(new RegExp(Y));
          }
        }
        var q = function(oe) {
          var le;
          if (Array.isArray(E)) {
            le = oe;
            for (var ce = 0, ve = E; ce < ve.length; ce++) {
              var Ne = ve[ce];
              le = le.replace(Ne, "");
            }
          } else
            le = oe.replace(E, "");
          return isNaN(+le) || le.length === oe ? 0 : +le;
        }, K = d.map(function(oe) {
          return q(oe.s.identifier);
        }).sort(function(oe, le) {
          return +oe < +le ? 1 : +oe > +le ? -1 : 0;
        }), ne = K[0];
        T.stateRestore.state.add(T.i18n("buttons.stateRestore", "State %d", ne !== void 0 ? ne + 1 : 1), D.config);
        for (var F = T.stateRestore.states().sort(function(oe, le) {
          var ce = +q(oe.s.identifier), ve = +q(le.s.identifier);
          return ce > ve ? 1 : ce < ve ? -1 : 0;
        }), S = T.button("SaveStateRestore:name"), A = parseInt(S.index()), P = S[0] !== void 0 && S[0].inst.c.buttons[A].buttons !== void 0 ? S[0].inst.c.buttons[A].buttons : [], L = 0; L < P.length; L++)
          P[L].extend === "stateRestore" && (P.splice(L, 1), L--);
        p._createInSaved && P.push("createState");
        for (var V = 0, j = F; V < j.length; V++) {
          var G = j[V], ee = p.splitSecondaries.slice();
          ee.includes("updateState") && !p.save && ee.splice(ee.indexOf("updateState"), 1), ee.includes("renameState") && (!p.save || !p.rename) && ee.splice(ee.indexOf("renameState"), 1), ee.includes("removeState") && !p.remove && ee.splice(ee.indexOf("removeState"), 1), P.push({
            _stateRestore: G,
            attr: {
              title: G.s.identifier
            },
            config: {
              split: ee
            },
            extend: "stateRestore",
            text: r.entityEncode(G.s.identifier),
            popoverTitle: r.entityEncode(G.s.identifier)
          });
        }
        T.button("SaveStateRestore:name").collectionRebuild(P), N.blur();
        for (var J = T.buttons(), Z = 0, te = J; Z < te.length; Z++) {
          var se = te[Z];
          Et(se.node).hasClass("dtsr-removeAllStates") && (F.length === 0 ? T.button(se.node).disable() : T.button(se.node).enable());
        }
      }
    },
    init: function(_, T, N) {
      _.settings()[0]._stateRestore === void 0 && _.button("SaveStateRestore:name").length > 1 && m(_, N);
    },
    text: function(_) {
      return _.i18n("buttons.createState", "Create State");
    }
  }, k.ext.buttons.removeState = {
    action: function(_, T, N, D) {
      D.parent._stateRestore.remove(), N.blur();
    },
    text: function(_) {
      return _.i18n("buttons.removeState", "Remove");
    }
  }, k.ext.buttons.removeAllStates = {
    action: function(_, T, N) {
      T.stateRestore.states().remove(!0), N.blur();
    },
    className: "dt-button dtsr-removeAllStates",
    init: function(_, T) {
      (!_.settings()[0]._stateRestore || _.stateRestore.states().length === 0) && Et(T).addClass("disabled");
    },
    text: function(_) {
      return _.i18n("buttons.removeAllStates", "Remove All States");
    }
  }, k.ext.buttons.renameState = {
    action: function(_, T, N, D) {
      for (var p = T.settings()[0]._stateRestore.s.states, l = [], d = 0, y = p; d < y.length; d++) {
        var E = y[d];
        l.push(E.s.identifier);
      }
      D.parent._stateRestore.rename(void 0, l), N.blur();
    },
    text: function(_) {
      return _.i18n("buttons.renameState", "Rename");
    }
  };
  function b(_, T) {
    T === void 0 && (T = null);
    var N = new k.Api(_), D = T || N.init().stateRestore || k.defaults.stateRestore, p = new u(N, D);
    return x(N, p), p;
  }
  function m(_, T) {
    var N = new k.StateRestoreCollection(_, T.config);
    x(_, N);
  }
  function x(_, T) {
    var N = _.stateRestore.states(), D = _.button("SaveStateRestore:name"), p = [], l;
    if (D[0]) {
      var d = D.index().split("-");
      for (p = D[0].inst.c.buttons, l = 0; l < d.length; l++)
        if (p[d[l]].buttons)
          p = p[d[l]].buttons;
        else {
          p = [];
          break;
        }
    }
    var y = _.settings()[0]._stateRestore.c;
    for (l = 0; l < p.length; l++)
      p[l].extend === "stateRestore" && (p.splice(l, 1), l--);
    if (y._createInSaved && p.push("createState"), N === void 0 || N.length === 0)
      p.push('<span class="' + T.classes.emptyStates + '">' + _.i18n("stateRestore.emptyStates", T.c.i18n.emptyStates) + "</span>");
    else
      for (var E = 0, O = N; E < O.length; E++) {
        var f = O[E], H = y.splitSecondaries.slice();
        H.includes("updateState") && !y.save && H.splice(H.indexOf("updateState"), 1), H.includes("renameState") && (!y.save || !y.rename) && H.splice(H.indexOf("renameState"), 1), H.includes("removeState") && !y.remove && H.splice(H.indexOf("removeState"), 1), p.push({
          _stateRestore: f,
          attr: {
            title: f.s.identifier
          },
          config: {
            split: H
          },
          extend: "stateRestore",
          text: r.entityEncode(f.s.identifier),
          popoverTitle: r.entityEncode(f.s.identifier)
        });
      }
    _.button("SaveStateRestore:name").collectionRebuild(p);
    for (var Y = _.buttons(), q = 0, K = Y; q < K.length; q++) {
      var ne = K[q];
      Et(ne.node).hasClass("dtsr-removeAllStates") && (N.length === 0 ? _.button(ne.node).disable() : _.button(ne.node).enable());
    }
  }
  Et(document).on("preInit.dt.dtsr", function(_, T) {
    _.namespace === "dt" && (T.oInit.stateRestore || k.defaults.stateRestore) && (T._stateRestore || b(T, null));
  });
})();
/*! Bootstrap integration for DataTables' StateRestore
 * © SpryMedia Ltd - datatables.net/license
 */
let Gc = Me;
Gc.extend(!0, k.StateRestoreCollection.classes, {
  checkBox: "dtsr-check-box form-check-input",
  checkLabel: "dtsr-check-label form-check-label",
  checkRow: "dtsr-check-row form-check",
  creationButton: "dtsr-creation-button btn btn-secondary",
  creationForm: "dtsr-creation-form modal-body",
  creationText: "dtsr-creation-text modal-header",
  creationTitle: "dtsr-creation-title modal-title",
  nameInput: "dtsr-name-input form-control",
  nameLabel: "dtsr-name-label form-label"
});
Gc.extend(!0, k.StateRestore.classes, {
  confirmationButton: "dtsr-confirmation-button btn btn-secondary",
  input: "dtsr-input form-control"
});
var Qe = "top", ft = "bottom", ht = "right", Je = "left", Ji = "auto", mr = [Qe, ft, ht, Je], Dn = "start", ir = "end", Kc = "clippingParents", Ia = "viewport", zn = "popper", Uc = "reference", ra = /* @__PURE__ */ mr.reduce(function(e, t) {
  return e.concat([t + "-" + Dn, t + "-" + ir]);
}, []), Ba = /* @__PURE__ */ [].concat(mr, [Ji]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Dn, t + "-" + ir]);
}, []), Yc = "beforeRead", zc = "read", Xc = "afterRead", Qc = "beforeMain", Jc = "main", Zc = "afterMain", eu = "beforeWrite", tu = "write", nu = "afterWrite", ru = [Yc, zc, Xc, Qc, Jc, Zc, eu, tu, nu];
function Vt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function pt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function An(e) {
  var t = pt(e).Element;
  return e instanceof t || e instanceof Element;
}
function _t(e) {
  var t = pt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Fa(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = pt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function oh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, a = t.elements[n];
    !_t(a) || !Vt(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(o) {
      var u = i[o];
      u === !1 ? a.removeAttribute(o) : a.setAttribute(o, u === !0 ? "" : u);
    }));
  });
}
function lh(e) {
  var t = e.state, n = {
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
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], a = t.attributes[r] || {}, o = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), u = o.reduce(function(v, b) {
        return v[b] = "", v;
      }, {});
      !_t(i) || !Vt(i) || (Object.assign(i.style, u), Object.keys(a).forEach(function(v) {
        i.removeAttribute(v);
      }));
    });
  };
}
const Ma = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: oh,
  effect: lh,
  requires: ["computeStyles"]
};
function It(e) {
  return e.split("-")[0];
}
var Cn = Math.max, Li = Math.min, sr = Math.round;
function ia() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function iu() {
  return !/^((?!chrome|android).)*safari/i.test(ia());
}
function ar(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && _t(e) && (i = e.offsetWidth > 0 && sr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && sr(r.height) / e.offsetHeight || 1);
  var o = An(e) ? pt(e) : window, u = o.visualViewport, v = !iu() && n, b = (r.left + (v && u ? u.offsetLeft : 0)) / i, m = (r.top + (v && u ? u.offsetTop : 0)) / a, x = r.width / i, _ = r.height / a;
  return {
    width: x,
    height: _,
    top: m,
    right: b + x,
    bottom: m + _,
    left: b,
    x: b,
    y: m
  };
}
function Va(e) {
  var t = ar(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function su(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Fa(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Gt(e) {
  return pt(e).getComputedStyle(e);
}
function ch(e) {
  return ["table", "td", "th"].indexOf(Vt(e)) >= 0;
}
function cn(e) {
  return ((An(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Zi(e) {
  return Vt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Fa(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    cn(e)
  );
}
function wl(e) {
  return !_t(e) || // https://github.com/popperjs/popper-core/issues/837
  Gt(e).position === "fixed" ? null : e.offsetParent;
}
function uh(e) {
  var t = /firefox/i.test(ia()), n = /Trident/i.test(ia());
  if (n && _t(e)) {
    var r = Gt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = Zi(e);
  for (Fa(i) && (i = i.host); _t(i) && ["html", "body"].indexOf(Vt(i)) < 0; ) {
    var a = Gt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Gr(e) {
  for (var t = pt(e), n = wl(e); n && ch(n) && Gt(n).position === "static"; )
    n = wl(n);
  return n && (Vt(n) === "html" || Vt(n) === "body" && Gt(n).position === "static") ? t : n || uh(e) || t;
}
function Ha(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function kr(e, t, n) {
  return Cn(e, Li(t, n));
}
function dh(e, t, n) {
  var r = kr(e, t, n);
  return r > n ? n : r;
}
function au() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ou(e) {
  return Object.assign({}, au(), e);
}
function lu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var fh = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ou(typeof t != "number" ? t : lu(t, mr));
};
function hh(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, u = It(n.placement), v = Ha(u), b = [Je, ht].indexOf(u) >= 0, m = b ? "height" : "width";
  if (!(!a || !o)) {
    var x = fh(i.padding, n), _ = Va(a), T = v === "y" ? Qe : Je, N = v === "y" ? ft : ht, D = n.rects.reference[m] + n.rects.reference[v] - o[v] - n.rects.popper[m], p = o[v] - n.rects.reference[v], l = Gr(a), d = l ? v === "y" ? l.clientHeight || 0 : l.clientWidth || 0 : 0, y = D / 2 - p / 2, E = x[T], O = d - _[m] - x[N], f = d / 2 - _[m] / 2 + y, H = kr(E, f, O), Y = v;
    n.modifiersData[r] = (t = {}, t[Y] = H, t.centerOffset = H - f, t);
  }
}
function ph(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || su(t.elements.popper, i) && (t.elements.arrow = i));
}
const cu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: hh,
  effect: ph,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function or(e) {
  return e.split("-")[1];
}
var vh = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function mh(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: sr(n * i) / i || 0,
    y: sr(r * i) / i || 0
  };
}
function Tl(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, u = e.position, v = e.gpuAcceleration, b = e.adaptive, m = e.roundOffsets, x = e.isFixed, _ = o.x, T = _ === void 0 ? 0 : _, N = o.y, D = N === void 0 ? 0 : N, p = typeof m == "function" ? m({
    x: T,
    y: D
  }) : {
    x: T,
    y: D
  };
  T = p.x, D = p.y;
  var l = o.hasOwnProperty("x"), d = o.hasOwnProperty("y"), y = Je, E = Qe, O = window;
  if (b) {
    var f = Gr(n), H = "clientHeight", Y = "clientWidth";
    if (f === pt(n) && (f = cn(n), Gt(f).position !== "static" && u === "absolute" && (H = "scrollHeight", Y = "scrollWidth")), f = f, i === Qe || (i === Je || i === ht) && a === ir) {
      E = ft;
      var q = x && f === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        f[H]
      );
      D -= q - r.height, D *= v ? 1 : -1;
    }
    if (i === Je || (i === Qe || i === ft) && a === ir) {
      y = ht;
      var K = x && f === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        f[Y]
      );
      T -= K - r.width, T *= v ? 1 : -1;
    }
  }
  var ne = Object.assign({
    position: u
  }, b && vh), F = m === !0 ? mh({
    x: T,
    y: D
  }, pt(n)) : {
    x: T,
    y: D
  };
  if (T = F.x, D = F.y, v) {
    var S;
    return Object.assign({}, ne, (S = {}, S[E] = d ? "0" : "", S[y] = l ? "0" : "", S.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + T + "px, " + D + "px)" : "translate3d(" + T + "px, " + D + "px, 0)", S));
  }
  return Object.assign({}, ne, (t = {}, t[E] = d ? D + "px" : "", t[y] = l ? T + "px" : "", t.transform = "", t));
}
function gh(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, u = n.roundOffsets, v = u === void 0 ? !0 : u, b = {
    placement: It(t.placement),
    variation: or(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Tl(Object.assign({}, b, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: v
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Tl(Object.assign({}, b, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: v
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const $a = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: gh,
  data: {}
};
var pi = {
  passive: !0
};
function bh(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, u = o === void 0 ? !0 : o, v = pt(t.elements.popper), b = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && b.forEach(function(m) {
    m.addEventListener("scroll", n.update, pi);
  }), u && v.addEventListener("resize", n.update, pi), function() {
    a && b.forEach(function(m) {
      m.removeEventListener("scroll", n.update, pi);
    }), u && v.removeEventListener("resize", n.update, pi);
  };
}
const ja = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: bh,
  data: {}
};
var yh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ci(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return yh[t];
  });
}
var _h = {
  start: "end",
  end: "start"
};
function Cl(e) {
  return e.replace(/start|end/g, function(t) {
    return _h[t];
  });
}
function Wa(e) {
  var t = pt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function qa(e) {
  return ar(cn(e)).left + Wa(e).scrollLeft;
}
function wh(e, t) {
  var n = pt(e), r = cn(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, u = 0, v = 0;
  if (i) {
    a = i.width, o = i.height;
    var b = iu();
    (b || !b && t === "fixed") && (u = i.offsetLeft, v = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: u + qa(e),
    y: v
  };
}
function Th(e) {
  var t, n = cn(e), r = Wa(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Cn(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Cn(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), u = -r.scrollLeft + qa(e), v = -r.scrollTop;
  return Gt(i || n).direction === "rtl" && (u += Cn(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: u,
    y: v
  };
}
function Ga(e) {
  var t = Gt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function uu(e) {
  return ["html", "body", "#document"].indexOf(Vt(e)) >= 0 ? e.ownerDocument.body : _t(e) && Ga(e) ? e : uu(Zi(e));
}
function Lr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = uu(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = pt(r), o = i ? [a].concat(a.visualViewport || [], Ga(r) ? r : []) : r, u = t.concat(o);
  return i ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(Lr(Zi(o)))
  );
}
function sa(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ch(e, t) {
  var n = ar(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function xl(e, t, n) {
  return t === Ia ? sa(wh(e, n)) : An(t) ? Ch(t, n) : sa(Th(cn(e)));
}
function xh(e) {
  var t = Lr(Zi(e)), n = ["absolute", "fixed"].indexOf(Gt(e).position) >= 0, r = n && _t(e) ? Gr(e) : e;
  return An(r) ? t.filter(function(i) {
    return An(i) && su(i, r) && Vt(i) !== "body";
  }) : [];
}
function Sh(e, t, n, r) {
  var i = t === "clippingParents" ? xh(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], u = a.reduce(function(v, b) {
    var m = xl(e, b, r);
    return v.top = Cn(m.top, v.top), v.right = Li(m.right, v.right), v.bottom = Li(m.bottom, v.bottom), v.left = Cn(m.left, v.left), v;
  }, xl(e, o, r));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function du(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? It(r) : null, a = r ? or(r) : null, o = t.x + t.width / 2 - n.width / 2, u = t.y + t.height / 2 - n.height / 2, v;
  switch (i) {
    case Qe:
      v = {
        x: o,
        y: t.y - n.height
      };
      break;
    case ft:
      v = {
        x: o,
        y: t.y + t.height
      };
      break;
    case ht:
      v = {
        x: t.x + t.width,
        y: u
      };
      break;
    case Je:
      v = {
        x: t.x - n.width,
        y: u
      };
      break;
    default:
      v = {
        x: t.x,
        y: t.y
      };
  }
  var b = i ? Ha(i) : null;
  if (b != null) {
    var m = b === "y" ? "height" : "width";
    switch (a) {
      case Dn:
        v[b] = v[b] - (t[m] / 2 - n[m] / 2);
        break;
      case ir:
        v[b] = v[b] + (t[m] / 2 - n[m] / 2);
        break;
    }
  }
  return v;
}
function lr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, u = n.boundary, v = u === void 0 ? Kc : u, b = n.rootBoundary, m = b === void 0 ? Ia : b, x = n.elementContext, _ = x === void 0 ? zn : x, T = n.altBoundary, N = T === void 0 ? !1 : T, D = n.padding, p = D === void 0 ? 0 : D, l = ou(typeof p != "number" ? p : lu(p, mr)), d = _ === zn ? Uc : zn, y = e.rects.popper, E = e.elements[N ? d : _], O = Sh(An(E) ? E : E.contextElement || cn(e.elements.popper), v, m, o), f = ar(e.elements.reference), H = du({
    reference: f,
    element: y,
    strategy: "absolute",
    placement: i
  }), Y = sa(Object.assign({}, y, H)), q = _ === zn ? Y : f, K = {
    top: O.top - q.top + l.top,
    bottom: q.bottom - O.bottom + l.bottom,
    left: O.left - q.left + l.left,
    right: q.right - O.right + l.right
  }, ne = e.modifiersData.offset;
  if (_ === zn && ne) {
    var F = ne[i];
    Object.keys(K).forEach(function(S) {
      var A = [ht, ft].indexOf(S) >= 0 ? 1 : -1, P = [Qe, ft].indexOf(S) >= 0 ? "y" : "x";
      K[S] += F[P] * A;
    });
  }
  return K;
}
function Dh(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, u = n.flipVariations, v = n.allowedAutoPlacements, b = v === void 0 ? Ba : v, m = or(r), x = m ? u ? ra : ra.filter(function(N) {
    return or(N) === m;
  }) : mr, _ = x.filter(function(N) {
    return b.indexOf(N) >= 0;
  });
  _.length === 0 && (_ = x);
  var T = _.reduce(function(N, D) {
    return N[D] = lr(e, {
      placement: D,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[It(D)], N;
  }, {});
  return Object.keys(T).sort(function(N, D) {
    return T[N] - T[D];
  });
}
function Ah(e) {
  if (It(e) === Ji)
    return [];
  var t = Ci(e);
  return [Cl(e), t, Cl(t)];
}
function Eh(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, u = o === void 0 ? !0 : o, v = n.fallbackPlacements, b = n.padding, m = n.boundary, x = n.rootBoundary, _ = n.altBoundary, T = n.flipVariations, N = T === void 0 ? !0 : T, D = n.allowedAutoPlacements, p = t.options.placement, l = It(p), d = l === p, y = v || (d || !N ? [Ci(p)] : Ah(p)), E = [p].concat(y).reduce(function(se, oe) {
      return se.concat(It(oe) === Ji ? Dh(t, {
        placement: oe,
        boundary: m,
        rootBoundary: x,
        padding: b,
        flipVariations: N,
        allowedAutoPlacements: D
      }) : oe);
    }, []), O = t.rects.reference, f = t.rects.popper, H = /* @__PURE__ */ new Map(), Y = !0, q = E[0], K = 0; K < E.length; K++) {
      var ne = E[K], F = It(ne), S = or(ne) === Dn, A = [Qe, ft].indexOf(F) >= 0, P = A ? "width" : "height", L = lr(t, {
        placement: ne,
        boundary: m,
        rootBoundary: x,
        altBoundary: _,
        padding: b
      }), V = A ? S ? ht : Je : S ? ft : Qe;
      O[P] > f[P] && (V = Ci(V));
      var j = Ci(V), G = [];
      if (a && G.push(L[F] <= 0), u && G.push(L[V] <= 0, L[j] <= 0), G.every(function(se) {
        return se;
      })) {
        q = ne, Y = !1;
        break;
      }
      H.set(ne, G);
    }
    if (Y)
      for (var ee = N ? 3 : 1, J = function(oe) {
        var le = E.find(function(ce) {
          var ve = H.get(ce);
          if (ve)
            return ve.slice(0, oe).every(function(Ne) {
              return Ne;
            });
        });
        if (le)
          return q = le, "break";
      }, Z = ee; Z > 0; Z--) {
        var te = J(Z);
        if (te === "break")
          break;
      }
    t.placement !== q && (t.modifiersData[r]._skip = !0, t.placement = q, t.reset = !0);
  }
}
const fu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Eh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Sl(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Dl(e) {
  return [Qe, ht, ft, Je].some(function(t) {
    return e[t] >= 0;
  });
}
function Nh(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = lr(t, {
    elementContext: "reference"
  }), u = lr(t, {
    altBoundary: !0
  }), v = Sl(o, r), b = Sl(u, i, a), m = Dl(v), x = Dl(b);
  t.modifiersData[n] = {
    referenceClippingOffsets: v,
    popperEscapeOffsets: b,
    isReferenceHidden: m,
    hasPopperEscaped: x
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": m,
    "data-popper-escaped": x
  });
}
const hu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Nh
};
function Oh(e, t, n) {
  var r = It(e), i = [Je, Qe].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], u = a[1];
  return o = o || 0, u = (u || 0) * i, [Je, ht].indexOf(r) >= 0 ? {
    x: u,
    y: o
  } : {
    x: o,
    y: u
  };
}
function Ph(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = Ba.reduce(function(m, x) {
    return m[x] = Oh(x, t.rects, a), m;
  }, {}), u = o[t.placement], v = u.x, b = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += v, t.modifiersData.popperOffsets.y += b), t.modifiersData[r] = o;
}
const pu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ph
};
function Rh(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = du({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Ka = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Rh,
  data: {}
};
function kh(e) {
  return e === "x" ? "y" : "x";
}
function Lh(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, u = o === void 0 ? !1 : o, v = n.boundary, b = n.rootBoundary, m = n.altBoundary, x = n.padding, _ = n.tether, T = _ === void 0 ? !0 : _, N = n.tetherOffset, D = N === void 0 ? 0 : N, p = lr(t, {
    boundary: v,
    rootBoundary: b,
    padding: x,
    altBoundary: m
  }), l = It(t.placement), d = or(t.placement), y = !d, E = Ha(l), O = kh(E), f = t.modifiersData.popperOffsets, H = t.rects.reference, Y = t.rects.popper, q = typeof D == "function" ? D(Object.assign({}, t.rects, {
    placement: t.placement
  })) : D, K = typeof q == "number" ? {
    mainAxis: q,
    altAxis: q
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, q), ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (f) {
    if (a) {
      var S, A = E === "y" ? Qe : Je, P = E === "y" ? ft : ht, L = E === "y" ? "height" : "width", V = f[E], j = V + p[A], G = V - p[P], ee = T ? -Y[L] / 2 : 0, J = d === Dn ? H[L] : Y[L], Z = d === Dn ? -Y[L] : -H[L], te = t.elements.arrow, se = T && te ? Va(te) : {
        width: 0,
        height: 0
      }, oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : au(), le = oe[A], ce = oe[P], ve = kr(0, H[L], se[L]), Ne = y ? H[L] / 2 - ee - ve - le - K.mainAxis : J - ve - le - K.mainAxis, Pe = y ? -H[L] / 2 + ee + ve + ce + K.mainAxis : Z + ve + ce + K.mainAxis, Ie = t.elements.arrow && Gr(t.elements.arrow), Ze = Ie ? E === "y" ? Ie.clientTop || 0 : Ie.clientLeft || 0 : 0, We = (S = ne == null ? void 0 : ne[E]) != null ? S : 0, Be = V + Ne - We - Ze, Ee = V + Pe - We, at = kr(T ? Li(j, Be) : j, V, T ? Cn(G, Ee) : G);
      f[E] = at, F[E] = at - V;
    }
    if (u) {
      var Pt, St = E === "x" ? Qe : Je, Ht = E === "x" ? ft : ht, ke = f[O], Ye = O === "y" ? "height" : "width", $e = ke + p[St], qe = ke - p[Ht], Fe = [Qe, Je].indexOf(l) !== -1, _r = (Pt = ne == null ? void 0 : ne[O]) != null ? Pt : 0, vt = Fe ? $e : ke - H[Ye] - Y[Ye] - _r + K.altAxis, mt = Fe ? ke + H[Ye] + Y[Ye] - _r - K.altAxis : qe, Xr = T && Fe ? dh(vt, ke, mt) : kr(T ? vt : $e, ke, T ? mt : qe);
      f[O] = Xr, F[O] = Xr - ke;
    }
    t.modifiersData[r] = F;
  }
}
const vu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Lh,
  requiresIfExists: ["offset"]
};
function Ih(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Bh(e) {
  return e === pt(e) || !_t(e) ? Wa(e) : Ih(e);
}
function Fh(e) {
  var t = e.getBoundingClientRect(), n = sr(t.width) / e.offsetWidth || 1, r = sr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Mh(e, t, n) {
  n === void 0 && (n = !1);
  var r = _t(t), i = _t(t) && Fh(t), a = cn(t), o = ar(e, i, n), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, v = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Vt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ga(a)) && (u = Bh(t)), _t(t) ? (v = ar(t, !0), v.x += t.clientLeft, v.y += t.clientTop) : a && (v.x = qa(a))), {
    x: o.left + u.scrollLeft - v.x,
    y: o.top + u.scrollTop - v.y,
    width: o.width,
    height: o.height
  };
}
function Vh(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(u) {
      if (!n.has(u)) {
        var v = t.get(u);
        v && i(v);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), r;
}
function Hh(e) {
  var t = Vh(e);
  return ru.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function $h(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function jh(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Al = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function El() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function es(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Al : i;
  return function(u, v, b) {
    b === void 0 && (b = a);
    var m = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Al, a),
      modifiersData: {},
      elements: {
        reference: u,
        popper: v
      },
      attributes: {},
      styles: {}
    }, x = [], _ = !1, T = {
      state: m,
      setOptions: function(l) {
        var d = typeof l == "function" ? l(m.options) : l;
        D(), m.options = Object.assign({}, a, m.options, d), m.scrollParents = {
          reference: An(u) ? Lr(u) : u.contextElement ? Lr(u.contextElement) : [],
          popper: Lr(v)
        };
        var y = Hh(jh([].concat(r, m.options.modifiers)));
        return m.orderedModifiers = y.filter(function(E) {
          return E.enabled;
        }), N(), T.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!_) {
          var l = m.elements, d = l.reference, y = l.popper;
          if (El(d, y)) {
            m.rects = {
              reference: Mh(d, Gr(y), m.options.strategy === "fixed"),
              popper: Va(y)
            }, m.reset = !1, m.placement = m.options.placement, m.orderedModifiers.forEach(function(K) {
              return m.modifiersData[K.name] = Object.assign({}, K.data);
            });
            for (var E = 0; E < m.orderedModifiers.length; E++) {
              if (m.reset === !0) {
                m.reset = !1, E = -1;
                continue;
              }
              var O = m.orderedModifiers[E], f = O.fn, H = O.options, Y = H === void 0 ? {} : H, q = O.name;
              typeof f == "function" && (m = f({
                state: m,
                options: Y,
                name: q,
                instance: T
              }) || m);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $h(function() {
        return new Promise(function(p) {
          T.forceUpdate(), p(m);
        });
      }),
      destroy: function() {
        D(), _ = !0;
      }
    };
    if (!El(u, v))
      return T;
    T.setOptions(b).then(function(p) {
      !_ && b.onFirstUpdate && b.onFirstUpdate(p);
    });
    function N() {
      m.orderedModifiers.forEach(function(p) {
        var l = p.name, d = p.options, y = d === void 0 ? {} : d, E = p.effect;
        if (typeof E == "function") {
          var O = E({
            state: m,
            name: l,
            instance: T,
            options: y
          }), f = function() {
          };
          x.push(O || f);
        }
      });
    }
    function D() {
      x.forEach(function(p) {
        return p();
      }), x = [];
    }
    return T;
  };
}
var Wh = /* @__PURE__ */ es(), qh = [ja, Ka, $a, Ma], Gh = /* @__PURE__ */ es({
  defaultModifiers: qh
}), Kh = [ja, Ka, $a, Ma, pu, fu, vu, cu, hu], Ua = /* @__PURE__ */ es({
  defaultModifiers: Kh
});
const mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: Zc,
  afterRead: Xc,
  afterWrite: nu,
  applyStyles: Ma,
  arrow: cu,
  auto: Ji,
  basePlacements: mr,
  beforeMain: Qc,
  beforeRead: Yc,
  beforeWrite: eu,
  bottom: ft,
  clippingParents: Kc,
  computeStyles: $a,
  createPopper: Ua,
  createPopperBase: Wh,
  createPopperLite: Gh,
  detectOverflow: lr,
  end: ir,
  eventListeners: ja,
  flip: fu,
  hide: hu,
  left: Je,
  main: Jc,
  modifierPhases: ru,
  offset: pu,
  placements: Ba,
  popper: zn,
  popperGenerator: es,
  popperOffsets: Ka,
  preventOverflow: vu,
  read: zc,
  reference: Uc,
  right: ht,
  start: Dn,
  top: Qe,
  variationPlacements: ra,
  viewport: Ia,
  write: tu
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const Qt = /* @__PURE__ */ new Map(), Is = {
  set(e, t, n) {
    Qt.has(e) || Qt.set(e, /* @__PURE__ */ new Map());
    const r = Qt.get(e);
    if (!r.has(t) && r.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);
      return;
    }
    r.set(t, n);
  },
  get(e, t) {
    return Qt.has(e) && Qt.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!Qt.has(e))
      return;
    const n = Qt.get(e);
    n.delete(t), n.size === 0 && Qt.delete(e);
  }
}, Uh = 1e6, Yh = 1e3, aa = "transitionend", gu = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), zh = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), Xh = (e) => {
  do
    e += Math.floor(Math.random() * Uh);
  while (document.getElementById(e));
  return e;
}, Qh = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const r = Number.parseFloat(t), i = Number.parseFloat(n);
  return !r && !i ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * Yh);
}, bu = (e) => {
  e.dispatchEvent(new Event(aa));
}, jt = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), sn = (e) => jt(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(gu(e)) : null, gr = (e) => {
  if (!jt(e) || e.getClientRects().length === 0)
    return !1;
  const t = getComputedStyle(e).getPropertyValue("visibility") === "visible", n = e.closest("details:not([open])");
  if (!n)
    return t;
  if (n !== e) {
    const r = e.closest("summary");
    if (r && r.parentNode !== n || r === null)
      return !1;
  }
  return t;
}, an = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", yu = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? yu(e.parentNode) : null;
}, Ii = () => {
}, Kr = (e) => {
  e.offsetHeight;
}, _u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Bs = [], Jh = (e) => {
  document.readyState === "loading" ? (Bs.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of Bs)
      t();
  }), Bs.push(e)) : e();
}, wt = () => document.documentElement.dir === "rtl", xt = (e) => {
  Jh(() => {
    const t = _u();
    if (t) {
      const n = e.NAME, r = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = r, e.jQueryInterface);
    }
  });
}, it = (e, t = [], n = e) => typeof e == "function" ? e(...t) : n, wu = (e, t, n = !0) => {
  if (!n) {
    it(e);
    return;
  }
  const r = 5, i = Qh(t) + r;
  let a = !1;
  const o = ({
    target: u
  }) => {
    u === t && (a = !0, t.removeEventListener(aa, o), it(e));
  };
  t.addEventListener(aa, o), setTimeout(() => {
    a || bu(t);
  }, i);
}, Ya = (e, t, n, r) => {
  const i = e.length;
  let a = e.indexOf(t);
  return a === -1 ? !n && r ? e[i - 1] : e[0] : (a += n ? 1 : -1, r && (a = (a + i) % i), e[Math.max(0, Math.min(a, i - 1))]);
}, Zh = /[^.]*(?=\..*)\.|.*/, ep = /\..*/, tp = /::\d+$/, Fs = {};
let Nl = 1;
const Tu = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, np = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Cu(e, t) {
  return t && `${t}::${Nl++}` || e.uidEvent || Nl++;
}
function xu(e) {
  const t = Cu(e);
  return e.uidEvent = t, Fs[t] = Fs[t] || {}, Fs[t];
}
function rp(e, t) {
  return function n(r) {
    return za(r, {
      delegateTarget: e
    }), n.oneOff && re.off(e, r.type, t), t.apply(e, [r]);
  };
}
function ip(e, t, n) {
  return function r(i) {
    const a = e.querySelectorAll(t);
    for (let {
      target: o
    } = i; o && o !== this; o = o.parentNode)
      for (const u of a)
        if (u === o)
          return za(i, {
            delegateTarget: o
          }), r.oneOff && re.off(e, i.type, t, n), n.apply(o, [i]);
  };
}
function Su(e, t, n = null) {
  return Object.values(e).find((r) => r.callable === t && r.delegationSelector === n);
}
function Du(e, t, n) {
  const r = typeof t == "string", i = r ? n : t || n;
  let a = Au(e);
  return np.has(a) || (a = e), [r, i, a];
}
function Ol(e, t, n, r, i) {
  if (typeof t != "string" || !e)
    return;
  let [a, o, u] = Du(t, n, r);
  t in Tu && (o = ((N) => function(D) {
    if (!D.relatedTarget || D.relatedTarget !== D.delegateTarget && !D.delegateTarget.contains(D.relatedTarget))
      return N.call(this, D);
  })(o));
  const v = xu(e), b = v[u] || (v[u] = {}), m = Su(b, o, a ? n : null);
  if (m) {
    m.oneOff = m.oneOff && i;
    return;
  }
  const x = Cu(o, t.replace(Zh, "")), _ = a ? ip(e, n, o) : rp(e, o);
  _.delegationSelector = a ? n : null, _.callable = o, _.oneOff = i, _.uidEvent = x, b[x] = _, e.addEventListener(u, _, a);
}
function oa(e, t, n, r, i) {
  const a = Su(t[n], r, i);
  a && (e.removeEventListener(n, a, !!i), delete t[n][a.uidEvent]);
}
function sp(e, t, n, r) {
  const i = t[n] || {};
  for (const [a, o] of Object.entries(i))
    a.includes(r) && oa(e, t, n, o.callable, o.delegationSelector);
}
function Au(e) {
  return e = e.replace(ep, ""), Tu[e] || e;
}
const re = {
  on(e, t, n, r) {
    Ol(e, t, n, r, !1);
  },
  one(e, t, n, r) {
    Ol(e, t, n, r, !0);
  },
  off(e, t, n, r) {
    if (typeof t != "string" || !e)
      return;
    const [i, a, o] = Du(t, n, r), u = o !== t, v = xu(e), b = v[o] || {}, m = t.startsWith(".");
    if (typeof a < "u") {
      if (!Object.keys(b).length)
        return;
      oa(e, v, o, a, i ? n : null);
      return;
    }
    if (m)
      for (const x of Object.keys(v))
        sp(e, v, x, t.slice(1));
    for (const [x, _] of Object.entries(b)) {
      const T = x.replace(tp, "");
      (!u || t.includes(T)) && oa(e, v, o, _.callable, _.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const r = _u(), i = Au(t), a = t !== i;
    let o = null, u = !0, v = !0, b = !1;
    a && r && (o = r.Event(t, n), r(e).trigger(o), u = !o.isPropagationStopped(), v = !o.isImmediatePropagationStopped(), b = o.isDefaultPrevented());
    const m = za(new Event(t, {
      bubbles: u,
      cancelable: !0
    }), n);
    return b && m.preventDefault(), v && e.dispatchEvent(m), m.defaultPrevented && o && o.preventDefault(), m;
  }
};
function za(e, t = {}) {
  for (const [n, r] of Object.entries(t))
    try {
      e[n] = r;
    } catch {
      Object.defineProperty(e, n, {
        configurable: !0,
        get() {
          return r;
        }
      });
    }
  return e;
}
function Pl(e) {
  if (e === "true")
    return !0;
  if (e === "false")
    return !1;
  if (e === Number(e).toString())
    return Number(e);
  if (e === "" || e === "null")
    return null;
  if (typeof e != "string")
    return e;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function Ms(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Wt = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${Ms(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${Ms(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {}, n = Object.keys(e.dataset).filter((r) => r.startsWith("bs") && !r.startsWith("bsConfig"));
    for (const r of n) {
      let i = r.replace(/^bs/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Pl(e.dataset[r]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return Pl(e.getAttribute(`data-bs-${Ms(t)}`));
  }
};
class Ur {
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
  _mergeConfigObj(t, n) {
    const r = jt(n) ? Wt.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof r == "object" ? r : {},
      ...jt(n) ? Wt.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [r, i] of Object.entries(n)) {
      const a = t[r], o = jt(a) ? "element" : zh(a);
      if (!new RegExp(i).test(o))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`);
    }
  }
}
const ap = "5.3.2";
class Ot extends Ur {
  constructor(t, n) {
    super(), t = sn(t), t && (this._element = t, this._config = this._getConfig(n), Is.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    Is.remove(this._element, this.constructor.DATA_KEY), re.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  _queueCallback(t, n, r = !0) {
    wu(t, n, r);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return Is.get(sn(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return ap;
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
const Vs = (e) => {
  let t = e.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? gu(n.trim()) : null;
  }
  return t;
}, he = {
  find(e, t = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(t, e));
  },
  findOne(e, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, e);
  },
  children(e, t) {
    return [].concat(...e.children).filter((n) => n.matches(t));
  },
  parents(e, t) {
    const n = [];
    let r = e.parentNode.closest(t);
    for (; r; )
      n.push(r), r = r.parentNode.closest(t);
    return n;
  },
  prev(e, t) {
    let n = e.previousElementSibling;
    for (; n; ) {
      if (n.matches(t))
        return [n];
      n = n.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(e, t) {
    let n = e.nextElementSibling;
    for (; n; ) {
      if (n.matches(t))
        return [n];
      n = n.nextElementSibling;
    }
    return [];
  },
  focusableChildren(e) {
    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((n) => `${n}:not([tabindex^="-"])`).join(",");
    return this.find(t, e).filter((n) => !an(n) && gr(n));
  },
  getSelectorFromElement(e) {
    const t = Vs(e);
    return t && he.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = Vs(e);
    return t ? he.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = Vs(e);
    return t ? he.find(t) : [];
  }
}, ts = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, r = e.NAME;
  re.on(document, n, `[data-bs-dismiss="${r}"]`, function(i) {
    if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), an(this))
      return;
    const a = he.getElementFromSelector(this) || this.closest(`.${r}`);
    e.getOrCreateInstance(a)[t]();
  });
}, op = "alert", lp = "bs.alert", Eu = `.${lp}`, cp = `close${Eu}`, up = `closed${Eu}`, dp = "fade", fp = "show";
class ns extends Ot {
  // Getters
  static get NAME() {
    return op;
  }
  // Public
  close() {
    if (re.trigger(this._element, cp).defaultPrevented)
      return;
    this._element.classList.remove(fp);
    const n = this._element.classList.contains(dp);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), re.trigger(this._element, up), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ns.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
ts(ns, "close");
xt(ns);
const hp = "button", pp = "bs.button", vp = `.${pp}`, mp = ".data-api", gp = "active", Rl = '[data-bs-toggle="button"]', bp = `click${vp}${mp}`;
class rs extends Ot {
  // Getters
  static get NAME() {
    return hp;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(gp));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = rs.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
re.on(document, bp, Rl, (e) => {
  e.preventDefault();
  const t = e.target.closest(Rl);
  rs.getOrCreateInstance(t).toggle();
});
xt(rs);
const yp = "swipe", br = ".bs.swipe", _p = `touchstart${br}`, wp = `touchmove${br}`, Tp = `touchend${br}`, Cp = `pointerdown${br}`, xp = `pointerup${br}`, Sp = "touch", Dp = "pen", Ap = "pointer-event", Ep = 40, Np = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, Op = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class Bi extends Ur {
  constructor(t, n) {
    super(), this._element = t, !(!t || !Bi.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return Np;
  }
  static get DefaultType() {
    return Op;
  }
  static get NAME() {
    return yp;
  }
  // Public
  dispose() {
    re.off(this._element, br);
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
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), it(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= Ep)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && it(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (re.on(this._element, Cp, (t) => this._start(t)), re.on(this._element, xp, (t) => this._end(t)), this._element.classList.add(Ap)) : (re.on(this._element, _p, (t) => this._start(t)), re.on(this._element, wp, (t) => this._move(t)), re.on(this._element, Tp, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === Dp || t.pointerType === Sp);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const Pp = "carousel", Rp = "bs.carousel", un = `.${Rp}`, Nu = ".data-api", kp = "ArrowLeft", Lp = "ArrowRight", Ip = 500, Or = "next", Kn = "prev", Xn = "left", xi = "right", Bp = `slide${un}`, Hs = `slid${un}`, Fp = `keydown${un}`, Mp = `mouseenter${un}`, Vp = `mouseleave${un}`, Hp = `dragstart${un}`, $p = `load${un}${Nu}`, jp = `click${un}${Nu}`, Ou = "carousel", vi = "active", Wp = "slide", qp = "carousel-item-end", Gp = "carousel-item-start", Kp = "carousel-item-next", Up = "carousel-item-prev", Pu = ".active", Ru = ".carousel-item", Yp = Pu + Ru, zp = ".carousel-item img", Xp = ".carousel-indicators", Qp = "[data-bs-slide], [data-bs-slide-to]", Jp = '[data-bs-ride="carousel"]', Zp = {
  [kp]: xi,
  [Lp]: Xn
}, ev = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, tv = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class Yr extends Ot {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = he.findOne(Xp, this._element), this._addEventListeners(), this._config.ride === Ou && this.cycle();
  }
  // Getters
  static get Default() {
    return ev;
  }
  static get DefaultType() {
    return tv;
  }
  static get NAME() {
    return Pp;
  }
  // Public
  next() {
    this._slide(Or);
  }
  nextWhenVisible() {
    !document.hidden && gr(this._element) && this.next();
  }
  prev() {
    this._slide(Kn);
  }
  pause() {
    this._isSliding && bu(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        re.one(this._element, Hs, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const n = this._getItems();
    if (t > n.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      re.one(this._element, Hs, () => this.to(t));
      return;
    }
    const r = this._getItemIndex(this._getActive());
    if (r === t)
      return;
    const i = t > r ? Or : Kn;
    this._slide(i, n[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.defaultInterval = t.interval, t;
  }
  _addEventListeners() {
    this._config.keyboard && re.on(this._element, Fp, (t) => this._keydown(t)), this._config.pause === "hover" && (re.on(this._element, Mp, () => this.pause()), re.on(this._element, Vp, () => this._maybeEnableCycle())), this._config.touch && Bi.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const r of he.find(zp, this._element))
      re.on(r, Hp, (i) => i.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(Xn)),
      rightCallback: () => this._slide(this._directionToOrder(xi)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Ip + this._config.interval));
      }
    };
    this._swipeHelper = new Bi(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = Zp[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = he.findOne(Pu, this._indicatorsElement);
    n.classList.remove(vi), n.removeAttribute("aria-current");
    const r = he.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    r && (r.classList.add(vi), r.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t)
      return;
    const n = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = n || this._config.defaultInterval;
  }
  _slide(t, n = null) {
    if (this._isSliding)
      return;
    const r = this._getActive(), i = t === Or, a = n || Ya(this._getItems(), r, i, this._config.wrap);
    if (a === r)
      return;
    const o = this._getItemIndex(a), u = (T) => re.trigger(this._element, T, {
      relatedTarget: a,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(r),
      to: o
    });
    if (u(Bp).defaultPrevented || !r || !a)
      return;
    const b = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = a;
    const m = i ? Gp : qp, x = i ? Kp : Up;
    a.classList.add(x), Kr(a), r.classList.add(m), a.classList.add(m);
    const _ = () => {
      a.classList.remove(m, x), a.classList.add(vi), r.classList.remove(vi, x, m), this._isSliding = !1, u(Hs);
    };
    this._queueCallback(_, r, this._isAnimated()), b && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(Wp);
  }
  _getActive() {
    return he.findOne(Yp, this._element);
  }
  _getItems() {
    return he.find(Ru, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return wt() ? t === Xn ? Kn : Or : t === Xn ? Or : Kn;
  }
  _orderToDirection(t) {
    return wt() ? t === Kn ? Xn : xi : t === Kn ? xi : Xn;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Yr.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        n.to(t);
        return;
      }
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
re.on(document, jp, Qp, function(e) {
  const t = he.getElementFromSelector(this);
  if (!t || !t.classList.contains(Ou))
    return;
  e.preventDefault();
  const n = Yr.getOrCreateInstance(t), r = this.getAttribute("data-bs-slide-to");
  if (r) {
    n.to(r), n._maybeEnableCycle();
    return;
  }
  if (Wt.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
re.on(window, $p, () => {
  const e = he.find(Jp);
  for (const t of e)
    Yr.getOrCreateInstance(t);
});
xt(Yr);
const nv = "collapse", rv = "bs.collapse", zr = `.${rv}`, iv = ".data-api", sv = `show${zr}`, av = `shown${zr}`, ov = `hide${zr}`, lv = `hidden${zr}`, cv = `click${zr}${iv}`, $s = "show", Jn = "collapse", mi = "collapsing", uv = "collapsed", dv = `:scope .${Jn} .${Jn}`, fv = "collapse-horizontal", hv = "width", pv = "height", vv = ".collapse.show, .collapse.collapsing", la = '[data-bs-toggle="collapse"]', mv = {
  parent: null,
  toggle: !0
}, gv = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Vr extends Ot {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const r = he.find(la);
    for (const i of r) {
      const a = he.getSelectorFromElement(i), o = he.find(a).filter((u) => u === this._element);
      a !== null && o.length && this._triggerArray.push(i);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return mv;
  }
  static get DefaultType() {
    return gv;
  }
  static get NAME() {
    return nv;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(vv).filter((u) => u !== this._element).map((u) => Vr.getOrCreateInstance(u, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || re.trigger(this._element, sv).defaultPrevented)
      return;
    for (const u of t)
      u.hide();
    const r = this._getDimension();
    this._element.classList.remove(Jn), this._element.classList.add(mi), this._element.style[r] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, this._element.classList.remove(mi), this._element.classList.add(Jn, $s), this._element.style[r] = "", re.trigger(this._element, av);
    }, o = `scroll${r[0].toUpperCase() + r.slice(1)}`;
    this._queueCallback(i, this._element, !0), this._element.style[r] = `${this._element[o]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || re.trigger(this._element, ov).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Kr(this._element), this._element.classList.add(mi), this._element.classList.remove(Jn, $s);
    for (const i of this._triggerArray) {
      const a = he.getElementFromSelector(i);
      a && !this._isShown(a) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const r = () => {
      this._isTransitioning = !1, this._element.classList.remove(mi), this._element.classList.add(Jn), re.trigger(this._element, lv);
    };
    this._element.style[n] = "", this._queueCallback(r, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains($s);
  }
  // Private
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = sn(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(fv) ? hv : pv;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(la);
    for (const n of t) {
      const r = he.getElementFromSelector(n);
      r && this._addAriaAndCollapsedClass([n], this._isShown(r));
    }
  }
  _getFirstLevelChildren(t) {
    const n = he.find(dv, this._config.parent);
    return he.find(t, this._config.parent).filter((r) => !n.includes(r));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const r of t)
        r.classList.toggle(uv, !n), r.setAttribute("aria-expanded", n);
  }
  // Static
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const r = Vr.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof r[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        r[t]();
      }
    });
  }
}
re.on(document, cv, la, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of he.getMultipleElementsFromSelector(this))
    Vr.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
xt(Vr);
const kl = "dropdown", bv = "bs.dropdown", Pn = `.${bv}`, Xa = ".data-api", yv = "Escape", Ll = "Tab", _v = "ArrowUp", Il = "ArrowDown", wv = 2, Tv = `hide${Pn}`, Cv = `hidden${Pn}`, xv = `show${Pn}`, Sv = `shown${Pn}`, ku = `click${Pn}${Xa}`, Lu = `keydown${Pn}${Xa}`, Dv = `keyup${Pn}${Xa}`, Qn = "show", Av = "dropup", Ev = "dropend", Nv = "dropstart", Ov = "dropup-center", Pv = "dropdown-center", _n = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Rv = `${_n}.${Qn}`, Si = ".dropdown-menu", kv = ".navbar", Lv = ".navbar-nav", Iv = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Bv = wt() ? "top-end" : "top-start", Fv = wt() ? "top-start" : "top-end", Mv = wt() ? "bottom-end" : "bottom-start", Vv = wt() ? "bottom-start" : "bottom-end", Hv = wt() ? "left-start" : "right-start", $v = wt() ? "right-start" : "left-start", jv = "top", Wv = "bottom", qv = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, Gv = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Bt extends Ot {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = he.next(this._element, Si)[0] || he.prev(this._element, Si)[0] || he.findOne(Si, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return qv;
  }
  static get DefaultType() {
    return Gv;
  }
  static get NAME() {
    return kl;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (an(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!re.trigger(this._element, xv, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(Lv))
        for (const r of [].concat(...document.body.children))
          re.on(r, "mouseover", Ii);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Qn), this._element.classList.add(Qn), re.trigger(this._element, Sv, t);
    }
  }
  hide() {
    if (an(this._element) || !this._isShown())
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
    if (!re.trigger(this._element, Tv, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const r of [].concat(...document.body.children))
          re.off(r, "mouseover", Ii);
      this._popper && this._popper.destroy(), this._menu.classList.remove(Qn), this._element.classList.remove(Qn), this._element.setAttribute("aria-expanded", "false"), Wt.removeDataAttribute(this._menu, "popper"), re.trigger(this._element, Cv, t);
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !jt(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${kl.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof mu > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : jt(this._config.reference) ? t = sn(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = Ua(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(Qn);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(Ev))
      return Hv;
    if (t.classList.contains(Nv))
      return $v;
    if (t.classList.contains(Ov))
      return jv;
    if (t.classList.contains(Pv))
      return Wv;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(Av) ? n ? Fv : Bv : n ? Vv : Mv;
  }
  _detectNavbar() {
    return this._element.closest(kv) !== null;
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
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
    return (this._inNavbar || this._config.display === "static") && (Wt.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...it(this._config.popperConfig, [t])
    };
  }
  _selectMenuItem({
    key: t,
    target: n
  }) {
    const r = he.find(Iv, this._menu).filter((i) => gr(i));
    r.length && Ya(r, n, t === Il, !r.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Bt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === wv || t.type === "keyup" && t.key !== Ll)
      return;
    const n = he.find(Rv);
    for (const r of n) {
      const i = Bt.getInstance(r);
      if (!i || i._config.autoClose === !1)
        continue;
      const a = t.composedPath(), o = a.includes(i._menu);
      if (a.includes(i._element) || i._config.autoClose === "inside" && !o || i._config.autoClose === "outside" && o || i._menu.contains(t.target) && (t.type === "keyup" && t.key === Ll || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const u = {
        relatedTarget: i._element
      };
      t.type === "click" && (u.clickEvent = t), i._completeHide(u);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName), r = t.key === yv, i = [_v, Il].includes(t.key);
    if (!i && !r || n && !r)
      return;
    t.preventDefault();
    const a = this.matches(_n) ? this : he.prev(this, _n)[0] || he.next(this, _n)[0] || he.findOne(_n, t.delegateTarget.parentNode), o = Bt.getOrCreateInstance(a);
    if (i) {
      t.stopPropagation(), o.show(), o._selectMenuItem(t);
      return;
    }
    o._isShown() && (t.stopPropagation(), o.hide(), a.focus());
  }
}
re.on(document, Lu, _n, Bt.dataApiKeydownHandler);
re.on(document, Lu, Si, Bt.dataApiKeydownHandler);
re.on(document, ku, Bt.clearMenus);
re.on(document, Dv, Bt.clearMenus);
re.on(document, ku, _n, function(e) {
  e.preventDefault(), Bt.getOrCreateInstance(this).toggle();
});
xt(Bt);
const Iu = "backdrop", Kv = "fade", Bl = "show", Fl = `mousedown.bs.${Iu}`, Uv = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, Yv = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Bu extends Ur {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return Uv;
  }
  static get DefaultType() {
    return Yv;
  }
  static get NAME() {
    return Iu;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      it(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Kr(n), n.classList.add(Bl), this._emulateAnimation(() => {
      it(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      it(t);
      return;
    }
    this._getElement().classList.remove(Bl), this._emulateAnimation(() => {
      this.dispose(), it(t);
    });
  }
  dispose() {
    this._isAppended && (re.off(this._element, Fl), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(Kv), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = sn(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), re.on(t, Fl, () => {
      it(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    wu(t, this._getElement(), this._config.isAnimated);
  }
}
const zv = "focustrap", Xv = "bs.focustrap", Fi = `.${Xv}`, Qv = `focusin${Fi}`, Jv = `keydown.tab${Fi}`, Zv = "Tab", em = "forward", Ml = "backward", tm = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, nm = {
  autofocus: "boolean",
  trapElement: "element"
};
class Fu extends Ur {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return tm;
  }
  static get DefaultType() {
    return nm;
  }
  static get NAME() {
    return zv;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), re.off(document, Fi), re.on(document, Qv, (t) => this._handleFocusin(t)), re.on(document, Jv, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, re.off(document, Fi));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const r = he.focusableChildren(n);
    r.length === 0 ? n.focus() : this._lastTabNavDirection === Ml ? r[r.length - 1].focus() : r[0].focus();
  }
  _handleKeydown(t) {
    t.key === Zv && (this._lastTabNavDirection = t.shiftKey ? Ml : em);
  }
}
const Vl = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Hl = ".sticky-top", gi = "padding-right", $l = "margin-right";
class ca {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, gi, (n) => n + t), this._setElementAttributes(Vl, gi, (n) => n + t), this._setElementAttributes(Hl, $l, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, gi), this._resetElementAttributes(Vl, gi), this._resetElementAttributes(Hl, $l);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, n, r) {
    const i = this.getWidth(), a = (o) => {
      if (o !== this._element && window.innerWidth > o.clientWidth + i)
        return;
      this._saveInitialAttribute(o, n);
      const u = window.getComputedStyle(o).getPropertyValue(n);
      o.style.setProperty(n, `${r(Number.parseFloat(u))}px`);
    };
    this._applyManipulationCallback(t, a);
  }
  _saveInitialAttribute(t, n) {
    const r = t.style.getPropertyValue(n);
    r && Wt.setDataAttribute(t, n, r);
  }
  _resetElementAttributes(t, n) {
    const r = (i) => {
      const a = Wt.getDataAttribute(i, n);
      if (a === null) {
        i.style.removeProperty(n);
        return;
      }
      Wt.removeDataAttribute(i, n), i.style.setProperty(n, a);
    };
    this._applyManipulationCallback(t, r);
  }
  _applyManipulationCallback(t, n) {
    if (jt(t)) {
      n(t);
      return;
    }
    for (const r of he.find(t, this._element))
      n(r);
  }
}
const rm = "modal", im = "bs.modal", Tt = `.${im}`, sm = ".data-api", am = "Escape", om = `hide${Tt}`, lm = `hidePrevented${Tt}`, Mu = `hidden${Tt}`, Vu = `show${Tt}`, cm = `shown${Tt}`, um = `resize${Tt}`, dm = `click.dismiss${Tt}`, fm = `mousedown.dismiss${Tt}`, hm = `keydown.dismiss${Tt}`, pm = `click${Tt}${sm}`, jl = "modal-open", vm = "fade", Wl = "show", js = "modal-static", mm = ".modal.show", gm = ".modal-dialog", bm = ".modal-body", ym = '[data-bs-toggle="modal"]', _m = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, wm = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class cr extends Ot {
  constructor(t, n) {
    super(t, n), this._dialog = he.findOne(gm, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new ca(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return _m;
  }
  static get DefaultType() {
    return wm;
  }
  static get NAME() {
    return rm;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || re.trigger(this._element, Vu, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(jl), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || re.trigger(this._element, om).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Wl), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    re.off(window, Tt), re.off(this._dialog, Tt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Bu({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Fu({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = he.findOne(bm, this._dialog);
    n && (n.scrollTop = 0), Kr(this._element), this._element.classList.add(Wl);
    const r = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, re.trigger(this._element, cm, {
        relatedTarget: t
      });
    };
    this._queueCallback(r, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    re.on(this._element, hm, (t) => {
      if (t.key === am) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), re.on(window, um, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), re.on(this._element, fm, (t) => {
      re.one(this._element, dm, (n) => {
        if (!(this._element !== t.target || this._element !== n.target)) {
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
      document.body.classList.remove(jl), this._resetAdjustments(), this._scrollBar.reset(), re.trigger(this._element, Mu);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(vm);
  }
  _triggerBackdropTransition() {
    if (re.trigger(this._element, lm).defaultPrevented)
      return;
    const n = this._element.scrollHeight > document.documentElement.clientHeight, r = this._element.style.overflowY;
    r === "hidden" || this._element.classList.contains(js) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(js), this._queueCallback(() => {
      this._element.classList.remove(js), this._queueCallback(() => {
        this._element.style.overflowY = r;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, n = this._scrollBar.getWidth(), r = n > 0;
    if (r && !t) {
      const i = wt() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${n}px`;
    }
    if (!r && t) {
      const i = wt() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${n}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, n) {
    return this.each(function() {
      const r = cr.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof r[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        r[t](n);
      }
    });
  }
}
re.on(document, pm, ym, function(e) {
  const t = he.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), re.one(t, Vu, (i) => {
    i.defaultPrevented || re.one(t, Mu, () => {
      gr(this) && this.focus();
    });
  });
  const n = he.findOne(mm);
  n && cr.getInstance(n).hide(), cr.getOrCreateInstance(t).toggle(this);
});
ts(cr);
xt(cr);
const Tm = "offcanvas", Cm = "bs.offcanvas", Kt = `.${Cm}`, Hu = ".data-api", xm = `load${Kt}${Hu}`, Sm = "Escape", ql = "show", Gl = "showing", Kl = "hiding", Dm = "offcanvas-backdrop", $u = ".offcanvas.show", Am = `show${Kt}`, Em = `shown${Kt}`, Nm = `hide${Kt}`, Ul = `hidePrevented${Kt}`, ju = `hidden${Kt}`, Om = `resize${Kt}`, Pm = `click${Kt}${Hu}`, Rm = `keydown.dismiss${Kt}`, km = '[data-bs-toggle="offcanvas"]', Lm = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, Im = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class on extends Ot {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Lm;
  }
  static get DefaultType() {
    return Im;
  }
  static get NAME() {
    return Tm;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || re.trigger(this._element, Am, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new ca().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Gl);
    const r = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(ql), this._element.classList.remove(Gl), re.trigger(this._element, Em, {
        relatedTarget: t
      });
    };
    this._queueCallback(r, this._element, !0);
  }
  hide() {
    if (!this._isShown || re.trigger(this._element, Nm).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Kl), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(ql, Kl), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new ca().reset(), re.trigger(this._element, ju);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const t = () => {
      if (this._config.backdrop === "static") {
        re.trigger(this._element, Ul);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new Bu({
      className: Dm,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new Fu({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    re.on(this._element, Rm, (t) => {
      if (t.key === Sm) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        re.trigger(this._element, Ul);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = on.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
re.on(document, Pm, km, function(e) {
  const t = he.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), an(this))
    return;
  re.one(t, ju, () => {
    gr(this) && this.focus();
  });
  const n = he.findOne($u);
  n && n !== t && on.getInstance(n).hide(), on.getOrCreateInstance(t).toggle(this);
});
re.on(window, xm, () => {
  for (const e of he.find($u))
    on.getOrCreateInstance(e).show();
});
re.on(window, Om, () => {
  for (const e of he.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && on.getOrCreateInstance(e).hide();
});
ts(on);
xt(on);
const Bm = /^aria-[\w-]*$/i, Wu = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", Bm],
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
}, Fm = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Mm = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Vm = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? Fm.has(n) ? !!Mm.test(e.nodeValue) : !0 : t.filter((r) => r instanceof RegExp).some((r) => r.test(n));
};
function Hm(e, t, n) {
  if (!e.length)
    return e;
  if (n && typeof n == "function")
    return n(e);
  const i = new window.DOMParser().parseFromString(e, "text/html"), a = [].concat(...i.body.querySelectorAll("*"));
  for (const o of a) {
    const u = o.nodeName.toLowerCase();
    if (!Object.keys(t).includes(u)) {
      o.remove();
      continue;
    }
    const v = [].concat(...o.attributes), b = [].concat(t["*"] || [], t[u] || []);
    for (const m of v)
      Vm(m, b) || o.removeAttribute(m.nodeName);
  }
  return i.body.innerHTML;
}
const $m = "TemplateFactory", jm = {
  allowList: Wu,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, Wm = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, qm = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class Gm extends Ur {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return jm;
  }
  static get DefaultType() {
    return Wm;
  }
  static get NAME() {
    return $m;
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
    const n = t.children[0], r = this._resolvePossibleFunction(this._config.extraClass);
    return r && n.classList.add(...r.split(" ")), n;
  }
  // Private
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [n, r] of Object.entries(t))
      super._typeCheckConfig({
        selector: n,
        entry: r
      }, qm);
  }
  _setContent(t, n, r) {
    const i = he.findOne(r, t);
    if (i) {
      if (n = this._resolvePossibleFunction(n), !n) {
        i.remove();
        return;
      }
      if (jt(n)) {
        this._putElementInTemplate(sn(n), i);
        return;
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(n);
        return;
      }
      i.textContent = n;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize ? Hm(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return it(t, [this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      n.innerHTML = "", n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const Km = "tooltip", Um = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Ws = "fade", Ym = "modal", bi = "show", zm = ".tooltip-inner", Yl = `.${Ym}`, zl = "hide.bs.modal", Pr = "hover", qs = "focus", Xm = "click", Qm = "manual", Jm = "hide", Zm = "hidden", eg = "show", tg = "shown", ng = "inserted", rg = "click", ig = "focusin", sg = "focusout", ag = "mouseenter", og = "mouseleave", lg = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: wt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: wt() ? "right" : "left"
}, cg = {
  allowList: Wu,
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
}, ug = {
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
class yr extends Ot {
  constructor(t, n) {
    if (typeof mu > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return cg;
  }
  static get DefaultType() {
    return ug;
  }
  static get NAME() {
    return Km;
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
    clearTimeout(this._timeout), re.off(this._element.closest(Yl), zl, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = re.trigger(this._element, this.constructor.eventName(eg)), r = (yu(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !r)
      return;
    this._disposePopper();
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const {
      container: a
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), re.trigger(this._element, this.constructor.eventName(ng))), this._popper = this._createPopper(i), i.classList.add(bi), "ontouchstart" in document.documentElement)
      for (const u of [].concat(...document.body.children))
        re.on(u, "mouseover", Ii);
    const o = () => {
      re.trigger(this._element, this.constructor.eventName(tg)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || re.trigger(this._element, this.constructor.eventName(Jm)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(bi), "ontouchstart" in document.documentElement)
      for (const i of [].concat(...document.body.children))
        re.off(i, "mouseover", Ii);
    this._activeTrigger[Xm] = !1, this._activeTrigger[qs] = !1, this._activeTrigger[Pr] = !1, this._isHovered = null;
    const r = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), re.trigger(this._element, this.constructor.eventName(Zm)));
    };
    this._queueCallback(r, this.tip, this._isAnimated());
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
    const n = this._getTemplateFactory(t).toHtml();
    if (!n)
      return null;
    n.classList.remove(Ws, bi), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const r = Xh(this.constructor.NAME).toString();
    return n.setAttribute("id", r), this._isAnimated() && n.classList.add(Ws), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Gm({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [zm]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(Ws);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(bi);
  }
  _createPopper(t) {
    const n = it(this._config.placement, [this, t, this._element]), r = lg[n.toUpperCase()];
    return Ua(this._element, t, this._getPopperConfig(r));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return it(t, [this._element]);
  }
  _getPopperConfig(t) {
    const n = {
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
        fn: (r) => {
          this._getTipElement().setAttribute("data-popper-placement", r.state.placement);
        }
      }]
    };
    return {
      ...n,
      ...it(this._config.popperConfig, [n])
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        re.on(this._element, this.constructor.eventName(rg), this._config.selector, (r) => {
          this._initializeOnDelegatedTarget(r).toggle();
        });
      else if (n !== Qm) {
        const r = n === Pr ? this.constructor.eventName(ag) : this.constructor.eventName(ig), i = n === Pr ? this.constructor.eventName(og) : this.constructor.eventName(sg);
        re.on(this._element, r, this._config.selector, (a) => {
          const o = this._initializeOnDelegatedTarget(a);
          o._activeTrigger[a.type === "focusin" ? qs : Pr] = !0, o._enter();
        }), re.on(this._element, i, this._config.selector, (a) => {
          const o = this._initializeOnDelegatedTarget(a);
          o._activeTrigger[a.type === "focusout" ? qs : Pr] = o._element.contains(a.relatedTarget), o._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, re.on(this._element.closest(Yl), zl, this._hideModalHandler);
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
  _setTimeout(t, n) {
    clearTimeout(this._timeout), this._timeout = setTimeout(t, n);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const n = Wt.getDataAttributes(this._element);
    for (const r of Object.keys(n))
      Um.has(r) && delete n[r];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : sn(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const [n, r] of Object.entries(this._config))
      this.constructor.Default[n] !== r && (t[n] = r);
    return t.selector = !1, t.trigger = "manual", t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = yr.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
xt(yr);
const dg = "popover", fg = ".popover-header", hg = ".popover-body", pg = {
  ...yr.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, vg = {
  ...yr.DefaultType,
  content: "(null|string|element|function)"
};
class Qa extends yr {
  // Getters
  static get Default() {
    return pg;
  }
  static get DefaultType() {
    return vg;
  }
  static get NAME() {
    return dg;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [fg]: this._getTitle(),
      [hg]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Qa.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
xt(Qa);
const mg = "scrollspy", gg = "bs.scrollspy", Ja = `.${gg}`, bg = ".data-api", yg = `activate${Ja}`, Xl = `click${Ja}`, _g = `load${Ja}${bg}`, wg = "dropdown-item", Un = "active", Tg = '[data-bs-spy="scroll"]', Gs = "[href]", Cg = ".nav, .list-group", Ql = ".nav-link", xg = ".nav-item", Sg = ".list-group-item", Dg = `${Ql}, ${xg} > ${Ql}, ${Sg}`, Ag = ".dropdown", Eg = ".dropdown-toggle", Ng = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, Og = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class is extends Ot {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return Ng;
  }
  static get DefaultType() {
    return Og;
  }
  static get NAME() {
    return mg;
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
    return t.target = sn(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (re.off(this._config.target, Xl), re.on(this._config.target, Xl, Gs, (t) => {
      const n = this._observableSections.get(t.target.hash);
      if (n) {
        t.preventDefault();
        const r = this._rootElement || window, i = n.offsetTop - this._element.offsetTop;
        if (r.scrollTo) {
          r.scrollTo({
            top: i,
            behavior: "smooth"
          });
          return;
        }
        r.scrollTop = i;
      }
    }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((n) => this._observerCallback(n), t);
  }
  // The logic of selection
  _observerCallback(t) {
    const n = (o) => this._targetLinks.get(`#${o.target.id}`), r = (o) => {
      this._previousScrollData.visibleEntryTop = o.target.offsetTop, this._process(n(o));
    }, i = (this._rootElement || document.documentElement).scrollTop, a = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const o of t) {
      if (!o.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(n(o));
        continue;
      }
      const u = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (a && u) {
        if (r(o), !i)
          return;
        continue;
      }
      !a && !u && r(o);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const t = he.find(Gs, this._config.target);
    for (const n of t) {
      if (!n.hash || an(n))
        continue;
      const r = he.findOne(decodeURI(n.hash), this._element);
      gr(r) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, r));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Un), this._activateParents(t), re.trigger(this._element, yg, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(wg)) {
      he.findOne(Eg, t.closest(Ag)).classList.add(Un);
      return;
    }
    for (const n of he.parents(t, Cg))
      for (const r of he.prev(n, Dg))
        r.classList.add(Un);
  }
  _clearActiveClass(t) {
    t.classList.remove(Un);
    const n = he.find(`${Gs}.${Un}`, t);
    for (const r of n)
      r.classList.remove(Un);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = is.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
re.on(window, _g, () => {
  for (const e of he.find(Tg))
    is.getOrCreateInstance(e);
});
xt(is);
const Pg = "tab", Rg = "bs.tab", Rn = `.${Rg}`, kg = `hide${Rn}`, Lg = `hidden${Rn}`, Ig = `show${Rn}`, Bg = `shown${Rn}`, Fg = `click${Rn}`, Mg = `keydown${Rn}`, Vg = `load${Rn}`, Hg = "ArrowLeft", Jl = "ArrowRight", $g = "ArrowUp", Zl = "ArrowDown", Ks = "Home", ec = "End", wn = "active", tc = "fade", Us = "show", jg = "dropdown", qu = ".dropdown-toggle", Wg = ".dropdown-menu", Ys = `:not(${qu})`, qg = '.list-group, .nav, [role="tablist"]', Gg = ".nav-item, .list-group-item", Kg = `.nav-link${Ys}, .list-group-item${Ys}, [role="tab"]${Ys}`, Gu = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', zs = `${Kg}, ${Gu}`, Ug = `.${wn}[data-bs-toggle="tab"], .${wn}[data-bs-toggle="pill"], .${wn}[data-bs-toggle="list"]`;
class ur extends Ot {
  constructor(t) {
    super(t), this._parent = this._element.closest(qg), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), re.on(this._element, Mg, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return Pg;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), r = n ? re.trigger(n, kg, {
      relatedTarget: t
    }) : null;
    re.trigger(t, Ig, {
      relatedTarget: n
    }).defaultPrevented || r && r.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(wn), this._activate(he.getElementFromSelector(t));
    const r = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(Us);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), re.trigger(t, Bg, {
        relatedTarget: n
      });
    };
    this._queueCallback(r, t, t.classList.contains(tc));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(wn), t.blur(), this._deactivate(he.getElementFromSelector(t));
    const r = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(Us);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), re.trigger(t, Lg, {
        relatedTarget: n
      });
    };
    this._queueCallback(r, t, t.classList.contains(tc));
  }
  _keydown(t) {
    if (![Hg, Jl, $g, Zl, Ks, ec].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((i) => !an(i));
    let r;
    if ([Ks, ec].includes(t.key))
      r = n[t.key === Ks ? 0 : n.length - 1];
    else {
      const i = [Jl, Zl].includes(t.key);
      r = Ya(n, t.target, i, !0);
    }
    r && (r.focus({
      preventScroll: !0
    }), ur.getOrCreateInstance(r).show());
  }
  _getChildren() {
    return he.find(zs, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, n) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const r of n)
      this._setInitialAttributesOnChild(r);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const n = this._elemIsActive(t), r = this._getOuterElement(t);
    t.setAttribute("aria-selected", n), r !== t && this._setAttributeIfNotExists(r, "role", "presentation"), n || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const n = he.getElementFromSelector(t);
    n && (this._setAttributeIfNotExists(n, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const r = this._getOuterElement(t);
    if (!r.classList.contains(jg))
      return;
    const i = (a, o) => {
      const u = he.findOne(a, r);
      u && u.classList.toggle(o, n);
    };
    i(qu, wn), i(Wg, Us), r.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, r) {
    t.hasAttribute(n) || t.setAttribute(n, r);
  }
  _elemIsActive(t) {
    return t.classList.contains(wn);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(zs) ? t : he.findOne(zs, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(Gg) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ur.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
re.on(document, Fg, Gu, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !an(this) && ur.getOrCreateInstance(this).show();
});
re.on(window, Vg, () => {
  for (const e of he.find(Ug))
    ur.getOrCreateInstance(e);
});
xt(ur);
const Yg = "toast", zg = "bs.toast", dn = `.${zg}`, Xg = `mouseover${dn}`, Qg = `mouseout${dn}`, Jg = `focusin${dn}`, Zg = `focusout${dn}`, eb = `hide${dn}`, tb = `hidden${dn}`, nb = `show${dn}`, rb = `shown${dn}`, ib = "fade", nc = "hide", yi = "show", _i = "showing", sb = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, ab = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class ss extends Ot {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return ab;
  }
  static get DefaultType() {
    return sb;
  }
  static get NAME() {
    return Yg;
  }
  // Public
  show() {
    if (re.trigger(this._element, nb).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(ib);
    const n = () => {
      this._element.classList.remove(_i), re.trigger(this._element, rb), this._maybeScheduleHide();
    };
    this._element.classList.remove(nc), Kr(this._element), this._element.classList.add(yi, _i), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || re.trigger(this._element, eb).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(nc), this._element.classList.remove(_i, yi), re.trigger(this._element, tb);
    };
    this._element.classList.add(_i), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(yi), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(yi);
  }
  // Private
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(t, n) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = n;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = n;
        break;
      }
    }
    if (n) {
      this._clearTimeout();
      return;
    }
    const r = t.relatedTarget;
    this._element === r || this._element.contains(r) || this._maybeScheduleHide();
  }
  _setListeners() {
    re.on(this._element, Xg, (t) => this._onInteraction(t, !0)), re.on(this._element, Qg, (t) => this._onInteraction(t, !1)), re.on(this._element, Jg, (t) => this._onInteraction(t, !0)), re.on(this._element, Zg, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ss.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
ts(ss);
xt(ss);
export {
  ns as Alert,
  rs as Button,
  Yr as Carousel,
  Vr as Collapse,
  k as DataTable,
  Bt as Dropdown,
  cr as Modal,
  on as Offcanvas,
  Qa as Popover,
  is as ScrollSpy,
  ur as Tab,
  ss as Toast,
  yr as Tooltip
};
//# sourceMappingURL=bs-ee.mjs.map
