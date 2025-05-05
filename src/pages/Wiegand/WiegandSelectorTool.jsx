import React, { useState, useEffect } from 'react';

const WiegandSelectorTool = () => {
  const [selectorTool, setSelectorTool] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    fiber: [],
    Central_Remote: []
  });

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
    setFilters({ fiber: null, Central_Remote: null });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const Central_Remote = [...new Set(filteredProducts.map((product) => product.Central_Remote))];
    setAvailableOptions({ fiber, Central_Remote });
  };

  return (
    <div className="tool-container">
      <h1 className="faq-title" onClick={handleClick}>Wiegand Selector Tool<span className="dropdown-chevron"></span></h1>
      {selectorTool && (
        <>
          <div className="filter-grid">
            <button 
              className="reset-button" 
              onClick={resetFilters}
            >
              Reset
            </button>

            {["fiber", "Central_Remote"].map((filterType) => (
              <div key={filterType} className="filter-group">
                <div className="filter-label">
                  {filterType === 'Central_Remote' ? 'Central/Remote' : filterType.charAt(0).toUpperCase() + filterType.slice(1)}
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
                  <option value="">Select {filterType === 'Central_Remote' ? 'Central/Remote' : filterType.charAt(0).toUpperCase() + filterType.slice(1)}</option>
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
                  <th>Fiber</th>
                  <th>Central/Remote</th>
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