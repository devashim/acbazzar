import { motion } from "framer-motion";
import { Shield, Target, Eye, Handshake, Truck, Headphones, Wrench } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-cool">About Us</span>
            <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">
              Your Trusted <span className="text-gradient-cool">AC Partner</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We are dedicated to providing premium air conditioning solutions for homes and businesses. With years of experience and partnerships with leading brands, we deliver comfort you can count on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cool-light">
                  <Target className="h-7 w-7 text-cool" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To make premium air conditioning accessible to every home and business by offering the best brands at competitive prices, backed by exceptional service and hassle-free WhatsApp ordering.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-warm-light">
                  <Eye className="h-7 w-7 text-warm" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To become the most trusted AC destination, known for genuine products, transparent pricing, and customer-first approach — making comfort just a message away.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-warm">What We Offer</span>
            <h2 className="mt-1 font-heading text-3xl font-bold md:text-4xl">Our Services</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "Genuine Products", desc: "100% authorized products with manufacturer warranty on every purchase.", color: "cool" },
              { icon: Truck, title: "Fast Delivery", desc: "Quick delivery and same-day dispatch for in-stock items across the region.", color: "warm" },
              { icon: Wrench, title: "Free Installation", desc: "Professional installation by certified technicians included with every AC.", color: "cool" },
              { icon: Headphones, title: "After-Sales Support", desc: "Dedicated customer support via WhatsApp for any queries or service needs.", color: "warm" },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div key={title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="group rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
                    color === "cool" ? "bg-cool-light" : "bg-warm-light"
                  }`}>
                    <Icon className={`h-7 w-7 ${color === "cool" ? "text-cool" : "text-warm"}`} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partnerships */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-cool">Our Partners</span>
            <h2 className="mt-1 font-heading text-3xl font-bold md:text-4xl">Brand Partnerships</h2>
            <p className="mt-3 text-muted-foreground">We are proud authorized dealers of leading AC brands</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {["TOSOT", "MBO", "Midea", "Daikin", "Mitsubishi"].map((brand, i) => (
              <motion.div key={brand} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <div className="group flex items-center justify-center rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-cool transition-transform group-hover:scale-110">
                    <Handshake className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="ml-3 font-heading text-lg font-semibold text-foreground">{brand}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
