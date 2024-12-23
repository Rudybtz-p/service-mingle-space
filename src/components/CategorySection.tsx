import { Button } from "@/components/ui/button";

const categories = [
  "Home Services",
  "Professional",
  "Education",
  "Health & Wellness",
  "Events",
  "Tech Support",
];

export const CategorySection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="h-24 text-center hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};