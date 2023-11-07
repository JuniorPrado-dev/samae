import React from 'react';
import { Data } from '../styled';

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
            /><br />
            {watcher.watcher22 === 'Sim' && (
                <div>       
                    <label>    
                    Faz acompanhamento clínico com alguém? Quem?
                    <br />
                    <Data type="text" name='q31' onChange={onChange} value={form.q31} />
                    </label><br />         
                </div>
            )} 
            <RadioQuestion
                question="O aluno necessita de acompanhamento emocional especializado?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher23}
                onChange={(e) => alter('watcher23', e.target.value)}
            /><br />
            <h2>
                Outras ocorrências?
            </h2>
            <Data type="text" name='q32' onChange={onChange} value={form.q32} />
        </div><br />
    </main>
  )
};