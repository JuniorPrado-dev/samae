import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { Label, Fieldset, Legend, Input, Btns, Insert, Reset, Body, Gender, Date } from './formstyle'
  
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

  function resetForm() {resetState()}

  return <Body> 

   <Fieldset>
    <Legend>Formulário de Cadastro de Aluno</Legend>
    <form onSubmit={send}>
      <Label htmlFor="name">Nome:</Label><br/>
      <Input type="text" name="name" size="45" id='name' onChange={onChange} value={form.name} /><br/>
      <Label htmlFor="date">Data de Nascimento:</Label><br/>
      <Date type="date" name="date" id='date' onChange={onChange} value={form.date} /><br/>
      <Label htmlFor="gender">Gênero:</Label><br/>
      <Gender type="radio" name="gender" id='gender' onChange={mudaGender} value="Masculino" />
      <Label htmlFor="gender" className="gender">Masculino</Label><br/>
      <Gender type="radio" name="gender" id='gender2' onChange={mudaGender} value="Feminino" />
      <Label htmlFor="gender" className="gender">Feminino</Label><br/>
      <Label htmlFor="parent">Responsável:</Label><br/>
      <Input type="text" name="parent" size="45" id='parent' onChange={onChange} value={form.parent} /><br/>
      <Label htmlFor="name">Contato:</Label><br/>
      <Input type="text" name="contact" size="45" id='contact' onChange={onChange} value={form.contact} /><br/><br/>
      
      <Btns>
      <Insert type="submit" >Cadastrar</Insert>
      <Reset onClick={resetForm}>Limpar</Reset>
      </Btns>
    </form>
  </Fieldset>
  </Body>
}