import React from 'react';

export const AspectosEmocionais = ({checkboxes, handleCheckBoxChange}) => {
  return (
    <main>
        <h2>
                5. Aspectos Emocionais
        </h2>
        <div>
            <label>
                Tranquilo
                <input
                    type="checkbox"
                    name="checkbox1"
                    checked={checkboxes.checkbox1}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Ansioso
                <input
                    type="checkbox"
                    name="checkbox2"
                    checked={checkboxes.checkbox2}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Segura
                <input
                    type="checkbox"
                    name="checkbox3"
                    checked={checkboxes.checkbox3}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Alegre
                <input
                    type="checkbox"
                    name="checkbox4"
                    checked={checkboxes.checkbox4}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Queixoso
                <input
                    type="checkbox"
                    name="checkbox5"
                    checked={checkboxes.checkbox5}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Intolerante
                <input
                    type="checkbox"
                    name="checkbox6"
                    checked={checkboxes.checkbox6}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
        </div>
    </main>
  )
};
