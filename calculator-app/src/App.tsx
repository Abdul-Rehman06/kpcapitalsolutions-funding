import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SiteLayout } from './components/SiteLayout';
import { AboutPage, BookCallPage, ContactPage, HomePage, ServicesPage } from './pages/MarketingPages';
import { CalculatorPage } from './pages/CalculatorPage';
import { NotFoundPage } from './components/ui/404-page-not-found';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-call" element={<BookCallPage />} />
          <Route path="/free-calculator" element={<CalculatorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
