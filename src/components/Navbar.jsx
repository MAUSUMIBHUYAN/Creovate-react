import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Animation", href: "#animation" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-500 ease-in-out",
          isScrolled
            ? "py-3 bg-gradient-to-b from-yellow/80 via-yellow/70 to-transparent backdrop-blur-xl shadow-lg"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div
            onClick={() => onLogoClick && onLogoClick()}
            className="text-3xl md:text-4xl font-bold flex items-center select-none cursor-pointer group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" && onLogoClick) onLogoClick();
            }}
          >
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 font-bold tracking-wider font-sans">
                CREOVATE
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-yellow-300 group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="flex space-x-8">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="relative text-yellow-100/90 text-lg font-medium px-4 py-2 transition-all duration-300 group"
                >
                  <span className="relative z-10 group-hover:text-white">
                    {item.name}
                  </span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-500"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-yellow-200 z-[60] relative group"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <X size={32} className="text-yellow-400 transform transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Menu size={32} className="text-yellow-200 group-hover:text-yellow-400 transition-all duration-300 group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved outside the nav */}
      <div
        className={cn(
          "fixed inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/80 z-40 flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-8"
        )}
      >
        <div className="flex flex-col space-y-8 text-3xl w-full px-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative text-yellow-100/90 px-6 py-4 transition-all duration-300 group text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10 group-hover:text-white group-hover:tracking-wider transition-all duration-300">
                {item.name}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute left-1/2 bottom-2 w-0 h-0.5 bg-yellow-300 group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-500"></span>
            </a>
          ))}
        </div>
        
      </div>
    </>
  );
};