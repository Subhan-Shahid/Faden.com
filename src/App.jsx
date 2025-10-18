import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import LogoShowcase from './components/LogoShowcase';
import SplitAnimationShowcase from './components/SplitAnimationShowcase';
import FashionBrandIntro from './components/FashionBrandIntro';

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
              <main className="pt-16">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/logo-showcase" element={<LogoShowcase />} />
                  <Route path="/split-animation" element={<SplitAnimationShowcase />} />
                  <Route path="/fashion-intro" element={<FashionBrandIntro onComplete={() => {}} />} />
                </Routes>
              </main>
            </div>
          </Router>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
