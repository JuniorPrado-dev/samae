import React from 'react';

export const Sociabilidade = ({alter, radioq, RadioQuestion}) => {
  return (
    <main>
        <h2>
                6. Sociabilidade
        </h2>
        <div>   
                
            <RadioQuestion
                question="Faz amigo com facilidade?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq14}
                onChange={(e) => alter('radioq14', e.target.value)}
            />   
                
            <RadioQuestion
                question="Como o aluno prefere fazer trabalho?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq15}
                onChange={(e) => alter('radioq15', e.target.value)}
            />   
                
                <br />
            <RadioQuestion
                question="Possui tolerância a frustação?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq16}
                onChange={(e) => alter('radioq16', e.target.value)}
            />   
                
            <RadioQuestion
                question="Ajuda os colegas quando necessário?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq17}
                onChange={(e) => alter('radioq17', e.target.value)}
            />   
                
            <RadioQuestion
                question="Adapta-se facilmente a novos grupos de trabalho?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq18}
                onChange={(e) => alter('radioq18', e.target.value)}
            />   
                
            <RadioQuestion
                question="Mantem contato com os colegas de sala fora da escola?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq19}
                onChange={(e) => alter('radioq19', e.target.value)}
            />   
                
            <RadioQuestion
                question="Possui algum tipo de rede social virtual?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq20}
                onChange={(e) => alter('radioq20', e.target.value)}
            />   
                
            <RadioQuestion
                question="Faz uso delas?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq21}
                onChange={(e) => alter('radioq21', e.target.value)}
            />
        </div>
    </main>
  )
};
