# Faden - Modern eCommerce Website

A modern, responsive eCommerce product showcase website built with React, Tailwind CSS, and Vite. Features a clean, minimal design inspired by Apple and Shopify with dark mode support.

## ✨ Features

- **Modern Design**: Clean, minimal interface with smooth animations and transitions
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Product Showcase**: Grid layout with hover effects and product cards
- **Product Details**: Detailed product pages with image, description, features, and reviews
- **Shopping Cart**: Add/remove items, quantity management, and persistent storage
- **Search & Filter**: Search products by name and filter by category
- **Sorting**: Sort products by name, price, and rating
- **React Router**: Client-side routing for seamless navigation
- **Local Storage**: Cart persistence across browser sessions

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS with custom components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Context API
- **Font**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd faden-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   └── ProductCard.jsx # Product card component
├── context/            # React Context providers
│   ├── CartContext.jsx # Shopping cart state management
│   └── ThemeContext.jsx # Dark mode theme management
├── data/               # Static data
│   └── products.js     # Product data and categories
├── pages/              # Page components
│   ├── Home.jsx        # Home page with product grid
│   ├── ProductDetails.jsx # Individual product page
│   └── Cart.jsx        # Shopping cart page
├── App.jsx             # Main app component with routing
├── main.jsx            # React app entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design Features

### Color Scheme
- **Light Mode**: Clean whites and grays with blue accents
- **Dark Mode**: Dark grays and blacks with consistent contrast
- **Accent Colors**: Blue to purple gradients for branding

### Typography
- **Font Family**: Inter (modern, readable sans-serif)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive Text**: Scales appropriately across devices

### Animations
- **Fade In**: Smooth entrance animations for content
- **Hover Effects**: Scale and shadow transitions on interactive elements
- **Loading States**: Visual feedback for user actions

## 🛒 Cart Features

- **Add to Cart**: Quick add from product cards or detailed add from product pages
- **Quantity Management**: Increase/decrease item quantities
- **Remove Items**: Individual item removal or clear entire cart
- **Persistent Storage**: Cart contents saved to localStorage
- **Real-time Updates**: Cart count updates across all components
- **Price Calculation**: Automatic subtotal, tax, and total calculations

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Flexible Grid**: Responsive product grid (1-4 columns)
- **Touch Friendly**: Appropriate touch targets for mobile

## 🌙 Dark Mode

- **System Detection**: Automatically detects user's system preference
- **Manual Toggle**: Sun/moon icon in navigation bar
- **Persistent Choice**: Remembers user's theme preference
- **Smooth Transitions**: Animated theme switching

## 🔍 Search & Filter

- **Real-time Search**: Instant search results as you type
- **Category Filter**: Filter products by category
- **Multiple Sorting**: Sort by name, price (low/high), and rating
- **Results Count**: Shows number of filtered results

## 📦 Product Data

The application uses dummy product data with the following structure:
- **8 Products**: Mix of tech products (laptops, phones, accessories)
- **Categories**: Laptops, Smartphones, Audio, Tablets, Wearables, Desktops, Displays, Accessories
- **Product Fields**: ID, name, price, image, category, description, features, stock status, rating
- **High-Quality Images**: Unsplash product images

## 🚀 Performance

- **Vite Build Tool**: Fast development and optimized production builds
- **Code Splitting**: Automatic code splitting with React Router
- **Image Optimization**: Lazy loading for product images
- **Minimal Bundle**: Optimized dependencies and tree shaking

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products or categories.

### Styling Changes
Modify `tailwind.config.js` for theme customization or `src/index.css` for custom components.

### Adding Features
The modular structure makes it easy to add new features like:
- User authentication
- Payment integration
- Product reviews
- Wishlist functionality
- Order history

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React and Tailwind CSS
