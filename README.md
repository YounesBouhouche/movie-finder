# 🎬 MovieFinder - React Movie & TV Show Discovery App

A beautiful, modern movie and TV show discovery application built with React, TypeScript, TanStack Router, and Tailwind CSS. Search and explore movies and TV series with stunning visuals, smooth animations, and detailed information including seasons and episodes.

![MovieFinder App](https://via.placeholder.com/800x400/1f2937/ffffff?text=MovieFinder+App)

## ✨ Features

### 🎨 **Beautiful UI Design**
- **Modern glassmorphism design** with backdrop blur effects
- **Gradient backgrounds** with animated blob decorations
- **Responsive layout** that works on all devices
- **Smooth page transitions** with TanStack Router
- **Dark theme** optimized for entertainment browsing
- **Dual color schemes**: Purple/Pink for movies, Pink/Rose for TV shows

### 🔍 **Movie & TV Show Discovery**
- **Real-time search** with debounced API calls for both movies and TV shows
- **Popular content** display on separate pages
- **Detailed information pages** with comprehensive data
- **High-quality posters and backdrops** from TMDB
- **Ratings and vote counts** with visual displays

### 📺 **TV Show Features**
- **Season browsing** with detailed episode listings
- **Episode information** including air dates, runtime, and crew
- **Season selection** with interactive season cards
- **Episode stills** and comprehensive metadata
- **Show networks** and creator information

### 🎬 **Movie Features**
- **Video trailers** and behind-the-scenes content
- **YouTube integration** for video playback
- **Production company** information
- **Genre tagging** and detailed metadata

### 🎭 **Interactive Components**
- **Media cards** with hover overlays and animations
- **Search functionality** with genre quick-select buttons
- **Modal dialogs** for detailed views
- **Responsive navigation** with dedicated sections
- **Video cards** with play buttons and thumbnails

### 🎨 **Typography & Fonts**
- **Google Fonts integration** (Playfair Display + Inter)
- **Cinematic typography** for headings and titles
- **Optimized readability** for all text content

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **TanStack Router** - Type-safe client-side routing
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Hooks** - Modern state management
- **TMDB API** - Movie and TV show data source
- **Google Fonts** - Beautiful typography

## 📦 Dependencies

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-use": "^17.5.1",
  "@tanstack/react-router": "^1.87.1",
  "tailwindcss": "^4.1.12",
  "@tailwindcss/vite": "^4.1.12"
}
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- TMDB API key (free registration at [themoviedb.org](https://www.themoviedb.org/))

### 1. Clone the Repository
```bash
git clone https://github.com/YounesBouhouche/movie-finder
cd movie-finder
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_API_BASE_URL=https://api.themoviedb.org/3
```

### 4. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Movie page header with search
│   ├── TvHeader.tsx     # TV shows page header with search
│   ├── Search.tsx       # Search input component
│   ├── NavBar.tsx       # Navigation between sections
│   ├── Footer.tsx       # App footer
│   ├── Spinner.tsx      # Loading spinner
│   ├── MovieCard.tsx    # Movie card display
│   ├── MovieDialog.tsx  # Movie details modal
│   ├── TvCard.tsx       # TV show card display
│   ├── TvDialog.tsx     # TV show details modal
│   ├── VideoCard.tsx    # Video/trailer card
│   ├── VideoSection.tsx # Videos section component
│   ├── SeasonCard.tsx   # Season card display
│   ├── EpisodeCard.tsx  # Episode card display
│   ├── SeasonDetails.tsx# Season details component
│   └── SeasonsSection.tsx# Complete seasons section
├── routes/              # TanStack Router routes
│   ├── __root.tsx      # Root layout
│   ├── index.tsx       # Home page (movies)
│   ├── shows.tsx       # TV shows page
│   ├── about.tsx       # About page
│   ├── movie.$movieId.tsx # Individual movie page
│   ├── tv.$tvId.tsx    # Individual TV show page
│   └── $splat.tsx      # 404 catch-all route
├── types/               # TypeScript interfaces
│   ├── Movie.tsx        # Movie data types
│   ├── Tv.tsx          # TV show data types
│   ├── Season.tsx      # Season data types
│   ├── Episode.tsx     # Episode data types
│   ├── Video.tsx       # Video data types
│   └── Media.tsx       # Common media types
├── hooks/               # Custom React hooks
│   ├── useFetch.tsx    # Fetch hook for API calls
│   └── useQueryFetch.tsx# Query-based fetch hook
├── App.tsx              # Main app component
├── router.tsx           # Router configuration
├── routeTree.gen.ts     # Generated route tree
├── App.css              # Custom styles & animations
├── index.css            # Global styles
└── main.tsx             # App entry point
```

## 🎨 Component Architecture

### Navigation Components
- **NavBar**: Main navigation with Movies/TV Shows/About links
- **Header**: Movie-focused header with purple/pink theme
- **TvHeader**: TV-focused header with pink/rose theme

### Media Display Components
- **MovieCard/TvCard**: Hover animations with scale effects and rating badges
- **MovieDialog/TvDialog**: Modal dialogs with comprehensive information
- **VideoCard**: YouTube video cards with play buttons and thumbnails
- **VideoSection**: Complete video gallery with filtering

### TV Show Specific Components
- **SeasonCard**: Interactive season selection cards
- **EpisodeCard**: Detailed episode information with stills and metadata
- **SeasonDetails**: Complete season overview with episode listings
- **SeasonsSection**: Full seasons management component

### Utility Components
- **Search**: Debounced search with genre suggestions
- **Spinner**: Loading animations
- **Footer**: Brand information and navigation

## 🛣️ Routing Structure

The app uses TanStack Router for type-safe routing:

- **`/`** - Home page with popular movies
- **`/shows`** - TV shows discovery page
- **`/about`** - About page
- **`/movie/$movieId`** - Individual movie details
- **`/tv/$tvId`** - Individual TV show details with seasons/episodes
- **`/*`** - 404 catch-all page

### Route Features
- **Type-safe parameters** for movie and TV show IDs
- **Nested layouts** with consistent navigation
- **Loading states** and error boundaries
- **URL state management** for search queries

## 🎭 Styling Features

### Custom Animations
```css
/* Gradient text animation */
.animate-gradient-x {
  animation: gradient-x 15s ease infinite;
}

/* Floating blob animations */
.animate-blob {
  animation: blob 7s infinite;
}
```

### Typography Classes
```css
.font-display {
  font-family: 'Playfair Display', Georgia, serif;
}

.font-body {
  font-family: 'Inter', sans-serif;
}
```

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🌐 API Integration

The app uses The Movie Database (TMDB) API for comprehensive entertainment data:

### Movie Endpoints
- **Search Movies**: `/search/movie?query={searchTerm}`
- **Popular Movies**: `/discover/movie?sort_by=popularity.desc`
- **Movie Details**: `/movie/{movieId}`
- **Movie Videos**: `/movie/{movieId}/videos`

### TV Show Endpoints
- **Search TV Shows**: `/search/tv?query={searchTerm}`
- **Popular TV Shows**: `/discover/tv?sort_by=popularity.desc`
- **TV Show Details**: `/tv/{tvId}`
- **TV Show Videos**: `/tv/{tvId}/videos`
- **Season Details**: `/tv/{tvId}/season/{seasonNumber}`

### Image URLs
- **Posters**: `https://images.tmdb.org/t/p/w500/{poster_path}`
- **Backdrops**: `https://images.tmdb.org/t/p/w1280/{backdrop_path}`
- **Episode Stills**: `https://images.tmdb.org/t/p/w300/{still_path}`
- **Profile Images**: `https://images.tmdb.org/t/p/w185/{profile_path}`

### Video Integration
- **YouTube Thumbnails**: `https://img.youtube.com/vi/{video_key}/maxresdefault.jpg`
- **YouTube Links**: `https://www.youtube.com/watch?v={video_key}`

## 📱 Responsive Design

- **Mobile-first approach** with progressive enhancement
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid layouts** that adapt to screen size
- **Touch-friendly** interactions and button sizes

## 🎨 Design System

### Color Schemes
**Movies Theme (Purple/Pink)**
- **Primary**: Purple (#9333ea) to Pink (#ec4899) gradients
- **Accents**: Blue (#3b82f6) highlights

**TV Shows Theme (Pink/Rose)**
- **Primary**: Pink (#ec4899) to Rose (#f43f5e) gradients
- **Accents**: Purple (#8b5cf6) highlights

**Common Colors**
- **Background**: Dark grays (#0d0d0d, #1f2937)
- **Text**: White and gray variations
- **Success**: Green (#10b981) for ratings
- **Warning**: Yellow (#fbbf24) for ratings

### Typography
- **Headings**: Playfair Display (serif, cinematic)
- **Body**: Inter (sans-serif, readable)
- **Weights**: 300-900 available

### Component Patterns
- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Gradient backgrounds with hover states
- **Modals**: Full-screen overlays with smooth transitions
- **Navigation**: Consistent theming across sections

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Netlify Deployment
The project includes Netlify configuration files:

1. **`public/_redirects`** - Handles SPA routing
2. **`netlify.toml`** - Build configuration

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Environment Variables
Make sure to set your environment variables in your hosting platform:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_API_BASE_URL=https://api.themoviedb.org/3
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[The Movie Database (TMDB)](https://www.themoviedb.org/)** - Movie and TV show data and images
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing solution
- **[Google Fonts](https://fonts.google.com/)** - Beautiful typography
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React](https://reactjs.org/)** - The React team for the amazing framework
- **[Vite](https://vitejs.dev/)** - Fast build tool and development server

---

**Built with ❤️ for entertainment lovers everywhere!**
