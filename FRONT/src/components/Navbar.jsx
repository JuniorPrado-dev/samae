import React from 'react';
import { Link } from 'react-router-dom';
import './styled';
import { Nav, Img, ButtonNav, ButtonHide, Line } from './styled'

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
                <ButtonNav>
                    <Img src="../../../img/samae_logo.png"/>
                    <Link to="/">SAMAE</Link><br />
                </ButtonNav>
                <ButtonNav>
                    <Img src="../../../img/agenda.png"/>
                    <Link to="/agenda">Agenda</Link><br />
                </ButtonNav>
                <ButtonNav>
                    <Img src="../../../img/triagem.png"/>
                    <Link to="/triagem">Triagem</Link><br />
                </ButtonNav>
                <ButtonNav>
                    <Img id='alunos' src="../../../img/alunos.png"/>
                    <Link to="/alunos">Alunos</Link><br />
                </ButtonNav>
                <ButtonNav>
                    <Img src="../../../img/anamnese.png"/>
                    <Link to="/anamnese">Anamnese</Link><br />
                </ButtonNav>
            </Nav>

            <ButtonHide id='hide' onClick={Onclick} onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}>
                <Line onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}></Line>
                <Line onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}></Line>
                <Line onMouseEnter={OnMouseEnter} onMouseOut={OnMouseOut}></Line>
            </ButtonHide>
        </>
    )
}
