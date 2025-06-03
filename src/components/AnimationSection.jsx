import React from 'react';
import { Play, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";

const animations = [
  // ... (your existing animations array)
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
    }, 300); // Reduced delay for quicker preview
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
      className="flex-shrink-0 w-72 h-96 relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }} // Primarily for desktop
      onMouseEnter={handleMouseEnter} // Primarily for desktop
      onMouseLeave={handleMouseLeave} // Primarily for desktop
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

      <div className="relative z-20 h-full flex flex-col justify-end p-6">
        <motion.h3 
          className="text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {animation.title}
        </motion.h3>

        <motion.p 
          className="text-white/80 mb-4 text-sm"
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
            className="p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors" // Added active state for touch feedback
            aria-label={isLiked ? "Unlike this animation" : "Like this animation"}
          >
            <Heart 
              className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`}
            />
          </button>

          <a
            href={animation.path}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevent card click when play is clicked
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-white/90 active:bg-white/80 transition-colors" // Added active state
          >
            <div className="w-5 h-5 bg-black flex items-center justify-center rounded-sm">
              <Play className="w-3 h-3 fill-white" />
            </div>
            Play
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
});

const ScrollButton = React.memo(({ direction, onClick, className = '' }) => (
  <button
    className={`absolute ${direction === 'left' ? 'left-0 md:left-2' : 'right-0 md:right-2'} top-1/2 transform -translate-y-1/2 z-30 p-2 bg-black/70 rounded-full backdrop-blur hover:bg-yellow-500/30 active:bg-yellow-500/40 transition ${className}`}
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
  const scrollbarTimeoutRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showCustomScrollbar, setShowCustomScrollbar] = useState(false);
  const [hoveredId, setHoveredId] = useState(null); // For desktop video preview
  const [likedAnimations, setLikedAnimations] = useState([]);

  // Refs for touch dragging mechanics
  const dragStartPointXRef = useRef(0);
  const initialScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false); // True if actual dragging occurred

  const checkScrollArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const scrollWidth = el.scrollWidth;
    const clientWidth = el.clientWidth;

    setShowLeftArrow(scrollLeft > 10); // Show if scrolled more than 10px
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // Show if there's more than 10px to scroll
    
    setShowCustomScrollbar(true);
    if (scrollbarTimeoutRef.current) clearTimeout(scrollbarTimeoutRef.current);
    scrollbarTimeoutRef.current = setTimeout(() => setShowCustomScrollbar(false), 2000); // Hide scrollbar after 2s
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollArrows();
    el.addEventListener("scroll", checkScrollArrows, { passive: true });
    // Initial timeout for scrollbar hint
    scrollbarTimeoutRef.current = setTimeout(() => setShowCustomScrollbar(false), 3000);

    return () => {
      el.removeEventListener("scroll", checkScrollArrows);
      if (scrollbarTimeoutRef.current) clearTimeout(scrollbarTimeoutRef.current);
    };
  }, [checkScrollArrows]);

  const scrollProgrammatically = useCallback((direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  }, []);

  const handleTouchStart = useCallback((e) => {
    const el = scrollRef.current;
    if (!el || e.touches.length > 1) return; // Ignore multi-touch

    dragStartPointXRef.current = e.touches[0].pageX;
    initialScrollLeftRef.current = el.scrollLeft;
    hasDraggedRef.current = false;
    
    // Show scrollbar immediately on touch
    setShowCustomScrollbar(true);
    if (scrollbarTimeoutRef.current) clearTimeout(scrollbarTimeoutRef.current);
  }, []);

  const handleTouchMove = useCallback((e) => {
    const el = scrollRef.current;
    if (!el || e.touches.length > 1 || dragStartPointXRef.current === null) return;

    const currentX = e.touches[0].pageX;
    const deltaX = currentX - dragStartPointXRef.current;

    if (!hasDraggedRef.current) {
      // Threshold to differentiate tap from drag (e.g., 7 pixels)
      if (Math.abs(deltaX) > 7) {
        hasDraggedRef.current = true;
      } else {
        // Not enough movement, don't treat as drag yet
        return;
      }
    }
    
    // If dragging has started, prevent default page scroll
    e.preventDefault();
    // Adjust scrollLeft. Multiplier can be tuned (e.g., 1.0 for 1:1, 1.1-1.2 for slightly faster)
    el.scrollLeft = initialScrollLeftRef.current - deltaX * 1.0; 
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Reset drag start point to prevent issues if next touchmove fires before touchstart
    dragStartPointXRef.current = null; 
    // Hide scrollbar after a delay
    if (scrollbarTimeoutRef.current) clearTimeout(scrollbarTimeoutRef.current);
    scrollbarTimeoutRef.current = setTimeout(() => setShowCustomScrollbar(false), 1500);

    // If hasDraggedRef.current is false, it was a tap.
    // Click events on children should fire correctly due to conditional e.preventDefault().
    // hasDraggedRef will be reset on the next touchStart.
  }, []);

  const handleLike = useCallback((id, event) => {
    event.stopPropagation(); // Prevent event from bubbling to parent elements
    setLikedAnimations(prev => {
      if (prev.includes(id)) {
        return prev.filter(animId => animId !== id);
      } else {
        // Consider using a more subtle notification than alert for better UX
        // alert(`Thanks for liking animation ${id}!`);
        console.log(`Liked animation: ${id}`);
        return [...prev, id];
      }
    });
  }, []);

  const animationItemsToDisplay = useMemo(() => animations.map((animation) => (
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
    <div className="mb-16 md:mb-20 relative z-10"> {/* Adjusted margin */}
      <div className="flex items-center justify-between px-4 mb-4">
        <motion.h3 /* ... (title motion props) ... */ >
          {/* ... title span ... */}
        </motion.h3>
        {/* ... (desktop scroll hint) ... */}
      </div>
      {/* ... (mobile swipe hint) ... */}

      <div className="relative group/row"> {/* Added group/row for arrow visibility on hover (desktop) */}
        {/* Desktop Arrows: Visible on row hover */}
        {showLeftArrow && (
          <ScrollButton
            direction="left"
            onClick={() => scrollProgrammatically("left")}
            className="hidden md:block opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
          />
        )}
        {showRightArrow && (
          <ScrollButton
            direction="right"
            onClick={() => scrollProgrammatically("right")}
            className="hidden md:block opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
          />
        )}

        {/* Mobile Arrows: Always visible if scrollable */}
         <div className="md:hidden absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-1 z-30 pointer-events-none">
            {showLeftArrow && (
                <ScrollButton
                direction="left"
                onClick={() => scrollProgrammatically("left")}
                className="pointer-events-auto" // Ensure button is interactive
                />
            )}
            {!showLeftArrow && <div className="w-10 h-10" /> /* Placeholder for spacing */}
            {showRightArrow && (
                <ScrollButton
                direction="right"
                onClick={() => scrollProgrammatically("right")}
                className="pointer-events-auto" // Ensure button is interactive
                />
            )}
        </div>


        <div
          className={`flex overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 space-x-4 md:space-x-6 scroll-smooth ${
            showCustomScrollbar ? "scrollbar-thin scrollbar-thumb-yellow-500/50 scrollbar-track-transparent" : "scrollbar-none"
          }`}
          ref={scrollRef}
          onMouseEnter={() => { // For desktop: show scrollbar and check arrows
            setShowCustomScrollbar(true);
            checkScrollArrows(); 
          }}
          onMouseLeave={() => { // For desktop: hide scrollbar after delay
            if (scrollbarTimeoutRef.current) clearTimeout(scrollbarTimeoutRef.current);
            scrollbarTimeoutRef.current = setTimeout(() => setShowCustomScrollbar(false), 1000);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {animationItemsToDisplay}
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
  }, []); // animations is stable, so this is okay, or add animations to deps if it can change

  return (
    <section id="animation" className="py-16 md:py-24 px-2 sm:px-4 relative overflow-hidden bg-gray-950"> {/* Added base bg */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/60 via-gray-950/80 to-yellow-900/30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 md:w-96 h-80 md:h-96 rounded-full bg-yellow-300/5 blur-3xl animate-float-delay pointer-events-none" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-left text-white px-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }} // Adjusted margin
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200">
            Animation Gallery
          </span>
        </motion.h2>

        <motion.p
          className="text-left text-white/70 mb-10 md:mb-12 max-w-2xl px-4 text-base md:text-lg" // Adjusted text color/size
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }} // Adjusted margin
        >
          Explore a collection of interactive animations. Hover (or tap on mobile) to preview, and click play to see them in action.
        </motion.p>

        <AnimationRow title="Art Showcase" animations={artAnimations} />
        <AnimationRow title="MotionCraft Creations" animations={motionCraftAnimations} />
      </div>
    </section>
  );
};