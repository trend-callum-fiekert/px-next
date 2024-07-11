"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/app/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/shadcn-ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { NavItem } from "./types";
import { ITEM_WIDTH, MORE_BUTTON_WIDTH } from "./utils";

interface DesktopNavigationProps {
  navItems: NavItem[];
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navItems,
}) => {
  const [visibleItems, setVisibleItems] = useState<NavItem[]>([]);
  const [hiddenItems, setHiddenItems] = useState<NavItem[]>([]);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (!navRef.current) return;

      const navWidth = navRef.current.offsetWidth;
      const maxItems = Math.floor((navWidth - MORE_BUTTON_WIDTH) / ITEM_WIDTH);

      setVisibleItems(navItems.slice(0, maxItems));
      setHiddenItems(navItems.slice(maxItems));
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [navItems]);

  return (
    <nav
      ref={navRef}
      className="hidden md:flex flex-grow justify-center items-center"
    >
      {visibleItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`w-[${ITEM_WIDTH}px] text-center`}
        >
          <Button
            variant="ghost"
            className="w-full text-foreground hover:text-primary hover:bg-transparent"
          >
            {item.label}
          </Button>
        </Link>
      ))}
      {hiddenItems.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`w-[${MORE_BUTTON_WIDTH}px] text-foreground hover:text-primary hover:bg-transparent`}
            >
              More <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background">
            {hiddenItems.map((item) => (
              <DropdownMenuItem
                key={item.href}
                className="text-foreground hover:text-primary hover:bg-transparent focus:text-primary focus:hover:bg-transparent"
              >
                <Link href={item.href} className="w-full hover:bg-transparent">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
};
