import React from 'react';

export const AspectosPerceptivos = ({form, onChange, alter, watcher, RadioQuestion}) => {
  return (
    <main>
        <h2>
                4. Aspectos Perceptivos
        </h2>
        <div>
            <RadioQuestion
                question="Apresenta alguma dificuldade para enxergar?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher10}
                onChange={(e) => alter('watcher10', e.target.value)}
            />
            {watcher.watcher10 === 'Sim' && (
                <div>       
                    <label>    
                        Exemplo
                    <input type="text" name='q23' onChange={onChange} value={form.q23} />
                    </label><br /> <br />
                </div>
            )}
            <RadioQuestion
                question="Aparenta ter dificuldades para ouvir?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher11}
                onChange={(e) => alter('watcher11', e.target.value)}
            />
            {watcher.watcher11 === 'Sim' && (
                <div>     
                    <label>    
                        Exemplo
                    <input type="text" name='q24' onChange={onChange} value={form.q24} />
                    </label><br /><br />  
                </div>
            )}
            <RadioQuestion
                question="É desatento?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher12}
                onChange={(e) => alter('watcher12', e.target.value)}
            />
            {watcher.watcher12 === 'Sim' && (
                <div>       
                    <label>    
                        Exemplo
                    <input type="text" name='q25' onChange={onChange} value={form.q25} />
                    </label><br /><br />
                </div>
            )}
            <RadioQuestion
                question="É agitado?"
                options={['Sim', 'Não']}
                selectedOption={watcher.watcher13}
                onChange={(e) => alter('watcher13', e.target.value)}
            />
            {watcher.watcher13 === 'Sim' && (
                <div>       
                    <label>    
                        Exemplo
                    <input type="text" name='q26' onChange={onChange} value={form.q26} />
                    </label><br /><br />
                </div>
            )}
        </div>
    </main>
  )
};
