import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { UserTypeIndicator } from "@/components/UserTypeIndicator";
import { ProfileContactOptions } from "@/components/ProfileContactOptions";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MapPin, Calendar } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Profile {
  id: string;
  username: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  user_type: string;
  created_at: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          navigate("/");
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load profile information",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, toast]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold">Profile not found</h1>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </div>
    );
  }

  const joinDate = new Date(profile.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  const handleConnect = () => {
    toast({
      title: "Connection Request Sent",
      description: "Your connection request has been sent successfully.",
    });
  };

  const handleBook = () => {
    toast({
      title: "Booking Started",
      description: "You can now select your preferred date and time.",
    });
  };

  const handleReview = () => {
    toast({
      title: "Review",
      description: "Share your experience with others.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-primary to-accent">
            {profile.avatar_url && (
              <img
                src={profile.avatar_url}
                alt="Profile cover"
                className="w-full h-full object-cover opacity-30"
              />
            )}
          </div>

          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 -mt-16 mb-6">
              <div className="relative">
                <img
                  src={profile.avatar_url || "/placeholder.svg"}
                  alt={profile.username}
                  className="w-32 h-32 rounded-full border-4 border-background bg-secondary"
                />
                <div className="absolute -bottom-2 -right-2">
                  <UserTypeIndicator userType={profile.user_type} />
                </div>
              </div>
              
              <div className="text-center sm:text-left mt-4 sm:mt-0">
                <h1 className="text-2xl font-bold">{profile.full_name || profile.username}</h1>
                <p className="text-muted-foreground">@{profile.username}</p>
              </div>
            </div>

            {profile.bio && (
              <p className="text-foreground/90 mb-6">{profile.bio}</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>Contact via messages</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Joined {joinDate}</span>
              </div>
            </div>

            <ProfileContactOptions
              onConnect={handleConnect}
              onBook={handleBook}
              onReview={handleReview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;