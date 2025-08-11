import React, { useState, useEffect } from 'react';
import products from "./ContactClosureProducts";

const ContactClosureSelectorTool = () => {
    const [selectorTool, setSelectorTool] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [availableOptions, setAvailableOptions] = useState({
        Fiber: [],
        numberOfChannels: [],
        bidirectional: [],
        Latching_Or_NonLatching: [],
        inputContactSupervision: [],
        summaryFaultRelay: [],
        carrierDetect: [],
    });

    const tooltipTexts = {
        Fiber: "Type of fiber connection (Multimode or Single mode)",
        numberOfChannels: "Number of contact closure channels",
        bidirectional: "Whether the contact closure supports bidirectional communication",
        Latching_Or_NonLatching: "Whether the contact closure is latching or non-latching",
        inputContactSupervision: "Presence of input contact supervision",
        summaryFaultRelay: "Presence of summary fault relay",
        carrierDetect: "Whether the device monitors the status of the optical link"
    };

    const handleClick = () => {
        setSelectorTool(!selectorTool);
    }
    
    const [filters, setFilters] = useState({
        Fiber: null,
        numberOfChannels: null,
        bidirectional: null,
        Latching_Or_NonLatching: null,
        inputContactSupervision: null,
        summaryFaultRelay: null,
        carrierDetect: null,
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
            Fiber: null, 
            numberOfChannels: null, 
            bidirectional: null,
            Latching_Or_NonLatching: null, 
            inputContactSupervision: null, 
            summaryFaultRelay: null,
            carrierDetect: null
        });
        setFilteredProducts(products); 
        updateAvailableOptions(products); 
    };

    const updateAvailableOptions = (filteredProducts) => {
        const options = {
            Fiber: [...new Set(filteredProducts.map((product) => product.Fiber))],
            numberOfChannels: [...new Set(filteredProducts.map((product) => product.numberOfChannels))],
            bidirectional: [...new Set(filteredProducts.map((product) => product.bidirectional).filter(opt => opt !== "--"))],
            Latching_Or_NonLatching: [...new Set(filteredProducts.map((product) => product.Latching_Or_NonLatching).filter(opt => opt !== "--"))],
            inputContactSupervision: [...new Set(filteredProducts.map((product) => product.inputContactSupervision).filter(opt => opt !== "--"))],
            summaryFaultRelay: [...new Set(filteredProducts.map((product) => product.summaryFaultRelay).filter(opt => opt !== "--"))],
            carrierDetect: [...new Set(filteredProducts.map((product) => product.carrierDetect).filter(opt => opt !== "--"))]
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
            case 'carrierDetect': return 'Carrier Detect';
            default: return filterType;
        }
    };

    // Define the order of columns
    const columnOrder = [
        'Fiber',
        'numberOfChannels',
        'bidirectional',
        'Latching_Or_NonLatching',
        'inputContactSupervision',
        'summaryFaultRelay',
        'carrierDetect'
    ];

    return (
        <div className="tool-container">
            <h1 className="faq-title" onClick={handleClick}>Selector Tool<span className="dropdown-chevron"></span></h1>
            
            {selectorTool && (
                <>
                    <div className="filter-grid">
                        <button className="reset-button" onClick={resetFilters}>
                            Reset
                        </button>

                        {columnOrder.map((filterType) => (
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
                                    {availableOptions[filterType].map((option) => (
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
                                    {columnOrder.map((key) => (
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
                                        <td>{product.Fiber}</td>
                                        <td>{product.numberOfChannels}</td>
                                        <td>{product.bidirectional}</td>
                                        <td>{product.Latching_Or_NonLatching}</td>
                                        <td>{product.inputContactSupervision}</td>
                                        <td>{product.summaryFaultRelay}</td>
                                        <td>{product.carrierDetect}</td>
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