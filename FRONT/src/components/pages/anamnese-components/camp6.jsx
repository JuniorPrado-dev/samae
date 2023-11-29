import React from 'react';

export const SociabilidadeAnamnese = ({alter, radio, RadioQuestion}) => {
  return (
    <main>
        <h2>
                6. Sociabilidade
        </h2>
        <div>   
                
            <RadioQuestion
                question="Faz amigo com facilidade?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio14}
                onChange={(e) => alter('radio14', e.target.value)}
            /><br />   
                
            <RadioQuestion
                question="Como o aluno prefere fazer trabalho?"
                options={['Em grupo', 'Sozinho']}
                selectedOption={radio.radio15}
                onChange={(e) => alter('radio15', e.target.value)}
            /><br />
            <RadioQuestion
                question="Possui tolerância a frustação?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio16}
                onChange={(e) => alter('radio16', e.target.value)}
            /><br />   
                
            <RadioQuestion
                question="Ajuda os colegas quando necessário?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio17}
                onChange={(e) => alter('radio17', e.target.value)}
            /><br />   
                
            <RadioQuestion
                question="Adapta-se facilmente a novos grupos de trabalho?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio18}
                onChange={(e) => alter('radio18', e.target.value)}
            /><br />  
                
            <RadioQuestion
                question="Mantem contato com os colegas de sala fora da escola?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio19}
                onChange={(e) => alter('radio19', e.target.value)}
            /><br /> 
                
            <RadioQuestion
                question="Possui algum tipo de rede social virtual?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio20}
                onChange={(e) => alter('radio20', e.target.value)}
            /><br /> 
                
            <RadioQuestion
                question="Faz uso delas?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio21}
                onChange={(e) => alter('radio21', e.target.value)}
            />
        </div><br />
    </main>
  )
};