import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ServerProducts from '../../pages/Razberi/RazberiProducts'
import EthernetSwitchProducts from '../../pages/EthernetSwitch/EthernetSwitchProducts' 
import MediaConverterProducts from '../../pages/MediaConverter/MediaConverterProducts'
import EthernetExtenderProducts from '../../pages/EthernetExtender/EthernetExtenderProducts'
import WirelessProducts from '../../pages/Wireless/WirelessProducts'
import SerialDataProducts from '../../pages/SerialData/SerialDataProducts'
import WiegandProducts from '../../pages/Wiegand/WiegandProducts'
import ContactClosureProducts from '../../pages/ContactClosure/ContactClosureProducts'
import SFPProducts from '../../pages/SFP/SFPProducts'
import PowerSupplyProducts from '../../pages/PowerSupply/PowerSupplyProducts'
import PoeInjectorProducts from '../../pages/PoeInjector/PoeInjectorProducts'
import EnclosureProducts from '../../pages/Enclosure/EnclosureProducts'

const productsConfig = {
  RazberiServer: { 
    products: ServerProducts,
    path: '/technical-support/server'
  },
  EthernetSwitch: {
    products: EthernetSwitchProducts,
    path: '/technical-support/ethernet-switch'
  },
  MediaConverter: {
    products: MediaConverterProducts,
    path: '/technical-support/media-converter'
  },
  EthernetExtender: {
    products: EthernetExtenderProducts,
    path: '/technical-support/ethernet-extender'
  },
  WirelessEthernet: {
    products: WirelessProducts,
    path: '/technical-support/wireless'
  },
  SerialData: {
    products: SerialDataProducts,
    path: '/technical-support/serial-data'
  },
  Wiegand: {
    products: WiegandProducts,
    path: '/technical-support/wiegand'
  },
  ContactClosure: {
    products: ContactClosureProducts,
    path: '/technical-support/contact-closure'
  },
  SFP: {
    products: SFPProducts,
    path: '/technical-support/sfp'
  },
  PowerSupply: {
    products: PowerSupplyProducts,
    path: '/technical-support/power-supply'
  },
  PoeInjector: {
    products: PoeInjectorProducts,
    path: '/technical-support/poe-injector'
  },
  Enclosure: {
    products: EnclosureProducts,
    path: '/technical-support/enclosure'
  },
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    if (searchValue) {
      const allProducts = Object.entries(productsConfig).flatMap(
        ([category, config]) => config.products.map(product => ({
          ...product,
          category
        }))
      );

      const filtered = allProducts.filter((product) =>
        product.Model.toLowerCase().includes(searchValue.toLowerCase())
      );

      setFilteredProducts(filtered.slice(0, 1000));
    } else {
      setFilteredProducts([]);
    }
  };

  const handleProductSelect = (product) => {
    const categoryPath = productsConfig[product.category].path;
    navigate(categoryPath, { state: { selectedProduct: product.Model } });
    setSearchTerm('');
    setFilteredProducts([]);
  };

  const handleSearchButtonClick = () => {
    handleExactSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleExactSearch();
    }
  };

  const handleExactSearch = () => {
    if (!searchTerm) return;
    
    const allProducts = Object.entries(productsConfig).flatMap(
      ([category, config]) => config.products.map(product => ({
        ...product,
        category
      }))
    );

    const exactMatch = allProducts.find(product => 
      product.Model.toLowerCase() === searchTerm.toLowerCase()
    );

    if (exactMatch) {
      handleProductSelect(exactMatch);
    } 
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          placeholder="Enter part number....."
          className="search-input"
        />
        {/* 
        <button 
          className="search-button"
          onClick={handleSearchButtonClick}
          disabled={!searchTerm}
        >
          <svg className="search-icon" viewBox="0 0 24 24" width="2rem" height="20">
            <path fill="white" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
        */}
      </div>

      {searchTerm && filteredProducts.length > 0 && (
        <div className="search-results">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="search-result-item"
              onClick={() => handleProductSelect(product)}
            >
              {product.Model}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;