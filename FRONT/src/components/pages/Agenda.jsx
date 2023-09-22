import React from 'react';
import './styled.jsx';
import { AddTask, Icon, Main, Li, Checkbox, BtnNone, IconX, Text, Hour, Submit, H2, Item, BtnDelete } from './styled.jsx';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const Agenda = () => {

    const [watcher, setWatch] = useState(false)
    const [watcher2, setWatch2] = useState(true)

    const [form, onChange, resetState] = useForm({
        name: "",
        hour: "",
        checkBox: ""
    })

    const [itens, setItens] = useState(["Butter"])

    function addTask() {
        setWatch(true)
        setWatch2(false)
    }

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

    function post() {
        const newItemName = form.name
        const newItemHour = form.hour
        const newList = [...itens, newItemName + " | " + newItemHour]
        setItens(newList)
        resetState()
        setWatch(false)
        setWatch2(true)
    }

    function cancel() {
        resetState()
        setWatch(false)
        setWatch2(true)
    }

    function deleteTask(index) {
        const filterArray = itens.filter((item, i) => {
            i !== index
        })
        setItens(filterArray)
    }

    function trueOrFalse() {
        const checkbox = document.querySelector('#check')
        let res = null

        if (checkbox.style.background === 'gray') {
            res = false
        }else{
            res = true
        }
        console.log("O valor atual da checkbox é " + res);
    }

    return (
        <Main>
            <div className={"shopping"}>
                <H2 className={"shopping__title"}>Agenda</H2>
                <ul className={"shopping__checklist"}>
                    {itens.map((item, index) => <Li key={index}>
                        <Checkbox type="checkbox" id='check' onClick={trueOrFalse}/>
                        <Item>{item}</Item>
                        <BtnDelete type='button' onClick={() => deleteTask(item)}>
                            <IconX src="../../../img/lixeira.png" />
                        </BtnDelete>
                    </Li>)}
                    {watcher &&
                    <>
                        <Li>
                            <Text type="text" id="name" name="name" onChange={onChange} value={form.name} placeholder='Digite o nome do aluno' />
                            <Hour type="time" id="hour" name="hour" onChange={onChange} value={form.hour} />
                            <BtnNone type='button' onClick={cancel}>
                                <IconX src="../../../img/excluir.png" />
                            </BtnNone>
                        </Li>
                            <Submit type='submit' onClick={post}>Enviar</Submit>
                    </>
                    }
                </ul>
                {watcher2 &&
                    <AddTask onClick={addTask} type='button'>
                        <Icon src="../../img/add.png" />
                    </AddTask>
                }
            </div>
        </Main>
    )
};