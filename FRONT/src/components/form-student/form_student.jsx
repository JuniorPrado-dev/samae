import { Label, Fieldset, Legend, Input, Btns, Insert, Reset, Main, Gender, Date, Form } from './form_style'

export default function Cadastrar({form, onChange, mudaGender, send, cancel}) {

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
        <Input type="file" accept="image/jpeg, image/png" id="picture" name="picture" onChange={onChange} />
                    
        <Btns>
        
          <Insert type="submit" >Cadastrar</Insert>
          <Reset onClick={cancel}>Cancelar</Reset>
        </Btns>
      </Form>
    </Fieldset>
  </Main>
}