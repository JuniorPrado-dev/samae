import React from 'react';
import { Data } from '../styled';

export const AspectosPerceptivos = ({ form, onChange, alter, radio, RadioQuestion }) => {
    return (
        <main>
            <h2>
                4. Aspectos Perceptivos
            </h2>
            <div>
                <RadioQuestion
                    question="Apresenta alguma dificuldade para enxergar?"
                    options={['Sim', 'Não']}
                    selectedOption={radio.radio10}
                    onChange={(e) => alter('radio10', e.target.value)}
                /><br />
                {radio.radio10 === 'Sim' && (
                    <div>
                        <label>
                            Exemplo
                            <Data type="text" name='q23' onChange={onChange} value={form.q23} />
                        </label><br /> <br />
                    </div>
                )}
                <RadioQuestion
                    question="Aparenta ter dificuldades para ouvir?"
                    options={['Sim', 'Não']}
                    selectedOption={radio.radio11}
                    onChange={(e) => alter('radio11', e.target.value)}
                /><br />
                {radio.radio11 === 'Sim' && (
                    <div>
                        <label>
                            Exemplo
                            <Data type="text" name='q24' onChange={onChange} value={form.q24} />
                        </label><br /><br />
                    </div>
                )}
                <RadioQuestion
                    question="É desatento?"
                    options={['Sim', 'Não']}
                    selectedOption={radio.radio12}
                    onChange={(e) => alter('radio12', e.target.value)}
                /><br />
                {radio.radio12 === 'Sim' && (
                    <div>
                        <label>
                            Exemplo
                            <Data type="text" name='q25' onChange={onChange} value={form.q25} />
                        </label><br /><br />
                    </div>
                )}
                <RadioQuestion
                    question="É agitado?"
                    options={['Sim', 'Não']}
                    selectedOption={radio.radio13}
                    onChange={(e) => alter('radio13', e.target.value)}
                /><br />
                {radio.radio13 === 'Sim' && (
                    <div>
                        <label>
                            Exemplo
                            <Data type="text" name='q26' onChange={onChange} value={form.q26} />
                        </label><br /><br />
                    </div>
                )}
            </div><br />
        </main>
    )
};