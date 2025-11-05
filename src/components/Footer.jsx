import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Faden. All rights reserved.
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/923106429244"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              title="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600 dark:text-green-400">
                <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.46 0 .06 5.4.06 12.06c0 2.12.56 4.18 1.62 6.02L0 24l6.07-1.62a12.02 12.02 0 005.99 1.6h.01c6.6 0 12-5.4 12-12.06 0-3.21-1.25-6.23-3.55-8.44zM12.07 21.33h-.01c-1.97 0-3.9-.53-5.59-1.53l-.4-.24-3.61.96.96-3.52-.26-.41a9.94 9.94 0 01-1.53-5.52C1.63 6.49 6.11 2 12.06 2c2.65 0 5.14 1.03 7.01 2.9a9.88 9.88 0 012.94 7.06c0 5.96-4.49 9.37-9.94 9.37zm5.65-7.1c-.31-.16-1.81-.89-2.09-.99-.28-.1-.48-.15-.68.16-.2.31-.78.99-.96 1.2-.18.21-.35.23-.66.08-1.81-.9-3-1.61-4.19-3.64-.32-.55.33-.51.95-1.69.1-.21.05-.39-.03-.55-.08-.16-.68-1.64-.93-2.24-.24-.57-.49-.49-.68-.5-.17-.01-.37-.01-.57-.01s-.52.08-.79.39c-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.71.64.72.23 1.37.2 1.88.12.57-.09 1.81-.74 2.07-1.45.26-.71.26-1.32.18-1.45-.08-.13-.29-.21-.6-.37z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/hoodieheavan_?igsh=dzYzdThlY3VvNG9r"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-pink-600 dark:text-pink-400">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .4.4.8.9 1 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.4.4-.9.8-1.5 1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.4-.4-.8-.9-1-1.5-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.4-.4.9-.8 1.5-1 .4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.5.2-1.8.3-.5.2-.8.4-1.1.8-.4.4-.6.7-.8 1.1-.1.3-.2.8-.3 1.8-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.5.3 1.8.2.5.4.9.8 1.1.3.3.7.6 1.1.8.3.1.8.2 1.8.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.2 1.8-.3.5-.2.9-.4 1.1-.8.4-.4.6-.7.8-1.1.1-.3.2-.8.3-1.8.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.5-.3-1.8-.2-.5-.4-.9-.8-1.1-.3-.3-.7-.6-1.1-.8-.3-.1-.8-.2-1.8-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.3a6.4 6.4 0 110 12.8 6.4 6.4 0 010-12.8zm0 1.8a4.6 4.6 0 100 9.2 4.6 4.6 0 000-9.2zm5-3.1a1.5 1.5 0 110 3.1 1.5 1.5 0 010-3.1z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1AditKD6ZD/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              title="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600 dark:text-blue-400">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
