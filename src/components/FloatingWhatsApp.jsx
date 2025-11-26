import React from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';

const FloatingWhatsApp = () => {
  const location = useLocation();
  const phoneNumber = '923106429244'; // same number as used in Navbar

  let waLink = `https://wa.me/${phoneNumber}`;

  // If on a product detail page, include product info + image URL in the message
  if (location.pathname.startsWith('/product/')) {
    try {
      const segments = location.pathname.split('/').filter(Boolean);
      const idSegment = segments[1]; // ['product', ':id'] -> take index 1
      const productId = parseInt(idSegment, 10);
      const product = products.find((p) => p.id === productId);

      if (product) {
        const lines = [];
        lines.push('Product Inquiry - Faden.com');
        lines.push(`Name: ${product.name}`);
        lines.push(`Category: ${product.category}`);
        lines.push(`Price: ${product.price}`);

        if (product.image) {
          const origin = typeof window !== 'undefined' ? window.location.origin : '';
          const imageUrl = product.image.startsWith('http')
            ? product.image
            : `${origin}${product.image.startsWith('/') ? '' : '/'}${product.image}`;
          lines.push(`Image: ${imageUrl}`);
        }

        const message = encodeURIComponent(lines.join('\n'));
        waLink = `https://wa.me/${phoneNumber}?text=${message}`;
      }
    } catch {
      waLink = `https://wa.me/${phoneNumber}`;
    }
  }

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/40 transition-transform transition-colors duration-200 hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.46 0 .06 5.4.06 12.06c0 2.12.56 4.18 1.62 6.02L0 24l6.07-1.62a12.02 12.02 0 005.99 1.6h.01c6.6 0 12-5.4 12-12.06 0-3.21-1.25-6.23-3.55-8.44zM12.07 21.33h-.01c-1.97 0-3.9-.53-5.59-1.53l-.4-.24-3.61.96.96-3.52-.26-.41a9.94 9.94 0 01-1.53-5.52C1.63 6.49 6.11 2 12.06 2c2.65 0 5.14 1.03 7.01 2.9a9.88 9.88 0 012.94 7.06c0 5.96-4.49 9.37-9.94 9.37zm5.65-7.1c-.31-.16-1.81-.89-2.09-.99-.28-.1-.48-.15-.68.16-.2.31-.78.99-.96 1.2-.18.21-.35.23-.66.08-1.81-.9-3-1.61-4.19-3.64-.32-.55.33-.51.95-1.69.1-.21.05-.39-.03-.55-.08-.16-.68-1.64-.93-2.24-.24-.57-.49-.49-.68-.5-.17-.01-.37-.01-.57-.01s-.52.08-.79.39c-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.71.64.72.23 1.37.2 1.88.12.57-.09 1.81-.74 2.07-1.45.26-.71.26-1.32.18-1.45-.08-.13-.29-.21-.6-.37z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
