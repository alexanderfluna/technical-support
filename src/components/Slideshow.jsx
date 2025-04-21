import React, { useState, useEffect } from 'react';
import '../styles/Slideshow.css';

const Slideshow = ({ imageNames = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Process images safely
  const getProcessedImages = () => {
    // Ensure imageNames is an array
    const safeImageNames = Array.isArray(imageNames) ? imageNames : [];
    
    // Create full paths for all images (up to 14)
    const processed = safeImageNames.slice(0, 14) // Take first 14 items
      .map(name => name ? `${process.env.PUBLIC_URL}/photos/Slideshow/${name}` : null);
    
    return processed;
  };

  const images = getProcessedImages();
  const totalSlides = images.length;

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setCurrentIndex(index);
  const togglePlay = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    const interval = isPlaying ? setInterval(goToNext, 3000) : null;
    return () => interval && clearInterval(interval);
  }, [isPlaying, currentIndex, totalSlides]);

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: image ? `url(${image})` : 'none',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      <button className="prev" onClick={goToPrev}>&#10094;</button>
      <button className="next" onClick={goToNext}>&#10095;</button>

      <div className="controls">
        <button className="play-pause" onClick={togglePlay}>
          {isPlaying ? '❚❚' : '►'}
        </button>
        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;