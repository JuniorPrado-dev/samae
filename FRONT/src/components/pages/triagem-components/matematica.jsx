import React, { useState } from 'react';

export const Matematica = ({ checkboxes, handleCheckBoxChange, onChange, form }) => {

  return (
    <main>
      <h2>
                2. Matemática
            </h2>
            <div>
            <label>
                Compreende fundamentos básicos de quantidade e posição?
                <input
                    type="checkbox"
                    name="checkbox16"

                    checked={checkboxes.checkbox16}
                    onChange={handleCheckBoxChange}
                />
                <br />Ex: fino/grosso, cheio/vazio, dentro/fora
            </label> <br />
            <label>
                Reconhece números naturais?
                <input
                    type="checkbox"
                    name="checkbox17"

                    checked={checkboxes.checkbox17}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Reconhece números naturais até 
                <input type="number" name='recNum' onChange={onChange} value={form.recNum} />
            </label> <br />
            <label>
                Consegue escrever números naturais sequenciados até 
                <input type="number" name='escNum' onChange={onChange} value={form.escNum} />
            </label> <br />
            <label>
                Reconhece cores primarias e secundárias?
                <input
                    type="checkbox"
                    name="checkbox18"

                    checked={checkboxes.checkbox18}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Associa numeral e quantidade?
                <input
                    type="checkbox"
                    name="checkbox19"

                    checked={checkboxes.checkbox19}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Reconhece formas geométricas?
                <input
                    type="checkbox"
                    name="checkbox20"

                    checked={checkboxes.checkbox20}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Reconhece lateralidade?
                <input
                    type="checkbox"
                    name="checkbox21"

                    checked={checkboxes.checkbox21}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Possui noções de adição?
                <input
                    type="checkbox"
                    name="checkbox22"

                    checked={checkboxes.checkbox22}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Possui noções de subtração?
                <input
                    type="checkbox"
                    name="checkbox23"

                    checked={checkboxes.checkbox23}
                    onChange={handleCheckBoxChange}
                />
            </label> <br />
            <label>
                Resolve problemas de adição e subtração?
                <input
                    type="checkbox"
                    name="checkbox24"

                    checked={checkboxes.checkbox24}
                    onChange={handleCheckBoxChange}
                />
            </label> <br /> <br />
            </div>

    </main>
  )
};
