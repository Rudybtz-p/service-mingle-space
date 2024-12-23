import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const RecentActivity = () => {
  const { data: recentMessages } = useQuery({
    queryKey: ["recent-messages"],
    queryFn: async () => {
      const { data } = await supabase
        .from("messages")
        .select(`
          content,
          created_at,
          sender:profiles!messages_sender_id_fkey(username),
          receiver:profiles!messages_receiver_id_fkey(username)
        `)
        .order("created_at", { ascending: false })
        .limit(5);
      return data;
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentMessages?.map((message, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  {message.sender?.username} → {message.receiver?.username}
                </p>
                <p className="text-sm text-muted-foreground">{message.content}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(message.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;