import React from 'react';

export const AspectosMotores = ({alter, watcher, RadioQuestion}) => {
  return (
    <main>
        <h2>
                3. Aspectos Motores
        </h2>
        <div>   
            <RadioQuestion
                question="Apresenta alguma dificuldade de locomoção, postura e/ou coordenação?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher7}
                onChange={(e) => alter('watcher7', e.target.value)}
            />  
            <RadioQuestion
                question="Possui bom desempenho em educação física?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher8}
                onChange={(e) => alter('watcher8', e.target.value)}
            />
            <RadioQuestion
                question="Apresenta interesse pela matéria?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher9}
                onChange={(e) => alter('watcher9', e.target.value)}
            />   
        </div>
    </main>
  )
};
