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

  const tooltipTexts = {
    dataRate: "Supported data rates (Fast Ethernet, Gigabit Ethernet, or 10 Gigabit)",
    txMedium: "Transmission medium (Copper, Single-mode fiber, or Multi-mode fiber)",
    fibers: "Number of fiber strands required",
    optics: "Type of optical connector",
    pathLength: "Maximum supported transmission distance",
    Tx: "Transmitter wavelength in nanometers",
    Rx: "Receiver wavelength in nanometers"
  };

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

  const getDisplayName = (filterType) => {
    switch(filterType) {
      case 'dataRate': return 'Data Rate';
      case 'txMedium': return 'Tx Medium';
      case 'fibers': return 'Number of Fibers';
      case 'optics': return 'Optics';
      case 'pathLength': return 'Path Length';
      case 'Tx': return 'Tx Wavelength';
      case 'Rx': return 'Rx Wavelength';
      default: return filterType;
    }
  };

  return (
    <div className="tool-container">
      <h1 className="faq-title" onClick={handleClick}>Selector Tool<span className="dropdown-chevron"></span></h1>
      
      {selectorTool && (
        <>
          <div className="filter-grid">
            <button className="reset-button" onClick={resetFilters}>
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
                  value={filters[filterType] || ""}
                  onChange={(e) => handleFilterChange(filterType, e.target.value)}
                >
                  <option value="">Select {getDisplayName(filterType)}</option>
                  {options.map((option) => (
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