import SeasonCard from './SeasonCard';
import SeasonDetails from './SeasonDetails';
import type Season from '../types/Season';

interface SeasonItem {
  id: number;
  air_date: string;
  episode_count: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

interface SeasonsSectionProps {
  seasons: SeasonItem[];
  selectedSeason: number | null;
  setSelectedSeason: (seasonIndex: number) => void;
  season: Season | null;
  seasonLoading: boolean;
  seasonError: string | null;
}

export default function SeasonsSection({ 
  seasons, 
  selectedSeason, 
  setSelectedSeason, 
  season, 
  seasonLoading, 
  seasonError 
}: SeasonsSectionProps) {
  const validSeasons = seasons.filter(season => season.season_number > 0);

  if (!validSeasons || validSeasons.length === 0) {
    return null;
  }

  return (
    <>
      {/* Seasons Grid */}
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
        <h2 className="font-display text-3xl font-bold text-white mb-8">Seasons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {validSeasons.map((seasonItem, index) => (
            <SeasonCard
              key={seasonItem.id}
              season={seasonItem}
              isSelected={selectedSeason === index}
              onSelect={() => setSelectedSeason(index)}
            />
          ))}
        </div>
      </div>

      {/* Selected Season Details */}
      {selectedSeason !== null && (
        <SeasonDetails 
          season={season}
          seasonLoading={seasonLoading}
          seasonError={seasonError}
        />
      )}
    </>
  );
}
