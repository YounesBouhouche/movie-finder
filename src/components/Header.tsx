import { Search } from "./Search";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  return (
    <header className="relative text-center space-y-12 mb-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-96 h-96 border border-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute w-72 h-72 border border-pink-500/20 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute w-48 h-48 border border-blue-500/20 rounded-full animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative space-y-6">
        {/* Hero badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium backdrop-blur-sm">
          <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Discover Amazing Movies
        </div>
        
        {/* Main title with enhanced styling */}
        <div className="space-y-4">
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x leading-tight">
            Find{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                Movies
              </span>
              {/* Underline decoration */}
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <div className="space-y-3">
            <p className="font-body text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">enjoy</span> Without the Hassle
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <span>Live</span>
              </div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span>Powered by TMDB</span>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span>Millions of Movies</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced search section */}
      <div className="relative space-y-4">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        
        {/* Search suggestions/stats */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-gray-500">Popular searches:</span>
          {['Action', 'Comedy', 'Drama', 'Sci-Fi'].map((genre) => (
            <button 
              key={genre}
              onClick={() => setSearchQuery(genre)}
              className="px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-full text-gray-300 hover:text-white transition-all duration-200 text-xs"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="flex items-center justify-center space-x-4 pt-8">
        <div className="w-20 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        <div className="w-20 h-px bg-gradient-to-l from-transparent to-pink-500"></div>
      </div>
    </header>
  );
};
