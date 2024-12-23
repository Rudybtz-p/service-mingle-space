import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    service: "House Cleaning",
    text: "Exceptional service! The cleaner was professional, thorough, and went above and beyond my expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    service: "Personal Training",
    text: "My trainer created a perfect workout plan that fits my schedule and goals. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    service: "Math Tutoring",
    text: "Great experience with my math tutor. Patient, knowledgeable, and helped improve my grades significantly.",
    rating: 4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};