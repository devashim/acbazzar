import { Snowflake, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-cool">
                <Snowflake className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-heading font-bold">CoolBreeze</span>
            </div>
            <p className="mt-3 text-sm opacity-70">
              Your trusted destination for premium air conditioners. Heating & cooling solutions for every home.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/products" className="hover:opacity-100 transition-opacity">All Products</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Contact Us</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> sales@coolbreeze.in</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai, Maharashtra, India</div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-background/20 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} CoolBreeze. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
