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

const MovieCard = ({ movie, onClick }) => {
  const handleFullDetails = () => {
    window.location.href = `/movie/${movie.id}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 border border-gray-800 hover:border-purple-500/50", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: movie.poster_path ? `https://images.tmdb.org/t/p/w500/${movie.poster_path}` : "https://via.placeholder.com/500x750/1f2937/9ca3af?text=No+Image",
          alt: movie.title,
          className: "w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg", children: [
        "\u2B50 ",
        movie.vote_average.toFixed(1)
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2", children: movie.title }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm text-gray-400 font-body", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-gray-800 px-3 py-1 rounded-full uppercase tracking-wider", children: movie.original_language }),
        /* @__PURE__ */ jsx("span", { className: "text-purple-400 font-semibold", children: new Date(movie.release_date).getFullYear() })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-2xl font-bold text-white", children: movie.title }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-gray-300 text-sm line-clamp-3 max-w-sm", children: movie.overview || "No description available" }),
        /* @__PURE__ */ jsxs("div", { className: "font-body flex items-center justify-center space-x-4 text-sm text-gray-300", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { children: "\u2B50" }),
            /* @__PURE__ */ jsx("span", { children: movie.vote_average.toFixed(1) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
          /* @__PURE__ */ jsx("span", { className: "uppercase", children: movie.original_language }),
          /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
          /* @__PURE__ */ jsx("span", { children: new Date(movie.release_date).getFullYear() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [
          /* @__PURE__ */ jsx("button", { onClick, className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer text-sm", children: "Quick View" }),
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
  ] }, movie.id);
};
function MovieDialog({ movie, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);
  const releaseYear = new Date(movie.release_date).getFullYear();
  const rating = movie.vote_average.toFixed(1);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm",
                children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row", children: [
              /* @__PURE__ */ jsx("div", { className: "lg:w-1/3 relative", children: /* @__PURE__ */ jsxs("div", { className: "aspect-[2/3] lg:aspect-auto lg:h-[600px] relative overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: movie.poster_path ? `https://images.tmdb.org/t/p/w500/${movie.poster_path}` : "https://via.placeholder.com/500x750/1f2937/9ca3af?text=No+Image",
                    alt: movie.title,
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "lg:w-2/3 p-6 lg:p-8 space-y-6 overflow-y-auto max-h-[600px]", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl lg:text-4xl font-bold text-white leading-tight", children: movie.title }),
                    /* @__PURE__ */ jsxs("div", { className: "font-body flex items-center space-x-4 text-gray-300", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: releaseYear }),
                      /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
                      /* @__PURE__ */ jsx("span", { className: "uppercase text-sm tracking-wider", children: movie.original_language })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-1", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold", children: [
                      /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
                      /* @__PURE__ */ jsx("span", { className: "text-lg", children: rating })
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "TMDB Score" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("h2", { className: "font-display text-xl font-semibold text-white flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" }),
                    /* @__PURE__ */ jsx("span", { children: "Overview" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "font-body text-gray-300 leading-relaxed text-lg", children: movie.overview || "No description available for this movie." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-lg p-4 space-y-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 uppercase tracking-wider", children: "Release Date" }),
                    /* @__PURE__ */ jsx("div", { className: "text-white font-semibold", children: new Date(movie.release_date).toLocaleDateString() })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-lg p-4 space-y-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 uppercase tracking-wider", children: "Language" }),
                    /* @__PURE__ */ jsx("div", { className: "text-white font-semibold uppercase", children: movie.original_language })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-lg p-4 space-y-2 col-span-2 lg:col-span-1", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 uppercase tracking-wider", children: "Rating" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
                        "svg",
                        {
                          className: `w-4 h-4 ${i < Math.floor(movie.vote_average / 2) ? "text-yellow-400" : "text-gray-600"}`,
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
                        },
                        i
                      )) }),
                      /* @__PURE__ */ jsxs("span", { className: "text-white font-semibold", children: [
                        rating,
                        "/10"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-4", children: [
                  /* @__PURE__ */ jsxs("button", { className: "flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2", children: [
                    /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
                    /* @__PURE__ */ jsx("span", { children: "Watch Trailer" })
                  ] }),
                  /* @__PURE__ */ jsxs("button", { className: "flex-1 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2", children: [
                    /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) }),
                    /* @__PURE__ */ jsx("span", { children: "Add to Favorites" })
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function HomeComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  lib.useDebounce(() => {
    setDebouncedQuery(searchQuery);
  }, 500, [searchQuery]);
  const moviesEndpoint = debouncedQuery ? `/search/movie?query=${encodeURIComponent(debouncedQuery)}` : `/discover/movie?sort_by=popularity.desc`;
  const [moviesList, moviesError, moviesLoading] = useFetch(moviesEndpoint, (data) => data.results, [debouncedQuery]);
  const movies = moviesList || [];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsx(Header, { searchQuery, setSearchQuery }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl font-bold text-white flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" }),
              /* @__PURE__ */ jsx("span", { children: searchQuery ? `Results for "${searchQuery}"` : "Trending Movies" })
            ] }),
            searchQuery && /* @__PURE__ */ jsx("button", { onClick: () => setSearchQuery(""), className: "absolute -top-2 -right-2 w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-xs text-gray-300 hover:text-white transition-all duration-200", children: "\xD7" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-gray-400 text-lg font-medium", children: [
              /* @__PURE__ */ jsx("span", { className: "text-purple-400 font-bold", children: movies.length }),
              " movies found"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" }) }) }),
              /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 10h16M4 14h16M4 18h16" }) }) })
            ] })
          ] })
        ] }),
        moviesLoading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center py-20", children: /* @__PURE__ */ jsx(Spinner, {}) }) : moviesError ? /* @__PURE__ */ jsx("div", { className: "text-center py-20", children: /* @__PURE__ */ jsx("div", { className: "bg-red-900/50 border border-red-700 rounded-xl p-8 max-w-md mx-auto", children: /* @__PURE__ */ jsx("div", { className: "text-red-400 text-lg font-semibold", children: moviesError }) }) }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8", children: movies.map((element) => /* @__PURE__ */ jsx(MovieCard, { movie: element, onClick: () => setMovie(element) }, element.id)) })
      ] })
    ] }),
    movie && /* @__PURE__ */ jsx(MovieDialog, { movie, onClose: () => setMovie(null) })
  ] });
}

export { HomeComponent as component };
//# sourceMappingURL=index-C4jp_5LG.mjs.map
