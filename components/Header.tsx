"use client";

import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full p-4 z-50 glass-effect border-b border-white border-opacity-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          KARLA LARA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/music" className="hover:text-primary transition-colors">
            Music
          </Link>
          <Link href="/tour" className="hover:text-primary transition-colors">
            Tour
          </Link>
          <Link href="/merch" className="hover:text-primary transition-colors">
            Merch
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/music" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Music
            </Link>
            <Link href="/tour" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Tour
            </Link>
            <Link href="/merch" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Merch
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};