import React, { useEffect, useRef, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import Cadastrar  from '../form-student/form_student';
import { MainAluno, AlunoImg, CardAluno, Text , Icon, IconX, Adicionar, AddTask, DeleteCard, InserirAluno } from './styled';
import Student from '../../img/add.png';
import Trash from '../../img/lixeira.png';


export const Alunos = () => {
    
    const [watcher, setWatch] = useState(false)
    const [watcher2, setWatch2] = useState(true)

    
    const [itens, setItens] = useState([])

    // Carrega os alunos
    useEffect(() => {
        const fetcheAlunos = async () => {
            try {
                const response = await axios.get('all-students');
                const fetchedItens = response.data;
                setItens(fetchedItens);
            } catch (error) {
                console.error('Erro ao buscar alunos:', error);
            }
        };
        fetcheAlunos();
    }, []);

    function addTask(){
        setWatch(true)    
        setWatch2(false)
    }

    function cancel(){
        resetState()
        setWatch(false)
        setWatch2(true)
    }

    function deleteTask(item) {
        const filterArray = itens.filter((i) => i !== item);
        setItens(filterArray)
    }

    const [form, onChange, resetState] = useForm({ 
        name: '',
        date: '', 
        parent: '', 
        contact: '' 
    })

    const [gender, setGender] = useState('')
  
    const mudaGender = (e) => {
      setGender(e.target.value)
    }
  
    function send(e) {
      e.preventDefault()
      const aluno = {
        name: form.name,
        date: form.date,
        gender: gender,
        parent: form.parent,
        contact: form.contact,
        imagem: form.picture
      }

        const newItem ={
            nome: form.name,
            imagem:form.picture
        }
        const newList = [...itens,newItem ]
        setItens(newList)
        resetState()
        setWatch(false)
        setWatch2(true)

        axios.post('http://localhost:3003/sign-up-student', aluno)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

return (
    <main>
        <div>
            <MainAluno>  
                {itens.map( (fetchedItens) =>
                    <CardAluno key = { fetchedItens.id }>
                        <p>{fetchedItens.nome}</p>
                        <AlunoImg src={fetchedItens.imagem} />
                        <DeleteCard type='button' onClick={()=>deleteTask(fetchedItens)}>
                        <IconX src={Trash} />
                        </DeleteCard>
                    </CardAluno>) }
                {watcher && 
                    <InserirAluno>
                        <Cadastrar
                            form={form}
                            onChange = {onChange}
                            mudaGender = {mudaGender}
                            cancel={cancel}
                            send = {send}
                        />
                    </InserirAluno>
                }
            </MainAluno>
                {watcher2 &&
                    <Adicionar>
                        <AddTask onClick={addTask} type='button'>
                        <Icon src={Student} />
                        </AddTask>
                    </Adicionar>
                }
        </div>
    </main>
    )
};