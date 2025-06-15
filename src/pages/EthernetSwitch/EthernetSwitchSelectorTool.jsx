import React, { useState, useEffect } from 'react';
import products from './EthernetSwitchProducts';

const EthernetSwitchSelectorTool = () => {
  const [selectorTool, setSelectorTool] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Hardened: [],
    Managed: [],
    PoE: [],
    Copper_Ports: [],
    Fiber_Ports: [],
    Combo_Ports: [],
  });

  const handleClick = () => {
    setSelectorTool(!selectorTool);
  }

  const sortOrders = {
    Hardened: ["No", "Yes"],
    Managed: ["No", "Yes"],
    PoE: ["No", "30W", "60W", "90W"],
    Copper_Ports: ["0", "2x FE", "4x FE", "5x FE", "7x FE", "8x FE", "3x GE", "4x GE", "8x GE", "12x GE", "16x GE", "22x GE", "24x GE", "48x GE"],
    Fiber_Ports: ["0", "1x FE", "2x FE", "4x FE", "1x GE", "2x GE", "3x GE", "4x GE", "8x GE", "12x GE", "24x GE", "2x 10G", "4x 10G"],
    Combo_Ports: ["0", "1x GE", "2x GE", "4x GE", "16x GE"],
  };

  const [filters, setFilters] = useState({
    Hardened: null,
    Managed: null,
    PoE: null,
    Copper_Ports: null,
    Fiber_Ports: null,
    Combo_Ports: null,
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
    setFilters({ Hardened: null, Managed: null, PoE: null, Copper_Ports: null, Fiber_Ports: null, Combo_Ports: null });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const options = {
      Hardened: [...new Set(filteredProducts.map((product) => product.Hardened))],
      Managed: [...new Set(filteredProducts.map((product) => product.Managed))],
      PoE: [...new Set(filteredProducts.map((product) => product.PoE))],
      Copper_Ports: [...new Set(filteredProducts.map((product) => product.Copper_Ports))],
      Fiber_Ports: [...new Set(filteredProducts.map((product) => product.Fiber_Ports))],
      Combo_Ports: [...new Set(filteredProducts.map((product) => product.Combo_Ports))],
    };
    setAvailableOptions(options);
  };

  const sortOptions = (filterType, options) => {
    const orderMap = sortOrders[filterType].reduce((acc, val, idx) => {
      acc[val] = idx;
      return acc;
    }, {});

    return options
      .filter(option => option !== "0" || filterType === "Fiber_Ports" || filterType === "Copper_Ports" || filterType === "Combo_Ports")
      .sort((a, b) => {
        const orderA = orderMap[a] ?? Infinity;
        const orderB = orderMap[b] ?? Infinity;
        return orderA - orderB;
      });
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
                  {filterType === 'Copper_Ports' ? 'Copper Ports' : 
                  filterType === 'Fiber_Ports' ? 'Fiber Ports' : 
                  filterType === 'Combo_Ports' ? 'Combo Ports' : filterType}
                  {filters[filterType] && (
                    <button className="clear-button" onClick={() => clearFilter(filterType)}>
                      X
                    </button>
                  )}
                </div>
                <select
                  className="filter-select"
                  value={filters[filterType] || ''}
                  onChange={(e) => handleFilterChange(filterType, e.target.value)}
                >
                  <option value="">Select {filterType}</option>
                  {sortOptions(filterType, options).map((option) => (
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
                  <th>Hardened</th>
                  <th>Managed</th>
                  <th>PoE</th>
                  <th>Copper Ports</th>
                  <th>Fiber Ports</th>
                  <th>Combo Ports</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.Model}</td>
                    <td>{product.Hardened}</td>
                    <td>{product.Managed}</td>
                    <td>{product.PoE}</td>
                    <td>{product.Copper_Ports === "0" ? "-" : product.Copper_Ports}</td>
                    <td>{product.Fiber_Ports === "0" ? "-" : product.Fiber_Ports}</td>
                    <td>{product.Combo_Ports === "0" ? "-" : product.Combo_Ports}</td>
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

export default EthernetSwitchSelectorTool;