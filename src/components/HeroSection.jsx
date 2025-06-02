import { ArrowDown, Sparkles, Wand2 } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setScrollProgress(Math.min(scrollY / (heroHeight * 0.5), 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{
        '--scroll-progress': scrollProgress,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/50 to-yellow-900/20"></div>
       
      </div>

      <div className="container max-w-6xl mx-auto text-center z-10 relative">
        <div className="space-y-8 md:space-y-12">
          {/* Title */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-yellow-300 to-gray-200 bg-[length:300%_auto] animate-gradient-flow font-extrabold">
                CREOVATE
              </span>
            </span>
          </h1>

          {/* Subtitle with CTA Button grouped together */}
          <div className="space-y-6 md:space-y-8">
            <div className="relative inline-block">
              <p className="text-xl md:text-4xl max-w-4xl mx-auto opacity-0 animate-fade-in-delay-2 leading-relaxed">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-gray-200 to-yellow-400 bg-[length:300%_auto] animate-gradient-flow-reverse font-bold tracking-wider">
                  Where ideas transcend into motion
                </span>
              </p>
              <Sparkles className="absolute -top-4 -right-6 md:-right-10 w-6 h-6 md:w-8 md:h-8 text-yellow-300 animate-sparkle" />
              <Sparkles className="absolute -bottom-4 -left-6 md:-left-10 w-5 h-5 md:w-7 md:w-7 text-gray-300 animate-sparkle-delay" />
            </div>

            {/* Enhanced CTA Button with magic wand icon */}
            <div className="opacity-0 animate-fade-in-delay-3">
              <a 
                href="#animation" 
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-medium transition-all duration-500 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-yellow-300 to-gray-200 bg-[length:400%_400%] animate-gradient-flow-diagonal font-bold tracking-wide">
                    EXPLORE ANIMATIONS
                  </span>
                  <Wand2 className={`w-5 h-5 text-yellow-300 transition-all duration-500 ${isHovered ? 'translate-x-1 rotate-12 scale-110' : ''}`} />
                </span>
                <span className={`absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-gray-400/20 to-yellow-500/30 bg-[length:400%_400%] animate-gradient-flow-diagonal rounded-full ${isHovered ? 'opacity-100' : 'opacity-70'}`}></span>
                <span className={`absolute inset-0 border border-yellow-300/40 rounded-full transition-all duration-700 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}`}></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with arrow icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float z-20">
        <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-yellow-200 to-gray-300 bg-[length:200%_auto] animate-gradient-flow tracking-wider mb-2">
          SCROLL TO DISCOVER
        </span>
        <div className="relative">
          <ArrowDown className="h-6 w-6 text-yellow-400 animate-bounce" />
          <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping -z-10"></div>
        </div>
      </div>
    </section>
  );
};