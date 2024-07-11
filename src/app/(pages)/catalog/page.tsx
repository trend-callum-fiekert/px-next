import { ContextMenu } from "@/app/components/ContextMenu";

const contextMenuItems = [
  { label: "Popular", href: "/catalog?filter=popular" },
  { label: "Latest", href: "/catalog?filter=latest" },
  { label: "Vision One", href: "/catalog?filter=visionOne" },
  {
    label: "Vision One for Service Providers",
    href: "/catalog?filter=visionOneForServiceProviders",
  },
  { label: "Instant Demo", href: "/catalog?filter=instantDemo" },
  { label: "AWS", href: "/catalog?filter=aws" },
  { label: "Azure", href: "/catalog?filter=azure" },
  { label: "Cloud One", href: "/catalog?filter=cloudOne" },
  { label: "GCP", href: "/catalog?filter=gcp" },
];

export default function Catalog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <ContextMenu items={contextMenuItems} /> */}
      CATALOG PAGE
    </main>
  );
}
