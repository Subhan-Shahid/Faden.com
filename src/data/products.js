export const products = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    category: "Laptops",
    description: "The most powerful MacBook Pro ever is here. With the blazing-fast M2 Pro or M2 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.",
    features: [
      "Apple M2 Pro or M2 Max chip",
      "Up to 96GB unified memory",
      "Up to 8TB SSD storage",
      "16.2-inch Liquid Retina XDR display"
    ],
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
    category: "Smartphones",
    description: "iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action Button, and the most Pro camera system ever.",
    features: [
      "A17 Pro chip with 6-core GPU",
      "Pro camera system with 5x Telephoto",
      "Action Button for quick shortcuts",
      "Titanium design"
    ],
    inStock: true,
    rating: 4.9
  },
  {
    id: 3,
    name: "AirPods Pro (2nd gen)",
    price: 249,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=500&fit=crop",
    category: "Audio",
    description: "AirPods Pro have been reengineered to deliver even richer audio experiences. So you can get lost in music like never before.",
    features: [
      "Active Noise Cancellation",
      "Adaptive Transparency",
      "Personalized Spatial Audio",
      "Up to 6 hours listening time"
    ],
    inStock: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "iPad Air",
    price: 599,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    category: "Tablets",
    description: "Serious performance in a thin and light design. iPad Air lets you immerse yourself in whatever you're reading, watching, or creating.",
    features: [
      "M1 chip with 8-core CPU",
      "10.9-inch Liquid Retina display",
      "12MP Ultra Wide front camera",
      "Compatible with Apple Pencil"
    ],
    inStock: false,
    rating: 4.6
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 399,
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=500&h=500&fit=crop",
    category: "Wearables",
    description: "Your essential companion for a healthy life is now even more powerful. The S9 chip enables a magical new way to use your Apple Watch without touching the screen.",
    features: [
      "S9 SiP with 4-core Neural Engine",
      "Double Tap gesture",
      "Precision Finding for iPhone",
      "Up to 18 hours battery life"
    ],
    inStock: true,
    rating: 4.5
  },
  {
    id: 6,
    name: "Mac Studio",
    price: 1999,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    category: "Desktops",
    description: "Mac Studio. Supercharged by M2 Max and M2 Ultra. Mac Studio takes everything you love about Mac mini and Mac Pro, and squeezes incredible performance into a compact design.",
    features: [
      "M2 Max or M2 Ultra chip",
      "Up to 192GB unified memory",
      "Extensive connectivity",
      "Quiet cooling system"
    ],
    inStock: true,
    rating: 4.8
  },
  {
    id: 7,
    name: "Studio Display",
    price: 1599,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
    category: "Displays",
    description: "Studio Display. A 27-inch 5K Retina display with a 12MP Ultra Wide camera, three studio-quality mics, and six speakers with Spatial Audio.",
    features: [
      "27-inch 5K Retina display",
      "12MP Ultra Wide camera with Center Stage",
      "Three studio-quality microphones",
      "Six-speaker sound system"
    ],
    inStock: true,
    rating: 4.4
  },
  {
    id: 8,
    name: "Magic Keyboard",
    price: 99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Magic Keyboard delivers a remarkably comfortable and precise typing experience. It's also wireless and rechargeable, with an incredibly long-lasting internal battery.",
    features: [
      "Scissor mechanism with 1mm travel",
      "Wireless and rechargeable",
      "Lightning to USB-C Cable included",
      "Compatible with Mac and iPad"
    ],
    inStock: true,
    rating: 4.3
  }
];

export const categories = [
  "All",
  "Laptops",
  "Smartphones", 
  "Audio",
  "Tablets",
  "Wearables",
  "Desktops",
  "Displays",
  "Accessories"
];
