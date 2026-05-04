import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Headphones, MessageCircle, Star, Award, ThumbsUp, Search, Flame, TrendingUp, Sparkles, Heart, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BrandSection from "@/components/BrandSection";
import ProductCarousel from "@/components/ProductCarousel";
import HeroSlider from "@/components/HeroSlider";
import PromoBanner from "@/components/PromoBanner";
import PartnerBrandsSlider from "@/components/PartnerBrandsSlider";
import { products, brands, getWhatsAppGeneralLink, getProductsByBrand } from "@/data/products";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const acTypeOptions = [
  { label: "Split AC", value: "split" },
  { label: "Window AC", value: "window" },
  { label: "Portable AC", value: "portable" },
  { label: "Cassette AC", value: "cassette" },
  { label: "Hot & Cold AC", value: "both" },
];

const capacityOptions = [
  { label: "1 Ton", value: "1ton" },
  { label: "1.5 Ton", value: "1.5ton" },
  { label: "2 Ton", value: "2ton" },
];

const Index = () => {
  const navigate = useNavigate();
  const [filterBrand, setFilterBrand] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterCapacity, setFilterCapacity] = useState("");
  // Smart sections derived from product data
  const smartSections = useMemo(() => {
    const sorted = [...products];
    const deals = sorted
      .filter((p) => p.originalPrice && p.originalPrice > p.price)
      .sort((a, b) => ((b.originalPrice! - b.price) / b.originalPrice!) - ((a.originalPrice! - a.price) / a.originalPrice!))
      .slice(0, 10);
    const bestSellers = sorted
      .filter((p) => p.badge === "Best Seller")
      .concat([...sorted].sort((a, b) => b.reviewCount - a.reviewCount))
      .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i)
      .slice(0, 10);
    const trending = [...sorted].sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount).slice(0, 10);
    const newArrivals = [...sorted].reverse().slice(0, 10);
    const recommended = [...sorted].sort((a, b) => b.rating - a.rating).slice(0, 10);
    return { deals, bestSellers, trending, newArrivals, recommended };
  }, []);

  const handleFindAC = () => {
    const params = new URLSearchParams();
    if (filterBrand) params.set("brand", filterBrand);
    if (filterType) params.set("type", filterType);
    if (filterCapacity) params.set("capacity", filterCapacity);
    navigate(`/products?${params.toString()}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Promotional Banner */}
      <PromoBanner />

      {/* Smart Product Sections */}
      <section className="py-12 md:py-16">
        <div className="container space-y-14 md:space-y-16">
          <ProductCarousel
            eyebrow="Limited Time"
            title="Exciting Offers / Deals of the Day"
            subtitle="Biggest discounts, hand-picked for you"
            icon={Flame}
            accent="warm"
            products={smartSections.deals}
          />
          <ProductCarousel
            eyebrow="Customer Favorites"
            title="Best Sellers"
            subtitle="Top-rated ACs loved by thousands of customers"
            icon={Award}
            accent="cool"
            products={smartSections.bestSellers}
          />
          <ProductCarousel
            eyebrow="What's Hot"
            title="Trending Products"
            subtitle="Most viewed and ordered this week"
            icon={TrendingUp}
            accent="warm"
            products={smartSections.trending}
          />
          <ProductCarousel
            eyebrow="Just In"
            title="New Arrivals"
            subtitle="Latest models with cutting-edge cooling tech"
            icon={Sparkles}
            accent="cool"
            products={smartSections.newArrivals}
          />
          <ProductCarousel
            eyebrow="Picked For You"
            title="Recommended for You"
            subtitle="Smart picks based on quality, value, and ratings"
            icon={Heart}
            accent="warm"
            products={smartSections.recommended}
          />
        </div>
      </section>

      {/* Find Your Perfect AC Filter - moved below smart sections */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-wider text-cool">Smart Search</span>
            <h2 className="mt-1 font-heading text-3xl font-bold md:text-4xl">Find Your Perfect AC</h2>
            <p className="mt-2 text-muted-foreground">Filter by brand, type, and capacity to find the best AC for your needs</p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Brand</label>
                  <Select value={filterBrand} onValueChange={setFilterBrand}>
                    <SelectTrigger className="rounded-lg shadow-sm">
                      <SelectValue placeholder="Select Brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((b) => (
                        <SelectItem key={b} value={b.toLowerCase()}>{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">AC Type</label>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="rounded-lg shadow-sm">
                      <SelectValue placeholder="Select AC Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {acTypeOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Capacity</label>
                  <Select value={filterCapacity} onValueChange={setFilterCapacity}>
                    <SelectTrigger className="rounded-lg shadow-sm">
                      <SelectValue placeholder="Select Capacity" />
                    </SelectTrigger>
                    <SelectContent>
                      {capacityOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button onClick={handleFindAC} className="w-full gap-2 rounded-lg transition-transform hover:scale-[1.02] active:scale-95" size="lg">
                    <Search className="h-4 w-4" /> Find AC
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop by Brand */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-cool">All Brands</span>
            <h2 className="mt-1 font-heading text-3xl font-bold md:text-4xl">Shop by Brand</h2>
            <p className="mt-2 text-muted-foreground">Explore products from our {brands.length} trusted brands in a responsive showcase</p>
          </motion.div>
          <div className="space-y-12">
            {brands.map((brand) => {
              const brandProducts = getProductsByBrand(brand);
              if (brandProducts.length === 0) return null;
              return <BrandSection key={brand} brand={brand} products={brandProducts} />;
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-warm">Why Customers Love Us</span>
            <h2 className="mt-1 font-heading text-3xl font-bold md:text-4xl">Why Choose CoolBreeze?</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "100% Genuine", desc: "Authorized dealer for TOSOT, MBO, Midea, Daikin & Mitsubishi. Full manufacturer warranty.", color: "cool" },
              { icon: Truck, title: "Free Installation", desc: "Professional installation by certified technicians included with every purchase.", color: "warm" },
              { icon: Award, title: "Best Prices", desc: "We guarantee the best prices. Found it cheaper? We'll match it.", color: "cool" },
              { icon: Headphones, title: "24/7 WhatsApp Support", desc: "Got questions? Our team is just a WhatsApp message away, anytime.", color: "warm" },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div key={title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="group rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
                    color === "cool" ? "bg-cool-light" : "bg-warm-light"
                  }`}>
                    <Icon className={`h-7 w-7 ${color === "cool" ? "text-cool" : "text-warm"}`} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-cool">Testimonials</span>
            <h2 className="mt-1 font-heading text-3xl font-bold md:text-4xl">Trusted by Thousands</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Rahul S.", city: "Kathmandu", text: "Ordered my TOSOT AC via WhatsApp. Got it installed the next day. Incredible service!", rating: 5 },
              { name: "Priya M.", city: "Pokhara", text: "Best prices I found anywhere. The team helped me choose the right Daikin for my room.", rating: 5 },
              { name: "Vikram K.", city: "Biratnagar", text: "Bought a Mitsubishi Hot & Cold AC. Perfect for our weather. Highly recommend CoolBreeze!", rating: 5 },
            ].map((t, i) => (
              <motion.div key={t.name} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-warm text-warm" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">"{t.text}"</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-cool text-xs font-bold text-primary-foreground">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.city}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Brands Auto Slider */}
      <PartnerBrandsSlider />

      {/* CTA Banner */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div {...fadeUp}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-10 text-center md:p-16">
              <div className="relative z-10">
                <ThumbsUp className="mx-auto mb-4 h-10 w-10 text-primary-foreground opacity-80" />
                <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
                  Ready to Beat the Heat?
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
                  Order your dream AC today via WhatsApp. Quick delivery, free installation, and the best prices guaranteed.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link to="/products">
                    <Button size="lg" variant="secondary" className="gap-2 px-8">
                      Browse ACs <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a href={getWhatsAppGeneralLink()} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gap-2 bg-[#25D366] px-8 text-primary-foreground hover:bg-[#20bd5a]">
                      <MessageCircle className="h-5 w-5" /> WhatsApp Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
