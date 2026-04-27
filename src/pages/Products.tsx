import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, Search, X } from "lucide-react";
import { products, brands, capacities, categories, Product, ProductType } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const typeFilters: { label: string; value: ProductType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Cooling", value: "cooling" },
  { label: "Hot & Cold", value: "both" },
];

type SortOption = "default" | "price-low" | "price-high" | "rating";
type StockFilter = "all" | "in-stock" | "out-of-stock";

const matchesCategory = (product: Product, category: string) => {
  if (category === "all") return true;
  if (category === "Split ACs") return product.name.includes("Split") && product.type === "cooling";
  if (category === "Window ACs") return product.name.includes("Window");
  if (category === "Hot & Cold ACs") return product.type === "both";
  if (category === "Portable ACs") return product.name.includes("Portable");
  if (category === "Cassette ACs") return product.name.includes("Cassette");
  return true;
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<ProductType | "all">("all");
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [capacityFilter, setCapacityFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [stockFilter, setStockFilter] = useState<StockFilter>("all");
  const [sort, setSort] = useState<SortOption>("default");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

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
    if (categoryFilter !== "all") result = result.filter(p => matchesCategory(p, categoryFilter));
    if (brandFilter !== "all") result = result.filter(p => p.brand === brandFilter);
    if (capacityFilter !== "all") result = result.filter(p => p.capacity === capacityFilter);
    if (stockFilter === "in-stock") result = result.filter(p => p.inStock);
    if (stockFilter === "out-of-stock") result = result.filter(p => !p.inStock);

    switch (sort) {
      case "price-low": result.sort((a, b) => a.price - b.price); break;
      case "price-high": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
    }

    return result;
  }, [search, typeFilter, categoryFilter, brandFilter, capacityFilter, stockFilter, sort]);

  const hasActiveFilters = typeFilter !== "all" || categoryFilter !== "all" || brandFilter !== "all" || capacityFilter !== "all" || stockFilter !== "all" || search !== "";

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("all");
    setCategoryFilter("all");
    setBrandFilter("all");
    setCapacityFilter("all");
    setStockFilter("all");
    setSort("default");
  };

  const FilterPanel = ({ compact = false }: { compact?: boolean }) => (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search ACs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 text-sm"
        />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Categories</p>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="text-sm">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(c => <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">AC Type</p>
        <div className="grid grid-cols-1 gap-2">
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
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Availability</p>
        <Select value={stockFilter} onValueChange={(v) => setStockFilter(v as StockFilter)}>
          <SelectTrigger className="text-sm">
            <SelectValue placeholder="Stock" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stock</SelectItem>
            <SelectItem value="in-stock">In Stock</SelectItem>
            <SelectItem value="out-of-stock">Out of Stock</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Brand</p>
          <Select value={brandFilter} onValueChange={setBrandFilter}>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {brands.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Capacity</p>
          <Select value={capacityFilter} onValueChange={setCapacityFilter}>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Capacity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Capacities</SelectItem>
              {capacities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={clearFilters} className="w-full gap-1 text-destructive">
          <X className="h-4 w-4" /> Clear All Filters
        </Button>
      )}
    </div>
  );

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

      <div className="container px-4 py-6 sm:py-8">
        <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
          <p className="text-xs sm:text-sm text-muted-foreground">{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5">
                <SlidersHorizontal className="h-4 w-4" /> Filters
                {hasActiveFilters && <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cool text-[10px] text-primary-foreground">!</span>}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[86vw] overflow-y-auto sm:max-w-sm">
              <SheetHeader className="mb-5 text-left">
                <SheetTitle>Product Filters</SheetTitle>
              </SheetHeader>
              <FilterPanel />
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-20 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h2 className="font-heading text-lg font-semibold">Filter Products</h2>
                  <p className="text-xs text-muted-foreground">Search, category, stock and brands</p>
                </div>
                <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
              </div>
              <FilterPanel />
            </div>
          </aside>

          <main className="min-w-0">
            <div className="mb-4 hidden items-center justify-between gap-4 lg:flex">
              <p className="text-sm text-muted-foreground">{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>
              <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
                <SelectTrigger className="w-[180px] text-sm">
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

            <div className="mb-4 lg:hidden">
              <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
                <SelectTrigger className="w-full text-sm">
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

            <div className="grid gap-4 sm:gap-6 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;