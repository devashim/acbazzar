import { Link } from "react-router-dom";
import { ArrowRight, Snowflake, Sun, Shield, Truck, Headphones, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const featured = products.filter((p) => p.badge);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="container relative z-10 text-center">
          <div className="mx-auto flex items-center justify-center gap-2 mb-6">
            <Snowflake className="h-5 w-5 text-cool animate-float" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Cool Comfort, Warm Homes</span>
            <Sun className="h-5 w-5 text-warm animate-float" style={{ animationDelay: "1.5s" }} />
          </div>
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Premium <span className="text-gradient-cool">Cooling</span> &{" "}
            <span className="text-gradient-warm">Heating</span> Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Browse top brands, find the perfect AC for your space, and order instantly via WhatsApp. No hassle, no wait.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/products">
              <Button size="lg" className="gap-2 bg-gradient-cool text-primary-foreground hover:opacity-90 shadow-lg">
                Browse Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold">Shop by Category</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((cat) => (
              <Link
                to="/products"
                key={cat.name}
                className={`group rounded-xl border border-border p-6 text-center transition-all hover:shadow-md hover:-translate-y-1 ${
                  cat.type === "both" ? "bg-warm-light" : "bg-cool-light"
                }`}
              >
                <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${
                  cat.type === "both" ? "bg-gradient-warm" : "bg-gradient-cool"
                }`}>
                  {cat.type === "both" ? (
                    <Sun className="h-6 w-6 text-secondary-foreground" />
                  ) : (
                    <Snowflake className="h-6 w-6 text-primary-foreground" />
                  )}
                </div>
                <h3 className="font-heading font-semibold text-foreground">{cat.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.count} products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-heading text-3xl font-bold">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">Handpicked best sellers for you</p>
            </div>
            <Link to="/products">
              <Button variant="ghost" className="gap-1">View All <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 text-center md:grid-cols-3">
            {[
              { icon: Shield, title: "Genuine Products", desc: "100% authentic ACs from top brands with manufacturer warranty" },
              { icon: Truck, title: "Free Installation", desc: "Professional installation included with every purchase" },
              { icon: Headphones, title: "24/7 Support", desc: "Reach us anytime via WhatsApp for queries and support" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cool-light">
                  <Icon className="h-7 w-7 text-cool" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
