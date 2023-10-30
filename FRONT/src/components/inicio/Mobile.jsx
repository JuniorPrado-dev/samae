import { CardWelcome, Content, Main, Card } from "./styledMobile";

function Onclick() {
    const welcome = document.querySelector('#welcome')
    const card = document.querySelector('#card')

    welcome.style.display = "none"
    welcome.style.transition = "1s"
    card.style.display = "block"
    card.style.transition = "1s"
}

function ToTeacher(params) {
    <p>Para professor</p>
}

function ToParent(params) {
    <p>Para pais</p>
}

export function InicioMobile() {
    
    return(
        <Main>
            <Content>
                <CardWelcome id="welcome">
                    <p>ola</p>
                    <button onClick={Onclick}>btn</button>
                </CardWelcome>
                <Card id="card">
                    <p>ola</p>
                </Card>
            </Content>
        </Main>
    )
}