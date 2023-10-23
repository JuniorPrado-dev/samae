import React from 'react';

export const Sociabilidade = ({alter, watcher, RadioQuestion}) => {
  return (
    <main>
        <h2>
                6. Sociabilidade
        </h2>
        <div>   
                
            <RadioQuestion
                question="Faz amigo com facilidade?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher14}
                onChange={(e) => alter('watcher14', e.target.value)}
            />   
                
            <RadioQuestion
                question="Como o aluno prefere fazer trabalho?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher15}
                onChange={(e) => alter('watcher15', e.target.value)}
            />   
                
                <br />
            <RadioQuestion
                question="Possui tolerância a frustação?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher16}
                onChange={(e) => alter('watcher16', e.target.value)}
            />   
                
            <RadioQuestion
                question="Ajuda os colegas quando necessário?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher17}
                onChange={(e) => alter('watcher17', e.target.value)}
            />   
                
            <RadioQuestion
                question="Adapta-se facilmente a novos grupos de trabalho?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher18}
                onChange={(e) => alter('watcher18', e.target.value)}
            />   
                
            <RadioQuestion
                question="Mantem contato com os colegas de sala fora da escola?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher19}
                onChange={(e) => alter('watcher19', e.target.value)}
            />   
                
            <RadioQuestion
                question="Possui algum tipo de rede social virtual?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher20}
                onChange={(e) => alter('watcher20', e.target.value)}
            />   
                
            <RadioQuestion
                question="Faz uso delas?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher21}
                onChange={(e) => alter('watcher21', e.target.value)}
            />
        </div>
    </main>
  )
};
