"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FileText,
  Home,
  Settings,
  Upload,
  LogOut,
  CreditCard,
} from "lucide-react";
import { useSupabase } from "@/components/supabase-provider";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export function DashboardNav() {
  const { supabase } = useSupabase();
  const router = useRouter();
  const { toast } = useToast();
  const pathname = usePathname();

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Uploads",
      href: "/dashboard/uploads",
      icon: Upload,
    },
    {
      title: "Summaries",
      href: "/dashboard/summaries",
      icon: FileText,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: CreditCard,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out",
        description: "You have been signed out of your account.",
      });
      router.push("/");
      router.refresh();
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message || "There was an error signing out.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            key={index}
            href={item.href}
          >
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent text-accent-foreground" : "transparent"
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </span>
          </Link>
        );
      })}
      <Button 
        variant="ghost"
        className="justify-start px-3 hover:bg-accent hover:text-accent-foreground transition-none"
        onClick={handleSignOut}
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </Button>
    </nav>
  );
}