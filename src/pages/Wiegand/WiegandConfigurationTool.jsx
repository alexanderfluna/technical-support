import React, { useState } from 'react';

const WiegandConfigurationTool = () => {
    const [visibleAnswers, setVisibleAnswers] = useState(new Set());
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedValue, setSelectedValue] = useState("0");

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

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('wiegand-configuration')}> Wiegand Configuration Tool (In Progress...) </button>
            {visibleAnswers.has('wiegand-configuration') && (
                <div style={{display: "flex", flexDirection: "column", width: "50%", margin: "0px auto"}}>
                    <p>Will relay 3 be used to monitor the status of the optical link?</p>
                    <label>
                        <input
                        type="radio"
                        value="No"
                        checked={selectedOption === "No"}
                        onChange={handleOptionChange}
                        />
                        No
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="Yes"
                        checked={selectedOption === "Yes"}
                        onChange={handleOptionChange}
                        />
                        Yes
                    </label>                    
                    <label>How many sets of EXP101 will be used?</label>
                    <select value={selectedValue} onChange={handleValueChange}>
                        {[...Array(8).keys()].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>

                    <label>
                        <input type="radio" name="exp101-1" value="1" />
                        Reader 1 - reader only
                        </label>
                        <label>
                        <input type="radio" name="exp101-1" value="1" />
                        Reader 1 - reader and keypad
                    </label>

                    {Array.from({ length: selectedValue }, (_, index) => (
                    <div key={index}>
                        <label>
                        <input type="radio" name={`exp101-${index + 2}`} value="reader-only" />
                        Reader {index + 2} - reader only
                        </label>
                        <label>
                        <input type="radio" name={`exp101-${index + 2}`} value="reader-keypad" />
                        Reader {index + 2} - reader and keypad
                        </label>
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
    };

export default WiegandConfigurationTool;
