import React, { useState } from 'react';

const OptionBox: React.FC<{ label: string; onClick: () => void; isSelected: boolean }> = ({label, onClick, isSelected,}) => {
  return (
    <button type='button' className={`p-4 max-w-xs border rounded-lg hover:border-secondary ${isSelected ? 'bg-secondary' : ''}`} onClick={onClick}>{label}</button>
  );
};

const Select: React.FC<{
  options: Array<string>, 
  style: string, 
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>, selectedOption: string | null} > = 
  ({options, style, setSelectedOption, selectedOption}) => {
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div className={`grid ${style}`}>
      {options.map((option, index) => <OptionBox key={index} label={option} onClick={() => handleOptionSelect(option)} isSelected={selectedOption === option}/>)}
    </div>
  );
};

export default Select;
