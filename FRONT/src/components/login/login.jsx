import './styled'
import { DivLogin, P, Button, Buttons, Logo } from './styled'

export function Login() {
    return (
        <>
            <DivLogin>
                <Logo src="../../../img/logo_fundo_transparente.png" alt="Logo SAMAE" />
                    <P>Selecione o tipo de monitoramento:</P>
                <Buttons className="buttons">
                    <Button>Professor</Button>
                    <Button>Responsável</Button>
                </Buttons>
            </DivLogin>
        </>
    )
}