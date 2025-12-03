import React, { useState, useEffect } from 'react';

const Logo = ({ className = "w-8 h-8", animated = true, src = "/slideshow/F A D E N (A2 (Landscape)).png" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Loading spinner */}
      {!isLoaded && animated && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Logo image with animations */}
      <img 
        src={src} 
        alt="Faden Logo" 
        className={`w-full h-full object-contain rounded-2xl transition-all duration-700 ease-out transform ${
          animated ? `
            ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-12'}
            hover:scale-110 hover:rotate-3 hover:brightness-110
            hover:drop-shadow-lg hover:saturate-110
            active:scale-95 active:rotate-1
          ` : ''
        } ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          filter: animated ? 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))' : 'none',
          transition: animated ? 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
        }}
        onLoad={handleImageLoad}
      />
      
      {/* Animated glow effect on hover */}
      {animated && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-sm -z-10 scale-125"></div>
      )}
    </div>
  );
};

export default Logo;
