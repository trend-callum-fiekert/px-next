import React from "react";
import { Logo } from "../common/Logo";
import { MobileMenu } from "./MobileMenu";
import { DesktopNavigation } from "./DesktopNavigation";
import { Notifications } from "./Notifications";
import { ProfileMenu } from "./ProfileMenu";
import { NavItem } from "./types";

export interface HeaderProps {
  navItems: NavItem[];
  profileItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ navItems, profileItems }) => {
  return (
    <header className="bg-background text-foreground py-4 border-b border-muted">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <MobileMenu navItems={navItems} />
          <Logo />
        </div>
        <DesktopNavigation navItems={navItems} />
        <div className="flex items-center space-x-4">
          <Notifications />
          <ProfileMenu profileItems={profileItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
