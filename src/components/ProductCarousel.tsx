import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  icon?: LucideIcon;
  products: Product[];
  accent?: "cool" | "warm";
}

const ProductCarousel = ({ title, subtitle, eyebrow, icon: Icon, products, accent = "cool" }: ProductCarouselProps) => {
  if (products.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
        <div>
          {eyebrow && (
            <span className={`text-xs font-semibold uppercase tracking-wider ${accent === "warm" ? "text-warm" : "text-cool"}`}>
              {eyebrow}
            </span>
          )}
          <div className="flex items-center gap-2 mt-1">
            {Icon && (
              <div className={`flex h-9 w-9 items-center justify-center rounded-full ${accent === "warm" ? "bg-warm-light text-warm" : "bg-cool-light text-cool"}`}>
                <Icon className="h-5 w-5" />
              </div>
            )}
            <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">{title}</h3>
          </div>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <Link to="/products">
          <Button variant="ghost" size="sm" className={`gap-1 self-start ${accent === "warm" ? "text-warm hover:text-warm" : "text-cool hover:text-cool-dark"}`}>
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProductCarousel;
