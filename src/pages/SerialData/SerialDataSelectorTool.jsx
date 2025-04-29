import React, { useState, useEffect } from 'react';
import products from './SerialDataProducts';

const SerialDataSelectorTool = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Number_Of_Fibers: [],
    fiber: [],
    optics: [],
    package: [],
  });
  const [filters, setFilters] = useState({
    Number_Of_Fibers: null,
    fiber: null,
    optics: null,
    package: null,
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
    setFilters({ Number_Of_Fibers: null, fiber: null, optics: null, package: null});
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const Number_Of_Fibers = [...new Set(filteredProducts.map((product) => product.Number_Of_Fibers))];
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const optics = [...new Set(filteredProducts.map((product) => product.optics))];
    const packageOptions = [...new Set(filteredProducts.map((product) => product.package))];

    setAvailableOptions({ Number_Of_Fibers, fiber, optics, package: packageOptions });
  };

  return (
    <div className="tool-container">
      <h1 className="tool-title">Serial Data Selector Tool</h1>
      <div className="filter-grid">
        <button 
          className="reset-button" 
          onClick={resetFilters}
        >
          Reset
        </button>

        {["Number_Of_Fibers", "fiber", "optics", "package"].map((filterType) => (
          <div key={filterType} className="filter-group">
            <div className="filter-label">
              {filterType.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
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
              value={filters[filterType] || ''}
              onChange={(e) => handleFilterChange(filterType, e.target.value)}
            >
              <option value="">Select {filterType.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option>
              {availableOptions[filterType].map((option) => (
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
              <th>NumOfFibers</th>
              <th>Fiber</th>
              <th>Optics</th>
              <th>Package</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.Model}</td>
                <td>{product.Number_Of_Fibers}</td>
                <td>{product.fiber}</td>
                <td>{product.optics}</td>
                <td>{product.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SerialDataSelectorTool;