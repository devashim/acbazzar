import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Snowflake, Sparkles, Tag, Zap, Gift, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppGeneralLink } from "@/data/products";

const PromoBanner = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-6 sm:p-8 md:p-12 shadow-xl">
            {/* Decorative floating icons */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <Snowflake className="absolute left-4 top-6 h-10 w-10 text-primary-foreground animate-pulse" />
              <Snowflake className="absolute right-10 top-12 h-6 w-6 text-primary-foreground animate-pulse [animation-delay:1s]" />
              <Sparkles className="absolute bottom-6 left-1/3 h-8 w-8 text-primary-foreground animate-pulse [animation-delay:0.5s]" />
              <Snowflake className="absolute bottom-10 right-1/4 h-12 w-12 text-primary-foreground animate-pulse [animation-delay:1.5s]" />
            </div>

            {/* Decorative gradient orbs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-warm/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cool/30 blur-3xl" />

            <div className="relative z-10 grid items-center gap-6 md:grid-cols-[1fr_auto] md:gap-10">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-warm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-warm-foreground shadow-md">
                  <Zap className="h-3.5 w-3.5" />
                  Mega AC Sale Live Now
                </div>

                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl md:text-5xl">
                  Up to <span className="text-warm-light">40% OFF</span> on Top AC Brands
                </h2>

                <p className="mt-3 max-w-xl text-sm text-primary-foreground/90 sm:text-base md:text-lg">
                  Beat the heat with unbeatable deals on TOSOT, Daikin, Midea, Mitsubishi & MBO. Free installation & instant WhatsApp delivery!
                </p>

                {/* Perks */}
                <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                    <Gift className="h-3.5 w-3.5" /> Free Installation
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                    <Percent className="h-3.5 w-3.5" /> EMI Available
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                    <Tag className="h-3.5 w-3.5" /> Best Price Guarantee
                  </span>
                </div>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                  <Link to="/products">
                    <Button size="lg" variant="secondary" className="w-full gap-2 px-6 sm:w-auto">
                      Shop Deals <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a href={getWhatsAppGeneralLink()} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full gap-2 bg-[#25D366] px-6 text-primary-foreground hover:bg-[#20bd5a] sm:w-auto">
                      <MessageCircle className="h-5 w-5" /> Order on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Big discount circle */}
              <div className="hidden md:flex shrink-0 items-center justify-center">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-warm shadow-2xl ring-8 ring-primary-foreground/20 lg:h-52 lg:w-52">
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary-foreground/40 animate-spin [animation-duration:12s]" />
                  <div className="text-center">
                    <p className="font-heading text-4xl font-extrabold text-warm-foreground lg:text-5xl">40%</p>
                    <p className="text-sm font-bold uppercase tracking-wider text-warm-foreground">OFF</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-warm-foreground/80">Limited Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;
