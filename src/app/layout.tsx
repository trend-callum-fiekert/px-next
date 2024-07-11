import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "@/app/components/header/index";
import { ContextMenu } from "./components/ContextMenu";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platform Experience",
  description: `
    The Platform Experience (PX) Platform empowers Trenders to craft and engage with 
    immersive Vision One experiences which can be shared with fellow Trenders, Customers 
    and Partners.`,
};

interface RootLayoutProps {
  children: React.ReactNode;
  contextMenuItems?: Array<{ label: string; href: string }>;
}

const authRole = "admin" || "trender";

const navItems = [
  { href: "/catalog", label: "Catalog" },
  { href: "/instances", label: "Instances" },
  { href: "/invitations", label: "Invitations" },
  { href: "/builder", label: "Builder" },
  { href: "/contracts", label: "Contracts" },
  { href: "/api-keys", label: "API Keys" },
  { href: "/resources", label: "Resources" },
];

const profileItems = [
  { href: "", label: "callum_fiekert@trendmicro.com" },
  { href: "/logout", label: "Logout" },
];

const footerItems = [
  { href: "https://www.trendmicro.com/", label: "Trend Micro" },
  {
    href: "https://www.trendmicro.com/en_us/about/trust-center/privacy.html",
    label: "Privacy",
  },
  { href: "mailto:allofpx-support@trendmicro.com", label: "Contact Us" },
  { href: "https://success.trendmicro.com/business-support", label: "Help" },
];

export default function RootLayout({
  children,
  contextMenuItems,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header navItems={navItems} profileItems={profileItems} />
        {/* {contextMenuItems && contextMenuItems.length > 0 && (
            <ContextMenu items={contextMenuItems} />
          )} */}
        <main className="flex-grow">{children}</main>
        <Footer footerMenuItems={footerItems} />
      </body>
    </html>
  );
}
