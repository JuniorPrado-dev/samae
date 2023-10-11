import React from 'react';
import { Hour, InputTriagem, H1 } from '../styled';
import { Fieldset} from '../../form-student/form_style';

export const Cabecalho = ({ form, onChange }) => {
  return (
    <main>
        <H1>Triagem Psicopedagógica</H1>
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
