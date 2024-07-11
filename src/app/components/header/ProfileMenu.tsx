import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/components/shadcn-ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/app/components/shadcn-ui/popover";
import { Button } from "@/app/components/shadcn-ui/button";
import { NavItem } from "./types";
import Link from "next/link";

interface ProfileMenuProps {
  profileItems: NavItem[];
}

export const ProfileMenu = ({ profileItems }: ProfileMenuProps) => {
  return (
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
        {profileItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:text-primary hover:bg-transparent"
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};
