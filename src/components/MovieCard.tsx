import type { Movie } from "../types/Movie";

interface CardProps {
  movie: Movie,
  onClick: () => void
}

export const MovieCard = ({movie, onClick}: CardProps) => {
  const handleFullDetails = () => {
    window.location.href = `/movie/${movie.id}`;
  };

  return (
    <div key={movie.id} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 border border-gray-800 hover:border-purple-500/50">
      <div className="relative overflow-hidden">
        <img 
          src={movie.poster_path ? `https://images.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x750/1f2937/9ca3af?text=No+Image'} 
          alt={movie.title}
          className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          ⭐ {movie.vote_average.toFixed(1)}
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <h3 className="font-display text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-400 font-body">
          <span className="bg-gray-800 px-3 py-1 rounded-full uppercase tracking-wider">
            {movie.original_language}
          </span>
          <span className="text-purple-400 font-semibold">
            {new Date(movie.release_date).getFullYear()}
          </span>
        </div>
        
        {/* Hover overlay with additional info */}
        <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6">
          <div className="text-center space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="font-display text-2xl font-bold text-white">{movie.title}</h4>
            <p className="font-body text-gray-300 text-sm line-clamp-3 max-w-sm">{movie.overview || "No description available"}</p>
            <div className="font-body flex items-center justify-center space-x-4 text-sm text-gray-300">
              <span className="flex items-center space-x-1">
                <span>⭐</span>
                <span>{movie.vote_average.toFixed(1)}</span>
              </span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="uppercase">{movie.original_language}</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>{new Date(movie.release_date).getFullYear()}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button onClick={onClick} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer text-sm">
                Quick View
              </button>
              <button
                onClick={handleFullDetails}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
              >
                Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}