import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
// import the global css file
import './index.css';

interface AppProps {
  children: React.ReactNode;
}

const App = ({children}: AppProps) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}

export default App;