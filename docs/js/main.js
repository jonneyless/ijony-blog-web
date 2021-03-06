console.log("hexo-theme-stellar:\n" + stellar.github);
const util = {
  diffDate: (e, t = !1) => {
    const l = new Date
      , a = new Date(e);
    var s, i, n = l.getTime() - a.getTime(), r = 864e5;
    let o;
    return o = t ? (s = n / r,
      i = n / 36e5,
      e = n / 6e4,
      12 < (t = n / 2592e6) ? null : 1 <= t ? parseInt(t) + " " + stellar.config.date_suffix.month : 1 <= s ? parseInt(s) + " " + stellar.config.date_suffix.day : 1 <= i ? parseInt(i) + " " + stellar.config.date_suffix.hour : 1 <= e ? parseInt(e) + " " + stellar.config.date_suffix.min : stellar.config.date_suffix.just) : parseInt(n / r),
      o
  }
  ,
  copy: (e, t) => {
    const l = document.getElementById(e);
    l && (l.select(),
      document.execCommand("Copy"),
    t && 0 < t.length && hud.toast(t))
  }
  ,
  toggle: e => {
    const t = document.getElementById(e);
    t && t.classList.toggle("display")
  }
}
  , hud = {
  toast: (e, t) => {
    t = isNaN(t) ? 2e3 : t;
    var l = document.createElement("div");
    l.classList.add("toast"),
      l.innerHTML = e,
      document.body.appendChild(l),
      setTimeout(function () {
        l.style.webkitTransition = "-webkit-transform 0.5s ease-in, opacity 0.5s ease-in",
          l.style.opacity = "0",
          setTimeout(function () {
            document.body.removeChild(l)
          }, 500)
      }, t)
  }
}
  , l_body = document.querySelector(".l_body")
  , sidebar = {
  toggle: () => {
    l_body && (l_body.classList.add("mobile"),
      l_body.classList.toggle("sidebar"))
  }
}
  , init = {
  toc: () => {
    stellar.jQuery(() => {
        var n = [];
        $("article.md :header").each(function (e, t) {
          n.push(t)
        }),
          $(document, window).scroll(function (e) {
            var t, l, a = $(this).scrollTop(), s = null;
            for (t in n) {
              var i = $(n[t]);
              i.offset().top > a + 32 || (!s || i.offset().top >= s.offset().top) && (s = i)
            }
            s && ($("#toc a.toc-link").removeClass("active"),
              ("#undefined" != (l = "#" + s.attr("id")) ? $('#toc a.toc-link[href="' + encodeURI(l) + '"]') : $("#toc a.toc-link:first")).addClass("active"))
          })
      }
    )
  }
  ,
  sidebar: () => {
    stellar.jQuery(() => {
        $("#toc a.toc-link").click(function (e) {
          l_body.classList.remove("sidebar")
        })
      }
    )
  }
  ,
  relativeDate: e => {
    e.forEach(e => {
        const t = e;
        e = t.getAttribute("datetime"),
          e = util.diffDate(e, !0);
        e && (t.innerText = e)
      }
    )
  }
  ,
  registerTabsTag: function () {
    document.querySelectorAll(".tabs ul.nav-tabs .tab").forEach(l => {
        l.addEventListener("click", e => {
            if (e.preventDefault(),
              !l.classList.contains("active")) {
              [...l.parentNode.children].forEach(e => {
                  e.classList.toggle("active", e === l)
                }
              );
              const t = document.getElementById(l.querySelector("a").getAttribute("href").replace("#", ""));
              [...t.parentNode.children].forEach(e => {
                  e.classList.toggle("active", e === t)
                }
              ),
                t.dispatchEvent(new Event("tabs:click", {
                  bubbles: !0
                }))
            }
          }
        )
      }
    ),
      window.dispatchEvent(new Event("tabs:register"))
  }
};
if (init.toc(),
  init.sidebar(),
  init.relativeDate(document.querySelectorAll("#post-meta time")),
  init.registerTabsTag(),
stellar.plugins.scrollreveal && stellar.loadScript(stellar.plugins.scrollreveal.js).then(function () {
  ScrollReveal().reveal("body .reveal", {
    distance: stellar.plugins.scrollreveal.distance,
    duration: stellar.plugins.scrollreveal.duration,
    interval: stellar.plugins.scrollreveal.interval,
    scale: stellar.plugins.scrollreveal.scale,
    easing: "ease-out"
  })
}),
stellar.plugins.lazyload && (stellar.loadScript(stellar.plugins.lazyload.js, {
  defer: !0
}),
  window.lazyLoadOptions = {
    elements_selector: ".lazy"
  },
  window.addEventListener("LazyLoad::Initialized", function (e) {
    window.lazyLoadInstance = e.detail.instance
  }, !1),
  document.addEventListener("DOMContentLoaded", function () {
    lazyLoadInstance.update()
  })),
  stellar.plugins.sitesjs) {
  const T = document.getElementById("sites-api");
  null != T && stellar.jQuery(() => {
      stellar.loadScript(stellar.plugins.sitesjs, {
        defer: !0
      })
    }
  )
}
if (stellar.plugins.friendsjs) {
  const U = document.getElementById("friends-api");
  null != U && stellar.jQuery(() => {
      stellar.loadScript(stellar.plugins.friendsjs, {
        defer: !0
      })
    }
  )
}
if (stellar.plugins.swiper) {
  const V = document.getElementById("swiper-api");
  null != V && (stellar.loadCSS(stellar.plugins.swiper.css),
    stellar.loadScript(stellar.plugins.swiper.js, {
      defer: !0
    }).then(function () {
      new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 8,
        centeredSlides: !0,
        loop: !0,
        pagination: {
          el: ".swiper-pagination",
          clickable: !0
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      })
    }))
}
stellar.plugins.preload && ("instant_page" == stellar.plugins.preload.service ? stellar.loadScript(stellar.plugins.preload.instant_page, {
  defer: !0,
  type: "module",
  integrity: "sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1"
}) : "flying_pages" == stellar.plugins.preload.service && (window.FPConfig = {
  delay: 0,
  ignoreKeywords: [],
  maxRPS: 5,
  hoverDelay: 25
},
  stellar.loadScript(stellar.plugins.preload.flying_pages, {
    defer: !0
  })));
