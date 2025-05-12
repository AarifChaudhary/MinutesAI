import { Headphones } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <div className="flex items-center gap-2 text-sm">
          <Headphones className="h-4 w-4 text-primary" />
          <span>© {new Date().getFullYear()} Lovable AI. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="/terms" className="hover:text-foreground">Terms</a>
          <a href="/privacy" className="hover:text-foreground">Privacy</a>
          <a href="/contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}