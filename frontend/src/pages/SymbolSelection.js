import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ButtonSelector from '../components/ButtonSelector';

const SymbolSelection = () => {
    const [selectedOptions, setSelectedOptions] = useState([])
    const options = ["NVDA", "RGTI", "RIVN", "LCID", "TSLA", "AAPL", "F", "BA", "UBER", "FSLR", "GM", "MU", "PLTR", "WBA", "MRNA", "PFE", "EL", "ADBE", "GOOG", "AMZN", "MSFT"];
    const navigate = useNavigate();

    const toggleSelection = (option) => {
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(option)
                ? prevSelected.filter((item) => item !== option)
                : [...prevSelected, option]
        );
    };

    const handleContinue = () => {
        navigate('/results', { state: { selectedOptions } });
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <h1 className='test-2xl font-bold mb-4'> Selected Symbols </h1>
            <div className="flex flex-wrap justify-center">
                {options.map((option) => (
                    <ButtonSelector
                        key={option}
                        option={option}
                        isSelected={selectedOptions.includes(option)}
                        toggleSelection={toggleSelection}
                    />
                ))}
            </div>
            <button
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
                onClick={handleContinue}
                disabled={selectedOptions.length === 0}
            >
                Continue
            </button>
        </div>
    );
}; 

export default SymbolSelection; 