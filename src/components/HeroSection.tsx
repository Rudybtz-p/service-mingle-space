import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Local Services You Can Trust
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Connect with skilled professionals in your area for all your service needs
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              Find Services
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Become a Provider
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};