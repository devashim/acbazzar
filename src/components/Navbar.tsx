import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppGeneralLink } from "@/data/products";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/midea", label: "Midea ACs" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-cool">
            <Snowflake className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-heading font-bold text-foreground">CoolBreeze</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              <Button
                variant={location.pathname === link.to ? "default" : "ghost"}
                size="sm"
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <a href={getWhatsAppGeneralLink()} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="ml-2 bg-gradient-warm text-secondary-foreground hover:opacity-90">
              WhatsApp Us
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-card p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
                <Button variant={location.pathname === link.to ? "default" : "ghost"} className="w-full justify-start">
                  {link.label}
                </Button>
              </Link>
            ))}
            <a href={getWhatsAppGeneralLink()} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-gradient-warm text-secondary-foreground hover:opacity-90">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
