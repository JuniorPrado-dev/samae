import React from 'react';

export const Cabecalho = () => {
  return (
    <main>
        <h1>
            Anamnese de Aluno
        </h1>
        <div>
            <label>    
                Aluno
                <input type="text" name='q12' onChange={onChange} value={form.q12} />
            </label><br />
            <label>    
                De quem recebe apoio pedagógico em casa?
                <input type="text" name='q13' onChange={onChange} value={form.q13} />
            </label><br />
            <label>    
                Apresenta dificuldade na fala?       
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Qual dificuldade seria?
            <input type="text" name='q14' onChange={onChange} value={form.q14} />
            </label><br />
            <label>    
                Nota-se dificuldade em aprendizagem?
            <input type="text" name='q15' onChange={onChange} value={form.q15} />
            </label><br />
            <label>    
                A dificuldade de aprendizado foi avaliada por um profissional?       
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
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
