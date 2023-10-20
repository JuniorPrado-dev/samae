import React from 'react';

export const AspectosMotores = ({alter}) => {
  return (
    <main>
        <h2>
                3. Aspectos Motores
        </h2>
        <div>
            <label>    
                Apresenta alguma dificuldade de locomoção, postura e/ou coordenação?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim4" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não4" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Possui bom desempenho em educação física?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim5" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não5" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Apresenta interesse pela matéria?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim6" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não6" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />        
        </div>
    </main>
  )
};
