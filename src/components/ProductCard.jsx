import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart, Eye, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
    }).format(price);
  };

  // Check if product is new (you can customize this logic)
  const isNew = product.id >= 10;
  const isOnSale = product.price < 1500;

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="card card-hover card-gradient p-0 overflow-hidden animate-scale-in relative">
        {/* Monochrome Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ padding: '2px' }}>
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Product Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />

            {/* Loading Shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 animate-shimmer"></div>
            )}

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
              {isNew && (
                <span className="badge badge-new flex items-center gap-1 animate-bounce-subtle">
                  <Sparkles className="w-3 h-3" />
                  New
                </span>
              )}
              {isOnSale && (
                <span className="badge badge-sale">
                  Sale
                </span>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={handleWishlist}
              className="absolute top-3 right-3 p-2.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 z-10"
              aria-label="Add to wishlist"
            >
              <Heart
                className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'
                  }`}
              />
            </button>

            {/* Out of Stock Overlay */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10">
                <span className="badge-sale px-4 py-2 text-sm font-bold">
                  Out of Stock
                </span>
              </div>
            )}

            {/* Quick Actions */}
            {product.inStock && (
              <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary py-2.5 text-sm flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="p-2.5 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:scale-110 transition-transform"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Eye className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </Link>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-5">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-gray-900 dark:text-white group-hover:gradient-text transition-all line-clamp-2 flex-1">
                {product.name}
              </h3>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 badge bg-gray-100 dark:bg-gray-800 mt-1">
                  {product.category}
                </span>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-1 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {product.rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
