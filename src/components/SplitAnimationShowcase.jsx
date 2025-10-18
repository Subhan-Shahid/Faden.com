import React, { useState } from 'react';
import SplitImageLogo from './SplitImageLogo';
import AnimatedLogo from './AnimatedLogo';

const SplitAnimationShowcase = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(0);

  const restartAnimation = () => {
    setTriggerAnimation(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Split Image Animation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Your FADEN.jpg image animated with a 4-part split and join effect
          </p>
          <button
            onClick={restartAnimation}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Restart Animation
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Split Animation - Large */}
          <div className="md:col-span-2 lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Split Animation - Large
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                4 parts split and join together
              </p>
            </div>
            <div className="flex justify-center">
              <SplitImageLogo 
                key={`large-${triggerAnimation}`}
                className="w-32 h-32" 
                animated={true}
                splitAnimation={true}
              />
            </div>
          </div>

          {/* Split Animation - Medium */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Medium Size
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Perfect for cards
              </p>
            </div>
            <div className="flex justify-center">
              <SplitImageLogo 
                key={`medium-${triggerAnimation}`}
                className="w-20 h-20" 
                animated={true}
                splitAnimation={true}
              />
            </div>
          </div>

          {/* Split Animation - Small (Navbar size) */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Navbar Size
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                As used in navigation
              </p>
            </div>
            <div className="flex justify-center">
              <SplitImageLogo 
                key={`small-${triggerAnimation}`}
                className="w-10 h-10" 
                animated={true}
                splitAnimation={true}
              />
            </div>
          </div>

          {/* Comparison with Regular Animation */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Regular Animation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Standard entrance effect
              </p>
            </div>
            <div className="flex justify-center">
              <AnimatedLogo 
                key={`regular-${triggerAnimation}`}
                className="w-20 h-20" 
                animated={true}
                pulseOnLoad={true}
                glowEffect={true}
              />
            </div>
          </div>

          {/* No Animation */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Static Version
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                No animations
              </p>
            </div>
            <div className="flex justify-center">
              <SplitImageLogo 
                className="w-20 h-20" 
                animated={false}
                splitAnimation={false}
              />
            </div>
          </div>

          {/* Split Animation with Callback */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                With Callback
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Triggers event on complete
              </p>
            </div>
            <div className="flex justify-center">
              <SplitImageLogo 
                key={`callback-${triggerAnimation}`}
                className="w-20 h-20" 
                animated={true}
                splitAnimation={true}
                onAnimationComplete={() => console.log('Animation completed!')}
              />
            </div>
          </div>
        </div>

        {/* Animation Details */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Split Animation Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Animation Phases:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Split: Image breaks into 4 parts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Joining: Parts move back together</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Complete: Full image assembled</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Technical Features:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">CSS background-image positioning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Staggered animation timing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Cubic-bezier easing functions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Sparkle effects during joining</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitAnimationShowcase;
