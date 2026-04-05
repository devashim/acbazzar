import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Sun, Shield, Truck, Headphones, MessageCircle, Star, Zap, Award, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandSection from "@/components/BrandSection";
import HeroSlider from "@/components/HeroSlider";
import { products, brands, categories, getWhatsAppGeneralLink, getProductsByBrand } from "@/data/products";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const Index = () => {
  const featured = products.filter((p) => p.badge).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Shop by Category</h2>
            <p className="mt-3 text-muted-foreground">Find the right type of AC for your needs</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat, i) => (
              <motion.div key={cat.name} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <Link
                  to="/products"
                  className={`group flex flex-col items-center rounded-xl border border-border p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    cat.type === "both" ? "bg-warm-light hover:border-warm" : "bg-cool-light hover:border-cool"
                  }`}
                >
                  <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
                    cat.type === "both" ? "bg-gradient-warm" : "bg-gradient-cool"
                  }`}>
                    {cat.type === "both" ? (
                      <Sun className="h-6 w-6 text-secondary-foreground" />
                    ) : (
                      <Snowflake className="h-6 w-6 text-primary-foreground" />
                    )}
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-foreground">{cat.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{cat.count} products</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Brand - Horizontal Scroll */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-cool">All Brands</span>
            <h2 className="mt-1 font-heading text-3xl font-bold md:text-4xl">Shop by Brand</h2>
            <p className="mt-2 text-muted-foreground">Explore products from our {brands.length} trusted brands</p>
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
