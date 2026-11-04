"use client";
import { usePathname } from "next/navigation";

export function NavSpacer() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <div aria-hidden="true" className="h-16 md:h-20" />;
}
