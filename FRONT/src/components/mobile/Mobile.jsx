import { Button, H1, ImgFooter, LogoSamae, Main, Nav, P, Redirect } from "./styled";
import Logo from '../../img/samae_logo.png';
import Wave from '../../img/wave.png';
import { LogProfessor } from "./logTeacher";
import { LogResponsavel } from "./logParent";

export function InicioMobile() {

    function OnclickTeacher() {
        const logTeacher = document.querySelector('#teacher')
        const welcome = document.querySelector('#welcome')
        const wave = document.querySelector('#wave')
    
        logTeacher.style.display = "flex"
        welcome.style.display = "none"
        wave.style.display = "none"
    }
    function OnclickParent() {
        const logParent = document.querySelector('#parent')
        const welcome = document.querySelector('#welcome')
        const wave = document.querySelector('#wave')
    
        logParent.style.display = "flex"
        welcome.style.display = "none"
        wave.style.display = "none"
    }

    return (

        <Main>
            <div id="welcome">
            <LogoSamae src={Logo} />
            <H1>Bem-vindo(a) a SAMAE!</H1>
            <P>Para prosseguir, selecione o tipo de monitoramento a ser realizado.</P>
            <P>Deseja continuar como:</P>
            <Nav>
                    <Button onClick={OnclickTeacher}>
                        Professor(a)
                    </Button>

                    <Button onClick={OnclickParent}>
                        Responsável
                    </Button>
            </Nav>
            </div>
            <Redirect id="teacher">
                <LogProfessor/>
            </Redirect>
            <Redirect id="parent">
                <LogResponsavel/>
            </Redirect>
            <ImgFooter src={Wave} id="wave"/>

        </Main>
    )
}