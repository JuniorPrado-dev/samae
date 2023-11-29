import { Btn, Input, Label } from "./parentStyled";

export function LoginResponsavel() {

    return (
        <form>
            <Label htmlFor="cpf" id="cpf">CPF:</Label><br />
            <Input type="number" name="cpf" placeholder="Digite seu CPF" /><br />
            <Label htmlFor="password" id="password">Senha:</Label><br />
            <Input type="password" name="password" placeholder="Digite sua senha" /><br />
            <Btn type="button">Entrar</Btn>
        </form>
    )
}