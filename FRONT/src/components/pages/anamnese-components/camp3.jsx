import React from 'react';

export const AspectosMotores = ({alter, radioq, RadioQuestion}) => {
  return (
    <main>
        <h2>
                3. Aspectos Motores
        </h2>
        <div>   
            <RadioQuestion
                question="Apresenta alguma dificuldade de locomoção, postura e/ou coordenação?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq7}
                onChange={(e) => alter('radioq7', e.target.value)}
            />  
            <RadioQuestion
                question="Possui bom desempenho em educação física?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq8}
                onChange={(e) => alter('radioq8', e.target.value)}
            />
            <RadioQuestion
                question="Apresenta interesse pela matéria?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq9}
                onChange={(e) => alter('radioq9', e.target.value)}
            />   
        </div>
    </main>
  )
};
