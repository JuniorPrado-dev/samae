import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import axios from "axios";
import { Cabecalho } from './triagem-components/cabecalho';
import { LeituraEscrita } from './triagem-components/leitura-escrita';
import { Matematica } from './triagem-components/matematica';
import { Hc } from './triagem-components/hc';
import { MainTriagem, Anterior, Cards, ImgCard, Proximo, Enviar, DivButton } from './styled';
import { v4 as uuidv4 } from 'uuid';

export const Triagem = () => {

    /*const item = new Date().toISOString()
    const date = `${newItem1.slice(8,10)}/${newItem1.slice(5,7)}/${newItem1.slice(0,4)}`
    */

    //atribui um valor inicial e monitora as checkbox
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
        checkbox9: false,
        checkbox10: false,
        checkbox11: false,
        checkbox12: false,
        checkbox13: false,
        checkbox14: false,
        checkbox15: false,
        checkbox16: false,
        checkbox17: false,
        checkbox18: false,
        checkbox19: false,
        checkbox20: false,
        checkbox21: false,
        checkbox22: false,
        checkbox23: false,
        checkbox24: false,
        checkbox25: false,
        checkbox26: false,
        checkbox27: false,
        checkbox28: false,
        checkbox29: false,
        checkbox30: false,
        checkbox31: false,
        checkbox32: false,
        checkbox33: false,
        checkbox34: false,
        checkbox35: false,
        checkbox36: false,
        checkbox37: false,
        checkbox38: false,
        checkbox39: false,
    });

    //armazena um array de valores das checkbox
    const handleCheckBoxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({
            ...checkboxes,
            [name]: checked,
        });
    };

    //armazenando no back elementos de texto e numero
    const [form, onChange, resetState] = useForm({
        nome: '',
        data: '',
        professor: '',
        psicopedagogo: '',
        recNum: '',
        escNum: ''
    })

    const [watcher, setWatcher] = useState('')

    //ajuda a marcar somente um radio
    const alter = (e) => {
        setWatcher(e.target.value)
    }

    //chama e organiza tudo para mandar para a api
    function send(e) {
        e.preventDefault()
        const randomId = uuidv4();
        const aluno = {

            idTriagem: randomId,
            idAluno: form.nome,
            dataTriagem: form.data,
            idProfessor: form.professor,
            psicopedagogo: form.psicopedagogo,

            n1_n1: checkboxes.checkbox1.toString(),
            n1_n2: checkboxes.checkbox2.toString(),
            n1_n3: checkboxes.checkbox3.toString(),

            n2_n1: checkboxes.checkbox4.toString(),
            n2_n2: checkboxes.checkbox5.toString(),
            n2_n3: checkboxes.checkbox6.toString(),
            n2_n4: checkboxes.checkbox7.toString(),

            n3_n1: checkboxes.checkbox8.toString(),
            n3_n2: checkboxes.checkbox9.toString(),
            n3_n3: checkboxes.checkbox10.toString(),

            n4_n1: checkboxes.checkbox11.toString(),
            n4_n2: checkboxes.checkbox12.toString(),
            n4_n3: checkboxes.checkbox13.toString(),
            n4_n4: checkboxes.checkbox14.toString(),
            n4_n5: checkboxes.checkbox15.toString(),
            n4_n6: watcher,

            mt_n1: checkboxes.checkbox16.toString(),
            mt_n2: checkboxes.checkbox17.toString(),
            mt_n3: form.recNum,
            mt_n4: form.escNum,
            mt_n5: checkboxes.checkbox18.toString(),
            mt_n6: checkboxes.checkbox19.toString(),
            mt_n7: checkboxes.checkbox20.toString(),
            mt_n8: checkboxes.checkbox21.toString(),
            mt_n9: checkboxes.checkbox22.toString(),
            mt_n10: checkboxes.checkbox23.toString(),
            mt_n11: checkboxes.checkbox24.toString(),

            hc_n1: checkboxes.checkbox25.toString(),
            hc_n2: checkboxes.checkbox26.toString(),
            hc_n3: checkboxes.checkbox27.toString(),
            hc_n4: checkboxes.checkbox28.toString(),
            hc_n5: checkboxes.checkbox29.toString(),
            hc_n6: checkboxes.checkbox30.toString(),
            hc_n7: checkboxes.checkbox31.toString(),
            hc_n8: checkboxes.checkbox32.toString(),
            hc_n9: checkboxes.checkbox33.toString(),
            hc_n10: checkboxes.checkbox34.toString(),
            hc_n11: checkboxes.checkbox35.toString(),
            hc_n12: checkboxes.checkbox36.toString(),
            hc_n13: checkboxes.checkbox37.toString(),
            hc_n14: checkboxes.checkbox38.toString(),
            hc_n15: checkboxes.checkbox39.toString(),
        }
    
        //conecta api e front
        axios.post('http://localhost:3003/triagem-student', aluno)
            .then(function (response) {
                console.log(response);
                alert(response.data);
            })
            .catch(function (error) {
                console.log(error);
            }); 
    }

    //cards
    const cards = [
        <Cabecalho
            form={form}
            onChange={onChange}
        />,
        <LeituraEscrita
            checkboxes={checkboxes}
            handleCheckBoxChange={handleCheckBoxChange}
            alter={alter}
        />,
        <Matematica
            checkboxes={checkboxes}
            handleCheckBoxChange={handleCheckBoxChange}
            onChange={onChange}
            form={form}
        />,
        <Hc
            checkboxes={checkboxes}
            handleCheckBoxChange={handleCheckBoxChange}
        />,

        //card de revisão e enviar
        <div>
            <Cabecalho
                form={form}
                onChange={onChange}
            />
            <LeituraEscrita
                checkboxes={checkboxes}
                handleCheckBoxChange={handleCheckBoxChange}
                alter={alter}
            />
            <Matematica
                checkboxes={checkboxes}
                handleCheckBoxChange={handleCheckBoxChange}
                onChange={onChange}
                form={form}
            />
            <Hc
                checkboxes={checkboxes}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <DivButton>
                <Enviar type="submit">Enviar</Enviar>
            </DivButton>
        </div>
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNextCard = () => {
        if (currentCardIndex < cards.length - 1) {
            setCurrentCardIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevCard = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex((prevIndex) => prevIndex - 1);
        }
    };

    const currentCard = cards[currentCardIndex];

    return (
        <MainTriagem>
            <form onSubmit={send}>
                <div>
                    {currentCard}
                </div>
                <Cards>
                    {currentCardIndex !== 0 && (
                        <Anterior onClick={handlePrevCard}>
                            <ImgCard src="../../../img/anterior.png" />
                        </Anterior>
                    )}
                    {currentCardIndex !== cards.length - 1 && (
                        <Proximo onClick={handleNextCard}>
                            <ImgCard src="../../../img/proximo.png" />
                        </Proximo>
                        
                    )}
                </Cards>
            </form>
        </MainTriagem>
    )
}