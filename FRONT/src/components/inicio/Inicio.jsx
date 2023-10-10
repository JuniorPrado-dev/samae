
import { Btns, Professor, Responsavel, Top } from "./styledInicio";

export function TelaInicial() {
    
    return(
        <body>
            <header>
                <Top>
                    <Btns>
                        <Professor>Professor</Professor>
                        <Responsavel>Responsável</Responsavel>
                    </Btns>
                </Top>
            </header>
        </body>
    )
}