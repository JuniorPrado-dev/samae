import axios from 'axios';
import './App.css'

function App() {
  const myId=1;
  
  console.log("Hello World!")
    // Faz uma requisição a um usuarío com um ID expecifico
  axios.get(`http://localhost:3003/teacher?id=${myId}`)
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })
  return (
    <>
      <fieldset>
          <legend>Formulário de Cadastro de Aluno</legend>
          <form>
              <label htmlFor="name">Nome:</label>
              <input type="text" name="name" size="45"/>
              <br/>
              <label htmlFor="date">Data de Nascimento:</label>
              <input type="date" name="date"/>
              <br/>
              <label htmlFor="gender">Gênero:</label>
              <input type="radio" name="gender"/>
              <label htmlFor="gender" className="gender">Masculino</label>
              <input type="radio" name="gender"/>
              <label htmlFor="gender"  className="gender">Feminino</label>
              <br/>
              <label htmlFor="parent">Responsável:</label>
              <input type="text" name="parent" size="45"/>
              <br/>
              <label htmlFor="contact">Contato:</label>
              <input type="text" name="contact" size="45"/>
              <br/>
              <button type="submit">Cadastrar</button>
          </form>
      </fieldset>      
    </>
  )
}

export default App
