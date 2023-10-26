import { Container, Teacher, Main, P, PanelLeft, PanelRight, Parent, Top, Bottom, BntReturn, ImgReturn } from "./styledInicio";
import './styled.css'
import Return from '../../img/return.png';

function OnclickParent(){
    const logTeacher = document.querySelector('#topParent')
    const bottomParent = document.querySelector('#bottomParent')

    logTeacher.style.top = "-60%"
    bottomParent.style.top = "-20%"
}

function OnClickReturn() {
    const top = document.querySelector('#topParent')
    const bottom = document.querySelector('#bottomParent')

    top.style.top = "35%"
    bottom.style.top = "60%"
}

export function TelaInicial() {

    return (
        <Main>
            <Container class="container" id="container">
                    <div class="overlay">
                        <PanelLeft className="overlay-left">
                            <h1>Olá, professor(a)!</h1>
                            <P>Clique no botão abaixo para entrar na sua conta</P>
                            <Teacher className="ghost" id="signIn">Professor</Teacher>
                        </PanelLeft>
                        <PanelRight className="overlay-right">
                            <Top id="topParent">
                            <h1>Olá, responsável!</h1>
                            <P>Clique no botão abaixo para entrar na sua conta</P>
                            <Parent className="ghost" id="signUp" onClick={OnclickParent}>Responsáveis</Parent>
                            </Top>
                            <Bottom id="bottomParent">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloremque, pariatur sit ipsa praesentium eos cupiditate molestiae soluta necessitatibus deleniti beatae quibusdam quisquam, perspiciatis quos ab tempora libero iste in.</p>
                                <BntReturn onClick={OnClickReturn}>
                                    <ImgReturn src={Return}/>
                                </BntReturn>
                            </Bottom>
                        </PanelRight>
                    </div>
            </Container>

        </Main>
    )
}