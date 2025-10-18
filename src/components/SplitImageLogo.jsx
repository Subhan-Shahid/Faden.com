import React, { useState, useEffect } from 'react';

const SplitImageLogo = ({ 
  className = "w-8 h-8", 
  animated = true,
  splitAnimation = true,
  fullScreen = false,
  onAnimationComplete 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('split'); // 'split', 'joining', 'complete'

  useEffect(() => {
    if (splitAnimation) {
      // Start joining animation with a gentle delay
      const joinTimer = setTimeout(() => {
        setAnimationPhase('joining');
      }, 800);

      // Complete animation - longer duration for the elegant effect
      const completeTimer = setTimeout(() => {
        setAnimationPhase('complete');
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }, 3500);

      return () => {
        clearTimeout(joinTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [splitAnimation, onAnimationComplete]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Split positions for each quadrant - elegant sliding animation
  const getPieceStyle = (piece) => {
    const splitDistance = fullScreen ? '-150px' : '-50px';
    
    const baseStyle = {
      position: 'absolute',
      width: '50%',
      height: '50%',
      backgroundImage: 'url(/FADEN.jpg)',
      backgroundSize: '200% 200%',
      backgroundRepeat: 'no-repeat',
      transition: 'all 2s ease-in-out',
      opacity: animationPhase === 'split' ? 0.7 : 1,
      filter: animationPhase === 'split' ? 'blur(1px)' : 'blur(0px)',
    };

    switch (piece) {
      case 'topLeft':
        return {
          ...baseStyle,
          top: animationPhase === 'split' ? splitDistance : '0%',
          left: animationPhase === 'split' ? splitDistance : '0%',
          backgroundPosition: '0% 0%',
          transform: animationPhase === 'split' 
            ? 'translateX(-20px) translateY(-20px) scale(0.9)' 
            : 'translateX(0px) translateY(0px) scale(1)',
        };
      case 'topRight':
        return {
          ...baseStyle,
          top: animationPhase === 'split' ? splitDistance : '0%',
          right: animationPhase === 'split' ? splitDistance : '0%',
          backgroundPosition: '100% 0%',
          transform: animationPhase === 'split' 
            ? 'translateX(20px) translateY(-20px) scale(0.9)' 
            : 'translateX(0px) translateY(0px) scale(1)',
          transitionDelay: '0.15s',
        };
      case 'bottomLeft':
        return {
          ...baseStyle,
          bottom: animationPhase === 'split' ? splitDistance : '0%',
          left: animationPhase === 'split' ? splitDistance : '0%',
          backgroundPosition: '0% 100%',
          transform: animationPhase === 'split' 
            ? 'translateX(-20px) translateY(20px) scale(0.9)' 
            : 'translateX(0px) translateY(0px) scale(1)',
          transitionDelay: '0.3s',
        };
      case 'bottomRight':
        return {
          ...baseStyle,
          bottom: animationPhase === 'split' ? splitDistance : '0%',
          right: animationPhase === 'split' ? splitDistance : '0%',
          backgroundPosition: '100% 100%',
          transform: animationPhase === 'split' 
            ? 'translateX(20px) translateY(20px) scale(0.9)' 
            : 'translateX(0px) translateY(0px) scale(1)',
          transitionDelay: '0.45s',
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div className={`
      relative group overflow-hidden
      ${fullScreen 
        ? 'fixed inset-0 z-50 w-screen h-screen' 
        : className
      }
    `}>
      {/* Hidden image for loading detection */}
      <img 
        src="/FADEN.jpg" 
        alt="Faden Logo" 
        className="opacity-0 absolute"
        onLoad={handleImageLoad}
      />

      {/* Split animation pieces */}
      {splitAnimation ? (
        <div className="relative w-full h-full">
          {/* Top Left Piece */}
          <div style={getPieceStyle('topLeft')} />
          
          {/* Top Right Piece */}
          <div style={getPieceStyle('topRight')} />
          
          {/* Bottom Left Piece */}
          <div style={getPieceStyle('bottomLeft')} />
          
          {/* Bottom Right Piece */}
          <div style={getPieceStyle('bottomRight')} />

          {/* Glow effect overlay */}
          <div className={`
            absolute inset-0 rounded-lg
            bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20
            opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ${animationPhase === 'complete' ? 'pointer-events-auto' : 'pointer-events-none'}
          `} />
        </div>
      ) : (
        /* Fallback regular image */
        <img 
          src="/FADEN.jpg" 
          alt="Faden Logo" 
          className={`
            w-full h-full object-contain rounded-lg
            transition-all duration-700 ease-out
            ${animated ? 'group-hover:scale-110 group-hover:brightness-110' : ''}
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />
      )}

      {/* Subtle glow effects during animation */}
      {splitAnimation && animationPhase === 'joining' && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Gentle connecting lines between pieces */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse opacity-30" style={{ animationDelay: '0.2s' }}></div>
          
          {/* Subtle corner highlights */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: i % 2 === 0 ? '25%' : '75%',
                top: i < 2 ? '25%' : '75%',
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SplitImageLogo;
