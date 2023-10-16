import React, { useState } from 'react';

export const Hc = ({ checkboxes, handleCheckBoxChange }) => {

    return (
        <main>
            <h2>
                3. Habilidades Comportamentais
            </h2>
            <div>
                <label>
                    Interage com outros alunos?
                    <input
                        type="checkbox"
                        name="checkbox25"

                        checked={checkboxes.checkbox25}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Brinca e obedece a comandos durante as brincadeiras e/ou as aulas?
                    <input
                        type="checkbox"
                        name="checkbox26"

                        checked={checkboxes.checkbox26}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Assume postura defensiva quando necessário?
                    <input
                        type="checkbox"
                        name="checkbox27"

                        checked={checkboxes.checkbox27}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Compartilha objetos com os colegas?
                    <input
                        type="checkbox"
                        name="checkbox28"

                        checked={checkboxes.checkbox28}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Demonstra autoexpressão de modo adequado?
                    <input
                        type="checkbox"
                        name="checkbox29"

                        checked={checkboxes.checkbox29}
                        onChange={handleCheckBoxChange}
                    /> <br />
                    Ex: sorrir para coisas felizes, chorar para coisa tristes
                </label> <br />
                <label>
                    Apresenta comportamento pouco sociável
                    <input
                        type="checkbox"
                        name="checkbox30"

                        checked={checkboxes.checkbox30}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Interage com o educador a partir das atividades propostas?
                    <input
                        type="checkbox"
                        name="checkbox31"

                        checked={checkboxes.checkbox31}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Reconhece elogio como incentivo?
                    <input
                        type="checkbox"
                        name="checkbox32"

                        checked={checkboxes.checkbox32}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Apresenta comportamentos sem motivo aparente?
                    <input
                        type="checkbox"
                        name="checkbox33"

                        checked={checkboxes.checkbox33}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    É uma criança apática?
                    <input
                        type="checkbox"
                        name="checkbox34"

                        checked={checkboxes.checkbox34}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Consegue contar relatos de modo sequenciado que faça sentido?
                    <input
                        type="checkbox"
                        name="checkbox35"

                        checked={checkboxes.checkbox35}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    É uma criança inquieta e ansiosa?
                    <input
                        type="checkbox"
                        name="checkbox36"

                        checked={checkboxes.checkbox36}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Possui a tendência de isolar de crianças e adultos?
                    <input
                        type="checkbox"
                        name="checkbox37"

                        checked={checkboxes.checkbox37}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Demonstra picos de agressividade quando contrariada?
                    <input
                        type="checkbox"
                        name="checkbox38"

                        checked={checkboxes.checkbox38}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Consegue se concentrar ao realizar uma atividade?
                    <input
                        type="checkbox"
                        name="checkbox39"

                        checked={checkboxes.checkbox39}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
            </div><br />
        </main>
    )
};
