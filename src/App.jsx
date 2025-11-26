import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import LogoShowcase from './components/LogoShowcase';
import SplitAnimationShowcase from './components/SplitAnimationShowcase';
import FashionBrandIntro from './components/FashionBrandIntro';
import Footer from './components/Footer';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewKey, setViewKey] = useState(location.pathname + searchParams.toString());

  useEffect(() => {
    const newKey = location.pathname + searchParams.toString();
    setViewKey(newKey);
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.pathname, searchParams]);

  return (
    <main className={
      `pt-16 relative transition-all duration-300 ease-out transform ${
        isAnimating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
      }`
    }>
      {isAnimating && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-gray-50/80 dark:bg-gray-900/80">
          <div className="h-8 w-8 rounded-full border-2 border-gray-300 border-t-gray-700 dark:border-gray-700 dark:border-t-white animate-spin" />
        </div>
      )}
      <div key={viewKey}>
        {children}
      </div>
    </main>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <ThemeProvider>
      <CartProvider>
        {showIntro && <FashionBrandIntro onComplete={handleIntroComplete} />}
        
        <div className={`
          transition-all duration-1000 ease-out
          ${!showIntro ? 'opacity-100' : 'opacity-0'}
        `}>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
              <Navbar />
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-success" element={<OrderSuccess />} />
                  <Route path="/logo-showcase" element={<LogoShowcase />} />
                  <Route path="/split-animation" element={<SplitAnimationShowcase />} />
                  <Route path="/fashion-intro" element={<FashionBrandIntro onComplete={() => {}} />} />
                </Routes>
              </PageTransition>
              <FloatingWhatsApp />
              <Footer />
            </div>
          </Router>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
