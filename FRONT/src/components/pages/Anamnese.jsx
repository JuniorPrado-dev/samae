import React, { useState } from 'react';
import { Search } from '../Search-bar/Search';
import { Lista, Name } from '../Search-bar/styled';
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
    const [results, setResults] = useState([]);

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
            nome: form.c1,
            sexo: watcher.watcher1,
            nascimento: form.c2,

            d_n1: form.q1,
            d_n2: form.q2,
            d_n3: form.q3,
            d_n4: form.q4,
            d_n5: form.q5,
            d_n6: watcher.watcher2,
            d_n7: form.q6,
            d_n8: form.q7,
            d_n9: form.q8,
            d_n10: form.q9,
            d_n11: form.q10,
            d_n12: watcher.watcher3,
            d_n13: watcher.watcher4,
            d_n14: form.q11,

            h_n1: form.q12,
            h_n2: form.q13,
            h_n3: watcher.watcher5,
            h_n4: form.q14,
            h_n5: form.q15,
            h_n6: watcher.watcher6,
            h_n7: form.q16,
            h_n8: form.q17,
            h_n9: form.q18,
            h_n10: form.q19,
            h_n11: form.q20,
            h_n12: form.q21,
            h_n13: form.q22,

            am_n1: watcher.watcher7,
            am_n2: watcher.watcher8,
            am_n3: watcher.watcher9,

            ap_n1: watcher.watcher10,
            ap_n2: form.q23,
            ap_n3: watcher.watcher11,
            ap_n4: form.q24,
            ap_n5: watcher.watcher12,
            ap_n6: form.q25,
            ap_n7: watcher.watcher13,
            ap_n8: form.q26,

            ae_n1: checkboxes.checkbox1.toString(),
            ae_n2: checkboxes.checkbox2.toString(),
            ae_n3: checkboxes.checkbox3.toString(),
            ae_n4: checkboxes.checkbox4.toString(),
            ae_n5: checkboxes.checkbox5.toString(),
            ae_n6: checkboxes.checkbox6.toString(),

            s_n1: watcher.watcher14,
            s_n2: watcher.watcher15,
            s_n3: watcher.watcher16,
            s_n4: watcher.watcher17,
            s_n5: watcher.watcher18,
            s_n6: watcher.watcher19,
            s_n7: watcher.watcher20,
            s_n8: watcher.watcher21,

            asp_n1: checkboxes.checkbox7.toString(),
            asp_n2: checkboxes.checkbox8.toString(),
            asp_n3: checkboxes.checkbox9.toString(),
            asp_n4: checkboxes.checkbox10.toString(),
            asp_n5: checkboxes.checkbox11.toString(),
            asp_n6: checkboxes.checkbox12.toString(),
            asp_n7: form.q27,

            sn_n1: checkboxes.checkbox13.toString(),
            sn_n2: checkboxes.checkbox14.toString(),
            sn_n3: checkboxes.checkbox15.toString(),

            dc_n1: form.q28,
            dc_n2: form.q29,
            dc_n3: form.q30,

            sd_n1: watcher.watcher22,
            sd_n2: form.q31,
            sd_n3: watcher.watcher23,
            sd_n4: form.q32,
        }

        console.log(aluno);

        //conecta api e front
        axios.post('http://localhost:3003/sign-up-student', aluno)
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
            <div>
                <Search setResults={setResults} />
                <Lista>
                    {results.map((user) => (
                        <Name key={user.id}>{user.name}</Name>
                    ))}
                </Lista>
            </div>
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