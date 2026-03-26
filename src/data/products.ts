export type ProductType = "cooling" | "heating" | "both";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  type: ProductType;
  capacity: string;
  rating: number;
  features: string[];
  image: string;
  badge?: string;
}

export const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

export function getWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Hi! I want to buy ${product.brand} ${product.name} ${product.capacity} for ₹${product.price.toLocaleString("en-IN")}. Please share more details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Split AC",
    brand: "LG",
    price: 32500,
    description: "Energy-efficient inverter split AC with AI dual cool technology. 5-star rating for maximum savings.",
    type: "cooling",
    capacity: "1.5 Ton",
    rating: 4.5,
    features: ["5 Star Rating", "Inverter", "AI Dual Cool", "Wi-Fi Control"],
    image: "https://images.unsplash.com/photo-1585338107529-13afc25806f9?w=400&h=300&fit=crop",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Window AC",
    brand: "Voltas",
    price: 24999,
    description: "Powerful window AC with copper condenser and anti-dust filter for clean, cool air.",
    type: "cooling",
    capacity: "1.5 Ton",
    rating: 4.2,
    features: ["3 Star Rating", "Copper Condenser", "Anti-Dust Filter", "Sleep Mode"],
    image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    name: "Inverter Split AC",
    brand: "Daikin",
    price: 45000,
    description: "Premium inverter AC with Coanda airflow and Streamer discharge technology.",
    type: "both",
    capacity: "1.8 Ton",
    rating: 4.8,
    features: ["5 Star Rating", "Coanda Airflow", "Streamer Tech", "R-32 Refrigerant"],
    image: "https://images.unsplash.com/photo-1631545806609-78a43e87c4d0?w=400&h=300&fit=crop",
    badge: "Premium",
  },
  {
    id: "4",
    name: "Hot & Cold Split AC",
    brand: "Samsung",
    price: 52000,
    description: "Year-round comfort with powerful heating and cooling. WindFree technology for gentle cooling.",
    type: "both",
    capacity: "1.5 Ton",
    rating: 4.6,
    features: ["Hot & Cold", "WindFree", "Triple Protector Plus", "AI Auto"],
    image: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=400&h=300&fit=crop",
    badge: "Hot & Cold",
  },
  {
    id: "5",
    name: "Portable AC",
    brand: "Blue Star",
    price: 29999,
    description: "Portable cooling solution — no installation needed. Perfect for rentals and small spaces.",
    type: "cooling",
    capacity: "1 Ton",
    rating: 4.0,
    features: ["Portable", "No Installation", "Self-Evaporating", "Remote Control"],
    image: "https://images.unsplash.com/photo-1562176546-25a5aef84d58?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    name: "Tower AC",
    brand: "Hitachi",
    price: 62000,
    description: "Elegant floor-standing tower AC with powerful airflow and tropical compressor.",
    type: "cooling",
    capacity: "2 Ton",
    rating: 4.4,
    features: ["Floor Standing", "Tropical Compressor", "Auto Swing", "Antibacterial Filter"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
  },
  {
    id: "7",
    name: "Cassette AC",
    brand: "Carrier",
    price: 85000,
    description: "Commercial-grade 4-way cassette AC for offices and large spaces. Uniform air distribution.",
    type: "cooling",
    capacity: "3 Ton",
    rating: 4.3,
    features: ["4-Way Airflow", "Commercial Grade", "Auto Restart", "Timer Function"],
    image: "https://images.unsplash.com/photo-1504672281656-e4981d70414b?w=400&h=300&fit=crop",
  },
  {
    id: "8",
    name: "Hot & Cold Inverter AC",
    brand: "LG",
    price: 48500,
    description: "All-season comfort with dual inverter compressor. Heats in winter, cools in summer.",
    type: "both",
    capacity: "1.5 Ton",
    rating: 4.7,
    features: ["Hot & Cold", "Dual Inverter", "4-Way Swing", "Himalaya Cool"],
    image: "https://images.unsplash.com/photo-1585338107529-13afc25806f9?w=400&h=300&fit=crop",
  },
];

export const categories = [
  { name: "Split ACs", type: "cooling" as ProductType, count: products.filter(p => p.name.includes("Split") && p.type === "cooling").length },
  { name: "Window ACs", type: "cooling" as ProductType, count: products.filter(p => p.name.includes("Window")).length },
  { name: "Hot & Cold ACs", type: "both" as ProductType, count: products.filter(p => p.type === "both").length },
  { name: "Portable ACs", type: "cooling" as ProductType, count: products.filter(p => p.name.includes("Portable")).length },
];
