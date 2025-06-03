import React from 'react';
import { Play, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";

const animations = [
  {
    id: 1,
    title: "Galaxy Journey",
    description: "a colorful nebula surrounded by shimmering stars",
    path: "Galaxy/index.html",
    thumbnail: "Galaxy/thumbnail.webp",
    preview: "Galaxy/preview.mp4",
    theme: "MotionCraft"
  },
  {
    id: 2,
    title: "Sunset Dreams",
    description: "Vibrant sunset colors blending",
    path: "sunset/index.html",
    thumbnail: "sunset/thumbnail.webp",
    preview: "sunset/preview.mp4",
    theme: "Art"
  },
  {
    id: 3,
    title: "Digital Matrix",
    description: "Falling code rain inspired by the iconic Matrix effect",
    path: "matrix/index.html",
    thumbnail: "matrix/thumbnail.webp",
    preview: "matrix/preview.mp4",
    theme: "MotionCraft"
  },
  {
    id: 4,
    title: "Particle Playground",
    description: "Dynamic red particles connect with nearby dots",
    path: "particles/index.html",
    thumbnail: "particles/thumbnail.webp",
    preview: "particles/preview.mp4",
    theme: "MotionCraft"
  },
  {
    id: 5,
    title: "Lunar Serenity",
    description: "Peaceful sleeping moon art",
    path: "sleeping_moon/index.html",
    thumbnail: "sleeping_moon/thumbnail.webp",
    preview: "sleeping_moon/preview.mp4",
    theme: "Art"
  },
  {
    id: 6,
    title: "Geometric Harmony",
    description: "Symmetrical shapes gently float and align in motion",
    path: "Floating_shapes/index.html",
    thumbnail: "Floating_shapes/thumbnail.webp",
    preview: "Floating_shapes/preview.mp4",
    theme: "MotionCraft"
  },
  {
    id: 7,
    title: "Creovate Letters",
    description: "Elegant motion of letters spelling 'Creovate'",
    path: "Creovate/index.html",
    thumbnail: "Creovate/thumbnail.webp",
    preview: "Creovate/preview.mp4",
    theme: "MotionCraft"
  },
  {
    id: 8,
    title: "Cherry Blossom",
    description: "Cherry blossom petals gently falls",
    path: "cherry_blossom/index.html",
    thumbnail: "cherry_blossom/thumbnail.webp",
    preview: "cherry_blossom/preview.mp4",
    theme: "MotionCraft"
  },
  {
    id: 9,
    title: "Colored Rings",
    description: "Vivid rings in motion",
    path: "colored_rings/index.html",
    thumbnail: "colored_rings/thumbnail.webp",
    preview: "colored_rings/preview.mp4",
    theme: "Art"
  },
  {
    id: 10,
    title: "Cross",
    description: "A glowing Christ cross transitions from deep red to radiant holy light",
    path: "cross/index.html",
    thumbnail: "cross/thumbnail.webp",
    preview: "cross/preview.mp4",
    theme: "MotionCraft"
  },
  {
    id: 11,
    title: "Fireflies",
    description: "Tiny glowing fireflies flicker across a dark night",
    path: "Fireflies/index.html",
    thumbnail: "Fireflies/thumbnail.webp",
    preview: "Fireflies/preview.mp4",
    theme: "MotionCraft"
  },
  {
    id: 12,
    title: "Red Imposter",
    description: "You are the Imposter",
    path: "imposter/index.html",
    thumbnail: "imposter/thumbnail.webp",
    preview: "imposter/preview.mp4",
    theme: "Art"
  },
  {
    id: 14,
    title: "Squares Rotation",
    description: "Perfectly aligned squares rotation",
    path: "squares_rotation/index.html",
    thumbnail: "squares_rotation/thumbnail.webp",
    preview: "squares_rotation/preview.mp4",
    theme: "Art"
  },
  {
    id: 15,
    title: "Water Waves",
    description: "Smooth animated waves across the screen",
    path: "waves/index.html",
    thumbnail: "waves/thumbnail.webp",
    preview: "waves/preview.mp4",
    theme: "MotionCraft"
  },
  {
    id: 16,
    title: "Northern Lights Effect",
    description: "Mesmerizing animated northern lights with mountain silhouettes",
    path: "NorthernLights/index.html",
    thumbnail: "NorthernLights/thumbnail.webp",
    preview: "NorthernLights/preview.mp4",
    theme: "Art"
  },
  {
    id: 17,
    title: "Underwater Bubble Effect",
    description: "Rising bubbles with aquatic light filtering",
    path: "Underwater/index.html",
    thumbnail: "Underwater/thumbnail.webp",
    preview: "Underwater/preview.mp4",
    theme: "MotionCraft"
  },
];

const AnimationItem = React.memo(({ animation, hoveredId, setHoveredId, isLiked, handleLike }) => {
  const videoRef = useRef(null);
  const hoverTimerRef = useRef(null);
  
  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      setHoveredId(animation.id);
      if (videoRef.current) {
        videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      }
    }, 3000);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setHoveredId(null);
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="flex-shrink-0 w-64 h-80 md:w-72 md:h-96 relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={animation.preview}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ display: hoveredId === animation.id ? 'block' : 'none' }}
      />
      
      <img
        src={animation.thumbnail}
        alt={animation.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ display: hoveredId === animation.id ? 'none' : 'block' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

      <div className="relative z-20 h-full flex flex-col justify-end p-4 md:p-6">
        <motion.h3 
          className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {animation.title}
        </motion.h3>

        <motion.p 
          className="text-white/80 mb-3 md:mb-4 text-xs md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {animation.description}
        </motion.p>

        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <button
            onClick={(e) => handleLike(animation.id, e)}
            className="p-1 md:p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label={isLiked ? "Unlike this animation" : "Like this animation"}
          >
            <Heart 
              className={`w-4 h-4 md:w-5 md:h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`}
            />
          </button>

          <a
            href={animation.path}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 md:gap-2 bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full font-medium hover:bg-white/90 transition-colors text-sm md:text-base"
          >
            <div className="w-4 h-4 md:w-5 md:h-5 bg-black flex items-center justify-center rounded-sm">
              <Play className="w-2 h-2 md:w-3 md:h-3 fill-white" />
            </div>
            Play
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
});

const ScrollButton = React.memo(({ direction, onClick }) => (
  <button
    className={`absolute ${direction === 'left' ? 'left-2' : 'right-2'} top-1/2 transform -translate-y-1/2 z-30 p-2 bg-black/70 rounded-full backdrop-blur hover:bg-yellow-500/30 transition w-10 h-10 flex items-center justify-center`}
    onClick={onClick}
    aria-label={`Scroll ${direction}`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="text-white w-6 h-6" />
    ) : (
      <ChevronRight className="text-white w-6 h-6" />
    )}
  </button>
));

const AnimationRow = ({ title, animations }) => {
  const scrollRef = useRef(null);
  const timeoutRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [likedAnimations, setLikedAnimations] = useState([]);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
    setShowScrollbar(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowScrollbar(false), 3000);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    
    el.addEventListener("scroll", checkScroll, { passive: true });
    timeoutRef.current = setTimeout(() => setShowScrollbar(false), 3000);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [checkScroll]);

  const scroll = useCallback((direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 300;
    el.scrollBy({ 
      left: direction === "left" ? -scrollAmount : scrollAmount, 
      behavior: "smooth" 
    });
  }, []);

  const handleLike = useCallback((id, e) => {
    e.stopPropagation();
    setLikedAnimations(prev => {
      if (prev.includes(id)) {
        return prev.filter(animId => animId !== id);
      } else {
        alert(`Thanks for liking this animation!`);
        return [...prev, id];
      }
    });
  }, []);

  const animationItems = useMemo(() => animations.map((animation) => (
    <AnimationItem 
      key={animation.id}
      animation={animation}
      hoveredId={hoveredId}
      setHoveredId={setHoveredId}
      isLiked={likedAnimations.includes(animation.id)}
      handleLike={handleLike}
    />
  )), [animations, hoveredId, likedAnimations, handleLike]);

  return (
    <div className="mb-12 md:mb-20 relative z-10">
      <div className="flex items-center justify-between px-4">
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-left text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">{title}</span>
        </motion.h3>
        
        {/* Desktop scroll indicator */}
        <motion.div 
          className="hidden md:flex items-center gap-2 text-yellow-300/80 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span>Scroll for more</span>
          <ChevronRight className="w-4 h-4 animate-pulse" />
        </motion.div>
      </div>

      {/* Mobile scroll indicator */}
      <motion.div 
        className="md:hidden flex justify-center items-center gap-2 text-yellow-300/80 text-xs mb-2 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span>Swipe for more</span>
        <ChevronRight className="w-3 h-3 animate-pulse" />
      </motion.div>

      <div className="relative">
        {showLeft && (
          <ScrollButton direction="left" onClick={() => scroll("left")} />
        )}

        {showRight && (
          <ScrollButton direction="right" onClick={() => scroll("right")} />
        )}

        <div
          className={`flex overflow-x-auto overflow-y-hidden pb-2 -mx-2 md:-mx-4 px-2 md:px-4 space-x-4 md:space-x-6 scroll-smooth ${
            showScrollbar ? "scrollbar-thin" : "scrollbar-none"
          }`}
          ref={scrollRef}
          onMouseEnter={() => setShowScrollbar(true)}
          onMouseLeave={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => setShowScrollbar(false), 3000);
          }}
          style={{ scrollPadding: '0 2rem' }}
        >
          {animationItems}
        </div>
      </div>
    </div>
  );
};

export const AnimationSection = () => {
  const [artAnimations, motionCraftAnimations] = useMemo(() => {
    const art = animations.filter((a) => a.theme === "Art");
    const motionCraft = animations.filter((a) => a.theme === "MotionCraft");
    return [art, motionCraft];
  }, []);

  return (
    <section id="animation" className="py-12 md:py-24 px-2 md:px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/50 to-yellow-900/20 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl animate-float-delay pointer-events-none" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-left text-white px-2 md:px-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "100px" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-200">
            Animation Gallery
          </span>
        </motion.h2>

        <motion.p
          className="text-left text-white/80 mb-8 md:mb-12 max-w-2xl px-2 md:px-4 text-base md:text-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "100px" }}
        >
          Hover over animations to preview, click to view fullscreen.
        </motion.p>

        <AnimationRow title="Art" animations={artAnimations} />
        <AnimationRow title="MotionCraft" animations={motionCraftAnimations} />
      </div>
    </section>
  );
};