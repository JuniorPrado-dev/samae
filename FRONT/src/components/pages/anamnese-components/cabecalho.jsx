import React from 'react';

export const Cabecalho = ({form, onChange, alter}) => {
  return (
    <main>
        <h1>
            Anamnese de Aluno
        </h1>
        <div>
            <label>    
                Aluno
                <input type="text" name='c1' onChange={onChange} value={form.c1} />
            </label><br /><br />
            <label>    
                Apresenta dificuldade na fala?       
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Masculino" />
                    <label htmlFor="anamnese" className="alter">Masculino</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Feminino" />
                    <label htmlFor="anamnese" className="alter">Feminino</label><br />
            </label><br />
            <label>    
                Data de Nascimento?
                <input type="date" name='c2' onChange={onChange} value={form.c2} />
            </label><br />
        </div>
    </main>
  )
};
