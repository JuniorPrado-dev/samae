import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to = "/">SAMAE</Link>
                </li>
                <li>
                    <Link to = "/agenda">Agenda</Link>
                </li>
                <li>
                    <Link to = "/triagem">Triagem</Link>
                </li>
                <li>
                    <Link to = "/alunos">Alunos</Link>
                </li>
                <li>
                    <Link to = "/anamnese">Anamnese</Link>
                </li>
            </ul>
        </nav>
    )
}
