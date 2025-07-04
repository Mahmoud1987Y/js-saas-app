"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-joureny" },
];
const Navitems = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={cn(pathname === href && 'text-primary bg-amber-400 px-3 rounded-sm font-bold')}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navitems;
