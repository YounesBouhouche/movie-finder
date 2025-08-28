import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

// Extended Movie interface for detailed movie data
interface DetailedMovie {
  id: string;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  genres: { id: number; name: string }[];
  production_companies: { id: number; name: string; logo_path: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  spoken_languages: { iso_639_1: string; name: string }[];
  budget: number;
  revenue: number;
  tagline: string;
  status: string;
  original_language: string;
  popularity: number;
  adult: boolean;
  homepage: string;
}

export const Route = createFileRoute('/movie/$movieId')({
  component: RouteComponent,
})

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

function RouteComponent() {
  const [movie, setMovie] = useState<DetailedMovie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { movieId } = Route.useParams()

  const fetchMovie = async () => {
    setIsLoading(true);
    try {
      const endpoint = `${API_BASE_URL}/movie/${movieId}`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok)
        throw new Error('Failed to fetch movie');

      const data = await response.json();
      console.log(data);
      setMovie(data);
      setErrorMessage(null);
    } catch (error) {
      console.log(error);
      setErrorMessage('Error fetching movie, please try again later');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, [movieId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (errorMessage || !movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="bg-red-900/50 border border-red-700 rounded-xl p-8 max-w-md mx-auto">
            <div className="text-red-400 text-lg font-semibold">
              {errorMessage || 'Movie not found'}
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            ← Back to Movies
          </Link>
        </div>
      </div>
    );
  }

  const releaseYear = new Date(movie.release_date).getFullYear();
  const rating = movie.vote_average.toFixed(1);
  const runtime = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`;
  const budget = movie.budget ? `$${(movie.budget / 1000000).toFixed(1)}M` : 'N/A';
  const revenue = movie.revenue ? `$${(movie.revenue / 1000000).toFixed(1)}M` : 'N/A';

  return (
    <div className="min-h-screen">
      {/* Hero Section with Backdrop */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Backdrop Image */}
        <div className="absolute inset-0">
          <img
            src={movie.backdrop_path ? `https://images.tmdb.org/t/p/original/${movie.backdrop_path}` : 'https://via.placeholder.com/1920x1080/1f2937/9ca3af?text=No+Image'}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        </div>

        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-body">Back to Movies</span>
          </Link>
        </div>

        {/* Movie Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-end">
              {/* Poster */}
              <div className="md:col-span-1">
                <div className="relative w-full max-w-sm mx-auto md:mx-0">
                  <img
                    src={movie.poster_path ? `https://images.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x750/1f2937/9ca3af?text=No+Image'}
                    alt={movie.title}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Movie Details */}
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-4">
                  <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight">
                    {movie.title}
                  </h1>
                  {movie.tagline && (
                    <p className="font-body text-xl text-gray-300 italic">
                      "{movie.tagline}"
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-lg">
                    <span className="text-white font-semibold">{releaseYear}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span className="text-gray-300">{runtime}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{rating}</span>
                      </div>
                      <span className="text-gray-400 text-sm">({movie.vote_count.toLocaleString()} votes)</span>
                    </div>
                  </div>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-purple-600/30 border border-purple-500/50 text-purple-200 rounded-full text-sm font-medium"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Watch Trailer</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Add to Favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-white flex items-center space-x-3">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                <span>Overview</span>
              </h2>
              <p className="font-body text-lg text-gray-300 leading-relaxed">
                {movie.overview || "No overview available for this movie."}
              </p>
            </section>

            {/* Production Companies */}
            {movie.production_companies.length > 0 && (
              <section className="space-y-6">
                <h2 className="font-display text-3xl font-bold text-white flex items-center space-x-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  <span>Production</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {movie.production_companies.slice(0, 6).map((company) => (
                    <div key={company.id} className="bg-gray-900/50 rounded-xl p-4 text-center space-y-2">
                      {company.logo_path ? (
                        <img
                          src={`https://images.tmdb.org/t/p/w200/${company.logo_path}`}
                          alt={company.name}
                          className="h-12 mx-auto object-contain filter brightness-0 invert"
                        />
                      ) : (
                        <div className="h-12 flex items-center justify-center">
                          <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
                        </div>
                      )}
                      <p className="font-body text-sm text-gray-300 font-medium">{company.name}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 sticky top-24">
              <h3 className="font-display text-xl font-bold text-white mb-6">Movie Details</h3>
              
              <div className="space-y-4">
                {[
                  { label: 'Status', value: movie.status },
                  { label: 'Original Language', value: movie.spoken_languages[0]?.name || 'Unknown' },
                  { label: 'Budget', value: budget },
                  { label: 'Revenue', value: revenue },
                  { label: 'Runtime', value: runtime },
                  { label: 'Release Date', value: new Date(movie.release_date).toLocaleDateString() }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-b-0">
                    <span className="font-body text-gray-400 text-sm">{item.label}</span>
                    <span className="font-body text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {movie.homepage && (
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <a
                    href={movie.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Official Website</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
