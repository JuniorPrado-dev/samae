import { Container, Teacher, Main, P, PanelLeft, PanelRight, Parent } from "./styledInicio";
import './styled.css'

export function TelaInicial() {

    return (
        <Main>
            <Container class="container" id="container">
                    <div class="overlay">
                        <PanelLeft class="overlay-panel overlay-left">
                            <h1>Olá, professor(a)!</h1>
                            <P>Clique no botão abaixo para entrar na sua conta</P>
                            <Teacher class="ghost" id="signIn">Professor</Teacher>
                        </PanelLeft>
                        <PanelRight class="overlay-panel overlay-right">
                            <h1>Olá, Pais e/ou Responsáveis!</h1>
                            <P>Clique no botão abaixo para entrar na sua conta</P>
                            <Parent class="ghost" id="signUp" >Responsáveis</Parent>
                        </PanelRight>
                    </div>
            </Container>

        </Main>
    )
}