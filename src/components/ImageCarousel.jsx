import React, { useState, useEffect } from "react";
// Assuming the path to your assets is correct
import G from "../assets/G.jpg";
import G1 from "../assets/G1.jpg";
import G2 from "../assets/G2.jpg";
import H from "../assets/H.jpg";

const images = [
  { src: G, alt: "Forest Mountains" },
  { src: G1, alt: "Lake Reflection" },
  { src: G2, alt: "Snowy Peak" },
  { src: H, alt: "Cloudy Landscape" },
  { src: "https://picsum.photos/id/1032/600/400", alt: "Puppy" },
  { src: "https://picsum.photos/id/1015/600/400", alt: "Boat on Water" },
  { src: "https://picsum.photos/id/1002/600/400", alt: "Waterfall" },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Looping logic for navigation
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // --- Auto-play Logic using useEffect ---
  // The logic remains the same, ensuring auto-play works
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically advance to the next slide every 3 seconds
      goToNext();
    }, 3000); // 3000ms = 3 seconds

    // Cleanup function: clears the interval when the component unmounts or re-renders
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Re-run effect when currentIndex changes to reset the timer

  // Get the current main image's source for the background
  const currentImage = images[currentIndex];
  const currentBackgroundImage = currentImage.src;

  return (
    <div
      className="relative w-full overflow-hidden flex flex-col items-center justify-center p-0 m-0"
      style={{
        minHeight: "100vh",
        background: `url(${currentBackgroundImage}) no-repeat center center / cover`,
        transition: "background-image 0.7s ease-in-out",
      }}
    >
      {/* Overlay for blur and darken effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></div>

      {/* Main Content Container (relative to the background) */}
      <div className="relative w-full max-w-[1200px] mx-auto z-10 py-10 flex flex-col items-center">
        {/*
        ########################################
        # 1. NEW: Static Main Image Display #
        ########################################
        */}
        <div className="w-full max-w-[800px] mb-8 relative">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-auto object-cover rounded-xl shadow-2xl transition-opacity duration-700"
            style={{ aspectRatio: "16/9" }} // A common aspect ratio for a main display
          />
          {/* Main Title Overlay */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center">
            <div className="text-center text-white text-4xl md:text-6xl font-extrabold uppercase drop-shadow-lg bg-black/40 px-8 py-3 rounded-lg backdrop-blur-sm">
              {currentImage.alt}
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden max-w-[1000px] mt-4">
          <button
            onClick={goToPrev}
            className="
      absolute left-2 top-1/2 -translate-y-1/2
      bg-gray-800 bg-opacity-50 text-white
      p-2 rounded-full shadow-md
      hover:bg-opacity-80 transition
      z-20
    "
          >
            &lt;
          </button>

          <button
            onClick={goToNext}
            className="
      absolute right-2 top-1/2 -translate-y-1/2
      bg-gray-800 bg-opacity-50 text-white
      p-2 rounded-full shadow-md
      hover:bg-opacity-80 transition
      z-20
    "
          >
            &gt;
          </button>

          {/* Carousel Track for Thumbnails */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              // Show about 7 thumbnails at a time (100% / 7 = ~14.28%)
              transform: `translateX(calc(-${currentIndex * 14.28}% + 42.84%))`, // Centers the current item (14.28 * 3 = 42.84)
            }}
          >
            {images.map((image, index) => {
              const isCenter = index === currentIndex;

              return (
                <div
                  key={index}
                  onClick={() => goToSlide(index)} // Click to select the main image
                  className={`flex-none w-[14.28%] p-2 cursor-pointer transition-all duration-300 ease-in-out transform ${
                    isCenter ? "scale-110 opacity-100" : "scale-95 opacity-60"
                  }`}
                  style={{
                    minWidth: "14.28%", // Ensure 7 items fit
                    zIndex: isCenter ? 10 : 1,
                    // Highlight border for the active/selected thumbnail
                    border: isCenter
                      ? "4px solid white"
                      : "4px solid transparent",
                    borderRadius: "2px",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ aspectRatio: "4/3" }} // Standard thumbnail aspect ratio
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
