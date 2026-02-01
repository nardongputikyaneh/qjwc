import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Stepper,
  StepperHeader,
  Step,
  StepIndicator,
  StepContent,
  StepperFooter,
  useStepper
} from "@/components/ui/stepper";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  User,
  Building,
  MessageSquare,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { toast } from "sonner";
import { products } from "@/data/products";

// Form Steps Component
interface FormStepsProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

function FormSteps({ formData, handleChange, isSubmitting, onSubmit }: FormStepsProps) {
  const { activeStep, goToNextStep, goToPrevStep, totalSteps } = useStepper();
  
  const validateStep = (step: number): boolean => {
    switch (step) {
      case 0:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 1:
        return formData.subject.trim() !== "";
      case 2:
        return formData.message.trim() !== "";
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      goToNextStep();
    } else {
      toast.error("Please fill in all required fields");
    }
  };

  return (
    <>
      {/* Step 1: Personal Info */}
      <StepContent step={0}>
        <div className="space-y-6">
          <div className="animate-stepper-fade-field stagger-1">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="mt-2 h-12"
            />
          </div>
          <div className="animate-stepper-fade-field stagger-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="mt-2 h-12"
            />
          </div>
          <div className="animate-stepper-fade-field stagger-3">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+63 XXX XXX XXXX"
              className="mt-2 h-12"
            />
          </div>
          <div className="animate-stepper-fade-field stagger-4">
            <Label htmlFor="company" className="text-sm font-medium">
              Company Name
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company (optional)"
              className="mt-2 h-12"
            />
          </div>
        </div>
      </StepContent>

      {/* Step 2: Subject */}
      <StepContent step={1}>
        <div className="space-y-6">
          <div className="animate-stepper-fade-field stagger-1">
            <Label htmlFor="subject" className="text-sm font-medium">
              Subject <span className="text-destructive">*</span>
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is your inquiry about?"
              required
              className="mt-2 h-12"
            />
          </div>
          <div className="animate-stepper-fade-field stagger-2 rounded-xl bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Tip:</strong> Be specific about your needs. For example: "Bulk order of roofing materials" or "Quote for construction project"
            </p>
          </div>
        </div>
      </StepContent>

      {/* Step 3: Message */}
      <StepContent step={2}>
        <div className="space-y-6">
          <div className="animate-stepper-fade-field stagger-1">
            <Label htmlFor="message" className="text-sm font-medium">
              Your Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or inquiry..."
              required
              rows={6}
              className="mt-2 resize-none"
            />
          </div>
          <div className="animate-stepper-fade-field stagger-2 rounded-xl border border-border bg-card p-4">
            <h4 className="mb-2 text-sm font-medium">Summary</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p><strong>Name:</strong> {formData.name || "—"}</p>
              <p><strong>Email:</strong> {formData.email || "—"}</p>
              {formData.phone && <p><strong>Phone:</strong> {formData.phone}</p>}
              {formData.company && <p><strong>Company:</strong> {formData.company}</p>}
              <p><strong>Subject:</strong> {formData.subject || "—"}</p>
            </div>
          </div>
        </div>
      </StepContent>

      <StepperFooter>
        <Button
          type="button"
          variant="outline"
          onClick={goToPrevStep}
          disabled={activeStep === 0}
          className="btn-hover-effect"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {activeStep < totalSteps - 1 ? (
          <Button
            type="button"
            onClick={handleNext}
            className="btn-hover-effect"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={isSubmitting || !validateStep(activeStep)}
            className="btn-hover-effect"
          >
            {isSubmitting ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </StepperFooter>
    </>
  );
}

const Contact = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product");
  const selectedProduct = productId ? products.find(p => p.id === productId) : null;

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: selectedProduct ? `Quote Request: ${selectedProduct.name}` : "",
    message: selectedProduct 
      ? `I would like to request a quote for:\n\nProduct: ${selectedProduct.name}\nCategory: ${selectedProduct.category}\n\nPlease provide pricing and availability information.` 
      : "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("quote_requests")
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          subject: formData.subject,
          message: formData.message,
        });

      if (error) throw error;
      
      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setActiveStep(0);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground sm:text-5xl animate-fade-in">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Get in touch with our team for quotes, inquiries, or any questions
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="animate-slide-up">
              <h2 className="mb-6 font-heading text-2xl font-bold">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">0915 099 8094</p>
                    <p className="text-muted-foreground">0915 099 8094</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">tradingqjwc@gmail.com</p>
                    <p className="text-muted-foreground">tradingqjwc@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">
                      Manggahan, General Trias<br />
                      Cavite, Philippines 4107<br />
                      
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday - Sunday : Closed</p>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form with Stepper */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10 animate-success-scale">
                      <CheckCircle2 className="h-10 w-10 text-success" />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      Message Sent!
                    </h3>
                    <p className="mb-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
                      Thank you for contacting us. Our team will get back to you within 24 hours.
                    </p>
                    <Button onClick={handleReset} className="btn-hover-effect animate-fade-in" style={{ animationDelay: "0.4s" }}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="mb-2 font-heading text-2xl font-bold">
                      {selectedProduct ? "Request a Quote" : "Send us a Message"}
                    </h2>
                    <p className="mb-8 text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit}>
                      <Stepper activeStep={activeStep} onStepChange={setActiveStep}>
                        <StepperHeader>
                          <StepIndicator step={0} label="Your Info" />
                          <StepIndicator step={1} label="Subject" />
                          <StepIndicator step={2} label="Message" />
                        </StepperHeader>

                        <Step>
                          <FormSteps
                            formData={formData}
                            handleChange={handleChange}
                            isSubmitting={isSubmitting}
                            onSubmit={handleSubmit}
                          />
                        </Step>
                        <Step />
                        <Step />
                      </Stepper>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 w-full overflow-hidden rounded-lg">
          <iframe
    title="QJWC Steel Trading Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.258511195301!2d120.9112721!3d14.296406899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d50faa1f70a7%3A0xefb550765b619728!2sQJWC%20STEEL%20TRADING!5e0!3m2!1sen!2sph!4v1769663554428!5m2!1sen!2sph"
    className="h-full w-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
                />
      </section>
    </Layout>
  );
};

export default Contact;
