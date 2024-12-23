import { Button } from "@/components/ui/button";
import { User, Users, Heart, UserCircle2, UserCircle, UsersRound } from "lucide-react";

const categories = [
  {
    name: "Escorting",
    icon: User,
    subcategories: [
      {
        name: "International",
        icon: Users,
        description: "Brazilian, Asian, British and other international escorts"
      },
      {
        name: "Adult Dating",
        icon: Heart,
        description: "Singles and couples dating services"
      },
      {
        name: "Male Escorts",
        icon: UserCircle2,
        description: "Professional male escort services"
      },
      {
        name: "Female Escorts",
        icon: UserCircle,
        description: "Professional female escort services"
      },
      {
        name: "Couples",
        icon: UsersRound,
        description: "Services for couples and group activities"
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