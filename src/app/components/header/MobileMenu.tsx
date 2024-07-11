import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/shadcn-ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/components/shadcn-ui/sheet";
import { NavItem } from "./types";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  navItems: NavItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-2 text-foreground hover:bg-transparent"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] bg-background"
      >
        <nav className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className="w-full justify-start text-foreground hover:text-primary hover:bg-transparent"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
