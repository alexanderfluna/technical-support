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
    path: '/razberi'
  },
  EthernetSwitch: {
    products: EthernetSwitchProducts,
    path: '/ethernet-switch'
  },
  MediaConverter: {
    products: MediaConverterProducts,
    path: '/media-converter'
  },
  EthernetExtender: {
    products: EthernetExtenderProducts,
    path: '/ethernet-extender'
  },
  WirelessEthernet: {
    products: WirelessProducts,
    path: '/wireless'
  },
  SerialData: {
    products: SerialDataProducts,
    path: '/serial-data'
  },
  Wiegand: {
    products: WiegandProducts,
    path: '/wiegand'
  },
  ContactClosure: {
    products: ContactClosureProducts,
    path: '/contact-closure'
  },
  SFP: {
    products: SFPProducts,
    path: '/sfp'
  },
  PowerSupply: {
    products: PowerSupplyProducts,
    path: '/power-supply'
  },
  PoeInjector: {
    products: PoeInjectorProducts,
    path: '/poe-injector'
  },
  Enclosure: {
    products: EnclosureProducts,
    path: '/enclosure'
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

      setFilteredProducts(filtered.slice(0, 10)); // Limit to 10 results
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

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Enter product number..."
          className="search-input"
        />
        <button className="search-button">
          <span>Search</span>
        </button>
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