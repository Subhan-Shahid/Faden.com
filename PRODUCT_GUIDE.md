# 📸 Product Upload Guide - Faden.com

## 🗂️ **File Structure**

### **Product Images**
Place your product images in: `public/products/`

**Recommended naming convention:**
```
public/products/
├── product-1.jpg          # Premium Cotton T-Shirt
├── product-2.jpg          # Luxury Wool Sweater  
├── product-3.jpg          # Designer Denim Jeans
├── product-4.jpg          # Silk Dress Shirt
└── ...
```

### **Image Requirements**
- **Format**: JPG, PNG, or WebP
- **Size**: Minimum 500x500px (square aspect ratio preferred)
- **Quality**: High resolution for zoom functionality
- **File Size**: Under 2MB for fast loading

## 📝 **Adding Your Products**

### **Step 1: Upload Images**
1. Save your product images to `public/products/`
2. Use descriptive filenames (e.g., `black-leather-jacket.jpg`)

### **Step 2: Update Product Data**
Edit `src/data/products.js` and replace the template products:

```javascript
{
  id: 1,
  name: "Your Product Name",
  price: 199,                                    // Price in USD
  image: "/products/your-image.jpg",             // Path to your image
  category: "T-Shirts",                          // Choose from categories below
  description: "Detailed product description...", 
  features: [                                    // Key selling points
    "Feature 1",
    "Feature 2", 
    "Feature 3"
  ],
  inStock: true,                                 // true/false
  rating: 4.8,                                   // 1-5 stars
  sizes: ["S", "M", "L", "XL"]                  // Available sizes
}
```

## 🏷️ **Available Categories**

Choose from these categories:
- `"T-Shirts"`
- `"Sweaters"`
- `"Jeans"`
- `"Shirts"`
- `"Jackets"`
- `"Shoes"`
- `"Blazers"`
- `"Bags"`
- `"Accessories"`

## 📏 **Size Options**

### **Clothing Sizes**
- `["XS", "S", "M", "L", "XL", "XXL"]`
- `["S", "M", "L", "XL"]` (for premium items)

### **Shoe Sizes**
- `["7", "8", "9", "10", "11", "12"]`
- `["6", "7", "8", "9", "10", "11", "12", "13"]` (extended range)

### **One Size Items**
- `["One Size"]` (for accessories, scarves, etc.)

### **Jeans/Pants**
- `["28", "30", "32", "34", "36", "38"]`

## 💰 **Pricing Guidelines**

**Suggested price ranges for luxury fashion:**
- **T-Shirts**: $59 - $149
- **Sweaters**: $199 - $399
- **Jeans**: $149 - $299
- **Shirts**: $179 - $349
- **Jackets**: $399 - $899
- **Shoes**: $249 - $599
- **Blazers**: $349 - $699
- **Bags**: $299 - $1,299
- **Accessories**: $89 - $399

## ✨ **Product Description Tips**

### **Structure**
1. **Opening**: Premium materials and craftsmanship
2. **Features**: Key benefits and unique selling points
3. **Styling**: How to wear/use the product

### **Example Description**
```
"Crafted from the finest organic cotton, this premium t-shirt offers 
unparalleled comfort and style. Perfect for everyday luxury with a 
modern fit that flatters every silhouette."
```

### **Luxury Keywords**
- Premium, luxury, crafted, finest
- Handcrafted, artisan, bespoke
- Sophisticated, elegant, timeless
- Contemporary, modern, minimalist

## 🎯 **Features Array Examples**

### **Clothing**
```javascript
features: [
  "100% Organic Cotton",
  "Pre-shrunk fabric", 
  "Reinforced seams",
  "Machine washable"
]
```

### **Accessories**
```javascript
features: [
  "Genuine leather",
  "Gold-plated hardware",
  "Multiple compartments", 
  "Dust bag included"
]
```

## 🔄 **Quick Update Process**

1. **Add images** to `public/products/`
2. **Edit** `src/data/products.js`
3. **Update** product object with your details
4. **Save** and refresh your website
5. **Test** the product pages and cart functionality

## 📱 **Testing Checklist**

After adding products, test:
- ✅ Product images load correctly
- ✅ Product details page displays properly
- ✅ Size selection works (if applicable)
- ✅ Add to cart functionality
- ✅ Category filtering
- ✅ Search functionality
- ✅ Mobile responsiveness

## 🚀 **Deployment**

After updating products:
1. Commit changes: `git add . && git commit -m "Updated products"`
2. Push to GitHub: `git push`
3. Deploy to Vercel (auto-deploys from GitHub)

---

**Need help?** The current template products show the exact format to follow!
