import React from 'react';
//import './Agenda.css';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const Agenda = () => {

    const [watcher, setWatch] = useState(false)
    const [watcher2, setWatch2] = useState(true)
    
    const newItem1 = new Date().toISOString()
    const newItemDate = `${newItem1.slice(8,10)}/${newItem1.slice(5,7)}/${newItem1.slice(0,4)}`

    const [form, onChange, resetState] = useForm({
        name:"",
        hour:""
    })

    const [itens, setItens] = useState(["Butter"])

    function addTask(){
        setWatch(true)    
        setWatch2(false)
    }
    
    function post(){
        const newItemName = form.name
        const newItemHour = form.hour
        const newList = [...itens, newItemName + " | " + newItemHour]
        setItens(newList)
        resetState()
        setWatch(false)
        setWatch2(true)
    }

    function cancel(){
        resetState()
        setWatch(false)
        setWatch2(true)
    }

    function deleteTask(itemDelete){
        const filterArray = itens.filter(iten => (iten != itemDelete));
        setItens(filterArray);
    }

return (
    <main>
        <div className={"shopping"}>
            <h2 className={"shopping__title"}>Agenda</h2>
            <ul className={"shopping__checklist"}>
                {itens.map( (item, index) => <li key = { index }>
                    <input type="checkbox" />
                    { item }
                    <button type='button' onClick={()=>deleteTask(item)}>X</button>
                    </li>) }
                {watcher && 
                    <li>
                        <input type="text" id="name" name="name" onChange={onChange} value={form.name}/>
                        <input type="time" id="hour" name="hour" onChange={onChange} value={form.hour}/>
                        <button type='submit' onClick={post}>Enviar</button>
                        <button type="button" onClick={cancel}> X </button>
                    </li>
                }
                {watcher2 &&
                    <li className={"shopping__add"}>
                        <button onClick={addTask} type='button'>
                            +
                        </button>
                    </li>
                }
            </ul>
        </div>
    </main>
    )
};