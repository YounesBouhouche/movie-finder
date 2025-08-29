import { jsx, jsxs } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { S as Spinner } from './Spinner-BfeKxBTA.mjs';
import { useEffect } from 'react';
import { u as useQueryFetch } from './useQueryFetch-C9Zr7z3b.mjs';
import { R as Route$1 } from './ssr.mjs';
import '@tanstack/react-query';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import '@tanstack/router-core/ssr/server';
import 'node:async_hooks';
import 'tiny-invariant';
import '@tanstack/react-router/ssr/server';

function RouteComponent() {
  const {
    tvId
  } = Route$1.useParams();
  const [tv, errorMessage, isLoading] = useQueryFetch(`/tv/${tvId}`, `tv-${tvId}`);
  useEffect(() => {
    console.log(tv);
  }, [tv]);
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsx(Spinner, {}) });
  }
  if (errorMessage || !tv) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-red-900/50 border border-red-700 rounded-xl p-8 max-w-md mx-auto", children: /* @__PURE__ */ jsx("div", { className: "text-red-400 text-lg font-semibold", children: errorMessage || "TV Show not found" }) }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105", children: "\u2190 Back to Home" })
    ] }) });
  }
  const firstAirYear = new Date(tv.first_air_date).getFullYear();
  const lastAirYear = tv.last_air_date ? new Date(tv.last_air_date).getFullYear() : "Present";
  const rating = tv.vote_average.toFixed(1);
  const runtime = tv.episode_run_time && tv.episode_run_time.length > 0 ? `${tv.episode_run_time[0]} min/episode` : "N/A";
  const yearRange = firstAirYear === lastAirYear ? firstAirYear.toString() : `${firstAirYear}-${lastAirYear}`;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-[70vh] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: tv.backdrop_path ? `https://images.tmdb.org/t/p/original/${tv.backdrop_path}` : "https://via.placeholder.com/1920x1080/1f2937/9ca3af?text=No+Image", alt: tv.name, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-8 left-8 z-10", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center space-x-2 px-4 py-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }),
        /* @__PURE__ */ jsx("span", { className: "font-body", children: "Back to Home" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-8 right-8 z-10", children: /* @__PURE__ */ jsx("div", { className: "bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm", children: "\u{1F4FA} TV Series" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-8 z-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-end space-y-6 lg:space-y-0 lg:space-x-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("img", { src: tv.poster_path ? `https://images.tmdb.org/t/p/w500/${tv.poster_path}` : "https://via.placeholder.com/300x450/1f2937/9ca3af?text=No+Image", alt: tv.name, className: "w-64 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-4 text-center lg:text-left", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-6xl font-bold text-white leading-tight", children: tv.name }),
            tv.original_name !== tv.name && /* @__PURE__ */ jsxs("p", { className: "font-body text-xl text-gray-300 italic", children: [
              "Original: ",
              tv.original_name
            ] }),
            tv.tagline && /* @__PURE__ */ jsxs("p", { className: "font-body text-lg text-pink-400 italic font-medium", children: [
              '"',
              tv.tagline,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center lg:justify-start gap-4 text-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full", children: [
              /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "\u2B50" }),
              /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: rating }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "/10" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-white", children: yearRange }),
            /* @__PURE__ */ jsxs("div", { className: "bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-white", children: [
              tv.number_of_seasons,
              " Season",
              tv.number_of_seasons !== 1 ? "s" : ""
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-white", children: [
              tv.number_of_episodes,
              " Episodes"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-white", children: runtime })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center lg:justify-start gap-2", children: tv.genres.map((genre) => /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold", children: genre.name }, genre.id)) })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-8 py-12 space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-bold text-white mb-6", children: "Overview" }),
            /* @__PURE__ */ jsx("p", { className: "font-body text-gray-300 text-lg leading-relaxed", children: tv.overview || "No overview available for this TV series." })
          ] }),
          tv.created_by && tv.created_by.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-white mb-6", children: "Created By" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: tv.created_by.map((creator) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 bg-gray-800/50 rounded-xl p-4", children: [
              /* @__PURE__ */ jsx("img", { src: creator.profile_path ? `https://images.tmdb.org/t/p/w185/${creator.profile_path}` : "https://via.placeholder.com/64x64/1f2937/9ca3af?text=?", alt: creator.name, className: "w-16 h-16 rounded-full object-cover" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-body text-white font-semibold", children: creator.name }),
                /* @__PURE__ */ jsx("p", { className: "font-body text-gray-400 text-sm", children: "Creator" })
              ] })
            ] }, creator.id)) })
          ] }),
          tv.networks && tv.networks.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-white mb-6", children: "Networks" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4", children: tv.networks.map((network) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-xl p-4 flex items-center space-x-3", children: [
              network.logo_path && /* @__PURE__ */ jsx("img", { src: `https://images.tmdb.org/t/p/w92/${network.logo_path}`, alt: network.name, className: "h-8 object-contain" }),
              /* @__PURE__ */ jsx("span", { className: "font-body text-white font-semibold", children: network.name })
            ] }, network.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white mb-4", children: "Details" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-2 border-b border-gray-700", children: [
                /* @__PURE__ */ jsx("span", { className: "font-body text-gray-400", children: "Status" }),
                /* @__PURE__ */ jsx("span", { className: "font-body text-white font-semibold", children: tv.status })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-2 border-b border-gray-700", children: [
                /* @__PURE__ */ jsx("span", { className: "font-body text-gray-400", children: "Type" }),
                /* @__PURE__ */ jsx("span", { className: "font-body text-white font-semibold", children: tv.type })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-2 border-b border-gray-700", children: [
                /* @__PURE__ */ jsx("span", { className: "font-body text-gray-400", children: "Language" }),
                /* @__PURE__ */ jsx("span", { className: "font-body text-white font-semibold uppercase", children: tv.original_language })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-2 border-b border-gray-700", children: [
                /* @__PURE__ */ jsx("span", { className: "font-body text-gray-400", children: "First Air Date" }),
                /* @__PURE__ */ jsx("span", { className: "font-body text-white font-semibold", children: new Date(tv.first_air_date).toLocaleDateString() })
              ] }),
              tv.last_air_date && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-2 border-b border-gray-700", children: [
                /* @__PURE__ */ jsx("span", { className: "font-body text-gray-400", children: "Last Air Date" }),
                /* @__PURE__ */ jsx("span", { className: "font-body text-white font-semibold", children: new Date(tv.last_air_date).toLocaleDateString() })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-2", children: [
                /* @__PURE__ */ jsx("span", { className: "font-body text-gray-400", children: "Popularity" }),
                /* @__PURE__ */ jsx("span", { className: "font-body text-white font-semibold", children: tv.popularity.toFixed(1) })
              ] })
            ] })
          ] }),
          tv.production_companies && tv.production_companies.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white mb-4", children: "Production" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: tv.production_companies.map((company) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              company.logo_path && /* @__PURE__ */ jsx("img", { src: `https://images.tmdb.org/t/p/w92/${company.logo_path}`, alt: company.name, className: "h-8 object-contain" }),
              /* @__PURE__ */ jsx("span", { className: "font-body text-gray-300 text-sm", children: company.name })
            ] }, company.id)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white mb-4", children: "Links" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              tv.homepage && /* @__PURE__ */ jsxs("a", { href: tv.homepage, target: "_blank", rel: "noopener noreferrer", className: "flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) }),
                /* @__PURE__ */ jsx("span", { className: "font-body text-sm", children: "Official Website" })
              ] }),
              /* @__PURE__ */ jsxs("a", { href: `https://www.imdb.com/title/${tv.id}`, target: "_blank", rel: "noopener noreferrer", className: "flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) }),
                /* @__PURE__ */ jsx("span", { className: "font-body text-sm", children: "View on IMDb" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      tv.seasons && tv.seasons.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-bold text-white mb-8", children: "Seasons" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: tv.seasons.filter((season) => season.season_number > 0).map((season) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/70 transition-all duration-300", children: [
          /* @__PURE__ */ jsx("img", { src: season.poster_path ? `https://images.tmdb.org/t/p/w300/${season.poster_path}` : "https://via.placeholder.com/300x450/1f2937/9ca3af?text=No+Image", alt: season.name, className: "w-full h-48 object-cover rounded-lg mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold text-white mb-2", children: season.name }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
            /* @__PURE__ */ jsxs("p", { className: "font-body text-gray-300", children: [
              season.episode_count,
              " Episode",
              season.episode_count !== 1 ? "s" : ""
            ] }),
            season.air_date && /* @__PURE__ */ jsx("p", { className: "font-body text-gray-400", children: new Date(season.air_date).getFullYear() })
          ] }),
          season.overview && /* @__PURE__ */ jsx("p", { className: "font-body text-gray-400 text-xs mt-2 line-clamp-3", children: season.overview })
        ] }, season.id)) })
      ] })
    ] })
  ] });
}

export { RouteComponent as component };
//# sourceMappingURL=tv._tvId-Dx2hiEjL.mjs.map
