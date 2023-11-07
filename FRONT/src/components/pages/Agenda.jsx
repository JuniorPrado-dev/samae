import React from 'react';
import './styled.jsx';
import { AddTask, Icon, Main, Li, Checkbox, BtnNone, IconX, Text, Hour, Submit, Item, BtnDelete } from './styled.jsx';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Legend } from '../form-student/form_style.jsx';
import Reset from '../../img/excluir.png';
import Lixeira from '../../img/lixeira.png';
import Student from '../../img/add.png';
import { useProtectedPage } from './hooks/useProtectedPage.js';

export const Agenda = ({ token }) => {
    useProtectedPage(token);
    //const newItem1 = new Date().toISOString()
    //const newItemDate = `${newItem1.slice(8,10)}/${newItem1.slice(5,7)}/${newItem1.slice(0,4)}`

    const [watcher, setWatch] = useState(false)
    const [watcher2, setWatch2] = useState(true)
    
    const [form, onChange, resetState] = useForm({
        name: "",
        hour: ""
    })

    const [itens, setItens] = useState([
        {
            nome: "Butter",
            hora: "17:00"
        },
    ])

    //Noticação
    function verificaHorario(itens, currentTime) {
        for (let item of itens) {
            if (item.hora == currentTime) {
                if (!("Notification" in window)) {
                    alert("Este navegador não suporta notificações.");
                } else if (Notification.permission === "granted") {
                        const notification = new Notification("Hora do Atendimento!", {
                            body: item.nome + " está esperando por você.",
                        });
                    } else if (Notification.permission !== "denied") {
                        Notification.requestPermission().then((permission) => {
                            if (permission === "granted") {
                                const notification = new Notification("Título da Notificação", {
                                    body: "Este é o corpo da notificação.",
                                });
                            }
                        });
                    }
            }
        }
    }

    //Verificação de tempo atual a cada minuto
    setTimeout(()=>{
        const currentDate = new Date();
        const hour = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const time = hour + ":" + minutes;
       
        verificaHorario(itens, time);
    }, 60000)

    function addTask() {
        setWatch(true)
        setWatch2(false)
    }

    function cancel() {
        resetState()
        setWatch(false)
        setWatch2(true)
    }

    function post(){
        const newItem ={
            nome: form.name,
            hora: form.hour
        }
        const newList = [...itens, newItem]
        setItens(newList)
        resetState()
        setWatch(false)
        setWatch2(true)
    }

    function deleteTask(item) {
        const filterArray = itens.filter((i, index) => i !== item);
        setItens(filterArray)
    }

    return (
        <Main>
            
                <Legend className={"shopping__title"}>Agenda</Legend>
            <div className={"shopping"}>
                <ul className={"shopping__checklist"}>
                    {itens.map((item, index) => <Li key={index}>
                        <Checkbox type="checkbox" id='check'/>
                        <Item>{item.nome} às {item.hora}</Item>
                        <BtnDelete type='button' onClick={() => deleteTask(item)}>
                            <IconX src={Lixeira} />
                        </BtnDelete>
                    </Li>)}
                    {watcher &&
                    <>
                        <Li>
                            <Text type="text" id="name" name="name" onChange={onChange} value={form.name} placeholder='Digite o nome do aluno' />
                            <Hour type="time" id="hour" name="hour" onChange={onChange} value={form.hour} />
                            <BtnNone type='button' onClick={cancel}>
                                <IconX src={Reset} />
                            </BtnNone>
                        </Li>
                            <Submit type='submit' onClick={post}>Enviar</Submit>
                    </>
                    }
                </ul>
                
                {watcher2 &&
                    <AddTask onClick={addTask} type='button'>
                        <Icon src={Student}/>
                    </AddTask>
                }
            </div>
            
        </Main>
    )
}