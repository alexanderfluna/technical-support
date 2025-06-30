import React, { useState, useEffect } from 'react';
import products from './SerialDataProducts';

const SerialDataSelectorTool = () => {
  const [selectorTool, setSelectorTool] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Number_Of_Fibers: [],
    fiber: [],
    optics: [],
    package: [],
  });

  const tooltipTexts = {
    Number_Of_Fibers: "Number of fibers in the connection",
    fiber: "Type of fiber (Multimode or Single mode)",
    optics: "Type of optical connector",
    package: "Form factor or packaging type"
  };

  const [filters, setFilters] = useState({
    Number_Of_Fibers: null,
    fiber: null,
    optics: null,
    package: null,
  });

  const handleClick = () => {
    setSelectorTool(!selectorTool);
  }

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
    setFilters({ 
      Number_Of_Fibers: null, 
      fiber: null, 
      optics: null, 
      package: null
    });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const options = {
      Number_Of_Fibers: [...new Set(filteredProducts.map((product) => product.Number_Of_Fibers))],
      fiber: [...new Set(filteredProducts.map((product) => product.fiber))],
      optics: [...new Set(filteredProducts.map((product) => product.optics))],
      package: [...new Set(filteredProducts.map((product) => product.package))]
    };
    setAvailableOptions(options);
  };

  const getDisplayName = (filterType) => {
    switch(filterType) {
      case 'Number_Of_Fibers': return 'Number of Fibers';
      case 'fiber': return 'Fiber';
      case 'optics': return 'Optics';
      case 'package': return 'Package';
      default: return filterType;
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
                  value={filters[filterType] || ''}
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
                    <td>{product.Number_Of_Fibers}</td>
                    <td>{product.fiber}</td>
                    <td>{product.optics}</td>
                    <td>{product.package}</td>
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

export default SerialDataSelectorTool;