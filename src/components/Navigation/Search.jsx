import React, { useState } from 'react'
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
  EthernetSwitch: {
    products: EthernetSwitchProducts,
  },
  MediaConverter: {
    products: MediaConverterProducts,
  },
  WirelessEthernet: {
    products: WirelessProducts,
  },
  SFP: {
    products: SFPProducts,
  },
  RazberiServer: { 
    products: ServerProducts,
  },
  EthernetExtender: {
    products: EthernetExtenderProducts,
  },
  ContactClosure: {
    products: ContactClosureProducts,
  },
  SerialData: {
    products: SerialDataProducts,
  },
  Wiegand: {
    products: WiegandProducts,
  },
  PowerSupply: {
    products: PowerSupplyProducts,
  },
  PoeInjector: {
    products: PoeInjectorProducts,
  },
  Enclosure: {
    products: EnclosureProducts,
  },
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    if (searchValue) {
      const allProducts = Object.values(productsConfig).flatMap(
        (config) => config.products
      );

      const filtered = allProducts.filter((product) =>
        product.Model.toLowerCase().includes(searchValue.toLowerCase())
      );

      setFilteredProducts(filtered.slice(0, 1000));
    } else {
      setFilteredProducts([]);
    }
  };

  const handleProductSelect = (model) => {
    for (const [category, config] of Object.entries(productsConfig)) {
      const product = config.products.find((p) => p.Model === model);
      if (product) {
        setSearchTerm('');
        return;
      }
    }
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
          </div>

          {searchTerm && filteredProducts.length > 0 && (
            <div className="search-results">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="search-result-item"
                  onClick={() => handleProductSelect(product.Model)}
                >
                  {product.Model}
                </div>
              ))}
            </div>
          )}
    </div>
  )
}

export default Search