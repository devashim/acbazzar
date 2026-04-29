import { Star, MessageCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product, getWhatsAppLink, formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const isCooling = product.type === "cooling";
  const isBoth = product.type === "both";
  const showFullProductImage = true;
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
        <div className="absolute left-2 top-2 sm:left-3 sm:top-3 z-10">
          <Badge className={`text-[10px] sm:text-xs ${isBoth ? "bg-gradient-warm text-secondary-foreground border-0" : "bg-gradient-cool text-primary-foreground border-0"}`}>
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Discount badge */}
      {discount > 0 && (
        <div className="absolute right-2 top-2 sm:right-3 sm:top-3 z-10">
          <Badge variant="destructive" className="border-0 font-bold text-[10px] sm:text-xs">-{discount}%</Badge>
        </div>
      )}

      {/* Type indicator strip */}
      <div className={`h-1 w-full ${isCooling ? "bg-gradient-cool" : "bg-gradient-warm"}`} />

      {/* Image with quick view overlay */}
      <div className={`relative h-36 sm:h-44 md:h-52 overflow-hidden ${isCooling ? "bg-cool-light" : "bg-warm-light"}`}>
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${showFullProductImage ? "object-contain p-3 sm:p-4" : "object-cover"}`}
          loading="lazy"
          width={600}
          height={400}
        />
        {/* Quick View Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3 bg-foreground/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="max-w-[180px] text-center text-xs sm:text-sm text-background hidden sm:block">{product.description}</p>
          <Link to={`/product/${product.id}`}>
            <Button size="sm" variant="secondary" className="gap-1 sm:gap-1.5 text-xs sm:text-sm">
              <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> View Details
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <div className="mb-0.5 sm:mb-1 flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground">{product.brand}</span>
          <div className="flex items-center gap-0.5 sm:gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${i < Math.floor(product.rating) ? "fill-warm text-warm" : "text-border"}`} />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
        </div>

        <h3 className="font-heading text-sm sm:text-lg font-semibold text-foreground line-clamp-1">{product.name}</h3>
        <div className="mt-0.5 flex items-center justify-between gap-2">
          <p className="text-[10px] sm:text-xs text-muted-foreground">{product.capacity}</p>
          <Badge variant={product.inStock ? "secondary" : "destructive"} className="text-[9px] sm:text-[10px]">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>

        {/* Features */}
        <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
          {product.features.slice(0, 2).map((f) => (
            <span key={f} className="rounded-full bg-muted px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-medium text-muted-foreground">
              {f}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="mt-3 sm:mt-4 flex items-end justify-between gap-1">
          <div className="flex flex-col min-w-0">
            <span className="text-base sm:text-xl md:text-2xl font-heading font-bold text-foreground truncate">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <a href={product.inStock ? getWhatsAppLink(product) : undefined} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Button disabled={!product.inStock} size="sm" className="gap-1 sm:gap-1.5 bg-[#25D366] text-primary-foreground hover:bg-[#20bd5a] text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3 disabled:bg-muted disabled:text-muted-foreground">
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">{product.inStock ? "Order" : "Sold"}</span>
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;