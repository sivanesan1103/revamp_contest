// src/components/ImageSlider.jsx
import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false); // State to control sliding effect

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlide();
    }, 3000); // Change image every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Dependency array with currentIndex to reset interval on update

  const handleSlide = () => {
    setIsSliding(true); // Start sliding effect
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false); // Reset sliding effect after changing image
    }, 1000); // 1000ms sliding duration
  };

  return (
        <div>
             <p className='text-4xl font-bold text-center m-10'>Top Institutions</p>
    <div className="relative w-full h-72 overflow-hidden">
      <div
        className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-1000 ease-in-out ${
          isSliding ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-1000 ease-in-out ${
          isSliding ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <img
          src={
            images[
              currentIndex === images.length - 1 ? 0 : currentIndex + 1
            ]
          }
          alt={`Slide ${currentIndex + 2}`}
          className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
        </div>
  );
};

export default ImageSlider;


const images = [
    "https://tse4.mm.bing.net/th?id=OIP.flOCLOgAIuyLS5T0ARRnegHaHa&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.sxYtGOumxwAh9qoTbSqdLwHaEK&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.KaxbdcECqajd0YzcLjZqXAHaHv&pid=Api&P=0&h=180",
    // Add more images if needed
  ];

