import React, { useState, useEffect } from 'react';
import products from './SerialDataProducts';

const SerialDataSelectorTool = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Number_Of_Fibers: [],
    fiber: [],
    optics: [],
    package: [],
  });
  const [filters, setFilters] = useState({
    Number_Of_Fibers: null,
    fiber: null,
    optics: null,
    package: null,
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
    setFilters({ Number_Of_Fibers: null, fiber: null, optics: null, package: null});
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const Number_Of_Fibers = [...new Set(filteredProducts.map((product) => product.Number_Of_Fibers))];
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const optics = [...new Set(filteredProducts.map((product) => product.optics))];
    const packageOptions = [...new Set(filteredProducts.map((product) => product.package))];

    setAvailableOptions({ Number_Of_Fibers, fiber, optics, package: packageOptions });
  };

  return (
    <div className="faq-list">
      <h1 className="faq-title">Serial Data Selector Tool</h1>
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
        {["Number_Of_Fibers", "fiber", "optics", "package"].map((filterType) => (
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
              {availableOptions[filterType].map((option) => (
                <option key={option} value={option}>
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
              <th style={{ padding: '12px', fontSize: '1rem' }}>NumOfFibers</th>
              <th style={{ padding: '12px', fontSize: '1rem' }}>Fiber</th>
              <th style={{ padding: '12px', fontSize: '1rem' }}>Optics</th>
              <th style={{ padding: '12px', fontSize: '1rem' }}>Package</th>
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
                <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Number_Of_Fibers}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{product.fiber}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{product.optics}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{product.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SerialDataSelectorTool