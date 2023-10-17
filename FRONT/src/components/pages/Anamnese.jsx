import React, { useState } from 'react';
import { Search } from '../Search-bar/Search';

export const Anamnese = () => {
    const [results, setResults] = useState([]);
    return (
        <div>
            <Search setResults={setResults} />
            <ul>
                {results.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};