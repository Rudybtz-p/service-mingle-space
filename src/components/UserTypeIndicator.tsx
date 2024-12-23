import { Badge } from "@/components/ui/badge";
import { Crown, User, UserCog } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface UserTypeIndicatorProps {
  userType: string;
  showLabel?: boolean;
}

export const UserTypeIndicator = ({ userType, showLabel = true }: UserTypeIndicatorProps) => {
  const typeConfig = {
    admin: {
      icon: Crown,
      label: "Administrator",
      variant: "destructive" as const,
    },
    provider: {
      icon: UserCog,
      label: "Service Provider",
      variant: "secondary" as const,
    },
    client: {
      icon: User,
      label: "Client",
      variant: "outline" as const,
    },
  };

  const config = typeConfig[userType as keyof typeof typeConfig] || typeConfig.client;
  const Icon = config.icon;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge variant={config.variant} className="gap-1">
            <Icon className="h-3 w-3" />
            {showLabel && <span>{config.label}</span>}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>{config.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};