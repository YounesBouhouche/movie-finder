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
      className={`bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer border-2 ${
        isSelected ? 'border-pink-500 bg-gray-800/70' : 'border-transparent'
      }`}
      onClick={onSelect}
    >
      <img
        src={season.poster_path ? `https://images.tmdb.org/t/p/w300/${season.poster_path}` : 'https://via.placeholder.com/300x450/1f2937/9ca3af?text=No+Image'}
        alt={season.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="font-display text-lg font-bold text-white mb-2">{season.name}</h3>
      <div className="space-y-1 text-sm">
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
        <p className="font-body text-gray-400 text-xs mt-2 line-clamp-3">
          {season.overview}
        </p>
      )}
      {isSelected && (
        <div className="mt-3 flex items-center space-x-2 text-pink-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold">Selected</span>
        </div>
      )}
    </div>
  );
}
