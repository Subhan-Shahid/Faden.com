import React, { useState, useEffect } from 'react';

const FashionBrandIntro = ({ onComplete }) => {
  const [animationPhase, setAnimationPhase] = useState('initial'); // 'initial', 'logo', 'tagline', 'complete'
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Faster timeline for mobile devices
    const timeline = isMobile ? [
      { phase: 'logo', delay: 300 },
      { phase: 'tagline', delay: 1500 },
      { phase: 'complete', delay: 2800 }
    ] : [
      { phase: 'logo', delay: 500 },
      { phase: 'tagline', delay: 2000 },
      { phase: 'complete', delay: 4000 }
    ];

    const timers = timeline.map(({ phase, delay }) =>
      setTimeout(() => setAnimationPhase(phase), delay)
    );

    // Exit animation - faster on mobile
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    }, isMobile ? 3500 : 5000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, [onComplete, isMobile]);

  return (
    <div className={`
      fixed inset-0 z-[9999] 
      bg-gradient-to-br from-gray-900 via-black to-gray-800
      flex items-center justify-center
      transition-all duration-800 ease-in-out
      ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
    `}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fashion-inspired geometric shapes */}
        <div className={`
          absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 
          transform rotate-45 transition-all duration-2000 ease-out
          ${animationPhase !== 'initial' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `} />
        <div className={`
          absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/10 
          transform rotate-12 transition-all duration-2000 ease-out delay-300
          ${animationPhase !== 'initial' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `} />
        
        {/* Enhanced luxury particle system */}
        {[...Array(isMobile ? 12 : 20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`
              absolute rounded-full animate-pulse
              transition-all duration-3000 ease-out
              ${animationPhase !== 'initial' ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'rgba(255, 255, 255, 0.3)' 
                : i % 3 === 1 
                ? 'rgba(255, 215, 0, 0.2)' 
                : 'rgba(192, 192, 192, 0.2)',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              transform: animationPhase !== 'initial' 
                ? `translateY(${-30 - (Math.random() * 50)}px) scale(1)` 
                : 'translateY(0px) scale(0)',
              filter: 'blur(0.5px)',
              boxShadow: i % 3 === 1 
                ? '0 0 10px rgba(255, 215, 0, 0.3)' 
                : '0 0 5px rgba(255, 255, 255, 0.2)'
            }}
          />
        ))}

        {/* Golden dust particles */}
        {!isMobile && [...Array(15)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className={`
              absolute w-px h-px bg-yellow-400/40 rounded-full
              transition-all duration-4000 ease-out
              ${animationPhase === 'logo' || animationPhase === 'tagline' || animationPhase === 'complete' 
                ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: animationPhase !== 'initial' 
                ? `translateY(${-100 - (Math.random() * 100)}px) rotate(${Math.random() * 360}deg)` 
                : 'translateY(0px) rotate(0deg)',
              filter: 'blur(0.5px)',
              boxShadow: '0 0 8px rgba(255, 215, 0, 0.5)'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white">
        {/* Brand Logo Animation */}
        <div className={`
          mb-8 transition-all duration-1500 ease-out
          ${animationPhase === 'logo' || animationPhase === 'tagline' || animationPhase === 'complete'
            ? 'opacity-100 transform-none' 
            : 'opacity-0 -translate-y-10'
          }
        `}>
          {/* Stylized FADEN logo */}
          <div className="relative">
            {/* Letter F */}
            <div className={`
              inline-block ${isMobile ? 'text-6xl' : 'text-8xl md:text-9xl'} font-bold tracking-wider
              transition-all duration-800 ease-out
              ${animationPhase === 'logo' || animationPhase === 'tagline' || animationPhase === 'complete'
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-x-[-50px]'
              }
            `} style={{ 
              transitionDelay: '0ms',
              textShadow: animationPhase !== 'initial' 
                ? '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2), 0 0 90px rgba(255,215,0,0.1)' 
                : 'none'
            }}>
              F
            </div>
            
            {/* Letter A */}
            <div className={`
              inline-block ${isMobile ? 'text-6xl' : 'text-8xl md:text-9xl'} font-bold tracking-wider
              transition-all duration-800 ease-out
              ${animationPhase === 'logo' || animationPhase === 'tagline' || animationPhase === 'complete'
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-y-[-50px]'
              }
            `} style={{ 
              transitionDelay: '200ms',
              textShadow: animationPhase !== 'initial' 
                ? '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2), 0 0 90px rgba(255,215,0,0.1)' 
                : 'none'
            }}>
              A
            </div>
            
            {/* Letter D */}
            <div className={`
              inline-block ${isMobile ? 'text-6xl' : 'text-8xl md:text-9xl'} font-bold tracking-wider
              transition-all duration-800 ease-out
              ${animationPhase === 'logo' || animationPhase === 'tagline' || animationPhase === 'complete'
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-x-[50px]'
              }
            `} style={{ 
              transitionDelay: '400ms',
              textShadow: animationPhase !== 'initial' 
                ? '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2), 0 0 90px rgba(255,215,0,0.1)' 
                : 'none'
            }}>
              D
            </div>
            
            {/* Letter E */}
            <div className={`
              inline-block ${isMobile ? 'text-6xl' : 'text-8xl md:text-9xl'} font-bold tracking-wider
              transition-all duration-800 ease-out
              ${animationPhase === 'logo' || animationPhase === 'tagline' || animationPhase === 'complete'
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-y-[50px]'
              }
            `} style={{ 
              transitionDelay: '600ms',
              textShadow: animationPhase !== 'initial' 
                ? '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2), 0 0 90px rgba(255,215,0,0.1)' 
                : 'none'
            }}>
              E
            </div>
            
            {/* Letter N */}
            <div className={`
              inline-block ${isMobile ? 'text-6xl' : 'text-8xl md:text-9xl'} font-bold tracking-wider
              transition-all duration-800 ease-out
              ${animationPhase === 'logo' || animationPhase === 'tagline' || animationPhase === 'complete'
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-x-[50px]'
              }
            `} style={{ 
              transitionDelay: '800ms',
              textShadow: animationPhase !== 'initial' 
                ? '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2), 0 0 90px rgba(255,215,0,0.1)' 
                : 'none'
            }}>
              N
            </div>

            {/* Underline animation */}
            <div className={`
              absolute bottom-0 left-1/2 transform -translate-x-1/2
              h-0.5 bg-white transition-all duration-1000 ease-out delay-1000
              ${animationPhase === 'logo' || animationPhase === 'tagline' || animationPhase === 'complete'
                ? 'w-full opacity-100' 
                : 'w-0 opacity-0'
              }
            `} />
          </div>
        </div>

        {/* Tagline Animation */}
        <div className={`
          transition-all duration-1000 ease-out
          ${animationPhase === 'tagline' || animationPhase === 'complete'
            ? 'opacity-100 transform-none' 
            : 'opacity-0 translate-y-5'
          }
        `}>
          <p className={`
            ${isMobile ? 'text-lg' : 'text-xl md:text-2xl'} font-bold tracking-widest text-gray-300
          `} style={{
            textShadow: animationPhase === 'tagline' || animationPhase === 'complete'
              ? '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)'
              : 'none'
          }}>
            ELEVATE YOUR STYLE
          </p>
          <div className={`
            mt-4 w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto
            transition-all duration-800 ease-out delay-500
            ${animationPhase === 'tagline' || animationPhase === 'complete'
              ? 'opacity-100 scale-x-100' 
              : 'opacity-0 scale-x-0'
            }
          `} />
        </div>
      </div>

      {/* Elegant corner decorations */}
      <div className="absolute top-8 left-8">
        <div className={`
          w-8 h-8 border-l-2 border-t-2 border-white/30
          transition-all duration-1000 ease-out delay-1500
          ${animationPhase !== 'initial' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `} />
      </div>
      <div className="absolute top-8 right-8">
        <div className={`
          w-8 h-8 border-r-2 border-t-2 border-white/30
          transition-all duration-1000 ease-out delay-1700
          ${animationPhase !== 'initial' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `} />
      </div>
      <div className="absolute bottom-8 left-8">
        <div className={`
          w-8 h-8 border-l-2 border-b-2 border-white/30
          transition-all duration-1000 ease-out delay-1900
          ${animationPhase !== 'initial' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `} />
      </div>
      <div className="absolute bottom-8 right-8">
        <div className={`
          w-8 h-8 border-r-2 border-b-2 border-white/30
          transition-all duration-1000 ease-out delay-2100
          ${animationPhase !== 'initial' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `} />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}
        />
      </div>
    </div>
  );
};

export default FashionBrandIntro;
