import React from "react";
import Link from "next/link";

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

  return (
    <footer className="bg-background text-[#adadad] text-center py-2 text-xs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Footer links */}
          <nav className="flex justify-center space-x-4 mb-1">
            {footerMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Copyright text */}
          <div>
            Copyright © 1999 - {currentYear} Trend Micro Incorporated. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
