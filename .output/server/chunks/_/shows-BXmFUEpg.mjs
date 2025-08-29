import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { l as lib, u as useFetch, H as Header } from './index.mjs';
import { S as Spinner } from './Spinner-BfeKxBTA.mjs';
import 'tslib';
import 'fast-deep-equal/react';
import 'js-cookie';
import 'copy-to-clipboard';
import 'nano-css';
import 'nano-css/addon/cssom';
import 'nano-css/addon/vcssom';
import 'nano-css/addon/vcssom/cssToTree';
import 'screenfull';
import 'set-harmonic-interval';
import 'throttle-debounce';
import 'react-universal-interface';
import 'fast-shallow-equal';
import 'ts-easing';
import '@xobotyi/scrollbar-width';

const TvCard = ({ tv, onClick }) => {
  const handleFullDetails = () => {
    window.location.href = `/tv/${tv.id}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105 border border-gray-800 hover:border-pink-500/50", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: tv.poster_path ? `https://images.tmdb.org/t/p/w500/${tv.poster_path}` : "https://via.placeholder.com/500x750/1f2937/9ca3af?text=No+Image",
          alt: tv.name,
          className: "w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg", children: "TV" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg", children: [
        "\u2B50 ",
        tv.vote_average.toFixed(1)
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300 line-clamp-2", children: tv.name }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm text-gray-400 font-body", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-gray-800 px-3 py-1 rounded-full uppercase tracking-wider", children: tv.original_language }),
        /* @__PURE__ */ jsx("span", { className: "text-pink-400 font-semibold", children: new Date(tv.first_air_date).getFullYear() })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-2xl font-bold text-white", children: tv.name }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-gray-300 text-sm line-clamp-3 max-w-sm", children: tv.overview || "No description available" }),
        /* @__PURE__ */ jsxs("div", { className: "font-body flex items-center justify-center space-x-4 text-sm text-gray-300", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { children: "\u2B50" }),
            /* @__PURE__ */ jsx("span", { children: tv.vote_average.toFixed(1) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
          /* @__PURE__ */ jsx("span", { className: "uppercase", children: tv.original_language }),
          /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
          /* @__PURE__ */ jsx("span", { children: new Date(tv.first_air_date).getFullYear() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [
          /* @__PURE__ */ jsx("button", { onClick, className: "px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer text-sm", children: "Quick View" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleFullDetails,
              className: "px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm",
              children: "Full Details"
            }
          )
        ] })
      ] }) })
    ] })
  ] }, tv.id);
};
const TvDialog = ({ tv, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleFullDetails = () => {
    window.location.href = `/tv/${tv.id}`;
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn",
      onClick: handleBackdropClick,
      children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700 animate-slideUp", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-64 overflow-hidden rounded-t-2xl", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: tv.backdrop_path ? `https://images.tmdb.org/t/p/w1280/${tv.backdrop_path}` : `https://images.tmdb.org/t/p/w500/${tv.poster_path}`,
              alt: tv.name,
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white hover:text-pink-400 transition-all duration-200 backdrop-blur-sm",
              children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg", children: "\u{1F4FA} TV Series" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: tv.poster_path ? `https://images.tmdb.org/t/p/w300/${tv.poster_path}` : "https://via.placeholder.com/300x450/1f2937/9ca3af?text=No+Image",
              alt: tv.name,
              className: "w-48 h-72 object-cover rounded-xl shadow-lg mx-auto lg:mx-0"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold text-white mb-2", children: tv.name }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 text-sm text-gray-300", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "\u2B50" }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-yellow-400", children: tv.vote_average.toFixed(1) }),
                  /* @__PURE__ */ jsx("span", { children: "/10" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
                /* @__PURE__ */ jsx("span", { className: "bg-gray-800 px-3 py-1 rounded-full uppercase tracking-wider", children: tv.original_language }),
                /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
                /* @__PURE__ */ jsxs("span", { className: "text-pink-400 font-semibold", children: [
                  "First Aired: ",
                  new Date(tv.first_air_date).getFullYear()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "font-body text-sm text-gray-400", children: "Audience Score" }),
                /* @__PURE__ */ jsxs("span", { className: "font-body text-sm text-gray-300", children: [
                  Math.round(tv.vote_average * 10),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-800 rounded-full h-2", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-500",
                  style: { width: `${tv.vote_average * 10}%` }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white", children: "Overview" }),
              /* @__PURE__ */ jsx("p", { className: "font-body text-gray-300 leading-relaxed", children: tv.overview || "No overview available for this TV series." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleFullDetails,
                  className: "flex-1 px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
                    /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                      /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: "View Full Details" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onClose,
                  className: "px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600",
                  children: "Close"
                }
              )
            ] })
          ] })
        ] }) })
      ] })
    }
  );
};
function RouteComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tv, setTv] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  lib.useDebounce(() => {
    setDebouncedQuery(searchQuery);
  }, 500, [searchQuery]);
  const tvsEndpoint = debouncedQuery ? `/search/tv?query=${encodeURIComponent(debouncedQuery)}` : `/discover/tv?sort_by=popularity.desc`;
  const [tvsList, tvsError, tvsLoading] = useFetch(tvsEndpoint, (data) => data.results, [debouncedQuery]);
  const tvs = tvsList || [];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsx(Header, { searchQuery, setSearchQuery }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl font-bold text-white flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-8 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full" }),
              /* @__PURE__ */ jsx("span", { children: searchQuery ? `TV Shows for "${searchQuery}"` : "Popular TV Shows" })
            ] }),
            searchQuery && /* @__PURE__ */ jsx("button", { onClick: () => setSearchQuery(""), className: "absolute -top-2 -right-2 w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-xs text-gray-300 hover:text-white transition-all duration-200", children: "\xD7" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-gray-400 text-lg font-medium", children: [
              /* @__PURE__ */ jsx("span", { className: "text-pink-400 font-bold", children: tvs.length }),
              " shows found"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" }) }) }),
              /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 10h16M4 14h16M4 18h16" }) }) })
            ] })
          ] })
        ] }),
        tvsLoading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center py-20", children: /* @__PURE__ */ jsx(Spinner, {}) }) : tvsError ? /* @__PURE__ */ jsx("div", { className: "text-center py-20", children: /* @__PURE__ */ jsx("div", { className: "bg-red-900/50 border border-red-700 rounded-xl p-8 max-w-md mx-auto", children: /* @__PURE__ */ jsx("div", { className: "text-red-400 text-lg font-semibold", children: tvsError }) }) }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8", children: tvs.map((element) => /* @__PURE__ */ jsx(TvCard, { tv: element, onClick: () => setTv(element) }, element.id)) })
      ] })
    ] }),
    tv && /* @__PURE__ */ jsx(TvDialog, { tv, onClose: () => setTv(null) })
  ] });
}

export { RouteComponent as component };
//# sourceMappingURL=shows-BXmFUEpg.mjs.map
