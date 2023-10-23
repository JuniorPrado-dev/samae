import React from 'react';

export const Saúde = ({form, onChange, alter, watcher, RadioQuestion}) => {
  return (
    <main>
        <h2>
                10. Saúde
        </h2>
        <div>    
            <RadioQuestion
                question="Apresenta problemas neurológicos?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher22}
                onChange={(e) => alter('watcher22', e.target.value)}
            />
            <label>    
                Faz acompanhamento clínico com alguém? Quem?
                <br />
                <input type="text" name='q32' onChange={onChange} value={form.q32} />
            </label><br />   
            <RadioQuestion
                question="O aluno necessita de acompanhamento emocional especializado?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher23}
                onChange={(e) => alter('watcher23', e.target.value)}
            />
            <h2>
                Outras ocorrências?
            </h2>
            <input type="text" name='q34' onChange={onChange} value={form.q34} />
        </div>
    </main>
  )
};
