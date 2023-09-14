import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react'

export const Navbar = () => {
    const html = <nav id='nav'>
        <button className='nav'>
            <Link to="/">SAMAE</Link><br />
        </button>
        <button className='nav'>
            <Link to="/agenda">Agenda</Link><br />
        </button>
        <button className='nav'>
            <Link to="/triagem">Triagem</Link><br />
        </button>
        <button className='nav'>
            <Link to="/alunos">Alunos</Link><br />
        </button>
        <button className='nav'>
            <Link to="/anamnese">Anamnese</Link><br />
        </button>
    </nav>
    const [showElement, setShowElement] = useState(true)
    const showOrHide = () => setShowElement(false)

    return (
        <>
            <button id='hide' onClick={showOrHide}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </button>
            {showElement ? html : null}
        </>
    )
}
