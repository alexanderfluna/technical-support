import React, { useState, useEffect } from 'react';
import products from './SFPProducts';

const SFPSelectorTool = () => {
  const [selectorTool, setSelectorTool] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [availableOptions, setAvailableOptions] = useState({
    dataRate: ['FE', 'GE', '10G'],
    txMedium: ['Copper', 'Singlemode', 'Multimode'],
    fibers: ['N/A', '1 strand', '2 strands'],
    optics: ['RJ-45', 'SC', 'LC'],
    pathLength: ['100m', '26/300m', '275/550m', '2km', '10km', '15km', '20km', '40km', '60km', '70km', '80km', '120km'],
    Tx: ['N/A', '850', '1270', '1310', '1330', '1490', '1550'],
    Rx: ['N/A', '850', '1270', '1310', '1330', '1490', '1550'],
  });
  const [filters, setFilters] = useState({
    dataRate: null,
    txMedium: null,
    fibers: null,
    optics: null,
    pathLength: null,
    Tx: null,
    Rx: null,
  });

  const handleClick = () => {
    setSelectorTool(!selectorTool);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredProducts(products);
    updateAvailableOptions(products);
  }, []);

  const clearFilter = (filterType) => {
    handleFilterChange(filterType, null);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value || null };
    setFilters(newFilters);

    const newFilteredProducts = products.filter((product) =>
      Object.entries(newFilters).every(([key, filterValue]) => !filterValue || product[key] === filterValue)
    );

    setFilteredProducts(newFilteredProducts);
    updateAvailableOptions(newFilteredProducts);
  };

  const resetFilters = () => {
    setFilters({
      dataRate: null,
      txMedium: null,
      fibers: null,
      optics: null,
      pathLength: null,
      Tx: null,
      Rx: null,
    });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const getUniqueOptions = (key) => [...new Set(filteredProducts.map((product) => product[key]))];

    setAvailableOptions({
      dataRate: getUniqueOptions('dataRate'),
      txMedium: getUniqueOptions('txMedium'),
      fibers: getUniqueOptions('fibers'),
      optics: getUniqueOptions('optics'),
      pathLength: getUniqueOptions('pathLength'),
      Tx: getUniqueOptions('Tx'),
      Rx: getUniqueOptions('Rx'),
    });
  };

  return (
    <div className="tool-container">
      <h1 className="faq-title" onClick={handleClick}>SFP Selector Tool<span className="dropdown-chevron"></span></h1>
      
      {selectorTool && (
        <>
          <div className="filter-grid">
            <button 
              className="reset-button" 
              onClick={resetFilters}
            >
              Reset All Filters
            </button>

            {['dataRate', 'txMedium', 'fibers', 'optics', 'pathLength', 'Tx', 'Rx'].map((filterKey) => (
              <div key={filterKey} className="filter-group">
                <h3 className="filter-label">
                  {filterKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  {filters[filterKey] && (
                    <button
                      className="clear-button"
                      onClick={() => clearFilter(filterKey)}
                    >
                      ×
                    </button>
                  )}
                </h3>
                <div className="select-wrapper">
                  <select
                    value={filters[filterKey] || ""}
                    onChange={(e) => handleFilterChange(filterKey, e.target.value)}
                    className="filter-select"
                  >
                    <option value=""> </option>
                    {availableOptions[filterKey]?.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>

          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Data Rate</th>
                  <th>Tx Medium</th>
                  <th># of Fibers</th>
                  <th>Optics</th>
                  <th>Path Length</th>
                  <th>Tx</th>
                  <th>Rx</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.Model}</td>
                    <td>{product.dataRate}</td>
                    <td>{product.txMedium}</td>
                    <td>{product.fibers}</td>
                    <td>{product.optics}</td>
                    <td>{product.pathLength}</td>
                    <td>{product.Tx}</td>
                    <td>{product.Rx}</td>
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

export default SFPSelectorTool;