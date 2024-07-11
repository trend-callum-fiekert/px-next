import React from "react";
import Link from "next/link";
import Image from "next/image";
import Asset from "@/app/assets/px-logo-inverse1.png";

export const Logo = () => {
  return (
    <Link href="/catalog" className="flex-shrink-0">
      <Image
        src={Asset}
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
  );
};
