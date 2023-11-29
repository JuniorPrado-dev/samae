import React, { useState } from 'react';
import { RadioQuestion } from '../../radio-question/radioQ';

export const LeituraEscrita = ({ checkboxes, handleCheckBoxChange, alter, radio, onChange }) => {

    return (
        <main>
            <h2>
                1. Leitura / Escrita
            </h2>
            <div>
                <h3>Nível 01:</h3>
                <label>
                    Conhece Letras?
                    <input
                        type="checkbox"
                        name="checkbox1"
                        checked={checkboxes.checkbox1}
                        onChange={handleCheckBoxChange}
                    />
                </label><br />
                <label>
                    Consegue descrever/relacionar imagens com coisas reais?
                    <input
                        type="checkbox"
                        name="checkbox2"

                        checked={checkboxes.checkbox2}
                        onChange={handleCheckBoxChange}
                    />
                </label><br />
                <label>
                    Obtem êxito ao decodificar sílabas pausadamente?
                    <input
                        type="checkbox"
                        name="checkbox3"

                        checked={checkboxes.checkbox3}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
            </div>
            <div>
                <h3>Nível 02:</h3>
                <label>
                    Lê frases pausadamente?
                    <input
                        type="checkbox"
                        name="checkbox4"

                        checked={checkboxes.checkbox4}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Necessita de intervenção na leitura?
                    <input
                        type="checkbox"
                        name="checkbox5"

                        checked={checkboxes.checkbox5}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Escreve frases com a ausência de sílabas ou letras?
                    <input
                        type="checkbox"
                        name="checkbox6"

                        checked={checkboxes.checkbox6}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Escreve frases pausadamente, porém de maneira correta?
                    <input
                        type="checkbox"
                        name="checkbox7"

                        checked={checkboxes.checkbox7}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
            </div>


            <div>
                <h3>Nível 03:</h3>
                <label>
                    Lê pausadamente o texto e apresenta dificuldade em explicar o que leu?
                    <input
                        type="checkbox"
                        name="checkbox8"

                        checked={checkboxes.checkbox8}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Escreve pequenos textos com alguns erros ortográficos e pontuação inadequada?
                    <input
                        type="checkbox"
                        name="checkbox9"

                        checked={checkboxes.checkbox9}
                        onChange={handleCheckBoxChange}
                    />
                </label> <br />
                <label>
                    Escreve pequenos textos sem erros ortográficos e pontuação adequada?
                    <input
                        type="checkbox"
                        name="checkbox10"

                        checked={checkboxes.checkbox10}
                        onChange={handleCheckBoxChange}
                    />

                </label> <br />
            </div>


            <div>
                <h3>Nível 04:</h3>
                <label>
                    Consegue ler com segurança?
                    <input
                        type="checkbox"
                        name="checkbox11"

                        checked={checkboxes.checkbox11}
                        onChange={handleCheckBoxChange}
                    />

                </label> <br />
                <label>
                    Obedece os devidos sinais de pontuação?
                    <input
                        type="checkbox"
                        name="checkbox12"

                        checked={checkboxes.checkbox12}
                        onChange={handleCheckBoxChange}
                    />

                </label> <br />
                <label>
                    Ler com entonação adequada?
                    <input
                        type="checkbox"
                        name="checkbox13"

                        checked={checkboxes.checkbox13}
                        onChange={handleCheckBoxChange}
                    />

                </label> <br />
                <label>
                    Produz pequenos textos e apresenta dificuldade na ascentuação?
                    <input
                        type="checkbox"
                        name="checkbox14"

                        checked={checkboxes.checkbox14}
                        onChange={handleCheckBoxChange}
                    />

                </label> <br />
                <label>
                    Produz textos considerando gênero, título, sequência e pontuação adequada?
                    <input
                        type="checkbox"
                        name="checkbox15"

                        checked={checkboxes.checkbox15}
                        onChange={handleCheckBoxChange}
                    />

                </label> <br />

                <RadioQuestion
                    question="Qual nível de escrita do aluno?"
                    options={['Pré-silábico - 01', 'Pré-silábico - 02', 'Silábico', 'Silábico Alfabético', 'Alfabético']}
                    selectedOption={radio.radio1}
                    onChange={(e) => alter('radio1', e.target.value)}
                /><br />
            </div><br />
        </main>
    )
};
