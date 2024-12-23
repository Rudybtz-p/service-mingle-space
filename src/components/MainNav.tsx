import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Home, MessageSquare, User, LogOut, Shield } from "lucide-react"
import { supabase } from "@/integrations/supabase/client"
import { toast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react"

const components: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    description: "View your personalized dashboard with recent activity and stats.",
    icon: <Home className="w-4 h-4" />,
  },
  {
    title: "Profile",
    href: "/profile",
    description: "Manage your profile settings and personal information.",
    icon: <User className="w-4 h-4" />,
  },
  {
    title: "Messages",
    href: "/messages",
    description: "Check your messages and communicate with others.",
    icon: <MessageSquare className="w-4 h-4" />,
  },
]

export function MainNav() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('user_type')
          .eq('id', session.user.id)
          .single();
        
        setIsAdmin(profile?.user_type === 'admin');
      }
    };

    checkAdminStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error logging out",
        description: "There was a problem logging out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <NavigationMenu className="max-w-2xl mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  to={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/dashboard" className={navigationMenuTriggerStyle()}>
            <Home className="w-4 h-4 mr-2" />
            Dashboard
          </Link>
        </NavigationMenuItem>

        {isAdmin && (
          <NavigationMenuItem>
            <Link to="/admin" className={navigationMenuTriggerStyle()}>
              <Shield className="w-4 h-4 mr-2" />
              Admin
            </Link>
          </NavigationMenuItem>
        )}

        <NavigationMenuItem>
          <button onClick={handleLogout} className={navigationMenuTriggerStyle()}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string; icon?: React.ReactNode }
>(({ className, title, children, to, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"