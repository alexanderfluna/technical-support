import React, { useState, useEffect } from 'react';
import '../../styles/Pages.css'

const PoEInjector = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Data_Rate: [],
    IEEE: [],
    power: [],
    Output_Voltage: [],
    Input_Voltage: [],
  });

  const products = [
    { model: "CNGE1IPS", Data_Rate: "GE", IEEE: "802.3at", power: "35W", Output_Voltage: "56VDC", Input_Voltage: "90-240VAC" },
    { model: "CNGE1IPS75AC", Data_Rate: "GE", IEEE: "802.3at", power: "75W", Output_Voltage: "56VDC", Input_Voltage: "90-240VAC" },
    { model: "CNGE1IPS95AC", Data_Rate: "GE", IEEE: "802.3at", power: "95W", Output_Voltage: "56VDC", Input_Voltage: "90-240VAC" },
    { model: "CN1IPSBT-DC", Data_Rate: "GE", IEEE: "802.3bt", power: "90W", Output_Voltage: "52-56VDC", Input_Voltage: "52-56VDC" },
    { model: "NWPM1248GE", Data_Rate: "GE", IEEE: "802.3af", power: "15W", Output_Voltage: "48VDC", Input_Voltage: "9-36VDC" },
    { model: "NWPM2448GE", Data_Rate: "GE", IEEE: "802.3at", power: "35W", Output_Voltage: "56VDC", Input_Voltage: "18-36VDC" },
    { model: "NWPM4848GE", Data_Rate: "GE", IEEE: "802.3at", power: "35W", Output_Voltage: "56VDC", Input_Voltage: "36-72VDC" },
    { model: "PIM1", Data_Rate: "FE", IEEE: "Not required", power: "30W", Output_Voltage: "12-48VDC or 24VAC", Input_Voltage: "12-48VDC or 24 VAC" },
    { model: "CWPOEIPS-15", Data_Rate: "FE", IEEE: "802.3af", power: "15W", Output_Voltage: "48VDC", Input_Voltage: "90-240VAC" },
  ];

  const [filters, setFilters] = useState({
    Data_Rate: null,
    IEEE: null,
    power: null,
    Output_Voltage: null,
    Input_Voltage: null,
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
    setFilters({ Data_Rate: null, IEEE: null, power: null, Output_Voltage: null, Input_Voltage: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const Data_Rate = [...new Set(filteredProducts.map((product) => product.Data_Rate))];
    const IEEE = [...new Set(filteredProducts.map((product) => product.IEEE))];
    const power = [...new Set(filteredProducts.map((product) => product.power))];
    const Output_Voltage = [...new Set(filteredProducts.map((product) => product.Output_Voltage))];
    const Input_Voltage = [...new Set(filteredProducts.map((product) => product.Input_Voltage))];
    setAvailableOptions({ Data_Rate, IEEE, power, Output_Voltage, Input_Voltage });
  };

  return (
    <div className="faq-list">
        <h1 className="faq-title">PoE Injector</h1>
        <div 
          className="filter-options" 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
          }}
        >
              <button 
          className="reset-button" 
          onClick={resetFilters}
          style={{
            padding: '8px 15px',
            backgroundColor: '#ff4d4d',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e60000'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ff4d4d'}
        >
          Reset
        </button>
          {["Data_Rate", "IEEE", "power", "Output_Voltage", "Input_Voltage"].map((filterType) => (
            <div key={filterType} style={{ width: '200px', minWidth: '150px' }}>
              <h3 
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '5px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                {filters[filterType] && (
                  <button
                    className="clear-filter"
                    onClick={() => clearFilter(filterType)}
                    style={{
                      backgroundColor: '#ff4d4d',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      padding: '5px 10px',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e60000'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ff4d4d'}
                  >
                    X
                  </button>
                )}
              </h3>

              <div className="dropdown-group">
                <select
                  name={filterType}
                  value={filters[filterType] || ""}
                  onChange={(e) => handleFilterChange(filterType, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    fontSize: '0.875rem',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxSizing: 'border-box',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s ease-in-out',
                  }}
                >
                  <option value="">Select {filterType.charAt(0).toUpperCase() + filterType.slice(1)}</option>
                  {availableOptions[filterType]?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="table-container" 
          style={{
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            overflowX: 'auto',
          }}
        >
          <table className="selector-table" style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '20px',
            textAlign: 'left',
            borderRadius: '8px',
            overflow: 'hidden',
          }}>
            <thead>
              <tr style={{ backgroundColor: '#007bff', color: '#fff' }}>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Model</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Data Rate</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>IEEE</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Output Power</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Output Voltage</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Input Voltage</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index} style={{
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                  borderBottom: '1px solid #ddd',
                  transition: 'background-color 0.3s ease',
                }}>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.model}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Data_Rate}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.IEEE}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.power}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Output_Voltage}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Input_Voltage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default PoEInjector;
