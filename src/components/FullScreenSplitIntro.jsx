import React, { useState, useEffect } from 'react';
import SplitImageLogo from './SplitImageLogo';

const FullScreenSplitIntro = ({ onComplete }) => {
  const [showContent, setShowContent] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleAnimationComplete = () => {
    // Show content after split animation completes
    setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Start exit animation after showing content
    setTimeout(() => {
      setIsExiting(true);
      // Call onComplete callback after exit animation
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800);
    }, 3000);
  };

  return (
    <div className={`
      fixed inset-0 z-[9999] 
      bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900
      transition-all duration-800 ease-in-out
      ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
    `}>
      {/* Full screen split image */}
      <SplitImageLogo 
        fullScreen={true}
        animated={true}
        splitAnimation={true}
        onAnimationComplete={handleAnimationComplete}
      />

      {/* Overlay content */}
      <div className={`
        absolute inset-0 flex items-center justify-center z-10
        transition-all duration-1000 ease-out
        ${showContent ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
            Faden
          </h1>
          <p className="text-xl md:text-2xl animate-slide-up">
            Modern eCommerce Experience
          </p>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-1 h-1 bg-white rounded-full
              animate-ping opacity-20
            `}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
    </div>
  );
};

export default FullScreenSplitIntro;
