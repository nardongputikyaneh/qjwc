import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Award, Clock, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const categories = [
  {
    name: "Roofing",
    description: "Tilespan, Ribtype & Corrugated",
    image: "/tilespan1.jpg",
    href: "/products?category=roofing",
  },
  {
    name: "Steel Deck",
    description: "Premium steel deck panels",
    image: "/steeldeck1.png",
    href: "/products?category=steel-deck",
  },
  {
    name: "Ficem Board",
    description: "Durable fiber cement boards",
    image: "/ficem3.jpg",
    href: "/products?category=ficem-board",
  },
  {
    name: "Gypsum Board",
    description: "Quality drywall solutions",
    image: "/gypsum4.jpg",
    href: "/products?category=gypsum-board",
  },
  {
    name: "C Purlins",
    description: "Structural steel purlins",
    image: "/cpur2.jpg",
    href: "/products?category=c-purlins",
  },
  {
    name: "Plywood",
    description: "Marine & ordinary plywood",
    image: "/plywood1.jpg",
    href: "/products?category=plywood",
  },
];

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All materials meet industry standards with warranty support",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Reliable delivery service across Metro Manila and nearby provinces",
  },
  {
    icon: Award,
    title: "5 Years Experience",
    description: "Trusted by contractors and builders since 2021",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Large inventory ready for immediate pickup or delivery",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "400+", label: "Projects Served" },
  { value: "80+", label: "Regular Clients" },
  { value: "99%", label: "Satisfaction Rate" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="QJWC Construction warehouse"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl animate-slide-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur">
            <CheckCircle2 className="h-4 w-4" />
            Trusted Construction Supply Partner
          </div>
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
            QJWC Construction – Your Trusted Construction Supply Partner
          </h1>
          <p className="mb-8 text-lg text-background/90 sm:text-xl">
            Quality materials, reliable service, and competitive pricing. 
            Serving contractors, builders, and homeowners with excellence for over 5 years.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="xl" variant="hero">
              <Link to="/products">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="heroOutline">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CategoriesSection() {
  return (
    <section className="py-20 gradient-surface">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
            Browse Our Product Categories
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From roofing to structural materials, we carry everything you need for your construction projects
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative overflow-hidden rounded-xl shadow-card transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-1 text-xl font-bold text-background">{category.name}</h3>
                <p className="text-sm text-background/80">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
            Why Choose QJWC Construction
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're committed to providing the best products and service to our customers
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="gradient-hero py-16">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary-foreground sm:text-5xl">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="rounded-2xl bg-muted p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Contact us today for a free quote. Our team is ready to help you find 
            the right materials for your construction needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
