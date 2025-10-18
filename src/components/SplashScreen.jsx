import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase('logoAppear');
    }, 300);

    const timer2 = setTimeout(() => {
      setAnimationPhase('logoScale');
    }, 1200);

    const timer3 = setTimeout(() => {
      setAnimationPhase('textAppear');
    }, 1800);

    const timer4 = setTimeout(() => {
      setAnimationPhase('fadeOut');
    }, 2800);

    const timer5 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 ${
      animationPhase === 'fadeOut' ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Background animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-all duration-2000 ${
          animationPhase === 'logoAppear' || animationPhase === 'logoScale' || animationPhase === 'textAppear' 
            ? 'scale-150 opacity-100' 
            : 'scale-100 opacity-0'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-2000 delay-300 ${
          animationPhase === 'logoScale' || animationPhase === 'textAppear' 
            ? 'scale-150 opacity-100' 
            : 'scale-100 opacity-0'
        }`} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-2xl transition-all duration-2000 delay-500 ${
          animationPhase === 'textAppear' 
            ? 'scale-200 opacity-100' 
            : 'scale-100 opacity-0'
        }`} />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center space-y-8">
        {/* Logo container */}
        <div className={`relative transition-all duration-1000 ease-out ${
          animationPhase === 'initial' 
            ? 'opacity-0 scale-50 rotate-180' 
            : animationPhase === 'logoAppear'
            ? 'opacity-100 scale-100 rotate-0'
            : animationPhase === 'logoScale'
            ? 'opacity-100 scale-110 rotate-0'
            : 'opacity-100 scale-100 rotate-0'
        }`}>
          {/* Glow effect behind logo */}
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl transition-all duration-1000 ${
            animationPhase === 'logoScale' || animationPhase === 'textAppear'
              ? 'opacity-30 scale-150'
              : 'opacity-0 scale-100'
          }`} />
          
          {/* Logo */}
          <div className="relative">
            <Logo className="w-24 h-24 md:w-32 md:h-32" />
          </div>
          
          {/* Rotating ring around logo */}
          <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full transition-all duration-2000 ${
            animationPhase === 'logoScale' || animationPhase === 'textAppear'
              ? 'opacity-100 animate-spin'
              : 'opacity-0'
          }`} style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
            padding: '2px',
          }}>
            <div className="w-full h-full bg-gray-50 dark:bg-gray-900 rounded-full" />
          </div>
        </div>

        {/* Brand name */}
        <div className={`transition-all duration-800 ease-out ${
          animationPhase === 'textAppear' || animationPhase === 'fadeOut'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Faden
          </h1>
          
          {/* Tagline */}
          <p className={`text-center text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base transition-all duration-800 delay-200 ${
            animationPhase === 'textAppear' || animationPhase === 'fadeOut'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}>
            Modern eCommerce Experience
          </p>
        </div>

        {/* Loading dots */}
        <div className={`flex space-x-2 transition-all duration-500 ${
          animationPhase === 'textAppear'
            ? 'opacity-100'
            : 'opacity-0'
        }`}>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      {/* Subtle particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400/30 rounded-full transition-all duration-3000 ${
              animationPhase === 'logoScale' || animationPhase === 'textAppear'
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2000}ms`,
              animation: animationPhase === 'logoScale' || animationPhase === 'textAppear' 
                ? `float ${3 + Math.random() * 2}s ease-in-out infinite` 
                : 'none'
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
