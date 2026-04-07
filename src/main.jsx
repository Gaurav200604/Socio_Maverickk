import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import WorkPage from './pages/WorkPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import WhyUsPage from './pages/WhyUsPage.jsx'
import ClientsPage from './pages/ClientsPage.jsx'
import TestimonialsPage from './pages/TestimonialsPage.jsx'
import FAQPage from './pages/FAQPage.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const removeTextFragmentHighlight = () => {
  if (typeof window === 'undefined') return;

  if (window.location.hash.includes(':~:text=')) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }

  const selection = window.getSelection?.();
  if (selection && selection.rangeCount > 0) {
    selection.removeAllRanges();
  }
};

removeTextFragmentHighlight();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Cursor />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
