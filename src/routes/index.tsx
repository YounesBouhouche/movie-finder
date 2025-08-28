import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { TvCard } from "../components/TvCard";
import { Header } from "../components/Header";
import MovieDialog from "../components/MovieDialog";
import TvDialog from "../components/TvDialog";
import Spinner from "../components/Spinner";
import type { Movie } from "../types/Movie";
import { useDebounce } from "react-use";
import useFetch from '../api/useFetch';
import type TV from '../types/Tv';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movie, setMovie] = useState<Movie|null>(null);
  const [tv, setTv] = useState<TV|null>(null);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useDebounce(() => {
    setDebouncedQuery(searchQuery);
  }, 500, [searchQuery]);

  const moviesEndpoint = 
    debouncedQuery ? `/search/movie?query=${encodeURIComponent(debouncedQuery)}`
      : `/discover/movie?sort_by=popularity.desc`;

  const tvsEndpoint = 
    debouncedQuery ? `/search/tv?query=${encodeURIComponent(debouncedQuery)}`
      : `/discover/tv?sort_by=popularity.desc`;

  const [moviesList, moviesError, moviesLoading] = useFetch<Movie[]>(moviesEndpoint, (data) => data.results, [debouncedQuery]);
  const movies = moviesList || [];

  const [tvsList, tvsError, tvsLoading] = useFetch<TV[]>(tvsEndpoint, (data) => data.results, [debouncedQuery]);
  const tvs = tvsList || [];

  return (
    <>
      {/* Animated background pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <section className="space-y-8">
          <div className="flex items-center justify-between bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <h2 className="font-display text-4xl font-bold text-white flex items-center space-x-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  <span>{searchQuery ? `Results for "${searchQuery}"` : 'Trending Movies'}</span>
                </h2>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-xs text-gray-300 hover:text-white transition-all duration-200"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-lg font-medium">
                <span className="text-purple-400 font-bold">{movies.length}</span> movies found
              </div>
              {/* Filter/sort options could go here */}
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {moviesLoading ? (
            <div className="flex justify-center items-center py-20">
              <Spinner />
            </div>
          ) : moviesError ? (
            <div className="text-center py-20">
              <div className="bg-red-900/50 border border-red-700 rounded-xl p-8 max-w-md mx-auto">
                <div className="text-red-400 text-lg font-semibold">
                  {moviesError}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {movies.map((element) => (
                <MovieCard key={element.id} movie={element} onClick={() => setMovie(element)} />
              ))}
            </div>
          )}
        </section>

        {/* TV Shows Section */}
        <section className="space-y-8 mt-16">
          <div className="flex items-center justify-between bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <h2 className="font-display text-4xl font-bold text-white flex items-center space-x-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full"></span>
                  <span>{searchQuery ? `TV Shows for "${searchQuery}"` : 'Popular TV Shows'}</span>
                </h2>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-xs text-gray-300 hover:text-white transition-all duration-200"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-lg font-medium">
                <span className="text-pink-400 font-bold">{tvs.length}</span> shows found
              </div>
              {/* Filter/sort options could go here */}
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {tvsLoading ? (
            <div className="flex justify-center items-center py-20">
              <Spinner />
            </div>
          ) : tvsError ? (
            <div className="text-center py-20">
              <div className="bg-red-900/50 border border-red-700 rounded-xl p-8 max-w-md mx-auto">
                <div className="text-red-400 text-lg font-semibold">
                  {tvsError}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {tvs.map((element) => (
                <TvCard key={element.id} tv={element} onClick={() => setTv(element)} />
              ))}
            </div>
          )}
        </section>
      </div>
      { movie && <MovieDialog movie={movie} onClose={() => setMovie(null)} />}
      { tv && <TvDialog tv={tv} onClose={() => setTv(null)} />}


    </>
  );
}
