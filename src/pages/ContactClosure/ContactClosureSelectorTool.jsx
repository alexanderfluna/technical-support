import React, { useState, useEffect } from 'react';
import products from "./ContactClosureProducts";

const ContactClosureSelectorTool = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [availableOptions, setAvailableOptions] = useState({
        fiber: [],
        Latching_Or_NonLatching: [],
        inputContactSupervision: [],
        summaryFaultRelay: [],
        numberOfChannels: [],
        bidirectional: [],
    });
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
        setFilters({ fiber: null, Latching_Or_NonLatching: null, inputContactSupervision: null, summaryFaultRelay: null, numberOfChannels: null, bidirectional: null});
        setFilteredProducts(products); 
        updateAvailableOptions(products); 
    };

    const updateAvailableOptions = (filteredProducts) => {
        const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
        const Latching_Or_NonLatching = [...new Set(filteredProducts.map((product) => product.Latching_Or_NonLatching))];
        const inputContactSupervision = [...new Set(filteredProducts.map((product) => product.inputContactSupervision))];
        const summaryFaultRelay = [...new Set(filteredProducts.map((product) => product.summaryFaultRelay))];
        const numberOfChannels = [...new Set(filteredProducts.map((product) => product.numberOfChannels))];
        const bidirectional = [...new Set(filteredProducts.map((product) => product.bidirectional))];
    
        setAvailableOptions({ fiber, Latching_Or_NonLatching, inputContactSupervision, summaryFaultRelay, numberOfChannels, bidirectional });
    };

    return (
        <div className="tool-container">
            <h1 className="faq-title">Contact Closure Selector Tool</h1>
            
            <div className="filter-grid">
                <button className="reset-button" onClick={resetFilters}>
                    Reset Filters
                </button>

                {["fiber", "Latching_Or_NonLatching", "inputContactSupervision", "summaryFaultRelay", "numberOfChannels", "bidirectional"].map((filterType) => (
                    <div key={filterType} className="filter-group">
                        <div className="filter-label">
                            {filterType.replace(/([A-Z])/g, ' $1').trim().replace(/\b\w/g, char => char.toUpperCase())}
                            {filters[filterType] && (
                                <button className="clear-button" onClick={() => clearFilter(filterType)}>
                                    ×
                                </button>
                            )}
                        </div>
                        <select
                            className="filter-select"
                            name={filterType}
                            value={filters[filterType] || ""}
                            onChange={(e) => handleFilterChange(filterType, e.target.value)}
                        >
                            <option value="">Select {filterType.replace(/([A-Z])/g, ' $1')}</option>
                            {availableOptions[filterType]?.map((option) => (
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
                            <th>Fiber</th>
                            <th>Latching or Non-Latching</th>
                            <th>Input Contact Supervision</th>
                            <th>Summary Fault Relay</th>
                            <th>Number of Channels</th>
                            <th>Bidirectional</th>
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
        </div>
    );
};

export default ContactClosureSelectorTool;