import { Snowflake, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppGeneralLink } from "@/data/products";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-cool">
                <Snowflake className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">CoolBreeze</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Your trusted destination for premium air conditioners. Heating & cooling solutions for every home and office.
            </p>
            <a
              href={getWhatsAppGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Chat with Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-sm opacity-70">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/products" className="hover:opacity-100 transition-opacity">All Products</Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Categories</h4>
            <div className="flex flex-col gap-2.5 text-sm opacity-70">
              <Link to="/products" className="hover:opacity-100 transition-opacity">Split ACs</Link>
              <Link to="/products" className="hover:opacity-100 transition-opacity">Window ACs</Link>
              <Link to="/products" className="hover:opacity-100 transition-opacity">Hot & Cold ACs</Link>
              <Link to="/products" className="hover:opacity-100 transition-opacity">Portable ACs</Link>
              <Link to="/products" className="hover:opacity-100 transition-opacity">Commercial ACs</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <a href="tel:+919876543210" className="flex items-center gap-2.5 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4 shrink-0" /> +91 98765 43210
              </a>
              <a href="mailto:sales@coolbreeze.in" className="flex items-center gap-2.5 hover:opacity-100 transition-opacity">
                <Mail className="h-4 w-4 shrink-0" /> sales@coolbreeze.in
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Shop No. 12, Electronics Market, Lamington Road, Mumbai 400004</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/20 pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs opacity-50">© {new Date().getFullYear()} CoolBreeze. All rights reserved.</p>
          <p className="text-xs opacity-50">Authorized dealer of LG, Samsung, Daikin, Voltas, Hitachi, Carrier & more</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
