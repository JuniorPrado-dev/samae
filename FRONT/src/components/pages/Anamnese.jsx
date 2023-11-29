import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import axios from "axios";
import { MainTriagem, Anterior, Cards, ImgCard, Proximo, Enviar, DivButton, Title } from './styled';
import Back from '../../img/anterior.png';
import Next from '../../img/proximo.png';
import { Cabecalho } from './anamnese-components/cabecalho';
import { DadosFamiliares } from './anamnese-components/camp1';
import { HistoricoEscolar } from './anamnese-components/camp2';
import { AspectosMotores } from './anamnese-components/camp3';
import { AspectosPerceptivos } from './anamnese-components/camp4';
import { AspectosEmocionais } from './anamnese-components/camp5';
import { SociabilidadeAnamnese } from './anamnese-components/camp6';
import { AtitudesSocias } from './anamnese-components/camp7';
import { SonoAnamnese } from './anamnese-components/camp8';
import { Disciplinação } from './anamnese-components/camp9';
import { Saúde } from './anamnese-components/camp10';
import { RadioQuestion } from '../radio-question/radioQ';
import { useProtectedPage } from "./../../hooks/useProtectedPage";

export const Anamnese = () => {

    // useProtectedPage()

    //ajuda a marcar somente um checkbox
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
    });

    const handleCheckBoxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({
            ...checkboxes,
            [name]: checked,
        });
    };

    //ajuda a marcar somente um radio
    const [radio, setRadio] = useState({})

    const alter = (fieldName, value) => {
        setRadio((prevradios) => ({
            ...prevradios,
            [fieldName]: value,
        }));
    };

    //armazenando no back elementos de texto e numero
    const [form, onChange, resetState] = useForm({
        c1: "",
        c2: "",
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
        q10: "",
        q21: "",
        q22: "",
        q23: "",
        q24: "",
        q25: "",
        q26: "",
        q27: "",
        q28: "",
        q29: "",
        q30: "",
        q31: "",
        q32: "",
    })

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

    //defina a função updateCategory para atualizar uma categoria dentro de um objeto
    const updateCategory = (obj, category, data) => {
        obj[category] = data;
    };

    //organizando dados em objetos a fim de enviar à api
    const cabecalho = {};
    const dadosFamiliares = {};
    const historicoAnamnese = {};
    const aspectosMotores = {};
    const aspectosPerceptivos = {};
    const aspectosEmocionais = {};
    const sociabilidadeAnamnese = {};
    const atitudesAnamnese = {};
    const sonoAnamnese = {};
    const disciplinacao = {};
    const saudeAnamnese = {};

    function send(e) {
        e.preventDefault()
        const aluno = {
            idAnamnese: generateUniqueId(),

            cabecalho: {
                q1: form.c1,
                q2: radio.radio1,
                q3: form.c2,
            },
            dadosFamiliares: {
                q1: form.q1,
                q2: form.q2,
                q3: form.q3,
                q4: form.q4,
                q5: form.q5,
                q6: radio.radio2,
                q7: form.q6,
                q8: form.q7,
                q9: form.q8,
                q10: form.q9,
                q11: form.q10,
                q12: radio.radio3,
                q13: radio.radio4,
                q14: form.q11,
            },
            historicoAnamnese: {
                q1: form.q12,
                q2: form.q13,
                q3: radio.radio5,
                q4: form.q14,
                q5: form.q15,
                q6: radio.radio6,
                q7: form.q16,
                q8: form.q17,
                q9: form.q18,
                q10: form.q19,
                q11: form.q20,
                q12: form.q21,
                q13: form.q22,
            },
            aspectosMotores: {
                q1: radio.radio7,
                q2: radio.radio8,
                q3: radio.radio9,
            },
            aspectosPerceptivos: {
                q1: radio.radio10,
                q2: form.q23,
                q3: radio.radio11,
                q4: form.q24,
                q5: radio.radio12,
                q6: form.q25,
                q7: radio.radio13,
                q8: form.q26,
            },
            aspectosEmocionais: {
                q1: checkboxes.checkbox1.toString(),
                q2: checkboxes.checkbox2.toString(),
                q3: checkboxes.checkbox3.toString(),
                q4: checkboxes.checkbox4.toString(),
                q5: checkboxes.checkbox5.toString(),
                q6: checkboxes.checkbox6.toString(),
            },
            sociabilidadeAnamnese: {
                q1: radio.radio14,
                q2: radio.radio15,
                q3: radio.radio16,
                q4: radio.radio17,
                q5: radio.radio18,
                q6: radio.radio19,
                q7: radio.radio20,
                q8: radio.radio21,
            },
            atitudesAnamnese: {
                q1: checkboxes.checkbox7.toString(),
                q2: checkboxes.checkbox8.toString(),
                q3: checkboxes.checkbox9.toString(),
                q4: checkboxes.checkbox10.toString(),
                q5: checkboxes.checkbox11.toString(),
                q6: checkboxes.checkbox12.toString(),
                q7: form.q27,
            },
            sonoAnamnese: {
                q1: checkboxes.checkbox13.toString(),
                q2: checkboxes.checkbox14.toString(),
                q3: checkboxes.checkbox15.toString(),
            },
            disciplinacao: {
                q1: form.q28,
                q2: form.q29,
                q3: form.q30,
            },
            saudeAnamnese: {
                q1: radio.radio22,
                q2: form.q31,
                q3: radio.radio23,
                q4: form.q32,
            },
        }

        updateCategory(cabecalho, 'aluno', aluno.cabecalho);
        updateCategory(dadosFamiliares, 'aluno', aluno.dadosFamiliares);
        updateCategory(historicoAnamnese, 'aluno', aluno.historicoAnamnese);
        updateCategory(aspectosMotores, 'aluno', aluno.aspectosMotores);
        updateCategory(aspectosPerceptivos, 'aluno', aluno.aspectosPerceptivos);
        updateCategory(aspectosEmocionais, 'aluno', aluno.aspectosEmocionais);
        updateCategory(sociabilidadeAnamnese, 'aluno', aluno.sociabilidadeAnamnese);
        updateCategory(atitudesAnamnese, 'aluno', aluno.atitudesAnamnese);
        updateCategory(sonoAnamnese, 'aluno', aluno.sonoAnamnese);
        updateCategory(disciplinacao, 'aluno', aluno.disciplinacao);
        updateCategory(saudeAnamnese, 'aluno', aluno.saudeAnamnese);

        //conecta api e front
        axios.post('http://localhost:3003/post-anamnese', aluno)
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
            alter={alter}
            radio={radio}
            onChange={onChange}
        />,
        <DadosFamiliares
            form={form}
            onChange={onChange}
            alter={alter}
            RadioQuestion={RadioQuestion}
            radio={radio}
        />,
        <HistoricoEscolar
            form={form}
            onChange={onChange}
            alter={alter}
            RadioQuestion={RadioQuestion}
            radio={radio}
        />,
        <AspectosMotores
            alter={alter}
            RadioQuestion={RadioQuestion}
            radio={radio}
        />,
        <AspectosPerceptivos
            form={form}
            onChange={onChange}
            alter={alter}
            RadioQuestion={RadioQuestion}
            radio={radio}
        />,
        <AspectosEmocionais
            checkboxes={checkboxes}
            handleCheckBoxChange={handleCheckBoxChange}
        />,
        <SociabilidadeAnamnese
            alter={alter}
            RadioQuestion={RadioQuestion}
            radio={radio}
        />,
        <AtitudesSocias
            form={form}
            onChange={onChange}
            checkboxes={checkboxes}
            handleCheckBoxChange={handleCheckBoxChange}
        />,
        <SonoAnamnese
            checkboxes={checkboxes}
            handleCheckBoxChange={handleCheckBoxChange}
        />,
        <Disciplinação
            form={form}
            onChange={onChange}
        />,
        <Saúde
            form={form}
            onChange={onChange}
            alter={alter}
            RadioQuestion={RadioQuestion}
            radio={radio}
        />,

        // Novo card com o botão "Enviar"
        <div>
            <Cabecalho
                form={form}
                onChange={onChange}
                alter={alter}
                RadioQuestion={RadioQuestion}
                radio={radio}
            />
            <DadosFamiliares
                form={form}
                onChange={onChange}
                alter={alter}
                RadioQuestion={RadioQuestion}
                radio={radio}
            />
            <HistoricoEscolar
                form={form}
                onChange={onChange}
                alter={alter}
                RadioQuestion={RadioQuestion}
                radio={radio}
            />
            <AspectosMotores
                alter={alter}
                RadioQuestion={RadioQuestion}
                radio={radio}
            />
            <AspectosPerceptivos
                form={form}
                onChange={onChange}
                alter={alter}
                RadioQuestion={RadioQuestion}
                radio={radio}
            />
            <AspectosEmocionais
                checkboxes={checkboxes}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <SociabilidadeAnamnese
                alter={alter}
                RadioQuestion={RadioQuestion}
                radio={radio}
            />
            <AtitudesSocias
                form={form}
                onChange={onChange}
                checkboxes={checkboxes}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <SonoAnamnese
                checkboxes={checkboxes}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <Disciplinação
                form={form}
                onChange={onChange}
            />
            <Saúde
                form={form}
                onChange={onChange}
                alter={alter}
                RadioQuestion={RadioQuestion}
                radio={radio}
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
            <Title>Anamnese de Aluno</Title>
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
    );

};