import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
// import the global css file
import './index.css';
import './app.css';

interface AppProps {
  children: React.ReactNode;
}

const App = ({children}: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <NavBar />
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      <Footer />
    </main>
  );
}

export default App;