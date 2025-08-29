import type Video from '../types/Video';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="relative aspect-video overflow-hidden">
        {/* YouTube Thumbnail */}
        <img
          src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}
          alt={video.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            // Fallback to medium quality thumbnail if maxres doesn't exist
            e.currentTarget.src = `https://img.youtube.com/vi/${video.key}/mqdefault.jpg`;
          }}
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.key}`, '_blank')}
            className="w-16 h-16 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </button>
        </div>
        
        {/* Video Type Badge */}
        <div className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {video.type}
        </div>
        
        {/* Duration/Quality Badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
          {video.size}p
        </div>
      </div>
      
      {/* Video Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-display text-lg font-bold text-white group-hover:text-pink-400 transition-colors duration-300 line-clamp-2">
          {video.name}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l2 1z" />
            </svg>
            <span>YouTube</span>
          </span>
          <span className="text-xs">
            {new Date(video.published_at).toLocaleDateString()}
          </span>
        </div>
        {video.official && (
          <div className="flex items-center space-x-1 text-xs text-green-400">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Official</span>
          </div>
        )}
      </div>
    </div>
  );
}
