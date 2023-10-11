import React, { useState, useEffect } from 'react';
import './styled.jsx';
import {
    AddTask,
    Icon,
    Main,
    Li,
    Checkbox,
    BtnNone,
    IconX,
    Text,
    Hour,
    Submit,
    H2,
    Item,
    BtnDelete
} from './styled.jsx';
import { useForm } from '../../hooks/useForm';

export const Agenda = () => {
    const [watcher, setWatch] = useState(false);
    const [watcher2, setWatch2] = useState(true);
    const [form, onChange, resetState] = useForm({
        name: "",
        hour: ""
    });
    const [itens, setItens] = useState([
        {
            id: 1,
            nome: "Butter",
            hora: "17:00",
            checked: false
        },
    ]);
    const [notifiedItems, setNotifiedItems] = useState([]);

    useEffect(() => {
        const currentDate = new Date();
        const hour = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const time = hour + ":" + minutes;

        if (!notifiedItems.includes(time)) {
            verificaHorario(itens, time);
            setNotifiedItems([...notifiedItems, time]);
        }

        const intervalId = setInterval(() => {
            const newTime = new Date().getHours() + ":" + new Date().getMinutes();
            if (!notifiedItems.includes(newTime)) {
                verificaHorario(itens, newTime);
                setNotifiedItems([...notifiedItems, newTime]);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [itens, notifiedItems]);

    function verificaHorario(itens, currentTime) {
        for (let item of itens) {
            if (item.hora === currentTime) {
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

    function addTask() {
        setWatch(true);
        setWatch2(false);
    }

    function cancel() {
        resetState();
        setWatch(false);
        setWatch2(true);
    }

    function post() {
        const newItem = {
            id: itens.length > 0 ? itens[itens.length - 1].id + 1 : 1,
            nome: form.name,
            hora: form.hour,
            checked: false
        };
        const newList = [...itens, newItem];
        setItens(newList);
        resetState();
        setWatch(false);
        setWatch2(true);
    }

    function deleteTask(id) {
        const filteredArray = itens.filter((item) => item.id !== id);
        setItens(filteredArray);
    }
    
    return (
        <Main>
            <div className={"shopping"}>
                <H2 className={"shopping__title"}>Agenda</H2>
                <ul className={"shopping__checklist"}>
                    {itens.map((item) => (
                        <Li key={item.id}>
                            <Checkbox
                                type="checkbox"
                                id={`check${item.id}`}
                                checked={item.checked}
                                onChange={() => {
                                    const updatedItens = itens.map((i) => {
                                        if (i.id === item.id) {
                                            return { ...i, checked: !i.checked };
                                        }
                                        return i;
                                    });
                                    setItens(updatedItens);
                                }}
                            />
                            <Item>{item.nome} às {item.hora}</Item>
                            <BtnDelete type='button' onClick={() => deleteTask(item.id)}>
                                <IconX src="../../../img/lixeira.png" />
                            </BtnDelete>
                        </Li>
                    ))}
                    {watcher && (
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
                    )}
                </ul>
                {watcher2 && (
                    <AddTask onClick={addTask} type='button'>
                        <Icon src="../../img/add.png" />
                    </AddTask>
                )}
            </div>
        </Main>
    );
}
