import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-4 px-4 relative bg-gradient-to-b from-gray-900/50 to-yellow-900/20 border-t border-yellow-900/30">

      <div className="container mx-auto max-w-5xl">
        <p className="text-white/50 text-sm">
          &copy; {currentYear} Creovate. All rights reserved.
        </p>
        <p className="text-white/30 text-xs mt-2">
          Crafted with passion by Mausumi
        </p>


        <div className="mt-3 flex justify-center">
          <a
            href="#hero"
            className="p-3 rounded-full bg-gradient-to-br from-gray-900/30 to-yellow-900/20 border border-gray-900/30 hover:border-yellow-500/50 text-yellow-300 hover:text-white transition-all animate-float"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};