import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Target, 
  Shield,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every product we sell meets strict quality standards. We work only with trusted manufacturers and suppliers.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our success. We go above and beyond to ensure you get the right materials for your project.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "When we say we'll deliver, we deliver. Our customers trust us because we keep our promises.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "With over 5 years in the industry, our team has the knowledge to help you make informed decisions.",
  },
];

const milestones = [
  { year: "2021", event: "QJWC Construction founded in Metro Manila" },
  { year: "2022", event: "Introduced online ordering and digital services"},
  { year: "2023", event: "Launched contractor partnership program" },
  { year: "2024", event: "Opened second distribution center" },
  { year: "2025", event: "Expanded warehouse capacity to serve more customers" },
  { year: "2026", event: "Celebrating 5 years of excellence" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground sm:text-5xl">
            About QJWC Construction
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
            Building trust through quality materials and exceptional service since 2021
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 font-heading text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  QJWC Construction started with a simple vision: to be the most trusted 
                  construction supply partner in the Philippines. Founded in 2021, we began 
                  as a small building materials store serving local contractors.
                </p>
                <p>
                  Over two decades, we've grown into one of Cavite's leading construction 
                  supply companies, serving thousands of contractors, builders, and homeowners. 
                  Our success is built on our commitment to quality products, competitive pricing, 
                  and exceptional customer service.
                </p>
                <p>
                  Today, we carry a comprehensive range of construction materials from roofing 
                  to structural steel, all carefully selected from trusted manufacturers. Our 
                  team of experienced professionals is dedicated to helping you find the right 
                  materials for every project.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop"
                  alt="QJWC Construction warehouse"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-card"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold">Our Journey</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Key milestones in our 5-year journey
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="relative border-l-2 border-primary/30 pl-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-medium text-primary">{milestone.year}</div>
                  <div className="text-lg">{milestone.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20">
        <div className="container text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90">
            Join thousands of satisfied customers who trust QJWC Construction 
            for their building material needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/products">
                Browse Products
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
