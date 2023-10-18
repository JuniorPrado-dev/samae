import React from 'react';

export const AspectosMotores = () => {
  return (
    <main>
        <h2>
                3. Aspectos Motores
        </h2>
        <div>
            <label>    
                Apresenta alguma dificuldade de locomoção, postura e/ou coordenação?
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Possui bom desempenho em educação física?
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Apresenta interesse pela matéria?
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />        
        </div>
    </main>
  )
};
