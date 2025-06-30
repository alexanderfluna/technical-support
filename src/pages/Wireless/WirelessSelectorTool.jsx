import React, { useState, useEffect } from 'react';
import products from './WirelessProducts';

const WirelessSelectorTool = () => {
  const [selectorTool, setSelectorTool] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    quantity: [],
    size: [],
    beamwidth: [],
    continent: []
  });

  const tooltipTexts = {
    quantity: "Number of units or antennas included",
    size: "Physical dimensions of the product",
    beamwidth: "Angular width of the antenna beam",
    continent: "Regional availability or compatibility"
  };

  const [filters, setFilters] = useState({
    quantity: null,
    size: null,
    beamwidth: null,
    continent: null
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
    setFilters({ 
      quantity: null, 
      size: null, 
      beamwidth: null, 
      continent: null 
    });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const options = {
      quantity: [...new Set(filteredProducts.map((product) => product.quantity))],
      size: [...new Set(filteredProducts.map((product) => product.size))],
      beamwidth: [...new Set(filteredProducts.map((product) => product.beamwidth))],
      continent: [...new Set(filteredProducts.map((product) => product.continent))]
    };
    setAvailableOptions(options);
  };

  const getDisplayName = (filterType) => {
    switch(filterType) {
      case 'beamwidth': return 'Beamwidth';
      default: 
        return filterType.charAt(0).toUpperCase() + filterType.slice(1);
    }
  };

  return (
    <div className="tool-container">
      <h1 className="faq-title" onClick={handleClick}>Selector Tool<span className="dropdown-chevron"></span></h1>
      {selectorTool && (
        <>
          <div className="filter-grid">
            <button className="reset-button" onClick={resetFilters}>
              Reset
            </button>

            {Object.entries(availableOptions).map(([filterType, options]) => (
              <div key={filterType} className="filter-group">
                <div className="filter-label">
                  {getDisplayName(filterType)}
                  <span className="info-tooltip" data-tooltip={tooltipTexts[filterType]}>
                    (i)
                  </span>
                  {filters[filterType] && (
                    <button
                      className="clear-button"
                      onClick={() => clearFilter(filterType)}
                    >
                      X
                    </button>
                  )}
                </div>
                <select
                  className="filter-select"
                  value={filters[filterType] || ""}
                  onChange={(e) => handleFilterChange(filterType, e.target.value)}
                >
                  <option value="">Select {getDisplayName(filterType)}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Model</th>
                  {Object.keys(availableOptions).map((key) => (
                    <th key={key}>
                      {getDisplayName(key)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.Model}</td>
                    <td>{product.quantity}</td>
                    <td>{product.size}</td>
                    <td>{product.beamwidth}</td>
                    <td>{product.continent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default WirelessSelectorTool;