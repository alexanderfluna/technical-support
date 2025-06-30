import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navigation/Navbar';

const PowerSupply = () => {
  const [selectorTool, setSelectorTool] = useState(true); // Always show for this component
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    voltage: [],
    watts: [],
  });

  const tooltipTexts = {
    voltage: "Output voltage of the power supply",
    watts: "Power output in watts"
  };

  const products = [
    { model: "PS-AMR1-12", voltage: "12VDC", watts: "10W" },
    { model: "PS-AMR5-12", voltage: "12VDC", watts: "72W" },
    { model: "PS-MORD1260", voltage: "12VDC", watts: "60W" },
    { model: "PS-AMR1-24", voltage: "24VDC", watts: "10W" },
    { model: "PS-MORD2460", voltage: "24VDC", watts: "60W" },
    { model: "PS-MORD24100", voltage: "24VDC", watts: "100W" },
    { model: "PS-AMR5-24", voltage: "24VDC", watts: "100W" },
    { model: "PS-DRA30-48A", voltage: "48VDC", watts: "30W" },
    { model: "PS-MORD4860", voltage: "48VDC", watts: "60W" },
    { model: "PS-DRA120-48A", voltage: "48VDC", watts: "120W" },
    { model: "PS-MORD48120", voltage: "48VDC", watts: "120W" },
    { model: "PS-MORD48240", voltage: "48VDC", watts: "240W" },
    { model: "PS48VDC-5A", voltage: "48VDC", watts: "240W" },
    { model: "PS48VDC-10A", voltage: "48VDC", watts: "480W" },
  ];

  const [filters, setFilters] = useState({
    voltage: null,
    watts: null,
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
    setFilters({ 
      voltage: null, 
      watts: null
    });
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const options = {
      voltage: [...new Set(filteredProducts.map((product) => product.voltage))].sort((a, b) => parseInt(a) - parseInt(b)),
      watts: [...new Set(filteredProducts.map((product) => product.watts))].sort((a, b) => parseInt(a) - parseInt(b))
    };
    setAvailableOptions(options);
  };

  const getDisplayName = (filterType) => {
    return filterType.charAt(0).toUpperCase() + filterType.slice(1);
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="tool-container">
        <h1 className="faq-title" style={{fontSize: "3rem"}}>Power Supply</h1>
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
                      <td>{product.voltage}</td>
                      <td>{product.watts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PowerSupply;