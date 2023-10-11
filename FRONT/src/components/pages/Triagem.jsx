import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import axios from "axios";
import { Cabecalho } from './triagem-components/cabecalho';
import { LeituraEscrita } from './triagem-components/leitura-escrita';
import { Matematica } from './triagem-components/matematica';
import { Hc } from './triagem-components/hc';
import { MainTriagem, Anterior, Cards, ImgCard, Proximo, Enviar, DivButton } from './styled';

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
        const aluno = {
            idAluno: form.nome,
            dataTriagem: form.data,
            idProfessor: form.professor,
            psicopedagogo: form.psicopedagogo,

            n1_n1: checkboxes.checkbox1,
            n1_n2: checkboxes.checkbox2,
            n1_n3: checkboxes.checkbox3,

            n2_n1: checkboxes.checkbox4,
            n2_n2: checkboxes.checkbox5,
            n2_n3: checkboxes.checkbox6,
            n2_n4: checkboxes.checkbox7,

            n3_n1: checkboxes.checkbox8,
            n3_n2: checkboxes.checkbox9,
            n3_n3: checkboxes.checkbox10,

            n4_n1: checkboxes.checkbox11,
            n4_n2: checkboxes.checkbox12,
            n4_n3: checkboxes.checkbox13,
            n4_n4: checkboxes.checkbox14,
            n4_n5: checkboxes.checkbox15,
            n4_n6: watcher,

            mt_n1: checkboxes.checkbox16,
            mt_n2: checkboxes.checkbox17,
            mt_n5: form.recNum,
            mt_n6: form.escNum,
            mt_n7: checkboxes.checkbox18,
            mt_n8: checkboxes.checkbox19,
            mt_n9: checkboxes.checkbox20,
            mt_n10: checkboxes.checkbox21,
            mt_n11: checkboxes.checkbox22,
            mt_n12: checkboxes.checkbox23,
            mt_n13: checkboxes.checkbox24,

            hc_n1: checkboxes.checkbox25,
            hc_n2: checkboxes.checkbox26,
            hc_n3: checkboxes.checkbox27,
            hc_n4: checkboxes.checkbox28,
            hc_n5: checkboxes.checkbox29,
            hc_n6: checkboxes.checkbox30,
            hc_n7: checkboxes.checkbox31,
            hc_n8: checkboxes.checkbox32,
            hc_n9: checkboxes.checkbox33,
            hc_n10: checkboxes.checkbox34,
            hc_n11: checkboxes.checkbox35,
            hc_n12: checkboxes.checkbox36,
            hc_n13: checkboxes.checkbox37,
            hc_n14: checkboxes.checkbox38,
            hc_n15: checkboxes.checkbox39,
        }

        //conecta api e front
        axios.post('http://localhost:3003/triagem-student', aluno)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

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
        // Novo card com o botão "Enviar"
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