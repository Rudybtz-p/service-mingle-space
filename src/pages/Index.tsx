import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { ServiceCard } from "@/components/ServiceCard";

const featuredServices = [
  {
    title: "Professional House Cleaning",
    description: "Experienced cleaners providing thorough home cleaning services with eco-friendly products.",
    category: "Home Services",
    price: "$25/hr",
    provider: "Clean & Shine Co.",
  },
  {
    title: "Personal Fitness Training",
    description: "Customized workout plans and personal training sessions for all fitness levels.",
    category: "Health & Wellness",
    price: "$40/session",
    provider: "FitLife Pro",
  },
  {
    title: "Math Tutoring",
    description: "Expert math tutoring for students from elementary to college level.",
    category: "Education",
    price: "$30/hr",
    provider: "MathMasters",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategorySection />
      
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;