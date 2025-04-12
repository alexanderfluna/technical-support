import React, { useState, useEffect } from 'react';
import products from './MediaConverters';

const MediaConverterSelectorTool = () => {
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Multi_Rate: ['No', 'Yes'], 
    Data_Rate: ['FE', 'GE'], 
    PoE: ['No', 'PoE', 'PoEHo'], 
    Fiber: ['Multimode', 'Single mode'],
    Number_Of_Fibers: ['1', '2'],
    Optics: ['LC', 'SC', 'ST'],
    Tx: ['850 nm', '1310 nm', '1550 nm'],
    Single_Dual_Quad: ['Single', 'Dual', 'Quad'], 
    Package: ['ComFit', 'Compact', 'DTF', 'Standalone'],
    Operating_Power: ['12 to 24 VDC', '24 VAC', '48 to 56 VDC', '8 to 15 VDC', '8 to 24 VDC', '8 to 24 VDC, 24 VAC', '9 tp 24 VDC, 24 VAC']
  });

  const [filters, setFilters] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredProducts(products);
    updateAvailableOptions(products);
  }, []);

  const toggleTable = () => {
    setShowTable(!showTable);
    setFilteredProducts(products);
    updateAvailableOptions(products);
    setFilters({});
  };

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
    setFilters({ Multi_Rate: null,
      Data_Rate: null,
      PoE: null,
      Fiber: null,
      Number_Of_Fibers: null,
      Optics: null,
      Tx: null,
      Single_Dual_Quad: null, 
      Package: null,
      Operating_Power: null});
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const getUniqueOrderedValues = (arr) => [...new Set(arr)];
    const newOptions = {
      Multi_Rate: getUniqueOrderedValues(filteredProducts.map((product) => product.Multi_Rate)),
      Data_Rate: getUniqueOrderedValues(filteredProducts.map((product) => product.Data_Rate)),
      PoE: getUniqueOrderedValues(filteredProducts.map((product) => product.PoE)),
      Fiber: getUniqueOrderedValues(filteredProducts.map((product) => product.Fiber)),
      Number_Of_Fibers: getUniqueOrderedValues(filteredProducts.map((product) => product.Number_Of_Fibers)),
      Optics: getUniqueOrderedValues(filteredProducts.map((product) => product.Optics)),
      Tx: getUniqueOrderedValues(filteredProducts.map((product) => product.Tx)),
      Single_Dual_Quad: getUniqueOrderedValues(filteredProducts.map((product) => product.Single_Dual_Quad)),
      Package: getUniqueOrderedValues(filteredProducts.map((product) => product.Package)),
      Operating_Power: getUniqueOrderedValues(filteredProducts.map((product) => product.Operating_Power))
    };
    setAvailableOptions(newOptions);
  };
  

  return (
    <div className="faq-list">
      <h1 className="faq-title">Media Converter Selector Tool</h1>
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
              {filterType}
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
                <option value="">Select {filterType}</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
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
              <th style={{ padding: '12px', fontSize: '1rem' }}>Model</th>
              {Object.keys(availableOptions).map((key) => (
                <th key={key} style={{ padding: '12px', fontSize: '1rem' }}>
                  {key}
                </th>
              ))}
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
                {Object.keys(availableOptions).map((key) => (
                  <td key={key} style={{ padding: '12px', fontSize: '1rem' }}>
                    {product[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MediaConverterSelectorTool;
