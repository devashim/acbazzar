import { Star, MessageCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product, getWhatsAppLink } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const isCooling = product.type === "cooling";
  const isBoth = product.type === "both";
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute left-3 top-3 z-10">
          <Badge className={isBoth ? "bg-gradient-warm text-secondary-foreground border-0" : "bg-gradient-cool text-primary-foreground border-0"}>
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Discount badge */}
      {discount > 0 && (
        <div className="absolute right-3 top-3 z-10">
          <Badge variant="destructive" className="border-0 font-bold">-{discount}%</Badge>
        </div>
      )}

      {/* Type indicator strip */}
      <div className={`h-1 w-full ${isCooling ? "bg-gradient-cool" : "bg-gradient-warm"}`} />

      {/* Image with quick view overlay */}
      <div className={`relative h-52 overflow-hidden ${isCooling ? "bg-cool-light" : "bg-warm-light"}`}>
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={600}
          height={400}
        />
        {/* Quick View Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-foreground/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="max-w-[200px] text-center text-sm text-background">{product.description}</p>
          <Link to={`/product/${product.id}`}>
            <Button size="sm" variant="secondary" className="gap-1.5">
              <Eye className="h-4 w-4" /> View Details
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{product.brand}</span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-warm text-warm" : "text-border"}`} />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
        </div>

        <h3 className="font-heading text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{product.capacity}</p>

        {/* Features */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.features.slice(0, 3).map((f) => (
            <span key={f} className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              {f}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="mt-4 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-heading font-bold text-foreground">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
          <a href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-1.5 bg-[#25D366] text-primary-foreground hover:bg-[#20bd5a]">
              <MessageCircle className="h-4 w-4" />
              Order
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
