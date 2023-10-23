
import { Body, Container, FormAndUp, FormAndIn, Button, Ghost, Form, A, Input, P, Span, OverlayContainer, PanelLeft, PanelRight } from "./styledInicio";

export function TelaInicial() {

    return (
        <Body>
            <Container class="container" id="container">
                <FormAndUp class="form-container sign-up-container">
                    <Form action="#">
                        <h1>Pais e/ou Responsável</h1>
                        <div class="social-container"></div>                       
                        <Span>entre na sua conta</Span>
                        <Input type="email" placeholder="Email ou CPF" />
                        <Input type="password" placeholder="Senha" />
                        <Button>Entrar</Button>
                    </Form>
                </FormAndUp>
                <FormAndIn class="form-container sign-in-container">
                    <Form action="#">
                        <h1>Professor</h1>
                        <div class="social-container"></div>
                        <Span>entre na sua conta</Span>
                        <Input type="email" placeholder="Email ou CPF" />
                        <Input type="password" placeholder="Senha" />
                        <A href="#">Esqueceu a senha?</A>
                        <Button>Entrar</Button>
                    </Form>
                </FormAndIn>
                <OverlayContainer class="overlay-container">
                    <div class="overlay">
                        <PanelLeft class="overlay-panel overlay-left">
                            <h1>Olá, professor(a)!</h1>
                            <P>Clique no botão abaixo para entrar na sua conta</P>
                            <Ghost class="ghost" id="signIn">Professor</Ghost>
                        </PanelLeft>
                        <PanelRight class="overlay-panel overlay-right">
                            <h1>Olá, Pais e/ou Responsáveis!</h1>
                            <P>Clique no botão abaixo para entrar na sua conta</P>
                            <Ghost class="ghost" id="signUp">Resposáveis</Ghost>
                        </PanelRight>
                    </div>
                </OverlayContainer>
            </Container>

        </Body>
    )
}