import React from 'react';

export const AspectosPerceptivos = ({form, onChange, alter, radioq, RadioQuestion}) => {
  return (
    <main>
        <h2>
                4. Aspectos Perceptivos
        </h2>
        <div>
            <RadioQuestion
                question="Apresenta alguma dificuldade para enxergar?"
                options={['Sim', 'Não']}
                selectedOption={radioq.radioq10}
                onChange={(e) => alter('radioq10', e.target.value)}
            />
            {radioq.radioq10 === 'Sim' && (
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
                selectedOption={radioq.radioq11}
                onChange={(e) => alter('radioq11', e.target.value)}
            />
            {radioq.radioq11 === 'Sim' && (
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
                selectedOption={radioq.radioq12}
                onChange={(e) => alter('radioq12', e.target.value)}
            />
            {radioq.radioq12 === 'Sim' && (
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
                selectedOption={radioq.radioq13}
                onChange={(e) => alter('radioq13', e.target.value)}
            />
            {radioq.radioq13 === 'Sim' && (
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
