import { Button } from "@/components/ui/button";
import { User, Calendar, MapPin, MessageSquare, Phone, Clock } from "lucide-react";

const categories = [
  {
    name: "Escorting",
    icon: User,
    subcategories: [
      {
        name: "Scheduling",
        icon: Calendar,
        description: "Book appointments and manage your schedule"
      },
      {
        name: "Location-based",
        icon: MapPin,
        description: "Find services in your area"
      },
      {
        name: "Communication",
        icon: MessageSquare,
        description: "Direct messaging and contact options"
      },
      {
        name: "Contact Methods",
        icon: Phone,
        description: "Various ways to get in touch"
      },
      {
        name: "Availability",
        icon: Clock,
        description: "Check real-time availability"
      }
    ]
  }
];

export const CategorySection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-secondary to-secondary/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Browse Categories</h2>
        <div className="grid gap-8">
          {categories.map((category) => (
            <div key={category.name} className="space-y-6">
              <Button
                variant="outline"
                className="w-full h-24 text-center hover:bg-primary hover:text-white transition-colors flex flex-col items-center justify-center gap-2"
              >
                <category.icon className="h-8 w-8" />
                {category.name}
              </Button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.subcategories.map((subcategory) => (
                  <Button
                    key={subcategory.name}
                    variant="outline"
                    className="h-auto py-4 text-left hover:bg-accent hover:text-white transition-colors flex items-start gap-3"
                  >
                    <subcategory.icon className="h-5 w-5 mt-1" />
                    <div>
                      <div className="font-medium">{subcategory.name}</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {subcategory.description}
                      </p>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};