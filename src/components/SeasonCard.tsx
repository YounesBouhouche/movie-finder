interface SeasonItem {
  id: number;
  air_date: string;
  episode_count: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

interface SeasonCardProps {
  season: SeasonItem;
  isSelected: boolean;
  onSelect: () => void;
}

export default function SeasonCard({ season, isSelected, onSelect }: SeasonCardProps) {
  return (
    <div 
      className={`bg-gray-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer border-2 ${
        isSelected ? 'border-pink-500 bg-gray-800/70' : 'border-transparent'
      }`}
      onClick={onSelect}
    >
      <img
        src={season.poster_path ? `https://images.tmdb.org/t/p/w300/${season.poster_path}` : 'https://via.placeholder.com/300x450/1f2937/9ca3af?text=No+Image'}
        alt={season.name}
        className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-md sm:rounded-lg mb-2 sm:mb-3 lg:mb-4"
      />
      <h3 className="font-display text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2 line-clamp-2">{season.name}</h3>
      <div className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
        <p className="font-body text-gray-300">
          {season.episode_count} Episode{season.episode_count !== 1 ? 's' : ''}
        </p>
        {season.air_date && (
          <p className="font-body text-gray-400">
            {new Date(season.air_date).getFullYear()}
          </p>
        )}
      </div>
      {season.overview && (
        <p className="font-body text-gray-400 text-xs mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3 hidden sm:block">
          {season.overview}
        </p>
      )}
      {isSelected && (
        <div className="mt-2 sm:mt-3 flex items-center space-x-1 sm:space-x-2 text-pink-400">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold">Selected</span>
        </div>
      )}
    </div>
  );
}
