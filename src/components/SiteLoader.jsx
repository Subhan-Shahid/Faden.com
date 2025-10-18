import React, { useState, useEffect } from 'react';
import SplitImageLogo from './SplitImageLogo';

const SiteLoader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Start exit animation
          setTimeout(() => {
            setIsExiting(true);
            // Complete loading after exit animation
            setTimeout(() => {
              onLoadComplete();
            }, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment between 5-20
      });
    }, 150);

    // Animate loading text
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        if (prev === 'Loading...') return 'Loading';
        return prev + '.';
      });
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadComplete]);

  return (
    <div className={`
      fixed inset-0 z-[9999] flex items-center justify-center
      bg-gradient-to-br from-white via-blue-50 to-purple-50 
      dark:from-gray-900 dark:via-blue-900 dark:to-purple-900
      transition-all duration-800 ease-in-out
      ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
    `}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full
              animate-pulse opacity-30
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

      {/* Main loader content */}
      <div className="relative z-10 text-center">
        {/* Animated Logo */}
        <div className="mb-8 transform transition-all duration-1000 ease-out">
          <SplitImageLogo 
            className="w-24 h-24 mx-auto" 
            animated={true}
            splitAnimation={true}
          />
        </div>

        {/* Brand name with animation */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
            {'Faden'.split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-bounce"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '1s'
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in">
            Modern eCommerce Experience
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="relative">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-gray-600 dark:text-gray-300 font-medium">
          {loadingText}
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full
                animate-ping opacity-40
              `}
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-black/10 pointer-events-none"></div>
    </div>
  );
};

export default SiteLoader;
