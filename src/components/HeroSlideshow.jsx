import React, { useState, useEffect, useMemo } from 'react';

const HeroSlideshow = () => {
  const slides = useMemo(
    () => [
      {
        id: 1,
        eyebrow: 'Premium Streetwear',
        titleLine1: 'Elevate Your',
        titleLine2: 'Everyday Fits',
        description:
          'Explore curated hoodies, tees, and co-ord sets designed for comfort, quality, and modern minimal style.',
        primaryLabel: 'Shop Collection',
        primaryHref: '#products',
        secondaryLabel: 'View Bestsellers',
        secondaryHref: '#products',
        image: '/slideshow/FADEN (A2 (Landscape)).png',
        tag: 'New drops live now',
        focusPosition: 'center 55%'
      },
      {
        id: 2,
        eyebrow: 'Oversized Essentials',
        titleLine1: 'Layer Up In',
        titleLine2: 'Signature Hoodies',
        description:
          'Soft fleece interiors, clean lines, and silhouettes that stay in rotation season after season.',
        primaryLabel: 'Shop Hoodies',
        primaryHref: '/?category=Hoodies',
        secondaryLabel: 'Explore All',
        secondaryHref: '#products',
        image: '/slideshow/Gemini_Generated_Image_wco5hywco5hywco5.png',
        tag: 'Most loved fits',
        focusPosition: 'center 20%'
      },
      {
        id: 3,
        eyebrow: 'Co-ord Sets',
        titleLine1: 'Ready-Made',
        titleLine2: 'Head-To-Toe Looks',
        description:
          'Put-together outfits with zero effort. Just add your favourite sneakers and you are out the door.',
        primaryLabel: 'Shop Sets',
        primaryHref: '/?category=Co-ord Sets',
        secondaryLabel: 'Browse Collection',
        secondaryHref: '#products',
        image: '/slideshow/Hailuo_Image_made this image a proffesional_452199663744888833.png',
        tag: 'Limited stock available',
        focusPosition: 'center 55%'
      }
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(min-width: 1024px)').matches;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handler = (event) => setIsLargeScreen(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleDotClick = (index) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const activeSlide = slides[currentIndex];

  return (
    <section className="relative bg-black dark:bg-black overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: '80px 80px'
          }}
        />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-white/10 -rotate-12" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-white/10 rotate-12" />
        </div>

        <div className="pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 border border-white/10 rounded-full blur-3xl opacity-40 animate-float" />
          <div className="absolute bottom-0 left-12 w-32 h-32 border border-white/10 rotate-12 animate-float" />
        </div>
      </div>

      <div className="relative w-full px-0 sm:px-0 lg:px-0 z-10">
        <div className="relative h-[70vh] sm:h-[75vh] lg:h-[90vh] xl:h-screen">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/0 to-white/10 border border-white/10 backdrop-blur-xl" />

          <div className="absolute inset-0 overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-3 scale-95'
                }`}
              >
                <div
                  className="absolute inset-0 scale-125 blur-3xl"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <img
                  src={slide.image}
                  alt={slide.titleLine2}
                  className={`absolute inset-0 w-full h-full ${
                    slide.id === 1
                      ? 'object-cover scale-90 sm:scale-100'
                      : 'object-cover'
                  }`}
                  style={{
                    objectPosition: slide.focusPosition || 'center top'
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* Text overlay */}
          <div className="absolute inset-0 flex items-end pb-16 sm:items-center sm:pb-0 justify-center lg:justify-start px-4 sm:px-10 lg:px-24">
            <div className="max-w-2xl text-center lg:text-left space-y-4 sm:space-y-6 animate-slide-up">
              <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 bg-white/5 text-[0.6rem] sm:text-xs font-medium uppercase tracking-[0.25em] text-gray-300 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white mr-2" />
                {activeSlide.eyebrow}
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                <span className="block leading-tight">{activeSlide.titleLine1}</span>
                <span className="block mt-1 sm:mt-2 animate-float-3d leading-tight">{activeSlide.titleLine2}</span>
              </h1>

              <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {activeSlide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a href={activeSlide.primaryHref} className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3">
                  {activeSlide.primaryLabel}
                </a>
                <a href={activeSlide.secondaryHref} className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3">
                  {activeSlide.secondaryLabel}
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start text-[0.65rem] sm:text-xs md:text-sm text-gray-300 mt-1 sm:mt-2">
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  {activeSlide.tag}
                </span>
                <span className="h-px w-8 bg-white/20" />
                <span>{String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-10 z-10">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/30 flex items-center justify-center text-white transition-colors"
              aria-label="Previous slide"
            >
              <span className="-ml-0.5">&#8592;</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/30 flex items-center justify-center text-white transition-colors"
              aria-label="Next slide"
            >
              <span className="ml-0.5">&#8594;</span>
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => handleDotClick(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-7 bg-white' : 'w-3 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-gray-400">
        <div className="w-8 h-px bg-white/30" />
        Scroll to explore
        <div className="w-8 h-px bg-white/30" />
      </div>
    </section>
  );
};

export default HeroSlideshow;
