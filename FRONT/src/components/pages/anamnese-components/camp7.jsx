import React from 'react';

export const AtitudesSocias = () => {
  return (
    <main>
        <h2>
                7. Atitudes socias predominantes
        </h2>
        <div>
            <label>
                Obediente
                <input
                    type="checkbox"
                    name="checkbox7"
                    checked={checkboxes.checkbox7}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Independente
                <input
                    type="checkbox"
                    name="checkbox8"
                    checked={checkboxes.checkbox8}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Comunicativo
                <input
                    type="checkbox"
                    name="checkbox9"
                    checked={checkboxes.checkbox9}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Agressivo
                <input
                    type="checkbox"
                    name="checkbox10"
                    checked={checkboxes.checkbox10}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Coperador
                <input
                    type="checkbox"
                    name="checkbox11"
                    checked={checkboxes.checkbox11}
                    onChange={handleCheckBoxChange}
                />
            </label><br />
            <label>
                Outra
                <input
                    type="checkbox"
                    name="checkbox12"
                    checked={checkboxes.checkbox12}
                    onChange={handleCheckBoxChange}
                />
            </label>
            <label>    
            <input type="text" name='q27' onChange={onChange} value={form.q27} />
            </label><br />
        </div>
    </main>
  )
};
