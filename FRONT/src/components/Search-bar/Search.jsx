import React from 'react';
import { useState } from 'react';
import { Barra, CardPesquisa, Lupa } from './styled';
import Pesquisar from '../../img/search.png';

export const Search = ({ setResults }) => {
    const [input, setInput] = useState("");

    function fetchData(value) {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro');
                }
                return response.json();
            })
            .then(json => {
                const results = json.filter((user) => {
                    return (
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    )
                })
                setResults(results);
            });
    }

    function handleChange(value) {
        setInput(value)
        fetchData(value)
    }

    return (
        <>
            <CardPesquisa>
                <Barra
                    placeholder='Digite o nome do aluno...'
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <Lupa src={Pesquisar} />
            </CardPesquisa>
        </>
    )
};
