import Spinner from './Spinner';
import EpisodeCard from './EpisodeCard';
import type Season from '../types/Season';

interface SeasonDetailsProps {
  season: Season | null;
  seasonLoading: boolean;
  seasonError: string | null;
}

export default function SeasonDetails({ season, seasonLoading, seasonError }: SeasonDetailsProps) {
  if (!season && !seasonLoading) {
    return null;
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800">
      <div className="mb-6 sm:mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center space-x-2 sm:space-x-3">
          <span className="w-2 h-6 sm:h-8 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full"></span>
          <span>Season Details</span>
        </h2>
      </div>

      {seasonError ? (
        <div className="text-center py-6 sm:py-8">
          <div className="bg-red-900/50 border border-red-700 rounded-lg sm:rounded-xl p-4 sm:p-6 max-w-md mx-auto">
            <div className="text-red-400 font-semibold text-sm sm:text-base">
              Failed to load season details
            </div>
          </div>
        </div>
      ) : seasonLoading ? (
        <div className="flex items-center space-x-2 text-gray-400 justify-center py-6">
          <Spinner />
          <span className="text-sm sm:text-base">Loading season details...</span>
        </div>
      ) : season ? (
        <div className="space-y-6 sm:space-y-8">
          {/* Season Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{season.name}</h3>
                {season.overview && (
                  <p className="font-body text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    {season.overview}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Air Date:</span>
                    <span className="text-white font-semibold">
                      {season.air_date ? new Date(season.air_date).toLocaleDateString() : 'TBA'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Episodes:</span>
                    <span className="text-white font-semibold">{season.episodes?.length || 0}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              {season.poster_path && (
                <img
                  src={`https://images.tmdb.org/t/p/w300/${season.poster_path}`}
                  alt={season.name}
                  className="w-48 h-72 object-cover rounded-xl shadow-lg"
                />
              )}
            </div>
          </div>

          {/* Episodes List */}
          {season.episodes && season.episodes.length > 0 && (
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-6">Episodes</h3>
              <div className="space-y-4">
                {season.episodes.map((episode) => (
                  <EpisodeCard key={episode.id} episode={episode} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
