import { useState } from 'react';
import wiegandConfiguration from './WiegandConfiguration';


const WiegandConfigurationTool = () => {
    const [visibleAnswers, setVisibleAnswers] = useState(new Set());
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedValue, setSelectedValue] = useState("0");
    const [readerSelections, setReaderSelections] = useState({});

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

    return (
        <div>
            <button className="faq-answer" onClick={() => toggleAnswer('wiegand-configuration')}> 
                Configuration Tool
            </button>
            {visibleAnswers.has('wiegand-configuration') && (
                <div style={{display: "flex", flexDirection: "column",  margin: "0px auto"}}>
                    <button 
                        onClick={handleReset}
                        style={{
                            marginTop: '20px', 
                            width: "100px", 
                            padding: '8px 16px', 
                            cursor: 'pointer',
                            marginBottom: '20px'
                        }}
                    >
                        Reset
                    </button>
                    
                    <p style={{marginBottom: '10px'}}>Will relay 3 be used to monitor the status of the optical link?</p>
                    <div style={{marginBottom: '20px'}}>
                        <label style={{display: 'block', marginBottom: '8px'}}>
                            <input
                                type="radio"
                                value="No"
                                checked={selectedOption === "No"}
                                onChange={handleOptionChange}
                            />
                            No
                        </label>
                        <label style={{display: 'block'}}>
                            <input
                                type="radio"
                                value="Yes"
                                checked={selectedOption === "Yes"}
                                onChange={handleOptionChange}
                            />
                            Yes
                        </label>
                    </div>
                    
                    <label style={{marginBottom: '10px'}}>How many sets of EXP101 will be used?</label>
                    <select 
                        value={selectedValue} 
                        onChange={handleValueChange}
                        style={{marginBottom: '20px', width: '100px'}}
                    >
                        {[...Array(8).keys()].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>

                    <div style={{marginBottom: '25px'}}>
                        <p style={{marginBottom: '8px'}}>Reader 1:</p>
                        <label style={{display: 'block', marginBottom: '8px'}}>
                            <input 
                                type="radio" 
                                name="exp101-1" 
                                value="reader-only"
                                checked={readerSelections[1] === "reader-only"}
                                onChange={() => handleReaderSelection(1, "reader-only")}
                            />
                            Reader only
                        </label>
                        <label style={{display: 'block'}}>
                            <input 
                                type="radio" 
                                name="exp101-1" 
                                value="reader-keypad"
                                checked={readerSelections[1] === "reader-keypad"}
                                onChange={() => handleReaderSelection(1, "reader-keypad")}
                            />
                            Reader and keypad
                        </label>
                    </div>

                    {Array.from({ length: selectedValue }, (_, index) => (
                        <div key={index} style={{marginBottom: '25px'}}>
                            <p style={{marginBottom: '8px'}}>Reader {index + 2}:</p>
                            <label style={{display: 'block', marginBottom: '8px'}}>
                                <input 
                                    type="radio" 
                                    name={`exp101-${index + 2}`} 
                                    value="reader-only"
                                    checked={readerSelections[index + 2] === "reader-only"}
                                    onChange={() => handleReaderSelection(index + 2, "reader-only")}
                                />
                                Reader only
                            </label>
                            <label style={{display: 'block'}}>
                                <input 
                                    type="radio" 
                                    name={`exp101-${index + 2}`} 
                                    value="reader-keypad"
                                    checked={readerSelections[index + 2] === "reader-keypad"}
                                    onChange={() => handleReaderSelection(index + 2, "reader-keypad")}
                                />
                                Reader and keypad
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WiegandConfigurationTool;