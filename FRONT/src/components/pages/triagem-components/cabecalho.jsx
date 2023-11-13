import React from 'react';
import { Hour, InputTriagem, Title } from '../styled';
import { Fieldset } from '../../form-student/form_style';

export const Cabecalho = ({ form, onChange }) => {
  return (
    <main>
        <Title>Triagem Psicopedagógica</Title>
      <Fieldset>
        <label>
          Aluno:
          <InputTriagem type='number' name='nome' onChange={onChange} value={form.nome} /><br />
        </label>
        <label>
          Data da Triagem:
          <Hour type='date' name='data' onChange={onChange} value={form.data} /><br />
        </label>
        <label>
          Professor:<br />
          <InputTriagem type="number" name='professor' onChange={onChange} value={form.professor} />
        </label>
        <label>
          Psicopedagogo:<br />
          <InputTriagem type="text" name='psicopedagogo' onChange={onChange} value={form.psicopedagogo} />
        </label><br /> <br />
      </Fieldset>
    </main>
  )
};