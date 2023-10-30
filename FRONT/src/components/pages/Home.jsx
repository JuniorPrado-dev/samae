import React, { useState } from 'react';

export const Home = () => {
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

  const RadioQuestion = ({ question, options, selectedOption, change }) => {
    return (
      <div>
        <p>{question}</p>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={change}
            />
            {option}
          </label>
        ))}
      </div>
    );
  };


  function send(e) {
    e.preventDefault()
    const aluno = {
        fruta1: watcher.watcher1,
        fruta2: watcher.watcher2,
    }
    console.log(aluno);
  }

  return (
    <div>
      <form onSubmit={send}>
      <RadioQuestion
        question="Você gosta de frutas?"
        options={['Sim', 'Não']}
        selectedOption={watcher.watcher1}
        change={(e) => alter('watcher1', e.target.value)}
      />
      {watcher.watcher1 === 'Sim' && (
        <RadioQuestion
          question="Você pratica esportes re'gularmente?"
          options={['Sim', 'Não']}
          selectedOption={watcher.watcher2}
          change={(e) => alter('watcher2', e.target.value)}
        />
      )}
      <button type='submit'>enviar</button>
      </form>
    </div>
  );
};
