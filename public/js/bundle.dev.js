(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/plyr/dist/plyr.min.js
  var require_plyr_min = __commonJS({
    "node_modules/plyr/dist/plyr.min.js"(exports, module) {
      "object" == typeof navigator && function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t();
      }(exports, function() {
        "use strict";
        function e(e2, t2, i2) {
          return (t2 = function(e3) {
            var t3 = function(e4, t4) {
              if ("object" != typeof e4 || null === e4) return e4;
              var i3 = e4[Symbol.toPrimitive];
              if (void 0 !== i3) {
                var s2 = i3.call(e4, t4 || "default");
                if ("object" != typeof s2) return s2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t4 ? String : Number)(e4);
            }(e3, "string");
            return "symbol" == typeof t3 ? t3 : String(t3);
          }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        function t(e2, t2) {
          for (var i2 = 0; i2 < t2.length; i2++) {
            var s2 = t2[i2];
            s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(e2, s2.key, s2);
          }
        }
        function i(e2, t2, i2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        function s(e2, t2) {
          var i2 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var s2 = Object.getOwnPropertySymbols(e2);
            t2 && (s2 = s2.filter(function(t3) {
              return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
            })), i2.push.apply(i2, s2);
          }
          return i2;
        }
        function n(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = null != arguments[t2] ? arguments[t2] : {};
            t2 % 2 ? s(Object(n2), true).forEach(function(t3) {
              i(e2, t3, n2[t3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : s(Object(n2)).forEach(function(t3) {
              Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
            });
          }
          return e2;
        }
        var a = { addCSS: true, thumbWidth: 15, watch: true };
        var l = function(e2) {
          return null != e2 ? e2.constructor : null;
        }, r = function(e2, t2) {
          return !!(e2 && t2 && e2 instanceof t2);
        }, o = function(e2) {
          return null == e2;
        }, c = function(e2) {
          return l(e2) === Object;
        }, u = function(e2) {
          return l(e2) === String;
        }, h = function(e2) {
          return Array.isArray(e2);
        }, d = function(e2) {
          return r(e2, NodeList);
        }, m = { nullOrUndefined: o, object: c, number: function(e2) {
          return l(e2) === Number && !Number.isNaN(e2);
        }, string: u, boolean: function(e2) {
          return l(e2) === Boolean;
        }, function: function(e2) {
          return l(e2) === Function;
        }, array: h, nodeList: d, element: function(e2) {
          return r(e2, Element);
        }, event: function(e2) {
          return r(e2, Event);
        }, empty: function(e2) {
          return o(e2) || (u(e2) || h(e2) || d(e2)) && !e2.length || c(e2) && !Object.keys(e2).length;
        } };
        function p(e2, t2) {
          if (1 > t2) {
            var i2 = function(e3) {
              var t3 = "".concat(e3).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t3 ? Math.max(0, (t3[1] ? t3[1].length : 0) - (t3[2] ? +t3[2] : 0)) : 0;
            }(t2);
            return parseFloat(e2.toFixed(i2));
          }
          return Math.round(e2 / t2) * t2;
        }
        var g = function() {
          function e2(t2, i2) {
            (function(e3, t3) {
              if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            })(this, e2), m.element(t2) ? this.element = t2 : m.string(t2) && (this.element = document.querySelector(t2)), m.element(this.element) && m.empty(this.element.rangeTouch) && (this.config = n({}, a, {}, i2), this.init());
          }
          return function(e3, i2, s2) {
            i2 && t(e3.prototype, i2), s2 && t(e3, s2);
          }(e2, [{ key: "init", value: function() {
            e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
          } }, { key: "destroy", value: function() {
            e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
          } }, { key: "listeners", value: function(e3) {
            var t2 = this, i2 = e3 ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(e4) {
              t2.element[i2](e4, function(e5) {
                return t2.set(e5);
              }, false);
            });
          } }, { key: "get", value: function(t2) {
            if (!e2.enabled || !m.event(t2)) return null;
            var i2, s2 = t2.target, n2 = t2.changedTouches[0], a2 = parseFloat(s2.getAttribute("min")) || 0, l2 = parseFloat(s2.getAttribute("max")) || 100, r2 = parseFloat(s2.getAttribute("step")) || 1, o2 = s2.getBoundingClientRect(), c2 = 100 / o2.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (i2 = 100 / o2.width * (n2.clientX - o2.left)) ? i2 = 0 : 100 < i2 && (i2 = 100), 50 > i2 ? i2 -= (100 - 2 * i2) * c2 : 50 < i2 && (i2 += 2 * (i2 - 50) * c2), a2 + p(i2 / 100 * (l2 - a2), r2);
          } }, { key: "set", value: function(t2) {
            e2.enabled && m.event(t2) && !t2.target.disabled && (t2.preventDefault(), t2.target.value = this.get(t2), function(e3, t3) {
              if (e3 && t3) {
                var i2 = new Event(t3, { bubbles: true });
                e3.dispatchEvent(i2);
              }
            }(t2.target, "touchend" === t2.type ? "change" : "input"));
          } }], [{ key: "setup", value: function(t2) {
            var i2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s2 = null;
            if (m.empty(t2) || m.string(t2) ? s2 = Array.from(document.querySelectorAll(m.string(t2) ? t2 : 'input[type="range"]')) : m.element(t2) ? s2 = [t2] : m.nodeList(t2) ? s2 = Array.from(t2) : m.array(t2) && (s2 = t2.filter(m.element)), m.empty(s2)) return null;
            var l2 = n({}, a, {}, i2);
            if (m.string(t2) && l2.watch) {
              var r2 = new MutationObserver(function(i3) {
                Array.from(i3).forEach(function(i4) {
                  Array.from(i4.addedNodes).forEach(function(i5) {
                    m.element(i5) && function(e3, t3) {
                      return function() {
                        return Array.from(document.querySelectorAll(t3)).includes(this);
                      }.call(e3, t3);
                    }(i5, t2) && new e2(i5, l2);
                  });
                });
              });
              r2.observe(document.body, { childList: true, subtree: true });
            }
            return s2.map(function(t3) {
              return new e2(t3, i2);
            });
          } }, { key: "enabled", get: function() {
            return "ontouchstart" in document.documentElement;
          } }]), e2;
        }();
        const f = (e2) => null != e2 ? e2.constructor : null, y = (e2, t2) => Boolean(e2 && t2 && e2 instanceof t2), b = (e2) => null == e2, v = (e2) => f(e2) === Object, w = (e2) => f(e2) === String, T = (e2) => "function" == typeof e2, k = (e2) => Array.isArray(e2), C = (e2) => y(e2, NodeList), A = (e2) => b(e2) || (w(e2) || k(e2) || C(e2)) && !e2.length || v(e2) && !Object.keys(e2).length;
        var S = { nullOrUndefined: b, object: v, number: (e2) => f(e2) === Number && !Number.isNaN(e2), string: w, boolean: (e2) => f(e2) === Boolean, function: T, array: k, weakMap: (e2) => y(e2, WeakMap), nodeList: C, element: (e2) => null !== e2 && "object" == typeof e2 && 1 === e2.nodeType && "object" == typeof e2.style && "object" == typeof e2.ownerDocument, textNode: (e2) => f(e2) === Text, event: (e2) => y(e2, Event), keyboardEvent: (e2) => y(e2, KeyboardEvent), cue: (e2) => y(e2, window.TextTrackCue) || y(e2, window.VTTCue), track: (e2) => y(e2, TextTrack) || !b(e2) && w(e2.kind), promise: (e2) => y(e2, Promise) && T(e2.then), url: (e2) => {
          if (y(e2, window.URL)) return true;
          if (!w(e2)) return false;
          let t2 = e2;
          e2.startsWith("http://") && e2.startsWith("https://") || (t2 = `http://${e2}`);
          try {
            return !A(new URL(t2).hostname);
          } catch (e3) {
            return false;
          }
        }, empty: A };
        const E = (() => {
          const e2 = document.createElement("span"), t2 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, i2 = Object.keys(t2).find((t3) => void 0 !== e2.style[t3]);
          return !!S.string(i2) && t2[i2];
        })();
        function P(e2, t2) {
          setTimeout(() => {
            try {
              e2.hidden = true, e2.offsetHeight, e2.hidden = false;
            } catch (e3) {
            }
          }, t2);
        }
        var M = { isIE: Boolean(window.document.documentMode), isEdge: /Edge/g.test(navigator.userAgent), isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent), isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1, isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1 };
        function N(e2, t2) {
          return t2.split(".").reduce((e3, t3) => e3 && e3[t3], e2);
        }
        function x(e2 = {}, ...t2) {
          if (!t2.length) return e2;
          const i2 = t2.shift();
          return S.object(i2) ? (Object.keys(i2).forEach((t3) => {
            S.object(i2[t3]) ? (Object.keys(e2).includes(t3) || Object.assign(e2, { [t3]: {} }), x(e2[t3], i2[t3])) : Object.assign(e2, { [t3]: i2[t3] });
          }), x(e2, ...t2)) : e2;
        }
        function L(e2, t2) {
          const i2 = e2.length ? e2 : [e2];
          Array.from(i2).reverse().forEach((e3, i3) => {
            const s2 = i3 > 0 ? t2.cloneNode(true) : t2, n2 = e3.parentNode, a2 = e3.nextSibling;
            s2.appendChild(e3), a2 ? n2.insertBefore(s2, a2) : n2.appendChild(s2);
          });
        }
        function I(e2, t2) {
          S.element(e2) && !S.empty(t2) && Object.entries(t2).filter(([, e3]) => !S.nullOrUndefined(e3)).forEach(([t3, i2]) => e2.setAttribute(t3, i2));
        }
        function $(e2, t2, i2) {
          const s2 = document.createElement(e2);
          return S.object(t2) && I(s2, t2), S.string(i2) && (s2.innerText = i2), s2;
        }
        function _(e2, t2, i2, s2) {
          S.element(t2) && t2.appendChild($(e2, i2, s2));
        }
        function O(e2) {
          S.nodeList(e2) || S.array(e2) ? Array.from(e2).forEach(O) : S.element(e2) && S.element(e2.parentNode) && e2.parentNode.removeChild(e2);
        }
        function j(e2) {
          if (!S.element(e2)) return;
          let { length: t2 } = e2.childNodes;
          for (; t2 > 0; ) e2.removeChild(e2.lastChild), t2 -= 1;
        }
        function q(e2, t2) {
          return S.element(t2) && S.element(t2.parentNode) && S.element(e2) ? (t2.parentNode.replaceChild(e2, t2), e2) : null;
        }
        function D(e2, t2) {
          if (!S.string(e2) || S.empty(e2)) return {};
          const i2 = {}, s2 = x({}, t2);
          return e2.split(",").forEach((e3) => {
            const t3 = e3.trim(), n2 = t3.replace(".", ""), a2 = t3.replace(/[[\]]/g, "").split("="), [l2] = a2, r2 = a2.length > 1 ? a2[1].replace(/["']/g, "") : "";
            switch (t3.charAt(0)) {
              case ".":
                S.string(s2.class) ? i2.class = `${s2.class} ${n2}` : i2.class = n2;
                break;
              case "#":
                i2.id = t3.replace("#", "");
                break;
              case "[":
                i2[l2] = r2;
            }
          }), x(s2, i2);
        }
        function H(e2, t2) {
          if (!S.element(e2)) return;
          let i2 = t2;
          S.boolean(i2) || (i2 = !e2.hidden), e2.hidden = i2;
        }
        function R(e2, t2, i2) {
          if (S.nodeList(e2)) return Array.from(e2).map((e3) => R(e3, t2, i2));
          if (S.element(e2)) {
            let s2 = "toggle";
            return void 0 !== i2 && (s2 = i2 ? "add" : "remove"), e2.classList[s2](t2), e2.classList.contains(t2);
          }
          return false;
        }
        function F(e2, t2) {
          return S.element(e2) && e2.classList.contains(t2);
        }
        function V(e2, t2) {
          const { prototype: i2 } = Element;
          return (i2.matches || i2.webkitMatchesSelector || i2.mozMatchesSelector || i2.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t2)).includes(this);
          }).call(e2, t2);
        }
        function U(e2) {
          return this.elements.container.querySelectorAll(e2);
        }
        function B(e2) {
          return this.elements.container.querySelector(e2);
        }
        function W(e2 = null, t2 = false) {
          S.element(e2) && e2.focus({ preventScroll: true, focusVisible: t2 });
        }
        const z = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" }, K = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check(e2, t2) {
          const i2 = K[e2] || "html5" !== t2;
          return { api: i2, ui: i2 && K.rangeInput };
        }, pip: !(M.isIPhone || !S.function($("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $("video").disablePictureInPicture)), airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime(e2) {
          if (S.empty(e2)) return false;
          const [t2] = e2.split("/");
          let i2 = e2;
          if (!this.isHTML5 || t2 !== this.type) return false;
          Object.keys(z).includes(i2) && (i2 += `; codecs="${z[e2]}"`);
          try {
            return Boolean(i2 && this.media.canPlayType(i2).replace(/no/, ""));
          } catch (e3) {
            return false;
          }
        }, textTracks: "textTracks" in document.createElement("video"), rangeInput: (() => {
          const e2 = document.createElement("input");
          return e2.type = "range", "range" === e2.type;
        })(), touch: "ontouchstart" in document.documentElement, transitions: false !== E, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches }, Y = (() => {
          let e2 = false;
          try {
            const t2 = Object.defineProperty({}, "passive", { get: () => (e2 = true, null) });
            window.addEventListener("test", null, t2), window.removeEventListener("test", null, t2);
          } catch (e3) {
          }
          return e2;
        })();
        function Q(e2, t2, i2, s2 = false, n2 = true, a2 = false) {
          if (!e2 || !("addEventListener" in e2) || S.empty(t2) || !S.function(i2)) return;
          const l2 = t2.split(" ");
          let r2 = a2;
          Y && (r2 = { passive: n2, capture: a2 }), l2.forEach((t3) => {
            this && this.eventListeners && s2 && this.eventListeners.push({ element: e2, type: t3, callback: i2, options: r2 }), e2[s2 ? "addEventListener" : "removeEventListener"](t3, i2, r2);
          });
        }
        function X(e2, t2 = "", i2, s2 = true, n2 = false) {
          Q.call(this, e2, t2, i2, true, s2, n2);
        }
        function J(e2, t2 = "", i2, s2 = true, n2 = false) {
          Q.call(this, e2, t2, i2, false, s2, n2);
        }
        function G(e2, t2 = "", i2, s2 = true, n2 = false) {
          const a2 = (...l2) => {
            J(e2, t2, a2, s2, n2), i2.apply(this, l2);
          };
          Q.call(this, e2, t2, a2, true, s2, n2);
        }
        function Z(e2, t2 = "", i2 = false, s2 = {}) {
          if (!S.element(e2) || S.empty(t2)) return;
          const n2 = new CustomEvent(t2, { bubbles: i2, detail: { ...s2, plyr: this } });
          e2.dispatchEvent(n2);
        }
        function ee() {
          this && this.eventListeners && (this.eventListeners.forEach((e2) => {
            const { element: t2, type: i2, callback: s2, options: n2 } = e2;
            t2.removeEventListener(i2, s2, n2);
          }), this.eventListeners = []);
        }
        function te() {
          return new Promise((e2) => this.ready ? setTimeout(e2, 0) : X.call(this, this.elements.container, "ready", e2)).then(() => {
          });
        }
        function ie(e2) {
          S.promise(e2) && e2.then(null, () => {
          });
        }
        function se(e2) {
          return S.array(e2) ? e2.filter((t2, i2) => e2.indexOf(t2) === i2) : e2;
        }
        function ne(e2, t2) {
          return S.array(e2) && e2.length ? e2.reduce((e3, i2) => Math.abs(i2 - t2) < Math.abs(e3 - t2) ? i2 : e3) : null;
        }
        function ae(e2) {
          return !(!window || !window.CSS) && window.CSS.supports(e2);
        }
        const le = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e2, [t2, i2]) => ({ ...e2, [t2 / i2]: [t2, i2] }), {});
        function re(e2) {
          if (!(S.array(e2) || S.string(e2) && e2.includes(":"))) return false;
          return (S.array(e2) ? e2 : e2.split(":")).map(Number).every(S.number);
        }
        function oe(e2) {
          if (!S.array(e2) || !e2.every(S.number)) return null;
          const [t2, i2] = e2, s2 = (e3, t3) => 0 === t3 ? e3 : s2(t3, e3 % t3), n2 = s2(t2, i2);
          return [t2 / n2, i2 / n2];
        }
        function ce(e2) {
          const t2 = (e3) => re(e3) ? e3.split(":").map(Number) : null;
          let i2 = t2(e2);
          if (null === i2 && (i2 = t2(this.config.ratio)), null === i2 && !S.empty(this.embed) && S.array(this.embed.ratio) && ({ ratio: i2 } = this.embed), null === i2 && this.isHTML5) {
            const { videoWidth: e3, videoHeight: t3 } = this.media;
            i2 = [e3, t3];
          }
          return oe(i2);
        }
        function ue(e2) {
          if (!this.isVideo) return {};
          const { wrapper: t2 } = this.elements, i2 = ce.call(this, e2);
          if (!S.array(i2)) return {};
          const [s2, n2] = oe(i2), a2 = 100 / s2 * n2;
          if (ae(`aspect-ratio: ${s2}/${n2}`) ? t2.style.aspectRatio = `${s2}/${n2}` : t2.style.paddingBottom = `${a2}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e3 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i3 = (e3 - a2) / (e3 / 50);
            this.fullscreen.active ? t2.style.paddingBottom = null : this.media.style.transform = `translateY(-${i3}%)`;
          } else this.isHTML5 && t2.classList.add(this.config.classNames.videoFixedRatio);
          return { padding: a2, ratio: i2 };
        }
        function he(e2, t2, i2 = 0.05) {
          const s2 = e2 / t2, n2 = ne(Object.keys(le), s2);
          return Math.abs(n2 - s2) <= i2 ? le[n2] : [e2, t2];
        }
        const de = { getSources() {
          if (!this.isHTML5) return [];
          return Array.from(this.media.querySelectorAll("source")).filter((e2) => {
            const t2 = e2.getAttribute("type");
            return !!S.empty(t2) || K.mime.call(this, t2);
          });
        }, getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : de.getSources.call(this).map((e2) => Number(e2.getAttribute("size"))).filter(Boolean);
        }, setup() {
          if (!this.isHTML5) return;
          const e2 = this;
          e2.options.speed = e2.config.speed.options, S.empty(this.config.ratio) || ue.call(e2), Object.defineProperty(e2.media, "quality", { get() {
            const t2 = de.getSources.call(e2).find((t3) => t3.getAttribute("src") === e2.source);
            return t2 && Number(t2.getAttribute("size"));
          }, set(t2) {
            if (e2.quality !== t2) {
              if (e2.config.quality.forced && S.function(e2.config.quality.onChange)) e2.config.quality.onChange(t2);
              else {
                const i2 = de.getSources.call(e2).find((e3) => Number(e3.getAttribute("size")) === t2);
                if (!i2) return;
                const { currentTime: s2, paused: n2, preload: a2, readyState: l2, playbackRate: r2 } = e2.media;
                e2.media.src = i2.getAttribute("src"), ("none" !== a2 || l2) && (e2.once("loadedmetadata", () => {
                  e2.speed = r2, e2.currentTime = s2, n2 || ie(e2.play());
                }), e2.media.load());
              }
              Z.call(e2, e2.media, "qualitychange", false, { quality: t2 });
            }
          } });
        }, cancelRequests() {
          this.isHTML5 && (O(de.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        } };
        function me(e2, ...t2) {
          return S.empty(e2) ? e2 : e2.toString().replace(/{(\d+)}/g, (e3, i2) => t2[i2].toString());
        }
        const pe = (e2 = "", t2 = "", i2 = "") => e2.replace(new RegExp(t2.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i2.toString()), ge = (e2 = "") => e2.toString().replace(/\w\S*/g, (e3) => e3.charAt(0).toUpperCase() + e3.slice(1).toLowerCase());
        function fe(e2 = "") {
          let t2 = e2.toString();
          return t2 = function(e3 = "") {
            let t3 = e3.toString();
            return t3 = pe(t3, "-", " "), t3 = pe(t3, "_", " "), t3 = ge(t3), pe(t3, " ", "");
          }(t2), t2.charAt(0).toLowerCase() + t2.slice(1);
        }
        function ye(e2) {
          const t2 = document.createElement("div");
          return t2.appendChild(e2), t2.innerHTML;
        }
        const be = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" }, ve = { get(e2 = "", t2 = {}) {
          if (S.empty(e2) || S.empty(t2)) return "";
          let i2 = N(t2.i18n, e2);
          if (S.empty(i2)) return Object.keys(be).includes(e2) ? be[e2] : "";
          const s2 = { "{seektime}": t2.seekTime, "{title}": t2.title };
          return Object.entries(s2).forEach(([e3, t3]) => {
            i2 = pe(i2, e3, t3);
          }), i2;
        } };
        class we {
          constructor(t2) {
            e(this, "get", (e2) => {
              if (!we.supported || !this.enabled) return null;
              const t3 = window.localStorage.getItem(this.key);
              if (S.empty(t3)) return null;
              const i2 = JSON.parse(t3);
              return S.string(e2) && e2.length ? i2[e2] : i2;
            }), e(this, "set", (e2) => {
              if (!we.supported || !this.enabled) return;
              if (!S.object(e2)) return;
              let t3 = this.get();
              S.empty(t3) && (t3 = {}), x(t3, e2);
              try {
                window.localStorage.setItem(this.key, JSON.stringify(t3));
              } catch (e3) {
              }
            }), this.enabled = t2.config.storage.enabled, this.key = t2.config.storage.key;
          }
          static get supported() {
            try {
              if (!("localStorage" in window)) return false;
              const e2 = "___test";
              return window.localStorage.setItem(e2, e2), window.localStorage.removeItem(e2), true;
            } catch (e2) {
              return false;
            }
          }
        }
        function Te(e2, t2 = "text") {
          return new Promise((i2, s2) => {
            try {
              const s3 = new XMLHttpRequest();
              if (!("withCredentials" in s3)) return;
              s3.addEventListener("load", () => {
                if ("text" === t2) try {
                  i2(JSON.parse(s3.responseText));
                } catch (e3) {
                  i2(s3.responseText);
                }
                else i2(s3.response);
              }), s3.addEventListener("error", () => {
                throw new Error(s3.status);
              }), s3.open("GET", e2, true), s3.responseType = t2, s3.send();
            } catch (e3) {
              s2(e3);
            }
          });
        }
        function ke(e2, t2) {
          if (!S.string(e2)) return;
          const i2 = "cache", s2 = S.string(t2);
          let n2 = false;
          const a2 = () => null !== document.getElementById(t2), l2 = (e3, t3) => {
            e3.innerHTML = t3, s2 && a2() || document.body.insertAdjacentElement("afterbegin", e3);
          };
          if (!s2 || !a2()) {
            const a3 = we.supported, r2 = document.createElement("div");
            if (r2.setAttribute("hidden", ""), s2 && r2.setAttribute("id", t2), a3) {
              const e3 = window.localStorage.getItem(`${i2}-${t2}`);
              if (n2 = null !== e3, n2) {
                const t3 = JSON.parse(e3);
                l2(r2, t3.content);
              }
            }
            Te(e2).then((e3) => {
              if (!S.empty(e3)) {
                if (a3) try {
                  window.localStorage.setItem(`${i2}-${t2}`, JSON.stringify({ content: e3 }));
                } catch (e4) {
                }
                l2(r2, e3);
              }
            }).catch(() => {
            });
          }
        }
        const Ce = (e2) => Math.trunc(e2 / 60 / 60 % 60, 10), Ae = (e2) => Math.trunc(e2 / 60 % 60, 10), Se = (e2) => Math.trunc(e2 % 60, 10);
        function Ee(e2 = 0, t2 = false, i2 = false) {
          if (!S.number(e2)) return Ee(void 0, t2, i2);
          const s2 = (e3) => `0${e3}`.slice(-2);
          let n2 = Ce(e2);
          const a2 = Ae(e2), l2 = Se(e2);
          return n2 = t2 || n2 > 0 ? `${n2}:` : "", `${i2 && e2 > 0 ? "-" : ""}${n2}${s2(a2)}:${s2(l2)}`;
        }
        const Pe = { getIconUrl() {
          const e2 = new URL(this.config.iconUrl, window.location), t2 = window.location.host ? window.location.host : window.top.location.host, i2 = e2.host !== t2 || M.isIE && !window.svg4everybody;
          return { url: this.config.iconUrl, cors: i2 };
        }, findElements() {
          try {
            return this.elements.controls = B.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: U.call(this, this.config.selectors.buttons.play), pause: B.call(this, this.config.selectors.buttons.pause), restart: B.call(this, this.config.selectors.buttons.restart), rewind: B.call(this, this.config.selectors.buttons.rewind), fastForward: B.call(this, this.config.selectors.buttons.fastForward), mute: B.call(this, this.config.selectors.buttons.mute), pip: B.call(this, this.config.selectors.buttons.pip), airplay: B.call(this, this.config.selectors.buttons.airplay), settings: B.call(this, this.config.selectors.buttons.settings), captions: B.call(this, this.config.selectors.buttons.captions), fullscreen: B.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = B.call(this, this.config.selectors.progress), this.elements.inputs = { seek: B.call(this, this.config.selectors.inputs.seek), volume: B.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: B.call(this, this.config.selectors.display.buffer), currentTime: B.call(this, this.config.selectors.display.currentTime), duration: B.call(this, this.config.selectors.display.duration) }, S.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), true;
          } catch (e2) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e2), this.toggleNativeControls(true), false;
          }
        }, createIcon(e2, t2) {
          const i2 = "http://www.w3.org/2000/svg", s2 = Pe.getIconUrl.call(this), n2 = `${s2.cors ? "" : s2.url}#${this.config.iconPrefix}`, a2 = document.createElementNS(i2, "svg");
          I(a2, x(t2, { "aria-hidden": "true", focusable: "false" }));
          const l2 = document.createElementNS(i2, "use"), r2 = `${n2}-${e2}`;
          return "href" in l2 && l2.setAttributeNS("http://www.w3.org/1999/xlink", "href", r2), l2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r2), a2.appendChild(l2), a2;
        }, createLabel(e2, t2 = {}) {
          const i2 = ve.get(e2, this.config);
          return $("span", { ...t2, class: [t2.class, this.config.classNames.hidden].filter(Boolean).join(" ") }, i2);
        }, createBadge(e2) {
          if (S.empty(e2)) return null;
          const t2 = $("span", { class: this.config.classNames.menu.value });
          return t2.appendChild($("span", { class: this.config.classNames.menu.badge }, e2)), t2;
        }, createButton(e2, t2) {
          const i2 = x({}, t2);
          let s2 = fe(e2);
          const n2 = { element: "button", toggle: false, label: null, icon: null, labelPressed: null, iconPressed: null };
          switch (["element", "icon", "label"].forEach((e3) => {
            Object.keys(i2).includes(e3) && (n2[e3] = i2[e3], delete i2[e3]);
          }), "button" !== n2.element || Object.keys(i2).includes("type") || (i2.type = "button"), Object.keys(i2).includes("class") ? i2.class.split(" ").some((e3) => e3 === this.config.classNames.control) || x(i2, { class: `${i2.class} ${this.config.classNames.control}` }) : i2.class = this.config.classNames.control, e2) {
            case "play":
              n2.toggle = true, n2.label = "play", n2.labelPressed = "pause", n2.icon = "play", n2.iconPressed = "pause";
              break;
            case "mute":
              n2.toggle = true, n2.label = "mute", n2.labelPressed = "unmute", n2.icon = "volume", n2.iconPressed = "muted";
              break;
            case "captions":
              n2.toggle = true, n2.label = "enableCaptions", n2.labelPressed = "disableCaptions", n2.icon = "captions-off", n2.iconPressed = "captions-on";
              break;
            case "fullscreen":
              n2.toggle = true, n2.label = "enterFullscreen", n2.labelPressed = "exitFullscreen", n2.icon = "enter-fullscreen", n2.iconPressed = "exit-fullscreen";
              break;
            case "play-large":
              i2.class += ` ${this.config.classNames.control}--overlaid`, s2 = "play", n2.label = "play", n2.icon = "play";
              break;
            default:
              S.empty(n2.label) && (n2.label = s2), S.empty(n2.icon) && (n2.icon = e2);
          }
          const a2 = $(n2.element);
          return n2.toggle ? (a2.appendChild(Pe.createIcon.call(this, n2.iconPressed, { class: "icon--pressed" })), a2.appendChild(Pe.createIcon.call(this, n2.icon, { class: "icon--not-pressed" })), a2.appendChild(Pe.createLabel.call(this, n2.labelPressed, { class: "label--pressed" })), a2.appendChild(Pe.createLabel.call(this, n2.label, { class: "label--not-pressed" }))) : (a2.appendChild(Pe.createIcon.call(this, n2.icon)), a2.appendChild(Pe.createLabel.call(this, n2.label))), x(i2, D(this.config.selectors.buttons[s2], i2)), I(a2, i2), "play" === s2 ? (S.array(this.elements.buttons[s2]) || (this.elements.buttons[s2] = []), this.elements.buttons[s2].push(a2)) : this.elements.buttons[s2] = a2, a2;
        }, createRange(e2, t2) {
          const i2 = $("input", x(D(this.config.selectors.inputs[e2]), { type: "range", min: 0, max: 100, step: 0.01, value: 0, autocomplete: "off", role: "slider", "aria-label": ve.get(e2, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t2));
          return this.elements.inputs[e2] = i2, Pe.updateRangeFill.call(this, i2), g.setup(i2), i2;
        }, createProgress(e2, t2) {
          const i2 = $("progress", x(D(this.config.selectors.display[e2]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": true }, t2));
          if ("volume" !== e2) {
            i2.appendChild($("span", null, "0"));
            const t3 = { played: "played", buffer: "buffered" }[e2], s2 = t3 ? ve.get(t3, this.config) : "";
            i2.innerText = `% ${s2.toLowerCase()}`;
          }
          return this.elements.display[e2] = i2, i2;
        }, createTime(e2, t2) {
          const i2 = D(this.config.selectors.display[e2], t2), s2 = $("div", x(i2, { class: `${i2.class ? i2.class : ""} ${this.config.classNames.display.time} `.trim(), "aria-label": ve.get(e2, this.config), role: "timer" }), "00:00");
          return this.elements.display[e2] = s2, s2;
        }, bindMenuItemShortcuts(e2, t2) {
          X.call(this, e2, "keydown keyup", (i2) => {
            if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i2.key)) return;
            if (i2.preventDefault(), i2.stopPropagation(), "keydown" === i2.type) return;
            const s2 = V(e2, '[role="menuitemradio"]');
            if (!s2 && [" ", "ArrowRight"].includes(i2.key)) Pe.showMenuPanel.call(this, t2, true);
            else {
              let t3;
              " " !== i2.key && ("ArrowDown" === i2.key || s2 && "ArrowRight" === i2.key ? (t3 = e2.nextElementSibling, S.element(t3) || (t3 = e2.parentNode.firstElementChild)) : (t3 = e2.previousElementSibling, S.element(t3) || (t3 = e2.parentNode.lastElementChild)), W.call(this, t3, true));
            }
          }, false), X.call(this, e2, "keyup", (e3) => {
            "Return" === e3.key && Pe.focusFirstMenuItem.call(this, null, true);
          });
        }, createMenuItem({ value: e2, list: t2, type: i2, title: s2, badge: n2 = null, checked: a2 = false }) {
          const l2 = D(this.config.selectors.inputs[i2]), r2 = $("button", x(l2, { type: "button", role: "menuitemradio", class: `${this.config.classNames.control} ${l2.class ? l2.class : ""}`.trim(), "aria-checked": a2, value: e2 })), o2 = $("span");
          o2.innerHTML = s2, S.element(n2) && o2.appendChild(n2), r2.appendChild(o2), Object.defineProperty(r2, "checked", { enumerable: true, get: () => "true" === r2.getAttribute("aria-checked"), set(e3) {
            e3 && Array.from(r2.parentNode.children).filter((e4) => V(e4, '[role="menuitemradio"]')).forEach((e4) => e4.setAttribute("aria-checked", "false")), r2.setAttribute("aria-checked", e3 ? "true" : "false");
          } }), this.listeners.bind(r2, "click keyup", (t3) => {
            if (!S.keyboardEvent(t3) || " " === t3.key) {
              switch (t3.preventDefault(), t3.stopPropagation(), r2.checked = true, i2) {
                case "language":
                  this.currentTrack = Number(e2);
                  break;
                case "quality":
                  this.quality = e2;
                  break;
                case "speed":
                  this.speed = parseFloat(e2);
              }
              Pe.showMenuPanel.call(this, "home", S.keyboardEvent(t3));
            }
          }, i2, false), Pe.bindMenuItemShortcuts.call(this, r2, i2), t2.appendChild(r2);
        }, formatTime(e2 = 0, t2 = false) {
          if (!S.number(e2)) return e2;
          return Ee(e2, Ce(this.duration) > 0, t2);
        }, updateTimeDisplay(e2 = null, t2 = 0, i2 = false) {
          S.element(e2) && S.number(t2) && (e2.innerText = Pe.formatTime(t2, i2));
        }, updateVolume() {
          this.supported.ui && (S.element(this.elements.inputs.volume) && Pe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), S.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        }, setRange(e2, t2 = 0) {
          S.element(e2) && (e2.value = t2, Pe.updateRangeFill.call(this, e2));
        }, updateProgress(e2) {
          if (!this.supported.ui || !S.event(e2)) return;
          let t2 = 0;
          const i2 = (e3, t3) => {
            const i3 = S.number(t3) ? t3 : 0, s3 = S.element(e3) ? e3 : this.elements.display.buffer;
            if (S.element(s3)) {
              s3.value = i3;
              const e4 = s3.getElementsByTagName("span")[0];
              S.element(e4) && (e4.childNodes[0].nodeValue = i3);
            }
          };
          if (e2) switch (e2.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              s2 = this.currentTime, n2 = this.duration, t2 = 0 === s2 || 0 === n2 || Number.isNaN(s2) || Number.isNaN(n2) ? 0 : (s2 / n2 * 100).toFixed(2), "timeupdate" === e2.type && Pe.setRange.call(this, this.elements.inputs.seek, t2);
              break;
            case "playing":
            case "progress":
              i2(this.elements.display.buffer, 100 * this.buffered);
          }
          var s2, n2;
        }, updateRangeFill(e2) {
          const t2 = S.event(e2) ? e2.target : e2;
          if (S.element(t2) && "range" === t2.getAttribute("type")) {
            if (V(t2, this.config.selectors.inputs.seek)) {
              t2.setAttribute("aria-valuenow", this.currentTime);
              const e3 = Pe.formatTime(this.currentTime), i2 = Pe.formatTime(this.duration), s2 = ve.get("seekLabel", this.config);
              t2.setAttribute("aria-valuetext", s2.replace("{currentTime}", e3).replace("{duration}", i2));
            } else if (V(t2, this.config.selectors.inputs.volume)) {
              const e3 = 100 * t2.value;
              t2.setAttribute("aria-valuenow", e3), t2.setAttribute("aria-valuetext", `${e3.toFixed(1)}%`);
            } else t2.setAttribute("aria-valuenow", t2.value);
            (M.isWebKit || M.isIPadOS) && t2.style.setProperty("--value", t2.value / t2.max * 100 + "%");
          }
        }, updateSeekTooltip(e2) {
          var t2, i2;
          if (!this.config.tooltips.seek || !S.element(this.elements.inputs.seek) || !S.element(this.elements.display.seekTooltip) || 0 === this.duration) return;
          const s2 = this.elements.display.seekTooltip, n2 = `${this.config.classNames.tooltip}--visible`, a2 = (e3) => R(s2, n2, e3);
          if (this.touch) return void a2(false);
          let l2 = 0;
          const r2 = this.elements.progress.getBoundingClientRect();
          if (S.event(e2)) l2 = 100 / r2.width * (e2.pageX - r2.left);
          else {
            if (!F(s2, n2)) return;
            l2 = parseFloat(s2.style.left, 10);
          }
          l2 < 0 ? l2 = 0 : l2 > 100 && (l2 = 100);
          const o2 = this.duration / 100 * l2;
          s2.innerText = Pe.formatTime(o2);
          const c2 = null === (t2 = this.config.markers) || void 0 === t2 || null === (i2 = t2.points) || void 0 === i2 ? void 0 : i2.find(({ time: e3 }) => e3 === Math.round(o2));
          c2 && s2.insertAdjacentHTML("afterbegin", `${c2.label}<br>`), s2.style.left = `${l2}%`, S.event(e2) && ["mouseenter", "mouseleave"].includes(e2.type) && a2("mouseenter" === e2.type);
        }, timeUpdate(e2) {
          const t2 = !S.element(this.elements.display.duration) && this.config.invertTime;
          Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, t2 ? this.duration - this.currentTime : this.currentTime, t2), e2 && "timeupdate" === e2.type && this.media.seeking || Pe.updateProgress.call(this, e2);
        }, durationUpdate() {
          if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
          if (this.duration >= 2 ** 32) return H(this.elements.display.currentTime, true), void H(this.elements.progress, true);
          S.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
          const e2 = S.element(this.elements.display.duration);
          !e2 && this.config.displayDuration && this.paused && Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e2 && Pe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pe.setMarkers.call(this), Pe.updateSeekTooltip.call(this);
        }, toggleMenuButton(e2, t2) {
          H(this.elements.settings.buttons[e2], !t2);
        }, updateSetting(e2, t2, i2) {
          const s2 = this.elements.settings.panels[e2];
          let n2 = null, a2 = t2;
          if ("captions" === e2) n2 = this.currentTrack;
          else {
            if (n2 = S.empty(i2) ? this[e2] : i2, S.empty(n2) && (n2 = this.config[e2].default), !S.empty(this.options[e2]) && !this.options[e2].includes(n2)) return void this.debug.warn(`Unsupported value of '${n2}' for ${e2}`);
            if (!this.config[e2].options.includes(n2)) return void this.debug.warn(`Disabled value of '${n2}' for ${e2}`);
          }
          if (S.element(a2) || (a2 = s2 && s2.querySelector('[role="menu"]')), !S.element(a2)) return;
          this.elements.settings.buttons[e2].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = Pe.getLabel.call(this, e2, n2);
          const l2 = a2 && a2.querySelector(`[value="${n2}"]`);
          S.element(l2) && (l2.checked = true);
        }, getLabel(e2, t2) {
          switch (e2) {
            case "speed":
              return 1 === t2 ? ve.get("normal", this.config) : `${t2}&times;`;
            case "quality":
              if (S.number(t2)) {
                const e3 = ve.get(`qualityLabel.${t2}`, this.config);
                return e3.length ? e3 : `${t2}p`;
              }
              return ge(t2);
            case "captions":
              return xe.getLabel.call(this);
            default:
              return null;
          }
        }, setQualityMenu(e2) {
          if (!S.element(this.elements.settings.panels.quality)) return;
          const t2 = "quality", i2 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
          S.array(e2) && (this.options.quality = se(e2).filter((e3) => this.config.quality.options.includes(e3)));
          const s2 = !S.empty(this.options.quality) && this.options.quality.length > 1;
          if (Pe.toggleMenuButton.call(this, t2, s2), j(i2), Pe.checkMenu.call(this), !s2) return;
          const n2 = (e3) => {
            const t3 = ve.get(`qualityBadge.${e3}`, this.config);
            return t3.length ? Pe.createBadge.call(this, t3) : null;
          };
          this.options.quality.sort((e3, t3) => {
            const i3 = this.config.quality.options;
            return i3.indexOf(e3) > i3.indexOf(t3) ? 1 : -1;
          }).forEach((e3) => {
            Pe.createMenuItem.call(this, { value: e3, list: i2, type: t2, title: Pe.getLabel.call(this, "quality", e3), badge: n2(e3) });
          }), Pe.updateSetting.call(this, t2, i2);
        }, setCaptionsMenu() {
          if (!S.element(this.elements.settings.panels.captions)) return;
          const e2 = "captions", t2 = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i2 = xe.getTracks.call(this), s2 = Boolean(i2.length);
          if (Pe.toggleMenuButton.call(this, e2, s2), j(t2), Pe.checkMenu.call(this), !s2) return;
          const n2 = i2.map((e3, i3) => ({ value: i3, checked: this.captions.toggled && this.currentTrack === i3, title: xe.getLabel.call(this, e3), badge: e3.language && Pe.createBadge.call(this, e3.language.toUpperCase()), list: t2, type: "language" }));
          n2.unshift({ value: -1, checked: !this.captions.toggled, title: ve.get("disabled", this.config), list: t2, type: "language" }), n2.forEach(Pe.createMenuItem.bind(this)), Pe.updateSetting.call(this, e2, t2);
        }, setSpeedMenu() {
          if (!S.element(this.elements.settings.panels.speed)) return;
          const e2 = "speed", t2 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
          this.options.speed = this.options.speed.filter((e3) => e3 >= this.minimumSpeed && e3 <= this.maximumSpeed);
          const i2 = !S.empty(this.options.speed) && this.options.speed.length > 1;
          Pe.toggleMenuButton.call(this, e2, i2), j(t2), Pe.checkMenu.call(this), i2 && (this.options.speed.forEach((i3) => {
            Pe.createMenuItem.call(this, { value: i3, list: t2, type: e2, title: Pe.getLabel.call(this, "speed", i3) });
          }), Pe.updateSetting.call(this, e2, t2));
        }, checkMenu() {
          const { buttons: e2 } = this.elements.settings, t2 = !S.empty(e2) && Object.values(e2).some((e3) => !e3.hidden);
          H(this.elements.settings.menu, !t2);
        }, focusFirstMenuItem(e2, t2 = false) {
          if (this.elements.settings.popup.hidden) return;
          let i2 = e2;
          S.element(i2) || (i2 = Object.values(this.elements.settings.panels).find((e3) => !e3.hidden));
          const s2 = i2.querySelector('[role^="menuitem"]');
          W.call(this, s2, t2);
        }, toggleMenu(e2) {
          const { popup: t2 } = this.elements.settings, i2 = this.elements.buttons.settings;
          if (!S.element(t2) || !S.element(i2)) return;
          const { hidden: s2 } = t2;
          let n2 = s2;
          if (S.boolean(e2)) n2 = e2;
          else if (S.keyboardEvent(e2) && "Escape" === e2.key) n2 = false;
          else if (S.event(e2)) {
            const s3 = S.function(e2.composedPath) ? e2.composedPath()[0] : e2.target, a2 = t2.contains(s3);
            if (a2 || !a2 && e2.target !== i2 && n2) return;
          }
          i2.setAttribute("aria-expanded", n2), H(t2, !n2), R(this.elements.container, this.config.classNames.menu.open, n2), n2 && S.keyboardEvent(e2) ? Pe.focusFirstMenuItem.call(this, null, true) : n2 || s2 || W.call(this, i2, S.keyboardEvent(e2));
        }, getMenuSize(e2) {
          const t2 = e2.cloneNode(true);
          t2.style.position = "absolute", t2.style.opacity = 0, t2.removeAttribute("hidden"), e2.parentNode.appendChild(t2);
          const i2 = t2.scrollWidth, s2 = t2.scrollHeight;
          return O(t2), { width: i2, height: s2 };
        }, showMenuPanel(e2 = "", t2 = false) {
          const i2 = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e2}`);
          if (!S.element(i2)) return;
          const s2 = i2.parentNode, n2 = Array.from(s2.children).find((e3) => !e3.hidden);
          if (K.transitions && !K.reducedMotion) {
            s2.style.width = `${n2.scrollWidth}px`, s2.style.height = `${n2.scrollHeight}px`;
            const e3 = Pe.getMenuSize.call(this, i2), t3 = (e4) => {
              e4.target === s2 && ["width", "height"].includes(e4.propertyName) && (s2.style.width = "", s2.style.height = "", J.call(this, s2, E, t3));
            };
            X.call(this, s2, E, t3), s2.style.width = `${e3.width}px`, s2.style.height = `${e3.height}px`;
          }
          H(n2, true), H(i2, false), Pe.focusFirstMenuItem.call(this, i2, t2);
        }, setDownloadUrl() {
          const e2 = this.elements.buttons.download;
          S.element(e2) && e2.setAttribute("href", this.download);
        }, create(e2) {
          const { bindMenuItemShortcuts: t2, createButton: i2, createProgress: s2, createRange: n2, createTime: a2, setQualityMenu: l2, setSpeedMenu: r2, showMenuPanel: o2 } = Pe;
          this.elements.controls = null, S.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i2.call(this, "play-large"));
          const c2 = $("div", D(this.config.selectors.controls.wrapper));
          this.elements.controls = c2;
          const u2 = { class: "plyr__controls__item" };
          return se(S.array(this.config.controls) ? this.config.controls : []).forEach((l3) => {
            if ("restart" === l3 && c2.appendChild(i2.call(this, "restart", u2)), "rewind" === l3 && c2.appendChild(i2.call(this, "rewind", u2)), "play" === l3 && c2.appendChild(i2.call(this, "play", u2)), "fast-forward" === l3 && c2.appendChild(i2.call(this, "fast-forward", u2)), "progress" === l3) {
              const t3 = $("div", { class: `${u2.class} plyr__progress__container` }), i3 = $("div", D(this.config.selectors.progress));
              if (i3.appendChild(n2.call(this, "seek", { id: `plyr-seek-${e2.id}` })), i3.appendChild(s2.call(this, "buffer")), this.config.tooltips.seek) {
                const e3 = $("span", { class: this.config.classNames.tooltip }, "00:00");
                i3.appendChild(e3), this.elements.display.seekTooltip = e3;
              }
              this.elements.progress = i3, t3.appendChild(this.elements.progress), c2.appendChild(t3);
            }
            if ("current-time" === l3 && c2.appendChild(a2.call(this, "currentTime", u2)), "duration" === l3 && c2.appendChild(a2.call(this, "duration", u2)), "mute" === l3 || "volume" === l3) {
              let { volume: t3 } = this.elements;
              if (S.element(t3) && c2.contains(t3) || (t3 = $("div", x({}, u2, { class: `${u2.class} plyr__volume`.trim() })), this.elements.volume = t3, c2.appendChild(t3)), "mute" === l3 && t3.appendChild(i2.call(this, "mute")), "volume" === l3 && !M.isIos && !M.isIPadOS) {
                const i3 = { max: 1, step: 0.05, value: this.config.volume };
                t3.appendChild(n2.call(this, "volume", x(i3, { id: `plyr-volume-${e2.id}` })));
              }
            }
            if ("captions" === l3 && c2.appendChild(i2.call(this, "captions", u2)), "settings" === l3 && !S.empty(this.config.settings)) {
              const s3 = $("div", x({}, u2, { class: `${u2.class} plyr__menu`.trim(), hidden: "" }));
              s3.appendChild(i2.call(this, "settings", { "aria-haspopup": true, "aria-controls": `plyr-settings-${e2.id}`, "aria-expanded": false }));
              const n3 = $("div", { class: "plyr__menu__container", id: `plyr-settings-${e2.id}`, hidden: "" }), a3 = $("div"), l4 = $("div", { id: `plyr-settings-${e2.id}-home` }), r3 = $("div", { role: "menu" });
              l4.appendChild(r3), a3.appendChild(l4), this.elements.settings.panels.home = l4, this.config.settings.forEach((i3) => {
                const s4 = $("button", x(D(this.config.selectors.buttons.settings), { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`, role: "menuitem", "aria-haspopup": true, hidden: "" }));
                t2.call(this, s4, i3), X.call(this, s4, "click", () => {
                  o2.call(this, i3, false);
                });
                const n4 = $("span", null, ve.get(i3, this.config)), l5 = $("span", { class: this.config.classNames.menu.value });
                l5.innerHTML = e2[i3], n4.appendChild(l5), s4.appendChild(n4), r3.appendChild(s4);
                const c3 = $("div", { id: `plyr-settings-${e2.id}-${i3}`, hidden: "" }), u3 = $("button", { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--back` });
                u3.appendChild($("span", { "aria-hidden": true }, ve.get(i3, this.config))), u3.appendChild($("span", { class: this.config.classNames.hidden }, ve.get("menuBack", this.config))), X.call(this, c3, "keydown", (e3) => {
                  "ArrowLeft" === e3.key && (e3.preventDefault(), e3.stopPropagation(), o2.call(this, "home", true));
                }, false), X.call(this, u3, "click", () => {
                  o2.call(this, "home", false);
                }), c3.appendChild(u3), c3.appendChild($("div", { role: "menu" })), a3.appendChild(c3), this.elements.settings.buttons[i3] = s4, this.elements.settings.panels[i3] = c3;
              }), n3.appendChild(a3), s3.appendChild(n3), c2.appendChild(s3), this.elements.settings.popup = n3, this.elements.settings.menu = s3;
            }
            if ("pip" === l3 && K.pip && c2.appendChild(i2.call(this, "pip", u2)), "airplay" === l3 && K.airplay && c2.appendChild(i2.call(this, "airplay", u2)), "download" === l3) {
              const e3 = x({}, u2, { element: "a", href: this.download, target: "_blank" });
              this.isHTML5 && (e3.download = "");
              const { download: t3 } = this.config.urls;
              !S.url(t3) && this.isEmbed && x(e3, { icon: `logo-${this.provider}`, label: this.provider }), c2.appendChild(i2.call(this, "download", e3));
            }
            "fullscreen" === l3 && c2.appendChild(i2.call(this, "fullscreen", u2));
          }), this.isHTML5 && l2.call(this, de.getQualityOptions.call(this)), r2.call(this), c2;
        }, inject() {
          if (this.config.loadSprite) {
            const e3 = Pe.getIconUrl.call(this);
            e3.cors && ke(e3.url, "sprite-plyr");
          }
          this.id = Math.floor(1e4 * Math.random());
          let e2 = null;
          this.elements.controls = null;
          const t2 = { id: this.id, seektime: this.config.seekTime, title: this.config.title };
          let i2 = true;
          S.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t2)), this.config.controls || (this.config.controls = []), S.element(this.config.controls) || S.string(this.config.controls) ? e2 = this.config.controls : (e2 = Pe.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: xe.getLabel.call(this) }), i2 = false);
          let s2;
          i2 && S.string(this.config.controls) && (e2 = ((e3) => {
            let i3 = e3;
            return Object.entries(t2).forEach(([e4, t3]) => {
              i3 = pe(i3, `{${e4}}`, t3);
            }), i3;
          })(e2)), S.string(this.config.selectors.controls.container) && (s2 = document.querySelector(this.config.selectors.controls.container)), S.element(s2) || (s2 = this.elements.container);
          if (s2[S.element(e2) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e2), S.element(this.elements.controls) || Pe.findElements.call(this), !S.empty(this.elements.buttons)) {
            const e3 = (e4) => {
              const t3 = this.config.classNames.controlPressed;
              e4.setAttribute("aria-pressed", "false"), Object.defineProperty(e4, "pressed", { configurable: true, enumerable: true, get: () => F(e4, t3), set(i3 = false) {
                R(e4, t3, i3), e4.setAttribute("aria-pressed", i3 ? "true" : "false");
              } });
            };
            Object.values(this.elements.buttons).filter(Boolean).forEach((t3) => {
              S.array(t3) || S.nodeList(t3) ? Array.from(t3).filter(Boolean).forEach(e3) : e3(t3);
            });
          }
          if (M.isEdge && P(s2), this.config.tooltips.controls) {
            const { classNames: e3, selectors: t3 } = this.config, i3 = `${t3.controls.wrapper} ${t3.labels} .${e3.hidden}`, s3 = U.call(this, i3);
            Array.from(s3).forEach((e4) => {
              R(e4, this.config.classNames.hidden, false), R(e4, this.config.classNames.tooltip, true);
            });
          }
        }, setMediaMetadata() {
          try {
            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({ title: this.config.mediaMetadata.title, artist: this.config.mediaMetadata.artist, album: this.config.mediaMetadata.album, artwork: this.config.mediaMetadata.artwork }));
          } catch (e2) {
          }
        }, setMarkers() {
          var e2, t2;
          if (!this.duration || this.elements.markers) return;
          const i2 = null === (e2 = this.config.markers) || void 0 === e2 || null === (t2 = e2.points) || void 0 === t2 ? void 0 : t2.filter(({ time: e3 }) => e3 > 0 && e3 < this.duration);
          if (null == i2 || !i2.length) return;
          const s2 = document.createDocumentFragment(), n2 = document.createDocumentFragment();
          let a2 = null;
          const l2 = `${this.config.classNames.tooltip}--visible`, r2 = (e3) => R(a2, l2, e3);
          i2.forEach((e3) => {
            const t3 = $("span", { class: this.config.classNames.marker }, ""), i3 = e3.time / this.duration * 100 + "%";
            a2 && (t3.addEventListener("mouseenter", () => {
              e3.label || (a2.style.left = i3, a2.innerHTML = e3.label, r2(true));
            }), t3.addEventListener("mouseleave", () => {
              r2(false);
            })), t3.addEventListener("click", () => {
              this.currentTime = e3.time;
            }), t3.style.left = i3, n2.appendChild(t3);
          }), s2.appendChild(n2), this.config.tooltips.seek || (a2 = $("span", { class: this.config.classNames.tooltip }, ""), s2.appendChild(a2)), this.elements.markers = { points: n2, tip: a2 }, this.elements.progress.appendChild(s2);
        } };
        function Me(e2, t2 = true) {
          let i2 = e2;
          if (t2) {
            const e3 = document.createElement("a");
            e3.href = i2, i2 = e3.href;
          }
          try {
            return new URL(i2);
          } catch (e3) {
            return null;
          }
        }
        function Ne(e2) {
          const t2 = new URLSearchParams();
          return S.object(e2) && Object.entries(e2).forEach(([e3, i2]) => {
            t2.set(e3, i2);
          }), t2;
        }
        const xe = { setup() {
          if (!this.supported.ui) return;
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !K.textTracks) return void (S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this));
          var e2, t2;
          if (S.element(this.elements.captions) || (this.elements.captions = $("div", D(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e2 = this.elements.captions, t2 = this.elements.wrapper, S.element(e2) && S.element(t2) && t2.parentNode.insertBefore(e2, t2.nextSibling)), M.isIE && window.URL) {
            const e3 = this.media.querySelectorAll("track");
            Array.from(e3).forEach((e4) => {
              const t3 = e4.getAttribute("src"), i3 = Me(t3);
              null !== i3 && i3.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i3.protocol) && Te(t3, "blob").then((t4) => {
                e4.setAttribute("src", window.URL.createObjectURL(t4));
              }).catch(() => {
                O(e4);
              });
            });
          }
          const i2 = se((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e3) => e3.split("-")[0]));
          let s2 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
          "auto" === s2 && ([s2] = i2);
          let n2 = this.storage.get("captions");
          if (S.boolean(n2) || ({ active: n2 } = this.config.captions), Object.assign(this.captions, { toggled: false, active: n2, language: s2, languages: i2 }), this.isHTML5) {
            const e3 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
            X.call(this, this.media.textTracks, e3, xe.update.bind(this));
          }
          setTimeout(xe.update.bind(this), 0);
        }, update() {
          const e2 = xe.getTracks.call(this, true), { active: t2, language: i2, meta: s2, currentTrackNode: n2 } = this.captions, a2 = Boolean(e2.find((e3) => e3.language === i2));
          this.isHTML5 && this.isVideo && e2.filter((e3) => !s2.get(e3)).forEach((e3) => {
            this.debug.log("Track added", e3), s2.set(e3, { default: "showing" === e3.mode }), "showing" === e3.mode && (e3.mode = "hidden"), X.call(this, e3, "cuechange", () => xe.updateCues.call(this));
          }), (a2 && this.language !== i2 || !e2.includes(n2)) && (xe.setLanguage.call(this, i2), xe.toggle.call(this, t2 && a2)), this.elements && R(this.elements.container, this.config.classNames.captions.enabled, !S.empty(e2)), S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this);
        }, toggle(e2, t2 = true) {
          if (!this.supported.ui) return;
          const { toggled: i2 } = this.captions, s2 = this.config.classNames.captions.active, n2 = S.nullOrUndefined(e2) ? !i2 : e2;
          if (n2 !== i2) {
            if (t2 || (this.captions.active = n2, this.storage.set({ captions: n2 })), !this.language && n2 && !t2) {
              const e3 = xe.getTracks.call(this), t3 = xe.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
              return this.captions.language = t3.language, void xe.set.call(this, e3.indexOf(t3));
            }
            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n2), R(this.elements.container, s2, n2), this.captions.toggled = n2, Pe.updateSetting.call(this, "captions"), Z.call(this, this.media, n2 ? "captionsenabled" : "captionsdisabled");
          }
          setTimeout(() => {
            n2 && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
          });
        }, set(e2, t2 = true) {
          const i2 = xe.getTracks.call(this);
          if (-1 !== e2) if (S.number(e2)) if (e2 in i2) {
            if (this.captions.currentTrack !== e2) {
              this.captions.currentTrack = e2;
              const s2 = i2[e2], { language: n2 } = s2 || {};
              this.captions.currentTrackNode = s2, Pe.updateSetting.call(this, "captions"), t2 || (this.captions.language = n2, this.storage.set({ language: n2 })), this.isVimeo && this.embed.enableTextTrack(n2), Z.call(this, this.media, "languagechange");
            }
            xe.toggle.call(this, true, t2), this.isHTML5 && this.isVideo && xe.updateCues.call(this);
          } else this.debug.warn("Track not found", e2);
          else this.debug.warn("Invalid caption argument", e2);
          else xe.toggle.call(this, false, t2);
        }, setLanguage(e2, t2 = true) {
          if (!S.string(e2)) return void this.debug.warn("Invalid language argument", e2);
          const i2 = e2.toLowerCase();
          this.captions.language = i2;
          const s2 = xe.getTracks.call(this), n2 = xe.findTrack.call(this, [i2]);
          xe.set.call(this, s2.indexOf(n2), t2);
        }, getTracks(e2 = false) {
          return Array.from((this.media || {}).textTracks || []).filter((t2) => !this.isHTML5 || e2 || this.captions.meta.has(t2)).filter((e3) => ["captions", "subtitles"].includes(e3.kind));
        }, findTrack(e2, t2 = false) {
          const i2 = xe.getTracks.call(this), s2 = (e3) => Number((this.captions.meta.get(e3) || {}).default), n2 = Array.from(i2).sort((e3, t3) => s2(t3) - s2(e3));
          let a2;
          return e2.every((e3) => (a2 = n2.find((t3) => t3.language === e3), !a2)), a2 || (t2 ? n2[0] : void 0);
        }, getCurrentTrack() {
          return xe.getTracks.call(this)[this.currentTrack];
        }, getLabel(e2) {
          let t2 = e2;
          return !S.track(t2) && K.textTracks && this.captions.toggled && (t2 = xe.getCurrentTrack.call(this)), S.track(t2) ? S.empty(t2.label) ? S.empty(t2.language) ? ve.get("enabled", this.config) : e2.language.toUpperCase() : t2.label : ve.get("disabled", this.config);
        }, updateCues(e2) {
          if (!this.supported.ui) return;
          if (!S.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
          if (!S.nullOrUndefined(e2) && !Array.isArray(e2)) return void this.debug.warn("updateCues: Invalid input", e2);
          let t2 = e2;
          if (!t2) {
            const e3 = xe.getCurrentTrack.call(this);
            t2 = Array.from((e3 || {}).activeCues || []).map((e4) => e4.getCueAsHTML()).map(ye);
          }
          const i2 = t2.map((e3) => e3.trim()).join("\n");
          if (i2 !== this.elements.captions.innerHTML) {
            j(this.elements.captions);
            const e3 = $("span", D(this.config.selectors.caption));
            e3.innerHTML = i2, this.elements.captions.appendChild(e3), Z.call(this, this.media, "cuechange");
          }
        } }, Le = { enabled: true, title: "", debug: false, autoplay: false, autopause: true, playsinline: true, seekTime: 10, volume: 1, muted: false, duration: null, displayDuration: true, invertTime: true, toggleInvert: true, ratio: null, clickToPlay: true, hideControls: true, resetOnEnd: false, disableContextMenu: true, loadSprite: true, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: false, onChange: null }, loop: { active: false }, speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: true, global: false }, tooltips: { controls: false, seek: true }, captions: { active: false, language: "auto", update: false }, fullscreen: { enabled: true, fallback: true, iosNative: false }, storage: { enabled: true, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/oembed.json?url={0}" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", marker: "plyr__progress__marker", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id", hash: "data-plyr-embed-hash" } }, ads: { enabled: false, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: false, src: "" }, vimeo: { byline: false, portrait: false, title: false, speed: true, transparent: false, customControls: true, referrerPolicy: null, premium: false }, youtube: { rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: true, noCookie: false }, mediaMetadata: { title: "", artist: "", album: "", artwork: [] }, markers: { enabled: false, points: [] } }, Ie = "picture-in-picture", $e = "inline", _e = { html5: "html5", youtube: "youtube", vimeo: "vimeo" }, Oe = "audio", je = "video";
        const qe = () => {
        };
        class De {
          constructor(e2 = false) {
            this.enabled = window.console && e2, this.enabled && this.log("Debugging enabled");
          }
          get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : qe;
          }
          get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : qe;
          }
          get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : qe;
          }
        }
        class He {
          constructor(t2) {
            e(this, "onChange", () => {
              if (!this.supported) return;
              const e2 = this.player.elements.buttons.fullscreen;
              S.element(e2) && (e2.pressed = this.active);
              const t3 = this.target === this.player.media ? this.target : this.player.elements.container;
              Z.call(this.player, t3, this.active ? "enterfullscreen" : "exitfullscreen", true);
            }), e(this, "toggleFallback", (e2 = false) => {
              if (e2 ? this.scrollPosition = { x: window.scrollX ?? 0, y: window.scrollY ?? 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e2 ? "hidden" : "", R(this.target, this.player.config.classNames.fullscreen.fallback, e2), M.isIos) {
                let t3 = document.head.querySelector('meta[name="viewport"]');
                const i2 = "viewport-fit=cover";
                t3 || (t3 = document.createElement("meta"), t3.setAttribute("name", "viewport"));
                const s2 = S.string(t3.content) && t3.content.includes(i2);
                e2 ? (this.cleanupViewport = !s2, s2 || (t3.content += `,${i2}`)) : this.cleanupViewport && (t3.content = t3.content.split(",").filter((e3) => e3.trim() !== i2).join(","));
              }
              this.onChange();
            }), e(this, "trapFocus", (e2) => {
              if (M.isIos || M.isIPadOS || !this.active || "Tab" !== e2.key) return;
              const t3 = document.activeElement, i2 = U.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s2] = i2, n2 = i2[i2.length - 1];
              t3 !== n2 || e2.shiftKey ? t3 === s2 && e2.shiftKey && (n2.focus(), e2.preventDefault()) : (s2.focus(), e2.preventDefault());
            }), e(this, "update", () => {
              if (this.supported) {
                let e2;
                e2 = this.forceFallback ? "Fallback (forced)" : He.nativeSupported ? "Native" : "Fallback", this.player.debug.log(`${e2} fullscreen enabled`);
              } else this.player.debug.log("Fullscreen not supported and fallback disabled");
              R(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
            }), e(this, "enter", () => {
              this.supported && (M.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !He.nativeSupported || this.forceFallback ? this.toggleFallback(true) : this.prefix ? S.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({ navigationUI: "hide" }));
            }), e(this, "exit", () => {
              if (this.supported) if (M.isIos && this.player.config.fullscreen.iosNative) this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), ie(this.player.play());
              else if (!He.nativeSupported || this.forceFallback) this.toggleFallback(false);
              else if (this.prefix) {
                if (!S.empty(this.prefix)) {
                  const e2 = "moz" === this.prefix ? "Cancel" : "Exit";
                  document[`${this.prefix}${e2}${this.property}`]();
                }
              } else (document.cancelFullScreen || document.exitFullscreen).call(document);
            }), e(this, "toggle", () => {
              this.active ? this.exit() : this.enter();
            }), this.player = t2, this.prefix = He.prefix, this.property = He.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = "force" === t2.config.fullscreen.fallback, this.player.elements.fullscreen = t2.config.fullscreen.container && function(e2, t3) {
              const { prototype: i2 } = Element;
              return (i2.closest || function() {
                let e3 = this;
                do {
                  if (V.matches(e3, t3)) return e3;
                  e3 = e3.parentElement || e3.parentNode;
                } while (null !== e3 && 1 === e3.nodeType);
                return null;
              }).call(e2, t3);
            }(this.player.elements.container, t2.config.fullscreen.container), X.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
              this.onChange();
            }), X.call(this.player, this.player.elements.container, "dblclick", (e2) => {
              S.element(this.player.elements.controls) && this.player.elements.controls.contains(e2.target) || this.player.listeners.proxy(e2, this.toggle, "fullscreen");
            }), X.call(this, this.player.elements.container, "keydown", (e2) => this.trapFocus(e2)), this.update();
          }
          static get nativeSupported() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
          }
          get useNative() {
            return He.nativeSupported && !this.forceFallback;
          }
          static get prefix() {
            if (S.function(document.exitFullscreen)) return "";
            let e2 = "";
            return ["webkit", "moz", "ms"].some((t2) => !(!S.function(document[`${t2}ExitFullscreen`]) && !S.function(document[`${t2}CancelFullScreen`])) && (e2 = t2, true)), e2;
          }
          static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
          }
          get supported() {
            return [this.player.config.fullscreen.enabled, this.player.isVideo, He.nativeSupported || this.player.config.fullscreen.fallback, !this.player.isYouTube || He.nativeSupported || !M.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative].every(Boolean);
          }
          get active() {
            if (!this.supported) return false;
            if (!He.nativeSupported || this.forceFallback) return F(this.target, this.player.config.classNames.fullscreen.fallback);
            const e2 = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
            return e2 && e2.shadowRoot ? e2 === this.target.getRootNode().host : e2 === this.target;
          }
          get target() {
            return M.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen ?? this.player.elements.container;
          }
        }
        function Re(e2, t2 = 1) {
          return new Promise((i2, s2) => {
            const n2 = new Image(), a2 = () => {
              delete n2.onload, delete n2.onerror, (n2.naturalWidth >= t2 ? i2 : s2)(n2);
            };
            Object.assign(n2, { onload: a2, onerror: a2, src: e2 });
          });
        }
        const Fe = { addStyleHook() {
          R(this.elements.container, this.config.selectors.container.replace(".", ""), true), R(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        }, toggleNativeControls(e2 = false) {
          e2 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        }, build() {
          if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void Fe.toggleNativeControls.call(this, true);
          S.element(this.elements.controls) || (Pe.inject.call(this), this.listeners.controls()), Fe.toggleNativeControls.call(this), this.isHTML5 && xe.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe.updateVolume.call(this), Pe.timeUpdate.call(this), Pe.durationUpdate.call(this), Fe.checkPlaying.call(this), R(this.elements.container, this.config.classNames.pip.supported, K.pip && this.isHTML5 && this.isVideo), R(this.elements.container, this.config.classNames.airplay.supported, K.airplay && this.isHTML5), R(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(() => {
            Z.call(this, this.media, "ready");
          }, 0), Fe.setTitle.call(this), this.poster && Fe.setPoster.call(this, this.poster, false).catch(() => {
          }), this.config.duration && Pe.durationUpdate.call(this), this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
        }, setTitle() {
          let e2 = ve.get("play", this.config);
          if (S.string(this.config.title) && !S.empty(this.config.title) && (e2 += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t2) => {
            t2.setAttribute("aria-label", e2);
          }), this.isEmbed) {
            const e3 = B.call(this, "iframe");
            if (!S.element(e3)) return;
            const t2 = S.empty(this.config.title) ? "video" : this.config.title, i2 = ve.get("frameTitle", this.config);
            e3.setAttribute("title", i2.replace("{title}", t2));
          }
        }, togglePoster(e2) {
          R(this.elements.container, this.config.classNames.posterEnabled, e2);
        }, setPoster(e2, t2 = true) {
          return t2 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e2), this.elements.poster.removeAttribute("hidden"), te.call(this).then(() => Re(e2)).catch((t3) => {
            throw e2 === this.poster && Fe.togglePoster.call(this, false), t3;
          }).then(() => {
            if (e2 !== this.poster) throw new Error("setPoster cancelled by later call to setPoster");
          }).then(() => (Object.assign(this.elements.poster.style, { backgroundImage: `url('${e2}')`, backgroundSize: "" }), Fe.togglePoster.call(this, true), e2)));
        }, checkPlaying(e2) {
          R(this.elements.container, this.config.classNames.playing, this.playing), R(this.elements.container, this.config.classNames.paused, this.paused), R(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e3) => {
            Object.assign(e3, { pressed: this.playing }), e3.setAttribute("aria-label", ve.get(this.playing ? "pause" : "play", this.config));
          }), S.event(e2) && "timeupdate" === e2.type || Fe.toggleControls.call(this);
        }, checkLoading(e2) {
          this.loading = ["stalled", "waiting"].includes(e2.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
            R(this.elements.container, this.config.classNames.loading, this.loading), Fe.toggleControls.call(this);
          }, this.loading ? 250 : 0);
        }, toggleControls(e2) {
          const { controls: t2 } = this.elements;
          if (t2 && this.config.hideControls) {
            const i2 = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(Boolean(e2 || this.loading || this.paused || t2.pressed || t2.hover || i2));
          }
        }, migrateStyles() {
          Object.values({ ...this.media.style }).filter((e2) => !S.empty(e2) && S.string(e2) && e2.startsWith("--plyr")).forEach((e2) => {
            this.elements.container.style.setProperty(e2, this.media.style.getPropertyValue(e2)), this.media.style.removeProperty(e2);
          }), S.empty(this.media.style) && this.media.removeAttribute("style");
        } };
        class Ve {
          constructor(t2) {
            e(this, "firstTouch", () => {
              const { player: e2 } = this, { elements: t3 } = e2;
              e2.touch = true, R(t3.container, e2.config.classNames.isTouch, true);
            }), e(this, "global", (e2 = true) => {
              const { player: t3 } = this;
              t3.config.keyboard.global && Q.call(t3, window, "keydown keyup", this.handleKey, e2, false), Q.call(t3, document.body, "click", this.toggleMenu, e2), G.call(t3, document.body, "touchstart", this.firstTouch);
            }), e(this, "container", () => {
              const { player: e2 } = this, { config: t3, elements: i2, timers: s2 } = e2;
              !t3.keyboard.global && t3.keyboard.focused && X.call(e2, i2.container, "keydown keyup", this.handleKey, false), X.call(e2, i2.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t4) => {
                const { controls: n3 } = i2;
                n3 && "enterfullscreen" === t4.type && (n3.pressed = false, n3.hover = false);
                let a3 = 0;
                ["touchstart", "touchmove", "mousemove"].includes(t4.type) && (Fe.toggleControls.call(e2, true), a3 = e2.touch ? 3e3 : 2e3), clearTimeout(s2.controls), s2.controls = setTimeout(() => Fe.toggleControls.call(e2, false), a3);
              });
              const n2 = () => {
                if (!e2.isVimeo || e2.config.vimeo.premium) return;
                const t4 = i2.wrapper, { active: s3 } = e2.fullscreen, [n3, a3] = ce.call(e2), l2 = ae(`aspect-ratio: ${n3} / ${a3}`);
                if (!s3) return void (l2 ? (t4.style.width = null, t4.style.height = null) : (t4.style.maxWidth = null, t4.style.margin = null));
                const [r2, o2] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], c2 = r2 / o2 > n3 / a3;
                l2 ? (t4.style.width = c2 ? "auto" : "100%", t4.style.height = c2 ? "100%" : "auto") : (t4.style.maxWidth = c2 ? o2 / a3 * n3 + "px" : null, t4.style.margin = c2 ? "0 auto" : null);
              }, a2 = () => {
                clearTimeout(s2.resized), s2.resized = setTimeout(n2, 50);
              };
              X.call(e2, i2.container, "enterfullscreen exitfullscreen", (t4) => {
                const { target: s3 } = e2.fullscreen;
                if (s3 !== i2.container) return;
                if (!e2.isEmbed && S.empty(e2.config.ratio)) return;
                n2();
                ("enterfullscreen" === t4.type ? X : J).call(e2, window, "resize", a2);
              });
            }), e(this, "media", () => {
              const { player: e2 } = this, { elements: t3 } = e2;
              if (X.call(e2, e2.media, "timeupdate seeking seeked", (t4) => Pe.timeUpdate.call(e2, t4)), X.call(e2, e2.media, "durationchange loadeddata loadedmetadata", (t4) => Pe.durationUpdate.call(e2, t4)), X.call(e2, e2.media, "ended", () => {
                e2.isHTML5 && e2.isVideo && e2.config.resetOnEnd && (e2.restart(), e2.pause());
              }), X.call(e2, e2.media, "progress playing seeking seeked", (t4) => Pe.updateProgress.call(e2, t4)), X.call(e2, e2.media, "volumechange", (t4) => Pe.updateVolume.call(e2, t4)), X.call(e2, e2.media, "playing play pause ended emptied timeupdate", (t4) => Fe.checkPlaying.call(e2, t4)), X.call(e2, e2.media, "waiting canplay seeked playing", (t4) => Fe.checkLoading.call(e2, t4)), e2.supported.ui && e2.config.clickToPlay && !e2.isAudio) {
                const i3 = B.call(e2, `.${e2.config.classNames.video}`);
                if (!S.element(i3)) return;
                X.call(e2, t3.container, "click", (s2) => {
                  ([t3.container, i3].includes(s2.target) || i3.contains(s2.target)) && (e2.touch && e2.config.hideControls || (e2.ended ? (this.proxy(s2, e2.restart, "restart"), this.proxy(s2, () => {
                    ie(e2.play());
                  }, "play")) : this.proxy(s2, () => {
                    ie(e2.togglePlay());
                  }, "play")));
                });
              }
              e2.supported.ui && e2.config.disableContextMenu && X.call(e2, t3.wrapper, "contextmenu", (e3) => {
                e3.preventDefault();
              }, false), X.call(e2, e2.media, "volumechange", () => {
                e2.storage.set({ volume: e2.volume, muted: e2.muted });
              }), X.call(e2, e2.media, "ratechange", () => {
                Pe.updateSetting.call(e2, "speed"), e2.storage.set({ speed: e2.speed });
              }), X.call(e2, e2.media, "qualitychange", (t4) => {
                Pe.updateSetting.call(e2, "quality", null, t4.detail.quality);
              }), X.call(e2, e2.media, "ready qualitychange", () => {
                Pe.setDownloadUrl.call(e2);
              });
              const i2 = e2.config.events.concat(["keyup", "keydown"]).join(" ");
              X.call(e2, e2.media, i2, (i3) => {
                let { detail: s2 = {} } = i3;
                "error" === i3.type && (s2 = e2.media.error), Z.call(e2, t3.container, i3.type, true, s2);
              });
            }), e(this, "proxy", (e2, t3, i2) => {
              const { player: s2 } = this, n2 = s2.config.listeners[i2];
              let a2 = true;
              S.function(n2) && (a2 = n2.call(s2, e2)), false !== a2 && S.function(t3) && t3.call(s2, e2);
            }), e(this, "bind", (e2, t3, i2, s2, n2 = true) => {
              const { player: a2 } = this, l2 = a2.config.listeners[s2], r2 = S.function(l2);
              X.call(a2, e2, t3, (e3) => this.proxy(e3, i2, s2), n2 && !r2);
            }), e(this, "controls", () => {
              const { player: e2 } = this, { elements: t3 } = e2, i2 = M.isIE ? "change" : "input";
              if (t3.buttons.play && Array.from(t3.buttons.play).forEach((t4) => {
                this.bind(t4, "click", () => {
                  ie(e2.togglePlay());
                }, "play");
              }), this.bind(t3.buttons.restart, "click", e2.restart, "restart"), this.bind(t3.buttons.rewind, "click", () => {
                e2.lastSeekTime = Date.now(), e2.rewind();
              }, "rewind"), this.bind(t3.buttons.fastForward, "click", () => {
                e2.lastSeekTime = Date.now(), e2.forward();
              }, "fastForward"), this.bind(t3.buttons.mute, "click", () => {
                e2.muted = !e2.muted;
              }, "mute"), this.bind(t3.buttons.captions, "click", () => e2.toggleCaptions()), this.bind(t3.buttons.download, "click", () => {
                Z.call(e2, e2.media, "download");
              }, "download"), this.bind(t3.buttons.fullscreen, "click", () => {
                e2.fullscreen.toggle();
              }, "fullscreen"), this.bind(t3.buttons.pip, "click", () => {
                e2.pip = "toggle";
              }, "pip"), this.bind(t3.buttons.airplay, "click", e2.airplay, "airplay"), this.bind(t3.buttons.settings, "click", (t4) => {
                t4.stopPropagation(), t4.preventDefault(), Pe.toggleMenu.call(e2, t4);
              }, null, false), this.bind(t3.buttons.settings, "keyup", (t4) => {
                [" ", "Enter"].includes(t4.key) && ("Enter" !== t4.key ? (t4.preventDefault(), t4.stopPropagation(), Pe.toggleMenu.call(e2, t4)) : Pe.focusFirstMenuItem.call(e2, null, true));
              }, null, false), this.bind(t3.settings.menu, "keydown", (t4) => {
                "Escape" === t4.key && Pe.toggleMenu.call(e2, t4);
              }), this.bind(t3.inputs.seek, "mousedown mousemove", (e3) => {
                const i3 = t3.progress.getBoundingClientRect(), s2 = 100 / i3.width * (e3.pageX - i3.left);
                e3.currentTarget.setAttribute("seek-value", s2);
              }), this.bind(t3.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t4) => {
                const i3 = t4.currentTarget, s2 = "play-on-seeked";
                if (S.keyboardEvent(t4) && !["ArrowLeft", "ArrowRight"].includes(t4.key)) return;
                e2.lastSeekTime = Date.now();
                const n2 = i3.hasAttribute(s2), a2 = ["mouseup", "touchend", "keyup"].includes(t4.type);
                n2 && a2 ? (i3.removeAttribute(s2), ie(e2.play())) : !a2 && e2.playing && (i3.setAttribute(s2, ""), e2.pause());
              }), M.isIos) {
                const t4 = U.call(e2, 'input[type="range"]');
                Array.from(t4).forEach((e3) => this.bind(e3, i2, (e4) => P(e4.target)));
              }
              this.bind(t3.inputs.seek, i2, (t4) => {
                const i3 = t4.currentTarget;
                let s2 = i3.getAttribute("seek-value");
                S.empty(s2) && (s2 = i3.value), i3.removeAttribute("seek-value"), e2.currentTime = s2 / i3.max * e2.duration;
              }, "seek"), this.bind(t3.progress, "mouseenter mouseleave mousemove", (t4) => Pe.updateSeekTooltip.call(e2, t4)), this.bind(t3.progress, "mousemove touchmove", (t4) => {
                const { previewThumbnails: i3 } = e2;
                i3 && i3.loaded && i3.startMove(t4);
              }), this.bind(t3.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t4 } = e2;
                t4 && t4.loaded && t4.endMove(false, true);
              }), this.bind(t3.progress, "mousedown touchstart", (t4) => {
                const { previewThumbnails: i3 } = e2;
                i3 && i3.loaded && i3.startScrubbing(t4);
              }), this.bind(t3.progress, "mouseup touchend", (t4) => {
                const { previewThumbnails: i3 } = e2;
                i3 && i3.loaded && i3.endScrubbing(t4);
              }), M.isWebKit && Array.from(U.call(e2, 'input[type="range"]')).forEach((t4) => {
                this.bind(t4, "input", (t5) => Pe.updateRangeFill.call(e2, t5.target));
              }), e2.config.toggleInvert && !S.element(t3.display.duration) && this.bind(t3.display.currentTime, "click", () => {
                0 !== e2.currentTime && (e2.config.invertTime = !e2.config.invertTime, Pe.timeUpdate.call(e2));
              }), this.bind(t3.inputs.volume, i2, (t4) => {
                e2.volume = t4.target.value;
              }, "volume"), this.bind(t3.controls, "mouseenter mouseleave", (i3) => {
                t3.controls.hover = !e2.touch && "mouseenter" === i3.type;
              }), t3.fullscreen && Array.from(t3.fullscreen.children).filter((e3) => !e3.contains(t3.container)).forEach((i3) => {
                this.bind(i3, "mouseenter mouseleave", (i4) => {
                  t3.controls && (t3.controls.hover = !e2.touch && "mouseenter" === i4.type);
                });
              }), this.bind(t3.controls, "mousedown mouseup touchstart touchend touchcancel", (e3) => {
                t3.controls.pressed = ["mousedown", "touchstart"].includes(e3.type);
              }), this.bind(t3.controls, "focusin", () => {
                const { config: i3, timers: s2 } = e2;
                R(t3.controls, i3.classNames.noTransition, true), Fe.toggleControls.call(e2, true), setTimeout(() => {
                  R(t3.controls, i3.classNames.noTransition, false);
                }, 0);
                const n2 = this.touch ? 3e3 : 4e3;
                clearTimeout(s2.controls), s2.controls = setTimeout(() => Fe.toggleControls.call(e2, false), n2);
              }), this.bind(t3.inputs.volume, "wheel", (t4) => {
                const i3 = t4.webkitDirectionInvertedFromDevice, [s2, n2] = [t4.deltaX, -t4.deltaY].map((e3) => i3 ? -e3 : e3), a2 = Math.sign(Math.abs(s2) > Math.abs(n2) ? s2 : n2);
                e2.increaseVolume(a2 / 50);
                const { volume: l2 } = e2.media;
                (1 === a2 && l2 < 1 || -1 === a2 && l2 > 0) && t4.preventDefault();
              }, "volume", false);
            }), this.player = t2, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
          }
          handleKey(e2) {
            const { player: t2 } = this, { elements: i2 } = t2, { key: s2, type: n2, altKey: a2, ctrlKey: l2, metaKey: r2, shiftKey: o2 } = e2, c2 = "keydown" === n2, u2 = c2 && s2 === this.lastKey;
            if (a2 || l2 || r2 || o2) return;
            if (!s2) return;
            if (c2) {
              const n3 = document.activeElement;
              if (S.element(n3)) {
                const { editable: s3 } = t2.config.selectors, { seek: a3 } = i2.inputs;
                if (n3 !== a3 && V(n3, s3)) return;
                if (" " === e2.key && V(n3, 'button, [role^="menuitem"]')) return;
              }
              switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s2) && (e2.preventDefault(), e2.stopPropagation()), s2) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  u2 || (h2 = parseInt(s2, 10), t2.currentTime = t2.duration / 10 * h2);
                  break;
                case " ":
                case "k":
                  u2 || ie(t2.togglePlay());
                  break;
                case "ArrowUp":
                  t2.increaseVolume(0.1);
                  break;
                case "ArrowDown":
                  t2.decreaseVolume(0.1);
                  break;
                case "m":
                  u2 || (t2.muted = !t2.muted);
                  break;
                case "ArrowRight":
                  t2.forward();
                  break;
                case "ArrowLeft":
                  t2.rewind();
                  break;
                case "f":
                  t2.fullscreen.toggle();
                  break;
                case "c":
                  u2 || t2.toggleCaptions();
                  break;
                case "l":
                  t2.loop = !t2.loop;
              }
              "Escape" === s2 && !t2.fullscreen.usingNative && t2.fullscreen.active && t2.fullscreen.toggle(), this.lastKey = s2;
            } else this.lastKey = null;
            var h2;
          }
          toggleMenu(e2) {
            Pe.toggleMenu.call(this.player, e2);
          }
        }
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
        var Ue = function(e2, t2) {
          return e2(t2 = { exports: {} }, t2.exports), t2.exports;
        }(function(e2, t2) {
          e2.exports = function() {
            var e3 = function() {
            }, t3 = {}, i2 = {}, s2 = {};
            function n2(e4, t4) {
              e4 = e4.push ? e4 : [e4];
              var n3, a3, l3, r3 = [], o3 = e4.length, c3 = o3;
              for (n3 = function(e5, i3) {
                i3.length && r3.push(e5), --c3 || t4(r3);
              }; o3--; ) a3 = e4[o3], (l3 = i2[a3]) ? n3(a3, l3) : (s2[a3] = s2[a3] || []).push(n3);
            }
            function a2(e4, t4) {
              if (e4) {
                var n3 = s2[e4];
                if (i2[e4] = t4, n3) for (; n3.length; ) n3[0](e4, t4), n3.splice(0, 1);
              }
            }
            function l2(t4, i3) {
              t4.call && (t4 = { success: t4 }), i3.length ? (t4.error || e3)(i3) : (t4.success || e3)(t4);
            }
            function r2(t4, i3, s3, n3) {
              var a3, l3, o3 = document, c3 = s3.async, u2 = (s3.numRetries || 0) + 1, h2 = s3.before || e3, d2 = t4.replace(/[\?|#].*$/, ""), m2 = t4.replace(/^(css|img)!/, "");
              n3 = n3 || 0, /(^css!|\.css$)/.test(d2) ? ((l3 = o3.createElement("link")).rel = "stylesheet", l3.href = m2, (a3 = "hideFocus" in l3) && l3.relList && (a3 = 0, l3.rel = "preload", l3.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d2) ? (l3 = o3.createElement("img")).src = m2 : ((l3 = o3.createElement("script")).src = t4, l3.async = void 0 === c3 || c3), l3.onload = l3.onerror = l3.onbeforeload = function(e4) {
                var o4 = e4.type[0];
                if (a3) try {
                  l3.sheet.cssText.length || (o4 = "e");
                } catch (e5) {
                  18 != e5.code && (o4 = "e");
                }
                if ("e" == o4) {
                  if ((n3 += 1) < u2) return r2(t4, i3, s3, n3);
                } else if ("preload" == l3.rel && "style" == l3.as) return l3.rel = "stylesheet";
                i3(t4, o4, e4.defaultPrevented);
              }, false !== h2(t4, l3) && o3.head.appendChild(l3);
            }
            function o2(e4, t4, i3) {
              var s3, n3, a3 = (e4 = e4.push ? e4 : [e4]).length, l3 = a3, o3 = [];
              for (s3 = function(e5, i4, s4) {
                if ("e" == i4 && o3.push(e5), "b" == i4) {
                  if (!s4) return;
                  o3.push(e5);
                }
                --a3 || t4(o3);
              }, n3 = 0; n3 < l3; n3++) r2(e4[n3], s3, i3);
            }
            function c2(e4, i3, s3) {
              var n3, r3;
              if (i3 && i3.trim && (n3 = i3), r3 = (n3 ? s3 : i3) || {}, n3) {
                if (n3 in t3) throw "LoadJS";
                t3[n3] = true;
              }
              function c3(t4, i4) {
                o2(e4, function(e5) {
                  l2(r3, e5), t4 && l2({ success: t4, error: i4 }, e5), a2(n3, e5);
                }, r3);
              }
              if (r3.returnPromise) return new Promise(c3);
              c3();
            }
            return c2.ready = function(e4, t4) {
              return n2(e4, function(e5) {
                l2(t4, e5);
              }), c2;
            }, c2.done = function(e4) {
              a2(e4, []);
            }, c2.reset = function() {
              t3 = {}, i2 = {}, s2 = {};
            }, c2.isDefined = function(e4) {
              return e4 in t3;
            }, c2;
          }();
        });
        function Be(e2) {
          return new Promise((t2, i2) => {
            Ue(e2, { success: t2, error: i2 });
          });
        }
        function We(e2) {
          e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, Z.call(this, this.media, e2 ? "play" : "pause"));
        }
        const ze = { setup() {
          const e2 = this;
          R(e2.elements.wrapper, e2.config.classNames.embed, true), e2.options.speed = e2.config.speed.options, ue.call(e2), S.object(window.Vimeo) ? ze.ready.call(e2) : Be(e2.config.urls.vimeo.sdk).then(() => {
            ze.ready.call(e2);
          }).catch((t2) => {
            e2.debug.warn("Vimeo SDK (player.js) failed to load", t2);
          });
        }, ready() {
          const e2 = this, t2 = e2.config.vimeo, { premium: i2, referrerPolicy: s2, ...n2 } = t2;
          let a2 = e2.media.getAttribute("src"), l2 = "";
          S.empty(a2) ? (a2 = e2.media.getAttribute(e2.config.attributes.embed.id), l2 = e2.media.getAttribute(e2.config.attributes.embed.hash)) : l2 = function(e3) {
            const t3 = e3.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
            return t3 && 5 === t3.length ? t3[4] : null;
          }(a2);
          const r2 = l2 ? { h: l2 } : {};
          i2 && Object.assign(n2, { controls: false, sidedock: false });
          const o2 = Ne({ loop: e2.config.loop.active, autoplay: e2.autoplay, muted: e2.muted, gesture: "media", playsinline: e2.config.playsinline, ...r2, ...n2 }), c2 = (u2 = a2, S.empty(u2) ? null : S.number(Number(u2)) ? u2 : u2.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u2);
          var u2;
          const h2 = $("iframe"), d2 = me(e2.config.urls.vimeo.iframe, c2, o2);
          if (h2.setAttribute("src", d2), h2.setAttribute("allowfullscreen", ""), h2.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), S.empty(s2) || h2.setAttribute("referrerPolicy", s2), i2 || !t2.customControls) h2.setAttribute("data-poster", e2.poster), e2.media = q(h2, e2.media);
          else {
            const t3 = $("div", { class: e2.config.classNames.embedContainer, "data-poster": e2.poster });
            t3.appendChild(h2), e2.media = q(t3, e2.media);
          }
          t2.customControls || Te(me(e2.config.urls.vimeo.api, d2)).then((t3) => {
            !S.empty(t3) && t3.thumbnail_url && Fe.setPoster.call(e2, t3.thumbnail_url).catch(() => {
            });
          }), e2.embed = new window.Vimeo.Player(h2, { autopause: e2.config.autopause, muted: e2.muted }), e2.media.paused = true, e2.media.currentTime = 0, e2.supported.ui && e2.embed.disableTextTrack(), e2.media.play = () => (We.call(e2, true), e2.embed.play()), e2.media.pause = () => (We.call(e2, false), e2.embed.pause()), e2.media.stop = () => {
            e2.pause(), e2.currentTime = 0;
          };
          let { currentTime: m2 } = e2.media;
          Object.defineProperty(e2.media, "currentTime", { get: () => m2, set(t3) {
            const { embed: i3, media: s3, paused: n3, volume: a3 } = e2, l3 = n3 && !i3.hasPlayed;
            s3.seeking = true, Z.call(e2, s3, "seeking"), Promise.resolve(l3 && i3.setVolume(0)).then(() => i3.setCurrentTime(t3)).then(() => l3 && i3.pause()).then(() => l3 && i3.setVolume(a3)).catch(() => {
            });
          } });
          let p2 = e2.config.speed.selected;
          Object.defineProperty(e2.media, "playbackRate", { get: () => p2, set(t3) {
            e2.embed.setPlaybackRate(t3).then(() => {
              p2 = t3, Z.call(e2, e2.media, "ratechange");
            }).catch(() => {
              e2.options.speed = [1];
            });
          } });
          let { volume: g2 } = e2.config;
          Object.defineProperty(e2.media, "volume", { get: () => g2, set(t3) {
            e2.embed.setVolume(t3).then(() => {
              g2 = t3, Z.call(e2, e2.media, "volumechange");
            });
          } });
          let { muted: f2 } = e2.config;
          Object.defineProperty(e2.media, "muted", { get: () => f2, set(t3) {
            const i3 = !!S.boolean(t3) && t3;
            e2.embed.setMuted(!!i3 || e2.config.muted).then(() => {
              f2 = i3, Z.call(e2, e2.media, "volumechange");
            });
          } });
          let y2, { loop: b2 } = e2.config;
          Object.defineProperty(e2.media, "loop", { get: () => b2, set(t3) {
            const i3 = S.boolean(t3) ? t3 : e2.config.loop.active;
            e2.embed.setLoop(i3).then(() => {
              b2 = i3;
            });
          } }), e2.embed.getVideoUrl().then((t3) => {
            y2 = t3, Pe.setDownloadUrl.call(e2);
          }).catch((e3) => {
            this.debug.warn(e3);
          }), Object.defineProperty(e2.media, "currentSrc", { get: () => y2 }), Object.defineProperty(e2.media, "ended", { get: () => e2.currentTime === e2.duration }), Promise.all([e2.embed.getVideoWidth(), e2.embed.getVideoHeight()]).then((t3) => {
            const [i3, s3] = t3;
            e2.embed.ratio = he(i3, s3), ue.call(this);
          }), e2.embed.setAutopause(e2.config.autopause).then((t3) => {
            e2.config.autopause = t3;
          }), e2.embed.getVideoTitle().then((t3) => {
            e2.config.title = t3, Fe.setTitle.call(this);
          }), e2.embed.getCurrentTime().then((t3) => {
            m2 = t3, Z.call(e2, e2.media, "timeupdate");
          }), e2.embed.getDuration().then((t3) => {
            e2.media.duration = t3, Z.call(e2, e2.media, "durationchange");
          }), e2.embed.getTextTracks().then((t3) => {
            e2.media.textTracks = t3, xe.setup.call(e2);
          }), e2.embed.on("cuechange", ({ cues: t3 = [] }) => {
            const i3 = t3.map((e3) => function(e4) {
              const t4 = document.createDocumentFragment(), i4 = document.createElement("div");
              return t4.appendChild(i4), i4.innerHTML = e4, t4.firstChild.innerText;
            }(e3.text));
            xe.updateCues.call(e2, i3);
          }), e2.embed.on("loaded", () => {
            if (e2.embed.getPaused().then((t3) => {
              We.call(e2, !t3), t3 || Z.call(e2, e2.media, "playing");
            }), S.element(e2.embed.element) && e2.supported.ui) {
              e2.embed.element.setAttribute("tabindex", -1);
            }
          }), e2.embed.on("bufferstart", () => {
            Z.call(e2, e2.media, "waiting");
          }), e2.embed.on("bufferend", () => {
            Z.call(e2, e2.media, "playing");
          }), e2.embed.on("play", () => {
            We.call(e2, true), Z.call(e2, e2.media, "playing");
          }), e2.embed.on("pause", () => {
            We.call(e2, false);
          }), e2.embed.on("timeupdate", (t3) => {
            e2.media.seeking = false, m2 = t3.seconds, Z.call(e2, e2.media, "timeupdate");
          }), e2.embed.on("progress", (t3) => {
            e2.media.buffered = t3.percent, Z.call(e2, e2.media, "progress"), 1 === parseInt(t3.percent, 10) && Z.call(e2, e2.media, "canplaythrough"), e2.embed.getDuration().then((t4) => {
              t4 !== e2.media.duration && (e2.media.duration = t4, Z.call(e2, e2.media, "durationchange"));
            });
          }), e2.embed.on("seeked", () => {
            e2.media.seeking = false, Z.call(e2, e2.media, "seeked");
          }), e2.embed.on("ended", () => {
            e2.media.paused = true, Z.call(e2, e2.media, "ended");
          }), e2.embed.on("error", (t3) => {
            e2.media.error = t3, Z.call(e2, e2.media, "error");
          }), t2.customControls && setTimeout(() => Fe.build.call(e2), 0);
        } };
        function Ke(e2) {
          e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, Z.call(this, this.media, e2 ? "play" : "pause"));
        }
        function Ye(e2) {
          return e2.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
        }
        const Qe = { setup() {
          if (R(this.elements.wrapper, this.config.classNames.embed, true), S.object(window.YT) && S.function(window.YT.Player)) Qe.ready.call(this);
          else {
            const e2 = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
              S.function(e2) && e2(), Qe.ready.call(this);
            }, Be(this.config.urls.youtube.sdk).catch((e3) => {
              this.debug.warn("YouTube API failed to load", e3);
            });
          }
        }, getTitle(e2) {
          Te(me(this.config.urls.youtube.api, e2)).then((e3) => {
            if (S.object(e3)) {
              const { title: t2, height: i2, width: s2 } = e3;
              this.config.title = t2, Fe.setTitle.call(this), this.embed.ratio = he(s2, i2);
            }
            ue.call(this);
          }).catch(() => {
            ue.call(this);
          });
        }, ready() {
          const e2 = this, t2 = e2.config.youtube, i2 = e2.media && e2.media.getAttribute("id");
          if (!S.empty(i2) && i2.startsWith("youtube-")) return;
          let s2 = e2.media.getAttribute("src");
          S.empty(s2) && (s2 = e2.media.getAttribute(this.config.attributes.embed.id));
          const n2 = (a2 = s2, S.empty(a2) ? null : a2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a2);
          var a2;
          const l2 = $("div", { id: `${e2.provider}-${Math.floor(1e4 * Math.random())}`, "data-poster": t2.customControls ? e2.poster : void 0 });
          if (e2.media = q(l2, e2.media), t2.customControls) {
            const t3 = (e3) => `https://i.ytimg.com/vi/${n2}/${e3}default.jpg`;
            Re(t3("maxres"), 121).catch(() => Re(t3("sd"), 121)).catch(() => Re(t3("hq"))).then((t4) => Fe.setPoster.call(e2, t4.src)).then((t4) => {
              t4.includes("maxres") || (e2.elements.poster.style.backgroundSize = "cover");
            }).catch(() => {
            });
          }
          e2.embed = new window.YT.Player(e2.media, { videoId: n2, host: Ye(t2), playerVars: x({}, { autoplay: e2.config.autoplay ? 1 : 0, hl: e2.config.hl, controls: e2.supported.ui && t2.customControls ? 0 : 1, disablekb: 1, playsinline: e2.config.playsinline && !e2.config.fullscreen.iosNative ? 1 : 0, cc_load_policy: e2.captions.active ? 1 : 0, cc_lang_pref: e2.config.captions.language, widget_referrer: window ? window.location.href : null }, t2), events: { onError(t3) {
            if (!e2.media.error) {
              const i3 = t3.data, s3 = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[i3] || "An unknown error occurred";
              e2.media.error = { code: i3, message: s3 }, Z.call(e2, e2.media, "error");
            }
          }, onPlaybackRateChange(t3) {
            const i3 = t3.target;
            e2.media.playbackRate = i3.getPlaybackRate(), Z.call(e2, e2.media, "ratechange");
          }, onReady(i3) {
            if (S.function(e2.media.play)) return;
            const s3 = i3.target;
            Qe.getTitle.call(e2, n2), e2.media.play = () => {
              Ke.call(e2, true), s3.playVideo();
            }, e2.media.pause = () => {
              Ke.call(e2, false), s3.pauseVideo();
            }, e2.media.stop = () => {
              s3.stopVideo();
            }, e2.media.duration = s3.getDuration(), e2.media.paused = true, e2.media.currentTime = 0, Object.defineProperty(e2.media, "currentTime", { get: () => Number(s3.getCurrentTime()), set(t3) {
              e2.paused && !e2.embed.hasPlayed && e2.embed.mute(), e2.media.seeking = true, Z.call(e2, e2.media, "seeking"), s3.seekTo(t3);
            } }), Object.defineProperty(e2.media, "playbackRate", { get: () => s3.getPlaybackRate(), set(e3) {
              s3.setPlaybackRate(e3);
            } });
            let { volume: a3 } = e2.config;
            Object.defineProperty(e2.media, "volume", { get: () => a3, set(t3) {
              a3 = t3, s3.setVolume(100 * a3), Z.call(e2, e2.media, "volumechange");
            } });
            let { muted: l3 } = e2.config;
            Object.defineProperty(e2.media, "muted", { get: () => l3, set(t3) {
              const i4 = S.boolean(t3) ? t3 : l3;
              l3 = i4, s3[i4 ? "mute" : "unMute"](), s3.setVolume(100 * a3), Z.call(e2, e2.media, "volumechange");
            } }), Object.defineProperty(e2.media, "currentSrc", { get: () => s3.getVideoUrl() }), Object.defineProperty(e2.media, "ended", { get: () => e2.currentTime === e2.duration });
            const r2 = s3.getAvailablePlaybackRates();
            e2.options.speed = r2.filter((t3) => e2.config.speed.options.includes(t3)), e2.supported.ui && t2.customControls && e2.media.setAttribute("tabindex", -1), Z.call(e2, e2.media, "timeupdate"), Z.call(e2, e2.media, "durationchange"), clearInterval(e2.timers.buffering), e2.timers.buffering = setInterval(() => {
              e2.media.buffered = s3.getVideoLoadedFraction(), (null === e2.media.lastBuffered || e2.media.lastBuffered < e2.media.buffered) && Z.call(e2, e2.media, "progress"), e2.media.lastBuffered = e2.media.buffered, 1 === e2.media.buffered && (clearInterval(e2.timers.buffering), Z.call(e2, e2.media, "canplaythrough"));
            }, 200), t2.customControls && setTimeout(() => Fe.build.call(e2), 50);
          }, onStateChange(i3) {
            const s3 = i3.target;
            clearInterval(e2.timers.playing);
            switch (e2.media.seeking && [1, 2].includes(i3.data) && (e2.media.seeking = false, Z.call(e2, e2.media, "seeked")), i3.data) {
              case -1:
                Z.call(e2, e2.media, "timeupdate"), e2.media.buffered = s3.getVideoLoadedFraction(), Z.call(e2, e2.media, "progress");
                break;
              case 0:
                Ke.call(e2, false), e2.media.loop ? (s3.stopVideo(), s3.playVideo()) : Z.call(e2, e2.media, "ended");
                break;
              case 1:
                t2.customControls && !e2.config.autoplay && e2.media.paused && !e2.embed.hasPlayed ? e2.media.pause() : (Ke.call(e2, true), Z.call(e2, e2.media, "playing"), e2.timers.playing = setInterval(() => {
                  Z.call(e2, e2.media, "timeupdate");
                }, 50), e2.media.duration !== s3.getDuration() && (e2.media.duration = s3.getDuration(), Z.call(e2, e2.media, "durationchange")));
                break;
              case 2:
                e2.muted || e2.embed.unMute(), Ke.call(e2, false);
                break;
              case 3:
                Z.call(e2, e2.media, "waiting");
            }
            Z.call(e2, e2.elements.container, "statechange", false, { code: i3.data });
          } } });
        } }, Xe = { setup() {
          this.media ? (R(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), R(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && R(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = $("div", { class: this.config.classNames.video }), L(this.media, this.elements.wrapper), this.elements.poster = $("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de.setup.call(this) : this.isYouTube ? Qe.setup.call(this) : this.isVimeo && ze.setup.call(this)) : this.debug.warn("No media element found!");
        } };
        class Je {
          constructor(t2) {
            e(this, "load", () => {
              this.enabled && (S.object(window.google) && S.object(window.google.ima) ? this.ready() : Be(this.player.config.urls.googleIMA.sdk).then(() => {
                this.ready();
              }).catch(() => {
                this.trigger("error", new Error("Google IMA SDK failed to load"));
              }));
            }), e(this, "ready", () => {
              var e2;
              this.enabled || ((e2 = this).manager && e2.manager.destroy(), e2.elements.displayContainer && e2.elements.displayContainer.destroy(), e2.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }), this.listeners(), this.setupIMA();
            }), e(this, "setupIMA", () => {
              this.elements.container = $("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e2) => this.onAdsManagerLoaded(e2), false), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e2) => this.onAdError(e2), false), this.requestAds();
            }), e(this, "requestAds", () => {
              const { container: e2 } = this.player.elements;
              try {
                const t3 = new google.ima.AdsRequest();
                t3.adTagUrl = this.tagUrl, t3.linearAdSlotWidth = e2.offsetWidth, t3.linearAdSlotHeight = e2.offsetHeight, t3.nonLinearAdSlotWidth = e2.offsetWidth, t3.nonLinearAdSlotHeight = e2.offsetHeight, t3.forceNonLinearFullSlot = false, t3.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t3);
              } catch (e3) {
                this.onAdError(e3);
              }
            }), e(this, "pollCountdown", (e2 = false) => {
              if (!e2) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
              this.countdownTimer = setInterval(() => {
                const e3 = Ee(Math.max(this.manager.getRemainingTime(), 0)), t3 = `${ve.get("advertisement", this.player.config)} - ${e3}`;
                this.elements.container.setAttribute("data-badge-text", t3);
              }, 100);
            }), e(this, "onAdsManagerLoaded", (e2) => {
              if (!this.enabled) return;
              const t3 = new google.ima.AdsRenderingSettings();
              t3.restoreCustomPlaybackStateOnAdBreakComplete = true, t3.enablePreloading = true, this.manager = e2.getAdsManager(this.player, t3), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e3) => this.onAdError(e3)), Object.keys(google.ima.AdEvent.Type).forEach((e3) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e3], (e4) => this.onAdEvent(e4));
              }), this.trigger("loaded");
            }), e(this, "addCuePoints", () => {
              S.empty(this.cuePoints) || this.cuePoints.forEach((e2) => {
                if (0 !== e2 && -1 !== e2 && e2 < this.player.duration) {
                  const t3 = this.player.elements.progress;
                  if (S.element(t3)) {
                    const i2 = 100 / this.player.duration * e2, s2 = $("span", { class: this.player.config.classNames.cues });
                    s2.style.left = `${i2.toString()}%`, t3.appendChild(s2);
                  }
                }
              });
            }), e(this, "onAdEvent", (e2) => {
              const { container: t3 } = this.player.elements, i2 = e2.getAd(), s2 = e2.getAdData();
              switch (((e3) => {
                Z.call(this.player, this.player.media, `ads${e3.replace(/_/g, "").toLowerCase()}`);
              })(e2.type), e2.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"), this.pollCountdown(true), i2.isLinear() || (i2.width = t3.offsetWidth, i2.height = t3.offsetHeight);
                  break;
                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  this.player.ended ? this.loadAds() : this.loader.contentComplete();
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown(), this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.LOG:
                  s2.adError && this.player.debug.warn(`Non-fatal ad error: ${s2.adError.getMessage()}`);
              }
            }), e(this, "onAdError", (e2) => {
              this.cancel(), this.player.debug.warn("Ads error", e2);
            }), e(this, "listeners", () => {
              const { container: e2 } = this.player.elements;
              let t3;
              this.player.on("canplay", () => {
                this.addCuePoints();
              }), this.player.on("ended", () => {
                this.loader.contentComplete();
              }), this.player.on("timeupdate", () => {
                t3 = this.player.currentTime;
              }), this.player.on("seeked", () => {
                const e3 = this.player.currentTime;
                S.empty(this.cuePoints) || this.cuePoints.forEach((i2, s2) => {
                  t3 < i2 && i2 < e3 && (this.manager.discardAdBreak(), this.cuePoints.splice(s2, 1));
                });
              }), window.addEventListener("resize", () => {
                this.manager && this.manager.resize(e2.offsetWidth, e2.offsetHeight, google.ima.ViewMode.NORMAL);
              });
            }), e(this, "play", () => {
              const { container: e2 } = this.player.elements;
              this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                try {
                  this.initialized || (this.manager.init(e2.offsetWidth, e2.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = true;
                } catch (e3) {
                  this.onAdError(e3);
                }
              }).catch(() => {
              });
            }), e(this, "resumeContent", () => {
              this.elements.container.style.zIndex = "", this.playing = false, ie(this.player.media.play());
            }), e(this, "pauseContent", () => {
              this.elements.container.style.zIndex = 3, this.playing = true, this.player.media.pause();
            }), e(this, "cancel", () => {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }), e(this, "loadAds", () => {
              this.managerPromise.then(() => {
                this.manager && this.manager.destroy(), this.managerPromise = new Promise((e2) => {
                  this.on("loaded", e2), this.player.debug.log(this.manager);
                }), this.initialized = false, this.requestAds();
              }).catch(() => {
              });
            }), e(this, "trigger", (e2, ...t3) => {
              const i2 = this.events[e2];
              S.array(i2) && i2.forEach((e3) => {
                S.function(e3) && e3.apply(this, t3);
              });
            }), e(this, "on", (e2, t3) => (S.array(this.events[e2]) || (this.events[e2] = []), this.events[e2].push(t3), this)), e(this, "startSafetyTimer", (e2, t3) => {
              this.player.debug.log(`Safety timer invoked from: ${t3}`), this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e2);
            }), e(this, "clearSafetyTimer", (e2) => {
              S.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e2}`), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }), this.player = t2, this.config = t2.config.ads, this.playing = false, this.initialized = false, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e2, t3) => {
              this.on("loaded", e2), this.on("error", t3);
            }), this.load();
          }
          get enabled() {
            const { config: e2 } = this;
            return this.player.isHTML5 && this.player.isVideo && e2.enabled && (!S.empty(e2.publisherId) || S.url(e2.tagUrl));
          }
          get tagUrl() {
            const { config: e2 } = this;
            if (S.url(e2.tagUrl)) return e2.tagUrl;
            return `https://go.aniview.com/api/adserver6/vast/?${Ne({ AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e2.publisherId })}`;
          }
        }
        function Ge(e2 = 0, t2 = 0, i2 = 255) {
          return Math.min(Math.max(e2, t2), i2);
        }
        const Ze = (e2) => {
          const t2 = [];
          return e2.split(/\r\n\r\n|\n\n|\r\r/).forEach((e3) => {
            const i2 = {};
            e3.split(/\r\n|\n|\r/).forEach((e4) => {
              if (S.number(i2.startTime)) {
                if (!S.empty(e4.trim()) && S.empty(i2.text)) {
                  const t3 = e4.trim().split("#xywh=");
                  [i2.text] = t3, t3[1] && ([i2.x, i2.y, i2.w, i2.h] = t3[1].split(","));
                }
              } else {
                const t3 = e4.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                t3 && (i2.startTime = 60 * Number(t3[1] || 0) * 60 + 60 * Number(t3[2]) + Number(t3[3]) + Number(`0.${t3[4]}`), i2.endTime = 60 * Number(t3[6] || 0) * 60 + 60 * Number(t3[7]) + Number(t3[8]) + Number(`0.${t3[9]}`));
              }
            }), i2.text && t2.push(i2);
          }), t2;
        }, et = (e2, t2) => {
          const i2 = {};
          return e2 > t2.width / t2.height ? (i2.width = t2.width, i2.height = 1 / e2 * t2.width) : (i2.height = t2.height, i2.width = e2 * t2.height), i2;
        };
        class tt {
          constructor(t2) {
            e(this, "load", () => {
              this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = true);
              });
            }), e(this, "getThumbnails", () => new Promise((e2) => {
              const { src: t3 } = this.player.config.previewThumbnails;
              if (S.empty(t3)) throw new Error("Missing previewThumbnails.src config attribute");
              const i2 = () => {
                this.thumbnails.sort((e3, t4) => e3.height - t4.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e2();
              };
              if (S.function(t3)) t3((e3) => {
                this.thumbnails = e3, i2();
              });
              else {
                const e3 = (S.string(t3) ? [t3] : t3).map((e4) => this.getThumbnail(e4));
                Promise.all(e3).then(i2);
              }
            })), e(this, "getThumbnail", (e2) => new Promise((t3) => {
              Te(e2).then((i2) => {
                const s2 = { frames: Ze(i2), height: null, urlPrefix: "" };
                s2.frames[0].text.startsWith("/") || s2.frames[0].text.startsWith("http://") || s2.frames[0].text.startsWith("https://") || (s2.urlPrefix = e2.substring(0, e2.lastIndexOf("/") + 1));
                const n2 = new Image();
                n2.onload = () => {
                  s2.height = n2.naturalHeight, s2.width = n2.naturalWidth, this.thumbnails.push(s2), t3();
                }, n2.src = s2.urlPrefix + s2.frames[0].text;
              });
            })), e(this, "startMove", (e2) => {
              if (this.loaded && S.event(e2) && ["touchmove", "mousemove"].includes(e2.type) && this.player.media.duration) {
                if ("touchmove" === e2.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                else {
                  var t3, i2;
                  const s2 = this.player.elements.progress.getBoundingClientRect(), n2 = 100 / s2.width * (e2.pageX - s2.left);
                  this.seekTime = this.player.media.duration * (n2 / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e2.pageX, this.elements.thumb.time.innerText = Ee(this.seekTime);
                  const a2 = null === (t3 = this.player.config.markers) || void 0 === t3 || null === (i2 = t3.points) || void 0 === i2 ? void 0 : i2.find(({ time: e3 }) => e3 === Math.round(this.seekTime));
                  a2 && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${a2.label}<br>`);
                }
                this.showImageAtCurrentTime();
              }
            }), e(this, "endMove", () => {
              this.toggleThumbContainer(false, true);
            }), e(this, "startScrubbing", (e2) => {
              (S.nullOrUndefined(e2.button) || false === e2.button || 0 === e2.button) && (this.mouseDown = true, this.player.media.duration && (this.toggleScrubbingContainer(true), this.toggleThumbContainer(false, true), this.showImageAtCurrentTime()));
            }), e(this, "endScrubbing", () => {
              this.mouseDown = false, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(false) : G.call(this.player, this.player.media, "timeupdate", () => {
                this.mouseDown || this.toggleScrubbingContainer(false);
              });
            }), e(this, "listeners", () => {
              this.player.on("play", () => {
                this.toggleThumbContainer(false, true);
              }), this.player.on("seeked", () => {
                this.toggleThumbContainer(false);
              }), this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
            }), e(this, "render", () => {
              this.elements.thumb.container = $("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = $("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              const e2 = $("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
              this.elements.thumb.time = $("span", {}, "00:00"), e2.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e2), S.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = $("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }), e(this, "destroy", () => {
              this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }), e(this, "showImageAtCurrentTime", () => {
              this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
              const e2 = this.thumbnails[0].frames.findIndex((e3) => this.seekTime >= e3.startTime && this.seekTime <= e3.endTime), t3 = e2 >= 0;
              let i2 = 0;
              this.mouseDown || this.toggleThumbContainer(t3), t3 && (this.thumbnails.forEach((t4, s2) => {
                this.loadedImages.includes(t4.frames[e2].text) && (i2 = s2);
              }), e2 !== this.showingThumb && (this.showingThumb = e2, this.loadImage(i2)));
            }), e(this, "loadImage", (e2 = 0) => {
              const t3 = this.showingThumb, i2 = this.thumbnails[e2], { urlPrefix: s2 } = i2, n2 = i2.frames[t3], a2 = i2.frames[t3].text, l2 = s2 + a2;
              if (this.currentImageElement && this.currentImageElement.dataset.filename === a2) this.showImage(this.currentImageElement, n2, e2, t3, a2, false), this.currentImageElement.dataset.index = t3, this.removeOldImages(this.currentImageElement);
              else {
                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                const i3 = new Image();
                i3.src = l2, i3.dataset.index = t3, i3.dataset.filename = a2, this.showingThumbFilename = a2, this.player.debug.log(`Loading image: ${l2}`), i3.onload = () => this.showImage(i3, n2, e2, t3, a2, true), this.loadingImage = i3, this.removeOldImages(i3);
              }
            }), e(this, "showImage", (e2, t3, i2, s2, n2, a2 = true) => {
              this.player.debug.log(`Showing thumb: ${n2}. num: ${s2}. qual: ${i2}. newimg: ${a2}`), this.setImageSizeAndOffset(e2, t3), a2 && (this.currentImageContainer.appendChild(e2), this.currentImageElement = e2, this.loadedImages.includes(n2) || this.loadedImages.push(n2)), this.preloadNearby(s2, true).then(this.preloadNearby(s2, false)).then(this.getHigherQuality(i2, e2, t3, n2));
            }), e(this, "removeOldImages", (e2) => {
              Array.from(this.currentImageContainer.children).forEach((t3) => {
                if ("img" !== t3.tagName.toLowerCase()) return;
                const i2 = this.usingSprites ? 500 : 1e3;
                if (t3.dataset.index !== e2.dataset.index && !t3.dataset.deleting) {
                  t3.dataset.deleting = true;
                  const { currentImageContainer: e3 } = this;
                  setTimeout(() => {
                    e3.removeChild(t3), this.player.debug.log(`Removing thumb: ${t3.dataset.filename}`);
                  }, i2);
                }
              });
            }), e(this, "preloadNearby", (e2, t3 = true) => new Promise((i2) => {
              setTimeout(() => {
                const s2 = this.thumbnails[0].frames[e2].text;
                if (this.showingThumbFilename === s2) {
                  let n2;
                  n2 = t3 ? this.thumbnails[0].frames.slice(e2) : this.thumbnails[0].frames.slice(0, e2).reverse();
                  let a2 = false;
                  n2.forEach((e3) => {
                    const t4 = e3.text;
                    if (t4 !== s2 && !this.loadedImages.includes(t4)) {
                      a2 = true, this.player.debug.log(`Preloading thumb filename: ${t4}`);
                      const { urlPrefix: e4 } = this.thumbnails[0], s3 = e4 + t4, n3 = new Image();
                      n3.src = s3, n3.onload = () => {
                        this.player.debug.log(`Preloaded thumb filename: ${t4}`), this.loadedImages.includes(t4) || this.loadedImages.push(t4), i2();
                      };
                    }
                  }), a2 || i2();
                }
              }, 300);
            })), e(this, "getHigherQuality", (e2, t3, i2, s2) => {
              if (e2 < this.thumbnails.length - 1) {
                let n2 = t3.naturalHeight;
                this.usingSprites && (n2 = i2.h), n2 < this.thumbContainerHeight && setTimeout(() => {
                  this.showingThumbFilename === s2 && (this.player.debug.log(`Showing higher quality thumb for: ${s2}`), this.loadImage(e2 + 1));
                }, 300);
              }
            }), e(this, "toggleThumbContainer", (e2 = false, t3 = false) => {
              const i2 = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i2, e2), !e2 && t3 && (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "toggleScrubbingContainer", (e2 = false) => {
              const t3 = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t3, e2), e2 || (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "determineContainerAutoSizing", () => {
              (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = true);
            }), e(this, "setThumbContainerSizeAndPos", () => {
              const { imageContainer: e2 } = this.elements.thumb;
              if (this.sizeSpecifiedInCSS) {
                if (e2.clientHeight > 20 && e2.clientWidth < 20) {
                  const t3 = Math.floor(e2.clientHeight * this.thumbAspectRatio);
                  e2.style.width = `${t3}px`;
                } else if (e2.clientHeight < 20 && e2.clientWidth > 20) {
                  const t3 = Math.floor(e2.clientWidth / this.thumbAspectRatio);
                  e2.style.height = `${t3}px`;
                }
              } else {
                const t3 = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                e2.style.height = `${this.thumbContainerHeight}px`, e2.style.width = `${t3}px`;
              }
              this.setThumbContainerPos();
            }), e(this, "setThumbContainerPos", () => {
              const e2 = this.player.elements.progress.getBoundingClientRect(), t3 = this.player.elements.container.getBoundingClientRect(), { container: i2 } = this.elements.thumb, s2 = t3.left - e2.left + 10, n2 = t3.right - e2.left - i2.clientWidth - 10, a2 = this.mousePosX - e2.left - i2.clientWidth / 2, l2 = Ge(a2, s2, n2);
              i2.style.left = `${l2}px`, i2.style.setProperty("--preview-arrow-offset", a2 - l2 + "px");
            }), e(this, "setScrubbingContainerSize", () => {
              const { width: e2, height: t3 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              this.elements.scrubbing.container.style.width = `${e2}px`, this.elements.scrubbing.container.style.height = `${t3}px`;
            }), e(this, "setImageSizeAndOffset", (e2, t3) => {
              if (!this.usingSprites) return;
              const i2 = this.thumbContainerHeight / t3.h;
              e2.style.height = e2.naturalHeight * i2 + "px", e2.style.width = e2.naturalWidth * i2 + "px", e2.style.left = `-${t3.x * i2}px`, e2.style.top = `-${t3.y * i2}px`;
            }), this.player = t2, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load();
          }
          get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
          }
          get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
          }
          get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
          }
          get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
          }
          get thumbContainerHeight() {
            if (this.mouseDown) {
              const { height: e2 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              return e2;
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
          get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          }
          set currentImageElement(e2) {
            this.mouseDown ? this.currentScrubbingImageElement = e2 : this.currentThumbnailImageElement = e2;
          }
        }
        const it = { insertElements(e2, t2) {
          S.string(t2) ? _(e2, this.media, { src: t2 }) : S.array(t2) && t2.forEach((t3) => {
            _(e2, this.media, t3);
          });
        }, change(e2) {
          N(e2, "sources.length") ? (de.cancelRequests.call(this), this.destroy.call(this, () => {
            this.options.quality = [], O(this.media), this.media = null, S.element(this.elements.container) && this.elements.container.removeAttribute("class");
            const { sources: t2, type: i2 } = e2, [{ provider: s2 = _e.html5, src: n2 }] = t2, a2 = "html5" === s2 ? i2 : "div", l2 = "html5" === s2 ? {} : { src: n2 };
            Object.assign(this, { provider: s2, type: i2, supported: K.check(i2, s2, this.config.playsinline), media: $(a2, l2) }), this.elements.container.appendChild(this.media), S.boolean(e2.autoplay) && (this.config.autoplay = e2.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), S.empty(e2.poster) || (this.poster = e2.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), Fe.addStyleHook.call(this), this.isHTML5 && it.insertElements.call(this, "source", t2), this.config.title = e2.title, Xe.setup.call(this), this.isHTML5 && Object.keys(e2).includes("tracks") && it.insertElements.call(this, "track", e2.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.isHTML5 && this.media.load(), S.empty(e2.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e2.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))), this.fullscreen.update();
          }, true)) : this.debug.warn("Invalid source format");
        } };
        class st {
          constructor(t2, i2) {
            if (e(this, "play", () => S.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => ie(this.media.play())), this.media.play()) : null), e(this, "pause", () => this.playing && S.function(this.media.pause) ? this.media.pause() : null), e(this, "togglePlay", (e2) => (S.boolean(e2) ? e2 : !this.playing) ? this.play() : this.pause()), e(this, "stop", () => {
              this.isHTML5 ? (this.pause(), this.restart()) : S.function(this.media.stop) && this.media.stop();
            }), e(this, "restart", () => {
              this.currentTime = 0;
            }), e(this, "rewind", (e2) => {
              this.currentTime -= S.number(e2) ? e2 : this.config.seekTime;
            }), e(this, "forward", (e2) => {
              this.currentTime += S.number(e2) ? e2 : this.config.seekTime;
            }), e(this, "increaseVolume", (e2) => {
              const t3 = this.media.muted ? 0 : this.volume;
              this.volume = t3 + (S.number(e2) ? e2 : 0);
            }), e(this, "decreaseVolume", (e2) => {
              this.increaseVolume(-e2);
            }), e(this, "airplay", () => {
              K.airplay && this.media.webkitShowPlaybackTargetPicker();
            }), e(this, "toggleControls", (e2) => {
              if (this.supported.ui && !this.isAudio) {
                const t3 = F(this.elements.container, this.config.classNames.hideControls), i3 = void 0 === e2 ? void 0 : !e2, s3 = R(this.elements.container, this.config.classNames.hideControls, i3);
                if (s3 && S.array(this.config.controls) && this.config.controls.includes("settings") && !S.empty(this.config.settings) && Pe.toggleMenu.call(this, false), s3 !== t3) {
                  const e3 = s3 ? "controlshidden" : "controlsshown";
                  Z.call(this, this.media, e3);
                }
                return !s3;
              }
              return false;
            }), e(this, "on", (e2, t3) => {
              X.call(this, this.elements.container, e2, t3);
            }), e(this, "once", (e2, t3) => {
              G.call(this, this.elements.container, e2, t3);
            }), e(this, "off", (e2, t3) => {
              J(this.elements.container, e2, t3);
            }), e(this, "destroy", (e2, t3 = false) => {
              if (!this.ready) return;
              const i3 = () => {
                document.body.style.overflow = "", this.embed = null, t3 ? (Object.keys(this.elements).length && (O(this.elements.buttons.play), O(this.elements.captions), O(this.elements.controls), O(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), S.function(e2) && e2()) : (ee.call(this), de.cancelRequests.call(this), q(this.elements.original, this.elements.container), Z.call(this, this.elements.original, "destroyed", true), S.function(e2) && e2.call(this.elements.original), this.ready = false, setTimeout(() => {
                  this.elements = null, this.media = null;
                }, 200));
              };
              this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (Fe.toggleNativeControls.call(this, true), i3()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && S.function(this.embed.destroy) && this.embed.destroy(), i3()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i3), setTimeout(i3, 200));
            }), e(this, "supports", (e2) => K.mime.call(this, e2)), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = K.touch, this.media = t2, S.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || S.nodeList(this.media) || S.array(this.media)) && (this.media = this.media[0]), this.config = x({}, Le, st.defaults, i2 || {}, (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e2) {
                return {};
              }
            })()), this.elements = { container: null, fullscreen: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: /* @__PURE__ */ new WeakMap() }, this.fullscreen = { active: false }, this.options = { speed: [], quality: [] }, this.debug = new De(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", K), S.nullOrUndefined(this.media) || !S.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr) return void this.debug.warn("Target already setup");
            if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
            if (!K.check().api) return void this.debug.error("Setup failed: no support");
            const s2 = this.media.cloneNode(true);
            s2.autoplay = false, this.elements.original = s2;
            const n2 = this.media.tagName.toLowerCase();
            let a2 = null, l2 = null;
            switch (n2) {
              case "div":
                if (a2 = this.media.querySelector("iframe"), S.element(a2)) {
                  if (l2 = Me(a2.getAttribute("src")), this.provider = function(e2) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e2) ? _e.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e2) ? _e.vimeo : null;
                  }(l2.toString()), this.elements.container = this.media, this.media = a2, this.elements.container.className = "", l2.search.length) {
                    const e2 = ["1", "true"];
                    e2.includes(l2.searchParams.get("autoplay")) && (this.config.autoplay = true), e2.includes(l2.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = e2.includes(l2.searchParams.get("playsinline")), this.config.youtube.hl = l2.searchParams.get("hl")) : this.config.playsinline = true;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                if (S.empty(this.provider) || !Object.values(_e).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = je;
                break;
              case "video":
              case "audio":
                this.type = n2, this.provider = _e.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
                break;
              default:
                return void this.debug.error("Setup failed: unsupported type");
            }
            this.supported = K.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Ve(this), this.storage = new we(this), this.media.plyr = this, S.element(this.elements.container) || (this.elements.container = $("div"), L(this.media, this.elements.container)), Fe.migrateStyles.call(this), Fe.addStyleHook.call(this), Xe.setup.call(this), this.config.debug && X.call(this, this.elements.container, this.config.events.join(" "), (e2) => {
              this.debug.log(`event: ${e2.type}`);
            }), this.fullscreen = new He(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Je(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => ie(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))) : this.debug.error("Setup failed: no support");
          }
          get isHTML5() {
            return this.provider === _e.html5;
          }
          get isEmbed() {
            return this.isYouTube || this.isVimeo;
          }
          get isYouTube() {
            return this.provider === _e.youtube;
          }
          get isVimeo() {
            return this.provider === _e.vimeo;
          }
          get isVideo() {
            return this.type === je;
          }
          get isAudio() {
            return this.type === Oe;
          }
          get playing() {
            return Boolean(this.ready && !this.paused && !this.ended);
          }
          get paused() {
            return Boolean(this.media.paused);
          }
          get stopped() {
            return Boolean(this.paused && 0 === this.currentTime);
          }
          get ended() {
            return Boolean(this.media.ended);
          }
          set currentTime(e2) {
            if (!this.duration) return;
            const t2 = S.number(e2) && e2 > 0;
            this.media.currentTime = t2 ? Math.min(e2, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
          }
          get currentTime() {
            return Number(this.media.currentTime);
          }
          get buffered() {
            const { buffered: e2 } = this.media;
            return S.number(e2) ? e2 : e2 && e2.length && this.duration > 0 ? e2.end(0) / this.duration : 0;
          }
          get seeking() {
            return Boolean(this.media.seeking);
          }
          get duration() {
            const e2 = parseFloat(this.config.duration), t2 = (this.media || {}).duration, i2 = S.number(t2) && t2 !== 1 / 0 ? t2 : 0;
            return e2 || i2;
          }
          set volume(e2) {
            let t2 = e2;
            S.string(t2) && (t2 = Number(t2)), S.number(t2) || (t2 = this.storage.get("volume")), S.number(t2) || ({ volume: t2 } = this.config), t2 > 1 && (t2 = 1), t2 < 0 && (t2 = 0), this.config.volume = t2, this.media.volume = t2, !S.empty(e2) && this.muted && t2 > 0 && (this.muted = false);
          }
          get volume() {
            return Number(this.media.volume);
          }
          set muted(e2) {
            let t2 = e2;
            S.boolean(t2) || (t2 = this.storage.get("muted")), S.boolean(t2) || (t2 = this.config.muted), this.config.muted = t2, this.media.muted = t2;
          }
          get muted() {
            return Boolean(this.media.muted);
          }
          get hasAudio() {
            return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)));
          }
          set speed(e2) {
            let t2 = null;
            S.number(e2) && (t2 = e2), S.number(t2) || (t2 = this.storage.get("speed")), S.number(t2) || (t2 = this.config.speed.selected);
            const { minimumSpeed: i2, maximumSpeed: s2 } = this;
            t2 = Ge(t2, i2, s2), this.config.speed.selected = t2, setTimeout(() => {
              this.media && (this.media.playbackRate = t2);
            }, 0);
          }
          get speed() {
            return Number(this.media.playbackRate);
          }
          get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? 0.5 : 0.0625;
          }
          get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
          }
          set quality(e2) {
            const t2 = this.config.quality, i2 = this.options.quality;
            if (!i2.length) return;
            let s2 = [!S.empty(e2) && Number(e2), this.storage.get("quality"), t2.selected, t2.default].find(S.number), n2 = true;
            if (!i2.includes(s2)) {
              const e3 = ne(i2, s2);
              this.debug.warn(`Unsupported quality option: ${s2}, using ${e3} instead`), s2 = e3, n2 = false;
            }
            t2.selected = s2, this.media.quality = s2, n2 && this.storage.set({ quality: s2 });
          }
          get quality() {
            return this.media.quality;
          }
          set loop(e2) {
            const t2 = S.boolean(e2) ? e2 : this.config.loop.active;
            this.config.loop.active = t2, this.media.loop = t2;
          }
          get loop() {
            return Boolean(this.media.loop);
          }
          set source(e2) {
            it.change.call(this, e2);
          }
          get source() {
            return this.media.currentSrc;
          }
          get download() {
            const { download: e2 } = this.config.urls;
            return S.url(e2) ? e2 : this.source;
          }
          set download(e2) {
            S.url(e2) && (this.config.urls.download = e2, Pe.setDownloadUrl.call(this));
          }
          set poster(e2) {
            this.isVideo ? Fe.setPoster.call(this, e2, false).catch(() => {
            }) : this.debug.warn("Poster can only be set for video");
          }
          get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
          }
          get ratio() {
            if (!this.isVideo) return null;
            const e2 = oe(ce.call(this));
            return S.array(e2) ? e2.join(":") : e2;
          }
          set ratio(e2) {
            this.isVideo ? S.string(e2) && re(e2) ? (this.config.ratio = oe(e2), ue.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e2})`) : this.debug.warn("Aspect ratio can only be set for video");
          }
          set autoplay(e2) {
            this.config.autoplay = S.boolean(e2) ? e2 : this.config.autoplay;
          }
          get autoplay() {
            return Boolean(this.config.autoplay);
          }
          toggleCaptions(e2) {
            xe.toggle.call(this, e2, false);
          }
          set currentTrack(e2) {
            xe.set.call(this, e2, false), xe.setup.call(this);
          }
          get currentTrack() {
            const { toggled: e2, currentTrack: t2 } = this.captions;
            return e2 ? t2 : -1;
          }
          set language(e2) {
            xe.setLanguage.call(this, e2, false);
          }
          get language() {
            return (xe.getCurrentTrack.call(this) || {}).language;
          }
          set pip(e2) {
            if (!K.pip) return;
            const t2 = S.boolean(e2) ? e2 : !this.pip;
            S.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t2 ? Ie : $e), S.function(this.media.requestPictureInPicture) && (!this.pip && t2 ? this.media.requestPictureInPicture() : this.pip && !t2 && document.exitPictureInPicture());
          }
          get pip() {
            return K.pip ? S.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie : null;
          }
          setPreviewThumbnails(e2) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e2), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this));
          }
          static supported(e2, t2) {
            return K.check(e2, t2);
          }
          static loadSprite(e2, t2) {
            return ke(e2, t2);
          }
          static setup(e2, t2 = {}) {
            let i2 = null;
            return S.string(e2) ? i2 = Array.from(document.querySelectorAll(e2)) : S.nodeList(e2) ? i2 = Array.from(e2) : S.array(e2) && (i2 = e2.filter(S.element)), S.empty(i2) ? null : i2.map((e3) => new st(e3, t2));
          }
        }
        var nt;
        return st.defaults = (nt = Le, JSON.parse(JSON.stringify(nt))), st;
      });
    }
  });

  // node_modules/hammerjs/hammer.js
  var require_hammer = __commonJS({
    "node_modules/hammerjs/hammer.js"(exports, module) {
      (function(window2, document2, exportName, undefined2) {
        "use strict";
        var VENDOR_PREFIXES = ["", "webkit", "Moz", "MS", "ms", "o"];
        var TEST_ELEMENT = document2.createElement("div");
        var TYPE_FUNCTION = "function";
        var round = Math.round;
        var abs = Math.abs;
        var now = Date.now;
        function setTimeoutContext(fn, timeout, context) {
          return setTimeout(bindFn(fn, context), timeout);
        }
        function invokeArrayArg(arg, fn, context) {
          if (Array.isArray(arg)) {
            each(arg, context[fn], context);
            return true;
          }
          return false;
        }
        function each(obj, iterator, context) {
          var i;
          if (!obj) {
            return;
          }
          if (obj.forEach) {
            obj.forEach(iterator, context);
          } else if (obj.length !== undefined2) {
            i = 0;
            while (i < obj.length) {
              iterator.call(context, obj[i], i, obj);
              i++;
            }
          } else {
            for (i in obj) {
              obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
            }
          }
        }
        function deprecate2(method, name, message) {
          var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
          return function() {
            var e = new Error("get-stack-trace");
            var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
            var log = window2.console && (window2.console.warn || window2.console.log);
            if (log) {
              log.call(window2.console, deprecationMessage, stack);
            }
            return method.apply(this, arguments);
          };
        }
        var assign;
        if (typeof Object.assign !== "function") {
          assign = function assign2(target) {
            if (target === undefined2 || target === null) {
              throw new TypeError("Cannot convert undefined or null to object");
            }
            var output = Object(target);
            for (var index = 1; index < arguments.length; index++) {
              var source = arguments[index];
              if (source !== undefined2 && source !== null) {
                for (var nextKey in source) {
                  if (source.hasOwnProperty(nextKey)) {
                    output[nextKey] = source[nextKey];
                  }
                }
              }
            }
            return output;
          };
        } else {
          assign = Object.assign;
        }
        var extend = deprecate2(function extend2(dest, src, merge2) {
          var keys = Object.keys(src);
          var i = 0;
          while (i < keys.length) {
            if (!merge2 || merge2 && dest[keys[i]] === undefined2) {
              dest[keys[i]] = src[keys[i]];
            }
            i++;
          }
          return dest;
        }, "extend", "Use `assign`.");
        var merge = deprecate2(function merge2(dest, src) {
          return extend(dest, src, true);
        }, "merge", "Use `assign`.");
        function inherit(child, base, properties) {
          var baseP = base.prototype, childP;
          childP = child.prototype = Object.create(baseP);
          childP.constructor = child;
          childP._super = baseP;
          if (properties) {
            assign(childP, properties);
          }
        }
        function bindFn(fn, context) {
          return function boundFn() {
            return fn.apply(context, arguments);
          };
        }
        function boolOrFn(val, args) {
          if (typeof val == TYPE_FUNCTION) {
            return val.apply(args ? args[0] || undefined2 : undefined2, args);
          }
          return val;
        }
        function ifUndefined(val1, val2) {
          return val1 === undefined2 ? val2 : val1;
        }
        function addEventListeners(target, types, handler) {
          each(splitStr(types), function(type) {
            target.addEventListener(type, handler, false);
          });
        }
        function removeEventListeners(target, types, handler) {
          each(splitStr(types), function(type) {
            target.removeEventListener(type, handler, false);
          });
        }
        function hasParent(node, parent) {
          while (node) {
            if (node == parent) {
              return true;
            }
            node = node.parentNode;
          }
          return false;
        }
        function inStr(str, find) {
          return str.indexOf(find) > -1;
        }
        function splitStr(str) {
          return str.trim().split(/\s+/g);
        }
        function inArray(src, find, findByKey) {
          if (src.indexOf && !findByKey) {
            return src.indexOf(find);
          } else {
            var i = 0;
            while (i < src.length) {
              if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
                return i;
              }
              i++;
            }
            return -1;
          }
        }
        function toArray(obj) {
          return Array.prototype.slice.call(obj, 0);
        }
        function uniqueArray(src, key, sort) {
          var results = [];
          var values = [];
          var i = 0;
          while (i < src.length) {
            var val = key ? src[i][key] : src[i];
            if (inArray(values, val) < 0) {
              results.push(src[i]);
            }
            values[i] = val;
            i++;
          }
          if (sort) {
            if (!key) {
              results = results.sort();
            } else {
              results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
              });
            }
          }
          return results;
        }
        function prefixed(obj, property) {
          var prefix, prop;
          var camelProp = property[0].toUpperCase() + property.slice(1);
          var i = 0;
          while (i < VENDOR_PREFIXES.length) {
            prefix = VENDOR_PREFIXES[i];
            prop = prefix ? prefix + camelProp : property;
            if (prop in obj) {
              return prop;
            }
            i++;
          }
          return undefined2;
        }
        var _uniqueId = 1;
        function uniqueId() {
          return _uniqueId++;
        }
        function getWindowForElement(element) {
          var doc = element.ownerDocument || element;
          return doc.defaultView || doc.parentWindow || window2;
        }
        var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
        var SUPPORT_TOUCH = "ontouchstart" in window2;
        var SUPPORT_POINTER_EVENTS = prefixed(window2, "PointerEvent") !== undefined2;
        var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
        var INPUT_TYPE_TOUCH = "touch";
        var INPUT_TYPE_PEN = "pen";
        var INPUT_TYPE_MOUSE = "mouse";
        var INPUT_TYPE_KINECT = "kinect";
        var COMPUTE_INTERVAL = 25;
        var INPUT_START = 1;
        var INPUT_MOVE = 2;
        var INPUT_END = 4;
        var INPUT_CANCEL = 8;
        var DIRECTION_NONE = 1;
        var DIRECTION_LEFT = 2;
        var DIRECTION_RIGHT = 4;
        var DIRECTION_UP = 8;
        var DIRECTION_DOWN = 16;
        var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
        var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
        var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
        var PROPS_XY = ["x", "y"];
        var PROPS_CLIENT_XY = ["clientX", "clientY"];
        function Input(manager, callback) {
          var self2 = this;
          this.manager = manager;
          this.callback = callback;
          this.element = manager.element;
          this.target = manager.options.inputTarget;
          this.domHandler = function(ev) {
            if (boolOrFn(manager.options.enable, [manager])) {
              self2.handler(ev);
            }
          };
          this.init();
        }
        Input.prototype = {
          /**
           * should handle the inputEvent data and trigger the callback
           * @virtual
           */
          handler: function() {
          },
          /**
           * bind the events
           */
          init: function() {
            this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
          },
          /**
           * unbind the events
           */
          destroy: function() {
            this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
          }
        };
        function createInputInstance(manager) {
          var Type;
          var inputClass = manager.options.inputClass;
          if (inputClass) {
            Type = inputClass;
          } else if (SUPPORT_POINTER_EVENTS) {
            Type = PointerEventInput;
          } else if (SUPPORT_ONLY_TOUCH) {
            Type = TouchInput;
          } else if (!SUPPORT_TOUCH) {
            Type = MouseInput;
          } else {
            Type = TouchMouseInput;
          }
          return new Type(manager, inputHandler);
        }
        function inputHandler(manager, eventType, input) {
          var pointersLen = input.pointers.length;
          var changedPointersLen = input.changedPointers.length;
          var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
          var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
          input.isFirst = !!isFirst;
          input.isFinal = !!isFinal;
          if (isFirst) {
            manager.session = {};
          }
          input.eventType = eventType;
          computeInputData(manager, input);
          manager.emit("hammer.input", input);
          manager.recognize(input);
          manager.session.prevInput = input;
        }
        function computeInputData(manager, input) {
          var session = manager.session;
          var pointers = input.pointers;
          var pointersLength = pointers.length;
          if (!session.firstInput) {
            session.firstInput = simpleCloneInputData(input);
          }
          if (pointersLength > 1 && !session.firstMultiple) {
            session.firstMultiple = simpleCloneInputData(input);
          } else if (pointersLength === 1) {
            session.firstMultiple = false;
          }
          var firstInput = session.firstInput;
          var firstMultiple = session.firstMultiple;
          var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
          var center = input.center = getCenter(pointers);
          input.timeStamp = now();
          input.deltaTime = input.timeStamp - firstInput.timeStamp;
          input.angle = getAngle(offsetCenter, center);
          input.distance = getDistance(offsetCenter, center);
          computeDeltaXY(session, input);
          input.offsetDirection = getDirection(input.deltaX, input.deltaY);
          var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
          input.overallVelocityX = overallVelocity.x;
          input.overallVelocityY = overallVelocity.y;
          input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
          input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
          input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
          input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
          computeIntervalInputData(session, input);
          var target = manager.element;
          if (hasParent(input.srcEvent.target, target)) {
            target = input.srcEvent.target;
          }
          input.target = target;
        }
        function computeDeltaXY(session, input) {
          var center = input.center;
          var offset = session.offsetDelta || {};
          var prevDelta = session.prevDelta || {};
          var prevInput = session.prevInput || {};
          if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
            prevDelta = session.prevDelta = {
              x: prevInput.deltaX || 0,
              y: prevInput.deltaY || 0
            };
            offset = session.offsetDelta = {
              x: center.x,
              y: center.y
            };
          }
          input.deltaX = prevDelta.x + (center.x - offset.x);
          input.deltaY = prevDelta.y + (center.y - offset.y);
        }
        function computeIntervalInputData(session, input) {
          var last = session.lastInterval || input, deltaTime = input.timeStamp - last.timeStamp, velocity, velocityX, velocityY, direction;
          if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined2)) {
            var deltaX = input.deltaX - last.deltaX;
            var deltaY = input.deltaY - last.deltaY;
            var v = getVelocity(deltaTime, deltaX, deltaY);
            velocityX = v.x;
            velocityY = v.y;
            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
            direction = getDirection(deltaX, deltaY);
            session.lastInterval = input;
          } else {
            velocity = last.velocity;
            velocityX = last.velocityX;
            velocityY = last.velocityY;
            direction = last.direction;
          }
          input.velocity = velocity;
          input.velocityX = velocityX;
          input.velocityY = velocityY;
          input.direction = direction;
        }
        function simpleCloneInputData(input) {
          var pointers = [];
          var i = 0;
          while (i < input.pointers.length) {
            pointers[i] = {
              clientX: round(input.pointers[i].clientX),
              clientY: round(input.pointers[i].clientY)
            };
            i++;
          }
          return {
            timeStamp: now(),
            pointers,
            center: getCenter(pointers),
            deltaX: input.deltaX,
            deltaY: input.deltaY
          };
        }
        function getCenter(pointers) {
          var pointersLength = pointers.length;
          if (pointersLength === 1) {
            return {
              x: round(pointers[0].clientX),
              y: round(pointers[0].clientY)
            };
          }
          var x = 0, y = 0, i = 0;
          while (i < pointersLength) {
            x += pointers[i].clientX;
            y += pointers[i].clientY;
            i++;
          }
          return {
            x: round(x / pointersLength),
            y: round(y / pointersLength)
          };
        }
        function getVelocity(deltaTime, x, y) {
          return {
            x: x / deltaTime || 0,
            y: y / deltaTime || 0
          };
        }
        function getDirection(x, y) {
          if (x === y) {
            return DIRECTION_NONE;
          }
          if (abs(x) >= abs(y)) {
            return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
          }
          return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
        }
        function getDistance(p1, p2, props) {
          if (!props) {
            props = PROPS_XY;
          }
          var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
          return Math.sqrt(x * x + y * y);
        }
        function getAngle(p1, p2, props) {
          if (!props) {
            props = PROPS_XY;
          }
          var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
          return Math.atan2(y, x) * 180 / Math.PI;
        }
        function getRotation(start, end) {
          return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
        }
        function getScale(start, end) {
          return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
        }
        var MOUSE_INPUT_MAP = {
          mousedown: INPUT_START,
          mousemove: INPUT_MOVE,
          mouseup: INPUT_END
        };
        var MOUSE_ELEMENT_EVENTS = "mousedown";
        var MOUSE_WINDOW_EVENTS = "mousemove mouseup";
        function MouseInput() {
          this.evEl = MOUSE_ELEMENT_EVENTS;
          this.evWin = MOUSE_WINDOW_EVENTS;
          this.pressed = false;
          Input.apply(this, arguments);
        }
        inherit(MouseInput, Input, {
          /**
           * handle mouse events
           * @param {Object} ev
           */
          handler: function MEhandler(ev) {
            var eventType = MOUSE_INPUT_MAP[ev.type];
            if (eventType & INPUT_START && ev.button === 0) {
              this.pressed = true;
            }
            if (eventType & INPUT_MOVE && ev.which !== 1) {
              eventType = INPUT_END;
            }
            if (!this.pressed) {
              return;
            }
            if (eventType & INPUT_END) {
              this.pressed = false;
            }
            this.callback(this.manager, eventType, {
              pointers: [ev],
              changedPointers: [ev],
              pointerType: INPUT_TYPE_MOUSE,
              srcEvent: ev
            });
          }
        });
        var POINTER_INPUT_MAP = {
          pointerdown: INPUT_START,
          pointermove: INPUT_MOVE,
          pointerup: INPUT_END,
          pointercancel: INPUT_CANCEL,
          pointerout: INPUT_CANCEL
        };
        var IE10_POINTER_TYPE_ENUM = {
          2: INPUT_TYPE_TOUCH,
          3: INPUT_TYPE_PEN,
          4: INPUT_TYPE_MOUSE,
          5: INPUT_TYPE_KINECT
          // see https://twitter.com/jacobrossi/status/480596438489890816
        };
        var POINTER_ELEMENT_EVENTS = "pointerdown";
        var POINTER_WINDOW_EVENTS = "pointermove pointerup pointercancel";
        if (window2.MSPointerEvent && !window2.PointerEvent) {
          POINTER_ELEMENT_EVENTS = "MSPointerDown";
          POINTER_WINDOW_EVENTS = "MSPointerMove MSPointerUp MSPointerCancel";
        }
        function PointerEventInput() {
          this.evEl = POINTER_ELEMENT_EVENTS;
          this.evWin = POINTER_WINDOW_EVENTS;
          Input.apply(this, arguments);
          this.store = this.manager.session.pointerEvents = [];
        }
        inherit(PointerEventInput, Input, {
          /**
           * handle mouse events
           * @param {Object} ev
           */
          handler: function PEhandler(ev) {
            var store = this.store;
            var removePointer = false;
            var eventTypeNormalized = ev.type.toLowerCase().replace("ms", "");
            var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
            var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
            var isTouch = pointerType == INPUT_TYPE_TOUCH;
            var storeIndex = inArray(store, ev.pointerId, "pointerId");
            if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
              if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
              }
            } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
              removePointer = true;
            }
            if (storeIndex < 0) {
              return;
            }
            store[storeIndex] = ev;
            this.callback(this.manager, eventType, {
              pointers: store,
              changedPointers: [ev],
              pointerType,
              srcEvent: ev
            });
            if (removePointer) {
              store.splice(storeIndex, 1);
            }
          }
        });
        var SINGLE_TOUCH_INPUT_MAP = {
          touchstart: INPUT_START,
          touchmove: INPUT_MOVE,
          touchend: INPUT_END,
          touchcancel: INPUT_CANCEL
        };
        var SINGLE_TOUCH_TARGET_EVENTS = "touchstart";
        var SINGLE_TOUCH_WINDOW_EVENTS = "touchstart touchmove touchend touchcancel";
        function SingleTouchInput() {
          this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
          this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
          this.started = false;
          Input.apply(this, arguments);
        }
        inherit(SingleTouchInput, Input, {
          handler: function TEhandler(ev) {
            var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
            if (type === INPUT_START) {
              this.started = true;
            }
            if (!this.started) {
              return;
            }
            var touches = normalizeSingleTouches.call(this, ev, type);
            if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
              this.started = false;
            }
            this.callback(this.manager, type, {
              pointers: touches[0],
              changedPointers: touches[1],
              pointerType: INPUT_TYPE_TOUCH,
              srcEvent: ev
            });
          }
        });
        function normalizeSingleTouches(ev, type) {
          var all = toArray(ev.touches);
          var changed = toArray(ev.changedTouches);
          if (type & (INPUT_END | INPUT_CANCEL)) {
            all = uniqueArray(all.concat(changed), "identifier", true);
          }
          return [all, changed];
        }
        var TOUCH_INPUT_MAP = {
          touchstart: INPUT_START,
          touchmove: INPUT_MOVE,
          touchend: INPUT_END,
          touchcancel: INPUT_CANCEL
        };
        var TOUCH_TARGET_EVENTS = "touchstart touchmove touchend touchcancel";
        function TouchInput() {
          this.evTarget = TOUCH_TARGET_EVENTS;
          this.targetIds = {};
          Input.apply(this, arguments);
        }
        inherit(TouchInput, Input, {
          handler: function MTEhandler(ev) {
            var type = TOUCH_INPUT_MAP[ev.type];
            var touches = getTouches.call(this, ev, type);
            if (!touches) {
              return;
            }
            this.callback(this.manager, type, {
              pointers: touches[0],
              changedPointers: touches[1],
              pointerType: INPUT_TYPE_TOUCH,
              srcEvent: ev
            });
          }
        });
        function getTouches(ev, type) {
          var allTouches = toArray(ev.touches);
          var targetIds = this.targetIds;
          if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
            targetIds[allTouches[0].identifier] = true;
            return [allTouches, allTouches];
          }
          var i, targetTouches, changedTouches = toArray(ev.changedTouches), changedTargetTouches = [], target = this.target;
          targetTouches = allTouches.filter(function(touch) {
            return hasParent(touch.target, target);
          });
          if (type === INPUT_START) {
            i = 0;
            while (i < targetTouches.length) {
              targetIds[targetTouches[i].identifier] = true;
              i++;
            }
          }
          i = 0;
          while (i < changedTouches.length) {
            if (targetIds[changedTouches[i].identifier]) {
              changedTargetTouches.push(changedTouches[i]);
            }
            if (type & (INPUT_END | INPUT_CANCEL)) {
              delete targetIds[changedTouches[i].identifier];
            }
            i++;
          }
          if (!changedTargetTouches.length) {
            return;
          }
          return [
            // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
            uniqueArray(targetTouches.concat(changedTargetTouches), "identifier", true),
            changedTargetTouches
          ];
        }
        var DEDUP_TIMEOUT = 2500;
        var DEDUP_DISTANCE = 25;
        function TouchMouseInput() {
          Input.apply(this, arguments);
          var handler = bindFn(this.handler, this);
          this.touch = new TouchInput(this.manager, handler);
          this.mouse = new MouseInput(this.manager, handler);
          this.primaryTouch = null;
          this.lastTouches = [];
        }
        inherit(TouchMouseInput, Input, {
          /**
           * handle mouse and touch events
           * @param {Hammer} manager
           * @param {String} inputEvent
           * @param {Object} inputData
           */
          handler: function TMEhandler(manager, inputEvent, inputData) {
            var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH, isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
            if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
              return;
            }
            if (isTouch) {
              recordTouches.call(this, inputEvent, inputData);
            } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
              return;
            }
            this.callback(manager, inputEvent, inputData);
          },
          /**
           * remove the event listeners
           */
          destroy: function destroy() {
            this.touch.destroy();
            this.mouse.destroy();
          }
        });
        function recordTouches(eventType, eventData) {
          if (eventType & INPUT_START) {
            this.primaryTouch = eventData.changedPointers[0].identifier;
            setLastTouch.call(this, eventData);
          } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            setLastTouch.call(this, eventData);
          }
        }
        function setLastTouch(eventData) {
          var touch = eventData.changedPointers[0];
          if (touch.identifier === this.primaryTouch) {
            var lastTouch = { x: touch.clientX, y: touch.clientY };
            this.lastTouches.push(lastTouch);
            var lts = this.lastTouches;
            var removeLastTouch = function() {
              var i = lts.indexOf(lastTouch);
              if (i > -1) {
                lts.splice(i, 1);
              }
            };
            setTimeout(removeLastTouch, DEDUP_TIMEOUT);
          }
        }
        function isSyntheticEvent(eventData) {
          var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
          for (var i = 0; i < this.lastTouches.length; i++) {
            var t = this.lastTouches[i];
            var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
            if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
              return true;
            }
          }
          return false;
        }
        var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, "touchAction");
        var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined2;
        var TOUCH_ACTION_COMPUTE = "compute";
        var TOUCH_ACTION_AUTO = "auto";
        var TOUCH_ACTION_MANIPULATION = "manipulation";
        var TOUCH_ACTION_NONE = "none";
        var TOUCH_ACTION_PAN_X = "pan-x";
        var TOUCH_ACTION_PAN_Y = "pan-y";
        var TOUCH_ACTION_MAP = getTouchActionProps();
        function TouchAction(manager, value) {
          this.manager = manager;
          this.set(value);
        }
        TouchAction.prototype = {
          /**
           * set the touchAction value on the element or enable the polyfill
           * @param {String} value
           */
          set: function(value) {
            if (value == TOUCH_ACTION_COMPUTE) {
              value = this.compute();
            }
            if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
              this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
            }
            this.actions = value.toLowerCase().trim();
          },
          /**
           * just re-set the touchAction value
           */
          update: function() {
            this.set(this.manager.options.touchAction);
          },
          /**
           * compute the value for the touchAction property based on the recognizer's settings
           * @returns {String} value
           */
          compute: function() {
            var actions = [];
            each(this.manager.recognizers, function(recognizer) {
              if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
              }
            });
            return cleanTouchActions(actions.join(" "));
          },
          /**
           * this method is called on each input cycle and provides the preventing of the browser behavior
           * @param {Object} input
           */
          preventDefaults: function(input) {
            var srcEvent = input.srcEvent;
            var direction = input.offsetDirection;
            if (this.manager.session.prevented) {
              srcEvent.preventDefault();
              return;
            }
            var actions = this.actions;
            var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
            var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
            var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
            if (hasNone) {
              var isTapPointer = input.pointers.length === 1;
              var isTapMovement = input.distance < 2;
              var isTapTouchTime = input.deltaTime < 250;
              if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
              }
            }
            if (hasPanX && hasPanY) {
              return;
            }
            if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
              return this.preventSrc(srcEvent);
            }
          },
          /**
           * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
           * @param {Object} srcEvent
           */
          preventSrc: function(srcEvent) {
            this.manager.session.prevented = true;
            srcEvent.preventDefault();
          }
        };
        function cleanTouchActions(actions) {
          if (inStr(actions, TOUCH_ACTION_NONE)) {
            return TOUCH_ACTION_NONE;
          }
          var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
          var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
          if (hasPanX && hasPanY) {
            return TOUCH_ACTION_NONE;
          }
          if (hasPanX || hasPanY) {
            return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
          }
          if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
            return TOUCH_ACTION_MANIPULATION;
          }
          return TOUCH_ACTION_AUTO;
        }
        function getTouchActionProps() {
          if (!NATIVE_TOUCH_ACTION) {
            return false;
          }
          var touchMap = {};
          var cssSupports = window2.CSS && window2.CSS.supports;
          ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(val) {
            touchMap[val] = cssSupports ? window2.CSS.supports("touch-action", val) : true;
          });
          return touchMap;
        }
        var STATE_POSSIBLE = 1;
        var STATE_BEGAN = 2;
        var STATE_CHANGED = 4;
        var STATE_ENDED = 8;
        var STATE_RECOGNIZED = STATE_ENDED;
        var STATE_CANCELLED = 16;
        var STATE_FAILED = 32;
        function Recognizer(options) {
          this.options = assign({}, this.defaults, options || {});
          this.id = uniqueId();
          this.manager = null;
          this.options.enable = ifUndefined(this.options.enable, true);
          this.state = STATE_POSSIBLE;
          this.simultaneous = {};
          this.requireFail = [];
        }
        Recognizer.prototype = {
          /**
           * @virtual
           * @type {Object}
           */
          defaults: {},
          /**
           * set options
           * @param {Object} options
           * @return {Recognizer}
           */
          set: function(options) {
            assign(this.options, options);
            this.manager && this.manager.touchAction.update();
            return this;
          },
          /**
           * recognize simultaneous with an other recognizer.
           * @param {Recognizer} otherRecognizer
           * @returns {Recognizer} this
           */
          recognizeWith: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "recognizeWith", this)) {
              return this;
            }
            var simultaneous = this.simultaneous;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (!simultaneous[otherRecognizer.id]) {
              simultaneous[otherRecognizer.id] = otherRecognizer;
              otherRecognizer.recognizeWith(this);
            }
            return this;
          },
          /**
           * drop the simultaneous link. it doesnt remove the link on the other recognizer.
           * @param {Recognizer} otherRecognizer
           * @returns {Recognizer} this
           */
          dropRecognizeWith: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "dropRecognizeWith", this)) {
              return this;
            }
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            delete this.simultaneous[otherRecognizer.id];
            return this;
          },
          /**
           * recognizer can only run when an other is failing
           * @param {Recognizer} otherRecognizer
           * @returns {Recognizer} this
           */
          requireFailure: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "requireFailure", this)) {
              return this;
            }
            var requireFail = this.requireFail;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (inArray(requireFail, otherRecognizer) === -1) {
              requireFail.push(otherRecognizer);
              otherRecognizer.requireFailure(this);
            }
            return this;
          },
          /**
           * drop the requireFailure link. it does not remove the link on the other recognizer.
           * @param {Recognizer} otherRecognizer
           * @returns {Recognizer} this
           */
          dropRequireFailure: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "dropRequireFailure", this)) {
              return this;
            }
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            var index = inArray(this.requireFail, otherRecognizer);
            if (index > -1) {
              this.requireFail.splice(index, 1);
            }
            return this;
          },
          /**
           * has require failures boolean
           * @returns {boolean}
           */
          hasRequireFailures: function() {
            return this.requireFail.length > 0;
          },
          /**
           * if the recognizer can recognize simultaneous with an other recognizer
           * @param {Recognizer} otherRecognizer
           * @returns {Boolean}
           */
          canRecognizeWith: function(otherRecognizer) {
            return !!this.simultaneous[otherRecognizer.id];
          },
          /**
           * You should use `tryEmit` instead of `emit` directly to check
           * that all the needed recognizers has failed before emitting.
           * @param {Object} input
           */
          emit: function(input) {
            var self2 = this;
            var state = this.state;
            function emit(event) {
              self2.manager.emit(event, input);
            }
            if (state < STATE_ENDED) {
              emit(self2.options.event + stateStr(state));
            }
            emit(self2.options.event);
            if (input.additionalEvent) {
              emit(input.additionalEvent);
            }
            if (state >= STATE_ENDED) {
              emit(self2.options.event + stateStr(state));
            }
          },
          /**
           * Check that all the require failure recognizers has failed,
           * if true, it emits a gesture event,
           * otherwise, setup the state to FAILED.
           * @param {Object} input
           */
          tryEmit: function(input) {
            if (this.canEmit()) {
              return this.emit(input);
            }
            this.state = STATE_FAILED;
          },
          /**
           * can we emit?
           * @returns {boolean}
           */
          canEmit: function() {
            var i = 0;
            while (i < this.requireFail.length) {
              if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
              }
              i++;
            }
            return true;
          },
          /**
           * update the recognizer
           * @param {Object} inputData
           */
          recognize: function(inputData) {
            var inputDataClone = assign({}, inputData);
            if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
              this.reset();
              this.state = STATE_FAILED;
              return;
            }
            if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
              this.state = STATE_POSSIBLE;
            }
            this.state = this.process(inputDataClone);
            if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
              this.tryEmit(inputDataClone);
            }
          },
          /**
           * return the state of the recognizer
           * the actual recognizing happens in this method
           * @virtual
           * @param {Object} inputData
           * @returns {Const} STATE
           */
          process: function(inputData) {
          },
          // jshint ignore:line
          /**
           * return the preferred touch-action
           * @virtual
           * @returns {Array}
           */
          getTouchAction: function() {
          },
          /**
           * called when the gesture isn't allowed to recognize
           * like when another is being recognized or it is disabled
           * @virtual
           */
          reset: function() {
          }
        };
        function stateStr(state) {
          if (state & STATE_CANCELLED) {
            return "cancel";
          } else if (state & STATE_ENDED) {
            return "end";
          } else if (state & STATE_CHANGED) {
            return "move";
          } else if (state & STATE_BEGAN) {
            return "start";
          }
          return "";
        }
        function directionStr(direction) {
          if (direction == DIRECTION_DOWN) {
            return "down";
          } else if (direction == DIRECTION_UP) {
            return "up";
          } else if (direction == DIRECTION_LEFT) {
            return "left";
          } else if (direction == DIRECTION_RIGHT) {
            return "right";
          }
          return "";
        }
        function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
          var manager = recognizer.manager;
          if (manager) {
            return manager.get(otherRecognizer);
          }
          return otherRecognizer;
        }
        function AttrRecognizer() {
          Recognizer.apply(this, arguments);
        }
        inherit(AttrRecognizer, Recognizer, {
          /**
           * @namespace
           * @memberof AttrRecognizer
           */
          defaults: {
            /**
             * @type {Number}
             * @default 1
             */
            pointers: 1
          },
          /**
           * Used to check if it the recognizer receives valid input, like input.distance > 10.
           * @memberof AttrRecognizer
           * @param {Object} input
           * @returns {Boolean} recognized
           */
          attrTest: function(input) {
            var optionPointers = this.options.pointers;
            return optionPointers === 0 || input.pointers.length === optionPointers;
          },
          /**
           * Process the input and return the state for the recognizer
           * @memberof AttrRecognizer
           * @param {Object} input
           * @returns {*} State
           */
          process: function(input) {
            var state = this.state;
            var eventType = input.eventType;
            var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
            var isValid = this.attrTest(input);
            if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
              return state | STATE_CANCELLED;
            } else if (isRecognized || isValid) {
              if (eventType & INPUT_END) {
                return state | STATE_ENDED;
              } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
              }
              return state | STATE_CHANGED;
            }
            return STATE_FAILED;
          }
        });
        function PanRecognizer() {
          AttrRecognizer.apply(this, arguments);
          this.pX = null;
          this.pY = null;
        }
        inherit(PanRecognizer, AttrRecognizer, {
          /**
           * @namespace
           * @memberof PanRecognizer
           */
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: DIRECTION_ALL
          },
          getTouchAction: function() {
            var direction = this.options.direction;
            var actions = [];
            if (direction & DIRECTION_HORIZONTAL) {
              actions.push(TOUCH_ACTION_PAN_Y);
            }
            if (direction & DIRECTION_VERTICAL) {
              actions.push(TOUCH_ACTION_PAN_X);
            }
            return actions;
          },
          directionTest: function(input) {
            var options = this.options;
            var hasMoved = true;
            var distance = input.distance;
            var direction = input.direction;
            var x = input.deltaX;
            var y = input.deltaY;
            if (!(direction & options.direction)) {
              if (options.direction & DIRECTION_HORIZONTAL) {
                direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
              } else {
                direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
              }
            }
            input.direction = direction;
            return hasMoved && distance > options.threshold && direction & options.direction;
          },
          attrTest: function(input) {
            return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
          },
          emit: function(input) {
            this.pX = input.deltaX;
            this.pY = input.deltaY;
            var direction = directionStr(input.direction);
            if (direction) {
              input.additionalEvent = this.options.event + direction;
            }
            this._super.emit.call(this, input);
          }
        });
        function PinchRecognizer() {
          AttrRecognizer.apply(this, arguments);
        }
        inherit(PinchRecognizer, AttrRecognizer, {
          /**
           * @namespace
           * @memberof PinchRecognizer
           */
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [TOUCH_ACTION_NONE];
          },
          attrTest: function(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
          },
          emit: function(input) {
            if (input.scale !== 1) {
              var inOut = input.scale < 1 ? "in" : "out";
              input.additionalEvent = this.options.event + inOut;
            }
            this._super.emit.call(this, input);
          }
        });
        function PressRecognizer() {
          Recognizer.apply(this, arguments);
          this._timer = null;
          this._input = null;
        }
        inherit(PressRecognizer, Recognizer, {
          /**
           * @namespace
           * @memberof PressRecognizer
           */
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            // minimal time of the pointer to be pressed
            threshold: 9
            // a minimal movement is ok, but keep it low
          },
          getTouchAction: function() {
            return [TOUCH_ACTION_AUTO];
          },
          process: function(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTime = input.deltaTime > options.time;
            this._input = input;
            if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
              this.reset();
            } else if (input.eventType & INPUT_START) {
              this.reset();
              this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
              }, options.time, this);
            } else if (input.eventType & INPUT_END) {
              return STATE_RECOGNIZED;
            }
            return STATE_FAILED;
          },
          reset: function() {
            clearTimeout(this._timer);
          },
          emit: function(input) {
            if (this.state !== STATE_RECOGNIZED) {
              return;
            }
            if (input && input.eventType & INPUT_END) {
              this.manager.emit(this.options.event + "up", input);
            } else {
              this._input.timeStamp = now();
              this.manager.emit(this.options.event, this._input);
            }
          }
        });
        function RotateRecognizer() {
          AttrRecognizer.apply(this, arguments);
        }
        inherit(RotateRecognizer, AttrRecognizer, {
          /**
           * @namespace
           * @memberof RotateRecognizer
           */
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [TOUCH_ACTION_NONE];
          },
          attrTest: function(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
          }
        });
        function SwipeRecognizer() {
          AttrRecognizer.apply(this, arguments);
        }
        inherit(SwipeRecognizer, AttrRecognizer, {
          /**
           * @namespace
           * @memberof SwipeRecognizer
           */
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
            pointers: 1
          },
          getTouchAction: function() {
            return PanRecognizer.prototype.getTouchAction.call(this);
          },
          attrTest: function(input) {
            var direction = this.options.direction;
            var velocity;
            if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
              velocity = input.overallVelocity;
            } else if (direction & DIRECTION_HORIZONTAL) {
              velocity = input.overallVelocityX;
            } else if (direction & DIRECTION_VERTICAL) {
              velocity = input.overallVelocityY;
            }
            return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
          },
          emit: function(input) {
            var direction = directionStr(input.offsetDirection);
            if (direction) {
              this.manager.emit(this.options.event + direction, input);
            }
            this.manager.emit(this.options.event, input);
          }
        });
        function TapRecognizer() {
          Recognizer.apply(this, arguments);
          this.pTime = false;
          this.pCenter = false;
          this._timer = null;
          this._input = null;
          this.count = 0;
        }
        inherit(TapRecognizer, Recognizer, {
          /**
           * @namespace
           * @memberof PinchRecognizer
           */
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            // max time between the multi-tap taps
            time: 250,
            // max time of the pointer to be down (like finger on the screen)
            threshold: 9,
            // a minimal movement is ok, but keep it low
            posThreshold: 10
            // a multi-tap can be a bit off the initial position
          },
          getTouchAction: function() {
            return [TOUCH_ACTION_MANIPULATION];
          },
          process: function(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTouchTime = input.deltaTime < options.time;
            this.reset();
            if (input.eventType & INPUT_START && this.count === 0) {
              return this.failTimeout();
            }
            if (validMovement && validTouchTime && validPointers) {
              if (input.eventType != INPUT_END) {
                return this.failTimeout();
              }
              var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
              var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
              this.pTime = input.timeStamp;
              this.pCenter = input.center;
              if (!validMultiTap || !validInterval) {
                this.count = 1;
              } else {
                this.count += 1;
              }
              this._input = input;
              var tapCount = this.count % options.taps;
              if (tapCount === 0) {
                if (!this.hasRequireFailures()) {
                  return STATE_RECOGNIZED;
                } else {
                  this._timer = setTimeoutContext(function() {
                    this.state = STATE_RECOGNIZED;
                    this.tryEmit();
                  }, options.interval, this);
                  return STATE_BEGAN;
                }
              }
            }
            return STATE_FAILED;
          },
          failTimeout: function() {
            this._timer = setTimeoutContext(function() {
              this.state = STATE_FAILED;
            }, this.options.interval, this);
            return STATE_FAILED;
          },
          reset: function() {
            clearTimeout(this._timer);
          },
          emit: function() {
            if (this.state == STATE_RECOGNIZED) {
              this._input.tapCount = this.count;
              this.manager.emit(this.options.event, this._input);
            }
          }
        });
        function Hammer2(element, options) {
          options = options || {};
          options.recognizers = ifUndefined(options.recognizers, Hammer2.defaults.preset);
          return new Manager(element, options);
        }
        Hammer2.VERSION = "2.0.7";
        Hammer2.defaults = {
          /**
           * set if DOM events are being triggered.
           * But this is slower and unused by simple implementations, so disabled by default.
           * @type {Boolean}
           * @default false
           */
          domEvents: false,
          /**
           * The value for the touchAction property/fallback.
           * When set to `compute` it will magically set the correct value based on the added recognizers.
           * @type {String}
           * @default compute
           */
          touchAction: TOUCH_ACTION_COMPUTE,
          /**
           * @type {Boolean}
           * @default true
           */
          enable: true,
          /**
           * EXPERIMENTAL FEATURE -- can be removed/changed
           * Change the parent input target element.
           * If Null, then it is being set the to main element.
           * @type {Null|EventTarget}
           * @default null
           */
          inputTarget: null,
          /**
           * force an input class
           * @type {Null|Function}
           * @default null
           */
          inputClass: null,
          /**
           * Default recognizer setup when calling `Hammer()`
           * When creating a new Manager these will be skipped.
           * @type {Array}
           */
          preset: [
            // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
            [RotateRecognizer, { enable: false }],
            [PinchRecognizer, { enable: false }, ["rotate"]],
            [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }],
            [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ["swipe"]],
            [TapRecognizer],
            [TapRecognizer, { event: "doubletap", taps: 2 }, ["tap"]],
            [PressRecognizer]
          ],
          /**
           * Some CSS properties can be used to improve the working of Hammer.
           * Add them to this method and they will be set when creating a new Manager.
           * @namespace
           */
          cssProps: {
            /**
             * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
             * @type {String}
             * @default 'none'
             */
            userSelect: "none",
            /**
             * Disable the Windows Phone grippers when pressing an element.
             * @type {String}
             * @default 'none'
             */
            touchSelect: "none",
            /**
             * Disables the default callout shown when you touch and hold a touch target.
             * On iOS, when you touch and hold a touch target such as a link, Safari displays
             * a callout containing information about the link. This property allows you to disable that callout.
             * @type {String}
             * @default 'none'
             */
            touchCallout: "none",
            /**
             * Specifies whether zooming is enabled. Used by IE10>
             * @type {String}
             * @default 'none'
             */
            contentZooming: "none",
            /**
             * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
             * @type {String}
             * @default 'none'
             */
            userDrag: "none",
            /**
             * Overrides the highlight color shown when the user taps a link or a JavaScript
             * clickable element in iOS. This property obeys the alpha value, if specified.
             * @type {String}
             * @default 'rgba(0,0,0,0)'
             */
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        };
        var STOP = 1;
        var FORCED_STOP = 2;
        function Manager(element, options) {
          this.options = assign({}, Hammer2.defaults, options || {});
          this.options.inputTarget = this.options.inputTarget || element;
          this.handlers = {};
          this.session = {};
          this.recognizers = [];
          this.oldCssProps = {};
          this.element = element;
          this.input = createInputInstance(this);
          this.touchAction = new TouchAction(this, this.options.touchAction);
          toggleCssProps(this, true);
          each(this.options.recognizers, function(item) {
            var recognizer = this.add(new item[0](item[1]));
            item[2] && recognizer.recognizeWith(item[2]);
            item[3] && recognizer.requireFailure(item[3]);
          }, this);
        }
        Manager.prototype = {
          /**
           * set options
           * @param {Object} options
           * @returns {Manager}
           */
          set: function(options) {
            assign(this.options, options);
            if (options.touchAction) {
              this.touchAction.update();
            }
            if (options.inputTarget) {
              this.input.destroy();
              this.input.target = options.inputTarget;
              this.input.init();
            }
            return this;
          },
          /**
           * stop recognizing for this session.
           * This session will be discarded, when a new [input]start event is fired.
           * When forced, the recognizer cycle is stopped immediately.
           * @param {Boolean} [force]
           */
          stop: function(force) {
            this.session.stopped = force ? FORCED_STOP : STOP;
          },
          /**
           * run the recognizers!
           * called by the inputHandler function on every movement of the pointers (touches)
           * it walks through all the recognizers and tries to detect the gesture that is being made
           * @param {Object} inputData
           */
          recognize: function(inputData) {
            var session = this.session;
            if (session.stopped) {
              return;
            }
            this.touchAction.preventDefaults(inputData);
            var recognizer;
            var recognizers = this.recognizers;
            var curRecognizer = session.curRecognizer;
            if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
              curRecognizer = session.curRecognizer = null;
            }
            var i = 0;
            while (i < recognizers.length) {
              recognizer = recognizers[i];
              if (session.stopped !== FORCED_STOP && // 1
              (!curRecognizer || recognizer == curRecognizer || // 2
              recognizer.canRecognizeWith(curRecognizer))) {
                recognizer.recognize(inputData);
              } else {
                recognizer.reset();
              }
              if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
              }
              i++;
            }
          },
          /**
           * get a recognizer by its event name.
           * @param {Recognizer|String} recognizer
           * @returns {Recognizer|Null}
           */
          get: function(recognizer) {
            if (recognizer instanceof Recognizer) {
              return recognizer;
            }
            var recognizers = this.recognizers;
            for (var i = 0; i < recognizers.length; i++) {
              if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
              }
            }
            return null;
          },
          /**
           * add a recognizer to the manager
           * existing recognizers with the same event name will be removed
           * @param {Recognizer} recognizer
           * @returns {Recognizer|Manager}
           */
          add: function(recognizer) {
            if (invokeArrayArg(recognizer, "add", this)) {
              return this;
            }
            var existing = this.get(recognizer.options.event);
            if (existing) {
              this.remove(existing);
            }
            this.recognizers.push(recognizer);
            recognizer.manager = this;
            this.touchAction.update();
            return recognizer;
          },
          /**
           * remove a recognizer by name or instance
           * @param {Recognizer|String} recognizer
           * @returns {Manager}
           */
          remove: function(recognizer) {
            if (invokeArrayArg(recognizer, "remove", this)) {
              return this;
            }
            recognizer = this.get(recognizer);
            if (recognizer) {
              var recognizers = this.recognizers;
              var index = inArray(recognizers, recognizer);
              if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
              }
            }
            return this;
          },
          /**
           * bind event
           * @param {String} events
           * @param {Function} handler
           * @returns {EventEmitter} this
           */
          on: function(events, handler) {
            if (events === undefined2) {
              return;
            }
            if (handler === undefined2) {
              return;
            }
            var handlers = this.handlers;
            each(splitStr(events), function(event) {
              handlers[event] = handlers[event] || [];
              handlers[event].push(handler);
            });
            return this;
          },
          /**
           * unbind event, leave emit blank to remove all handlers
           * @param {String} events
           * @param {Function} [handler]
           * @returns {EventEmitter} this
           */
          off: function(events, handler) {
            if (events === undefined2) {
              return;
            }
            var handlers = this.handlers;
            each(splitStr(events), function(event) {
              if (!handler) {
                delete handlers[event];
              } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
              }
            });
            return this;
          },
          /**
           * emit event to the listeners
           * @param {String} event
           * @param {Object} data
           */
          emit: function(event, data) {
            if (this.options.domEvents) {
              triggerDomEvent(event, data);
            }
            var handlers = this.handlers[event] && this.handlers[event].slice();
            if (!handlers || !handlers.length) {
              return;
            }
            data.type = event;
            data.preventDefault = function() {
              data.srcEvent.preventDefault();
            };
            var i = 0;
            while (i < handlers.length) {
              handlers[i](data);
              i++;
            }
          },
          /**
           * destroy the manager and unbinds all events
           * it doesn't unbind dom events, that is the user own responsibility
           */
          destroy: function() {
            this.element && toggleCssProps(this, false);
            this.handlers = {};
            this.session = {};
            this.input.destroy();
            this.element = null;
          }
        };
        function toggleCssProps(manager, add) {
          var element = manager.element;
          if (!element.style) {
            return;
          }
          var prop;
          each(manager.options.cssProps, function(value, name) {
            prop = prefixed(element.style, name);
            if (add) {
              manager.oldCssProps[prop] = element.style[prop];
              element.style[prop] = value;
            } else {
              element.style[prop] = manager.oldCssProps[prop] || "";
            }
          });
          if (!add) {
            manager.oldCssProps = {};
          }
        }
        function triggerDomEvent(event, data) {
          var gestureEvent = document2.createEvent("Event");
          gestureEvent.initEvent(event, true, true);
          gestureEvent.gesture = data;
          data.target.dispatchEvent(gestureEvent);
        }
        assign(Hammer2, {
          INPUT_START,
          INPUT_MOVE,
          INPUT_END,
          INPUT_CANCEL,
          STATE_POSSIBLE,
          STATE_BEGAN,
          STATE_CHANGED,
          STATE_ENDED,
          STATE_RECOGNIZED,
          STATE_CANCELLED,
          STATE_FAILED,
          DIRECTION_NONE,
          DIRECTION_LEFT,
          DIRECTION_RIGHT,
          DIRECTION_UP,
          DIRECTION_DOWN,
          DIRECTION_HORIZONTAL,
          DIRECTION_VERTICAL,
          DIRECTION_ALL,
          Manager,
          Input,
          TouchAction,
          TouchInput,
          MouseInput,
          PointerEventInput,
          TouchMouseInput,
          SingleTouchInput,
          Recognizer,
          AttrRecognizer,
          Tap: TapRecognizer,
          Pan: PanRecognizer,
          Swipe: SwipeRecognizer,
          Pinch: PinchRecognizer,
          Rotate: RotateRecognizer,
          Press: PressRecognizer,
          on: addEventListeners,
          off: removeEventListeners,
          each,
          merge,
          extend,
          assign,
          inherit,
          bindFn,
          prefixed
        });
        var freeGlobal = typeof window2 !== "undefined" ? window2 : typeof self !== "undefined" ? self : {};
        freeGlobal.Hammer = Hammer2;
        if (typeof define === "function" && define.amd) {
          define(function() {
            return Hammer2;
          });
        } else if (typeof module != "undefined" && module.exports) {
          module.exports = Hammer2;
        } else {
          window2[exportName] = Hammer2;
        }
      })(window, document, "Hammer");
    }
  });

  // ns-hugo:D:\FileFolder\repos\jl-portfolio\assets\js\modules\sidebartoggle.js
  function openMenu(sidebarOpen) {
    const sideBar = document.getElementById("sidebarnav");
    const bottomNavbar = document.getElementById("bottomnavbar");
    const menuButton = document.getElementById("openmenubutton");
    if (menuButton && sideBar && !sidebarOpen) {
      menuButton.classList.remove("flex");
      menuButton.classList.add("hidden");
      bottomNavbar.classList.add("hidden");
      sideBar.classList.remove("animate-slideout");
      sideBar.classList.add("animate-slidein");
      return true;
    }
  }
  function closeMenu(sidebarOpen) {
    const closeMenuButton = document.getElementById("closemenubutton");
    const sideBar = document.getElementById("sidebarnav");
    const bottomNavbar = document.getElementById("bottomnavbar");
    const menuButton = document.getElementById("openmenubutton");
    if (closeMenuButton && sidebarOpen) {
      menuButton.classList.remove("hidden");
      bottomNavbar.classList.remove("hidden");
      sideBar.classList.remove("animate-slidein");
      sideBar.classList.add("animate-slideout");
      return false;
    }
  }

  // ns-hugo:D:\FileFolder\repos\jl-portfolio\assets\js\modules\cinemamodule.js
  var import_plyr = __toESM(require_plyr_min());
  var plyrInstance;
  function togglevideo(delayTime) {
    const videocontainer = document.getElementById("showreelvideocontainer");
    const video = document.querySelector("video");
    if (videocontainer.classList.contains("hidden")) {
      plyrInstance = new import_plyr.default(".plyr-reel", {
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
        clickToPlay: true,
        keyboard: {
          focused: true,
          global: true
        }
      });
      videocontainer.classList.remove("hidden", "animate-fadeout");
      videocontainer.classList.add("grid", "animate-fadein");
      closeMenu(false);
      video.volume = 0;
      fadeInVolume(video, 800, 0.75);
      setTimeout(() => {
        video.play();
      }, delayTime);
      return true;
    } else if (videocontainer.classList.contains("animate-fadein")) {
      videocontainer.classList.remove("animate-fadein");
      videocontainer.classList.add("animate-fadeout");
      fadeOutVolume(video, 500);
      setTimeout(() => {
        video.pause();
        videocontainer.classList.remove("grid");
        videocontainer.classList.add("hidden");
        video.currentTime = 0;
        if (plyrInstance) {
          plyrInstance.destroy();
          plyrInstance = null;
        }
      }, delayTime);
      return false;
    } else {
      console.error("Button or videocontainer element not found");
    }
  }
  function overlayToggle() {
    const overlayContainer = document.getElementById("overlay");
    const overlayFooter = document.getElementById("footer");
    const menuButtonContainer = document.getElementById("menubuttoncontainer");
    if (overlayContainer.classList.contains("opacity-0") && overlayFooter.classList.contains("bg-white")) {
      overlayContainer.classList.remove("animate-fadeout");
      overlayFooter.classList.remove("bg-white");
      overlayContainer.classList.add("animate-fadein");
      overlayFooter.classList.add("bg-[#6e6e6e]");
      menuButtonContainer.classList.add("pointer-events-none");
    } else if (overlayContainer.classList.contains("animate-fadein") && overlayFooter.classList.contains("bg-[#6e6e6e]")) {
      overlayContainer.classList.remove("animate-fadein");
      overlayFooter.classList.remove("bg-[#6e6e6e]");
      overlayContainer.classList.add("animate-fadeout");
      overlayFooter.classList.add("bg-white");
      menuButtonContainer.classList.remove("pointer-events-none");
    }
  }
  function showreelButtonState(delayTime) {
    const showreelButton = document.getElementById("showreelbutton");
    const closeReelButton = document.getElementById("close-reel-button");
    if (showreelButton.classList.contains("opacity-100")) {
      showreelButton.classList.remove("opacity-100");
      showreelButton.classList.add("animate-fadeout");
      closeReelButton.classList.remove("opacity-0");
      closeReelButton.classList.remove("animate-fadeout");
      closeReelButton.classList.add("animate-fadein");
      setTimeout(() => {
        showreelButton.disabled = true;
        closeReelButton.disabled = false;
      }, delayTime);
    } else if (showreelButton.classList.contains("animate-fadein")) {
      showreelButton.classList.remove("animate-fadein");
      showreelButton.classList.add("animate-fadeout");
      closeReelButton.classList.remove("opacity-0");
      closeReelButton.classList.remove("animate-fadeout");
      closeReelButton.classList.add("animate-fadein");
      setTimeout(() => {
        showreelButton.disabled = true;
        closeReelButton.disabled = false;
      }, delayTime);
    } else if (showreelButton.classList.contains("animate-fadeout")) {
      showreelButton.classList.remove("animate-fadeout");
      showreelButton.classList.add("animate-fadein");
      closeReelButton.classList.remove("animate-fadein");
      closeReelButton.classList.add("animate-fadeout");
      setTimeout(() => {
        showreelButton.disabled = false;
        closeReelButton.disabled = true;
      }, delayTime);
    }
  }
  function fadeOutVolume(video, duration) {
    const step = 0.05;
    const interval = duration / (video.volume / step);
    const fadeAudio = setInterval(() => {
      if (video.volume > 0) {
        video.volume = Math.max(video.volume - step, 0);
      } else {
        video.volume = 0;
        clearInterval(fadeAudio);
      }
    }, interval);
  }
  function fadeInVolume(video, duration, targetVolume) {
    const step = 0.05;
    const interval = duration / (targetVolume / step);
    const fadeAudio = setInterval(() => {
      if (video.volume < targetVolume) {
        video.volume = Math.min(video.volume + step, targetVolume);
      } else {
        video.volume = targetVolume;
        clearInterval(fadeAudio);
      }
    }, interval);
  }

  // ns-hugo:D:\FileFolder\repos\jl-portfolio\assets\js\modules\dropdowntoggle.js
  function openDropdown(isDropdownOpen, dropdownButtonElem, dropdownContentElem) {
    if (dropdownContentElem && dropdownButtonElem && !isDropdownOpen) {
      dropdownButtonElem.classList.remove("rotate-180");
      dropdownContentElem.classList.remove("animate-collapse");
      dropdownContentElem.classList.add("animate-expand");
      if (!dropdownContentElem.getAttribute("data-height")) {
        const fullHeight = dropdownContentElem.offsetHeight;
        dropdownContentElem.setAttribute("data-height", fullHeight);
        const duration = calcAnimTime(dropdownContentElem);
        dropdownContentElem.style.animationDuration = `${duration}ms`;
        addAnimationEventListeners(dropdownContentElem);
      } else {
        const duration = calcAnimTime(dropdownContentElem);
        dropdownContentElem.style.animationDuration = `${duration}ms`;
        addAnimationEventListeners(dropdownContentElem);
      }
      return true;
    }
    ;
  }
  function closeDropdown(isDropdownOpen, dropdownButtonElem, dropdownContentElem) {
    if (dropdownContentElem && dropdownButtonElem && isDropdownOpen) {
      dropdownContentElem.setAttribute("data-height", dropdownContentElem.offsetHeight);
      dropdownButtonElem.classList.add("rotate-180");
      dropdownContentElem.classList.remove("animate-expand");
      dropdownContentElem.classList.add("animate-collapse");
      addAnimationEventListeners(dropdownContentElem);
      return false;
    }
    ;
  }
  function addAnimationEventListeners(dropdownContentElem) {
    const animatedElem = dropdownContentElem;
    const headerOffset = 68;
    let elementPosition = animatedElem.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.scrollY - headerOffset;
    let animationActive = false;
    let frameId = null;
    let pageScrolled = false;
    function scrollAnimate() {
      window.scrollTo({
        top: offsetPosition
      });
      if (animationActive) {
        requestAnimationFrame(scrollAnimate);
      }
    }
    let isOpen = dropdownContentElem.getAttribute("data-isOpen");
    let isClosed = dropdownContentElem.getAttribute("data-isClosed");
    dropdownContentElem.addEventListener("animationstart", function(anim) {
      if (anim.animationName === "expand" && !isOpen) {
        dropdownContentElem.setAttribute("data-isOpen", "true");
        frameId = requestAnimationFrame(scrollAnimate);
        anim.animationName.animationListenersAdded = true;
        animationActive = true;
      }
    });
    dropdownContentElem.addEventListener("animationend", function(anim) {
      if (anim.animationName === "expand" && !isOpen) {
        cancelAnimationFrame(frameId);
        animationActive = false;
        elementIsExpanded = true;
        pageScrolled = false;
      }
    });
    dropdownContentElem.addEventListener("animationcancel", function(anim) {
      if (anim.animationName === "expand" && !isOpen) {
        cancelAnimationFrame(frameId);
        animationActive = false;
        elementIsExpanded = true;
        pageScrolled = false;
      }
    });
    dropdownContentElem.addEventListener("animationstart", function(anim) {
      if (anim.animationName === "collapse" && !isClosed) {
        dropdownContentElem.setAttribute("data-isClosed", "true");
        pageScrolled = true;
      }
    });
    dropdownContentElem.addEventListener("animationend", function(anim) {
      if (anim.animationName === "collapse" && !isClosed) {
        elementIsExpanded = false;
        pageScrolled = false;
      }
    });
    dropdownContentElem.addEventListener("animationcancel", function(anim) {
      if (anim.animationName === "collapse" && !isClosed) {
        cancelAnimationFrame(frameId);
        elementIsExpanded = false;
        pageScrolled = false;
      }
    });
  }
  function calcAnimTime(dropdownContentElem) {
    const elemHeight = parseFloat(dropdownContentElem.getAttribute("data-height")) || 0;
    const baseDuration = 500;
    const minDuration = 200;
    const maxDuration = 1200;
    const scalingFactor = 0.5;
    const timeDuration = Math.min(
      Math.max(baseDuration * Math.pow(elemHeight / 500, scalingFactor), minDuration),
      maxDuration
    );
    return Math.max(timeDuration, 100);
  }

  // ns-hugo:D:\FileFolder\repos\jl-portfolio\assets\js\modules\touchscreenutilities.js
  function applyTouchHoverEffect(hoverNode) {
    if (hoverNode.touchHoverTimeout === void 0) {
      hoverNode.touchHoverTimeout = null;
    }
    if (hoverNode.isHovering === void 0) {
      hoverNode.isHovering = false;
    }
    if (hoverNode.isHovering) {
      clearTimeout(hoverNode.touchHoverTimeout);
    } else {
      hoverNode.classList.remove("opacity-0");
      hoverNode.classList.add("opacity-100");
      hoverNode.isHovering = true;
    }
    hoverNode.touchHoverTimeout = setTimeout(() => {
      hoverNode.classList.remove("opacity-100");
      hoverNode.classList.add("opacity-0");
      hoverNode.isHovering = false;
    }, 2200);
  }
  function applyOverlay(hoverNode) {
    hoverNode.classList.remove("opacity-0");
    hoverNode.classList.add("opacity-100");
    hoverNode.isHovering = true;
  }
  function removeOverlay(hoverNode) {
    hoverNode.classList.remove("opacity-100");
    hoverNode.classList.add("opacity-0");
    hoverNode.isHovering = false;
  }
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

  // node_modules/audiomotion-analyzer/src/audioMotion-analyzer.js
  var VERSION = "4.5.0";
  var PI = Math.PI;
  var TAU = 2 * PI;
  var HALF_PI = PI / 2;
  var C_1 = 8.17579892;
  var CHANNEL_COMBINED = "dual-combined";
  var CHANNEL_HORIZONTAL = "dual-horizontal";
  var CHANNEL_SINGLE = "single";
  var CHANNEL_VERTICAL = "dual-vertical";
  var COLOR_BAR_INDEX = "bar-index";
  var COLOR_BAR_LEVEL = "bar-level";
  var COLOR_GRADIENT = "gradient";
  var DEBOUNCE_TIMEOUT = 60;
  var EVENT_CLICK = "click";
  var EVENT_FULLSCREENCHANGE = "fullscreenchange";
  var EVENT_RESIZE = "resize";
  var GRADIENT_DEFAULT_BGCOLOR = "#111";
  var FILTER_NONE = "";
  var FILTER_A = "A";
  var FILTER_B = "B";
  var FILTER_C = "C";
  var FILTER_D = "D";
  var FILTER_468 = "468";
  var FONT_FAMILY = "sans-serif";
  var FPS_COLOR = "#0f0";
  var LEDS_UNLIT_COLOR = "#7f7f7f22";
  var MODE_GRAPH = 10;
  var REASON_CREATE = "create";
  var REASON_FSCHANGE = "fschange";
  var REASON_LORES = "lores";
  var REASON_RESIZE = EVENT_RESIZE;
  var REASON_USER = "user";
  var SCALEX_BACKGROUND_COLOR = "#000c";
  var SCALEX_LABEL_COLOR = "#fff";
  var SCALEX_HIGHLIGHT_COLOR = "#4f4";
  var SCALEY_LABEL_COLOR = "#888";
  var SCALEY_MIDLINE_COLOR = "#555";
  var SCALE_BARK = "bark";
  var SCALE_LINEAR = "linear";
  var SCALE_LOG = "log";
  var SCALE_MEL = "mel";
  var PRISM = ["#a35", "#c66", "#e94", "#ed0", "#9d5", "#4d8", "#2cb", "#0bc", "#09c", "#36b"];
  var GRADIENTS = [
    ["classic", {
      colorStops: [
        "red",
        { color: "yellow", level: 0.85, pos: 0.6 },
        { color: "lime", level: 0.475 }
      ]
    }],
    ["prism", {
      colorStops: PRISM
    }],
    ["rainbow", {
      dir: "h",
      colorStops: ["#817", ...PRISM, "#639"]
    }],
    ["orangered", {
      bgColor: "#3e2f29",
      colorStops: ["OrangeRed"]
    }],
    ["steelblue", {
      bgColor: "#222c35",
      colorStops: ["SteelBlue"]
    }]
  ];
  var DEFAULT_SETTINGS = {
    alphaBars: false,
    ansiBands: false,
    barSpace: 0.1,
    bgAlpha: 0.7,
    channelLayout: CHANNEL_SINGLE,
    colorMode: COLOR_GRADIENT,
    fadePeaks: false,
    fftSize: 8192,
    fillAlpha: 1,
    frequencyScale: SCALE_LOG,
    gradient: GRADIENTS[0][0],
    gravity: 3.8,
    height: void 0,
    ledBars: false,
    linearAmplitude: false,
    linearBoost: 1,
    lineWidth: 0,
    loRes: false,
    lumiBars: false,
    maxDecibels: -25,
    maxFPS: 0,
    maxFreq: 22e3,
    minDecibels: -85,
    minFreq: 20,
    mirror: 0,
    mode: 0,
    noteLabels: false,
    outlineBars: false,
    overlay: false,
    peakFadeTime: 750,
    peakHoldTime: 500,
    peakLine: false,
    radial: false,
    radialInvert: false,
    radius: 0.3,
    reflexAlpha: 0.15,
    reflexBright: 1,
    reflexFit: true,
    reflexRatio: 0,
    roundBars: false,
    showBgColor: true,
    showFPS: false,
    showPeaks: true,
    showScaleX: true,
    showScaleY: false,
    smoothing: 0.5,
    spinSpeed: 0,
    splitGradient: false,
    start: true,
    trueLeds: false,
    useCanvas: true,
    volume: 1,
    weightingFilter: FILTER_NONE,
    width: void 0
  };
  var ERR_AUDIO_CONTEXT_FAIL = ["ERR_AUDIO_CONTEXT_FAIL", "Could not create audio context. Web Audio API not supported?"];
  var ERR_INVALID_AUDIO_CONTEXT = ["ERR_INVALID_AUDIO_CONTEXT", "Provided audio context is not valid"];
  var ERR_UNKNOWN_GRADIENT = ["ERR_UNKNOWN_GRADIENT", "Unknown gradient"];
  var ERR_FREQUENCY_TOO_LOW = ["ERR_FREQUENCY_TOO_LOW", "Frequency values must be >= 1"];
  var ERR_INVALID_MODE = ["ERR_INVALID_MODE", "Invalid mode"];
  var ERR_REFLEX_OUT_OF_RANGE = ["ERR_REFLEX_OUT_OF_RANGE", "Reflex ratio must be >= 0 and < 1"];
  var ERR_INVALID_AUDIO_SOURCE = ["ERR_INVALID_AUDIO_SOURCE", "Audio source must be an instance of HTMLMediaElement or AudioNode"];
  var ERR_GRADIENT_INVALID_NAME = ["ERR_GRADIENT_INVALID_NAME", "Gradient name must be a non-empty string"];
  var ERR_GRADIENT_NOT_AN_OBJECT = ["ERR_GRADIENT_NOT_AN_OBJECT", "Gradient options must be an object"];
  var ERR_GRADIENT_MISSING_COLOR = ["ERR_GRADIENT_MISSING_COLOR", "Gradient colorStops must be a non-empty array"];
  var AudioMotionError = class extends Error {
    constructor(error, value) {
      const [code, message] = error;
      super(message + (value !== void 0 ? `: ${value}` : ""));
      this.name = "AudioMotionError";
      this.code = code;
    }
  };
  var deprecate = (name, alternative) => console.warn(`${name} is deprecated. Use ${alternative} instead.`);
  var isEmpty = (obj) => {
    for (const p in obj)
      return false;
    return true;
  };
  var validateFromList = (value, list, modifier = "toLowerCase") => list[Math.max(0, list.indexOf(("" + value)[modifier]()))];
  var findY = (x1, y1, x2, y2, x) => y1 + (y2 - y1) * (x - x1) / (x2 - x1);
  if (!Array.prototype.findLastIndex) {
    Array.prototype.findLastIndex = function(callback) {
      let index = this.length;
      while (index-- > 0) {
        if (callback(this[index]))
          return index;
      }
      return -1;
    };
  }
  var AudioMotionAnalyzer = class {
    /**
     * CONSTRUCTOR
     *
     * @param {object} [container] DOM element where to insert the analyzer; if undefined, uses the document body
     * @param {object} [options]
     * @returns {object} AudioMotionAnalyzer object
     */
    constructor(container, options = {}) {
      this._ready = false;
      this._aux = {};
      this._canvasGradients = [];
      this._destroyed = false;
      this._energy = { val: 0, peak: 0, hold: 0 };
      this._flg = {};
      this._fps = 0;
      this._gradients = {};
      this._last = 0;
      this._outNodes = [];
      this._ownContext = false;
      this._selectedGrads = [];
      this._sources = [];
      if (!(container instanceof Element)) {
        if (isEmpty(options) && !isEmpty(container))
          options = container;
        container = null;
      }
      this._ownCanvas = !(options.canvas instanceof HTMLCanvasElement);
      const canvas = this._ownCanvas ? document.createElement("canvas") : options.canvas;
      canvas.style = "max-width: 100%;";
      this._ctx = canvas.getContext("2d");
      for (const [name, options2] of GRADIENTS)
        this.registerGradient(name, options2);
      this._container = container || !this._ownCanvas && canvas.parentElement || document.body;
      this._defaultWidth = this._container.clientWidth || 640;
      this._defaultHeight = this._container.clientHeight || 270;
      let audioCtx;
      if (options.source && (audioCtx = options.source.context)) {
      } else if (audioCtx = options.audioCtx) {
      } else {
        try {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          this._ownContext = true;
        } catch (err) {
          throw new AudioMotionError(ERR_AUDIO_CONTEXT_FAIL);
        }
      }
      if (!audioCtx.createGain)
        throw new AudioMotionError(ERR_INVALID_AUDIO_CONTEXT);
      const analyzer = this._analyzer = [audioCtx.createAnalyser(), audioCtx.createAnalyser()];
      const splitter = this._splitter = audioCtx.createChannelSplitter(2);
      const merger = this._merger = audioCtx.createChannelMerger(2);
      this._input = audioCtx.createGain();
      this._output = audioCtx.createGain();
      if (options.source)
        this.connectInput(options.source);
      for (const i of [0, 1])
        splitter.connect(analyzer[i], i);
      merger.connect(this._output);
      if (options.connectSpeakers !== false)
        this.connectOutput();
      for (const ctx of ["_scaleX", "_scaleR"])
        this[ctx] = document.createElement("canvas").getContext("2d");
      this._fsEl = options.fsElement || canvas;
      const onResize = () => {
        if (!this._fsTimeout) {
          this._fsTimeout = window.setTimeout(() => {
            if (!this._fsChanging) {
              this._setCanvas(REASON_RESIZE);
              this._fsTimeout = 0;
            }
          }, DEBOUNCE_TIMEOUT);
        }
      };
      if (window.ResizeObserver) {
        this._observer = new ResizeObserver(onResize);
        this._observer.observe(this._container);
      }
      this._controller = new AbortController();
      const signal = this._controller.signal;
      window.addEventListener(EVENT_RESIZE, onResize, { signal });
      canvas.addEventListener(EVENT_FULLSCREENCHANGE, () => {
        this._fsChanging = true;
        if (this._fsTimeout)
          window.clearTimeout(this._fsTimeout);
        this._setCanvas(REASON_FSCHANGE);
        this._fsTimeout = window.setTimeout(() => {
          this._fsChanging = false;
          this._fsTimeout = 0;
        }, DEBOUNCE_TIMEOUT);
      }, { signal });
      const unlockContext = () => {
        if (audioCtx.state == "suspended")
          audioCtx.resume();
        window.removeEventListener(EVENT_CLICK, unlockContext);
      };
      window.addEventListener(EVENT_CLICK, unlockContext);
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState != "hidden") {
          this._frames = 0;
          this._time = performance.now();
        }
      }, { signal });
      this._setProps(options, true);
      if (this.useCanvas && this._ownCanvas)
        this._container.appendChild(canvas);
      this._ready = true;
      this._setCanvas(REASON_CREATE);
    }
    /**
     * ==========================================================================
     *
     * PUBLIC PROPERTIES GETTERS AND SETTERS
     *
     * ==========================================================================
     */
    get alphaBars() {
      return this._alphaBars;
    }
    set alphaBars(value) {
      this._alphaBars = !!value;
      this._calcBars();
    }
    get ansiBands() {
      return this._ansiBands;
    }
    set ansiBands(value) {
      this._ansiBands = !!value;
      this._calcBars();
    }
    get barSpace() {
      return this._barSpace;
    }
    set barSpace(value) {
      this._barSpace = +value || 0;
      this._calcBars();
    }
    get channelLayout() {
      return this._chLayout;
    }
    set channelLayout(value) {
      this._chLayout = validateFromList(value, [CHANNEL_SINGLE, CHANNEL_HORIZONTAL, CHANNEL_VERTICAL, CHANNEL_COMBINED]);
      this._input.disconnect();
      this._input.connect(this._chLayout != CHANNEL_SINGLE ? this._splitter : this._analyzer[0]);
      this._analyzer[0].disconnect();
      if (this._outNodes.length)
        this._analyzer[0].connect(this._chLayout != CHANNEL_SINGLE ? this._merger : this._output);
      this._calcBars();
      this._makeGrad();
    }
    get colorMode() {
      return this._colorMode;
    }
    set colorMode(value) {
      this._colorMode = validateFromList(value, [COLOR_GRADIENT, COLOR_BAR_INDEX, COLOR_BAR_LEVEL]);
    }
    get fadePeaks() {
      return this._fadePeaks;
    }
    set fadePeaks(value) {
      this._fadePeaks = !!value;
    }
    get fftSize() {
      return this._analyzer[0].fftSize;
    }
    set fftSize(value) {
      for (const i of [0, 1])
        this._analyzer[i].fftSize = value;
      const binCount = this._analyzer[0].frequencyBinCount;
      this._fftData = [new Float32Array(binCount), new Float32Array(binCount)];
      this._calcBars();
    }
    get frequencyScale() {
      return this._frequencyScale;
    }
    set frequencyScale(value) {
      this._frequencyScale = validateFromList(value, [SCALE_LOG, SCALE_BARK, SCALE_MEL, SCALE_LINEAR]);
      this._calcBars();
    }
    get gradient() {
      return this._selectedGrads[0];
    }
    set gradient(value) {
      this._setGradient(value);
    }
    get gradientLeft() {
      return this._selectedGrads[0];
    }
    set gradientLeft(value) {
      this._setGradient(value, 0);
    }
    get gradientRight() {
      return this._selectedGrads[1];
    }
    set gradientRight(value) {
      this._setGradient(value, 1);
    }
    get gravity() {
      return this._gravity;
    }
    set gravity(value) {
      this._gravity = value > 0 ? +value : this._gravity || DEFAULT_SETTINGS.gravity;
    }
    get height() {
      return this._height;
    }
    set height(h) {
      this._height = h;
      this._setCanvas(REASON_USER);
    }
    get ledBars() {
      return this._showLeds;
    }
    set ledBars(value) {
      this._showLeds = !!value;
      this._calcBars();
    }
    get linearAmplitude() {
      return this._linearAmplitude;
    }
    set linearAmplitude(value) {
      this._linearAmplitude = !!value;
    }
    get linearBoost() {
      return this._linearBoost;
    }
    set linearBoost(value) {
      this._linearBoost = value >= 1 ? +value : 1;
    }
    get lineWidth() {
      return this._lineWidth;
    }
    set lineWidth(value) {
      this._lineWidth = +value || 0;
    }
    get loRes() {
      return this._loRes;
    }
    set loRes(value) {
      this._loRes = !!value;
      this._setCanvas(REASON_LORES);
    }
    get lumiBars() {
      return this._lumiBars;
    }
    set lumiBars(value) {
      this._lumiBars = !!value;
      this._calcBars();
      this._makeGrad();
    }
    get maxDecibels() {
      return this._analyzer[0].maxDecibels;
    }
    set maxDecibels(value) {
      for (const i of [0, 1])
        this._analyzer[i].maxDecibels = value;
    }
    get maxFPS() {
      return this._maxFPS;
    }
    set maxFPS(value) {
      this._maxFPS = value < 0 ? 0 : +value || 0;
    }
    get maxFreq() {
      return this._maxFreq;
    }
    set maxFreq(value) {
      if (value < 1)
        throw new AudioMotionError(ERR_FREQUENCY_TOO_LOW);
      else {
        this._maxFreq = Math.min(value, this.audioCtx.sampleRate / 2);
        this._calcBars();
      }
    }
    get minDecibels() {
      return this._analyzer[0].minDecibels;
    }
    set minDecibels(value) {
      for (const i of [0, 1])
        this._analyzer[i].minDecibels = value;
    }
    get minFreq() {
      return this._minFreq;
    }
    set minFreq(value) {
      if (value < 1)
        throw new AudioMotionError(ERR_FREQUENCY_TOO_LOW);
      else {
        this._minFreq = +value;
        this._calcBars();
      }
    }
    get mirror() {
      return this._mirror;
    }
    set mirror(value) {
      this._mirror = Math.sign(value) | 0;
      this._calcBars();
      this._makeGrad();
    }
    get mode() {
      return this._mode;
    }
    set mode(value) {
      const mode = value | 0;
      if (mode >= 0 && mode <= 10 && mode != 9) {
        this._mode = mode;
        this._calcBars();
        this._makeGrad();
      } else
        throw new AudioMotionError(ERR_INVALID_MODE, value);
    }
    get noteLabels() {
      return this._noteLabels;
    }
    set noteLabels(value) {
      this._noteLabels = !!value;
      this._createScales();
    }
    get outlineBars() {
      return this._outlineBars;
    }
    set outlineBars(value) {
      this._outlineBars = !!value;
      this._calcBars();
    }
    get peakFadeTime() {
      return this._peakFadeTime;
    }
    set peakFadeTime(value) {
      this._peakFadeTime = value >= 0 ? +value : this._peakFadeTime || DEFAULT_SETTINGS.peakFadeTime;
    }
    get peakHoldTime() {
      return this._peakHoldTime;
    }
    set peakHoldTime(value) {
      this._peakHoldTime = +value || 0;
    }
    get peakLine() {
      return this._peakLine;
    }
    set peakLine(value) {
      this._peakLine = !!value;
    }
    get radial() {
      return this._radial;
    }
    set radial(value) {
      this._radial = !!value;
      this._calcBars();
      this._makeGrad();
    }
    get radialInvert() {
      return this._radialInvert;
    }
    set radialInvert(value) {
      this._radialInvert = !!value;
      this._calcBars();
      this._makeGrad();
    }
    get radius() {
      return this._radius;
    }
    set radius(value) {
      this._radius = +value || 0;
      this._calcBars();
      this._makeGrad();
    }
    get reflexRatio() {
      return this._reflexRatio;
    }
    set reflexRatio(value) {
      value = +value || 0;
      if (value < 0 || value >= 1)
        throw new AudioMotionError(ERR_REFLEX_OUT_OF_RANGE);
      else {
        this._reflexRatio = value;
        this._calcBars();
        this._makeGrad();
      }
    }
    get roundBars() {
      return this._roundBars;
    }
    set roundBars(value) {
      this._roundBars = !!value;
      this._calcBars();
    }
    get smoothing() {
      return this._analyzer[0].smoothingTimeConstant;
    }
    set smoothing(value) {
      for (const i of [0, 1])
        this._analyzer[i].smoothingTimeConstant = value;
    }
    get spinSpeed() {
      return this._spinSpeed;
    }
    set spinSpeed(value) {
      value = +value || 0;
      if (this._spinSpeed === void 0 || value == 0)
        this._spinAngle = -HALF_PI;
      this._spinSpeed = value;
    }
    get splitGradient() {
      return this._splitGradient;
    }
    set splitGradient(value) {
      this._splitGradient = !!value;
      this._makeGrad();
    }
    get stereo() {
      deprecate("stereo", "channelLayout");
      return this._chLayout != CHANNEL_SINGLE;
    }
    set stereo(value) {
      deprecate("stereo", "channelLayout");
      this.channelLayout = value ? CHANNEL_VERTICAL : CHANNEL_SINGLE;
    }
    get trueLeds() {
      return this._trueLeds;
    }
    set trueLeds(value) {
      this._trueLeds = !!value;
    }
    get volume() {
      return this._output.gain.value;
    }
    set volume(value) {
      this._output.gain.value = value;
    }
    get weightingFilter() {
      return this._weightingFilter;
    }
    set weightingFilter(value) {
      this._weightingFilter = validateFromList(value, [FILTER_NONE, FILTER_A, FILTER_B, FILTER_C, FILTER_D, FILTER_468], "toUpperCase");
    }
    get width() {
      return this._width;
    }
    set width(w) {
      this._width = w;
      this._setCanvas(REASON_USER);
    }
    // Read only properties
    get audioCtx() {
      return this._input.context;
    }
    get canvas() {
      return this._ctx.canvas;
    }
    get canvasCtx() {
      return this._ctx;
    }
    get connectedSources() {
      return this._sources;
    }
    get connectedTo() {
      return this._outNodes;
    }
    get fps() {
      return this._fps;
    }
    get fsHeight() {
      return this._fsHeight;
    }
    get fsWidth() {
      return this._fsWidth;
    }
    get isAlphaBars() {
      return this._flg.isAlpha;
    }
    get isBandsMode() {
      return this._flg.isBands;
    }
    get isDestroyed() {
      return this._destroyed;
    }
    get isFullscreen() {
      return this._fsEl && (document.fullscreenElement || document.webkitFullscreenElement) === this._fsEl;
    }
    get isLedBars() {
      return this._flg.isLeds;
    }
    get isLumiBars() {
      return this._flg.isLumi;
    }
    get isOctaveBands() {
      return this._flg.isOctaves;
    }
    get isOn() {
      return !!this._runId;
    }
    get isOutlineBars() {
      return this._flg.isOutline;
    }
    get pixelRatio() {
      return this._pixelRatio;
    }
    get isRoundBars() {
      return this._flg.isRound;
    }
    static get version() {
      return VERSION;
    }
    /**
     * ==========================================================================
        *
     * PUBLIC METHODS
     *
     * ==========================================================================
     */
    /**
     * Connects an HTML media element or audio node to the analyzer
     *
     * @param {object} an instance of HTMLMediaElement or AudioNode
     * @returns {object} a MediaElementAudioSourceNode object if created from HTML element, or the same input object otherwise
     */
    connectInput(source) {
      const isHTML = source instanceof HTMLMediaElement;
      if (!(isHTML || source.connect))
        throw new AudioMotionError(ERR_INVALID_AUDIO_SOURCE);
      const node = isHTML ? this.audioCtx.createMediaElementSource(source) : source;
      if (!this._sources.includes(node)) {
        node.connect(this._input);
        this._sources.push(node);
      }
      return node;
    }
    /**
     * Connects the analyzer output to another audio node
     *
     * @param [{object}] an AudioNode; if undefined, the output is connected to the audio context destination (speakers)
     */
    connectOutput(node = this.audioCtx.destination) {
      if (this._outNodes.includes(node))
        return;
      this._output.connect(node);
      this._outNodes.push(node);
      if (this._outNodes.length == 1) {
        for (const i of [0, 1])
          this._analyzer[i].connect(this._chLayout == CHANNEL_SINGLE && !i ? this._output : this._merger, 0, i);
      }
    }
    /**
     * Destroys instance
     */
    destroy() {
      if (!this._ready)
        return;
      const { audioCtx, canvas, _controller, _input, _merger, _observer, _ownCanvas, _ownContext, _splitter } = this;
      this._destroyed = true;
      this._ready = false;
      this.stop();
      _controller.abort();
      if (_observer)
        _observer.disconnect();
      this.onCanvasResize = null;
      this.onCanvasDraw = null;
      this._fsEl = null;
      this.disconnectInput();
      this.disconnectOutput();
      _input.disconnect();
      _splitter.disconnect();
      _merger.disconnect();
      if (_ownContext)
        audioCtx.close();
      if (_ownCanvas)
        canvas.remove();
      this._calcBars();
    }
    /**
     * Disconnects audio sources from the analyzer
     *
     * @param [{object|array}] a connected AudioNode object or an array of such objects; if falsy, all connected nodes are disconnected
     * @param [{boolean}] if true, stops/releases audio tracks from disconnected media streams (e.g. microphone)
     */
    disconnectInput(sources, stopTracks) {
      if (!sources)
        sources = Array.from(this._sources);
      else if (!Array.isArray(sources))
        sources = [sources];
      for (const node of sources) {
        const idx = this._sources.indexOf(node);
        if (stopTracks && node.mediaStream) {
          for (const track of node.mediaStream.getAudioTracks()) {
            track.stop();
          }
        }
        if (idx >= 0) {
          node.disconnect(this._input);
          this._sources.splice(idx, 1);
        }
      }
    }
    /**
     * Disconnects the analyzer output from other audio nodes
     *
     * @param [{object}] a connected AudioNode object; if undefined, all connected nodes are disconnected
     */
    disconnectOutput(node) {
      if (node && !this._outNodes.includes(node))
        return;
      this._output.disconnect(node);
      this._outNodes = node ? this._outNodes.filter((e) => e !== node) : [];
      if (this._outNodes.length == 0) {
        for (const i of [0, 1])
          this._analyzer[i].disconnect();
      }
    }
    /**
     * Returns analyzer bars data
        *
     * @returns {array}
     */
    getBars() {
      return Array.from(this._bars, ({ posX, freq, freqLo, freqHi, hold, peak, value }) => ({ posX, freq, freqLo, freqHi, hold, peak, value }));
    }
    /**
     * Returns the energy of a frequency, or average energy of a range of frequencies
     *
     * @param [{number|string}] single or initial frequency (Hz), or preset name; if undefined, returns the overall energy
     * @param [{number}] ending frequency (Hz)
     * @returns {number|null} energy value (0 to 1) or null, if the specified preset is unknown
     */
    getEnergy(startFreq, endFreq) {
      if (startFreq === void 0)
        return this._energy.val;
      if (startFreq != +startFreq) {
        if (startFreq == "peak")
          return this._energy.peak;
        const presets = {
          bass: [20, 250],
          lowMid: [250, 500],
          mid: [500, 2e3],
          highMid: [2e3, 4e3],
          treble: [4e3, 16e3]
        };
        if (!presets[startFreq])
          return null;
        [startFreq, endFreq] = presets[startFreq];
      }
      const startBin = this._freqToBin(startFreq), endBin = endFreq ? this._freqToBin(endFreq) : startBin, chnCount = this._chLayout == CHANNEL_SINGLE ? 1 : 2;
      let energy = 0;
      for (let channel = 0; channel < chnCount; channel++) {
        for (let i = startBin; i <= endBin; i++)
          energy += this._normalizedB(this._fftData[channel][i]);
      }
      return energy / (endBin - startBin + 1) / chnCount;
    }
    /**
     * Returns current analyzer settings in object format
     *
     * @param [{string|array}] a property name or an array of property names to not include in the returned object
     * @returns {object} Options object
     */
    getOptions(ignore) {
      if (!Array.isArray(ignore))
        ignore = [ignore];
      let options = {};
      for (const prop of Object.keys(DEFAULT_SETTINGS)) {
        if (!ignore.includes(prop)) {
          if (prop == "gradient" && this.gradientLeft != this.gradientRight) {
            options.gradientLeft = this.gradientLeft;
            options.gradientRight = this.gradientRight;
          } else if (prop != "start")
            options[prop] = this[prop];
        }
      }
      return options;
    }
    /**
     * Registers a custom gradient
     *
     * @param {string} name
     * @param {object} options
     */
    registerGradient(name, options) {
      if (typeof name != "string" || name.trim().length == 0)
        throw new AudioMotionError(ERR_GRADIENT_INVALID_NAME);
      if (typeof options != "object")
        throw new AudioMotionError(ERR_GRADIENT_NOT_AN_OBJECT);
      const { colorStops } = options;
      if (!Array.isArray(colorStops) || !colorStops.length)
        throw new AudioMotionError(ERR_GRADIENT_MISSING_COLOR);
      const count = colorStops.length, isInvalid = (val) => +val != val || val < 0 || val > 1;
      colorStops.forEach((colorStop, index) => {
        const pos = index / Math.max(1, count - 1);
        if (typeof colorStop != "object")
          colorStops[index] = { pos, color: colorStop };
        else if (isInvalid(colorStop.pos))
          colorStop.pos = pos;
        if (isInvalid(colorStop.level))
          colorStops[index].level = 1 - index / count;
      });
      colorStops.sort((a, b) => a.level < b.level ? 1 : a.level > b.level ? -1 : 0);
      colorStops[0].level = 1;
      this._gradients[name] = {
        bgColor: options.bgColor || GRADIENT_DEFAULT_BGCOLOR,
        dir: options.dir,
        colorStops
      };
      if (this._selectedGrads.includes(name))
        this._makeGrad();
    }
    /**
     * Set dimensions of analyzer's canvas
     *
     * @param {number} w width in pixels
     * @param {number} h height in pixels
     */
    setCanvasSize(w, h) {
      this._width = w;
      this._height = h;
      this._setCanvas(REASON_USER);
    }
    /**
     * Set desired frequency range
     *
     * @param {number} min lowest frequency represented in the x-axis
     * @param {number} max highest frequency represented in the x-axis
     */
    setFreqRange(min, max) {
      if (min < 1 || max < 1)
        throw new AudioMotionError(ERR_FREQUENCY_TOO_LOW);
      else {
        this._minFreq = Math.min(min, max);
        this.maxFreq = Math.max(min, max);
      }
    }
    /**
     * Set custom parameters for LED effect
     * If called with no arguments or if any property is invalid, clears any previous custom parameters
     *
     * @param {object} [params]
     */
    setLedParams(params) {
      let maxLeds, spaceV, spaceH;
      if (params) {
        maxLeds = params.maxLeds | 0, // ensure integer
        spaceV = +params.spaceV, spaceH = +params.spaceH;
      }
      this._ledParams = maxLeds > 0 && spaceV > 0 && spaceH >= 0 ? [maxLeds, spaceV, spaceH] : void 0;
      this._calcBars();
    }
    /**
     * Shorthand function for setting several options at once
     *
     * @param {object} options
     */
    setOptions(options) {
      this._setProps(options);
    }
    /**
     * Adjust the analyzer's sensitivity
     *
     * @param {number} min minimum decibels value
     * @param {number} max maximum decibels value
     */
    setSensitivity(min, max) {
      for (const i of [0, 1]) {
        this._analyzer[i].minDecibels = Math.min(min, max);
        this._analyzer[i].maxDecibels = Math.max(min, max);
      }
    }
    /**
     * Start the analyzer
     */
    start() {
      this.toggleAnalyzer(true);
    }
    /**
     * Stop the analyzer
     */
    stop() {
      this.toggleAnalyzer(false);
    }
    /**
     * Start / stop canvas animation
     *
     * @param {boolean} [force] if undefined, inverts the current state
     * @returns {boolean} resulting state after the change
     */
    toggleAnalyzer(force) {
      const hasStarted = this.isOn;
      if (force === void 0)
        force = !hasStarted;
      if (hasStarted && !force) {
        cancelAnimationFrame(this._runId);
        this._runId = 0;
      } else if (!hasStarted && force && !this._destroyed) {
        this._frames = 0;
        this._time = performance.now();
        this._runId = requestAnimationFrame((timestamp) => this._draw(timestamp));
      }
      return this.isOn;
    }
    /**
     * Toggles canvas full-screen mode
     */
    toggleFullscreen() {
      if (this.isFullscreen) {
        if (document.exitFullscreen)
          document.exitFullscreen();
        else if (document.webkitExitFullscreen)
          document.webkitExitFullscreen();
      } else {
        const fsEl = this._fsEl;
        if (!fsEl)
          return;
        if (fsEl.requestFullscreen)
          fsEl.requestFullscreen();
        else if (fsEl.webkitRequestFullscreen)
          fsEl.webkitRequestFullscreen();
      }
    }
    /**
     * ==========================================================================
     *
     * PRIVATE METHODS
     *
     * ==========================================================================
     */
    /**
     * Return the frequency (in Hz) for a given FFT bin
     */
    _binToFreq(bin) {
      return bin * this.audioCtx.sampleRate / this.fftSize || 1;
    }
    /**
     * Compute all internal data required for the analyzer, based on its current settings
     */
    _calcBars() {
      const bars = this._bars = [];
      if (!this._ready) {
        this._flg = { isAlpha: false, isBands: false, isLeds: false, isLumi: false, isOctaves: false, isOutline: false, isRound: false, noLedGap: false };
        return;
      }
      const { _ansiBands, _barSpace, canvas, _chLayout, _maxFreq, _minFreq, _mirror, _mode, _radial, _radialInvert, _reflexRatio } = this, centerX = canvas.width >> 1, centerY = canvas.height >> 1, isDualVertical = _chLayout == CHANNEL_VERTICAL && !_radial, isDualHorizontal = _chLayout == CHANNEL_HORIZONTAL, isBands = _mode % 10 != 0, isOctaves = isBands && this._frequencyScale == SCALE_LOG, isLeds = this._showLeds && isBands && !_radial, isLumi = this._lumiBars && isBands && !_radial, isAlpha = this._alphaBars && !isLumi && _mode != MODE_GRAPH, isOutline = this._outlineBars && isBands && !isLumi && !isLeds, isRound = this._roundBars && isBands && !isLumi && !isLeds, noLedGap = _chLayout != CHANNEL_VERTICAL || _reflexRatio > 0 && !isLumi, channelHeight = canvas.height - (isDualVertical && !isLeds ? 0.5 : 0) >> isDualVertical, analyzerHeight = channelHeight * (isLumi || _radial ? 1 : 1 - _reflexRatio) | 0, analyzerWidth = canvas.width - centerX * (isDualHorizontal || _mirror != 0), channelGap = isDualVertical ? canvas.height - channelHeight * 2 : 0, initialX = centerX * (_mirror == -1 && !isDualHorizontal && !_radial);
      let innerRadius = Math.min(canvas.width, canvas.height) * 0.375 * (_chLayout == CHANNEL_VERTICAL ? 1 : this._radius) | 0, outerRadius = Math.min(centerX, centerY);
      if (_radialInvert && _chLayout != CHANNEL_VERTICAL)
        [innerRadius, outerRadius] = [outerRadius, innerRadius];
      const barsPush = (args) => bars.push({ ...args, peak: [0, 0], hold: [0], alpha: [0], value: [0] });
      const calcRatio = (freq) => {
        const bin = this._freqToBin(freq, "floor"), lower = this._binToFreq(bin), upper = this._binToFreq(bin + 1), ratio = Math.log2(freq / lower) / Math.log2(upper / lower);
        return [bin, ratio];
      };
      let barWidth, scaleMin, unitWidth;
      if (isOctaves) {
        const roundSD = (value, digits, atLeast) => +value.toPrecision(atLeast ? Math.max(digits, 1 + Math.log10(value) | 0) : digits);
        const nearestPreferred = (value) => {
          const preferred = [1, 1.12, 1.25, 1.4, 1.6, 1.8, 2, 2.24, 2.5, 2.8, 3.15, 3.55, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10], power = Math.log10(value) | 0, normalized = value / 10 ** power;
          let i = 1;
          while (i < preferred.length && normalized > preferred[i])
            i++;
          if (normalized - preferred[i - 1] < preferred[i] - normalized)
            i--;
          return (preferred[i] * 10 ** (power + 5) | 0) / 1e5;
        };
        const bands = [0, 24, 12, 8, 6, 4, 3, 2, 1][_mode], bandWidth = _ansiBands ? 10 ** (3 / (bands * 10)) : 2 ** (1 / bands), halfBand = bandWidth ** 0.5;
        let analyzerBars = [], currFreq = _ansiBands ? 7.94328235 / (bands % 2 ? 1 : halfBand) : C_1;
        do {
          let freq = currFreq;
          const freqLo = roundSD(freq / halfBand, 4, true), freqHi = roundSD(freq * halfBand, 4, true), [binLo, ratioLo] = calcRatio(freqLo), [binHi, ratioHi] = calcRatio(freqHi);
          if (_ansiBands)
            freq = bands < 4 ? nearestPreferred(freq) : roundSD(freq, freq.toString()[0] < 5 ? 3 : 2);
          else
            freq = roundSD(freq, 4, true);
          if (freq >= _minFreq)
            barsPush({ posX: 0, freq, freqLo, freqHi, binLo, binHi, ratioLo, ratioHi });
          currFreq *= bandWidth;
        } while (currFreq <= _maxFreq);
        barWidth = analyzerWidth / bars.length;
        bars.forEach((bar, index) => bar.posX = initialX + index * barWidth);
        const firstBar = bars[0], lastBar = bars[bars.length - 1];
        scaleMin = this._freqScaling(firstBar.freqLo);
        unitWidth = analyzerWidth / (this._freqScaling(lastBar.freqHi) - scaleMin);
        if (firstBar.freqLo < _minFreq) {
          firstBar.freqLo = _minFreq;
          [firstBar.binLo, firstBar.ratioLo] = calcRatio(_minFreq);
        }
        if (lastBar.freqHi > _maxFreq) {
          lastBar.freqHi = _maxFreq;
          [lastBar.binHi, lastBar.ratioHi] = calcRatio(_maxFreq);
        }
      } else if (isBands) {
        const bands = [0, 24, 12, 8, 6, 4, 3, 2, 1][_mode] * 10;
        const invFreqScaling = (x) => {
          switch (this._frequencyScale) {
            case SCALE_BARK:
              return 1960 / (26.81 / (x + 0.53) - 1);
            case SCALE_MEL:
              return 700 * (2 ** x - 1);
            case SCALE_LINEAR:
              return x;
          }
        };
        barWidth = analyzerWidth / bands;
        scaleMin = this._freqScaling(_minFreq);
        unitWidth = analyzerWidth / (this._freqScaling(_maxFreq) - scaleMin);
        for (let i = 0, posX = 0; i < bands; i++, posX += barWidth) {
          const freqLo = invFreqScaling(scaleMin + posX / unitWidth), freq = invFreqScaling(scaleMin + (posX + barWidth / 2) / unitWidth), freqHi = invFreqScaling(scaleMin + (posX + barWidth) / unitWidth), [binLo, ratioLo] = calcRatio(freqLo), [binHi, ratioHi] = calcRatio(freqHi);
          barsPush({ posX: initialX + posX, freq, freqLo, freqHi, binLo, binHi, ratioLo, ratioHi });
        }
      } else {
        barWidth = 1;
        scaleMin = this._freqScaling(_minFreq);
        unitWidth = analyzerWidth / (this._freqScaling(_maxFreq) - scaleMin);
        const minIndex = this._freqToBin(_minFreq, "floor"), maxIndex = this._freqToBin(_maxFreq);
        let lastPos = -999;
        for (let i = minIndex; i <= maxIndex; i++) {
          const freq = this._binToFreq(i), posX = initialX + Math.round(unitWidth * (this._freqScaling(freq) - scaleMin));
          if (posX > lastPos) {
            barsPush({ posX, freq, freqLo: freq, freqHi: freq, binLo: i, binHi: i, ratioLo: 0, ratioHi: 0 });
            lastPos = posX;
          } else if (bars.length) {
            const lastBar = bars[bars.length - 1];
            lastBar.binHi = i;
            lastBar.freqHi = freq;
            lastBar.freq = (lastBar.freqLo * freq) ** 0.5;
          }
        }
      }
      let spaceH = 0, spaceV = 0;
      if (isLeds) {
        const dPR = this._pixelRatio / (window.devicePixelRatio > 1 && window.screen.height <= 540 ? 2 : 1);
        const params = [
          [],
          [128, 3, 0.45],
          // mode 1
          [128, 4, 0.225],
          // mode 2
          [96, 6, 0.225],
          // mode 3
          [80, 6, 0.225],
          // mode 4
          [80, 6, 0.125],
          // mode 5
          [64, 6, 0.125],
          // mode 6
          [48, 8, 0.125],
          // mode 7
          [24, 16, 0.125]
          // mode 8
        ];
        const customParams = this._ledParams, [maxLeds, spaceVRatio, spaceHRatio] = customParams || params[_mode];
        let ledCount, maxHeight = analyzerHeight;
        if (customParams) {
          const minHeight = 2 * dPR;
          let blockHeight;
          ledCount = maxLeds + 1;
          do {
            ledCount--;
            blockHeight = maxHeight / ledCount / (1 + spaceVRatio);
            spaceV = blockHeight * spaceVRatio;
          } while ((blockHeight < minHeight || spaceV < minHeight) && ledCount > 1);
        } else {
          const refRatio = 540 / spaceVRatio;
          spaceV = Math.min(spaceVRatio * dPR, Math.max(2, maxHeight / refRatio + 0.1 | 0));
        }
        if (noLedGap)
          maxHeight += spaceV;
        if (!customParams)
          ledCount = Math.min(maxLeds, maxHeight / (spaceV * 2) | 0);
        spaceH = spaceHRatio >= 1 ? spaceHRatio : barWidth * spaceHRatio;
        this._leds = [
          ledCount,
          spaceH,
          spaceV,
          maxHeight / ledCount - spaceV
          // ledHeight
        ];
      }
      const barSpacePx = Math.min(barWidth - 1, _barSpace * (_barSpace > 0 && _barSpace < 1 ? barWidth : 1));
      if (isBands)
        barWidth -= Math.max(isLeds ? spaceH : 0, barSpacePx);
      bars.forEach((bar, index) => {
        let posX = bar.posX, width = barWidth;
        if (isBands) {
          if (_barSpace == 0 && !isLeds) {
            posX |= 0;
            width |= 0;
            if (index > 0 && posX > bars[index - 1].posX + bars[index - 1].width) {
              posX--;
              width++;
            }
          } else
            posX += Math.max(isLeds ? spaceH : 0, barSpacePx) / 2;
          bar.posX = posX;
        }
        bar.barCenter = posX + (barWidth == 1 ? 0 : width / 2);
        bar.width = width;
      });
      const channelCoords = [];
      for (const channel of [0, 1]) {
        const channelTop = _chLayout == CHANNEL_VERTICAL ? (channelHeight + channelGap) * channel : 0, channelBottom = channelTop + channelHeight, analyzerBottom = channelTop + analyzerHeight - (!isLeds || noLedGap ? 0 : spaceV);
        channelCoords.push({ channelTop, channelBottom, analyzerBottom });
      }
      this._aux = { analyzerHeight, analyzerWidth, centerX, centerY, channelCoords, channelHeight, channelGap, initialX, innerRadius, outerRadius, scaleMin, unitWidth };
      this._flg = { isAlpha, isBands, isLeds, isLumi, isOctaves, isOutline, isRound, noLedGap };
      this._createScales();
    }
    /**
     * Generate the X-axis and radial scales in auxiliary canvases
     */
    _createScales() {
      if (!this._ready)
        return;
      const { analyzerWidth, initialX, innerRadius, scaleMin, unitWidth } = this._aux, { canvas, _frequencyScale, _mirror, _noteLabels, _radial, _scaleX, _scaleR } = this, canvasX = _scaleX.canvas, canvasR = _scaleR.canvas, freqLabels = [], isDualHorizontal = this._chLayout == CHANNEL_HORIZONTAL, isDualVertical = this._chLayout == CHANNEL_VERTICAL, minDimension = Math.min(canvas.width, canvas.height), scale = ["C", , "D", , "E", "F", , "G", , "A", , "B"], scaleHeight = minDimension / 34 | 0, fontSizeX = canvasX.height >> 1, fontSizeR = scaleHeight >> 1, labelWidthX = fontSizeX * (_noteLabels ? 0.7 : 1.5), labelWidthR = fontSizeR * (_noteLabels ? 1 : 2), root12 = 2 ** (1 / 12);
      if (!_noteLabels && (this._ansiBands || _frequencyScale != SCALE_LOG)) {
        freqLabels.push(16, 31.5, 63, 125, 250, 500, 1e3, 2e3, 4e3);
        if (_frequencyScale == SCALE_LINEAR)
          freqLabels.push(6e3, 8e3, 1e4, 12e3, 14e3, 16e3, 18e3, 2e4, 22e3);
        else
          freqLabels.push(8e3, 16e3);
      } else {
        let freq = C_1;
        for (let octave = -1; octave < 11; octave++) {
          for (let note = 0; note < 12; note++) {
            if (freq >= this._minFreq && freq <= this._maxFreq) {
              const pitch = scale[note], isC = pitch == "C";
              if (pitch && _noteLabels && !_mirror && !isDualHorizontal || isC)
                freqLabels.push(_noteLabels ? [freq, pitch + (isC ? octave : "")] : freq);
            }
            freq *= root12;
          }
        }
      }
      canvasR.width = canvasR.height = Math.max(minDimension * 0.15, (innerRadius << 1) + isDualVertical * scaleHeight);
      const centerR = canvasR.width >> 1, radialY = centerR - scaleHeight * 0.7;
      const radialLabel = (x, label) => {
        const angle = TAU * (x / canvas.width), adjAng = angle - HALF_PI, posX = radialY * Math.cos(adjAng), posY = radialY * Math.sin(adjAng);
        _scaleR.save();
        _scaleR.translate(centerR + posX, centerR + posY);
        _scaleR.rotate(angle);
        _scaleR.fillText(label, 0, 0);
        _scaleR.restore();
      };
      canvasX.width |= 0;
      _scaleX.fillStyle = _scaleR.strokeStyle = SCALEX_BACKGROUND_COLOR;
      _scaleX.fillRect(0, 0, canvasX.width, canvasX.height);
      _scaleR.arc(centerR, centerR, centerR - scaleHeight / 2, 0, TAU);
      _scaleR.lineWidth = scaleHeight;
      _scaleR.stroke();
      _scaleX.fillStyle = _scaleR.fillStyle = SCALEX_LABEL_COLOR;
      _scaleX.font = `${fontSizeX}px ${FONT_FAMILY}`;
      _scaleR.font = `${fontSizeR}px ${FONT_FAMILY}`;
      _scaleX.textAlign = _scaleR.textAlign = "center";
      let prevX = -labelWidthX / 4, prevR = -labelWidthR;
      for (const item of freqLabels) {
        const [freq, label] = Array.isArray(item) ? item : [item, item < 1e3 ? item | 0 : `${(item / 100 | 0) / 10}k`], x = unitWidth * (this._freqScaling(freq) - scaleMin), y = canvasX.height * 0.75, isC = label[0] == "C", maxW = fontSizeX * (_noteLabels && !_mirror && !isDualHorizontal ? isC ? 1.2 : 0.6 : 3);
        _scaleX.fillStyle = _scaleR.fillStyle = isC && !_mirror && !isDualHorizontal ? SCALEX_HIGHLIGHT_COLOR : SCALEX_LABEL_COLOR;
        if (_noteLabels) {
          const isLog = _frequencyScale == SCALE_LOG, isLinear = _frequencyScale == SCALE_LINEAR;
          let allowedLabels = ["C"];
          if (isLog || freq > 2e3 || !isLinear && freq > 250 || (!_radial || isDualVertical) && (!isLinear && freq > 125 || freq > 1e3))
            allowedLabels.push("G");
          if (isLog || freq > 4e3 || !isLinear && freq > 500 || (!_radial || isDualVertical) && (!isLinear && freq > 250 || freq > 2e3))
            allowedLabels.push("E");
          if (isLinear && freq > 4e3 || (!_radial || isDualVertical) && (isLog || freq > 2e3 || !isLinear && freq > 500))
            allowedLabels.push("D", "F", "A", "B");
          if (!allowedLabels.includes(label[0]))
            continue;
        }
        if (x >= prevX + labelWidthX / 2 && x <= analyzerWidth) {
          _scaleX.fillText(label, isDualHorizontal && _mirror == -1 ? analyzerWidth - x : initialX + x, y, maxW);
          if (isDualHorizontal || _mirror && (x > labelWidthX || _mirror == 1))
            _scaleX.fillText(label, isDualHorizontal && _mirror != 1 ? analyzerWidth + x : (initialX || canvas.width) - x, y, maxW);
          prevX = x + Math.min(maxW, _scaleX.measureText(label).width) / 2;
        }
        if (x >= prevR + labelWidthR && x < analyzerWidth - labelWidthR) {
          radialLabel(isDualHorizontal && _mirror == 1 ? analyzerWidth - x : x, label);
          if (isDualHorizontal || _mirror && (x > labelWidthR || _mirror == 1))
            radialLabel(isDualHorizontal && _mirror != -1 ? analyzerWidth + x : -x, label);
          prevR = x;
        }
      }
    }
    /**
     * Redraw the canvas
     * this is called 60 times per second by requestAnimationFrame()
     */
    _draw(timestamp) {
      this._runId = requestAnimationFrame((timestamp2) => this._draw(timestamp2));
      const elapsed = timestamp - this._time, frameTime = timestamp - this._last, targetInterval = this._maxFPS ? 975 / this._maxFPS : 0;
      if (frameTime < targetInterval)
        return;
      this._last = timestamp - (targetInterval ? frameTime % targetInterval : 0);
      this._frames++;
      if (elapsed >= 1e3) {
        this._fps = this._frames / elapsed * 1e3;
        this._frames = 0;
        this._time = timestamp;
      }
      const {
        isAlpha,
        isBands,
        isLeds,
        isLumi,
        isOctaves,
        isOutline,
        isRound,
        noLedGap
      } = this._flg, {
        analyzerHeight,
        centerX,
        centerY,
        channelCoords,
        channelHeight,
        channelGap,
        initialX,
        innerRadius,
        outerRadius
      } = this._aux, {
        _bars,
        canvas,
        _canvasGradients,
        _chLayout,
        _colorMode,
        _ctx,
        _energy,
        _fadePeaks,
        fillAlpha,
        _fps,
        _linearAmplitude,
        _lineWidth,
        maxDecibels,
        minDecibels,
        _mirror,
        _mode,
        overlay,
        _radial,
        showBgColor,
        showPeaks,
        useCanvas,
        _weightingFilter
      } = this, canvasX = this._scaleX.canvas, canvasR = this._scaleR.canvas, fadeFrames = _fps * this._peakFadeTime / 1e3, fpsSquared = _fps ** 2, gravity = this._gravity * 1e3, holdFrames = _fps * this._peakHoldTime / 1e3, isDualCombined = _chLayout == CHANNEL_COMBINED, isDualHorizontal = _chLayout == CHANNEL_HORIZONTAL, isDualVertical = _chLayout == CHANNEL_VERTICAL, isSingle = _chLayout == CHANNEL_SINGLE, isTrueLeds = isLeds && this._trueLeds && _colorMode == COLOR_GRADIENT, analyzerWidth = _radial ? canvas.width : this._aux.analyzerWidth, finalX = initialX + analyzerWidth, showPeakLine = showPeaks && this._peakLine && _mode == MODE_GRAPH, maxBarHeight = _radial ? outerRadius - innerRadius : analyzerHeight, nominalMaxHeight = maxBarHeight / this._pixelRatio, dbRange = maxDecibels - minDecibels, [ledCount, ledSpaceH, ledSpaceV, ledHeight] = this._leds || [];
      if (_energy.val > 0 && _fps > 0)
        this._spinAngle += this._spinSpeed * TAU / 60 / _fps;
      const doReflex = (channel) => {
        if (this._reflexRatio > 0 && !isLumi && !_radial) {
          let posY, height;
          if (this.reflexFit || isDualVertical) {
            posY = isDualVertical && channel == 0 ? channelHeight + channelGap : 0;
            height = channelHeight - analyzerHeight;
          } else {
            posY = canvas.height - analyzerHeight * 2;
            height = analyzerHeight;
          }
          _ctx.save();
          _ctx.globalAlpha = this.reflexAlpha;
          if (this.reflexBright != 1)
            _ctx.filter = `brightness(${this.reflexBright})`;
          _ctx.setTransform(1, 0, 0, -1, 0, canvas.height);
          _ctx.drawImage(canvas, 0, channelCoords[channel].channelTop, canvas.width, analyzerHeight, 0, posY, canvas.width, height);
          _ctx.restore();
        }
      };
      const drawScaleX = () => {
        if (this.showScaleX) {
          if (_radial) {
            _ctx.save();
            _ctx.translate(centerX, centerY);
            if (this._spinSpeed)
              _ctx.rotate(this._spinAngle + HALF_PI);
            _ctx.drawImage(canvasR, -canvasR.width >> 1, -canvasR.width >> 1);
            _ctx.restore();
          } else
            _ctx.drawImage(canvasX, 0, canvas.height - canvasX.height);
        }
      };
      const weightingdB = (freq) => {
        const f2 = freq ** 2, SQ20_6 = 424.36, SQ107_7 = 11599.29, SQ158_5 = 25122.25, SQ737_9 = 544496.41, SQ12194 = 148693636, linearTodB = (value) => 20 * Math.log10(value);
        switch (_weightingFilter) {
          case FILTER_A:
            const rA = SQ12194 * f2 ** 2 / ((f2 + SQ20_6) * Math.sqrt((f2 + SQ107_7) * (f2 + SQ737_9)) * (f2 + SQ12194));
            return 2 + linearTodB(rA);
          case FILTER_B:
            const rB = SQ12194 * f2 * freq / ((f2 + SQ20_6) * Math.sqrt(f2 + SQ158_5) * (f2 + SQ12194));
            return 0.17 + linearTodB(rB);
          case FILTER_C:
            const rC = SQ12194 * f2 / ((f2 + SQ20_6) * (f2 + SQ12194));
            return 0.06 + linearTodB(rC);
          case FILTER_D:
            const h = ((103791848e-2 - f2) ** 2 + 108076816e-2 * f2) / ((9837328 - f2) ** 2 + 11723776 * f2), rD = freq / 68966888496476e-18 * Math.sqrt(h / ((f2 + 79919.29) * (f2 + 1345600)));
            return linearTodB(rD);
          case FILTER_468:
            const h1 = -4737338981378384e-39 * freq ** 6 + 2043828333606125e-30 * freq ** 4 - 1363894795463638e-22 * f2 + 1, h2 = 1306612257412824e-34 * freq ** 5 - 2118150887518656e-26 * freq ** 3 + 5559488023498642e-19 * freq, rI = 1246332637532143e-19 * freq / Math.hypot(h1, h2);
            return 18.2 + linearTodB(rI);
        }
        return 0;
      };
      const strokeBar = (x, y1, y2) => {
        _ctx.beginPath();
        _ctx.moveTo(x, y1);
        _ctx.lineTo(x, y2);
        _ctx.stroke();
      };
      const strokeIf = (flag) => {
        if (flag && _lineWidth) {
          const alpha = _ctx.globalAlpha;
          _ctx.globalAlpha = 1;
          _ctx.stroke();
          _ctx.globalAlpha = alpha;
        }
      };
      const ledPosY = (value) => Math.max(0, (value * ledCount | 0) * (ledHeight + ledSpaceV) - ledSpaceV);
      const updateEnergy = (newVal) => {
        _energy.val = newVal;
        if (_energy.peak > 0) {
          _energy.hold--;
          if (_energy.hold < 0)
            _energy.peak += _energy.hold * gravity / fpsSquared / canvas.height * this._pixelRatio;
        }
        if (newVal >= _energy.peak) {
          _energy.peak = newVal;
          _energy.hold = holdFrames;
        }
      };
      if (overlay)
        _ctx.clearRect(0, 0, canvas.width, canvas.height);
      let currentEnergy = 0;
      const nBars = _bars.length, nChannels = isSingle ? 1 : 2;
      for (let channel = 0; channel < nChannels; channel++) {
        const { channelTop, channelBottom, analyzerBottom } = channelCoords[channel], channelGradient = this._gradients[this._selectedGrads[channel]], colorStops = channelGradient.colorStops, colorCount = colorStops.length, bgColor = !showBgColor || isLeds && !overlay ? "#000" : channelGradient.bgColor, radialDirection = isDualVertical && _radial && channel ? -1 : 1, invertedChannel = !channel && _mirror == -1 || channel && _mirror == 1, radialOffsetX = !isDualHorizontal || channel && _mirror != 1 ? 0 : analyzerWidth >> (channel || !invertedChannel), angularDirection = isDualHorizontal && invertedChannel ? -1 : 1;
        const drawScaleY = () => {
          const scaleWidth = canvasX.height, fontSize = scaleWidth >> 1, max = _linearAmplitude ? 100 : maxDecibels, min = _linearAmplitude ? 0 : minDecibels, incr = _linearAmplitude ? 20 : 5, interval = analyzerHeight / (max - min), atStart = _mirror != -1 && (!isDualHorizontal || channel == 0 || _mirror == 1), atEnd = _mirror != 1 && (!isDualHorizontal || channel != _mirror);
          _ctx.save();
          _ctx.fillStyle = SCALEY_LABEL_COLOR;
          _ctx.font = `${fontSize}px ${FONT_FAMILY}`;
          _ctx.textAlign = "right";
          _ctx.lineWidth = 1;
          for (let val = max; val > min; val -= incr) {
            const posY = channelTop + (max - val) * interval, even = val % 2 == 0 | 0;
            if (even) {
              const labelY = posY + fontSize * (posY == channelTop ? 0.8 : 0.35);
              if (atStart)
                _ctx.fillText(val, scaleWidth * 0.85, labelY);
              if (atEnd)
                _ctx.fillText(val, (isDualHorizontal ? analyzerWidth : canvas.width) - scaleWidth * 0.1, labelY);
              _ctx.strokeStyle = SCALEY_LABEL_COLOR;
              _ctx.setLineDash([2, 4]);
              _ctx.lineDashOffset = 0;
            } else {
              _ctx.strokeStyle = SCALEY_MIDLINE_COLOR;
              _ctx.setLineDash([2, 8]);
              _ctx.lineDashOffset = 1;
            }
            _ctx.beginPath();
            _ctx.moveTo(initialX + scaleWidth * even * atStart, ~~posY + 0.5);
            _ctx.lineTo(finalX - scaleWidth * even * atEnd, ~~posY + 0.5);
            _ctx.stroke();
          }
          _ctx.restore();
        };
        const interpolate = (bin, ratio) => {
          const value = fftData[bin] + (bin < fftData.length - 1 ? (fftData[bin + 1] - fftData[bin]) * ratio : 0);
          return isNaN(value) ? -Infinity : value;
        };
        const getAngle = (x, dir = angularDirection) => dir * TAU * ((x + radialOffsetX) / canvas.width) + this._spinAngle;
        const radialXY = (x, y, dir) => {
          const height = innerRadius + y * radialDirection, angle = getAngle(x, dir);
          return [centerX + height * Math.cos(angle), centerY + height * Math.sin(angle)];
        };
        const radialPoly = (x, y, w, h, stroke) => {
          _ctx.beginPath();
          for (const dir of _mirror && !isDualHorizontal ? [1, -1] : [angularDirection]) {
            const [startAngle, endAngle] = isRound ? [getAngle(x, dir), getAngle(x + w, dir)] : [];
            _ctx.moveTo(...radialXY(x, y, dir));
            _ctx.lineTo(...radialXY(x, y + h, dir));
            if (isRound)
              _ctx.arc(centerX, centerY, innerRadius + (y + h) * radialDirection, startAngle, endAngle, dir != 1);
            else
              _ctx.lineTo(...radialXY(x + w, y + h, dir));
            _ctx.lineTo(...radialXY(x + w, y, dir));
            if (isRound && !stroke)
              _ctx.arc(centerX, centerY, innerRadius + y * radialDirection, endAngle, startAngle, dir == 1);
          }
          strokeIf(stroke);
          _ctx.fill();
        };
        const setBarColor = (value = 0, barIndex = 0) => {
          let color;
          if (_colorMode == COLOR_GRADIENT && !isTrueLeds || _mode == MODE_GRAPH)
            color = _canvasGradients[channel];
          else {
            const selectedIndex = _colorMode == COLOR_BAR_INDEX ? barIndex % colorCount : colorStops.findLastIndex((item) => isLeds ? ledPosY(value) <= ledPosY(item.level) : value <= item.level);
            color = colorStops[selectedIndex].color;
          }
          _ctx.fillStyle = _ctx.strokeStyle = color;
        };
        if (useCanvas) {
          if (isDualHorizontal && !_radial) {
            const translateX = analyzerWidth * (channel + invertedChannel), flipX = invertedChannel ? -1 : 1;
            _ctx.setTransform(flipX, 0, 0, 1, translateX, 0);
          }
          if (!overlay || showBgColor) {
            if (overlay)
              _ctx.globalAlpha = this.bgAlpha;
            _ctx.fillStyle = bgColor;
            if (channel == 0 || !_radial && !isDualCombined)
              _ctx.fillRect(initialX, channelTop - channelGap, analyzerWidth, (overlay && this.reflexAlpha == 1 ? analyzerHeight : channelHeight) + channelGap);
            _ctx.globalAlpha = 1;
          }
          if (this.showScaleY && !isLumi && !_radial && (channel == 0 || !isDualCombined))
            drawScaleY();
          if (isLeds) {
            _ctx.setLineDash([ledHeight, ledSpaceV]);
            _ctx.lineWidth = _bars[0].width;
          } else
            _ctx.lineWidth = isOutline ? Math.min(_lineWidth, _bars[0].width / 2) : _lineWidth;
          _ctx.save();
          if (!_radial) {
            const region = new Path2D();
            region.rect(0, channelTop, canvas.width, analyzerHeight);
            _ctx.clip(region);
          }
        }
        let fftData = this._fftData[channel];
        this._analyzer[channel].getFloatFrequencyData(fftData);
        if (_weightingFilter)
          fftData = fftData.map((val, idx) => val + weightingdB(this._binToFreq(idx)));
        _ctx.beginPath();
        let points = [];
        for (let barIndex = 0; barIndex < nBars; barIndex++) {
          const bar = _bars[barIndex], { posX, barCenter, width, freq, binLo, binHi, ratioLo, ratioHi } = bar;
          let barValue = Math.max(interpolate(binLo, ratioLo), interpolate(binHi, ratioHi));
          for (let j = binLo + 1; j < binHi; j++) {
            if (fftData[j] > barValue)
              barValue = fftData[j];
          }
          barValue = this._normalizedB(barValue);
          bar.value[channel] = barValue;
          currentEnergy += barValue;
          if (bar.peak[channel] > 0 && bar.alpha[channel] > 0) {
            bar.hold[channel]--;
            if (bar.hold[channel] < 0) {
              if (_fadePeaks && !showPeakLine) {
                const initialAlpha = !isAlpha || isOutline && _lineWidth > 0 ? 1 : isAlpha ? bar.peak[channel] : fillAlpha;
                bar.alpha[channel] = initialAlpha * (1 + bar.hold[channel] / fadeFrames);
              } else
                bar.peak[channel] += bar.hold[channel] * gravity / fpsSquared / nominalMaxHeight;
              if (bar.alpha[channel] <= 0)
                bar.peak[channel] = 0;
            }
          }
          if (barValue >= bar.peak[channel]) {
            bar.peak[channel] = barValue;
            bar.hold[channel] = holdFrames;
            bar.alpha[channel] = !isAlpha || isOutline && _lineWidth > 0 ? 1 : isAlpha ? barValue : fillAlpha;
          }
          if (!useCanvas)
            continue;
          _ctx.globalAlpha = isLumi || isAlpha ? barValue : isOutline ? fillAlpha : 1;
          setBarColor(barValue, barIndex);
          const barHeight = isLumi ? maxBarHeight : isLeds ? ledPosY(barValue) : barValue * maxBarHeight | 0;
          if (_mode == MODE_GRAPH) {
            const nextBarAvg = barIndex ? 0 : (this._normalizedB(fftData[_bars[1].binLo]) * maxBarHeight + barHeight) / 2;
            if (_radial) {
              if (barIndex == 0) {
                if (isDualHorizontal)
                  _ctx.moveTo(...radialXY(0, 0));
                _ctx.lineTo(...radialXY(0, posX < 0 ? nextBarAvg : barHeight));
              }
              if (posX >= 0) {
                const point = [posX, barHeight];
                _ctx.lineTo(...radialXY(...point));
                points.push(point);
              }
            } else {
              if (barIndex == 0) {
                if (_mirror == -1 && !isDualHorizontal)
                  _ctx.moveTo(initialX, analyzerBottom - (posX < initialX ? nextBarAvg : barHeight));
                else {
                  const prevFFTData = binLo ? this._normalizedB(fftData[binLo - 1]) * maxBarHeight : barHeight;
                  _ctx.moveTo(initialX - _lineWidth, analyzerBottom - prevFFTData);
                }
              }
              if (isDualHorizontal || _mirror != -1 || posX >= initialX)
                _ctx.lineTo(posX, analyzerBottom - barHeight);
            }
          } else {
            if (isLeds) {
              if (showBgColor && !overlay && (channel == 0 || !isDualCombined)) {
                const alpha = _ctx.globalAlpha;
                _ctx.strokeStyle = LEDS_UNLIT_COLOR;
                _ctx.globalAlpha = 1;
                strokeBar(barCenter, channelTop, analyzerBottom);
                _ctx.strokeStyle = _ctx.fillStyle;
                _ctx.globalAlpha = alpha;
              }
              if (isTrueLeds) {
                const colorIndex = isLumi ? 0 : colorStops.findLastIndex((item) => ledPosY(barValue) <= ledPosY(item.level));
                let last = analyzerBottom;
                for (let i = colorCount - 1; i >= colorIndex; i--) {
                  _ctx.strokeStyle = colorStops[i].color;
                  let y = analyzerBottom - (i == colorIndex ? barHeight : ledPosY(colorStops[i].level));
                  strokeBar(barCenter, last, y);
                  last = y - ledSpaceV;
                }
              } else
                strokeBar(barCenter, analyzerBottom, analyzerBottom - barHeight);
            } else if (posX >= initialX) {
              if (_radial)
                radialPoly(posX, 0, width, barHeight, isOutline);
              else if (isRound) {
                const halfWidth = width / 2, y = analyzerBottom + halfWidth;
                _ctx.beginPath();
                _ctx.moveTo(posX, y);
                _ctx.lineTo(posX, y - barHeight);
                _ctx.arc(barCenter, y - barHeight, halfWidth, PI, TAU);
                _ctx.lineTo(posX + width, y);
                strokeIf(isOutline);
                _ctx.fill();
              } else {
                const offset = isOutline ? _ctx.lineWidth : 0;
                _ctx.beginPath();
                _ctx.rect(posX, analyzerBottom + offset, width, -barHeight - offset);
                strokeIf(isOutline);
                _ctx.fill();
              }
            }
          }
          const peakValue = bar.peak[channel], peakAlpha = bar.alpha[channel];
          if (peakValue > 0 && peakAlpha > 0 && showPeaks && !showPeakLine && !isLumi && posX >= initialX && posX < finalX) {
            if (_fadePeaks)
              _ctx.globalAlpha = peakAlpha;
            else if (isOutline && _lineWidth > 0)
              _ctx.globalAlpha = 1;
            else if (isAlpha)
              _ctx.globalAlpha = peakValue;
            if (_colorMode == COLOR_BAR_LEVEL || isTrueLeds)
              setBarColor(peakValue);
            if (isLeds) {
              const ledPeak = ledPosY(peakValue);
              if (ledPeak >= ledSpaceV)
                _ctx.fillRect(posX, analyzerBottom - ledPeak, width, ledHeight);
            } else if (!_radial)
              _ctx.fillRect(posX, analyzerBottom - peakValue * maxBarHeight, width, 2);
            else if (_mode != MODE_GRAPH) {
              const y = peakValue * maxBarHeight;
              radialPoly(posX, y, width, !this._radialInvert || isDualVertical || y + innerRadius >= 2 ? -2 : 2);
            }
          }
        }
        if (!useCanvas)
          continue;
        _ctx.globalAlpha = 1;
        if (_mode == MODE_GRAPH) {
          setBarColor();
          if (_radial && !isDualHorizontal) {
            if (_mirror) {
              let p;
              while (p = points.pop())
                _ctx.lineTo(...radialXY(...p, -1));
            }
            _ctx.closePath();
          }
          if (_lineWidth > 0)
            _ctx.stroke();
          if (fillAlpha > 0) {
            if (_radial) {
              const start = isDualHorizontal ? getAngle(analyzerWidth >> 1) : 0, end = isDualHorizontal ? getAngle(analyzerWidth) : TAU;
              _ctx.moveTo(...radialXY(isDualHorizontal ? analyzerWidth >> 1 : 0, 0));
              _ctx.arc(centerX, centerY, innerRadius, start, end, isDualHorizontal ? !invertedChannel : true);
            } else {
              _ctx.lineTo(finalX, analyzerBottom);
              _ctx.lineTo(initialX, analyzerBottom);
            }
            _ctx.globalAlpha = fillAlpha;
            _ctx.fill();
            _ctx.globalAlpha = 1;
          }
          if (showPeakLine || _radial && showPeaks) {
            points = [];
            _ctx.beginPath();
            _bars.forEach((b, i) => {
              let x = b.posX, h = b.peak[channel], m = i ? "lineTo" : "moveTo";
              if (_radial && x < 0) {
                const nextBar = _bars[i + 1];
                h = findY(x, h, nextBar.posX, nextBar.peak[channel], 0);
                x = 0;
              }
              h *= maxBarHeight;
              if (showPeakLine) {
                _ctx[m](..._radial ? radialXY(x, h) : [x, analyzerBottom - h]);
                if (_radial && _mirror && !isDualHorizontal)
                  points.push([x, h]);
              } else if (h > 0)
                radialPoly(x, h, 1, -2);
            });
            if (showPeakLine) {
              let p;
              while (p = points.pop())
                _ctx.lineTo(...radialXY(...p, -1));
              _ctx.lineWidth = 1;
              _ctx.stroke();
            }
          }
        }
        _ctx.restore();
        if (isDualHorizontal && !_radial)
          _ctx.setTransform(1, 0, 0, 1, 0, 0);
        if (!isDualHorizontal && !isDualCombined || channel)
          doReflex(channel);
      }
      updateEnergy(currentEnergy / (nBars << nChannels - 1));
      if (useCanvas) {
        if (_mirror && !_radial && !isDualHorizontal) {
          _ctx.setTransform(-1, 0, 0, 1, canvas.width - initialX, 0);
          _ctx.drawImage(canvas, initialX, 0, centerX, canvas.height, 0, 0, centerX, canvas.height);
          _ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
        _ctx.setLineDash([]);
        drawScaleX();
      }
      if (this.showFPS) {
        const size = canvasX.height;
        _ctx.font = `bold ${size}px ${FONT_FAMILY}`;
        _ctx.fillStyle = FPS_COLOR;
        _ctx.textAlign = "right";
        _ctx.fillText(Math.round(_fps), canvas.width - size, size * 2);
      }
      if (this.onCanvasDraw) {
        _ctx.save();
        _ctx.fillStyle = _ctx.strokeStyle = _canvasGradients[0];
        this.onCanvasDraw(this, { timestamp, canvasGradients: _canvasGradients });
        _ctx.restore();
      }
    }
    /**
     * Return scaled frequency according to the selected scale
     */
    _freqScaling(freq) {
      switch (this._frequencyScale) {
        case SCALE_LOG:
          return Math.log2(freq);
        case SCALE_BARK:
          return 26.81 * freq / (1960 + freq) - 0.53;
        case SCALE_MEL:
          return Math.log2(1 + freq / 700);
        case SCALE_LINEAR:
          return freq;
      }
    }
    /**
     * Return the FFT data bin (array index) which represents a given frequency
     */
    _freqToBin(freq, method = "round") {
      const max = this._analyzer[0].frequencyBinCount - 1, bin = Math[method](freq * this.fftSize / this.audioCtx.sampleRate);
      return bin < max ? bin : max;
    }
    /**
     * Generate currently selected gradient
     */
    _makeGrad() {
      if (!this._ready)
        return;
      const { canvas, _ctx, _radial, _reflexRatio } = this, { analyzerWidth, centerX, centerY, initialX, innerRadius, outerRadius } = this._aux, { isLumi } = this._flg, isDualVertical = this._chLayout == CHANNEL_VERTICAL, analyzerRatio = 1 - _reflexRatio, gradientHeight = isLumi ? canvas.height : canvas.height * (1 - _reflexRatio * !isDualVertical) | 0;
      for (const channel of [0, 1]) {
        const currGradient = this._gradients[this._selectedGrads[channel]], colorStops = currGradient.colorStops, isHorizontal = currGradient.dir == "h";
        let grad;
        if (_radial)
          grad = _ctx.createRadialGradient(centerX, centerY, outerRadius, centerX, centerY, innerRadius - (outerRadius - innerRadius) * isDualVertical);
        else
          grad = _ctx.createLinearGradient(...isHorizontal ? [initialX, 0, initialX + analyzerWidth, 0] : [0, 0, 0, gradientHeight]);
        if (colorStops) {
          const dual = isDualVertical && !this._splitGradient && (!isHorizontal || _radial);
          for (let channelArea = 0; channelArea < 1 + dual; channelArea++) {
            const maxIndex = colorStops.length - 1;
            colorStops.forEach((colorStop, index) => {
              let offset = colorStop.pos;
              if (dual)
                offset /= 2;
              if (isDualVertical && !isLumi && !_radial && !isHorizontal) {
                offset *= analyzerRatio;
                if (!dual && offset > 0.5 * analyzerRatio)
                  offset += 0.5 * _reflexRatio;
              }
              if (channelArea == 1) {
                if (_radial || isLumi) {
                  const revIndex = maxIndex - index;
                  colorStop = colorStops[revIndex];
                  offset = 1 - colorStop.pos / 2;
                } else {
                  if (index == 0 && offset > 0)
                    grad.addColorStop(0.5, colorStop.color);
                  offset += 0.5;
                }
              }
              grad.addColorStop(offset, colorStop.color);
              if (isDualVertical && index == maxIndex && offset < 0.5)
                grad.addColorStop(0.5, colorStop.color);
            });
          }
        }
        this._canvasGradients[channel] = grad;
      }
    }
    /**
     * Normalize a dB value in the [0;1] range
     */
    _normalizedB(value) {
      const isLinear = this._linearAmplitude, boost = isLinear ? 1 / this._linearBoost : 1, clamp = (val, min, max) => val <= min ? min : val >= max ? max : val, dBToLinear = (val) => 10 ** (val / 20);
      let maxValue = this.maxDecibels, minValue = this.minDecibels;
      if (isLinear) {
        maxValue = dBToLinear(maxValue);
        minValue = dBToLinear(minValue);
        value = dBToLinear(value) ** boost;
      }
      return clamp((value - minValue) / (maxValue - minValue) ** boost, 0, 1);
    }
    /**
     * Internal function to change canvas dimensions on demand
     */
    _setCanvas(reason) {
      if (!this._ready)
        return;
      const { canvas, _ctx } = this, canvasX = this._scaleX.canvas, pixelRatio = window.devicePixelRatio / (this._loRes + 1);
      let screenWidth = window.screen.width * pixelRatio, screenHeight = window.screen.height * pixelRatio;
      if (Math.abs(window.orientation) == 90 && screenWidth < screenHeight)
        [screenWidth, screenHeight] = [screenHeight, screenWidth];
      const isFullscreen = this.isFullscreen, isCanvasFs = isFullscreen && this._fsEl == canvas, newWidth = isCanvasFs ? screenWidth : (this._width || this._container.clientWidth || this._defaultWidth) * pixelRatio | 0, newHeight = isCanvasFs ? screenHeight : (this._height || this._container.clientHeight || this._defaultHeight) * pixelRatio | 0;
      this._pixelRatio = pixelRatio;
      this._fsWidth = screenWidth;
      this._fsHeight = screenHeight;
      if (reason != REASON_CREATE && canvas.width == newWidth && canvas.height == newHeight)
        return;
      canvas.width = newWidth;
      canvas.height = newHeight;
      if (!this.overlay) {
        _ctx.fillStyle = "#000";
        _ctx.fillRect(0, 0, newWidth, newHeight);
      }
      _ctx.lineJoin = "bevel";
      canvasX.width = newWidth;
      canvasX.height = Math.max(20 * pixelRatio, Math.min(newWidth, newHeight) / 32 | 0);
      this._calcBars();
      this._makeGrad();
      if (this._fsStatus !== void 0 && this._fsStatus !== isFullscreen)
        reason = REASON_FSCHANGE;
      this._fsStatus = isFullscreen;
      if (this.onCanvasResize)
        this.onCanvasResize(reason, this);
    }
    /**
     * Select a gradient for one or both channels
     *
     * @param {string} name gradient name
     * @param [{number}] desired channel (0 or 1) - if empty or invalid, sets both channels
     */
    _setGradient(name, channel) {
      if (!this._gradients.hasOwnProperty(name))
        throw new AudioMotionError(ERR_UNKNOWN_GRADIENT, name);
      if (![0, 1].includes(channel)) {
        this._selectedGrads[1] = name;
        channel = 0;
      }
      this._selectedGrads[channel] = name;
      this._makeGrad();
    }
    /**
     * Set object properties
     */
    _setProps(options, useDefaults) {
      const callbacks = ["onCanvasDraw", "onCanvasResize"];
      const extraProps = ["gradientLeft", "gradientRight", "stereo"];
      const validProps = Object.keys(DEFAULT_SETTINGS).filter((e) => e != "start").concat(callbacks, extraProps);
      if (useDefaults || options === void 0)
        options = { ...DEFAULT_SETTINGS, ...options };
      for (const prop of Object.keys(options)) {
        if (callbacks.includes(prop) && typeof options[prop] !== "function")
          this[prop] = void 0;
        else if (validProps.includes(prop))
          this[prop] = options[prop];
      }
      if (options.start !== void 0)
        this.toggleAnalyzer(options.start);
    }
  };
  var audioMotion_analyzer_default = AudioMotionAnalyzer;

  // ns-hugo:D:\FileFolder\repos\jl-portfolio\assets\js\modules\audiomotion.js
  function createAudioMotionInstance(audioContainer, audioPlayer) {
    const options = {
      colorStops: [
        { pos: 0, color: "rgba(70, 130, 180, 1)" },
        { pos: 0.2, color: "rgba(163, 193, 218, 1)" },
        { pos: 0.4, color: "rgba(204, 229, 255, 1)" },
        { pos: 0.6, color: "rgba(230, 240, 255, 1)" },
        { pos: 0.8, color: "rgba(240, 245, 250, 1)" },
        { pos: 1, color: "rgba(255, 255, 255, 1)" }
      ]
    };
    const audioMotion = new audioMotion_analyzer_default(audioContainer, {
      source: audioPlayer.media,
      height: audioContainer.clientHeight,
      width: audioContainer.clientWidth,
      ansiBands: false,
      showScaleX: false,
      bgAlpha: 0,
      overlay: true,
      smoothing: 0.7,
      mode: 0,
      channelLayout: "single",
      frequencyScale: "bark",
      gradient: "prism",
      linearAmplitude: true,
      linearBoost: 1.8,
      mirror: 0,
      radial: false,
      reflexAlpha: 0.25,
      reflexBright: 1,
      reflexFit: true,
      reflexRatio: 0.3,
      showPeaks: true,
      weightingFilter: "D"
    });
    audioMotion.registerGradient("whiteGradient", options);
    audioMotion.setOptions({ gradient: "whiteGradient" });
    return audioMotion;
  }
  function audioMotionFadeIn(audioMotion) {
    let alpha = 0;
    const fadeDuration = 500;
    const fadeInterval = 10;
    const fadeIn = setInterval(() => {
      alpha += fadeInterval / fadeDuration;
      if (alpha >= 0.75) {
        alpha = 0.75;
        clearInterval(fadeIn);
      }
      audioMotion.paused = false;
      audioMotion.setOptions({ bgAlpha: alpha });
    }, fadeInterval);
  }
  function pauseAudioMotionInstance(audioMotion) {
    if (audioMotion) {
      let alpha = 0.75;
      const fadeDuration = 500;
      const fadeInterval = 10;
      const fadeOut = setInterval(() => {
        alpha -= fadeInterval / fadeDuration;
        if (alpha <= 0) {
          alpha = 0;
          clearInterval(fadeOut);
        }
        audioMotion.paused = true;
        audioMotion.setOptions({ bgAlpha: alpha });
      }, fadeInterval);
    }
  }

  // <stdin>
  var import_plyr2 = __toESM(require_plyr_min());
  var import_hammerjs = __toESM(require_hammer());
  document.addEventListener("DOMContentLoaded", (e) => {
    const projectOverlays = document.querySelectorAll("[id^='project-overlay-']");
    projectOverlays.forEach((projectOverlay) => {
      if (projectOverlay.isHovering === void 0) {
        projectOverlay.isHovering = false;
      }
      const parentLink = projectOverlay.closest("a");
      const hammerProjectBtn = new import_hammerjs.default(parentLink);
      parentLink.addEventListener("click", (e2) => {
        if (isTouchDevice()) {
          e2.preventDefault();
        }
      });
      projectOverlay.addEventListener("mouseover", () => {
        applyOverlay(projectOverlay);
      });
      projectOverlay.addEventListener("mouseout", () => {
        removeOverlay(projectOverlay);
      });
      hammerProjectBtn.on("tap", () => {
        if (!projectOverlay.isHovering) {
          applyTouchHoverEffect(projectOverlay);
        } else {
          window.open(parentLink.href, "_blank", "noopener,noreferrer");
        }
      });
    });
    const videoPlayers = import_plyr2.default.setup(".plyr-video", {
      controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
      keyboard: {
        focused: true,
        global: false
      },
      volume: 0.8
    });
    const musicVideoPlayers = import_plyr2.default.setup(".plyr-musicvideo", {
      controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "settings"],
      keyboard: {
        focused: true,
        global: false
      },
      volume: 0.8,
      storage: {
        enabled: false
      }
    });
    const audioPlayers = import_plyr2.default.setup(".plyr-audio", {
      volume: 0.8,
      seekTime: 10,
      controls: ["play", "progress", "volume", "mute"],
      disableContextMenu: true,
      storage: {
        enabled: false
      }
    });
    const workPageActive = document.body.getAttribute("data-page").toLowerCase() === "work" || false;
    if (!workPageActive) {
      return;
    }
    const playMusicOverlays = document.querySelectorAll("[id^='play-music-overlay-']");
    playMusicOverlays.forEach((musicOverlay, index) => {
      if (musicOverlay.isHovering === void 0) {
        musicOverlay.isHovering = false;
      }
      musicOverlay.addEventListener("mouseover", () => {
        applyOverlay(musicOverlay);
      });
      musicOverlay.addEventListener("mouseout", () => {
        removeOverlay(musicOverlay);
      });
      const playMusicBtn = document.querySelector(`#play-music-overlay-${index}`);
      const ionIconElem = playMusicBtn.querySelector("ion-icon");
      const hammerMusicBtn = new import_hammerjs.default(playMusicBtn);
      if (playMusicBtn) {
        hammerMusicBtn.on("tap", () => {
          if (musicOverlay.isHovering) {
            if (!audioPlayers[index].playing) {
              audioPlayers[index].play();
            } else if (audioPlayers[index].playing) {
              audioPlayers[index].pause();
            }
          } else {
            applyTouchHoverEffect(musicOverlay);
          }
        });
      }
      audioPlayers[index].on("play", () => {
        ionIconElem.setAttribute("name", "pause-circle-outline");
      });
      audioPlayers[index].on("pause", () => {
        ionIconElem.setAttribute("name", "play-circle-outline");
      });
      audioPlayers[index].on("end", () => {
        ionIconElem.setAttribute("name", "play-circle-outline");
      });
      if (!isTouchDevice()) {
        let audioMotion;
        let isPlaying = false;
        let isPaused = true;
        let isSeeking = false;
        let pauseTime = 0;
        let seekPause = false;
        const audioContainer = document.querySelector(`#audioContainer-${index}`);
        audioPlayers[index].on("play", () => {
          if (isPlaying) return;
          if (!audioMotion) {
            audioMotion = createAudioMotionInstance(audioContainer, audioPlayers[index]);
            audioMotionFadeIn(audioMotion);
          }
          isPlaying = true;
          isPaused = false;
          if (!seekPause) {
            audioMotionFadeIn(audioMotion);
          } else {
            seekPause = false;
          }
        });
        audioPlayers[index].on("pause", () => {
          if (isPaused) return;
          isPaused = true;
          isPlaying = false;
          pauseTime = Date.now();
          setTimeout(() => {
            if (!seekPause) {
              pauseAudioMotionInstance(audioMotion);
            }
          }, 10);
        });
        audioPlayers[index].on("seeking", () => {
          isSeeking = true;
          const currentTime = Date.now();
          console.log(`seekSeeked set to: ${seekPause}`);
          if (currentTime - pauseTime < 5) {
            seekPause = true;
            console.log(`seekSeeked set to: ${seekPause}`);
          }
          ;
        });
      }
    });
    const allPlyrPlayers = videoPlayers.concat(musicVideoPlayers, audioPlayers);
    allPlyrPlayers.forEach((player) => {
      player.on("play", async () => {
        for (let otherPlayer of allPlyrPlayers) {
          if (otherPlayer !== player && !otherPlayer.paused) {
            otherPlayer.pause();
          }
        }
        ;
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const videocontainer = document.getElementById("showreelvideocontainer");
    const video = document.querySelector("#reel-container");
    const button = document.getElementById("showreelbutton");
    const closeReelButton = document.getElementById("close-reel-button");
    const delayTime = 500;
    let timerActive = false;
    const showreelPageActive = document.body.getAttribute("data-page").toLowerCase() === "showreel" || false;
    if (!showreelPageActive)
      return;
    document.addEventListener("keydown", (keydownEvent) => {
      if (timerActive)
        return;
      if (keydownEvent.key === "Escape" && videocontainer.classList.contains("grid")) {
        togglevideo(delayTime);
        overlayToggle();
        showreelButtonState(delayTime);
        timerActive = true;
        setTimeout(() => {
          timerActive = false;
        }, delayTime);
      }
    });
    button.addEventListener("click", () => {
      if (timerActive)
        return;
      togglevideo(delayTime);
      overlayToggle();
      showreelButtonState(delayTime);
      timerActive = true;
      setTimeout(() => {
        timerActive = false;
      }, delayTime);
    });
    closeReelButton.addEventListener("click", () => {
      if (timerActive)
        return;
      togglevideo(delayTime);
      overlayToggle();
      showreelButtonState(delayTime);
      timerActive = true;
      setTimeout(() => {
        timerActive = false;
      }, delayTime);
    });
    window.addEventListener("click", (clickEvent) => {
      if (timerActive)
        return;
      if (!video.contains(clickEvent.target) && videocontainer.classList.contains("grid")) {
        togglevideo(delayTime);
        overlayToggle();
        showreelButtonState(delayTime);
        timerActive = true;
        setTimeout(() => {
          timerActive = false;
        }, delayTime);
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const closeMenuButton = document.getElementById("closemenubutton");
    const menuButton = document.getElementById("openmenubutton");
    const sidebar = document.getElementById("sidebarnav");
    let sidebarOpen = false;
    menuButton.addEventListener("click", () => !sidebarOpen ? sidebarOpen = openMenu(sidebarOpen) : sidebarOpen = closeMenu(sidebarOpen));
    closeMenuButton.addEventListener("click", () => sidebarOpen ? sidebarOpen = closeMenu(sidebarOpen) : sidebarOpen = openMenu(sidebarOpen));
    document.addEventListener("click", (clickEvent) => {
      if (!sidebarOpen) {
        return;
      } else if (!sidebar.contains(clickEvent.target) && !menuButton.contains(clickEvent.target)) {
        sidebarOpen = closeMenu(sidebarOpen);
      }
    });
    addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width > 640) {
        sidebarOpen = closeMenu(sidebarOpen);
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const aboutPageActive = document.body.getAttribute("data-page").toLowerCase() === "about" || false;
    if (!aboutPageActive)
      return;
    const resumeContentElem = document.getElementsByClassName("resume-content");
    for (const elem of resumeContentElem) {
      const buttonContainerElem = elem.firstElementChild.firstElementChild;
      const buttonElemIDs = buttonContainerElem.querySelector("button").id;
      const contentElemIDs = elem.children[1]?.firstElementChild.id;
      const dropdownButtonElem = document.getElementById(buttonElemIDs);
      const dropdownContentElem = document.getElementById(contentElemIDs);
      let isDropdownOpen = false;
      buttonContainerElem.addEventListener("click", () => {
        if (!isDropdownOpen) {
          isDropdownOpen = openDropdown(isDropdownOpen, dropdownButtonElem, dropdownContentElem);
        } else if (isDropdownOpen) {
          isDropdownOpen = closeDropdown(isDropdownOpen, dropdownButtonElem, dropdownContentElem);
        }
      });
    }
    ;
  });
})();
/*! Bundled license information:

hammerjs/hammer.js:
  (*! Hammer.JS - v2.0.7 - 2016-04-22
   * http://hammerjs.github.io/
   *
   * Copyright (c) 2016 Jorik Tangelder;
   * Licensed under the MIT license *)

audiomotion-analyzer/src/audioMotion-analyzer.js:
  (**!
   * audioMotion-analyzer
   * High-resolution real-time graphic audio spectrum analyzer JS module
   *
   * @version 4.5.0
   * @author  Henrique Avila Vianna <hvianna@gmail.com> <https://henriquevianna.com>
   * @license AGPL-3.0-or-later
   *)
*/
