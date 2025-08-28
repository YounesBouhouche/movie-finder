# 🎬 MovieFinder - React Movie Discovery App

A beautiful, modern movie discovery application built with React, TypeScript, and Tailwind CSS. Search and explore movies with stunning visuals and smooth animations.

![MovieFinder App](https://via.placeholder.com/800x400/1f2937/ffffff?text=MovieFinder+App)

## ✨ Features

### 🎨 **Beautiful UI Design**
- **Modern glassmorphism design** with backdrop blur effects
- **Gradient backgrounds** with animated blob decorations
- **Responsive layout** that works on all devices
- **Smooth animations** and hover effects throughout
- **Dark theme** optimized for movie browsing

### 🔍 **Movie Discovery**
- **Real-time search** with debounced API calls
- **Popular movies** display on homepage
- **Detailed movie information** in beautiful dialog modals
- **High-quality movie posters** from TMDB
- **Movie ratings** with visual star displays

### 🎭 **Interactive Components**
- **Movie cards** with hover overlays and animations
- **Search functionality** with genre quick-select buttons
- **Modal dialogs** with comprehensive movie details
- **Responsive navigation** and user-friendly interface

### 🎨 **Typography & Fonts**
- **Google Fonts integration** (Playfair Display + Inter)
- **Cinematic typography** for headings and titles
- **Optimized readability** for all text content

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Hooks** - Modern state management
- **TMDB API** - Movie data source
- **Google Fonts** - Beautiful typography

## 📦 Dependencies

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-use": "^17.5.1",
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
│   ├── Header.tsx       # Main header with search
│   ├── Search.tsx       # Search input component
│   ├── MovieCard.tsx    # Movie card display
│   ├── MovieDialog.tsx  # Movie details modal
│   ├── Footer.tsx       # App footer
│   └── Spinner.tsx      # Loading spinner
├── types/               # TypeScript interfaces
│   └── Movie.tsx        # Movie data types
├── App.tsx              # Main app component
├── App.css              # Custom styles & animations
├── index.css            # Global styles
└── main.tsx             # App entry point
```

## 🎨 Component Architecture

### Header Component
- **Brand logo** with gradient text
- **Search functionality** with real-time suggestions
- **Genre quick-select** buttons
- **Responsive design** for all screen sizes

### MovieCard Component
- **Hover animations** with scale effects
- **Rating badges** with star displays
- **Overlay information** on hover
- **Click handlers** for detailed view

### MovieDialog Component
- **Full-screen modal** with movie details
- **Movie poster** and comprehensive information
- **Action buttons** for trailer and favorites
- **Keyboard navigation** (ESC to close)

### Footer Component
- **Brand information** and social links
- **Navigation links** and support sections
- **Newsletter signup** form
- **TMDB attribution** and tech stack credits

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

The app uses The Movie Database (TMDB) API:

- **Search Movies**: `/search/movie?query={searchTerm}`
- **Popular Movies**: `/discover/movie?sort_by=popularity.desc`
- **Movie Images**: `https://images.tmdb.org/t/p/w500/{poster_path}`

## 📱 Responsive Design

- **Mobile-first approach** with progressive enhancement
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid layouts** that adapt to screen size
- **Touch-friendly** interactions and button sizes

## 🎨 Design System

### Colors
- **Primary**: Purple (#9333ea) to Pink (#ec4899) gradients
- **Background**: Dark grays (#0d0d0d, #1f2937)
- **Text**: White and gray variations
- **Accents**: Yellow (#fbbf24) for ratings

### Typography
- **Headings**: Playfair Display (serif, cinematic)
- **Body**: Inter (sans-serif, readable)
- **Weights**: 300-900 available

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
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

- **[The Movie Database (TMDB)](https://www.themoviedb.org/)** - Movie data and images
- **[Google Fonts](https://fonts.google.com/)** - Beautiful typography
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React](https://reactjs.org/)** - The React team for the amazing framework

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

**Built with ❤️ for movie lovers everywhere!**
