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
import { Sociabilidade } from './anamnese-components/camp6';
import { AtitudesSocias } from './anamnese-components/camp7';
import { Sono } from './anamnese-components/camp8';
import { Disciplinação } from './anamnese-components/camp9';
import { Saúde } from './anamnese-components/camp10';
import { RadioQuestion } from '../radio-question/radioQ';

export const Anamnese = () => {

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
    const [watcher, setWatcher] = useState({
        watcher1: '',
        watcher2: '',
        watcher3: '',
        watcher4: '',
        watcher5: '',
        watcher6: '',
        watcher7: '',
        watcher8: '',
        watcher9: '',
        watcher10: '',
        watcher11: '',
        watcher12: '',
        watcher13: '',
        watcher14: '',
        watcher15: '',
        watcher16: '',
        watcher17: '',
        watcher18: '',
        watcher19: '',
        watcher20: '',
        watcher21: '',
        watcher22: '',
        watcher23: '',
    })

    const alter = (fieldName, value) => {
        setWatcher((prevWatchers) => ({
            ...prevWatchers,
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
    //chama e organiza tudo para mandar para a api
    function send(e) {
        e.preventDefault()
        const aluno = {

            alunoAnamnese: {
               q1: form.c1,
               q2: watcher.watcher1,
               q3: form.c2,
            }, 

            dadosAnamnese: {
               q1: form.q1,
               q2: form.q2,
               q3: form.q3,
               q4: form.q4,
               q5: form.q5,
               q6: watcher.watcher2,
               q7: form.q6,
               q8: form.q7,
               q9: form.q8,
               q10: form.q9,
               q11: form.q10,
               q12: watcher.watcher3,
               q13: watcher.watcher4,
               q14: form.q11,
            },

            historicoAnamnese: {
               q1: form.q12,
               q2: form.q13,
               q3: watcher.watcher5,
               q4: form.q14,
               q5: form.q15,
               q6: watcher.watcher6,
               q7: form.q16,
               q8: form.q17,
               q9: form.q18,
               q10: form.q19,
               q11: form.q20,
               q12: form.q21,
               q13: form.q22,
            },

            aspectosMotores: {
               q1: watcher.watcher7,
               q2: watcher.watcher8,
               q3: watcher.watcher9,
            },

            aspectosPerceptivos: {
               q1: watcher.watcher10,
               q2: form.q23,
               q3: watcher.watcher11,
               q4: form.q24,
               q5: watcher.watcher12,
               q6: form.q25,
               q7: watcher.watcher13,
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
               q1: watcher.watcher14,
               q2: watcher.watcher15,
               q3: watcher.watcher16,
               q4: watcher.watcher17,
               q5: watcher.watcher18,
               q6: watcher.watcher19,
               q7: watcher.watcher20,
               q8: watcher.watcher21,
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

            discAnamnese: {
               q1: form.q28,
               q2: form.q29,
               q3: form.q30,
            },

            saudeAnamnese: {
            sd_n1: watcher.watcher22,
            sd_n2: form.q31,
            sd_n3: watcher.watcher23,
            sd_n4: form.q32,
            },
        }

        console.log(aluno);

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
            watcher={watcher}
            onChange={onChange} 
        />,
        <DadosFamiliares
            form={form}
            onChange={onChange} 
            alter={alter}
            RadioQuestion={RadioQuestion}
            watcher={watcher}
        />,
        <HistoricoEscolar
            form={form}
            onChange={onChange}
            alter={alter}
            RadioQuestion={RadioQuestion}
            watcher={watcher}
        />,
        <AspectosMotores
            alter={alter}
            RadioQuestion={RadioQuestion}
            watcher={watcher}
        />,
        <AspectosPerceptivos
            form={form}
            onChange={onChange}
            alter={alter}
            RadioQuestion={RadioQuestion}
            watcher={watcher}
        />,
        <AspectosEmocionais
            checkboxes={checkboxes}
            handleCheckBoxChange={handleCheckBoxChange}
        />,
        <Sociabilidade
            alter={alter}
            RadioQuestion={RadioQuestion}
            watcher={watcher}
        />,
        <AtitudesSocias
            form={form}
            onChange={onChange}
            checkboxes={checkboxes}
            handleCheckBoxChange={handleCheckBoxChange}
        />,
        <Sono
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
            watcher={watcher}
        />,

        // Novo card com o botão "Enviar"
        <div>
            <Cabecalho
                form={form}
                onChange={onChange}
                alter={alter}
                RadioQuestion={RadioQuestion}
                watcher={watcher}
            />
            <DadosFamiliares
                form={form}
                onChange={onChange}
                alter={alter}
                RadioQuestion={RadioQuestion}
                watcher={watcher}
            />
            <HistoricoEscolar
                form={form}
                onChange={onChange}
                alter={alter}
                RadioQuestion={RadioQuestion}
                watcher={watcher}
            />
            <AspectosMotores
                alter={alter}
                RadioQuestion={RadioQuestion}
                watcher={watcher}
            />
            <AspectosPerceptivos
                form={form}
                onChange={onChange}
                alter={alter}
                RadioQuestion={RadioQuestion}
                watcher={watcher}
            />
            <AspectosEmocionais
                checkboxes={checkboxes}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <Sociabilidade
                alter={alter}
                RadioQuestion={RadioQuestion}
                watcher={watcher}
            />
            <AtitudesSocias
                form={form}
                onChange={onChange}
                checkboxes={checkboxes}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <Sono
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
                watcher={watcher}
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