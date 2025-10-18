import React, { useState, useEffect } from 'react';

const AnimatedLogo = ({ 
  className = "w-8 h-8", 
  animated = true, 
  pulseOnLoad = true,
  glowEffect = true 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    // Staggered entrance animation
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    // Pulse effect after entrance
    const pulseTimer = setTimeout(() => {
      if (pulseOnLoad) {
        setShowPulse(true);
        // Remove pulse after animation
        setTimeout(() => setShowPulse(false), 1000);
      }
    }, 800);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(pulseTimer);
    };
  }, [pulseOnLoad]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`logo-container relative flex items-center justify-center ${className} group`}>
      {/* Loading spinner with modern design */}
      {!isLoaded && animated && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-5 h-5 border-2 border-gray-200 dark:border-gray-700 rounded-full"></div>
            <div className="absolute top-0 left-0 w-5 h-5 border-2 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      {/* Background glow effects */}
      {animated && glowEffect && (
        <>
          {/* Static glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Animated pulse glow */}
          {showPulse && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-lg scale-150 animate-pulse opacity-30"></div>
          )}
        </>
      )}
      
      {/* Logo image with enhanced animations */}
      <img 
        src="/FADEN.jpg" 
        alt="Faden Logo" 
        className={`
          logo-main relative z-10 w-full h-full object-contain rounded-lg
          transition-all duration-700 ease-out transform
          ${animated ? `
            ${isVisible 
              ? 'logo-entrance opacity-100 scale-100 rotate-0 translate-y-0' 
              : 'opacity-0 scale-50 -rotate-45 translate-y-4'
            }
            group-hover:scale-110 group-hover:rotate-2 
            group-hover:brightness-110 group-hover:contrast-110
            group-hover:drop-shadow-2xl group-hover:saturate-125
            group-active:scale-95 group-active:rotate-1
            ${showPulse ? 'logo-pulse scale-105' : ''}
          ` : ''}
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          filter: animated 
            ? `
                drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))
                drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))
              ` 
            : 'none',
          transition: animated 
            ? 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' 
            : 'none'
        }}
        onLoad={handleImageLoad}
      />
      
      {/* Floating particles effect on hover */}
      {animated && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full
                opacity-0 group-hover:opacity-60
                transition-all duration-1000 ease-out
                group-hover:animate-bounce
              `}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 200}ms`,
                transform: 'translateY(0px)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedLogo;
