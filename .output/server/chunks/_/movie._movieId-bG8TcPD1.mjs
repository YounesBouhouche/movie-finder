import { jsx, jsxs } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { S as Spinner } from './Spinner-BfeKxBTA.mjs';
import { useEffect } from 'react';
import { u as useQueryFetch } from './useQueryFetch-C9Zr7z3b.mjs';
import { a as Route } from './ssr.mjs';
import '@tanstack/react-query';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import '@tanstack/router-core/ssr/server';
import 'node:async_hooks';
import 'tiny-invariant';
import '@tanstack/react-router/ssr/server';

function RouteComponent() {
  var _a;
  const {
    movieId
  } = Route.useParams();
  const [movie, errorMessage, isLoading] = useQueryFetch(`/movie/${movieId}`, `movie-${movieId}`);
  useEffect(() => {
    console.log(movie);
  }, [movie]);
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsx(Spinner, {}) });
  }
  if (errorMessage || !movie) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-red-900/50 border border-red-700 rounded-xl p-8 max-w-md mx-auto", children: /* @__PURE__ */ jsx("div", { className: "text-red-400 text-lg font-semibold", children: errorMessage || "Movie not found" }) }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105", children: "\u2190 Back to Movies" })
    ] }) });
  }
  const releaseYear = new Date(movie.release_date).getFullYear();
  const rating = movie.vote_average.toFixed(1);
  const runtime = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`;
  const budget = movie.budget ? `$${(movie.budget / 1e6).toFixed(1)}M` : "N/A";
  const revenue = movie.revenue ? `$${(movie.revenue / 1e6).toFixed(1)}M` : "N/A";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-[70vh] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: movie.backdrop_path ? `https://images.tmdb.org/t/p/original/${movie.backdrop_path}` : "https://via.placeholder.com/1920x1080/1f2937/9ca3af?text=No+Image", alt: movie.title, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-8 left-8 z-10", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center space-x-2 px-4 py-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }),
        /* @__PURE__ */ jsx("span", { className: "font-body", children: "Back to Movies" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 items-end", children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-sm mx-auto md:mx-0", children: [
          /* @__PURE__ */ jsx("img", { src: movie.poster_path ? `https://images.tmdb.org/t/p/w500/${movie.poster_path}` : "https://via.placeholder.com/500x750/1f2937/9ca3af?text=No+Image", alt: movie.title, className: "w-full rounded-2xl shadow-2xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl font-black text-white leading-tight", children: movie.title }),
            movie.tagline && /* @__PURE__ */ jsxs("p", { className: "font-body text-xl text-gray-300 italic", children: [
              '"',
              movie.tagline,
              '"'
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 text-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: releaseYear }),
              /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: runtime }),
              /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold", children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
                  /* @__PURE__ */ jsx("span", { children: rating })
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-400 text-sm", children: [
                  "(",
                  movie.vote_count.toLocaleString(),
                  " votes)"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: movie.genres.map((genre) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-purple-600/30 border border-purple-500/50 text-purple-200 rounded-full text-sm font-medium", children: genre.name }, genre.id)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxs("button", { className: "flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
              /* @__PURE__ */ jsx("span", { children: "Watch Trailer" })
            ] }),
            /* @__PURE__ */ jsxs("button", { className: "flex items-center space-x-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) }),
              /* @__PURE__ */ jsx("span", { children: "Add to Favorites" })
            ] })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-12", children: [
        /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl font-bold text-white flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" }),
            /* @__PURE__ */ jsx("span", { children: "Overview" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-lg text-gray-300 leading-relaxed", children: movie.overview || "No overview available for this movie." })
        ] }),
        movie.production_companies.length > 0 && /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl font-bold text-white flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" }),
            /* @__PURE__ */ jsx("span", { children: "Production" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-6", children: movie.production_companies.slice(0, 6).map((company) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 rounded-xl p-4 text-center space-y-2", children: [
            company.logo_path ? /* @__PURE__ */ jsx("img", { src: `https://images.tmdb.org/t/p/w200/${company.logo_path}`, alt: company.name, className: "h-12 mx-auto object-contain filter brightness-0 invert" }) : /* @__PURE__ */ jsx("div", { className: "h-12 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gray-700 rounded-lg" }) }),
            /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-gray-300 font-medium", children: company.name })
          ] }, company.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 sticky top-24", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white mb-6", children: "Movie Details" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [{
          label: "Status",
          value: movie.status
        }, {
          label: "Original Language",
          value: ((_a = movie.spoken_languages[0]) == null ? void 0 : _a.name) || "Unknown"
        }, {
          label: "Budget",
          value: budget
        }, {
          label: "Revenue",
          value: revenue
        }, {
          label: "Runtime",
          value: runtime
        }, {
          label: "Release Date",
          value: new Date(movie.release_date).toLocaleDateString()
        }].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-2 border-b border-gray-800 last:border-b-0", children: [
          /* @__PURE__ */ jsx("span", { className: "font-body text-gray-400 text-sm", children: item.label }),
          /* @__PURE__ */ jsx("span", { className: "font-body text-white font-medium", children: item.value })
        ] }, index)) }),
        movie.homepage && /* @__PURE__ */ jsx("div", { className: "mt-6 pt-6 border-t border-gray-800", children: /* @__PURE__ */ jsxs("a", { href: movie.homepage, target: "_blank", rel: "noopener noreferrer", className: "w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105", children: [
          /* @__PURE__ */ jsx("span", { children: "Official Website" }),
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) })
        ] }) })
      ] }) })
    ] }) })
  ] });
}

export { RouteComponent as component };
//# sourceMappingURL=movie._movieId-bG8TcPD1.mjs.map
