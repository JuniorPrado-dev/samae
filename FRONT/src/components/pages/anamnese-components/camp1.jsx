import React from 'react';

export const DF = () => {
  return (
    <main>
        <label>    
            Nome do Pai:
            <input type="text" />
        </label>
        <label>    
            Nome da Mãe:
            <input type="text" />
        </label>
        <label>    
            Resposável pelo aluno:
            <input type="text" />
        </label>
        <label>    
            Número de irmãos:
            <input type="number" />
        </label>
        <label>    
            Posição do aluno no bloco familiar:
            <input type="text" />
        </label>
        <label>
            Qual o estado civil dos pais?        
                <input type="radio" name="alter" onChange={alter} value="Masculino" />
                <label htmlFor="triagem" className="alter">Casados</label>
                <input type="radio" name="alter" onChange={alter} value="Feminino" />
                <label htmlFor="triagem" className="alter">Separados</label>
                <input type="radio" name="alter" onChange={alter} value="Masculino" />
                <label htmlFor="triagem" className="alter">Separados com nova estrutura familiar</label>
        </label>
    </main>
  )
};
