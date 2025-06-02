import { useEffect, useState, useRef } from "react";

export const CreovateBackground = () => {
  const backgrounds = [
    "Galaxy/index.html",
    "/sunset/index.html",
    "Creovate/index.html",
    "/particles/index.html",
    "/Floating_shapes/index.html",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showFirst, setShowFirst] = useState(true);

  const iframe1Ref = useRef(null);
  const iframe2Ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % backgrounds.length;
      setIsTransitioning(true);

      // Set next iframe's src just before fading in
      const nextIframe = showFirst ? iframe2Ref.current : iframe1Ref.current;
      if (nextIframe) nextIframe.src = backgrounds[nextIndex];

      // Trigger fade
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setShowFirst(!showFirst); // swap active iframe
        setIsTransitioning(false);
      }, 1000); // Duration of fade
    }, 15000); // Every 15s

    return () => clearInterval(interval);
  }, [currentIndex, showFirst]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">
      <iframe
        ref={iframe1Ref}
        src={backgrounds[currentIndex]}
        title="Background 1"
        className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
          showFirst ? (isTransitioning ? "opacity-0" : "opacity-100") : "opacity-0"
        }`}
        style={{
          pointerEvents: "none",
          zIndex: showFirst ? 2 : 1,
          backgroundColor: "black",
        }}
        sandbox="allow-scripts allow-same-origin"
      />

      <iframe
        ref={iframe2Ref}
        src={null} // Fixed: Using null instead of empty string
        title="Background 2"
        className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
          !showFirst ? (isTransitioning ? "opacity-0" : "opacity-100") : "opacity-0"
        }`}
        style={{
          pointerEvents: "none",
          zIndex: !showFirst ? 2 : 1,
          backgroundColor: "black",
        }}
        sandbox="allow-scripts allow-same-origin"
      />

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />
    </div>
  );
};