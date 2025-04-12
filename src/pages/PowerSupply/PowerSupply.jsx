import React, { useState, useEffect } from 'react';
import '../../styles/Pages.css'

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
    <div className="faq-list">
        <h1 className="faq-title">Power Supply</h1>
        <div className="filter-options" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
        }}>
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

          <div style={{ width: '200px', minWidth: '150px' }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              Voltage
              {filters.voltage && (
                <button
                  className="clear-filter"
                  onClick={() => clearFilter("voltage")}
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
                name="voltage"
                value={filters.voltage || ""}
                onChange={(e) => handleFilterChange("voltage", e.target.value)}
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
                <option value="">Select Voltage</option>
                {availableOptions.voltage.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ width: '200px', minWidth: '150px' }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              Watts
              {filters.watts && (
                <button
                  className="clear-filter"
                  onClick={() => clearFilter("watts")}
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
                name="watts"
                value={filters.watts || ""}
                onChange={(e) => handleFilterChange("watts", e.target.value)}
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
                <option value="">Select Watts</option>
                {availableOptions.watts.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="table-container" style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          overflowX: 'auto',
        }}>
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
                <th style={{ padding: '12px', fontSize: '1rem' }}>Voltage</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Watts</th>
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
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.voltage}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.watts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default PowerSupply;
