import React from 'react';

export const Sono = () => {
  return (
    <main>
        <h2>
                8. Sono
        </h2>
        <div>
            <label>
                Insônia
                <input
                    type="checkbox"
                    name="checkbox13"
                    checked={checkboxes.checkbox13}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Pesadelos
                <input
                    type="checkbox"
                    name="checkbox14"
                    checked={checkboxes.checkbox14}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Hipersonia
                <input
                    type="checkbox"
                    name="checkbox15"
                    checked={checkboxes.checkbox15}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
        </div>
    </main>
  )
};
