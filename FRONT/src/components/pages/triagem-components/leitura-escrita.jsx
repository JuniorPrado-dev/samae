import React, { useState } from 'react';
import { Check } from '../styled';
import { Radio } from '../../radio-question/styled';

export const LeituraEscrita = ({ checkboxes, handleCheckBoxChange, alter}) => {

    return (
        <main>
            <h2>
                1. Leitura / Escrita
            </h2>
            <div>
                <h3>Nível 01:</h3>
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox1"

                        checked={checkboxes.checkbox1}
                        onChange={handleCheckBoxChange}
                    />
                    Conhece Letras?
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox2"

                        checked={checkboxes.checkbox2}
                        onChange={handleCheckBoxChange}
                    />
                    Consegue descrever/relacionar imagens com coisas reais?
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox3"

                        checked={checkboxes.checkbox3}
                        onChange={handleCheckBoxChange}
                    />
                    Obtem êxito ao decodificar sílabas pausadamente?
                </label> <br /><br />
            </div>
            <div>
                <h3>Nível 02:</h3>
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox4"

                        checked={checkboxes.checkbox4}
                        onChange={handleCheckBoxChange}
                    />
                    Lê frases pausadamente?
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox5"

                        checked={checkboxes.checkbox5}
                        onChange={handleCheckBoxChange}
                    />
                    Necessita de intervenção na leitura?
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox6"

                        checked={checkboxes.checkbox6}
                        onChange={handleCheckBoxChange}
                    />
                    Escreve frases com a ausência de sílabas ou letras?
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox7"

                        checked={checkboxes.checkbox7}
                        onChange={handleCheckBoxChange}
                    />
                    Escreve frases pausadamente, porém de maneira correta?
                </label><br /><br />
            </div>


            <div>
                <h3>Nível 03:</h3>
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox8"

                        checked={checkboxes.checkbox8}
                        onChange={handleCheckBoxChange}
                    />
                    Lê pausadamente o texto e apresenta dificuldade em explicar o que leu?
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox9"

                        checked={checkboxes.checkbox9}
                        onChange={handleCheckBoxChange}
                    />
                    Escreve pequenos textos com alguns erros ortográficos e pontuação inadequada?
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox10"

                        checked={checkboxes.checkbox10}
                        onChange={handleCheckBoxChange}
                    />
                    Escreve pequenos textos sem erros ortográficos e pontuação adequada?

                </label><br /><br />
            </div>


            <div>
                <h3>Nível 04:</h3>
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox11"

                        checked={checkboxes.checkbox11}
                        onChange={handleCheckBoxChange}
                    />
                    Consegue ler com segurança?

                </label><br />
                <label> 
                    <Check
                        type="checkbox"
                        name="checkbox12"

                        checked={checkboxes.checkbox12}
                        onChange={handleCheckBoxChange}
                    />
                    Obedece os devidos sinais de pontuação?

                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox13"

                        checked={checkboxes.checkbox13}
                        onChange={handleCheckBoxChange}
                    />
                    Ler com entonação adequada?

                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox14"

                        checked={checkboxes.checkbox14}
                        onChange={handleCheckBoxChange}
                    />
                    Produz pequenos textos e apresenta dificuldade na ascentuação?

                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox15"

                        checked={checkboxes.checkbox15}
                        onChange={handleCheckBoxChange}
                    />
                    Produz textos considerando gênero, título, sequência e pontuação adequada?
                </label><br /><br />
                <label>
                    Qual o nível de escrita do aluno?
                    <br />
                    <Radio type="radio" name="alter" onChange={alter} value="Pré-silábico - 01" />
                    <label htmlFor="triagem" className="alter">Pré-silábico - 01</label><br />
                    <Radio type="radio" name="alter" onChange={alter} value="Pré-silábico - 02" />
                    <label htmlFor="triagem" className="alter">Pré-silábico - 02</label><br />
                    <Radio type="radio" name="alter" onChange={alter} value="Silábico" />
                    <label htmlFor="triagem" className="alter">Silábico</label><br />
                    <Radio type="radio" name="alter" onChange={alter} value="Silábico Alfabético" />
                    <label htmlFor="triagem" className="alter">Silábico Alfabético</label><br />
                    <Radio type="radio" name="alter" onChange={alter} value="Alfabético" />
                    <label htmlFor="triagem" className="alter">Alfabético</label><br /><br />
                </label>
            </div><br />
        </main>
    )
};
