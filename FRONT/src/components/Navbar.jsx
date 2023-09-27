import React from 'react';
import { Link } from 'react-router-dom';
import './styled';
import { Nav, Img, Home, Triagem, Student, Anamnese, Agenda, ButtonHide, Line } from './styled'

function Onclick () {
    const nav = document.querySelector('#nav');
    const buttonHide = document.querySelector('#hide');
    
    if (nav.style.display === 'block') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'block'
    }
    
    buttonHide.style.background = 'linear-gradient(to bottom, #2b3467, #1D5D9B)'
}

function OnMouseOut() {
    const buttonHide = document.querySelector('#hide');
    
    buttonHide.style.background = '#1D5D9B'
}

function OnMouseEnter() {
    const buttonHide = document.querySelector('#hide');
    
    buttonHide.style.background = 'linear-gradient(to top, #2b3467, #1D5D9B)'
}

export const Navbar = () => {
    return (
        <>
            <Nav id='nav'>
                <ul>
                <Home>
                    <Img src="../../../img/home.png"/>
                    <Link to="/">Inicio</Link><br />
                </Home>
                <Agenda>
                    <Img src="../../../img/calendario.png"/>
                    <Link to="/agenda">Agenda</Link><br />
                </Agenda>
                <Triagem>
                    <Img src="../../../img/triagem.png"/>
                    <Link to="/triagem">Triagem</Link><br />
                </Triagem>
                <Student>
                    <Img id='alunos' src="../../../img/alunos.png"/>
                    <Link to="/alunos">Alunos</Link><br />
                </Student>
                <Anamnese>
                    <Img src="../../../img/anamnese.png"/>
                    <Link to="/anamnese">Anamnese</Link><br />
                </Anamnese>
                </ul>
            </Nav>

            <ButtonHide id='hide' onClick={Onclick} onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}>
                <Line onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}></Line>
                <Line onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}></Line>
                <Line onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}></Line>
            </ButtonHide>
        </>
    )
}
