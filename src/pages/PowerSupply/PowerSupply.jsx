import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navigation/Navbar';

const PowerSupply = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    voltage: [],
    watts: [],
  });

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
    setFilters({ voltage: null, watts: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const voltage = [...new Set(filteredProducts.map((product) => product.voltage))].sort((a, b) => parseInt(a) - parseInt(b));
    const watts = [...new Set(filteredProducts.map((product) => product.watts))].sort((a, b) => parseInt(a) - parseInt(b));
    setAvailableOptions({ voltage, watts });
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="tool-container">
        <div className="faq-list">
          <h1 className="faq-title" style={{fontSize: "3rem"}}>Power Supply</h1>
          <div className="filter-grid">
            <button 
              className="reset-button" 
              onClick={resetFilters}
            >
              Reset Filters
            </button>
            
            <div className="filter-group">
              <div className="filter-label">
                Voltage
                {filters.voltage && (
                  <button
                    className="clear-button"
                    onClick={() => clearFilter("voltage")}
                  >
                    ×
                  </button>
                )}
              </div>
              <select
                className="filter-select"
                name="voltage"
                value={filters.voltage || ""}
                onChange={(e) => handleFilterChange("voltage", e.target.value)}
              >
                <option value="">Select Voltage</option>
                {availableOptions.voltage.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <div className="filter-label">
                Watts
                {filters.watts && (
                  <button
                    className="clear-button"
                    onClick={() => clearFilter("watts")}
                  >
                    ×
                  </button>
                )}
              </div>
              <select
                className="filter-select"
                name="watts"
                value={filters.watts || ""}
                onChange={(e) => handleFilterChange("watts", e.target.value)}
              >
                <option value="">Select Watts</option>
                {availableOptions.watts.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Voltage</th>
                  <th>Watts</th>
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
        </div>
      </div>
    </div>
  );
};

export default PowerSupply;