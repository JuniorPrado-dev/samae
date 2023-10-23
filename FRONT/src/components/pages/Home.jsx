import React, { useState } from 'react';

export const Home  = () => {
  const [watcher, setWatcher] = useState({
    watcher1: '',
    watcher2: '',
    // Adicione mais campos de watcher conforme necessário
  });

  const alter = (fieldName, value) => {
    setWatcher((prevWatchers) => ({
      ...prevWatchers,
      [fieldName]: value,
    }));
  };

  const RadioQuestion = ({ question, options, selectedOption, onChange }) => {
    return (
      <div>
        <p>{question}</p>
        {options.map((option, index) => (
          <label key={index}>
            {option}
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={onChange}
            />
          </label>
        ))}
      </div>
    );
  };
  console.log(RadioQuestion.onChange);

  return (
    <div>
      <RadioQuestion
        question="Você gosta de frutas?"
        options={['Sim', 'Não']}
        selectedOption={watcher.watcher1}
        onChange={(e) => alter('watcher1', e.target.value)}
      />
      <RadioQuestion
        question="Você pratica esportes regularmente?"
        options={['Sim', 'Não']}
        selectedOption={watcher.watcher2}
        onChange={(e) => alter('watcher2', e.target.value)}
      />
      {/* ... outras perguntas ... */}
    </div>
  );
};