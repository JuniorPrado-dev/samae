import React from 'react';

export const HistoricoEscolar = ({form, onChange, alter, watcher, RadioQuestion}) => {
  return (
    <main>
        <h2>
                2. Histórico Escolar
        </h2>
        <div>
            <label>    
                Quando iniciou a escolarização?
                <input type="text" name='q12' onChange={onChange} value={form.q12} />
            </label><br />
            <label>    
                De quem recebe apoio pedagógico em casa?
                <input type="text" name='q13' onChange={onChange} value={form.q13} />
            </label><br />
            <RadioQuestion
                question="Apresenta dificuldade na fala?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher5}
                onChange={(e) => alter('watcher5', e.target.value)}
            />
            <label>    
                Qual dificuldade seria?
            <input type="text" name='q14' onChange={onChange} value={form.q14} />
            </label><br />
            <label>    
                Nota-se dificuldade em aprendizagem?
            <input type="text" name='q15' onChange={onChange} value={form.q15} />
            </label><br />
            <RadioQuestion
                question="A dificuldade de aprendizado foi avaliada por um profissional?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher6}
                onChange={(e) => alter('watcher6', e.target.value)}
            />
            <label>    
                Quem seria esse profissional?
            <input type="text" name='q16' onChange={onChange} value={form.q16} />
            </label><br />
            <label>    
                Faz acompanhamento com um profissional específico?
            <input type="text" name='q17' onChange={onChange} value={form.q17} />
            </label><br />
            <label>    
                Possui apoio pedagógico especializado?
            <input type="text" name='q18' onChange={onChange} value={form.q18} />
            </label><br />
            <label>    
                Repetiu alguma série?
            <input type="text" name='q19' onChange={onChange} value={form.q19} />
            </label><br />
            <label>    
                Quais matérias possui maior interesse e/ou facilidade para aprender?
            <input type="text" name='q20' onChange={onChange} value={form.q20} />
            </label><br />
            <label>    
                Quais matérias possui menos interesse e/ou facilidade?
            <input type="text" name='q21' onChange={onChange} value={form.q21} />
            </label><br />
            <label>    
                Faz atividades extra escolares? Quais?
            <input type="text" name='q22' onChange={onChange} value={form.q22} />
            </label><br />
        </div>
    </main>
  )
};
