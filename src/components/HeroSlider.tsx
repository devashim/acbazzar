import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, Zap, Wrench, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getWhatsAppGeneralLink } from "@/data/products";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [
  {
    image: heroSlide1,
    heading: "Stay Cool & Comfortable All Year",
    subheading: "Professional HVAC & AC Services",
    buttonText: "Shop Now",
    buttonLink: "/products",
    buttonIcon: Zap,
    isWhatsApp: false,
  },
  {
    image: heroSlide2,
    heading: "Special Offer on AC Installation",
    subheading: "Get up to 30% Discount – Limited Time",
    buttonText: "Get Offer",
    buttonLink: null,
    buttonIcon: MessageCircle,
    isWhatsApp: true,
  },
  {
    image: heroSlide3,
    heading: "24/7 AC Repair Services",
    subheading: "Fast, Reliable & Affordable",
    buttonText: "Call Now",
    buttonLink: null,
    buttonIcon: Wrench,
    isWhatsApp: true,
  },
  {
    image: heroSlide4,
    heading: "Energy Efficient Cooling Solutions",
    subheading: "Save Energy, Save Money",
    buttonText: "Learn More",
    buttonLink: "/products",
    buttonIcon: Leaf,
    isWhatsApp: false,
  },
];

const AUTOPLAY_DELAY = 5000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const Icon = slide.buttonIcon;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="relative overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
                {slide.heading}
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                {slide.subheading}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {slide.isWhatsApp ? (
                  <a href={getWhatsAppGeneralLink()} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="h-13 gap-2 bg-[#25D366] px-8 text-base text-white hover:bg-[#20bd5a] shadow-lg">
                      <Icon className="h-5 w-5" /> {slide.buttonText}
                    </Button>
                  </a>
                ) : (
                  <Link to={slide.buttonLink!}>
                    <Button size="lg" className="h-13 gap-2 bg-gradient-cool px-8 text-base text-primary-foreground shadow-lg hover:opacity-90">
                      <Icon className="h-5 w-5" /> {slide.buttonText} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
                <a href={getWhatsAppGeneralLink()} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-13 gap-2 border-white/40 px-8 text-base text-white hover:bg-white/10">
                    <MessageCircle className="h-5 w-5" /> Order via WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/30 md:left-5 md:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/30 md:right-5 md:p-3"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
