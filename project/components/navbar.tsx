"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Headphones } from "lucide-react";
import { useSupabase } from "@/components/supabase-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { user, isLoading } = useSupabase();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled || isDashboard
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center space-x-2 font-semibold text-lg"
          >
            <Headphones className="h-6 w-6 text-primary" />
            <span>Lovable AI</span>
          </Link>
          
          {!isDashboard && (
            <nav className="hidden md:flex items-center space-x-6 ml-10">
              <Link
                href="/#features"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="/#faq"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                FAQ
              </Link>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isLoading && (
            <>
              {user ? (
                <Button variant="ghost" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button variant="ghost" asChild>
                    <Link href="/auth/login">Login</Link>
                  </Button>
                  <Button variant="default" asChild>
                    <Link href="/auth/signup">Sign up</Link>
                  </Button>
                </>
              )}
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}