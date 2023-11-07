import { Back, MainLogin, P } from "./styled";

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
            <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero voluptate illum, perspiciatis repudiandae accusamus sunt mollitia error voluptatum ad libero et esse sapiente beatae quam, tempore fugit sed quia.
            </P>
                <Back onClick={Voltar}>
                    Voltar
                </Back>
                </div>    
        </MainLogin>
    )
}