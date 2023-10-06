import React, { useState } from 'react';

export const Home = () => {

    const cards = [
        { id: 1, text: 'Card 1' },
        { id: 2, text: 'Card 2' },
        { id: 3, text: 'Card 3' },
        { id: 4, text: 'Card 4' },
        { id: 5, text: 'Card 5' },
        { id: 6, text: 'Card 6' },
        { id: 7, text: 'Card 7' },
      ];
    
      const [currentCardIndex, setCurrentCardIndex] = useState(0);
    
      const handleNextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
      };
    
      const handlePrevCard = () => {
        setCurrentCardIndex((prevIndex) =>
          prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
      };

    return (
        <main>
            <div>
                <button onClick={handlePrevCard}>Anterior</button>
                <button onClick={handleNextCard}>Próximo</button>
            </div>

            <div>
                <h1>Card Atual</h1>
                <p>{cards[currentCardIndex].text}</p>
            </div>
        </main>
    )
};
