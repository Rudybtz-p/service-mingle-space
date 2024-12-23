import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  category: string;
  price: string;
  provider: string;
}

export const ServiceCard = ({ title, description, category, price, provider }: ServiceCardProps) => {
  return (
    <Card className="hover:animate-card-hover transition-all cursor-pointer">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <Badge variant="secondary" className="mb-2">{category}</Badge>
          </div>
          <span className="text-lg font-semibold text-accent">{price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="text-sm text-gray-500">
          Offered by <span className="font-medium text-primary">{provider}</span>
        </div>
      </CardContent>
    </Card>
  );
};