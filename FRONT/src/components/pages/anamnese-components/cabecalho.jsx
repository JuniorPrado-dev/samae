import React from 'react'; 
import { RadioQuestion } from '../../radio-question/radioQ';
import { Aluno } from '../styled';
import { Date } from '../../form-student/form_style';

export const Cabecalho = ({form, alter, radio, onChange}) => {
  return (
    <main>
        <div>
            <label>    
                Aluno
                <Aluno type="text" name='c1' onChange={onChange} value={form.c1} />
            </label><br /><br />
            <RadioQuestion
                question="Gênero"
                options={['Masculino', 'Feminino']}
                selectedOption={radio.radio1}
                onChange={(e) => alter('radio1', e.target.value)}
            /><br/>
            <label>    
                Data de Nascimento
                <Date type="date" name='c2' onChange={onChange} value={form.c2} />
            </label><br />
        </div>
    </main>
  )
};