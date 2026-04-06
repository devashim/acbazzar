import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, Search, X } from "lucide-react";
import { products, brands, capacities, ProductType } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const typeFilters: { label: string; value: ProductType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Cooling", value: "cooling" },
  { label: "Hot & Cold", value: "both" },
];

type SortOption = "default" | "price-low" | "price-high" | "rating";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<ProductType | "all">("all");
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [capacityFilter, setCapacityFilter] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("default");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const brand = searchParams.get("brand");
    const type = searchParams.get("type");
    const capacity = searchParams.get("capacity");

    if (brand) {
      const match = brands.find(b => b.toLowerCase() === brand.toLowerCase());
      if (match) setBrandFilter(match);
    }
    if (type) {
      if (type === "both") setTypeFilter("both");
      else setSearch(type.replace(/-/g, " "));
    }
    if (capacity) {
      const cap = capacity.replace("ton", " Ton");
      const match = capacities.find(c => c.toLowerCase() === cap.toLowerCase());
      if (match) setCapacityFilter(match);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    if (typeFilter !== "all") result = result.filter(p => p.type === typeFilter);
    if (brandFilter !== "all") result = result.filter(p => p.brand === brandFilter);
    if (capacityFilter !== "all") result = result.filter(p => p.capacity === capacityFilter);

    switch (sort) {
      case "price-low": result.sort((a, b) => a.price - b.price); break;
      case "price-high": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
    }

    return result;
  }, [search, typeFilter, brandFilter, capacityFilter, sort]);

  const hasActiveFilters = typeFilter !== "all" || brandFilter !== "all" || capacityFilter !== "all" || search !== "";

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("all");
    setBrandFilter("all");
    setCapacityFilter("all");
    setSort("default");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted/50 py-8 sm:py-10 md:py-14">
        <div className="container px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Our <span className="text-gradient-cool">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground"
          >
            {products.length} premium ACs from top brands • Order instantly via WhatsApp
          </motion.p>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-40 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="container px-4 py-2.5 sm:py-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search ACs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 text-sm"
              />
            </div>

            {/* Type filter pills - hidden on mobile */}
            <div className="hidden gap-1 sm:flex">
              {typeFilters.map((f) => (
                <Button
                  key={f.value}
                  variant={typeFilter === f.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTypeFilter(f.value)}
                  className={typeFilter === f.value && f.value === "both" ? "bg-gradient-warm border-0" : typeFilter === f.value ? "bg-gradient-cool border-0" : ""}
                >
                  {f.label}
                </Button>
              ))}
            </div>

            {/* More filters toggle */}
            <Button variant="outline" size="sm" className="gap-1 sm:gap-1.5 text-xs sm:text-sm" onClick={() => setShowFilters(!showFilters)}>
              <SlidersHorizontal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Filters</span>
              {hasActiveFilters && <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cool text-[10px] text-primary-foreground">!</span>}
            </Button>

            {/* Sort */}
            <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
              <SelectTrigger className="w-[120px] sm:w-[150px] text-xs sm:text-sm">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-low">Price: Low → High</SelectItem>
                <SelectItem value="price-high">Price: High → Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Expanded filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-3 border-t border-border pt-2 sm:pt-3"
            >
              {/* Mobile type filter */}
              <div className="flex gap-1 sm:hidden">
                {typeFilters.map((f) => (
                  <Button key={f.value} variant={typeFilter === f.value ? "default" : "outline"} size="sm" className="text-xs" onClick={() => setTypeFilter(f.value)}>
                    {f.label}
                  </Button>
                ))}
              </div>

              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger className="w-[130px] sm:w-[150px] text-xs sm:text-sm">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {brands.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select value={capacityFilter} onValueChange={setCapacityFilter}>
                <SelectTrigger className="w-[130px] sm:w-[150px] text-xs sm:text-sm">
                  <SelectValue placeholder="Capacity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Capacities</SelectItem>
                  {capacities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-xs sm:text-sm text-destructive">
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Clear All
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container px-4 py-6 sm:py-8">
        <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>
        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 sm:py-20 text-center">
            <p className="text-base sm:text-lg font-medium text-muted-foreground">No products match your filters</p>
            <Button variant="outline" className="mt-4" onClick={clearFilters}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;