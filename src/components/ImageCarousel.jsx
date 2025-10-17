import React, { useState, useEffect } from 'react'; // <-- Imported useEffect

// Data for the images
const images = [
  { src: 'https://picsum.photos/id/1018/600/400', alt: 'Forest Mountains' },
  { src: 'https://picsum.photos/id/1040/600/400', alt: 'Lake Reflection' },
  { src: 'https://picsum.photos/id/1080/600/400', alt: 'Snowy Peak' },
  { src: 'https://picsum.photos/id/1069/600/400', alt: 'Cloudy Landscape' },
  { src: 'https://picsum.photos/id/1025/600/400', alt: 'Puppy' },
  { src: 'https://picsum.photos/id/1000/600/400', alt: 'Boat on Water' },
  { src: 'https://picsum.photos/id/1004/600/400', alt: 'Waterfall' },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Looping logic for navigation
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === 0) ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === images.length - 1) ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // --- Auto-play Logic using useEffect ---
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically advance to the next slide every 3 seconds
      goToNext();
    }, 3000); // 3000ms = 3 seconds

    // Cleanup function: clears the interval when the component unmounts or re-renders
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Re-run effect when currentIndex changes to reset the timer (optional, but ensures consistent timing)

  // Get the current center image's source for the background
  const currentBackgroundImage = images[currentIndex].src;

  return (
    <div 
      className="relative w-full overflow-hidden flex flex-col items-center justify-center p-0 m-0"
      style={{
        minHeight: '100vh', // Ensure it covers the full viewport height
        background: `url(${currentBackgroundImage}) no-repeat center center / cover`,
        transition: 'background-image 0.7s ease-in-out', // Smooth transition for background image
      }}
    >
      {/* Overlay for blur and darken effect */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backdropFilter: 'blur(10px)', // Blur effect
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darken effect
        }}
      ></div>
      
      {/* Main Carousel Area - now relative to this blurred background */}
      <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden z-10 py-20"> {/* py-20 to ensure content has space */}
        {/* The Carousel Track */}
        <div 
          className="flex transition-transform duration-500 ease-in-out py-8"
          style={{ 
            transform: `translateX(calc(-${currentIndex * 20}% + 40%))` // Centers the current item (assuming 5 visible)
          }} 
        >
          {images.map((image, index) => {
            const isCenter = index === currentIndex;
            const itemScale = isCenter ? "scale-110" : "scale-90"; 
            const itemShadow = isCenter ? "shadow-2xl" : "shadow-md";
            const itemOpacity = isCenter ? "opacity-100" : "opacity-70"; 

            return (
              <div
                key={index}
                className={`flex-none w-1/5 p-2 transition-all duration-500 ease-in-out transform ${itemScale} ${itemShadow} ${itemOpacity}`}
                style={{
                  minWidth: '20%', 
                  zIndex: isCenter ? 10 : 1, 
                  boxShadow: isCenter ? '0 15px 30px rgba(255, 165, 0, 0.6)' : 'none', // Orange shadow for highlight
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover rounded-lg"
                  style={{ aspectRatio: '3/2' }} // Maintain aspect ratio for images
                />
                {isCenter && (
                    <div className="absolute inset-x-0 bottom-4 flex justify-center">
                        <div className="text-center text-white text-3xl font-bold uppercase drop-shadow-lg bg-black bg-opacity-40 px-6 py-2 rounded-lg">
                            {image.alt}
                        </div>
                    </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors z-20"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors z-20"
        >
          &gt;
        </button>
      </div>

      {/* Main Title below carousel, now always visible and centered */}
      <div className="relative mt-8 text-white text-6xl font-extrabold uppercase tracking-wide drop-shadow-xl z-10">
        {images[currentIndex].alt} {/* Displays alt text of current image as main title */}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-12 space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
