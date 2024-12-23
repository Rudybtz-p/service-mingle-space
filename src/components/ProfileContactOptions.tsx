import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileContactOptionsProps {
  onConnect?: () => void;
  onBook?: () => void;
  onReview?: () => void;
}

export const ProfileContactOptions = ({
  onConnect,
  onBook,
  onReview
}: ProfileContactOptionsProps) => {
  const options = [
    {
      icon: <UserPlus className="h-5 w-5" />,
      title: "Connect",
      description: "Find and connect with trusted local service providers",
      action: onConnect
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Book",
      description: "Schedule your service at a time that works for you",
      action: onBook
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Review",
      description: "Share your experience and help others find great service",
      action: onReview
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {options.map((option, index) => (
        <Card key={index} className="hover:shadow-lg transition-all">
          <CardContent className="pt-6">
            <Button
              variant="ghost"
              className="w-full h-auto flex flex-col gap-3 p-4"
              onClick={option.action}
            >
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                {option.icon}
              </div>
              <h3 className="font-semibold text-lg">{option.title}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {option.description}
              </p>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};