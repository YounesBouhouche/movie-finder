import Spinner from './Spinner';
import VideoCard from './VideoCard';
import type Video from '../types/Video';

interface VideoSectionProps {
  videos: Video[];
  videosLoading: boolean;
  videosErrorMessage: string | null;
  tvName: string;
}

export default function VideoSection({ videos, videosLoading, videosErrorMessage, tvName }: VideoSectionProps) {
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 mb-12">
      <h2 className="font-display text-3xl font-bold text-white mb-8 flex items-center space-x-3">
        <span className="w-2 h-8 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full"></span>
        <span>Videos & Trailers</span>
      </h2>
      
      {videosLoading ? (
        <div className="flex justify-center items-center py-12">
          <Spinner />
        </div>
      ) : videosErrorMessage ? (
        <div className="text-center py-8">
          <div className="bg-red-900/50 border border-red-700 rounded-xl p-6 max-w-md mx-auto">
            <div className="text-red-400 font-semibold">
              Failed to load videos
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos
            .filter(video => video.site === 'YouTube' && (video.type === 'Trailer' || video.type === 'Teaser' || video.type === 'Clip' || video.type === 'Behind the Scenes'))
            .slice(0, 6) // Limit to 6 videos
            .map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
        </div>
      )}
      
      {/* View More Videos Button */}
      {videos.filter(video => video.site === 'YouTube').length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(tvName + ' trailer')}`, '_blank')}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            <span>View More Videos</span>
          </button>
        </div>
      )}
    </div>
  );
}
