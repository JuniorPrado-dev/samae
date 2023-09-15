import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Onclick } from './Onclick';

export const Navbar = () => {
    return (
        <>
            <nav id='nav'>
                <button className='nav'>
                    <img className='iconNav' src="../../../img/samae_logo.png"/>
                    <Link to="/">SAMAE</Link><br />
                </button>
                <button className='nav'>
                    <img className='iconNav' src="../../../img/agenda.png"/>
                    <Link to="/agenda">Agenda</Link><br />
                </button>
                <button className='nav'>
                    <img className='iconNav' src="../../../img/triagem.png"/>
                    <Link to="/triagem">Triagem</Link><br />
                </button>
                <button className='nav'>
                    <img id='alunos' className='iconNav' src="../../../img/alunos.png"/>
                    <Link to="/alunos">Alunos</Link><br />
                </button>
                <button className='nav'>
                    <img className='iconNav' src="../../../img/anamnese.png"/>
                    <Link to="/anamnese">Anamnese</Link><br />
                </button>
            </nav>
            <button id='hide' onClick={Onclick}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </button>
        </>
    )
}
