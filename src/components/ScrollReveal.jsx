import React, { useRef, useEffect, useState } from 'react';

const ScrollReveal = ({ children, className = '', delay = 0, variant = 'fade-up' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const hiddenClass =
    variant === 'zoom-in'
      ? 'opacity-0 scale-90'
      : 'opacity-0 translate-y-6';

  const visibleClass =
    variant === 'zoom-in'
      ? 'opacity-100 scale-100'
      : 'opacity-100 translate-y-0';

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-500 ease-out ${
        isVisible ? visibleClass : hiddenClass
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
