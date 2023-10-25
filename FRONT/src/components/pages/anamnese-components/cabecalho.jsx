import React from 'react'; 
import { RadioQuestion } from '../../radio-question/radioQ';

export const Cabecalho = ({form, alter, watcher,onChange}) => {
  return (
    <main>
        <h1>
            Anamnese de Aluno
        </h1>
        <div>
            <label>    
                Aluno
                <input type="text" name='c1' onChange={onChange} value={form.c1} />
            </label><br />
            <RadioQuestion
                question="Gênero"
                options={['Masculino', 'Feminino']}
                selectedOption={watcher.watcher1}
                onChange={(e) => alter('watcher1', e.target.value)}
            />
            <label>    
                Data de Nascimento
                <input type="date" name='c2' onChange={onChange} value={form.c2} />
            </label><br />
        </div>
    </main>
  )
};
