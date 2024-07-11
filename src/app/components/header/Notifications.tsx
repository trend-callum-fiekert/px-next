"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/app/components/shadcn-ui/popover";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/app/components/shadcn-ui/tabs";
import { Badge } from "@/app/components/shadcn-ui/badge";
import { Button } from "@/app/components/shadcn-ui/button";
import { Notification } from "./types";
import { useState } from "react";
import { Bell } from "lucide-react";

const fakeNotifications: Notification[] = [
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
];

export const Notifications = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(fakeNotifications);

  const unreadCount = notifications.filter((n) => n.isUnread).length;

  return (
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
                <h4 className="text-sm font-medium">{notification.title}</h4>
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
                  <h4 className="text-sm font-medium">{notification.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {notification.author} • {notification.timestamp}
                  </p>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};
