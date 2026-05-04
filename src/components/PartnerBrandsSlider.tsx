import { motion } from "framer-motion";
import chigo from "@/assets/brands/chigo.png";
import lg from "@/assets/brands/lg.png";
import cg from "@/assets/brands/cg.png";
import mbo from "@/assets/brands/mbo.png";
import gree from "@/assets/brands/gree.png";
import hisense from "@/assets/brands/hisense.png";
import hyundai from "@/assets/brands/hyundai.jpg";
import whirlpool from "@/assets/brands/whirlpool.png";
import midea from "@/assets/brands/midea.png";
import voltas from "@/assets/brands/voltas.jpg";

const brandLogos = [
  { name: "Chigo", src: chigo },
  { name: "LG", src: lg },
  { name: "CG", src: cg },
  { name: "MBO", src: mbo },
  { name: "Gree", src: gree },
  { name: "Hisense", src: hisense },
  { name: "Hyundai", src: hyundai },
  { name: "Whirlpool", src: whirlpool },
  { name: "Midea", src: midea },
  { name: "Voltas", src: voltas },
];

const PartnerBrandsSlider = () => {
  // Duplicate for seamless loop
  const loop = [...brandLogos, ...brandLogos];

  return (
    <section className="py-14 md:py-20 bg-muted/30 overflow-hidden">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-cool">
            Our Partnership Brands
          </span>
          <h2 className="mt-1 font-heading text-3xl font-bold md:text-4xl">
            Trusted Brand Partners
          </h2>
          <p className="mt-2 text-muted-foreground">
            Authorized dealer of leading global AC brands
          </p>
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <motion.div
            className="flex gap-6 sm:gap-10 md:gap-14 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loop.map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="flex flex-col items-center gap-2 shrink-0"
              >
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full bg-card border border-border shadow-sm hover:shadow-md transition-shadow p-3">
                  <img
                    src={b.src}
                    alt={`${b.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                  {b.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrandsSlider;
