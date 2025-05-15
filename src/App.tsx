import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Layout components
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import TourismPage from './pages/TourismPage';
import ProductsPage from './pages/ProductsPage';
import BudgetPage from './pages/BudgetPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NotFoundPage from './pages/NotFoundPage';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="tourism" element={<TourismPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="budget" element={<BudgetPage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="news/:id" element={<NewsDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Router>
    </QueryClientProvider>
  );
}

export default App;