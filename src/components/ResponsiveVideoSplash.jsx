import React, { useState, useEffect, useRef } from 'react';

const ResponsiveVideoSplash = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      setVideoError(false);
      // Start playing the video once it's loaded
      video.play().catch((error) => {
        console.error('Video play failed:', error);
        setVideoError(true);
      });
    };

    const handleEnded = () => {
      // Start fade out when video ends
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 500);
    };

    const handleError = (error) => {
      console.error('Video failed to load:', error);
      setVideoError(true);
      // Show fallback for 3 seconds then complete
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 500);
      }, 3000);
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);

    // Fallback timeout
    const fallbackTimer = setTimeout(() => {
      if (!videoLoaded && !videoError) {
        handleError('Timeout');
      }
    }, 8000);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete, videoLoaded, videoError]);

  // Simple resize handler to ensure video stays within bounds
  useEffect(() => {
    const handleResize = () => {
      const video = videoRef.current;
      if (!video) return;
      
      // Reset video styles to ensure it fits within viewport
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.maxWidth = '100vw';
      video.style.maxHeight = '100vh';
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [videoLoaded]);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className={`fixed top-0 left-0 w-screen h-screen z-[9999] bg-black transition-opacity duration-500 overflow-hidden ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      {/* Loading spinner while video loads */}
      {(!videoLoaded || videoError) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 z-10">
          <div className="flex flex-col items-center space-y-4 px-4">
            {!videoError ? (
              <>
                <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">Loading your experience...</p>
              </>
            ) : (
              <div className="text-center max-w-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Faden</h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Modern eCommerce Experience</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className={`w-full h-full transition-opacity duration-300 ${
          videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100vw',
          maxHeight: '100vh',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
        muted
        playsInline
        preload="auto"
        webkit-playsinline="true"
      >
        <source src="/FADEN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional subtle branding overlay */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-20 hover:opacity-60 transition-opacity duration-300 pointer-events-none">
        <p className="text-white text-xs font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
          Faden
        </p>
      </div>
    </div>
  );
};

export default ResponsiveVideoSplash;
