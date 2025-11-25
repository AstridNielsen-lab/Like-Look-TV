import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { AICriticChat } from './components/AICriticChat';
import { Footer } from './components/Footer';

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-900 flex flex-col">
              <Header />
              <main className="pt-16 flex-grow">
                <div className="px-4 py-8">
                  <SearchBar />
                </div>
                <FeaturedCarousel />
                <AICriticChat />
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
