import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/$splat')({
  component: NotFoundComponent,
})

function NotFoundComponent() {
  const [glitchText, setGlitchText] = useState('404');
  
  // Create glitch effect for 404 text
  useEffect(() => {
    const glitchChars = ['4', '0', '4', '∆', '◊', '§', '¤', '◦', '●'];
    let glitchInterval: ReturnType<typeof setInterval>;
    
    const startGlitch = () => {
      glitchInterval = setInterval(() => {
        const randomChars = Array.from({ length: 3 }, () => 
          glitchChars[Math.floor(Math.random() * glitchChars.length)]
        ).join('');
        
        setGlitchText(randomChars);
        
        setTimeout(() => setGlitchText('404'), 150);
      }, 2000);
    };
    
    startGlitch();
    
    return () => {
      if (glitchInterval) clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating film elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-gray-600 rounded opacity-30 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-gray-500 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-10 h-10 border border-gray-700 rotate-45 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-purple-500 rounded opacity-50 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
        {/* Main 404 Text with Glitch Effect */}
        <div className="space-y-4">
          <div className="relative">
            <h1 className="font-display text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 leading-none select-none">
              {glitchText}
            </h1>
            {/* Glitch shadows */}
            <div className="absolute inset-0 font-display text-9xl md:text-[12rem] font-black text-red-500 opacity-20 transform translate-x-1 -translate-y-1 animate-pulse">
              {glitchText}
            </div>
            <div className="absolute inset-0 font-display text-9xl md:text-[12rem] font-black text-blue-500 opacity-20 transform -translate-x-1 translate-y-1 animate-pulse" style={{ animationDelay: '0.5s' }}>
              {glitchText}
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Page Not Found
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-6">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-bold text-white">
                  Oops! This page seems to have vanished into the void
                </h3>
                <p className="font-body text-lg text-gray-300 leading-relaxed">
                  The page you're looking for might have been moved, deleted, or maybe it never existed in the first place. 
                  But don't worry—there are plenty of amazing movies waiting to be discovered!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Back to Home</span>
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Learn More</span>
            </Link>
          </div>

          {/* Quick Search */}
          <div className="max-w-md mx-auto">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <p className="font-body text-sm text-gray-400 mb-3 text-center">
                Or try searching for something specific:
              </p>
              <Link
                to="/"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-all duration-200 border border-gray-700 hover:border-gray-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="font-body text-sm">Search Movies</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Fun Suggestions */}
        <div className="pt-8">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/20 max-w-3xl mx-auto">
            <h4 className="font-display text-xl font-bold text-white mb-4">
              While you're here, why not explore:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {[
                { emoji: '🎬', text: 'Popular Movies', search: 'popular' },
                { emoji: '🌟', text: 'Top Rated Films', search: 'top%20rated' },
                { emoji: '🔥', text: 'Trending Now', search: 'trending' },
                { emoji: '🎭', text: 'Classic Cinema', search: 'classic' },
                { emoji: '🚀', text: 'Sci-Fi Adventures', search: 'sci-fi' },
                { emoji: '💝', text: 'Romantic Movies', search: 'romance' }
              ].map((item, index) => (
                <Link
                  key={index}
                  to="/"
                  className="flex items-center space-x-2 p-3 bg-gray-800/30 hover:bg-gray-700/30 rounded-lg transition-all duration-200 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {item.emoji}
                  </span>
                  <span className="font-body text-gray-300 group-hover:text-white transition-colors duration-200">
                    {item.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
