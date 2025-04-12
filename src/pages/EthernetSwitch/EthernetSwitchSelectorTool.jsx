import React, { useState, useEffect } from 'react';
import products from './EthernetSwitchProducts';

const EthernetSwitchSelectorTool = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Hardened: [],
    Managed: [],
    PoE: [],
    Copper_Ports: [],
    Fiber_Ports: [],
    Combo_Ports: [],
  });

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
    <div className="faq-list">
        <h1 className="faq-title">Ethernet Switch Selector Tool</h1>
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
          {Object.entries(availableOptions).map(([filterType, options]) => (
            <div key={filterType} style={{ width: '200px', minWidth: '150px' }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                {filterType === 'Copper_Ports' ? 'Copper Ports' : filterType === 'Fiber_Ports' ? 'Fiber Ports' : filterType === 'Combo_Ports' ? 'Combo Ports' : filterType}
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
              <select
                value={filters[filterType] || ''}
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
                <option value="">Select {filterType}</option>
                {sortOptions(filterType, options).map((option) => (
                  <option key={option} value={option} style={{ padding: '10px' }}>
                    {option}
                  </option>
                ))}
              </select>
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
                <th style={{ padding: '12px', fontSize: '1rem' }}>Model</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Hardened</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Managed</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>PoE</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Copper Ports</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Fiber Ports</th>
                <th style={{ padding: '12px', fontSize: '1rem' }}>Combo Ports</th>
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
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Hardened}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Managed}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.PoE}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Copper_Ports === "0" ? "-" : product.Copper_Ports}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Fiber_Ports === "0" ? "-" : product.Fiber_Ports}</td>
                  <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Combo_Ports === "0" ? "-" : product.Combo_Ports}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default EthernetSwitchSelectorTool;
