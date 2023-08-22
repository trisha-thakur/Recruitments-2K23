import React, { useState } from 'react';

const OptionBox: React.FC<{ label: string; onClick: () => void; isSelected: boolean }> = ({
  label,
  onClick,
  isSelected,
}) => {
  return (
    <button
      className={`p-4 border rounded-lg ${
        isSelected
          ? 'bg-blue-500 text-white border-blue-500'
          : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-blue-100 hover:text-blue-500'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Select: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <OptionBox
            key={index}
            label={option}
            onClick={() => handleOptionSelect(option)}
            isSelected={selectedOption === option}
          />
        ))}
      </div>
      <p className="mt-4">
        Selected Option: {selectedOption ? selectedOption : 'None selected'}
      </p>
    </div>
  );
};

export default Select;
