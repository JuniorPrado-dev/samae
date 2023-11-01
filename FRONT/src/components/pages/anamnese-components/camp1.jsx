import React from 'react';
import { Data } from '../styled';

export const DadosFamiliares = ({form, onChange, alter, watcher, RadioQuestion}) => {
  return (
    <main>
        <h2>
                1. Dados Familiar
        </h2>
            <div>
            <label>    
                Nome do Pai:
                <Data type="text" name='q1' onChange={onChange} value={form.q1} />
            </label><br />
            <label>    
                Nome da Mãe:
                <Data type="text" name='q2' onChange={onChange} value={form.q2} />
            </label><br />
            <label>    
                Resposável pelo aluno:
                <Data type="text" name='q3' onChange={onChange} value={form.q3} />
            </label><br />
            <label>    
                Número de irmãos:
                <Data type="number" name='q4' onChange={onChange} value={form.q4} />
            </label><br />
            <label>    
                Posição do aluno no bloco familiar:
            <Data type="text" name='q5' onChange={onChange} value={form.q5} />
            </label><br /><br />
            <RadioQuestion
                question="Qual o estado civil dos pais?"
                options={['Casados', 'Separados']}
                selectedOption={watcher.watcher2}
                onChange={(e) => alter('watcher2', e.target.value)}
            /><br />
            {watcher.watcher2 === 'Separados' && (
                <div>
                    <label>    
                        Como a criança se posiciona com relação a essa situação?
                    <Data type="text" name='q6' onChange={onChange} value={form.q6} />
                    </label><br />
                </div>
            )}
            <label>    
                Com quem a criança mora?
            <Data type="text" name='q7' onChange={onChange} value={form.q7} />
            </label><br />
            <label>    
                Quem costuma trazer e buscar a criança?
            <Data type="text" name='q8' onChange={onChange} value={form.q8} />
            </label><br />
            <label>    
                Quem toma as decisões a respeito do aluno?
            <Data type="text" name='q9' onChange={onChange} value={form.q9} />
            </label><br />
            <label>    
                A quem recorrer caso haja a necessidade da presença do responsável?
            <Data type="text" name='q10' onChange={onChange} value={form.q10} />
            </label><br /><br />
            <RadioQuestion
                question="Como se estabeleceu o vínculo familiar com a criança?"
                options={['Biologicamente', 'Adoção']}
                selectedOption={watcher.watcher3}
                onChange={(e) => alter('watcher3', e.target.value)}
            /><br />
            {watcher.watcher3 === 'Adoção' && (
            <RadioQuestion
                question="A criança é ciente da adoção?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher4}
                onChange={(e) => alter('watcher4', e.target.value)}
            />)}
            {watcher.watcher4 === 'Sim' && (
            <div>
                <label>
                    Como a criança se posiciona com relação a essa situação?
                    <input type="text" name='q11' onChange={onChange} value={form.q11} />
                </label> <br />
            </div>)}
        </div><br />
    </main>
  )
};
