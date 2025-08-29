import { jsxs, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';

function NotFoundComponent() {
  const [glitchText, setGlitchText] = useState("404");
  useEffect(() => {
    const glitchChars = ["4", "0", "4", "\u2206", "\u25CA", "\xA7", "\xA4", "\u25E6", "\u25CF"];
    let glitchInterval;
    const startGlitch = () => {
      glitchInterval = setInterval(() => {
        const randomChars = Array.from({
          length: 3
        }, () => glitchChars[Math.floor(Math.random() * glitchChars.length)]).join("");
        setGlitchText(randomChars);
        setTimeout(() => setGlitchText("404"), 150);
      }, 2e3);
    };
    startGlitch();
    return () => {
      if (glitchInterval) clearInterval(glitchInterval);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-8 h-8 border-2 border-gray-600 rounded opacity-30 animate-spin", style: {
        animationDuration: "8s"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-3/4 right-1/4 w-6 h-6 border-2 border-gray-500 rounded-full opacity-40 animate-bounce", style: {
        animationDelay: "1s"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 w-10 h-10 border border-gray-700 rotate-45 opacity-20 animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 left-1/3 w-4 h-4 bg-purple-500 rounded opacity-50 animate-ping", style: {
        animationDelay: "2s"
      } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-display text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 leading-none select-none", children: glitchText }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 font-display text-9xl md:text-[12rem] font-black text-red-500 opacity-20 transform translate-x-1 -translate-y-1 animate-pulse", children: glitchText }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 font-display text-9xl md:text-[12rem] font-black text-blue-500 opacity-20 transform -translate-x-1 translate-y-1 animate-pulse", style: {
            animationDelay: "0.5s"
          }, children: glitchText })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-white", children: "Page Not Found" }),
          /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-white", children: "Oops! This page seems to have vanished into the void" }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-lg text-gray-300 leading-relaxed", children: "The page you're looking for might have been moved, deleted, or maybe it never existed in the first place. But don't worry\u2014there are plenty of amazing movies waiting to be discovered!" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) }),
            /* @__PURE__ */ jsx("span", { children: "Back to Home" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/about", className: "inline-flex items-center space-x-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
            /* @__PURE__ */ jsx("span", { children: "Learn More" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800", children: [
          /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-gray-400 mb-3 text-center", children: "Or try searching for something specific:" }),
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "w-full inline-flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-all duration-200 border border-gray-700 hover:border-gray-600", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-body text-sm", children: "Search Movies" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/20 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-xl font-bold text-white mb-4", children: "While you're here, why not explore:" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm", children: [{
          emoji: "\u{1F3AC}",
          text: "Popular Movies",
          search: "popular"
        }, {
          emoji: "\u{1F31F}",
          text: "Top Rated Films",
          search: "top%20rated"
        }, {
          emoji: "\u{1F525}",
          text: "Trending Now",
          search: "trending"
        }, {
          emoji: "\u{1F3AD}",
          text: "Classic Cinema",
          search: "classic"
        }, {
          emoji: "\u{1F680}",
          text: "Sci-Fi Adventures",
          search: "sci-fi"
        }, {
          emoji: "\u{1F49D}",
          text: "Romantic Movies",
          search: "romance"
        }].map((item, index) => /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center space-x-2 p-3 bg-gray-800/30 hover:bg-gray-700/30 rounded-lg transition-all duration-200 group", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg group-hover:scale-110 transition-transform duration-200", children: item.emoji }),
          /* @__PURE__ */ jsx("span", { className: "font-body text-gray-300 group-hover:text-white transition-colors duration-200", children: item.text })
        ] }, index)) })
      ] }) })
    ] })
  ] });
}

export { NotFoundComponent as component };
//# sourceMappingURL=_splat-BgOOuYYU.mjs.map
