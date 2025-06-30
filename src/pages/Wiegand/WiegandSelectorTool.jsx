import React, { useState, useEffect } from 'react';

const WiegandSelectorTool = () => {
  const [selectorTool, setSelectorTool] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    fiber: [],
    Central_Remote: []
  });

  const tooltipTexts = {
    fiber: "Type of fiber connection (Multimode or Single mode)",
    Central_Remote: "Whether the unit is a Central or Remote device"
  };

  const products = [
    { model: "FDW1000M/C", fiber: "Multimode", Central_Remote: "Central" },
    { model: "FDW1000M/R", fiber: "Multimode", Central_Remote: "Remote" },
    { model: "FDW1000S/C", fiber: "Single mode", Central_Remote: "Central" },
    { model: "FDW1000S/R", fiber: "Single mode", Central_Remote: "Remote" },
    { model: "EXP101/C", fiber: "Multimode", Central_Remote: "Central"},
    { model: "EXP101/C", fiber: "Single mode", Central_Remote: "Central"},
    { model: "EXP101/R", fiber: "Multimode", Central_Remote: "Remote"},
    { model: "EXP101/R", fiber: "Single mode", Central_Remote: "Remote"},
  ];

  const [filters, setFilters] = useState({
    fiber: null,
    Central_Remote: null,
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
      fiber: null, 
      Central_Remote: null 
    });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const options = {
      fiber: [...new Set(filteredProducts.map((product) => product.fiber))],
      Central_Remote: [...new Set(filteredProducts.map((product) => product.Central_Remote))]
    };
    setAvailableOptions(options);
  };

  const getDisplayName = (filterType) => {
    switch(filterType) {
      case 'Central_Remote': return 'Central/Remote';
      case 'fiber': return 'Fiber';
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
                    <td>{product.model}</td>
                    <td>{product.fiber}</td>
                    <td>{product.Central_Remote}</td>
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

export default WiegandSelectorTool;