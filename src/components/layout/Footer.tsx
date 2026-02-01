import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Roofing Materials", href: "/products?category=roofing" },
    { name: "Steel Deck", href: "/products?category=steel-deck" },
    { name: "Ficem Board", href: "/products?category=ficem-board" },
    { name: "Gypsum Board", href: "/products?category=gypsum-board" },
    { name: "C Purlins", href: "/products?category=c-purlins" },
    { name: "Plywood", href: "/products?category=plywood" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Request Quote", href: "/contact" },
  ],
  services: [
    { name: "Bulk Purchasing", href: "/services" },
    { name: "Contractor Pricing", href: "/services" },
    { name: "Material Sourcing", href: "/services" },
    { name: "Delivery Services", href: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl font-bold text-primary-foreground">Q</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">QJWC</span>
                <span className="text-sm opacity-80">Construction</span>
              </div>
            </Link>
            <p className="mb-6 max-w-sm opacity-80">
              Your trusted partner for quality construction materials. Serving contractors, 
              builders, and homeowners with reliable products and exceptional service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>0915 099 8094</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>tradingqjwc@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>General Trias, Cavite</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>Mon - Fri : 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} QJWC Construction. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/QJWC.Trading" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
