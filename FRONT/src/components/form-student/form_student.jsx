import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { Label, Fieldset, Text, Legend, Input, Btns, Insert, Reset, Main, Gender, Date, Form } from './form_style'
import { EscolherArquivo } from "../pages/styled";

export default function Cadastrar() {
  const [form, onChange, resetState] = useForm({ name: '', date: '', parent: '', contact: '' })
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
    axios.post('http://localhost:3003/sign-up-student', aluno)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function resetForm() { resetState() }

  return <Main>

    <Fieldset>
      <Form onSubmit={send}>
        <Legend>Formulário de Cadastro de Aluno</Legend>
        <Label htmlFor="name">Nome:</Label><br />
        <Input type="text" name="name" id='name' onChange={onChange} value={form.name} /><br />
        <Label htmlFor="date">Data de Nascimento:</Label><br />
        <Date type="date" name="date" id='date' onChange={onChange} value={form.date} /><br />
        <Label htmlFor="gender">Gênero:</Label><br />
        <Gender type="radio" name="gender" id='gender' onChange={mudaGender} value="Masculino" />
        <Label htmlFor="gender" className="gender">Masculino</Label><br />
        <Gender type="radio" name="gender" id='gender2' onChange={mudaGender} value="Feminino" />
        <Label htmlFor="gender" className="gender">Feminino</Label><br />
        <Label htmlFor="parent">Responsável:</Label><br />
        <Input type="text" name="parent" id='parent' onChange={onChange} value={form.parent} /><br />
        <Label htmlFor="name">Contato:</Label><br />
        <Input type="text" name="contact" id='contact' onChange={onChange} value={form.contact} /><br /><br />
        <EscolherArquivo type="file" accept="image/jpeg, image/png" id="picture" name="picture" onChange={onChange} />

        <Btns>
        
          <Insert type="submit" >Cadastrar</Insert>
          <Reset onClick={resetForm}>Limpar</Reset>
        </Btns>
      </Form>
    </Fieldset>
  </Main>
}