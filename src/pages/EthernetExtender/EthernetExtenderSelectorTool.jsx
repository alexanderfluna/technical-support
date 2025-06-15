import React, { useState, useEffect } from 'react';
import products from "./EthernetExtenderProducts";

const EthernetExtenderSelectorTool = () => {
  const [selectorTool, setSelectorTool] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    position: [],
    channels: [],
    formFactor: [],
    cable: [],
    poeInjection: []
  });
  const [filters, setFilters] = useState({
    position: null,
    channels: null,
    formFactor: null,
    cable: null,
    poeInjection: null
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredProducts(products);
    updateAvailableOptions(products);
  }, []);

  const handleClick = () => {
    setSelectorTool(!selectorTool);
  }

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    const newFilteredProducts = products.filter((product) =>
      Object.entries(newFilters).every(
        ([key, filterValue]) => !filterValue || product[key] === filterValue
      )
    );
    setFilteredProducts(newFilteredProducts);

    updateAvailableOptions(newFilteredProducts);
  };

  const clearFilter = (filterType) => {
    const newFilters = { ...filters, [filterType]: null };
    setFilters(newFilters);
    handleFilterChange(filterType, null);
  };

  const resetFilters = () => {
    setFilters({ position: null, channels: null, formFactor: null, cable: null, poeInjection: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const position = [...new Set(filteredProducts.map((product) => product.position))];
    const channels = [...new Set(filteredProducts.map((product) => product.channels))];
    const formFactor = [...new Set(filteredProducts.map((product) => product.formFactor))];
    const cable = [...new Set(filteredProducts.map((product) => product.cable))];
    const poeInjection = [...new Set(filteredProducts.map((product) => product.poeInjection))];
 
    setAvailableOptions({ position, channels, formFactor, cable, poeInjection });
  };

  return (
    <div className="tool-container">
      <h1 className="faq-title" onClick={handleClick}>Selector Tool<span className="dropdown-chevron"></span></h1>
      {selectorTool && (
        <>
          <div className="filter-grid">
            <button 
              className="reset-button" 
              onClick={resetFilters}
            >
              Reset
            </button>

            {['position', 'channels', 'formFactor', 'cable', 'poeInjection'].map((filterKey) => (
              <div key={filterKey} className="filter-group">
                <div className="filter-label">
                  {filterKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  {filters[filterKey] && (
                    <button
                      className="clear-button"
                      onClick={() => clearFilter(filterKey)}
                    >
                      X
                    </button>
                  )}
                </div>
                <select
                  className="filter-select"
                  name={filterKey}
                  value={filters[filterKey] || ""}
                  onChange={(e) => handleFilterChange(filterKey, e.target.value)}
                >
                  <option value="">Select {filterKey.replace(/([A-Z])/g, ' $1').toLowerCase()}</option>
                  {availableOptions[filterKey]?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Part Number</th>
                  <th>Position</th>
                  <th>Channels</th>
                  <th>Form Factor</th>
                  <th>Cable</th>
                  <th>Poe Injection</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.Model}</td>
                    <td>{product.position}</td>
                    <td>{product.channels}</td>
                    <td>{product.formFactor}</td>
                    <td>{product.cable}</td>
                    <td>{product.poeInjection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

export default EthernetExtenderSelectorTool;