import { Container, Teacher, Main, P, PanelLeft, PanelRight, Parent, Top, Bottom, BntReturn, ImgReturn, BntBlue, H1 } from "./styledInicio";
import Return from '../../img/return.png';
import ReturnBlue from '../../img/returnBlue.png';
import { LoginResponsavel } from "../login/loginParent";
import { LoginProfessor } from "../login/loginTeacher";

function OnclickTeacher() {
    const logTeacher = document.querySelector('#topTeacher')
    const bottomTeacher = document.querySelector('#bottomTeacher')

    logTeacher.style.top = "-60%"
    bottomTeacher.style.top = "-20%"
}

function OnclickParent() {
    const logParent = document.querySelector('#topParent')
    const bottomParent = document.querySelector('#bottomParent')

    logParent.style.top = "-60%"
    bottomParent.style.top = "-20%"
}

function OnClickReturnParent() {
    const top = document.querySelector('#topParent')
    const bottom = document.querySelector('#bottomParent')

    top.style.top = "35%"
    bottom.style.top = "60%"
}

function OnClickReturnTeacher() {
    const top = document.querySelector('#topTeacher')
    const bottom = document.querySelector('#bottomTeacher')

    top.style.top = "35%"
    bottom.style.top = "60%"
}

export function TelaInicial() {

    return (
        <Main>
            <Container className="container" id="container">
                        <PanelLeft className="overlay-left">
                            <Top id="topTeacher">
                            <H1>Olá, professor(a)!</H1>
                            <P>Clique no botão abaixo para entrar na sua conta</P>
                            <Teacher className="ghost" id="signIn" onClick={OnclickTeacher}>Professor</Teacher>
                            </Top>
                            <Bottom id="bottomTeacher">
                                <LoginProfessor/>
                                <BntBlue onClick={OnClickReturnTeacher}>
                                    <ImgReturn src={ReturnBlue}/>
                                </BntBlue>
                            </Bottom>
                        </PanelLeft>
                        <PanelRight className="overlay-right">
                            <Top id="topParent">
                            <H1>Olá, responsável!</H1>
                            <P>Clique no botão abaixo para entrar na sua conta</P>
                            <Parent className="ghost" id="signUp" onClick={OnclickParent}>Responsáveis</Parent>
                            </Top>
                            <Bottom id="bottomParent">
                                <LoginResponsavel/>
                                <BntReturn onClick={OnClickReturnParent}>
                                    <ImgReturn src={Return}/>
                                </BntReturn>
                            </Bottom>
                        </PanelRight>
            </Container>

        </Main>
    )
}