import { Search } from "./Search";

interface TvHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const TvHeader = ({ searchQuery, setSearchQuery }: TvHeaderProps) => {
  return (
    <header className="relative text-center space-y-12 mb-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-96 h-96 border border-pink-500/30 rounded-full animate-pulse"></div>
        <div className="absolute w-72 h-72 border border-rose-500/20 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute w-48 h-48 border border-purple-500/20 rounded-full animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative space-y-6">
        {/* Hero badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-900/50 to-rose-900/50 border border-pink-500/30 rounded-full text-sm text-pink-300 font-medium backdrop-blur-sm">
          <svg className="w-4 h-4 mr-2 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
          Explore Amazing TV Shows
        </div>
        
        {/* Main title with enhanced styling */}
        <div className="space-y-4">
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 animate-gradient-x leading-tight">
            Discover{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
                Series
              </span>
              {/* Underline decoration */}
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <div className="space-y-3">
            <p className="font-body text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Binge-worthy <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">entertainment</span> at your fingertips
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <span>Live</span>
              </div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <span className="font-body">Powered by</span>
                <span className="font-semibold text-pink-400">TMDB</span>
              </a>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span>Thousands of TV Shows</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced search section */}
      <div className="relative space-y-4">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="Search for TV shows, series, documentaries..."/>
        
        {/* Search suggestions/stats */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-gray-500">Popular TV genres:</span>
          {['Drama', 'Comedy', 'Crime', 'Animation', 'Reality'].map((genre) => (
            <button 
              key={genre}
              onClick={() => setSearchQuery(genre)}
              className="px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-pink-600 rounded-full text-gray-300 hover:text-pink-300 transition-all duration-200 text-xs"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="flex items-center justify-center space-x-4 pt-8">
        <div className="w-20 h-px bg-gradient-to-r from-transparent to-pink-500"></div>
        <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
        <div className="w-20 h-px bg-gradient-to-l from-transparent to-rose-500"></div>
      </div>
    </header>
  );
};
