import React, { useState } from 'react';
import Search from './Search'
import '../../styles/Navbar.css'

const Navbar = ({ onCategoryChange }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
    const handleMouseEnter = (category) => {
      setHoveredCategory(category);
    };
  
    const handleMouseClick = (category) => {
      onCategoryChange(category)
    }

  return (
    <nav className="navbar">

      <img onClick={() => {window.location.reload()}} className="comnet-logo" src="https://th.bing.com/th/id/OIP.QEpdXFZIcPoZBpgnZpTHoAHaCP?rs=1&pid=ImgDetMain" alt="Comnet Logo"/>

      <Search/>

      <div className="categories">

        <div 
          onClick={() => handleMouseClick("server")}>
            <span>Edge Computing</span>
        </div>

        <div 
          onMouseEnter={() => handleMouseEnter("ethernet")}
          onMouseLeave={() => setHoveredCategory(null)}>
            <span>Ethernet</span>
            {hoveredCategory === "ethernet" && (
              <div className="hover-box">
                <li onClick={() => handleMouseClick("ethernet-switch")}>Ethernet Switch</li>
                <li onClick={() => handleMouseClick("media-converter")}>Media Converter</li>
                <li onClick={() => handleMouseClick("ethernet-extender")}>Ethernet Extender</li>
                <li onClick={() => handleMouseClick("terminal-server")}>Terminal Server</li>
              </div>
            )}
        </div>

        <div 
          onClick={() => handleMouseClick("wireless")}>
            <span>Wireless Ethernet</span>
        </div>

        <div 
          onMouseEnter={() => handleMouseEnter("data-over-fiber")}
          onMouseLeave={() => setHoveredCategory(null)}>
            <span>Data Over Fiber</span>
            {hoveredCategory === "data-over-fiber" && (
              <div className="hover-box">
                <li onClick={() => handleMouseClick("serial-data")}>Serial Data</li>
                <li onClick={() => handleMouseClick("wiegand")}>Wiegand</li>
                <li onClick={() => handleMouseClick("contact-closure")}>Contact Closure</li>
                <li onClick={() => handleMouseClick("analog-video")}>Analog Video</li>
              </div>
            )}
        </div>

        <div 
          onMouseEnter={() => handleMouseEnter("accessories")}
          onMouseLeave={() => setHoveredCategory(null)}>
            <span>Accessories</span>
            {hoveredCategory === "accessories" && (
              <div className="hover-box">
                <li onClick={() => handleMouseClick("sfp")}>SFP</li>
                <li onClick={() => handleMouseClick("power-supply")}>Power Supply</li>
                <li onClick={() => handleMouseClick("poe-injector")}>PoE Injector</li>
                <li onClick={() => handleMouseClick("card-cage")}>Enclosure</li>
              </div>
            )}
        </div>
        
    </div>


    </nav>
  )
}

export default Navbar