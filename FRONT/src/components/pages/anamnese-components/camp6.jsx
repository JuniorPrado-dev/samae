import React from 'react';

export const Sociabilidade = ({alter}) => {
  return (
    <main>
        <h2>
                6. Sociabilidade
        </h2>
        <div>
            <label>    
                Faz amigo com facilidade?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim11" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não11" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Como o aluno prefere fazer trabalho?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim12" />
                    <label htmlFor="triagem" className="alter">Sozinho</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não12" />
                    <label htmlFor="triagem" className="alter">Em grupo</label><br />
            </label><br />
            <label>    
                Possui tolerância a frustação?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim13" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não13" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Ajuda os colegas quando necessário?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim14" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não14" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Adapta-se facilmente a novos grupos de trabalho?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim15" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não15" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Mantem contato com os colegas de sala fora da escola?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim16" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não16" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Possui algum tipo de rede social virtual?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim17" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não17" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>    
                Faz uso delas?
                <br />
                    <input type="radio" name="alter" onChange={alter} value="Sim18" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não18" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
        </div>
    </main>
  )
};
