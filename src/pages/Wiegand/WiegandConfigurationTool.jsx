import { useState, useEffect } from 'react';
import wiegandConfiguration from './WiegandConfiguration';

const WiegandConfigurationTool = () => {
    const [visibleAnswers, setVisibleAnswers] = useState(new Set());
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedValue, setSelectedValue] = useState("0");
    const [readerSelections, setReaderSelections] = useState({});
    const [combinedUserInput, setCombinedUserInput] = useState([]);

    useEffect(() => {
        const newCombinedInput = [];

        if (selectedOption && selectedValue !== undefined) {
            if (readerSelections[1]) {
                const reader1Key = `0${selectedOption}${readerSelections[1] === "reader-only" ? "Reader Only" : "Reader and Keypad"}`;
                newCombinedInput.push(reader1Key);
            }

            const numReaders = parseInt(selectedValue) + 1;
            for (let i = 2; i <= numReaders; i++) {
                if (readerSelections[i]) {
                    const readerKey = `${i - 1}${selectedOption}${readerSelections[i] === "reader-only" ? "Reader Only" : "Reader and Keypad"}`;
                    newCombinedInput.push(readerKey);
                }
            }
        }

        setCombinedUserInput(newCombinedInput);

        if (newCombinedInput.length > 0) {
            console.log("combined_user_input:", newCombinedInput);
        }
    }, [selectedOption, selectedValue, readerSelections]);

    const toggleAnswer = (questionId) => {
        setVisibleAnswers(prevAnswers => {
            const newAnswers = new Set(prevAnswers);
            if (newAnswers.has(questionId)) {
                newAnswers.delete(questionId);
            } else {
                newAnswers.add(questionId);
            }
            return newAnswers;
        });
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleValueChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleReaderSelection = (index, value) => {
        setReaderSelections(prev => ({
            ...prev,
            [index]: value
        }));
    };

    const handleReset = () => {
        setSelectedOption('');
        setSelectedValue("0");
        setReaderSelections({});
    };

    const getFdwSwitchConfig = (expCount) => {
        const configs = {
            0: {
                c: "Switch 3 ON - all others OFF.",
                r: "Keep all Switches OFF."
            },
            1: {
                c: "Switches 3 and 8 ON - all others OFF.",
                r: "Switch 8 ON - all others OFF."
            },
            2: {
                c: "Switches 3 and 7 ON - all others OFF.",
                r: "Switch 7 ON - all others OFF."
            },
            3: {
                c: "Switches 3, 7, and 8 ON - all others OFF.",
                r: "Switches 7 and 8 ON - all others OFF."
            },
            4: {
                c: "Switches 3 and 6 ON - all others OFF.",
                r: "Switch 6 ON - all others OFF."
            },
            5: {
                c: "Switches 3, 6, and 8 ON - all others OFF.",
                r: "Switches 6 and 8 ON - all others OFF."
            },
            6: {
                c: "Switches 3, 6, and 7 ON - all others OFF.",
                r: "Switches 6 and 7 ON - all others OFF."
            },
            7: {
                c: "Switches 3, 6, 7, and 8 ON - all others OFF.",
                r: "Switches 6, 7, and 8 ON - all others OFF."
            }
        };
        return configs[expCount] || configs[0];
    };

    const renderReaderControls = () => {
        const numReaders = parseInt(selectedValue) + 1;
        const leftReaders = [];
        const rightReaders = [];

        for (let i = 1; i <= numReaders; i++) {
            const readerControl = (
                <div key={i} style={{ marginBottom: '15px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>Reader {i}:</p>
                    <label style={{ display: 'block', marginBottom: '8px' }}>
                        <input
                            type="radio"
                            name={`exp101-${i}`}
                            value="reader-only"
                            checked={readerSelections[i] === "reader-only"}
                            onChange={() => handleReaderSelection(i, "reader-only")}
                        />
                        Reader only
                    </label>
                    <label style={{ display: 'block' }}>
                        <input
                            type="radio"
                            name={`exp101-${i}`}
                            value="reader-keypad"
                            checked={readerSelections[i] === "reader-keypad"}
                            onChange={() => handleReaderSelection(i, "reader-keypad")}
                        />
                        Reader and keypad
                    </label>
                </div>
            );

            if (i <= 4) {
                leftReaders.push(readerControl);
            } else {
                rightReaders.push(readerControl);
            }
        }

        return (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>{leftReaders}</div>
                <div>{rightReaders}</div>
            </div>
        );
    };

    const renderWiegandOutput = () => {
        if (!selectedOption || !selectedValue || combinedUserInput.length === 0) return null;

        const expCount = parseInt(selectedValue);
        const relayLine = selectedOption === "Yes"
            ? "Relay 3 will be used to monitor the status of the optical link."
            : "Relay 3 will not be used to monitor the status of the optical link.";

        const outputBlocks = [];

        const pushSectionTitle = (leftTitle, rightTitle) => {
            outputBlocks.push(
                <div style={{ display: 'flex', fontWeight: 'bold', marginTop: '16px', marginBottom: '6px' }}>
                    <div style={{ minWidth: '50%', paddingRight: '50px' }}>{leftTitle}</div>
                    <div>{rightTitle}</div>
                </div>
            );
        };

        const pushLinePair = (left, right, key) => {
            outputBlocks.push(
                <div key={key} style={{ display: 'flex', marginBottom: '4px' }}>
                    <div style={{ minWidth: '50%', paddingRight: '50px', whiteSpace: 'pre-wrap' }}>{left}</div>
                    <div style={{ whiteSpace: 'pre-wrap' }}>{right}</div>
                </div>
            );
        };

        // Process FDW1000 (first item in combinedUserInput)
        const fdwKey = combinedUserInput[0];
        const fdwConfig = wiegandConfiguration.find(entry => entry[0] === fdwKey);
        const fdwSwitchConfig = getFdwSwitchConfig(expCount);
        
        if (fdwConfig) {
            pushSectionTitle("FDW1000/C - Polling Address 0", "FDW1000/R - Polling Address 0");
            
            // FDW1000/C Configuration
            const fdwCSteps = [
                "Remove power, fiber, data. Turn all switches OFF.",
                fdwConfig[1], // Initial switch configuration
                "Apply power - look for a solid green STATUS LED.",
                "Remove power - turn all switches OFF.",
                fdwSwitchConfig.c, // Final switch configuration
                "Apply power. Configured as FDW1000/C Central Unit."
            ];

            // FDW1000/R Configuration
            const fdwRSteps = [
                "Remove power, fiber, data. Turn all switches OFF.",
                fdwConfig[1], // Initial switch configuration
                "Apply power - look for a solid green STATUS LED.",
                "Remove power - turn all switches OFF.",
                fdwSwitchConfig.r, // Final switch configuration
                "Apply power. Configured as FDW1000/R Remote Unit."
            ];

            // Display steps in pairs
            for (let i = 0; i < fdwCSteps.length; i++) {
                pushLinePair(fdwCSteps[i], fdwRSteps[i], `fdw-step-${i}`);
            }
        }

        // Process EXP101 units (remaining items in combinedUserInput)
        for (let i = 1; i < combinedUserInput.length; i++) {
            const expKey = combinedUserInput[i];
            const expConfig = wiegandConfiguration.find(entry => entry[0] === expKey);
            
            if (expConfig) {
                pushSectionTitle(
                    `EXP101/C - Polling Address ${i}`,
                    `EXP101/R - Polling Address ${i}`
                );
                
                // Add initial instructions
                pushLinePair(
                    "Remove power and data. Turn all switches OFF.",
                    "Remove power and data. Turn all switches OFF.",
                    `exp${i}-prep`
                );
                
                // Add configuration line
                pushLinePair(expConfig[4], expConfig[5], `exp${i}-line-1`);
                
                // Add final instructions
                pushLinePair(
                    `Apply power. Configured as EXP101/C - polling address ${i}.`,
                    `Apply power. Configured as EXP101/R - polling address ${i}.`,
                    `exp${i}-final`
                );
            }
        }

        return (
            <div style={{
                background: "#f8f8f8",
                padding: '20px',
                border: '1px solid #ccc',
                marginTop: '60px',
                fontFamily: 'monospace'
            }}>
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ marginBottom: '4px' }}><strong>Sets of EXP101 = {expCount}</strong></div>
                    <div style={{ marginBottom: '4px' }}>{relayLine}</div>
                    <div style={{ marginBottom: '4px', color: 'red', fontWeight: 'bold' }}>
                        Common grounds are essential for proper operation!
                    </div>
                    <div style={{ marginBottom: '16px', color: 'red', fontWeight: 'bold' }}>
                        Confirm common ground between Central unit(s) and panel and between Remote unit(s) and reader(s)!
                    </div>
                </div>
                {outputBlocks}
                <img src="photos/FDW/FDW.png" alt="FDW1000 wiring" style={{height: "60rem", width: "50%", marginTop: '1rem'}}></img>
            </div>
        );
    };

    return (
        <div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '50px',
                margin: '0px auto'
            }}>
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* Top Left - Relay 3 Question */}
                    <div style={{ marginBottom: '30px' }}>
                        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                            Will relay 3 be used to monitor the status of the optical link?
                        </p>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>
                                <input
                                    type="radio"
                                    value="No"
                                    checked={selectedOption === "No"}
                                    onChange={handleOptionChange}
                                />
                                No
                            </label>
                            <label style={{ display: 'block' }}>
                                <input
                                    type="radio"
                                    value="Yes"
                                    checked={selectedOption === "Yes"}
                                    onChange={handleOptionChange}
                                />
                                Yes
                            </label>
                        </div>
                    </div>

                    {/* Bottom Left - EXP101 Sets */}
                    <div style={{ marginTop: 'auto' }}>
                        <label style={{ marginBottom: '10px', display: 'block', fontWeight: 'bold' }}>
                            How many sets of EXP101 will be used?
                        </label>
                        <select
                            value={selectedValue}
                            onChange={handleValueChange}
                            style={{ marginBottom: '20px', width: '100px' }}
                        >
                            {[...Array(8).keys()].map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Right Column - Readers */}
                <div>
                    <button
                        onClick={handleReset}
                        style={{
                            marginBottom: '20px',
                            width: "100px",
                            padding: '8px 16px',
                            cursor: 'pointer'
                        }}
                    >
                        Reset
                    </button>
                    {renderReaderControls()}
                </div>
            </div>

            {/* Output appears underneath the whole tool */}
            {renderWiegandOutput()}
        </div>
    );
};

export default WiegandConfigurationTool;