import React, { useState } from 'react';
import { Search } from '../Search-bar/Search';
import { Lista, Name } from '../Search-bar/styled';
import { useForm } from '../../hooks/useForm';
import axios from "axios";
import { MainTriagem, Anterior, Cards, ImgCard, Proximo, Enviar, DivButton } from './styled';
import Back from '../../img/anterior.png';
import Next from '../../img/proximo.png';
import { v4 as uuidv4 } from 'uuid';
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

export const Anamnese = () => {
    const [results, setResults] = useState([]);


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
        const id_triagem = uuidv4();
        const aluno = {
            idTriagem: id_triagem,
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
                alert(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const cards = [
        <Cabecalho
            form={form}
            onChange={onChange}
            alter={alter}
        />,
        <DadosFamiliares
            form={form}
            onChange={onChange}
            alter={alter}
        />,
        <HistoricoEscolar
            form={form}
            onChange={onChange}
            alter={alter}
        />,
        <AspectosMotores
            alter={alter}
        />,
        <AspectosPerceptivos
            form={form}
            onChange={onChange}
            alter={alter}
        />,
        <AspectosEmocionais
            checkboxes={checkboxes}
            handleCheckBoxChange={handleCheckBoxChange}
        />,
        <Sociabilidade
            alter={alter}
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
        />,
        
        // Novo card com o botão "Enviar"
        <div>
            <Cabecalho
            form={form}
            onChange={onChange}
            alter={alter}
        />
        <DadosFamiliares
            form={form}
            onChange={onChange}
            alter={alter}
        />
        <HistoricoEscolar
            form={form}
            onChange={onChange}
            alter={alter}
        />
        <AspectosMotores
            alter={alter}
        />
        <AspectosPerceptivos
            form={form}
            onChange={onChange}
            alter={alter}
        />
        <AspectosEmocionais
            checkboxes={checkboxes}
            handleCheckBoxChange={handleCheckBoxChange}
        />
        <Sociabilidade
            alter={alter}
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
        />
            <h2>
                Outras ocorrências?
            </h2>
            <input type="text" name='q34' onChange={onChange} value={form.q34} />

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