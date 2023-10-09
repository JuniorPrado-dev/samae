import React from 'react';

export const Cabecalho = ({ form, onChange }) => {
  return (
    <main>
      <div>
        <h1>Triagem Psicopedagógica</h1>
        <label>
          Aluno:
          <input type='text' name='nome' onChange={onChange} value={form.nome} />
        </label>
        <label>
          Data da Triagem:
          <input type='date' name='data' onChange={onChange} value={form.data} /><br />
        </label>
        <label>
          Professor:
          <input type="text" name='professor' onChange={onChange} value={form.professor} />
        </label>
        <label>
          Psicopedagogo:
          <input type="text" name='psicopedagogo' onChange={onChange} value={form.psicopedagogo} />
        </label><br /> <br />
      </div>
    </main>
  )
};
