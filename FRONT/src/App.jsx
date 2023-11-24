import './App.css';
import axios from "axios";
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes, Link } from 'react-router-dom';
import { Home, Agenda, Triagem, Alunos, Anamnese } from "./components/pages"
import { Topbar } from './components/topbar/topbar';
import { TelaInicial } from './components/inicio/Inicio';
import { createGlobalStyle } from 'styled-components';
import { LoginP } from "./../src/components/login/loginTeacher";

function App() {

  const myId = 1;

  // Faz uma requisição a um usuarío com um ID expecifico
  axios.get(`http://localhost:3003/teacher?id=${myId}`)
    .then(function (response) {
      // manipula o sucesso da requisição

    })
    .catch(function (error) {
      // manipula erros da requisição
      console.error(error);
    })

  const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=REM:ital,wght@0,300;0,700;1,300&display=swap');
  `;
    const telaLogin = <div id="pagLogin">
      <TelaInicial/>
    </div>

    const system = <div className='App'>
    <GlobalStyle />
    <Link to="/login-teacher"></Link>
    <Topbar/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Agenda" element={<Agenda />} />
      <Route path="/Triagem" element={<Triagem />} />
      <Route path="/Alunos" element={<Alunos />} />
      <Route path="/Anamnese" element={<Anamnese />} />
      <Route path="/login-teacher" element={<LoginP/>} />
    </Routes>
    </div>

  return (
    //telaLogin
    system
    //responsavel
  )

}

export default App