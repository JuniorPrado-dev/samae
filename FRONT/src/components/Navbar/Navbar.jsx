import React from 'react';
import { Link } from 'react-router-dom';
import './styled';
import { Nav, Img, Home, Triagem, Student, Anamnese, Agenda } from './styled'


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

           
        </>
    )
}

