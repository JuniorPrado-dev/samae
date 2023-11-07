import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import './styled.jsx';
import { AddTask, Icon, Main, Li, Checkbox, BtnNone, IconX, Text, Hour, Submit, Item, BtnDelete } from './styled.jsx';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Legend } from '../form-student/form_style.jsx';
import Reset from '../../img/excluir.png';
import Lixeira from '../../img/lixeira.png';
import Student from '../../img/add.png';

export const Agenda = () => {

    const [close, setClose] = useState(false);
    const [open, setOpen] = useState(true);
    
    const [task, setTask] = useState([
        {
            id: 777,
            checked: false,
            nome: "Butter",
            hora: "17:00"
        },
    ]);
    
    // Carrega a agenda do dia ao entrar na página
    useEffect(() => {
        const fetchAgenda = async () => {
            try {
                const response = await axios.get('/load-agender');
                const fetchedTasks = response.data; 
                setTask(fetchedTasks); 
            } catch (error) {
                console.error('Erro ao buscar agenda:', error);
            }
        };
        fetchAgenda();
    }, []);

    // Definir o id de agenda como uma referência
    const agendaId = useRef(generateId(99));
    
    function handleCheckboxChange(itemId) {
        const newAgendas = task.map((item) => {
            if (item.id === itemId) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
        setTask(newAgendas);
    }
    
    const [form, onChange, resetState] = useForm({
        name: "",
        hour: ""
    });

    function addTask() {
        setClose(true);
        setOpen(false);
    }
    
    function cancel() {
        resetState();
        setClose(false);
        setOpen(true);
    }

    // Gerador de ID automático para o item
    function generateId(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    
    // Adiciona novo item
    function post(e) {
        e.preventDefault();

        const newTask = {
            id: generateId(999),
            checked: false,
            nome: form.name,
            hora: form.hour
        };

        const newAgenda = {
            id: agendaId.current,
            newAgenda: [...task, newTask],
        };

        alert(newAgenda.id)
        
        setTask(newAgenda.newAgenda);
        resetState();
        setClose(false);
        setOpen(true);
        
        // Conecte a API e o front-end
        axios.post(`/user?ID=${newAgenda.id}`, newAgenda)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
                console.log(error);
            });
    }

    //Deleta item
    function deleteTask(item) {
        const filterArray = task.filter((i) => i.id !== item.id);
        setTask(filterArray);
    }

    //Notifica caso o horário de um campo seja o horário atual
    function verificaHorario(task, currentTime) {
        for (let item of task) {
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

    //Verificação o horário atual
    setTimeout(() => {
        const currentDate = new Date();
        const hour = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const time = hour + ":" + minutes;

        verificaHorario(task, time);
    }, 3000)

    return (
        <Main>
            <Legend className={"shopping__title"}>Agenda</Legend>
            <div className={"shopping"}>
                <ul className={"shopping__checklist"}>
                {task.map((fetchedTasks) => (
                    <Li key={fetchedTasks.id}>
                        <Checkbox type="checkbox" checked={fetchedTasks.checked} id={`check-${fetchedTasks.id}`} onChange={() => handleCheckboxChange(fetchedTasks.id)} />
                        <label htmlFor={`check-${fetchedTasks.id}`}>ID: {fetchedTasks.id} | {fetchedTasks.nome} às {fetchedTasks.hora}</label>
                        <BtnDelete type='button' onClick={() => deleteTask(fetchedTasks)}>
                            <IconX src={Lixeira} />
                        </BtnDelete>
                    </Li>
                ))}

                {close &&
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

                {open &&
                    <AddTask onClick={addTask} type='button'>
                        <Icon src={Student} />
                    </AddTask>
                }
            </div>
        </Main>
    )
}
