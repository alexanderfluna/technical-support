import React, { useState, useEffect } from 'react';
import products from './WirelessProducts';

const WirelessSelectorTool = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    quantity: [],
    size: [],
    beamwidth: [],
    continent: []
  });

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
    setFilters({ quantity: null, size: null, beamwidth: null, continent: null });
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const quantity = [...new Set(filteredProducts.map((product) => product.quantity))];
    const size = [...new Set(filteredProducts.map((product) => product.size))];
    const beamwidth = [...new Set(filteredProducts.map((product) => product.beamwidth))];
    const continent = [...new Set(filteredProducts.map((product) => product.continent))];
    setAvailableOptions({ quantity, size, beamwidth, continent });
  };

  return (
    <div className="tool-container">
      <h1 className="faq-title">Wireless Ethernet Selector Tool<span className="dropdown-chevron"></span></h1>
      <div className="filter-grid">
        <button 
          className="reset-button" 
          onClick={resetFilters}
        >
          Reset
        </button>

        {["quantity", "size", "beamwidth", "continent"].map((filterType) => (
          <div key={filterType} className="filter-group">
            <div className="filter-label">
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
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
              name={filterType}
              value={filters[filterType] || ""}
              onChange={(e) => handleFilterChange(filterType, e.target.value)}
            >
              <option value="">Select {filterType.charAt(0).toUpperCase() + filterType.slice(1)}</option>
              {availableOptions[filterType]?.map((option) => (
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
              <th>Quantity</th>
              <th>Size</th>
              <th>Beamwidth</th>
              <th>Continent</th>
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
    </div>
  );
};

export default WirelessSelectorTool;