import React from 'react';

export const DadosFamiliares = () => {
  return (
    <main>
        <h2>
                1. Dados Familiar
        </h2>
            <div>
            <label>    
                Nome do Pai:
                <input type="text" name='q1' onChange={onChange} value={form.q1} />
            </label><br />
            <label>    
                Nome da Mãe:
                <input type="text" name='q2' onChange={onChange} value={form.q2} />
            </label><br />
            <label>    
                Resposável pelo aluno:
                <input type="text" name='q3' onChange={onChange} value={form.q3} />
            </label><br />
            <label>    
                Número de irmãos:
                <input type="number" name='q4' onChange={onChange} value={form.q4} />
            </label><br />
            <label>    
                Posição do aluno no bloco familiar:
            <input type="text" name='q5' onChange={onChange} value={form.q5} />
            </label><br />
            <label>
                Qual o estado civil dos pais?   
                <br />     
                    <input type="radio" name="alter" onChange={alter} value="Casados" />
                    <label htmlFor="triagem" className="alter">Casados</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Separados" />
                    <label htmlFor="triagem" className="alter">Separados</label><br />
                    <input type="radio" name="alter" onChange={alter} value="SeparadosCF" />
                    <label htmlFor="triagem" className="alter">Separados com nova estrutura familiar</label><br />
            </label><br />
            <label>    
                Como a criança se posiciona com relação a essa situação?
            <input type="text" name='q6' onChange={onChange} value={form.q6} />
            </label><br />
            <label>    
                Com quem a criança mora?
            <input type="text" name='q7' onChange={onChange} value={form.q7} />
            </label><br />
            <label>    
                Quem costuma trazer e buscar a criança?
            <input type="text" name='q8' onChange={onChange} value={form.q8} />
            </label><br />
            <label>    
                Quem toma as decisões a respeito do aluno?
            <input type="text" name='q9' onChange={onChange} value={form.q9} />
            </label><br />
            <label>    
                A quem recorrer caso haja a necessidade da presença do responsável?
            <input type="text" name='q10' onChange={onChange} value={form.q10} />
            </label><br />
            <label>
                Qual o estado civil dos pais?        
                    <input type="radio" name="alter" onChange={alter} value="Biológico" />
                    <label htmlFor="triagem" className="alter">Biológico</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Adotivo" />
                    <label htmlFor="triagem" className="alter">Adotivo</label><br />
            </label><br />
            <label>
                A criança é ciente da adoção?        
                    <input type="radio" name="alter" onChange={alter} value="Sim" />
                    <label htmlFor="triagem" className="alter">Sim</label><br />
                    <input type="radio" name="alter" onChange={alter} value="Não" />
                    <label htmlFor="triagem" className="alter">Não</label><br />
            </label><br />
            <label>
                Como a criança se posiciona com relação a situação?
                <input type="text" name='q11' onChange={onChange} value={form.q11} />
            </label> <br />
        </div>
    </main>
  )
};
