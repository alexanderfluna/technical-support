import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navigation/Navbar';

const PoEInjector = () => {
  const [selectorTool, setSelectorTool] = useState(true); // Always show for this component
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Data_Rate: [],
    IEEE: [],
    power: [],
    Output_Voltage: [],
    Input_Voltage: [],
  });

  const tooltipTexts = {
    Data_Rate: "Supported Ethernet data rate (Fast Ethernet or Gigabit Ethernet)",
    IEEE: "IEEE PoE standard compliance (802.3af, 802.3at, 802.3bt)",
    power: "Maximum power output in watts",
    Output_Voltage: "Voltage supplied to the powered device",
    Input_Voltage: "Required input voltage range"
  };

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
    setFilters({ 
      Data_Rate: null, 
      IEEE: null, 
      power: null, 
      Output_Voltage: null, 
      Input_Voltage: null
    });
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const options = {
      Data_Rate: [...new Set(filteredProducts.map((product) => product.Data_Rate))],
      IEEE: [...new Set(filteredProducts.map((product) => product.IEEE))],
      power: [...new Set(filteredProducts.map((product) => product.power))],
      Output_Voltage: [...new Set(filteredProducts.map((product) => product.Output_Voltage))],
      Input_Voltage: [...new Set(filteredProducts.map((product) => product.Input_Voltage))]
    };
    setAvailableOptions(options);
  };

  const getDisplayName = (filterType) => {
    switch(filterType) {
      case 'Data_Rate': return 'Data Rate';
      case 'Output_Voltage': return 'Output Voltage';
      case 'Input_Voltage': return 'Input Voltage';
      case 'IEEE': return 'IEEE Standard';
      case 'power': return 'Output Power';
      default: return filterType;
    }
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="tool-container">
        <h1 className="faq-title" style={{fontSize: "3rem"}}>PoE Injector</h1>
        {selectorTool && (
          <>
            <div className="filter-grid">
              <button className="reset-button" style={{width: "10rem"}} onClick={resetFilters}>
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
                      <td>{product.model}</td>
                      <td>{product.Data_Rate}</td>
                      <td>{product.IEEE}</td>
                      <td>{product.power}</td>
                      <td>{product.Output_Voltage}</td>
                      <td>{product.Input_Voltage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PoEInjector;