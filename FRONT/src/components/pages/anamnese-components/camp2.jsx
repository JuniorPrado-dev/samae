import React from 'react';
import { Data } from '../styled';

export const HistoricoEscolar = ({form, onChange, alter, radio, RadioQuestion}) => {
  return (
    <main>
        <h2>
                2. Histórico Escolar
        </h2>
        <div>
            <label>    
                Quando iniciou a escolarização?
                <Data type="text" name='q12' onChange={onChange} value={form.q12} />
            </label><br />
            <label>    
                De quem recebe apoio pedagógico em casa?
                <Data type="text" name='q13' onChange={onChange} value={form.q13} />
            </label><br /><br />
            <RadioQuestion
                question="Apresenta dificuldade na fala?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio5}
                onChange={(e) => alter('radio5', e.target.value)}
            /><br />
            {radio.radio5 === 'Sim' && (
                <div>
                    <label>    
                        Qual dificuldade seria?
                    <Data type="text" name='q14' onChange={onChange} value={form.q14} />
                    </label><br />        
                </div>
            )}
            <label>    
                Nota-se dificuldade em aprendizagem?
            <Data type="text" name='q15' onChange={onChange} value={form.q15} />
            </label><br /><br />
            <RadioQuestion
                question="A dificuldade de aprendizado foi avaliada por um profissional?"
                options={['Sim', 'Não']}
                selectedOption={radio.radio6}
                onChange={(e) => alter('radio6', e.target.value)}
            /><br />
            
            {radio.radio6 === 'Sim' && (
                <div>
                    <label>    
                        Quem seria esse profissional?
                    <Data type="text" name='q16' onChange={onChange} value={form.q16} />
                    </label><br />
                </div>
            )}
            <label>    
                Faz acompanhamento com um profissional específico?
            <Data type="text" name='q17' onChange={onChange} value={form.q17} />
            </label><br />
            <label>    
                Possui apoio pedagógico especializado?
            <Data type="text" name='q18' onChange={onChange} value={form.q18} />
            </label><br />
            <label>    
                Repetiu alguma série?
            <Data type="text" name='q19' onChange={onChange} value={form.q19} />
            </label><br />
            <label>    
                Quais matérias possui maior interesse e/ou facilidade para aprender?
            <Data type="text" name='q20' onChange={onChange} value={form.q20} />
            </label><br />
            <label>    
                Quais matérias possui menos interesse e/ou facilidade?
            <Data type="text" name='q21' onChange={onChange} value={form.q21} />
            </label><br />
            <label>    
                Faz atividades extra escolares? Quais?
            <Data type="text" name='q22' onChange={onChange} value={form.q22} />
            </label><br />
        </div><br />
    </main>
  )
};