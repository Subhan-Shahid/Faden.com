import React, { useState, useEffect } from 'react';

const FashionLogo = ({ className = "w-8 h-8", animated = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [animated]);

  return (
    <div className={`${className} flex items-center justify-center group`}>
      {/* Stylized F logo */}
      <div className="relative">
        <div className={`
          text-2xl font-bold tracking-wider text-gray-900 dark:text-white
          transition-all duration-500 ease-out
          group-hover:scale-110 group-hover:tracking-widest
          ${animated ? (isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-2') : 'opacity-100'}
        `}>
          F
        </div>
        
        {/* Subtle underline */}
        <div className={`
          absolute bottom-0 left-1/2 transform -translate-x-1/2
          h-px bg-gray-900 dark:bg-white transition-all duration-300 ease-out
          group-hover:w-full
          ${animated ? (isVisible ? 'w-3/4 opacity-100' : 'w-0 opacity-0') : 'w-3/4 opacity-100'}
        `} style={{ transitionDelay: animated ? '200ms' : '0ms' }} />
        
        {/* Corner accent */}
        <div className={`
          absolute -top-1 -right-1 w-1 h-1 bg-gray-900 dark:bg-white
          transition-all duration-300 ease-out
          group-hover:scale-150
          ${animated ? (isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0') : 'opacity-100'}
        `} style={{ transitionDelay: animated ? '400ms' : '0ms' }} />
      </div>
    </div>
  );
};

export default FashionLogo;
