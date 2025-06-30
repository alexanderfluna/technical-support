import React, { useState, useEffect } from 'react';
import products from "./ContactClosureProducts";

const ContactClosureSelectorTool = () => {
    const [selectorTool, setSelectorTool] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [availableOptions, setAvailableOptions] = useState({
        fiber: [],
        Latching_Or_NonLatching: [],
        inputContactSupervision: [],
        summaryFaultRelay: [],
        numberOfChannels: [],
        bidirectional: [],
    });

    const tooltipTexts = {
        fiber: "Type of fiber connection (Multimode or Single mode)",
        Latching_Or_NonLatching: "Whether the contact closure is latching or non-latching",
        inputContactSupervision: "Presence of input contact supervision",
        summaryFaultRelay: "Presence of summary fault relay",
        numberOfChannels: "Number of contact closure channels",
        bidirectional: "Whether the contact closure supports bidirectional communication"
    };

    const handleClick = () => {
        setSelectorTool(!selectorTool);
    }
    
    const [filters, setFilters] = useState({
        fiber: null,
        Latching_Or_NonLatching: null,
        inputContactSupervision: null,
        summaryFaultRelay: null,
        numberOfChannels: null,
        bidirectional: null,
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
            fiber: null, 
            Latching_Or_NonLatching: null, 
            inputContactSupervision: null, 
            summaryFaultRelay: null, 
            numberOfChannels: null, 
            bidirectional: null
        });
        setFilteredProducts(products); 
        updateAvailableOptions(products); 
    };

    const updateAvailableOptions = (filteredProducts) => {
        const options = {
            fiber: [...new Set(filteredProducts.map((product) => product.fiber))],
            Latching_Or_NonLatching: [...new Set(filteredProducts.map((product) => product.Latching_Or_NonLatching))],
            inputContactSupervision: [...new Set(filteredProducts.map((product) => product.inputContactSupervision))],
            summaryFaultRelay: [...new Set(filteredProducts.map((product) => product.summaryFaultRelay))],
            numberOfChannels: [...new Set(filteredProducts.map((product) => product.numberOfChannels))],
            bidirectional: [...new Set(filteredProducts.map((product) => product.bidirectional))]
        };
        setAvailableOptions(options);
    };

    const getDisplayName = (filterType) => {
        switch(filterType) {
            case 'Latching_Or_NonLatching': return 'Latching or Non-Latching';
            case 'inputContactSupervision': return 'Input Contact Supervision';
            case 'summaryFaultRelay': return 'Summary Fault Relay';
            case 'numberOfChannels': return 'Number of Channels';
            case 'bidirectional': return 'Bidirectional';
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
                                        <td>{product.fiber}</td>
                                        <td>{product.Latching_Or_NonLatching}</td>
                                        <td>{product.inputContactSupervision}</td>
                                        <td>{product.summaryFaultRelay}</td>
                                        <td>{product.numberOfChannels}</td>
                                        <td>{product.bidirectional}</td>
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

export default ContactClosureSelectorTool;