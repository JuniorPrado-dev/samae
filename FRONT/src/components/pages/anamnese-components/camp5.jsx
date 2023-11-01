import React from 'react';
import { Check } from '../styled';

export const AspectosEmocionais = ({ checkboxes, handleCheckBoxChange }) => {
    return (
        <main>
            <h2>
                5. Aspectos Emocionais
            </h2>
            <div>
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox1"
                        checked={checkboxes.checkbox1}
                        onChange={handleCheckBoxChange}
                    />
                    Tranquilo
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox2"
                        checked={checkboxes.checkbox2}
                        onChange={handleCheckBoxChange}
                    />
                    Ansioso
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox3"
                        checked={checkboxes.checkbox3}
                        onChange={handleCheckBoxChange}
                    />
                    Segura
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox4"
                        checked={checkboxes.checkbox4}
                        onChange={handleCheckBoxChange}
                    />
                    Alegre
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox5"
                        checked={checkboxes.checkbox5}
                        onChange={handleCheckBoxChange}
                    />
                    Queixoso
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox6"
                        checked={checkboxes.checkbox6}
                        onChange={handleCheckBoxChange}
                    />
                    Intolerante
                </label><br />
            </div><br />
        </main>
    )
};
