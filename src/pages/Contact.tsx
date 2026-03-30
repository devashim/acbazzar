import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getWhatsAppGeneralLink } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);

    // Send via WhatsApp with form data
    const msg = encodeURIComponent(
      `Hi! My name is ${form.name.trim()}.\nPhone: ${form.phone.trim()}\n\n${form.message.trim()}`
    );
    window.open(`https://wa.me/9779804085156?text=${msg}`, "_blank");

    setForm({ name: "", phone: "", message: "" });
    setSubmitting(false);
    toast({ title: "Message sent via WhatsApp!", description: "We'll get back to you shortly." });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-cool">Get in Touch</span>
            <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">
              Contact <span className="text-gradient-cool">Us</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Have questions about our products? Reach out to us — we're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div {...fadeUp}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Reach Us Directly</h2>
              <div className="space-y-6">
                <a
                  href="tel:+9779804085156"
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cool-light">
                    <Phone className="h-6 w-6 text-cool" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Phone / WhatsApp</h3>
                    <p className="text-muted-foreground">+977 9804085156</p>
                    <p className="mt-1 text-sm text-muted-foreground">Available 9 AM – 8 PM, 7 days a week</p>
                  </div>
                </a>

                <a
                  href={getWhatsAppGeneralLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">WhatsApp Chat</h3>
                    <p className="text-muted-foreground">Click to start a conversation</p>
                    <p className="mt-1 text-sm text-muted-foreground">Fastest way to reach us for orders & queries</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-warm-light">
                    <MapPin className="h-6 w-6 text-warm" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">Our store is open for in-person visits</p>
                    <p className="mt-1 text-sm text-muted-foreground">Contact us for exact location details</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Send a Message</h2>
                <p className="text-sm text-muted-foreground mb-6">Fill out the form and we'll respond via WhatsApp</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                    <Input
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                    <Input
                      placeholder="Enter your phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      maxLength={1000}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full gap-2 bg-[#25D366] text-primary-foreground hover:bg-[#20bd5a]"
                  >
                    <Send className="h-4 w-4" /> Send via WhatsApp
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
