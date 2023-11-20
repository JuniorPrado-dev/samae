import { Back, ImgBack, MainLogin } from "./styled";
import Anterior from '../../img/back.png'
import {  LoginProfessor } from "../login/loginTeacher";

export function LogProfessor() {

    function Voltar() {
        const logTeacher = document.querySelector('#teacher')
        const welcome = document.querySelector('#welcome')
    
        logTeacher.style.display = "none"
        welcome.style.display = "block"
    }

    return (
        <MainLogin>
            <div id="teacher">
            <LoginProfessor/>
                <Back onClick={Voltar}>
                    <ImgBack src={Anterior}/>
                </Back>
            </div>
        </MainLogin>
    )
}