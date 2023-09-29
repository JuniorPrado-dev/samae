import React from 'react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const Alunos = () => {
    
    const [watcher, setWatch] = useState(false)
    const [watcher2, setWatch2] = useState(true)

    
    const [itens, setItens] = useState([])

    const [form, onChange, resetState] = useForm({
        name:""
    })

    function addTask(){
        setWatch(true)    
        setWatch2(false)
    }
    
    function post(){
        const newItem ={
            nome: form.name,
            imagem:form.picture
        }
        const newList = [...itens,newItem ]
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

    function deleteTask(item) {
        const filterArray = itens.filter((i, index) => i !== item);
        setItens(filterArray)
    }

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        }
    };

return (
    <main>
        <div>
            <ul>  
                {itens.map( (item, index) =>
                    <li key = { index }>
                        <p>{item.nome}</p>
                        <img src={item.imagem} />
                        <button type='button' onClick={()=>deleteTask(item)}>X</button>
                    </li>) }
                {watcher && 
                    <li>
                        <input type="text" id="name" name="name" onChange={onChange} value={form.name}/>
                        <input type="file" accept="image/jpeg, image/png" id="picture" name="picture" onChange={onChange}/>
                        <button type='submit' onClick={post}>Enviar</button>
                        <button type="button" onClick={cancel}> X </button>
                    </li>
                }
            </ul>
                {watcher2 &&
                    <li>
                        <button onClick={addTask} type='button'>
                            +
                        </button>
                    </li>
                }
        </div>
    </main>
    )
};