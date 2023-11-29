import React from 'react';

export const AspectosMotores = ({alter, radio, RadioQuestion}) => {
  return (
    <main>
        <h2>
                3. Aspectos Motores
        </h2>
        <div>   
            <RadioQuestion
                question="Apresenta alguma dificuldade de locomoção, postura e/ou coordenação?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio7}
                onChange={(e) => alter('radio7', e.target.value)}
            /><br />  
            <RadioQuestion
                question="Possui bom desempenho em educação física?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio8}
                onChange={(e) => alter('radio8', e.target.value)}
            /><br />
            <RadioQuestion
                question="Apresenta interesse pela matéria?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio9}
                onChange={(e) => alter('radio9', e.target.value)}
            /><br />   
        </div><br />
    </main>
  )
};