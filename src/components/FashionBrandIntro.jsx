import React, { useState, useEffect } from 'react';

const FashionBrandIntro = ({ onComplete }) => {
  const [animationPhase, setAnimationPhase] = useState('initial'); // 'initial', 'logo', 'tagline', 'complete'
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timeline = [
      { phase: 'logo', delay: 300 },
      { phase: 'tagline', delay: 1200 },
      { phase: 'complete', delay: 2200 }
    ];

    const timers = timeline.map(({ phase, delay }) =>
      setTimeout(() => setAnimationPhase(phase), delay)
    );

    // Exit animation
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }, 2800);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className={`
      fixed inset-0 z-[9999] 
      bg-black
      flex items-center justify-center
      transition-all duration-500 ease-in-out
      ${isExiting ? 'opacity-0' : 'opacity-100'}
    `}>
      {/* Minimal animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal lines */}
        <div className={`
          absolute top-1/4 left-0 right-0 h-px bg-white/10
          transition-all duration-1000 ease-out
          ${animationPhase !== 'initial' ? 'opacity-100' : 'opacity-0'}
        `} />
        <div className={`
          absolute bottom-1/4 left-0 right-0 h-px bg-white/10
          transition-all duration-1000 ease-out delay-200
          ${animationPhase !== 'initial' ? 'opacity-100' : 'opacity-0'}
        `} />

        {/* Vertical lines */}
        <div className={`
          absolute top-0 bottom-0 left-1/4 w-px bg-white/10
          transition-all duration-1000 ease-out delay-100
          ${animationPhase !== 'initial' ? 'opacity-100' : 'opacity-0'}
        `} />
        <div className={`
          absolute top-0 bottom-0 right-1/4 w-px bg-white/10
          transition-all duration-1000 ease-out delay-300
          ${animationPhase !== 'initial' ? 'opacity-100' : 'opacity-0'}
        `} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white">
        {/* Brand Logo - Simple and Clean */}
        <div className={`
          mb-6 transition-all duration-700 ease-out
          ${animationPhase === 'logo' || animationPhase === 'tagline' || animationPhase === 'complete'
            ? 'opacity-100 transform-none'
            : 'opacity-0 scale-95'
          }
        `}>
          <h1 className="text-7xl md:text-9xl font-bold tracking-[0.2em] text-white"
            style={{
              textShadow: '0 0 40px rgba(255,255,255,0.1)'
            }}>
            FADEN
          </h1>

          {/* Simple underline */}
          <div className={`
            mt-4 mx-auto h-px bg-white transition-all duration-800 ease-out delay-400
            ${animationPhase === 'logo' || animationPhase === 'tagline' || animationPhase === 'complete'
              ? 'w-48 opacity-100'
              : 'w-0 opacity-0'
            }
          `} />
        </div>

        {/* Tagline */}
        <div className={`
          transition-all duration-700 ease-out delay-200
          ${animationPhase === 'tagline' || animationPhase === 'complete'
            ? 'opacity-100 transform-none'
            : 'opacity-0 translate-y-3'
          }
        `}>
          <p className="text-sm md:text-base font-light tracking-[0.3em] text-gray-400 uppercase">
            Elevate Your Style
          </p>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8">
        <div className={`
          w-12 h-12 border-l border-t border-white/20
          transition-all duration-700 ease-out delay-500
          ${animationPhase !== 'initial' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
        `} />
      </div>
      <div className="absolute top-8 right-8">
        <div className={`
          w-12 h-12 border-r border-t border-white/20
          transition-all duration-700 ease-out delay-600
          ${animationPhase !== 'initial' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
        `} />
      </div>
      <div className="absolute bottom-8 left-8">
        <div className={`
          w-12 h-12 border-l border-b border-white/20
          transition-all duration-700 ease-out delay-700
          ${animationPhase !== 'initial' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
        `} />
      </div>
      <div className="absolute bottom-8 right-8">
        <div className={`
          w-12 h-12 border-r border-b border-white/20
          transition-all duration-700 ease-out delay-800
          ${animationPhase !== 'initial' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
        `} />
      </div>
    </div>
  );
};

export default FashionBrandIntro;
