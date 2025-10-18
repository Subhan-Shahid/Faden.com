// 📝 PRODUCT TEMPLATE - Copy this format for each new product

export const productTemplate = {
  id: 999,                                    // ⚠️ IMPORTANT: Use unique ID numbers
  name: "Your Product Name Here",             // Product title
  price: 199,                                 // Price in USD (no $ symbol)
  image: "/products/your-image.jpg",          // Path to your image in public/products/
  category: "T-Shirts",                       // Choose from available categories
  description: "Write a compelling product description here. Mention premium materials, craftsmanship, and key benefits.",
  features: [                                 // 3-4 key features/benefits
    "Premium material (e.g., 100% Cotton)",
    "Special feature (e.g., Pre-shrunk fabric)",
    "Quality detail (e.g., Reinforced seams)",
    "Care instruction (e.g., Machine washable)"
  ],
  inStock: true,                             // true = available, false = sold out
  rating: 4.8,                               // Rating from 1.0 to 5.0
  sizes: ["S", "M", "L", "XL"]              // Available sizes (see guide for options)
};

// 🏷️ AVAILABLE CATEGORIES (copy exactly):
// "T-Shirts", "Sweaters", "Jeans", "Shirts", "Jackets", 
// "Shoes", "Blazers", "Bags", "Accessories"

// 📏 SIZE OPTIONS (choose appropriate set):
// Clothing: ["XS", "S", "M", "L", "XL", "XXL"]
// Shoes: ["7", "8", "9", "10", "11", "12"] 
// Jeans: ["28", "30", "32", "34", "36", "38"]
// One Size: ["One Size"]

// 💡 QUICK STEPS:
// 1. Copy this template
// 2. Replace all placeholder text with your product info
// 3. Add to the products array in products.js
// 4. Save and test!

// 🖼️ IMAGE NAMING SUGGESTIONS:
// - black-leather-jacket.jpg
// - white-cotton-tshirt.jpg  
// - blue-denim-jeans.jpg
// - red-silk-dress.jpg
