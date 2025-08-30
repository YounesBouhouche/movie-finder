import type { Movie } from "../types/Movie";
import { useEffect } from "react";

export default function MovieDialog(
  { movie, onClose }: { movie: Movie, onClose: () => void }
) {
  // Handle escape key to close dialog
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const releaseYear = new Date(movie.release_date).getFullYear();
  const rating = movie.vote_average.toFixed(1);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Movie Poster */}
          <div className="lg:w-1/3 relative">
            <div className="aspect-[2/3] h-48 sm:h-64 lg:aspect-auto lg:h-[600px] relative overflow-hidden">
              <img
                src={movie.poster_path ? `https://images.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x750/1f2937/9ca3af?text=No+Image'}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Movie Details */}
          <div className="lg:w-2/3 p-3 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 overflow-y-auto max-h-[600px]">
            {/* Header */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                <div className="space-y-2">
                  <h1 className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                    {movie.title}
                  </h1>
                  <div className="font-body flex items-center space-x-3 sm:space-x-4 text-gray-300">
                    <span className="text-base sm:text-lg font-semibold">{releaseYear}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span className="uppercase text-xs sm:text-sm tracking-wider">{movie.original_language}</span>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex flex-col items-start sm:items-center space-y-1">
                  <div className="flex items-center space-x-2 bg-yellow-500 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-base sm:text-lg">{rating}</span>
                  </div>
                  <span className="text-xs text-gray-400">TMDB Score</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2 sm:space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-white flex items-center space-x-2">
                <span className="w-1 h-4 sm:h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                <span>Overview</span>
              </h2>
              <p className="font-body text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                {movie.overview || "No description available for this movie."}
              </p>
            </div>

            {/* Movie Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
                <div className="text-sm text-gray-400 uppercase tracking-wider">Release Date</div>
                <div className="text-white font-semibold">{new Date(movie.release_date).toLocaleDateString()}</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
                <div className="text-sm text-gray-400 uppercase tracking-wider">Language</div>
                <div className="text-white font-semibold uppercase">{movie.original_language}</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 space-y-2 col-span-2 lg:col-span-1">
                <div className="text-sm text-gray-400 uppercase tracking-wider">Rating</div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(movie.vote_average / 2) ? 'text-yellow-400' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-semibold">{rating}/10</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base">Watch Trailer</span>
              </button>
              
              <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm sm:text-base">Add to Favorites</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}