import React from 'react';

export const Disciplinação = () => {
  return (
    <main>
        <h2>
                9. Disciplinação
        </h2>
        <div>
            <label>
                Como os pais costumam disciplinar os filhos?
            <input type="text" name='q28' onChange={onChange} value={form.q28} />
            </label>
            <label>
                Como o aluno reage quando é contrariado?
            <input type="text" name='q29' onChange={onChange} value={form.q29} />
            </label>
            <label>
                Qual a atitude dos pais?
            <input type="text" name='q30' onChange={onChange} value={form.q30} />
            </label>
        </div>
    </main>
  )
};
