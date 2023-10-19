import React from 'react';

export const AspectosPerceptivos = ({form, onChange, alter}) => {
  return (
    <main>
        <h2>
                4. Aspectos Perceptivos
        </h2>
        <div>
            <label>    
                Apresenta alguma dificuldade para enxergar?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim7" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não7" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label>
            <label>    
                Exemplo
            <input type="text" name='q23' onChange={onChange} value={form.q23} />
            </label><br /> <br />
            <label>    
                Aparenta ter dificuldades para ouvir?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim8" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não8" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label>
            <label>    
                Exemplo
            <input type="text" name='q24' onChange={onChange} value={form.q24} />
            </label><br /><br />
            <label>    
                É desatento?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim9" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não9" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label>
            <label>    
                Exemplo
            <input type="text" name='q25' onChange={onChange} value={form.q25} />
            </label><br /><br />
            <label>    
                É agitado?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim10" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não10" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label>
            <label>    
                Exemplo
            <input type="text" name='q26' onChange={onChange} value={form.q26} />
            </label><br /><br />
        </div>
    </main>
  )
};
