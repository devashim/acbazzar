import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Shield, Wrench, CreditCard, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_NUMBER } from "@/data/products";

interface MideaProduct {
  model: string;
  capacity: string;
  price: number;
}

interface ProductSeries {
  name: string;
  badge?: string;
  products: MideaProduct[];
}

const series: ProductSeries[] = [
  {
    name: "Supreme Inverter Series",
    badge: "Best Seller",
    products: [
      { model: "MSEFBU-12HRFN8", capacity: "1.0 Ton", price: 69000 },
      { model: "MSEFCU-18HRFN8", capacity: "1.5 Ton", price: 99000 },
      { model: "MSEFDU-24HRFN8", capacity: "2.0 Ton", price: 126000 },
    ],
  },
  {
    name: "Xtreme Plus Inverter",
    badge: "Popular",
    products: [
      { model: "MSEZBU-12HRFN8", capacity: "1.0 Ton", price: 75000 },
      { model: "MSEZCU-18HRFN8", capacity: "1.5 Ton", price: 105000 },
      { model: "MSEZDU-24HRFN8", capacity: "2.0 Ton", price: 134000 },
    ],
  },
  {
    name: "Breezeless E",
    badge: "Premium",
    products: [
      { model: "MSCB1BU-12HRFN8", capacity: "1.0 Ton", price: 85000 },
      { model: "MSCB1CU-18HRFN8", capacity: "1.5 Ton", price: 116000 },
    ],
  },
  {
    name: "Penrose Air",
    badge: "Luxury",
    products: [
      { model: "MSXTBU-12HRFN8", capacity: "1.0 Ton", price: 105000 },
    ],
  },
  {
    name: "Cassette / Commercial",
    products: [
      { model: "MCD-18CRN8", capacity: "1.5 Ton", price: 145000 },
      { model: "MCD-24CRN8", capacity: "2.0 Ton", price: 178000 },
      { model: "MCD-36CRN8", capacity: "3.0 Ton", price: 225000 },
      { model: "MCD-48CRN8", capacity: "4.0 Ton", price: 295000 },
    ],
  },
];

const acImage = "https://images.unsplash.com/photo-1585338107529-13afc25806f9?w=600&h=400&fit=crop";

function getWhatsAppProductLink(product: MideaProduct, seriesName: string) {
  const msg = encodeURIComponent(
    `Hi! I'm interested in Midea ${seriesName} - ${product.model} (${product.capacity}) at Rs. ${product.price.toLocaleString("en-NP")}. Please share details!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function SeriesSlider({ s }: { s: ProductSeries }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">{s.name}</h3>
        {s.badge && (
          <Badge className="bg-gradient-cool text-primary-foreground border-0">{s.badge}</Badge>
        )}
      </div>

      <div className="relative group">
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-card p-2 shadow-lg border border-border transition-opacity group-hover:flex md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>

        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {s.products.map((p) => (
            <motion.div
              key={p.model}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="min-w-[260px] max-w-[300px] flex-shrink-0 snap-start rounded-xl border border-border bg-card shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40 bg-cool-light overflow-hidden">
                <img
                  src={acImage}
                  alt={`Midea ${s.name} ${p.model}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="text-xs font-mono">{p.capacity}</Badge>
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">Midea</p>
                <h4 className="font-heading font-semibold text-foreground leading-tight">{s.name}</h4>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{p.model}</p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Capacity:</span>
                  <span className="text-sm font-semibold text-foreground">{p.capacity}</span>
                </div>

                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-xs text-muted-foreground">MRP</p>
                  <p className="text-2xl font-heading font-bold text-primary">
                    Rs. {p.price.toLocaleString("en-NP")}
                  </p>
                </div>

                <a
                  href={getWhatsAppProductLink(p, s.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block"
                >
                  <Button size="sm" className="w-full gap-1.5 bg-[#25D366] text-white hover:bg-[#20bd5a]">
                    <MessageCircle className="h-4 w-4" /> Order on WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-card p-2 shadow-lg border border-border transition-opacity group-hover:flex md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </div>
  );
}

const notes = [
  { icon: Wrench, text: "Installation charges extra" },
  { icon: Wrench, text: "Electrical & civil work extra" },
  { icon: CreditCard, text: "100% advance payment required" },
  { icon: Shield, text: "10 years warranty on inverter compressor" },
  { icon: Award, text: "3 years warranty on Supreme Inverter series" },
];

const MideaProducts = () => {
  const ctaLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in Midea Air Conditioners. Please share pricing & installation details.")}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-cool-light via-background to-primary/5" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 bg-gradient-cool text-primary-foreground border-0 text-sm px-4 py-1">Authorized Dealer</Badge>
            <h1 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
              Midea Air Conditioners
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Explore our complete range of Midea ACs — from budget-friendly Supreme Inverter to premium Penrose Air and commercial Cassette units.
            </p>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
              <Button size="lg" className="gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <Phone className="h-5 w-5" /> Call / WhatsApp for Price & Installation
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Product Series */}
      <section className="container py-12 md:py-16">
        {series.map((s) => (
          <SeriesSlider key={s.name} s={s} />
        ))}
      </section>

      {/* Important Notes */}
      <section className="border-t border-border bg-muted/30 py-12 md:py-16">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Important Notes</h2>
          <div className="mx-auto max-w-2xl grid gap-4">
            {notes.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <n.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium text-foreground">{n.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container py-12 md:py-16 text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Ready to Buy?</h2>
        <p className="text-muted-foreground mb-6">Contact us on WhatsApp for the best deals, installation support, and warranty details.</p>
        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a]">
            <MessageCircle className="h-5 w-5" /> WhatsApp: 9804085156
          </Button>
        </a>
      </section>
    </div>
  );
};

export default MideaProducts;
