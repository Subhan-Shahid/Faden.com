# 🔄 Example: Replacing Products with Your Own

## **Step-by-Step Example**

### **Step 1: Prepare Your Images**
Let's say you have these products to add:
```
📁 Your product photos:
- my-black-tshirt.jpg
- my-blue-jeans.jpg  
- my-leather-bag.jpg
```

### **Step 2: Upload Images**
1. Copy your images to `public/products/`
2. Your folder should look like:
```
public/products/
├── my-black-tshirt.jpg
├── my-blue-jeans.jpg
└── my-leather-bag.jpg
```

### **Step 3: Update products.js**
Replace the template products in `src/data/products.js`:

```javascript
// 🛍️ FADEN PRODUCTS - Replace these with your own products
export const products = [
  {
    id: 1,
    name: "Classic Black T-Shirt",           // Your product name
    price: 79,                               // Your price
    image: "/products/my-black-tshirt.jpg",  // Your image path
    category: "T-Shirts",
    description: "Premium cotton t-shirt in classic black. Perfect for everyday wear with a comfortable fit.",
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true,
    rating: 4.9,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Vintage Blue Jeans",
    price: 149,
    image: "/products/my-blue-jeans.jpg",
    category: "Jeans",
    description: "Classic vintage-style blue jeans with a modern fit. Durable denim that gets better with age.",
    features: [
      "100% Cotton Denim",
      "Vintage wash",
      "Reinforced stitching",
      "Classic 5-pocket design"
    ],
    inStock: true,
    rating: 4.7,
    sizes: ["28", "30", "32", "34", "36", "38"]
  },
  {
    id: 3,
    name: "Handcrafted Leather Bag",
    price: 299,
    image: "/products/my-leather-bag.jpg",
    category: "Bags",
    description: "Beautifully handcrafted leather bag perfect for work or casual outings. Spacious interior with premium finish.",
    features: [
      "Genuine leather",
      "Handcrafted quality",
      "Multiple compartments",
      "Adjustable strap"
    ],
    inStock: true,
    rating: 4.8,
    sizes: ["One Size"]
  }
  // Add more products following the same pattern...
];
```

### **Step 4: Update Categories (if needed)**
If you're adding new product types, update the categories:

```javascript
export const categories = [
  "All",
  "T-Shirts",
  "Jeans", 
  "Bags",
  // Add your categories here
];
```

### **Step 5: Test Your Changes**
1. Save the file
2. Refresh your website (`http://localhost:3000`)
3. Check that:
   - ✅ Images load correctly
   - ✅ Product details display properly
   - ✅ Categories work
   - ✅ Add to cart functions

### **Step 6: Commit to Git**
```bash
git add .
git commit -m "Added my product images and details"
git push
```

## **🎯 Pro Tips**

### **Image Optimization**
- Resize images to 800x800px for optimal loading
- Use tools like TinyPNG to compress without quality loss
- Keep file sizes under 500KB when possible

### **SEO-Friendly Names**
- Use descriptive product names
- Include key features in descriptions
- Add relevant keywords naturally

### **Pricing Strategy**
- Research competitor pricing
- Consider your brand positioning
- Factor in materials and craftsmanship

### **Inventory Management**
- Set `inStock: false` for sold-out items
- Update regularly to maintain accuracy
- Consider adding quantity tracking later

---

**Need help?** Check `PRODUCT_GUIDE.md` for complete documentation!
