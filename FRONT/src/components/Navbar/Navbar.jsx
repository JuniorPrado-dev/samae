import React from 'react';
import { Link } from 'react-router-dom';
import './styled';
import { Nav, Img, Home, Triagem, Student, Anamnese, Agenda } from './styled'
import Inicio from '../../img/home.png';
import Calendario from '../../img/calendario.png';
import Triage from '../../img/triagem.png';
import Alunos from '../../img/alunos.png';
import Anm from '../../img/anamnese.png';

export const Navbar = () => {
    return (
        <>
            <Nav id='nav'>

                <Link to="/">
                    <Home>
                        <Img src={Inicio} />
                        Início
                    </Home>
                </Link>
                <Link to="/agenda">
                    <Agenda>
                        <Img src={Calendario}/>
                        Agenda
                    </Agenda>
                </Link>
                <Link to="/triagem">
                    <Triagem >
                        <Img src={Triage} />
                        Triagem
                    </Triagem>
                </Link>
                <Link to="/alunos">
                    <Student>
                        <Img src={Alunos} />
                        Alunos
                    </Student>
                </Link>
                <Link to="/anamnese">
                    <Anamnese>
                        <Img src={Anm}/>
                        Anamnese
                    </Anamnese>
                </Link>

            </Nav><br/>


        </>
    )
}

