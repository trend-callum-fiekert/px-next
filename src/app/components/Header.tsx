"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/px-logo-inverse1.png";
import { Bell, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";

// Define types for navigation items and notifications
type NavItem = {
  href: string;
  label: string;
};

type Notification = {
  id: number;
  title: string;
  timestamp: string;
  author: string;
  isUnread: boolean;
};

// Define props for the Header component
interface HeaderProps {
  navItems: NavItem[];
  profileItems: NavItem[];
}

const ITEM_WIDTH = 120; // Fixed width for each nav item in pixels
const MORE_BUTTON_WIDTH = 100; // Width reserved for the "More" button

export const Header: React.FC<HeaderProps> = ({ navItems, profileItems }) => {
  const [visibleItems, setVisibleItems] = useState<NavItem[]>([]);
  const [hiddenItems, setHiddenItems] = useState<NavItem[]>([]);
  const navRef = useRef<HTMLDivElement>(null);

  const [notifications, setNotifications] = useState<Notification[]>([
    // Sample notifications (you can replace these with real data)
    {
      id: 1,
      title: "New Feature: GCP Support",
      timestamp: "2h ago",
      author: "PX Team",
      isUnread: true,
    },
    {
      id: 2,
      title: "Maintenance scheduled",
      timestamp: "1d ago",
      author: "Davide Talesco",
      isUnread: false,
    },
  ]);

  const unreadCount = notifications.filter((n) => n.isUnread).length;

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

  // Function to render navigation items
  const renderNavItems = (items: NavItem[], onClick?: () => void) =>
    items.map((item) => (
      <Link key={item.href} href={item.href} onClick={onClick}>
        <Button
          variant="ghost"
          className="w-full justify-start text-foreground hover:text-primary hover:bg-transparent"
        >
          {item.label}
        </Button>
      </Link>
    ));

  return (
    <header className="bg-background text-foreground py-4 border-b border-muted">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left section: Mobile Menu and Logo */}
        <div className="flex items-center">
          {/* Mobile Menu */}
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
                {renderNavItems(navItems, () => {})}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo with responsive sizing */}
          <Link href="/catalog" className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Platform Experience Logo"
              width={250}
              height={60}
              sizes="(max-width: 768px) 200px, 250px"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "250px",
              }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation with More dropdown */}
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
                    <Link
                      href={item.href}
                      className="w-full hover:bg-transparent"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </nav>

        {/* Right section: Notifications and Profile Menu */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-foreground hover:text-primary hover:bg-transparent"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 flex items-center justify-center p-0 w-5 h-5 text-xs bg-[#D13438] text-white rounded-full"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-background">
              <Tabs defaultValue="all">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="py-2">
                      <h4 className="text-sm font-medium">
                        {notification.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {notification.author} • {notification.timestamp}
                      </p>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="unread">
                  {notifications
                    .filter((n) => n.isUnread)
                    .map((notification) => (
                      <div key={notification.id} className="py-2">
                        <h4 className="text-sm font-medium">
                          {notification.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {notification.author} • {notification.timestamp}
                        </p>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </PopoverContent>
          </Popover>

          {/* Profile Menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary hover:bg-transparent"
              >
                <Avatar>
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto bg-background">
              {renderNavItems(profileItems)}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};
