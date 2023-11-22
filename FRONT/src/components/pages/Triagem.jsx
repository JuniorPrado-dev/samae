import React, { useState } from 'react';
import axios from "axios";
import { useForm } from '../../hooks/useForm';
import { Cabecalho } from './triagem-components/cabecalho';
import { LeituraEscrita } from './triagem-components/leitura-escrita';
import { Matematica } from './triagem-components/matematica';
import { Hc } from './triagem-components/hc';
import { MainTriagem, Anterior, Cards, ImgCard, Proximo, Enviar, DivButton } from './styled';
import Back from '../../img/anterior.png'
import Next from '../../img/proximo.png'
import { useProtectedPage } from "./../../hooks/useProtectedPage";

export const Triagem = () => {

    /*const item = new Date().toISOString()
    const date = `${newItem1.slice(8,10)}/${newItem1.slice(5,7)}/${newItem1.slice(0,4)}`
    */

    //armazenando checkbox

    useProtectedPage()
    
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

    const handleCheckBoxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({
            ...checkboxes,
            [name]: checked,
        });
    };

    //armazenando elementos de texto, data, hora, numero
    const [form, onChange, resetState] = useForm({
        nome: '',
        data: '',
        professor: '',
        psicopedagogo: '',
        recNum: '',
        escNum: ''
    })

    //armazenando radios
    const [radioq, setRadioq] = useState({})

    const alter = (fieldName, value) => {
        setRadioq((prevradioqs) => ({
            ...prevradioqs,
            [fieldName]: value,
        }));
    };

    //gerador de id automático
    const generateUniqueId = () => {
        const length = 9;
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    //organizando dados em objetos a fim de enviar à api
    const cabecalho = {};
    const hc = {};
    const leituraEscritaN1 = {};
    const leituraEscritaN2 = {};
    const leituraEscritaN3 = {};
    const leituraEscritaN4 = {};
    const matematica = {};

    function send(e) {
        e.preventDefault()
        const aluno = {
            idTriagem: generateUniqueId(),
            
            cabecalho: {
                q1: form.nome.value,
                q2: form.data.value,
                q3: form.professor.value,
                q4: form.psicopedagogo.value,
            },
            hc: {
                q1: checkboxes.checkbox1.toString(),
                q2: checkboxes.checkbox2.toString(),
                q3: checkboxes.checkbox3.toString(),
            },

            leituraEscritaN1: {
                q1: checkboxes.checkbox4.toString(),
                q2: checkboxes.checkbox5.toString(),
                q3: checkboxes.checkbox6.toString(),
                q4: checkboxes.checkbox7.toString(),
            },

            leituraEscritaN2: {
                q1: checkboxes.checkbox8.toString(),
                q2: checkboxes.checkbox9.toString(),
                q3: checkboxes.checkbox10.toString(),
            },

            leituraEscritaN3: {
                q1: checkboxes.checkbox11.toString(),
                q2: checkboxes.checkbox12.toString(),
                q3: checkboxes.checkbox13.toString(),
                q4: checkboxes.checkbox14.toString(),
                q5: checkboxes.checkbox15.toString(),
                q6: radioq.radioq1.value,
            },

            leituraEscritaN4: {
                q1: checkboxes.checkbox16.toString(),
                q2: checkboxes.checkbox17.toString(),
                q3: form.recNum.value,
                q4: form.escNum.value,
                q5: checkboxes.checkbox18.toString(),
                q6: checkboxes.checkbox19.toString(),
                q7: checkboxes.checkbox20.toString(),
                q8: checkboxes.checkbox21.toString(),
                q9: checkboxes.checkbox22.toString(),
                q10: checkboxes.checkbox23.toString(),
                q11: checkboxes.checkbox24.toString(),
            },

            matematica: {
                q1: checkboxes.checkbox25.toString(),
                q2: checkboxes.checkbox26.toString(),
                q3: checkboxes.checkbox27.toString(),
                q4: checkboxes.checkbox28.toString(),
                q5: checkboxes.checkbox29.toString(),
                q6: checkboxes.checkbox30.toString(),
                q7: checkboxes.checkbox31.toString(),
                q8: checkboxes.checkbox32.toString(),
                q9: checkboxes.checkbox33.toString(),
                q10: checkboxes.checkbox34.toString(),
                q11: checkboxes.checkbox35.toString(),
                q12: checkboxes.checkbox36.toString(),
                q13: checkboxes.checkbox37.toString(),
                q14: checkboxes.checkbox38.toString(),
                q15: checkboxes.checkbox39.toString(),
            },
        }

        updateCategory(cabecalho, 'aluno', aluno.cabecalho);
        updateCategory(hc, 'aluno', aluno.hc);
        updateCategory(leituraEscritaN1, 'aluno', aluno.leituraEscritaN1);
        updateCategory(leituraEscritaN2, 'aluno', aluno.leituraEscritaN2);
        updateCategory(leituraEscritaN3, 'aluno', aluno.leituraEscritaN3);
        updateCategory(leituraEscritaN4, 'aluno', aluno.leituraEscritaN4);
        updateCategory(matematica, 'aluno', aluno.matematica);

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
        <Cabecalho form={form} onChange={onChange} />,
        <LeituraEscrita checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} alter={alter} />,
        <Matematica checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} onChange={onChange} form={form} />,
        <Hc checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} />,
        <div>
            <Cabecalho form={form} onChange={onChange} />
            <LeituraEscrita checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} alter={alter} />
            <Matematica checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} onChange={onChange} form={form} />
            <Hc checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} />
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
                            <ImgCard src={Back} />
                        </Anterior>
                    )}
                    {currentCardIndex !== cards.length - 1 && (
                        <Proximo onClick={handleNextCard}>
                            <ImgCard src={Next} />
                        </Proximo>

                    )}
                </Cards>
            </form>
        </MainTriagem>
    )
}