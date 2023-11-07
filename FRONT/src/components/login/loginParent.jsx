import axios from "axios";
import { Body, Btn, Fieldset, Input, Label, Legend } from "./parentStyled";
import React, {useState} from "react";

export function LoginResponsavel()  {
    const [cpf_resp, setCpfResp]= useState ("");
    const [senha_resp, setSenhaResp]= useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({cpf_resp, senha_resp});
        axios.post("", body).then(response => {
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
                    <Input type="number" name="cpf" placeholder="Digite seu CPF" maxLength="11" value={cpf_resp} onChange={(e) => setCpfResp(e.target.value)}/><br />
                    <Label htmlFor="password" id="password">Senha:</Label><br />
                    <Input type="password" name="password" placeholder="Digite sua senha" value={senha_resp} onChange={(e) => setSenhaResp(e.target.value)}/><br />
                    <Btn type="submit">Entrar</Btn>
                </form>
            </Fieldset>
        </Body>
    )
    }