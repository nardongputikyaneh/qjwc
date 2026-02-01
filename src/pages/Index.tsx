import { Layout } from "@/components/layout/Layout";
import {
  HeroSection,
  CategoriesSection,
  FeaturesSection,
  StatsSection,
  CTASection,
} from "@/components/home/HomeSections";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
