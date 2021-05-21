(() => {
  var e = {
      703: (e) => {
        e.exports = function (e, r) {
          return e / r;
        };
      },
      210: (e) => {
        e.exports = function (e, r) {
          return e * r;
        };
      },
    },
    r = {};
  function t(o) {
    var n = r[o];
    if (void 0 !== n) return n.exports;
    var c = (r[o] = { exports: {} });
    return e[o](c, c.exports, t), c.exports;
  }
  (() => {
    function e(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r &&
          (o = o.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          t.push.apply(t, o);
      }
      return t;
    }
    function r(r) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? e(Object(n), !0).forEach(function (e) {
              o(r, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
          : e(Object(n)).forEach(function (e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return r;
    }
    function o(e, r, t) {
      return (
        r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = t),
        e
      );
    }
    var n = t(703),
      c = t(210);
    console.log("index.js"), console.log(" Devide", n(6, 3)), console.log(" Multiply", c(3, 6));
    var i = r(r({}, { age: 30, name: "Bob" }), {}, { gender: "male" });
    console.log(" copy", i);
  })();
})();
