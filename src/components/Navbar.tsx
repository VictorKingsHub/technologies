"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav-items";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import Image from 'next/image';


const Navbar = () => {
  const pathname = usePathname(); // ✅ Get current path

  return (
    <header className="w-full border-b bg-blue-50 sticky top-0 z-50 md:py-2">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          {/* Taught<span className="text-blue-300">level</span> */}
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={80}
            className="object-contain  hover:grayscale-0 transition duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xl ${
                  isActive
                    ? "font-semibold text-primary"
                    : " text-muted-foreground"
                } hover:text-primary transition-colors`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <FiMenu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-6">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-base ${
                        isActive
                          ? "font-bold text-primary"
                          : "font-medium text-muted-foreground"
                      } hover:text-primary transition-colors`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
