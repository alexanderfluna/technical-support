import React, { useState, useEffect } from 'react';
import products from "./EthernetExtenderProducts";

const EthernetExtenderSelectorTool = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    position: [],
    channels: [],
    formFactor: [],
    cable: [],
    poeInjection: []
  });
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
    setFilters({ position: null, channels: null, formFactor: null, cable: null, poeInjection: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const position = [...new Set(filteredProducts.map((product) => product.position))];
    const channels = [...new Set(filteredProducts.map((product) => product.channels))];
    const formFactor = [...new Set(filteredProducts.map((product) => product.formFactor))];
    const cable = [...new Set(filteredProducts.map((product) => product.cable))];
    const poeInjection = [...new Set(filteredProducts.map((product) => product.poeInjection))];
 
    setAvailableOptions({ position, channels, formFactor, cable, poeInjection });
  };

  return (
    <div className="faq-list">
      <h1 className="faq-title">Ethernet Extender Selector Tool</h1>
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

        {['position', 'channels', 'formFactor', 'cable', 'poeInjection'].map((filterKey) => (
          <div key={filterKey} style={{ width: '200px', minWidth: '150px' }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              {filterKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              {filters[filterKey] && (
                <button
                  className="clear-filter"
                  onClick={() => clearFilter(filterKey)}
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
                name={filterKey}
                value={filters[filterKey] || ""}
                onChange={(e) => handleFilterChange(filterKey, e.target.value)}
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
                <option value="">Select {filterKey.replace(/([A-Z])/g, ' $1').toLowerCase()}</option>
                {availableOptions[filterKey]?.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
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
              <th style={{ padding: '12px', fontSize: '1rem' }}>Part Number</th>
              <th style={{ padding: '12px', fontSize: '1rem' }}>Position</th>
              <th style={{ padding: '12px', fontSize: '1rem' }}>Channels</th>
              <th style={{ padding: '12px', fontSize: '1rem' }}>Form Factor</th>
              <th style={{ padding: '12px', fontSize: '1rem' }}>Cable</th>
              <th style={{ padding: '12px', fontSize: '1rem' }}>Poe Injection</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index} style={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                borderBottom: '1px solid #ddd',
                transition: 'background-color 0.3s ease',
              }}>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Model}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{product.position}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{product.channels}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{product.formFactor}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{product.cable}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{product.poeInjection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EthernetExtenderSelectorTool