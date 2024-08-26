"use client";
import AsideNavigation from "@/components/aside";
import { usePathname } from "next/navigation";
import React from "react";

export default function AsideNavigationWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const path = usePathname();
  const currentPath = ["/signup", "/login"];

  return (
    <>
      {!currentPath.includes(path) && <AsideNavigation />}
      {children}
    </>
  );
}
