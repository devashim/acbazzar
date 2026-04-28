import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

interface BrandSectionProps {
  brand: string;
  products: Product[];
}

const BrandSection = ({ brand, products }: BrandSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-heading text-2xl font-bold text-foreground">{brand}</h3>
        <Link to="/products">
          <Button variant="ghost" size="sm" className="gap-1 text-cool hover:text-cool-dark">
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

export default BrandSection;
