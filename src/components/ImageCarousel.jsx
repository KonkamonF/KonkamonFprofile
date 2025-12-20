import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import G from "../assets/G.jpg";
import G1 from "../assets/G1.jpg";
import G2 from "../assets/G2.jpg";
import H from "../assets/H.jpg";
import G3 from "../assets/G3.jpg";
import G4 from "../assets/G4.jpg";
import GG from "../assets/GG.jpg";

const images = [
  { src: H, alt: "Customer Service Hospital" },
  { src: G1, alt: "Programming CodeCamp" },
  { src: G, alt: "Introduction to using Lark system" },
  { src: G2, alt: "Speaker Reward" },
  { src: GG, alt: "Project Lark system Reward" },
  { src: G3, alt: "System speech in Smart Party" },
  { src: G4, alt: "Replenishment Program Training" },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000); // 5 วินาทีเพื่อให้คนได้อ่านแคปชัน
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const currentImage = images[currentIndex];

  return (
    <div className="w-full py-20 px-4 flex flex-col items-center bg-transparent">
      
      {/* Container หลัก */}
      <div className="w-full max-w-5xl">
        
        {/* 1. Main Display Area */}
        <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl bg-white aspect-[16/9] md:aspect-[21/9]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={currentImage.src}
              alt={currentImage.alt}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Overlay แคปชันแบบ Minimal */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={currentImage.alt}
              className="text-white"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] mb-2 text-white/70 font-medium">Activity Spotlight</p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">{currentImage.alt}</h3>
            </motion.div>
          </div>

          {/* Navigation Buttons (โผล่ตอน Hover) */}
          <button
            onClick={goToPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-[#603F26]"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-[#603F26]"
          >
            →
          </button>
        </div>

        {/* 2. Thumbnail Track */}
        <div className="mt-8 flex justify-center gap-3 overflow-x-auto py-4 scrollbar-hide no-scrollbar">
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-none transition-all duration-500 rounded-2xl overflow-hidden ${
                  isActive ? "w-24 md:w-32 shadow-lg" : "w-12 md:w-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-square object-cover"
                />
                {isActive && (
                  <motion.div 
                    layoutId="active-border"
                    className="absolute inset-0 border-2 border-[#D1BB9E] rounded-2xl"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}