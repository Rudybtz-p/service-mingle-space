import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { ServiceCard } from "@/components/ServiceCard";
import { SearchBar } from "@/components/SearchBar";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { ProfileContactOptions } from "@/components/ProfileContactOptions";
import { toast } from "@/components/ui/use-toast";

const featuredServices = [
  {
    title: "Professional House Cleaning",
    description: "Experienced cleaners providing thorough home cleaning services with eco-friendly products.",
    category: "Home Services",
    price: "$25/hr",
    provider: "Clean & Shine Co.",
    providerType: "provider"
  },
  {
    title: "Personal Fitness Training",
    description: "Customized workout plans and personal training sessions for all fitness levels.",
    category: "Health & Wellness",
    price: "$40/session",
    provider: "FitLife Pro",
    providerType: "provider"
  },
  {
    title: "Math Tutoring",
    description: "Expert math tutoring for students from elementary to college level.",
    category: "Education",
    price: "$30/hr",
    provider: "MathMasters",
    providerType: "provider"
  },
  {
    title: "International Companion",
    description: "Professional companionship services with multilingual capabilities.",
    category: "International",
    price: "$200/hr",
    provider: "Global Elite",
    providerType: "provider"
  },
  {
    title: "Luxury Date Experience",
    description: "High-end dining and entertainment companion services.",
    category: "Dating",
    price: "$300/hr",
    provider: "Premium Dating Co.",
    providerType: "provider"
  },
  {
    title: "Travel Companion",
    description: "Professional travel companionship for business or leisure trips.",
    category: "Travel",
    price: "$250/hr",
    provider: "Elite Travel Companions",
    providerType: "provider"
  },
];

const Index = () => {
  const handleConnect = () => {
    toast({
      title: "Connect request sent",
      description: "The service provider will be notified of your request.",
    });
  };

  const handleBook = () => {
    toast({
      title: "Booking initiated",
      description: "Choose your preferred time slot to schedule the service.",
    });
  };

  const handleReview = () => {
    toast({
      title: "Review section",
      description: "Share your experience with this service provider.",
    });
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="container -mt-8 relative z-10 mb-12">
        <SearchBar />
      </div>
      <CategorySection />
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Options</h2>
        <ProfileContactOptions
          onConnect={handleConnect}
          onBook={handleBook}
          onReview={handleReview}
        />
      </section>
      <HowItWorks />
      <section className="py-16 container relative">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22')] 
          bg-cover bg-center bg-fixed opacity-10 -z-10"
        ></div>
        <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;