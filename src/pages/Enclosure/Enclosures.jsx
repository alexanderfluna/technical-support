import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navigation/Navbar';

const CardCage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    slots: [],
    voltage: [],
    PSU: [],
    power: []
  });

  const products = [
    { model: "C1US", slots: 14, power: "70W", voltage: "90-264 VAC", PSU: "1 PSU", outputVoltage: "12 VDC" },
    { model: "C2US", slots: 12, power: "70W", voltage: "90-264 VAC", PSU: "2 Redundant PSU", outputVoltage: "12 VDC" },
    { model: "C3US", slots: 3, power: "70W", voltage: "12 VDC", PSU: "2 Redundant PSU", outputVoltage: "12 VDC" },
  ];

  const [filters, setFilters] = useState({
    slots: null,
    voltage: null,
    PSU: null,
    power: null,
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
    setFilters({ slots: null, voltage: null, PSU: null, power: null });
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const slots = [...new Set(filteredProducts.map((product) => product.slots))];
    const voltage = [...new Set(filteredProducts.map((product) => product.voltage))];
    const PSU = [...new Set(filteredProducts.map((product) => product.PSU))];
    const power = [...new Set(filteredProducts.map((product) => product.power))];
    setAvailableOptions({ slots, voltage, PSU, power });
  };

  return (
    <div className="main-container">
      <Navbar/>
      <div className="tool-container">
        <h1>Enclosure</h1>
        
        <div className="filter-grid">
          <button className="reset-button" onClick={resetFilters}>
            Reset Filters
          </button>

          {["slots", "voltage", "power", "PSU"].map((filterType) => (
            <div key={filterType} className="filter-group">
              <div className="filter-label">
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                {filters[filterType] && (
                  <button className="clear-button" onClick={() => clearFilter(filterType)}>
                    ×
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
                <th>Slots</th>
                <th>Input Voltage</th>
                <th>Output Voltage</th>
                <th>Output Power</th>
                <th>PSU</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.model}</td>
                  <td>{product.slots}</td>
                  <td>{product.voltage}</td>
                  <td>{product.outputVoltage}</td>
                  <td>{product.power}</td>
                  <td>{product.PSU}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardCage;