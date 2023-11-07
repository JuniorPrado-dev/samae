import { Container, Teacher, Main, P, PanelLeft, PanelRight, Parent, Top, Bottom, BntReturn, ImgReturn, BntBlue } from "./styledInicio";
import Return from '../../img/return.png';
import ReturnBlue from '../../img/returnBlue.png';

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
            <Container class="container" id="container">
                    <div class="overlay">
                        <PanelLeft className="overlay-left">
                            <Top id="topTeacher">
                            <h1>Olá, professor(a)!</h1>
                            <P>Clique no botão abaixo para entrar na sua conta</P>
                            <Teacher className="ghost" id="signIn" onClick={OnclickTeacher}>Professor</Teacher>
                            </Top>
                            <Bottom id="bottomTeacher">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa ea voluptatibus sapiente, nulla veritatis provident nisi impedit, exercitationem laboriosam a modi amet excepturi. Repellendus rerum voluptate assumenda nihil amet.</p>
                                <BntBlue onClick={OnClickReturnTeacher}>
                                    <ImgReturn src={ReturnBlue}/>
                                </BntBlue>
                            </Bottom>
                        </PanelLeft>
                        <PanelRight className="overlay-right">
                            <Top id="topParent">
                            <h1>Olá, responsável!</h1>
                            <P>Clique no botão abaixo para entrar na sua conta</P>
                            <Parent className="ghost" id="signUp" onClick={OnclickParent}>Responsáveis</Parent>
                            </Top>
                            <Bottom id="bottomParent">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloremque, pariatur sit ipsa praesentium eos cupiditate molestiae soluta necessitatibus deleniti beatae quibusdam quisquam, perspiciatis quos ab tempora libero iste in.</p>
                                <BntReturn onClick={OnClickReturnParent}>
                                    <ImgReturn src={Return}/>
                                </BntReturn>
                            </Bottom>
                        </PanelRight>
                    </div>
            </Container>

        </Main>
    )
}