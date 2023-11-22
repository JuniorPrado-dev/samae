import React from 'react';
import { Check, Data, Margin } from '../styled';

export const AtitudesSocias = ({ form, onChange, checkboxes, handleCheckBoxChange }) => {
    return (
        <main>
            <Margin>
            <h2>
                7. Atitudes sociais predominantes
            </h2>
            <div>
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox7"
                        checked={checkboxes.checkbox7}
                        onChange={handleCheckBoxChange}
                    />
                    Obediente
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox8"
                        checked={checkboxes.checkbox8}
                        onChange={handleCheckBoxChange}
                    />
                    Independente
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox9"
                        checked={checkboxes.checkbox9}
                        onChange={handleCheckBoxChange}
                    />
                    Comunicativo
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox10"
                        checked={checkboxes.checkbox10}
                        onChange={handleCheckBoxChange}
                    />
                    Agressivo
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox11"
                        checked={checkboxes.checkbox11}
                        onChange={handleCheckBoxChange}
                    />
                    Coperador
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox12"
                        checked={checkboxes.checkbox12}
                        onChange={handleCheckBoxChange}
                    />
                    Outra
                </label>
                {checkboxes.checkbox12 === true && (
                    <div>
                        <label>
                            <Data type="text" name='q27' onChange={onChange} value={form.q27} />
                        </label><br />
                    </div>
                )}

            </div><br />
            </Margin>
        </main>
    )
};