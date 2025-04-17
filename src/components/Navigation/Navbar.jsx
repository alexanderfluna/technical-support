import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search'
import '../../styles/Navbar.css'

const Navbar = ({ onCategoryChange }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navigate = useNavigate();
  
  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };
  
  const handleMouseClick = (category) => {
    // Map category names to their corresponding routes
    const routeMap = {
      "technical-support": "/technical-support",
      "razberi": "/razberi",
      "ethernet-switch": "/ethernet-switch",
      "media-converter": "/media-converter",
      "ethernet-extender": "/ethernet-extender",
      "wireless": "/wireless",
      "serial-data": "/serial-data",
      "wiegand": "/wiegand",
      "contact-closure": "/contact-closure",
      "sfp": "/sfp",
      "power-supply": "/power-supply",
      "poe-injector": "/poe-injector",
      "card-cage": "/enclosure",
      "enclosure": "/enclosure",
      "server": "/razberi" // Assuming "Edge Computing" should go to Razberi
    };
    
    const route = routeMap[category];
    if (route) {
      navigate(route);
    }
    
    // Call the original onCategoryChange if needed
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <nav className="navbar">
      <img onClick={() => {navigate('/technical-support')}} className="comnet-logo" src="https://th.bing.com/th/id/OIP.QEpdXFZIcPoZBpgnZpTHoAHaCP?rs=1&pid=ImgDetMain" alt="Comnet Logo"/>

      <Search/>

      <div className="categories">
        <div onClick={() => handleMouseClick("server")}>
          <span>Edge Computing</span>
        </div>

        <div 
          onMouseEnter={() => handleMouseEnter("ethernet")}
          onMouseLeave={() => setHoveredCategory(null)}>
            <span>Ethernet</span>
            {hoveredCategory === "ethernet" && (
              <div className="hover-box">
                <li onClick={() => handleMouseClick("ethernet-switch")}>Ethernet Switch</li>
                <li onClick={() => handleMouseClick("ethernet-extender")}>Ethernet Extender</li>
                <li onClick={() => handleMouseClick("terminal-server")}>Terminal Server</li>
              </div>
            )}
        </div>

        <div onClick={() => handleMouseClick("wireless")}>
          <span>Wireless Ethernet</span>
        </div>

        <div 
          onMouseEnter={() => handleMouseEnter("data-over-fiber")}
          onMouseLeave={() => setHoveredCategory(null)}>
            <span>Data Over Fiber</span>
            {hoveredCategory === "data-over-fiber" && (
              <div className="hover-box">
                <li onClick={() => handleMouseClick("media-converter")}>Media Converter</li>
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