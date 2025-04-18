import React, { useState, useEffect } from 'react';
import '../styles/Slideshow.css';

const Slideshow = ({ imageNames = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Process images safely
  const getProcessedImages = () => {
    // Ensure imageNames is an array
    const safeImageNames = Array.isArray(imageNames) ? imageNames : [];
    
    // Create full paths and pad to 10 items
    const processed = safeImageNames.slice(0, 10) // Take first 10 items
      .map(name => name ? `${process.env.PUBLIC_URL}/photos/Slideshow/${name}` : null);
    
    // Fill remaining slots with null
    while (processed.length < 10) {
      processed.push(null);
    }
    
    return processed;
  };

  const images = getProcessedImages();

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % 10);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + 10) % 10);
  const goToSlide = (index) => setCurrentIndex(index);
  const togglePlay = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    const interval = isPlaying ? setInterval(goToNext, 3000) : null;
    return () => interval && clearInterval(interval);
  }, [isPlaying, currentIndex]);

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