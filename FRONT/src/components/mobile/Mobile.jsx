import { Button, H1, LogoSamae, Main, P } from "./styled";
import Logo from '../../img/samae_logo.png';
import { LogProfessor } from "./logTeacher";
import { LogResponsavel } from "./logParent";
import { Link, Route, Routes } from "react-router-dom";

export function InicioMobile() {

    return (

        <Main>

            <LogoSamae src={Logo} />
            <H1>Bem-vindo(a) a SAMAE!</H1>
            <P>Para prosseguir, selecione o tipo de monitoramento a ser realizado.</P>
            <P>Deseja continuar como:</P>
            <nav>
                <Link to="/login_professor">
                    <Button>
                        Professor
                    </Button>
                </Link>
                <Link to="/login_responsavel">
                    <Button>
                        Responsável
                    </Button>
                </Link>
            </nav>
            <Routes>
                <Route path="/login_professor" element={<LogProfessor />} />
                <Route path="/login_responsavel" element={<LogResponsavel />} />
            </Routes>
        </Main>
    )
}