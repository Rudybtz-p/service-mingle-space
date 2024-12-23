import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const RecentActivity = () => {
  const { data: activities, isLoading } = useQuery({
    queryKey: ["recent-activities"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("messages")
        .select(`
          content,
          created_at,
          sender:profiles!messages_sender_id_fkey(username),
          receiver:profiles!messages_receiver_id_fkey(username)
        `)
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) {
        console.error("Error fetching recent activities:", error);
        throw error;
      }

      return data;
    },
  });

  if (isLoading) {
    return <div>Loading recent activities...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Recent Activities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities?.map((activity, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <MessageSquare className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium text-primary">
                    {activity.sender?.username}
                  </span>{" "}
                  sent a message to{" "}
                  <span className="font-medium text-primary">
                    {activity.receiver?.username}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date(activity.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};