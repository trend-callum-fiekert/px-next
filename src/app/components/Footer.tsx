import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";
import { ChevronUp } from "lucide-react";

// Define the structure for footer items
type FooterItem = {
  href: string;
  label: string;
};

// Define the props for the Footer component
interface FooterProps {
  footerMenuItems: FooterItem[];
}

export const Footer: React.FC<FooterProps> = ({ footerMenuItems }) => {
  const currentYear = new Date().getFullYear();

  // Function to render footer links
  const renderFooterLinks = () => (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {footerMenuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Desktop footer */}
        <div className="hidden sm:block">
          {renderFooterLinks()}
          <div className="mt-6 text-sm text-gray-400">
            Copyright © 1999 - {currentYear} Trend Micro Incorporated. All
            rights reserved.
          </div>
        </div>

        {/* Mobile footer using Shadcn/ui Sheet component */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="w-full sm:hidden flex items-center justify-center"
            >
              <ChevronUp className="mr-2 h-4 w-4" />
              Footer
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="bg-gray-900 text-white">
            {renderFooterLinks()}
            <div className="mt-6 text-sm text-gray-400">
              Copyright © 1999 - {currentYear} Trend Micro Incorporated. All
              rights reserved.
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </footer>
  );
};
