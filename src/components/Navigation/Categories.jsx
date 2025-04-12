import React, { useState } from 'react';

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseClick = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div className="categories">

        <div 
          onClick={() => handleMouseClick("server")}>
            <span>Server</span>
            {selectedCategory === "server" && (
              <div>

              </div>
            )}
        </div>

        <div 
          onMouseEnter={() => handleMouseEnter("ethernet")}
          onMouseLeave={() => setHoveredCategory(null)}>
            <span>Ethernet</span>
            {hoveredCategory === "ethernet" && (
              <div className="hover-box">
                <li>Ethernet Switch</li>
                <li>Media Converter</li>
                <li>Ethernet Extender</li>
                <li>Terminal Server</li>
              </div>
            )}
        </div>

        <div 
          onClick={() => handleMouseClick("wireless")}>
            <span>Wireless Ethernet</span>
            {selectedCategory === "wireless" && (
              <div> 

              </div>
            )}
        </div>

        <div 
          onMouseEnter={() => handleMouseEnter("data-over-fiber")}
          onMouseLeave={() => setHoveredCategory(null)}>
            <span>Data Over Fiber</span>
            {hoveredCategory === "data-over-fiber" && (
              <div className="hover-box">
                <li>Serial Data</li>
                <li>Wiegand</li>
                <li>Contact Closure</li>
                <li>Analog Video</li>
              </div>
            )}
        </div>

        <div 
          onMouseEnter={() => handleMouseEnter("accessories")}
          onMouseLeave={() => setHoveredCategory(null)}>
            <span>Accessories</span>
            {hoveredCategory === "accessories" && (
              <div className="hover-box">
                <li>Power Supply</li>
                <li>PoE Injector</li>
                <li>Card Cage</li>
              </div>
            )}
        </div>
        
    </div>
  )
}

export default Categories