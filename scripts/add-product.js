// 🚀 PRODUCT MANAGEMENT HELPER
// This script helps you add products more easily

const fs = require('fs');
const path = require('path');

// 📝 EXAMPLE: How to add a new product
const newProduct = {
  id: 11, // Make sure this is unique!
  name: "Your New Product",
  price: 299,
  image: "/products/your-image.jpg", // Place image in public/products/
  category: "T-Shirts", // Choose from available categories
  description: "Your product description here...",
  features: [
    "Feature 1",
    "Feature 2", 
    "Feature 3"
  ],
  inStock: true,
  rating: 4.8,
  sizes: ["S", "M", "L", "XL"]
};

// 🔧 UTILITY FUNCTIONS

// Get next available product ID
function getNextProductId() {
  const productsPath = path.join(__dirname, '../src/data/products.js');
  const content = fs.readFileSync(productsPath, 'utf8');
  
  // Extract existing IDs
  const idMatches = content.match(/id:\s*(\d+)/g);
  const ids = idMatches ? idMatches.map(match => parseInt(match.split(':')[1].trim())) : [];
  
  return Math.max(...ids, 0) + 1;
}

// Validate product object
function validateProduct(product) {
  const required = ['id', 'name', 'price', 'image', 'category', 'description', 'features', 'inStock', 'rating', 'sizes'];
  const missing = required.filter(field => !(field in product));
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
  
  // Validate categories
  const validCategories = ["T-Shirts", "Sweaters", "Jeans", "Shirts", "Jackets", "Shoes", "Blazers", "Bags", "Accessories"];
  if (!validCategories.includes(product.category)) {
    throw new Error(`Invalid category. Must be one of: ${validCategories.join(', ')}`);
  }
  
  return true;
}

// 📖 INSTRUCTIONS
console.log(`
🛍️ FADEN PRODUCT MANAGEMENT

📁 FOLDER STRUCTURE:
   public/products/          <- Place your product images here
   src/data/products.js      <- Edit this file to add products

📝 TO ADD PRODUCTS:
   1. Place images in public/products/
   2. Edit src/data/products.js
   3. Copy the template from product-template.js
   4. Update with your product details

🆔 NEXT AVAILABLE ID: ${getNextProductId()}

📖 For detailed instructions, see PRODUCT_GUIDE.md
`);

module.exports = {
  getNextProductId,
  validateProduct,
  newProduct
};
