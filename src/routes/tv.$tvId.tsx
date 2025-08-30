import { createFileRoute, Link } from '@tanstack/react-router'
import Spinner from '../components/Spinner';
import VideoSection from '../components/VideoSection';
import SeasonsSection from '../components/SeasonsSection';
import { useEffect, useState } from 'react';
import useQueryFetch from '../hooks/useQueryFetch';
import type Video from '../types/Video';
import useFetch from '../hooks/useFetch';
import type Season from '../types/Season';

// Extended TV interface for detailed TV show data
interface DetailedTV {
  id: string;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  last_air_date: string;
  vote_average: number;
  vote_count: number;
  genres: { id: number; name: string }[];
  production_companies: { id: number; name: string; logo_path: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  spoken_languages: { iso_639_1: string; name: string }[];
  tagline: string;
  status: string;
  type: string;
  original_language: string;
  popularity: number;
  adult: boolean;
  homepage: string;
  number_of_episodes: number;
  number_of_seasons: number;
  episode_run_time: number[];
  networks: { id: number; name: string; logo_path: string }[];
  created_by: { id: number; name: string; profile_path: string }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
  }[];
}

export const Route = createFileRoute('/tv/$tvId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { tvId } = Route.useParams()
  const [tv, errorMessage, isLoading] = useQueryFetch<DetailedTV>(`/tv/${tvId}`, `tv-${tvId}`);
  const [videos, videosErrorMessage, videosLoading] = useQueryFetch<Video[]>(`/tv/${tvId}/videos`, `tv-${tvId}-videos`, (data) => data.results || []);
  const [selectedSeason, setSelectedSeason] = useState<number|null>(null)
  const [season, seasonError, seasonLoading] = useFetch<Season>(`tv/${tvId}/season/${(selectedSeason || 0) + 1}`, undefined, [selectedSeason])
  
  useEffect(() => {
    setSelectedSeason(0)
  }, [tv])

  useEffect(() => {
    console.log(season);
  }, [season])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (errorMessage || !tv) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="bg-red-900/50 border border-red-700 rounded-xl p-8 max-w-md mx-auto">
            <div className="text-red-400 text-lg font-semibold">
              {errorMessage || 'TV Show not found'}
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const firstAirYear = new Date(tv.first_air_date).getFullYear();
  const lastAirYear = tv.last_air_date ? new Date(tv.last_air_date).getFullYear() : 'Present';
  const rating = tv.vote_average.toFixed(1);
  const runtime = tv.episode_run_time && tv.episode_run_time.length > 0 ? `${tv.episode_run_time[0]} min/episode` : 'N/A';
  const yearRange = firstAirYear === lastAirYear ? firstAirYear.toString() : `${firstAirYear}-${lastAirYear}`;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Backdrop */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Backdrop Image */}
        <div className="absolute inset-0">
          <img
            src={tv.backdrop_path ? `https://images.tmdb.org/t/p/original/${tv.backdrop_path}` : 'https://via.placeholder.com/1920x1080/1f2937/9ca3af?text=No+Image'}
            alt={tv.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        </div>

        {/* Back Button */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-body text-sm sm:text-base">Back</span>
          </Link>
        </div>

        {/* TV Show Badge */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10">
          <div className="bg-pink-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm">
            📺 <span className="hidden sm:inline">TV Series</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 z-10">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-4 lg:space-y-0 lg:space-x-8">
              {/* Poster */}
              <div className="flex-shrink-0">
                <img
                  src={tv.poster_path ? `https://images.tmdb.org/t/p/w500/${tv.poster_path}` : 'https://via.placeholder.com/300x450/1f2937/9ca3af?text=No+Image'}
                  alt={tv.name}
                  className="w-32 h-48 sm:w-48 sm:h-72 lg:w-64 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-white/20"
                />
              </div>

              {/* Details */}
              <div className="flex-1 space-y-3 sm:space-y-4 text-center lg:text-left">
                <div className="space-y-1 sm:space-y-2">
                  <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
                    {tv.name}
                  </h1>
                  {tv.original_name !== tv.name && (
                    <p className="font-body text-lg sm:text-xl text-gray-300 italic">
                      Original: {tv.original_name}
                    </p>
                  )}
                  {tv.tagline && (
                    <p className="font-body text-base sm:text-lg text-pink-400 italic font-medium">
                      "{tv.tagline}"
                    </p>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-sm sm:text-lg">
                  <div className="flex items-center space-x-1 sm:space-x-2 bg-black/40 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-white font-bold">{rating}</span>
                    <span className="text-gray-300">/10</span>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full text-white">
                    {yearRange}
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full text-white">
                    {tv.number_of_seasons} Season{tv.number_of_seasons !== 1 ? 's' : ''}
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full text-white">
                    {tv.number_of_episodes} Episodes
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full text-white">
                    {runtime}
                  </div>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-1 sm:gap-2">
                  {tv.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12">
        {/* Overview and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Overview */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Overview</h2>
              <p className="font-body text-gray-300 text-base sm:text-lg leading-relaxed">
                {tv.overview || 'No overview available for this TV series.'}
              </p>
            </div>

            {/* Creators */}
            {tv.created_by && tv.created_by.length > 0 && (
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Created By</h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {tv.created_by.map((creator) => (
                    <div key={creator.id} className="flex items-center space-x-3 sm:space-x-4 bg-gray-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <img
                        src={creator.profile_path ? `https://images.tmdb.org/t/p/w185/${creator.profile_path}` : 'https://via.placeholder.com/64x64/1f2937/9ca3af?text=?'}
                        alt={creator.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-body text-white font-semibold text-sm sm:text-base">{creator.name}</h4>
                        <p className="font-body text-gray-400 text-xs sm:text-sm">Creator</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Networks */}
            {tv.networks && tv.networks.length > 0 && (
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Networks</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {tv.networks.map((network) => (
                    <div key={network.id} className="bg-gray-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3">
                      {network.logo_path && (
                        <img
                          src={`https://images.tmdb.org/t/p/w92/${network.logo_path}`}
                          alt={network.name}
                          className="h-8 object-contain"
                        />
                      )}
                      <span className="font-body text-white font-semibold">{network.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Details */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
              <h3 className="font-display text-xl font-bold text-white mb-4">Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="font-body text-gray-400">Status</span>
                  <span className="font-body text-white font-semibold">{tv.status}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="font-body text-gray-400">Type</span>
                  <span className="font-body text-white font-semibold">{tv.type}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="font-body text-gray-400">Language</span>
                  <span className="font-body text-white font-semibold uppercase">{tv.original_language}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="font-body text-gray-400">First Air Date</span>
                  <span className="font-body text-white font-semibold">
                    {new Date(tv.first_air_date).toLocaleDateString()}
                  </span>
                </div>
                {tv.last_air_date && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="font-body text-gray-400">Last Air Date</span>
                    <span className="font-body text-white font-semibold">
                      {new Date(tv.last_air_date).toLocaleDateString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center py-2">
                  <span className="font-body text-gray-400">Popularity</span>
                  <span className="font-body text-white font-semibold">{tv.popularity.toFixed(1)}</span>
                </div>
              </div>
            </div>

            {/* Production Companies */}
            {tv.production_companies && tv.production_companies.length > 0 && (
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h3 className="font-display text-xl font-bold text-white mb-4">Production</h3>
                <div className="space-y-3">
                  {tv.production_companies.map((company) => (
                    <div key={company.id} className="flex items-center space-x-3">
                      {company.logo_path && (
                        <img
                          src={`https://images.tmdb.org/t/p/w92/${company.logo_path}`}
                          alt={company.name}
                          className="h-8 object-contain"
                        />
                      )}
                      <span className="font-body text-gray-300 text-sm">{company.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* External Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
              <h3 className="font-display text-xl font-bold text-white mb-4">Links</h3>
              <div className="space-y-3">
                {tv.homepage && (
                  <a
                    href={tv.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="font-body text-sm">Official Website</span>
                  </a>
                )}
                <a
                  href={`https://www.imdb.com/title/${tv.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="font-body text-sm">View on IMDb</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <VideoSection 
          videos={videos || []}
          videosLoading={videosLoading}
          videosErrorMessage={videosErrorMessage}
          tvName={tv.name}
        />

        {/* Seasons Section */}
        <SeasonsSection
          seasons={tv.seasons}
          selectedSeason={selectedSeason}
          setSelectedSeason={setSelectedSeason}
          season={season}
          seasonLoading={seasonLoading}
          seasonError={seasonError}
        />
      </div>
    </div>
  );
}
