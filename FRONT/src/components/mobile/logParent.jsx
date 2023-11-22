import { Back, ImgBack, MainLogin, P } from "./styled";
import Anterior from '../../img/back.png'
import {  LoginResponsavel } from "../login/loginParent";

export function LogResponsavel() {
    function Voltar() {
        const logParent = document.querySelector('#parent')
        const welcome = document.querySelector('#welcome')

        logParent.style.display = "none"
        welcome.style.display = "block"
    }

    return (
        <MainLogin>
            <div id="parent">
                <LoginResponsavel/>
                <Back onClick={Voltar}>
                    <ImgBack src={Anterior}/>

                </Back>
            </div>
        </MainLogin>
    )

}

