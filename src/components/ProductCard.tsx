import { Star, MessageCircle } from "lucide-react";
import { Product, getWhatsAppLink } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isCooling = product.type === "cooling";
  const isBoth = product.type === "both";

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Badge */}
      {product.badge && (
        <div className="absolute left-3 top-3 z-10">
          <Badge className={isBoth ? "bg-gradient-warm text-secondary-foreground border-0" : "bg-gradient-cool text-primary-foreground border-0"}>
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Type indicator strip */}
      <div className={`h-1 w-full ${isCooling ? "bg-gradient-cool" : isBoth ? "bg-gradient-warm" : "bg-gradient-warm"}`} />

      {/* Image */}
      <div className={`relative h-48 overflow-hidden ${isCooling ? "bg-cool-light" : "bg-warm-light"}`}>
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={400}
          height={300}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{product.brand}</span>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-warm text-warm" />
            <span className="text-xs font-medium text-foreground">{product.rating}</span>
          </div>
        </div>

        <h3 className="font-heading text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{product.capacity}</p>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

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
          <div>
            <span className="text-2xl font-heading font-bold text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
          </div>
          <a href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-1.5 bg-[#25D366] text-primary-foreground hover:bg-[#20bd5a]">
              <MessageCircle className="h-4 w-4" />
              Order
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
