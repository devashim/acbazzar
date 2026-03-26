import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, MessageCircle, Shield, Truck, RotateCcw, Check } from "lucide-react";
import { products, reviews as allReviews, getWhatsAppLink } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-heading text-2xl font-bold">Product Not Found</h1>
        <Link to="/products"><Button className="mt-4">Back to Products</Button></Link>
      </div>
    );
  }

  const isCooling = product.type === "cooling";
  const isBoth = product.type === "both";
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const productReviews = allReviews.filter((r) => r.productId === product.id);
  const related = products.filter((p) => p.id !== product.id && p.type === product.type).slice(0, 4);

  return (
    <div className="min-h-screen">
      <div className="container py-6">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.brand} {product.name}</span>
        </nav>

        <Link to="/products" className="mb-6 inline-flex">
          <Button variant="ghost" size="sm" className="gap-1.5">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Button>
        </Link>

        {/* Product Section */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Images */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className={`relative overflow-hidden rounded-2xl ${isCooling ? "bg-cool-light" : "bg-warm-light"}`}>
              {product.badge && (
                <Badge className={`absolute left-4 top-4 z-10 ${isBoth ? "bg-gradient-warm text-secondary-foreground" : "bg-gradient-cool text-primary-foreground"} border-0`}>
                  {product.badge}
                </Badge>
              )}
              {discount > 0 && (
                <Badge variant="destructive" className="absolute right-4 top-4 z-10 border-0 text-sm font-bold">-{discount}% OFF</Badge>
              )}
              <img
                src={product.image}
                alt={`${product.brand} ${product.name}`}
                className="h-80 w-full object-cover md:h-[450px]"
                width={600}
                height={450}
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{product.brand}</span>
            <h1 className="mt-1 font-heading text-3xl font-bold text-foreground md:text-4xl">{product.name}</h1>
            <p className="mt-1 text-muted-foreground">{product.capacity}</p>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-warm text-warm" : "text-border"}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-4xl font-heading font-bold text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                  <Badge className="bg-[#25D366] text-primary-foreground border-0">Save ₹{(product.originalPrice - product.price).toLocaleString("en-IN")}</Badge>
                </>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Inclusive of all taxes • Free shipping</p>

            <Separator className="my-6" />

            {/* Description */}
            <p className="leading-relaxed text-muted-foreground">{product.longDescription || product.description}</p>

            {/* Features */}
            <div className="mt-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-[#25D366]" /> {f}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="lg" className="w-full gap-2 bg-[#25D366] text-lg text-primary-foreground hover:bg-[#20bd5a]">
                  <MessageCircle className="h-5 w-5" /> Order on WhatsApp
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: Shield, label: "Genuine Product" },
                { icon: Truck, label: "Free Installation" },
                { icon: RotateCcw, label: "Easy Returns" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 rounded-lg bg-muted p-3 text-center">
                  <Icon className="h-5 w-5 text-cool" />
                  <span className="text-xs font-medium text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        {product.specifications && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="font-heading text-2xl font-bold mb-6">Specifications</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              {Object.entries(product.specifications).map(([key, value], i) => (
                <div key={key} className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 0 ? "bg-muted/50" : "bg-card"}`}>
                  <span className="font-medium text-muted-foreground">{key}</span>
                  <span className="font-semibold text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="font-heading text-2xl font-bold mb-6">Customer Reviews ({productReviews.length})</h2>
          {productReviews.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {productReviews.map((r) => (
                <div key={r.id} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-cool text-xs font-bold text-primary-foreground">
                        {r.name[0]}
                      </div>
                      <span className="font-semibold text-sm text-foreground">{r.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{new Date(r.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <div className="flex gap-0.5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3.5 w-3.5 ${i < r.rating ? "fill-warm text-warm" : "text-border"}`} />
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No reviews yet for this product.</p>
          )}
        </motion.div>

        {/* Related Products */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 mb-8"
          >
            <h2 className="font-heading text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
