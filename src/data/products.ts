export type ProductType = "cooling" | "heating" | "both";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription?: string;
  type: ProductType;
  capacity: string;
  rating: number;
  reviewCount: number;
  features: string[];
  specifications?: Record<string, string>;
  image: string;
  images?: string[];
  badge?: string;
  inStock: boolean;
}

export interface Review {
  id: string;
  productId: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const WHATSAPP_NUMBER = "919876543210";

export function getWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Hi! I want to buy ${product.brand} ${product.name} ${product.capacity} for ₹${product.price.toLocaleString("en-IN")}. Please confirm the order!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getWhatsAppGeneralLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about your AC products.")}`;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Split AC",
    brand: "LG",
    price: 32500,
    originalPrice: 38000,
    description: "Energy-efficient inverter split AC with AI dual cool technology. 5-star rating for maximum savings.",
    longDescription: "Experience the ultimate in cooling efficiency with the LG Split AC featuring AI Dual Cool technology. This 5-star rated inverter AC adapts to your room's temperature and humidity levels, delivering optimal cooling while saving up to 50% on electricity bills. The copper condenser ensures durability, while the HD filter with anti-virus protection keeps your air clean and healthy.",
    type: "cooling",
    capacity: "1.5 Ton",
    rating: 4.5,
    reviewCount: 234,
    features: ["5 Star Rating", "Inverter", "AI Dual Cool", "Wi-Fi Control", "Copper Condenser", "Anti-Virus Protection"],
    specifications: { "Capacity": "1.5 Ton", "Star Rating": "5 Star", "Compressor": "Dual Inverter", "Refrigerant": "R-32", "Noise Level": "26 dB", "Annual Units": "818.81 kWh", "Warranty": "10 Years Compressor" },
    image: "https://images.unsplash.com/photo-1585338107529-13afc25806f9?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585338107529-13afc25806f9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=600&h=400&fit=crop",
    ],
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "2",
    name: "Window AC",
    brand: "Voltas",
    price: 24999,
    originalPrice: 28999,
    description: "Powerful window AC with copper condenser and anti-dust filter for clean, cool air.",
    longDescription: "The Voltas Window AC is built for Indian summers. With its powerful copper condenser and advanced anti-dust filter, it delivers consistent cooling even in temperatures up to 52°C. The sleep mode adjusts temperature through the night for comfortable sleep while saving energy.",
    type: "cooling",
    capacity: "1.5 Ton",
    rating: 4.2,
    reviewCount: 189,
    features: ["3 Star Rating", "Copper Condenser", "Anti-Dust Filter", "Sleep Mode", "Turbo Cooling", "Auto Restart"],
    specifications: { "Capacity": "1.5 Ton", "Star Rating": "3 Star", "Compressor": "Rotary", "Refrigerant": "R-32", "Noise Level": "36 dB", "Warranty": "5 Years Compressor" },
    image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=600&h=400&fit=crop",
    badge: "Value Pick",
    inStock: true,
  },
  {
    id: "3",
    name: "Inverter Split AC",
    brand: "Daikin",
    price: 45000,
    originalPrice: 52000,
    description: "Premium inverter AC with Coanda airflow and Streamer discharge technology.",
    longDescription: "Daikin's premium inverter split AC features the revolutionary Coanda airflow technology that directs cool air along the ceiling for uniform room cooling. The patented Streamer discharge technology removes allergens, mold, and viruses, making it perfect for families with children and elderly members.",
    type: "both",
    capacity: "1.8 Ton",
    rating: 4.8,
    reviewCount: 312,
    features: ["5 Star Rating", "Coanda Airflow", "Streamer Tech", "R-32 Refrigerant", "Power Chill", "Econo Mode"],
    specifications: { "Capacity": "1.8 Ton", "Star Rating": "5 Star", "Compressor": "Swing Inverter", "Refrigerant": "R-32", "Noise Level": "23 dB", "Annual Units": "920 kWh", "Warranty": "10 Years Compressor" },
    image: "https://images.unsplash.com/photo-1631545806609-78a43e87c4d0?w=600&h=400&fit=crop",
    badge: "Premium",
    inStock: true,
  },
  {
    id: "4",
    name: "Hot & Cold Split AC",
    brand: "Samsung",
    price: 52000,
    originalPrice: 59000,
    description: "Year-round comfort with powerful heating and cooling. WindFree technology for gentle cooling.",
    longDescription: "Samsung's Hot & Cold Split AC provides year-round comfort with its powerful heating in winter and WindFree cooling in summer. The WindFree technology disperses cold air through 23,000 micro air holes, creating a 'Still Air' environment without the unpleasant feeling of direct cold airflow.",
    type: "both",
    capacity: "1.5 Ton",
    rating: 4.6,
    reviewCount: 156,
    features: ["Hot & Cold", "WindFree", "Triple Protector Plus", "AI Auto", "Fast Cooling", "Good Sleep Mode"],
    specifications: { "Capacity": "1.5 Ton", "Star Rating": "3 Star", "Compressor": "Digital Inverter", "Refrigerant": "R-32", "Heating": "Yes - Up to 4800W", "Noise Level": "25 dB", "Warranty": "10 Years Compressor" },
    image: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=600&h=400&fit=crop",
    badge: "Hot & Cold",
    inStock: true,
  },
  {
    id: "5",
    name: "Portable AC",
    brand: "Blue Star",
    price: 29999,
    originalPrice: 34500,
    description: "Portable cooling solution — no installation needed. Perfect for rentals and small spaces.",
    longDescription: "The Blue Star Portable AC is the perfect solution for renters and those who need flexible cooling. No installation required — just plug in and cool. The self-evaporating technology means no water draining hassle, and the castor wheels make it easy to move from room to room.",
    type: "cooling",
    capacity: "1 Ton",
    rating: 4.0,
    reviewCount: 98,
    features: ["Portable", "No Installation", "Self-Evaporating", "Remote Control", "3-in-1 Function", "Castor Wheels"],
    specifications: { "Capacity": "1 Ton", "Type": "Portable", "Refrigerant": "R-410A", "Weight": "32 kg", "Noise Level": "52 dB", "Warranty": "1 Year Comprehensive" },
    image: "https://images.unsplash.com/photo-1562176546-25a5aef84d58?w=600&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "6",
    name: "Tower AC",
    brand: "Hitachi",
    price: 62000,
    originalPrice: 69000,
    description: "Elegant floor-standing tower AC with powerful airflow and tropical compressor.",
    longDescription: "Hitachi's Tower AC combines elegance with raw cooling power. The floor-standing design eliminates the need for wall mounting, while the tropical compressor ensures peak performance even at 52°C outdoor temperature. The antibacterial filter and auto-swing feature create a comfortable, healthy environment.",
    type: "cooling",
    capacity: "2 Ton",
    rating: 4.4,
    reviewCount: 67,
    features: ["Floor Standing", "Tropical Compressor", "Auto Swing", "Antibacterial Filter", "iCleen Tech", "Expandable Inverter"],
    specifications: { "Capacity": "2 Ton", "Star Rating": "3 Star", "Compressor": "Tropical Rotary", "Refrigerant": "R-410A", "Noise Level": "40 dB", "Warranty": "10 Years Compressor" },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    badge: "Popular",
    inStock: true,
  },
  {
    id: "7",
    name: "Cassette AC",
    brand: "Midea",
    price: 85000,
    description: "Commercial-grade 4-way cassette AC for offices and large spaces. Uniform air distribution.",
    longDescription: "Carrier's Cassette AC is designed for commercial spaces, offices, and large rooms. The 4-way airflow ensures uniform cooling across the entire space, while the ceiling-mounted design saves floor and wall space. Auto restart after power failure ensures uninterrupted comfort.",
    type: "cooling",
    capacity: "3 Ton",
    rating: 4.3,
    reviewCount: 45,
    features: ["4-Way Airflow", "Commercial Grade", "Auto Restart", "Timer Function", "Ceiling Mounted", "Turbo Mode"],
    specifications: { "Capacity": "3 Ton", "Type": "Cassette", "Compressor": "Scroll", "Refrigerant": "R-410A", "Coverage": "Up to 400 sq ft", "Warranty": "5 Years Compressor" },
    image: "https://images.unsplash.com/photo-1504672281656-e4981d70414b?w=600&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "8",
    name: "Hot & Cold Inverter AC",
    brand: "LG",
    price: 48500,
    originalPrice: 55000,
    description: "All-season comfort with dual inverter compressor. Heats in winter, cools in summer.",
    longDescription: "LG's Hot & Cold Inverter AC is your all-season companion. The dual inverter compressor provides powerful heating in harsh winters and refreshing cooling in scorching summers. With 4-way swing and Himalaya Cool feature, enjoy rapid cooling and even air distribution throughout your room.",
    type: "both",
    capacity: "1.5 Ton",
    rating: 4.7,
    reviewCount: 201,
    features: ["Hot & Cold", "Dual Inverter", "4-Way Swing", "Himalaya Cool", "Ocean Black Fin", "Low Gas Detection"],
    specifications: { "Capacity": "1.5 Ton", "Star Rating": "5 Star", "Compressor": "Dual Inverter", "Refrigerant": "R-32", "Heating": "Yes - Up to 4500W", "Noise Level": "24 dB", "Warranty": "10 Years Compressor" },
    image: "https://images.unsplash.com/photo-1585338107529-13afc25806f9?w=600&h=400&fit=crop",
    badge: "Top Rated",
    inStock: true,
  },
];

export const reviews: Review[] = [
  { id: "r1", productId: "1", name: "Rahul Sharma", rating: 5, comment: "Excellent cooling even at 48°C. Very silent operation. Best purchase this summer!", date: "2026-02-15" },
  { id: "r2", productId: "1", name: "Priya Gupta", rating: 4, comment: "Great AC with Wi-Fi control. Installation was smooth. Slightly noisy on turbo mode.", date: "2026-01-20" },
  { id: "r3", productId: "3", name: "Anil Kumar", rating: 5, comment: "Daikin quality is unmatched. The Coanda airflow is a game-changer. Worth every rupee.", date: "2026-03-01" },
  { id: "r4", productId: "4", name: "Sneha Patel", rating: 5, comment: "Perfect for Mumbai winters and summers. WindFree mode is so comfortable!", date: "2026-02-28" },
  { id: "r5", productId: "8", name: "Vikram Singh", rating: 5, comment: "Using this in Shimla. Heating is powerful enough for -2°C winters. Highly recommend.", date: "2026-03-10" },
  { id: "r6", productId: "2", name: "Deepak Joshi", rating: 4, comment: "Best window AC in this range. Cools the room in 10 minutes flat.", date: "2026-01-15" },
  { id: "r7", productId: "6", name: "Meena Reddy", rating: 4, comment: "Looks stunning in my living room. Powerful cooling for a 300 sq ft hall.", date: "2026-02-05" },
  { id: "r8", productId: "5", name: "Arjun Nair", rating: 4, comment: "Perfect for my rented apartment. Easy to move between rooms. A bit noisy though.", date: "2026-03-18" },
];

export const brands = [...new Set(products.map(p => p.brand))];
export const capacities = [...new Set(products.map(p => p.capacity))];

export const categories = [
  { name: "Split ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Split") && p.type === "cooling").length },
  { name: "Window ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Window")).length },
  { name: "Hot & Cold ACs", type: "both" as ProductType, icon: "sun", count: products.filter(p => p.type === "both").length },
  { name: "Portable ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Portable")).length },
  { name: "Tower ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Tower")).length },
  { name: "Commercial ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Cassette")).length },
];
