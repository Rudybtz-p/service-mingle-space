import { Card, CardContent } from "@/components/ui/card";
import { Search, UserPlus, Calendar, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Search",
    description: "Browse through our wide range of professional services",
  },
  {
    icon: <UserPlus className="h-8 w-8" />,
    title: "Connect",
    description: "Find and connect with trusted local service providers",
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Book",
    description: "Schedule your service at a time that works for you",
  },
  {
    icon: <ThumbsUp className="h-8 w-8" />,
    title: "Review",
    description: "Share your experience and help others find great service",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};