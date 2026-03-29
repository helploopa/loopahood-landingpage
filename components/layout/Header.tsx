"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { LoopaLogo } from "@/components/ui/LoopaLogo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:opacity-80 transition-opacity flex items-center"
          >
            <LoopaLogo className="h-10 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white/80 hover:text-[#EF9622] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-white/80 hover:text-[#EF9622] transition-colors duration-300"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-[#EF9622] transition-colors duration-300"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="px-6 py-2.5 bg-white text-black rounded-full transition-all duration-300 hover:bg-[#EF9622] hover:text-white hover:shadow-lg hover:shadow-[#EF9622]/30 hover:scale-105"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 py-4"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("waitlist")}
                className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all text-center"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
