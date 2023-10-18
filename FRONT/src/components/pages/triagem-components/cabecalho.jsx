import React from 'react';
import { Hour, InputTriagem } from '../styled';
import { Fieldset, Legend} from '../../form-student/form_style';

export const Cabecalho = ({ form, onChange }) => {
  return (
    <main>
        <Legend>Triagem Psicopedagógica</Legend>
      <Fieldset>
        <label>
          Aluno:
          <InputTriagem type='text' name='nome' onChange={onChange} value={form.nome} /><br />
        </label>
        <label>
          Data da Triagem:
          <Hour type='date' name='data' onChange={onChange} value={form.data} /><br />
        </label>
        <label>
          Professor:<br />
          <InputTriagem type="text" name='professor' onChange={onChange} value={form.professor} />
        </label>
        <label>
          Psicopedagogo:<br />
          <InputTriagem type="text" name='psicopedagogo' onChange={onChange} value={form.psicopedagogo} />
        </label><br /> <br />
      </Fieldset>
    </main>
  )
};
