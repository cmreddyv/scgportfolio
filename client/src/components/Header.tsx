import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 17.58A5 5 0 0 0 18.92 13a7 7 0 0 0-1.15-13.96 6.86 6.86 0 0 0-5.13 1.84 7.03 7.03 0 0 0-1.64 2.04 5 5 0 0 0-8.19 4.97A5 5 0 0 0 0 12.6a5 5 0 0 0 6.84 4.65A5 5 0 0 0 12 21a5 5 0 0 0 8-3.42z" />
          </svg>
          <span className="font-bold text-xl text-primary">Chandra Farewell</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#bio" className="text-neutral-600 hover:text-primary transition-colors">About Me</Link>
          <Link href="#timeline" className="text-neutral-600 hover:text-primary transition-colors">Timeline</Link>
          <Link href="#tech" className="text-neutral-600 hover:text-primary transition-colors">Tech Stack</Link>
          <Link href="#gallery" className="text-neutral-600 hover:text-primary transition-colors">Gallery</Link>
          <Link href="#farewell" className="text-neutral-600 hover:text-primary transition-colors">Farewell</Link>
          <Link href="#guestbook" className="text-neutral-600 hover:text-primary transition-colors">Guestbook</Link>
          <Link href="#contact" className="text-neutral-600 hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 17.58A5 5 0 0 0 18.92 13a7 7 0 0 0-1.15-13.96 6.86 6.86 0 0 0-5.13 1.84 7.03 7.03 0 0 0-1.64 2.04 5 5 0 0 0-8.19 4.97A5 5 0 0 0 0 12.6a5 5 0 0 0 6.84 4.65A5 5 0 0 0 12 21a5 5 0 0 0 8-3.42z" />
              </svg>
              <span className="font-bold text-xl text-primary">Chandra Farewell</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <Link href="#bio" onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:text-primary transition-colors py-2 border-b">About Me</Link>
            <Link href="#timeline" onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:text-primary transition-colors py-2 border-b">Timeline</Link>
            <Link href="#tech" onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:text-primary transition-colors py-2 border-b">Tech Stack</Link>
            <Link href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:text-primary transition-colors py-2 border-b">Gallery</Link>
            <Link href="#farewell" onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:text-primary transition-colors py-2 border-b">Farewell</Link>
            <Link href="#guestbook" onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:text-primary transition-colors py-2 border-b">Guestbook</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-neutral-600 hover:text-primary transition-colors py-2 border-b">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
