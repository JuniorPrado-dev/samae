import React, { useState } from 'react';
import { Check, Exemplo } from '../styled';

export const Hc = ({ checkboxes, handleCheckBoxChange }) => {

    return (
        <main>
            <h2>
                3. Habilidades Comportamentais
            </h2>
            <div>
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox25"

                        checked={checkboxes.checkbox25}
                        onChange={handleCheckBoxChange}
                    />
                    Interage com outros alunos?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox26"

                        checked={checkboxes.checkbox26}
                        onChange={handleCheckBoxChange}
                    />Brinca e obedece a comandos durante as brincadeiras e/ou as aulas?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox27"

                        checked={checkboxes.checkbox27}
                        onChange={handleCheckBoxChange}
                    />
                    Assume postura defensiva quando necessário?
                </label> <br />
                <label> 
                    <Check
                        type="checkbox"
                        name="checkbox28"

                        checked={checkboxes.checkbox28}
                        onChange={handleCheckBoxChange}
                    />
                    Compartilha objetos com os colegas?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox29"

                        checked={checkboxes.checkbox29}
                        onChange={handleCheckBoxChange}
                    /> 
                    Demonstra autoexpressão de modo adequado?
                    <Exemplo> Ex: sorrir para coisas felizes, chorar para coisa tristes</Exemplo>
                </label>
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox30"

                        checked={checkboxes.checkbox30}
                        onChange={handleCheckBoxChange}
                    />
                    Apresenta comportamento pouco sociável
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox31"

                        checked={checkboxes.checkbox31}
                        onChange={handleCheckBoxChange}
                    />
                    Interage com o educador a partir das atividades propostas?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox32"

                        checked={checkboxes.checkbox32}
                        onChange={handleCheckBoxChange}
                    />
                    Reconhece elogio como incentivo?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox33"

                        checked={checkboxes.checkbox33}
                        onChange={handleCheckBoxChange}
                    />
                    Apresenta comportamentos sem motivo aparente?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox34"

                        checked={checkboxes.checkbox34}
                        onChange={handleCheckBoxChange}
                    />
                    É uma criança apática?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox35"

                        checked={checkboxes.checkbox35}
                        onChange={handleCheckBoxChange}
                    />
                    Consegue contar relatos de modo sequenciado que faça sentido?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox36"

                        checked={checkboxes.checkbox36}
                        onChange={handleCheckBoxChange}
                    />
                    É uma criança inquieta e ansiosa?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox37"

                        checked={checkboxes.checkbox37}
                        onChange={handleCheckBoxChange}
                    />
                    Possui a tendência de isolar de crianças e adultos?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox38"

                        checked={checkboxes.checkbox38}
                        onChange={handleCheckBoxChange}
                    />
                    Demonstra picos de agressividade quando contrariada?
                </label> <br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox39"

                        checked={checkboxes.checkbox39}
                        onChange={handleCheckBoxChange}
                    />
                    Consegue se concentrar ao realizar uma atividade?
                </label> <br />
            </div><br />
        </main>
    )
};
