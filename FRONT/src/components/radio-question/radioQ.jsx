import React from 'react';
import { Radio } from './styled';

export const RadioQuestion = ({ question, options, selectedOption, onChange }) => {
  return (
    <div>
      <p>{question}</p>
      {options.map((option, index) => (
        <label key={index}>
          <Radio
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