import React from 'react';

export const Saúde = () => {
  return (
    <main>
        <h2>
                10. Saúde
        </h2>
        <div>
            <label>    
                Apresenta problemas neurológicos?
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            <input type="text" name='q31' onChange={onChange} value={form.q31} /><br />
            </label>
            <label>    
                Faz acompanhamento clínico com alguém? Quem?
                <input type="text" name='q32' onChange={onChange} value={form.q32} />
            </label><br />
            <label>    
                O aluno necessita de acompanhamento emocional especializado?
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            <input type="text" name='q33' onChange={onChange} value={form.q33} />
            </label><br />
            <label>    
                Outras ocorrências?
                <input type="text" name='q34' onChange={onChange} value={form.q34} />
            </label><br />
        </div>
    </main>
  )
};
