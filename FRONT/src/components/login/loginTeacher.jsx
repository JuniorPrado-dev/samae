import axios from "axios";
import { Body, Btn, Fieldset, Input, Label, Legend } from "./teacherStyled";
import React, {useState} from "react";

export function LoginP () {
    const [cpf_prof, setCpfProf]= useState ("");
    const [senha_prof, setSenhaProf]= useState ("");
    window.localStorage.setItem("token", "STRING");

    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log({cpf_prof, senha_prof});
            const data = {
                cpf: cpf_prof,
                senha: senha_prof
            }
            axios.post("http://localhost:3003/login-teacher", data).then(response => {
                console.log(response);
                window.localStorage.setItem("token", response.data.token);
            })
        };

    return (
        <Body>
            <Fieldset>
                <Legend>
                    Acessar conta
                </Legend>
                <form onSubmit={handleSubmit}>
                    <Label htmlFor="cpf" id="cpf" >CPF:</Label><br />
                    <Input type="number" name="cpf" placeholder="Digite seu CPF" value={cpf_prof} onChange={(e) => setCpfProf(e.target.value)}/><br />
                    <Label htmlFor="password" id="password">Senha:</Label><br />
                    <Input type="password" name="password" placeholder="Digite sua senha" value={senha_prof} onChange={(e) => setSenhaProf(e.target.value)}/><br />
                    <Btn type="submit">Entrar</Btn>
                </form>
            </Fieldset>
        </Body>
    )
};