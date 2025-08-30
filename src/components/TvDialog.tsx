import { useEffect } from 'react';
import type TV from '../types/Tv';

interface TvDialogProps {
  tv: TV;
  onClose: () => void;
}

const TvDialog = ({ tv, onClose }: TvDialogProps) => {
  // Close dialog on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Close dialog when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFullDetails = () => {
    window.location.href = `/tv/${tv.id}`;
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700 animate-slideUp">
        {/* Header with backdrop */}
        <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
          <img 
            src={tv.backdrop_path ? `https://images.tmdb.org/t/p/w1280/${tv.backdrop_path}` : `https://images.tmdb.org/t/p/w500/${tv.poster_path}`} 
            alt={tv.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white hover:text-pink-400 transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* TV Show Badge */}
          <div className="absolute top-4 left-4 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
            📺 TV Series
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
            {/* Poster */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start">
              <img 
                src={tv.poster_path ? `https://images.tmdb.org/t/p/w300/${tv.poster_path}` : 'https://via.placeholder.com/300x450/1f2937/9ca3af?text=No+Image'} 
                alt={tv.name}
                className="w-32 h-48 sm:w-40 sm:h-60 lg:w-48 lg:h-72 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              <div>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">{tv.name}</h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-bold text-yellow-400">{tv.vote_average.toFixed(1)}</span>
                    <span>/10</span>
                  </div>
                  <span className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span className="bg-gray-800 px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider">
                    {tv.original_language}
                  </span>
                  <span className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span className="text-pink-400 font-semibold text-xs sm:text-sm">
                    First Aired: {new Date(tv.first_air_date).getFullYear()}
                  </span>
                </div>
              </div>

              {/* Rating visualization */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-gray-400">Audience Score</span>
                  <span className="font-body text-sm text-gray-300">{Math.round(tv.vote_average * 10)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${tv.vote_average * 10}%` }}
                  ></div>
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold text-white">Overview</h3>
                <p className="font-body text-gray-300 leading-relaxed">
                  {tv.overview || "No overview available for this TV series."}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-3 sm:pt-4">
                <button
                  onClick={handleFullDetails}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-sm sm:text-base">View Full Details</span>
                  </div>
                </button>
                
                <button 
                  onClick={onClose}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
                >
                  <span className="text-sm sm:text-base">Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvDialog;
