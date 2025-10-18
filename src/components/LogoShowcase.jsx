import React from 'react';
import AnimatedLogo from './AnimatedLogo';

const LogoShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Faden Logo Animations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Modern, attractive animations for your brand logo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Standard Animated Logo */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Standard Animation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Entrance + hover effects
              </p>
            </div>
            <div className="flex justify-center">
              <AnimatedLogo 
                className="w-20 h-20" 
                animated={true}
                pulseOnLoad={false}
                glowEffect={true}
              />
            </div>
          </div>

          {/* Pulse Animation */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Pulse Animation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                With loading pulse effect
              </p>
            </div>
            <div className="flex justify-center">
              <AnimatedLogo 
                className="w-20 h-20" 
                animated={true}
                pulseOnLoad={true}
                glowEffect={true}
              />
            </div>
          </div>

          {/* Glow Effect */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Enhanced Glow
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Maximum glow effects
              </p>
            </div>
            <div className="flex justify-center">
              <AnimatedLogo 
                className="w-20 h-20" 
                animated={true}
                pulseOnLoad={true}
                glowEffect={true}
              />
            </div>
          </div>

          {/* Large Size */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Large Size
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Hero section size
              </p>
            </div>
            <div className="flex justify-center">
              <AnimatedLogo 
                className="w-32 h-32" 
                animated={true}
                pulseOnLoad={true}
                glowEffect={true}
              />
            </div>
          </div>

          {/* Static Version */}
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
              <AnimatedLogo 
                className="w-20 h-20" 
                animated={false}
                pulseOnLoad={false}
                glowEffect={false}
              />
            </div>
          </div>

          {/* Navbar Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Navbar Size
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                As seen in navigation
              </p>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <AnimatedLogo 
                className="w-10 h-10" 
                animated={true}
                pulseOnLoad={true}
                glowEffect={true}
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Faden</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Animation Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Smooth entrance animation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Interactive hover effects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Loading state with spinner</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Gradient glow effects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Pulse animation on load</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Responsive design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
