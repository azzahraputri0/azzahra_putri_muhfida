"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/abouts" },
  { name: "Projects", href: "/projects" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#fffbdb] backdrop-blur-md">
      <div className="container mx-auto px-6 py-5 font-bright">
        <div className="flex items-center justify-between rounded-full border border-[#163b2f]/10 bg-white px-6 py-3 shadow-sm">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5a800] font-bold text-[#163b2f]">
              Z
            </div>

            <span className="text-xl font-bold text-[#163b2f]">
              Zara.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-12 md:flex font-bright font-bold">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                // className={`text-sm font-medium transition-colors hover:text-[#f5a800] ${
                //   item.name === "Home"
                //     ? "text-[#f5a800]"
                //     : "text-[#163b2f]"
                // }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button className="rounded-full bg-[#014a97] px-6 text-white hover:bg-[#0f2d23]">
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
          >
            <Menu className="h-6 w-6 text-[#163b2f]" />
          </Button>
        </div>
      </div>
    </header>
  );
}