import React from "react";

import Highlight, { defaultProps } from "prism-react-renderer";

const LZString = (() => {
  function o(o, r) {
    if (!t[o]) {
      t[o] = {};
      for (var n = 0; n < o.length; n++) t[o][o.charAt(n)] = n;
    }
    return t[o][r];
  }
  var r = String.fromCharCode,
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
    t = {},
    i = {
      compressToBase64: function (o) {
        if (null == o) return "";
        var r = i._compress(o, 6, function (o) {
          return n.charAt(o);
        });
        switch (r.length % 4) {
          default:
          case 0:
            return r;
          case 1:
            return r + "===";
          case 2:
            return r + "==";
          case 3:
            return r + "=";
        }
      },
      compressToUTF16: function (o) {
        return null == o
          ? ""
          : i._compress(o, 15, function (o) {
              return r(o + 32);
            }) + " ";
      },
      compressToUint8Array: function (o) {
        for (
          var r = i.compress(o),
            n = new Uint8Array(2 * r.length),
            e = 0,
            t = r.length;
          t > e;
          e++
        ) {
          var s = r.charCodeAt(e);
          (n[2 * e] = s >>> 8), (n[2 * e + 1] = s % 256);
        }
        return n;
      },
      compressToEncodedURIComponent: function (o) {
        return null == o
          ? ""
          : i._compress(o, 6, function (o) {
              return e.charAt(o);
            });
      },
      compress: function (o) {
        return i._compress(o, 16, function (o) {
          return r(o);
        });
      },
      _compress: function (o, r, n) {
        if (null == o) return "";
        var e,
          t,
          i,
          s = {},
          p = {},
          u = "",
          c = "",
          a = "",
          l = 2,
          f = 3,
          h = 2,
          d = [],
          m = 0,
          v = 0;
        for (i = 0; i < o.length; i += 1)
          if (
            ((u = o.charAt(i)),
            Object.prototype.hasOwnProperty.call(s, u) ||
              ((s[u] = f++), (p[u] = !0)),
            (c = a + u),
            Object.prototype.hasOwnProperty.call(s, c))
          )
            a = c;
          else {
            if (Object.prototype.hasOwnProperty.call(p, a)) {
              if (a.charCodeAt(0) < 256) {
                for (e = 0; h > e; e++)
                  (m <<= 1),
                    v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++;
                for (t = a.charCodeAt(0), e = 0; 8 > e; e++)
                  (m = (m << 1) | (1 & t)),
                    v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++,
                    (t >>= 1);
              } else {
                for (t = 1, e = 0; h > e; e++)
                  (m = (m << 1) | t),
                    v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++,
                    (t = 0);
                for (t = a.charCodeAt(0), e = 0; 16 > e; e++)
                  (m = (m << 1) | (1 & t)),
                    v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++,
                    (t >>= 1);
              }
              l--, 0 == l && ((l = Math.pow(2, h)), h++), delete p[a];
            } else
              for (t = s[a], e = 0; h > e; e++)
                (m = (m << 1) | (1 & t)),
                  v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++,
                  (t >>= 1);
            l--,
              0 == l && ((l = Math.pow(2, h)), h++),
              (s[c] = f++),
              (a = String(u));
          }
        if ("" !== a) {
          if (Object.prototype.hasOwnProperty.call(p, a)) {
            if (a.charCodeAt(0) < 256) {
              for (e = 0; h > e; e++)
                (m <<= 1), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++;
              for (t = a.charCodeAt(0), e = 0; 8 > e; e++)
                (m = (m << 1) | (1 & t)),
                  v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++,
                  (t >>= 1);
            } else {
              for (t = 1, e = 0; h > e; e++)
                (m = (m << 1) | t),
                  v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++,
                  (t = 0);
              for (t = a.charCodeAt(0), e = 0; 16 > e; e++)
                (m = (m << 1) | (1 & t)),
                  v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++,
                  (t >>= 1);
            }
            l--, 0 == l && ((l = Math.pow(2, h)), h++), delete p[a];
          } else
            for (t = s[a], e = 0; h > e; e++)
              (m = (m << 1) | (1 & t)),
                v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++,
                (t >>= 1);
          l--, 0 == l && ((l = Math.pow(2, h)), h++);
        }
        for (t = 2, e = 0; h > e; e++)
          (m = (m << 1) | (1 & t)),
            v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++,
            (t >>= 1);
        for (;;) {
          if (((m <<= 1), v == r - 1)) {
            d.push(n(m));
            break;
          }
          v++;
        }
        return d.join("");
      },
    };
  return i;
})();

export const TypeScriptPlayground = (props: { children: string }) => {
  const url =
    "https://www.typescriptlang.org/play?#code/" +
    escape(LZString.compressToEncodedURIComponent(props.children));
  return (
    <div>
      <Highlight {...defaultProps} code={props.children} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <a href={url} className="button button--primary">
        open in playground on www.typescriptlang.org
      </a>
    </div>
  );
};
