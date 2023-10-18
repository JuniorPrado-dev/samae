import React from 'react';

export const AspectosPerceptivos = () => {
  return (
    <main>
        <h2>
                4. Aspectos Perceptivos
        </h2>
        <div>
            <label>    
                Apresenta alguma dificuldade para enxergar?
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Exemplo
            <input type="text" name='q23' onChange={onChange} value={form.q23} />
            </label><br />
            <label>    
                Aparenta ter dificuldades para ouvir?
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Exemplo
            <input type="text" name='q24' onChange={onChange} value={form.q24} />
            </label><br />
            <label>    
                É desatento?
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Exemplo
            <input type="text" name='q25' onChange={onChange} value={form.q25} />
            </label><br />
            <label>    
                É agitado?
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Exemplo
            <input type="text" name='q26' onChange={onChange} value={form.q26} />
            </label><br />
        </div>
    </main>
  )
};
