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
function jf(e, t) {
  if (typeof e > "u" || !e.document)
    throw new Error("jQuery requires a window with a document");
  var n = [], r = Object.getPrototypeOf, i = n.slice, a = n.flat ? function(s) {
    return n.flat.call(s);
  } : function(s) {
    return n.concat.apply([], s);
  }, o = n.push, c = n.indexOf, h = {}, m = h.toString, g = h.hasOwnProperty, _ = g.toString, w = _.call(Object), C = {};
  function k(s) {
    return s == null ? s + "" : typeof s == "object" ? h[m.call(s)] || "object" : typeof s;
  }
  function S(s) {
    return s != null && s === s.window;
  }
  function v(s) {
    var u = !!s && s.length, f = k(s);
    return typeof s == "function" || S(s) ? !1 : f === "array" || u === 0 || typeof u == "number" && u > 0 && u - 1 in s;
  }
  var l = e.document, d = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };
  function y(s, u, f) {
    f = f || l;
    var b, x = f.createElement("script");
    x.text = s;
    for (b in d)
      u && u[b] && (x[b] = u[b]);
    f.head.appendChild(x).parentNode && x.parentNode.removeChild(x);
  }
  var P = "4.0.0", N = /HTML$/i, p = function(s, u) {
    return new p.fn.init(s, u);
  };
  p.fn = p.prototype = {
    // The current version of jQuery being used
    jquery: P,
    constructor: p,
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
      var u = p.merge(this.constructor(), s);
      return u.prevObject = this, u;
    },
    // Execute a callback for every element in the matched set.
    each: function(s) {
      return p.each(this, s);
    },
    map: function(s) {
      return this.pushStack(p.map(this, function(u, f) {
        return s.call(u, f, u);
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
      return this.pushStack(p.grep(this, function(s, u) {
        return (u + 1) % 2;
      }));
    },
    odd: function() {
      return this.pushStack(p.grep(this, function(s, u) {
        return u % 2;
      }));
    },
    eq: function(s) {
      var u = this.length, f = +s + (s < 0 ? u : 0);
      return this.pushStack(f >= 0 && f < u ? [this[f]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    }
  }, p.extend = p.fn.extend = function() {
    var s, u, f, b, x, T, L = arguments[0] || {}, H = 1, B = arguments.length, $ = !1;
    for (typeof L == "boolean" && ($ = L, L = arguments[H] || {}, H++), typeof L != "object" && typeof L != "function" && (L = {}), H === B && (L = this, H--); H < B; H++)
      if ((s = arguments[H]) != null)
        for (u in s)
          b = s[u], !(u === "__proto__" || L === b) && ($ && b && (p.isPlainObject(b) || (x = Array.isArray(b))) ? (f = L[u], x && !Array.isArray(f) ? T = [] : !x && !p.isPlainObject(f) ? T = {} : T = f, x = !1, L[u] = p.extend($, T, b)) : b !== void 0 && (L[u] = b));
    return L;
  }, p.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (P + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: !0,
    error: function(s) {
      throw new Error(s);
    },
    noop: function() {
    },
    isPlainObject: function(s) {
      var u, f;
      return !s || m.call(s) !== "[object Object]" ? !1 : (u = r(s), u ? (f = g.call(u, "constructor") && u.constructor, typeof f == "function" && _.call(f) === w) : !0);
    },
    isEmptyObject: function(s) {
      var u;
      for (u in s)
        return !1;
      return !0;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function(s, u, f) {
      y(s, { nonce: u && u.nonce }, f);
    },
    each: function(s, u) {
      var f, b = 0;
      if (v(s))
        for (f = s.length; b < f && u.call(s[b], b, s[b]) !== !1; b++)
          ;
      else
        for (b in s)
          if (u.call(s[b], b, s[b]) === !1)
            break;
      return s;
    },
    // Retrieve the text value of an array of DOM nodes
    text: function(s) {
      var u, f = "", b = 0, x = s.nodeType;
      if (!x)
        for (; u = s[b++]; )
          f += p.text(u);
      return x === 1 || x === 11 ? s.textContent : x === 9 ? s.documentElement.textContent : x === 3 || x === 4 ? s.nodeValue : f;
    },
    // results is for internal usage only
    makeArray: function(s, u) {
      var f = u || [];
      return s != null && (v(Object(s)) ? p.merge(
        f,
        typeof s == "string" ? [s] : s
      ) : o.call(f, s)), f;
    },
    inArray: function(s, u, f) {
      return u == null ? -1 : c.call(u, s, f);
    },
    isXMLDoc: function(s) {
      var u = s && s.namespaceURI, f = s && (s.ownerDocument || s).documentElement;
      return !N.test(u || f && f.nodeName || "HTML");
    },
    // Note: an element does not contain itself
    contains: function(s, u) {
      var f = u && u.parentNode;
      return s === f || !!(f && f.nodeType === 1 && // Support: IE 9 - 11+
      // IE doesn't have `contains` on SVG.
      (s.contains ? s.contains(f) : s.compareDocumentPosition && s.compareDocumentPosition(f) & 16));
    },
    merge: function(s, u) {
      for (var f = +u.length, b = 0, x = s.length; b < f; b++)
        s[x++] = u[b];
      return s.length = x, s;
    },
    grep: function(s, u, f) {
      for (var b, x = [], T = 0, L = s.length, H = !f; T < L; T++)
        b = !u(s[T], T), b !== H && x.push(s[T]);
      return x;
    },
    // arg is for internal usage only
    map: function(s, u, f) {
      var b, x, T = 0, L = [];
      if (v(s))
        for (b = s.length; T < b; T++)
          x = u(s[T], T, f), x != null && L.push(x);
      else
        for (T in s)
          x = u(s[T], T, f), x != null && L.push(x);
      return a(L);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: C
  }), typeof Symbol == "function" && (p.fn[Symbol.iterator] = n[Symbol.iterator]), p.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(s, u) {
      h["[object " + u + "]"] = u.toLowerCase();
    }
  );
  function M(s, u) {
    return s.nodeName && s.nodeName.toLowerCase() === u.toLowerCase();
  }
  var U = n.pop, q = "[\\x20\\t\\r\\n\\f]", z = l.documentMode, ne = z && new RegExp(
    // Support: IE 9 - 11+
    // IE's :disabled selector does not pick up the children of disabled fieldsets
    ":enabled|:disabled|\\[" + q + "*name" + q + "*=" + q + `*(?:''|"")`
  ), F = new RegExp(
    "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
    "g"
  ), D = "(?:\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", A = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"), R = new RegExp(q + "|>"), E = /[+~]/, V = l.documentElement, j = V.matches || V.msMatchesSelector;
  function X() {
    var s = [];
    function u(f, b) {
      return s.push(f + " ") > p.expr.cacheLength && delete u[s.shift()], u[f + " "] = b;
    }
    return u;
  }
  function Z(s) {
    return s && typeof s.getElementsByTagName < "u" && s;
  }
  var Q = "\\[" + q + "*(" + D + ")(?:" + q + // Operator (capture 2)
  "*([*^$|!~]?=)" + q + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
  `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + D + "))|)" + q + "*\\]", ee = ":(" + D + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Q + ")*)|.*)\\)|)", te = {
    ID: new RegExp("^#(" + D + ")"),
    CLASS: new RegExp("^\\.(" + D + ")"),
    TAG: new RegExp("^(" + D + "|[*])"),
    ATTR: new RegExp("^" + Q),
    PSEUDO: new RegExp("^" + ee),
    CHILD: new RegExp(
      "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)",
      "i"
    )
  }, ie = new RegExp(ee), le = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"), ae = function(s, u) {
    var f = "0x" + s.slice(1) - 65536;
    return u || (f < 0 ? String.fromCharCode(f + 65536) : String.fromCharCode(f >> 10 | 55296, f & 1023 | 56320));
  };
  function ue(s) {
    return s.replace(le, ae);
  }
  function be(s) {
    p.error("Syntax error, unrecognized expression: " + s);
  }
  var Me = new RegExp("^" + q + "*," + q + "*"), je = X();
  function Qe(s, u) {
    var f, b, x, T, L, H, B, $ = je[s + " "];
    if ($)
      return u ? 0 : $.slice(0);
    for (L = s, H = [], B = p.expr.preFilter; L; ) {
      (!f || (b = Me.exec(L))) && (b && (L = L.slice(b[0].length) || L), H.push(x = [])), f = !1, (b = A.exec(L)) && (f = b.shift(), x.push({
        value: f,
        // Cast descendant combinators to space
        type: b[0].replace(F, " ")
      }), L = L.slice(f.length));
      for (T in te)
        (b = p.expr.match[T].exec(L)) && (!B[T] || (b = B[T](b))) && (f = b.shift(), x.push({
          value: f,
          type: T,
          matches: b
        }), L = L.slice(f.length));
      if (!f)
        break;
    }
    return u ? L.length : L ? be(s) : (
      // Cache the tokens
      je(s, H).slice(0)
    );
  }
  var Lt = {
    ATTR: function(s) {
      return s[1] = ue(s[1]), s[3] = ue(s[3] || s[4] || s[5] || ""), s[2] === "~=" && (s[3] = " " + s[3] + " "), s.slice(0, 4);
    },
    CHILD: function(s) {
      return s[1] = s[1].toLowerCase(), s[1].slice(0, 3) === "nth" ? (s[3] || be(s[0]), s[4] = +(s[4] ? s[5] + (s[6] || 1) : 2 * (s[3] === "even" || s[3] === "odd")), s[5] = +(s[7] + s[8] || s[3] === "odd")) : s[3] && be(s[0]), s;
    },
    PSEUDO: function(s) {
      var u, f = !s[6] && s[2];
      return te.CHILD.test(s[0]) ? null : (s[3] ? s[2] = s[4] || s[5] || "" : f && ie.test(f) && // Get excess from tokenize (recursively)
      (u = Qe(f, !0)) && // advance to the next closing parenthesis
      (u = f.indexOf(")", f.length - u) - f.length) && (s[0] = s[0].slice(0, u), s[2] = f.slice(0, u)), s.slice(0, 3));
    }
  };
  function vt(s) {
    for (var u = 0, f = s.length, b = ""; u < f; u++)
      b += s[u].value;
    return b;
  }
  function Ke(s, u, f, b, x, T, L) {
    var H = 0, B = s.length, $ = f == null;
    if (k(f) === "object") {
      x = !0;
      for (H in f)
        Ke(s, u, H, f[H], !0, T, L);
    } else if (b !== void 0 && (x = !0, typeof b != "function" && (L = !0), $ && (L ? (u.call(s, b), u = null) : ($ = u, u = function(G, K, W) {
      return $.call(p(G), W);
    })), u))
      for (; H < B; H++)
        u(
          s[H],
          f,
          L ? b : b.call(s[H], H, u(s[H], f))
        );
    return x ? s : $ ? u.call(s) : B ? u(s[0], f) : T;
  }
  var Fe = /[^\x20\t\r\n\f]+/g;
  p.fn.extend({
    attr: function(s, u) {
      return Ke(this, p.attr, s, u, arguments.length > 1);
    },
    removeAttr: function(s) {
      return this.each(function() {
        p.removeAttr(this, s);
      });
    }
  }), p.extend({
    attr: function(s, u, f) {
      var b, x, T = s.nodeType;
      if (!(T === 3 || T === 8 || T === 2)) {
        if (typeof s.getAttribute > "u")
          return p.prop(s, u, f);
        if ((T !== 1 || !p.isXMLDoc(s)) && (x = p.attrHooks[u.toLowerCase()]), f !== void 0) {
          if (f === null || // For compat with previous handling of boolean attributes,
          // remove when `false` passed. For ARIA attributes -
          // many of which recognize a `"false"` value - continue to
          // set the `"false"` value as jQuery <4 did.
          f === !1 && u.toLowerCase().indexOf("aria-") !== 0) {
            p.removeAttr(s, u);
            return;
          }
          return x && "set" in x && (b = x.set(s, f, u)) !== void 0 ? b : (s.setAttribute(u, f), f);
        }
        return x && "get" in x && (b = x.get(s, u)) !== null ? b : (b = s.getAttribute(u), b ?? void 0);
      }
    },
    attrHooks: {},
    removeAttr: function(s, u) {
      var f, b = 0, x = u && u.match(Fe);
      if (x && s.nodeType === 1)
        for (; f = x[b++]; )
          s.removeAttribute(f);
    }
  }), z && (p.attrHooks.type = {
    set: function(s, u) {
      if (u === "radio" && M(s, "input")) {
        var f = s.value;
        return s.setAttribute("type", u), f && (s.value = f), u;
      }
    }
  });
  var zt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function Gn(s, u) {
    return u ? s === "\0" ? "�" : s.slice(0, -1) + "\\" + s.charCodeAt(s.length - 1).toString(16) + " " : "\\" + s;
  }
  p.escapeSelector = function(s) {
    return (s + "").replace(zt, Gn);
  };
  var rn = n.sort, Xn = n.splice, ct;
  function Ut(s, u) {
    if (s === u)
      return ct = !0, 0;
    var f = !s.compareDocumentPosition - !u.compareDocumentPosition;
    return f || (f = (s.ownerDocument || s) == (u.ownerDocument || u) ? s.compareDocumentPosition(u) : (
      // Otherwise we know they are disconnected
      1
    ), f & 1 ? s == l || s.ownerDocument == l && p.contains(l, s) ? -1 : u == l || u.ownerDocument == l && p.contains(l, u) ? 1 : 0 : f & 4 ? -1 : 1);
  }
  p.uniqueSort = function(s) {
    var u, f = [], b = 0, x = 0;
    if (ct = !1, rn.call(s, Ut), ct) {
      for (; u = s[x++]; )
        u === s[x] && (b = f.push(x));
      for (; b--; )
        Xn.call(s, f[b], 1);
    }
    return s;
  }, p.fn.uniqueSort = function() {
    return this.pushStack(p.uniqueSort(i.apply(this)));
  };
  var dt, Tt, st, To, sn, an = 0, Fd = 0, So = X(), Do = X(), Ti = X(), Hd = new RegExp(q + "+", "g"), Vd = new RegExp("^" + D + "$"), Ao = p.extend({
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
  }, te), Md = /^(?:input|select|textarea|button)$/i, $d = /^h\d$/i, jd = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Wd = function() {
    vr();
  }, qd = Si(
    function(s) {
      return s.disabled === !0 && M(s, "fieldset");
    },
    { dir: "parentNode", next: "legend" }
  );
  function Vt(s, u, f, b) {
    var x, T, L, H, B, $, G, K = u && u.ownerDocument, W = u ? u.nodeType : 9;
    if (f = f || [], typeof s != "string" || !s || W !== 1 && W !== 9 && W !== 11)
      return f;
    if (!b && (vr(u), u = u || st, sn)) {
      if (W !== 11 && (B = jd.exec(s)))
        if (x = B[1]) {
          if (W === 9)
            return (L = u.getElementById(x)) && o.call(f, L), f;
          if (K && (L = K.getElementById(x)) && p.contains(u, L))
            return o.call(f, L), f;
        } else {
          if (B[2])
            return o.apply(f, u.getElementsByTagName(s)), f;
          if ((x = B[3]) && u.getElementsByClassName)
            return o.apply(f, u.getElementsByClassName(x)), f;
        }
      if (!Ti[s + " "] && (!ne || !ne.test(s))) {
        if (G = s, K = u, W === 1 && (R.test(s) || A.test(s))) {
          for (K = E.test(s) && Z(u.parentNode) || u, (K != u || z) && ((H = u.getAttribute("id")) ? H = p.escapeSelector(H) : u.setAttribute("id", H = p.expando)), $ = Qe(s), T = $.length; T--; )
            $[T] = (H ? "#" + H : ":scope") + " " + vt($[T]);
          G = $.join(",");
        }
        try {
          return o.apply(
            f,
            K.querySelectorAll(G)
          ), f;
        } catch {
          Ti(s, !0);
        } finally {
          H === p.expando && u.removeAttribute("id");
        }
      }
    }
    return Ro(s.replace(F, "$1"), u, f, b);
  }
  function Yt(s) {
    return s[p.expando] = !0, s;
  }
  function Gd(s) {
    return function(u) {
      return M(u, "input") && u.type === s;
    };
  }
  function Xd(s) {
    return function(u) {
      return (M(u, "input") || M(u, "button")) && u.type === s;
    };
  }
  function Po(s) {
    return function(u) {
      return "form" in u ? u.parentNode && u.disabled === !1 ? "label" in u ? "label" in u.parentNode ? u.parentNode.disabled === s : u.disabled === s : u.isDisabled === s || // Where there is no isDisabled, check manually
      u.isDisabled !== !s && qd(u) === s : u.disabled === s : "label" in u ? u.disabled === s : !1;
    };
  }
  function zn(s) {
    return Yt(function(u) {
      return u = +u, Yt(function(f, b) {
        for (var x, T = s([], f.length, u), L = T.length; L--; )
          f[x = T[L]] && (f[x] = !(b[x] = f[x]));
      });
    });
  }
  function vr(s) {
    var u, f = s ? s.ownerDocument || s : l;
    f == st || f.nodeType !== 9 || (st = f, To = st.documentElement, sn = !p.isXMLDoc(st), z && l != st && (u = st.defaultView) && u.top !== u && u.addEventListener("unload", Wd));
  }
  Vt.matches = function(s, u) {
    return Vt(s, null, null, u);
  }, Vt.matchesSelector = function(s, u) {
    if (vr(s), sn && !Ti[u + " "] && (!ne || !ne.test(u)))
      try {
        return j.call(s, u);
      } catch {
        Ti(u, !0);
      }
    return Vt(u, st, null, [s]).length > 0;
  }, p.expr = {
    // Can be adjusted by the user
    cacheLength: 50,
    createPseudo: Yt,
    match: Ao,
    find: {
      ID: function(s, u) {
        if (typeof u.getElementById < "u" && sn) {
          var f = u.getElementById(s);
          return f ? [f] : [];
        }
      },
      TAG: function(s, u) {
        return typeof u.getElementsByTagName < "u" ? u.getElementsByTagName(s) : u.querySelectorAll(s);
      },
      CLASS: function(s, u) {
        if (typeof u.getElementsByClassName < "u" && sn)
          return u.getElementsByClassName(s);
      }
    },
    relative: {
      ">": { dir: "parentNode", first: !0 },
      " ": { dir: "parentNode" },
      "+": { dir: "previousSibling", first: !0 },
      "~": { dir: "previousSibling" }
    },
    preFilter: Lt,
    filter: {
      ID: function(s) {
        var u = ue(s);
        return function(f) {
          return f.getAttribute("id") === u;
        };
      },
      TAG: function(s) {
        var u = ue(s).toLowerCase();
        return s === "*" ? function() {
          return !0;
        } : function(f) {
          return M(f, u);
        };
      },
      CLASS: function(s) {
        var u = So[s + " "];
        return u || (u = new RegExp("(^|" + q + ")" + s + "(" + q + "|$)")) && So(s, function(f) {
          return u.test(
            typeof f.className == "string" && f.className || typeof f.getAttribute < "u" && f.getAttribute("class") || ""
          );
        });
      },
      ATTR: function(s, u, f) {
        return function(b) {
          var x = p.attr(b, s);
          return x == null ? u === "!=" : u ? (x += "", u === "=" ? x === f : u === "!=" ? x !== f : u === "^=" ? f && x.indexOf(f) === 0 : u === "*=" ? f && x.indexOf(f) > -1 : u === "$=" ? f && x.slice(-f.length) === f : u === "~=" ? (" " + x.replace(Hd, " ") + " ").indexOf(f) > -1 : u === "|=" ? x === f || x.slice(0, f.length + 1) === f + "-" : !1) : !0;
        };
      },
      CHILD: function(s, u, f, b, x) {
        var T = s.slice(0, 3) !== "nth", L = s.slice(-4) !== "last", H = u === "of-type";
        return b === 1 && x === 0 ? (
          // Shortcut for :nth-*(n)
          function(B) {
            return !!B.parentNode;
          }
        ) : function(B, $, G) {
          var K, W, Y, se, ye, me = T !== L ? "nextSibling" : "previousSibling", Ve = B.parentNode, He = H && B.nodeName.toLowerCase(), bt = !G && !H, ot = !1;
          if (Ve) {
            if (T) {
              for (; me; ) {
                for (Y = B; Y = Y[me]; )
                  if (H ? M(Y, He) : Y.nodeType === 1)
                    return !1;
                ye = me = s === "only" && !ye && "nextSibling";
              }
              return !0;
            }
            if (ye = [L ? Ve.firstChild : Ve.lastChild], L && bt) {
              for (W = Ve[p.expando] || (Ve[p.expando] = {}), K = W[s] || [], se = K[0] === an && K[1], ot = se && K[2], Y = se && Ve.childNodes[se]; Y = ++se && Y && Y[me] || // Fallback to seeking `elem` from the start
              (ot = se = 0) || ye.pop(); )
                if (Y.nodeType === 1 && ++ot && Y === B) {
                  W[s] = [an, se, ot];
                  break;
                }
            } else if (bt && (W = B[p.expando] || (B[p.expando] = {}), K = W[s] || [], se = K[0] === an && K[1], ot = se), ot === !1)
              for (; (Y = ++se && Y && Y[me] || (ot = se = 0) || ye.pop()) && !((H ? M(Y, He) : Y.nodeType === 1) && ++ot && (bt && (W = Y[p.expando] || (Y[p.expando] = {}), W[s] = [an, ot]), Y === B)); )
                ;
            return ot -= x, ot === b || ot % b === 0 && ot / b >= 0;
          }
        };
      },
      PSEUDO: function(s, u) {
        var f = p.expr.pseudos[s] || p.expr.setFilters[s.toLowerCase()] || be("unsupported pseudo: " + s);
        return f[p.expando] ? f(u) : f;
      }
    },
    pseudos: {
      // Potentially complex pseudos
      not: Yt(function(s) {
        var u = [], f = [], b = Bs(s.replace(F, "$1"));
        return b[p.expando] ? Yt(function(x, T, L, H) {
          for (var B, $ = b(x, null, H, []), G = x.length; G--; )
            (B = $[G]) && (x[G] = !(T[G] = B));
        }) : function(x, T, L) {
          return u[0] = x, b(u, null, L, f), u[0] = null, !f.pop();
        };
      }),
      has: Yt(function(s) {
        return function(u) {
          return Vt(s, u).length > 0;
        };
      }),
      contains: Yt(function(s) {
        return s = ue(s), function(u) {
          return (u.textContent || p.text(u)).indexOf(s) > -1;
        };
      }),
      // "Whether an element is represented by a :lang() selector
      // is based solely on the element's language value
      // being equal to the identifier C,
      // or beginning with the identifier C immediately followed by "-".
      // The matching of C against the element's language value is performed case-insensitively.
      // The identifier C does not have to be a valid language name."
      // https://www.w3.org/TR/selectors/#lang-pseudo
      lang: Yt(function(s) {
        return Vd.test(s || "") || be("unsupported lang: " + s), s = ue(s).toLowerCase(), function(u) {
          var f;
          do
            if (f = sn ? u.lang : u.getAttribute("xml:lang") || u.getAttribute("lang"))
              return f = f.toLowerCase(), f === s || f.indexOf(s + "-") === 0;
          while ((u = u.parentNode) && u.nodeType === 1);
          return !1;
        };
      }),
      // Miscellaneous
      target: function(s) {
        var u = e.location && e.location.hash;
        return u && u.slice(1) === s.id;
      },
      root: function(s) {
        return s === To;
      },
      focus: function(s) {
        return s === st.activeElement && st.hasFocus() && !!(s.type || s.href || ~s.tabIndex);
      },
      // Boolean properties
      enabled: Po(!1),
      disabled: Po(!0),
      checked: function(s) {
        return M(s, "input") && !!s.checked || M(s, "option") && !!s.selected;
      },
      selected: function(s) {
        return z && s.parentNode && s.parentNode.selectedIndex, s.selected === !0;
      },
      // Contents
      empty: function(s) {
        for (s = s.firstChild; s; s = s.nextSibling)
          if (s.nodeType < 6)
            return !1;
        return !0;
      },
      parent: function(s) {
        return !p.expr.pseudos.empty(s);
      },
      // Element/input types
      header: function(s) {
        return $d.test(s.nodeName);
      },
      input: function(s) {
        return Md.test(s.nodeName);
      },
      button: function(s) {
        return M(s, "input") && s.type === "button" || M(s, "button");
      },
      text: function(s) {
        return M(s, "input") && s.type === "text";
      },
      // Position-in-collection
      first: zn(function() {
        return [0];
      }),
      last: zn(function(s, u) {
        return [u - 1];
      }),
      eq: zn(function(s, u, f) {
        return [f < 0 ? f + u : f];
      }),
      even: zn(function(s, u) {
        for (var f = 0; f < u; f += 2)
          s.push(f);
        return s;
      }),
      odd: zn(function(s, u) {
        for (var f = 1; f < u; f += 2)
          s.push(f);
        return s;
      }),
      lt: zn(function(s, u, f) {
        var b;
        for (f < 0 ? b = f + u : f > u ? b = u : b = f; --b >= 0; )
          s.push(b);
        return s;
      }),
      gt: zn(function(s, u, f) {
        for (var b = f < 0 ? f + u : f; ++b < u; )
          s.push(b);
        return s;
      })
    }
  }, p.expr.pseudos.nth = p.expr.pseudos.eq;
  for (dt in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
    p.expr.pseudos[dt] = Gd(dt);
  for (dt in { submit: !0, reset: !0 })
    p.expr.pseudos[dt] = Xd(dt);
  function ko() {
  }
  ko.prototype = p.expr.pseudos, p.expr.setFilters = new ko();
  function Si(s, u, f) {
    var b = u.dir, x = u.next, T = x || b, L = f && T === "parentNode", H = Fd++;
    return u.first ? (
      // Check against closest ancestor/preceding element
      function(B, $, G) {
        for (; B = B[b]; )
          if (B.nodeType === 1 || L)
            return s(B, $, G);
        return !1;
      }
    ) : (
      // Check against all ancestor/preceding elements
      function(B, $, G) {
        var K, W, Y = [an, H];
        if (G) {
          for (; B = B[b]; )
            if ((B.nodeType === 1 || L) && s(B, $, G))
              return !0;
        } else
          for (; B = B[b]; )
            if (B.nodeType === 1 || L)
              if (W = B[p.expando] || (B[p.expando] = {}), x && M(B, x))
                B = B[b] || B;
              else {
                if ((K = W[T]) && K[0] === an && K[1] === H)
                  return Y[2] = K[2];
                if (W[T] = Y, Y[2] = s(B, $, G))
                  return !0;
              }
        return !1;
      }
    );
  }
  function Is(s) {
    return s.length > 1 ? function(u, f, b) {
      for (var x = s.length; x--; )
        if (!s[x](u, f, b))
          return !1;
      return !0;
    } : s[0];
  }
  function zd(s, u, f) {
    for (var b = 0, x = u.length; b < x; b++)
      Vt(s, u[b], f);
    return f;
  }
  function Di(s, u, f, b, x) {
    for (var T, L = [], H = 0, B = s.length, $ = u != null; H < B; H++)
      (T = s[H]) && (!f || f(T, b, x)) && (L.push(T), $ && u.push(H));
    return L;
  }
  function Os(s, u, f, b, x, T) {
    return b && !b[p.expando] && (b = Os(b)), x && !x[p.expando] && (x = Os(x, T)), Yt(function(L, H, B, $) {
      var G, K, W, Y, se = [], ye = [], me = H.length, Ve = L || zd(
        u || "*",
        B.nodeType ? [B] : B,
        []
      ), He = s && (L || !u) ? Di(Ve, se, s, B, $) : Ve;
      if (f ? (Y = x || (L ? s : me || b) ? (
        // ...intermediate processing is necessary
        []
      ) : (
        // ...otherwise use results directly
        H
      ), f(He, Y, B, $)) : Y = He, b)
        for (G = Di(Y, ye), b(G, [], B, $), K = G.length; K--; )
          (W = G[K]) && (Y[ye[K]] = !(He[ye[K]] = W));
      if (L) {
        if (x || s) {
          if (x) {
            for (G = [], K = Y.length; K--; )
              (W = Y[K]) && G.push(He[K] = W);
            x(null, Y = [], G, $);
          }
          for (K = Y.length; K--; )
            (W = Y[K]) && (G = x ? c.call(L, W) : se[K]) > -1 && (L[G] = !(H[G] = W));
        }
      } else
        Y = Di(
          Y === H ? Y.splice(me, Y.length) : Y
        ), x ? x(null, H, Y, $) : o.apply(H, Y);
    });
  }
  function Es(s) {
    for (var u, f, b, x = s.length, T = p.expr.relative[s[0].type], L = T || p.expr.relative[" "], H = T ? 1 : 0, B = Si(function(K) {
      return K === u;
    }, L, !0), $ = Si(function(K) {
      return c.call(u, K) > -1;
    }, L, !0), G = [function(K, W, Y) {
      var se = !T && (Y || W != Tt) || ((u = W).nodeType ? B(K, W, Y) : $(K, W, Y));
      return u = null, se;
    }]; H < x; H++)
      if (f = p.expr.relative[s[H].type])
        G = [Si(Is(G), f)];
      else {
        if (f = p.expr.filter[s[H].type].apply(null, s[H].matches), f[p.expando]) {
          for (b = ++H; b < x && !p.expr.relative[s[b].type]; b++)
            ;
          return Os(
            H > 1 && Is(G),
            H > 1 && vt(
              // If the preceding token was a descendant combinator, insert an implicit any-element `*`
              s.slice(0, H - 1).concat({ value: s[H - 2].type === " " ? "*" : "" })
            ).replace(F, "$1"),
            f,
            H < b && Es(s.slice(H, b)),
            b < x && Es(s = s.slice(b)),
            b < x && vt(s)
          );
        }
        G.push(f);
      }
    return Is(G);
  }
  function Ud(s, u) {
    var f = u.length > 0, b = s.length > 0, x = function(T, L, H, B, $) {
      var G, K, W, Y = 0, se = "0", ye = T && [], me = [], Ve = Tt, He = T || b && p.expr.find.TAG("*", $), bt = an += Ve == null ? 1 : Math.random() || 0.1;
      for ($ && (Tt = L == st || L || $); (G = He[se]) != null; se++) {
        if (b && G) {
          for (K = 0, !L && G.ownerDocument != st && (vr(G), H = !sn); W = s[K++]; )
            if (W(G, L || st, H)) {
              o.call(B, G);
              break;
            }
          $ && (an = bt);
        }
        f && ((G = !W && G) && Y--, T && ye.push(G));
      }
      if (Y += se, f && se !== Y) {
        for (K = 0; W = u[K++]; )
          W(ye, me, L, H);
        if (T) {
          if (Y > 0)
            for (; se--; )
              ye[se] || me[se] || (me[se] = U.call(B));
          me = Di(me);
        }
        o.apply(B, me), $ && !T && me.length > 0 && Y + u.length > 1 && p.uniqueSort(B);
      }
      return $ && (an = bt, Tt = Ve), ye;
    };
    return f ? Yt(x) : x;
  }
  function Bs(s, u) {
    var f, b = [], x = [], T = Do[s + " "];
    if (!T) {
      for (u || (u = Qe(s)), f = u.length; f--; )
        T = Es(u[f]), T[p.expando] ? b.push(T) : x.push(T);
      T = Do(
        s,
        Ud(x, b)
      ), T.selector = s;
    }
    return T;
  }
  function Ro(s, u, f, b) {
    var x, T, L, H, B, $ = typeof s == "function" && s, G = !b && Qe(s = $.selector || s);
    if (f = f || [], G.length === 1) {
      if (T = G[0] = G[0].slice(0), T.length > 2 && (L = T[0]).type === "ID" && u.nodeType === 9 && sn && p.expr.relative[T[1].type]) {
        if (u = (p.expr.find.ID(
          ue(L.matches[0]),
          u
        ) || [])[0], u)
          $ && (u = u.parentNode);
        else
          return f;
        s = s.slice(T.shift().value.length);
      }
      for (x = Ao.needsContext.test(s) ? 0 : T.length; x-- && (L = T[x], !p.expr.relative[H = L.type]); )
        if ((B = p.expr.find[H]) && (b = B(
          ue(L.matches[0]),
          E.test(T[0].type) && Z(u.parentNode) || u
        ))) {
          if (T.splice(x, 1), s = b.length && vt(T), !s)
            return o.apply(f, b), f;
          break;
        }
    }
    return ($ || Bs(s, G))(
      b,
      u,
      !sn,
      f,
      !u || E.test(s) && Z(u.parentNode) || u
    ), f;
  }
  vr(), p.find = Vt, Vt.compile = Bs, Vt.select = Ro, Vt.setDocument = vr, Vt.tokenize = Qe;
  function mr(s, u, f) {
    for (var b = [], x = f !== void 0; (s = s[u]) && s.nodeType !== 9; )
      if (s.nodeType === 1) {
        if (x && p(s).is(f))
          break;
        b.push(s);
      }
    return b;
  }
  function Lo(s, u) {
    for (var f = []; s; s = s.nextSibling)
      s.nodeType === 1 && s !== u && f.push(s);
    return f;
  }
  var No = p.expr.match.needsContext, Io = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function Oo(s) {
    return s[0] === "<" && s[s.length - 1] === ">" && s.length >= 3;
  }
  function Fs(s, u, f) {
    return typeof u == "function" ? p.grep(s, function(b, x) {
      return !!u.call(b, x, b) !== f;
    }) : u.nodeType ? p.grep(s, function(b) {
      return b === u !== f;
    }) : typeof u != "string" ? p.grep(s, function(b) {
      return c.call(u, b) > -1 !== f;
    }) : p.filter(u, s, f);
  }
  p.filter = function(s, u, f) {
    var b = u[0];
    return f && (s = ":not(" + s + ")"), u.length === 1 && b.nodeType === 1 ? p.find.matchesSelector(b, s) ? [b] : [] : p.find.matches(s, p.grep(u, function(x) {
      return x.nodeType === 1;
    }));
  }, p.fn.extend({
    find: function(s) {
      var u, f, b = this.length, x = this;
      if (typeof s != "string")
        return this.pushStack(p(s).filter(function() {
          for (u = 0; u < b; u++)
            if (p.contains(x[u], this))
              return !0;
        }));
      for (f = this.pushStack([]), u = 0; u < b; u++)
        p.find(s, x[u], f);
      return b > 1 ? p.uniqueSort(f) : f;
    },
    filter: function(s) {
      return this.pushStack(Fs(this, s || [], !1));
    },
    not: function(s) {
      return this.pushStack(Fs(this, s || [], !0));
    },
    is: function(s) {
      return !!Fs(
        this,
        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        typeof s == "string" && No.test(s) ? p(s) : s || [],
        !1
      ).length;
    }
  });
  var Ai, Yd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Kd = p.fn.init = function(s, u) {
    var f, b;
    if (!s)
      return this;
    if (s.nodeType)
      return this[0] = s, this.length = 1, this;
    if (typeof s == "function")
      return Ai.ready !== void 0 ? Ai.ready(s) : (
        // Execute immediately if ready is not present
        s(p)
      );
    if (f = s + "", Oo(f))
      f = [null, s, null];
    else if (typeof s == "string")
      f = Yd.exec(s);
    else
      return p.makeArray(s, this);
    if (f && (f[1] || !u))
      if (f[1]) {
        if (u = u instanceof p ? u[0] : u, p.merge(this, p.parseHTML(
          f[1],
          u && u.nodeType ? u.ownerDocument || u : l,
          !0
        )), Io.test(f[1]) && p.isPlainObject(u))
          for (f in u)
            typeof this[f] == "function" ? this[f](u[f]) : this.attr(f, u[f]);
        return this;
      } else
        return b = l.getElementById(f[2]), b && (this[0] = b, this.length = 1), this;
    else
      return !u || u.jquery ? (u || Ai).find(s) : this.constructor(u).find(s);
  };
  Kd.prototype = p.fn, Ai = p(l);
  var Jd = /^(?:parents|prev(?:Until|All))/, Qd = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  p.fn.extend({
    has: function(s) {
      var u = p(s, this), f = u.length;
      return this.filter(function() {
        for (var b = 0; b < f; b++)
          if (p.contains(this, u[b]))
            return !0;
      });
    },
    closest: function(s, u) {
      var f, b = 0, x = this.length, T = [], L = typeof s != "string" && p(s);
      if (!No.test(s)) {
        for (; b < x; b++)
          for (f = this[b]; f && f !== u; f = f.parentNode)
            if (f.nodeType < 11 && (L ? L.index(f) > -1 : (
              // Don't pass non-elements to jQuery#find
              f.nodeType === 1 && p.find.matchesSelector(f, s)
            ))) {
              T.push(f);
              break;
            }
      }
      return this.pushStack(T.length > 1 ? p.uniqueSort(T) : T);
    },
    // Determine the position of an element within the set
    index: function(s) {
      return s ? typeof s == "string" ? c.call(p(s), this[0]) : c.call(
        this,
        // If it receives a jQuery object, the first element is used
        s.jquery ? s[0] : s
      ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function(s, u) {
      return this.pushStack(
        p.uniqueSort(
          p.merge(this.get(), p(s, u))
        )
      );
    },
    addBack: function(s) {
      return this.add(
        s == null ? this.prevObject : this.prevObject.filter(s)
      );
    }
  });
  function Eo(s, u) {
    for (; (s = s[u]) && s.nodeType !== 1; )
      ;
    return s;
  }
  p.each({
    parent: function(s) {
      var u = s.parentNode;
      return u && u.nodeType !== 11 ? u : null;
    },
    parents: function(s) {
      return mr(s, "parentNode");
    },
    parentsUntil: function(s, u, f) {
      return mr(s, "parentNode", f);
    },
    next: function(s) {
      return Eo(s, "nextSibling");
    },
    prev: function(s) {
      return Eo(s, "previousSibling");
    },
    nextAll: function(s) {
      return mr(s, "nextSibling");
    },
    prevAll: function(s) {
      return mr(s, "previousSibling");
    },
    nextUntil: function(s, u, f) {
      return mr(s, "nextSibling", f);
    },
    prevUntil: function(s, u, f) {
      return mr(s, "previousSibling", f);
    },
    siblings: function(s) {
      return Lo((s.parentNode || {}).firstChild, s);
    },
    children: function(s) {
      return Lo(s.firstChild);
    },
    contents: function(s) {
      return s.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      r(s.contentDocument) ? s.contentDocument : (M(s, "template") && (s = s.content || s), p.merge([], s.childNodes));
    }
  }, function(s, u) {
    p.fn[s] = function(f, b) {
      var x = p.map(this, u, f);
      return s.slice(-5) !== "Until" && (b = f), b && typeof b == "string" && (x = p.filter(b, x)), this.length > 1 && (Qd[s] || p.uniqueSort(x), Jd.test(s) && x.reverse()), this.pushStack(x);
    };
  });
  function Zd(s) {
    var u = {};
    return p.each(s.match(Fe) || [], function(f, b) {
      u[b] = !0;
    }), u;
  }
  p.Callbacks = function(s) {
    s = typeof s == "string" ? Zd(s) : p.extend({}, s);
    var u, f, b, x, T = [], L = [], H = -1, B = function() {
      for (x = x || s.once, b = u = !0; L.length; H = -1)
        for (f = L.shift(); ++H < T.length; )
          T[H].apply(f[0], f[1]) === !1 && s.stopOnFalse && (H = T.length, f = !1);
      s.memory || (f = !1), u = !1, x && (f ? T = [] : T = "");
    }, $ = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        return T && (f && !u && (H = T.length - 1, L.push(f)), function G(K) {
          p.each(K, function(W, Y) {
            typeof Y == "function" ? (!s.unique || !$.has(Y)) && T.push(Y) : Y && Y.length && k(Y) !== "string" && G(Y);
          });
        }(arguments), f && !u && B()), this;
      },
      // Remove a callback from the list
      remove: function() {
        return p.each(arguments, function(G, K) {
          for (var W; (W = p.inArray(K, T, W)) > -1; )
            T.splice(W, 1), W <= H && H--;
        }), this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function(G) {
        return G ? p.inArray(G, T) > -1 : T.length > 0;
      },
      // Remove all callbacks from the list
      empty: function() {
        return T && (T = []), this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function() {
        return x = L = [], T = f = "", this;
      },
      disabled: function() {
        return !T;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function() {
        return x = L = [], !f && !u && (T = f = ""), this;
      },
      locked: function() {
        return !!x;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function(G, K) {
        return x || (K = K || [], K = [G, K.slice ? K.slice() : K], L.push(K), u || B()), this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        return $.fireWith(this, arguments), this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!b;
      }
    };
    return $;
  };
  function gr(s) {
    return s;
  }
  function Pi(s) {
    throw s;
  }
  function Bo(s, u, f, b) {
    var x;
    try {
      s && typeof (x = s.promise) == "function" ? x.call(s).done(u).fail(f) : s && typeof (x = s.then) == "function" ? x.call(s, u, f) : u.apply(void 0, [s].slice(b));
    } catch (T) {
      f(T);
    }
  }
  p.extend({
    Deferred: function(s) {
      var u = [
        // action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        [
          "notify",
          "progress",
          p.Callbacks("memory"),
          p.Callbacks("memory"),
          2
        ],
        [
          "resolve",
          "done",
          p.Callbacks("once memory"),
          p.Callbacks("once memory"),
          0,
          "resolved"
        ],
        [
          "reject",
          "fail",
          p.Callbacks("once memory"),
          p.Callbacks("once memory"),
          1,
          "rejected"
        ]
      ], f = "pending", b = {
        state: function() {
          return f;
        },
        always: function() {
          return x.done(arguments).fail(arguments), this;
        },
        catch: function(T) {
          return b.then(null, T);
        },
        // Keep pipe for back-compat
        pipe: function() {
          var T = arguments;
          return p.Deferred(function(L) {
            p.each(u, function(H, B) {
              var $ = typeof T[B[4]] == "function" && T[B[4]];
              x[B[1]](function() {
                var G = $ && $.apply(this, arguments);
                G && typeof G.promise == "function" ? G.promise().progress(L.notify).done(L.resolve).fail(L.reject) : L[B[0] + "With"](
                  this,
                  $ ? [G] : arguments
                );
              });
            }), T = null;
          }).promise();
        },
        then: function(T, L, H) {
          var B = 0;
          function $(G, K, W, Y) {
            return function() {
              var se = this, ye = arguments, me = function() {
                var He, bt;
                if (!(G < B)) {
                  if (He = W.apply(se, ye), He === K.promise())
                    throw new TypeError("Thenable self-resolution");
                  bt = He && // Support: Promises/A+ section 2.3.4
                  // https://promisesaplus.com/#point-64
                  // Only check objects and functions for thenability
                  (typeof He == "object" || typeof He == "function") && He.then, typeof bt == "function" ? Y ? bt.call(
                    He,
                    $(B, K, gr, Y),
                    $(B, K, Pi, Y)
                  ) : (B++, bt.call(
                    He,
                    $(B, K, gr, Y),
                    $(B, K, Pi, Y),
                    $(
                      B,
                      K,
                      gr,
                      K.notifyWith
                    )
                  )) : (W !== gr && (se = void 0, ye = [He]), (Y || K.resolveWith)(se, ye));
                }
              }, Ve = Y ? me : function() {
                try {
                  me();
                } catch (He) {
                  p.Deferred.exceptionHook && p.Deferred.exceptionHook(
                    He,
                    Ve.error
                  ), G + 1 >= B && (W !== Pi && (se = void 0, ye = [He]), K.rejectWith(se, ye));
                }
              };
              G ? Ve() : (p.Deferred.getErrorHook && (Ve.error = p.Deferred.getErrorHook()), e.setTimeout(Ve));
            };
          }
          return p.Deferred(function(G) {
            u[0][3].add(
              $(
                0,
                G,
                typeof H == "function" ? H : gr,
                G.notifyWith
              )
            ), u[1][3].add(
              $(
                0,
                G,
                typeof T == "function" ? T : gr
              )
            ), u[2][3].add(
              $(
                0,
                G,
                typeof L == "function" ? L : Pi
              )
            );
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function(T) {
          return T != null ? p.extend(T, b) : b;
        }
      }, x = {};
      return p.each(u, function(T, L) {
        var H = L[2], B = L[5];
        b[L[1]] = H.add, B && H.add(
          function() {
            f = B;
          },
          // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          u[3 - T][2].disable,
          // rejected_handlers.disable
          // fulfilled_handlers.disable
          u[3 - T][3].disable,
          // progress_callbacks.lock
          u[0][2].lock,
          // progress_handlers.lock
          u[0][3].lock
        ), H.add(L[3].fire), x[L[0]] = function() {
          return x[L[0] + "With"](this === x ? void 0 : this, arguments), this;
        }, x[L[0] + "With"] = H.fireWith;
      }), b.promise(x), s && s.call(x, x), x;
    },
    // Deferred helper
    when: function(s) {
      var u = arguments.length, f = u, b = Array(f), x = i.call(arguments), T = p.Deferred(), L = function(H) {
        return function(B) {
          b[H] = this, x[H] = arguments.length > 1 ? i.call(arguments) : B, --u || T.resolveWith(b, x);
        };
      };
      if (u <= 1 && (Bo(
        s,
        T.done(L(f)).resolve,
        T.reject,
        !u
      ), T.state() === "pending" || typeof (x[f] && x[f].then) == "function"))
        return T.then();
      for (; f--; )
        Bo(x[f], L(f), T.reject);
      return T.promise();
    }
  });
  var ef = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  p.Deferred.exceptionHook = function(s, u) {
    s && ef.test(s.name) && e.console.warn(
      "jQuery.Deferred exception",
      s,
      u
    );
  }, p.readyException = function(s) {
    e.setTimeout(function() {
      throw s;
    });
  };
  var Hs = p.Deferred();
  p.fn.ready = function(s) {
    return Hs.then(s).catch(function(u) {
      p.readyException(u);
    }), this;
  }, p.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: !1,
    // A counter to track how many items to wait for before
    // the ready event fires. See trac-6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function(s) {
      (s === !0 ? --p.readyWait : p.isReady) || (p.isReady = !0, !(s !== !0 && --p.readyWait > 0) && Hs.resolveWith(l, [p]));
    }
  }), p.ready.then = Hs.then;
  function ki() {
    l.removeEventListener("DOMContentLoaded", ki), e.removeEventListener("load", ki), p.ready();
  }
  l.readyState !== "loading" ? e.setTimeout(p.ready) : (l.addEventListener("DOMContentLoaded", ki), e.addEventListener("load", ki));
  var tf = /-([a-z])/g;
  function nf(s, u) {
    return u.toUpperCase();
  }
  function Un(s) {
    return s.replace(tf, nf);
  }
  function Ur(s) {
    return s.nodeType === 1 || s.nodeType === 9 || !+s.nodeType;
  }
  function Yr() {
    this.expando = p.expando + Yr.uid++;
  }
  Yr.uid = 1, Yr.prototype = {
    cache: function(s) {
      var u = s[this.expando];
      return u || (u = /* @__PURE__ */ Object.create(null), Ur(s) && (s.nodeType ? s[this.expando] = u : Object.defineProperty(s, this.expando, {
        value: u,
        configurable: !0
      }))), u;
    },
    set: function(s, u, f) {
      var b, x = this.cache(s);
      if (typeof u == "string")
        x[Un(u)] = f;
      else
        for (b in u)
          x[Un(b)] = u[b];
      return f;
    },
    get: function(s, u) {
      return u === void 0 ? this.cache(s) : (
        // Always use camelCase key (gh-2257)
        s[this.expando] && s[this.expando][Un(u)]
      );
    },
    access: function(s, u, f) {
      return u === void 0 || u && typeof u == "string" && f === void 0 ? this.get(s, u) : (this.set(s, u, f), f !== void 0 ? f : u);
    },
    remove: function(s, u) {
      var f, b = s[this.expando];
      if (b !== void 0) {
        if (u !== void 0)
          for (Array.isArray(u) ? u = u.map(Un) : (u = Un(u), u = u in b ? [u] : u.match(Fe) || []), f = u.length; f--; )
            delete b[u[f]];
        (u === void 0 || p.isEmptyObject(b)) && (s.nodeType ? s[this.expando] = void 0 : delete s[this.expando]);
      }
    },
    hasData: function(s) {
      var u = s[this.expando];
      return u !== void 0 && !p.isEmptyObject(u);
    }
  };
  var we = new Yr(), mt = new Yr(), rf = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, sf = /[A-Z]/g;
  function af(s) {
    return s === "true" ? !0 : s === "false" ? !1 : s === "null" ? null : s === +s + "" ? +s : rf.test(s) ? JSON.parse(s) : s;
  }
  function Fo(s, u, f) {
    var b;
    if (f === void 0 && s.nodeType === 1)
      if (b = "data-" + u.replace(sf, "-$&").toLowerCase(), f = s.getAttribute(b), typeof f == "string") {
        try {
          f = af(f);
        } catch {
        }
        mt.set(s, u, f);
      } else
        f = void 0;
    return f;
  }
  p.extend({
    hasData: function(s) {
      return mt.hasData(s) || we.hasData(s);
    },
    data: function(s, u, f) {
      return mt.access(s, u, f);
    },
    removeData: function(s, u) {
      mt.remove(s, u);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function(s, u, f) {
      return we.access(s, u, f);
    },
    _removeData: function(s, u) {
      we.remove(s, u);
    }
  }), p.fn.extend({
    data: function(s, u) {
      var f, b, x, T = this[0], L = T && T.attributes;
      if (s === void 0) {
        if (this.length && (x = mt.get(T), T.nodeType === 1 && !we.get(T, "hasDataAttrs"))) {
          for (f = L.length; f--; )
            L[f] && (b = L[f].name, b.indexOf("data-") === 0 && (b = Un(b.slice(5)), Fo(T, b, x[b])));
          we.set(T, "hasDataAttrs", !0);
        }
        return x;
      }
      return typeof s == "object" ? this.each(function() {
        mt.set(this, s);
      }) : Ke(this, function(H) {
        var B;
        if (T && H === void 0)
          return B = mt.get(T, s), B !== void 0 || (B = Fo(T, s), B !== void 0) ? B : void 0;
        this.each(function() {
          mt.set(this, s, H);
        });
      }, null, u, arguments.length > 1, null, !0);
    },
    removeData: function(s) {
      return this.each(function() {
        mt.remove(this, s);
      });
    }
  }), p.extend({
    queue: function(s, u, f) {
      var b;
      if (s)
        return u = (u || "fx") + "queue", b = we.get(s, u), f && (!b || Array.isArray(f) ? b = we.set(s, u, p.makeArray(f)) : b.push(f)), b || [];
    },
    dequeue: function(s, u) {
      u = u || "fx";
      var f = p.queue(s, u), b = f.length, x = f.shift(), T = p._queueHooks(s, u), L = function() {
        p.dequeue(s, u);
      };
      x === "inprogress" && (x = f.shift(), b--), x && (u === "fx" && f.unshift("inprogress"), delete T.stop, x.call(s, L, T)), !b && T && T.empty.fire();
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function(s, u) {
      var f = u + "queueHooks";
      return we.get(s, f) || we.set(s, f, {
        empty: p.Callbacks("once memory").add(function() {
          we.remove(s, [u + "queue", f]);
        })
      });
    }
  }), p.fn.extend({
    queue: function(s, u) {
      var f = 2;
      return typeof s != "string" && (u = s, s = "fx", f--), arguments.length < f ? p.queue(this[0], s) : u === void 0 ? this : this.each(function() {
        var b = p.queue(this, s, u);
        p._queueHooks(this, s), s === "fx" && b[0] !== "inprogress" && p.dequeue(this, s);
      });
    },
    dequeue: function(s) {
      return this.each(function() {
        p.dequeue(this, s);
      });
    },
    clearQueue: function(s) {
      return this.queue(s || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function(s, u) {
      var f, b = 1, x = p.Deferred(), T = this, L = this.length, H = function() {
        --b || x.resolveWith(T, [T]);
      };
      for (typeof s != "string" && (u = s, s = void 0), s = s || "fx"; L--; )
        f = we.get(T[L], s + "queueHooks"), f && f.empty && (b++, f.empty.add(H));
      return H(), x.promise(u);
    }
  });
  var Ho = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Kr = new RegExp("^(?:([+-])=|)(" + Ho + ")([a-z%]*)$", "i"), mn = ["Top", "Right", "Bottom", "Left"];
  function Ri(s, u) {
    return s = u || s, s.style.display === "none" || s.style.display === "" && p.css(s, "display") === "none";
  }
  var of = /^[a-z]/, lf = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  function Li(s) {
    return of.test(s) && lf.test(s[0].toUpperCase() + s.slice(1));
  }
  function Vo(s, u, f, b) {
    var x, T, L = 20, H = b ? function() {
      return b.cur();
    } : function() {
      return p.css(s, u, "");
    }, B = H(), $ = f && f[3] || (Li(u) ? "px" : ""), G = s.nodeType && (!Li(u) || $ !== "px" && +B) && Kr.exec(p.css(s, u));
    if (G && G[3] !== $) {
      for (B = B / 2, $ = $ || G[3], G = +B || 1; L--; )
        p.style(s, u, G + $), (1 - T) * (1 - (T = H() / B || 0.5)) <= 0 && (L = 0), G = G / T;
      G = G * 2, p.style(s, u, G + $), f = f || [];
    }
    return f && (G = +G || +B || 0, x = f[1] ? G + (f[1] + 1) * f[2] : +f[2], b && (b.unit = $, b.start = G, b.end = x)), x;
  }
  var uf = /^-ms-/;
  function Vs(s) {
    return Un(s.replace(uf, "ms-"));
  }
  var Mo = {};
  function cf(s) {
    var u, f = s.ownerDocument, b = s.nodeName, x = Mo[b];
    return x || (u = f.body.appendChild(f.createElement(b)), x = p.css(u, "display"), u.parentNode.removeChild(u), x === "none" && (x = "block"), Mo[b] = x, x);
  }
  function br(s, u) {
    for (var f, b, x = [], T = 0, L = s.length; T < L; T++)
      b = s[T], b.style && (f = b.style.display, u ? (f === "none" && (x[T] = we.get(b, "display") || null, x[T] || (b.style.display = "")), b.style.display === "" && Ri(b) && (x[T] = cf(b))) : f !== "none" && (x[T] = "none", we.set(b, "display", f)));
    for (T = 0; T < L; T++)
      x[T] != null && (s[T].style.display = x[T]);
    return s;
  }
  p.fn.extend({
    show: function() {
      return br(this, !0);
    },
    hide: function() {
      return br(this);
    },
    toggle: function(s) {
      return typeof s == "boolean" ? s ? this.show() : this.hide() : this.each(function() {
        Ri(this) ? p(this).show() : p(this).hide();
      });
    }
  });
  var Jr = function(s) {
    return p.contains(s.ownerDocument, s) || s.getRootNode(df) === s.ownerDocument;
  }, df = { composed: !0 };
  V.getRootNode || (Jr = function(s) {
    return p.contains(s.ownerDocument, s);
  });
  var $o = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, on = {
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
  on.tbody = on.tfoot = on.colgroup = on.caption = on.thead, on.th = on.td;
  function gt(s, u) {
    var f;
    return typeof s.getElementsByTagName < "u" ? f = n.slice.call(s.getElementsByTagName(u || "*")) : typeof s.querySelectorAll < "u" ? f = s.querySelectorAll(u || "*") : f = [], u === void 0 || u && M(s, u) ? p.merge([s], f) : f;
  }
  var jo = /^$|^module$|\/(?:java|ecma)script/i;
  function Ms(s, u) {
    for (var f = 0, b = s.length; f < b; f++)
      we.set(
        s[f],
        "globalEval",
        !u || we.get(u[f], "globalEval")
      );
  }
  var ff = /<|&#?\w+;/;
  function Wo(s, u, f, b, x) {
    for (var T, L, H, B, $, G, K = u.createDocumentFragment(), W = [], Y = 0, se = s.length; Y < se; Y++)
      if (T = s[Y], T || T === 0)
        if (k(T) === "object" && (T.nodeType || v(T)))
          p.merge(W, T.nodeType ? [T] : T);
        else if (!ff.test(T))
          W.push(u.createTextNode(T));
        else {
          for (L = L || K.appendChild(u.createElement("div")), H = ($o.exec(T) || ["", ""])[1].toLowerCase(), B = on[H] || n, G = B.length; --G > -1; )
            L = L.appendChild(u.createElement(B[G]));
          L.innerHTML = p.htmlPrefilter(T), p.merge(W, L.childNodes), L = K.firstChild, L.textContent = "";
        }
    for (K.textContent = "", Y = 0; T = W[Y++]; ) {
      if (b && p.inArray(T, b) > -1) {
        x && x.push(T);
        continue;
      }
      if ($ = Jr(T), L = gt(K.appendChild(T), "script"), $ && Ms(L), f)
        for (G = 0; T = L[G++]; )
          jo.test(T.type || "") && f.push(T);
    }
    return K;
  }
  function hf(s) {
    return s.type = (s.getAttribute("type") !== null) + "/" + s.type, s;
  }
  function pf(s) {
    return (s.type || "").slice(0, 5) === "true/" ? s.type = s.type.slice(5) : s.removeAttribute("type"), s;
  }
  function yr(s, u, f, b) {
    u = a(u);
    var x, T, L, H, B, $, G = 0, K = s.length, W = K - 1, Y = u[0], se = typeof Y == "function";
    if (se)
      return s.each(function(ye) {
        var me = s.eq(ye);
        u[0] = Y.call(this, ye, me.html()), yr(me, u, f, b);
      });
    if (K && (x = Wo(u, s[0].ownerDocument, !1, s, b), T = x.firstChild, x.childNodes.length === 1 && (x = T), T || b)) {
      for (L = p.map(gt(x, "script"), hf), H = L.length; G < K; G++)
        B = x, G !== W && (B = p.clone(B, !0, !0), H && p.merge(L, gt(B, "script"))), f.call(s[G], B, G);
      if (H)
        for ($ = L[L.length - 1].ownerDocument, p.map(L, pf), G = 0; G < H; G++)
          B = L[G], jo.test(B.type || "") && !we.get(B, "globalEval") && p.contains($, B) && (B.src && (B.type || "").toLowerCase() !== "module" ? p._evalUrl && !B.noModule && p._evalUrl(B.src, {
            nonce: B.nonce,
            crossOrigin: B.crossOrigin
          }, $) : y(B.textContent, B, $));
    }
    return s;
  }
  var Ni = /^(?:checkbox|radio)$/i, qo = /^([^.]*)(?:\.(.+)|)/;
  function wr() {
    return !0;
  }
  function xr() {
    return !1;
  }
  function $s(s, u, f, b, x, T) {
    var L, H;
    if (typeof u == "object") {
      typeof f != "string" && (b = b || f, f = void 0);
      for (H in u)
        $s(s, H, f, b, u[H], T);
      return s;
    }
    if (b == null && x == null ? (x = f, b = f = void 0) : x == null && (typeof f == "string" ? (x = b, b = void 0) : (x = b, b = f, f = void 0)), x === !1)
      x = xr;
    else if (!x)
      return s;
    return T === 1 && (L = x, x = function(B) {
      return p().off(B), L.apply(this, arguments);
    }, x.guid = L.guid || (L.guid = p.guid++)), s.each(function() {
      p.event.add(this, u, x, b, f);
    });
  }
  p.event = {
    add: function(s, u, f, b, x) {
      var T, L, H, B, $, G, K, W, Y, se, ye, me = we.get(s);
      if (Ur(s))
        for (f.handler && (T = f, f = T.handler, x = T.selector), x && p.find.matchesSelector(V, x), f.guid || (f.guid = p.guid++), (B = me.events) || (B = me.events = /* @__PURE__ */ Object.create(null)), (L = me.handle) || (L = me.handle = function(Ve) {
          return typeof p < "u" && p.event.triggered !== Ve.type ? p.event.dispatch.apply(s, arguments) : void 0;
        }), u = (u || "").match(Fe) || [""], $ = u.length; $--; )
          H = qo.exec(u[$]) || [], Y = ye = H[1], se = (H[2] || "").split(".").sort(), Y && (K = p.event.special[Y] || {}, Y = (x ? K.delegateType : K.bindType) || Y, K = p.event.special[Y] || {}, G = p.extend({
            type: Y,
            origType: ye,
            data: b,
            handler: f,
            guid: f.guid,
            selector: x,
            needsContext: x && p.expr.match.needsContext.test(x),
            namespace: se.join(".")
          }, T), (W = B[Y]) || (W = B[Y] = [], W.delegateCount = 0, (!K.setup || K.setup.call(s, b, se, L) === !1) && s.addEventListener && s.addEventListener(Y, L)), K.add && (K.add.call(s, G), G.handler.guid || (G.handler.guid = f.guid)), x ? W.splice(W.delegateCount++, 0, G) : W.push(G));
    },
    // Detach an event or set of events from an element
    remove: function(s, u, f, b, x) {
      var T, L, H, B, $, G, K, W, Y, se, ye, me = we.hasData(s) && we.get(s);
      if (!(!me || !(B = me.events))) {
        for (u = (u || "").match(Fe) || [""], $ = u.length; $--; ) {
          if (H = qo.exec(u[$]) || [], Y = ye = H[1], se = (H[2] || "").split(".").sort(), !Y) {
            for (Y in B)
              p.event.remove(s, Y + u[$], f, b, !0);
            continue;
          }
          for (K = p.event.special[Y] || {}, Y = (b ? K.delegateType : K.bindType) || Y, W = B[Y] || [], H = H[2] && new RegExp("(^|\\.)" + se.join("\\.(?:.*\\.|)") + "(\\.|$)"), L = T = W.length; T--; )
            G = W[T], (x || ye === G.origType) && (!f || f.guid === G.guid) && (!H || H.test(G.namespace)) && (!b || b === G.selector || b === "**" && G.selector) && (W.splice(T, 1), G.selector && W.delegateCount--, K.remove && K.remove.call(s, G));
          L && !W.length && ((!K.teardown || K.teardown.call(s, se, me.handle) === !1) && p.removeEvent(s, Y, me.handle), delete B[Y]);
        }
        p.isEmptyObject(B) && we.remove(s, "handle events");
      }
    },
    dispatch: function(s) {
      var u, f, b, x, T, L, H = new Array(arguments.length), B = p.event.fix(s), $ = (we.get(this, "events") || /* @__PURE__ */ Object.create(null))[B.type] || [], G = p.event.special[B.type] || {};
      for (H[0] = B, u = 1; u < arguments.length; u++)
        H[u] = arguments[u];
      if (B.delegateTarget = this, !(G.preDispatch && G.preDispatch.call(this, B) === !1)) {
        for (L = p.event.handlers.call(this, B, $), u = 0; (x = L[u++]) && !B.isPropagationStopped(); )
          for (B.currentTarget = x.elem, f = 0; (T = x.handlers[f++]) && !B.isImmediatePropagationStopped(); )
            (!B.rnamespace || T.namespace === !1 || B.rnamespace.test(T.namespace)) && (B.handleObj = T, B.data = T.data, b = ((p.event.special[T.origType] || {}).handle || T.handler).apply(x.elem, H), b !== void 0 && (B.result = b) === !1 && (B.preventDefault(), B.stopPropagation()));
        return G.postDispatch && G.postDispatch.call(this, B), B.result;
      }
    },
    handlers: function(s, u) {
      var f, b, x, T, L, H = [], B = u.delegateCount, $ = s.target;
      if (B && // Support: Firefox <=42 - 66+
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11+
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(s.type === "click" && s.button >= 1)) {
        for (; $ !== this; $ = $.parentNode || this)
          if ($.nodeType === 1 && !(s.type === "click" && $.disabled === !0)) {
            for (T = [], L = {}, f = 0; f < B; f++)
              b = u[f], x = b.selector + " ", L[x] === void 0 && (L[x] = b.needsContext ? p(x, this).index($) > -1 : p.find(x, this, null, [$]).length), L[x] && T.push(b);
            T.length && H.push({ elem: $, handlers: T });
          }
      }
      return $ = this, B < u.length && H.push({ elem: $, handlers: u.slice(B) }), H;
    },
    addProp: function(s, u) {
      Object.defineProperty(p.Event.prototype, s, {
        enumerable: !0,
        configurable: !0,
        get: typeof u == "function" ? function() {
          if (this.originalEvent)
            return u(this.originalEvent);
        } : function() {
          if (this.originalEvent)
            return this.originalEvent[s];
        },
        set: function(f) {
          Object.defineProperty(this, s, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: f
          });
        }
      });
    },
    fix: function(s) {
      return s[p.expando] ? s : new p.Event(s);
    },
    special: p.extend(/* @__PURE__ */ Object.create(null), {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: !0
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function(s) {
          var u = this || s;
          return Ni.test(u.type) && u.click && M(u, "input") && Ii(u, "click", !0), !1;
        },
        trigger: function(s) {
          var u = this || s;
          return Ni.test(u.type) && u.click && M(u, "input") && Ii(u, "click"), !0;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function(s) {
          var u = s.target;
          return Ni.test(u.type) && u.click && M(u, "input") && we.get(u, "click") || M(u, "a");
        }
      },
      beforeunload: {
        postDispatch: function(s) {
          s.result !== void 0 && s.preventDefault();
        }
      }
    })
  };
  function Ii(s, u, f) {
    if (!f) {
      we.get(s, u) === void 0 && p.event.add(s, u, wr);
      return;
    }
    we.set(s, u, !1), p.event.add(s, u, {
      namespace: !1,
      handler: function(b) {
        var x, T = we.get(this, u);
        if (b.isTrigger & 1 && this[u]) {
          if (T.length)
            (p.event.special[u] || {}).delegateType && b.stopPropagation();
          else if (T = i.call(arguments), we.set(this, u, T), this[u](), x = we.get(this, u), we.set(this, u, !1), T !== x)
            return b.stopImmediatePropagation(), b.preventDefault(), x && x.value;
        } else
          T.length && (we.set(this, u, {
            value: p.event.trigger(
              T[0],
              T.slice(1),
              this
            )
          }), b.stopPropagation(), b.isImmediatePropagationStopped = wr);
      }
    });
  }
  p.removeEvent = function(s, u, f) {
    s.removeEventListener && s.removeEventListener(u, f);
  }, p.Event = function(s, u) {
    if (!(this instanceof p.Event))
      return new p.Event(s, u);
    s && s.type ? (this.originalEvent = s, this.type = s.type, this.isDefaultPrevented = s.defaultPrevented ? wr : xr, this.target = s.target, this.currentTarget = s.currentTarget, this.relatedTarget = s.relatedTarget) : this.type = s, u && p.extend(this, u), this.timeStamp = s && s.timeStamp || Date.now(), this[p.expando] = !0;
  }, p.Event.prototype = {
    constructor: p.Event,
    isDefaultPrevented: xr,
    isPropagationStopped: xr,
    isImmediatePropagationStopped: xr,
    isSimulated: !1,
    preventDefault: function() {
      var s = this.originalEvent;
      this.isDefaultPrevented = wr, s && !this.isSimulated && s.preventDefault();
    },
    stopPropagation: function() {
      var s = this.originalEvent;
      this.isPropagationStopped = wr, s && !this.isSimulated && s.stopPropagation();
    },
    stopImmediatePropagation: function() {
      var s = this.originalEvent;
      this.isImmediatePropagationStopped = wr, s && !this.isSimulated && s.stopImmediatePropagation(), this.stopPropagation();
    }
  }, p.each({
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
  }, p.event.addProp), p.each({ focus: "focusin", blur: "focusout" }, function(s, u) {
    function f(b) {
      var x = p.event.fix(b);
      x.type = b.type === "focusin" ? "focus" : "blur", x.isSimulated = !0, x.target === x.currentTarget && we.get(this, "handle")(x);
    }
    p.event.special[s] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function() {
        if (Ii(this, s, !0), z)
          this.addEventListener(u, f);
        else
          return !1;
      },
      trigger: function() {
        return Ii(this, s), !0;
      },
      teardown: function() {
        if (z)
          this.removeEventListener(u, f);
        else
          return !1;
      },
      // Suppress native focus or blur if we're currently inside
      // a leveraged native-event stack
      _default: function(b) {
        return we.get(b.target, s);
      },
      delegateType: u
    };
  }), p.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(s, u) {
    p.event.special[s] = {
      delegateType: u,
      bindType: u,
      handle: function(f) {
        var b, x = this, T = f.relatedTarget, L = f.handleObj;
        return (!T || T !== x && !p.contains(x, T)) && (f.type = L.origType, b = L.handler.apply(this, arguments), f.type = u), b;
      }
    };
  }), p.fn.extend({
    on: function(s, u, f, b) {
      return $s(this, s, u, f, b);
    },
    one: function(s, u, f, b) {
      return $s(this, s, u, f, b, 1);
    },
    off: function(s, u, f) {
      var b, x;
      if (s && s.preventDefault && s.handleObj)
        return b = s.handleObj, p(s.delegateTarget).off(
          b.namespace ? b.origType + "." + b.namespace : b.origType,
          b.selector,
          b.handler
        ), this;
      if (typeof s == "object") {
        for (x in s)
          this.off(x, u, s[x]);
        return this;
      }
      return (u === !1 || typeof u == "function") && (f = u, u = void 0), f === !1 && (f = xr), this.each(function() {
        p.event.remove(this, s, f, u);
      });
    }
  });
  var vf = /<script|<style|<link/i;
  function Go(s, u) {
    return M(s, "table") && M(u.nodeType !== 11 ? u : u.firstChild, "tr") && p(s).children("tbody")[0] || s;
  }
  function Xo(s, u) {
    var f, b, x, T = we.get(s, "events");
    if (u.nodeType === 1) {
      if (T) {
        we.remove(u, "handle events");
        for (f in T)
          for (b = 0, x = T[f].length; b < x; b++)
            p.event.add(u, f, T[f][b]);
      }
      mt.hasData(s) && mt.set(u, p.extend({}, mt.get(s)));
    }
  }
  function zo(s, u, f) {
    for (var b, x = u ? p.filter(u, s) : s, T = 0; (b = x[T]) != null; T++)
      !f && b.nodeType === 1 && p.cleanData(gt(b)), b.parentNode && (f && Jr(b) && Ms(gt(b, "script")), b.parentNode.removeChild(b));
    return s;
  }
  p.extend({
    htmlPrefilter: function(s) {
      return s;
    },
    clone: function(s, u, f) {
      var b, x, T, L, H = s.cloneNode(!0), B = Jr(s);
      if (z && (s.nodeType === 1 || s.nodeType === 11) && !p.isXMLDoc(s))
        for (L = gt(H), T = gt(s), b = 0, x = T.length; b < x; b++)
          M(L[b], "textarea") && (L[b].defaultValue = T[b].defaultValue);
      if (u)
        if (f)
          for (T = T || gt(s), L = L || gt(H), b = 0, x = T.length; b < x; b++)
            Xo(T[b], L[b]);
        else
          Xo(s, H);
      return L = gt(H, "script"), L.length > 0 && Ms(L, !B && gt(s, "script")), H;
    },
    cleanData: function(s) {
      for (var u, f, b, x = p.event.special, T = 0; (f = s[T]) !== void 0; T++)
        if (Ur(f)) {
          if (u = f[we.expando]) {
            if (u.events)
              for (b in u.events)
                x[b] ? p.event.remove(f, b) : p.removeEvent(f, b, u.handle);
            f[we.expando] = void 0;
          }
          f[mt.expando] && (f[mt.expando] = void 0);
        }
    }
  }), p.fn.extend({
    detach: function(s) {
      return zo(this, s, !0);
    },
    remove: function(s) {
      return zo(this, s);
    },
    text: function(s) {
      return Ke(this, function(u) {
        return u === void 0 ? p.text(this) : this.empty().each(function() {
          (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = u);
        });
      }, null, s, arguments.length);
    },
    append: function() {
      return yr(this, arguments, function(s) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var u = Go(this, s);
          u.appendChild(s);
        }
      });
    },
    prepend: function() {
      return yr(this, arguments, function(s) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var u = Go(this, s);
          u.insertBefore(s, u.firstChild);
        }
      });
    },
    before: function() {
      return yr(this, arguments, function(s) {
        this.parentNode && this.parentNode.insertBefore(s, this);
      });
    },
    after: function() {
      return yr(this, arguments, function(s) {
        this.parentNode && this.parentNode.insertBefore(s, this.nextSibling);
      });
    },
    empty: function() {
      for (var s, u = 0; (s = this[u]) != null; u++)
        s.nodeType === 1 && (p.cleanData(gt(s, !1)), s.textContent = "");
      return this;
    },
    clone: function(s, u) {
      return s = s ?? !1, u = u ?? s, this.map(function() {
        return p.clone(this, s, u);
      });
    },
    html: function(s) {
      return Ke(this, function(u) {
        var f = this[0] || {}, b = 0, x = this.length;
        if (u === void 0 && f.nodeType === 1)
          return f.innerHTML;
        if (typeof u == "string" && !vf.test(u) && !on[($o.exec(u) || ["", ""])[1].toLowerCase()]) {
          u = p.htmlPrefilter(u);
          try {
            for (; b < x; b++)
              f = this[b] || {}, f.nodeType === 1 && (p.cleanData(gt(f, !1)), f.innerHTML = u);
            f = 0;
          } catch {
          }
        }
        f && this.empty().append(u);
      }, null, s, arguments.length);
    },
    replaceWith: function() {
      var s = [];
      return yr(this, arguments, function(u) {
        var f = this.parentNode;
        p.inArray(this, s) < 0 && (p.cleanData(gt(this)), f && f.replaceChild(u, this));
      }, s);
    }
  }), p.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(s, u) {
    p.fn[s] = function(f) {
      for (var b, x = [], T = p(f), L = T.length - 1, H = 0; H <= L; H++)
        b = H === L ? this : this.clone(!0), p(T[H])[u](b), o.apply(x, b);
      return this.pushStack(x);
    };
  });
  var mf = new RegExp("^(" + Ho + ")(?!px)[a-z%]+$", "i"), js = /^--/;
  function Oi(s) {
    var u = s.ownerDocument.defaultView;
    return u || (u = e), u.getComputedStyle(s);
  }
  function gf(s, u, f) {
    var b, x, T = {};
    for (x in u)
      T[x] = s.style[x], s.style[x] = u[x];
    b = f.call(s);
    for (x in u)
      s.style[x] = T[x];
    return b;
  }
  function Uo(s, u, f) {
    var b, x = js.test(u);
    return f = f || Oi(s), f && (b = f.getPropertyValue(u) || f[u], x && b && (b = b.replace(F, "$1") || void 0), b === "" && !Jr(s) && (b = p.style(s, u))), b !== void 0 ? (
      // Support: IE <=9 - 11+
      // IE returns zIndex value as an integer.
      b + ""
    ) : b;
  }
  var Yo = ["Webkit", "Moz", "ms"], Ko = l.createElement("div").style;
  function bf(s) {
    for (var u = s[0].toUpperCase() + s.slice(1), f = Yo.length; f--; )
      if (s = Yo[f] + u, s in Ko)
        return s;
  }
  function Ws(s) {
    return s in Ko ? s : bf(s) || s;
  }
  var Jo, Qo, gn = l.createElement("table");
  function Zo() {
    if (
      // This is a singleton, we need to execute it only once
      !(!gn || // Finish early in limited (non-browser) environments
      !gn.style)
    ) {
      var s, u = l.createElement("col"), f = l.createElement("tr"), b = l.createElement("td");
      if (gn.style.cssText = "position:absolute;left:-11111px;border-collapse:separate;border-spacing:0", f.style.cssText = "box-sizing:content-box;border:1px solid;height:1px", b.style.cssText = "height:9px;width:9px;padding:0", u.span = 2, V.appendChild(gn).appendChild(u).parentNode.appendChild(f).appendChild(b).parentNode.appendChild(b.cloneNode(!0)), gn.offsetWidth === 0) {
        V.removeChild(gn);
        return;
      }
      s = e.getComputedStyle(f), Qo = z || Math.round(
        parseFloat(
          e.getComputedStyle(u).width
        )
      ) === 18, Jo = Math.round(parseFloat(s.height) + parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth)) === f.offsetHeight, V.removeChild(gn), gn = null;
    }
  }
  p.extend(C, {
    reliableTrDimensions: function() {
      return Zo(), Jo;
    },
    reliableColDimensions: function() {
      return Zo(), Qo;
    }
  });
  var yf = { position: "absolute", visibility: "hidden", display: "block" }, el = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  function tl(s, u, f) {
    var b = Kr.exec(u);
    return b ? (
      // Guard against undefined "subtract", e.g., when used as in cssHooks
      Math.max(0, b[2] - (f || 0)) + (b[3] || "px")
    ) : u;
  }
  function nl(s, u, f, b, x, T) {
    var L = u === "width" ? 1 : 0, H = 0, B = 0, $ = 0;
    if (f === (b ? "border" : "content"))
      return 0;
    for (; L < 4; L += 2)
      f === "margin" && ($ += p.css(s, f + mn[L], !0, x)), b ? (f === "content" && (B -= p.css(s, "padding" + mn[L], !0, x)), f !== "margin" && (B -= p.css(s, "border" + mn[L] + "Width", !0, x))) : (B += p.css(s, "padding" + mn[L], !0, x), f !== "padding" ? B += p.css(s, "border" + mn[L] + "Width", !0, x) : H += p.css(s, "border" + mn[L] + "Width", !0, x));
    return !b && T >= 0 && (B += Math.max(0, Math.ceil(
      s["offset" + u[0].toUpperCase() + u.slice(1)] - T - B - H - 0.5
      // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
    )) || 0), B + $;
  }
  function rl(s, u, f) {
    var b = Oi(s), x = z || f, T = x && p.css(s, "boxSizing", !1, b) === "border-box", L = T, H = Uo(s, u, b), B = "offset" + u[0].toUpperCase() + u.slice(1);
    if (mf.test(H)) {
      if (!f)
        return H;
      H = "auto";
    }
    return (
      // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      (H === "auto" || // Support: IE 9 - 11+
      // Use offsetWidth/offsetHeight for when box sizing is unreliable.
      // In those cases, the computed value can be trusted to be border-box.
      z && T || !C.reliableColDimensions() && M(s, "col") || !C.reliableTrDimensions() && M(s, "tr")) && // Make sure the element is visible & connected
      s.getClientRects().length && (T = p.css(s, "boxSizing", !1, b) === "border-box", L = B in s, L && (H = s[B])), H = parseFloat(H) || 0, H + nl(
        s,
        u,
        f || (T ? "border" : "content"),
        L,
        b,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        H
      ) + "px"
    );
  }
  p.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {},
    // Get and set the style property on a DOM Node
    style: function(s, u, f, b) {
      if (!(!s || s.nodeType === 3 || s.nodeType === 8 || !s.style)) {
        var x, T, L, H = Vs(u), B = js.test(u), $ = s.style;
        if (B || (u = Ws(H)), L = p.cssHooks[u] || p.cssHooks[H], f !== void 0) {
          if (T = typeof f, T === "string" && (x = Kr.exec(f)) && x[1] && (f = Vo(s, u, x), T = "number"), f == null || f !== f)
            return;
          T === "number" && (f += x && x[3] || (Li(H) ? "px" : "")), z && f === "" && u.indexOf("background") === 0 && ($[u] = "inherit"), (!L || !("set" in L) || (f = L.set(s, f, b)) !== void 0) && (B ? $.setProperty(u, f) : $[u] = f);
        } else
          return L && "get" in L && (x = L.get(s, !1, b)) !== void 0 ? x : $[u];
      }
    },
    css: function(s, u, f, b) {
      var x, T, L, H = Vs(u), B = js.test(u);
      return B || (u = Ws(H)), L = p.cssHooks[u] || p.cssHooks[H], L && "get" in L && (x = L.get(s, !0, f)), x === void 0 && (x = Uo(s, u, b)), x === "normal" && u in el && (x = el[u]), f === "" || f ? (T = parseFloat(x), f === !0 || isFinite(T) ? T || 0 : x) : x;
    }
  }), p.each(["height", "width"], function(s, u) {
    p.cssHooks[u] = {
      get: function(f, b, x) {
        if (b)
          return p.css(f, "display") === "none" ? gf(f, yf, function() {
            return rl(f, u, x);
          }) : rl(f, u, x);
      },
      set: function(f, b, x) {
        var T, L = Oi(f), H = x && p.css(f, "boxSizing", !1, L) === "border-box", B = x ? nl(
          f,
          u,
          x,
          H,
          L
        ) : 0;
        return B && (T = Kr.exec(b)) && (T[3] || "px") !== "px" && (f.style[u] = b, b = p.css(f, u)), tl(f, b, B);
      }
    };
  }), p.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(s, u) {
    p.cssHooks[s + u] = {
      expand: function(f) {
        for (var b = 0, x = {}, T = typeof f == "string" ? f.split(" ") : [f]; b < 4; b++)
          x[s + mn[b] + u] = T[b] || T[b - 2] || T[0];
        return x;
      }
    }, s !== "margin" && (p.cssHooks[s + u].set = tl);
  }), p.fn.extend({
    css: function(s, u) {
      return Ke(this, function(f, b, x) {
        var T, L, H = {}, B = 0;
        if (Array.isArray(b)) {
          for (T = Oi(f), L = b.length; B < L; B++)
            H[b[B]] = p.css(f, b[B], !1, T);
          return H;
        }
        return x !== void 0 ? p.style(f, b, x) : p.css(f, b);
      }, s, u, arguments.length > 1);
    }
  });
  function Nt(s, u, f, b, x) {
    return new Nt.prototype.init(s, u, f, b, x);
  }
  p.Tween = Nt, Nt.prototype = {
    constructor: Nt,
    init: function(s, u, f, b, x, T) {
      this.elem = s, this.prop = f, this.easing = x || p.easing._default, this.options = u, this.start = this.now = this.cur(), this.end = b, this.unit = T || (Li(f) ? "px" : "");
    },
    cur: function() {
      var s = Nt.propHooks[this.prop];
      return s && s.get ? s.get(this) : Nt.propHooks._default.get(this);
    },
    run: function(s) {
      var u, f = Nt.propHooks[this.prop];
      return this.options.duration ? this.pos = u = p.easing[this.easing](
        s,
        this.options.duration * s,
        0,
        1,
        this.options.duration
      ) : this.pos = u = s, this.now = (this.end - this.start) * u + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), f && f.set ? f.set(this) : Nt.propHooks._default.set(this), this;
    }
  }, Nt.prototype.init.prototype = Nt.prototype, Nt.propHooks = {
    _default: {
      get: function(s) {
        var u;
        return s.elem.nodeType !== 1 || s.elem[s.prop] != null && s.elem.style[s.prop] == null ? s.elem[s.prop] : (u = p.css(s.elem, s.prop, ""), !u || u === "auto" ? 0 : u);
      },
      set: function(s) {
        p.fx.step[s.prop] ? p.fx.step[s.prop](s) : s.elem.nodeType === 1 && (p.cssHooks[s.prop] || s.elem.style[Ws(s.prop)] != null) ? p.style(s.elem, s.prop, s.now + s.unit) : s.elem[s.prop] = s.now;
      }
    }
  }, p.easing = {
    linear: function(s) {
      return s;
    },
    swing: function(s) {
      return 0.5 - Math.cos(s * Math.PI) / 2;
    },
    _default: "swing"
  }, p.fx = Nt.prototype.init, p.fx.step = {};
  var _r, Ei, wf = /^(?:toggle|show|hide)$/, xf = /queueHooks$/;
  function qs() {
    Ei && (l.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(qs) : e.setTimeout(qs, 13), p.fx.tick());
  }
  function il() {
    return e.setTimeout(function() {
      _r = void 0;
    }), _r = Date.now();
  }
  function Bi(s, u) {
    var f, b = 0, x = { height: s };
    for (u = u ? 1 : 0; b < 4; b += 2 - u)
      f = mn[b], x["margin" + f] = x["padding" + f] = s;
    return u && (x.opacity = x.width = s), x;
  }
  function sl(s, u, f) {
    for (var b, x = (Mt.tweeners[u] || []).concat(Mt.tweeners["*"]), T = 0, L = x.length; T < L; T++)
      if (b = x[T].call(f, u, s))
        return b;
  }
  function _f(s, u, f) {
    var b, x, T, L, H, B, $, G, K = "width" in u || "height" in u, W = this, Y = {}, se = s.style, ye = s.nodeType && Ri(s), me = we.get(s, "fxshow");
    f.queue || (L = p._queueHooks(s, "fx"), L.unqueued == null && (L.unqueued = 0, H = L.empty.fire, L.empty.fire = function() {
      L.unqueued || H();
    }), L.unqueued++, W.always(function() {
      W.always(function() {
        L.unqueued--, p.queue(s, "fx").length || L.empty.fire();
      });
    }));
    for (b in u)
      if (x = u[b], wf.test(x)) {
        if (delete u[b], T = T || x === "toggle", x === (ye ? "hide" : "show"))
          if (x === "show" && me && me[b] !== void 0)
            ye = !0;
          else
            continue;
        Y[b] = me && me[b] || p.style(s, b);
      }
    if (B = !p.isEmptyObject(u), !(!B && p.isEmptyObject(Y))) {
      K && s.nodeType === 1 && (f.overflow = [se.overflow, se.overflowX, se.overflowY], $ = me && me.display, $ == null && ($ = we.get(s, "display")), G = p.css(s, "display"), G === "none" && ($ ? G = $ : (br([s], !0), $ = s.style.display || $, G = p.css(s, "display"), br([s]))), (G === "inline" || G === "inline-block" && $ != null) && p.css(s, "float") === "none" && (B || (W.done(function() {
        se.display = $;
      }), $ == null && (G = se.display, $ = G === "none" ? "" : G)), se.display = "inline-block")), f.overflow && (se.overflow = "hidden", W.always(function() {
        se.overflow = f.overflow[0], se.overflowX = f.overflow[1], se.overflowY = f.overflow[2];
      })), B = !1;
      for (b in Y)
        B || (me ? "hidden" in me && (ye = me.hidden) : me = we.set(s, "fxshow", { display: $ }), T && (me.hidden = !ye), ye && br([s], !0), W.done(function() {
          ye || br([s]), we.remove(s, "fxshow");
          for (b in Y)
            p.style(s, b, Y[b]);
        })), B = sl(ye ? me[b] : 0, b, W), b in me || (me[b] = B.start, ye && (B.end = B.start, B.start = 0));
    }
  }
  function Cf(s, u) {
    var f, b, x, T, L;
    for (f in s)
      if (b = Vs(f), x = u[b], T = s[f], Array.isArray(T) && (x = T[1], T = s[f] = T[0]), f !== b && (s[b] = T, delete s[f]), L = p.cssHooks[b], L && "expand" in L) {
        T = L.expand(T), delete s[b];
        for (f in T)
          f in s || (s[f] = T[f], u[f] = x);
      } else
        u[b] = x;
  }
  function Mt(s, u, f) {
    var b, x, T = 0, L = Mt.prefilters.length, H = p.Deferred().always(function() {
      delete B.elem;
    }), B = function() {
      if (x)
        return !1;
      for (var K = _r || il(), W = Math.max(0, $.startTime + $.duration - K), Y = 1 - (W / $.duration || 0), se = 0, ye = $.tweens.length; se < ye; se++)
        $.tweens[se].run(Y);
      return H.notifyWith(s, [$, Y, W]), Y < 1 && ye ? W : (ye || H.notifyWith(s, [$, 1, 0]), H.resolveWith(s, [$]), !1);
    }, $ = H.promise({
      elem: s,
      props: p.extend({}, u),
      opts: p.extend(!0, {
        specialEasing: {},
        easing: p.easing._default
      }, f),
      originalProperties: u,
      originalOptions: f,
      startTime: _r || il(),
      duration: f.duration,
      tweens: [],
      createTween: function(K, W) {
        var Y = p.Tween(
          s,
          $.opts,
          K,
          W,
          $.opts.specialEasing[K] || $.opts.easing
        );
        return $.tweens.push(Y), Y;
      },
      stop: function(K) {
        var W = 0, Y = K ? $.tweens.length : 0;
        if (x)
          return this;
        for (x = !0; W < Y; W++)
          $.tweens[W].run(1);
        return K ? (H.notifyWith(s, [$, 1, 0]), H.resolveWith(s, [$, K])) : H.rejectWith(s, [$, K]), this;
      }
    }), G = $.props;
    for (Cf(G, $.opts.specialEasing); T < L; T++)
      if (b = Mt.prefilters[T].call($, s, G, $.opts), b)
        return typeof b.stop == "function" && (p._queueHooks($.elem, $.opts.queue).stop = b.stop.bind(b)), b;
    return p.map(G, sl, $), typeof $.opts.start == "function" && $.opts.start.call(s, $), $.progress($.opts.progress).done($.opts.done, $.opts.complete).fail($.opts.fail).always($.opts.always), p.fx.timer(
      p.extend(B, {
        elem: s,
        anim: $,
        queue: $.opts.queue
      })
    ), $;
  }
  p.Animation = p.extend(Mt, {
    tweeners: {
      "*": [function(s, u) {
        var f = this.createTween(s, u);
        return Vo(f.elem, s, Kr.exec(u), f), f;
      }]
    },
    tweener: function(s, u) {
      typeof s == "function" ? (u = s, s = ["*"]) : s = s.match(Fe);
      for (var f, b = 0, x = s.length; b < x; b++)
        f = s[b], Mt.tweeners[f] = Mt.tweeners[f] || [], Mt.tweeners[f].unshift(u);
    },
    prefilters: [_f],
    prefilter: function(s, u) {
      u ? Mt.prefilters.unshift(s) : Mt.prefilters.push(s);
    }
  }), p.speed = function(s, u, f) {
    var b = s && typeof s == "object" ? p.extend({}, s) : {
      complete: f || u || typeof s == "function" && s,
      duration: s,
      easing: f && u || u && typeof u != "function" && u
    };
    return p.fx.off ? b.duration = 0 : typeof b.duration != "number" && (b.duration in p.fx.speeds ? b.duration = p.fx.speeds[b.duration] : b.duration = p.fx.speeds._default), (b.queue == null || b.queue === !0) && (b.queue = "fx"), b.old = b.complete, b.complete = function() {
      typeof b.old == "function" && b.old.call(this), b.queue && p.dequeue(this, b.queue);
    }, b;
  }, p.fn.extend({
    fadeTo: function(s, u, f, b) {
      return this.filter(Ri).css("opacity", 0).show().end().animate({ opacity: u }, s, f, b);
    },
    animate: function(s, u, f, b) {
      var x = p.isEmptyObject(s), T = p.speed(u, f, b), L = function() {
        var H = Mt(this, p.extend({}, s), T);
        (x || we.get(this, "finish")) && H.stop(!0);
      };
      return L.finish = L, x || T.queue === !1 ? this.each(L) : this.queue(T.queue, L);
    },
    stop: function(s, u, f) {
      var b = function(x) {
        var T = x.stop;
        delete x.stop, T(f);
      };
      return typeof s != "string" && (f = u, u = s, s = void 0), u && this.queue(s || "fx", []), this.each(function() {
        var x = !0, T = s != null && s + "queueHooks", L = p.timers, H = we.get(this);
        if (T)
          H[T] && H[T].stop && b(H[T]);
        else
          for (T in H)
            H[T] && H[T].stop && xf.test(T) && b(H[T]);
        for (T = L.length; T--; )
          L[T].elem === this && (s == null || L[T].queue === s) && (L[T].anim.stop(f), x = !1, L.splice(T, 1));
        (x || !f) && p.dequeue(this, s);
      });
    },
    finish: function(s) {
      return s !== !1 && (s = s || "fx"), this.each(function() {
        var u, f = we.get(this), b = f[s + "queue"], x = f[s + "queueHooks"], T = p.timers, L = b ? b.length : 0;
        for (f.finish = !0, p.queue(this, s, []), x && x.stop && x.stop.call(this, !0), u = T.length; u--; )
          T[u].elem === this && T[u].queue === s && (T[u].anim.stop(!0), T.splice(u, 1));
        for (u = 0; u < L; u++)
          b[u] && b[u].finish && b[u].finish.call(this);
        delete f.finish;
      });
    }
  }), p.each(["toggle", "show", "hide"], function(s, u) {
    var f = p.fn[u];
    p.fn[u] = function(b, x, T) {
      return b == null || typeof b == "boolean" ? f.apply(this, arguments) : this.animate(Bi(u, !0), b, x, T);
    };
  }), p.each({
    slideDown: Bi("show"),
    slideUp: Bi("hide"),
    slideToggle: Bi("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
  }, function(s, u) {
    p.fn[s] = function(f, b, x) {
      return this.animate(u, f, b, x);
    };
  }), p.timers = [], p.fx.tick = function() {
    var s, u = 0, f = p.timers;
    for (_r = Date.now(); u < f.length; u++)
      s = f[u], !s() && f[u] === s && f.splice(u--, 1);
    f.length || p.fx.stop(), _r = void 0;
  }, p.fx.timer = function(s) {
    p.timers.push(s), p.fx.start();
  }, p.fx.start = function() {
    Ei || (Ei = !0, qs());
  }, p.fx.stop = function() {
    Ei = null;
  }, p.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }, p.fn.delay = function(s, u) {
    return s = p.fx && p.fx.speeds[s] || s, u = u || "fx", this.queue(u, function(f, b) {
      var x = e.setTimeout(f, s);
      b.stop = function() {
        e.clearTimeout(x);
      };
    });
  };
  var Tf = /^(?:input|select|textarea|button)$/i, Sf = /^(?:a|area)$/i;
  p.fn.extend({
    prop: function(s, u) {
      return Ke(this, p.prop, s, u, arguments.length > 1);
    },
    removeProp: function(s) {
      return this.each(function() {
        delete this[p.propFix[s] || s];
      });
    }
  }), p.extend({
    prop: function(s, u, f) {
      var b, x, T = s.nodeType;
      if (!(T === 3 || T === 8 || T === 2))
        return (T !== 1 || !p.isXMLDoc(s)) && (u = p.propFix[u] || u, x = p.propHooks[u]), f !== void 0 ? x && "set" in x && (b = x.set(s, f, u)) !== void 0 ? b : s[u] = f : x && "get" in x && (b = x.get(s, u)) !== null ? b : s[u];
    },
    propHooks: {
      tabIndex: {
        get: function(s) {
          var u = s.getAttribute("tabindex");
          return u ? parseInt(u, 10) : Tf.test(s.nodeName) || // href-less anchor's `tabIndex` property value is `0` and
          // the `tabindex` attribute value: `null`. We want `-1`.
          Sf.test(s.nodeName) && s.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), z && (p.propHooks.selected = {
    get: function(s) {
      var u = s.parentNode;
      return u && u.parentNode && u.parentNode.selectedIndex, null;
    },
    set: function(s) {
      var u = s.parentNode;
      u && (u.selectedIndex, u.parentNode && u.parentNode.selectedIndex);
    }
  }), p.each([
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
    p.propFix[this.toLowerCase()] = this;
  });
  function Yn(s) {
    var u = s.match(Fe) || [];
    return u.join(" ");
  }
  function Cr(s) {
    return s.getAttribute && s.getAttribute("class") || "";
  }
  function Gs(s) {
    return Array.isArray(s) ? s : typeof s == "string" ? s.match(Fe) || [] : [];
  }
  p.fn.extend({
    addClass: function(s) {
      var u, f, b, x, T, L;
      return typeof s == "function" ? this.each(function(H) {
        p(this).addClass(s.call(this, H, Cr(this)));
      }) : (u = Gs(s), u.length ? this.each(function() {
        if (b = Cr(this), f = this.nodeType === 1 && " " + Yn(b) + " ", f) {
          for (T = 0; T < u.length; T++)
            x = u[T], f.indexOf(" " + x + " ") < 0 && (f += x + " ");
          L = Yn(f), b !== L && this.setAttribute("class", L);
        }
      }) : this);
    },
    removeClass: function(s) {
      var u, f, b, x, T, L;
      return typeof s == "function" ? this.each(function(H) {
        p(this).removeClass(s.call(this, H, Cr(this)));
      }) : arguments.length ? (u = Gs(s), u.length ? this.each(function() {
        if (b = Cr(this), f = this.nodeType === 1 && " " + Yn(b) + " ", f) {
          for (T = 0; T < u.length; T++)
            for (x = u[T]; f.indexOf(" " + x + " ") > -1; )
              f = f.replace(" " + x + " ", " ");
          L = Yn(f), b !== L && this.setAttribute("class", L);
        }
      }) : this) : this.attr("class", "");
    },
    toggleClass: function(s, u) {
      var f, b, x, T;
      return typeof s == "function" ? this.each(function(L) {
        p(this).toggleClass(
          s.call(this, L, Cr(this), u),
          u
        );
      }) : typeof u == "boolean" ? u ? this.addClass(s) : this.removeClass(s) : (f = Gs(s), f.length ? this.each(function() {
        for (T = p(this), x = 0; x < f.length; x++)
          b = f[x], T.hasClass(b) ? T.removeClass(b) : T.addClass(b);
      }) : this);
    },
    hasClass: function(s) {
      var u, f, b = 0;
      for (u = " " + s + " "; f = this[b++]; )
        if (f.nodeType === 1 && (" " + Yn(Cr(f)) + " ").indexOf(u) > -1)
          return !0;
      return !1;
    }
  }), p.fn.extend({
    val: function(s) {
      var u, f, b, x = this[0];
      return arguments.length ? (b = typeof s == "function", this.each(function(T) {
        var L;
        this.nodeType === 1 && (b ? L = s.call(this, T, p(this).val()) : L = s, L == null ? L = "" : typeof L == "number" ? L += "" : Array.isArray(L) && (L = p.map(L, function(H) {
          return H == null ? "" : H + "";
        })), u = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], (!u || !("set" in u) || u.set(this, L, "value") === void 0) && (this.value = L));
      })) : x ? (u = p.valHooks[x.type] || p.valHooks[x.nodeName.toLowerCase()], u && "get" in u && (f = u.get(x, "value")) !== void 0 ? f : (f = x.value, f ?? "")) : void 0;
    }
  }), p.extend({
    valHooks: {
      select: {
        get: function(s) {
          var u, f, b, x = s.options, T = s.selectedIndex, L = s.type === "select-one", H = L ? null : [], B = L ? T + 1 : x.length;
          for (T < 0 ? b = B : b = L ? T : 0; b < B; b++)
            if (f = x[b], f.selected && // Don't return options that are disabled or in a disabled optgroup
            !f.disabled && (!f.parentNode.disabled || !M(f.parentNode, "optgroup"))) {
              if (u = p(f).val(), L)
                return u;
              H.push(u);
            }
          return H;
        },
        set: function(s, u) {
          for (var f, b, x = s.options, T = p.makeArray(u), L = x.length; L--; )
            b = x[L], (b.selected = p.inArray(p(b).val(), T) > -1) && (f = !0);
          return f || (s.selectedIndex = -1), T;
        }
      }
    }
  }), z && (p.valHooks.option = {
    get: function(s) {
      var u = s.getAttribute("value");
      return u ?? // Support: IE <=10 - 11+
      // option.text throws exceptions (trac-14686, trac-14858)
      // Strip and collapse whitespace
      // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
      Yn(p.text(s));
    }
  }), p.each(["radio", "checkbox"], function() {
    p.valHooks[this] = {
      set: function(s, u) {
        if (Array.isArray(u))
          return s.checked = p.inArray(p(s).val(), u) > -1;
      }
    };
  });
  var al = /^(?:focusinfocus|focusoutblur)$/, ol = function(s) {
    s.stopPropagation();
  };
  p.extend(p.event, {
    trigger: function(s, u, f, b) {
      var x, T, L, H, B, $, G, K, W = [f || l], Y = g.call(s, "type") ? s.type : s, se = g.call(s, "namespace") ? s.namespace.split(".") : [];
      if (T = K = L = f = f || l, !(f.nodeType === 3 || f.nodeType === 8) && !al.test(Y + p.event.triggered) && (Y.indexOf(".") > -1 && (se = Y.split("."), Y = se.shift(), se.sort()), B = Y.indexOf(":") < 0 && "on" + Y, s = s[p.expando] ? s : new p.Event(Y, typeof s == "object" && s), s.isTrigger = b ? 2 : 3, s.namespace = se.join("."), s.rnamespace = s.namespace ? new RegExp("(^|\\.)" + se.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, s.result = void 0, s.target || (s.target = f), u = u == null ? [s] : p.makeArray(u, [s]), G = p.event.special[Y] || {}, !(!b && G.trigger && G.trigger.apply(f, u) === !1))) {
        if (!b && !G.noBubble && !S(f)) {
          for (H = G.delegateType || Y, al.test(H + Y) || (T = T.parentNode); T; T = T.parentNode)
            W.push(T), L = T;
          L === (f.ownerDocument || l) && W.push(L.defaultView || L.parentWindow || e);
        }
        for (x = 0; (T = W[x++]) && !s.isPropagationStopped(); )
          K = T, s.type = x > 1 ? H : G.bindType || Y, $ = (we.get(T, "events") || /* @__PURE__ */ Object.create(null))[s.type] && we.get(T, "handle"), $ && $.apply(T, u), $ = B && T[B], $ && $.apply && Ur(T) && (s.result = $.apply(T, u), s.result === !1 && s.preventDefault());
        return s.type = Y, !b && !s.isDefaultPrevented() && (!G._default || G._default.apply(W.pop(), u) === !1) && Ur(f) && B && typeof f[Y] == "function" && !S(f) && (L = f[B], L && (f[B] = null), p.event.triggered = Y, s.isPropagationStopped() && K.addEventListener(Y, ol), f[Y](), s.isPropagationStopped() && K.removeEventListener(Y, ol), p.event.triggered = void 0, L && (f[B] = L)), s.result;
      }
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function(s, u, f) {
      var b = p.extend(
        new p.Event(),
        f,
        {
          type: s,
          isSimulated: !0
        }
      );
      p.event.trigger(b, null, u);
    }
  }), p.fn.extend({
    trigger: function(s, u) {
      return this.each(function() {
        p.event.trigger(s, u, this);
      });
    },
    triggerHandler: function(s, u) {
      var f = this[0];
      if (f)
        return p.event.trigger(s, u, f, !0);
    }
  });
  var Qr = e.location, ll = { guid: Date.now() }, Xs = /\?/;
  p.parseXML = function(s) {
    var u, f;
    if (!s || typeof s != "string")
      return null;
    try {
      u = new e.DOMParser().parseFromString(s, "text/xml");
    } catch {
    }
    return f = u && u.getElementsByTagName("parsererror")[0], (!u || f) && p.error("Invalid XML: " + (f ? p.map(f.childNodes, function(b) {
      return b.textContent;
    }).join(`
`) : s)), u;
  };
  var Df = /\[\]$/, ul = /\r?\n/g, Af = /^(?:submit|button|image|reset|file)$/i, Pf = /^(?:input|select|textarea|keygen)/i;
  function zs(s, u, f, b) {
    var x;
    if (Array.isArray(u))
      p.each(u, function(T, L) {
        f || Df.test(s) ? b(s, L) : zs(
          s + "[" + (typeof L == "object" && L != null ? T : "") + "]",
          L,
          f,
          b
        );
      });
    else if (!f && k(u) === "object")
      for (x in u)
        zs(s + "[" + x + "]", u[x], f, b);
    else
      b(s, u);
  }
  p.param = function(s, u) {
    var f, b = [], x = function(T, L) {
      var H = typeof L == "function" ? L() : L;
      b[b.length] = encodeURIComponent(T) + "=" + encodeURIComponent(H ?? "");
    };
    if (s == null)
      return "";
    if (Array.isArray(s) || s.jquery && !p.isPlainObject(s))
      p.each(s, function() {
        x(this.name, this.value);
      });
    else
      for (f in s)
        zs(f, s[f], u, x);
    return b.join("&");
  }, p.fn.extend({
    serialize: function() {
      return p.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var s = p.prop(this, "elements");
        return s ? p.makeArray(s) : this;
      }).filter(function() {
        var s = this.type;
        return this.name && !p(this).is(":disabled") && Pf.test(this.nodeName) && !Af.test(s) && (this.checked || !Ni.test(s));
      }).map(function(s, u) {
        var f = p(this).val();
        return f == null ? null : Array.isArray(f) ? p.map(f, function(b) {
          return { name: u.name, value: b.replace(ul, `\r
`) };
        }) : { name: u.name, value: f.replace(ul, `\r
`) };
      }).get();
    }
  });
  var kf = /%20/g, Rf = /#.*$/, Lf = /([?&])_=[^&]*/, Nf = /^(.*?):[ \t]*([^\r\n]*)$/mg, If = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Of = /^(?:GET|HEAD)$/, Ef = /^\/\//, cl = {}, Us = {}, dl = "*/".concat("*"), Ys = l.createElement("a");
  Ys.href = Qr.href;
  function fl(s) {
    return function(u, f) {
      typeof u != "string" && (f = u, u = "*");
      var b, x = 0, T = u.toLowerCase().match(Fe) || [];
      if (typeof f == "function")
        for (; b = T[x++]; )
          b[0] === "+" ? (b = b.slice(1) || "*", (s[b] = s[b] || []).unshift(f)) : (s[b] = s[b] || []).push(f);
    };
  }
  function hl(s, u, f, b) {
    var x = {}, T = s === Us;
    function L(H) {
      var B;
      return x[H] = !0, p.each(s[H] || [], function($, G) {
        var K = G(u, f, b);
        if (typeof K == "string" && !T && !x[K])
          return u.dataTypes.unshift(K), L(K), !1;
        if (T)
          return !(B = K);
      }), B;
    }
    return L(u.dataTypes[0]) || !x["*"] && L("*");
  }
  function Ks(s, u) {
    var f, b, x = p.ajaxSettings.flatOptions || {};
    for (f in u)
      u[f] !== void 0 && ((x[f] ? s : b || (b = {}))[f] = u[f]);
    return b && p.extend(!0, s, b), s;
  }
  function Bf(s, u, f) {
    for (var b, x, T, L, H = s.contents, B = s.dataTypes; B[0] === "*"; )
      B.shift(), b === void 0 && (b = s.mimeType || u.getResponseHeader("Content-Type"));
    if (b) {
      for (x in H)
        if (H[x] && H[x].test(b)) {
          B.unshift(x);
          break;
        }
    }
    if (B[0] in f)
      T = B[0];
    else {
      for (x in f) {
        if (!B[0] || s.converters[x + " " + B[0]]) {
          T = x;
          break;
        }
        L || (L = x);
      }
      T = T || L;
    }
    if (T)
      return T !== B[0] && B.unshift(T), f[T];
  }
  function Ff(s, u, f, b) {
    var x, T, L, H, B, $ = {}, G = s.dataTypes.slice();
    if (G[1])
      for (L in s.converters)
        $[L.toLowerCase()] = s.converters[L];
    for (T = G.shift(); T; )
      if (s.responseFields[T] && (f[s.responseFields[T]] = u), !B && b && s.dataFilter && (u = s.dataFilter(u, s.dataType)), B = T, T = G.shift(), T) {
        if (T === "*")
          T = B;
        else if (B !== "*" && B !== T) {
          if (L = $[B + " " + T] || $["* " + T], !L) {
            for (x in $)
              if (H = x.split(" "), H[1] === T && (L = $[B + " " + H[0]] || $["* " + H[0]], L)) {
                L === !0 ? L = $[x] : $[x] !== !0 && (T = H[0], G.unshift(H[1]));
                break;
              }
          }
          if (L !== !0)
            if (L && s.throws)
              u = L(u);
            else
              try {
                u = L(u);
              } catch (K) {
                return {
                  state: "parsererror",
                  error: L ? K : "No conversion from " + B + " to " + T
                };
              }
        }
      }
    return { state: "success", data: u };
  }
  p.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Qr.href,
      type: "GET",
      isLocal: If.test(Qr.protocol),
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
        "*": dl,
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
        "text xml": p.parseXML
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
    ajaxSetup: function(s, u) {
      return u ? (
        // Building a settings object
        Ks(Ks(s, p.ajaxSettings), u)
      ) : (
        // Extending ajaxSettings
        Ks(p.ajaxSettings, s)
      );
    },
    ajaxPrefilter: fl(cl),
    ajaxTransport: fl(Us),
    // Main method
    ajax: function(s, u) {
      typeof s == "object" && (u = s, s = void 0), u = u || {};
      var f, b, x, T, L, H, B, $, G, K, W = p.ajaxSetup({}, u), Y = W.context || W, se = W.context && (Y.nodeType || Y.jquery) ? p(Y) : p.event, ye = p.Deferred(), me = p.Callbacks("once memory"), Ve = W.statusCode || {}, He = {}, bt = {}, ot = "canceled", Re = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function(Ie) {
          var Ye;
          if (B) {
            if (!T)
              for (T = {}; Ye = Nf.exec(x); )
                T[Ye[1].toLowerCase() + " "] = (T[Ye[1].toLowerCase() + " "] || []).concat(Ye[2]);
            Ye = T[Ie.toLowerCase() + " "];
          }
          return Ye == null ? null : Ye.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function() {
          return B ? x : null;
        },
        // Caches the header
        setRequestHeader: function(Ie, Ye) {
          return B == null && (Ie = bt[Ie.toLowerCase()] = bt[Ie.toLowerCase()] || Ie, He[Ie] = Ye), this;
        },
        // Overrides response content-type header
        overrideMimeType: function(Ie) {
          return B == null && (W.mimeType = Ie), this;
        },
        // Status-dependent callbacks
        statusCode: function(Ie) {
          var Ye;
          if (Ie)
            if (B)
              Re.always(Ie[Re.status]);
            else
              for (Ye in Ie)
                Ve[Ye] = [Ve[Ye], Ie[Ye]];
          return this;
        },
        // Cancel the request
        abort: function(Ie) {
          var Ye = Ie || ot;
          return f && f.abort(Ye), Fi(0, Ye), this;
        }
      };
      if (ye.promise(Re), W.url = ((s || W.url || Qr.href) + "").replace(Ef, Qr.protocol + "//"), W.type = u.method || u.type || W.method || W.type, W.dataTypes = (W.dataType || "*").toLowerCase().match(Fe) || [""], W.crossDomain == null) {
        H = l.createElement("a");
        try {
          H.href = W.url, H.href = H.href, W.crossDomain = Ys.protocol + "//" + Ys.host != H.protocol + "//" + H.host;
        } catch {
          W.crossDomain = !0;
        }
      }
      if (hl(cl, W, u, Re), W.data && W.processData && typeof W.data != "string" && (W.data = p.param(W.data, W.traditional)), B)
        return Re;
      $ = p.event && W.global, $ && p.active++ === 0 && p.event.trigger("ajaxStart"), W.type = W.type.toUpperCase(), W.hasContent = !Of.test(W.type), b = W.url.replace(Rf, ""), W.hasContent ? W.data && W.processData && (W.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (W.data = W.data.replace(kf, "+")) : (K = W.url.slice(b.length), W.data && (W.processData || typeof W.data == "string") && (b += (Xs.test(b) ? "&" : "?") + W.data, delete W.data), W.cache === !1 && (b = b.replace(Lf, "$1"), K = (Xs.test(b) ? "&" : "?") + "_=" + ll.guid++ + K), W.url = b + K), W.ifModified && (p.lastModified[b] && Re.setRequestHeader("If-Modified-Since", p.lastModified[b]), p.etag[b] && Re.setRequestHeader("If-None-Match", p.etag[b])), (W.data && W.hasContent && W.contentType !== !1 || u.contentType) && Re.setRequestHeader("Content-Type", W.contentType), Re.setRequestHeader(
        "Accept",
        W.dataTypes[0] && W.accepts[W.dataTypes[0]] ? W.accepts[W.dataTypes[0]] + (W.dataTypes[0] !== "*" ? ", " + dl + "; q=0.01" : "") : W.accepts["*"]
      );
      for (G in W.headers)
        Re.setRequestHeader(G, W.headers[G]);
      if (W.beforeSend && (W.beforeSend.call(Y, Re, W) === !1 || B))
        return Re.abort();
      if (ot = "abort", me.add(W.complete), Re.done(W.success), Re.fail(W.error), f = hl(Us, W, u, Re), !f)
        Fi(-1, "No Transport");
      else {
        if (Re.readyState = 1, $ && se.trigger("ajaxSend", [Re, W]), B)
          return Re;
        W.async && W.timeout > 0 && (L = e.setTimeout(function() {
          Re.abort("timeout");
        }, W.timeout));
        try {
          B = !1, f.send(He, Fi);
        } catch (Ie) {
          if (B)
            throw Ie;
          Fi(-1, Ie);
        }
      }
      function Fi(Ie, Ye, ml, $f) {
        var bn, Qs, Zr, Tr, Sr, Kt = Ye;
        B || (B = !0, L && e.clearTimeout(L), f = void 0, x = $f || "", Re.readyState = Ie > 0 ? 4 : 0, bn = Ie >= 200 && Ie < 300 || Ie === 304, ml && (Tr = Bf(W, Re, ml)), !bn && p.inArray("script", W.dataTypes) > -1 && p.inArray("json", W.dataTypes) < 0 && (W.converters["text script"] = function() {
        }), Tr = Ff(W, Tr, Re, bn), bn ? (W.ifModified && (Sr = Re.getResponseHeader("Last-Modified"), Sr && (p.lastModified[b] = Sr), Sr = Re.getResponseHeader("etag"), Sr && (p.etag[b] = Sr)), Ie === 204 || W.type === "HEAD" ? Kt = "nocontent" : Ie === 304 ? Kt = "notmodified" : (Kt = Tr.state, Qs = Tr.data, Zr = Tr.error, bn = !Zr)) : (Zr = Kt, (Ie || !Kt) && (Kt = "error", Ie < 0 && (Ie = 0))), Re.status = Ie, Re.statusText = (Ye || Kt) + "", bn ? ye.resolveWith(Y, [Qs, Kt, Re]) : ye.rejectWith(Y, [Re, Kt, Zr]), Re.statusCode(Ve), Ve = void 0, $ && se.trigger(
          bn ? "ajaxSuccess" : "ajaxError",
          [Re, W, bn ? Qs : Zr]
        ), me.fireWith(Y, [Re, Kt]), $ && (se.trigger("ajaxComplete", [Re, W]), --p.active || p.event.trigger("ajaxStop")));
      }
      return Re;
    },
    getJSON: function(s, u, f) {
      return p.get(s, u, f, "json");
    },
    getScript: function(s, u) {
      return p.get(s, void 0, u, "script");
    }
  }), p.each(["get", "post"], function(s, u) {
    p[u] = function(f, b, x, T) {
      return (typeof b == "function" || b === null) && (T = T || x, x = b, b = void 0), p.ajax(p.extend({
        url: f,
        type: u,
        dataType: T,
        data: b,
        success: x
      }, p.isPlainObject(f) && f));
    };
  }), p.ajaxPrefilter(function(s) {
    var u;
    for (u in s.headers)
      u.toLowerCase() === "content-type" && (s.contentType = s.headers[u] || "");
  }), p._evalUrl = function(s, u, f) {
    return p.ajax({
      url: s,
      // Make this explicit, since user can override this through ajaxSetup (trac-11264)
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      scriptAttrs: u.crossOrigin ? { crossOrigin: u.crossOrigin } : void 0,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function() {
        }
      },
      dataFilter: function(b) {
        p.globalEval(b, u, f);
      }
    });
  }, p.fn.extend({
    wrapAll: function(s) {
      var u;
      return this[0] && (typeof s == "function" && (s = s.call(this[0])), u = p(s, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && u.insertBefore(this[0]), u.map(function() {
        for (var f = this; f.firstElementChild; )
          f = f.firstElementChild;
        return f;
      }).append(this)), this;
    },
    wrapInner: function(s) {
      return typeof s == "function" ? this.each(function(u) {
        p(this).wrapInner(s.call(this, u));
      }) : this.each(function() {
        var u = p(this), f = u.contents();
        f.length ? f.wrapAll(s) : u.append(s);
      });
    },
    wrap: function(s) {
      var u = typeof s == "function";
      return this.each(function(f) {
        p(this).wrapAll(u ? s.call(this, f) : s);
      });
    },
    unwrap: function(s) {
      return this.parent(s).not("body").each(function() {
        p(this).replaceWith(this.childNodes);
      }), this;
    }
  }), p.expr.pseudos.hidden = function(s) {
    return !p.expr.pseudos.visible(s);
  }, p.expr.pseudos.visible = function(s) {
    return !!(s.offsetWidth || s.offsetHeight || s.getClientRects().length);
  }, p.ajaxSettings.xhr = function() {
    return new e.XMLHttpRequest();
  };
  var Hf = {
    // File protocol always yields status code 0, assume 200
    0: 200
  };
  p.ajaxTransport(function(s) {
    var u;
    return {
      send: function(f, b) {
        var x, T = s.xhr();
        if (T.open(
          s.type,
          s.url,
          s.async,
          s.username,
          s.password
        ), s.xhrFields)
          for (x in s.xhrFields)
            T[x] = s.xhrFields[x];
        s.mimeType && T.overrideMimeType && T.overrideMimeType(s.mimeType), !s.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
        for (x in f)
          T.setRequestHeader(x, f[x]);
        u = function(L) {
          return function() {
            u && (u = T.onload = T.onerror = T.onabort = T.ontimeout = null, L === "abort" ? T.abort() : L === "error" ? b(
              // File: protocol always yields status 0; see trac-8605, trac-14207
              T.status,
              T.statusText
            ) : b(
              Hf[T.status] || T.status,
              T.statusText,
              // For XHR2 non-text, let the caller handle it (gh-2498)
              (T.responseType || "text") === "text" ? { text: T.responseText } : { binary: T.response },
              T.getAllResponseHeaders()
            ));
          };
        }, T.onload = u(), T.onabort = T.onerror = T.ontimeout = u("error"), u = u("abort");
        try {
          T.send(s.hasContent && s.data || null);
        } catch (L) {
          if (u)
            throw L;
        }
      },
      abort: function() {
        u && u();
      }
    };
  });
  function pl(s) {
    return s.scriptAttrs || !s.headers && (s.crossDomain || // When dealing with JSONP (`s.dataTypes` include "json" then)
    // don't use a script tag so that error responses still may have
    // `responseJSON` set. Continue using a script tag for JSONP requests that:
    //   * are cross-domain as AJAX requests won't work without a CORS setup
    //   * have `scriptAttrs` set as that's a script-only functionality
    // Note that this means JSONP requests violate strict CSP script-src settings.
    // A proper solution is to migrate from using JSONP to a CORS setup.
    s.async && p.inArray("json", s.dataTypes) < 0);
  }
  p.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    converters: {
      "text script": function(s) {
        return p.globalEval(s), s;
      }
    }
  }), p.ajaxPrefilter("script", function(s) {
    s.cache === void 0 && (s.cache = !1), pl(s) && (s.type = "GET");
  }), p.ajaxTransport("script", function(s) {
    if (pl(s)) {
      var u, f;
      return {
        send: function(b, x) {
          u = p("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", f = function(T) {
            u.remove(), f = null, T && x(T.type === "error" ? 404 : 200, T.type);
          }), l.head.appendChild(u[0]);
        },
        abort: function() {
          f && f();
        }
      };
    }
  });
  var vl = [], Js = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var s = vl.pop() || p.expando + "_" + ll.guid++;
      return this[s] = !0, s;
    }
  }), p.ajaxPrefilter("jsonp", function(s, u, f) {
    var b, x, T, L = s.jsonp !== !1 && (Js.test(s.url) ? "url" : typeof s.data == "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Js.test(s.data) && "data");
    return b = s.jsonpCallback = typeof s.jsonpCallback == "function" ? s.jsonpCallback() : s.jsonpCallback, L ? s[L] = s[L].replace(Js, "$1" + b) : s.jsonp !== !1 && (s.url += (Xs.test(s.url) ? "&" : "?") + s.jsonp + "=" + b), s.converters["script json"] = function() {
      return T || p.error(b + " was not called"), T[0];
    }, s.dataTypes[0] = "json", x = e[b], e[b] = function() {
      T = arguments;
    }, f.always(function() {
      x === void 0 ? p(e).removeProp(b) : e[b] = x, s[b] && (s.jsonpCallback = u.jsonpCallback, vl.push(b)), T && typeof x == "function" && x(T[0]), T = x = void 0;
    }), "script";
  }), p.ajaxPrefilter(function(s, u) {
    typeof s.data != "string" && !p.isPlainObject(s.data) && !Array.isArray(s.data) && // Don't disable data processing if explicitly set by the user.
    !("processData" in u) && (s.processData = !1), s.data instanceof e.FormData && (s.contentType = !1);
  }), p.parseHTML = function(s, u, f) {
    if (typeof s != "string" && !Oo(s + ""))
      return [];
    typeof u == "boolean" && (f = u, u = !1);
    var b, x;
    return u || (u = new e.DOMParser().parseFromString("", "text/html")), b = Io.exec(s), x = !f && [], b ? [u.createElement(b[1])] : (b = Wo([s], u, x), x && x.length && p(x).remove(), p.merge([], b.childNodes));
  }, p.fn.load = function(s, u, f) {
    var b, x, T, L = this, H = s.indexOf(" ");
    return H > -1 && (b = Yn(s.slice(H)), s = s.slice(0, H)), typeof u == "function" ? (f = u, u = void 0) : u && typeof u == "object" && (x = "POST"), L.length > 0 && p.ajax({
      url: s,
      // If "type" variable is undefined, then "GET" method will be used.
      // Make value of this field explicit since
      // user can override it through ajaxSetup method
      type: x || "GET",
      dataType: "html",
      data: u
    }).done(function(B) {
      T = arguments, L.html(b ? (
        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        p("<div>").append(p.parseHTML(B)).find(b)
      ) : (
        // Otherwise use the full result
        B
      ));
    }).always(f && function(B, $) {
      L.each(function() {
        f.apply(this, T || [B.responseText, $, B]);
      });
    }), this;
  }, p.expr.pseudos.animated = function(s) {
    return p.grep(p.timers, function(u) {
      return s === u.elem;
    }).length;
  }, p.offset = {
    setOffset: function(s, u, f) {
      var b, x, T, L, H, B, $, G = p.css(s, "position"), K = p(s), W = {};
      G === "static" && (s.style.position = "relative"), H = K.offset(), T = p.css(s, "top"), B = p.css(s, "left"), $ = (G === "absolute" || G === "fixed") && (T + B).indexOf("auto") > -1, $ ? (b = K.position(), L = b.top, x = b.left) : (L = parseFloat(T) || 0, x = parseFloat(B) || 0), typeof u == "function" && (u = u.call(s, f, p.extend({}, H))), u.top != null && (W.top = u.top - H.top + L), u.left != null && (W.left = u.left - H.left + x), "using" in u ? u.using.call(s, W) : K.css(W);
    }
  }, p.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function(s) {
      if (arguments.length)
        return s === void 0 ? this : this.each(function(x) {
          p.offset.setOffset(this, s, x);
        });
      var u, f, b = this[0];
      if (b)
        return b.getClientRects().length ? (u = b.getBoundingClientRect(), f = b.ownerDocument.defaultView, {
          top: u.top + f.pageYOffset,
          left: u.left + f.pageXOffset
        }) : { top: 0, left: 0 };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function() {
      if (this[0]) {
        var s, u, f, b = this[0], x = { top: 0, left: 0 };
        if (p.css(b, "position") === "fixed")
          u = b.getBoundingClientRect();
        else {
          for (u = this.offset(), f = b.ownerDocument, s = b.offsetParent || f.documentElement; s && s !== f.documentElement && p.css(s, "position") === "static"; )
            s = s.offsetParent || f.documentElement;
          s && s !== b && s.nodeType === 1 && p.css(s, "position") !== "static" && (x = p(s).offset(), x.top += p.css(s, "borderTopWidth", !0), x.left += p.css(s, "borderLeftWidth", !0));
        }
        return {
          top: u.top - x.top - p.css(b, "marginTop", !0),
          left: u.left - x.left - p.css(b, "marginLeft", !0)
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
        for (var s = this.offsetParent; s && p.css(s, "position") === "static"; )
          s = s.offsetParent;
        return s || V;
      });
    }
  }), p.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(s, u) {
    var f = u === "pageYOffset";
    p.fn[s] = function(b) {
      return Ke(this, function(x, T, L) {
        var H;
        if (S(x) ? H = x : x.nodeType === 9 && (H = x.defaultView), L === void 0)
          return H ? H[u] : x[T];
        H ? H.scrollTo(
          f ? H.pageXOffset : L,
          f ? L : H.pageYOffset
        ) : x[T] = L;
      }, s, b, arguments.length);
    };
  }), p.each({ Height: "height", Width: "width" }, function(s, u) {
    p.each({
      padding: "inner" + s,
      content: u,
      "": "outer" + s
    }, function(f, b) {
      p.fn[b] = function(x, T) {
        var L = arguments.length && (f || typeof x != "boolean"), H = f || (x === !0 || T === !0 ? "margin" : "border");
        return Ke(this, function(B, $, G) {
          var K;
          return S(B) ? b.indexOf("outer") === 0 ? B["inner" + s] : B.document.documentElement["client" + s] : B.nodeType === 9 ? (K = B.documentElement, Math.max(
            B.body["scroll" + s],
            K["scroll" + s],
            B.body["offset" + s],
            K["offset" + s],
            K["client" + s]
          )) : G === void 0 ? (
            // Get width or height on the element, requesting but not forcing parseFloat
            p.css(B, $, H)
          ) : (
            // Set width or height on the element
            p.style(B, $, G, H)
          );
        }, u, L ? x : void 0, L);
      };
    });
  }), p.each([
    "ajaxStart",
    "ajaxStop",
    "ajaxComplete",
    "ajaxError",
    "ajaxSuccess",
    "ajaxSend"
  ], function(s, u) {
    p.fn[u] = function(f) {
      return this.on(u, f);
    };
  }), p.fn.extend({
    bind: function(s, u, f) {
      return this.on(s, null, u, f);
    },
    unbind: function(s, u) {
      return this.off(s, null, u);
    },
    delegate: function(s, u, f, b) {
      return this.on(u, s, f, b);
    },
    undelegate: function(s, u, f) {
      return arguments.length === 1 ? this.off(s, "**") : this.off(u, s || "**", f);
    },
    hover: function(s, u) {
      return this.on("mouseenter", s).on("mouseleave", u || s);
    }
  }), p.each(
    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
    function(s, u) {
      p.fn[u] = function(f, b) {
        return arguments.length > 0 ? this.on(u, null, f, b) : this.trigger(u);
      };
    }
  ), p.proxy = function(s, u) {
    var f, b, x;
    if (typeof u == "string" && (f = s[u], u = s, s = f), typeof s == "function")
      return b = i.call(arguments, 2), x = function() {
        return s.apply(u || this, b.concat(i.call(arguments)));
      }, x.guid = s.guid = s.guid || p.guid++, x;
  }, p.holdReady = function(s) {
    s ? p.readyWait++ : p.ready(!0);
  }, p.expr[":"] = p.expr.filters = p.expr.pseudos, typeof define == "function" && define.amd && define("jquery", [], function() {
    return p;
  });
  var Vf = e.jQuery, Mf = e.$;
  return p.noConflict = function(s) {
    return e.$ === p && (e.$ = Mf), s && e.jQuery === p && (e.jQuery = Vf), p;
  }, typeof t > "u" && (e.jQuery = e.$ = p), p;
}
var Ue = jf(window, !0);
/*! DataTables 2.3.7
 * © SpryMedia Ltd - datatables.net/license
 */
var O = Ue, I = function(e, t) {
  if (I.factory(e, t))
    return I;
  if (this instanceof I)
    return O(e).DataTable(t);
  t = e;
  var n = this, r = t === void 0, i = this.length;
  return r && (t = {}), this.api = function() {
    return new De(this);
  }, this.each(function() {
    var a = {}, o = i > 1 ? (
      // optimisation for single table case
      Dl(a, t, !0)
    ) : t, c = 0, h, m = this.getAttribute("id"), g = I.defaults, _ = O(this);
    if (this.nodeName.toLowerCase() != "table") {
      Et(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
      return;
    }
    o.on && o.on.options && Al(_, "options", o.on.options), _.trigger("options.dt", o), bl(g), zu(g.column), Dn(g, g, !0), Dn(g.column, g.column, !0), Dn(g, O.extend(o, cc(_.data())), !0);
    var w = I.settings;
    for (c = 0, h = w.length; c < h; c++) {
      var C = w[c];
      if (C.nTable == this || C.nTHead && C.nTHead.parentNode == this || C.nTFoot && C.nTFoot.parentNode == this) {
        var k = o.bRetrieve !== void 0 ? o.bRetrieve : g.bRetrieve, S = o.bDestroy !== void 0 ? o.bDestroy : g.bDestroy;
        if (r || k)
          return C.oInstance;
        if (S) {
          new I.Api(C).destroy();
          break;
        } else {
          Et(C, 0, "Cannot reinitialise DataTable", 3);
          return;
        }
      }
      if (C.sTableId == this.id) {
        w.splice(c, 1);
        break;
      }
    }
    (m === null || m === "") && (m = "DataTables_Table_" + I.ext._unique++, this.id = m), _.children("colgroup").remove();
    var v = O.extend(!0, {}, I.models.oSettings, {
      sDestroyWidth: _[0].style.width,
      sInstance: m,
      sTableId: m,
      colgroup: O("<colgroup>"),
      fastData: function(R, E, V) {
        return Ht(v, R, E, V);
      }
    });
    v.nTable = this, v.oInit = o, w.push(v), v.api = new De(v), v.oInstance = n.length === 1 ? n : _.dataTable(), bl(o), o.aLengthMenu && !o.iDisplayLength && (o.iDisplayLength = Array.isArray(o.aLengthMenu[0]) ? o.aLengthMenu[0][0] : O.isPlainObject(o.aLengthMenu[0]) ? o.aLengthMenu[0].value : o.aLengthMenu[0]), o = Dl(O.extend(!0, {}, g), o), Pn(v.oFeatures, o, [
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
    ]), Pn(v, o, [
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
    ]), Pn(v.oScroll, o, [
      ["sScrollX", "sX"],
      ["sScrollXInner", "sXInner"],
      ["sScrollY", "sY"],
      ["bScrollCollapse", "bCollapse"]
    ]), Pn(v.oLanguage, o, "fnInfoCallback"), It(v, "aoDrawCallback", o.fnDrawCallback), It(v, "aoStateSaveParams", o.fnStateSaveParams), It(v, "aoStateLoadParams", o.fnStateLoadParams), It(v, "aoStateLoaded", o.fnStateLoaded), It(v, "aoRowCallback", o.fnRowCallback), It(v, "aoRowCreatedCallback", o.fnCreatedRow), It(v, "aoHeaderCallback", o.fnHeaderCallback), It(v, "aoFooterCallback", o.fnFooterCallback), It(v, "aoInitComplete", o.fnInitComplete), It(v, "aoPreDrawCallback", o.fnPreDrawCallback), v.rowIdFn = Er(o.rowId), o.on && Object.keys(o.on).forEach(function(R) {
      Al(_, R, o.on[R]);
    }), Uf(v);
    var l = v.oClasses;
    O.extend(l, I.ext.classes, o.oClasses), _.addClass(l.table), v.oFeatures.bPaginate || (o.iDisplayStart = 0), v.iInitDisplayStart === void 0 && (v.iInitDisplayStart = o.iDisplayStart, v._iDisplayStart = o.iDisplayStart);
    var d = o.iDeferLoading;
    if (d !== null) {
      v.deferLoading = !0;
      var y = Array.isArray(d);
      v._iRecordsDisplay = y ? d[0] : d, v._iRecordsTotal = y ? d[1] : d;
    }
    var P = [], N = this.getElementsByTagName("thead"), p = ec(v, N[0]);
    if (o.aoColumns)
      P = o.aoColumns;
    else if (p.length)
      for (c = 0, h = p[0].length; c < h; c++)
        P.push(null);
    for (c = 0, h = P.length; c < h; c++)
      Uu(v);
    Jf(v, o.aoColumnDefs, P, p, function(R, E) {
      ya(v, R, E);
    });
    var M = _.children("tbody").find("tr:first-child").eq(0);
    if (M.length) {
      var U = function(R, E) {
        return R.getAttribute("data-" + E) !== null ? E : null;
      };
      O(M[0]).children("th, td").each(function(R, E) {
        var V = v.aoColumns[R];
        if (V || Et(v, 0, "Incorrect column count", 18), V.mData === R) {
          var j = U(E, "sort") || U(E, "order"), X = U(E, "filter") || U(E, "search");
          (j !== null || X !== null) && (V.mData = {
            _: R + ".display",
            sort: j !== null ? R + ".@data-" + j : void 0,
            type: j !== null ? R + ".@data-" + j : void 0,
            filter: X !== null ? R + ".@data-" + X : void 0
          }, V._isArrayHost = !0, ya(v, R));
        }
      });
    }
    It(v, "aoDrawCallback", fs);
    var q = v.oFeatures;
    if (o.bStateSave && (q.bStateSave = !0), o.aaSorting === void 0) {
      var z = v.aaSorting;
      for (c = 0, h = z.length; c < h; c++)
        z[c][1] = v.aoColumns[c].asSorting[0];
    }
    _a(v), It(v, "aoDrawCallback", function() {
      (v.bSorted || kt(v) === "ssp" || q.bDeferRender) && _a(v);
    });
    var ne = _.children("caption");
    v.caption && (ne.length === 0 && (ne = O("<caption/>").prependTo(_)), ne.html(v.caption)), ne.length && (ne[0]._captionSide = ne.css("caption-side"), v.captionNode = ne[0]), ne.length ? v.colgroup.insertAfter(ne) : v.colgroup.prependTo(v.nTable), N.length === 0 && (N = O("<thead/>").appendTo(_)), v.nTHead = N[0];
    var F = _.children("tbody");
    F.length === 0 && (F = O("<tbody/>").insertAfter(N)), v.nTBody = F[0];
    var D = _.children("tfoot");
    D.length === 0 && (D = O("<tfoot/>").appendTo(_)), v.nTFoot = D[0], v.aiDisplay = v.aiDisplayMaster.slice(), v.bInitialised = !0;
    var A = v.oLanguage;
    O.extend(!0, A, o.oLanguage), A.sUrl ? O.ajax({
      dataType: "json",
      url: A.sUrl,
      success: function(R) {
        Dn(g.oLanguage, R), O.extend(!0, A, R, v.oInit.oLanguage), Ne(v, null, "i18n", [v], !0), ji(v);
      },
      error: function() {
        Et(v, 0, "i18n file loading error", 21), ji(v);
      }
    }) : (Ne(v, null, "i18n", [v], !0), ji(v));
  }), n = null, this;
};
I.ext = Ze = {
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
  fnVersionCheck: I.fnVersionCheck,
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
  sVersion: I.version
};
O.extend(Ze, {
  afnFiltering: Ze.search,
  aTypes: Ze.type.detect,
  ofnSearch: Ze.type.search,
  oSort: Ze.type.order,
  afnSortData: Ze.order,
  aoFeatures: Ze.feature,
  oStdClasses: Ze.classes,
  oPagination: Ze.pager
});
O.extend(I.ext.classes, {
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
var Ze, De, ce, Ee, Zs = {}, Wf = /[\r\n\u2028]/g, Fa = /<([^>]*>)/g, qf = Math.pow(2, 28), gl = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/, Gf = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"), Ha = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, At = function(e) {
  return !e || e === !0 || e === "-";
}, Wu = function(e) {
  var t = parseInt(e, 10);
  return !isNaN(t) && isFinite(e) ? t : null;
}, qu = function(e, t) {
  return Zs[t] || (Zs[t] = new RegExp(xa(t), "g")), typeof e == "string" && t !== "." ? e.replace(/\./g, "").replace(Zs[t], ".") : e;
}, ai = function(e, t, n, r) {
  var i = typeof e, a = i === "string";
  return i === "number" || i === "bigint" || r && At(e) ? !0 : (t && a && (e = qu(e, t)), n && a && (e = e.replace(Ha, "")), !isNaN(parseFloat(e)) && isFinite(e));
}, Xf = function(e) {
  return At(e) || typeof e == "string";
}, zi = function(e, t, n, r) {
  if (r && At(e))
    return !0;
  if (typeof e == "string" && e.match(/<(input|select)/i))
    return null;
  var i = Xf(e);
  return i && ai(dn(e), t, n, r) ? !0 : null;
}, lt = function(e, t, n) {
  var r = [], i = 0, a = e.length;
  if (n !== void 0)
    for (; i < a; i++)
      e[i] && e[i][t] && r.push(e[i][t][n]);
  else
    for (; i < a; i++)
      e[i] && r.push(e[i][t]);
  return r;
}, fi = function(e, t, n, r) {
  var i = [], a = 0, o = t.length;
  if (r !== void 0)
    for (; a < o; a++)
      e[t[a]] && e[t[a]][n] && i.push(e[t[a]][n][r]);
  else
    for (; a < o; a++)
      e[t[a]] && i.push(e[t[a]][n]);
  return i;
}, Cn = function(e, t) {
  var n = [], r;
  t === void 0 ? (t = 0, r = e) : (r = t, t = e);
  for (var i = t; i < r; i++)
    n.push(i);
  return n;
}, Gu = function(e) {
  for (var t = [], n = 0, r = e.length; n < r; n++)
    e[n] && t.push(e[n]);
  return t;
}, dn = function(e, t) {
  if (!e || typeof e != "string")
    return e;
  if (e.length > qf)
    throw new Error("Exceeded max str len");
  var n;
  e = e.replace(Fa, t || "");
  do
    n = e, e = e.replace(/<script/i, "");
  while (e !== n);
  return n;
}, nr = function(e) {
  return Array.isArray(e) && (e = e.join(",")), typeof e == "string" ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : e;
}, Ui = function(e, t) {
  if (typeof e != "string")
    return e;
  var n = e.normalize ? e.normalize("NFD") : e;
  return n.length !== e.length ? (t === !0 ? e + " " : "") + n.replace(/[\u0300-\u036f]/g, "") : n;
}, zf = function(e) {
  if (e.length < 2)
    return !0;
  for (var t = e.slice().sort(), n = t[0], r = 1, i = t.length; r < i; r++) {
    if (t[r] === n)
      return !1;
    n = t[r];
  }
  return !0;
}, $r = function(e) {
  if (Array.from && Set)
    return Array.from(new Set(e));
  if (zf(e))
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
}, Xu = function(e, t) {
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      Xu(e, t[n]);
  else
    e.push(t);
  return e;
};
function Lr(e, t) {
  t && t.split(" ").forEach(function(n) {
    n && e.classList.add(n);
  });
}
I.util = {
  /**
   * Return a string with diacritic characters decomposed
   * @param {*} mixed Function or string to normalize
   * @param {*} both Return original string and the normalized string
   * @returns String or undefined
   */
  diacritics: function(e, t) {
    var n = typeof e;
    if (n !== "function")
      return Ui(e, t);
    Ui = e;
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
      var a = this, o = +/* @__PURE__ */ new Date(), c = arguments;
      r && o < r + n ? (clearTimeout(i), i = setTimeout(function() {
        r = void 0, e.apply(a, c);
      }, n)) : (r = o, e.apply(a, c));
    };
  },
  /**
   * Escape a string such that it can be used in a regular expression
   *
   *  @param {string} val string to escape
   *  @returns {string} escaped string
   */
  escapeRegex: function(e) {
    return e.replace(Gf, "\\$1");
  },
  /**
   * Create a function that will write to a nested object or array
   * @param {*} source JSON notation string
   * @returns Write function
   */
  set: function(e) {
    if (O.isPlainObject(e))
      return I.util.set(e._);
    if (e === null)
      return function() {
      };
    if (typeof e == "function")
      return function(n, r, i) {
        e(n, "set", r, i);
      };
    if (typeof e == "string" && (e.indexOf(".") !== -1 || e.indexOf("[") !== -1 || e.indexOf("(") !== -1)) {
      var t = function(n, r, i) {
        for (var a = wl(i), o, c = a[a.length - 1], h, m, g, _, w = 0, C = a.length - 1; w < C; w++) {
          if (a[w] === "__proto__" || a[w] === "constructor")
            throw new Error("Cannot set prototype values");
          if (h = a[w].match(ei), m = a[w].match(Dr), h) {
            if (a[w] = a[w].replace(ei, ""), n[a[w]] = [], o = a.slice(), o.splice(0, w + 1), _ = o.join("."), Array.isArray(r))
              for (var k = 0, S = r.length; k < S; k++)
                g = {}, t(g, r[k], _), n[a[w]].push(g);
            else
              n[a[w]] = r;
            return;
          } else
            m && (a[w] = a[w].replace(Dr, ""), n = n[a[w]](r));
          (n[a[w]] === null || n[a[w]] === void 0) && (n[a[w]] = {}), n = n[a[w]];
        }
        c.match(Dr) ? n = n[c.replace(Dr, "")](r) : n[c.replace(ei, "")] = r;
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
    if (O.isPlainObject(e)) {
      var t = {};
      return O.each(e, function(r, i) {
        i && (t[r] = I.util.get(i));
      }), function(r, i, a, o) {
        var c = t[i] || t._;
        return c !== void 0 ? c(r, i, a, o) : r;
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
          var o, c, h, m;
          if (a !== "")
            for (var g = wl(a), _ = 0, w = g.length; _ < w; _++) {
              if (o = g[_].match(ei), c = g[_].match(Dr), o) {
                if (g[_] = g[_].replace(ei, ""), g[_] !== "" && (r = r[g[_]]), h = [], g.splice(0, _ + 1), m = g.join("."), Array.isArray(r))
                  for (var C = 0, k = r.length; C < k; C++)
                    h.push(n(r[C], i, m));
                var S = o[0].substring(1, o[0].length - 1);
                r = S === "" ? h : h.join(S);
                break;
              } else if (c) {
                g[_] = g[_].replace(Dr, ""), r = r[g[_]]();
                continue;
              }
              if (r === null || r[g[_]] === null)
                return null;
              if (r === void 0 || r[g[_]] === void 0)
                return;
              r = r[g[_]];
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
      dn = e;
      return;
    } else if (n === "string")
      return dn(e, t);
    return e;
  },
  escapeHtml: function(e) {
    var t = typeof e;
    if (t === "function") {
      nr = e;
      return;
    } else if (t === "string" || Array.isArray(e))
      return nr(e);
    return e;
  },
  unique: $r
};
function as(e) {
  var t = "a aa ai ao as b fn i m o s ", n, r, i = {};
  O.each(e, function(a) {
    n = a.match(/^([^A-Z]+?)([A-Z])/), n && t.indexOf(n[1] + " ") !== -1 && (r = a.replace(n[0], n[2].toLowerCase()), i[r] = a, n[1] === "o" && as(e[a]));
  }), e._hungarianMap = i;
}
function Dn(e, t, n) {
  e._hungarianMap || as(e);
  var r;
  O.each(t, function(i) {
    r = e._hungarianMap[i], r !== void 0 && (n || t[r] === void 0) && (r.charAt(0) === "o" ? (t[r] || (t[r] = {}), O.extend(!0, t[r], t[i]), Dn(e[r], t[r], n)) : t[r] = t[i]);
  });
}
var yt = function(e, t, n) {
  e[t] !== void 0 && (e[n] = e[t]);
};
function bl(e) {
  yt(e, "ordering", "bSort"), yt(e, "orderMulti", "bSortMulti"), yt(e, "orderClasses", "bSortClasses"), yt(e, "orderCellsTop", "bSortCellsTop"), yt(e, "order", "aaSorting"), yt(e, "orderFixed", "aaSortingFixed"), yt(e, "paging", "bPaginate"), yt(e, "pagingType", "sPaginationType"), yt(e, "pageLength", "iDisplayLength"), yt(e, "searching", "bFilter"), typeof e.sScrollX == "boolean" && (e.sScrollX = e.sScrollX ? "100%" : ""), typeof e.scrollX == "boolean" && (e.scrollX = e.scrollX ? "100%" : ""), typeof e.bSort == "object" ? (e.orderIndicators = e.bSort.indicators !== void 0 ? e.bSort.indicators : !0, e.orderHandler = e.bSort.handler !== void 0 ? e.bSort.handler : !0, e.bSort = !0) : e.bSort === !1 ? (e.orderIndicators = !1, e.orderHandler = !1) : e.bSort === !0 && (e.orderIndicators = !0, e.orderHandler = !0), typeof e.bSortCellsTop == "boolean" && (e.titleRow = e.bSortCellsTop);
  var t = e.aoSearchCols;
  if (t)
    for (var n = 0, r = t.length; n < r; n++)
      t[n] && Dn(I.models.oSearch, t[n]);
  e.serverSide && !e.searchDelay && (e.searchDelay = 400);
}
function zu(e) {
  yt(e, "orderable", "bSortable"), yt(e, "orderData", "aDataSort"), yt(e, "orderSequence", "asSorting"), yt(e, "orderDataType", "sortDataType");
  var t = e.aDataSort;
  typeof t == "number" && !Array.isArray(t) && (e.aDataSort = [t]);
}
function Uf(e) {
  if (!I.__browser) {
    var t = {};
    I.__browser = t;
    var n = O("<div/>").css({
      position: "fixed",
      top: 0,
      left: -1 * window.pageXOffset,
      // allow for scrolling
      height: 1,
      width: 1,
      overflow: "hidden"
    }).append(
      O("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append(
        O("<div/>").css({
          width: "100%",
          height: 10
        })
      )
    ).appendTo("body"), r = n.children(), i = r.children();
    t.barWidth = r[0].offsetWidth - r[0].clientWidth, t.bScrollbarLeft = Math.round(i.offset().left) !== 1, n.remove();
  }
  O.extend(e.oBrowser, I.__browser), e.oScroll.iBarWidth = I.__browser.barWidth;
}
function Uu(e) {
  var t = I.defaults.column, n = e.aoColumns.length, r = O.extend({}, I.models.oColumn, t, {
    aDataSort: t.aDataSort ? t.aDataSort : [n],
    mData: t.mData ? t.mData : n,
    idx: n,
    searchFixed: {},
    colEl: O("<col>").attr("data-dt-column", n)
  });
  e.aoColumns.push(r);
  var i = e.aoPreSearchCols;
  i[n] = O.extend({}, I.models.oSearch, i[n]);
}
function ya(e, t, n) {
  var r = e.aoColumns[t];
  if (n != null) {
    zu(n), Dn(I.defaults.column, n, !0), n.mDataProp !== void 0 && !n.mData && (n.mData = n.mDataProp), n.sType && (r._sManualType = n.sType), n.className && !n.sClass && (n.sClass = n.className);
    var i = r.sClass;
    O.extend(r, n), Pn(r, n, "sWidth", "sWidthOrig"), i !== r.sClass && (r.sClass = i + " " + r.sClass), n.iDataSort !== void 0 && (r.aDataSort = [n.iDataSort]), Pn(r, n, "aDataSort");
  }
  var a = r.mData, o = Er(a);
  if (r.mRender && Array.isArray(r.mRender)) {
    var c = r.mRender.slice(), h = c.shift();
    r.mRender = I.render[h].apply(window, c);
  }
  r._render = r.mRender ? Er(r.mRender) : null;
  var m = function(g) {
    return typeof g == "string" && g.indexOf("@") !== -1;
  };
  r._bAttrSrc = O.isPlainObject(a) && (m(a.sort) || m(a.type) || m(a.filter)), r._setter = null, r.fnGetData = function(g, _, w) {
    var C = o(g, _, void 0, w);
    return r._render && _ ? r._render(C, _, g, w) : C;
  }, r.fnSetData = function(g, _, w) {
    return Qn(a)(g, _, w);
  }, typeof a != "number" && !r._isArrayHost && (e._rowReadObject = !0), e.oFeatures.bSort || (r.bSortable = !1);
}
function os(e) {
  fh(e), Yf(e);
  var t = e.oScroll;
  (t.sY !== "" || t.sX !== "") && ic(e), Ne(e, null, "column-sizing", [e]);
}
function Yf(e) {
  for (var t = e.aoColumns, n = 0; n < t.length; n++) {
    var r = Yu(e, [n], !1, !1);
    t[n].colEl.css("width", r), e.oScroll.sX && t[n].colEl.css("min-width", r);
  }
}
function Va(e, t) {
  var n = Ma(e, "bVisible");
  return typeof n[t] == "number" ? n[t] : null;
}
function hi(e, t) {
  var n = Ma(e, "bVisible"), r = n.indexOf(t);
  return r !== -1 ? r : null;
}
function ls(e) {
  var t = e.aoHeader, n = e.aoColumns, r = 0;
  if (t.length)
    for (var i = 0, a = t[0].length; i < a; i++)
      n[i].bVisible && O(t[0][i].cell).css("display") !== "none" && r++;
  return r;
}
function Ma(e, t) {
  var n = [];
  return e.aoColumns.map(function(r, i) {
    r[t] && n.push(i);
  }), n;
}
function ea(e, t) {
  return t === !0 ? e._name : t;
}
function us(e) {
  var t = e.aoColumns, n = e.aoData, r = I.ext.type.detect, i, a, o, c, h, m, g, _, w;
  for (i = 0, a = t.length; i < a; i++) {
    if (g = t[i], w = [], !g.sType && g._sManualType)
      g.sType = g._sManualType;
    else if (!g.sType) {
      if (!e.typeDetect)
        return;
      for (o = 0, c = r.length; o < c; o++) {
        var C = r[o], k = C.oneOf, S = C.allOf || C, v = C.init, l = !1;
        if (_ = null, v && (_ = ea(C, v(e, g, i)), _)) {
          g.sType = _;
          break;
        }
        for (h = 0, m = n.length; h < m && !(n[h] && (w[h] === void 0 && (w[h] = Ht(e, h, i, "type")), k && !l && (l = ea(C, k(w[h], e))), _ = ea(C, S(w[h], e)), !_ && o !== r.length - 3 || _ === "html" && !At(w[h]))); h++)
          ;
        if (k && l && _ || !k && _) {
          g.sType = _;
          break;
        }
      }
      g.sType || (g.sType = "string");
    }
    var d = Ze.type.className[g.sType];
    d && (yl(e.aoHeader, i, d), yl(e.aoFooter, i, d));
    var y = Ze.type.render[g.sType];
    y && !g._render && (g._render = I.util.get(y), Kf(e, i));
  }
}
function Kf(e, t) {
  for (var n = e.aoData, r = 0; r < n.length; r++)
    if (n[r].nTr) {
      var i = Ht(e, r, t, "display");
      n[r].displayData[t] = i, Yi(n[r].anCells[t], i);
    }
}
function yl(e, t, n) {
  e.forEach(function(r) {
    r[t] && r[t].unique && Lr(r[t].cell, n);
  });
}
function Jf(e, t, n, r, i) {
  var a, o, c, h, m, g, _, w = e.aoColumns;
  if (n)
    for (a = 0, o = n.length; a < o; a++)
      n[a] && n[a].name && (w[a].sName = n[a].name);
  if (t)
    for (a = t.length - 1; a >= 0; a--) {
      _ = t[a];
      var C = _.target !== void 0 ? _.target : _.targets !== void 0 ? _.targets : _.aTargets;
      for (Array.isArray(C) || (C = [C]), c = 0, h = C.length; c < h; c++) {
        var k = C[c];
        if (typeof k == "number" && k >= 0) {
          for (; w.length <= k; )
            Uu(e);
          i(k, _);
        } else if (typeof k == "number" && k < 0)
          i(w.length + k, _);
        else if (typeof k == "string")
          for (m = 0, g = w.length; m < g; m++)
            k === "_all" ? i(m, _) : k.indexOf(":name") !== -1 ? w[m].sName === k.replace(":name", "") && i(m, _) : r.forEach(function(S) {
              if (S[m]) {
                var v = O(S[m].cell);
                k.match(/^[a-z][\w-]*$/i) && (k = "." + k), v.is(k) && i(m, _);
              }
            });
      }
    }
  if (n)
    for (a = 0, o = n.length; a < o; a++)
      i(a, n[a]);
}
function Yu(e, t, n, r) {
  Array.isArray(t) || (t = $a(t));
  for (var i = 0, a, o = e.aoColumns, c = 0, h = t.length; c < h; c++) {
    var m = o[t[c]], g = n ? m.sWidthOrig : m.sWidth;
    if (!(!r && m.bVisible === !1)) {
      if (g == null)
        return null;
      if (typeof g == "number")
        a = "px", i += g;
      else {
        var _ = g.match(/([\d\.]+)([^\d]*)/);
        _ && (i += _[1] * 1, a = _.length === 3 ? _[2] : "px");
      }
    }
  }
  return i + a;
}
function $a(e) {
  var t = O(e).closest("[data-dt-column]").attr("data-dt-column");
  return t ? t.split(",").map(function(n) {
    return n * 1;
  }) : [];
}
function sr(e, t, n, r) {
  var i = e.aoData.length, a = O.extend(!0, {}, I.models.oRow, {
    src: n ? "dom" : "data",
    idx: i
  });
  a._aData = t, e.aoData.push(a);
  for (var o = e.aoColumns, c = 0, h = o.length; c < h; c++)
    o[c].sType = null;
  e.aiDisplayMaster.push(i);
  var m = e.rowIdFn(t);
  return m !== void 0 && (e.aIds[m] = a), (n || !e.oFeatures.bDeferRender) && Ju(e, i, n, r), i;
}
function ja(e, t) {
  var n;
  return t instanceof O || (t = O(t)), t.map(function(r, i) {
    return n = Ku(e, i), sr(e, n.data, i, n.cells);
  });
}
function Ht(e, t, n, r) {
  r === "search" ? r = "filter" : r === "order" && (r = "sort");
  var i = e.aoData[t];
  if (i) {
    var a = e.iDraw, o = e.aoColumns[n], c = i._aData, h = o.sDefaultContent, m = o.fnGetData(c, r, {
      settings: e,
      row: t,
      col: n
    });
    if (r !== "display" && m && typeof m == "object" && m.nodeName && (m = m.innerHTML), m === void 0)
      return e.iDrawError != a && h === null && (Et(e, 0, "Requested unknown parameter " + (typeof o.mData == "function" ? "{function}" : "'" + o.mData + "'") + " for row " + t + ", column " + n, 4), e.iDrawError = a), h;
    if ((m === c || m === null) && h !== null && r !== void 0)
      m = h;
    else if (typeof m == "function")
      return m.call(c);
    if (m === null && r === "display")
      return "";
    if (r === "filter") {
      var g = I.ext.type.search;
      g[o.sType] && (m = g[o.sType](m));
    }
    return m;
  }
}
function Qf(e, t, n, r) {
  var i = e.aoColumns[n], a = e.aoData[t]._aData;
  i.fnSetData(a, r, {
    settings: e,
    row: t,
    col: n
  });
}
function Yi(e, t) {
  t && typeof t == "object" && t.nodeName ? O(e).empty().append(t) : e.innerHTML = t;
}
var ei = /\[.*?\]$/, Dr = /\(\)$/;
function wl(e) {
  var t = e.match(/(\\.|[^.])+/g) || [""];
  return t.map(function(n) {
    return n.replace(/\\\./g, ".");
  });
}
var Er = I.util.get, Qn = I.util.set;
function xl(e) {
  return lt(e.aoData, "_aData");
}
function Wa(e) {
  e.aoData.length = 0, e.aiDisplayMaster.length = 0, e.aiDisplay.length = 0, e.aIds = {};
}
function cs(e, t, n, r) {
  var i = e.aoData[t], a, o;
  if (i._aSortData = null, i._aFilterData = null, i.displayData = null, n === "dom" || (!n || n === "auto") && i.src === "dom")
    i._aData = Ku(
      e,
      i,
      r,
      r === void 0 ? void 0 : i._aData
    ).data;
  else {
    var c = i.anCells, h = qa(e, t);
    if (c)
      if (r !== void 0)
        Yi(c[r], h[r]);
      else
        for (a = 0, o = c.length; a < o; a++)
          Yi(c[a], h[a]);
  }
  var m = e.aoColumns;
  if (r !== void 0)
    m[r].sType = null, m[r].wideStrings = null;
  else {
    for (a = 0, o = m.length; a < o; a++)
      m[a].sType = null, m[a].wideStrings = null;
    Qu(e, i);
  }
}
function Ku(e, t, n, r) {
  var i = [], a = t.firstChild, o, c, h = 0, m, g = e.aoColumns, _ = e._rowReadObject;
  r = r !== void 0 ? r : _ ? {} : [];
  var w = function(d, y) {
    if (typeof d == "string") {
      var P = d.indexOf("@");
      if (P !== -1) {
        var N = d.substring(P + 1), p = Qn(d);
        p(r, y.getAttribute(N));
      }
    }
  }, C = function(d) {
    if (n === void 0 || n === h)
      if (c = g[h], m = d.innerHTML.trim(), c && c._bAttrSrc) {
        var y = Qn(c.mData._);
        y(r, m), w(c.mData.sort, d), w(c.mData.type, d), w(c.mData.filter, d);
      } else
        _ ? (c._setter || (c._setter = Qn(c.mData)), c._setter(r, m)) : r[h] = m;
    h++;
  };
  if (a)
    for (; a; )
      o = a.nodeName.toUpperCase(), (o == "TD" || o == "TH") && (C(a), i.push(a)), a = a.nextSibling;
  else {
    i = t.anCells;
    for (var k = 0, S = i.length; k < S; k++)
      C(i[k]);
  }
  var v = t.firstChild ? t : t.nTr;
  if (v) {
    var l = v.getAttribute("id");
    l && Qn(e.rowId)(r, l);
  }
  return {
    data: r,
    cells: i
  };
}
function qa(e, t) {
  var n = e.aoData[t], r = e.aoColumns;
  if (!n.displayData) {
    n.displayData = [];
    for (var i = 0, a = r.length; i < a; i++)
      n.displayData.push(
        Ht(e, t, i, "display")
      );
  }
  return n.displayData;
}
function Ju(e, t, n, r) {
  var i = e.aoData[t], a = i._aData, o = [], c, h, m, g, _, w, C = e.oClasses.tbody.row;
  if (i.nTr === null) {
    for (c = n || document.createElement("tr"), i.nTr = c, i.anCells = o, Lr(c, C), c._DT_RowIndex = t, Qu(e, i), g = 0, _ = e.aoColumns.length; g < _; g++) {
      m = e.aoColumns[g], w = !(n && r[g]), h = w ? document.createElement(m.sCellType) : r[g], h || Et(e, 0, "Incorrect column count", 18), h._DT_CellIndex = {
        row: t,
        column: g
      }, o.push(h);
      var k = qa(e, t);
      (w || (m.mRender || m.mData !== g) && (!O.isPlainObject(m.mData) || m.mData._ !== g + ".display")) && Yi(h, k[g]), Lr(h, m.sClass), m.bVisible && w ? c.appendChild(h) : !m.bVisible && !w && h.parentNode.removeChild(h), m.fnCreatedCell && m.fnCreatedCell.call(
        e.oInstance,
        h,
        Ht(e, t, g),
        a,
        t,
        g
      );
    }
    Ne(e, "aoRowCreatedCallback", "row-created", [c, a, t, o]);
  } else
    Lr(i.nTr, C);
}
function Qu(e, t) {
  var n = t.nTr, r = t._aData;
  if (n) {
    var i = e.rowIdFn(r);
    if (i && (n.id = i), r.DT_RowClass) {
      var a = r.DT_RowClass.split(" ");
      t.__rowc = t.__rowc ? $r(t.__rowc.concat(a)) : a, O(n).removeClass(t.__rowc.join(" ")).addClass(r.DT_RowClass);
    }
    r.DT_RowAttr && O(n).attr(r.DT_RowAttr), r.DT_RowData && O(n).data(r.DT_RowData);
  }
}
function _l(e, t) {
  var n = e.oClasses, r = e.aoColumns, i, a, o, c = t === "header" ? e.nTHead : e.nTFoot, h = t === "header" ? "sTitle" : t;
  if (c) {
    if ((t === "header" || lt(e.aoColumns, h).join("")) && (o = O("tr", c), o.length || (o = O("<tr/>").appendTo(c)), o.length === 1)) {
      var m = 0;
      for (O("td, th", o).each(function() {
        m += this.colSpan;
      }), i = m, a = r.length; i < a; i++)
        O("<th/>").html(r[i][h] || "").appendTo(o);
    }
    var g = ec(e, c, !0);
    t === "header" ? (e.aoHeader = g, O("tr", c).addClass(n.thead.row)) : (e.aoFooter = g, O("tr", c).addClass(n.tfoot.row)), O(c).children("tr").children("th, td").each(function() {
      Qi(e, t)(
        e,
        O(this),
        n
      );
    });
  }
}
function Zu(e, t, n) {
  var r, i, a, o = [], c = [], h = e.aoColumns, m = h.length, g, _;
  if (t) {
    for (n || (n = Cn(m).filter(function(k) {
      return h[k].bVisible;
    })), r = 0; r < t.length; r++)
      o[r] = t[r].slice().filter(function(k, S) {
        return n.includes(S);
      }), c.push([]);
    for (r = 0; r < o.length; r++)
      for (i = 0; i < o[r].length; i++)
        if (g = 1, _ = 1, c[r][i] === void 0) {
          for (a = o[r][i].cell; o[r + g] !== void 0 && o[r][i].cell == o[r + g][i].cell; )
            c[r + g][i] = null, g++;
          for (; o[r][i + _] !== void 0 && o[r][i].cell == o[r][i + _].cell; ) {
            for (var w = 0; w < g; w++)
              c[r + w][i + _] = null;
            _++;
          }
          var C = O(".dt-column-title", a);
          c[r][i] = {
            cell: a,
            colspan: _,
            rowspan: g,
            title: C.length ? C.html() : O(a).html()
          };
        }
    return c;
  }
}
function Ki(e, t) {
  for (var n = Zu(e, t), r, i, a = 0; a < t.length; a++) {
    if (r = t[a].row, r)
      for (; i = r.firstChild; )
        r.removeChild(i);
    for (var o = 0; o < n[a].length; o++) {
      var c = n[a][o];
      c && O(c.cell).appendTo(r).attr("rowspan", c.rowspan).attr("colspan", c.colspan);
    }
  }
}
function jr(e, t) {
  rh(e);
  var n = Ne(e, "aoPreDrawCallback", "preDraw", [e]);
  if (n.indexOf(!1) !== -1) {
    Pt(e, !1);
    return;
  }
  var r = [], i = 0, a = kt(e) == "ssp", o = e.aiDisplay, c = e._iDisplayStart, h = e.fnDisplayEnd(), m = e.aoColumns, g = O(e.nTBody);
  if (e.bDrawing = !0, e.deferLoading)
    e.deferLoading = !1, e.iDraw++, Pt(e, !1);
  else if (!a)
    e.iDraw++;
  else if (!e.bDestroying && !t) {
    e.iDraw === 0 && g.empty().append(Cl(e)), ih(e);
    return;
  }
  if (o.length !== 0)
    for (var _ = a ? 0 : c, w = a ? e.aoData.length : h, C = _; C < w; C++) {
      var k = o[C], S = e.aoData[k];
      if (S !== null) {
        S.nTr === null && Ju(e, k);
        for (var v = S.nTr, l = 0; l < m.length; l++) {
          var d = m[l], y = S.anCells[l];
          Lr(y, Ze.type.className[d.sType]), Lr(y, e.oClasses.tbody.cell);
        }
        Ne(
          e,
          "aoRowCallback",
          null,
          [v, S._aData, i, C, k]
        ), r.push(v), i++;
      }
    }
  else
    r[0] = Cl(e);
  Ne(e, "aoHeaderCallback", "header", [
    O(e.nTHead).children("tr")[0],
    xl(e),
    c,
    h,
    o
  ]), Ne(e, "aoFooterCallback", "footer", [
    O(e.nTFoot).children("tr")[0],
    xl(e),
    c,
    h,
    o
  ]), g[0].replaceChildren ? g[0].replaceChildren.apply(g[0], r) : (g.children().detach(), g.append(O(r))), O(e.nTableWrapper).toggleClass("dt-empty-footer", O("tr", e.nTFoot).length === 0), Ne(e, "aoDrawCallback", "draw", [e], !0), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1;
}
function Br(e, t, n) {
  var r = e.oFeatures, i = r.bSort, a = r.bFilter;
  (n === void 0 || n === !0) && (us(e), i && za(e), a ? li(e, e.oPreviousSearch) : e.aiDisplay = e.aiDisplayMaster.slice()), t !== !0 && (e._iDisplayStart = 0), e._drawHold = t, jr(e), e.api.one("draw", function() {
    e._drawHold = !1;
  });
}
function Cl(e) {
  var t = e.oLanguage, n = t.sZeroRecords, r = kt(e);
  return (r === "ssp" || r === "ajax") && !e.json ? n = t.sLoadingRecords : t.sEmptyTable && e.fnRecordsTotal() === 0 && (n = t.sEmptyTable), O("<tr/>").append(O("<td />", {
    colSpan: ls(e),
    class: e.oClasses.empty.row
  }).html(n))[0];
}
function wa(e, t, n) {
  if (Array.isArray(n)) {
    for (var r = 0; r < n.length; r++)
      wa(e, t, n[r]);
    return;
  }
  var i = e[t];
  O.isPlainObject(n) ? n.features ? (n.rowId && (e.id = n.rowId), n.rowClass && (e.className = n.rowClass), i.id = n.id, i.className = n.className, wa(e, t, n.features)) : Object.keys(n).map(function(a) {
    i.contents.push({
      feature: a,
      opts: n[a]
    });
  }) : i.contents.push(n);
}
function Zf(e, t, n) {
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
function Tl(e, t, n) {
  var r = [];
  O.each(t, function(a, o) {
    if (o !== null) {
      var c = a.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/), h = c[2] ? c[2] * 1 : 0, m = c[3] ? c[3].toLowerCase() : "full";
      if (c[1] === n) {
        var g = Zf(r, h, m);
        wa(g, m, o);
      }
    }
  }), r.sort(function(a, o) {
    var c = a.rowNum, h = o.rowNum;
    if (c === h) {
      var m = a.full && !o.full ? -1 : 1;
      return n === "bottom" ? m * -1 : m;
    }
    return h - c;
  }), n === "bottom" && r.reverse();
  for (var i = 0; i < r.length; i++)
    delete r[i].rowNum, eh(e, r[i]);
  return r;
}
function eh(e, t) {
  var n = function(i, a) {
    return Ze.features[i] || Et(e, 0, "Unknown feature: " + i), Ze.features[i].apply(this, [e, a]);
  }, r = function(i) {
    if (t[i])
      for (var a = t[i].contents, o = 0, c = a.length; o < c; o++)
        if (a[o]) {
          if (typeof a[o] == "string")
            a[o] = n(a[o], null);
          else if (O.isPlainObject(a[o]))
            a[o] = n(a[o].feature, a[o].opts);
          else if (typeof a[o].node == "function")
            a[o] = a[o].node(e);
          else if (typeof a[o] == "function") {
            var h = a[o](e);
            a[o] = typeof h.node == "function" ? h.node() : h;
          }
        } else
          continue;
  };
  r("start"), r("end"), r("full");
}
function th(e) {
  var t = e.oClasses, n = O(e.nTable), r = O("<div/>").attr({
    id: e.sTableId + "_wrapper",
    class: t.container
  }).insertBefore(n);
  if (e.nTableWrapper = r[0], e.sDom)
    nh(e, e.sDom, r);
  else {
    var i = Tl(e, e.layout, "top"), a = Tl(e, e.layout, "bottom"), o = Qi(e, "layout");
    i.forEach(function(c) {
      o(e, r, c);
    }), o(e, r, {
      full: {
        table: !0,
        contents: [rc(e)]
      }
    }), a.forEach(function(c) {
      o(e, r, c);
    });
  }
  dh(e);
}
function nh(e, t, n) {
  for (var r = t.match(/(".*?")|('.*?')|./g), i, a, o, c, h, m = 0; m < r.length; m++) {
    if (i = null, a = r[m], a == "<") {
      if (o = O("<div/>"), c = r[m + 1], c[0] == "'" || c[0] == '"') {
        h = c.replace(/['"]/g, "");
        var g = "", _;
        if (h.indexOf(".") != -1) {
          var w = h.split(".");
          g = w[0], _ = w[1];
        } else
          h[0] == "#" ? g = h : _ = h;
        o.attr("id", g.substring(1)).addClass(_), m++;
      }
      n.append(o), n = o;
    } else
      a == ">" ? n = n.parent() : a == "t" ? i = rc(e) : I.ext.feature.forEach(function(C) {
        a == C.cFeature && (i = C.fnInit(e));
      });
    i && n.append(i);
  }
}
function ec(e, t, n) {
  var r = e.aoColumns, i = O(t).children("tr"), a, o, c, h, m, g, _, w, C, k, S = e.titleRow, v = t && t.nodeName.toLowerCase() === "thead", l = [], d, y = function(z, ne, F) {
    for (var D = z[ne]; D[F]; )
      F++;
    return F;
  };
  for (c = 0, g = i.length; c < g; c++)
    l.push([]);
  for (c = 0, g = i.length; c < g; c++)
    for (a = i[c], w = 0, o = a.firstChild; o; ) {
      if (o.nodeName.toUpperCase() == "TD" || o.nodeName.toUpperCase() == "TH") {
        var P = [], N = O(o);
        if (C = o.getAttribute("colspan") * 1, k = o.getAttribute("rowspan") * 1, C = !C || C === 0 || C === 1 ? 1 : C, k = !k || k === 0 || k === 1 ? 1 : k, _ = y(l, c, w), d = C === 1, n) {
          if (d) {
            ya(e, _, cc(N.data()));
            var p = r[_], M = o.getAttribute("width") || null, U = o.style.width.match(/width:\s*(\d+[pxem%]+)/);
            U && (M = U[1]), p.sWidthOrig = p.sWidth || M, v ? (p.sTitle !== null && !p.autoTitle && (S === !0 && c === 0 || // top row
            S === !1 && c === i.length - 1 || // bottom row
            S === c || // specific row
            S === null) && (o.innerHTML = p.sTitle), !p.sTitle && d && (p.sTitle = dn(o.innerHTML), p.autoTitle = !0)) : p.footer && (o.innerHTML = p.footer), p.ariaTitle || (p.ariaTitle = N.attr("aria-label") || p.sTitle), p.className && N.addClass(p.className);
          }
          O(".dt-column-title", o).length === 0 && O(document.createElement(e.columnTitleTag)).addClass("dt-column-title").append(o.childNodes).appendTo(o), e.orderIndicators && v && N.filter(":not([data-dt-order=disable])").length !== 0 && N.parent(":not([data-dt-order=disable])").length !== 0 && O(".dt-column-order", o).length === 0 && O(document.createElement(e.columnTitleTag)).addClass("dt-column-order").appendTo(o);
          var q = v ? "header" : "footer";
          O("div.dt-column-" + q, o).length === 0 && O("<div>").addClass("dt-column-" + q).append(o.childNodes).appendTo(o);
        }
        for (m = 0; m < C; m++) {
          for (h = 0; h < k; h++)
            l[c + h][_ + m] = {
              cell: o,
              unique: d
            }, l[c + h].row = a;
          P.push(_ + m);
        }
        o.setAttribute("data-dt-column", $r(P).join(","));
      }
      o = o.nextSibling;
    }
  return l;
}
function rh(e) {
  var t = kt(e) == "ssp", n = e.iInitDisplayStart;
  n !== void 0 && n !== -1 && (e._iDisplayStart = t ? n : n >= e.fnRecordsDisplay() ? 0 : n, e.iInitDisplayStart = -1);
}
function Ga(e, t, n) {
  var r, i = e.ajax, a = e.oInstance, o = function(g) {
    var _ = e.jqXHR ? e.jqXHR.status : null;
    (g === null || typeof _ == "number" && _ == 204) && (g = {}, oi(e, g, []));
    var w = g.error || g.sError;
    if (w && Et(e, 0, w), g.d && typeof g.d == "string")
      try {
        g = JSON.parse(g.d);
      } catch {
      }
    e.json = g, Ne(e, null, "xhr", [e, g, e.jqXHR], !0), n(g);
  };
  if (O.isPlainObject(i) && i.data) {
    r = i.data;
    var c = typeof r == "function" ? r(t, e) : r;
    t = typeof r == "function" && c ? c : O.extend(!0, t, c), delete i.data;
  }
  var h = {
    url: typeof i == "string" ? i : "",
    data: t,
    success: o,
    dataType: "json",
    cache: !1,
    type: e.sServerMethod,
    error: function(g, _) {
      var w = Ne(
        e,
        null,
        "xhr",
        [e, null, e.jqXHR],
        !0
      );
      w.indexOf(!0) === -1 && (_ == "parsererror" ? Et(e, 0, "Invalid JSON response", 1) : g.readyState === 4 && Et(e, 0, "Ajax error", 7)), Pt(e, !1);
    }
  };
  if (O.isPlainObject(i) && O.extend(h, i), e.oAjaxData = t, Ne(e, null, "preXhr", [e, t, h], !0), h.submitAs === "json" && typeof t == "object" && (h.data = JSON.stringify(t), h.contentType || (h.contentType = "application/json; charset=utf-8")), typeof i == "function")
    e.jqXHR = i.call(a, t, o, e);
  else if (i.url === "") {
    var m = {};
    oi(e, m, []), o(m);
  } else
    e.jqXHR = O.ajax(h);
  r && (i.data = r);
}
function ih(e) {
  e.iDraw++, Pt(e, !0), Ga(e, sh(e), function(t) {
    ah(e, t);
  });
}
function sh(e) {
  var t = e.aoColumns, n = e.oFeatures, r = e.oPreviousSearch, i = e.aoPreSearchCols, a = function(o, c) {
    return typeof t[o][c] == "function" ? "function" : t[o][c];
  };
  return {
    draw: e.iDraw,
    columns: t.map(function(o, c) {
      return {
        data: a(c, "mData"),
        name: o.sName,
        searchable: o.bSearchable,
        orderable: o.bSortable,
        search: {
          value: i[c].search,
          regex: i[c].regex,
          fixed: Object.keys(o.searchFixed).map(function(h) {
            return {
              name: h,
              term: typeof o.searchFixed[h] != "function" ? o.searchFixed[h].toString() : "function"
            };
          })
        }
      };
    }),
    order: ds(e).map(function(o) {
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
function ah(e, t) {
  var n = oi(e, t), r = ta(e, "draw", t), i = ta(e, "recordsTotal", t), a = ta(e, "recordsFiltered", t);
  if (r !== void 0) {
    if (r * 1 < e.iDraw)
      return;
    e.iDraw = r * 1;
  }
  n || (n = []), Wa(e), e._iRecordsTotal = parseInt(i, 10), e._iRecordsDisplay = parseInt(a, 10);
  for (var o = 0, c = n.length; o < c; o++)
    sr(e, n[o]);
  e.aiDisplay = e.aiDisplayMaster.slice(), us(e), jr(e, !0), Ji(e), Pt(e, !1);
}
function oi(e, t, n) {
  var r = "data";
  if (O.isPlainObject(e.ajax) && e.ajax.dataSrc !== void 0) {
    var i = e.ajax.dataSrc;
    typeof i == "string" || typeof i == "function" ? r = i : i.data !== void 0 && (r = i.data);
  }
  if (!n)
    return r === "data" ? t.aaData || t[r] : r !== "" ? Er(r)(t) : t;
  Qn(r)(t, n);
}
function ta(e, t, n) {
  var r = O.isPlainObject(e.ajax) ? e.ajax.dataSrc : null;
  if (r && r[t])
    return Er(r[t])(n);
  var i = "";
  return t === "draw" ? i = "sEcho" : t === "recordsTotal" ? i = "iTotalRecords" : t === "recordsFiltered" && (i = "iTotalDisplayRecords"), n[i] !== void 0 ? n[i] : n[t];
}
function li(e, t) {
  var n = e.aoPreSearchCols;
  if (kt(e) != "ssp") {
    ch(e), e.aiDisplay = e.aiDisplayMaster.slice(), Hi(e.aiDisplay, e, t.search, t), O.each(e.searchFixed, function(a, o) {
      Hi(e.aiDisplay, e, o, {});
    });
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      Hi(
        e.aiDisplay,
        e,
        i.search,
        i,
        r
      ), O.each(e.aoColumns[r].searchFixed, function(a, o) {
        Hi(e.aiDisplay, e, o, {}, r);
      });
    }
    oh(e);
  }
  e.bFiltered = !0, Ne(e, null, "search", [e]);
}
function oh(e) {
  for (var t = I.ext.search, n = e.aiDisplay, r, i, a = 0, o = t.length; a < o; a++) {
    for (var c = [], h = 0, m = n.length; h < m; h++)
      i = n[h], r = e.aoData[i], t[a](e, r._aFilterData, i, r._aData, h) && c.push(i);
    n.length = 0, hs(n, c);
  }
}
function Hi(e, t, n, r, i) {
  if (n !== "") {
    var a = 0, o = [], c = typeof n == "function" ? n : null, h = n instanceof RegExp ? n : c ? null : lh(n, r);
    for (a = 0; a < e.length; a++) {
      var m = t.aoData[e[a]], g = i === void 0 ? m._sFilterRow : m._aFilterData[i];
      (c && c(g, m._aData, e[a], i) || h && h.test(g)) && o.push(e[a]);
    }
    for (e.length = o.length, a = 0; a < o.length; a++)
      e[a] = o[a];
  }
}
function lh(e, t) {
  var n = [], r = O.extend({}, {
    boundary: !1,
    caseInsensitive: !0,
    exact: !1,
    regex: !1,
    smart: !0
  }, t);
  if (typeof e != "string" && (e = e.toString()), e = Ui(e), r.exact)
    return new RegExp(
      "^" + xa(e) + "$",
      r.caseInsensitive ? "i" : ""
    );
  if (e = r.regex ? e : xa(e), r.smart) {
    var i = e.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""], a = i.map(function(h) {
      var m = !1, g;
      return h.charAt(0) === "!" && (m = !0, h = h.substring(1)), h.charAt(0) === '"' ? (g = h.match(/^"(.*)"$/), h = g ? g[1] : h) : h.charAt(0) === "“" && (g = h.match(/^\u201C(.*)\u201D$/), h = g ? g[1] : h), m && (h.length > 1 && n.push("(?!" + h + ")"), h = ""), h.replace(/"/g, "");
    }), o = n.length ? n.join("") : "", c = r.boundary ? "\\b" : "";
    e = "^(?=.*?" + c + a.join(")(?=.*?" + c) + ")(" + o + ".)*$";
  }
  return new RegExp(e, r.caseInsensitive ? "i" : "");
}
var xa = I.util.escapeRegex, $i = O("<div>")[0], uh = $i.textContent !== void 0;
function ch(e) {
  for (var t = e.aoColumns, n = e.aoData, r, i, a, o, c, h, m = !1, g = 0; g < n.length; g++)
    if (n[g] && (h = n[g], !h._aFilterData)) {
      for (o = [], i = 0, a = t.length; i < a; i++)
        r = t[i], r.bSearchable ? (c = Ht(e, g, i, "filter"), c === null && (c = ""), typeof c != "string" && c.toString && (c = c.toString())) : c = "", c.indexOf && c.indexOf("&") !== -1 && ($i.innerHTML = c, c = uh ? $i.textContent : $i.innerText), c.replace && (c = c.replace(/[\r\n\u2028]/g, "")), o.push(c);
      h._aFilterData = o, h._sFilterRow = o.join("  "), m = !0;
    }
  return m;
}
function ji(e) {
  var t, n = e.oInit, r = e.deferLoading, i = kt(e);
  if (!e.bInitialised) {
    setTimeout(function() {
      ji(e);
    }, 200);
    return;
  }
  _l(e, "header"), _l(e, "footer"), gh(e, n, function() {
    Ki(e, e.aoHeader), Ki(e, e.aoFooter);
    var a = e.iInitDisplayStart;
    if (n.aaData)
      for (t = 0; t < n.aaData.length; t++)
        sr(e, n.aaData[t]);
    else
      (r || i == "dom") && ja(e, O(e.nTBody).children("tr"));
    e.aiDisplay = e.aiDisplayMaster.slice(), th(e), ph(e), sc(e), Pt(e, !0), Ne(e, null, "preInit", [e], !0), Br(e), (i != "ssp" || r) && (i == "ajax" ? Ga(e, {}, function(o) {
      var c = oi(e, o);
      for (t = 0; t < c.length; t++)
        sr(e, c[t]);
      e.iInitDisplayStart = a, Br(e), Pt(e, !1), Ji(e);
    }) : (Ji(e), Pt(e, !1)));
  });
}
function Ji(e) {
  if (!e._bInitComplete) {
    var t = [e, e.json];
    e._bInitComplete = !0, os(e), Ne(e, null, "plugin-init", t, !0), Ne(e, "aoInitComplete", "init", t, !0);
  }
}
function tc(e, t) {
  var n = parseInt(t, 10);
  e._iDisplayLength = n, uc(e), Ne(e, null, "length", [e, n]);
}
function Xa(e, t, n) {
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
    Et(e, 0, "Unknown paging action: " + t, 5);
  }
  var o = e._iDisplayStart !== r;
  return e._iDisplayStart = r, Ne(e, null, o ? "page" : "page-nc", [e]), o && n && jr(e), o;
}
function dh(e) {
  var t = e.nTable, n = e.oScroll.sX !== "" || e.oScroll.sY !== "";
  if (e.oFeatures.bProcessing) {
    var r = O("<div/>", {
      id: e.sTableId + "_processing",
      class: e.oClasses.processing.container,
      role: "status"
    }).html(e.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>");
    n ? r.prependTo(O("div.dt-scroll", e.nTableWrapper)) : r.insertBefore(t), O(t).on("processing.dt.DT", function(i, a, o) {
      r.css("display", o ? "block" : "none");
    });
  }
}
function Pt(e, t) {
  e.bDrawing && t === !1 || Ne(e, null, "processing", [e, t]);
}
function nc(e, t, n) {
  t ? (Pt(e, !0), setTimeout(function() {
    n(), Pt(e, !1);
  }, 0)) : n();
}
function rc(e) {
  var t = O(e.nTable), n = e.oScroll;
  if (n.sX === "" && n.sY === "")
    return e.nTable;
  var r = n.sX, i = n.sY, a = e.oClasses.scrolling, o = e.captionNode, c = o ? o._captionSide : null, h = O(t[0].cloneNode(!1)), m = O(t[0].cloneNode(!1)), g = t.children("tfoot"), _ = "<div/>", w = function(d) {
    return d ? An(d) : null;
  };
  g.length || (g = null);
  var C = O(_, { class: a.container }).append(
    O(_, { class: a.header.self }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: r ? w(r) : "100%"
    }).append(
      O(_, { class: a.header.inner }).css({
        "box-sizing": "content-box",
        width: n.sXInner || "100%"
      }).append(
        h.removeAttr("id").css("margin-left", 0).append(c === "top" ? o : null).append(
          t.children("thead")
        )
      )
    )
  ).append(
    O(_, { class: a.body }).css({
      position: "relative",
      overflow: "auto",
      width: w(r)
    }).append(t)
  );
  g && C.append(
    O(_, { class: a.footer.self }).css({
      overflow: "hidden",
      border: 0,
      width: r ? w(r) : "100%"
    }).append(
      O(_, { class: a.footer.inner }).append(
        m.removeAttr("id").css("margin-left", 0).append(c === "bottom" ? o : null).append(
          t.children("tfoot")
        )
      )
    )
  );
  var k = C.children(), S = k[0], v = k[1], l = g ? k[2] : null;
  return O(v).on("scroll.DT", function() {
    var d = this.scrollLeft;
    S.scrollLeft = d, g && (l.scrollLeft = d);
  }), O("th, td", S).on("focus", function() {
    var d = S.scrollLeft;
    v.scrollLeft = d, g && (v.scrollLeft = d);
  }), O(v).css("max-height", i), n.bCollapse || O(v).css("height", i), e.nScrollHead = S, e.nScrollBody = v, e.nScrollFoot = l, e.aoDrawCallback.push(ic), C[0];
}
function ic(e) {
  var t = e.oScroll, n = t.iBarWidth, r = O(e.nScrollHead), i = r.children("div"), a = i.children("table"), o = e.nScrollBody, c = O(o), h = O(e.nScrollFoot), m = h.children("div"), g = m.children("table"), _ = O(e.nTHead), w = O(e.nTable), C = e.nTFoot && O("th, td", e.nTFoot).length ? O(e.nTFoot) : null, k = e.oBrowser, S, v, l = o.scrollHeight > o.clientHeight;
  if (e.scrollBarVis !== l && e.scrollBarVis !== void 0) {
    e.scrollBarVis = l, os(e);
    return;
  } else
    e.scrollBarVis = l;
  if (w.children("thead, tfoot").remove(), S = _.clone().prependTo(w), S.find("th, td").removeAttr("tabindex"), S.find("[id]").removeAttr("id"), C && (v = C.clone().prependTo(w), v.find("[id]").removeAttr("id")), e.aiDisplay.length) {
    var d = null, y = kt(e) !== "ssp" ? e._iDisplayStart : 0;
    for (M = y; M < y + e.aiDisplay.length; M++) {
      var P = e.aiDisplay[M], N = e.aoData[P].nTr;
      if (N) {
        d = N;
        break;
      }
    }
    if (d)
      for (var p = O(d).children("th, td").map(function(D) {
        return {
          idx: Va(e, D),
          width: O(this).outerWidth()
        };
      }), M = 0; M < p.length; M++) {
        var U = e.aoColumns[p[M].idx].colEl[0], q = U.style.width.replace("px", "");
        q !== p[M].width && (U.style.width = p[M].width + "px", t.sX && (U.style.minWidth = p[M].width + "px"));
      }
  }
  a.find("colgroup").remove(), a.append(e.colgroup.clone()), C && (g.find("colgroup").remove(), g.append(e.colgroup.clone())), O("th, td", S).each(function() {
    O(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
  }), C && O("th, td", v).each(function() {
    O(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
  });
  var z = Math.floor(w.height()) > o.clientHeight || c.css("overflow-y") == "scroll", ne = "padding" + (k.bScrollbarLeft ? "Left" : "Right"), F = w.outerWidth();
  a.css("width", An(F)), i.css("width", An(F)).css(ne, z ? n + "px" : "0px"), C && (g.css("width", An(F)), m.css("width", An(F)).css(ne, z ? n + "px" : "0px")), w.children("colgroup").prependTo(w), c.trigger("scroll"), (e.bSorted || e.bFiltered) && !e._drawHold && (o.scrollTop = 0);
}
function fh(e) {
  if (e.oFeatures.bAutoWidth) {
    var t = e.nTable, n = e.aoColumns, r = e.oScroll, i = r.sY, a = r.sX, o = r.sXInner, c = Ma(e, "bVisible"), h = t.getAttribute("width"), m = t.parentNode, g, _, w, C, k = t.style.width, S = Sl(e);
    if (S === e.containerWidth)
      return !1;
    e.containerWidth = S, !k && !h && (t.style.width = "100%", k = "100%"), k && k.indexOf("%") !== -1 && (h = k), Ne(
      e,
      null,
      "column-calc",
      { visible: c },
      !1
    );
    var v = O(t.cloneNode()).css("visibility", "hidden").css("margin", 0).removeAttr("id");
    v.append("<tbody/>"), v.append(O(e.nTHead).clone()).append(O(e.nTFoot).clone()), v.find("tfoot th, tfoot td").css("width", ""), v.find("thead th, thead td").each(function() {
      var R = Yu(e, this, !0, !1);
      R ? (this.style.width = R, a && (this.style.minWidth = R, O(this).append(O("<div/>").css({
        width: R,
        margin: 0,
        padding: 0,
        border: 0,
        height: 1
      })))) : this.style.width = "";
    });
    var l = [];
    for (g = 0; g < c.length; g++)
      l.push(hh(e, c[g]));
    if (l.length)
      for (g = 0; g < l[0].length; g++) {
        var d = O("<tr/>").appendTo(v.find("tbody"));
        for (_ = 0; _ < c.length; _++) {
          C = c[_], w = n[C];
          var y = l[_][g] || "", P = Ze.type.className[w.sType], N = w.sContentPadding || (a ? "-" : ""), p = y + N, M = y.indexOf("<") === -1 && y.indexOf("&") === -1 ? document.createTextNode(p) : p;
          O("<td/>").addClass(P).addClass(w.sClass).append(M).appendTo(d);
        }
      }
    O("[name]", v).removeAttr("name");
    var U = O("<div/>").css(
      a || i ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}
    ).append(v).appendTo(m);
    a && o ? v.width(o) : a ? (v.css("width", "auto"), v.removeAttr("width"), v.outerWidth() < m.clientWidth && h && v.outerWidth(m.clientWidth)) : i ? v.outerWidth(m.clientWidth) : h && v.outerWidth(h);
    var q = 0, z = v.find("tbody tr").eq(0).children();
    for (g = 0; g < c.length; g++) {
      var ne = z[g].getBoundingClientRect().width;
      q += ne, n[c[g]].sWidth = An(ne);
    }
    if (t.style.width = An(q), U.remove(), h && (t.style.width = An(h)), (h || a) && !e._reszEvt) {
      var F = I.util.throttle(function() {
        var R = Sl(e);
        !e.bDestroying && R !== 0 && os(e);
      });
      if (window.ResizeObserver) {
        var D = O(e.nTableWrapper).is(":visible"), A = O("<div>").css({
          width: "100%",
          height: 0
        }).addClass("dt-autosize").appendTo(e.nTableWrapper);
        e.resizeObserver = new ResizeObserver(function(R) {
          D ? D = !1 : F();
        }), e.resizeObserver.observe(A[0]);
      } else
        O(window).on("resize.DT-" + e.sInstance, F);
      e._reszEvt = !0;
    }
  }
}
function Sl(e) {
  return O(e.nTableWrapper).is(":visible") ? O(e.nTableWrapper).width() : 0;
}
function hh(e, t) {
  var n = e.aoColumns[t];
  if (!n.wideStrings) {
    for (var r = [], i = [], a = 0, o = e.aiDisplayMaster.length; a < o; a++) {
      var c = e.aiDisplayMaster[a], h = qa(e, c)[t], m = h && typeof h == "object" && h.nodeType ? h.innerHTML : h + "";
      m = m.replace(/id=".*?"/g, "").replace(/name=".*?"/g, ""), m = m.replace(/<script.*?<\/script>/gi, " ");
      var g = dn(m, " ").replace(/&nbsp;/g, " ");
      i.push({
        str: m,
        len: g.length
      }), r.push(g);
    }
    i.sort(function(w, C) {
      return C.len - w.len;
    }).splice(3), n.wideStrings = i.map(function(w) {
      return w.str;
    });
    let _ = r.join(" ").split(" ");
    _.sort(function(w, C) {
      return C.length - w.length;
    }), _.length && n.wideStrings.push(_[0]), _.length > 1 && n.wideStrings.push(_[1]), _.length > 2 && n.wideStrings.push(_[3]);
  }
  return n.wideStrings;
}
function An(e) {
  return e === null ? "0px" : typeof e == "number" ? e < 0 ? "0px" : e + "px" : e.match(/\d$/) ? e + "px" : e;
}
function sc(e) {
  var t = e.aoColumns;
  for (e.colgroup.empty(), Je = 0; Je < t.length; Je++)
    t[Je].bVisible && e.colgroup.append(t[Je].colEl);
}
function ph(e) {
  var t = e.nTHead, n = t.querySelectorAll("tr"), r = e.titleRow, i = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
  r === !0 ? t = n[0] : r === !1 ? t = n[n.length - 1] : r !== null && (t = n[r]), e.orderHandler && ac(
    e,
    t,
    t === e.nTHead ? "tr" + i + " th" + i + ", tr" + i + " td" + i : "th" + i + ", td" + i
  );
  var a = [];
  Zn(e, a, e.aaSorting), e.aaSorting = a;
}
function ac(e, t, n, r, i) {
  lc(t, n, function(a) {
    var o = !1, c = r === void 0 ? $a(a.target) : typeof r == "function" ? r() : Array.isArray(r) ? r : [r];
    if (c.length) {
      for (var h = 0, m = c.length; h < m; h++) {
        var g = vh(e, c[h], h, a.shiftKey);
        if (g !== !1 && (o = !0), e.aaSorting.length === 1 && e.aaSorting[0][1] === "")
          break;
      }
      o && nc(e, !0, function() {
        za(e), oc(e, e.aiDisplay), Br(e, !1, !1), i && i();
      });
    }
  });
}
function oc(e, t) {
  if (!(t.length < 2)) {
    var n = e.aiDisplayMaster, r = {}, i = {}, a;
    for (a = 0; a < n.length; a++)
      r[n[a]] = a;
    for (a = 0; a < t.length; a++)
      i[t[a]] = r[t[a]];
    t.sort(function(o, c) {
      return i[o] - i[c];
    });
  }
}
function Zn(e, t, n) {
  var r = function(a) {
    if (O.isPlainObject(a)) {
      if (a.idx !== void 0)
        t.push([a.idx, a.dir]);
      else if (a.name) {
        var o = lt(e.aoColumns, "sName"), c = o.indexOf(a.name);
        c !== -1 && t.push([c, a.dir]);
      }
    } else
      t.push(a);
  };
  if (O.isPlainObject(n))
    r(n);
  else if (n.length && typeof n[0] == "number")
    r(n);
  else if (n.length)
    for (var i = 0; i < n.length; i++)
      r(n[i]);
}
function ds(e) {
  var t, n, r, i = [], a = I.ext.type.order, o = e.aoColumns, c, h, m, g, _ = e.aaSortingFixed, w = O.isPlainObject(_), C = [];
  if (!e.oFeatures.bSort)
    return i;
  for (Array.isArray(_) && Zn(e, C, _), w && _.pre && Zn(e, C, _.pre), Zn(e, C, e.aaSorting), w && _.post && Zn(e, C, _.post), t = 0; t < C.length; t++)
    if (g = C[t][0], o[g])
      for (c = o[g].aDataSort, n = 0, r = c.length; n < r; n++)
        h = c[n], m = o[h].sType || "string", C[t]._idx === void 0 && (C[t]._idx = o[h].asSorting.indexOf(C[t][1])), C[t][1] && i.push({
          src: g,
          col: h,
          dir: C[t][1],
          index: C[t]._idx,
          type: m,
          formatter: a[m + "-pre"],
          sorter: a[m + "-" + C[t][1]]
        });
  return i;
}
function za(e, t, n) {
  var r, i, a = [], o = I.ext.type.order, c = e.aoData, h, m = e.aiDisplayMaster, g;
  if (us(e), t !== void 0) {
    var _ = e.aoColumns[t];
    g = [{
      src: t,
      col: t,
      dir: n,
      index: 0,
      type: _.sType,
      formatter: o[_.sType + "-pre"],
      sorter: o[_.sType + "-" + n]
    }], m = m.slice();
  } else
    g = ds(e);
  for (r = 0, i = g.length; r < i; r++)
    h = g[r], mh(e, h.col);
  if (kt(e) != "ssp" && g.length !== 0) {
    for (r = 0, i = m.length; r < i; r++)
      a[r] = r;
    g.length && g[0].dir === "desc" && e.orderDescReverse && a.reverse(), m.sort(function(w, C) {
      var k, S, v, l, d, y = g.length, P = c[w]._aSortData, N = c[C]._aSortData;
      for (v = 0; v < y; v++)
        if (d = g[v], k = P[d.col], S = N[d.col], d.sorter) {
          if (l = d.sorter(k, S), l !== 0)
            return l;
        } else if (l = k < S ? -1 : k > S ? 1 : 0, l !== 0)
          return d.dir === "asc" ? l : -l;
      return k = a[w], S = a[C], k < S ? -1 : k > S ? 1 : 0;
    });
  } else
    g.length === 0 && m.sort(function(w, C) {
      return w < C ? -1 : w > C ? 1 : 0;
    });
  return t === void 0 && (e.bSorted = !0, e.sortDetails = g, Ne(e, null, "order", [e, g])), m;
}
function vh(e, t, n, r) {
  var i = e.aoColumns[t], a = e.aaSorting, o = i.asSorting, c, h = function(g, _) {
    var w = g._idx;
    return w === void 0 && (w = o.indexOf(g[1])), w + 1 < o.length ? w + 1 : _ ? null : 0;
  };
  if (!i.bSortable)
    return !1;
  if (typeof a[0] == "number" && (a = e.aaSorting = [a]), (r || n) && e.oFeatures.bSortMulti) {
    var m = lt(a, "0").indexOf(t);
    m !== -1 ? (c = h(a[m], !0), c === null && a.length === 1 && (c = 0), c === null || o[c] === "" ? a.splice(m, 1) : (a[m][1] = o[c], a[m]._idx = c)) : r ? (a.push([t, o[0], 0]), a[a.length - 1]._idx = 0) : (a.push([t, a[0][1], 0]), a[a.length - 1]._idx = 0);
  } else
    a.length && a[0][0] == t ? (c = h(a[0]), a.length = 1, a[0][1] = o[c], a[0]._idx = c) : (a.length = 0, a.push([t, o[0]]), a[0]._idx = 0);
}
function _a(e) {
  var t = e.aLastSort, n = e.oClasses.order.position, r = ds(e), i = e.oFeatures, a, o, c;
  if (i.bSort && i.bSortClasses) {
    for (a = 0, o = t.length; a < o; a++)
      c = t[a].src, O(lt(e.aoData, "anCells", c)).removeClass(n + (a < 2 ? a + 1 : 3));
    for (a = 0, o = r.length; a < o; a++)
      c = r[a].src, O(lt(e.aoData, "anCells", c)).addClass(n + (a < 2 ? a + 1 : 3));
  }
  e.aLastSort = r;
}
function mh(e, t) {
  var n = e.aoColumns[t], r = I.ext.order[n.sSortDataType], i;
  r && (i = r.call(
    e.oInstance,
    e,
    t,
    hi(e, t)
  ));
  for (var a, o, c = I.ext.type.order[n.sType + "-pre"], h = e.aoData, m = 0; m < h.length; m++)
    h[m] && (a = h[m], a._aSortData || (a._aSortData = []), (!a._aSortData[t] || r) && (o = r ? i[m] : (
      // If there was a custom sort function, use data from there
      Ht(e, m, t, "sort")
    ), a._aSortData[t] = c ? c(o, e) : o));
}
function fs(e) {
  if (!e._bLoadingState) {
    var t = [];
    Zn(e, t, e.aaSorting);
    var n = e.aoColumns, r = {
      time: +/* @__PURE__ */ new Date(),
      start: e._iDisplayStart,
      length: e._iDisplayLength,
      order: t.map(function(i) {
        return n[i[0]] && n[i[0]].sName ? [n[i[0]].sName, i[1]] : i.slice();
      }),
      search: O.extend({}, e.oPreviousSearch),
      columns: e.aoColumns.map(function(i, a) {
        return {
          name: i.sName,
          visible: i.bVisible,
          search: O.extend({}, e.aoPreSearchCols[a])
        };
      })
    };
    e.oSavedState = r, Ne(e, "aoStateSaveParams", "stateSaveParams", [e, r]), e.oFeatures.bStateSave && !e.bDestroying && e.fnStateSaveCallback.call(e.oInstance, e, r);
  }
}
function gh(e, t, n) {
  if (!e.oFeatures.bStateSave) {
    n();
    return;
  }
  var r = function(a) {
    Ca(e, a, n);
  }, i = e.fnStateLoadCallback.call(e.oInstance, e, r);
  return i !== void 0 && Ca(e, i, n), !0;
}
function Ca(e, t, n) {
  var r, i, a = e.aoColumns, o = lt(e.aoColumns, "sName");
  e._bLoadingState = !0;
  var c = e._bInitComplete ? new I.Api(e) : null;
  if (!t || !t.time) {
    e._bLoadingState = !1, n();
    return;
  }
  var h = e.iStateDuration;
  if (h > 0 && t.time < +/* @__PURE__ */ new Date() - h * 1e3) {
    e._bLoadingState = !1, n();
    return;
  }
  var m = Ne(e, "aoStateLoadParams", "stateLoadParams", [e, t]);
  if (m.indexOf(!1) !== -1) {
    e._bLoadingState = !1, n();
    return;
  }
  if (e.oLoadedState = O.extend(!0, {}, t), Ne(e, null, "stateLoadInit", [e, t], !0), t.length !== void 0 && (c ? c.page.len(t.length) : e._iDisplayLength = t.length), t.start !== void 0 && (c === null ? (e._iDisplayStart = t.start, e.iInitDisplayStart = t.start) : Xa(e, t.start / e._iDisplayLength)), t.order !== void 0 && (e.aaSorting = [], O.each(t.order, function(k, S) {
    var v = [S[0], S[1]];
    if (typeof S[0] == "string") {
      var l = o.indexOf(S[0]);
      if (l < 0)
        return;
      v[0] = l;
    } else if (v[0] >= a.length)
      return;
    e.aaSorting.push(v);
  })), t.search !== void 0 && O.extend(e.oPreviousSearch, t.search), t.columns) {
    var g = t.columns, _ = lt(t.columns, "name");
    if (_.join("").length && _.join("") !== o.join(""))
      for (g = [], r = 0; r < o.length; r++)
        if (o[r] != "") {
          var w = _.indexOf(o[r]);
          w >= 0 ? g.push(t.columns[w]) : g.push({});
        } else
          g.push({});
    if (g.length === a.length) {
      for (r = 0, i = g.length; r < i; r++) {
        var C = g[r];
        C.visible !== void 0 && (c ? c.column(r).visible(C.visible, !1) : a[r].bVisible = C.visible), C.search !== void 0 && O.extend(e.aoPreSearchCols[r], C.search);
      }
      c && c.one("draw", function() {
        c.columns.adjust();
      });
    }
  }
  e._bLoadingState = !1, Ne(e, "aoStateLoaded", "stateLoaded", [e, t]), n();
}
function Et(e, t, n, r) {
  if (n = "DataTables warning: " + (e ? "table id=" + e.sTableId + " - " : "") + n, r && (n += ". For more information about this error, please see https://datatables.net/tn/" + r), t)
    window.console && console.log && console.log(n);
  else {
    var i = I.ext, a = i.sErrMode || i.errMode;
    if (e && Ne(e, null, "dt-error", [e, r, n], !0), a == "alert")
      alert(n);
    else {
      if (a == "throw")
        throw new Error(n);
      typeof a == "function" && a(e, r, n);
    }
  }
}
function Pn(e, t, n, r) {
  if (Array.isArray(n)) {
    O.each(n, function(i, a) {
      Array.isArray(a) ? Pn(e, t, a[0], a[1]) : Pn(e, t, a);
    });
    return;
  }
  r === void 0 && (r = n), t[n] !== void 0 && (e[r] = t[n]);
}
function Dl(e, t, n) {
  var r;
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && (r = t[i], O.isPlainObject(r) ? (O.isPlainObject(e[i]) || (e[i] = {}), O.extend(!0, e[i], r)) : n && i !== "data" && i !== "aaData" && Array.isArray(r) ? e[i] = r.slice() : e[i] = r);
  return e;
}
function lc(e, t, n) {
  O(e).on("click.DT", t, function(r) {
    n(r);
  }).on("keypress.DT", t, function(r) {
    r.which === 13 && (r.preventDefault(), n(r));
  }).on("selectstart.DT", t, function() {
    return !1;
  });
}
function It(e, t, n) {
  n && e[t].push(n);
}
function Ne(e, t, n, r, i) {
  var a = [];
  if (t && (a = e[t].slice().reverse().map(function(h) {
    return h.apply(e.oInstance, r);
  })), n !== null) {
    var o = O.Event(n + ".dt"), c = O(e.nTable);
    o.dt = e.api, c[i ? "trigger" : "triggerHandler"](o, r), i && c.parents("body").length === 0 && O("body").trigger(o, r), a.push(o.result);
  }
  return a;
}
function uc(e) {
  var t = e._iDisplayStart, n = e.fnDisplayEnd(), r = e._iDisplayLength;
  t >= n && (t = n - r), t -= t % r, (r === -1 || t < 0) && (t = 0), e._iDisplayStart = t;
}
function Qi(e, t) {
  var n = e.renderer, r = I.ext.renderer[t];
  return O.isPlainObject(n) && n[t] ? r[n[t]] || r._ : typeof n == "string" && r[n] || r._;
}
function kt(e) {
  return e.oFeatures.bServerSide ? "ssp" : e.ajax ? "ajax" : "dom";
}
function Ua(e, t, n) {
  var r = e.fnFormatNumber, i = e._iDisplayStart + 1, a = e._iDisplayLength, o = e.fnRecordsDisplay(), c = e.fnRecordsTotal(), h = a === -1;
  return t.replace(/_START_/g, r.call(e, i)).replace(/_END_/g, r.call(e, e.fnDisplayEnd())).replace(/_MAX_/g, r.call(e, c)).replace(/_TOTAL_/g, r.call(e, o)).replace(/_PAGE_/g, r.call(e, h ? 1 : Math.ceil(i / a))).replace(/_PAGES_/g, r.call(e, h ? 1 : Math.ceil(o / a))).replace(/_ENTRIES_/g, e.api.i18n("entries", "", n)).replace(/_ENTRIES-MAX_/g, e.api.i18n("entries", "", c)).replace(/_ENTRIES-TOTAL_/g, e.api.i18n("entries", "", o));
}
function hs(e, t) {
  if (t)
    if (t.length < 1e4)
      e.push.apply(e, t);
    else
      for (Je = 0; Je < t.length; Je++)
        e.push(t[Je]);
}
function Al(e, t, n) {
  for (Array.isArray(n) || (n = [n]), Je = 0; Je < n.length; Je++)
    e.on(t + ".dt", n[Je]);
}
function cc(e) {
  return I.ext.escape.attributes && O.each(e, function(t, n) {
    e[t] = nr(n);
  }), e;
}
var Ya = [], ft = Array.prototype, bh = function(e) {
  var t, n, r = I.settings, i = lt(r, "nTable");
  if (e) {
    if (e.nTable && e.oFeatures)
      return [e];
    if (e.nodeName && e.nodeName.toLowerCase() === "table")
      return t = i.indexOf(e), t !== -1 ? [r[t]] : null;
    if (e && typeof e.settings == "function")
      return e.settings().toArray();
    typeof e == "string" ? n = O(e).get() : e instanceof O && (n = e.get());
  } else
    return [];
  if (n)
    return r.filter(function(a, o) {
      return n.includes(i[o]);
    });
};
De = function(e, t) {
  if (!(this instanceof De))
    return new De(e, t);
  var n, r = [], i = function(a) {
    var o = bh(a);
    o && r.push.apply(r, o);
  };
  if (Array.isArray(e))
    for (n = 0; n < e.length; n++)
      i(e[n]);
  else
    i(e);
  this.context = r.length > 1 ? $r(r) : r, hs(this, t), this.selector = {
    rows: null,
    cols: null,
    opts: null
  }, De.extend(this, this, Ya);
};
I.Api = De;
O.extend(De.prototype, {
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
    return t.length > e ? new De(t[e], this[e]) : null;
  },
  filter: function(e) {
    var t = ft.filter.call(this, e, this);
    return new De(this.context, t);
  },
  flatten: function() {
    var e = [];
    return new De(this.context, e.concat.apply(e, this.toArray()));
  },
  get: function(e) {
    return this[e];
  },
  join: ft.join,
  includes: function(e) {
    return this.indexOf(e) !== -1;
  },
  indexOf: ft.indexOf,
  iterator: function(e, t, n, r) {
    var i = [], a, o, c, h, m, g = this.context, _, w, C, k = this.selector;
    for (typeof e == "string" && (r = n, n = t, t = e, e = !1), o = 0, c = g.length; o < c; o++) {
      var S = new De(g[o]);
      if (t === "table")
        a = n.call(S, g[o], o), a !== void 0 && i.push(a);
      else if (t === "columns" || t === "rows")
        a = n.call(S, g[o], this[o], o), a !== void 0 && i.push(a);
      else if (t === "every" || t === "column" || t === "column-rows" || t === "row" || t === "cell")
        for (w = this[o], t === "column-rows" && (_ = ps(g[o], k.opts)), h = 0, m = w.length; h < m; h++)
          C = w[h], t === "cell" ? a = n.call(S, g[o], C.row, C.column, o, h) : a = n.call(S, g[o], C, o, h, _), a !== void 0 && i.push(a);
    }
    if (i.length || r) {
      var v = new De(g, e ? i.concat.apply([], i) : i), l = v.selector;
      return l.rows = k.rows, l.cols = k.cols, l.opts = k.opts, v;
    }
    return this;
  },
  lastIndexOf: ft.lastIndexOf,
  length: 0,
  map: function(e) {
    var t = ft.map.call(this, e, this);
    return new De(this.context, t);
  },
  pluck: function(e) {
    var t = I.util.get(e);
    return this.map(function(n) {
      return t(n);
    });
  },
  pop: ft.pop,
  push: ft.push,
  reduce: ft.reduce,
  reduceRight: ft.reduceRight,
  reverse: ft.reverse,
  // Object with rows, columns and opts
  selector: null,
  shift: ft.shift,
  slice: function() {
    return new De(this.context, this);
  },
  sort: ft.sort,
  splice: ft.splice,
  toArray: function() {
    return ft.slice.call(this);
  },
  to$: function() {
    return O(this);
  },
  toJQuery: function() {
    return O(this);
  },
  unique: function() {
    return new De(this.context, $r(this.toArray()));
  },
  unshift: ft.unshift
});
function yh(e, t, n) {
  return function() {
    var r = t.apply(e || this, arguments);
    return De.extend(r, r, n.methodExt), r;
  };
}
function wh(e, t) {
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n].name === t)
      return e[n];
  return null;
}
window.__apiStruct = Ya;
De.extend = function(e, t, n) {
  if (!(!n.length || !t || !(t instanceof De) && !t.__dt_wrapper)) {
    var r, i, a;
    for (r = 0, i = n.length; r < i; r++)
      a = n[r], a.name !== "__proto__" && (t[a.name] = a.type === "function" ? yh(e, a.val, a) : a.type === "object" ? {} : a.val, t[a.name].__dt_wrapper = !0, De.extend(e, t[a.name], a.propExt));
  }
};
De.register = ce = function(e, t) {
  if (Array.isArray(e)) {
    for (var n = 0, r = e.length; n < r; n++)
      De.register(e[n], t);
    return;
  }
  var i, a, o = e.split("."), c = Ya, h, m;
  for (i = 0, a = o.length; i < a; i++) {
    m = o[i].indexOf("()") !== -1, h = m ? o[i].replace("()", "") : o[i];
    var g = wh(c, h);
    g || (g = {
      name: h,
      val: {},
      methodExt: [],
      propExt: [],
      type: "object"
    }, c.push(g)), i === a - 1 ? (g.val = t, g.type = typeof t == "function" ? "function" : O.isPlainObject(t) ? "object" : "other") : c = m ? g.methodExt : g.propExt;
  }
};
De.registerPlural = Ee = function(e, t, n) {
  De.register(e, n), De.register(t, function() {
    var r = n.apply(this, arguments);
    return r === this ? this : r instanceof De ? r.length ? Array.isArray(r[0]) ? new De(r.context, r[0]) : (
      // Array results are 'enhanced'
      r[0]
    ) : void 0 : r;
  });
};
var dc = function(e, t) {
  if (Array.isArray(e)) {
    var n = [];
    return e.forEach(function(i) {
      var a = dc(i, t);
      hs(n, a);
    }), n.filter(function(i) {
      return i;
    });
  }
  if (typeof e == "number")
    return [t[e]];
  var r = t.map(function(i) {
    return i.nTable;
  });
  return O(r).filter(e).map(function() {
    var i = r.indexOf(this);
    return t[i];
  }).toArray();
};
ce("tables()", function(e) {
  return e != null ? new De(dc(e, this.context)) : this;
});
ce("table()", function(e) {
  var t = this.tables(e), n = t.context;
  return n.length ? new De(n[0]) : t;
});
[
  ["nodes", "node", "nTable"],
  ["body", "body", "nTBody"],
  ["header", "header", "nTHead"],
  ["footer", "footer", "nTFoot"]
].forEach(function(e) {
  Ee(
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
  ce("table()." + e[0] + ".structure()", function(t) {
    var n = this.columns(t).indexes().flatten().toArray(), r = this.context[0], i = Zu(r, r[e[1]], n), a = n.slice().sort(function(o, c) {
      return o - c;
    });
    return i.map(function(o) {
      return n.map(function(c) {
        return o[a.indexOf(c)];
      });
    });
  });
});
Ee("tables().containers()", "table().container()", function() {
  return this.iterator("table", function(e) {
    return e.nTableWrapper;
  }, 1);
});
ce("tables().every()", function(e) {
  var t = this;
  return this.iterator("table", function(n, r) {
    e.call(t.table(r), r);
  });
});
ce("caption()", function(e, t) {
  var n = this.context;
  if (e === void 0) {
    var r = n[0].captionNode;
    return r && n.length ? r.innerHTML : null;
  }
  return this.iterator("table", function(i) {
    var a = O(i.nTable), o = O(i.captionNode), c = O(i.nTableWrapper);
    if (o.length || (o = O("<caption/>").html(e), i.captionNode = o[0], t || (a.prepend(o), t = o.css("caption-side"))), o.html(e), t && (o.css("caption-side", t), o[0]._captionSide = t), c.find("div.dataTables_scroll").length) {
      var h = t === "top" ? "Head" : "Foot";
      c.find("div.dataTables_scroll" + h + " table").prepend(o);
    } else
      a.prepend(o);
  }, 1);
});
ce("caption.node()", function() {
  var e = this.context;
  return e.length ? e[0].captionNode : null;
});
ce("draw()", function(e) {
  return this.iterator("table", function(t) {
    e === "page" ? jr(t) : (typeof e == "string" && (e = e !== "full-hold"), Br(t, e === !1));
  });
});
ce("page()", function(e) {
  return e === void 0 ? this.page.info().page : this.iterator("table", function(t) {
    Xa(t, e);
  });
});
ce("page.info()", function() {
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
      serverSide: kt(e) === "ssp"
    };
  }
});
ce("page.len()", function(e) {
  return e === void 0 ? this.context.length !== 0 ? this.context[0]._iDisplayLength : void 0 : this.iterator("table", function(t) {
    tc(t, e);
  });
});
var fc = function(e, t, n) {
  if (n) {
    var r = new De(e);
    r.one("draw", function() {
      n(r.ajax.json());
    });
  }
  if (kt(e) == "ssp")
    Br(e, t);
  else {
    Pt(e, !0);
    var i = e.jqXHR;
    i && i.readyState !== 4 && i.abort(), Ga(e, {}, function(a) {
      Wa(e);
      for (var o = oi(e, a), c = 0, h = o.length; c < h; c++)
        sr(e, o[c]);
      Br(e, t), Ji(e), Pt(e, !1);
    });
  }
};
ce("ajax.json()", function() {
  var e = this.context;
  if (e.length > 0)
    return e[0].json;
});
ce("ajax.params()", function() {
  var e = this.context;
  if (e.length > 0)
    return e[0].oAjaxData;
});
ce("ajax.reload()", function(e, t) {
  return this.iterator("table", function(n) {
    fc(n, t === !1, e);
  });
});
ce("ajax.url()", function(e) {
  var t = this.context;
  return e === void 0 ? t.length === 0 ? void 0 : (t = t[0], O.isPlainObject(t.ajax) ? t.ajax.url : t.ajax) : this.iterator("table", function(n) {
    O.isPlainObject(n.ajax) ? n.ajax.url = e : n.ajax = e;
  });
});
ce("ajax.url().load()", function(e, t) {
  return this.iterator("table", function(n) {
    fc(n, t === !1, e);
  });
});
var Ka = function(e, t, n, r, i) {
  var a = [], o, c, h, m = typeof t;
  for ((!t || m === "string" || m === "function" || t.length === void 0) && (t = [t]), c = 0, h = t.length; c < h; c++)
    o = n(typeof t[c] == "string" ? t[c].trim() : t[c]), o = o.filter(function(_) {
      return _ != null;
    }), o && o.length && (a = a.concat(o));
  var g = Ze.selector[e];
  if (g.length)
    for (c = 0, h = g.length; c < h; c++)
      a = g[c](r, i, a);
  return $r(a);
}, Ja = function(e) {
  return e || (e = {}), e.filter && e.search === void 0 && (e.search = e.filter), O.extend({
    columnOrder: "implied",
    search: "none",
    order: "current",
    page: "all"
  }, e);
}, Qa = function(e) {
  var t = new De(e.context[0]);
  return e.length && t.push(e[0]), t.selector = e.selector, t.length && t[0].length > 1 && t[0].splice(1), t;
}, ps = function(e, t) {
  var n, r, i, a = [], o = e.aiDisplay, c = e.aiDisplayMaster, h = t.search, m = t.order, g = t.page;
  if (kt(e) == "ssp")
    return h === "removed" ? [] : Cn(0, c.length);
  if (g == "current")
    for (n = e._iDisplayStart, r = e.fnDisplayEnd(); n < r; n++)
      a.push(o[n]);
  else if (m == "current" || m == "applied") {
    if (h == "none")
      a = c.slice();
    else if (h == "applied")
      a = o.slice();
    else if (h == "removed") {
      var _ = {};
      for (n = 0, r = o.length; n < r; n++)
        _[o[n]] = null;
      c.forEach(function(C) {
        Object.prototype.hasOwnProperty.call(_, C) || a.push(C);
      });
    }
  } else if (m == "index" || m == "original")
    for (n = 0, r = e.aoData.length; n < r; n++)
      e.aoData[n] && (h == "none" ? a.push(n) : (i = o.indexOf(n), (i === -1 && h == "removed" || i >= 0 && h == "applied") && a.push(n)));
  else if (typeof m == "number") {
    var w = za(e, m, "asc");
    if (h === "none")
      a = w;
    else
      for (n = 0; n < w.length; n++)
        i = o.indexOf(w[n]), (i === -1 && h == "removed" || i >= 0 && h == "applied") && a.push(w[n]);
  }
  return a;
}, xh = function(e, t, n) {
  var r, i = function(o) {
    var c = Wu(o), h = e.aoData;
    if (c !== null && !n)
      return [c];
    if (r || (r = ps(e, n)), c !== null && r.indexOf(c) !== -1)
      return [c];
    if (o == null || o === "")
      return r;
    if (typeof o == "function")
      return r.map(function(k) {
        var S = h[k];
        return o(k, S._aData, S.nTr) ? k : null;
      });
    if (o.nodeName) {
      var m = o._DT_RowIndex, g = o._DT_CellIndex;
      if (m !== void 0)
        return h[m] && h[m].nTr === o ? [m] : [];
      if (g)
        return h[g.row] && h[g.row].nTr === o.parentNode ? [g.row] : [];
      var _ = O(o).closest("*[data-dt-row]");
      return _.length ? [_.data("dt-row")] : [];
    }
    if (typeof o == "string" && o.charAt(0) === "#") {
      var w = e.aIds[o.replace(/^#/, "")];
      if (w !== void 0)
        return [w.idx];
    }
    var C = Gu(
      fi(e.aoData, r, "nTr")
    );
    return O(C).filter(o).map(function() {
      return this._DT_RowIndex;
    }).toArray();
  }, a = Ka("row", t, i, e, n);
  return (n.order === "current" || n.order === "applied") && oc(e, a), a;
};
ce("rows()", function(e, t) {
  e === void 0 ? e = "" : O.isPlainObject(e) && (t = e, e = ""), t = Ja(t);
  var n = this.iterator("table", function(r) {
    return xh(r, e, t);
  }, 1);
  return n.selector.rows = e, n.selector.opts = t, n;
});
ce("rows().nodes()", function() {
  return this.iterator("row", function(e, t) {
    return e.aoData[t].nTr || void 0;
  }, 1);
});
ce("rows().data()", function() {
  return this.iterator(!0, "rows", function(e, t) {
    return fi(e.aoData, t, "_aData");
  }, 1);
});
Ee("rows().cache()", "row().cache()", function(e) {
  return this.iterator("row", function(t, n) {
    var r = t.aoData[n];
    return e === "search" ? r._aFilterData : r._aSortData;
  }, 1);
});
Ee("rows().invalidate()", "row().invalidate()", function(e) {
  return this.iterator("row", function(t, n) {
    cs(t, n, e);
  });
});
Ee("rows().indexes()", "row().index()", function() {
  return this.iterator("row", function(e, t) {
    return t;
  }, 1);
});
Ee("rows().ids()", "row().id()", function(e) {
  for (var t = [], n = this.context, r = 0, i = n.length; r < i; r++)
    for (var a = 0, o = this[r].length; a < o; a++) {
      var c = n[r].rowIdFn(n[r].aoData[this[r][a]]._aData);
      t.push((e === !0 ? "#" : "") + c);
    }
  return new De(n, t);
});
Ee("rows().remove()", "row().remove()", function() {
  return this.iterator("row", function(e, t) {
    var n = e.aoData, r = n[t], i = e.aiDisplayMaster.indexOf(t);
    i !== -1 && e.aiDisplayMaster.splice(i, 1), e._iRecordsDisplay > 0 && e._iRecordsDisplay--, uc(e);
    var a = e.rowIdFn(r._aData);
    a !== void 0 && delete e.aIds[a], n[t] = null;
  }), this;
});
ce("rows.add()", function(e) {
  var t = this.iterator("table", function(r) {
    var i, a, o, c = [];
    for (a = 0, o = e.length; a < o; a++)
      i = e[a], i.nodeName && i.nodeName.toUpperCase() === "TR" ? c.push(ja(r, i)[0]) : c.push(sr(r, i));
    return c;
  }, 1), n = this.rows(-1);
  return n.pop(), hs(n, t), n;
});
ce("row()", function(e, t) {
  return Qa(this.rows(e, t));
});
ce("row().data()", function(e) {
  var t = this.context;
  if (e === void 0)
    return t.length && this.length && this[0].length ? t[0].aoData[this[0]]._aData : void 0;
  var n = t[0].aoData[this[0]];
  return n._aData = e, Array.isArray(e) && n.nTr && n.nTr.id && Qn(t[0].rowId)(e, n.nTr.id), cs(t[0], this[0], "data"), this;
});
ce("row().node()", function() {
  var e = this.context;
  if (e.length && this.length && this[0].length) {
    var t = e[0].aoData[this[0]];
    if (t && t.nTr)
      return t.nTr;
  }
  return null;
});
ce("row.add()", function(e) {
  e instanceof O && e.length && (e = e[0]);
  var t = this.iterator("table", function(n) {
    return e.nodeName && e.nodeName.toUpperCase() === "TR" ? ja(n, e)[0] : sr(n, e);
  });
  return this.row(t[0]);
});
O(document).on("plugin-init.dt", function(e, t) {
  var n = new De(t);
  n.on("stateSaveParams.DT", function(r, i, a) {
    for (var o = i.rowIdFn, c = i.aiDisplayMaster, h = [], m = 0; m < c.length; m++) {
      var g = c[m], _ = i.aoData[g];
      _._detailsShow && h.push("#" + o(_._aData));
    }
    a.childRows = h;
  }), n.on("stateLoaded.DT", function(r, i, a) {
    Pl(n, a);
  }), Pl(n, n.state.loaded());
});
var Pl = function(e, t) {
  t && t.childRows && e.rows(t.childRows.map(function(n) {
    return n.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g, "$1\\:");
  })).every(function() {
    Ne(e.settings()[0], null, "requestChild", [this]);
  });
}, _h = function(e, t, n, r) {
  var i = [], a = function(o, c) {
    if (Array.isArray(o) || o instanceof O) {
      for (var h = 0, m = o.length; h < m; h++)
        a(o[h], c);
      return;
    }
    if (o.nodeName && o.nodeName.toLowerCase() === "tr")
      o.setAttribute("data-dt-row", t.idx), i.push(o);
    else {
      var g = O("<tr><td></td></tr>").attr("data-dt-row", t.idx).addClass(c);
      O("td", g).addClass(c).html(o)[0].colSpan = ls(e), i.push(g[0]);
    }
  };
  a(n, r), t._details && t._details.detach(), t._details = O(i), t._detailsShow && t._details.insertAfter(t.nTr);
}, hc = I.util.throttle(
  function(e) {
    fs(e[0]);
  },
  500
), Za = function(e, t) {
  var n = e.context;
  if (n.length) {
    var r = n[0].aoData[t !== void 0 ? t : e[0]];
    r && r._details && (r._details.detach(), r._detailsShow = void 0, r._details = void 0, O(r.nTr).removeClass("dt-hasChild"), hc(n));
  }
}, pc = function(e, t) {
  var n = e.context;
  if (n.length && e.length) {
    var r = n[0].aoData[e[0]];
    r._details && (r._detailsShow = t, t ? (r._details.insertAfter(r.nTr), O(r.nTr).addClass("dt-hasChild")) : (r._details.detach(), O(r.nTr).removeClass("dt-hasChild")), Ne(n[0], null, "childRow", [t, e.row(e[0])]), Ch(n[0]), hc(n));
  }
}, Ch = function(e) {
  var t = new De(e), n = ".dt.DT_details", r = "draw" + n, i = "column-sizing" + n, a = "destroy" + n, o = e.aoData;
  t.off(r + " " + i + " " + a), lt(o, "_details").length > 0 && (t.on(r, function(c, h) {
    e === h && t.rows({ page: "current" }).eq(0).each(function(m) {
      var g = o[m];
      g._detailsShow && g._details.insertAfter(g.nTr);
    });
  }), t.on(i, function(c, h) {
    if (e === h)
      for (var m, g = ls(h), _ = 0, w = o.length; _ < w; _++)
        m = o[_], m && m._details && m._details.each(function() {
          var C = O(this).children("td");
          C.length == 1 && C.attr("colspan", g);
        });
  }), t.on(a, function(c, h) {
    if (e === h)
      for (var m = 0, g = o.length; m < g; m++)
        o[m] && o[m]._details && Za(t, m);
  }));
}, Th = "", pi = Th + "row().child", vs = pi + "()";
ce(vs, function(e, t) {
  var n = this.context;
  return e === void 0 ? n.length && this.length && n[0].aoData[this[0]] ? n[0].aoData[this[0]]._details : void 0 : (e === !0 ? this.child.show() : e === !1 ? Za(this) : n.length && this.length && _h(n[0], n[0].aoData[this[0]], e, t), this);
});
ce([
  pi + ".show()",
  vs + ".show()"
  // only when `child()` was called with parameters (without
], function() {
  return pc(this, !0), this;
});
ce([
  pi + ".hide()",
  vs + ".hide()"
  // only when `child()` was called with parameters (without
], function() {
  return pc(this, !1), this;
});
ce([
  pi + ".remove()",
  vs + ".remove()"
  // only when `child()` was called with parameters (without
], function() {
  return Za(this), this;
});
ce(pi + ".isShown()", function() {
  var e = this.context;
  return e.length && this.length && e[0].aoData[this[0]] && e[0].aoData[this[0]]._detailsShow || !1;
});
var Sh = /^([^:]+)?:(name|title|visIdx|visible)$/, eo = function(e, t, n, r, i, a) {
  for (var o = [], c = 0, h = i.length; c < h; c++)
    o.push(Ht(e, i[c], t, a));
  return o;
}, vc = function(e, t, n) {
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
      r[o][t].unique && O(".dt-column-title", r[o][t].cell).text() && (a = o);
    a === null && (a = 0);
  }
  return r[a][t].cell;
}, Dh = function(e) {
  for (var t = [], n = 0; n < e.length; n++)
    for (var r = 0; r < e[n].length; r++) {
      var i = e[n][r].cell;
      t.includes(i) || t.push(i);
    }
  return t;
}, Ah = function(e, t, n) {
  var r = e.aoColumns, i, a, o = Dh(e.aoHeader), c = function(m) {
    var g = Wu(m);
    if (m === "")
      return Cn(r.length);
    if (g !== null)
      return [
        g >= 0 ? g : (
          // Count from left
          r.length + g
        )
        // Count from right (+ because its a negative value)
      ];
    if (typeof m == "function") {
      var _ = ps(e, n);
      return r.map(function(l, d) {
        return m(
          d,
          eo(e, d, 0, 0, _),
          vc(e, d)
        ) ? d : null;
      });
    }
    var w = typeof m == "string" ? m.match(Sh) : "";
    if (w)
      switch (w[2]) {
        case "visIdx":
        case "visible":
          if (w[1] && w[1].match(/^\d+$/)) {
            var C = parseInt(w[1], 10);
            if (C < 0) {
              var k = r.map(function(l, d) {
                return l.bVisible ? d : null;
              });
              return [k[k.length + C]];
            }
            return [Va(e, C)];
          }
          return r.map(function(l, d) {
            return !l.bVisible || l.responsiveVisible === !1 ? null : w[1] ? O(o[d]).filter(w[1]).length > 0 ? d : null : d;
          });
        case "name":
          return i || (i = lt(r, "sName")), i.map(function(l, d) {
            return l === w[1] ? d : null;
          });
        case "title":
          return a || (a = lt(r, "sTitle")), a.map(function(l, d) {
            return l === w[1] ? d : null;
          });
        default:
          return [];
      }
    if (m.nodeName && m._DT_CellIndex)
      return [m._DT_CellIndex.column];
    var S = O(o).filter(m).map(function() {
      return $a(this);
    }).toArray().sort(function(l, d) {
      return l - d;
    });
    if (S.length || !m.nodeName)
      return S;
    var v = O(m).closest("*[data-dt-column]");
    return v.length ? [v.data("dt-column")] : [];
  }, h = Ka("column", t, c, e, n);
  return n.columnOrder && n.columnOrder === "index" ? h.sort(function(m, g) {
    return m - g;
  }) : h;
}, Ph = function(e, t, n) {
  var r = e.aoColumns, i = r[t], a = e.aoData, o, c, h, m;
  if (n === void 0)
    return i.bVisible;
  if (i.bVisible === n)
    return !1;
  if (n) {
    var g = lt(r, "bVisible").indexOf(!0, t + 1);
    for (c = 0, h = a.length; c < h; c++)
      a[c] && (m = a[c].nTr, o = a[c].anCells, m && m.insertBefore(o[t], o[g] || null));
  } else
    O(lt(e.aoData, "anCells", t)).detach();
  return i.bVisible = n, sc(e), !0;
};
ce("columns()", function(e, t) {
  e === void 0 ? e = "" : O.isPlainObject(e) && (t = e, e = ""), t = Ja(t);
  var n = this.iterator("table", function(r) {
    return Ah(r, e, t);
  }, 1);
  return n.selector.cols = e, n.selector.opts = t, n;
});
Ee("columns().header()", "column().header()", function(e) {
  return this.iterator("column", function(t, n) {
    return vc(t, n, e);
  }, 1);
});
Ee("columns().footer()", "column().footer()", function(e) {
  return this.iterator("column", function(t, n) {
    var r = t.aoFooter;
    return r.length ? t.aoFooter[e !== void 0 ? e : 0][n].cell : null;
  }, 1);
});
Ee("columns().data()", "column().data()", function() {
  return this.iterator("column-rows", eo, 1);
});
Ee("columns().render()", "column().render()", function(e) {
  return this.iterator("column-rows", function(t, n, r, i, a) {
    return eo(t, n, r, i, a, e);
  }, 1);
});
Ee("columns().dataSrc()", "column().dataSrc()", function() {
  return this.iterator("column", function(e, t) {
    return e.aoColumns[t].mData;
  }, 1);
});
Ee("columns().cache()", "column().cache()", function(e) {
  return this.iterator("column-rows", function(t, n, r, i, a) {
    return fi(
      t.aoData,
      a,
      e === "search" ? "_aFilterData" : "_aSortData",
      n
    );
  }, 1);
});
Ee("columns().init()", "column().init()", function() {
  return this.iterator("column", function(e, t) {
    return e.aoColumns[t];
  }, 1);
});
Ee("columns().names()", "column().name()", function() {
  return this.iterator("column", function(e, t) {
    return e.aoColumns[t].sName;
  }, 1);
});
Ee("columns().nodes()", "column().nodes()", function() {
  return this.iterator("column-rows", function(e, t, n, r, i) {
    return fi(e.aoData, i, "anCells", t);
  }, 1);
});
Ee("columns().titles()", "column().title()", function(e, t) {
  return this.iterator("column", function(n, r) {
    typeof e == "number" && (t = e, e = void 0);
    var i = O(".dt-column-title", this.column(r).header(t));
    return e !== void 0 ? (i.html(e), this) : i.html();
  }, 1);
});
Ee("columns().types()", "column().type()", function() {
  return this.iterator("column", function(e, t) {
    var n = e.aoColumns[t], r = n.sType;
    return r || (us(e), r = n.sType), r;
  }, 1);
});
Ee("columns().visible()", "column().visible()", function(e, t) {
  var n = this, r = [], i = this.iterator("column", function(a, o) {
    if (e === void 0)
      return a.aoColumns[o].bVisible;
    Ph(a, o, e) && r.push(o);
  });
  return e !== void 0 && this.iterator("table", function(a) {
    Ki(a, a.aoHeader), Ki(a, a.aoFooter), a.aiDisplay.length || O(a.nTBody).find("td[colspan]").attr("colspan", ls(a)), fs(a), n.iterator("column", function(o, c) {
      r.includes(c) && Ne(o, null, "column-visibility", [o, c, e, t]);
    }), r.length && (t === void 0 || t) && n.columns.adjust();
  }), i;
});
Ee("columns().widths()", "column().width()", function() {
  var e = this.columns(":visible").count(), t = O("<tr>").html("<td>" + Array(e).join("</td><td>") + "</td>");
  O(this.table().body()).append(t);
  var n = t.children().map(function() {
    return O(this).outerWidth();
  });
  return t.remove(), this.iterator("column", function(r, i) {
    var a = hi(r, i);
    return a !== null ? n[a] : 0;
  }, 1);
});
Ee("columns().indexes()", "column().index()", function(e) {
  return this.iterator("column", function(t, n) {
    return e === "visible" ? hi(t, n) : n;
  }, 1);
});
ce("columns.adjust()", function() {
  return this.iterator("table", function(e) {
    e.containerWidth = -1, os(e);
  }, 1);
});
ce("column.index()", function(e, t) {
  if (this.context.length !== 0) {
    var n = this.context[0];
    if (e === "fromVisible" || e === "toData")
      return Va(n, t);
    if (e === "fromData" || e === "toVisible")
      return hi(n, t);
  }
});
ce("column()", function(e, t) {
  return Qa(this.columns(e, t));
});
var kh = function(e, t, n) {
  var r = e.aoData, i = ps(e, n), a = Gu(fi(r, i, "anCells")), o = O(Xu([], a)), c, h = e.aoColumns.length, m, g, _, w, C, k, S = function(v) {
    var l = typeof v == "function";
    if (v == null || l) {
      for (m = [], g = 0, _ = i.length; g < _; g++)
        for (c = i[g], w = 0; w < h; w++)
          C = {
            row: c,
            column: w
          }, l ? (k = r[c], v(C, Ht(e, c, w), k.anCells ? k.anCells[w] : null) && m.push(C)) : m.push(C);
      return m;
    }
    if (O.isPlainObject(v))
      return v.column !== void 0 && v.row !== void 0 && i.indexOf(v.row) !== -1 ? [v] : [];
    var d = o.filter(v).map(function(y, P) {
      return {
        // use a new object, in case someone changes the values
        row: P._DT_CellIndex.row,
        column: P._DT_CellIndex.column
      };
    }).toArray();
    return d.length || !v.nodeName ? d : (k = O(v).closest("*[data-dt-row]"), k.length ? [{
      row: k.data("dt-row"),
      column: k.data("dt-column")
    }] : []);
  };
  return Ka("cell", t, S, e, n);
};
ce("cells()", function(e, t, n) {
  if (O.isPlainObject(e) && (e.row === void 0 ? (n = e, e = null) : (n = t, t = null)), O.isPlainObject(t) && (n = t, t = null), t == null)
    return this.iterator("table", function(w) {
      return kh(w, e, Ja(n));
    });
  var r = n ? {
    page: n.page,
    order: n.order,
    search: n.search
  } : {}, i = this.columns(t, r), a = this.rows(e, r), o, c, h, m, g = this.iterator("table", function(w, C) {
    var k = [];
    for (o = 0, c = a[C].length; o < c; o++)
      for (h = 0, m = i[C].length; h < m; h++)
        k.push({
          row: a[C][o],
          column: i[C][h]
        });
    return k;
  }, 1), _ = n && n.selected ? this.cells(g, n) : g;
  return O.extend(_.selector, {
    cols: t,
    rows: e,
    opts: n
  }), _;
});
Ee("cells().nodes()", "cell().node()", function() {
  return this.iterator("cell", function(e, t, n) {
    var r = e.aoData[t];
    return r && r.anCells ? r.anCells[n] : void 0;
  }, 1);
});
ce("cells().data()", function() {
  return this.iterator("cell", function(e, t, n) {
    return Ht(e, t, n);
  }, 1);
});
Ee("cells().cache()", "cell().cache()", function(e) {
  return e = e === "search" ? "_aFilterData" : "_aSortData", this.iterator("cell", function(t, n, r) {
    return t.aoData[n][e][r];
  }, 1);
});
Ee("cells().render()", "cell().render()", function(e) {
  return this.iterator("cell", function(t, n, r) {
    return Ht(t, n, r, e);
  }, 1);
});
Ee("cells().indexes()", "cell().index()", function() {
  return this.iterator("cell", function(e, t, n) {
    return {
      row: t,
      column: n,
      columnVisible: hi(e, n)
    };
  }, 1);
});
Ee("cells().invalidate()", "cell().invalidate()", function(e) {
  return this.iterator("cell", function(t, n, r) {
    cs(t, n, e, r);
  });
});
ce("cell()", function(e, t, n) {
  return Qa(this.cells(e, t, n));
});
ce("cell().data()", function(e) {
  var t = this.context, n = this[0];
  return e === void 0 ? t.length && n.length ? Ht(t[0], n[0].row, n[0].column) : void 0 : (Qf(t[0], n[0].row, n[0].column, e), cs(t[0], n[0].row, "data", n[0].column), this);
});
ce("order()", function(e, t) {
  var n = this.context, r = Array.prototype.slice.call(arguments);
  return e === void 0 ? n.length !== 0 ? n[0].aaSorting : void 0 : (typeof e == "number" ? e = [[e, t]] : r.length > 1 && (e = r), this.iterator("table", function(i) {
    var a = [];
    Zn(i, a, e), i.aaSorting = a;
  }));
});
ce("order.listener()", function(e, t, n) {
  return this.iterator("table", function(r) {
    ac(r, e, {}, t, n);
  });
});
ce("order.fixed()", function(e) {
  if (!e) {
    var t = this.context, n = t.length ? t[0].aaSortingFixed : void 0;
    return Array.isArray(n) ? { pre: n } : n;
  }
  return this.iterator("table", function(r) {
    r.aaSortingFixed = O.extend(!0, {}, e);
  });
});
ce([
  "columns().order()",
  "column().order()"
], function(e) {
  var t = this;
  return e ? this.iterator("table", function(n, r) {
    n.aaSorting = t[r].map(function(i) {
      return [i, e];
    });
  }) : this.iterator("column", function(n, r) {
    for (var i = ds(n), a = 0, o = i.length; a < o; a++)
      if (i[a].col === r)
        return i[a].dir;
    return null;
  }, 1);
});
Ee("columns().orderable()", "column().orderable()", function(e) {
  return this.iterator("column", function(t, n) {
    var r = t.aoColumns[n];
    return e ? r.asSorting : r.bSortable;
  }, 1);
});
ce("processing()", function(e) {
  return this.iterator("table", function(t) {
    Pt(t, e);
  });
});
ce("search()", function(e, t, n, r) {
  var i = this.context;
  return e === void 0 ? i.length !== 0 ? i[0].oPreviousSearch.search : void 0 : this.iterator("table", function(a) {
    a.oFeatures.bFilter && (typeof t == "object" ? li(a, O.extend(a.oPreviousSearch, t, {
      search: e
    })) : li(a, O.extend(a.oPreviousSearch, {
      search: e,
      regex: t === null ? !1 : t,
      smart: n === null ? !0 : n,
      caseInsensitive: r === null ? !0 : r
    })));
  });
});
ce("search.fixed()", function(e, t) {
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
Ee(
  "columns().search()",
  "column().search()",
  function(e, t, n, r) {
    return this.iterator("column", function(i, a) {
      var o = i.aoPreSearchCols;
      if (e === void 0)
        return o[a].search;
      i.oFeatures.bFilter && (typeof t == "object" ? O.extend(o[a], t, {
        search: e
      }) : O.extend(o[a], {
        search: e,
        regex: t === null ? !1 : t,
        smart: n === null ? !0 : n,
        caseInsensitive: r === null ? !0 : r
      }), li(i, i.oPreviousSearch));
    });
  }
);
ce(
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
ce("state()", function(e, t) {
  if (!e)
    return this.context.length ? this.context[0].oSavedState : null;
  var n = O.extend(!0, {}, e);
  return this.iterator("table", function(r) {
    t !== !1 && (n.time = +/* @__PURE__ */ new Date() + 100), Ca(r, n, function() {
    });
  });
});
ce("state.clear()", function() {
  return this.iterator("table", function(e) {
    e.fnStateSaveCallback.call(e.oInstance, e, {});
  });
});
ce("state.loaded()", function() {
  return this.context.length ? this.context[0].oLoadedState : null;
});
ce("state.save()", function() {
  return this.iterator("table", function(e) {
    fs(e);
  });
});
var kl, Rl;
I.use = function(e, t) {
  var n = typeof e == "string" ? t : e, r = typeof t == "string" ? t : e;
  if (n === void 0 && typeof r == "string")
    switch (r) {
      case "lib":
      case "jq":
        return O;
      case "win":
        return window;
      case "datetime":
        return I.DateTime;
      case "luxon":
        return Rn;
      case "moment":
        return ar;
      case "bootstrap":
        return kl || window.bootstrap;
      case "foundation":
        return Rl || window.Foundation;
      default:
        return null;
    }
  r === "lib" || r === "jq" || n && n.fn && n.fn.jquery ? O = n : r === "win" || n && n.document ? (window = n, document = n.document) : r === "datetime" || n && n.type === "DateTime" ? I.DateTime = n : r === "luxon" || n && n.FixedOffsetZone ? Rn = n : r === "moment" || n && n.isMoment ? ar = n : r === "bootstrap" || n && n.Modal && n.Modal.NAME === "modal" ? kl = n : (r === "foundation" || n && n.Reveal) && (Rl = n);
};
I.factory = function(e, t) {
  var n = !1;
  return e && e.document && (window = e, document = e.document), t && t.fn && t.fn.jquery && (O = t, n = !0), n;
};
I.versionCheck = function(e, t) {
  for (var n = t ? t.split(".") : I.version.split("."), r = e.split("."), i, a, o = 0, c = r.length; o < c; o++)
    if (i = parseInt(n[o], 10) || 0, a = parseInt(r[o], 10) || 0, i !== a)
      return i > a;
  return !0;
};
I.isDataTable = function(e) {
  var t = O(e).get(0), n = !1;
  return e instanceof I.Api ? !0 : (O.each(I.settings, function(r, i) {
    var a = i.nScrollHead ? O("table", i.nScrollHead)[0] : null, o = i.nScrollFoot ? O("table", i.nScrollFoot)[0] : null;
    (i.nTable === t || a === t || o === t) && (n = !0);
  }), n);
};
I.tables = function(e) {
  var t = !1;
  O.isPlainObject(e) && (t = e.api, e = e.visible);
  var n = I.settings.filter(function(r) {
    return !!(!e || e && O(r.nTable).is(":visible"));
  }).map(function(r) {
    return r.nTable;
  });
  return t ? new De(n) : n;
};
I.camelToHungarian = Dn;
ce("$()", function(e, t) {
  var n = this.rows(t).nodes(), r = O(n);
  return O([].concat(
    r.filter(e).toArray(),
    r.find(e).toArray()
  ));
});
O.each(["on", "one", "off"], function(e, t) {
  ce(t + "()", function() {
    var n = Array.prototype.slice.call(arguments);
    n[0] = n[0].split(/\s/).map(function(i) {
      return i.match(/\.dt\b/) ? i : i + ".dt";
    }).join(" ");
    var r = O(this.tables().nodes());
    return r[t].apply(r, n), this;
  });
});
ce("clear()", function() {
  return this.iterator("table", function(e) {
    Wa(e);
  });
});
ce("error()", function(e) {
  return this.iterator("table", function(t) {
    Et(t, 0, e);
  });
});
ce("settings()", function() {
  return new De(this.context, this.context);
});
ce("init()", function() {
  var e = this.context;
  return e.length ? e[0].oInit : null;
});
ce("data()", function() {
  return this.iterator("table", function(e) {
    return lt(e.aoData, "_aData");
  }).flatten();
});
ce("trigger()", function(e, t, n) {
  return this.iterator("table", function(r) {
    return Ne(r, null, e, t, n);
  }).flatten();
});
ce("ready()", function(e) {
  var t = this.context;
  return e ? this.tables().every(function() {
    var n = this;
    this.context[0]._bInitComplete ? e.call(n) : this.on("init.dt.DT", function() {
      e.call(n);
    });
  }) : t.length ? t[0]._bInitComplete || !1 : null;
});
ce("destroy()", function(e) {
  return e = e || !1, this.iterator("table", function(t) {
    var n = t.oClasses, r = t.nTable, i = t.nTBody, a = t.nTHead, o = t.nTFoot, c = O(r), h = O(i), m = O(t.nTableWrapper), g = t.aoData.map(function(v) {
      return v ? v.nTr : null;
    }), _ = n.order;
    t.bDestroying = !0, Ne(t, "aoDestroyCallback", "destroy", [t], !0), e || new De(t).columns().visible(!0), t.resizeObserver && t.resizeObserver.disconnect(), m.off(".DT").find(":not(tbody *)").off(".DT"), O(window).off(".DT-" + t.sInstance), r != a.parentNode && (c.children("thead").detach(), c.append(a)), o && r != o.parentNode && (c.children("tfoot").detach(), c.append(o)), Ll(a, "header"), Ll(o, "footer"), t.colgroup.remove(), t.aaSorting = [], t.aaSortingFixed = [], _a(t), O(c).find("th, td").removeClass(
      O.map(I.ext.type.className, function(v) {
        return v;
      }).join(" ")
    ), O("th, td", a).removeClass(
      _.none + " " + _.canAsc + " " + _.canDesc + " " + _.isAsc + " " + _.isDesc
    ).css("width", "").removeAttr("aria-sort"), h.children().detach(), h.append(g);
    var w = t.nTableWrapper.parentNode, C = t.nTableWrapper.nextSibling, k = e ? "remove" : "detach";
    c[k](), m[k](), !e && w && (w.insertBefore(r, C), c.css("width", t.sDestroyWidth).removeClass(n.table));
    var S = I.settings.indexOf(t);
    S !== -1 && I.settings.splice(S, 1);
  });
});
O.each(["column", "row", "cell"], function(e, t) {
  ce(t + "s().every()", function(n) {
    var r = this.selector.opts, i = this, a, o = 0;
    return this.iterator("every", function(c, h, m) {
      a = i[t](h, r), t === "cell" ? n.call(a, a[0][0].row, a[0][0].column, m, o) : n.call(a, h, m, o), o++;
    });
  });
});
ce("i18n()", function(e, t, n) {
  var r = this.context[0], i = Er(e)(r.oLanguage);
  return i === void 0 && (i = t), O.isPlainObject(i) && (i = n !== void 0 && i[n] !== void 0 ? i[n] : n === !1 ? i : i._), typeof i == "string" ? i.replace("%d", n) : i;
});
function Ll(e, t) {
  O(e).find(".dt-column-order").remove(), O(e).find(".dt-column-title").each(function() {
    var n = O(this).html();
    O(this).parent().parent().append(n), O(this).remove();
  }), O(e).find("div.dt-column-" + t).remove(), O("th, td", e).removeAttr("data-dt-column");
}
I.version = "2.3.7";
I.settings = [];
I.models = {};
I.models.oSearch = {
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
I.models.oRow = {
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
I.models.oColumn = {
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
I.defaults = {
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
  oSearch: O.extend({}, I.models.oSearch),
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
as(I.defaults);
I.defaults.column = {
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
as(I.defaults.column);
I.models.oSettings = {
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
    return kt(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
  },
  /**
   * Get the number of records in the current record set, after filtering
   */
  fnRecordsDisplay: function() {
    return kt(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
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
var Rh = I.ext.pager;
O.extend(Rh, {
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
  _numbers: yc,
  // Number of number buttons - legacy, use `numbers` option for paging feature
  numbers_length: 7
});
O.extend(!0, I.ext.renderer, {
  pagingButton: {
    _: function(e, t, n, r, i) {
      var a = e.oClasses.paging, o = [a.button], c;
      return r && o.push(a.active), i && o.push(a.disabled), t === "ellipsis" ? c = O('<span class="ellipsis"></span>').html(n)[0] : c = O("<button>", {
        class: o.join(" "),
        role: "link",
        type: "button"
      }).html(n), {
        display: c,
        clicker: c
      };
    }
  },
  pagingContainer: {
    _: function(e, t) {
      return t;
    }
  }
});
var Wr = function(e, t) {
  return function(n) {
    return At(n) || typeof n != "string" || (n = n.replace(Wf, " "), e && (n = dn(n)), t && (n = Ui(n, !1))), n;
  };
};
function Nl(e, t, n, r, i) {
  return ar ? e[t](i) : Rn ? e[n](i) : r ? e[r](i) : e;
}
var Il = !1, Rn, ar;
function Lh() {
  window.luxon && !Rn && (Rn = window.luxon), window.moment && !ar && (ar = window.moment);
}
function Zi(e, t, n) {
  var r;
  if (Lh(), ar) {
    if (r = ar.utc(e, t, n, !0), !r.isValid())
      return null;
  } else if (Rn) {
    if (r = t && typeof e == "string" ? Rn.DateTime.fromFormat(e, t) : Rn.DateTime.fromISO(e), !r.isValid)
      return null;
    r = r.setLocale(n);
  } else
    t ? (Il || alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"), Il = !0) : r = new Date(e);
  return r;
}
function na(e) {
  return function(t, n, r, i) {
    arguments.length === 0 ? (r = "en", n = null, t = null) : arguments.length === 1 ? (r = "en", n = t, t = null) : arguments.length === 2 && (r = n, n = t, t = null);
    var a = "datetime" + (n ? "-" + n : "");
    return I.ext.type.order[a + "-pre"] || I.type(a, {
      detect: function(o) {
        return o === a ? a : !1;
      },
      order: {
        pre: function(o) {
          return o.valueOf();
        }
      },
      className: "dt-right"
    }), function(o, c) {
      if (o == null)
        if (i === "--now") {
          var h = /* @__PURE__ */ new Date();
          o = new Date(Date.UTC(
            h.getFullYear(),
            h.getMonth(),
            h.getDate(),
            h.getHours(),
            h.getMinutes(),
            h.getSeconds()
          ));
        } else
          o = "";
      if (c === "type")
        return a;
      if (o === "")
        return c !== "sort" ? "" : Zi("0000-01-01 00:00:00", null, r);
      if (n !== null && t === n && c !== "sort" && c !== "type" && !(o instanceof Date))
        return o;
      var m = Zi(o, t, r);
      if (m === null)
        return o;
      if (c === "sort")
        return m;
      var g = n === null ? Nl(m, "toDate", "toJSDate", "")[e](
        navigator.language,
        { timeZone: "UTC" }
      ) : Nl(m, "format", "toFormat", "toISOString", n);
      return c === "display" ? nr(g) : g;
    };
  };
}
var mc = ",", gc = ".";
if (window.Intl !== void 0)
  try {
    for (var ti = new Intl.NumberFormat().formatToParts(100000.1), Je = 0; Je < ti.length; Je++)
      ti[Je].type === "group" ? mc = ti[Je].value : ti[Je].type === "decimal" && (gc = ti[Je].value);
  } catch {
  }
I.datetime = function(e, t) {
  var n = "datetime-" + e;
  t || (t = "en"), I.ext.type.order[n] || I.type(n, {
    detect: function(r) {
      var i = Zi(r, e, t);
      return r === "" || i ? n : !1;
    },
    order: {
      pre: function(r) {
        return Zi(r, e, t) || 0;
      }
    },
    className: "dt-right"
  });
};
I.render = {
  date: na("toLocaleDateString"),
  datetime: na("toLocaleString"),
  time: na("toLocaleTimeString"),
  number: function(e, t, n, r, i) {
    return e == null && (e = mc), t == null && (t = gc), {
      display: function(a) {
        if (typeof a != "number" && typeof a != "string" || a === "" || a === null)
          return a;
        var o = a < 0 ? "-" : "", c = parseFloat(a), h = Math.abs(c);
        if (h >= 1e11 || h < 1e-4 && h !== 0) {
          var m = c.toExponential(n).split(/e\+?/);
          return m[0] + " x 10<sup>" + m[1] + "</sup>";
        }
        if (isNaN(c))
          return nr(a);
        c = c.toFixed(n), a = Math.abs(c);
        var g = parseInt(a, 10), _ = n ? t + (a - g).toFixed(n).substring(2) : "";
        return g === 0 && parseFloat(_) === 0 && (o = ""), o + (r || "") + g.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          e
        ) + _ + (i || "");
      }
    };
  },
  text: function() {
    return {
      display: nr,
      filter: nr
    };
  }
};
var ht = I.ext.type;
I.type = function(e, t, n) {
  if (!t)
    return {
      className: ht.className[e],
      detect: ht.detect.find(function(o) {
        return o._name === e;
      }),
      order: {
        pre: ht.order[e + "-pre"],
        asc: ht.order[e + "-asc"],
        desc: ht.order[e + "-desc"]
      },
      render: ht.render[e],
      search: ht.search[e]
    };
  var r = function(o, c) {
    ht[o][e] = c;
  }, i = function(o) {
    Object.defineProperty(o, "_name", { value: e });
    var c = ht.detect.findIndex(function(h) {
      return h._name === e;
    });
    c === -1 ? ht.detect.unshift(o) : ht.detect.splice(c, 1, o);
  }, a = function(o) {
    ht.order[e + "-pre"] = o.pre, ht.order[e + "-asc"] = o.asc, ht.order[e + "-desc"] = o.desc;
  };
  n === void 0 && (n = t, t = null), t === "className" ? r("className", n) : t === "detect" ? i(n) : t === "order" ? a(n) : t === "render" ? r("render", n) : t === "search" ? r("search", n) : t || (n.className && r("className", n.className), n.detect !== void 0 && i(n.detect), n.order && a(n.order), n.render !== void 0 && r("render", n.render), n.search !== void 0 && r("search", n.search));
};
I.types = function() {
  return ht.detect.map(function(e) {
    return e._name;
  });
};
var Ta = function(e, t) {
  return e = e != null ? e.toString().toLowerCase() : "", t = t != null ? t.toString().toLowerCase() : "", e.localeCompare(t, navigator.languages[0] || navigator.language, {
    numeric: !0,
    ignorePunctuation: !0
  });
}, Ol = function(e, t) {
  return e = dn(e), t = dn(t), Ta(e, t);
};
I.type("string", {
  detect: function() {
    return "string";
  },
  order: {
    pre: function(e) {
      return At(e) && typeof e != "boolean" ? "" : typeof e == "string" ? e.toLowerCase() : e.toString ? e.toString() : "";
    }
  },
  search: Wr(!1, !0)
});
I.type("string-utf8", {
  detect: {
    allOf: function(e) {
      return !0;
    },
    oneOf: function(e) {
      return !At(e) && navigator.languages && typeof e == "string" && e.match(/[^\x00-\x7F]/);
    }
  },
  order: {
    asc: Ta,
    desc: function(e, t) {
      return Ta(e, t) * -1;
    }
  },
  search: Wr(!1, !0)
});
I.type("html", {
  detect: {
    allOf: function(e) {
      return At(e) || typeof e == "string" && e.indexOf("<") !== -1;
    },
    oneOf: function(e) {
      return !At(e) && typeof e == "string" && e.indexOf("<") !== -1;
    }
  },
  order: {
    pre: function(e) {
      return At(e) ? "" : e.replace ? dn(e).trim().toLowerCase() : e + "";
    }
  },
  search: Wr(!0, !0)
});
I.type("html-utf8", {
  detect: {
    allOf: function(e) {
      return At(e) || typeof e == "string" && e.indexOf("<") !== -1;
    },
    oneOf: function(e) {
      return navigator.languages && !At(e) && typeof e == "string" && e.indexOf("<") !== -1 && typeof e == "string" && e.match(/[^\x00-\x7F]/);
    }
  },
  order: {
    asc: Ol,
    desc: function(e, t) {
      return Ol(e, t) * -1;
    }
  },
  search: Wr(!0, !0)
});
I.type("date", {
  className: "dt-type-date",
  detect: {
    allOf: function(e) {
      if (e && !(e instanceof Date) && !gl.test(e))
        return null;
      var t = Date.parse(e);
      return t !== null && !isNaN(t) || At(e);
    },
    oneOf: function(e) {
      return e instanceof Date || typeof e == "string" && gl.test(e);
    }
  },
  order: {
    pre: function(e) {
      var t = Date.parse(e);
      return isNaN(t) ? -1 / 0 : t;
    }
  }
});
I.type("html-num-fmt", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return zi(e, n, !0, !1);
    },
    oneOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return zi(e, n, !0, !1);
    }
  },
  order: {
    pre: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return ms(e, n, Fa, Ha);
    }
  },
  search: Wr(!0, !0)
});
I.type("html-num", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return zi(e, n, !1, !0);
    },
    oneOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return zi(e, n, !1, !1);
    }
  },
  order: {
    pre: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return ms(e, n, Fa);
    }
  },
  search: Wr(!0, !0)
});
I.type("num-fmt", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return ai(e, n, !0, !0);
    },
    oneOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return ai(e, n, !0, !1);
    }
  },
  order: {
    pre: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return ms(e, n, Ha);
    }
  }
});
I.type("num", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return ai(e, n, !1, !0);
    },
    oneOf: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return ai(e, n, !1, !1);
    }
  },
  order: {
    pre: function(e, t) {
      var n = t.oLanguage.sDecimal;
      return ms(e, n);
    }
  }
});
var ms = function(e, t, n, r) {
  if (e !== 0 && (!e || e === "-"))
    return -1 / 0;
  var i = typeof e;
  return i === "number" || i === "bigint" ? e : (t && (e = qu(e, t)), e.replace && (n && (e = e.replace(n, "")), r && (e = e.replace(r, ""))), e * 1);
};
O.extend(!0, I.ext.renderer, {
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
      r === !0 && a !== 0 || r === !1 && a !== i.length - 1 || typeof r == "number" && a !== r || O(e.nTable).on("order.dt.DT column-visibility.dt.DT", function(o, c, h) {
        if (e === c) {
          var m = c.sortDetails;
          if (m) {
            var g = lt(m, "col");
            if (!(o.type === "column-visibility" && !g.includes(h))) {
              var _, w = n.order, C = c.api.columns(t), k = e.aoColumns[C.flatten()[0]], S = C.orderable().includes(!0), v = "", l = C.indexes(), d = C.orderable(!0).flatten(), y = e.iTabIndex, P = c.orderHandler && S;
              t.removeClass(
                w.isAsc + " " + w.isDesc
              ).toggleClass(w.none, !S).toggleClass(w.canAsc, P && d.includes("asc")).toggleClass(w.canDesc, P && d.includes("desc"));
              var N = !0;
              for (_ = 0; _ < l.length; _++)
                g.includes(l[_]) || (N = !1);
              if (N) {
                var p = C.order();
                t.addClass(
                  p.includes("asc") ? w.isAsc : "" + p.includes("desc") ? w.isDesc : ""
                );
              }
              var M = -1;
              for (_ = 0; _ < g.length; _++)
                if (e.aoColumns[g[_]].bVisible) {
                  M = g[_];
                  break;
                }
              if (l[0] == M) {
                var U = m[0], q = k.asSorting;
                t.attr("aria-sort", U.dir === "asc" ? "ascending" : "descending"), v = q[U.index + 1] ? "Reverse" : "Remove";
              } else
                t.removeAttr("aria-sort");
              if (S) {
                var z = t.find(".dt-column-order");
                z.attr("role", "button").attr(
                  "aria-label",
                  S ? k.ariaTitle + c.api.i18n("oAria.orderable" + v) : k.ariaTitle
                ), y !== -1 && z.attr("tabindex", y);
              }
            }
          }
        }
      });
    }
  },
  layout: {
    _: function(e, t, n) {
      var r = e.oClasses.layout, i = O("<div/>").attr("id", n.id || null).addClass(n.className || r.row).appendTo(t);
      I.ext.renderer.layout._forLayoutRow(n, function(a, o) {
        if (!(a === "id" || a === "className")) {
          var c = "";
          o.table && (i.addClass(r.tableRow), c += r.tableCell + " "), a === "start" ? c += r.start : a === "end" ? c += r.end : c += r.full, O("<div/>").attr({
            id: o.id || null,
            class: o.className ? o.className : r.cell + " " + c
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
I.feature = {};
I.feature.register = function(e, t, n) {
  I.ext.features[e] = t, n && Ze.feature.push({
    cFeature: n,
    fnInit: t
  });
};
function Vi(e, t, n) {
  n && (e[t] = n);
}
I.feature.register("div", function(e, t) {
  var n = O("<div>")[0];
  return t && (Vi(n, "className", t.className), Vi(n, "id", t.id), Vi(n, "innerHTML", t.html), Vi(n, "textContent", t.text)), n;
});
I.feature.register("info", function(e, t) {
  if (!e.oFeatures.bInfo)
    return null;
  var n = e.oLanguage, r = e.sTableId, i = O("<div/>", {
    class: e.oClasses.info.container
  });
  return t = O.extend({
    callback: n.fnInfoCallback,
    empty: n.sInfoEmpty,
    postfix: n.sInfoPostFix,
    search: n.sInfoFiltered,
    text: n.sInfo
  }, t), e.aoDrawCallback.push(function(a) {
    Nh(a, t, i);
  }), e._infoEl || (i.attr({
    "aria-live": "polite",
    id: r + "_info",
    role: "status"
  }), O(e.nTable).attr("aria-describedby", r + "_info"), e._infoEl = i), i;
}, "i");
function Nh(e, t, n) {
  var r = e._iDisplayStart + 1, i = e.fnDisplayEnd(), a = e.fnRecordsTotal(), o = e.fnRecordsDisplay(), c = o ? t.text : t.empty;
  o !== a && (c += " " + t.search), c += t.postfix, c = Ua(e, c), t.callback && (c = t.callback.call(
    e.oInstance,
    e,
    r,
    i,
    a,
    o,
    c
  )), n.html(c), Ne(e, null, "info", [e, n[0], c]);
}
var ra = 0;
I.feature.register("search", function(e, t) {
  if (!e.oFeatures.bFilter)
    return null;
  var n = e.oClasses.search, r = e.sTableId, i = e.oLanguage, a = e.oPreviousSearch, o = '<input type="search" class="' + n.input + '"/>';
  t = O.extend({
    placeholder: i.sSearchPlaceholder,
    processing: !1,
    text: i.sSearch
  }, t), t.text.indexOf("_INPUT_") === -1 && (t.text += "_INPUT_"), t.text = Ua(e, t.text);
  var c = t.text.match(/_INPUT_$/), h = t.text.match(/^_INPUT_/), m = t.text.replace(/_INPUT_/, ""), g = "<label>" + t.text + "</label>";
  h ? g = "_INPUT_<label>" + m + "</label>" : c && (g = "<label>" + m + "</label>_INPUT_");
  var _ = O("<div>").addClass(n.container).append(g.replace(/_INPUT_/, o));
  _.find("label").attr("for", "dt-search-" + ra), _.find("input").attr("id", "dt-search-" + ra), ra++;
  var w = function(S) {
    var v = this.value;
    a.return && S.key !== "Enter" || v != a.search && nc(e, t.processing, function() {
      a.search = v, li(e, a), e._iDisplayStart = 0, jr(e);
    });
  }, C = e.searchDelay !== null ? e.searchDelay : 0, k = O("input", _).val(a.search).attr("placeholder", t.placeholder).on(
    "keyup.DT search.DT input.DT paste.DT cut.DT",
    C ? I.util.debounce(w, C) : w
  ).on("mouseup.DT", function(S) {
    setTimeout(function() {
      w.call(k[0], S);
    }, 10);
  }).on("keypress.DT", function(S) {
    if (S.keyCode == 13)
      return !1;
  }).attr("aria-controls", r);
  return O(e.nTable).on("search.dt.DT", function(S, v) {
    e === v && k[0] !== document.activeElement && k.val(
      typeof a.search != "function" ? a.search : ""
    );
  }), _;
}, "f");
I.feature.register("paging", function(e, t) {
  if (!e.oFeatures.bPaginate)
    return null;
  t = O.extend({
    buttons: I.ext.pager.numbers_length,
    type: e.sPaginationType,
    boundaryNumbers: !0,
    firstLast: !0,
    previousNext: !0,
    numbers: !0
  }, t);
  var n = O("<div/>").addClass(e.oClasses.paging.container + (t.type ? " paging_" + t.type : "")).append(
    O("<nav>").attr("aria-label", "pagination").addClass(e.oClasses.paging.nav)
  ), r = function() {
    bc(e, n.children(), t);
  };
  return e.aoDrawCallback.push(r), O(e.nTable).on("column-sizing.dt.DT", r), n;
}, "p");
function Ih(e) {
  var t = [];
  return e.numbers && t.push("numbers"), e.previousNext && (t.unshift("previous"), t.push("next")), e.firstLast && (t.unshift("first"), t.push("last")), t;
}
function bc(e, t, n) {
  if (e._bInitComplete) {
    var r = n.type ? I.ext.pager[n.type] : Ih, i = e.oLanguage.oAria.paginate || {}, a = e._iDisplayStart, o = e._iDisplayLength, c = e.fnRecordsDisplay(), h = o === -1, m = h ? 0 : Math.ceil(a / o), g = h ? 1 : Math.ceil(c / o), _ = [], w = [], C = r(n).map(function(p) {
      return p === "numbers" ? yc(m, g, n.buttons, n.boundaryNumbers) : p;
    });
    _ = _.concat.apply(_, C);
    for (var k = 0; k < _.length; k++) {
      var S = _[k], v = Oh(e, S, m, g), l = Qi(e, "pagingButton")(
        e,
        S,
        v.display,
        v.active,
        v.disabled
      ), d = typeof S == "string" ? i[S] : i.number ? i.number + (S + 1) : null;
      O(l.clicker).attr({
        "aria-controls": e.sTableId,
        "aria-disabled": v.disabled ? "true" : null,
        "aria-current": v.active ? "page" : null,
        "aria-label": d,
        "data-dt-idx": S,
        tabIndex: v.disabled ? -1 : e.iTabIndex && l.clicker[0].nodeName.toLowerCase() !== "span" ? e.iTabIndex : null
        // `0` doesn't need a tabIndex since it is the default
      }), typeof S != "number" && O(l.clicker).addClass(S), lc(
        l.clicker,
        { action: S },
        function(p) {
          p.preventDefault(), Xa(e, p.data.action, !0);
        }
      ), w.push(l.display);
    }
    var y = Qi(e, "pagingContainer")(
      e,
      w
    ), P = t.find(document.activeElement).data("dt-idx");
    if (t.empty().append(y), P !== void 0 && t.find("[data-dt-idx=" + P + "]").trigger("focus"), w.length) {
      var N = O(w[0]).outerHeight();
      n.buttons > 1 && // prevent infinite
      N > 0 && // will be 0 if hidden
      O(t).height() >= N * 2 - 10 && bc(e, t, O.extend({}, n, { buttons: n.buttons - 2 }));
    }
  }
}
function Oh(e, t, n, r) {
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
function yc(e, t, n, r) {
  var i = [], a = Math.floor(n / 2), o = r ? 2 : 1, c = r ? 1 : 0;
  return t <= n ? i = Cn(0, t) : n === 1 ? i = [e] : n === 3 ? e <= 1 ? i = [0, 1, "ellipsis"] : e >= t - 2 ? (i = Cn(t - 2, t), i.unshift("ellipsis")) : i = ["ellipsis", e, "ellipsis"] : e <= a ? (i = Cn(0, n - o), i.push("ellipsis"), r && i.push(t - 1)) : e >= t - 1 - a ? (i = Cn(t - (n - o), t), i.unshift("ellipsis"), r && i.unshift(0)) : (i = Cn(e - a + o, e + a - c), i.push("ellipsis"), i.unshift("ellipsis"), r && (i.push(t - 1), i.unshift(0))), i;
}
var ia = 0;
I.feature.register("pageLength", function(e, t) {
  var n = e.oFeatures;
  if (!n.bPaginate || !n.bLengthChange)
    return null;
  t = O.extend({
    menu: e.aLengthMenu,
    text: e.oLanguage.sLengthMenu
  }, t);
  var r = e.oClasses.length, i = e.sTableId, a = t.menu, o = [], c = [], h;
  if (Array.isArray(a[0]))
    o = a[0], c = a[1];
  else
    for (h = 0; h < a.length; h++)
      O.isPlainObject(a[h]) ? (o.push(a[h].value), c.push(a[h].label)) : (o.push(a[h]), c.push(a[h]));
  var m = t.text.match(/_MENU_$/), g = t.text.match(/^_MENU_/), _ = t.text.replace(/_MENU_/, ""), w = "<label>" + t.text + "</label>";
  g ? w = "_MENU_<label>" + _ + "</label>" : m && (w = "<label>" + _ + "</label>_MENU_");
  var C = "tmp-" + +/* @__PURE__ */ new Date(), k = O("<div/>").addClass(r.container).append(
    w.replace("_MENU_", '<span id="' + C + '"></span>')
  ), S = [];
  Array.prototype.slice.call(k.find("label")[0].childNodes).forEach(function(y) {
    y.nodeType === Node.TEXT_NODE && S.push({
      el: y,
      text: y.textContent
    });
  });
  var v = function(y) {
    S.forEach(function(P) {
      P.el.textContent = Ua(e, P.text, y);
    });
  }, l = O("<select/>", {
    "aria-controls": i,
    class: r.select
  });
  for (h = 0; h < o.length; h++) {
    var d = e.api.i18n("lengthLabels." + o[h], null);
    d === null && (d = typeof c[h] == "number" ? e.fnFormatNumber(c[h]) : c[h]), l[0][h] = new Option(d, o[h]);
  }
  return k.find("label").attr("for", "dt-length-" + ia), l.attr("id", "dt-length-" + ia), ia++, k.find("#" + C).replaceWith(l), O("select", k).val(e._iDisplayLength).on("change.DT", function() {
    tc(e, O(this).val()), jr(e);
  }), O(e.nTable).on("length.dt.DT", function(y, P, N) {
    e === P && (O("select", k).val(N), v(N));
  }), v(e._iDisplayLength), k;
}, "l");
O.fn.dataTable = I;
I.$ = O;
O.fn.dataTableSettings = I.settings;
O.fn.dataTableExt = I.ext;
O.fn.DataTable = function(e) {
  return O(this).dataTable(e).api();
};
O.each(I, function(e, t) {
  O.fn.DataTable[e] = t;
});
/*! DataTables Bootstrap 5 integration
 * © SpryMedia Ltd - datatables.net/license
 */
let ui = Ue;
ui.extend(!0, I.defaults, {
  renderer: "bootstrap"
});
ui.extend(!0, I.ext.classes, {
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
I.ext.renderer.pagingButton.bootstrap = function(e, t, n, r, i) {
  var a = ["dt-paging-button", "page-item"];
  r && a.push("active"), i && a.push("disabled");
  var o = ui("<li>").addClass(a.join(" ")), c = ui("<button>", {
    class: "page-link",
    role: "link",
    type: "button"
  }).html(n).appendTo(o);
  return {
    display: o,
    clicker: c
  };
};
I.ext.renderer.pagingContainer.bootstrap = function(e, t) {
  return ui("<ul/>").addClass("pagination").append(t);
};
/*! Buttons for DataTables 3.2.6
 * © SpryMedia Ltd - datatables.net/license
 */
let J = Ue;
var Eh = 0, Bh = 0, St = I.ext.buttons, Sa = null;
function to(e, t, n) {
  J.fn.animate ? e.stop().fadeIn(t, n) : (e.css("display", "block"), n && n.call(e));
}
function no(e, t, n) {
  J.fn.animate ? e.stop().fadeOut(t, n) : (e.css("display", "none"), n && n.call(e));
}
var Be = function(e, t) {
  if (!I.versionCheck("2"))
    throw "Warning: Buttons requires DataTables 2 or newer";
  if (!(this instanceof Be))
    return function(n) {
      return new Be(n, e).container();
    };
  typeof t > "u" && (t = {}), t === !0 && (t = {}), Array.isArray(t) && (t = { buttons: t }), this.c = J.extend(!0, {}, Be.defaults, t), t.buttons && (this.c.buttons = t.buttons), this.s = {
    dt: new I.Api(e),
    buttons: [],
    listenKeys: "",
    namespace: "dtb" + Eh++
  }, this.dom = {
    container: J("<" + this.c.dom.container.tag + "/>").addClass(
      this.c.dom.container.className
    )
  }, this._constructor();
};
J.extend(Be.prototype, {
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
    var n = this._nodeToButton(e), r = this.c.dom.button.active, i = J(n.node);
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
      for (var i = t.split("-"), a = this.s, o = 0, c = i.length - 1; o < c; o++)
        a = a.buttons[i[o] * 1];
      r = a.buttons, t = i[i.length - 1] * 1;
    }
    let h = this._expandButton(
      r,
      e,
      e !== void 0 ? e.split : void 0,
      (e === void 0 || e.split === void 0 || e.split.length === 0) && a !== void 0,
      !1,
      t
    );
    return (n === void 0 || n === !0) && this._draw(), h;
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
    return t.isSplit ? J(t.node.childNodes[0]).addClass(this.c.dom.button.disabled).prop("disabled", !0) : J(t.node).addClass(this.c.dom.button.disabled).prop("disabled", !0), t.disabled = !0, this._checkSplitEnable(), this;
  },
  /**
   * Destroy the instance, cleaning up event handlers and removing DOM
   * elements
   * @return {Buttons} Self for chaining
   */
  destroy: function() {
    J("body").off("keyup." + this.s.namespace);
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
    return n.isSplit ? J(n.node.childNodes[0]).removeClass(this.c.dom.button.disabled).prop("disabled", !1) : J(n.node).removeClass(this.c.dom.button.disabled).prop("disabled", !1), n.disabled = !1, this._checkSplitEnable(), this;
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
    return J(t.node);
  },
  /**
   * Set / get a processing class on the selected button
   * @param {element} node Triggering button node
   * @param  {boolean} flag true to add, false to remove, undefined to get
   * @return {boolean|Buttons} Getter value or this if a setter.
   */
  processing: function(e, t) {
    var n = this.s.dt, r = this._nodeToButton(e);
    return t === void 0 ? J(r.node).hasClass("processing") : (J(r.node).toggleClass("processing", t), J(n.table().node()).triggerHandler("buttons-processing.dt", [
      t,
      n.button(e),
      n,
      J(e),
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
    t.conf.destroying = !0, t.conf.destroy && t.conf.destroy.call(r.button(e), r, J(e), t.conf), this._removeKey(t.conf), J(t.node).remove(), t.inserter && J(t.inserter).remove();
    var a = J.inArray(t, n);
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
    var n = this._nodeToButton(e), r = n.textNode, i = this.s.dt, a = J(n.node), o = function(c) {
      return typeof c == "function" ? c(i, a, n.conf) : c;
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
    t.on("destroy", function(o, c) {
      c === n && e.destroy();
    }), J("body").on("keyup." + this.s.namespace, function(o) {
      if (!document.activeElement || document.activeElement === document.body) {
        var c = String.fromCharCode(o.keyCode).toLowerCase();
        e.s.listenKeys.toLowerCase().indexOf(c) !== -1 && e._keypress(c, o);
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
    e.key && (this.s.listenKeys += J.isPlainObject(e.key) ? e.key.key : e.key);
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
    var c = this.s.dt, h = !1, m = this.c.dom.collection, g = Array.isArray(t) ? t : [t], _;
    t === void 0 && (g = Array.isArray(n) ? n : [n]);
    for (var w = 0, C = g.length; w < C; w++) {
      var k = this._resolveExtends(g[w]);
      if (k) {
        if (h = !!(k.config && k.config.split), Array.isArray(k)) {
          this._expandButton(
            e,
            k,
            S !== void 0 && S.conf !== void 0 ? S.conf.split : void 0,
            r,
            o !== void 0 && o.split !== void 0,
            a,
            o
          );
          continue;
        }
        var S = this._buildButton(
          k,
          r,
          k.split !== void 0 || k.config !== void 0 && k.config.split !== void 0,
          i
        );
        if (S) {
          if (a != null ? (e.splice(a, 0, S), a++) : e.push(S), S.conf.dropIcon && !S.conf.split && J(S.node).addClass(this.c.dom.button.dropClass).append(this.c.dom.button.dropHtml), S.conf.buttons && (S.collection = J(
            "<" + m.container.content.tag + "/>"
          ), S.conf._collection = S.collection, this._expandButton(
            S.buttons,
            S.conf.buttons,
            S.conf.split,
            !h,
            h,
            a,
            S.conf
          )), S.conf.split) {
            S.collection = J("<" + m.container.tag + "/>"), S.conf._collection = S.collection;
            for (var v = 0; v < S.conf.split.length; v++) {
              var l = S.conf.split[v];
              typeof l == "object" && (l.parent = o, l.collectionLayout === void 0 && (l.collectionLayout = S.conf.collectionLayout), l.dropup === void 0 && (l.dropup = S.conf.dropup), l.fade === void 0 && (l.fade = S.conf.fade));
            }
            this._expandButton(
              S.buttons,
              S.conf.buttons,
              S.conf.split,
              !h,
              h,
              a,
              S.conf
            );
          }
          S.conf.parent = o, k.init && k.init.call(c.button(S.node), c, J(S.node), k), _ = S.node;
        }
      }
    }
    return _;
  },
  /**
   * Create an individual button
   * @param  {object} config            Resolved button configuration
   * @param  {boolean} inCollection `true` if a collection button
   * @return {object} Completed button description object
   * @private
   */
  _buildButton: function(e, t, n, r) {
    var i = this, a = this.c.dom, o, c = this.s.dt, h = !1, m = function(F) {
      return typeof F == "function" ? F(c, w, e) : F;
    }, g = J.extend(!0, {}, a.button);
    if (t && n && a.collection.split ? J.extend(!0, g, a.collection.split.action) : r || t ? J.extend(!0, g, a.collection.button) : n && J.extend(!0, g, a.split.button), e.spacer) {
      var _ = J("<" + g.spacer.tag + "/>").addClass(
        "dt-button-spacer " + e.style + " " + g.spacer.className
      ).html(m(e.text));
      return {
        conf: e,
        node: _,
        nodeChild: null,
        inserter: _,
        buttons: [],
        inCollection: t,
        isSplit: n,
        collection: null,
        textNode: _
      };
    }
    if (e.available && !e.available(c, e) && !e.html)
      return !1;
    var w;
    if (e.html)
      w = J(e.html);
    else {
      var C = function(F, D, A, R, E) {
        R.action.call(D.button(A), F, D, A, R, E), J(D.table().node()).triggerHandler("buttons-action.dt", [
          D.button(A),
          D,
          A,
          R
        ]);
      }, k = function(F, D, A, R) {
        R.async ? (i.processing(A[0], !0), setTimeout(function() {
          C(F, D, A, R, function() {
            i.processing(A[0], !1);
          });
        }, R.async)) : C(F, D, A, R, function() {
        });
      }, S = e.tag || g.tag, v = e.clickBlurs === void 0 ? !0 : e.clickBlurs;
      if (w = J("<" + S + "/>").addClass(g.className).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function(F) {
        F.preventDefault(), !w.hasClass(g.disabled) && e.action && k(F, c, w, e), v && w.trigger("blur");
      }).on("keypress.dtb", function(F) {
        F.keyCode === 13 && (F.preventDefault(), !w.hasClass(g.disabled) && e.action && k(F, c, w, e));
      }), S.toLowerCase() === "a" && w.attr("href", "#"), S.toLowerCase() === "button" && w.attr("type", "button"), g.liner.tag) {
        var l = g.liner.tag.toLowerCase(), d = J("<" + l + "/>").html(m(e.text)).addClass(g.liner.className);
        l === "a" && d.attr("href", "#"), (l === "a" || l === "button") && (d.attr("tabindex", this.s.dt.settings()[0].iTabIndex), h = !0), w.append(d), o = d;
      } else
        w.html(m(e.text)), o = w;
      h || w.attr("tabindex", this.s.dt.settings()[0].iTabIndex), e.enabled === !1 && w.addClass(g.disabled), e.className && w.addClass(e.className), e.titleAttr && w.attr("title", m(e.titleAttr)), e.attr && w.attr(e.attr), e.namespace || (e.namespace = ".dt-button-" + Bh++), e.config !== void 0 && e.config.split && (e.split = e.config.split);
    }
    var y = this.c.dom.buttonContainer, P;
    y && y.tag ? P = J("<" + y.tag + "/>").addClass(y.className).append(w) : P = w, this._addKey(e), this.c.buttonCreated && (P = this.c.buttonCreated(e, P));
    var N;
    if (n) {
      var p = t ? J.extend(!0, this.c.dom.split, this.c.dom.collection.split) : this.c.dom.split, M = p.wrapper;
      N = J("<" + M.tag + "/>").addClass(M.className).append(w);
      var U = J.extend(e, {
        autoClose: !0,
        align: p.dropdown.align,
        attr: {
          "aria-haspopup": "dialog",
          "aria-expanded": !1
        },
        className: p.dropdown.className,
        closeButton: !1,
        splitAlignClass: p.dropdown.splitAlignClass,
        text: p.dropdown.text
      });
      this._addKey(U);
      var q = function(F, D, A, R) {
        St.split.action.call(
          D.button(N),
          F,
          D,
          A,
          R
        ), J(D.table().node()).triggerHandler("buttons-action.dt", [
          D.button(A),
          D,
          A,
          R
        ]), A.attr("aria-expanded", !0);
      }, z = J(
        '<button class="' + p.dropdown.className + ' dt-button"></button>'
      ).html(this.c.dom.button.dropHtml).addClass(this.c.dom.button.dropClass).on("click.dtb", function(F) {
        F.preventDefault(), F.stopPropagation(), z.hasClass(g.disabled) || q(F, c, z, U), v && z.trigger("blur");
      }).on("keypress.dtb", function(F) {
        F.keyCode === 13 && (F.preventDefault(), z.hasClass(g.disabled) || q(F, c, z, U));
      });
      e.split.length === 0 && z.addClass("dtb-hide-drop"), N.append(z).attr(U.attr);
    }
    var ne = n ? N.get(0) : w.get(0);
    return {
      conf: e,
      node: ne,
      nodeChild: ne && ne.children && ne.children.length ? ne.children[0] : null,
      inserter: n ? N : P,
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
        this._checkAnyEnabled(n.buttons) ? J(r).removeClass(this.c.dom.button.disabled).prop("disabled", !1) : J(r).addClass(this.c.dom.button.disabled).prop("disabled", !1);
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
            t._buttonsHandled = !0, J(a).click();
          else if (J.isPlainObject(i.key)) {
            if (i.key.key !== e || i.key.shiftKey && !t.shiftKey || i.key.altKey && !t.altKey || i.key.ctrlKey && !t.ctrlKey || i.key.metaKey && !t.metaKey)
              return;
            t._buttonsHandled = !0, J(a).click();
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
      var t = J.isPlainObject(e.key) ? e.key.key : e.key, n = this.s.listenKeys.split(""), r = J.inArray(t, n);
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
    var t = this, n = this.s.dt, r, i, a = function(g) {
      for (var _ = 0; !J.isPlainObject(g) && !Array.isArray(g); ) {
        if (g === void 0)
          return;
        if (typeof g == "function") {
          if (g = g.call(t, n, e), !g)
            return !1;
        } else if (typeof g == "string") {
          if (!St[g])
            return { html: g };
          g = St[g];
        }
        if (_++, _ > 30)
          throw "Buttons: Too many iterations";
      }
      return Array.isArray(g) ? g : J.extend({}, g);
    };
    for (e = a(e); e && e.extend; ) {
      if (!St[e.extend])
        throw "Cannot extend unknown button type: " + e.extend;
      var o = a(St[e.extend]);
      if (Array.isArray(o))
        return o;
      if (!o)
        return !1;
      var c = o.className;
      e.config !== void 0 && o.config !== void 0 && (e.config = J.extend({}, o.config, e.config)), e = J.extend({}, o, e), c && e.className !== c && (e.className = c + " " + e.className), e.extend = o.extend;
    }
    var h = e.postfixButtons;
    if (h)
      for (e.buttons || (e.buttons = []), r = 0, i = h.length; r < i; r++)
        e.buttons.push(h[r]);
    var m = e.prefixButtons;
    if (m)
      for (e.buttons || (e.buttons = []), r = 0, i = m.length; r < i; r++)
        e.buttons.splice(r, 0, m[r]);
    return e;
  },
  /**
   * Display (and replace if there is an existing one) a popover attached to a button
   * @param {string|node} content Content to show
   * @param {DataTable.Api} hostButton DT API instance of the button
   * @param {object} inOpts Options (see object below for all options)
   */
  _popover: function(e, t, n) {
    var r = t, i = this.c, a = !1, o = J.extend(
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
    ), c = o.tag + "." + o.containerClassName.replace(/ /g, "."), h = t.node(), m = o.collectionLayout.includes("fixed") ? J("body") : t.node(), g = function() {
      a = !0, no(J(c), o.fade, function() {
        J(this).detach();
      }), J(
        r.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
      ).attr("aria-expanded", "false"), J("div.dt-button-background").off("click.dtb-collection"), Be.background(
        !1,
        o.backgroundClassName,
        o.fade,
        m
      ), J(window).off("resize.resize.dtb-collection"), J("body").off(".dtb-collection"), r.off("buttons-action.b-internal"), r.off("destroy.dtb-popover"), J("body").trigger("buttons-popover-hide.dt");
    };
    if (e === !1) {
      g();
      return;
    }
    var _ = J(
      r.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
    );
    if (_.length && (m.closest(c).length && (m = _.eq(0)), g()), o.sort) {
      var w = J("button", e).map(function(F, D) {
        return {
          text: J(D).text(),
          el: D
        };
      }).toArray();
      w.sort(function(F, D) {
        return F.text.localeCompare(D.text);
      }), J(e).append(w.map(function(F) {
        return F.el;
      }));
    }
    var C = J(".dt-button", e).length, k = "";
    C === 3 ? k = "dtb-b3" : C === 2 ? k = "dtb-b2" : C === 1 && (k = "dtb-b1");
    var S = J("<" + o.tag + "/>").addClass(o.containerClassName).addClass(o.collectionLayout).addClass(o.splitAlignClass).addClass(k).css("display", "none").attr({
      "aria-modal": !0,
      role: "dialog"
    });
    e = J(e).addClass(o.contentClassName).attr("role", "menu").appendTo(S), h.attr("aria-expanded", "true"), m.parents("body")[0] !== document.body && (m = J(document.body).children("div, section, p").last()), o.popoverTitle ? S.prepend(
      '<div class="dt-button-collection-title">' + o.popoverTitle + "</div>"
    ) : o.collectionTitle && S.prepend(
      '<div class="dt-button-collection-title">' + o.collectionTitle + "</div>"
    ), o.closeButton && S.prepend('<div class="dtb-popover-close">&times;</div>').addClass("dtb-collection-closeable"), to(S.insertAfter(m), o.fade);
    var v = J(t.table().container()), l = S.css("position");
    if ((o.span === "container" || o.align === "dt-container") && (m = m.parent(), S.css("width", v.width())), l === "absolute") {
      var d = J(m[0].offsetParent), y = m.position(), P = m.offset(), N = d.offset(), p = d.position(), M = window.getComputedStyle(d[0]);
      N.height = d.outerHeight(), N.width = d.width() + parseFloat(M.paddingLeft), N.right = N.left + N.width, N.bottom = N.top + N.height;
      var U = y.top + m.outerHeight(), q = y.left;
      S.css({
        top: U,
        left: q
      }), M = window.getComputedStyle(S[0]);
      var z = S.offset();
      z.height = S.outerHeight(), z.width = S.outerWidth(), z.right = z.left + z.width, z.bottom = z.top + z.height, z.marginTop = parseFloat(M.marginTop), z.marginBottom = parseFloat(M.marginBottom), o.dropup && (U = y.top - z.height - z.marginTop - z.marginBottom), (o.align === "button-right" || S.hasClass(o.rightAlignClassName)) && (q = y.left - z.width + m.outerWidth()), (o.align === "dt-container" || o.align === "container") && q < y.left && (q = -y.left), p.left + q + z.width > J(window).width() && (q = J(window).width() - z.width - p.left), P.left + q < 0 && (q = -P.left), p.top + U + z.height > J(window).height() + J(window).scrollTop() && (U = y.top - z.height - z.marginTop - z.marginBottom), d.offset().top + U < J(window).scrollTop() && (U = y.top + m.outerHeight()), S.css({
        top: U,
        left: q
      });
    } else {
      var ne = function() {
        var F = J(window).height() / 2, D = S.height() / 2;
        D > F && (D = F), S.css("marginTop", D * -1);
      };
      ne(), J(window).on("resize.dtb-collection", function() {
        ne();
      });
    }
    o.background && Be.background(
      !0,
      o.backgroundClassName,
      o.fade,
      o.backgroundHost || m
    ), J("div.dt-button-background").on(
      "click.dtb-collection",
      function() {
      }
    ), o.autoClose && setTimeout(function() {
      r.on("buttons-action.b-internal", function(F, D, A, R) {
        R[0] !== m[0] && g();
      });
    }, 0), J(S).trigger("buttons-popover.dt"), r.on("destroy.dtb-popover", g), setTimeout(function() {
      a = !1, J("body").on("click.dtb-collection", function(F) {
        if (!a) {
          var D = J.fn.addBack ? "addBack" : "andSelf", A = J(F.target).parent()[0];
          (!J(F.target).parents()[D]().filter(e).length && !J(A).hasClass("dt-buttons") || J(F.target).hasClass("dt-button-background")) && g();
        }
      }).on("keyup.dtb-collection", function(F) {
        F.keyCode === 27 && g();
      }).on("keydown.dtb-collection", function(F) {
        var D = J("a, button", e), A = document.activeElement;
        F.keyCode === 9 && (D.index(A) === -1 ? (D.first().focus(), F.preventDefault()) : F.shiftKey ? A === D[0] && (D.last().focus(), F.preventDefault()) : A === D.last()[0] && (D.first().focus(), F.preventDefault()));
      });
    }, 0);
  }
});
Be.background = function(e, t, n, r) {
  n === void 0 && (n = 400), r || (r = document.body), e ? to(
    J("<div/>").addClass(t).css("display", "none").insertAfter(r),
    n
  ) : no(J("div." + t), n, function() {
    J(this).removeClass(t).remove();
  });
};
Be.instanceSelector = function(e, t) {
  if (e == null)
    return J.map(t, function(a) {
      return a.inst;
    });
  var n = [], r = J.map(t, function(a) {
    return a.name;
  }), i = function(a) {
    if (Array.isArray(a)) {
      for (var o = 0, c = a.length; o < c; o++)
        i(a[o]);
      return;
    }
    if (typeof a == "string")
      if (a.indexOf(",") !== -1)
        i(a.split(","));
      else {
        var h = J.inArray(a.trim(), r);
        h !== -1 && n.push(t[h].inst);
      }
    else if (typeof a == "number")
      n.push(t[a].inst);
    else if (typeof a == "object" && a.nodeName)
      for (var m = 0; m < t.length; m++)
        t[m].inst.dom.container[0] === a && n.push(t[m].inst);
    else
      typeof a == "object" && n.push(a);
  };
  return i(e), n;
};
Be.buttonSelector = function(e, t) {
  for (var n = [], r = function(h, m, g) {
    for (var _, w, C = 0, k = m.length; C < k; C++)
      _ = m[C], _ && (w = g !== void 0 ? g + C : C + "", h.push({
        node: _.node,
        name: _.conf.name,
        idx: w
      }), _.buttons && r(h, _.buttons, w + "-"));
  }, i = function(h, m) {
    var g, _, w = [];
    r(w, m.s.buttons);
    var C = J.map(w, function(d) {
      return d.node;
    });
    if (Array.isArray(h) || h instanceof J) {
      for (g = 0, _ = h.length; g < _; g++)
        i(h[g], m);
      return;
    }
    if (h == null || h === "*")
      for (g = 0, _ = w.length; g < _; g++)
        n.push({
          inst: m,
          node: w[g].node
        });
    else if (typeof h == "number")
      m.s.buttons[h] && n.push({
        inst: m,
        node: m.s.buttons[h].node
      });
    else if (typeof h == "string")
      if (h.indexOf(",") !== -1) {
        var k = h.split(",");
        for (g = 0, _ = k.length; g < _; g++)
          i(k[g].trim(), m);
      } else if (h.match(/^\d+(\-\d+)*$/)) {
        var S = J.map(w, function(d) {
          return d.idx;
        });
        n.push({
          inst: m,
          node: w[J.inArray(h, S)].node
        });
      } else if (h.indexOf(":name") !== -1) {
        var v = h.replace(":name", "");
        for (g = 0, _ = w.length; g < _; g++)
          w[g].name === v && n.push({
            inst: m,
            node: w[g].node
          });
      } else
        J(C).filter(h).each(function() {
          n.push({
            inst: m,
            node: this
          });
        });
    else if (typeof h == "object" && h.nodeName) {
      var l = J.inArray(h, C);
      l !== -1 && n.push({
        inst: m,
        node: C[l]
      });
    }
  }, a = 0, o = e.length; a < o; a++) {
    var c = e[a];
    i(t, c);
  }
  return n;
};
Be.stripData = function(e, t) {
  return e !== null && typeof e == "object" && e.nodeName && e.nodeType && (e = e.innerHTML), typeof e != "string" || (e = Be.stripHtmlScript(e), e = Be.stripHtmlComments(e), (!t || t.stripHtml) && (e = I.util.stripHtml(e)), (!t || t.trim) && (e = e.trim()), (!t || t.stripNewlines) && (e = e.replace(/\n/g, " ")), (!t || t.decodeEntities) && (Sa ? e = Sa(e) : (Bl.innerHTML = e, e = Bl.value)), (!t || t.escapeExcelFormula) && e.match(/^[=@\t\r]/) && (e = "'" + e)), e;
};
Be.entityDecoder = function(e) {
  Sa = e;
};
Be.stripHtmlComments = function(e) {
  var t;
  do
    t = e, e = e.replace(/(<!--.*?--!?>)|(<!--[\S\s]+?--!?>)|(<!--[\S\s]*?$)/g, "");
  while (e !== t);
  return e;
};
Be.stripHtmlScript = function(e) {
  var t;
  do
    t = e, e = e.replace(/<script\b[^<]*(?:(?!<\/script[^>]*>)<[^<]*)*<\/script[^>]*>/gi, "");
  while (e !== t);
  return e;
};
Be.defaults = {
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
Be.version = "3.2.6";
J.extend(St, {
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
      r._collection.parents("body").length ? this.popover(!1, r) : this.popover(r._collection, r), e.type === "keypress" && J("a, button", r._collection).eq(0).focus();
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
    if (St.copyHtml5)
      return "copyHtml5";
  },
  csv: function(e, t) {
    if (St.csvHtml5 && St.csvHtml5.available(e, t))
      return "csvHtml5";
  },
  excel: function(e, t) {
    if (St.excelHtml5 && St.excelHtml5.available(e, t))
      return "excelHtml5";
  },
  pdf: function(e, t) {
    if (St.pdfHtml5 && St.pdfHtml5.available(e, t))
      return "pdfHtml5";
  },
  pageLength: function(e) {
    var t = e.settings()[0].aLengthMenu, n = [], r = [], i = function(c) {
      return c.i18n(
        "buttons.pageLength",
        {
          "-1": "Show all rows",
          _: "Show %d rows"
        },
        c.page.len()
      );
    };
    if (Array.isArray(t[0]))
      n = t[0], r = t[1];
    else
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        J.isPlainObject(o) ? (n.push(o.value), r.push(o.label)) : (n.push(o), r.push(o));
      }
    return {
      extend: "collection",
      text: i,
      className: "buttons-page-length",
      autoClose: !0,
      buttons: J.map(n, function(c, h) {
        return {
          text: r[h],
          className: "button-page-length",
          action: function(m, g) {
            g.page.len(c).draw();
          },
          init: function(m, g, _) {
            var w = this, C = function() {
              w.active(m.page.len() === c);
            };
            m.on("length.dt" + _.namespace, C), C();
          },
          destroy: function(m, g, _) {
            m.off("length.dt" + _.namespace);
          }
        };
      }),
      init: function(c, h, m) {
        var g = this;
        c.on("length.dt" + m.namespace, function() {
          g.text(m.text);
        });
      },
      destroy: function(c, h, m) {
        c.off("length.dt" + m.namespace);
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
I.Api.register("buttons()", function(e, t) {
  t === void 0 && (t = e, e = void 0), this.selector.buttonGroup = e;
  var n = this.iterator(
    !0,
    "table",
    function(r) {
      if (r._buttons)
        return Be.buttonSelector(
          Be.instanceSelector(e, r._buttons),
          t
        );
    },
    !0
  );
  return n._groupSelector = e, n;
});
I.Api.register("button()", function(e, t) {
  var n = this.buttons(e, t);
  return n.length > 1 && n.splice(1, n.length), n;
});
I.Api.registerPlural(
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
I.Api.registerPlural(
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
I.Api.registerPlural(
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
I.Api.register(
  ["buttons().enable()", "button().enable()"],
  function(e) {
    return this.each(function(t) {
      t.inst.enable(t.node, e);
    });
  }
);
I.Api.register(
  ["buttons().disable()", "button().disable()"],
  function() {
    return this.each(function(e) {
      e.inst.disable(e.node);
    });
  }
);
I.Api.register("button().index()", function() {
  var e = null;
  return this.each(function(t) {
    var n = t.inst.index(t.node);
    n !== null && (e = n);
  }), e;
});
I.Api.registerPlural(
  "buttons().nodes()",
  "button().node()",
  function() {
    var e = J();
    return J(
      this.each(function(t) {
        e = e.add(t.inst.node(t.node));
      })
    ), e;
  }
);
I.Api.registerPlural(
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
I.Api.registerPlural(
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
I.Api.registerPlural(
  "buttons().trigger()",
  "button().trigger()",
  function() {
    return this.each(function(e) {
      e.inst.node(e.node).trigger("click");
    });
  }
);
I.Api.register("button().popover()", function(e, t) {
  return this.map(function(n) {
    return n.inst._popover(e, this.button(this[0].node), t);
  });
});
I.Api.register("buttons().containers()", function() {
  var e = J(), t = this._groupSelector;
  return this.iterator(!0, "table", function(n) {
    if (n._buttons)
      for (var r = Be.instanceSelector(t, n._buttons), i = 0, a = r.length; i < a; i++)
        e = e.add(r[i].container());
  }), e;
});
I.Api.register("buttons().container()", function() {
  return this.containers().eq(0);
});
I.Api.register("button().add()", function(e, t, n) {
  var r = this.context, i;
  if (r.length) {
    var a = Be.instanceSelector(
      this._groupSelector,
      r[0]._buttons
    );
    a.length && (i = a[0].add(t, e, n));
  }
  return i ? this.button(this._groupSelector, i) : this;
});
I.Api.register("buttons().destroy()", function() {
  return this.pluck("inst").unique().each(function(e) {
    e.destroy();
  }), this;
});
I.Api.registerPlural(
  "buttons().remove()",
  "buttons().remove()",
  function() {
    return this.each(function(e) {
      e.inst.remove(e.node);
    }), this;
  }
);
var ni;
I.Api.register("buttons.info()", function(e, t, n) {
  var r = this;
  return e === !1 ? (this.off("destroy.btn-info"), no(J("#datatables_buttons_info"), 400, function() {
    J(this).remove();
  }), clearTimeout(ni), ni = null, this) : (ni && clearTimeout(ni), J("#datatables_buttons_info").length && J("#datatables_buttons_info").remove(), e = e ? "<h2>" + e + "</h2>" : "", to(
    J('<div id="datatables_buttons_info" class="dt-button-info"/>').html(e).append(
      J("<div/>")[typeof t == "string" ? "html" : "append"](
        t
      )
    ).css("display", "none").appendTo("body")
  ), n !== void 0 && n !== 0 && (ni = setTimeout(function() {
    r.buttons.info(!1);
  }, n)), this.on("destroy.btn-info", function() {
    r.buttons.info(!1);
  }), this);
});
I.Api.register("buttons.exportData()", function(e) {
  if (this.context.length)
    return Vh(new I.Api(this.context[0]), e);
});
I.Api.register("buttons.exportInfo()", function(e) {
  return e || (e = {}), {
    filename: Fh(e, this),
    title: Hh(e, this),
    messageTop: El(this, e, e.message || e.messageTop, "top"),
    messageBottom: El(this, e, e.messageBottom, "bottom")
  };
});
var Fh = function(e, t) {
  var n = e.filename === "*" && e.title !== "*" && e.title !== void 0 && e.title !== null && e.title !== "" ? e.title : e.filename;
  if (typeof n == "function" && (n = n(e, t)), n == null)
    return null;
  n.indexOf("*") !== -1 && (n = n.replace(/\*/g, J("head > title").text()).trim()), n = n.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");
  var r = ro(e.extension, e, t);
  return r || (r = ""), n + r;
}, ro = function(e, t, n) {
  return e == null ? null : typeof e == "function" ? e(t, n) : e;
}, Hh = function(e, t) {
  var n = ro(e.title, e, t);
  return n === null ? null : n.indexOf("*") !== -1 ? n.replace(/\*/g, J("head > title").text() || "Exported data") : n;
}, El = function(e, t, n, r) {
  var i = ro(n, t, e);
  if (i === null)
    return null;
  var a = J("caption", e.table().container()).eq(0);
  if (i === "*") {
    var o = a.css("caption-side");
    return o !== r ? null : a.length ? a.text() : "";
  }
  return i;
}, Bl = J("<textarea/>")[0], Vh = function(e, t) {
  var n = J.extend(
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
        header: function(P) {
          return Be.stripData(P, n);
        },
        footer: function(P) {
          return Be.stripData(P, n);
        },
        body: function(P) {
          return Be.stripData(P, n);
        }
      },
      customizeData: null,
      customizeZip: null
    },
    t
  ), r = e.columns(n.columns).indexes().map(function(P) {
    var N = e.column(P);
    return n.format.header(N.title(), P, N.header());
  }).toArray(), i = e.table().footer() ? e.columns(n.columns).indexes().map(function(P) {
    var N = e.column(P).footer(), p = "";
    if (N) {
      var M = J(".dt-column-title", N);
      p = M.length ? M.html() : J(N).html();
    }
    return n.format.footer(p, P, N);
  }).toArray() : null, a = J.extend({}, n.modifier);
  e.select && typeof e.select.info == "function" && a.selected === void 0 && e.rows(n.rows, J.extend({ selected: !0 }, a)).any() && J.extend(a, { selected: !0 });
  for (var o = e.rows(n.rows, a).indexes().toArray(), c = e.cells(o, n.columns, {
    order: a.order
  }), h = c.render(n.orthogonal).toArray(), m = c.nodes().toArray(), g = c.indexes().toArray(), _ = e.columns(n.columns).count(), w = _ > 0 ? h.length / _ : 0, C = [], k = 0, S = 0, v = w; S < v; S++) {
    for (var l = [_], d = 0; d < _; d++)
      l[d] = n.format.body(
        h[k],
        g[k].row,
        g[k].column,
        m[k]
      ), k++;
    C[S] = l;
  }
  var y = {
    header: r,
    headerStructure: Fl(
      n.format.header,
      e.table().header.structure(n.columns)
    ),
    footer: i,
    footerStructure: Fl(
      n.format.footer,
      e.table().footer.structure(n.columns)
    ),
    body: C
  };
  return n.customizeData && n.customizeData(y), y;
};
function Fl(e, t) {
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
J.fn.dataTable.Buttons = Be;
J.fn.DataTable.Buttons = Be;
J(document).on("init.dt plugin-init.dt", function(e, t) {
  if (e.namespace === "dt") {
    var n = t.oInit.buttons || I.defaults.buttons;
    n && !t._buttons && new Be(t, n).container();
  }
});
function wc(e, t) {
  var n = new I.Api(e), r = t || n.init().buttons || I.defaults.buttons;
  return new Be(n, r).container();
}
I.ext.feature.push({
  fnInit: wc,
  cFeature: "B"
});
I.feature && I.feature.register("buttons", wc);
/*! Bootstrap integration for DataTables' Buttons
 * © SpryMedia Ltd - datatables.net/license
 */
let Hl = Ue;
Hl.extend(!0, I.Buttons.defaults, {
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
    return e.buttons ? Hl('<div class="btn-group"/>').append(t) : t;
  }
});
I.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";
/*! Responsive 3.0.8
 * © SpryMedia Ltd - datatables.net/license
 */
let re = Ue;
var wt = function(e, t) {
  if (!I.versionCheck || !I.versionCheck("2"))
    throw "DataTables Responsive requires DataTables 2 or newer";
  this.s = {
    childNodeStore: {},
    columns: [],
    current: [],
    dt: new I.Api(e)
  }, !this.s.dt.settings()[0].responsive && (t && typeof t.details == "string" ? t.details = { type: t.details } : t && t.details === !1 ? t.details = { type: !1 } : t && t.details === !0 && (t.details = { type: "inline" }), this.c = re.extend(
    !0,
    {},
    wt.defaults,
    I.defaults.responsive,
    t
  ), e.responsive = this, this._constructor());
};
re.extend(wt.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * Initialise the Responsive instance
   *
   * @private
   */
  _constructor: function() {
    var e = this, t = this.s.dt, n = re(window).innerWidth();
    t.settings()[0]._responsive = this, re(window).on(
      "orientationchange.dtr",
      I.util.throttle(function() {
        var i = re(window).innerWidth();
        i !== n && (e._resize(), n = i);
      })
    ), t.on("row-created.dtr", function(i, a, o, c) {
      re.inArray(!1, e.s.current) !== -1 && re(">td, >th", a).each(function(h) {
        var m = t.column.index("toData", h);
        e.s.current[m] === !1 && re(this).css("display", "none").addClass("dtr-hidden");
      });
    }), t.on("destroy.dtr", function() {
      t.off(".dtr"), re(t.table().body()).off(".dtr"), re(window).off("resize.dtr orientationchange.dtr"), t.cells(".dtr-control").nodes().to$().removeClass("dtr-control"), re(t.table().node()).removeClass("dtr-inline collapsed"), re.each(e.s.current, function(i, a) {
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
    }), re(t.table().node()).addClass("dtr-" + r.type)), t.on("column-calc.dt", function(i, a) {
      for (var o = e.s.current, c = 0; c < o.length; c++) {
        var h = a.visible.indexOf(c);
        o[c] === !1 && h >= 0 && a.visible.splice(h, 1);
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
    for (var i = [], a = e.cell(t, n).node().childNodes, o = 0, c = a.length; o < c; o++)
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
        for (var o = a[0].parentNode, c = o.childNodes, h = [], m = 0, g = c.length; m < g; m++)
          h.push(c[m]);
        for (var _ = 0, w = h.length; _ < w; _++)
          i.appendChild(h[_]);
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
    var t = this.s.dt, n = this.s.columns, r, i, a = n.map(function(S, v) {
      return {
        columnIdx: v,
        priority: S.priority
      };
    }).sort(function(S, v) {
      return S.priority !== v.priority ? S.priority - v.priority : S.columnIdx - v.columnIdx;
    }), o = re.map(n, function(S, v) {
      return t.column(v).visible() === !1 ? "not-visible" : S.auto && S.minWidth === null ? !1 : S.auto === !0 ? "-" : re.inArray(e, S.includeIn) !== -1;
    }), c = 0;
    for (r = 0, i = o.length; r < i; r++)
      o[r] === !0 && (c += n[r].minWidth);
    var h = t.settings()[0].oScroll, m = h.sY || h.sX ? h.iBarWidth : 0, g = t.table().container().offsetWidth - m, _ = g - c;
    for (r = 0, i = o.length; r < i; r++)
      n[r].control && (_ -= n[r].minWidth);
    var w = !1;
    for (r = 0, i = a.length; r < i; r++) {
      var C = a[r].columnIdx;
      o[C] === "-" && !n[C].control && n[C].minWidth && (w || _ - n[C].minWidth < 0 ? (w = !0, o[C] = !1) : o[C] = !0, _ -= n[C].minWidth);
    }
    var k = !1;
    for (r = 0, i = n.length; r < i; r++)
      if (!n[r].control && !n[r].never && o[r] === !1) {
        k = !0;
        break;
      }
    for (r = 0, i = n.length; r < i; r++)
      n[r].control && (o[r] = k), o[r] === "not-visible" && (o[r] = !1);
    return re.inArray(!0, o) === -1 && (o[0] = !0), o;
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
      var c = this.column(o), h = c.header().className, m = c.init().responsivePriority, g = c.header().getAttribute("data-priority");
      return m === void 0 && (m = g == null ? 1e4 : g * 1), {
        className: h,
        includeIn: [],
        auto: !1,
        control: !1,
        never: !!h.match(/\b(dtr\-)?never\b/),
        priority: m
      };
    }), i = function(o, c) {
      var h = r[o].includeIn;
      re.inArray(c, h) === -1 && h.push(c);
    }, a = function(o, c, h, m) {
      var g, _, w;
      if (!h)
        r[o].includeIn.push(c);
      else if (h === "max-")
        for (g = e._find(c).width, _ = 0, w = t.length; _ < w; _++)
          t[_].width <= g && i(o, t[_].name);
      else if (h === "min-")
        for (g = e._find(c).width, _ = 0, w = t.length; _ < w; _++)
          t[_].width >= g && i(o, t[_].name);
      else if (h === "not-")
        for (_ = 0, w = t.length; _ < w; _++)
          t[_].name.indexOf(m) === -1 && i(o, t[_].name);
    };
    r.each(function(o, c) {
      for (var h = o.className.split(" "), m = !1, g = 0, _ = h.length; g < _; g++) {
        var w = h[g].trim();
        if (w === "all" || w === "dtr-all") {
          m = !0, o.includeIn = re.map(t, function(C) {
            return C.name;
          });
          return;
        } else if (w === "none" || w === "dtr-none" || o.never) {
          m = !0;
          return;
        } else if (w === "control" || w === "dtr-control") {
          m = !0, o.control = !0;
          return;
        }
        re.each(t, function(C, k) {
          var S = k.name.split("-"), v = new RegExp(
            "(min\\-|max\\-|not\\-)?(" + S[0] + ")(\\-[_a-zA-Z0-9])?"
          ), l = w.match(v);
          l && (m = !0, l[2] === S[0] && l[3] === "-" + S[1] ? a(
            c,
            k.name,
            l[1],
            l[2] + l[3]
          ) : l[2] === S[0] && !l[3] && a(c, k.name, l[1], l[2]));
        });
      }
      m || (o.auto = !0);
    }), this.s.columns = r;
  },
  /**
   * Update the cells to show the correct control class / button
   * @private
   */
  _controlClass: function() {
    if (this.c.details.type === "inline") {
      var e = this.s.dt, t = this.s.current, n = re.inArray(!0, t);
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
    var n = this, r = this.s.dt, i = this.c.details, a = function(h) {
      re(e.node()).toggleClass("dtr-expanded", h !== !1), re(r.table().node()).triggerHandler("responsive-display.dt", [
        r,
        e,
        h,
        t
      ]);
    };
    if (i && i.type !== !1) {
      var o = typeof i.renderer == "string" ? wt.renderer[i.renderer]() : i.renderer, c = i.display(
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
      typeof c == "boolean" && a(c);
    }
  },
  /**
   * Initialisation for the details handler
   *
   * @private
   */
  _detailsInit: function() {
    var e = this, t = this.s.dt, n = this.c.details;
    n.type === "inline" && (n.target = "td.dtr-control, th.dtr-control"), re(t.table().body()).on("keyup.dtr", "td, th", function(a) {
      let o = document.activeElement.nodeName.toLowerCase();
      a.keyCode === 13 && re(this).data("dtr-keyboard") && (o === "td" || o === "th") && re(this).click();
    });
    var r = n.target, i = typeof r == "string" ? r : "td, th";
    (r !== void 0 || r !== null) && re(t.table().body()).on(
      "click.dtr mousedown.dtr mouseup.dtr",
      i,
      function(a) {
        if (re(t.table().node()).hasClass("collapsed") && re.inArray(
          re(this).closest("tr").get(0),
          t.rows().nodes().toArray()
        ) !== -1) {
          if (typeof r == "number") {
            var o = r < 0 ? t.columns().eq(0).length + r : r;
            if (t.cell(this).index().column !== o)
              return;
          }
          var c = t.row(re(this).closest("tr"));
          a.type === "click" ? e._detailsDisplay(c, !1) : a.type === "mousedown" ? re(this).css("outline", "none") : a.type === "mouseup" && re(this).trigger("blur").css("outline", "");
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
    return re.map(this.s.columns, function(a, o) {
      if (!(a.never || a.control)) {
        var c = i.aoColumns[o];
        return r[o] || (r[o] = n.column(o)), {
          className: c.sClass,
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
    var t = this, n = this.s.dt, r = re(window).innerWidth(), i = this.c.breakpoints, a = i[0].name, o = this.s.columns, c, h, m = this.s.current.slice();
    for (c = i.length - 1; c >= 0; c--)
      if (r <= i[c].width) {
        a = i[c].name;
        break;
      }
    var g = this._columnsVisibility(a);
    this.s.current = g;
    var _ = !1;
    for (c = 0, h = o.length; c < h; c++)
      if (g[c] === !1 && !o[c].never && !o[c].control && n.column(c).visible()) {
        _ = !0;
        break;
      }
    re(n.table().node()).toggleClass("collapsed", _);
    var w = !1, C = 0, k = n.settings()[0], S = re(n.table().node()).children("colgroup"), v = k.aoColumns.map(function(l) {
      return l.colEl;
    });
    n.columns().eq(0).each(function(l, d) {
      n.column(l).visible() && (g[d] === !0 && C++, (e || g[d] !== m[d]) && (w = !0, t._setColumnVis(l, g[d])), g[d] ? t._colGroupAttach(S, v, d) : v[d].detach());
    }), w && (n.columns.adjust(), this._redrawChildren(), re(n.table().node()).trigger("responsive-resize.dt", [
      n,
      this._responsiveOnlyHidden()
    ]), n.page.info().recordsDisplay === 0 && re("td", n.table().body()).eq(0).attr("colspan", C)), t._controlClass();
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
    var e = this.s.dt, t = this.s.columns, n = this, r = e.columns().indexes().filter(function(_) {
      return e.column(_).visible();
    });
    if (this.c.auto && re.inArray(
      !0,
      re.map(t, function(_) {
        return _.auto;
      })
    ) !== -1) {
      var i = e.table().node().cloneNode(!1), a = re(e.table().header().cloneNode(!1)).appendTo(
        i
      ), o = re(e.table().footer().cloneNode(!1)).appendTo(
        i
      ), c = re(e.table().body()).clone(!1, !1).empty().appendTo(i);
      i.style.width = "auto", e.table().header.structure(r).forEach((_) => {
        var w = _.filter(function(C) {
          return !!C;
        }).map(function(C) {
          return re(C.cell).clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0);
        });
        re("<tr/>").append(w).appendTo(a);
      });
      for (var h = re("<tr/>").appendTo(c), m = 0; m < r.count(); m++)
        h.append("<td/>");
      this.c.details.renderer._responsiveMovesNodes ? e.rows({ page: "current" }).every(function(_) {
        var w = this.node();
        if (w) {
          var C = w.cloneNode(!1);
          e.cells(_, r).every(function(k, S) {
            var v = n.s.childNodeStore[_ + "-" + S];
            v ? re(this.node().cloneNode(!1)).append(re(v).clone()).appendTo(C) : re(this.node()).clone(!1).appendTo(C);
          }), c.append(C);
        }
      }) : re(c).append(re(e.rows({ page: "current" }).nodes()).clone(!1)).find("th, td").css("display", ""), c.find("th, td").css("display", ""), e.table().footer.structure(r).forEach((_) => {
        var w = _.filter(function(C) {
          return !!C;
        }).map(function(C) {
          return re(C.cell).clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0);
        });
        re("<tr/>").append(w).appendTo(o);
      }), this.c.details.type === "inline" && re(i).addClass("dtr-inline collapsed"), re(i).find("[name]").removeAttr("name"), re(i).css("position", "relative");
      var g = re("<div/>").css({
        width: 1,
        height: 1,
        overflow: "hidden",
        clear: "both"
      }).append(i);
      g.insertBefore(e.table().node()), h.children().each(function(_) {
        var w = e.column.index("fromVisible", _);
        t[w].minWidth = this.offsetWidth || 0;
      }), g.remove();
    }
  },
  /**
   * Get the state of the current hidden columns - controlled by Responsive only
   */
  _responsiveOnlyHidden: function() {
    var e = this.s.dt;
    return re.map(this.s.current, function(t, n) {
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
    this._setHeaderVis(e, t, r.table().header.structure()), this._setHeaderVis(e, t, r.table().footer.structure()), r.column(e).nodes().to$().css("display", i).toggleClass("dtr-hidden", !t), r.settings()[0].aoColumns[e].responsiveVisible = t, re.isEmptyObject(this.s.childNodeStore) || r.cells(null, e).indexes().each(function(a) {
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
      for (var c = 0; c < a.length; c++)
        if (a[c] && a[c].rowspan > 1)
          for (var h = a[c].rowspan, m = 1; m < h; m++)
            n[o + m][c] = {};
    }), n.forEach(function(a) {
      if (a[e] && a[e].cell)
        re(a[e].cell).css("display", i).toggleClass("dtr-hidden", !t);
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
      var i = e.rows({ page: "current" }).nodes(), a = r === "tr" ? re(i) : re(r, i);
      a.attr("tabIndex", n.iTabIndex).data("dtr-keyboard", 1);
    }
  }
});
wt.breakpoints = [
  { name: "desktop", width: 1 / 0 },
  { name: "tablet-l", width: 1024 },
  { name: "tablet-p", width: 768 },
  { name: "mobile-l", width: 480 },
  { name: "mobile-p", width: 320 }
];
wt.display = {
  childRow: function(e, t, n) {
    var r = re(e.node());
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
    var r = re(e.node());
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
        if (a = re("div.dtr-modal-content"), a.length && t.index() === a.data("dtr-row-idx"))
          a.empty().append(o);
        else
          return null;
      else {
        var c = function() {
          a.remove(), re(document).off("keypress.dtr"), re(t.node()).removeClass("dtr-expanded"), i();
        };
        a = re('<div class="dtr-modal"/>').append(
          re('<div class="dtr-modal-display"/>').append(
            re('<div class="dtr-modal-content"/>').data("dtr-row-idx", t.index()).append(o)
          ).append(
            re(
              '<div class="dtr-modal-close">&times;</div>'
            ).click(function() {
              c();
            })
          )
        ).append(
          re('<div class="dtr-modal-background"/>').click(
            function() {
              c();
            }
          )
        ).appendTo("body"), re(t.node()).addClass("dtr-expanded"), re(document).on("keyup.dtr", function(h) {
          h.keyCode === 27 && (h.stopPropagation(), c());
        });
      }
      return e && e.header && re("div.dtr-modal-content").prepend(
        "<h2>" + e.header(t) + "</h2>"
      ), !0;
    };
  }
};
wt.renderer = {
  listHiddenNodes: function() {
    var e = function(t, n, r) {
      var i = this, a = re(
        '<ul data-dtr-index="' + n + '" class="dtr-details"/>'
      ), o = !1;
      return re.each(r, function(c, h) {
        if (h.hidden) {
          var m = h.className ? 'class="' + h.className + '"' : "";
          re(
            "<li " + m + ' data-dtr-index="' + h.columnIndex + '" data-dt-row="' + h.rowIndex + '" data-dt-column="' + h.columnIndex + '"><span class="dtr-title">' + h.title + "</span> </li>"
          ).append(
            re('<span class="dtr-data"/>').append(
              i._childNodes(
                t,
                h.rowIndex,
                h.columnIndex
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
      var r = re.map(n, function(i) {
        var a = i.className ? 'class="' + i.className + '"' : "";
        return i.hidden ? "<li " + a + ' data-dtr-index="' + i.columnIndex + '" data-dt-row="' + i.rowIndex + '" data-dt-column="' + i.columnIndex + '"><span class="dtr-title">' + i.title + '</span> <span class="dtr-data">' + i.data + "</span></li>" : "";
      }).join("");
      return r ? re(
        '<ul data-dtr-index="' + t + '" class="dtr-details"/>'
      ).append(r) : !1;
    };
  },
  tableAll: function(e) {
    return e = re.extend(
      {
        tableClass: ""
      },
      e
    ), function(t, n, r) {
      var i = re.map(r, function(a) {
        var o = a.className ? 'class="' + a.className + '"' : "";
        return "<tr " + o + ' data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><td>' + (a.title !== "" ? a.title + ":" : "") + "</td> <td>" + a.data + "</td></tr>";
      }).join("");
      return re(
        '<table class="' + e.tableClass + ' dtr-details" width="100%"/>'
      ).append(i);
    };
  }
};
wt.defaults = {
  /**
   * List of breakpoints for the instance. Note that this means that each
   * instance can have its own breakpoints. Additionally, the breakpoints
   * cannot be changed once an instance has been creased.
   *
   * @type {Array}
   * @default Takes the value of `Responsive.breakpoints`
   */
  breakpoints: wt.breakpoints,
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
    display: wt.display.childRow,
    renderer: wt.renderer.listHidden(),
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
var qr = re.fn.dataTable.Api;
qr.register("responsive()", function() {
  return this;
});
qr.register("responsive.index()", function(e) {
  return e = re(e), {
    column: e.data("dtr-index"),
    row: e.parent().data("dtr-index")
  };
});
qr.register("responsive.rebuild()", function() {
  return this.iterator("table", function(e) {
    e._responsive && e._responsive._classLogic();
  });
});
qr.register("responsive.recalc()", function() {
  return this.iterator("table", function(e) {
    e._responsive && (e._responsive._resizeAuto(), e._responsive._resize());
  });
});
qr.register("responsive.hasHidden()", function() {
  var e = this.context[0];
  return e._responsive ? re.inArray(!1, e._responsive._responsiveOnlyHidden()) !== -1 : !1;
});
qr.registerPlural(
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
wt.version = "3.0.8";
re.fn.dataTable.Responsive = wt;
re.fn.DataTable.Responsive = wt;
re(document).on("preInit.dt.dtr", function(e, t, n) {
  if (e.namespace === "dt" && (re(t.nTable).hasClass("responsive") || re(t.nTable).hasClass("dt-responsive") || t.oInit.responsive || I.defaults.responsive)) {
    var r = t.oInit.responsive;
    r !== !1 && new wt(t, re.isPlainObject(r) ? r : {});
  }
});
/*! Bootstrap 5 integration for DataTables' Responsive
 * © SpryMedia Ltd - datatables.net/license
 */
let xc = Ue;
var _c = I.Responsive.display, Mh = _c.modal, Kn = xc(
  '<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"/></div></div></div>'
), Mi, es = window.bootstrap;
I.Responsive.bootstrap = function(e) {
  es = e;
};
function $h() {
  let e = I.use("bootstrap");
  if (e)
    return e;
  if (es)
    return es;
  throw new Error("No Bootstrap library. Set it with `DataTable.use(bootstrap);`");
}
_c.modal = function(e) {
  if (!Mi && es.Modal) {
    let t = $h();
    Mi = new t.Modal(Kn[0]);
  }
  return function(t, n, r, i) {
    if (Mi) {
      var a = r();
      if (a === !1)
        return !1;
      if (n)
        if (xc.contains(document, Kn[0]) && t.index() === Kn.data("dtr-row-idx"))
          Kn.find("div.modal-body").empty().append(a);
        else
          return null;
      else {
        if (e && e.header) {
          var o = Kn.find("div.modal-header"), c = o.find("button").detach();
          o.empty().append('<h4 class="modal-title">' + e.header(t) + "</h4>").append(c);
        }
        Kn.find("div.modal-body").empty().append(a), Kn.data("dtr-row-idx", t.index()).one("hidden.bs.modal", i).appendTo("body"), Mi.show();
      }
      return !0;
    } else
      return Mh(t, n, r, i);
  };
};
/*! Select for DataTables 3.1.3
 * © SpryMedia Ltd - datatables.net/license/mit
 */
let he = Ue;
I.select = {};
I.select.classes = {
  checkbox: "dt-select-checkbox"
};
I.select.version = "3.1.3";
I.select.init = function(e) {
  var t = e.settings()[0];
  if (!I.versionCheck("2"))
    throw "Warning: Select requires DataTables 2 or newer";
  if (!t._select) {
    var n = e.state.loaded(), r = function(y, P, N) {
      if (!(N === null || N.select === void 0)) {
        if (e.rows({ selected: !0 }).any() && e.rows().deselect(), N.select.rows !== void 0 && e.rows(N.select.rows).select(), e.columns({ selected: !0 }).any() && e.columns().deselect(), N.select.columns !== void 0 && e.columns(N.select.columns).select(), e.cells({ selected: !0 }).any() && e.cells().deselect(), N.select.cells !== void 0)
          for (var p = 0; p < N.select.cells.length; p++)
            e.cell(N.select.cells[p].row, N.select.cells[p].column).select();
        e.state.save();
      }
    };
    e.on("stateSaveParams", function(y, P, N) {
      N.select = {}, N.select.rows = e.rows({ selected: !0 }).ids(!0).toArray(), N.select.columns = e.columns({ selected: !0 })[0], N.select.cells = e.cells({ selected: !0 })[0].map(function(p) {
        return { row: e.row(p.row).id(!0), column: p.column };
      });
    }).on("stateLoadParams", r).one("init", function() {
      r(void 0, void 0, n);
    });
    var i = t.oInit.select, a = I.defaults.select, o = i === void 0 ? a : i, c = "row", h = "api", m = !1, g = !0, _ = null, w = !0, C = "td, th", k = "selected", S = !0, v = !1, l = !1, d = !1;
    t._select = {
      infoEls: []
    }, o === !0 ? (h = "os", v = !0) : typeof o == "string" ? (h = o, v = !0) : he.isPlainObject(o) && (o.blurable !== void 0 && (m = o.blurable), o.toggleable !== void 0 && (g = o.toggleable), o.info !== void 0 && (w = o.info), o.items !== void 0 && (c = o.items), o.style !== void 0 ? (h = o.style, v = !0) : (h = "os", v = !0), o.selector !== void 0 && (C = o.selector), o.className !== void 0 && (k = o.className), o.headerCheckbox !== void 0 && (S = o.headerCheckbox), o.selectable !== void 0 && (_ = o.selectable), o.keys !== void 0 && (l = o.keys), o.keysWrap !== void 0 && (d = o.keysWrap)), e.select.selector(C), e.select.items(c), e.select.style(h), e.select.blurable(m), e.select.toggleable(g), e.select.info(w), e.select.keys(l, d), e.select.selectable(_), t._select.className = k, !v && he(e.table().node()).hasClass("selectable") && e.select.style("os"), (S || S === "select-page" || S === "select-all") && e.ready(function() {
      jh(e, S);
    });
  }
};
function Vl(e, t, n) {
  var r, i, a, o = function(h, m) {
    if (h > m) {
      var g = m;
      m = h, h = g;
    }
    var _ = !1;
    return e.columns(":visible").indexes().filter(function(w) {
      return w === h && (_ = !0), w === m ? (_ = !1, !0) : _;
    });
  }, c = function(h, m) {
    var g = e.rows({ search: "applied" }).indexes();
    if (g.indexOf(h) > g.indexOf(m)) {
      var _ = m;
      m = h, h = _;
    }
    var w = !1;
    return g.filter(function(C) {
      return C === h && (w = !0), C === m ? (w = !1, !0) : w;
    });
  };
  !e.cells({ selected: !0 }).any() && !n ? (i = o(0, t.column), a = c(0, t.row)) : (i = o(n.column, t.column), a = c(n.row, t.row)), r = e.cells(a, i).flatten(), e.cells(t, { selected: !0 }).any() ? e.cells(r).deselect() : e.cells(r).select();
}
function Fr(e) {
  var t = I.select.classes.checkbox;
  return e ? t.replace(/ /g, ".") : t;
}
function Nr(e) {
  var t = e.settings()[0], n = t._select.selector;
  he(e.table().container()).off("mousedown.dtSelect", n).off("mouseup.dtSelect", n).off("click.dtSelect", n), he("body").off("click.dtSelect" + io(e.table().node()));
}
function Cc(e) {
  var t = he(e.table().container()), n = e.settings()[0], r = n._select.selector, i;
  t.on("mousedown.dtSelect", r, function(a) {
    (a.shiftKey || a.metaKey || a.ctrlKey) && t.css("-moz-user-select", "none").one("selectstart.dtSelect", r, function() {
      return !1;
    }), window.getSelection && (i = window.getSelection());
  }).on("mouseup.dtSelect", r, function() {
    t.css("-moz-user-select", "");
  }).on("click.dtSelect", r, function(a) {
    var o = e.select.items(), c;
    if (i) {
      var h = window.getSelection();
      if ((!h.anchorNode || he(h.anchorNode).closest("table")[0] === e.table().node()) && h !== i)
        return;
    }
    var m = e.settings()[0], g = e.table().container();
    if (he(a.target).closest("div.dt-container")[0] == g) {
      var _ = e.cell(he(a.target).closest("td, th"));
      if (_.any()) {
        var w = he.Event("user-select.dt");
        if (Zt(e, w, [o, _, a]), !w.isDefaultPrevented()) {
          var C = _.index();
          o === "row" ? (c = C.row, sa(a, e, m, "row", c)) : o === "column" ? (c = _.index().column, sa(a, e, m, "column", c)) : o === "cell" && (c = _.index(), sa(a, e, m, "cell", c)), m._select_lastCell = C;
        }
      }
    }
  }), he("body").on("click.dtSelect" + io(e.table().node()), function(a) {
    if (n._select.blurable) {
      if (he(a.target).parents().filter(e.table().container()).length || he(a.target).parents("html").length === 0 || he(a.target).parents("div.DTE").length)
        return;
      var o = he.Event("select-blur.dt");
      if (Zt(e, o, [a.target, a]), o.isDefaultPrevented())
        return;
      vi(n, !0);
    }
  });
}
function Zt(e, t, n, r) {
  r && !e.flatten().length || (typeof t == "string" && (t = t + ".dt"), n.unshift(e), he(e.table().node()).trigger(t, n));
}
function gs(e) {
  return e.mRender && e.mRender._name === "selectCheckbox";
}
function Ml(e, t) {
  if (!(e.select.style() === "api" || e.select.info() === !1)) {
    var n = e.settings()[0], r = n._select_set;
    if (!e.page.info().serverSide)
      for (var i = r.length - 1; i >= 0; i--)
        n.aIds[r[i]] || r.splice(i, 1);
    var a = r.length ? r.length : e.rows({ selected: !0 }).count(), o = e.columns({ selected: !0 }).count(), c = e.cells({ selected: !0 }).count();
    n._select_mode === "subtractive" && (a = e.page.info().recordsDisplay - r.length);
    var h = function(w, C, k) {
      w.append(
        he('<span class="select-item"/>').append(
          e.i18n(
            "select." + C + "s",
            { _: "%d " + C + "s selected", 0: "", 1: "1 " + C + " selected" },
            k
          )
        )
      );
    }, m = he(t), g = he('<span class="select-info"/>');
    h(g, "row", a), h(g, "column", o), h(g, "cell", c);
    var _ = m.children("span.select-info");
    _.length && _.remove(), g.text() !== "" && m.append(g);
  }
}
function jh(e, t) {
  var n = e.settings()[0], r = n.aoColumns;
  e.columns().iterator("column", function(i, a) {
    var o = r[a];
    if (gs(o)) {
      var c = e.column(a).header(), h = he("div.dt-column-header", c);
      if (h.length && (c = h), !he("input", c).length) {
        var m = he("<input>").attr({
          class: Fr(!1),
          type: "checkbox",
          "aria-label": e.i18n("select.aria.headerCheckbox") || "Select all rows"
        }).appendTo(c).on("change", function() {
          this.checked ? t == "select-page" ? e.rows({ page: "current" }).select() : e.rows({ search: "applied" }).select() : t == "select-page" ? e.rows({ page: "current", selected: !0 }).deselect() : e.rows({ selected: !0 }).deselect();
        }).on("click", function(g) {
          g.stopPropagation();
        });
        e.on("draw select deselect", function(g, _, w) {
          if (w === "row" || !w) {
            var C = qh(e, t);
            C.search && C.search <= C.count && C.search === C.available ? m.prop("checked", !0).prop("indeterminate", !1) : C.search === 0 && C.count === 0 ? m.prop("checked", !1).prop("indeterminate", !1) : m.prop("checked", !1).prop("indeterminate", !0);
          }
        });
      }
    }
  });
}
function Wh(e) {
  var t = e.settings()[0], n = t._select.keys, r = t._select.keysWrap, i = "dts-keys-" + t.sTableId;
  n ? (he(e.rows({ page: "current" }).nodes()).attr("tabindex", 0), e.on("draw." + i, function() {
    he(e.rows({ page: "current" }).nodes()).attr("tabindex", 0);
  }), he(document).on("keydown." + i, function(a) {
    var o = a.keyCode, c = document.activeElement;
    if ([9, 13, 32, 38, 40].includes(o)) {
      var h = e.rows({ page: "current" }).nodes().toArray(), m = h.indexOf(c), g = !0, _ = e.page.info();
      if (m !== -1) {
        if (o === 9)
          a.shift === !1 && m === h.length - 1 ? Ar(e, "next", ":first-child") : a.shift === !0 && m === 0 ? Ar(e, "previous", ":last-child") : g = !1;
        else if (o === 13 || o === 32) {
          var w = e.row(c);
          w.selected() ? w.deselect() : w.select();
        } else
          o === 38 ? m > 0 ? h[m - 1].focus() : _.start > 0 ? Ar(e, "previous", ":last-child") : r && Ar(e, "last", ":last-child") : m < h.length - 1 ? h[m + 1].focus() : _.page < _.pages - 1 ? Ar(e, "next", ":first-child") : r && Ar(e, "first", ":first-child");
        g && (a.stopPropagation(), a.preventDefault());
      }
    }
  })) : (he(e.rows().nodes()).removeAttr("tabindex"), e.off("draw." + i), he(document).off("keydown." + i));
}
function Ar(e, t, n) {
  e.one("draw", function() {
    e.row(n).node().focus();
  }).page(t).draw(!1);
}
function qh(e, t) {
  var n = e.settings()[0], r = n._select.selectable, i = 0, a = t == "select-page" ? e.rows({ page: "current", selected: !0 }).count() : e.rows({ selected: !0 }).count(), o = t == "select-page" ? e.rows({ page: "current", selected: !0 }).count() : e.rows({ search: "applied", selected: !0 }).count();
  if (!r)
    i = t == "select-page" ? e.rows({ page: "current" }).count() : e.rows({ search: "applied" }).count();
  else
    for (var c = t == "select-page" ? e.rows({ page: "current" }).indexes() : e.rows({ search: "applied" }).indexes(), h = 0; h < c.length; h++) {
      var m = n.aoData[c[h]], g = r(m._aData, m.nTr, c[h]);
      g && i++;
    }
  return {
    available: i,
    count: a,
    search: o
  };
}
function Gh(e) {
  var t = new I.Api(e);
  e._select_init = !0, e._select_mode = "additive", e._select_set = [], e.aoRowCreatedCallback.push(
    function(n, r, i) {
      var a, o, c = e.aoData[i], h = t.row(i).id();
      for ((c._select_selected || e._select_mode === "additive" && e._select_set.includes(h) || e._select_mode === "subtractive" && !e._select_set.includes(h)) && (c._select_selected = !0, he(n).addClass(e._select.className).find("input." + Fr(!0)).prop("checked", !0)), a = 0, o = e.aoColumns.length; a < o; a++)
        (e.aoColumns[a]._select_selected || c._selected_cells && c._selected_cells[a]) && he(c.anCells[a]).addClass(e._select.className);
    }
  ), Xh(t), t.on("info.dt", function(n, r, i) {
    r._select.infoEls.includes(i) || r._select.infoEls.push(i), Ml(t, i);
  }), t.on("select.dtSelect.dt deselect.dtSelect.dt", function() {
    e._select.infoEls.forEach(function(n) {
      Ml(t, n);
    }), t.state.save();
  }), t.on("destroy.dtSelect", function() {
    he(t.rows({ selected: !0 }).nodes()).removeClass(t.settings()[0]._select.className), he("input." + Fr(!0), t.table().header()).remove(), Nr(t), t.off(".dtSelect"), he("body").off(".dtSelect" + io(t.table().node()));
  });
}
function $l(e, t, n, r) {
  var i = e[t + "s"]({ search: "applied" }).indexes(), a = i.indexOf(r), o = i.indexOf(n);
  if (!e[t + "s"]({ selected: !0 }).any() && a === -1)
    i.splice(i.indexOf(n) + 1, i.length);
  else {
    if (a > o) {
      var c = o;
      o = a, a = c;
    }
    i.splice(o + 1, i.length), i.splice(0, a);
  }
  e[t](n, { selected: !0 }).any() ? (i.splice(i.indexOf(n), 1), e[t + "s"](i).deselect()) : e[t + "s"](i).select();
}
function vi(e, t) {
  if (t || e._select.style === "single") {
    var n = new I.Api(e);
    n.rows({ selected: !0 }).deselect(), n.columns({ selected: !0 }).deselect(), n.cells({ selected: !0 }).deselect();
  }
}
function sa(e, t, n, r, i) {
  var a = t.select.style(), o = t.select.toggleable(), c = t[r](i, { selected: !0 }).any();
  if (!(c && !o))
    if (a === "os")
      if (e.ctrlKey || e.metaKey)
        t[r](i).select(!c);
      else if (e.shiftKey)
        r === "cell" ? Vl(t, i, n._select_lastCell || null) : $l(
          t,
          r,
          i,
          n._select_lastCell ? n._select_lastCell[r] : null
        );
      else {
        var h = t[r + "s"]({ selected: !0 });
        c && h.flatten().length === 1 ? t[r](i).deselect() : (h.deselect(), t[r](i).select());
      }
    else
      a == "multi+shift" && e.shiftKey ? r === "cell" ? Vl(t, i, n._select_lastCell || null) : $l(
        t,
        r,
        i,
        n._select_lastCell ? n._select_lastCell[r] : null
      ) : t[r](i).select(!c);
}
function io(e) {
  return e.id.replace(/[^a-zA-Z0-9\-\_]/g, "-");
}
function Xh(e) {
  e.on("select", function(t, n, r, i) {
    if (r === "row") {
      var a = e.settings()[0];
      a._select_mode === "additive" ? jl(e, a._select_set, i) : Wl(e, a._select_set, i);
    }
  }), e.on("deselect", function(t, n, r, i) {
    if (r === "row") {
      var a = e.settings()[0];
      a._select_mode === "additive" ? Wl(e, a._select_set, i) : jl(e, a._select_set, i);
    }
  });
}
function jl(e, t, n) {
  for (var r = 0; r < n.length; r++) {
    var i = e.row(n[r]).id();
    i && i !== "undefined" && !t.includes(i) && t.push(i);
  }
}
function Wl(e, t, n) {
  for (var r = 0; r < n.length; r++) {
    var i = e.row(n[r]).id(), a = t.indexOf(i);
    a !== -1 && t.splice(a, 1);
  }
}
he.each(
  [
    { type: "row", prop: "aoData" },
    { type: "column", prop: "aoColumns" }
  ],
  function(e, t) {
    I.ext.selector[t.type].push(function(n, r, i) {
      var a = r.selected, o, c = [];
      if (a !== !0 && a !== !1)
        return i;
      for (var h = 0, m = i.length; h < m; h++)
        o = n[t.prop][i[h]], o && (a === !0 && o._select_selected === !0 || a === !1 && !o._select_selected) && c.push(i[h]);
      return c;
    });
  }
);
I.ext.selector.cell.push(function(e, t, n) {
  var r = t.selected, i, a = [];
  if (r === void 0)
    return n;
  for (var o = 0, c = n.length; o < c; o++)
    i = e.aoData[n[o].row], i && (r === !0 && i._selected_cells && i._selected_cells[n[o].column] === !0 || r === !1 && (!i._selected_cells || !i._selected_cells[n[o].column])) && a.push(n[o]);
  return a;
});
var ut = I.Api.register, Gr = I.Api.registerPlural;
ut("select()", function() {
  return this.iterator("table", function(e) {
    I.select.init(new I.Api(e));
  });
});
ut("select.blurable()", function(e) {
  return e === void 0 ? this.context[0]._select.blurable : this.iterator("table", function(t) {
    t._select.blurable = e;
  });
});
ut("select.toggleable()", function(e) {
  return e === void 0 ? this.context[0]._select.toggleable : this.iterator("table", function(t) {
    t._select.toggleable = e;
  });
});
ut("select.info()", function(e) {
  return e === void 0 ? this.context[0]._select.info : this.iterator("table", function(t) {
    t._select.info = e;
  });
});
ut("select.items()", function(e) {
  return e === void 0 ? this.context[0]._select.items : this.iterator("table", function(t) {
    t._select.items = e, Zt(new I.Api(t), "selectItems", [e]);
  });
});
ut("select.keys()", function(e, t) {
  return e === void 0 ? this.context[0]._select.keys : this.iterator("table", function(n) {
    n._select || I.select.init(new I.Api(n)), n._select.keys = e, n._select.keysWrap = t, Wh(new I.Api(n));
  });
});
ut("select.style()", function(e) {
  return e === void 0 ? this.context[0]._select.style : this.iterator("table", function(t) {
    t._select || I.select.init(new I.Api(t)), t._select_init || Gh(t), t._select.style = e;
    var n = new I.Api(t);
    e !== "api" ? n.ready(function() {
      Nr(n), Cc(n);
    }) : Nr(n), Zt(new I.Api(t), "selectStyle", [e]);
  });
});
ut("select.selector()", function(e) {
  return e === void 0 ? this.context[0]._select.selector : this.iterator("table", function(t) {
    var n = new I.Api(t), r = t._select.style;
    Nr(n), t._select.selector = e, r && r !== "api" ? n.ready(function() {
      Nr(n), Cc(n);
    }) : Nr(n);
  });
});
ut("select.selectable()", function(e) {
  let t = this.context[0];
  return e ? (t._select.selectable = e, this) : t._select.selectable;
});
ut("select.last()", function(e) {
  let t = this.context[0];
  return e ? (t._select_lastCell = e, this) : t._select_lastCell;
});
ut("select.cumulative()", function(e) {
  if (e)
    return this.iterator("table", function(n) {
      if (n._select_mode !== e) {
        var r = new I.Api(n);
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
Gr("rows().select()", "row().select()", function(e) {
  var t = this, n = [];
  return e === !1 ? this.deselect() : (this.iterator("row", function(r, i) {
    vi(r);
    var a = r.aoData[i], o = r.aoColumns;
    if (r._select.selectable) {
      var c = r._select.selectable(a._aData, a.nTr, i);
      if (c === !1)
        return;
    }
    he(a.nTr).addClass(r._select.className), a._select_selected = !0, n.push(i);
    for (var h = 0; h < o.length; h++) {
      var m = o[h];
      if (m.sType === null && t.columns().types(), gs(m)) {
        var g = a.anCells;
        g && g[h] && he("input." + Fr(!0), g[h]).prop("checked", !0), a._aSortData !== null && (a._aSortData[h] = null);
      }
    }
  }), this.iterator("table", function(r) {
    Zt(t, "select", ["row", n], !0);
  }), this);
});
ut("row().selected()", function() {
  var e = this.context[0];
  return !!(e && this.length && e.aoData[this[0]] && e.aoData[this[0]]._select_selected);
});
ut("row().focus()", function() {
  var e = this.context[0];
  e && this.length && e.aoData[this[0]] && e.aoData[this[0]].nTr && e.aoData[this[0]].nTr.focus();
});
ut("row().blur()", function() {
  var e = this.context[0];
  e && this.length && e.aoData[this[0]] && e.aoData[this[0]].nTr && e.aoData[this[0]].nTr.blur();
});
Gr("columns().select()", "column().select()", function(e) {
  var t = this;
  return e === !1 ? this.deselect() : (this.iterator("column", function(n, r) {
    vi(n), n.aoColumns[r]._select_selected = !0;
    var i = new I.Api(n).column(r);
    he(i.header()).addClass(n._select.className), he(i.footer()).addClass(n._select.className), i.nodes().to$().addClass(n._select.className);
  }), this.iterator("table", function(n, r) {
    Zt(t, "select", ["column", t[r]], !0);
  }), this);
});
ut("column().selected()", function() {
  var e = this.context[0];
  return !!(e && this.length && e.aoColumns[this[0]] && e.aoColumns[this[0]]._select_selected);
});
Gr("cells().select()", "cell().select()", function(e) {
  var t = this;
  return e === !1 ? this.deselect() : (this.iterator("cell", function(n, r, i) {
    vi(n);
    var a = n.aoData[r];
    a._selected_cells === void 0 && (a._selected_cells = []), a._selected_cells[i] = !0, a.anCells && he(a.anCells[i]).addClass(n._select.className);
  }), this.iterator("table", function(n, r) {
    Zt(t, "select", ["cell", t.cells(t[r]).indexes().toArray()], !0);
  }), this);
});
ut("cell().selected()", function() {
  var e = this.context[0];
  if (e && this.length) {
    var t = e.aoData[this[0][0].row];
    if (t && t._selected_cells && t._selected_cells[this[0][0].column])
      return !0;
  }
  return !1;
});
Gr("rows().deselect()", "row().deselect()", function() {
  var e = this;
  return this.iterator("row", function(t, n) {
    var r = t.aoData[n], i = t.aoColumns;
    he(r.nTr).removeClass(t._select.className), r._select_selected = !1, t._select_lastCell = null;
    for (var a = 0; a < i.length; a++) {
      var o = i[a];
      if (o.sType === null && e.columns().types(), gs(o)) {
        var c = r.anCells;
        c && c[a] && he("input." + Fr(!0), r.anCells[a]).prop("checked", !1), r._aSortData !== null && (r._aSortData[a] = null);
      }
    }
  }), this.iterator("table", function(t, n) {
    Zt(e, "deselect", ["row", e[n]], !0);
  }), this;
});
Gr("columns().deselect()", "column().deselect()", function() {
  var e = this;
  return this.iterator("column", function(t, n) {
    t.aoColumns[n]._select_selected = !1;
    var r = new I.Api(t), i = r.column(n);
    he(i.header()).removeClass(t._select.className), he(i.footer()).removeClass(t._select.className), r.cells(null, n).indexes().each(function(a) {
      var o = t.aoData[a.row], c = o._selected_cells;
      o.anCells && (!c || !c[a.column]) && he(o.anCells[a.column]).removeClass(t._select.className);
    });
  }), this.iterator("table", function(t, n) {
    Zt(e, "deselect", ["column", e[n]], !0);
  }), this;
});
Gr("cells().deselect()", "cell().deselect()", function() {
  var e = this;
  return this.iterator("cell", function(t, n, r) {
    var i = t.aoData[n];
    i._selected_cells !== void 0 && (i._selected_cells[r] = !1), i.anCells && !t.aoColumns[r]._select_selected && he(i.anCells[r]).removeClass(t._select.className);
  }), this.iterator("table", function(t, n) {
    Zt(e, "deselect", ["cell", e[n]], !0);
  }), this;
});
function Rr(e, t) {
  return function(n) {
    return n.i18n("buttons." + e, t);
  };
}
function aa(e) {
  var t = e._eventNamespace;
  return "draw.dt.DT" + t + " select.dt.DT" + t + " deselect.dt.DT" + t;
}
function zh(e, t) {
  return !!(t.limitTo.indexOf("rows") !== -1 && e.rows({ selected: !0 }).any() || t.limitTo.indexOf("columns") !== -1 && e.columns({ selected: !0 }).any() || t.limitTo.indexOf("cells") !== -1 && e.cells({ selected: !0 }).any());
}
var oa = 0;
he.extend(I.ext.buttons, {
  selected: {
    text: Rr("selected", "Selected"),
    className: "buttons-selected",
    limitTo: ["rows", "columns", "cells"],
    init: function(e, t, n) {
      var r = this;
      n._eventNamespace = ".select" + oa++, e.on(aa(n), function() {
        r.enable(zh(e, n));
      }), this.disable();
    },
    destroy: function(e, t, n) {
      e.off(n._eventNamespace);
    }
  },
  selectedSingle: {
    text: Rr("selectedSingle", "Selected single"),
    className: "buttons-selected-single",
    init: function(e, t, n) {
      var r = this;
      n._eventNamespace = ".select" + oa++, e.on(aa(n), function() {
        var i = e.rows({ selected: !0 }).flatten().length + e.columns({ selected: !0 }).flatten().length + e.cells({ selected: !0 }).flatten().length;
        r.enable(i === 1);
      }), this.disable();
    },
    destroy: function(e, t, n) {
      e.off(n._eventNamespace);
    }
  },
  selectAll: {
    text: Rr("selectAll", "Select all"),
    className: "buttons-select-all",
    action: function(e, t, n, r) {
      var i = this.select.items(), a = r.selectorModifier;
      a ? (typeof a == "function" && (a = a.call(t, e, t, n, r)), this[i + "s"](a).select()) : this[i + "s"]().select();
    }
    // selectorModifier can be specified
  },
  selectNone: {
    text: Rr("selectNone", "Deselect all"),
    className: "buttons-select-none",
    action: function() {
      vi(this.settings()[0], !0);
    },
    init: function(e, t, n) {
      var r = this;
      n._eventNamespace = ".select" + oa++, e.on(aa(n), function() {
        var i = e.rows({ selected: !0 }).flatten().length + e.columns({ selected: !0 }).flatten().length + e.cells({ selected: !0 }).flatten().length;
        r.enable(i > 0);
      }), this.disable();
    },
    destroy: function(e, t, n) {
      e.off(n._eventNamespace);
    }
  },
  showSelected: {
    text: Rr("showSelected", "Show only selected"),
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
he.each(["Row", "Column", "Cell"], function(e, t) {
  var n = t.toLowerCase();
  I.ext.buttons["select" + t + "s"] = {
    text: Rr("select" + t + "s", "Select " + n + "s"),
    className: "buttons-select-" + n + "s",
    action: function() {
      this.select.items(n);
    },
    init: function(r) {
      var i = this;
      this.active(r.select.items() === n), r.on("selectItems.dt.DT", function(a, o, c) {
        i.active(c === n);
      });
    }
  };
});
I.type("select-checkbox", {
  className: "dt-select",
  detect: I.versionCheck("2.1") ? {
    oneOf: function() {
      return !1;
    },
    allOf: function() {
      return !1;
    },
    init: function(e, t, n) {
      return gs(t);
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
he.extend(!0, I.defaults.oLanguage, {
  select: {
    aria: {
      rowCheckbox: "Select row"
    }
  }
});
I.render.select = function(e, t) {
  var n = e ? I.util.get(e) : null, r = t ? I.util.get(t) : null, i = function(a, o, c, h) {
    var m = h.settings.aoData[h.row], g = m._select_selected, _ = h.settings.oLanguage.select.aria.rowCheckbox, w = h.settings._select.selectable;
    if (o === "display") {
      if (w) {
        var C = w(c, m.nTr, h.row);
        if (C === !1)
          return "";
      }
      return he("<input>").attr({
        "aria-label": _,
        class: Fr(),
        name: r ? r(c) : null,
        type: "checkbox",
        value: n ? n(c) : null,
        checked: g
      }).on("input", function(k) {
        k.preventDefault(), this.checked = he(this).closest("tr").hasClass("selected");
      })[0];
    } else {
      if (o === "type")
        return "select-checkbox";
      if (o === "filter")
        return "";
    }
    return g ? "X" : "";
  };
  return i._name = "selectCheckbox", i;
};
I.ext.order["select-checkbox"] = function(e, t) {
  return this.api().column(t, { order: "index" }).nodes().map(function(n) {
    return e._select.items === "row" ? he(n).parent().hasClass(e._select.className).toString() : e._select.items === "cell" ? he(n).hasClass(e._select.className).toString() : !1;
  });
};
he.fn.DataTable.select = I.select;
he(document).on("i18n.dt.dtSelect preInit.dt.dtSelect", function(e, t) {
  e.namespace === "dt" && I.select.init(new I.Api(t));
});
/*! Bootstrap 5 styling wrapper for Select
 * © SpryMedia Ltd - datatables.net/license
 */
I.select.classes.checkbox = "form-check-input dt-select-checkbox";
/*! SearchPanes 2.3.5
 * © SpryMedia Ltd - datatables.net/license
 */
let Jt = Ue;
(function() {
  var e, t;
  function n(F) {
    e = F, t = F.fn.dataTable;
  }
  var r = (
    /** @class */
    function() {
      function F(D, A, R, E, V) {
        var j = this;
        if (V === void 0 && (V = null), !t || !t.versionCheck || !t.versionCheck("1.10.0"))
          throw new Error("SearchPane requires DataTables 1.10 or newer");
        if (!t.select)
          throw new Error("SearchPane requires Select");
        var X = new t.Api(D);
        this.classes = e.extend(!0, {}, F.classes), this.c = e.extend(!0, {}, F.defaults, A, V), A && A.hideCount && A.viewCount === void 0 && (this.c.viewCount = !this.c.hideCount);
        var Z = X.columns().eq(0).toArray().length;
        this.s = {
          colExists: R < Z,
          colOpts: void 0,
          customPaneSettings: V,
          displayed: !1,
          dt: X,
          dtPane: void 0,
          firstSet: !0,
          index: R,
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
          clear: e('<button type="button">&#215;</button>').attr("disabled", "true").addClass(this.classes.disabledButton).addClass(this.classes.paneButton).addClass(this.classes.clearButton).attr("aria-label", X.i18n("searchPanes.buttons.clearPane", this.c.i18n.aria.clearPane)).html(this.s.dt.i18n("searchPanes.clearPane", this.c.i18n.clearPane)),
          collapseButton: e('<button type="button"><span class="' + this.classes.caret + '">&#x5e;</span></button>').addClass(this.classes.paneButton).addClass(this.classes.collapseButton).attr("aria-label", X.i18n("searchPanes.buttons.collapse", this.c.i18n.aria.collapse)),
          container: e("<div/>").addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout + (parseInt(this.c.layout.split("-")[1], 10) < 10 ? this.c.layout : this.c.layout.split("-")[0] + "-9")).addClass(this.s.customPaneSettings && this.s.customPaneSettings.className ? this.s.customPaneSettings.className : ""),
          countButton: e('<button type="button"><span></span></button>').addClass(this.classes.paneButton).addClass(this.classes.countButton).attr("aria-label", X.i18n("searchPanes.buttons.orderByCount", this.c.i18n.aria.orderByCount)),
          dtP: e('<table width="100%"><thead><tr><th></th><th></th></tr></thead></table>'),
          lower: e("<div/>").addClass(this.classes.subRow2).addClass(this.classes.narrowButton),
          nameButton: e('<button type="button"><span></span></button>').addClass(this.classes.paneButton).addClass(this.classes.nameButton).attr("aria-label", X.i18n("searchPanes.buttons.orderByLabel", this.c.i18n.aria.orderByLabel)),
          panesContainer: e(E),
          searchBox: e("<input/>").addClass(this.classes.paneInputButton).addClass(this.classes.search),
          searchButton: e('<button type="button"><span></span></button>').addClass(this.classes.searchIcon).addClass(this.classes.paneButton).attr("aria-label", X.i18n("searchPanes.buttons.clearSearch", this.c.i18n.aria.clearSearch)),
          searchCont: e("<div/>").addClass(this.classes.searchCont),
          searchLabelCont: e("<div/>").addClass(this.classes.searchLabelCont),
          topRow: e("<div/>").addClass(this.classes.topRow),
          upper: e("<div/>").addClass(this.classes.subRow1).addClass(this.classes.narrowSearch)
        };
        var Q = "";
        this.s.colExists ? (Q = e(this.s.dt.column(this.s.index).header()).text(), this.dom.dtP.find("th").eq(0).text(Q)) : (Q = this.s.customPaneSettings.header || "Custom Pane", this.dom.dtP.find("th").eq(0).html(Q)), this.s.colOpts.name ? this.s.name = this.s.colOpts.name : this.s.customPaneSettings && this.s.customPaneSettings.name ? this.s.name = this.s.customPaneSettings.name : this.s.name = Q;
        var ee = this.s.dt.table(0).node();
        return this.s.searchFunction = function(te, ie, le) {
          if (j.s.selections.length === 0 || te.nTable !== ee)
            return !0;
          var ae = null;
          return j.s.colExists && (ae = ie[j.s.index], j.s.colOpts.orthogonal.filter !== "filter" && (ae = j.s.rowData.filterMap.get(le), ae instanceof e.fn.dataTable.Api && (ae = ae.toArray()))), j._search(ae, le);
        }, e.fn.dataTable.ext.search.push(this.s.searchFunction), this.c.clear && this.dom.clear.on("click.dtsp", function() {
          var te = j.dom.container.find("." + j.classes.search.replace(/\s+/g, "."));
          te.each(function() {
            e(this).val("").trigger("input");
          }), j.clearPane();
        }), this.s.dt.on("draw.dtsp", function() {
          return j.adjustTopRow();
        }), this.s.dt.on("buttons-action.dtsp", function() {
          return j.adjustTopRow();
        }), this.s.dt.on("column-reorder.dtsp", function(te, ie, le) {
          j.s.index = le.mapping[j.s.index];
        }), this;
      }
      return F.prototype.addRow = function(D, A, R, E, V, j, X) {
        j || (j = this.s.rowData.bins[A] ? this.s.rowData.bins[A] : 0), X || (X = this._getShown(A));
        for (var Z, Q = 0, ee = this.s.indexes; Q < ee.length; Q++) {
          var te = ee[Q];
          te.filter === A && (Z = te.index);
        }
        return Z === void 0 && (Z = this.s.indexes.length, this.s.indexes.push({ filter: A, index: Z })), this.s.dtPane.row.add({
          className: V,
          display: D !== "" ? D : this.emptyMessage(),
          filter: A,
          index: Z,
          shown: X,
          sort: R,
          total: j,
          type: E
        });
      }, F.prototype.adjustTopRow = function() {
        var D = this.dom.container.find("." + this.classes.subRowsContainer.replace(/\s+/g, ".")), A = this.dom.container.find("." + this.classes.subRow1.replace(/\s+/g, ".")), R = this.dom.container.find("." + this.classes.subRow2.replace(/\s+/g, ".")), E = this.dom.container.find("." + this.classes.topRow.replace(/\s+/g, "."));
        (e(D[0]).width() < 252 || e(E[0]).width() < 252) && e(D[0]).width() !== 0 ? (e(D[0]).addClass(this.classes.narrow), e(A[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowSearch), e(R[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowButton)) : (e(D[0]).removeClass(this.classes.narrow), e(A[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowSearch), e(R[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowButton));
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
        var D = this;
        !this.s.displayed || // If collapsing is disabled globally, and not enabled specifically for this column
        !this.c.collapse && this.s.colOpts.collapse !== !0 || // OR, collapsing could be enabled globally and this column specifically
        // is not to be collapsed.
        // We can't just take !this.s.colOpts.collapse here as if it is undefined
        // then the global should be used
        this.s.colOpts.collapse === !1 || (e(this.s.dtPane.table().container()).addClass(this.classes.hidden), this.dom.topRow.addClass(this.classes.bordered), this.dom.nameButton.addClass(this.classes.disabledButton), this.dom.countButton.addClass(this.classes.disabledButton), this.dom.searchButton.addClass(this.classes.disabledButton), this.dom.collapseButton.addClass(this.classes.rotated), this.dom.topRow.one("click.dtsp", function() {
          return D.show();
        }), this.dom.topRow.trigger("collapse.dtsps"));
      }, F.prototype.destroy = function() {
        this.s.dtPane && this.s.dtPane.off(".dtsp"), this.s.dt.off(".dtsp"), this.dom.clear.off(".dtsp"), this.dom.nameButton.off(".dtsp"), this.dom.countButton.off(".dtsp"), this.dom.searchButton.off(".dtsp"), this.dom.collapseButton.off(".dtsp"), e(this.s.dt.table().node()).off(".dtsp"), this.dom.container.detach();
        for (var D = e.fn.dataTable.ext.search.indexOf(this.s.searchFunction); D !== -1; )
          e.fn.dataTable.ext.search.splice(D, 1), D = e.fn.dataTable.ext.search.indexOf(this.s.searchFunction);
        this.s.dtPane && this.s.dtPane.destroy(), this.s.listSet = !1;
      }, F.prototype.emptyMessage = function() {
        var D = this.c.i18n.emptyMessage;
        return this.c.emptyMessage && (D = this.c.emptyMessage), this.s.colOpts.emptyMessage !== !1 && this.s.colOpts.emptyMessage !== null && (D = this.s.colOpts.emptyMessage), this.s.dt.i18n("searchPanes.emptyMessage", D);
      }, F.prototype.getPaneCount = function() {
        return this.s.dtPane ? this.s.dtPane.rows({ selected: !0 }).data().toArray().length : 0;
      }, F.prototype.rebuildPane = function(D, A) {
        D === void 0 && (D = null), A === void 0 && (A = !1), this.clearData();
        var R = [];
        this.s.serverSelect = [];
        var E = null;
        return this.s.dtPane && (A && (this.s.dt.page.info().serverSide ? this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray() : R = this.s.dtPane.rows({ selected: !0 }).data().toArray()), this.s.dtPane.clear().destroy(), E = this.dom.container.prev(), this.destroy(), this.s.dtPane = void 0, e.fn.dataTable.ext.search.push(this.s.searchFunction)), this.dom.container.removeClass(this.classes.hidden), this.s.displayed = !1, this._buildPane(this.s.dt.page.info().serverSide ? this.s.serverSelect : R, D, E), this;
      }, F.prototype.resize = function(D) {
        this.c.layout = D, this.dom.container.removeClass().addClass(this.classes.show).addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout + (parseInt(D.split("-")[1], 10) < 10 ? D : D.split("-")[0] + "-9")).addClass(this.s.customPaneSettings !== null && this.s.customPaneSettings.className ? this.s.customPaneSettings.className : ""), this.adjustTopRow(), this.dom.dtP.css("table-layout", "fixed"), this.dom.dtP.css("width", "100%"), this.dom.dtP.find("colgroup col").css("width", "100%");
      }, F.prototype.setListeners = function() {
        var D = this;
        this.s.dtPane && (this.s.dtPane.off("select.dtsp").on("select.dtsp", function() {
          clearTimeout(D.s.deselectTimeout), D._updateSelection(!D.s.updating), D.dom.clear.removeClass(D.classes.disabledButton).removeAttr("disabled");
        }), this.s.dtPane.off("deselect.dtsp").on("deselect.dtsp", function() {
          D.s.deselectTimeout = setTimeout(function() {
            D._updateSelection(!0), D.s.dtPane.rows({ selected: !0 }).data().toArray().length === 0 && D.dom.clear.addClass(D.classes.disabledButton).attr("disabled", "true");
          }, 50);
        }), this.s.firstSet && (this.s.firstSet = !1, this.s.dt.on("stateSaveParams.dtsp", function(A, R, E) {
          if (e.isEmptyObject(E)) {
            D.s.dtPane.state.clear();
            return;
          }
          var V, j, X = [], Z, Q, ee;
          D.s.dtPane && (X = D.s.dtPane.rows({ selected: !0 }).data().map(function(ie) {
            return ie.filter !== null ? ie.filter.toString() : null;
          }).toArray(), Q = D.dom.searchBox.val(), j = D.s.dtPane.order(), V = D.s.rowData.binsOriginal, ee = D.s.rowData.arrayOriginal, Z = D.dom.collapseButton.hasClass(D.classes.rotated)), E.searchPanes === void 0 && (E.searchPanes = {}), E.searchPanes.panes === void 0 && (E.searchPanes.panes = []);
          for (var te = 0; te < E.searchPanes.panes.length; te++)
            E.searchPanes.panes[te].id === D.s.index && (E.searchPanes.panes.splice(te, 1), te--);
          E.searchPanes.panes.push({
            arrayFilter: ee,
            bins: V,
            collapsed: Z,
            id: D.s.index,
            order: j,
            searchTerm: Q,
            selected: X
          });
        })), this.s.dtPane.off("user-select.dtsp").on("user-select.dtsp", function(A, R, E, V, j) {
          j.stopPropagation();
        }), this.s.dtPane.off("draw.dtsp").on("draw.dtsp", function() {
          return D.adjustTopRow();
        }), this.dom.nameButton.off("click.dtsp").on("click.dtsp", function() {
          var A = D.s.dtPane.order()[0][1];
          D.s.dtPane.order([[0, A === "asc" ? "desc" : "asc"]]).draw(), D.s.dt.state.save();
        }), this.dom.countButton.off("click.dtsp").on("click.dtsp", function() {
          var A = D.s.dtPane.order()[0][1], R = A === "asc" ? "desc" : "asc";
          D.s.dtPane.order([[2, R], [1, R]]).draw(), D.s.dt.state.save();
        }), this.dom.collapseButton.off("click.dtsp").on("click.dtsp", function(A) {
          A.stopPropagation();
          var R = e(D.s.dtPane.table().container());
          R.toggleClass(D.classes.hidden), D.dom.topRow.toggleClass(D.classes.bordered), D.dom.nameButton.toggleClass(D.classes.disabledButton), D.dom.countButton.toggleClass(D.classes.disabledButton), D.dom.searchButton.toggleClass(D.classes.disabledButton), D.dom.collapseButton.toggleClass(D.classes.rotated), R.hasClass(D.classes.hidden) ? D.dom.topRow.on("click.dtsp", function() {
            return D.dom.collapseButton.click();
          }) : D.dom.topRow.off("click.dtsp"), D.s.dt.state.save(), D.dom.topRow.trigger("collapse.dtsps");
        }), this.dom.clear.off("click.dtsp").on("click.dtsp", function() {
          var A = D.dom.container.find("." + D.classes.search.replace(/ /g, "."));
          A.each(function() {
            e(this).val("").trigger("input");
          }), D.clearPane();
        }), this.dom.searchButton.off("click.dtsp").on("click.dtsp", function() {
          return D.dom.searchBox.focus();
        }), this.dom.searchBox.off("click.dtsp").on("input.dtsp", function() {
          var A = D.dom.searchBox.val();
          D.s.dtPane.search(A).draw(), typeof A == "string" && (A.length > 0 || A.length === 0 && D.s.dtPane.rows({ selected: !0 }).data().toArray().length > 0) ? D.dom.clear.removeClass(D.classes.disabledButton).removeAttr("disabled") : D.dom.clear.addClass(D.classes.disabledButton).attr("disabled", "true"), D.s.dt.state.save();
        }), this.s.dtPane.select.style(this.s.colOpts.dtOpts && this.s.colOpts.dtOpts.select && this.s.colOpts.dtOpts.select.style ? this.s.colOpts.dtOpts.select.style : this.c.dtOpts && this.c.dtOpts.select && this.c.dtOpts.select.style ? this.c.dtOpts.select.style : "os"));
      }, F.prototype._serverPopulate = function(D) {
        D.tableLength ? (this.s.tableLength = D.tableLength, this.s.rowData.totalOptions = this.s.tableLength) : (this.s.tableLength === null || this.s.dt.rows()[0].length > this.s.tableLength) && (this.s.tableLength = this.s.dt.rows()[0].length, this.s.rowData.totalOptions = this.s.tableLength);
        var A = this.s.dt.column(this.s.index).dataSrc();
        if (D.searchPanes.options[A])
          for (var R = 0, E = D.searchPanes.options[A]; R < E.length; R++) {
            var V = E[R];
            this.s.rowData.arrayFilter.push({
              display: V.label,
              filter: V.value,
              sort: V.label,
              type: V.label
            }), this.s.rowData.bins[V.value] = V.total;
          }
        var j = Object.keys(this.s.rowData.bins).length, X = this._uniqueRatio(j, this.s.tableLength);
        if (this.s.displayed === !1 && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? X > this.c.threshold : X > this.s.colOpts.threshold) || this.s.colOpts.show !== !0 && j <= 1)) {
          this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
          return;
        }
        this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins, this.s.displayed = !0;
      }, F.prototype.show = function() {
        this.s.displayed && (this.dom.topRow.removeClass(this.classes.bordered), this.dom.nameButton.removeClass(this.classes.disabledButton), this.dom.countButton.removeClass(this.classes.disabledButton), this.dom.searchButton.removeClass(this.classes.disabledButton), this.dom.collapseButton.removeClass(this.classes.rotated), e(this.s.dtPane.table().container()).removeClass(this.classes.hidden), this.dom.topRow.trigger("collapse.dtsps"));
      }, F.prototype._uniqueRatio = function(D, A) {
        return A > 0 && (this.s.rowData.totalOptions > 0 && !this.s.dt.page.info().serverSide || this.s.dt.page.info().serverSide && this.s.tableLength > 0) ? D / this.s.rowData.totalOptions : 1;
      }, F.prototype.updateTable = function() {
        var D = this.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(A) {
          return A.filter;
        });
        this.s.selections = D, this._searchExtras();
      }, F.prototype._getComparisonRows = function() {
        var D = this.s.colOpts.options ? this.s.colOpts.options : this.s.customPaneSettings && this.s.customPaneSettings.options ? this.s.customPaneSettings.options : void 0;
        if (D !== void 0) {
          var A = this.s.dt.rows(), R = A.data().toArray(), E = [];
          this.s.dtPane.clear(), this.s.indexes = [];
          for (var V = 0, j = D; V < j.length; V++) {
            var X = j[V], Z = X.label !== "" ? X.label : this.emptyMessage(), Q = {
              className: X.className,
              display: Z,
              filter: typeof X.value == "function" ? X.value : [],
              sort: X.order !== void 0 ? X.order : Z,
              total: 0,
              type: Z
            };
            if (typeof X.value == "function") {
              for (var ee = 0; ee < R.length; ee++)
                X.value.call(this.s.dt, R[ee], A[0][ee]) && Q.total++;
              typeof Q.filter != "function" && Q.filter.push(X.filter);
            }
            E.push(this.addRow(Q.display, Q.filter, Q.sort, Q.type, Q.className, Q.total));
          }
          return E;
        }
      }, F.prototype._getMessage = function(D) {
        return this.s.dt.i18n("searchPanes.count", this.c.i18n.count).replace(/{total}/g, D.total);
      }, F.prototype._getShown = function(D) {
      }, F.prototype._getPaneConfig = function() {
        var D = this, A = t.Scroller, R = this.s.dt.settings()[0].oLanguage;
        return R.url = null, R.sUrl = null, {
          columnDefs: [
            {
              className: "dtsp-nameColumn",
              data: "display",
              render: function(E, V, j) {
                if (V === "sort")
                  return j.sort;
                if (V === "type")
                  return j.type;
                var X = D._getMessage(j), Z = '<span class="' + D.classes.pill + '">' + X + "</span>";
                return (!D.c.viewCount || !D.s.colOpts.viewCount) && (Z = ""), V === "filter" ? typeof E == "string" && E.match(/<[^>]*>/) !== null ? E.replace(/<[^>]*>/g, "") : E : '<div class="' + D.classes.nameCont + '"><span title="' + (typeof E == "string" && E.match(/<[^>]*>/) !== null ? E.replace(/<[^>]*>/g, "") : E) + '" class="' + D.classes.name + '">' + E + "</span>" + Z + "</div>";
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
          language: R,
          paging: !!A,
          scrollX: !1,
          scrollY: "200px",
          scroller: !!A,
          select: !0,
          stateSave: !!this.s.dt.settings()[0].oFeatures.bStateSave
        };
      }, F.prototype._makeSelection = function() {
        this.updateTable(), this.s.updating = !0, this.s.dt.draw(), this.s.updating = !1;
      }, F.prototype._populatePaneArray = function(D, A, R, E) {
        E === void 0 && (E = this.s.rowData.bins);
        var V = R.fastData ? R.fastData : function(Z, Q, ee) {
          return R.oApi._fnGetCellData(R, Z, Q, ee);
        };
        if (typeof this.s.colOpts.orthogonal == "string") {
          var j = V(D, this.s.index, this.s.colOpts.orthogonal);
          this.s.rowData.filterMap.set(D, j), this._addOption(j, j, j, j, A, E), this.s.rowData.totalOptions++;
        } else {
          var X = V(D, this.s.index, this.s.colOpts.orthogonal.search);
          X === null && (X = ""), typeof X == "string" && (X = X.replace(/<[^>]*>/g, "")), this.s.rowData.filterMap.set(D, X), E[X] ? (E[X]++, this.s.rowData.totalOptions++) : (this._addOption(X, V(D, this.s.index, this.s.colOpts.orthogonal.display), V(D, this.s.index, this.s.colOpts.orthogonal.sort), V(D, this.s.index, this.s.colOpts.orthogonal.type), A, E), this.s.rowData.totalOptions++);
        }
      }, F.prototype._reloadSelect = function(D) {
        if (D !== void 0) {
          for (var A, R = 0; R < D.searchPanes.panes.length; R++)
            if (D.searchPanes.panes[R].id === this.s.index) {
              A = R;
              break;
            }
          if (A)
            for (var E = this.s.dtPane, V = E.rows({ order: "index" }).data().map(function(ee) {
              return ee.filter !== null ? ee.filter.toString() : null;
            }).toArray(), j = 0, X = D.searchPanes.panes[A].selected; j < X.length; j++) {
              var Z = X[j], Q = -1;
              Z !== null && (Q = V.indexOf(Z.toString())), Q > -1 && (this.s.serverSelecting = !0, E.row(Q).select(), this.s.serverSelecting = !1);
            }
        }
      }, F.prototype._updateSelection = function(D) {
        var A = this, R = function(V) {
          if (I.versionCheck("2"))
            A.s.dt.processing(V);
          else {
            var j = A.s.dt.settings()[0], X = j.oApi;
            X._fnProcessingDisplay(j, !1);
          }
        }, E = function() {
          A.s.scrollTop = e(A.s.dtPane.table().node()).parent()[0].scrollTop, A.s.dt.page.info().serverSide && !A.s.updating ? A.s.serverSelecting || (A.s.serverSelect = A.s.dtPane.rows({ selected: !0 }).data().toArray(), A.s.dt.draw(!1)) : D && A._makeSelection(), R(!1);
        };
        R(!0), setTimeout(E, 1);
      }, F.prototype._addOption = function(D, A, R, E, V, j) {
        if (Array.isArray(D) || D instanceof t.Api) {
          if (D instanceof t.Api && (D = D.toArray(), A = A.toArray()), D.length === A.length) {
            for (var X = 0; X < D.length; X++)
              j[D[X]] ? j[D[X]]++ : (j[D[X]] = 1, V.push({
                display: A[X],
                filter: D[X],
                sort: R[X],
                type: E[X]
              })), this.s.rowData.totalOptions++;
            return;
          }
          throw new Error("display and filter not the same length");
        } else
          typeof this.s.colOpts.orthogonal == "string" ? j[D] ? (j[D]++, this.s.rowData.totalOptions++) : (j[D] = 1, V.push({
            display: A,
            filter: D,
            sort: R,
            type: E
          }), this.s.rowData.totalOptions++) : (j[D] = 1, V.push({
            display: A,
            filter: D,
            sort: R,
            type: E
          }));
      }, F.prototype._buildPane = function(D, A, R) {
        var E = this;
        D === void 0 && (D = []), A === void 0 && (A = null), R === void 0 && (R = null), this.s.selections = [];
        var V = this.s.dt.state.loaded(), j;
        if (this.s.listSet && (V = this.s.dt.state()), this.s.colExists) {
          var X = -1;
          if (V && V.searchPanes && V.searchPanes.panes) {
            for (var Z = 0; Z < V.searchPanes.panes.length; Z++)
              if (V.searchPanes.panes[Z].id === this.s.index) {
                X = Z;
                break;
              }
          }
          if ((this.s.colOpts.show === !1 || this.s.colOpts.show !== void 0 && this.s.colOpts.show !== !0) && X === -1)
            return this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1, !1;
          if ((this.s.colOpts.show === !0 || X !== -1) && (this.s.displayed = !0), !this.s.dt.page.info().serverSide && (!A || !A.searchPanes || !A.searchPanes.options)) {
            this.s.rowData.arrayFilter.length === 0 && (this.s.rowData.totalOptions = 0, this._populatePane(), this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins);
            var Q = Object.keys(this.s.rowData.binsOriginal).length, ee = this._uniqueRatio(Q, this.s.dt.rows()[0].length);
            if (this.s.displayed === !1 && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? ee > this.c.threshold : ee > this.s.colOpts.threshold) || this.s.colOpts.show !== !0 && Q <= 1)) {
              this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
              return;
            }
            this.dom.container.addClass(this.classes.show), this.s.displayed = !0;
          } else
            A && A.searchPanes && A.searchPanes.options && this._serverPopulate(A);
        } else
          this.s.displayed = !0;
        this._displayPane(), this.s.listSet || this.dom.dtP.on("stateLoadParams.dtsp", function(Ut, dt, Tt) {
          e.isEmptyObject(E.s.dt.state.loaded()) && e.each(Tt, function(st) {
            delete Tt[st];
          });
        }), R !== null && this.dom.panesContainer.has(R).length > 0 ? this.dom.container.insertAfter(R) : this.dom.panesContainer.prepend(this.dom.container);
        var te = e.fn.dataTable.ext.errMode;
        e.fn.dataTable.ext.errMode = "none", this.dom.dtP.on("init.dt", function(Ut, dt) {
          var Tt = E.dom.dtP.DataTable(), st = Tt.select.style();
          Tt.select.style(st);
        });
        var ie;
        if (e.fn.dataTable.versionCheck("2")) {
          var le = e.extend(!0, {}, e.fn.dataTable.defaults.layout);
          e.each(le, function(Ut, dt) {
            le[Ut] = null;
          }), ie = { layout: le };
        } else
          ie = { dom: "t" };
        this.s.dtPane = this.dom.dtP.DataTable(e.extend(!0, this._getPaneConfig(), this.c.dtOpts, this.s.colOpts ? this.s.colOpts.dtOpts : {}, this.s.colOpts.options || !this.s.colExists ? {
          createdRow: function(Ut, dt) {
            e(Ut).addClass(dt.className);
          }
        } : void 0, this.s.customPaneSettings !== null && this.s.customPaneSettings.dtOpts ? this.s.customPaneSettings.dtOpts : {}, ie)), this.dom.dtP.addClass(this.classes.table);
        var ae = "Custom Pane";
        this.s.customPaneSettings && this.s.customPaneSettings.header ? ae = this.s.customPaneSettings.header : this.s.colOpts.header ? ae = this.s.colOpts.header : this.s.colExists && (ae = e.fn.dataTable.versionCheck("2") ? this.s.dt.column(this.s.index).title() : this.s.dt.settings()[0].aoColumns[this.s.index].sTitle), ae = this._escapeHTML(ae);
        var ue = this.s.dt.i18n("searchBuilder.searchTitle", this.c.i18n.searchTitle).replace("{name}", ae);
        if (this.dom.searchBox.attr("placeholder", ae).attr("title", ue), e.fn.dataTable.ext.errMode = te, this.s.colExists)
          for (var be = 0, Me = this.s.rowData.arrayFilter.length; be < Me; be++)
            if (this.s.dt.page.info().serverSide) {
              j = this.addRow(this.s.rowData.arrayFilter[be].display, this.s.rowData.arrayFilter[be].filter, this.s.rowData.arrayFilter[be].sort, this.s.rowData.arrayFilter[be].type);
              for (var je = 0, Qe = this.s.serverSelect; je < Qe.length; je++) {
                var Lt = Qe[je];
                Lt.filter === this.s.rowData.arrayFilter[be].filter && (this.s.serverSelecting = !0, j.select(), this.s.serverSelecting = !1);
              }
            } else
              !this.s.dt.page.info().serverSide && this.s.rowData.arrayFilter[be] ? this.addRow(this.s.rowData.arrayFilter[be].display, this.s.rowData.arrayFilter[be].filter, this.s.rowData.arrayFilter[be].sort, this.s.rowData.arrayFilter[be].type) : this.s.dt.page.info().serverSide || this.addRow("", "", "", "");
        (this.s.colOpts.options || this.s.customPaneSettings && this.s.customPaneSettings.options) && this._getComparisonRows(), this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop, this.adjustTopRow(), this.setListeners(), this.s.listSet = !0;
        for (var vt = 0, Ke = D; vt < Ke.length; vt++) {
          var Fe = Ke[vt];
          if (Fe)
            for (var zt = 0, Gn = this.s.dtPane.rows().indexes().toArray(); zt < Gn.length; zt++)
              j = Gn[zt], this.s.dtPane.row(j).data() && Fe.filter === this.s.dtPane.row(j).data().filter && (this.s.dt.page.info().serverSide ? (this.s.serverSelecting = !0, this.s.dtPane.row(j).select(), this.s.serverSelecting = !1) : this.s.dtPane.row(j).select());
        }
        if (this.s.dt.page.info().serverSide && this.s.dtPane.search(this.dom.searchBox.val()).draw(), (this.c.initCollapsed && this.s.colOpts.initCollapsed !== !1 || this.s.colOpts.initCollapsed) && (this.c.collapse && this.s.colOpts.collapse !== !1 || this.s.colOpts.collapse) && (this.s.dtPane.settings()[0]._bInitComplete ? this.collapse() : this.s.dtPane.one("init", function() {
          return E.collapse();
        })), V && V.searchPanes && V.searchPanes.panes && (!A || A.draw === 1)) {
          this._reloadSelect(V);
          for (var rn = 0, Xn = V.searchPanes.panes; rn < Xn.length; rn++) {
            var ct = Xn[rn];
            ct.id === this.s.index && (ct.searchTerm && ct.searchTerm.length > 0 && this.dom.searchBox.val(ct.searchTerm).trigger("input"), ct.order && this.s.dtPane.order(ct.order).draw(), ct.collapsed ? this.collapse() : this.show());
          }
        }
        return !0;
      }, F.prototype._displayPane = function() {
        this.dom.dtP.empty(), this.dom.topRow.empty().addClass(this.classes.topRow), parseInt(this.c.layout.split("-")[1], 10) > 3 && this.dom.container.addClass(this.classes.smallGap), this.dom.topRow.addClass(this.classes.subRowsContainer).append(this.dom.upper.append(this.dom.searchCont)).append(this.dom.lower.append(this.dom.buttonGroup)), (this.c.dtOpts.searching === !1 || this.s.colOpts.dtOpts && this.s.colOpts.dtOpts.searching === !1 || !this.c.controls || !this.s.colOpts.controls || this.s.customPaneSettings && this.s.customPaneSettings.dtOpts && this.s.customPaneSettings.dtOpts.searching !== void 0 && !this.s.customPaneSettings.dtOpts.searching) && this.dom.searchBox.removeClass(this.classes.paneInputButton).addClass(this.classes.disabledButton).attr("disabled", "true"), this.dom.searchBox.appendTo(this.dom.searchCont), this._searchContSetup(), this.c.clear && this.c.controls && this.s.colOpts.controls && this.dom.clear.appendTo(this.dom.buttonGroup), this.c.orderable && this.s.colOpts.orderable && this.c.controls && this.s.colOpts.controls && this.dom.nameButton.appendTo(this.dom.buttonGroup), this.c.viewCount && this.s.colOpts.viewCount && this.c.orderable && this.s.colOpts.orderable && this.c.controls && this.s.colOpts.controls && this.dom.countButton.appendTo(this.dom.buttonGroup), (this.c.collapse && this.s.colOpts.collapse !== !1 || this.s.colOpts.collapse) && this.c.controls && this.s.colOpts.controls && this.dom.collapseButton.appendTo(this.dom.buttonGroup), this.dom.container.prepend(this.dom.topRow).append(this.dom.dtP).show();
      }, F.prototype._escapeHTML = function(D) {
        return D.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
      }, F.prototype._getBonusOptions = function() {
        var D = {
          threshold: null
        };
        return e.extend(!0, {}, F.defaults, D, this.c ? this.c : {});
      }, F.prototype._getOptions = function() {
        var D = this.s.dt, A = {
          collapse: null,
          emptyMessage: !1,
          initCollapsed: null,
          threshold: null
        }, R = D.settings()[0].aoColumns[this.s.index].searchPanes, E = e.extend(!0, {}, F.defaults, A, R);
        return R && R.hideCount && R.viewCount === void 0 && (E.viewCount = !R.hideCount), E;
      }, F.prototype._populatePane = function() {
        this.s.rowData.arrayFilter = [], this.s.rowData.bins = {};
        var D = this.s.dt.context[0];
        if (!this.s.dt.page.info().serverSide)
          for (var A = 0, R = this.s.dt.rows().indexes().toArray(); A < R.length; A++) {
            var E = R[A];
            this._populatePaneArray(E, this.s.rowData.arrayFilter, D);
          }
      }, F.prototype._search = function(D, A) {
        for (var R = this.s.colOpts, E = this.s.dt, V = 0, j = this.s.selections; V < j.length; V++) {
          var X = j[V];
          if (typeof X == "string" && typeof D == "string" && (X = this._escapeHTML(X)), Array.isArray(D)) {
            if (R.combiner === "and") {
              if (!D.includes(X))
                return !1;
            } else if (D.includes(X))
              return !0;
          } else if (typeof X == "function") {
            if (X.call(E, E.row(A).data(), A)) {
              if (R.combiner === "or")
                return !0;
            } else if (R.combiner === "and")
              return !1;
          } else if (D === X || // Loose type checking incase number type in column comparing to a string
          // eslint-disable-next-line eqeqeq
          !(typeof D == "string" && D.length === 0) && D == X || X === null && typeof D == "string" && D === "")
            return !0;
        }
        return R.combiner === "and";
      }, F.prototype._searchContSetup = function() {
        this.c.controls && this.s.colOpts.controls && this.dom.searchButton.appendTo(this.dom.searchLabelCont), this.c.dtOpts.searching === !1 || this.s.colOpts.dtOpts.searching === !1 || this.s.customPaneSettings && this.s.customPaneSettings.dtOpts && this.s.customPaneSettings.dtOpts.searching !== void 0 && !this.s.customPaneSettings.dtOpts.searching || this.dom.searchLabelCont.appendTo(this.dom.searchCont);
      }, F.prototype._searchExtras = function() {
        var D = this.s.updating;
        this.s.updating = !0;
        var A = this.s.dtPane.rows({ selected: !0 }).data().pluck("filter").toArray(), R = A.indexOf(this.emptyMessage()), E = e(this.s.dtPane.table().container());
        R > -1 && (A[R] = ""), A.length > 0 ? E.addClass(this.classes.selected) : A.length === 0 && E.removeClass(this.classes.selected), this.s.updating = D;
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
        container: function(D) {
          return D.table().container();
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
    var F = function(D, A) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(R, E) {
        R.__proto__ = E;
      } || function(R, E) {
        for (var V in E)
          E.hasOwnProperty(V) && (R[V] = E[V]);
      }, F(D, A);
    };
    return function(D, A) {
      F(D, A);
      function R() {
        this.constructor = D;
      }
      D.prototype = A === null ? Object.create(A) : (R.prototype = A.prototype, new R());
    };
  }(), a = (
    /** @class */
    function(F) {
      i(D, F);
      function D(A, R, E, V, j) {
        return F.call(this, A, R, E, V, j) || this;
      }
      return D.prototype._emptyPane = function() {
        var A = this.s.dtPane;
        if (I.versionCheck("2")) {
          var R = A.select.last(), E;
          return R && A.row(R.row).any() && (E = A.row(R.row).data().index), A.rows().remove(), function() {
            if (E !== void 0) {
              var V = A.row(function(j, X) {
                return X.index === E;
              }).index();
              A.select.last({ row: V, column: 0 });
            }
          };
        }
        return A.rows().remove(), function() {
        };
      }, D.prototype._serverPopulate = function(A) {
        var R, E, V;
        this.s.rowData.binsShown = {}, this.s.rowData.arrayFilter = [], A.tableLength !== void 0 ? (this.s.tableLength = A.tableLength, this.s.rowData.totalOptions = this.s.tableLength) : (this.s.tableLength === null || this.s.dt.rows()[0].length > this.s.tableLength) && (this.s.tableLength = this.s.dt.rows()[0].length, this.s.rowData.totalOptions = this.s.tableLength);
        var j = this.s.dt.column(this.s.index).dataSrc();
        if (A.searchPanes.options[j] !== void 0)
          for (var X = 0, Z = A.searchPanes.options[j]; X < Z.length; X++) {
            var Q = Z[X];
            this.s.rowData.arrayFilter.push({
              display: Q.label,
              filter: Q.value,
              shown: +Q.count,
              sort: Q.label,
              total: +Q.total,
              type: Q.label
            }), this.s.rowData.binsShown[Q.value] = +Q.count, this.s.rowData.bins[Q.value] = +Q.total;
          }
        var ee = Object.keys(this.s.rowData.bins).length, te = this._uniqueRatio(ee, this.s.tableLength);
        if (!this.s.colOpts.show && this.s.displayed === !1 && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? te > this.c.threshold : te > this.s.colOpts.threshold) || this.s.colOpts.show !== !0 && ee <= 1)) {
          this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
          return;
        }
        if (this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins, this.s.displayed = !0, this.s.dtPane) {
          for (var ie = this.s.serverSelect, le = this._emptyPane(), ae = 0, ue = this.s.rowData.arrayFilter; ae < ue.length; ae++)
            if (V = ue[ae], this._shouldAddRow(V)) {
              E = this.addRow(V.display, V.filter, V.sort, V.type);
              for (var be = 0; be < ie.length; be++)
                if (R = ie[be], R.filter === V.filter) {
                  this.s.serverSelecting = !0, E.select(), this.s.serverSelecting = !1, ie.splice(be, 1), this.s.selections.push(V.filter);
                  break;
                }
            }
          for (var Me = 0, je = ie; Me < je.length; Me++) {
            R = je[Me];
            for (var Qe = 0, Lt = this.s.rowData.arrayOriginal; Qe < Lt.length; Qe++)
              V = Lt[Qe], V.filter === R.filter && (E = this.addRow(V.display, V.filter, V.sort, V.type), this.s.serverSelecting = !0, E.select(), this.s.serverSelecting = !1, this.s.selections.push(V.filter));
          }
          this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray(), this.s.dtPane.draw(), le();
        }
      }, D.prototype.updateRows = function() {
        if (!this.s.dt.page.info().serverSide) {
          this.s.rowData.binsShown = {};
          for (var A = 0, R = this.s.dt.rows({ search: "applied" }).indexes().toArray(); A < R.length; A++) {
            var E = R[A];
            this._updateShown(E, this.s.dt.settings()[0], this.s.rowData.binsShown);
          }
        }
        for (var V = function(ee) {
          ee.shown = typeof j.s.rowData.binsShown[ee.filter] == "number" ? j.s.rowData.binsShown[ee.filter] : 0, j.s.dtPane.row(function(te, ie) {
            return ie && ie.index === ee.index;
          }).data(ee);
        }, j = this, X = 0, Z = this.s.dtPane.rows().data().toArray(); X < Z.length; X++) {
          var Q = Z[X];
          V(Q);
        }
        this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop;
      }, D.prototype._makeSelection = function() {
      }, D.prototype._reloadSelect = function() {
      }, D.prototype._shouldAddRow = function(A) {
        return !0;
      }, D.prototype._updateSelection = function() {
        this.s.dt.page.info().serverSide && !this.s.updating && !this.s.serverSelecting && (this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray());
      }, D.prototype._updateShown = function(A, R, E) {
        E === void 0 && (E = this.s.rowData.binsShown);
        var V = typeof this.s.colOpts.orthogonal == "string" ? this.s.colOpts.orthogonal : this.s.colOpts.orthogonal.search, j = R.fastData ? R.fastData : function(ie, le, ae) {
          return R.oApi._fnGetCellData(R, ie, le, ae);
        }, X = j(A, this.s.index, V), Z = function(ie) {
          E[ie] ? E[ie]++ : E[ie] = 1;
        };
        if (Array.isArray(X))
          for (var Q = 0, ee = X; Q < ee.length; Q++) {
            var te = ee[Q];
            Z(te);
          }
        else
          Z(X);
      }, D;
    }(r)
  ), o = window && window.__extends || /* @__PURE__ */ function() {
    var F = function(D, A) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(R, E) {
        R.__proto__ = E;
      } || function(R, E) {
        for (var V in E)
          E.hasOwnProperty(V) && (R[V] = E[V]);
      }, F(D, A);
    };
    return function(D, A) {
      F(D, A);
      function R() {
        this.constructor = D;
      }
      D.prototype = A === null ? Object.create(A) : (R.prototype = A.prototype, new R());
    };
  }(), c;
  function h(F) {
    c = F;
  }
  var m = (
    /** @class */
    function(F) {
      o(D, F);
      function D(A, R, E, V, j) {
        var X = this, Z = {
          i18n: {
            countFiltered: "{shown} ({total})"
          }
        };
        return X = F.call(this, A, c.extend(Z, R), E, V, j) || this, X;
      }
      return D.prototype._getMessage = function(A) {
        var R = this.s.dt.i18n("searchPanes.count", this.c.i18n.count), E = this.s.dt.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered);
        return (this.s.filteringActive ? E : R).replace(/{total}/g, A.total).replace(/{shown}/g, A.shown);
      }, D.prototype._getShown = function(A) {
        return this.s.rowData.binsShown && this.s.rowData.binsShown[A] ? this.s.rowData.binsShown[A] : 0;
      }, D;
    }(a)
  ), g = window && window.__extends || /* @__PURE__ */ function() {
    var F = function(D, A) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(R, E) {
        R.__proto__ = E;
      } || function(R, E) {
        for (var V in E)
          E.hasOwnProperty(V) && (R[V] = E[V]);
      }, F(D, A);
    };
    return function(D, A) {
      F(D, A);
      function R() {
        this.constructor = D;
      }
      D.prototype = A === null ? Object.create(A) : (R.prototype = A.prototype, new R());
    };
  }(), _;
  function w(F) {
    _ = F;
  }
  var C = (
    /** @class */
    function(F) {
      g(D, F);
      function D(A, R, E, V, j) {
        var X = this, Z = {
          i18n: {
            count: "{shown}"
          }
        };
        return X = F.call(this, A, _.extend(Z, R), E, V, j) || this, X;
      }
      return D.prototype.updateRows = function() {
        var A = this.s.dtPane.rows({ selected: !0 }).data().toArray(), R;
        if (this.s.colOpts.options || this.s.customPaneSettings && this.s.customPaneSettings.options) {
          this._getComparisonRows();
          for (var E = this.s.dtPane.rows().toArray()[0], V = 0; V < E.length; V++) {
            var j = this.s.dtPane.row(E[V]), X = j.data();
            if (X !== void 0) {
              if (X.shown === 0) {
                j.remove(), E = this.s.dtPane.rows().toArray()[0], V--;
                continue;
              }
              for (var Z = 0, Q = A; Z < Q.length; Z++)
                if (R = Q[Z], X.filter === R.filter) {
                  j.select(), A.splice(V, 1), this.s.selections.push(X.filter);
                  break;
                }
            }
          }
        } else {
          if (!this.s.dt.page.info().serverSide) {
            this._activePopulatePane(), this.s.rowData.binsShown = {};
            for (var ee = 0, te = this.s.dt.rows({ search: "applied" }).indexes().toArray(); ee < te.length; ee++) {
              var ie = te[ee];
              this._updateShown(ie, this.s.dt.settings()[0], this.s.rowData.binsShown);
            }
          }
          this.s.dtPane.rows().remove();
          for (var le = 0, ae = this.s.rowData.arrayFilter; le < ae.length; le++) {
            var ue = ae[le];
            if (ue.shown !== 0)
              for (var be = this.addRow(ue.display, ue.filter, ue.sort, ue.type, void 0), Me = 0; Me < A.length; Me++) {
                var je = A[Me];
                if (je.filter === ue.filter) {
                  be.select(), A.splice(Me, 1), this.s.selections.push(ue.filter);
                  break;
                }
              }
          }
          for (var Qe = 0, Lt = A; Qe < Lt.length; Qe++) {
            R = Lt[Qe];
            for (var vt = 0, Ke = this.s.rowData.arrayOriginal; vt < Ke.length; vt++) {
              var Fe = Ke[vt];
              if (Fe.filter === R.filter) {
                var zt = this.addRow(Fe.display, Fe.filter, Fe.sort, Fe.type, void 0);
                zt.select(), this.s.selections.push(Fe.filter);
              }
            }
          }
        }
        this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop, this.s.dt.page.info().serverSide || this.s.dt.draw(!1);
      }, D.prototype._activePopulatePane = function() {
        this.s.rowData.arrayFilter = [], this.s.rowData.bins = {};
        var A = this.s.dt.settings()[0];
        if (!this.s.dt.page.info().serverSide)
          for (var R = 0, E = this.s.dt.rows({ search: "applied" }).indexes().toArray(); R < E.length; R++) {
            var V = E[R];
            this._populatePaneArray(V, this.s.rowData.arrayFilter, A);
          }
      }, D.prototype._getComparisonRows = function() {
        var A = this.s.colOpts.options ? this.s.colOpts.options : this.s.customPaneSettings && this.s.customPaneSettings.options ? this.s.customPaneSettings.options : void 0;
        if (A !== void 0) {
          var R = this.s.dt.rows(), E = this.s.dt.rows({ search: "applied" }), V = R.data().toArray(), j = E.data().toArray(), X = [];
          this.s.dtPane.clear(), this.s.indexes = [];
          for (var Z = 0, Q = A; Z < Q.length; Z++) {
            var ee = Q[Z], te = ee.label !== "" ? ee.label : this.emptyMessage(), ie = {
              className: ee.className,
              display: te,
              filter: typeof ee.value == "function" ? ee.value : [],
              shown: 0,
              sort: te,
              total: 0,
              type: te
            };
            if (typeof ee.value == "function") {
              for (var le = 0; le < V.length; le++)
                ee.value.call(this.s.dt, V[le], R[0][le]) && ie.total++;
              for (var ae = 0; ae < j.length; ae++)
                ee.value.call(this.s.dt, j[ae], E[0][ae]) && ie.shown++;
              typeof ie.filter != "function" && ie.filter.push(ee.filter);
            }
            X.push(this.addRow(ie.display, ie.filter, ie.sort, ie.type, ie.className, ie.total, ie.shown));
          }
          return X;
        }
      }, D.prototype._getMessage = function(A) {
        return this.s.dt.i18n("searchPanes.count", this.c.i18n.count).replace(/{total}/g, A.total).replace(/{shown}/g, A.shown);
      }, D.prototype._getShown = function(A) {
        return this.s.rowData.binsShown && this.s.rowData.binsShown[A] ? this.s.rowData.binsShown[A] : 0;
      }, D.prototype._shouldAddRow = function(A) {
        return A.shown > 0;
      }, D;
    }(a)
  ), k = window && window.__extends || /* @__PURE__ */ function() {
    var F = function(D, A) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(R, E) {
        R.__proto__ = E;
      } || function(R, E) {
        for (var V in E)
          E.hasOwnProperty(V) && (R[V] = E[V]);
      }, F(D, A);
    };
    return function(D, A) {
      F(D, A);
      function R() {
        this.constructor = D;
      }
      D.prototype = A === null ? Object.create(A) : (R.prototype = A.prototype, new R());
    };
  }(), S;
  function v(F) {
    S = F;
  }
  var l = (
    /** @class */
    function(F) {
      k(D, F);
      function D(A, R, E, V, j) {
        var X = this, Z = {
          i18n: {
            count: "{total}",
            countFiltered: "{shown} ({total})"
          }
        };
        return X = F.call(this, A, S.extend(Z, R), E, V, j) || this, X;
      }
      return D.prototype._activePopulatePane = function() {
        this.s.rowData.arrayFilter = [], this.s.rowData.binsShown = {};
        var A = this.s.dt.settings()[0];
        if (!this.s.dt.page.info().serverSide)
          for (var R = 0, E = this.s.dt.rows({ search: "applied" }).indexes().toArray(); R < E.length; R++) {
            var V = E[R];
            this._populatePaneArray(V, this.s.rowData.arrayFilter, A, this.s.rowData.binsShown);
          }
      }, D.prototype._getMessage = function(A) {
        var R = this.s.dt.i18n("searchPanes.count", this.c.i18n.count), E = this.s.dt.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered);
        return (this.s.filteringActive ? E : R).replace(/{total}/g, A.total).replace(/{shown}/g, A.shown);
      }, D;
    }(C)
  ), d, y;
  function P(F) {
    d = F, y = F.fn.dataTable;
  }
  var N = (
    /** @class */
    function() {
      function F(D, A, R, E) {
        var V = this;
        if (R === void 0 && (R = !1), E === void 0 && (E = r), !y || !y.versionCheck || !y.versionCheck("1.10.0"))
          throw new Error("SearchPane requires DataTables 1.10 or newer");
        if (!y.select)
          throw new Error("SearchPane requires Select");
        var j = new y.Api(D);
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
          paneClass: E,
          panes: [],
          selectionList: [],
          serverData: {},
          stateRead: !1,
          updating: !1
        }, !j.settings()[0]._searchPanes) {
          if (d(document).on("draw.dt", function(Z) {
            V.dom.container.find(Z.target).length && V._updateFilterCount();
          }), this._getState(), this.s.dt.page.info().serverSide) {
            var X = this.s.dt.settings()[0];
            this.s.dt.on("preXhr.dtsps", function(Z, Q, ee) {
              if (X === Q) {
                ee.searchPanes === void 0 && (ee.searchPanes = {}), ee.searchPanes_null === void 0 && (ee.searchPanes_null = {});
                for (var te, ie = 0, le = V.s.selectionList; ie < le.length; ie++) {
                  var ae = le[ie];
                  te = V.s.dt.column(ae.column).dataSrc(), ee.searchPanes[te] === void 0 && (ee.searchPanes[te] = {}), ee.searchPanes_null[te] === void 0 && (ee.searchPanes_null[te] = {});
                  for (var ue = 0; ue < ae.rows.length; ue++)
                    ee.searchPanes[te][ue] = ae.rows[ue], ee.searchPanes[te][ue] === null ? ee.searchPanes_null[te][ue] = !0 : ee.searchPanes_null[te][ue] = !1;
                }
                V.s.selectionList.length > 0 && (ee.searchPanesLast = te), ee.searchPanes_options = {
                  cascade: V.c.cascadePanes,
                  viewCount: V.c.viewCount,
                  viewTotal: V.c.viewTotal
                };
              }
            });
          }
          return this._setXHR(), j.settings()[0]._searchPanes = this, this.s.dt.settings()[0]._bInitComplete || R ? this._paneDeclare(j, D, A) : j.one("preInit.dtsps", function() {
            V._paneDeclare(j, D, A);
          }), this;
        }
      }
      return F.prototype.clearSelections = function() {
        for (var D, A = 0, R = this.s.panes; A < R.length; A++)
          D = R[A], D.s.dtPane && (D.s.scrollTop = D.s.dtPane.table().node().parentNode.scrollTop);
        var E = this.dom.container.find("." + this.classes.search.replace(/\s+/g, "."));
        E.each(function() {
          d(this).val("").trigger("input");
        }), this.s.selectionList = [];
        for (var V = [], j = 0, X = this.s.panes; j < X.length; j++)
          D = X[j], D.s.dtPane && V.push(D.clearPane());
        return V;
      }, F.prototype.getNode = function() {
        return this.dom.container;
      }, F.prototype.rebuild = function(D, A) {
        D === void 0 && (D = !1), A === void 0 && (A = !1), this.dom.emptyMessage.detach(), D === !1 && this.dom.panes.empty();
        for (var R = [], E = 0, V = this.s.panes; E < V.length; E++) {
          var j = V[E];
          (D === !1 || j.s.index === D) && (j.clearData(), j.rebuildPane(this.s.dt.page.info().serverSide ? this.s.serverData : void 0, A), this.dom.panes.append(j.dom.container), R.push(j));
        }
        return this._updateSelection(), this._updateFilterCount(), this._attachPaneContainer(), this._initSelectionListeners(!1), this.s.dt.draw(!A), this.resizePanes(), R.length === 1 ? R[0] : R;
      }, F.prototype.resizePanes = function() {
        var D;
        if (this.c.layout === "auto") {
          for (var A = d(this.s.dt.searchPanes.container()).width(), R = Math.floor(A / this.s.minPaneWidth), E = 1, V = 0, j = [], X = 0, Z = this.s.panes; X < Z.length; X++)
            D = Z[X], D.s.displayed && j.push(D.s.index);
          var Q = j.length;
          if (R === Q)
            E = R;
          else
            for (var ee = R; ee > 1; ee--) {
              var te = Q % ee;
              if (te === 0) {
                E = ee, V = 0;
                break;
              } else
                te > V && (E = ee, V = te);
            }
          var ie = V !== 0 ? j.slice(j.length - V, j.length) : [];
          this.s.panes.forEach(function(ue) {
            ue.s.displayed && ue.resize("columns-" + (ie.includes(ue.s.index) ? V : E));
          });
        } else
          for (var le = 0, ae = this.s.panes; le < ae.length; le++)
            D = ae[le], D.adjustTopRow();
        return this;
      }, F.prototype._initSelectionListeners = function(D) {
      }, F.prototype._serverTotals = function() {
      }, F.prototype._setXHR = function() {
        var D = this, A = this.s.dt.settings()[0], R = function(E) {
          E && E.searchPanes && E.searchPanes.options && (D.s.serverData = E, D.s.serverData.tableLength = E.recordsTotal, D._serverTotals());
        };
        this.s.dt.on("xhr.dtsps", function(E, V, j) {
          A === V && R(j);
        }), R(this.s.dt.ajax.json());
      }, F.prototype._stateLoadListener = function() {
        var D = this, A = this.s.dt.settings()[0];
        this.s.dt.on("stateLoadParams.dtsps", function(R, E, V) {
          if (!(V.searchPanes === void 0 || E !== A)) {
            if (D.clearSelections(), D.s.selectionList = V.searchPanes.selectionList ? V.searchPanes.selectionList : [], V.searchPanes.panes)
              for (var j = 0, X = V.searchPanes.panes; j < X.length; j++)
                for (var Z = X[j], Q = 0, ee = D.s.panes; Q < ee.length; Q++) {
                  var te = ee[Q];
                  Z.id === te.s.index && te.s.dtPane && (te.dom.searchBox.val(Z.searchTerm), te.s.dtPane.order(Z.order));
                }
            D._makeSelections(D.s.selectionList);
          }
        });
      }, F.prototype._updateSelection = function() {
        this.s.selectionList = [];
        for (var D = 0, A = this.s.panes; D < A.length; D++) {
          var R = A[D];
          if (R.s.dtPane) {
            var E = R.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(V) {
              return V.filter;
            });
            E.length && this.s.selectionList.push({
              column: R.s.index,
              rows: E
            });
          }
        }
      }, F.prototype._attach = function() {
        var D = this;
        this.dom.titleRow.removeClass(this.classes.hide).detach().append(this.dom.title), this.c.clear && this.dom.clearAll.appendTo(this.dom.titleRow).off("click.dtsps").on("click.dtsps", function() {
          return D.clearSelections();
        }), this.c.collapse && (this.dom.showAll.appendTo(this.dom.titleRow), this.dom.collapseAll.appendTo(this.dom.titleRow), this._setCollapseListener());
        for (var A = 0, R = this.s.panes; A < R.length; A++) {
          var E = R[A];
          this.dom.panes.append(E.dom.container);
        }
        this.dom.container[0].childNodes.forEach(function(V) {
          return V.remove();
        }), this.dom.container.removeClass(this.classes.hide).append(this.dom.titleRow).append(this.dom.panes), this.s.panes.forEach(function(V) {
          return V.setListeners();
        }), d("div." + this.classes.container).length === 0 && this.dom.container.prependTo(this.s.dt);
      }, F.prototype._attachMessage = function() {
        var D;
        try {
          D = this.s.dt.i18n("searchPanes.emptyPanes", this.c.i18n.emptyPanes);
        } catch {
          D = null;
        }
        if (D === null) {
          this.dom.container.addClass(this.classes.hide), this.dom.titleRow.removeClass(this.classes.hide);
          return;
        }
        this.dom.container.removeClass(this.classes.hide), this.dom.titleRow.addClass(this.classes.hide), this.dom.emptyMessage.html(D).appendTo(this.dom.container);
      }, F.prototype._attachPaneContainer = function() {
        for (var D = 0, A = this.s.panes; D < A.length; D++) {
          var R = A[D];
          if (R.s.displayed === !0) {
            this._attach();
            return;
          }
        }
        this._attachMessage();
      }, F.prototype._checkCollapse = function() {
        for (var D = !0, A = !0, R = 0, E = this.s.panes; R < E.length; R++) {
          var V = E[R];
          V.s.displayed && (V.dom.collapseButton.hasClass(V.classes.rotated) ? (this.dom.showAll.removeClass(this.classes.disabledButton).removeAttr("disabled"), A = !1) : (this.dom.collapseAll.removeClass(this.classes.disabledButton).removeAttr("disabled"), D = !1));
        }
        D && this.dom.collapseAll.addClass(this.classes.disabledButton).attr("disabled", "true"), A && this.dom.showAll.addClass(this.classes.disabledButton).attr("disabled", "true");
      }, F.prototype._checkMessage = function() {
        for (var D = 0, A = this.s.panes; D < A.length; D++) {
          var R = A[D];
          if (R.s.displayed === !0) {
            this.dom.emptyMessage.detach(), this.dom.titleRow.removeClass(this.classes.hide);
            return;
          }
        }
        this._attachMessage();
      }, F.prototype._collapseAll = function() {
        for (var D = 0, A = this.s.panes; D < A.length; D++) {
          var R = A[D];
          R.collapse();
        }
      }, F.prototype._findPane = function(D) {
        for (var A = 0, R = this.s.panes; A < R.length; A++) {
          var E = R[A];
          if (D === E.s.name)
            return E;
        }
      }, F.prototype._getState = function() {
        var D = this.s.dt.state.loaded();
        D && D.searchPanes && D.searchPanes.selectionList && (this.s.selectionList = D.searchPanes.selectionList);
      }, F.prototype._makeSelections = function(D) {
        for (var A = 0, R = D; A < R.length; A++) {
          for (var E = R[A], V = void 0, j = 0, X = this.s.panes; j < X.length; j++) {
            var Z = X[j];
            if (Z.s.index === E.column) {
              V = Z;
              break;
            }
          }
          if (V && V.s.dtPane) {
            for (var Q = 0; Q < V.s.dtPane.rows().data().toArray().length; Q++)
              E.rows.includes(typeof V.s.dtPane.row(Q).data().filter == "function" ? V.s.dtPane.cell(Q, 0).data() : V.s.dtPane.row(Q).data().filter) && V.s.dtPane.row(Q).select();
            V.updateTable();
          }
        }
      }, F.prototype._paneDeclare = function(D, A, R) {
        var E = this;
        D.columns(this.c.columns.length > 0 ? this.c.columns : void 0).eq(0).each(function(Z) {
          E.s.panes.push(new E.s.paneClass(A, R, Z, E.dom.panes));
        });
        for (var V = D.columns().eq(0).toArray().length, j = 0; j < this.c.panes.length; j++) {
          var X = V + j;
          this.s.panes.push(new this.s.paneClass(A, R, X, this.dom.panes, this.c.panes[j]));
        }
        this.c.order.length > 0 && (this.s.panes = this.c.order.map(function(Z) {
          return E._findPane(Z);
        })), this.s.dt.settings()[0]._bInitComplete ? this._startup(D) : y.versionCheck("2") ? this.s.dt.settings()[0].aoInitComplete.push(function() {
          return E._startup(D);
        }) : this.s.dt.settings()[0].aoInitComplete.push({
          fn: function() {
            return E._startup(D);
          }
        });
      }, F.prototype._setCollapseListener = function() {
        var D = this;
        this.dom.collapseAll.off("click.dtsps").on("click.dtsps", function() {
          D._collapseAll(), D.dom.collapseAll.addClass(D.classes.disabledButton).attr("disabled", "true"), D.dom.showAll.removeClass(D.classes.disabledButton).removeAttr("disabled"), D.s.dt.state.save();
        }), this.dom.showAll.off("click.dtsps").on("click.dtsps", function() {
          D._showAll(), D.dom.showAll.addClass(D.classes.disabledButton).attr("disabled", "true"), D.dom.collapseAll.removeClass(D.classes.disabledButton).removeAttr("disabled"), D.s.dt.state.save();
        });
        for (var A = 0, R = this.s.panes; A < R.length; A++) {
          var E = R[A];
          E.dom.topRow.off("collapse.dtsps").on("collapse.dtsps", function() {
            return D._checkCollapse();
          });
        }
        this._checkCollapse();
      }, F.prototype._showAll = function() {
        for (var D = 0, A = this.s.panes; D < A.length; D++) {
          var R = A[D];
          R.show();
        }
      }, F.prototype._startup = function(D) {
        var A = this;
        this._attach(), this.dom.panes.empty();
        for (var R = this.s.dt.settings()[0], E = 0, V = this.s.panes; E < V.length; E++) {
          var j = V[E];
          j.rebuildPane(Object.keys(this.s.serverData).length > 0 ? this.s.serverData : void 0), this.dom.panes.append(j.dom.container);
        }
        this.c.layout === "auto" && this.resizePanes();
        var X = this.s.dt.state.loaded();
        !this.s.stateRead && X && this.s.dt.page(X.start / this.s.dt.page.len()).draw("page"), this.s.stateRead = !0, this._checkMessage(), D.on("preDraw.dtsps", function() {
          !A.s.updating && !A.s.paging && (A._updateFilterCount(), A._updateSelection()), A.s.paging = !1;
        }), d(window).on("resize.dtsps", y.util.throttle(function() {
          return A.resizePanes();
        })), this.s.dt.on("stateSaveParams.dtsps", function(Q, ee, te) {
          ee === R && (te.searchPanes === void 0 && (te.searchPanes = {}), te.searchPanes.selectionList = A.s.selectionList);
        }), this._stateLoadListener(), D.off("page.dtsps page-nc.dtsps").on("page.dtsps page-nc.dtsps", function(Q, ee) {
          A.s.paging = !0, A.s.pagingST = !0, A.s.page = A.s.dt.page();
        }), this.s.dt.page.info().serverSide ? D.off("preXhr.dtsps").on("preXhr.dtsps", function(Q, ee, te) {
          if (ee === R) {
            te.searchPanes || (te.searchPanes = {}), te.searchPanes_null || (te.searchPanes_null = {});
            for (var ie = 0, le = 0, ae = A.s.panes; le < ae.length; le++) {
              var ue = ae[le], be = A.s.dt.column(ue.s.index).dataSrc();
              if (te.searchPanes[be] || (te.searchPanes[be] = {}), te.searchPanes_null[be] || (te.searchPanes_null[be] = {}), ue.s.dtPane)
                for (var Me = ue.s.dtPane.rows({ selected: !0 }).data().toArray(), je = 0; je < Me.length; je++)
                  te.searchPanes[be][je] = Me[je].filter, te.searchPanes[be][je] ? te.searchPanes_null[be][je] = !1 : te.searchPanes_null[be][je] = !0, ie++;
            }
            ie > 0 && (ie !== A.s.filterCount && (te.start = 0, A.s.page = 0, A.s.dt.page(A.s.page)), A.s.filterCount = ie), A.s.selectionList.length > 0 && (te.searchPanesLast = A.s.dt.column(A.s.selectionList[A.s.selectionList.length - 1].column).dataSrc()), te.searchPanes_options = {
              cascade: A.c.cascadePanes,
              viewCount: A.c.viewCount,
              viewTotal: A.c.viewTotal
            };
          }
        }) : D.on("preXhr.dtsps", function() {
          return A.s.panes.forEach(function(Q) {
            return Q.clearData();
          });
        }), this.s.dt.on("xhr.dtsps", function(Q, ee) {
          if (ee.nTable === A.s.dt.table().node() && !A.s.dt.page.info().serverSide) {
            var te = !1;
            A.s.dt.one("preDraw.dtsps", function() {
              if (!te) {
                var ie = A.s.dt.page();
                te = !0, A.s.updating = !0, A.dom.panes.empty();
                for (var le = 0, ae = A.s.panes; le < ae.length; le++) {
                  var ue = ae[le];
                  ue.clearData(), ue.rebuildPane(void 0, !0), A.dom.panes.append(ue.dom.container);
                }
                A.s.dt.page.info().serverSide || A.s.dt.draw(), A.s.updating = !1, A._updateSelection(), A._checkMessage(), A.s.dt.one("draw.dtsps", function() {
                  A.s.updating = !0, A.s.dt.page(ie).draw(!1), A.s.updating = !1;
                });
              }
            });
          }
        });
        var Z = this.c.preSelect;
        X && X.searchPanes && X.searchPanes.selectionList && (Z = X.searchPanes.selectionList), this._makeSelections(Z), this._updateFilterCount(), D.on("destroy.dtsps", function(Q, ee) {
          if (ee === R) {
            for (var te = 0, ie = A.s.panes; te < ie.length; te++) {
              var le = ie[te];
              le.destroy();
            }
            D.off(".dtsps"), A.dom.showAll.off(".dtsps"), A.dom.clearAll.off(".dtsps"), A.dom.collapseAll.off(".dtsps"), d(D.table().node()).off(".dtsps"), A.dom.container.detach(), A.clearSelections();
          }
        }), this.c.collapse && this._setCollapseListener(), this.c.clear && this.dom.clearAll.off("click.dtsps").on("click.dtsps", function() {
          return A.clearSelections();
        }), R._searchPanes = this, this.s.dt.state.save();
      }, F.prototype._updateFilterCount = function() {
        for (var D = 0, A = 0, R = 0, E = this.s.panes; R < E.length; R++) {
          var V = E[R];
          V.s.dtPane && (D += V.getPaneCount(), V.s.dtPane.search() && A++);
        }
        this.dom.title.html(this.s.dt.i18n("searchPanes.title", this.c.i18n.title, D)), this.c.filterChanged && typeof this.c.filterChanged == "function" && this.c.filterChanged.call(this.s.dt, D), D === 0 && A === 0 ? this.dom.clearAll.addClass(this.classes.disabledButton).attr("disabled", "true") : this.dom.clearAll.removeClass(this.classes.disabledButton).removeAttr("disabled");
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
        container: function(D) {
          return D.table().container();
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
  ), p = window && window.__extends || /* @__PURE__ */ function() {
    var F = function(D, A) {
      return F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(R, E) {
        R.__proto__ = E;
      } || function(R, E) {
        for (var V in E)
          E.hasOwnProperty(V) && (R[V] = E[V]);
      }, F(D, A);
    };
    return function(D, A) {
      F(D, A);
      function R() {
        this.constructor = D;
      }
      D.prototype = A === null ? Object.create(A) : (R.prototype = A.prototype, new R());
    };
  }(), M = (
    /** @class */
    function(F) {
      p(D, F);
      function D(A, R, E) {
        E === void 0 && (E = !1);
        var V = this, j;
        R.cascadePanes && R.viewTotal ? j = l : R.cascadePanes ? j = C : R.viewTotal && (j = m), V = F.call(this, A, R, E, j) || this;
        var X = V.s.dt, Z = X.state.loaded(), Q = function() {
          return V._initSelectionListeners(!0, Z && Z.searchPanes && Z.searchPanes.selectionList ? Z.searchPanes.selectionList : V.c.preSelect);
        };
        return X.settings()[0]._bInitComplete ? Q() : X.off("init.dtsps").on("init.dtsps", Q), V;
      }
      return D.prototype._initSelectionListeners = function(A, R) {
        A === void 0 && (A = !0), R === void 0 && (R = []), A && (this.s.selectionList = R);
        for (var E = 0, V = this.s.panes; E < V.length; E++) {
          var j = V[E];
          j.s.displayed && j.s.dtPane.off("select.dtsp").on("select.dtsp", this._update(j)).off("deselect.dtsp").on("deselect.dtsp", this._updateTimeout(j));
        }
        this.s.dt.off("draw.dtsps").on("draw.dtsps", this._update()), this._updateSelectionList();
      }, D.prototype._serverTotals = function() {
        for (var A = 0, R = this.s.panes; A < R.length; A++) {
          var E = R[A];
          if (E.s.colOpts.show) {
            var V = this.s.dt.column(E.s.index).dataSrc(), j = !0;
            if (this.s.serverData.searchPanes.options[V])
              for (var X = 0, Z = this.s.serverData.searchPanes.options[V]; X < Z.length; X++) {
                var Q = Z[X];
                if (Q.total !== Q.count) {
                  j = !1;
                  break;
                }
              }
            E.s.filteringActive = !j, E._serverPopulate(this.s.serverData);
          }
        }
      }, D.prototype._stateLoadListener = function() {
        var A = this, R = function(E, V, j) {
          if (j.searchPanes !== void 0) {
            if (A.s.selectionList = j.searchPanes.selectionList ? j.searchPanes.selectionList : [], j.searchPanes.panes)
              for (var X = 0, Z = j.searchPanes.panes; X < Z.length; X++)
                for (var Q = Z[X], ee = 0, te = A.s.panes; ee < te.length; ee++) {
                  var ie = te[ee];
                  Q.id === ie.s.index && ie.s.dtPane && (ie.dom.searchBox.val(Q.searchTerm), ie.s.dtPane.order(Q.order));
                }
            A._updateSelectionList();
          }
        };
        this.s.dt.off("stateLoadParams.dtsps", R).on("stateLoadParams.dtsps", R);
      }, D.prototype._updateSelection = function() {
      }, D.prototype._update = function(A) {
        var R = this;
        return A === void 0 && (A = void 0), function() {
          A && clearTimeout(A.s.deselectTimeout), R._updateSelectionList(A);
        };
      }, D.prototype._updateTimeout = function(A) {
        var R = this;
        return A === void 0 && (A = void 0), function() {
          return A ? A.s.deselectTimeout = setTimeout(function() {
            return R._updateSelectionList(A);
          }, 50) : R._updateSelectionList();
        };
      }, D.prototype._updateSelectionList = function(A) {
        if (A === void 0 && (A = void 0), this.s.pagingST) {
          this.s.pagingST = !1;
          return;
        } else if (this.s.updating || A && A.s.serverSelecting)
          return;
        if (A !== void 0) {
          this.s.dt.page.info().serverSide && A._updateSelection();
          var R = A.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(E) {
            return E.filter;
          });
          this.s.selectionList = this.s.selectionList.filter(function(E) {
            return E.column !== A.s.index;
          }), R.length > 0 ? (this.s.selectionList.push({
            column: A.s.index,
            rows: R
          }), A.dom.clear.removeClass(this.classes.disabledButton).removeAttr("disabled")) : A.dom.clear.addClass(this.classes.disabledButton).attr("disabled", "true"), this.s.dt.page.info().serverSide && this.s.dt.draw(!1);
        }
        this._remakeSelections(), this._updateFilterCount();
      }, D.prototype._remakeSelections = function() {
        var A, R;
        if (this.s.updating = !0, this.s.dt.page.info().serverSide) {
          this.s.selectionList.length > 0 && (R = this.s.panes[this.s.selectionList[this.s.selectionList.length - 1].column]);
          for (var dt = 0, Tt = this.s.panes; dt < Tt.length; dt++)
            A = Tt[dt], A.s.displayed && (!R || A.s.index !== R.s.index) && A.updateRows();
        } else {
          var E = this.s.selectionList, V = !1;
          this.clearSelections(), this.s.dt.draw(!1), this.s.dt.rows().toArray()[0].length > this.s.dt.rows({ search: "applied" }).toArray()[0].length && (V = !0), this.s.selectionList = E;
          for (var j = 0, X = this.s.panes; j < X.length; j++)
            R = X[j], R.s.displayed && (R.s.filteringActive = V, R.updateRows());
          for (var Z = 0, Q = this.s.selectionList; Z < Q.length; Z++) {
            var ee = Q[Z];
            R = null;
            for (var te = 0, ie = this.s.panes; te < ie.length; te++) {
              var le = ie[te];
              if (le.s.index === ee.column) {
                R = le;
                break;
              }
            }
            if (R.s.dtPane) {
              for (var ae = R.s.dtPane.rows().indexes().toArray(), ue = 0; ue < ee.rows.length; ue++) {
                for (var be = !1, Me = 0, je = ae; Me < je.length; Me++) {
                  var Qe = je[Me], Lt = R.s.dtPane.row(Qe), vt = Lt.data();
                  ee.rows[ue] === vt.filter && (Lt.select(), be = !0);
                }
                be || (ee.rows.splice(ue, 1), ue--);
              }
              if (R.s.selections = ee.rows, ee.rows.length !== 0) {
                this.s.dt.draw();
                for (var Ke = !1, Fe = 0, zt = 0, Gn = 0, rn = 0, Xn = this.s.panes; rn < Xn.length; rn++)
                  A = Xn[rn], A.s.dtPane && (Fe += A.getPaneCount(), Fe > zt && (Gn++, zt = Fe));
                Ke = Fe > 0;
                for (var ct = 0, Ut = this.s.panes; ct < Ut.length; ct++)
                  A = Ut[ct], A.s.displayed && (V || R.s.index !== A.s.index || !Ke ? A.s.filteringActive = Ke || V : Gn === 1 && (A.s.filteringActive = !1), A.s.index !== R.s.index && A.updateRows());
              }
            }
          }
          this.s.dt.draw(!1);
        }
        this.s.updating = !1;
      }, D;
    }(N)
  );
  /*! SearchPanes 2.3.5
   * © SpryMedia Ltd - datatables.net/license
   */
  n(Jt), P(Jt), h(Jt), w(Jt), v(Jt);
  var U = Jt.fn.dataTable;
  U.SearchPanes = N, I.SearchPanes = N, U.SearchPanesST = M, I.SearchPanesST = M, U.SearchPane = r, I.SearchPane = r, U.SearchPaneViewTotal = m, I.SearchPaneViewTotal = m, U.SearchPaneCascade = C, I.SearchPaneCascade = C, U.SearchPaneCascadeViewTotal = l, I.SearchPaneCascadeViewTotal = l;
  var q = Jt.fn.dataTable.Api.register;
  q("searchPanes()", function() {
    return this;
  }), q("searchPanes.clearSelections()", function() {
    return this.iterator("table", function(F) {
      F._searchPanes && F._searchPanes.clearSelections();
    });
  }), q("searchPanes.rebuildPane()", function(F, D) {
    return this.iterator("table", function(A) {
      A._searchPanes && A._searchPanes.rebuild(F, D);
    });
  }), q("searchPanes.resizePanes()", function() {
    var F = this.context[0];
    return F._searchPanes ? F._searchPanes.resizePanes() : null;
  }), q("searchPanes.container()", function() {
    var F = this.context[0];
    return F._searchPanes ? F._searchPanes.getNode() : null;
  }), I.ext.buttons.searchPanesClear = {
    action: function(F, D) {
      D.searchPanes.clearSelections();
    },
    text: "Clear Panes"
  }, I.ext.buttons.searchPanes = {
    action: function(F, D, A, R) {
      var E = this, V = this;
      R._panes ? (this.popover(R._panes.getNode(), {
        align: "container",
        span: "container"
      }), R._panes.rebuild(void 0, !0)) : (this.processing(!0), setTimeout(function() {
        z(D, A, R), E.popover(R._panes.getNode(), {
          align: "container",
          span: "container"
        }), R._panes.rebuild(void 0, !0), Jt("table.dataTable", R._panes.getNode()).DataTable().columns.adjust(), V.processing(!1);
      }, 10));
    },
    init: function(F, D, A) {
      F.button(D).text(A.text || F.i18n("searchPanes.collapse", "SearchPanes", 0)), (F.init().stateSave || A.delayInit === !1) && z(F, D, A);
    },
    config: {},
    text: "",
    delayInit: !0
  };
  function z(F, D, A) {
    var R = Jt.extend({
      filterChanged: function(V) {
        F.button(D).text(F.i18n("searchPanes.collapse", F.context[0].oLanguage.searchPanes !== void 0 ? F.context[0].oLanguage.searchPanes.collapse : F.context[0]._searchPanes.c.i18n.collapse, V));
      }
    }, A.config), E = R && (R.cascadePanes || R.viewTotal) ? new I.SearchPanesST(F, R) : new I.SearchPanes(F, R);
    F.button(D).text(A.text || F.i18n("searchPanes.collapse", E.c.i18n.collapse, 0)), A._panes = E;
  }
  function ne(F, D, A) {
    D === void 0 && (D = null), A === void 0 && (A = !1);
    var R = new U.Api(F), E = D || R.init().searchPanes || U.defaults.searchPanes, V = E && (E.cascadePanes || E.viewTotal) ? new M(R, E, A) : new N(R, E, A), j = V.getNode();
    return j;
  }
  Jt(document).on("preInit.dt.dtsp", function(F, D) {
    F.namespace === "dt" && (D.oInit.searchPanes || I.defaults.searchPanes) && (D._searchPanes || ne(D, null, !0));
  }), I.ext.feature.push({
    cFeature: "P",
    fnInit: ne
  }), I.feature && I.feature.register("searchPanes", ne);
})();
/*! Bootstrap 5 integration for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */
let Tc = Ue;
Tc.extend(!0, I.SearchPane.classes, {
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
Tc.extend(!0, I.SearchPanes.classes, {
  clearAll: "dtsp-clearAll btn btn-subtle",
  collapseAll: "dtsp-collapseAll btn btn-subtle",
  container: "dtsp-searchPanes",
  disabledButton: "disabled",
  panes: "dtsp-panes dtsp-panesContainer",
  search: I.SearchPane.classes.search,
  showAll: "dtsp-showAll btn btn-subtle",
  title: "dtsp-title",
  titleRow: "dtsp-titleRow"
});
/*! SearchBuilder 1.8.4
 * ©SpryMedia Ltd - datatables.net/license/mit
 */
let Jn = Ue;
(function() {
  var e, t;
  function n() {
    var v = I.use("moment");
    return v || window.moment;
  }
  function r() {
    var v = I.use("luxon");
    return v || window.luxon;
  }
  function i(v) {
    e = v, t = v.fn.dataTable;
  }
  var a = (
    /** @class */
    function() {
      function v(l, d, y, P, N, p, M) {
        P === void 0 && (P = 0), N === void 0 && (N = 1), p === void 0 && (p = void 0), M === void 0 && (M = !1);
        var U = this;
        this.classes = e.extend(!0, {}, v.classes), this.c = e.extend(!0, {}, v.defaults, e.fn.dataTable.ext.searchBuilder, d);
        var q = this.c.i18n;
        if (this.s = {
          condition: void 0,
          conditions: {},
          data: void 0,
          dataIdx: -1,
          dataPoints: [],
          dateFormat: !1,
          depth: N,
          dt: l,
          filled: !1,
          index: P,
          liveSearch: M,
          origData: void 0,
          preventRedraw: !1,
          serverData: p,
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
          for (var z = 0, ne = this.dom.value; z < ne.length; z++) {
            var F = ne[z];
            F.addClass(this.classes.greyscale);
          }
        }
        return e(window).on("resize.dtsb", t.util.throttle(function() {
          U.s.topGroup.trigger("dtsb-redrawLogic");
        })), this._buildCriteria(), this;
      }
      return v._escapeHTML = function(l) {
        return l.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
      }, v.prototype.doSearch = function() {
        this.c.liveSearch && this.s.dt.draw();
      }, v.parseNumFmt = function(l) {
        return +l.replace(/(?!^-)[^0-9.]/g, "");
      }, v.prototype.updateArrows = function(l) {
        l === void 0 && (l = !1), this.dom.container.children().detach(), this.dom.container.append(this.dom.data).append(this.dom.condition).append(this.dom.inputCont), this.setListeners(), this.dom.value[0] !== void 0 && e(this.dom.value[0]).trigger("dtsb-inserted");
        for (var d = 1; d < this.dom.value.length; d++)
          this.dom.inputCont.append(this.dom.value[d]), e(this.dom.value[d]).trigger("dtsb-inserted");
        this.s.depth > 1 && this.dom.buttons.append(this.dom.left), (this.c.depthLimit === !1 || this.s.depth < this.c.depthLimit) && l ? this.dom.buttons.append(this.dom.right) : this.dom.right.remove(), this.dom.buttons.append(this.dom.delete), this.dom.container.append(this.dom.buttons);
      }, v.prototype.destroy = function() {
        this.dom.data.off(".dtsb"), this.dom.condition.off(".dtsb"), this.dom.delete.off(".dtsb");
        for (var l = 0, d = this.dom.value; l < d.length; l++) {
          var y = d[l];
          y.off(".dtsb");
        }
        this.dom.container.remove();
      }, v.prototype.search = function(l, d) {
        var y = this.s.dt.settings()[0], P = this.s.conditions[this.s.condition];
        if (this.s.condition !== void 0 && P !== void 0) {
          var N = l[this.s.dataIdx];
          if (this.s.type && this.s.type.includes("num") && (y.oLanguage.sDecimal !== "" || y.oLanguage.sThousands !== "")) {
            var p = [l[this.s.dataIdx]];
            if (y.oLanguage.sDecimal !== "" && (p = l[this.s.dataIdx].split(y.oLanguage.sDecimal)), y.oLanguage.sThousands !== "")
              for (var M = 0; M < p.length; M++)
                p[M] = p[M].replace(y.oLanguage.sThousands, ",");
            N = p.join(".");
          }
          if (this.c.orthogonal.search !== "filter" && (N = y.fastData(d, this.s.dataIdx, typeof this.c.orthogonal == "string" ? this.c.orthogonal : this.c.orthogonal.search)), this.s.type === "array") {
            Array.isArray(N) || (N = [N]), N.sort();
            for (var U = 0, q = N; U < q.length; U++) {
              var z = q[U];
              z && typeof z == "string" && (z = z.replace(/[\r\n\u2028]/g, " "));
            }
          } else
            N !== null && typeof N == "string" && (N = N.replace(/[\r\n\u2028]/g, " "));
          return this.s.type.includes("html") && typeof N == "string" && (N = N.replace(/(<([^>]+)>)/ig, "")), N === null && (N = ""), P.search(N, this.s.value, this);
        }
      }, v.prototype.getDetails = function(l) {
        l === void 0 && (l = !1);
        var d, y = this.s.dt.settings()[0];
        if (this.s.type !== null && ["num", "num-fmt", "html-num", "html-num-fmt"].includes(this.s.type) && (y.oLanguage.sDecimal !== "" || y.oLanguage.sThousands !== ""))
          for (d = 0; d < this.s.value.length; d++) {
            var P = [this.s.value[d].toString()];
            if (y.oLanguage.sDecimal !== "" && (P = this.s.value[d].split(y.oLanguage.sDecimal)), y.oLanguage.sThousands !== "")
              for (var N = 0; N < P.length; N++)
                P[N] = P[N].replace(y.oLanguage.sThousands, ",");
            this.s.value[d] = P.join(".");
          }
        else if (this.s.type !== null && l) {
          var p = n(), M = r();
          if ((this.s.type.includes("date") || this.s.type.includes("time")) && !n && !r)
            for (d = 0; d < this.s.value.length; d++)
              this.s.value[d].match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g) === null && (this.s.value[d] = "");
          else if (this.s.type.includes("moment") || this.s.type.includes("datetime") && n)
            for (d = 0; d < this.s.value.length; d++)
              this.s.value[d] && this.s.value[d].length > 0 && p(this.s.value[d], this.s.dateFormat, !0).isValid() && (this.s.value[d] = p(this.s.value[d], this.s.dateFormat).format("YYYY-MM-DD HH:mm:ss"));
          else if (this.s.type.includes("luxon") || this.s.type.includes("datetime") && r)
            for (d = 0; d < this.s.value.length; d++)
              this.s.value[d] && this.s.value[d].length > 0 && M.DateTime.fromFormat(this.s.value[d], this.s.dateFormat).invalid === null && (this.s.value[d] = M.DateTime.fromFormat(this.s.value[d], this.s.dateFormat).toFormat("yyyy-MM-dd HH:mm:ss"));
        }
        if (this.s.type && this.s.type.includes("num") && this.s.dt.page.info().serverSide)
          for (d = 0; d < this.s.value.length; d++)
            this.s.value[d] = this.s.value[d].replace(/[^0-9.\-]/g, "");
        return {
          condition: this.s.condition,
          data: this.s.data,
          origData: this.s.origData,
          type: this.s.type,
          value: this.s.value.map(function(U) {
            return U != null ? U.toString() : U;
          })
        };
      }, v.prototype.getNode = function() {
        return this.dom.container;
      }, v.prototype.parseNumber = function(l) {
        var d = this.s.dt.i18n("decimal");
        return d && d !== "." && (l = l.replace(/\./g, "").replace(d, ".")), +l.replace(/(?!^-)[^0-9.]/g, "");
      }, v.prototype.populate = function() {
        this._populateData(), this.s.dataIdx !== -1 && (this._populateCondition(), this.s.condition !== void 0 && this._populateValue());
      }, v.prototype.rebuild = function(l) {
        var d = !1, y, P;
        if (this._populateData(), l.data !== void 0) {
          var N = this.classes.italic, p = this.dom.data;
          this.dom.data.children("option").each(function() {
            !d && (e(this).text() === l.data || l.origData && e(this).prop("origData") === l.origData) ? (e(this).prop("selected", !0), p.removeClass(N), d = !0, y = parseInt(e(this).val(), 10)) : e(this).removeProp("selected");
          });
        }
        if (d) {
          this.s.data = l.data, this.s.origData = l.origData, this.s.dataIdx = y, this.c.orthogonal = this._getOptions().orthogonal, this.dom.dataTitle.remove(), this._populateCondition(), this.dom.conditionTitle.remove();
          var M = void 0, U = this.dom.condition.children("option");
          for (P = 0; P < U.length; P++) {
            var q = e(U[P]);
            l.condition !== void 0 && q.val() === l.condition && typeof l.condition == "string" ? (q.prop("selected", !0), M = q.val()) : q.removeProp("selected");
          }
          if (this.s.condition = M, this.s.condition !== void 0) {
            for (this.dom.conditionTitle.removeProp("selected"), this.dom.conditionTitle.remove(), this.dom.condition.removeClass(this.classes.italic), P = 0; P < U.length; P++) {
              var z = e(U[P]);
              z.val() !== this.s.condition && z.removeProp("selected");
            }
            this._populateValue(l);
          } else
            this.dom.conditionTitle.prependTo(this.dom.condition).prop("selected", !0);
        }
      }, v.prototype.setListeners = function() {
        var l = this;
        this.dom.data.unbind("change").on("change.dtsb", function() {
          l.dom.dataTitle.removeProp("selected");
          for (var d = l.dom.data.children("option." + l.classes.option), y = 0; y < d.length; y++) {
            var P = e(d[y]);
            P.val() === l.dom.data.val() ? (l.dom.data.removeClass(l.classes.italic), P.prop("selected", !0), l.s.dataIdx = +P.val(), l.s.data = P.text(), l.s.origData = P.prop("origData"), l.c.orthogonal = l._getOptions().orthogonal, l._clearCondition(), l._clearValue(), l._populateCondition(), l.s.filled && (l.s.filled = !1, l.doSearch(), l.setListeners()), l.s.dt.state.save()) : P.removeProp("selected");
          }
        }), this.dom.condition.unbind("change").on("change.dtsb", function() {
          l.dom.conditionTitle.removeProp("selected");
          for (var d = l.dom.condition.children("option." + l.classes.option), y = 0; y < d.length; y++) {
            var P = e(d[y]);
            if (P.val() === l.dom.condition.val()) {
              l.dom.condition.removeClass(l.classes.italic), P.prop("selected", !0);
              for (var N = P.val(), p = 0, M = Object.keys(l.s.conditions); p < M.length; p++) {
                var U = M[p];
                if (U === N) {
                  l.s.condition = N;
                  break;
                }
              }
              l._clearValue(), l._populateValue();
              for (var q = 0, z = l.dom.value; q < z.length; q++) {
                var ne = z[q];
                l.s.filled && ne !== void 0 && l.dom.inputCont.has(ne[0]).length !== 0 && (l.s.filled = !1, l.doSearch(), l.setListeners());
              }
              (l.dom.value.length === 0 || l.dom.value.length === 1 && l.dom.value[0] === void 0) && l.doSearch();
            } else
              P.removeProp("selected");
          }
        });
      }, v.prototype.setupButtons = function() {
        if (window.innerWidth > 550) {
          this.dom.container.removeClass(this.classes.vertical), this.dom.buttons.css("left", null), this.dom.buttons.css("top", null);
          return;
        }
        this.dom.container.addClass(this.classes.vertical), this.dom.buttons.css("left", this.dom.data.innerWidth()), this.dom.buttons.css("top", this.dom.data.position().top);
      }, v.prototype._buildCriteria = function() {
        this.dom.data.append(this.dom.dataTitle), this.dom.condition.append(this.dom.conditionTitle), this.dom.container.append(this.dom.data).append(this.dom.condition), this.dom.inputCont.empty();
        for (var l = 0, d = this.dom.value; l < d.length; l++) {
          var y = d[l];
          y.append(this.dom.valueTitle), this.dom.inputCont.append(y);
        }
        this.dom.buttons.append(this.dom.delete).append(this.dom.right), this.dom.container.append(this.dom.inputCont).append(this.dom.buttons), this.setListeners();
      }, v.prototype._clearCondition = function() {
        this.dom.condition.empty(), this.dom.conditionTitle.prop("selected", !0).attr("disabled", "true"), this.dom.condition.prepend(this.dom.conditionTitle).prop("selectedIndex", 0), this.s.conditions = {}, this.s.condition = void 0;
      }, v.prototype._clearValue = function() {
        var l;
        if (this.s.condition !== void 0) {
          if (this.dom.value.length > 0 && this.dom.value[0] !== void 0)
            for (var d = 0, y = this.dom.value; d < y.length; d++)
              l = y[d], l !== void 0 && setTimeout(function() {
                l.remove();
              }, 50);
          if (this.dom.value = [].concat(this.s.conditions[this.s.condition].init(this, v.updateListener)), this.dom.value.length > 0 && this.dom.value[0] !== void 0) {
            this.dom.inputCont.empty().append(this.dom.value[0]).insertAfter(this.dom.condition), e(this.dom.value[0]).trigger("dtsb-inserted");
            for (var P = 1; P < this.dom.value.length; P++)
              this.dom.inputCont.append(this.dom.value[P]), e(this.dom.value[P]).trigger("dtsb-inserted");
          }
        } else {
          for (var N = 0, p = this.dom.value; N < p.length; N++)
            l = p[N], l !== void 0 && setTimeout(function() {
              l.remove();
            }, 50);
          this.dom.valueTitle.prop("selected", !0), this.dom.defaultValue.append(this.dom.valueTitle).insertAfter(this.dom.condition);
        }
        this.s.value = [], this.dom.value = [
          e("<select disabled/>").addClass(this.classes.value).addClass(this.classes.dropDown).addClass(this.classes.italic).addClass(this.classes.select).append(this.dom.valueTitle.clone())
        ];
      }, v.prototype._getOptions = function() {
        var l = this.s.dt;
        return e.extend(!0, {}, v.defaults, l.settings()[0].aoColumns[this.s.dataIdx].searchBuilder);
      }, v.prototype._populateCondition = function() {
        var l = [], d = Object.keys(this.s.conditions).length, y = this.s.dt, P = y.settings()[0].aoColumns, N = +this.dom.data.children("option:selected").val(), p, M;
        if (d === 0) {
          if (this.s.type = y.column(N).type(), P !== void 0) {
            var U = P[N];
            U.searchBuilderType !== void 0 && U.searchBuilderType !== null ? this.s.type = U.searchBuilderType : (this.s.type === void 0 || this.s.type === null) && (this.s.type = U.sType);
          }
          (this.s.type === null || this.s.type === void 0) && (e.fn.dataTable.ext.oApi && e.fn.dataTable.ext.oApi._fnColumnTypes(y.settings()[0]), this.s.type = y.column(N).type()), this.dom.condition.removeAttr("disabled").empty().append(this.dom.conditionTitle).addClass(this.classes.italic), this.dom.conditionTitle.prop("selected", !0);
          var q = y.settings()[0].oLanguage.sDecimal;
          q !== "" && this.s.type && this.s.type.indexOf(q) === this.s.type.length - q.length && (this.s.type.includes("num-fmt") ? this.s.type = this.s.type.replace(q, "") : this.s.type.includes("num") && (this.s.type = this.s.type.replace(q, "")));
          var z = void 0;
          if (this.c.conditions[this.s.type] !== void 0)
            z = this.c.conditions[this.s.type];
          else if (this.s.type && this.s.type === "datetime") {
            var ne = I.use("moment"), F = I.use("luxon");
            ne && (z = this.c.conditions.moment, this.s.dateFormat = ne().creationData().locale._longDateFormat.L), F && (z = this.c.conditions.luxon, this.s.dateFormat = F.DateTime.DATE_SHORT);
          } else
            this.s.type && this.s.type.includes("datetime-") ? (z = I.use("moment") ? this.c.conditions.moment : this.c.conditions.luxon, this.s.dateFormat = this.s.type.replace(/datetime-/g, "")) : this.s.type && this.s.type.includes("moment") ? (z = this.c.conditions.moment, this.s.dateFormat = this.s.type.replace(/moment-/g, "")) : this.s.type && this.s.type.includes("luxon") ? (z = this.c.conditions.luxon, this.s.dateFormat = this.s.type.replace(/luxon-/g, "")) : z = this.c.conditions.string;
          for (var D = 0, A = Object.keys(z); D < A.length; D++)
            if (p = A[D], z[p] !== null) {
              if (y.page.info().serverSide && z[p].init === v.initSelect) {
                var R = P[N];
                this.s.serverData && this.s.serverData[R.data] ? (z[p].init = v.initSelectSSP, z[p].inputValue = v.inputValueSelect, z[p].isInputValid = v.isInputValidSelect) : (z[p].init = v.initInput, z[p].inputValue = v.inputValueInput, z[p].isInputValid = v.isInputValidInput);
              }
              this.s.conditions[p] = z[p], M = z[p].conditionName, typeof M == "function" && (M = M(y, this.c.i18n)), l.push(e("<option>", {
                text: M,
                value: p
              }).addClass(this.classes.option).addClass(this.classes.notItalic));
            }
        } else if (d > 0) {
          this.dom.condition.empty().removeAttr("disabled").addClass(this.classes.italic);
          for (var E = 0, V = Object.keys(this.s.conditions); E < V.length; E++) {
            p = V[E];
            var j = this.s.conditions[p].conditionName;
            typeof j == "function" && (j = j(y, this.c.i18n));
            var X = e("<option>", {
              text: j,
              value: p
            }).addClass(this.classes.option).addClass(this.classes.notItalic);
            this.s.condition !== void 0 && this.s.condition === j && (X.prop("selected", !0), this.dom.condition.removeClass(this.classes.italic)), l.push(X);
          }
        } else {
          this.dom.condition.attr("disabled", "true").addClass(this.classes.italic);
          return;
        }
        for (var Z = 0, Q = l; Z < Q.length; Z++) {
          var ee = Q[Z];
          this.dom.condition.append(ee);
        }
        if (P[N].searchBuilder && P[N].searchBuilder.defaultCondition) {
          var te = P[N].searchBuilder.defaultCondition;
          if (typeof te == "number")
            this.dom.condition.prop("selectedIndex", te), this.dom.condition.trigger("change");
          else if (typeof te == "string")
            for (var ie = 0; ie < l.length; ie++)
              for (var le = 0, ae = Object.keys(this.s.conditions); le < ae.length; le++) {
                var ue = ae[le];
                if (M = this.s.conditions[ue].conditionName, // If the conditionName matches the text of the option
                (typeof M == "string" ? M : M(y, this.c.i18n)) === l[ie].text() && // and the tokens match
                ue === te) {
                  this.dom.condition.prop("selectedIndex", this.dom.condition.children().toArray().indexOf(l[ie][0])).removeClass(this.classes.italic), this.dom.condition.trigger("change"), ie = l.length;
                  break;
                }
              }
        } else
          this.dom.condition.prop("selectedIndex", 0);
      }, v.prototype._populateData = function() {
        var l = this.s.dt.settings()[0].aoColumns, d = this.s.dt.columns(this.c.columns).indexes().toArray();
        this.dom.data.empty().append(this.dom.dataTitle);
        for (var y = 0; y < l.length; y++)
          if (this.c.columns === !0 || d.includes(y)) {
            var P = l[y], N = {
              index: y,
              origData: P.data,
              text: (P.searchBuilderTitle || P.sTitle).replace(/(<([^>]+)>)/ig, "")
            };
            this.dom.data.append(e("<option>", {
              text: N.text,
              value: N.index
            }).addClass(this.classes.option).addClass(this.classes.notItalic).prop("origData", P.data).prop("selected", this.s.dataIdx === N.index)), this.s.dataIdx === N.index && this.dom.dataTitle.removeProp("selected");
          }
      }, v.prototype._populateValue = function(l) {
        var d = this, y = this.s.filled, P;
        this.s.filled = !1, setTimeout(function() {
          d.dom.defaultValue.remove();
        }, 50);
        for (var N = function(z) {
          setTimeout(function() {
            z !== void 0 && z.remove();
          }, 50);
        }, p = 0, M = this.dom.value; p < M.length; p++) {
          var U = M[p];
          N(U);
        }
        var q = this.dom.inputCont.children();
        if (q.length > 1)
          for (P = 0; P < q.length; P++)
            e(q[P]).remove();
        for (l !== void 0 && this.s.dt.columns().every(function(z) {
          d.s.dt.settings()[0].aoColumns[z].sTitle === l.data && (d.s.dataIdx = z);
        }), this.dom.value = [].concat(this.s.conditions[this.s.condition].init(this, v.updateListener, l !== void 0 ? l.value : void 0)), l !== void 0 && l.value !== void 0 && (this.s.value = l.value), this.dom.inputCont.empty(), this.dom.value[0] !== void 0 && e(this.dom.value[0]).appendTo(this.dom.inputCont).trigger("dtsb-inserted"), P = 1; P < this.dom.value.length; P++)
          e(this.dom.value[P]).insertAfter(this.dom.value[P - 1]).trigger("dtsb-inserted");
        this.s.filled = this.s.conditions[this.s.condition].isInputValid(this.dom.value, this), this.setListeners(), !this.s.preventRedraw && y !== this.s.filled && (this.s.dt.page.info().serverSide || this.doSearch(), this.setListeners());
      }, v.prototype._throttle = function(l, d) {
        d === void 0 && (d = 200);
        var y = null, P = null, N = this;
        return d === null && (d = 200), function() {
          for (var p = [], M = 0; M < arguments.length; M++)
            p[M] = arguments[M];
          var U = +/* @__PURE__ */ new Date();
          y !== null && U < y + d ? clearTimeout(P) : y = U, P = setTimeout(function() {
            y = null, l.apply(N, p);
          }, d);
        };
      }, v.version = "1.1.0", v.classes = {
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
      }, v.initSelect = function(l, d, y, P) {
        y === void 0 && (y = null), P === void 0 && (P = !1);
        var N = l.dom.data.children("option:selected").val(), p = l.s.dt.rows().indexes().toArray(), M = l.s.dt.settings()[0].fastData;
        l.dom.valueTitle.prop("selected", !0);
        var U = e("<select/>").addClass(v.classes.value).addClass(v.classes.dropDown).addClass(v.classes.italic).addClass(v.classes.select).append(l.dom.valueTitle).on("change.dtsb", function() {
          e(this).removeClass(v.classes.italic), d(l, this);
        });
        l.c.greyscale && U.addClass(v.classes.greyscale);
        for (var q = [], z = [], ne = 0, F = p; ne < F.length; ne++) {
          var D = F[ne], A = M(D, N, typeof l.c.orthogonal == "string" ? l.c.orthogonal : l.c.orthogonal.search), R = {
            filter: typeof A == "string" ? A.replace(/[\r\n\u2028]/g, " ") : (
              // Need to replace certain characters to match search values
              A
            ),
            index: D,
            text: M(D, N, typeof l.c.orthogonal == "string" ? l.c.orthogonal : l.c.orthogonal.display)
          };
          l.s.type === "array" && (R.filter = Array.isArray(R.filter) ? R.filter : [R.filter], R.text = Array.isArray(R.text) ? R.text : [R.text]);
          var E = function(Q, ee) {
            l.s.type.includes("html") && Q !== null && typeof Q == "string" && Q.replace(/(<([^>]+)>)/ig, "");
            var te = e("<option>", {
              type: Array.isArray(Q) ? "Array" : "String",
              value: Q
            }).data("sbv", Q).addClass(l.classes.option).addClass(l.classes.notItalic).html(typeof ee == "string" ? ee.replace(/(<([^>]+)>)/ig, "") : ee), ie = te.val();
            q.indexOf(ie) === -1 && (q.push(ie), z.push(te), y !== null && Array.isArray(y[0]) && (y[0] = y[0].sort().join(",")), y !== null && te.val() === y[0] && (te.prop("selected", !0), U.removeClass(v.classes.italic), l.dom.valueTitle.removeProp("selected")));
          };
          if (P)
            for (var V = 0; V < R.filter.length; V++)
              E(R.filter[V], R.text[V]);
          else
            E(R.filter, Array.isArray(R.text) ? R.text.join(", ") : R.text);
        }
        z.sort(function(Q, ee) {
          if (l.s.type === "array" || l.s.type === "string" || l.s.type === "html")
            return Q.val() < ee.val() ? -1 : Q.val() > ee.val() ? 1 : 0;
          if (l.s.type === "num" || l.s.type === "html-num")
            return +Q.val().replace(/(<([^>]+)>)/ig, "") < +ee.val().replace(/(<([^>]+)>)/ig, "") ? -1 : +Q.val().replace(/(<([^>]+)>)/ig, "") > +ee.val().replace(/(<([^>]+)>)/ig, "") ? 1 : 0;
          if (l.s.type === "num-fmt" || l.s.type === "html-num-fmt")
            return +Q.val().replace(/[^0-9.]/g, "") < +ee.val().replace(/[^0-9.]/g, "") ? -1 : +Q.val().replace(/[^0-9.]/g, "") > +ee.val().replace(/[^0-9.]/g, "") ? 1 : 0;
        });
        for (var j = 0, X = z; j < X.length; j++) {
          var Z = X[j];
          U.append(Z);
        }
        return U;
      }, v.initSelectSSP = function(l, d, y) {
        y === void 0 && (y = null), l.dom.valueTitle.prop("selected", !0);
        var P = e("<select/>").addClass(v.classes.value).addClass(v.classes.dropDown).addClass(v.classes.italic).addClass(v.classes.select).append(l.dom.valueTitle).on("change.dtsb", function() {
          e(this).removeClass(v.classes.italic), d(l, this);
        });
        l.c.greyscale && P.addClass(v.classes.greyscale);
        for (var N = [], p = 0, M = l.s.serverData[l.s.origData]; p < M.length; p++) {
          var U = M[p], q = U.value, z = U.label, ne = function(R, E) {
            l.s.type.includes("html") && R !== null && typeof R == "string" && R.replace(/(<([^>]+)>)/ig, "");
            var V = e("<option>", {
              type: Array.isArray(R) ? "Array" : "String",
              value: R
            }).data("sbv", R).addClass(l.classes.option).addClass(l.classes.notItalic).html(typeof E == "string" ? E.replace(/(<([^>]+)>)/ig, "") : E);
            N.push(V), y !== null && V.val() === y[0] && (V.prop("selected", !0), P.removeClass(v.classes.italic), l.dom.valueTitle.removeProp("selected"));
          };
          ne(q, z);
        }
        for (var F = 0, D = N; F < D.length; F++) {
          var A = D[F];
          P.append(A);
        }
        return P;
      }, v.initSelectArray = function(l, d, y) {
        return y === void 0 && (y = null), v.initSelect(l, d, y, !0);
      }, v.initInput = function(l, d, y) {
        y === void 0 && (y = null);
        var P = l.s.dt.settings()[0].searchDelay, N = e("<input/>").addClass(v.classes.value).addClass(v.classes.input).on("input.dtsb keypress.dtsb", l._throttle(function(p) {
          var M = p.keyCode || p.which;
          return d(l, this, M);
        }, P === null ? 100 : P));
        return l.c.greyscale && N.addClass(v.classes.greyscale), y !== null && N.val(y[0]), l.s.dt.one("draw.dtsb", function() {
          l.s.topGroup.trigger("dtsb-redrawLogic");
        }), N;
      }, v.init2Input = function(l, d, y) {
        y === void 0 && (y = null);
        var P = l.s.dt.settings()[0].searchDelay, N = [
          e("<input/>").addClass(v.classes.value).addClass(v.classes.input).on("input.dtsb keypress.dtsb", l._throttle(function(p) {
            var M = p.keyCode || p.which;
            return d(l, this, M);
          }, P === null ? 100 : P)),
          e("<span>").addClass(l.classes.joiner).html(l.s.dt.i18n("searchBuilder.valueJoiner", l.c.i18n.valueJoiner)),
          e("<input/>").addClass(v.classes.value).addClass(v.classes.input).on("input.dtsb keypress.dtsb", l._throttle(function(p) {
            var M = p.keyCode || p.which;
            return d(l, this, M);
          }, P === null ? 100 : P))
        ];
        return l.c.greyscale && (N[0].addClass(v.classes.greyscale), N[2].addClass(v.classes.greyscale)), y !== null && (N[0].val(y[0]), N[2].val(y[1])), l.s.dt.one("draw.dtsb", function() {
          l.s.topGroup.trigger("dtsb-redrawLogic");
        }), N;
      }, v.initDate = function(l, d, y) {
        y === void 0 && (y = null);
        var P = l.s.dt.settings()[0].searchDelay, N = l.s.dt.i18n("datetime", {}, !1), p = e("<input/>").addClass(v.classes.value).addClass(v.classes.input).dtDateTime({
          format: l.s.dateFormat ? l.s.dateFormat : void 0,
          i18n: N
        }).on("change.dtsb", l._throttle(function() {
          return d(l, this);
        }, P === null ? 100 : P)).on("input.dtsb keypress.dtsb", function(M) {
          l._throttle(function() {
            var U = M.keyCode || M.which;
            return d(l, this, U);
          }, P === null ? 100 : P);
        });
        return l.c.greyscale && p.addClass(v.classes.greyscale), y !== null && p.val(y[0]), l.s.dt.one("draw.dtsb", function() {
          l.s.topGroup.trigger("dtsb-redrawLogic");
        }), p;
      }, v.initNoValue = function(l) {
        return l.s.dt.one("draw.dtsb", function() {
          l.s.topGroup.trigger("dtsb-redrawLogic");
        }), [];
      }, v.init2Date = function(l, d, y) {
        var P = this;
        y === void 0 && (y = null);
        var N = l.s.dt.settings()[0].searchDelay, p = l.s.dt.i18n("datetime", {}, !1), M = [
          e("<input/>").addClass(v.classes.value).addClass(v.classes.input).dtDateTime({
            format: l.s.dateFormat ? l.s.dateFormat : void 0,
            i18n: p
          }).on("change.dtsb", N !== null ? I.util.throttle(function() {
            return d(l, this);
          }, N) : function() {
            d(l, P);
          }).on("input.dtsb keypress.dtsb", function(U) {
            I.util.throttle(function() {
              var q = U.keyCode || U.which;
              return d(l, this, q);
            }, N === null ? 0 : N);
          }),
          e("<span>").addClass(l.classes.joiner).html(l.s.dt.i18n("searchBuilder.valueJoiner", l.c.i18n.valueJoiner)),
          e("<input/>").addClass(v.classes.value).addClass(v.classes.input).dtDateTime({
            format: l.s.dateFormat ? l.s.dateFormat : void 0,
            i18n: p
          }).on("change.dtsb", N !== null ? I.util.throttle(function() {
            return d(l, this);
          }, N) : function() {
            d(l, P);
          }).on("input.dtsb keypress.dtsb", !l.c.enterSearch && !(l.s.dt.settings()[0].oInit.search !== void 0 && l.s.dt.settings()[0].oInit.search.return) && N !== null ? I.util.throttle(function() {
            return d(l, this);
          }, N) : function(U) {
            var q = U.keyCode || U.which;
            d(l, P, q);
          })
        ];
        return l.c.greyscale && (M[0].addClass(v.classes.greyscale), M[2].addClass(v.classes.greyscale)), y !== null && y.length > 0 && (M[0].val(y[0]), M[2].val(y[1])), l.s.dt.one("draw.dtsb", function() {
          l.s.topGroup.trigger("dtsb-redrawLogic");
        }), M;
      }, v.isInputValidSelect = function(l) {
        for (var d = !0, y = 0, P = l; y < P.length; y++) {
          var N = P[y];
          N.children("option:selected").length === N.children("option").length - N.children("option." + v.classes.notItalic).length && N.children("option:selected").length === 1 && N.children("option:selected")[0] === N.children("option")[0] && (d = !1);
        }
        return d;
      }, v.isInputValidInput = function(l) {
        for (var d = !0, y = 0, P = l; y < P.length; y++) {
          var N = P[y];
          N.is("input") && N.val().length === 0 && (d = !1);
        }
        return d;
      }, v.inputValueSelect = function(l) {
        for (var d = [], y = 0, P = l; y < P.length; y++) {
          var N = P[y];
          if (N.is("select")) {
            var p = [].concat(N.children("option:selected").data("sbv")).map(function(M) {
              return v._escapeHTML(M);
            });
            d.push.apply(d, p);
          }
        }
        return d;
      }, v.inputValueInput = function(l) {
        for (var d = [], y = 0, P = l; y < P.length; y++) {
          var N = P[y];
          N.is("input") && d.push(v._escapeHTML(N.val()));
        }
        return d.map(t.util.diacritics);
      }, v.updateListener = function(l, d, y) {
        var P = l.s.conditions[l.s.condition], N;
        if (l.s.filled = P.isInputValid(l.dom.value, l), l.s.value = P.inputValue(l.dom.value, l), !l.s.filled) {
          (!l.c.enterSearch && !(l.s.dt.settings()[0].oInit.search !== void 0 && l.s.dt.settings()[0].oInit.search.return) || y === 13) && l.doSearch();
          return;
        }
        for (Array.isArray(l.s.value) || (l.s.value = [l.s.value]), N = 0; N < l.s.value.length; N++)
          Array.isArray(l.s.value[N]) && l.s.value[N].sort();
        var p = null, M = null;
        for (N = 0; N < l.dom.value.length; N++)
          d === l.dom.value[N][0] && (p = N, d.selectionStart !== void 0 && (M = d.selectionStart));
        (!l.c.enterSearch && !(l.s.dt.settings()[0].oInit.search !== void 0 && l.s.dt.settings()[0].oInit.search.return) || y === 13 || d.nodeName.toLowerCase() === "select") && l.doSearch(), p !== null && (l.dom.value[p].removeClass(l.classes.italic), l.dom.value[p].focus(), M !== null && l.dom.value[p][0].setSelectionRange(M, M));
      }, v.dateConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.equals", d.conditions.date.equals);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), l === d[0];
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.not", d.conditions.date.not);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), l !== d[0];
          }
        },
        "<": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.before", d.conditions.date.before);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), l < d[0];
          }
        },
        ">": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.after", d.conditions.date.after);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), l > d[0];
          }
        },
        between: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.between", d.conditions.date.between);
          },
          init: v.init2Date,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), d[0] < d[1] ? d[0] <= l && l <= d[1] : d[1] <= l && l <= d[0];
          }
        },
        "!between": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.notBetween", d.conditions.date.notBetween);
          },
          init: v.init2Date,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l = l.replace(/(\/|-|,)/g, "-"), d[0] < d[1] ? !(d[0] <= l && l <= d[1]) : !(d[1] <= l && l <= d[0]);
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.empty", d.conditions.date.empty);
          },
          init: v.initNoValue,
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
          init: v.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, v.momentDateConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.equals", d.conditions.date.equals);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return n()(l, y.s.dateFormat).valueOf() === n()(d[0], y.s.dateFormat).valueOf();
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.not", d.conditions.date.not);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return n()(l, y.s.dateFormat).valueOf() !== n()(d[0], y.s.dateFormat).valueOf();
          }
        },
        "<": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.before", d.conditions.date.before);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return n()(l, y.s.dateFormat).valueOf() < n()(d[0], y.s.dateFormat).valueOf();
          }
        },
        ">": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.after", d.conditions.date.after);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return n()(l, y.s.dateFormat).valueOf() > n()(d[0], y.s.dateFormat).valueOf();
          }
        },
        between: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.between", d.conditions.date.between);
          },
          init: v.init2Date,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            var P = n()(l, y.s.dateFormat).valueOf(), N = n()(d[0], y.s.dateFormat).valueOf(), p = n()(d[1], y.s.dateFormat).valueOf();
            return N < p ? N <= P && P <= p : p <= P && P <= N;
          }
        },
        "!between": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.notBetween", d.conditions.date.notBetween);
          },
          init: v.init2Date,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            var P = n()(l, y.s.dateFormat).valueOf(), N = n()(d[0], y.s.dateFormat).valueOf(), p = n()(d[1], y.s.dateFormat).valueOf();
            return N < p ? !(+N <= +P && +P <= +p) : !(+p <= +P && +P <= +N);
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.empty", d.conditions.date.empty);
          },
          init: v.initNoValue,
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
          init: v.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, v.luxonDateConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.equals", d.conditions.date.equals);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return r().DateTime.fromFormat(l, y.s.dateFormat).ts === r().DateTime.fromFormat(d[0], y.s.dateFormat).ts;
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.not", d.conditions.date.not);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return r().DateTime.fromFormat(l, y.s.dateFormat).ts !== r().DateTime.fromFormat(d[0], y.s.dateFormat).ts;
          }
        },
        "<": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.before", d.conditions.date.before);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return r().DateTime.fromFormat(l, y.s.dateFormat).ts < r().DateTime.fromFormat(d[0], y.s.dateFormat).ts;
          }
        },
        ">": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.after", d.conditions.date.after);
          },
          init: v.initDate,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return r().DateTime.fromFormat(l, y.s.dateFormat).ts > r().DateTime.fromFormat(d[0], y.s.dateFormat).ts;
          }
        },
        between: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.between", d.conditions.date.between);
          },
          init: v.init2Date,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            var P = r().DateTime.fromFormat(l, y.s.dateFormat).ts, N = r().DateTime.fromFormat(d[0], y.s.dateFormat).ts, p = r().DateTime.fromFormat(d[1], y.s.dateFormat).ts;
            return N < p ? N <= P && P <= p : p <= P && P <= N;
          }
        },
        "!between": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.notBetween", d.conditions.date.notBetween);
          },
          init: v.init2Date,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            var P = r().DateTime.fromFormat(l, y.s.dateFormat).ts, N = r().DateTime.fromFormat(d[0], y.s.dateFormat).ts, p = r().DateTime.fromFormat(d[1], y.s.dateFormat).ts;
            return N < p ? !(+N <= +P && +P <= +p) : !(+p <= +P && +P <= +N);
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.date.empty", d.conditions.date.empty);
          },
          init: v.initNoValue,
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
          init: v.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, v.numConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.equals", d.conditions.number.equals);
          },
          init: v.initSelect,
          inputValue: v.inputValueSelect,
          isInputValid: v.isInputValidSelect,
          search: function(l, d) {
            return +l == +d[0];
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.not", d.conditions.number.not);
          },
          init: v.initSelect,
          inputValue: v.inputValueSelect,
          isInputValid: v.isInputValidSelect,
          search: function(l, d) {
            return +l != +d[0];
          }
        },
        "<": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.lt", d.conditions.number.lt);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return +l < +d[0];
          }
        },
        "<=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.lte", d.conditions.number.lte);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return +l <= +d[0];
          }
        },
        ">=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.gte", d.conditions.number.gte);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return +l >= +d[0];
          }
        },
        ">": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.gt", d.conditions.number.gt);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return +l > +d[0];
          }
        },
        between: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.between", d.conditions.number.between);
          },
          init: v.init2Input,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return +d[0] < +d[1] ? +d[0] <= +l && +l <= +d[1] : +d[1] <= +l && +l <= +d[0];
          }
        },
        "!between": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.notBetween", d.conditions.number.notBetween);
          },
          init: v.init2Input,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return +d[0] < +d[1] ? !(+d[0] <= +l && +l <= +d[1]) : !(+d[1] <= +l && +l <= +d[0]);
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.empty", d.conditions.number.empty);
          },
          init: v.initNoValue,
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
          init: v.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, v.numFmtConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.equals", d.conditions.number.equals);
          },
          init: v.initSelect,
          inputValue: v.inputValueSelect,
          isInputValid: v.isInputValidSelect,
          search: function(l, d, y) {
            return y.parseNumber(l) === y.parseNumber(d[0]);
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.not", d.conditions.number.not);
          },
          init: v.initSelect,
          inputValue: v.inputValueSelect,
          isInputValid: v.isInputValidSelect,
          search: function(l, d, y) {
            return y.parseNumber(l) !== y.parseNumber(d[0]);
          }
        },
        "<": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.lt", d.conditions.number.lt);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return y.parseNumber(l) < y.parseNumber(d[0]);
          }
        },
        "<=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.lte", d.conditions.number.lte);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return y.parseNumber(l) <= y.parseNumber(d[0]);
          }
        },
        ">=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.gte", d.conditions.number.gte);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return y.parseNumber(l) >= y.parseNumber(d[0]);
          }
        },
        ">": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.gt", d.conditions.number.gt);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            return y.parseNumber(l) > y.parseNumber(d[0]);
          }
        },
        between: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.between", d.conditions.number.between);
          },
          init: v.init2Input,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            var P = y.parseNumber(l), N = y.parseNumber(d[0]), p = y.parseNumber(d[1]);
            return +N < +p ? +N <= +P && +P <= +p : +p <= +P && +P <= +N;
          }
        },
        "!between": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.notBetween", d.conditions.number.notBetween);
          },
          init: v.init2Input,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d, y) {
            var P = y.parseNumber(l), N = y.parseNumber(d[0]), p = y.parseNumber(d[1]);
            return +N < +p ? !(+N <= +P && +P <= +p) : !(+p <= +P && +P <= +N);
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.number.empty", d.conditions.number.empty);
          },
          init: v.initNoValue,
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
          init: v.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, v.stringConditions = {
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.equals", d.conditions.string.equals);
          },
          init: v.initSelect,
          inputValue: v.inputValueSelect,
          isInputValid: v.isInputValidSelect,
          search: function(l, d) {
            return l === d[0];
          }
        },
        "!=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.not", d.conditions.string.not);
          },
          init: v.initSelect,
          inputValue: v.inputValueSelect,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l !== d[0];
          }
        },
        starts: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.startsWith", d.conditions.string.startsWith);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l.toLowerCase().indexOf(d[0].toLowerCase()) === 0;
          }
        },
        "!starts": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.notStartsWith", d.conditions.string.notStartsWith);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l.toLowerCase().indexOf(d[0].toLowerCase()) !== 0;
          }
        },
        contains: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.contains", d.conditions.string.contains);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l.toLowerCase().includes(d[0].toLowerCase());
          }
        },
        "!contains": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.notContains", d.conditions.string.notContains);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return !l.toLowerCase().includes(d[0].toLowerCase());
          }
        },
        ends: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.endsWith", d.conditions.string.endsWith);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return l.toLowerCase().endsWith(d[0].toLowerCase());
          }
        },
        "!ends": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.notEndsWith", d.conditions.string.notEndsWith);
          },
          init: v.initInput,
          inputValue: v.inputValueInput,
          isInputValid: v.isInputValidInput,
          search: function(l, d) {
            return !l.toLowerCase().endsWith(d[0].toLowerCase());
          }
        },
        null: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.string.empty", d.conditions.string.empty);
          },
          init: v.initNoValue,
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
          init: v.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return !(l == null || l.length === 0);
          }
        }
      }, v.arrayConditions = {
        contains: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.array.contains", d.conditions.array.contains);
          },
          init: v.initSelectArray,
          inputValue: v.inputValueSelect,
          isInputValid: v.isInputValidSelect,
          search: function(l, d) {
            return l.includes(d[0]);
          }
        },
        without: {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.array.without", d.conditions.array.without);
          },
          init: v.initSelectArray,
          inputValue: v.inputValueSelect,
          isInputValid: v.isInputValidSelect,
          search: function(l, d) {
            return l.indexOf(d[0]) === -1;
          }
        },
        "=": {
          conditionName: function(l, d) {
            return l.i18n("searchBuilder.conditions.array.equals", d.conditions.array.equals);
          },
          init: v.initSelect,
          inputValue: v.inputValueSelect,
          isInputValid: v.isInputValidSelect,
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
          init: v.initSelect,
          inputValue: v.inputValueSelect,
          isInputValid: v.isInputValidSelect,
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
          init: v.initNoValue,
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
          init: v.initNoValue,
          inputValue: function() {
          },
          isInputValid: function() {
            return !0;
          },
          search: function(l) {
            return l != null && l.length !== 0;
          }
        }
      }, v.defaults = {
        columns: !0,
        conditions: {
          array: v.arrayConditions,
          date: v.dateConditions,
          html: v.stringConditions,
          "html-num": v.numConditions,
          "html-num-fmt": v.numFmtConditions,
          luxon: v.luxonDateConditions,
          moment: v.momentDateConditions,
          num: v.numConditions,
          "num-fmt": v.numFmtConditions,
          string: v.stringConditions
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
      }, v;
    }()
  ), o;
  function c(v) {
    o = v, v.fn.dataTable;
  }
  var h = (
    /** @class */
    function() {
      function v(l, d, y, P, N, p, M) {
        return P === void 0 && (P = 0), N === void 0 && (N = !1), p === void 0 && (p = 1), M === void 0 && (M = void 0), this.classes = o.extend(!0, {}, v.classes), this.c = o.extend(!0, {}, v.defaults, d), this.s = {
          criteria: [],
          depth: p,
          dt: l,
          index: P,
          isChild: N,
          logic: void 0,
          opts: d,
          preventRedraw: !1,
          serverData: M,
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
      return v.prototype.destroy = function() {
        this.dom.add.off(".dtsb"), this.dom.logic.off(".dtsb"), this.dom.search.off(".dtsb"), this.dom.container.trigger("dtsb-destroy").remove(), this.s.criteria = [];
      }, v.prototype.getDetails = function(l) {
        if (l === void 0 && (l = !1), this.s.criteria.length === 0)
          return {};
        for (var d = {
          criteria: [],
          logic: this.s.logic
        }, y = 0, P = this.s.criteria; y < P.length; y++) {
          var N = P[y];
          d.criteria.push(N.criteria.getDetails(l));
        }
        return d;
      }, v.prototype.getNode = function() {
        return this.dom.container;
      }, v.prototype.rebuild = function(l) {
        var d;
        if (!(l.criteria === void 0 || l.criteria === null || Array.isArray(l.criteria) && l.criteria.length === 0)) {
          if (this.s.logic = l.logic, this.dom.logic.children().first().html(this.s.logic === "OR" ? this.s.dt.i18n("searchBuilder.logicOr", this.c.i18n.logicOr) : this.s.dt.i18n("searchBuilder.logicAnd", this.c.i18n.logicAnd)), Array.isArray(l.criteria))
            for (var y = 0, P = l.criteria; y < P.length; y++)
              d = P[y], d.logic !== void 0 ? this._addPrevGroup(d) : d.logic === void 0 && this._addPrevCriteria(d);
          for (var N = 0, p = this.s.criteria; N < p.length; N++)
            d = p[N], d.criteria instanceof a && (d.criteria.updateArrows(this.s.criteria.length > 1), this._setCriteriaListeners(d.criteria));
        }
      }, v.prototype.redrawContents = function() {
        if (!this.s.preventRedraw) {
          this.dom.container.children().detach(), this.dom.container.append(this.dom.logicContainer).append(this.dom.add), this.c.liveSearch || this.dom.container.append(this.dom.search), this.s.criteria.sort(function(y, P) {
            return y.criteria.s.index < P.criteria.s.index ? -1 : y.criteria.s.index > P.criteria.s.index ? 1 : 0;
          }), this.setListeners();
          for (var l = 0; l < this.s.criteria.length; l++) {
            var d = this.s.criteria[l].criteria;
            d instanceof a ? (this.s.criteria[l].index = l, this.s.criteria[l].criteria.s.index = l, this.s.criteria[l].criteria.dom.container.insertBefore(this.dom.add), this._setCriteriaListeners(d), this.s.criteria[l].criteria.s.preventRedraw = this.s.preventRedraw, this.s.criteria[l].criteria.rebuild(this.s.criteria[l].criteria.getDetails()), this.s.criteria[l].criteria.s.preventRedraw = !1) : d instanceof v && d.s.criteria.length > 0 ? (this.s.criteria[l].index = l, this.s.criteria[l].criteria.s.index = l, this.s.criteria[l].criteria.dom.container.insertBefore(this.dom.add), d.s.preventRedraw = this.s.preventRedraw, d.redrawContents(), d.s.preventRedraw = !1, this._setGroupListeners(d)) : (this.s.criteria.splice(l, 1), l--);
          }
          this.setupLogic();
        }
      }, v.prototype.redrawLogic = function() {
        for (var l = 0, d = this.s.criteria; l < d.length; l++) {
          var y = d[l];
          y.criteria instanceof v && y.criteria.redrawLogic();
        }
        this.setupLogic();
      }, v.prototype.search = function(l, d) {
        return this.s.logic === "AND" ? this._andSearch(l, d) : this.s.logic === "OR" ? this._orSearch(l, d) : !0;
      }, v.prototype.setupLogic = function() {
        if (this.dom.logicContainer.remove(), this.dom.clear.remove(), this.s.criteria.length < 1) {
          this.s.isChild || (this.dom.container.trigger("dtsb-destroy"), this.dom.container.css("margin-left", 0)), this.dom.search.css("display", "none");
          return;
        }
        this.dom.clear.height("0px"), this.dom.logicContainer.append(this.dom.clear), this.s.isChild || this.dom.search.css("display", "inline-block"), this.dom.container.prepend(this.dom.logicContainer);
        for (var l = 0, d = this.s.criteria; l < d.length; l++) {
          var y = d[l];
          y.criteria instanceof a && y.criteria.setupButtons();
        }
        var P = this.dom.container.outerHeight() - 1;
        this.dom.logicContainer.width(P), this._setLogicListener(), this.dom.container.css("margin-left", this.dom.logicContainer.outerHeight(!0));
        var N = this.dom.logicContainer.offset(), p = N.left, M = this.dom.container.offset().left, U = p - M, q = p - U - this.dom.logicContainer.outerHeight(!0);
        this.dom.logicContainer.offset({ left: q });
        var z = this.dom.logicContainer.next(), ne = N.top, F = o(z).offset().top, D = ne - F, A = ne - D;
        this.dom.logicContainer.offset({ top: A }), this.dom.clear.outerHeight(this.dom.logicContainer.height()), this._setClearListener();
      }, v.prototype.setListeners = function() {
        var l = this;
        this.dom.add.unbind("click"), this.dom.add.on("click.dtsb", function() {
          return l.s.isChild || l.dom.container.prepend(l.dom.logicContainer), l.addCriteria(), l.dom.container.trigger("dtsb-add"), l.s.dt.state.save(), !1;
        }), this.dom.search.off("click.dtsb").on("click.dtsb", function() {
          l.s.dt.draw();
        });
        for (var d = 0, y = this.s.criteria; d < y.length; d++) {
          var P = y[d];
          P.criteria.setListeners();
        }
        this._setClearListener(), this._setLogicListener();
      }, v.prototype.addCriteria = function(l) {
        l === void 0 && (l = null);
        var d = l === null ? this.s.criteria.length : l.s.index, y = new a(this.s.dt, this.s.opts, this.s.topGroup, d, this.s.depth, this.s.serverData, this.c.liveSearch);
        l !== null && (y.c = l.c, y.s = l.s, y.s.depth = this.s.depth, y.classes = l.classes), y.populate();
        for (var P = !1, N = 0; N < this.s.criteria.length; N++)
          N === 0 && this.s.criteria[N].criteria.s.index > y.s.index ? (y.getNode().insertBefore(this.s.criteria[N].criteria.dom.container), P = !0) : N < this.s.criteria.length - 1 && this.s.criteria[N].criteria.s.index < y.s.index && this.s.criteria[N + 1].criteria.s.index > y.s.index && (y.getNode().insertAfter(this.s.criteria[N].criteria.dom.container), P = !0);
        P || y.getNode().insertBefore(this.dom.add), this.s.criteria.push({
          criteria: y,
          index: d
        }), this.s.criteria = this.s.criteria.sort(function(q, z) {
          return q.criteria.s.index - z.criteria.s.index;
        });
        for (var p = 0, M = this.s.criteria; p < M.length; p++) {
          var U = M[p];
          U.criteria instanceof a && U.criteria.updateArrows(this.s.criteria.length > 1);
        }
        this._setCriteriaListeners(y), y.setListeners(), this.setupLogic();
      }, v.prototype.checkFilled = function() {
        for (var l = 0, d = this.s.criteria; l < d.length; l++) {
          var y = d[l];
          if (y.criteria instanceof a && y.criteria.s.filled || y.criteria instanceof v && y.criteria.checkFilled())
            return !0;
        }
        return !1;
      }, v.prototype.count = function() {
        for (var l = 0, d = 0, y = this.s.criteria; d < y.length; d++) {
          var P = y[d];
          P.criteria instanceof v ? l += P.criteria.count() : l++;
        }
        return l;
      }, v.prototype._addPrevGroup = function(l) {
        var d = this.s.criteria.length, y = new v(this.s.dt, this.c, this.s.topGroup, d, !0, this.s.depth + 1, this.s.serverData);
        this.s.criteria.push({
          criteria: y,
          index: d,
          logic: y.s.logic
        }), y.rebuild(l), this.s.criteria[d].criteria = y, this.s.topGroup.trigger("dtsb-redrawContents"), this._setGroupListeners(y);
      }, v.prototype._addPrevCriteria = function(l) {
        var d = this.s.criteria.length, y = new a(this.s.dt, this.s.opts, this.s.topGroup, d, this.s.depth, this.s.serverData);
        y.populate(), this.s.criteria.push({
          criteria: y,
          index: d
        }), y.s.preventRedraw = this.s.preventRedraw, y.rebuild(l), y.s.preventRedraw = !1, this.s.criteria[d].criteria = y, this.s.preventRedraw || this.s.topGroup.trigger("dtsb-redrawContents");
      }, v.prototype._andSearch = function(l, d) {
        if (this.s.criteria.length === 0)
          return !0;
        for (var y = 0, P = this.s.criteria; y < P.length; y++) {
          var N = P[y];
          if (!(N.criteria instanceof a && !N.criteria.s.filled) && !N.criteria.search(l, d))
            return !1;
        }
        return !0;
      }, v.prototype._orSearch = function(l, d) {
        if (this.s.criteria.length === 0)
          return !0;
        for (var y = !1, P = 0, N = this.s.criteria; P < N.length; P++) {
          var p = N[P];
          if (p.criteria instanceof a && p.criteria.s.filled) {
            if (y = !0, p.criteria.search(l, d))
              return !0;
          } else if (p.criteria instanceof v && p.criteria.checkFilled() && (y = !0, p.criteria.search(l, d)))
            return !0;
        }
        return !y;
      }, v.prototype._removeCriteria = function(l, d) {
        d === void 0 && (d = !1);
        var y;
        if (this.s.criteria.length <= 1 && this.s.isChild)
          this.destroy();
        else {
          var P = void 0;
          for (y = 0; y < this.s.criteria.length; y++)
            this.s.criteria[y].index === l.s.index && (!d || this.s.criteria[y].criteria instanceof v) && (P = y);
          for (P !== void 0 && this.s.criteria.splice(P, 1), y = 0; y < this.s.criteria.length; y++)
            this.s.criteria[y].index = y, this.s.criteria[y].criteria.s.index = y;
        }
      }, v.prototype._setCriteriaListeners = function(l) {
        var d = this;
        l.dom.delete.unbind("click").on("click.dtsb", function() {
          d._removeCriteria(l), l.dom.container.remove();
          for (var y = 0, P = d.s.criteria; y < P.length; y++) {
            var N = P[y];
            N.criteria instanceof a && N.criteria.updateArrows(d.s.criteria.length > 1);
          }
          return l.destroy(), d.s.dt.draw(), d.s.topGroup.trigger("dtsb-redrawContents"), !1;
        }), l.dom.right.unbind("click").on("click.dtsb", function() {
          var y = l.s.index, P = new v(d.s.dt, d.s.opts, d.s.topGroup, l.s.index, !0, d.s.depth + 1, d.s.serverData);
          return P.addCriteria(l), d.s.criteria[y].criteria = P, d.s.criteria[y].logic = "AND", d.s.topGroup.trigger("dtsb-redrawContents"), d._setGroupListeners(P), !1;
        }), l.dom.left.unbind("click").on("click.dtsb", function() {
          d.s.toDrop = new a(d.s.dt, d.s.opts, d.s.topGroup, l.s.index, void 0, d.s.serverData), d.s.toDrop.s = l.s, d.s.toDrop.c = l.c, d.s.toDrop.classes = l.classes, d.s.toDrop.populate();
          var y = d.s.toDrop.s.index;
          return d.dom.container.trigger("dtsb-dropCriteria"), l.s.index = y, d._removeCriteria(l), d.s.topGroup.trigger("dtsb-redrawContents"), d.s.dt.draw(), !1;
        });
      }, v.prototype._setClearListener = function() {
        var l = this;
        this.dom.clear.unbind("click").on("click.dtsb", function() {
          return l.s.isChild ? (l.destroy(), l.s.topGroup.trigger("dtsb-redrawContents"), !1) : (l.dom.container.trigger("dtsb-clearContents"), !1);
        });
      }, v.prototype._setGroupListeners = function(l) {
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
      }, v.prototype._setup = function() {
        this.setListeners(), this.dom.add.html(this.s.dt.i18n("searchBuilder.add", this.c.i18n.add)), this.dom.search.html(this.s.dt.i18n("searchBuilder.search", this.c.i18n.search)), this.dom.logic.children().first().html(this.c.logic === "OR" ? this.s.dt.i18n("searchBuilder.logicOr", this.c.i18n.logicOr) : this.s.dt.i18n("searchBuilder.logicAnd", this.c.i18n.logicAnd)), this.s.logic = this.c.logic === "OR" ? "OR" : "AND", this.c.greyscale && this.dom.logic.addClass(this.classes.greyscale), this.dom.logicContainer.append(this.dom.logic).append(this.dom.clear), this.s.isChild && this.dom.container.append(this.dom.logicContainer), this.dom.container.append(this.dom.add), this.c.liveSearch || this.dom.container.append(this.dom.search);
      }, v.prototype._setLogicListener = function() {
        var l = this;
        this.dom.logic.unbind("click").on("click.dtsb", function() {
          l._toggleLogic(), l.s.dt.draw();
          for (var d = 0, y = l.s.criteria; d < y.length; d++) {
            var P = y[d];
            P.criteria.setListeners();
          }
        });
      }, v.prototype._toggleLogic = function() {
        this.s.logic === "OR" ? (this.s.logic = "AND", this.dom.logic.children().first().html(this.s.dt.i18n("searchBuilder.logicAnd", this.c.i18n.logicAnd))) : this.s.logic === "AND" && (this.s.logic = "OR", this.dom.logic.children().first().html(this.s.dt.i18n("searchBuilder.logicOr", this.c.i18n.logicOr)));
      }, v.version = "1.1.0", v.classes = {
        add: "dtsb-add",
        button: "dtsb-button",
        clearGroup: "dtsb-clearGroup",
        greyscale: "dtsb-greyscale",
        group: "dtsb-group",
        inputButton: "dtsb-iptbtn",
        logic: "dtsb-logic",
        logicContainer: "dtsb-logicContainer",
        search: "dtsb-search"
      }, v.defaults = {
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
      }, v;
    }()
  ), m, g;
  function _(v) {
    m = v, g = v.fn.DataTable;
  }
  var w = (
    /** @class */
    function() {
      function v(l, d) {
        var y = this;
        if (!g || !g.versionCheck || !g.versionCheck("2"))
          throw new Error("SearchBuilder requires DataTables 2 or newer");
        var P = new g.Api(l);
        if (this.classes = m.extend(!0, {}, v.classes), this.c = m.extend(!0, {}, v.defaults, d), this.dom = {
          clearAll: m('<button type="button">' + P.i18n("searchBuilder.clearAll", this.c.i18n.clearAll) + "</button>").addClass(this.classes.clearAll).addClass(this.classes.button).attr("type", "button"),
          container: m("<div/>").addClass(this.classes.container),
          title: m("<div/>").addClass(this.classes.title),
          titleRow: m("<div/>").addClass(this.classes.titleRow),
          topGroup: void 0
        }, this.s = {
          dt: P,
          opts: d,
          search: void 0,
          serverData: void 0,
          topGroup: void 0
        }, P.settings()[0]._searchBuilder === void 0)
          return P.settings()[0]._searchBuilder = this, this.s.dt.page.info().serverSide && (this.s.dt.on("preXhr.dtsb", function(N, p, M) {
            var U = y.s.dt.state.loaded();
            U && U.searchBuilder && (M.searchBuilder = y._collapseArray(U.searchBuilder));
          }), this.s.dt.on("xhr.dtsb", function(N, p, M) {
            M && M.searchBuilder && M.searchBuilder.options && (y.s.serverData = M.searchBuilder.options);
          })), this.s.dt.settings()[0]._bInitComplete ? this._setUp() : P.one("init.dt", function() {
            y._setUp();
          }), this;
      }
      return v.prototype.getDetails = function(l) {
        return l === void 0 && (l = !1), this.s.topGroup ? this.s.topGroup.getDetails(l) : {};
      }, v.prototype.getNode = function() {
        return this.dom.container;
      }, v.prototype.rebuild = function(l, d) {
        return d === void 0 && (d = !0), this.dom.clearAll.trigger("click", !1), l == null ? this : (this.s.topGroup.s.preventRedraw = !0, this.s.topGroup.rebuild(l), this.s.topGroup.s.preventRedraw = !1, this._checkClear(), this._updateTitle(this.s.topGroup.count()), this.s.topGroup.redrawContents(), d && this.s.dt.draw(!1), this.s.topGroup.setListeners(), this);
      }, v.prototype._applyPreDefDefaults = function(l) {
        var d = this;
        l.criteria !== void 0 && l.logic === void 0 && (l.logic = "AND");
        for (var y = function(U) {
          U.criteria !== void 0 ? U = P._applyPreDefDefaults(U) : P.s.dt.columns().every(function(q) {
            d.s.dt.settings()[0].aoColumns[q].sTitle === U.data && (U.dataIdx = q);
          });
        }, P = this, N = 0, p = l.criteria; N < p.length; N++) {
          var M = p[N];
          y(M);
        }
        return l;
      }, v.prototype._setUp = function(l) {
        var d = this;
        if (l === void 0 && (l = !0), typeof this.s.dt.column().type != "function" && I.Api.registerPlural("columns().types()", "column().type()", function() {
          return this.iterator("column", function(F, D) {
            return F.aoColumns[D].sType;
          }, 1);
        }), !g.DateTime) {
          var y = this.s.dt.columns().types().toArray();
          if (y === void 0 || y.includes(void 0) || y.includes(null)) {
            y = [];
            for (var P = 0, N = this.s.dt.settings()[0].aoColumns; P < N.length; P++) {
              var p = N[P];
              y.push(p.searchBuilderType !== void 0 ? p.searchBuilderType : p.sType);
            }
          }
          var M = this.s.dt.columns().toArray();
          (y === void 0 || y.includes(void 0) || y.includes(null)) && (m.fn.dataTable.ext.oApi && m.fn.dataTable.ext.oApi._fnColumnTypes(this.s.dt.settings()[0]), y = this.s.dt.columns().types().toArray());
          for (var U = 0; U < M[0].length; U++) {
            var q = M[0][U], z = y[q];
            if (
              // Check if this column can be filtered
              (this.c.columns === !0 || Array.isArray(this.c.columns) && this.c.columns.includes(U)) && // Check if the type is one of the restricted types
              (z.includes("date") || z.includes("moment") || z.includes("luxon"))
            )
              throw alert("SearchBuilder Requires DateTime when used with dates."), new Error("SearchBuilder requires DateTime");
          }
        }
        if (this.s.topGroup = new h(this.s.dt, this.c, void 0, void 0, void 0, void 0, this.s.serverData), this._setClearListener(), this.s.dt.on("stateSaveParams.dtsb", function(F, D, A) {
          A.searchBuilder = d.getDetails(), A.scroller ? A.start = d.s.dt.state().start : A.page = d.s.dt.page();
        }), this.s.dt.on("stateLoadParams.dtsb", function(F, D, A) {
          d.rebuild(A.searchBuilder);
        }), this._build(), this.s.dt.on("preXhr.dtsb", function(F, D, A) {
          d.s.dt.page.info().serverSide && (A.searchBuilder = d._collapseArray(d.getDetails(!0)));
        }), this.s.dt.on("columns-reordered", function() {
          d.rebuild(d.getDetails());
        }), l) {
          var ne = this.s.dt.state.loaded();
          ne !== null && ne.searchBuilder !== void 0 ? (this.s.topGroup.rebuild(ne.searchBuilder), this.s.topGroup.dom.container.trigger("dtsb-redrawContents"), this.s.dt.page.info().serverSide || (ne.page ? this.s.dt.page(ne.page).draw("page") : this.s.dt.scroller && ne.scroller && this.s.dt.scroller().scrollToRow(ne.scroller.topRow)), this.s.topGroup.setListeners()) : this.c.preDefined !== !1 && (this.c.preDefined = this._applyPreDefDefaults(this.c.preDefined), this.rebuild(this.c.preDefined));
        }
        this._setEmptyListener(), this.s.dt.state.save();
      }, v.prototype._collapseArray = function(l) {
        if (l.logic === void 0)
          l.value !== void 0 && (l.value.sort(function(y, P) {
            return isNaN(+y) || (y = +y, P = +P), y < P ? -1 : P < y ? 1 : 0;
          }), l.value1 = l.value[0], l.value2 = l.value[1]);
        else
          for (var d = 0; d < l.criteria.length; d++)
            l.criteria[d] = this._collapseArray(l.criteria[d]);
        return l;
      }, v.prototype._updateTitle = function(l) {
        this.dom.title.html(this.s.dt.i18n("searchBuilder.title", this.c.i18n.title, l));
      }, v.prototype._build = function() {
        var l = this;
        this.dom.clearAll.remove(), this.dom.container.empty();
        var d = this.s.topGroup.count();
        this._updateTitle(d), this.dom.titleRow.append(this.dom.title), this.dom.container.append(this.dom.titleRow), this.dom.topGroup = this.s.topGroup.getNode(), this.dom.container.append(this.dom.topGroup), this._setRedrawListener();
        var y = this.s.dt.table(0).node();
        m.fn.dataTable.ext.search.includes(this.s.search) || (this.s.search = function(P, N, p) {
          return P.nTable !== y ? !0 : l.s.topGroup.search(N, p);
        }, m.fn.dataTable.ext.search.push(this.s.search)), this.s.dt.on("destroy.dtsb", function() {
          l.dom.container.remove(), l.dom.clearAll.remove();
          for (var P = m.fn.dataTable.ext.search.indexOf(l.s.search); P !== -1; )
            m.fn.dataTable.ext.search.splice(P, 1), P = m.fn.dataTable.ext.search.indexOf(l.s.search);
          l.s.dt.off(".dtsb"), m(l.s.dt.table().node()).off(".dtsb");
        });
      }, v.prototype._checkClear = function() {
        this.s.topGroup.s.criteria.length > 0 ? (this.dom.clearAll.insertAfter(this.dom.title), this._setClearListener()) : this.dom.clearAll.remove();
      }, v.prototype._filterChanged = function(l) {
        var d = this.c.filterChanged;
        typeof d == "function" && d(l, this.s.dt.i18n("searchBuilder.button", this.c.i18n.button, l));
      }, v.prototype._setClearListener = function() {
        var l = this;
        this.dom.clearAll.unbind("click"), this.dom.clearAll.on("click.dtsb", function(d, y) {
          return l.s.topGroup = new h(l.s.dt, l.c, void 0, void 0, void 0, void 0, l.s.serverData), l._build(), y !== !1 && l.s.dt.draw(), l.s.topGroup.setListeners(), l.dom.clearAll.remove(), l._setEmptyListener(), l._filterChanged(0), !1;
        });
      }, v.prototype._setRedrawListener = function() {
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
      }, v.prototype._setEmptyListener = function() {
        var l = this;
        this.s.topGroup.dom.add.on("click.dtsb", function() {
          l._checkClear();
        }), this.s.topGroup.dom.container.on("dtsb-destroy.dtsb", function() {
          l.dom.clearAll.remove();
        });
      }, v.version = "1.8.4", v.classes = {
        button: "dtsb-button",
        clearAll: "dtsb-clearAll",
        container: "dtsb-searchBuilder",
        inputButton: "dtsb-iptbtn",
        title: "dtsb-title",
        titleRow: "dtsb-titleRow"
      }, v.defaults = {
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
      }, v;
    }()
  );
  /*! SearchBuilder 1.8.4
   * ©SpryMedia Ltd - datatables.net/license/mit
   */
  _(Jn), c(Jn), i(Jn);
  var C = Jn.fn.dataTable;
  I.SearchBuilder = w, C.SearchBuilder = w, I.Group = h, C.Group = h, I.Criteria = a, C.Criteria = a;
  var k = I.Api.register;
  I.ext.searchBuilder = {
    conditions: {}
  }, I.ext.buttons.searchBuilder = {
    action: function(v, l, d, y) {
      this.popover(y._searchBuilder.getNode(), {
        align: "container",
        span: "container"
      });
      var P = y._searchBuilder.s.topGroup;
      P !== void 0 && P.dom.container.trigger("dtsb-redrawContents-noDraw"), P.s.criteria.length === 0 && Jn("." + Jn.fn.dataTable.Group.classes.add.replace(/ /g, ".")).click();
    },
    config: {},
    init: function(v, l, d) {
      var y = this, P = new I.SearchBuilder(v, d.config);
      v.on("draw", function() {
        var N = P.s.topGroup ? P.s.topGroup.count() : 0;
        y.text(v.i18n("searchBuilder.button", P.c.i18n.button, N));
      }), y.text(d.text || v.i18n("searchBuilder.button", P.c.i18n.button, 0)), d._searchBuilder = P;
    },
    text: null
  }, k("searchBuilder.getDetails()", function(v) {
    v === void 0 && (v = !1);
    var l = this.context[0];
    return l._searchBuilder ? l._searchBuilder.getDetails(v) : null;
  }), k("searchBuilder.rebuild()", function(v, l) {
    l === void 0 && (l = !0);
    var d = this.context[0];
    return d._searchBuilder === void 0 ? null : (d._searchBuilder.rebuild(v, l), this);
  }), k("searchBuilder.container()", function() {
    var v = this.context[0];
    return v._searchBuilder ? v._searchBuilder.getNode() : null;
  });
  function S(v, l) {
    var d = new I.Api(v), y = l || d.init().searchBuilder || I.defaults.searchBuilder, P = new w(d, y), N = P.getNode();
    return N;
  }
  Jn(document).on("preInit.dt.dtsp", function(v, l) {
    v.namespace === "dt" && (l.oInit.searchBuilder || I.defaults.searchBuilder) && (l._searchBuilder || S(l));
  }), I.ext.feature.push({
    cFeature: "Q",
    fnInit: S
  }), I.feature && I.feature.register("searchBuilder", S);
})();
/*! Bootstrap 5 ui integration for DataTables' SearchBuilder
 * © SpryMedia Ltd - datatables.net/license
 */
let so = Ue;
so.extend(!0, I.SearchBuilder.classes, {
  clearAll: "btn btn-secondary dtsb-clearAll"
});
so.extend(!0, I.Group.classes, {
  add: "btn btn-secondary dtsb-add",
  clearGroup: "btn btn-secondary dtsb-clearGroup",
  logic: "btn btn-secondary dtsb-logic",
  search: "btn btn-secondary dtsb-search"
});
so.extend(!0, I.Criteria.classes, {
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
let Dt = Ue;
var Wn = function(e, t) {
  if (!I.versionCheck || !I.versionCheck("2"))
    throw new Error("RowGroup requires DataTables 2 or newer");
  this.c = Dt.extend(!0, {}, I.defaults.rowGroup, Wn.defaults, t), this.s = {
    dt: new I.Api(e)
  }, this.dom = {};
  var n = this.s.dt.settings()[0], r = n.rowGroup;
  if (r)
    return r;
  n.rowGroup = this, this._constructor();
};
Dt.extend(Wn.prototype, {
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
    return this.c.dataSrc = e, Dt(t.table().node()).triggerHandler("rowgroup-datasrc.dt", [t, e]), this;
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
    var e = this, t = this.s.dt, n = t.settings()[0], r = Dt("div.dt-scroll-body", t.table().container());
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
    let e = Dt("tr." + this.c.className, this.s.dt.table().body()).find("th:visible, td:visible");
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
    var n = Array.isArray(this.c.dataSrc) ? this.c.dataSrc : [this.c.dataSrc], r = I.util.get(n[e]), i = this.s.dt, a, o, c, h, m = [], g = this;
    for (c = 0, h = t.length; c < h; c++) {
      var _ = t[c], w = i.row(_).data();
      a = r(w, e), a == null && (a = g.c.emptyDataGroup), (o === void 0 || a !== o) && (m.push({
        dataPoint: a,
        rows: []
      }), o = a), m[m.length - 1].rows.push(_);
    }
    if (n[e + 1] !== void 0)
      for (c = 0, h = m.length; c < h; c++)
        m[c].children = this._group(e + 1, m[c].rows);
    return m;
  },
  /**
   * Row group display - insert the rows into the document
   * @param {number} level Nesting level
   * @param {object[]} groups Takes the nested array from `_group`
   * @private
   */
  _groupDisplay: function(e, t) {
    for (var n = this.s.dt, r, i = 0, a = t.length; i < a; i++) {
      var o = t[i], c = o.dataPoint, h, m = o.rows;
      this.c.startRender && (r = this.c.startRender.call(this, n.rows(m), c, e), h = this._rowWrap(r, this.c.startClassName, e), h && h.insertBefore(n.row(m[0]).node())), this.c.endRender && (r = this.c.endRender.call(this, n.rows(m), c, e), h = this._rowWrap(r, this.c.endClassName, e), h && h.insertAfter(n.row(m[m.length - 1]).node())), o.children && this._groupDisplay(e + 1, o.children);
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
    return (e === null || e === "") && (e = this.c.emptyDataGroup), e == null ? null : (typeof e == "object" && e.nodeName && e.nodeName.toLowerCase() === "tr" ? r = Dt(e) : e instanceof Dt && e.length && e[0].nodeName.toLowerCase() === "tr" ? r = e : r = Dt("<tr/>").append(
      Dt("<th/>").attr("colspan", this._colspan()).attr("scope", "row").append(e)
    ), r.addClass(this.c.className).addClass(t).addClass("dtrg-level-" + n));
  }
});
Wn.defaults = {
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
Wn.version = "1.6.0";
Dt.fn.dataTable.RowGroup = Wn;
Dt.fn.DataTable.RowGroup = Wn;
I.Api.register("rowGroup()", function() {
  return this;
});
I.Api.register("rowGroup().disable()", function() {
  return this.iterator("table", function(e) {
    e.rowGroup && e.rowGroup.enable(!1);
  });
});
I.Api.register("rowGroup().enable()", function(e) {
  return this.iterator("table", function(t) {
    t.rowGroup && t.rowGroup.enable(e === void 0 ? !0 : e);
  });
});
I.Api.register("rowGroup().enabled()", function() {
  var e = this.context;
  return e.length && e[0].rowGroup ? e[0].rowGroup.enabled() : !1;
});
I.Api.register("rowGroup().dataSrc()", function(e) {
  if (e === void 0) {
    let t = this.context[0].rowGroup;
    return t ? t.dataSrc() : [];
  }
  return this.iterator("table", function(t) {
    t.rowGroup || new Wn(this.context[0]), t.rowGroup.dataSrc(e);
  });
});
Dt(document).on("preInit.dt.dtrg", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = t.oInit.rowGroup, i = I.defaults.rowGroup;
    if (r || i) {
      var a = Dt.extend({}, i, r);
      r !== !1 && new Wn(t, a);
    }
  }
});
/*! RowReorder 1.5.1
 * © SpryMedia Ltd - datatables.net/license
 */
let de = Ue;
var cr = function(e, t) {
  if (!I.versionCheck || !I.versionCheck("1.11"))
    throw "DataTables RowReorder requires DataTables 1.11 or newer";
  this.c = de.extend(!0, {}, I.defaults.rowReorder, cr.defaults, t), this.s = {
    /** @type {integer} Scroll body top cache */
    bodyTop: null,
    /** @type {DataTable.Api} DataTables' API instance */
    dt: new I.Api(e),
    /** @type {function} Data fetch function */
    getDataFn: I.util.get(this.c.dataSrc),
    /** @type {array} Pixel positions for row insertion calculation */
    middles: null,
    /** @type {Object} Cached dimension information for use in the mouse move event handler */
    scroll: {},
    /** @type {integer} Interval object used for smooth scrolling */
    scrollInterval: null,
    /** @type {function} Data set function */
    setDataFn: I.util.set(this.c.dataSrc),
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
de.extend(cr.prototype, {
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
    var t = this.s.dt, n = de(t.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(e.clone(!1)), r = e.outerWidth(), i = e.outerHeight(), a = de(de(this.s.dt.table().node()).parent()), o = a.width(), c = a.scrollLeft(), h = e.children().map(function() {
      return de(this).width();
    });
    n.width(r).height(i).find("tr").children().each(function(g) {
      this.style.width = h[g] + "px";
    });
    var m = de("<div>").addClass("dt-rowReorder-float-parent").width(o).append(n).appendTo("body").scrollLeft(c);
    this.dom.clone = n, this.dom.cloneParent = m, this.s.domCloneOuterHeight = n.outerHeight();
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
    var c = this._eventToPage(e, "Y") - this.s.bodyTop;
    i.rowIndex = this._calcRowIndexByPos(c), this.dom.target = t, t.addClass("dt-rowReorder-moving"), de(document).on("mouseup.rowReorder touchend.rowReorder", function(m) {
      n._mouseUp(m);
    }).on("mousemove.rowReorder touchmove.rowReorder", function(m) {
      n._mouseMove(m);
    }), de(window).width() === de(document).width() && de(document.body).addClass("dt-rowReorder-noOverflow");
    var h = this.dom.dtScroll;
    this.s.scroll = {
      windowHeight: de(window).height(),
      windowWidth: de(window).width(),
      dtTop: h.length ? h.offset().top : null,
      dtLeft: h.length ? h.offset().left : null,
      dtHeight: h.length ? h.outerHeight() : null,
      dtWidth: h.length ? h.outerWidth() : null
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
    for (var a = this._eventToPage(e, "Y") - this.s.bodyTop, o = this.s.middles, c = null, h = 0, m = o.length; h < m; h++)
      if (a < o[h]) {
        c = h;
        break;
      }
    c === null && (c = o.length), n && (this.s.dropAllowed || (c = t.rowIndex > this.s.lastInsert ? t.rowIndex + 1 : t.rowIndex), this.dom.target.toggleClass("dt-rowReorder-moving", this.s.dropAllowed)), this._moveTargetIntoPosition(c), this._shiftScroll(e);
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
    var c = this.s.start.nodes, h = de.uniqueSort(n.rows({ page: "current" }).nodes().toArray()), m = {}, g = [], _ = [], w = this.s.getDataFn, C = this.s.setDataFn;
    for (r = 0, i = c.length; r < i; r++)
      if (c[r] !== h[r]) {
        var k = n.row(h[r]).id(), S = n.row(h[r]).data(), v = n.row(c[r]).data();
        k && (m[k] = w(v)), g.push({
          node: h[r],
          oldData: w(S),
          newData: w(v),
          newPosition: r,
          oldPosition: de.inArray(h[r], c)
        }), _.push(h[r]);
      }
    var l = [
      g,
      {
        dataSrc: a,
        nodes: _,
        values: m,
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
        for (r = 0, i = g.length; r < i; r++) {
          var P = n.row(g[r].node), N = P.data();
          C(N, g[r].newData), n.columns().every(function() {
            this.dataSrc() === a && n.cell(g[r].node, this.index()).invalidate("data");
          });
        }
        t._emitEvent("row-reordered", l), n.draw(!1);
      }
    };
    this.c.editor ? (this.c.enable = !1, this.c.editor.edit(_, !1, de.extend({ submit: "changed" }, this.c.formOptions)).multiSet(a, m).one("preSubmitCancelled.rowReorder", function() {
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
    var t = this, n = this.s.scroll, r = !1, i = 5, a = 65, o = e.pageY - document.body.scrollTop, c, h;
    o < de(window).scrollTop() + a ? c = i * -1 : o > n.windowHeight + de(window).scrollTop() - a && (c = i), n.dtTop !== null && e.pageY < n.dtTop + a ? h = i * -1 : n.dtTop !== null && e.pageY > n.dtTop + n.dtHeight - a && (h = i), c || h ? (n.windowVert = c, n.dtVert = h, r = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), this.s.scrollInterval = null), !this.s.scrollInterval && r && (this.s.scrollInterval = setInterval(function() {
      if (n.windowVert) {
        var m = de(document).scrollTop();
        if (de(document).scrollTop(m + n.windowVert), m !== de(document).scrollTop()) {
          var g = parseFloat(t.dom.cloneParent.css("top"));
          t.dom.cloneParent.css("top", g + n.windowVert);
        }
      }
      if (n.dtVert) {
        var _ = t.dom.dtScroll[0];
        n.dtVert && (_.scrollTop += n.dtVert);
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
      var c = de(o).position().top - i, h = c + de(o).outerHeight();
      e >= c && e <= h && (r = a);
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
cr.defaults = {
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
var ao = de.fn.dataTable.Api;
ao.register("rowReorder()", function() {
  return this;
});
ao.register("rowReorder.enable()", function(e) {
  return e === void 0 && (e = !0), this.iterator("table", function(t) {
    t.rowreorder && (t.rowreorder.c.enable = e);
  });
});
ao.register("rowReorder.disable()", function() {
  return this.iterator("table", function(e) {
    e.rowreorder && (e.rowreorder.c.enable = !1);
  });
});
cr.version = "1.5.1";
de.fn.dataTable.RowReorder = cr;
de.fn.DataTable.RowReorder = cr;
de(document).on("init.dt.dtr", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = t.oInit.rowReorder, i = I.defaults.rowReorder;
    if (r || i) {
      var a = de.extend({}, r, i);
      r !== !1 && new cr(t, a);
    }
  }
});
/*! FixedHeader 4.0.6
 * © SpryMedia Ltd - datatables.net/license
 */
let fe = Ue;
var Uh = 0, $n = function(e, t) {
  if (!I.versionCheck("2"))
    throw "Warning: FixedHeader requires DataTables 2 or newer";
  if (!(this instanceof $n))
    throw "FixedHeader must be initialised with the 'new' keyword.";
  t === !0 && (t = {}), e = new I.Api(e), this.c = fe.extend(!0, {}, $n.defaults, t), this.s = {
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
    namespace: ".dtfc" + Uh++,
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
fe.extend($n.prototype, {
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
      I.util.throttle(function() {
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
        var o = fe(r.table().node()), c = fe(o.parent()), h = this._scrollEnabled();
        i.floating = fe(r.table().node().cloneNode(!1)).attr("aria-hidden", "true").css({
          top: 0,
          left: 0
        }).removeAttr("id"), i.floatingParent.css({
          width: c[0].offsetWidth,
          position: "fixed",
          left: h ? o.offset().left + c.scrollLeft() : 0
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
        var m = function() {
          var _ = c.scrollLeft();
          n.s.scrollLeft = { footer: _, header: _ }, i.limiter.scrollLeft(n.s.scrollLeft.header);
        };
        m(), c.off("scroll.dtfh").on("scroll.dtfh", m), i.scrollAdjust.css({
          width: "fit-content",
          paddingRight: n.s.dt.settings()[0].oBrowser.barWidth
        });
        let g = fe(
          e === "footer" ? "div.dtfc-bottom-blocker" : "div.dtfc-top-blocker",
          r.table().container()
        );
        return g.length && g.clone().appendTo(i.floatingParent).css({
          position: "fixed",
          right: g.width()
        }), i.placeholder = a.clone(!1), i.placeholder.find("*[id]").removeAttr("id"), fe(i.placeholder).insertAfter(
          fe(e === "header" ? "colgroup" : "tbody", i.host)
        ), i.floating.append(a), this._widths(i), m;
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
      var c = function(P) {
        i.floating[0].style.setProperty("width", P + "px", "important"), o || i.floatingParent[0].style.setProperty("width", P + "px", "important");
      }, h = this.dom[t === "footer" ? "tfoot" : "thead"], m = fe.contains(h[0], document.activeElement) ? document.activeElement : null, g = fe(fe(this.s.dt.table().node()).parent());
      if (e === "in-place")
        i.placeholder && (i.placeholder.remove(), i.placeholder = null), fe.contains(i.host[0], h[0]) || (t === "header" ? h.insertAfter(fe("colgroup", i.host)) : i.host.append(h)), i.floating && (i.floating.remove(), i.floating = null, this._stickyPosition(i.host, "+")), i.floatingParent && (i.floatingParent.find("div.dtfc-top-blocker").remove(), i.floatingParent.remove()), fe(fe(i.host.parent()).parent()).scrollLeft(
          g.scrollLeft()
        );
      else if (e === "in") {
        let P = this._clone(t, n);
        var _ = g.offset(), w = fe(document).scrollTop(), C = fe(window).height(), k = w + C, S = o ? _.top : a.tbodyTop, v = o ? _.top + g.outerHeight() : a.tfootTop, l;
        t === "footer" ? l = S > k ? a.tfootHeight : S + a.tfootHeight - k : l = w + this.c.headerOffset + a.theadHeight - v;
        var d = t === "header" ? "top" : "bottom", y = this.c[t + "Offset"] - (l > 0 ? l : 0);
        i.floating.addClass("fixedHeader-floating"), i.floatingParent.css(d, y).css({
          left: a.left,
          "z-index": 3
        }), c(a.width), P && P(), t === "footer" && i.floating.css("top", "");
      } else
        e === "below" ? (this._clone(t, n), i.floating.addClass("fixedHeader-locked"), i.floatingParent.css({
          position: "absolute",
          top: a.tfootTop - a.theadHeight,
          left: a.left + "px"
        }), c(a.width)) : e === "above" && (this._clone(t, n), i.floating.addClass("fixedHeader-locked"), i.floatingParent.css({
          position: "absolute",
          top: a.tbodyTop,
          left: a.left + "px"
        }), c(a.width));
      m && m !== document.activeElement && setTimeout(function() {
        m.focus();
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
    var e = this.s.dt, t = e.table(), n = this.s.position, r = this.dom, i = fe(t.node()), a = this._scrollEnabled(), o = fe(e.table().header()), c = fe(e.table().footer()), h = r.tbody, m = i.parent();
    n.visible = i.is(":visible"), n.width = i.outerWidth(), n.left = i.offset().left, n.theadTop = o.offset().top, n.tbodyTop = a ? m.offset().top : h.offset().top, n.tbodyHeight = a ? m.outerHeight() : h.outerHeight(), n.theadHeight = o.outerHeight(), n.theadBottom = n.theadTop + n.theadHeight, n.tfootTop = n.tbodyTop + n.tbodyHeight, c.length ? (n.tfootBottom = n.tfootTop + c.outerHeight(), n.tfootHeight = c.outerHeight()) : (n.tfootBottom = n.tfootTop, n.tfootHeight = 0);
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
      var t = this._scrollEnabled(), n = fe(this.s.dt.table().node()).parent(), r = n.offset(), i = n.outerHeight(), a = fe(document).scrollLeft(), o = fe(document).scrollTop(), c = fe(window).height(), h = c + o, m = this.s.position, g, _, w = t ? r.top : m.tbodyTop, C = t ? r.left : m.left, k = t ? r.top + i : m.tfootTop, S = t ? n.outerWidth() : m.tbodyWidth;
      if (this.c.header) {
        if (!this.s.enable)
          g = "in-place";
        else if (!m.visible || o + this.c.headerOffset + m.theadHeight <= w)
          g = "in-place";
        else if (
          // The scrolling plus the header offset plus the height of the header is lower than the top of the body
          o + this.c.headerOffset + m.theadHeight > w && // And the scrolling at the top plus the header offset is above the bottom of the body
          o + this.c.headerOffset + m.theadHeight < k
        )
          if (g = "in", o + this.c.headerOffset + m.theadHeight > k || this.dom.header.floatingParent === void 0)
            e = !0;
          else {
            var v = this.dom.header.floatingParent.css({
              top: this.c.headerOffset,
              position: "fixed"
            }).children().eq(0);
            v.find(this.dom.header.floating).length === 0 && v.append(this.dom.header.floating);
          }
        else
          g = "below";
        (e || g !== this.s.headerMode) && this._modeChange(g, "header", e), this._horizontal("header", a);
      }
      var l = {
        offset: { top: 0, left: 0 },
        height: 0
      }, d = {
        offset: { top: 0, left: 0 },
        height: 0
      };
      if (this.c.footer && this.dom.tfoot.length && this.dom.tfoot.find("th, td").length) {
        this.s.enable ? !m.visible || m.tfootBottom + this.c.footerOffset <= h ? _ = "in-place" : k + m.tfootHeight + this.c.footerOffset > h && w + this.c.footerOffset < h ? (_ = "in", e = !0) : _ = "above" : _ = "in-place", (e || _ !== this.s.footerMode) && this._modeChange(_, "footer", e), this._horizontal("footer", a);
        var y = function(M) {
          return {
            offset: M.offset(),
            height: M.outerHeight()
          };
        };
        if (l = this.dom.header.floating ? y(this.dom.header.floating) : y(this.dom.thead), d = this.dom.footer.floating ? y(this.dom.footer.floating) : y(this.dom.tfoot), t && d.offset.top > o) {
          var P = o - r.top, N = h + // If the gap between the top of the scrollbody and the window is more than
          //  the height of the header then the top of the table is still visible so add that gap
          // Doing this has effectively calculated the height from the top of the table to the bottom of the current page
          (P > -l.height ? P : 0) - // Take from that
          // The top of the header plus
          (l.offset.top + // The header height if the standard header is present
          (P < -l.height ? l.height : 0) + // And the height of the footer
          d.height);
          N < 0 && (N = 0), n.outerHeight(N), Math.round(n.outerHeight()) >= Math.round(N) ? fe(this.dom.tfoot.parent()).addClass("fixedHeader-floating") : fe(this.dom.tfoot.parent()).removeClass(
            "fixedHeader-floating"
          );
        }
      }
      if (this.dom.header.floating && this.dom.header.floatingParent.css("left", C - a), this.dom.footer.floating && this.dom.footer.floatingParent.css("left", C - a), this.s.dt.settings()[0]._fixedColumns !== void 0) {
        var p = function(M, U, q) {
          if (q === void 0) {
            var z = fe(
              "div.dtfc-" + M + "-" + U + "-blocker"
            );
            q = z.length === 0 ? null : z.clone().css("z-index", 1);
          }
          return q !== null && (g === "in" || g === "below" ? q.appendTo("body").css({
            top: U === "top" ? l.offset.top : d.offset.top,
            left: M === "right" ? C + S - q.width() : C
          }) : q.detach()), q;
        };
        this.dom.header.rightBlocker = p(
          "right",
          "top",
          this.dom.header.rightBlocker
        ), this.dom.header.leftBlocker = p(
          "left",
          "top",
          this.dom.header.leftBlocker
        ), this.dom.footer.rightBlocker = p(
          "right",
          "bottom",
          this.dom.footer.rightBlocker
        ), this.dom.footer.leftBlocker = p(
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
$n.version = "4.0.6";
$n.defaults = {
  header: !0,
  footer: !1,
  headerOffset: 0,
  footerOffset: 0
};
fe.fn.dataTable.FixedHeader = $n;
fe.fn.DataTable.FixedHeader = $n;
fe(document).on("init.dt.dtfh", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = t.oInit.fixedHeader, i = I.defaults.fixedHeader;
    if ((r || i) && !t._fixedHeader) {
      var a = fe.extend({}, i, r);
      r !== !1 && new $n(t, a);
    }
  }
});
I.Api.register("fixedHeader()", function() {
});
I.Api.register("fixedHeader.adjust()", function() {
  return this.iterator("table", function(e) {
    var t = e._fixedHeader;
    t && t.update();
  });
});
I.Api.register("fixedHeader.enable()", function(e) {
  return this.iterator("table", function(t) {
    var n = t._fixedHeader;
    e = e !== void 0 ? e : !0, n && e !== n.enabled() && n.enable(e);
  });
});
I.Api.register("fixedHeader.enabled()", function() {
  if (this.context.length) {
    var e = this.context[0]._fixedHeader;
    if (e)
      return e.enabled();
  }
  return !1;
});
I.Api.register("fixedHeader.disable()", function() {
  return this.iterator("table", function(e) {
    var t = e._fixedHeader;
    t && t.enabled() && t.enable(!1);
  });
});
fe.each(["header", "footer"], function(e, t) {
  I.Api.register("fixedHeader." + t + "Offset()", function(n) {
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
let yn = Ue;
(function() {
  var e, t;
  function n(o) {
    e = o, t = e.fn.dataTable;
  }
  var r = (
    /** @class */
    function() {
      function o(c, h) {
        var m = this;
        if (!t || !t.versionCheck || !t.versionCheck("2"))
          throw new Error("FixedColumns requires DataTables 2 or newer");
        var g = new t.Api(c);
        this.classes = e.extend(!0, {}, o.classes), this.c = e.extend(!0, {}, o.defaults, h), this.s = {
          dt: g,
          rtl: e(g.table().node()).css("direction") === "rtl"
        }, h && h.leftColumns !== void 0 && (h.left = h.leftColumns), h && h.left !== void 0 && (this.c[this.s.rtl ? "end" : "start"] = h.left), h && h.rightColumns !== void 0 && (h.right = h.rightColumns), h && h.right !== void 0 && (this.c[this.s.rtl ? "start" : "end"] = h.right), this.dom = {
          bottomBlocker: e("<div>").addClass(this.classes.bottomBlocker),
          topBlocker: e("<div>").addClass(this.classes.topBlocker),
          scroller: e("div.dt-scroll-body", this.s.dt.table().container())
        }, this.s.dt.settings()[0]._bInitComplete ? (this._addStyles(), this._setKeyTableListener()) : g.one("init.dt.dtfc", function() {
          m._addStyles(), m._setKeyTableListener();
        }), g.on("column-sizing.dt.dtfc column-reorder.dt.dtfc draw.dt.dtfc", function() {
          return m._addStyles();
        });
        var _ = t.util.debounce(function() {
          m._addStyles();
        }, 50);
        return g.on("column-visibility.dt.dtfc", function() {
          _();
        }), this.dom.scroller.on("scroll.dtfc", function() {
          return m._scroll();
        }), this._scroll(), g.settings()[0]._fixedColumns = this, g.on("destroy", function() {
          return m._destroy();
        }), this;
      }
      return o.prototype.end = function(c) {
        return c !== void 0 ? (c >= 0 && c <= this.s.dt.columns().count() && (this.c.end = c, this._addStyles()), this) : this.c.end;
      }, o.prototype.left = function(c) {
        return this.s.rtl ? this.end(c) : this.start(c);
      }, o.prototype.right = function(c) {
        return this.s.rtl ? this.start(c) : this.end(c);
      }, o.prototype.start = function(c) {
        return c !== void 0 ? (c >= 0 && c <= this.s.dt.columns().count() && (this.c.start = c, this._addStyles()), this) : this.c.start;
      }, o.prototype._addStyles = function() {
        var c = this.s.dt, h = this, m = this.s.dt.columns(":visible").count(), g = c.table().header.structure(":visible"), _ = c.table().footer.structure(":visible"), w = c.columns(":visible").widths().toArray(), C = e(c.table().node()).closest("div.dt-scroll"), k = e(c.table().node()).closest("div.dt-scroll-body")[0], S = this.s.rtl, v = this.c.start, l = this.c.end, d = S ? l : v, y = S ? v : l, P = c.settings()[0].oBrowser.barWidth;
        if (C.length === 0)
          return this;
        k.offsetWidth === k.clientWidth && (P = 0), c.columns().every(function(q) {
          var z = c.column.index("toVisible", q), ne;
          z !== null && (z < v ? (ne = h._sum(w, z), h._fixColumn(z, ne, "start", g, _, P)) : z >= m - l ? (ne = h._sum(w, m - z - 1, !0), h._fixColumn(z, ne, "end", g, _, P)) : h._fixColumn(z, 0, "none", g, _, P));
        }), e(c.table().node()).toggleClass(h.classes.tableFixedStart, v > 0).toggleClass(h.classes.tableFixedEnd, l > 0).toggleClass(h.classes.tableFixedLeft, d > 0).toggleClass(h.classes.tableFixedRight, y > 0);
        var N = c.table().header(), p = c.table().footer(), M = e(N).outerHeight(), U = e(p).outerHeight();
        this.dom.topBlocker.appendTo(C).css("top", 0).css(this.s.rtl ? "left" : "right", 0).css("height", M).css("width", P + 1).css("display", P ? "block" : "none"), p && this.dom.bottomBlocker.appendTo(C).css("bottom", 0).css(this.s.rtl ? "left" : "right", 0).css("height", U).css("width", P + 1).css("display", P ? "block" : "none");
      }, o.prototype._destroy = function() {
        this.s.dt.off(".dtfc"), this.dom.scroller.off(".dtfc"), e(this.s.dt.table().node()).removeClass(this.classes.tableScrollingEnd + " " + this.classes.tableScrollingLeft + " " + this.classes.tableScrollingStart + " " + this.classes.tableScrollingRight), this.dom.bottomBlocker.remove(), this.dom.topBlocker.remove();
      }, o.prototype._fixColumn = function(c, h, m, g, _, w) {
        var C = this, k = this.s.dt, S = function(v, l) {
          if (m === "none")
            v.css("position", "").css("left", "").css("right", "").removeClass(C.classes.fixedEnd + " " + C.classes.fixedLeft + " " + C.classes.fixedRight + " " + C.classes.fixedStart);
          else {
            var d = m === "start" ? "left" : "right";
            C.s.rtl && (d = m === "start" ? "right" : "left");
            var y = h;
            m === "end" && (l === "header" || l === "footer") && (y += w), v.css("position", "sticky").css(d, y).addClass(m === "start" ? C.classes.fixedStart : C.classes.fixedEnd).addClass(d === "left" ? C.classes.fixedLeft : C.classes.fixedRight);
          }
        };
        g.forEach(function(v) {
          v[c] && S(e(v[c].cell), "header");
        }), S(k.column(c + ":visible", { page: "current" }).nodes().to$(), "body"), _ && _.forEach(function(v) {
          v[c] && S(e(v[c].cell), "footer");
        });
      }, o.prototype._scroll = function() {
        var c = this.dom.scroller[0];
        if (c) {
          var h = e(this.s.dt.table().node()).add(this.s.dt.table().header().parentNode).add(this.s.dt.table().footer().parentNode).add("div.dt-scroll-headInner table", this.s.dt.table().container()).add("div.dt-scroll-footInner table", this.s.dt.table().container()), m = c.scrollLeft, g = !this.s.rtl, _ = m !== 0, w = c.scrollWidth > c.clientWidth + Math.abs(m) + 1;
          h.toggleClass(this.classes.tableScrollingStart, _), h.toggleClass(this.classes.tableScrollingEnd, w), h.toggleClass(this.classes.tableScrollingLeft, _ && g || w && !g), h.toggleClass(this.classes.tableScrollingRight, w && g || _ && !g);
        }
      }, o.prototype._setKeyTableListener = function() {
        var c = this;
        this.s.dt.on("key-focus.dt.dtfc", function(h, m, g) {
          var _, w = e(g.node()).offset(), C = c.dom.scroller[0], k = e(e(c.s.dt.table().node()).closest("div.dt-scroll-body"));
          if (c.c.start > 0) {
            var S = e(c.s.dt.column(c.c.start - 1).header()), v = S.offset(), l = S.outerWidth();
            e(g.node()).hasClass(c.classes.fixedLeft) ? k.scrollLeft(0) : w.left < v.left + l && (_ = k.scrollLeft(), k.scrollLeft(_ - (v.left + l - w.left)));
          }
          if (c.c.end > 0) {
            var d = c.s.dt.columns().data().toArray().length, y = e(g.node()).outerWidth(), P = e(c.s.dt.column(d - c.c.end).header()), N = P.offset();
            e(g.node()).hasClass(c.classes.fixedRight) ? k.scrollLeft(C.scrollWidth - C.clientWidth) : w.left + y > N.left && (_ = k.scrollLeft(), k.scrollLeft(_ - (N.left - (w.left + y))));
          }
        });
      }, o.prototype._sum = function(c, h, m) {
        return m === void 0 && (m = !1), m && (c = c.slice().reverse()), c.slice(0, h).reduce(function(g, _) {
          return g + _;
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
  n(yn), yn.fn.dataTable.FixedColumns = r, yn.fn.DataTable.FixedColumns = r;
  var i = I.Api.register;
  i("fixedColumns()", function() {
    return this;
  }), i("fixedColumns().start()", function(o) {
    var c = this.context[0];
    return o !== void 0 ? (c._fixedColumns.start(o), this) : c._fixedColumns.start();
  }), i("fixedColumns().end()", function(o) {
    var c = this.context[0];
    return o !== void 0 ? (c._fixedColumns.end(o), this) : c._fixedColumns.end();
  }), i("fixedColumns().left()", function(o) {
    var c = this.context[0];
    return o !== void 0 ? (c._fixedColumns.left(o), this) : c._fixedColumns.left();
  }), i("fixedColumns().right()", function(o) {
    var c = this.context[0];
    return o !== void 0 ? (c._fixedColumns.right(o), this) : c._fixedColumns.right();
  }), I.ext.buttons.fixedColumns = {
    action: function(o, c, h, m) {
      yn(h).attr("active") ? (yn(h).removeAttr("active").removeClass("active"), c.fixedColumns().start(0), c.fixedColumns().end(0)) : (yn(h).attr("active", "true").addClass("active"), c.fixedColumns().start(m.config.start), c.fixedColumns().end(m.config.end));
    },
    config: {
      start: 1,
      end: 0
    },
    init: function(o, c, h) {
      o.settings()[0]._fixedColumns === void 0 && a(o.settings(), h.config), yn(c).attr("active", "true").addClass("active"), o.button(c).text(h.text || o.i18n("buttons.fixedColumns", o.settings()[0]._fixedColumns.c.i18n.button));
    },
    text: null
  };
  function a(o, c) {
    c === void 0 && (c = null);
    var h = new I.Api(o), m = c || h.init().fixedColumns || I.defaults.fixedColumns, g = new r(h, m);
    return g;
  }
  yn(document).on("plugin-init.dt", function(o, c) {
    o.namespace === "dt" && (c.oInit.fixedColumns || I.defaults.fixedColumns) && (c._fixedColumns || a(c, null));
  });
})();
/*! ColReorder 2.1.2
 * © SpryMedia Ltd - datatables.net/license
 */
let $e = Ue;
function er(e, t, n, r) {
  var i = e.splice(t, n);
  i.unshift(0), i.unshift(r < t ? r : r - n + 1), e.splice.apply(e, i);
}
function Sc(e) {
  e.rows().invalidate("data"), e.column(0).visible(e.column(0).visible()), e.columns.adjust();
  var t = e.colReorder.order();
  e.trigger("columns-reordered", [
    {
      order: t,
      mapping: oo(t)
    }
  ]);
}
function Dc(e) {
  return e.settings()[0].aoColumns.map(function(t) {
    return t._crOriginalIdx;
  });
}
function ql(e, t, n, r) {
  for (var i = [], a = 0; a < e.length; a++) {
    var o = e[a];
    er(o, n[0], n.length, r);
    for (var c = 0; c < o.length; c++) {
      var h = o[c].cell;
      if (!i.includes(h)) {
        var m = h.getAttribute("data-dt-column").split(","), g = m.map(function(_) {
          return t[_];
        }).join(",");
        h.setAttribute("data-dt-column", g), i.push(h);
      }
    }
  }
}
function mi(e) {
  e.columns().iterator("column", function(t, n) {
    var r = t.aoColumns;
    r[n]._crOriginalIdx === void 0 && (r[n]._crOriginalIdx = n);
  });
}
function oo(e) {
  for (var t = [], n = 0; n < e.length; n++)
    t[e[n]] = n;
  return t;
}
function Ac(e, t, n) {
  var r, i, a = e.settings()[0], o = a.aoColumns, c = o.map(function(w, C) {
    return C;
  });
  if (!t.includes(n)) {
    er(c, t[0], t.length, n);
    var h = oo(c);
    for (er(o, t[0], t.length, n), r = 0; r < a.aoData.length; r++) {
      var m = a.aoData[r];
      if (m) {
        var g = m.anCells;
        if (g)
          for (er(g, t[0], t.length, n), i = 0; i < g.length; i++)
            m.nTr && g[i] && o[i].bVisible && m.nTr.appendChild(g[i]), g[i] && g[i]._DT_CellIndex && (g[i]._DT_CellIndex.column = i);
      }
    }
    for (r = 0; r < o.length; r++) {
      var _ = o[r];
      for (i = 0; i < _.aDataSort.length; i++)
        _.aDataSort[i] = h[_.aDataSort[i]];
      _.idx = h[_.idx], _.bVisible && a.colgroup.append(_.colEl);
    }
    ql(a.aoHeader, h, t, n), ql(a.aoFooter, h, t, n), er(a.aoPreSearchCols, t[0], t.length, n), ii(h, a.aaSorting), Array.isArray(a.aaSortingFixed) ? ii(h, a.aaSortingFixed) : (a.aaSortingFixed.pre || a.aaSortingFixed.post) && ii(h, a.aaSortingFixed.pre), a.aLastSort.forEach(function(w) {
      w.src = h[w.src];
    }), e.trigger("column-reorder", [
      e.settings()[0],
      {
        from: t,
        to: n,
        mapping: h
      }
    ]);
  }
}
function ii(e, t) {
  if (t)
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      typeof r == "number" ? t[n] = e[r] : $e.isPlainObject(r) && r.idx !== void 0 ? r.idx = e[r.idx] : Array.isArray(r) && typeof r[0] == "number" && (r[0] = e[r[0]]);
    }
}
function bs(e, t, n) {
  var r = !1, i;
  if (t.length !== e.columns().count()) {
    e.error("ColReorder - column count mismatch");
    return;
  }
  n && (t = Pc(e, t, "toCurrent"));
  var a = oo(t);
  for (i = 0; i < a.length; i++) {
    var o = a.indexOf(i);
    i !== o && (er(a, o, 1, i), Ac(e, [o], i), r = !0);
  }
  r && Sc(e);
}
function Yh(e) {
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
function Pc(e, t, n) {
  var r = e.colReorder.order(), i = e.settings()[0].aoColumns;
  return n === "toCurrent" || n === "fromOriginal" ? Array.isArray(t) ? t.map(function(a) {
    return r.indexOf(a);
  }) : r.indexOf(t) : Array.isArray(t) ? t.map(function(a) {
    return i[a]._crOriginalIdx;
  }) : i[t]._crOriginalIdx;
}
function kc(e, t, n) {
  var r = e.columns().count();
  return t[0] < n && n < t[t.length] || t[0] < 0 && t[t.length - 1] > r || n < 0 && n > r ? !1 : t.includes(n) ? !0 : !(!Gl(e.table().header.structure(), t, n) || !Gl(e.table().footer.structure(), t, n));
}
function Gl(e, t, n) {
  var r = Yh(e), i;
  for (i = 0; i < r.length; i++)
    er(r[i], t[0], t.length, n);
  for (i = 0; i < r.length; i++)
    for (var a = [], o = 0; o < r[i].length; o++) {
      var c = r[i][o];
      if (!a.includes(c))
        a.push(c);
      else if (a[a.length - 1] !== c)
        return !1;
    }
  return !0;
}
var Rc = (
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
        t.settings()[0]._colReorder = this, this.dt = t, $e.extend(this.c, e.defaults, n), mi(t), t.on("stateSaveParams", function(c, h, m) {
          m.colReorder = Dc(t);
        }), t.on("destroy", function() {
          t.off(".colReorder"), t.colReorder.reset();
        });
        var a = t.state.loaded(), o = this.c.order;
        a && a.colReorder && t.columns().count() === a.colReorder.length && (o = a.colReorder), o && t.ready(function() {
          bs(t, o, !0);
        }), t.table().header.structure().forEach(function(c, h) {
          for (var m = n.headerRows, g = 0; g < c.length; g++)
            (!m || m.includes(h)) && c[g] && c[g].cell && r._addListener(c[g].cell);
        });
      }
    }
    return e.prototype.disable = function() {
      return this.c.enable = !1, this;
    }, e.prototype.enable = function(t) {
      return t === void 0 && (t = !0), t === !1 ? this.disable() : (this.c.enable = !0, this);
    }, e.prototype._addListener = function(t) {
      var n = this;
      $e(t).on("selectstart.colReorder", function() {
        return !1;
      }).on("mousedown.colReorder touchstart.colReorder", function(r) {
        if (!(r.type === "mousedown" && r.which !== 1) && n.c.enable) {
          var i = $e("button.dtcc-button_reorder", this);
          i.length && r.target !== i[0] && i.find(r.target).length === 0 || n._mouseDown(r, this);
        }
      });
    }, e.prototype._createDragNode = function() {
      var t = this.s.mouse.target, n = t.parent(), r = n.parent(), i = r.parent(), a = t.clone();
      this.dom.drag = $e(i[0].cloneNode(!1)).addClass("dtcr-cloned").append(
        $e(r[0].cloneNode(!1)).append($e(n[0].cloneNode(!1)).append(a[0]))
        // Not sure why  it doesn't want to append a jQuery node
      ).css({
        position: "absolute",
        top: 0,
        left: 0,
        width: $e(t).outerWidth(),
        height: $e(t).outerHeight()
      }).appendTo("body");
    }, e.prototype._cursorPosition = function(t, n) {
      return t.type.indexOf("touch") !== -1 ? t.originalEvent.touches[0][n] : t[n];
    }, e.prototype._mouseDown = function(t, n) {
      for (var r = this, i = $e(t.target).closest("th, td"), a = i.offset(), o = this.dt.columns(this.c.columns).indexes().toArray(), c = $e(n).attr("data-dt-column").split(",").map(function(w) {
        return parseInt(w, 10);
      }), h = 0; h < c.length; h++)
        if (!o.includes(c[h]))
          return !1;
      this.s.mouse.start.x = this._cursorPosition(t, "pageX"), this.s.mouse.start.y = this._cursorPosition(t, "pageY"), this.s.mouse.offset.x = this._cursorPosition(t, "pageX") - a.left, this.s.mouse.offset.y = this._cursorPosition(t, "pageY") - a.top, this.s.mouse.target = i, this.s.mouse.targets = c;
      for (var m = 0; m < c.length; m++) {
        var g = this.dt.cells(null, c[m], { page: "current" }).nodes().to$(), _ = "dtcr-moving";
        m === 0 && (_ += " dtcr-moving-first"), m === c.length - 1 && (_ += " dtcr-moving-last"), g.addClass(_);
      }
      this._regions(c), this._scrollRegions(), $e(document).on("mousemove.colReorder touchmove.colReorder", function(w) {
        r._mouseMove(w);
      }).on("mouseup.colReorder touchend.colReorder", function(w) {
        r._mouseUp(w);
      });
    }, e.prototype._mouseMove = function(t) {
      if (this.dom.drag === null) {
        if (Math.pow(Math.pow(this._cursorPosition(t, "pageX") - this.s.mouse.start.x, 2) + Math.pow(this._cursorPosition(t, "pageY") - this.s.mouse.start.y, 2), 0.5) < 5)
          return;
        $e(document.body).addClass("dtcr-dragging"), this._createDragNode();
      }
      this.dom.drag.css({
        left: this._cursorPosition(t, "pageX") - this.s.mouse.offset.x,
        top: this._cursorPosition(t, "pageY") - this.s.mouse.offset.y
      });
      var n = this.dt.table().node(), r = $e(n).offset().left, i = this._cursorPosition(t, "pageX") - r, a;
      if (this._isRtl()) {
        var o = n.clientWidth;
        a = o - i;
      } else
        a = i;
      var c = this.s.dropZones.find(function(h) {
        return h.inlineStart <= a && a <= h.inlineStart + h.width;
      });
      this.s.mouse.absLeft = this._cursorPosition(t, "pageX"), c && (c.self || this._move(c, a));
    }, e.prototype._mouseUp = function(t) {
      var n = this;
      $e(document).off(".colReorder"), $e(document.body).removeClass("dtcr-dragging"), this.dom.drag && (this.dom.drag.remove(), this.dom.drag = null, this.s.mouse.target.on("click.dtcr", function(r) {
        return !1;
      }), setTimeout(function() {
        n.s.mouse.target.off(".dtcr");
      }, 10)), this.s.scrollInterval && clearInterval(this.s.scrollInterval), this.dt.cells(".dtcr-moving").nodes().to$().removeClass("dtcr-moving dtcr-moving-first dtcr-moving-last");
    }, e.prototype._move = function(t, n) {
      var r = this;
      this.dt.colReorder.move(this.s.mouse.targets, t.colIdx), this.s.mouse.targets = $e(this.s.mouse.target).attr("data-dt-column").split(",").map(function(_) {
        return parseInt(_, 10);
      }), this._regions(this.s.mouse.targets);
      var i = this.s.mouse.targets.filter(function(_) {
        return r.dt.column(_).visible();
      }), a = this.s.dropZones.find(function(_) {
        return _.colIdx === i[0];
      }), o = this.s.dropZones.indexOf(a);
      if (a.inlineStart > n) {
        var c = a.inlineStart - n, h = this.s.dropZones[o - 1];
        a.inlineStart -= c, a.width += c, h && (h.width -= c);
      }
      if (a = this.s.dropZones.find(function(_) {
        return _.colIdx === i[i.length - 1];
      }), a.inlineStart + a.width < n) {
        var m = n - (a.inlineStart + a.width), g = this.s.dropZones[o + 1];
        a.width += m, g && (g.inlineStart += m, g.width -= m);
      }
    }, e.prototype._regions = function(t) {
      var n = this, r = [], i = 0, a = 0, o = this.dt.columns(this.c.columns).indexes().toArray(), c = this.dt.columns().widths();
      this.dt.columns().every(function(h, m, g) {
        if (this.visible()) {
          var _ = c[h];
          if (!o.includes(h)) {
            i += _;
            return;
          }
          var w = kc(n.dt, t, h);
          w ? r.push({
            colIdx: h,
            inlineStart: i - a,
            self: t[0] <= h && h <= t[t.length - 1],
            width: _ + a
          }) : h < t[0] ? r.length && (r[r.length - 1].width += _) : h > t[t.length - 1] && (a += _), i += _;
        }
      }), this.s.dropZones = r;
    }, e.prototype._isScrolling = function() {
      return this.dt.table().body().parentNode !== this.dt.table().header().parentNode;
    }, e.prototype._scrollRegions = function() {
      if (this._isScrolling()) {
        var t = this, n = $e(this.dt.table().container()).offset().left, r = $e(this.dt.table().container()).outerWidth(), i = 75, a = this.dt.table().body().parentElement.parentElement;
        this.s.scrollInterval = setInterval(function() {
          var o = t.s.mouse.absLeft;
          o !== -1 && (o < n + i && a.scrollLeft ? a.scrollLeft -= 5 : o > n + r - i && a.scrollLeft < a.scrollWidth && (a.scrollLeft += 5));
        }, 25);
      }
    }, e.prototype._isRtl = function() {
      return $e(this.dt.table().node()).css("direction") === "rtl";
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
I.Api.register("colReorder.enable()", function(e) {
  return this.iterator("table", function(t) {
    t._colReorder && t._colReorder.enable(e);
  });
});
I.Api.register("colReorder.disable()", function() {
  return this.iterator("table", function(e) {
    e._colReorder && e._colReorder.disable();
  });
});
I.Api.register("colReorder.move()", function(e, t) {
  return mi(this), Array.isArray(e) || (e = [e]), kc(this, e, t) ? this.tables().every(function() {
    Ac(this, e, t), Sc(this);
  }) : (this.error("ColReorder - invalid move"), this);
});
I.Api.register("colReorder.order()", function(e, t) {
  return mi(this), e ? this.tables().every(function() {
    bs(this, e, t);
  }) : this.context.length ? Dc(this) : null;
});
I.Api.register("colReorder.reset()", function() {
  return mi(this), this.tables().every(function() {
    var e = this.columns().every(function(t) {
      return t;
    }).flatten().toArray();
    bs(this, e, !0);
  });
});
I.Api.register("colReorder.transpose()", function(e, t) {
  return mi(this), t || (t = "toCurrent"), Pc(this, e, t);
});
I.ColReorder = Rc;
$e(document).on("stateLoadInit.dt", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = new I.Api(t);
    if (n.colReorder && r.columns().count() === n.colReorder.length) {
      if (r.ready())
        bs(r, n.colReorder, !0);
      else if (ii(n.colReorder, n.order), n.columns) {
        for (var i = 0; i < n.columns.length; i++)
          n.columns[i]._cr_sort = n.colReorder[i];
        n.columns.sort(function(a, o) {
          return a._cr_sort - o._cr_sort;
        });
      }
    }
  }
});
$e(document).on("preInit.dt", function(e, t) {
  if (e.namespace === "dt") {
    var n = t.oInit.colReorder, r = I.defaults.colReorder;
    if (n || r) {
      var i = $e.extend({}, r, n);
      if (n !== !1) {
        var a = new I.Api(t);
        new Rc(a, i);
      }
    }
  }
});
/*! KeyTable 2.12.2
 * © SpryMedia Ltd - datatables.net/license
 */
let Te = Ue;
var Kh = 0, Jh = 0, dr = function(e, t) {
  if (!I.versionCheck || !I.versionCheck("1.10.8"))
    throw "KeyTable requires DataTables 1.10.8 or newer";
  this.c = Te.extend(!0, {}, I.defaults.keyTable, dr.defaults, t), this.s = {
    /** @type {DataTable.Api} DataTables' API instance */
    dt: new I.Api(e),
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
    namespace: ".keyTable-" + Kh++,
    /** @type {Node} Input element for tabbing into the table */
    tabInput: null
  }, this.dom = {};
  var n = this.s.dt.settings()[0], r = n.keytable;
  if (r)
    return r;
  n.keytable = this, this._constructor();
};
Te.extend(dr.prototype, {
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
    var e = this, t = this.s.dt, n = Te(t.table().node()), r = this.s.namespace, i = !1;
    if (n.css("position") === "static" && n.css("position", "relative"), Te(t.table().body()).on("click" + r, "th, td", function(c) {
      if (e.s.enable !== !1) {
        var h = t.cell(this);
        h.any() && e._focus(h, null, !1, c);
      }
    }), Te(document).on("keydown" + r, function(c) {
      !i && !e.s.dtDrawing ? e._key(c) : c.preventDefault();
    }), this.c.blurable && Te(document).on("mousedown" + r, function(c) {
      Te(c.target).parents(".dataTables_filter, .dt-search").length && e._blur(), !Te(c.target).parents().filter(t.table().container()).length && (Te(c.target).parents("div.DTE").length || Te(c.target).parents("div.editor-datetime").length || Te(c.target).parents("div.dt-datetime").length || Te(c.target).parents().filter(".DTFC_Cloned").length || e._blur());
    }), this.c.editor) {
      var a = this.c.editor;
      a.on("open.keyTableMain", function(c, h, m) {
        h !== "inline" && e.s.enable && (e.enable(!1), a.one("close" + r, function() {
          e.enable(!0);
        }));
      }), this.c.editOnFocus && t.on(
        "key-focus" + r + " key-refocus" + r,
        function(c, h, m, g) {
          e._editor(null, g, !0);
        }
      ), t.on("key" + r, function(c, h, m, g, _) {
        e._editor(m, _, !1);
      }), Te(t.table().body()).on("dblclick" + r, "th, td", function(c) {
        if (e.s.enable !== !1) {
          var h = t.cell(this);
          h.any() && (e.s.lastFocus && this !== e.s.lastFocus.cell.node() || e._editor(null, c, !0));
        }
      }), a.on("preSubmit", function() {
        i = !0;
      }).on("preSubmitCancelled", function() {
        i = !1;
      }).on("submitComplete", function() {
        i = !1;
      });
    }
    t.on("stateSaveParams" + r, function(c, h, m) {
      m.keyTable = e.s.lastFocus ? e.s.lastFocus.cell.index() : null;
    }), t.on("column-visibility" + r, function(c) {
      e._tabInput();
    }), t.on("column-reorder" + r, function(c, h, m) {
      var g = e.s.lastFocus;
      if (g && g.cell) {
        var _ = g.relative.column;
        g.cell[0][0].column = m.mapping.indexOf(_), g.relative.column = m.mapping.indexOf(_);
      }
    }), t.on("preDraw" + r + " scroller-will-draw" + r, function(c) {
      e.s.dtDrawing = !0;
    }), t.on("draw" + r, function(c) {
      if (e.s.dtDrawing = !1, e._tabInput(), !e.s.focusDraw) {
        var h = e.s.lastFocus;
        if (h) {
          var m = e.s.lastFocus.relative, g = t.page.info(), _ = m.row;
          if (g.recordsDisplay === 0 || _ < g.start || _ > g.start + g.length)
            return;
          _ >= g.recordsDisplay && (_ = g.recordsDisplay - 1), e._focus(_, m.column, !0, c);
        }
      }
    }), this.c.clipboard && this._clipboard(), t.on("destroy" + r, function() {
      e._blur(!0), t.off(r), Te(t.table().body()).off("click" + r, "th, td").off("dblclick" + r, "th, td"), Te(document).off("mousedown" + r).off("keydown" + r).off("copy" + r).off("paste" + r);
    });
    var o = t.state.loaded();
    o && o.keyTable ? t.one("init", function() {
      var c = t.cell(o.keyTable);
      c.any() && c.focus();
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
      Te(t.node()).removeClass(this.c.className), this.s.lastFocus = null, e || (this._updateFixedColumns(t.index().column), this._emitEvent("key-blur", [this.s.dt, t]));
    }
  },
  /**
   * Clipboard interaction handlers
   *
   * @private
   */
  _clipboard: function() {
    var e = this.s.dt, t = this, n = this.s.namespace, r = this.c.clipboard;
    window.getSelection && ((r === !0 || r.copy) && Te(document).on("copy" + n, function(i) {
      var a = i.originalEvent, o = window.getSelection().toString(), c = t.s.lastFocus;
      !o && c && (a.clipboardData.setData(
        "text/plain",
        c.cell.render(t.c.clipboardOrthogonal)
      ), a.preventDefault());
    }), (r === !0 || r.paste) && Te(document).on("paste" + n, function(i) {
      var a = i.originalEvent, o = t.s.lastFocus, c = document.activeElement, h = t.c.editor, m;
      if (o && (!c || c.nodeName.toLowerCase() === "body"))
        if (a.preventDefault(), window.clipboardData && window.clipboardData.getData ? m = window.clipboardData.getData("Text") : a.clipboardData && a.clipboardData.getData && (m = a.clipboardData.getData("text/plain")), h) {
          var g = t._inlineOptions(o.cell.index());
          h.inline(g.cell, g.field, g.options).set(h.displayed()[0], m).submit();
        } else
          o.cell.data(m), e.draw(!1);
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
      var r = this, i = this.s.dt, a = this.c.editor, o = this.s.lastFocus.cell, c = this.s.namespace + "e" + Jh++;
      if (!Te("div.DTE", o.node()).length && !(e !== null && (e >= 0 && e <= 9 || e === 11 || e === 12 || e >= 14 && e <= 31 || e >= 112 && e <= 123 || e >= 127 && e <= 159))) {
        t && (t.stopPropagation(), e === 13 && t.preventDefault());
        var h = function() {
          var m = r._inlineOptions(o.index());
          a.one("open" + c, function() {
            a.off("cancelOpen" + c), n || Te(
              "div.DTE_Field_InputControl input, div.DTE_Field_InputControl textarea"
            ).select(), i.keys.enable(n ? "tab-only" : "navigation-only"), i.on("key-blur.editor", function(g, _, w) {
              a.s.editOpts.onBlur !== "submit" && a.displayed() && w.node() === o.node() && a.submit();
            }), n && Te(i.table().container()).addClass("dtk-focus-alt"), a.on("preSubmitCancelled" + c, function() {
              setTimeout(function() {
                r._focus(o, null, !1);
              }, 50);
            }), a.on("submitUnsuccessful" + c, function() {
              r._focus(o, null, !1);
            }), a.one("close" + c, function() {
              i.keys.enable(!0), i.off("key-blur.editor"), a.off(c), Te(i.table().container()).removeClass("dtk-focus-alt"), r.s.returnSubmit && (r.s.returnSubmit = !1, r._emitEvent("key-return-submit", [i, o]));
            });
          }).one("cancelOpen" + c, function() {
            a.off(c);
          }).inline(m.cell, m.field, m.options);
        };
        e === 13 ? (n = !0, Te(document).one("keyup", function() {
          h();
        })) : h();
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
      return Te(n.nTable).triggerHandler(e, t);
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
    var i = this, a = this.s.dt, o = a.page.info(), c = this.s.lastFocus;
    if (r || (r = null), !!this.s.enable) {
      if (typeof e != "number") {
        if (!e.any())
          return;
        var h = e.index();
        if (t = h.column, e = a.rows({ filter: "applied", order: "applied" }).indexes().indexOf(h.row), e < 0)
          return;
        o.serverSide && (e += o.start);
      }
      if (o.length !== -1 && (e < o.start || e >= o.start + o.length)) {
        this.s.focusDraw = !0, this.s.waitingForDraw = !0, a.one("draw", function() {
          i.s.focusDraw = !1, i.s.waitingForDraw = !1, i._focus(e, t, void 0, r);
        }).page(Math.floor(e / o.length)).draw(!1);
        return;
      }
      if (Te.inArray(t, this._columns()) !== -1) {
        o.serverSide && (e -= o.start);
        var m = a.cells(null, t, { search: "applied", order: "applied" }).flatten(), g = a.cell(m[e]), _ = this._emitEvent("key-prefocus", [this.s.dt, g, r || null]);
        if (_.indexOf(!1) === -1) {
          if (c) {
            if (c.node === g.node()) {
              this._emitEvent("key-refocus", [this.s.dt, g, r || null]);
              return;
            }
            this._blur();
          }
          this._removeOtherFocus();
          var w = Te(g.node());
          if (w.addClass(this.c.className), this._updateFixedColumns(t), n === void 0 || n === !0) {
            this._scroll(Te(window), Te(document.body), w, "offset");
            var C = a.table().body().parentNode;
            if (C !== a.table().header().parentNode) {
              var k = Te(C.parentNode);
              this._scroll(k, k, w, "position");
            }
          }
          var S = a.page.info();
          this.s.lastFocus = {
            cell: g,
            node: g.node(),
            relative: {
              row: S.start + a.rows({ page: "current" }).indexes().indexOf(g.index().row),
              column: g.index().column
            }
          }, this._emitEvent("key-focus", [this.s.dt, g, r || null]), a.state.save();
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
    if (!Te(e.target).closest(".dte-inlineAdd").length) {
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
          if (!(this.c.keys && Te.inArray(e.keyCode, this.c.keys) === -1))
            switch (e.keyCode) {
              case 9:
                e.preventDefault(), this._keyAction(function() {
                  i._shift(e, e.shiftKey ? "left" : "right", !0);
                });
                break;
              case 27:
                if (Te(r.node).find("div.DTE").length)
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
                  var c = a.cells({ page: "current" }).indexes(), h = i._columns();
                  i._focus(
                    a.cell(c[e.keyCode === 35 ? c.length - 1 : h[0]]),
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
    Te.fn.dataTable.tables({ api: !0 }).iterator("table", function(t) {
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
    var i = n[r](), a = n.outerHeight(), o = n.outerWidth(), c = t.scrollTop(), h = t.scrollLeft(), m = e.height(), g = e.width();
    r === "position" && (i.top += parseInt(n.closest("table").css("top"), 10)), i.top < c && i.top + a > c - 5 && t.scrollTop(i.top), i.left < h && t.scrollLeft(i.left), i.top + a > c + m && i.top < c + m + 5 && a < m && t.scrollTop(i.top + a - m), i.left + o > h + g && o < g && t.scrollLeft(i.left + o - g);
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
    var r = this.s.dt, i = r.page.info(), a = i.recordsDisplay, o = this._columns(), c = this.s.lastFocus;
    if (c) {
      var h = c.cell;
      if (h) {
        var m = r.rows({ filter: "applied", order: "applied" }).indexes().indexOf(h.index().row);
        i.serverSide && (m += i.start);
        var g = r.columns(o).indexes().indexOf(h.index().column), _ = m, w = o[g];
        Te(r.table().node()).css("direction") === "rtl" && (t === "right" ? t = "left" : t === "left" && (t = "right")), t === "right" ? g >= o.length - 1 ? (_++, w = o[0]) : w = o[g + 1] : t === "left" ? g === 0 ? (_--, w = o[o.length - 1]) : w = o[g - 1] : t === "up" ? _-- : t === "down" && _++, _ >= 0 && _ < a && Te.inArray(w, o) !== -1 ? (e && e.preventDefault(), this._focus(_, w, !0, e)) : !n || !this.c.blurable ? e && e.preventDefault() : this._blur();
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
        var r = "keytable-focus-capture-" + this.s.namespace.split("-")[1], i = '<input id="' + r + '" type="text" tabindex="' + n + '"/>', a = Te('<div><label for="' + r + '">' + i + "</label></div>").css({
          position: "absolute",
          height: 1,
          width: 0,
          overflow: "hidden"
        });
        a.find("input").on("focus", function(c) {
          var h = t.cell(":eq(0)", e._columns(), { page: "current" });
          h.any() && e._focus(h, null, !0, c);
        }), this.s.tabInput = a;
      }
      var o = this.s.dt.cell(":eq(0)", "0:visible", { page: "current", order: "current" }).node();
      o && Te(o).prepend(this.s.tabInput);
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
dr.defaults = {
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
dr.version = "2.12.2";
Te.fn.dataTable.KeyTable = dr;
Te.fn.DataTable.KeyTable = dr;
I.Api.register("cell.blur()", function() {
  return this.iterator("table", function(e) {
    e.keytable && e.keytable.blur();
  });
});
I.Api.register("cell().focus()", function() {
  return this.iterator("cell", function(e, t, n) {
    e.keytable && e.keytable.focus(t, n);
  });
});
I.Api.register("keys.disable()", function() {
  return this.iterator("table", function(e) {
    e.keytable && e.keytable.enable(!1);
  });
});
I.Api.register("keys.enable()", function(e) {
  return this.iterator("table", function(t) {
    t.keytable && t.keytable.enable(e === void 0 ? !0 : e);
  });
});
I.Api.register("keys.enabled()", function(e) {
  var t = this.context;
  return t.length && t[0].keytable ? t[0].keytable.enabled() : !1;
});
I.Api.register("keys.move()", function(e) {
  return this.iterator("table", function(t) {
    t.keytable && t.keytable._shift(null, e, !1);
  });
});
I.ext.selector.cell.push(function(e, t, n) {
  var r = t.focused, i = e.keytable, a = [];
  if (!i || r === void 0)
    return n;
  for (var o = 0, c = n.length; o < c; o++)
    (r === !0 && i.focused(n[o]) || r === !1 && !i.focused(n[o])) && a.push(n[o]);
  return a;
});
Te(document).on("preInit.dt.dtk", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = t.oInit.keys, i = I.defaults.keys;
    if (r || i) {
      var a = Te.extend({}, i, r);
      r !== !1 && new dr(t, a);
    }
  }
});
/*! Scroller 2.4.3
 * © SpryMedia Ltd - datatables.net/license
 */
let Ce = Ue;
var en = function(e, t) {
  if (!(this instanceof en)) {
    alert(
      "Scroller warning: Scroller must be initialised with the 'new' keyword."
    );
    return;
  }
  t === void 0 && (t = {});
  var n = Ce.fn.dataTable.Api(e);
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
  }, this.s = Ce.extend(this.s, en.oDefaults, t), this.s.heights.row = this.s.rowHeight, this.dom = {
    force: document.createElement("div"),
    label: Ce('<div class="dts_label">0</div>'),
    scroller: null,
    table: null,
    loader: null
  }, !this.s.dt.oScroller && (this.s.dt.oScroller = this, this.construct());
};
Ce.extend(en.prototype, {
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
      Ce(this.dom.scroller).css("max-height")
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
    o < 0 && (o = 0), (i > this.s.redrawBottom || i < this.s.redrawTop) && this.s.dt._iDisplayStart !== o && (r = !0, i = this._domain("virtualToPhysical", e * this.s.heights.row), this.s.redrawTop < i && i < this.s.redrawBottom && (this.s.forceReposition = !0, t = !1)), t === void 0 || t ? (this.s.ani = r, Ce(this.dom.scroller).animate(
      {
        scrollTop: i
      },
      function() {
        setTimeout(function() {
          n.s.ani = !1;
        }, 250);
      }
    )) : Ce(this.dom.scroller).scrollTop(i);
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
    this.dom.force.style.position = "relative", this.dom.force.style.top = "0px", this.dom.force.style.left = "0px", this.dom.force.style.width = "1px", this.dom.scroller = t.table().node().parentNode, this.dom.scroller.appendChild(this.dom.force), this.dom.scroller.style.position = "relative", this.dom.table = Ce(">table", this.dom.scroller)[0], this.dom.table.style.position = "absolute", this.dom.table.style.top = "0px", this.dom.table.style.left = "0px", Ce(t.table().container()).addClass("dts DTS"), this.dom.label.appendTo(this.dom.scroller), this.s.heights.row && this.s.heights.row != "auto" && (this.s.autoHeight = !1), this.s.ingnoreScroll = !0, Ce(this.dom.scroller).on("scroll.dt-scroller", function(i) {
      e._scroll.call(e);
    }), Ce(this.dom.scroller).on("touchstart.dt-scroller", function() {
      e._scroll.call(e);
    }), Ce(this.dom.scroller).on("mousedown.dt-scroller", function() {
      e.s.mousedown = !0;
    }).on("mouseup.dt-scroller", function() {
      e.s.labelVisible = !1, e.s.mousedown = !1, e.dom.label.css("display", "none");
    }), Ce(window).on("resize.dt-scroller", function() {
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
    }), this.measure(!1), r && r.scroller && (this.s.topRowFloat = r.scroller.topRow, this.s.baseRowTop = r.scroller.baseRowTop, this.s.baseScrollTop = this.s.baseRowTop * this.s.heights.row, r.scroller.scrollTop = this._domain("physicalToVirtual", this.s.topRowFloat * this.s.heights.row)), e.s.stateSaveThrottle = I.util.throttle(function() {
      e.s.dtApi.state.save();
    }, 500), t.on("init.scroller", function() {
      e.measure(!1), e.s.scrollType = "jump", e._draw(), t.on("draw.scroller", function() {
        e._draw();
      });
    }), t.on("preDraw.dt.scroller", function() {
      e._scrollForce();
    }), t.on("destroy.scroller", function() {
      Ce(window).off("resize.dt-scroller"), Ce(e.dom.scroller).off(".dt-scroller"), Ce(e.s.dt.nTable).off(".scroller"), Ce(e.s.dt.nTableWrapper).removeClass("DTS"), Ce("div.DTS_Loading", e.dom.scroller.parentNode).remove(), e.dom.table.style.position = "", e.dom.table.style.top = "", e.dom.table.style.left = "";
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
    var e = this.s.dt, t = e.nTable, n = t.cloneNode(!1), r = Ce("<tbody/>").appendTo(n), i = e.oClasses, a = I.versionCheck("2") ? {
      container: i.container,
      scroller: i.scrolling.container,
      body: i.scrolling.body
    } : {
      container: i.sWrapper,
      scroller: i.sScrollWrapper,
      body: i.sScrollBody
    }, o = Ce(
      '<div class="' + a.container + ' DTS"><div class="' + a.scroller + '"><div class="' + a.body + '"></div></div></div>'
    );
    Ce("tbody tr:lt(4)", t).clone().appendTo(r);
    var c = Ce("tr", r).length;
    if (c === 1)
      r.prepend("<tr><td>&#160;</td></tr>"), r.append("<tr><td>&#160;</td></tr>");
    else
      for (; c < 3; c++)
        r.append("<tr><td>&#160;</td></tr>");
    Ce("div." + a.body, o).append(n);
    var h = this.s.dt.nHolding || t.parentNode;
    Ce(h).is(":visible") || (h = "body"), o.find("input").removeAttr("name"), o.appendTo(h), this.s.heights.row = Ce("tr", r).eq(1).outerHeight(), o.remove();
  },
  /**
   * Draw callback function which is fired when the DataTable is redrawn. The main function of
   * this method is to position the drawn table correctly the scrolling container for the rows
   * that is displays as a result of the scrolling position.
   *  @returns {void}
   *  @private
   */
  _draw: function() {
    var e = this, t = this.s.heights, n = this.dom.scroller.scrollTop, r = Ce(this.s.dt.nTable).height(), i = this.s.dt._iDisplayStart, a = this.s.dt._iDisplayLength, o = this.s.dt.fnRecordsDisplay(), c = n + t.viewport;
    this.s.skip = !0, (this.s.dt.bSorted || this.s.dt.bFiltered) && i === 0 && !this.s.dt._drawHold && (this.s.topRowFloat = 0), n = this.s.scrollType === "jump" ? this._domain(
      "virtualToPhysical",
      this.s.topRowFloat * t.row
    ) : n, this.s.baseScrollTop = n, this.s.baseRowTop = this.s.topRowFloat;
    var h = n - (this.s.topRowFloat - i) * t.row;
    if (i === 0)
      h = 0;
    else if (i + a >= o)
      h = t.scroll - r;
    else {
      var m = h + r;
      if (m < c) {
        var g = c - r, _ = g - h;
        this.s.baseScrollTop += _ + 1, h = g;
      }
    }
    this.dom.table.style.top = h + "px", this.s.tableTop = h, this.s.tableBottom = r + this.s.tableTop;
    var w = (n - this.s.tableTop) * this.s.boundaryScale;
    if (this.s.redrawTop = n - w, this.s.redrawBottom = n + w > t.scroll - t.viewport - t.row ? t.scroll - t.viewport - t.row : n + w, this.s.skip = !1, e.s.ingnoreScroll)
      if (this.s.dt.oFeatures.bStateSave && this.s.dt.oLoadedState !== null && typeof this.s.dt.oLoadedState.scroller < "u") {
        var C = !!((this.s.dt.sAjaxSource || e.s.dt.ajax) && !this.s.dt.oFeatures.bServerSide);
        (C && this.s.dt.iDraw >= 2 || !C && this.s.dt.iDraw >= 1) && setTimeout(function() {
          Ce(e.dom.scroller).scrollTop(
            e.s.dt.oLoadedState.scroller.scrollTop
          ), setTimeout(function() {
            e.s.ingnoreScroll = !1;
          }, 0);
        }, 0);
      } else
        e.s.ingnoreScroll = !1;
    this.s.dt.oFeatures.bInfo && setTimeout(function() {
      e._info.call(e);
    }, 0), Ce(this.s.dt.nTable).triggerHandler("position.dts.dt", h);
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
      var e = this.s.dt, t = this.s.dtApi, n = e.oLanguage, r = t.page.info(), i = r.recordsDisplay, a = r.recordsTotal, o = (this.s.lastScrollTop - this.s.baseScrollTop) / this.s.heights.row, c = Math.floor(this.s.baseRowTop + o) + 1;
      this.s.scrollType === "jump" && (c = Math.floor(this.s.topRowFloat) + 1);
      var h = c + Math.floor(this.s.heights.viewport / this.s.heights.row), m = h > i ? i : h, g;
      i === 0 && i == a ? g = n.sInfoEmpty + n.sInfoPostFix : i === 0 ? g = n.sInfoEmpty + " " + n.sInfoFiltered + n.sInfoPostFix : i == a ? g = n.sInfo + n.sInfoPostFix : g = n.sInfo + " " + n.sInfoFiltered + n.sInfoPostFix, g = this._macros(g, c, m, a, i);
      var _ = n.fnInfoCallback;
      _ && (g = _.call(
        e.oInstance,
        e,
        c,
        m,
        a,
        i,
        g
      ));
      var w = e.aanFeatures.i;
      if (typeof w < "u") {
        for (var C = 0, k = w.length; C < k; C++)
          Ce(w[C]).html(g);
        Ce(e.nTable).triggerHandler("info.dt");
      }
      Ce("div.dt-info", t.table().container()).each(function() {
        Ce(this).html(g), t.trigger("info", [t.settings()[0], this, g]);
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
    var a = this.s.dtApi, o = this.s.dt, c = o.fnFormatNumber;
    return e.replace(/_START_/g, c.call(o, t)).replace(/_END_/g, c.call(o, n)).replace(/_MAX_/g, c.call(o, r)).replace(/_TOTAL_/g, c.call(o, i)).replace(/_ENTRIES_/g, a.i18n("entries", "")).replace(/_ENTRIES-MAX_/g, a.i18n("entries", "", r)).replace(/_ENTRIES-TOTAL_/g, a.i18n("entries", "", i));
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
    return i === "px" ? t = r : i === "vh" ? t = r / 100 * Ce(window).height() : i === "rem" ? t = r * parseFloat(Ce(":root").css("font-size")) : i === "em" && (t = r * parseFloat(Ce("body").css("font-size"))), t || 0;
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
          this.s.tableTop = Ce(this.s.dt.nTable).offset().top, this.s.tableBottom = Ce(this.s.dt.nTable).height() + this.s.tableTop;
          var a = function() {
            e.s.dt._iDisplayStart = e.s.targetTop, e.s.dtApi.draw("page");
          };
          this.s.dt.oFeatures.bServerSide ? (this.s.forceReposition = !0, Ce(this.s.dt.nTable).triggerHandler("scroller-will-draw.dt"), I.versionCheck("2") ? e.s.dtApi.processing(!0) : this.s.dt.oApi._fnProcessingDisplay(this.s.dt, !0), clearTimeout(this.s.drawTO), this.s.drawTO = setTimeout(a, this.s.serverWait)) : a();
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
en.defaults = {
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
en.oDefaults = en.defaults;
en.version = "2.4.3";
Ce(document).on("preInit.dt.dtscroller", function(e, t) {
  if (e.namespace === "dt") {
    var n = t.oInit.scroller, r = I.defaults.scroller;
    if (n || r) {
      var i = Ce.extend({}, n, r);
      n !== !1 && new en(t, i);
    }
  }
});
Ce.fn.dataTable.Scroller = en;
Ce.fn.DataTable.Scroller = en;
var fr = Ce.fn.dataTable.Api;
fr.register("scroller()", function() {
  return this;
});
fr.register("scroller().rowToPixels()", function(e, t, n) {
  var r = this.context;
  if (r.length && r[0].oScroller)
    return r[0].oScroller.rowToPixels(e, t, n);
});
fr.register("scroller().pixelsToRow()", function(e, t, n) {
  var r = this.context;
  if (r.length && r[0].oScroller)
    return r[0].oScroller.pixelsToRow(e, t, n);
});
fr.register(
  ["scroller().scrollToRow()", "scroller.toPosition()"],
  function(e, t) {
    return this.iterator("table", function(n) {
      n.oScroller && n.oScroller.scrollToRow(e, t);
    }), this;
  }
);
fr.register("row().scrollTo()", function(e) {
  var t = this;
  return this.iterator("row", function(n, r) {
    if (n.oScroller) {
      var i = t.rows({ order: "applied", search: "applied" }).indexes().indexOf(r);
      n.oScroller.scrollToRow(i, e);
    }
  }), this;
});
fr.register("scroller.measure()", function(e) {
  return this.iterator("table", function(t) {
    t.oScroller && t.oScroller.measure(e);
  }), this;
});
fr.register("scroller.page()", function() {
  var e = this.context;
  if (e.length && e[0].oScroller)
    return e[0].oScroller.pageInfo();
});
/*! AutoFill 2.7.1
 * © SpryMedia Ltd - datatables.net/license
 */
let ge = Ue;
var Qh = 0, qt = function(e, t) {
  if (!I.versionCheck || !I.versionCheck("1.11"))
    throw "Warning: AutoFill requires DataTables 1.11 or greater";
  this.c = ge.extend(
    !0,
    {},
    I.defaults.autoFill,
    qt.defaults,
    t
  ), this.s = {
    /** @type {DataTable.Api} DataTables' API instance */
    dt: new I.Api(e),
    /** @type {String} Unique namespace for events attached to the document */
    namespace: ".autoFill" + Qh++,
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
ge.extend(qt.prototype, {
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
    var t = this, n = this.s.dt, r = qt.actions, i = [];
    if (ge.each(r, function(c, h) {
      h.available(n, e) && i.push(c);
    }), i.length === 1 && this.c.alwaysAsk === !1) {
      var a = r[i[0]].execute(n, e);
      this._update(a, e);
    } else if (i.length > 1 || this.c.alwaysAsk) {
      var o = this.dom.list.children("div.dt-autofill-list-items").empty();
      i.push("cancel"), ge.each(i, function(c, h) {
        o.append(
          ge("<button/>").html(r[h].option(n, e)).append(ge('<span class="dt-autofill-button"/>').html(n.i18n("autoFill.button", "&gt;"))).on("click", function(m) {
            if (m.target.nodeName.toLowerCase() === "button") {
              var g = r[h].execute(
                n,
                e,
                ge(this).closest("button")
              );
              t._update(g, e), t.dom.background.remove(), t.dom.list.remove();
            }
          })
        );
      }), this.dom.background.appendTo("body"), this.dom.background.one("click", function() {
        t.dom.background.remove(), t.dom.list.remove();
      }), this.dom.list.appendTo("body"), this.c.closeButton && (this.dom.list.prepend(this.dom.closeButton).addClass(qt.classes.closeable), this.dom.closeButton.on("click", function() {
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
    }, o = n.column.index("toData", a.column), c = n.row(":eq(" + a.row + ")", { page: "current" }), h = ge(n.cell(c.index(), o).node());
    if (n.cell(h).any() && !(n.columns(this.c.columns).indexes().indexOf(o) === -1 || a.row === -1)) {
      this.s.end = a;
      var m, g, _, w, C, k;
      m = r.row < a.row ? i : h, g = r.row < a.row ? h : i, _ = r.column < a.column ? i : h, w = r.column < a.column ? h : i, m = this._getPosition(m.get(0)).top, _ = this._getPosition(_.get(0)).left, C = this._getPosition(g.get(0)).top + g.outerHeight() - m, k = this._getPosition(w.get(0)).left + w.outerWidth() - _;
      var S = this.dom.select;
      S.top.css({
        top: m,
        left: _,
        width: k
      }), S.left.css({
        top: m,
        left: _,
        height: C
      }), S.bottom.css({
        top: m + C,
        left: _,
        width: k
      }), S.right.css({
        top: m,
        left: _ + k,
        height: C
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
      for (var r = {}, i = [], a = n.fields(), o = 0, c = e.length; o < c; o++)
        for (var h = 0, m = e[o].length; h < m; h++) {
          var g = e[o][h], _ = t.settings()[0].aoColumns[g.index.column], w = _.editField;
          if (w === void 0)
            for (var C = _.mData, k = 0, S = a.length; k < S; k++) {
              var v = n.field(a[k]);
              if (v.dataSrc() === C) {
                w = v.name();
                break;
              }
            }
          if (!w)
            throw "Could not automatically determine field data. Please see https://datatables.net/tn/11";
          r[w] || (r[w] = {});
          var l = t.row(g.index.row).id();
          r[w][l] = g.set, i.push(g.index);
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
      var o = n.offsetTop, c = n.offsetLeft;
      if (r = ge(n.offsetParent), i += o + parseInt(r.css("border-top-width") || 0) * 1, a += c + parseInt(r.css("border-left-width") || 0) * 1, n.nodeName.toLowerCase() === "body")
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
        var c = n.editor();
        c.on("submitSuccess.dtaf close.dtaf", function() {
          c.off(".dtaf"), setTimeout(function() {
            t._mouseup(e);
          }, 100);
        }).on("submitComplete.dtaf preSubmitCancelled.dtaf close.dtaf", function() {
          c.off(".dtaf");
        }), c.submit();
        return;
      }
      for (var h = this._range(i.row, a.row), m = this._range(i.column, a.column), g = [], _ = n.settings()[0], w = _.aoColumns, C = n.columns(this.c.columns).indexes(), k = 0; k < h.length; k++)
        g.push(
          ge.map(m, function(S) {
            var v = n.row(":eq(" + h[k] + ")", { page: "current" }), l = n.cell(v.index(), S + ":visible"), d = l.data(), y = l.index(), P = w[y.column].editField;
            if (P !== void 0 && (d = I.util.get(P)(n.row(y.row).data())), C.indexOf(y.column) !== -1)
              return {
                cell: l,
                data: d,
                label: l.data(),
                index: y
              };
          })
        );
      this._actionSelector(g), clearInterval(this.s.scrollInterval), this.s.scrollInterval = null;
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
    var t = this, n = this.s.scroll, r = !1, i = 5, a = 65, o = e.type.includes("touch") ? e.touches[0].clientX : e.pageX - window.scrollX, c = e.type.includes("touch") ? e.touches[0].clientY : e.pageY - window.scrollY, h = c, m = o, g, _, w, C;
    h < a ? g = i * -1 : h > n.windowHeight - a && (g = i), m < a ? _ = i * -1 : m > n.windowWidth - a && (_ = i), n.dtTop !== null && c < n.dtTop + a ? w = i * -1 : n.dtTop !== null && c > n.dtTop + n.dtHeight - a && (w = i), n.dtLeft !== null && o < n.dtLeft + a ? C = i * -1 : n.dtLeft !== null && o > n.dtLeft + n.dtWidth - a && (C = i), g || _ || w || C ? (n.windowVert = g, n.windowHoriz = _, n.dtVert = w, n.dtHoriz = C, r = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), this.s.scrollInterval = null), !this.s.scrollInterval && r && (this.s.scrollInterval = setInterval(function() {
      if (window.scrollTo(window.scrollX + (n.windowHoriz ? n.windowHoriz : 0), window.scrollY + (n.windowVert ? n.windowVert : 0)), n.dtVert || n.dtHoriz) {
        var k = t.dom.dtScroll[0];
        n.dtVert && (k.scrollTop += n.dtVert), n.dtHoriz && (k.scrollLeft += n.dtHoriz);
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
        for (var o = 0, c = t.length; o < c; o++)
          for (var h = 0, m = t[o].length; h < m; h++)
            r = t[o][h], i.indexOf(r.index.column) !== -1 && r.cell.data(r.set);
        n.draw(!1);
      }
      this._emitEvent("autoFill", [n, t]);
    }
  }
});
qt.actions = {
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
        for (var c = 0, h = t[a].length; c < h; c++)
          t[a][c].set = r, r += i;
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
        for (var o = 0, c = t[i].length; o < c; o++)
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
qt.version = "2.7.1";
qt.defaults = {
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
qt.classes = {
  /** @type {String} Class used by the selection button */
  btn: "btn",
  closeable: "dtaf-popover-closeable"
};
var ys = ge.fn.dataTable.Api;
ys.register("autoFill()", function() {
  return this;
});
ys.register("autoFill().enabled()", function() {
  var e = this.context[0];
  return e.autoFill ? e.autoFill.enabled() : !1;
});
ys.register("autoFill().enable()", function(e) {
  return this.iterator("table", function(t) {
    t.autoFill && t.autoFill.enable(e);
  });
});
ys.register("autoFill().disable()", function() {
  return this.iterator("table", function(e) {
    e.autoFill && e.autoFill.disable();
  });
});
ge(document).on("preInit.dt.autofill", function(e, t, n) {
  if (e.namespace === "dt") {
    var r = t.oInit.autoFill, i = I.defaults.autoFill;
    if (r || i) {
      var a = ge.extend({}, r, i);
      r !== !1 && new qt(t, a);
    }
  }
});
I.AutoFill = qt;
ge.fn.DataTable.AutoFill = qt;
/*! Bootstrap integration for DataTables' AutoFill
 * ©2015 SpryMedia Ltd - datatables.net/license
 */
I.AutoFill.classes.btn = "btn btn-primary";
/*! StateRestore 1.4.3
 * © SpryMedia Ltd - datatables.net/license
 */
let $t = Ue;
(function() {
  var e, t;
  function n(w) {
    e = w, t = w.fn.dataTable;
  }
  var r = (
    /** @class */
    function() {
      function w(C, k, S, v, l, d) {
        if (v === void 0 && (v = void 0), l === void 0 && (l = !1), d === void 0 && (d = function() {
          return null;
        }), !t || !t.versionCheck || !t.versionCheck("1.10.0"))
          throw new Error("StateRestore requires DataTables 1.10 or newer");
        if (!t.Buttons)
          throw new Error("StateRestore requires Buttons");
        var y = new t.Api(C);
        this.classes = e.extend(!0, {}, w.classes), this.c = e.extend(!0, {}, w.defaults, k), this.s = {
          dt: y,
          identifier: S,
          isPreDefined: l,
          savedState: v,
          tableId: v && v.stateRestore ? v.stateRestore.tableId : void 0
        }, this.dom = {
          background: e('<div class="' + this.classes.background + '"/>'),
          closeButton: e('<div class="' + this.classes.closeButton + '">&times;</div>'),
          confirmation: e('<div class="' + this.classes.confirmation + '"/>'),
          confirmationButton: e('<button class="' + this.classes.confirmationButton + " " + this.classes.dtButton + '">'),
          confirmationTitleRow: e('<div class="' + this.classes.confirmationTitleRow + '"></div>'),
          dtContainer: e(this.s.dt.table().container()),
          duplicateError: e('<span class="' + this.classes.modalError + '">' + this.s.dt.i18n("stateRestore.duplicateError", this.c.i18n.duplicateError) + "</span>"),
          emptyError: e('<span class="' + this.classes.modalError + '">' + this.s.dt.i18n("stateRestore.emptyError", this.c.i18n.emptyError) + "</span>"),
          removeContents: e('<div class="' + this.classes.confirmationText + '"><span>' + this.s.dt.i18n("stateRestore.removeConfirm", this.c.i18n.removeConfirm).replace(/%s/g, w.entityEncode(this.s.identifier)) + "</span></div>"),
          removeError: e('<span class="' + this.classes.modalError + '">' + this.s.dt.i18n("stateRestore.removeError", this.c.i18n.removeError) + "</span>"),
          removeTitle: e('<h2 class="' + this.classes.confirmationTitle + '">' + this.s.dt.i18n("stateRestore.removeTitle", this.c.i18n.removeTitle) + "</h2>"),
          renameContents: e('<div class="' + this.classes.confirmationText + " " + this.classes.renameModal + '"><label class="' + this.classes.confirmationMessage + '">' + this.s.dt.i18n("stateRestore.renameLabel", this.c.i18n.renameLabel).replace(/%s/g, w.entityEncode(this.s.identifier)) + "</label></div>"),
          renameInput: e('<input class="' + this.classes.input + '" type="text"></input>'),
          renameTitle: e('<h2 class="' + this.classes.confirmationTitle + '">' + this.s.dt.i18n("stateRestore.renameTitle", this.c.i18n.renameTitle) + "</h2>")
        }, this.save(v, d, !l);
      }
      return w.prototype.remove = function(C) {
        var k, S = this;
        if (C === void 0 && (C = !1), !this.c.remove)
          return !1;
        var v, l = {
          action: "remove",
          stateRestore: (k = {}, k[this.s.identifier] = this.s.savedState, k)
        }, d = function() {
          S.dom.confirmation.trigger("dtsr-remove"), e(S.s.dt.table().node()).trigger("stateRestore-change"), S.dom.background.click(), S.dom.confirmation.remove(), e(document).unbind("keyup", function(y) {
            return S._keyupFunction(y);
          }), S.dom.confirmationButton.off("click");
        };
        return this.c.ajax ? typeof this.c.ajax == "string" && this.s.dt.settings()[0]._bInitComplete ? v = function() {
          return e.ajax({
            data: l,
            success: d,
            type: "POST",
            url: S.c.ajax
          }), !0;
        } : typeof this.c.ajax == "function" && (v = function() {
          return typeof S.c.ajax == "function" && S.c.ajax.call(S.s.dt, l, d), !0;
        }) : v = function() {
          try {
            localStorage.removeItem("DataTables_stateRestore_" + S.s.identifier + "_" + location.pathname + (S.s.tableId ? "_" + S.s.tableId : "")), d();
          } catch {
            return S.dom.confirmation.children("." + S.classes.modalError).remove(), S.dom.confirmation.append(S.dom.removeError), "remove";
          }
          return !0;
        }, C ? (this.dom.confirmation.appendTo(this.dom.dtContainer), e(this.s.dt.table().node()).trigger("dtsr-modal-inserted"), v(), this.dom.confirmation.remove()) : this._newModal(this.dom.removeTitle, this.s.dt.i18n("stateRestore.removeSubmit", this.c.i18n.removeSubmit), v, this.dom.removeContents), !0;
      }, w.prototype.compare = function(C) {
        if (this.c.saveState.order || (C.order = void 0), this.c.saveState.search || (C.search = void 0), this.c.saveState.columns && C.columns)
          for (var k = 0, S = C.columns.length; k < S; k++)
            typeof this.c.saveState.columns != "boolean" && !this.c.saveState.columns.visible && (C.columns[k].visible = void 0), typeof this.c.saveState.columns != "boolean" && !this.c.saveState.columns.search && (C.columns[k].search = void 0);
        else
          this.c.saveState.columns || (C.columns = void 0);
        this.c.saveState.paging || (C.page = void 0), this.c.saveState.searchBuilder || (C.searchBuilder = void 0), this.c.saveState.searchPanes || (C.searchPanes = void 0), this.c.saveState.select || (C.select = void 0), this.c.saveState.colReorder || (C.ColReorder = void 0), this.c.saveState.scroller || (C.scroller = void 0, t.Scroller !== void 0 && (C.start = 0)), this.c.saveState.paging || (C.start = 0), this.c.saveState.length || (C.length = void 0), delete C.time;
        var v = this.s.savedState;
        return delete v.time, delete v.c, delete v.stateRestore, this._deepCompare(C, v);
      }, w.prototype.destroy = function() {
        e.each(this.dom, function(C, k) {
          k.off().remove();
        });
      }, w.prototype.load = function() {
        var C = this, k = this.s.savedState, S = this.s.dt.settings()[0];
        k.time = +/* @__PURE__ */ new Date(), S.oLoadedState = e.extend(!0, {}, k), e("div.dt-button-background").click();
        var v = function() {
          var l = function(d, y) {
            setTimeout(function() {
              var P = y._iDisplayStart / y._iDisplayLength, N = k.start / k.length;
              P >= 0 && N >= 0 && P !== N && C.s.dt.page(N).draw(!1);
            }, 50);
          };
          C.s.dt.one("preDraw", l), C.s.dt.draw(!1);
        };
        return I.versionCheck("2") ? (this.s.dt.state(k), v()) : I.ext.oApi._fnImplementState(S, k, v), k;
      }, w.prototype.rename = function(C, k) {
        var S = this;
        if (C === void 0 && (C = null), !!this.c.rename) {
          var v = function() {
            var l;
            if (C === null) {
              var d = e("input." + S.classes.input.replace(/ /g, ".")).val();
              if (d.length === 0)
                return S.dom.confirmation.children("." + S.classes.modalError).remove(), S.dom.confirmation.append(S.dom.emptyError), "empty";
              if (k.includes(d))
                return S.dom.confirmation.children("." + S.classes.modalError).remove(), S.dom.confirmation.append(S.dom.duplicateError), "duplicate";
              C = d;
            }
            var y = {
              action: "rename",
              stateRestore: (l = {}, l[S.s.identifier] = C, l)
            }, P = function() {
              S.s.identifier = C, S.save(S.s.savedState, function() {
                return null;
              }, !1), S.dom.removeContents = e('<div class="' + S.classes.confirmationText + '"><span>' + S.s.dt.i18n("stateRestore.removeConfirm", S.c.i18n.removeConfirm).replace(/%s/g, S.s.identifier) + "</span></div>"), S.dom.confirmation.trigger("dtsr-rename"), S.dom.background.click(), S.dom.confirmation.remove(), e(document).unbind("keyup", function(N) {
                return S._keyupFunction(N);
              }), S.dom.confirmationButton.off("click");
            };
            if (S.c.ajax)
              typeof S.c.ajax == "string" && S.s.dt.settings()[0]._bInitComplete ? e.ajax({
                data: y,
                success: P,
                type: "POST",
                url: S.c.ajax
              }) : typeof S.c.ajax == "function" && S.c.ajax.call(S.s.dt, y, P);
            else
              try {
                localStorage.removeItem("DataTables_stateRestore_" + S.s.identifier + "_" + location.pathname + (S.s.tableId ? "_" + S.s.tableId : "")), P();
              } catch {
                return S.dom.confirmation.children("." + S.classes.modalError).remove(), S.dom.confirmation.append(S.dom.removeError), !1;
              }
            return !0;
          };
          if (C !== null) {
            if (k.includes(C))
              throw new Error(this.s.dt.i18n("stateRestore.duplicateError", this.c.i18n.duplicateError));
            if (C.length === 0)
              throw new Error(this.s.dt.i18n("stateRestore.emptyError", this.c.i18n.emptyError));
            this.dom.confirmation.appendTo(this.dom.dtContainer), e(this.s.dt.table().node()).trigger("dtsr-modal-inserted"), v(), this.dom.confirmation.remove();
          } else
            this.dom.renameInput.val(this.s.identifier), this.dom.renameContents.append(this.dom.renameInput), this._newModal(this.dom.renameTitle, this.s.dt.i18n("stateRestore.renameButton", this.c.i18n.renameButton), v, this.dom.renameContents);
        }
      }, w.prototype.save = function(C, k, S) {
        var v, l = this;
        if (S === void 0 && (S = !0), !this.c.save) {
          k && k.call(this);
          return;
        }
        var d;
        if (this.s.dt.state.save(), C === void 0)
          d = this.s.dt.state();
        else {
          if (typeof C != "object")
            return;
          d = C;
        }
        if (d.stateRestore ? (d.stateRestore.isPreDefined = this.s.isPreDefined, d.stateRestore.state = this.s.identifier, d.stateRestore.tableId = this.s.tableId) : d.stateRestore = {
          isPreDefined: this.s.isPreDefined,
          state: this.s.identifier,
          tableId: this.s.tableId
        }, this.s.savedState = d, this.c.saveState.order || (this.s.savedState.order = void 0), this.c.saveState.search || (this.s.savedState.search = void 0), this.c.saveState.columns && this.s.savedState.columns)
          for (var y = 0, P = this.s.savedState.columns.length; y < P; y++)
            typeof this.c.saveState.columns != "boolean" && !this.c.saveState.columns.visible && (this.s.savedState.columns[y].visible = void 0), typeof this.c.saveState.columns != "boolean" && !this.c.saveState.columns.search && (this.s.savedState.columns[y].search = void 0);
        else
          this.c.saveState.columns || (this.s.savedState.columns = void 0);
        if (this.c.saveState.searchBuilder || (this.s.savedState.searchBuilder = void 0), this.c.saveState.searchPanes || (this.s.savedState.searchPanes = void 0), this.c.saveState.select || (this.s.savedState.select = void 0), this.c.saveState.colReorder || (this.s.savedState.ColReorder = void 0), this.c.saveState.scroller || (this.s.savedState.scroller = void 0, t.Scroller !== void 0 && (this.s.savedState.start = 0)), this.c.saveState.paging || (this.s.savedState.start = 0), this.c.saveState.length || (this.s.savedState.length = void 0), this.s.savedState.c = this.c, this.s.savedState.c.splitSecondaries.length)
          for (var N = 0, p = this.s.savedState.c.splitSecondaries; N < p.length; N++) {
            var M = p[N];
            M.parent && (M.parent = void 0);
          }
        var U = {
          action: "save",
          stateRestore: (v = {}, v[this.s.identifier] = this.s.savedState, v)
        }, q = function() {
          k && k.call(l), l.dom.confirmation.trigger("dtsr-save"), e(l.s.dt.table().node()).trigger("stateRestore-change");
        };
        this.c.ajax ? typeof this.c.ajax == "string" && S ? this.s.dt.settings()[0]._bInitComplete ? e.ajax({
          data: U,
          success: q,
          type: "POST",
          url: this.c.ajax
        }) : this.s.dt.one("init", function() {
          e.ajax({
            data: U,
            success: q,
            type: "POST",
            url: l.c.ajax
          });
        }) : typeof this.c.ajax == "function" && S ? this.c.ajax.call(this.s.dt, U, q) : S || q() : (localStorage.setItem("DataTables_stateRestore_" + this.s.identifier + "_" + location.pathname + (this.s.tableId ? "_" + this.s.tableId : ""), JSON.stringify(this.s.savedState)), q());
      }, w.entityEncode = function(C) {
        return typeof C == "string" ? C.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : C;
      }, w.prototype._deepCompare = function(C, k) {
        if (C === null && k === null)
          return !0;
        if (C === null || k === null)
          return !1;
        var S = [C, k], v = [Object.keys(C).sort(), Object.keys(k).sort()], l, d;
        for (v[0].includes("scroller") && (l = v[0].indexOf("start"), l && v[0].splice(l, 1)), v[1].includes("scroller") && (l = v[1].indexOf("start"), l && v[1].splice(l, 1)), d = 0; d < v[0].length; d++) {
          if (v[0][d].indexOf("_") === 0) {
            v[0].splice(d, 1), d--;
            continue;
          }
          if (v[0][d] === "baseRowTop" || v[0][d] === "baseScrollTop" || v[0][d] === "scrollTop" || !this.c.saveState.paging && v[0][d] === "page") {
            v[0].splice(d, 1), d--;
            continue;
          }
        }
        for (d = 0; d < v[1].length; d++) {
          if (v[1][d].indexOf("_") === 0) {
            v[1].splice(d, 1), d--;
            continue;
          }
          if (v[1][d] === "baseRowTop" || v[1][d] === "baseScrollTop" || v[1][d] === "scrollTop" || !this.c.saveState.paging && v[0][d] === "page") {
            v[1].splice(d, 1), d--;
            continue;
          }
        }
        if (v[0].length === 0 && v[1].length > 0 || v[1].length === 0 && v[0].length > 0)
          return !1;
        for (d = 0; d < v[0].length; d++)
          v[1].includes(v[0][d]) || (v[0].splice(d, 1), d--);
        for (d = 0; d < v[1].length; d++)
          v[0].includes(v[1][d]) || (v[1].splice(d, 1), d--);
        for (d = 0; d < v[0].length; d++) {
          if (v[0][d] !== v[1][d] || typeof S[0][v[0][d]] != typeof S[1][v[1][d]])
            return !1;
          if (typeof S[0][v[0][d]] == "object") {
            if (Array.isArray(S[0][v[0][d]]) && Array.isArray(S[1][v[1][d]]) && S[0][v[0][d]].length !== S[1][v[0][d]].length || !this._deepCompare(S[0][v[0][d]], S[1][v[1][d]]))
              return !1;
          } else if (typeof S[0][v[0][d]] == "number" && typeof S[1][v[1][d]] == "number") {
            if (Math.round(S[0][v[0][d]]) !== Math.round(S[1][v[1][d]]))
              return !1;
          } else if (S[0][v[0][d]] !== S[1][v[1][d]])
            return !1;
        }
        return !0;
      }, w.prototype._keyupFunction = function(C) {
        C.key === "Enter" ? this.dom.confirmationButton.click() : C.key === "Escape" && e("div." + this.classes.background.replace(/ /g, ".")).click();
      }, w.prototype._newModal = function(C, k, S, v) {
        var l = this;
        this.dom.background.appendTo(this.dom.dtContainer), this.dom.confirmationTitleRow.empty().append(C), this.dom.confirmationButton.html(k), this.dom.confirmation.empty().append(this.dom.confirmationTitleRow).append(v).append(e('<div class="' + this.classes.confirmationButtons + '"></div>').append(this.dom.confirmationButton)).appendTo(this.dom.dtContainer), e(this.s.dt.table().node()).trigger("dtsr-modal-inserted");
        var d = v.children("input");
        d.length > 0 ? e(d[0]).focus() : this.dom.confirmationButton.focus();
        var y = e("div." + this.classes.background.replace(/ /g, "."));
        this.c.modalCloseButton && (this.dom.confirmation.append(this.dom.closeButton), this.dom.closeButton.on("click", function() {
          return y.click();
        })), this.dom.confirmationButton.on("click", function() {
          return S();
        }), this.dom.confirmation.on("click", function(P) {
          P.stopPropagation();
        }), y.one("click", function() {
          l.dom.background.remove(), l.dom.confirmation.remove(), e(document).unbind("keyup", function(P) {
            return l._keyupFunction(P);
          });
        }), e(document).on("keyup", function(P) {
          return l._keyupFunction(P);
        });
      }, w.version = "1.4.3", w.classes = {
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
      }, w.defaults = {
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
      }, w;
    }()
  ), i, a;
  function o(w) {
    i = w, a = w.fn.dataTable;
  }
  var c = (
    /** @class */
    function() {
      function w(C, k) {
        var S = this;
        if (!a || !a.versionCheck || !a.versionCheck("1.10.0"))
          throw new Error("StateRestore requires DataTables 1.10 or newer");
        if (!a.Buttons)
          throw new Error("StateRestore requires Buttons");
        var v = new a.Api(C);
        if (this.classes = i.extend(!0, {}, w.classes), v.settings()[0]._stateRestore === void 0) {
          this.c = i.extend(!0, {}, w.defaults, k), this.s = {
            dt: v,
            hasColReorder: a.ColReorder !== void 0,
            hasScroller: a.Scroller !== void 0,
            hasSearchBuilder: a.SearchBuilder !== void 0,
            hasSearchPanes: a.SearchPanes !== void 0,
            hasSelect: a.select !== void 0,
            states: []
          }, this.s.dt.on("xhr", function(y, P, N) {
            N && N.stateRestore && S._addPreDefined(N.stateRestore);
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
          }, v.settings()[0]._stateRestore = this, this._searchForStates(), this._addPreDefined(this.c.preDefined);
          var l, d = {
            action: "load"
          };
          return typeof this.c.ajax == "function" ? l = function() {
            typeof S.c.ajax == "function" && S.c.ajax.call(S.s.dt, d, function(y) {
              return S._addPreDefined(y);
            });
          } : typeof this.c.ajax == "string" && (l = function() {
            i.ajax({
              data: d,
              dataType: "json",
              success: function(y) {
                S._addPreDefined(y);
              },
              type: "POST",
              url: S.c.ajax
            });
          }), typeof l == "function" && (this.s.dt.settings()[0]._bInitComplete ? l() : this.s.dt.one("preInit.dtsr", function() {
            l();
          })), this.s.dt.on("destroy.dtsr", function() {
            S.destroy();
          }), this.s.dt.on("draw.dtsr buttons-action.dtsr", function() {
            return S.findActive();
          }), this;
        }
      }
      return w.prototype.addState = function(C, k, S) {
        var v = this;
        if (!(!this.c.create || !this.c.save)) {
          var l = this.getState(C), d = function(P, N) {
            if (P.length === 0)
              return "empty";
            if (k.includes(P))
              return "duplicate";
            v.s.dt.state.save();
            var p = v, M = function() {
              p.s.states.push(this), p._collectionRebuild();
            }, U = v.s.dt.state();
            if (U.stateRestore = {
              isPredefined: !1,
              state: P,
              tableId: v.s.dt.table().node().id
            }, N.saveState) {
              for (var q = v.c.saveState, z = 0, ne = Object.keys(N.saveState); z < ne.length; z++) {
                var F = ne[z];
                if (typeof N.saveState[F] == "object")
                  for (var D = 0, A = Object.keys(N.saveState[F]); D < A.length; D++) {
                    var R = A[D];
                    N.saveState[F][R] || (q[F][R] = !1);
                  }
                else
                  N.saveState[F] || (q[F] = !1);
              }
              v.c.saveState = q;
            }
            var E = new r(v.s.dt.settings()[0], i.extend(!0, {}, v.c, S), P, U, !1, M);
            return i(v.s.dt.table().node()).on("dtsr-modal-inserted", function() {
              E.dom.confirmation.one("dtsr-remove", function() {
                return v._removeCallback(E.s.identifier);
              }), E.dom.confirmation.one("dtsr-rename", function() {
                return v._collectionRebuild();
              }), E.dom.confirmation.one("dtsr-save", function() {
                return v._collectionRebuild();
              });
            }), !0;
          };
          if (l === null)
            if (this.c.creationModal || S !== void 0 && S.creationModal)
              this._creationModal(d, C, S);
            else {
              var y = d(C, {});
              if (y === "empty")
                throw new Error(this.s.dt.i18n("stateRestore.emptyError", this.c.i18n.emptyError));
              if (y === "duplicate")
                throw new Error(this.s.dt.i18n("stateRestore.duplicateError", this.c.i18n.duplicateError));
            }
          else
            throw new Error(this.s.dt.i18n("stateRestore.duplicateError", this.c.i18n.duplicateError));
        }
      }, w.prototype.removeAll = function(C) {
        if (this.s.states.length !== 0) {
          var k = this.s.states.map(function(v) {
            return v.s.identifier;
          }), S = k[0];
          k.length > 1 && (S = k.slice(0, -1).join(", ") + this.s.dt.i18n("stateRestore.removeJoiner", this.c.i18n.removeJoiner) + k.slice(-1)), i(this.dom.removeContents.children("span")).html(this.s.dt.i18n("stateRestore.removeConfirm", this.c.i18n.removeConfirm).replace(/%s/g, S)), this._newModal(this.dom.removeTitle, this.s.dt.i18n("stateRestore.removeSubmit", this.c.i18n.removeSubmit), C, this.dom.removeContents);
        }
      }, w.prototype.destroy = function() {
        for (var C = 0, k = this.s.states; C < k.length; C++) {
          var S = k[C];
          S.destroy();
        }
        i.each(this.dom, function(v, l) {
          l.off().remove();
        }), this.s.states = [], this.s.dt.off(".dtsr"), i(this.s.dt.table().node()).off(".dtsr");
      }, w.prototype.findActive = function() {
        this.s.dt.state.save();
        for (var C = this.s.dt.state(), k, S = this.s.dt.buttons().nodes(), v = 0, l = S; v < l.length; v++)
          k = l[v], (i(k).hasClass("dtsr-state") || i(k).children().hasClass("dtsr-state")) && this.s.dt.button(k).active(!1);
        for (var d = [], y = 0, P = this.s.states; y < P.length; y++) {
          var N = P[y];
          if (N.compare(C)) {
            d.push({
              data: N.s.savedState,
              name: N.s.identifier
            });
            for (var p = 0, M = S; p < M.length; p++) {
              k = M[p];
              var U = this.s.dt.button(k);
              if (U.text() === N.s.identifier) {
                U.active(!0);
                break;
              }
            }
          }
        }
        return d;
      }, w.prototype.getState = function(C) {
        for (var k = 0, S = this.s.states; k < S.length; k++) {
          var v = S[k];
          if (v.s.identifier === C)
            return v;
        }
        return null;
      }, w.prototype.getStates = function(C) {
        if (C === void 0)
          return this.s.states;
        for (var k = [], S = 0, v = C; S < v.length; S++) {
          for (var l = v[S], d = !1, y = 0, P = this.s.states; y < P.length; y++) {
            var N = P[y];
            if (l === N.s.identifier) {
              k.push(N), d = !0;
              break;
            }
          }
          d || k.push(void 0);
        }
        return k;
      }, w.prototype._addPreDefined = function(C) {
        for (var k = this, S = Object.keys(C).sort(function(N, p) {
          return N > p ? 1 : N < p ? -1 : 0;
        }), v = function(N) {
          for (var p = 0; p < l.s.states.length; p++)
            l.s.states[p].s.identifier === N && l.s.states.splice(p, 1);
          var M = l, U = function() {
            M.s.states.push(this), M._collectionRebuild();
          }, q = l._fixTypes(C[N]), z = i.extend(!0, {}, l.c, q.c !== void 0 ? {
            saveState: q.c.saveState,
            remove: q.c.remove,
            rename: q.c.rename,
            save: q.c.save
          } : void 0, !0);
          l.c.createState && l.c.createState(z, q);
          var ne = new r(l.s.dt, z, N, q, !0, U);
          i(l.s.dt.table().node()).on("dtsr-modal-inserted", function() {
            ne.dom.confirmation.one("dtsr-remove", function() {
              return k._removeCallback(ne.s.identifier);
            }), ne.dom.confirmation.one("dtsr-rename", function() {
              return k._collectionRebuild();
            }), ne.dom.confirmation.one("dtsr-save", function() {
              return k._collectionRebuild();
            });
          });
        }, l = this, d = 0, y = S; d < y.length; d++) {
          var P = y[d];
          v(P);
        }
      }, w.prototype._collectionRebuild = function() {
        var C = this.s.dt.button("SaveStateRestore:name"), k = [], S;
        if (C[0]) {
          var v = C.index().split("-");
          for (k = C[0].inst.c.buttons, S = 0; S < v.length; S++)
            if (k[v[S]].buttons)
              k = k[v[S]].buttons;
            else {
              k = [];
              break;
            }
        }
        for (S = 0; S < k.length; S++)
          k[S].extend === "stateRestore" && (k.splice(S, 1), S--);
        this.c._createInSaved && k.push("createState");
        var l = '<span class="' + this.classes.emptyStates + '">' + this.s.dt.i18n("stateRestore.emptyStates", this.c.i18n.emptyStates) + "</span>";
        if (this.s.states.length === 0)
          k.includes(l) || k.push(l);
        else {
          for (; k.includes(l); )
            k.splice(k.indexOf(l), 1);
          this.s.states = this.s.states.sort(function(ne, F) {
            var D = ne.s.identifier, A = F.s.identifier;
            return D > A ? 1 : D < A ? -1 : 0;
          });
          for (var d = 0, y = this.s.states; d < y.length; d++) {
            var P = y[d], N = this.c.splitSecondaries.slice();
            N.includes("updateState") && (!this.c.save || !P.c.save) && N.splice(N.indexOf("updateState"), 1), N.includes("renameState") && (!this.c.save || !P.c.save || !this.c.rename || !P.c.rename) && N.splice(N.indexOf("renameState"), 1), N.includes("removeState") && (!this.c.remove || !P.c.remove) && N.splice(N.indexOf("removeState"), 1);
            var p = {
              _stateRestore: P,
              attr: {
                title: P.s.identifier
              },
              config: {
                split: N
              },
              extend: "stateRestore",
              text: r.entityEncode(P.s.identifier),
              popoverTitle: r.entityEncode(P.s.identifier)
            };
            this.c.createButton && this.c.createButton(p, P.s.savedState), k.push(p);
          }
        }
        C.collectionRebuild(k);
        for (var M = this.s.dt.buttons(), U = 0, q = M; U < q.length; U++) {
          var z = q[U];
          i(z.node).hasClass("dtsr-removeAllStates") && (this.s.states.length === 0 ? this.s.dt.button(z.node).disable() : this.s.dt.button(z.node).enable());
        }
      }, w.prototype._creationModal = function(C, k, S) {
        var v = this;
        this.dom.creation.empty(), this.dom.creationForm.empty(), this.dom.nameInputRow.find("input").val(k), this.dom.creationForm.append(this.dom.nameInputRow);
        var l = this.s.dt.settings()[0].oInit, d, y = [], P = S !== void 0 && S.toggle !== void 0;
        ((!P || S.toggle.order === void 0) && this.c.toggle.order || P && S.toggle.order) && this.c.saveState.order && (l.ordering === void 0 || l.ordering) && y.push(this.dom.orderToggle), ((!P || S.toggle.search === void 0) && this.c.toggle.search || P && S.toggle.search) && this.c.saveState.search && (l.searching === void 0 || l.searching) && y.push(this.dom.searchToggle), ((!P || S.toggle.paging === void 0) && this.c.toggle.paging || P && S.toggle.paging) && this.c.saveState.paging && (l.paging === void 0 || l.paging) && y.push(this.dom.pagingToggle), ((!P || S.toggle.length === void 0) && this.c.toggle.length || P && S.toggle.length) && this.c.saveState.length && (l.length === void 0 || l.length) && y.push(this.dom.lengthToggle), this.s.hasColReorder && ((!P || S.toggle.colReorder === void 0) && this.c.toggle.colReorder || P && S.toggle.colReorder) && this.c.saveState.colReorder && y.push(this.dom.colReorderToggle), this.s.hasScroller && ((!P || S.toggle.scroller === void 0) && this.c.toggle.scroller || P && S.toggle.scroller) && this.c.saveState.scroller && y.push(this.dom.scrollerToggle), this.s.hasSearchBuilder && ((!P || S.toggle.searchBuilder === void 0) && this.c.toggle.searchBuilder || P && S.toggle.searchBuilder) && this.c.saveState.searchBuilder && y.push(this.dom.searchBuilderToggle), this.s.hasSearchPanes && ((!P || S.toggle.searchPanes === void 0) && this.c.toggle.searchPanes || P && S.toggle.searchPanes) && this.c.saveState.searchPanes && y.push(this.dom.searchPanesToggle), this.s.hasSelect && ((!P || S.toggle.select === void 0) && this.c.toggle.select || P && S.toggle.select) && this.c.saveState.select && y.push(this.dom.selectToggle), typeof this.c.toggle.columns == "boolean" && ((!P || S.toggle.order === void 0) && this.c.toggle.columns || P && S.toggle.order) && this.c.saveState.columns ? (y.push(this.dom.columnsSearchToggle), y.push(this.dom.columnsVisibleToggle)) : ((!P || S.toggle.columns === void 0) && typeof this.c.toggle.columns != "boolean" || typeof S.toggle.order != "boolean") && (typeof this.c.saveState.columns != "boolean" && this.c.saveState.columns ? (
          // columns.search is defined when passed in
          ((P && S.toggle.columns !== void 0 && typeof S.toggle.columns != "boolean" && S.toggle.columns.search || // Columns search is not defined when passed in but is in defaults
          (!P || S.toggle.columns === void 0 || typeof S.toggle.columns != "boolean" && S.toggle.columns.search === void 0) && typeof this.c.toggle.columns != "boolean" && this.c.toggle.columns.search) && this.c.saveState.columns.search && y.push(this.dom.columnsSearchToggle), // columns.visible is defined when passed in
          (P && S.toggle.columns !== void 0 && typeof S.toggle.columns != "boolean" && S.toggle.columns.visible || // Columns visible is not defined when passed in but is in defaults
          (!P || S.toggle.columns === void 0 || typeof S.toggle.columns != "boolean" && S.toggle.columns.visible === void 0) && typeof this.c.toggle.columns != "boolean" && this.c.toggle.columns.visible) && this.c.saveState.columns.visible && y.push(this.dom.columnsVisibleToggle))
        ) : this.c.saveState.columns && (y.push(this.dom.columnsSearchToggle), y.push(this.dom.columnsVisibleToggle))), y.sort(function(A, R) {
          var E = A.text(), V = R.text();
          return E < V ? -1 : E > V ? 1 : 0;
        });
        for (var N = this.dom.checkboxInputRow.css("display", y.length ? "block" : "none").appendTo(this.dom.creationForm).find("div.dtsr-input").empty(), p = 0, M = y; p < M.length; p++)
          d = M[p], N.append(d);
        this.dom.background.appendTo(this.dom.dtContainer), this.dom.creation.append(this.dom.creationTitle).append(this.dom.creationForm).append(this.dom.createButtonRow).appendTo(this.dom.dtContainer), i(this.s.dt.table().node()).trigger("dtsr-modal-inserted");
        for (var U = 0, q = y; U < q.length; U++)
          d = q[U], i(d.children("label:last-child")).on("click", function() {
            d.children("input").prop("checked", !d.children("input").prop("checked"));
          });
        var z = i("button." + this.classes.creationButton.replace(/ /g, ".")), ne = this.dom.creationForm.find("input");
        ne.length > 0 ? i(ne[0]).focus() : z.focus();
        var F = i("div." + this.classes.background.replace(/ /g, ".")), D = function(A) {
          A.key === "Enter" ? z.click() : A.key === "Escape" && F.click();
        };
        this.c.modalCloseButton && (this.dom.creation.append(this.dom.closeButton), this.dom.closeButton.on("click", function() {
          return F.click();
        })), z.on("click", function() {
          var A = {
            colReorder: v.dom.colReorderToggle.find("input").is(":checked"),
            columns: {
              search: v.dom.columnsSearchToggle.find("input").is(":checked"),
              visible: v.dom.columnsVisibleToggle.find("input").is(":checked")
            },
            length: v.dom.lengthToggle.find("input").is(":checked"),
            order: v.dom.orderToggle.find("input").is(":checked"),
            paging: v.dom.pagingToggle.find("input").is(":checked"),
            scroller: v.dom.scrollerToggle.find("input").is(":checked"),
            search: v.dom.searchToggle.find("input").is(":checked"),
            searchBuilder: v.dom.searchBuilderToggle.find("input").is(":checked"),
            searchPanes: v.dom.searchPanesToggle.find("input").is(":checked"),
            select: v.dom.selectToggle.find("input").is(":checked")
          }, R = C(i("input." + v.classes.nameInput.replace(/ /g, ".")).val(), { saveState: A });
          R === !0 ? (v.dom.background.remove(), v.dom.creation.remove(), i(document).unbind("keyup", D)) : (v.dom.creation.children("." + v.classes.modalError).remove(), v.dom.creation.append(v.dom[R + "Error"]));
        }), F.one("click", function() {
          v.dom.background.remove(), v.dom.creation.remove(), i(document).unbind("keyup", D), v._collectionRebuild();
        }), i(document).on("keyup", D), this.s.dt.state.save();
      }, w.prototype._fixTypes = function(C) {
        var k, S = function(l, d) {
          var y = l[d];
          y !== void 0 && (l[d] = typeof y == "number" ? y : parseInt(y));
        }, v = function(l, d) {
          var y = l[d];
          y !== void 0 && (l[d] = typeof y != "string" ? y : y === "true");
        };
        if (S(C, "start"), S(C, "length"), S(C, "time"), C.order)
          for (k = 0; k < C.order.length; k++)
            S(C.order[k], 0);
        if (C.search && (v(C.search, "caseInsensitive"), v(C.search, "regex"), v(C.search, "smart"), v(C.search, "visible"), v(C.search, "return")), C.columns)
          for (k = 0; k < C.columns.length; k++)
            v(C.columns[k], "caseInsensitive"), v(C.columns[k], "regex"), v(C.columns[k], "smart"), v(C.columns[k], "visible");
        if (C.colReorder)
          for (k = 0; k < C.colReorder.length; k++)
            S(C.colReorder, k);
        return C;
      }, w.prototype._removeCallback = function(C) {
        for (var k = 0; k < this.s.states.length; k++)
          this.s.states[k].s.identifier === C && (this.s.states.splice(k, 1), k--);
        return this._collectionRebuild(), !0;
      }, w.prototype._newModal = function(C, k, S, v) {
        var l = this;
        this.dom.background.appendTo(this.dom.dtContainer), this.dom.confirmationTitleRow.empty().append(C);
        var d = i('<button class="' + this.classes.confirmationButton + " " + this.classes.dtButton + '">' + k + "</button>");
        this.dom.confirmation.empty().append(this.dom.confirmationTitleRow).append(v).append(i('<div class="' + this.classes.confirmationButtons + '"></div>').append(d)).appendTo(this.dom.dtContainer), i(this.s.dt.table().node()).trigger("dtsr-modal-inserted");
        var y = v.children("input");
        y.length > 0 ? i(y[0]).focus() : d.focus();
        var P = i("div." + this.classes.background.replace(/ /g, ".")), N = function(p) {
          p.key === "Enter" ? d.click() : p.key === "Escape" && P.click();
        };
        d.on("click", function() {
          var p = S(!0);
          p === !0 ? (l.dom.background.remove(), l.dom.confirmation.remove(), i(document).unbind("keyup", N), d.off("click")) : (l.dom.confirmation.children("." + l.classes.modalError).remove(), l.dom.confirmation.append(l.dom[p + "Error"]));
        }), this.dom.confirmation.on("click", function(p) {
          p.stopPropagation();
        }), P.one("click", function() {
          l.dom.background.remove(), l.dom.confirmation.remove(), i(document).unbind("keyup", N);
        }), i(document).on("keyup", N);
      }, w.prototype._searchForStates = function() {
        for (var C = this, k = Object.keys(localStorage), S = function(P) {
          if (P.startsWith("DataTables_stateRestore_") && (P.endsWith(location.pathname) || P.endsWith(location.pathname + "_" + v.s.dt.table().node().id))) {
            var N = JSON.parse(localStorage.getItem(P));
            if (N.stateRestore.isPreDefined || N.stateRestore.tableId && N.stateRestore.tableId !== v.s.dt.table().node().id)
              return "continue";
            var p = v, M = function() {
              this.s.savedState = N, p.s.states.push(this), p._collectionRebuild();
            }, U = new r(v.s.dt, i.extend(!0, {}, v.c, { saveState: N.c.saveState }), N.stateRestore.state, N, !1, M);
            i(v.s.dt.table().node()).on("dtsr-modal-inserted", function() {
              U.dom.confirmation.one("dtsr-remove", function() {
                return C._removeCallback(U.s.identifier);
              }), U.dom.confirmation.one("dtsr-rename", function() {
                return C._collectionRebuild();
              }), U.dom.confirmation.one("dtsr-save", function() {
                return C._collectionRebuild();
              });
            });
          }
        }, v = this, l = 0, d = k; l < d.length; l++) {
          var y = d[l];
          S(y);
        }
      }, w.version = "1.0.0", w.classes = {
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
      }, w.defaults = {
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
      }, w;
    }()
  );
  /*! StateRestore 1.4.3
   * © SpryMedia Ltd - datatables.net/license
   */
  n($t), o($t), $t.fn.dataTable.StateRestore = r, $t.fn.DataTable.StateRestore = r, $t.fn.dataTable.StateRestoreCollection = c, $t.fn.DataTable.StateRestoreCollection = c;
  var h = I.Api.register;
  h("stateRestore()", function() {
    return this;
  }), h("stateRestore.state()", function(w) {
    var C = this.context[0];
    if (!C._stateRestore) {
      var k = I.Api(C), S = new I.StateRestoreCollection(k, {});
      _(k, S);
    }
    return this[0] = C._stateRestore.getState(w), this;
  }), h("stateRestore.state.add()", function(w, C) {
    var k = this.context[0];
    if (!k._stateRestore) {
      var S = I.Api(k), v = new I.StateRestoreCollection(S, {});
      _(S, v);
    }
    if (!k._stateRestore.c.create)
      return this;
    if (k._stateRestore.addState) {
      for (var l = k._stateRestore.s.states, d = [], y = 0, P = l; y < P.length; y++) {
        var N = P[y];
        d.push(N.s.identifier);
      }
      return k._stateRestore.addState(w, d, C), this;
    }
  }), h("stateRestore.states()", function(w) {
    var C = this.context[0];
    if (!C._stateRestore) {
      var k = I.Api(C), S = new I.StateRestoreCollection(k, {});
      _(k, S);
    }
    return this.length = 0, this.push.apply(this, C._stateRestore.getStates(w)), this;
  }), h("stateRestore.state().save()", function() {
    var w = this[0];
    return w.c.save && w.save(), this;
  }), h("stateRestore.state().rename()", function(w) {
    var C = this.context[0], k = this[0];
    if (k.c.save) {
      for (var S = C._stateRestore.s.states, v = [], l = 0, d = S; l < d.length; l++) {
        var y = d[l];
        v.push(y.s.identifier);
      }
      k.rename(w, v);
    }
    return this;
  }), h("stateRestore.state().load()", function() {
    var w = this[0];
    return w.load(), this;
  }), h("stateRestore.state().remove()", function(w) {
    var C = this[0];
    return C.c.remove && C.remove(w), this;
  }), h("stateRestore.states().remove()", function(w) {
    var C = this, k = function(S) {
      for (var v = !0, l = C.toArray(); l.length > 0; ) {
        var d = l[0];
        if (d !== void 0 && d.c.remove) {
          var y = d.remove(S);
          y !== !0 ? v = y : l.splice(0, 1);
        } else
          break;
      }
      return v;
    };
    return this.context[0]._stateRestore && this.context[0]._stateRestore.c.remove && (w ? k(w) : this.context[0]._stateRestore.removeAll(k)), this;
  }), h("stateRestore.activeStates()", function() {
    var w = this.context[0];
    if (this.length = 0, !w._stateRestore) {
      var C = I.Api(w), k = new I.StateRestoreCollection(C, {});
      _(C, k);
    }
    return w._stateRestore && this.push.apply(this, w._stateRestore.findActive()), this;
  }), I.ext.buttons.stateRestore = {
    action: function(w, C, k, S) {
      S._stateRestore.load(), k.blur();
    },
    className: "dtsr-state",
    config: {
      split: ["updateState", "renameState", "removeState"]
    },
    text: function(w) {
      return w.i18n("buttons.stateRestore", "State %d", w.stateRestore.states()[0].length + 1);
    }
  }, I.ext.buttons.updateState = {
    action: function(w, C, k, S) {
      $t("div.dt-button-background").click(), S.parent._stateRestore.save();
    },
    text: function(w) {
      return w.i18n("buttons.updateState", "Update");
    }
  }, I.ext.buttons.savedStates = {
    buttons: [],
    extend: "collection",
    init: function(w, C, k) {
      w.on("stateRestore-change", function() {
        w.button(C).text(w.i18n("buttons.savedStates", "Saved States", w.stateRestore.states().length));
      }), w.settings()[0]._stateRestore === void 0 && g(w, k);
    },
    name: "SaveStateRestore",
    text: function(w) {
      return w.i18n("buttons.savedStates", "Saved States", 0);
    }
  }, I.ext.buttons.savedStatesCreate = {
    buttons: [],
    extend: "collection",
    init: function(w, C, k) {
      w.on("stateRestore-change", function() {
        w.button(C).text(w.i18n("buttons.savedStates", "Saved States", w.stateRestore.states().length));
      }), w.settings()[0]._stateRestore === void 0 && (k.config === void 0 && (k.config = {}), k.config._createInSaved = !0, g(w, k));
    },
    name: "SaveStateRestore",
    text: function(w) {
      return w.i18n("buttons.savedStates", "Saved States", 0);
    }
  }, I.ext.buttons.createState = {
    action: function(w, C, k, S) {
      w.stopPropagation();
      var v = C.settings()[0]._stateRestore.c, l = C.settings()[0].oLanguage;
      if (!(!v.create || !v.save)) {
        var d = C.stateRestore.states().toArray(), y = l.buttons !== void 0 && l.buttons.stateRestore !== void 0 ? l.buttons.stateRestore : "State ", P;
        if (y.indexOf("%d") === y.length - 3)
          P = new RegExp(y.replace(/%d/g, ""));
        else {
          var N = y.split("%d");
          P = [];
          for (var p = 0, M = N; p < M.length; p++) {
            var U = M[p];
            P.push(new RegExp(U));
          }
        }
        var q = function(le) {
          var ae;
          if (Array.isArray(P)) {
            ae = le;
            for (var ue = 0, be = P; ue < be.length; ue++) {
              var Me = be[ue];
              ae = ae.replace(Me, "");
            }
          } else
            ae = le.replace(P, "");
          return isNaN(+ae) || ae.length === le ? 0 : +ae;
        }, z = d.map(function(le) {
          return q(le.s.identifier);
        }).sort(function(le, ae) {
          return +le < +ae ? 1 : +le > +ae ? -1 : 0;
        }), ne = z[0];
        C.stateRestore.state.add(C.i18n("buttons.stateRestore", "State %d", ne !== void 0 ? ne + 1 : 1), S.config);
        for (var F = C.stateRestore.states().sort(function(le, ae) {
          var ue = +q(le.s.identifier), be = +q(ae.s.identifier);
          return ue > be ? 1 : ue < be ? -1 : 0;
        }), D = C.button("SaveStateRestore:name"), A = parseInt(D.index()), R = D[0] !== void 0 && D[0].inst.c.buttons[A].buttons !== void 0 ? D[0].inst.c.buttons[A].buttons : [], E = 0; E < R.length; E++)
          R[E].extend === "stateRestore" && (R.splice(E, 1), E--);
        v._createInSaved && R.push("createState");
        for (var V = 0, j = F; V < j.length; V++) {
          var X = j[V], Z = v.splitSecondaries.slice();
          Z.includes("updateState") && !v.save && Z.splice(Z.indexOf("updateState"), 1), Z.includes("renameState") && (!v.save || !v.rename) && Z.splice(Z.indexOf("renameState"), 1), Z.includes("removeState") && !v.remove && Z.splice(Z.indexOf("removeState"), 1), R.push({
            _stateRestore: X,
            attr: {
              title: X.s.identifier
            },
            config: {
              split: Z
            },
            extend: "stateRestore",
            text: r.entityEncode(X.s.identifier),
            popoverTitle: r.entityEncode(X.s.identifier)
          });
        }
        C.button("SaveStateRestore:name").collectionRebuild(R), k.blur();
        for (var Q = C.buttons(), ee = 0, te = Q; ee < te.length; ee++) {
          var ie = te[ee];
          $t(ie.node).hasClass("dtsr-removeAllStates") && (F.length === 0 ? C.button(ie.node).disable() : C.button(ie.node).enable());
        }
      }
    },
    init: function(w, C, k) {
      w.settings()[0]._stateRestore === void 0 && w.button("SaveStateRestore:name").length > 1 && g(w, k);
    },
    text: function(w) {
      return w.i18n("buttons.createState", "Create State");
    }
  }, I.ext.buttons.removeState = {
    action: function(w, C, k, S) {
      S.parent._stateRestore.remove(), k.blur();
    },
    text: function(w) {
      return w.i18n("buttons.removeState", "Remove");
    }
  }, I.ext.buttons.removeAllStates = {
    action: function(w, C, k) {
      C.stateRestore.states().remove(!0), k.blur();
    },
    className: "dt-button dtsr-removeAllStates",
    init: function(w, C) {
      (!w.settings()[0]._stateRestore || w.stateRestore.states().length === 0) && $t(C).addClass("disabled");
    },
    text: function(w) {
      return w.i18n("buttons.removeAllStates", "Remove All States");
    }
  }, I.ext.buttons.renameState = {
    action: function(w, C, k, S) {
      for (var v = C.settings()[0]._stateRestore.s.states, l = [], d = 0, y = v; d < y.length; d++) {
        var P = y[d];
        l.push(P.s.identifier);
      }
      S.parent._stateRestore.rename(void 0, l), k.blur();
    },
    text: function(w) {
      return w.i18n("buttons.renameState", "Rename");
    }
  };
  function m(w, C) {
    C === void 0 && (C = null);
    var k = new I.Api(w), S = C || k.init().stateRestore || I.defaults.stateRestore, v = new c(k, S);
    return _(k, v), v;
  }
  function g(w, C) {
    var k = new I.StateRestoreCollection(w, C.config);
    _(w, k);
  }
  function _(w, C) {
    var k = w.stateRestore.states(), S = w.button("SaveStateRestore:name"), v = [], l;
    if (S[0]) {
      var d = S.index().split("-");
      for (v = S[0].inst.c.buttons, l = 0; l < d.length; l++)
        if (v[d[l]].buttons)
          v = v[d[l]].buttons;
        else {
          v = [];
          break;
        }
    }
    var y = w.settings()[0]._stateRestore.c;
    for (l = 0; l < v.length; l++)
      v[l].extend === "stateRestore" && (v.splice(l, 1), l--);
    if (y._createInSaved && v.push("createState"), k === void 0 || k.length === 0)
      v.push('<span class="' + C.classes.emptyStates + '">' + w.i18n("stateRestore.emptyStates", C.c.i18n.emptyStates) + "</span>");
    else
      for (var P = 0, N = k; P < N.length; P++) {
        var p = N[P], M = y.splitSecondaries.slice();
        M.includes("updateState") && !y.save && M.splice(M.indexOf("updateState"), 1), M.includes("renameState") && (!y.save || !y.rename) && M.splice(M.indexOf("renameState"), 1), M.includes("removeState") && !y.remove && M.splice(M.indexOf("removeState"), 1), v.push({
          _stateRestore: p,
          attr: {
            title: p.s.identifier
          },
          config: {
            split: M
          },
          extend: "stateRestore",
          text: r.entityEncode(p.s.identifier),
          popoverTitle: r.entityEncode(p.s.identifier)
        });
      }
    w.button("SaveStateRestore:name").collectionRebuild(v);
    for (var U = w.buttons(), q = 0, z = U; q < z.length; q++) {
      var ne = z[q];
      $t(ne.node).hasClass("dtsr-removeAllStates") && (k.length === 0 ? w.button(ne.node).disable() : w.button(ne.node).enable());
    }
  }
  $t(document).on("preInit.dt.dtsr", function(w, C) {
    w.namespace === "dt" && (C.oInit.stateRestore || I.defaults.stateRestore) && (C._stateRestore || m(C, null));
  });
})();
/*! Bootstrap integration for DataTables' StateRestore
 * © SpryMedia Ltd - datatables.net/license
 */
let Lc = Ue;
Lc.extend(!0, I.StateRestoreCollection.classes, {
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
Lc.extend(!0, I.StateRestore.classes, {
  confirmationButton: "dtsr-confirmation-button btn btn-secondary",
  input: "dtsr-input form-control"
});
var Zh = Object.defineProperty, ep = (e, t, n) => t in e ? Zh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, oe = (e, t, n) => (ep(e, typeof t != "symbol" ? t + "" : t, n), n);
const Nc = "aria-describedby", ts = "aria-expanded", ws = "aria-hidden", xs = "aria-modal", Xl = "aria-pressed", la = "aria-selected", tp = "DOMContentLoaded", lo = "focus", uo = "focusin", Ic = "focusout", _s = "keydown", np = "keyup", et = "click", Oc = "mousedown", rp = "hover", Cs = "mouseenter", co = "mouseleave", ip = "pointerdown", sp = "pointermove", ap = "pointerup", Ts = "resize", Ss = "scroll", fo = "touchstart", op = "dragstart", Da = "ArrowDown", Aa = "ArrowUp", zl = "ArrowLeft", Ul = "ArrowRight", ho = "Escape", lp = "transitionDuration", up = "transitionDelay", ua = "transitionend", Ec = "transitionProperty", cp = navigator.userAgentData, ns = cp, { userAgent: dp } = navigator, rs = dp, Yl = /iPhone|iPad|iPod|Android/i;
ns ? ns.brands.some((e) => Yl.test(e.brand)) : Yl.test(rs);
const Kl = /(iPhone|iPod|iPad)/, fp = ns ? ns.brands.some((e) => Kl.test(e.brand)) : (
  /* istanbul ignore next */
  Kl.test(rs)
);
rs && rs.includes("Firefox");
const { head: Ds } = document;
["webkitPerspective", "perspective"].some((e) => e in Ds.style);
const hp = (e, t, n, r) => {
  const i = r || !1;
  e.addEventListener(t, n, i);
}, pp = (e, t, n, r) => {
  const i = r || !1;
  e.removeEventListener(t, n, i);
}, vp = (e, t, n, r) => {
  const i = (a) => {
    (a.target === e || a.currentTarget === e) && (n.apply(e, [a]), pp(e, t, i, r));
  };
  hp(e, t, i, r);
}, ci = () => {
};
(() => {
  let e = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get: () => (e = !0, e)
    });
    vp(document, tp, ci, t);
  } catch {
  }
  return e;
})();
["webkitTransform", "transform"].some((e) => e in Ds.style);
["webkitAnimation", "animation"].some((e) => e in Ds.style);
["webkitTransition", "transition"].some((e) => e in Ds.style);
const tn = (e, t) => e.getAttribute(t), is = (e, t) => e.hasAttribute(t), tt = (e, t, n) => e.setAttribute(t, n), or = (e, t) => e.removeAttribute(t), ve = (e, ...t) => {
  e.classList.add(...t);
}, Se = (e, ...t) => {
  e.classList.remove(...t);
}, pe = (e, t) => e.classList.contains(t), gi = (e) => e != null && typeof e == "object" || !1, Xe = (e) => gi(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((t) => e.nodeType === t) || !1, Le = (e) => Xe(e) && e.nodeType === 1 || !1, Pr = /* @__PURE__ */ new Map(), Ir = {
  data: Pr,
  /**
   * Sets web components data.
   *
   * @param element target element
   * @param component the component's name or a unique key
   * @param instance the component instance
   */
  set: (e, t, n) => {
    Le(e) && (Pr.has(t) || Pr.set(t, /* @__PURE__ */ new Map()), Pr.get(t).set(e, n));
  },
  /**
   * Returns all instances for specified component.
   *
   * @param component the component's name or a unique key
   * @returns all the component instances
   */
  getAllFor: (e) => Pr.get(e) || null,
  /**
   * Returns the instance associated with the target.
   *
   * @param element target element
   * @param component the component's name or a unique key
   * @returns the instance
   */
  get: (e, t) => {
    if (!Le(e) || !t)
      return null;
    const n = Ir.getAllFor(t);
    return e && n && n.get(e) || null;
  },
  /**
   * Removes web components data.
   *
   * @param element target element
   * @param component the component's name or a unique key
   */
  remove: (e, t) => {
    const n = Ir.getAllFor(t);
    !n || !Le(e) || (n.delete(e), n.size === 0 && Pr.delete(t));
  }
}, pt = (e, t) => Ir.get(e, t), bi = (e) => typeof e == "string" || !1, po = (e) => gi(e) && e.constructor.name === "Window" || !1, Bc = (e) => Xe(e) && e.nodeType === 9 || !1, Pe = (e) => po(e) ? e.document : Bc(e) ? e : Xe(e) ? e.ownerDocument : window.document, fn = (e, ...t) => Object.assign(e, ...t), Tn = (e) => {
  if (!e)
    return;
  if (bi(e))
    return Pe().createElement(e);
  const { tagName: t } = e, n = Tn(t);
  if (!n)
    return;
  const r = { ...e };
  return delete r.tagName, fn(n, r);
}, Ae = (e, t) => e.dispatchEvent(t), xt = (e, t) => {
  const n = getComputedStyle(e), r = t.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
  return n.getPropertyValue(r);
}, mp = (e) => {
  const t = xt(e, Ec), n = xt(e, up), r = n.includes("ms") ? (
    /* istanbul ignore next */
    1
  ) : 1e3, i = t && t !== "none" ? parseFloat(n) * r : (
    /* istanbul ignore next */
    0
  );
  return Number.isNaN(i) ? (
    /* istanbul ignore next */
    0
  ) : i;
}, Hr = (e) => {
  const t = xt(e, Ec), n = xt(e, lp), r = n.includes("ms") ? (
    /* istanbul ignore next */
    1
  ) : 1e3, i = t && t !== "none" ? parseFloat(n) * r : (
    /* istanbul ignore next */
    0
  );
  return Number.isNaN(i) ? (
    /* istanbul ignore next */
    0
  ) : i;
}, We = (e, t) => {
  let n = 0;
  const r = new Event(ua), i = Hr(e), a = mp(e);
  if (i) {
    const o = (c) => {
      c.target === e && (t.apply(e, [c]), e.removeEventListener(ua, o), n = 1);
    };
    e.addEventListener(ua, o), setTimeout(() => {
      n || Ae(e, r);
    }, i + a + 17);
  } else
    t.apply(e, [r]);
}, hn = (e, t) => e.focus(t), Jl = (e) => ["true", !0].includes(e) ? !0 : ["false", !1].includes(e) ? !1 : ["null", "", null, void 0].includes(e) ? null : e !== "" && !Number.isNaN(+e) ? +e : e, Wi = (e) => Object.entries(e), Vr = (e) => e.toLowerCase(), gp = (e, t, n, r) => {
  const i = { ...n }, a = { ...e.dataset }, o = { ...t }, c = {}, h = "title";
  return Wi(a).forEach(([m, g]) => {
    const _ = r && typeof m == "string" && m.includes(r) ? m.replace(r, "").replace(/[A-Z]/g, (w) => Vr(w)) : m;
    c[_] = Jl(g);
  }), Wi(i).forEach(([m, g]) => {
    i[m] = Jl(g);
  }), Wi(t).forEach(([m, g]) => {
    m in i ? o[m] = i[m] : m in c ? o[m] = c[m] : o[m] = m === h ? tn(e, h) : g;
  }), o;
}, Ql = (e) => Object.keys(e), ke = (e, t) => {
  const n = new CustomEvent(e, {
    cancelable: !0,
    bubbles: !0
  });
  return gi(t) && fn(n, t), n;
}, Gt = { passive: !0 }, hr = (e) => e.offsetHeight, ze = (e, t) => {
  Wi(t).forEach(([n, r]) => {
    if (r && bi(n) && n.includes("--"))
      e.style.setProperty(n, r);
    else {
      const i = {};
      i[n] = r, fn(e.style, i);
    }
  });
}, Pa = (e) => gi(e) && e.constructor.name === "Map" || !1, bp = (e) => typeof e == "number" || !1, wn = /* @__PURE__ */ new Map(), xe = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   *
   * @param element target element
   * @param callback the callback
   * @param delay the execution delay
   * @param key a unique key
   */
  set: (e, t, n, r) => {
    Le(e) && (r && r.length ? (wn.has(e) || wn.set(e, /* @__PURE__ */ new Map()), wn.get(e).set(r, setTimeout(t, n))) : wn.set(e, setTimeout(t, n)));
  },
  /**
   * Returns the timer associated with the target.
   *
   * @param element target element
   * @param key a unique
   * @returns the timer
   */
  get: (e, t) => {
    if (!Le(e))
      return null;
    const n = wn.get(e);
    return t && n && Pa(n) ? n.get(t) || /* istanbul ignore next */
    null : bp(n) ? n : null;
  },
  /**
   * Clears the element's timer.
   *
   * @param element target element
   * @param key a unique key
   */
  clear: (e, t) => {
    if (!Le(e))
      return;
    const n = wn.get(e);
    t && t.length && Pa(n) ? (clearTimeout(n.get(t)), n.delete(t), n.size === 0 && wn.delete(e)) : (clearTimeout(n), wn.delete(e));
  }
}, yi = (e, t) => {
  const { width: n, height: r, top: i, right: a, bottom: o, left: c } = e.getBoundingClientRect();
  let h = 1, m = 1;
  if (t && Le(e)) {
    const { offsetWidth: g, offsetHeight: _ } = e;
    h = g > 0 ? Math.round(n) / g : (
      /* istanbul ignore next */
      1
    ), m = _ > 0 ? Math.round(r) / _ : (
      /* istanbul ignore next */
      1
    );
  }
  return {
    width: n / h,
    height: r / m,
    top: i / m,
    right: a / h,
    bottom: o / m,
    left: c / h,
    x: c / h,
    y: i / m
  };
}, qn = (e) => Pe(e).body, pn = (e) => Pe(e).documentElement, Fc = (e) => Xe(e) && e.constructor.name === "ShadowRoot" || !1, yp = (e) => e.nodeName === "HTML" ? e : Le(e) && e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
Xe(e) && e.parentNode || // DOM Element detected
Fc(e) && e.host || // ShadowRoot detected
pn(e);
let Zl = 0, eu = 0;
const kr = /* @__PURE__ */ new Map(), Hc = (e, t) => {
  let n = t ? Zl : eu;
  if (t) {
    const r = Hc(e), i = kr.get(r) || /* @__PURE__ */ new Map();
    kr.has(r) || kr.set(r, i), Pa(i) && !i.has(t) ? (i.set(t, n), Zl += 1) : n = i.get(t);
  } else {
    const r = e.id || e;
    kr.has(r) ? n = kr.get(r) : (kr.set(r, n), eu += 1);
  }
  return n;
}, Xr = (e) => {
  var t;
  return e ? Bc(e) ? e.defaultView : Xe(e) ? (t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView : e : window;
}, wp = (e) => Array.isArray(e) || !1, Vc = (e) => {
  if (!Xe(e))
    return !1;
  const { top: t, bottom: n } = yi(e), { clientHeight: r } = pn(e);
  return t <= r && n >= 0;
}, xp = (e) => typeof e == "function" || !1, _p = (e) => gi(e) && e.constructor.name === "NodeList" || !1, jn = (e) => pn(e).dir === "rtl", Cp = (e) => Xe(e) && ["TABLE", "TD", "TH"].includes(e.nodeName) || !1, nt = (e, t) => e ? e.closest(t) || // break out of `ShadowRoot`
nt(e.getRootNode().host, t) : null, qe = (e, t) => Le(e) ? e : (Xe(t) ? t : Pe()).querySelector(e), vo = (e, t) => (Xe(t) ? t : Pe()).getElementsByTagName(e), jt = (e, t) => (Xe(t) ? t : Pe()).querySelectorAll(e), ln = (e, t) => (t && Xe(t) ? t : Pe()).getElementsByClassName(
  e
), Mc = (e, t) => e.matches(t), Or = {}, $c = (e) => {
  const { type: t, currentTarget: n } = e;
  [...Or[t]].forEach(([r, i]) => {
    n === r && [...i].forEach(([a, o]) => {
      a.apply(r, [e]), typeof o == "object" && o.once && it(r, t, a, o);
    });
  });
}, rt = (e, t, n, r) => {
  Or[t] || (Or[t] = /* @__PURE__ */ new Map());
  const i = Or[t];
  i.has(e) || i.set(e, /* @__PURE__ */ new Map());
  const a = i.get(e), { size: o } = a;
  a.set(n, r), o || e.addEventListener(t, $c, r);
}, it = (e, t, n, r) => {
  const i = Or[t], a = i && i.get(e), o = a && a.get(n), c = o !== void 0 ? o : r;
  a && a.has(n) && a.delete(n), i && (!a || !a.size) && i.delete(e), (!i || !i.size) && delete Or[t], (!a || !a.size) && e.removeEventListener(
    t,
    $c,
    c
  );
}, at = "fade", _e = "show", As = "data-bs-dismiss", Ps = "alert", jc = "Alert", Tp = "5.0.11", Sp = Tp;
class Xt {
  /**
   * @param target `HTMLElement` or selector string
   * @param config component instance options
   */
  constructor(t, n) {
    oe(this, "_toggleEventListeners", () => {
    });
    const r = qe(t);
    if (!r)
      throw bi(t) ? Error(`${this.name} Error: "${t}" is not a valid selector.`) : Error(`${this.name} Error: your target is not an instance of HTMLElement.`);
    const i = Ir.get(r, this.name);
    i && i._toggleEventListeners(), this.element = r, this.options = this.defaults && Ql(this.defaults).length ? gp(r, this.defaults, n || {}, "bs") : {}, Ir.set(r, this.name, this);
  }
  /* istanbul ignore next */
  get version() {
    return Sp;
  }
  /* istanbul ignore next */
  get name() {
    return "BaseComponent";
  }
  /* istanbul ignore next */
  get defaults() {
    return {};
  }
  /** Removes component from target element. */
  dispose() {
    Ir.remove(this.element, this.name), Ql(this).forEach((t) => {
      delete this[t];
    });
  }
}
const Dp = `.${Ps}`, Ap = `[${As}="${Ps}"]`, Pp = (e) => pt(e, jc), kp = (e) => new Ln(e), tu = ke(`close.bs.${Ps}`), Rp = ke(`closed.bs.${Ps}`), nu = (e) => {
  const { element: t } = e;
  Ae(t, Rp), e._toggleEventListeners(), e.dispose(), t.remove();
};
class Ln extends Xt {
  constructor(t) {
    super(t), oe(this, "dismiss"), oe(this, "close", () => {
      const { element: n } = this;
      n && pe(n, _e) && (Ae(n, tu), tu.defaultPrevented || (Se(n, _e), pe(n, at) ? We(n, () => nu(this)) : nu(this)));
    }), oe(this, "_toggleEventListeners", (n) => {
      const r = n ? rt : it, { dismiss: i, close: a } = this;
      i && r(i, et, a);
    }), this.dismiss = qe(Ap, this.element), this._toggleEventListeners(!0);
  }
  /** Returns component name string. */
  get name() {
    return jc;
  }
  /** Remove the component from target element. */
  dispose() {
    this._toggleEventListeners(), super.dispose();
  }
}
oe(Ln, "selector", Dp), oe(Ln, "init", kp), oe(Ln, "getInstance", Pp);
const Oe = "active", nn = "data-bs-toggle", Lp = "button", Wc = "Button", Np = `[${nn}="${Lp}"]`, Ip = (e) => pt(e, Wc), Op = (e) => new Nn(e);
class Nn extends Xt {
  /**
   * @param target usually a `.btn` element
   */
  constructor(t) {
    super(t), oe(this, "isActive", !1), oe(this, "toggle", (r) => {
      r && r.preventDefault();
      const { element: i, isActive: a } = this;
      !pe(i, "disabled") && !tn(i, "disabled") && ((a ? Se : ve)(i, Oe), tt(i, Xl, a ? "false" : "true"), this.isActive = pe(i, Oe));
    }), oe(this, "_toggleEventListeners", (r) => {
      (r ? rt : it)(this.element, et, this.toggle);
    });
    const { element: n } = this;
    this.isActive = pe(n, Oe), tt(n, Xl, String(!!this.isActive)), this._toggleEventListeners(!0);
  }
  /**
   * Returns component name string.
   */
  get name() {
    return Wc;
  }
  /** Removes the `Button` component from the target element. */
  dispose() {
    this._toggleEventListeners(), super.dispose();
  }
}
oe(Nn, "selector", Np), oe(Nn, "init", Op), oe(Nn, "getInstance", Ip);
const ka = "data-bs-target", rr = "carousel", qc = "Carousel", ru = "data-bs-parent", Ep = "data-bs-container", Ct = (e) => {
  const t = [ka, ru, Ep, "href"], n = Pe(e);
  return t.map((r) => {
    const i = tn(e, r);
    return i ? r === ru ? nt(e, i) : qe(i, n) : null;
  }).filter((r) => r)[0];
}, wi = `[data-bs-ride="${rr}"]`, Ot = `${rr}-item`, Ra = "data-bs-slide-to", _n = "data-bs-slide", Sn = "paused", iu = {
  pause: "hover",
  keyboard: !1,
  touch: !0,
  interval: 5e3
}, vn = (e) => pt(e, qc), Bp = (e) => new In(e);
let si = 0, qi = 0, ca = 0;
const da = ke(`slide.bs.${rr}`), La = ke(`slid.bs.${rr}`), su = (e) => {
  const { index: t, direction: n, element: r, slides: i, options: a } = e;
  if (e.isAnimating) {
    const o = Na(e), c = n === "left" ? "next" : "prev", h = n === "left" ? "start" : "end";
    ve(i[t], Oe), Se(i[t], `${Ot}-${c}`), Se(i[t], `${Ot}-${h}`), Se(i[o], Oe), Se(i[o], `${Ot}-${h}`), Ae(r, La), xe.clear(r, _n), e.cycle && !Pe(r).hidden && a.interval && !e.isPaused && e.cycle();
  }
};
function Fp() {
  const e = vn(this);
  e && !e.isPaused && !xe.get(this, Sn) && ve(this, Sn);
}
function Hp() {
  const e = vn(this);
  e && e.isPaused && !xe.get(this, Sn) && e.cycle();
}
function Vp(e) {
  e.preventDefault();
  const t = nt(this, wi) || Ct(this), n = vn(t);
  if (n && !n.isAnimating) {
    const r = +(tn(this, Ra) || /* istanbul ignore next */
    0);
    this && !pe(this, Oe) && // event target is not active
    !Number.isNaN(r) && n.to(r);
  }
}
function Mp(e) {
  e.preventDefault();
  const t = nt(this, wi) || Ct(this), n = vn(t);
  if (n && !n.isAnimating) {
    const r = tn(this, _n);
    r === "next" ? n.next() : r === "prev" && n.prev();
  }
}
const $p = ({ code: e, target: t }) => {
  const n = Pe(t), [r] = [...jt(wi, n)].filter((a) => Vc(a)), i = vn(r);
  if (i && !i.isAnimating && !/textarea|input/i.test(t.nodeName)) {
    const a = jn(r);
    e === (a ? Ul : zl) ? i.prev() : e === (a ? zl : Ul) && i.next();
  }
};
function au(e) {
  const { target: t } = e, n = vn(this);
  n && n.isTouch && (n.indicator && !n.indicator.contains(t) || !n.controls.includes(t)) && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
}
function jp(e) {
  const { target: t } = e, n = vn(this);
  if (n && !n.isAnimating && !n.isTouch) {
    const { controls: r, indicators: i } = n;
    [...r, ...i].every((a) => a === t || a.contains(t)) || (si = e.pageX, this.contains(t) && (n.isTouch = !0, Gc(n, !0)));
  }
}
const Wp = (e) => {
  qi = e.pageX;
}, qp = (e) => {
  var t;
  const { target: n } = e, r = Pe(n), i = [...jt(wi, r)].map((a) => vn(a)).find((a) => a.isTouch);
  if (i) {
    const { element: a, index: o } = i, c = jn(a);
    ca = e.pageX, i.isTouch = !1, Gc(i), !((t = r.getSelection()) != null && t.toString().length) && a.contains(n) && Math.abs(si - ca) > 120 && (qi < si ? i.to(o + (c ? -1 : 1)) : qi > si && i.to(o + (c ? 1 : -1))), si = 0, qi = 0, ca = 0;
  }
}, fa = (e, t) => {
  const { indicators: n } = e;
  [...n].forEach((r) => Se(r, Oe)), e.indicators[t] && ve(n[t], Oe);
}, Gc = (e, t) => {
  const { element: n } = e, r = t ? rt : it;
  r(Pe(n), sp, Wp, Gt), r(Pe(n), ap, qp, Gt);
}, Na = (e) => {
  const { slides: t, element: n } = e, r = qe(`.${Ot}.${Oe}`, n);
  return Le(r) ? [...t].indexOf(r) : -1;
};
class In extends Xt {
  /**
   * @param target mostly a `.carousel` element
   * @param config instance options
   */
  constructor(t, n) {
    super(t, n), oe(this, "_toggleEventListeners", (a) => {
      const { element: o, options: c, slides: h, controls: m, indicators: g } = this, { touch: _, pause: w, interval: C, keyboard: k } = c, S = a ? rt : it;
      w && C && (S(o, Cs, Fp), S(o, co, Hp)), _ && h.length > 2 && (S(o, ip, jp, Gt), S(o, fo, au, { passive: !1 }), S(o, op, au, { passive: !1 })), m.length && m.forEach((v) => {
        v && S(v, et, Mp);
      }), g.length && g.forEach((v) => {
        S(v, et, Vp);
      }), k && S(Pe(o), _s, $p);
    });
    const { element: r } = this;
    this.direction = jn(r) ? "right" : "left", this.isTouch = !1, this.slides = ln(Ot, r);
    const { slides: i } = this;
    if (i.length >= 2) {
      const a = Na(this), o = [...i].find((m) => Mc(m, `.${Ot}-next,.${Ot}-next`));
      this.index = a;
      const c = Pe(r);
      this.controls = [
        ...jt(`[${_n}]`, r),
        ...jt(`[${_n}][${ka}="#${r.id}"]`, c)
      ].filter((m, g, _) => g === _.indexOf(m)), this.indicator = qe(`.${rr}-indicators`, r), this.indicators = [
        ...this.indicator ? jt(`[${Ra}]`, this.indicator) : [],
        ...jt(`[${Ra}][${ka}="#${r.id}"]`, c)
      ].filter((m, g, _) => g === _.indexOf(m));
      const { options: h } = this;
      this.options.interval = h.interval === !0 ? iu.interval : h.interval, o ? this.index = [...i].indexOf(o) : a < 0 && (this.index = 0, ve(i[0], Oe), this.indicators.length && fa(this, 0)), this.indicators.length && fa(this, this.index), this._toggleEventListeners(!0), h.interval && this.cycle();
    }
  }
  /**
   * Returns component name string.
   */
  get name() {
    return qc;
  }
  /**
   * Returns component default options.
   */
  get defaults() {
    return iu;
  }
  /**
   * Check if instance is paused.
   */
  get isPaused() {
    return pe(this.element, Sn);
  }
  /**
   * Check if instance is animating.
   */
  get isAnimating() {
    return qe(`.${Ot}-next,.${Ot}-prev`, this.element) !== null;
  }
  // CAROUSEL PUBLIC METHODS
  // =======================
  /** Slide automatically through items. */
  cycle() {
    const { element: t, options: n, isPaused: r, index: i } = this;
    xe.clear(t, rr), r && (xe.clear(t, Sn), Se(t, Sn)), xe.set(
      t,
      () => {
        this.element && !this.isPaused && !this.isTouch && Vc(t) && this.to(i + 1);
      },
      n.interval,
      rr
    );
  }
  /** Pause the automatic cycle. */
  pause() {
    const { element: t, options: n } = this;
    !this.isPaused && n.interval && (ve(t, Sn), xe.set(
      t,
      () => {
      },
      1,
      Sn
    ));
  }
  /** Slide to the next item. */
  next() {
    this.isAnimating || this.to(this.index + 1);
  }
  /** Slide to the previous item. */
  prev() {
    this.isAnimating || this.to(this.index - 1);
  }
  /**
   * Jump to the item with the `idx` index.
   *
   * @param idx the index of the item to jump to
   */
  to(t) {
    const { element: n, slides: r, options: i } = this, a = Na(this), o = jn(n);
    let c = t;
    if (!this.isAnimating && a !== c && !xe.get(n, _n)) {
      a < c || a === 0 && c === r.length - 1 ? this.direction = o ? "right" : "left" : (a > c || a === r.length - 1 && c === 0) && (this.direction = o ? "left" : "right");
      const { direction: h } = this;
      c < 0 ? c = r.length - 1 : c >= r.length && (c = 0);
      const m = h === "left" ? "next" : "prev", g = h === "left" ? "start" : "end", _ = {
        relatedTarget: r[c],
        from: a,
        to: c,
        direction: h
      };
      fn(da, _), fn(La, _), Ae(n, da), da.defaultPrevented || (this.index = c, fa(this, c), Hr(r[c]) && pe(n, "slide") ? xe.set(
        n,
        () => {
          ve(r[c], `${Ot}-${m}`), hr(r[c]), ve(r[c], `${Ot}-${g}`), ve(r[a], `${Ot}-${g}`), We(
            r[c],
            () => this.slides && this.slides.length && su(this)
          );
        },
        0,
        _n
      ) : (ve(r[c], Oe), Se(r[a], Oe), xe.set(
        n,
        () => {
          xe.clear(n, _n), n && i.interval && !this.isPaused && this.cycle(), Ae(n, La);
        },
        0,
        _n
      )));
    }
  }
  /** Remove `Carousel` component from target. */
  dispose() {
    const { isAnimating: t } = this, n = {
      ...this,
      isAnimating: t
    };
    this._toggleEventListeners(), super.dispose(), n.isAnimating && We(n.slides[n.index], () => {
      su(n);
    });
  }
}
oe(In, "selector", wi), oe(In, "init", Bp), oe(In, "getInstance", vn);
const lr = "collapsing", _t = "collapse", Xc = "Collapse", Gp = `.${_t}`, zc = `[${nn}="${_t}"]`, Xp = { parent: null }, ss = (e) => pt(e, Xc), zp = (e) => new On(e), ou = ke(`show.bs.${_t}`), Up = ke(`shown.bs.${_t}`), lu = ke(`hide.bs.${_t}`), Yp = ke(`hidden.bs.${_t}`), Kp = (e) => {
  const { element: t, parent: n, triggers: r } = e;
  Ae(t, ou), ou.defaultPrevented || (xe.set(t, ci, 17), n && xe.set(n, ci, 17), ve(t, lr), Se(t, _t), ze(t, { height: `${t.scrollHeight}px` }), We(t, () => {
    xe.clear(t), n && xe.clear(n), r.forEach((i) => tt(i, ts, "true")), Se(t, lr), ve(t, _t), ve(t, _e), ze(t, { height: "" }), Ae(t, Up);
  }));
}, uu = (e) => {
  const { element: t, parent: n, triggers: r } = e;
  Ae(t, lu), lu.defaultPrevented || (xe.set(t, ci, 17), n && xe.set(n, ci, 17), ze(t, { height: `${t.scrollHeight}px` }), Se(t, _t), Se(t, _e), ve(t, lr), hr(t), ze(t, { height: "0px" }), We(t, () => {
    xe.clear(t), n && xe.clear(n), r.forEach((i) => tt(i, ts, "false")), Se(t, lr), ve(t, _t), ze(t, { height: "" }), Ae(t, Yp);
  }));
}, Jp = (e) => {
  const { target: t } = e, n = t && nt(t, zc), r = n && Ct(n), i = r && ss(r);
  i && i.toggle(), n && n.tagName === "A" && e.preventDefault();
};
class On extends Xt {
  /**
   * @param target and `Element` that matches the selector
   * @param config instance options
   */
  constructor(t, n) {
    super(t, n), oe(this, "_toggleEventListeners", (o) => {
      const c = o ? rt : it, { triggers: h } = this;
      h.length && h.forEach((m) => c(m, et, Jp));
    });
    const { element: r, options: i } = this, a = Pe(r);
    this.triggers = [...jt(zc, a)].filter((o) => Ct(o) === r), this.parent = Le(i.parent) ? i.parent : bi(i.parent) ? Ct(r) || qe(i.parent, a) : null, this._toggleEventListeners(!0);
  }
  /**
   * Returns component name string.
   */
  get name() {
    return Xc;
  }
  /**
   * Returns component default options.
   */
  get defaults() {
    return Xp;
  }
  // COLLAPSE PUBLIC METHODS
  // =======================
  /** Hides the collapse. */
  hide() {
    const { triggers: t, element: n } = this;
    xe.get(n) || (uu(this), t.length && t.forEach((r) => ve(r, `${_t}d`)));
  }
  /** Shows the collapse. */
  show() {
    const { element: t, parent: n, triggers: r } = this;
    let i, a;
    n && (i = [...jt(`.${_t}.${_e}`, n)].find(
      (o) => ss(o)
    ), a = i && ss(i)), (!n || !xe.get(n)) && !xe.get(t) && (a && i !== t && (uu(a), a.triggers.forEach((o) => {
      ve(o, `${_t}d`);
    })), Kp(this), r.length && r.forEach((o) => Se(o, `${_t}d`)));
  }
  /** Toggles the visibility of the collapse. */
  toggle() {
    pe(this.element, _e) ? this.hide() : this.show();
  }
  /** Remove the `Collapse` component from the target `Element`. */
  dispose() {
    this._toggleEventListeners(), super.dispose();
  }
}
oe(On, "selector", Gp), oe(On, "init", zp), oe(On, "getInstance", ss);
const ur = ["dropdown", "dropup", "dropstart", "dropend"], Uc = "Dropdown", Yc = "dropdown-menu", Kc = (e) => {
  const t = nt(e, "A");
  return e.tagName === "A" && // anchor href starts with #
  is(e, "href") && tn(e, "href").slice(-1) === "#" || // OR a child of an anchor with href starts with #
  t && is(t, "href") && tn(t, "href").slice(-1) === "#";
}, [Wt, Ia, Oa, Ea] = ur, Jc = `[${nn}="${Wt}"]`, zr = (e) => pt(e, Uc), Qp = (e) => new En(e), Zp = `${Yc}-end`, cu = [Wt, Ia], du = [Oa, Ea], fu = ["A", "BUTTON"], ev = {
  offset: 5,
  // [number] 5(px)
  display: "dynamic"
  // [dynamic|static]
}, ha = ke(`show.bs.${Wt}`), hu = ke(`shown.bs.${Wt}`), pa = ke(`hide.bs.${Wt}`), pu = ke(`hidden.bs.${Wt}`), Qc = ke(`updated.bs.${Wt}`), Zc = (e) => {
  const { element: t, menu: n, parentElement: r, options: i } = e, { offset: a } = i;
  if (xt(n, "position") !== "static") {
    const o = jn(t), c = pe(n, Zp);
    ["margin", "top", "bottom", "left", "right"].forEach((ne) => {
      const F = {};
      F[ne] = "", ze(n, F);
    });
    let h = ur.find((ne) => pe(r, ne)) || /* istanbul ignore next: fallback position */
    Wt;
    const m = {
      dropdown: [a, 0, 0],
      dropup: [0, 0, a],
      dropstart: o ? [-1, 0, 0, a] : [-1, a, 0],
      dropend: o ? [-1, a, 0] : [-1, 0, 0, a]
    }, g = {
      dropdown: { top: "100%" },
      dropup: { top: "auto", bottom: "100%" },
      dropstart: o ? { left: "100%", right: "auto" } : { left: "auto", right: "100%" },
      dropend: o ? { left: "auto", right: "100%" } : { left: "100%", right: "auto" },
      menuStart: o ? { right: "0", left: "auto" } : { right: "auto", left: "0" },
      menuEnd: o ? { right: "auto", left: "0" } : { right: "0", left: "auto" }
    }, { offsetWidth: _, offsetHeight: w } = n, { clientWidth: C, clientHeight: k } = pn(t), {
      left: S,
      top: v,
      width: l,
      height: d
    } = yi(t), y = S - _ - a < 0, P = S + _ + l + a >= C, N = v + w + a >= k, p = v + w + d + a >= k, M = v - w - a < 0, U = (!o && c || o && !c) && S + l - _ < 0, q = (o && c || !o && !c) && S + _ >= C;
    if (du.includes(h) && y && P && (h = Wt), h === Oa && (o ? P : y) && (h = Ea), h === Ea && (o ? y : P) && (h = Oa), h === Ia && M && !p && (h = Wt), h === Wt && p && !M && (h = Ia), du.includes(h) && N && fn(g[h], {
      top: "auto",
      bottom: 0
    }), cu.includes(h) && (U || q)) {
      let ne = { left: "auto", right: "auto" };
      !U && q && !o && (ne = { left: "auto", right: 0 }), U && !q && o && (ne = { left: 0, right: "auto" }), ne && fn(g[h], ne);
    }
    const z = m[h];
    ze(n, {
      ...g[h],
      margin: `${z.map((ne) => ne && `${ne}px`).join(" ")}`
    }), cu.includes(h) && c && c && ze(n, g[!o && U || o && q ? "menuStart" : (
      /* istanbul ignore next */
      "menuEnd"
    )]), Ae(r, Qc);
  }
}, tv = (e) => [...e.children].map((t) => {
  if (t && fu.includes(t.tagName))
    return t;
  const { firstElementChild: n } = t;
  return n && fu.includes(n.tagName) ? n : null;
}).filter((t) => t), vu = (e) => {
  const { element: t, options: n } = e, r = e.open ? rt : it, i = Pe(t);
  r(i, et, mu), r(i, lo, mu), r(i, _s, rv), r(i, np, iv), n.display === "dynamic" && [Ss, Ts].forEach((a) => {
    r(Xr(t), a, sv, Gt);
  });
}, ks = (e) => {
  const t = [...ur, "btn-group", "input-group"].map((n) => ln(`${n} ${_e}`, Pe(e))).find((n) => n.length);
  if (t && t.length)
    return [...t[0].children].find(
      (n) => ur.some((r) => r === tn(n, nn))
    );
}, mu = (e) => {
  const { target: t, type: n } = e;
  if (t && Le(t)) {
    const r = ks(t), i = r && zr(r);
    if (i) {
      const { parentElement: a, menu: o } = i, c = a && a.contains(t) && (t.tagName === "form" || nt(t, "form") !== null);
      [et, Oc].includes(n) && Kc(t) && e.preventDefault(), !c && n !== lo && t !== r && t !== o && i.hide();
    }
  }
}, nv = (e) => {
  const { target: t } = e, n = t && nt(t, Jc), r = n && zr(n);
  r && (e.stopPropagation(), r.toggle(), n && Kc(n) && e.preventDefault());
}, rv = (e) => {
  [Da, Aa].includes(e.code) && e.preventDefault();
};
function iv(e) {
  const { code: t } = e, n = ks(this), r = n && zr(n), { activeElement: i } = n && Pe(n);
  if (r && i) {
    const { menu: a, open: o } = r, c = tv(a);
    if (c && c.length && [Da, Aa].includes(t)) {
      let h = c.indexOf(i);
      i === n ? h = 0 : t === Aa ? h = h > 1 ? h - 1 : 0 : t === Da && (h = h < c.length - 1 ? h + 1 : h), c[h] && hn(c[h]);
    }
    ho === t && o && (r.toggle(), hn(n));
  }
}
function sv() {
  const e = ks(this), t = e && zr(e);
  t && t.open && Zc(t);
}
class En extends Xt {
  /**
   * @param target Element or string selector
   * @param config the instance options
   */
  constructor(t, n) {
    super(t, n), oe(this, "_toggleEventListeners", (a) => {
      (a ? rt : it)(this.element, et, nv);
    });
    const { parentElement: r } = this.element, [i] = ln(Yc, r);
    i && (this.parentElement = r, this.menu = i, this._toggleEventListeners(!0));
  }
  /**
   * Returns component name string.
   */
  get name() {
    return Uc;
  }
  /**
   * Returns component default options.
   */
  get defaults() {
    return ev;
  }
  // DROPDOWN PUBLIC METHODS
  // =======================
  /** Shows/hides the dropdown menu to the user. */
  toggle() {
    this.open ? this.hide() : this.show();
  }
  /** Shows the dropdown menu to the user. */
  show() {
    const { element: t, open: n, menu: r, parentElement: i } = this;
    if (!n) {
      const a = ks(t), o = a && zr(a);
      o && o.hide(), [ha, hu, Qc].forEach((c) => {
        c.relatedTarget = t;
      }), Ae(i, ha), ha.defaultPrevented || (ve(r, _e), ve(i, _e), tt(t, ts, "true"), Zc(this), this.open = !n, hn(t), vu(this), Ae(i, hu));
    }
  }
  /** Hides the dropdown menu from the user. */
  hide() {
    const { element: t, open: n, menu: r, parentElement: i } = this;
    n && ([pa, pu].forEach((a) => {
      a.relatedTarget = t;
    }), Ae(i, pa), pa.defaultPrevented || (Se(r, _e), Se(i, _e), tt(t, ts, "false"), this.open = !n, vu(this), Ae(i, pu)));
  }
  /** Removes the `Dropdown` component from the target element. */
  dispose() {
    this.open && this.hide(), this._toggleEventListeners(), super.dispose();
  }
}
oe(En, "selector", Jc), oe(En, "init", Qp), oe(En, "getInstance", zr);
const Rt = "modal", mo = "Modal", go = "Offcanvas", av = "fixed-top", ov = "fixed-bottom", ed = "sticky-top", td = "position-sticky", nd = (e) => [
  ...ln(av, e),
  ...ln(ov, e),
  ...ln(ed, e),
  ...ln(td, e),
  ...ln("is-fixed", e)
], lv = (e) => {
  const t = qn(e);
  ze(t, {
    paddingRight: "",
    overflow: ""
  });
  const n = nd(t);
  n.length && n.forEach((r) => {
    ze(r, {
      paddingRight: "",
      marginRight: ""
    });
  });
}, rd = (e) => {
  const { clientWidth: t } = pn(e), { innerWidth: n } = Xr(e);
  return Math.abs(n - t);
}, id = (e, t) => {
  const n = qn(e), r = parseInt(xt(n, "paddingRight"), 10), i = xt(n, "overflow") === "hidden" && r ? 0 : rd(e), a = nd(n);
  t && (ze(n, {
    overflow: "hidden",
    paddingRight: `${r + i}px`
  }), a.length && a.forEach((o) => {
    const c = xt(o, "paddingRight");
    if (o.style.paddingRight = `${parseInt(c, 10) + i}px`, [ed, td].some((h) => pe(o, h))) {
      const h = xt(o, "marginRight");
      o.style.marginRight = `${parseInt(h, 10) - i}px`;
    }
  }));
}, Bt = "offcanvas", kn = Tn({ tagName: "div", className: "popup-container" }), sd = (e, t) => {
  const n = Xe(t) && t.nodeName === "BODY", r = Xe(t) && !n ? t : kn, i = n ? t : qn(e);
  Xe(e) && (r === kn && i.append(kn), r.append(e));
}, ad = (e, t) => {
  const n = Xe(t) && t.nodeName === "BODY", r = Xe(t) && !n ? t : kn;
  Xe(e) && (e.remove(), r === kn && !kn.children.length && kn.remove());
}, bo = (e, t) => {
  const n = Xe(t) && t.nodeName !== "BODY" ? t : kn;
  return Xe(e) && n.contains(e);
}, od = "backdrop", gu = `${Rt}-${od}`, bu = `${Bt}-${od}`, ld = `.${Rt}.${_e}`, yo = `.${Bt}.${_e}`, Ge = Tn("div"), pr = (e) => qe(`${ld},${yo}`, Pe(e)), wo = (e) => {
  const t = e ? gu : bu;
  [gu, bu].forEach((n) => {
    Se(Ge, n);
  }), ve(Ge, t);
}, ud = (e, t, n) => {
  wo(n), sd(Ge, qn(e)), t && ve(Ge, at);
}, cd = () => {
  pe(Ge, _e) || (ve(Ge, _e), hr(Ge));
}, Rs = () => {
  Se(Ge, _e);
}, dd = (e) => {
  pr(e) || (Se(Ge, at), ad(Ge, qn(e)), lv(e));
}, fd = (e) => Le(e) && xt(e, "visibility") !== "hidden" && e.offsetParent !== null, uv = `.${Rt}`, hd = `[${nn}="${Rt}"]`, cv = `[${As}="${Rt}"]`, pd = `${Rt}-static`, dv = {
  backdrop: !0,
  keyboard: !0
}, xi = (e) => pt(e, mo), fv = (e) => new Bn(e), Gi = ke(`show.bs.${Rt}`), yu = ke(`shown.bs.${Rt}`), va = ke(`hide.bs.${Rt}`), wu = ke(`hidden.bs.${Rt}`), vd = (e) => {
  const { element: t } = e, n = rd(t), { clientHeight: r, scrollHeight: i } = pn(t), { clientHeight: a, scrollHeight: o } = t, c = a !== o;
  if (!c && n) {
    const h = jn(t) ? (
      /* istanbul ignore next */
      "paddingLeft"
    ) : "paddingRight", m = {};
    m[h] = `${n}px`, ze(t, m);
  }
  id(t, c || r !== i);
}, md = (e, t) => {
  const n = t ? rt : it, { element: r, update: i } = e;
  n(r, et, vv), n(Xr(r), Ts, i, Gt), n(Pe(r), _s, pv);
}, xu = (e) => {
  const { triggers: t, element: n, relatedTarget: r } = e;
  dd(n), ze(n, { paddingRight: "", display: "" }), md(e);
  const i = Gi.relatedTarget || t.find(fd);
  i && hn(i), wu.relatedTarget = r, Ae(n, wu);
}, _u = (e) => {
  const { element: t, relatedTarget: n } = e;
  hn(t), md(e, !0), yu.relatedTarget = n, Ae(t, yu);
}, Cu = (e) => {
  const { element: t, hasFade: n } = e;
  ze(t, { display: "block" }), vd(e), pr(t) || ze(qn(t), { overflow: "hidden" }), ve(t, _e), or(t, ws), tt(t, xs, "true"), n ? We(t, () => _u(e)) : _u(e);
}, Tu = (e) => {
  const { element: t, options: n, hasFade: r } = e;
  n.backdrop && r && pe(Ge, _e) && !pr(t) ? (Rs(), We(Ge, () => xu(e))) : xu(e);
}, hv = (e) => {
  const { target: t } = e, n = t && nt(t, hd), r = n && Ct(n), i = r && xi(r);
  i && (n && n.tagName === "A" && e.preventDefault(), i.relatedTarget = n, i.toggle());
}, pv = ({ code: e, target: t }) => {
  const n = qe(ld, Pe(t)), r = n && xi(n);
  if (r) {
    const { options: i } = r;
    i.keyboard && e === ho && // the keyboard option is enabled and the key is 27
    pe(n, _e) && (r.relatedTarget = null, r.hide());
  }
}, vv = (e) => {
  var t, n;
  const { currentTarget: r } = e, i = r ? xi(r) : null;
  if (i && r && !xe.get(r)) {
    const { options: a, isStatic: o, modalDialog: c } = i, { backdrop: h } = a, { target: m } = e, g = (n = (t = Pe(r)) == null ? void 0 : t.getSelection()) == null ? void 0 : n.toString().length, _ = c.contains(m), w = m && nt(m, cv);
    o && !_ ? xe.set(
      r,
      () => {
        ve(r, pd), We(c, () => mv(i));
      },
      17
    ) : (w || !g && !o && !_ && h) && (i.relatedTarget = w || null, i.hide(), e.preventDefault());
  }
}, mv = (e) => {
  const { element: t, modalDialog: n } = e, r = (Hr(n) || 0) + 17;
  Se(t, pd), xe.set(t, () => xe.clear(t), r);
};
class Bn extends Xt {
  /**
   * @param target usually the `.modal` element
   * @param config instance options
   */
  constructor(t, n) {
    super(t, n), oe(this, "update", () => {
      pe(this.element, _e) && vd(this);
    }), oe(this, "_toggleEventListeners", (a) => {
      const o = a ? rt : it, { triggers: c } = this;
      c.length && c.forEach((h) => o(h, et, hv));
    });
    const { element: r } = this, i = qe(`.${Rt}-dialog`, r);
    i && (this.modalDialog = i, this.triggers = [...jt(hd, Pe(r))].filter(
      (a) => Ct(a) === r
    ), this.isStatic = this.options.backdrop === "static", this.hasFade = pe(r, at), this.relatedTarget = null, this._toggleEventListeners(!0));
  }
  /**
   * Returns component name string.
   */
  get name() {
    return mo;
  }
  /**
   * Returns component default options.
   */
  get defaults() {
    return dv;
  }
  // MODAL PUBLIC METHODS
  // ====================
  /** Toggles the visibility of the modal. */
  toggle() {
    pe(this.element, _e) ? this.hide() : this.show();
  }
  /** Shows the modal to the user. */
  show() {
    const { element: t, options: n, hasFade: r, relatedTarget: i } = this, { backdrop: a } = n;
    let o = 0;
    if (!pe(t, _e) && (Gi.relatedTarget = i || void 0, Ae(t, Gi), !Gi.defaultPrevented)) {
      const c = pr(t);
      if (c && c !== t) {
        const h = xi(c) || /* istanbul ignore next */
        pt(c, go);
        h && h.hide();
      }
      a ? (bo(Ge) ? wo(!0) : ud(t, r, !0), o = Hr(Ge), cd(), setTimeout(() => Cu(this), o)) : (Cu(this), c && pe(Ge, _e) && Rs());
    }
  }
  /** Hide the modal from the user. */
  hide() {
    const { element: t, hasFade: n, relatedTarget: r } = this;
    pe(t, _e) && (va.relatedTarget = r || void 0, Ae(t, va), va.defaultPrevented || (Se(t, _e), tt(t, ws, "true"), or(t, xs), n ? We(t, () => Tu(this)) : Tu(this)));
  }
  /** Removes the `Modal` component from target element. */
  dispose() {
    const t = { ...this }, { element: n, modalDialog: r } = t, i = () => super.dispose();
    this._toggleEventListeners(), this.hide(), pe(n, "fade") ? We(r, i) : i();
  }
}
oe(Bn, "selector", uv), oe(Bn, "init", fv), oe(Bn, "getInstance", xi);
const gv = `.${Bt}`, xo = `[${nn}="${Bt}"]`, bv = `[${As}="${Bt}"]`, Ls = `${Bt}-toggling`, yv = {
  backdrop: !0,
  // boolean
  keyboard: !0,
  // boolean
  scroll: !1
  // boolean
}, _i = (e) => pt(e, go), wv = (e) => new Fn(e), Xi = ke(`show.bs.${Bt}`), gd = ke(`shown.bs.${Bt}`), ma = ke(`hide.bs.${Bt}`), bd = ke(`hidden.bs.${Bt}`), xv = (e) => {
  const { element: t } = e, { clientHeight: n, scrollHeight: r } = pn(t);
  id(t, n !== r);
}, yd = (e, t) => {
  const n = t ? rt : it, r = Pe(e.element);
  n(r, _s, Sv), n(r, et, Tv);
}, Su = (e) => {
  const { element: t, options: n } = e;
  n.scroll || (xv(e), ze(qn(t), { overflow: "hidden" })), ve(t, Ls), ve(t, _e), ze(t, { visibility: "visible" }), We(t, () => Dv(e));
}, _v = (e) => {
  const { element: t, options: n } = e, r = pr(t);
  t.blur(), !r && n.backdrop && pe(Ge, _e) && Rs(), We(t, () => Av(e));
}, Cv = (e) => {
  const t = nt(e.target, xo), n = t && Ct(t), r = n && _i(n);
  r && (r.relatedTarget = t, r.toggle(), t && t.tagName === "A" && e.preventDefault());
}, Tv = (e) => {
  const { target: t } = e, n = qe(yo, Pe(t)), r = qe(bv, n), i = n && _i(n);
  if (i) {
    const { options: a, triggers: o } = i, { backdrop: c } = a, h = nt(t, xo), m = Pe(n).getSelection();
    (!Ge.contains(t) || c !== "static") && (!(m && m.toString().length) && (!n.contains(t) && c && /* istanbul ignore next */
    (!h || o.includes(t)) || r && r.contains(t)) && (i.relatedTarget = r && r.contains(t) ? r : null, i.hide()), h && h.tagName === "A" && e.preventDefault());
  }
}, Sv = ({ code: e, target: t }) => {
  const n = qe(yo, Pe(t)), r = n && _i(n);
  r && r.options.keyboard && e === ho && (r.relatedTarget = null, r.hide());
}, Dv = (e) => {
  const { element: t } = e;
  Se(t, Ls), or(t, ws), tt(t, xs, "true"), tt(t, "role", "dialog"), Ae(t, gd), yd(e, !0), hn(t);
}, Av = (e) => {
  const { element: t, triggers: n } = e;
  tt(t, ws, "true"), or(t, xs), or(t, "role"), ze(t, { visibility: "" });
  const r = Xi.relatedTarget || n.find(fd);
  r && hn(r), dd(t), Ae(t, bd), Se(t, Ls), pr(t) || yd(e);
};
class Fn extends Xt {
  /**
   * @param target usually an `.offcanvas` element
   * @param config instance options
   */
  constructor(t, n) {
    super(t, n), oe(this, "_toggleEventListeners", (i) => {
      const a = i ? rt : it;
      this.triggers.forEach((o) => a(o, et, Cv));
    });
    const { element: r } = this;
    this.triggers = [...jt(xo, Pe(r))].filter(
      (i) => Ct(i) === r
    ), this.relatedTarget = null, this._toggleEventListeners(!0);
  }
  /**
   * Returns component name string.
   */
  get name() {
    return go;
  }
  /**
   * Returns component default options.
   */
  get defaults() {
    return yv;
  }
  // OFFCANVAS PUBLIC METHODS
  // ========================
  /** Shows or hides the offcanvas from the user. */
  toggle() {
    pe(this.element, _e) ? this.hide() : this.show();
  }
  /** Shows the offcanvas to the user. */
  show() {
    const { element: t, options: n, relatedTarget: r } = this;
    let i = 0;
    if (!pe(t, _e) && (Xi.relatedTarget = r || void 0, gd.relatedTarget = r || void 0, Ae(t, Xi), !Xi.defaultPrevented)) {
      const a = pr(t);
      if (a && a !== t) {
        const o = _i(a) || /* istanbul ignore next */
        pt(a, mo);
        o && o.hide();
      }
      n.backdrop ? (bo(Ge) ? wo() : ud(t, !0), i = Hr(Ge), cd(), setTimeout(() => Su(this), i)) : (Su(this), a && pe(Ge, _e) && Rs());
    }
  }
  /** Hides the offcanvas from the user. */
  hide() {
    const { element: t, relatedTarget: n } = this;
    pe(t, _e) && (ma.relatedTarget = n || void 0, bd.relatedTarget = n || void 0, Ae(t, ma), ma.defaultPrevented || (ve(t, Ls), Se(t, _e), _v(this)));
  }
  /** Removes the `Offcanvas` from the target element. */
  dispose() {
    const t = { ...this }, { element: n, options: r } = t, i = r.backdrop ? Hr(Ge) : (
      /* istanbul ignore next */
      0
    ), a = () => setTimeout(() => super.dispose(), i + 17);
    this._toggleEventListeners(), this.hide(), pe(n, _e) ? We(n, a) : a();
  }
}
oe(Fn, "selector", gv), oe(Fn, "init", wv), oe(Fn, "getInstance", _i);
const ir = "popover", Ns = "Popover", cn = "tooltip", wd = (e) => {
  const t = e === cn, n = t ? `${e}-inner` : `${e}-body`, r = t ? "" : `<h3 class="${e}-header"></h3>`, i = `<div class="${e}-arrow"></div>`, a = `<div class="${n}"></div>`;
  return `<div class="${e}" role="${cn}">${r + i + a}</div>`;
}, xd = {
  top: "top",
  bottom: "bottom",
  left: "start",
  right: "end"
}, _o = (e) => {
  const t = /\b(top|bottom|start|end)+/, { element: n, tooltip: r, container: i, options: a, arrow: o } = e;
  if (r) {
    const c = { ...xd }, h = jn(n);
    ze(r, {
      // top: '0px', left: '0px', right: '', bottom: '',
      top: "",
      left: "",
      right: "",
      bottom: ""
    });
    const m = e.name === Ns, { offsetWidth: g, offsetHeight: _ } = r, { clientWidth: w, clientHeight: C, offsetWidth: k } = pn(n);
    let { placement: S } = a;
    const { clientWidth: v, offsetWidth: l } = i, d = xt(i, "position") === "fixed", y = Math.abs(d ? v - l : w - k), P = h && d ? (
      /* istanbul ignore next */
      y
    ) : 0, N = w - (h ? 0 : y) - 1, {
      width: p,
      height: M,
      left: U,
      right: q,
      top: z
    } = yi(n, !0), { x: ne, y: F } = {
      x: U,
      y: z
    };
    ze(o, {
      top: "",
      left: "",
      right: "",
      bottom: ""
    });
    let D = 0, A = "", R = 0, E = "", V = "", j = "", X = "";
    const Z = o.offsetWidth || 0, Q = o.offsetHeight || 0, ee = Z / 2;
    let te = z - _ - Q < 0, ie = z + _ + M + Q >= C, le = U - g - Z < P, ae = U + g + p + Z >= N;
    const ue = ["left", "right"], be = ["top", "bottom"];
    te = ue.includes(S) ? z + M / 2 - _ / 2 - Q < 0 : te, ie = ue.includes(S) ? z + _ / 2 + M / 2 + Q >= C : ie, le = be.includes(S) ? U + p / 2 - g / 2 < P : le, ae = be.includes(S) ? U + g / 2 + p / 2 >= N : ae, S = ue.includes(S) && le && ae ? "top" : S, S = S === "top" && te ? "bottom" : S, S = S === "bottom" && ie ? "top" : S, S = S === "left" && le ? "right" : S, S = S === "right" && ae ? (
      /* istanbul ignore next */
      "left"
    ) : S, r.className.includes(S) || (r.className = r.className.replace(t, c[S])), ue.includes(S) ? (S === "left" ? R = ne - g - (m ? Z : 0) : R = ne + p + (m ? Z : 0), te && ie ? (D = 0, A = 0, V = z + M / 2 - Q / 2) : te ? (D = F, A = "", V = M / 2 - Z) : ie ? (D = F - _ + M, A = "", V = _ - M / 2 - Z) : (D = F - _ / 2 + M / 2, V = _ / 2 - Q / 2)) : be.includes(S) && (S === "top" ? D = F - _ - (m ? Q : 0) : D = F + M + (m ? Q : 0), le ? (R = 0, j = ne + p / 2 - ee) : ae ? (R = "auto", E = 0, X = p / 2 + N - q - ee) : (R = ne - g / 2 + p / 2, j = g / 2 - ee)), ze(r, {
      top: `${D}px`,
      bottom: A === "" ? "" : `${A}px`,
      left: R === "auto" ? R : `${R}px`,
      right: E !== "" ? `${E}px` : ""
    }), Le(o) && (V !== "" && (o.style.top = `${V}px`), j !== "" ? o.style.left = `${j}px` : X !== "" && (o.style.right = `${X}px`));
    const Me = ke(`updated.bs.${Vr(e.name)}`);
    Ae(n, Me);
  }
}, Ba = {
  template: wd(cn),
  title: "",
  customClass: "",
  trigger: "hover focus",
  placement: "top",
  sanitizeFn: void 0,
  animation: !0,
  delay: 200,
  container: document.body,
  content: "",
  dismissible: !1,
  btnClose: ""
}, _d = "data-original-title", tr = "Tooltip", xn = (e, t, n) => {
  if (bi(t) && t.length) {
    let r = t.trim();
    xp(n) && (r = n(r));
    const i = new DOMParser().parseFromString(r, "text/html");
    e.append(...i.body.childNodes);
  } else
    Le(t) ? e.append(t) : (_p(t) || wp(t) && t.every(Xe)) && e.append(...t);
}, Pv = (e) => {
  const t = e.name === tr, { id: n, element: r, options: i } = e, { title: a, placement: o, template: c, animation: h, customClass: m, sanitizeFn: g, dismissible: _, content: w, btnClose: C } = i, k = t ? cn : ir, S = { ...xd };
  let v = [], l = [];
  jn(r) && (S.left = "end", S.right = "start");
  const d = `bs-${k}-${S[o]}`;
  let y;
  if (Le(c))
    y = c;
  else {
    const N = Tn("div");
    xn(N, c, g), y = N.firstChild;
  }
  e.tooltip = Le(y) ? y.cloneNode(!0) : (
    /* istanbul ignore next */
    void 0
  );
  const { tooltip: P } = e;
  if (P) {
    tt(P, "id", n), tt(P, "role", cn);
    const N = t ? `${cn}-inner` : `${ir}-body`, p = t ? null : qe(`.${ir}-header`, P), M = qe(`.${N}`, P);
    e.arrow = qe(`.${k}-arrow`, P);
    const { arrow: U } = e;
    if (Le(a))
      v = [a.cloneNode(!0)];
    else {
      const q = Tn("div");
      xn(q, a, g), v = [...q.childNodes];
    }
    if (Le(w))
      l = [w.cloneNode(!0)];
    else {
      const q = Tn("div");
      xn(q, w, g), l = [...q.childNodes];
    }
    if (_)
      if (a)
        if (Le(C))
          v = [...v, C.cloneNode(!0)];
        else {
          const q = Tn("div");
          xn(q, C, g), v = [...v, q.firstChild];
        }
      else if (p && p.remove(), Le(C))
        l = [...l, C.cloneNode(!0)];
      else {
        const q = Tn("div");
        xn(q, C, g), l = [...l, q.firstChild];
      }
    t ? a && M && xn(M, a, g) : (a && p && xn(p, v, g), w && M && xn(M, l, g), e.btn = qe(".btn-close", P) || void 0), ve(P, "position-fixed"), ve(U, "position-absolute"), pe(P, k) || ve(P, k), h && !pe(P, at) && ve(P, at), m && !pe(P, m) && ve(P, m), pe(P, d) || ve(P, d);
  }
}, kv = (e) => {
  const t = ["HTML", "BODY"], n = [];
  let { parentNode: r } = e;
  for (; r && !t.includes(r.nodeName); )
    r = yp(r), Fc(r) || Cp(r) || n.push(r);
  return n.find((i, a) => xt(i, "position") !== "relative" && n.slice(a + 1).every((o) => xt(o, "position") === "static") ? i : null) || /* istanbul ignore next: optional guard */
  Pe(e).body;
}, Rv = `[${nn}="${cn}"],[data-tip="${cn}"]`, Cd = "title";
let Td = (e) => pt(e, tr);
const Lv = (e) => new Qt(e), Nv = (e) => {
  const { element: t, tooltip: n, container: r, offsetParent: i } = e;
  or(t, Nc), ad(n, r === i ? r : i);
}, ri = (e) => {
  const { tooltip: t, container: n, offsetParent: r } = e;
  return t && bo(t, n === r ? n : r);
}, Iv = (e, t) => {
  const { element: n } = e;
  e._toggleEventListeners(), is(n, _d) && e.name === tr && Dd(e), t && t();
}, Sd = (e, t) => {
  const n = t ? rt : it, { element: r } = e;
  n(Pe(r), fo, e.handleTouch, Gt), [Ss, Ts].forEach((i) => {
    n(Xr(r), i, e.update, Gt);
  });
}, Du = (e) => {
  const { element: t } = e, n = ke(`shown.bs.${Vr(e.name)}`);
  Sd(e, !0), Ae(t, n), xe.clear(t, "in");
}, Au = (e) => {
  const { element: t } = e, n = ke(`hidden.bs.${Vr(e.name)}`);
  Sd(e), Nv(e), Ae(t, n), xe.clear(t, "out");
}, Pu = (e, t) => {
  const n = t ? rt : it, { element: r, container: i, offsetParent: a } = e, { offsetHeight: o, scrollHeight: c } = i, h = nt(r, `.${Rt}`), m = nt(r, `.${Bt}`), g = Xr(r), _ = i === a && o !== c ? i : g;
  n(_, Ts, e.update, Gt), n(_, Ss, e.update, Gt), h && n(h, `hide.bs.${Rt}`, e.handleHide), m && n(m, `hide.bs.${Bt}`, e.handleHide);
}, Dd = (e, t) => {
  const n = [_d, Cd], { element: r } = e;
  tt(
    r,
    n[t ? 0 : 1],
    t || tn(r, n[0]) || /* istanbul ignore next */
    ""
  ), or(r, n[t ? 1 : 0]);
};
class Qt extends Xt {
  /**
   * @param target the target element
   * @param config the instance options
   */
  constructor(t, n) {
    super(t, n), oe(this, "handleFocus", () => hn(this.element)), oe(this, "handleShow", () => this.show()), oe(this, "handleHide", () => this.hide()), oe(this, "update", () => {
      _o(this);
    }), oe(this, "toggle", () => {
      const { tooltip: h } = this;
      h && !ri(this) ? this.show() : this.hide();
    }), oe(this, "handleTouch", ({ target: h }) => {
      const { tooltip: m, element: g } = this;
      m && m.contains(h) || h === g || h && g.contains(h) || this.hide();
    }), oe(this, "_toggleEventListeners", (h) => {
      const m = h ? rt : it, { element: g, options: _, btn: w } = this, { trigger: C } = _, k = !!(this.name !== tr && _.dismissible);
      C.includes("manual") || (this.enabled = !!h, C.split(" ").forEach((S) => {
        S === rp ? (m(g, Oc, this.handleShow), m(g, Cs, this.handleShow), k || (m(g, co, this.handleHide), m(Pe(g), fo, this.handleTouch, Gt))) : S === et ? m(g, S, k ? this.handleShow : this.toggle) : S === lo && (m(g, uo, this.handleShow), k || m(g, Ic, this.handleHide), fp && m(g, et, this.handleFocus)), k && w && m(w, et, this.handleHide);
      }));
    });
    const { element: r } = this, i = this.name === tr, a = i ? cn : ir, o = i ? tr : Ns;
    Td = (h) => pt(h, o), this.enabled = !0, this.id = `${a}-${Hc(r, a)}`;
    const { options: c } = this;
    !c.title && i || !i && !c.content || (fn(Ba, { titleAttr: "" }), is(r, Cd) && i && typeof c.title == "string" && Dd(this, c.title), this.container = kv(r), this.offsetParent = ["sticky", "fixed"].some(
      (h) => xt(this.container, "position") === h
    ) ? this.container : Pe(this.element).body, Pv(this), this._toggleEventListeners(!0));
  }
  /**
   * Returns component name string.
   */
  get name() {
    return tr;
  }
  /**
   * Returns component default options.
   */
  get defaults() {
    return Ba;
  }
  show() {
    const { options: t, tooltip: n, element: r, container: i, offsetParent: a, id: o } = this, { animation: c } = t, h = xe.get(r, "out"), m = i === a ? i : a;
    xe.clear(r, "out"), n && !h && !ri(this) && xe.set(
      r,
      () => {
        const g = ke(`show.bs.${Vr(this.name)}`);
        Ae(r, g), g.defaultPrevented || (sd(n, m), tt(r, Nc, `#${o}`), this.update(), Pu(this, !0), pe(n, _e) || ve(n, _e), c ? We(n, () => Du(this)) : Du(this));
      },
      17,
      "in"
    );
  }
  hide() {
    const { options: t, tooltip: n, element: r } = this, { animation: i, delay: a } = t;
    xe.clear(r, "in"), n && ri(this) && xe.set(
      r,
      () => {
        const o = ke(`hide.bs.${Vr(this.name)}`);
        Ae(r, o), o.defaultPrevented || (this.update(), Se(n, _e), Pu(this), i ? We(n, () => Au(this)) : Au(this));
      },
      a + 17,
      "out"
    );
  }
  /** Enables the tooltip. */
  enable() {
    const { enabled: t } = this;
    t || (this._toggleEventListeners(!0), this.enabled = !t);
  }
  /** Disables the tooltip. */
  disable() {
    const { tooltip: t, options: n, enabled: r } = this, { animation: i } = n;
    r && (t && ri(this) && i ? (this.hide(), We(t, () => this._toggleEventListeners())) : this._toggleEventListeners(), this.enabled = !r);
  }
  /** Toggles the `disabled` property. */
  toggleEnabled() {
    this.enabled ? this.disable() : this.enable();
  }
  /** Removes the `Tooltip` from the target element. */
  dispose() {
    const { tooltip: t, options: n } = this, r = { ...this, name: this.name }, i = () => setTimeout(() => Iv(r, () => super.dispose()), 17);
    n.animation && ri(r) ? (this.options.delay = 0, this.hide(), We(t, i)) : i();
  }
}
oe(Qt, "selector", Rv), oe(Qt, "init", Lv), oe(Qt, "getInstance", Td), oe(Qt, "styleTip", _o);
const Ov = `[${nn}="${ir}"],[data-tip="${ir}"]`, Ev = fn({}, Ba, {
  template: wd(ir),
  content: "",
  dismissible: !1,
  btnClose: '<button class="btn-close" aria-label="Close"></button>'
}), Bv = (e) => pt(e, Ns), Fv = (e) => new un(e);
class un extends Qt {
  /**
   * @param target the target element
   * @param config the instance options
   */
  constructor(t, n) {
    super(t, n), oe(this, "show", () => {
      super.show();
      const { options: r, btn: i } = this;
      r.dismissible && i && setTimeout(() => hn(i), 17);
    });
  }
  /**
   * Returns component name string.
   */
  get name() {
    return Ns;
  }
  /**
   * Returns component default options.
   */
  get defaults() {
    return Ev;
  }
}
oe(un, "selector", Ov), oe(un, "init", Fv), oe(un, "getInstance", Bv), oe(un, "styleTip", _o);
const Hv = "scrollspy", Ad = "ScrollSpy", Vv = '[data-bs-spy="scroll"]', Mv = {
  offset: 10,
  target: null
}, $v = (e) => pt(e, Ad), jv = (e) => new Hn(e), ku = ke(`activate.bs.${Hv}`), Wv = (e) => {
  const { target: t, scrollTarget: n, options: r, itemsLength: i, scrollHeight: a, element: o } = e, { offset: c } = r, h = po(n), m = t && vo("A", t), g = n ? Pd(n) : (
    /* istanbul ignore next */
    a
  );
  if (e.scrollTop = h ? n.scrollY : n.scrollTop, m && (g !== a || i !== m.length)) {
    let _, w, C;
    e.items = [], e.offsets = [], e.scrollHeight = g, e.maxScroll = e.scrollHeight - qv(e), [...m].forEach((k) => {
      _ = tn(k, "href"), w = _ && _.charAt(0) === "#" && _.slice(-1) !== "#" && qe(_, Pe(o)), w && (e.items.push(k), C = yi(w), e.offsets.push((h ? C.top + e.scrollTop : w.offsetTop) - c));
    }), e.itemsLength = e.items.length;
  }
}, Pd = (e) => Le(e) ? e.scrollHeight : pn(e).scrollHeight, qv = ({ element: e, scrollTarget: t }) => po(t) ? t.innerHeight : yi(e).height, kd = (e) => {
  [...vo("A", e)].forEach((t) => {
    pe(t, Oe) && Se(t, Oe);
  });
}, Ru = (e, t) => {
  const { target: n, element: r } = e;
  Le(n) && kd(n), e.activeItem = t, ve(t, Oe);
  const i = [];
  let a = t;
  for (; a !== qn(r); )
    a = a.parentElement, (pe(a, "nav") || pe(a, "dropdown-menu")) && i.push(a);
  i.forEach((o) => {
    const c = o.previousElementSibling;
    c && !pe(c, Oe) && ve(c, Oe);
  }), ku.relatedTarget = t, Ae(r, ku);
};
class Hn extends Xt {
  /**
   * @param target the target element
   * @param config the instance options
   */
  constructor(t, n) {
    super(t, n), oe(this, "refresh", () => {
      const { target: a } = this;
      if (Le(a) && a.offsetHeight > 0) {
        Wv(this);
        const { scrollTop: o, maxScroll: c, itemsLength: h, items: m, activeItem: g } = this;
        if (o >= c) {
          const w = m[h - 1];
          g !== w && Ru(this, w);
          return;
        }
        const { offsets: _ } = this;
        if (g && o < _[0] && _[0] > 0) {
          this.activeItem = null, a && kd(a);
          return;
        }
        m.forEach((w, C) => {
          g !== w && o >= _[C] && (typeof _[C + 1] > "u" || o < _[C + 1]) && Ru(this, w);
        });
      }
    }), oe(this, "_toggleEventListeners", (a) => {
      (a ? rt : it)(this.scrollTarget, Ss, this.refresh, Gt);
    });
    const { element: r, options: i } = this;
    this.target = qe(i.target, Pe(r)), this.target && (this.scrollTarget = r.clientHeight < r.scrollHeight ? r : Xr(r), this.scrollHeight = Pd(this.scrollTarget), this._toggleEventListeners(!0), this.refresh());
  }
  /* eslint-disable */
  /**
   * Returns component name string.
   */
  get name() {
    return Ad;
  }
  /**
   * Returns component default options.
   */
  get defaults() {
    return Mv;
  }
  /** Removes `ScrollSpy` from the target element. */
  dispose() {
    this._toggleEventListeners(), super.dispose();
  }
}
oe(Hn, "selector", Vv), oe(Hn, "init", jv), oe(Hn, "getInstance", $v);
const Ci = "tab", Rd = "Tab", Ld = `[${nn}="${Ci}"]`, Nd = (e) => pt(e, Rd), Gv = (e) => new Vn(e), ga = ke(`show.bs.${Ci}`), Lu = ke(`shown.bs.${Ci}`), ba = ke(`hide.bs.${Ci}`), Nu = ke(`hidden.bs.${Ci}`), di = /* @__PURE__ */ new Map(), Iu = (e) => {
  const { tabContent: t, nav: n } = e;
  t && pe(t, lr) && (t.style.height = "", Se(t, lr)), n && xe.clear(n);
}, Ou = (e) => {
  const { element: t, tabContent: n, content: r, nav: i } = e, { tab: a } = Le(i) && di.get(i) || /* istanbul ignore next */
  { tab: null };
  if (n && r && pe(r, at)) {
    const { currentHeight: o, nextHeight: c } = di.get(t) || /* istanbul ignore next */
    {
      currentHeight: 0,
      nextHeight: 0
    };
    o === c ? Iu(e) : setTimeout(() => {
      n.style.height = `${c}px`, hr(n), We(n, () => Iu(e));
    }, 50);
  } else
    i && xe.clear(i);
  Lu.relatedTarget = a, Ae(t, Lu);
}, Eu = (e) => {
  const { element: t, content: n, tabContent: r, nav: i } = e, { tab: a, content: o } = i && di.get(i) || /* istanbul ignore next */
  { tab: null, content: null };
  let c = 0;
  if (r && n && pe(n, at) && ([o, n].forEach((h) => {
    Le(h) && ve(h, "overflow-hidden");
  }), c = Le(o) ? o.scrollHeight : (
    /* istanbul ignore next */
    0
  )), ga.relatedTarget = a, Nu.relatedTarget = t, Ae(t, ga), !ga.defaultPrevented) {
    if (n && ve(n, Oe), o && Se(o, Oe), r && n && pe(n, at)) {
      const h = n.scrollHeight;
      di.set(t, { currentHeight: c, nextHeight: h, tab: null, content: null }), ve(r, lr), r.style.height = `${c}px`, hr(r), [o, n].forEach((m) => {
        m && Se(m, "overflow-hidden");
      });
    }
    n && n && pe(n, at) ? setTimeout(() => {
      ve(n, _e), We(n, () => {
        Ou(e);
      });
    }, 1) : (n && ve(n, _e), Ou(e)), a && Ae(a, Nu);
  }
}, Bu = (e) => {
  const { nav: t } = e;
  if (!Le(t))
    return { tab: null, content: null };
  const n = ln(Oe, t);
  let r = null;
  n.length === 1 && !ur.some((a) => pe(n[0].parentElement, a)) ? [r] = n : n.length > 1 && (r = n[n.length - 1]);
  const i = Le(r) ? Ct(r) : null;
  return { tab: r, content: i };
}, Fu = (e) => {
  if (!Le(e))
    return null;
  const t = nt(e, `.${ur.join(",.")}`);
  return t ? qe(`.${ur[0]}-toggle`, t) : null;
}, Xv = (e) => {
  const t = Nd(e.target);
  t && (e.preventDefault(), t.show());
};
class Vn extends Xt {
  /** @param target the target element */
  constructor(t) {
    super(t), oe(this, "_toggleEventListeners", (i) => {
      (i ? rt : it)(this.element, et, Xv);
    });
    const { element: n } = this, r = Ct(n);
    if (r) {
      const i = nt(n, ".nav"), a = nt(r, ".tab-content");
      this.nav = i, this.content = r, this.tabContent = a, this.dropdown = Fu(n);
      const { tab: o } = Bu(this);
      if (i && !o) {
        const c = qe(Ld, i), h = c && Ct(c);
        h && (ve(c, Oe), ve(h, _e), ve(h, Oe), tt(n, la, "true"));
      }
      this._toggleEventListeners(!0);
    }
  }
  /**
   * Returns component name string.
   */
  get name() {
    return Rd;
  }
  // TAB PUBLIC METHODS
  // ==================
  /** Shows the tab to the user. */
  show() {
    const { element: t, content: n, nav: r, dropdown: i } = this;
    if (!(r && xe.get(r)) && !pe(t, Oe)) {
      const { tab: a, content: o } = Bu(this);
      if (r && di.set(r, { tab: a, content: o, currentHeight: 0, nextHeight: 0 }), ba.relatedTarget = t, Le(a) && (Ae(a, ba), !ba.defaultPrevented)) {
        ve(t, Oe), tt(t, la, "true");
        const c = Le(a) && Fu(a);
        if (c && pe(c, Oe) && Se(c, Oe), r) {
          const h = () => {
            a && (Se(a, Oe), tt(a, la, "false")), i && !pe(i, Oe) && ve(i, Oe);
          };
          o && (pe(o, at) || n && pe(n, at)) ? xe.set(r, h, 1) : h();
        }
        o && (Se(o, _e), pe(o, at) ? We(o, () => Eu(this)) : Eu(this));
      }
    }
  }
  /** Removes the `Tab` component from the target element. */
  dispose() {
    this._toggleEventListeners(), super.dispose();
  }
}
oe(Vn, "selector", Ld), oe(Vn, "init", Gv), oe(Vn, "getInstance", Nd);
const Ft = "toast", Id = "Toast", zv = `.${Ft}`, Uv = `[${As}="${Ft}"]`, Od = `[${nn}="${Ft}"]`, Mr = "showing", Ed = "hide", Yv = {
  animation: !0,
  autohide: !0,
  delay: 5e3
}, Co = (e) => pt(e, Id), Kv = (e) => new Mn(e), Hu = ke(`show.bs.${Ft}`), Jv = ke(`shown.bs.${Ft}`), Vu = ke(`hide.bs.${Ft}`), Qv = ke(`hidden.bs.${Ft}`), Mu = (e) => {
  const { element: t, options: n } = e;
  Se(t, Mr), xe.clear(t, Mr), Ae(t, Jv), n.autohide && xe.set(t, () => e.hide(), n.delay, Ft);
}, $u = (e) => {
  const { element: t } = e;
  Se(t, Mr), Se(t, _e), ve(t, Ed), xe.clear(t, Ft), Ae(t, Qv);
}, Zv = (e) => {
  const { element: t, options: n } = e;
  ve(t, Mr), n.animation ? (hr(t), We(t, () => $u(e))) : $u(e);
}, em = (e) => {
  const { element: t, options: n } = e;
  xe.set(
    t,
    () => {
      Se(t, Ed), hr(t), ve(t, _e), ve(t, Mr), n.animation ? We(t, () => Mu(e)) : Mu(e);
    },
    17,
    Mr
  );
}, tm = (e) => {
  xe.clear(e.element, Ft), e._toggleEventListeners();
}, nm = (e) => {
  const { target: t } = e, n = t && nt(t, Od), r = n && Ct(n), i = r && Co(r);
  i && (n && n.tagName === "A" && e.preventDefault(), i.relatedTarget = n, i.show());
}, rm = (e) => {
  const t = e.target, n = Co(t), { type: r, relatedTarget: i } = e;
  n && t !== i && !t.contains(i) && ([Cs, uo].includes(r) ? xe.clear(t, Ft) : xe.set(t, () => n.hide(), n.options.delay, Ft));
};
class Mn extends Xt {
  /**
   * @param target the target `.toast` element
   * @param config the instance options
   */
  constructor(t, n) {
    super(t, n), oe(this, "show", () => {
      const { element: a, isShown: o } = this;
      a && !o && (Ae(a, Hu), Hu.defaultPrevented || em(this));
    }), oe(this, "hide", () => {
      const { element: a, isShown: o } = this;
      a && o && (Ae(a, Vu), Vu.defaultPrevented || Zv(this));
    }), oe(this, "_toggleEventListeners", (a) => {
      const o = a ? rt : it, { element: c, triggers: h, dismiss: m, options: g, hide: _ } = this;
      m && o(m, et, _), g.autohide && [uo, Ic, Cs, co].forEach(
        (w) => o(c, w, rm)
      ), h.length && h.forEach((w) => o(w, et, nm));
    });
    const { element: r, options: i } = this;
    i.animation && !pe(r, at) ? ve(r, at) : !i.animation && pe(r, at) && Se(r, at), this.dismiss = qe(Uv, r), this.triggers = [...jt(Od, Pe(r))].filter(
      (a) => Ct(a) === r
    ), this._toggleEventListeners(!0);
  }
  /**
   * Returns component name string.
   */
  get name() {
    return Id;
  }
  /**
   * Returns component default options.
   */
  get defaults() {
    return Yv;
  }
  /**
   * Returns *true* when toast is visible.
   */
  get isShown() {
    return pe(this.element, _e);
  }
  /** Removes the `Toast` component from the target element. */
  dispose() {
    const { element: t, isShown: n } = this;
    n && Se(t, _e), tm(this), super.dispose();
  }
}
oe(Mn, "selector", zv), oe(Mn, "init", Kv), oe(Mn, "getInstance", Co);
const Bd = /* @__PURE__ */ new Map();
[Ln, Nn, In, On, En, Bn, Fn, un, Hn, Vn, Mn, Qt].forEach(
  (e) => Bd.set(e.prototype.name, e)
);
const im = (e, t) => {
  [...t].forEach((n) => e(n));
}, ju = (e) => {
  const t = e && e.nodeName ? e : document, n = [...vo("*", t)];
  Bd.forEach((r) => {
    const { init: i, selector: a } = r;
    im(
      i,
      n.filter((o) => Mc(o, a))
    );
  });
};
document.body ? ju() : rt(document, "DOMContentLoaded", () => ju(), { once: !0 });
Ln.getOrCreateInstance = (e) => Ln.getInstance(e) ?? new Ln(e);
Nn.getOrCreateInstance = (e) => Nn.getInstance(e) ?? new Nn(e);
In.getOrCreateInstance = (e, t) => In.getInstance(e) ?? new In(e, t);
On.getOrCreateInstance = (e, t) => On.getInstance(e) ?? new On(e, t);
En.getOrCreateInstance = (e, t) => En.getInstance(e) ?? new En(e, t);
Bn.getOrCreateInstance = (e, t) => Bn.getInstance(e) ?? new Bn(e, t);
Fn.getOrCreateInstance = (e, t) => Fn.getInstance(e) ?? new Fn(e, t);
un.getOrCreateInstance = (e, t) => un.getInstance(e) ?? new un(e, t);
Hn.getOrCreateInstance = (e, t) => Hn.getInstance(e) ?? new Hn(e, t);
Vn.getOrCreateInstance = (e) => Vn.getInstance(e) ?? new Vn(e);
Mn.getOrCreateInstance = (e, t) => Mn.getInstance(e) ?? new Mn(e, t);
Qt.getOrCreateInstance = (e, t) => Qt.getInstance(e) ?? new Qt(e, t);
export {
  Ln as Alert,
  Nn as Button,
  In as Carousel,
  On as Collapse,
  I as DataTable,
  En as Dropdown,
  Bn as Modal,
  Fn as Offcanvas,
  un as Popover,
  Hn as ScrollSpy,
  Vn as Tab,
  Mn as Toast,
  Qt as Tooltip,
  ju as initCallback
};
//# sourceMappingURL=bs-ee.mjs.map
