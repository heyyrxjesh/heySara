(this["webpackJsonphey-sara"] = this["webpackJsonphey-sara"] || []).push([
  [0],
  {
    31: function (e, t, n) {},
    32: function (e, t, n) {},
    33: function (e, t, n) {},
    47: function (e, t, n) {},
    48: function (e, t, n) {},
    50: function (e, t, n) {},
    51: function (e, t, n) {},
    53: function (e, t, n) {},
    54: function (e, t, n) {},
    55: function (e, t, n) {},
    56: function (e, t, n) {},
    61: function (e, t, n) {},
    67: function (e, t, n) {},
    68: function (e, t, n) {},
    70: function (e, t, n) {
      "use strict";
      n.r(t);
      var c,
        o = n(2),
        a = n.n(o),
        i = n(20),
        s = n.n(i),
        r = (n(47), n(7)),
        l = n(21),
        u = n.p + "static/media/heySara - Light.d09dd685.png",
        j = (n(31), n.p + "static/media/heySara_-_Dark.76187aeb.png"),
        d = (n(48), n(3)),
        b = function () {
          return Object(d.jsx)("header", {
            id: "AppHeader",
            children: Object(d.jsx)("img", { src: j, alt: "Icon" }),
          });
        },
        h =
          (n(50),
          n(51),
          function (e) {
            return Object(d.jsx)("div", { className: e.name });
          }),
        p = function (e) {
          var t = Object(o.useState)(!1),
            n = Object(r.a)(t, 2),
            c = n[0],
            a = n[1];
          return Object(d.jsxs)("div", {
            className: "userDetails",
            children: [
              Object(d.jsx)("img", {
                src: e.userPhoto,
                alt: "Logo",
                className: "image-".concat(c ? "visible" : "hidden"),
                onLoad: function () {
                  a(!0);
                },
              }),
              !c && Object(d.jsx)(h, { name: "image-loader" }),
              Object(d.jsx)("div", {
                className: "userInfo",
                children: Object(d.jsx)("h3", { children: e.userName }),
              }),
            ],
          });
        },
        O = n(16),
        f = n.n(O),
        m = n(22),
        g =
          (n(32),
          function (e) {
            return Object(d.jsxs)("div", {
              id: "time",
              children: [
                Object(d.jsx)("p", { id: "crntTime", children: e.time }),
                Object(d.jsx)("p", { id: "crntDate", children: e.date }),
              ],
            });
          }),
        x = function () {
          var e = Object(o.useState)(""),
            t = Object(r.a)(e, 2),
            n = t[0],
            c = t[1],
            a = Object(o.useState)(""),
            i = Object(r.a)(a, 2),
            s = i[0],
            l = i[1],
            u = Object(o.useState)(!1),
            j = Object(r.a)(u, 2),
            b = j[0],
            p = j[1],
            O = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            x = [
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
              "December",
            ],
            w = (function () {
              var e = Object(m.a)(
                f.a.mark(function e() {
                  return f.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          setInterval(function () {
                            var e = new Date();
                            c(e.toLocaleTimeString()),
                              l(
                                O[e.getUTCDay()] +
                                  " " +
                                  e.getUTCDate() +
                                  " " +
                                  x[e.getUTCMonth()]
                              ),
                              p(!0);
                          }, 1e3);
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(o.useEffect)(function () {
              w();
            }),
            Object(d.jsx)("div", {
              children: b
                ? Object(d.jsx)(g, { date: s, time: n })
                : Object(d.jsx)(h, { name: "time-loader" }),
            })
          );
        },
        w = (n(53), n(33), "https://openweathermap.org/img/wn/"),
        y = function (e) {
          return Object(d.jsxs)("div", {
            className: "weather-container",
            children: [
              Object(d.jsxs)("div", {
                className: "widget-container",
                children: [
                  Object(d.jsx)("div", {
                    className: "weather-icon",
                    children: Object(d.jsx)("img", {
                      src: "".concat(w).concat(e.image, "@2x.png"),
                      alt: "Logo",
                    }),
                  }),
                  Object(d.jsx)("div", {
                    className: "temperature-value",
                    children: Object(d.jsxs)("p", {
                      children: [
                        Math.floor(e.temperature),
                        " \xb0",
                        Object(d.jsx)("span", { children: "C" }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(d.jsx)("div", {
                className: "location",
                children: Object(d.jsxs)("p", {
                  children: [e.location, ", ", e.country],
                }),
              }),
            ],
          });
        },
        v = "628a98ea1de25d1e700cec0484b6a0bc",
        S = function () {
          var e = Object(o.useState)(""),
            t = Object(r.a)(e, 2),
            n = t[0],
            c = t[1],
            a = Object(o.useState)(""),
            i = Object(r.a)(a, 2),
            s = i[0],
            l = i[1],
            u = Object(o.useState)(""),
            j = Object(r.a)(u, 2),
            b = j[0],
            h = j[1],
            p = Object(o.useState)(""),
            O = Object(r.a)(p, 2),
            g = O[0],
            x = O[1],
            w = Object(o.useState)(""),
            S = Object(r.a)(w, 2),
            k = S[0],
            N = S[1],
            C = Object(o.useState)(""),
            E = Object(r.a)(C, 2),
            I = E[0],
            M = E[1],
            T = Object(o.useState)(!1),
            P = Object(r.a)(T, 2),
            _ = P[0],
            F = P[1];
          return (
            Object(o.useEffect)(
              function () {
                (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e() {
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0),
                                  navigator.geolocation.getCurrentPosition(
                                    function (e) {
                                      c(e.coords.latitude),
                                        l(e.coords.longitude);
                                    }
                                  ),
                                  !n || !s)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  (e.next = 5),
                                  fetch(
                                    "https://api.openweathermap.org/data/2.5/weather?lat="
                                      .concat(n, "&lon=")
                                      .concat(s, "&appid=")
                                      .concat(v)
                                  )
                                    .then(function (e) {
                                      return e.json();
                                    })
                                    .then(function (e) {
                                      h(e.main.temp - 273),
                                        x(e.name),
                                        N(e.sys.country),
                                        M(e.weather[0].icon);
                                    })
                                );
                              case 5:
                                F(!0);
                              case 6:
                                e.next = 11;
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 8]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [n, s]
            ),
            Object(d.jsx)("div", {
              children: _
                ? Object(d.jsx)(y, {
                    temperature: b,
                    location: g,
                    country: k,
                    image: I,
                  })
                : null,
            })
          );
        },
        k = function () {
          return Object(d.jsxs)("ul", {
            children: [
              Object(d.jsx)("li", {
                className: "time-container",
                children: Object(d.jsx)(x, {}),
              }),
              Object(d.jsx)("li", { children: Object(d.jsx)(S, {}) }),
            ],
          });
        },
        N =
          (n(54),
          n(55),
          function () {
            return Object(d.jsx)("div", {
              className: "copyright",
              children: Object(d.jsxs)("p", {
                children: [
                  Object(d.jsx)("a", {
                    href: "https://github.com/Pseudo-Pythonic/HeySara/blob/master/LICENSE",
                    children: "Copyright",
                  }),
                  "\xa9 2021, HeySara",
                ],
              }),
            });
          }),
        C = function (e) {
          return Object(d.jsxs)("div", {
            className: "main",
            children: [
              Object(d.jsx)("input", { type: "checkbox", id: "check" }),
              Object(d.jsxs)("label", {
                htmlFor: "check",
                children: [
                  Object(d.jsx)("i", { className: "fas fa-bars", id: "open" }),
                  Object(d.jsx)("i", {
                    className: "fas fa-times",
                    id: "cancel",
                  }),
                ],
              }),
              Object(d.jsxs)("div", {
                className: "sidebar",
                children: [
                  Object(d.jsx)(b, {}),
                  Object(d.jsx)(p, { userName: e.name, userPhoto: e.photo }),
                  Object(d.jsx)(k, {}),
                  Object(d.jsx)(N, {}),
                ],
              }),
            ],
          });
        },
        E = n(34),
        I = n.n(E),
        M =
          (n(56),
          function () {
            var e,
              t = Object(o.useState)(null),
              n = Object(r.a)(t, 2),
              c = n[0],
              a = n[1],
              i = Object(o.useState)(null),
              s = Object(r.a)(i, 2),
              l = s[0],
              u = s[1],
              j = Object(o.useState)(""),
              b = Object(r.a)(j, 2),
              h = (b[0], b[1], Object(o.useState)("")),
              p = Object(r.a)(h, 2),
              O =
                (p[0],
                p[1],
                new (window.SpeechRecognition ||
                  window.webkitSpeechRecognition)()),
              f = function (e) {
                window.responsiveVoice.speak(e);
              },
              m = function () {
                fetch(
                  "https://official-joke-api.appspot.com/random_joke"
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    a(e.setup), u(e.punchline);
                  });
              };
            Object(o.useEffect)(function () {
              m();
            }, []);
            return (
              Object(o.useEffect)(function () {
                (O.onspeechend = function () {
                  O.stop();
                }),
                  (O.onresult = function (t) {
                    if ((e = t.results[0][0].transcript).includes("search"))
                      if (e.includes("Wikipedia")) {
                        var n = e.split(" ");
                        n.splice(0, 3);
                        var o = n.join(" ");
                        f("Searching Wikipedia for ".concat(o)),
                          window.open(
                            "http://en.wikipedia.org/w/index.php?search=".concat(
                              o
                            ),
                            "_blank"
                          );
                      } else if (e.includes("Google")) {
                        var a = e.split(" ");
                        a.splice(0, 3);
                        var i = a.join(" ");
                        f("Searching Google for ".concat(i)),
                          window.open(
                            "https://www.google.com/search?q=".concat(i),
                            "_blank"
                          );
                      } else {
                        var s = e.split(" ");
                        s.splice(0, 2);
                        var r = s.join(" ");
                        f("Searching Google for ".concat(r)),
                          window.open(
                            "https://www.google.com/search?q=".concat(r),
                            "_blank"
                          );
                      }
                    else if (e.includes("browse")) {
                      var u = e.split(" ");
                      u.splice(0, 1);
                      var j = u.join(" ");
                      f("Searching YouTube for ".concat(j)),
                        window.open(
                          "http://www.youtube.com/results?search_query=".concat(
                            j
                          ),
                          "_blank"
                        );
                    } else if (e.includes("direction")) {
                      var d = e.split(" ");
                      d.splice(0, 2);
                      var b = d.join(" ");
                      f("Finding direction to ".concat(b)),
                        window.open(
                          "http://maps.google.com/maps/?q=directions to".concat(
                            b
                          ),
                          "_blank"
                        );
                    } else if (e.includes("weather"))
                      f("Opening Weather App"),
                        window.open(
                          "https://weather-app-pseudopythonic.netlify.app/",
                          "_blank"
                        );
                    else if (e.includes("new tab"))
                      window.open("https://www.google.com/", "_blank"),
                        f("Opening a new Tab");
                    else if (
                      e.includes("compose") ||
                      e.includes("mail") ||
                      e.includes("email")
                    ) {
                      var h = window.prompt(
                          "Enter the e-mail address of recipient"
                        ),
                        p = window.prompt("Enter the subject of the mail"),
                        O = window.prompt("Enter the body of the mail");
                      f("Composing mail to ".concat(h)),
                        window.open(
                          "mailto:"
                            .concat(h, "?subject=")
                            .concat(p, "&body=")
                            .concat(O),
                          "_blank"
                        );
                    } else if (e.includes("play"))
                      if (e.includes("music")) {
                        var g = window.prompt(
                          "Enter the name of the song you want to listen"
                        );
                        f("Opening ".concat(g, " on JioSaavn")),
                          window.open(
                            "https://www.jiosaavn.com/search/".concat(g),
                            "_blank"
                          );
                      } else {
                        var x = e.split(" ");
                        x.splice(0, 1);
                        var w = x.join(" ");
                        f("Opening ".concat(w, " on JioSaavn")),
                          window.open(
                            "https://www.jiosaavn.com/search/".concat(w),
                            "_blank"
                          );
                      }
                    else
                      c && l
                        ? (e.includes("joke") || e.includes("jokes")) &&
                          (m(),
                          f(c),
                          setTimeout(function () {
                            f(l);
                          }, 4e3))
                        : f("Can't reach to the server right now!");
                  });
              }),
              Object(d.jsx)("div", {
                id: "MicContainer",
                className: "parent",
                children: Object(d.jsx)("button", {
                  onClick: function () {
                    O.start();
                  },
                  type: "button",
                  className: "mic",
                  children: Object(d.jsx)(I.a, {
                    fontSize: "large",
                    className: "micIcon",
                  }),
                }),
              })
            );
          }),
        T = n(18),
        P = (n(61), { body: "#fff" }),
        _ = { body: "#333551", fontColor: "#fff", borderColor: "#fff" },
        F = Object(T.b)(
          c ||
            (c = Object(l.a)([
              "\n\n    body{\n        background: ",
              ";\n        transition: background 1s;\n    }\n\n    svg.MuiSvgIcon-root{\n        transition: 0.6s ease;\n        color: ",
              "\n    }\n\n    i#open{\n        color: ",
              "\n    }\n\n    button.toggler{\n      border-color: ",
              "\n    }\n\n",
            ])),
          function (e) {
            return e.theme.body;
          },
          function (e) {
            return e.theme.fontColor;
          },
          function (e) {
            return e.theme.fontColor;
          },
          function (e) {
            return e.theme.borderColor;
          }
        ),
        A = n(29);
      A.a.initializeApp({
        apiKey: "AIzaSyCMEKbv_uZI0fNxTIg3TTIwh4jg-koF938",
        authDomain: "react-heysara.firebaseapp.com",
        projectId: "react-heysara",
        storageBucket: "react-heysara.appspot.com",
        messagingSenderId: "587439991090",
        appId: "1:587439991090:web:01443970ee312479d58f2b",
        measurementId: "G-JXYML39XMF",
      });
      var D,
        L = A.a,
        G = (n(67), n(41)),
        J = n.n(G),
        U = n(28),
        q = n.n(U),
        R = n(38),
        W = n.n(R),
        Y = n(39),
        B = n.n(Y),
        H = function () {
          var e = Object(o.useState)(!1),
            t = Object(r.a)(e, 2),
            n = t[0],
            c = t[1];
          return Object(d.jsxs)("div", {
            className: "command-container",
            children: [
              Object(d.jsx)("button", {
                className: "showCommand",
                onClick: function () {
                  if (!n)
                    return (
                      c(!0),
                      (document.getElementById("myNav").style.height = "100%"),
                      void console.log("Opened")
                    );
                },
                children: Object(d.jsx)(W.a, {}),
              }),
              Object(d.jsx)(d.Fragment, {
                children: Object(d.jsxs)("div", {
                  id: "myNav",
                  className: "overlay",
                  children: [
                    Object(d.jsx)(B.a, {
                      className: "closebtn",
                      onClick: function () {
                        c(!1),
                          (document.getElementById("myNav").style.height =
                            "0%");
                      },
                    }),
                    Object(d.jsxs)("ul", {
                      className: "overlay-content",
                      children: [
                        Object(d.jsx)("h5", { children: "Commands for Sara" }),
                        Object(d.jsx)("li", {
                          children:
                            "Search Wikipedia for (YOUR COMMAND): Searches your query and redirects to Wikipedia",
                        }),
                        Object(d.jsx)("li", {
                          children:
                            "Search Google for (YOUR COMMAND) / Search for (YOUR COMMAND): Searches your query on Google",
                        }),
                        Object(d.jsx)("li", {
                          children:
                            "Browse (CHANNEL NAME / QUERY): Searches your query on YouTube",
                        }),
                        Object(d.jsx)("li", {
                          children:
                            "Direction to (QUERY): Fetches you the directions to the query",
                        }),
                        Object(d.jsx)("li", {
                          children:
                            "Weather : Gets you to the weather app and there you can search for your preferred city!",
                        }),
                        Object(d.jsxs)("li", {
                          children: [
                            "Compose / Compose Email/ Mail: Gets the recipient, body and subject from the user and autofills them in the composed mail! Just the user needs to send it!",
                            Object(d.jsx)("br", {}),
                            Object(d.jsx)("code", {
                              children:
                                "For PC Users: Please enable Mail as the default app for mails for the working of this command. For android users enable Pop-ups to always show for working of this command!",
                            }),
                          ],
                        }),
                        Object(d.jsxs)("li", {
                          children: [
                            " ",
                            "Play Music ( if you want to type the name of the song you want to play) / Play (Song Name) : For searching the song you want to play!",
                          ],
                        }),
                        Object(d.jsx)("li", {
                          children:
                            "Crack some Jokes: Tells you a random joke line!",
                        }),
                        Object(d.jsx)("li", {
                          children:
                            "Note: Sara will not respond if you command her wrong!",
                        }),
                        Object(d.jsx)("li", {
                          children:
                            "Note: Enable location, microphone and pop-up permissions for the better functioning of Sara!",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        z = n(40),
        K = n.n(z),
        Q =
          (n(68),
          function () {
            return Object(d.jsx)("div", {
              id: "sourceCode",
              children: Object(d.jsx)("a", {
                href: "https://github.com/Pseudo-Pythonic/HeySara",
                target: "_blank",
                children: Object(d.jsx)(K.a, {}),
              }),
            });
          }),
        X = function (e) {
          var t = Object(o.useState)(Object(d.jsx)(q.a, {})),
            n = Object(r.a)(t, 2),
            c = n[0],
            a = n[1],
            i = Object(o.useState)(!1),
            s = Object(r.a)(i, 2),
            l = s[0],
            u = s[1];
          return Object(d.jsxs)("div", {
            id: "main",
            children: [
              Object(d.jsx)(Q, {}),
              Object(d.jsx)(H, {}),
              Object(d.jsx)("button", {
                className: "toggler",
                type: "button",
                onClick: function () {
                  return (
                    e.theme(),
                    l
                      ? l
                        ? (u(!1), void a(Object(d.jsx)(q.a, {})))
                        : void 0
                      : (u(!0), void a(Object(d.jsx)(J.a, {})))
                  );
                },
                children: c,
              }),
            ],
          });
        },
        V = T.c.div(D || (D = Object(l.a)([""]))),
        Z = function () {
          var e = Object(o.useState)("light"),
            t = Object(r.a)(e, 2),
            n = t[0],
            c = t[1],
            a = Object(o.useState)(!1),
            i = Object(r.a)(a, 2),
            s = i[0],
            l = i[1],
            j = Object(o.useState)(""),
            b = Object(r.a)(j, 2),
            h = b[0],
            p = b[1],
            O = Object(o.useState)(""),
            f = Object(r.a)(O, 2),
            m = f[0],
            g = f[1];
          return (
            Object(o.useEffect)(
              function () {
                L.auth().onAuthStateChanged(function (e) {
                  p(e.displayName), g(e.photoURL), l(!0);
                });
              },
              [l]
            ),
            Object(d.jsx)("div", {
              children:
                !1 === s
                  ? Object(d.jsxs)("div", {
                      className: "LoginContainer",
                      children: [
                        Object(d.jsx)("img", { src: u, alt: "AuthLogo" }),
                        Object(d.jsx)("button", {
                          onClick: function () {
                            var e = new L.auth.GoogleAuthProvider();
                            L.auth()
                              .signInWithPopup(e)
                              .catch(function (e) {
                                console.log(e);
                              });
                          },
                          className: "SignIn",
                          children: "Sign In with Google",
                        }),
                      ],
                    })
                  : Object(d.jsxs)(T.a, {
                      theme: "light" === n ? P : _,
                      children: [
                        Object(d.jsx)(F, {}),
                        Object(d.jsxs)(V, {
                          children: [
                            Object(d.jsx)(C, { name: h, photo: m }),
                            Object(d.jsx)(X, {
                              theme: function () {
                                c("light" === n ? "dark" : "light");
                              },
                            }),
                            Object(d.jsx)(M, {}),
                          ],
                        }),
                      ],
                    }),
            })
          );
        };
      var $ = function () {
          return Object(d.jsx)(Z, {});
        },
        ee = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 82))
              .then(function (t) {
                var n = t.getCLS,
                  c = t.getFID,
                  o = t.getFCP,
                  a = t.getLCP,
                  i = t.getTTFB;
                n(e), c(e), o(e), a(e), i(e);
              });
        };
      s.a.render(
        Object(d.jsx)(a.a.StrictMode, { children: Object(d.jsx)($, {}) }),
        document.getElementById("root")
      ),
        ee();
    },
  },
  [[70, 1, 2]],
]);
//# sourceMappingURL=main.27171d79.chunk.js.map
