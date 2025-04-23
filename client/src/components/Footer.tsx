import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-neutral-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 17.58A5 5 0 0 0 18.92 13a7 7 0 0 0-1.15-13.96 6.86 6.86 0 0 0-5.13 1.84 7.03 7.03 0 0 0-1.64 2.04 5 5 0 0 0-8.19 4.97A5 5 0 0 0 0 12.6a5 5 0 0 0 6.84 4.65A5 5 0 0 0 12 21a5 5 0 0 0 8-3.42z" />
              </svg>
              <span className="font-bold text-xl text-white">Chandra Farewell</span>
            </div>
            <p className="text-neutral-400 max-w-xs">
              A personal farewell website showcasing my cloud engineering journey and experiences.
            </p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
              <Link href="#bio" className="hover:text-primary transition-colors">About Me</Link>
              <Link href="#timeline" className="hover:text-primary transition-colors">Timeline</Link>
              <Link href="#tech" className="hover:text-primary transition-colors">Tech Stack</Link>
              <Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link>
              <Link href="#farewell" className="hover:text-primary transition-colors">Farewell</Link>
              <Link href="#guestbook" className="hover:text-primary transition-colors">Guestbook</Link>
              <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p>© {currentYear} Chandra Farewell. Thanks for all the memories!</p>
        </div>
      </div>
    </footer>
  );
}
