import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const Showcase = () => {
  const navigate = useNavigate();

  const backgrounds = [
    "Creovate/index.html",
    "Galaxy/index.html",
    "/sunset/index.html",
    "matrix/index.html",
    "/particles/index.html",
    "/sleeping_moon/index.html",
    "/Floating_shapes/index.html",
    "/cherry_blossom/index.html",
    "/Fireflies/index.html",
    "/waves/index.html",
    "/Underwater/index.html",
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

      const nextIframe = showFirst ? iframe2Ref.current : iframe1Ref.current;
      if (nextIframe) nextIframe.src = backgrounds[nextIndex];

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setShowFirst(!showFirst);
        setIsTransitioning(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, showFirst]);

  return (
    <div className="fixed inset-0 overflow-hidden z-0 bg-black">
      {/* Back Button */}
      <div className="pointer-events-auto fixed top-5 left-5 z-50">
        <button
          onClick={() => navigate("/")}
          className="p-2 bg-black/60 hover:bg-black/80 rounded-full shadow-lg text-white transition-colors cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Background Iframes */}
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
        src={null}
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
    </div>
  );
};
