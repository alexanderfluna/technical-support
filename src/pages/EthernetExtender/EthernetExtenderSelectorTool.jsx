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

  const tooltipTexts = {
    position: "Position in the network (Central or Remote)",
    channels: "Number of Ethernet channels supported",
    formFactor: "Physical form factor of the extender",
    cable: "Type of cable supported",
    poeInjection: "Power over Ethernet injection capability"
  };

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
    setFilters({ 
      position: null, 
      channels: null, 
      formFactor: null, 
      cable: null, 
      poeInjection: null
    });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const options = {
      position: [...new Set(filteredProducts.map((product) => product.position))],
      channels: [...new Set(filteredProducts.map((product) => product.channels))],
      formFactor: [...new Set(filteredProducts.map((product) => product.formFactor))],
      cable: [...new Set(filteredProducts.map((product) => product.cable))],
      poeInjection: [...new Set(filteredProducts.map((product) => product.poeInjection))]
    };
    setAvailableOptions(options);
  };

  const getDisplayName = (filterType) => {
    switch(filterType) {
      case 'poeInjection': return 'PoE Injection';
      case 'formFactor': return 'Form Factor';
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