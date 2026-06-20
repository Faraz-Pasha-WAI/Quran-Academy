"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Tutors", href: "#tutors" },
    { name: "Registration", href: "#registration" },
  ];

  const resourceLinks = [
    { name: "Tajweedi Quran", href: "https://drive.google.com/file/d/11CrjIKmn1nqZ0tusN9d4reXkpQUvkFag/view?usp=sharing" },
    { name: "Download Quran", href: "https://drive.google.com/file/d/11CrjIKmn1nqZ0tusN9d4reXkpQUvkFag/view?usp=sharing" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/blessing-quran-logo.jpeg" alt="Blessing Quran Logo" width={120} height={48} className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium hover:text-primary transition-colors",
                    isScrolled ? "text-foreground" : "text-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors",
                    isScrolled ? "text-foreground" : "text-foreground hover:text-primary"
                  )}
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                >
                  Resources <ChevronDown className="h-4 w-4" />
                </button>
                
                {resourcesOpen && (
                  <div className="absolute top-full right-0 pt-2 w-56 z-50">
                    <div className="bg-white rounded-md shadow-lg py-2 border border-border/50 animate-in fade-in slide-in-from-top-2">
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </Link>
                    ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="#blog"
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  isScrolled ? "text-foreground" : "text-foreground hover:text-primary"
                )}
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  isScrolled ? "text-foreground" : "text-foreground hover:text-primary"
                )}
              >
                Contact Us
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button asChild variant="outline" className={cn("rounded-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10", !isScrolled && "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white")}>
                <a href="https://wa.me/923142658679" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
                </a>
              </Button>
              <Button asChild variant={isScrolled ? "default" : "secondary"} className="rounded-full">
                <Link href="#registration">Register Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className={cn("h-6 w-6", "text-foreground")} /> : <Menu className={cn("h-6 w-6", "text-foreground")} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-border/50 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground font-medium py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="py-2 border-b border-border/50">
                <p className="font-medium text-foreground mb-2">Resources</p>
                <div className="flex flex-col pl-4 gap-2">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#blog"
                className="text-foreground font-medium py-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="text-foreground font-medium py-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Button className="mt-4 w-full rounded-full" asChild>
                <Link href="#registration" onClick={() => setMobileMenuOpen(false)}>Register Now</Link>
              </Button>
              <Button variant="outline" className="mt-2 w-full rounded-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10" asChild>
                <a href="https://wa.me/923142658679" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923142658679"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
