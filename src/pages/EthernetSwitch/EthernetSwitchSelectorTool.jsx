import { useState, useEffect } from 'react';
import products from './EthernetSwitchProducts';

const EthernetSwitchSelectorTool = () => {
  const [selectorTool, setSelectorTool] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Hardened: [],
    Managed: [],
    PoE: [],
    Copper_Ports: [],
    Fiber_Ports: [],
    Combo_Ports: [],
    Operating_Voltage: [],
  });

  const tooltipTexts = {
    Hardened: "Weather-resistant models designed for harsh environments",
    Managed: "Whether the switch has advanced configuration options",
    PoE: "Power over Ethernet capability and wattage",
    Copper_Ports: "Number of RJ45 ports for copper Ethernet connections",
    Fiber_Ports: "Number of fiber optic ports (SFP/SFP+)",
    Combo_Ports: "Ports that can accept either copper or fiber modules",
    Operating_Voltage: "Required input voltage for the switch"
  };

  const handleClick = () => {
    setSelectorTool(!selectorTool);
  }

  const sortOrders = {
    Hardened: ["No", "Yes"],
    Managed: ["No", "Yes"],
    PoE: ["No", "30W", "60W", "90W"],
    Copper_Ports: ["(48) GE",  "(24) GE", "(22) GE", "(16) GE", "(12) GE", "(8) GE", "(4) GE", "(3) GE", "(8) FE", "(7) FE", "(5) FE", "(4) FE", "(2) FE", "0"],
    Fiber_Ports: ["(4) 10G", "(2) 10G", "(2) 2.5G", "(24) GE", "(12) GE", "(8) GE", "(4) GE", "(3) GE", "(2) GE", "(1) GE", "(4) FE", "(2) FE", "(1) FE", "0"],
    Combo_Ports: ["(16) GE", "(4) GE", "(2) GE", "(1) GE", "0"],
    Operating_Voltage: ["100-240 VAC", "100-240 VAC / 48-57 VDC", "100-240 VAC / 36-72 VDC", "52-57 VDC", "50-57 VDC", "48-57 VDC", "48-56 VDC", "48 VDC", "24 VDC", "12-57 VDC", "12-48 VDC", "12-48 VDC / 24 VAC", "12-24 VDC", "12 VDC", "9-36 VDC", "9-24 VDC"],
  };

  const [filters, setFilters] = useState({
    Hardened: null,
    Managed: null,
    PoE: null,
    Copper_Ports: null,
    Fiber_Ports: null,
    Combo_Ports: null,
    Operating_Voltage: null,
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
      Hardened: null, 
      Managed: null, 
      PoE: null, 
      Copper_Ports: null, 
      Fiber_Ports: null, 
      Combo_Ports: null,
      Operating_Voltage: null 
    });
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
      Operating_Voltage: [...new Set(filteredProducts.map((product) => product.Operating_Voltage))],
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

  const getDisplayName = (filterType) => {
    switch(filterType) {
      case 'Copper_Ports': return 'Copper Ports';
      case 'Fiber_Ports': return 'Fiber Ports';
      case 'Combo_Ports': return 'Combo Ports';
      case 'Operating_Voltage': return 'Operating Voltage';
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
                    <button className="clear-button" onClick={() => clearFilter(filterType)}>
                      X
                    </button>
                  )}
                </div>
                <select
                  className="filter-select"
                  value={filters[filterType] || ''}
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
                  <th>Hardened</th>
                  <th>Managed</th>
                  <th>PoE</th>
                  <th>Copper Ports</th>
                  <th>Fiber Ports</th>
                  <th>Combo Ports</th>
                  <th>Operating Voltage</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.Model}</td>
                    <td>{product.Hardened}</td>
                    <td>{product.Managed}</td>
                    <td>{product.PoE}</td>
                    <td>{product.Copper_Ports === "0" ? "-" : product.Copper_Ports}</td>
                    <td>{product.Fiber_Ports === "0" ? "-" : product.Fiber_Ports}</td>
                    <td>{product.Combo_Ports === "0" ? "-" : product.Combo_Ports}</td>
                    <td>{product.Operating_Voltage}</td>
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

export default EthernetSwitchSelectorTool;