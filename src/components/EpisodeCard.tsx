import type { Episode } from '../types/Episode';

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Episode Still */}
        <div className="lg:col-span-1">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={episode.still_path ? `https://images.tmdb.org/t/p/w300/${episode.still_path}` : 'https://via.placeholder.com/300x169/1f2937/9ca3af?text=No+Image'}
              alt={episode.name}
              className="w-full h-full object-cover"
            />
            {/* Episode Number Badge */}
            <div className="absolute top-2 left-2 bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold">
              EP {episode.episode_number}
            </div>
            {/* Rating Badge */}
            {episode.vote_average > 0 && (
              <div className="absolute top-2 right-2 bg-yellow-300 text-black px-2 py-1 rounded-full text-xs font-bold">
                ⭐ {episode.vote_average.toFixed(1)}
              </div>
            )}
          </div>
        </div>

        {/* Episode Details */}
        <div className="lg:col-span-3 space-y-3">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
            <h4 className="font-display text-xl font-bold text-white">
              {episode.episode_number}. {episode.name}
            </h4>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              {episode.air_date && (
                <span>{new Date(episode.air_date).toLocaleDateString()}</span>
              )}
              {episode.runtime && (
                <span>{episode.runtime} min</span>
              )}
            </div>
          </div>

          {episode.overview && (
            <p className="font-body text-gray-300 leading-relaxed">
              {episode.overview}
            </p>
          )}

          {/* Episode Stats */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-700">
            <div className="flex items-center space-x-4">
              {episode.vote_average > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white font-semibold">{episode.vote_average.toFixed(1)}</span>
                  <span className="text-gray-400 text-sm">({episode.vote_count} votes)</span>
                </div>
              )}
              {episode.production_code && (
                <div className="text-sm text-gray-400">
                  Production: {episode.production_code}
                </div>
              )}
            </div>
            
            {/* Episode Type Badge */}
            {episode.episode_type && episode.episode_type !== 'standard' && (
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium uppercase">
                {episode.episode_type}
              </span>
            )}
          </div>

          {/* Crew Information (if available) */}
          {episode.crew && episode.crew.length > 0 && (
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {episode.crew
                  .filter((member: any) => member.job === 'Director' || member.job === 'Writer')
                  .slice(0, 3)
                  .map((member: any, index: number) => (
                  <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    {member.job}: {member.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
