import React, { useState, useEffect, useRef } from 'react';

const VideoSplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      // Start playing the video once it's loaded
      video.play().catch(console.error);
    };

    const handleEnded = () => {
      // Start fade out when video ends
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 500); // 500ms fade out duration
    };

    const handleError = () => {
      console.error('Video failed to load');
      // Fallback: show for 3 seconds then complete
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 500);
      }, 3000);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);

    // Fallback timeout in case video doesn't load or play
    const fallbackTimer = setTimeout(() => {
      if (!videoLoaded) {
        handleError();
      }
    }, 5000);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete, videoLoaded]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-500 overflow-hidden ${
      fadeOut ? 'opacity-0' : 'opacity-100'
    }`} style={{ width: '100vw', height: '100vh' }}>
      {/* Loading spinner while video loads */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Loading...</p>
          </div>
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        preload="auto"
        poster=""
        style={{
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <source src="/FADEN.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Faden</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Modern eCommerce Experience</p>
          </div>
        </div>
      </video>

      {/* Optional overlay for branding (if needed) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm font-medium bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
          Faden
        </p>
      </div>
    </div>
  );
};

export default VideoSplashScreen;
