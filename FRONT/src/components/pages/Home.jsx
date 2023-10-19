import React, { useState } from 'react';

export const Home = () => {
  const generateUniqueId = () => {
    const length = 9;
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const [uniqueId, setUniqueId] = useState(generateUniqueId());

  const handleClick = () => {
    setUniqueId(generateUniqueId());
  };

  return (
    <div>
      <p>ID gerado: {uniqueId}</p>
      <button onClick={handleClick}>Gerar Novo ID</button>
    </div>
  );
};
