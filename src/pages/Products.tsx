import { useState } from "react";
import { products, ProductType } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const filters: { label: string; value: ProductType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Cooling", value: "cooling" },
  { label: "Hot & Cold", value: "both" },
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState<ProductType | "all">("all");

  const filtered = activeFilter === "all" ? products : products.filter((p) => p.type === activeFilter);

  return (
    <div className="min-h-screen py-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl font-bold">Our Products</h1>
          <p className="mt-2 text-muted-foreground">Find the perfect AC for your space</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <Button
              key={f.value}
              variant={activeFilter === f.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">No products found for this filter.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
