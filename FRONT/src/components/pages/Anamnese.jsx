import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import axios from "axios";
import { MainTriagem, Anterior, Cards, ImgCard, Proximo, Enviar, DivButton } from './styled';
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
    //armazenando checkboxes
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

    //armazenando radios
    const [radioq, setRadioq] = useState({})

    const alter = (fieldName, value) => {
        setRadioq((prevradioqs) => ({
            ...prevradioqs,
            [fieldName]: value,
        }));
    };

    //armazenando no back elementos de texto, numero e datas
    const [form, onChange, resetState] = useForm({c1: "", c2: "", q1: "", q2: "", q3: "", q4: "", q5: "", q6: "", q7: "", q8: "", q9: "", q10: "", q21: "", q22: "", q23: "", q24: "", q25: "", q26: "", q27: "", q28: "", q29: "", q30: "", q31: "", q32: ""})
    
    //organizando dados em objetos a fim de enviar à api
    const dadosFamiliares = {};
    const historicoEscolar = {};
    const aspectosMotores = {};
    const aspectosPerceptivos = {};
    const aspectosEmocionais = {};
    const sociabilidade = {};
    const atitudesSocias = {};
    const sono = {};
    const diciplinação = {};
    const saúde = {};

    const updateCategory = (category, fieldName, value) => {
        category[fieldName] = value;
    };
    
    function send(e) {
        e.preventDefault()
        const aluno = {
            nome: form.c1,
            sexo: radioq.radioq1,
            nascimento: form.c2,

            dadosFamiliares:{ 
                q1: form.q1.value,
                q2: form.q2.value,
                q3: form.q3.value,
                q4: form.q4.value,
                q5: form.q5.value,
                q6: radioq.radioq2.value,
                q7: form.q6.value,
                q8: form.q7.value,
                q9: form.q8.value,
                q10: form.q9.value,
                q11: form.q10.value,
                q12: radioq.radioq3.value,
                q13: radioq.radioq4.value,
                q14: form.q11.value
            },
    
            historicoEscolar: {
                q1: form.q12.value,
                q2: form.q13.value,
                q3: radioq.radioq5.value,
                q4: form.q14.value,
                q5: form.q15.value,
                q6: radioq.radioq6.value,
                q7: form.q16.value,
                q8: form.q17.value,
                q9: form.q18.value,
                q10: form.q19.value,
                q11: form.q20.value,
                q12: form.q21.value,
                q13: form.q22.value,
            },
    
            aspectosMotores: {
                q1: radioq.radioq7.value,
                q2: radioq.radioq8.value,
                q3: radioq.radioq9.value,
            },
    
            aspectosPerceptivos: {
                q1: radioq.radioq10.value,
                q2: form.q23.value,
                q3: radioq.radioq11.value,
                q4: form.q24.value,
                q5: radioq.radioq12.value,
                q6: form.q25.value,
                q7: radioq.radioq13.value,
                q8: form.q26.value,
            },
    
            aspectosEmocionais: {
                q1: checkboxes.checkbox1.checked.toString(),
                q2: checkboxes.checkbox2.checked.toString(),
                q3: checkboxes.checkbox3.checked.toString(),
                q4: checkboxes.checkbox4.checked.toString(),
                q5: checkboxes.checkbox5.checked.toString(),
                q6: checkboxes.checkbox6.checked.toString(),
            },

            sociabilidade: {
                q1: radioq.radioq14.value,
                q2: radioq.radioq15.value,
                q3: radioq.radioq16.value,
                q4: radioq.radioq17.value,
                q5: radioq.radioq18.value,
                q6: radioq.radioq19.value,
                q7: radioq.radioq20.value,
                q8: radioq.radioq21.value,
            },
            atitudesSocias: {
                q1: checkboxes.checkbox7.checked.toString(),
                q2: checkboxes.checkbox8.checked.toString(),
                q3: checkboxes.checkbox9.checked.toString(),
                q4: checkboxes.checkbox10.checked.toString(),
                q5: checkboxes.checkbox11.checked.toString(),
                q6: checkboxes.checkbox12.checked.toString(),
                q7: form.q27.value,
            },
            sono: {
                q1: checkboxes.checkbox13.checked.toString(),
                q2: checkboxes.checkbox14.checked.toString(),
                q3: checkboxes.checkbox15.checked.toString(),
            },
            diciplinação: {
                q1: form.q28.value,
                q2: form.q29.value,
                q3: form.q30.value,
            },
            saúde: {
                q1: radioq.radioq22.value,
                q2: form.q31.value,
                q3: radioq.radioq23.value,
                q4: form.q32.value,
            },
        }
        
        updateCategory(dadosFamiliares, 'aluno', aluno.dadosFamiliares);
        updateCategory(historicoEscolar, 'aluno', aluno.historicoEscolar);
        updateCategory(aspectosMotores, 'aluno', aluno.aspectosMotores);
        updateCategory(aspectosPerceptivos, 'aluno', aluno.aspectosPerceptivos);
        updateCategory(aspectosEmocionais, 'aluno', aluno.aspectosEmocionais);
        updateCategory(sociabilidade, 'aluno', aluno.sociabilidade);
        updateCategory(atitudesSocias, 'aluno', aluno.atitudesSocias);
        updateCategory(sono, 'aluno', aluno.sono);
        updateCategory(diciplinação, 'aluno', aluno.diciplinação);
        updateCategory(saúde, 'aluno', aluno.saúde);

        //conecta api e front
        axios.post('http://localhost:3003/sign-up-student', aluno)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //array de cards
    const cards = [
        <Cabecalho form={form} onChange={onChange} alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />,
        <DadosFamiliares form={form} onChange={onChange} alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />,
        <HistoricoEscolar form={form} onChange={onChange} alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />,
        <AspectosMotores alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />,
        <AspectosPerceptivos form={form} onChange={onChange} alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />,
        <AspectosEmocionais checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} />,
        <Sociabilidade alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />,
        <AtitudesSocias form={form} onChange={onChange} checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} />,
        <Sono checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} />,
        <Disciplinação form={form} onChange={onChange} />,
        <Saúde form={form} onChange={onChange} alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />,

        // Novo card de revisão com o botão "Enviar"
        <div>
            <Cabecalho form={form} onChange={onChange} alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />
            <DadosFamiliares form={form} onChange={onChange} alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />
            <HistoricoEscolar form={form} onChange={onChange} alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />
            <AspectosMotores alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />
            <AspectosPerceptivos form={form} onChange={onChange} alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />
            <AspectosEmocionais checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} />
            <Sociabilidade alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />
            <AtitudesSocias form={form} onChange={onChange} checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} />
            <Sono checkboxes={checkboxes} handleCheckBoxChange={handleCheckBoxChange} />
            <Disciplinação form={form} onChange={onChange} />
            <Saúde form={form} onChange={onChange} alter={alter} RadioQuestion={RadioQuestion} radioq={radioq} />

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
    );

};