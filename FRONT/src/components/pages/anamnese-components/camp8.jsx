import React from 'react';
import { Check } from '../styled';

export const Sono = ({ checkboxes, handleCheckBoxChange }) => {
    return (
        <main>
            <h2>
                8. Sono
            </h2>
            <div>
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox13"
                        checked={checkboxes.checkbox13}
                        onChange={handleCheckBoxChange}
                    />
                    Insônia
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox14"
                        checked={checkboxes.checkbox14}
                        onChange={handleCheckBoxChange}
                    />
                    Pesadelos
                </label><br />
                <label>
                    <Check
                        type="checkbox"
                        name="checkbox15"
                        checked={checkboxes.checkbox15}
                        onChange={handleCheckBoxChange}
                    />
                    Hipersonia
                </label><br />
            </div><br />
        </main>
    )
};