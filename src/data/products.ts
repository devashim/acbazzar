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
  // ===== LG =====
  { id: pid(), name: "Split AC", brand: "LG", price: 32500, originalPrice: 38000, description: "5-star inverter split AC with AI dual cool technology for maximum energy savings.", type: "cooling", capacity: "1.5 Ton", rating: 4.5, reviewCount: 234, features: ["5 Star", "Inverter", "AI Dual Cool", "Wi-Fi Control"], image: img(0), badge: "Best Seller", inStock: true },
  { id: pid(), name: "Window AC", brand: "LG", price: 26000, originalPrice: 30000, description: "Compact window AC with copper condenser and ocean black protection.", type: "cooling", capacity: "1 Ton", rating: 4.2, reviewCount: 120, features: ["3 Star", "Copper Condenser", "Auto Clean", "Ocean Black Fin"], image: img(1), inStock: true },
  { id: pid(), name: "Hot & Cold Inverter AC", brand: "LG", price: 48500, originalPrice: 55000, description: "All-season dual inverter with heating and Himalaya Cool for rapid cooling.", type: "both", capacity: "1.5 Ton", rating: 4.7, reviewCount: 201, features: ["Hot & Cold", "Dual Inverter", "4-Way Swing", "Himalaya Cool"], image: img(0), badge: "Top Rated", inStock: true },
  { id: pid(), name: "Super Convertible Split AC", brand: "LG", price: 42000, originalPrice: 48000, description: "6-in-1 convertible AC that adjusts cooling capacity based on room occupancy.", type: "cooling", capacity: "2 Ton", rating: 4.6, reviewCount: 156, features: ["5 Star", "Convertible 6-in-1", "R-32 Refrigerant", "ADC Sensor"], image: img(2), inStock: true },

  // ===== Hyundai =====
  { id: pid(), name: "Split AC", brand: "Hyundai", price: 23999, originalPrice: 28000, description: "Budget-friendly split AC with turbo cooling and anti-bacterial filter.", type: "cooling", capacity: "1 Ton", rating: 4.0, reviewCount: 89, features: ["3 Star", "Turbo Cool", "Anti-Bacterial", "Self Diagnosis"], image: img(3), inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "Hyundai", price: 29500, originalPrice: 34000, description: "Energy-efficient inverter AC with golden fin condenser for durability.", type: "cooling", capacity: "1.5 Ton", rating: 4.1, reviewCount: 112, features: ["5 Star", "Inverter", "Golden Fin", "Sleep Mode"], image: img(0), badge: "Value Pick", inStock: true },
  { id: pid(), name: "Window AC", brand: "Hyundai", price: 19999, originalPrice: 23000, description: "Affordable window AC for small rooms with copper condenser.", type: "cooling", capacity: "1 Ton", rating: 3.9, reviewCount: 67, features: ["3 Star", "Copper Condenser", "Auto Restart", "Timer"], image: img(1), inStock: true },
  { id: pid(), name: "Portable AC", brand: "Hyundai", price: 25999, description: "Portable cooling with no installation. Ideal for renters.", type: "cooling", capacity: "1 Ton", rating: 4.0, reviewCount: 45, features: ["Portable", "Self-Evaporating", "Remote Control", "3-in-1"], image: img(4), inStock: true },

  // ===== Voltas =====
  { id: pid(), name: "Window AC", brand: "Voltas", price: 24999, originalPrice: 28999, description: "Powerful window AC with copper condenser and anti-dust filter.", type: "cooling", capacity: "1.5 Ton", rating: 4.2, reviewCount: 189, features: ["3 Star", "Copper Condenser", "Anti-Dust Filter", "Sleep Mode"], image: img(1), inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "Voltas", price: 33000, originalPrice: 38000, description: "Adjustable inverter technology for consistent cooling and savings.", type: "cooling", capacity: "1.5 Ton", rating: 4.3, reviewCount: 210, features: ["5 Star", "Inverter", "Adjustable Mode", "Steady Cool"], image: img(0), badge: "Popular", inStock: true },
  { id: pid(), name: "Split AC", brand: "Voltas", price: 27500, originalPrice: 32000, description: "All-weather split AC with copper condenser for Indian climates.", type: "cooling", capacity: "1 Ton", rating: 4.1, reviewCount: 145, features: ["3 Star", "All Weather", "Copper", "Turbo Mode"], image: img(2), inStock: true },
  { id: pid(), name: "Hot & Cold Split AC", brand: "Voltas", price: 44000, originalPrice: 50000, description: "Year-round AC with heating and cooling for all seasons.", type: "both", capacity: "1.5 Ton", rating: 4.4, reviewCount: 98, features: ["Hot & Cold", "Inverter", "4-Way Swing", "Auto Restart"], image: img(3), inStock: true },

  // ===== Blue Star =====
  { id: pid(), name: "Portable AC", brand: "Blue Star", price: 29999, originalPrice: 34500, description: "Portable cooling — no installation needed. Perfect for small spaces.", type: "cooling", capacity: "1 Ton", rating: 4.0, reviewCount: 98, features: ["Portable", "No Installation", "Self-Evaporating", "Remote"], image: img(4), inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "Blue Star", price: 36000, originalPrice: 42000, description: "Precision cooling with 5-star inverter and blue fin condenser.", type: "cooling", capacity: "1.5 Ton", rating: 4.4, reviewCount: 175, features: ["5 Star", "Inverter", "Blue Fin", "Turbo Cool"], image: img(0), badge: "Best Seller", inStock: true },
  { id: pid(), name: "Window AC", brand: "Blue Star", price: 22000, originalPrice: 26000, description: "Reliable window AC with copper coils and high ambient cooling.", type: "cooling", capacity: "1 Ton", rating: 4.1, reviewCount: 130, features: ["3 Star", "Copper Coils", "High Ambient", "Auto Restart"], image: img(1), inStock: true },
  { id: pid(), name: "Split AC", brand: "Blue Star", price: 38000, originalPrice: 44000, description: "Commercial-grade split AC with precision temperature control.", type: "cooling", capacity: "2 Ton", rating: 4.3, reviewCount: 88, features: ["5 Star", "Precision Cool", "i-Feel", "Anti-Freeze"], image: img(2), inStock: true },

  // ===== Toshiba =====
  { id: pid(), name: "Inverter Split AC", brand: "Toshiba", price: 35000, originalPrice: 40000, description: "Ultra-quiet inverter AC with plasma ion clean air technology.", type: "cooling", capacity: "1.5 Ton", rating: 4.5, reviewCount: 140, features: ["5 Star", "Inverter", "Plasma Ion", "Ultra Quiet"], image: img(2), badge: "Premium", inStock: true },
  { id: pid(), name: "Split AC", brand: "Toshiba", price: 28000, originalPrice: 32000, description: "Compact split AC with magic coil for corrosion resistance.", type: "cooling", capacity: "1 Ton", rating: 4.2, reviewCount: 95, features: ["3 Star", "Magic Coil", "Fast Cooling", "Timer"], image: img(0), inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "Toshiba", price: 46000, originalPrice: 52000, description: "All-season comfort with heating mode and energy-saving inverter.", type: "both", capacity: "1.5 Ton", rating: 4.4, reviewCount: 78, features: ["Hot & Cold", "Inverter", "Self Clean", "R-32"], image: img(3), inStock: true },
  { id: pid(), name: "Super Power Split AC", brand: "Toshiba", price: 52000, description: "High-capacity AC for large rooms with rapid cooling technology.", type: "cooling", capacity: "2 Ton", rating: 4.3, reviewCount: 60, features: ["5 Star", "Rapid Cool", "8-Pole Motor", "High Ambient"], image: img(5), inStock: true },

  // ===== Panasonic =====
  { id: pid(), name: "Inverter Split AC", brand: "Panasonic", price: 34000, originalPrice: 39000, description: "Smart inverter with nanoe-X technology for cleaner air.", type: "cooling", capacity: "1.5 Ton", rating: 4.4, reviewCount: 167, features: ["5 Star", "Inverter", "nanoe-X", "PM 2.5 Filter"], image: img(0), inStock: true },
  { id: pid(), name: "Split AC", brand: "Panasonic", price: 27000, originalPrice: 31000, description: "Reliable cooling with copper condenser and real-feel temperature.", type: "cooling", capacity: "1 Ton", rating: 4.2, reviewCount: 120, features: ["3 Star", "Copper Condenser", "Real Feel", "Econavi"], image: img(2), inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "Panasonic", price: 47000, originalPrice: 54000, description: "All-season AC with powerful heating and Aerowings blade.", type: "both", capacity: "1.5 Ton", rating: 4.5, reviewCount: 92, features: ["Hot & Cold", "Aerowings", "Inverter", "Miraie IoT"], image: img(3), badge: "Smart", inStock: true },
  { id: pid(), name: "Window AC", brand: "Panasonic", price: 23500, originalPrice: 27000, description: "Budget window AC with stabilizer-free operation.", type: "cooling", capacity: "1.5 Ton", rating: 4.0, reviewCount: 84, features: ["3 Star", "Stabilizer Free", "Auto Restart", "Sleep Mode"], image: img(1), inStock: true },

  // ===== Samsung =====
  { id: pid(), name: "Hot & Cold Split AC", brand: "Samsung", price: 52000, originalPrice: 59000, description: "WindFree technology with 23,000 micro air holes for still cooling.", type: "both", capacity: "1.5 Ton", rating: 4.6, reviewCount: 156, features: ["Hot & Cold", "WindFree", "Triple Protector", "AI Auto"], image: img(3), badge: "Hot & Cold", inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "Samsung", price: 37000, originalPrice: 43000, description: "Digital inverter with convertible 5-in-1 cooling modes.", type: "cooling", capacity: "1.5 Ton", rating: 4.5, reviewCount: 220, features: ["5 Star", "Digital Inverter", "Convertible 5-in-1", "Anti-Bacterial"], image: img(0), badge: "Popular", inStock: true },
  { id: pid(), name: "Split AC", brand: "Samsung", price: 29000, originalPrice: 33000, description: "Fast cooling AC with digital display and long-lasting compressor.", type: "cooling", capacity: "1 Ton", rating: 4.2, reviewCount: 140, features: ["3 Star", "Fast Cooling", "Digital Display", "Easy Filter"], image: img(2), inStock: true },
  { id: pid(), name: "Tower AC", brand: "Samsung", price: 65000, description: "Elegant floor-standing AC with 360° uniform cooling.", type: "cooling", capacity: "2 Ton", rating: 4.4, reviewCount: 55, features: ["Floor Standing", "360° Cooling", "Wind-Free", "SmartThings"], image: img(5), inStock: true },

  // ===== Hitachi =====
  { id: pid(), name: "Tower AC", brand: "Hitachi", price: 62000, originalPrice: 69000, description: "Floor-standing tower AC with tropical compressor and auto swing.", type: "cooling", capacity: "2 Ton", rating: 4.4, reviewCount: 67, features: ["Floor Standing", "Tropical Compressor", "Auto Swing", "Antibacterial"], image: img(5), badge: "Popular", inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "Hitachi", price: 38000, originalPrice: 44000, description: "iCleen technology with expandable inverter for flexible cooling.", type: "cooling", capacity: "1.5 Ton", rating: 4.5, reviewCount: 180, features: ["5 Star", "Expandable Inverter", "iCleen", "Frost Wash"], image: img(0), inStock: true },
  { id: pid(), name: "Window AC", brand: "Hitachi", price: 25000, originalPrice: 29000, description: "Compact window AC with antibacterial filter and fast cooling.", type: "cooling", capacity: "1 Ton", rating: 4.1, reviewCount: 95, features: ["3 Star", "Antibacterial", "Fast Cool", "Copper Condenser"], image: img(1), inStock: true },
  { id: pid(), name: "Kashikoi Split AC", brand: "Hitachi", price: 45000, originalPrice: 52000, description: "Smart AC with IoT connectivity and voice control support.", type: "cooling", capacity: "1.5 Ton", rating: 4.6, reviewCount: 130, features: ["5 Star", "IoT Connected", "Voice Control", "Auto Clean"], image: img(2), badge: "Smart", inStock: true },

  // ===== Daikin =====
  { id: pid(), name: "Inverter Split AC", brand: "Daikin", price: 45000, originalPrice: 52000, description: "Premium Coanda airflow with Streamer discharge for pure air.", type: "both", capacity: "1.8 Ton", rating: 4.8, reviewCount: 312, features: ["5 Star", "Coanda Airflow", "Streamer Tech", "R-32"], image: img(2), badge: "Premium", inStock: true },
  { id: pid(), name: "Split AC", brand: "Daikin", price: 34000, originalPrice: 39000, description: "Reliable split AC with Power Chill and Econo mode.", type: "cooling", capacity: "1.5 Ton", rating: 4.5, reviewCount: 210, features: ["5 Star", "Power Chill", "Econo Mode", "Self Diagnosis"], image: img(0), inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "Daikin", price: 55000, originalPrice: 62000, description: "All-season premium AC with advanced air purification.", type: "both", capacity: "1.5 Ton", rating: 4.7, reviewCount: 145, features: ["Hot & Cold", "Air Purifier", "Flash Streamer", "3D Airflow"], image: img(3), inStock: true },
  { id: pid(), name: "Cassette AC", brand: "Daikin", price: 92000, description: "Commercial 4-way cassette for offices and large halls.", type: "cooling", capacity: "3 Ton", rating: 4.6, reviewCount: 38, features: ["4-Way Airflow", "Commercial", "Auto Restart", "Turbo Mode"], image: img(6), inStock: true },

  // ===== Mitsubishi Electric =====
  { id: pid(), name: "Inverter Split AC", brand: "Mitsubishi Electric", price: 55000, originalPrice: 62000, description: "Japanese engineering with 3D i-See sensor for even cooling.", type: "cooling", capacity: "1.5 Ton", rating: 4.7, reviewCount: 98, features: ["5 Star", "3D i-See Sensor", "Inverter", "Dual Barrier Coating"], image: img(0), badge: "Premium", inStock: true },
  { id: pid(), name: "Split AC", brand: "Mitsubishi Electric", price: 42000, originalPrice: 48000, description: "Heavy-duty split AC built for extreme temperatures up to 54°C.", type: "cooling", capacity: "1.5 Ton", rating: 4.5, reviewCount: 75, features: ["Hyper Heating", "Extreme Temp", "Anti-Allergy", "Auto Vane"], image: img(2), inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "Mitsubishi Electric", price: 65000, originalPrice: 72000, description: "All-season comfort with Zubadan hyper heating technology.", type: "both", capacity: "2 Ton", rating: 4.8, reviewCount: 60, features: ["Zubadan Heating", "Hot & Cold", "Plasma Quad", "Econo Cool"], image: img(3), badge: "Top Rated", inStock: true },
  { id: pid(), name: "Cassette AC", brand: "Mitsubishi Electric", price: 110000, description: "Premium commercial cassette with advanced filtration.", type: "cooling", capacity: "3 Ton", rating: 4.6, reviewCount: 30, features: ["4-Way", "Commercial", "i-See 3D", "Auto Clean"], image: img(6), inStock: true },

  // ===== Whirlpool =====
  { id: pid(), name: "Inverter Split AC", brand: "Whirlpool", price: 32000, originalPrice: 37000, description: "3D cool technology with 6th Sense intellicomfort for smart cooling.", type: "cooling", capacity: "1.5 Ton", rating: 4.3, reviewCount: 160, features: ["5 Star", "3D Cool", "6th Sense", "Inverter"], image: img(0), inStock: true },
  { id: pid(), name: "Window AC", brand: "Whirlpool", price: 21000, originalPrice: 25000, description: "Affordable window AC with stabilizer-free operation.", type: "cooling", capacity: "1 Ton", rating: 4.0, reviewCount: 110, features: ["3 Star", "Stabilizer Free", "Auto Restart", "Turbo Cool"], image: img(1), inStock: true },
  { id: pid(), name: "Split AC", brand: "Whirlpool", price: 28000, originalPrice: 32000, description: "Magicool technology for extreme summer performance.", type: "cooling", capacity: "1.5 Ton", rating: 4.1, reviewCount: 135, features: ["3 Star", "Magicool", "Copper", "Anti-Bacterial"], image: img(2), badge: "Value Pick", inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "Whirlpool", price: 43000, originalPrice: 49000, description: "All-season AC with 3D cool heating for winters.", type: "both", capacity: "1.5 Ton", rating: 4.2, reviewCount: 72, features: ["Hot & Cold", "3D Cool", "6th Sense", "Auto Clean"], image: img(3), inStock: true },

  // ===== CG (Crompton Greaves) =====
  { id: pid(), name: "Split AC", brand: "CG", price: 22000, originalPrice: 26000, description: "Budget-friendly split AC with copper condenser.", type: "cooling", capacity: "1 Ton", rating: 3.9, reviewCount: 65, features: ["3 Star", "Copper Condenser", "Auto Restart", "Timer"], image: img(0), inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "CG", price: 28000, originalPrice: 33000, description: "Inverter technology for energy savings and quiet operation.", type: "cooling", capacity: "1.5 Ton", rating: 4.1, reviewCount: 80, features: ["5 Star", "Inverter", "Low Noise", "R-32"], image: img(2), inStock: true },
  { id: pid(), name: "Window AC", brand: "CG", price: 17500, originalPrice: 21000, description: "Compact and affordable window AC for small rooms.", type: "cooling", capacity: "1 Ton", rating: 3.8, reviewCount: 55, features: ["3 Star", "Compact", "Auto Swing", "Dust Filter"], image: img(1), badge: "Budget", inStock: true },
  { id: pid(), name: "Split AC", brand: "CG", price: 35000, description: "High-capacity split AC for large living rooms.", type: "cooling", capacity: "2 Ton", rating: 4.0, reviewCount: 42, features: ["3 Star", "High Capacity", "Copper Coils", "Turbo Mode"], image: img(5), inStock: true },

  // ===== Himstar =====
  { id: pid(), name: "Split AC", brand: "Himstar", price: 20000, originalPrice: 24000, description: "Affordable split AC with fast cooling and copper condenser.", type: "cooling", capacity: "1 Ton", rating: 3.8, reviewCount: 48, features: ["3 Star", "Fast Cool", "Copper", "Auto Restart"], image: img(0), inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "Himstar", price: 26000, originalPrice: 30000, description: "Energy-saving inverter with golden fin condenser.", type: "cooling", capacity: "1.5 Ton", rating: 4.0, reviewCount: 62, features: ["5 Star", "Inverter", "Golden Fin", "Sleep Mode"], image: img(2), inStock: true },
  { id: pid(), name: "Window AC", brand: "Himstar", price: 16000, originalPrice: 19000, description: "Budget window AC for basic cooling needs.", type: "cooling", capacity: "1 Ton", rating: 3.7, reviewCount: 35, features: ["3 Star", "Basic Cool", "Dust Filter", "Timer"], image: img(1), badge: "Budget", inStock: true },
  { id: pid(), name: "Split AC", brand: "Himstar", price: 32000, description: "High-capacity cooling for medium to large rooms.", type: "cooling", capacity: "1.5 Ton", rating: 3.9, reviewCount: 40, features: ["3 Star", "High Flow", "Anti-Bacterial", "Remote"], image: img(3), inStock: true },

  // ===== Sansui =====
  { id: pid(), name: "Inverter Split AC", brand: "Sansui", price: 25000, originalPrice: 29000, description: "Value inverter AC with copper condenser and 4-way swing.", type: "cooling", capacity: "1 Ton", rating: 4.0, reviewCount: 78, features: ["5 Star", "Inverter", "Copper", "4-Way Swing"], image: img(0), inStock: true },
  { id: pid(), name: "Split AC", brand: "Sansui", price: 30000, originalPrice: 35000, description: "Powerful split AC with turbo cool and dust filter.", type: "cooling", capacity: "1.5 Ton", rating: 4.1, reviewCount: 90, features: ["3 Star", "Turbo Cool", "Dust Filter", "Auto Clean"], image: img(2), badge: "Value Pick", inStock: true },
  { id: pid(), name: "Window AC", brand: "Sansui", price: 18500, originalPrice: 22000, description: "Affordable window AC with anti-dust technology.", type: "cooling", capacity: "1 Ton", rating: 3.9, reviewCount: 55, features: ["3 Star", "Anti-Dust", "Auto Restart", "Sleep Mode"], image: img(1), inStock: true },
  { id: pid(), name: "Portable AC", brand: "Sansui", price: 23000, description: "Compact portable AC for flexible room-to-room cooling.", type: "cooling", capacity: "1 Ton", rating: 3.8, reviewCount: 32, features: ["Portable", "Compact", "Remote Control", "3-in-1"], image: img(4), inStock: true },

  // ===== TCL =====
  { id: pid(), name: "Inverter Split AC", brand: "TCL", price: 27000, originalPrice: 32000, description: "Smart inverter with gentle breeze and Vitamin C filter.", type: "cooling", capacity: "1.5 Ton", rating: 4.1, reviewCount: 95, features: ["5 Star", "Inverter", "Vitamin C Filter", "Gentle Breeze"], image: img(0), inStock: true },
  { id: pid(), name: "Split AC", brand: "TCL", price: 22500, originalPrice: 26000, description: "Budget split AC with silver ion filter and fast cooling.", type: "cooling", capacity: "1 Ton", rating: 4.0, reviewCount: 70, features: ["3 Star", "Silver Ion", "Fast Cool", "Timer"], image: img(2), inStock: true },
  { id: pid(), name: "Window AC", brand: "TCL", price: 17000, originalPrice: 20000, description: "Compact window AC for single rooms.", type: "cooling", capacity: "1 Ton", rating: 3.8, reviewCount: 45, features: ["3 Star", "Compact", "Auto Swing", "Dust Filter"], image: img(1), badge: "Budget", inStock: true },
  { id: pid(), name: "Smart Split AC", brand: "TCL", price: 33000, originalPrice: 38000, description: "IoT-enabled smart AC with voice assistant compatibility.", type: "cooling", capacity: "1.5 Ton", rating: 4.2, reviewCount: 58, features: ["5 Star", "IoT Enabled", "Voice Control", "Wi-Fi"], image: img(3), badge: "Smart", inStock: true },

  // ===== Chigo =====
  { id: pid(), name: "Split AC", brand: "Chigo", price: 19500, originalPrice: 23000, description: "Affordable cooling with copper condenser and auto restart.", type: "cooling", capacity: "1 Ton", rating: 3.8, reviewCount: 42, features: ["3 Star", "Copper Condenser", "Auto Restart", "Timer"], image: img(0), inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "Chigo", price: 25000, originalPrice: 29000, description: "Inverter efficiency at budget pricing with golden fin.", type: "cooling", capacity: "1.5 Ton", rating: 4.0, reviewCount: 55, features: ["5 Star", "Inverter", "Golden Fin", "Sleep Mode"], image: img(2), badge: "Budget", inStock: true },
  { id: pid(), name: "Window AC", brand: "Chigo", price: 15500, originalPrice: 18000, description: "Most affordable window AC with basic cooling features.", type: "cooling", capacity: "1 Ton", rating: 3.7, reviewCount: 30, features: ["3 Star", "Basic", "Dust Filter", "Auto Swing"], image: img(1), inStock: true },
  { id: pid(), name: "Portable AC", brand: "Chigo", price: 21000, description: "Budget portable AC — just plug in and cool.", type: "cooling", capacity: "1 Ton", rating: 3.8, reviewCount: 28, features: ["Portable", "Plug & Cool", "Remote", "Timer"], image: img(4), inStock: true },

  // ===== Della =====
  { id: pid(), name: "Inverter Split AC", brand: "Della", price: 24000, originalPrice: 28000, description: "Smart inverter with energy-saving mode and quick cool.", type: "cooling", capacity: "1 Ton", rating: 4.0, reviewCount: 52, features: ["5 Star", "Inverter", "Quick Cool", "Energy Saver"], image: img(0), inStock: true },
  { id: pid(), name: "Split AC", brand: "Della", price: 29500, originalPrice: 34000, description: "Reliable cooling with copper condenser and turbo mode.", type: "cooling", capacity: "1.5 Ton", rating: 4.1, reviewCount: 68, features: ["3 Star", "Copper", "Turbo Mode", "Auto Clean"], image: img(2), inStock: true },
  { id: pid(), name: "Window AC", brand: "Della", price: 18000, originalPrice: 21000, description: "Compact window AC with honeycomb cooling pads.", type: "cooling", capacity: "1 Ton", rating: 3.9, reviewCount: 40, features: ["3 Star", "Honeycomb", "Dust Filter", "Timer"], image: img(1), inStock: true },
  { id: pid(), name: "Portable AC", brand: "Della", price: 22500, description: "Versatile portable AC with dehumidifier function.", type: "cooling", capacity: "1 Ton", rating: 4.0, reviewCount: 35, features: ["Portable", "Dehumidifier", "Remote", "Castor Wheels"], image: img(4), badge: "Versatile", inStock: true },

  // ===== Alux =====
  { id: pid(), name: "Split AC", brand: "Alux", price: 21000, originalPrice: 25000, description: "Value split AC with copper condenser and clean air filter.", type: "cooling", capacity: "1 Ton", rating: 3.9, reviewCount: 38, features: ["3 Star", "Copper", "Clean Air", "Auto Restart"], image: img(0), inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "Alux", price: 27000, originalPrice: 31000, description: "Inverter technology for consistent cooling at low power.", type: "cooling", capacity: "1.5 Ton", rating: 4.0, reviewCount: 48, features: ["5 Star", "Inverter", "Low Power", "Sleep Mode"], image: img(2), inStock: true },
  { id: pid(), name: "Window AC", brand: "Alux", price: 16500, originalPrice: 19500, description: "Budget window AC for single rooms and offices.", type: "cooling", capacity: "1 Ton", rating: 3.7, reviewCount: 25, features: ["3 Star", "Compact", "Dust Filter", "Timer"], image: img(1), inStock: true },
  { id: pid(), name: "Split AC", brand: "Alux", price: 34000, description: "High-capacity AC for large spaces with strong airflow.", type: "cooling", capacity: "2 Ton", rating: 4.0, reviewCount: 30, features: ["3 Star", "Strong Airflow", "Copper", "Turbo"], image: img(5), inStock: true },

  // ===== Gree =====
  { id: pid(), name: "Inverter Split AC", brand: "Gree", price: 30000, originalPrice: 35000, description: "World's largest AC manufacturer. G10 inverter with silent operation.", type: "cooling", capacity: "1.5 Ton", rating: 4.3, reviewCount: 125, features: ["5 Star", "G10 Inverter", "Ultra Silent", "R-32"], image: img(0), badge: "Popular", inStock: true },
  { id: pid(), name: "Split AC", brand: "Gree", price: 24000, originalPrice: 28000, description: "Reliable split AC with cold plasma technology.", type: "cooling", capacity: "1 Ton", rating: 4.1, reviewCount: 90, features: ["3 Star", "Cold Plasma", "Copper", "Auto Clean"], image: img(2), inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "Gree", price: 42000, originalPrice: 48000, description: "All-season AC with powerful heating up to -15°C outside.", type: "both", capacity: "1.5 Ton", rating: 4.4, reviewCount: 65, features: ["Hot & Cold", "Inverter", "Wide Angle", "Self Diagnosis"], image: img(3), inStock: true },
  { id: pid(), name: "Cassette AC", brand: "Gree", price: 78000, description: "Commercial 4-way cassette for offices and showrooms.", type: "cooling", capacity: "2 Ton", rating: 4.2, reviewCount: 28, features: ["4-Way", "Commercial", "Auto Restart", "Timer"], image: img(6), inStock: true },

  // ===== Hisense =====
  { id: pid(), name: "Inverter Split AC", brand: "Hisense", price: 29000, originalPrice: 34000, description: "Smart comfort with iFloat technology and Wi-Fi control.", type: "cooling", capacity: "1.5 Ton", rating: 4.2, reviewCount: 105, features: ["5 Star", "iFloat", "Wi-Fi", "Inverter"], image: img(0), inStock: true },
  { id: pid(), name: "Split AC", brand: "Hisense", price: 23000, originalPrice: 27000, description: "Budget split AC with copper condenser and fast cooling.", type: "cooling", capacity: "1 Ton", rating: 4.0, reviewCount: 75, features: ["3 Star", "Copper", "Fast Cool", "Auto Restart"], image: img(2), inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "Hisense", price: 40000, originalPrice: 46000, description: "Year-round comfort with efficient heating and cooling.", type: "both", capacity: "1.5 Ton", rating: 4.3, reviewCount: 55, features: ["Hot & Cold", "Inverter", "4-Way Swing", "Self Clean"], image: img(3), badge: "All Season", inStock: true },
  { id: pid(), name: "Window AC", brand: "Hisense", price: 20000, originalPrice: 24000, description: "Efficient window AC with stabilizer-free operation.", type: "cooling", capacity: "1 Ton", rating: 3.9, reviewCount: 48, features: ["3 Star", "Stabilizer Free", "Dust Filter", "Sleep Mode"], image: img(1), inStock: true },

  // ===== MBO =====
  { id: pid(), name: "Split AC", brand: "MBO", price: 19000, originalPrice: 22000, description: "Budget-friendly split AC for everyday cooling needs.", type: "cooling", capacity: "1 Ton", rating: 3.8, reviewCount: 35, features: ["3 Star", "Copper", "Auto Restart", "Timer"], image: img(0), inStock: true },
  { id: pid(), name: "Inverter Split AC", brand: "MBO", price: 24500, originalPrice: 28000, description: "Inverter AC with energy savings and quiet operation.", type: "cooling", capacity: "1.5 Ton", rating: 3.9, reviewCount: 42, features: ["5 Star", "Inverter", "Low Noise", "Sleep Mode"], image: img(2), inStock: true },
  { id: pid(), name: "Window AC", brand: "MBO", price: 15000, originalPrice: 18000, description: "Most affordable window AC option with decent cooling.", type: "cooling", capacity: "1 Ton", rating: 3.6, reviewCount: 22, features: ["3 Star", "Basic", "Dust Filter", "Auto Swing"], image: img(1), badge: "Budget", inStock: true },
  { id: pid(), name: "Portable AC", brand: "MBO", price: 20000, description: "Budget portable cooling for any room.", type: "cooling", capacity: "1 Ton", rating: 3.7, reviewCount: 18, features: ["Portable", "No Install", "Remote", "Timer"], image: img(4), inStock: true },

  // ===== Midea =====
  { id: pid(), name: "Inverter Split AC", brand: "Midea", price: 31000, originalPrice: 36000, description: "Forest-fresh technology with 5-star inverter efficiency.", type: "cooling", capacity: "1.5 Ton", rating: 4.3, reviewCount: 140, features: ["5 Star", "Inverter", "Forest Fresh", "Self Clean"], image: img(0), inStock: true },
  { id: pid(), name: "Split AC", brand: "Midea", price: 24000, originalPrice: 28000, description: "Reliable split AC with copper condenser and turbo mode.", type: "cooling", capacity: "1 Ton", rating: 4.1, reviewCount: 98, features: ["3 Star", "Copper", "Turbo Mode", "Dust Filter"], image: img(2), inStock: true },
  { id: pid(), name: "Cassette AC", brand: "Midea", price: 85000, description: "Commercial 4-way cassette for offices and large spaces.", type: "cooling", capacity: "3 Ton", rating: 4.3, reviewCount: 45, features: ["4-Way", "Commercial", "Auto Restart", "Timer"], image: img(6), inStock: true },
  { id: pid(), name: "Hot & Cold AC", brand: "Midea", price: 44000, originalPrice: 50000, description: "All-season comfort with heating and dual inverter.", type: "both", capacity: "1.5 Ton", rating: 4.2, reviewCount: 72, features: ["Hot & Cold", "Dual Inverter", "4-Way Swing", "Self Clean"], image: img(3), inStock: true },
];

export const reviews: Review[] = [
  { id: "r1", productId: "1", name: "Rahul Sharma", rating: 5, comment: "Excellent cooling even at 48°C. Very silent operation. Best purchase this summer!", date: "2026-02-15" },
  { id: "r2", productId: "1", name: "Priya Gupta", rating: 4, comment: "Great AC with Wi-Fi control. Installation was smooth. Slightly noisy on turbo mode.", date: "2026-01-20" },
  { id: "r3", productId: "33", name: "Anil Kumar", rating: 5, comment: "Daikin quality is unmatched. The Coanda airflow is a game-changer. Worth every rupee.", date: "2026-03-01" },
  { id: "r4", productId: "25", name: "Sneha Patel", rating: 5, comment: "Perfect for Mumbai winters and summers. WindFree mode is so comfortable!", date: "2026-02-28" },
  { id: "r5", productId: "3", name: "Vikram Singh", rating: 5, comment: "Using this in Shimla. Heating is powerful enough for -2°C winters. Highly recommend.", date: "2026-03-10" },
  { id: "r6", productId: "9", name: "Deepak Joshi", rating: 4, comment: "Best window AC in this range. Cools the room in 10 minutes flat.", date: "2026-01-15" },
  { id: "r7", productId: "29", name: "Meena Reddy", rating: 4, comment: "Looks stunning in my living room. Powerful cooling for a 300 sq ft hall.", date: "2026-02-05" },
  { id: "r8", productId: "13", name: "Arjun Nair", rating: 4, comment: "Perfect for my rented apartment. Easy to move between rooms. A bit noisy though.", date: "2026-03-18" },
];

export const brands = [
  "LG", "Hyundai", "Voltas", "Blue Star", "Toshiba", "Panasonic", "Samsung",
  "Hitachi", "Daikin", "Mitsubishi Electric", "Whirlpool", "CG", "Himstar",
  "Sansui", "TCL", "Chigo", "Della", "Alux", "Gree", "Hisense", "MBO", "Midea",
];
export const capacities = [...new Set(products.map(p => p.capacity))];

export const categories = [
  { name: "Split ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Split") && p.type === "cooling").length },
  { name: "Window ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Window")).length },
  { name: "Hot & Cold ACs", type: "both" as ProductType, icon: "sun", count: products.filter(p => p.type === "both").length },
  { name: "Portable ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Portable")).length },
  { name: "Tower ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Tower")).length },
  { name: "Commercial ACs", type: "cooling" as ProductType, icon: "snowflake", count: products.filter(p => p.name.includes("Cassette")).length },
];

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(p => p.brand === brand);
}
