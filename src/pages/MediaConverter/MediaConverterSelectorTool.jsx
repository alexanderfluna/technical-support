import React, { useState, useEffect } from 'react';
import products from './MediaConverters';

const MediaConverterSelectorTool = () => {
  const [selectorTool, setSelectorTool] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Multi_Rate: ['No', 'Yes'], 
    Data_Rate: ['FE', 'GE'], 
    PoE: ['No', '30W', '60W', '90W'], 
    Fiber: ['Multimode', 'Single mode'],
    Number_Of_Fibers: ['1', '2'],
    Optics: ['LC', 'SC', 'ST'],
    Tx: ['850 nm', '1310 nm', '1550 nm'],
    Single_Dual_Quad: ['Single', 'Dual', 'Quad'], 
    Package: ['ComFit', 'Compact', 'DTF', 'Standalone'],
    Operating_Power: ['12 to 24 VDC', '24 VAC', '48 to 56 VDC', '8 to 15 VDC', '8 to 24 VDC', '8 to 24 VDC, 24 VAC', '9 to 24 VDC, 24 VAC']
  });

  const tooltipTexts = {
    Multi_Rate: "Whether the converter supports multiple data rates",
    Data_Rate: "Supported data rates (Fast Ethernet or Gigabit Ethernet)",
    PoE: "Power over Ethernet capability",
    Fiber: "Type of fiber supported (Multimode or Single mode)",
    Number_Of_Fibers: "Number of fibers in the connection",
    Optics: "Type of optical connector",
    Tx: "Transmitter wavelength",
    Single_Dual_Quad: "Number of ports (Single, Dual, or Quad)",
    Package: "Form factor or packaging type",
    Operating_Power: "Required input power for the converter"
  };

  const sortOrders = {
    Multi_Rate: ["No", "Yes"],
    Data_Rate: ["FE", "GE"],
    PoE: ["No", "30W", "60W", "90W"],
    Fiber: ["Multimode", "Single mode"],
    Number_Of_Fibers: ["1", "2"],
    Optics: ["LC", "SC", "ST"],
    Tx: ["850 nm", "1310 nm", "1550 nm"],
    Single_Dual_Quad: ["Single", "Dual", "Quad"],
    Package: ["ComFit", "Compact", "DTF", "Standalone"],
    Operating_Power: [
      "8 to 15 VDC",
      "8 to 24 VDC",
      "8 to 24 VDC, 24 VAC",
      "9 to 24 VDC, 24 VAC",
      "12 to 24 VDC",
      "24 VAC",
      "48 to 56 VDC",
    ]
  };

  const handleClick = () => {
    setSelectorTool(!selectorTool);
  }

  const [filters, setFilters] = useState({});

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
    const newOptions = {
      Multi_Rate: [...new Set(filteredProducts.map((product) => product.Multi_Rate))],
      Data_Rate: [...new Set(filteredProducts.map((product) => product.Data_Rate))],
      PoE: [...new Set(filteredProducts.map((product) => product.PoE))],
      Fiber: [...new Set(filteredProducts.map((product) => product.Fiber))],
      Number_Of_Fibers: [...new Set(filteredProducts.map((product) => product.Number_Of_Fibers))],
      Optics: [...new Set(filteredProducts.map((product) => product.Optics))],
      Tx: [...new Set(filteredProducts.map((product) => product.Tx))],
      Single_Dual_Quad: [...new Set(filteredProducts.map((product) => product.Single_Dual_Quad))],
      Package: [...new Set(filteredProducts.map((product) => product.Package))],
      Operating_Power: [...new Set(filteredProducts.map((product) => product.Operating_Power))]
    };
    setAvailableOptions(newOptions);
  };

  const sortOptions = (filterType, options) => {
    const orderMap = sortOrders[filterType].reduce((acc, val, idx) => {
      acc[val] = idx;
      return acc;
    }, {});

    return options.sort((a, b) => {
      const orderA = orderMap[a] ?? Infinity;
      const orderB = orderMap[b] ?? Infinity;
      return orderA - orderB;
    });
  };

  const getDisplayName = (filterType) => {
    switch(filterType) {
      case 'Multi_Rate': return 'Multi Rate';
      case 'Data_Rate': return 'Data Rate';
      case 'Number_Of_Fibers': return 'Number of Fibers';
      case 'Single_Dual_Quad': return 'Single/Dual/Quad';
      case 'Operating_Power': return 'Operating Power';
      default: return filterType;
    }
  };

  return (
    <div className="tool-container">
      <h1 className="faq-title" onClick={handleClick}>Selector Tool<span className="dropdown-chevron"></span></h1>
      {selectorTool && (
        <>
          <div className="filter-grid">
            <button 
              className="reset-button" 
              onClick={resetFilters}
            >
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
                  name={filterType}
                  value={filters[filterType] || ""}
                  onChange={(e) => handleFilterChange(filterType, e.target.value)}
                >
                  <option value="">Select {getDisplayName(filterType)}</option>
                  {sortOptions(filterType, options).map((option) => (
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
                    {Object.keys(availableOptions).map((key) => (
                      <td key={key}>
                        {product[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MediaConverterSelectorTool;