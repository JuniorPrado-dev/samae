import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import './form_student.css';
  
export default function Cadastrar() {
  const [form, onChange, resetState ] = useForm({ name: '', date: '', parent: '', contact: '' })
  const [gender,setGender]=useState('')

  const mudaGender=(e)=>{
    console.log(e.target)
    setGender(e.target.value)
  }
  console.log(gender);
  
  function send(e) {
    e.preventDefault()
    const aluno= {
      name:form.name,
      date:form.date,
      gender:gender,
      parent:form.parent,
      contact:form.contact}
    axios.post('http://localhost:3003/sign-up-student', aluno)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }

  return <fieldset>
    <legend>Formulário de Cadastro de Aluno</legend>
    <form onSubmit={send}>
      <label htmlFor="name">Nome:</label><br/>
      <input type="text" name="name" size="45" id='name' onChange={onChange} value={form.name} /><br/>
      <label htmlFor="date">Data de Nascimento:</label><br/>
      <input type="date" name="date" id='date' onChange={onChange} value={form.date} /><br/>
      <label htmlFor="gender">Gênero:</label><br/>
      <input type="radio" name="gender" id='gender' onChange={mudaGender} value="Masculino" />
      <label htmlFor="gender" className="gender">Masculino</label><br/>
      <input type="radio" name="gender" id='gender2' onChange={mudaGender} value="Feminino" />
      <label htmlFor="gender" className="gender">Feminino</label><br/>
      <label htmlFor="parent">Responsável:</label><br/>
      <input type="text" name="parent" size="45" id='parent' onChange={onChange} value={form.parent} /><br/>
      <label htmlFor="name">Contato:</label><br/>
      <input type="text" name="contact" size="45" id='contact' onChange={onChange} value={form.contact} /><br/><br/>
      
      <div className="btns">
      <button type="submit" >Cadastrar</button>
      </div>
    </form>
  </fieldset>
}