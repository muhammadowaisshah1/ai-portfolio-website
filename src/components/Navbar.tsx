'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/log9.png"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10 gpu-accelerated">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={logo}
              alt="Agentic AI Logo"
              width={40}
              height={40}
              className="rounded-lg group-hover:scale-110 smooth-transition"
              priority
            />
            <span
              className="hidden sm:inline text-xl font-semibold tracking-wide
    bg-gradient-to-r from-[#60A5FA] via-[#34D399] to-[#FBBF24]
    bg-clip-text text-transparent"
            >
              Agentic AI Developer
            </span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium smooth-transition ${isActive(item.path)
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 smooth-transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`px-4 py-3 rounded-lg font-medium smooth-transition animate-fade-in ${isActive(item.path)
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
