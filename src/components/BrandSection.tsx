import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Product, getWhatsAppLink } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useDragScroll } from "@/hooks/useDragScroll";

interface BrandSectionProps {
  brand: string;
  products: Product[];
}

const BrandSection = ({ brand, products }: BrandSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  useDragScroll(scrollRef);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  // Auto-scroll disabled — users scroll manually via touch/swipe or arrows

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-heading text-2xl font-bold text-foreground">{brand}</h3>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Link to="/products">
            <Button variant="ghost" size="sm" className="gap-1 text-cool hover:text-cool-dark">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Horizontal scroll container — touch-friendly free swipe */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-proximity scrollbar-hide overscroll-x-contain"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {products.map((product) => {
          const isCooling = product.type === "cooling";
          const isBoth = product.type === "both";
          const discount = product.originalPrice
            ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
            : 0;

          return (
            <div
              key={product.id}
              className="group relative flex-shrink-0 w-[240px] sm:w-[260px] overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 snap-start"
            >
              {product.badge && (
                <div className="absolute left-2 top-2 z-10">
                  <Badge className={`text-[10px] ${isBoth ? "bg-gradient-warm text-secondary-foreground" : "bg-gradient-cool text-primary-foreground"} border-0`}>
                    {product.badge}
                  </Badge>
                </div>
              )}
              {discount > 0 && (
                <div className="absolute right-2 top-2 z-10">
                  <Badge variant="destructive" className="border-0 text-[10px] font-bold">-{discount}%</Badge>
                </div>
              )}
              <div className={`h-1 w-full ${isCooling ? "bg-gradient-cool" : "bg-gradient-warm"}`} />
              <Link to={`/product/${product.id}`}>
                <div className={`relative h-40 overflow-hidden ${isCooling ? "bg-cool-light" : "bg-warm-light"}`}>
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                </div>
              </Link>
              <div className="p-3">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{product.capacity}</span>
                  <div className="flex items-center gap-0.5">
                    <Star className="h-3 w-3 fill-warm text-warm" />
                    <span className="text-[10px] text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h4 className="text-sm font-heading font-semibold text-foreground hover:text-cool transition-colors line-clamp-1">{product.name}</h4>
                </Link>

                {/* Key features */}
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((f) => (
                    <span key={f} className="rounded-full bg-muted px-2 py-0.5 text-[9px] font-medium text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-heading font-bold text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                    )}
                  </div>
                  <a href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="h-8 gap-1 bg-[#25D366] text-xs text-primary-foreground hover:bg-[#20bd5a]">
                      <MessageCircle className="h-3 w-3" /> Order
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default BrandSection;
