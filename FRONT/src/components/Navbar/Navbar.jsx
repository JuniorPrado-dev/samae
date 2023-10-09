import React from 'react';
import { Link } from 'react-router-dom';
import './styled';
import { Nav, Img, Home, Triagem, Student, Anamnese, Agenda } from './styled'


export const Navbar = () => {
    return (
        <>
            <Nav id='nav'>

                <Link to="/">
                    <Home>
                        <Img src="../../../img/home.png" />
                        Início
                    </Home>
                </Link>
                <Link to="/agenda">
                    <Agenda>
                        <Img src="../../../img/calendario.png" />
                        Agenda
                    </Agenda>
                </Link>
                <Link to="/triagem">
                    <Triagem >
                        <Img src="../../../img/triagem.png" />
                        Triagem
                    </Triagem>
                </Link>
                <Link to="/alunos">
                    <Student>
                        <Img src="../../../img/alunos.png" />
                        Alunos
                    </Student>
                </Link>
                <Link to="/anamnese">
                    <Anamnese>
                        <Img src="../../../img/anamnese.png" />
                        Anamnese
                    </Anamnese>
                </Link>

            </Nav><br/>


        </>
    )
}

