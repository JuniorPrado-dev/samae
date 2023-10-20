import React from 'react';

export const Saúde = ({form, onChange, alter}) => {
  return (
    <main>
        <h2>
                10. Saúde
        </h2>
        <div>
            <label>    
                Apresenta problemas neurológicos?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim19" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não19" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            <input type="text" name='q31' onChange={onChange} value={form.q31} /><br />
            </label>
            <label>    
                Faz acompanhamento clínico com alguém? Quem?
                <br />
                <input type="text" name='q32' onChange={onChange} value={form.q32} />
            </label><br />
            <label>    
                O aluno necessita de acompanhamento emocional especializado?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim20" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não20" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            <input type="text" name='q33' onChange={onChange} value={form.q33} />
            </label><br /><br />
        </div>
    </main>
  )
};
