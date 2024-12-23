import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LayoutDashboard, Users, MessageSquare, Calendar } from "lucide-react";

const DashboardStats = () => {
  const { data: stats } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const [users, messages, connections] = await Promise.all([
        supabase.from("profiles").select("count").single(),
        supabase.from("messages").select("count").single(),
        supabase.from("connections").select("count").single(),
      ]);

      return {
        users: users.data?.count || 0,
        messages: messages.data?.count || 0,
        connections: connections.data?.count || 0,
      };
    },
  });

  const statCards = [
    {
      title: "Total Users",
      value: stats?.users || 0,
      icon: Users,
      description: "Active users on the platform",
    },
    {
      title: "Messages",
      value: stats?.messages || 0,
      icon: MessageSquare,
      description: "Messages exchanged",
    },
    {
      title: "Connections",
      value: stats?.connections || 0,
      icon: Calendar,
      description: "Total connections made",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {statCards.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;