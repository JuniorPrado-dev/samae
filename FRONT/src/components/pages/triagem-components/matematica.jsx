import React, { useState } from 'react';
import { Check, Exemplo, Number } from '../styled';

export const Matematica = ({ checkboxes, handleCheckBoxChange, onChange, form }) => {

  return (
    <main>
        <h2>
            2. Matemática
        </h2>
            <div>
            <label>
                <Check
                    type="checkbox"
                    name="checkbox16"

                    checked={checkboxes.checkbox16}
                    onChange={handleCheckBoxChange}
                />
                Compreende fundamentos básicos de quantidade e posição?
                <Exemplo>Ex: fino/grosso, cheio/vazio, dentro/fora</Exemplo>
            </label>
            <label>
                <Check
                    type="checkbox"
                    name="checkbox17"

                    checked={checkboxes.checkbox17}
                    onChange={handleCheckBoxChange}
                />
                Reconhece números naturais?
            </label> <br />
            <label>
                Reconhece números naturais até 
                <Number type="number" name='recNum' onChange={onChange} value={form.recNum} />
            </label> <br />
            <label>
                Consegue escrever números naturais sequenciados até 
                <Number type="number" name='escNum' onChange={onChange} value={form.escNum} />
            </label> <br />
            <label>
                <Check
                    type="checkbox"
                    name="checkbox18"

                    checked={checkboxes.checkbox18}
                    onChange={handleCheckBoxChange}
                />
                Reconhece cores primarias e secundárias?
            </label> <br />
            <label>
                <Check
                    type="checkbox"
                    name="checkbox19"

                    checked={checkboxes.checkbox19}
                    onChange={handleCheckBoxChange}
                />
                Associa numeral e quantidade?
            </label> <br />
            <label>
                <Check
                    type="checkbox"
                    name="checkbox20"

                    checked={checkboxes.checkbox20}
                    onChange={handleCheckBoxChange}
                />
                Reconhece formas geométricas?
            </label> <br />
            <label>
                <Check
                    type="checkbox"
                    name="checkbox21"

                    checked={checkboxes.checkbox21}
                    onChange={handleCheckBoxChange}
                />Reconhece lateralidade?
            </label> <br />
            <label>
                <Check
                    type="checkbox"
                    name="checkbox22"

                    checked={checkboxes.checkbox22}
                    onChange={handleCheckBoxChange}
                />
                Possui noções de adição?
            </label> <br />
            <label>
                <Check
                    type="checkbox"
                    name="checkbox23"

                    checked={checkboxes.checkbox23}
                    onChange={handleCheckBoxChange}
                />
                Possui noções de subtração?
            </label> <br />
            <label>
                <Check
                    type="checkbox"
                    name="checkbox24"

                    checked={checkboxes.checkbox24}
                    onChange={handleCheckBoxChange}
                />
                Resolve problemas de adição e subtração?
            </label> <br /> <br />
            </div>

    </main>
  )
};