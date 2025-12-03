import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Check, X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  // Build WhatsApp link with product info and image URL
  let whatsappUrl = 'https://wa.me/923106429244';
  if (product) {
    try {
      const lines = [];
      lines.push(`Product Inquiry - Faden.com`);
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
      whatsappUrl = `https://wa.me/923106429244?text=${message}`;
    } catch {
      whatsappUrl = 'https://wa.me/923106429244';
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product not found
          </h1>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    // Check if size selection is required
    if (product.sizes && product.sizes.length > 1 && !selectedSize) {
      alert('Please select a size');
      return;
    }

    // Check if color selection is required
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      alert('Please select a color');
      return;
    }

    const productWithSize = {
      ...product,
      selectedSize: selectedSize || 'One Size',
      selectedColor: selectedColor || null
    };

    for (let i = 0; i < quantity; i++) {
      addToCart(productWithSize);
    }
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
    }).format(price);
  };

  return (
    <div className="min-h-screen py-8">
      <SEO
        title={product.name}
        description={product.description}
        image={product.image}
        url={`/product/${product.id}`}
        type="product"
        structuredData={{
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": product.name,
          "image": product.image,
          "description": product.description,
          "brand": {
            "@type": "Brand",
            "name": "Faden"
          },
          "offers": {
            "@type": "Offer",
            "url": `https://faden-com.vercel.app/product/${product.id}`,
            "priceCurrency": "PKR",
            "price": product.price,
            "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
          }
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <ScrollReveal className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-medium bg-red-500 px-4 py-2 rounded-full">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Product Info */}
          <ScrollReveal delay={100} className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
                </button>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                        }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {product.inStock ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 dark:text-green-400">
                        In Stock
                      </span>
                    </>
                  ) : (
                    <>
                      <X className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-600 dark:text-red-400">
                        Out of Stock
                      </span>
                    </>
                  )}
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 dark:text-white">
                {formatPrice(product.price)}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Section */}
            {product.inStock && (
              <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                {/* Color Selection */}
                {product.colors && product.colors.length > 0 && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Color:
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {product.colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`relative group`}
                          title={color.name}
                        >
                          <div
                            className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${selectedColor === color.name
                                ? 'border-blue-500 scale-110 shadow-lg'
                                : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:scale-105'
                              }`}
                            style={{ backgroundColor: color.value }}
                          />
                          {selectedColor === color.name && (
                            <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          )}
                          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            {color.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selection */}
                {product.sizes && product.sizes.length > 1 && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Size:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all duration-200 ${selectedSize === size
                              ? 'border-blue-500 bg-blue-500 text-white'
                              : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                            }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 dark:border-gray-600 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-medium transition-all duration-200 ${isAddedToCart
                      ? 'bg-green-500 text-white'
                      : (product.sizes && product.sizes.length > 1 && !selectedSize)
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                  disabled={isAddedToCart || (product.sizes && product.sizes.length > 1 && !selectedSize)}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (product.sizes && product.sizes.length > 1 && !selectedSize) ? (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      <span>Select Size First</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart - {formatPrice(product.price * quantity)}</span>
                    </>
                  )}
                </button>
                <div className="mt-4 flex items-center justify-center space-x-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Order on WhatsApp"
                    className="p-2 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                    title="Order on WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600 dark:text-green-400">
                      <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.46 0 .06 5.4.06 12.06c0 2.12.56 4.18 1.62 6.02L0 24l6.07-1.62a12.02 12.02 0 005.99 1.6h.01c6.6 0 12-5.4 12-12.06 0-3.21-1.25-6.23-3.55-8.44zM12.07 21.33h-.01c-1.97 0-3.9-.53-5.59-1.53l-.4-.24-3.61.96.96-3.52-.26-.41a9.94 9.94 0 01-1.53-5.52C1.63 6.49 6.11 2 12.06 2c2.65 0 5.14 1.03 7.01 2.9a9.88 9.88 0 012.94 7.06c0 5.96-4.49 9.37-9.94 9.37zm5.65-7.1c-.31-.16-1.81-.89-2.09-.99-.28-.1-.48-.15-.68.16-.2.31-.78.99-.96 1.2-.18.21-.35.23-.66.08-1.81-.9-3-1.61-4.19-3.64-.32-.55.33-.51.95-1.69.1-.21.05-.39-.03-.55-.08-.16-.68-1.64-.93-2.24-.24-.57-.49-.49-.68-.5-.17-.01-.37-.01-.57-.01s-.52.08-.79.39c-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.71.64.72.23 1.37.2 1.88.12.57-.09 1.81-.74 2.07-1.45.26-.71.26-1.32.18-1.45-.08-.13-.29-.21-.6-.37z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/hoodieheavan_?igsh=dzYzdThlY3VvNG9r"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Order on Instagram"
                    className="p-2 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
                    title="Order on Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-600 dark:text-pink-400">
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .4.4.8.9 1 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.4.4-.9.8-1.5 1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.4-.4-.8-.9-1-1.5-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.4-.4.9-.8 1.5-1 .4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.5.2-1.8.3-.5.2-.8.4-1.1.8-.4.4-.6.7-.8 1.1-.1.3-.2.8-.3 1.8-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.5.3 1.8.2.5.4.9.8 1.1.3.3.7.6 1.1.8.3.1.8.2 1.8.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.2 1.8-.3.5-.2.9-.4 1.1-.8.4-.4.6-.7.8-1.1.1-.3.2-.8.3-1.8.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.5-.3-1.8-.2-.5-.4-.9-.8-1.1-.3-.3-.7-.6-1.1-.8-.3-.1-.8-.2-1.8-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.3a6.4 6.4 0 110 12.8 6.4 6.4 0 010-12.8zm0 1.8a4.6 4.6 0 100 9.2 4.6 4.6 0 000-9.2zm5-3.1a1.5 1.5 0 110 3.1 1.5 1.5 0 010-3.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1AditKD6ZD/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Order on Facebook"
                    className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    title="Order on Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Related Products
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <ScrollReveal
                    key={relatedProduct.id}
                    variant="zoom-in"
                    delay={index * 60}
                  >
                    <ProductCard product={relatedProduct} />
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
