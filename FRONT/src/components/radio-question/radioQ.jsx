import React, { useState } from 'react';

export const RadioQuestion = ({ question, options, selectedOption, onChange }) => {
  return (
    <div>
      <p>{question}</p>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
          />
          {option}<br/>
        </label>
      ))}
    </div>
  );
};

