import { Back, ImgBack, MainLogin, P } from "./styled";
import Anterior from '../../img/back.png'

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
                <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat dolorem, ipsa laboriosam libero perspiciatis perferendis delectus ipsam, laborum in, praesentium facilis officia optio nulla ut commodi voluptatum adipisci corrupti.
                </P>
                <Back onClick={Voltar}>
                    <ImgBack src={Anterior}/>
                    <p>Voltar</p>
                </Back>
            </div>
        </MainLogin>
    )

}

