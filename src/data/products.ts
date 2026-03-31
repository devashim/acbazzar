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

export const WHATSAPP_NUMBER = "9779804085156";

export function getWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Hi! I want to buy ${product.brand} ${product.name} ${product.capacity} for ₹${product.price.toLocaleString("en-IN")}. Please confirm the order!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getWhatsAppGeneralLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about your AC products.")}`;
}

const acImages = [
  "https://images.unsplash.com/photo-1585338107529-13afc25806f9?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1631545806609-78a43e87c4d0?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1562176546-25a5aef84d58?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504672281656-e4981d70414b?w=600&h=400&fit=crop",
];

function img(index: number) {
  return acImages[index % acImages.length];
}

let nextId = 1;
function pid() { return String(nextId++); }

export const products: Product[] = [
  // ===== TOSOT =====
  { id: pid(), name: "Inverter Split AC", brand: "TOSOT", price: 28000, originalPrice: 33000, description: "Energy-efficient inverter split AC with rapid cooling and ultra-quiet operation.", type: "cooling", capacity: "1 Ton", rating: 4.3, reviewCount: 95, features: ["5 Star", "Inverter", "Rapid Cool", "Ultra Quiet"], image: img(0), badge: "Best Seller", inStock: true },
  { id: pid(), name: "Split AC", brand: "TOSOT", price: 34000, originalPrice: 39000, description: "High-performance split AC with copper condenser and 4-way swing.", type: "cooling", capacity: "1.5 Ton", rating: 4.4, reviewCount: 120, features: ["5 Star", "Copper Condenser", "4-Way Swing", "Self Clean"], image: img(2), inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "TOSOT", price: 42000, originalPrice: 48000, description: "All-season comfort with powerful heating and energy-saving inverter.", type: "both", capacity: "1.5 Ton", rating: 4.5, reviewCount: 88, features: ["Hot & Cold", "Inverter", "Smart Mode", "Auto Restart"], image: img(3), badge: "All Season", inStock: true },
  { id: pid(), name: "Window AC", brand: "TOSOT", price: 20000, originalPrice: 24000, description: "Compact window AC with turbo cool and dust filter.", type: "cooling", capacity: "1 Ton", rating: 4.1, reviewCount: 60, features: ["3 Star", "Turbo Cool", "Dust Filter", "Timer"], image: img(1), inStock: true },

  // ===== MBO =====
  { id: pid(), name: "Split AC", brand: "MBO", price: 19000, originalPrice: 22000, description: "Budget-friendly split AC for everyday cooling needs.", type: "cooling", capacity: "1 Ton", rating: 3.8, reviewCount: 35, features: ["3 Star", "Copper", "Auto Restart", "Timer"], image: img(0), inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "MBO", price: 24500, originalPrice: 28000, description: "Inverter AC with energy savings and quiet operation.", type: "cooling", capacity: "1.5 Ton", rating: 3.9, reviewCount: 42, features: ["5 Star", "Inverter", "Low Noise", "Sleep Mode"], image: img(2), badge: "Value Pick", inStock: true },
  { id: pid(), name: "Window AC", brand: "MBO", price: 15000, originalPrice: 18000, description: "Most affordable window AC option with decent cooling.", type: "cooling", capacity: "1 Ton", rating: 3.6, reviewCount: 22, features: ["3 Star", "Basic", "Dust Filter", "Auto Swing"], image: img(1), badge: "Budget", inStock: true },
  { id: pid(), name: "Portable AC", brand: "MBO", price: 20000, description: "Budget portable cooling for any room.", type: "cooling", capacity: "1 Ton", rating: 3.7, reviewCount: 18, features: ["Portable", "No Install", "Remote", "Timer"], image: img(4), inStock: true },

  // ===== Midea — Supreme Inverter Series =====
  { id: pid(), name: "Supreme Inverter 1.0T", brand: "Midea", price: 69000, description: "Supreme Inverter series with efficient cooling and 10-year compressor warranty.", type: "both", capacity: "1 Ton", rating: 4.4, reviewCount: 120, features: ["Inverter", "Hot & Cold", "Self Clean", "R-32 Gas"], image: img(0), badge: "Best Seller", inStock: true, specifications: { "Model": "MSEFBU-12HRFN8" } },
  { id: pid(), name: "Supreme Inverter 1.5T", brand: "Midea", price: 99000, description: "Supreme Inverter with powerful 1.5 Ton capacity for medium to large rooms.", type: "both", capacity: "1.5 Ton", rating: 4.5, reviewCount: 95, features: ["Inverter", "Hot & Cold", "Self Clean", "Turbo Mode"], image: img(2), inStock: true, specifications: { "Model": "MSEFCU-18HRFN8" } },
  { id: pid(), name: "Supreme Inverter 2.0T", brand: "Midea", price: 126000, description: "Supreme Inverter heavy-duty 2 Ton for large halls and offices.", type: "both", capacity: "2 Ton", rating: 4.5, reviewCount: 68, features: ["Inverter", "Hot & Cold", "4-Way Swing", "Auto Restart"], image: img(3), inStock: true, specifications: { "Model": "MSEFDU-24HRFN8" } },

  // ===== Midea — Xtreme Plus Inverter =====
  { id: pid(), name: "Xtreme Plus Inverter 1.0T", brand: "Midea", price: 75000, description: "Xtreme Plus Inverter with enhanced cooling and energy efficiency.", type: "both", capacity: "1 Ton", rating: 4.3, reviewCount: 88, features: ["Inverter", "Hot & Cold", "Rapid Cool", "Low Noise"], image: img(0), badge: "Popular", inStock: true, specifications: { "Model": "MSEZBU-12HRFN8" } },
  { id: pid(), name: "Xtreme Plus Inverter 1.5T", brand: "Midea", price: 105000, description: "Xtreme Plus 1.5 Ton with dual inverter and smart features.", type: "both", capacity: "1.5 Ton", rating: 4.4, reviewCount: 72, features: ["Dual Inverter", "Hot & Cold", "Smart Mode", "Sleep Mode"], image: img(2), inStock: true, specifications: { "Model": "MSEZCU-18HRFN8" } },
  { id: pid(), name: "Xtreme Plus Inverter 2.0T", brand: "Midea", price: 134000, description: "Xtreme Plus heavy-duty 2 Ton for large spaces.", type: "both", capacity: "2 Ton", rating: 4.5, reviewCount: 55, features: ["Dual Inverter", "Hot & Cold", "4-Way Swing", "Turbo Mode"], image: img(3), inStock: true, specifications: { "Model": "MSEZDU-24HRFN8" } },

  // ===== Midea — Breezeless E =====
  { id: pid(), name: "Breezeless E 1.0T", brand: "Midea", price: 85000, description: "Breezeless E technology for draft-free comfort and even cooling.", type: "both", capacity: "1 Ton", rating: 4.5, reviewCount: 65, features: ["Breezeless", "Inverter", "Hot & Cold", "Self Clean"], image: img(0), badge: "Premium", inStock: true, specifications: { "Model": "MSCB1BU-12HRFN8" } },
  { id: pid(), name: "Breezeless E 1.5T", brand: "Midea", price: 116000, description: "Breezeless E 1.5 Ton for premium draft-free comfort.", type: "both", capacity: "1.5 Ton", rating: 4.6, reviewCount: 48, features: ["Breezeless", "Inverter", "Hot & Cold", "4-Way Swing"], image: img(2), inStock: true, specifications: { "Model": "MSCB1CU-18HRFN8" } },

  // ===== Midea — Penrose Air =====
  { id: pid(), name: "Penrose Air 1.0T", brand: "Midea", price: 105000, description: "Luxury Penrose Air with premium design and advanced air purification.", type: "both", capacity: "1 Ton", rating: 4.7, reviewCount: 40, features: ["Luxury Design", "Air Purifier", "Inverter", "Hot & Cold"], image: img(0), badge: "Luxury", inStock: true, specifications: { "Model": "MSXTBU-12HRFN8" } },

  // ===== Midea — Cassette / Commercial =====
  { id: pid(), name: "Cassette AC 1.5T", brand: "Midea", price: 145000, description: "Commercial cassette AC for offices and shops.", type: "cooling", capacity: "1.5 Ton", rating: 4.3, reviewCount: 35, features: ["4-Way Airflow", "Commercial", "Auto Restart", "Timer"], image: img(6), inStock: true, specifications: { "Model": "MCD-18CRN8" } },
  { id: pid(), name: "Cassette AC 2.0T", brand: "Midea", price: 178000, description: "Commercial cassette for medium-large offices.", type: "cooling", capacity: "2 Ton", rating: 4.4, reviewCount: 28, features: ["4-Way Airflow", "Commercial", "Turbo Mode", "Self Diagnosis"], image: img(6), inStock: true, specifications: { "Model": "MCD-24CRN8" } },
  { id: pid(), name: "Cassette AC 3.0T", brand: "Midea", price: 225000, description: "Heavy-duty 3 Ton cassette for large commercial spaces.", type: "cooling", capacity: "3 Ton", rating: 4.5, reviewCount: 22, features: ["4-Way Airflow", "Commercial", "Auto Clean", "R-32 Gas"], image: img(6), inStock: true, specifications: { "Model": "MCD-36CRN8" } },
  { id: pid(), name: "Cassette AC 4.0T", brand: "Midea", price: 295000, description: "Industrial-grade 4 Ton cassette for halls and warehouses.", type: "cooling", capacity: "4 Ton", rating: 4.4, reviewCount: 15, features: ["4-Way Airflow", "Commercial", "Heavy Duty", "Auto Restart"], image: img(6), inStock: true, specifications: { "Model": "MCD-48CRN8" } },

  // ===== Daikin =====
  { id: pid(), name: "Inverter Split AC", brand: "Daikin", price: 45000, originalPrice: 52000, description: "Premium Coanda airflow with Streamer discharge for pure air.", type: "both", capacity: "1.8 Ton", rating: 4.8, reviewCount: 312, features: ["5 Star", "Coanda Airflow", "Streamer Tech", "R-32"], image: img(2), badge: "Premium", inStock: true },
  { id: pid(), name: "Split AC", brand: "Daikin", price: 34000, originalPrice: 39000, description: "Reliable split AC with Power Chill and Econo mode.", type: "cooling", capacity: "1.5 Ton", rating: 4.5, reviewCount: 210, features: ["5 Star", "Power Chill", "Econo Mode", "Self Diagnosis"], image: img(0), inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "Daikin", price: 55000, originalPrice: 62000, description: "All-season premium AC with advanced air purification.", type: "both", capacity: "1.5 Ton", rating: 4.7, reviewCount: 145, features: ["Hot & Cold", "Air Purifier", "Flash Streamer", "3D Airflow"], image: img(3), inStock: true },
  { id: pid(), name: "Cassette AC", brand: "Daikin", price: 92000, description: "Commercial 4-way cassette for offices and large halls.", type: "cooling", capacity: "3 Ton", rating: 4.6, reviewCount: 38, features: ["4-Way Airflow", "Commercial", "Auto Restart", "Turbo Mode"], image: img(6), inStock: true },

  // ===== Mitsubishi =====
  { id: pid(), name: "Inverter Split AC", brand: "Mitsubishi", price: 55000, originalPrice: 62000, description: "Japanese engineering with 3D i-See sensor for even cooling.", type: "cooling", capacity: "1.5 Ton", rating: 4.7, reviewCount: 98, features: ["5 Star", "3D i-See Sensor", "Inverter", "Dual Barrier Coating"], image: img(0), badge: "Premium", inStock: true },
  { id: pid(), name: "Split AC", brand: "Mitsubishi", price: 42000, originalPrice: 48000, description: "Heavy-duty split AC built for extreme temperatures up to 54°C.", type: "cooling", capacity: "1.5 Ton", rating: 4.5, reviewCount: 75, features: ["Hyper Heating", "Extreme Temp", "Anti-Allergy", "Auto Vane"], image: img(2), inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "Mitsubishi", price: 65000, originalPrice: 72000, description: "All-season comfort with Zubadan hyper heating technology.", type: "both", capacity: "2 Ton", rating: 4.8, reviewCount: 60, features: ["Zubadan Heating", "Hot & Cold", "Plasma Quad", "Econo Cool"], image: img(3), badge: "Top Rated", inStock: true },
  { id: pid(), name: "Cassette AC", brand: "Mitsubishi", price: 110000, description: "Premium commercial cassette with advanced filtration.", type: "cooling", capacity: "3 Ton", rating: 4.6, reviewCount: 30, features: ["4-Way", "Commercial", "i-See 3D", "Auto Clean"], image: img(6), inStock: true },
];

export const reviews: Review[] = [
  { id: "r1", productId: "1", name: "Rahul Sharma", rating: 5, comment: "Excellent cooling even at 48°C. Very silent operation. Best purchase this summer!", date: "2026-02-15" },
  { id: "r2", productId: "1", name: "Priya Gupta", rating: 4, comment: "Great AC with rapid cooling. Installation was smooth. Slightly noisy on turbo mode.", date: "2026-01-20" },
  { id: "r3", productId: "13", name: "Anil Kumar", rating: 5, comment: "Daikin quality is unmatched. The Coanda airflow is a game-changer. Worth every rupee.", date: "2026-03-01" },
  { id: "r4", productId: "9", name: "Sneha Patel", rating: 5, comment: "Midea inverter is superb. Forest Fresh technology keeps the air clean!", date: "2026-02-28" },
  { id: "r5", productId: "3", name: "Vikram Singh", rating: 5, comment: "Using this TOSOT Hot & Cold in winter. Heating is powerful enough. Highly recommend.", date: "2026-03-10" },
  { id: "r6", productId: "17", name: "Deepak Joshi", rating: 4, comment: "Mitsubishi engineering is top notch. Cools the room in minutes.", date: "2026-01-15" },
  { id: "r7", productId: "5", name: "Meena Reddy", rating: 4, comment: "MBO is great value for money. Perfect for a budget setup.", date: "2026-02-05" },
  { id: "r8", productId: "15", name: "Arjun Nair", rating: 4, comment: "Daikin Hot & Cold is perfect for all seasons. Premium build quality.", date: "2026-03-18" },
];

export const brands = ["TOSOT", "MBO", "Midea", "Daikin", "Mitsubishi"];
export const capacities = [...new Set(products.map(p => p.capacity))];

export const categories = [
  { name: "Split ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Split") && p.type === "cooling").length },
  { name: "Window ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Window")).length },
  { name: "Hot & Cold ACs", type: "both" as ProductType, icon: "sun", count: products.filter(p => p.type === "both").length },
  { name: "Portable ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Portable")).length },
  { name: "Cassette ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Cassette")).length },
];

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(p => p.brand === brand);
}
