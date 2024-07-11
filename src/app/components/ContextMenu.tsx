"use client";
import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { cn } from "@/app/lib/utils";

// Define the type for context menu items
interface ContextMenuItem {
  label: string;
  href: string;
}

interface ContextMenuProps {
  items: ContextMenuItem[];
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ items }) => {
  const router = useRouter();
  const tabsListRef = useRef<HTMLDivElement>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);

  // Function to check scroll position and update shadows
  const checkScroll = () => {
    if (tabsListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsListRef.current;
      setShowLeftShadow(scrollLeft > 0);
      setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    const tabsList = tabsListRef.current;
    if (tabsList) {
      tabsList.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      checkScroll(); // Initial check
    }
    return () => {
      if (tabsList) {
        tabsList.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      }
    };
  }, []);

  // Function to handle tab change
  const handleTabChange = (value: string) => {
    router.push(value);
  };

  return (
    <div className="relative">
      <Tabs
        value={router.asPath}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <div className="relative">
          {/* Left shadow */}
          <div
            className={cn(
              "absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-200",
              showLeftShadow ? "opacity-100" : "opacity-0"
            )}
          />

          {/* TabsList with horizontal scrolling */}
          <TabsList
            ref={tabsListRef}
            className="h-12 items-center justify-start w-full overflow-x-auto scrollbar-hide"
          >
            {items.map((item) => (
              <TabsTrigger
                key={item.href}
                value={item.href}
                className="px-4 py-2 whitespace-nowrap"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Right shadow */}
          <div
            className={cn(
              "absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-200",
              showRightShadow ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      </Tabs>
    </div>
  );
};
