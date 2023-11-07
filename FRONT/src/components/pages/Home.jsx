import React, { useState, useEffect } from 'react';

export const Home = () => {
  const [data, setData] = useState('');

  // Recuperar dados do localStorage no carregamento inicial
  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(storedData);
    }
  }, []);

  // Atualizar e armazenar dados no localStorage
  const handleInputChange = (e) => {
    const newData = e.target.value;
    setData(newData);
    localStorage.setItem('data', newData);
  };

  // Limpar o localStorage
  const handleClearLocalStorage = () => {
    localStorage.removeItem('data');
    setData('');
  };

  // Limpar o localStorage à meia-noite
  useEffect(() => {
    const clearLocalStorageAtMidnight = () => {
      const now = new Date();
      const timeToMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // próxima data à meia-noite
        0, // horas
        0, // minutos
        0 // segundos
      ).getTime() - now.getTime();
      setTimeout(() => {
        localStorage.removeItem('data');
        setData('');
      }, timeToMidnight);
    };

    clearLocalStorageAtMidnight();

    const interval = setInterval(clearLocalStorageAtMidnight, 24 * 60 * 60 * 1000); // atualiza a cada 24 horas
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={handleInputChange}
        placeholder="Digite algo..."
      />
      <button onClick={handleClearLocalStorage}>Limpar Local Storage</button>
    </div>
  );
};
