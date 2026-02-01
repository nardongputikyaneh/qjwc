import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Users, 
  Search, 
  Package,
  CheckCircle2,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Bulk Purchasing",
    description: "Get significant discounts on large volume orders. Perfect for contractors and construction companies with ongoing projects.",
    features: [
      "Volume-based pricing tiers",
      "Flexible payment terms",
      "Reserved inventory for regular customers",
      "Priority order processing",
    ],
  },
  {
    icon: Users,
    title: "Contractor Pricing",
    description: "Exclusive pricing programs for licensed contractors and construction professionals.",
    features: [
      "Special contractor discounts",
      "Monthly credit accounts",
      "Dedicated account manager",
      "Project-based quotations",
    ],
  },
  {
    icon: Search,
    title: "Material Sourcing",
    description: "Can't find what you need? Our team can source specialized materials from our network of suppliers.",
    features: [
      "Access to wide supplier network",
      "Special order capabilities",
      "Competitive pricing on sourced items",
      "Quality assurance guarantee",
    ],
  },
  {
    icon: Truck,
    title: "Delivery Services",
    description: "Reliable delivery services across Metro Manila and nearby provinces with flexible scheduling.",
    features: [
      "All items are made to order, 2-3 days process only",
      "Scheduled delivery options",
      "Careful handling of materials",
      "Real-time delivery tracking",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
            Comprehensive construction supply solutions tailored to your project needs
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mb-4 font-heading text-2xl font-bold">{service.title}</h2>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold">
            Need a Custom Solution?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Contact our team to discuss your specific project requirements. 
            We're here to help you find the right materials and services.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
