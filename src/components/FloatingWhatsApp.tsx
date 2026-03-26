import { MessageCircle } from "lucide-react";
import { getWhatsAppGeneralLink } from "@/data/products";

const FloatingWhatsApp = () => {
  return (
    <a
      href={getWhatsAppGeneralLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-glow md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground md:h-8 md:w-8" />
    </a>
  );
};

export default FloatingWhatsApp;
