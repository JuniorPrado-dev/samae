import React from 'react';

export const Saúde = ({form, onChange, alter, radioq, RadioQuestion}) => {
  return (
    <main>
        <h2>
                10. Saúde
        </h2>
        <div>    
            <RadioQuestion
                question="Apresenta problemas neurológicos?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq22}
                onChange={(e) => alter('radioq22', e.target.value)}
            />
            {radioq.radioq22 === 'Sim' && (
                <div>       
                    <label>    
                    Faz acompanhamento clínico com alguém? Quem?
                    <br />
                    <input type="text" name='q31' onChange={onChange} value={form.q31} />
                    </label><br />         
                </div>
            )} 
            <RadioQuestion
                question="O aluno necessita de acompanhamento emocional especializado?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq23}
                onChange={(e) => alter('radioq23', e.target.value)}
            />
            <h2>
                Outras ocorrências?
            </h2>
            <input type="text" name='q32' onChange={onChange} value={form.q32} />
        </div>
    </main>
  )
};
